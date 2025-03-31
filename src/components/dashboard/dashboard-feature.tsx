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
    "5Uyy9v9vLR17ubz7RpUcGk8WW9Hs4X5HPQTkc7SPeCWr1k4UmygCy9mjPrRJq2rr4z1LjfN9zXXnpxhG8aw1Jyg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "whBGySq4aHoNGBeVKxNKYsD4bwjCBY8N2jrs6uNxDUVEV2TkGZ82pVdaRVY27Q4j8FdcUsZEvaPURLYhyZuJrQa",
  "key1": "5rhBxn9o9JnZkm6EMTpypE1hWk29QfsV7SDDsNTLLcUscTfNhhA88NTNTbRxooze2n84q2SJ1Ey4hDLjSzBRMzCr",
  "key2": "24doQvi7ryCZd3oo6M8P5d9VeDhCzXjobz3bUC3C3peAVnkDfsJBTnUt6QNQg7DangCfB1xPzuaeKYDFu64nTRnA",
  "key3": "3Gof9zEoMcBMftEkUoMVcb88Mazj17KkqHuPocdy6anrrqh8s579bLQPzRWSHDTQMRuT94h4iMcoWG1oMkg7y3MX",
  "key4": "3sBVPfMMcX2344Zt3qbGxbjrfvyAgT34WhooacYSTxcsqsdC3qZgPPkjxWFcNxTqe8HbnMTXRHZwXHKsWS9Qjiax",
  "key5": "wG3CNkYTQZQkNidikDToDqevhSCdS3zuJDpaJK5xNV3q45kSQwnqDtANHpJKu4XCRbQgq2VoL2TjKgCZPAqnAw7",
  "key6": "2YFvkuSVGteoggwsUgtGPGeTmrYTYDVrrS8k3byLJuJaMFdrEbKdN6phCNAn2QVN9cSZuvouW996YadotXBmKV6h",
  "key7": "3sBVJXeENwsQjhT2nkvg755GrUxB8AJdD72tzgQq1vosf4nMpWHMiLVoFAACwBLtYctzLqRsuEahi8Nmknk4xMnP",
  "key8": "nNrMWW2AAWywEPqAyrPHgSmdg1ENXz5z8RebjF2PYdzpDFC69NoqF7Ks2f9AU28W8PZKPKMP68MDM5JkCGfpisD",
  "key9": "3awfHdC2z3wmguscVXHoUWhwjbDxzhHk8LsRzWMm1jsA43q7yP3fkq6xLChkN32mZR9pvrDBaieicUxqf6UQKgR4",
  "key10": "5KPCFqscNFMHfv4SLenzPp75vtCBsQrLTA3BW1MaxpTfB1nJ7ucH7XaATbe9awtGmorSC2uTmnGvMpkoavzrVPuk",
  "key11": "2ZpVAqWMJY24tisfURWbCbgSXH7RwqEHYRumayNWKgD7YExXT56Rq7jL3rjVmwS4yDDnHrbwe7h9Wn1fozECVDuK",
  "key12": "2pB2rUvbP5awxiYL7ZWV65qZN7vxTLViiui41yG747gjQyLWnzv7c2n2LsEZ5dNFrbr4hpguCUjLr7r5Jcw9A6Z1",
  "key13": "2oF9XrcFXPNQ2JpuHaovLYrWKGAonjN1MaD8uCcFTym8VPucqNCZw96VDkA6eJUtCpsE2hFAYBAaPVJxVtoxjVGS",
  "key14": "sVAwouoRUQ3AkjpcvP99k18xgRH1bLMTwgdcaAAbBmUsi7hgoU77upFuBhZZHyeD8d6Q9UCgpEnotDFEJEeNRcq",
  "key15": "PEVaC9hQbSyQKJDRXipPnhqk7F7Swk3HTCxJkG79gx6Wv9L1UUJXJvZzeYFEDkBF9rJQ7ZxYQqEcnSMXugno9h8",
  "key16": "4zzAtv66WKQMqNgnkLaMeTWsdvGE48kWQUATVsvSXo8zZN9gx2Au1eos2H7MEFaJVucHQsqP5yzEWwRJoRr3Vvk5",
  "key17": "2TAuRTRiqqB3jtP2jPPazVN4KqPJkFNkr79AtAWmGmHkaSabrL947rkEVkg1n3oK4NBKotk6ZTYN9omCWH1WuFQH",
  "key18": "4YKPwTeaR8kV2zKjnwjb2Fp2jPNjrF98Ddm98BWsirrkUC7mpJ2ZFBJ25zMEGzfeZxEpaEs81RU6wEVmmz5HvN8t",
  "key19": "33hb6sMKTwoY3uayvDYLB7LuA8QNhibpTmdhSYzvC3P2jTakEtwV6KPjWqBnQwbZ4e72MqidagbZHndV6WdnE9nR",
  "key20": "4JYkJAQK3pauWWjqaUaNW7BZZVeb6DX6ex4hMXoBPXWcxixq4ZHrwmyCeqoMQFgXDs61CooSP99q5YYREVNtZRPb",
  "key21": "ANv1a8t8jydZNKfuCTfkQ2dh78WV1w2Jn5REqBr9gcVMpc4Fgr2j5q21PTmuSsqHDMJ4sZYdkCMeeDMseR1dGWm",
  "key22": "4pSgMkTnWsBkiFdYuCecVuRSPhKx9uxR2S1wU1LbwyMPFboRCU6FBUA9PionkXKqngsiy5dbz1qz7diyFsYo7NeX",
  "key23": "9sVQduCRTRqXpCbDMMedktZe6E8Xw7SppUWotXqPUezi8AvnAvRD7HBgcGB85j9kUwj3VFtdZmkhqHsQNLVJPDs",
  "key24": "45faaNaAEo71CCtbwPMWDDeCYdTeQqAePq3dKS1zptcdwyXveoinfAiWJmtc5siGzDAWV2fxz94CmDamRBt5zbpp",
  "key25": "fqsXRorJyNfjVAC9s8Z3gRvMBjH6ZFiQJfyUUTJaYND2VrATFfQSgdK2Zr8iPLtSswMQoriswzDm9rpeLNYvpbv",
  "key26": "TqgkEKmjS2CWD5gKetvzJWBF8vMwJnh5jYeeu8KxFpPi8MLiWmkTqdW4UZM59u2SB1bMyiZyQGwhgay9UaPiM9z",
  "key27": "2cT1V5QttV6JFubSmapPW3PjU8LhhHrrfDv6nWVchQjkHh1HBS6SmbdXsXMsozS4K1ydHGat1kHNwuZtHVJpqXmp",
  "key28": "5kyCVY6C1xWdEEyCYvrfDZXfSDHDSQbUZDkLQVkJ8HoTw26EwQK4aWyHondS17c9j9866u6vSWVNwv1Pbeeg91L7",
  "key29": "CnhdzgTDPHpP1vdogH4CUvCbxAuY6ZvW8NexnBKfkQBTYV3s95MJthyXz4mDovKWpFcYG2fuPzwCGqvX8hKtkQA",
  "key30": "KephHjcBsUgPUxek1KxUpRbGCoY3sCyASdDtkamiTTripduckfj8xWk8jYfoP7gkTiRAYAjDWLtG71biPceayHE",
  "key31": "3ye89kHDAHF1tULbEursR7sNNgP4kL9kNdj8WzZPPskeEnVnai6injh28xnh6fKUFDQmVvnAzUuW92hVdRAfcpq2",
  "key32": "2BR41fLNExvSZUCWm9ZyUECGcBUvgBf813j5H5ABzj8YNcLCLzJq4JtwRemV1naTZqWRTCUqqwTc5SbffezTkh2c",
  "key33": "7UVaVnK5Y7AwovdS9pVJesFd6L2wT3PPufP3pxQyJBcWjrbF3b7PeXoo7xA3Pooj9iwgcSauM3EnQyJh1ZAL3w9",
  "key34": "4fn8KQrgqk1r29HREL4zfJ697NQ6PopJSbc2iyKsKh4M3yEr9M6NG9GjjXxBmwQLaAmcPaU2vLE1YD6sLW2t1Kwd"
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
