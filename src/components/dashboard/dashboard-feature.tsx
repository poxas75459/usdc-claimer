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
    "4DmWqvc6nTsVMGTSBuQ64QNScShRoUMd58x4drEti5DTjvu3fGM12Bd2MoZnPzydmpLXBKLZrSgpdXPoVBQuBsVS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tNfQeH7VDCVAgfU26TvFoGwr2Vg4rzaHAFtRHfDnMFD8MethaP52eJGAJxep1KXhsumDVeRrvRhFttmWNYQVSUb",
  "key1": "55YiTVRDUb3Svm9166QdecnkAf2REcuczeGTTU9u1Rod5jyxFYE2s1yN9JbKosoXLtdHQvERofKTsamJ7xp6o9E5",
  "key2": "23jC7qT1spM2VP4FPp4mytjX8Px6hR8SCmY7jBWYe5s8tNDAdjemnhGNjPpZxvaDmPDVrMLiKz9Gczig9TY4eWFZ",
  "key3": "WeNr7MR67iy9TnvnZudBpBKxURseeEWJauWM5cjhxUAT4gt7NyY3Ub2b66gfhB8mW9ZvE7GFMKqTVTGjYe3ojeH",
  "key4": "2WcgUzUTANzivhBCFEN7ACs7JqCUK2zCUFnpJyVFrY8JprDhSL6pxSYbYTMjXXwiiKrK3YJD7DYc9oUuBX8t81vJ",
  "key5": "3r9kohQL6AsB7rP2r9gdnpV8mjHaFG9wDGFEev7PjkyPV7WiwFoP2F9Gtp5fnm9Pc4fKrw8GzojFZhitwV2YNPkD",
  "key6": "3n4XghLudohPjr6X39uzmdp5CmboL4LPCT4ymfQx25wXMopgsaCSu9DBD924wgeC6Dtdr4vu2GwnQuNh9YVbZzeA",
  "key7": "55FataF6RpAmWvBD3QdsFWXwmiJ9r4XC4H4eiLTJmL7thhvXhYGkYDBaShqVBxVcoUaJyUm54DZ3gbwLE2TnwpMP",
  "key8": "2WTZXU5yNwToeWaucdJymB4XfW1AfNeBCqvtpnBJ6xK9mo5WnNFcFKdwpzag1nAzHvj7sQH3Wjefhd9cMzVfh15p",
  "key9": "5sNUzL12tKa1TRTp4YjBdtLECrdPKSiWLzo6EoKaznepXYsBwisnguGNQ5uFhTJMbcDjueZxLz4f9QhNd2T6fyr5",
  "key10": "3b5RJ3D2ZbgXz3NULeG6i4xQwLdA6FCDKnD4pgkXz9DKoyYqtCPbRyWDCSEfdfwZXSUrEeAfnnTVSduPhLShSRnW",
  "key11": "64yvHoob2Y5bQyEEmNcXyPPd95MySDQb4EvQH2WGfWQmfvbKbX5RNR6Ymv9C1AJJEH9PFZgtdX2cgJfSp7o1jLET",
  "key12": "5xXapy7hEAgSKakDbLTPP2yqoFwBb1cPQ6uRhyZfqnfaiLLrPEJC2ZSfmWE8NVJSsE8iS4sLorf77FmrdmX3WZiA",
  "key13": "WiNpjsBnJxG5sTAxq9tSQ2ynhcnnuymYXFPLZJykN6t7RzRBJWgfGbAuTs6A2QKwvz8jykPKPMGeJZL9srrSgXu",
  "key14": "3y1FRjGTGe96XsHFEkP3dHMSApctfNEYp6cuJHYUA8pcti3q2ewiXMnvZiiDWkrPzpHjiVVZvbT8GS8dSqoT5Cet",
  "key15": "255nmkEmDuJuPDV2ojXK1VCGP8vdhZcKdz6UUpWKFSrpyfLQLpXtLJsowy7bWv2hsAbdp5V4fd1PnCnfEAqxyUqc",
  "key16": "45NdjWBQC77FzbS6Y4d1wkRo4suVQ72trjs4zVUqHRPdrXHscAsKhUkddR3W4cZ8pN3DesAVPjBa6tXF9DkH6GpU",
  "key17": "3of9GiyMU3UKbcZZwJMrJs8oX7Lxqw7YHFBWpQnyuEddWiZZ687aka5ntuYB8GmT4ut5g6r35t7BCumLQfrYaYgh",
  "key18": "4pQhzdgtQWRLaGghpz2Ed4XzK4mVMeZ4dDk8Yej29cFCK6aBbzE2M2hkET3gQUxedujHmxFgQ8nEvc7CuJwkCQsx",
  "key19": "5AbKfRN4au1Sk1MXE71x1McBhhpstVVTU1YgTd6Zn12MjbeZuQUoru2DZkkwQ7EKGpEFRtdVDSZ92MGyh267nTW5",
  "key20": "5XKJeWvmAkgYghnExsyt8pjmGiUyQUMr1EL9yGm4VpzYB6h5sqeGMZz3zkU9hA2Zxz4f5QAA4PREdVDvrF81YHq5",
  "key21": "45wPj1zieaKgQrVgiYnKyvCkxYDUikyiDuL2ZL185xyf1JCBamJtt5a1ctDjsQNPPJWVCbwhTysfGcyM9jjdMQkr",
  "key22": "vaoswKTUN4cn5TRPoo9BFfgzesELP8W2B2SAGf5yJ2FmuLmvFtodtrDhuEpNgSiyt1g7iGevUqs44kA8wy4hAb8",
  "key23": "2Cnn5hzmiAvZG623gTHL4zpiTF49RfjMFKZ5MpTUU2CLND4TwgSnVNyUcct5n6qC6j1CktG9wPQwM2vubbzzYvWT",
  "key24": "nmdMALJvZZpb6NDCVnok2gpBNGuKXAxam1M1rWvQCYSLwEBiTrCk9E19SAaU5JGqJM9pmg8VNb85PmQzTF4AaRB",
  "key25": "3NUH33oUmkqWTWZVQp8ydPkyhM6KtXMWF3kpsyvuZZqgHbCvF6ch543aJwxNrrmi5uzFYnXG6boCBxxPJ6NEeQzR",
  "key26": "5kC4MpuMEFFuKZeAxM8S5A1ZS5Ki6bUi3jbW9wa6npDY3v9a6qUHZ2MjgyoBCxz5cFwjKbhTqfRNPbqprNQtxEGQ",
  "key27": "3gbcQe8URv1gx3gfNZTEKCbvMsdwxu3SJ7n1tk2VoxkJUes9ZEpdQHkDgQwLFK41mhnTwvoJTeNPqmex4K2hdNjK",
  "key28": "357D3Pyur9qzex7Baa3vk4BxmWcCSPL5jQuqTjaSSdmUJRtycb9BNwLvyWkX4pFM1Z3ArK3urHpnbZBgwrfywPCv",
  "key29": "5waYcBTg4jCZeVuWJ78nnANMXc3KF4ZYb9QmJPMxPMwydvkmFiozBhAzDqYz4ecEBUqP8uNumJLi352iFy5AQXox",
  "key30": "2VPLSk611PiFADVAH6avP6Ty61RimuUNz9ZyeHSmd1raNdouT6mn9rtKggXAVkvsTLae9WCHXYUYf9jqTD3Y4K3Q",
  "key31": "55St6WmLzppGmyQGoufHnpnUSar1eDsHJ4vYaVsLeHwHagM1YqG3WnDAuvcoj3RLSdXAofVdMjYCwSVsEerzbYUu",
  "key32": "pNoLs3BVXdSPk5TrYjAnPimsSvQoZJ45QX6dShcJj7StwrQ8dqgzcDokB6gnXKP2cUv4b3xJnvgHkcKa48qkRSE",
  "key33": "58VoWCLJQFyeLQp9BWT3ZzonWWD5EdDWr1bFV7nfpExWvd615TKo6SWgdNLZxfbPXWzgskuvNzjva5pwo1qrZY7g",
  "key34": "5DFfTWjcE5QMWHVG5pBKXLaBFSjCd7XhDHMhb3E63i8QEyRY2YdLSW83bexpu8CA2wp7bT2KL6iTCie53VDUoefG",
  "key35": "3ZxwCMNqG9J8KYSmbbcenMqFCHshFWhkDrzNMgx2rU6NBGKNkHr8bxi7aAf5xijuEVre28A2yzaEu5RqtHbqdEgm",
  "key36": "2vbNKnQGYf7ZbshVvJcGaGWHg554xBF3PJdL226YxrJG9BrhhNemVnTJ9hBoA2TSB1VemvPWmMyD3bT32AMpuBCZ",
  "key37": "4cPtDPxHEHSLB6stVJVSNdAzQjTW9yJWx2JMTd5TmuzY1X4pwEddNtAAHwU99zqaEkZvPw1BrMiDrRGNVYG3gow",
  "key38": "21ZKjuZGpMWhVX2Nb4kDDWnK2xjf1UrNStg8s1My6Tr4JBNkqpr6umi63TXjHckPHXjw9vtdsWCGVfkWVM9umRs9",
  "key39": "23RBipWsMtvJX3Z33VkhLMDXg2Q89nXnigdnMjHehLpsWuG7kYds7Ffn54Gsrdz2WqKDzy7VqmFxN9UCZHhFTtgn",
  "key40": "QBEjhusVppTLf1Pwk7CnQxWRg9ACzm3PRiRLKkEnx9dXzG7qzMBTELozKp3rDjGsDe5kHNFc5H167e1qasgdKjC",
  "key41": "1g25dWw6c8r8cweEdgbwgWzTorNVtKvRbGTdR8yunocGBXHAqSJLTVkxTvdHtKcBaMapSy1DJoMCKTs4oPQVgUt"
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
