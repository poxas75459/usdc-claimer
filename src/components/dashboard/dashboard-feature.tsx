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
    "2Jc3ykwmj5fNyM6zh8sqeyCb9E9dRv38gAPwwZ7juk74tZ1V3azgnAoEJtps5ZNqNcoZd9ErzyRHpr2TrWceNL6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eiqrzx6eXTCb5kzunBhnc9MuywJnfTZWWQxnh7EUbFy5dzMNnAeUWhAXPfUB2Gg9ovQCsytK8MmgQJQDbfy2Jmz",
  "key1": "4EJPUUGJ9AyoFUGx5E4GxfvjPZFZHbv4fRw3hqGpxrBsZHejrmK2S2Aom8e8fVPD2jbKQtc1JHRAn31m9XKTZJdf",
  "key2": "2Km1BJ8pfwMxcihzR5ucR2HexbVQdXC9QHSFHueFjiRt6RKn41SvjAMrGvCLz3E9XAe7BGzEyGBWA5M64T4fgS95",
  "key3": "4oTUsqUsxVUxb4bo2N8bu5833aNH8hah6C7muYvgnyg4VzJpsSjYndtmSo76kV7H5eJrRuv2zyr1xvhL13gE2DPt",
  "key4": "2q56ExWtFgvStjhQszY9j94w4C6pLTjQXXbawzS1iGT5W1LVJU8BrFnRM4RcCAVPVVoAMFTYATvjhTeRDSMwFar9",
  "key5": "3DRcTDTNdL6MfqBhS2S7HXiqSd9LGb4Mz1GSwwF5b2GMp6cLTcrWQNviM5MmcNeHX9bAKZ1yxFYwfZ4jufXFi6Ym",
  "key6": "4movZrWQkyQsdayxruo4HiJqx2YWJYFFH9NkUxuDm9ZEhUucC3nYdqPxqLxjJ6cmZhJJXvTcCnWvzpvrFoZswgZa",
  "key7": "24oBTnPmXHA9eTaF81Q26vqASxnSS8jbWhu2B5FfmuMMshrh3GEkBTAUkQRqjsfCQaxbY2MAug1gsSARK5f1NFCC",
  "key8": "3o1aaAjb4m1dYpxrvDW3n1146o3KNuDVmAq7Pv2kQ9EhNUd95HLSpGoSrn6Z1FzfAwnmTHdQyCQbqK27qaUPxSPH",
  "key9": "vsR21eLjDn83rN7FPCyqbAiC4bMufAAD3uzBEqZhesAFAJpLnR7pvNAsWLvsvVjp46w9LMgCHHgHd4AhEUcmejZ",
  "key10": "5T2mN3Z6ZfzVYmpKSusP2aArDssZwkbkK3VdRA1Qqqr8iQvme12gromCXFfN6wmhAkvbHk6yGGQxv9iEyJveYVgg",
  "key11": "2Xp4EXdNEmwaUHfLWS974etq67ytexVfXZb1L5ss3FG6JpLCuBZe3G9nD1etfzmCFDxQeiHS3KZvBjnwKvvyQkxQ",
  "key12": "37fzK76N6mCm2rW46nUAgHNVEuVxmAnmiAXYM12mBJuyX2SfaYmdVHmh3njTkba4yrVQ5Bcgeh1MrFxDwEDFWs76",
  "key13": "4nEyzoMFyp8hfzTB8Tn8kU4dNSa8rwmZAbqEJjjT29apiZSt21VyJqkM55Cv2KSKSvZcdswrKGswL8axVQMXXzZL",
  "key14": "4kTzTq43EjhLKHYaSP2KsVLhX9DkcCTfgTbgWxexfL9PNKBd6VAEvma6rVRVg6UtHMAMmCZQJ6KCEhEn9u1DcTC3",
  "key15": "62gn3vvFCrogjwtqPmkxyKFV9HSE4XiJqpcapPy9oXh8Ec6rY7wcmqtsq9g8Yq5yvppgAMvdUxgtqNqPDgBX44KS",
  "key16": "GXfXGsgi3Co8bnFXCxnJttr8DF9xVMs4VcK1qpRiAUzRPcKc7nPz5W2rFrD5CPTFHGA6Q5o9GgmvztMWjiz28n8",
  "key17": "2yF718KknfHGFget96vd23KKeVRk6ZyCVQTSFsN8xcEJZT3rd8319CeW5Gc2snB55qFYLnRWt4NKjNCK2KtpvBn3",
  "key18": "3g48RFLMHqFCaHbLDXoqUTcmKDYaiwHDBNQ4ZAnJyz1QmnfoMzGG4BdTwtmh3QXn8bHHTQiWu6w2qJfMXvrB2o6X",
  "key19": "3J6VLbwhMMQHSn7J4FFcDdSvKiaYpZS8aMW3t2yUX3xGB8oHaZTYCPtag9SQDprgrQKV9accju6XUAm5nyQsndhE",
  "key20": "2WmJxuHNPhFTG4yAkuEhoaJ97nDVx8bu6zB314nKfNzpFbtE9S4ms2BqNXKM4hfSr69rakGe83GX9tfYm9TotEbA",
  "key21": "44oP77AWsqLD7vUMdCJFSijmbuJozRu8LTvg9TbUQa6rnuqNkn39JK3V12qav5Drg4KJd18Wc7peGDiYuTZT4wk9",
  "key22": "rAJXkA5sirf8iAmjeS3XJ3RjbRJ4Fc5zGkdu3YtEiNtyA593RmYccip3GgVwtr6ebvZRHxEvHVLpzAagP1FZ9PX",
  "key23": "JzfwvDk3d8SPGdrTtKspehptrgZkaCFtp5DtvUREQrDgxy8RznoLhFQNgnWDVxmvPas73GJxnHY5ighmN8M9VPg",
  "key24": "3NaCKYo2oaow9k33T5iJCyhzf25rMoH1DZHejM7EJ8ZbxMNaMRPTTtojA3pT8t9xmhXdcqTuJmmz56tSU7MCY8Zz"
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
