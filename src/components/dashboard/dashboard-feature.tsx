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
    "5NEmDVNRqcrRdFJNKJGYzC2EEU1HZh2jzJFq3oQo2hWaCcg5jdRtDVaEYLWnHg7TAPMiGyJcVT6uS56P1fT73HGV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p2jVddgThqb3JspajUxsimjPTQFMScd83zTMJY6dGdrdN5zMPmN1zRvxVhr4EBvBgWmnPVF2WB187vnbHZYW3GX",
  "key1": "5Bu8Fc9N6tXTSoo5bqyWuY5S4QKSb1XGgRddHNgWTYr24uXn49EFDXstg5uac1bzMqkQNwNDaNbwXhU2sfWDgyUa",
  "key2": "2fHQThysmN6BaZ3Z7KJREdGpwHyt56Yz9FGiSvAeta46doHthrqPvg1cWMkMU59HUKSkZxG51tmyc4oqrkf9NnZD",
  "key3": "45xxbWoBbH6usAi4hTWmkpLx9ZKw24hMVGMUUXMJdovcXezVUnX3D9im1R7h3eh7qKuN7t5V3ivGrNowDpRs5vom",
  "key4": "3iMzb67TpNF9H4ywbcYToYcPw6iSWYDno9fGgKqBSEfi3h6LsL4HdhtaM25796LhKS9WSkwaT4RewtsrDM94mxdq",
  "key5": "4pTkTfW2FbamrtikxXS4Y5Mq8E83jEAYiAmMtwfsxBXo6y3Badkqn4HFt7YvEUW1Tx5f8k9G8W4PtM3TdjX2S8iS",
  "key6": "5WwZx8LXS95fcaioVxAAb4dMen6zrSr9XYdL7fCf3WJpBKGSXRTxMyWkJcpChc44WAFiXhGgz92b4Q1JjzLaBv7E",
  "key7": "5NzUbPb5VAcgmsHFbbhQNBb6jQVSnv93kqTbck7iFnegSgrVRx7PAZR5rW5BTb8C5Drtoyq3g4evCXQrGLFsw4Tq",
  "key8": "3qmdJmfj6NYXpfWRMosDgk29pTG8UdX5RTtX7pRifnmqGNSCQPmbHTg3YHjrUd4WTBZ5vxofkCA24oMXpZ9s2DBo",
  "key9": "bvfvDpu1DuZiM5eDGdcix4d2M2wFLZXtT1AhpFLSKufxraJJizJfWW6fcij2u5FDmvMwvwUN95aX3FxBkQFQYWB",
  "key10": "EqkFVCEpcabKydawceXYT3zChR55VLLFdUxJgSjRiZuCQNeno68Hk9BahfqPxeLGEssiMS6n7x8bv6QFze59uhc",
  "key11": "52gPDRYeRkAgNfwFkpbKKuEUAdPf8WGSjGBC7XGuBQmWHLrvBm8aTaLznfn2vtv1iVsFPf79Z4XNfMBTjb4oVZzN",
  "key12": "BhP9waZHNmdR9ZeS7UoK2eAck9bupKNseasrdVdSy6msEKkfhPRffn4Knybcoff98QaqM2EiNne7ThZ9st4vDvC",
  "key13": "3jbZ7KRLG9Xv4ZhK3ZUkWVKi6KfyQPGLXM2jit3pCfbk8Bjz5NY6vLS52m64nby6Z7XrenCAnprBL2S7BzQoM7zn",
  "key14": "22DsBLFLgyPNrSWrSGmjAMeGdGbB14KFC3taA9Zh1ZmgHr6su96jvf38eCRFg12woi4sAnR5tCMd9NThYvGNDphk",
  "key15": "4smHP2KzyB5Dyt5Wwqg9CX7yStt7HC5Qvj5SUdunJiZGgyEy3ZVb8oxg5AkB372oYL9GyQyoV42wnSggbY1E4zgh",
  "key16": "3iCrfvrEv2Y3swQX9eWtmHiRno3T1cZqSeTzyzfCVwmwyy1HbVSTQGY7ojPisP5d1E2dHhbvEpsCdDZiFzfC8rtE",
  "key17": "2rjqLtGtWvajvpwEk6cTyQJHdX7w4HSSwSTuQRDdg4JY1k48vSwYr5hcx1U3Vbnx8Cc59tuMQo6nexMpaqgHAA38",
  "key18": "5KfJkTiBe8acoXpA4KMmqrCLL9ZfHMUrHmi371Eq33CRgW7LLq1sxzw39bAJWz3wNkqXvidLTTFi7mrqkbctNG6E",
  "key19": "hMM5CWQnabwNmtKqn7zsAqitUFD5f64eP4nP2twdwQDMnKAnE96NWLpjitMxAoAJjgceaNiJQ6C1PqXdMLTPh7E",
  "key20": "2WPVpSAU5F3n9CWpsaFBv9gENg21kTNatYGP51AQbqf5K5VucX4Gnu5rFSpQYkrNRkEXDUEsy6BhyRGGqynQEJGi",
  "key21": "33JpA59fePo7NqLNjBrnnCS7xJvAup1ubKcR6Zx9w6C1yBAsh2G5eygcFnvX3wHda52sNE1E7TREgaCPdSovYi18",
  "key22": "2M9iQquE9VAGbiEGhWxdCRvKa6PoJ3qia6ej96qEDPwvFvMjkk8gCAijn9tK2DGyM3nebM28L3zHR39p7KaFfn3x",
  "key23": "5yHb5ZWrv7f3o32yjQr7skU8MRcRR3ohCpm6uTKYbcFxrUio4eUPDkAQH7ZwkaVGYTofA6qStJtd8BU35F9gXLaH",
  "key24": "33Pbt6CcBwuWVbkvbBDt1hDw9XQRuEDsNYbbi9YXZNBtNbSeTsMhsTnUm2SXXTKFuz19wNCWj9gMVawPaS5R8PNs"
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
