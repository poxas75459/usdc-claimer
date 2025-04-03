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
    "2c73DiPmPm5QtqsG7FczqKHtjnKVVwtSUDYitU68GeEMQHqas7yJGwg1RnDxiErwoDXmaQLXcGAkFPjrRwCMLSqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eVcezBvsPQCvb1Vrek5GUbYbkW6gJrh5cokYqHWshJT7s9pt5dJzQvwyRjzXhd1FmAWoXk9e8omdRkbrTuc8BCx",
  "key1": "32kKWCXVQ2oRy77hB6GSHRedBeZEneAGU2QPvMuWcKLgNGn4py8yAN6SWR8Dw6BGQsMy8EPW5Fiqx5KVtcEyUK73",
  "key2": "4VJT2t9su2Yu4tSQfCi8WMKUKu22WnaLHtRj6chQL3htCcnnPJ6mrQKrKa92zM2cpvpiZPPf8zYaWDRQEVU8eaEA",
  "key3": "3PLd39RniTxmAjrq7bVNsC7YPPDNLWBxC5VBWVdu5sc1rFZp2BSdYNsHtqihewYX16iTmALSVPyeFCpscGZpkwJK",
  "key4": "3QMDcERuCXww2PwjxhNde1GAN3f3FXLYGXxYghKxK4PFN8S3pueBwtLpMQ8ZSKfpSLpQiyefQzMMcZro512ZgTVc",
  "key5": "3y6Q9kQbNK1ig9GXatMYDJfS6fGjsA43RV1KkTWzVRrz9dNfw7wzKGiZUeBMxf29CkUVPeKywwkh3wcocC3ohjek",
  "key6": "27KfjDWbbDwHCho7VMrd356jqQS6CRRR3d7FvmByKUWsPBs843ECXVd4Hbd5FMihAp3m2DFNWdWfuajBvsfrCK6U",
  "key7": "emAdU8WekzzxsqZn92XLbb11WtFh1HFYWLTpaMJiha3Qy7Fg9PXAm5f4hGuqG3m5gf2H7iC9H59mq6SuZhJB4Fv",
  "key8": "27CvUY92moxvt2QkaedbpRMzUyRRUPdxDCs2oZnSMTKQTSN8XynVUTBa7pAHZ6moGqZdGnbwD413GTkkeJcjSiFa",
  "key9": "4Lvx5bwEK8FGaqFm3QLmf2LKW9yGsRhwxC1UigZAkg8Zqux2iTzzd7TdAfWsEeuEShdcRbgGAgDJcTgXREggn4PY",
  "key10": "58CHNnhAbf1xPUQ7bJvNuYTuh3YBZVdGcFmLejQrQFG9C8tErUkufTiRjpX9mLoEiGyzpUNEmeUFTewZxTjBQrEv",
  "key11": "2EkS76KpvwMSfJmjLumwya21Hf1Hz4UAzJtqxKqWo5NQ7mXPP6oGFbZfJZRUkgGgdS8p6p28hsZXZ3onuPTpz1yR",
  "key12": "RgEvaNtXm5FvY1bAgw32VqP9KZ9g6Sqf3cy5nde6jAQ25qV5PpsuUgEE3V2hcnpsxD3ggqMpoMbKgjr9wGvk4u4",
  "key13": "25zxkrSi7XwciNoixvK1uqSuBmf6w9kRw6og1bQbPSZPhG2kJH7rGg8Y8vMoBNXFPujcacWHwWTsb6MNtRgrK9eu",
  "key14": "2BHWMHMgbeuie1Lxe9ZJyA8rLkq2xPHVNSvBoLN2XSaVefJvz8fBBk6APyDg6tMCVdmNPjpxcEe4PvDSdgFQcKjH",
  "key15": "65FTbZ9swPnh8DwTGxrrX4zdLVgS9us8XBEDxfL6YaHYKH7CJVmqEMXy2ZnfN6LCXxzSZbzWNPshX8XNPQYauvMY",
  "key16": "2UCckNjHpih8tGrMEYnjSCgZaDRXiZgMEDUvTboA2zSMvryf8AC4aXwec58MQbbVfZWZ4qzWckU7BduC8Qi6QjBY",
  "key17": "5ASwnDkYpvF9Lnqj3wEpt6LbSpWQbL5urdnKfnUMnt6oLFTteig4SEJEfxP2gJ3mJPwUiKFDYNV3PvwLKf4eQ58S",
  "key18": "5XJspnUaec7rR9Jfm73KVQn1X963oo7sG6wvoFujayzhw8AZF9VbQm2MUm5dHcEfWS3c7s3XUZp9jRbj9Q5dbEPP",
  "key19": "4ReEfuuoDe3kTSjiyhzeWmVqBBfpq8KPN7Bt4X7yHkCqaLkhjaa19F9aAhbgcssZ7A1JYdH31tsnwriDrTkRN3Vu",
  "key20": "5FmPRfaLeCaBiiY5EVopRUNiqoFJPwqM3o7GURwbam4hkRJHgzU9x1QX4P4ZGL8V3toiqiAnjE51ncwRBXbEP8QJ",
  "key21": "5Yssqw6HXAVgB8RJFv5xfNYQQtUBWa93Z12NoqhfxfSuhCDywSrecjdoNMku7U8mLz72STgjavhicpMkyXHFctHD",
  "key22": "2ewosbamc4jiVMTmPW9aHEpGh3yY7WXWEEuMZiNTGSWRzi2eKFn9vTFiXwb1H99NdbHd2qRp9qRjaWT3s3vRv5nG",
  "key23": "5jUCqz8DCqynz8NDo3hvaN3NrwUS2c13S8YiNhL5SJsXQRf8JhPuZLcjcufSHUfM2q4RCkM5xUxbJy7ssdLcNQpJ",
  "key24": "4URA2Dm9AcEfoevLa2J8NMcCEtWutWeEV6wFMwBbt1YzLfDvWooxdw2tcsyJBeSWej9acuztoEwuBGRAd5PQKGaW",
  "key25": "4dTgQijwqnPeng2d9eSXb6n9E2XHu9pLS7MwJTCStfvCWFUJ2tK7mZFdDnpLgQDUWTysZsXegUFPASE4z6xKoDDe",
  "key26": "4GhVc2NSWU4ZRST6vxyCEUeqH8UcUr2aYJXKCBfdKS9GLYTnfqAtS4Y2viBfP8vm65XJgGSLuAYUcTGEuZyjymWh",
  "key27": "2pmkATjMZG3sSuqhtKigFzRwLz6oVCVtBJBorTDzkH1MP7kV5LqGtMAkfH3FY6h97GkpRC2XSbygCiFCJECgfxcn",
  "key28": "3DZHUttLtiwiEV8JGYTVRzYeyKyC7SFnx5YkEyq527QH21xDmYZngMi39RTicVVoeaeQifRit5Kqhx34ByWmVRxR",
  "key29": "3rJLn4x4seE2FAZM35c368Ag1TzZEank9WwM9Yqjo8vCAL16JYLWcKaPkk99GmHswf3uHmcUaxzHzzaqqYMQjo4K",
  "key30": "38QajDGz2AYZop5aPoaBePVj9AjEcXMqwkHBoTPkPDaerFK1Pup3zUCHgK8oU7pHwXVf7oZXSjYoWtXBfpm9ybDd",
  "key31": "xd91YNiKJtFHFKA7vV7wdce56NiBqLGGhqhvXfUkEMfZygQWnQcBXKyYsfShidFiZLFVQSJExLXAUv11gMdhQ8F"
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
