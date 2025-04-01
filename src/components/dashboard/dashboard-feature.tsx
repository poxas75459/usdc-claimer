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
    "mxP3CKGWFbEHk1PzspdfpfuQLzQ9q2iWZTCpdwnz8jJRVrRsmFQpBhnrHSdZB8p19ebRorFWsdczFcFY8CNxeRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BN47djL9w2bP4zwynJrwuHLsouPj7hz9xZ2XzrApuAHkdqgmQXXUxadxzPvxNMV65ZDKj6ofxBhdRNXRDQQDKUA",
  "key1": "EThDhNS1aAfWmMvVrNRDXuj1itJBAggiJ6pK8TptoExAXyVoNKvxCVcnMaGnjkBuuNz2mV2d6eSQTjs5BiF2zrG",
  "key2": "5cw89ZWTUvL1PCDAZqAwV74zxWmGf3pNS6N2UoAAXftyLyL1apv3JxUA54Ffff9zK3B19mmJjMj7nwQvpQNCbLDb",
  "key3": "4EbEJ6GKeRkSb6WKmeygjXf2JttmdwaNbUBrBGToAgSr3fAJEKk3vGeLZTLsRfsqjFHuqyTsx5w3UzHQgibtXXCu",
  "key4": "25QsQ56VoKTvf7vCS6ye6JW85ceUERFCd6psWEUPDCW44DipzHGM6imtRSaDmb5T3LVQC9yCo3rQpBrJx6drtRvZ",
  "key5": "11E9pXqSuzDkrmb1uNbgEGcbraxaBWZCouGbs8YgzdZGTDD6JnNuD3TC7eH8oJLPJG4sa19yMpufjWx6uXtU5sK",
  "key6": "2BgemHwR6BWvkwVEdTVDszwHwS1ULkQm3bHsopnNXTdT13Ee9Y8hhbcvT6ZDvLphFsSHFWRRQioZNNd7tDhpS5i1",
  "key7": "53moZPEGc19DFoerhFwqHJNx21e9iTvAoUjE2i59kviD7HrcwCevWUSnGKPWssy2TtQQfvmvSoBqVicDWNNRRgus",
  "key8": "4xz2gkp52esu33MFneHKP72Yfy2pvwXiRXyNgV9bQJWrgr7N93pgJgeqSdmdPub7BZXa71Fb5511MNJ3FhmPkyJL",
  "key9": "XWiDRCbpSDapMxex1eRw7oPHca7c1aCZvJ3KTo2G6ifMdy6Hf5PXT8TJ9kmDtsPKn5Es2oH6eXndNZh3jgeXHBc",
  "key10": "5MU8fSE44XTU4bJiv8eHPSCJoSE3fhA43PzFEiVyzsQ6w9sFH5ZrZJwhpQk486FCnTJHaX8xiqwF1MJJeXpipxbQ",
  "key11": "4nVabLAyh2qZmPBZDFawcMK8ch2x3ez4pjSi6jm5LWu6ZyN6WVCFxEXcrgzj6CRzHgaMhET27LEisC7XGcg3kYkR",
  "key12": "4qnJQNeaCz1336WBb97ttR2rsscAFPmghW5KnQi3NrFXs8rVAtySfyP2VEdaEsAWgJpVP4dQZSMNLJT8TBUckhGY",
  "key13": "2vunawyTVtY94DDkbyXZRHdmBDsGs7iTwAsQ1C2MHrrohCun7ac25SeHVaKgGCVPtYkA3Zze34JTm8mmqKa7AFY",
  "key14": "5Kb7tDPqFFHjobN2eFtbfpVUhXgQVGEZz2TFAmzGxfVF272jeUYnAD4Q1MdWyuNVqmQ6aD26knKgexrQQnv5PFB6",
  "key15": "5dZ178mLFxtaZQ3KVSjb1bYbmV2DGbRkxYcFqk83hXhbkxtZ9QGe2E7wgdHQfb3qadPmbm3RYTYuSqYNSM3Wqib9",
  "key16": "i1CDX1hxMqohpgBET6qqjvVgqaXpqUiTHYZGbQrEicT3He5rvrQjByN5JHqoAEtqpEwhbGBHBFbZYNJPj9Vfed6",
  "key17": "TZHgEKum4DtP2ck8DHzbdF9Cf8B34zx8isCqyXzJAY3Vusj5FrdMx4PfoKbKmVwP4tvXaw2XaCaK9WRUEyNX9Ra",
  "key18": "4Zs7R77nfnH4dTrCmsSip4TuYCFWkjHboW61GfN1onnaSEbjmZ4DeCBsE5qDNBwDhZrTsBo7Kd25y8LK18eB2qH9",
  "key19": "5jGknFfxB62CAwLWLdtUfnAbyRNtUCMfR1RbdPifKdytCecZHRhSFtkrkEZ5n7F5QAsxALTWGWdbF441cENac7vV",
  "key20": "22ZBb1w8k45AxajMsoBiW2n6FLV9UPbaZuQ288oEoWQDR4iGQUogXffVEynZPyYTumG8QgMbDdVijNSJeVs9kA1K",
  "key21": "3QyVU7YQUqUkrXYT3GdMG5wr6Ko1bgarEauB5saLCKyVVxe9RtkJxBHJbNDnjGfTuT9DGTSJe63K4XvuZxYEBsZY",
  "key22": "56yWrzUdkxDMXXMaWYY3igsszSKhERqFMamXGYgbG43soYRdTZAzrPW2i9zcMijUULotbYMAcNHw6xgF6Rx3aMWX",
  "key23": "3J2DycYs414EpZKEyiKxqHFbtssN5GAc5kvNkHBaC6ovXQ4MQhckypvqbyjZgx41WnstXqxAekETyj2kQYSeS2tH",
  "key24": "3DjM1j2vCaAWpB3KxuzQqFt5sTqxxfXiKs6zunAqk7yN8jFNv4vBozGXhZzrGHC57LP7z4xSiB2c6tqo6i31KJjy",
  "key25": "52QBoJdLwgawGBwvDYDGAMM1hSkTX34RCvZqT5XV2nVmNPXtVkZrhqManQGFMt9NqH7BVRKfkoWeR6QjmbcsxDoL",
  "key26": "2YgK3pu9egX7voQpeEmtw6wkCXXNErr2Fm6zdEe1wRa5v47g8547DRHnUWh3T4iwUtuMkcvCBAybimBS9DQ56h3i",
  "key27": "MvKJ2M4FFgp265xWE46kkTNDeNb93UfmQEdUt6UFcga89APPUesScjFhPEiqjXrshAvYBW9e1LERyZnoDY2CAQT",
  "key28": "2fJrkVUxvYCEiYdCxwwJatp8pWBPXd2MxQEvwSCZ35WsijcCnFfewR5VjYnk1BRGJwz1CQ6kM3bu9kbC8EKy6WUn",
  "key29": "4HqJsHgG7oyPTQbHDyoiq4f29UragQGaySPcGrzgpXbcavwU3Jk86y9pZ8fXWGDwGRgyvHF7PbkDfBeczqKBSLAR",
  "key30": "nJaKVzuYzvz6fVrjVbRtKrptfi9DozKzztd27QJm8CBTDPErpgePUitUz9u9UfBT8fdeHpmhtuDNWifWQXfUyq6",
  "key31": "2aCPdc5q9DAHmHJEkjkkrkyii8x5Rh8eNGStBRjMEJPQPYS5A1Urx3C1zEmMgL4ih8TFw1SHxKExFrR5REDVWDi9",
  "key32": "51FUWpztL7cqTH8v5kGaBB5EThyP1hGGHATVaaZChXG8g4ZEVBN2y2znXfWZ2dbVfiobjdWiw4uJFPqduhgAGQ3p",
  "key33": "3jTqCaTpFSKjW6T5C9oqCHAt2YpppNYb6CiXMFaRjZcSkqHHmUYL262FW7ygu5GmhRwx7z2HDQa7WkGw9gFYz7YY",
  "key34": "34Ve6Mc8xd7oFHUqdihBqQZdVm7zDE48BHxMGG3zW31fKQKSFnnazi8BxkyXcqX7JmnGusUwBnX9U1c7ufJaxbqm"
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
