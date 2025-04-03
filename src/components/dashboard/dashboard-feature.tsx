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
    "2SopJxecsrmcfYnVQPfZDzQDcVVEsYepkhVQ6K6JZf3aBFniHuUmaPwJzrcFtPPfP28nFEPeYZTaknk6esiUm9f6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FKYRAMsZDCNCytnM8313K4CN9GA1AFmDi4AojqKiXgjdPKNPWaXfck5Q23tubuPq5qVjH1DzvKQ8WPHwg3p4hTd",
  "key1": "5HZG2WPm1EgPcQfaV6SfWPAmgakdZ6NxEy4A1cMyHsTrWZMw964Ncp9sm5dHhPaCUVmHa9ACTvpBkUct9zcus1yo",
  "key2": "P2TjdbLtSvK77ABMpC6xyjYj7DfMAuPGhUM238DxgsAiKouvJa7XZH14GAVQds3gZdvVpQDkoMsf776ziVAignL",
  "key3": "22DFxMxv87ETfwrZNP7Sb8EmfxmPLUYGnV5BNeiEUKkex7ejj4QyyYiRJz4ToQD4z7HXyNPB5fsARYvLwq9C84P5",
  "key4": "2iWJHn6eFVejCMMpyN7oQ55ghpRYBnN2NMN9X1sCKWQPD5N8H5UPe9EcYfYef9dxrQizTx7wV2h8WM1S5mcuBrKw",
  "key5": "5bT76jBzEvXo2GXsbkuRntrr1YsCRijKy6hN9Mg2XQjnpdGK6vhLQ5DNF8cRviACA6zQiFunP6XHUoGJckFwdasu",
  "key6": "4mk5a8rG5abMVCtriPuqrrPHC2S1x7PaZKnsL2o2f4wmVBiejGzbbGvJ3RZgdnzPiVmtSU8kK4FRVEMzoNXoxe9F",
  "key7": "4VfLwwTHdAYjdFcXKYp587cvUydSo12v2NU2X8uahc2qmbhRaPL6JLxRQgUX9rHcqMvtVKn3AsGa8QHCnkykm4u",
  "key8": "33p8C8eciqZKmrMSHcQ6cvXxzgJXNgLHHgiDNprXUiTjhQa7Y3QjeDQdLVYogVBwLnjfsBQbWWFAN79iMQasDPAj",
  "key9": "4xAuWkVjhtpEvUU3rnHmiLein3bYMBMFBt98AerFqPzbbEuHm9PQuW4oxswXgKbYjTe2w2WqwR6drq26ueDMiz8w",
  "key10": "maTACUan83oauaBKUr7QD1SehgSgb7jzu38yC87rSDd2ciyDFNogUxXWZ1PAtFoPS52Tz2BsotAqgJqjPcwjV7Y",
  "key11": "4AJKrj9BkEGWR4uF8KkbQzuT6VqVfQsTWfz7HXdozUq6K348SrmDMRNK98RpyZoHkZrVReUzKz1dfufRcmSBt5Ve",
  "key12": "3hynM9uv4RejXru4SNkHyfFzgW5GofaAvU7r7WQeZzuobWR8NWRkfyt1tbGvAnDrTSEpzcm4PqJmEKDNAh1QvFJ3",
  "key13": "z5c8tx4CFzwCB7EUPAzBdBNjK4fc4Rr2XvT1DSiuN4Yi5ayt31sGHuy9GAy8LANNufzTDZC8aqUMemz4osnpujH",
  "key14": "23nW4k5WBzpsNXzJZ7JPxdEaVC1J2Z8g3oE6HtrqozPWTSoaGjDzrUdhHFgJq8jCgYQ5g33TgAU227NVZxqomxXx",
  "key15": "AQx1X1qeU4ckDsrdZZPuRrkjBQdaaghVRR5nABTKEuJeVTEXxBXBKFtYnzM7dY8ydZjWiLyhQXuk8PdMwD1XffA",
  "key16": "3Rs82nVLY2pNR7TdpGEd4kwn15r2Z9ewj4csG6HFN8jTf3pqcS9yeUFr7h6WrdP1hmS2DQ3wvgwbLARSD1mUa1SP",
  "key17": "5eVc9ueBHbqfBj1afVDi8gCpEctrBu19MoRJrRYuERaZk7NTyp2NZ1b8NemUHz2Cfp9WQVbsAJxsEpBqirTNoePx",
  "key18": "2BsFPqT16vaQiWcsSim9XLDMu712P6kVcRvkEiuK9yEYdkUGghuMAFWQGj2LYFNbzViNtWmva2uvKhuvEr19GVxj",
  "key19": "3sg4ngjorC7F59ngam1BZzJQAtLXggDk4aLUVHu6PJNPVpLyFUMn7eDqTrDgi7WzkQ8yzjCXpLbyYtMzDuvYw73b",
  "key20": "4TqnrN3ZWkBwXAokc9hL6m8W8Ho83uebLSqncnfQNNnag6GhbWibKq4tBUZZfwJkJfQsanoMR1j1srsGLBWV3ZdE",
  "key21": "4qbHYY4iSQL7SZ92LeVk41HoP2S6n5J4Ffm81Da5eVREKSwnZ32a2jzH6wuXpM35qes3ECiWCrviUgcUbgUJEAfg",
  "key22": "4dETeFBdBTWyb3xa9vh4s815ax4FtpXaRiQ9aN9X6yugN99McfP1yNRQDpdUd2YFJ3zH7FdGyAnQNjBuyfebXe4F",
  "key23": "33s2TyGHvYkhq3RvQeJk8FrcLhQZXxDmSCWJgpuHNRieMhXWdEgEkFPVgmJx5UirCQ7spo4AGNNo8GqEbrnS7XF3",
  "key24": "518SmxPda2uC5ioP3yQeNJd86b6Ew7JoCvbCv9BLpjTakayxgzxxpEx2BP8G8yPb12sd11nJMb2yaF17Haq7kcPw",
  "key25": "42PzmV5fyEsQy9Edhw1qde3F6AAp71yrci3oPgWYN5GqjK7cRhNNPhSYgnuBDDaRie4XbqpBFPVmQXYHKfvgiiBG",
  "key26": "WjgYBrbq6k792sVVMGaDqkDy4DtxezuXWT4U4g18DuPxECZbcHxyHgzLqZxYvWWMK6M91A6vpAAiWLVVfJny5sZ",
  "key27": "4BAw91wbBmWtVNZQGXx7LBrXMpvLYTazWNAdZzAEmUm48JzXPyg71CTEosDUAb9BAFGr7HbojkK1TxZqCDHux5j",
  "key28": "PUAckedup7T3HTBqK7JAx1gWmaM2VvHa6b2FkSSC8FBzWMyAsrFGuA2hG8kRSoNCYTrogkULVKy3RUPkoVgB8HG",
  "key29": "4gUjd9Br4ab1ch8bHzREiw6UWGjLKnnDe45KCyQCVgH6uiBFmf4vQHhcCccLfptuZQuF9Ln14SCJe9PLTFEPooXj",
  "key30": "33M5X17M8EPbrfVGHmUNmbNdB8KBbYHUMidEizvdK6BJyYktxVsK6gTc8naH1F2vbC9pL8TDo6RjQ7m8k4ESCNFG",
  "key31": "FwJyh4xiX26zVWdMUHRPoq3YTWHK7kun4rthBWuKtSLz7JWnD9izBuwXjbegCcWy1SwGgB6Uw2epbpcqNgLS9th",
  "key32": "ZX9CrXy2B3tjee4TJteeEKz7PgUBANYjMB4iuWkQJzPQoZyvbBri2P5FbqCKL2mc8ffVfV4sf29eVDkQzTS5TFS",
  "key33": "3PsBmNBCPmbrLGRj9AkrGMaVoWfbKj713Ldea923YtE6j76MpkdW2iswUVH3vLMLMwbLV9hBmDPtSpTwvf56roFE",
  "key34": "3NANRQyw9Z77WAFQHmQjMdfxvM2Qmg7P9vLAWfrEZSTQ42n51D96AUgQsK5MECmR9kZagnXFQHyeRriLg7Mr51Gd",
  "key35": "3jjkGYDq75yf4DAr5yzB6xwPQZ3tpe9YiGStWz8PjSwo31jXBhPFZGrRdhEkAtb1MDaS3NsfLXYkJ4T5J6bbZhcN",
  "key36": "5hJT1ikH656GeRdMKdu69JGoKetoaUJLputP9JMbdYau6P6DnPy7EJ4vjm66WUEacqtqKzAfFL9zmyA324WDskDm",
  "key37": "2PWViSEs7rCHYAC6BPwQjFnefsPvgzx6b1LQ4A4aNrrczCY7GYrMKZhwnwHhQazvnJiWrdAAM8bwuthbo7Ys4XQX"
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
