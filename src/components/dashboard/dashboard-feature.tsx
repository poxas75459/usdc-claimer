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
    "4RW5UD9hjygNf2XPXvyg5UJTP9VtJt2nvsQVnepEThhCWdEtf4eeEG6XxtdTrxtUU9mvNMhYX9H6TMGtwR5guw22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bhoAgrRKvR5aDu5HkmToKEetNgUJjQUgDhdetsRq5XnyuCC5QK6RnT839CwQg84HHH94dFdEhPhnbVFRpTWDBXt",
  "key1": "4tS2sF2uV4VUxfeEBfo3SrMU5dfXRzzqLgC3nRkzPP1H61qZDSsx3QRQJXnhdnrRbX7tYexj5HVNZwDRPNntpXyp",
  "key2": "r21xmhprs3vPevozBZPYnX5x21XGS3Wn6h2kRkQZt9qcr7B93avv4sM4Wm8bNK3KF2Uq6uxTTraS4H9mHPVxK3w",
  "key3": "5zuLT9HZJD8jEfPuZdY1dgzRxUzx8JMFVRkykctTr9hEHLyZHFPcUcvDgHcM13pb4UKdDowP6vYwye5NVuq5AMS9",
  "key4": "3XPhJPX1rC4oVPSCMeJbCy2mLMivDk6BLyFkURUpBuqeefWMUm3Jxwe5aZ8BJe25Q54cvH24QLyjv86cVr9NhXBw",
  "key5": "51J8xmJSCsidd6z8DXRBtRzcKv6psP2oodhuD1BQryx75bTAJj7ecHvWCZXDJUAzTXWg2SgySMroLzupCG8MzrUU",
  "key6": "4grcqmHuya1Hd7bpwLBcrPGwkCxSYfi2oy1y9aAp8T1rt8FSBkSFmRZ7fHAaKJnqrwcNycmzr3xz363AgNBLm128",
  "key7": "2wi8KuGDEaFEcDbpQEKkGBHPgxiVKurdkuTq1CAUXGm5PTBj7jzdNUS531R8jFYFxnCGNyQLtUTJ4vHjbhuZXoPB",
  "key8": "213zgYGzAmNurXfMwS5VGeijV1qG1TApT2AcSTPtyW1QT8R6WiBTjz4angijiRiCVDkagtWBd2EmhRG9gsKiZRfd",
  "key9": "2hJyQpWuUiqJCNLgeXhx2Zm68qyQc3wqyPDrXzjbVCHoNHwHT9q39LGFFcYoycy1US3JvQpzpRb3AQkkERDkgK2u",
  "key10": "3MNW5ukg4DEa2dpaJmsVKppKbkqD96NJ2xS2irCLFj3GnWfJj83yrTcxkLZfPwCrEUrthYHrvvKKYgHX3ZPiMbs",
  "key11": "4gD5akHX38LGpux9Lgs9EyFUi92k7gM4HMo3xK4gnaYZwc8s4MiwEGtq3LLcMbt635bg1qXYp9heG2mrkZrVCjWk",
  "key12": "9gLX59kw2vYq8NTHEgw5gv54egqKNdjYb8ANaBX8DNGHPan7yvp4uUNj1hD4EqjV2ah8eCoEdnuw9BiqQyghyjF",
  "key13": "27C4mSUBj8xt7McCBGzmpzXnopYsh1RYdCyBEa4qngnn8VaCjcwn7FCrRZTiNTazENq8gqyx4epDVRjneHdQMN6c",
  "key14": "3626mJCGMbfGh9mXj9gfaztWc158nYKU8ZYAYzwk5NyzHLRyE4McmEEa1dCW7CHMMJdnarL4eELxZvPpUCwVYyKK",
  "key15": "5cbNEW6bEu5kGVx5JFYED6fJJqj3EoGXfu7bGi1HS93CWf4ZHW7BY85tQ4djWAVnRPiXK6SpDcQQBNWqBDkejJvQ",
  "key16": "2snXGnPPh2mPEKRFN5ExZtsiWYZbGDTsK3S6pzT8TKXP8R76noM1sBkuEBbjAMKcTeADfCTTo4MyhE1oifRMxcai",
  "key17": "5jKLn8Rv17wX16Z4yE4mFx58yJ9jHbQgiG73z9c6ijMpArj1FZ5uBdADoHGuaNeMCmcNkiWV2PQMNetdzuhEmY3C",
  "key18": "27haTnBsHM8YMBJBSvN8siG9DXcxUZBnRdRp2FBnBvxRqi8fhg3VK1LENzx4HnhsHXrwz8m94KXWQJDenvkwFFt2",
  "key19": "5rErxuofgMHxGx1BUYPr64anXMogwN7kFxA5Pyvdwhd7dv5jH42yhUZ1CfQC44UzkEMULFnDb3rdSzJDgSRxyUKV",
  "key20": "4NSYeeGkPQ1RHchGzJhuwXigY8dicNaf4Ypk4EVuaY3kuH6wY8LLTaWKb2ayAZRMhAoeBUKEWKHLkqPiR3S3JjUQ",
  "key21": "4C7EYddTakrWf8C5Mp7U24smdD2q2kj3doxK1stPgM4PjG11NyASxPdJK5ddLtzjBrytbmsBJU9CCtDKsEyF5VXH",
  "key22": "4DdfxdqqjrSV4ospMvpXqY5PoesdnULhe3DugbGyPX8bC6kTDMdb1CVYRXQiGdWLc85dFGvLNi6R5uSrSuAwNWQA",
  "key23": "3cidvPcrJk3gjAz5qD99JGLHfQcykbgqrPJPA1FLEdaYVkDVPzkB5hkToLhrviNgVrNtEeFU5KtuwfGdW5kFbTvL",
  "key24": "21EeCoZBn25Vp8BXPtWCsymK35tXE5JoktHXUx5U2t4RTC3Vs1WKx86ZM1nHhyGR5NWgTDYqgcwYaMX7t4KP4zf4",
  "key25": "Rie2JUvDSazEjmvSPugf2vpcVyZZQfLxhsm4rMvWGkX53Nj47qYeXtkrepwUsQ1d8ApuPTz4pQe9Ne3X1yzTagm",
  "key26": "2p3YYToSfjRmrKzMRiYTog1aDQ9QrfNQSMYH4fbEn2zF45q6VN3rotCL2xpBkXBX516JGEKHc4QeRJo6o9LTZzgX",
  "key27": "5uJJWw3eF8qvCw1aJ2MkyhRg3uMkzTexTeDY9rnyvroG64MTkWA7U8h5NkookygCTywMYGK2soG13x158TgUHS24"
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
