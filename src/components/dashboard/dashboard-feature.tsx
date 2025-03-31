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
    "Ud79ksgWj5CSWJRcFhUk1Lae9Y53UP6DSmh5BfiZMtsi7DzbhhpAtPfnAQU65kWrpavFs6e7ok4KzsGrDDZhaFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mzA6tHNMXPyUy86njYtE7BMFYzeRd1HMnax62GMocJaaGvUNHfaEMSoiLBFPxVKfyzZwcHgneqTB3W56DQZYGCp",
  "key1": "cWS3iqt9ohHpnJQVMEttj4AamcMVzGSNnEwRTcb7WJranZJAHgAEbmqvboTq8cn23DTLaPyBw6N1CUBHf4fMdsU",
  "key2": "4NH7LNfN3LmeQjLoztW8nzrmtuyy24qgnaTDmVGcUWWuXLocXsFStHxvANMGx54mgobHFWvqFwLiXe9XU9ZQWPYD",
  "key3": "2HhjD6qWo6vchwsbHujXfh7hCj1MPFtoMHJwhRMrRHcFqRFEpSHbNLDtpEqcpnP51inXn39KTtYeDx48WrJqDJ19",
  "key4": "3J3KSsiiexRJh2kVtGvt7KaB9mwsbgSL6EkqWVz4hjq4WEVmQCpebjfm4145fYVD7eYEmYXJQLG6ByjsgU9U6FP",
  "key5": "2umRamFh3oMaWSM8vtDpHJXmN8Mk1cKcz8an6FZJ1snLkLFSatoSD66vrLZccuELWGhFCDWEuUegQYBn1Yqfiz22",
  "key6": "fG6JUWdv9cqhxfMoH4Cm2xz6e6XmdLU6K6Jdsm8gc6PLCrQDF6FmcHkDScoQnHY3o7VVqy5JEjGVrSxe8j7wtKc",
  "key7": "648jRtv929FBWXY2mW9M67L2Rd9QymegPHHdZiNfhdxBWZmGRvoz3ayT1mY4PhdheCb7TkpPiLZR8FHMBhkbqD5g",
  "key8": "43vj8Q46Bzph9bsn3D8paXLR4xDBjVqHNXM8Gjm5jq2iEwn9UecNSnfoV9nw8wcRYva8ccmwGRJijwwnnfFRqSEx",
  "key9": "4BHGWgvbFqbJBiy1VCRVevVHVDML8yTDyHeGVCRPxRCnEcsotZmFjcn99XorZaPtGVv5gSTJnG5hz33t6F2qBfNT",
  "key10": "3kGF9U4q7sF5nh7Mum2FUYF63gpFApFvXnbMpv5BE9Smp8UUxKS9BvKLrZnXxEpW4kNwDTY4UMhXuKPhMqiNkGZV",
  "key11": "Azy7Jr8Bcpu4VGEsyo5xZtGM2zUdiSGCDif1sTadGQ493rsH6Ur68ev4qSgwn5rPV2FUBBp5EFJa1HY8J2PkKjF",
  "key12": "2shaZWw7XtVbMLK44rkMpkf36ZtE6tgthMU3hbRB2wdmii1xPDGg5KT7giZJTbgsvDSG41yJwFGSnQ3a3fknMjX7",
  "key13": "2qLgVdeae1Ne4uYy2UBWhRPdEFh1M18ZXW9gwoynRCehbzTXmXT3t1nGqvBp2oRQADFPqbmDMgAsc829CrV6Bs2r",
  "key14": "3T7JZxTVXCenbCPZk2xBcbrm3Yfr5TJNFhkR8gbfNJBJaTKFpxH75Rowy2BeY4rFtM2NvKsaGSsFR8dxJatSqhFr",
  "key15": "4VbACBhBMsTg4bNPSZZopRzUKD4KDGrGHri8iYT5ER2f3H4R4x43bvM1ZHYa69nVSG2r5XMGg5in34HjZVfyZGRM",
  "key16": "N5JQ6pREAcmywquMF1Y7xjmGT3ZjuYCuW8PFyNXqZMczhPkeeptPkPV1fPhhd2pFFvKkJfkNTunCZKJspSbrqTP",
  "key17": "5qeg7NVystTn5ScJKE2bbk3PBtz8CEVWt2aj5CMdoUe8GkVa8SbfCCeo1A9pVQhsSCz8CsWTpaZoEyr4LxNKZFj8",
  "key18": "5PUFCgbw9mbecyWZAGq2A5yqQxFfoqn6WeNiJvYcNLF1cckCkqs9b8PeWTuKJj8aUUk3gEdrQeMMZman1oxfr4E6",
  "key19": "5EgTD1oeyDW6U41727GhrWekX69w4kD6fcbSpNRQ6XPFehU2CSCnSyvatH5oR6crBQ2fyHMAieug4rHYiUt94wLM",
  "key20": "3XceSVr3Fey3bNLWkwFucG9jj8DXB1jZXPQLKw8hg62up3ePEyKa9G8CmF6uT9Z5gtoegXAir3XMeA1q21qUHHu9",
  "key21": "4UYoj2uvogFt2eAPfYNCuqLRqJ93StpsLuyFJ8FrB4DG779c6eB6vSM93wVEpKBzB3VLtoGZQRynsCgc95LMZcG4",
  "key22": "4SLjLMu66tQ18BHY7b7Tw6b4u2HeNacTk7McP2HZXWWF4rBDfVfqHn6FxVB1JqG7keZb6Jmy4W8H6c4AXFomUeki",
  "key23": "3AfvXSjRHsrAVKEA1743a3chPQ7o6Y3A3GUnbZ5WQnm2v1abT2ER8jztHwzFqZZWodWnL1RLvpudMvwdsd1V526C",
  "key24": "2di4mQLhiGKwCUpyo8fnQzBQBm8dGv3qtQYY9vQbnpAKfKk1A2TX89mvMJSyGDsy6ndxF86bi29w9KPSfMeM68qm",
  "key25": "5KwNYpqZY2jGreUyNU8PqpsV7MWKsUbj2UMaWAePT2AjKA8dRgeUhCTQXs6fAaNU5fTmzfXZcPbHspQAqCcjEBuq",
  "key26": "43Z2axEE5EJZk2i5A5vBtKxoG8noAh88jJ26v8EhFVsdNFbJg45xgpjKZ3gxPbQXUUSrxtxWXUL8PDxWPmoTCZqa",
  "key27": "3e1ea412fesMTcemGaC1Z2Fd9iaxNwoZxYkEPJz6LR8bqFDfusFL4nNWW5qgcrhRFcVE1knpMtxVVvfGMUxJJyEy",
  "key28": "6555b2RwyU5mk5d6U9MBfvnkaMWnifGfFdKmhu86yPoTnYzoJeXFBct7MgmM68ZGozXp93otsWo2MZRFh1MTKQE4",
  "key29": "1rF7U8DwZZYhSt7bwjSype7WyutWg6HjHk8v6zrSsjoYmuUMmUWwyWcQESUKSoU8x8JMSvB7AagXfvGSaoHSetu",
  "key30": "3J8eiDX75ANkmpEqeNXjYt58kvTrx55w61mTLATa38pdSZnLx9ZtfHBjxuMoUYbBvr2TbFZnYnR9b5QgZNXT2gai",
  "key31": "46Tp82n1U4jwkZTkzcVMRxANrJ2W3c8qejxYkc741xsXyNEXecfrHReRy5E78TkvPVeB9DL3NXPZXumXepuQVKo5",
  "key32": "37YhrcCS8QjY5p6QoGtVMY6hDLGcej8FDNBgvUaxLw54BpZivCk7uWDPAhi8657hDYgijHy1JegSTB5grdzEdSxx",
  "key33": "5eDL8pZZ7RnfmXfn8jQBJfKq1JrVwoPLqHFpGBdmXRfMuhKCy1KrWjQ1tdwuELHvPxYyox6P3jcHE3sYan12Cf41",
  "key34": "2gX96t9CVDYNaDgiDFxWf4FfubAxHpK2LPJU8ZQMFvcPZwUPZXADQwcTGxMZvSFwgLB96rW8vEsedUQhAAPfaxLp",
  "key35": "292HPK5v1CVyas9vFEss2uaW6o8bSrprFFZWHgLC865gfAfhAxyponTAZdQ5uxSKZD6sME9J4dctKkSSqX1yL1ex",
  "key36": "uKHBgNxmHqJQwYi4TsXwGzF64S21iEqe6H14b6mC9pSTfegu86ib4dJRn331pR4o7pz3Y2JteueYe2E7EyUcaoc",
  "key37": "4j4B8JB69FjyCHZ8kVeYjHwfkhws66NKzxbbwPRs9V6DdYVkUFKfLGzitdQWvEiu1npcmacVCtbhCU7X3rQ5HywG",
  "key38": "4ij3mxAgGGHxiwZYqoSErotFhisVZzUDLkrQS64zPfatSZm51Nx8XF9Zgbbvm5ceRn4qmb9TmrFY2cCTGon4iaVd",
  "key39": "5oc8JDxN4hksVDrH8FDYaazsB62BvLXu1p2FMH3U4QQu4usiqfqhDjTHg3SyB26zDNGh5Xph7k7HSvRcYvyfwS3a",
  "key40": "Pa1ShE8vZX7Z2u6QHQ2o3K8TFbzCTHw3xDnt8MoPNJZAUw6bt4F1qkbiJZvEwzdmapi8uSZ9SxpiS28dTFDAutu",
  "key41": "2Z2AQUuVPacHg2wDB7842yHT3dJB9yen55bwPdyHPzDZcM2zvc6BNyyBFwZVCUqWHYmovUiSMHjz8WYy6JJhM1Uv",
  "key42": "53RPYa9e5dbb2BYyayQChJyzqKyoj8Yam8LM6cD73saAqbvuk9aErorB1YWZZrHtq5M8EkF5yuzrQCAF2fYZKbwe",
  "key43": "4t5TEPsioEGjMhyMf3DKSBEUcmgAtoSTxy9NiZF7QA4QqmoPhVsoYdBWEMDHHzTFjF1QdKTqE4EgAvj9iq73HR4y",
  "key44": "5ALsFoGBrx3uD68pv1MReRMqmGEDZpLY9Xk8R6q1xYCHfLmLAihSNS2QfJZ5ydQVYTXKGCRexiDnRU846rQnaUy"
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
