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
    "vB6S9xm4wpMZx5VMUWGJFXZ3FGHNvD3emXL5CN4UumoJDJRR5aXy8g41g95XiE6KKFrbDoohFAeyEcowhmKMPmM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48nr7zio2Ua6jnBY9QEDLBnwxffsWBZ9eUC1eb21rprVPAbrZaNL4dVmH8Zff4QwhyjCj2fmnude8CYFxCFArKgP",
  "key1": "5NBbDJoLancrRA3HxsXEZYSriNP4meqpGPyHh6CKtnhwW4dewDmzZHPtH7rkSnDbacQb1rxruTdhVnEYvPKZWVvu",
  "key2": "2LfkmHrqyh9attjmPPy4oW36uGyD8mBiR1S8qu5z9zLJ8ba49GsPJtR8WdJ1FEAsR3f8PYGuTwthXyiVpb2pGm9U",
  "key3": "3GDKZBGUC7zrMnNDff1Vdr6jTv4dTD699YEDqpsWCVSceDFsp7gXFpcqrDaPTkMsSt2KZFgjVge4mwvT2AFTwcEN",
  "key4": "ktHciHr7qx2JZSiXBzxiMuV488Aq1BZSRjyASSbQFGuhCgX79Ez386Z6E8aP57ha2mjq2vGS5Z87mVFZwqNjmKC",
  "key5": "2g82UAmdgPQM3dAyRfiLz3SBeLdt2oWtd8kC6VfbAwxAmzy2NyqBguxAw6JawJQ3arXrcvWiEgJPXLNE4SSKGXFU",
  "key6": "4CAumeMzKGYFwF1D3kh6wiY1Mb11ttBj4D55VR5gC7fCowRkzuyTVejp2GFCHcwVdija7P86gqTQcfenJLc3Ypyk",
  "key7": "61PMZbHPhqUNSv7gYYtmQrBw1AEpZYEcqfX4egE6Fvsat5JkVWuKbKR47RD8C33Et8E4A6ZxfUavFtidTy6dNRmj",
  "key8": "3Gw63Uohwm78FM9xiq9zTuJin25NDnEv64tjmGG3zfBzAXSbpkZzHdVEgRRQdhzDXBQfCyC4WbivKTVFXAWUEZyP",
  "key9": "3K5FmadMAEDvxYKCK8mADmcCgqg2f1KNDqfVyGxt4KHXZstEguuAFbNK91Yas6HJZ8hpKQHDw2sSgeb78Ka9znpK",
  "key10": "3dKrhvP1M2uuWM15xUvVE3AMoFhZwye62Fs3wmLzfYPP8KqAUjFkSTQL6UWmSAiYTBJeYh28kbucaWZX8wfkTCUm",
  "key11": "5yjXA37BPPGQmEVk4rV2cBSvygrjUJuAjRr7SyevMegCrxM9Ee7qiG6VSQCatxZK61UCXL3Uivf5om8HsPiSLFz3",
  "key12": "USLNSecG6pyzeN1KUynyosh8kPRrE6ZXeysaoMjBVdapoj6bPjPN7pnCfur62hEBz7au5VHRnQFo25MaXMKKuTJ",
  "key13": "23Xke24ZH9LuSAuDWkwUiT478zmR4Z9V3M2etBKoQzTFkdPdqJuah3QHzNPYtcA2XsWXe54uEoSJiTymzGp1smwb",
  "key14": "4jibpgnEUuk5Qm3avLXXCTE9M6buATJJr5EVRw2E6CL2xjfEhNZ8oWkFtUzDb892sowukdbxpfVQeAwsZSjAwSZC",
  "key15": "JLo7NLGnZ5s8VKUAjNG2EK3HMrfCQF4D37uP3sXuDWUCTERrb2WTZE7TnaGsu5FgPG1AhBoRbXbhXT4LwNh3r8Q",
  "key16": "3aT25cC9oBj6smuCRSaMkq2YSZ8orZugEePYWHmG1CBNXdDQ44fQ7vstdWrifuvR5wRAYks9j7N4nWrFvbdJzTfQ",
  "key17": "AjFsCMgqf9Dt73sJwTswxq865xNbKmvRHNLiYZTW9WJDtpxBsDdUQKHREy6NHCRtoL84feQLPGv3wMswCeknkjq",
  "key18": "3aNgPTbHeCBBDD1E2dxBFTy6ppctN3ewk6wgBMv6ZAocgeNozjvCsm9ZYTxrjrf6cKmeeAgGEu7TNZjCyXaR4yek",
  "key19": "33JHiY9wqBrnKTBcwfJBMWGcFvY6cNDpjYXntgFaTRaBJ3verNX7pg8a9Mhr7JYwE74g8rcJC9NAH3B74X3CnxBU",
  "key20": "6bNZVJUr71kJZPWMVdznn1WqSzGUDpdP2QmeY6VGcXy3uf9ZYmzCZtE1Qv2r4NW1g25LjM6VLv1nxZJJD9pK4tx",
  "key21": "5Ej1mx3BQnoxPBqXWMRAUsHsuU1YkJTMxBMJnf7oKGMJU2VqteJw3P7MeLwWmvU4uo9T8zyF3r5iKwhC1RwxHpLi",
  "key22": "3eJSM1hz6XK9gFVZDPGzWpqryaWo8fy2XujZdJirCmgmZ4EFLsuixF1YWqXGmgUTpXCXHzxPDJvVNN17NHanG7tE",
  "key23": "5ZD6JKPUmcZvesvtMSQmgBUHPSRs95YWdXq1FJ5MPn9pWBskLKiKBEGBswk8UNPBVh2jjGKAX1qtYGSgYgyGNkFW",
  "key24": "FZEAJqzBwnGKEqpMwcFSexZyU9JBgdciBM9D4vWpxnHL3KmhFzFjUWJwhbueoNtKYmUoydYmH9RtdPiQbpPwZt6",
  "key25": "2Q4BCDLexfC8CY2fuPwZaifyPEWTvaJgaQw5PFxfMWtXMm9WCDNmbNnqWHN1nQZJSjmxUZFefJZYqMQBgNGoH7vR",
  "key26": "4A3DiDXESm28qa4oLi8SNR5jBpRgQ7RXLoUvMNZDV5J6pN2ZfVhRrnbzumMv2FJqFzhvwbeVFvebm12rATBhV4ru",
  "key27": "bsLGW8EQ5PetZGT6HGnwopgPVYM4cmf7echMir3QX8wxjDWynesRbW8Shr7CbSQMEZQCUEwa46LeqpRQbJWt6ih",
  "key28": "26Wmc8XiNXwrB1Y4AangcpX2P8irsfm7YwHEY2R6jEuKHuVnGqyFhUwDo3Npgn5buX9bhdBx4dhZgDgXrU9zohLB",
  "key29": "45rYh3fyAJ9EiXVnzPBYstPS3pJXH71fABzCY71HU929WQQ2e8oYG9rHHL3Yf5HoBrS7vMJ3xdRMMMa4HzwryUbG",
  "key30": "bjKAo5CZiWm6jS5CURHpSfM4GXPeV4ATeXJqstnR596Ws9s1DoHSZVAdnb1UvpqPNEMw37EBwT1BjEKwDMabE6j",
  "key31": "61aerui3VuNuVRqSByipW2BUq3qy6HaETPhZtzMs6nHjXbL3x59AwmkDdGTFQapNxQMmwXnonzkpSgfQ5KzC2Nd6",
  "key32": "5ahr3Xe9YorMEoTqjF88Viy9YQsVeGLSsnykQqt69fDQbyYt4Ry9uSrdPxB8d3UBzZLuEkhUZ9qmQVCAxJk8e6Nk",
  "key33": "4ZjWngApkrMTC272EWTAhJsJZ2VU27o5xXUmSPn5ng24Yh1rBeB3xAAfGt9LUAGq4PrAGbUHXyoWhcCkqcqYEYbh",
  "key34": "dvnjgXM6q6TWHc4prRi4Pt7NC99J36T8Q2pxnmJBnE4xYHacEF2bqFruXir5PVTDSUTEF64JNJLUt1yupm1miPt",
  "key35": "3ozwxFcSM4naeULki6nMf6T4auhjcy4fo3PniJkG114RRyZqCUqBPLoYTTARvv81ADsNajX8YwTqoE8CGCvYUf25"
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
