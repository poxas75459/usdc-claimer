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
    "2AxXbVrWh5d23iY1HR43G1tyqUAAJih6amNpRTMXQALq4HyaUkWgQbuMobJASoSihmc8pznzR5fixNWKNuXvEGwb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uFTCheT34T74SNqSXwLUaN4LX6s7at1EsLzQEZ7VFP78UZeSMj8hCkCEM1UY28r5WVQjYunJNDkeKZsEcQybucD",
  "key1": "2EeEbX7tkPXMM3Hp735dUzcCRH8FUiCVs8mJ23tmrrgEfSHsytCty3TDSQjKf6E9tZ9Qs8u4D5mX9i9SqBiirZtz",
  "key2": "4ZerjHW9xeS6Kam579zHAZ65TgDvzac1zdAEiTbZvvvYh3wAzsfWwVVxQqGkoBZEZ3TnE15ec3SezQFNXPMX3GoV",
  "key3": "4RPG88YppqyxSXsR3WAoJtYBEk7gyNH8Cife3o9o2guHGVDETJeh178cR7kVqbuUSfApfWxjpkiFyBj2kVvmefPX",
  "key4": "2BojEvn3EChJ7GN6R22WbBA624uxZ262oSG69yNok87ED8mVMpcYLkrKyJdcj9WCsfuEWD5vbPEQ3tiKNzBFYdeP",
  "key5": "2qgastayG58BKSM4fV8MTGvjcVtVmgEKcW1bB4JQAoBE4bf5VqYmVSmg22WgznWrB78MHxycBXSJMYovNgtgnU8B",
  "key6": "2WzPXfDh68ABMniQyNft72G6KzkcJB2sysgKxrB8tfEWtsnRmzXqsuULWFee2a5ZwN3pAGJr6EztTJxEd9vJXoPv",
  "key7": "3n1tREB2uhyHbNxEN9gaPLVP4dsHrG6c2JbVH3i6urDvvQifTRtg7dkkvV6e6fXNtGESWed8GWWWvzgudfeaU6Xy",
  "key8": "26yzLiQvdf95NLf3SdjKAw5AE5saDYB6ijUbzcoiu1H4kALJSihDjopnpWgCVQMBHnCgtRTAKYXG8mZ4LhcfsvY5",
  "key9": "fMBVxwpKBFrc68xq69DiGUFkP1FLU2gT2XUy93soG8Wxt48r7gCLGLTt9SzEBfWgTaGxXBX1neT2yFE9iBP1ks2",
  "key10": "43LyPEc7zFmbiCSkzvNVXWUJgfiAADsLdGufvTrwZ1BSHgvioTY4wtHDgm6Vpf1rwoyMaRwbeYmBBJYBxZuWEeUe",
  "key11": "2hLAg3CLKbZ35VMPD8BeVr6k2smy4dqwocvAAU7byvYog12Dqa7MmA3Wi1fPkL8tmf1Da1CWdjthEhtsVAHGwQYs",
  "key12": "YcRuhZCJnBvNQwVF9WpdjMgNEmfrm4ZanfWXMmHyv4nZGyfcSw2G6muXGyCAw2SJyZXcHXehhJKWa9Db4SKncvc",
  "key13": "4A3kPYwW6Y7hZ4Xhkhg8BsyA3qUmTb7xJaECLfM8PEgociXu6QbdgH8f3QoeigK1hthWp9fGS7xte8Dh4ZpWj7go",
  "key14": "386CT9PDZxrqCZksYdGcWGoDc3Y2hRqRAeDtxkHaM5UT1TPrX3r97v5YRbvGWV2cf3JJXfwLBG9KmZ3nnfePW4cp",
  "key15": "4Lrmbwwg5Ja3HxmGV4wsoyL62xGCi1YU2wqd6ZV75RUg6VdTCU5pVS7Hk7AHCMJgyfcv2X5Tn6C3DgZrpcALE9d",
  "key16": "2cmNYKNMTY5bGtRfeUY7AoxMY9EzJr114WQQR5fRFTzmi6vzGELwvLooqzD6yp8XtS4d8BybXcxUGXgQm7tQjqJC",
  "key17": "2EBhssNUvqcWbw21nDwexLC4NSt3Q6CLsWWt8hiHECaN6XoorAxy6k7sKWEv4VCsjkDd3XCXkRY5oz8b8Bev9vvn",
  "key18": "tCNWHqKMGijAfKWwUB9syeYL6bJ9GqFssT6mxkHDhVTwxAffwhaa1NoMrh7s5XdocnyrbgerB9q5xUhDr1Ywqk5",
  "key19": "3aU7LqFVSHs66S39Y26f4gGmaW55hifnBpYiGuD85QU3FpDHtDB1q99rSSsScQ7FihehwZY2neZSB2etbVEFwgE8",
  "key20": "FMqi4Tz6kB8p8x5EC762RtQe7ebfMCDi9RU6btL186MUjKdLDPzkPt75he2DXY4YUPXseNFRz3dC382UpG3MfMj",
  "key21": "4Cq6gZaMVb3wfkcJYRx3fW21DtpP6359QtT24AbHP8A4e1cHoJmbfWXRBhaESK7Cu8HE8d8YxHEfi6VBgiRMZQ8C",
  "key22": "4TQ47EBcYStRzsQt6vYfozFx3VkjHJF69dR2cA6mNybajVpZDZbQ3okfPYuf3bYy2sdS8F1AUsCAQZFTT8PZCk4L",
  "key23": "22g2yxzbNghJu4ewHvVkXZ9nCF9Kv58UX1ow4FYNa56JvrrwrcVfgkXqZZkE6JmRpEPJXB5gJRbG94JdutqHSXRe",
  "key24": "4taaAkM2L9EWsvcgyxjXrWeUkC8vKTegxAhpK21cBKG5n5KQGAqXbzEXuqmadXgETatc7GBpUKPP36d1jYJbvrXN",
  "key25": "2xQaP1WfM6TxJyt938NsJeD6ncigKkW59kBpQcsDDBA9DXvGqsbTyGUMNeSD2cQarRmdtducbuVqqTbAgeLanGdX",
  "key26": "cEp16eEpqr81j3wGvtQvBeNeLRquNiNuiyFv7fTpMxz8cCeA8j2i5Vsijfhek54CvxVVN4bfzW2436EkTFKhpaV",
  "key27": "4d7b4cebekeUhqacfPKkRGd4JdZ2TQPfjtbUd3dJ2EzobMNfz7XJ337YG1zk3a6p1S3hRQwxkCd9kFi6TmHBzRie",
  "key28": "kEXsASazLr1D47wJdNoRspFQjsnGMq1fhHUDbg1AkgHHM4d2VunKDVU997gTi8pAE17TrmG3NF9ynB2AL63Fc7b",
  "key29": "4QbWaRvvfEkSxFmTtQ9APPQ1GfEQDND9YuHZSnRRMZ6yiGGSQxHn1ccWV1X8JPYwX7R1xWWs4j1rBWiRQG2inh7Q",
  "key30": "5cx3cQ9iNo71hGfSL3EMxHGD7KL9NP5cEusxYsBeRqQMiZdpaLesa8cu3AuoSb9dV6m2HUR58kdDgcWvSFAPzj1U",
  "key31": "3GxaUVSGjiV5JsmzgQSUrT5n2aNVqHEWgFbCs9rdB4TEFDi1DH8GYatKNu3o3emh6n1o7Dx2oquRrFBn3rm9gBHJ",
  "key32": "3q8MKNTNK7mPeZRtZ8VXgYq5jccuX6TSuQdqzUjxQDGqJfdL2jQLvu8AHHaTbnQWzyb6ttPmsxyhvuNmBAiV8gHQ",
  "key33": "5KpKqrAPKoXnbjezwejGExjfryngyJhMFhYAWRD5vquznGPtB1hjcQHDzznws7XQdGdQrtCTnGRpSYFAUSRiKLwg",
  "key34": "579DmkVDGL2Eb56jUBJSCLUuNE3J8q52Ctj94zLbhoGWsH68wDpB3Stz8etPgPZhiXrmqw2nhnCJ1sHdYdbpyqJP",
  "key35": "2dwdEyBCLn6AKxhK4d8JkngoUA1h9W32w9WEb1NsxeWktNRy5FsVnpp4ixk1b3SXYiB3MBXgGuJ9omS2BCGehEEn",
  "key36": "3rjaX6JV2Je7NuqNBDtvz2JcFjDuBPXX1AnJiHsrWGEvmnGXpCqqfFZ5Fxec1Yeoo1U25Urcio44381Tn3dV1VEv",
  "key37": "5KJNYDm5YgcsHnFXe2SMzmhJAECUkYLVbC6GP2LZJnrNtg55efQTyoEvXKe2Ugi7f2GQUsY76FFAEacDUW8gKZKJ",
  "key38": "2uodokL4HnGkuCuifkUeE1ho3XAH8gRzjgFTGqYF2ozauJp3hSksR4tEmbUtH8qe7tirqBDLrKo1cVHxPKMv5Dti",
  "key39": "55WxNt8tYkx2vvEEYwiRp7rj4JhjM3gVgKetuKEvDaGnzb5dPfNRf4GkSTM4XR2EuC2FuTZX6dgZzfmrJHajtT4i",
  "key40": "5SBA2DXHcaqaNd4gsBzU6pvAV2F4zqurMUfn68iQw1xn7QNAq9M7HGrzgtWmoLTQC8dJ7pWsaqbQRusqVmz1rzRA",
  "key41": "5VLWr3kLzxgGAY86hCBN5vWsdYrEBHAC1y6oqTABqhtiiN4jdVsgdEJDJXspzrw5xe3kj6DUNwrFR2a6U8tRicvJ"
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
