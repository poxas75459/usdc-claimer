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
    "7qZhEox6wrBbtTtmNjkX736jFyagzMgTi62GvJky6nTVj6bgTUEZ6BYQEiJkWfWnu1Ssfru4WupUTNknq21Pdhx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UfgL4xMrRwYUbj6CZvPZjEUngDQ9TyGQVcM4Hy4jcG4suqb61gVx27copq6NN65kmNwSSEm1gDiG27H9KVQj1HK",
  "key1": "5rdViYpoBTNKdw7T1xUWnX3eAQmqK7MLrK54Y3fXRao69kTkxWiQ4vnf236kp3cvSXLMBuY4VFHNezwbEYgx58LT",
  "key2": "3EmttuBqAH4NzPiC5Hoe1i4pkMVQNxC19WssSt1KpDH6vxbEgT35svzLRMkqCkPYbyi3rTvgMHqkj23FxDM82QVo",
  "key3": "9FPND6CwMiK1inSmofrqA7Sh6NeaFyFXaFSq932Dsd9C3Mqc11rsGViauSt6WfjKYUUNSvLUS5K9QG5edYo18Pt",
  "key4": "3w8jqNfVkGqaofjxQtvzUBZFjqibzT5pU2Vcq7MVWjZn71Rpy1U7SUYAu1HA3CDMSVvghDfSt5x2M14Jh9t2vWtt",
  "key5": "2jduu4BJ4CZBHhfErdngjyDyPADCWgT8TKDjbwqgjHzVQEoqkJ96wNX3C9mvFSHjyjcTjbjNFt98EziZs4N7X6pr",
  "key6": "56pNvvNVcdUwSgQFFFmwXKnyCxuJjd6YAdzCnz1GKTfytr49Z1kvHDgtbMa23BJPS8jFTKRWouTi8x7LTM9XDPMq",
  "key7": "3mRbzioW3HMwMizkGvWKFbdh8odAxQKdCFCAtWfNhJEvVhSjK5vtGvLNSSankPPtJra5Tz3p6wMxWCC5YfJUV7ps",
  "key8": "33EgmCyJF2BKBeiXbNsHJYFfLsHGDdVEjsqn75uZpfwqrxQCsujtS7JGbVAU8jMGPgWZM7SdVnBQYMDYDF8ZotQb",
  "key9": "2UB6mbFUTUz2D8RXMxw4DzAo5qCMRnTKevhrMPhX4GFsZ4M3q7bfFBSBuhRqN7ZxeShKvU7Db4f2qcMrLP7fM2Tz",
  "key10": "WKjjm1SvBiqCsmBGGDNn21jtAQ87eBRQVP3Aw5AFofVqaojzjzooszYUVjsgmUAq9Bq78XcjKbTniRUY47BKR4z",
  "key11": "6551bX9EdedG1jbEuNTKgB5z1zdwLhvcoN6TCebVdBT9UsnPHo854oXoCwJaCPvYfkjGuWX7JeHrjVQ9Vs8EDvAN",
  "key12": "2ywyTMhPfgVmEzMYE3jSmMWzXahLwN3uCvs5Y1zMQe1mNdsvJoFAgcVueti2F5JJMkW4Hyd7BFBaBziHNhBToKLq",
  "key13": "4wozPq3Q5Wa8HJXob1482f2BtRG2MSeKVoH8JKYB9ZBpCAiB1AABeuTHZDjfeGXAXCpHLKSxeVuFvkzpUUm9xqf1",
  "key14": "42Qp4P3zQBfkNpqddKnrZLC58jRC8Gao6esT5Srzuf1koHmvStSD2cWLVwUdDNAvmJ9bWUuYGcL2GX5LT6SLXC9u",
  "key15": "38KYaN6LCqRwaqmJtKfyYpsGJTWuk9hDv4W1eKGBtyc2vuZdqupJs7TjSbUzeS9WvwN7QHR3RjP221E5jwY6pJy",
  "key16": "3tjvjQEjeqGtWoa7MKWPW8uqS9oQetzZoUg6updaYRhM641aS4bgtnXpoc5ipMFifyzfG9zn2WNCbErwhAVXW19D",
  "key17": "4AiPBTFjtGzXdeNexBV1oB4KJd3FNuyUoj3EgKCXKVsRJUe5L7xUGsq7vrzJiVBHtYdf2zeRHYR2Zg7qGCgENThS",
  "key18": "42k1BbJnA59oG6ro7djcWw3zJ16Vxh58WYnvhGaJbvPUHKLaFsLKfrAC68Uh9GGAqGRmwozYE5szmSckxLsT7Qmd",
  "key19": "5xV4KxnH9XRxLJ4f6SvvoHtDJwgquSwtSMeGBE9NeG7otAD5H2Xjt3Ekhu3yBKTZnsEY92qAmyzCSe1D8CSJD7NH",
  "key20": "2D3SqsVApnwZoCNBoYn3DXqHcnwy5GEYKmaGatAiw2nS5vK8nqAzdsk8pxdQ1yBoJkuJcWAoNfvajoHhprkvXwFY",
  "key21": "4whqdX63k2Ut2Vz6FccAsEKtEAC5EVvpoYgDqVgg4PCr4KXo1sAh8Bg6kYpUrVsc8kdDeU1QPsyxmob7aeVQ4z7d",
  "key22": "mZwgLii3CpXpy9cTN6Wn57UFGAS1LpoAFDh38K4o3R5stjSUFhN2sz2gSuTUcjSfjrRRqQ7PRMeqrr2DtQ1ssY2",
  "key23": "2A75qqsdksbZGa9ziP58HFtzbCGyUM9fwjT6DUi1oB7z3iPZ4dat8opSKhLBcLnG3Uc2FLxcemuDRbH4PK3cpDp5",
  "key24": "356UFpoRnzvNSBCiUENxrt49SEsAD47EpsFmiDwwk48TJ91dRDNWtxPKfE4AXFhSbH79W65FjawGpocJfXY27UMK",
  "key25": "3PfYKhxM7u4d9iuq4oTmgvuXGVYmATorEbuSa9V2MHpdVS6DtikGHxFj7dmQvdX48vAJTauU3sJgh1KTLszdXhe8",
  "key26": "2LCGx4Khm6BaXQPQHCWiryVPYX3Zzg7szTzrdCA2x6wmehDESShmc8YoE3H2tcJrjaS8GgXXrYHpvAX9B38ctW7k",
  "key27": "42KfhqQtcNAbqhGGfqH6Gx42i37XYASXQMN3ev29nvPGN3tGbttKCNEt7feEgT8uZsrbeUBBKuqu88o2AFxCmSGg",
  "key28": "KFBEVx8nmYSaLQCfKoM7sMDcKUYPLpFXmGNsW9bybVfBsWfAbZuZ6DMHHtX99Le3HS6FKPtPoABGuznJvNAs1jS"
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
