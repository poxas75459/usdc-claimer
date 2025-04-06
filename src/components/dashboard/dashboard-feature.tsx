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
    "3Sg1tAA2jr1oF2PX9eZSCFeuUvxaUhcAvHRGuJGziihMVmBsqi9WSJP8mbuwEGCTsxzR261ZtECM527upZJY77ms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gpCcVQgfzgYjY3BuqSmioSKTiTbZ4wrKjYXJpnWF38LA5bFdKXgwGQf8HNdC29DM4FcR7VL8GYCJuVKYbUKAxE5",
  "key1": "3m2MPYGtzGtzmxoj5B4EMt8ESXEsmTPBeNDowBAYgpDzahKNcHMLgpENk1mPJWHCvQrgSjYqMHXwtJTdNfgrPuCG",
  "key2": "5HbVNnou9YB9hv4Ap3vNC27tnSYkEvu51FE4VYZSi9UZCLrkHzAA4z7wu8yHuhWx3BjjN5VKkFeN2AyvtqWaFnuy",
  "key3": "2f9YLG5uiC3zRAXBTWVQV2DJDanqqGpN1fFWTBsUp8vzuvY3qoBDjCiJyWAVLq2xKmGqYLYUzHLLzgaQeYN5R5Hb",
  "key4": "4U67Hu6TW8K48LoKf4pzSy9iuDnhDwp7kgFagFK27hz125kJacPEKsV1Fu9Yi6h7qEXGPhB2heyXHSjnRAxG7era",
  "key5": "5YBu73hdTREQQKF4BNwuGAkkSnLdRdmDmtYHcixpb2qE6Ubf8UgibQ1tKk7hCq19txQCksvbLBS2pZGe4BSZJJrL",
  "key6": "2TJHWSkRUNq3LR47856U3tMchVs2Ghh9oCs18rnpDZtsmYqcBHqt6dfPTGmuYXLCHXp3povSLrwdNVt9eUWUV8Xk",
  "key7": "JQBY8zHsNoN7bGssK13TQcnFA5ihUE6eRo7Yvh67zKVdLccgAbu1D4SbvWLnXhmzurn9HmJHwnKM7g7NprN8DFu",
  "key8": "3DQEK4YgFk5eHwMuocu77QNMSSU93dWkmZhkziYLZwSemzfKxcHYoBQqbNQjhaQiEAxXcm3cJFRPQzX32BbVoqTN",
  "key9": "2BQshnatZ6E3TETcYhsEST4VbLG5Kw1fEHagVzEE9pNBztxhQ76CucPHKkfAFUWNNFwi3Km8fqafT3svAhMD3sGz",
  "key10": "4vTaV5FBt9kzP6eSyTz8DkPy1NQwC1WiFKq3xVijS6M9gRi8usiBaWiNszQfzqcfZ6m1PVMmwtKWFDchvgBZ14BS",
  "key11": "58mMuC7vAtedrBFy5ARnRmh38yzYgx1nw6GfPpjGFPb8dTiSvLAhjyZvPqkJJ1k3sSPRXDAWdG2goyNaH2uHdgk8",
  "key12": "4VMRMev2EwzJSnw8gjrFLBxoVVucVTtFzNxHT5AQXLwPGFvmGgDLYsx9fEfCt5N2KWZyoh4Cngmso7fNgBKSLasM",
  "key13": "4A136nffwG8Wz2NSGu2bEZDYuDfE3ZQY13XGZfY7ZdPETco1hhMZtJKWBeVWU6PgW45X9TH4PoGTZJhsqAiS6uAp",
  "key14": "4YquGRxoTJbry68bM1NjqRcYVuZNJAw2Hb48MMEAqLQ8SM2M9L8tPSa2avCjxhJc4GRmJ1Z25AygvT9Pu3buXNyV",
  "key15": "3aWFCFUEf6UiVjJnRqhdyYoDRLbLfd29Aayr1bzNhaT5cvciuakj6VD2AGDdJfid3AUqMwPiJpTRhrspfEGaname",
  "key16": "2MDDA7erxCREvp9PRfFyMHD8q25mABt9gzESXFFJi8VZh4yMekrBFBW85xF1Fb96vux6AM2bm1LSKoxyC2XpaXXb",
  "key17": "2Sxjxdn5yEM3t3kSAZCrfhyX5xoNRbfnGtUbFdnZ4R3aTj3vVEXbzBxnAvpu2DJv4DRZbTW8kfEk9pCHp2pKh8Jp",
  "key18": "38hn6WPqExT4FPCkukm34p56z7riLXWxfStJPR1yMCiwMjXescwJfJawBtCbaKJCmj9XGQQ2wHdAxPgwdLRNkL2h",
  "key19": "4MpAH68kkdrA2mDHLfQ3rTxqNYbAe3p4ehvahi1hXPxL7SVUxAUXozi817563FYjZ9KbWcLG2w2pQvMqJDnfsrr2",
  "key20": "3XDQVTzpC56k67XKCjsrkZyaMaAjZsFQzdv32xiPKqXf75FbXuRARXx2b3vAxsrFwNx16xRj6mf8cM7UmhZjyx27",
  "key21": "23cMvzsHRHsHQFJdw1eYm12wS3ZP2UAXhfiTrgLzLcHC6y9u1WE3iXUfeXQhzXNjRnNr2prDjbxpJ2GVEagTanE5",
  "key22": "4jqiBSfVVFMPoAs7TWT6XUYv5fmkeQL6w35V1Epa3GVr4n33vgWRjYKWDFT3JubRE7s41b4bD728frFpxPsfg9mk",
  "key23": "3xuA6Pw7Y252vZTEi3u59rMS8DctARg7kkDtg68VcqcZjxrievCvSCEPNMPR672TUNJwU8GsfrJaRyZY719mZWNE",
  "key24": "3aX6HW47q8Sk21DSyHpM1k31NbLKE5GpXuz3bufWcni3mkJ5bWsKAWyqnLG5zF66NU2S7LCUj5Eoure8pkkqMQzm",
  "key25": "5a5LM7mX93buw6KbhMamXspa8byJztRFn71zHbwbcbtBDJwoP6xcGA9QfZ1A8za8ypauC8k6oSJtC7eRVPPWXXFA",
  "key26": "5R4fJBKHFo3V2mhddp6A4pcrzLtxvoZ45U5GeCR6jecqoNpo2FjXn9ifSscJ8kF1MFeyJoUBZjwJLdDZbDFfV97g",
  "key27": "5j3WGUbLxRfziE5Haeuu164xX7NfAkM7QxaWiUbax3a4EF6WshvE89mjjrFCJtzxoJFEjNBwPdg3Q9Mx8HNdEnNB",
  "key28": "WEjTLyiYnNrb8um3zujvBm4sEyU1yH3Cg7HUE5NDZf1wLhU48bYpi9HYiBEEdz7MGLVPwjdcgwmWbPtYkWzDmYK",
  "key29": "3uwDcg7wSmuGDhSYERQaVrWtR1hxB4MFo2VqicUvLHyzxAXVLKoeZ8cAaScbyUepXD9NPpuDB6xf1cspcNwrBCLD",
  "key30": "5MhB4tLpF8D2aqEvJTYHG1WP5XRZB5qKiGvsuVCUcMDnjjpCm44n4dHvvat6MjyuUqmHr7ssz1inX397Y7ZQjnKM",
  "key31": "2vEk3QofaCYyzxT72K5HUZun3dsjxofck4BLqrsW6YLRM6asAz2Agk3vdM7MGDsmkDdD6NZ77bHbhgbavFLQ4Z1C"
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
