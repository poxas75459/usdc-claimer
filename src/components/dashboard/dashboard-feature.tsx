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
    "5FZfsFiP7YJWNsViqxpTwa1uMQxNRbjb26GRzsGDGH6aRVRFS2dMkf6Ry9PehXkJd9T5b5sQtuNvJ1WehtdyWGDv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lf4aGcdjhxtg8H9rxhFLTGZs8HdEkvbkkhyxtpcaBbJNGXkEuHq5ruX8dvSRPrwtQfDEqPXtHGt9yhrDPZNDpsU",
  "key1": "4xRacTvridfjYFX5UjRygsMMDqwoGSCjmfuiLEfxVr5EHQH3GXskMQXdvx33PQqUoKymVYMziWDmSJAnB1etFrVu",
  "key2": "3g32wvmQzjqPosXH8t8B7H8o4pUE9TCBT3tBicB7bnqJPePhQ2HbVAWjgSmv7XgTVEdkdLZUfd6mWWa6JHADsCTc",
  "key3": "22hoBkWLE7xxvCfKJn7wPosh67zRPQoRwNAES7oMkKcA1zmZxHfhCLrwpxvo5auyN9qMQnPiqLF4AnfC6FWoiYk4",
  "key4": "4QWHzXH3eH3JHLKXrUHoVwGWFh6SxfCtEd7jtRZDUTgHvfkQQ5UQMkYgEr4WH3zPc3VjfvpvNAR59LWWojedeCXJ",
  "key5": "5REcjnkXBbN3nD86xJa1nN17SowFYWkX4V2MdLzX5WuUMhfa9qRZA6QHfsVpaqvhNkKd7kjJLa841AzkdDbihH8K",
  "key6": "3VGK59sZcUqR57WXr3ymQzXMEdUVe38kyTbj6kxQsymcLYWpLHJqKgqanQJ7HZrWhYtjjBPeZ8beQaRsQ6jB8rce",
  "key7": "3pxmMzeLVfXwcdABp9CwfxtsKwGPFF7mGV6JbfFhfJWXXBqz6J1WQDt1P5vttMTMMYq8k4smgTzJnCtCGWRKyGbH",
  "key8": "2fwH4e4c1piV9Co2nUCXXraiSDXSEJZt2tXov6jHiM42z22cTaMeDLZrC3asu2uNfcNCw1Nd2MWMNtXw1De3yp8k",
  "key9": "32hpAdmH6A7zMg2oz6rZHR5aztXNQWGjGEodqeAC83QotvDYMJBZZH3Q3ssiqzqFXFkj8MxCT1rs1gQLx5pBb2pW",
  "key10": "4UhMq1Yj6JSpBDJo5eQWJp71ppssaQbjH9Aotpm4eguXHGiUw4qL3bjfHGPCnba9VtZ4Ng2oh1fr5HSaa4J54Ens",
  "key11": "4rrR7nzmurgUsviNv2SHvstV9m2hAKvcHJG3wzWZg1tr124W2cgW6RcaWHLhw1GndTfBkX4hxgxSdRWFKUWWEMvQ",
  "key12": "2oYo9seFb5w3voNgxeaoCzCoMs5F6bJbCBCUYw4T7UgJ7tw5cc3XECAmDaMfK6FVdTVCVwdn3nnpA5M3JVqvpnXs",
  "key13": "5BFj3vZNLUBCMQiDUyBvGeG5ifqNg8mDGttKDzDpE2qVNrjuBEYTBHJSjbQt3pbW8cykMPQFUk9jcNKqwDamHVDZ",
  "key14": "59i82DYXzZBJ4j6RMdsuiz8yVaoYoFWhoC6Tv6qA5sKi8KELzs1fgpvMi6XL1YeUfH4Rh2NDxFfvVHeVZtXrCTeV",
  "key15": "3vzRqdioPf68gUJvFtKPRLfbSSQ5zw7DLqSmJRK3mccmQw4AMShTxF4iE7ogENs8nLD86wvqidR3FcCGoPTVZDrk",
  "key16": "4kbZKWyC4cX8vn34fsGbV1SXVfDt7TxQKhqgjan6bVBK5WCaQuXL5dEmAansZnm8AZcoMcLJRKZNKL8XaK42ypmt",
  "key17": "2kBfzieXDEg3NMRyH83jhWJDEExhEhKRRgFspc7p5jbW9TeRZJHQXXMuWiL6xR6NaaPXCr2o8y4ouNMQzT7F4QpS",
  "key18": "3vdrXa7XJiQj5cDE3U4VZP5PgRhbhRXHASTpzsVY86dP7kse6XKjCx4QTejgQ1LdoQDfqj8H8ufF31pbumtyjU6f",
  "key19": "2hMRHDz5y1rDKX3QvMcP5nZ1KtcV8VuBoJ6VRpVbuTkeo9m1ptRdxiZaVs7VxLxtyB8uJZM5WMoV71eUmQCu7DwQ",
  "key20": "NtihZVtxkcY2Mx6Sk9Y1w6w3MeYaeLkisBfzVJmjC8y7B4TYu4KVDZ2aKPj7SPfZBKCxXkAhvoToAwxEZzophdp",
  "key21": "4oDVntvbU44FSKvRYRj3wupY7hcN1HoPwzDcpzP1hRvZNyS9GSnax7Mbit2pjXScyespUwLCNhcqyA6zWQiyufiQ",
  "key22": "64TxXjmMv4HekHpjHegRULqk384fLxbwfVb8YRjYAG6jEmgsBDHL48Q5uskGF8CQTpmfVfobshZwsJModjNYrD7u",
  "key23": "2GDwikh9EFZM11MYpTXcrJibcbJzQwRWfgA6X3hiQjNY5F75RvALsZKCqu7jqPWNbasGymsRmxJnaLd5ne87FXQh",
  "key24": "55Ay6JoozRK4EeeQwz15tdsNprFpRoUdk4mNscLQE8ZYNWfCdydfdgMaiPvYkPyydUTL9HUgTUq2YkpCfRyFP63i",
  "key25": "4uChsMktXhaQc4giBqX1FMzFwd9zhnzreZcWpDjH5nNit444tjzuqfBgLgVXPg8B8M6nUCrmRogNTGKtCk5oyVSr",
  "key26": "4ax9W29J4jiwJtQxQmoUfP6Gy3UYeUR6QaDH4RcrNSSdbyBzkBA25urvG8k1pxRekqLxkAPSGbhvX747M6Yrhnjg",
  "key27": "24brdDCHZE6WxZJVod3tpHpFMoSdfbcD3htHMzDbsEsbPJswzy9hYKYZZHxvr7FGfSvghNxcwcuUJMMZh52vHT3o",
  "key28": "3oH8u6ci5jYY9gTE9onEXhwy15cX72m2MfM6CJCBL12FgCeATtLAVh1r3vW8rowN45hBWnpa2d4RDcdTpQiEqPkA",
  "key29": "36bzwRSWT7GwxA2YdJZCUSAYFoEcsTF1p3d34GmuaXmfpQibBruEy2jX8LNePdM8SRAaz1NuTF9ZKwVpkb7eJPCa",
  "key30": "5Wvr44xtTLr3XAEUBcaJ9tP82WqmNY1Fe6kFwphTPkypmh34p1i6pdPjA3paFUpt49DvkWveXLYETHrd4SKvGttB",
  "key31": "59wcmYhjDZmwuW6mYmjkLmRUGtTuZrXAdWG22JwSr4A6pWJz5vzzDzStFjxfLK75gDfkx4bU7qmNL4C7H7poUgKg",
  "key32": "2SRrvBhBgx54tWFMF1h99nLtjHhUrEgzMQ6CP5ApUiCSXhJadd8LsBp5J5KWTyq7AfqUvV8wVhhN1PHnVevU2dx4",
  "key33": "33ZSb6zMSvwXpAAs99htVTaBP4Cjwn69LrDwxfw9MJTGLUya5EHeCZkvdzBEg4svmZUss1AZwsZFpm6t9J5spWFZ",
  "key34": "4Qww1TJaTaTEn1ctynXfyzicFbmDD63NTVBMES23RM8hvqgtFNhGtyPmKfKCVLPgpj5pMrFhAtQR2trtCmQBbRXW",
  "key35": "4NdoVR9y2jukqvnm3iUiY73dCUdv79KrfU3VtJdB7kfSsCbx6zuyfGfzDq1ubKZbE3ZoQfvsZjbvEHzqufNMEUrs",
  "key36": "5shkZ5mWyHSe14c2FDVzF8tmYimw9mqA3CaCsdL6ai1XsVTE1DfCVxMwWu7gDhxN5egS4Ei9qjiLwV5VZBPLh64p",
  "key37": "jmJ9iGpnYyLNKvDNDTRUoEK9JMW6HHqCgeJScccV9Y2CbcE9ZnEMgh8rxo1PYnh4FRGwLpjh1gEJWWLc3i1yn9m",
  "key38": "2LLnDoqcQwHmDAhZiBjwyff6Pqe2CBx4ztvNnvkWitMxgLxzBKpv1wsmbjnwNG7GrMo17QG4PAgNiXxTVvzjGkev",
  "key39": "4MVCdk8nWKyZCGVi31UVPbGBzXB51h7vuNwwC3NkGZwreJmFJrFT8m4XoJDkeDrz7r6uRxzWJiyrakxQq8P46wYY",
  "key40": "2v8nJ36HrAkKeHhJjaNogY1sVtLMsVVu7v32Ygq4K4rV2khZNwGT94Rbn9uTkeitWpqyj1tihTAjyvpEhGx5ZZE5",
  "key41": "2oZ5wDLMRKHSFj8HqmhjNBCoBJ25kCpek5iAUFMk1oujbfQ3xDy93cpz6v631eWxrXzZTQmzwMFRzCLs2ph9NZXk",
  "key42": "4DBnT6cYKnhyJJshV8SRXo4LBpMdZd5G6gcWVgxC7C8sucGfFy6fUQr23ZC7xjktHkdMY1BQbusqtXPs9SBPcbTb",
  "key43": "3SFWvR8KNaQ2eAdUyhxeQSTbhwWB1zTjGEy5FwoEiasTPXip2Ba6PQV9JDMv6JcLwGMzWJNGtGPFckEGx6CFqaTP",
  "key44": "33SAXFF6H1iEASRDc2c4tjMCRDfr4Eu9E8Bk3Jjc9Z6UE8wM2q8mYWYgDfg5Hmi6GpMZHL3i36vBBXxFJW9hx5Bn",
  "key45": "3oeW8v2qbUbAtN5KDC7XK7CYevHCyHCYcPYHz53EuE8i8S1Ec9P2XTsjbPdqBDPoSxZCYCuMesrYM5pbbPg9cQCt",
  "key46": "seRRaijYM7H5A4CUgpqvyEhi55wUVneTmn22C4y4emY996W3mFskorxVVcwzoA3HQ7tDR4BL2RDE3pbmwMe7XMH",
  "key47": "54AGgeAMFSHUoJ9vdafLXqGkNccr9KvsXD2dPNakx7Ei1EQDCcszw7y7DsjQL8ziu7Jm4q5gCxXZHmDuKQFp9w14",
  "key48": "65kApxHCWEMRPC2JrJMYUqgWL2aWNBCVLDTwvZnsEcshs22jj9grCERyuPH9Y5FPL3yaVVXaerfRVHJWSquS1q9e"
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
