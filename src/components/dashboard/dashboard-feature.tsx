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
    "5cRch4444K9y9MS5XycYfRjU7Ret34B6Nsw76dxgMpzqMKbQBNcRYLD8vknZm7315vovyPzPqYoMBv5GEPX5u1EY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PBMgsQqRGmtc56vaDsDGVjxzYrq5bcKk8xRWJmui3WhTi1iKjQ1ifzc99VUzyuhL5u5qmnjEeBxGpbBgVjDuBcr",
  "key1": "64tnrvBjURjFRx9Q6voj2htBJyHYbPYK99wrg9juymFhbQDr2mmG8anq1orBg8U4PjFgfYuSdMy5ob31wJGK8Bxq",
  "key2": "2dWyK4Ud22bMSus15vRiyi7U8T11vtqzFNkXjB11EZ3fYY5gJ3oxA3ZztfRBnENmbFsKxKLfwxqcgeHDR4G2mJrc",
  "key3": "8qVwSwpPooUXDJ8XRAopFcbnwZ9Zj2NRAR8vWcLuxfcvHDdytN6cgYKQH6uFPS9jpARGsSH6Dm8Zvzub5xi74uC",
  "key4": "5d7Ue7rrfQAHNB9Pn3hoAYp84cMhSpCjNPAZST5VsKKRjM8WzR62jkx9URYXW39ZGu5KAS3VxqGpUfqFPuCnHj4p",
  "key5": "65ayaGZZyfMRQGZ3Ua3oy35i1JUDs7MGZogsWkfFrqqwYYGw9WY7n2QuwLrgBBS4uPhTphzpmR33p7zy9rGjgpL8",
  "key6": "c1LYao9xWmZJzDfHfHPNcbJJsPKxbzUZ2XbWfevBK4Uvt31Qi291AR9s7oPhXtaa7AC7kNzDYqMNTaX8rYms6ps",
  "key7": "3u4cgRdYGRSNkviQTkrYYsAY9MXzAn9khUysBdJT9fx983EPJEfZNqUA8LKqNenV75XpGyX6Bs2Skb2joWEc2U1Z",
  "key8": "4Vf8PvkDBGT1dYWpwMTFgsgPhMoM29quxRSuyh4LLzn8ETg6gspRUfCx1cHAeyo9XqJpQ9jkk6gqijVNGQEzvx7e",
  "key9": "EuRVcXxrLTdS7QNcTwVQpUkKBscKzQoxbYgsy9twhw1barofxdnPqv4hzA7HMxaZ6YVg61NxVoQaZsdYC1h6SgZ",
  "key10": "3KvH2PqkeTvcBFcf5e4VG7miGtFxRvpHyu1LMhjDb8UkPKRjyC9FGPevvhL4kEskhoT5JXqDqjDjPXMp9mhk2vz8",
  "key11": "3C1AAajamVBfkkK1qDdkNreopGfhtdYDDLW3FSCUNYUDRXpNGGqWmmyR63CCLSFjdJ7gFwWzMyimRyQUBRNq5pjG",
  "key12": "5qVMrrzprWzsMKDxygTvq5hZQ6PuKYZoEBwwoYozA7ATenim9zCFd2BzsUTk91eaUSUnLh7Avbk42LHJCAMvcBDh",
  "key13": "3A82ChtYHZjys85sZDSvihsJJV8oM8s3TThZYMi8TEP1gii7uyofHLGxshozHEvHEEuu9WjATaLNkn7bAvNMFVxm",
  "key14": "2CvFQDsURngTDYaBBhWL3ncDAFNxg56dsUnVPc7o46khbMxdeWD1CqdTcscKGCdbvUzJctZKFtZknJehScA1tApV",
  "key15": "59qQqTBu7B69rqmoqoTA23M5HyBK2myw8ckQTrgzGBQPP2iZdK7UsgaG7ph65k1TKMnGa8CbdHgfbNCgKU3aLJS9",
  "key16": "3BybBMB7A4KboWELTd3wnHYsjnU3xHTC1mgJKyvMDWb54LmZiXWnzRXdHQgKVm81K4YvGx1Yov7RbVhFEa9auFz9",
  "key17": "2kTKSDxnEZeKQHnSV9SxxRUmjxhaV93prufTkeorpVFPT9TjAerHBQyEt3NyPbuoXbUgdLE9FHVaEKg5qskE2ss3",
  "key18": "5QNHwnxuRMfXPWymdJFUCSuW8WhYwHYp3f8YhFXJR9AVGLfrCK16xCyBUXZq4N4L2bXHLhDGEvmLd2PCiUdb5Av5",
  "key19": "4e7a5x88Q5PgfUshLQAgrCpUESJD33ENtUA5JxJLxsyuDsRvEkqL7YMG1S5if6yzh9axDk3XBhQj2AYau9feyFvT",
  "key20": "2TDei1mT15jvEYHejrGwipiwN23VoaDdm9hA47vxuT3KpK67fc3EYukWyfnCBxgWiEdqWMZPqd9WxDkA1JrfRNgh",
  "key21": "2sJdY7zvuWzwNv1UGLr8Lk2BckJvcVCmSJCCnpKeQGni9oyqP99exx7pLFVgSo5SDAHcEwpiMfGtVuPSUezc4Eis",
  "key22": "5xYrWRSKK7nVK5T1jkZC3p2G9Tre6frNduYJjwj1KQxBJhQQs2xfRKm7FCRD2Hd9MFBPDWUDFs1wXvSVeRkn9M2x",
  "key23": "shjkWaanPjui9VAa9jkEFwpjJsF6h7JbTJNUzzoVYNvyNQyjr3wdvLVGMNAD82d5cLTjsM6evAtG1Hefyhwx6GU",
  "key24": "25ibDGDkkzbjwNfkrsKPjTbYjzFQYfcdzhJFct9fU1FHDttDhcLwNJbwCwgYFU9NerExX6WXccqnufKWKRHeNE5M",
  "key25": "2NHVuaG3Nt7ymyPcXencdh2DnL5TYX1uH1wNhSEEBvi7obcQWsXjsopBkYxy5HyB4XKsQ7J6BdANsWw41TSR4BU6"
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
