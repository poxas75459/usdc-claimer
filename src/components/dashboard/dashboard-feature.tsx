/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "53LB5ezqkg56JDao9TGvwWBC6eFobotfXW9EfWGSVj7xYkYDNZkMu6eiknxzbBumMpYcLpeKTcY1ou1FH1VA3svr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24etyfYGJibQLPs9pZfiKAHWboxvbn9s9dhbyCfUZXoZuosCwbm9EQZ1wfoYn6Jh7hBUSRjdkoXFLbeDeWpyGDpr",
  "key1": "HYHDYVVixLJTEdZk5e8A9Pa8Z5sez8N37ENeGSreYEAhCS8JCNSnQeMnU4VdyUGCMsZ6ewLBhFt2X4WSUaqgUxw",
  "key2": "4Shk2jxEicS5Jfirpz5Ty4avUzZKHY62CFFYu7ceBrSn6aqUEyv4ArERL5brnpoSuXiv68VeP5Te8SQ8wzTRfmpJ",
  "key3": "3auuV7nJa4ktrqzS1havPpWEczv2gTguxdNZ6k39L1AknprPajV6M1RhH6UaM8Bk2YxqHcYehNBJXfhex5dTRvnc",
  "key4": "4XfGWYKZKvbgLL7L6CdJieeEw5FWjLmianbV82zRYGehHEHyGYng36cTYr6ES2je3fbiqsyRjcAW6m5SUyYbMwoB",
  "key5": "36ZkPcjYCXXFjHQ1e8yRDQPX4HVM6wFgdhBPv17iCs53W4hYyzcPGrzio2ufKVjPZRhKWZNFaeaThp4bvqcztuTq",
  "key6": "3ejECv9iYuhrn2h2UMUv73mgAo5voMPhb47kghiptzcFUjdLXHcKeg3HMDq7zCTyF5RuutPBaaVazcuuuKbgcLWD",
  "key7": "2ZKXwLV9WFAFRKafVUwUVUvvbLkjrk9T5WHxy8RXE7CqE75VA5oUnmZmnySWRHdDLZTMg9r2jdhgxP7C1z4vxmRa",
  "key8": "5w2Rh44ATm3WAQCY3ikjQBefhUTaxf91KL7AhMhirYcEiARWrHRCqEQTNZ8qWcPrfNRWEBqjUbpC8iea9u1iNhQo",
  "key9": "PjGWcBo1H2tUTs89uCyXSXsNwzDCpRCPPgaa14HLp9woQneAGzzy8iCt7cEVj46H2xBJ3QcuBVFtUtpZu3f5GCD",
  "key10": "4qEAY5PuJwJav7oJHkq7aCS822RktMLYXRcAWvBNGZnQvxyZoCRyM6HQbWbSxw93dQrJoWmK7rGoNFWpELmzCVQa",
  "key11": "4zPPemMi9fcDdBJ1bQR7FSmww6Zw2FXQ8yVNJLJSWdHT7uNE5Q7EhK9kzYZvXMEMNvFTuo6facEQz3wf2GddHm2t",
  "key12": "5ZU5Y65tBRheqQGikXar3o2YWsHVKZ6oqoaxaAAspPd7snbEXffmsi6JRMFmYbA8K1mrbjVtEMqnH65mTqquUdeT",
  "key13": "4PN6iMHWLrT4vMEXq7Z8ASVocbc1QTaN25HDJf8XeZQTbpWu4N6AZEFV3H3tuaDoi6vnCwRGajNd7Mj6EhHoSpN",
  "key14": "5NDnhUq9c2tEzoiVcJeYg3ULTo8MnJteaW2eWD4DDaZUvBZGPH4d1F1RvBGuRumWDfhD3VpEtZX4dyESVGjPj3F2",
  "key15": "5hvWykizJYx6o5mUQGf2YZKw86wZN26w1ibekBwPBZS2iccfLSt92Y1aSxosTPLfXdNH5dQNWnDk56weybfZvfuH",
  "key16": "3YngR8qmCarqB43TcRG3TcPyyXWP8RTjVtdww8y2wAVAe8T1tPCnPxrHxi4GPnqdmHjCR4UzUgakzLmhDEQrs9D2",
  "key17": "igqF6ox42dnfR5Cr1XTQAj3Vui5WqVxgRE8t1hmnXWxyYeeD6mvbekjZfYiKDyxXZD9NopFstKWPiaRcK8oBQXP",
  "key18": "3wiUt15cbe5vf4t477aPXLaoV8Q4oox9CpTyyJCkwn438r4rfeQbfnjpSrag6AGPvm7xhLG1pb8B4JEPefvxerHt",
  "key19": "r39o2aCbAgHA8rTa2CtdaZEkMq4sYiwHkP44xhRjb12MQJmE8fFD9FjW7LKDZ8mbpnk6RhtxWh28dwnzFxvKnhM",
  "key20": "336zUA7SadeH4rWpkaqKodSNBrXf5GtajY1VDvq1bZUtigLDrvEVnRR3FPFfHR5HNwAZY3ufGwgcNJvcqYPenojp",
  "key21": "5yr7w3PDUvv8nXAX9PAd4Dmscxxos7STZFyqPFL1jqwNqM85wYbwYxFG5Tt84MZpsrRQ6UhiJpVSMxsPVugPUxEj",
  "key22": "2sp8RGNH2PeG8Z5kj1XzJvJ71WWP6AKouU6aAQWRntK9vi8YsUo4GAAfkF5mgoEviKCgj8DCvv8MvvJsXjdMfWR7",
  "key23": "wsS8UCCRo2qXKwYXHZpU43QmEjjXadtosYeR3rWjQ7Jrra8jYR7G1yTgquCfi4J7FoCVEyokWBx6zW6BFBa4dXq",
  "key24": "3ZD4t7yLGUGPZALwom1LDNVUv5Lf7M9W6uHThN6x62VBY4dFP5nXHDLN3U8BGU6kxqtLNdjPrSHuGcY5qb1gMBn1",
  "key25": "5z4iHG8EgG6kCz2CudqpR6i55vXkrQQfK4Z2rf6PaA8twf2Nqez96DrwzGmqUnYqwkhgamTehEum85N8XDPBK3pU",
  "key26": "25Jt8VngxAi5AbqyPrUuZHp6i4ii3JJQP2axwQrx2hA3gkUEiCmnpCLmFAz2YddwiMzNzEmGp2D47VkwyEnwHUz7",
  "key27": "53baehpS8W9eg6j7qtCsZEohRhedWE5ikUNPxPwJMWJKSvuNz1XQiRuQFrE9Y3PBsj1GVvKDidAe5TR3fJb9Xjjx",
  "key28": "33YVx1L2J7sjnpnax4hGx2vpQrcUkwWL1EKkysLHFEkJF9ecaiGZnkKHvtX263HU4G6efJVexe4u8kH1KG4uMQmK",
  "key29": "5k9xs3W9WpF2wSzF2Rh82Xyszopznf3CKDdP2Z4R8JJK5zsqgU27a9g9MZiRZBRQdzmj75hWG5JpgufaHrSd5MFY",
  "key30": "2q5HJAgBJob7useDqKZwnvzcE7hNzvCtC1ct5YJQA6kcQaRVibhx3ddWxDKkE6dX21kMM7mqWxJS4vHmCdeqRYPe",
  "key31": "5r6SqTnBEyhFC9tVPwdMwzeyPoSqLKayMEBQ7YNyaqNKk5K63Xv4vp1ztEsqHGm4o4yH2ojFFigmyij3XnCKQd9C",
  "key32": "2h7VvjNX6RYUD9Y56KVejyhu9v1PXvm6s7hCjQQxPKpmJ6DvmfStWbs2MTmKnx7HtcYgjiWJzNs1G15EPoaHgV8a"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
