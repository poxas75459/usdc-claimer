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
    "zJap79smNfPAQ7NDBv14DhcbQGgS6oSzLbwjueLkWixEKKEcAGaDroScTZJ7WuDSdhRLg9K6Whq2vY187crLXe5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F3T79cbiXjCtDj8LvmixXvpnG8yj7LvFY7RVUtyUgLzJN7Y9ZWZY3fcqB3Q9d7kNQ5mA3vsb67mh23rEYXe2cE7",
  "key1": "32vqw5DWvYGxJhfmbFGq7udF47SUs5vgci3tEza9fb1iHNKNRLLAPAtbUrPJV3ARSW6Hp89Vjwke247UpJzejQUm",
  "key2": "3HCmqf69SRquioNGSCMZ3862DDgQd63ayUCaGwQX5xvNoaHmkqceuGJGyyvmMTETTQLHH6DcYVnbbbYP88h5f7sZ",
  "key3": "4ZvD3AkfncU48hDUrG1FnCcU1AvY2nYug1CYJR75cGtj7qSDHW1EjyhtrNrMk2MvHvfDLXBzffi3T2kXTvN4QccK",
  "key4": "5RzKRcwt1v7UhY3bZeceETbgwFfVgLWuipbRqKrvSxaSzxxvruzoWtQJq3KAMqb5K6kBnbJMBRxnzGpLo3bxTeC4",
  "key5": "4Gvccqq3S4ZvQuz3A4DtBHw5uBHJWbeF326KYqe9BzUXLnsSgez3tCZj6PbCrvg3WM6bHvx6RxNDVuEibMhSTD5X",
  "key6": "9gXnaa6WBvLGcZqJ7ZPTPjUrHW3JopbHwJz2FsEeLzdot7D2Hdxy6W43D9V5kZhBKcUFjvPF4gcoKj5yv1fFgjq",
  "key7": "iNQQXJkoSwBJnp88tCHZNBXu3NhxghMfyMastWuAo5wt9z5SW4ueTjdSQTA2pDRmr4XjdHBf5t2JdjJQooZkdQY",
  "key8": "3Dm1ifv8ZTA6cUSYqT6xdnHqsnBhsU7VW4BXRwEDFvN8bqR1SFmzg2WS9VjRLY3FGdNc4Nao8Y4sLFGmJRfASsiS",
  "key9": "4uYywRnmSMpBHQt67FDAmYRoUVCoSntaTuZMGJJ6RoDCAUKJ3kHowM1H3BwhejhA7AmQ1B14geivptdXBmT1hVJX",
  "key10": "3viPHqLEDcMHS1c6CfwZVqZECLjavjy9txVjwcqyeJJXHiBB4HCLSjNJPhQV11MbiicCJfeLCrBhqU2Riod9y1pp",
  "key11": "5EGbq3kLxim19n4NvfLGyQM44haURDogcxt2rMUZkvasULuFAwUkUL5uLpRtb2uKguk9TTwBWGdEUwZxxA3VJ9hB",
  "key12": "mDNBcPGPkpRgXDqfjxrBAVARZ6xjFjWDcfN2ApEx6jzpiao2KktsmrEhSt2LqgspvruP7y3nqFuXqawNiRcgQip",
  "key13": "29SKa2dH8Pba5RbQb9PfHnbMRtLizNLhqbmnyKoc8gcxBQ8UVHtohBCAaEwCxGpmeo9MMywvaJxBK5zicw7F31py",
  "key14": "3jDcHxCwdm6BhCAVzkeTSiaCFyMQcync3b2KbpQwgcSx9fbefbcaq8VwGHxi8hERpSYaPYWdF4gx36aJtCQzhQrU",
  "key15": "6QwqC8rKsgLfZy8tNpCzfi8E5Z2YWNnsCwMi8YV7o4xNxULQdzJBAMdTtRh2HpW7FyTRCHEHNLbQWRUQsoj8kQn",
  "key16": "2v9Gm93PQeJjh3rcWG2cEY7JpNrpU2ATtVXUsYJPyfq5hAHxJ8ByMvwXfRxiC4YAGDvXXmtKVsnTJiXxcRwyZyXW",
  "key17": "4k41ivrxuAhekskWfiEWeYKSevqY8ZTpHnuXhLG7e26QVpzY4ijQXYhRm29WgEdkCREL7MPWhHdBNEYbazFukEWi",
  "key18": "3fdrqaqtN5H3ANx4xZCwH8SvTjSKmmdq4Q2KN5QiWRVgEsa9JoSEhpGMNSztjYE8QhpkLqwkffnS5CBW1rxMLVzr",
  "key19": "5X3KyCRfA4JpVYyDh2AKdGDGGeDAzzZiijk3gohHwsphSNuDUYQ8QyPELXvEPeqM46u3RHFvPFDMS24xzBcYmheV",
  "key20": "4R11NMNNBSzLfhjtsttAW1pAGNX93D2LSK8G3aeVnJnP2ZcXuwU1VUMUA3wgzmqbqb6M14t2A4ErQRFDwJJDjkXM",
  "key21": "4RskQMG3agT8TEXFgRy31iy6k19GbZcYKE3ijBLvkMTiXFuXVBLCCd6qp3u9KrWonwmZ5uVefX1UxQXJSbdf1NRE",
  "key22": "4bH8PgcquyZhaKE7mD63DUVSfJf3ZovkwHZ2QFXAK7QZGsasPc7HM6pgPZiGRdoKBzB7VdzCmWSm5gVq2ZVmtnrn",
  "key23": "3o27KCs6mQpGFLx1RihR9njKLWMiCxFSwfSAfCBdVAHiB6ZiivCYALUznkT68VwLPQ26MbURJ1BQoExQ6X3vjJHb",
  "key24": "4aGoxN29c4hqLuBDdqVMfnd7ExeQBG9BN4wcuFVc2v1xSJ5AQb6K9cNPBnoMu3mh83ZkPyWt9CyhinTe9tGbD1QW",
  "key25": "3L1VesKTgz4VvPVZsZDUTBfqStkdqYySZ29kBumnPeq36TaaJQoDzrfxiP1oaWMQfgmnSXnrgeDZR7kmYXuevetD",
  "key26": "3QVhMSCTKtJJ6PEG4bNsLWhTpkTccF28CdtNzX9CkJvxFFEBqvVsV2qNKzLWiFRVqcaXfDhQTZjYUZ62uvTP5xTg",
  "key27": "44zZ1CUBvcuDmQxce9PcXbjo3eCDB2J94DcSbLrDX8z22SSz57cCqxN9fZn29s5zC51mWaWes8hvHxMZatuyw4rT",
  "key28": "3cLuY8uGW4qewwLyz48svyznTxo81ygpX7gnJf8zBe1D57HtjZPWf4LKizhnvGLVHTFe6AWiJqK3sjVuXC7Qh4bi",
  "key29": "2cj7q8Cxdmn7u3BVMmJC63gD3Sn9zUQbsyFNqj5yZe2BgLuqVBHiREhjmj8XNyhujLwUgTBzFrHKLRwCR6dBVEgQ",
  "key30": "3crqtNs86kHdMmR8onas8tU1ApvuCtjzzK4mmCYdkTykLBfeoFoqdQvPMjyUCxqwR3iKeZ2pvPshWvZ6bddXa7kT",
  "key31": "5jJMrsHPxzEaDFwR5yQK3pJfnyVEBC1kwa95wma4LdypWxTTzSh5yJx8KtCY9gRHY8jc9RjYxEMkXzGaCZgDcdQ9",
  "key32": "4JCSfHeQL23rhR9fNM38UqAn62eU23TCXPFgr8FM25ZaQcZWicmDuWZbJuVvmDJkuZtFr4367Z5aYWEfqkNETkpe",
  "key33": "bC74x9xJfcA4fx8rxyVsRfs2LiuchJTGnCJNRY4QtrdfvLTopfQoy9EnLiNPL4FhdD5wrLY3pzq5A2DizXFPZHQ",
  "key34": "5sCMh4XES5m9Xa8UkonhEDoAm2qKAiMsMhP78iQmp9LfJK1rgvrgbhNtQKVxzezg14UWxcuSzdvfy8eLk1g5a6Cz",
  "key35": "4s4qSNh3GMxNqfuAvJ2MXNPXkK8oBpLRiQXNHmRUGtRq8sdziZweMQ6xcKsF3rg2VKCckZ893nMiu5Ki7yxV4t3m",
  "key36": "4ws5D6hymmxDk5sPwWQAoPDHrKFEHEJdFSYedzPj7BfNZsGbP1t2eP1nPhG6D5zCE1BYgqk4JKqWz4psLCqNcXV5",
  "key37": "5KBSj8eYXjTWGn2oDmiRniij5cfgQ4QGxht6WxPstTP5z7gmpgzURx5TxMo6GKPDKwGFiWjLwsczGkmcsP7QTCWX",
  "key38": "mEjCsvpdmYHsvVzatMoGFB4jMANoqFxTBakNsz2HXUppP5pqwq8eAN6WMBVvpnDEWA8m3C32xbrM2ZqW57UxHHS",
  "key39": "2VzKTCLbfjsaW4sGWp6Tqx1RdF28BejHMbv54Ds6CWCoegRe97Fr6Av2efs5gpxcH3SzTTijgTxnLVz9UmWcLrPm",
  "key40": "2b66S2zoH46wudrYi7y9m3WuER9Dq9i9aJtSPCJjvT9EnBrpe8UdhpGiUtcooizBYp1qx3K3v29P5ikuYwzYKno9",
  "key41": "5WSSBt3VDjAzttoRSKTxVZa5AYPWLDYgyvDMjfTe38BEj2JJ9qPyCSGiy39Bv29diLChpyj12MR44viAQTMc2Z8d",
  "key42": "55xcDWxS2GWrWXJ4v2miorNy6mACiNuX5fJPw5F7sBLgdG1Gh8oJYHYPL6asvEt59vUFqu6v1U3CXRhL4XU4L3SZ",
  "key43": "Ce4aDhw4yQFVXHKQYoftLiFU3FeYogdUXK5MfWUpR9v5PagF1GS6cENKsuT27gDe1tS7Nc8MJ4DqWKbEZy21DvZ",
  "key44": "4VhoHuRRQVTDGsjdeZXmitGyMasQj4pGmbjfPum241ZUKKLkdH4QiQB7r4U7cMbo2ZrxAne27JSJHiS8LYnrm4qg",
  "key45": "5ebAJJzSsHntJot8Jh1eBZdyCSBAETV7mJ2Zyico6z7pR8hTPHrwgfxJrWPM2RFfonKiaCHY1kVnFPpGf9BAJbux"
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
