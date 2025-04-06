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
    "4aydhLC68ocfPzRSEbtm6TPmT3Z9DUK2khn8hvszWKfT1mAdTD6Hcj6xHXUVBttR1sr5vUJdXS7Jeo4aBVo2zS71"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Va3C3SAzATxHyzKG9KKh5hPL7s3sWLKMWRtSXSrFv8XYAwPqXkYfedtik8Bnq5k2X6DMtbwFyhCHCX2UKiskYZj",
  "key1": "jcT9SyZ6JaYqjhGkpA1qtUG9983aA7fgsEBZtZpj1MbpjvbjHD3CStSMWHesdUgkvwroQ3wsG9L587rmJvjbAnm",
  "key2": "rBJFV7Tz4kfaniD1GKQ9427pMzG7nRVghYRkZ3THf55vrm5We4uWuok2Vm69eL9wM351Dnbuoi496gbPxi1Rfy8",
  "key3": "2UzFEmbxzBP65bibR3yZZXLA3oRbioyVbfJYTb2hZYW8wTsudiRenDjj1jpwjgUdngmpPPJuRKeQWnM4m4nhPpVb",
  "key4": "4wpuLLgb5A2XuNqc9a2KQmjemCZhBQBazBHdznQTAwJhhHZ3Lw7LtY4yntbGcN37barUAAnHjAikkq4o7DEuAG46",
  "key5": "28exiyomurRog459Kb93MYpb7zCBc4g5vt4YQiAdVYhehiCLVQM1G4nMXcVMxYH7zMTBg5hxUhSzMomp4RXSnu4i",
  "key6": "3iMmSWoTdio3NPnMVLXmY7fhAeqS42dZTJimR7YhtR3wERX9Km3usEfnJidBK3CofWW5Dt5eejuyEyzViVc8Fnoh",
  "key7": "5n5a9o488erKvS6wsRnSNzT5rFApxGKoK9P6tMv6uwJYc43dLBw6XhvLt7nHwDAQjCveRaxjyinHToVumMvnQ5XV",
  "key8": "2n1w7cXLAZNm1gnf4WNbwJvT1Q1NJyG62dnXPFfwX9RX8CSJuph8kbEyXFvGchBQRRfRzDeUHjx52WUBiynBkLwk",
  "key9": "qyugGhKbx61JaJsqReN9Kvc471jciub5dfmHAWiU1RcYM3S2bQigZEY8AUjYq1iHR6v88bypRszqPtRpZ6aakBt",
  "key10": "57m1NmAcq8Yui2Xm2C1L47CujobzrbrN83XNgWpYPhiWbYGdWJ3EyRLnc57BvgkMTdq3bmE367D1qq8JL3nwUKzi",
  "key11": "HRzgHgWLMidHn7tUwJ3Y5gde2e6Vvvm9v1Y7PT4TK7KUPqbv71BpBEM5kmKyene7xNTdVti2Si8VzVkoMweQryA",
  "key12": "5HRspH3LkM42wysN4LtdBQiTV3CytBS42DC92NFBc3yBYYKk6UbeRraW5nXhFcDMFs4oK33F3ZLzV7kvRAQeMmGz",
  "key13": "3JcVbs72B2o2kWM9QEfCNLBhk7t8tUZMzyisaH4Ms8Y2Shuzi6Fy1uVgwAMh6jbvhmVrJ4kqfsNfXvAJ9NC76wkU",
  "key14": "4chUGoa26eJVr73D6qkUSAb71D6pzEz1zPuf2ecLErjBPivhBHYe9JT9Bwf4mydH4Nq3ZUeyksBYajjRhPcGtx3q",
  "key15": "3xhBJ95JRvZ5kEQi7PXxptKzmuUx8e1EVChLCRv1ARU7Hby1AYQw3okLFt8zdp31PU9NzxJFhFEk3NJZdme3mAEy",
  "key16": "3tjz1Sz9RCx4WtFHBFEAQF22yiwdD9iYmpRBmYd3XpAL32Q7zxi6RS19MNbfeyciZxuNArnX31C9Cvv3Lx1kYSYG",
  "key17": "4egP7CCNcuyGPsm6SVKVFRx9mx2GiowgUHWZSsaDAZdhWPMYh22HvYGTdNp3F58tKDBcQiDUuBmqJBqPfNjUBN1m",
  "key18": "2prhvrmXcw56EGbbMbxh1B1kF65ieTMEbMmV1iVcwUhpxiWxZFSE8nv9AgZtuoK6tph8CCkZvCnJWBdUVCUuprZn",
  "key19": "5boSR6rRJqworC2St2eh9KAbKYZJzjQi1UKXSanRWJwuNXAqw8xEQ1ctGEFqaGbZVKMWtwGuLg7RMeSbxRuf2nsf",
  "key20": "4qNYpWVGdq9eCtE2nBf3E7JuHNynFsarFh1Yixr3QuBdteAfvskqAJWPN2J5H2md4cCerLhS6E4m1or1KS48ZUVw",
  "key21": "4sbKJVLo8rt2sQBbzUSp56CVDeAnSE6pBCQaX2EWi3wu8jvd8PEydAf8EEJJv1bJ7U51Ua127UwttkVAHBqVjSgE",
  "key22": "5XHXyBgE8TsgcdtoSi4C8tAGwcaEDE9o5b9nWvMQKVaEC3sbe3LDj1tg57fnTm8heKMhuWr2jt7S7UaoJEntdvVu",
  "key23": "44Kp175D9oPLhqPj3RRMs2Wgv23Z5xdXJwQAn7joQ6BqFiVZkem7XmW4hr4cfq1NQiDYZfEFzJPDAiN8fVPKTKWW",
  "key24": "4yoTnoEx7P8ssn4amj1VGyitVhfSmYhNaRcqikkTSm5hPjC2rVXQTRTjKsDxcA68oC1yMJEocoGt151N8oa24g74",
  "key25": "6V72W21ZAm9fUvK68MLinAnZQcpxMsgfXtWg25io6Ps4X4fyuCYQKDEpGw5ioTMbYb2bx2U7vXAMWESSXHuQjrT",
  "key26": "3eQ57eBXxYYoDmL2DgfUTpbS27LgCxZPTv3uQG85irEkK3CG82ZFiN4HkQUBJCEVX8rXnTFnci22KEQ3ZvadnxFM",
  "key27": "3zxMuTwcUZhvPZFRHjPMFFLVdNyus5eA6zqooE3DV6se6tBDoN7sviYx1iUB9D9dvQ5irGn8qrig7C5SysUcdYoz",
  "key28": "2BCK2wyZ1o5yNyM7TUh81hJAXQfzd5JupHkaXwmJ95dyGLG6QyxSr6qmHy8gtup4Ae5nxot5uTvkE4cFtanVnTGM",
  "key29": "2EzzvXgG7GjaczQjgBmwqbH9d7hYf7YZbqcTdTc8RiDdRr4LEjcHuRgqNX33NXvPYgncMCkruJvAcajhnR2TZwz8",
  "key30": "59trXxYdxeqx539z6SktGYCDQE19ALcUMYaxuuuq1EP3Y6oLKhHGNZaghUwP7CZydsznBw7C3ccdHZC3odFWbLYj",
  "key31": "MRbKUfjiyKj4S13t4g8bdhLbMtDLpQsH4VjUjjoJPuC8yFkEqQoKTv9x9gk1n5JshokaRXVzFPmNP6mp5mSHkqk",
  "key32": "3PkM7FvosdMHexEq6Zmh6SkZHLCEj8wfcHbnSWXuZUipSaN9i6LxCihy9tq9oh9qNcUnxhuSM2U5wHYPCf4w8pek",
  "key33": "2F6Muj7bMopXNoEH4Bh5BZsf4TSfyTGvv73KBfgyHLZbrj9xTN7fCpn5ZuLma6yZ7r2nahLwpMAC5g9YPgp31cc5"
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
