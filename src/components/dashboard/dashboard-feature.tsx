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
    "tvga2worjFQU8ucetNAMuKV87662134g7TK5CtLKL3EtPD5DVXiyDCUrQEW4Mgyn9c3oTmRWHTGdkWNukBeFEdS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d1Xz78VNN7oJhjjdtcBSGNQTGRbA5TSZr12RfgQ3ak7aRsyHaD24MU4oCV8dLLSj2pLBUc9Sw3Yptu9cRWiJEW6",
  "key1": "4fpidHoenQdxRUBor5TGBA9tYnEhpa9S3LDFAqVswHMfHbNWXgH7BfQXshYFKHYZw3zwKFiEtiVYuhWBFqoKMpkv",
  "key2": "5gYgF1wWpB3qB1jUmu97C2nbMsMMimGTPjkychH5rriDypFaCQnKLMeMtEdpG9BMW2V3hJHoPpc4Nku7Bt3RAstr",
  "key3": "4arNwCfZ4RZdw9LFwLZaGZm9eJ1kEWkNgeysnBMkJmYYbndKhE9a7GcV2PBMauN2ybKjfrGBARMpmbVfjqjJJLzh",
  "key4": "2cUDvYf4CwrxeAdAbiNMH3rbz5GmNiQAAEB8RVXrfX3prsYscV9HKy9nNGiZjvkqwvwofC7RVqbac9Z2kx15fqff",
  "key5": "3LfyXacui6RQ1qoStPWPLWYBZwsuvGcQ77Y8jYPRsnRmvGkvVUVZryWqe2m7F55KsAcm68GxJ2w8CDJMQZspLW3A",
  "key6": "uZ9pWrayuC5gpd1YQbaVtrQTesRiHmuVCcqjMW3aJeAdHFzFhqZfDtgwne8JvQ5PAYK5AVzZx9i8YBZKae9R9uu",
  "key7": "2WWK2KkPJtrhfDR4qxSf8DiPPVTSNsf6ox8XBWPjttqmFggDo8YvtTmd34mMTKGsR193LTV6jDXMTDFNQrAHMbf6",
  "key8": "4bU7bDc8koZWXCTPMnftresa8J17XyYVDHMThoGprR92MaSBeoZojJTCqaJActbMFPdDW8AzM8ZLhJujs7yqPEnW",
  "key9": "52yZF2c5eXjkvWthxQcwzJ935NHyYnC3R3CXB1Z3EFxaZTqR2yFTEG17YNgyye4ZgkBrkPX7diWkBbmnuwpEE48A",
  "key10": "43NXpoPa21pv8tGcWmVhEBfFKdkc8zJ7w17eawCn8YyL3qPkmmsMTdFK5EkXzo4KVtje9QFLVpqRBhuG4qibB3c4",
  "key11": "1FyQzCT4ZUm9zw7y9DSkezkqqjJmVvh77vX82eJTFfUGTWKsHB92P2EBjAHwvH2Q2tgHfPrhQNriuuf2Ej4dHxv",
  "key12": "2pGiDYoGEvcMw4YRvo8TiUAHxmCoUqwScP44CBhjTeQvsQHbj87gSx7y2pNE1m3sWthfBGfufcdm2q5qRxTcuixM",
  "key13": "2bWt1hkqk2bDWohsZBzjJoQqTg95ERqqpygYVbbQsWy8aozDgzipo7HwtSJ8gvUYpS59khq6XxtnbqE2atJp4CNo",
  "key14": "2GVMX1WqV7ZvKqQcKuu2oAugQv8hgrxiaKF1FSMMK6H5DzTRZS8GDoQpF7ALatCpnP4JMssFQrr7oGJJqYXXrHNy",
  "key15": "r1Enu28C4ZSZ4Evm4okLMHY28QCrFNqf5RsZMpnJpr7gE7gJTKU4qGVAAWrvStuqMb88mEu4eJ6pzAjrnMxgzaf",
  "key16": "3LFrids3n8TREkgwZs4kaBUDczurqpzcac1kRNphBYR6A9SCZJS2QSE78CznaqUvg43g5is9k86JCvho98vNBBYX",
  "key17": "4hnouNSDKmC2hXVKpcrTQNFTAe6V6y2kFMDzk6yNBSJ7xsXCobkRFMMHjEPTVMiLYNFMVRUnqUtFbLyzEbGc8Lx8",
  "key18": "2mYfi77goE7or6x64kUbXjE4p2CDtCWwo43ma3kuvBb7XqGVoF37AhTZWmk2LNxPUftANSTpQTxtar8nyThvkLTy",
  "key19": "AbpaH2AnVCj2PDsQjknrD1GiEz4LmgMK9PZ2XjFuZhgMtEPMt3DfD5oqB4BZDQpXEe3oJo8BUsDPQy9ykdRpnAC",
  "key20": "2Qgt297cB6yVvXGfgM3nxSJ3jDsCiRULpUoYzu8ghXfiS8JGDeKLvsrDS2Mtd3uFUEYefP3hMFreF5sBUfASLm5m",
  "key21": "67mTYjUyddrQ6dXBCDAyS7WgKgvvafTSzjCSCTQx1hW9v9fUiu7bmyNY3MfrTCL1GMbDVxu51eE1ux72sJT8kgmn",
  "key22": "5qQ7kmR9fJx1zbh5WCcAuLLrfxypJgA8JSxyCnCFxz1YgYd4VGCB3WtP98LabG5KQNYSTSoCfCS3mWnt5mVuDeZH",
  "key23": "2e4GCRBT9npRoj4UQic8PXgAANhgQendM4FMgqwv7X9H83SKpCs7YWvbKTtt7TR397Y8pmXeSGwr4nxrG3f4m7wo",
  "key24": "Jef5vzQT4CTn9oteDvrxdjJttxFQukidAiwYyxLjxqkAk6669jfMGjqHaheCMtJEar7F56gcS7KNKkzPsQTRqrg",
  "key25": "7z39bfwp2jnRNidc9jpeLnz4YxJ3jqZZjXBmzrptESMJnxNwXdhbSzAsd9w5346d1Wzcr1pQKWyLEuJPeoecSFp",
  "key26": "5FD5FiM6v3Neumf9u8cTneemfyz8cpJeJHCF8RYaxjFzZzuTJEsDu6sdqFUxgsbk7owRPQUDCx6cb5SQbhrtK96L",
  "key27": "4obRgkLdL4CRYWYjNtCg8U1tq6CXPpQZmuERX7LiLBRGY8w7U8QDMG7cRzSnzqjgtMWLCY47rTWAz7a8RaqVfhpD",
  "key28": "67YJ1EhyDLopm4gDqDd3tRzocSjS87AEMgqQjMtFW32w3ZCbijdC76tVhP2QrYoL9kSAq8f3Z2PrivVV4xL8YJS1",
  "key29": "3MzSxyop6GFS6tL95EHdXgHC88xAvwqfXz9BygdnAM8CQb3HVJw1E1DKqww18PMfWVqcVeMDhiDnxdRkgxkoGEWb",
  "key30": "2g56GJHmazCtMJK16Dx6WuqBTtpLZtwECDi9Rh53v49iRHb2xLfCx9Pv75Tpz6jCM1kxhNHCkrMUJxUEFNymKymM",
  "key31": "3JVwRNCjfoQsh7yoDnFN2dTqChGrSoAQpkfrJASnZ6KyGnJkraK9AWyEyrGS83KXVBxU2z3n9Kndg6VZDFvgeAuj",
  "key32": "sdehs6jQ3n7NRvb9GCL6hbSBB6ansUP5mLD2oaej17r5CkpHkJWJGxTLjeAqF8Xz1EfKQLvYA46JfSseFkwEyEy"
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
