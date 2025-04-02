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
    "632agLTdPEg2pqRBihoiZBSG9hRcTUtxU7kjhL99sLcF1GH8zxP54kBdQ8V776zGBYpJzVzNiu17aU8sSTykSbf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67Cb8STBSe5UhZPZioL9KEeJkBXdvpsEEz9N6xEDVpg4y3TajFEPz8xTwhHcuUWDT1ZqmmicMpLvvNzdQnJkPCUa",
  "key1": "4Qg9dBwA5Btd4G51RDRepk2YDWKMWn57Z21X4EwYqjxPHSLsLEujL457WY3tFKsj9sY1QghU6HETDH3tGXWxA1y8",
  "key2": "4QZW6NTWKkmXMwCpKFeXMgAyYBN93QEaQpRubFC8qm9hN96sQP5MgJdt94iKkJfnXz9KXCzL1YvqVLbSJcV5smPn",
  "key3": "4YgSvwr4jPh116sFGhryMiiQDDSbKM67QMw8rt3kAR7fuagpRz9guTDrdQqG87aL2F5whv9jPpF9Fus41KasNJ6F",
  "key4": "8ZVMc7ztPX82byFeHr3iw3JyMai7RZmxhFxC8w1BKo7KiayDNMgeAz8PJvK2eRNLvtTHKa7Nc6b79fnG7fZxuvg",
  "key5": "E2c5KfZvVwAxT88J1VbDNHPWyw2Fp6uz6RLroanQDg4R1TrtGpqjJLE9kwBxY3eqDrtTczdNfW5wSbu8D6S34zM",
  "key6": "2HKKCywyEe7NQA2pqADxDyciQ8ykjjzgDzbmzWPTNzDMKPofKffPe5oR8dPko4YAFfMSKGh69AAji1z1GCzVmece",
  "key7": "3sFexYzeuaYrvzcxCfcPX7jpsHdbaYZ5ovKhJDnFGJXHv9sanyrqmAQqH8zGy2qdaL7iV2P156DTt2RrWCns87aH",
  "key8": "JVcyJwrY8SDEAasp9AeNgcFPxFCewBF5uxPS4x67MX1EUbCnvowYcuqKuiwdUp54c4TukQCpjxPW7MwxhvEAFm7",
  "key9": "qufrXB8aKmNTpeeadpv8hmYEAAzWdYkubPaAYGsCGpL3azdvMXXnbU27dJipdbRjEfSayHGUoThxrcJUyv9cy87",
  "key10": "4cDh3XADW2jDE9XoehiztifngSk9mb9fxL7ASwhNY82coSEFguMkjyDMqn2nb91eL9WHqCgKwJhCQ3z8PzmLVFAv",
  "key11": "5GtteFZ7BkvNCk4ynsGRjZciUdcRhJXexVXg4ZLVxLHW7sfVKqR92MqubW91XLhEhkvxYpxFwUcurg5HzPwKVyqE",
  "key12": "AhCUjJRGChUVgsANnQLHnCe2QY5AKf3HQ6RXnGpqXHZP8DET9jvmL6ob1WqbdPdk7GNyTPPdbXTK8DV6b9x9HB8",
  "key13": "3FAfSMB7gKRkheTHNkTBhLALV4wVBnySgLUUrYvVXU2z1REvAKGmAVK2X1V2fEsRP9sKoGcAVr9JeX5J1Ar8xJXR",
  "key14": "2WsNwRbYa9nEYFAPf7nSANtuspjVi1hfCmLedcrcfPqVpGv4VmgGstVbzsCt8FkAxdKRFf9aEUHUzAvTDpZvkbpW",
  "key15": "2c1imgVnXRCvtz7uhx1gG49bL1Qinqa9qe8HzkeuUSzGBehGh8qYsjtLKXzfJJ7gx4KMxsqRV8ey6Ve571uA3YWA",
  "key16": "4Apsri5BV9DtiKmqmbroLgzXcviAvdWNbRosxGL5URdraDabk6rHhhfdmbS2U44cLY81s6kojkWMqXXXBmw1BPHE",
  "key17": "dEpN4vkFb514YimZXdQTH2BV6igkjXbw9qFY138U4ujhhFBPMhMC768nXkn8MxDi5TEotx57qeKAPyVzPspuY2m",
  "key18": "2yboDoefp75ssK4bdwKTWYHSip5ngeqHRvkjuWFGqi9j3CeCMkN8n9roMnGZKNjMBtHLbSAuXfy8ugmykNLma5uz",
  "key19": "63BFi6q1zatcHBcygRvWwxEXU6sfB2dMi7EinzzUUmRaUQPPyaPUvWsHLnRjMVHykR3gUh7v88XxvSNgmReys3tQ",
  "key20": "a726mmgLQYxMuXU4gfPcVTwQEtFyfThnbRAfTAmNmU7pfwGWjYSkG4HEvpE5d4gUc69dDLXFdtkWCMeXXLJ5HX3",
  "key21": "249yaTsHXwrpAhAumzqeV6ACK5GjdXrFRmTvCwVCqBmzdgYCY4bY6AFJdpJ22hscKS2kBHWL2m6NNVB2posTi6dS",
  "key22": "5984uExNbuFVnhPMQsPND4TPeWsaYkzQWJDxVa4zzJDZsn3wT3f3d5JhuD8L95NuZWHTgdEAihsX5F9qZMwn5zpU",
  "key23": "36KgzrdUcxWuxyoVZy2UUaoJf3sEyukNuPSrmRXwsMkqFTrtgB7RCtRbtSYTG1B8PnumF2MgRaCJxgHCUJ9Kk1Vd",
  "key24": "4MzhFhBVtGM9FP8tWpXVpRrJGrAWhGmdTYf8truH2F7gq5y9HCvCnKkamKvXh8UKfZU2EhcFUHathZoLQyCKUrpg",
  "key25": "4U4rSEju1crDbTe9Ev8rshMsoeDzVJxKb6dbzVE76kE1q88JJY9vYq6X23vJPXVi5fBfLASALVKUUvFcTTTTp5xo",
  "key26": "3oGChRRuHhny91d8DUAhzncQK1QCVcodpt1UjJUNhxJxkvXhHCecteAfvQ7f396DZghETo947S5kp73JPVqJWAio",
  "key27": "pxYBdopWoSFLUCUJjpRJ9pUndQpeFX2w6HXhNe2MFcSY5LkLxgy4wgBrdYjKh3TwmRyHSBGX1451mbGfQVsFiJP",
  "key28": "4jDb9j4e5HYZ5Cs3vPj2k1nZhuKbFXbFbxRnRYfxS3cRsPPhspk12tdhUPbMo31tyeYBigwabxfjdTDRzH5kNtSy",
  "key29": "5A4stzdmze7CYk7L3iDoynHrLWq4ZTRobjD1ySQP8KqASS9CddAq3UYsrbmdvCfUiS7EeBc9RQYg1h2ukiZXSuPf",
  "key30": "3GYmjfhXHdzPttCdmAZ9hHVvqZMeAqHJaYD42tFvehWupt4HuxdZpcCMy53emFi2Y3YY4CHvqtr65YKeaq7NrbZP",
  "key31": "3FcEvUBUgX4u52YWWkKvBhHLLUiahdX8Djyc9jLmLSiX2c9SkKxHZgcFQZ1U6iY79iuuyS3eyhqWfu4En1gTH6iZ",
  "key32": "hX31rAMsQqD5TJhafojfnipFBE1w8FamMDhXd23L35WkecuYCH4NSPgPo4pBb9pHziExv9ErR96FShqoKMJWHTJ",
  "key33": "2TbwRx4r9LgYTWSvgT3g6tQjmU6MocwzBPvs7FsPhreqMS3jP1r8B5gAnBdH29qLZKAihbvSaUVAvM3sW5CzW7Gt",
  "key34": "HGgnen1CyXvMJ9f5VRZC18QAGam8VmYoSATS3t5KHXXKiJ1VKE6rbLcxsmwfWWNxe7pqcNChC2ZS2aLKTGeMrKG",
  "key35": "4F8EB7Dn7CQq2ExXzvybuE1yHdFxNfnNjoi97KJQBZtnUZMFsf5HLByLxR344MZpGu17VZcdBha3FzQtTze9erxc",
  "key36": "3MUsGRsPnvVPztaKf7puNrafyxme9A8g2be3VHF5EhjqKLNogvgvfeQzAKR1D8kov2S2Xr91RuE7dusYV7NcFSxM",
  "key37": "3qEKskrTKvxbsvxAXpdbXXTarA1E24bcu9CjtYpC6TriRxergtGswAwP5WhAd6NaHeq37MTgorWPZvWXfDFT4oaM",
  "key38": "7gkM97CA1oAjLe5L3Y6yR8dfqU72oLo1W34bg8STfCo4hfzgtVTXcTbhPjj5wNEm7mRJu2QZYpCTGJfo8896rv7",
  "key39": "2GFpN7wdoZY6DF49mczca4Mn9AcTwY4o8idhXBLxxQYWxGN3nX6Dc8rrmMJ8iUUm3DB9uMpBZmgtnbzmeqkwFGpP",
  "key40": "5ynp95wods8Djugk2rRnJi1ZVWv3aWGuTbXZkKAN2pj4BeZvjWSjdXDixJKZrJaJ8pgoSxQuAMRTwcqhTmnyXPLA",
  "key41": "SkSe5nJvYD7QbvdFL3qib6tCiyLc8Z4eAvECaw3n6ir9vLm77SiUW6czixNzZYRfgvW3utKMdW4NaWZyAL6T6Ru",
  "key42": "4htknYfcGxZpTAmeztgZyqqPM826m4tK11MnCn6z4Fsa5A8a8mA3pb1KvRrsaAmkZeHBAMPGJ3gUtgxaTumzdj74"
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
