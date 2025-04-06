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
    "4Rxk7cGijsopPwZNZNy6KVKwDvSPX9dv7wnJHgGkY8E6wSqZnJAFRsgv9tjGoRnRj2svYxu19mmfY18s7vwonzqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24jBwfCmmYrqj7QscaxsXMt4rJSMcLj84BT5tbYyudBEuTF2rGjdciMjvE91ruCHWR6GPSPL9BPC216ZAjqF5N5r",
  "key1": "4PgoeiRX7j7R11yAj7GUgHarQYp5EgT3mEynmu1R4RouZREGCymNryGXrtzDb9r53zPF2TtRqyWjBuc77oXvMV4U",
  "key2": "37PMFi33k3VuH7Qo7MeXzJzpXaGC699KfEc3PHpi9WFefQvNjriuV1pSsuiYTwm3tj7fEaRCUvAFbxvJrmvyqQbG",
  "key3": "4uVjBgXCy3HY3ipJgbuDMLjsgxAz5vc9hStR2GpPfeMv24yGzsGBWEzr8P63duFMr9rEEuXnMJmma5TnxRJF8J4o",
  "key4": "4eQDdrNoa2Pd7t5FzpQF5S3gU3ppZB6ZoToapJGdvF4bX772N38WJcwvFkiHHvaZiaCrZkMcC2XHZuq1aPyWbpnz",
  "key5": "PumAZiHkhYGdkLqzF2KQX3qCMnbgzCxXiMC9Szyeva9QasDRfXr7zJ3pQm6VwoNaCrXtzRcWbLSbvSMfV3iUaQy",
  "key6": "2MoBkMFD4je6bE5qqSfWuPzToSDX6h7Rv3SdwBEp4m8fcM51gHRaEQBbnP3WVfwKzffvuj7BR3HosqDGHyu42uaX",
  "key7": "3Ecu6dGwW5mPuS3ZDnjd4xjHjeTpu7s5zCR8QjSiDG3YW1KJmAD1q3dbvyLGKPpuXHPg5fP79u4PcRcWgjtTMTy6",
  "key8": "3Vb4BEunAnii2goWFRME9N5KauWnr5zVysLFof7Hsf74gb4LM1XzJBK3GB4hJAbTkcJ8hYvC9QyPYZqp2LJjGUpc",
  "key9": "4pwF35N9oPuffvCVKU479jC84MWcrN81SvKmtYchpSoVTbGTQZFnpwBmnaMEfXUfe6vFJsWxBxGFZSgZK3WnhMLM",
  "key10": "47JSnCkkjNtx9CcudVsbLgPfVQcCoRfGupXXTmYnNzCky96ncLPZfMFqPjLBUzQac1n1J3gZWoUhgDQ9GQRhcGGF",
  "key11": "4EA1Ddnw2T2eXTA1vMCdP6kBKfMTxoZkoipTkwhntCh6iUyzepFVBFowKbNXnnXoSubMbAn2SQ9QA9oToRrwxsYk",
  "key12": "4p4jsAX31spxEbKGMV63LKdocDCEdpCzLcTWuaxsTfQf8oRDpuN4HMY61NoJT1VregCJXKvVm57VZjuJfLDMmMki",
  "key13": "21Z3yKN2F54masLFHwfmAfNhLDznZfTSpneXQ2QCfcVAvmx4asWQUPnWpG54WDrp6eezxFynv4hAX7kRBfCjeiFc",
  "key14": "rusUptUvW1jbayJuzeBHLWUUFLdTzXYwH6jaShT1zcz42s5nTULFM38HCowKkkLkZGdQr7Jh26wTQWR5DqCdi5j",
  "key15": "2XQ338YAb6ykkvPqtYhxuGDmFHnfNF9oxqZYm9gUZZ23cTgJNQbGFamp6xs7ZmGrguEs5qXjC8zLjWrr7fHNuPZp",
  "key16": "617k1jsdw5VbHAarogWMim7mGtdpobsmsN3MDGfJn33Cfy62CWFYpC43q4NwjisuuPNQJGR1kz442PdsKCc52hE9",
  "key17": "2fnF1xJnLG8YxKyNPxKrkamLjERV47arpE46HSfuvH9yLHfBaDzVUJoSFXpCvuGz1UNjxm4sE9ow6RcNJ3LarEbd",
  "key18": "5JEdQwAencr1TqL5zR7EA2ctb3AhHAAcGGwhsVNkU163AoNNSPAfyi7USrQ2gqctxfMFkVob2xirnmVXVtqKPd9h",
  "key19": "41idNbx1fBSWuXuddFrsoLgjoxa4ghcV6vwkTftSL9A91AoCBjtVTXNyUz1rmDnEyjCvZg58dxcjvAADyQLc8JN4",
  "key20": "dnPLxRpJbqcRoJMMZeVvStF4w41k2SAV9AX6EuEkKBDKm7irrLHYfHP3rJXnPHFtN453TnzWJRxwLCqt9GbazxN",
  "key21": "2LBGgBNrDact4q4atW3XakyQPtqNMohgjxobfcPXr8Js4LcQG2KXewDVEcVNGVv3So16YJwCfb2K4FQBn63FBo51",
  "key22": "51qc9bcHWPX8zQEwX3mwmAoFHbwzVQQEjEpEAFTYB1s8prgX9k7AH1H6xDqg1aHbsNWCmgpePH4MLKCdoHjga2pu",
  "key23": "wMVRoGUKHukcoztSdbpDMt4Fgub3GU9LobqGhn39Vb8a3MYxBbZTeqV8mZiaZ2sEawCz6drevWrCLmoP319aHYp",
  "key24": "2bTnauMoSsegX1XeDjLzoBe7tQLGCUSzGxfZuaPoKiLdtvUBswn7LzrEVih51LdNrxx5s6KwZu5ehSFFgouGHquz",
  "key25": "4LkHEcEU26FXkdvUhm5P9SNaQoQC6swxWvoGRotctBt6SEmkoMwkphr2dDLidXvoeVT5Tvy2aFZxE6KGEoFnZ7s4",
  "key26": "4yJNQU5d2wd2LxyNELRpT22Wqp8p5w91phWY2kT1nuKgqvM86ZTtmkydV4sDUW6dP4zH6LuCnKyYE75D24QrqaxU",
  "key27": "485AS1AL3ki5inpCvxSej24K3XnfDvyfAWgqtvqQXuDMRk3tAsu5cyXgJw3azgRY56QVXey1QtYBPSpWTx2xL2a5",
  "key28": "43kmD2oAJFCm85RHLMNddF1Q8Au16oJWpZ65b6vi5vprdfodUPCsB1nPhVDepiy1WTh2Wy96qoWKT7cmsREjFTMW",
  "key29": "4WmuaEz7PA4H2GAs63hVX1oN3ixTwGPAL49UyFa5upJemKsaBRqWoLRfvfVfAA6eYTN2gdAT8nvcfjPbbi8gT6sn",
  "key30": "vu6jaK3yUtd58wiJY5nu4pxryxDHz4ESuRXhMQHwDKQ8R4uHmKviiBtq5u51P4a3VHc1yUq4WyqrJHz95VN1DU7",
  "key31": "4LadyvFv1Qg9zHADZSqEjTnfEBdwRBphmLc25QWs57DgDRhnDwjSEB9rFAhSAF1RgJxFoqkvQRAJLSyaXjn4vcEv",
  "key32": "4rkMMKih9xdQodhbxWM3HyJKfsSqwtxPJDPUH44hY6jfoqDSAExcr64GKMYFzdwJ8SyuD8AhtzNZwcTFCvfVLCk3",
  "key33": "3dHR3nQK2w7nFfYoaghTyh6QAffMLDx3o6g6C3jM92CA4znuaEtVs5Una5z5DXp43F9fzD744rRMJvFcZBdBTzNc",
  "key34": "4pXVh11cuY86D1bb4TpEawfEcko7R42dGjb18q8m6Uu6mi5KrQ6PgdJvuUMybN6NMf1GwHWsGnbchZN9uQRKyTEu",
  "key35": "3WNich6s2mte2BGmjzCU1iLcyQkYS8xXQkPqMjSNcwc62s9B8kayrLhL7pXxphc9Gvsmyjuf1rrU1PapToeW6aYA",
  "key36": "5xZwE8hterh7S9iC54M9gfwWotHSwYKe1h888LKWc7YJ4fpbM6KtRV3bNGhAhbAbEijjBudgPFU9a8xMfQdTRn8r",
  "key37": "2QPCr8w1jfTVrVubYVVrsT8D7KeoUhT6djJ9p48irCWBRWKstDB1JS6QnRWEJbnuekqtpaoEgRXgxEfhDXWPmBzN"
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
