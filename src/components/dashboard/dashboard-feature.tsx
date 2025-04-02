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
    "2tSN6QzrzoBWENKBwnAhK1FULPuHCQAgC6WVg3Tt9qyc8UWNaNQoDLZuJEef2Ci3gUGj5MmfPYo6zaWAzAVj9sVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QS58zFqMvSCzdykCL7unYqRUKxvsiady3VpuW7rHSz5JzYnu8a3oYCZSieKcqKchtTnqBKvNg9vqGgg7ZwX8NCo",
  "key1": "Swr1tTYYL6mAugVp36FKncttghGZG59JtUNVMwh5qpBdPYvx3UtHS4NE4CcNnqPwhQC2YyJ9vnCHSnmZr1sLafX",
  "key2": "5xTZdkazxms4pWxHBnbmHCfs1fpSEJvKuxKcc8VJUkkQHYmYLMye61zth2vkLwgTfJcA9qcxk9pZtWRoh5WePUt5",
  "key3": "3jwEUNCw6bokoG3FmZSyifavgSR2GmB2S4PLxikCHb4sY4i6FVBeoxKcyZbMFcLcidFDnUawLtzYfhLqb1EQin1U",
  "key4": "2JLCGxHsgs3KEDhqwk6fgnpZfAKd3JX9UiY1EP4TPeSYZwUYNzBkKqzBEEcEEV7hzEm4gbG76qpZjmzWBNzvy36H",
  "key5": "5KQWmjpZSPkSSbGXKpX5NnSzAMumMHAnyyynxhd6dp5BNNpedDvgQcCrbjE81FXjRrBdsxfEsFTFVBEEXREQuVa5",
  "key6": "mgYQ63bdGSftWoVSu1uacUhP4u6S1FPwQbBhYHtoMFyt2nmpPDBYHUTcSWuj7vKxSEN6pwC3Scifto66CSpuskp",
  "key7": "3s7rSNgVzqJDS7o3VzzBvPEo7UoDfGF1m7n8Bf85sbM3aXs4sw3C24PaePr1ChRYhQbFPERPnyWQBFktF5JBvA15",
  "key8": "5Nr9Teaxc8JDBeWjK4EKFv3ARss6jbyZZZm2KVL6WpW8uNhnUBHxQHJeMGPRTDQn9G1pMwL47VSLRVd6M3b2EG6y",
  "key9": "4MsFuUeFcpaVhDiicieZK71LaohFnnq5KgsRiB8Gj7hzJbabmRaj8G7tEQCkTdqN9vtTC1JebvG8Lx5MnwW1uB5q",
  "key10": "5m5SviktCgGEjzCPQz4fJ6zyVfncX85ZH3TeALsPuD9QqwvDyWJ76wJN3nWYVdPjaMonqna9DpiBbgErFf9spa1E",
  "key11": "2PZx7avrt5rsM9yTZ7HkCuwhDDjVJF1us2CepM7av9hP67wboADASETZ3AsRGNvv55wnyWnzMtiCykw5HS5kVJYB",
  "key12": "3SLM7hW9ipjsDtVfQ2HkDCzNi3uzdvFaSrbJFrogsPz8f2iTXmh8QPwuMLw41U8r8JaM4VAMWHoeSC8bii2JeiQj",
  "key13": "ZRarPZhQ51iDyvyD2rZR6XVpfAdJcHBLbW3GwwUcALVebE66E9Ai244p8hqCVz2JmmDRadUEgMj8cbbM1psxL3Z",
  "key14": "36Vr5A1PTtWVoPcLHxFdoex8G76Z2UpFCSruH8fyQovZpWifsSpz5QSKcsQth5QEr15KXWkvXzbqudABwZTuQkVP",
  "key15": "2Qht3JcB4Qm67nZAzyQPvufNFezwJJJ4EaPngrXMVAdbvGKrRmfpQigXRpjA3rWxGV4KAjSdgf2uwVHVZuJYEhLR",
  "key16": "43BtuWo27UirTn5yR2UpnEHsSkTosrtrGqxVrJoGdRKFgKQad1wsyw9VDGmiRVnVFVQLaCpwDvvUCdMPFTMVfMuY",
  "key17": "29n5PGtie216eNpSk4VVW7E7pdiCAqEMw31VC2bF6DAgLNwnLdMNhQGoMZLh5jCR654Hwz9ETPC7wysCLj8ssicf",
  "key18": "k1TWXRqt2gmFXF7Com1VZoAEUYypij4KknuXx6hvrt9KgHQafbioddrEnNxiicuD8g38ujFvMu5C7etCA1SWZ7a",
  "key19": "5B7kcj6D212yKpYoJx9iM3ci8jj7BTc9Ad4BREA2dnCjr7zDpuWByGq2q7Wcex3ackWhAsGxnxd2VmZn1osHmjzV",
  "key20": "3sA7nyfu4NzYG9V7oiuQgCMpn3ermFKJszarpSHrN4Peyn6566S9SQnUmj2G9FWvM5n8o2SC2kUY9Qa7DYRuxseC",
  "key21": "3qgWnMAeXbXhsuBBHnPUjeZUW4mHsyPKr11kKCk7qBFUHUK3SAQLybfGoir5Dd8DxA52hDpEyMArfxyKjjrvk7Zj",
  "key22": "3bi3Bp4rzddqgYLDhQ9yibkg8Z2Pp38NgECqUh6fn5QNsmkvFoBohuS2kf92PJqkTVb33LgTx6yXRNJFaHBisFt3",
  "key23": "2ss35mWnqdUyQS821bAZ8dFiHpjkr1bXJVSJFuJYcrxDer3tbCveaZRXs28GsrUeQMZnM89uoBwu2VFFU8iC8ryT",
  "key24": "4hCTCEjoHF9KyyUmytrcPpPEk5MMHQdCX4H7LTze2rFBfxKpx2rruY6tqGDfbYeLQ6LzJkDwBx4xMLeUqrxoQAwb",
  "key25": "4YPuJAWmiutVVigCxvQMM2PtjncQwnv3oZRKMHompVNABgPBvBy7saLRyQFJUyMdcoW2hFXug1EYAz5QgK5jR7d7",
  "key26": "4M6bcVgz3hZkaiPWrLUzkVVh3wBjJmVokMSYcfNWipSLMj51Be2BsasnS9uxSJCe39VuYzvvgzS3juVMuMCFj3u3"
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
