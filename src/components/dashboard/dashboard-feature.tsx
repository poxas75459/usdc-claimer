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
    "5yCVadNm5phCdaprLeNniAUGd154z3AvqrVwv3KS2vUxA15vRXc75cA7E6CzqayupRLT58Qybeydwwb277Y9uwuY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JYWkdySyarCUtCDmkcfBeJgvS2KvGE94iEJY61scDGGiUKVVvkStvsvAXzaSPCjTJzNbVgebFHscS1Ejet34e2N",
  "key1": "2uFCMm488LZcVEd8u3Ez3WgvdbQjDSiP587Hs6HSrBhkYmbLrmdEYRyqcawsdJrWcznzWtgKKKU9BmNvKgif5jsr",
  "key2": "46SfEyqnL5yUJccWkZybFF35KWpQWLRtVNPaRxz5YDHjsPzDJvXBcGyXmo7QheePkm2ajXuWR4MywA6DB4NEqYVp",
  "key3": "4YGLspTWwS4E1voXZiXyviMqRfnD8UVVB2XjMsXy8VazMEyexToy5mNxL8vBiPqZPf8yhivt6ZD8YS3kWafqaNhM",
  "key4": "3wxASFcbuELduYSNznYYxhDG5Gf5G9QPseicuosJ2nDi2RKSTi8bXpsJLssFuu1DjJR3JFpC55bVqEFfJx3RvmZL",
  "key5": "24eBftXeN93yDyJrrmcWRx8ziMEEuu864uMM8XdJwG8keA4o8Ps2znwSuPyHcJkYysGBr81YVqFNLHSXKJsU6HYo",
  "key6": "hVo2Dnpjf9TEzoaZ8UfhEGpNSYV8VDfhRJWcMoq8CnWHjRLXS98WivJ429Wh42u3oMVEj6zcpbLHqayAqZdJRW7",
  "key7": "3Xt8S6Lbvwd9ko9iCz7bSYkmdU89NaBXdQHPozjN7R8sbTKFGujS1ro3BcweECqN8jHRad8cXLVLjfrYSyrh2sDj",
  "key8": "249ugHfxELd7z8mPxVmaouka4HCtUJZhpBjYNiruQLqubPdSa4DnEkEy7TnUk8ixVhV5VfuiD5V9SCZ4A8A8faxY",
  "key9": "4kFUoKatW6ZzmeB9N7saHTnfGG6RMEq7TtpgenUPfkWFkBjkWHPXAfdCbVJ1MYeMMrQibph3yGpcb5v17JSFYQmS",
  "key10": "4r3jrdwyXfdx7PrsZ2Z1vopcgw5cxDQJa4y8bxGJMGZ6NX7d4unitW9WG3fxcmaxUBGJt51YH4dp6TfkjZoE8WSW",
  "key11": "3a5o4tL3TCe4idocvJh9zvWGZmWSDFU92QJnTMVvEsMH9NtiGrAJ4YMRdZQFHJasCwxsyXfuMifTn4iapoFJYULx",
  "key12": "3Rvghb12MhkWJV9qGWJnTNSURu1EmgFUMEA3v2zm9nLurKmE252xZMQr123U5g4eSTqihF43Fvm3k6KL86pm7dSm",
  "key13": "4VudbTzqTc1suddgLUYp8EF9rECycwFinyYVn5SFjeXM3ULT7hJbdbkxBg6by9aWvew8awiXfqyPWiQzigXSTmsY",
  "key14": "3SBGJd8JFCYNQhJJjkDe7Wzms3XQkx5o3tr3SFUnpRZcGmy2wrR6GHU73y39esNXTXGKtGfeYhSdakUsUXtLKRdY",
  "key15": "3g2RSQpLUayH6ynhoFgGx4eNhJjPsHCBuTwzmiK6MJs5zR4K9k4ZgEqLKHQF6KuFWEwUid7JHxznvNE9chVafnhk",
  "key16": "3F4mGQAsLd697bmKAGD9jnyZwXrxqYMsKWTrbfx3saagzpWnk8qbKTyVEvH6wqvVWGmb4eQHvURmCLnArGiSxSq7",
  "key17": "5wyfeLe8QXdqy9DtFU1WcJ2vRdx3xf68V4NDa2rdXc7JJU4uHNyixmEGJ8aWVFxYv8eQZLeTX39pzvRMR4GcrFKu",
  "key18": "41fLVe1h7HrMPUP7GB7JQ39H6fNhRHoNjpTtttDrVHtSWa5xrAtyune3hsC8EBEjNXQrTANeKuuDZN9t5iRux3rb",
  "key19": "3EggpytQXyytYoq1NKtX4CWsWALfrcqsiuhJe2EXSZ4GRmCTFj78dcewYXec8y12su1xAi7stXhAwYt788RsCoQv",
  "key20": "64fbYcJmmJSTvh4rwuaW7VgphfhbYSt6REQRbNheqKckBtLbHYFkfZisbfvqboA99KMwMTjxgT7PzR4jtFxpDKG6",
  "key21": "3WgX6uGGDfxMMR7kXAAZf8pBbNPAR5RyFmJXg39mrNy47V7kHtk38rtqifC4M5YAYW2mGRZmNRuGjw3k7JmtFB9h",
  "key22": "3jAoHP1XYhkj5QJw2eCUsoYgjPMigCb4ZEesWc6PtuhWDfWW72UPXGYivWaXadeSib1tSEmTR7FZUwTbgxBoLg9N",
  "key23": "2JLwTZPZtXaJhdq4RGofsi3WDbMycRrgJDBeZU5zwzHpP6kC3S1TEgfsDXWmFfEvyEwnAG6qyHHkyn4BYd3VtZS",
  "key24": "2a45CSygsye1Gby2h9pLBHV9jWmRgMDhoeabKMGhMT3tkN6uRwzkCjMm7H7KELsZ2zHkLaffQYezzYwBmHSKjB2X",
  "key25": "5Auf4jFXVuD1VTVt6N99LEvjjiV7TApZZqzu4qqLeuZTeawpUJKREh3sGSggnjXrordKJxLAL8Tms1XYyCn2jPWH",
  "key26": "4hM7oLZe5wjMd7PctqD6x173HPucv3NMojatNkC5Tho6Q732yjicrvG17xNvWEhhJRJUQQmGe15gVpNy4chH574z",
  "key27": "4jvUHNWKU373C56Vj1uMBDedtwt3HaeZZByK21Lcxg9KE5Q9L6U4pmcnuMmC62vif2bUsNeQKVSVee3yCJHW8Sww",
  "key28": "5y71EaX2YTS8ArGd3NeZRTNqvgtf7D5YLm7EdnET7J4fWSvhuhDaCX3pbbchu7FFxrQrYSTA9g3B4GZH7gmeX86Z",
  "key29": "4CWuWJ2FVH2Vf55i8MBJDLcVYQjEnHzAyDAByyNFEDr76SPmQkVgGQJsmvz5dKKEXGpY9Kkf7V7avXRPFuN9zzuk",
  "key30": "3G6yvc4VK1m3kahU5Fg1uQSmtJpRDdVBK7LxZWjGFhQE2t86xiBHi68L7tuuCGTzzMvYzoCfTsQ5bE1VEvssXowC",
  "key31": "4QL3oc1roKjezC1R9Df8zDniev8EBTzfnxUjuXeHqpffiAVAaEd35zcxtf9UB1Dfi1tfLibib7bQaooXGEaTMLNi",
  "key32": "4GVJDFYYPo5BaZrEfPz4LdLEnxTLbQjnQPqbsUqxcWpfa7ui7NpNxa5jvp5GZVMKADffZPYGzLNKgLdRjJBGnSQu"
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
