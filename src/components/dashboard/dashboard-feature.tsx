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
    "Lzx8Fp7NHxTEQaiL8dNGESiPozpTqr1YVDZ3jTPD6VYqvuaBpecA7qiw9ERGAm6SjLASG7Hc8PR5UHcdwm4TY4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bLFnJn6xGPPxmcK8PPttHvFbq4zVxayCKKDqZZ6aukF6cjXJMs1YD2J4V4LNzJxryU67j1B9JLsvt29S99fGSci",
  "key1": "2vGYZ5Vd4JSdMBBuWPCPGeGY7RvkAsYQw6n5NkhzzonfwZyQ2V3zDYcsZ5aDKFop8aSPoYxVbA7Rnho4vjWKfh9r",
  "key2": "65gzqocRcZvgZQdxbHN3m1YYncFv3VZhf92r4dbJQHMixC49yDHaq15f7NNwmiXR3N8L64SLpxMouG5pF2Wrr6CJ",
  "key3": "3X52b6FopH74iRAt5c59AdMoWASpxGKuKWcLc7nCti8dpKi4iwjguQtxwMymz1YUEzoFEy3o3p6cW4deq4ri3Lv1",
  "key4": "2m2UQoMxY7A5nckayn3tABezPzWfjpQC6FaXD5LqaEtvuZ8NrV3kZwo9NfycaZHsJSxc3yKdr2p8sB4dSHDbH9Ny",
  "key5": "2oGSvfuCJi2ygXXBP1hnGaHkbGz1QJyhtTz94muWLEJJvhvrwWksEkZJPDAr2Bt5dWRwZHTB2kZZBjs5eQN8MtCY",
  "key6": "3H7QqiWcygeXRU8QMBRibsPiMya3wwfGXBeaGxzqcvp2mtftcYdrzmVceZ7TBMf8iP3k9YAZhXSvM2mUaSrEaTT9",
  "key7": "3wuaL5HQhcLEDMkUjiUQHiAgbDg6TrbAgkFVerELX7onTxfVxnx5g6xYtm6qQiKxbNSK3HHHibPGNWKbp8vvmS4L",
  "key8": "33nugQ1jCMRHvwXAJn79qPUYZHVRsgMJ1skf7kSEBWfoKNSGVJqj66oamgDRNPKSizdit5zUKZGfrW4N4VEJq55y",
  "key9": "4NVcrQVwAEt3sDndG8poPVngRU5inG5nkxhUmvQk6AGbHa8udjbwQHT81P6AVEw3ioXJ4dKfADuDQNfkMzUmQdDj",
  "key10": "3rLLMSoCn7tzXxNtTcZ6cEUjLyFJgM6FKoCyyPfRtAtQriFQJcSLgfxKPR85nhXxUKqqH3DgheZaZu2uCLPMFR4w",
  "key11": "S9YM9FKnAn65zjti7gWwMU1xM3aEG3kkFwCiXCAPCp1GbzHL7zkr8vUifffEP5J9ZKGj2iK6wFqcpkZuWho4Dk8",
  "key12": "5WH7ofaw8xM8TGrjpS97QnLMQWutFbhwCUSdxat2NXhQ3wXnYRDg31hJ6ZqEYokzhs3FrQ9XxmLwcjDBGcuKYeWg",
  "key13": "Z47vuiwu2XPWZJg2m7Q7ctFZJL3boCp7V34H7j7ju1TGSpehwHGLyJJa9KBCrCNq2wjMVw3wiMLX9c4udBAd7pA",
  "key14": "4NHRhgauCkaWJM9mpCVQt5ZaSMVPHR8VXUxa6N4B2oV4LsNhACyZWBEnFRDxUw2jnYg9BzqXbM9bva5vYmysSk4Q",
  "key15": "4krSfvQEr8CRb5XsXq1aWV1qLXVPuWWQpPErJW6tn3k8SJMXSseDvoq79HvdkL8UreG6rkW4EZzPqreARA6VyM1a",
  "key16": "5vHDEaoch6Drw9LJ1ohbdnPr8AtDnM4FBqFFnC2VLRiK5eqMqyqP3Gays7FyHebxzvRSuBJTfcK8CwR9ujbTX5W4",
  "key17": "3bhpjzn7EFM8WiBJNwMiU31RA8uTAq3Awq23eSqB5wDnUZTjPkHiJEWYAZAsvTPEuoftAwGfaRa6BRFBBXqk2btV",
  "key18": "24jhVvAB5K4mXVmKLBGLtthax5N6myAQnpY52JhHLGGksuvBCro6q7nDQpuFXjKYDh99JLzQ5AMAK7iGQ78ogdAN",
  "key19": "3zrU5W1MnyXuCpMjQWpSznckLt886YmhwHqzTXqDw5k8QyATgAkTmiND3XptizGZfzdbsPF6FH8c6qq3CTbz3gnS",
  "key20": "58yGbtXba42aeTVPuqYzdWgbDNTLwEXMeZzp9ukFVMfb2hC1W674FA4SKdQLP4oC61iAXU5cZ5kx5sge1C5EkAED",
  "key21": "4mUALEw8zzx9hi315M7F81UX2ALuYMxHQt1jsWibZ47dAr49LyfC1quwC3kUi5wQW7vUpwX3YCv8ijt4ePrGYLfs",
  "key22": "31X8NxyazHnojhW6dD8Leger3MWUP4Ejx83icfHmKZmV7X71yEFTnFxotpbEGDsRu1kYxfqHuTLgYh38ZUgRr7B",
  "key23": "4zgd2oTbweCJgTPGYRatVuZRV3TtKjvB4RXmY9M3ZVCAekxvjzBn4qkL7ySaNFGDMppL9vn4QZspVGz6LcUq4ZrX",
  "key24": "4LSp62wHpQE9dH7d8dNXs6ucS3kXvpdXriJJWdh8CBQDaKuA1hutq4KAi4rBvXwaz8dVZGSBKR1pmP6pJaC7a2vo",
  "key25": "2Vy7roSiLZs4PP3CRiMxxKkPn3D8GYAkFxj2GksADUiksY7VNmcQfWBNr2kTR9M8EycJS8pybEYN7fFrcuPgQ9Ce",
  "key26": "2KfMak3jAmV2qnnqccb1pHGY2mqxJ6PYzPyqtiibDqqcKQJFYDU52sB33FCYPtaov8j7SDehiBaxuYiUGhVwio83",
  "key27": "9VfCJgozr5121DmCh8WdpGvQwL2dCUgH1x2GjNCHNyLFgZNzE8hSyCAgG97ZczzJonEZi8DFrWv7G59PmzBL6CG",
  "key28": "2dX1gghT1cuJyKixvUfk9FagN2uNPLPX3x5nioHANZrNXePTjfM746Sqbna8iECHDWWFNnzfwad5HPeWtM4UmyBi",
  "key29": "iqbmdPYSWijHnKTkwPZpL6TVqV26v5xgBYWocfyB1iEczE4gQ538rQ9RczrEgYdxWSE8CYHuPWNP8LJQP5G7hgd",
  "key30": "JupDvJfAznZd73aLF8nqWL9jZ8yUckp5YVpRJHr7xV58xJ22BrWdSZRuPpandu1dHbDW4sYCwVSyvbaPokdMefp",
  "key31": "3YpRJib9VKPWV977E2BGTQsUrRqkgV5SNG6RwFvNKz5wJXvkis7nMM1u4vTAjqt1wnYHhe7xA3dcZjnHurpk7iQG",
  "key32": "V8sxzR2dtr3Gzze4NNmUd1Fs1E1sf7HvVaPW7JeSk5sd7G4T36JWHWcRrDC3gbbuCsqoHcyWzVDxZZLnLhHE8Ne",
  "key33": "4E9LKWAQNrN9KS8fYxFLMUvNPWM8zqvXBVTkSh9XbrvvQ9Mr2Aabod9XbsrjDtj5ucZUBCkiEVnqEKE2cJVTikqN",
  "key34": "48bzfcDHZ4gLHTLAFzfvYB4bMpTJtegdngvKnhwJhKoXyRYzWqeW8bmzaNSBQMWAGWCNkdjNBm2tUTWFMeu8eK2u",
  "key35": "2jpnCBw2PRCsTM2CfRS6HjAXRpz7XHLYPhZQh9dDgfNLjSgjyz7GtiLWv3u9R9EGL82esFy5SNJikP5boSWLrRAX",
  "key36": "5fBALpZZGR9Mmd6AN5Zk4f94rGvvCwtzkxB19scEhWx7LP1LSNdUsx1UVXatuaxBmfJXydLrcysALuEswYR8U4Ht",
  "key37": "2SPdUXokoJa5eNFb78B5fSzP5nAwDTaHrYgw9BzYyaYBxCAosa97sxLVgECKG1nrYFy5j9Pey99eMm95pm5yN5oz",
  "key38": "4ijdUto9KyvVhE8xWU1WmK8JMqswcurCcsK4umoKMqQpTctZ29xPzMu2VvEUFh6yNFsjwBpU2G85mFG4Nc7epRpH",
  "key39": "2hv9qaoo3P2fyn3zKpdvHwp2DebzSmkm6H6J6FhvAKFD7CnMcx1YoD8TJEbaAZTS8LAmHpGrLqHR2PPj7zyjtHV3",
  "key40": "5mjhoiLkXZK5u3HKuXn2iRVQSfjHxFVnrrXUAAzgPam94bt8qMm5r4iP8jE1JESEVrKZWYzC4AT9mkg2hrc2oe2f",
  "key41": "N8eDzSUoKVMd7XwPQpZziWXryBGZP872wWhkHW9kBRfnDWkWbZXeGExqz24nR75ZWQwGjNWdUfP1oUZKW1AoCwn",
  "key42": "mXQKymC9Yp4LFP2mBvtvhrqiSzbdkXDMyTgQXJe2m5E9oSNH4iwNRho6PSiwqpvXhJ73UJi4etvnZ8ZdhALFCHJ",
  "key43": "2b1UT6Yn1UwBJyLBBfwZd3A1gCWBmksdCQLi5ABb9vrvjoMCYkKQDXRgCL3su6wF1ju2BNPKEWntCQaB8rsUNPJo",
  "key44": "3jaUM6AkFSBDYN4Hf7r38VFqWATTsyBPzQqbXUE1mqGktiuK7zQaRePtm6FevVoWaLr8tB3scWP8pW5G4juY9tmT",
  "key45": "5HPNns8kLamTCFgXq1Ddn8W97bAxqMYmsmjokrXZm3BwrE6qaH25qzfrpFeBGsrGpXvs1SxB4aN11Yu8ZJfAQmo3",
  "key46": "63anmHo2R2taHDuRq4tUwchovEhXGtuZXaxANrbC95CqcZTJHHCaAbGEcKVRLQiM7BgtFH6NKmahBwth2SrvXSh5"
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
