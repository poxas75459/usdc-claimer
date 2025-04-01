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
    "234fLi8zsWwrPz7Kg9QbE5FLB3XLjJx542CEoSuH4jVqKnyp84hAx58weajz9k5mpHMRSnwk9vCfkKBZN72BHaqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46yGqrHfvWJovUQeeT3QpfWejbQ57asYFz5nE99f6qVHuymSEhCLR3GiGygAeZnmEhefeTfeS8uYHYkH2z1Ysfvw",
  "key1": "ERJ7FCR4HaHvPDGbgpUNikXb9DMNijHAEWHHKTm13qG3H27roE1uEYN6MEuR7sPyHeNJgzR4KYPq11p3VxHb4dT",
  "key2": "36XJpijpduxfcAkAr21Tz26mDuQfvdnae8h6zfunpaPdf6CAkrXpVDv7UcF1YsCnzwBpZTPkQy5j9TBsdf9dg8jS",
  "key3": "2WudkHeLy52Wf9548wKPgFm9WM6PpmWAsv4jgF4zoBzusfQsi9vwoeaPPGVMeiH7ghGRgsx3o5wRx81MaeNdmFfc",
  "key4": "4QWdKX22kNmnDeNCU3vPh8TBAMLNFeTSRFoGvw9uZjGqQMRkkPLWHugbuE5gMag4rsCRg5sPgLZ1H4MpBsPR2PhW",
  "key5": "2jgnnSWAFfp2F1XY5qeX3SL6dJu2YyZsF4zMpMDDupGi6641VC5AbouCb4DyzFkr9cLCweGd4XqjCqyoibpibsVh",
  "key6": "4Aa7n8UNkhwJAX5biRM24p9SE5UpBCYNWfao15geseW4iAFkCoCxKXptANawMPDwoNYEnLhBVSwG5KGB4ytZQsvw",
  "key7": "4seVqZiLT4qzkphDrHBB83X4eVuzuSE6AWqNNjX5HAmDXeUe64tSykrKUkk2irjM6kQ4zCf4a54VvDsiZ63jwtTc",
  "key8": "5htY7JchnZzFkteJB1BpqarrmBLMU46JXdsS4rVUi1GMkCTm82Yzyj2Cj1nPfwKBx3XAYdWwZaEmkndZKSNKTF5m",
  "key9": "3nWypE62bRbtJBfa2ci8uQdD9ERAgB9Lavem3HXEbW3dt1H757UxJPAxGN9wsakYz6WiL2eLrGFTRPhxexPLbUeq",
  "key10": "m7qhxv8GdCbu6jMMA7deXDgH5MpjJt8pJKVL6HpQjHDiNcs2nwuv7SvN2zmEU1yGFShe2BYwdCwWS2kjZ7jHCRn",
  "key11": "5NLjN4dkSteDN6JdbxRg1SyfwYx1EyfoS2iXoF3MGjVS8HGMA4PaE4hnsGYcr9uVsdQp2PRdBYFEY9EjZMXbHsvr",
  "key12": "3hqk3FpfGf6pDnWkqKEpum3jrjTY7rdeZcEegepKrSWZQNkLFtfeM9wrGTQLdLcNbrpd6pEUgDKsEA8x6bG1Rzkd",
  "key13": "4iSYqUpyPnR7kkZw3Uf7EQvP2GYJihnpAjJ1cFhPbH2GMoUyS2VmAMzCTridFKHaXAqPvk98cCnHXpZ24emvd6JX",
  "key14": "36XkZPjZ4DHEKx7kZ7vZ8DYNGizXNDgL1JV164Vm23QL1c3csUquMxNnBfzwE86FrkyBi1kMSFHDNyoVw6X8fpfh",
  "key15": "23rWPFRYrG8DLtQL2cob16Njhn6YzyffnNYtvgL949Juw1vZ12ynNGdY74VMMT4o1FXRMqRcaxwQMe5PQHp2Uks6",
  "key16": "5CAjJim8MsxeqqBhT2E4BiFQq5fTSiduWh3m49wTjzMbypidRJt3iMNeHpqmiPSTNHHTzkDVA64Pu46WLPeT62my",
  "key17": "5cJ7ykopHRNkrHgL7MvDfRUZqR4XzoZ3sua9Z27mqGgxRcn9wXWoq1eCKpscpQhDZZgzajF7hqq6qHQrdNTu8QpQ",
  "key18": "5FwQfeZnS2jNsdNKCMKqftCC1htgqjnXjuZoKRQHkt9yLrwz6iHcG9ZnQpQAeDu3wXGeGtWvVMPLPHxJSJm6Sf13",
  "key19": "4Mg7NpQE2nUp3zWcDraCKXyamThcMcNQiRdi8AvAgjeZC6FAVa86LPoNftvmj39KyFWJZReRXSLruWVrs5v2aRLa",
  "key20": "45vuHbPCXo3JmpUSjedfJUmrdYtvZ8msn1fR3959vjabCFHr6J8BsEotxoYa5ehe5xVqWjtGaSF1P6drE94nrnfn",
  "key21": "39Q1X7QbAX9AWsKJYopkFmufYPWveg5TCPfEoL7cJCLpikxSivkPk5tpmiodhYNXinNngeEZip6gv7TZMCrsbvyf",
  "key22": "5DWXtFjLojWH1F7AXcm6345M9pEebQw3jaZJtK19Yd6NxrUUBNqY4sRWWb1TrunjCvYaLCrWKWb2x89gQLw5xC2t",
  "key23": "zDSVeRhaG2X7N37GRNkWgPoeSCFsSDzNucSCWVmtENepCkiUGoc11zRoLRivwwdQjPEFM9Gcd2nd8nM64NDzvgy",
  "key24": "5VtRNvPyz5XkN42zSwHxLUaiQTz5267xFkDA6tbbzBJKs8rjqGESntwsvaBAXjWEmjt5WbvKW67Z5J5SyAcfBTrn",
  "key25": "4imD7YGBpLwEkcsmF9NhQ3LJtkkDx6ninVbEk7bpjcZDd6sLnC1KQo3uJRSKu6LF93xL9G1gKV9JvY8mZdRWGToZ",
  "key26": "FwYyApGEXJgFN2bQ3Qo6P3TTHiCWcv62ivSqcBBV4n1EjHQEvaoUEcHE7U1RfpuK8zR6QoHMxb2H2o36fKNkWau",
  "key27": "3hRxJbWLgBbH3KkkLUhyQxFWRKTmsvEGE2MYfic2a8EsrtS2RwrMgUp8YDuiGMct4V4m6zJP17dWtP8UhjvctidE",
  "key28": "5WASPaqZU8ACUsDr5FyVkY84VRam9Xae8sFVN14pb1aknA3xPULbCi1Meks1BNDuqF5eLSFdg3RFsEn2iNFBjNWQ",
  "key29": "221bgVmp5xJWabPt1e5hsKGsoVqWB7wyjnsoisEbEdmi1JTchbGE8AyyoU8kG1VwUAGyTK7Dq6a4NrcUSM92eEgo",
  "key30": "4rUg3tjb5tDqcdGhszhNkbvScSoZzf7tbQ9bk7ZNWRB1VoB934vBd5wZ7zuuT4Xx2e12mTCfBDMj3USY6WMd22nV",
  "key31": "5otBBTL1ZmSQyUYkuPGzLM65AKCcSefT68q9dhmQS4Xpj62g3KQkzZhu4egCXJCG2Tw8f7rFmGqnZvbdb2K7ZrbP",
  "key32": "2EYgrmjScntuNug8qcSMTTgq865TyRXbYAsk8QYYWQXxYraya9YcMYaSaCHmhTJUgQW5oKDVBA8Z6ETLFBYU2VUt",
  "key33": "7rdXUJowX7U6hZfZSzj6c2iYrF16etafTb5TJKiKjzr5SkwJC4ARQaCHmVCWpV6CQGnnkG9ygauf9HUPnzogRux",
  "key34": "AisBw6VeSPCRjUCKfhMu35Sds9wBSVtfqKskTRPvqjn4dFwNcrnSRuMCBkDwjXRywHbJMBjZh8vawvbmsp9JGZ3",
  "key35": "5E6b1c9VrGEF8iYzexsJRQh2ZN3TtWtyR1VkiD2CT37XKdDHsVjwKyNhT13obkLvBqF1vTWrfydVqKPjFFrmKWpD",
  "key36": "2FBtGiTzAmWNLjQTxVbvDkc4d6KD1MPk6wdpsHMSKawEsb1JC8EYMigNPvXQ6K73QWn67AyJnRYkEhyuwrtuvV16",
  "key37": "4tUph58TG9XUJSPQVZwvbbWzUDpsTo34zcHWe9QmVNBUrxUSAyxrJFhaN4SC9FGV9J6x4T8yZKWo4LggXSvC7GKX",
  "key38": "3kDQSQmMqHRwKwWXydDRw9su3yZVXdZHhhyGoPYb15URUMtxiuj6HRXpuDjHoSUJWNm16Deg2r8HkjCFBK69Fn7y",
  "key39": "5q4wvKNuPcNsTSUHzHYc5PFayrjbTVs5r9sjCcgpiZ6frgztGEtrSokUDRUXskRTg3oB6obaTx9Xdk39XNvvfkyS",
  "key40": "5KaYtG5vV8GHb9z6V6tcRQHsQkZWg2abTVRn4dbkepoz8oypzDeKYGqws78bjjKAPTMi3FBvDbswM5C629dxHdgN",
  "key41": "33pupxix2mRXFZ1B9WprrtPiGEtJZHnvc6T7HQHzTNFfTVhTfkB3LdUfb2JKowtejpeBECd1wfuNF8Th391s2DyQ",
  "key42": "6WQFuNyz41erqq8EJddYrDAoZadPcwkvf8jcudEmKV9KFFLBUZqWXzHxWWFUV32yr5A7Z8neh2mA18nF82cseoR",
  "key43": "2em1RU9RAx9HWeYywhZBECjTg2AFBvZhtotZR7Cx4BCx6iSdf6yaJEGvSwW48XMBPpMjHC8YHDuFrpbwjs4dsi1y",
  "key44": "54oGp5bGHYLfs8x2KhrEfZS8CrbThUNW59ut9BoUvn1jepdbt2KtTnsn5EdCq7vuLnzW7EZ1pppZroeCebtWVVK6",
  "key45": "3dff8K38G6o98wVTGddpqL6dPNVhtdyDFG3Rs5WpepgUetBcRw3b3Vp7VwujvbJbWfeK6EJ8znnezN43J17ABCpP"
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
