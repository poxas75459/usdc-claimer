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
    "5kCx2BVMngEu4RfdMVu8EUzc7XPkTi6BezmivDZLT5rPvZZiZtSqRTmGdnr7dky8wagEBpfNnN1ZWpGaVCduKUVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lsp8Z7R29PokxHh6UqDBZftPHoHMhdg5wfeDvuykwAku8ok59MmydZLQmWGer725mYpegnPPXdmWfb3F72yWAUA",
  "key1": "31JgZkzrLqNtEZAkmtt5NEmtsLrvqjGBNVfhN9oCcbMs51dpk5rf4hD1T41MnBG6ikbg5EfJR2VmoiK7ByaodGss",
  "key2": "4mzGnsKgknHzYiZD3FDCmzmhpuFfBAadGZgXQTXnAtkCqP4c6RGgujv8hPPpJ8LugeceEXZinbeenr9cw1MgqJJn",
  "key3": "xq7XZ2ffrUQT84KBwdtJeRSR87vmpuYj3Fui31tivsesHZus7XFMX6oBDpjksoABEisvUcndkKKYL3a5zsnrgQg",
  "key4": "SszcQcbcvD2Eb6kyeBiuKBf8kyJbfDR4wkRmqyPjVszt5iqRp7mag8FYoKzNG85SmUgJm2mQjT8QvtQrWTQxjbV",
  "key5": "4nqr2mzxxGQCenun3CXnyJHBTipPQB8UA486G5oxLwz7rVgUvjRKfqELe9YoM1PyGvMw8mGPPo6Sye4jSeVELi2Z",
  "key6": "KwApnHubweZuWu5RJJQakcZ8McLcp6Ub5aEBL2TiwUjiytN8E4977m2mV77hGACg9VhM7SutmftnnP6KadVHA9t",
  "key7": "2ZF1CrzcXx5Ez29VpKURWmGvwF5jFN6tqqFCxgzjsRnu1JBYne29vCJB7WBzDiXNnJpcWY5aPzamMFXoCv2RUpsS",
  "key8": "5drVvmJEk17aTQvHVH3uL9PWttyQE9MGr2ftaEfd8Q76YjThSx5np87W6f9a1RojmEFNdZaXk8ahWKm1SMxeKnMa",
  "key9": "29MTN3j9UhqvTjnGVvvj7qrCGWBEqZx84Vbc73yp6ud7XmcriCyWj1YvJDFVFrgVc11YYMkUu6Bv3P51uikVMnxi",
  "key10": "GTG5UG5n3n2eWPaCQuxC5ddjua7VajauJA37AKzcFiSrrPyX8KAe1BQAAKF1cmKSR3JnG2ptYXEGR6SYP1C4TKM",
  "key11": "5fhwkPYNyKm7E8Kmc9RBjtPVoYcL8pBVvgrNGzAkUjUrkZBaUvGuH4pBCFQTnSLyKDmmkCwwnWnG2Ha1frWWF5Q2",
  "key12": "4cFNhXA5G6T5MiJMjZtEBdnUupi1Ye6Rakj1XbjyoxvPD74WAW5WT1iCuriXQvcxAko9SyMjCBJaWBc86nojcwsw",
  "key13": "cX9zZHQV5GUWdqbxa8voEzHeuNdFRvVNSeghJe3ZvrkJenk5w1cfey2Yan5byaXYawYVeo98B1oo21HFnxLLgs8",
  "key14": "5a4bYhshuFKUfdenUSfx4H4gvStR5Gw4LJ2KDFC5gUzYNcMeDsyfoyRmKmHHahsHgfcFNZRfnxXyuEbYDqznW9dn",
  "key15": "2KA6NLCmMLqWTEcV746Xc4mmsGyG79zvWgH9izcBfGCoqFFLGddDKXDVgNdJf4shyrbWKkk7yoFn74pGLCL96Pvs",
  "key16": "S9vbXeHcG2YDN7gK2L2HyScQCELbaNSuwfNt6Uegr6kyCoQFVSzBiUDMWvamvRAxYxEqPX74MbrHoHw79bu9iBe",
  "key17": "2fvo2MinE5VDLfBXMFpXQ9neL61YYjcWoYMgrjbgv4abmxzhLj7XoED58HvzS4yXuw55ugHojTUB4XaBeoeSby1f",
  "key18": "RrzBZfE4tBrpcsoFVijk2L83mA8t3zJYRRnFNwddKDtvQTaUCqvkukmDQ232iHSYc3ues18b48oNTFUvsXtp1KN",
  "key19": "5QwNRQoFptCXSwahAyjwaTMuh6xFPq71na6gb3YwQWEokjCjoeWFougkN4Y1FkEe2Wz8x8JNENMpFwyRRGFExtWS",
  "key20": "3TYLory7XJV7MGUkiCL863Du57WyeCVufhkjCSHLiSreAijG1LXCn5EkxSE2tqzMtL42QTqXd5NtDY7enYgULTTx",
  "key21": "4id1KJ7YX49VwuwQfHHbsbTBvfnBa7fEPoRmq4k5dGXbMKvWWcbMVxXwUbAWN23uQQVHapWVcFdXGWB4aqQ7bEJX",
  "key22": "vJa1EgWvPNfuqQTcVtAoHSpzWFUAiuMVzfGehL1Y7QLnDo8XwHwxDXVSUStFupY6nJ392QzdAVqVs5S3cszvvFV",
  "key23": "4UmWkdvGFbkAPJTFWZ5GTcz3dea9y34NreH6HUFJavdHbng58svYtbmB3Rd5hcjr7QZfVXktFc5CNiRboaT4BiCz",
  "key24": "5kpnZBAgrPthBk4WLhYd3YvdZNsg6Q7QWYNJQ4QCKxwh2hzVMyZEswKx5BMcny9sXiAi1QmoywkLqWEdGKFffiLP",
  "key25": "3kwkjgaptwVHktcUSi1vUNqyjsLkWXb4chxJxZTE22o8Ghqzjej6TC6kVCjkbjA9KdhakW9qApVDhFaY75JoTExB",
  "key26": "5qpDNGBqAbZLAULTUcmXAbQ4VGcktDafBz9i7mqAAMDQ4ANoGeksYsHf4CyA1Kj9C6vDWuXcdm6tEbcTs8ctfodn",
  "key27": "4y1Cu5YgaTjTREMsepnrYdvzysWaXmzbXxqbPHBJteEKfxk99ZkSCduEKtWiq83zAd6Fi4WYNHLELQdYvdtx55eR",
  "key28": "3BZF8Unr9dwypd3gNfveQEjm4ewLe32XT3rkgyWifzJt1HYXN976U2qJjvYV8BfzyfovmyPH8js4XCqsxHWUNAWn",
  "key29": "j8DF3N36pfvNnfHyjbSVC2a7B4CTuqtJt4RtTN2xRoYrxRk4guA6sB1kdvAf74wtzBvN8k2j7RJ44DDuFXC9kM7",
  "key30": "mB2SBu5bPK85gQSY66A3KdBLDnCYfFwJS95jSyi6pSpWQ91XTq1gYJJ6XU6zEWCo2LzS5K2ApHEp6BMQutsih59",
  "key31": "ugfdV2M5hj7SrxWfLM8xCoM6MpzmECegRi26TLVQVDumXrmKHECzWWs2MfeeqQtsZDZwjwD2qKr1oduEqzG5r99",
  "key32": "43r1hzEEiw3yoq7WcjGJJTTakp7D1EmrLwF35jpMhYQjPDE4Fqzc1dH7pkGWN7VpndsqGXJHr1JQssmqDjFVT7Tg",
  "key33": "65AWC36hpGBEHMFWzHsQV2DfekCMspK67mQdsEG6LoaVmWGgDtpAeCv2GJgaqvAcE3XjedwacFMmxQpCdSCGkbtv",
  "key34": "f9GzmShgSi81wwr24T1zys8aiW6iHhm4Gdf431FJnso9RExUvzx8WfBCASqxRQcnh9YwYHUG8afL6yKpuMUSb8K",
  "key35": "61bJkjm1Cf1vgPupD15bGQ8D2bFX9bwgbGC6LLYJAFJmqpcdxdfLb3vaYhELAmXyomY4h4Mub5xijBcqx6mC4NPE",
  "key36": "3xBiqZJtbogf97LkRen2tvSTcmV5ZMwXxvWiqEvsYLCH5ZwGNkxuMfE9pf4vdif8MHqmg5atzwcLggo4ZsEDs67e"
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
