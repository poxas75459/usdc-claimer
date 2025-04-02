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
    "5YaaPGTHF2uo8Yt15apBdSUaKtUaa7nRh97PKnjCEdWUSeZj9j1Sr1MPgTui1KMLF2FDzSvh4UgD5z6Mo7ou8U6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yxh9ydvT9ejtHL8YRvjxCip8Qz6eC3KFdr62YvgHnqDmpfehzGmp9vJhAQqp2xrKw5Jq5S1Tztwughk6h4ZoW1t",
  "key1": "5sfBCQpDmujKLGFJyTnFNUERYeTg7uL82Ns5E1ozSN3JnjUt3EBFy48SWEgKGauC1pCmWchUKkJQ9Neju9wL3imc",
  "key2": "51JhhdJa9pcBiXqxB7uTDQUKMkYbXJWMuJ3qbZPM7pVwJZKHTz8uAWdkV3mLQBG6eeuAq891RMTpKdXadj3SZeWy",
  "key3": "VPr9Bx2Gz5KFGogvAzEESctnxUdkb5rywMmWKDmktSsoV7RBaiBRFmL26zjvxipyh5XdYvcfpWM2vG9wSCbSHvk",
  "key4": "Q8xDWneuVp8hUDdqqWpNSEpMJKtgDYr1j2L8jdoq9t7zA3DyvjhedN6k2d6PdkYCuApfrZhP7Ef6PFrTxdeEdpN",
  "key5": "2V1mR8qfsthazR6HoUjA5fD11Nj4dNtnLGDUzaT7aDowG4S7HUJjZmisvPipMstfBj7fCqo8Md7C5YRj6C3N2VBw",
  "key6": "48bYmKAG4nqhXsSFchxJDAR1YG1KeFHE1VD7NqT1o1McNway5LfWbv41oDCiTzHqaTemYwUdhrNbQuriNWE4DzQo",
  "key7": "5CkY482jStxph8FQSrzQJyt9gbUZRer5ttuUwyyVq9fqd44DVj94q1PKyg4Zop8o3UjuAY4GNgeEBqUFeEpWtqGF",
  "key8": "49RHqaxzFJpfspL2d6BTVBTTik3sW67PoQoE3aFmtN4a2D8vR6j354QQMtfQGMXbo7wPdFWojDHMej61vwgTcosm",
  "key9": "4avexA4RqPzVcT6TtokEX5nbeJtg9mQe7k64qecRur4zpCaGgMNz1Vd6wxLXtmgdQVntM5s2S4X74wgcMdq1yZdt",
  "key10": "2z1mN1zNXNv5ine1Sm63cgTxtpH38PwYfAhze8DdBDy3cbU7rDvbPcxiWUrx5ee1jdBhSQRKgZBVg2WVfbGP8GkA",
  "key11": "3DUTx4tkWcdyvSgiB926ij53X2UA7ENRys2HCguH4RdCLthG9UCwHTfhiYntrMJx4iLeacYJjAurMNSc3iJxH7xF",
  "key12": "Y1KWBpLtCjiXkqw2KeESdvQaiZLWxZw6Vs9DwxRFz4u5tiEY6X7jNckd93PJKCa8kRGfcwpuqLqMzW3J1F6aTBB",
  "key13": "3bdMcQu53wqXZYBhw2GBGZYynrkLVfDf6FtdxTEXFaKCbjn7HSDg9iTuqHwoJY5EfQHQQVqqLxf1mUqw3eMSDwQw",
  "key14": "A1jLo96k8bsfv3tk224U7GrCnvNFvJ5Y5wfb43B46hEjdCdh8iwRvYkS6GYe6wBvwWB3XQk5paRY9c6dkHXnh7u",
  "key15": "2cyNHaqVMNLieZr42re9JSDEUR76iW5i5jfDJ88pFZGviHbVikgK33LqoUpXC7RLejmwTUuTvagnFrcHsNpwKtcT",
  "key16": "5hyfshm1QJMaVMryDcebmGYRGX8XfpGgNH4gTmzguGP8CJ1BB7GBHooh1hBRLemEKELp1542F7rrsfKumUranG85",
  "key17": "4t8kWymxZ3bXsHBxsumaiUH4BySSYTMkTg3wsEp5rtBtZDKYfQfLQantFPkX8eKNLG3phFoBjZvRbdWPJo4wGGzR",
  "key18": "34mRHUA17omeDC51aitZ5te5ZsChEbErKDjwP8PpsoiG3svuTSA6qXi7zsRF3onmKcft92inwnySJvvMX5YWVLdZ",
  "key19": "2cwjDUnodKgfCHgGpKjZo9gipemSmnN2XsQAVEAZzS7xquvPcTBeoEBcYHaGfZr9P8reAkUCCPnLpX9hQgUDtB1U",
  "key20": "4LjjhGjYsm6Vohm5Ls2ahCyJrpS6UVoGAzpGYsBCyoZPgidKahbpdG7oixw37HmG6mfbWLwcRk9Kb6RsmykU8ea9",
  "key21": "3haM6AReJJQZTku2k4RzEZ5XRMWZRvbUsRM1jGeF1JKcfjpEeSFUFiDgriBWd38FcsVSBU2Se6YAZUVWiyGBdk4P",
  "key22": "25htH7EgXZ8ApptNV8VDf5mZfkSoe1ytL4shmcWHxpRusWBnbsTqRq4zqeERspyER5yL32wjbBdu2GpNC2Ko4SuU",
  "key23": "4cVa1LDZTzM5ekrx2vdmyKHNzDkQfZErhnD7a6sD68sPhqjy5kr5aR7qAwVkyyj5HnizdeK9YfAbC7qYxq4S5zhb",
  "key24": "1CRZ4QSNFEUt3kFs2Q7JtsbCFM5sz7JzKkTKSmuZgjhA2aXfjDsum1CGqxgEKHnXzEbkNrAqMocXbxwU9cUqoBN",
  "key25": "656fpqrHawbjvr1F5sprYSE5HnN8u3QLme58euavCSPbtP9hEo2R4jksW3oe5V7NbscMq8K48vcBEV6pYvCRnSzV",
  "key26": "4h7CyggyMNZBtgKe2FJkaoizMEtFdF1fRMTfChJnMQ2XNTMZfVs1zuav5wpCAqTfsTt6DuG6wxd53Sza9R3He5MQ",
  "key27": "5DABQUNgKNnKjhMmMzDKX5VNSLbUrDow2HCoFX3JNtrv3EaJsdSuAV5K59Gv8Gj2kESjjKsBF1oTbtviGijsEfEm",
  "key28": "4PB9BZCtDWrw3x4LqQpHVf2h4fnkB52fZpm98q3busjtL9bGsbh83zHXKZirK1Ffy8FQQafsst94hQf7oeZwFmXg",
  "key29": "65iPN8JS82biGykopnF1QAPRZsRURGTAysQgRvcYJsS2ZkZcctJbF4WAi2yGEJnRFMJ8BawRTUtvoz54MwcihHW4",
  "key30": "X5nuj65Mju7yULcoGjfb9S3i7jj4znd6Y93jvy4PRFG2gjBTy6CQeTRU9qcqjji2guS8BBb7xf747BdqcXErMN3",
  "key31": "PbosFcrxTso1KNUVpBWjymJSWnpPzjPdo7CFtVi24zCY6pHUACXssHRH8KASnvPNfP68fEtCmFjCra7BWPKNNcG",
  "key32": "3hrkonWbSq45aKtkreFGMgp454926xVoyD93nnTRLStuxA5qvVyGp82ZmccSk2TWmCWzBGYSnM3zMPBbCp5VLhZP"
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
