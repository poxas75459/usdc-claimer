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
    "yGpK8AuGxVBf697SWqRkEGyZPqN9WwYh1zKdo6Z9WutpdjsePMjfuxwGBbtpAdfndL1pmfvLUrAoAEdbdKg5zRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iwaQvBVqB2rUPy1msCcpZtpkGsSPqf5RshdyoKCVwwby2qESSoLHeEHeWnUkE2s6tWEq1UbZjyscKFHezZuUSLQ",
  "key1": "Ue5jsb18bqYXvkYe89YguJohZs3HnmCVN1TxaHJXEjzMx1mdPSY2Xa5SbV9vBgtDFJc7rriPLpKRC4GEVDW25z7",
  "key2": "3WHCgaZ7VHXnE3Lky7Tjo44aVxES8pRRxt3u2z2pEEjo1PmDu5NUH7YTZnkb58ip11yfcsc5bmQU1tRkvFge1P7s",
  "key3": "baiv3STX1moh9isa91KXCxPgo7oX7Bq1ijxgzS82ZyeEicYGQe2CDogVcEe9WXzPGV2HFw2nbg6gmWzTaXa6Cxy",
  "key4": "3WggAA3n8S44FcmCNkv4D55roNDZQkMyFy8CdiMLohpKJmt6x9CLNyiSwqneffeVXbffZV2jdxdGYjS4ai4KLUJF",
  "key5": "cu4v6gUEJFfzi35UVC1CpeD8sRHJcBEVCHwydKxE8i7qMToJrQcwjdADeXgvKTRTzjcX6UaFL5F8JNDtFMXXUjc",
  "key6": "3BCmLB5rehAtduZw5YXjAQ8wjMRSEudUUiwGGT1rxWagHqENEmtqg3bc3MxjVZTf7YzcmqCWZBa4j5MB1tEgQe8R",
  "key7": "5TkU1Td4sy46poS8us87pmXbcBaMYS8Yr63vpVpNDAupaqm9hfRYWsTVBpW2sKfVAaTrnP583pPDGR7bRMFmiw1E",
  "key8": "2UUbHGqssfCFsssDMXk6PoXrtNZVqs7URkjrXapYZfUMWh3KzjNEUQVZFmcJdqNCMM4qxBmtocmwEcW8BDTXkfJU",
  "key9": "VmLrUpc4RXJV1KN8whBxrUoguBkk6UxgvL5aWiyNTcyFB5rw5EjsvnoaZG3NJ1DJCmSepvp3fDNsJ2FhH2hzgZk",
  "key10": "2pooaJaAqqZByrwqEc7mRmiPT5NqJZJPztTZY5xRWdmGPRnVxTnsudiWqEDz9crDZAzPG736Q9QnMRkEMsYXnkSN",
  "key11": "2yJVots4te9MYvEWxjVd8kHPrJ1iBvF1wgTyVuxbxzfUj2MwcfcHV2AGJCtzQZZ5XwMT73Y3XxrKxm2omrgaV9bW",
  "key12": "244Y4ouigzMUJTyoZH2Ag7z1Lw62fGWSsCeB72zh22ZmAj7c35tmfPa1WaA6WmdQJTZU6TEeNN4a6ovEB5kMTTKz",
  "key13": "5WkmLtpPsnR8D8zZZxz6kzZVnbuB6TS23uuwcj9mLZhEZiVxg73foDnSPZ9bfTa22Twjk7uvstbPqJgeCvNm3itr",
  "key14": "561UP26ZinspmiD5Lg5Kwb9KP8dNsegeUqFXRAFs7bXodEDaXSZsxp8gGempFgjVsYwLXNfRKbVy1DyuCgK8J5SU",
  "key15": "5wgBPTtZheMQA5mfoPmWsriwK3o6rmQ3mTAGJzJ6BB6PzAZHsiq1oTHZk61itVpb3kyGaqAB7FAnEL4iDuA3TbfP",
  "key16": "3gSZrWaEhLpPdeUoMTRx1ruGWJ5aLtx4PEGuMUXdhshJ58ntHugVwn3RNURvFWBnqdTnkZnhb2Mjv43RjkprTSmi",
  "key17": "2YyhxXJ1QAeMKLYhfkvnxA4viUa3R7Dq4dWfr11vUHjtrtdHT9YiWShdnKkgWi3JQGQsxgvvNi9s4G4zyUa5NavJ",
  "key18": "5jKqkESTU9nQdQkzgzdBZKpxmv2X52PN6z17obk77FFg9bTvBeDkF8z48EcX6C12L3Gs2ixpjnfcmcBkabbZsF93",
  "key19": "5CCMo9hTM3Avdxqf3kje9QNBzbN5Qia51Y5V1vNtQxvj3qftBQY32U3gY49LF5HVa4eGExxirJCF68wecDMNbyFm",
  "key20": "2cw3cV1756JjxrdoPSg6aAuXucxNtNJ9r4tASd4FGVfEHbyKTtJfTmwjBKqp5wumgHLo6yuK3o14FTioxM7hUuCG",
  "key21": "3wCKeijm1Y1jKi8n1BpPAjYeWi5GmFW7mvze9BkQm7iLN5MJ8mJ3M3Yniz7G1jL2HqRVZBkN8g1uczbDQzBdx3XF",
  "key22": "63WgUv926Ev6fa5bGafJaXhG3DmttFaxfW9G3e6B37x2hCfJFVqBFDF416iA7nqbjZyZWAEQyj69gYV1H31PvNuY",
  "key23": "5bBUY7EudnoTE7KvKMXgWGbynsGwmAKGbTBdNLkA9zUKoeu2NYYpgXAjbvmZDnVB1Pd2Ptn7d2sLPmR9jMjveouy",
  "key24": "3k2CnxvSeTC8YCTrdLSgyA788upwqj3dLzbj9vALVtEdN1grbDoi5TCtsVnFo1oF9hgy7K2RfKQAQYm14gPb8efi"
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
