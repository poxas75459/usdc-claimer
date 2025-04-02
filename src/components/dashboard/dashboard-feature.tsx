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
    "Xe5iTBhgRKPUQHaNXn5Fqvo4bnrc4zBhyT597RbzApn8PwatYm9FvZojYUcj4YHQ6kyYwRKhVJWArT71S1rXrqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "89mD3qsq6ZFtZiWtnthYEFCKxiod6sXq8NJ5PM6H32GBNDdUfNxnefeq43hCkSx4aM6ThgWegN8figY3Euf7oXn",
  "key1": "3MiuscFyQCXJ38CLewVWzbAXofa5YvK3mcn1u3asVS6522ikD9j8JadtWB3F9nPXPK9UxUwg86yo2VDEBTfk51QZ",
  "key2": "42iwRtkegsq1naqJHnpB4ZXRiWnzkDBTB4YmsSzVzjpmq2NEepYaX5WUkHTuDknhSQfGcKjMMwADGejtAyBg3PKt",
  "key3": "PGx3dwyP5fA5xEB3FoXwXUNyn9A7WjYayU77ebqjswKhd5bRP3dHEvWiDjtg6MpNZKKwZ1xs4GdF1RvHMoR88Jr",
  "key4": "GKbXpSSHpbunrM32njiTr6f4ddCQB1gpEre9EG3qmsCPiFk5hy7v7jjx9UVZ69jauxkEFFEppdSU44cVSSX7mJL",
  "key5": "3VhqPrCzFmywWsKwKvUWHFKzQm7s2VM9igdTFGaPiTXcniauJJJL8iAyy3Yn8rM2iNHwMxFdJ4YRmsNm5LvnVghj",
  "key6": "64DPY6rY32S5BuayJtfdHX32EwrJsbjv3W5ceD1ZuyoZ9do5GHgUZzbivUo6ghFGCBCjyZuQzVcx9DA7kExSWU5e",
  "key7": "597fLWPE7L6ATmYXCupobPT2tJ4juQemzxVyopMHgEZ189mxjU2A2Wrkz7Bi2LqBSKZnXXay1xZ3Vq4aMh2eTYoV",
  "key8": "2mZLNhxP9QV65xio4jkdVejtQjppk41TbxQvriqH7XENSrNqpUpfxQ2kwNYZ6f7MJDtTvktXV8zQoS6yUtL3ivw",
  "key9": "57s7M7PsLYamF7beBGRUzvY8Ww9SdX84yQq54DNfLJix5szEMj4pXG5vsKZevsBC5rzsDyyE7PXnyTtUoB7TESD5",
  "key10": "5oQH7MjvucHDrdLCHoixeotBtj3ubVzSnfwHN5iUFB4fHHTb7Jm5WExGJT3Qc7L3MB4UNAAVLmRjRxLoVNG4ydv8",
  "key11": "3kqcrdm7ijmbxc5Fm8ckt45cWtA1YSkVy88Ru1RLWwSfaVqAFGMW7afL2ueYGrcznbJWDNU4MG87vcRiXeWcHD7L",
  "key12": "4dnys9U8L5XpQJHTz2HJPw5oSUcWZSLruverHvE7HN9tstWL7RisbtCsDzrtwtRfhpLcoFjqcBght9NiZW6pZ5pE",
  "key13": "5Z16Ws6eNieHT7EeioSxmaKkbfYmAPy1JnrhofQpd5DXTf1zharMbb6Hfb8RYBedQZunAtFtyg6AsdSi8EV8fRoR",
  "key14": "27nJNep8PxdckEnBegz349btkiPUesoyVEsvftA5htK5dZqHRqEC3fWvDqa22MJYrWMuFNE37uVbGaDZFnAJWzeX",
  "key15": "5ad1ZqQ8eZTmdae2TQaat3b9hW7uJAkUTJ4pNzRJ7hdqXAXvaUPLvnSf8XzSiHZqmDkfKyvPeCjvGwgsNNWk49rX",
  "key16": "5whKoZxmy1ECaz3kcZp5mJSBYBPPQnPy6umQQZcrLwKimhcRma1QVEpwWhguuoDxQp4ehU5RkzdBCdE91vUEyHkf",
  "key17": "2t9covzcFx64kk1YGVkA1qnCzTkcqK9dmke7SFQYXJScquL6FCAv1NRtim4DgMyAgdKMt17Bdv3nwqdmfsBtYiGp",
  "key18": "yq2ziE6EDRWFi7HdhpR6HDjJT3bLQLV432TPTfnBeQyY96MG19zTf7ZTmFUAZkjcWMuk2xSZjVi8TXK37VZ8fPH",
  "key19": "55SQAwG6f2VmKFsfR5Ytqc636rkvTgMDufhPCVHx7v89ZMogGzcDBmQrYsfGrodpLbcca3rXeYSZNGDkn6umh2u2",
  "key20": "2wj6y64HEfBNtioQiC48YZgxjC4KXhyQ8EQ9hL3DLSJLqzWvBmDoMpCMGvJ8V76SBHZBpSh3KpjVLsPUjAbZXPf2",
  "key21": "3BLrYB6QGFQz7h1wu2Gp9ET4dCshXEsRviyNNxx7YihPYSaFdbHx92K58np32yskwbFkgcjo2kf5SEdYhTwh79Lx",
  "key22": "52BnpMB91gx9PsuSPTcpQ5X65gXaTs6hj7rs5bqek8Eysz9u1dM7KBmbfHy9Zm4KfaFYTcJmgPyoWyfcH4MCwGS5",
  "key23": "4eQboAHXxSLKWezQikWMid2JHwN6drHtjivxHFzQVMRabTrz9FHNkukaZTNQoZs82JCWAaMJFhj6H2XVtziugVAT",
  "key24": "31KUff8R8rLktgHQtoPWgoSKpzQDyjfMoheg5hRXuMGdGd3fv9TjcWsHggDAKATnsc5AiFxtPfthYcYRbk5bcHKy",
  "key25": "9D3JEfa8iYWQKPkRtQQzvUjsA84uAG4cixEz1pYgdNN9V8SQ5hZGMQRnQCSMy7sv6pdTrBmWwU7UHXhoRZ9ur6P",
  "key26": "4EhGaxRyaQxZYo5GE9zvdDVV8dbpkRZhUAyf3GByr2rSUXSTLHmBcQto5FJBjgSoQvzmmnEqzdVGjPzDh4w94ftk",
  "key27": "3WRePtLqD6U1z6sd1CNbW98nEbwX2wuiAhzcUbQch5TAKH9hXyu97wVBqnVkoRFQtzT7g7dq7mZhmwF3TZSAPhya",
  "key28": "3U7S6eCRAZP1kCBFu14epxRiKVWKfUzHUqHDRUWWhAH1PKBXcJtVaEoWPMRjB6WzWPSJKKBEiXA6gSwx6dZf6fuE",
  "key29": "5yHe7D27sp7koqxfsKqEkohSotf1D94orKb7nvLy95ogLjMMqxSd6D2BnFhaU4reZYTpaGj8rmde233arzUnLbDj",
  "key30": "24pcz7YHfMK8NfQHXvPV1YRtrcuVoKBu8m7MSnKQVW2q2J3hM29T5jJRiHHF4b1cF1DqeCe3QCE7HwQPByxvCptk",
  "key31": "2EsNKcQ4rfQPmMG5UmdhADE2VTTLhMpjGosxyxYfguVj7WmVRKWNNfxdyCZ9QBX1UGovG3tJomGP4F7BkEQa1NpL",
  "key32": "32JFQ6KNiHJV3bmMbhv17gwHzt52y7qHjLfHLnrLnoEdmpcKE78RDC7o2Qshb6iqLMdvHoFXPiGQn3voK4ziCSwp",
  "key33": "5zwVjm89P1sbksUEsgRFzNJmoXdFtUUAWYtDW61cqVAmNL2prX5edvNSwbKvyhYkG7pDTXp5rxUrmt7KSksoPKq7",
  "key34": "oNR2KGsYiWkQYKb2DEwVvdTHp326WefV9YVWoPH2LbGBXGiv5rxRocmKR4PEmSB9LY4SLCuisSM2AEeuDUs562B",
  "key35": "29P9wYr6ZrNwYFBFdeKJGGtVPcXWzpHamsdQ9Q9JE7F1pjw3PNh2pr2ixxxR5xTL7HJ9MeTFsYsqRJPTFu4QyM2a",
  "key36": "5riCRnwxGpzHQnxdP9HzkdWKbmiW51pPJP9a7UR9X1T1iHK3W5dggkmS8KmFLJ5m7GPTo5L1ML9495rgy4DHnPqC",
  "key37": "M5eN573Fe2eYMvo7okAAGyN6JxvChwvhhkvXtLjQ2VN7mMjUpdGYNzEjydfR77L5kkzqTPo1F83XoS7voh22zEG"
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
