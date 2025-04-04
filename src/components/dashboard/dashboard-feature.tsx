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
    "3io3VK9U967xcSV4MQQTuRCg79wLVijipGkaJJ6ZLR7RE5enEd6BR3H4vsrnqorHMqRUhyNrCVVvEJN2ukf7JAis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g6AGso29R13nxPeB8rUz8owvrBYyTRyJBUKmAfsKgTgfTEXqyeYFRAYKJBJyXXYoNBsa6zMeQaqc1pQ25BSk2wW",
  "key1": "3v9gxUxr2qWDzwVKthhhqmFt2EsDM8xiCyoGaHqLR1Gsc1AiMvx52ynaBDgvuAsgp3Uo1rgK9V8D2gD3sP9svQrD",
  "key2": "5wHFe4jNuNZVjd9WYNsv5Biwks8rjCyXMa2FjNmcHara8Rght4DJByR8CLBdb9oq3UBXSgEwhXajVFrUc3c2VaoF",
  "key3": "5Wxfy7JWerRXZdxq93X3N4BLMD3rFQibQaf4XXV7fVkkwZTrNRDixEJ5tRs332aFSTVnsBTwy7nABJLt8yotp46p",
  "key4": "3R9niQBSfUUTsGFq3enD4JTQf6JQhh9RtBodnyM2w3kfhH8BpY8epHnHEZo7AecKVU5XUxhELsCjzxmMgLDGr9u1",
  "key5": "3neVGHUnsFR3RhmhmsqjswSPJnGPVnra5CUi4adyH4XebQ3BY5sAbeTbjrcsZgdGQj4U7Dee5uohTjEfa3N95adq",
  "key6": "451w9FHtVjKpTq3NdHEXo6dDFoAd9Ywt9fc4ULGxhi5UdKnFv4Fs3dNyk88tHv8voeZ2QymfkRoGn12e23ezBxKo",
  "key7": "4XVNvtr8MGhB96WWNU5PdMGzDvcJh3BMWHcgNiUdDeK3iFAQXb4L1VSeZN8rKfGUMd34pzSTcbWxyN2ozAc3Hctm",
  "key8": "4C4e3ZsbSbmPhTULGr2nDdTShQctp3iykic2An4vBH9Vv9WHMtn2VuNUMBwvcMyKBjAFYAL5GVz677MczESRUcn",
  "key9": "5Dsag3sKLRmBZfAaversxXZ2zXgTbS9wduLMf7tCT3oVLwCVeqntKAGvoAzSrQxeHEDcQgz5ykn3b7ToReEeAkme",
  "key10": "59HpxqdJW1XpWgTp9xPgjEAJcPDvCzwSNt9E3SnuEDc8jLY4UJx8RwCnsqnuSGchncv3HR5PXsWq2ofVgRQ1HTuM",
  "key11": "65KK6T88Mh755EXaEtH6xudGmghwo2gqaTVnt1JsbfEM7iM9SFkB72FQcRURK14gP98tBRc3VPCLiotoHpvfMjom",
  "key12": "3XQxzUYfSeJep965RM4sxPC381gyaauKgLr6eWsBWTUmEstbwcPVJJvB1fqTMViAWNC7z2hgB2r3zgxihbnKeXxu",
  "key13": "39wMQFTKWUUu6pjvusXF6JVkbC3GyzwyszcFW79rWhiFyEbnmxPe8zqZUSdmzRAgfQoPjXivggm6hHpV38VSS2eN",
  "key14": "Zc7uTNr1FtF8b8tsGQwT42XfcmSY8CYiKZiyLEGgsw3m1YTonn2ztptQ3EGeZowEsXy59L6uvQjgV9yrz6P3LLC",
  "key15": "2HBcRdgKMSzjJS9wJCgxaae32u1pU8CZSzYZyU1P86zcDFrcQHMru4pApYxq3SUB72agcZ4ag4nPvEDHKhthhN5r",
  "key16": "3RMfiNECngMaBJaFzPDLzQQv1d7tzR4ZSpiwrpxd8d3ttpktypfdEhqhHHhRt2PMSKeSQSdgCcA3LSeujtqGJAkH",
  "key17": "4L8XtPhi785fBkZyhu1Zx4qrXSjy2whshgq2e8gkguMAUvq3MtUGQrQQ6VKFJf3dvorVDPtpKXs857Ljvk5gKQ9j",
  "key18": "4rDwL5VEPXi1dQfcDsaxxApLePzRhd9tapznUb4ScV5774j5gV5wdL8RsHj1e6UnVR42S7se1FpEJWKRycUNznp3",
  "key19": "5vPAsKMNHaSG1wkfgmWWArFHcCeTyihJ1AvMFc6b7G7FAtYpijeTiKivK9rtSnAvGi1MnbnFRCayDd3HAdSsLScv",
  "key20": "4DQ6cJCdLkPfE36GQ41bbAoJTWkyijqfFis4p9UTbRXyNXTizw3AGKv84qqzCoPX2krySHLEVLbenSLmnMAfb65m",
  "key21": "5zR9c9QBxSArUxb2dXXnQTb4j9PdE7PbaTzsZamS5ja14HHfqpWGzf8qvTysPnkFnvBzar2Bevcx8qVbhT4cz2EK",
  "key22": "BVMQDacob41cUnug9b1pcbqKMZkzBtVWajfEA6EmLhszZEYq6pBGRzgR4DkYaatiVK8QWehFHNTT8C8r8f7557x",
  "key23": "5GPDqcWnkw1776JH8fkVUy3zmGEeJ8D46u34Sg4N8EEvwaRuhjHQH3KX7aCjTTfyvsjbowcEyt6C4AqHLfcagNzA",
  "key24": "3xtP2q1CcXLop9cKF9qCPDky2XuBkcQ9hExhaPg9t8XPwGq9N9j7T1B5v8u2PaNnwtQPaKMuM6tCmx8vuBgWLvC4",
  "key25": "adcW6EQ3jsxRfqPvmS1XF3R1wzmfmgfUY65E2Pa6fPLmw49LXUiqUHUvDNWZtJKV9tqxNicouSbeFz1oha7s4VN",
  "key26": "Hf61SZdWrXY35iYMYJmx4gNFtoWCuLzcfuQ6RHe5t1VJtCPRmzq8PdBUx8cFBaGkYsAsj9v2Ac6C5U3NrBAqDt4",
  "key27": "3HipUNZzSpm5WUjcyXxo9MPuiLKz9Ti7BsRDU6m6MqqPkTUxZXyTrXKeihZdQ588g2TwExnf5JBMQxLkqof2LkVj",
  "key28": "CqzBYgeeFS8zxPxPw6J5y7iqWE8Z9PKPegTMqo2y7gFTdh2yLjqcGbwLgh46WjM33YqiHzydA9i154jvwTg94mr",
  "key29": "3SdkyDh5tgtdXE3ZxotyjuCbNN6M9vDZyYCkahEPffjM4Gpf3jG3xn9HqD5ZumZNkH6ok7xFqG9jzf7hfbDsf4bh",
  "key30": "3hb26d8VW3wfpAoQDrjyNVQr25iYk2cSSTUTVrriPx7uXLSUghsCzqFpRcW1E8cNprGuEHQUadaLsDgHvhKHudtZ",
  "key31": "SCznpRJGN5TzjwfQ1arvVc2XY3EgkmEQez3eWStJScU75vM9bTaVxHseP4oMYUUVST9jB3PACvKBTQg7atMiSto",
  "key32": "1VrAveRJCVAfC7yzaeXxJbYKwAgp1vicA19BijaMc5jYFCngTSFToGDJJt9qRqcxdP5vSAGJJEPxQBwuhBdDCo1",
  "key33": "2fF9zM9AeqahL3KxXUBKjA6dNyhVGdW9xN5vMV9JHZpZCt4Fdo5BShJBDFr6pSmXygkUPaZqZtB9osHz7WPuemi6",
  "key34": "DCyVbEgVVErCqGQMmnwQJbYRWgTBBJJ7yA9VpFquujr3iu5KvhNVEhpTYnSUDXYvA4q2EE5HMi8Fd6kmGsiUFkG"
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
