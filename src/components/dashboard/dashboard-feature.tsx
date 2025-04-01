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
    "cBFzzcMURE2CAMKUKY4hjsHYyGButQUtcigWQjWKX9BqPgAKc7GpwuBxxnJVXwP4oBjwM8a1qbZc9L2ouX9osaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FDpHj5VvTykHZdqeHtPThTStf8uhFaekrCMrzoQxah1mh2xoMu7AE6r5uBsGyHMMkdqeFogPmaXzUFgHUSu4kCd",
  "key1": "4CBi1SvshtjrxVKkZFgs13idLAHvdGBy2E1strKQroRbcqb2WNJR1jixSLHTR3PYqAkDVdq94sQVdKNaojnsFKjF",
  "key2": "557p7Xta43PtTZ383ts7z8PpupCYFDzcdcZiGXeXazp5AASw3mqKAeY1ZgT6hCVhFqoKVwY2W9ec2RhRnp9gPWHA",
  "key3": "5x1tg64Lfpf51iDigC1xWhaDrTq2BE95XRBxMVZjWgG7XEr9L5Z3F2FCEWgpGU7FFr1QKSgbpPVH47itGyzSa22W",
  "key4": "FYDZBHTcFB8QYf3xmaSoFSEF9soPMfQ9zGkuV6GeY3NeLBsC6JJMdpWDWYGEbqkyDDDE2fBx2cqTiWtw7AJ6bgd",
  "key5": "2LhhAXR55RNWSKtPX5E7Nd6tDfRXEBsGERK3G4d9FuKwKC1keXR2nBShPZjinrS3pEBzDSmnXXMi1Na3Fda2Z8BQ",
  "key6": "4B5AevJ7TWcMNZToZ6nESzfJNavR9RhFkSgX6MWfBtQZQvJb4s5e73gYHoF4zx3eiccE2pKZ5kharL5sLaQwmaSv",
  "key7": "tYu9tXq7ctZmznRqGKZWcd9mKaB6CKjQbBuDSbrrgwW3xVizvxNH7iWjB7jY4RdJz8uj2J1Jye1smmAoLPPjs4q",
  "key8": "5pN9TBh8NPk1hucwW9G6HRQ4pR6oWdMJUsWAhtFRRatsrpAXz5GMgZppYMmgLnxmhL7CYCA8VHRuEjFL8iaUm5m6",
  "key9": "gQ3hSXgyaU27RKLQkBDaZ5CuKyy6E37GVRKgcWM14CHpdeqhPbhTJw22iD43hXa7LRqFDRrmpFHg2c7DeMWvBqi",
  "key10": "5TEEAWoCUkMFWe28pwu4z5B1CPGiCtXk6Jkk4qTnee1SGJn3L7Z6EixnHA5GjVbYKaW6p9d5RGqs3ALL4ejobL1",
  "key11": "2hn3RpKE8vgZGJH2sGoDaY5ZUXBkgKdcrPGccWgH4VuU8tsmPGZLv7aSqCoFCyz46PHAe7hTUmh2eN87PQXrRvuo",
  "key12": "JFv9nEL94vKFKgh9zCqiPbDKr6LuGnSQnFznkxySMDo4GVW3iyP8Bttj5re8EsMod9A9oxnaDLW4GyWdt19SK1o",
  "key13": "sPSsEXGbK2FVxmsXZoKECBtucLaRUSocNAKnaMhzxHTaQd31ZYJiyts5sAyYRDk5cft8xd1w3FRDvWK17A1BCtZ",
  "key14": "3DLsWo7yjbLTFS87CbdBMJAuU5n11xq6Qx2zCLJmDfvMSHTiqMvwWey2eES77REkQ7VThJKmaVj3CMXWzXStPFXB",
  "key15": "35qMhnJyXMijyKTkY5VnCdZhgZcah3dEHAPfqGKGiusj2VC61aH5iemfUxa9TocoGxdAQWg9mzfaPosspcC3Xbyn",
  "key16": "2YtkyjHebGAby9T3D5iRCN6LQTkYiQ838u2Edcb3B5obHiDAkFENEtPojDsyoqC37XEKmanKTK4i3EYhUiQxi4BS",
  "key17": "2isHm8n2i8DAdue498rg3J6vG2pTroacAXvZ6d8Yd2r46d5c4uwVX7rppMGgh2CAJaug6uSfkr6gm5uR6Miz5J2C",
  "key18": "meaRMk1NRMvgLQivUHKJuM5imB4mXxVG5xkwvnAxRTkh5UuqwKCjLGywMGEkLAzyPgu5pLBRAPVZtPg6AmE4Wd7",
  "key19": "5AtCizkwpYCycphCuoc3zzzGNoTHMK7Xjf33H4ABeSV1tESRnxVfqJ6qaMxFx7b3x6qTumRJSXQx8UmKjRrxXt2F",
  "key20": "2M89Bea7DTkr8AtZFqpnMDQMucic7kBnuYSpBqNhtmdJZk71bPmDCRR8eAUkMGoNuKpdv1FsQYRJ74ZfnF8RnjqJ",
  "key21": "2B2QjMvAtjqLxZ1DY5cZcuzpLkohfQJRRMA7npq73dwh7SvLXGs6ABzGzrqjdc4WsP74yJAx8Mbdu7qYmgt3jyEK",
  "key22": "31F3KAqFWaYhQ84tphRRKbYrb2JNSsBKhLxkCPX1VuYMPP7h8gQobXTXrRxqGTuG7vCrU1b8ummro9MzMdPhj8qU",
  "key23": "2Bx8wjL6KisCGgKQwfMsCvcozMmeZXQqfGM39ziX3VqPF8PkRJ9srpWoqnDL91f9g1fDxBuXEzKBTJXZ1YbCxjQo",
  "key24": "2hpcRMVAqD2f7hWcB9pm2NSEcSU38cnC7EFzkdS2S5zJo1VdbHaf7VetTiCNDQwFwsPvC3WdNyGZEjKzJjGzzfXC",
  "key25": "4SnyuKYFQxrdtKLNdC3WuiHx5gTv9r44qyerb2pg6kB1pkeoLNjSeP64K75Lt6ParUPaPzw8uRnahTj5DoyQnPi4",
  "key26": "2EmdjgKadFGAnM1syjmfAJoVmK2bq37JYfEBahoQ8pYcE9d5GHP5wWPYQqTXzysg9eT1KtpzxdaoYCxeot2eCuCQ",
  "key27": "2kp3aFX1yf4VB3y6gi14BtvvGftk9fgj57Z9CpdinDs2Mkfcmi4wyx4RLYvtGWiDBgWrnCrzirwRNUH7MHm8e9WC",
  "key28": "4tjDKHQnrh8AE2bVrcF6GNFBFjAwHwuCcV5ZfY8m55yVi9q7GcWRhCRQE72KC7Syz472onvpzgzFHhUJ8QCrnn91",
  "key29": "5jEEHGSTLyZYKDFToidcgvwUCsFz8LPad1Z6nMzngRmXy9CUzHAv8Pn1KYNANZpfcX99bXbEKpfhuMY6GRfz8H5K",
  "key30": "2nhoRP1i2fJ573vr1ufTFcsYEiySTQsAns1QNb7QerpX8EyuMdzQuWJDzmPH1TqTkRQwAizrRq7dVs8gMCzHxzrK",
  "key31": "5vPR8A5Tse9XhdAq6SzRamoveji1ZBTSV171hjpERwLM9v8s1cViUEjyKuMbPPhsNUPffERdJQAfBf8yKG2Pwj23",
  "key32": "3SPpb3ubGqBooc23k9cE55NvgVKNN6oDG16wrkDvm1NzJ75yipUp1TY2pFRCDuyR4mmoHBqrzLJCuCAY94qRjXu1",
  "key33": "5yhq3mVfjKFFVZNHwsNwzyofEmEUkhrPFVtoNJ7FSXcwFgFCPaktd7xW2ki6KE8YKbJCrLsgaQNaumkHmRfKJbPV",
  "key34": "61jgHmHW78tSkuVUoW38moS2jJfCuH57TUWxQ4Kqsn6CuDUPCv6EZw7YhAJPDJ2t5i3gWV5HmWLpousf7HRcKoqv",
  "key35": "3zrsVyhLYv4AX6AYbAv3MXVKW5ZnpxqZ2BFLzbwDA3fY2zn5G1pKZX4noraiVbn5CyKAmjot4RGU9DKviXGnYT6K",
  "key36": "2JfatJ8EG1Kcd7haHPURw6SBzdnLuKhSQXAFPgPgaTWpcV2UNgcQrDVmybFgBZk2CvAxNhqRhq1wa5v13dAgG9aV",
  "key37": "44SoUXWaHaGJpdAgdLBPP5yJz4ajZUmGHptf3Ks7ZccfQejpueHQqQ25RHLyeSY4iDyJ6jAPZz3G6Es5gjQUHN5P",
  "key38": "5Ja2SU672VLvHKoDwDgbD6BtQ2uZ7utV3n94Srkkvr2taRKGvpQDTN132VKmaLr6HjoaZbtXHf1Qv3hqxU2bq4rV",
  "key39": "3XyktjEcyRszoTtQvLBufQ1D9PCd8o5M9TSbrGLDsiF93HsayeeHFb3bkgV2nfnzaUt7KAYGJQnwYGJ491TuYH6G",
  "key40": "XzLDJ9ieaSDqWd8fViXAFR1vFsgDok3EpPvDYU8SUqe1vYD13ESCTnUzjgyqgTtQYnrALA3ETQ77qVSD2XEwMz6",
  "key41": "4n158XdSnSxzLWdNAptS4o13G79oVL4GWKzEMKpZZFq11Ry5NTe8hWL7ucffMSPo675CvYik9eJUFJaXE614FCK4",
  "key42": "2Wunj6VmR49cwzdcyWjNsBFaVDf854fE7KGAXqiBNNHNfoeMgzaCmJBfPcm1uBxn6HWZCCbD8rjgLUnX7UopaYjh",
  "key43": "4ALXAee3Vgo414DfS6pzPsqHjgwdvGKcQjh8RrxrR9hxjn2C5Ed3ArLyUfBQWqkzuDtCZ9xx8ND4jALbgg6YPLTF",
  "key44": "VFstQdZpeTKFqHgnkptVbHXnPYTxqbSQCPHk42VVYqg2zVVxjYdX9t2ccoDLihk88DYZFSxSEDrpQogFUJ1Uuup",
  "key45": "38j5sSnuAVzp86M3WVWD3z4fLKG8Ceroudtv9s3nFBF94jUo7JrmVDjUuQMm8VEYNsRhDU2q8KoJphWU76MxYveR",
  "key46": "4rj1YK1QkMgxDYK2RojufyXxdw6tUKfPaKMVbT6ZM8annKziwJzfou2cwCSWVKZacQn74ERqSBfkczpVzAXMQGho",
  "key47": "37ZBk4rrzVPvxPo6Yg2zRekXGcHarWqDhPBQnpjL1Br5xdUjY5hDWCusT9k5kjRzJ68CWeE9wLmhsazjfroZaxta"
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
