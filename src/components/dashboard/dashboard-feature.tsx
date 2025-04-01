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
    "5MKMGDmEYe88QVd4TeY6CsR1f2pasUsNaqweLpeU8DoRxotEBTm8WAkCSgMKcPARpMdwR2e1Vfn9yRzN8zghJxxU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xU8e3pWQWeAcyEFJrq9YPfZvVomG6bA7r8FT8UZhxs8hBiJ981BCzmCpffKeAjccqbmHwZnENtDeFQP15uL7EqB",
  "key1": "dq2iT7ayrLF6dDb1xgKbPSKZkZxjcj74rsDk2KYpeP5qq3vs8pBHJeyvDfYJKA1wuu29xxifqQMZmwsrbU3TMWD",
  "key2": "QksbZDGAcTpuTZ7VGoNYUzYVyUmA2hue6R7Zd9wBBU1NtPFxxTadtArpTN52S79c45Zcz72h4zMynkZC73YirbV",
  "key3": "6mVD5ogeSz8MH5ysvSBWqgKnBjHwDVPXiQUKN7UhzmHhZSKS85yvBtoTKNc5vRJaop2wRWbQnUDhpWLKdD8317W",
  "key4": "41kX7szGv8GJvREdU3gvXBuGGbNL3UNbUGzgQRjZ29KjL9RjcYiAVKWXPCcVcXBuRv5bFyfyLfKR5orwkjb3eqYo",
  "key5": "mm3jcvhMQe8SNVcR1a3LnEr6ViLTMqTfdTgegipKQ7w2YENPgwL38WRPm5S3JecSMuJ5YTYuaQkacsafNS7hs4N",
  "key6": "5RHNg3b6xoQRDPr18LFPjMDHXrQJi2T8KxQtJUEdnB3eTbaYyWhMkBWYEfMftRD1NiHdxSn4AcpY6d9tm8eRLoSE",
  "key7": "2V2L9Vp2aeiiPzJGySP9J9NDRcuwmdW3wJCf5R16gpvMYvm8Srqi72zs4EyyZMpZUabygoj9G77sFKpUij4HSTzW",
  "key8": "5hnFqq8m5GhPx53truCCoTUvHMUwXH2zyYR3uiF5Ltu8NxHmyTdmgAU2Abn2qyvpcD8ZVht78aRjbTCUjKjnSWqb",
  "key9": "3hbaXg638fMfKFwixzB4uMtw4Gf4AWGsomJjpdP1agMmFkAVupouuEDbKm1U5PAaWFrQk57YMHbBbq3UMKhfWRhc",
  "key10": "K28qMH2ZM5xmKz6sCqiUChWxPbdqicXEXjYExNAAWh1H1f26b1APeYMFk9MF48SypEvMWSiEywxeSLraSJHZp8S",
  "key11": "2UDt8Ne6Go4caVSWavQgH5wrKa8oZ72JAaxCyyqoPgmMFT82b59TaiCKJJwSPRaf7YudSKRwVbhwaLoUFZ44BzGJ",
  "key12": "2g378VnnpfSRwp9wq3NctiuzDDG1t7pHDGzviNUtZ1mBmc41omiFRmEKZckdHqnCoMAR3ouQxSJgNhfMjaxGmGkE",
  "key13": "3X7J9XHQY6CGjoSPjSMGE9Rw67aLXSpwYJopUzDJVtAWQ8xzLpZ1hoGqutWfJ1zzzF9Vx1rKT6AfaD3FvgG2RyHA",
  "key14": "5knZWjJHWGKpdejXpNjnq4nyzAyhGs6iyDwoZpQrQ16uNNGYhsFYratSyDHRnzbNvGRfCRdU8PinkExcUoVcSsZB",
  "key15": "39RvERCxR54ppczr39364H96FDe6Dyt65Q1Wkpup5HAU3US1t1KG189L3EMt1KXVyvK2tScRmVmNpEr5pJnanJTE",
  "key16": "zJAvddzLc3mnSvf6MZXFDtht4PeeLwbggr4viFerF1ajFWeq8Gi3wVA3EdKgmUJvDnZ3Q54ZsZHajzz6qA1DtwB",
  "key17": "2QBSVUpadKJwR8M1HoBBWV9DdUb1hWY7JBkYSNCyUga3ipeRBZ15hEdHHk8x8pyFp5KDpGmM89JSgboAB2ajh3z1",
  "key18": "58zJ9Ku6S7h2E26jUvcVfEYzrXS5mSts1yTTsa2bHmYRo99Pyv7FqXMjfyd642CvSyDbXt66hCfLZzyRq6mQKGok",
  "key19": "3QYB563XnmecxK2re3DBfRQbNHn3xwV2fYr8wfsovee4zA2aM9aPertM5YEKpCYdJipqfNLSHke7BXKRmzw76n6u",
  "key20": "59mahssLwsfMf6Sp9AG4egZBsYnyRbhyK1PxRtGS1YUgKyi1cGenrnQniSgvLcoWHVyVPWBpYJ21vDfWiMkmT8rE",
  "key21": "3QqAxErk7Tz3Hdnw2waGmeqMyajzsnjNcGgmJXJKfxApMRz1Y5XMW19gSyErGsnSN4EkxfTxCM9C33m2tMSPJedX",
  "key22": "3c5onvpGcKeF8SAe9GN7ewRedmtBbPhrRPbCMDF3Qcg9iqrK1jMnKqHaZFppH5dA3ydNbpF4w7X9QRd1i7LgmEsH",
  "key23": "2A27KhBi733iXEB5ZNBrFPuDzGV4MqELTqvQ3SjftcaygFHWN8GvAKyZwWrDj8RfDE4NLH2dHuHYvoPQKbTYp7C7",
  "key24": "5mwfQMChW2rMzcy5jrF13QVGETQESBbw4VqdXtdFGY3XqgH3GGsxtefV4AnA9R1h66wxmPwsGtWAkzCd4jcvC598",
  "key25": "2LvPaa2UEyNPjuCHW2LScr9KqwiMEanKxKt3Qx1egNtuohrA9XPYEq64FFAZ9krDezjUYoW8Z1YaomBUDb2K4dtF",
  "key26": "46zjDyGMmaovbvNRsQmpSeEem636kt6qTwQK4k2sgksvxYCj48DsMWRq6hiBi75NEMDvpwJGTzEwrRNvZ9Sh6RVx",
  "key27": "3Zw8uYAgMiAt9Z2M9bpKAdoyVxC1ipLhDtSsDU7NL76fi8JMTgirPVBvKSSCEhn8tCes6UCNfw1xTZEYrCKTXUeV",
  "key28": "FwPGYm6NfWfRyyD35jpqrfPdrSFgYt9k3Q7uiP1487YhJp1Cvc2cjBsXdwESyy9JFhLrspZbjZ7EQviUngiS7BX"
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
