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
    "62sY2cpGK9vyFcRfGnDRj3KcfDsvAoRm4o6GN4DHb1iLr3dA5rsVjrAtZhKhvDHhQbKsFajLELL3ABint3tvbfYe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JELSFYEGn7Yecha8NuNf7wnaDreYbGzuVH6iLPgMHUsQtUYLb3zaNmrbjVzmv2uz43kQH8RSzREDtJRe9CfmMmG",
  "key1": "31znB934uPUZ19CLnCYEHz1bnsgop3XMAnyuHdqajKUyPY26rsxox8U3pAntPq28TBfrYqLtBKPHZCy4nAYCzCN9",
  "key2": "6kFcsAzSsS3WaiGFNrWqwfCx6oF7BsvQRqeoLqjJMBpaRSTuWoAS3zDoL1SeP9JtAFNcqguGZYgTXMSFaFnELb5",
  "key3": "25TrD14T71L4xe86c7d5v4cCsqTYHPTSNxQL4ZZdLPNb2QTxgiPwsGTskgpKRrHTVoFmLSbRvJCXk3vEKkPnzy7L",
  "key4": "3wcsd3MixmQvPiAbM99wytHaWL8eaRWDhb1PzMadq8pEJKG5DY5X7rqBLMJf51TuiuZ35B4xA75kEC5MLcSYyQs1",
  "key5": "47eZYRrVx7bmL8PFm8cjQEZTuKRzFo3ERDNtT6fTgD5bH4uCD4gxedRYqDAYuziLubHwpFvcRt85P1DBuddxTwNV",
  "key6": "5u1CQSpHi6ezfa7ZPQifoXwLKxMFrs6xfjTpcmUrWSDtsKvfjGReeerx2Mozu7tUG8G6vz2RdwNFjogn49bLSvSx",
  "key7": "54uhYEskbB9XRWEZskMSYBV6v7mMyqcnBkKin5q6H2ytApsj57XuGF2C9ms3waD3AWNi96EifWWpgrrUXUoWe9SS",
  "key8": "5GUYusuHQdhxYSpKxN8q8tnqEsGqyCrKmThVYn7gQHjdaSYfQgd5wrXqLwN6Jp4PsKnnZJ87wfiDgsG4rT98rwE2",
  "key9": "5dZhwPEHMaTR1t8Zt6xudZiRZ7ioAeJSnHEZXgYLJvk3NH2dxSvhxnXdWCixUicJryyWP7YPPekiiTBihs62aga7",
  "key10": "5nYLNsMVnmE2h5BrxgrF4e8FLSuZGMfGopcjB6uDRurcRSonEyHH3jW8ysUoR48ZRYyLm4uBfdiLcX3XfrPSuPzg",
  "key11": "67Wmy64k3JwTYD7S2LnabrSbFC8WQAABK858TS8Ez7xfTw1vkZxtVU6utUgsgeJU9HWirm1idpA11pbvi432xEzv",
  "key12": "2H9GbcC3EEr7kvRQ2ocu26j4UPFkZDAZH6Aa9hmLBt9dvQweTa9SFtznLpQA9BA1GNwzE1awkCDdgvjYxLNGcawc",
  "key13": "2XeegNDGnAS1NG7AFtC7MhRX3RaNXjqx7dALdadskh3bxi9gptAeA4F9wpk8yCV3uMeghu9vfo57ZbZCxaDyPDww",
  "key14": "4DoaECWCvpj4fidawv3oRUZHvHW1a3jhLWpgn8DTz6cVHprUpjdsK9AxUVZhT6XnUq31BSTKg9PYqCHNGtZVGBAk",
  "key15": "v8fcZeEF3cVJXyz5nvLy1jNVJRmNjB8jbJoXDiua9TCp1F1h1FUoKWemAfaUwPvuanPxYWYHAHcFfP9wW3R9hTu",
  "key16": "3HCizB445R43bC1i7v1gMpcFmnudL84mCPHv6kTxGNv7zZzUjTsC46X81osmzdMkqoCejSN4XafK2uQ7srCb5FHy",
  "key17": "3AwEFrgVptfMUzWm5ctQgEYcm1q5mhGfaZso92N4Pq31hpcp9uA4rEUKsurYc19pEdF2W2cKLYYbPCtovZifJAfR",
  "key18": "3kZGuofVQbn3ZJfwPZKbSz2xe7UJLVco1jWBpaWB4W5ionGpQoo16MC9jwGVzmeXvtZinqk1uyphtvUVP6Dxn9Ti",
  "key19": "jBwxwFfvsDnDSM485q3qkPCDsRoRQ66h9pVbTMwGMwXhBaAMpCs37woVtwFQEEoZKeGNBxUSasYUiZn4bWao3AR",
  "key20": "2BvLiu9yXYMQVEAo9oLqfb8qGcPWSU85MVawS2Fg9qgsNzzZmbquTSW23GMSpYmUiznikDaoNcDk29aQ2dkYRYd4",
  "key21": "4ouK1sV5iTo87MFunDUNocxCqFY7YHiSK1q87scMDg5szqzJUeMT7SKyqPrkTuFuaoY7xZorywf49K2f8AfgzDeH",
  "key22": "3oZLzkC4stYNf5qeLZijXxA7EJETH72ZgjxwBD4r18WJABX2MMoPHC8JVirBbWUDxNe19sKk9jUbxXfiY82DBYV4",
  "key23": "9ktzpUTXcFXQ6NY1vRtBNKYmo7BujiaU8FBedh8HVS9TBZsjfsaS1FcUD1tPn3Ukqka3NUNw6qGrbqdnZr2nabn",
  "key24": "vWm4H3z8vde9Vi3mjT9vzV7umKc41pN4yFSAHzebYZaxS4U3XSPBbTZawEAAcdfE5S8Bdb4RhtmfbQd51dRrc5m",
  "key25": "2RbZUUyowYpebWEryvVJUcnwGSRgGvMfwxkoPWg3WSHawX7iUGdbMT1wXRFP9MTJSYs9LADuuVQ7uoVfbxmqKEh7",
  "key26": "23Nag5amxvgz2zYPAbYp2J3jWXZ8Db1MtLCtvivmg6TPFpFmtWu6KB3QynAMm6knHQmJVSqYZ1rKk4zu4EbMhRpw"
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
