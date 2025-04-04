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
    "aEqwwk8EM84RQYcU94KJpuqZeVUAedDHHBLwvZ3XTNoAJXY8y3trHzNEGzrhDrLLYTDvqTGVz7tmRfxFmx1zEx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QYeEpsD2bAQjQRQsexkmNstFUNXfB9VhQW95MGfwhhDXfzu7TjfUiLpKt2WoWn9tudq9YKqnivX1Cy5Vx6CaBiZ",
  "key1": "4RfCp47CMCzcHMtdoRhJCdfMLwL42gaWgswRh1xxPy7g2Fi63JQRoRwzbBJJNfuH5dFMmoFavGRz7qEQRtJHr4Dj",
  "key2": "4DZoDWj1XxUvZXoiwo4dsxNrKNrbBVCYPheXxnv7b7kr5ELozy9TwzD8gYTyBGeSGUKHoJ8VwGoGGD5SbipKPBda",
  "key3": "3hrA84b5yE7ntwLiJGXVgoKCpoKZ1KFdfER2CWurgjmRL3vQdH1E2acc8xLJpopg5UHb3phnhCBMybxbnhsK638t",
  "key4": "5y5E62B45f3r1r4Lqp6qumgR4fpMYx5s47ewWn4eaRvXSvA7UTEocg1ryRJZpJ9iBrPFQR34avmFYBMGfKa5t2yc",
  "key5": "dhTF8G5DmrxLnYdNJKkGhSkuYpmM1VTm4iRduZyWEP42hH4D5kfubdHSQzHEhaJQgiJLbVGcy3HjjDE4JS9TTjJ",
  "key6": "4NKvcdCpKBVQ4RgXVb5nsuuRRkzYBSZjJ4UCK4PYBgV4VPDvz9vsjDddNEgnF7dydxQMUu3Dr5WQ81VF1qd4fef9",
  "key7": "onRDbtpJSgTXNro7v6dSrZQHLmuW54U1Vfvn7ftUWCTZZVMHUwzDWZUzrLuc7ZZP18fazYsdVLVWJRFhAAhNWYz",
  "key8": "2G9wUpM34NgKXrjo9wXLaNSADHticgYvKNZYG6tG8b4RHiormDcX3Nz9SeYJkhtSTdNFMwNkEfiQ9GWhSpN1Sbbq",
  "key9": "5a15HHxjXiFdPP6fC4pv1pETmmj1tBTLPCWe8aekPRh1AggShCn9KAsr1yQB1U3Kj8cDWdvguKHYLWC2tr2Z4eUi",
  "key10": "4PW8RG2CE2Nkgg1efexdNd1qfWzYHNwF7xTUJp63sC8GmaVnicRFGYyPDVjnnGweVnwSUZhNpum6gePoWtLgyon5",
  "key11": "5f3Z8EQPbswi4WmybhDXL7mBppAmWEGt2WQMpkrw7sxGShYHDY6bc6uKcH995HhPxEJJQATWbtkpFbHzebGxw253",
  "key12": "yJMRmqRN4LADMf2Tkv1ZRX4A4MgHL1zrrRHxu8BhtQs2uHWkEDCi3w3vqVGVZuGsEDTgVA8Se2ZkZvz931tDcLg",
  "key13": "5oD29HmNvVhcCQoLMVCijeroGpNrmDUrzrXjRMhLs35NeqzFZbkvYZ7rNafAUtVGukjhofwR4bvhkqZLVcdxZH2f",
  "key14": "JxE72pMZuW9L2uCySwFsiKZZF5bSpLVeAWiMtQZLgSom2p1D96KpwDdjoKjhDEFCMDThuGieD4ZvxhjayqZxQAq",
  "key15": "2zaiH7avigwy21rNHYbkccqFYPGSpwf47y3GuVAVLfeSratWwAKiYe1oUtToMGiki1rwiembPDyT8CE4mEtzz4gE",
  "key16": "5NLbnyKk1tr26TqC3tR9hMBkHGjUpXLvXmcvuhVbGeBcLj5bLbTuTGX1tofJRvfpy1FPLBagE3bgwFwYjHgd9Px9",
  "key17": "2AKQunZYs6Sqo3n2XxW3rq2hoPj3MNDBnySN4bVCT5DhVACW6TFrZmQ5iKH821F5LSng9kMtE4e26cT8BYSEV1rx",
  "key18": "3tVYHyLmdkVa2FhFFguiUKya7iKUkECvPUvvUQiME8MdBWypfinUavCRWBkUzzkq29xQsGfMPunKgyTyz5fYQthT",
  "key19": "4uvuDC74k67nex8a1x32kjhP9XcU7HPV4vWYx1eoi79Xp23Knz2iiBHRHDQFYsjTscYDoWrQwJ47uDF4LtpYbxmd",
  "key20": "2SJdfRksxSm3mDHNRjpgU8Ati9hhY2RvGiNqmXfpfQPxLjYc7HLtaRcSv7GThs3USNXDgMU3vZGJ1f3gWpnEbRH3",
  "key21": "2ra4i2oJuAt6w8jmLjY9BG1XYAKS4fxNmaBzbMrzaUqSEPrssm4hrYZRqfxoUfSm4PgnTCfBtfDYbSegw4KBkPqv",
  "key22": "2237TPouqy9v8BEvSSDrLpUwa8HeJ2MbetLT21amQWMDhRYXiowam2fdpdPStDbmAobu4JGy2XrxYWAyLer9xZzj",
  "key23": "4opNrS9xYtDgsS4ppESBEQdbiC4M2C3nvjr4ZKW46cLArcL3G5Hsct5WbKPBZPGkueCZCk9n8oq5mMEKKd3YFoNr",
  "key24": "Y2641FC7BkpSqrkxZh5QgQ3cNbRUWcv3zSx9DkZrLe227NY9axakoyLcR6LsxYpAfjb8ymxUCRwQBR7ZeLSzrHq",
  "key25": "36HkJpPR7eXvSDAis9Cs4eVzfnGts5KcRmmpx2RNApgD2HzXUKE9xvLH6u9E1cvFRH9X9YjZSCfixggu8VYjPjFm",
  "key26": "2s5KUrFAQ3j8RyZ8UsZ8djsSy9jp4bV1hrBzuhfS4KHdsEGL5pwbAyKcdSH5JKcvasEE2JrSbf9tvyGyeP61bTNH",
  "key27": "3i2rPsrDteisHhfHFH8rZx4iJdFX2gnGZmre2PLN5B6icrPVt3fgYrQ6hhRHj2C76hcKuMbKq4Jmkbh5q79Pc2Tw",
  "key28": "2FmeqSZjjWx3YSBWQb3bdCB266CBRDzsjSHeY42bUT8vmWMP56PxhaGf8Y8R75RzYWXDRD43uqovAb5zR2aXPd4L",
  "key29": "fbcjEdUW3RPaJHFKqH5yd4BoAXnVTHJNXJ9Q5fgugFFKeWs1sBVu6HVgUUPKPtWaJi7kuaS55Kvp6mPT7EFHqkW",
  "key30": "2oLkhUtq5B6k7WgB5gWVMgvJGwGxLpW1iENymoaQiAgxha9N3knG6mJb8qF1ozTTJjXBey6CMLQQoyuaEhtqNkcn",
  "key31": "2Vv5iRQpvAXFEURjccZGePpiwibJQLXV6kv29kogWVJS7Qx2TnYQZQWPww7qu7Up5eahmiDgboJqhQa1gwQnRawe",
  "key32": "2RakUpaN5g5Y457DPG9ibNd86HER1RGPVaQw5vm8PfZ3LS6HWuFLGMbqr6PujuPhSowZQAN2xGgrA6G2nMdWTWFe",
  "key33": "4krqXeqozbnArUaC739HKqxdqPaenoUz2CgAMrRs687j6CUohadQRubXggw5mJTJ3t4AYZE24wnipqxy9T5LbhKD",
  "key34": "D6mKD6i4pAwCJhoCGffmSadv8GP3vg6KviKsJpGMT7MKjcAPsDrJVt2yPAjxcK2ymsJrnDfnsXwhBHboEyNk1LR",
  "key35": "5Puc9jwdNNKUPZnh9i5EL7YeeHKBovYESdj1aFzt93FZPekNtvvreW5ohubxtuSniFTPeChNMAjXQhib1SW1TxY6",
  "key36": "5dowXJ3erbeLoupANr9RBC8Ps42yeRUUpuPD5RrQyy9rXG3z1ywDrqCoKpFgXEG76m1rZsRUSisrDpDrKQssopCr",
  "key37": "9iuKNYTZnERtwvurYJNRZAPcWjnwkcywo6UrruJYAEFPmK7tiRkjntVXNAebqBbmC9cMJCVRjgxo7w5fomLYKhN",
  "key38": "2wNALKsuvGPgtwGK2hKWKhqGopxBZaspTgKxMXbii4gj3pDSoz5gX77ZpatM7YSUqAEKNgb2z3UjrF8zM5jnzr7J",
  "key39": "43yVmbo5EUTLbUJTjXx9DdBjZrNXaBsDUos7WosooR14Jagfg6NQqpoTTHw3im46oHfHKGjwWWcmM5uL9v8MCjij"
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
