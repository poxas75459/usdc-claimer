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
    "5MZH7JmyiNAyAcJTmVYYDo9ANQKpMqjVkGU8RAEjvjZuMFkR11aMpT58zFPYfh2MaNQAp7txXgjK5YAoLVZ1ikXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mwPSChAWWXjrFM63RQpnQ8iqCrALu86rE3FFhLuoSDRuB5xT4UBpmBJEV8Vn6ZnmjKaR5aaoYK4CiQdmbZQ4yfw",
  "key1": "5Y1Ur7vQcMdHEGzpzBiwiFNEhMDkaZGT3mhf71U4zwntgk9NpJKjt1p2KSDVmTgupF6ndeXaaaAfK5tGCgYyBSHW",
  "key2": "TgVK3vFgRGeYur72bt78AfS3tk2k8PZJEWX2xtMieKRKfhPM3Z2wRLPiWVQvvFPyzdP86bh6gxuCiAx4C9tSBZ3",
  "key3": "3qE77rVxetoEyHxWKmpjZrCL4qRAnxT4Lh2ihqbUUPLPSG5bpLxcWUAanxcWFVoT4HttEdt53j7DTc3FNYy6zQCu",
  "key4": "TU6Ngrw5GpVvw7HCuJtwSuf1eSvRjpg2F4vuvDoqajFvU9DswDkG7ozKRXJnzW3rpUdAF3xevRQboqGEfrcjBFg",
  "key5": "4YJCMhhzeEgaTYmiVJWac1q3nhUeQLXhTQ7FYMaZ3r6wWQ7MPEwBFWkdnebTtQJrLUgaGBawmRcFicrezBBqTFC3",
  "key6": "4pStKaoH5BcBGbsoisxxkx4E6w1Q3FQMbcgrwWe6HK5C4ZVvgrQYwFrcQxVu8D2GNcxqfKJFNfB7CzCaN3BXgpBa",
  "key7": "5epCi4571NCi2yzdSVwFYNQRDKNpNbqshNMUGhPyXCNskabCiDinCsvoq4vfWxfYEfGdcrF1cBW7dtVaBMSvK7ZW",
  "key8": "2bL69j7PCogJPgVqndGuFaJcu3JMKZdLsM2Rk5RqBFT6q6SruBoJEesHLpc2TF7zX8QakKxCoSu8sDptPbNdoUw7",
  "key9": "2ACEzW5y15YnWUrwNTt2pAyuVZvhk3cBcjyhDDvyTEoKe8n3SHj2wjqJtoiEH8zzLCZuJ2CYJaGvJFPNd7bQDcz8",
  "key10": "66LfLE4G2VqQUFzhRejdq42SCVfLMittnHLWKa9f2dBoW8oJWJQ9XwoT5Uif5SUkk7zVb47gN5zMcTYVAkVG9BnX",
  "key11": "28ZGhMfLdXriUVCvqv88Ui5GyWxm4LySrEvYhheD3fZmBRbuh42btjNUDd9rVYpj3YiUzd1W852wychGoHDY6dzz",
  "key12": "3ZCsHKapHU75E8qwA4f6NazWTmKWRBBYwp8kZJ3qA6ZnQNZYnZGn2WXZqdtMZhcU4AhKYqo5xqmiwJNxWNJagp39",
  "key13": "2wdsshk3dM3g3TKJP4soepKTXBroxZwo2rNdGnJuH4J42opTr5deUoNiDFmSRmSJCeiky7S1YBJZEaG4MXD8BpgW",
  "key14": "qqdLVSfkQt6mnQxU5SbGUao9Uy15ttEgWT4tMrnFzJwUBs12yfHDsbBB1gcnNpnoovZve7zCFS2Vjjm21WjT4AU",
  "key15": "5A2HDEZsVDSvSH1grvzw8747fJc46y3kerPfeAhFJQb13QXgcgDxFpPn5fjR6JS4MeMxxT3Xdjci9qEEE6jGsNw9",
  "key16": "4bKnJ5exNrGUTP1GbrJuvaCxg2RFcJQPMjZnn8TTSBxbp23io22stM4gyuhE58VLyveu2MDbtp7X7iFDCiVynMsJ",
  "key17": "4MpPAjhpdgJ3o4dErRhFkG1bMiNU4q4HBCvPjRcuuhZMrcUtsCEbp6Z3jTCHxJa3GN7Qcu25b36sjMsr2AVf9nCq",
  "key18": "3GYX5HAfm29gfosz3VZ9vu21L931Whyj5D7N9cA41iwH1w3yMbKBWDU5XuWerDPEJTumTsXbqTTysydEnT3sPwcg",
  "key19": "5D5bfoUMa4W113dPQdwAK2DhyQ928h1zwZLozUJSc1LGENm9Ezzro4zWL8QYAP3Zzm8bqcbWUbsrqgce7S9pfPMz",
  "key20": "LPYsPPVeSdDjdbqDVbRVxEvJHJXsCeuHyW9QMJvf7PFh5ezRi483ss4ShHmZqE7Hmxj3LzBv5A2BPmymwYT77GT",
  "key21": "2GSBpFZwK7a6xbXYefc7vW3hPGn1G4nFc2DiEoXoiVMDL6zyrAHAaGXZmjARy3jv2KYGb7Jb2nTuZ15mw6DWNG9H",
  "key22": "63zaft2qcBuh6DcaCihPgjDe4fEtAm5FQHCYZhG8rVc7CaeeBxx38pWwLdEUAcmD8SjqbjDwJhx9rnRGoaG1H8HP",
  "key23": "23MJeTQzpXQHcqLJoEWs7gGsqtgd6M7RXTGwtWpwkMPvcCmmS8cGR98Ag6GCRuXGGxvQ9Jd3Z5JaYaDLgjctcNHY",
  "key24": "2K3SsheYffA2GqvUUd63MSFHHwwjpkcsLrWY84WvGjwkVBNXQxtpvSKNpxqrJuqXR9J8BHANXi9JX8Bidh4y3GJ8",
  "key25": "4DPn5RJYV4muL7RDPyV4ncbJrhgRQwkcefsggDKhPF17Z9r4BNJDZjTBveQxAq9X1isUZmRdLfbBdW93fTW8gEc3",
  "key26": "2tFLHy3TtRLcEjQvich1dJoGgGNmioC2a7EeS3NccZVHsR9uGb2TRFZSVNAa687ttdCr7FkCb5r5U68RCMbf6rrC",
  "key27": "b6tZYVxE7WvkNbKBWd4qT9cAiLdeH475jWSof2bC4t8GxYCxkeHdPAnb3S9LtkB4TBZZwqVjLrxUjxJGdsEfgT3",
  "key28": "4d88dvmY8suxxBBXWobbngEgzZK8Kf7K6Ga7ZVui4CYVDTLMGuzaDVwyPgsqcyCZduRHebN349tTzycN7E25L8wT",
  "key29": "3dAmFSJyQtLugnt8uUE7w7ZTQbTeNFQrdoSCfg75GSCDcL1XoNssLbEPn1sDCo8jRPTKKM9sKymVTVd4qxLytJEq"
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
