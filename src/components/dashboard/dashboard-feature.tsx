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
    "4eQ77Pf1zNU1R5jqYyJwVhFSGnufN4f3GJUhq6H61hx637hk2g3JBDTRpz5vS3Mk1EpM67NVXGLTcVNDZg3bzHji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5twN5anWDXU7VM3qmZ9kAWTvnADWjBDH1dkskdaX9Kzcvwt5SJBPhfSWGcbNWXYYgwt3V19Pf8Ah9zrT8qNnY5y4",
  "key1": "jS2Z1Lq7c6QTWkPxjamuDGWo7ZTjiBDyXaL7YByfcMBJrF3cLtosUMeHkETkCDspXEr86aJaAbpHJuCLanRUXfB",
  "key2": "2VjBN7Q3PCRPppV4GwYggdFNuxTc8r1eSG5MWR6PLPCnUoTCknHufCM2RiDd7L4RmrmNjy79Ym2Hnza5KNw9hVnV",
  "key3": "2uhsTbH8MvX8NQh3R4BLC5UHm7rNP6XX1LFKeUdR45ktck8DJcWy6DAqKgWfettYMa1ECEj9zFnSoraETJnaYdUX",
  "key4": "NbGC1Qso4BxACRyUMSfKLmZvSY58ms58hS6L92jJ7VZnV6BVuN3hhS9vRsSnrhxeR5PgAyzmxxTVhy7Jzm4rv4V",
  "key5": "LC7uin5wF3UcpzzSqcBW7fqMmcrH5QA8xuBRDHTxvTaEDVfvTi36QdQGtC4DdpUikgi7EGJaeDpKWhNa6f7AGm4",
  "key6": "62bnxuFtDiChxGmraiMdajafMqmTW8n1G7XXBEyahMB5Ky9BBfeahB4HF1A9ghncF8gGo55AXStL2AxNJXqkrakc",
  "key7": "4W5hvDViwfRbHUEHukMxtosV2Rfa56J3PWuDEVnyodAdBvJ7Bh8crHMnAxjd4FS2r3KrpP79vmpPcarQiqfFRh9X",
  "key8": "2xASnR36jPgGU9T2Un1UTRijivuYxw8sSPop5XnkT3KV52YbrXZ5yhdgWcQ5tiSNtuaFXELHU6ti1Wfj3pKDcypQ",
  "key9": "2ayCgamV4Wbp4Nv9fpRA3kLMb7PVzgtHunxZWjpnpjB3k1NCjdJnTwQVqVZCTt2d3sZ9auzeYcrpzrvhp5wtAwMo",
  "key10": "23L1BshhDfq2jJs9qDt6SQSeRQLVqRKWJBeDqVYi5DF7SBjZVzBKhEuXgPqcATQ24UjqNd2FKEEj7TbxMmkXYsvT",
  "key11": "2KSeu6PyyDDy2krcQ5u8k4mKZwjopMB1BWPufjPjMX64qM7m2PNwajzMdJJ5Evkr7Z7YDQe6PJhLr9ELgYaxQ1QT",
  "key12": "CN5HCxngphsBnGQHaNerF3EF59wLLoBf2GN9fe2sByXyu8jCxdfATjuEWwt2s27yS2MvAmhPW9TCBhqZapgMQVs",
  "key13": "3NG8e7uZpWmQbKridLbD3u2vWWbDuVVyiNRjLEBTbzTxXKXduXotUXck6auVaAyj5YsqSffQwBvu5dAczPpZB7dg",
  "key14": "3KtZo7aEdKzC4q7JgJ1KtoYfF9gHARmGsJ1tuHizqZYbncDdb9fAW8aXENjDfGTASq4GtScWjtY1X9ZPpL8pnr8r",
  "key15": "4XpqaQUdCmEjvF6LuuwqV6D9ARAuv6Ws2iYmf1cbwhVxa48QZsejCdW1wHukgT3W6okscqY19YMCSuE4whCk1cN1",
  "key16": "2KtJq7z6NVHomK3dytHnbAhfrrSxXBqEUTGVr8biB7YDSuSW4wSaesYeWNnTtzr9KEwYsWgKNuMPvCweKt7VggzD",
  "key17": "5qpSMAPxK4GCBqGG4KjEJpXHzAFuz2WRAY4DJPkbHfieCN9FVkLUhnRHUhcQCvLyGAPohPVaUqVvA8D9gFbrurNK",
  "key18": "4MtPhu67xGtJ1o8PQjznyG6V6fsEbz9Atb1joqMJxyqDbjRXBqLdNtowxKqswau7DfVr3LyhwBnt3sjaK6Ck2vRy",
  "key19": "5fuCkvPPny2gWBppAH3uU2mzmnMTA646GeddxQKHs9ckD3bmv9tLPg3TAm3sbZh6X3jsQTKYn56KZSQmfBfdejCs",
  "key20": "3mEGTxpKgr5v9WMe5ttcnpWUG3avLQXPS8CbaLLrrWysaBT548H84rYpJHqwM6nd2RyUHHDmixHhdHsecCo76kD6",
  "key21": "4F1j8LQbypyxcCReG4Wagm63cLArnfBWNCSHJVTyGZ1Z7Liv6gbEuLC6hSqte5Y4g2J3T9xraBRh3NYPEXXMe1BF",
  "key22": "3RmPsTcKwnePVL9sViWQHphvCY2xm2RDpHEmbT6g2dFMe91CekVLiGC5mpxni58o7S6zXW93GUqVSdcr11CpcK8K",
  "key23": "43NV99LdcvBb7oGDSBNfwguMeNxfM5ZGooU8SdjAfxdmeVchmcW5BsfyTvhTKWmJdGpKWa24ti6rF4VC1s19Xc4i",
  "key24": "5Q4N1s1yWsnujWLyH9pdafNbEykxNAVijkk9p2WyPTAmiLBZPDxjwZh8pscvWVw45Ad7ehuDrGiTaogXbkkqhXbP",
  "key25": "5u2HZWbpURFGBTaL4DExQaNfKHaE6oNo5tUxRQ3hiV5AbcnFeWqgHGREErAtQn3X1YbswRVGZGvoXvAXM9ssWu7U",
  "key26": "x3tUtzyAruEAvvoTdZHW1Eb6nEd5KW9kD5Yy5Don2vrQieprhyU24patMN6MW5fhnvdtp6hkCAyE1tMsENJ8xLf",
  "key27": "3BdfaXaDtbNGUsZmhHiiLYGoHad3qryUnvJXimB4QcR1gBy5qeHnThF9Borhs8awT8Uoqh5VysvXfM3YHy64ifxV",
  "key28": "2XGdvygA8N4pJosFA2LSBEy4g4UdYYAmbRi63ti7CrkpDsjvRDAd17nnzDC8k3DF49kxADQtRAfk1TbnPq7P46Kt",
  "key29": "5eMx7ULe1eotA39LnUp1TGaNBYvZ6jivbrz9i6Kd6McjcKRGzz4vEaXku2vk3cGwepKaMdnDPpK1gUz9Uw5bQzwV",
  "key30": "2goM3pWaodtFBTWHCCmD86b6BWZptqW7dWuVXikLZvAmLrFUi7r98pUuJXf1orM5xicd9cBJGMTtHRjGnxUjsDks",
  "key31": "38cuNihGrUgfUhoLaztVbFcVvCJST3urWd5et7ArZvEKakwJZMW4812n6g454UNHQ2tAYE4CbAPcBQHnczE8gxRH",
  "key32": "3fc93vEhaFWEGGkMcDEFRJm5XhSZpW12zUdD25BJjq6abh9UxNXPmFurEXn125nSw3ZkWaaHPZ6JQH2vTdBtDPtW",
  "key33": "4NhAQSPmyurv6NpaSRfdhyti7Y5gyQuvYRmsNjDPqXmPiP7E61fP2hrBpsx4zNcd5v7ScTLptNQvrFo1SZbN4MuZ",
  "key34": "4BsohEfjyrmb1px3V4QHYaLFM7QLUkCXuPtL88FtLo7q4io8Bpd4ba2GmwLMEgsb9z5gZyQuTtHgmErf4nAnySCP",
  "key35": "2B6HmJdziG73vDUMYvMXR84Aj1vcwhVFF81DYVf8fxBVTvvm82wuCrfWaLUC7qjCqN3bXftErZcechJ1myxpvGAo",
  "key36": "5bEetp5wGPSFwMC5WQ2LhdQXQ5zMLZnyXMD7RE4jgfRdG4p9yWK2jY13H5XnmUi1uYxe4X8cHXJBsF8kfJiaYavh",
  "key37": "4SMJ5Js6SHHztTrV4nzdmr4YAoa6fWo2LfGRr8ibyf589Pob3TuiSkCsMGTRtLMmdEi1QSAjwAo1khBz6VrRnuCu",
  "key38": "5vViD3bvsevmV8QVWZxgHfsuiCt1W92D9CSbsr1CzgCk7Py6vSdvzb5s2zDo3ixUpTKC2C8yehMtpYq4izYfFGaV",
  "key39": "4fYp3GirjFzCsnV3QYzQ7zERKb6kMN5CtPkNN8GPvFkqc8eWNsfScnxRGYsk5R4gLsA5mnmp2p1cq7VmvNrBAbY9",
  "key40": "2reSfo5d56keHjbNbiniv4WYSka3sPgn4AUTeYozU51CWYKWGZAKrctK41xqVvsapmJdr7G8ZaY5LU6uU528KCDV",
  "key41": "3q8KhvTRD57mxVtJQS9HQacavJ2WD9DqxCXWWnDhtKCjAzcAoJ7p98a8isKMPDsNcAuzqKAnFoKcGNpwpbCq9bv1",
  "key42": "3dYRxpVV2ByKjEEZ7AcD7oeKVztMGQYkr2Xcd7h3RGLn75JhEYXyEYshQ8Pba8QMZ3NJnf5cDZq6cA4W4BFyr3Vu"
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
