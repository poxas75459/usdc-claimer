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
    "2r8mM8vvqwjdLT1qKXwJspgrGqdUzdq3y5q9dYvKUHwAXDL5JTPiLufQtGActCiwT1CXRoV2H8biw8VYS3x1FBGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dswtUykmZc6Ap92QwjZXEoZCCtHTDsTyzBiBMZx1hSczV7jfZdWtrzqvcCXXt3LwKakwGt9wzKVPYTTRqhPJwFM",
  "key1": "54DmGsaMwQceNDQ8mehWUCnAFPX1xmL93GK7VxD31hamQaE2gNtokhJ5jqwShqdDw769sNaTP4kMaSbM1wkbboDH",
  "key2": "386BhXyhwJ1r7QNS4UebcdBhWEDMkW1CKtAXMJsDyCCZ2SKfpK94JDc12nbKyGog5X3rrKeJt56Peop6T8M1YP85",
  "key3": "a4tm88bgXiJsbbNQnqQtc5x7Pz99VfRS423wsUSKV3W9QA1Q6mk1LyWQ7VnAqnmcTaMbRgpZJVUzhfXHKcNquAF",
  "key4": "3jLj6QUqXMSSqsTRvSSFLdEr5ed6u1PCjG2a13CmufCD3qqUxFF9yX8i8vhwsEL7KLNBEaPavXnyLCVQcuZzD61W",
  "key5": "3zLVALVugYJadWuKAkSEXsdPD9LaQkyjbJ3TDM9zUyjeo2GajRT37njS6v3vyxgFDU7Rzjhpq2v6cAYQHbd59HcA",
  "key6": "2pLdpRBqUvB1pKRZ5LvDaf5nKH5tsCNyWtXTizTPwZYznaYRjcX4upBMmcubNLfsbHhq5EEMWLmi6Zq6ia7hMDca",
  "key7": "4kKZhknSS89RQkpUm38XTjKTymrdYvLG6kLh5jn3HadTj53X4NFryNs4Ab2dtLibLQqCZgWuGogVcexYoUEbiZ3d",
  "key8": "3b97aSdF5scFHtoZLj5idvRYZEL8kgDkJfQSR4vgax6hefBUUrcGeavQ1y9WJ3oqEKXqEFq3oeKaLEb1bZab7Qxs",
  "key9": "3HvQ1Chsvf6MDwS8XiqrjABHEFYwGhBJJSgqHRWcGC55unvQkyupD3jtpwwJPwL2oeEhPEzyqSv48Di9ZpdVhdvC",
  "key10": "2tjGyQLWCLyaHTfEZaSh5DgsT91FwEBduQFttiUzcmuNFww1yVrd67796kbHQHXhcN8f7KzouJSC2948AcQBWGL7",
  "key11": "qzWs2zyNbQJPfdmU1M5cNz9HUm7Dh8fP7bYfMfRGAj4eXdUhAnZy5M7QPGcTGDQVW2GKbkuiVmVGzMTAiXtTUGf",
  "key12": "eN6CFG7KeYTMSHvgW7xabQo6u7ZnapB6naskrUSLNArCTmGRVT4g4u6nJjmXbbN9Umrp3w3hWpdyxtcVzPZ3agX",
  "key13": "3ynX9WvN2Xyyja1uLLRRQiycGszrnYZoXyi9ZKjbs8WBipUKbSfgyLo6jQYeNCRWXVFexfE6pJDthzxnL5i1D3LR",
  "key14": "5roHDqjaaGGaRFYvK65QD8W9xtr639G8p11Vee9wEoDv82Vwojw7q7JzyMJB7cXWk8bPjVZv1opMiqpEWs6oBsBr",
  "key15": "2g1ZMjdWKiE1PZFZzSbckF7t46wTwAk16f5xV6ha5KodRpux4MzaJcJ8v1ZyU5r69eioUsyoWt6vKwPJ7A8wfy56",
  "key16": "62TxvZzvicRoZViPgeqqfs2gFnjKGCvo2qtkutMVMHMGwGLW79vXyJG1khX6HHJGnE5gfLqFsgE4NijLTFL6nu68",
  "key17": "wzZNs54FVB44MmZ4h5GTMDAEgJXJq1oifFNnd6DTA9nd99CoiYfGLFmAbUX8nAjYqG35HRzNFpvEEfwscLuXexH",
  "key18": "393D9nBVst5HYTuZhcCYKBzA8tabvJKLCT7q8DcGSQssSsV3g18ihLBR5Qdeuiwa7L5iGLxrbDXFj5CvPYNthwPM",
  "key19": "27Lw3pKY3SQHjUSiHF1TKLQBNPwWA3kD6WXdVt8QbJ4eYyXtxhDzNZf3pzqDUqxUV3uCZDzXWfT5EJgPUWQZVBpe",
  "key20": "2Xjf8BwE84giR5BNSzfLVfwonJKgTPkRyk3Qf5iePkhcpNQf4n2cnhEf3E7AvMSjiJjrHWFfjxkHRgVwVjiMU9Zy",
  "key21": "5QbaZastHEAgHaKc3fzoRGH4S237KfyG7EmD97hZEtTdLe2sLTKWvRB8RmGgFsic1QXh2KQb21TpwfgqSg28kZy7",
  "key22": "2RoctKn782KFfLAX3QnSd4PSwwZstqzkjpLGtREBJJPLTx5YM2MNLimi4Kx1PaGiS3pgmE5S55RUo8XTBTC2wuni",
  "key23": "5EaoTsijnhWqoUaXYKqhvyCD5pMaMWnvT7GLyGXYyC8MZBwZuc8ERgDkSQcafEEnQAbjW8YPPrXP5CQLLm6eqZwE",
  "key24": "67CM5eHBXg8HC1xf77eCz4828rJPVSR91qkjQtQj7LB9gbgLgiBvay1VhXyjToL51xrhp5KuhXN5ata1T58gE2hJ",
  "key25": "4jJ3jjfJSe7N5KcSVVrnW7jhDVG62sC4U8HpHaiwtf4RtUjohCvqv2m221bq7ePchxAhx1ib77MFAyjsUZp5mqmD",
  "key26": "2Fahj4mDxsUrf6vjmvC5UsZvfbA9do7tGaKYPrABFnSxufGu8WdWRotdfUJ1UhwxyZm8DDdNJXvZzwwJmk9cRpVv",
  "key27": "32iRfLhiepiuvyiLR2MLTBs3hsPkQA3QZtGo9xbf6Jf5xDVRDWQueckdudLQ1p1GSdo2hadaZTX3RBunJpAxNVdb",
  "key28": "2oUXHRjLU11xPaifGZyXoy86TdZBBjR36KpWagjQ2frBW8ZHxwUaAQP3EFTyLa7EnkJJJgXg4TEQoFRcZjpVoEuc",
  "key29": "3eLJ9Sf9rC5uGvf9crLdu47RZQSBLFipRr66TF1yEADxEmEPb48QJzgSq9FBmbuF9zCZEzCazFhHQDRsjkKqGdz6",
  "key30": "67Sip6McMTHsPau2YT8sxb9GDXpzxBdi2LA7SsPnEgLEoufi5V5o32wYYgaprECXdXTmCy7nbm3ioUb1N5K4DwDa",
  "key31": "3UigTnwdCDk553iWQrXhnMkCZCubApgPA33WCYh4nn7ygerenQC6vUhRGSSvAuK2vQNvaUAf3SJpbDwTnep4JHAe",
  "key32": "2qYmeN5xffc2mmMftLwS2MvHg8PRbxcRUwmJe8K5aHstchQdARBHhYwb6gC9RN8TEHTBCG4a4CZnvxYhh7auYY6h",
  "key33": "4U7YfVFgvPMCvdchCpj5DETjiu3jnNVy1cnE1gTsSyEzQBVAbbJBxJht8ee1unApejBtA9U1nwbjhuiJ3gLgTcHZ",
  "key34": "2GwahizkALHUNHcw8BkFDTqoHC8RRaPug53Sk5vzCBtDDRnrH8u4x85Ace8BZj8vYK3RiA2BtsNbd6928eKPztz6",
  "key35": "3LuE1Exaay5WnqtniPQJsC6FPkBsAmtzEpmBxgTKyXzRyhB86H74ak49vmpbBsYKQumxcvzBYQCFmSQpSbwZwvqn",
  "key36": "4qipsN8VWbmjSq1cTMycF46DsJKpLuWKL5R54mTHMnm1ZHawWVANq5iGxDRvhszYrFq7Ta5XnijvnHMdVuqafWxp",
  "key37": "5eZGwsLodyozEaWJeM7S9B6og6NEM5Av2bfqdPh5s3vcGmyPNxq6tEGUxS9XuqPQop9ZnvHc597y1vS6KLM6VbJi",
  "key38": "3x5jdECjyTjHcvz1mhW5snskXZNYv3sE8vox3jr8vC26nuEgLc3mZkMkHma1HJgUwHq1kApeydzQ2VcKzr8DpeVi",
  "key39": "5VNeKybWjRCm9TBXjVwwaSQbYbVRKHm6WG7maXJQQSjLhQP7QpPSayTkYBpZjf5hsJXXfThCgdPckowRxzha8JCV",
  "key40": "5NHPjzZtV19rJbwpPqefyVssCdLE2wfE9wKotaJ8Nb7nLnQ8rYfoYhUnyFBmBnXviu6qouQopzEReDnPzQ1we9LR",
  "key41": "4Pa9VpZBgDsgGEU2cbAGbpEVfDPWAaeB2YAfKioTUNSBnP1yH75RsYXTrY5i83fcpXidZXFKCuhZd5ar89AbX8SF",
  "key42": "4bNMU6LdGcwYhtLevSk88MG9iiDFCSeMH3HJsUThzFbL1UHyPMVfiTTV4htJga3PoX6dSyER9MA398g68zoZZNjf",
  "key43": "5rf7mZSQjBbZVLNAghkx2gnyuk7Sy6gRGuV1d6bGR6Z2nwTibzUpmeYNoEsJxarafaBGpxWh3Rf9JNejwsKk1aPu",
  "key44": "3QdQVsc6cj3VE57t5TFRgk4wdWn1yhz28KYogjxh4UNCzkxAVEKpthhCgifL6Z3Yzg8GEzq5G91nxArP3M5YXXgH",
  "key45": "3dev9dm4J1juB5cDS6m5g62zUeCtJk3Hv6k2Qh6LAFfybvr2gMBjBFJ95Ed16uUnvd5QYBmssRAikKYSbtkNatMn",
  "key46": "2reu43snpxENY6SnzHbJft5uhZm3ZJYKYniixJczpZ1mcDXTQDQUR1cGrai3GuvXE4BgnXFZgHTqQBjuH3gozSK",
  "key47": "2L3JYnPnfeRb3w7auzaYoD299Yu6EWpWqN72kMp3FyKMDiPvE5LnaygedS8ABhdn41LJoMibrNFYC77xTzwVJviQ",
  "key48": "3mFgdqVbNe31WQcjGJLpw4Eb7jAi2Ea7gB3HCu8Trk7deifrCSCCy3GDxhdFoJbT3h4yPq3JLHu8HG5JiTMNRTFR",
  "key49": "3h7DXVPfShuWi948KDC6e6xGSW9WDyM8LeXfo7TbhDTQWzT27f4BsCWDK39LcNxjjZmnLkthHH7HpvZST12Th4St"
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
