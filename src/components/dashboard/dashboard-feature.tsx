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
    "664Lvuzci6Cy71Vg5V27Mo3hgezNDsF77pheqBT9qMdsfXhNsDKzN2NyvKuNjPGLYQfLerHSS58gx3whWFy3B6yc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sP6BcNvj1f5fX1KgQEq1dCVMCdKhVky3LAdaBhsPa5EnVjAFAXUtcJsbsc2GwPhVCZ4EhNc8s2DLNmTDfBnoByq",
  "key1": "2ESnDxzqPiKvDryj36TSTrL724aStEUHx35cEk8xFpSKHeEuxJZfHpwQnZmasjpeS5312XSqMy2PdaMFtvfe7WaK",
  "key2": "3K4fvSoA54gghCzLQyF2hwxrGzxogqN13uGdN6vopN4XGKTUnE4PWDRS5i2Px6VXNt2yEUWgyQESbPQXZNbbtWVH",
  "key3": "447bskT4BXqWjV968syvSwiJuoNrsmyt78QUaUuMvQditudi4vQyyQrNXYf76uUrCer4Jr7jT1MrozNwoNzep3Nt",
  "key4": "4FwjNfmScaeNWNTznJrysdvusdPgwo4itnHviZ76SsDNA5mSKaJrcLte1oX6pcSfZdFSg1YCNCFmE1NnqrJHPpNB",
  "key5": "2u3B2kMTNVt8CBM5nTv7UAvndYQaEgKCvqfP9fXdeG9iRzKbVeZqCzVPBwbWa5Xcdw2PEQzui3KNh7W7uB9Gnbkx",
  "key6": "nFL6gV5ZsZMY2DebhAZuFrS3u3wc7js2W9j78PqgZ9gZf6Q4cjPgLkCMvihLoDsWd2p8WqQQdbsRfHj4rUSxu2L",
  "key7": "XcD7rfSBhm9yDD9AjuCXrp5VBnqdyDihT1F9epVtunjg8uypFvTziYqu9GwLxvcUXpv9vhfLcuT5L8Xc9UnBwQE",
  "key8": "5o7wjd6DsL8eB6EKETuXMBknSy6LhB3yjbefLKNUPRQQiovq81JFmspuAK9zDGJJCDmk7UKLKHSXz9tohfCu7hML",
  "key9": "UEgoi1oVQPudtgifvVobMsW9rCLdzfcpN1UAdcJpdntjLiP8BhbFoPcoxg7hTUdyWudntQjrjyrjbDbe9Syjv4Q",
  "key10": "2kWuEafZXBprBeAzLDvLto3UgHws939k3xrePLrwdnniAn3F3ekVo4kRRET9ChyScdisTHDiJbPEg24dg8AJF3F7",
  "key11": "3N82AQMDCFhPJiNnrwaJV5ombdcrwHPZe3zRXytjncKCbTidzZY8giWdjQzKFtaTr1nK9AfJb8xgnKdksjJX9rEi",
  "key12": "5Fk5e25Bi6p4YJXjgFG7YH4hyzZYaa3HetF1hbwNoVUVsF896bdWNPAECbMDkE6RFmdtkRbcruvvNiBxt77Jg2UR",
  "key13": "4GYXo7bJL7vEVdzhH2JuE3HHfziNVvVimF64g7rCf28gFsFwUH1AHDcqBJShh1PHC6s7GzMHrrzt5vSd2Mdhk7h",
  "key14": "3sQdduv7cMeVgw5DVBcYGtBL65ad8CeX68iUQSf1WWz5UWi7mVDpkEspWT3XFmxgUsqAvVd9DsDSVwXDJDZPru4Y",
  "key15": "4q1wBHYmBZtB5EgxeunjCdgz8zT9y5gDvb1gF73VD5jrbA9RXXm8jM5YTWwiiaimPLM3P54rKDiaAcaxww3GCcq9",
  "key16": "2DFbsDbJPzy6H2JHi8tnMimeNwzKMzsh4748yB4FmLyfiFrHVyrMzMcee4ei8zxAz2Zmf26NzByLKP9a9n1TwS3o",
  "key17": "24NHozXwKVDLStfjHd5eTPTjWozUn4kKCSQm8F5zWmtiEMYnmhto2maH7aqtXH5bZWJ8dkFLPjZ9jd5ENkWQGQpc",
  "key18": "4gCdVdeuTiebVZVd8eYFmx7piFpMeWhjJaNNbFYURcfV5RxmEXqGguVPTfDpbsKTbHdY7Gr9ToptkmemkVT4UbRr",
  "key19": "4mE8F3okJssrcsgidpSHDngMX1hHfcZgN3kmwyUNMrhgfpnJTrbBLdb2aN3aLZ5BB13iMfv5PH5KTtbmMQAWetrT",
  "key20": "4P1qnW7bv1Kmp6gtws2aeMDA24VFKcf5RJH9jYfzwVAhwbT5EvkRRGNHvdHvoBhxhhQAnumH6WULu4jHq4pBiA54",
  "key21": "52qnY2T8aeRd4r6a8VsFWciKAi8ukNoLZ2mbWQWfxabC3hy2f6rkiCkcE43sB7PAHDPHxd5BxQbUNn3CD3ZQSomm",
  "key22": "9qGJuwJATbKgKcs45Tqbvb1EnjuBdnVGB2g8sKvgKguXZNiHn4NSMyErmR85QZ9gnNrnwvYPXb92T4dv9HdqhVV",
  "key23": "ZTneUH8AeBjyiRQJs1J2B314aP7cpDN68KLs3X1maq2XnMgKgbBGpCYCkAkEve7qebi1PjY7ohVPRwrJfiFPDqa",
  "key24": "2kV5V3hme9z5dtp2MReYeUAv8zeN3ViXc1uehSL75QE75k5qMUwcSba5b2aRcKMpCo1pA3TUH1bzHuoZrF45djTA",
  "key25": "MVgfA6dDHQj9qmX1H6g8X1XgV4FmJkfhExa7UiJQoECXpaRojrTvZnZp5zg5tkATLUVHLtMU4qikPTjcmf5G5Dp",
  "key26": "5KD8qPNJu4sp4yuGUcfFyshmnSAUSB6bKzLvaAVPbkUi229vYSv1wyjeZQg8vBFjJo4rR6KEFa8UTjvrscrcUjvJ",
  "key27": "3fhP8qbZuUVKD7T1Z8jv4K3yre8WEgn4XxgjLsuWsPW7PgUVoXwKkjKWjFiu5H6i3omz26WTmFqmB5n1i85kPmNJ",
  "key28": "4kkxZQsvSKHHPMhPsRpMXzgk9Vbshfb9yXddxhLmkBpVTrZWSZjB41XY1jwbreKincMyMserJvePwqQJEJ5ApT9m",
  "key29": "yjg9fAjctdDsJVXEtXjusoe9AXh6MH4CTFyWgCHo4hmBa9gcSagzZejR5cVNGDPvXLMe7rkTw5d6cRjo8A3xnR2"
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
