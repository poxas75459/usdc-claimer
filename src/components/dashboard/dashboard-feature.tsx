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
    "4see6R887X3PdY8rfRqvJBz33Hc3HvRSGM6im6WT3SqQgV2jL9mFmwsqQ4XbySmwTERKWybhJ7jqDy9b66xZM6N8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KyfXMWRSuGH3f15XmahiLGrN5wU4vETHXai9pb6UFUe5FPF4MqbbfFFnQPEMhUDVaEJYdhmyxQ6dGccFRQKMvyG",
  "key1": "5aMaickg9QToKHSuFHYJPwTvZzpKMaLY6KeJRKKH5kCC1gBbSjs9tSzp8BDcfUgMfVELo1AFQfJDQpc2Cv2PuCP4",
  "key2": "3D9nfsn6kQEzuvuxVZf1rrKEmec4FJTLS4bZKrqv5QnfjAQdXeyH494xLz2raQUhSKMZKiqVYQe1cN7PHRD3GMq",
  "key3": "3GEYRyiX6rvGVFkmLFNTqgCG8FAMmg6vha7bUggsiuwz1ki55cw8WvNRBEg4tdpaVxzzAtHTrowR4tXCqwzF2DUn",
  "key4": "3nekenHJpi9zMag628tFJaQVzsFbwXLq9s7Cb9FsECFuWBywuE6S9y4niUGNTtn3nKoWB789pU5TPcNmqGzkeJ2k",
  "key5": "4S66k8ZCumm5CGrg7vHFFuLZ6heYvQncshbFuzZSxLuGkLCaHdRr4fJaTvv3WUPtgMVKvprykH6BqK7PwFQqxSc7",
  "key6": "277RiBJLpu6z78aNSNWQULxXRUquSiNKUMSBeRBcXoYV4HfysTRMaR38qEQ3EWF8isCPVb3E4Msuh1pfVP77mrmo",
  "key7": "3QiYB385hn59G8DFLNpJjMtpHX6y1S84MFn5Az7TJ367mUfu1Jh1TNU5isBwuK7XCsVYVt6coEE5tJYvstWG7hqQ",
  "key8": "3Q96G9cNjzAidQuegC7yy9HNzTLb2isVkChKx3J2ZSrNLhMsN3AbPquzCmB1imJNcw8Yqj5ouNooVjfsyEhJYfHC",
  "key9": "4vnPwkCs4x44nofEdxVxvyc3Jbuo5HzWtmmidrGdWPfFBSnC7rDnWNHEBeSMJdgi3oU4Sahn1n4qcedXc3vGrQ28",
  "key10": "Dxc7RBrsgxyZN4txneRDe4YMpfobjpQiRUFN31szYbcV212tgnawyyFNCmWQGv7bLbDvKfCyK9qDLzicaEjy6Dw",
  "key11": "24inSmXeRC9yFV2ndC1dzjACtHbmE7Jne1VZR7iJNoqLvnyYDhXojUEN1xJB7kQwvDCf7LGSBJwzaNp8XZ27wk6u",
  "key12": "uZhuGEJ2v6kSMwjpL5VYu7vp2ehSV3z9fHMsn6yf82SGKqFKirKAJmR11TBburWsJdco6RexuqRWkfAEDEyZCd1",
  "key13": "3EvWgrQ3fYJYaZfRVtCHqu9rmM79Ti2WQHfWwwVnGqKczKXNpvhZGrbPo9NsCUpgT1qcYkxTjmFQkvjQbrgJX4AJ",
  "key14": "3h5WPKPgbueyT5VcXudMVzCyGqTvykokRfDG9n5ZzaKn7aKEjygzcuG9RdK5gHLLvqNgWw99Lt289FUMaxgD6C3V",
  "key15": "2MerKK1BZMjGdqKYXX1kWkcW8fTXQ7tkpVihp8swPUUckX6mPAH2wi3T1E9MazLscFs2xuaoLZxf3tKMZTMKbyPp",
  "key16": "5xDVuUhUcZSyGcPyXPEJ6Zqwx1Hq3dRZGGZ6v5K8VrMraGUcNQfr5LnXjWjUdfAgKPvJDAxaqXA3gMnjJ5nMW1CR",
  "key17": "3wdRimXKzB7ovL4Ee6Anrhpg6B9QGDtA5gATwe7E4Srp9YYc9uj45UcCPktAo1MNd6yR2cogvqqVHGUZeVnKK2is",
  "key18": "4SGxk6yXPDqCkqrnAnjTh9vLxKacSuTtinWghzPJxcf9tcqkVSaEnwtSNdEqFPzQgwSxq7eWoYtiBH49ZnUmdsKH",
  "key19": "hrZuPgRGR8rP632NazSrwmYADGByzN52nwFeGKu2CFfF8wfKbo4ffRUHvwNxPY5S4shst9NDf8BqxuRmocrvgtN",
  "key20": "2bytKvjCHhE6ZWEQGDFa3soGNF4X86wtYZhBEa6ubVXhaehPShmDSv8oDfqtxVxAdAvUQXF2gKqjm2Mrjnco5URm",
  "key21": "3nNozKCbR1txDWLbL6ezxRkqcrCK2dbHEmVQSN78rCbGnEwXSYpXEpdEqLveMjqDwZLZNuhKbiAYRe9Vi2es8xfi",
  "key22": "31bEQrErZigkKMUVUgn9gEBRYq3vUKMKwQDfWBcZin65tHoPy88HfY95BDxovneaeYY4yiGKDWAvspZgPpEC6588",
  "key23": "3x5Eam8wTnW1e1HYKDHJVJLMQ6iFVnD4LBd6tVasdPFerUCAuhDVzrf99CFjzg6g8Noh7TUrksvXMokwyGs1z3yA",
  "key24": "5fF3jvwHtWmgfEfgc1bkgbGLpeybWMbBECRJXddVGQcdU8D8x1enQzUDKr6exshVLbrB4U65iAbw9jEpr5o2JLSM",
  "key25": "29tRbJ7y3o6eQM9kGXRa4MBdfM9Hdzktk7GJboATgHaoxiJ2qhHoxWmcqW2aBNzdtLfrAAjPameiKULUU9Y77Rbb",
  "key26": "SZ1JDPPUxiviHhrVuyb4t3UTiAYyU3vb5EATyt24Sdp7GEqtjmxQxBYxuBG4GqHUhreT277GL8yYvMNULL8ztxR",
  "key27": "5QpQrAraxxu2owSqKaG6FLVy1eQY4vmWBHxAPMFBNTKKLMTjrJP2fFy9zbnUprVS6t9jLG2nD9JBR9d6UP3W449G",
  "key28": "3Xyt4sFMkCZQMk6zovLyQjCBTWApaHBiHycqFReX9hLFGKQY2G3QsGJFzup6ZW2yxGFPtjBNKUB8hRhcMkfuwnCE",
  "key29": "5rdEVNyz3WGBFQuTHqoJbmy7h4tKgJtRzXb9TGBzmiaPspJ7MQtejWH3xcKvjgnwrW4ffDRPMAKE4Xti7EBP2ewx",
  "key30": "2Uv2f2keSgcCsmxAVAG5ea5EKywoGcKsBET4tsRixvoM1imKMhrqxsRzPjHnX1bSo9ngEpd2gZnDKekNFLuNzkao"
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
