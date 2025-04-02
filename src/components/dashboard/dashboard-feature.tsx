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
    "4oxYqv1aeppxnWDyKzUh7sa3HfJPGw8ERvBMQfLPgKPAjoDt6Gte5LgZz8r1r93zYGskstDu5zuFyvEhsTeZApNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hKJNtRt7E371gz3dfP2eqsZgSRiAu6MxsrNTrFYtWs1LX4bv9t75bPHWMMgMap7omiVWZLP296CwDDoeTzJFKeU",
  "key1": "4fh4gBMPwakSAUnSGe2LFRiSwhtabPoc3Zvex9zCyj1vyjgDLaqdanTaMrJesLztxh68jxzUCZ63yEvHDnwntJBs",
  "key2": "3mzNN395JFVifhW91aei38P3uZTUJqMrfenZ3JMvRBe13tDJhNmYtrYMqsNxV5ueKgKzjj1YS6UZw732WgHKMBrM",
  "key3": "67cYiNJYnjt92EwvvnH415A4JxUG1yq6CD7xA4AC3ZY9DdcHjWQa5nWswf4yc2J4mbnf7refWBoXFs3BPZRLRfJH",
  "key4": "4QaWUFiZ2Cs8pUozE7Rmk1WFeceMJSCn28bASEMu8UuSv84TfkWjxThotJ7dcJizxmhe8Arddb94mv57GjFn1KjU",
  "key5": "xVMt9ZpCiJwtCW4bKpt2Ucx23unVHE9wxWZcQu7xXP1yNYmMyZBoMTQwNJG7G67UiYyFiio5uxK21bbipudVqVG",
  "key6": "3hd2eKAmwQ8KYaqT9SUKgbBYp9zJ7AvaWU5uwRAYNYd4sMMkxkBftazFWrAYGphodm6pq27iopbZRzgmoNbvCuMt",
  "key7": "zwzJRNiTNA3kYA3Giaya2qPPNHgV4kNbLbx8gJ9t9VRfmmnaeJps1vuFGkb8g88RKK7SfvgACFzjqDQzwww2RY6",
  "key8": "RX9wK7CiT4qtKBW5hU2ZbUHDJVN4enYJw24dvscoPRmhSwJcxBmKmBxN1P4qNXLn7S2LQMkujqdZ9nQT3aJ3Uub",
  "key9": "4iYYbsvusCwVoF84AuWtMoMSqTMAiEE3EVJL1FSB3ydMnncNPtBQy1vJASefCAC6LfVZFifjtPponshbaVekpDT1",
  "key10": "52uhAiv3ixb41ygLy39XntKvLD6zSwoHBSz65RWdYuhvnByMvyn7iwGG5VB376yDGH2YQjWraYt9DKPCH9Yqpzey",
  "key11": "4D7zGLHBdcRsgfq3ukT84AphYqry1VeCSmK5WsqQDP7A3ZB2ixaJi4kguaivi76GcXQb6Tyagrr5WwPUMvAbfveg",
  "key12": "2LwDaZeMSDks6EP4kRGS69YYAF2xiMfSjHzK17C1zCqkBcT7uhvcdGKSRztFy9m68d36EY2ndGZVzu132WwjXHiX",
  "key13": "3PYa6MfjUSPjS24PJovWvU697DCFuAskaEe6rqR2P9ftLJs283qGkMVmtveHknwVihMaQN6Dgcf38ThVWwyeYK5r",
  "key14": "3Tfs894pQ3f8eac9ZseLu3Yqxic99zoGHkvdgXGEVKFZQrG48DpVq456R8kEAN2Sa7pHbznK1oWenBpPRsq9nyrc",
  "key15": "5K7ysr6abT4AxRcSEHSZAA2zh933GnTrJ7saXBd8ssi41DZFz971CpbD94FbP2zYvf8Jzpj7MRH8is165hj7gt6v",
  "key16": "337SXHhZeeKQ1tuxzenBUpUUxweCAaM3HivhYpo9JFvL5Fi9KsTFpWadhrUcVi5HJpao7bExwNJqdYBzDU2T8ezN",
  "key17": "4mqzig3aewHuRPTVAKL9uqrEe9dusbzh7dyM5memDuxD4VoJhkFBCXyoFPzbk8P3QxCTxYhqv9aNDJuhaivroGhA",
  "key18": "61E4SdKjH3a2Fryf76CXyp1k8phtvDCqWavykGjuvo2frRSaUW76jFAt4PahNaLMAyTKQmsryVLXfVdfwqCrrzBd",
  "key19": "2Mn5QH62mMn58K32K3Z9hzhSvsQbvedmJ8FgbYdSZdQKwSnJXbGaVyFFscWmbNiSJbtKrg12KV8xU9ugJJuno3Tn",
  "key20": "4QN8X9MPqQbubRfroDDdJGQLd7Ynfgd4hjwGDBEfvyd52Gz9RdZessQXvt36bor8oKxi8d9wY5ZGgLAM6ZyFopTt",
  "key21": "3EeFwdoQYQ7mFFgUDtrpsGsGYQ2z4vWrDR9MGxshTPSYzbatwVSWbdqrn5PtGg1a3eKidaqF7xBRERbPJqnmSxUA",
  "key22": "4FiRcryxhhZVGubVoc6iSZ4Wo4ze6DRb5oXB6CDTjvQFPKz8TE9k6dypcvRGFxhdCcx23B9oqifqjvSsyq95GFdZ",
  "key23": "43EbW8gLK1p5hPFFGSh2cdaWyNCe6e5VxZksdwXnQXF8ttdUwNcP6fdBfQY9PsCNKLntdnnaCErgvkpih2FHxYZ1",
  "key24": "5yg36sSir3xaGGhdDhc4kqr4w3MC7UzuvuNWqnzVeghkNQyAx6VwpwwznFn8y48Tz9eN2KMa9pgBrABADkmUB1Gv",
  "key25": "qvBVExgKcaAs3hSx3Uut5ufd6PLmry7TSQ2eXLjS3WbpamEtf2MbGWAbKqJHn7wgQtmTfFEivUCsNWwGbjdS8qo",
  "key26": "3p5pMHRHyAEVbyG7p454raakQh84ZXiRMkEJqptDS5Htgz67zwDQmFYrcaQSmi2fCti3J52CCY8esxhHT5JuoNdN",
  "key27": "55u5F4Jey7tbJK3Zf3Da1sN4aMyJMiMguwTR5BkwqofZwDHpkuERFPc38kdJYkLS1rrXa9GZ3oS1gTghHHTBhcD5",
  "key28": "HVwGGtTpoF1xFLzUxT8hQm5CLBKpSztVtFJreTkCDXnwBsh5ohYz6KMoC7DQQ3Esyfc7aAYjyBW7LZurN94WLW6",
  "key29": "2jZ6Yh4AzUUrjc6HLbEjqDKMRd7ybx812KCAw7vHUa6sqLk8WL7mYtKcaBvWjTSa89e2yQF9xHgawSbhXv7UrQYs",
  "key30": "4Bxedde419dMftyxh94TBjP8HuqSBb3PpiVE3pUKUgjQtgbZpENDyvFRxh7K4bFNCZCkNE4AKdkVjYSKPUTW1wM1",
  "key31": "4APW45VjakD4EAF2NZVtHL9zaSWBJrQeUcMu6rQEdAwMC9Q5Hq3w8rxYamHXPqdwEVSyuTvr39DBRujjhYeAR9Kh",
  "key32": "3YCf87poTdgQM5iKx8zfphDB4XecyLgpwrgBLp4sG8yeWF6NJToUn9qc1HGy18V2Pop11SgG7GoAKcyojSYqBkf7",
  "key33": "2WyZYb8VaHLzEPvsK6zedvEYrKGG36Awz7BFFoigxVJHNdhVJwExMxiE9cdLHYq3dyhi7pdLRioHm9m7CdkBKxZ1",
  "key34": "2ByUfUSyD8bdy8RkricWKD9MgqdcUwGTRXjFVJMJCpzBkUx4cTkDYRNgF5xYd27obB28SCyA85pPrnufNyu8cCim",
  "key35": "2HB2pLukZLU3e4gEomWZThPpX4JNGGyqVnrP3zxANdrgqxpLiod2Mz8LUmAzUVCEjGS36P7jikD5FCcgUj8CKirf",
  "key36": "5asjYZjQNxaqZjMwnH7WjtY4oZ5tvAnSQNfFrSspgb7QEgUyUxtFtLxY7cbdPoCK9Pqeqi9BKimkAvXzAExTr4Q1",
  "key37": "58aPg3aRJegCZDLuM1WKRiV4Gx1tmihPbMPgu3qAgKGY7NQQiZwjoUeipDNFGLHnKDVy4LbmQGMikNV1ocRaUAvq",
  "key38": "3DJWih3PR3hLFCzpMUmvgoTWgCeohrs8hmbfXturozDEn5GZuSPg4TvB8rtVwdKN3ekBZvJcoTxGjb4xPswS4XYu",
  "key39": "4pzgTSuUbNvrU5sV9eMauK9tvEVvUjrPstKKhZBvTRi7CnmxrsjhiDEAZs4Qt977p9Mq3UELMmQMzfqW6Qwf1Eoa",
  "key40": "dgWUZu6LVdygr2PFEcwbUXp7N4a7gvNxpQADQQvbDjzZ6jADNGkH6yWwV6esRWJoEvYYxhDUrjaCECMjETNbCrA",
  "key41": "2FXAALAYzvwKJJiQUR5iwnU3agzwPq23NW7u5mBRomUquBMqaWN5MNDQyR4ZSc2xUEtETv1FuwxzeKbDcKsLvHAw",
  "key42": "2bPzjcQ8sERiJfWv6jG2FrpN8k27PV9mbQzmUieJwh9cQeBEB4JpHsys1Quoho4tK6R142mCGXNyWc5bjM4jKjzD",
  "key43": "37CcW6tbgSeegx5JNBfxL7AczvuDH4aAHahGTuTZZWxMDEVCgcEAPcMnAAxSm4RsEiEsgHjpV6cECxwjyueeF9Ej"
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
