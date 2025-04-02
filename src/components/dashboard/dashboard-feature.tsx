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
    "3ictidqm4LSWxsZfKrXJ6RVmdDBZ2hEmsHZRtfweGtP8cREb4ZEctVoqqGuwkgKi6NesWcrdE6qMdvbBDq8Pah8N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VYUxDATGiLE2qwtP47eptmNdSpakxKYGi4hcm5tTtxYPTFEKcaasQfdyhHXViM4zGCNYq1oixpNhAnDFEi1Uk7Z",
  "key1": "4nbPHrypMpU4uwPVdBpPCnnVQPnQzLP5CTA7vM2RFPhiwtsAPCKAgyT7f6KgpvVDP92r4K4KhSd1iCB1UjKJYmjp",
  "key2": "5uTZjCsK5vK4fGkCHR41UFSUcbdetvGpwnmAjM9o7yNZVdAgW1vJX7a6ZZpMDnWkvRznkEnSWvnjc4jTGmzQn9D2",
  "key3": "eAJWFA1xUgwSAsai7XrP3bpmtkioh7VV1zvvMc13PSdJ5s8njBpCLnJducp4tQxoWMepncfsv322LvtEwH2JUb4",
  "key4": "LcgJmvwVqyaspxNtEkswW14miLYGXPx5dXe4L6iwUKQUdCk91Dag6nZiwrWueLrmv2AE5zqj5ZSj7pxNLJJSpfd",
  "key5": "4WivygfmtS22bTwYG9smNBCj9iP5wNY9HAeuXj3GTZUGNWHc592mCk72pKd72yHDsfmda4Gni4USGLwAFUGVPhsu",
  "key6": "51wv7X7H6pTDUs13fHXm31KuXwvvKeCRYDzz17FGLuqiDyHG3yQVPdYbwTAm9m5QndP8YyfA5pNqPE12SQAgpKaq",
  "key7": "44ZViJbCWDdJLEhzNAKs1r54kVSmnhqGRh5vzLKRpcZTTcx52FSgjCHwpGkCumcYmYbNj27Hy5CbBRHSERHneMa1",
  "key8": "5orbvbrEQfwVPrNivACvT6ro8kj8NEQjDQDDWXkBX27GgioZPdY5Wj9s6uohBMpC7tPeJ79znK2BrPdSVmhwmHGE",
  "key9": "39pHoepiKKtH7WiD7KJETpmDBFygTyBrzqWeLrm88ZRQRnZJXYs91qKXNfqmXFSsp1bzWVNBftFMQRzEz8Tv5rrD",
  "key10": "4zHxpKrjWkt9nPNQPfUG6zQ7yjaJbSjBaBBMwv8z53xVAASJhnet8CWK6GZNFHTARLEXy9VQgRHEEXrg82WfU7fk",
  "key11": "38sMjqwdP22wkJnzYgd13skDHLzPtVLFgr1h67m1rF426ECLCn5XLfDMQhVf5PSL5RZ9qJcZHrbxJs55PoH1xZXQ",
  "key12": "2xLDhwpuxVPxSZCsqMxDUM8jkdfKE5wwE1MwUgnkbckxgXWHPULwqPfMH8AxEFz3792YXc96nVZ9dmGrQBjmC8d3",
  "key13": "5Rk8vY5TqumTSLaQtwHYGmQEgWAUTm6Qrar1cHL3Q4XDCmKyoPoXwufi2b6at6V7k6K62sZ9aQQp5KHmGLRdttvr",
  "key14": "38t1zPQX2nd6xx9nxYDxHS27nzamQ1o9QfgcazfxNMaLtHLXp8PueUKk818BkqXkfT982ug44CdA3mz6q5dnMihE",
  "key15": "2s1LrNuAh7Tp6do75HaqLy7GJixhpMVKvmobi6qHojDknxpmw8XmPzqTWFwE71mfwbT2AkcAY4xU6oocamgz8jUZ",
  "key16": "NP73HahoopMBq6cSeYFQChxVbRQYcgXD6cR9zoVmJUPTbj2TTCvX91sFjamYAwxEhGvCBgZZnaQYbxDEH1i6jHr",
  "key17": "wBtTfhWc64eyx3em2febzxUm86XrBtoo3Fxectf74fFSYBVL9rap5dQ5Wtpo5pL9TmL2Adu4q2vxD8dvEr4Lf9N",
  "key18": "3JdkX9DGYRDMHZGPssXxw5BjqGiRJKYJXSFRjrmNkT487gJjfBaEapf34y6XRDJjdr6giXGeuzKiLtLJMWjjAbnC",
  "key19": "3jA5eM9Xo8p7ecCvRThc3X4264CBaagQ8oK2PswKy3Fki9r7Z4Nu4CDhC3u2y85BXZck9cawi776j3zezKV2ZrGo",
  "key20": "2G2mr8fmfARhXPyWhnZL3NK6pT766LrPYxeDCGU6hXrJ1MSZDtR1oinaDTUSrcmEMxn12cgnEiwkymxb8Bz7tYTd",
  "key21": "UcL7PMvdratLYBuSHYiuncKRpnxT29o7fz8NBwSLVAoKXUK6kXT6tMMdAUKrk956doiH4rT9e5TAPMsZeLvHJjB",
  "key22": "1XRCWKprrgkxk5bgxa858tBuPtsjEXTcYk4mPMaghXWo1aLtyMmN5BLN9bwnw7CQLw5r49kMrNqZi7xkD2RXZKF",
  "key23": "3Kr2gL9wyFCLv8T5ARWdfveVcLZDnhZKTFiNFPWE5qKbJsM7SYqG9HarAAauM7SQSfBjz9qZf4k3RqJo3w1zT37s",
  "key24": "2DfzSp51fhMT9R5byPPf3yAqvNAzHPPw8ipw1Sef9z3AnS9UWZrnHCYVSyZDuUr55V6GvmB2JHewGXsWZApP12zP",
  "key25": "5F8oEv9WV2svEZDKnPLvGUZ1Tk48CihW9YscdjnomvgwGYsxXJ3kRpTFLC9ERabT4fgJVTAiqVF3mupwqYUNPkcP",
  "key26": "3WNP7nd5vT1kbSvjHYPHFWZ2NfPrvW6Yw5pqQdkRVTsQSQWvJPU17P1WTpzGin2xMTfnpLjohw9N2Nwkn3vJ7tqc",
  "key27": "5a7xgyyRBiJMj5jE9L9DAGpYuk4MX7f8PQTRoHCFBoPJdFEe7HNwTzYyZt2faEGXHJ6KBvtdRMRUjh5qSSMcgdHG",
  "key28": "5xvq14afoSmY5qqP4m98C9i83qi61GEiGdJNT52uGCPTszaasmNuiVyfQLtwWgVjdpanRUKTSPKU2WLP9rujGNun",
  "key29": "2YknNNQaepS5rPn8AN3gAbGWAPxPzacV58o4VYRGQnprs8TEYtVEdEhKy69sAeV3Mm1PwhckzRQS5i4v6uUCPT5N",
  "key30": "AAEyLZ8Uf4FXMC7d8po1JhZrUn6bSUGRpGKAwzEn8TBTnGNhgjdMmB6fxa458WhVQJx4ZG7PAtx7xhTLm7LNfBk",
  "key31": "3X9izeYMGaGa9YVMpPqNEsHSCJKLQ49y9BMnwUcKKf7NgoSAhCsskxwYzBHmEZ1qStpPdLqpx3KABvrnTiPXThYn"
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
