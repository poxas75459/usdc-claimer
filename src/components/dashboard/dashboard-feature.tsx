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
    "3FYGDASnUjqKKsTgh4Ghm6QXMb58Ri7oDbD3Zo751PsAtEhPLbfnvThy3zwWYkzpEe3DsijPTDPwDJP792H8TyFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44ZSpXbK52hKxwmwSHLHgqhrPAUFzzj7McJwF6wGfEGEZ7HFwf4KBf18hRM1Vv5srNvDi5qaMRHvCVVebYzidLyt",
  "key1": "51bBU8DYyEx8tkwyC6sBShtc1vhXknYcKj6M5opuAWnpR5nHgbppvbugeNgGnw1brJfEmmYhsyB1aGg9M2nL3QA1",
  "key2": "1243yDdMbD8Kc6fd8NwBi8X8L1xkXHiEN9qVxBKjD6WX8HN22RVLtpUGhdV6Rnh8bMemEm57yT8Nwq7iyXSHoK2G",
  "key3": "4ErGyJgtroDkFW8qDZcCDCgnnKWsRwLG81bNPyi78WkcmUmX5WXVYwNbKEaknZQYy3AA9D1hscuyx4hxAeaVgRSF",
  "key4": "4T4C6HCBxjj2PaJYDHhfm8hW4AhRSAgeitYwddu3dbBq1UCzoKj2cGN4hbHBBWZYocU8nm3Vd2LEFgBpiH2fwhrV",
  "key5": "csW845aJwzZDmdFhwPJGqhTqdVcdTGnery7zG9gqRwmf4iFPiw4BGduPQGNqRh4AChR8ebHrLdAUy9oeyhR2k7D",
  "key6": "4e1AoudjaScpRGzoNWY2FZeVqMWkW35rvv58fph8FLySvo9cKTR6KXENrYYxgtUvyjJywofRSEkMzkfciYN58p2g",
  "key7": "3cWpMd2D2iugSxje64a26HzvQSA94AcaNALhHcETH2bWar7nfQSNyAAEUzD7LSyQXcRzbiqQmc2jC3JWUCfwMdSV",
  "key8": "4bNV5usfc8KembyMqwHv1yRdHhhZtmrimDai7PqeiszKcGtgAdhwECx6c3T4AUYzu1TaPG7dF7zyM8fgVyDNuS6N",
  "key9": "4b4u6shnNe5gpybKnCYXHwbKzys2vR4Zx646ed21dWbJxXcvptS2GH3m1JHRWxQaRvVaDKv49g7mjCnsUTDLqtnv",
  "key10": "LYvh5kWyCz5PYU246CTaYG4X91REgFe2BuNjwuPwKh66eVbfYNgiwLk3XAssRRs5yhZ63ZK6uX6BvvMZbFAwPbx",
  "key11": "CFNZnS7WTag5GFTT9tWj2czUo4Vp9MdDTfaBixx9iciKKbqwTQjev9G4A1ktKodcTrVqdDdCJY7cq5f6R4NeAKs",
  "key12": "5JJ7xKG9fgkxs3sz4xFKd9EABd1CG2otp3fGVpx8ixYd9S8uPeyBm3UD4T9j55zm5At8zL3WZnL4dFGmAMK1eWTW",
  "key13": "5HsAeDe9fcqcoumG7UwvEQSpMdf3gXLCZUe3BGPPn1hMXNiZrc9vAaMgNkumxkzGwrxmcP3epJyNm9T5nSSfdWde",
  "key14": "2hewBWhZXGntasD6LbJnGY5CJhVGGYBi2w7EzScxYrHncNq3YL6VKXn4MCbvZyNwLdAvWgnYDtTXmrVvwPsiZUwv",
  "key15": "23mkXXB4ECVTJUyuv3hkWygGxkttNkPdcs71x1LrFi2KqVFWAr1EbxXMYNtnRzA3mL8Bd7UgEajcrMbcQ7DJNN7K",
  "key16": "2zPuv7T1GWQnMsjJqkfyPt4dJ1jDx6f4u4oj3bAzTq34foTJ6QiTyzmM7fKk5kWgvjFXZ8Mh3zneWygcNhCdqA43",
  "key17": "4xmxo9chHeYNZqZnSrKVPCHBxfLQe2qPYYffphrbH7ZTQEEpv2skuE2Ft3udgbi9YXygSc1gMkXqXVskyvS2K9P1",
  "key18": "2351rKE3LcLpKZCb3k9acPVNdeFtXpiatXhDRvcDdMnKihDt7TzACJwoGFn5HLk1bvoeBURCTfnEMWRyZaz89iWU",
  "key19": "5TAjRYnyAnujuYAzztgAi1rqjfyY2RxGjRCtsyecmyngddkG8PMs6KbGwrRBDiVU4CfUBzj1KMnD3BLXmE2foefo",
  "key20": "5frCVt6NkkemPW1Nrp45iDzosmGedw63x37CfdDh9ZsmrbzcyBoB2YtojNo5rdDdw3cXhUSXFi6i8uCvUVEBLxZm",
  "key21": "zKxANEWbFkRHMTJpYjuYnD1kgfbXayP3VLEh5SeP6H5MTDXafeepvasFe8TDKb2ssw4ws5BHN4WzWcZnRHMLbvd",
  "key22": "5TZuB94vzgAKzrsxyQ2GE5pQTQXy3Qz2i8iYgjL9UaJnrUdVrnATvtRNRcafsvx2KThoZZjYgxUjnNaZ12PGhtDb",
  "key23": "2kidFVDNCPr9j5HGhQeuAvXZKpH3SqhfvCC7ws23pyXiAkAgw2Tw57EBLXBZ8Mvc5tcv3HKcoFrYUsbJWmFYPpDD",
  "key24": "5HzLgvGP9LEq6obLNn8qUT8wRaA956NxyGN21PUqiFjrdzxNbc59uZZ5VSUneSwcKGbhX4mgHB3sy2LCTdRRrjX",
  "key25": "5quae9J8r7AftxpBZKT1YZYUq7X5KoDTG49D6Hsruyt1eV8W2zVsrznsy8zp1BuXngk31nXFuYwfETtJcKyskSK7",
  "key26": "MAFe8cGJsVAmjSXgGphUzLCddMhj8CpYyyBE9FhJHEfZ1HqbdqTm7fmvyVm7B8DzYJx7tGUV7suAccZajKdRTCu",
  "key27": "44eVFdpwMa1yj5UnmhhX4VmKuZ27MyKYRzRsLoEdTKC3r8FV7RDxuPBdfTT3RQTt3GmcQ6egqZzZFhsVApVZ9WrW",
  "key28": "3UVqx1yxg7XU8AsxE8YruFtYk7gcPz7WhuKvpD1beW8fAJ7DjmPMrkGaparJxQmDQZtedvDEaVQEPhfGneisrnXj",
  "key29": "3sNxhJy8j5ASisGuLxdkFoJpYx3wEzTAM4dtBjULMquhc7n2T9qCBEVAXNdRSkwxpnfRTNHYV73VZc9wmMHNK76g",
  "key30": "5bRyBMTVjDzkyMVRmdPqKZGZHiGfqEev5tZE3f2kcZfLZ25Nzp48LkC4xDQ9485kqDvxK4Yi9FvfNq4EMn5ukdrt",
  "key31": "3PUnRjNxNHXbRqH7ocU9VgTTejshyUriCrGgvrKHSbgLZEGYxJtuCkwDo2KoNBWL9MtnVSmUBjvszH7DkrLdn51b",
  "key32": "59yY9BN7VGVSncxoiDSdQrc4yCV5A5HHnamz3qdukoBGuQqkxRovN4ypf8tozQfUWqmrF2FMizmXrprxqvCFA96y",
  "key33": "3JY7aQWagGQwPRXx79Xm3NV2dxgH37h6n4Jh1kJVQaBMb7KoTgbQu8RBicfcD6oCt82NJH5ReMn8wjWARrEWzdmt"
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
