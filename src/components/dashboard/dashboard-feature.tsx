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
    "FUWkmsD4HvSFAaBT56CVntnFMNThTuHhCsjZZ5XiFiBvVo4CybZawDCNSJeHetxsiqDD7shaFpL49fn8ebZerJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uRCZpn6HGWD5FvmHWQrrm5VL1UkaDEFzH4xQU8yuV3XtDmtHuQVs8a35jRWS72DjX1BVmMYwvZ8pjqtfamLnvAA",
  "key1": "2FppFH72y5VfJTpmTVJY1vokYbU15kvdAZuzCqMCeA85kfr8yTstsqPka8wYV28no3VEZtXJYhWMYvmuMgZugVSX",
  "key2": "2Ngzc1vAvs8sFYt5wA8EuacWidKk94BqrJSjNfrTJyaDkBkN66sJSFDEQTBYqVY6Xq9TkoSBn27PQcn2TfBv9j5s",
  "key3": "3ujCE31eF4WJdpbEWmEZbcX1eooUe9W5fHhqPxcGqBqnduDQoH4HNfwZdaKx1Hbokh5pdrAjEYphmp5WBcscdDdY",
  "key4": "2qtrHdcQVkL8Ta4VE2fw9vsKJREAJUeE5Uc9VKYCaNWVQM4pLA7TVWVeuDWfq51UpnPWMwf5CvEcmvnpW92N3kZf",
  "key5": "67mtqUpxJ1J9FxPotorcraUcBpEjNUjUVAKy3xCcRFAdo6E6tSDFP7GeCzHBb9oGa75bX97TDa2oMPaZS42JLuyn",
  "key6": "2bzszkbKwBNeDKHH71YZBy7YdbCT63uhMLJGU4XUqYyRRiwFHs2vyq6aNvqgnxiBgyXqTXoPNWWYPiCpLRiKcVUx",
  "key7": "4a3s3yyYWdMavoVS1oJ7WV2ZApYxq3FpCkg6BDvDQZebX6V8AdwnfoPNfSy1p7tbzczkjGppxz3yqJzcGG2qVSgL",
  "key8": "4SStEE6Jkb4ZMtjDKxURPuKvUjseP8NQ4gnVmFCSN1gtM17C1XELsreQSXzWwyAmuoo6kwba6qTStnusdArLTqEJ",
  "key9": "3JmegmQYfhoZXapEPLqTacVWpZEce2xbyprWUYom84bKJm8N2bcc5UVnmLqFpRsdCg2yJmeEDmHQSax3j7vcY3zg",
  "key10": "Q3M7eF91E65hZHeTCPMBHcbaBLyHQmhHD3a7p7k2NDAHXqYqLEPUpYecyapxuTiouyBDQJHCKBq69ihLmNEU13C",
  "key11": "2etpxDTU1Z2DdRo9C2sxMBu2NpHvqqUYMFjyMVDgtE4sjxHKg4rzzQnLZ69gSPfX6PoU4893azkag9snhBHbZsar",
  "key12": "3roCVQnUbPZk9PSHhekrxPjU5A6ghBiP53j9uGxapEesTCz8tfqY3h9wYUYyL3RK6Y1BFUqKJhqeqWsdMrhzmLxs",
  "key13": "2mq5GGFgM2uwbytQnnpP9HhbRAg6bpzEXRbrgi8BASSzqD4E6cUvDWatMiYMRahFodXPj3T265Jo38zdKMrKduko",
  "key14": "41b83eHRCmeJh8u1XDLjva6TwQSrKVZpZirumhWkDD7FkCvjMihFjVnBRCWxaZY3CyfnbR1VFbwFs9enjEZNyZ1G",
  "key15": "5doRbaSnootcb6UFNXUUPXfCjpKLaezcu8EAr4XvZjZuVQs7kmLbN6i2zCWqH8xcUqBRhPWFLx91FT2vei3m5h1Q",
  "key16": "5tWm23VZABnMzgpwocWxAL9UHfAaDPeeuLEZ17AkeeJqvNH3sV5eq9i9HTCk2zrvL8JdSdn2xABCn8NDvufLERtW",
  "key17": "4uB3bqMibBeFs6KpMKaVqyYA8hb3jHmkLw1CP9dzqSTi3Xse7BEdgLgswDB6fixA1AXHSNfnc7o6uFE7oT6t4hxq",
  "key18": "39WQjY6rJNWRJdFf3xz5Sz1b1YprgBNTRYjWC2QWyshBeydWsSogh7o86KZ9F38qWAqoSunqzgbtiKzMHhfvyLj3",
  "key19": "nDSBTbegCHX63iFt3ThG6Ld4zaiLWCsAxsPfU6hT71DKNodVTMuSUCxeJamb6PGau1oKbX2CtnHwpqPzfBXLGrM",
  "key20": "2yexiYuc4GNJ5NmcVLFSVUKcJEBaRYo99FV5MkvchrxD1ZohRfXyC31Q5xeQETJAJhCvU77uDjGsLNgcp4XX2Q7B",
  "key21": "5bjo4yDRNbL8iMT3zjbgnemqReGo4Vabu55tYEwzT56BXvKNDTojPSzukPQPi1vP8eAGfzyxn7jjoeHa8vhTfH8V",
  "key22": "3ZciLkMYobWU9XcFUVgFNmNehFNtA4gHvKfyAcdomrGsq34d6jtfphFYvD3A3ZUkii9DWxDQPxMFwgdhn9cKqAYu",
  "key23": "31dWbFb8FLi9nt4hP2vdoN3EavPEdspXtg6NxyPGiYW5R26V7m6KD1BKBGhqRGiJg2rGyCUYwzpAiBPB7TKcZPj9",
  "key24": "4XdJiWKj2yeh1Ku1m2RtSyGzZD5CmtTKBsAShW2grSS2f56ZRJU7jzFKe7ubDgqMr3PR3uU7FM3TDYe5L3MY6jgp",
  "key25": "2oiBi6gmYeqewGMxJ7MoFXS9zRX726gTGnULz3P1kj1KZbuGsSto2e9RFxZfa2g3S5FAoTwhXJmoK8oi3f2MKeeb",
  "key26": "5vt5HqSWDqt1Fg86wc3ughUsQ5ewnBPfoVpKZaXXBg7kv9CojwfQjkosg3AMtU1fcpF6Nwr8iNAQkB1WDDtN86Fe",
  "key27": "2AR8xd9FV4kwQCEkHCCQhQ2q66isu6AyaxoVMeYaiGqxRSpPASP2ycs797zKM2TQWyogha2irFFvcCjsXgSkG36V",
  "key28": "37amKSCRy8kbDwkdqKWZvP7VJNMGzz6pjzfERgZZevRaAZPu48kfLU6Fn3rohJLKZN4bBEgEJkMtbRrwNpn4CAfY",
  "key29": "bLKpKSnEadzLfTNzStdWCA9TTYJMM2CYWKP1qDxv6DN9gLmR63UXisUFoyssrAKidDbREB3yFSSFhMnxmbKeFej",
  "key30": "4VtEDUaYX4ZLLZtQub25MR5DbBAQ6BEqk2XExL6AJJRoPGPzjHhhCaN9X9ZELbbwequrAbX7BcU5X4rCJapv9Lwk",
  "key31": "41j6uTyNFXoZXTHMyhuxfWyheEcFsoZMgZtMSEuLbNskMAWEb5gAvKwvYH3qCkgwpU8sGc7YUWNRQc3HwxQwZ8Pn",
  "key32": "3DvfAULpD6mCy7vzZho8LxuDEwzYjLjLwdqePQELL6WGQzM9bNN8YU9DJQb4PnfJnavV1dv6F7H47BtBPeqhyzfG",
  "key33": "31UwCN69FmhNTFBiLGMywX5mdeh6CZaeSxQHSdV7HawkUWcRD6yvFSxARbPWeTpoCteWYr4Rrv6phxLQ2SBMpyV3",
  "key34": "5P9J51YD3LkkUHyWzTKYUCszgZ6rGhxQGck78867ZvGCSRXRLThGbR9mfZvoV8cJEQ18z1WdQnXABRExCsYofQVF",
  "key35": "46sAKSLNyMijjqQWqg25beVMB3m76KJf7mcfkNLFMvDPr99nX5r4EswnhCbqtqdstqxqDyqLHNqDRkQrxL4461EX"
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
