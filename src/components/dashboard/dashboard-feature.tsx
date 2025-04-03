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
    "2PLZHhpWDiT2ae7jy7mcqwu7RpF1JZ5eyCwPxqKAkjbzLCa66tvjfdYnpfivXKFqn11SyYyovFDBWYUjGxA1Fj2L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dsKaot2trx5wE3qsRYzrLH8BBUB5os14U8TiwUL5K5JRptkR3J16yfQXu9kddc7wfgijaSPqhUT5rqmJFeWaarA",
  "key1": "5Zw5Bg3N5wgZKApqYWXWSCDF4YfCzuipmy3yYdDs258VHVXD6LBfBBtAhvCEV96Shh4vtbyxpNPfhCYArz9YddaG",
  "key2": "4RS2jY7yo7F9bgE6zwCWDizC3wGZMbxqLboECxgzq21P1jTW1Yah15HKdqVkaTewwJykjH2FeqVatoW3k4M18i1M",
  "key3": "kaPxvrL61eNWRzL3NsRnpaDsURF4xEuKRP1beKCjwDfahhx4wBryRgH5TgHQsNoUFWdUEcNn8H7sZZWM8LCyhLN",
  "key4": "VrPyui6TbiHfrpgjNwbTE9pukzxfZYE2zSngh2HNoC318YXPEUgkZonu8fjEJdYU6qxqqhkQGLxVpgiggDcJ8bK",
  "key5": "23dkKvYbhfre2g4PbsoyWdEFqwbB1Et4D83BHZrZidu1dG2G1AdJvzV2Dm4kxM6M2XUWNMrTVNXakPRBjBvNM3KG",
  "key6": "4W152gsMVKo8JumF4XH3icvohWFqndd9QMydrmEMz4aPHdNjeLNKymPLaUCimoJrJQfU5QQwYdBvBKDirXb16r2j",
  "key7": "2GLtekPrnfGPkRubfn9szggK2zVCYQmqeXXzBWtNxKBzNk8m7bMEXv23g3jFjYgyZr566Qg6p4kLhNgG8EVpGQqf",
  "key8": "3eqmB4qBWDEPzZWGCaVvWZFFyWqSj9ytGyfoLeDU3rfNsKxTtiHh6FGh7nNVbsYZQHJBGm347irCSAsFVMwb3tDM",
  "key9": "5vjLEm3478yh2WhgJDTrK9Hg4ez8sf5jTB4Sx3DtNTe7DBn8nG5ivKBx4DQc2b1FY9PySmbYQbELDNwhuYcQmPQr",
  "key10": "364GdWMH9WnjBUto9JDDxu5UNjJdtWMmDL9s99hTMTko9S7cYDNtHwRwyySG6Y9UomxiK2KWsrFaHyDAh8sxc3F1",
  "key11": "53rJyXMcMuPfc24DE5HBnZ3cpiogCj6wbZwxDXWXBDH8QsKo9DYq4byiMoG47KyEdY7tENp6Aw94e4LgAnDv1PUn",
  "key12": "4Xh1ehmvvNJPTuLMW2epLhPRLSZ5UdA2VdLC6UakRcZ1hFhR1hLEGsbE6MhKmDBLKMJWJ1nbd5SkU9hGqMhTwPfj",
  "key13": "3diHGfRC7iFEnNskBBX3bfPwzJp543HPHi1UyiYDLszhdukDVCrpmbo6ekM1C1AYxeRDAfmr7zcK9YVasU3bJQHR",
  "key14": "46Hf1TwAiTZfpjZN4DvsajfpCbbmJ8E9st2Apo5kJVDicFxCMSeR3eSNcsASA6bhpKHaJF3NtQvCu9uPM65Xvyat",
  "key15": "3r983XqdEpF7x592yTmDMncgXduFTrtFvqrV1SvkZ9J39xizQ9KdUnGhiFLvZq2FB92YxVNh5sspuputKuEmjV9s",
  "key16": "5txrzuwEUZewGYfag5URd9TsJCpeVdH7KPyAA64cgufbf572qyidso9sPDtw35PpNeGD4L9xLsyrXphQiD9XFR8M",
  "key17": "67FrLLwoEsj3toUPMBWuQPKxr7tXav7YcTz1zL9y5KPsdNsKZsgR9rhGjJNf9m2uAgrytiSEfBMTEkBrnUDAqEm8",
  "key18": "XszsCUk3dFpgVrD3TfV32WdK6ETWJawZnjXKT31E8nkjik4bXetu1nZLHDRiMhCLQohyisP6FroLVMeeN34BPxs",
  "key19": "tU7QGN3ScDUtuoifnYqCUjwxADGnVdBkARFJym2y2Z8ntJuP1yPMVKJzG2YZCzmZQPBDtRzN52b4zJM3ixZYVzo",
  "key20": "4C5PLTgTWw2L8RcGubKGz8ohEy1Qtu3LB248d5J1AgAZNdzRD4n6tBpED5QmuS5wiHYAh9P2PiLQrARRf6XYxjJQ",
  "key21": "3kb1U6eas6vYaVTjS74YgVkXutYKC6X1NSokq36nygE3GDrE5zNPUJqbY27c8keP9Rqfabtx5cTXLQejWL6N1Si9",
  "key22": "R4a7Z7dvWqM9jQ36AgdtZnRQsbEnePz6b57TkgfbkFw25hWgQoa6WLF9qeNfGqwZ2QhwM2wN63Jhe59sY6ueKwX",
  "key23": "4dKHbFdbACJWgmzgxZZBrJNmxhBmNPPJYsfBK6JuYFhLnr5P4BDFbWCnJCYP42pE2E3Fydno793BNXKdFtqVyXw1",
  "key24": "Qxfu29Nuh3TDEeguRMidP4aygdk5TNzuoDAJ3EyEtbwrJDkQvxcj6A7Fuf258F5qxSNBAyiJ4oMoTQDEooJderE",
  "key25": "4Y17VXsGwjYGBW6cXC9gjCuEwJcoyKTAa9Xs2SL4HHj5K17nDti2ZeqzdnFf8aq8Yzq7cATdAMXhSAkB3tLecySR",
  "key26": "42C845nzMjqjHNx6U37hwTSEuLixJfuUZ23VeVc5mYW89eHCrs52AFUiVvRUCURUaVzvmCsJGRezEXTgxoNSBrqM",
  "key27": "2EJZE7QrsX2ju1DgPWDJxMxwBxFJfEkvGGUMt3zm83JhSSHnofUEigYaKNAuN4FjG439b5LwNizUKQPqD27KoEEW",
  "key28": "TedUpr633KdvapYB5g3EzEpjKiGWBvzYvskAY5pNBUr5YEtAL9d6BteP8iFD3Qo2Npy2vszFK5NFyjj4Zj5orUP",
  "key29": "5VunkAudE8XrUEncbPArWVqZWVjtxmqkLJTh6fKatDkmnjJnqAynibn4QUoqEhjaVPCjjRADd8TjpKfkvQx36N4o",
  "key30": "drgcPBGyZEoX7y4yUvsCFs9CJYMUuYUkCsmLEnbgFsSJm7n68twozPhkMEpQQjttiShybB5vS2PX8HNFDd4oh3Q",
  "key31": "3oo7dKkXLvb2vqBaPAN7eVtFRKTsjkUeSmM5nqTjnBjeKkA56eKsSizQVLyYrYsHsHM4XL35acvNSnNJYoe9PbJ8",
  "key32": "5NHjCANmExEqT6yWzE7aHN6c1V1EjbiHxf14sGVD3VxhuGJ6FnUxGX86XkEFURDCM6q4ARfCdxGuVGWviUvVZHCA",
  "key33": "755wcinDXfvNVmv9QzPmKCyNe7N85ug4z7Fyod1udW3tbPaZXRau4Ch8cBbNXxH5RgatDRTT1M4SAFUsJKhQSaS",
  "key34": "3q2LUZJkocwxtsCmmgNKyXyTcRPbXotByPSxC1GhSgzjeUsJcEz57Dp3rRLT6NJ119sNqJHS1257qSbfSEwJyE2f",
  "key35": "41gybqV5BfFH1bc7bfEwuxxXjrCKXsc5a9FQLQFAzCksA2FwpwJCK8x9UT35p4JpVqNuugGxfHsujbbDqyd1nFSQ",
  "key36": "4Ay8h51vN6CFauxpdWHVua3G7S8gUMwQvRyFc4ZXFPkSCYohFt9QY1KoXAdzHQ9smSarhyHNQ2FNX6tZQRxY6BQo"
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
