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
    "3DzK2Hg5MdMFw34maZMzLo1VAvDiZbDacrsUqUKkWdgnSeLpDjRwNVbYGfko2RNnzogo41bYRPLF9mZC5UffMjc2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DXxUCbvkyQShCj9bLKuVjCSwEXtqaitWcFP6SWa9MKFJ73Lf6LxB5iFqonncU4TbSMp3qDjKcNjPuGm3J8YCAZn",
  "key1": "4zjVGkXzHYaV1cs64gmphiwNUNT215Q8Zq3q65sgryiLDFSJWUbi8efQqWu5tGWbNJnzregidDbtz85PCfioz1at",
  "key2": "2pbqHJEkP559WrshLymbANJrz5Usvsg9xoYpiXFq16mPwx8kiyHsQL8sX4WJxSDfaAz6LmSSfr9JrduCNycx1uPS",
  "key3": "2aLQr3HtD7UnYnYTyCR72xjwQRb62VyFcCX1ftK4tgEbwYMYKhXbd1PMrYNGg5khqaCpZVqoPPZE5Px42zATvkwW",
  "key4": "2S1aCMimZqgDxWFZoZHXCuyr6dgvBZXo6weJ1tsXp5L9kP3hmmsc4y7h5GUcEJNLE37zGtuSF9eZQBhVbJp5uBUj",
  "key5": "4k49HGCyWr77SAoWxtHRhSPMC9hRrYAswP1cWfbaCTZJBNbmJ4Z1sWXZKnwHQyAkHrKkJDu8JFD5NGzyRK7zmB1n",
  "key6": "2Lq78TrE5wRTEXC4HTEASqX5R4WkHKtsWqAMAwktv7iDHfyEBz5uVX3ZMsYpzfCHL4rgLiMWVYmSmrVcVAL7dpFH",
  "key7": "4H2pZxLm9DtaFXqLgTN9HtNjCW3izwWkPujiVhE9hu77aUeNtbqERoGkn9Beoev39e1e2nfzkx9VkNpv6JK7tUoP",
  "key8": "2nu3z4U7JGccbmWG9388HDFeu5ioWcsbDJ3x4cQFD7TpsjboNf2PKJrm1CqSyUnA4VFW9eyWaU7q54Nh8AtKvZkY",
  "key9": "3WELA76WJ6oUrMaSyM8dtwpG48Sfw8VLVAEitVZ3UyWyNz4sAW2C4yW6ooLzvNscauPrkopTviBHNjXCQ1w9482M",
  "key10": "NQTRrtqfHg8EurJkCeuSx8WsNNWay6ijwJh6mRnxybZgBquhPhqvLf2eH5xWjg3AWWVvCgUGhi3XpADCFM2YHeh",
  "key11": "3iDLrVyZAMrWAC28AHFr5ZVg9D22a2C9bQcv13TKDkEgduWcdmWgPewzBaGjBrKt2zoyjj9gviFjiZvRf7Z5Ht2g",
  "key12": "35y6SH4TXpfo74yf18BSSfyyCHtVNjB5Jkz5Z5M4fjP3gchEPkhcRyzGFQrdt1CgVHtVb2y2WFRSik2VPr4PMVLR",
  "key13": "2crxYQ2GAb5PQqXSuUnVZk415WNjHnoANH1RSyekwyMMpy6GGKCZ3kG9EDnvkMMrk1Pk3kAj6NfKAthWQzpZiQXZ",
  "key14": "4DkECqUKzG66Ev8P1yNfdrqbjwDDZ8npDLZNLnzPx5XPNzd4QZH6u7m1rNiSwcMCARn37mT8LMEbQJAQRqR37V5H",
  "key15": "5WZEG6j1ZoqckxV5EB29tSXTGD6NFpXcyR7RALnbaiYsK42qwC6deufNzwDei54xccB81y8GiLBGEayDtrqtKi55",
  "key16": "4j1DUsCjpb7MqfjK7LeRrTaZs5E6wU9NtKKoo6gHXUkWgjfFnP8sE9Nm6Hfyu4cqzbPZTrQ1nP6GhNF3Pf2tNBg7",
  "key17": "3cBFQWeJvduHsyLXrfMDGkvHPpragwMK2gP4s147N2EadqTnyXtxgrUBpWg726SWxYCGGP5Hj5C123LjBLRQoNih",
  "key18": "G5eGf58XRH6KZSZ1Yh6WxBmaEetmnqUR8XmasLuRhy1eRDCTeEqb38Ayava1HWqrcKCdnjpy95ys6rBLDxZwRWa",
  "key19": "2etDci6scch8JzLSmYKAo7YstCZG6CoT8fmPWGQ6whGa5qMRhpSzpkQqoEXkSjjJjxGwozZ9QAiWNCYQzba15AWc",
  "key20": "4EHQMgMEg3wR4MLXfiNeWRP8N8uK5vHxCBoEXMD1xLbcwYEC4G4CuWMoCumYSpKEnbvkpJ6QPL6cy9FeEobeYbUS",
  "key21": "2FMu7wgGi81AZts1rXXXgXPgSRhLLwX6vXbKiSfViq5TXpCbU69T6YGM7kKHCU2BN5FHFfvm8GM8gxF9yvrzham6",
  "key22": "41MG7pPeXnYSxLJc5YGSeySaLguFffCs4m5jwHaregKgNeKUf7fZHZrRC2vCk6PzbnXLWQH8mDGtgnimKWKN9kNV",
  "key23": "23K6FV3CDfMuFSjyPMVZQTFGZ3hKrSdgmCEk1Vkp5DQrSDuBoV3ZpimbvZ76XCMXbu32ygLdPME3UMGJobPEu1CQ",
  "key24": "64gjt7vhSfSW3VHVJ988JioVioV5UBH4HXV8Fd9zAWe75LFpfb8nkwpQi1EhY5T7eifSAG7MdL3oGmEtc9TnuT9w",
  "key25": "417WwR1H9rUaz4rPNq9CfbKDL4a2WpqWjdmRAiswTHSEXA4sVaZ15AJ2fVdZX3AhfSNu5NRy26yfgFVzAiqGXWR7",
  "key26": "5ds2LG82xzrH8K8RJxywgqCoySYxhm56srKMdESYuss5XAfKMDLVcovG5P6HXcnCgGLtUqbqRF1i1rPkNgqEKMnM",
  "key27": "64X6KBiaetNx98NrzJN9BrvkrfGDmu78cjLooZZQ2XG7dQyEnhjxNheJh4kyE2XrSRnbPTLr5dopFHen84RskkET",
  "key28": "2tM9LqBimcoC6vuhx5WtmH2GDxRMEppqTN4SHdQy7XusBtg2zNc3y49wn6HcF4pxEycp9wpTiccyPnz3EmqubPuL",
  "key29": "2mChiXjwZM2WoSD6TE6NF2GxYFjqtnKfpX9rPcgdQw9HQfXfpYt13hVzw2wNyjodycBPGdE8SEnNZTVfwpBkTf4F",
  "key30": "3ncs4em8puzFqmoyfxaWqcSzyXfysqSuLgp4U3j7SjxP2bSePtoVin8H6bxzotZsnxjVMMAZwF8D7JWC6BvXm9DC",
  "key31": "GYrNMDe9iR52WPyZiCVqRtCiGSfNygqwe9X8PUYNEkTc3rHysCzPKGk1u7YN8MsMcgTjLY6yq1kpfPdKbkoLq7t",
  "key32": "4GoQ1CAnbqtPCDBQVH1JPNYd641QjtFPVtD4nTzFG6Ms6pXobWc9JVd2JwZmEChyknfBmZp7dco2NMtwsYDB94mM",
  "key33": "46B6k9nDtMxsWqwW4aauVCY2nyLuSx1dA8wSyLMzZDQPo9Lki3LWcPVi5ikBu4B3ncermeTFRSuieU4hiMKfK4bK",
  "key34": "4L1VufhU7kYibyykHWFHRyDpENXYVajTECehQrydfjhBHQB1JawSijjU3n4eUgjQkBuPoqgyLQHbQaTaWPMs3f9y",
  "key35": "4wWvP6wqXthxRCPZubqQNVcDaJGfGVez2q7Puag6jJmDS6wWmYd33EdBpUstQrQd5ZDYRrCW9YYmws24Vvbuipkn",
  "key36": "G6uhKzdSgmPkv5xZ1mERfGCVQN6YrZzdo6apMwAJBmawHp3fGjZ3HKnPbheG8BW14Gb389bVb8vZcQFoWbsvcVd",
  "key37": "2GUh3tvwRZamiUxYQfhG3moRtmdRJfMWKWgoXRJcPQQrz2hvwi5JHjoz3tbnJfEtcbJqyoiaZPTpCGS3Ve5HKebf",
  "key38": "3oQmwouBUmqHsMgB2NQUarZceoX3aEvgrg9QHz8iqAv8MQhLRdBRLh73kSbsuQzjF8e2vgXY2MPXazzbRhLckoAP",
  "key39": "3f7iTrnNV7pNZuHemUvKRegqsUM8otVuNvmn8V5dRH2jbLZProWwZ4io7zJGhdy2hfZVVspYdraMVnC3Sc6wP3Bd",
  "key40": "3vryDobVBvHoeyPP2mmJiPS6gNwgtgaWtW3juSqqPRo2WHKx9mH3inUr4RKGWKzCQYx3vtbiy3MQygdRshZa6Av9",
  "key41": "TAm1kAWFQJoaZ4uKMLhnTTkzxfZNVKs9eejDZPJPZR8MxgwFTE53KnsnAVqRr6ZCpF3HjU8aXXTgNuqai9eDsWp",
  "key42": "2HKgzsoAwGr2YwPTt479oyYggChkXAhb2zt8uN6EEvdr8ribh9GmdxWVoPzix6SKWukGVdWL1HdXGoBup87bLtqG",
  "key43": "azfziKcyUzh214xVAg9SMkj3Y5AJ3ojjwMUpTEEwSCEP5eAakB6RGnuj8mwvVBTog7E8vFJHH7hrrWWhLc1pCTp",
  "key44": "5yUyLfA3BHvaqpHBmanusQHyiw2nTNsNmwy4ZydGeLSMQvNSnRmsgCj9NggRxewhMpYY5gCCypuWmZkjBJc5PDxt"
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
