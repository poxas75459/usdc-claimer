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
    "5PkxBUfmUroT5ZEQz6yyy9eemgHS9T5up56JRtEX7TX77LeNAQNrqCKesEdAFvRDVqmCmdd8Rhc7ziNRE6ndFBpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pMJeRDRX63Ndcy3H3PoQiGA3Tz5GpSFFojM3CfhjembYSjXsQKSRkJF4zZZ8PdLLYqkm5gusRa1P1vD5byZ2Rrq",
  "key1": "368AhduecC4KH4QTJqMBFgZEuEBXT2UJYsEJTvPWM8miGkeRB4BNW3Mh8NTmgRTxaDMqG3bZ9hLbWHrGU6G8Regv",
  "key2": "3TAPCcE9UgUw1EZQJ6FqJi3TDhsKHVnBCqvrmJLf1pLAEEzNthYBn6Fyhg8SRHjEJL4WRuky25j3yEWZ6PkkQWfy",
  "key3": "4nmBR91Emfpen8XnmXvEPHpQNvoFp6pAfqXDwLtMy4hFe64dVZFk9VUPdwEB3LsdKS11uK2PVuTgXHQ6qHKE334p",
  "key4": "4ApViPPY5SChcRrDLCuPfwLuVvZG2NBRXifNTT8RYqZr8Z9qijF1zLFKuJnqKC2zmZLPPeNB9Upe4AAYHJBYY1EL",
  "key5": "2UuvLXYKUrkNQTjSxTVmka3LTdqS2SsyLMdjb1ejcdXZzJwurAsommCg94yomuJ4XyZ9VF8QPHFTJssqeiiW5fLh",
  "key6": "4o4w1XCmykMdKENQt4FujKpascAPzZaqwiRMhYBDBhwo1vbfTQVsinPwJu8ucXQnLAkVVivDfUzBEEzLjpbGmgVs",
  "key7": "2GHKwJpmQx3P7AjGVqPB8fKtcXGYZrirARWNyQy8pHRM5SgboAH4gAKaP1bpGY9zSbDyBQvdvsRP2vHJ8yQ6oCCt",
  "key8": "4F3i3F31x2nyazYUQo6NyuuAgH9rc8YkLiug3z15GwmBSzod1RqoR3p8Fuq8nixUYpEpV3pyVRavPo6euwgEwPcz",
  "key9": "4meea94AnV58pH47PP9RHUypiMx8aghCGRXSdJMYKrsBsDbc5EPS1mfpGv2LUsjsiPMs32F9X5nEJbVAmbjXswd9",
  "key10": "5aGKUZmfLvpZUo5ewpUSzErvu8gmep3UjJWorbjxEDUyRm9hxABJKPtBYaP9ZEB69hvsAwtzNeBQEWwiEKV6FCjP",
  "key11": "ubsUV4Qv9GMroUnkeXWxaVX6ZJ5jP2diNEe3cnECqJSXUYphx2kNojtmpe5s55Q7WvBGUhS2fFbE1ZYrZBd53JM",
  "key12": "9BW8xscwot7sqgc6D8LvHebR5T6UrtnTJDfg5ktvxsF6qwf9uDseS4jpvk3EVzaYEF4t5JvEkYwNjsft4DdYF9a",
  "key13": "2hhgwgYo4FVKYdF3ocQfNSapHBFcNeyqBHq1RZRRXGeMJ1bFU55NLzuQUrZfCqSjEEnY5qjy7uA8N9uTELsRDAUG",
  "key14": "5ckJDwrHwG3raYss3mBxUZpMwVktqziuH7bGZFi5GpGucJ43hvzB9dyNwAAGcMP5ftVHu6xz9huon66yBrAb9y7G",
  "key15": "3CqszFMbGVqx5TqWcmCYjw8Q3Qz9hzYHm4V4BLc2E2vMuDwSTMtkiy18EYYMoMGLvHRcd1CTthjRWsTG1scNeusq",
  "key16": "4fNzss7rhj2SKUset164Qy9FrQYMUBptT13aRiai6ryFwqp4Z9D5Wh5z5ZvfzdVYjCYt3Kc15AjrARf1qF7HbYYZ",
  "key17": "ozt42XZkYgwQTHXpVDDLwQ6mAfnsZoZaXVe3ttTwPm35GaJqDJ1NPFrdJurdRiv5GWFGSuLkAEQg1m3oWZ4QYLA",
  "key18": "KWciVC4kGAJo3Tp1VANARyejhYB2d3bmwqaCC92enMPuWLrTJaWbo3tGA39TWBbvSX8pDaTW6ishm7oq8pfkeYe",
  "key19": "BbRpQmkrVVe7pV5HcfozPxK9avvC7Ba7PueTRpuMUgidmF9TdoAW8U5scG84FUWkru2tHa7jEjpX9SxkJ4pEYeS",
  "key20": "5sb5eQX25N1qsV7Nx8zDSVqKzsr2yry33Md8Y6ViFxWHrqsTCJsPZCuUxj5S5tDw9rbX2BnUNxnD7hzh91HaLjjA",
  "key21": "4XbnuFgCbhbjbhjLnoJX3gsrFKcKZVQqjURNwH1msEgt73PSycPX8aqEtpMoynLxgJqMouUWuBgo9MYxbZQ6iVYP",
  "key22": "4ioUEmzDSXkntF5FW7vi5YqbfXPQZwEt78jaeT4K5U3xXoE16rcVzartpqnpmVBdv18KM6Eszubi6XYgpqBY7EVQ",
  "key23": "3q6QfXSmdBuuS5ZdnaPaK5sskDmEPtJF9hu4hDuzSAdUDctMWH724DXLVT1aHQUgnojDXtsGxzpioq37DW2ttntw",
  "key24": "5GBFRzGXsY5meD19ukaJ1D2t53J1LeMqEeevPrSKX1FerwbvzAmnawQwuS12cfquZp9eCLKCEnbj3Mrz1AhoJvbQ"
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
