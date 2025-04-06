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
    "2zMEJvNdapiB2FGBdDPBrqmKVtkbgZqbAe6eZcAaN2azGjybSx8v6ADsKSJnswH1ArE5j5fyCaDYsZMe4GVyEsuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RDLLpPU1oAPGjs4mbb997RAsBN7PREuTXV8VewPQEnC98x69ZWd2TvLoyjcAxwSk9GyyakQHo4Wi51upW6eAsw8",
  "key1": "4GB35HoMq2HjrRaCwm7AfBa48bP82PQGWZbiF17iGjf2rQp5YUxxyRw4ymhr6AkeM1YDh4HzzJmsqVomHA5rFj9d",
  "key2": "nAWabfRWcm7TU9YPMUcXHv4sCzb2DL67dNobkYEHT8UoW3NVhx1FKuoFEXGAHqMxuEJVPtC3PTS8QuDfuAvXSd3",
  "key3": "4ZmmdFsfTnzrCvSrMx6cjVu8MA11qeLpFUTM5xnjHsim3eE5MsNawLRExWC36EPBW8qjmnUYmnKkXd1eaDEyjKRy",
  "key4": "2QRSeVMTzSAH9W6o9MQvFDEnApPmEEACetGFCCcnmRvEFgrAvTB2dWuFEEWBHgKp1w3XMSHQJi3WXMvxw5SiPXvS",
  "key5": "3R1ig1kLbFgwXCUep9BeVhtCdYdEhzjLPYSByKKS5ZUgo38AXfwgaodTGuWeo5VhRS7xYJCMwTZSk9hLXkhFP7mU",
  "key6": "4GWama8APauQYfVrhWiUuH86hBUhTQ9oeRoSDuv3xajJotyGG2wBi37WbdBN1Am4uy7uQPrfTaLMbuNXUZuUMjkM",
  "key7": "5gnk6y5rz4RViNJpAwvbpVvkv1r9ZxUErCCpcMsZH49vwR6PrruxDdW5HLuzsr86UXEJ4zzZ5qqrfi9tjXhwcvvT",
  "key8": "5DUFiDeF7KqS2sDDGEXt8FtgSN11UAThNYLKdbouiNvQBKkQz15mAq7WAbc1Ddw7LQtDXho7gxQ25KdA1QVHMGZY",
  "key9": "3mxBPaz1Gr9QE2RfC4ewTVRwhAtkSZAySzg5ioUpof5p7N3cWNoeNzRWGEgfRSyKPiGh7FVMHzeRttXa7ySEYybb",
  "key10": "2AryaaXU8DooLeKSP7KJrDuhSunLVQ1Ha2UB1Pp39CVwKX6WTy8MudQSGJLF29WEWGubg9GyL4DEzTDkvKVFWMmc",
  "key11": "58fSfpgiu74iaZ99ei8qDPXuqCsTikit335baijfntH77K4TdbyJkWL1CQyjTzoS1vE8QYXM8WuH5oMrgTmjMZLj",
  "key12": "5EaGd2WFe6QsrfZB4LT3s9CgktidAUQYiDNXQGh291Vs39cv5ZQGS8nLCgELUsoHvwjHMszq8GGfN3RdKD97M1BX",
  "key13": "Fcnpfk34vVKtkxS4kZhHVxVYFgtm8fezjKyRymReUFr79WRVRHuaCm1wh4s14s3ZZqhsEuLC2DpZPxMkmjQok8t",
  "key14": "27kiKHNC1iPMtvT37cptrAQH79uXGYmcNnKcFtayBHJoePWi52q7smbFFSctT1fYy7zhYaws6rP2sCjKq5fzEVDa",
  "key15": "9N37D3f3EWiw6nTiuXpvjz3bsN6UWCGmTGPADf3DjnGbEs6k1yoSjK6KD6DaRo2uh5vuWcYJH6qWSwNuVYcP3QB",
  "key16": "2PYwTMBbtQkLhvuoR4FfERkwjPhwHZ87GK1wP2eqdnRZDQppkKt6oDzMEN1bQpiFDPpBnhFaienuJ89p3Xjn4UGD",
  "key17": "ddvHH4r1CT4HcdS3UyjpyeR7BEDPE758bWUN1PggoJxNjnrKfaGZGviKF4MKZFqDqn8yiGWjD21NMhic1dB9zSh",
  "key18": "5hxoDhp1e7bHSpZAnPVD7vH1DJ5hiMKxDche3YioDprV5eHV9RH2NEacSpeMiRJTh21LBbvPam7v1xbNzgbH95C8",
  "key19": "2MjeV57H3TUVd9ymNTwnpX784Xtb5xxHj1WUQ2SokWVBcbEd254R2yo2aSXCJrxhoG1c5kyt5a1rxcgQPpzuD39t",
  "key20": "1HFApy7D4kRkjALExYmhnKVUGYKUf1uLsfYs94FTAKyCFSUDQeubWWxWcGFXXfFHZRiAV7rnCE7sbTxja8JFUzP",
  "key21": "2yxoSwBoxqVyoj8m3dRoC68CsryXuvm5Gm88uruXB4Vi2e96LVUQrL9RJB4ChAHTYApoh6tNqapEpdUMW8fYYzbm",
  "key22": "26aQy8sEd1TWMs9BvT9avci7wy3WxvNR9ZkN54ryscgtsYWEYkyiJqjDgMzeYX4vT1RManm1SHDhixAHNyKjjzQ9",
  "key23": "43b6CPe86YfRbWwarCdBRJYqj6LckcYuuGsF6EPaSwPWNW43A62EBxLTTxjA47Pg1nHNRmPqgdts2MxoBqc4Mju8",
  "key24": "5ChLif6MWy8gRaUTGkS44HeMtuFrisdG9g9TM6fRYzUnH7ygjxSB9Mm7DwAq96WyD2AoeNecY7J9adkAHPArurdg"
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
