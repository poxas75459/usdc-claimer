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
    "5BsHvu3sfuufWydFvmwsc1hLJeRJUqjVZF6HPyFLDJsjkVzMxC7hh3Y6CVjba4yNxdhNydx9uaRJ5zuWBMydntp8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z5uFtmDwxErC6p3BfNQz4bAwq5a8YQqsmw1zmjKCe48wpNiCKpcEJPUx4esKuLFifQ9wu1QwTGnngWZyTfgFD2g",
  "key1": "YDVNh65kuuzAMzTs1ySHoG9nKzPFXWEngkcZE4Po5mdU59J8QtCrEnqEbNiBFfgLeTNSk9okeP7SF5tXXqH1rVW",
  "key2": "29gBEdL7bwnJkJ2gRpYqQ8jHPKJwJQ8xZiH81uPm2wC6kEZNwPkF2pTkwyU5rnf4V26CtVjfYriJbyuhkZkmhUcS",
  "key3": "37trJDuLoU9E6fuG3VFbBzGYefPX6PTU5yZUMbDoUWWFN8boNm5e7nAFsMcVZnvevb3KTktSpD9UJUGSPsKpDu68",
  "key4": "2Rm222sFx6rgYm1pvznM9jfTHJbJi1obQKVniXwFAWqEHMQuLpDoyHBxszBw53bvgzBW3sWcrjT7TSHiund86k8X",
  "key5": "NkguoryzskjMLfTSs56dGLTRyeJifsjEm1dzkuzS72REozKAR5tqN4QZmBTkZcvM73VkoShMm1PWoGCpwTNa9Vb",
  "key6": "2jheSuorfje6Qyj84zbqABjwoLP8fL1JiLFrFFGKt74gH8wKYFNn1XFYDuiUTcaet6rEe5QtEs5YmTrkm4DLvhzZ",
  "key7": "5yGB2kEmTKUJMRxbXAhDekUcBLsNYCHKBtSX9gPNqku3LZunaTzBGdhQaguK6cK6zrEVKtES6RCkfifynZsAt1Hi",
  "key8": "5LNCB7bsgtLknQK4JmF7eFtVVBkADxym18VyyWmcZ3EXDwB7N9zv9jTkWXU8sGKMFGVeNzVL1QNXjMK9PMcKtPbi",
  "key9": "4UpDz4E7pYHxFSUGsb2G3NPo4m9xH8B7jdHEZFJ56CJXvkN12K5cHxYdu6ten2kvUFfwjeNvUTL9EQ6r9NojH7x7",
  "key10": "44L3jrTinr3qKZW2CV66y1LTHe4kSNjcYn1NeoTSdanm4rqVBbNymJJuBYa61Y4bCYoahRGt5JNW29Egg22g7qTg",
  "key11": "4hrbPZdnTP1Bu26qKusqst8XYfaAGPXAH7mSpDsZm5NTmUDnjsATmvSc73H2KkrSvTwfLh7ejawNWqyaKyX96ZnC",
  "key12": "LfyQVGqcNgBpyuAk8yd9NvyiXsmwqHUXBdj9q9W7UHB5sUYT4ACTCDGey6Z59x8mVS1Lpu6c1ahrvbJNATgTffL",
  "key13": "dvvVp9qM5ffqEUcH24czCRbkNHc17vus6Jqw1ydRhoChtYsFg5gAysikf8E8M6CCcHyDbM27MqS5Z5oLKa1QgjF",
  "key14": "GfVoUpCEboov6n2YXBhq23wTUmHhKsXjiLnCMSqJirFQryJA2LBkJqcGYgaSxczjJwCDWjQvGYg1KEgDfTF7fps",
  "key15": "3tvwQXfGRrWV4N5N4V6udVSYij1doNtzsYY1TRPgAk9qsyspRHNk7QqV6JDFpdV3DCCy9cLRnASYL9ZmhyS21GL6",
  "key16": "5ue71NpAbSWZxRfdx4w6T4cfEmhFQhqKhXxbzpFsZDXeX3cR92atDeJGfYQPWNNVCeGhVyBjXSV2AVVbDVFoNd7W",
  "key17": "2eGMDsn15D24G7u5gA8wrJhMwGnXfrsuNRiazXyrkF8RvauJiJqaAEpxX4sryLKpzD4CuQYnSUcZqVT3AUwSiJNn",
  "key18": "5eETUwFMsBMLmz3tyFYi81UqWFFB6onyzNKw9z9fWdTYqjJtJZPRvzfFEarptgSK2KbtreZ3FCd1LxrdkFqBjfum",
  "key19": "EwzVCyCoXTaWhXFAS5qnYCLZD6E6FuA2D89dEKKsQA3EbGKH7Xcr6f7gZtSgEFGy3Jt1vZWx5ffyPhCEgvxhfqL",
  "key20": "2Jr3Y8uxyqz5wNQoRMf9yuyijw7xkNLq2fjYu63mSAZ5Jv4Yf6oWksuYifMCAvoDm37hs7VgjVbcRL8covPLuDDq",
  "key21": "5Y6FdFXaV99MbTzubuNTanr9EXVSQrLPYcxKH2W1jhD7frscdJTqECfR8HeB9TkDrWiMkbtz8R1Rv36PE4C7sYfm",
  "key22": "3LaDG7Lxzpwi2fgi1JrJCHs5vVwS7GpWNVyCqEZZ4xqGHRXcMzSiWGgrrJSswyfeLcQALbR5Td3AtpSVwGtSEFbR",
  "key23": "5w4wWBhdE4Mqpgs9ZJNjHVXC4JvU3JEKiCGL8tkJRc5uFp69GMMDQNc4TbthMezZ8pNDX1vyo88rNxUp8fNAhpDo",
  "key24": "3MgizV5U7X6pvuoiv8aJdCSVTWgYHUyTVVXYETEnotVsKgCErFuJ8r9fJfbSNWvEXeeqbprwuvYNfZMt2EDoCZ7y",
  "key25": "5LqwuU66GKWrRP7ivfBbwZaaiddXoV2EtWEBxG41hcqaSQVCr6GVsUYrsxpQFHsZDCtEv4vKsCm4UAWoVYhYH4LH",
  "key26": "gLTL9KKezCAEpDn2RcXGT6NwHSFvAzfBrV5XBhoEEzmsnBXgLoTkoHjDbGtv5michwWqmjJ8NniLfwuTFZFR7cw",
  "key27": "Wpt73PyVCL3P4HyAUyD47F3mSSe24a8V6XvTsLmeTGta59pywXnfSMsa8hmfn9bHcbAwn5cqaSKqG8vhMW5HqNS",
  "key28": "5eWq8dLHwzwEaw4YV9KASzTg3FrGAG9Xt9oL4aBcpgMRpBGj3RvgeUEnAZgtSYZLNgLWWQByyMG4JFZZyszJdtbX",
  "key29": "4T39gjHDxCHRXQQFUBpN7htht8iJufKhPVLqbP62jQPYsQKVKbkREXYWn4guY91fP8u6BgxvHsZeTs7rMjFdEJF3",
  "key30": "53KjAcNoHs4pLwVUWz9gvtLU6SF6sRjLKzmP7hg36DmkwvLj9Mo3YARyP1yoMTcJ6nuhBKfmLwQgzJAoXtLEZA1v",
  "key31": "Vz7qJpX3TZv95NKyWWiyeF5JhmXswqgitzC4PXbePDX4a87oohuWeTtqxMDJiwXri4sfXRntjptcropzWiLDsE1",
  "key32": "XtkGayZTToWgVrQf6AFffAFfTZZkA5aLwzUtvYFXsDqaypK5nc6KKyvumydT9kmS24SxRBaNd76JR1XZhPc2ACE",
  "key33": "38eMc7uxtmcyMbJ7NfvZseaMXFWrUibSfaqxu4HW9QRFmgSLbDCqAqpAQMYu7TQjLcQKyh5xocuZAyfxrREXsF9H",
  "key34": "2DiLeVsACwcDXxM5LHcrFxGukoTRAgs2wh7aJj4LsFQNXRcquvRExeNjvKhhQVYuQrW86kUwox6bV1PEo6HrVtck",
  "key35": "4BzMjVBq3KGAkHbCjLzeZNeYEf1aGBUmaYLQqvseaStco8Siue6U74uMfdvHj7BKuDwM3SbjqbG8bWhvs9W8Hre9",
  "key36": "2q3PNAzGQdFUFrvsovfm1UKjGpsmi8WLi9PbdY1brG4Wy395ds2X71THSXULFatFj6YyzdAg25JC95uWtTWAzHN4",
  "key37": "3Cj7YgrFdrMx9Ge7z3CP4iyjFZstwkgwvbZS3e88KSXTJTAH7SSewwdWGPqtroxsxsM9YNqZFuHaKmwcqMafAEKK"
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
