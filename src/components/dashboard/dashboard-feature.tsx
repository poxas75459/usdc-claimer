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
    "3Nb791S3SRKGBGGkVvtz89urYsxHYzTq59ZKqhAXc4vJkBb41mTimM5PtRY9a6MFH1bVKQeDxN22NdyHyx4Myfgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41tNM5iDswQHPq8Kcrni9MsFumqJnXEFdhrgfKWL3rGQagcokBtVYbU1e2UeFncdY65uqZjsoeLFhaMZbNU38RRv",
  "key1": "5ugjeuEajN2RKVpQdb6sWxkou9Kno1maWvNzqxe2xjXa3AAZRZbX2B3LJp6EiomLMW1pspLiMExgaibsreCDea5A",
  "key2": "MFCK1jphAiuiAd673jPPN8GHum6coPiX6CnZvuuuU9w8J6d4vPe8fx7K21Pzkat33BeAxooithB7Nbt9GvXtg7H",
  "key3": "5jqNHvDE9qvezxXpKbLDLmFQi317UwXbetBPzpcsLCunsJjzzNRNY88nUVgyBPqSCMMbaSXwUr5TcDmn1BPQRc4p",
  "key4": "535SqnE81SvpmrzQZecgLib5LHDqJHzRMA48K9cGpWc2juSq3vViwMa5DiPb4NXNSRQXyQaRAWt4SeZ6diM1gvkz",
  "key5": "59an2HnUkuXTmutf5ekKr7PWKXSFaxap6yi95byXbiQQQBauA7Xa3T8Tp6JyrY5XqK4pwR3oDjgHM5g6Frq7uKNL",
  "key6": "KZh3zKcY8aCE85F75Ku2VqvnHRDkhzWHjQ4NNZzBdih7Xnf9VXBR2UquPVkoY75smXdUmw93VQDM4TKkEp3ieQG",
  "key7": "3mWx7FB7s1rCR1PTScQ9m161eRTYiUcqrrPbrgn7eCYQygvCk3S7hkqzPWrtyDMrbBzynsJmABSq2VFMZN9kG4CV",
  "key8": "588SnRJpXuJ973wh5B6nwyQdQZ2pgpcnamEXGuMLdfzVeSaExELvmExe3YXFVeBqpiiJsak4MUQhZLi7AjS5DkbL",
  "key9": "gpadADWYzaZyH4DBRRcBDSdZN6sB3779vo8WN85baXpgggHUiQNWXDDH8Za4ZD9JoJfAS15d5XPCXHhuTXRWcab",
  "key10": "2bsjerk9fSv1FFLXv9fLfw8nvEq7HxSGotdnXxJQU6DioTFm73nrQwghAtAcBttCR5PB81YHRi9RZHvQyYgBakjT",
  "key11": "3mHqwGWi8Lob1iSt2SeDW62XPtY4sKG2QxYVkYLqrrz8j5K8iF3YcAd9yJ2qpx77yxFJs1T2uLFXCwQP9UySUudu",
  "key12": "5n41p4KytSKcwkjb7WpqprpBygR769ZRUgKCHhPRqkwyNmXQ6t912XXt2Zz9Q2u9QExac9dnbAshhfFapzoXz6Nk",
  "key13": "2Fs74gE9WZ6BxjGfHxGghfsDK4WSKhXchnaZKvbBtorQdq3iKBsL2s6DpJwaQ9yTX9ZggTQhFVdE7AftpFkP8nWH",
  "key14": "2FAab7UCG4mipjr4ADEmBGHbho8Dpvfbi1u7TyhdoFWqm189jXqjzKnFzW9K4eXotmGfxqJ1Zf8oMLWSGDBfNvyJ",
  "key15": "3eF12hLJmC95gkdUjJ9tcfAZkCJDm8oTyeLZgLWQvWyp7LjoKto7aU56sbqjzZNCmF51boQTpBSj1DP8KLymd5p7",
  "key16": "4cBch98CXL9CrRewkbxhme2DadnumcM68a1TR6iJb7xo4TZW6GUByRd3v8BNd8oX5uCStBYwwSoFX8AGVq5rDpdN",
  "key17": "4E4NixocpfZhzWUaooAfpgUuvQizddkNqab4KodyNBH6vQWsuu4gM9BvL6bixHQao7Dyejqqg7PHLtTziQZWjDU7",
  "key18": "4kWS6yBcvgcckUxHe3g73n17LKimLZ27VTqAp3VuonC2BCn1VwSVfUbJUqQbE6JYf4mupFG99Yp1oqudcyVroH3z",
  "key19": "27WiKSrGwcixkometdbkN2L4UZ8hqeRV237NmfXpD5tZ9dvAjRJmMwvR221daCp9Q5xRWm5nBBNJJJUAuo3nWgFU",
  "key20": "tL62y8GS8be7CMhQd9puKtw2HvutHKcCuGUPaFAj3x2vNtUMcw5923tNrAZbjkXqS9vMzuTA5ktK7SrxQRZmac7",
  "key21": "5qYm7sW8EkCSm8SbCnpdg5J7oqHSquwqnHuKoCxM7EXrZaKd8pDYezpR9FLhSAoJDTksuBdkimn29oaT6vRcbmr5",
  "key22": "4fe1PbbR2MdnP9JREDMg4izNf7en39GWjnYPrN4hnNCr52cdKFJ42Bqd3WAHvpbeCT8joZcL9CARon1TRZJ5JTvi",
  "key23": "3z4sspUverhf5UPim9E8eNHgCHhBtmZ4xBpmueV8w8NoEKVo5UR5BEfdQbp1CjHTeK1H4ovwGCXCaV2TL2FXUzus",
  "key24": "2RKf4aY3FPzRWJwhfNVBNKkEyuPKtYXxkr7EprBfFMEh8tYB8fqX1jrkE1PuHGummiYLo7E96wByr75ejt1kpQt8",
  "key25": "3xgyhT7Qz1QPXqzrafKaBG83bfiPGSH849szafDSjpwGaUNTHuxC9yLXMJumQsTqaC6RCh1j9goSRnR341gApkmF",
  "key26": "2rLrbi1HcvFMvD1zAo1Np5jngKBywAzozxG1PdxSHSm6hmxPEE2RRL31QU1TPnRLoK2LPF9zCZ7YSJqBS2uPzENY",
  "key27": "uMhk89JuwYMCRVk2S7iCk55gm9DWkVnjJkM55vTi7XXKbyGQaPzDR4ZYgFnYazusKaCAHMygsT66m13mKk9eaCJ",
  "key28": "4wxLEtNWV2tNsEvY6EJm1T5ZchTnaiZZxez24fNYCjeM7dfrjT1XG53uNEWjbc6RpLCRrqm5wrJ1DcABbVNRC94c",
  "key29": "2FhhEVSFma7XeSsGqWMPkpdXQdy6dMitdft8twNRzYqQuzBvsXSb1zZffdopi4t9siUK8JmjTN2TCZof7mWeLHBw",
  "key30": "P9o4LCtTgMZBzKKtRjiGQuTEwRpZqWwP1JWqzXZGznb5hmMVcixGirNWDqZiDyUvgPe5ZPFmx26PKPB7zfGbqfo",
  "key31": "2P4fYV4nFnrT4QnxaUY8ewxjALAfayhcJ9nHeycMVuNbBph36t9FPnmTTFV6sLHfGsRqbymNSxxhR7NHP6R5BmnV",
  "key32": "662BDx97GD3d6hoXWNc9jzQ92eNWWgXZdigEVAMBE9vNQ4abYBCUqmiSUdgM5ii9cZUcyGzTGBR8n9fcGW3KGxrP",
  "key33": "5gJaiCcc4fuFyDay3BeqAufmp7UZhwdM3AYBT2vqDawJj6iK1pjmrry8eJfSUwoVioUaLdmEWpRxVULpPuZvxSuf",
  "key34": "47N6KpmyUYPodqLj7P7uxqpiDHTHoeEAyUPGXVygVzKaQSR6oXuKQ8QWbcbSVBa8iUBDkNSdJYU3A4VEUmAqdEz3",
  "key35": "2NH5XyyPvjAfVFTR78RLAAbgRYeu3Fri1GwRNzAJtd5BNee5MDVreWTept2Dk2k78TevKEs8bSaafikNQ61rxFWW",
  "key36": "3LtUoDhsRtuu3vAs8WcNKkpZrn4RRVoEnxctf64ufXCgmig96NdtNnKSNjVM1HhnJS6toysx775yfEDUV6qYycZR",
  "key37": "4NZ2LTfzEoL5PTQ6rZof1gdrVcez7ueymutw4Pm3P5gmyHvVB53URfwP3zHfQRAL8FbEdTtt4mLHgNQhXkA9hkqs",
  "key38": "3KYxvZ44y92XWtqD6iEZYbL2XVUHj9MtkofRrvNtrx1154V4G1QYgzv7mXQ71oVrqh3ApKU7vHYLfC6Q7NSxBF4X",
  "key39": "2tQ126XfAuSSHzfCHskTaEEbEgnUufYYiYBkSYXwpctMG5LBfUmB6UXpu1ZB4W2xTt4jDHaU53K8fTymaAkBc3ZW"
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
