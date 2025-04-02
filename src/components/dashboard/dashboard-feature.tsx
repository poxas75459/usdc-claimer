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
    "4BN2T6SxUEqZWhCeD5KE2pEwoLSb6rYhuPFqJHMxRYRX25P1C5KZUTx4JKst5QZc8vaLmxSkfpyTZSRyxbN6h1tj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EdsWDheRJ9Aw14U7CcPjaFqHz5JSPNhv7dtue11C69tHLpSoUYbEmMw853JrRig1y8t8Yhm9diP5kBw186kCe4m",
  "key1": "5mw9QP8N4LaKD7isViEEYBJ5GvsMHVk6YsfSmG34YkJaaYYfHyMc2PnvEDa2uQZ4JzJnFry5Rpx5w4XSWo36Pygk",
  "key2": "46mjogxH8oGYS8ixgYfyaUoWv9tyqNHkVSuqmaCnFniLsuVWNZRgg6mivGveDNEsqBsx6GPYgJTUpQh5DzX3XwV9",
  "key3": "U26T8hiRj5tr5sGgBvdRvkdvkeM1nyRZo7CW6RLmGrxQjDpKQB9FpW4UCKZbyV2tUEKikiT4zoU7wx4s45LiJD6",
  "key4": "4akcJn58cTyFfeExyZr8XN58RTHdhh8TPQxF2iR28rGsrLvwuiCmr4ZBvBRsiWCDFckduwP5k2rshkrAfTF2nm3X",
  "key5": "2DUn1vN2md56a6NPvD3dTCJe4MaKnFefVumfV8E3e7EibQXYWUn8hRE59J8hw8zGiZymk3wEdrtFHJNb6Wxxxjtr",
  "key6": "51Y17YiNqtmJXHQpbC9o6xqSvVNeKQzjYq5oyy5yzemhAJE1ip4mxuYUd4QK1fTUaf8WnH52axzVASRKne55AHuK",
  "key7": "fHswexDkA431a1P1QdYgA5YaJXiRJnyetqYqCPLFDB47e7UK9zgxhE3YKqUJDwKUsUZZ8MD8mq1FsP1aRdYG2rx",
  "key8": "tj62TPBFYY46qqmnaGevRfnGfGXnpXdo3xKuhf8uWWy6JrxRF63FzwLHN3HPSorTQ347mfhSHPcXTXPHr2NbSMc",
  "key9": "2rmZpreKtx2yza39WvmtyrdBrLUEsGKpEMq26MBVXBMGFUZNoaNQqtqLMmPJuMGF9SvT2nvPVTdyd9MVB9235nDn",
  "key10": "3bLCLZZRGZJHG2nGG2kgnZDNLX9reEFA66bKnmPvYLZC9ki3ncxZvDkBjj8YXg3RAUu5sSU25KUXNXTPUin3qAXy",
  "key11": "3j4tA4XgQ9cYvsTs7dAaMiL5FjYhReAveos3xSa49NYBxKgVBjC7MGZvmquU7qsXTSyftFkyiesJC2NH3zQD19RB",
  "key12": "5c5NBCueYxui6yZukZ9RcnJ7MyLHHW2TUTY2q8qzV74tbcCizEHX8DX6iZbcg9v2UWdkc9o6kC7aAuKtQLUs5Sbp",
  "key13": "2KE1TPgxi1unK88HVefQFWeD9Qm8VRnBxqbLsXdJAja6Q4QMeq5pkuFfqKshioQ4tuAwUHrzsnfcMnAYJCYwBkrD",
  "key14": "6TShrWZ3C98MCMNCB4svqCDyWSsniAUxQfFkaTC4sKh5G5peHnLQMDFqLhdjyTzseufvfgLfoH7SsmeQ1QKbPY8",
  "key15": "63KtNYYdRMYcbJjHusPodyFiDykUQcSpFNF8hY3Xdi8JW8xGwZEXSjhf5CfNF7WDDaUbTtMoi8oaNSmHCALEoKx",
  "key16": "4YxAVxhg8A2nJStD4WNC5Y33Xk8hJFGAdVuZWzEhCvUvVigw72yZtSEuYKXkkFBZmHTSRyqsogcwiaf6Fn2gZDrc",
  "key17": "3SmV6PZQZxbrqiY8uo3XtxtMCxWpwp4xKELq5GzuLuLPNiszDdRhL8zSW57mkAGuwiGSXuEFgn8gkaDgqS5ghrrT",
  "key18": "5KWKxQANqUrmdi6qUakxy3SP7UEhwNTUNTar7mpZKhQaFxxPrRdWKX9VEBZndAEtxePLBKfEYEQb7kd6sQiFU2qt",
  "key19": "2nKeKehBPRjfd6irALsAQnsZMvh1bGCPGcq29BWTAfLBnTuzs9bJs5Vbsd82c9j1eddKTF5mzffi516MsE7HhreV",
  "key20": "3qqmMZ9TvvHsMuERWZvLWsA5cQe1EWAmCFteSTML4Sys8PycZDmtVboPvaz5LxaNqJwrt9LM2gJLX8Qjt9cxgRiX",
  "key21": "5moyik54gaqQw15v1kRRc4LEL2XUZRskmKQrYQ18X6VqKeBGAUo521jePboPs99PiSD8iWhXA837Y6MX6WVbSemR",
  "key22": "5m3tjdVFXczU6Zph8n61JXNDcAMc17WoKgmGE3V3LdYAnjgtMp57JpJ7qP6rbxFVqJU4oKVBTtwGTYHPuU1hMThP",
  "key23": "2fd2nJYsizWGDy8nue9KZk7Wih8cHJQb54ubDYL1tkin32N3H5HQFkveR41m6gC1zfBLdG4TmiJhCtnBBZj2VcYZ",
  "key24": "4J6eYKxui2H1dq98SAwbAfiFp8jCVKyDaghauoMHzcRQaR9QsECjEfcBkG3YnbzpnWqZiLL8XU6vNTZqL2bXBi7g",
  "key25": "39QJgneitUEyXdYz7nTGbLUD5xtEj6WU9o4bYr7jNeLmPeJZJ7tQzDREL9WyAnbuxBWyjZ41ukEYyH1HghdjPwy5",
  "key26": "VaXLuA9VvVRTDDWSAqbf4kwTyeuBSaDcxdvGQSKQ8q2vrWjEFQUrmSx2AycRcUisrcwZy6rtCm2vuLR33iDaXep",
  "key27": "zLTvgKRdU5MtgkU9grYGwCZVgzccrSi7t82B46EdD9eJH7he3DBNjcUosA6j2yC2Hd4P7hzPMM6qfpCDfnCpSj1",
  "key28": "3wzf5Tg94BqJiJoiqUfQnYHAcifm5jHW12Eyah4EBqbFkVXKB5njNriuQwXgbnodRuh3zxpx2immLqkEsaqqcJ2v",
  "key29": "2wSejUxEq6kGDyzH8QvCoCnsUFRn4yxrdw6gb9wVZDKgjM2xDifJyWcw16Ji82XjBaCC84yWU6NQuFHv6RE28oiw",
  "key30": "kmDDzqeyHSHJTpn9XNH65dKgNHhb1PjdJui5nNCCnbEd7PEQBN6Xxeaujcih5QRf3Ek8FUaSY4ATugQzuujxK5Q",
  "key31": "2NShpeWtyqbV9dDUFjTzSFs6pfXT3Sa9tepeUuzhEoRcHq5kMQcxr6V6xg5KzWTkmtvg2TZonUvKbd9mKapsGqa5",
  "key32": "Fj7ARuqh9E6D9fAvMJwrjJ8mAzGvZEAfWBYBSBWvx54ytTicuUnFe4Ws5VCT2Z9XNo7V3igcU1XP8MgeqtTwrjT",
  "key33": "LWLg12hyuMxbEn7R62F2voroy1o5hAiv3DpHjDTXcQ1hp4tHub4jjjhyuL2ULQwhzfKkt3BWB27X8adSjhRU6Pa",
  "key34": "2JNom7hjZUXtm2K719tf773pF5vinPnuE2b8ibVvgnyvDmpTDUcdajyR4HeRmTybakKHo6vaJN7pVxqJqwVeByhM",
  "key35": "5yToxsd9yG9QRvkaq1s8hBgvNrK97jaN4C3694PHp7zTeSV1w8ozmQpJCQGVYPBGGaDMCRrrhq2ddWCsCfxNPsGS",
  "key36": "5f2kr6CUBTkXykgGj9XrPecebKuv9pNpe3rtFDsiy5t1miLVSNAFY9rLXrB8vZt95MZr2LYzGoFY3jd6LBAGSfJd",
  "key37": "34Mv86mhJxwvdTwE6RLEWNJgtZuSxH8ax924d4a5Qxo8fVFb71SYZ7h9d4QqaG75eN5GDy74YeViGem32NDqNHaF",
  "key38": "4bxFuyVcN14A8xHorEiHpWt3HNGKRMfzCB1im7fWkqCB5hu1zUN8QrMYhPSMztj4PqHqS5hmzuPpHp3vn6B4oJu1",
  "key39": "5PDFgkMgUHKYtkPmR1nANQtXca4DXH3k1CGpJCT7wFenxcXSNR9m351pgdGtibmw6J2SH3jueFT7LwhBvgmrNcLz",
  "key40": "d3Grc98XheuMeEhPs1VpUGKeLxv8oZQVS2ZdGCR6e3VxnYt9dHQYB3adj5rQDouLqvLt4C8148pBEAAiiJUsrYV",
  "key41": "3whu7jP64Vp5UuprNSXzkNwxpXYNRVk8jipnfLvQSrJTnyiMuZVfsPfiK9eqh5dNEYXqVfJxeYAvXfHAESxtWQCG",
  "key42": "5JnxCWndUCp7V47KuZujbwCAWhQzAz5Pkrr6KZqfQUXLWonv938bdTfMmpvbZJUSUYeUJCgZX9RcDgRUweFTAP22"
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
