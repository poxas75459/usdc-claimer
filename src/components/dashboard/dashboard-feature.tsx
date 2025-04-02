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
    "3sY6oVnEXtk2TjCMXLezbtTEBed7tB3HCPFB7JbDXvZmWPDVVrh58YmdNT8DVJ5C5bSVg9v19ZDJCMhJfZKZ56W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rDPyfm9mPEJ9m4gNH3jhFeNZm1YKnRjjpx5oqf3aKxqTN1n5iMg8i33L8h5RtJHGquy7k8pzuzouyteEvzjsbJR",
  "key1": "5fNsU6ZieLbGbDBFUJT8A6T7z2A6JMk4JD4Y7eKPomynrCRYyP82SwX7MwoRRbhPB1mdF3uQQEkUMEWrAFqQZFjE",
  "key2": "5BHUeoXMs653eMj6opgLjRfPyCSb8HKVZuvbMBEPcQpU132RxXUpYBCaZwxkzXCNrzLbcE9P46VceCbCifzW9iQd",
  "key3": "38TUESdpz9S45bQVptTdeEZwGvtSzmATi2yeVDAHpD4DqL9wqg92RyrpuixTrswG11KnryMtCTqDXFAsfkMSQ5UV",
  "key4": "4tGvgG2RsHrQuXSfxRmXKq49u4UdHDxbPqi82HTE3gGdKkbamAy63umyPtFKZXCFPq8JN3cMn7bWnTiRK8yrxqyA",
  "key5": "4257aNokLjnJf2MPqW43XDEXR2DSJSVb2nn7B7ZE4NezR49Kdedanrj72FxGDzi4CHgUJdYX1K5PmPws6cM5W3Hd",
  "key6": "VfPxmxrfMog1xgN2fK8iYUjtbWhi3JREzK3TAdARYjXNX5GZwsaczgTWcZsbjnAaF7jAjt3U6mVwmETmE6AKoDD",
  "key7": "3Dscfq5UdWKcm2W2FAj1v245RFJurLsc6vUHBeBxGbRpQtyWsBW7iWkVPhzA78StvKNUboVoEsmemuaYrxExX8EK",
  "key8": "4pyNE3JyeirVX6S4FLZPDMTA9Gpqzvk29s6gKyUwgeTARARvfyYCxL53873kKkrEqJMsG1KyYYHuL6dGmeLpK2Jg",
  "key9": "5hqnKRMf5THxoHBJnj8CSaiXLvycBGB1HzFdip3fyRLLinBiNN1tn4ZgGq5FSFkCfq7qUTYtUJcZAxFj3VvVxmuZ",
  "key10": "2gRocQMNeH8DBoPkdpoibH5xbtwYAtYLykwf3dyHosMyRqFiSVgftMUXnqcEXyFB2rrA3vqWERWf2zQYBja1QW56",
  "key11": "4pS4XiELcZ58HrfmbjXef4c1F3pJEYf8kge4S7f4zWF3QDtTxq42mM3G2Fq22dqpDk23DzHET3gKXY4DB4kQfjG5",
  "key12": "23ZUV4Fd65SPVuLvV6Ma24nNaEM7X9vFef1gWskn4D7Syu7m147VzAKxiGZXq8oSMPna7745DdqcB9zonkA9fFYr",
  "key13": "2Nd53DYYs13PtfCjmfyVwBBYEvZ8NqvnPYaT7tLk9EqqTbcvq2qbSMCcyaBSGAFbqE5JFdzFYsnSFmD6BMjmLVA6",
  "key14": "24jQrRqc5dZtFJnbETKM3NF5Lu17D6UGsBbEoaTepdXgMerTEu5pWA7yZMQD8ZY4q2t2LtUPAJjvuDfJRkyKFxv3",
  "key15": "44g5H3NEuQVwthX6KW2YR7o7dmSVWEzkcqF9aTC7LR72swfCaMuJwZWuKux3XkzZJJQSmcARntUhqtgS4r9NFzmb",
  "key16": "4eEQza3T1shKoZSgr8vm7jF3JvxwKjFMkx813msFstABgttiXvqxu9pfp45qhgJK4DrJNykboWGkkuxrpdm335X3",
  "key17": "PrSXkmBo48YxbHaP61CkRW1MgPvPk7h61Wz6xKTPbGz8rkGWvKnHn1xNqSDQDDKVuYjd5PGDXHM1f8TrSoEzCas",
  "key18": "3av97TPQGY9BeFCdFHv9hGVzn3sGqtcozCZPvJpgQUBsuR29Ju3B2yWe5Y6LGP8vt7VKC4HRuqaMQAKW4zguH5Pf",
  "key19": "Zw1t4EFy6qfBWPbDeFSWKCmec4bSVgA9cLbsqU3YM9rvF6PC6XkZZSAMpBTFVUHXpPC7aCjVgT4e2CtjhtiLVDe",
  "key20": "5tQNVmWjGQi4jfE17nPFA9L8ECrRFiTUtmFzuqvNAMxGPxvutuzmDin5BgXTdx6rQ1zDj5MGG5E7aEN96HhUrQwv",
  "key21": "4Dx7urikZVPEpfXVZ8xxFoSAPLessrv3TfrcNS8XnDa8tWSaJQBXQp4NPTjHhpYzGLnAPAjvYiKLhNYnYmgD4Pw8",
  "key22": "3UEurw72QUu7CkMXKWDqHQauHWQfLeEpsV6CaYYJoaAMyNkyznA8dxBJcysDg61MK7fsY6kERPCAGJvXkP7uztDm",
  "key23": "2JMCD1SsXuZP4EjmvLd6WGuk4LQh5fL89jLLtpGFSCisqXvuTV3TmVPQWvCoJndaJ9ydhpKuXCTtZC6D6m1Ybh3C",
  "key24": "55dXiR6S8MNU3iX3gWjnz9boJdTY1xpqitAcTJTUqQLKZyz4YUmANw4d9RKovP4vFghp24bF5EV8prDaGUQXrHpr",
  "key25": "5p9KPoqmFh9TCam49jHBTR3i1nsXdACtwCjZCFw214PRfFpQeLvsabCcmKYbZwEcP2G5hEq6fSU9wCq2Fk5oaZ9S"
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
