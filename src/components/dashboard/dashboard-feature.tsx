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
    "4GGpZ9dKVmLGMazrUfQQtVLo5sKCP4ngXVN92D393EZKCF192Yx1sx7JKUMo7zoipZueYoViAifqL5J3D5cSoT3T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zWzSBfsztjmRYMGtpJh4GhFuB9oe4TpPPznFG8TixcKtXz5PKntVef9RQSJHCEwCHBSVLLomT7U9EwbLrNFPUYi",
  "key1": "43LLysrNSkq2aZdtT89TgSCzq8AoXK9HwZ6zm8AXb7WjGDeereSRHAaFZ2ksSyBjf516iC2vbHz1C5KG5QS4vt5c",
  "key2": "5T2zAZpH1G1DLPam7TNjVoD8sQBWmVX72x1xp9NiMwRjie1G9mzH2FRrgPKmjtFzW64DCxWpxtq9nyn4wGzUuGVh",
  "key3": "38uzMNesY1u9m12mgExXFn7DtHvgoRUVUEN2YVJwEywd8k7T9vSm9bR4QK2usK17fbqLRhEE7tHNRKkRzw15UYwx",
  "key4": "5MXT2ri5p2Eg3wiPv2yxrxVyMom2kTf6gckSUzYLDJDPCYyFTjiQijQzC1UKxvTQ7AgiHxPuYrHPpV89vVxpEqeW",
  "key5": "4vge16YgnzBaLpi471tJgWTaNgAyqVgo4LfXPLnRhijmbzRXVLxbKAPrHTGKzFnEdMP6WtKSKoaAFD8w3vs7pCFT",
  "key6": "55miUVATTFN3S2mcwxiKvsd4Ka219VxDy1LRzgK6TsMheZMRzfmjmpVdd66f41zc9sHPqW12pwbadrUCZwxE9z8W",
  "key7": "5fFiQTm7pya21vevvkweozsLNc4vBgrhpRTJ8fRS4XyC7pfoT3rkC7qhXbNM1GYL5aDYnZcXcXvG7GLF8MrjF4pM",
  "key8": "4SvQ69Jg6aTMSc7nyuc6jwhwrZ8GAqqu6pjiQUj9JiwxB2MozHdr6xwFvK8i5AQ7RVFfTfxFy9ua3UU6ZugD953W",
  "key9": "5dxALkcNNEKtcdq5JUXWb3mCqCX8r73V47ZkD3bhPd9rWSucBGRBJb2FTHhVVZ3bPGCXXmmd2HvSXF2J5kcfP5dP",
  "key10": "5tZXh8jHbDtpGdkYYgzcbqG4bz7sxuNFzDyST4dqaXQWYw4rUpUW2vcoyRyaSKEqo96ZCHDuVT2sX5G9mMCd8jzQ",
  "key11": "EEdVoA3cSs61UKmSMRZW8LeUg34XibqoCoGQewZNn1rRexogQLBAnVAREqm2WKinS13tQVa1YeyB4i94BQprGUN",
  "key12": "5qJkE3gXrG7nLeBYoc31oThGgzgv3nXbD8WfYyn27ZE6kseMXG2Ko4FsF2xuSdBZjLBRKGF8CFMNbXXmjcoEFXPq",
  "key13": "2RKcyinBvq5BGbAiRPakoo2HV6XGpcCCS1sc6hm565XUB2PsSgFBRv3ba1JfDjZQ4WhgziffuTbKnbnjzbLH3L8W",
  "key14": "4jYW9hSTogDqwzZZwvhndZXpZ97xNxHPZdkQmi7J5eCJRAXavytpbJki3wJxxRX7hVqRqNmy3t6jaaPdNB3hYUvG",
  "key15": "4CzLKGYFBybttczSkyUZ5p32vED1XyQQfsgLBH81dALGzhQH8hHJjJCQbDpNR2Lhm4afuCHBwFWbDhtR8pBfTysk",
  "key16": "4MyAY1it4xSLjUmyWQVppgKW2KcGmMPEiKna3vr4HqZT2g6tiL3zPce58NDsfic7A2sZL52kKnWbuNzY68XS7JCx",
  "key17": "5zAj2x2AWJx255njd53RURXAEB4JMu3U2uCxSHEioiwfDh8hjySyJuFDMXA9jpWgCAQsB6i5y4wNyMQQCgoJR1tc",
  "key18": "4tEyEVt9Q29ZgDY75HA282od59qJ6TMEeSs6nrqU9FAu2zX2i3PebdHkNLBmNkBH965WAHDmw6sjZGLirkusj1aK",
  "key19": "2Ck9gmi6XVHWaR8Vxv82MEMrVffcWN21ihRYakfKr5aMKiFuxNMLukmuBYHQGFxw7BZJJbtqRNrcxcke4Vv82488",
  "key20": "2Mz7AAQkqF5bi19CdbBCcbyrRVSCU2oNB87vK1Q3jKvw17kVR9BqzHhZ1wAhZVsqgMBMLAvAJHsmH14TUVctv7r4",
  "key21": "29zeNHthCJsTyr8riKVAVLabxi9aSSFBhwdkaWR5LhJ4saWDTy7189AKrXqS12zNR1BeKwdPyeaFnHUHzYktKfQd",
  "key22": "5ECwtmeUCkafF2iwsUXnvRQoBBUSEgBHYvRDkV1pJBrDbcKaY4fnT8BaNn2dmCJebZ3Awxk7QE72EEJDeVTpNnTd",
  "key23": "VeaqZyuwdDC2Y4SrqzdAmCJ7QJdYzqrcAecRMkcaE2CFMohJNuxFat6XsxuaCE3r4pq9myGhyfrLG7NYpq2RLwU",
  "key24": "4WWdX1Mvmg1bYJSKtJSVQsVDRvDfo3suy3sMe2UzrTvUTSCCPJhbS94RwQ6TT8uXXronnWGe1DSp83By8N4RtTHB",
  "key25": "5sxD3RQUYJ7zjnQrfsESJ24rpnh41rdX29SwTnGjurwUZAXPBgkYC9cuqAKtXGiyz92X4n7YhRhLsxzU4MuU5BsG",
  "key26": "4z6Kym9eaBxmo3eDnk3VULuUcsiQUaaySbziQ93osKhQvxRxVz1Z5AbtUZYZ41dM3d3yNUFja1ne7v7wDPk4xCPF",
  "key27": "4YbDUiE7j2HGZNGNRsBRBzWzKp2cvZesUGa7ygPZmyoRK6ZVDvDpNcjMCDPky74pPw19Ps979kU9wWMSV6rBkVZ6",
  "key28": "4JHhSfxchJF5Fxs33xCMYnMVF6w4BUwVp8fXZo3B27NygLhcUY8yqoScEVjMFd7wXjuis5XvrPSP4MgP7Lvi8DJk",
  "key29": "ahFYCDugVmTNRoNEUPjLsG6pPPWG3aPaaiJJFwinDpU9aS77hRKT91j912VWU9WF2sh4nPNYKUzvgzyqDqvURdm",
  "key30": "3mRX7WAJYWN5YEFasA89H1NNvbCjgWreU7YWkVATTs2yYhXFFdWJQdjidExEsogWRyMzAn5CHNKHvP2TADFeTz8h",
  "key31": "4mvtRcR4kmMeyMrfU5fjkLaoQuAfSi7hYZL9BPpCkXxd1VFpvQKAn7EDVfk8nEDQqjKXMwLZazNDzEpDJg5SMJYt",
  "key32": "F66M3frn58woJBtjAE9m5tE6rTqhhz7y7hJbt5pRQzCP3786biQneoqdTyCLfYdUf5bFAstjSWE3uy14ELjBvVZ",
  "key33": "r2GLnpVqtZ3GNpm6eLRovVbg4ob7j1Ya1V6qkEmT61cBiWus42gWwmSDqi72yq81q64RAiyjhRHF4oRomxTuU6m",
  "key34": "5nzPpvmjuUEjHn46bJRYbydj8W9KH27yrTgHeasrcWSNEWw4uRG7GJuvd1rmAnkUbsgUrTytTar8wAaTDUse5uz8",
  "key35": "3vDsuXgRNH6H633LU4ZRVW5476oyLxs9Ws4RTgTyg7WEAugUEo8ZW3aLeazadUh27mMCm5eCTMZS1AJucTwgowBe",
  "key36": "2REsrF51TZyJe1FvnDePZFZeoYA3BrHck7tfopDu5Z2iHEbyEEysXgVUA7S5s18eyw2YVgAaCCVMsKxUog6vugBR"
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
