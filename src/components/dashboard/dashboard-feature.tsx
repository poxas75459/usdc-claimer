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
    "4NY13tXgdAN7GaCut84m8QasS7Lri6KYrwcnuwm5hKXg9HTazgZCfrdwieLsed5G7YvF6m5KgSSGK3trq92ECcyY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2djnYkGQB4BnSbqQ2kDuoGTGRePb5cuFkgfAWRnTbcgUw6jSNk3AYBmknoFNt1fB48sTPbeLEWrRSkqrbfTSAgUv",
  "key1": "4cxVPCScMEvW55Sm3oqWLRuKJs6KcBfwKCb5PfFgLyXH3nLcDe4vzLT6qhvxkC4r3p9zrHw1m8k9ZjeKcdKDDtLY",
  "key2": "24DMAzC6xX8oud3Ghsse2SXgiCy7cWxGEu5NpTEJZLeMCuHfXwLME1eTBFw94hNKNd6CGEweCpJpNGXYWQntV7n6",
  "key3": "1KqinBhTcELfkR9UfyvgvMzdHE9GjbnHKebrpHV255zx5xPT3qYAKT5JpEgCHiYovy7oqaZ1UKMcfZb3x7X49Cj",
  "key4": "3cTRdRmDQGvSSA2L21peAVGCQFZP6mMtwfn3GYW2Vi7zwwASy5HvkcorPVPvMwMiCLVHKERyGcswY9rf83KUpbpp",
  "key5": "5RisA4kHuyPYJbrabuHogAJth6nahHHV2DTjPYeGEdxQkMHZZp2rA827SG7hncNTRNqTCPpDZpXuYrp6U4coZRpq",
  "key6": "4CG29TbC7yDdZTU2tC2iJQLe8VEcpRqnJieJQnk42Wm3E68VmFbCm6cpBtd2FSGuiJCCE7DDz8kPGBjZ7SQGFHVx",
  "key7": "3JeMnD9GBqiaReHM9zyEbWpCeJmmaqZgCAjh7nuq95ouRbzWqzvFEjXuYjz4tmHoKedyW39CDNPTU9ruWqum426W",
  "key8": "4rJ4ZtpJcyAVoFqv3915paYTG5SHFmkvMhXym436DH232RjnXsRhJ1NLwWzACmLTm57RB1884ibebFaFPK2D6ZAq",
  "key9": "3RPKQMWbziMUgp17RpDwD1hfwwwj6iQoZZDya6mwx5kA2HXpmZ6PT8nXu2bwrGKEweJZPHxy2iDLS76p1FnS3jSo",
  "key10": "dRzd9KH2gmEav4FRGxFRxG5Kq3n1YmxVh2g2U2GGW5sSj8dHvv9AbLY7fYtxf3ioXvuZbBJiXqupZ52xedTmYFB",
  "key11": "52M3wtpX4qFF2cY7DQf8KvuAEebicQoPhPN5zyiTgVhAZiJhMgVsPxySiRdy9RaFZDD6NfA9RS1Dbbfa2HiiDu1b",
  "key12": "2tmFzNmJtxvVpFTMLzNqhVADiao6a6vQfep93gj422o6wMh3VzPY3j6EnHUx3Ud49rYZHPHmxuKYM987v7VWaiTm",
  "key13": "2zCZ3DKJ4gTMoWYhBGU8Z2HeHgf53xDMgQy9ozsgf1kEzYgtWL1tdpry2mJeCzX9Dmwt8uYSumLoUTKdo5GSATzK",
  "key14": "2n8mQBQxtRD6w2HnzERTW7PBLCbxFNnJQ3KXbsiBBhXu7qFUtxmNnVcMcyqnFaXsQ2htGUFydJqQAPTwNfYauZkx",
  "key15": "ujUNQcGXBoWsyMrGM3nA7RevEZcgV7NdqMqAr6tozj8QzputD69h482dTy5TwyHgZNVCovZ87ShwyEQoUSQu2ut",
  "key16": "sRynukZPKxzs3MrG6fJY2Y8rTbFzguNDwdipe4PYRuni1J2BfxHzkSuUiGoH4U5NSVuxA8Neqq2vTWh1EmhGy24",
  "key17": "2epJFcWoMHcprrhnzJvFUWRYeNcahpBxuKxCsdBKnMj2CxJhWuqfqkx4pZvjzbysnHdsS4rzi4EZtLJfGb6hpHAz",
  "key18": "58A2gH279xGCzaGTnhXe6cHwvfkLsD4Um6DDatZKHPseaqmnXmdzfszDYodYUzaUwCvjUQUUqimDhXtyvvB3AWGz",
  "key19": "hZtAeeh1GjjLbV4qR82r59RRegmAzU6wNqPZ13HvidkedigdkWqFLPRtH5CWqRnAWJXGBU26rMBZgfHL4mo4RWf",
  "key20": "64smBdNi5ZoK2c3LCv8rHJovhPxFApzYSnFzVdvepyQ5TsDripxmG2pLW9SAFXWEHHE46GYwLwNjEyZiKnLJk8xc",
  "key21": "2mqzxy1asg7ZBYWnd1EK46Hxc31BpUf39vqHGtjmvfGznRfCxpUvHQBPh2gxWPETQKUYPq1BNjYBp45my3ijktr4",
  "key22": "45RoXRjnpr9uHXCoY6wLYoGzNvPxj8myVfqT2CvAWqa66sdsD2eiMB3ZmZnX9ekZRpG4yguJkZsogqyUXdsrMWpt",
  "key23": "2vwNYmpNLrhDvK9eJHH19Xh1LirXA2wbMt5Ju6AtUh2CnbcxfdSHUuw7ChkNXHbeu2Fch4VZKv2f6iyLeDM9cPD3",
  "key24": "4sbdxNhGWUGDqSDKRFZgZHrefVTKhHJhvbJe1afVFxDXT7KWsTWYsQR2hxRfULZ9q9uGww2iTmL1PEULFJRViaga",
  "key25": "pvhb116SercMioMWxRm1g99Q9n7n7zuzQVuXTj9gpqNq1wBkYuqxAignTxnJZDpeH8ZwBXqBvVPdPSpK5jaMqba",
  "key26": "We4FbUfRTLyWyMjENoEE5RC3qFkhffCi1D6cURTt7AUtcUkerrdnAZ4oEkfrU4uVeTHXzRDhQ6DTceg8YuxXgNB",
  "key27": "5ioWC3A67ASUaJ1ZLJBS2cH7Mtbq58Mq8Qx6R9rCz76ncZmQ9AR8xJbaUJRA2xkYY16GMZjWKD8j7UFpg5ca4csi"
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
