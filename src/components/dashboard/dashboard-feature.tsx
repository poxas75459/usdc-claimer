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
    "4sKQVi1tHwdcdEVt6YiDEGvCPmcupWM5J4tVmPz4hV8mAd1sPBhEUzwjCgTfW3QQVX757a6TNoRopRy3srphgNkC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MJxD9RtFYFRJiRu4ncsnaDDkSLsAJsRWn4eaXCjHA5oJcJ1DNr1dbjeznKGD9MdWtVZuQcaxGZ91Syxvfw2RDgU",
  "key1": "4iiQA7yF7B9SPKaThbU36NUr9fZiqGdrM2F7t12jGjuom16mpBS39zLaWC9teaLV1dVFx9gwzfdRTnQja5WhdX9",
  "key2": "5AoKs3SCqoh1kjYGgoAT52Rc1XavDRNZDsmDJb89ZUWoDYSyCcScqGz6TgEbkRZ2YsG4rh24dtuQvFAn1SXrbgbH",
  "key3": "5wV4uibLEHtJxD4ipKzCukFPLRV52uwrVJgEo8LpSUFTqgkuPdSrm6Mcw4BmZjn5xmjG2Y4wexYS19tpL92yRwXT",
  "key4": "3tpqBu5EWmJRmdiJvW8ZnPMynmfNKSueyoceWA9wpX7kyVxxGcRL7anU9DQYEMLaL8zyvdXAP137hUKfKStngAot",
  "key5": "3okgy13MDiUQxePWUiSZkvM3x1TAnnFt9r8xaiSjYZt6BGeZr8wYNb45d47m6i523Yq9JbMCHoyoDsWJaGvbTcRp",
  "key6": "2tJ5GnZH7UB4vB74vWfB5n85R8cuPM4TvELxge4r22EDiVAoaUrWxtoAegv2uR8JsdUKHewGgjFkag9RapCiLutX",
  "key7": "4dVsJGUyb94Kr46aHmSdpuToJt3aChrpD16qjMzGwp3ExDuVWLuc6xCmxb62o9DFLLVv7J1zaCaqw3GfQEzFp83T",
  "key8": "abpaoxBmHuWx8JYb6psnXMbGJT86DCae74CAGiTkrvAQi1ZQgxhzhHK3c9i6vg7wLtNQRYVS162EBYbgLe26Eax",
  "key9": "4mWjazA1PXNDzxF7kWsXUNN1AGdfWYgert9RXRcQ4mo8jYXrnwkTKu8EuLFMeCybrJhZVExy8sBzeoo1mH5H4Tc1",
  "key10": "3N54hcFeP4sjuHy4fahryEtKJ8xpXqTR6L9nR7aicSQ83WRsbBeUWQKkituXE8t5JGamqA7a78e25U24dDr19X4h",
  "key11": "4FqxKv1JbYZD8qUMGQqMre8PAiUq18oH6x76Wi3tT2rojbsrRjPWds8YhA8Co1wNfanoHg4XUUS8TUMJzKJ8WtJZ",
  "key12": "2xv29pSh4ZJ128HdnduPhL4aoxo4sydACaeDqE1rmkfCPvPKHFtWf8e1PzvoaA7hS7Un8RkcStjPmxXEFUy2vMQL",
  "key13": "3zjFqpV7VF7xN3xJT3SEiWTesEErwgoaLDA5rDh4R1m5exMyNirXyk73TNMYt3X6qGXiAvXPSsc1TZA1VQkczjmP",
  "key14": "1232okK94oj96QzjZWW7ai6MgEXmpPXGTAXZ7MJGkqgvJnbk13XKER6UP8EaLGyJN9cuqpnRgfteubdGe8vEJWvk",
  "key15": "2XkPjsywTSPgmvhLTJP9Wnx9mwSJEWWoqvoWTUkTpkqeBzKSXJabVg9VHDA74x6WUYRoxaJkzchaA65qj7bBYDYn",
  "key16": "hKWsTyz9gLSCBvCchLu7FijV87v2foGf3dmpCT4rHuV7mJgspUErDLptD1RtLtRDM5w2eWrzXmNYRKvvQhLWuMj",
  "key17": "3nCtivXzgNM9kD83L9aKyN5uEFZkaWs8gTwZqxHyLbS6TmJiuTzxMaQuCosGQkTyNBBjwyqJ1qefn9q2e3Zo2gTV",
  "key18": "22sYXrtdk9irKZ6SRh2b4cgGshtwzWfBXxxnwyuN3iruDaPh8qyHdscnm1iGHmrbkUcGbhHUAXZG7SoRvgzKJAr1",
  "key19": "2Mm3FehqWQ7gXGoUPawsYQG4JNCraq8iQzUDJNPtiChK1xgis5dvaCLYS9E8Fb9XHg8j8i9mLSYZuQZMWr1kfvzX",
  "key20": "2DUPiJ4FMAMTE9KpohJ8KRRWgxpgeTMQ7d2tKoGdvv6v8DX5zWXFUQztvH7XZwj5BPsz4aH4tFHYk1mb76RMWqnq",
  "key21": "311ybzK2UhcT19oHeEbpdcJZFSQuwfxgt1uCUnom8A7ETwwDKdXAL6i81436aLytRJzzYSD3Ghe3v6PE4MVqNyN1",
  "key22": "5uUe9CrAZdGwJ1DJEjB6gp42U5FKB7NAHDPVChv8Z86giQxpUhxucyEgQVKSvqY68Z3zw3bEqTyKUiMSKxDyWZ2B",
  "key23": "4o761BwvtAdd1wR65wuxCX3H6r1iBu1ckdE4bWCyC8oNBWLfcjPHwnc6Rxic1pR6xhvX9NrM9osJGb6jdTxcTvfr",
  "key24": "5hoJNHg7DUYY2Y5FYHGWwgDQLTfQVeDRd5idwPqpVjmrtUZNZMc1abtDWbm4r73qDs7y6WUpAPEjUj4r1BNA1Ye8",
  "key25": "3ciXKx8ePz9JySyntTJu6CpKwPJep4L4Dmf7P1fzmVQkfHGAYmFP2gSiMTbzUaJFS8NuzuhhCSgj17H3TwpiLQFV",
  "key26": "5mF3pbejQ6pNwvAqt3S2MNqn7ZwMuN2yFDHgpsnZwPxy5RxaAiNRn149dAN7ukzcW7fdKGcWuuSS6Cq4H77FkRje",
  "key27": "5XQVSZbY6zF8cJkALKf8kzRT1kTcG7cK8B5aSgtse3dxEZKeHLDrZEVQCRkguCJosdRuDgWky9EhqZ6ESruTWD35",
  "key28": "65bfdzjxNjE7g9SJudmAhcAr7LBAkPVVRhL47CRHPbE7tgGX3NQcxWAf2r628ANUo4sk2yzB7Xxtrm7Np8U2MEcy",
  "key29": "3wWzrcMbpzDub1W61jMhFPD5jwhXgsqhphmLD1VoWXWU8iRSEzyHW34jB6peaTc3orTNWwyLkGCzXZk7m8gj29eZ",
  "key30": "2BCa1JYGXCbxv9QXm6qrR2ePCHj95uDpS8nifjQKDnfXYRhpJY5et3WvGTSNdeG8DhYpq6hnix39n6xP9yuCLU3q",
  "key31": "FbZsE2K8toKzjU9XKv46qTdiq5UpZiMf8nPX6QhcZk37STCcnhG84sPNTYoCfTSNSwjt4TTa8GdztTv9tLXmxG8",
  "key32": "3uAKZjDemFndCwx13sS9MLHMNkg44fXZuQNnr5w1LXYbRh2pKTYRCUNztCvBdUTDViHADjEFQM9sNhX1RGdLRzLT",
  "key33": "31GLv4xMdBYLtwKLR9qWrqJUxjfHRcvAAifrohDWnNrJwU29jNEXgX1S1sLSRUDcMMXdQ2BVk5SYuptjscMY1R8d",
  "key34": "53vLTDUhD6mosCECr8c1N1SpUtwmmoGZUtu4mY7M8huYgjuCcTvsPFkoXXaAbX46AZsEbdvBqdKTGKJVuLad3UxP",
  "key35": "5nuAwc1Tg83jZ8CBgRykvxFDUBuk4ioKUJz9Ni4eZus85woXotZFJ5rqL514Ug6xmNRci6uS9UEV38JNseaiSyXe",
  "key36": "bamqwu3aQURndo5cgwANo3aseXH5EHLttYLQQDFXvqoEK5V2a6ZFwnSKBiX5d4vz12zSfqYgEbnt4BfLcyCBUsZ",
  "key37": "35qEU3AsmQUx2SkxWXB6HNfh9CZgFb6kzJCrKhQjXwKhh7BnaEwdZkHc5QGh395qDYnaVTZrj64FwPRZNtupoY9o",
  "key38": "2o7oPUkfxkRtVepm31FBRMJRxFfjUSgXdzBoXDYUhcGracVjvvNpb7c7L9K4DVxDZvpHhD8gmXoipALE3xY4qUGZ",
  "key39": "5VZ9vf124dMvKZYEx3TP93x65JEEXSjzRvME5bGVdkJZtgREL13XsDgzQCeBoof39goXwK6njEkXmRf6BUXGGWh9",
  "key40": "5xfob9zcCrCi9dRiJAbM93CGNrMbSYmStERZAqnXtkEhTaqjSgbEypihdx2B5NukoYtxoYVSbYm6FeCGSrL6wuGU",
  "key41": "47oh3A8MXiATUNGbjssG2kmCVoj3JrYdXN8r92bCzXXrdwr7hMirWuz1QPRLepSPLdznD2pjAdRFjvxWks3EMKLJ",
  "key42": "3dMfk2nPsfZmo4zSLghyQmrYVATZRz7gZxfzmX4VQ6jy6thY4NA1aq6b81KhG7SxX9aTZAm164U8KBvRZubBiiFb",
  "key43": "3WX7ek5bXTTzij2jFW7NYRS4ys5aJApqihEVMiHJLnfpGdMDLDtFpE2p2ufQpDE5oVhsnmpuviviAhDM8DkWq1fV",
  "key44": "2G6NBTQDWDRhVS56ZBDfqwe2nPcCBEDqmsRS9HBbMiFYuFZK6xUboTTvzMkqnaVFoDdWrEUnGMhmrG9DqBmLSPeU",
  "key45": "3g5yzKR5HL7WCAZMRmcsqRuprYW3stxJoh5wGX2DPnpUwfhPszSXogPvwGDQA68iYox75roBcscLJNSDA7kTXEZ2",
  "key46": "212d75bt3nkgcLKWoXStNEKERyh8eSvziwAWH7GnginLo2ZoAUCQ6fYP9mfC4Xf3NthM7TT3a3uxwp3UxvizasTs",
  "key47": "2fYy3QSeD1QzPSuTD1jZSEZ5HV4KiQ2uZYb37bCL8oDURbRf3y9ssz6Xf9t5e5Ubgrg8UTTmMD8BSnknxYXrFKUb",
  "key48": "32oQJsytpMHBHUfVG6Mrxou9QrjS7MCtaTUvsuSpRXBpMSPCobFh9PdRX9E5sAWC6KhzZtQgy43XogesZqNgezdL"
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
