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
    "2SRAKyhAX28i18smS4Y7u3XcLevZya35bqqV2derxSYkiCx2iQtnRxLRc1yiA48bFmccqE8JdfCaMR74VqmayEGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f5NbTqqWo3981VGX7V9K6UFd5ZJg2Vq1ju4HdkLxzLaRDTmW5piNNvcsQFeX5PxPyv852aEHFxjMrRuvSqDvP86",
  "key1": "4SQSHAaA56VZ8rDxLeUAr2c6nJCd7nf9jCfoAVRBNBmSYzhDRa4Xhqc6P8ofSeKEQnbTCa26wjKSyecM9kBQDMtu",
  "key2": "5PrgrKhXjrmdHVovqBTg3MgFiV3Eeb3SxuAoft3ojvN33cgThNcwdJyJ24yw92jHUoRWX4J5mJEQ4ZakwmcgGb5a",
  "key3": "4jdH5ij7FzfLdwMyxmWAUfHB2vHPeKRDXMA9Zo7wPH3dpnB1Gr6CpgdQ78JiD9zrfM4ZLqnSX3jij3X3L5oxZhkV",
  "key4": "5zDFdE3rHE2indoDyEeFa6uffTGRW4qyM9rUFYdUeS4YNmLnRprSLR3aQoThA9RqWoPT5wwdD9H7G3mKfWcQJ3aE",
  "key5": "btFKoRBCqsxe4S7p3TtcmR9kdxLXPvUKUtXYppk5jc85AgggoLFqCqhoTH1WzNWENgjetrAfb5KMnhcepMNaSDq",
  "key6": "4KQf7uumxKiFRS2KEEaGddakxNBXVeodm3HKPbaS3tDz7aB1Q5K8dr11Prg5DZD1RvEdyUSgBpq328CHdueKvkNG",
  "key7": "2jkWrVAC3ShfBeogKZ8n55JA3xcZffBdoqsoGvkaU9uHqf8cxf65UHz21WoBJLyWtp2p1pQKQBSxsvdjbwiiELEc",
  "key8": "YbpVXx9v9prQJ6yCxKttqbSBXbeCGEfte4s2iBSAXRgKYemSSnhga7MesizV51QzRU9qKvZQTCaA64PH1T78XKF",
  "key9": "2mnKLhkpBRuAyLDrHv4bw2jgjFLGC42aP4uSMCHnGRVDCw69d87eYJsm59zTQLgP17bsb4RBUXmDAXPVeJ8FpJkd",
  "key10": "tnDJmXPJjbidTBtK9tJBSiqKPsssE6GeRcAoHRySSXRMy3GUft9FjG6DwpQE7V2C833jqTDGJ4SRVYRNFM7gCq4",
  "key11": "5wY6vcWGSJQWwmG7scDog5zno2RLVM6huxHnhZetsNbzZiQMMAfjUfXrdBCQPx8KWTRx2Mw3YUA9ueNheZ6mTFtn",
  "key12": "52akqFBzd4Lsj9RQ3Gy3iJ6P2QeYzz8dHxFuQGQFHS8v9nc8u7c9rdwy8VeUzuj1Jo57Txux4RFGdR7Nytv47VuS",
  "key13": "RuhBK9NKxC8iYBSh6DWzskE1j3cGDX39j74u4HujuubhyfbARHYQ6XhyvgArzDB6aSHDwjFqWjCqpWqgqaWHaca",
  "key14": "3eJHX3tXonMGEo5Ah3UVnyFHe83VGaupqfMLDoWF7tXitE5yKKUX7hH7oqTXCbcDCEnwnLkFprUZfF9icm9x9m4F",
  "key15": "6sHpvWauhED5Fp8Aakc8bHEHqartoCWcfTV3Ms9eJcM7gKksEXN5s5Jv9qAtyZv1pAyqQbkTdoyy9HfVYKoT7qL",
  "key16": "3eee5mtddWn7BXqGMonAgeZWTxS9wF28BbDCYc1FbR32dXJpnnNzdAFEk2rPYvgAB6o4fH2w8Ni6maDgCxNRzkLE",
  "key17": "54KqUJFsovUaTaDBuexXnap5SBRYuxszCrMcvHN2L9C8P2egkuPQrD5fudRUDCmehkyVPwUjfzg6tZZHdt7E3phs",
  "key18": "2Mroai9JnskTzPRxnS83HK2kp4MGkb2tahARj1csKP9nNb5RECNVCEJ6qncy9bU7x3Hhpi9Ci49yrrdx2BxefEKv",
  "key19": "ftqKLnZgDghwib7GppNcFrNZMbEeQqd79P6P9zzL8s7CjtAUuV3c6zNTaw8zPW2VFJvKvLWY6vh1iTDriytfdNx",
  "key20": "4VxpB8Qux9SA2UcCaiRAchauNZ8Vy42Uhj3HtGczXgrE9esbE7yacrEzdheGteokQ9mXpzVPNgzeNTatnoa2x4ag",
  "key21": "5LefVpyH2uX5vmPJ4grvCxZDzV7s7dt8YH7SiH2o9dwf5frHFxMfit4Zebp6bkhuTuQFQByHYFELFDyzkwXQaq8y",
  "key22": "3XNRXFFr44qYUVX1mMcQPU95k4nB7mX6hx8jyRQoujeSWxz2yppPcCySRMKLgb8FjWczmG1DTeNnvz8mkiNWUjmr",
  "key23": "36ovvkR5RhZkG7waAXA9gHvCAM6LPJ116eLbwLcaFySzt1z9zG1TuGwXLQuYyGaj2mwJ1xc7fqSDr7wEfBkqzwEk",
  "key24": "4AJEYyY4E4acnupuGtaowukP37VTFemxXaYTZ4yZpAGxtL1TriokkWHzDuqKxaLVLhGYGPZqH9qLBiagVnJUZiex"
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
