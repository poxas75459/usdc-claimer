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
    "5BCkbSRHbFa77KuioiZWmoPzUdYUNPcTP1UFWLCFB53eAH6wsoimuNxWFP1k1iNHVpRn1VEFzZJgj1db69bVNASz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tT1zBouqea44DXRcaue6CfnWyJzrKuapHydNMHkEhMQc5zqkn5y9iAVJxPwjC5JzUagigZHyun1nasM7SKCgV4R",
  "key1": "5nw9wqEUSURKB7m1EqdSCJ4NhW7hgV1REFxdZJnZR97EpeTKdwSv2GJnV9kBhyCPTFUwMndZweeHSzE6aFzG8K6S",
  "key2": "3Pw12AAbSVKwHsm6q3G7fBmjWjFDRVcoMReUFncGDookbPSTeMgn3hMVQnYHLj6SceVfwrxgppRt5yMQcWke1Syz",
  "key3": "37EP2QgZgs69qntbrkq6SEUbJqXPVPGuu7dCG8pgJ9oX8ezgZCSGfzghPGfhzNEYdTBDPLXVEPPk9dAYkNKzdK5E",
  "key4": "5xVVgCo1z51tRmvbUJDM2jhcGWKm1pBMb6crF33K9p4DM44h9JTMpTmVVFMGHZUjYeg2Cd8TMZDoQDzq82jJTDjL",
  "key5": "x15Ym5HWCw82md1pCGckSBgNUQHVBLyt5CCmd2JoPqPWwsdLtvrwggrPiKx8AqhxhJiW38zM3QfCiBDDA7jwXuH",
  "key6": "peYEHguipAtdtPv7LQcN46w7cBDKVGUUdbDvpXvnLMs2zR8axw9CxciLutW3quCVbFAmZPLAHUyAsyixrTuaejQ",
  "key7": "5ZTfZEYiroZr49yRus1shPiginBjWSsrZBXBmjjJ3awW77r4LdjsahswoYAUoFJQvqqgd1Jcu6yuYFDnrwLMJ5kr",
  "key8": "2RPxc9zphFgragbhis4eZyAzfwDhXei7uhdtNDiQHtCPCVWTtpZTeZMgu9t8SvnLFAjBp8jzYgjjSWiC3cD11mWb",
  "key9": "AgEdUQvQzAPPSxYtMgXv1hRGtjZxVgVJ4rti2wQzNK3qWsY4DGQtahPHq65E8xpL4ED7eTZpSi5R3sc61JeyP8t",
  "key10": "5y2yLdbj4MwFHhiaAHoPEtGwRJ8wuj1914SU4AXQGcsPG8DNfWtWEGiNPsrGToM6TFnJsGwgNRYLBJ8KTAv35Ry9",
  "key11": "DQ7M4qeuhCuV5mptXnH2yarmA1MbAmgYq6gqee5M7RQQJvadfLtFWRbUHWBvvtbmcnAFgnPo2SQ23rHHdxfLEo5",
  "key12": "J2egtcNQPhBDXE96aAwMUSXpDaA73XFh1W2Nt2Kc9BYUoVW4QvMFqpcYp8iHZRENBMNVRwiVAkZG3LUCgCDbMeK",
  "key13": "39aXLKSowmZsxZyCKVWMzstLPoBdNxrewhsAbSpAjZt9t2KWv5VGiiNv1YrNm967wpLUZ4rNmgbaBuaF1KXF2mK",
  "key14": "3UCoNqjS1VMxnmbV5hkYZ1ieY6Wwsgjy7MmaMjMtZTMrGj7GBiPNCHk3UREvYEZfomA4fuJVQuNiXfJZYCHQMX46",
  "key15": "49mcNNhBhV7joEGBJTQdVjuiHaorrpW9mYTcSWCGWdLVZmyaSy3sJPZb132PsKBQ46FW2FMG2mmtqtdfmmcGhfjU",
  "key16": "3YCGC7SyZ6jo3X1aY2KRMt6URZt9ST6GfBk929BjqnTWEsEFTkSqnE7MnZMb3RzNPEosfQZcgxAWYm9wjtwQZBrx",
  "key17": "5CuU1nhgKVaTNRKyYVVQGRgwvqMKGgLLnv7GzGkeqorXG2WvzCyon8Z2a34R6MKdQjYSwL9eyT8kwKJB1ReD8TDs",
  "key18": "5GsbfkjdGgTwPxkyWEpngtWfQ64f8HMA8YyyPW7tFEHhSGpKZAfttUAFFMJLpfDoDLyR5xpHvSL9ubENq7LQN7Ra",
  "key19": "DXTwAjAsRss4pHnCKzP1ND7v6tpNBT2FHzyHhRf982MjFmHien7uB6dbfs3gMFdvdF89FuuKRTppucVNBXg88oQ",
  "key20": "57YS2eeoEYSoLMr47kA1xutyoE5v7EL41HCKorr3bFoSCZijuH8iVitcYzqAqwQvVqtxKkgVpWGDt1W8VcSNX9ok",
  "key21": "WkJ1ySYKMatYB5Wk4btFbfV2kuauTnaCQ1ndVCaVrUhBLac91HJe4E6jwLXSMRF3moABj41GUeWc5kC64pCm3A9",
  "key22": "37szVP7hP6DbruuhT4vCQzQBwFapHr1bWBJbWfB49yqHNWtL3cewtmMToH7WqLdam4MD7fCWNZrZM9dA3pFvvdKb",
  "key23": "5NG9DeenRmBnE3SpduxdtRJ5Pbmo6rq9iBPBTJvTU6viN1fD1LiezD1vRWZwcdZbxACea5zcwLcyrT1yWckLWiuB",
  "key24": "49F8KyV7nnpJgtoJGhHr7mqs1Brf4WKJuzTCakJS9g74Fg952kwiW71LkMWofzMTTX8G1viUz6TZdGivV3xezYk",
  "key25": "4is78qBU95XcM8nyDFjryw1rmudAzSLmGPwMwFjx2PCcvepmR322ELxd8bFjqbGKwq65cmatk1LX34D2SSBxKrVP",
  "key26": "Z3RsQ3gCn2MSczv1Fz6ZfZRuAjnPYX18FEHgtD8oWEij36inRS7P9CYKjYPWY54kkXE6U7NNcZ7WaHLVuJT9fgD",
  "key27": "47Fz8UMAFDRb8k2wrRR511798ehvC8HKjoBgvqgKNMMDkcLUTBpRt3LMBM6AcjfL2DWL1VxH9mmjh9TZW6nnKf4K",
  "key28": "2tQermyUkFGHTpZUGPrurFFakGJwyPJyLwWjivwwVnLQ6e8suNRtQQjg1C929QM99MQZVryhvxXNUncLwXcG5Jto",
  "key29": "4YkexB4PZLLomEEZB7RgKXz9iEQtBzh8rnD5sRCSTG6eQ3nNWSuhHjyh45v1EUZSSiyFnkonti5PUpAeMXcqFKVd",
  "key30": "5WZwPi1xVHnrz2cLtYYfQqVzfeFBdGnAikybSnMthv3RPxDQWSJUW5TsEGWxQLRTLyWneZguy3TeubTsMyN3KosV",
  "key31": "59MMkay11HGiY2vzKuXCP9z3j92pWHY2kF6YNpMoJcwxqECKpMnUD4HqQmoHBzH43A8hHfyXWVTibFGvJ1ozdBRx",
  "key32": "48DbAFHWB7i1unMVGH9WMZumGB5YUVyd5t7i9HCUZFmiBKo5LP61JDgCagLHKfBAfJsj93j9LaHaktnPQKneYczL",
  "key33": "3drvokaPkt2u2yWV6pFnymbJJHmcE1eVrff4fmYNUt93ECoVhqTeDq3zrWZx4SsGWdZWyVn8GRx2SMrHhUKbvg2o"
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
