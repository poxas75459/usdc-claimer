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
    "4JkhXQcK8EhwC2YQf6q1y1LU7TY4XCTPZvMsVibZjFqrKauH1tTTg6ZgF1YDfi5KcAWEfvFf9aLGEd12rtuSiYmn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c9TA9wi5cySjXHMxgr1HUWPgLfD2sjwmBeacHc62MDWeBhMC8sa3jTD2Sxbac7WPrDASESE9d15p4JnuGGCvhac",
  "key1": "ikUUxB3ukQnNTXLVG1hKxkUmAsLZ58GzWVWAqrUQ5HcKMfo1xayw1GwXJkPZiAo3Uhbh325MMzvfwY36gctgenG",
  "key2": "5fzXDVSMzCo19wjsXgRucJdSPBA9LzHn57mooAHq3QL6n7FKvGUeCmZoyyBZs8z8uSUoQkSQUAxfG9TKaP4oA1Q5",
  "key3": "fGeyhnsbztJwowHd6NPh3RWcRF6EzfnZueP21Z6PK96NgqH9zbu7wPnp8A47yPnJyFLcyi2AvytEzP7YUPcPYRR",
  "key4": "2LibAmQsZ6souVSjd6Tm5abboZv3yoA7ERYmqqtyMZLzn3f3wJdHETmdeNjj5A1bT1tAxhVE8fWDyuW18JwtpgVV",
  "key5": "2zhMYqWJt9dQUXJw8y2G1kfLTuHcypS3BFq9SuPDedTpuktD2YjjzXcF928uieZj8spf5EunHvJnE8H3CqFc6pzC",
  "key6": "4ZFYRfoCcprd52HJXsPjNigqJqbpKFtrhatm5JU5TgcSn1fRDdhQH3t9uuoQvaay8MpZbNsrbmEKdcgM5Cw35mYL",
  "key7": "3sVD8G2k12q6Z9ZtXm8Uy1TmpKQWgnu7pardKfB2wpSoLJBio4rGE3ZSyE74rcMmSbsYVHp5m2Ea19EG5jJXkLuX",
  "key8": "3tSGv7RuPuvpRxw8CxoHGWeb75RAWUMkPpF9vKx83KkovHzkJ2eM9VStphTJcN6y2pdnxJAXcrWz2XCinjtNz2my",
  "key9": "2ESNBcCHLXgByWRHS5dM8nDgrFeVMnoKGsxcJqoNZf9yFfDSPVp9UZToY1ZgaWKe9STpvdCGaY4vBT4GdG3cw8X2",
  "key10": "4A8KxdPdqqUGrc3XNLbmkMkisov92JNQndFrMteaFYHqNabgq8EuQSsG1TduJgCm43bjPvdsDVDHdY1mWSMwdEC8",
  "key11": "sRxSb92kExwfBKysvLL7f2ETMNVGCX8AH1qZwtnCn3p6ieddSaQPkSHPnrihR1ksL46vd2j1e6N1PcNHwpuLPed",
  "key12": "3FJS8cAfxqqGhBDgsBydCL7W6o8zLujhbcTjYp7c8Pnw2AA8yCe7VXFM6Y7SULcdRFbv7iDTrPXuGD5guZp7Zqc3",
  "key13": "5RivaBkefbKkcUSC82hThWLH5GnG6h5MVsZwcgedgcmN1DDtrS4pw4rkcBuPGyqtEKac7wqkVgy8zmmPWpvUebxb",
  "key14": "EuvjoutVsUYK4j2AqW1RPktnFbCmbU5vuvPq3gKaC5DnDfm9fdrkmXbYmJuMZBTJndR6fKZQiNHq8wUCvNKLRcy",
  "key15": "97WUUoQhZwKBN35xA1DVd1dZbekA8kyJkBDK63rtvsJkk3jj8azRtw646ajghjGbNqLzWF4bDPaWYuJ32iMhYcn",
  "key16": "3tyEcWhXdg9ZtgPJ5ZZLhuT6PJUQXh5iVZkUXoMNHKK4jQYvHyeHuZwtiaV83dcorfvMa1DBruURP86MSDnV7ria",
  "key17": "2cKd9nXmKWWMTe9MBCxRGS9PSK2tHxZsqSEBVFQkMfVsPyyVojMScWVYihe39jNEv75B6YzpN5XtF9624DyWBQDS",
  "key18": "BEEMzVQVwbaouxzHbKjgCvmrroTBKPpguFYdHKCyzLnaLzEC9rpV1JMm7hU6GX5LjZpSE95KUUrcH9SphQ8RT4V",
  "key19": "4gcKVfvofN2hX9RTaTfsjzLALUu6b3cNqmYdbZaRH5RNrNBzR8MQZv5YMvYJy4BxkBeVde2kAFJEYojSPNirjnBk",
  "key20": "2jLbXbamBgikD2tU63ePsujwzNdU8iTxxTekSLfH9UAP3SFHNjMexgwjyC8U5CenXXEvaFgTwwRt44s9tppfak8B",
  "key21": "34LX6NtjmZuj2CXdGDpKBqsM2L88YJ3yBvqXe5imCT9tKePkCg4zoCdKQSBohs3eXLs4LcvmWEEVFbaBWpLrmkf3",
  "key22": "3b3GghaErTNq2EFN2vHdeYKn72afBeJWzPXXfvV34CCnMGRs4wYJ8BtbtUzvyu8ExURSwTdJasfQ2Kyag5Ffrn4p",
  "key23": "2eqHCV3ifUEKzwzixeh5fkNASBqUxjYbycQvVh5vaCGZv9PG8aecWAUwwK4UDMgkq1VxarwztuGx1dM2kRyRsqj2",
  "key24": "ih4qNbNKMvDKCj5P7pYcZEwMr13mGTL7siuxrKHbB1FaQvZ137ZkjtBMckgoDziMotm9R67HGRM9KXWMg7NRs8f",
  "key25": "4oL4Y48Dupkn5KL7HBbYzaNZbfDBqtY3CjjBDCdoZWRCSCHGmderazdWGPvrpDedTk3QVXaNY8X1g2LEemEsKeTk"
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
