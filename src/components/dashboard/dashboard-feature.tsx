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
    "5Qgy88SzP3Cj1aLS8d5wRJv6LSrvAVUbnASrX99XCN1b3tWqxQxL6RSkjtfUQmmd28GtBMGcCD4X3NDaHeGd31o3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7zCXswqEpjNpjDpJGxrZ1t6QF6uRBpZEeDYCk9hzkFoUJGsF9cq6do6e9TsPfAkcz4QYfZW4GQMsG2b1f9Em9b1",
  "key1": "3Z7tfq8TqQchyoaA55rxnG2m3HS7zaefb76bheoAzncKfam6mq3x5wqAfmg7j6duzQz4Mtj18zuSJhG7EQDmMeqx",
  "key2": "39hvndebbqdKWZ4ySGGSNoyK6SksggekgQD2pfzusw7YuZy8MLGdhqJ5xDgW1RoxV62NvBQbnAVAeM7kG7sLVHG",
  "key3": "3ynt7YcwiPUoRcwAkSeEgNbWybXCWXRKGx4nSdE1YcTy3faK41tUKk9sRv1YrCGb71jpua6ujLFarSen9v8E1jph",
  "key4": "5f1S6VP3c8vCuVsy3waVoT81h8P6fnxk5SvHKWLgHsY2ULQFLNrsNnZmARfC8WNPrUfuvHTbC1BpQvLkTJDh6UpL",
  "key5": "4M1KPgLzGzRY6fHe8P4Zr6jRAj16xwyysJGkLutAoT96qwx5Td1frWWA4GXKzw2RpMqnVwwUSP8M4r84gPwjMP65",
  "key6": "3hZwYqAbNo3uADpKwW8GUzdEouNfL1QD8JMkVmxxFyCkBu86zqBUQKmWgfMRqjbAEkBMpoq6YUiR3Mgr6vQzC1Bt",
  "key7": "2NVhw4idCqXgnxUpe9efQGFtu3WN7HKPse6oAEng35SqsRGod6jWtuWYwhUzfu6bWk1bdKAVqcX4WvpcEPp9FDmp",
  "key8": "62jQoNdA1pPzDgYMfpRwy9PsDSHL247P3yUpxdiBqSqK9VdS5Gx13nW2TQKrC3KLPNiQGumy52agstZuS61vRsvg",
  "key9": "3tFdNkAg9XZosrmiTiecqqYvR2n3f8HRCT1zpQd6cpF18smM15r7h76Q5ffofKB9GZMZ3Mrj3ySyZdREW9foA8TR",
  "key10": "2AE3jMbyjfCCE3TZ3pQz2fZWZGf7QQ2nKjLrGC4RGP5vzj6wEshynHF7XnZXy99Zeepaoia5Nqdu7L7zpNr7AYan",
  "key11": "PUvoScGheBd8N2bAzM8HS3oFkSZtKwSw16SMe2XjEQwad3QQvH9M25dXos9N6uqFiZhc6o62mso8dm2SoYBEkV4",
  "key12": "N3FDKbthcM9kUVUbGfPox7s1373oKHFz5urbJahmV2TPJ3yb1D3E38YUPCQCVUejRthduqdFrU5axMbdZeztfz1",
  "key13": "kiG5nGTvTwtRo8eLq5Cs5SjEtALN2RJufUVPfeBF6QXbrKfTsURgzXC1umTPis3Xi16ApRxEHwL8ygAbcyaLmEV",
  "key14": "fWNVoS69KSWLGshgTJqrrqoMCJwLuXpucg1rgrD8rrWdpvP1mY6K3LwKTfqZe6ph4U5Wx9tA8bEu4EF875nKWEq",
  "key15": "2FGHcghNcG4WDnuC6cERWDwYLiz4FhVvoBLYG6RbPZ6YUGGHxi2e4cXN1Hb7YF2f6HruYfpFgDzANPtnJjC4RcjL",
  "key16": "MEWTYGHcovV3jAnxZpsogktY9gSa5Y8pYiv3uzfTuqkyUcu8geZexm4eAnf8P9nh582syfAcJSa6Gcb3yaeGECG",
  "key17": "3hmShzAk9Cz59gH6CexbCUvWq6S5tq2QHF9coStG6eHZYDKXoiv2fxES4zS9gUZKrgmXH2n5TCuRaUMmEzpzC9wV",
  "key18": "4zMJsDqjqZdixLeQMmoHoig8nQ6QUqB9TTsETL8ZKiPJ1WMU2X6gNfEbAC4QkEia23vN3qSDFKAn5LxXShLr9FPG",
  "key19": "5emw7MAnFx649cPp3QvaypYjp8iRqanpfAt9w1T726Mg9VjANo2gCTuFyU8LiAKmw29c5g2ZTk13SVyKRXfXe9yz",
  "key20": "5SWmW7euysVo2YTY5TUknYcRyNYoTnXDJgCAySEd5NZyVoFR7w8kkcm6NuDxsAhSZrDv3ZWUJHyTzqWVSDCp8mdS",
  "key21": "2nt1PoSAwHNq2xvXEB7WKJ7wQPkKQDzrM5eQNwNr5V1K7T33eDnGS5TeRyGPSfLHFncfwWgHrJsrUPTxr8Fs1rv9",
  "key22": "5TKBTNSLEzBWr2zL1BABjmqoASWTskUgLdU9oXneBEYzysCocapgVZ3wveUyWYV28irz1ZnbwfVUNJu2CMYczTUZ",
  "key23": "2G8LSZ8TyZQhWLUwD5BNZcaaFcV9wMUsvQ4BKnvvUZrUHEztBnambumfioqrYvtKuixbfSGhs8N4kJSQ4BgGB7Em",
  "key24": "2LREf4UFaZuBTKodrSj6WSHmeJDGobNjcTy3mz6MXeAri2NZ2Up3X38Je9iix6SDpgee3UisZ3VRJ5kXnXJzBbkm",
  "key25": "5SqxoYqr8GhwmXRmQhwS3HzMyb25BizbCocXnT9GRJ3uSurhdRkbYRScLtQfqxHJxtTjyksT1kpFA344Js65XuEz",
  "key26": "FV47brD1TVrF9vuTELi7DRLxZtPtrcMnkVHX2vPr82HCqwPFDffDrtG5mQHMxEHXFSFBiRxWbkFs1icwvcJJGM5",
  "key27": "3ao4gwatj7CRnwDvrMTqSGpdETyLf5HgkbH4oZdPHWRjWKtrnxbuhDVFMLdP7re3LTwCUYp8fbcTvHEB9rNbeoKY",
  "key28": "3yz9xUW4bfSzrWst3UdW2JYaDR84R5KmxsgAhZXb4d6Lro2GHPQ3DF6Cnr3nnzSqAAyyqFYb5zYkhoAYkHQV7Gwv",
  "key29": "4YLkG7EbNRz7ZRrUrT3ZqHMSZqSVRENQvwMXyr8F8ZNJbPfRD4n9Jw1CsVuaZJvys8rV8fzc4LhchV49DSwb13N5",
  "key30": "4DXzTDn57S4BLzKQXHNDXu6YdeeYyE6V9XeSYmUJDSYaUiQNsfejoT1w4hdBacxre7rHajYuu3Qn5HoqWPyGYMAw",
  "key31": "Ee7RSXrwyvDL5ogbFJ4kPUBTRge7TaXsqybs9gUtw4k5GoCieTyRHSrf3a2LvmYk5Dq7bjdBVeivWwvaPYawJ2S",
  "key32": "5EpSLhAgQXmagv8wSxtdEsc6zkhspKRZDwYiK8rNTz9ZveyW8wX267FkSatz8v71At4spKi4oq4F5ht5DwU1SST6",
  "key33": "5n1jUtuyGWSkpNHDg77BuygWqDbc1MPjNE7j4hFoP471vKmeRpeQcAVuAsoJdAFUYmeNuCNKW3sghjC9YpxwFtU7",
  "key34": "5YoGzurbuDk5ma9tcGhssCQUpwJkDRY5sTKPSn4VjDAqFHPAgrR95GdiWEdYTFJdQk4UWEg2vccDhcJ8kWc32Vee",
  "key35": "26iaBziwCWLfqW1SMfx6BWd8DnutRBuYtRw79G9hVJmRjC7CRsJSSkyFeBMEGqqCkPrjzggTkFiRm2sn7ctiEETR",
  "key36": "xqrjLmufwBkA88FMcKJPFQJjS72SKXexCcKf5riKgqHy36rARgEhaMngpizCyFMM27igURPpi6ormACs8S4Qwrt",
  "key37": "3RnD21uh7UBjGqSfjbzLK9FiMftC4qddUs2NVrAd14BYmk5PY42F4h6714aWfwNtQWmyFiGNfYQVQPaa87Ka26oY",
  "key38": "3xpGVWWpCMVbcRiMTEiXt7UaRPye4eNkVyFCwzFi9w4u8kS3fdBBKs38NXCQHBaf7GRrkwKww2prqnWjqupy2ogW",
  "key39": "5mCX3pCn1k2BZASu6MVEy2Acrcc1B3XaCowVq5KiVe2Js1ybBkZiUVafrbe5dCEKdqpLTrRqoCcUL59L3jiQBJY3",
  "key40": "2wZ4zpHLgBhryH9eCLUyHhH2nzTVZAm2YujrdsuVaMQdfYCcd4L4DVKcxaYBLbB9eZXG9ttyRxryZN88oCfkwb69",
  "key41": "46vAymwVhc77DWU6k4WLSsfF4wUzhpQvuTXKx5savVoCM68EWEGNo9yXsApLzz1GrPwfCk4pwSu2aLttuRSXW3HT",
  "key42": "2p2TiYE5GZj6r2fAzshXepzHogyYxMuk4f4YmEDqEtisAGRtyysNLFLx4K44GUUcNGFVkDAyzpxepdXHr3e7BXcj",
  "key43": "2H5AT9Tx5t9gXSVnswQruWf9sfzzZ8hf4HkS1BFMQRadMJkMf2GcrtzsZun65DtCwJtnsSY1Cncw1oLosF2Zcthx",
  "key44": "3ReFudkgXBixoa7yWjAjiLPkKUEFhwZxVH1QxySYHSLF9zDfAj2ebiW5F7dYu4VXa4uqYC3YyorQGVvyRhLJ4xX",
  "key45": "5SfmH1Lep2wzH9UFaCmyC84pA7hj8pyVNQKDfAcNiLaEws199AjKrqzDiJM4dEkYjLkyzVGTaePmfN5JChxh1Wie",
  "key46": "5dufSptAKztr5YyWhJc12FDs3wVx5q3fW9d75dbFYjdaD4aXpcFQGRkT8Tkm7tz9JakvbYFhhqr7Sg3NW2yzGsn4",
  "key47": "3gwTRntDhka9bmcH7LWUcePvXyRDAmxbUajv1u7jJ79dZhweSnV88HHMUztpdcrwNjtc2WhqkmYrhBnaLRc9N2P1"
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
