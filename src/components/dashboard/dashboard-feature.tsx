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
    "2wpwT1p1djdjwVKsQiCe182Dq2TiQnJra9Q3SonuKeVtCzJym2vAGAQSyGaTHD87mmbQftrz26UL3RBHG1cDgowD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3juADdA9kiqt36uWtq7KSKraVxeyPCsVdKXyvTewHUEwH4DzY5mfCFr4y1NMvqEH7R6X2Rg4D3pYjusmmCpUJKRj",
  "key1": "ccgRHFSEYADQK83RVMQcFzHHzJYrU8KGWUPx9fQFUaAnYMPZcr2YsJqG89vXbcWgJRJFP6qS6g3x7d8YBcD54et",
  "key2": "gpPitnkc1L1Yki8soxTt9MFg1RL2c2XopaHWeubL5YcmX1qKPm8c6XaqQiDBXyMJkT49u1VtkW1WUuJ7LtJnc8h",
  "key3": "PY3hrojFNBb1WVMbC96RePw6Wqs4pEa5AtrUZfZXexuKvJ6dKfLVheWvqVdsgS4WAH8FCcYRZAiXTe8nS3Ee4TV",
  "key4": "GaskxqFiR4ZQyVusnkQ9v9yEBp61xFX4aX5H2NrMXTthH4camTmYHxMyqREMBuTKY4VLzQao3VxDa131MYEJBwW",
  "key5": "67fCo4DuZ1r9bjWPVEaGvtjbiwNNceP42QkyF8tyamEGNAqYQkJ78rgrbuw2Li4LKrD2EjC55QUU96wh7XLHCpiU",
  "key6": "3PRGw9YVCbPvQupoPjk9ZYG5FzYYFRzCbp99KBpTcSBfbsizQdP57AviK4MqKSBCWTjDjjhHH7Y383jWi5ZGs5mE",
  "key7": "4ey8TtbNntEtHSopQyV3kHUnzrp2FTfyUCeuExWmcBt9A8gHr2UNM1sd74DeYtYKeiPWojDbbBejYqqVAxsH1Mek",
  "key8": "5WUMAx4L5yFf8qM658EUMhDDujjDXwwNnq8K74aWEjZsiZ6h2JJWDekPXSEda22aHr34HCy7hYeXgVZoH6hewdF1",
  "key9": "2y9fXLWrC3GHUiqGEXn2bdR2Pj3R4aJKo6t1f9Aoh2HcAyb6iiYR4b8QeUPTpLq8fpphLf55cVJ8qqmtmjYv9Ad3",
  "key10": "649WuwG4i89XymhdU8AivYK6fGEoW5dtmvHijpFWLeTrZmXarincBJaZZTP1HMWMPRGg2dJCY6NcSY6Rf7P5WZMp",
  "key11": "3DUAbtBTBgB5mXyBznsVULfoR6yAgyLJyfHtbB3Z4JnP2Pc7E6VnWQW27FxqHhp7WwVk9fdbEBqFRh38bYBtSdFd",
  "key12": "NucY1FAgzrdag2cxbfRto1gYbkBTe2v4aFVG2RqWcGFVDuTgZB4eJyVpc6WTUA5Xwbtt5vWNSwugfjjuZMWsp2Z",
  "key13": "23QN8Vfus9Wow4C62VfYTogshzXH45GKgQzB5HyhozRhHYCXiaji3kZCgBnkzKY4VLWe9XqztLFtVVffExDmN1sx",
  "key14": "5HiRj4SNKxf4MCSGADZk2vsJq7Ycer6cGKGwBM9rW9ZHDGmxeWZa7q7FgvMj1GKtEU7L6WtWC6WMDXMkAp5o2CYQ",
  "key15": "XbRa56zFtchvntc8wsogWaWWD7HZ9U7fdac9zLSX4r3E98qPazYSoN9K293R2N5ar4ncZcxzdZdSLuAhakqATMh",
  "key16": "4MFzLfKBP5i2PBK6pv55agWDMExbo6BiNeT8iBGKM8Za7RhdbKKjBtbzSaY7rTvKCHzQSt2DX3KYzJ7sZQGBiarS",
  "key17": "4UvgeeWMe2rZeAXGmDzEJDZnvAiKbxm1oQwTHTSp8UdkfMQe6fQTpH7Y51nLZACyfU4d7YtCyzH64aFjsZCuTijn",
  "key18": "2RwD7Y65htqmQM4Rwnub4dpXNg36oEsfsK73sQ2v1prawzMDM9nDeBQXQNAoP8YBkUMz9UgeYLRV3WDhjb8VPyEN",
  "key19": "62ENznbexTpq769D8VSqzgvxLgdRKGPiXQbcFfLjLiv9S4r2DsYNs1quVXKGjVEirQMXk8EmCgECbirk43c56UxY",
  "key20": "2cBzY7UdxQjUXHrLquZQKqpJC2UY89eaYkBm3StWmQSytrwHGBfc5fAVY4jLpktru227gxdN2zWkkShXzedmZU4N",
  "key21": "3jwq5bkk9pM8EFUdEXnayaiPsHnKmvvRdqFcvsRfscLpbE9R3yVDsoRNrtUo5ixEJvs1VgNnNmJH3hK7kQyhLyKd",
  "key22": "5Z5DDcGtWncftH9SFnAYvyUFTgFde1ax7BsWBzHdgJskz6uV4azyh6zEKRNwAqTiCrgYDUu4fSxe81cc5Gy7XmBx",
  "key23": "4LbGaKtaV69pyqUHsYJ61mdKWnBjA8myQjniLgdNebodKUnT7UqMe4qLf1cqJAciWJ1gAMXqvept83ssLPzF6mBi",
  "key24": "2oP4EMiCMJL5fAxF9ZQ6hcgNFakTxfSNHN4GT371yBPLA4JN7MBDsrdocsanUSQmTTsuGSr9x5QyTQ9Cr1YUkjBZ",
  "key25": "AeQY47BcH5VFWCKikjuuj3HhjsefzSw7jgLUfnPLw4UYuwTn57FgkvxzNx1f8m3DTrZuRJuQSzfPVx11i1L1Xwh",
  "key26": "3t6JQMQvoq8kRMe5rB5Conauj23Qba1vev8zdSN9VSqmBUe77r4VzNL7UwZFajrqEFpf4yH4g5j7hJzvjHE5iKDN",
  "key27": "2GjKQuoHmKYrYyNcSLk1LYPjcUrq94bY1rEfxM1X3ETiskoDEsNSo5AKeiwvz8MFuWcfKxBPwZRqzkeqitT7wfk",
  "key28": "3NMCN2z1sPFx4CQzGTn1cxYu3Anp1UFwoTGcrzptRDq2CF3bKM5EXqt2fsd5r7oGTYejNsVTksMGBUqp1oyqfdyS",
  "key29": "2DTvdhUALUkh2fhPC55vH73qr44oohymVPtbk277W9mEFUafLYmV7gvw4nCDgSC1H2CyBjvdRWSK3P22tWRkrpEm",
  "key30": "2Wuw7SzmiU9uLhL8uBREn4q6VkA9ux8ZjSMCm8RdUxadqkwxXFwsc6yugU7fvYA7XmdSJhiD2hKEPbM2ZAX7oTwv",
  "key31": "4R6vuH6jca2imbZwyAQrk8v8zRWa9CV17H3VveLAKDqDZXApt96BcYKbH4QEHRMo61WPw5zTQxHgVYrVeKtUCSpM",
  "key32": "21hi5tsGc5dVjo9utFTA5s7wYQdSyJkKaEFAaqHxXLYmW2PJ5Qm3BFyd8a5pJCK2FPEwdtdx7xv8STT7xp6CDADu",
  "key33": "3CYFvDo5CMRngwVfzP3EyE1PBiACqg1Vzj586879FB3GRfNJ5sLeYgghRH9LUMapcAyKmVm7Kg2ZPMo9EoF19VC5",
  "key34": "5shayoaGyuxwieE6dqwLQYpD3JvWZ3i1ZWHKb29miFoBpdg4KiCJcPVZqTwtbZdULXHu29j7zBC9gewfviKZpNQJ",
  "key35": "64vfZTShep4VQNkM8YEgfHZxDJ9V8roMDdQFFn5CUJjycctA51yEdyWbeQehwVN24fPDeC3gk3aJ9zJRbhTUrraM",
  "key36": "ScJLfeYhooFdMftTmijiiGNHBL7zfEUqmVDKWib1CxoFKBNDPdFg4R9bbE31yps51fwnpEcQBpZsr9RvSMRpkwH",
  "key37": "53PiZEpsNUU1LkdqLiR2BbDXWCZ7F4BTxvm6tcQFcH3QKaWaf32vdpqM7Z8xgJ6kVpjAF2QyoLVWM2YYLZHkwVA9",
  "key38": "5GFtmCpRMvNiXQ7SpncUNQEeYhkURVZrpvLX5YZHGWhq2EJTG3dAcMmNjeRUqq9JEYYty8iFeYdX4QjVedozr969",
  "key39": "2NzD8dAdm7Ejp8pu9axviqYnuSo2XusYg4J3E7cdJwfKZJ9nqM8cpnQSAQjFHqgRq6xP4f3LNv7NZwaDkThv78Re",
  "key40": "5zi9oEbnmBu66LY5qmnCqp3x8zZNYyxAYfszszgD48e5Xfups5AAnBD72eVUdjtXq3keeDK51XG8JsQmVFV9hy5",
  "key41": "3BmCWtvpCD8u5JzreugK8fbbgswHmc3hwdUJHHefgduHuMtCFkvtqouTUEp9Ec9VCiH8GqLnYYJkrEEMxRFS5TBK",
  "key42": "5qg8KLnDudqFLabM7R2k4rkqYAv3o7BiTYY6qaWMwS85DFxM9a1GcM4jjL9MjnQTP6HK8HRQVeACPZaWqHNftTww",
  "key43": "r8NK5mo1cz16y5q3q7bKvz3bMAcYGq8KSwvmMxcKrqVJ4gndgNAvqzsFDt2bqoa8v1uTd5ZeqsW3dQu39yzz2CH",
  "key44": "4vDZ1NhEwzeWaA6v8sa7LduKAb4MQUE83neUYUqhtfAnQ2kff5Giyyp4uhWhQERf8gZqZQd8haVQAJUbmRbkbFSZ",
  "key45": "BX6mrrF9sZoroGEadjzXP2e2PA449ixLnSEwJraKw2sS2jKfeGFb9k49vr1M7ZfEeKxpv7GNq6Z3tV8m5eWDpob",
  "key46": "3CAdEUPz8cZDE64hedDVxxmhmiNuxqiHT36ioGceuHRGGjTvLUcJhrsgaNPbT8qvu4y1cYjsVrowaPrNto6sCjFL",
  "key47": "4UZpeqRhisF6Dg9SrB4cPt4TnVFZ5QqxHf1EkgcenARdrmLf44Z2kDcEVwGGrysJz1GEhxb4uvGz7kDSFCyin4M7"
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
