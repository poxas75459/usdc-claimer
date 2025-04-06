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
    "opKReFYReK6eT2SnhHP7Buhrdn2PCzkj24RB4kvmQVgQftc1ZQjssWBBaLfQJYXwTgqCbvtBwsB8VrJ5KLZKEox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FAomShiXxnzPTPb4zUdhb5rdeEsy9YYRA32z5zfj4fm9sm6XCnpRmvVXzn2gpZwVP3rHpYuWafCNus96uyNdRRP",
  "key1": "EBC8VHxRD4MoBNBJLbiX4ks9hZVNMjnWSR3P4YoRBsXFYrtKQbUGXmUFGAVnAAUECbnf47Peg3nuhvyHkPRd99k",
  "key2": "4BFkaN1gK7bbfQ6qyCXViYzK7sTqdNruaAARmhidmtVrCNhj481BPw6gZ18Nvdku1E1hg1tyuBjopE7seAStgKEW",
  "key3": "4REQtVMWTdq6U615Dn2BWGcsojvTs6jpXVpMfhnopHUCUx9iX5xkFYrWSKYJdnfmXNQfuLNzfpi5wP9LAJw9Frik",
  "key4": "dGSXxEqWumRJ9a6P7tx4ziWnCPrSdpKDLaNGP6ThqX2TgxMx3SSwhNE3ZjyFCvx3fT48sZyoYyQscJqQmvizzsx",
  "key5": "3pEHaQtL2fbEV8MMYCEooB2tzsU6oNoi2jTYaU6oUHHTUjxwTQfgNJ7ADPzP4vQWaqgYb7zX58NQKMNt9QDBz7Fa",
  "key6": "SNdjNAT3seZ24ctdMsN8gucRzpD7Y49XGKRsRcFwsoWup7sob8tY6nJvEdeDPnV6rgwSWgQFGind6MCBDxjVnct",
  "key7": "iN34e6gcBdEFAoKoSYvNVUiSwQQqsuMShtfFJqX1KK67xmJo5QidrKBZd2VTRbqmegwYzXkSAfmUK5FTbPFryvC",
  "key8": "3114yeP4adPbCw2WuJAEqmzA6f5JeWm74gwqYB2JefU5mP16RxEmJriBJtUd5XMPBmR354pEs3i9kpg3rv1doM6v",
  "key9": "uVTc8L6AgFJvpH63FYcKkNQcsBXZCULjj5MDSqAFNTJeLNBfAzpca3KjaTcLdBkyp1wpHzpa7CFgA78LCQgrtss",
  "key10": "3oBKYfdp3uHja73HtMXnewRRjr5Sjyn6WncKbUNyAauVW2ASgZVBTWLaWWQ3dQuXWVKdBPZGYL1oPKnrskngH7kv",
  "key11": "2mD7WDyDVcGcwW1vo4u4qggi8khDzFfaBFcbUeSGwj59npk3uuzmXPLqmpSQEmqc3niy5CVu7dYtZVqna5T8LPon",
  "key12": "5L97cBvJEdjJ8pePRQfYKTkFcBqwTLaKkvspF5eYttrHeA7ms3F1n5zUC1qRHQkeiQ4D82dz6PK2rUDQD7nic65r",
  "key13": "d6a5cwPCEueuB5UKX3kHG62dgd9rB635awwhD6GnkHya2nxwFANJ8VqXYc7xN8sRD9WD5pWgNhQkBG3zLafGRVE",
  "key14": "4zcSTEBMyXZT4tuHokYFQvE3ckcBnkcT4aheqdLa5UhhMNiJR5QKYBNmxiZBFaw2suspKYDnw217wEEJonGYo1Av",
  "key15": "wo9WZqYbmcAzjHY97pehSgPSkUbdLriLY51NA42L5Sgnk4pYXND6JkcBuYL1FNfQxrWrZMdy4xreW2J9uzwyymY",
  "key16": "frVsUjRib8orYKoqdbFSjrFeXBieCN72CjM9h6icsv1WRecC5amPm8127vuJXTexqU3KjBAytV6NiPaBDv2faTT",
  "key17": "3U2eCcRdHAwP16idVgyw7RtnocDqaBRiCgfTQ5vwszBiGxqdd4FQKN9D3DLLbM7JncBWJ1BP8ADyhTHZQdRPiRHm",
  "key18": "54yc8YPy3Vt162W1sXD1s5SkUQKpdf3fW4t64XYmdoeVtFXvfdEok6VDSi4tdkknqE1ve6LB7gucReh1V3dPMzd3",
  "key19": "3NqkR3cLdPwpgHD9dykN7hGDWXJyepYNnDCrZUnakwCZmA6omHgnzqxbmHj3Yi4TmsrFcXse9Mr4ycZzDxwCoJQ5",
  "key20": "2VVyoQg3wMemSNw6MDWYhgHidKtehEq2sv6fb4roXCVvnJNQi1zaTesaKxNZ4nnKqhbGF7fMCpnRwZQTuQj2s6Lo",
  "key21": "rmxPusNLpuxEtfyWgTqiT9NswuFthLzdUBvFeLpKpVgomABa4HWXhjF5LpHwL2CVP4fBj7RUZfmCcgJxz6C3w9B",
  "key22": "2QAZkxAsPkj5y7sU1vuRmaPYhcmiW8wC2qC4y3Ns6b93zuJ67R1zFdEVkTjxE5hTcNAw7tCbHiWAuFXxZ2XvuoV2",
  "key23": "2W4NCHgmJSDK5y4tU9Fu7LQvE9LZ35SnwATtfdan2Hm5LQ8atKmSxsZT3WKQNBteVyaHbWCQXFxP1EmB4QN2MjZf",
  "key24": "5UumvoGcgnBS3DT8PwWcnpiCjFHgf65V2MbSctewKJQB3bmwcQ1MHEQWKTERVtP97MZZDdfxErXVFubADcebMPfh",
  "key25": "2a8VxrUVeFHQEgsiZNo4CoVJkyK7qtEjVftNUBSvqsvwMEKAcd5CzmBQjcuojCMGH75S2tJHSwzzPgfyrudvz1Um",
  "key26": "228gmygEmdND6bkd5ahSA3xLoVJKxagHToMgAWbigw5gzYXqyqvLXopKAANMW8cMyTvG1Dc3FJhjKvMk2YvpDeN3",
  "key27": "2nSNhZ7kfz5cpr4dmdM5P1CbKJxjJxGgWU5oBAo6GWkh1fhXbNEsJg2s45gpFJiSrnSckKt71ibhedLuG4n3oypC",
  "key28": "5iFdLtDxWLKSyhTViXZuuqjFbYnxnXdasJKXZCHTaEyCXzsNHNQMeCkTkSAjmc6kywSAPgHEorb2Y2MpxneCH1r9",
  "key29": "5mFdXcuERJAHjEy6q3gwZ1SH3ubT7BPDHenb3EVnsNpPgK8PcdNWXkbDY8uijLVmDGBuW43Cm8RtmL5pRn1FP9U",
  "key30": "3zhhCAKiSjnyvyTK1RaGt7vreWKjgaf4qPcMpL6h9cR8XG4sFDLwsr5q2YaQJznFEpLtoGphieQy1rEc7yxavWLK",
  "key31": "3yDouykYWBX56NCECmJwc159NtaZiVj4uiidcZrFRExAT66H9S9mvsgLjxGQKusKPLL8kW1h3zp3rGaJVVHwCZ4E",
  "key32": "4BMRy3g4zGChauvB4qtTvrBFq4YfmcKcZi73TvTCSe6KQExH3stbZW14toMg3sggA8b2frZvspteZHPyDHCh2Ust",
  "key33": "5mB6J4KhBc9Tc5Wz4NFKz2DvRc6yi8XEZ9px4BwK1PtJZHj4dMBtweLB8ZgoMu6Cst8QqZiRbAp4SwTTr7aAqPzt",
  "key34": "31e3WXgMFq4Ya6PgB61Uax4mf1TgAYCA6MaKz34wUenuTuxfiNU5CyrMUB1rw3J2vMBtTb1gesH8aDZYe2YdSDYM",
  "key35": "4yxaotPUt62KfuvFnCAy9SdpHaepZCuwksnaL4oYUYEtWMavrwZQW1ivNKgHLMWgVVKoXz61EkykNf4JLJYUsRKA",
  "key36": "3zectYdR5V4V3NsY383URvGMBrpfyf3xqUcBgM7eqkRRyvvQSNfXYBXmgdn7WAEP12wMZjeitvKEvE5xzF9k6Lz7",
  "key37": "3wkw59kevXCyVGmYRH7MZQ1fjfKKJfdDq5ntWkAqUoRZudr7JWRYqEW179kqc7mH99TecmAJwK36jjXZP1Hbh7B4",
  "key38": "32JPBKYtyk5GEaSmoNRFPQzAfBbenfUhCTVwMvJesPyjeYRhnz31uuszu1FL4qXDNRbFVgBNpFVyhKpwQru2mH88",
  "key39": "383aY4o2EcjXe3QHVw28XKHwonMwULUpRWipjuJFg9udkmaCtwDokCx4X16pH3DhuK5BCysb2PPJuRapyC8VU8c1",
  "key40": "413yc5H1b9aJquqtd2NPm6CX3n7foXJPbQoXjBaowuNF5ChoveH5KDQx2J3aVyv2hFjYsfFffWK3rV3iZza8atJj",
  "key41": "fqBBxopK8SKRvpPSw3Yx1fz846fS6njXR2iJffXHaPRc8Xu4rh3MFcHBbD2fDmb2n54b7MeXQBCo3n18XN8yBGf",
  "key42": "5LLfx5aB3zqV58gvq9Tp2Mz63Gb5USkqfyHXH4Jg5FDQ6CpERy4VGMncugkwUkdpntutUNDaWraFU1qoYVxFsC2Q",
  "key43": "64jFqpAGh1eCcNgu9few9YCqaUZ67XSBkruSbtCw374unjgNcaVqpUQaxaRPmCN6Q7iNikWQAwZjnwJ2LznkAHpK"
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
