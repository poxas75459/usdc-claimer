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
    "3zJFNpiD4NZ2KZtUAtGx8ib6frzfqbsPeRVVSVKP6pED6YGPyyf3hrhwmrp837ghQSiwFifdUhwfVdA1vAj7jNmN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P3zSaMo5xUKs74TARHazCZKJND1iZtWbywP6T1pdkBoWgf5gXd3nKpoRjDufd5G48AxnPm5euuSFd2njLpNXv9P",
  "key1": "2uECo4v7U6aVQEiyozViTLo474z1oNeQj4urD1FsuFKxmiwzEQBXXEvtTB6FrT3DRN5r1VMf4A38SDa5vVyS4Etz",
  "key2": "3jv6QZanriSGLCdYiRQDX4etfs5EGKTNfQetPK8upK9K2pLFE1fnKWRAFX2MkHpsn4F17guoZPh6miys2LjWw8Qi",
  "key3": "3b3o6dMLnT5izNRCAr9TGvwaPgSDNvJ6N6bWJuWrpEE9kzp4Mtt6TzZP62F9VYjz5nBwadrDuU4v6LnQ4nSbmfBr",
  "key4": "2H7hAFUVRnHLpEkU7WBWUCWfdK1trsHatQ8R4W9YU5pheuA2NwgBRFnTut2ABRUt1D6mtFEsgx5FkooM3abrNu9R",
  "key5": "3DJ7Rjt4xxraNGZTbiB6BDL1Lb85CjA66KbLp5eWywBJ9UBQRfZWUZv1mcYuKKwuKkjhR2tZKnn66AY9raze11QL",
  "key6": "3UqFpfa1gnzcvxD6ZV8k1WrWcdCY6Kz8ybyzTQwiN8Ht3qDCdcba9cZ6oNWjj3U57tFXB4rAjhrx7S8YHNanLRZX",
  "key7": "2A7tJeKNrvpaBU1yiyVLMyv9K5wqJW2RbqPD3oy5bUz13iEAd6BSaj7zep5xFFEonB1kgZoYPevdS2VqeAnUSb53",
  "key8": "3fEZSQHG9rUhvwFhE8e7TJm6KHnKKH4cxnFwubcLsKAkPXwFNzRDnU99HiDyNGQTLpoWUNU1wBKBqNstkEXk46aj",
  "key9": "3AT87Zq9ZuLugFUHfdDbEni2KxcaD15VnjoFiaVbMy7Gy69XXpNKQ2UoCZ7kJZunbQamU4EQcpPNDuDokgK7bAkc",
  "key10": "3Qf8iN8tcApux6TjWzdM4eCTTniMfPvPk1mZ4LoHTSuciwMLm2XRGXmbDzBNC6fpxM9SzqPx2a42Qet98aWvCGP2",
  "key11": "3TBE7oeQ6MPFvRR4yCpPoxaDeizr7f2BqDDGvwtViwRBxw5PuRrdSjanNH3K1tbs4GQhBieUKPf1VyxdF8NSYbJJ",
  "key12": "3SoPiLYTsiJ6C87Xy3iY7LjpMhGhHATWbPAh1QfiSEsAaKSt8qoH32WD5ZsTMuNQxDTHStpxAUv4suZFWwXeSsDi",
  "key13": "3W4Nyx1mXZ4cYoGMSQcvESP5JcgrpfJsyQzqCYjbFD2DJLSDyYZ5q3yTTRLNqZnkuv2WuHxghzy7hKWa2ifqd73S",
  "key14": "Vaz9aYquYyxzHnLTeYvYEoxWZgppmnBrzvsnAHJVuDdbGfPE3NGVyw6xQViHG7tp51y29ie2pUzqqP6Ct8nox2B",
  "key15": "3WwnkhBXy3Wos1k8aT7evoBvEemTS4ZnFbKWmwr1aGTRKrPyQic47vSAKLKgvbcG6gBMS3fHsF5GjNWNzedBC7c",
  "key16": "3arBYXakwNjRiw6ZEwktE4sJwqqhNM6PYkidXzk7QBA8HfoSwC4632ALaeUfHuJY7QAinBZ7FezJMFQnEpZrWJJX",
  "key17": "38nC58eUK3qaoigC1ejN4fHn1EcAc9GmTfJEYkjbTaRhXQwQKuMuAQCs4ViHUrWsEVMS83ea9q1SGpEBkGrm6dHQ",
  "key18": "3yswy9b5GVkGUk7sZ9aKi2YJhnpJ5yEFsMUErk4RzsptXLJMLz2T5wCQcS4P7rXpKqtpNhNEdF6xZX6PL64HSLf4",
  "key19": "2MuG7GC42FAqrfMUa7SJjJHKvCV9FNY9NXPqFAFx9u9FcDng9GRKUMMmbm55tniX7VroyeQxdbDJfbzycvNS4vKR",
  "key20": "54qREzGT5HQSHtMUGb9zXzdhszicCXv89e9nXhvnV13BVdEEaScHC2fFbZMC82aB23ZhqgKw23N69iiqgY5WVFv",
  "key21": "3VyEhtkWNcbZR6budfAoztmwreimkAmYUdhnCoUeycbDKdXgv3bx7vSCagAiP8UQVqmcREvyLc8Qd9KoNw77gUc3",
  "key22": "BPdABacqNA7CZmiwkKcF8UYQuMpubNE9pz9AMebQ1W71f3Cd5nVTgzUpQfHTYEJrhhXjWp4NRcQx63aDMnBgyMo",
  "key23": "3iaKDAeXK8YJbM1R9iu9rXAqNkPwbhWoATD7rTQo9yJ7Seic7FpvUnKJzFkREmPN5uHnH3uKJtQPqAtqKkiv9YCG",
  "key24": "KR385za2gfZ8tcmCnSmjoPBQmVWxoeCmoP93GUHg8fWp9wiMNvQbqvgBXbySsNYmWw2XhdxDAUAZcAV6DwGoaLE",
  "key25": "64JMedtnoDN92nZqWtosSJxGSqqXrg6vAkAS1Pe181MmLYg1vwP41fi47rxNgMe9KsV9m1swsmfXXCsm7EsmS4Qy",
  "key26": "5jAwSDHi7F5xBGRNd5QKqiWTdoc9QEhdFyfR728b63vHfGoytkGKc54hWC2nRY1iRrZuniW6YsA2SPkCcBzqyVrE",
  "key27": "2TEHjPyeNj4UunEiCQZnjt4Gd32A8adBgtaWXvrgt48sJsvTwEouiPuoXwtHFy14yjPj1vpbrzKrpFEzXKzg6K9V",
  "key28": "2CeshMy4itPmGcvkVRHna9p3eGJhiKyctFnW8pm7FwmBun2vVbqSVrtzMAvASG1QYQEfH4F5eVtoTR34PT8G92TE",
  "key29": "5dSBcPPUz4pqCTKnDZWehLJZfoXNZLB6Q7LLU6vQReyv959gaF9ng6qdAcs6Gfi7urr3kyLrj9pbGzNMVEv9jiAN",
  "key30": "211RD7mZirekTakYZRK32DoomC5bTAkeLEtphhxi3opUu1g57bjGajzVdqzmTgguHTgJCGwkkgT4rCii8zR2d6Bb",
  "key31": "3r6JpWW2tS7J1AJD1yK7zHqE3nTFcinoaWrKtjXcygm2NLTCLLsAkA1F7zMoLAQ4kpjELaiaUiY3jNyJtcnnE7t"
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
