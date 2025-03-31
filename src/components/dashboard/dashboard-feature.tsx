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
    "5oVR41MxSwH7TfmCE6y3WivpC3UR5opV5gAJcGnEjKUbYtn3zagXJAX3hUbm8dS8n5EGscF8rTRQSUSNjy6nFqyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k1D33JtcdciVBzyKT9jNhDg68uVZsEmLLLv42sqPE7JWLtQdpwQuR5ev4BkintDLcs7TU7M977pUNeButmuadjF",
  "key1": "2i1YUua6mRuFPqJztAoiuJpCYweeZ2vTaxDFYihHSeKoNHyH16gCqRC8Q8LyBBEbJkmhszfbJ2byNfCUdGwS9KsN",
  "key2": "xw52sPtwnYu6NLhR2a6X8BRG4WV64y3kh9t7vdYX1Qj7jDW1c6WkF146UmpRjPky6Qq47mFzw27nHKM7MQEMivx",
  "key3": "2m9u1QBDqgoC82m8weVnxZi8ZUD199LtY3s7wkvuvK71fXDwyQ9dhSNtXEvfHF8WWqPssoZa4PcgkDrgfzhCDEjA",
  "key4": "4A2hPoVW6J9fLJzqV26EqVR9qqYDwEvH7biVVyQMiR5icqtM4fvKu7tiWJBVLHQGnXEbp4193mvFYx6AMDgCkdwb",
  "key5": "3RgwMmv2NumbutCy4xbh2YTo6VzaWqETsCoNwvLwUw5bm3ePr6yxUdCi4X15sJe4F4fLzopuWbztZhP2pYctCXb6",
  "key6": "3mJBdNTci2eTnY63CVCem9dWJxYb96T5uuT96iiJU7CjjAEM9UwoL3QnEyMfSSb1P2EhWEAUFYA7jzBAWRKAPEzq",
  "key7": "HfQkyu1EEzgfLaKrShVrnE83ZHDyBme1pxYrNdL7pWQBmiemcpWT9ZuDModNefMkSfTiccx2iNvch5ppWw6bJYz",
  "key8": "5H2MJBcuAb7GdnCm5NBnirJRYzLcRN3MrfuSrVKVjgvRA2Sex4QqcxLgD1nFFs7BDv9QLNAAA9griCWcgrhmpgu9",
  "key9": "2wyhVMWQHW1oLuyPfS5pSVX5NVdceNnQQ6Epx8zeGpWZLYqBxvpiUxjmMTmsiSz8KWQYrR5hQqr3RJjbzKDvhj4M",
  "key10": "5bFox3hCP3dhBiBTaZF3Qm3qR47uU5G1qscogQfg692JzK8pNL2Bzb2xMgjn9fTX42aRNoe2XbEvX3DHVoQ4vLDk",
  "key11": "4zPtAsxsVFC3fwRd9JFgxqRA5kqvsZHkc1fSQh2NAWTM85FhFfawMhfCEymrN1eriKpWY4W3FWrrduuZCJbi9rXT",
  "key12": "4LjLGLVxGoaCxkprhAqywCkEZk8NP8UmFEMnCNJWWWq8njabiV17mq3Xw8dRDPnmeeHBvrEzdPRCeEqfQk49oxGq",
  "key13": "4rXzC68RCgJsu12vuqpLHsu542PkoxD9Zs4rDbnhZKBWCeo51ufTSEaTfS8V9dKRJYKM1gisQoqKob3aABCh9Wcz",
  "key14": "2J2fwciUWnsHND9Vya4tb71qsqMTD3YRBixh95NPmHpytPf39fsTDBqyXQLBeKEwVFjCaPfAtF92kgKvTEtYiWUc",
  "key15": "WKa7q2Bd1xh8zvZ9onaY4kcMffQSd1cDhH8jGmmKnV6onr7fNg1rzknHeUUXemNgTsUq3GTtiPK5ZB6ZzWgyBFD",
  "key16": "4ujCmCgxd4CYrgsghYhwgHpfu5QQqg9GTRe5auHs6BSR4mo15Yo4VY5cfB4C8wJoMAP6Lct1cvufmU54YRfsiVwn",
  "key17": "2oWxva82mDYuPv2baRVFqTRNAn3eGbuhgz3kXXENKg2r3ngPXxaRemDkMDQPqxcv8EuEiDR1yJQnyx9VqmBb3R5J",
  "key18": "58F7rZTre1PVjk4tczh23FcG2LbvFioAsEGZHrbM9QdTJnQnY1e93eTFJQb9q1jwE6iwuctPGN3PTL98kEnL1PJZ",
  "key19": "4F87uHQ5U3XvPwiUqaPMpwYiYZoJsFeTpiMjteMr3bfKjvmQkNzxiX61pXFFQzBeBRqKBXrRZF3Y7YmgNkoV1Uiw",
  "key20": "4ryiFkFT2Pq7TrBFsQCcYaA63XyL9P7B4kZkdTh35P4pVSGZWrTpffVkvTLAb7C1iCHAqiCj7Fe3ySrjdt38p96T",
  "key21": "i1L3ZZ7RgUsQcTbUMirve8eE3SzJaYVEZ4UafvpdgDf3MuHawm8B8csERXWsqEJb3uzdRzxX6ePnTyb8Qxur54F",
  "key22": "3Xxm4m5nbmiwDDSoBamLzzda4V1Zh8tPhpDs4rnTVC6FojBP3PctFpDTWLNWfJ9ay1uHMf1VuRUqsmxWqUkgxNo2",
  "key23": "57ZPVWsLY8H1PFb1QF6ZiVEyvCFMf7anoTEvvHXGitjeDXQ17NWXs6eRmVWK5EY5p55saytUnepL1XDUnH5Tcteu",
  "key24": "4fH8JaiSLaTFzHvwwCpdUvqbo8GSWdGPSjS6eFkNsksmcrvr6zpCrZ4cDTpzynuFqTScFpLjGNQve2xFe59PFjBz",
  "key25": "5TuVch7FHd4z5Dsh11hpaZGUTh7vihnk7Lb5jqXUB65zhfKtoMzzUcuwk9CsLH4MGwG1YYkd7KfcyKjB6WMjhrke",
  "key26": "3J1pc58oeodN9Fv7rqBzc9DjteNzn4E2mvVZ8kSQ7Wi1AJPP3UbL7pL9FtnNdb6CD9xx26DuRUa2AXzMKvUtTM1Q",
  "key27": "3yeSbAqd6kqFav9Jfx2u143RJ5RSMCy1wF4e9tRQU6w8mhWK9McezswWGQTM3jY43hY1xWE3KTx4i1zj8CAWGGbP",
  "key28": "YGF3mjABTwadU9v1nDkTiTs1PQ2q8DnhBD8w6A5sRL9vU6km67b4BK81u4AKJCzYJXGpRCqyvpLZctsLNz5r39Q",
  "key29": "2eD83LAZbDBjeKQJbrE91rSDezz5iMsDbT3rMjTqVMwqELgmQEFijXmLUWPT4TnNeoYBYLywfEDiQtS1Nw1b7Nip",
  "key30": "UmuZUFmG7KytALhYbTFoJ7m8eiki1S5Wc6dfD2tKq12XF9QmpsMuk2a8ciCYm6iYuZT2RP3vS6feTGg7TH8jZ35",
  "key31": "QQn5KgcHKaEUAJBxGYvmU669pNGWkVtz5L8Mo9rdjm4gbJJyc6wwMW22uojYWPrixkMFmEVFSXt5fuXNrEfjQjE",
  "key32": "5ivi4y93CJ8A7MSDqyeXPnvebsZBQxiBjcd4vuG9S5t8i4vSJkkMkDrUEe8Ewt1QjvR9pqwkgesbdT6bnMWTvTKc",
  "key33": "67jSL2omX3txSpghTUEk4jLpvnfZoqGRfbqUrbu3EQZNz1X457a2CVKWCSjdtKJPWAgtSJ3pCKSTMffsjif3RDKx",
  "key34": "fYXcVjeePMYdSCPQjAWMHtituQRhMNnUzps6TgacoX1NBjnxA8tkuv75HSNG31xEToF4X1dJCmjfiABRX7Bmhfb",
  "key35": "42Cvx9NfeGsAfxEKJs56MZeda8ZaP5eMinN5GyBo4F9D6ApPtkVUVzTNyAQJcR8emiX6eqeX5S4HAhiF53Dp3J88",
  "key36": "2SLHxJnoEpjizuXq46AS8fbzSUnocqtDHMsyeYQ28mqyZKtsHbjoayjq5av3pLgWk1FCVX9RbMYw8TJbaEYhnkaH",
  "key37": "6QiPV1U5U4j1ns2Ha6msxnzHYUXoC4EeXmFYvVzfsnMWT6sqGbsETg7UYdKQEs3SLUtXUEZTbbT6vhnuhDV5DUh",
  "key38": "vM799KuW4AYrAEgdemU8g7fXxww6pcm7BeCkt33iEXUFE7wMvfnB3wVzHTPhekSFAuoJkdfaxU9qP9XBLGNxedi",
  "key39": "2iQgF1yFjnRjWD5RkzMJYKZsG3bNs4RTTV59ScLFgShSiJuXuLPB2unmkRHgzkJ54NRxY6U7pCCaCaHidzUGciRv",
  "key40": "3ZhFMYwRKLrhXoSyEG7C66ZnkJvStg7KYtj1qottaT73cACMaB5Je3wynKG1soF7ddVyDTcv5pQ5XyePowstFQJ1",
  "key41": "44Fx7YWoeyq6rDUio97TXbzzwko8bwFsgG6sdyBQM4eJJgaBDv1gDZ8BPwyDBxUgKyda1tFKVQ3mSpech56AeAsN"
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
