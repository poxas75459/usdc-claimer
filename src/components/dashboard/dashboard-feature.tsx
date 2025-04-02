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
    "3tw9937b4SGA8wWnXEtNWYirjKxU6MjpDHbDJDT9J9NBrsnmkpwukw9Fp6hwHvAZybgbMau9TSnkUuqrEFAEVML3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n5BCb2TPRNEWpKmn46kX5haH45bED4KoFfZueSbWpQyEzr3PpDtZAbgUjXGyJebvNmyMJgeKurNu9QjPWu66Nxg",
  "key1": "4ehVZXSbQD3NdtFbYV25i5LbPwJXrJwsfa9iCes1NpNgnjiFu2dHcT3GRTnVnu6yYcE8SEcYvTYKh94EamM7b73G",
  "key2": "5yimuWmZn77TkhNhuMYdUK8qqYp2gaxeNepQFy72YrYpb27ayhk7rvzDGyhvXrdcYbnewbqKPv2MxiiiEzQuQBAn",
  "key3": "2zSXDacELLEUjPHuq83ddGJYiCC1ZfdfeFazbB5LL3uGYqpGo6Bd7qTuH8zcw5ubfmnJiXDuacHEBKMNwFPyq31f",
  "key4": "RqPCmpVAo5tN42KX6jCXzyHUmJLWbdPzb4SQGBNYX3sGuZZUhnHLYgC39hKNACPw3k3rWFYHUEKvcQ6X3WdRQ1e",
  "key5": "5wQ69tF982Que9f1frUuLtQ8jZ2GiwFFdX3B6Nx4tg9nBNcFsHyn88SCKJiZnte7pp3VtdnxB9sDh49uosvjUrAA",
  "key6": "4vRYKXvdnrUkuaxMNJnTDYLLxX9F1v3C9i2jXuN1hd5zTKcB1RQL5A9GmtvgBHnEnMziUEJnoxSxqnhyR6bW89Gr",
  "key7": "AXkkJaQtMEnboUZrLiWXZR1Z2CJHHUvzbdAQ4objzUiL7BGxTrjdWssJA4jEuPsxVMdD3zjdnhFDZKthPgso4Zc",
  "key8": "2n6rejeVoEqRrRtLiK7yQXke4TEf2iCszi5uAqS94GHDVWnEkaSHJ2tkf3ikt7ZZ98QY56WjaRmHHdkrBLk29ZXi",
  "key9": "58zuRB5TzPD4NpSyFFWUpjG9nGfL7i76vR27yV11zpvVqFfZxFXCAjy59AK5JzEmNwHPNnqS79EVuXccGH9k2sTV",
  "key10": "42bgtWXApokmv6np2a6XNns6tWWzdjvVRsnuvE6SSbVfqMFouTi16fAFArJAwUmAtNmzPmdrpTdpFeunsWMbkeKi",
  "key11": "53KU1ir3GLa8PiyT4RbokKq1gc6dfnnGMs3SY74PVXr9UzyYoYe1kifRdLwQDUisZuBZPx9W4ssmqkvvWAVv1o1M",
  "key12": "2uS4AQSunV6ujMnxBcQomctxhbfgAXUkyDuGhoK53oAMDGJrejRM29pHxvi93xUaAnEMCkxV7rPvPi94t441PhCi",
  "key13": "3s9zV7DtTnfsbCru6Eg2AaegvqzQiatUMVooGzuXvCDAZRw4qMBojixY7rj4dKUKn3AJQLrDMoCG4ksiY8UkyBkP",
  "key14": "36N61gsrhnSMikpQJd63Q8NcsAiZ6wH5hacergtRaaSHpHrGqbK3SmzmSaAFX63Vf7Yg3Vm9JzTEjBne3Ugkrymw",
  "key15": "5AjxTvWf8AF16QbXeuUwuG1efKunMtfsfD6kfRteMXAN9KFHZCNZrX8aLkyp6CGLwBqRHUBVWDQcB62zboaNWQZu",
  "key16": "4FgJsgWhgkHeR41NCf64G82vEXovfEFWA2SvPRHrPomysMVCwxv8P6Jybf7V4qzfoxmj199v1RZxcByWhVkg29S7",
  "key17": "4GMjgd2FQEYKZN71gSmdXfpmwS1XTpezVdJnHA5tA2Wppptd2btscjEceNZvXNmXynWXpeRnhATGeHc7hm6zsyN3",
  "key18": "4awsim1SQutQY3srtP7yzirSsWgxsJQKdcufZkn6zUXURq2xQXtwTiiom45BAqfvxnbj91NhfkqkmMR3S9rhsc2u",
  "key19": "dqdzJfAyoUUpucoCuMACMVkgyLmAFZrkGh5oKX3eDWLaR56gadW997wEaZv6LusHhrBuFxqMc3LUcFY3ehP5Snq",
  "key20": "5Z2JkMGGxR1BEPGMCYU2mnxkAyJQjs2s3yoQyt62pVFQzPURdEhqW2bBzWEhDS3sECj1yxiefwAubyap52sBdaji",
  "key21": "4ySxcRkkLrb9MsaiHgeT13DD4fzymsgnWg5e7cmNv1vSEaMmFtWPudkj7vPthcft39mVwMTzxXS3RRXyuomButNZ",
  "key22": "4yNtvVKPTDU8ScMqEKczPVXCFDZvb7qVhXM7Mm5mC7WgKvispoYrHh9D1Jvjwex13Lc2oHCYAyNfQ4Y4jzR1tFPQ",
  "key23": "Bw1fEhNAyE76dZoCLvCi2ipoPDC9iR2PLk9ypzgfR3G1xiwoLFFVrk8Qf1JUz3jSQJPzZZikMTiiqqbur4w32kQ",
  "key24": "5AsPWsgtnV2abXJbtQBZhY41HsiXdfwC6sR6yLmDG8GnXcPeETkmfpW97Kx5zmbt6bKWHFJJEextDPWNiHbw4QPv",
  "key25": "4zencBAunakWHuVHqRoNZPLDUvWVG9fAEp4gEgVNRdLCwf3PqDv5ayPmMynL8dgKep93LxHC8QNthLkpEMQe1mbp",
  "key26": "596k9HvUbS7forvJjzeSx1i6cnmmjxz8Z26pEMqFWxiMptqrptDSoidho5eR863fjtneUcF2XprVph3PrmDq6KdU",
  "key27": "5tgDxrh1gTWRPzpd9gS8bKucH727aSb3cnBuAe8cENd2LKuWCot8ignXbWFcodMunSp9VG5GfkHiRrF7KRLS7TSg",
  "key28": "4wRNvmNNQ1PRnFQx7kZ5LYW1ryMbwFBeyQ6cwHszCgXjSUqNt1TWvVb3yRGwVdjhJb3XhdpLZ4T8Ky5xQKAVSzdc",
  "key29": "5xTyN8UbVJYqJF2YUtZHxnopArWJMrzGVPCcoHAaSTDUa6XQnrnHm4tZCnQNrw8rMKM5HW9DiMyvyS6rEgSM3qaM",
  "key30": "LSsgqncAEMM5mGfRyUAKR4e7X9GnygCGMkzr31E1wnihxgqQqDnC8YcrDPZLBo8gDPpJmQtnTyWrdCJQ7mMJ3oZ",
  "key31": "3N4Pr8dwsSbuq8W9wa222zcEuTphziya9VRXGW2o21qXr2DSyDtYHgFcXk1q9cYb5QXmYdXqyC6LukDMVEskdqV5",
  "key32": "4uSHscdYGYLrhS8fXzRDdgRVyoPwTgjo5LeydKSjgpKeAAMSyFgiTkaMwYyukYA2wpMAHyfxy2M9fpXixorQRnrj",
  "key33": "5wN1WQocWDTCs2DJSjMPok5PcGKtYqUPoESnCdgHK4NkqSS48h1g3sh3pDEa3hBobytFmZAov4xybW6zYRN2Jj8c",
  "key34": "4c7WupFbgkrxRzbHNmMvWWJ9BmRE8wKRKshhsFQAKvgCg8Jp9wT1ngtqooVDWr4qNY7GUNwgGPJmCQdJ5QGTf6k1",
  "key35": "4vX3xqGR581vjsjGqSmLJft8ReWjHidNDcnqHrkvXdwJ3isbKGcTKBwS3WxdNjAFed7Tzxxk4uLeG6PMEf5oxPSZ",
  "key36": "3tDBU59ieSbF2TG29vhKkyLpP5iZQYSdxyjH9b4jWxFxi5Dja31a3BnQf1LQu4v98yz1pge19Ew88xsfGkBRaKGz",
  "key37": "5Ftm448nESYATwkvBPWj24u5psH3vnhzUfd2mpYuWHM4bpK3uuUkeaFwSyGPbvk8J8wktF8SNoWdnLe1n6Zry8nv",
  "key38": "2QeehSp71ktHaux1Ye3PqSR4Cz5YmFKjcndrvkjruDpN5Cx7oy1eAFMmJGSjWmihxvF5abqgQYXPb8W9xJkvAseH",
  "key39": "AABLdGppoqduouseX5Pir5X8GXADMYRmztjUMpq5saKYSrxYEUmkkWCTqbizNkiKfaekrtJrxCr5KUgsRePQb47",
  "key40": "4Rbzd3aAGvibzA2kisKKWFQQmqaqjH2evi7zcN2Rz1iMwBss3or7gMgqUXvBHUpayXXpPv5anFSzX4g7KQkgYX82",
  "key41": "4kx8XSwYq9HsyR3N1UvQr9crKRCJP2x6Vxy1Chy3qjqtVnGgCuv2uU6P71AEkDWckwZ39hZbuik3S84TzfqvAmp8",
  "key42": "3wwjadm6bvSCCZHme8j2kn2sREHZaR2ps3ZZ4gKWpYbQtXXVdzKQsXTqBE3Q86SMBhJxfv5S24kPUCDjPicx3NfU",
  "key43": "3ZrpFNR6cKoqttY8Kov8W9ioKS1sZRTxxL2LHpbZs6toxxgA2PddDJ5EyHjJyiTRyG48ZDkccTgqnYQgh9hhYfZ"
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
