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
    "3EoapvMrspnMRSWJaPqgM8K2i8RXoS4umSfc9yrimGk7UALLcRjGE1VgB1qApfXhPxqCfiEDDNDvYJSgTrsozi7f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L7iziG9wiaRMqZft3TN2BYNNvi3yKLhghBJxRKww2zZduEDeknG8pn45iX66odr5XMbasT6L7n817oechRv8Xqz",
  "key1": "5dVgH4ansDRBTKK5JycpJvzk1R24f1FXZF9sv1e8ZJ835rqw7RbKkTo1qVose4LuxreK7xaThgGvRGhnZGxh1L5u",
  "key2": "3rhPfz58QXSKKtnP8biXJbQcWAGdWR9BDiXFac9p9RCJDX15MkeTDqh1UmiQ99tmhvDxVprvZpVNhBytCKcRJAD6",
  "key3": "PUdQY2LC1JCFjwLr81wqXgBozpzykir9me8qv5WEKdgzQumL5hByKVvULRmGvgpcD4ppazx7Hhb8nXM2NdeTUU5",
  "key4": "4rekPmwC74Y7Wo4v9hst5kzLxL6W4fBbTSKYN1kJvEz88t1N47iK1KffKdH2tSRZx6zF9VZzwuKyBXVgZC2os4JD",
  "key5": "31RW2GfoLGeQN4LAXDp5EWLT8ouNgEhwcLFJiqWhK3TPbAnLaXKNa3eaRrD6Bu5e7FFG9w5moWq7Sfva3iqnGvQQ",
  "key6": "uJG6AfW8WzPx2KcnDo748EczPmCCmE8hMexW7BVagHqWTpWQafFDYsYKgnfqk7T8XrMKsrkB4vhCdngeLbgFnnd",
  "key7": "2RdajNGcRta5rxMCPdqEeLbgo2z9aM9aw2ySmrMpV23EryFq8c9L4JEEJkjpduBxtkDHiHqv2bC8SgZ7VCQWJiPX",
  "key8": "5ZJVJ1qrz4L5FeiXJ9U3sqnErwYomJvSVj11xnVSdjWP9ht1FkizTwqKpedCoSZfmmbCnGCo6Htpq14ERYvmu5Y2",
  "key9": "3m8DGVFJWZ7DkncwETDz2jySmm46D3tyXJrApkP9TTuYiUej9iq7v4MohMps4RSfWefgYsxUckT32LME4gX9HKhY",
  "key10": "5RdHfknCRwemhyrxxGPepJa4UEUEB2Q8udrTJYE7HqNaDUyeRDiZKfzuff6WHqDA5JmmsQFaV1F4jSt1REK7C9f4",
  "key11": "4UxhH7dQpwtbNSaXnT9dKzexXmXwxxPMjfze2AYxrzX6yPCkjQwk8yZxEjSeCVNa2cQ7d8AGd3EfMMU4QHxETr5q",
  "key12": "5LLNTaRQcwgVVRyLXvMBLhkmUBEoJbm4FSPqcus5qHbxbgvgjEdSjFnMdN1rtauzQZtGitYEFCRPtCSgyW9haSgp",
  "key13": "5SW7m8MmJFyBvjiMBqxgejkvA6kp8jpL3vdJiiZ4dp4tFf8DyfHwCdLcQX2zybVd5Uj32ikEKepqUc4sjCcUVHYJ",
  "key14": "3JNcRTW2E2kwJzGtyRGjiyPnEdt7KTSXARbYR7oEEufKeGEnAv8v7Jwfa7JLm3g9nxwDEhcihtg8Qab29epmx6xX",
  "key15": "2PZwS3UwCMiTmMYUtJxe49faNBCdbfTKspFfFv2JjfcdjiwgR4VvPfxmMMvmdToj5CxeTbzaMB6jovobXnefpvxD",
  "key16": "5RkGNKpWVj79mekhH8mA9rT3sMCXTaJYzf761gQg95JjJGws8rkZDAzU6niHM7TuGeafVSNvEYZ9oNanwKFCcmFt",
  "key17": "5PVrcPLyXnxag3HLFptFAXmgDGjYZ24jZvTFbSk56AGvJcYnE8AtKLqJv8zhDj4K5GGBf4tHrgPnzctarQCu9nYx",
  "key18": "3FcWR6F7AZKrVhs83iLCNJQmhHRt1kmkYuzu1oSRjt7i8pX3m3qkQHAqeKzoG5KrLJotSWfn54vsojXUhxaJeptT",
  "key19": "3SRmreQpQQPsyv2ozpDnCrFj6SZqSMA1r9F7aSSZNTfS9Lg6Lb1vVxr8brD36qD1XJT1TzmxdXAVvcoMLaDh619j",
  "key20": "3nDNm2DhV8dj4e24MqasFo9LKPzuQimuU5Nnvbg6SguqiKaJbWpHJ6HH6AWC2REa1dRfkRivBFrqb2kvvyAM58yw",
  "key21": "3LWisA37eVWJEo5CW4ZTxXMAQrFvaZ3WSPL6hXkryFrZVeDEGQsb4WvME89BK3sS573E1T91cDVjrTG8oE7Yo38T",
  "key22": "5ekTpQDu2mPW4MDnFwcVJzcCsNMgJhDrh1PDKxz1p6huKWLsKkWJHoXqNtaSPvAkVf8ahNJzmESiAeucNbEBiPoF",
  "key23": "5mKE2bc6hZmBv7cfXVfKEkVwf1ehR6rKSnmWwxfDXFHk4mV53Qr4r48nU7Zr5fGxtUMnyKAcypecxsnRqC1sqNEF",
  "key24": "WRMXZ7La2jiv9qr18BJXsWQqovis4b3rhQpr2Q6YYVvxuLxa9rCFCYQUzraDQGgba8PQp827EhnDkRHJmhSWNcq",
  "key25": "4Vfv2vyryV6c2iskyixJFJT3ewUeTY16oim7gwvozmxyiZWvQZyuAJaTkJAn6DZornhu5nJbHymFxBmdgivmimdz",
  "key26": "388iExVC2z1hqXUFEFXZ7RoM8d7z9Mqwad9jkP5JkFvtqddoyBWBD1msYUdBpZejmfjYq1y3MDYepr1bi8rjz61d",
  "key27": "VeHr5hrH38BGs1pNYdh8nGTzied3RRuVDqKSSsxHyD2VX58CasTT1z1E9CJ2gEgnDyJgWDjM8yu2QSaZBdJtFdi",
  "key28": "4fdYr2htfLCpkLz4zpLxDKBBdc3zddiqdnz1eWr9BPoG23txBvd7bCg44qbGM6tPbRwBDMZrXt6En5S9Jth84jtm",
  "key29": "128Wza4fuCGqfZFmcYKy83jyCMTnRE2UxSovEv58W8i8Ny5Y7KNNBFFYgwgzQwn99fxppiQuYqt9w2Yw16k32jXT",
  "key30": "61RPeJLw5Bo5mSe3CfHUw7EcrG9Gxp69tGBkS2EmDnkGAzFeFG11HLTJsbASuNZHeoLLNP5JgMx2qo8RZ8m5zH7p",
  "key31": "3TWczj5DTP1xDDFzhq5JLRE89auFiHZpMMSewh32jtjT4gubtNZfbtwRNZgazFdEJ5VkykGhVrVpZLa2hpghqLR7",
  "key32": "4Z44F51ofG2KLKgayS9QWSsykKoeb9SrcdYy4RYnZ2Pqmp9KFBXzyMA6rTC5mQZZiYs35kxnnKP7QXH6oF53goen",
  "key33": "bs3fK2EbiPqH3gWo8r4mi9R8ttgAnrNdmsqNr391iUp368MMPUUF6ckeQM1E48VV3nwsResdGFk6eFk54qRauCS",
  "key34": "4Pb12SrGWJJr6hEU2rJhA2SvmEGiRXjsyZaJRvTfdpKYETdAskKYJErhABjn3KPVgAc6gxVKt7rvzHWaUvacjjDo",
  "key35": "5adLLpnRgYvrApuvqX7SW4AzEamyFP4UEVKjf6xCF7B94ezFuGcaaa4iXLSahgBjuLhCpJq3DQhpVr3LdMfE3Gbo"
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
