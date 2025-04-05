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
    "F9Y3dmMRnqgBHbNcL5uN9wAPV3YH6rgTeXArTHrHTmxAmzn5qcw9FQ294QaGDd9q7De7JAHinDpoVCUQNSzKgn2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uUgNbtZdmjeGzj1NtmJ8gUPSEEvSqyriDMz9TqbnGRqib2RT2xwEa2GrN3DJTjHNsferxNiexY51dW7akfmKLo3",
  "key1": "3TMxSy6MPUHF4rhf559eTJVYfUGtT1PUrvPPXm3UN75Ze5xgARasix7qewz1Wb4icGiwS38TDRQEd5pPLWTXW2in",
  "key2": "41o4nGTTFZMHPKz8JZ4d1RqyTqUAzgVeQkEuW9XiSSrdMXE1GdGzaJc2FB8J2pt6sEyCF1fQ8c6e3AW5Yao4yrou",
  "key3": "559NhQpLDVb1USBNbig8AC2poQ62m6PEEgDy86SaMRGLnP2SCfHz5NnbAhy76VvWKrsXYi6Pr65NyqtdjqBsnsf5",
  "key4": "2B1WR6ztjAXkyj94kfLpvjfreSScdgf33GzzkS2A7FTtb5PZQrtK8qiZsQr5ZLsgNe7hw7WBZiiFUsE46bU8rZ4e",
  "key5": "2mgBmvS2dqp8yBCvD5rNEVhitjcQtMTkMCP25uyTH3NiPwi8fcGnAJpUe9ZUTCrbQk7BimtzyX1MKsW7Gxp64ZNN",
  "key6": "4HgvfM5L2M9i44KxbVKvxxgXVBEjUcz6uzuHd67ypNkxcYpCzvgjJa2YsZK6tHGEMGvzePrMRtuaYJV5ymaoN232",
  "key7": "5ApwbiiVTf7PZSDMDKX7EoWiYoVAA1BRvD8ZXzXVmveMXTiTXQE5TPV9aiKXJunpUwJf5yBHTXAfeWKo34UF7aSs",
  "key8": "2iW8fJepZ4Zn2Cz53T1erdng3EUgBhE3RBw6xiEZMFcbStrtDqyFxPUDdfQeoWwb3pNmytyYyvzhbRpeHu9R7g7Y",
  "key9": "3Bhgzm6yofcacV23N6qy6Xu7VFS228zenWnFvG2xUyjKkoNnbv7rpyN2gmuesatDXs1DCfCdPsohYoHqwvKwKH8o",
  "key10": "48wpbq2GC5AxAEwNnV1oAqBospdgLaMjjhNuRVZY9vVHasTC9gkDKUXNKNAbFGjpcowjLT6PegHYFhz62Yx6dhYY",
  "key11": "3ToGSGHbuZJ4ZWu1RULer2NjNEYesAGTLjmm1Z1xLrCzTdUypyezFqNYixwPa6ogDn8YDrbCJWTskTgkTG1Y3ubj",
  "key12": "5kRXAEexxXZkBJLWR9qehFp77noqFsMb6uLperVmwxKwTjV8dYbzLzSMXSgDQMwgaYXNT2rGPNaHrNeYfMEMLjxU",
  "key13": "43hp1RP9zGVZXxNs92ZafJLetGy54XKgVNbCMTXNYett35ZaWmCJ4PihhLdtEGrUqEU4nNyHEjCGkQZYq4LPpATH",
  "key14": "2Hq24zy3ciNnybgWDLGne2L2fXcpuqKLPHycsZZETPhxDwnq3ehahkZkcJweMWJeYTUQtkfdR6TpyjP8PBbXCDK6",
  "key15": "29ZUH33Vv2bGDSWUBcEaecQaAabi1kgeiBUsyr5Y7BZYtEkHtk9pam3obfjdeTjrPRMrfGortWXbLKVgX88ivP6y",
  "key16": "2khTeDn3Tt2oppZc9KBdi3r2JFVkGK2w2W2rV6Jos74b3PqcYB8gULGq4R4WyQfX7db6dF1rHB9gUsk1DJoyX5XT",
  "key17": "2F9nCUeXHpR1BV775zpVaSmowqobeYMYfxi7PaCuv6aaM3iMWLXsYfSBMx8yJAwimWBaS1nF6k1Vo6u2FSXFq2yy",
  "key18": "4jmS1Bby5RwUSWBHMxVqoCCvTbxQETiFFodEzgu3ZSxo7JEoDfGPBExEENtfQzRF9akvuASUKnKZxz4aLK28hBA2",
  "key19": "4Jk7xvgQcxwcrc9yZmQ5ZgQczUTenuVGWNrUv4GHNwvESDgbSdvkjAS3mDehjq4nnwyvjhgMnX2rtD99emDETtti",
  "key20": "kitLXSp2Ywp1sa8Diqe3yVzMyq76ayCCjsiD8Cf6XiTPA9P3uE4iyPeG1Dzvnw7rYmzEvahjpotcbUFoo6xZ2vf",
  "key21": "3JtNikb6UWjLfiFwh19j6uq2JGxEnHdrhv9yWpAJ7H77S6zSMQ14XyS7nxLvc3bG8yHhyU1puLRrLbKtvVhK6yUY",
  "key22": "33RuGtjBCZuEXoZr3Ei7uuxaCQpJKqG8kw38hidvDRbc66bV45beYJr2M8DXdCrE4UMYx6jTBkHkbwdpm4ziJovt",
  "key23": "2KntNozKVsRg6sf1cKVuK712JCRuqdgHN2V3SMK8kiWCPihEMmwyD5u3yCFMNKtk22P7NGAa1NrZEU4rLMAp82p5",
  "key24": "2Zs8pVGemU6zvwUNHehkMJiwsP3x5vZriYXwbZnL9BJnq75NwgG8HPZYx7khnNhiy6rJkfrwikhhp62MrJXWA4S9",
  "key25": "5TdHdUKqMRgUzH8gMJ9C8MtcKRuvvSnnBms9fDZerjJLSFmBtDAALSNTgRrUcgSBUPyR1WReFokjVS7ucZfzV5SV",
  "key26": "28SVSdfNRXA1x8A8BpYwVXSyPgzR2d92q5gFqGutQdnjx1yqMHpcS3jEFaXzJNKtQgZdG6DCuNucNyR1KZBz7vnY",
  "key27": "4AVmTNDTPHgFmuDha8dnqVm1e5twJPih6axaUd7wwoc6ibyJcwPeXxtg4FjCXMTUPN83rKzmm2Sb3c1HZKtXne9G",
  "key28": "3mJhBjBnRtB3gxQ1crHFE6yovGuULb7Hoixr2WgVj7MVZ42WoCWCPSbiN8AbmoE846Uxmnxtpm3qgfnzxoo9iaAP",
  "key29": "4B51b3mPQNB4L11aaS4n3e7Nj1NZvE9scNzmhLdW7a1Xkmo7MYrEn65SWH6NTWBae1sv6gh4V6GwjMNdcJeP4rbT",
  "key30": "xfiwHM8UgCBb2nV9SDN2FRUyQuJRHTrePgEFQ3c9CXTpWy3zjSRr5TQW9emfb3eTKYsABDK2XmH5G4mHdkmMs94",
  "key31": "Ye74wMrwM6KaLQtnfPTsic2TQcTkFUxYRJdsDqVngKnHaJ4oPLty4w5cCgnXoPzEdMJwJSy6y298yV7pWUyPWzW",
  "key32": "5kaweA6XssgUmZvBBTP7Y37qz1CNurGQWsL3JHws4TNRnfn5X9v4PvcZ8bLp4Tp4WrsFn8mcm2qW9U3byRcXhHVu",
  "key33": "2Xi2kSH1ZDrSMR7Jit4A8JiqXSy8h9wQG8d4LohK7z8Y8C9g3X65CC15KYvAhnJhTLKJsx31Q8e4TPDmKtRCZvsi",
  "key34": "4Z19rhkQxHbHwm4dg2Pa5iRHQCiXD6bsgzDwkPBn3w1m17kjcsKh7tpLwhhjJUjzDLGzdLVH2JsJx7VV3UcZN5M6",
  "key35": "4wKwsH7GVBtVzzjqMEm1tDRbuiMoedpajMdvmFPibtYE8vanrgMuA9qfykG6YCTjQUSnginFsuGZoZP53WDygFNh",
  "key36": "61XfEcDRiutuZXUW63V6CzF18cRf2XzhauVshzurTLhPgDAovjMvsL3jK94V6G1bBfYrvrW8z1jvUXwGLyFDGKqx"
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
