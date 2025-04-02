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
    "4NLoqxUv7gwDHCx3oczS3ygbHm8aTmnEYNcwt3dzNugdqQqDG1wPyDPHBnuAyxkwgVfEZpBCLahyKYxMMBbySLn1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XjmiqdHxWY7tHB4ihEPKvWEdRXTJSpJBVdNfnkxqsewQuYAYqbHcBNpYy32o1nN2vTDtnzGMhBrRky29nuPb23S",
  "key1": "aCbb3qqQuYFt2GGjkNm2qkx9DH4Xs4uPaNZfkCMAvF5ihSmtxtg6ZKexThJxKVxxMiQvaSpskpznA8hk4mXfbDd",
  "key2": "2qpp74eSpMgYb1jvYTZooQ4W8GVWR5DExmVAuscRJaN8zZtfk7ebKwExtkKsnrVGTEau1fpkBUyZsvp2S3m5HZPS",
  "key3": "4BsK9L7pEfMaYSHcrGXtSSiUJUttVASSyWaPPBrV1HZVZwsEYLtDjwkK5nKTDgWbrovfKz4jCgSG8j7rCiQXdNKe",
  "key4": "3A7vkhdpR4jUQ15qbPyhH2QoQxeoZMRNGwDT73zPcg5ZRVupwwYwADQK85U4JzusQYiTcDpWcw4RbSHYjweJb7w7",
  "key5": "4ne1ZZBAN9PnsLFA3PYNJ6XWZTLawCrj3JQVrGRLWuKaG2KhLKVSSa93UCFEmdEAzJXpDu41GK1fDyV9DXzQAuAn",
  "key6": "4b3rBheuU9ehXUAP1ZLshn1qnh3UFFMXHCp7N5Zk2g42ZA5Ayjb2DamhhCayZhtN1LGrRpKwEirrRKS8PYnWeGcv",
  "key7": "36Z2cBWR6Tyt2tREtRxVBca5rBASMMS6kLnjr66zDXd4TfNV24DVtpnJtb5YFuEFdA19ZX99v57uDh5uXVezC7qv",
  "key8": "AC4d2iEmNEnWwNkWG2SiquuyaUapMnULNSceDCtTdMFBh72n35t7S7JCE2hHPRoFFgMgPBw7kekhBy6eU5ERx1e",
  "key9": "5YfbfHZrKEsPrjwhPwUACTizkFZxpL1PwMHRq8MxZVD9yNGRzEQQX2sixyZWAfUEC5o5YJferr1kkissxm62X2vA",
  "key10": "5WFtMDExgaC9JwyAjTeLbTqv5dWz1uGtdUPiNTS7DXo7rDqNzEirGhUbCwetHqZ1D795SoPkscQzQTN1gx31jtFZ",
  "key11": "5qXeNzhVQ1yU51FcjunXQ2wz9TM1ZLBcos3AMATBAYZ2nDqQPfQzP7TE9sNvJf1XLa4y7LcW3ERtvVwtnRCTtVsA",
  "key12": "3WyTc6x1UtpHZMxHcygVXTo8QckGs71y1e8f18esoARMr1yRwgk7BdUDtsCYHmEw875baBibvYQvCz4Cp6TAGXfq",
  "key13": "5mY57vxybspBWK1ox6NgsC5EVLpsun7ybU8WmYkoJ9NfumhqxXLuszZ8WRDheTjpRzZDUXKQ5yafpSa8qfw32aMw",
  "key14": "2K3UTo7xyhGsmbyH5cGDkwppWqUuwUWcws3TkHJ5Kz7EKXtCcbb7pMWtpEaj9yjVnzH3th3JM7PMqXqhTH6cABMx",
  "key15": "5bx1JQb9WYZJX8vJupJAsbC9o7We7xNFNd6omUTsx5uYP46fxL7er6ZweDuCwvWdxSAr4WaDRdpGsYvyA98eGjkW",
  "key16": "4PXPQhMF6dWSYmFBYmKJrCHmX3Un8UjNNXAdwiJC3M3CucjBAMNLM8tcnipzXsr5owbUJ1PMP4fDjc9B64oMmNXG",
  "key17": "61EiZmsjbwYKwBgGG9rqEHMakt6enqh9mWJkimPFpmYCUGDB2yTUcp5eGF6ZqkdriCBixSD73JCudW6fTzo635MD",
  "key18": "45f9v5HDZZF7HdbdK713vA6bkrxJQAYdpEurAY2TAnVTF4xsV1duC9FCvxnFDuDpEiz3erDzggubiGBg1ABHXBUW",
  "key19": "3Fi5364w1KytXW3ZwWLP1gpNd8nHzPvDj1bgaiaVva7Cpfv8HNs3RwRSSVeL6cF3u5oXRxs1U3XJaWMW76L1PoC4",
  "key20": "5nNtao83SrL5UU3ZyXWdsUTPHMuXa3SnFtgNWWfZXw6PhKeWfYFcmkQyLnfVB1YciWSvsT7AcLLgv23ZUdFbxN2E",
  "key21": "3XhBJkEY9wZ1dNYb8BJFHBXqLpjz7pMUPyvhyhedr9hG4ewYTLgHUX4XNqAZBFWJaC6TgaxGffMw45aJ2dqYceCQ",
  "key22": "35SJ7rXXQbaDwSB9e1LUxSXy38yrUfRGMrnKtYJ8h8oJKp4kgU9UmAZzWdaUkHLY3FctxyYnNb1aQN1kGZTpQnGu",
  "key23": "2HKi5RSvzCC5mkpMLC1jPkugm8DhaVTCU1QF5vK3nc2VW3FMDMx87PgCyiteMXWgds6yhYBSVc4aeFsSiwRWru2X",
  "key24": "62EFPKe3VcQFw2d7gWRTnYNWeNvMKE3CDgmTLdqdNoVcTKHgzfUdNyjWPQ4WtE8pUgfDfGdAVRuZWR5Qge8bRKu1",
  "key25": "4yMJKGNKDhzZXtXTsxv3qMZLq565r7mBJ1uEQuFtqudV6c9x9Nc7LbRupNXHhCYHSk2AKrrZGp6GkkmxgBjWT9aK",
  "key26": "K9KLBwdt89u15etit4rjqEUtzT1a4V7bDGM1dDbsiJaZMsp5tMie5bQcT9S8qqRMaVf2pCM4Z6UkePnDWu5XzgA",
  "key27": "24Jcs21pQWkyQynhFewuriy2huupS2mtDxNwvC7SdMFyUUofvh6FmTqPmX7q2fcNATPz6K1aZ7bgXV9Lpu3YN6W2",
  "key28": "jAqNZSBkt7i6aothM7ULhb9ZC8QknP3t9gmSgenGM8eczZ7ma8U8P4zZhmo1nppnjDRhpjQPE8WtsvA2eT5qa5F",
  "key29": "4vEbHuTH6EXX1CUphpw1ocGJtJ5ZWTfbo48kbj4h9q89fsUeDMzp2CqHhcAx8ZjfigvSWqCsi8YFA4egRHWxANMe",
  "key30": "21Kt5XXgpJVhSfGos7QqMYVqvpXCeThiYAn9aCupHzTX7HQekuERPcbjanF8RfizH9jLBNFAvFXySCDrgVDgMenk",
  "key31": "xAVAQjixyNXa4uhxbWNJUkYZMVyuVxg97DxwDcC3EYJMQTuqQ1AynRrM9fCD5o3a397Y8NbNGFvLfqC47n78Wa3",
  "key32": "61nzx1F9KMFZgAvGeAkG2WxwfKQjTciSU1xqhuHwAnUtBe8FkV6f9aBobddnMQX39MhqmGL8bx3KX7Tot7BnrYXr",
  "key33": "2dggwKkPtsqVBAwyZcx8f48w9nhZXb24U5vEsfkD9kcJdaQb7it4sci7HujbY58uUc26BZfFNr5qApAieMZNMkfE",
  "key34": "6SdgmDDVLen94yrgdUuwzv937Ve3eXyqFZea4GLNn1AoRxJ5YteRUKPYBHfQ6TLkqnTD4s4X7vrvekvQxM5JkaY",
  "key35": "2b8yT7eVSZevfM7BkV9P9kx4WxzXb2Ni7tmVWCGZE6GrU9g3GGfgac8zsZpZ6i5NnytfeZBAvhyMQFbEPR9BrzEp",
  "key36": "64DU31h5NTsVC97Jjozi7ATe1uDwgXJgiMqCnD5a3yMMMrmGpDQJj5aviYdXQdkWXi4vTvkipNGST36ZESTHSoio",
  "key37": "4qh9ynbqdMYdedqfPv4CRCMhLBeXM92nY68pKZM62KvsveWB1koRgY1xYP5SpB9iPMXQrmSM9cq6nDz3E37DFMdK",
  "key38": "Af1qDB7kVE8okt7uL1cXWv7wJwiKewjwcnCPVGUoDA4nRyVbGMbYBFRxQNpCBrXLuGL3hBhesA57xejKS6ADvcs",
  "key39": "5w9WFhM1tXFdWUWhhSmS4BFKAbQBqjjo1di8UjAcotYFKDTYWJwokMN1UTiuyKfvsHV6JZNaBJ9ZwD7DPGdnQuKw",
  "key40": "2YGjWrise6Nj7is3Ej548Qw6GaNPjR9CNHxyTeWcKknew6JCLrtYQai27Y1M4SzYKGWJwhpEUh8mBckhJ5znibXr",
  "key41": "2pUf7UTEJJLpCMcmUuZfwGaXhGjEqaXQo9CVN954c4gguswn8p45WJ5pU1bK7zCECAYVDM4a76X2qqtYAPgXJRjm",
  "key42": "7eEZFWMwL8e6gzVAFgvivgerxyDrUEKaeJrHu9S9dW7Cvgoieiv1BgXUo19QmLFqgBWJsnQavcCQWb72iQoNXJe",
  "key43": "3hjxsViLVibzpG4a812bpnjEXzskHaB9zGki2V4ZJtCzwRrhL4vDU56sonEPjdV5pbFJWQRp7WPDmgxYiNUfV6jU"
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
