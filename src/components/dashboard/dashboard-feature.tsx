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
    "5ixjmbW48Ef7KbkHhyvJp47i8A7m2fvgySNkjDD1J1RynR3ScYrJYtVxViFhQcN5JQAMdcRoBNg4iL7nUXFWz7uG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23CmXoDfWk2bxQG7VZCMJ6abv3bc7Gk6xGqfvAk5VWpJCT4ZKjcrvq1oJdms5WYp8x1T2rDhk3MQEocEwp1yuVzF",
  "key1": "4Fobaz6f9fgHzc2zboTsbYgcZeCnK1TMfLFrpFo6N4av3NeWj7NMqRjAzVb4nJ21kSeZCSRzV5MugYaUTB3AQYL7",
  "key2": "3aEVKT8FmBhBTB7dWX8eZfrHdLA5BXUsVo8SAy8uJdit1oCAHVypd1J4T3arLf1vk2w2AfWB9928rTcVs4XDL2J1",
  "key3": "4CWQi73CQ3aahyhGuKML8Pc1i2nTvb2mEoQgEfX3iVPF7Ty3tjxjC7RMzk6AS8QhVQ31ZyP3k7ojNt68zcyAbFys",
  "key4": "5rWpi9FyAFgS7k2aYtodUL58tLgvjvM3FFH9eqQWez9bWpB7eJ7tYor424HhWDLtgCmMmVGTsUcgbSjH71T5fw6u",
  "key5": "3iWZbgBsCodFn66xAccHjUraGL52wboguHuVEkSuon8xJ3AHAJ5UjTNDq1SEuua2cbV4RyMHhSfWkk7GSfqHtfME",
  "key6": "58T613bFA2YPxBo3JdU1MogkS69gmRrpJ865a8M67Esh6eYmuAwqSZF9cJJixM6TEjGMNa4Qfz5wd8pdPpATHDio",
  "key7": "5TXh2sgHqUDHx6yZu46h5MtzpEtCu9aJwPxykkAbeptn2bomF6LnPAgTR8doTgLwVeVpRuT7EnPTQEGhrH4bzUQi",
  "key8": "5KREWT5HSGhdqf6hk9bQdPSp4M34N26HufMmwLEZVPLEWr6jL5HgHG9C7xHPqnzm42GAucZj4emYjNZyY6K2zXyS",
  "key9": "2BsozV7XFC4w2CN4CFFe5vF8CDLqtx2rxTe4nwAMrUQbUrnLmx56Euw7D42bdjEwWyky4e5TNvBQ819scZnRbruj",
  "key10": "3E8U1EcYnHrRMuxqEZ6pYzUceu52NAkjbbi3r9R8zsVpCkddtS4K9z6UrdGhpSw2WJc84ZE8wpH7skqAdQFsa3kb",
  "key11": "5vjDNts9hK8LdK3hJcT9DSAk99gutuVb6pPc38q9fpRWgZMso8178bTQ2Nk995gq5B2QPZs1UVH88erfMSoz4to2",
  "key12": "5KwC9jAiojewt6eYLC54UQ8Y24EpypfzecgE8QhG4hdUvRjLZ6ngbNk7ExgRvVModshrzg1GSyQcttTbUGQbao8A",
  "key13": "4wUmvhWwYwDRkTd4ffbbb9iQqQL9m1hipsduLgovzsT9J38Q8QNPJn4maB1UA5QdEC3zaMFwbC33F9dcZNhpNqNY",
  "key14": "3jDsHcq3M9dRxXPkUaiahJ81whXSSCrW1aKc3BkJsLQqskGviW5rEUiZUWWggB6U5kwurJkop8rzeQMMTBGy2GYU",
  "key15": "3Wrs5Fi46HhSWznesJiRjkeF8tAeJvYnNHDznbtfx46G58X3bA9xMuWgcRcDSNVS7HeficcPNjaa9NMdesnxVSt5",
  "key16": "pc7HPHSaTFiMhHY4pcteTM8CebLeZo8d2LM7oohkauXV8LkZDNgtQUGZMuBvfkPgRTCLi6aGPTgj2qkJWmrZym6",
  "key17": "2BDgfsCxi2eMK2r8gqLUezc22wLRMMQFZct6hBJ71ZpEwryNWrWUrKabsPUFCnrZV42ji5npvAY6JPgwAATXfvRM",
  "key18": "5DGcu7hTGZ3PmaFgfwfe3B479qKuYrHjNKrTzPs3zTMHuK32NxLsmMXkGmZcVgUSFcy2SoHFZLdPMq4wvjxexKV4",
  "key19": "4SSQFfV39F7BhiJVoAAACBwZUsLVQJB9HJcMCecAkkaUW5AHzDetkPWiMWjjyV9pct4b8zcK3i8zW6hGGvQyB7s3",
  "key20": "3juSKRXJJZLepBT8XHdmAcXWKbEh5ghKaKQT3177VGArJPRJBbH4CMpEbaokgsaSkJJ7HJ2d9Y72VQkuDP9DeAzb",
  "key21": "4RmQotQL4NajVfyJsZxiX4xK7gPLDiv38JoUr7iMC3ViEeupNQgox3MVns2qcjy77B2a3LZoHWbhcFebAi1wXhQ9",
  "key22": "41YKabEPG9VJcR58wQd5u6fAEz5coJQecyhqWmTS9wjB9zTEB9WBbFoqzLeoKoeFNX6XaDMFLwfcdavzffDE4gKm",
  "key23": "3w5xmVTXu6fmrEEVkVyBkdedCj7m28fUjMtb7iEmzGMRuNfGLuk9pqLVvD4DQFjnfE6ppBiZKDWQsPgo35JGW6wa",
  "key24": "bjXuB5guHidpcrS28GR2Q2gZn3pvMm2ZVKaEiG6UgkSTve1fgRtGF3EsJspEejQcUYTHFXE41eL2Sbsv73Y7gAs",
  "key25": "5FUT7126AzhfFcqLCjyv9kjwusAkFbgXFM3FFkzuuKGEfQCH2vcwLWT6bcZon4zYEJKN8wggBvz3bkiK3mDhSbSc",
  "key26": "5QRa9it9ffWfTU6quaC4eNagjPqdwpzLKwUeRy6rTTB7XuUa1vyWFq7T75bVF7fQLu8YAJnMvmAMQNk8qirBBYuL",
  "key27": "1QCd59SHt9Dh8VmPYAAKXg4b7hB7hrFEPrSj7tKR3zUocCnfBGCx7krkaZGWoT8Jv66hkvsBuSVhDH97K8akitp",
  "key28": "4gcqLf5dBf5FochsTfKePaKjifMNv7sagsfa92redZUMrQmt58tRQLZbxF41FQb82WZM73Sd7CEzapCaiddttkLC",
  "key29": "63gSKJt3nvgnTA9NWs9AJMh8yT6LCjrRkaocBXmnCo1JTZ9rMKQuzn9nN4Wp3fkLohM37ECt88tDnxGmstj4tQJW",
  "key30": "5gAVtq4FAHdiMq142xJH69MZLiEETgiJeLYrDyLS2Q5L14opoLK74te4958HgmYtsqt7i1bg6XX9CZD1tD2kmr4Z",
  "key31": "4tKoyDvRtLP7beVxDwG2aLDEanr9Bj9gcFdLFJiEZXKoydtqQ2jm8skzMjpjvPkbzUkvCUUMWKQaed4twhQxMJm4",
  "key32": "4UCE5huXVzG85sRhh7WsebyCnHckpZ612UMtKDWVgQqzkDURk6X6RGbgK5kPbyXzPB4FYu3z1LHsG7ojjTkEpnHT",
  "key33": "5fuPxQaPacb9qRkHxQhbjvHz9zCYPyyGNnd67P73grpGqAGeYMbgy9xBVQCAV5ChoafgfKpZqXsipQDEbKKBmHzn",
  "key34": "n7g9T7Qkes4LrvNi49Ha4EVKqAdb5Fa2VkkQTLe91bt4hthYjRUfkBG5hS8cxPdac2TQE8hk5DbptREGK6vsKJS",
  "key35": "qiSGQKPZR7HXKaryQPjwi4Vo3vitmoUY2PchmPwsbmF5uW3dG6wYwnwwe5GQB2jBkuifcRXgXKwZ1Mj4s7NFanq",
  "key36": "4LEVrnU2KFXxXw6aUGYhP5EwzLDda9K2NpKctVuFHPLrExwGxqK4okowoE5fakSoSga8ip4F2hBn2cE8MG9ReoMC",
  "key37": "5jV5HMAUv9ANQzdihee3TdqU9AS55pJSkWNpswRZ88vUJZzNurcJ9K6HJxBGqD3i7PGzJMgXSo8aY2tGygMJp6gB",
  "key38": "4DDytCydX5nDHRES9xMJUc8hZXoUD9BGxZztLmc8dt1Kg5k3QGjiTd3qVtoSddAgLq47wkAPrdHF82KfoirBX2x4",
  "key39": "4s9NdLbN99AahDH5VwkLNJtnTBa5gPSnoVKuUcr6zBTm5ZuAXorUjQ4o2E6K9r5yzRawmMiDxR9JwnKpHQaEKhA5",
  "key40": "5H9GyBec1K4SYSx2tKMH6ydXaG2LwzPzmh81V2btSzu3k6NBMrECWnRVG7yPMmZwKJXS9UzWVAUhptwvsjrvj8cG",
  "key41": "5pdqWZtAJmASgttw3wjxiFjFsLSd14nSyum44xDwff5Q1B4yXUv8MvVqNsK2UjwwqhD3RNqsaJzxHoZwNyHDUkbW"
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
