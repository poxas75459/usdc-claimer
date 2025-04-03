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
    "2jp8dHwpMtn9MX7d3i6Saq2kM5mAAAPQM5P9yube2RFa8MbtfQuXbqSqRoQeHnCDNYFCA79JXVFt2D2VXrBhghAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65SemJFmQXiUHJ858pfAr7JKQZbk33KrsJh6aRfZ3cDX1nY1AVkkafcfkJsYLvEdGKVUCJRNWugTAUUdV2QSg68g",
  "key1": "2qmB89n4r8wXrnTskKodeAG3Q1qRkeGFP2E1ngRCMCVwLx5N6BJ4oMmmx49DYfPs4Noe7sbm6DU7AtutCdZzpvHG",
  "key2": "2xEF3hxCn7W4vHaRNaRiyDEHYPQs9zSVbo1o8FNnyKDViTE2GGS6m8m2kTMJyYYRRwS4ScUArPWJDezmh2F4JA2X",
  "key3": "5vP2RbPK6QMhFv9uuMreoBkjdgEEV9D1C616nPFbdrX9ZaczxCjY4fVZAcKBM4Fq4HRqSq4qYgTcum8BvWHexQba",
  "key4": "5XadC7gem3EPRPApHoJpyooJ8eQp16T8A9Ke66p4fsAU4Luw1sMaHkCz3V7m1K7FAP3YynCBu5qbrkuYnfJQppvL",
  "key5": "4rJ4HU9txsMP4UV2cgcMvGeKqP44dZzuN8kqrHELTF9mqQmDqFG2MEuAZdbEfJmTzuT8RkGwctehCoYUw24jAMxe",
  "key6": "26yJeTp1LFyxSHrxFcxoqyGFJkTopVGnC6V8tVGNjCU6zEBQNXGmSMSoXT3NfN4d93DpvMnWUgTFc5MudjbHeR9u",
  "key7": "G3HzKcpjEvi1deaZva5ZStjRh5gEhdz5FiNmoxTqF1tvakvtGcascdDUW4v9Tfm5t4avjH3Uk7NGckqKzWLH3eV",
  "key8": "29WKeod39NRiUjPZqCev3XjcpvrdLibSAb3KL3RWFBNkTBhZT4WCNL5czedzZmQvqLBiuTcNy5UyRpM8Qbq1Hto7",
  "key9": "2DSaC821K6YPiXu4H4VQyxhmzYaycsQFyNzDWiMuMPxxgWC6dXePbpdGqP8xXNbZLR2CxWWNSFf2uATsn4jxC9LX",
  "key10": "2RfvU3rK8woYdoFjVWzu9P9xBcftM1hy4kFCmm7g6VYtSxtAmbvi1CbxpYkbn3RQy7yjzV5yobZb4qA2vSphhS7i",
  "key11": "5GsaYSxprs1Mi8cHjFFBz1EYNtCbkjxW8b6tCusKGkvBPD9BX1ud7G1b3S5o4HAxhWAKuRJaoKr15DULuS5MguhH",
  "key12": "2vK9gzAs8Y4WqNgsYA2SpCB9iQsyjqttdvuCpx5Rhz23GYZQ4zfvAjcjaLFqkeQrMMGsBaTCfzdxWMFeDYq9fFKG",
  "key13": "3fygvPBihuenmDt5Vfs9kV8NRhowzW6HNSfG9qMLeroNHBKsz7zuDRHnyV1euMYZhKjXV8QYTcpLkPB4WLp1C37k",
  "key14": "QkdDgxvEMo28Qk2WoqUhJ6XPhSZ1kTfBGxwT7gAmNmrufnB3QaQhbCeXHQ2JKBDsrtnKYhz4oZT7U9HczARh6Re",
  "key15": "5uDF6GG3WFca3qHDvDEjs2N7YghYBgupjnu36girosZqkZ6HXBktD7u5bsDB5w3Nu2kLFAYidxvNhYkSWgaGvvVt",
  "key16": "3gaVvDDzpQ3LRmz2aUJveB9HGQLjuqvNURuxfGrku4WwZUyjfuB4j26S1Bub9JJk9CRyNmBqomLZTMuW6U3QeEZm",
  "key17": "sxTGJHmjiUB2E8iAomYPxmfWPhZ3LvJ4MoSKLu2otnxZHA9by55H7sDT6bm2MYghdc3sUouy572Z2HLK6MdyVa6",
  "key18": "2to2oNs2drUunrzrRknoysgWBjEMqvaQgdNPn2oC2nzSDNM3LDatCdDPtiYkBmX6CpVSWg6SM817t3WmRrvN9MXY",
  "key19": "RMBszd9WrHfzZTy72YjXeaJf15uCVtSz84jKYwUkcue2M34sWz99R3axyn4DbfovUJXB1enCStCoL2PcrXBuX5t",
  "key20": "2YShJg2no4j3QDyxLPGBUvxuP7spMzSqsePPq2fvXXaGtFhVRinMeVbbs1k8qQa5PjmmfErZYuk632aYidDc8eie",
  "key21": "2ueuAE26xMvFwYDC9c5DiwePqUqEdYFJTTZQUsJWGrdFrZfriXumUXeGSzZCqHb9fTMwXgvXh6xn3zQdF5DGioTv",
  "key22": "BzTPmAEaek2n6qMzKgQJa7mwt9XdmmXEUb2RCVkqN6TNPorYdu2pVE24XirxxqK7LRs86VFQi2J8LeVo3mNp1Z5",
  "key23": "6wQdHZVDuMPuZJkWMaQ5G52Zec5fMSQ2PqgwPZhpKBBBq2sTTSTX27vcFDxjb6JhtFA2GLfMLMzzMrjMtCUjFKj",
  "key24": "58eot3twQJEszizFB1kaoYPqd61dkNCoXTX3uLZ2UjAtdKjK8M66LameKMEk58VEuActtmq87agK6LMnLpYRUPud",
  "key25": "4pQdYx2xUbu3ddYFKLKgzx8gdNiKGCH7Sks4UPzDLXp8zvpvLD2aYhY7TJiNtx7L4bKdaYJbv7ipCwJCEoULsL4H",
  "key26": "5kFxT8XtGuRoeXe7GtTNBqH2S4h35qqWfmqFpQAehkMDabomBgYdVxPqs2Kzf4hnXxa8qG2AUWTxiqhCKgmAB1kD",
  "key27": "2WJok2izz8hKHh5Eayh3xNsdBBt6hgQu3vqT2M6cVUqCScCRGULopjL84s51KABSSBHaJ2pAY4QtzZb3nymHFEBo",
  "key28": "5sRG6odVzyKbawxY1aS57CXHezaCVX7XtaKW9Vc9Qf7CwCtU69srxDKZXWPWS3chYwfjHxQ9pCHGX3KsFDWrtfg1",
  "key29": "3Hjxy68S2z7kpyEWJ44SkjiwFa2GAPdt6bMUfLr5NQChTt1Lz4hBGnt7dHxb9NRYzdGyrj6MtoGwxdCr4usqx2Xg",
  "key30": "4bur8j2oX1yg5Ugqr81tt4waL7ns1p8ibXSXuwfikgjKmG6tji8qXuTgx9CZVPcRWGyb2ZG7RA7ZPRQyLoPYWXfD",
  "key31": "7Zui3kSBParPyDi6p2sHBy2dfnnhTMs9hvbicRy2ZoBK4QGRwfUZkLM3FUp2UJ3S4VALn3Gfyiq6uTN6N3CDBMZ"
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
