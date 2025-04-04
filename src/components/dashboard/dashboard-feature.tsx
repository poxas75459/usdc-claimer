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
    "2BQMa55YZXQHLNCARu26J9vnw4bMXYgEKKyWeLkQgY66ZnT1e3HHCGDyCis5PBxLc2mpS1BGcrmE3gjHGwDnNBDo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bsdqMk3dz7kAHySUxbmfUZEHZE22ksVmgcqwxNN11EFJb4xmqYzyzGQ1o5zws7ChgSct1Evp71Rqg8xYrMnjYTp",
  "key1": "2LDYUxxvWrswQuy66dMDPdc6wDCxweSrSsd5vg8aeHWmnFsVhLanzr71UP4G9iqPxpoGRgPXAuASZTRYK4b1taJ2",
  "key2": "4hfi3xsxatHHo5wsBrJCCfXGXMhgwv8Xybusb5PFQQ5bH19EZag1khjm7rN9mciVeDJrhw4EntUJEifxj2mZi6Qg",
  "key3": "26AY7fHps7uM6UaL5vatre8r6G8ohrY7r8ZvUHwcCjTyaNek9KqMniaSZcMNqo6UqRogDxBttJKRAPBV9fE84cxr",
  "key4": "2heMGBzZBiFxyFqYq8ypNoiuQoZq5c1ukTyRpPj4ErYE7nwyGEA3kbixoGxGEe6cGrqLrc3RRrZNtaWYKjMFxxLn",
  "key5": "2wkVeidv1yua534jCjx6QDSrnkRsBbDYqT6WQm8ab4tnkUiukcchCGAJhBQckXaiZeZvpC5V7HaXCnenwwyk897Q",
  "key6": "259T6GyDym1BVDfSnRJCh1MWX9Yq6Mnm7Pa9CfjHkfod7quiQUbdb7V6pK4AjfGcdEe5Qib5eUzdkzgiKtk133DF",
  "key7": "g3pdqJmKCmh29RZ8jDZ8BpWpbEgatZKh3AWBh2Kva7b3WL7zSWvggM2YHPp48YLmTytNLbPCxwMtcvvf3wYvfSp",
  "key8": "5KzucE1cSRUaboYzcgtqqLD2EX4ddkVPWJ3zGGqdq6oP11Bij2bEgHTmifLPWKLwJn8su6XP1XegXMVUM4azSNP",
  "key9": "2jno4fEhwQhNtJBFF64J1GxYACPjb1DdM8dYFLcoPUwb7QL4Vj4uQWr3berjLMWraSxfeuRgejFRH9Ge5CWHFfSc",
  "key10": "5KyEeMWWv4P4jrqdsmPQ29d6MiocMP5BmezNpDm8uTLLsWszEkh1rkqGxxKQ7XiEjXsHJJ2hcBs5bQ2JaNHu3VNR",
  "key11": "3HZsMopfyMjxFnKot6gKepUuCGgZmUpCX78ddG1BBieazYFaisxkAZ6JubzcYZGNnqz27Bauq23pwUQag8Lj3uE5",
  "key12": "PtXhaAnkujinem3NEwHoD2uMHuFwqVLMPrPsUGTCkt6zqhCRWP6GzjrRGcdEkpFdz7QjerWhCA8ScU1bKxJsqAB",
  "key13": "3yiL9RN8xpRo7f7F9RTfTkDVm2Mp933XijvW9Q4aGZFS5qkbyoJsohBGoLeVnXy3JWva2N1Yscqfda4F5WVUvbX7",
  "key14": "35hBhwbUWVJ5BFGzsRiZnz8fmzksaEEA5Jb9tWeSiZA6BEYKwk4U1V5BbTVQB4Z46nWqPgR3wATCZavyLfSGySE5",
  "key15": "RuvErH8tS3C8K3PWT8ypsfvhiCvMaQQAE7cxMqnyKWYNaaWij78SqsHXQgEgRWfpRCkVkH4kpkYH4uwZrFG6jsk",
  "key16": "42HB5obT9cGYtiSozhbwLQV9aYEGaumLXzd4vXdv1CEhLiWYutEcsF9KCb5etvjrKFwisMeMDMMUNGMhTNr2vPub",
  "key17": "5FsbFPwBYV8t1Q5esFLmJcs2yG4BnkHeTDS4gmnsfEWBeU3Ky8QTBnbn9e8VaaaA76eEbgAAyEbsegEvLK9MNrFp",
  "key18": "4XJaVcj5Gad6nKewqMgV2DdMmZiQSFbdDfP6Mxn4zoSfG7Kd3zA1LfhXszoYejxx3JF6Yh6GewSyChs3D5w1r65C",
  "key19": "2dKqmCFiknz7j7JetZYvWW55Kwv5TMDoemACW6qP2Lbj78xtxbLUiv2FP6m7woPTmYfJg6stTHF3hpmR8vrfYuSN",
  "key20": "4CFAVPazxoc8YU7vfABgGKz6wd552dm1xximFGv1MVnWV2nX9J51XAUHRdwr7jAdBo9raSQAEricKAECotCLkm8T",
  "key21": "3LYq4srTRs3fCkoq9wvrWm7v1DSMBFoNeMg621twXrkaT3LkXYSFGdprUneyt2X3qUw4Hms53AkqyXtn71S1EkgF",
  "key22": "5ZAJwLaM6ht3qGQtgiTt2xuBrCnGowJxDXUfDnzBJt6nRgtFxAkkZqXG9oTWDjgXzDM1R7vkPxkiZT6onwu4Y2DK",
  "key23": "56ciuVgT49f6w16QfqEyt9yzns8ghueV2NboYSnRTMxn7PedKgaY3mc9WRZHZEcR5PuVvpfvcituBQrT9EFq1g4e",
  "key24": "YRvuaEWwQbDHL15FqbWobgRu1pxsjgkBnm8uYFTSo5zHrCXkU7jgzP1tWeZxDkh2tvKsFqgYdKC58dHpAwWXS5D",
  "key25": "3V29oZJ6Erm1KjFEmgz1Lt3RisGKmvs5GogaVRfEUKXe93dT79RcF8eBV69YF4rWGoknPSGGTqB7pj5XCxR6WsgT",
  "key26": "4WxvSK6SKPMHoy4gpNHjc7DFy3qaZZmeQAZ2T4r4Z1ZjhrZ5bsYH84jZZtnNFkovySCkZyD4jLF7eitxejPgdMtF",
  "key27": "4JHtMc6N2zi9dQQc92gMKwwyL81DMgWLBEDgomoqp4rSg9DiKb4cGBd4MJXe562GXBU9KpshDhnBmqqKKk9xYRNS"
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
