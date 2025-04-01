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
    "5xKoVtZyUbLtrDt4THsm5xLq2hPy6o97BK5hUzHgQpvndxG5t63CsmA8QAhZEQtTdJonggDJeaQyDsaQ5WH8cfyi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XkqMcwja4s95mEr3MQddd2may7bbWS5yvJqi9wDLGsJ37K97BJNPNDCsnWzi5d5fjxxxHis9MpN9Z6GucBDR7Hy",
  "key1": "2BkxhFUHKgrTzfntMaUVZpgKdoayE6nN8yRZAVmVtRthpMv5dV5tf5ZxE9AZHNQox6wjDCcWHzcQoSNvPdDepLzA",
  "key2": "5VX4ibQU4oshzbb2NkFtHbSqsyjtHXqaurdJm8pFZ9jJdvrokQRAbeZUMPUpB4VEzbh6LFSZAbKVByGL4XauP5ys",
  "key3": "5QCG2wNUVGibCtmVTxUAZFDh47aZ7gL14sdtcUhBoK2xEfgPMJATBMNCfyqsosVk8DE3J5fTFvxay7fHbUCZvcQx",
  "key4": "2BZS1SX4rDmhx3EtykyhLQZkn3n6js973dQi6CT5wue3Bo6JpRvUg435Td3HQ7ZAm9G4un9t9idR1PfHGnarhf9e",
  "key5": "4gMW7BfRZ68U7RWwjKAjgT8SRNpBQxi8ogbKM5TPD1n98M95pP3y91SakM5c8tQb1iBnnk3EjX5Uf3pCs9L1hiXD",
  "key6": "6pcJkEEdxmAPic941Cp7UAD3CEuzzKzqK3mErBNnknfg9AHuF2BMHf6ymQMXrnKEC1RSC8U2RAmfRLHaGLP3FgX",
  "key7": "4Be9L1mdQEr1YNqaucLq5QZrfAjnBaa7tnfi6xqE6G343E3RGLhYktEgtBdcbFpGLZhccDePDeUconZYKMWCKHhV",
  "key8": "4cJFZpDWtLF9w8g6Q96LEZGP6uBahu3UPRDQwQYHG547rWGCqKtJ4ccsGd42JUN3e4YBrX5xL3SS4gRMyWSwNR9g",
  "key9": "5qtqqRypt8j2rmfKpjbLUbPLYwb9a9BsVTYXXmbqjabznTD5ZfZtmKYJUh22MRB8UnYD6h7o6EbnqXprbZygAtEc",
  "key10": "2GgVXLT2yEwGyQacAnFkfJozhHEuZoDnRChzEmnDmwhW9VNcNdL1fGYMamD2qVVf1RwJ9uFumUzvXWQ41bZCj38Y",
  "key11": "LeDoZujjE2Ks1R7EuaS7DunE9CFZ3GP4wnibpNzGvPzyArCz592T9ij9wNbbPRvhjLZSjgZ1VpEUFQcjkgRDJJw",
  "key12": "2CsnE6h5LP8ENBLmJws1fYx94wAX31BzpaqBqWmmZjyTukW1z2qeszist7HyHzkc4J5WCB5aE1bBZUSUcSHta8Wv",
  "key13": "2ePceu3mWrR8rthK3XgdFEABbqwccMtGwzoBzy3UTHyVV5fRFUiH9hGUKooZbgpRmDwF3n6gE2AJciwW3dTYNd2X",
  "key14": "YgNgAcUKvbnF9Sex1XeaNxhB3LFAJWuEpRL2mSka95MmZznXCgVNLKLkxmtsH7am2dzcf6g4voHot1RENYX2mRR",
  "key15": "3dEo7fqVixarv5vhDs7jirjeY94RBTGJ6BC6Z2cqketrBNYfAUt6CvFY45XnGVHxTWByiXYN8n64WqmcAfeYBgaQ",
  "key16": "3mDTVm6uPpvmJCyXnK9qcHbZhNFvmS4i9t71J4jD4W2x3k56p4af6d6XBTuN7AG2tkDdExXgm8AsCnCibV84r28E",
  "key17": "2Zp7eK7uHMFNUSTy4MQ6ZgSM5GsU4QmdvVQjrdaAsGR6eZFVcd5ov4nTq6E1UnmMM4L3B9PvDc6hJ7nfKoq6neTD",
  "key18": "LjQywrujCyhr7cwbTVYEmoGVGEwD8dhCZMQcrrJKCcs8FCCNpzK2z2nXeTBSmJt1hma6aBmnPh7PNVmS7Bcc9Dr",
  "key19": "SbpU28fd9XLbxVucUCqiaZ6hmGiYc5zqkCbmmQW9F84UsHBo6Ynm6rBfSdD21rQ4m67iZYy53EVo4Frw2jDkVUg",
  "key20": "44AJEwXfqzh1toWdTY6aJ4VDBPwYrx45m2nM2ar6FcnrnhQHx4TkLy5Y3qQY2VSvWCUYWUJqqAP8aXvkso1pE55g",
  "key21": "ffkv6Lk6Hm248xBc8HmUwsb6uRCNWkbeQ3A72kFkt1GwdvQVFZHEs3v8FeoF4Zq5siDft4RsdpwbQ6RFCz9GLhD",
  "key22": "39MDA2os7RVjhXe6t99FV4QENeXBhx3b8TDcVVPk2HNXnDXWEyLnmcw9u54ZyqM38BqDu5YvaE7YNXJVL3NCGFF3",
  "key23": "5Asn94D1gRVh4Ue1iaajdp1jEXWTr8vRdszHYBzpqZXnxT6FyESPn6VaG2RAwF5dWBoWnSfUJGGSRxiqJuSDJXJs",
  "key24": "4ERmdCWS5zfxmHcH9CAAJnqz8cfyRkcmt9LQmFdz4yuP1p9rFM9kobfPyttQoCjMTKPT6dam2oWftxyttbz2gE8Z",
  "key25": "32iKwN62xvV5zZJfVaCUgdHiqnyGpcsM7XYrCecrtSuPLAYLRspTCo6Pv6dsK74g52fYnrFpjXDMegcm4NfqgqsD",
  "key26": "2VTxaevH9ngUS6qookQEY3Qx3u7mrC7dxtLt7amSfh9q62Mm7evC2r9tM9RRHbgKxcWNL5Hv5K8pYBstddBmWcuG"
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
