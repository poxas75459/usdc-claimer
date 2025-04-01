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
    "ayes4SXCqT3HJnpCyC44TYYRvbPsgsR1z5vMW6kDunf8FMxpha3THETeeXe9cGnZkDWuN1cnzyshcNzJc8HJiHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kT7ZAFW7Nt7vit81Lr9wmBr4JiMpMkD7oaAAcWWWhdgfCVZyxWwUe76oc1Uzrj1kXTkaD56HrMAxDWtHFMzmXNj",
  "key1": "Ed6nmkRuYFG9vgsorgp8agJR159aJPB6oCRvdXyejDDGPF2Gtsv6pa44Pd9cgxBKyEEah1Fr4dCu9TYfDAVgbyX",
  "key2": "2anK3pA6DN5fupnfZFp6JFiFjfcxvvuWkVZhz31c6VWeF7YwWZjNecoEBPcUpnd3Y9dQ1FwxN1ApMVcEFBvexXqx",
  "key3": "34SgqyjNWVSCm7k188AzpuZPd9gMt3pQ5stkcKCJVZoc1LL36gJ9oiiKtW4fmf7S9aJf6QqjkEDTjub9pW7z3pBP",
  "key4": "VC2Je2NMx1Kf5ySBceXYKd4JYtQssB2XyYkCVuXYNjv7nCpm4txc4Yj1UMQQSJy3PDuJWHNKCCTvTEKD7oNFqzQ",
  "key5": "XpZiZBytKmQ1ndi9ufRvsmJqpSG7Rmzm1cMmKcvSkcBgCNHqJYPdPVxamMsHftuftLj2hVjtUVHcWUA5CNTQZrB",
  "key6": "2zPZnf7ENz2kNtcMnm9Ke64BhvK3KPXaTCu6iTWnbAX3vHxfgM2TEyXJScr8oK9uym6b8fAZ1A7fZy8CxNH1wTuZ",
  "key7": "pLR93f4tNujgoPQSvXSqyouvvTHggT4g7E8CXYXy8RCPP3ZB6rB9nW6P2Fbqa9HDqdAL4E15hcUSK5mY9U9N2Xf",
  "key8": "5tYh7tvqHBPyPirQgWbq35S1aPN3bGHpXN5ZDke9rHCNCmVjHkgqWruVxypA6pWTff5NvSeBx9fz2UZ8LSceNpCY",
  "key9": "3wsaPb3usi399id4dau4uWQEbYSJHePSLsEHk3VmKgRf2U8JzgFS16pYHRQbu6ScX7Gyk5uPo6u6iuMCPhe1Fm4z",
  "key10": "529CyPbiCru8d761cGVPnrzGPvJKAirtEjrBnP1Wf5uP54hkphwPxkSixU1hqUk2rQ5ic2VGrs8U2JkTVZaj1opg",
  "key11": "5YxYMSkWeCgriRnpZMU4q7NCabXra2wtLVfhDs1qm5dHa5y47oeC9doVdhc7qLogQufRUis6LYAcKFV1d5hWzS5C",
  "key12": "4P1VRNnmnHbJX7YJvfMvCi3BJnmsZnwDLS2XDTtBk8DEfDxzA84ouWujc1WFkot6wQ2Ynjne8fTiWnYEJy3DRcFm",
  "key13": "6bLvC8qXLsX5RaC9jmwNn2tAVzeHa2Zw12V1FB6JP1fnSkBzCMQVJfci3TNUFdBRZctNAYp74BqjLwD29i216Sj",
  "key14": "4BaQLopXmmmaC5kcyYXZjq7pp38b5YwuSme2NpBxrJrXrjKxnF96aMZ9gBPB7cjBpE6qJSdrDXvsMkdxSddoVXBg",
  "key15": "4JRmDcHZ9YqGJcTTb3irfM85cJqUx7hPhNPJf3eBUyHP91NtN3JCQbZyiWcJTdy7Kt3ESajMTj8Lpb32R1VDLEk9",
  "key16": "2fTXsSZvERPxAXYYmuhKMWDUSrP7GzyZWMwr21xM77zrmyoFL4ecsEtFRrhRhfyJQ2VvifCGkqcLaFrbxEoHtwyA",
  "key17": "2C67ZvV2D6UgPjGtARkqfjH13aKVVtT1TnzB8PuS34JDM626Ctf4Sh6hnwPwxThwiL6icq4WfCQZyuxV4QS3RgyL",
  "key18": "2ga3uw91HfK3PxFoPoitXUSoiLMtJvMcME8EJYK5FD2KbhHUD4YpR1ey8gBLVty3etaSxZB1HRLcfPiBfz2C5Ye2",
  "key19": "2owAFb2iWG4NYcwzzhhcANUnwZvb2B2rK68p1MSeuzi7R2iK97DAE31CQ2xW1gWhh6yr6Uu33aT3RUyqtWpNfbvg",
  "key20": "dpprpk9JsiJRY6oDxazkUL2sRQEqVjQU4Fg8SVJCRkoWnSeoSXQrL1oPEdCFv4BYzdNm9W5bo79BwfCf5hXPT8b",
  "key21": "5t7kXjRjW5HeDSqGn7AppG4wiP7DgxHnDuPHpzkwdAqj2xMyrGPiCaMMziYFFNNweUCS1M45dQW7MkKLMkFU1jDB",
  "key22": "57gRnq3yJqcQSAx1fNu6ZQj5bZ1FPDLP1KcE1TYPep172v93gXAGY7m5yAbJKrbm8ozzXghMzs9qBJoU2oR2xTKD",
  "key23": "4yb3GWxZ29JAiy9CcZZ6UYYHWAE415ZQrPQBXP97iEQYJJYFt1PwddW7CdkuHg3ZeEEDNFGpyrqWBvvMLHG8QUxp",
  "key24": "5sku8SYWY7QGjtwKcSR7EkgXiU7PcUiS34r4nPfL9sdhzZyASLWkt8BMjrbjVuCTYWq5XUZLzErCt1zDQb4LCivh",
  "key25": "5szkTkrSYgkGkptL5L3b4MV28vgyntrjVBPkoCN5Taa7Rdp8HywPf9SngHs5fhinLmTRBtxnRFx5MQfMWdvmJQP",
  "key26": "5CCSEX55GzcWC85QGChzaE1qGXqJEgD6qJkCQpMtM7Z3LBMKs8AMr9iDBsNA6SHFmam1Qorgk3M7djY5TbjfEB2z",
  "key27": "2ubLKWrFfu9M5zbBqRz7MeT5ASwAXwAuZuyts6APCSmBZAbCEJzS56soaU4duKGPmeruT2gqxEcbZ5VNGqkVUSNB",
  "key28": "SWtdLCMCBjfFDmdzJJC5iXHqXsPMVZvGsL6HXe2AfhsZJeUfGUNXpo7bdNTw434HHEWL6puMDkAbpiHSekDdUES",
  "key29": "3pnBvM7RJacCaNfgEQ3m98W6rpf9VrTeRuj23wRSA7YrrQaHf3WbpyLXDWqk8Up92UWE3ULtNn7PAfz4d5vGcE5w",
  "key30": "24z866ovxjZLuReLiqHyzXfgKAKpv3eSgj8yvuaAxEK57eGpXgTc6eboxpFa2yNERckQkGqj4AjH1kkMVEnKEky2",
  "key31": "2rYgtGPb1Kx1LwrADM9LdA3ksBvCUgsLHrpwdkDuKENLUhxbrRM5R5oiHLByUTDdVKEH9v6vFVrVkUao7J4y456N",
  "key32": "5ezLF3AWRCSgb3CAaM2veT7bM3Pqq1zWdECSLAYHUfLjPHmtpook2F5HCLQCEHctVZxC2Ug7r88B1BFTnqnY8jxM",
  "key33": "55raf6PVQmx7JLZ5JFuU2eATMaWw4swsBkojH3Xh8fKF3AW9s9yAb8qeXMNRjrsRT1VGnjcGGA5nbm3cML1ahzju",
  "key34": "WtjY1mi3DHHZ9N1AezSoFYCZ5NKzDLnbTi8kq8p9JQSNwrVhpC79rsuaHyyvEAz89Pa2xGqqBUKFkmwc88TKUkt"
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
