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
    "462DVfN4coWpnoAsu44h5eowjFUXDjWZkd8PKuyj7V2PB86geVHEiLNCjZrP35Z377xxTcBzafixkYkcYMQyU7p7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2egD3ycpARnF5MBUK3QmDWiwzTqxVGggLm1wJ1s1THVbwvx5883wcGoYSARZaXXvAJgZsnpBpS61YicKm4QT6TRb",
  "key1": "2uzJTfC4ue6CgyR5m2T7TQQ1V5pL7NjBwnCXdVjmQTfBxCQ3vx8tKMSFrzv7s6ZV8E6CpB4gjBppCE9ZcHDseKih",
  "key2": "4n4eovetgBK7V9dHx6yqGHCJcLSUg39AxbrnAJPJBbJxmhaem6yR3R6aZSZE9fS4pp97et7vptknnfpcrDoYXZ4C",
  "key3": "3mZx5VKHYLcfX5GTBkbj5SiUCNXmPBQ6WVBkoi7QT4yGA2FEg9oxEhCnzQDZRoskYPpZP6vzt7CQJMdYWfCEhCcH",
  "key4": "KBbik7DbrgiUzA4pGpMyUasd7qT5w9tL8USs7yrafrmZ2U4xhy4TvnejD9K588KVKqHFbsKxNMJxvQRC7dWWLTP",
  "key5": "SyBtjH6MnWWBDavpnEAnyGNqPcmqv1w8Qo6K7MK5nmjGTnzAkgCMzVFukHGegwyT4wDvnD7peWg6dbfDdvHkxwR",
  "key6": "27oMrftYmjKBSprsM588s6iC3VR7u4SMLYKKk2j3Mopyr1kpFY7iHyZw6kAEMtuw7S4vKL76NKk41QinKD1ovXLh",
  "key7": "24s7NeNULe4MnZBUpHgsLDZpytVArfoQNWyyqBiaesBV4uStcC6XkCL7n7FNbSoC7GRS6Pqd1AXYJtjKGkkykRrx",
  "key8": "3usunqn39RJkU55sbF3jkojfNmMND9zSFLQzTiZwAk76UYDdM4wfibuBGD9nAMf7TZp7mAqAHbyb39GQBxf7KAWy",
  "key9": "6Lw3vvBVcixkfAgmYNWCfDDUSvsFtWTxytHr6ufNgG2tpgFtygmoVVSexyshvFdfndKD5roHL1bDimmHkDpB3mA",
  "key10": "2gSMZ1PrVw6qcFYgxRwNGbtdqpQ22dLpqdnJknLZJYLemoFGsjU4hvLtThjpxjFTeDdQajhvmcQ4EqGhdRh1kFch",
  "key11": "d2eskmoQbCD2HnGmVRvbr1R8YGkKHtMWfpoRrVLVTKAG3C3FaToaxEVaCaF2AB7hsPDdiGVF1yRj12mcDywpJQB",
  "key12": "3MWgQ6p3saRAADjZBXYPV8a99wPK5qVuzXAJ6hdHbmP2885uz5s8Fv3oAJDpAAAAcfby2d6mVqcLU3LRaXpqrTCZ",
  "key13": "MRsgm6yj15BVcz84oHVDxs2FNm3aFysZs6Kv3WD36UBXtJoSVTQ6jMYsDM2ir8ijuGGNqDMXvE2iGgTqv473Jdn",
  "key14": "4RgfpDzmQhaHBXmirMnzSVXtYC2UDZ8nGBjzZhLxZWRpQZHcUMzw9QP9kWxm4DSHCwZm1BhxpPfDMRjARW7DcRcK",
  "key15": "2saQVkj5dihALkfcx4D51cZiympNcbHdzcTiQKGSwey4Kju2BjSjQ5ZwSAgzRfqpkY9qZsdzmGxQibqk53gahBoP",
  "key16": "4nL8WkU99FiT1tryyeQwgLXj9QvTsDpRr4NgLC9f2qo2ayDcWgyDJDtbtKphYrh3R5rgE4uaeBJrjuZf8GLmW3TE",
  "key17": "2CdMy2Er7ScaodmnH5hVR9MCWBwwC8Q3yrYTquBvgKBtPuLziWpxWYHqrHwdfi5vjU5qW2Npdh5bm2QbB4kz4teW",
  "key18": "4PJZtpdomWakz5AR8bWT3Agi2vnstEHPWyhecFHrRYpuM2MFxtLtttbFGUVRNNySyaibxUbd2HGQ6NFQHTTGQGzb",
  "key19": "37uoagmuW4NoK5rnAkmiwDzrGKqK8epqGqSwG8AmRtKFZgJmdckLyemwF6Z5SWCt1JpEATjCit7YhmNKu6JM4E4",
  "key20": "1MwngbpmavcvEZWT86MpH8SHh2Q7zQXYAk2nWD3sHHuY23BdiZquAEk8fjYUC7j8ifPzbb4TQbW8KYQKHruSusM",
  "key21": "25VtKv7zaUfm21fCr1pFQ6vUGcVi1XpE4oUA6jY8c4jYSE4xAcLGJ8V6raeoZhiQqaZPA1wJ1E6XufbsAh5tj2zM",
  "key22": "4b7raDXG4e6SsuMedSuE3xgEdhTaFj8fMPVL8rrv3v2C4wBiCDLPraS57Tu79uainA8hssNxUBCsvT9xzPXPSz7T",
  "key23": "2XjxEHZwvXTDWmce6ccMxaeS1zGjpVK5Veo5m7fe2oYu5a7mBN6ZHERjPsfFe5bMJwT5qBDxdHMbkMr1Joj9AcRd",
  "key24": "2bNsZz2adBMwrYgRyU4Dym2MoqKnbZpBP1oenNUjm1QPdVDULMy8VeSQzHKh9jKmMHUie4MZRAdNU8rcCS5BHo1r",
  "key25": "3stLMsFPRFeSqbWENkfhSKHPg4m5YHQmvLyyeEJ5T9BtrFXkB9nF63QoXqMa1uF14ybem1n9FByhwXe7YCmNBdJg",
  "key26": "h58Bz7iinJW6njVm9AmUhrbYc9nu7KQ1MUvKp7oUnibeizM1WjbdFpP4FARUGX3hGmUC1MFdR7Wwmon4YaJ51JA",
  "key27": "3KVbcnNTTDL69ryc25rP31fMQnj53vCmaTgUD2yNBqakcdYWHvf1mmzM327GVxSWAwfB9UfQQf596QAYxyLNMFt5"
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
