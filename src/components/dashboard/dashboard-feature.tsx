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
    "2J9z1dM9ivPRfaRnbibZSMBy2kPSvNLWg3haXxnaCP9pa7NBMMHMYeQrkhAMPuB9n9GY1XtnVMX1goi8o3ct2Ge2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pMgb6JuE5BDVUo1ckpPTXCyKWTNTFLaKaBFmpSFvJBtDuNLx2N6vxkERLfGVe5FecMShi4w5g1YCZXmNzGgtCS5",
  "key1": "24jJjA6FCUffGxo8yGiVVYtkeRZFaNAG7geQtGHEVCTwsATLa8kgjofsBGDBeh9ma57Ks8TVKuvQUfPSnrfquuwU",
  "key2": "5g49xu79Z4jSgveDUpzMFLt4QCngoo7oetqQ3SsgFneSW35Q38xaUd8HDDvM2JiuRJtrjWZtRgowHWUYaPjKhCTC",
  "key3": "4KsZFT4NQkML7XnT84zAje6YvAu6QsRfDsuQZCdpaBUPEs8SirASZmXvv24bZ6biHRyPeDHieStbEuL7nuo27cij",
  "key4": "4SJNtyhKSVkY8Y5B5PCa89Mcoo6rtnuANgxqQ539arEQSCteFttXT8HTkgnFdtqc4yWfo7LoYfY6pkZu6TVzJCbr",
  "key5": "4X9Rah5efGfdS3R6HamaBshcks82vC8MjBE5skWxnUqwtZnToith8pMZZyHcBEh7ztat8t3W6eiC7MCJix6WmD1G",
  "key6": "2JaE9DXPRVKUBe1UYVkaiMhsphwxSjVLAsHo9mmWdZpRD9TpjSoiqcNVAFXmp5dNCPpYUEz5ss5xacTpurrVzReo",
  "key7": "ZwEdxb5p9NTv4vADzH8S6jNRcvC7iXBq5km2GDVyzayWNDJsDhfc6EkJtKdjLU8bASm7zp4E5CuuzEpS1p2G6Fi",
  "key8": "3UYPCNqmnjaMbBu7d3GPgfDCB236oFXApYPg897GSvpWzMR8Jj6nnyde1VNxEGsvhFTpAWrHA3jPUAEF33569pCB",
  "key9": "2hENpTvVUhEtihiQ3kdq9A9LdC2TSLB4zotC14KEcvzBEh9q154VbfytvRcEVvngxmRh1tW3FcCJNvmE5XoWTjBm",
  "key10": "K1tzmbebGtyWpwqvE5S73DzazQpK4nCWpkSUfBApNzHSmUAcvCLF4Kvg6U6M9fULhjbPAMy472PakCSc7vxGP4e",
  "key11": "64DH3tauuykRQHg1MiuYVWZbyphhJVojnGENUDX3S4eZ7ktRavCuAGgPQstVX46erzFR5P4khQHaPmN39hhahpLH",
  "key12": "3NAcWjijhpRjxmzAuvAs9q5GhCjnWySr26k3YhUzLZRPmP1ndwZyUGH6Qr1Q7UmPf8aEgUyyGZSZAdRKoHDRTFC8",
  "key13": "XjrGHPZCikHzGiihaHbSKUwNdcXfR1ncSwMPcRr6wzj1szZvS93MfNoUFvZ9b1e3ciQ6dk2bbmi3eGzaghvnRmQ",
  "key14": "5aPr4v1cgSwYPUBxfo62duJ8GL8dkfFEUprJBChAQ9Ni8Pz1S7mfkygcRbwQ2iVKaCCs8oNDwty7dgC1koXtF3NN",
  "key15": "3WxMRQ7ntuS8oAYT7tFxEbPiy3EkuA7Hmq5R2opH25SshnXZpH4oQum18jnjjooSepu9CDnFksx9kioCZ94NbUNE",
  "key16": "5YSr237VLUwiUT3qrujZkxQF6owysR44EVPj7aLDDqDSYwUBf23nRSx7ASJRF9F3jRd2BiYiPWZoLdHN3DK3HpUf",
  "key17": "uzPwUBU3A8RBV6EBUZoxLAocjuBWSzSVQgP176TfnGjXqJjG3URYxfjFV3DpASw7UV8XP3kkgt97hxp1eb6kmzY",
  "key18": "289SbSPtxbpUaFow9TwFoVN5U1B82WFUHgKxSprFv8JXXWp3GnpZGUELd3CTKSKRWzQYc2bjrQuAQsvwoFiMzUoJ",
  "key19": "ZcxN3fCbUVvrxr9K1UAmTi1o7T7vtY2Qc9uwcQ5D7yHsA49wZKVwDKveLo2KBSS9fNMfQF1aT9c7SfwfeMcanf6",
  "key20": "4CyB75UK2si6LqNuSEQ9HTB6ZZ8djSsCZ6HnCPcTdx287eNXEo28qcz2FPrUWT4vbeYuPeSW31mLyABcoq6g2AKw",
  "key21": "3ukgq8e8efQG2R54C7q8U2EP8ix6EstdbGSjXYoXmBuLgfGZqCbhDwARFSFA3Bfkm5KPCXPDWym4sDbwkckUgUqw",
  "key22": "4iVgadjEfmjWnBDAAe836gUi23z81BB5MHcPF8cNvUfAntG1fsDw17qkbBsxVyu1mESQeiP7auAuw35xmaaLD87s",
  "key23": "E3USnPfm74b4w3xKeUmvRrqS2BdSw7DmeDk69NGbjQVcVpF8RBtoDKzDvrb8aMNRpawBDbNLhPCyEkqTGsk9S8V",
  "key24": "24sv19TfC7vF6wChoPtPWfPQxJpbnoEY9joCaQXCmqh6FKZcc1N6DkGhWCi6x8PC6A4kEhaA7UUTbMknxqX22bXv",
  "key25": "2bGKXNZwLuFY19Loi4KWDmshaGnrSmAro23xsALjCj9j4TZm6NpcKYQCoZGMFZvpov5EkDeJAqfSoPEhuqRZbZqG",
  "key26": "3ZsmWm2pR72D1XbkVwxysW8eJU5crEXr6PRsq1h6cX9iZyVhDjcEStTGxRopXnHe4rkERbjnmGeCRbs2vMmDjQ9X",
  "key27": "2kf2AWCXst7Hc5JoExeTxSKED629kCJmVg46DdUHeBGb4Q3b7hGDi26NrMZnie5cH19hwSzamnwL4n2gG4e5HGGy",
  "key28": "2hWGDcs6otFrZnnvmU6yit3DYjc6Djs9UqBEP2NHU3cEr2CRcqarnkX82Qf7nJqsE1yGPXGMDkKo1wyD5LRwf9SF",
  "key29": "4W47qtMqfSiPK3yK7LbYW4QoaZD7cZASZWWc2tFHrkRRJ4irSMdddw7ncdK4WcvEkCvV44iYGavgMgEEjh8GrGuo",
  "key30": "64HkHLj6sDxe6upMxAVRUPRD93zcRUPwvaSRj3gf2caAGYTJsBA2L5ioYjr7HEyC5G17dbJVAN4mwSzSuyhvQFpX"
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
