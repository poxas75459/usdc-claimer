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
    "3xZHSy6311BcQGnZNg8xTRauxuCeEyh7mXYttbt5hkrXLqv8fb3yGaFCwCubAwR6XNNNSFF4S9wNpbvYEXZB9fkP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gM3xPy844dfT4eteEAQzpWPUUyc16FaDSt2JfUdCwbifMLi1rK9kYmcq9J5YjgXKmaqcFzojiFDqwU3P8d8yviV",
  "key1": "61WPPof1EufEN2XrTHZa7CsRcUkaAoquJ3HTDm5NwZhFAgKGQbVz9kenbDHWBDYzk5iPNTHwWFUt3XrnGWTWWk34",
  "key2": "4u94R5KMDWoGnqjeqJiuNuySt66JckRpXXheNj5d6pfasfegpstNNcvWNg56ejx6p8gYE1FFRkJJXkiB9k5edQYD",
  "key3": "4FKyaUbmnz3mdhcZ5pZBuAnzPiHLTozM9ePHv6WNR82m1YYYp3Whj52QmKaoB4B63j2X4WPaDM24oY7CmiEJ6mUz",
  "key4": "3o9TEkT27EwexQ7zxfTdsG6cGjnoozQf2QkzBg6LC3NqyS3NTgNcuUxrpuD939X9udcznkHW6XzKtsjhWaAgnPVi",
  "key5": "3oXzNy9D5AXuSsYEvch9UQM5YeVRsaXPL4iwgc6LLkNbwdv6tyF3y9asgLueHh7MoAXS9cFCknjyroScFt6SQsYx",
  "key6": "5WG8xNyUyHPhWRsPNUFsUCSBzcHkUqyM7dxLsNjAPoKGhqqTbFDyYFfhFJUmLm5fGE8t6YTuLGGToEjVr7Z9QDPh",
  "key7": "rJwi4xty91qQDqGdSiS83giLDzguxa277qB29sq5iiD7uSWqUfcWP5VikzNF9fSobDnj9LYuXwgxyLL2Q4wRd1P",
  "key8": "3NHUTppqsPaACkLLGJssCmrkwkEs7bNuvWWmsYqLRrAmuacw152tuE2yA5KK1QbVPsTCaxWbLobZSWG6jxLvs9hh",
  "key9": "2fu3vBKFZp4pAURq1cyR2HPJdkdLKwPBNroSiUDCswxR1TS4ccJTXMSM6LfXc4FzQFisNwWcU8QqLR8dA426hn6L",
  "key10": "3neVaUvJp4WGWRa6FkJHJ6iaVs9GEFHcHCiHwMraruG3FS1DmdBSEDYAqCEpRP8ep69teDR2iC86HjrnpYu34Urr",
  "key11": "PXcbbDHdxo4A3aJVT3wL5LXAb8QLWQS3crKi6cHqMsdAx1LUUJzZdvYjcqjnpPHwvxnKxn4PrRU8q49yk45otJZ",
  "key12": "3fLDz6fjKh82G5i6HBzG1sep6aTzUz7yBoy1ewjrNK9gZbmg7YZxkuaVje2vsmcY6KFFfUrdAnSEazi71sw9WQJ1",
  "key13": "4ga45G1NEiwv422k7DqKApVbAdWxUPqEfpuGRTc7cpJQhwVKKhqVBtqg9rv9KaoZoH1Xjfp4B8F5RMB84HE6xUwd",
  "key14": "4G18C9Uw34kdSsCXdDPasXp7Dn4nraxdoHZD9BxQLmT1VonCMwKXJSzdhGBNxEpKarzVjS94r73ExhvxLEqDjutM",
  "key15": "8nUGBKkcG7yXNxN8SJQZ5VBVESiDrwkWBEZbPvpZWUpAmx3r6m8t2dY6YcSyipDxxC1jyszsTMPpbXRFmXCG68y",
  "key16": "2pwbw6iv72mGzfqH1mJ5cewqA2eprsDWfSbhVPgnCGg7osJmJyHnCwNuURqdb2JEMQwWEsfXddAFc8u2EpgMxZ5q",
  "key17": "34f1ENhHE6RTDRPNJq699B9TGUHqxxEfxQcxkHJ39s7s6pCHSZdRLq4Ccdiu1dtzuVZCqJRQJGawRvkKuasae6e1",
  "key18": "bESfD97VHKDuEHkix66MCE6WmzmjZmz41vjCGXfovkERnYWQi4hqWpykdhJdFLMR9EfsjuaBks33HKfkGRt4x45",
  "key19": "5NM8U94eXtbedt8mMU3NUE1VF8ov2odPMyofRqJoEeqMyMkLYqbbFCLYvbGkbUV2rJBLtikPgJekEcHwKgnyjLRb",
  "key20": "2RTANAmoDH6sV5AYo7N5qEF13jY6pK94ZLkKACgaWBX1k3W5tV4WGZKRYZp2uteidTe8XPWWrNigdQZ4ZWKDQRfF",
  "key21": "DZJxeF8wJQSh1B5rdi81mWHMLMe3r9JphiFqbYKSX4ovwb4bnYRNBMB5ThL5tLDMVYkNR7whRCR3cGyyRBtzCCv",
  "key22": "22iJ3mB26NLrudAp1iNcY9PW5DfjeUSorJCGop9QeQHkHUgGNG5aNp5BgLuR4CGU8DiVTWyAETxmYBtfL33TBmwx",
  "key23": "2Xqq8vfZb23b47U5x718dDXUiCM3jaV7xgN8sa9PMmoYaGDRuhV25Lpdew1Umb5Povn4sW6FMUYoX21JTrq8uWPn",
  "key24": "2iHYRLZWCppeYtE6CmwJ58yWSpk42wkDVLtwKzfKzDAsCLSh8jmg8ZFRbSJW8SpJsd4ps8sbHSUTJz1Qxhe6hdin",
  "key25": "37jwUrduuhcrRp9oH5zFgi96CXTpwwPe8zNP78Mdcc12PCEYcXTQiDmRM5n6bFyRCdDnsiXqT3NWt6qZZJfxu7qJ",
  "key26": "65KMnHxGs1viPeaTsCg1yCWGxrBTxn4EQRo1JoETH3YnvFk6RMgLa5nF9CyjXk4o5TiinzZd3TezaXjERByQ5mmA",
  "key27": "5Hb3z1qxdrYCymkm5xFoPZMFUkeCWUASRudW11hVPcUK3JHrTsnxKHA3z1ooWPyNQBApadyW4K3BJKhgCR1m3uR5",
  "key28": "4CBgDuikCzMcUcjTqwxZp3wX1WZw4P6MnNvPbLyASp4siExctXictkZ3gGjEFhNZpi1ECj9Fovwctoj2Zo95suov",
  "key29": "2ChgdptZjn5ujWotw7ZoqQqMjmJni8ZaAhCAnMTMU8DZcXw2rrP3SNj5vsDyTXSSWBq7JAxLtVEnudVX6XSuKH9x",
  "key30": "2HqNJ5Ku4wYvNuxZp53R9btFXWNNarZiVKwUXpE1PUzyZEFC7Pdz7jRm3Zq3ptPwQbqmCvMaFjmszSys6vKEBsYR",
  "key31": "R4iTzA7zavTdonm6LaZnvqkTBHqEn8khcwLzkAjMLzVBd2Mc1kNs5GiAvUjjmcKtSXzQPSbYcw4fKF7gFBYKnBZ",
  "key32": "3f3ZbSqtFV2QSPfDepRXwB3m4fMdnKEQWfKfkxN5SMxkDTR23yyi2xJoJEkgtsTYwV57E9MNzdziQ7V4hxT8gTEX",
  "key33": "4Bp7bp34JLBrrj3F84UvCDuEYAwy67K4syzmK9oHnZEewb2KxQYgpWDWFdxHnB2tuaVHHXcryuacDNppkM8qm22k"
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
