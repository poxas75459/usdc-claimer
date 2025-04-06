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
    "2E9ovCLuKd6mXmkLGY74CdrJadrCQ69HN4VGTuxV6J6JotUjMAYihEnN6jSMuyQpRgoGByovevE7KeHYxB5imhQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xbSH5RzffLbq5khvtUnBLKFLyTJRLTyb3sabkPZ5ZZ4t79WZCPBdQXvhFQdpS7uJeWKNtcGybMi4fkWaTTv6sHz",
  "key1": "5u2KuoSNKVrR8TFKXLaWMyYexM2Ftf7r4faPZBeFvnVRibL96wMKSH3uSwnDri8aRBgU1PRYUHPggmmsYDd1HSii",
  "key2": "at13tacL96DMmGUqZ4vG7aXkty8PmA6VDENa9mxfSoj8X89Wgquh8NPeHPMgCH6yL89G38MNBZfFEXQHXsTcPsV",
  "key3": "2gvc9z2jf8o6ptnuWPpVhuX6PwuhTtpPe2kcXykGhqBKurE92YxTQ3HBbEgf1Swjr1JLwoNjWG21idKeLW3pjae2",
  "key4": "4qtzE46pbQQ7p6eJAgUtW4527Qhh2eLc418xfUarCV3aUz3FM6AiFonEGNmd3HZsuAcM1DjErXvTLYfkWnKvt2mX",
  "key5": "3dHFGeAHBGGs7G4jXfNKGtrbxjZWh9sARgb5DkuvCzGRLKbqcrA1sD81kYGdefhk7mrczwFT1Ken3niYkCKN3JU3",
  "key6": "42riXhP3wh4UeCKPe5C1qX2mzNrNZuh7XGzH3PQ1iaJbcY1fo3Ubk4TYecMhShqrSHrLiMy42TZWRAvEudqYi7zi",
  "key7": "5d87tLRtkcRTkuvigKBYpdEq498SYBFQ5s2X9rLbCqpocxGzjg9WnnJ7TSNhV9GbZ8KKdfgd9TRhmvk1KNaFN3es",
  "key8": "5YcCgFZWH7F9kCTFeAG41nMduk7c6EXSexW7zxgibzALuB5BAnAfy1LAuArsn9SQaxCrL9mcvaGUSSAKekHPmmmG",
  "key9": "4D82ncP6uzw2qAFgn5kMwjsbmSJhmphNfEvacSrjFrzD1sNbj5mNtYftxDrMiru7RbMnE2Kk2wjHXMPtFCy2wqWJ",
  "key10": "32cWd3FHtia96kCnDG1yBZFiQsCE8WYFZ5LsP5gKSmShfyUFQ8mCcgPgo3wNog6E2FkX5hcmHkz4NU7MAoF68PYT",
  "key11": "5dDZZ9nKbmqnrgTtyPh3ofXYK47vF35YWcikgdgB7t7x1skd3qqfQH7w8au7v82yWbdUgMaa7RFY2XzfVuC5cee6",
  "key12": "3CK87u9mxxqi1BLHcB2nxZXaGuiDad9qkGtUokNihLU8QkBEzihFqNonbzYiBMsU2MPwAM9226rBNZ9a1ZwUQrYN",
  "key13": "33Y31pbAXcKNmKbWtvEvc4GpN5xd5Bk5x9ucMCrkd6d7Ajk4XwbqyQuw5ipztT1i9dzULNUCPprisiq37voWztUT",
  "key14": "2Hx5d5TojWP8YJSLqsmKrP3Rr79V1DwuiGbwmeTVQFqWk4A1xDmKWN758YRiRmTtmpyeLNtHrSogMpaCkA2tzWyZ",
  "key15": "3ZkLYuN57eVb9RDbD9uAmuRY5y1f5rt8EYCWDuSfVmo8fAgaUiu4hxN9EhH4kjK4ca6NLNDrkuDEKFekfwQMzc3V",
  "key16": "2wUH4q6zXpUgrHNf1awFMKMPHWxcWank7RwTveDF9AbhHkV8fQjrb46ACWSuRA82bPGPZUdur6h8X5yqp8eDRHGs",
  "key17": "dhvaNWcTwhd2cGDvdvdQw9hfEEvG1xX9zrmi7MmCdwLcrvN7vBJkiSEeTP1sS3e2AnnL2qnGgvWzpUvjdkksGcZ",
  "key18": "X4eUSCZMvfua6UbWxKLbBRmzggYgHkVrwxMe4NbvebMfFXect6jUqmqxC7rUaebf2wgJtwKnzPFFncXTjYwuXLm",
  "key19": "4whsBF2Xg5EwEikzXbGQzTY3BEGhj7SvCCejFPfj71q58zy3h24nGACg4JdCoBquXnmf6wB7bpwg4qcFvCrgp1N7",
  "key20": "4y9oSwFsYbg1CFpVv4QyQTsSnpEgYUiics7HJBHJMU9dnsQpbsKUr2KE7y4B4tLrssnN24ZNBfQJcb6apGUTytUt",
  "key21": "shpH97pKvaePLEwasE8T4dbDWGouQ3ozZiGFVpGoQNga7mdrisZcsvJPHJt4ahkioBT2o8iKrcE4oU92AeVgTMR",
  "key22": "CPmdeDKDLW8GKC767F8XPU6hnLmbvfVL2k4fmmJT8yXvKtieTSuajZCRr8gHSLEAzhPaWRrV1JAJGkPmsHq5RfM",
  "key23": "5ocNHuay32mLPFKEkAN6B6R9X3GoLk8vs53ZW7mxSzETKftYBwSbF87uRb7YpJoBJmG91ySiNaSZUKvPi8xRCRde",
  "key24": "37cwLaaSiubRSoLdhWiFoQdLBb1MQKqmpUtThBuF3NF1CsHRLhhn4u831wfiHTcoDCVQmS2GDTwC4NtQtDmt91yt",
  "key25": "3GqhCTQEEEepuLi4oPc11DqXSR24mGvD57Zjr8VktARt8kLqH3VYz9tmh54dVpZTMe9KyYjyaFZdNxrYaHFZGHWR",
  "key26": "4oYHKEvx4uoTBiurNEXWNfUqz2rRyQ1UnSoiGs2JELTdEwRiRWPCmyMUrKJrrcCfGWYwEyhrhbLAofnSSDbaPgkp",
  "key27": "3o7vKDE7o5ujKJGtq1R11TyBQ7zeD15gHxnMR9Ac19HMmuuoTzUTXH3afraNFMGrUtNgcAokC2n5yPVW9jWL9FqK",
  "key28": "5tQXondtvn8tYWP97bqB6dsyo4D8cbnn1YoR66ehAiseAdvqmFTEGeYW4kxnACzzSQLCVx4vQhq7dBVhRHcCYWSR",
  "key29": "2WUKbuoibNZshVXiDqkBNdeZvGSStbBxNVA84ourHBuyiBgt3oMDeTf985EoEy6KhFZnjTMEMrntt84SWzg8fqau",
  "key30": "4Rypt7oZj9h51t2aA84CNgYveQfDyqaWEquJBnkHfQHG8AMg7Dc3TvLy76bZAXHQj9hLW2ww546bT4wMtyVdDYz2",
  "key31": "2ihKtu7wuhP3JRn6DQDrgb6FBPci8WYMr6hYoArxYLvGSNm3cAFSipMNFqMBsQetDsqYtMmrZHsAJ2kTgeuZLmeA",
  "key32": "5zhdGf5tLpELv5ZQPHDAJ5cRtMRbhLg5sFvgUsmZ5KbQq95o31zCetUaPiWAHGWuKfrBywZyjCna8usok7VGWE99",
  "key33": "42rKSxEcZVvUrko11GCLmExB6K28LFetqAgJpzz1C2SLNEYyuUPjKNo6NG1J82C4BwuovvjyXCWnsESKh6maMDdH",
  "key34": "3gM6t9PpDV72seqmbkoP4DqciEb2ByjwQJFMPqkRZyWgQSYVhq5z3PQmGM8fupgX3FQqEyXiHsi6LqjXRfhaEaKo",
  "key35": "3r4zHDzE6ES1jz2aFnhVEjoKXZ1p4R8WMNAFEkFUMro7cxtw8SLsvozmYRj5ckB5a6EPxKd7eG3hZBaPutY8uhNJ",
  "key36": "455DWiSr9v78ENKcTsiAWjeLaUojkiCkumqCFCza4xqPna5t2fLmczs8W6dM7FwjtRZrvmr5y9qVkSVFSxa783A3",
  "key37": "4af8CceEqJUSkYRohizU4p2bPiT5V4yh5NA3u5C7nD81ozkCsHXZ8Ycui9Sw4NMZoq1QVgGRgUNDV2cKijtrpCmx",
  "key38": "vjNXJcDknntmx9dsE8DvvJUTRCj45WvVnWjNP1XAGk3CukowdkD2h43WkJK2QJPeURue1TNVkogCcd5F9sCLN6P"
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
