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
    "9jsNYcd3rAgbb6fQPz3r4sb5D85EN7ReuG4N3EbhQNRAAwwFc6Hdb37wtb4wjaoZRRAh6QCCSptdVo23HgqyYWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JQFP5JaGyFtFoc1B22162dzn2YjQNwB9aTns3ro2A9U6vw97ufmvyH9Q3ASX9WkAwfFBd32beZw7CnW9B1q9rfs",
  "key1": "4UyPPEa9HihhjU9NoxRjHQbmY9nbGug8A6ixmBYzhi7jNhv6wHxZiA6Aib8rooS9Kfyv1j94bg2rVWvDXwvrsWED",
  "key2": "2STTAuwLWDsZ4w71vHWYfxji9MNddfefJpvKJ5XzF1NUL11iXWJzCnztSfvMybDwhczDtoSrxpT7uZTS6Jo4b5qm",
  "key3": "3pX3eN5KKhorHZfskTwQ2DDcLoMofNyUYrD4qjZeyoMBjT595cWQZzuun7SDKjkEe5YeWUQPoCeKrtmxrsFnYS2J",
  "key4": "VZ1qhxvT7GCoDk2r37FoSzXpwvgZSVaCExDyrhW5YDQ7n1hs91j8GsX8i2vfzvxmuqytRiYu54BzgtPJ9x9wRbu",
  "key5": "2RajdqGdLFw4s87JiKSDDKLS9DqQiysuvPT7VBrNW8hG312eTBmubfCqzaR6P6tuEEB9qFfehuu2T2PEYKLPazBq",
  "key6": "gmSJj3sEhY1tsmmS1z51vmsw4uWvbBDX34Sx8MNyGHBShPz7rqa2medMNb58zcxVmVeZhRZKEFHcfwgjyzZNMuc",
  "key7": "5Nep2HeQfiBRbGrGGojqr8Du5K6iLJ4CDV2KaBK5GjfdCKhX115E2NmeFnw5XM73uyQuCyqmdoE6RoG9fZLBGmGP",
  "key8": "sMkqHxqvUG8mx16siofwhTQ3uP7ySu74PN8xYSwWDe6R5tSdyqKXJHiKe7zkmW7TDYCg9TTGDNr8Qxgr71RBGU6",
  "key9": "ocva7u5WuJP7tAP4eLj5cWNCMKNusN3qY5sybSFVvCrnjyyjVCvHH918PFxTNDwnqgX6uiTQVHzN51DEkvAUQDe",
  "key10": "26xFLZ3gAnc1X7iNNa8k4Jf4H8nMAnFdgpVmoNTjuNuKXEC4EMRixNzgB7Q4Xa8szZD6q8vQt4yopzFLkZ2iNHJ6",
  "key11": "Z4Caf3B3rxJLACzL5QN1wLmK443njd7hhfMr4uG8QG9sXRDjsNrVd2kXUwAeLdH97HvwinW9MMcGqVUt3zXd3XD",
  "key12": "5a8JSCmwdekZGcJW9yYNiEeNimsA28FqKXedM6P26Qw5xeuRcDbSPjNNJ8TRKHnmSANmQ4GD3MpzCF2aM4m7Gad5",
  "key13": "iqouMofjKquUqn5RTRbSjaF3sqCbAydc9YK9aBkfLDVGFkDtYs6j4417XmSAgGbj6ncttW2aSrdoZZBeJVAiJUL",
  "key14": "3HQKMQRPCKbjN49UoKkyXQkeLaY5gJjo7j9t3gkmqQW73UXZq3NHKjpXcRuvHAvy4U2wbd2nPHiaHRiLQ9X4xyTD",
  "key15": "33aaU15RV4KziFs3nJFtJs43EQ6MfD7sytbFmp7bYFfSPycqjJYEeVsGQhmbSAeVb575uaZzh8uN2NQmn8WZ1MpW",
  "key16": "4GeEd6GhnN8yTReyhyUtnch7M2JPr1sM7ktK7VPurg7tiqx3pvRcEJiFtsPHhwHsUAwGX7dcYRffZhhwkbXMutb3",
  "key17": "26VrAbiWY7dNtMCd5vWtE5NaDZYFYyHxshyFwnmqrvrBodDVirmLCN7AHZeKiQZxSPbcY2FU2SmgoAjrueF5ADCr",
  "key18": "2FogCw4hoejkCv5vmq5Uv8DbBebsGr61CRQtdijq62QePPWDpbrTYLyGVajMb9jbcqQUjbTi1X1sUkc1qm9eJaxW",
  "key19": "4E6xscyjhc6TfyCV6ReNrBEChGuyy2NmSETmokDszsgqwRxYVRfbVnSnyty56SnA4br2XQCCf9bZckKpfrKvQGt3",
  "key20": "4P8Yk8WBN2rTghFv5Q1VWdBDw5NhPD3wjPTSzVvcWhcXhq9MJ8AVR8bcyT9bCKzFiQ8KQZtT5Ws6CHf7sK85UKsd",
  "key21": "6TMSyMsUPKaTXNJdgEERcRTvsQBut1RiiKmXxpa42XcyoRzp542ZDhck79BrD7vF4ydbxgtkYhe2pUFQj8xLok4",
  "key22": "NVvtsF5mySWwH4A76to24gZLn1ktvZUkK7fep8AvbWEksZA5J4BsmFz3VNJAfZP54GJh6c6XAiupghefYob2yWb",
  "key23": "4fugFCfL6VRTxP5MSLQ85w5dzeygmHeXKi6YeaQDUiWg3sMvkuc1PBze6qgMEXz7fjt99RFY8RHfXiHdGPMFtw3w",
  "key24": "3Qt5CoNww43gbdzc9Cb8sb8QMKbSQ7XYdxV17kGFYT3jUk8VUZ1jsrEmw2FV3aNRyAXJsEEke1j9NCcTN6ASKtpk",
  "key25": "5X4ZHR8WiJzFcMVc7xDxNTZAgZUnN2eAqG2Ns9BLpaECC5cAgXTd31jkHEUMu7MxRpDpGVQoYQnZiRBRLkun5n6T",
  "key26": "7h6jmtHP7WVCvLYKu5iSFQvHhDf3xZUc62t4X1C6Axe9TW2BGiLNjGKnm1BaNMKVwpBNEVp8cj58eLqgvoQFah7",
  "key27": "3gJtRgivoYz9XcqxJewgpdmp1FZzHe6RPWwNEPbKf15U8ShHbFDFdU46Sk3MvNUDBDMAA7gg67otujq5niarczcu",
  "key28": "2tHn4NtQbbLNKXhphaLGcQbBUziWefJBdTJ4vKm3qyn3R4wPtEznFmyUJtaKXBRFHoYSF21Cm3zf3DU7FxMPYVpY",
  "key29": "1r2bzYcGxvrK7ASmUE3CrJyxFyMz82DASrpnFqQNET46qDUESEZW2zhycb1SC9tarAnyKdhZJfaum6ESJrZDhL9",
  "key30": "3o5TchBLF4oh2cs3ZpMshQphVQcHfLXvBiYFL1G6qdBL65gCZTe2vykz1wtk5ySN7W6nedgQQntF7hjfMec8zGiM",
  "key31": "2RnfCEsGKgmAkCeqsrdYBre8oWeuMCMGPpQFMtjnXGiDX38dabSF7ZVMWieTN9X5PMeTyvrgRdEBF2uhAxbLizXP",
  "key32": "23U71sr8PWYLeUywza9ACtdwft2nuT2MiZgUwGePXyKLudU7gEex8CyjHv14XGAqKCZgmxknCxE3ujCjCP42Tsrh",
  "key33": "WVuBgtY3WvJoDJ4KTCGYALwKdHvMVBhbYVmEaPHcy7FweSAYj1bgkcdVy7qt9bELYdHcda6eMx1KZjtYE6VCNdG",
  "key34": "3hK5Sk2ZbJVwjNi9vJG6eevN4Y4ci9dvzFzgqWFsGyCX7MfBceaqZSATwu7kck9NRZiSZkW9FB6jvhAY5WQtGYUt"
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
