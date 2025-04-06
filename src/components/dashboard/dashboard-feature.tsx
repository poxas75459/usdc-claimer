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
    "5mVBRnx9mQXoSywk5EX84GMGSRZ8ZFNGTn2GtGJhykPCCA7t5kiq8eie9GsMrjDGMQ6jMdHCiAerK56mdxBeJuEz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cX22kyCUxSWNTKsRigcLkAKXGwyjG8SsexM1EuiWg7vcmiAnUoyuvMzujKNvRKsanuo7rjjsMpPhLjtqQzEzoqE",
  "key1": "4UgAn65fnnxUdsJU8JWGD2KymjfTbZTEAcw58Js7bBBNRiEU99H4toi1mEoZ54dQUUgpj3gcRHZc5zfNyHduNoVQ",
  "key2": "pcct5SfJNEHoHsquTByrALZkxYSUezdkXTPv8yhVCYnR2zcWrMf8CqqHgmqzqLritK18yGeRDWcPcnzvRMQ94ZM",
  "key3": "MMfPM3QCcLsTuytiqmDEkiVZjiuChwPNavHedBzcQN8BZAZY86RAgXLw2snHxzQxtZeJihouQ9bNJHk4moAALv3",
  "key4": "5fBWgNjvvFdYwNtgy4WtdBQQkidyrRAeA6TVNmRp6FhzxRoCoBq2vnS3Df5Nrq1ksHgsvSRMWLm9mQKV85NqX5cc",
  "key5": "2RLJ3oYA8aT7GycyzmBJSbutVFLVetiB5jrhS8Lh5fYkzqfUjTQZwdfUqFyhpHDQZKvcA2n2YXqGnNtsL31U6Esq",
  "key6": "33pwsee44dbPvqTPcDaCq1H5hMDdWx79ZcYwH6fp9KYTB1dTmtTYkwq4EoajKCjNS9JUCHTATpAcovsqxSwDvcc5",
  "key7": "2o4p8GumdYS2cTyt8pwMT25FFnc4iu151wRwidRnUjU1u58Vd98dhNCSY4aSP56c4W1j3eBynUscTffuSYqTjP8Q",
  "key8": "59UH4o7o3Ev4tBCZ4QXWXF7cQSyidh87zFBB4ZavN2NcQ5MWHjrkk9Ex1wN1gXt3wSVJvEhKX45FaX1RN1BVjYn3",
  "key9": "5eFiwJdfozagSiiWo4aKoEAbnJTaATNRQEbqZWkuKDPHXWm2818z1aWNFpSTUPrw2JMqKmJc7conVoUiChSsjgdj",
  "key10": "1UrSNWn5K7i1PpPYTEyLeeJoSFGeF36zdwm4nj1zf8VuWJayt3sxE8AnjNEDajFPbmzDbCrW9cFCm5gacENrEox",
  "key11": "2DJrDCFR3UMsGx4nW9iNJvR3WVELk5q7GrGK2Xcz9mantXDr9P7No9zewVqwwrmsnaR1uy16NqMV2V4xJe7gfxk4",
  "key12": "4ENNC4G2a9wQBDEUUy2VSWYE6ZdcapgdW5fbigD9NqQ1y3UNNTAXmanLDyNgBsC7LjEqT7yRo6bCjb4J2CEQ6ftj",
  "key13": "2X1oEEBQukjLBheXAyh7JCZ3stwDHxxNoZbKBvzPwYYiVgVUzFDKYdriro8KH6Jr4XAbHXT3MPw2ZByt4282oos",
  "key14": "4eRPZfi8vkdRJomFuPCdGZcTsGZHyZpu9brj5WxExbbVRxu3CoGSWvvd3s6fVtp91Bqj8yBtNjEARHgQ3oP7HpJD",
  "key15": "2CVmSm6MqnKUR4XiuFrtWkdF8arJDUBP4bcSSdukk7kJvEfaDfcSpBo4RodbfE58oducWLPW6VGDjMpMxJvWFXdw",
  "key16": "5yn49pafRquCQN9s9HoCirFG2vfmMYoVxgrWH6L4Q42JFQKctstQs7wTNy1775NNHt5ySn5ynLd7s7hu23eaDWKo",
  "key17": "5L3997yM6aSk4czgd2gWoYWuEeBxqmW12vJptBP7qWrp4ESAQ9fizVmEn6uiQTX1owtpipRPLgEaVd2gS9Kgpt5j",
  "key18": "bHKLvmD3KBpsgQChTcWZug3hytFzBv16QSYiFWAWxaqEbJ5DGdnhNex1DHGA9wjFyFy6DcqEb2p5SFBRpG9qBum",
  "key19": "37sSHpNPMnDhieUszSP7KGpM4dRvo5Hk2R3UQRyBda4AResqUqG8TDKncgkrN1vBgAmUtnXgDMdytdmUgwi5R5BM",
  "key20": "5paUx4cb8yBQ4BiMSPsANgGhYTPNXPgujd4fz9A9GJ15C9WCjsSL25w4NEooY6EAJ4G9DJ4fYuKAbbUVYV5q535D",
  "key21": "5G6rsF7qoXACpYdz4ZqNTuHYVdFR19mpj4HYExfM3BAt18vtW3gLqu8WEonF9iLfC965bm2UumNF9hHMHebhvew",
  "key22": "3j8xWGKHroPYd7cAdj2UYEF3FCNiQtRYWX6TED4LDJp6FX62ZjCBvxUZwbd4SvYsXwfG9wXqzVoNpnBrSumAHTPK",
  "key23": "2nmk6Jz1XNwD45Qvd4yxrhYfhvpYagvkcA1H3zW346LG6oWRpAJz9Xw9CLM2bHPMF6z2ZhjsK1WpfuqLG8soBASr",
  "key24": "2wyANjEprqAhe1jxcwxCwsQ7dPYs4beMKAiw5JMtdPZywJ68dn2fVbr47u4SPyRJCSkgbguypHf1VqcsE3qmdwMN",
  "key25": "4kS44vocjqA1efAvyZKRjVDdRay1pELm7gPr6QTkn8t5FTjSHevk93GtS79E2Sc9GeQtN65tMKci6omNKUYpntyB",
  "key26": "41z2TKcZ6Tz7StsXZ98D339iBMbEHf6nrtjaZkJUgxemqJc8VQGZFxEd7iLS6pN1tZYzDNxzWCduH5x9Hfrgm64L",
  "key27": "iPLRm8VRgAJknfEbVVjX67zErcZ1FyuEidvqBwsTHVexxpZMjbPYKYs6XvW5kEoUbAd98qYow5H2chMJXAizwHq",
  "key28": "4EgXJUaJUKBZjTou2mcQaS75miSZARA1f9vBfQ2yVE4w2p3WMUczWBLnp8LALQ7Jchxm6kmQov4HvAyv7gcXvXsi"
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
