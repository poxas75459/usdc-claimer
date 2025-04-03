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
    "38cccrXXUY1sqJnAuBSjRF9reUpxHZZTmVLJq66FdCKWrv9U9M4nTvv5sbBJUMecLh5eB38bbzEyLpRzHJqv48dD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yaW9cWuRTRezFTBBHYfjjbCnADUN9hJxnDyYQYAdHdUEGxscrkucnZ7U3HMyQdPgLopty1K2TJ1TAGSm2y1S5DL",
  "key1": "3GoXjLPYkgZxx1drPv4Wips7FNd2CbQ7kpJ24BGjcmoVhjv3Ej2eKRHkFx1qiuonargpZhqgcKqfY2iZEVQMqvnC",
  "key2": "5w774tof635yBUFRk61t5hc9J8Tmo3HtAKT2yvqnrA8Y91VEPmDEHPtTBVLtLxiaDCS8HLJ5egDqfrrYDDG1gJEa",
  "key3": "58xbBfabonQjdsbmn8q4ATi2kBr9M2FVGovzfN3S81zP4Ps94Ed2GYW6JgLaseVWY1hY9kBpNfxMQ59Rd9ydV7pE",
  "key4": "trKBW44XNyxbNoGM4cvFWRGTrHFfrXf7NCQuhpWmv7M3hJXUfLPjnMQrBdrK1WJVjyqBWMSBLUHoxVABuDTG8tv",
  "key5": "3MSND5qpgpUe3TcMWDcHFfeuVukE9fKpBuBRvnEvuaUC9FW21WPLgZ6FetUrJ3DKH3jSHcz8MAWJBDqqpcU3pxQU",
  "key6": "21jccyKEhdopAoJ854kYC4uE4dNdLFpxJLosqGEVg9LheK4mrNddcsc6BJcD9cURu99aZMzDUtpTucGQt4VrS3s4",
  "key7": "3NqUzHH5BoVf7L2jmKAZHLxjGW1jwkunBoqKVJGcndajMmo9p5r2mGPh3aPXbzu8oxfBjKYUj3myRtfuK8h4sQHT",
  "key8": "26mA4ebfYrfd1TbbrvvCVobBRCrF97CAyW416u56ssDAeWX85vr23Sn43SFfoSDavAJRk24ySX3cd5suGURQhFsq",
  "key9": "5ru2qUo2K1vrdT8RGiWdzFn8czAi5hW7JKA1fbQkEThmYar2iaHs916uq95cAKdgfk82AZobLKLH9YYRUJXSzXkZ",
  "key10": "4V3p4UDfjy6Nhrs72UJ4KPBGG37EJBXXmhEMBauA2ocmGqXkRop2dnf2rgEdWax1ihxPC2LZcUqiwCNinZknLNEN",
  "key11": "2Nnkai2p1fbWQ7uAg8KEvy1dYtTLNiDJWqfdfGWdTiXjqUDQUs2TyHqf8AFzGr7CVGjg4MP3Suh6gZXdBFB2387m",
  "key12": "3k4e8sCR2krCsx3pij1QB3dJaKqH9oW28UjEfGL9krpAvYNcYb1SVj6bvjurxfiCsPNzT1bfU4SX7KzsLjsYWTDq",
  "key13": "4oyEYp16KqDNreSce1EtHej1vGJqfZaupZZiSKNyMqyEzZKLr94WmM2MRrmYgoJ2XE3npMSMeYcYULSHj48KpZ6k",
  "key14": "3tiiZ1r1eziEimCJMaXwDiZJXHUj5NMpDfXpFrkdPQwYmfixqdute6Cnz2YMJdFoqBzZDGyEhXGip3gasrLBr8X7",
  "key15": "5kAE151zfLopVfFtaM5G8momjWJ4LMmSTaFK7ArC8yHMSXw5SPKknNw4RjSZBoCeQobW8FKFYUmhXNuHgobGevgF",
  "key16": "2m9gWQ42WHf6xKZ6HDbX6TWER6JVS6CjBSzSSkiu7P9fYHtCzuAUM7XjrrGwJpF7KBSsJ6BxywS9PsYsM3X9pnpN",
  "key17": "ttdE9kTdEKdAhNmsZiy1ds53H5VUjMBGagJAy98NqtKKKpSbED4fdwT5KQ8JxYmegbuGSdpT85pAVYukFdkqn1V",
  "key18": "4y9MTpZ5scrfw6iWiZUNWphLKbKSLVax7gWULKLMm1dZT2emWyGxPAuuD3JVWXjyyzhLD4wfbFTzrjJb93qcTWwY",
  "key19": "XNPhdvVX8uBFT7BHuVHhTK7WvqcvmtnNW1xQV8YJyFd45AVotwsB8F7tpdKjBJZww1KUkqLi8gXmfNcY9K6CaBh",
  "key20": "3SKhsAdzn6Xm7bRDVUJ6C6mhnS9RmwTDiwddVaqf61xCyBcvhb2RtGuAPyy12k5Tewy5FeTaa7Vr3JpTvdbaYppF",
  "key21": "wPPuposeXwY1cQoYMsDfKQNBpucdBSvH7n4zxMtdjr12ZyTkvgx7nBPKsKkMRRZJkNPxivxBJ6iJYyefC16BKTG",
  "key22": "545mX6Qu6C15mJ3YWuoHnGE94fDdLviw2R5Z6zxEkN2VxxaEVNiqVWmCU9NwoXFCpMpvMV9a6oLCdtDyRqMvaKfk",
  "key23": "3J3euHzi2MR8QvfG67PfeiuzYgyufjemNd1Z514S4CfACZRLKL8zuET7aH89U5Ra3CgfGBThXrmdQ2rLDtR3KK57",
  "key24": "41JCwTrF475ZbnUDg31Ax16R3VSJnC54dAjydTgz89bKAP9jJocmCHTJMa2kBTZRreFDYEuVV3z4YK42M94AwnRJ",
  "key25": "2MnPahiXM5jjKcFnZL3b87xVywiYPKQwbd4eHotW96k6kFShdLRWVSrWNVS2fo4nMFMYPhnKqQVxofTeh5D4KRiC",
  "key26": "29V9FdeUv6iJS3AiqjsLLpWMuTPTbdevFJiECDav7sfBoMqLeSQiGAFkT4Xx4jj93cgeghFceprrWkzvzAqeA16K",
  "key27": "5Lb7PR9MNeZryKznb5fxc6ykA2tdz6R63vUkLZManxwTBiT8tQdxrwR1YXdaHMW4DBcTDyRb7WJpFN1zvciNMhHe",
  "key28": "4ZXjJkD3b4Hccuv9GFTqbfUMsy5xFscKQnt2cVMZwz1McmZpSxLkZyj6L483f536yQAavyW28mzwyd1HwjpicCii",
  "key29": "51d4tSo1dFGRXgKCFtALEurVPJHhgxicZj6VQie8CpK5hgF6TuMybkBRYyoySqyHvfKcK8JEi7gMhCA5J2wyARBw",
  "key30": "29utoJzaahARVbZVtXzzGkTjFYMp2gQyxBEuL62q5XtSdMXrNbdHE3D9tvJ7pw3cWUvVBDcaRfW7qB6rRGnanYHJ"
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
