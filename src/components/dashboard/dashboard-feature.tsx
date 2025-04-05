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
    "4VV4nsipeYdWds5SVyczMVaMiyuAinuHQXQoih26TQefFeHW4CTBqgzkvf8ERGfdUV1cWEq8XA2pQyigrZoLDoiD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cVBmAukJJXkJbQ89uohRPUfgEKUVgR48Z4x4F3rFc9GP2bs2WjEqsftUJi7t95LiAyoBNCf3WRscVDBNi3wCS5y",
  "key1": "5WizKP8R8jshtLJt5UiGjNSSHr9yjcunXHCzL13Kun2te6iaPXycTBRtCcyAKV9Vit2PmrCvCUyiGZFPHqwNBpaC",
  "key2": "4Xu7htg619ZPgccAt2PvsemZcYNhZpkh1Bh4qXnwhZqQ2KtRfkCa8ev5pGYCuTDyEQ8gLbvBF6TfsZsjBsVVBwwy",
  "key3": "2SM9HJGi48j4LJtatKE5SaFaPWERHdQCYGERQPshsvBcyoN8E28m1WEiV3x7ogeYf9P2SJLs1W8ZBBs3TByL3xY6",
  "key4": "47TLh9EWudmZoX9gN5KW3RKQQ3x7NYdaPua25UXBhe31AKsmkU82bvh9RjMAYt9xNZKiEGgZzSgvzyWsmXEAH36p",
  "key5": "3QHkX3vMu6r6Smr8ewJMVUBE9z1iHmxcqwojzeL1PHji96NFoAkWug7PXpEbGUDQpLhqaCd3FpFVN7N6SPXPRBFd",
  "key6": "uVngz1XKU3wL9HeQ8cfg44sq6AWuhu34uFQk7kSJuhcqWPwmMg1UBi9RezkfnG82psCVPcgvUEKPf8G5sgzffvx",
  "key7": "2tG1FY1YUNpnhWgrend3J7URifLN8dtKowhPkfY9cAsH9k8dSe1S3DCurU5nUxzunXC8GTSihwanrt393DjoPf6A",
  "key8": "3PTzhMKBrGV2ZGiCr5a9cPKuvDVuYqR1DLWPDoA2kMFqmEGYFsiUQCGwKFASuR4TrahN49JqLmYFmGEXcTSoxjGJ",
  "key9": "5AbgyKNJTBLLk3ZitgeJqU1ejD1Qn6CCUJmDzySbKKELXqxCRvAupEcZFFQJC2pioxsWAfgzbEeoet3NWK8DBUwn",
  "key10": "SJqAAY5YzwxkND1E7NVM2tXioivUAmY11LgFNaiNgb4tVFSLc5Tj6Tv4YSmdSmnggAwho3exV3aGaPLqYDa4v9D",
  "key11": "4QgP17iSRzZMLWVH2Q82gnJMb2n7bXeAeat1PyCF53kd8hg81shMqVFZmQz5VLu6cubi7ESrpjoXiiAH1i25bb46",
  "key12": "4hFeysKzUAjPmMeKQnz3apYMkeGMkvTLotHcDGK4axM9FqohF6cqwZ9XbZLELGKFtRvWdRs5Tsosc96TNqSHMDex",
  "key13": "32i9EtXVv75XabcdKQWYD14NSY8iwF7pVgLkg2Fw4xfC2sRTbCLGE7M6VcAyeQPRwWRLR6c5Moj2sVftHEGfZyLJ",
  "key14": "5PXs3DiPHqG5zTUH3CzUJ8QYoPQxbjGCVLPUoNXVtEuMnDu9vPRAp2HTApxmb9nj3SnGzPdJhAm3HcwZrxqZ6RUW",
  "key15": "3KbDMgohw2htLQ9tjhb5bRDPxg4ZBiwuMt2Vt332DPbJvEgBtwKLTdABmzsbJq3okC1WTJd7zhSzhdUwnQGXnj5B",
  "key16": "3i3xwrGLPzijf8zg2jceeAGfRPwwoVvPZVvrZxTiAJHYGksgZzGSp55BqgSpwv31why2YLGfvYQ39kFHfQqHCJRp",
  "key17": "2Zhiov5FMD1NmA4BzmTgGMdkd8zbfXwgCPcUJWUQgCqSJQMxDxM8zVQF2SsmmWT2RJR3sh5GsFv2kdVqfrS2GaBz",
  "key18": "MzAyxzKXwmsy9SBb4bwy6UYptoffQ3RcLA3TExzhgCmxEykXs6AtBaNTAHAHwyyzSZ1qa2WKrEWNQq3MUtVGySy",
  "key19": "4ndwugNRmJsJkEGo1GpicsecKWxpZe4qNU4AVJ7uNFnUoi1iFcf819UoJe4s6fNNJ2T84mfBd8u7MdEkRqSVHaxZ",
  "key20": "4W5Rb3qk1nNaTPziZFiuxRBYkaoJ54VwqZQVJFMVQrLyGpoJs1Ln1CnMx324bDkGoMKeF9eH5zXhYRsk3BaMsUAB",
  "key21": "57W4qNtjcfdvXRuL3X7TxJXb93F5xFajNNt271BhsSPfZPMLoQgbt7LP5b57SX2KNRxYAg4onCjmcLYVJQonKbRZ",
  "key22": "9FWgs23MfHjrY5z3RZneB38eiH9mVibwu73yQXArs2nxPXdZeJDf9S4RHhVSHWkk1vbfQN9F8g6Q5DoxKX1i6TZ",
  "key23": "5EdpVh1DJUMdLVbFBkbMJJRiWMmqQnTQcdkJt7BusjSwbe4GDnyJNsZCzPCnwEfaXLwKY3MDmwfsT7uigFLWzT65",
  "key24": "T8XLtuMWbqMNe4urTVaHT6Ruz4kjzZnJzUdAnckkQJApv7B4ysK3zr6ojygrdT3TZrBKEJ9GkNtkPNre23EAE2m",
  "key25": "3ExwNX83buDYsaLVXTwcy6h15i9N59oz2Vadkx6HmqaeNpzdtzZww257w5fGLrVcJziXn2qYB727J3snKzNWyhWf",
  "key26": "4E2K7W8xeudC5tnpxW4edB8kxbK2ao5aA12cSC2yCV8wxCZHPqZ1EPuRRcYDnyD3TLxAP27n2ZVFvyYbnsGREYgP",
  "key27": "3nr2eQNZht8nHNyJVaN8C6sKkNnQ2vhFK6PMPZFQVf5K3CDPTrxV9xMx3H2vxL5AYeQUNh2Pk5Qw64TUg9ZLRyEB",
  "key28": "4KWwHBebq6wnDaDhLTUbfzZuv5u2z16KzATDPisFRmKgxajnJMf4K7QDg99Y24V7oPXLxtWgwdUtJUH93KVkWbqL",
  "key29": "bYgdLBgGUkL7Bmc6LMxrNbkYWkWurPyaD1Z3jJBjV9imyHcdGq5hjFEgMs8FvZsyfprhvmV3htj3x5ouwYuiXJG",
  "key30": "3VSX36LY5u1xF1u3KuHw2EV3vfZFR4RosBD2cjUGX7eNTbUo4UhtV7RExyA7tvNdBvj7PXNH36MiLwoanyXbuN14"
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
