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
    "5Y9KwniyMoRcicYtmVHaiv6HBxT9eB3D8nNYG5ggRMeLfeyxRDTGaV5E2REm3mv6iMrbWdNkif9iPqGRbe2hpSYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NLCgdwhZUiTxJD22tKxkigPNor15gbKufiaWNNap5EE9acpfX2HcB6kvnrXjqEooJC3dATKdbYYUmz1Y2zUHaub",
  "key1": "2JdkGyHYU6yebHXbxrz4VNd9VpzRmkyWzAC1eCx1k29DegncKtvgxgMp4XMQpLJ2vijfvGTBzzwLyHoiqv32rqkc",
  "key2": "3siQjis5dtpcw4GpshLz82GY6Y25SQZfUAH4HyP6PcphQTc6n2uFrrpLNreUur8GXFyskBh5MiLWGbKDH9BeMATf",
  "key3": "3rSrF1kfr4tCSSxB66rkSwAABa7qVfjSPszTk8KJCVGyNn2mXbnYyJtH4ujHe5hi9xM8MJXmQWGykL5iVDuPUgzg",
  "key4": "j6RphHzWadToXvk3mkJGPmwtH9V3zQxfFH9GFhyHeMDY2UbRfM7KUVvTLNjmSWHEkdA1eJjutyxn8Q4NfyFvF3t",
  "key5": "D9du71u3cvDDH3NNZUVou5Nmf83RnGVrHNYr6BR71YuM5kcD8LcycoJZBWyDtGadrhxxUC5em9CwXX4Wf1kHpYv",
  "key6": "4FMWe1HvhhgC3pW8gWFetut3AfecRsiSp7vyJL5RD9yu1SDZp6GExxNGjpZTLMrgguaGexhJ5yzfssMh5KWiiWi3",
  "key7": "45o6wHmjaNwj1395scW8SCJsP7xexipdbFucHq7Kv7y6ZNosgfC6C5zuQXHAPm5jUYfCEQqLdBGgzt6zbHxsEiaZ",
  "key8": "2bwf1BSPf59WknY7pmBgpAAWTHMChpAKDJ82D4a9gAvnjhU4J93YFhZBbxfNwE7irUXwthT1akGWf4rivkvWb6g4",
  "key9": "4Y4iUwepd4dvdtc3ifcrbRe2rg6kR1TAorT7MmWubPZjfLzeyQ2WhVCikAc3b7zhNEKe9JWywM93NxDdAHd8XTci",
  "key10": "3BrtJH9LMD5U7DGqNDp1J4exbuY3hJUy7y5foiuedVh5HP2GabxregftiXao96MhkFbBXPckJeF3Gufqu5cQvjRv",
  "key11": "24ZpAw45zgUFzwXh4tufPcKhGfJ8iagf3t5XsmMDqmHubexqhGVjSfPgLDDJtf8BKGQSCTRGEjbJJdbAcwwkemUD",
  "key12": "62gVeEpHzzaaCrpNkahWSWm38b6UXHc9ei9Xo8sabPfAKHq1qMqodRX1uAHffBrPsEL8k7qvSnG8VDn8rvaejXUD",
  "key13": "2zGNXHpYsomAZygef65ctNg5jeaatMmyBGbcrL31zgvVe8U8uJJDToByyG9RTyZtkBZKkGqh3KNbr1Pha6a6Ppwx",
  "key14": "24U9vyvQJXQijGFGjHTET1iSvDHQ6ACyzQqyicmZtcHLHzmuVYxus9TvuyJ4G1wjbzsrTTM8FoSMaBHozmfKGjLK",
  "key15": "2gmdMSi6WSGnmiDxK7D9KUmKZLHNURHcMNqGHnTj9Xs5XwdsBC18tNW2z51Pe8yfCsTMgu9it4JUATgLpWyJhVEg",
  "key16": "54i74TQx9kjxs2vZnamXpqyGncZXYqTZjabrvor6evjWch8VeMWCMDf8snhaNGXX5QGDRhCnNhRvkNo3W3yHzZ1L",
  "key17": "2aW6jz75EvhUx1U2KWzfniEmZH2cZ1sgifVTWwJx41SAT7WEMURvooET1QdACyWHdw7FYaus5Qyp9KFskA7XgCeW",
  "key18": "2E1xwzazWEnkNhdhgpXinKHzxWdZAGVdr8ZWZd5riJQjD23uVAnxZGz8qqnUZcTiHd3tJqe92RZuickWwkU8dJJk",
  "key19": "3BL5SoXzRKMbtK1k3rZh2PA1zQxUf4bmApyqPkHXFDgewNTw5w4kGaA2QMBwxGtZinhiCcee47BhUMDQDtufzd4H",
  "key20": "5V752UZBMeNgzvHgZincjvTKSSSsjpxSPBePznFuSDWTmwxpMtMG3Y6iNSTCQbhgM8xLKtiMtD6grHdeLuHA2Tj6",
  "key21": "qzBMchorn26y74jbhQmeqVs4e5363f1ZvvZfU5jDWEz6tHLsxn4uTbCXXpTofZKhmDVN5ogQ2saqkQDXQukg4fN",
  "key22": "3PHXKuiQHBFnPCYnzbZsDouF4xHACSTVRECB2c6ckA1NGmuJtPNShxf2LNXJrB8hYeuf8LKaRph6stuEtNga8EiT",
  "key23": "4KaN8yiCXa1EJaL9g8VvgHttXtovS9GaGYhzygjcvs5rq1c2QWPQsfhrFsvaxHqHz14kExNrCxnFHURM7eaMZJ5F",
  "key24": "48gSbKzUVSGqYq1oomgHigatzRzJcdV7bLXJJVe1WSe3UyUHbrkmqjy2obpwUVcFLrFU2x1Fp5KCQobBKSTFoQVc",
  "key25": "KzSR3bGdX3wxqtPdKvjtiA9a1y7K8PsYnoyNECpM7su7vFitNih9AvhheUtSZmBdqmV5zjcZa1T99t9bKwA9UAT",
  "key26": "dakzJ7oAF2A8iHxHsDLaRKDiXGc1xhxQ5PfeeYeHxGp7WvBaENaXDatP8C5seH88cGnh4szqJWUw5Yz3rzH6QgE",
  "key27": "22xm7b8nGfUGxCKJK3yzxsNiiJrs2ogWz5xcisVS7kaRSNjnXLKLP29bMErG5CPk2MGatHcorNuBHCFHZcajmHnV",
  "key28": "2GKjkkiFqW57uALSnsurbfKoCJbqFGv6iKLPuANAkWCVzdi2qjMm9qKiVLoqicR1GQkPF7kU6DcuBZVMfrN4nU39",
  "key29": "26txNqAhTWAC9L78xMZjoaELLzQ6BBWDJk9JL2fnvz6KaSu6hTLB7zx4CYqmaFnQYrPGxWSc7bX4Hz16kXb5armD",
  "key30": "5GRTycArBK1TjNr3GV6MWpwBy7PzK7LndqTk3TXzWsPYCYH1RrMT3E462fJRLvcynNqSjfyDqbu6bBhTW3mR6xvk",
  "key31": "5WhELsj7Em6DyXT47S5oBmZjd9UmNdHR2cUArdqXX23gXTmigsnFN1BnegdYaqDmnWRDkrYWssA5C2g3eUHzeX9e",
  "key32": "5qAVdkPwcdJaHwf4LBNdkfV9Rpy9sGiHqRY36z8JTpg1ziSZ2NUWFHLE9UmUCAXgTur1WA6wM4BbooM6TBagG6KY",
  "key33": "FuUFksgoaLzxY2gkV8mCtAWRZZ3v3zDvVCHwjsKpDKkpVAVQ4kbsqavV6AtvaDegMiT5kmj8WEmQH6rAbFKy3if",
  "key34": "4ZmPJ7se2XZEU8g62eqdNLm1ato2mv6xBEuw23ViPnTL79uTSWwxoK68p6brM12S1viAyYpByQHhzGndcXXwDKEC",
  "key35": "4eUSb4XTvUugHFq3a3M91NmdrSTRmuswVHnxbiuaUrXaKaBoCUGVHQUrw2opLDa7wc9xQMuRnWixuPZuFCi9v5zS",
  "key36": "2z9DRPAr8S7TNdra5G3SE2WugDwh9A9AoBesByZzEfrkVox5y66tgrY9L99KKTEWwX1ER2p6NvyVxXa5uc23iEK",
  "key37": "4tPk8DBvWssgXmnURiSetMXSQAVySroHnM66WdQ72pSLAXaVxoRWuzPtzrfRF7dxFSgbX8gHXoowipQjSRCrYro",
  "key38": "2k9YmuhhMAsYXsh4mbgyVNmEM2WebznkqUZSrRbbdzPT47XSDGEw5bEjfEZbow47SgP4BEu7HfHKbpZKVJueLADu",
  "key39": "eP9BRPgBPM7MEoUD2ozNz5WQfG7etR52qeRGD1swVsUENSZHUypHrhTHe4pFvZXLUN1H7BiULEbYroJ11ju6Tjj",
  "key40": "3jvaJuf6o22Co7QRp2656D6vwYcRNmN2c3zts85wX8B8VUTMt5PoTsH16Q96CXkjEdYbjezY21FNn8FtSEHpAAac",
  "key41": "5tg6MTWNtrpRqGPtayD5gYQqu54bgMokMVY8a9DpPi6LDkenWYuxDqzkRm2VCP2gTPjapB9HzfsZtRiZBxS4cXw7",
  "key42": "2AHBMB8z4ugRiHpsN4j6HpAWNLR91cFdeFuRvnJBvPQavy61ez6UVyQCCmPTUqM5j3GnJ1KvVyv8fakjBwccyzVg",
  "key43": "3wLEJurBTBtK6mxV75drrb3o8mFKk1mZznHTgANbgSpmt5untav5agqiWc4QSTF3bYkGyLcZZSyfDuZkqLPa7oQF",
  "key44": "42SXbCVXhcdmGu9anehXjVQnhYry2VMCKALyRxP49JQzPS8d9aZCnwF7Y8p6Pne3AFqHYqxQDMc2UDzqFfEYEdzj"
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
