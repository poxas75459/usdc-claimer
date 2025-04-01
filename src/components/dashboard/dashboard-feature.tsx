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
    "4YnyZE1KPDYod4XfnE5cxb1VB4M5LJMMMCpPV5G5fVDxmWPoZw9wTnZL9deq1zAUwhdAohFDUKcsyW7rNEHkZEBH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2knp9tsZsNVsYoiiwDR5CPNpw45yXU6L5GLx8TzjQ6VC7nKM7YdGhKZRo9VzANSqitcFSESsHKZYmBbbsZMCBfqT",
  "key1": "43mccSpUrajSw7GAuYSMHbWeTXGg8uzMxvRxemNyr7LmxcEmvNWueoPvKzChbwkQqtLAV2Xpb6SMg8eftUYp4mnH",
  "key2": "4yn7pPuKEDAAcp6WYt1t5TT3pKqwUQAzBMCWsmV5Cg2cAMNr3JceM5w4dDdWvzrpB7Dy8Y5PfhkF9XaUDto1phAB",
  "key3": "2vFkBnQuYQc9Xo5XB7uRWdpDUiWJA4BKFitbYL2a7HfQHF4WnZSqUwq2GBj6sgFfu2N3eqkW9HtEV6V8Js1YVDev",
  "key4": "cZN9BfiC8Fzar9jLZcZwKUTKVLUhVVrp6CrRKLJY1uFx1afJEnmSGnncftHPjFcAfryw23Qpha8HE4zMkC5aFa7",
  "key5": "Hjm9C8tMxVzr5tPbSyYrtsXVkizC45KD8cn6APDSiUVf22dUVmgADooGCEaQFSC5YnZZpbKCPP3VAqTFV8DNAhf",
  "key6": "55p8XfuQho7Xr6s7btFVmorkYE3NgU1dKdan3ML2HUD95iPuQNyifDi8cVUV5T7euLKQTshH9Xi4nSNPnkthZM6V",
  "key7": "3xSpVdCVAw1ibpEpnSwusMLrWLJTnypwZaeCTTDJVkBYJdeJjjsYKxYMDwKTKuem2RFnsMrPRLZNRkS8tD8tcWXT",
  "key8": "2uFaWfHMMdwJCf2L21MbJPxjj3UCvzvHTay8VXsvvEiSRiLj1E7sLPdjfveS4tDoziMBvipX68852bmpWhDKgswH",
  "key9": "3LwqfABeAdTYbYazpjptsYuTdtfH2CdPyfRmy7ACNBaBeijBAc21Jk3mJmocXAqxzzpgaDcbtReuaNcf8mPcLiho",
  "key10": "4DUBXEB93x15zqYDRJge4xDp5nRnxkd1qSLWEDeuXSNdoJG1vhYasWvr1ADSz6m5jXvKRvWGYt1gM3scz2Sgaqqs",
  "key11": "3wV2WeAU37P6pLz9XZXjEfMSSr9sj1kYX6rhnFMKgVzB8shYgDgoYKaP1fYHJj691XFgLc8QPKbrfyaRiQ56P65r",
  "key12": "2JcvsJ1z6jjEnpvCMgZLwbd6R3hoauD2JXzVtNc6y2P9BAjiFDRehyrFMTW74HcKsvCsadnAHbofCVuSDmuWj98h",
  "key13": "4gBD9GzhUc4Wfa6hFi6ZyZzsA84gfpiG2oWVnS1uQY1JHijpAbUgoNWoeGrx8vo6KKQ5T39tR3qyqupu5fsZDU9W",
  "key14": "uz5J3n4cLDKRpWwvfHfkURoroLsUC84iQh8cBvJmdcR2m38adQ5quhyuTu7sABGLFFGEXgijJwKAD9UbrxdaKN8",
  "key15": "2b97yjqcUqofy1agQWT9JniZr8U3NtF4GkDpGQgWy9CQqqnUFS3GXNsVv8miFGva7kG2wKKTMvtoBQwRbLfjiCK7",
  "key16": "5QqVyX5Tu3q2KAHVA8gpNStzPX3r11LMoHykfVQdpfwx5ESDJCd96Sm1JugmvjBWDLQ3ATro2dQY5LgM3NFvtT2u",
  "key17": "DLmisKqBWaqXubJa7N2oiJ1jNuGfedYGPaTTVzJZsAnM8pPm4JBFzjp6iVwhcMTJkcbKfAYmq3P2nzbp5NjJMpz",
  "key18": "3AYV9TfqR3RGqe3xVuyKq3y1KoTLfyLzvr7CcydZT4D3uVh4PB7skpfJW8QTBjqgRiZViTHpWqD5iCddhWMV6UDw",
  "key19": "5BnBToCRekPKRkGUR8MDwM3Ty93sZ8jPhDZ2h369eUQM82fRSXC1CgxmmuAKF3n3q25hd9NfWjLep4U1gc3gdKHb",
  "key20": "56KWCinTCx7nSc8DFJFzsMmuJaL5q8jzgybVXQdJU1zwg6QqhUQySCHML2veQ5WqcHnjnstzkcYRjzxQQiHB8Rwv",
  "key21": "4FrNmeGAoQ46nKj9J2AG8ig4Y1MSNvpg9Db1uErwNUaP4CPsQ3eeGUiwn7ApNYNN8uBMf4MirePeQZy3ZYS788za",
  "key22": "bFoqFzmdE4bqHfp9Ug7y9jyEJePbh2PQ56e7zvCUf788ZLLGEtNXXie6VhAo46wo1HA9hRnm4Wua4uYp1d7Ebe8",
  "key23": "zuWL6ScSafdMRB24bNN6fnQqSYSGpdmZKpaF3XY7827YaB17jgtUTAvRMkHaWEcvgHwg1rgfttFLjzezbnkMUkm",
  "key24": "2Y9jt3ceix6sBCMtHJt982dkwjXUyLrHjYk3Kwh3QQutAkwpMynLm4PFU1nfd1tsjZhx1TMnyVwvpzwgWX4XBpgq",
  "key25": "Q8gtGiGLvxsC34ofvG1T7m171Whw9PNBpUcvd8hmCJmCprSJgnRudfmYEpDJ2H95HJgbCBeE2yVSGsMdUmATUWf",
  "key26": "4kXnCLrbTvZhgP6PFWHafLdidqFd1VFvP1SUCvVdkiyY8QP1YNhgiDLpTkM2aULBTvCHL9h8RNveYxNQp3t1H8PV",
  "key27": "2oj4kwqZe7339SWywEoVWVukksQiJRADGk6fJJT7rYQogE8EEg411axm74kEMebLeCdEtJsBd1GNUwaAXGTPH8vx",
  "key28": "4mJfMDUFvoRTkBq3gy7SMU5JG9NLwGcNNnCHcJnuzm7BsrkyAWbqYEisT7SZGPH72wZGXUDhVnnWoPrW72zBUMvw",
  "key29": "4pYyo4zpjqeu7DWy4nEucwLVPA12L3Gqet2v3w2pAj5v7gSeFpNXs3kHEHkcgpPZ2jCMkULXMvqF8zTUV7b8v4C5",
  "key30": "3o5yKQNcFj9icBBc2PMNuWcovcMkdU5giaXnMUJY3Xmn1sZhjXCpdgc1KVTqjyKzsYR9MAW7QWpxgddCW2KU9Qj3",
  "key31": "2XzLTQTXNRrEp3gPef9cBkNbWgDgbaeCu2BbKfmjsxBiMKNC77fodE3K72SJATrFL4RhZxCu4S8CXRWVARsysnTQ",
  "key32": "2b7WP8qiE5Z9K1Aw83mHShyibD8TX4e9LUPLDnRmNhHXE9rSUYnZYXtE8nWVG7Q8JxXYn4jZDMktpGLfusS9brtV"
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
