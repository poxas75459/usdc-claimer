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
    "4WvCVjJDLi6LgkxVJJyuXNDsWAmV9eWbbf3RTgWovksyCqEMJZimn8doRzxnvcnbaqeX1cxRBzMP8naT9ig3aXqs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58VSLWN56ibvfpiKDuhbXfXmNhBj1Bju4QZdw15kP9jzZfDAa1Y3JaBTkuuakYyggMy4bHJuEwGdRZva6yZ98TK6",
  "key1": "4xSjbBNbcTcq9jpEPTGwA2ainY7FLAiAbvaG2fJZjDiHaW4yb6fgYnaX72en9wL6G9A4z4Mnswh38qLe8kq97BPU",
  "key2": "3Uz7yeViMqpkkKWDa3DaRweNprJPK6Zstfzy2cua9pWBhcJb6mfDVSBkjc3G6xLWypZzeSMQq7frAorGBshi7iNU",
  "key3": "2YUAyZoTbR3KKVsvsMCemcpULyAhphviHvhEwNgNfcq2AGCN1CsgxRBWafttGkWmoU6JXUwPL1ttnCEb4ajprSFd",
  "key4": "DqovPGAqjavATtN77GhcHeitipXFrWz1duGmiM6Qmoit1W82B2VEPpCRNmewV8hdsM5SThUrW1MFiBmNXCvdhet",
  "key5": "5SRjQSqGQDztXM4ZrXxRFcF65aG7NngZBqH7K4a87xaiGXFDEAdzy2xLK2CpJpZWuC618rvXPLoHBa8brEyA4p87",
  "key6": "5yV2PFadR3pcRM3CzZqxAbTYsWFEwUZTY7LNXca5hSkJyAZCZ4dAAijZQFwHKR1GYdbZLvNjZxgu931RDStuEysm",
  "key7": "4F5iY965TzoxcWt2DsnFMvAd5TFLLQQC4P2wPtQZkUP9iW1ypQvyaqq9VH4FaKCkWn2FYWdRKFoZhjmazsxqAGNd",
  "key8": "8kRS1H4FeG3WFiCWRMFUrCAJ2XU6RpgisGDqfnrE1GsBGLRWKqFH6gHjZ3KfFyZSNG1ZecnjE5KFh66yD6tRQMg",
  "key9": "2CBWVBFZmXV1WDYGGZBENryjgSQkBLPi66TCnh3H1gmU9u79DJQSeMZHy3aPAn8WJqRpU6ytmgAE3qikikAH9siY",
  "key10": "y2exgnrnPpNhrbD6xj1uoczxGN3oXEYaHMFx2bPBXqpePAfDdjvBLi1z4wGfHu2da2nE2nEp4CAUgVQhTZEXkGX",
  "key11": "5tJcVti5KyeTtkc4V3wivFFgfgY2VTLpPQGPjQv28kBKr9UWRKfjbMsiewiD3RrBJZQrXXuZ8ukzQ7j4SLjuHdNb",
  "key12": "2mNtTusZfz1TGxG8YeAn6d3LPZPz1sJzQ7VKuaeyNY5M5CxW5WKdCV4GuupT4FFuR3WsSSW4tqx3tddjsGzKdkCt",
  "key13": "58RZFCZc8t8kPdVJfPSdKgCmdsPCgC9TML7vDXVZx4utkhY8cm2mPg7Sk58Dys6ZPXGP1BD1dQMqNFdtvZYcWZH8",
  "key14": "54LWcnLrsvQ9DeQDxCQTqQdhraNSGuYj2Ri1Wjqj9p2dJ6xSf2j184m4CRer1DyWNdL5w2x312ZgjzmLiUE66YDh",
  "key15": "sycXqfAu7fgy6XEZZfFDyBu7AFURrsdKmVuaGmT2UJ5zRyi8VuF54MoPvuhFSyPxRkQ9VaYVL4WXTVckC5faUV2",
  "key16": "21mYNvRLhm65uZymAamAzqGhT1JoMBxdE8v8HGJjiMwbxqy3n93gKbqbNxXcYDK6zFQVRRHooiLiVPE6M5Mkddwv",
  "key17": "7WQhEiRLHEwx1XKRq8ZCAuGhWSpwhfoeU4cQAVFxSUYJSwTvjNXzV6jZi8XqcheHpZwe3tr2kAZPqNxsbmUpiex",
  "key18": "51k64FrBCszGo2qZzaLrrKEY1U8rfSYki3zEyn3LvdxMcAzbdDPr5MAoPBqJP6bhzEe9URUUR6wMJJtsfkvkmywt",
  "key19": "4MF85Gz9i2n1FrzhYnPnsLkZ17eKNM9nPW2oYjwurAugb4gtQJDSVEL7cw7NCzFMRZNZgZHdt1hmGUwrznD5mNaf",
  "key20": "a5fcmnsadUjrBayGYmA21PrNoYWrZLooRbeCJgfWZ68pgB5Qu1BQmK3oLHLybAdvLqPuL1QyJydjaS6CXmt9HeT",
  "key21": "25pQeH4GVFMZQ5DhHQs1ie37d8dGKFDiAXZ3EeMfMTfEmWXDRNUxrXVhDBWHNCJHBZ4deRL3zcHQk7b5UE1LrSbv",
  "key22": "5GSn175QpbMgkRbhYkKsgrk5mWrfXBFZ4QcchHFawsmA2nYPJv1TC7Vik6E3Rg9Ld82fcMvsdMuRi9C3vBUcBMHe",
  "key23": "3pFcnXctiBSMq6Lhe27WdWvHCSMyxzjD1M3xefMDkYTPuyMNu7s2McMYcDzcQ31PuJrhbh7yTL7Lh467Cb7rtmSn",
  "key24": "5RGSyUM74eGym6dhhQRAveVLGRqeEK8QMnCj46tD2negMyAeweXSnNwMQw1EfjedwAzVXU3gmqbX5W92abMVVvqG",
  "key25": "zh39sgmCPSjNssVSBuBA4ZpDMMNosQU9bUduR1B5QvSsq5j9amAZms72zzyeL6zUnTabKdmcj2UmoaPup5CTvyw",
  "key26": "3WKR6q1Y1EN55eFzRt8Peb5ZZKosLwb1iRHQgS8VWATeH1wkFp3rVp5C8EUhRzFkVViDTtP1MmYLLqZQxXYi8jyg",
  "key27": "vTGbT31rrp7vR7TrD1xgL8Xbq7oZ6KVivfFujt1SReVnqYzyX7Vewv6Jm96dnKyTuzVw1ZZvF1NeqrDFK3ADbo4",
  "key28": "4VdS4xfRQe1cQLqMSSmonho4gUB8wBa9UmGrhyZitAAQpXyUyK5hoU18viNZtkYLWn36TbsWMsDN76yBphsVrwE3",
  "key29": "3pDSC6wxmmFhinKDCQA7aH2ZqnwNuWJjJsZYDyv8BRiRHo4ispTcgZVCKxPqjo2qKc43EKxKYty4QAc9YS1GVhFx"
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
