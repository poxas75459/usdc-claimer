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
    "3UhGwBQsQtQs3ThMG3t8tvRvYUiMPkgZnNRwGR9obW9b4nVVHSd3H9NKTriGNJpq6LoUM8QFH8RX8QNpwpKE1dDd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PpfJ2SMASAdiKBtw776wVFqmPcW17K3v7YXbpWEiPRe3yhPYaruthQGo71dTaDBfLYexUuRYriYzt2mJ7hW2Q3G",
  "key1": "3yE6zELvL1ZPbqiwgtHqwMJ8GjSZsfHdYq8mH76zo65YRQN8HgK8JMsEWhwdeGRYL83QTajdAXz4RZ9p7L6BJB8w",
  "key2": "4MEAKa3XU35tpqsUBGw4QYmrswqKtZ7wtS1dXV33kseWA19isosLuHg7NQUXTRBjJ6MFMB3sVWLMk6wSL84EuWz3",
  "key3": "JWjrRqovX6Vopj6AxDj6EJouGL5nJCeAtXFMCuCpgvj72YYx2mihH8VeSHQehAhqYf364qSWBTznXgvtgu3b9vg",
  "key4": "26WCTJozB2M2Dz4aATT6owWkxDh1Z2U2HPW8rPwQHSfxyyz77UNTd2Yxx7mh7if97PcghypSQKjby7NsecpDYcmh",
  "key5": "64PXKgD1Rd55MXz3tNQvxMVBCqVE1xojaEBk4zMUuiS4QmeEC69dRbCFHcdZCWBvV3z77nyoAUmM4MbkUwAcDPtK",
  "key6": "3UjdQ2vHdWYU6aULphKrwYkzSeDFAQHBSR6kUbYneRgiQ91ebZCK5K4d2ADqQahZ7Af4D6yiScHLX6kbUr2r5nif",
  "key7": "3oGoo3ZyEQLZwk5MrRi8NStQpWoof7Z1rZf4XqsaUo9budoWWDMXzxwFvWRivv9FzGYLm2HkEfPB5nKZXRqTRe3z",
  "key8": "5YoUmAww8CUAEwTYtKMPFCdZsr4eS6Z65wYx43tjmjYazKr9eRjncaAYLhwMperMs1H7MBDAgCyv9HQLi7N7385F",
  "key9": "2Z2WKqkSVd4cnxFrF7qPsnUDzEvSWmLMVPHEy4c9qxwC5ENZfnc6VExyNpPCRSQC2D8fsdLvQGfTuqSAwq1e9tSL",
  "key10": "2KE6378kuct8qXVmoUAg8iNB2Kobp6f4oSgjD32a6td8LSUHeRbxY4eg3qE4eF819UXcUwU6HE1hnapfvgnA6YPH",
  "key11": "4eiquVgbi7A22iTGCEfndsiAv6vCg5oYTnqR7mP8Y7JZ6WvPtgyUP7kttXbsKKqrtjcqTgGsGLTfHdzj8WufAM9m",
  "key12": "3MibHpjs3fzvMgFVgA3xdxAQKaXADweEqCqKepS9hSdycwg9Ct2p2tjaWGCKCVdZEkdokU7w2tGnwTcwRrVKS6Pv",
  "key13": "qpjytZeHBJxf93um4ETohP4mSVyfyBP5a7qSQuDp7CJqBtNgsyCsMAbHyLxcYEbdM5GfrcTXpBRMR8mYeeXpe8w",
  "key14": "4MnePzozCnnczLKGKDiV52uAAXdctfznyb4ESujNkvP8uGkMtvBJr5GWtHfnn5umdg57Q4cSwYhpmX1CTQJ13CDE",
  "key15": "5P1ESEQNdiYLJ9KVdRWXAh1DF4W8myN78BkemddiYDUF5Had5aonEmQFjsuVgjngdcd6GtaE6BKxWti7LRTVtxd5",
  "key16": "5H1byCyiAHc6gLTUDUJWeaehQdVKcsikPyzasfdTNVM1NedfsdA5pDzRpMMuZZecxzk72DjYWMZScUNzCpi2gnEr",
  "key17": "z3Kxz5Xwi9B4PePwDo8FhQEnDBxSTNYv9XhWBN2JNyT44fVBM7dqA8RPuoPfTbYJNkmZdhH1ANpaJon25XvJ7dC",
  "key18": "64Cdt9ezPQ8LVmtawPonYAVjSXfKRTwZohPg6mmkuWQujKJXkKxyTzE3bZLpMGK9A2tsg8FznkmmS8rcKhoZ8X8a",
  "key19": "5QoGQK6JBR7zMsmECEgGy4LBZhU5Zn8P9dABkzrTxXqxunumGZ9fU6tJnDuFATpZgv4k7MayLAttf8vVZpwMYDyX",
  "key20": "4e9NTgcJSFTGYB1EEKFeESvnNPGNKPjLBoP1i64z5yAKHGYsiop1GjqKTqKDGmML22qZpaYYaYLignmc2y1Sz5gX",
  "key21": "2EUQu4pUZ9LoQzt8kV1EM9HCv1v2ovhC9sG6V937xnzLae2HGFLuv4zVZ9wWraCjx32s562zJvc1BGhYvLWUFYGR",
  "key22": "2fsCiaQqWsCcvCT3JD5iw6bZAw9qqcXrq8wc6wauNbtoiJrxHioUwn8znhqoRvELDYwa8oBHu25PTan19sXZQKnD",
  "key23": "5c9i2dYKGGGG4jshU9JTQUgfic7FB4jbY8TgidE8dtKrRRTgJAn2JVd7KkDwwWzx78kpz3Bww3iuBiHpqTSMbCUb",
  "key24": "4EHeRDzEo4XfS8UojL7zXjVsJ9Dad5sdYjN2WysXnhpgkyG4r5DQca1puZdnVQvMAHTAL5ZHTi4b2LiSkpATwdFV",
  "key25": "5eKettzUGyinhTN69TgVEiBfPLL8mvQ18ZdsJZyGA8vaGNABzS9k81BUyatXhRRVr4ei35sbrnghK6DDqvcenSpa",
  "key26": "rjwk67L8bbMwdyvL5MFXohgH7e9wRJ2Ma1KWw3x5Rzd1zLRNr63Ho5gUioAhGpKr4JpBcN8bEs7ibx7y1faAMXi",
  "key27": "4JWGe3UAzUbSW1QiBxzzXnDxJSBrjWXiSoEkV9CNh3a754ZZkXzSXhG9g3dFGVZpuDsNkBmVLojMcL9hQSdXZvtE",
  "key28": "4GuKvdqFDVmvMYEuqrphZMAYecLrKA4fLDY17agvxS5LHXFPNyWM6oKuem7Ps82etbXqsbSjQLH4PiGhk8hbjMT5",
  "key29": "3TMQwRdY6hLgzCgCbqMEbFvdytjAuecFcZhSWWj9MLgjXFZBRRKXr71Pi9n4P9n5JrATw7bmU4kpnimRh9kp8SYn",
  "key30": "4Xp4nchkxhrYpWmtPgEDhrfk6HXFbsCCjjZKs2nFdvQKoKt4BnrkuKxGn3qZs7rKkwk87Cz1Fx7KV1hkNyArW9GA",
  "key31": "5oqjz6iJMQN3KbDbrCRzTrsS39RoU3SURYRWPv1Xi9jmgNLmiTmcqPnCWr98sxDM8ivNX9QU43aEugJywAEqrmLR",
  "key32": "5P1kX4Xu59E4rizYx1oUyM4UP9xCs2has6No32EDZNwfHUF8g387Kw5gDroNgnSk2vfwubFKtrAEtjcrRPd6EqmP",
  "key33": "2gZon5xHZuEwyZqJ4bErNYMEFwsAmcJ4nSy2g3Zc62TFyyatNXT1yVqtcgaeS8vkvG5YGytNtt6p3bYVrweVe5qm",
  "key34": "Kknpen8PeuDSbCbbCm6as7GSguRg8Tkr1CFFzGXanxJHENw9bSWyXWwLmZxKCRQpToot8z7f7V58ApLasdpe5Ar",
  "key35": "hwxCVSV9wDcEhWcGp2iMXJPKkiwpCYzzUJvC4xJQLWH84TPkx43HuH7BM8cPYMDUKuT7DbGLTA7tfDheXNuW2wF",
  "key36": "3AvVT5sHwsB1gu4gBwh6Ykv8xeteT2TPyfhsVbYNKfEXGyVc8BQbW8EBR1ByNcBZS5nATKsUpcs4uRY8Gf46wD5r",
  "key37": "3VkQ2QM4ejS5EvR9fwtMUqEmVuuUphHzdFjNBNdqYPVn3Ey6FXH5Yc1ZnBycCKnADhDT8cY9Dm6isyLU89ic7VJg",
  "key38": "fqpGVTpidBGoCkmYGiC3AwnLQmT9LdDgynuq84C86jVHL5NJsSYig5GZhvxCUnBTrg8peA8NqUwxioCA9R8Es4b",
  "key39": "3ygdDdcVL2cquo3Z11A4MtM6jo2TQdqe9ih2ifP1wrVjpz4HCXnfHoNnj7dbPVMrZvXdyTDxXQDchBStyaJp7Cbn",
  "key40": "49iAoAfJ39MRpdYPSHZCVAbZ6yJSip48C2HbsQDxfhkwC3h4JTdDHC5mJfPdEyPJgMaqZVGqYEm3ZukhfpXCLem4"
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
