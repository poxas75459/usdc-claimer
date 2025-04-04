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
    "2dUm7sWFKTu1NgNFjjFaVH72s6doysYeHk6eXtvbBvgLcEmwZi1FQR4xd2a3CWG8uEq9TFCEqaq7WyW8DMyuacNJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HvCyuSY9giGXvmYBBb32QaCvMK3bnRZZC2gQshfGBd3hUrfdzReJ9KBtXtJpdJk4kHmkk46gG7h8jg6XuMibT7s",
  "key1": "J7Y81sMLMF5NncQQfLXkLF8ztLvjeNbm8Ca5kz6b39nAEGUh58CNtdQb42t25AeeMYroeK67M1ac8MRPvnXcCYj",
  "key2": "48iNEqGCVUD5NHaUHKneVk1Qas1r2nHqMR89g5Cz81kahZKFhVynA9m66tYnX2brobm2CUokA1PifYTsBzhjzsyy",
  "key3": "27it3g6kKYd76eDNupZTjbEtCun2PNP3WMjWQsNtoPmnGNdGcGD82s3jombQ2DnAW4ui5Z5gwpPZD56FuY21F3yY",
  "key4": "4mfdYvyb4DPignApwL4BSNHquPcNEk58C1MVa9nrBFWv3UJ1HxGzS247d7Cy4iuiPJPiSX38zPqwzf3qZA2nFmKD",
  "key5": "FvH9bMCpadfFfWBcBRBru8PwSJWnuBLnY5mNsHnb8aqrwoNoU9SKUCZgKHCt1LTeCwCNfHttGb37gQVYHhsqSkS",
  "key6": "2NR2rWzBHMh94Ru4vGeyfDWnRTPhnfeBaaNsSKd8ojDiCk5aPQYFnB3BAZP14sGpxnSN8jcMW2wBMD2MEvtUXFzC",
  "key7": "4oSMcqg3VbKRRCuPKe9EFqBKgK9CwzxjfvsMe6dS72Nfrixao8BRp9m7YsGuNjPaHFcYdwt8DTZwQ3oEs2ro6FXd",
  "key8": "4asEN9mYQaCRaqAXYDhMU8nosdwKLAGSKY4hquXFU9Ni2ujVtuKLXgHUxLKtJRKFmnbJETSsJDfSD6HCttYsG6rK",
  "key9": "4CPvV2XJVZkVmdP5EE2PFbRW3gAgorZWCKPcLQXjgLaSfBACzEoPa1rNrNn4opkaPRaN9FYUzhbLQMC6LXrUzyZb",
  "key10": "BDgXZBf9JfEuUqLyK4nd7mJ99T78GevARYTVWQNoAYgXgVU7biawJMr1jjXDFDP7MV7RFNvHvUhTCu1F9HhygLc",
  "key11": "64rdwBUPQcz1afHJ2CzQuGJcVYcZpBmi6HMtP8QxoCjo3GeSbXNXv4Jfb6GJF7nqHNB1v1P3tYNEiNwrdWq9JmKR",
  "key12": "5H3opxq9mXsxDNM9STzg6Pba5ykY6cYdgUt9tSL3mmsNs4nXHBbFAqecKFdJHz7QXP4ghWVNgTB6RFU2pMKzjpuR",
  "key13": "Hde47SHqPGH2D6jZ8qN3bWRFyTsHzuQren9QN5SnaRaKNW9Ggm7JawfsH86QmUxgkwoFCQDtaLXFCZmXomuXAWF",
  "key14": "58Z513oQ1stTxsgUm6vmi8PVbRDBG89SaVzcX7FCTJWkWgKARCpsHe5cPGxnsiKtYDiQAWatPVZ1mWRSL1ATuAhh",
  "key15": "5U6D4TE36eQbNBeGScd17fQEPtNghP9a52gADbSKa6axm4e3a2NxgsTDkwPnQRCVSqV5aJa6UxAM7efnRVTm9DSY",
  "key16": "eV1xsjYNzRCQe9tAFT9TJjNwton24JREsnxSYezyX94JQYkfcLYPvpckb3EbHQTUG8h5DVNuFUF7TnkN6YTV6wz",
  "key17": "5svWQXtMJRuppbpoY842fNJbaV5WkuDVNNeQwmXbPbGRYGdMdC6bgiKearqfRxd4HQ7q8baunem3E1okxc6kUTRp",
  "key18": "4ra8cnLzxPvUKRehye4qycuTYFM3TanPcmUgbjHJUd75kidUZnyhuDwt3RWeXGKKn111AXEALZ2vy7cp8NN9BXR1",
  "key19": "58WZVDLftpb2s5tzhnwsyovYv1QVuxqBEfg3dDeHk8TwCg3fErzK7pdBpNg71wo2DzrwkdHwWnrUyEP5k6LVx2aH",
  "key20": "55bpqsZVy6eFuwiT36H9cWurdysstqEQNAkUYLtyzvGA4QqNqUe7v5hYCH8rTxgCeaDAsTaKiBVeZMZHpdAqqKme",
  "key21": "44WpuwnFfBb3o5pbjHtpKPoAc6qNCPG2HDHLrCEy7289BJbBKvzDgAitvUg2gYq2yZDhdqnJNNXeQGzcQyc9EDhf",
  "key22": "3AErXtnjqah75DTkwfRuCawHPQXoWoGomp4VEWBUd1zWBmEYteNUTH7m5SkW8xPEnY2uadvMDof72cuev4eBM7pU",
  "key23": "3QeAduypnd3RxwJpYCnFQ41kSXNMkVMUZKyMLn14kDxz3GYSp1TivNrQt3KE7etnw5ntXwuC2d3bzVvcCf3Phwt9",
  "key24": "2km4rCi3DGdTpSza19L3BLBsjjMAzwGuXNmE3hEctNgymkbuxoNaG6gUWJ4LFNoVso9SY9zbDn7zpQEqMNaqEf4X",
  "key25": "b1J6Sne1nRC6JkYRAjdoWMa5CAx9quY8UqQSBRcYfFqbRNTgHPnJvTZnStmezwNJRE9yKetK6L8f51vRyUKa5ua",
  "key26": "3CemndpqkgLh3fdvV3s7aX5t8p81Zbbxc2jyry2JmgRDWvpZy1vJE9xx6jJQdVUC93x6U8hUR61nBYN8yhQhtmCE",
  "key27": "4APCU8vF6onHfWJuMTWfuedkU8doDz21yN7MtGAVaZJXxc2VNL3un78kZEkW6bf2pUqhdHiFNFf5JoGPwg2cvgKo",
  "key28": "5e2X4VVLpP3inYWD4zL3VBjmhDXeEbDKptkh8DTYxUJb1j99MFsRmjw3m5ujDELnFembajKJCNiZLsztgb1BPbjQ",
  "key29": "65nPZ3DpugRzgMg7M8gEMqaLvDGYL771Aoh9YMBgW5JbeWrrRiMH8bFy4DUMTZGsR63C6NEvdz3daDdQvLLaq4m8",
  "key30": "37Z6mfQtmaCkcDkHe3bn6ajnfGxLh7H96BzHBf4CC6qtFuz7QG3TbseLypDg442yEh1rC4KJycr1aTn1QL9nJbeA",
  "key31": "3upriZBR1iiyMn51XiMqCiju9iAPW43EB9aTRfyExsyFE43GDweZuxRKL5BxNqsG6imVJn67AJB8iTf87mncTRQA",
  "key32": "1Mk2zfLci9g2VKByZYb1QL9rBQ5dnddngrr9YZ6XaqtqDLzndi8v9a8hA82BXaJHY4gvjWzLq5NzFcF2WBb1yrt",
  "key33": "4Q7PKZKcQTsrqjgNWmp4ZvRHu5QG7fMEaTKn1Cz6idVHCDCgVhBf7NYNjr5J3VmFGW98Jt9pc1LUk8BtZMncmJMn",
  "key34": "3GdNeE2xFkLbvbrGptssRyTzTzJLxbR3KtayBbdLyvxXraySE5X97k6PUnGVUrKEiACTUHoNGvGBW5XambaWRujo",
  "key35": "671uHaBSHu1NAojhXVeTPiPTHKyUewFU8A44j3WSBp3ksaCv2HrWY8ux6V6MPNoeF6EU7jx9oyBdnxoDcmESwaE7",
  "key36": "2RdZwQNeLJvUbKu8meoBBCHyG6X21waKfPDG81xEh8aWMxrrZ1sCD2ozegxWKqVjafbP6ucVuxVJH8LrErsCLEY9",
  "key37": "5emagG7xB2x7ZHxdb9rgMfcKtTyeMVWeyLx61gaN2u5Sx4vCt6YEGywVEuGi4mZmQXgVrhtEqxaeSaMTxdSGkscS"
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
