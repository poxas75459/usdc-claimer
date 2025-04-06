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
    "3wBL9zVPADaLjma1ZHz2yEdjp6eCbPjQjD1iCgdK6nB785J1ZXQsY4RWaNchxbpyqM2UotKgCjwzm9F2QN9WTB9n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3erYzH4VVatNpX7iz3QAMeyWNfMXH9YecxTubVQ28hPR3sdzFFT616SxeHDbrSorvuDKVAsFQr7VSL8Qhmx8ERkt",
  "key1": "4YJeCFPs84VpFL1eZnCtimhJpnhDLMjk4ghXVHdexRrvU3eq8KvDLQEkQtc9vyKkSuyQ35i9MfwAU8QBqAVMEjEN",
  "key2": "emFpBCDVw3QM47ogeEugs9ZeTpQtKH9wX3bNSmLfJc1jRVTpfvsAxihDM183KYEaMaLXVLrumTuiuDCcndXK19t",
  "key3": "573FspGYGSLhxa6vcgAUiaurSvhmqhWUtXfFHdscf2xr9qjaD1T2v9Vm1D8RWWQbp9qMaUk1niXCwD96EC66WzNa",
  "key4": "4ZLx5qp3LkJs5dRqcAijERSiACQBiMb8hSrfCEj4orKncmxXWCdEMAsZpddb7xBf3fuxujzbEEYxvj4Td6NH7TEj",
  "key5": "4F2pUXkKdHauW9abGTRDhBrMdEzCq3ynbEuTA8esaStykpaRqP6huCYTeWZ4fE9bitmjL5jh5RwiDnXjFVUf3gZE",
  "key6": "53sCUiFxJkrofFAhRQPUML3ihXfwMG3aHKEJxKozswBHZebuJAdzohUVjinpsgtVKSxcuLR5XTqTnjsoqHgy7Hmc",
  "key7": "z2TE2NU9CAVJdj4x9FNRNLF9hvhxpoCa5JXD9pd1w7vQY5cqwqxZDsqgfnQT1kWY1AyoU1VgdTpcfq9ZbYX6yBp",
  "key8": "537rDBKmw9Gn6KCBmwbgYiNN6aeufUgxuubjk7GrXdpvHpcd5TssZibiJkkWJgxAXE12QB6ewcjWmE8EsoKWwxNs",
  "key9": "3neKtZkRFtFS1dMNZ9iDcqRqcGpd2DxTE1gKe1xA4iDfUqDDsTPtbZez4oDsRq5zEm1RWdjEM52sVwpDTgYUmn4g",
  "key10": "ZG8TQruea5UCCErY3RHAWMrCwr5R6NzZWdWi3yvDKKeQoSRXc4LCwNmSraXmYVUj7Gz3pE6jTr4o23cb2XQhaJZ",
  "key11": "TisPgK5yot5yuJ4KoHRCz4ZBrHQC26dq1ntW3SrrotK3BEtftXTtGCysqQ9ozyEEdRDv1pCYErL67Sh8448H9j8",
  "key12": "5jMnQt1ZecB61kfVkBWuhZr23Pp2mP2MP275xtyHTJWq5MTRsKM84FVbTon9H9mSTeGtsaqXKXNzM92fDTu5TZ8u",
  "key13": "5DnW7wzHfbvkbkamZogM2AtVZbSFwatkuD1gQDWVQ6GMHsud6SwJvEBngTHrMQxMd3T5Wgbnb8gDFkimCpL3PiV6",
  "key14": "4SkEP5MkdgPyb21SWKknrGNaiTk97C2A8De5VzfwNmGRhx58TU1rNN19MvKfvpz13VHDx1e1Yc7tCqsoPpJvPVbq",
  "key15": "4FwQumcJ9iAuqjyjqKazXwxc9yxmhaPQqhocNaFA1q1bD2MjY8xNAZTHv79rKmhFdCnkdKrMudVsk4T6qMqRPKPm",
  "key16": "5BzKQVMLbCznMUEaSYAx6GqtufEhpyacpuiZMAqeiipT87WskoVXWuSGaYwSdfic2pjeamDyozxEzJnNbrgbEHSx",
  "key17": "4zkdfLtTCPtpKxLz32eR2KpH7Fuip2gGqKa8MDX7ADacyFTRV5j39i8JCK16WzbxtsDF3ewGUXDs91QAFPzBCZek",
  "key18": "5pmdxD8ynY5vBYcmfhJWevZkvwgunQDb4TLJ4miL5jFbqcy2AgpJwTb9uG8k7k2q39CMuJcjkEwjHFpo9Wj1WccJ",
  "key19": "qvdzg7vR7bgqPYxtuv58z5pVjefzZwQLJYr8Rr6LEyoXrqSFZagW1zpzWLmfrBqK4ushdbp587ygpiwrDdhNk41",
  "key20": "2SES8y5grUsdCgJBWejsTo4yQVQFqTaa1sS7nUGeZNYpW3Mqt9ugBhPosoTB9BCgAXgFFAdWx84fBd7pj1grQ1e6",
  "key21": "pHvMWprvT1gdn7Ak5rr2XNCMhYdALrRLaF2Eyya3VfEzriAs19FizQDPzvVD9LL95XgT9CJF8TEFhA99F5LMqfZ",
  "key22": "3PUW9xpfr9KL5hrg7se7LGmoKM9ePCUW2QmhLBtujZrYi82LpWyJZYo6orbMyWFpE8izjygbBz95x1vHDkFLKhVK",
  "key23": "2r2WxYxsb8v9e6CvxXtxQ7Bdo7hdF2uQT5XSjUpQovmdJ17D9yJgj4LeTNKABhVNXLXF4L8a4B3Pr19vzfiKodYR",
  "key24": "5bjpzcyLHKaFz6Z67jfnMBBU4qbWdZCcssAkfsXRWwHkm8kAhwGsCFd7NMLzrKw5JcZYdjC7UYB4bfA934WAKdFx",
  "key25": "9JEWJz4ahpJPF1NxdCpnGK7MgT7XbcWkrUSTJbVySTF5yKYufu9ntvsbXVp1uE3rKz3rovUjPJiYUhx5qQZxPf4",
  "key26": "4Amy1JFTKveqEH7TbthFWNTmXPxCFy1yJU8kRZm5bUZ8jkLshY7Cb93SHtKpZvSYVUwKp3PTTf4BgYVMoqNCguNa",
  "key27": "2NHiJo7LduXZMMjiVFnvyYCBNE5MFsaaUWW2BDx1rSnEuzGTXt5fYb34oHFN1Wgsxd7ztxVSfsMEpyG4NQaSqixj",
  "key28": "3YPPT5ztGXdAJi3GW9nr48Dcpv8Y4SpypZLwGLdmRFLGYLYC2FNoBzKEEyuBGZ6fNzxNoAqVKbjPfxQWAAoUcVAP",
  "key29": "RLW6otdezMdVTCUNqTGNSEEpbhxxEzgm6TAjp33b7KqUJsSFSAZexVbw8uueY7PC7AvAGqaW5txaMaRAQZKTcqo",
  "key30": "5C4jgY7Y2LZerj95RrL4yypkQYtmbJRD4TmFU49Ddre4XQZpFMVTADbgW9LPxJbgAY1iaafyfXkrvcGpMb3snCa7",
  "key31": "3RygLhdcHawqYVqHgtBgLE83FSatqRBwntgo1bPngEXup44yMcsXd8VNSWVD2M4t8usbPpubTU1NtJ5vxB6n7K5K",
  "key32": "26H4FSFJmCEKJq9qetSuFHjBAHpweR6RLSg2mKipMRhS28fC1vEcXjSdwQaGhyjDK8KXRwaNbyQ3pFr7kdESbT1F",
  "key33": "2Eq18RbivWJFLNLoMQKQixkJax6vmxj2FsEq8V86NBRD2onVoqgsDwkfhGHAQCjEjUvoL32vSe3iXEk8KMrv76eM",
  "key34": "3QrLRbYJyYNrE3GRdQHBDNpVC4wVb1GivNmeJYhDGU1qvrmkgeh7xNBnbeLPmzmqSLP3qsmoepEtUx2SJo3ivWk4",
  "key35": "4jcaJqXiDCSmYPEqoAHNBDe6uiuG8VvxAVsnXytZrmojqHKhyYna3YRfkvJzfyL14cEMRdJpsRgWKstZfCkBTGZj",
  "key36": "XDRqvaNN9Sr6EcumTx23UVLRPJfuYKHS7yUdTJMdrk1KoaPkGFpJVYKwLAvxtabG19wHteJjUrvWNvCGraTT8mG",
  "key37": "5unQZW9wtncMB8toXt4UiraD7x3FPtzK4xXoWWDKTtsWTDxZAKX1JKgqNECXhB5mhujovuFFLK9kAFM53pBJ5Tay",
  "key38": "58icR1A9c17irEGU4bgvgdTNXpqruWnrqcKtWSk2VNz41EXihBnCj4kKnmwhkdGCJwaFvZevbeVSSxyqEEw7YhaM",
  "key39": "5e1T4qj7Txreab9X7nP1SzrVbgUvDLkfNdBek1sNx1VZNHEhHPEQh445K5J2iJaBnqNGPaB1Jxxiy6xBt3aNc3Yv",
  "key40": "2DDm3KPCFmb6pfnjTu3tiF7Fbzcstt8o8FH1frF4StJ2CjFh5VyRvEKSbtBfV58SACfKCQmiLGm1sij4xbNcEp4U",
  "key41": "2vLSBnQhZakisMU6YGD6kSxHRVLcABiHARv33pC9CRMLb38cdh7C6hdPUWNb2jGuFGY1DwHVXLnC4VFvXJZmex7Z",
  "key42": "2r36dAePSLUSL5SpehRiH84CyYoTrzyFVTS9H8ChTxUGQ6tnGSJBWn4QfTyi7oNrBFVa9uwszbAUZ7XQR6mtG8Zm",
  "key43": "47dSuSR4tsw6sDLCUupGVgBuVydm5kRhkAD2mZajKeuyq44MhfAo6E8HVtzZYKYMqvH9uWjv6sBMwj9N1Q1E92NJ"
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
