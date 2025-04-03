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
    "21bGFpDakH9gzB6BXvjrsM7QE7UjPgzQdRWVmv7tg6xWyAvsWzWpNwm8fhjsfPoKiB6ZrVezkKLvE23DPwZBGgp9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hzaE6wR9d41gQ95tvSBePYUUgHvZcF8YtRZqkiuYSu8UtQzZmaSThHKvNgendF4SPTB4z2dbLwYZqdSxaA5ijXk",
  "key1": "EoeUpx76hAiPcyudPc1FL2ueaYUrWZgMqCP1HJV1yREzrrXYprWEtGktwi3pPLdUJhe1bfZiAnibNpQyoWqpriX",
  "key2": "4fGw3ywdaSmUv78wen86dZkUrjseoZDzSEcHtX2aZ51XKjFyjUnYBvVy8HTrszv9nHc5W1wQGpgdriYSPGFhBpg6",
  "key3": "2EU7Ej1MMAZcyJ18VciS2QPrSqBeLEWSPS4hmHTgFDie8ZC6yGrWBKa3EfkDQ9QyaBdXtLpQuZkAdW214SeH3wj8",
  "key4": "3MfVgZJK49y6pF8JHLiKdcnwNGn7WhtcqPp5esfTu7tndAsH7FiPQyEuYENsvP993BVGTyYVEZwsMTRL4rDk9ZTp",
  "key5": "5zo6ozqcJprYReJoEQiMvBmK1bPFcWiNpFMwi6r5tLhN7GWNjeYbfxzjiixZzaQRDehfTbZ7BjFxfpRpnSb43sXZ",
  "key6": "28MYwbBoNLjmhQUaRubNbiYqZ5WLDEDEPXijCmrsHMCffbWHEoBuSvRhhtWSoczVc3rAyM1CcLH6ReiQzJMwyntB",
  "key7": "3jvLmY84YfoZXtxxPUFyuv4Fi3Sz7KMEPiYx6stLfSA812PHKMzThzfXfZMsXNdmSykggqFU8vaSvF3Mpqz7C5tP",
  "key8": "2nuQJ8xB3JuQRv2PCsc97HdMa3rDehAGTgLoyPGRNwrL1CepGoHeXGT4dDG8emd2Hx3Y22iuRBJ4jd4T8XitPQ9m",
  "key9": "2L9aYLRnYzHRTaPAzxHtzv1GRXL8AGpKUezYG6PXJ6QsHMpMEaCfjkrxpDd2rDHGkkpZ2BsgF3aa8EKrQ5XeScNo",
  "key10": "3JgkNUC7XrFsFdFkkYJahxeHM9ghoizjstLVDyJEG4rySDVKynAfhiUnFjJFx8LJttK7c7vRLaFbDXc1bnLX52Qf",
  "key11": "265oMYoq9YQLKGNbKTfkAa4kyWXJar1G3a3xcSfbyDMcbHkXrdwAV4KybpZm4K3J2zYJG8uNGQdPi36oLnxDRvqz",
  "key12": "5aBfucgC1LZMPJ89B2aRMEkUYUf7yso7MCaurvweQkxcLLecrKakHRNuijRCuQrFmnzw1ZDAFoBpDb4km7v7SAzL",
  "key13": "561L49nn5gYgd7FCmftLJUJ7nxfXfDqv6JAR1LrQPQueDDzcmS8LkytZuHRaevxL4epC21W5PLTrBMzCVE1nwoVG",
  "key14": "3xDzeiFn7eMWrpnF6vfJUhQZKmK9qnrFHnBDec6V84FmjbMNVUTYUJMMf1X7EWR5hLXLp7mfUArqP7aEoMZjuHQz",
  "key15": "5TpNWZhXUZSGW8uJZtS9eDGMkaGuN5MyPnVeC8GTWzSEbcD2dqJJcbTZUugXEH5wXNchJxiTyK5Qxbvxr1mF1TX3",
  "key16": "3ijzarKUkTgpGucYCEQxWTVhT55EXNYa12YwFRNeQdDkLecxBc8sFCmiEVtfxsUXS9AtPLE7YXPCZnipt11NbE1q",
  "key17": "5zsuMr3RSVsQ6X7MtPhPXWAj7Ju8uFNEmxUzwhURteRbsyux9GatZ3pAEdLB4CHVa1fDrm2dauav9jmfBViUNZRZ",
  "key18": "3bPHWDcvtwV5mKJoibRzZjAe8z8NCuZJftnUsBYFo9fQHsAMsz8BtQYznNoFLtT7VCL3BJH5EJ2EUHurJS7uW4SS",
  "key19": "5YEViDVBxWYN5jh2GMuYJKexrJfd8gv6apedHfmr7RAtUCPYUtHBMt2qV4PYJaKQDVfXkH7pYkCyHw1ShLtTamjm",
  "key20": "57TXZM3RXmhfdjn7ZEmKvt8gGyeoUf8FEgZsAy6v14fJSPWMx5pMSrAWYLDRXL1B3YqKSxxxzcCN5ECA3FDjSPyk",
  "key21": "4Lvff13AyAjGiMRG6SvQqg1377zwx6kPaKqp2kDTUwqpzVWQq6WCjmuxTdnaHzariFAwLTh4xFA6hqEZpuVKdz7J",
  "key22": "2jwBQViXwR2UmDRpbGewfFuK4TFGzDugTC91eET6y5Xv6LSzeJm9wFQyP2WGLugnFc9QmKS4kErgG5mc86zvBe9k",
  "key23": "4T4JMzYbQFd6NkrV3Db8hy3WbxvfUG2UKW7Vu2D8pdDQfyGWNsDiZNGkeHyVenKsCcgi3EESsXZRtej8GJcE3fnr",
  "key24": "2TSJDFM97umN7r1jvJw1MJzpuoy8xhdsqYKEUWBrnR2Pht4h4tmvUubtNewS342V2KfYRvszvJsJHukBhWJrvQPN",
  "key25": "2XgEEWgs2S4WGkYmTpfNSnw7WTG6v6a78hZ1EtVc6JJuPSavWzBZ49UnDB1BW8WFRuMfTKS2anS5ABQnZFB8ZFHf",
  "key26": "3buUfeV63rsJSLzRaZ61EQExSENTMdQWiTBi4U9tZtRc1FvZLR1qWgvxBPregWcZ1pe4eBh3TBpPY9N5RYjHgZn5",
  "key27": "5bL3hirKiEz7KPQgQsi4FJyGwT9DTAeLMVa9RE4WjF4aL13RAqxsDimMEbeXwtYihscBKZmqDYrpgecXiSF2D5m7",
  "key28": "ANsmPKG4hqxcqfvWKnQjSqz2XrB8VDfuWDCmaFfHG66mB4dkADAwviUWUAbs2ESHbNXWgCC65eBfX5GDWi8NzhL",
  "key29": "3BcjaRzYb5g3HkPPikDxfKpUagXWeahiR7ueAvu1BECTGb2QuRYquaLVvqWDuQWFAZLazZAx9K5rhBEFZzvQ6ABM",
  "key30": "35n9SqVCUAsbZvV5WYtFygCqh61M2NtAoXQYfXn47PuxiLbvTDxh4E5YB2FJ3i6Ka3beyJvF7PNvjMDdRVgBWMEN",
  "key31": "zbrxnmp3etiWZKbsYdd298GbUC3LEyF29GyfgG3ZLjXN6BFXtQ7PeGQSftDG9Eoi8U9pxidGiPrwYwxrUv1Q9bK",
  "key32": "SVP2Y4YCuyYsKYdp62EZQDGXq7nDLzFrKFsa6DGELQH9cmrj5ib5ye53c4i5e1cCMmaDvfsdGr9AvSfjbE4zAbK",
  "key33": "3AptuRL8MHtJ6Z3aHDDkTNTSxZWHy95pXBnoJEsF8efjjCKU4ewoBTgeF43yS8hfVNmDetLbbfXD2Cxx5RT7ao1P",
  "key34": "4ygrUoA9wYwF78F73KNbRp3VX9kt82FDkBapS5EXzRJaf4vRmskjBno149o9UwWzUghJUknfZHDFdUwPEmgw74nS"
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
