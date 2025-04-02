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
    "3t38tp1wn2fKFscMmHakgUfdaqKR9oArcy5QnCAjvHkRyZS9Vbh2DebgwWPfGTRpgFkeLKEx4Z3UTNPGWup7o2yu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oqQLBZMjFKK1ih6aziNKww6C7vBFAompT7wSnL9ucKx2onVa8RCQm4JxyCCMfYUQ8GCveKZcihwVRER9YdaqaUq",
  "key1": "4n4xz7sA32yHsuBmZgqKvqzyWBsZ8GoMSkfJzTCEPYTXZSrbaafNo7YSDmpfds4RKrM9dQr7J53AhWCoRBvcJ1q2",
  "key2": "3N8DZYpjmA8U2H4i3nb9VzKK4NU21jsCP9QFCM7aNYuTbqBZv5KC18moDiitFQykjrK5GcLuFE7tvNsYB4YkaeAC",
  "key3": "2z8pFmhCEY1pDsC4PDM4sYoTSurWuhE3vXgF8efCn8yTZUx2KDpDRLjmvbJiarkXSzAMEkGLhqp6uhaYKkdgfFAt",
  "key4": "4nj4rNEbbZeTRzGQzMJxxwdtUo6PjpjkAox2g6cjF6AifSGB8JaKnkvEcHyiG7bX5aLaaGpfkcVpfj3ybqQR8m1G",
  "key5": "54rAqcXC8NEt6NombZQUgxkibeFa5nCLPVQQo39zG3LmJYresRsf1ua6s4xFQ2jDCaB9S7fh6J3Jc8idhXHpCiYt",
  "key6": "3dC5Ex9L1jywQv2A352VJzTeq7Sb1WCUzqgwcbj8tPkJz7FFbbXthkvkCLpgCojCchR629GQA1sM8XynPvCDPxrF",
  "key7": "2LM6dN4pV3p5xQbknF1NFQzMbGLe6mA3uzfD9d6YU4FPBWYfDModCRq1wkJyufawJf7voK9YmnzxsyYrczQJLLvs",
  "key8": "3d9YDpSqgFozXnCsGViNybETBB3PGdB2niSbiUZT61nc8okEwsj5dTrTJsUz4jHCmym2BxHFqoLUv7k4Zh7SuZrv",
  "key9": "3Wo2XXYMpfYzYU9qP9CCQk2RziAwJ2G4m1Bk3R7WPDMkfpAYdZuyfEYUEmdwDuiXkvVvviyszCx5KP5z7LA2qsKF",
  "key10": "52Tk7B4f4xfx63U2Vte4qbYS95dJgvWmS1ZSMCedLrSE3NQj1apW7Zk954iJ2WJnb5VqmQVpePgGXkJUZVb2198S",
  "key11": "5dfTWpEs33wrw5g3oi8cWbiKL9kDBNTYP4PhTB36MeFzWekb7XycvwHNBHdzKyangr7jAPeFwxyZ4eNmDNoREZ92",
  "key12": "EQMHujyaTqExRfsYXkdRF9htitgKzCMN1xoQwPL9Zfs6qfZU1Eezs4tDoNftDviJeEQK2YqPhWyc5HP8HJwEsCQ",
  "key13": "51HqVhozsjzy1vKytdtKBMvXFjKxcr4t7qA8rXPs2yHNki1HjYBXoQYZ9MtQm6kqNmPxCThSXD9FVYYtfvKanR8s",
  "key14": "3yjNQx1sofYeA154gCkVHagbdrJMuXP3UySyWuwtCkbAWwjez9TGCEmstkFcWX2r7V7BhFfG8uVRHUttNSGcNtSt",
  "key15": "DFLHa17xZqV3tAypUQHWUoyxc5kDZKqLFyyzfczhUCQcXXE3aPK1uGHTW2NYCqEn8BBtZLNZHp811xWaVw9fmNh",
  "key16": "4SpZv6CEHvcvrrtFB8ELp2DaWQHZge2Xcxx7utYuXMbrug9HB3DJq7oXVwueGDnpYKexw17nwcgdzxBnw6d2dzAh",
  "key17": "5hEKBbRdaNRwYV9CBSyejvmv2YwRVBBnXKHPjssoaWGTpsM5wGkmp2kPhEH3o13ewMhq5ZzeM1VvRenjjpSniH3z",
  "key18": "5UbC7edG9dXywmt28DrA4MUJuGRdHZdzdXgfbynuYs5MyWiLWArbLtqAd84bFkxw9VHFoXytx2HYiNhkNZG185H",
  "key19": "n3WZ1hVVSiH5hs9ST1kmtUtUurZTCwW5181b71e7GK2pvas4bucQT9AiqMNtqwM1we2135o1L2pq9Vx1TUkWzvF",
  "key20": "3apsu4UEogdXbSazBfYTyGgbGpWDos2wQTEuVv4vpUyCDHyJuzwkp2gmRJ4ukMBatD26anAWh9oTDpGTLThW9MBX",
  "key21": "3anKndsjyAJdWsgdRs4TxKTdUkwoZxB5C6pS9STmKHg2sLsEMWjbXJVffDs4WEnBbf5wtQbiZg4oXb1jomR7As7z",
  "key22": "4upKbJVBkhR5Xo2qK4KgThDthfMQUtRHMun3bDrdbT2FCnn1fZf1Qt7SDyN5yWpYnBHSmEBVaMCmHUNkMCiSu4yj",
  "key23": "4Bq8pYA4c1qrZD5n2R55Xh4GgZSTGmdWna6ub4pQgqL266Y1qscxt1JsFobfArcTJzCEBVXntSkzoe5u757dRYeJ",
  "key24": "3u6zxUnuPy1jniry5J1icx26B4yWGTkPgKAcXEgcZeZYWrHnGEdotUy3yooJojpvLkdBbfcyszPsGfFwYCciVaKy",
  "key25": "3zBok5EDXmJPTmnp77ckH7JXTnRWfgTXuCDfWyZZBZhv5zZRn66746jgPQH4sanUQnRKrTD7uNZvvD9Wm4VVHhzy",
  "key26": "2YBJvQgjZ9rw56spZw7gi5NP27pK3d11yrXyp6CpNwiEkdWYiwy198oYUxrnA2J4TttfViSC4Myd2woSDjHZ6wSj",
  "key27": "2FayrERaaAAxFBmEFUVT6iNiz57hjhPwKajwee46qphmkUA3v1sXBCZQK4n4dMZKqH6ndp1jgbdGnwXRzNavTTW9",
  "key28": "4Q2KN7781V9Fc6SQ6j1Q5S7KERRgepcWq9dkf7RyCXWazDznbLPYJaN5AVDaQrRLgty8dRxGCXtUq2UNaurdJRpt",
  "key29": "5V8gZNP9Hdoj6gzgHUT1G78DGGSrbPd2ZUznJPk8tYWAyNSH4N8qyA4mEmgEhMPNRbMvUZcgWMcprGz6tjGbE31E",
  "key30": "2tp84LjSur4jBGyyGqRxcWcr4Z2xfuo7b3izFEM8JKgV1msvPWPJNL9fRzDoQaLoVj2s2YonnHMBtMYY6pC38XSP",
  "key31": "ZPQq6rswBXH7DAeyRW31g1nFtcMmpaTL2pgfdt7DrZYixtXUcH2nXqTofg6Ty1dnkienWNvcmX5UmghQW2PybX3",
  "key32": "i86w1d19rQ8PAJFsgEmBBRg8Ct1ECPPNsNUySBSrK1X5aV63WVgLVgGTEpZH5s5rxMuVwKbpPWqLro9afBFAZwf",
  "key33": "46GozTQSXUsHaDe25xeKFEXkDKtqE1s5JcnAkv51SuUBWKTpg36g3ZJYopnrHi4WgNQTwnJPF4yRfAigcZxF21pi",
  "key34": "5RBTt6E8BP1k88Pt5qRg1kvsBzmrJcCKyKb4QyyhMfHiRqhq63Z1hxu9NpAp7RaswcPXN38oE1Cf1C8HqgV3WXp5",
  "key35": "3Sxcb6YiTgk3HhTVn7HFKYDyR93LNXgAQ69X9cDkxGE5pJxqwHVMDXo8dLcikD2UVWXjFPZimRQDWmge5kxmwUth",
  "key36": "4Uwv2HVzJsWXfhJVtGrnqnFJFpkDZjiFXmirR96HXMmyj43AdndS8KDHtaiUMoPms8Y9ea1Y3L1Sz246JDJikzqZ",
  "key37": "3cWTn6fuaXTtcAAFxYj5D3zmNic2n57RDRKC3dXNDWft7KtCbB2pQ6u3XxYAxZZqoEB6BsyabWMEiuygecirWz1X",
  "key38": "4oTYK84H9BkneSSAtTcvm2XBRMa9bgpYFqLEVxeVVXixe4WxafHNdEV4WPoWzfGBn3HR7yDNVRaU9G4S7zsnHerP",
  "key39": "3CPjnF3ytDPj7aufYbARxBoNuwAiUUW5pZviHKH614f9g5J4JCq4BYwQRTfTgdoHRQh1KCwVwC8Mb1MeVVg9KpLK",
  "key40": "3DBKGgSzFCQp1hveCxpFCQifUYaDJ1T8UFmz1kgvaQAcqd3Ncynv42dq4CsZ5zL7UGpcL4S5j74hdhP8tggH3N8C"
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
