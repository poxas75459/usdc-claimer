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
    "kjn4XK4vvZWVBhjHVRjA2cBWK7sLYymQoCPGws29fVcuRoTTUnA482BmJdS9tLsu1E2sc7mxX1LSHz6EzmigAMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Asef92eBRtGBM1nRYHUSdxvGwh8KjUF8N1Gno6cJ8NoHPtrgHboVKAG77kav7t44Rw3CnsC14hgnBSrLEH5nRYk",
  "key1": "oBgFcsZWegpmsJj8LBnxy5Jxikmm4MkJTjbFQePWvkiTV2tZVigx7UyPj9HLoDe983qdwaanuapCBpTXifW8kD6",
  "key2": "3gPeaELsvYfCWGSnXFePtNztUW2NhHWpWQH8DDRofqcN7vZT3HFzEBySphwRVvpfe8HteQcA7hfw2HyC651VPcj",
  "key3": "3UG83zKPuQH6WoHB3GoDoNBY8kVSfc6Vw8iq7aH7ysp9EwzN4zUWVDbWruhbhSrmnDbNoLAddrsAK2X6hw4UMp13",
  "key4": "tk6pxTcTAn3ie8ZNYumpXJ9Xa7uZgmaNALWLq6e8A2igk7V1rwZZmCMAfzqQGWXgmuHYqdF1ZThX17miif277Lq",
  "key5": "5w3uSz4cJKzc2Q4QJspL4vtqJWafCGSr6J6WtgAKkoRurckifye7xmjdssSCnPrKov5bEEz9TiYKuMsbeC1LgGaL",
  "key6": "38gT1FE976k4LKAq3Kfqi69iD23Zuegj84G3ZuJjdNni14ed159rFNGgEvb56c5nhza9ELBJmeBWne1yr91E1zZb",
  "key7": "3EoffzGPAxi49puQjqGPkC6F9HYWbRM9HjTDRjjtq5wg3FdjgGApFk83Q3cT6aBhCRyFFcZkB7sisGUFCJ2CC3ED",
  "key8": "T8antMataHVrXfi4teMmo9X9G8TzZD7u9gj3wDSZwAgE1b3YRpBvvyTETAis8XrHN4UHmJKjzMA2NdjKUJZMrAd",
  "key9": "uAW6Pv1msFNgbfqBAQ53tGAbhe4TKgphcWqEbZeAiWgdyr13WhEFwc8LHTFSah3z1Kk4n8gn3XVrahbGqDNo2Af",
  "key10": "4WBLALmTp2r38Nayrahs8gs9B8k9t798ZK2xinvqzc4kB783xoFrYGHCPAMZWq2oZK8THG3sF8gFDTn1zDC5u7Vn",
  "key11": "4WU4pESUstwhCYitxuADcD6iniUP3HWEyyswtkEdAfAfUQGfjZqUj3mBhqBMrSrBhMrmLXn8L1y185X65BQf8eAL",
  "key12": "JKHdFzKzWzAXy7fgwfr5PZrdHkwrdRostSHMPU9gcwQUntPwciy2b44PcDt3jaTgVdBHJgUQyZG1b3NUKbaDEyT",
  "key13": "s7RgMv922c2DkMqB314mHy9HRCvxTHmMk7ei4Mxdu3QekoyqQesdWJ17t8oN2UCh952t756ZKu2XWVrHeoSrh4G",
  "key14": "4rPanDaZtkT3RFBb86MVwC4tx2xh9VEPN7dPG2EJ5wwNgXZuvdqJBqYN9UjWcNKtsY78EABXngbTZnpmf6Be3FQe",
  "key15": "2ZTyXv9aRM5Q7xyyVQNeeJzB6S1U6WNQfiQHCc1PDKkrnM1knNoKnBfri7boTpnL9tCKVqCBVjsur2HBkWAYTucj",
  "key16": "yjx9S3ScTkvZN1Hd6KavqWAzXVdEAaLvtdBdpjC8FqmTyFt3r5WRJFfuBX5BhqjC4YkrwWA16k7fTYsG5LXayzJ",
  "key17": "3v8ahJ9LsBit8jihnEE9DxNeY5gcYfG1zewPjTwF5GoF1NPU6sTJ1RN5RYtxSc1naB4Ee7B1S3qFAu8ZA5RbV8gq",
  "key18": "5Y7CHUkyht9sPm7TLndP5fku2r5p5EXipDYjn8WtX8hqkRXemxTUjp3McrUo18rhGEj7JUuD6mB9M4riWgAPHpy4",
  "key19": "2qpdd8SoGQu2JKhs1FP1pWdhet6kdWaPBLYJCdryLkJsB1ThBJiPjx1mTjtQPK8Bou6Sdv9rb5W3iym7qizeava7",
  "key20": "64yz4DE7h48Ef1Bg5v725Gx3P3AnpbVmuYYMMJXsLgYzmQkktFVYhUVt6rULfXgtCGSCzkH9HjbKwGRpoBCga2Et",
  "key21": "5tLytf7tfwC3QBoUYYbFxh68KMLaUtfuQA8s4NDBvDbhPdjkQfA8FgUbTbpDipnoj88fHbgdFNjzP9n6cyLMzNmS",
  "key22": "2rLUKuAR7ybAzsQLiDGhxDvDmFRf73vone9CdCgQRLNCZpR6UrPzRnKkMVkjWJuPF5y1rcEa1VLCutEKtaHuDcUu",
  "key23": "LzRdbPMyFf3ctKFFufeMG3Qv9h6EbL6ispNNR2HrGN5JtYhU2h7UofWuy9XEK7TZ3qmmF4q62mR9cfnRxHvryUP",
  "key24": "26YshVWgHwTFiXtrC9o9ETc7jHfVjET43GayD7562EpMu5gKhcCj3Xefmw5JYXxNn2W9a24grVGjdW6zgFbEdSQp",
  "key25": "dpUernzuaYQzskqUkWCNQ9farTbVvoJZmdBU8znv9j6qNaRpsKReuPGgpEB2mdNnnTx8A3S5RBNjN4y7gYPxzuF",
  "key26": "5tkJ4GLcWLgy5Kto2CsUMzhUb5hH6XKoPpGQCstVPJtTafVN92NdEnfL4hSd7499UtDRkK1MRmCJjJJga3oqhT2Q",
  "key27": "2JSRKKm9wRH1zHX4iUuYU8Tj88gyFj3RBUzwuPphM3WLdfmZ1WCmV77Aq8ei3a9EVzqNixF33b3gk3fiqdtaq6XC",
  "key28": "49KnAJ6ZxNhzx8xx4jwZ8Jk7DftVKvpCYWGhudhCfGQy3oDaFjco1zqnLBSFK7HcH8o2pkiz6tqNi4DJwrC1eTAs",
  "key29": "2AXp1Q7WSpZnc9eX6VCXgVPbYq8LaM6S3JEU2wedwWeRodzsAVWa8BMYfJbpkNeMQjkUQsF46zjuy2oaCEsSygQV",
  "key30": "56F6T2BrhJYDVcq6VxX7hV9seafHUcmsWbzmogRToobNDkAR1A5qnU5XccR8QpH7Nw13MtM1WvwbWDGqVWYRKShg",
  "key31": "5t57crVe9bJa89spi7iXhgBuJRVzN7YEEZr4UhPUpm2HFRw7SCKpoZdrDdNRbfjULXpXi4UEyLhrUBocFd4KPuuy",
  "key32": "4T5aVLcCjmjaLjitJUTLf5VgDUxD2immm8qwTYXpPgaL1q4CHbuYKeDDxnm5fffhdEjQbZNzJZ5Ps98XjnCZkyhp",
  "key33": "5WXockV2o5VqLxVuMfYVUBD4gYfj1n8bFcfxrJssSeBGND5UgPsH1BUgmHDYLbL6PC5XyYRaAJD9EsKDdkAVX5jr"
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
