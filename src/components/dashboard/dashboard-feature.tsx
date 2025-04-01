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
    "2hFsH3U7xzKU9LrTRbYZgKyk2bMNwnZhrvE7T4hMdoJ7uDN41ua54PCgJhCvEepTeM8r142MCgrk9na9mQuXCrEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H7Jiygd1es374kmZ9kuRk1RNsJnfjC2vczA7aqmhk4uHwWHBXUZdnwC3tPyT98vxWUMLtVaE9uU8tWJhadgU3Kr",
  "key1": "pVL1iCj6sMRpkGm9bJm1ops5pSDvcMgAy2n4TuLVjcFYCqf9FtgGmpW3bo1fxQfJkhYh56VJLqWAfbd2oVfYCfW",
  "key2": "361oK1q91MjhWtUFDDBUyQSZ76VBZaaaRyMCrLWPCqAKoSb3p2cMHdAwDFqXAyqMDHb4LRPhPciq6vYryfUh3UwY",
  "key3": "4ZoxqNGNg8ArrK1vwjyN6zfRj4VJWPjwEVzkKV7aMUPoiZT2J5zjhdpcpMJurSjW7VoGfULs7QDEwNymimdwgP6k",
  "key4": "FtK3E9mtDmd3QRty8AeHnjAoU7NpmYVnH12XaTQ6nsTuFshkhkL98WvqzH157hea3iJwW4J5oNih7hSAwqyc1po",
  "key5": "1hHR1iBUqYVPuVAouR6Ei4EssoHnsxqWnmqUKLwNSU3pRiERVGRzkEec4PdBLTRGZn259jzUiZXrBeN7ebrnD42",
  "key6": "2xkDSb7XUGWxyTqAJEovP8xyNocvLUtDVP6Xs9P65nS81mqKkUiogqREjQwWtUtMxYYq4qjny16VQcZrCsTW5oVs",
  "key7": "65KgxzkWxd9ddDYZj7fvYN1QLz8Hx37YD8WGbySxLAGcYswHHjjgHGPwngfRyoWrdmfNjJ9wXM9YEfGWTjRL3gqm",
  "key8": "3m6f9hFMGeMfL6feJGz2dXaPT1SDnmZxDSC4tASuD8KVNYtWzmyaMt86GDESzHUmLGgfZnRCFgDz6NBSghgHdKBt",
  "key9": "uXh5dD7HRd39HYE8AewMHcgdFMfbgfvLsTutaeHsocZbzUZS1Jje5vKtutm3u23LQ1FBvCFWfuLAJBP67hvLZZV",
  "key10": "2AVKum1qSNirETLeRk64diSaLDPii3Vk3LYJmn56wbUY1JoL9ELdvnUHGBnLw5VF8TkQKmZkJL9wdz7cgQ3cMXAu",
  "key11": "hFe5s6fAobPysxGV4AoFx4bzJHeHFBBXRWHksgJVGeQPX4fuhbBpsgKKDhkuUfbHhnsWNzBDiMjZ6aZ9a9uZoC5",
  "key12": "7KjRDB47ebyfa77gpkwc4MPfYMzashAt4vcicLM7a3QPxyr9U8mucofnwCaSFUg1r19yjKUzKS1Me4No3r5pmTe",
  "key13": "3mYzkNz3uUDzXZVnfmNNA8KrGQykBUKWpAngSzb9R2W1NX6um3MpYcuhagCeczVhqFeDvVDu6eyoDhASJZuAeRaA",
  "key14": "mw9KP8AQNDU4AfFbr1BJzKUjknK8mK6teHPTdtpc9hhaK31E78ihXR2P3nSRRug9344dNECvGWVkQdG7BEbdYrz",
  "key15": "5PQQZ5TJCMfiUAbymt4aNi2r81vZPyYukzJMhssHdnJN9uAFtR37dtWhhDSNd2WrWuEzyECXsWKMp1oZtKSfsuvm",
  "key16": "2cQTbU4mcrnmu7p6fZVnrs7Dnr7FHuwp6uYFxxttGNknZzaa9YAFPrF72X9PoNCXqqYxRG4JsXQBEcQQBHTXwaSS",
  "key17": "3YHeXdoLmonA9QcRpGHdmfvv7GcbPXB72tsJrajLyGkpr97J88Tu8FhmhyjV43bH1VjujNKTTEh6mQt9FyfESfE1",
  "key18": "CMP3rHeqhEDK3wWYjCCocci8GXW22yAsutaPxoAPbPXVvJ3aeu6zeDxpFWn741UYvN6ewidMSLTUaGU9nB26wu3",
  "key19": "4ki8Mud8RtZoR18qtSy5xNexV6UoEuM7TrAJ4XEXkpSwcVEaHUvaiC2aXsU5aVqzmpEqyzSdKRneWSub3B9p617u",
  "key20": "WT9hnNWmpeDPBRgAUYCH5UkrtGQvvg8T1cR17byz8qAyWBKJJQPL8od3mygjwHLBmgDxGauSAUDMuHCiudCFdcm",
  "key21": "2BTZWJqt3N82Bcai7FDLfEZrDJZFUXkzWfBu7PrGJDvKKGEwNEuNW4i5Zf1yLgf3R2Ksgf6uhLjoF1vLAaxMMDmU",
  "key22": "3TjmokaSbhVc8vw4ymv9A7H5L4XgmaqBf4p7VNzZ9FF1Vb7KddWRxjcimjC6jCtdtaVdfYHZsGdfi2Thtv6mmqP8",
  "key23": "5qMyXRtzuC7t6N5dHAGQkxbcWqbn6e9bB8nCnR89FcA8WmAN9kahqzpXcVNcJnwuKnex9eFN7BTB1e18HCmQPgPT",
  "key24": "2fZ2KkEo2vpiqBj6GQAHu5ar6cjzMhD5ySR8vzKgtRTdadocJ9ctVRj6pM8bqsQkh5HJ7kSTtadoCCa5KDJe2mEC",
  "key25": "v4bcEZYPo8SCsNS8wWDcqpwntZ1qX8usF6aYPw5DsxmYYDqC1mYVsZK2JptWazzCTNwBWYFcdGNxwJj4uZAZfBq",
  "key26": "4PsrXxU8hw97md3zgxt4n4zgbPu3CyZu2B6Yv2gUfqYxrCWbGn9eHtYipkgfFAahq36L9vacJuvwf9iYWf7Ykr3h",
  "key27": "4KwvWesc4pZProSsWhGohd6KYsij91QTXWNRhVWTGiXfqP9ZDBVx1qzP7CU29fQJZYtY5W3yfbRtpktSYBDnRuLy",
  "key28": "5bnVvsbr9CHv2zje4mFWRbmLLnBSeQxG3XiyxHsaNtWRMFW1b3qnkpFb9afEhMLTsyPWsEnWKdapVvHtqQGZ8aWo",
  "key29": "5FZ3naAgJtBv3V7JTfKL11nPpPifMFQ5WsBuyqMwsuA3ZXgxgd27aFH1mVM8wJxx4zeeHwjwMUAHHtM92NwxtZ9o",
  "key30": "fb6R8cDoszMyFUTP13bUHV5veNDpaKx4cDEArc774KvSFhZZ9g3euVK1ETNUUYjenMPY535kJRseSiYNkyJH7BR",
  "key31": "61FDkoxiaoqa8gaPawczstLkxnGed97zThbFaiw4gUzhyPNcyKKtx8qqPfSQbiDaCz6EGZd8VibHCzqzimC2ihQy",
  "key32": "4r2Vwij7QnqquxjVZMSiQCCGbGPFq668guhKHAdS9ozuSw8jM6gefFKqLw3gcMAo9R3nbE1MJmjVUPygKVndzeBM"
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
