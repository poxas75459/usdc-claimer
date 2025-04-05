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
    "WpbFSG9LzUs6BHEMVjE8Gw1rRV9y7h34EdVqX4Fy8Tm4fCEv2Y3YShBBRM4nnu3DwH2546XywSQQVGCDtiWFZA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UvsY7scuqyQo3VgfFABZjSDLEnGB8BGrftnBz8fn1CUoHBPK2rCxbyDVqNCBsVQbPSPYs6yrePw7AgXhM1jgXMD",
  "key1": "64UJCArUgrHWmDcD96F9ZkbnQ5sbAFz89RjTKoZz7Z7NXmphvc5UWyUbecTz8KZ5rsN8vuyvWzsd38mPow9yzZks",
  "key2": "5xXDQMgpjxgPEpPfHiD6Z9GfcsD9XmmnmttUW88bQjDrWRbZ7xKQcyqP48bmEXPa6NMvSRuouPB1DNTNHfmEMwqr",
  "key3": "hqrqjCDpcys9mUqTjdKNV7vqj6EcLMDdrErowbGe2ANay4vrki7mm7GYRLJPqzYQPRppnzjQeMqcfqB5Wv1SX9B",
  "key4": "2qUTqb8ZS39fmH2SpfawubmVUxSH2xaocGJXB2NhewTcjKU6UsAwLVuBhXqNVcmLdkufabRVY24b1yxsUNX3MKA3",
  "key5": "2YiS7U7tfFH76HoNaD6DeuZofkJ5Ex7Lx49NPKFNYaXgxh2MPoKVWf1wPjKimvKQqntBMuWB935U3b7fXt8sXCi9",
  "key6": "3hZyd7rcbgZsaFgRSikn1nzCV5nWFXWdCFccTGDu2rMqsFgZBSzP3HcCnjXVzW2LqCMNmFGyikqR5215dgAUi8EX",
  "key7": "51KxReuFuTyYeDhEZAzpVrhYJAKAzLUtwgZabrNhXLBh6dvrneUbsDvCbnHxYJfJbxbzkgV8J1ayaqkuaNVKLUcz",
  "key8": "4waJsj9kKHR64kFjFifBAUUW7cumoqp3aiN4eLV2zGnpt9Nd2PDwMy5uWRHvkJYWFgCF2ofsT1fcGMmbdck3LLpv",
  "key9": "3N3uh3JXwUhvbfCjq93w8DC2hYYfCgmzgYy7zEiL7SNwV5ouRUXajVeQf8HDYd81GUWqz5zd8mkdh8ZcftPMsFSC",
  "key10": "uRyd9e7saSY8wSrqHpspCoz7PbQzG6DEzyEkGzSYRzoSJHyQoxFn5TzNewF5f3qX7ETpqdMNQHrULWi1XgoZLMv",
  "key11": "5obWXGFVTthTq1rP4yumWqwYeqmcF5A8rc66DYVjQrK8bkWi4KxFzPda35uZRv9YRX8KL6E1L39sAt4V338GkBoT",
  "key12": "2RCSJeZDWB3STBt92dhZohfx8UNSdmDzZqHgie1WXMoPSbtnf5v6wwEt8JpvTkvA88LjEA4L5k2dPUSAw7dU5Cd7",
  "key13": "2JZuyShGcUgZkB2NqUmjGpfden4eZhDkFLQDStZA7fAm9PDbLwcCGZ3c3yNPqXAvqeK4iPyyBRPJfTqhAZ6AMG9k",
  "key14": "374eDYwCbgCKDwD4ET9MJBnXk8pUgpt9MVg9dFgiLtQXMa22tSK47bb6okCmTqHndLnjMwr7ryop5UsZ2na6N5Ee",
  "key15": "634pG7QrbpU3kCBVSQxyyL64xkwpS7epwFX3Z5YiouWHoqH5jNoiyBaofWhs23dPp5zJRRcVd15H7YawdiMTjtrQ",
  "key16": "5Fosr2jc3JCGeUsvBhowMAigrd47eDnAD7DTTdYqpz6gdFZgbwj74RhpD4feEcCVcPsE9V8vNPhUM84bp4c953Jp",
  "key17": "2ZREpbwQed3CwzdEzRDkyxDQsZTesyccruTrL5T1AdcdLGggZhoCRdugaNRSCQnsrdWicSTK49Q9ASU6aGQ9KKj8",
  "key18": "3LHcaNrio9jCbeMdoAqgMiy9SpApEHgcizWfLQNhz5hVTSbR9BuWfKx52X5ZixKMFJBBngWVVcdsYjZDBWSqNBrR",
  "key19": "3QJ5wuseiK5pTgi3MjPGGLVcPrku4xYPrphdGnxqR9AMrQtdtU1rVxs9Q4NTmnjHvrxVhAdfNKHkE1B2cVER13dA",
  "key20": "2fKfRdThhKPK7px4XVr4PTWhAyVUjqmxqu7dRykhwjW9j1Sp8rjcHc5hrSSFmUTmqi8sMzTSvi9yGCtLoTHa56TH",
  "key21": "5RyieY5vt4BdANivsL6zDp8oHP1GfM5bfb4e8U1mY3Qfnu4P8WHWyqGAQnMczh6YoyN7YLkFXVdt4SxqBjwb55BK",
  "key22": "2Ng9q855Ueeoxkd8weMRorMjFdCfNSh9XZhKFtpZWjNKZ7cQz3yqQLzcNUyratPCdaUxBVF2PykPZF4vBaWzotMp",
  "key23": "2mCkBByx2s9h5KXL76UP8JZVhUFaCzf35oqYSmFavdseJnanTyNzfXJvKREEzB5D6VG3v3KhTo722d6gBHTQZ5bx",
  "key24": "2bY4CRfLmAwL2NdjabXPCA5ihNEv2PdXWr4RwnYAZhJxPsAf53S5jT4pLXheWKXYTCLstU31WEx3PWexywUQHNBk",
  "key25": "4c3ksV9FhTKAWTyt63GsNBBdpDNi5WZKNe5kdxtKyzinxSsBgytV4jApizpoa38XSGDghgeWnRs1k34D4857tNyx",
  "key26": "2NbkLMWPi96x7jsmLM43DaxkcBo4mQ4m43KVnUxHa5Vmf8bsJ6HD38ku8zjrGG3XZzP44toxLtakXeeE3UPCQ5Vn",
  "key27": "F4nMyy2k7WMWoQgmNLJUP36GUv9Q6CPw8Z6vQKZ5t6sCNuNvcvxfEHcodJfQBjQn5rVx2iQEPTx1duRKx3Kk2aM",
  "key28": "Mkhmaj9mwQAe95qQohu68bYgQrHNd9Qff5gVYa7XLuYVVz5pdbzneooyAKbXzz9o4dKFme5sBjWsnZ4scsFLtnk",
  "key29": "32hHj4VZnmraaBmZS47ckbjKGy6XV1q8d4j2YgEVSyNvaoZgZussqDDVJnDW81qgRUisdVjbtMyJRZb97hcw4xPm",
  "key30": "5AYaFmDopznkJSocAqYtCCWDFzSJ3NL8H7KwRtDZTcvNLsAGVw89ZKkEzaE7aGssjPzKQEeqeHzDpF5eJ1S3xovt",
  "key31": "2RRLzXzFUHRE2d5xkPZBQGSTvbVXytiFHCW4FSX68NtdF23X8787Unudx5HKXbFo1sn4DLbofgpDkj2FNtGWHWKP",
  "key32": "54N7ZKhnBo4Er6jWMfVjsdmKbM3LJbqLcpMEnxon65kLdWZxf5LFwwjUFRWyjwyUf3BunJcfGY53zKx3TCnf9vAa",
  "key33": "2Z5QzV7amaFvnm27Mty8HKD7YnmBCVxyGURF9Q26MMD7uApjgtP64EhWBNBgS2jCqaAgcWPJAyzfNWDwYcHHTkDU",
  "key34": "2tpAxsycUCytVKGoWwcpqb4idAMv39zBaU36zRuoQHdihesedGn5bXrGSbegi8JhrTqm8d662LfumZeDKKocgnLz",
  "key35": "J5KnLekZ8tign137jaD5yTybYdbJLWmJi7T7j7YdP2tnEZGHiM4vYbdAAk57bnEgYHgHdaArRj6GGJvirMgMDYd",
  "key36": "5tkKfzFS9jGZoonuoNJHSS7Cieib79EHctMbHA1hrBxqzNCyiPUrs8rTKWamUNpvcETRwdisX7XjDqtfSQBFs8LP",
  "key37": "4qtrLiQ1vufUMVDWUoNrPm7SALmVpK2iQdmG6sH5HrERBPQEQHA7FXgDKRAHbU17wdeahdJuU6R5DJNUgnTSTVG5",
  "key38": "5oafkXuRfvNctavJB1Gxi51eu3NHvMVcK3t5uQtjCUKUJ3Mvx2SUsmghexRMbRrmPC9S1e2oM67oSuNaAYCeH2iz",
  "key39": "9HWNX4bu5oFvJrZ1MAjiu9uNVcgkMva3Uf5cod4UPe9KZUSH6UpyQJjVmbnbzMHrY5E6hGWfxnKsA5AmgFEnq3o",
  "key40": "2MMhNt1SFGMyfGnkJ5M6igmr5WkofeYHQRFgV4AwRcu4VR7dqnLA1vKELqEDy2sdJ6P7R1hmA9R5BdY8GGWSYZJZ"
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
