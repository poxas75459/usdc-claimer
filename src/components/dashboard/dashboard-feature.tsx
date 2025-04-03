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
    "5TvKsvGV5YiYcmKr57SiRa2EE583pJX9TL2SeDGeiHQqDC6XxemtMqpJ5Py1bb7S8smsiVvdfYYwa8bawRx4zxCo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ss8XGXpeE1HKufM5nGLs1ryBimCbd23Fif9NZwuu1e2U6PEmujwEvoW4bbpe2XHmWKX7kZF7TtoEzBRCHSyveN6",
  "key1": "3UpFJbjyAYyf6yi9yCEbqUjWfMeRkx4diXGZJgDDDWUs2WwNLBnpAv8kPuNEM62DHZTyWEFJzYdjAhEr5RvddnQ5",
  "key2": "39EGgG9goTFNr9eCXUVxs4GbiDxYk6BV3m93A53qR5vwhDfy6Rxtc53vRM5fPz4VCVSwWHuCe6a2VQ76ameSiUC7",
  "key3": "2GKeiQ3ThEtKqqvrxucnn53W5D9u4wyZe1sAaFaMpPxr4QgDMVx9C8Rtb3XTGtVnfCjarEVRqAoVVhEanDpDbnNX",
  "key4": "5o8SdcU2Y8QVeScgVsUu9YxqxrfXwjzVPuferASAJkkzBGfEgkLZyk5iMuuToA7BsRLW55seSR2r3wbFbXns7rvq",
  "key5": "3TUsFyFSu8jt9si3D959vZ5cD6SwpRVzVRLxpZjfKQNZN42nPt88B9iY8zZTyGMvzJcSWf2gcPvdufPMUk8vC99k",
  "key6": "2gFyDF6wfaCEmsDTmhMpBDBrQ1TgNvV2xDdZKe9k7DWxJy6krHixG16CjRAcsep6unytqpBk1V3VaC8NBBPr9fFU",
  "key7": "3pwyoaHH7Rk6wbHk2DSpbaotjhcrJcRABh8MAwXAk6wcPkuR8nAEnfuJ1hYYQWiN7DEF9A85WzggEkRDDYCavtSJ",
  "key8": "28fpNcYAn3fPjCr3NGkCnNft6oYzZx4xNS6mZwpYwosqpWEChVqAU9Vm4piumywxE8k9yvp2d5RGHSFqGTDbb1A9",
  "key9": "ahD9cpoDADv6caUMayfnAKN25RjYkvkxosYE86qQahpZHYS1CikMPCmfTRvZoTB8VsfHAtbK72tkhpaQnJ5X4yL",
  "key10": "5QCwBJYP8D97Qh4t56CiqQ8UE1AWxMeQetbyw7xdAuJh7ED7Q5ufEn3MWkxZtkC6Pbe1qs4zLEePBPqsp3p6xCCL",
  "key11": "38mRLp3s4JN8KFnGKW2u9PYHix5baLQUtN69tu2wX5YrHH5CSTGL83A8LtN8jBxeg6h2qXn8FEVHG2P6L3yZbDk2",
  "key12": "4Hs6DtRGTW9gCsVXA3M1PXw6aXvzSyUEN48DvgskDS5RMWgDijbKcxAvEuZucur1x8bjVQvNvCau4znMpjKY28Y9",
  "key13": "2AvLJrci3y41aju5E5VmEwEHPrFApmsJ5dDF2ECfsDwqsaD6AxHRB4kw2aFB2UwY4xGG4zbPa75ao7e9WF1mggM",
  "key14": "2fqdpsrhEkSmUGStgribayniSJAR1wJXiFEupMF2f2H8LLY458ku3839vYbuBviXxC8QZLrbKfR2k7snaUJiU4bR",
  "key15": "22eD8xGbkCrbW4w5xKyJnUgtHcsqqTZw2MisxSe5uXCzEfbZVBeWLZwE4ZpRPmP8jH3q69ftgrREcETZsUfyu1xf",
  "key16": "4qwcUDaeLak2kngSDK7zWK43rM7PPonXoHDQ41R21GLR7iHdajPkRhm3vZvQRKENekenrdA3HFwtx4GwMyy5ZNhJ",
  "key17": "2CZGh73b5yheViQV9QSZPaSC8dg32wS9JT7ZCcydZ2HeqRvHwXxNcYCxgqp5nu8HHcGt9cjG6fLsQFHvoACD6tMb",
  "key18": "9GEVfPhRWdwPrMrygCurhkzAYMoPMLJZcTe8MkpKUzj2SFp5HeZr1R3sRsaGvCjf3pvzpVUqxSg3GT54qSwTcbx",
  "key19": "TWY1mwKHJtVsqK5A1pgCGPrbP3zUJNTTmb3EEYGihXk8hHYH4h5nCfrux617i98yoVojPZ3oV57khzcqthTyh6Q",
  "key20": "qCqFupxQXTMDCJhvUzfpeVHyV7jxWFseU1Myb7Ap1Yam3BQKjAWz8vQ649i8ET7yT2Bt8UCRnEwyKgvr9TwYRTJ",
  "key21": "4qEUCDYRJcFtLD3u1oDVgNM2C4C9TnjGzK8ncGuW9GR7Yj2iXa1ZkoMNc3y6x1HJkcfGySTChAwCkP1WcxEStTV8",
  "key22": "4JRcgnVnhkJ353pCZzpjicjpRD2vtK2TMV1nbJGHdQ8eVRGWmJXdNHrfRU8BFazj3FqG5bWZehPGsMWoQitw8EwN",
  "key23": "5oXsJhg76UTYwEVjhABqrcGRknxgW6nZRgxFpJmc3uwr5SmGVSxtmpex66yqySabKcQNWotnh636NGdCA7v9GvLZ",
  "key24": "5STobesAddQwaP2ntXQVGHkUq3dbev4di7oBQ67JLDCh39zHMRkeYhoyF9o3kvS82qukGrFCy18WR2bHiAUqNDPa"
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
