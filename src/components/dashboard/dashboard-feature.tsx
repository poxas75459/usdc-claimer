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
    "4WTpJFaEbrUs79guRb9Fkr19hwSnWgPTMyii8UWFJ7z3Dtar2X8RFnfw2ytfUXV24HAry6VmbWVKuASphTi3qXrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oh1evvQ3oe5Q5hAHbZZe63AQKKvEQNFm7ZAGEPXEQ5eRZMmLHv4e1JrNkvPadzoaz4RrzwmVvJYLECXhAtacPQ4",
  "key1": "3ZVLxsvT86mmQZTPmt64WcAjxEDVL8c1jajtrzX7xykUDGH7GbyGgvKGrKWqwmjBqyKUJjGNFnBxXiruP2PEFyMx",
  "key2": "4LfjmjkpQudSQUHQtu5i2sBu19R6qoeajYnvZSDctpmHfBvuTMNukcXoU33B132Bu5Ry6bnfku23gjH5DLB3ekLk",
  "key3": "1rjPv1rvwT6bKuELGmzrk3W5FHtRPnhLhbSEcrAkPZ9QRKntvaDxLYKEWRL1oVZQwKaiD1w2ThCa2jP1n4Lxp1U",
  "key4": "5QUNnmVwJxD2pX2jmrU4ehqeAKE3PLrynwi7kmao1sFZwZ1PKd9e9avLrDcooSLyBxVYaAuX4ZR4F1XiKa4x4Bn1",
  "key5": "5yAhptmRm8DndQm3M8AFhm3nrZeeHGMJZUCMJM2YrNXbumpJxE3szM354umKGGE9jU7pgn4pD9VEfe1h9waN6UzZ",
  "key6": "5wvBvs78xDGpGhfobMYvafvLpL7wL7M4ozai7LEucRQGrmkscogTwYuAfEC8YQPFerk2WnGeHq9vF3fNDGWDYsCz",
  "key7": "2pqCMNVJ5pqHqFBae8J9PjyMXZn8iQzgCooxWLjVG1o4MrWkwpQXKpRX38bDGMMcAVwVLfJ2GefpxE25pcmhGGbd",
  "key8": "3BUFL5hHtirHZJWjGkJbbjtkJcJbCYn7gutvQJPWkreVqrZJp9JbtDacM4aeLWDoMvDFF3aQd3Vmv65LHB8PAoCN",
  "key9": "JT2zpeUdBtPHnrAM9KonUDAiRR48h4uCvbK963rx2rPWGCK2Zv4bppkyRZdn9eHwbpRxHTauA7q5qzw1JHtxfyg",
  "key10": "3p6eEFgJpZYFomt2dmSD9yu8qzHs3NR4wzP5fRe5BYgF4mutdo98EEWXc2e2nmW7AFK5Q4E9gPrHmoxks9bEqFV4",
  "key11": "n1NDJVZJgiVzyUWbXPGbybF3mSXF7TEZ2aF781WgCF8toHrXdsBxwDKExVKpo9Ga7PxfQX9qubocYZFfbjYroYH",
  "key12": "icviYa9k59aWvXzqDhkfoQ36raEfP6WVevcaisUgBkiFjYnriRFJkQFvW4FKGpfc6n4ewAmPLiKtyq3GnjwJQhk",
  "key13": "5crqFzr7LNW1myQjD87vUTbBwp6AxM1MPz1Yveicx4L3ERFMVVnnEkjqcdfoBSewoeRKYuabkicrzKW9MtHs35h5",
  "key14": "4hrPsMpVvJCongyLsmFUeusWgxw9qCA7dn97rDMXtWtnirjmL8JcQDr1FrWKYVCjRAFL39Cm7rRdQJ2njAAn4pbS",
  "key15": "LZgkY1jwbDauBZ8ky77UogqP1QBM4n6NVSkHiATcNRVyDKALvUDTSZBZcaNjc1mfkfD12RVb7V36dVmzJ3EuyPf",
  "key16": "2m3qdk8cpeSar1LoACvmM6i52ZkPBB6CQHtS9UYGs1Km4DR8hEbCy8rcF64RNffhNKCECYeci2n2uv1xou8RNLZW",
  "key17": "2TSDkRNHsA6vtU61whx9LvS9ZjTLLo6bG2nTU8isBhMMGNYgTGkPW2k5FRWrTbau3yBpsEF1GcUGYzA3fP5tWwr2",
  "key18": "64B6E3xpiS8YPcJtZ3T9SCc9aXmyrqvf1cLT1GFjqosQZm3WKs5VtCs449PQuRMNe91U1CwjZPMfsemcWGJg5eu",
  "key19": "3vUp3BnKhnwatp5cFpxnvQmehixirWC8ybkrpftXNuFajQybwXyw4jV3S8bWp29XKt4PHP4D5ksiHEB6T6Ggf19d",
  "key20": "4Tbz7wyUVdmNnFYWDSPhaVXktydhSAa6uraZc2ir9JS5heew8paKsYEnN5v1z3w1XiQdRpA9MgVft9maZ7KU11j6",
  "key21": "3ks1whWWGowx4HWRYLJuyFnvfvSWw2haG6N2XULzkoV168rANVYaxafyhfjTmz2xaREAuXwFWFv23zFFbch25uLQ",
  "key22": "5TmPsk73nf6Z6mGwDN1PytTtPMpUxdaDtiZkUHC2ZSkPtgnvyQmanDKbK9AdsyVq89qgyQgnDQbDdd5MzjzbXQJD",
  "key23": "3o4PDPZ3nq9KJvss1VrZbQj6cK6wmd6VT9tA8eU7QQpUffA9fRJkMemsEy1VeAjsnR5BvxgxPP1kynXWwA7hYRjg",
  "key24": "3RdCYVBmdW8HMEz6ay18tRaiRgpkj9LJkjhxSTXEHHdNFkHT8cPbUKmk38j8R3ARtpYdKjLQDYUZ2VgFMRkcBTMr",
  "key25": "4znmBpSdgXV8NyKeptnmiYTJPwZLm1Udh3whVchZP8UzNaGuoYBd9jJFF5gS8revpNhLQTBZWxDtfBEsw2D9UHE8",
  "key26": "3TWfiY89MMhkfXr1EBqp2AbCSBuZSrxiCLrJpqgo21fSFWPDpLqxKzRjxRHUW6PJGYcMTjivNkxKjdHVmXhndZFw",
  "key27": "2H5pHdNyxGsx9fsbGoKnUZY3VNStYNj8xpsRFZUBPFogeJ81vSZb4ZYWL9NdZXq2Exchcy5QMF3yNDaHKapK9DFh",
  "key28": "PFYuaXhFo5xJvu9YZNj2Y8E7xJysw95L9EXCRdifjV6wXKgVpbXLmG7s81VGgPpHUcvZkfJepNh73GhExYHWew7",
  "key29": "YmXk3RMTU6weXhFUgVGzvKdP2RQqyckKRALy2EPM26Bv7SwSQGa62KviANUUERJK8EnfnN8oTBtSRgm1Cg74rku",
  "key30": "2XMbELr6gKMnk5L2bZSGNFvfiFYM7Ch7ixZ76ypXwHDoDDatjsro9xb5kDfeNxQVUwUGB1DW12bHkZAWe1M972Mm",
  "key31": "2xasaFFUCN1H9AbQzunWLYHo6GmYwc5Rr15fqBK6GmQUoNDEKtBX9uC2UBUVjXAd43so2ebgvwyhHkB3ZbPUVU74",
  "key32": "4oER6e6m4PV3RVqLGMrL3hcb6657Rr8pQW7JM4nJjStpJZog8pCE5tdG81ZcushoHDs28EiyENKX8UPWBjfULrs8",
  "key33": "2j6fmia51NPmRC47zN8sHf52P1LzYPZcgZkU23h9PnpbB6Smyk2FzTuwbdAqWTx3Lfzs1VxZw6XPdfqn1gtWn9aw",
  "key34": "34W1e9HZrhPRwU8CRbJiFvpqg91roaMafFX8oumSxv8s54WSNDUvJGBeTNF4Fhw7MMo8uKsW2NiZW424CW7iNAm",
  "key35": "4fp8Aqeu6yLFnNesSbNAXXzuHqi5JutKFEc5Gr2KfnWbBEZtXuMktGwhS5oey2JUUjPhScuSQdNS3aVQh9ayxCCW",
  "key36": "5vo4coRyjwAPKSEYhVgDstAh45VukvfyYH9kuB9Bo4kkmzYT7Xfqq8wPgVeGxmP1eYM71KDNvz9v9wuJeB5A1tAo",
  "key37": "2V41eRso8rMTNwfT4hH1zcZo9hRPjWAzSPkMjnUDktSTUA3U3WcRJZ7nm3ATrAhFyg7wjejHZDp3wmk6f8MMHfDy",
  "key38": "2XBFx3ZB3HoP63S9p9npPcCTYkY9UVmFdRckA2SxptzztT8FscghQ52aCVNDM8wzvgwV4nPaPUfbXUkDCPhPk7ZC",
  "key39": "5Ecp6uyav1U3mnVLJGiHtcjiYAmsoo3no2Zf6CeVwYJqGRzvZD1sesgPK9A5PiAFpL3Gf3LduzDnByynvCZi1A4K",
  "key40": "3CSvqjTpDKDLgSqrc8hsCASSba6wcnwJYXWACSRph842EjA6BK42oAG3qFLpT2A8aLQv8WmRvpUhSLHtpGDYibP7",
  "key41": "K38CYZb8cc2S9oPqKrkDMcveWtK3o6K8JFYhdK1CqvWGmeYR53RvV8BEBbpHmqVQL7nP6n1Qw3F49kvCAFZnR5A",
  "key42": "5DePu4a1uEwnGux42ELg8qXQ8LU82gwQP4SdaHHnreoyz8PMAHY3ATWB9Qx5MtjUzCTujKJxZnUqMDoNy8DjCj4m",
  "key43": "5CvDcgptERDm5gNDu5DTUxjq1MTYWLE4MtTnBB4fekhZ9MES7r4E3DLNjtZT4CpHXyGGZfsCuYfom9y5aNQ4rzQY"
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
