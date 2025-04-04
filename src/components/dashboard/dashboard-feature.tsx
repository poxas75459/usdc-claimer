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
    "2npsQVgKgqRwbiPE1Nsu4iZhVVpLahTBX5rBmv44bgMuA7zRVQhKbbS54cuRHuPSh8jDMweWNzj8S7cE65ApJK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yJmfEasFKt7AcC5dBTPyCBnbok7Q7JL521HT3f8PCLqkirZYSBeR3ga1kkDwA1MoanuoXpdvu1NkW2DjKwq69Zd",
  "key1": "4Xcbm9Y7v1nmSamkgg5PRYoeMAFcFYdQJLLckQX65sireXfDKCEQUGLJWTDj8vnH6cD75w2M6eZ3Ky733MGsEA1X",
  "key2": "3QexpVQe6HEgKcFB3aA2cX4rTvNJxrWU9gWrvxSn7KWfwavpMGtumhAbt4cLikk44AE23LA2YbMvHYVJAidYXDET",
  "key3": "2s1gubodCAPMBBQaSpFVjfsFqmAZfpfsB5VmwDCsxjMwyM861zxzCcXMLA8hjxTx4G3A5Ve8BeMsaDdY8yz9n4e6",
  "key4": "55nL5FiDHeCEcjaXKpjwQm3xaidrmCWr6hNNY8TBcoV8VZRh7N8wgC6hZZrS3RhomgvYJ5QkV5XoxEB3WqBDNkUn",
  "key5": "3C7vdWrdCnupwwGvtWjTh6jAo1kPUbNkHe4X3F87sZ34PyKKuy6Cx1j6g1uhffSNkBxxwhuVpZxM8DJSobLZP25",
  "key6": "5KMSZmT59gLwQRKtBkGdFonvo2N745PeTs3kdpewZLGmzAzQ4nhhnDNEg9yGZbCFwAap38DdELnpQDxfhGNVh9NC",
  "key7": "vDW1DNQKwaB7kTLMhbX56Ym5hWoem4agztY4s3uLDUBW7cDfJA4oAHiJU34NACEmsCmofFGSQtRvzHrFBs89oxp",
  "key8": "3D6QJd5Zp2BqTSHHJy7aRLj9qTTW3JT8GYd2CLdmsGsF734Aggp2RE8GxekJfv6goVEu15E6JnvxJaTvuGhpf7ho",
  "key9": "4qec7MmLN53gtyQRPTDmugQjrLeyRbsXBFUbtwAz65CeTnavQhJ2SqWupcUWk8PN3Hbh8GoFq2ci7TUwCg99mF3a",
  "key10": "51ppfrthP6MgfeD9Xsok34AFcqWnbZKBramUsJ8SXaPH9MkhKV2dAvjYLmdEEc5ERQZAnv4Vv1LbunZuDbGhJgYP",
  "key11": "626oEHDJb2bxGpBAHZLBeVipPb11KUiyadeJBEaPMucty3Qirwn3h5RbZpjZvmh4GvaotTtUVa9sZ27Tisjt9GHf",
  "key12": "3gQn7khArmf2WxxWoTt5zMWW1DqY4hqwBxxo8vKZMhsjRScQKSiieX1XjaHpyJpU3qS5LjFBjed29CtQ8JfmFv6Y",
  "key13": "2rrxwWkGdVXR2mPVix52RgBoUM2GQyp8Qr6rEHnRwSV7ysD4zRMKxL4vCGnesmU3NgMmvHj5LtZkyuhUw5tofpav",
  "key14": "2ycXbE6z8FSEFsamqWH8CdzDTcu93aaHfr6GRpE7AfCPUMy6TvzXUgXBTNEbV97wfefisoQmU4CmEjKWgqCGGTS9",
  "key15": "RfP3iu3pNQvjrPDH95KWSuTQJ1vuF9oRn9Sy8ZV6stVzaWKciecDkPDNEEmeDKPn3WUc42Fdc3grUEVbga4mWqj",
  "key16": "3tbiHgtDREDerkxCEFh41vRhYhfcSZs8tuNSHEcVoCz6NMK8KBsLZpumX8jEevtgtvEZ8aPSyqkEZMfjUNTrQu73",
  "key17": "4HhtWgkvfmHsWBE3fTiiyYmF3untQA8W7maNPDmhjfJn96xpfM4T4QW5isRsUR3yHkNx83tvo4jvCrhmMwf9Mr9k",
  "key18": "2SfLyBRKP1DbHEQTc8sfAsqfWi1PqQjW6Nw3DN7skYMDZrkdiPyd9HWmfkQDB1zaSTkirE11rs3icM1qga7L7At7",
  "key19": "5CFXcAD3ZwvqAjWaTSPnVGosnWhuc8RMu3h9RxWp5zZZNt1u7ETjCzYsebWs4zceR1CJWvMUv7h57cKt1pVnAHrg",
  "key20": "6MqsJhzzWn3nnLqCv8soqJLE77fPBhjn5CT49oUYrQCVPSh5wtEgoxKEdPZVjTjENMXAE8wE3pdtiZhJUEo7jpu",
  "key21": "5G2yLuASbYdKNXynKBfMejnj9CiM1iGhY85kvqvbrXEbuSTiHDrkv9hVfVE9HjNCdohDRqQj9795mnrZSRxeQjCU",
  "key22": "5XzKEKzLwrRJ4CGEhX9iFp9aHgoF96mKDurh1hwxxLAwSrKZqxQQRpmLhAyW9BEsBTqrRL9q5WqdiXFEHJDyvHyx",
  "key23": "55dubYJrVgLLzsjR6CEa91n2QyTmLG5CqVPkShc7HHisQKqtShMmhnzP6UGt4HgvcyiaHCaFNbb3QyvNA2KTfUNJ",
  "key24": "3UFcrrZ64eZhhk4WMGtGdoEVW3QaFecrChGZnnKmg4xEm7373rQv8bTtNLWfjzzHNe11t4QPpACHZ2NGiZgXFynf",
  "key25": "4BUNnit6vuszccHFXYRxumeeLyyhjNMQerZTxmY5hj8JySMRUpKLnAHKAu2cuKV3n2Lo91evcH2BwFwj8pE62j8F",
  "key26": "4axAYxhTT13QcqkREozHNdaMgGJnvykW6GZzwkFRxTCH5Zwytg616N1DdKKuVvr6KWsReNbSEpic55hfyoEHkVij",
  "key27": "42hPRN3xSvZELaX1P3u6QHEWp77DGE8dqEcsWpoTb7HgmMX5QCaZC8PBR2DDNUXBea5NDLxZGv7qBeNGPA8UMXEE",
  "key28": "3W7mnZAHHkNnWJMvFvKs1MxsqSYNFYiZrkNyuxVcNkkUiXvJDepgFq9GqQpB42VoVPFpAb1RDwsU7jgNWUcJXTBF",
  "key29": "3sCY9w1iCcYrNuAPkb6z5m2X28r18kkXdsHqYDygVqGj9VKrW4fFzAkJ4szpffvFMEVKW4XHdmTCAg8SdzZ7SpiW",
  "key30": "5ZWaA3NMqihHQ49n5tY7ZPLQ8pvFXdga8ybg43ykQwZihJXuLFwMmcMGZDZUDqnLGv4M5ozcuCWWoM2MjUpegbgu",
  "key31": "3NGSUZt76jnq71dVukyzZuJ2ABX2A4mFhBkfn5UHgWajxUNJMhLKCVH38xFY5QSceZy2N37XgvdH7Cvy5BYF9xLA",
  "key32": "3HMYQugpR86nKdUbLdKw22MwYqjeGVUVttAc4m4PQoxV5RtRrDDvaXjfGVNfjZv89SeMqYJmdxWfM2d82Tz17Z4G",
  "key33": "2A8rFZpC6J1mgMoCWShA1Px9zUNjQs1LcN6JoFqVBbEQv8cNHewmbNrAh3bHJ7HzWVhBCbfoSbEgzaNkEHKht94W",
  "key34": "2Fjrv2gRUYtwUr3r3tZp78KkrRnnrkLZoLzRQzJyTri59kZqdDTv1rsZymCjdUvU4nLui7R93C3hYa6PS3QRTNdN",
  "key35": "4nbxKM1VKqkjRBCiQF9RaxcTMkdjfQi6uTEEsiUvuELB6PP3McL3toaVGZZoEPKCWYvx1fdFJHKYquzXAAf1kwRv",
  "key36": "4pRV4zxGoKqV2UyArkdnZ4xfNqAoznDojNWL76HYPhWYjMzJNLjmWe4LkTYUmWGozn2LBQUa9CYdFjAVq36ADW3r",
  "key37": "4cVcTdNFRoTzZbuSnaEkWYcqF9gdBSafL9Bw29tZqHFLgY4CdaDDww9hcsPwpxJ8TuNPssjnzK14gtnMX7Ztykoj",
  "key38": "PLj1qd9q76CTD9pX6e7qwjinDzgcCWHQUwhigV5S2qLzzijoyvndm2m2X3Vv28tYE3DJBW9KEF99JiwpzK4yipk",
  "key39": "2QDQkjxkiMSsGKhagauGDviVRfFtqLtq3VK9Pq3qFvUKCicysuKncWr7Vw68QfVLQ2955mvCzVDdYsXGMp74AZgc",
  "key40": "xhoNvZmMb6sr147v9mMdf5mDrWUk6PfvSi3Lxe8xcB22H2JEKTWTQ54ght9fpVZgag1W8SkBbueEcERfKyPzNzc",
  "key41": "4mSzDhppFfMNUyRxY883xBu6spVSBEHeoTq8waJhqUFHLjbTscE9sKscDGvMvt5n2szoA7RgxmsFj3Du817mhY3P",
  "key42": "61fuaCCQveM6MYFKhTkfV67NnuBaUz9CDmxvbccR6Fr7NDgRiwn6FFkHBRfhW8vDZT3iH1moSbeLdU3T3wEUdQnd",
  "key43": "3nKqvt1trCqwiwp6hYjdHNiy9EBBNLxzhd28pKC2b5tnHZHknmQ2T29JML65SEM6WHpcb32TP6eqeYL5dCrtC3y6"
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
