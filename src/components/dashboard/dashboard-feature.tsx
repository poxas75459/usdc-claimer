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
    "5EjSAunMqNxq6RNUTCvg4fQGekxEfM9KKWu3HW5PCnBHmqbzXijiZojdSWtZxMHzQzTPA1Cq3vzsYPYpNWFT9HuM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1Q3P71e5ygx4ZESRPjZqYiAEhqGJJGSniPdthyX7QDp62XPKaCi46kzTGPf146GxkyhPFrirDkHKfufXG5LtYHd",
  "key1": "5XHqNt4dDZDcYpdAcja7dspAq6RivJVGCf3N3JTYmssuk12c7jvDZKY3HVMa5NRZxTqSWpNgZFXdrMo6j9jsGnbw",
  "key2": "5BHZnZ3uMxtoVoGUWhumCLjZfo7HySnQA3cv5f4UAuT2gpPDyn6MbRQFb5NoWNc5376WxAb9hwXBxqxL7cvxuUrU",
  "key3": "4Rikt3ZmLuNTqiEJfhmAv5kncmvz7xoLkfVg9cPePryDsQTBpnRJqALAbHTX2mZYDgxFcnwD3MG19NmTe6zfUuHY",
  "key4": "3yNgpvK6k2D6hExvro995NPrHmGXaxvj6GfQHJXUc2N9vDsCika8KWwRfwF5HNq389xtTYKu8Jy3GfJ8zYha1MGp",
  "key5": "2vwNo8bVMvTUETJaTmSNiYeCpcJtrVJtFMgZWiUU6mkrMsgwuCAsr2JB8fMkWEvANc29XQ3cvJirxmxFFp1JXr9c",
  "key6": "3oBNa6Ac3Z1hKGtk1upHyRziapdvxJN7yNt2X3zdgGDhRGNchP4vqHhD6DYdtuScS1pGEeXBqcuH1qbBtyQzSXAC",
  "key7": "25uWH7LXp5SUwfeu75wJVKFFcwNchJo86FbZ7oep8R84cCeQ5LhBQiVh9bQ9bRq7nqRT2NVFdYVTR9YJPQufC6j1",
  "key8": "4gQc6BeN8bxCzehGEee524jZBSHNS9QjQDGFDVU1GAJKVpLYLicfH8dEa4KkCo5Zn8AhrqjLRiZ8jG9AoNLKasvJ",
  "key9": "bXYTUSbHiLXsZGaRkhNxv68dqW3bXa69eutog2uH6bZLmrDenm23kXis2TF6kiZQGnb86fmidBPTm3az4eLBx1T",
  "key10": "54N1raGTyURuQvitcdsaLgCM1jk1ibeVFfHWq8W7NVpGF8mdqwBRJqhiDDp3KxcsUap552GdZ1yQPFd2oEX5u4br",
  "key11": "5n6Ky8DywWUsEYjdpE91JDBwHYJLFVNa4aFigk4Asg8WrWYG5NHE2EBh2A3K6rd9EQp3fsyRfvUpe3D8ZJBtmatS",
  "key12": "5axo6a8w48NjG3rdNv82SyyMUPa7XNWc2jKuawuzpQ1hyZSRkAQ3itVr6Jo6kjzT1ixsWSNip2wYTpGS45yHn1Aq",
  "key13": "3DLfGY3xPJg6zvpiMom9GmeZGFutu5xP8ZN7gi5esHJujvMteUbsfFbogmq3nuv6ZxBxg72LpDfHGEpdexvXXkKm",
  "key14": "bP4MRBxPzRdmrwehMea63VSrUkZ7mgjxBSNjizF3z6LFoWPBenzKR4sndacjKT3yWQkbxVabSHfwDn8Y6SmDr9Y",
  "key15": "5BfjheNd9djUic42JgZB3LMvuSR7urg43hSaMvGAcKWgR6NRehDmk3NzUNi7pvm853t1kXEEay4S4Ey3R68gSNfn",
  "key16": "2GBUSEr8dWWhfwJ163GcwxZouGMcq836StN4exnAziz33CZWRnrVJJALUx2M9ScUr6kcQ9RQsVCcdRYAsy9SNbAi",
  "key17": "52CC1pym2jjNvJiXXxYsvVrqygpVH2itDtPaw7fVAT8PJQUabsxU6c4uMqGQnaET2HX7wV4cigjujwXo72myz8n4",
  "key18": "2152wHaePhpMMuGJYbK6wkmt1pdqAXGBSyAGQwPBwu5znzi5roHMnj8b7T7TmX3VfNp9aq2Wsd3tzozbShFVvNQp",
  "key19": "3VHvamFgEw79prNPRAtQZFXNobX3kQG1qeWzZAxKYzrMVmbBEVXMMs6Xi9KiY9PSPVzSVq8c4YMJhx574V4Spm2T",
  "key20": "SLfcXCtDN8S1uE9U3oek5xTi8wqMhz5N7djkHW3q7aR15aKNEEXYrmV8zxZEyxv1TazVDqv7Uao8xditXxZCh3u",
  "key21": "3MUAx5ymQ9Fdy5UY2nUSyk4ucAvBxh3EyFZxs6hbgucByi5bJ5LqEbAnMDzE2jTkjxGEozzAYSgaQaVw1KmP4yy1",
  "key22": "2aYSrPXRqq1CScuY4KvC4cd1kXKdeZhGGMdLWa3KWsxmgy5XwL1tv9XLj7BKB4W4JBEuGFC3tioR15CnepjNv2o2",
  "key23": "2PwqZPYomv3cTEmWPcfukDyStkZ33JR7Ypx6Z7yYrgLPVBva6PsXSxVUFFAMipqyjzHZwq2vrbqtpLp7Aa7hWS1z",
  "key24": "3q1RDe9MpXWk7kKsWykV28pGPnWMdGNvuZktayqX2BSTFLw8ExJRp3kKvPg5NPzjQPCeojjPSKGaPypzdZwvp6SV",
  "key25": "UdAfAkPH7R1a1QGRkMDnX5BMV5wEiRLkDskA1eFT7o2QjpoTSSkpLmkDwN2nr7gRF3x7wyGDTPzSDhy25kEjQBk",
  "key26": "23j2wz7JmDnU2vydH8VSLPberGxdPRy5pah7U7wQ4qCpHBPUBqjmn2ZERZpoNxuYxS81siLN47VE6USHDjvyp6vw",
  "key27": "4C7hNB4tUtg7YnHfGWA38dAqJnQVxKMsHPBEnRU8ujGQ9DxQaQZiCyDAaHSR1zW9eZje37CvRz7e9idrxWMEpN47",
  "key28": "5N3sCi8nQjFz2rN75smQVTUb4737iTigH8jE7Vt5WzNDNk4vjY5RhmufQ47DEgAPvEHfSZWiRQWUsCwgpw4QLtLX",
  "key29": "4LcLvPRLRFvNqKCs1SX6JKrsW9rcpJTHSKwBUnfoTKPi2BjjYBruRfxfXE5p1yU3qLYqJcfRFMXo2FNga3XEcEJB",
  "key30": "5Bs9c7fMoob7ZUg1DfR61JueiB1kBoNkGEdEYJahrQn5EB5bvpUXPTpMbLPetpBPeoNe49F4G6q2x6p4iDfgWuBM",
  "key31": "5co6zHW7Yy4e6tEELy27gXPiRNuD6wXPN9ynYdLy28PiaxqY6UdqK2NVm634CH7k4n8kfCBdhi2KSPVtvi4D7a8w",
  "key32": "4QHTSPoEZH6CamKMRLtuHB1XZE9VWFWxEse8QNjXpNAPQJMFf712iYcYUHLA3179Ado7tWE7RGyVSkyfo28siyJn",
  "key33": "58Y6BRsAZXoCoZFVavD9uLDSMzcLrLJyYgUcjEjUCSd2a6HuSTpHaZxrXZrhVf15f2gtjR8qk4mSptcPnaR9kJ9n",
  "key34": "31agNoA88UedY3ri5Ksf13mKArUfh1AivETqNN7htEeBSEY4rJfeo93hxyoxCXQ9fT5zYPwFef5hyh4XD3S9URWp"
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
