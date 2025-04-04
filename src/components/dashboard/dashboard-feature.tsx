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
    "2JUvUAbgqGkXFNCRdMXMkMnB26dxF9KYWaz3rUQWYK59KBja5CTC1aCBvvZAQQZfuWyJidGdSer1waMTj1sriB5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HaeZs7e49bWPmgyye5iKhEC5WwwgBVrSKUErHFVKNG8miRmL1GQTNSwMBuERh2g7Ub35ui4rGLr1MKa9qCJgSF5",
  "key1": "4od4vMGqvVLLzxz2bhTAxmvWBGkxDzD25cZGeJsnRoKHwrtBggzjXyWvEeSE4FdBKNV4iuvsVSUje6yo497NEmTG",
  "key2": "2P8YDCXff8R8bnD4B8b3vr5pmJAYmNhs8nWtG48RGtHCm2GS2RTyyybbgFsCeEFxhNvy7ppePa4rntXvV5jZBwie",
  "key3": "5BAsFToBPUsDPe41Sbi17UtaXdybsxhNHFGLTZFJcbL6Ssuw2azR7BZmqsnTvsX5p8BQr6CWkLXohFYxnCTUwaiU",
  "key4": "3vYFuh1BBakbgt9Yjre2wDBHVR52GTKWJVPtCWV3CtwWzuMdeP1n7fKgQzFxmJ7PG5xtVq4JTEJqfEtGWnFLyNQH",
  "key5": "4jS5i1naGduFKoMbgMEmtTYzvdMWQGWCSP7CUVzN8LCmMYJQ595rm3ZBEC5PszhQeEEoKCFWMUHk4uroyn7ZHoU7",
  "key6": "UnWVpTXhGaWQVwjqb7gY7Zrhc4yDT6Eq7qh4wp3CKJW53MPKKemUGnJEVMQJH2jLqbFoWJw79FScAaxhmuyRp2c",
  "key7": "2q2phhuaVtx9pru4NToEES85sbVjJ8yd8UMD66UiTpkkak16bdV4gsdnNhEnvkUTioDzmdxByp7rkFXNd1oQVXLn",
  "key8": "gycMHGTiKkuNdEaV39hrRW2XUZjr8C396bfp45P1VjstKyMYfA9a5JX4b89Lp1QhMVMCpmLMFK3ZgrGuLgtGVTN",
  "key9": "3Yrzi9wGoH3QWV5qT63XfZD8qyRFP5vmJ49k37GXu6eEeVXs2aQEehK7ZWrSTvYEGn15DgKzsVwAH4Cju6HdXXcx",
  "key10": "3pELFJPDE1Jaqdewi9x9jEEqQDPCXbj2WLt41rYiVaQPfbePbYXURRa5cgoKAKRCzmuR8V8n3Qgb8JtfoKfaHrFr",
  "key11": "5Yeh11EPknXTjcXf2rPEsySeaXu3WVJdhmYUGQXrotLB8yDdNdHtNBJzQz3fNFD6YcDptCk6XvBydNwswy5s6Hku",
  "key12": "5ffEttS2a4wqaXszrug1Gxrim29pct8Z77yWhJ4TEMgHCwGVXbiZNdcU3YtDUyw8hqgLnawx3oDbf6Ln6GS8dwTN",
  "key13": "4Rwx4aw5MBBZm1Kp6W6KouyZTb8XNG2RJiQrGKY8dktm4TyZgrwjKSTAsr4yoiqhMDYpqAp1EteA4XKrvHPAg5tN",
  "key14": "4tbytoQb9vuF5Swdv5igxpq7tg2jfpwPxsMMwNSYzqNNjgjXUcnSBTrQTgNrWerfMdc5T9WMRFsBzrHv8uQebkj7",
  "key15": "nGWYM18VriiHM7iih84QqxJqRGTeZzEEr9LYqppF2n9aq1PTBXn2HMqN7gA3q3zYQsaxJdUkU4a3R1Ve98WXZrb",
  "key16": "267xTmKXQRh6tKMch4n5RbjGAZ4AGaGfudUhKiayxEWxHjNLsJ3VQMqeE6cvd5BRQ9tdnaXiBfiU5LmRYSErKQYw",
  "key17": "3uEK8d3ZJk9twWxHZBCLRegXGuqqCVVRgMbYWgYwUrhNvk2ibkhmyn3Ba6q1ktNXcishh63Ec8Xiq5Fj3mQWKbn7",
  "key18": "55Y971aGCCMBVdqkNLWuBQ29umT1oKYuZ6QHgSM9zd2ZHDemetq2hGKHb2xPtBLDiNNUsMZoStnCjjzhZfwCr9Fw",
  "key19": "3qwRnXk3i5jQ3sPXLZC2gS7YUJTMCDsMbA1WSezLHWtezo41oKtzyTZDy2ewwh7aZ9KZ5VCJe4wyifHfYUmaLZp1",
  "key20": "Aw64J5obDhUrffEgSaQJHinTju7wJ2CoH6hTcAvvwRMiFQgdJB43SypCsjQR5wZTXunvLDcgRm6v5ZBPWV9ZrhW",
  "key21": "4SxxV9km22vcAUFW9FF6uXH39PdLNdXp7XebGzMq99C1XkqLk1ezuSy81nwcoCVcdbyHuJm5o2p4KB9m88wFUoz1",
  "key22": "2NqfHEpvLNk6GD5FWkz6CN1dTy1EiuNPYzpeDWnbwP1c83oEWv41aLLmyxYGKVV8kj7twqsSHAs3R82LwsLtkGdc",
  "key23": "3uE1zsuW7STZeoiAN2nsK1h3xsF3z4W1ELy727zN7oZvDkFah4n7uEAdJgJcvs88JMGX413fGQMV9jy7cBZ8thA5",
  "key24": "2cPRYAuWT8i1f2cd143TZ8RWf1db1fczV2GLhL4Ujs87qkvq8ERvh9Y7CtqkW124LWU3uNzdYmmLVvfgDayo2Lcy",
  "key25": "2KAFjoFTfVohJpXdf9HR3YR5xzwGXNY9sdsT9LhiNwD5NANKnp5ewjnH5JciHgEYafa6HiWLdCqxqCj65gihvYMz",
  "key26": "PyMcfdWLipJy69jAG4aUm5c1ozFe8LNk8AhypBAZAn9y7cr2qSZn8ZGuCr6pgQ1t6J7fE4EygAS9i5YvqFWjJ4G",
  "key27": "4PP3vXtTF3JQSn3ebpJj7DhYzBqkG6PdZcrjcaSaENfJzbsNXs6NbAaRJck1igULrW7z5AnynWAa4YBFMBRhr2A6",
  "key28": "4Vv4afUHbqWwyedVTVH3kCJbrjS5pxvZxvQFHm9iRoYmc6VCKAgz85XZtnVit8wFe6X3NtmnkEmZUYj8hcuXkKFw",
  "key29": "2BooDcA8rt5if3dZ69QWq74CsGdNKe8nCCS1iEV9Mie9VRgGL1xDxx4WAs48jZ8eyQMcDnz6JgtGL24r3h98BTix",
  "key30": "31rSq8EP9JwjyEd1Xk56BrNshKe4AWKiiZryDwToXTAzFBpAXuSWBTyLTs9hXNaSKKujNrCDuR3m4FBbNXtRosUt"
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
