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
    "4w4HszcaagXwGezm3APnjnPQhFcWx77VqFv7iR8wymo5kACkDpfUwfxToWkFDLez6WP5EM7VmAdWxT4B8oKVSXkj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HP9RHvoKPZ5o6hdHJ1nhLgtRwUhzaHD254L7PsPMQ8zy5TBxtyuUHE7nbgubwRCbC4VJkt5k98tPwTi3YRXrihu",
  "key1": "2qJuhxPTyaJSjh1uTKLDoeabb1Vy1984qBBcM9TiD6MNdHKixdXPCBtT6jvbE7mJ3gsF5U1Cm4G6hw4LTuuscANo",
  "key2": "5nCHRZ8dRwbKfVy1PZ6sRib9g2xAEAFYkhKejwjMyQGWs58xXKWSphTr9T3bZMJcxYQrdDbnRM6MHgiicSdXApu",
  "key3": "djyL8FsjihfPCD37d9J5bJMGJwcPaCN79m7sm9fnJ67zn5PPnHgXCi4q6ud6t6auZkztXiKdqaqEfphK4wzHeFp",
  "key4": "4xZVXvpwY2S9jtV46aQcJ1xTAvxdkC7kGeUYGCmVwv7QCoBosGeGpwd74xjZxnjJKFBSWjoLP8e5XE4Y8bmgAwQt",
  "key5": "Zo8pkSpqcfMF61Cz7gHHxfGupeTmprwfkCAgMNkQX7JoJA9fuBfuFH913bt1b6WTsd81pnTuXfp9jHBMmx9J8Aw",
  "key6": "3iqoLQfQVf1HdSRsh8PszkXuzeBAUVJyZUd3Lcg7QKNTD5xpDEzBSG1tA5yakQ7dBNtk7bkCn653c2ZcvztJQksf",
  "key7": "4KDhjWjKVRsq45a5xXQcWF8rcHFbTDiSa5ib4rGdKNoBUmQzsWp87GznbXMizAA2quMzdCjWadWSaJBDNXBhGvHD",
  "key8": "5Do6Ds6nD99Bu7616fm9RcJZyucKVvzSqSiKVTTnBEsZ1aFHhSbgmKjWgGYgqh9RkBTEfyiMu6FoRkdbvnvGaXZt",
  "key9": "5bhtAruDCBEJEHNx9bU6o1Kp3YVS3AGwEzdAebom9U7TDmGzdhWHBKvE5JHb61bgLaYhDtHvJAW2FwyJi6TatqJg",
  "key10": "4LPWqsKh7MkrHiE99kV2FoWw9h49RrJbYRqzt5tKviGEm3FU8e6S1Qsxvc8oEK81Ht176s7AcBdgbnbgnst75JoH",
  "key11": "4R1vuxSv4psBdJ3P3aLSRTGvb5KfoE8wm25tQnfX9nHpZYB8WSMRRT5VRfKRqhoCpJx9g66vPmRgd2gH2vUmNnqC",
  "key12": "2AYSNJWB2PPHwsiXUQNaJPyi4Z3z1dggNNoo1dPFFBa8bFB9zris5ebMAh9mZ4XprgMMa1zUmHhfXgAuRb91BbEC",
  "key13": "4c9dr9H69NVk9ium8Vim5yJQGzCmszb4D1eGL76VUMtR4yrAxxq8wL46RTm6fwGSLXQgFrxeoairXTmVi62oDp2d",
  "key14": "295zsj1zp8TpLTBVmSF82zqhVFuEL3xjsqzXUwDEzXahgwB6JzwPN2EW5HvdDec4HqVaDb2h3V5ynFVthBQZe9xe",
  "key15": "2RsXZrSynsFwHQBsYM3UGv7LV8VzVGR2TDsdu1zCsiY8ifFxjbKjv3nX4ryD7AEPnoh6M1GsC7Vmg3ou3LCvmh3d",
  "key16": "4xHpWG9iqWTUNHHoyvBQXqB7LejQAwu65vPt7R8mNzJjsyWNJwoLZZi1oJ5mEJq4pNTu7H7vqAqLwoKMKEPmHAP9",
  "key17": "4h8tvCxFdtNQQxh4onGX6xtpA3A7LHbLEeLtjhDXLrkywhLwRXcVwGNK3XAJ2hDMFrzM8Y5QC61GLdN5b8h1DykP",
  "key18": "4P3CdcWMzBWQP9KkQcUjfQGYV8k8frrNMamDuiLzV1gCj8DEWd4ug1BpaU9TNiSREinEexzrbAd9UV7S1fgvedTx",
  "key19": "3KSPfEeWDeDuTvDFXJKJH4Px9zE4oYVRDgpuw4vQonCQzX7r2EjvLswHDu62HXDtTB1M4VBE499igHwoGdttbrvE",
  "key20": "2qKbTcPqJAMB7wCLeqtjpamRvfdhshjLP9MgZH2Fe68YVxfirAfscMnaG4wV6pvzEGgXBDrWgeU6ugou6NLfVkVc",
  "key21": "3eTqis6RbtCozoN8HTTh4CWXMMAzwBKYKps1LndrzjCXYNp9QjJP4oR3g33mqMVZuc7bhyEpokYGK4Dw8U3hRaja",
  "key22": "2YLi7pFgoFhfsgJX1sJcwWJRNSt6uYfBSNS3mSYh5sRuzZn2VC4FGsgpacYuRifnvhCevqLm91gAWtBT4ahsjWdb",
  "key23": "yFJrevvKFCZCUgsFKoaUR9sXpHv6AeaivnTBNebrrwN7qebmKRAU8e4Tkkudfg8AKCz4YMi7wwhcTEL6uahdBL5",
  "key24": "2bEGJyiDX4BhdKUVBqpGC6NyhWo2GdomrSiJ6TuQTwxUpkKy5LQmn8VgdYj41mbpRkQUMnwdSwGboBczdqwbAmtp",
  "key25": "2LRc4j6Xphpo3K9kSNWdq7yVaFkVG3QABKhmbxMPa7xQHYN6ihuJdy1jxsjJHuK3TgU6abV9EVJnuyQgnGqkTP6r",
  "key26": "5ZyK4acEq1odfhwMkKmN1ihJ15AoHJDA37SfymYbq1DAJa7bRxmzRuVbGRYHP1eSjeqryk9Nr13AASRCqAfqjsr5"
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
