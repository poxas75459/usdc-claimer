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
    "K8DzdRErXCSKWdTCEeDuKnAN12yYU1MTvUyFWYg27LRRUjKS7ZZaaQo3sCazL358fHEnbY6cDGs6wV9gmw1HRY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CBJi16hoB6xji2iePjjhcjk1kH1sowDLSeRrRCpX3vdTnyhAc8Sav7HAWKGX944Ueb5hSrbzKjYynzT1rUvfM12",
  "key1": "EpoDRax9bDtAjnjcEspQ3AoDw5amezLU3bWHwUHKV3pvHN4CdAdzcaNiWVJThCEQP9o9sYzDnTAD6TSLfvPXhEr",
  "key2": "4Y78JubumkxFpUvQXHTj8DMcTW6cGmyKaDfUoFydrkN4CVMepujDuaJEALDg7U49vnrfJ7Yhxu4TkrDoWjMk4ztn",
  "key3": "2zt7D59WR9vMeuhGbSwkPJrNbUAoyH3RBzfC2h9M4B3rLS6QxNKHmRvA1nvuXvzz1FM1HFTaGucbMti1bvMHnt7X",
  "key4": "2zBsgzrQ2aGnwGW6HGnj9Q7ZNJU8C6GySmmEAZvzPDdD7kwEqwDFHRSwop9sNCaQUtGouVLMgpXJVay1VU8VKr7p",
  "key5": "kYrhZrUMTCQbjMkCP7zBiRx26gUCBr7ZwP2LV3pUsgqmH8WjeFTYVNSnC8WLWxFBzacK3MZa2ihRiqX5mQx4fjc",
  "key6": "4EP72YqcGv3bTAxJtooTB5q6RsXnUogrhykhw5QPefUMgvnMUuUdd9XpGmX6npQjC3YP1MbgMfoevXgtRyVJ6oYT",
  "key7": "2BKQNP1bdCwmMGQTX8gNhNnGaz3ji5imYDj83T3yDpiZm4QrjyGfz7hU3Jn2NbKCbJqe4BgaFwnzfzAu29kTt8WF",
  "key8": "issB5Vd4oJuMLXb7yuHHdbjwTWK4DcmvQaZ4VSMShQikrK6pENYHhL8ELvn1eCdScAFNTmupZyReg9fukkqPBx4",
  "key9": "4HKuYNxd42YPqiMgnht6TQQgdNoJGUidjQVExcvVrvLLUjcePVLmjGzAqxMgFMYcvp8pSXMJTGAaqhhf4LmWCZs5",
  "key10": "4B39CADDxqmwrjWUmGNSgsCgmjjUUguvjKjPs5rbvdpn6fcM1fHFQBUBb6DWRL1VeqL72cEcdM6cNXvTbd9qhopF",
  "key11": "5CmdiMw1yLcMPmoDACQiWm8kF9dS7TMqjRSFyHeW7EC3isojreTNiCt9btKzpA9fDpf1iKYXJnt5fEyZmSQWT19H",
  "key12": "vMmYxQSn6vEqiawFFaGR1sbP8KgkiR6y9dCBk7AF4Dwyq17SNVRgWYJjVyoF1ykCjjJ9Hr1h8EXbCtJnSPibSw7",
  "key13": "57ssQTdZUGsMC7QTLrHwgkJvDhTxRszvm9XH6UrJtL6DhE971Ujb231sqw1wKGnEhXrr7cQY5wzy1WWAoAjB3hKY",
  "key14": "447PX8onnZKFDeKPTsxSmZDZAbkebJEHLwzEkRERDgyzgj3CKFbBhNr8JNhV1iwcmK1dGVfhkESoQneAv6KRfvLr",
  "key15": "2phdL8Rs2RrAQrLUgh2JceHdScyTRdmQRpMsBUJYGydJ1CYH5vHJUmqd5Hs2DQmN6Rya32evtx1utEFWpe9ypMbi",
  "key16": "5kFfw2Uaqra2ugHrWRQ2T1EJ4mR9juFoAYQ3kpBChRriWbsDMr1fQUeM2mMQEjEZvNarTQ3a4vK4P3SFAYUKmJES",
  "key17": "2qamM3QvZFEBacbcAqjwD6v5Q96enCtEfbn6kHRQqKhzeRr6c6VHgwMUkCPDEcofxT3MhBZverXqjpgG5U6Mnros",
  "key18": "5u9mATSnQfYuBS14xhsUtEkwDPqxDWYg76wBiVaYik2fckYPdrBuCavsqApCbQ8Xx5egnToFdTDScNzjfshD8Gtd",
  "key19": "2p3TwTpMyBjaqPupymbZjUtCRGYkyetR1uv1AVUK9bztdQEzvFckpdBh5icHaT7knzPG5NXhJ3irbzgxQEQJwCEg",
  "key20": "3VfsgRWaNfmMjRoeM7C3CrLMZECaox2GS6XUPJetS8p42WYSHYSovZjmMgU1javpKeQ8ogayVQ6fW2iXseJcBCKP",
  "key21": "2mCL8xLbocS1LAvmgcHJDAYH4j5TZZLMtF8s3dYhqJr7B2pn5rV16yuw4fG4rscRrqSuw5zrAVdCrwe3WkMq8don",
  "key22": "2mUs8h9ubNRn44CMsksnqvXnq9FFbcoRFTsxnntaQsUMnWoav2u8gZorfkxP33YqxC8aAE53TpQt7YwmxGDjhqPY",
  "key23": "5xHTRLMLBTAw8K913MWG6joTCSmY23E6ENjpn1mH3n5EvvtuSeQpcEMr8zXQ3jwYUL2jKZFv2dmKEaYRVRyZDtTg",
  "key24": "2p85kP2ALtq2L4qjzmzGDgu3BoJmZeMVMrHhdksoCvPkJpg6aVYXwpfpGLxWfU7EP12uVu8AvLpmKvC4Z9U9x4mR",
  "key25": "4x3eKdLP8vtx7WukKmLVjBugxG1HPk7eNVPCYXSi5634MsQCL4FbK1uBjtWoFjvVmCkvw1gUzH3Nh2cnQLCJUqyQ",
  "key26": "3yPqh2xAx27f9CNxiX7jrTdSAHmz7dKaRRgdNiZpUqVm9oMFdmrEharTEfBgbCGMxjjd4LgMLqnu7aodM5vGcTBD",
  "key27": "5E9ro6X1niXNGom5hdtWC75vSYVr8Dg9h3tHc56vMxcEspd3G8BbRPuNqj7V8oRDaC82xYaoK8vqU2N2uBQEJ15e",
  "key28": "KStdSTDdzKasfGQceatH4YGovuSDxp9PbBF7K2BKpXLsypJs4g4kVeaBGvuc4TN4zq8Pg1CESaFxogWwT95mRGh",
  "key29": "o7e4nmsLSVyZpvc4vpDsFAFfELUU6QNgsqNMUAcJ8NUqz5cakz6TDpzJaoTXgrqWvgjoDFSMaojyCfBiVND1Ryf",
  "key30": "4GHRXPEfBjEkeTofNvU1b73ikQcboF4AoVUEieWj6FGoKecvoboiQoHLeYtieU6BQ6S6Dd9hMubg6EpmSgD1WBNH",
  "key31": "3WXp53LBxh58uQtZ6GNkQBvfQxwj8w5E6XFYvYZ2xHn9q1b9VrtxqwWEJm7ueHDYGRLPymYXTW5hjvsWMgrma5Kt",
  "key32": "3kiZMPz7numU7XU1kx9R3i6jPBSZCsdqVMCLy8Ag7Yon51ebJQaPDaemwrLFqNMyEK1pYPmv5rx1prcVoXu6ZxLd",
  "key33": "4idNPyJ8x3jTNV2zzdNQZs9G8YWNSx9ZqTrMjeE6NsYuZoxWnFVSHguxcDBaUTBezBYpkNtnenGpRoa11e13y7pu",
  "key34": "5URX8JeLeB6YGzitncae1szi9E6MZNAhKs63sBNECzbQSadTXbJsmCjJEqcYRRzZfKyCjKChf99wd372Kp1uECnH"
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
