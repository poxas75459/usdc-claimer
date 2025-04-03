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
    "65UsZwMa23L7XzUurLgnuZ9dQwQsXH6nma5sB8NygiaipoPhhXKkr8GdCh24hYd3Np2PL9vg1PkYTfUsjzrMVasp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jArXyqZamA6yNexfgui7vFwvM6ng1egdcNRHmMszAhSv6DUR4jKoY1TKX2xXSAd7Luk2uZZpYnJ37PVMfmk1Ga4",
  "key1": "2cyxVEunrHfXaoBP5dWSi2E7e1Kfu63SfsBrihuBqXA6hGzYDDDZFt1m9CFZNPEmYMgJCsCa9J16TxRMqo3ouMHQ",
  "key2": "4qpnjHtL3PZi586aZk32PVGJc6m2D9snxKqR32QWnoKgWCHbNZMJJcARvL5M49vWxjEY1EShZ2hG1gtb2hU25hyt",
  "key3": "5WzgVx3JwsQ6sEB93TS8b4zQZubPua7kHN3eUbuZFwYyxyiAMpvFiXwgpvJfzwmCPo7FCFt8fpn6cyoY677KckUG",
  "key4": "3wtteTNRvufFGUEtJN2fdp5ANMHhjzuRbTTmG2xGZEUS3eMA4shXwkksjWNJiBLUfhwW9rXPPpKYxtnyCdA51oTF",
  "key5": "2e9oqiQXneM4yYEikxV4rLzF3GJLRpAcpxmB6NHZmhsnVMPzyHpXf4DbKN1xBBkVyFiuqua7v8PpaSomvAjmEFBt",
  "key6": "FzNjFvVz2sYKdChQYkTWFn844RJv53NVmLSymEMmqSG3m9HFtSN7nqWSUewuepi9JEEdnAg6wk3QoEjvJsBHtfy",
  "key7": "2VARevKDoaBhaMKbQBFHiZbQ39HNX6mxBHfJN6Avd6Xa7HpkaXXNRogGJ7YWnpJvqjoEHBJ5z6qioqKXktDZ3usv",
  "key8": "V4haKYu6daXmhm3429ZbSAhLAYmuzpkoVegKisiXDQes7Hy1w19umj3vZbZPqmtTMzqBnrwkgihDwTaUgwXnX3L",
  "key9": "5yG7ebgrEhVGUxQ4egZBs2xc4uGKWw3zSAmdDAiiiB92aJ4Z5ygf7kUCe6cJTmou44WkfBbPQuZpFKPqYPd3AWVT",
  "key10": "3p5NdPyKPY97TMhJuA78ozPvZLDgjdoKLwZ9SQ6cbNZksX4T6CH49zpf32j4tyipMitoMNQ7TyZNA3Vs2WA61HsL",
  "key11": "3dgNfjZNMbccdwqSkQ8wyRkkibTCqz9KHPRWiKjJZaQuCUJUVwojsnQUvYhTpdBRABeREiVgzXMd8W9nRVPwv7pt",
  "key12": "4MfnEcLgh4RejQqZSENoFay13EDTPu7VpViBYDTVB2dNsRMWqXFDpvnmpur4G6WjXzGmvCxCtnSZhtPUz5cousVC",
  "key13": "59TqkBY8b1wSx8RW33tJzUBzgvVjY7iB43r13CpaWRYHxuh3EYFL6uy4kF2ts8sBPrEHhDj98TndXTrzqQeDDjpL",
  "key14": "3oVV7UWWLHAD33WhtRZGvGhLzYaY8Ja4Mz9CvVb4aELQ8AS9Dw2MoskEeSTmqLNVAYMG98RoPSaA67udPbjjDVT8",
  "key15": "ePPQ4LkASQHHJB5VVEatWKdwfdV9YrEm6tbHjYQP6AzFXHYjfdLxd18LXB3mWLnoW17UfdHSGGpe8Jsn5uMRrVg",
  "key16": "4L9cFzu8qsB7QEXnNuaHSP37ooyUfJiMYuLChv8X9JZfvHqdEESPN4b7iBrCT2aiYgr9ecDxuzdKtogx4yvxXRoq",
  "key17": "WmwawS9CF2VSSSq19JGG633JREFT2qS9cVbchZwvDzyYgrzftGcoS5gkPZnuMRx5cR3Q55vAMHQZfJZ9HjRZth8",
  "key18": "2DWCc1JYtcfAwsMi5JG9wUX7k2aEZW2NtjVdXXhu25yY4VttSvEfQenpfn3Ye8cnMDm3sxpyusDj7yHpqQxhn4MZ",
  "key19": "3m9HKh1NcidFXRWG2JkyMx8u5JvzAcEWE42oFrtPxKhrqyvi7yXQ2ZD1dGYqeiz5pS4tbxgnbu2v1gLTdjzmXDqT",
  "key20": "N42XMSQNTiiwEnpjMJAbcRmBgyN1nvUR1vodvWpLHAedyp3z9V7WCNycntdV2cJfMcn8ruSyAMDVWfZgAWrxjcc",
  "key21": "51p34zuHPeQpqyxEPKzXamBEnKJHmfR5XzaS7GcvudTjKi5Vjb1cUX3sE5gm6y7TU9ByRGLAunSJ46YQsfmEZgAE",
  "key22": "zWmWpJMxuLaCaKmw2WCZF2MBKeroHovYquyUQTgWmuksDUi9afo4gnVX8N3DpjLXVK54rn5jyPCvqDZnn2BBkgT",
  "key23": "2GYiLGjxGKDXyFTqzCBkFdP749KWje33vrZ66TjvwXLEHsAhPGz2DZY8QE9YEsoDo625KZiVnLWjKJh8D8pw7N38",
  "key24": "26SWVKHXq7rhgnJn66bnYRM3vm1o52N4y2MAWhErZH3RuQiKvxfaQboWkKQYMFSfSowDyBtAJhkLbWn1AYvVmwzU",
  "key25": "4RoHrntDhAUomm1tndU1UA9oxA4RxEpQiGCSrDAnWSJpJCZWxknt1ocEECcLodJCCnRuJVvieofYzwkq6sNakRMR",
  "key26": "5vETGDv1r6WbFPPPGJHjJ4XtV8giVpi73xyBFuCLaYtw1kkpZK8Sr8xF2KXVvcrcm9tRLYBFXvsxrnBhUAaacPS4",
  "key27": "46GBMFx2aoruJN49j4RZDrArnHazpma4rQt14NWjHmCEB6Ax13Kus8LJh52V67w8LymayeWHAbR3529ByfpY56YY",
  "key28": "3Bqitm7KVnyyvhr5AfZyaXYoDbF8n6Aseoj8KzvpS5WNrgSXf64eEmAJ2CQoXcuz6767JSPhDWXkG5RnC2EtwbsW",
  "key29": "61omHaCmGBp4gz9jp5mZwZoATMVVS86gJjfFdmvmcY8PrVBdL6SfsqdDKinRbU3nJPPM6GLoHfCnwcXzrH3rM6Wb",
  "key30": "RtcVxw7x4TMtLw4WgZPT1TX3ZUR1Fc4dZjEGQnwS76MawpVb3Zb8YDWA1BXoxZyV6NbqFFxpgPzbm9Ge6zuU86p",
  "key31": "2sf4o2hP3AwokqVbkLsoS3GwSq9AgUBM95JaNipSV6k3ftmYybHKFGTFMLC565S8LWeCYG5hGvnvA4tK3VCydRCZ",
  "key32": "36dXgeuBPvn21w4CrwM7R1Jp5syLNCgvJUr1h4nUSTP3zYToFRP5MtvzH82ahsR6iHdaJwoQp59t454Jc19fryUU",
  "key33": "2w12Brq7DvBw9toQKz8pHFcsGdMCe653MRDXEActHeqLDKZ3GNEyo3mQupgygDLejk1TBoeKhLr2k56gkDSsCgkC",
  "key34": "2woNMakbGrZPauS18krjCJ4oPWzEXVAi9BUsUySqzfXpf5dMAa1M3DGCqadqH36SN77Wit8PhjATmNkYJsPYTPJc",
  "key35": "3iyvYcqrHhLX8KiJSHM5w5PSiXYLUjsqsmKqrPyeK5VvQcnLEpPTFYtgfJNMePzwuStC7giRULVJqqJGGeG1fUAh",
  "key36": "4pYk95WKw5rgEnGKEhayDBhCbnNQMJ4ufhmcZ1pkzyDK3nsk59nqVuf4nbvb22ZKV5pbNJxfDmQdiYyM24PCamH4"
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
