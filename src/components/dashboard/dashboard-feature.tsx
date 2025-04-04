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
    "5qsJ715CGqGYVASiVMEpTZJrMWy2MMKyXg7yd3eorTwxa63H4pBTaQn2zhQDVz7u5ofzheTmkZZ36HYMuuW6WN2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hveqmKZWFLr3azzAAKtcaiUugJHxwTaB9JgsHYS8bhLdxtWdUYiqLbCs1pf2UWZvQnE38c4tXKvajQFXMBu4yyU",
  "key1": "4h3XgJvZzMWrR41AePM4UeRSfi6pj4GcG6EUJGjVxj6hVpcAQdasa4WY7uTjQ8JhcgbJQG5vSzx1G4CsihibPZDd",
  "key2": "5kraLzPv3xrqzcMCTVoPnCqHYL76pWLVeWyQcMgYYB2qp7W547SwYuRvqWuzS33V13Cd22NLSxcyCXqAeMFFAime",
  "key3": "2NtvRp6pLVZrShLudPySJQwLgWBapFoFrjXMuYf8Gzo3CSiVFJbRTMgj6a9HFV8CA98tj7pMRns8eig9WPjxQ9xb",
  "key4": "5gRHdcXZwbpe1mTir1SaFKraqY9466xD5orkB1pLnKSs71hzHPH59JdBSWjyYcpZrK3rj7DwbV4qyAwXbVx5LfpQ",
  "key5": "5cTcLpJStZuewyMG5jXvYwi3PUS5pzY18vdFUsjarPtP3ZJiNVqzhoVt7GRyWLpn9U4BA6zUUhFY3S8jEswaimG7",
  "key6": "5BpeW1sk5PCRTA1PSmt171JQuMiqe3Gg7wxMpS6wZdM1rpf13EZzfDZa1tTMRqALqpG9tpvv6Bc7HxnXxJHEeBps",
  "key7": "6613z3dPR3YzZBQz1yidDgrdhwVpSv889eMKrrRYGvyG63VWLYFdomdMYc8zfz3JZW1uysKMSNQENQvvsiv1C1cG",
  "key8": "3BfZYRNGR5FKzmhe6qAtmzcR9kjwqRSMJ6U7eEUQXNZuC6EN3KaL438rdMDgCtrzjLR76L1AdiVb5phkX86RA8nH",
  "key9": "5CRUMuyK26ZB6EgfxrLFZeXp3Xfb9qWYSB1smf6QNkEAnaFWUA2zh2qN3FrG33b28QFBTLBTFodw61madRcvFjwG",
  "key10": "4bRCLCo1R14zDhPs3woZ63k92vuJMES1yafi7zDNLpQhoMqoxs6qBi4SaFDFRcQPs1YbthEUCG66rpV9TccyWQzt",
  "key11": "5bi5C7jvoQ3D1LNH3QhiK7viQQ6Jt7r2Efs81ohFNWce6sRDUABhWQ8SgymjbkZURMMaZ6r4rtR9nnM9oLPHCkT2",
  "key12": "62V7TC3ntLZaiWiM73ds4Ptpv6QHCZGgxpunXd22SyiWRVSJWZRjj5PgeoUmB5McU8636qq9S1PqKSjAY8o4ohJ9",
  "key13": "5Me2cWjgyWtE8HKDv8d7gSF3Rku3LDrz6R1kMLHgtDbk1iMytF3TR1VAoUJREUh2BuXd3toy1coghZ2Q5uMA5j1E",
  "key14": "36pRFJZPm3auBWPDExiv9pXVLMTrvBvRFUvwyrSEBskNSWiTpgKHbbEyHHcA51oRFpZZnjzqSSNNm3JcWGmuJ6We",
  "key15": "5Xem3t1PPoZU5zpdNkwoxbpa57kXSRgLCWW2puvufZD1rZSJAKcpqKebtV3h57Nw3Nv3NkcdfncN5mhdmG3ZrZbf",
  "key16": "2Vb952WocuLfoWGNqBxKEGB8YywGbFxFUZMufaBvckW17NnnCVK7De3idFT7hoT2vkujzjV1xpYAcA6AK89LzDDJ",
  "key17": "2gvcE15oCmueuwhGck6Xz4Q2PfURjSRdDANMPs79mkoNYMjueDRvbcRNqW8dr8xR1M6mHuLw1jhAQjEdmQto8GAE",
  "key18": "51Xhqv72Smc8p6NibeietgSGc8dLcoswRDFDqp7kkMYUphHoUyytsKgz3LgMkU4UD5DHyurnEFZUWQtw5evmwFjk",
  "key19": "67NbRF4ehFX8Ff8bHrVNU7465R6ho1HtN5Busm7GhbM9DpSQTDCGMntusEg4ywKPrtYUumBud5SFrJC2De8mtjV9",
  "key20": "5v2HRHt4Hkz9GRM5VThCyCtkxHhuNG825dYHKEjc45sdsManSKSDBUn3VVscufsDg5jtTWvVfgs9eWPWccL6WFA4",
  "key21": "28UchWQXWw5FZ52LhBNq1gg6ZAi4Qjx751CfG5UtAgh53J3kpR9WLMrkEdzy4HJnhwnC59bNHJGDiV5W8jqZUm4U",
  "key22": "3UyMGbaYdEkiS29D8JpXbpuvDFWhHWMEvCCD5mVVatkUDygTBHKhndmbD2SRjW2dPfSa6quNAmWyHZj6Dr6oB2Jt",
  "key23": "2bhZgQiVTUTA3aGgUhFqi9PzJ8djLtesZma26veWqzf9xTgdWNwHxkBdrqZUbMdaHf4G1ZN1YaW1qyypn5qUrrV4",
  "key24": "5PZnfPUWhpKov7drdKRPtNKJB2uvUE8neGKNPvgbYbAHWanXyK9bB8R3okrTLBi3u5Wp8kpGD3LTvSDnTFUAAB61",
  "key25": "5Gdohyabn5ugUwAwcR4t9GaYscik9F9UgwGT4fYL4kZTLgmBFNTmH16zLzGs6JhVLKE7v2zNyU5KxATi6AZMUhb5",
  "key26": "3CZPyzgWPuNJqrLyrEb2g9nfLGnRMpdoftk3g4E1RuQmaVKtMLZFpZpTHtheEBpqaWAhVppt8NUTmwRvUMZ5igwi",
  "key27": "zfMzRTCVtUjBgnwaz2Td5VhwmD4JobSjJneHzqkyhdHdHDQCSHQxf1SN3BTsYMXFMwTVM2qcAcd4YtxqLKCopmy",
  "key28": "pPdSTtYd5pfF1xGhexPcFZ29CwjQfhzjV4pHAeunNs4X4xExJy6WdobYjfDVzZVGaiBuEtHD8JspEwZteW74SUr",
  "key29": "53xYpX3vApZ6jZzXn6EZP7USyf2xLf6mG7CCspCZeGFqVzzucoHMUPbJL76M5CaN8wir1gqpEnYdXHSdtqNxTAX1",
  "key30": "37eco5ZaeBExUsfinrv1PinjLuJk6SWwyWBNexRT2BA6g2iMKSwuJYhgYy8X4Uu7QULZytKqetoeXTAWDZBeyyKQ",
  "key31": "4FySfFGY3xw9uo86YExeZJmzVr9JHBoFakWb5dm2gx5SpgWTvw5FQUNthExfVnDMUvVZW8TNKuj3FWEJ7rgxxoDC",
  "key32": "34JevX5nrfqB5qKLrDBG2JDTKLSgJeMJghxxYTHJLPaJeqWjy369CaYUeVHYv4iupEAyczzSMpdPKmsYLTEctBM9",
  "key33": "5JpNfWvDQ27dBmi4YMpXBFtAa6pZsz7oyNLnCinwHYWR23wGHjZVB4uVGi1F3w8jPHApw8Qiydnf3n3v23XK3NVm",
  "key34": "54tr6vbMHHcZwztmJsvf1GXsYSDBsDmVyqzJN7ZBD3UjRycYCQFnzVbeFz5dKxPWor7ehZWhWvYS9v9GJTNkbXEv",
  "key35": "2hA3vurVT3P6cGedGgAoEhocq15RW4RqSyo3EPuZYy2nVbFaT3WwuQYYYvLYxB9fgpnM94Q5uiicM5HpZrRmzudV",
  "key36": "3VjykKMK38H9BM6c2cSxTALwMbPwKbuUX8ruJ1awvvx7iVtT3J7aDEVn549GJxBUSySiN7j317VhqfAdvTs9Cv9T",
  "key37": "2dechMbqYZanuJzKBiQVDHnHYPLoAM5kpxDhYzqPPm5kFrS4Eq185esfQobDE4dfC9iNH2mTwy6swxoeNLM4Mc1T",
  "key38": "5H5W7bEZAfUiGAXUzKuVFznCXeyWWW598bJD8yzjvdnkC1nuzm4JB2yfFi7v4iH4RyTeDcora4fp5mf9NKoZm23e",
  "key39": "27RGCmKAmdfs1YxK5wfd2iCpDqkBEhZNs4gZp5mPV7reTuMSZyifxYe9aAP4QZbPDYios9NnAcURmzs2Bxhw8udC",
  "key40": "2mTcRiYbBAZopoD3TeFNRTPY2S16c71cYntHsr89oGKQLwAUFzLH8rBPtHd9HenSxRjkFaTufiTHR6yZ6GknHYHc",
  "key41": "36wVysaNd58P5sRbynSBRwPqT1Z9Ut1P73mF7KsSZ7882AQFzXPky1Ur2rDoHSg5Xqdn52HY3H6P2UGh6EpVyDXq",
  "key42": "PY2dTbPuNW1Wi9EsykWf44ZPyvNrVoADofrtjthiuohnKGLpVYFRTAPh7wfdy4g5H1n6xqqpSD6YigsDoosQdg9"
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
