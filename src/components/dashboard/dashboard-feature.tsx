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
    "2RLh6ST4547eKGJNHKm22pr9TJ5pSUaNcG5SqEW8ciMt4GbLhSdv2jPhY2FgmYaDwLiND3EfR5iv83dgcza8xHKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rYGKFjKtUTZK7igp88s2a5hNqoS6s7p7CiuSg533beY8hu7hc6z97b8HBRAKQq22wGDmmKLjUkPnzrZqXsVMncU",
  "key1": "3FwpAUYJPJyHovFX7toJ2JXHUyeP7MdsMAt5dt1wTfbMNiCK2p8JhfmUHrHroFyBi6yh1wHaURerSMXNqHYbZjTt",
  "key2": "2S1udmXAbCKYzeRTsUGcyq9FQNLvPrN8fkjQuixjmFEMyTouPE2yiKA9Gui6wBTVgjUax2gRvcf9tBnAUvmpvCTM",
  "key3": "3gXBHF3CGgVvvThxodGdyiuG92F9SWtjPxrrobrA2b512Hycn6YjyB9iefwxhTkkLZCgfpw96RyShk5YaEzZREQ9",
  "key4": "38swBTu85KRQELic5242TV2jBovhRZ7RCQDAK7mLCmH44b15EJraekpAA99YWDFq9YVzVmRvDad123r7V2u3xt68",
  "key5": "ZeBXfFzgXRCnu6G9QadnF7ughd3gppHzfYEZWNaC3NKkZpCskj1pWqBJEFrnXYXKS69dWDMQ86XL3bzyiChW8L3",
  "key6": "5kfzP1f8n76qKAQ7PV2eVvnYCogXbPSyuThohbhYzgT8xwBkrjvAiRzUwsbnXb8boU4zUdcmymrQHQqtCDxY4xGX",
  "key7": "2VZx2XEZEzQw2JLhrTxRqco7oS22imViEAhhL3ezKsS2PA95D2vNakKSsDvscxZ2CTPC15oxQgmG9Luv3T293hd4",
  "key8": "2WQzLixP8msjZo5q7BSDq1o1JUtMYbCLYUAcjSW8LovDHGC77h8QqMVHkWRFKJn39C8LWqHqbqhUoVmdcZLZcM7M",
  "key9": "954XUcixFaeGmH4eMFjCrGkMV38uqKwKK7ayzU1bPU3PYaVGuYMywj7gYNwVrB6cLsR1wF9naqpMF5BWe7HRqn1",
  "key10": "bW71oAKiVfLqaaxRQaKNYScRibAMqsPMDJXaSmJLGvJdsWAZejawXLByvxFCjTZVGqvvF6iEeqYFWzx7dEQS4kx",
  "key11": "5PHi9ZH5rcZvdPinWyN2su7Pe5YUPgBiJH4dkacsT1Nzy9xzd34mgCtd7oqvkj4YD9XUZx43xWQLRXGZsdpNzPUd",
  "key12": "4L9u42RouNkcHB3tyHiFai79uQN4RTPvuRbGhqNwx1NhpzdgUHEkJRcoX7eFkztBiC4rNX7HoAPpN6mwgdP74uwC",
  "key13": "2GLgb5Y6DEM4E6rEQH2CMcVz82GxG1Z9HnJvV4gWrpVnTt6P61b1FBFQcTVennr4tQWPw6BycrkXpz4bvCALQ9XE",
  "key14": "5K9Hs51QzcokRssPi8rgeEBLvbmMcNykzCTzinD2uYPaSsnKQU9wCNcZG2jD1BDMGpuzvGKxNgWzeYHrJXiKTRx1",
  "key15": "3jAhciPEkfi64Li2CtQ85gmAZc9LtjxHV9rP3nBM1qESeEiTaoFddB5ZUdHrr1uDRUwZmKuC8PSEbmnuekbPse8g",
  "key16": "3fzgXbvuThgLpJJrndLEztSJzr5hBcusoQDMwST2qAX1fHjCAJsFUs686fsJhkpX9DqpcYHm53Ftt5UzGEjFcBR4",
  "key17": "3yrqMCHdjc8sP9NTbYXFAeA2A8s77T1xJoZpMVcGdJ1am5eF1EibXHnpDgyi6ox5Lvzfjtm4B85UVii3nwsvpPpS",
  "key18": "1c3P2QuQiJZrgssjZtGpQ97kUTRFND5gyzYX3whRKYB846ZmzvdMLfRcbfXLfo74G5ofhpqGeGY6Tp7XfaYs5wx",
  "key19": "4aBeunXSYoR6NVEg8FF4CNjfhBrEiSbuVBk8UTZ32ocmTSrdmHaQysnqZwEcmhAn5kN8pd7viRXi2tFp5xMM9fTz",
  "key20": "2obgjaVSX1UnRAWT2yvGp42xyjkwcybvrfcHBCcXXnLxaRkdtrx1kzMRe7YkMQa2yyzJMe3rGPtYSkqYMbaqEdoC",
  "key21": "eMSS8FVnAatkNersjohnGAKfCf5wwiVg8JWv5kMootuJ9tKUsYhgdorw4EPTqhpjgFmKhYidFGkyFBNvxdui3qc",
  "key22": "2DkcPUuTjRppsz8bUeFYLUCsS626y6zwop2G1CunXnYS5a3E2gANLdG2kHYSanFXRGWM1WoabbqTjEpX1HkH5fCy",
  "key23": "ZMD4CJooB2GmNNRP3Lm2qpnFQbVXrKXKeab2eMDJ49NxyyAiWQM6VujUTAtJPaRjZV2E52h17zboFrqPFLebRPu",
  "key24": "4GNjfZYKjGrGxyKWBCynktacRE49uXnRPVD87fXJHsCMUA2rvPzaT6fvYees2kaUPZLqayoSVcGADWcMCiP8EMoM",
  "key25": "zw4sTyYNpCo2y2vrkRBfCUQ67jzFqJY7mTDu4EQHoob7JfmsS1MxtFMdJL64pqU2pLNpgaJexzzABiiDaRCPqbX",
  "key26": "uTrCzjphMbjeuZkGwuw1wFrate5STwJvzBh9sEGZkZ8Tp6N7TW6Ur7LWANtdJRnyWWE69uKY5NpKeyxkkaNdPsz",
  "key27": "2u82p2N5dVsgK98u6wKt4qxf6gw9Q4kCKAP8BRocG5qzHb3RyGHGC3eJyHiYB41EN6tiFR3Z1zSBvQTtxcQxdDh2",
  "key28": "3sksyWB7XPicTcDBEhe2Zj6bE8HBNjsmCfRKKhXf5cS21Z8NhWo3K3j8ah1SDKQXXeFPpLAJTDqPV18PUiBnTH9c",
  "key29": "5sm2WBebEQf91HLRXtegwuK8PRtTgqWgYbVJBYhHFpmUGQeJrcZh6kXfoiA8mpaXP7faiceCAks1bjGXHZLsFb1",
  "key30": "eCXQ7jE2mvMx91EWmYWb9ghzHo6xYF3PhErdvidwWLX1VGpezNBxEKiTjYqQbsXD5c9NYSXhN4LYVU7kp23pgK5",
  "key31": "zTWDauP8y3XUBPoYyRqig7swnmYyCqJ8ocGdgN8eWkx4aHyfF39wdbzhDU8uV9yuczmAU8BPjD6kZXyTn9hyAk9",
  "key32": "vNKRvL5LnprzBU5x7ABre3mB1Jsu4zPsUcKo5a1EkC15T5YoinFBz4eWpLJQEzuAoJZtEwJmfwWy9AhMgNxaFZ8",
  "key33": "4fvyFBWAXckWGk9nWG62cejiw6yhDUoN9ovsstUMECg6S4vZ1oLF1XHA2pknZXszSTaswRzrg9ANQBLMRnaVX1EP",
  "key34": "3bHbmUBP2GdGjnuqu1hrKbWEkYdtcVeB5TYfsPUM47eKs7UhL2w5oVg4sqLZejkM4nnXcuEBRws2iKYhQjHsXx3K",
  "key35": "265Hg24D7R1wRcY3bY8UcLWsgepv1qf3ccXsYVJ2DLqxQAstKyuESi29s1EmygySm5sB8gYrN6WCvL7Rm7qRH3D9",
  "key36": "7G1Erm1rhgt3PD7whtP86bdHReMhijuYBUGGGLws2TxbDdGskFHM9XUtuGshM8CqG4fNfVtcXuR3ZtxdWJsscf3",
  "key37": "3TMpAi6RPEiD498ipBba9hYTQNcXM39apAisoYvUpPzXBGNQQ9HxARidJ31UFYC9XzQ2VJZBNLjUm6NzoRE1q6AA",
  "key38": "3cwNHwiZZE8CVndiYJ9YXLEqSKS7wSWoo8xvmsCRbqtNFX97cS1vGiGJFG2kLcf6UtRHgeDsm686fKuvwcKsq1zJ",
  "key39": "3JNYnt3qghBPyThHpBkhJBfHivRzPGwsL1GJ2Eh6Vksr9bx1uUveGGxAJQRUPkAP2sRK6Thkwz4f6MujbRMFi6x7",
  "key40": "ecRoTq34sJbEKjH96xibuj2UsUqiQAoxHhFZX1dkVuK7k39GFPNgedvgUZ5Vcz2FAkfJatdPRjRD9vfTUWQHH3x",
  "key41": "TRa6SEXtwxU3FYHGsry4odRuyYA1ymYYWVicnHDWgha6bijWUvdui4oMBTELNPN9cSG3B1w5q14ik9knLLCi986",
  "key42": "3b22fs6NhkvVfTVQM4bxSp2AAHtr14vB5etd3Sr3oiMNZXDXGf7WVLcF7TAayrJohQgDor3PVdg2c8DTc8qMYiJq",
  "key43": "jgtvY6aTdHhUyqm7AWxTQjkCyVjpcvar9dpr2CmczQS5wBP23bP7ePG2LwURrCnAG3QfDVfy4Xyk16sz3MY9shj"
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
