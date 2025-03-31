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
    "25SjmaG6RniCyfKpePxmDWWqkkQMbmM84ycBv2a6r1DfiVY9mqt5sW4EVwRaYC6KiqZjXCBgz1fBBH7kMTfhmcRj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52JLqcqbYjxf6R7tg27D47ustCUE4zMPY9twmytmsMesR45evPWt8FbAC3RM8XNU31w3LWWhNVioTkc242cmFBtx",
  "key1": "4DNfWWvsTdqUppXbsLfxQKBs1gfK63c7VFCEhsahppdA5YxLG1dKv82tDAg8gK1ZUYjjxfMnbGa1n8GabN8FNSYd",
  "key2": "3eA2ibGUAH6dRCukxepsH1KHv82kqEgU2YYccCAziYgsAxRAnmUnqEQsSbWMWeA8kJyrLWzViMW3YCo9XRJknN9d",
  "key3": "4okMQu5YpGdMasYwnwN4j8ga8yFAKK2FznSxK8ZpQZU4yLG7vGTSNPwgLobuKCMmcsbzXwojvohpaD9Xqyxb6J5p",
  "key4": "67fVQsG6MLgroRLbSaLyCjk9a8is318hFQyWQNxwPb9w3zQQ6M3P7X8cA9gpBJY27mnuofcDZ3JJuH7mnwPPhJDR",
  "key5": "5xCyZZNSfRiCv6E4B7Dr5yv6759gfrQ1tyBwU1o7Njn6cKHgBegFpoPF8N26LtHXrgqEc6RhWZDKyET3NqMXZs3D",
  "key6": "2HVmvAH2fxRiCi1ZaUnMfCANcVVYqYLcdHAcNTksA7gXELU1m4h3z2KQLFs3Ab33uXetYemvL4wR4fM4x7kbVobA",
  "key7": "24hLSTYxd4UY5b92XaWPtAhrzhkiSdBPinf57mBALwpqEfWt49YkA2FybyLnbuS8nEWUCELGpkcv5gVoDkiviPuF",
  "key8": "4EGgPZA2QrucrBTy1uW9TNnZHFCfbX2FvEV7T1NVeRxw5fVnRWg8qjNbv7YfKTCoqfiuTYq9xFi1KZXAtwnCMFkZ",
  "key9": "5urDUfjcLTqpqNpYYfP3kCsAcS368dcUNeWmLyhtW8wS115usPUZGHD8ZK316xv522o75myAQYdtQ3VV9ou1p4yc",
  "key10": "5q7HzybvM7GUv8F55WqV1yKYmamdCkcZ2qfcYRhiG8NuJoDujXQpU4CQgGtDu6LyhwPCKLmSqP5wva6Yc3xXXht3",
  "key11": "2Tm8HcEfy2YUQQWjjF9RJiJb44rb9hHrXgzbf8keWNsVfoDaHM1WznTd8wMCH2iw3RAR163Kj2VRggR7hDyAeQQ6",
  "key12": "3y1Hwv66uqQqd6moGArJ9AzEANCGx2nHBfPLVFuAhh14ZaHMpaFTqZNA7HvoTCv1R1ECLhCxDytrN5cj5ATePhK2",
  "key13": "5uG1zkD7jYjwia4kwfTrjZzmDrL5SjMqcALdzZUgEnPCEFyRdfqDUzaAzuJAUCY57D8Ty91VUaYwt7EgMrboyD8z",
  "key14": "2vayv41nir1AeurL7cA3P1v1ZvP1t45aqPRpZvvuVXoDVv3CVk68qQWBhHUnQSU5Wy4VoHUGc9wNvYqecs2ns6Xz",
  "key15": "2qUFHSrb9G4ST9a2VdzEmsKh442DT9BXqp9ZXSCQsmttAB3NVw1AMLzpekN4sC3qfdNEK23dt5femZ2hrkHLXQZk",
  "key16": "5eWLTu7Ye34htTxAFfvCESfohRMht5DCHMXJxZ2tmb8hDSo9cMwW2QMB9mQweeQLVzs6LksWzGhAXp5zm1G4YiNx",
  "key17": "43bvsbXxSTX6YACuqssWtvTRopxgmuRG3ztwXWjjA5YoSSc17owJ7x9TAtzNLAsN5e4WdorRiYUS9bxP2jDXEjDh",
  "key18": "3cWx2tJTj7HnAS6xvQFq28HdvrzatB8jG6JEkTJn842hjC8tuobYVszTySjR58gmCFAQz2wwUbK2jxWjGPhgbehS",
  "key19": "5u2rEoBoQFYoN5A14Lj5cPSj63QShuTaJTkhqmu9EBuJ9Ps6LfDBgJfi6qSzjt5MUjeBSBmgHJD7Fv3yXLDk4sjM",
  "key20": "23YWbn2aHbRBNRhVsVxWySZaF9R96BwyYaSNwp3Zqv7Cnp7tqGvdvpv9Bv47D9nvoY9GothKybFyLPNeWvrB2jRx",
  "key21": "2VaaDkSYMtT6L8DZFwCY84NArRxfg1fxj1x769v4xTJEgWpdDGyyrcpwoRcoxy4MjZhU12LTejXLJQttxRcK93XS",
  "key22": "2BCnmid4CiTdg8cL65WibwQ4iWkqY2gTqkKV7iSk3x3AZLw5bBaibxRz8EoWeFPDQm8RboMZQ1jdMokpWqCTR9u4",
  "key23": "5pSKtADu9TTjxswbRnFbwdaCLZwmf4uyV9dsk9vJ2X4ADztBEcK2RXwcig2wKvRRs3UYph23h1jHLcrHrbWJsR2U",
  "key24": "2YKbPDx4Car95srqW6fgXuz5gBWMoTh3trcPnDE8FBMxHC3ARpGs7FY81wjnUbVbBDsv2qTnz6AwTbJz3x95LrH3",
  "key25": "4FZSkLCmSGJz3wnSJMoLSg3yirpgz1wexnEx54JTzGs3VHB7hqunHS543HRnk4uVdv28p3kiJX6ZVK74W7nfyRoJ",
  "key26": "5H8SsE5tb38Wuq5oPuKk7gCE7mLS38s5Q26xraEgS2iGVjH851F6Hy8WnTf214gRi4sLsXBe4FftpgHehHTAMma4",
  "key27": "5Z53Gaag7rseK3HNYxocFfrigbsADCxvqGhyMcv58t7AxtmjLCzKHQq2Yj2294pEquuexzDQJXr1awiPpNJUZRQN",
  "key28": "4BkjFPPbx7HfWZ4uw55RdwdcpcNfXQJMPEDwAgVvE1ozzYd3KrFC6UmnRPySFV85Fv5zf1Zq44HNk9HyG3Y4uzHD",
  "key29": "4p6tL1o2CWtTBh7EPpnBfRHaau7dd7X4Y7pebMFSLGYtnj9kajWJ7XFSKgVL78Gk1mGmQwQ5us89VZPU9GUq5CEW",
  "key30": "3ut1EUbfpkLFHr8y7EZAutQ8VLavVhRi76NQXFUkJ2seGiTPZqTybq44CZRRBGRcaLL5SLsniuCEjh8M52Bn5RLY",
  "key31": "2aBt2hDAcFkQU58hVQVXThjxvgXKK5dLATdqXa6oR8B1staUNmTUVDCq9uiVYZ2vguYywq5B9qZcVvpJj3SsvRaZ",
  "key32": "4f4H4rp9ekFkDcyKr9MnrqXAdstpNiyDMkma174mTSb7pAG7qV7DdfKgNJ23Fh4WVaiP96MpYJDXpvEid2ra5ta",
  "key33": "5pDW7XPqKUpe82P13x59CebDxdxCcq3JjjdUJzKZQYM8WKVMkix5PTLGAJbC6bDfsktnw45hykVwbK3k8kzG2Fcn"
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
