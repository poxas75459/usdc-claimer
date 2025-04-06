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
    "5hq9AXhpFuH2Mqo4bJxrkFWYJiB2JkPRmccv3HKtSg3kZedtKGhZoN4iivgDXKUBs9uNjtPQvcmzv9J4yNgsa4U6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Eyg4hzqzC8Er9h3F93PBNzDVefWmo973foGn6JSG21y4kU4gjzUN9Qiq9g4oem8mpRg5WVh1DFdrhbXqP6nZ879",
  "key1": "2he8SZ4M5fwtPp8kcJZwV3Ddwv9QMzLejNY4N6AXX9x4KMNFzXN5z4ZkEiAcdt18MczWhYSuwCdwM3Wigw2bpL7j",
  "key2": "35hoSLv9Gz9tAeo7wpoeG2hTLFxugM93eHNciDBzVfSZsyC1qEdemu4YBWEzeKjxA9865PvnvTYjXYxzFXvdwPr4",
  "key3": "zN4zgW3oQ4aPNtwHfxTP94kKLs45nd6nKBiz722NP1tAWgF4xMHrKhq6gwAQgfskd9QiTXBygMgMxwAJMJFsvWi",
  "key4": "2Y8TMBJPWXZTq3bqFMUUirhV6QDwct2vtBamJcWwpd7NNTYvF2amtgz2YvrPtXNSepAM9q2zjymLthBUvQB9afz2",
  "key5": "323ZFq1akLG5pZKxYjmV3mtDjendXS8ZXcxPeyrrXNwfpN9284y8cL2cwMhyrx27NAq9UYWUSymfwhKD8tK458mZ",
  "key6": "3SFDMemLVzGETSqZ2yvkh8c3s93QZv8kKm38h8c7c4BM2v1dackJcosA54jgi6VKvQXJZDaLBkvGEyKYcW5v4ieC",
  "key7": "4pvpkvdDEG293ZCTGeLybfsxCzNZE2U7whyJZPnR3SeiRbtER1Z3Ap81nATimA5tjSFrAMrBWEtHo2Y89YiU6R3g",
  "key8": "i4hs41DTTqKnJok5zudRhN6ptx26EZGUAUfAVmR9iTQeCLrBqPrvZ3sdohsAdG4Bzx2esuNxk36Jn2z7Jhhx3kE",
  "key9": "5gVr4QfxSrMhSm1sSY31XRRx4guPehynXX17TfDmdzV5dgrNX9DpBJBLXfTuKobhHnkQWPHGo5ypvMsK79tzvmBc",
  "key10": "2aBndPRm2opGxurWUeqJBqDNiRW5hjjxeAfWMvfX3cKL73yBkNSNtewkcsx7i52Cy2j7EtRB2rdN35QwDVdUPP3z",
  "key11": "BAC7e4p4z72k6MchEDSHHLtSczxpkbB9KhMvcBPoyMDFdLAqafDi85qTY31mTVDE1oyL3N9f77zPHCvDcRUnL6R",
  "key12": "4Z51YjrF7M2j8Lt6gCxwnpNjVX3KUp521h89qch6JHNYsY9JiwvoyR2zhbhvK4JwSmpFxFAGhyM4QQPT4HtR6bbe",
  "key13": "2exQyLEtQR5r4L2YgRumju2PG9TkEfFcsgjN5sS8qHR7f9e6rfKsPZK8Bdw6kDT2NoeZjN2Q3kRZ1Ci9orcjAtTM",
  "key14": "Cs9rjctTTjtrbNzRYdQCudZPd5M3vuRcA945Z5PbMo2xJCtBYo9yJWE1XKQBvDTjgsBnbHTnM8oE4Nf4yU649mm",
  "key15": "hiKMbn9VTpW5qQ5rMQAZcFKNZndUc3QDtUZtofkBCNW2vWeLD2G4FoiPMwAk3tfpQVABRWRF5syPEdUFtfNygHR",
  "key16": "3vwSmyFLVHHYXzbCGBtvVSECQqX2uasokYt6r69D8dvSqVYLKMEp6oMcF9XjV4Fzhv6q2mJwqfFYub5uSZEPwh39",
  "key17": "3KeHSB3DDEatTUb5KafntN4UB21iBy88JGBpCzMbrDwwbjMFQHAcaYWbh1J7nB76zjcYuvioZtrxsuu2LVfAAT5P",
  "key18": "2GZ4HGMqM47dJnoNKPPef65FyffSjXgUCaTpvrN1XzPbHFEhNcrVhK2pgKbcbAVqAmce1k6HLYx7KutpqeXVoVih",
  "key19": "2ajfAUXcgA8MKfuGBSfghLpU95E3AWKU5fgGippZCqk1EdfgF7QQ5LWYEXbMmnmeZVezWpYVovgpU37EBnqroaYV",
  "key20": "3eiyw98Su1rz673nhxyMUUiBHMDozv5iUycHwvjmZMRCuq7p9jRKiTkidTrDnNXyg3oToCWYiTX9Z6tiSRCRgAnZ",
  "key21": "4kVCbfvqHfTMrZZANKn9BYEYD49pmXBMeCcRB7hMKFquCxED4tPqJpug5AJ9TAnLw1nZWh9mj1kfnx3yR5s4pnST",
  "key22": "3sUwwetqUhU9q22iE6ZktDuKB7HDozzPqtrSiXiz8pM3N9Gm9dY4FTkgLjMsNGA7tt1hvWbJo6sofmJVrJ849w7P",
  "key23": "mEwNaXxuH1KeRFuxAUmdakG8PkRKUeBrwsFqG7rxPdSDYGLwqUdgdJpbuf5Du1Mp2uDg5jSMvAUeLjP2wGwDsBV",
  "key24": "iRcBQFAVJ3BHNdyRfBCqTRx1xAb6oD3HYu1wdiH8zppytx3aySyd2qfK46ZQrPnPQbP4o8PGKa5q3J1PQjCAbAe",
  "key25": "4rrF3P7qTaxb24htVAdVVvvwH3RGqmYk9YemvhJpjox68vLqLuHaGhbLWWfNX5Uz3tKcFUK2MW5tgKdPc48NFuhs",
  "key26": "TzaHtZC7kWMQdw7ErttMX2ZGSJ43Jkgy8Hqs2TERfY1eA1Bm7fT9qV6PwBuiGxNF2eo56qToZBffSKfv5UFNiCT",
  "key27": "5HPqowrT55R7ikH3hFLAoJVyb6bqUSbErmmsX8Esf7SQ3U4vEoz8hgkCAFUE4gDx4BGq59XCatjKNXKZJsNiMHcc",
  "key28": "3N9axhBxGYN1RjxsyA92Lkum3UaGGjgqGPsLTBhgUjccgLiEQWsdQP2w7nWULhKriqAAXjAdNPwdX56NZM7mfkxY",
  "key29": "356XXx1zW1u1ChJucGc14F3tbv7vqZ7fhM896nVHvibUaZhMdd3c6ATjcN98TXDScxiTJyqjLXLjLic61b8etHeW",
  "key30": "2TCvAuCVDFHcHRHZr9fxEoydJpufNRWCSExhJc6dKHEGoZEFHqMTAxMCiKVzPf81ZELKFvakQjEYcXRwm8kJno6s",
  "key31": "2mvgEx3kEuhkCXS2esoEZeLSkGDNJiNnBYDwNVmEx1LVPYQTpHdmqaUp6JMpT7K6UvaXAhcSKDdypi5UbNqxqhcz",
  "key32": "3PtpyGA1JmMNKx1ueP6KKWwaFSEi2QPc3wyXvxeZDLE23rFP8a3x1gnBfiwXQNSuBCsDacgW45t9hWVG3k5RAWwM"
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
