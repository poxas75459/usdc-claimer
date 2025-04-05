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
    "38XWE4uDombxgeaqpRamdmCfmyHL6S1nHcrMUXeTttqSHndmA61E1zHyXt9nqvBmoEXqtadvA9jnxy7D3tzYyLWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8C9UVhJPLk5TYpkeoYknTMdYyNMqxPX4Y82vzxqhtkJuC9Ei5n9XWTJtgpcnGEzW9YgXKJ6yneYtL3nb3WtJUsP",
  "key1": "5x4iCb9J5rVrxszFcSUas2yE1j4P4f5hPGAXRgKWbrsUzADRSd5Ne3iJjdZRBL989ZwPmkkpgf9MBMvpWzmBkeaX",
  "key2": "2swMPAwopG1ePmg11miFd7BTVvcjM1vVQYFaRiDn97gvXcFs3fdAZFd1Br81wP8kEzLpsxQtfG6aRz5VuzubYz5m",
  "key3": "5ZyfhtHYyVdcdMp4HSwubqe51rMN1XRhF3nTxhC67t6bU4mwLapVgVK7A3Fn4fQ4N2LETM6C3Q8zsAY7sHhfnYxz",
  "key4": "4WUWTx2QsgtVmotFTUF9CxW2vm3HB4YQrGJBzLWGBRZTqmTSZcVANkj61ec2471hrFVmcknArbABxTzvccbaffLJ",
  "key5": "5fZBGh6Ts3dPn4YRsQwpFFm4VeVVEZMv9Fbc9qjPtqEabrwLFzSJbJwGxBiSks87PCAyq9gcEeMmzfQmWghhXX4b",
  "key6": "2jCdicpK85SVLVsvCt77xJXBKAf9FEUcUtrTEViabegebeQEf4EfR2NKQ61NXR4P1hqhGDepqheUHyfWv5Vr7JJz",
  "key7": "3iyuE2y1uV6iUd4LCcFh1Cw9aFyPwxLrpN6d3uhtjwJYj5wMtRZKHm6GmJq2Mi1JcGXqnhiqKmeDaEvcBc3oFLqZ",
  "key8": "3zBVVX4ux11VAcMMqkxsCVoKhgLEoRKWKMQ4BiEZmA6JKzzEuoWoxorHUiz7TEm47fqK9PZVGFfcGyXwxYyX7Qrr",
  "key9": "5f6aDhR8x71FrErKyt25fgkohxQZqWHJ6xBewSBQRpkM5vzduHmZzppeU3ofY1p2NxqEzTL5e68RJCGtBPpxEmBm",
  "key10": "56dfnpLVmf61JtA6M2e5FKbcR2G9kJREswZQD4zTM8LPAZUuhtxW5wdJKryT7AQytpzxUsYD1ddD3bcYdyJJhHhv",
  "key11": "5DoQgAprvP8XD4LYRwVqZMvVGLPRTumLijC4jbNYhpBK2hTh7trrHZUox1ChTYq4SygBr1YtM8GwbGNuJNBa14rE",
  "key12": "2KbksxcmhPdnVZS4KX7qLVP5h9qZEd7x1FJT9ABnx3GUaB6enfd62KgLRb6arWjDXVUX3xrgXEBrRgEPfMywABzT",
  "key13": "6b1tDgqDMrRo2sHfGRcxKxvP5WwJdmWsUwjtQjvpFMrfwNXwjhYWCyS4E2cNbB3McDYMzfKSztd2BGBaNuXXG7S",
  "key14": "mhVtZgSozHjrJwmDQhA4V1eC911NaRS1qiwMDj5sGdY8usvCP56afWvrCjy2QUzH8rWT3AUxXTLatk8Gtt9RECZ",
  "key15": "35PLgT9XKe7Ce4mcHVqZnokvbNe8DyXmo3AcA2cHT7NyZZ6mQkU2TGbabBWmuXVMkDzNA9EdfALHBY652uhjfmhg",
  "key16": "5Jyq4rxPLLn3KJRJLLaN2XoEqst3jWnqWCrYkFeLtiEkSPehNkjbA1KixLqiZ82WWWF9t6SKQBr5EC3Pr5JZQKPX",
  "key17": "3zC1TcByByKd4xFHRqbxrCirtZop9FqYZqzJawCW1otYr2ZnWhAph4HzAXZ4Mm5ped2tmhNNo5ah5m5BbF38vrTY",
  "key18": "2DTtTrDu1NDfbushFwovibwMAehSHSnPzEj4GY7FC3DT2Cb1q3CHU1dahufjVukyUG9BoQA2faAdKLiJCwbJ1xTd",
  "key19": "5CJeeLEfGwUo22EUJTfojhcfh1yEzhaEcr1qiYutgQBVfpbgh3edBcCZt3xmzPSyHoEzPUrpF4xmnSrNTH8xsgKy",
  "key20": "wV4NfVprNDcoAR3nsX635p52sGWDp2H9buuziNtYFpdpzRbCTydPyaE1xNAMzpLzsRZwKLXw1fWvBbUX46kQujw",
  "key21": "2adhQKtkXoPepSALNMA9ZCyGspQZxiR446f1oePijjk1KMcdaZWrPqyrf8DjzrxYawt7fg2QXkGKf8iq3c7oU9vJ",
  "key22": "4p76UZN2Nh7LgiwDuhhyeAQUYZNd3V3RBEAnjNTa7UEncg8dvqmoVnNfDY7hh9To9DRHzbqMqXAMCceKERbqM2Sv",
  "key23": "5B5KdAgtr6LbL6LFm4KzFfa5PwfHkws7f8P4cc41cUrv1fxa5iv1jkBWQsXuiiSRVQKCJR77o8AmURbpjYasUFAH",
  "key24": "XtZDdwRUhxnatL5ugebC7FnVdP3QEYJ7ttkgndPVQteMKEfqgHmiQ4g2Tpsr2Hb4qjPRbZXbv8Q18kCfKLdhXFn",
  "key25": "3pdHeahi4nXAfZAZEXD52BCHq58xemZQz5eU5djv92gx8tomYekhvKhsXsjsJsPjExxnJeMX2nMXJwrBnLvTnk6U",
  "key26": "3U4TucUtCxgVLd9C2v3qsJNnUD3QSaChB3E3fB3Ruzx87bZZUbh19cXZ9wyEGtJDcJG6ZcVRK5xvQTLm4dLhBQdX",
  "key27": "2cpiK2pCg4VDZWv96FcBARJT5Hpg2RCxNMGZS5quBW2p2zHsaDfA5eDWCGLq8PFBeAvbdkmexbB6ZghqbfjVTpVV"
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
