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
    "2QdiFfJZgHSwZ5SMxSuMuw67yLMUFmM9CRQzsssHgb8B1YLRNp3nH4YYEB8JAdA95RmbDKDSsMziBpKQSbt4mXwj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ejt8rN3Rd1xUkBp5pFf8rFEcdkwsEQVp3Do1ZTPsmQGMHzNM2ZScd2pLeYZiyMp4KMrsGaay787RZudogb2AgTo",
  "key1": "3BTBxBzE5Evwrbj5QmoxKXNTdj5v3gSvwn3mH57huMhDJ1WpVmEpQ5yPUNSaAz7GZEtphEKFsqqRmYyd93oL7New",
  "key2": "5kLTSqykkXWm57xUmUyvFzWy2TKvD4oiRVZbJiAnn5HgupJBhJA6r4Q7zSVzebYN8siUSrgQoyefi61aW69XViwt",
  "key3": "1bKvnjgQEqJsMMkP1fGjHh6xkVUeDLciPNTpfBAW3aqud9VrRDC956DSSGzAv6KsfNwuuwwL4z2ScepH33ozMux",
  "key4": "iPxAPxWadpi35sWdzUC42rQTZ2RwTs7KARGfDZs2SyjvUQT7ux4ErEcsyNEJAHpGAKHjRJCS5A5dZ2EBRawKyUM",
  "key5": "xcMZLcNUPrtST8Skm2VqF4FiTbTKDBKurDBpzkFkSEVm1tBUcwLXYcRkLXW4tq2qCqFARwznHSrv8pnC5hvLdN9",
  "key6": "63upx1wog95Q74sGY849xP9BD8y2vKWqFGBjEUFD6ef3fCQFviNuuHoifM3t8uBQpcng9Y98DbZTC6RXM9e4rgKR",
  "key7": "4j8giuCgDgyTeVvBgW2gZFrfcWvxVjvxuXmLJ7HpWSRt7QiC1pPwLR3Ev9sKzzfiRPLhi7xDRYvXjZ84g1zfWfAw",
  "key8": "28PijSs94zxBr8HHxPCmac55F766sLW46RBkmKvdgNA1XsZiLWWd6Qrp39mNvWVazNZw71QWdcpLF2VnMrcGepeX",
  "key9": "3QSSq86GeJJbw4DQwX5aemGBMQPwm9wsjnkdaPgFFh4UkgGomSFCEyu5oZRJxTXSoXQcUPozBpMusupF3AgdbtR3",
  "key10": "3SrqaGChMVBxT23twv1gZ2hfhgXpG78XHJAXjkf4h8VRzapcsRtUcM7CDZ238Mg3Pr5r5TcGQok9nKKkN8SMN3F8",
  "key11": "4K4wvunNqfLWfcmL4Qn3oz3EBpPd9zLHXZdEghQVvYcw6TG99jHNRCDBwotR52VTfWFS64aufdJ3mEuZEiscqxoo",
  "key12": "QD87TgBwhppZmZxcGXT9LkQSoAGLf2KFYhQNcze796a6yCLP89kLBagYrKuVgLsT2tH8C3KhMw4GvkNXX45sTQ7",
  "key13": "vdy9AoWhZxm46feMSDrjPRhawX6bJpV3DqngppyqQwL2odGWTcuPgvn2BkPqaG1yzXZNdsqkcTSJkdYAms6dRAQ",
  "key14": "5eoWMuZYCmDK6jFXPFbHNLfRaS6EPB2sPGkfQ9mnDpKG2Zz6viLwPecvEMZkh1vzJi217Uast75kJ4MgFLiYG7eb",
  "key15": "nseKisdTryEQjUbKdqBkzpxHYqzctcJToGHPPkZaG7iGY2gJGCgTx2ngCWGRbnYJct1DWC46EU4nUtNjqmXt6w3",
  "key16": "4P9cUzfDhFVVg3trY7toB4t8M5zxMhUQWsn8wMdeE2zCrnURwnix8xuv7GpJXdNYmL8RMRHPrARQwhad9azu7eA9",
  "key17": "53Zxa7VEZp3oWoiU6p5KKGjLWz6w84gnrvkEuWdgihqTrg7f5WB3LMo8Wj2uEj9JFvRFyiFrHJPKFt1FookC2YsZ",
  "key18": "2hpTjxje2xxjcCFqwqKxk1966n9kkhexGkFHTGoA9cmEfFoXanNRysW5HDR22LpXRofQpjrUcQ9iJaaEDP1R2Jij",
  "key19": "5KNSXQTurLNK392TLvTNtGvG9fcbKQRzRHLT9NC4YbwRfbePHyMwLKWXDFb9h1oySGLxfyv5U4mmxMMY5Z2A9pES",
  "key20": "r9UGHjdNHQANBeasgN8TzMUAyBXcMq8N2yYkyEG2yi73Jnb9JwuBwVbZB2n29aJ4nyxDBKBjaNHRNN6jYJvy42M",
  "key21": "4C7n8taJbZmLnAhNMTyfBUFx3K7CKsK2g8MA3tyXp7iLZM6BSUzWQnm1wUGLWeaLpP2oDMT31brsDyDhYMyDUa8a",
  "key22": "xj4NwcfJcj57QFa1ThScupAjF4tTHdkzkPYYQr6fuJnionSUz4eFWLjupJ9rpkyjAKTJH81S1V6eHvntnQ2M3tq",
  "key23": "5qMvzGJ88qKRC53d7rk7FQRcKB6YC4HDQkZqCBjamNsMA2fk5s6fPD3eiiWjWKaFsnWdyYdeM56AYjdAm9R8ZAtH",
  "key24": "4pBoT6gyVnyKDTCbBZgnc7CWDL3CwXxRKBtu8YqaZnuMB1emnVQv71DFeJiYSSksC6ArUJMPC9Re5kLTP66fmeN9",
  "key25": "pF3X6sV8YQFnoKmUZYUjZYUhw7xvzUQKDvLVSv4QqDKeTHDRULbxE9EHEdcs8MCQ3Bzs4zrjNe1wXXZitDCs8sg",
  "key26": "23s15D7zTgxLDqWni4QqzHY4yKizFpXwsMRb4V7oLKeHKq573ZFmTjbruinfcXPvkdrzepNB2SDrk74wN3hU1PBT",
  "key27": "5CaNjuhudEePs5JoYVAAZ8Mt3U5wL37HmFiDgHMADZTcsRvEoLDv7wYjkMSnu3oSkx46qFKTgVTT6i6r2tcc4cKi",
  "key28": "4e25CGj1NBJt5LmCpG7s19TWVLxi4skr5TfaAmsyiLvE7j2qUvMuAgQNd9hiotxsUcN7DvPHjKMzk4qigmtjjkgj",
  "key29": "4orq7pdxK4B37XbnAJsg2vxwnfH2iKo3jTxkDQTwYWxua7GCxk1BY47Fij2hp1AJu78M3eXG4km6iso1x5JsuxNz",
  "key30": "NPUtusJBdGdDfhH6fjqUwEk3uhuVdrHqdt4Fk2EXvpm7JmCGu8QinWutGBrtdyCesv8N3g7sViZN7upHcU83Bf6",
  "key31": "4o1PuShKSbCYf9TxKCXpdq1jaB9K56N1TWRVFBrt75fCMAhrnfNkwkLoUQkQXsQG913EAKVaMBBrmYnr4M8De8Uz",
  "key32": "4VvEtY2pV1PAqdqg75oYPhCbZPGSe62QC8cW2kufBtsz1eJFqYUDsd8w1FS8Sw8wz9F2jYS7euXcTAypD5cSf7Cx",
  "key33": "3RGgAERZRwjCdhSJU4bLpmqe5qKdPtiMjJQKRvGgrTFNAiAFj17oj2wEiBT7GjJN5jJ4xPSPYrotLx4h2kAZaEnH",
  "key34": "5xsgbK9CLvRsKx7PNS4JPNSZW61dxaLsyDUVyGDN2hc3rSkZuBKWKk9a1H2HL95J5yEnpJrcNpSC7esCDinqNnUF",
  "key35": "RRJfzharmct5vzGyRP7NRCED8cVaLaDBSLtJLhvg7P16WTqSnJeUUxm1xUA1tPeMGM2BfAtNBWceK84Vd25cLSw",
  "key36": "ahP2jTaAffBWD5xk2L58WRJUwsjC5cTAFRpmBfjFQ7ZomYQAMu7UmaM7UHjfYSeVbsSeK7DsuEpRtakMUq3Ljpb",
  "key37": "2pgkQvXT9agKkhpUpawrkzRH4UuP9axstod8LGfZzjiv1qohuYWJWMiN4N95droQ1tpTddFVNc2tPnbqjf1FvFXX",
  "key38": "Lw4bd44DtQKXPzDA8mhL4rZf6Lt7Z82Wa8dRrqFMeXDnbaobBjCgbweTGNku6nE3jD6xuvtZMoWy6vor22ks53F"
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
