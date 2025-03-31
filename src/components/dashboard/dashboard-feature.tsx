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
    "615qyCQpTUHMX97gf1AQhWFnJaLkFFhvdvDQicfJfENntFuFTgpbd41JuYpC1JKdmZei8RCY9pcGDPagNtkPPQmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RAunrikYA5PZiYNveNiqPjZzKkG3ogdngZpZmtGVXM5VPKHPtdQyBrkB12jbDqX7r85Nsj3XLqbdtcEKZ8corR3",
  "key1": "4CY4insQrg7q9HaWp22HWu41rvS7J9dWdFjBGCrSTVzbaQoxj9RkjY6T9C2JwaL9DVAaNnDbozdjpAJAbXwkDoWv",
  "key2": "2GG4qqm7CcvJaKtsu5hNpkoHwBDrorXwBqszkgwFWM2KzFkGVChnDQBbdvx9EWFGuuGP9EHjKrABZvPEK86Mi2xi",
  "key3": "4n26VTaa7GbgihLYPXstcX3ugGDr7BjoDRJpxmnNg386YJusa4yrPVXmAkTRpA3i14LUjosT176DyCbyimf9R8Ch",
  "key4": "TGWFtydGaDadLdXTCptWK9S789UiExCXLHVHVp54RHz1Tv5ULDNuSvfuVMzqP4qPET3YhbpypGFRbny1hoEzAn9",
  "key5": "57WZzGBVRgsP9a37mb1FGcCKbbay2DZg3ZeE6vKEvR1uUi1pdZTkfnrBMRxCn563Atyen2Cx1oTpk9bqKAVjF5bb",
  "key6": "4XiN4Xysc4htMteNW41eZ47fnsUeb58U8gsSarYEMBsYvpRHS5nP3wiKAB7xkz369uiwDJegueoicj1FRhzvZmsb",
  "key7": "5whYB6DSzZL95fTYNkVRDs3kx8uNeA4qnMZpMXyHyP2DTQAzd528TcKEkZdJc9jzbf6tnECnALs3r58EzLhpeCAH",
  "key8": "F8inxobDkJqJjZHK2YbUDyZTv3nTTTCwD8amAXPN2PNq8Dd7XAKxiUxBobMVHdBcs2knncYVnG4npHknXeVnjVK",
  "key9": "55Sbyb89ixLm9F6ju3PdxdKznDWSk3fvjRg7ycrsiTnjGvuR4VPtg44YE7SYFuu7x2ML8PW443BzLr6xih6YSD9z",
  "key10": "2FcUVmr51bo12LzNqtpKTA21vLqQYShCmekYkxqfoBdkdk4ftF1xNeX3HT652bBJ3VabBEnCKyqFum6fNZJDF66V",
  "key11": "rubcfjLsbTKf3WxC5pXdM6h3G2W1LShNjNWbyr86sGUPcS2XDeeCnnVXpNtq3SXUxMNTbhQdww6S9wwdBDh4SEC",
  "key12": "22UCSpDwWgFWD9e5SPPx6euFD4CwyWYJFGAfS2msTujsayYJxhhyx947WYwdfaFcPAfM4pPUYHfSQKxpBcUNH2kK",
  "key13": "67EnpcHETzzTXEByunEwLwPBXNkAv3XxD7Qt4dzcTFcSLLCMkBSjiAcsC4oomcPfiqg2powqv9JcVnUpo1jdatLs",
  "key14": "3m998Tf5EQGwNWHoE4biRkApPJ7dsaqyJVbX8S5cg44s4wR2BWc8jZSWxoHReDzUt7uZgNujmvimeZ8yPERFGA1k",
  "key15": "3xyXhw7t9gKUfVSDKbTNoiYPivFmJiQhj7yzwchAuBMbSzxZHGwgNSb5v1EW2RHBvUvYcpF9uWRFKxnSpzhTzrQA",
  "key16": "2sfQBzc6XpP9ULuFvyrrREw3whRv1omA61HcpT8aCw3SkUQkRimpfX52nZHMvDwfsxCbLZC7K2Sg3pSPhAnP3Ghs",
  "key17": "2a8JdE4svzmYT6qrK3bLFjPSkoSaTHb9zJAQnNkYPZM6FrqCmE847FAnwxZUfhsfSU7ZJ1cCuyUhPPETEy4mgXwh",
  "key18": "2uHW9TgqDLVBBxeKAB2JNxn7TnqgfoK3eNh1t1XezxC6RzKimKek84sjxBG5tzFWQmGvqhPMTXn4hX4RmcaxWaUr",
  "key19": "2kiEopRr8nZUn3piJMWdympdrzpPmRNCh7F3D8QPxk1BzfKsRjEabx6bd5q3ARsdNxyw6xMnVZ25Abv25iwZxPcp",
  "key20": "roBBTLng5CjAdpxCoEgiMi88fadZfERexpXkjhezANudd8z1qktTVWKQrHbebC4akEaa6VWiCXcpuGvpjHpaJnx",
  "key21": "bT9oLhRsTx9wSc3qVfB3SnQAetieJkhWBXrNnxGT36Sz7uX524wxmdWWUPaWkSLbNYCdaSs4geFMStyWeDLVpPX",
  "key22": "2Gy7d9QhrJ4Twa7ksf8MG6V8udFPPfFgNuDzYgHSEDFxnXvhF4X356vsGkSduVyfqMxRe5g1qwEBVLubJvSMh5ro",
  "key23": "3Sbw15wP9tyDxme1H2hZvvgDM5yXVfpy4kSwvPjTjsx4TjucFcsFhcSkgyPj776sya71SysxEENub3h8TFpnoa9F",
  "key24": "2fdjGHTsZCgpa2qjXwzBjxHbwkjRyXVabNXJE1BiycsfmRBbQ5v9V4cdWzyR3PQ6fg3aPvR9zdEDAyRLBbWhKKcT",
  "key25": "43kfK352yimEo3ue5Gv9DtfMeg8ZFUfymCNYEZ6R81a3G4Cu7AKD3tVz6xJkKKgfYJae9BraEU2ftC2Fc4wsDRjg",
  "key26": "eXtnhj5J9KxgvRd2tVncGt4mfomQveMnLRs6BigtVXHqVYqkDY5W2vZPLzYbUpGq17kxuok7E1oKFu7e959Rb2r",
  "key27": "3LQo2ikm7tcSsr5pyf74LaB5V9FUAUXXzLtTEEpxWZKaUhmWMjjaqQPJ7D9yLfcCZAcE5c2j55pCrrjV5wWtCwkE",
  "key28": "HcU6PnwnSeYzjXRiauu2WwS2gfJktruL8cEBmEhDzsWeGYx1chLHq7rs7nkuMQ6pReTW6s4WNWjuMbsTDQxSYji"
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
