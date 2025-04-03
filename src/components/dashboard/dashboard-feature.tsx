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
    "2z784NSVp5XM5sqPoftBoGb5UGAAMVXruTVvsN6nZNTx4dXQTQNGLdqEc3Afx42yp8SNt8jjduQTndDrbHvSenk8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pLGSodb1QvSBEATM1kbnLbAJAk7nnictLkDiK7ENtcaRQ9cSuJLxLKtLmz5Gb5q4unsZwL68APFpn3gTpeUKdgf",
  "key1": "mDzr79w3JjexeMJgsDgFqwwA7bGGTtnkCKn5wt5op4ftLg3WskCVUzQ3Cmr35Reps8T6KdzotefWNaTcuacudjq",
  "key2": "3enoeGj4TEmmNzxFBJEr5h87Xn5fbMb8GaJ57KNQcwgWjCBg12jZBxoSu1VQikxcTAp9fiiqhDZjtUEDMaKFxTPy",
  "key3": "3Cw4ARZAqJ9RrWip75KorDykbpyGD5QTftCGponAYT1Z7KNsfUAnGedwLJBxnRhphefa13L5f6CgrzAkr2pTsyRJ",
  "key4": "995DKRhvX8nYnE7kryjmomFiYyEhbD2HpHHmR126ZXZiiSd67Qw9LU2rQ4762Y154HqMmzN13swJg5UHB56CxJg",
  "key5": "5LRPRyi5CM8CzHNMP7hkkD6QBeN4WwJtpEwf4e8XVtr5RAQMn8R5XbFsBf6NK3cRzbZUTQ3du5cVY5wJZTSEwRYY",
  "key6": "2rqhdsR4xrD1T3AwXFWLbyJop3qKe3gXRPm83G1dPA22T6Mfduzjd49VJ72ji9pLsafuyrX6jgLj5ygpXN1wpeBE",
  "key7": "5LLhjfe2NtikJYWwACUcTSmKGc3UYH9zsbWLhqsooYPZaYvTRcvFgnaze4zeEvmEPdgWAkvxHio88SzbEt1Bqog8",
  "key8": "2Uk6BYCcB6Y3ftfwCfgHzfevacCwoBHsmufFUXXpLDhRS4bdQ8kuD8Hv5dpLWugpYyNb5eQ3PbwL45kwqzPQXhMD",
  "key9": "2164BoBeKSD2SJZ5FayDPmoHfBprGVtMmKh3VRF2wtrmDmEWzQjhxpNjVN1Q1PUBQGWK4QPBHptXovqhtJkTG7GM",
  "key10": "3PLiQ5GcyDQZPwpKVMfUQDduRqZUCfsxcHDTQZ9E29worg9NqxfaHQhmRyR21ZpHH4qPaWZQqPh8HT2kceftKqAv",
  "key11": "5a8ZGSktiFnjaFDpjGxBgGTV5CECa5aoS1dkEsDR3xDVRm8CQTVCTKbsTtVbUapHtBKYTQ14w8Pw9MF8yWAxzKYk",
  "key12": "QS4t2dPCH7czbGE2VPNfR4ov2tgwgD5vJSGPUMVso93yKhn1eXoQb7Wv4vUDUMVd8QcSsf92hRJxPu8VkzdYJqP",
  "key13": "PgbfsgFPEPk7ywcaGg1xR5CmzbjFDojGYa6DmWV12U8h4XWyxBuohTKRgA2JsnWTYUnTgrn5dDn8EAS7BnJ1hM3",
  "key14": "4SmkvVuPXqKDTaAUjURNNy2AfGBqw9nCiBvzRMnxsUpnjfaF12nBGcVEihHCfCNdiTn782cwLNR4wSYWYG5L1n9Q",
  "key15": "2KrFXFHuC7FXo4TWpkzVXWzrV3AAzBGYDX55HtaAXbPFXLBk9DTK9T5g5SGk5SPGz3P31biwTrzwUzewTG9uYFvx",
  "key16": "8WPCyAC6125a34gH8pv2JDemYCmzY6JVJfY3452Y6P3RVxmvD4NSyvMX9SArS3psGHxGc3ddyG7hNy89BV7BXJC",
  "key17": "5uwe4W7ntxUQKXQYgNA76LGrHySduw1dadae6h7KNVsH3ijupP9rHqr9i1iy8UqZMZuAMtGmYBoaKGqBaX7iJgHr",
  "key18": "5H38o2776PpLjtVmNEFKTNSGcVn7CNaHvGvLHYmhWWvYa1DKdDdTCBqBz1x2fj6oW913DhMjbyD1qURcKCZuxYE7",
  "key19": "5sjUi27RhzUh2ioPUnmL1F55A7MHQpJZ6cKYN9k2sYzgikeCjL71M3imE9z6i5pN5pTeew5Mq3LwC3PLccTkg1cK",
  "key20": "2iH5o6HhpP3ipg95C9Sf3STdMVZAWkioh3cf2YKzkCuibZgHD8hev9RCXALKb5EyvJoQd7aVLRBV3Da5jznVw4Vj",
  "key21": "36ayrQeNnkVL7iWCA5dA6QEzozFHzrEZjYZucwoQfCmPuGK34QvmEP9mYenWM376FboetiH5Wbu3hZ6UtMyXh5e3",
  "key22": "JoYc6xbLdNqenf3uHyQoDcrnmAGv5zCDZbhTU3iKbpAHb5txvufVSoJyokXkZxfwjqsEcRT7PYuMbMKJJpE1K1V",
  "key23": "TN26KrPswK1vm3YRaiD6NKD5TPPpaqJBCb7e3ta6WtqiVevJ2kZRW75vMGCGzCgmopyryd9pDk17SWx7p4n9RU4",
  "key24": "3jQ9RFBSZoUp5Fo8E43bhsE8w5Je8z6yw7QTcU9cnQCCNo4D9W4PpZiT8NQ3BcaXqx6t7MmtNo9nUEG9b9aj21Z7",
  "key25": "2HzAAeZWVNMZPVusi7TSuRZzb4wpNXho2ew1PFiEMKNAj8reCNfrQhJkWoDkHpqTUwW7uSsrW4hwyxdxYAcMpoSq",
  "key26": "51Gt625AGDzHZctxrXiQCoFVxviSLvVW5CTHcdQPrRt7peH3ayQDh97tsfA6SH7nGi8X1PLb5z8zrd5um5bfNUzz",
  "key27": "56AcRk7eWdf4AxNuoqYpxPBGDS742W4LuXViXiJsDnYS3YD2nug2fc66z9tAR4YXAkcGCU2DCtUAJJLTzah2Pkds"
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
