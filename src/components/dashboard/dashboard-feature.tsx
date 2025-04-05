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
    "56PU6WomtkAabQWVbu5Rfmf2jQoFeCjvuLEoBTxqKM29jnvHGTd21AfEjjszDxqLp3pAcRUd3XR8TSXFggTapDaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A9D32Z2u7WyghsyHX4BhgQuxEQ9ZUEc8VjdKcwBL3JLQz9P1Q4n5RnRLjp2vEry348hzsxaWscBLeW1mwfLLCT7",
  "key1": "44frBDfPAakPAeB4nthBZBuqv6uWYeL2VgYtHKbb7LNQQXRVJipJ4sUkxwztDuF1RghCxKbqFXQb6yj1xCsVhesX",
  "key2": "3duP6NpRFsVMCd58gnySHZxnqQMR38xgh6MwWzvsaDCSAgUf4ptjjCLpetmn5yaGd7PyTg4jWPc8aU6EcnveYure",
  "key3": "36JLRy4dqjGT3kRapeKvgeQp4k8fL8s7EzWPYBiRgdrUx57u7xut4TTsbXP8hPZhkKXQZbWcHGey6C5zd8YQ7Bw",
  "key4": "4TW3UzQTqAQUUFBLvKcq535WGMAN1dikaEEXoPfSdNcCNEoTP2VpRKQ9CqwcpneGFJjT9w2oHMexYLBFe63zaSyW",
  "key5": "5QJoNLYi4QUqozK35ukGRJBsrn69pVVsMUm95ekUT4qLTTrkda46WWtHsCDMaVgKwsr9kybit77u3Sp18a4oSx9x",
  "key6": "Q72RQDVHJ3jMEP9DAAB6H28Q8L9GRTDn5Mv1VB8hQqHRpY2wb1LTCeHS2jA32Wd25snCU4jwJjZE3LhFH3DpyqV",
  "key7": "5ZGjTtSZBuK9wB41bQNQ83dnAbuHs3hC18pXr2w7T2Yd5oNCcHuasmdpdd7zka1KmDb19hUMBp3BiWF7FsqnNSwf",
  "key8": "4sC4zFEpZUiKDK22QM42KoAXgUDjtJmSPF5b1Rt4v3f73ipmeexmsJULjQhUptpKed1q7Ed7epGzxFuzNv7e9Vbs",
  "key9": "3tF7amzsCHgKxW1cfWo7g4f4nBwtBKZcAP7Nmyp36gmahn56NcFbr177qsKiVvxGMzd9rCWTwHHgW6bLsnSwGNXM",
  "key10": "2EUC1Qko3WmmZV12dMnXkay4FQh6RbeRGoipithWjWXu6oKD8taDcu3iUFRfwzNBiekTpV5kWBiCEFG5dXwibpCp",
  "key11": "3MQKaeo7V38J2SmbMBpnqFJYqPooZHyVQ9cjFGWDsVFtryWvpbd8TvnU3THx7iHAmzyrNFkpWFySVzauK44ZVA6m",
  "key12": "4wJ1U9wUtFkKXfbfnj2ueQc6ET3R9xz2mCyNhC56ce8P4Ag4yRXhcoemevVDKGAQrzgCUAE1tbESxdwyVh5gU7AP",
  "key13": "5cvpKJkUqSg28myvz811HTokZ5HWz8pQJJoc1aHG9ZT8F8bD5rwHZuk3fWZC5R5Dzkno1bynhDXRwuTtDT6k38aw",
  "key14": "2ofobUTMb6x1MHuh23A4rhWwpDCR45HeBpuh8UrANtSDEKVGMZx9fCqSX8b8BrSrEBbNLsuFXsQ4RcsQC4kf68WP",
  "key15": "4aqkELHQ3AWuMn1vbfAVm1zfjbhmKRdK8GypX3TmDjFyZS8Sj9ux3w4CEbgPrKgojY7RDioAjWCh5ghdhg49nxxT",
  "key16": "2gMxjW3U5dYWd5Fv7WXNuJGxtrwYHjcUer9qF8whAayJeabCdxrrMiRx41FcfqgYzR6XM4Z2XqP1CFoEsxjQXp2P",
  "key17": "4qrRmq7MdYamj91yGTp53iLtDXhRWisTg4Gt7eZdHxjPxN8XmM7tiQ5SVGhwy8o7BYWvCS6SD6bVhXLHhYyotwzK",
  "key18": "mM3kF3Ch75fsmeqDxGtuiSxaxwvytythKpCisicwQqrn47NVPBV5zZzbvurb8pcdccwWz5bRDbNJcSNy2VrTbbF",
  "key19": "k1bvXDbJ4LKbVpbTozvmWnqNxpkzaLnhhbfhb64bKefyRJfGm4vJDn1TZ9jjjvqaKkEnDsLTTqURwtRWnjz8DjL",
  "key20": "3mzS7Ccy8GU3GWWYyH4ChDrmR4kMysv3zJ8rGWqoUAzF2khYMBEMQyAaYzPBa6oa1vrg4WeFucNvfWXGRCE9AQ9Y",
  "key21": "58GUSDfaR5p9U9q6hBfMo1aF2PyQ2HmLxm2d1GMhgZVFVN5oxjFam5PMuCi8eU6bqhoTgKN9yjPxkJ1Z5H9ctBnu",
  "key22": "3HenM6kGK2DmUcnDHvEov8BqtFsvgmnG5s1vuHgwf9nEqBhPg6HoJwrk8N7TkkyF6qWv8T6CPT8ZR3RLhUVyAjZa",
  "key23": "4Hn14KSMdgS3EYeGUQQfbWtTdGysUhKMizMGBZoeoWWvLBkyNN4b9Ma7c8HM6YQmFBj89vn4bEyDnquMxYVkycDc",
  "key24": "43AR5Cmiwd7ep9RmpaVxXnssA32eZapdAZFm52NCbegET7dd7vNKVKCAyuTWcNtq4uj35zbrCec1gEkuxQnnpYXn",
  "key25": "2RKjN1MGsYKg7J3o6YtpN3TcFt6xFCXFsLpPZeUXBdeUfdCUsPyT5Lj5c2BZW5HdtCxWk3HYSii1M94zP93h4xJY",
  "key26": "qv944ArV1G8KMJFitz34V5EsLmS9NT4TviNGyfXynqUFdb58MuYxaFHfHh1Azhm3fJApnP9Q8RcPZqPsCRoqa3M",
  "key27": "3QLGrzYYPmwwD33F2KT78KvqmDbeeNUj9zpV2x3u6DtKsEtUNK5kASVRiNYpSdiUfmkwGuhcebnDhA7tKwVpMuVb",
  "key28": "HRsMzpp2ep2NXPAL4vKeL7SaTYgHp3LtwyBV9vgqiS74dnCfGDJL1gwNRBwGGHVoWJXeHpr3ce81YQXfdQEiPLU",
  "key29": "2LXyYTVQAvi6K6qZrCHw4UFC7kFXxt5gzcQQzrrXZ8LJpgM1L9b43dVhvHbEoSabb4kfbR6oMsHhqKUTikvqfgb5",
  "key30": "5Xw1Q9CxEVZwGNTp4r2RNYqF82Aar7ZgNvUC8WNgg1wV8fRX7BrvUM6VthCjaKf65dNt1YkiKioEHEiquLKGEiV",
  "key31": "4VoNnTRCrrPaQ4Lr39kWicUdFo3YDStYtPTC4F1PxanwetJbv6WWaf4vDsSrndJ1Ny5WzB7qjiEE6BHyqWkuiBT",
  "key32": "2r23NRHDazVnNBNru5HzCcnTWcy5ZfQeqNgsL9JPj7irmyhXLcXGW93Rxtr17mKMWykgSy2ggZD8LFCau1RJDYVZ",
  "key33": "45eU3Fnf8sGUHRzsX5MoLVxU1YKpu5spmTUwHXUZPkfDNC2MqHCHxqM5BYsVDxezBLhQAApYQcQj9qJnLLjHfvkF",
  "key34": "3SGahFd7u3x22yD3sKYoTpRraTUSAzYhkBVUgBVxgWmsN4dGorUEAJgq6daPAHc994kaWv7qgMoWrVrA4rdGZQeu",
  "key35": "2Fo36kQaYxw6YSHuJCYnZa5KmBrZwESWSpy9Mx5cwjCAazE4QJqDPhk72vohBH9RB1ZE9i4LpuJc59SVP2YpqtuV",
  "key36": "4EgBzFu9PqFTbrew3pRAwPa47KjfyY1eqXiwg8VZVoF6a9RXNABRiVjWgSaJ9Zhb3DZimMr4SstCGcubrtwSS1wm",
  "key37": "4t4y88Jzw4xAZ7kUHcxFESw8QQEJZLneTKzXVQcAtgwEWQ7iyxS8o1STLxrctC3XD1yW1Yz9QFMJr5RRnyj5fatK",
  "key38": "5mUABs3K7aZ9Mvs4SwEiuM79J2MityZ8mbzhwv1iWv5SaM6H33YNtokiR9oWKXJuRqT1YFzE392UG8Z2QKPpgFXf",
  "key39": "bGnSJiPSHiS7wgJuH7bsx4veZ971u6fr24ZDLFDnCEgAoyn3qiWUzcmcWvRWSyo2mubwffcS4r4nWYJSkFyfKGL",
  "key40": "3JE4GGooXrUeG3v9P9RRnpEVoYHd9vJGJxxraHaD7SJ8MVjV1aujqTxrRjvrQkyiG4WeSyNQrm6iiJ8JQ4aL9GDc",
  "key41": "3G2QGGdjLtUx74UKETZw7ZAAEgXP7ZuihMyp2xzX1CQKnpJV4m7Lrk6aYiue829WnXEuX4Cdm6c91sAkUkaMiqEB",
  "key42": "634gitsNaPeLHRiy9B8tiCFw2XL7dfE8JWe7EbpY3TSPtBzCPwDWK7q45fndqmn2A7TA4ZWnVzxK7hYBVXtZ1PJt",
  "key43": "2wPoU29HpPTzsz5yTb4rAcXZadL3iqysajUyzrFrVqiVZX2hYjNBgLLfC4w3m5F6JdFA869euSUC1kRR2WQKm6Po",
  "key44": "ZzVJxYxSao52AezdfVctJFKNQTEHge62vtshC5AZfujRQ54kYAEPvBNu7WKrSSVKpE5BVhXyh6F1Ddb1AQDz7h3",
  "key45": "3mcomXMMEGFc4oe5WrBursKNkNDsZLmZyqzZrzcSTuQTwNVfm7kMyzUQaUmX3txM7pY6MQkd3zEhiahHqfXaNzwi",
  "key46": "3dgeTC7EQMnT2PutP1FjgfyH4QbJBQiUqj7u5vCtQnoUMVxX9ff3N9ETGkduTEqqbmRPm9bqBEdKdDDDu3Z7FHCc",
  "key47": "KEtC674BE4u4ciG4BSWCrd2sk4pNY3BwLRrx8JdeepgcKuxap4pgicy3YMkKwnxXHaYikxrs4Hj2g6SMhimyCZk",
  "key48": "2zfMVZf72mpFd7mpMe4Sws1xpF5xeRKnDZfYhAXbZ4gNf9gLf11s2YMr6v8UBZXmaCJPqP5WFdbrUC4dAcCNqhwi",
  "key49": "2cp1wzK1f6zjmNFy8255kfk31AwaSU6k9HWWNFX8otgyxAGEnC8KjbASSieJs9EzajzdG9CR5xjGnfKJUYPhR7MN"
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
