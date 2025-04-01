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
    "25Z9vTYDJVdmCcUgkHH3SMK5aJhqjaLKNgiSHkEC5ZBtW1sPmajL2zKAUc3AGtfPKBhEafSo4A8m1wxzT9zT8z8u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yNCzHWFRFxZVbyBeSsiW1RfGN6iVNi1GmmSP3ZH3ZxWzUwoHWDucN9CP8xXbd8WuwHwnyAurrh8njHTatUkTfvL",
  "key1": "4yT33x8Vf8Cp8sePuwquypPAMYJBoBqUa9AYzQNuJ733S9AVfL3Ejjv3WS5PYQUQp1afpUri6JugzY8dLGE5YAB4",
  "key2": "61ZmNkDPxdAx1TZdcAJpjaGYXL1PQs6sZhfThDSqunzdDykCQawX4THSJPC22DjT1zj1oxWJcudL2NcTfBCmLHLj",
  "key3": "65R4Bu6wgYnhans4XUTonG881m9L91y2j6LLBYwwN41vNtkaie5o4BUoj1MhQnfkdrcBZhnsFWEaAFDCaapt4iMv",
  "key4": "3EcuaECraBaEprLuWqpaiLdgrJax23buHy8kedFvf3VTRHS2v7xQV5rMFCSbBVXPBebq4muKS69be9XrVUXcP6Se",
  "key5": "2hLGNDhH1auV3mz8FQ98aike28M5FWpm3c3UBFGGkJh2jRKb1g2b6tYheA4MStF5rM2JaUEUmdGnDaNw4jX7PUYS",
  "key6": "i6k1CDDEGGCUvirCPNodA6ZLC1kWiKqkKR5FcN72tNEE3EP1UMiaE5GaL8b5nKBpXRwXaU51LtJvN5b48TYFp9G",
  "key7": "65Fh19QGMCCFwY2LaN4PYboq8zY6s9AozuLhCMdQsN4vNyew9haNo5KJHFhhwn5su5JLp3v6hNKY29nW6LkMoEwr",
  "key8": "47XuC98PvwxTPHK4B4jiokV68JjFEywP3ehPvQQeXjQ4vqcSuahPcA9pb6hgiw4jZSXrhPRivdAZvB5qohZgyGY5",
  "key9": "3kVNp8FGTZPVhSxZ72E4FdtXpqhZybGrZYkWwUHrP2ooeDUHpjWZ7Er2uFaNNckrGgMnwMTVXYgoNUvAtV7a6taF",
  "key10": "fSNDjfhLUF8AKwW8Gj5jA9M18k7ELZ2Np4Yp53atDPyVCvNMmYmb1EaxR5Su9FEv6npzYzpRGgvpHaQkSu6aHrP",
  "key11": "31yevPW2Tqf9zjFjt6ifUaKkSzpyRLGQYgRH14QsJ7xqNGSJraMLZm1rdwoLnGbqARb67mQnd6VqRNu7mNFRhK5d",
  "key12": "2bQTx1N4H3qHoiK6ePyWy9HfwBJ8WaCjzThH2QjpnPThHo3f7pooGzrwtvRe3DVxm7f3KZEkD86pQxfHZB2Zy1cU",
  "key13": "3tAjaA12gavxPC2V9w9G7PmRBaWD6fDR2iMm9hmFGhbsQeQxsQQw6t8YmJH9g48FiR7xoDB3aMJVRg6SJnNEShj9",
  "key14": "5PskP9CXofeCutAcjn1wY4NFT3e85scnxd7JXHrgKjdJsxPWg4ePn83USwLeVERQNkm8o3vR1QrqgcAzmWU1Sszy",
  "key15": "5w8kdYVgPYmwjjQfR5y2PxNoHsndEVwqFxHscrRNWGzjBfxvfVAMgoFWYBTAyZdvdFQEntEXFF8phDfyvmfhMgkT",
  "key16": "3wbbsBLm4d6NfVWniTMNew2B32GMSU22re9x4CMTzx7ttvLwmMPm3NvHrc5XsGjp7JqkUa2jtCHofqFnTCA3SHjZ",
  "key17": "2tVwVoobE5GwGfueuYeJkkxNkSp8UXgmPjADjWFoZLoxD7yWqczxqwrr28LXdF8Dxdrq6C7McnSTmEPbdtEb3NVG",
  "key18": "23qzewissC5mLu2NEaAczh6pKkD2oj98Lfia5NqGGmr1ERq3rMUqCUzifaqwuJCzvacuBJ7k5hc4EtynWfeASmsT",
  "key19": "oXCnhKXhnnPyZzMfDpo5wByHdAnwrygHMvJstAzpkJpanK6i7gQvQd5mdVXu5FVkktXYXEj6nUUGJnWhZ8CB7VP",
  "key20": "2ddXbebPXW3XudpXugyxEcATwX9WCkeJV53U4wAEX5iH2qwwGSxi7RB9nRu6QAon33z4KecsPFUKbaoWaCbkZfVJ",
  "key21": "24EAPfp13Pn1HG3qRu7Mod5cJsH8AnbsUDf75e8xhZtqTXvMyxiBFzHrew9TjAj1KiFmRGUoGE9ktRMghyGKXr84",
  "key22": "vatz3QT3g86mcuUpjXubqkpxmvKLSXt8P6ynZL74sungHf5WJ1bgjUPHNsheV7CNR92Y2kzzvP723o8TDBBNCDx",
  "key23": "2fC5Ta1sYcZfge9gN1S1QRihfjuQF9CU4rm2Rjqbmy2QzBwpQeRTcMTeBSrz17XFmouhURNeErj5SkBU3dJ1vkYX",
  "key24": "24T3ueBwU7T6CMtRvFYr6cUzCEDiS1AGyfCinC6KumkQYs944S3pPi3W3WfThr1WquusQTSAG9nKYJ3DEEDWpL2c",
  "key25": "4PxFYEjiXVwVr9ZBD4mHMrhRKzhargpUGYhu99PAzwftFa16cv2GsihX4AYEQUaGhYS6hop68Z9MfwBaK7spJLs3",
  "key26": "2v1asgL237YuuUtMQnELJLnzdDMcrVUHrCZRg8eXgPzWa6EGL7xFpjWyBJLsocE4vbgAH364LGx4KieELATg4ozk",
  "key27": "4fEHdttG6UnA45is3a8H2Vh39nS1kuEH1joJ6YJWehVGfoo8Yk3hJa8qLtStd9Cew3NzLf6UKNtAZmKC4xGxrhM9",
  "key28": "pTd9PePghWbHsRap15oY7JKozgaqfSQPrweU88ZzQvnE67nRiShdwUd6hETeJ38fkEiwvjg32Es8Wxy2ZVaziTh",
  "key29": "4gbRJMvqm6UYpwYCyYqmfogu7gQcHa67xUyh7hvJDq9K4CXKvfTdF7LUkX8moorGcmZyDxiG9iJ3RDvEiCZiEXrg",
  "key30": "1Sc9D6zrJdk4kRR8hHvvsVHPS5Se1swLbpJ5Dje7qakKnsb6Xfjguh7L7RsNb1cUZU21vvhBqyWGZGEzyDz23pf",
  "key31": "xsdE8bx4GczBkbckghAuTe6tDkBfZcV2c5nrZkCCYeguPmdetaMoRE16AY4Hrr9e1UHnZrqaN4F5bN1SRkQc7D9",
  "key32": "hKa1rq3zFnRduuGWgCBgHXwNqrgs9xqQ6gWHH1VAtofeQD51MAxzYwn5Hfw4jnFSrzM7wpYmwDAq2Dh6jfQLSGH",
  "key33": "5FZkGXneWJjmSYdGKrtPkYe8fDqs1LcRk3ro3sg66PJEs2xTQ2RN368u4uipe6TXhkQfZPnFHJtmkuMigEza3kxT",
  "key34": "2bKza4FSb692LHQDKc5QX6Tukep98VzVgZfGv6cYbz1aVBGSX3HucJN7FQ5iL4DYMyPJuVKvvvX4PVUBH3KvVAa6",
  "key35": "2iYxHoK28seFW57Ek6CbrEmQ6oY8Eq6xGpAPvqAws5DDRpZnYnKXTYQjkM6w8NekuDbQLjwFcXuSRwmsKKn5Aj8N",
  "key36": "4fAnNFiHuibvupHGh7ifwtejJwGM4SXot17b9X6XwkrLVK1dCbsQPGUJvp2RxU5GRec85vEcta6HUhdMd6vcSg8V",
  "key37": "3VwwwRTPtbftXxFnt4kVwUn3RoZyWEZUCknvAA1C56qfaFefbXHr3hZiFGiuxi6ggybod8xGz2YFbjPUkq29uY7U",
  "key38": "4G4gFLTwHoS2RAaj7wJtDJucjdHF2iYx3h9E7vCBzr1gwF8LUd5qGBjU57EodqD8XgicwfLtq6bZfv2XN4uFXnUs"
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
