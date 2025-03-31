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
    "3bSt3RMVhao5YbqyrxLPkcugDEA5cgCFvmQYBCgkmbDxhVfwqhhXWpC7ssT3HKuAPeXboH6zd35u5Q2p8CDpweZt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VBc51zeVhf6o5u28L89RaZXsaJu1mFSXZgNf3cra2nnSjSP6NWcdvf1M3DwGJwuxE1sJCqAqmYpGWG5Ycz2YMDc",
  "key1": "46E5WNCeH289rdQhZeEqdtoK8uz4tKqPaZWGsfcawEERFuThGHSrvJ4bjigAhT1xYj2EyS8gwcsmhTTsGtHZAbdi",
  "key2": "4ixhPfYT52c5hPDKsBKqyjnceGpGTkQEHw4rReR7KMRim66BVnUiM9cZc9tzzSR9qSZQMBJ1rzWw7XzJVtzNZ4hR",
  "key3": "4G63REqTFopXxWqxdAW6Nw89jR1abnZY1e1x28j3NPwPEXgzdQzSTNbhP5UdDy1jJtV9x4phATJ6pm16BDWKHixt",
  "key4": "5XpMsgPEoVicLd9BbYtT29boAuudBPZjP2GUTntfu3jwJ7suMYBMNZfu2SS6jGSLfomvBB6zWP6FRNLUoLqrfyf9",
  "key5": "5KC7Gk16nqAPs6meJJXVUFauwcqJ63t8XerrDGAPjLFA9rfjkwMPFD27t5JKijLNiF9XTWyUqm1a5M7838UvFn2B",
  "key6": "vyujNfc399ozjYuL7KrvEtBsx6BuKovBhUwSZxHBJm9mNT9gFkieyH4sKAZ7So563uCTCcPaUiAwUHr3QQnLdwe",
  "key7": "4nC36WjmvXD19cHSXRWou6ipg6jr8NoPiwf1TnurK7e827cQp3hnpWCSr9cFk3vvNgFBhE6qDmyt9Cn6AL4h2AKY",
  "key8": "5wetYfgLvyzJuJmR2HJbsPodTJStvqi1aep95t31kiKZUexwFjHChGFh7FF3zwGW44kmhRMbohFpTyZHEx5FApQM",
  "key9": "5PktEM4xrHHxyKYPm8Qt49R2GQeCH1HNKJq7XYJqjX5rgQCzUA7WLRpfMNHdVcFnfM2ZLxyc7FfkYRrkTEeoB3gb",
  "key10": "5Qa3Wk3FWY3BiU65bbcRzhwAVDJ8Nrp5gyJn4DzSqzqGBcTmqFR4phvaaAdVKFLNPEw3XRxLpTg5XfN8xDDZjFzi",
  "key11": "5yDoLY6zFiDBazwgWMn92bLdPiFKBvnViUqrYae7frFNDLNjGNHyChVqL39xUJPewY83KTm9fokiqHbiPrj6Fb2C",
  "key12": "2ACdbYW2dURPR9wX5kMJ52V2EinafVm8azB2tBNrtHRY3LTP5dps8fGw3WBDLg3BeDAJAa6DBWhyyMPrvtexUjcJ",
  "key13": "3JUzkxT9nLSPt4o7vGKbKqXMNTeeBG6QdzhPvn1QMLoeodfEtNMmdFVnBPkYVmaYUWTJPBMK9PYStt93qS5CCoNY",
  "key14": "CxaZzJ5knrEXD8m15bTCi9Nkpeqe7DypkhmQtKzW7wtvHoGQXpYam68TpZb1fJqiUdRtjEwrEmdtq76KPBAJj3X",
  "key15": "5SmH5Btk9rxLxtNZ5PQVZGS8femDgpiXs9VvAwr1iKdP9DhCSHTHajCFK9CN9iDJkD164Xjv1SaB9GAB5FbQwhY1",
  "key16": "6ZRSVk7U7uYA9iWkGo1Kfcj3Q6xQWjn6Wruq2SfXqVETtWvfGCJB1wHVpyFvAnAnFXb3C7xHmBzQsqKeiDB4Rnm",
  "key17": "2C814eb2zF7r5p7FmQi3Qs16qGf2zDmPkRB6PNdfxBTsmfR3xLC7fGd4hKip3SQFxyZ4FH9HbrrQSYQoEnenNe4M",
  "key18": "5wV9A1QnCxtNNUuEBFDGYyHdDR48GUoSHg6TuXuMnMP9fnRDRPxtJPAUeE8JYKUoq3jntgcG7myv1phwFib8MRsm",
  "key19": "5vSKALEJ8zULk1GoWtFnaRS6ARc45hgzhbKD3mzQXBvx91Rrtsi3JxeycPxCSpBo9NBdGTvA54p8xUm1AF2iGqUC",
  "key20": "5VJpock258NKJ6HrZVpmuJGb1cTd6MwztenaUcCZozq8Dzj7ZXdh8Ai6Azsa3aergpNyg2nPEkyJkuhBeddX6CRF",
  "key21": "67JwUb8RajFjodkQNn2PZ3cxqWJybgatCjx1kYRLtoTEBkmLe6joNYe1EbEkbZ5FbmBHe5WZsRAtkGuiepKpd5sa",
  "key22": "5Qxuhp3YyqCEyavJ2R7MG4VmfpyjnHe9fKyNgXRiaoMnmGchVeZhGyzLoxmgCdSvekHMLonM4KfDBV2XSgJdAWm6",
  "key23": "tzFNup6ZTbg5zGgGz16U8Pp2sqJShEUj421QoCGUQCx8mnbdDNr2zgRzcej4Uufq2X6swZGU8sa3gph8gKhWJz1",
  "key24": "AnU7h2cKg7ndwdWuBMbGzRDw1q97h5orG7eDaD7KkmJwwHNuZCAhSPqNUPMax89aegM9hyE6qzMsaimgs2sTkkY",
  "key25": "ys2bgvGzHFo97GbeWCGaQsCTCNMt4JLd8jgxqk5vKiMPEsC4dqAw8WeUF22TdyLJVKiJYdrbfHujVKQsAqYWEsE",
  "key26": "5KsUS5JhHfvN7FSaKeGdYTc11uGfJiu7CpWhjKbqZEqgpZgViFkfrAFDkqyiq8c4Jz1AeSJH1QqBxxX1QLtR9uZF",
  "key27": "2ybq9S9ykDEL6uEUbJyQVxSjEDZBnFRPEoFR8XHdoVQ3nSWz6UCYsr7ZMnDiqYG93JoSPMeXcTM1nXgwKUMSvHY9",
  "key28": "5YJavMj2i6LPD4uMiWVy89rZyVGxdAvYKcYrebtsqbPd29iy561EuwbusEygqbwqKfVepyLrHYc2jDYyjFAsFwmP",
  "key29": "5M1CAqJPPYMshpCuVggUn9Fdo1EMKjBs8kjxgpRHSsPSbaCApRXkUeTozrupsgfC6yw1qvAWPFts2bAxD2NS7n7K",
  "key30": "b5Enn4fFJNz7uZEJjD4XFkpDkWvvNYT5GMbXafkGG6DYzLGdpCqas4icSLARUneAegjJ2nYSxDhTJaVZjD9N3su",
  "key31": "4G9LVAHPaRMpFLdX3zjreeuytqKoHEUANFWcu7e4jrBJTPjDSbkxH7rZPMEzGUwgZaEmWUu48DjyER8n4sNMEDXF",
  "key32": "xGdjThWQUso2ZT9mGzWSKnA8ZXm5fVfAQAYkY3cdrfudcrnmGPJ9GwDLUVqauAbCwSWr7tDGd7h6P4E8UStjLfi",
  "key33": "5rA2a7619aCBu27iijE6zcVRAYQwWM7A4BvuHC6sHAKfrrJ6gNxHK7j7vWsvo7sfkKUG18dohdScQ7REwrFvXhMb",
  "key34": "vCqS2LcX4CaeDf88QCWy7BQok8P36pxbXoMvpKScmhcpkD84AXvscgbobnU9USzkSmikYM2Rc1UCPRAbWUdPxwv",
  "key35": "4jmes55mbaqHaZtT13nJrMUCo4DEHenYNvXzeLPdXUXwMTJafteT55smSG4E68YLMVGHR43WFBH7kgmcpxB4ecdC",
  "key36": "2mKYANoRGusvPGi2ktSeV7BQB139gpVu4Ph6eDYrfzthnoubMm5Mkom5RT6USPJpBaCW8Uh2YJkgFeHM2drRrvvM",
  "key37": "2gePRo8by91kwS4S8D5HaQ6yZ2PhGdtyoTmH93d33yyoZVbMd5v17mREite8iPMpAmsgvpC6JJtxwf6qPrUMcno5",
  "key38": "5tKDWvf7tbaEWQvPKr5vE1XfLuycCkuqqywaSQ8r9s6rLbJH1yXWKuuDij1apbez4CqjqiFuKKTPmV2wLLC4xxJv",
  "key39": "4c1nNGWj2g9svzkdawfjU2SqpinyccBkodPNfxyVhvEMgtjinGsEURQ1Gii4uZ22DsZR7q8Gf69ZXSN9SUVUJgmz",
  "key40": "3t5Lbu1292pd4oZomPbHTKwDAveYsYEdmhvtA578rTnVeJBPjL5M47nNzr5VumNPxzq5nJqvEceFQueUx454TXUv",
  "key41": "2oDgPyjpJFxABrbBYNbngZoBXu9Ve2HF7vU7fubLzrJCuXe9vPjJJ5P56Yg2svUM3U9pSi96hQzjN87vymi5nABL",
  "key42": "5PEMWoZ3FwwvwuHSKx1X2HUpw6d82taQY59kTeEDMq2bZrbJKrj8c7ce6GQYXECDJ2axmhBPactySgrkmfBk6mof",
  "key43": "3rKTP6FEkPzi1bbhqs7xdtNQXbA9erDEy7Q658ZhBps2fUmCf6wUqFhDVVyEmJN8wdDXWQULGXtSgy38GLuzribz",
  "key44": "2jdB9vCa1M3mreXLNbEyC1y6MfcbGFtxNnP44NvUDYg1USxptrKDvaD8h6GBu62aKgxJzisLToeQptbgxWVRrG5f",
  "key45": "SdJFM3isdTeWNbDyxyiDRbzhcMN8Ki9LzSb4qByxm35irYxUzZ67pfkWhB3WWd3MXUa2eHkgWTbvMtAkGTy2X2c",
  "key46": "56BJTubQ9gTaipNjCFeR85kQpuFzRwDWVgAv7ci1NYs1uTM1AvcRz5cUXhnaVampmznGS354YrUjbDnkBxAfXL9s",
  "key47": "2FBDBDVxPB7ubGaRmGCZ4kTHU1brnMrEsjfRzYdR46EpeoC2KpDN4qACr3JXx5CHQufnw3j1seD6zVRW4s9WGqir",
  "key48": "5EAeZJuNRs4xHopbwE6EWVyA47WsJksbdTrQbL754zJimM9cg35GumTJN5ALKfnX2t9U7HSY1L2189MAR6wBpzyB",
  "key49": "2xz1JBBoxGGnZnuXuZxfR9jCAUX4dATcAEdEXSXzXackL6LC2iMjGXQxR2HKRy2U5YJy7buaVGhxzem1AUzJxyJi"
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
