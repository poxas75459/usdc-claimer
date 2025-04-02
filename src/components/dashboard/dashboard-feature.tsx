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
    "Yk8wwibfowuMdpxMBpY7eW8odZjg9FxdvNLgTQnf3PWAtZLkNpfxLek2ojPFjzVtPg3UenmasxcraHD7C925miE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58CVuKyVyPLQma8BtTq2JLz29MXaSjospKHxjVBZiJYtEf9D1Dso7vMAweeTdDKoeh4vb2MstZZbix7ngFvDD4gS",
  "key1": "TD1kgf28KXo9p1v8VNnfqXpFwCnPqx4ecWfTaKiehhabXBjYPQfdRc86ZbccC5Do2tmTxDzYsusBQc39xZHu6h1",
  "key2": "2zac1SYL4fdtztK3KTJfVYNtYjuroWpkCm7cWEQXxBZsbxcQXKPJtc1aGXNTC69qU5L6mkz9UCPAHq3ZgN8Z2vKd",
  "key3": "8wDThfNrnXwAsz1Xs8eq2eemu3cUSZT1yHNiqVM3kvv1ZByRFt59XhWww6PiwHMAVShWDtaX2gnfQBxBpyPqdd1",
  "key4": "4X2d6DbFohYJuKyJhYApBurBJMMXgeBkXJZEaZZEjGQLrWGFXHoyHwUpQAt41ua3YsE2Rrr67JuEAKC5yveSbeLh",
  "key5": "4JSmaS8b7iePK5CfuEARvRg6bSzuEzyFtjf62dxobkNhKJhGaBdit6kwi1QAWqyvbZHY8RbArimMYuZwRXMrqhjS",
  "key6": "2meBymP1gDB3zpV9tSbbxHagSc7eznAoTqrnarUhJaB39c9RUbycotrQUWiDF7T9SGruwsmfPy1y6hWMu74zXzgo",
  "key7": "54Htqqw34aapAyRNueyDnuwpwrQJjU4CREFUP3TVuKGJhoPjPxeSm7SNZrEw6ukDR4wVxnZkGTmjttVHXDvj8fBK",
  "key8": "5xA2afAhiLqeEu8mG3VLtnVoeiqfARuf2qaEMSobFTJSXjwFvLWyJvxuzbbaMAvNJb2kcq6ci1K9MW8esoWZSHrC",
  "key9": "7YmN8vKeXHxvQqQ4xqdaVqteygsndpSBo4wrpWQZki3WqJpBjusmtwkMpUZFUhpvy5ev7AceVex2M5EevQh4DnK",
  "key10": "88r9fd96gTxqreb6y5M6uxGgbeDppYBjuHwHzGFRn9XnW9tFgXZE9WicXwecVy5WRvRk2g3qXKVpX5pybYM6DGt",
  "key11": "4i3MhVkik6e7GeRkX7DxFBFcu6GBixvM8Sk7pwuFzxHLLp5TGPFYbVwkCq8R8mgbPoY1A4rEPEH1sPhSdH3vPBAn",
  "key12": "3mGBd8i5MZXWcfpG9fsuA8omVdz3YTzWre7Kqu2WhD7HiVoUByaC1wdFgdmatKZUmuUy515kFpBt1sVgHm81LeUK",
  "key13": "2tgEFUFdDUrZzg2oMQLnV6dUd3YvtGgSjqVd5gGwsfx6VGafteoiKeREs4oCpTP5pCKBHEMb6aAKPJfGFiTuGaKV",
  "key14": "2gCyTF66yagpLgBB3pNhtd5vrK3ycrp9CT8FJzMnGKahbZF5kyk34K63zdjL43oSQUc86pEma3Np3BGt4mnNEUHY",
  "key15": "2sYyXzyqexHcJ4nJ8awj4XrsLaWMwhz2mcJaTk8yty1MgMmnTgXkBfqoufLfwv15ZHye5T82M4QPn9G9MDxGkXWc",
  "key16": "3Jw18tfsZdKLU6gMkSAe4XXGTw2dWFM9CRaXqbYFMkZQPKNV6rEvZq5Emynj3FBJ8kbWMdxUfCbSQEXYTWoNed2o",
  "key17": "rCzjXfvoM8pXUpN81rW1ord7Jkfx4T4ugUL2hmSsMHWLCrkhK6MsLqWbpXXumkGc6GHswG3RNaS5JgfPV15YS7T",
  "key18": "3DrdArHqCd76aZ7kYhGPZ3p9SUik8Yai4M4BrSPjRjaTV3mWSeiD7psMgZziCAEYhNoXjBMAsyishUgdEhsi1u3k",
  "key19": "J41hnRtSZiBjmRAaU3UQGM9Rni6pHBxhKxyMxGXTp4xPfBWY2NLDAskbam24GcSKg7fBqvXeNRrRjTUjYFX1KSt",
  "key20": "26jHzPrJqXTtaRkqyGGfxhjR123a9Wu5GGWi1DbCFwBRZ5NmWcnc4SVq4mrD1sBFFdRQ5LgY78p7XJQsVweSBgdd",
  "key21": "2gPyS2Gu66cCYQEQ6UPZW5fW8MjkxSK6hdRTDysFdYYWZJJ4WcPq1JjNFLqRbByEcUcJVsJvxFieQEemDxY8Lyix",
  "key22": "4mGj3S8dr5WjSakafEj7yPZ4ERmduKV8xKzMxp2H9cKfZMqLAgyiqS2LfDmJspaRHwumiKcWCyAK5hbnRe4QjPVT",
  "key23": "2s9TtYCNBeDRGctBXwm6YwyE9VLng6iP1Jobemb4QfKohrUrpdmc5RN8jtCa8xPyWmXCWDudGc7Zu3ecjs42M1bp",
  "key24": "5rFeRJmcNTcfWdBB8jb5dxw3gyysX558CqntrvYcaZ3PkRTuGNKpT7YJUJZchQHdbuygL2iAFBr3ZAi4oq2f7kK4",
  "key25": "4tkU84Z1gEbfsmpsr4WHhfbfPm1NkYojzKGvRydi8cvK4zYcQYZqzGFxzhzYz8WLCzgYcKZAKwaa2asUwjFzJUjT",
  "key26": "3jgX893t7wWnPF1MfAtf12oMpc4QQ7rebqgm57FvTRQncTxBieELsocSTKj312yp9Xek2dwPS82L4DPvA4796cRZ",
  "key27": "3KUVvNqH7biK6z3PynhPjzXy2Ch7L6rZnft9koZBx5vsDRNnhVDFyD2g3jRXXw8JY8oewewo6iRDAeWx9dvu3tvX",
  "key28": "5TZfnWZrzq5sM3AUYVVawhHSj9aDkhDA27xRRx1sbQHEeTsf6qkHMXQRGwpp314828jVUkKs4BMBdD7U31w7nBVk",
  "key29": "3H2aecK2JGNNBx4iTxWSFwRQnZk4jefachcxfCj5gSP6LzHYZzsnhxi8t7teYiHrxLzGtKCtU8LEQTA6Dcc7DaYt",
  "key30": "5xRsGgSRi3iEzyjgyEYWJWvNRJce6LSsMtkYXiysyZCknDVeFZHrtpM4yVL64ywaVEGXKPcnxWQWm7qRRSnHyK5c",
  "key31": "4wMzaTQhwJBXENtWWFCYjRp14vZWFBNhiSjxUX7cqVYMJfDw9GxK7mBHXZRXvd96DpnaLFwrRh7uDrZDCRwcq7eY",
  "key32": "5deBFzstsVyp8sTnAbvCVPTEr81AKo4q2KYC6GTPfiCSCSGawHjwcfjKFfmWvo7o3PdGEmbUrNm7NAszLRj9SHkS",
  "key33": "KNFgWVsU744MkNg76ceCDiyrNmZ3HfBMPs4S4STpVKnVyhwgixabDt3eGT2sV4omHyDLdwFSqBMBMb8rsN5sAmm",
  "key34": "541GufsEAPoUwXsjnYh4v6whM3GAb8d23Vk7aQGEMxrkCsPeV5CkwtnvW1orhmoTdyMyCy2w2MLHmoWHrS3vGm6J",
  "key35": "5yQrUE7ZpDpRYMr6pyQpL69figdWzGgqF9wMN6NRz3ENgwWyuYJUm14X9P2CH4BQfDA7HLBQgnHwiJwu5XK9aXMT",
  "key36": "2QeayP4PFxg5mFruK9vsAeDRScpuhiMES5v4JNBft7xyve2LAJBqbdBGBow2zCKL6hXwExTqHXtcJG8DJfF5MAxp",
  "key37": "8GQ15YV6NFZ1vpnSZSqnG78WiUz29gorPWbTEzyPMvxsjbme1tEUZi5e9JCkCeCJCL9XVtd69YFNXiphTx4KTJ1",
  "key38": "2pgG3RvTMFJ5xxRehnRy2N7dyyBKEw5XBBFcrCeB6v1k5LanB4BuCESQK9UrvARHY17SyGvxhY8oTLGAJzh53dNS",
  "key39": "3cd9Uh1g76J1sMdztPEeGBpp2izdWLaMzBQYHyWsBNK38uR1dsyV56SDzqd5u7ca3q8tGeemz3uNVk1RHkgwPYQu",
  "key40": "23eBW2L9n9WAAT1pQkFKcawkUbEhBA1LtzS36BMGkaF4AdpXuiTzRuz8aTrQ4XdkDd213mB7RXDzn1wQBEV2UyFu",
  "key41": "4M3UMLCCP9cBD6r1Md2oQfAaeVe8x9oMFX9vFXCVyfsmjjMvwVgzas6ZMFdUfxYCQKWpDQgsPya73RqWsvmaYhHD"
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
