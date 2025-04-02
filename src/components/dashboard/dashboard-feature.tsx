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
    "27RzP6yA9hUuqJVCPZ8N1UngwWcmS8PjvSbPnogw43zNpBhVSaVfkNtijppwpgcd8ZbDvZDdLtZQmQinpBwSrSN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yv2miNxNMSdfqw9pZGSTCaRW6MjkghEjp1NdHPPXrCup8YhXUPEfq8547UerszTToMdCGGtXNJWKKcpkwiEnJvQ",
  "key1": "5SMyzX5eEDn6smMx8PhfVLvPGZLNVJRbfSxYM5wkV3VHcMw3P3X5WMgVDWkyMfwZck52ngh7kat884ZKHCyKnysX",
  "key2": "cyvrzdCUDnE9Konn9sEnfEqNqgvV2ykkBDuCd1A7TVDjVJDrYWZJkgFmzkayMTsYLSMoReTULFYzDXU1xtqyrMR",
  "key3": "zpNiYxBiceD1yKayHHFp27x3LWiJWYzz2EidBjXzMFMyv1SUwoB466kLSrCdwHc8uUcTmFvQUCsaccQRS44sXsT",
  "key4": "4sx7wWAkjJtxD85JtjvYXA6t88dKgjt7bFUY3QC82QNyzFmV86RRQdrzXtEUQRFdTrHR6ezoLPSkhnGdTohGnuA",
  "key5": "5ZHGVn6bdBD4wSrooZRC3smvje19pu5scQ3QjNrcEsyWsQfwD4uR4UAejawbXkm2VErLzv4AB24tGrrrQeoVJNo3",
  "key6": "EpXnXzyqyR16fTVjtx4QpyahG4Ed5mTU1Ai6YsXiWVcB5ACUQ1MdqKKwfawo4chWWsMgz3VRDjxr1WFMiyBxat7",
  "key7": "3YTxrdcBoMLEAn531S9ju1QGW2NMBwUgRxeywsR9GgM73AQKoixsuFvvZ4fsDVnkN3bkNxPnmcvdkJHTHhKxthSo",
  "key8": "GBK2TJe4DDMD8232596pYBU8FT7F5sUd2VEFhuZR2ka5JwTHFvix2SmBFU1DW1m6ajzCJdc5jjcAMr3oii8R61a",
  "key9": "4Ji1quUg2YdBLuNT6w9nC6jSdTuAiqen7Sjs4NB49ABpg81brTNm1h6cpu8YtJttQN4aqzZvV2hWW8BW7uALC1X",
  "key10": "58gtVacXSMd249iR2WrZ4uVYb2H5kwjED6A8mYvrAZu175RYeXofWBZqsjQSJXMJ9KkgrFzCbmDGutuNSGpURnuz",
  "key11": "5FCmcLfDktauxr7uvv2Un52WuUAg518Y5dbyK5rAYhPvgkPJtqbeP9XiQ5hohLYR36FFLN8ZGmQcoNG6pmGX3FhM",
  "key12": "4a5Fh23jMQ7vfPG1WrvgB1BgFsD5yR1y1R8uvnvxT4jxiX8DLj4VWUqJds2LJo3iBiWYqQ7WQCHcDfX7WWgqAkKz",
  "key13": "2VNY2y9HPRftQ1556bbV3tGGmxFSFCKut4NrnQAog18H8AJCWjbqi1q6JRpKcHXANK3asc89CdVGicjS9So48Pgy",
  "key14": "4FPnyfKtoVkF1T1y32xBoQJuV88qJYKTe5ntah97XMQbU2EZEMPbL6RBExZyXGzmmZirpLsr9df4RpTHYFx1sAEU",
  "key15": "3kvz1mFbD3siiQFFmBHV1o3c9KPttmcuQZNBAuF7yCa3rAhhDBAzHqfcyDBuGBc5UDSgD5YMWUfaGTai9BgBJ6LD",
  "key16": "2cnVzL11SPYLjSs5Y14Yz3abr5zBtaxveVUuTVMN7pdjz637EUZrfnJCg9ZtZkEzeRfmTTvKmZFdQAn5FM2Usb52",
  "key17": "3dAi8Q4sZAjB3QiCbBAa5vFdTvfRj73K6rFak9TwbT1chF2B4F81AymcLUjQShuTjn8GyyDtPbc7cCC6wCiayvqE",
  "key18": "4QeYBMNzmMNLNTs218fa3Qz8J982dWosyoxc9xRRQmBYUErbDnRgg9kgupKo4831hG3vzh6TxG39ytWrawQoB2cE",
  "key19": "5tk8AGEdL2Xks6pjMRYuss8oddYeFYPWq8nBcMG76SsGSQRdcWaodWkzwHeec1YzGA5ymo6wPF46uEw7CJALvjW4",
  "key20": "5dEUTitFR7cLGJa1QYut7HzRXEKyw93S7XJMtUw5UJKHPTV7hChoLmuRs7wdp6RaaHLCBoH6UMW6hPyRgy5zZBFR",
  "key21": "3j76Jwhiv2asrsnCpRWKaDkx9SV4Tzw8PE7t7MFkPJnZUuEEutbMfbfCTTqPtspoKCZd2KBokSJGm9ZwpBrwSES8",
  "key22": "ERpLddMWN2mvPxtr2dQQ3KyVa9PbcKuxYFMytCFuYdSVqwhScRqDujEzzQ8x2aDojaat35H4HrVfgmg45RKb2cX",
  "key23": "3pKzRBnEwUs54M9cXcUMJ2LmxzhfNHLHQKm8Yk5RTkbMJc1xLKvd5VDEGDAmx28AfgjTVAPAioUV6zSMfrZw5d7R",
  "key24": "27PjPmjHbr4Wr3G3CdGK4WAj6SPEcVJ179QJmPWaNWYzmjebW7jvQuxbnnt7RPybMwbWRwPohAsxVn6mSrVfmacr",
  "key25": "3c2YWSZkqizcgaoyGPbyxEgYZ3gu1Hzp9ZcSVqPVsUSoDvF9VmTBoWT7pbS5o5f6Z6py43T8XmJb5M1mMKi9McrL"
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
