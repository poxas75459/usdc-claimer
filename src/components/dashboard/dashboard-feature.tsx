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
    "4xtDDsba6bBWxfkLr6iovFY79YfukYteY8VtG9HHjeTCWwBxsGzCwKByxkawofMPmy65cEpycChQUB8frtAt2QM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yqWjGeb4BtBR1WYNE2j4DSpVqGwni7EsZrkAwV7HyguMfszgwCRaGG3KZjmafTpqDyBkLQRPqgAYFhQg1YYUBBn",
  "key1": "2cENAnG8xBAvCcNKZ3wJR18uG8ugdWYCjWsLHTNqnZC915WdmsoByUmxMvWt1DAgFY3AaL2jQjKZMrGA5BUEEJPs",
  "key2": "2hRnMBiPaMPes6ngF86qdsEFr2bZ3jZf2qYBsAVAFEN5DkDbgX9hjhsYTAALHmT64y7NvBTxw5VP4jYxpRDpf5tL",
  "key3": "4stiqcEAkyfawCr1niGDW3XZHbRm7evyWygazv4yTiNHitdFtQzHbZRgxtybGfSfsaZ1fwDKTS5kBXvkUwBdz47q",
  "key4": "47ZdHqM4vQQz5TDs8pERZqUB5e8YJ8jH6QGmpCcWGY6ZD9z6X4o3TU9vYshwa5KsEpDcAUYNDYTAiswtah2tovKq",
  "key5": "3LCDsHMaBFJdCe8AjJerLMD7Cowa3aop7vfum2szD2wadXn8VG9vyi86xGko9sZwtxTfjjFLsWAymZtvqsKfFbGD",
  "key6": "3Eae9crouJneCGXvfFDCZPfiT7SPanTNrpqSo1HnEp3Wwz8NDyYi4gSPTGYL5MyDrcJ55SyhzWhb1GK9hUVNsqAz",
  "key7": "4A69RP3Sy29QapbmJDkpvYsTV8A7aXcttKHjmntGZw7C9kQkfkwZ2Mtyic8ibbVDaxHL9AvW75NoNtaGcvLWYaJW",
  "key8": "L7FCcNxSwTt3CE2Gc6hnwTZ2tQvo1HpECvzgkpxYV7KY3YdPTZQPDQF4EjhRUVxg8HUMfS1kgh37k4QZdtujwRd",
  "key9": "371xtKRLbCgvcJ3TsEhzJRz85n6qYeZfoxn3zAW4eJ29pHipwexsPjCUDjbX1jMvv26Y42DY3JTCrGsLYKtRy757",
  "key10": "5kevtWtXt5vaedixiGFX3sWekSbDP4Dap4DWvuFGWJDCaAWf6yfQLje6bKxHGPQhJZQmGXW3e6EG1vvaCYNy3xwV",
  "key11": "3HFUVRhGQ5B1dKniumj1cHhbp4P146CZc1iGiVEBbAcMBQQbau15e2i3Dz1Et8GWQf9GankUP5FmKUNQHrcMLKrB",
  "key12": "5q3YJUU7wp8U9mHicgN9Nb1Sk12BWcXxUuU7hAPZvTd21xWwGnBwLC3qQYXNp5XjChZMg4fWwQTLEtDoNViaKvzn",
  "key13": "53NKPScTPqPCcWR2fQ9u4zyMBYCZmj8LkyZ6NuF83F14VNw2jwaf3qSH126XcySBuhB2RrXPQ4sG3eMRX14fFpqr",
  "key14": "24NjwbofXPVqzSqYM1c8WwrbSFxNtxuz45VE4YAFqjL19mRSXjsFGN92c2CzgX5oN5cbxtKBAg5jAq5wRxHL8xBT",
  "key15": "TFMJHrRTWRjvrThc7asrDofseMQoyYuxcbzSyqNTRsmdW4o3bZqPMiTmCTg7q4KsAVXwuL1b8dQwxHvWWACw2gf",
  "key16": "37gAVNQ1xa6nvo1qTpHtVhFWTgAxv6PJnwspqvqPKXBNSf18oAPGgwcyLJsxgGS4joWEA7gtufYHJ4dp8ppEUP5Q",
  "key17": "67ixti2v2BVRRPadDz4Bodeca6ojtRUjcReKWbk5XZ2Mt7SdSp7ByrgbS7ZKS8mrrvDvSQa3uSUy69AFErJuocgz",
  "key18": "1Jm1pmP1iBSfdzBZ53H9t9Q91Sj1baekAdqFzek3BDYxUVsPPoHyTRPdEinT9h6bfjjThpFmb7KHL7qZqw4KUsK",
  "key19": "4ttmHq5gY458KiY68G5XWVYs3w2jgRRJALTzcGBY3gj8jCqx3H1tmdHwdwkTa4KRkZxiYvCmkeczMRSypXsJw7eS",
  "key20": "2fiN1d4HcgT2yfxPFPC1HNdHVSrRJrwYaBjJva43M8xoDs3gGwGuRUK9QendJSg27BnmZ1MTUB9ybp94PJg2wKD3",
  "key21": "5L1hzv2DQ1WHycHLX2NQCczaUxizMZXePKHVgjpKDrHSgKwnJq9EgMB41kQzdmWntz3cQgJhxXCwQLj8dv7qxsQ",
  "key22": "2KNeXs1AyYxdS4fYc9vzH4MjMpAT1EYNRPyPSBzksfVgsnSMM3tT6tgrV3jQBnTJ1JdjEhxAp98Rujdf7NM6mHJh",
  "key23": "4T6zh93joof6EHeYLTYNtCbZAeiHdHcvU22pciwmo3WFZB2thEHvSRWRSEMHsmHLWTbGXnkEEUtK1RtSa9jjYpSV",
  "key24": "4JKrq4zM8AmbVu4qoiSfikNn2qbKYvw7oo3ZhySq6KbULUoE6mtWZnfkeS4dUk9pG5QmvZa8fdnGPmTJpHsLG9An",
  "key25": "3XFMrTcdsa6EoqeJDa5ZP3gfNVWdaDv2kMp7NS8k7y8noL3NEBkKYNKnVDD7ee4buhH8P8NzXSjPy48AT1aLyz2W",
  "key26": "iXPDiBYrYQnAhvwj7YsjBCsXvvoxqpet7wuNspFbpVmpdaKH9Nh817SRHqCL4fS4AVvr4Kh5DYbHBH88YBSmTYM",
  "key27": "3Bo3f5vcAnPEDGiiBKeiePTrWec3pEzz7D8FEi82Z3dhQRrgBNYg6Mt7PjbLZJVXkh77N9WJSRFqiq5EGQ4wPwLR",
  "key28": "3rm2SQckUsm8S6yYRtPURNQuJa1uXRSHN1nembV2okunLgDK1ofJR9e5sD5fWXukqQ5fBMUG6oYxtp7ZfW6b5WEn",
  "key29": "3x5cUqYuKJYcze1jvH61tpP19uB8HqocdWoMg5DPJR4cZsUAfcyFwaUgHu7iWie565hs3W14HTw9CRH9E28zT1z3",
  "key30": "381rz7fnS7hEWaLy1ebTP65cNASXeXKmdNK96Yf2mrDhmpZAoi3NjKSgUAm4kQaewyvtVzJ5NFxaetBBwZhfn3of",
  "key31": "5fdPt7wyoSL7v4FSA8SwxBZpHwUVByZa4xnQunu1kz59iPLSuNjtfBSa9Pb9pMctxyvFrzUaRvHb1V8VyCToQcXR"
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
