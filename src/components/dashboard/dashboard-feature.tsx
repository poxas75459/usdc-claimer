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
    "9QCqWNav9am9Jjer1JxPmVF6Fuy6vZXUHFAaijwBMgVL1zWbWkP9BuJTBxhZxuyYXGXd68cwefwg6r457erxm6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35naQyL27M8HAZ7SDy6RXxbRXcZJqce5KHVhWbdjJunv1UG2GHSK9eFZ4t356MRrHQuMeRXKjq7Jpmpnxj2uhvep",
  "key1": "7xDCxaY3jd7hbrFiH1VVS82MakyBSdMXnmddedkyTVXsM8V7K1RBs3tt7Lo7VvMYVCCTgkQMm1VyKM9WLojHTE9",
  "key2": "5EFdkDHQ6Wn2KNsHMaGx7pqKNVMavM2uXH3W9XiuV8QTAmjFABBeHzQLmNNhE82USLXU3C39cjetnZqeGDgPj8rV",
  "key3": "3Qybgj5YtaqzrqHmDc8fMS3z7DSbxur8M6U67ksUe58xM4RqH2NQyRmUhf6R3H1468ymyDiXQfEP8sGrVfumJLCL",
  "key4": "34bRyf61aP4ziEL9uWoFGbPqBWx71SuXQaqtU3mkfv9hxbmhQJLkPg9esZ9H3JPYnC2buL5F1nALyhk7mjCufRKD",
  "key5": "37Cek3yK5jCG28GmARjpDfLiBzabtxKn7CAj7DJ3HFmvcPjaUygBvcMBDMZXHSbf6K4PbSQV1wXhgYCZkGdEhpvq",
  "key6": "2LhhQWvG2oXtuBprWL4JD3MPnfCwRpM8BhHo3btCLSVR9raDKhtj7UtoYNfA8y2KgEwn26N2DsBab6DTVsvCmg5s",
  "key7": "2Zk7M5w3yCaog8VZSviWcH9ZLZrapkmZccD8SuuCLzBN21cYfWVnSSp1kQBtEr3EiUcRfS1yLj2xAiRAwduQ4NQB",
  "key8": "5MPdiXTYZDP78Smqmo4f7pLZ9i9eHqL7AGCzswN2H8fTRucLL6G672CWiWRxqVyHdb66RgT2r94A6CmgBnntATAr",
  "key9": "5eQ1Tau2pvrNLVcap6GBWjqQmbdQxDC2kU3kor6kFZuDYatud3nL3G9WNTeNch5UwwxA6M5HtTwmAd6jrXdumDi9",
  "key10": "4Sk78bVczKFvJKM1y9635rbyAdEg92Zr7rtAjCz7Zu17n517HjZpr5ST5HXBQpeieRF9GXvgGj1UFsby1szgBmed",
  "key11": "4QPZpfiak3m34DmE7RKhEN5v31DWwQMYe1U161eJHezY1F4RSuYMvqtdEFApEytGH1DLh1P6k2pfv8PBKC2KSCZ2",
  "key12": "9rk9uMAR4dhVciHRiAE7vhovqW6WSm9uYSfvgU6WuTQKmvwYGkpTZkSUVq2V2T4XcCkdsbaHaHmEsp7GrDKgEY2",
  "key13": "2ULKjxz3hEfnkxa117wKdTZa1YcyVzYrTPqZJh3EVtTTCopJEv1N8WicEmaW3v7kaBpZPbVCfeUMzukYWkLobMAV",
  "key14": "4XcWAxygodqP16GLLC7CToRNEJVedWADLhefLi7xStrd1XpHCt5yoHEEjexq35eywepimwoBxMFSJytCHqPaht92",
  "key15": "2BNL5YwHFwk8xzh2oCJQxWs3Pybpbt5oG4NZfBKWdvU6f4rsTvhE33RUWWmRsh6a6yUgPG4ZVW8Ysp1TnxgKsTsn",
  "key16": "5sjnQE8HeDPo2PThuvB39AgwutifepJprgrKdDSjVuvfGL2wBQaLb1SqbuHjeF2AguZd2g7Xo8d6RSz9boztzGuC",
  "key17": "2wDFenYKfCcfh18Zrx5NKkCLGy6jiZX5xBm7RHxwNEjy1JnZVbGY1VBfoBNSshrmZChzZEQDjqgHWgbqys1g5yKs",
  "key18": "5PZqjfFGCrQBtYJQRZnCQAVkDwi1QaoGpYurSkwwmWxaLw7JMUpoUb4MCiEZa6ohirFrdoBCJoRQewS2UQk2GGs3",
  "key19": "3A17j96JUsSJ3K2dXBwsRJEkPJdYj62hXm8WbyCUs8cvTHdEruDKdgubJDmb4T1BBgsmoukVzgmzeNZEjK5DDKum",
  "key20": "5WHyXqbCv3nNsjxMyugQniwa6Cx3o2xtMb5TtmD8PpocWk3gd448DToN8t8t2SzuwEp91P2bsQAjVBLZtC4Lg2f6",
  "key21": "5rh2BVLArPfMzZdKKDifSHPofVUXsf2d3hiYdcEaZEYfQD3XRbiKMCHcBhBfsbSJJVqxhP1mYhpi6xxVdsTgFR6a",
  "key22": "4VdLHRA9RPc8rXV6qfdKF5CqFtvWwR2AaRBsww5TFFPameN2ki2vxREzTQLPaUmqJjuhbH7UjLkw5jLTeXo3bZyv",
  "key23": "4zdE5Q5ZwStfA2Cu93crDvazGSxoaaQSDVcG6zmKBprCMbEq8JWqbz4iVQRnThTABNAauG4o6NmHE7Q5M1MDjm1K",
  "key24": "5Jht9bqbMqdQBSdXb1EafzymYv6Ty6FUJrz7WE2k4FPrWwbWAeHYjYSVHMQqW4tevTxigGCuTib42VZwvWD4SXo6",
  "key25": "8YzExDxGEwJf7XGTuRUm5SJbKY3vmnDarjsMoy3ggAAMhDNHXzpXHBvpcj4boCtnofkqdQYozCbSFw6Jy1gTA9G",
  "key26": "31vdKnqBisdcKaYg9HFuMdAskPSoHyaC8GHEWxQnKyPafHRqrptGEk9EHWKqvPvczWK72TTsZX1u5xkxtXNgpKiH",
  "key27": "2Yf7CNN9VtdjcYZXqnhustPrDRto3fWyEkAvTiMrZp1hgWagwCzrDvoUz6SgJ1owQGisMdu7KzNGBtHtGpEFeHB8",
  "key28": "5vksQQ292B7zam4LpPeWWWdHsnK7RZJiaLfLVwh9eq6hRvNvdeNr6B4xZTSyD9X9LUzobcXDKnVjuqGuhAJQr95J",
  "key29": "5dC2UJfgR2TPVARRhHcSSd2bfNPxNfwgq15Qi9F2BvLW4t4taoNhkiivViPe643BJTEUv3yGEhwMf7u2NMLmikT5",
  "key30": "buroDvKb3jCe4FB45DxYfwhjoPbPLx4JB4qB5VFX3DySabk5hLnYB1NRTKaxnCnK7T8VRYmQeYhYXDqJQ84jSDu",
  "key31": "P9mG3RqWTyDAGeLS3HZKb5TpwmRD3PPF32EUNtEKGZBPeregMcRKuytNfs5sdLNLM8k3e2RpMJRUCztve9RN5qN",
  "key32": "2VWc1nECU2dchaBwY3sp8MghfcGUg5JuPDPdhuHSa5asy1pMLARUPcnQn5GwVJwc3oKSAM7R5X3vzxn4TUd2SqJt",
  "key33": "5arvr48kTmsKYEFEKoHMfivTmiQ1JTaAJB3EmRRs5Vh2Z66DBR2jUCEaRbdNSKd5cVUBAHLU4NjA2h4SBHzoKSK5",
  "key34": "99frJwwsMts2dtMe6v6meXK59A2bxWhnEKkJkNgrJHEs2RskeAgs7gmTqCVpZNDwTtSwFcFng38Ww2cUwnuq8KW",
  "key35": "5pWm3z8wRziuP35BM433TZtFE2FmA9ZtvnvKEuS629JCihGSeoRtUZTVZAb7ySn6pRX32MYZoh15kUUuBksQEo43",
  "key36": "24aTqKrfVCFEXi2y65A6spG9Rp7btoK4NknqtaCMKZ2GCUgfZWe2YGCPvpb8ssBKWseoawkMV9nckKb7nUZgHFgq",
  "key37": "22XMWCbE1rzRRG2wrsFZFTTCDH975aK4QJ3noz1wNXoytd4RngLo4q7qzm4MtEWT5BHsKffA8hLP6FaV9neLdrHg",
  "key38": "4rGZ7zkRzAkYyR1Ko6TbDoyagBDcgq69CTpmwy5oXqNjnLVAf8UZAhkUsN5kg5mfrSecxGovu4eGWhX1ZmZMb8VC",
  "key39": "5Z7NeKZdRaaxWU55incJH3pfUWbS7C5YgkeEyL8fGi2gsvAFFngWTgybNpaLAQqNPW6thE1EQczjpMncZuaV5wnz",
  "key40": "58UQD9ZGFcPs5UCrunqvHm1TqZiQLC8grv29fg4FyzQDuRgDCBERR5Sx52y6xQ9JAeSo8eJcZn8ffiiZ8dRcAMHc",
  "key41": "4pRkDoWt5dEsod4cKhZ7QxNp2YpSBbTiCUhoPhuxuztNkVMKHRGF4KJsHgpC3grGSWLyPJ6PDzrYzziLeGHzxPAr",
  "key42": "3oyYBbYwDLRLNm6wr64EwpUxYXeYu7fVjHwTGTgLRZ4fXcg97fQNDkaN7SG8aNsQXLKrVUoVNLmXpVMFfLGPLCjC",
  "key43": "3cRfFLqhtq8n9GHuzc9JSDzUoWSSAou2FiD2Fz4ZfTsFjYpxFs8ivuAPquP3yGxbqCHMMQK5ciYjiFQJe7jX9QSF",
  "key44": "kLsNdwpZZhCP2W1T1QyahRCoFdTEoK1sWQvnkXuGeK4CB5uf8nbWmi6JQFSBwMB8QVg8kjdao3h1DDmZLK2d4rw",
  "key45": "4sjU5hVXfNQvSsgGbkNWQZn4BpaV6TCiopKnw3HYyr7Pqe4miJt1e3bBGfq9Ly6rHh3yaTsmKpT7X89eXsjh1eFV",
  "key46": "3bcvs5TLB7ZNwezVuiXXdGLWjFqQTbqP96FDK8wNXfTxhe2shy5SYe9crT7ZR6qmsQFk3j5LXemivSXNx9o4BEaq",
  "key47": "3eco6hGAHnEtEvMdF5yGx5x4SSLwibYcvL9dDXaXPgX2jMBaKDjeUwn8mpLN6u2ZBVw2uPX6ntiQnLsDs2wxCB6",
  "key48": "3KnNgvCFXhD3pPWvUaZW6xuszYr3LZoJoVsc3C2h1zm39YQzUdkyw5v6EPb4eAFxJJcC5wPLePGwezTgcaua8pBp"
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
