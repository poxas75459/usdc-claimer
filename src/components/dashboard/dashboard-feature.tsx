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
    "43Ve56zERUFi2T7SaWdD7XensSftquuEXbcabJmneaqkkdfZZnYqJ7E9nCiSsZnhajAe4pqVrAAL3iaK9bw2HnfZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hBEAzASBXXAq6QfZQ6qrqKKx5L6Q33TW3vzXss3jRMVTwJiZibHmJBqioV4k72JgAN4kowM9yzTAXgfVnydnvp6",
  "key1": "3AYYVFTbLj6W1zffK6XsoyynQSK7TNF4nacNNix5JXYTiJ7UjtfCVbsJ767VqEUQ4jeU3MWHvqxwokXQriGhYYWW",
  "key2": "54VHuCeFRbCg5o3xCJk976syiCB6N984FDoamdp9YVf85X7qY4XAbtwQKH7q785tyR31afmJdvUh3qgwxzgCm9dz",
  "key3": "5ceUX3xoM12ZPegbx3Tk41deyx8gSwAN3Pf5evGFnnjvKAx8qdVVGmZU8W5tY23UM7C4V9Kc1dSYc1A5pRaN5c7e",
  "key4": "2ZTLJVKr1XgyvgESbkKgyWQSY11MMsUpFfNjmJPNaZPaqayNLrXdLUrhoFGf8qVkB3gzirCLvXR2hu6BhaFnRbPv",
  "key5": "5CHu4Ue4a5zsVdPxWShTsvKCb8aKcdFcZtutAvBiL94pUD1S1icq7kouhsUQwL1vqiLgyacDLyJCV82uknefvjyK",
  "key6": "5sfHYcdSenrTUPJdHQ2zzKKLUG5qcEW84nn9QMjDvPZk4kbCZUMrkZM6NT42b5RU9rc6WXUfRrASFjPsZsNqoKLc",
  "key7": "5R7V2UrrPN5uUDbWXKs4zBXzxmiYpxxzJXDmjUoKyEea8tXz2EtERcb23LQm1F8X9MQHS5pJBMshTh3eS5vQetkT",
  "key8": "5YJQhcWCmpbsjF47JG4MX322ZavwUUDMQ755YaWwWyJcFU4C8neiv2AMvQ16qX2NKoangDJczdfZ5d32AniEkWEL",
  "key9": "5quPd6Vy84S1xhHfrUqALzMvP4NCP8qtDf5yTv745GfvCqMacup4uizXodpgJRUGk87y2ocWDF6VZ4BMbyb2qrhn",
  "key10": "4YB3Rz472LZxaAr27k7jwLVBFNdAEEjFsJDpYdpX8cdLi9SnCSFa97gDC3JvmuxfaDe3TsaQZHEzUh2aTedsoJMr",
  "key11": "5wJkM7m6cmxeei6aVdYhzv7uky1aqxupPz2Ps8sGnBgbD7D3UeeBY3VgYgwg6r2r7E7tMhLDozqovEfsoTXVQMXR",
  "key12": "39iLrjvAuDLq98e62j8jTyuKt8Qqssmsft6DRXrvjS9yHvsJCfGg4FCQppyGPc35B2v3LptytrZtDRBSnbgUvxCR",
  "key13": "59AyQ5DYZ9PAY8SK9seKA8zvERwEQQ4L63jiumE5Sg2wDtiR5YkVuJE2unKwrrkhywX2BxiXsh2frrUhMYm5tLQH",
  "key14": "3rNV7aYggw52mYtqWpNyTjN3mkieG1wqFdZpvkeLTUVFhbXgxcvbPMbeNQe9GEKyP61seiFQGyiBmoHqXrhoCzNW",
  "key15": "5NZBTPKeyAUt5GPo6djs2p3zsQkqovJaaSF41ni6si4qGimWEkpu5aykdYkwndUjC7wXAaZSCfRhVToHwmTFoccC",
  "key16": "gXCPxqSc4F2nicPXJCRCDFrMdMJBrUwQjRjwRGQGEMn3XSLfSZLzUt1i6FwFdnNmXB1nLh5fPwWQARN95cGTM1G",
  "key17": "5kVnsMnixqzULEDkpZAsMiKL3fvjCE3HDQWxTgMTQaW7mmYepSMt6kY4KAq9nrbrriJqfvX5temrHWQz7zGpN7ot",
  "key18": "4RgEE9HxDbqd6NJT7AGq5ymR27CehSkEukb2izDnwPUaqMohV88vraASBRxg7f3Cjuu93GenekLMukQKsZCY13h6",
  "key19": "5yZNnofKhSoxeF9y6j2arLDjsYYVMnMwQK8kwYzG3bBtYvcSxPyUnVBN9qGXVyFrzPDgFxTvZjwhs3kDukoVr1Ds",
  "key20": "3phKjGnfH3XVzrGJJWUKjqxCU6xfuGkkAah3oCRUQaLSkkEKCsmmwXUVTXUVjA3cw2gpxzFR3ZzEnCqF3ZViSt65",
  "key21": "5EKvCGN4REaNfzvvNv8j8J1nTU6eAVTN2oM1aDAuNrP26Ro2pYFwsacN9vRvuT1vEwkKCBof9Z6T1DUCKakUMfoD",
  "key22": "49n2NhyDfCgfk5e5DFsdo8JNeehx3M6Py6ThhsRFZL9oeRHuRH61L7iiCfQ4HU3njSQBBQLZtGrQYTFyAMLLJoVH",
  "key23": "5fVt72jzwcmdNF2twhnYGkAVacwR6Qh9fLQ7C3Bock79dBcsStQsEXBXAqeZQups2oUWDCS4VbnMdGMJfmxXkCWj",
  "key24": "5gzi6qNg4QLWUmWcvaznUpfC1SqNvTsg8ipgHagK412njdUks8mv2XYs5dkR3pGQLwFWTGPp1tAnu5BtpTSBwp3R",
  "key25": "5BdcUGpXAgb4XGwfyMQJcyfmPtuuGmpCFzNx5jrHHQUV88bj8JMLs1JqRdZ6PXPJaz545r5frWiNw35x95RNz4Tm",
  "key26": "3rDX1STZPz8rmtB55EHPotSdm6y61N1eFNNkJjaHXRNVhT7ap1qerHa2JUYSH5XeFKrLtux11Ud5cNEEAt4bnVQ7",
  "key27": "4iKRbVHTG2QYw29CmyCymAH2ymvUrHLErbtZvrx8g7VfwrrXhUvBvjwdfsJNTUJ4Kv9Tpgf1W4NCtRkm45iSVdux"
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
