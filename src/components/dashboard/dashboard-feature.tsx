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
    "27aFCtHJ6kwf7EkncFx2hmyi16s45rqYsGBNbkSvE6WZpxKiLtvmsQ9sh2TFWJboLV7dpyUTcuXuuWHvAfSXhQGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rpiot9vKFWxeAwsrHAVz1uzeMGRJBWq5b3bmNwzhAzfZmqZJuNPGi4ZfoZhYqnsuw9JnAzSXzAQCVpNafSoaxAS",
  "key1": "34uFifU25HPH2VVDPKbXwZ7KSLBUtW3PqGFUYpnMAiq8crJarGDzhn8TJ5V694SR6JXPwmd4aGSeLammxDbVWzUB",
  "key2": "YHEzqWunXnNxHpzv1xJydVnDxRqxCXupBWDFb1rPUiovNPn2nnbBymH6cagkqDudUZd3tdrmDrjbKLtLa6P5Fd8",
  "key3": "F4JRudhw1589bYF2FCnduPXwtVix4Z2LqpmBhsgVYjfWM61v731UbnuvFPz1sWLARE25bknTGS4e7qgauvMEech",
  "key4": "4Pc5qc2McT56TKiT4ZA4a7qt3C1L3jdhAh2CYh6oCsTLmYyipzzAnn5ThXCqfZTGeDaijagRX78hnGhFiANLe6s9",
  "key5": "YszXRvdntK1zDmxLEEJvuMZWex9aeS9E7ridp2QL4JpHnzZHjZCTfiZFr7jQbmSvkSFoUdRNK1W4QMzEnj7LGHi",
  "key6": "5ZCmVSd8BnQ7wtLdjLeGxVxWzVGG2Zgpakpr8H4cKqERgqydLptvUi3PvypPZVG5ghdZDoCRpFAaLypCikbUmVRp",
  "key7": "376a7jqiyAjYwYDL3Ghi6pcKPpZJN8xh79LM4XtcWihaqt5msS7gDGqiFSCncLptHGpAWHPb7xZKjY7abeJJV9KD",
  "key8": "39VKY3c2MuLUv7oPNRHbEL6XDh5jTpax2HRy1Wz5kbH9eGhQggpRr7tijertyGq528x7KQ3Jw7o1rUKTNA3KyNge",
  "key9": "66Wypao1wYJVMczcBUxryBbHFwBFjWKSJ4TKSNJv188v4d6hUNBKZEKnHQHTJCHaFrDXu3PXgJtKGWJAYb65DoYH",
  "key10": "54NhkqHmGwoDmk3inuaTBLy2VKAAEQb8YGcV8MWY444gVvR9waV1o5EkSfkA1s6Lcn3JK8BphSnq4HqZfZSp3LRs",
  "key11": "5mzNG5jqhWz3Eqanp4fNDuwn9oP22pxwirX23JUwFzjkqYnvLRLkQEq4U2BzDBCZYmHKQvpNHqBFystz5JJH92N3",
  "key12": "2o63wE87KbZsBAYvVJzP4kNh2445hstCCx94QW6izPLUT9SNTdEfaoqbvkgtFTb3xUnco15mVZHQrAVdUxemJokt",
  "key13": "oYsHCdaN3PNAZ58yaLZiBbhuUAS8fd75Wrcidfs2tjg8dh88Wv2ch6s8GmLUNUiE5SyzuSgXiE7rtJvZcs7QH74",
  "key14": "5pA1K8UEmyVwXunjMj5YfearYYyLdSXFRjd1ZEj7C5cL3Ku5zQH61xdVudNJ97hjqyJS8n6xHSGD1ELmEDV9TtfX",
  "key15": "2rNUnAs1ZrRi6H1kYHRDT72QwEidNDkmCDoyK6dy9rJN1vqvJQE5pFwXTEjJ9PkuZ3LcTkhQBVpf11SjUw8ZTBfY",
  "key16": "3yxx57wPwySq3Z2njRkg7Mhs5s5Gv2Ph1DLQnpCRuzAuEqAHgfd2T1ScbzeZ7q4whJ6BKJy952wwwQ2HZCsBuob6",
  "key17": "2jTGKujqnz6LYcGHDvtT3sVNf1WnCHYXRiBDR4gvY4srZHmYoSdLBC3dfPDBKSy9vXYGJoVmu8HC2rGFZuTsZuNk",
  "key18": "2hiyi1ymqTyqevcFEh47fxyj2GFEPj6yYnoWXbpyZud2HQURGYkUfbKAz3XsDHenV2iW43AU4dLAnrSmoyxgMsoL",
  "key19": "HFLKTVF8dLT7Ee9dBtdmyFivxQsE2sYw6U31t4w9j6SNyKASFK4vmqic96rfth4NjpkjXCNDTbsRr11a1SR9PW6",
  "key20": "5D6krms1Vq7RHWvFBffJhaCc6waJUk57YBAorna2Vn1c89jWZnnVMoppqjXinZAFJvaMZk7JWak1UDVXkMUdiRYr",
  "key21": "nMvFbw1z6pxnrmnhAm2dWxFa75jrRRXyYGZT5Bbat5m1fVdqEV2VC1vUrb9jCZzRgvwPHxaeQLt7YhseJ6XjTfc",
  "key22": "3LGmWnqAA2Rbxm4ce44hNGvAnD19bzQZ4PDZEAZMEdHgXx17t8R8cvWuKMo4WLhZoKXC2MtrCkgS8jVma1HRTVpX",
  "key23": "5ExuMc8QGfKSUfYw1fB5WikkH1aNupjv9wdGjTqhYbMHnXiRPgWkKqPXhLXYj99675bzDnEQE2vBbos1ZjtUzFVs",
  "key24": "4EvXpqYEKaX2B6kZ3cinu8HRevy3BbyosJDdVvzkHYm2YxoHii2mPTP5irwVUa8M24zUHaH1NduQwRo8imYqVXQz",
  "key25": "xHgeb7GRj8LsJMEdArQnB3phc1yKfyEgDyBMjacjqCmgscZ81SobnhZ75qB9vCjb67Q5JhFdK589ovMUtxFEX7H",
  "key26": "39PYRLWUSb9YAWEjAAxJFAGgEcTNrArxq6UQ5DUm8gLGvjT4m7jDz62oBCxqb5fRPvUkXqRMhUyMXw1eXVGavR5Q",
  "key27": "3KNyG3CTxHmydxpFNARLTUaA5MNb6nDiKpgfkJSECa1EJxU4hWw8n12uFDkPaMGye5Dqce6D9eZ1Ag7aDRq5TkbQ",
  "key28": "1uPJ5kewJSDeHuMSUTBko1j9bF6FjLTM9tfy6QU3sdk5ntjRpjtWX4CiYivKWmd72aSjwgD7JiJyqBLbgHhkRAa",
  "key29": "4tZKAxyXk6o4CkJZuzqagh5pQMc5BMWfiXTGv7qtjK6AUo1nUTHJYXFh2SyLsbXZnebSdj6wT8Y2XaMYcQAckY28",
  "key30": "2Xuv1pWxzNqkJWGEE18tfJnePouxAd18NXLc9eSXWi3DEBzJ2poLXKn9zBjVxDBUK6isAoGaqYUoQpCEgGfKDMAR",
  "key31": "3ijZXazS65FWJ8W7vSDVoLknn76srnB5zAqFeYghWjvhYBgGHwhEfVmdPaafNhBecQ1vDfcdEUYxARnps2oufLdS",
  "key32": "5g3GMkVJ3uYr1j6haWcqEekMFNZLaaJsvN1ZhNqCvR8nkaHVxV3bRme8NhU8gKZWzDGA1BNPsau8ycTUc9Jrby47",
  "key33": "4iBxTKYoRqAWmDmFkFLx2Q4mBgrmTe3J9DtgQK3D34cD2QbFo9oBGsdQMcgtBXVhDLvRyu5bk6mXg4j6oDTQgEqR",
  "key34": "6VZ5evJuDpLfhaVtU3hJ25Xor5SfppRpHkxEPYCLZn9ykQaSKZ7ojHads7dYL7ZLUd9ix5mVVKDvu6iGjFgqaoE",
  "key35": "2iQPLnuH9jqfNBPbFepBTrNbTp2w21TD5zNGDqEU57mB1LVkkz1vs7BBbA5Pz9JwdsXd8RFRNpP5XsW1GjrGdbrv",
  "key36": "5j84QpFcbDd6GtRb4CtPrXUPZ2AqFu3pFVPQNrE45GqigRNbC5WrYPsMowzFCYN7HuC4abUPA3hAonAPRjfm24q5",
  "key37": "NZRUvc2THs5jcGEv6h8EFat8XW98997KneXStUjeuce7ZtbnBStmj1XVdfG9Jz6wsR28hTtDVq5iRiDZC8M1FJp",
  "key38": "67hEAtLf49fzKRxZXFsS3SfxbnJcBfKb3S2HgneM2zjkqmyGpH6DSb6bvt1f9haJ8pJn3cZrFLxtApvRaqVuHYtd",
  "key39": "4g9Wt55RVb3Z5mKwQHM2LyU9JHHZPgqyWxCbZ2cxyzSByTZT2c9HXiosszM5116jzGKdEpvwRQ9M3BXL9vU28YvT",
  "key40": "PpCX5b5QTVt3Xg3tmeNaSz8MWgzoBapMmjf6vjKAMtvQFXJMsQa7G2rtbwZ5E7WZCirP3yZe3dP5xy5V1GTUVuG",
  "key41": "vyaVj5UqGhNiN2cUiTcoffhcFGihVWfAULVBpZYrnvzqKmQYYCEiJA7JmEoR5Yovg5XL22VubVigkSaG7X1twxZ"
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
