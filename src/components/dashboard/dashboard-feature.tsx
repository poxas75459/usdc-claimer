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
    "4DnU9kBMvmKn7PvCTmoWas7LT2GAjcke71qMVDea6aPUPo5RK7MrYy8jY1uaCC29ND4KG8YkdjwJdQizFeqRfdME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iHyNrTsvQFZgJeD5QM3g91saSFJFGrWfoXtNiV9wKErdgycWaejj7imq1rchR9LAvGbTNvcw2f79niPrU4PyntS",
  "key1": "22kXutWvWj64A3K92UQNBE8hL4WcfA5HhKLDpp4CbZzEoTCNFJnjUNFFUkiWhP2gGDRdWgrzLxEJ33ye6dF1hqEy",
  "key2": "51WaVsYuXH9nn1apjDjDD1LKFFjYzfxxnu5QckaZphuQ4bfqhpt2xATRc4YR5hKZrwKas9vt17DS4SQbhK6Bg1Uf",
  "key3": "2W8K5X6usWu8bnsggixuMmH1tb9YzbvaXbCnc3wTkzVMBPVaVZ5aByJbPYV6fa8gohUV1533jQWNq4EgnrviTNSY",
  "key4": "4qenKPB37W7XvGt3n1JPvYZPdBnjJ7mTPGwhVS2ib9UzSruVRgpxPNV17vBJpwMkZtx7awvFGYcUtL5oespFx15o",
  "key5": "3b2SZv9rkjShVcXCDbnXf7ZA6ZDDFLyo3rDNp5Cm21zXi46kR1k9ijfXjcwjPnJAWPDdG71Hw19iJCzUo61d9ybh",
  "key6": "5UWaNi3pMjMJ8VinbAoXA28aV6Aa2vCUGbugweEyLgMBqgHpyBNemuKQTKPyJ3Qc3HUVEWu4pXF5VRWyt4Xjwksc",
  "key7": "4aMwpxHgbPdBurgFngT9AYkJgBDPbuSQKXVS36STDfeGc6RreLUTU5ebzJvbssmiMoitsNS3ds2x2E6zGgEzCkb9",
  "key8": "1MRRSV6r6nUarzSXPKmwyYntB9a1oX9NXKBN8EnUKPmgkfMdjz7gMgDgtznneGPFEs92tEjoNEjGFeTMDkRr4XM",
  "key9": "24xjtLDZjoPwBLv3rKaE5Xv1ET4QUFN3qTfykAyH4LYySATVvputQwSA9NYKQwkPjjQtXDdRcyWL6qraQrnGrRR5",
  "key10": "RvvxvuZoct3ypP6Woe3g5yZc7tg2bfCKvaej54Q8oLMNvt6hvVXkkgmbqgwtAHSfzZMx9o4PR3ptRA3ihkmLpoq",
  "key11": "2RXgmypSbUKdVHF6gnABe5sE445NLqcTGprXhtPzmpvQLzkDGVHjPBX5DmNUZkFsFuNcACQrxiSzzo1Wss24V9Hy",
  "key12": "5FBqwzhaXPCkhY9xSUv6m1B5Jdn1PYwjG6fkD598ajFfdKD2fM4VxRabVW5jYQd7UEQ4cG6ShCiaF1zrFzmvTkXa",
  "key13": "21GT6aZPzb3PQ2oZmY7HxikmyseobkLk4FW37mUMSRXBu2DQB2mmpjn36qGsWEcUofChNy9JgwARvqERCaKoqTNk",
  "key14": "4JT5pXJLd93dHnGXPXF5K5DBTBU6ffG7Sf1JJwFEVWv65wiFfWB6zZLo6JP9V9NuehqW52iRjMZ7J5NBsaBDBBjX",
  "key15": "4wpyySRhAQwMtfG1MH53hKehNZLyjGdciW7n13jdBGx9oZmMdSgmXp8DcuC3GgbdyrKdnM4SHefGY3rUf4R6o7PJ",
  "key16": "3ChGQsoGiK61ttsCMTY2taHjWoqmGgonF1amzkYJ8QzegfNyDURpmk7sPRUawQQ4yx3HuPkYmN7iSeRMHy5fiUBY",
  "key17": "3WEREKExrXrn8xakqKAREwdD3k6LGXU3WgPsHnf4cFY7MpFJzNmGv8BwzgrfJeziodrjqgmwGYGxmCu1keu4Upmk",
  "key18": "5a5Q87Hbf6bTMMmfTTf6jt4dAxJo8W18NUpLXMH6UAhNq5kRXbvvNvWabVkWxVxkH1mn144jEjGq2XJzPoFerNgu",
  "key19": "2zroSyD8nVqveY386A6N7szeKGaj74VCB2naSUWE71eS7qHFWkw2Qbt45WP6gZAvDrhFeLjqQ2QbhxXnxWoqoHAo",
  "key20": "3yM3ALna183iidF4pVCyLcjTLzG7DnED1dpBcmcRAZzebp4evosYDvSDbrofqnmtBj2QdgfZJXQZdvHBgfE2TFpz",
  "key21": "4pVtNR4vyofjpJNiLGpjiAJkwqzSuXMMWwPPWMt3mwq6TnRjcjBmXqfJYEQJg489yuXNZmdyURuq2Nr7WbqncCoU",
  "key22": "3LRmoBL81VpJrprDZ1K6qP8mLhsiRFo6PWkBFEh3Yfa4guCeuiK35cx3CqU7LM33T2MBj844rJfZ9t2Zh1SE7FNg",
  "key23": "3aygjs6iAgdLpRj7Gi6VX2qJnJxcVMV3hdrqtPrFVYbCZCPP1H2YcTXNN9mKAA2ppUEMdsDqcUw6hztqfkPiHqTK",
  "key24": "4xso1rzVVLzcJX78ihzTV5z8jp2hTE3MvfCWoPs3rknuVVXqdsCtgMmTMNWbW26vc8PcNtnd5kveS4RqSTysNJiT",
  "key25": "MMF1ZJbjVqDNgpaxA3yafE4wSHvrBmGSTufPoyJtZASvaBiWnfuukVSrsnNMvm4KEKXU9DNm9uLGbq97CYjEaNL",
  "key26": "2wD72wA6aEJS6fErBhg1aoJWtQA8PcJYmT9vmpLtMTP4E6RVwfLeWetrprV6QrrpGfnQNETcwXRCH43ufjMbVNrP",
  "key27": "28tyD3em54XZTXpzhWVexepzjScNmzostRF5hsPRgQyi9GQ14dmE8vr84cTj7s1hctwg1mGgjwz42m5hDTahffca",
  "key28": "q8TMbYtshRBCQYsQrHii1kkfbSLxMqsSdgHhhcq66u56BYoi66pne38AetTkRsdVfYnHVb76ufQKJ17kSXeRjEs",
  "key29": "4JK64cbnZdzHovf2de9xcJTr6MUXbkzFo6pvTCgrXwJ1M3qTxoBLuPE5HkHzt1v8kpwBkUEf6qydqonNL8vAS65u",
  "key30": "3hM4RMxzVD9DqychK1vYtTSa1YdVzAZv3aB1jpya1ULFsf8j3uyyGZ9n6Mo9ZJaEakLyzdBUvd22K4qWeRfM1XW2",
  "key31": "3bXjZVhiyqUA7xxeXmvVooBx97evVWZhf8E6SZsNAR41TY3EVTEseY7FkSA9BViCw3cnXh2qeWp5nVCzc9KwYiN5",
  "key32": "51KK218bQKR46xcQkgXabvVEYWvv41ztsJwFW9hmMMfvjetZuiqkD6orEi3gVJE5Y6tLsadhYWtcU19rkAkmnECy",
  "key33": "5DUTQM1nTMhEa8knB6Rr4AcTXHKwqRdCpRzQyaVDGTM3q1isWdkSaqcCRKsA85cwypZJXtRmGkqyzZPm7cvV7m3w",
  "key34": "5UYNxU5QcX9AdKRd97LGN4KaR2nXYKhtzcLERh6S37C7FbXoqHqXDPB4xVZDg8N85mT9vc8e14Va6VyFvkr15fiD",
  "key35": "46N6Yg2fk5qDsoTxkNdGqtYy4PnT8AwiAWWWHLy37UFQqaC3N8YVU3Mg8Hm8pB8HXKY42AwYJ2mZduQhV2a4duCj",
  "key36": "qVQxDXQv2cGS26Xa2XWwBwvFP7MQQLz6HF3n736qQv4LkHmapdk6UXwkjFVptH9HBttY5dzpvfXNEaYBrpekbz3",
  "key37": "5jXDYToNtcvdGJQFPzcbrPAD98o9pg5A9KKpfSxMXyrA6YG6E4tVkGV6tZ6raiU988VFg8ZY3t2CnwY5VwysBS6E",
  "key38": "RQRWapovpPSrKdEYbbo7WU4WpV73QVcVwqYtdRnuYy2nFtK14kBAQHfEyDcHdB4oXk6r5UG9woDY4cN9WcGyrSH",
  "key39": "DxT9LqhQkxzVvcPkZqHz5emjZwq5eAdX4JcxRZHma37bAyZswP2jPRhKKb78hdfpdMCTZXN7UGqPdVQ3ZeR9Jrs",
  "key40": "YetDpaQxK9m8JKFhEayYobv2msTH79P6xvQK5cavTgdJpCzf4YWpKRh2R9zyJvUvbnYyraGdoKKuos6FFbYzXNB"
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
