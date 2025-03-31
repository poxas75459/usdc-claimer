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
    "4DcMmX2JX3KBTTjSsxMKLdFEveJpCZUFGkq8eoMoZh5uFH2qbRkDPwU5KcuEeRBoCy1Jo52rXi8idFEcM4o3MYQq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xEj4EFgF9T3bqjMuCDfbfnedUqJ6C9mhz7ReyGkFYNKKWBqCrN77H4DDeCrHd47ARWB8ThynTZyYCD6Q1f7sASe",
  "key1": "4dvh8ZrWeuBMKzaxuFi1PwQdkY7wLx7GLxeWyk4sid7naTmhmVW9cu4srUhFBKZdfSKWaiHfLrRL57wRj5VppVh3",
  "key2": "214KzCBLMrsVfusLb3vLzVkHjPThZ3etsZ7wbBwp51G3zBh3SBoogYBmMzYetXUP2g6JkjFapaqE1WiY6VqsSDhD",
  "key3": "3FUYez4rQ84PE765TKcJiAwgP3E4mc4DLkNE58qsyciPK8pmuJhCzFaYJqUmzKSDrr2rXPay5Js1BBLtswxoELPc",
  "key4": "339ZC2ni8ZmdVL2E3Wq4LnQw9r4JM6dEGPbhwo2m83chqkkfRCiG6ihiTXUq3BmWEd4oEZ5k9X6sePxzEZ7FGiWP",
  "key5": "3vnbY4Rgut2xwvs6Ufq4YmGCv3wKyYfs34hYMqDdE5bUDzyqqBM7Tgn2dqdk64peDMKdWLTpV6vcfvAcoq6h58im",
  "key6": "4EaocnRGFKB2yGNM35d1J91uogXXXoErP9hbnrnR4wJaDvcocp6yycE9qApVc8G2GMUxsEJKJBb7uMTc4zUzbWG9",
  "key7": "5x2wuHB6nTr1r6bMV4hFbkdDWEz51DQTSwzqrFmkQtq5YMoqXR2zgLgz3AEd21M7w9TmNoBzV5mCSaL6UrY6utis",
  "key8": "2tayZ8mYny7PLYrWPikZrJETEf4GYj1oQxrQfD9BfTBShXYDKmDe6wLNLr9gnpcVxtogb89wTrRBsybsMs3cNE4r",
  "key9": "aymjDFQAYARYHTcEvUcZ6FNbij5ZY3GXJZdw87ZSMutpEGJgxd62iAEgymUpve4f5QirtrBHhPz64qbb5Cb3QE3",
  "key10": "3myhWZk4SkV4C2iDHRNoM1YD1k2ESvVRJhpwkp5aWavMvYaQVDRtZMNUbBHnuTkF6m1YD8RXRUfAp3vVzVohV24A",
  "key11": "3peR3yT8f1Q37brCP9euV4Jdg5dckNc88g3gRRzNETYQPsvK6U8T5D1H2GDdZD1epHaf2M7S1yYuJY3pNixyFkkd",
  "key12": "4r7sdnsan8uidNpwnsfQgwh232BvDxJa9FX52Yq3z3czSvMwFe88YQZNcJSKG5k6pD18QpnppWzNhaNL2L2dpdnU",
  "key13": "Hi55fH1SfVTVWs6ZPFTxZoN4GcTdwVqZLwposRErx4BNvcpLzvqNCX176yv1DdCY5EYaYjErUUWjAZ4bKSsgbLB",
  "key14": "MT4GvVd9cVoPDp4qSsjJt33pArAe9Sng1ynJoQy1dJsSPUvnBUuogvsQEAzW5tUY1WEzr7oayJEA6tWd3qNCtHh",
  "key15": "2wMPoTAPSfxruo4x6EsJCh793pAqLUsDiJmphDXPQs1J5tjTwEGzqbLKCLpHEh2rA47SXiTSkp23RxuM1o75dUrL",
  "key16": "5aEq5GMqR9gZkBLis3bsUQKyXuG5zdxACWcAcAQcBe2C7X7hKu5hekkEY9ffTJpLUaJQHpPivcREDyyCnSq11Vrr",
  "key17": "3Cif3kbdQpH2mgsa5DvaK2uUSBaX3Fm3SD9wtB3RU5hMCBC7xJFtRewdbjhvdgieGo1NeR2yyqMz2vWJ76PKrQUB",
  "key18": "5oy7aUSX4eevPk7bGvmxuTbqy7Q3vwJrXGWQb483m4zkCdKdt7EbjehUeNS96zdKiYoBGVAtYANq5LMsvMFxWef5",
  "key19": "4zGbabTRf5CxuNHaUzJ6tCFk8VDNCRYr7X9ENrohvzCYEryBrxqAheTGwsNZ3So5VPYKJkqpZycrEUKihJgoLe9m",
  "key20": "65Dau7ThJig9xqXfECnjsiwLYksfmCCNP5Jp6FCWk6vyyYhXvgDxijY5L4z9Eb33pBRCkgtezVPA2CqcPdCuLNbY",
  "key21": "e4pVp4LBSy9aCPikXrq2wSDv7WPm4qYsz4jbdZRURmWLYAZHhnMxZKv7mGiEgQVPzPh7bZ5QWWrFx4wFSB2ZRnS",
  "key22": "3GMFDLGacJrCmmRgiydjEwEYH4Dd8fPAKD91ptHh53Ss1xhNrsTLrUfJFXw1edLqp4N1ZFwT8A7dNHW6T3AFbyez",
  "key23": "2cqCAbYSd4CS44xU4T2QgEahpHiNMz2MQDtphue74NJ9HSQh6JcQVBTMcJBfbDTmLYxipHAMoDu3n6cwrjep6znw",
  "key24": "2CP3YkstS31RwSJ8Ksf9qaiZJXdNxeSZcDC8AnDHQB7nJCt2xfgopkhwh428tvdhbejgUGjyJYaz9TZmrv2j9Yji",
  "key25": "5T4LPp1J8nhLAFR42zHt9rGet2qThX6GbYetGxQm42KJctdjApCGEcZVtD2aKHVhbKULknYMo9vJrU4TDihkqt7P",
  "key26": "4n77M2PHakHDL6GjyDJcjQguJi6MEub9gHddtvDVse7iK7hAZenhpDYKC1mdZiZKqw1tsBqYBfW8TMcZeTRSY2uL",
  "key27": "9XsuhVMMeVUeR12d4SS7RaN7z33v7FC7mDPHrS5MAJWYqbM9vVC3BGk6828GfbFu9YC4q7Eo55rxVAfrzF7WPgn",
  "key28": "dg3kGcSWXGnoZUJAdHRtATisCWvK5KANHeY58M5558qhrVwMv7WZaSFqp3fCN8VicBVKvJ23ty97XJdad83h8Lw"
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
