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
    "4wL8XGTKks31Q72cRincfKLJd9gRL6tLoHhebARvPjZYGTUU1L8u2RuvCPUU2oFxoxEJ8cht8sAtckt9cwr8hKJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i3Q4fX9KSe1SvvQpGLdKUPhRJ7ZtpDLZJBHnaUbYEZ39cJgod864vRqiXeCvcSNCBZJfuFvX8ZgopuHPnG4ii8A",
  "key1": "3fhYp5HrNrp338xGmXbS6CTNbNFRH1DK9AdV4pVe7bHbNKRthAu5WhPAK5wfjRj6y6EXigECxQHXJR5qtEtBbnso",
  "key2": "3dZN8B5hAej9LZgVTh47nvKWXzzKR16uA9h3QfBvjj9fYrDKrpBQJ6b6JYHEGC8GxaP6zg88xFAPC5rsrk1DxPKw",
  "key3": "6pqMnAx2FzjJBVcXEZVBNeoq3YJxnxQAPQA8YyNq4PCDGFpy1HgrXfTQpFQSga5VpBTsitCDEcP5nb8gWKMLW8N",
  "key4": "2NNuA1DoiPozH6JiNsiHdkaUeAQ4AjVU7pTK1oYu7ThbeGK3p9tfgccQUAUYmcDEppKAsVaUfPgURtiQLGEKDnvZ",
  "key5": "PwE8zwgDHyvvc8sAK2Pg4jT8sBApvx4N4wCpLa8U9pQkREp8tc53d9gdob8jXwTRYN7ngGTNM354W6SVhes6w4M",
  "key6": "5sAtisJ8gxgx9SUwK8MSm6foiugjuSo3evswNNnVaH7GYkE4hevR3SgtHc7rE3cAxs8fpCXJiNHD3kAUiTpxuiBG",
  "key7": "2NhG42sq584RGndYQHeH8BdEWUJQ2ptUxEgdEh5NVbLJUMgdoXugrM6mXywqPQchymMd5MAiTw9kX9G8CGN8pbkD",
  "key8": "3YxxY1cB5uANKTy6SzCA9svGuMoGEuxqgZC3SJJ3V4KKyxjCSTZYAhZAYswVb1JSab9A6oPE3UNYBFKVbAr91nSG",
  "key9": "5iSk25zgynkAYmmiL2otYs7ekUSd6sZzQoUmCqenWtWRNLsGaUJT6eTDb4hTyJij3BW9CbHwpWnQwnbqVPw2YXob",
  "key10": "5LQtywyo8shVq87H313my3tXPjjeWAWZmEUU7KXPhZUrP8buyKxJTJTNYkonc1bLENYp9mjvCt6K9xH9zy4R9ZpV",
  "key11": "4n3FHGzcc2uuVNnca3VUwfKkdtsRgRCouZayCtEcH4acVvPQuHV7DT8tBq6ZqoKd995bQ7hGchs94xMKEb1wf1St",
  "key12": "ZrQKfKtdGkpSp4Qi2qYJkXKpd1jpkwqnewLQsN4MqFDZqa5dHTjXvKDsaTUkqzsCQpk6MiLbqYLVvcB97i8XF9r",
  "key13": "475JHWXnYGQeJ3mBD6JydDiAwcjp9JX9xSYP7GCVXckYYHu1PdxPiRThHN14cern1NfdGBe7zvxUGZsy6jR7Wtn3",
  "key14": "56Bb1ytsdz3k5pqJwpitoSh47fWiidKxM6y9eoReTW67M1nVPWiRz99yjQGVy1ggJ65BjpwmSzPfpdJdogteDQ4j",
  "key15": "4NC1iKxEGxo2t4Tt7NnSW7LfTjbW83so3bukRy3jLYXTQTqo4uA2b9y5jEKaZn79FVNqhRh6w1vsKtYKgH7U13fZ",
  "key16": "3B7FGgVb2KTnNVbzbj4izDoXBXBrTCbybg29povNLnnxpWQdZMDMXtZoXynnQSb1aLkE1GH8sxFb3Q27qggRkxSc",
  "key17": "4LVMNebGs6iwWfEHJt4mKmYcvw2eoXGBik8ZZoB3RUqsyXtMJGqDhorVboPTMoqWAfzRBYpFSGEe9cvt6QkB3t6V",
  "key18": "xBLVnkZJf4q2kKXK23kZsSLnC3dzNJX8Cru4k5WraqevSnRSn2L84zdiYqjfKvQxNias9Y8cX6DgtdNx7gkUCaS",
  "key19": "4JNQshsD5YdwfN7MAQW197uEi92tZMkgXkfqTvbSnM74Yh1gimeig2RBPmrxD1uBJ9SEJGbcPj5FP2XYpFvuj9UC",
  "key20": "2RF2vx5gALuFUcdDnU9P5FrscxHTwZHRY2U6EzU8v4QnGoLp6sZwJ3q6RRWvvSfdtTmV3n1oBYC1xrVVhWw1aHky",
  "key21": "fPbb6idEj6ufXFGZMDGpLPLdQHgyzdyjKRxLYGygpSRS8SfGcfHU1s4mwCby3w9VfrWA2Xb4ZNy9sfvkYeigjjN",
  "key22": "4jLzZkLcwBjJfmuiWym9rbPiWJTFTxVG519gBj1K7hCtkwsKNHED2F4YnMZmay85Bgp1X3Zy94zos5hCMc4NU5cP",
  "key23": "41XRamtpoHb8YuxtPEJLZsHru2kYADSpQAiGQk4hufYaD5ozTbT3KTnqWuow2FKkpwt6gS5JPCbLUcFvyyfVGGyJ",
  "key24": "3Y2Lo5qqo7K8yvnb5XxyGAT9WG5j8ihJJfCg2Nu1dQWGTk94kUQeC2mVGJoFUCbVsEygQeV7huvn39VAmB5PngDD",
  "key25": "5HBhTYTLvcBJu142TQuEUc9YBmC3TcFVg8U4n2xgFPHxEy9cdtxvhTMGdq7yQ4Mtput6y9xgLjG4GHgpeVqSLbML",
  "key26": "2mmJbzbReU2qSQQkeLirp6kd5C2mt6A2dKQVxRXMhxwRJewmVqGQUJnDaE1XHos1B2XoRZvRdjs3GEVm93RZB4PB",
  "key27": "23cBknUnopSLuBapqrFDfDmvxqnj2C3fo5RQqRRDVetsmkE61LfpQxBmtK41vB8ap2SkwZUvvsDd1w5AtNasSu3F",
  "key28": "A7xqrvqUyvKor3PNjZYut9QagYmgFDvWvNFGgU4Z1R2H2a9cA4NExVZQMzNME4AWScvD4xbUs2TrEVnGitxw6hk",
  "key29": "4Qg9pF5nYgaHqq9SDq7e8Z3Gt4vkCRKHSo1yVF8edkgG1y3GEZxfVXcvbrSnDGnmTHpPcpXXn5N9ELsqH9WLrtcv"
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
