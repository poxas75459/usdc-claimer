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
    "21jyf7YT1PEzFBMQeVWnWjEh27nsuhAVrYLJMgfXPqm9ZRCFx1kpUknr5LrQr3aPnmFdXLhiSUFyzJSc9pbBUmfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2krss4psQP7tNAK7CwBFQpPFWaosWZ3Pue5NF6jq5bTgnUKYtKMcT2NkfvGeZxVbbAARp7YfX3iFaVqdpuDy43Si",
  "key1": "4J8GKhfXyiWV4mXLw5xuccfoCDgFsaiJ5CiT429NY4cbo8GAvurfGcEy8U7twLzNV1pY9Bvb9gD5mc4jun8sXkmS",
  "key2": "tsD9m6Lhxma1E6jkJj6tf3UD6CsFFmScfr2oy5TWuyyHCBjzbP3937mxhAbw6vLMVDc2CGTJvtu9ixE7EMY7Q8b",
  "key3": "4tfyLz9Lm7tAXcFSgmGA1F1GjHghStns8hHJ1Q3kosKbxmegLdJSvnyj54vC76V894P3XTh6qNdyqTaRdBbia5xe",
  "key4": "3LwKf5TvXVyQmLpZiqU7J3ZmE9WGo52jYzpBgnChELubi2GsYfEDnB4rmk3uYpGECymuZ1sp5crDyzVUPkeXhT6C",
  "key5": "42gwFsv6WAW4CrQdrDsDsMKjKLNj5RCp7BaWRYYC8cf1dZu7aM2kvB7NJ5WAEFxiGTsfZ4U9NSLbTbhW5fJyG9hs",
  "key6": "4CJGu7KngqB3mWWGS7LqbeNwTwPK99ZzpgyUQMEXdMdWjh2n1iZJUmsVX1K1FmLNnY3JLRpGs1u6URMujAjSnMDj",
  "key7": "37jBgCBA5xXPSiS67j4JiXos7YWhCfhxAZCML3mQKyQUHtwAPjRAE68gCNJePdWn4FQV9Ur2KReWqqBJ3JYbWCck",
  "key8": "4UQaZKS6WYv8TDBvL3AZMPGVZ98ATPBdn5G1AGz3S56er2NmdsLGd7ZmUTdKW2kretYdKnFCc1YDL5Vapm7vZJeq",
  "key9": "39jBVAsyU1BD9eaN95hfvEvkWBUT6wSzYPJvq93hB9AAubbGNwHZcGf1JYEfAce4qYopZKh6NogqqHeiQzSAcLnd",
  "key10": "T6J4dwwoQS2hzTZtbde5cgQy8YzXDVzMF4JYnDRpDEW7NhLFnes5js9RutL9V2A61CyYPHrRQEG4YqcCgcpWBro",
  "key11": "whqASALUGAUBYgVTkQiCd1duj4T7LXsFa3t8VcyDA83zd3ddijCnGQsAa65FgyStneGb1fT6f9FZqWChJE5aynW",
  "key12": "4cFwxCJi2uqAqWYumFAsD38hRPtLDNda3sMCbxgTWk9enhwHjFZsuADWBPmrWLxS4KdZ6msf5ELAgqihwZkHmtki",
  "key13": "4VpjWcakutwCiGwWLUUZ2zyPYcgF1KdPFUk7YmeivpdqvK4hfqTLuS5EznhudsZdQPyqa5UtdrDb8QLFgfZnv7sn",
  "key14": "537UZvxaLHbT5wAbsReGSvaZjjWAuMkhCAnwMkPmcTitcRHtumXUApxwC1WUJwz6vRLaCfY3fgXXfTwPFjboam3R",
  "key15": "2nWAFJT69mJsJix98vjintjXiLR5N8v92SvhUwTS6cAV4d8Z95g1zU4aBrTZbQ2Gd69WqxzRSD3tNiG43wtmNGw7",
  "key16": "5QbX4A8rDAzuyKEBDqqKyzhb4JKEqpCfWaNy2BXTWa54fg4dn8FjQbtxhNY9H5HnACmGQKuY86pJ8pUmaCDee996",
  "key17": "2uDv8WJjSpJSMxX1agRDpBirSayPfX9x8WrGLWrcujnPwitNYos1KqnWhFoBk6oV7wBjNLw5JeuDkkHJX8zhH3xd",
  "key18": "4LowUKDixc9bzceMCzchEK6urrxVhj1vf2xZLt9NMDU5wrrAoqaYvFuhWSnWz11GexLrwecN8NHAWTWRE9V83wHB",
  "key19": "2cFTwiLwAuh4erXh51cpde3Sq9Bxq9ofFDvi2LHVQHHRhTpcD7oDvqhLbyFPQvWFvq245JyqbEeUseMsP1hhHi4h",
  "key20": "JjqbBdy68yb1H5pCHeZ3zY7Lom5iRkVKCZKmY4YoeS3xuybD9zpJtzUvhm3vL57LPoYAWwbWNbVkdMycfMgkzSS",
  "key21": "3v3T5LwuEUfbtpbJXJgjKZVpsUs9rC8avaXg7754RiZvaVta4jCuBnc6oQTRzGmq8fdPb9KkG2LzkUrpZ4nus7Mw",
  "key22": "53yzqnPYD6JZ3do9gJy5yLyhEtRSKnQdMk2ohmTKvGh4K4qHknHrhNyMk5jRYmKpZP5sKJdVc1YXpssuNeZX7PFU",
  "key23": "2TKnR3wDqv1cJY22SUrMqAd5nA6ZhEvNzxLYyGPmA5CoyGryjsUvY9UKZKBRsZr72eavPA4CJ4qmbrKJzNYT3dv5",
  "key24": "vnkUu7ZAV1TtRhYszTJr8dRSJgCrTfbNCCKtDPLthpKZSpBUML4RcMbVu8ZXo4AFoKGuv3xhMuBnNnziibwW6No",
  "key25": "4mwrgCgxiX8uk3e7sHsfc5QCK6PFWeUyuaecm7dA4TzqbKC2LMsW5A1h3seUxvwfH4wBxLdaLHaNgMSkWpoi63Sp",
  "key26": "5Nc7ryRmAs4P6oiSybhtDfsT14wG875BM4ebZ2yoQLeihgVUNZNg7X4HgN7BqfJgsnSqS6fsHwKmBsmh5REowhRH",
  "key27": "5TygMzgkXLenBPTLhXVRMnTdk8V7ZGbfqetnrpkP8svUB6uNPGWHP2jCFRNG7oVRD6X1psjoSmufyCs5Ru4FUQqr",
  "key28": "4mHpws53w1kNt82FLAvNRVG2yaF5PLp1EWGkkYAKmfT5CGRkrFZZAfmJzNoAJkQNHxkA7vV143JyLMs2aoSKvqnx",
  "key29": "5w28kxFf1cdvQTnJxVaKrKuzay5ouvoTVokzq1BDA6JPMegjmeGMKKoeDV1cRS4BJpRy5FwxwLEdCp1sHUFEmW7A",
  "key30": "5ZwgqKzRH3RLFjoAQ7UffYGwNGh5smjaEV56hK2UWTZ99j9BaPazHMZQ29ANLvyQbEt6uAiVnas5xQKHfQhYYU1H",
  "key31": "3wcQHXnxLrwDfDeHDKFUDfLJgpuotzasB8HsuKxV8ymShXCEpsaqgSCWTBe27JMgDaWKNoUMjp8YHUSR9cEKh8B8",
  "key32": "4hZxNGUd6n2omBKMvaCzMjAyfwGJeXvMxC8kVnjf1dvhNCES9r4x4KyzYtL9GazDQkLceC5AXQmt4pYCzZ4R6qgZ",
  "key33": "3nKHiX7Go9Jf789KsTjSeBPinB935s2yUY7NyhijehNsfViJPzgfMBRHYy3CEjVBNzKCRf2eascAhCnWVTKMmYmt",
  "key34": "4LR3cV23S5hWtvY5Ma8bcd64c1AxpTX3jspM2Vz6Uqq8gfMGZc4BSQ7RjXCURDnRJRe88WZkwUEPkRMdm5hPFyPq",
  "key35": "aUG3gjzKfDCzY3VCtKHrjPmcPYB187ec1fLkHjuKVc3LgCaTejHcDhuqmDeyPqLGDk2R3YKgX5iESNbvTMHP413",
  "key36": "35BjPJcJy7knVVsqyMRgq6rcZeuoWgr5ai437micwJsdVLKA4Ria9beyhe3DA5TP6EH52mZpZTvyq4fZH2zq4pYp",
  "key37": "5AzRqhZ9m5S7fp5VZarMmGthVav2nnxJ1EyzvUpSvavqmGXkWPjhdswhse3RCzWWCFZgjumQJj4H6Me7mx9zRghA",
  "key38": "5othrmamzcDwwdSeHpmEPQXj5zx3E8xdRxj1R22Fd247jkzH4d5eCYqphY2vq98FpCvernHiUZCFmUE5Z2CWSxXw",
  "key39": "5UfbCfgCxLcJhkiWgUXn5mjhxPxhpqer25WHSZfS87TwQKG8HTs6in59ZTvBcvxiCXVMfjfNKsbeQbxuJwtnEmxs",
  "key40": "5hhwyuGivANt1ArVR32ffcLD7rxeWHfq8TCxrBDZQoFTd1MjSocTc64mMdXovJ9qPVkDbxrrjkgJhFJAyKHi26aa",
  "key41": "4cq1LRtuACif6G8isU9VRWv3g2Uy3UUSczzPaQQDZkvXHKPvzFK5BgYVRj3i6P9U1Thgbaqv6xvr8NWSPXMaV6ko"
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
