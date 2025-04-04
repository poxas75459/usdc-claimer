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
    "4WdQZw6E2khobWeJtNC2MszmJP81EQ8BbsyrH6h1vJ4UVWsitYRVEqzmBTwjz3KuJGyWhrCpPMpud2Sf5WJki4j2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66ynG3wL78JtPJbn5vcjuPc1EjBpbZki77MzyoixaQDr7PSBpUF493tV8vJ3GoTDS9f7cAEvmmcXCNVyTnrtC72U",
  "key1": "5HLfJeeHwquz37Y9ywHT4cZTWC1st89nWQnS3NkG8RyA2m3uftma3FXSjqfqXgxrpafHov6deRxTWeu7NXiy16rY",
  "key2": "5zRCWtSSv29fbuLS19cWsEJc4zB8hP2moHptoMBNUkFbL1d1uipposp66jSAEVj4sUcnHygQma492C4FwaiMPuWR",
  "key3": "42aHEEuBeJfSgatVJkMGgFwqLGEJBUT4MDV2dQNxzMMrGVdXN6P8ZhuMymKDzXUnN1DsPPjTcnF68TQCDtv6Rw3Q",
  "key4": "2hxgbTEsDavmruucees57nw63gdAZ7Tvy8pqhx62r5Wata3Bh5UcgPtiuwdYyKtaFLbddSzszegPFkxshjYC23Ji",
  "key5": "GqxUij8thaCR5wGXgd9Tv8MXY1ctFpjKjxANaqgbxgx9c65Uz9ZBmCAJFVw9wWazdiLbQMNe4NidGVxx3DXQWrf",
  "key6": "bh5CY7yj4iSzXFURqTvob7aC5VuiieQQ5AMpMAD7TxUas9QzVPzNgDC5XFoZSTbiJkHNqAKSY99M4WjxfHF9RHJ",
  "key7": "4RMFSKwYBKAWBSD5EWbmpsEumnRAqVakTJqRiKnVS8KhdMj48Tqs3xZMPHwEaPGtLQKG2wXQ6S9JXrH3i7xMU44n",
  "key8": "23yb1JWKvvHQcyzGUvrUZTWZ9Y69CFZRBM18AJ1VBG3yWf5WRGKNXHPHhkY8Sf7xSJMqKgZetybW4ZMuhSE8wdwN",
  "key9": "2wfGnqCMpwPZSYxzfrGFCdfzGu8GPzHZs6hdEWFCM4oGpthXBGJYrTqPmFKwGFP3JBg4jbWTSPQs52UzmRwzzM5K",
  "key10": "3Nwi2Vnsa3QQuHCVj9rdRQ1bXHY5edQ57eVjXioHWgV82tfMUDd9SJJNcrb2g9cMq5FLpGZsXDJ5oFgN3WRSyAmn",
  "key11": "c5DZ5sc8EJNXZ7uUe8ceF2pYMg7gPT5oVYKi47vbXHCAunu8mjYN4nK2pVLtccWH9cDzdw1MwxqvbaKYue9M1yP",
  "key12": "2A9X2hCKQ8xBzDiN18FJNi9P6jAvZeD4NWpn8SNLxumLrckruiE78gESAiWGWqq5ocz6BTtCFPhykiF5okmHmYBY",
  "key13": "2VciJB44MwXj78JwfFDcrwfe3FHPqGcxhE4nb4jQtPMG4GnJQTfhx23AHDWZaMRcMwqV1oCk8GwcfiMdWTjr5DKs",
  "key14": "62ySoLSgmVAmuaMwGqRbrw96VKNiBBE9WJGDUMZX6jqLEQ4ju979vSEN2qsc1PdqGasdkWu4w4ZH99MAYoSGiFEj",
  "key15": "2bygRRr4ds6Ruj93eLiz5a7NqeDhmLFvZcSRHg2G9VtX8JiAcUgwMrTrXVSu72ykFwn5gbno6bYtYxZhLS7mpoDg",
  "key16": "46uUXELXKzgwqs4oAcniBWFdhHiW6KS45zcMenDeBvksKWaCKepZGd8zArNAQXtyeFe9vLMEm8ho4RabrT967V7v",
  "key17": "RAwhtdpGAe3pmLgXvkhUVMVweGH8KRT9a3TfekpekZjXw5d2mWTHEqAuF5kHrPzReTha7AjqHJ4oeh2Sy4er3uM",
  "key18": "4ixCiaiTnUo1RP8qAzr2AXDTDmbMJxTLdK5wUrbexwZU6vJxAqBRFEFxRp5jKuC6Dso48PcYfx2KPmANBgACGQKt",
  "key19": "38wt13x4BaomBh5QdnrYv3YupQDwjrgcLhgg3Erm8rhziWJ1pqfP4xs9R9rKRFUzaAisyXhtatuSuRLyK3FURSxP",
  "key20": "5RfqgjSeAgEeQBhjqBav81zxRJXiVKS533Wh8Gwv4XFYfD6nLxUCLJpTLQAthuDsoaSXYXe9unNetupYPBP3X6s",
  "key21": "KANdKuwwe9GGqPYhRd5Vhz2AFEU3oZpaHjHHvEjuWiJqap8nxk4PHy7tEGEXoZk6Y4fRhcYEPWoMseL53ZtH9SD",
  "key22": "1289eTVDubRFJt9cVy9Ko1wGm7svGrayR8mUYQfgh7HnXvBABqXnX79pQFCLRQzkLB5JBKCxQr6ynuvRwbJCNNmo",
  "key23": "5PJPwwcrUcehxEct2yaT6GrvSF3RjQADgiM9xuzXbxJH1dyF1AmWZGZsYCT3tALm8vqoy11NRFhegnKA8f6WFPqh",
  "key24": "5z1vwUyUPYr8D2onf7yyGpGheoVeXm4zBiaLbefuCuwegFiyuvstrydXMRrwWv2vab3GkvKbwWEgjCyzG3BjWz9K",
  "key25": "Z93Wo8gA5oBSVgHn5dNV8PrSViYbWWLuQak1YnyL6Mvo39sqkXj3xYc99uKkGNicW9V48smtHHwR6WupaPgYpeE"
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
