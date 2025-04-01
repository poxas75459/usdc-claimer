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
    "2L284rQsGrsG3QuPz7Qh9eXzZG1JCGaBzyvZiGCY3GXXTYPVtB6XWoqF7oHNeBtY3nKYe8EfZaH33QNyH19wnHSL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pFb9oBV2CGqmKLKeSq4wTxb6UHs16HsQdTDTXeAsuzEMhqr3MDKVyfT5ak7ukUxhLPaWuukbQozxnmgReXk5XvN",
  "key1": "24bkrvg1kZGUPZYHYC9DqVr8exXH6xHxPdGXmNszkLsZiVQ7cAviLdNjBfcLkcCfk78bUnFHejCYcHsLS73rqLBQ",
  "key2": "4sc3K2TWr7ARUJdBYYhvJADzxdSV7JeSzzfU8jZdSsEnf7RkH2MUFJZ7oT6dKKYecjvptGKQLsvRVLJxUA8EmMXs",
  "key3": "2NseYLXH52YHHrotABWn8VPK5XowacnCBeeaAfHgRa6nUhnAJrC4gy6b7JQKjWwMVSyNwgTq8URvYDuon3Bq33Fe",
  "key4": "4mVW4gGmnrzgXo7UHWt1oJjXW2F95tkxSvQoQZiteqZ96fWenJapiMvuqzuE6k9z6pKAS7zYRhkV17gSPJPrZs4u",
  "key5": "3dsSfoMsVckb1Cna96taSAJQCpRg7DaoWPmSVM5Ep79mJAsWm8GkF4pmrSSPgAmwj1nBE29dZU8xshAXVoc8bFRq",
  "key6": "4NMmp8HA1qnqYyauYwA3pwMGyGSQ2qFAu6yTMsZDE5FPcbpew1phbchyX3eWS8niiWDM72Y2sWLgvyu1PrJPTPYS",
  "key7": "3BTZg6zc7bywuExGZAdhvzzqBk52kFRH2J1osLVhYu29ipWWHfzKzEpmYVpVdnTCJ4v5moHehssVtkrxDZrdjPLm",
  "key8": "3WBS8AotqDUHm8nmeDzMJe7ZZeVKi7bmdJdDitmb9GURSWDZcAMLHM69sjjYPPRdHthDxkxL8h3AaFayr51zvoC4",
  "key9": "5LGA9zgCB14bLTMuRc7kuu5y6ZrsFCZPdQVB4JoZ5rJPqHYYtNHxmVerSQ4XYEndFSvcUGWP6Jy54EGrRyBYvu1a",
  "key10": "3wmCFDtUEfDtcSsQosmQmyfUKG5G4TSUL7R66tWybpjccxHdLwmMwc31NuFz5WBCqm6SMR5KJuFM1yiiTCj8oAmn",
  "key11": "58yqFL6CpGwgCH2TjvU8uwv29Rp5KPdgLPK15qC4xzRTAGwc7PLJPA5sxGF8kUsCzLdrDyAnnViiwYM1vnNn6LTW",
  "key12": "5s9URgkcLwYHiPWdF6SKwRXkDLxw3uqNZ1cAwcjnXQQmW6HmevxsaPugFMhYyGVoYL5cdysRkTZZy8w5Fb4NfNqN",
  "key13": "4EC6Fap3Tn8m7qa4beNGsnHdTjeXM8tejv4hr2H8NHS5n1URo97yGyT2meSUTnw3XYmAyuCNJpDJuCFpR7zNYCLM",
  "key14": "fmxMUeYdGTBe44o23MnDAiERNmnHjFY3aFxfEN38K2mXXkpRSxMQBnkKYGbwaFFvWxQYE47WBkzaXZoUycmPiiz",
  "key15": "25xqPXVoSa5LT5EiDJXZyvcTQTSAsv8uKk55TFhLjuwfB6hK5RUFa2wAFC5jdNq8Jd3bYwW3q86DRgRbEsHushwg",
  "key16": "5YrikufLtekuWJG4TU3NLLZSzjX1AbRjSRQEVYcCcde3TYz5kPk4VhppLrmBs8XHN71v5nRLvdpBnmDRyjzbfxCF",
  "key17": "3CBY7g5pTKZXopvsn1oJwbPgQuEYMmaCuwnS24UTcLs3ei9ssDqoP3LnWYVfEwBbgdRv7eBcn3vPM7tzpPrgnDPv",
  "key18": "wLq2sVGGbXHAw1PkQ6A9rapFXY8Brz1UJtFA2iJELjEYJBVSrVvHr2YgWDZE2xGVrbJzTMTDSqTVjK5nG7sMbQo",
  "key19": "5Yr3ySpM8yGVpwsiZPrJRszfH63QMK9mNo54inM1r23iUrdnQXbYQih1xQQFoHuyVKLqYQyTFRnSgzXJowrSN9uf",
  "key20": "4DmRWBh73qLJXmJbw8qrLKygYXxtFpWmhvL5qJyv6mvMzUHSxNprVxVUnCryse2dHimXLopWZU2f1TgJVoJFhekR",
  "key21": "31kkcPEZacz4hEeNS98tSKRu2RdYf9kKm7DD6UqFyx9MenQd3WykrjRePxx4KoBnN2qCfXmr6YJF2FdUfgkCGULN",
  "key22": "5pw5WCCH2ntvRokyeVEbuF3HswFs64H1pYvjSup2rzDagBbVkPivkV1uuPDe3mwBpJSPQ89JzNkhBNpQkMgby96n",
  "key23": "JXE3tGJnFZnBhxoTdxXvmrdtssmpd4JvbxtN1wA9SWN7jgfRRpswwDa7xmKM92BG3NQ5yVTziVYftteoE3ew9Tz",
  "key24": "d5hNgJk2inBcqYmSoBt9H2vwv2fwMXWokn44BXK6teLiBvCJxv38TNTUC7swSYwqxSzPYLibjDXJxik9RZGhFV6",
  "key25": "5gMYhYBYDnSiy1ZYoETA63yyJbXyiCz9L2CoVRggSHDedUAvSzpoJv6Cpj1UmbT32zN34FDAVVGfijdTbcjjunhY",
  "key26": "4MFGRAxtUqZYFid46ayws7MgXd9GX5A7SU8ZXHk8U4xkF6kxeWdALvTJ4BJi82hKTDABSmxoZBJwxSxvD8oQyj84",
  "key27": "4CgpPNik6HPSU6cQGzRACVD29BV8oST8jaMb4yupVgkWEbT6jvnHgvro55Bf27gTHtsHNXqsauQJYJBXbd7QSnho",
  "key28": "6HnXcN6tgmkXRNk2UdX3CyZJCh6cNWSi5L8DxyKS3vitXZ6psceKv87FTY73FSyZ9nLKD1bBQZFihrdNJjWrPWH",
  "key29": "3WP78bviauZ3LA39BSmLXh1JHd4YgUtbwiVyKkEH6hoQzsB1A5xDS6aFaBq4qz2V3byt9LULJkiNwkkN2vrLDwyV",
  "key30": "4mykoejUVTtRt4BQwwyo8kqPVg1jEyjWeYJNDxgEPkU4nXqYCBRsiUCCnfADePkhKJGDmH84SB45PdHXHWN8jy7d",
  "key31": "2YBNQtsiR2PVnJyHpRpq1h5TzqrLKhtoE9bEQzYfyxXLmKYeuPRdnPJJgGJiWPmdAJCYt14PQZWvBtPiuypFDbGa",
  "key32": "woPhAUkXw9LQbi6VRnzfCso8Gb99wQdZ7tNHHtD1G6DVafU9WQyBDwe4BQqWgmP3qwxooXPiSx3gaC45xh39DXb",
  "key33": "4Wfb4V5pUERyDqBswEcrAkbKrcf8yvgjB9doQvGJA2BWLEzhcJYEvbNBeN2CawpH6gJKKVg82oXy7ieVnXnH3gJt",
  "key34": "3K9XqfPpWoUt7929CtQPRXEUt6iaeeTUmzZ4D48kh6gVxdsgGAzvErLms9oDgiraF1j5D7MNmHRTJpdJFGCKi1pR",
  "key35": "31GGX371qdmArHpdgaex2Lb882NPpvLndHkcEXnLnhTmWFFbRk9HnhzDY3A4giWuHocdgdTr68X46wMQHCGGAmvx",
  "key36": "4duC1ggd6kzWtLyvemugivwY47z4wBH9KkKNgzeXpALJp7tudJG1RF553huDzT5HbDY81xbMCPBK91jem7kQWXrT",
  "key37": "5cjBxuRpGmRpeQbUnDvPDJYqF3aMonNC3iewwrwBtKZ994MPxpyamngqwfrEXPJLcdutjMpvVSxr33qTJY2Abhw5",
  "key38": "2ijLwUHwW27Bw6erVRE3C5axuyEXg8Bk3QqFCr8qMexW3Zya7bFf72VmT6fQ4xrQssXe9dFPRpA7DbMVHb8nmnou",
  "key39": "2z124ZRdC9YZPcN96R6vxMYvt5Ci56KqXHyCo1WL2pJG2hWbEBFm8vQPkyDpu6ejwbNXpQdR44b98uDhUBDaErpK",
  "key40": "5wXe1MaP9bxMor1jcSJLj6V6D4qCssP1pz4BRExPb2v2wESu7UgMrAoFGo28KLwd4ZaQPGFQWqQh9yTKpRDn7wvR",
  "key41": "2jdjaMZGA5NhYg7u4LGBySZxenNEU8YyoMXiwdWtpL9KnBxTs9iYCe5y8vhYnFQJMG2PHcpdLcRDHiFXCUVXMxMa",
  "key42": "48r5L7iAcrnQjeRRxKoonz9m3JrNVaNN4zhADgeVqfCZscyjZDP4EG15FDHAq8QvkqbLR6gsFfevJCRgNennmKgY",
  "key43": "453bR1o7PornwtE8YAkRainNNJLVLHzN2TY6t5tKeYxJcCLmJgZeJcdppzVn2VH995Tdzbo8HrefFWgbLrhSRMvN"
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
