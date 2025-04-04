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
    "5gyxPiRDxsGkUSHpHJ5ahTzQDzCP7otbUUVgA4zH5JdUj8qANBNWNQCu4YLZAPjgzbtFx952ib98NFqqrVLwv88x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rhGTmtLsQajwsfDveJymQWF6i6Zae5hihhpc6AdmpHdhgM7jz9xRouXzFfrk5c7DNMGaugZBGhmQZmbVsacd8ov",
  "key1": "59kLgoT2rCKkLCF6vjxs6YPjzN9WogSAPArGNSTdq4qZobLuumxKbJ6VnSVi5nvnnsvCpkvdkY4GTkbGaMG7HmFa",
  "key2": "YUQZUQYiqJ82HqPxHKaryMkkaz13dBYwfGHaJxXRJWcRHi3b88QR2nJ1GFVpiGUKda5kWskhEMxjhapar9HRGuR",
  "key3": "1ZPkyoit4FUZXdv7RVvJhq7q1mRw5cEGACDXUDgxTqF71KWQ1v4ZE9QtQBaRH5TCcnmiJoFNSaHuEFpTVoNDWQz",
  "key4": "21q9y9mbuHBMREyfnBTq21J1yRyTPLmsFx4SaXYJizzYffPuXHHtUVgS6TUKpFqJtrkXRJ3HD6XhmhAAwFi1GXga",
  "key5": "5BXnzf2b2hQtLPF512iHf8m71z7YkTJtz4e4hRNko9jWhPCzngDPd5RPBGBfBWKLEGdZCorSY4CbdKtTJJmVwL3v",
  "key6": "3vqEvcBA9FqwoEpkSkzGwXJKSjvupmCwCBHMBs7oA8fUPjHzht6D7NSoqcJPnrVXXMvKxFpujJ4sSQEGTQ54JJjK",
  "key7": "3vHAxR5uRK8ZHYyUWSXRvYHsHM3nYVYJ2UVuxj6GFvCwDRQu9dkNKB4NkwRDhJRmpwCuzR3bTjoxPhirDaFJCi5a",
  "key8": "e4CtSxGXazkWyv1KAnYVqBi6UVGdvpyjaosALvzkJ36nwkTEvezucPKbNPPEpgf6Z79yzcV2239n2Cho7MCXwQi",
  "key9": "U5A5xzE3daY5HyWEcVMQMqKqWZATug1PcWvYqudrv5w5ZsaYYSsyc4DHGuSZFtwNAYtGUSr6FqaHYX91uZLANMX",
  "key10": "39yUEDNLcct89jrKufttN15gwcXTT4TNpgbFZWS4LxkPg1igyJDxjAuzCk1YFP4P6UVNdm3WYFmeuee4PYbeTx9r",
  "key11": "44hzCzJ1NKjvfBao7a8P96YsXzuMwZ9wPutxjepLBZ5fCR8PiE3nuBD9dPV85ZJAxDZWcH3ddE4SPJUtJXCc63d8",
  "key12": "xDZh77hQ4sTswB7xgkVYR79D9KRUX1mr9qKn2hmb5u811X7kunAUNDScYz4t3YoHvru2yjbUrFPJtgkpd1sjLpD",
  "key13": "5ERMKmLgNW1PJDm3Gyo46PiKxRGAP6RBp248fNCT6tjnpvoKnw2p8XPSZtXwnyUkvKxmc8XdKp3RNiah6kSrGThF",
  "key14": "43oMws6kPVdQDf88wwLUwg4w3c4Hbgizu8iYsiw2YhVatPtPtDpQHhMqc56cvkBq2wmxH9je7HT8sjRb4dZQB1Dh",
  "key15": "36woAGX6VdsCsBHR21ZyRpov1mtK48M2YykJGhBrR7D5QraZQ33shtNsMEvjGvJbpR9X5vKe4vsyqFUZFq3VrYaF",
  "key16": "3oDE5yU4GmgYL7QHw3TA3nLtidnEgxB6YwA9xzZQCyh2bEiZneNLrKamvmHXjacAHF5HLfS9Xq9PM4qaG1hzzeJj",
  "key17": "3ufAmZVWH7EPSKwzeET6gx5nw5JVJr4jETfv5SU8trx5EHscVQJbNCF6F8XprggWgtUCnZxATV8Tm2brZL83fgSA",
  "key18": "4PhMnj7Qjkg8xzo19H2V3fuDqGTwVreufxfPUMJMy1s5R6sAWKPBN4AizyKymXwbzMd4Btd9PMHU5MtNbHhWGsWC",
  "key19": "4Ysi6sR2mbucXcZDjyamzxvMFgB3HmVdnAboWrU1ZZt8cPnAuoSyHyFknsep7TrGCzpEsDXXjpys2pEXWpuiER34",
  "key20": "3wmGnASjvNEJL4d27Li4FdBkkT1UAeWuup6KhYc878Wd5s24MEQFQjdYwywEAtEnWaru9x7P2bfQ6bkkU4R2Fy6H",
  "key21": "2PXUCFnhjopRpSHR25sjQoEsAtjtA5mDovN1sdJ26FnDyYekFQchLQiSGzPA1hrFMRtGByywE6fNmX3VzRy8ejdc",
  "key22": "5ywTRjvMK2dmP9kHv7RnvnFiNSeznz5LBrcGkx369zPiriKXWUzxr2hbZKsSyRKoqi8Em4fLDNC2H3Tz4eewfdJL",
  "key23": "2hjh244Y4RuHdLs7d758nhVAYa3zkbiXeJjr5cT8U2pqB2xfNv4V7cKPyC7bcu5VNjqeBzAZ9RmjHn56a4wpvBo2",
  "key24": "43zgrBw42GpRPYnHBno8gDXPDwngtxnLSBa7Fp46TTvDShrtqbpjvCgM6TDgeTGJhtenRqspSF7mVv8gea5C18uF",
  "key25": "5AGCjaj22QGJqjAod77JA5y5cgXmUaCVNAc4wzFSRkB3DvWfzUQ9nRRXdxYtEhStgyyr1dnuZ5cxrseX8SSQ5Nec",
  "key26": "3yfNpgbQAfHfKPFS96tC5z7QVvso6R6rybWCpPUc1HBio5tmqoSCbEJfPbYvG9Nd7Z6RfxY4wd642nuyhPVDcjT4",
  "key27": "3UdBtsGdArANXQG2PwLNf2pSCB5ngZsGJCeuf1cRAkZC8u1CUccqH1wjhg4rFZVmp8eMwgLMQmWvnVxs5DQC87H",
  "key28": "34BFBUkWiomSRr948xhvax5q1Z1ewxPaPuoDVzEFWzU8sMFmKkpSbBhc7QD3eQMSkaJ2JBURJG7z1nt3uU9xAKcC",
  "key29": "4b2dZbxDH38vpUDi6NjBKcYAQnSFX3USE119NwqMxkrYpgTtM9yRmyYz1bBXA5CRPkoLy4bJPdnnQeQGthwJBjwE",
  "key30": "37nYNjpQtTjjrMUT5YB93Z1aXA5wvr82kKSGZRq7zW3J7ZwFyfwkC26k9av3QzkZXaPbGaorQRbctn6t6KM76szk",
  "key31": "3ZK5KoegTqfTSLfQF97GQsv1HuAdK5BqaBt84MuN151aWEtH1FjVLzUjW7iKBvRhbhrxB7YMuMQok2wVfLBFUGEv",
  "key32": "31txQBvdFqmicBLSpqBFctMUQVXa7AhNcHUXJxqg2qcbhmtc2VHPRCGmawVUF37oq6vWwKaEWJ8Hb23jZh31YFH9",
  "key33": "3Dgk815syfqJxfwh3cWSwwDm9H8d8dEGR4bZqwXeS3aUfb48VQGGgrVFU9Fjkn3wtKUvEnBcV6xL5cgX1CGg6nFP",
  "key34": "3ERvbFUUQLJH9oSG9AA8tHfuUiVsgeFkGQj8gyp7fsXpH5ihdjugfL7JWB9qTxN6UZvUkyWbeQ8ZUpbks9UQP64",
  "key35": "4tXg8v7nB2fcRbBoZMDacqYWuP3wg9862r6H4kD6JoUtxYLoS1y4S5tjhUroxQbuvh6bjM3SuEiNSbVNbgaxaEAS"
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
