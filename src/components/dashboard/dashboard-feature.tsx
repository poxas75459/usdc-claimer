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
    "2EhSosRqNXCRo2UmEGweGuZNPcvvJNo8r5BKnaMEUYmrwoSpgXkSqPHAmvAYA3GY75z4cHvbfPUdJiuZ7xspJxEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22iSvd7vNWDni2QT5r7bnssjwokyaHXq6NYrBRmfHjCh1HLTC1Lbyidi3dvnoHJ7f9F1AdTVWdEzJiK8DCY6engp",
  "key1": "67MHpQqo13NnZcvDDntkNx6f7rh2L99RYDU6vtG64pMA1dhq6zRihXrezGPu97zVKSEj6rfHPMX4K2Ng6fs4GDD3",
  "key2": "3kRySKbCSwj6cxN3GbF7iR755bLAo1i2EFA1JHM8Xmf7N6xkEnW2CacRHGjVNVKRC7VJecsLWBhWm3kWrsMdiorq",
  "key3": "3Y4aowcNkLUEEkbq1sPyqobVtUkwqThzzPD3HH7LLWCqvz4dtFSyotW93cHwPrBdpVaDmVGBNDMjVuomRvnrHUpU",
  "key4": "3HrQjMiWp8W18xJ1DP6SZcHwyj8PVamxxBDzBpppkg5M5xhryjyubZBP8qQpHhaXm6EpcPkno2aSpB37AzTRgT5A",
  "key5": "NuJ9aRsi55egR8Hjbvgg4yD9V7FGZR58EPzhBsGN8gDmY6viWoVNmfYhzSmENCqg5VfJzC7udth85zAeznjZWST",
  "key6": "2U3yQgoJ962hj8xjLZvfoMC5ssgYS8CbZHZnSRCYECPS2QjgpASVnTkQnZtKmbcV6wbAyEcfxTP4qekW6agFoJiU",
  "key7": "2uAnL7MAUx2hCUPgf6a4s5zVrM5Gjr9cqo1r626ka4rifJ48qnwRftogeapNXKY3qGA2zRZUVUTv4CKyLfkmczNe",
  "key8": "3rj2JM7FBckzH4UrBoV19tNDSFYYLJmcjKeAjHjXVWeYQr2upG7V4zDMwAYyEqyk1B9G1Zqi4dDxgVnxqE6csXZV",
  "key9": "5QjMFLqKQfBhrtk7NhXYpbx2PG1iApFRiWidBW4Cf5ufDhmMLgVhSNiqpq3xXmTTzDnTJJpnRL1FXhsNbxy3YjQD",
  "key10": "39fLg8Dgiqy8KJnv5wBvyBdwnGsxQJTenPvEbiuUcTRC5DH6DkVtAJEXraikULtyM93zLvNCrvGq5qTTgujSndg6",
  "key11": "2mGMbxmPyF2CJB9qRtLbefB6XyniUFS3TuYvyFMr6aYBtqffmpcrajfqM3Pn5bUEUWcXXVaKbVgL339YW4r3F7qe",
  "key12": "4utrmJKorn5vmtqAb9z5irjn9Sm831uQFVWjz5CHNmv4uQfjStW2HJg3kguA3muwkmeRkBKP2TraPfvT68BM1kVF",
  "key13": "2y6JgqEm6fzxetsthwet57TkxZv9ffJVJiBArYFXAHqhh1jeYHfKwkprn76T8PdxPHXxzmiTCFmbmcS39KhaJBP3",
  "key14": "3SYAjxRvN6cYGikap7k39f8retyeFZCbJLU1WuLDFosYiHFEXJ1rn7XyQmpC4SM7r88VLZz4rD1ZPRUA4EPst79Y",
  "key15": "4xX8LZvMmmmGRS1Q29CcW2ud3MBAxsAmh4MevRNZUfGT2kMhSCfhwVNqaWnAe6CPARSo6nrG7BXYhfGJi4kM14Ec",
  "key16": "5p5pLt7BXYrrULoeBxT6aT1wUwbCMBhCRA93HFcCjMVkzh7LgydaQqufy6VTVymg9DHaQnKvzWUU83N91N8LE2Fh",
  "key17": "3THG32mKGTtkMW15rszWmnZaJdQwxo9pHPW9Fa1R9QM83MJ6LjmFsK75xHQ5zVL5c928bacxGyhiE1zrY48NdEo8",
  "key18": "27aFw6LjEe5P3gyDsivdAiHh2RzkvBzJKS1BJzenbEizCJo8YBUazcyBtm4cPLKMeS7Yc5ksZBzACbEc9ySqVPdB",
  "key19": "2PoDUxv1kNeXJAtMVTbmgEmngKUQ2r4BrpSAczX81K3fh3PpVryAidp8eSWEbj9zXHDf79P2tBw4pZoR55PfEMCa",
  "key20": "4EiwUFiaJkB343SGnJyY2W34W7zj9DaxqbAJWbeV725eGikvYCYA6uJ1xG5BnZFrK1g7V9GoYEZ16hC5zCMWeBXW",
  "key21": "5mDVQkc9otDR6vbThQm9eJyrERR9LebFYPhZpQ8dm3tVZqs2qehZAizK8Wz4jUtswBUFtV7RjJV4VJKwWtBgUeTF",
  "key22": "rACeaLf4X1EC92F5P1KLH7xB5uAYrXXbrg878GSSt7mfE86Gb4SXJsvxUZqRY914KyQ7ExiEjbqWvPWrcBtvLwP",
  "key23": "5r6jP2oWFUCTgUSoS8E3iK9hBMbMj3S1AtBVdGLVUNU9WYkKgbtXoj9qtESGhmkaezczG3kCveNSHqyzcGf9dSDo",
  "key24": "3ThJTLbpXPnw4tZxRuGHQAWdh8DjKeTCLXFzgJgMnrptSN1axyaYRrVzkenpC4QoNwngLGCDtsYLXTqfG6BECpco",
  "key25": "5CYBpQZ79kyM7TxsePL7SRaapfXHPRvnBYhNqLzNpepKDknaDzfENoajC6MSKThB2H51HGhPVqJCMU27ZsGKtykg",
  "key26": "3wnA4Xfh5dMym62naYZNEVqPXwEK9bwahtT3MfbfhriA6FVPzUY2K2aa8i1KEC3KWAPQxDB7PPNY3BobCfusWVxP",
  "key27": "2BqBB6Dtx7zt3y2jCfdDu52GsTUp2Bid5qjo67fbfrYN3sRsPwD6EPzgCAt1oqiYDVbyhPgmawv5WmLTFHtX85wh",
  "key28": "3F6VJCJp8KDy2gLfNhvUGPK2YrPxW6er4JBZu6BvBCw6p7HL5PRFS9d7235bCwEj2tkVpCk4DXWdNNhBmu2nEvTC"
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
