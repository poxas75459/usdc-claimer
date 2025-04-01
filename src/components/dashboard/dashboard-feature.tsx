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
    "LmxWmQbVYZw1181m7XMcEqMYW4M6HXT1A1s3izXBJkyfmLf9tvRwg6ENBai8nSoKWiJ7eXjwdssfccy26R9FtNU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qNn64tmbEyXevySShvDAY4ahUEwGw7bMR7K1dTVvnXcMhgDtD2sV2dfjHFaZ7mLNWPzySCX7rhubW2SKFtXfL8G",
  "key1": "2rSRe4dmdyLZPkUbuUeXLQ2TgniTHd8kwo9ybn9pBKFycGwLLf7a38XMwYnxtGCkpf7G9ifbvVLRm1feWRF8TXmE",
  "key2": "V5TcjraupP9sfm2UUDA4cmwZfbAqVaNMZowvCC4HX9e5LgdYXXFYDKrgLQtNLkQCnmSSkRjZkMK8Tjn4c7s1fiL",
  "key3": "42cTpjwLUGCSh4WRPfWBKEHXUZtsHgpbq3VQBH7b24E2yQiuX28A2qPFrNiNJrqeRw759dsnHhdJ7QHzkfgukZC3",
  "key4": "4jSFwN2v2R6TQu9EyGsHD1qoyhLDEutaehTSLuAmTAZvRmPCfn6dikF7B4UWByEB1rFFiinmMX879KAf9PCu8Kav",
  "key5": "KXQx5fyrE9jEqmUoeNstNUNV5s7UXEiYo1BrPPJJFM7qpocho99Kc3zNpybenQRWz5QbfjeZhnJXpsWDVEwjLjn",
  "key6": "5reM1zVJtrt7CZdV3UbVFTSTe37Bew4YJs1crqqjro6etn4vBz35Yymm21dZJaHZyYVWDpxwYBCCQWKL6Mos4eaC",
  "key7": "3si5DVRcvqP3vDDpAWoeZq49wQPbyCekm7WjWAmT82web8uUMpye8uQojqTWrAXjBXsLSCNJKn7FbVKUsgfmuSAS",
  "key8": "5tk3N2vdcy5dwtkfpP7K1HKoHXTYcS15hSfmZgF8yZzqDYtUYHJ9C82nLAEsnbyLtevqChCMoy2Qh1gSyvBWg6Tr",
  "key9": "WfyfbEXg4HJW2wuRHnehkok9sJW9bYEcWpNRp1RNpkeU5TiXUZq1nT6CRgDJRbbZ6icvhhv5Z3Xi1d37vZqCBCc",
  "key10": "2eCvNC7Vj4YULZPTB2jNqkyCnBkbmQSnDJgHzJBb7A2R1JujSEPFuYFJd49nG1yMmNhAb2ZtuZhRF9e7puqe4meC",
  "key11": "3seGKntxJScPFrHaozDvwT3zxtRLFjVZmvyi2SkVHhHvDuvtabntShaZWS8Twh7AAS2gPS72DYmHV35kHjbgwSi2",
  "key12": "2fVh977svvUjoq8UjofgXhrJB4cw6iQutrHSNCQuwetcZqKHswE6Kzd26g1n9bjxv3ePpX4HyAJ1GLr2tWEeL3Wk",
  "key13": "wvUVwYQ1QA9cUJg9P9kADx6rkBRiQxogsJT4iksaSybzq62SRkJmoxiMppbFsuLCXdcovtAKz9DEeJAzW2hbAxL",
  "key14": "2bF1fmQJfC93LxeMQNLn6B3eehAE6gyWki4TQ453UyKKUCp51ixSks8WnWD4cvCtkgm2yHa8FFS7FncYBesypMfA",
  "key15": "2dvcaXG1ZZj48pzrznVaRC1A6aZpaEmaGS7xVyEChN9BGZCvmRmHPWea6XwbubEhGRNuv5HLMCZjtECrfqbh8344",
  "key16": "4ug3bSQGrBQh2fSzmo6Hy4hV8gx5ct2NbnbS1GQLWFG8NGe2ehLDb3szDSCjQBm4AXRNyRu7Z8333qNqiAs6Q7AD",
  "key17": "4Kw74P7JXYxg23rPCzWNYrV7hgH3ZJbAhxPfSesHHPdnFMn3q5mtFfgQnXYdYp8quUm7CAKFjZCbMUnB6n4LXKA8",
  "key18": "j7eDDvtkxoe3MdsL9uKmyCrraJFvXkBwctetn1FDXbbgfvCzYyng1byhZ7ABHgVJkSxPiivetbryCLifJx5HMcD",
  "key19": "5AtF5H9rhjbEx9WyfL46CA4mPA1Zcbrtu6oqgpduQ6EyQQDYaUJTi2bNpbrADkmASjswuEb9JmSw4DtTPHpiXdaN",
  "key20": "2WN9RVYAQZcdUCDqEfQW1WiReHDGTamsem7SY6qpqziJYmJmkM6nvRSJUap8pgL1HQdQiJdEcJMXFzNkYfSbNRGS",
  "key21": "2utwhPMyNjUL6F46pEFHiqyQjhai7AG82YeTj4WDi4BjKTFrn83SHEeVDPBtYBC85MYTLh5gzDEEo54pZKr9LgUs",
  "key22": "2BrawEQ4k2hLY8YH3Nq5tFEGDM6srB4SvfKuJLPy3dtKVqFnWesSFuM9DoXohFCvdx4JymKEC89uiaiMFsfNf1Yw",
  "key23": "2HKCaGXgxhiXBW9asap6SafyJy7a2ctu27rfM2H5US2Nbb2FFL3XMiRYX4KEDExVufimtiwZyGoTPHMFXTJ5U7tM",
  "key24": "ji9BSf3N1HeqfYixgohxWX44ULQDkAWhwsiMqDr7xLcrHXPnBW6a3PQfiTUPF4eH6eitPSDYeHWioR71qFTUCj3",
  "key25": "28B83JmniZsYurrkpNoUniX1WLsKd5DbWnStM5ofJTGtAqoVqakXSLwciUmj7wNohFLFRfLrv6J5hHkyb87ddsNQ",
  "key26": "2HVLLYsijUDY9P5TDea2C9pcGWE5Rissf82ndJ4tTKW3unZMnAq6b8mHmy4mtiMSymJuvcFfdGHXhzkusm4WNMVR",
  "key27": "56xCoz3Ld83tTELLGcbLuaQc2i5rduY7r4B2WWpW6sCubNgKrkQynhyiBRNRWAHvhwh5yYRbm75v25D1ePqg5PQ3",
  "key28": "5cPoNd96HdaSVXA7srdVg3vZgMAZ7zgDtc2Jkt3LGzwkqh9Q3bbSaWTFyDf7Lab1GxoUDe5Tf9xLmmi1M6A9fu5S",
  "key29": "4Q9YS4Y9dKELeNrGwtSJB37Hi6aecu6CV51GoW4ARkFXTvtLonvbeVH89M9rXhNAkNvMRkaA8vXUd5xCcbQwz4PG",
  "key30": "3djvVy8udC1q9wEGkrGCG3RVF8v33zSrBkoZ4m7hE3W9Kb8157HbWLuBnSBTyRjLwtHnU1bihRr7CZf3TriYKP2d",
  "key31": "23iNtdwi9xWkmGMbE2JFkpRSPqQViiGXxnnHnTpzaY8XFsNyNogJY89dpPon3nDvY246dJ3mjE5t6pcjSf7QirNV",
  "key32": "3UiCNK9c7tTvMDZeA1vZZEesqCWyhmiXsRgskf5kHEZ6o4uruHj1x9LPugEeQjHbH8y43GbWtLEpLqiuXwGTnsTt",
  "key33": "f43qrDeaqRsBMrwT1Dt3PSDL9wTg4bjrJX3wcZTEybjL1HGp2TbENH4e6xTaQfSHJZ1eDPhstggi8GuYQVbhMgx",
  "key34": "4oMeeCx36s52rNWLcqyBmYMBSU3v1boLfS8f96uLUeeioEs8ccp3G4Xz3KY3sNsdqbgZBJmPnHW26Ab3huDX7VJ8",
  "key35": "25GuoWdC3dQuBmKCTm573aetsjoeRayG4hSdz25q7khN4WDHozUFpvD3Xf6AXD6rG6kGqmengSo7aSU1VGdktv8u",
  "key36": "a1XGL2mA8Sf7dSspNNEYVQo8bzHFE1fM4VJmarf2evpR9DLsuVTpN9kBSySHtrx1HNsbakjmRQpdhHcdifP9BwP",
  "key37": "JpJBdxAaGmuWEmcQtGp3LMSEob2jhSdCNT545eE6UPkXBFuCH6VvmspGyhJtACntkSCZXgTm6D4gXqR3cEtPGHY",
  "key38": "gQ3Yb4fwizQzfAWpyd7qBo1GGpQJqrhyg8tGPXdv1wafoCZipQKXFp3GnhX4JfYhD4npCp6c3E5pYj5q1xw7MTP",
  "key39": "3KCbauKy9swb5fJLca6FyzV8Ew5i2ZaQXd8GyZSc1yMBP99CZLNzEjh7X6EKJmcdaN78Nwa46n8Qj6uGmVc9Tgt3",
  "key40": "F4V2SuVJbX7BrtAENibH2PznCJEc9Z9isNqAL78okpAUcu9ntwkPc4ZbnXvLxdKiuSizPi6dnwv1HsSUkfsUUaD"
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
