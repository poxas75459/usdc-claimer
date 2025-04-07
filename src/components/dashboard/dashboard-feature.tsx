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
    "4b3vMdnrZ7U3HMoi19UqteL37K1mhiQuVD9dCysP4oyGhwd8tasCC5i1vFhjfvcpR69Vfx5DvbHA6yuW5VhUrSMK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oDwYEALs8giNiU9gSfqfd8s5vcWTftbGeRs6HBCyF3AB5TPm4njpvv4ySvMuttd4st5RqSPnmXTRptEsCs8Zs2x",
  "key1": "4BqZLg8wBEDJ9BBcvi4zsofky1rTYPzXVvGmfWu1JDTmEtudgSxJByP6jhqUHyEG8mfQ1Jbfb8jpB3PxtthnPKJF",
  "key2": "5FeDcy4Bmxsq1hg2xi6SkHHhuwRGeb7pxhep1r8Ecwa44uWo76CaSh6Mn43FRpqs6KLLPiu9VDxYyrVaynApVpX5",
  "key3": "5zJdtZCWFffuwUQj4S6V7frVthfQQmeN4B6ofjhAJMcLsuHGnJqtV2HN2BCmFv9nDqSd9h2B5f1k3B8pKNavM8nX",
  "key4": "43FynjdmwjZZgxTCcz2EwFfWZGFSzeTK1WboXFT6grrkzUNPqHYBf4Dhucj2B5wHn1cV7nXpLQt1S8XrYkFhiAeF",
  "key5": "bsRUgRyQ6P2NjuWuMiPbCYuiSckeJmE8BmiVQPk8Q1VR8TGeW9ME5MJymFeDTFnLYBb4gfWmcGfLRPoBFvmfPG1",
  "key6": "2fNdY3z4L8KFimxtRQJqFnxdnT9qFrAj6RvMV4u5dAafYCza2vkDPMKxBx8ioJ8MzSMo1AYLU5RQLzR48kUJqX6G",
  "key7": "3MCjfoJCamFjxbwbj1CUoTPQEj37REZjM3DX3nw2WCJHntHvnmPQenBXmuErwkGzEjMvhuMpSLzJppyGoZUiSK9X",
  "key8": "4BssskSYUvGgPaHFwb4qxPWdMBCDGJNH7sFidzhu9EnUy1nbhtekwgU6BRQihcTc2T9FqrkP2pFsAC5XpsnSSwZM",
  "key9": "4uDg2YhtinE2iU18PWBAgGDxZv6FnLG5NYx5t46MLj4t8XFkjJWyiTVYvLiMGhYRPVqhaMUwN4m9VjBAktid3DpN",
  "key10": "4EHwkW3YvFTvWyeMxVyuWUruShSvDNcDBBdiXwpSnTDjEm7SVwdkqrq2LrGUzWtL6LwAZ3qz5w8yBVWuh87aWauR",
  "key11": "4rCa16diNchpg4fCkhTPnF8xdLTx3TmdEamH1BYApf4n98o2tZNj9QzGni4SPHadCTGniGxjWfTuwST9HVwxCUPw",
  "key12": "5Z3Cep7eatkaZSnqmUn16Ry996B1DJYmBC2nW3f4LUjpHKux2gGMAsgthitZeqGvxK1bkuD2EyvuHmk9nC3iQVWd",
  "key13": "4fs4aVsihY25RTCeLsFEKusUoWb1Wx4ND1e9rocFTvQ9DDXu498H2fcCqZfCgWY4Yf2zj6NEqunDJTJeByPNSkU7",
  "key14": "4GfLSLyQttQDvw4iBB9Zj71mtGujPbwCZnrQkit7GbHjamUdWumBahBRMoxwMaTYiHyxBeCb42wyfs7NAXBBu3Gz",
  "key15": "4VzmH7KYfCAAvVp4uKhhqCmHFaiQdCdvBsYpwYQmW2paJmSCMZxD2nAa9jXTfPFkHUcBtBxwzECCqL6BZcjVqJdq",
  "key16": "27gCVw6wem8KTxaWWWUSBF5djYyojjqcZSwFgvfQxgbn3L9rzsYCvdYK9Hh5fj1xbRPcZZgKSPpq7h1C6M3L4J8Q",
  "key17": "5BGwsuASU6bU7znXtxEQd22n1xUU9RKqUvJFYJSe7mm3KxcH4xvH4sCTViVowEcA1CLmixnstvekop1kZmW5YDnK",
  "key18": "5PaKmS1Mvw91L4BfsQMm2FrawRCh4RokYVdkSfMGYiJcRBgnwoNd8conUj6J57Ao2Jn5qXXXUjcFcQLuaniDhhJx",
  "key19": "5amuuNkPiHv9movrffKeRbzyst155gfi5cXf5abDrvqtqe32qaw2M1kQeykdubXvg7SCtfCPi7tQdiPRzxyjzXuS",
  "key20": "5o8U1uipRvrK6WhfyGcrquQzEgziLRRPALFNhoMkDu3MGBYgAcGDSwe92UYZkjie764bpig3ro54FBKYknXKmeTk",
  "key21": "26UPMKpq9pedtUMjpE9hDPLeusfUfK1YNzsfRojpygpigsdyjcDkgPCDvqw6txYtxpLFZ1uSaHEHkp7unp5v8iJp",
  "key22": "Q4MzMYZmeTfSZLpLtDPfwhSZQR2enm7VoYz7Mrsp3N639iKE4PEVJ9WsRgFJmCzM8DuTKzDVFem9nD6Dz7399V3",
  "key23": "4vw5MRgKBguK2DMvdeUL1xHuJN7gxDKzT856yTVbMi3wa5UUTsPo4UrJ3pzLXhXAdG3h3NrUuH48MUTCa6TTnGM",
  "key24": "4zPJPQPCDCgMavdqcU6RTBfdrce49jHBaQLV7Y29MiwQ8Jm4amGgw4yR1UQXeRyDS9ZKJ1bRduURjuZTVaKyQBzG",
  "key25": "43gsLDyJ82XWQid8H58D8rD9mdDjvVdcDzYtopJMSg6jNDzZi47x6DeHzDsK4dWR62bde7FuXEFucVpZ7gKk9Cb",
  "key26": "3Vq69RH2wL54n3DcVeUcyrd5amZqgi4AbVWMtj9L6XK8vnCdsip2vYg5HuRDncVcyoh4ZSQM8FMnsoREJDYug9m5",
  "key27": "4LppeQUKjYZtcxJpmRKjSSXyCB1V3NB35eGfwoREfsKiGUNZZPAoRD2JWGg39kB6KFhPpGdXNi4KB1r3wB7j4HuG",
  "key28": "5hjRcj7xSogDxk4FmhxLWBBdv1zFSid1nSMioW5VLJUvct8X2euoAR93BUf83vTBQWMRfmvNXKN1GUvberXg8Cwb",
  "key29": "5SiPZ2Z7Ha1RnEGC5aZy5GyKaaxfBFN8eK7BT1sJM9wp6CvgvBo5TmXsPkcpJj4P37hKXS2Tp4AXuBoyrWndgmif",
  "key30": "4Ex4EcAfTpswZBk9dLXeKSTr6y8Man9w8UZsfxPfzMRsKmKJYJ6zt3tMs3dt9vynh3t3SPawtX4LTehYTW8amZ6J",
  "key31": "5cpVPuod2WwamL1iKvRFS6t3hHtjjhfXsQdwoUYwe4u7pJpTV4qVPxxuh2rSAWFSMKJDpHwzvqCAeG1nx9je4Sdr",
  "key32": "5vdMzdSv5WpfZP4WZHufRLq28Hmt89bmnm1mBBvhzBKLy4tymUfNnVQn8H4Q2cFNVFEjwytymFwg5DwGRfg94p3o",
  "key33": "4NTGtSTnc6PKBPH8UPHkvDEueR3fiFnBbhxHvNeoZwTwQ6JkHTLMrGf86xJVjTJTNidJxd3hrYoMQoVDYcqUhnGM",
  "key34": "3LjT6gzVauxQcSUa7dnR6hRBpEvZHchUSXyUsGcaFgv5JvDAA2WaSRt8JT91ngvCBjHfQztrDn3MiA8TVM1ZXtsJ"
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
