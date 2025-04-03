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
    "3ayaSJnEqGbqxih7NNE8fjarcgMZ9QQSJa63ihjbFBPz7kYueaQCvNik1kqAo3WVfB1zuuytHE3aSDbvaZetPB23"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3htLGbxwmNjcFiwFe78XxRKWCTuJZ5qEgyVooFtzPwQZgJCkZBZ5scPnjTRrQkvdCVcfiJMkc2PDBPUQR7PvVKPk",
  "key1": "4ZTBDd7CcECNWvayVRnWyWTWP3CS6Y3U16AScHE57ffBzS6fim7kJn65aSPQi1EUV3HNXB5Q4Aefn7fmouaJQ6U3",
  "key2": "5oMwqzHwUYfcFfMeP5dWYBmkYzpdHkjFhHrHPDTw1DC7CxmVw6oY45ZxEzjAacyzAy45PZqb4wehpsHWtbzwKaAA",
  "key3": "3YzALZwkzjsd1brXaHJpgqXguWanr1Sg6CWAXRV8zPKZDCCav39Gw6AqjgBzdQfcNkSq7DjQUVJMAXA9gR9NovCg",
  "key4": "2Sw1LNhom986xXduzQznjagDXydBmjC3n2pekchwveBqYBvDyrrfXJ1MgCUQWc5kJTKetQjyT6cpJz1fdzzp7DH3",
  "key5": "274SdDinHVY6QMmX78YtdwzN9JbnrkrJNGnWnuLq98izYdoPwnYHuzJSAfFaccFXq34qs2nbwj8rjGnTibknBrGE",
  "key6": "nnEdYUKXvgudtpe4SnA9dWfdRbHrD8UBw6NR7jvDtnDNRYgN1SRCPFnooK5tP6JhYqWUW9SWfbzbiXG4BvJLBzH",
  "key7": "3fRxf9AVdvxR3bypt5gKLVtwbm3yprypFM4MSAsNTQctQ3mpiY4d7RTARcY7VrgGbw6zEEjk2n6uTpqnpH29sCjg",
  "key8": "4N5iYVfs6Cg4Gtv7oCxk3yzLNuXVzdxsPiHR7tgVkRRxxC5QEcSzkQNZwWJKKy3wGukeCQjnsXrYvEELtxfUnzpt",
  "key9": "4z7UccRc7DuHZCiFyNqQc8aXm39HDyzcnabrHqtKjDUmTA1MrrqhjsPFy4aQsN7mrWghnTHgaFe7Na1fPCcAG5nJ",
  "key10": "5wd6MrFum9LBDZ1gxhfnuWB45nFghjpyuAqE8kDbX6YyxQHQt3kMWTTVPxGu9NNQ7kRQn5n1ABxuJZYaD67HALr3",
  "key11": "4QJDK5rviTiT87dP25mKLsYoi2dymntFo5HGZJ4ST1pUhCkSiPwy2KP5TkzT1pEvE8JYjJeBuxw9xCqzJGr3EZgU",
  "key12": "42KsjL5GY3yrsKgXKsgpNitiTCcgb2rviU9PkJM4CjrBbhaZVPdMYCPmxCjepo2tDx5LM4S7fJKG7MkAF1CNRkp1",
  "key13": "NKBkg82J45t7bUgb8KRNDZGDaNkiG76zcQLmKuwfnViGZb8ypyRcvxLjKgbMu1UPoBa9Z8mFugKq2PnFKHiYJnm",
  "key14": "2sMyrEorJM4NvZZDs2Kguuet7d3AxAwbd3e5LojRCotXsj5oAo2tuHgSJdyCmfYuFezS2kMZyUGhV7qipXrGavub",
  "key15": "3E94rs9uLzCXChCa1NjCC6BKUMupt71N5XmEcs2geS9vHswF2VkzGDqptKBLCeRXBGU7Zk9KrRZ3kCkss42bg423",
  "key16": "5CSpcwX9xCiuvk7VZfBXMkoVk9wzKPjnMqUZT2wLQCokoRoUhah5ZS3KqfGA8VPf3YwjqgvaU9Xoqr4zw2GveFDM",
  "key17": "NMi8guhJciiuiGSXrTAYYH1BAAmVShxpkRNM2g1zsyZVSen2XQbca2Y61wSG6qVXQ3jehP3hiHmLYQdbXM3ot1e",
  "key18": "52Dy6oFanLAk4NWB3VGzQGUuMKsWiXSnR63xYrxfL2BRHgvT5mpj3oSuP2KNy3dAFJegzNtrngqKKhZe69uaU5hU",
  "key19": "3RyCZjthAWGgDGiiRv7xerwmxqXUUg5zzqPMAqiYJNyMtMpzPuZnwYVS81L9Gek24ajytCWWQAwruQwUyRU3Tt1q",
  "key20": "2ND935owMxUbiwixXggTHogN4oGY5YF487yTjzjasjKfr1TufVWsE2ppbmrxYVcp1xQHCHE9HJQ5griJxkiD2fUE",
  "key21": "5xCRFi5LFqniPfLYrPkCNWN3EfBEbCcGuWDEWD4iajUxmaTwox8KwoV44BKgADmkhZ9y8NHGDfY4nJjaaDaHDSdw",
  "key22": "JmZVftqjcHRmk5AnNUBXSAHvVrxeu6kjzyVFN7KDUbau7WTwnzwBc3HJUjqEsWQtomRQnSegGSXnfx4HKBQhr7V",
  "key23": "xaJEd4GqvoMQA8KcpebQXzY1To3hLHBQnNWRZ8RLqW363LxS44xUGYkjRfEMTUqtkunpTGgikXFXxoiXZTpB9Sv",
  "key24": "33oDUjMB6kjJbxMez5tM8eXh9LSCwyH1fWWEH8hTB6A95J3DbHym2eWUcHSUDPv6RQ4jKbEtWJViw12SoWQz8Rs3",
  "key25": "3AsFMAh8MqDPK5kdzctfJipyGyYk3PJ5qnijM4PDyMnErfmX9ix5ojhdP9XmjmRwHdB2AgZsh1YhsGiWJeRpr1jc",
  "key26": "5CmAtNeo6MdyrzXrFYq5n3RhB98kB9E7TcxD8p9o7cHoqn8tRkqojJbBYEvYzcRvR259zXM4KRoqmJSH4ALURcXN",
  "key27": "4k1yaDKdNcxUsaomBt9Bq81xDxRi1kvifq9F8o2LpkQ175jdGf8rJ6F17azDLKJv6FA4BRTPch4ubYR4B3E4mRrt",
  "key28": "2mqtttnt87CsqBVmPtqVHyaBCVEctqZtYESkwwFkPubw5YsmtETX24XJdAe7qk33Qn6gJrTAbjzvaAZgAdguPJ9A",
  "key29": "3hfkuJAcJfJDdctnto7zALJmMXT1PdBTdMPw41aS3VutGw89sC8huCsPRz3n5QTJkkQHfnX2RQGV7umeWC8xWkBn",
  "key30": "dBgXCwLJ7VFxtD9vUNm2MiWyqt5aTpM4T4mi1jb77ydLg485ck1n6aPCEHdyuwuAM5ty8mXKYG2uZAJfCaK4ShW",
  "key31": "5WsAHntmQFE4QcmD1tE4qZChc7U77ZgrmWUN69eD8q9wjwvNoWp5JnTeYPFSdAmekAB58Ubzozc6aT82i2yUcohY",
  "key32": "24QneLEhgUbdcAvr6dzYNQjpyk75uciwjUdZ9FneKgXVHAzigJspf1HeXztkJzeHWWMpKpVXmufL35SmCNNUxvze",
  "key33": "4UmAax3sD6ckxPrR4xNM1SZJXW3qWTCd5g8mHYMcMd2xk1Br9wS8qXWPRJMQgrKXPZoaLCrGn34BQN3ySQNtmQM",
  "key34": "kyvKWwAN6reQ6Z5DtRDeMgYT5tSdiNwHgs1VhnbHQdSw4K7QadNZcnd1BJH5DsUg732hLFP4vTZqv65HUXqX5tD",
  "key35": "E1dFEy4mrXv37Vd6B3F3h9SHNbtnCobUcizPMXE89vRKKtyx3enqVSrLNgkhzBiF3yKDWjXHL5kzoy4jtbtavbr",
  "key36": "4QJbPmH3MHpDAk7GvCmsWGFzBwfhAD4ch9eNoiu6gnRSBjvjYBLEuASnfntK9q8n7rmTKdhKgvBGxhmoBN4Xi3dR",
  "key37": "2zZWZazTYBYpCUySCt79KMqpzQghmbJnq6QQ6pwdKR5Q3UGydp7maTwou3QMe88jMpicUZNK2vAWksc9Q2xEJW7n",
  "key38": "5ngsofQkVjJ3m6Ae6tTFVjFQryu9NRSC6ZXHnT29nFxbpNna4Foo3SGyUBDQRu6LR2xzyB8i4LSepnA5GGuf7AxU",
  "key39": "2ienoVUTeECnJkMdN9SFnM9oRTSZ1aeJdQQ71HiqNtKtrQKzuXFK7T96oTYiEBYR9NnYBsY6qfs4wFLz9x3K1WoM",
  "key40": "5kQJy6aCZJYc8TSGE8Ve2rggmmyyk8PgwyrvFctxufGQAYURwjuDkDP8n73ScAhT9smLQRrfswyqw2xuEED2gKhS",
  "key41": "4z1Utpg6iux2vLXxgDyduN4yFkQDTM5MmtT4ysZzbxs3ZE2cqJV523BbAsiG7skXwG7YoqY8zwXktHKNwkirKHyz",
  "key42": "38dZaSXQ8rwMZJTD49xK7oaGHcThQSbR8VCZbYsVVkPquiTTWQK92xqaVkYTuD6RdpHrxGbCj3CehnGJZ1BbfV3i",
  "key43": "5ku62BsLaWEDfV6NjAC4ae7oDLZUS1jZWhcTm8XSv6rW4cuM8znQEhUvVDakKHjcRVK3LonM2gaAUasc8XZAbTsC",
  "key44": "2ZCJqXNMrzum8Q2XQRfHv6SQqKW22ErN2y5krd1Fkagvozo7Vk1NkHoCBF94agfuBdo3mDNmLv87Af67b3ydckzz",
  "key45": "2rKb3S7pgAGtVFpdMr2gQc6zGUCRWRT8RbmcZDjfWsCZoD3TPeX34scf3Lv65VAF4oForfZrnLaTRNFVpW614BsT",
  "key46": "3Rq4zysfC9bvMjwaHMFZ59F8ZASLTDaqP5J4pFFjXh36Pn4EiPMFFCsysjx8YA6YUyWWFSTtWkSJyhTkpbqWG4SY",
  "key47": "3wNtTLwi6jk5aJF5eVdpTUtkt1MtLSgnBgesXBrvPRGGKyUGAac3VDZm2nr75R3sHxNeNrLHYVoukPXA3NrBaboB",
  "key48": "8kfSyy6cdjfApLQE2EfwaFibvgJiAMk3pGXxAfoytWPzoCyPSDWwk2fUxsvWzQeRPHfQTDu2xZKKx3a5JCrWCqc",
  "key49": "5wH1CSo9p55e2KvwHHKNjCVz8VTN3FysyiDoSJNZT2gbEKXKSejwxLJXdu2rezDsvtasd7LAa1ogdMCXQhfg2rbn"
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
