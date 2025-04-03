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
    "2uJbgZw3mThZsr11W6mxKXgjKmeD46LqJk1VemjgybXA8LemLgLcGdHytWnsABaRPXUmekM6muFdGkLGCzrresQX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rQaiFLcMZWF8Jmp7LcDwkidjiBJdECpWqhu2SmsntN3k7GRpbVrucebtsi5cyFk5X4babYJoZBosQ8KvNQQj4AB",
  "key1": "2EA3qDhx3PhecMXimyAodBn1r3AFe17S65EZ6LCPusJYYZ1GMgyLoYtdWNj6d7bfweF7cvXv8DnxUZvgpDFU5Gzq",
  "key2": "2iSZyyCiLDZxDxqdN82PiZqLQR3TjSMSYwWrxMrE8LBAiKumn9zbeboGDPgGMjgFtz4StPNFJbRhqaKoeDP3jLNf",
  "key3": "2qe55HGPbQDYV3X7Vp6wS3TT6nJfyH17YSKFC4ZGmnyJPzZr8gp1v6a6LDeZ7uHxJfdNnwgFZ2qPTPSnHBNqUn5z",
  "key4": "2j95JxgCC2qBQwxU9Rrzc4e56deL62BrfEUaFx8F4991mQeVCdPUaNNkE1N9C5eb2zJ6JvcBi3ur9bHSrABJxDgf",
  "key5": "3QxKEjjbfJxAgnYp4Lp4eyCXN12j9TyNPwRWsCEAuMU97d2iiV37yBgT5NGEnDqDLQQvzqYHAmGbqfZ7qac2QZvG",
  "key6": "44e1ZZmoyZTykD4aNgUpKZganFaLD7PM74xPoJmXdrpaei2Nd35MZystY2vb3pcGBSHJ3kCEWhLpHLFtAwvw5xvr",
  "key7": "561HcH6ehDitqmfAk3QAipC7dsdmc8GjsK7Kye6oe3dTK5NfGTnTsHUWui4L7PLbK3H1mfjdQifGK3pEYXog1Zf2",
  "key8": "3fjxiuqF7H5Vuh3eZGCGzgowW41rZ7LPqzhfTRjzHX6ZexdBVvq29nzocTRb9L8whNntdERkyjen5zSYTaZAXHAX",
  "key9": "2acoC4cdSMhNaZPAcnV1VDgw39Wppn3kYA7cYF1YM4S3knXC1EviAUx8DPpKm2HRW9cgGoEHngXpsSdt89cuL3AN",
  "key10": "9ihUkSLAyWVtcph7V8vjrfTF687DChfKJmN9KX4E3DGajCeTSj5KqV7xBbXV4GkuWZaF1yFtbUxVxmXQ7g1KdCH",
  "key11": "5tAsAuRxnGuaN6EhspnemruemysqdMRPfzMG9EddSqCY7kFCRV4KjAt91UQ9nQXMGcbnhsW75k2h3NsjbN8Ur6nz",
  "key12": "5kYfFtSnWGCSswFCL6cr9F6t1agEfjFca129F5QPK6VStBxvmsznTWuT3bzs1fRAMkXBK4DWTpAcBSinfye4yGqq",
  "key13": "2xwxpz9yUvjxRZ3GgTdB6xNBD1TZKLFJyQvcuG2MFmi8HdWfDNsWp2xMrrfVz6EzfCeRqY6yKssKS8kXdt51BWMH",
  "key14": "4A48sPuvwWcnneDHsizSyNGsWLe2cpkajoyfKkHEofPdEtiq3gKbLfNZuGSqnW1yFKkHE9ZfDwKmcskisCtVStr7",
  "key15": "57T4AjB4Nu5KiYGx2ey2q2LbFhmcQyM1rucY6o2E9ui11gXePbySZHxqdyx796p4S5vU8CRGNtyswRNQXtkhNSxx",
  "key16": "5oyUe9UDaZiBgZWC7Ntep2dw1mDqi6Zn7oH1aHGkKzKvzDiWyLHsyRQYvkQn5R7HWNFeTc6x9s7q859gp1JZf13i",
  "key17": "5uvBD94RVMhJFd4zvwjyzGd2t9EzyPTj9vyVGrjhbwzvMooKKFcMQKeL2d6B8YzG4TMaRRJx1g3H3A47FvRMfyRC",
  "key18": "5oURX5xNi1nzy8uRv7J5b4XKarKUgzRqJkUz72JPK9m6L64wuBnkpaYGMow33Cg4sUnvRY59XRPinoChmpYV1zWu",
  "key19": "2B7b7JwQwZQzFAcj3cEG43MW2eaX6R4mnVBQWRLFMyqbPrCDqZP2jbmdybg8ZwLBKdW5MPn743dhrSVMSrfywuuy",
  "key20": "2pqTibSeWD2A41uS6USMTaYY5XKHMZttJaUUUxPYNF8PXoRZMcCFkkyYMSd4JvH11rTgH2jjmP61JiNsEFDMuSMC",
  "key21": "PRteLLqB7vw5rZ8FGYc1WjZ74CrQmrDH77W8oyPugpK61TuwuBLsxcy4X6DS8cp5BEUcusMjziKc3oYBPPxxzqP",
  "key22": "4RHV82weriZmNYH4HreZ8nLFHjRoTSrFxJKLQ15Ds69Y5mjBNBxoVXF1pbuFYN91ACpNMPAkF165RqY7E2XBFLp8",
  "key23": "QT6by4z4WFH55w98jsbnXLn6As4C4JnkY2wVpx1vA3857ickcUQN3onZfRtZaRiHHd1Y4NvrWw9LAyMT1dsw3iR",
  "key24": "2PX22svNRYuUdmS2QxkA79D1zm1dxQ3VX2MWGr1WCMn6RVwWyc9RaMPTfmhem1Vb7NTgfCr7rYXYPg1cEqxBsTjr",
  "key25": "QxEKS1VzS8QGG9i7fvpFndgL1vKva4jSJaBpThbyo7rxrKtP1cE55z8BQVuw3Mckp892YXFvNQ3A47k8a94wt6i",
  "key26": "2AYVGkhJC7tUUpogJ8pvuQWZR3MiAed7i2EVRaf1r3PWLnYadE7dWuUYszH67y9nPfKKSPetyAALFCERBWFxZCxL",
  "key27": "4ZXGeUkqrYH3gVcCPc6D7tXJvA4MhPqLMQamJKreRabsLror6PKbYPMCT9HrXDMSJb2sdDz28LoXtJatD9ata4cu",
  "key28": "2szzZwdz3yMK9xs5n5rvKVweDPsEDTu5rRVdvjWY1o868bcHHs3t3fzDkVv13tUsPWxt71M2ubcWdrqmZ8YWmXeL",
  "key29": "2Y6iRr5fN7WVfrh9SqNhD8BhhJYrgSmtjFZTMsNLJskU7qd4e1hHUNMc21mxNuaNYX3TpLiTvBvVBPcVM92QFVrZ",
  "key30": "fnoMdb89NV8Nf7S4WTVNrNfe8vPJetvf6Hmds6YrqTUvnzgcgUbG9tcAJ1qykkRMiHkEViyiUvUvMpqGxpyk374",
  "key31": "2h242UZeZ1FUTZdcjU8PmPCd66VfTeyMCDxHuEkexCX4oLptqCrjUr6VcfY1v7C5D7661UWX81HzXZJk8JbFaR3j",
  "key32": "5VQhXXFB3pfCQH1dGwAYs3TX69BpSj7vpJnDWCo1w9ZPQqaGJ6VvXCWa5HUEHuu8DqXanEoSgWVSpMdxTaeAWVTY",
  "key33": "XCR7ypDL6k6FdcSNm3DyogUngeb285vHk9wzT9afzv31ujmWbw3qJPTY3dC8sB5pCk26PNpmKLbPi4T5aa1oEw9",
  "key34": "3S6P8Kyzbi89btHQXccJozG19Nse7HC4Uqm3QVx5MArHGLpeV2SUPeyu2RWN46r6yApLPWtCv3mWPzJNirtzS4tg",
  "key35": "Aj7fr3oPd1hHAkoueUxrMfz99t7KaW11DeJare8aAss665LMrqiKwkHqNGXuL9btQBdyMt9nYokwCD1UHEmH6eV",
  "key36": "5F5fToBJc9KYfQ5tRdwPjAQRhJDtzdiaeWwp5mHpyaxcHMyJmMH1icKqMxWzZSo6NayaGDCskE77xWZGvXAhmHmv"
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
