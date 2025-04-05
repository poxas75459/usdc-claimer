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
    "5fs8716o5UgmdrNobvCJRPCbNgYUjvnBJLYNbyokA4WjUjgBsW2mYekPCnW9mMFEmadHCwEG7ZZyUVQhQN4B5sQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "435UyjNkzsUzDnnkQHzMbQYEuuZwaURgXnX5LLEFjyMs1E3UCGRoBz3ZbshKiZ7U9GRjYkoz5NMtu4kzxdHxbrBq",
  "key1": "5AN6creiuz3tWFUTgo51V1u4aM22F5PRNAFX4F7DHNoZQ3j5av3JChrvBHTfBSx627vxT5561Cvm4XxmXniGUEdw",
  "key2": "2HtHHXG3d7EGaAjXMxdWiniysTrS4FRhYkby6mzNPrEuRvNYbvDHtP7rV21agXbQo4gPmwtwUynjdrncntyfFhNb",
  "key3": "4dpX8QDatSkGYqXiLznqUp7SL16iU2m9JLeFQf9JL341vvM5YaN6BNhSxRzB8CrZ59Lg4kgZwjCiZGcn1tembByb",
  "key4": "HysCDLmNPqDrjwqgaBoE9KgKVFwU115Jv1R9HJLHaemmqM2Vr3r3MbJ2HQ9j358hBoL9h53SnpraHP1MqpQZ84Q",
  "key5": "GLNVYLRURRQFJ51gz8kzjhnjc8vtQhC8u5UsjNNPsNUPbq98y3Q7q6E97zhduoUBH2dFDVcKUGUBJeq6RFxrjeU",
  "key6": "51Hdg5kTn6pCjMgQXKYDEMDCMKB87rjfnxXn1LZo9ERSGVeDE36TAxYfAc1ji87mkshvUdcADGybyT5He25JZqsB",
  "key7": "2S9nzTuyqEZFwwi275dx6CmpUo4eiNnCMCnxwJYMMMPWv8Rga64F2XdibsCMQXvZQyp5M5RysuaWPD8xU24mbX47",
  "key8": "46hg65eKM2SmiRjM9dUfUXjRqjZQeE9xUcvmBEFe6dYKhswXDHS3DgEUrpEFYqUPpXoMz5RmcYXPexPfAjoWiUGm",
  "key9": "5SH1a4ueFBoLrowgxvcCtkoABaSpsxNgxGfeym1vAKuBjqhS3euhXnpLVmqPAXjvZmCtDbNqNzUkgzt83yiNwqXB",
  "key10": "3BoDi32DzXdyc2npFTkU6QmC27hwjBhFdzCbWJQK2SdJgGPQEEF6yD7SEkvmviKvWdjGQw9SSenZR3Uf6aiXCcv2",
  "key11": "5yU2YXV3V8eQrY5qoFmErGrreW4gUmX9oHNDa6VLHGQ4seugA982qgbDzRiWPYq3tCoxED2egKeNnwFfxLfnpMrC",
  "key12": "3UTroJ1r7Rbkak4o24ZzHD3ah1PCkPBBwpLqFAN5LB9gKMBveNdWUhFoPJyDZMPfxcMhtsR3dTbfUb262McF1QjQ",
  "key13": "56644fNxojDqB7NMpXX4vwRXYU3ocEw9hBPKdAsQxNm1HF3VyV2ZorMmY7oTPfx6vNKCw8V8kYaQS92mDY3BjZ4q",
  "key14": "4MubQkMntLcr9YHwEQ483VM5Kio6B4NGGzPydGHv8hZvSodcJvumsQnxzJcKCzJhiQ9mh6GFzDYA4AytkSCpvScG",
  "key15": "4GZdwsQYsP3FsoReju7b8EtcoeQutNpMacudxa1THf81ei3To9qTbUEf8gDEHgxNq4HjHxwj6snRjzZbPGDhHqkP",
  "key16": "3dZZ5KxZoJZHpz45ZF3zaav337C5Ytq6dnD3nAzYhqXVLWfdAKNbjm1EWSpbSE53fFuEwcUDwYroFkvA3sgteVuh",
  "key17": "5fRAN77ywdNUH3d3f62kysRbbLLKVNTNx1yVdSB2EiHHyoprEPG8C6JKUdjnu4Q3zd72U4CkVaKbH3CuGMZWZdzM",
  "key18": "4yrFtVPprGi5shLnifTX4s69T7ta4Q5uKtUBVyiY162Ebf7ymNRYCgY7Cn9s2JGTsUp9Jo6Ge4E86oEzE6foUk4o",
  "key19": "23t6bSfcXdpXyJWa3DVyuD9XaqcQvFedw5dsHPri2oydbX2qMQSatnFjmjxCsJap8mmV6fYQ6KYNB2zwgAJvms3K",
  "key20": "5XSTxDz9TCzPLBQfEuzP5MBiPYiayzBvQ3fU9RL46cE75dL5dEmoK1FjvdW8BwhsQPHDHsQz6dnuUqj1ugDAdkiB",
  "key21": "3UATABDk1p6rRU3BnU9ByivfZVAEPbjo4pnweSHkhBz2TvvjAowF1Cr5PEDszxqhi4hLtXeGALXESrQsnHjQognx",
  "key22": "4KfKhpBmdbHsz2gezSbGDHMVQKNoMyB5K1RSCDgdSbmCkLgW8hML6KffjLn6cktv9Gk7LWhU53QQmfbB2PgUg4b8",
  "key23": "2fjjHV2MjkDam9CB8QJm7P7GvzbrT5HMfyXQg8SKuvJjbAqF1F8zU1LMVQr9UX8jf7oub2FpRxbGBv3GrnVXX1Xm",
  "key24": "4y6YAsD2GmdUfuSAzXiRe1CaU9GKE2gPYnYrtEm8kj6z7EiD46NQMcpm8fvhL24uQzdUvpQrkzsxb91hgKY3SZiq",
  "key25": "2Fuzk61hMqYP9VdSSxJRYv7SkQCntmGuhgre3RZYhFhdsinqCq5jzD9p8aoidkDzuPLpWAbSpcR76JAZ3Rie95TY",
  "key26": "5JCenS9KeV4sYpfMKUnMT73wEpBMRe3mEGEL61y7mrR7WdwXc1LAC9UFMHcGtFuURgx4nwjAg9QTFecPAatKs9xe",
  "key27": "4Jo86sbSatQWS7LcGRWBYG4v1UahMH8YxJN5PPNpXToD4b7tocWSki4Y42neb9bcupjGsNmCC4BRZZw4JBKmGj2e",
  "key28": "54hH913PpZAFgzVkQ78uCHn23eCF8GkrHGyxTA84vG2v2cPcK4KmaQda1L2H9wuCRfiWtQpf4WJThxWfZTqCfdAa",
  "key29": "5tTPZtd933uRLPhbqxQGL9A6HU5FUdEcYw1oBy7PyiD39vX8i9ke2RGqQB9hMpGt987vYiKvmPFY3m17jFrj57Y6",
  "key30": "3uMQiTjTzWDPrwZy6oRFAdvoTvcUg66YsAbHqaAuK4mPtZqsAuJUwfAWodDkbG5xSw7HTeanL4KAm1DTqAYGmNV5",
  "key31": "4vRR1FmVU4AmmXtYdbZsk9Xx4watFAEgCPuxk5GfhYDkKV7GDLyQFQtr3NRWq7t4QJ674JzL9vVx57Fe2vDU26vE",
  "key32": "2k9Tj3PBM5wEqZS1CHamfbPoTGHQu5yS2EvhXrJNR4CuPsjG2dZuC1xcUZz18GbNFU5YFTKGyZKygQtRF6uFtFA",
  "key33": "2pvjCHx5wS36BR2qsX9HvZv6yPyfUV5JTmVKxFPNdYb8VjLPuHwL4dkogvLmhc7njw9mLPQiBcMmBcQQz2JwgjXR",
  "key34": "45vY8XfqDGvJF29sLKwM9N3UqbSPJrs7QzmzMu4n4e1K6CoUgubmYvPZjLgKcqqMM5vkki4jkGdN8ANRgPfX3gdY",
  "key35": "5BEAvygMu2JoH1BoAaqkh3auNWDoovmAEK5b1EXNnFNPZWE2vVGRcDKb9mSwzdGxaUU3RKHpvZKFjC4WHnkGxkCf",
  "key36": "3TPdcdXPoGRfMJPtPSpNFs3juraYyTyb5ypstZ7aKDimN4pfw1g6Yn9F4nXWQym284RSDth9JyzJggfCSx48i26v",
  "key37": "5M5xvAuAWeGrUoxYFd9SGfrpQkLULCjXuJZjYL2dweJbicQ2FjTkbny1W7n3d2HuFC6r8orfxnegBfQrzWEY1rYH",
  "key38": "2JzPaLQB1CoYxT9b2w3EgSopm3UqD2gtNCZKQQZdrRgtYyh5xKK3WsSFqAnktmDV5p8Z9gALdnL16tD6mmt4Y7W7",
  "key39": "5Ub1WQyGzu8Ex3MBMHBcbQwAADvXq8e2F5mcnDwNXp9XqVYeyCfc2kpAArPRVT3S43ioyDeyDsLyrfrGtv9qWorL",
  "key40": "239qnEsahc8o3EardmsVd87wM6ztZMV3mUWoiqVen7Q3UMnpUwU1xdncDUu823AcWNAjiqVdqN7ayLpENerzPNex",
  "key41": "3JZ6PwPkbpnpWgm4H5wWz4xMxTX96DVjeboDYcRs86Ts15oisLTwsDHVfSjNu7Ei17UtLdTzK61RMv4DwHaKLChY",
  "key42": "46Yxx74DjRzDDQkMo4nHeNET3CTtLvXkQgPHoRwbF8StEp4WXg2f4kAwFd96kQJ2LxgHtYiNhiwjUFzNNzwXEyKc",
  "key43": "41KGGKouz9Voa5bzMaRP7bdnzHAwr3qU8EUXYckzLm4RC9VsqGoBHMYw8NrvZmjdxjrDCsdUziJpiS6aevXC9nMS",
  "key44": "5DiyZebcvUZX8fF3SxSNguofpMLewtN566dvxjUXvqDvsp2SzdTLm1xQPFoVgjXUyEjAaWDHcFoS4qEgoCKGBnEJ",
  "key45": "3EyJ6sxrdYTk8dokt5WPooEkMVRt2yW5R5ACs7hEEaMTQ7rctCNpyTBZfdYYoK3SWe1pnhrADQVUsDQKZmmb4tWh",
  "key46": "3auM4CQbw1nxqBg9DU6ooYJTk54P3ezDsDPhpsaXoVFSxYb1voZkVuGyDTbnMqddKCWXeRAeRTMT3yZuubvBxEox",
  "key47": "3HTYArGy8orGskCaZcw2cUHhss5NMFY46zoHExzU1scmh4QbUstkAxxRo5mLGsqWn8Y6XDJgPsLExsNidiXt2wXo"
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
