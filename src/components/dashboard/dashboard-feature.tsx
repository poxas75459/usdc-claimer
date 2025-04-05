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
    "3a4MEVmPv8fAwfXhouMcgmYRYQmpFmJ3MdojZN5i5cZiFVNmi9jWaYWkkSHGn13tQRdBB3QMzLe4hbBP9UVUr6is"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NfrPBPiayqhUDLJkx4Yhs2JCc4awixep8jgokJsYzqJXeKZ96RJQMFAhwn6a6z3wqgfxC6aVrHw2NUbKgsSDS3g",
  "key1": "3oXGdWmqeVxfAko3aJXFUCtSDhcEmkCz3MUCpQEfrKa9kfNotc7pYfxuBdHZf3LCq6WokcWA7V97Cfxj3QJ9vD8A",
  "key2": "2uw1EUuRwjjLFZc1TreDPoB1vgbwc5QXE8Bck3VG36v57mY66wYgduausUed4N7tsfFBUfXYH6t45Av3TU8Ps59N",
  "key3": "5pchnyPumsp8HFSgGfGXpNrAFeF7mCZJsohhTMR6YpPcvonGkjAirRFUooiio6B2uQLw2ijsW6BGaw9SjwApXtqB",
  "key4": "3CkZaP2ZS6c25ZzZ2zRLp5LMng1CjjeRtnFAbMrXdVGZajunwZfHoqFdPoDpdwYdwAPUxNhW1bZ7GgUtn7kQ8Dcr",
  "key5": "3FiWgKp5Rsk5RC77oSKZgVRz15Fhy7j1WMMUx5GTM4z8i2r2iQBoDjc1PzxrujDMQwDBKWbhqJyEF3VJALYRAbwM",
  "key6": "7nZWYCbpmzuvoxeB9nhJ4uacgssw9E2vZUWxo4RPpv6xk4G3zgp9iYjdESQje3eMoiGufNEU5UgHS6hP3hV27sq",
  "key7": "hxDeXUzebmARY4RpHEztdeBW4qUhXr2gHLtTBviAqFdiXnbe5Th19fAybyWistYCwrbe5y1xgDrnBzKgZ2E5yLy",
  "key8": "4vL7SVbCe96fmmQVEb3gYa1nEh48Z5VdvMuvUG5Bj3deHGnR8gfEHAxrrDQDAY2TKS6XJ1jvgqsmcUAyjDK9fMQk",
  "key9": "43qEs71xNgB9qiaApgyRKdbHQKvPrhvemq2pjFy3jwFAtEmwUZyyBhMXLwHBXAj1Pwh5wcEzm6GqqVaKob39rydU",
  "key10": "Hcfv2cAEwPN1opaBPjfSgrNKLUwqgE4pTK4e1YtaMAd4P7VY4mMQ3UgXtrsVFntACBiS5uLNS2aLVfQzWCgyaRY",
  "key11": "3T7HC96UD1Lhrbye6FtfKWNMcbFtTR8qaRFTKbBjkzCyV9LsLhNK3L5H9WEMQPgqPAKa7bAw32sPY5TnQ2P8SVPg",
  "key12": "3T5CVHywJV8tL5Vn3cQpzRwXKVdifFw9w6eDFiEuSdZd1iN2JUGr1ABdgUw48q5nuVB4aFMSz9N29e9GYZs7ktKk",
  "key13": "4TK3QbtuBsWBiwuM2qUGKJ3p57EXcrmmjfiA7J1oNTDHcpAhZJfnF2TF4d18Yj6Fsxd1wLLzrSEzp2HXhJVfD98",
  "key14": "3pnKC9rGW7JHnfHadFxwHUnASSYyNpyXty8NKqXziHzoWW6p3j9QvJpusouyRuai9z2pVoWwhLVBS9jShpueWCAJ",
  "key15": "Zvnf8CDUvq5h2H4gJRyUAhMzjiBkAkTkdin6wyqeZe2aF4sz95txmy1qv5ouQXKKSZxcowG6EY2wfvam9Q4JxKS",
  "key16": "25o7ofEQsCAvzbi2s4KbTpXo8aVRvZPCzFNoBjJVoCa6e3joR8tTBd7AjqLjQJY4fev5R4ySr99bpcj7wcDSGG4P",
  "key17": "2AKqWoLDsG5iBPMapBZr4GhqeBV1oA7YHzYXSz84fnyTDPJmKLyBvFFdBSyKZC5c45pU7pMQ6vFC991mZ15nsr35",
  "key18": "3xJasAUk2T9xs5K351sCoaj1TZ39U4FPwBdwqTgiMpS2yn5HnaCpJHSh34Sf81zowUpWge3MQQv86wV2Lvi7dQrq",
  "key19": "huZcJKHZZ1KpDM4VZLzRwHLxqufYaRVY7pnNxSZv9xui5tYc8qniPQ1TUBsuoa6LeceEbMhyJcWGhFxVYw4hRGc",
  "key20": "3VKL1sKgcgJ5m1CE3WUQyAmRqeEdTqT99TEpatmaFBMon36N1FTH5cBrtg2aapPnWTrvZH4d8pgWay6z8mUmubhq",
  "key21": "52C1nbwxhbqkqA1SAAZR32K5FjGe3i2ZySmHD4BVSs9iLpKSa2ubkJN8eXtxHEcbRjEPFz1SG9VdaX272o2dkzeL",
  "key22": "66GMRY5ciLj92Eor7UgHyJXWMmSJKgUiF2Dx9cKn8WuwykS31CoAyJ6Jcuq5WkThtUyDTXvNtmYDVUk6N8qcArny",
  "key23": "5jeWLFeeJwTzaR4on54gTYzVKTn2i3sAZ3H6KrUQ4HJYdnkV9FQSVr6mb19bdzkjBoEuEdV9nr4TC8ARWG83U7w3",
  "key24": "2MdF6QxcFqTkT5xCHDCrCbbYWpNyjWT7wKdmTvWETT3fXbs9H6wDCQa9eRsycAfPkfCmURyFR383AVD6C8b7xFzn",
  "key25": "3NYnCd9LDscm9SYfM7oyLJANKaj6M6aYbkCiufd79BtdRLBZoyibTZS9cY9nCkBRhQkj98DWvbosAfpNTcxcZ5NC",
  "key26": "4CgyHrybAcdi9AfVs2LAeSta6FLkdqU8efHoN5x6p4GJGK2CyXxBXFjZkyeM8iYBSWBjqj8wABHNmwEReitDZcjk",
  "key27": "65kkNqA6UY5SY2YuQqySUBYiTcKEkxJ5PrzzE7kgihBmweMkZrt9o8bF6pEbqLv1GitJZPfQuoTuJsFnJSp15mgF",
  "key28": "EaTCksaDMxY3hFx9Nv61uuaojNyhNMnhFwVaovuHk5GRddy6Bnj8tcSQyLJ8KhmcniFE9mUdFJgVJNo2PHJyufp",
  "key29": "3LSNjyxkbNiAnPbKaZUxzkMEJ6wA8DH3ETo9bchB2tktdSgudZWBcTYaG8ivC6Jopj2nZwKTLdTwqU4yeNGfU7Kp",
  "key30": "2Pto9toHLNRduyfFTj9uL8F12tzy4sJhoUtURv3Esc3rAWXrZNcNHV9sGbBTfE4W7DAtrBLNxsheqbyzNUwP43Lw",
  "key31": "4GTMMy4XDtQkwdMYWQD9U3N9wUFFTX3eEPufW7AQJGjXW96UzahWErjE2aziBhZNR7Syh7QCJEhoP75tEQdxvTbe",
  "key32": "4uEoCSHxTJdh2JPmtwyacpXKyQoW3nySb5jigJivb3Q2Ja4Cp7EApK4aJRF3WW82TWcx5uNATezN5eZty53hvw4K",
  "key33": "4QibAmKieHLPBenPaEe16cnt4kY5486JyESRfGgKRAbJN5d8AZDnvz5K85gmqD8kbFrL3PWKB3F1sYEKb6c8ixKb",
  "key34": "2PrhdUQaWEqecdojDYZsWA3csCYeU5EeXEaD8kxkQAFWvAZLWnwqMqDMxT4VkLCMd7aJmvz7DuDakBvEtREdpzE7",
  "key35": "3ks1X8sibvK8bdvpETHFsLyLENLyB1eTFT3iZnm4uV7qnYavnkQMzP3w8BE332FrfWrgTr2beg5undyZ647n7tPr",
  "key36": "5kqiVSUycJ7yTW8YcgPAhPdaAg15BF7z5nyaKYVv3tKe4HpadvGSEaq8niKMiXqHaVwdSbJiUxR4qxSG1HQ8CEkr",
  "key37": "3XHnCuPqTtGRCdNQoJWg9tk1Q666vtT5uxw7gJ1Vo1etRBLM4wLxoQwgbYnZuNPZ8WQV7F2c5MutfBU6uPUwdHhB",
  "key38": "49oS5ZWUp6L2gtcMzAUaL7NPdtf5izaiZBTfJqiEHd4TtqEuyTKuTbN4RaUpStYiybVSyF8MRc9oJoDVwYdu4qSJ",
  "key39": "5P8rUuyFVLjPgedDXC5xTPu1LQfYq4ryVi5PqQGMuEhUgh6uBWuuyVPukgVGooeA2xp3L8zgkCq96cdyTW8B1aFg"
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
