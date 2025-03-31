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
    "4BrWEkd1Xsg2GQ6yb3nHW1qnETyaRSRz6nnwcZV2G3LdbKMb8FkwXYVzGSGfoCPAbGwPMNBEgwFEEqma6U5HLDzu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dAzVfXTPdjRPxHQSMBPjQ4ZckUQLbpsXncJD3H9T5hTFhrFTkou7ebWsCz7kGqxoHLX2eXkgpud2rZrrrnkX66o",
  "key1": "3u8ikcMMVN7svwLn2SmoYtnNVTb5187aqmneF1MbP2cEtyudGKT3Zi14m7JBSffpgpmS7v69ck7kmcpVjwNhqo7r",
  "key2": "2fbCt1te77SBmrPsbt1PUtFvrNibSARLbSYAZ2YgCRyDfFXivy5ET9FV9qrqyiJuNabjk3rtwf9hFfGof3u51UrH",
  "key3": "2HvnTU9pztWYyn46HeBR5eGpp1qTQpTErQvo4ut8kVkUqMCYqPGYR8Bb2EADc3qKRFZG2Rz26rtW9uN7kwWQ9aWH",
  "key4": "2VyDvzeqL8f96qdxdZvfmpYG1zKzTLxV6ihK4jgLWc3dmMzvjhEgVmsnQi4cpm1e4ZAygCCxZox8TjwPDR67XbJW",
  "key5": "2wAZzU1p5Kw5EA9XffAMQAhX7tJghYDdSpnNTvN3FGiTh1nu9rd1xYdvbRZ3xmfgoBieSyq8WszAw23C3EerDihn",
  "key6": "3YEk7GPuV29wfCWdLv83xstDzWUu8VKtaGsUt6owx9fhtbUXgbqL4AxZdndpHKNJoj2ar3kTjaGZn2YrpQDXBwn9",
  "key7": "2a4S7vJCjNjPa1iBgveWF6Yri8fzvWrAQX1sb3iK5AoPwWVgvJFtnoVLFtVgxHQc91cnAJeLtsVpNxXMqFq9Fm1Y",
  "key8": "4dRTNjCXUWGpkcs3yfiU3Ns8wuVFJXdtaxQrVQRZfh7Td61RQaymrPmoLVruTpp9V3erHkmqYKjv5CfjiVUAspe5",
  "key9": "4KQ622N6LaoeJZRPD5nhquUnr6UPCNMdPGrQ8H5nQnxR3pWncXpREkL8AMAkR1zrP3s9RHoDhQGwcVCiJEpQnZdL",
  "key10": "VHTgSNzYvsJfBRN5CtMqaL8RUABcMKBm6Xnf9N32LGXZWk8squKzstcTnfzM39p2Q9XrbSSZ9hQrEmVnyjyxiaJ",
  "key11": "4iLbg4Rnzke3Mvq9Xz7uDnkYr1NtAJEpiSbx6StxL8XEH9y1jJvMfhLbbSzazTTu5CDzXZ7uXPckRRV9Mi2YUpKJ",
  "key12": "2oXpXn8yjCUngS1tc1YdMNevyf3deBA7Dd2rETS6opEvyw7vwMKzYi6n98ACJJYbKBXSjVPxKfzKLis9Y3taoH24",
  "key13": "kakC6Cq7oTCz6G6KZaNgXLkasxvndEVH4qHSMRXfXDjwKNqC7r3NEYVA5VH2nkW8SwTmynbvp7smFDL9Xocgdgi",
  "key14": "eUmhMjhjsTzNBTL57NeKucB7kXj66jjtg8JeY5BkDUbFER2aL3fEz2dSvAmSs4JdxnaUrBK1kQx67f58SfDpP4m",
  "key15": "2rBk3Zna1SBkLuAGiVkbwwARz7pPYjVupiQLJY63rcXdQXLNkgwtve2wjrsBAChHNTJeezE9Tq5S8Tjb4K628iyL",
  "key16": "4TNocZdc9gwtMxNjjZyxQrW4kJ97bGooyBt4Bk3GS5cyzdjY12LjYmiXbEfPSdoTnSUCayhLTRpSxRRQRZFcmWik",
  "key17": "2agQn3wnfiBbXCjD7nPEqzWUWdrQ7SKQSWFbwA4CLRXBVhNF7K25vHUDZHmmfXP7yFTQyKm1xzLWeXUNTWQd1uFv",
  "key18": "22NuntStiuj34yY4KTynvoT71kHGJP7RrCD2AyG1Q9tiEN9E7aH26dJaWB9igVMKNXELZFusTYgRYPwhWtPcGzHx",
  "key19": "59wdRJFPwevgqqYqBHv1gWczdyf1UtDLnzRcW5YeZVbSunJDqmwTD2TzdhXudygFbamFSAUvECYAWRhd9niaiyZ8",
  "key20": "41ZCiyPKrDskHQ3ZMa3u31nVqzVJpvmsP117oHRUhz1yPfCCG4kTwE5wgkRP7n8xC5bSLt2rFJkigerbeDeNBop9",
  "key21": "24PP4iZTK8x4NTi9BAt8vMxyjgLhRhwM8ajw9mf2QgsWBzLbEyGoEfPdWxdo9HkPLomnbpjpejMRo32KE2W3Vgam",
  "key22": "2AuRQZ3cX6MZDvYozCrdZsbLcbaFj6pazSwocd4LewUt6mMEzstGNdFG974hP53R2vCnT7cYk8cV12jggKgThzs1",
  "key23": "5SgXrxTRiTabUD88SS4iMXjYApwMVXEYiJ778Gyx9EY35KJkFi5bKp74Q6Fmy5dLaiKqV7dFf3u61N8Bp6ZG3J77",
  "key24": "5DLQA1pTqJUYM8dfyH3DM2TH7QCJXMvcmCeJx32DXMZkQoZdESxUD4jbpogtoXMs5voEK4yUsGmqS6298tyFGPez",
  "key25": "36QBjxcBSywbbBTQkm6igz3Zy21qv4GcCPGhn3y1BHBoKRERtS8xzFkpHpZCsLvbDprpBF3b1rrnbsxQXedWu5Mr",
  "key26": "3eaW6mEaD1LfGdfsNYZNpf5vNCD1k6d8La5oDGKy4ZQGpQ8AHwV4ALmiMmz4UvfMiv4y6sgM4aM42zbe8nT5qDD1"
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
