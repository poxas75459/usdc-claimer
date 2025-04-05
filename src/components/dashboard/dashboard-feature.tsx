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
    "5ThJ7aaxQ1Y7NN6vb2NoECirU1QUmE5gziaE7B46oLKDCA1G5ciVBEUET2PoWCWvxTEENimRAqikMyJxjZQ4FMuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t4wpQFQ4tkzM8FM8LhF65WR8UZF7KssP3mq5HEsR96SeXVms8fWgDvF9fVZQ4uPTFvzYW1dVsPSdbcdYqdi2hSa",
  "key1": "2GaXYkL9tBNxegtsEkPT9xnKB3MDWkqbwmyvzeFurSFFz7kkNeYqzF7pk1DLmUwF7NBjnMmARvkAB6VJubeQAHac",
  "key2": "3eP3hd4WfTiVT5XZroxA4k6Z7F4tXRpMhTx7N2MRbQtd87G77PQqeDSHh8fQX8VZgN5qFChqDhqBxjZQMLHNp6eR",
  "key3": "3rCwcSEMQDbCdPAvBY47svPGqKLbhW7Phi2ZiGBfo7hL4zb87XEefs1HJFP28qXpUJ67cwUkWwjc7PdJaUSYdPtX",
  "key4": "5gJw9MEvuNtXJUaC664AmAUH14dPbiamT4aD5JuhBjc5qGBYfraGGLdDpNC3QH1gBxCzFBLp7oPYWm9kYoJMymNB",
  "key5": "5WrBpS4Bx4D1g2cvFmCNtZG817ujB91suzmXznP1XteSWt6Td79tJ4fsHtFzULqdLjV8m1UCUzNT8c77SjyBKNEx",
  "key6": "4DfVhwXAp6isNFkzG24vLkLZmrZDhz9YmzSSxTv7F73dkf8Djh2gGjUpqufpjxtjYNwXHc4b9BuwwdSEmuJ3srYK",
  "key7": "2VavqqyjNjHWoUDtmY9f8cKJo74stpu6ULuqAXtCYDHnDKtMb9rexWVc3tzegkWApZ9kP8iayxEu7iQY5B2nP9vJ",
  "key8": "3UWzNddHKLb534GxBjVae8nyF5QMikEoojbXGny55tA7L4iidcGE8D5jNtstg57y7vMPeYkYo7N1t9eZeKkGgviW",
  "key9": "5yUdTaZmgEE1wnewGBDtPdiA6dUPJBnckM5yY5cQ2BYGaG5DQ6nAu7H6ZDHP2FZa3CyjyN4wfGXTp135gSTH9r3W",
  "key10": "3XjPBBoFiMQHSE9Nj6aGq4KDLf2WK9pUHAfp1wdsWNRmYEK1sUD6bhVv6qGYDnAv3uxkXxYM8Pv4QD3NodcdRSF",
  "key11": "28Zpin5unmXt7B52fw9qDaRxDoxDCkSPT6NVayC5XqoTBWvserYJi34YRoRAUUrpiUy4eBf22U6Bt79pKtf4DXUA",
  "key12": "5opwLg9bkik3BDZLr8rq2xTqfaz8wMMnzALdWv4xdubxB7YhHfdiu8s9Mu3TDCWfEQXCZ2Kpe8JtgmxF1Ppyi52o",
  "key13": "5hvjM52PKk2HJ6iv8yzpyt1fZQCfYP3SzTAnSALGKwRwALnBPptuwESSx1KwMkCiAdoFPSfCEzf4DibkhGbPetdw",
  "key14": "4q996cmyapELanHBtdx56DtcQ7PPcizePgrJui3CoCetF7w9B6B13UWyexbLKzw6cViYuoCwT8FZ8XwkGHnQ4Lpw",
  "key15": "46bvXq2qDmzpXtsxDq4BvCvYfjAceLnReX4zTD7KLtZ6gmkFuhMJxkDah9s5YdTuY8APonkK53YxyALWZUkng9du",
  "key16": "5aP42mmAkvM24wCriH4APu5Sr8CZKGndeVyRpkP3sQMe4S1uJgMUwZBghKDjDKR7DHKMVPJRd1wL5QnizrKpzSLv",
  "key17": "2F9RsbTnaoWBWLXHbkTti6UYBLGTnsfuUaJtCkdJJWKGW9YZcGmAm19w6nS8XvgSEBjvuqUo3G7SmUgPF7vWwxQP",
  "key18": "42GhGfVJ2Cfz78NzvP8fsZLyNG4TLy8xbFsoSFRhjfFgJnUZJd5cRCwhtjzeJbbZQrcfvzXx9yrDgwQLTJAv9qUA",
  "key19": "4pmwTo3mCGfdrffevL1n1BBiRjDfx1Ao3srGz3vfkEXQt7sX7peiRytkQfrhyNPfN2wBoc4EeGdWuaG8m94MT5Cc",
  "key20": "3xRaVMqwdFQSQ54wXEdZpZN7Hx961mFkw3fwcffnDRQzJnmxB3YLTBuK2vv7HttMv9ijxkARYPFAZsSVRcJheoPC",
  "key21": "tAhNfaYPfLCTHzb3uaPiFwaU9W5xro8tao5DatiAf6bvATjUB874HqTUNpHhyzEZNboh2N7ocvhBKi8wmzchaRc",
  "key22": "3NoxYMPPENNH4a8PkE46JLh9hh7SZ1Nkpi74Fq4v6x2u7ESRzwHqRnYQbQpAfwF2e6avnNjcSNkbYfo1z1bHR8tg",
  "key23": "3Qq5xrUFxC7wCbptbV6ccmLPM5pUgsSHJXbYuY6Dwe9BZ1tXzydvju2FcLGrqtZrKmzVF3WhPvHMLKPi3YpSksHs",
  "key24": "3HksuiuFtcECVTcu2HoKjXmh9XwhEnz7M92V4eqfgRahEB25Yf3wUouEibos2JkoCE52XbHeJYpXVXJspry12Bv5",
  "key25": "66CwmDXWEQjVVXsfswy1inTDQE5WLVu16N2oDyXtYtKti5mJeiJMQ4NFoTWhFuA6jySaCwvGVXi37D1WiUWnoBhm",
  "key26": "APXTfbqtR9EAFrYrPhjozN4KhqLCmxM3BnvdhZUX8aZ8kWEu6T8MjHhReopVMFo6FwGzxCMnk3ojXxEmWgA3eZ8",
  "key27": "ZbUUc4Vh3ujSdnfAq86LHqKAozjxNTS8Nfo6iRVJi5hWe9rwXgWfYLHiEWPC6PNUG1dETrBocWZVdMkUWMCECii",
  "key28": "43ZJVvrd2szwuLZWfQQjDEeUay1AEwa2CNbBo1v5JEwJdyR4TBqRZKMntUTLtAvy19gQK2isNsqrdCuvHXGLtYmB",
  "key29": "4TnSAxViWocdokrRfYfrtjN1tk7n7ifDFYWbu6JmzFsMrYYYVj9o2nBPrY3gcsqrfGGhtCK6CL91KZA73MH5PRwE",
  "key30": "5Pev3nk2qDrB3irQWGoGaWwnuez79PyaQeVThNV5HKpht19ZGtCB5gDcrJ3ARNwN16xp1TNwf8qTf3mhA7h522Fb",
  "key31": "4Dvky4LkSvLcm4sJuSGoa26qf4rpUGMAYzmua9CyefJrec3Svz7G6nP6C9ye9q6ekcdbj2AYdczEeygtadh5ac8Y",
  "key32": "38wtuhJVyR9yeYcaLEXEoVjrTUBkaFiZkJS6rTeRw4pcymP9Qdcveh9J4EtgGb5TkQf64urbXd1QuTcWaPLXYy7f",
  "key33": "21cSowd3QxoA4A6SfM6hGpTq8uwDBqesX3jFNT3WaJ9sKJoZFYaRC99wLCkbFsv6kwvncpfwWbSdZAC7rPwrPUQ5",
  "key34": "3yo8PFnvsU5GAeHVCxthsAZPdWffkNc2chs9TGo978nuHHJX4DA9ynDin3SvNsReTbiEyakGfxjNz8m621zL1idU"
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
