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
    "2Yr8FVG8SziuW7qF77nxFaas1RwsXQpnU7tA55JJJUvhuo2foJQ5rsfFyQuYURoMLT9Q6n6LKC1zmneBJSiF1obs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KKAd3xvyAmQYsbvWqjdvuikXGuqozEmWkmMw4C6ZMnWqR3ZTrm5fRzF4ZU7trvTK8ieJt2S3ZrTsaSR64gQcbcc",
  "key1": "23zow4uh5vCttRvChmdnSWu7TUBKk7YicNFdwtNZWnJ5kmnkpXpjsew8dkpC6sCF44KyFMwDHzM7btC33KeuGMmA",
  "key2": "36m5S2VWrh4tGBR2DAuGtNxGQWWAMqXiWk1RchZovm6n5nKdDPXoTMVzdf1prBdpemkqLWzDzEiees4MFnM7eR6a",
  "key3": "rA9HrUoz1R48jaJjHPM6K65HHyjiaXv4vTzkajNvULpskWYJq1RoT44wLzEeznaUzELdDQHK4chGzAHE2P4NGAy",
  "key4": "7ZGMJGQig96aY9kyALVF1MXXjT4Qqej5SmqBgnn82WMuyXAaMBECGDCoSWoP6HWGaCVwM6cG7gexwDcCtPsn6DL",
  "key5": "2Pxq6C93AzuPzgSHHhoFkdcuDeqkVRfBeLeH9MwevRFN2SjRNGfmM4xazBTJT9Y2488MdASNe78kcnj4LdNZ29yz",
  "key6": "57MnfQowSMVNc1VAha6soQeXoBSUNbk1KbSPd6bXusoo9mKsVEV1HhCP7BxNfe93w9TfjPMCkynCyRtwWFyXWLwj",
  "key7": "3nFpyGpBVx71G1tsn6hTcq2HidCRHS9r7bpDTskgi3BPiBmzhtZqAvaCGHwa5mP5LtbJmxPmrkK7K59Md7aZTyFu",
  "key8": "4aQXRyWTafzpC7uang1jiJLugd4Vrj9H6y36Z5TuFyqFmv9iHYFknQqqmdvGZYAxzD4SCr8cD6DBRdVR2sA22ZCD",
  "key9": "48DEoUewZ98aaNRRqVZzGgX8F48kHhmsoyPksgUWZMWdyZzuVo3Gezq8L1ffDCwauF35D1fbhJra4ejAfmUeeQzF",
  "key10": "6oCpnec8yNYeRt7uLp8YWKEfL153fYaahD33uK2qJbaSzA8oCTQZ6sA4DuSM3dUeseujGwiA8bsaY2xLvi4eGQV",
  "key11": "2oZvAzGm1GYAj1HNc2yYrCbG8HzxcNS9FTSTeyZWWxrHJzG3YdD59sFkN2Q69jNofQUV6dWzUCy2rLWjyCqizYxq",
  "key12": "6Qt4XEDeQLbg7RraohYFsMC6hvSrypcs4bsMAqi8dtkqLVmnKXqKMqfT5WMUNh3idf7JC4ARGdY4sZeBaUpZkfj",
  "key13": "2TG9eo69EdvWAnpZZmoAQZ8JM3SQ12ocRuuACPkgiLXJkujb19XyU1hcQM5SA57m3YcZqX4DmZGwEWqqoJcFziyd",
  "key14": "63XXchZ9XSANFBqfgQEFxuQXfRozDc8hLYAUFDFZ1RARbWnSrwnA9mWqAm3uvrktvQC6K3QcLLMw964pfSq2Bfn9",
  "key15": "5gM2JKs3wrh3P7c291xifR6nnTNLaNsn7oboTBqMKL5F6VsVhJtXNCosiWnA5JKBEa6Ug5FPHNXAKkJFTu8yJKCZ",
  "key16": "4Ugy43he9n9GFXxeL7hu8AX9jn6bTDUUrAMREX8CA9eX8GkyhjU4rMuR64pe2YZcG3juEZ9vrobzXYMp3HySkPeG",
  "key17": "4rW5bkYrrC2qS8JDtzsgM6Az9G7vJzJFPyJJT22QNEyuuZhvUenHVqptUc7g973sok6TMTCz8AqKo9gbV7bjniLi",
  "key18": "533DQtjN9pvyf8MyzWxjsy3qE83ZQsRmh6LcWABxuADPW51ZW9QjCdWWLuhMUX6vdat4EN1uGaoCKXja7Z9uD1iW",
  "key19": "3aKTTpUseSzRMYeuG1XRPZrdU1psJJD1fQLZdFoaskkWmc2L6mth4ZgLx1anZJ9izGAtuT6Bc3Ww6HRtLicf5WQx",
  "key20": "4SHYxS4vYeHF8ZfRhGWXyHLEUCbUdq4gUGs2HSACVoa7e8wZxuPm6q3Qb4qgDGmcJcBZ5WLEXrkF11ANzwfhopaV",
  "key21": "6LAiRbijEvi85LuMgF6DEAQQJ9Tq48iGaAAQXKMG3iopxYYnpVX1oCQu3h9tfy4WSfDpreFqQy1aqCKJUVWHrAC",
  "key22": "ffQE6HU68UK6JQZ9oQfuVNyJrGeoguBbCnXkioPz3R58sBU4897p2aUpvUNUKL62Ctv9RdC3cZQz78GPwNbjCCU",
  "key23": "5grDcb3Dto2xXY2pur7J6vafaJuDSqEvwTkw7wwt1WpPwbrM9K3yKxTB5edfwGa17B4ub9nZPcCKLX8p6wrauFxz",
  "key24": "5ot8ZLY5q6NUZMGbxU9rudvUJNHV1UE86yJK1aqc4PUMH2tmc3fGfRXXCuhgwaJjcNu2y29NS4iUdyUcw8mBHBxB",
  "key25": "4uLRwWjEbLVHZsYsmawMPL71KXV5MWCvmcg27XN73GzrVU5utjPgVJ47U28TDoo7rFBa3pH7RSb4AGWQiG9q4sDb",
  "key26": "5w1SfgTM2RQ8sGgHiZh8zWHAB8e9KjddFhm1gBbJR5RFS7tJctRdPUJNG257KAbzyjSWY1Mkvx9cDqK1tG3Ya1a8",
  "key27": "4pDSGRph2CcDMiFDjjmusBi2mshbonKS8u8MYg8yxAY9oa3QiUXu4qKfnqqJj3SZAY6QoCBiHkVbBDCjhjhLXk9o",
  "key28": "2VzdB26Ra6txwaDsh3AFYfxCi1pjiAWdYPrD4tBQWp4UJu51jxfEbUx78vKz1u8QnVbfoF3yebnXT6bnQcb3SukL",
  "key29": "5QjCgXwjbbg8HkvqoLeRp41h3RGexziLVkmmQ1WtUhkUXahCaTb6aFgWhkFykjB5Hn2xfUrCWBY5vLTFZYxZ2pSg",
  "key30": "4cpJCNZV5HsBCGRqirK6MPVHBFoGzxoKnjCYnHVVvxhAo5gy1tee13a7smYWRiW5BNZJVn7trvcivaFv3j7D3BrZ",
  "key31": "5Jy5Ktd1YKSPG7KwfMG9QdGAMx1ZMZkdnXAfa5qwuaHjwiPhr7yvKnUk1GZJx6Vj6rviyVQqg41djYFiSAQ9JyGP",
  "key32": "4rub2tx7n73bzB19iJPfctosZcovCuLHf67X6WRVEJdr5DxPkM5NjUMjThXk6dQgowZNUbYXdMqmKjXCmuzdVr3D",
  "key33": "2ZYz4JMN2qG8USQYYnfWL23ad2iLMZi2M2b1sRGHgKFyLjfTn1gf9gZAv7a5nKDTUkyNUBRFCmmtRJBUnScNid6k",
  "key34": "5Tr8S81wFtnB4CisoeaiDBz53Vunvq9DsvM8FRFVayCbS6hVuRqcMBfHAxFtTSiw7845qY1Wh7mzzd9QD2LGUwkR",
  "key35": "4HVBxZA5vVsTcZxay1qSnpiXRwsgfcCsg7p7jTBdjBfWFrbtkgCFRpLWmzz3kknmDgxeKkEEgpLLFwPQbDr15JQX"
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
