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
    "4jrgFHbdUmFKhn3iL8barB3AzBR4b5a5XQDNRzounobUwvVFB4Byf9dvqW72yx4eTA7ygdXT8NgnMEdWpnRQAZ3S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hVmvZncsuVEXt1h8RaaeHx6nvrqqn7N4q6PfBqNVG611mbANqQXec4fu71L3UqNeNTgqnoZezPgqQxiQByQQFR4",
  "key1": "57YEw8L3o5TaWjth71s8mXSMX1vd57tZQpvUXj9Cktb31Xeyzm7iLACdWcWaxDjWmDUxpZZS2QLRNUBBqA3fY4xs",
  "key2": "2r5ugUZ3WksyGwjzebY2ZbehfHLF5V7tJUYb2oHqdHm15VNrSvxtyzHvhqobZ5r7MPx8eBgGUwHNFFc7dydRvrw4",
  "key3": "5Ep7k3voDPVVm2LtF5afD4rJCSCdnFi2tcRSqyereZpLutnZ561venAW79vJv2XchUL6GYeNjm85F2oXVCx5JCxz",
  "key4": "3z93r2PSgXKKEhusa3hd28G86idootPB8HxeFSHRUx2TZ5x4R4cEHmq8JV1vTikBKTUqJ91BE4oWH59ckeGnJ1Wi",
  "key5": "4k1gWKn2mxRT6XQpLLHjaCCasJfhgvf4ioN1Z9oSEHdZtHbtGcpAa2on3e9ZG5Ab5JYsrGPAV51f7nnR5tGrtQVm",
  "key6": "66S2kLvpCA9seyafVA6a3S56MAjGZKHfrercM9ohNLgdft7PUkTDbDa1R7bygwZSZQxGNnX1Wt8PakcGr8cC1KHj",
  "key7": "65oGmrEWoJvjAVhsBGvJZ9DTgbuSjPcp81CiN5CRRUtG3cERrd8vHLnVhdEAVjGHoQf48crjNzTDNJE5eSDJ7zt6",
  "key8": "5MTZtmiLqy6p1xofCoFYvhse12ku6RHVzpqSi7DTqu7LNf8EmrywzC5EzZMKSZWctAMGLLjBaZccrV63XsBfH3Ey",
  "key9": "4MHgTXw8XsMzTF8GeJvzgV2G6R6QbsypNmFoQAMUzLs7hugRJZW8zJnjTpne4f777AyY5WnjYjdrZPHhfUZRDzNa",
  "key10": "3whc9aK5inkGkhBVpKFuUHZG29d6YiRb5fuuLjFGuc3W8WHK6xcR3gHeE5y6CVL4wCXv2usoGumF5EpJ7iC3GPid",
  "key11": "3HgyFPRmaBMDqPHjyFvivHmxJGcD6u3weQA9cerStkggL2EqPCr3FxnCCqCofpm4iAfBWy3hYvpMKKYYufYJeWoA",
  "key12": "YpeRLyKN11VvppvJsBVv7HmNseN995b2sk6JpJ41Xf6AnZ1d8gPcKEz4t3gcyNnP9gu72sKt1TTiNhhXD1zZABT",
  "key13": "u4fmDfg7jZMjZyGqpfSCP14unnVtRDXfVygcDB25DA4fF52RDjUqnfxRofgoMiAw1qBRNvHUtZk2xyw3Rb3aZeJ",
  "key14": "3rA3NZhcesAFCR9vEXJn4KX2hjqzUTivD9J1Urt12voKqYPVLuNFuNtvKYDNjEQngLkF2hz7Pz9TbmzaxbtZHUp9",
  "key15": "5hPxh3tvVNxdgS9ZdbkC62NLJEj8LiF6KvgCsSzuib5iU5FF5sucTVoM1sRjz3Q2SCjPf6KLiD4pQ3kC8vWLw6wK",
  "key16": "4TyLreEaxkgCpgCy6dZPzYPRzN8BHZteb5fDHsvb686fUNzWUPioTQRJH1SLVY7f1Kn9vDeuxqPHKE5u3ei9h5zB",
  "key17": "eX75LdpgnxE3DBzAUQDfNZ9yoK7P95vui676P8hxCdk5BeaYvo88hmp61UtgR3sYtafsKKPA8aYoi8E1CxdfNRr",
  "key18": "2pjQsfa6jeHT2xcaHvAZ7bZnKt6uuzsp9thxbh95o7tZJ75Vf4rUz5KgVxGscB6KqiDvkju3rXiUMKTtoBLvUni",
  "key19": "3T1KoyGRCQZADu7bcZHGAVRmwT9nCNEzy3oFvzXxmSMXeLzBUZpjvENVXXuWcm6oawvUVEciRuvQr5orNuxtzCGF",
  "key20": "4nquLnH2W9GJQA8dKJXXJwwookf4WCac89hD2mgUu27sP68JxhZadwWWsTd51VP2QoBG5gXCa9E8pqCYR9emUYRT",
  "key21": "5jt3kWzoQZM4XSELJLfxhTiKouUNxAFvPUbc5tfXDuCzGnvbkuAaSqc1WEfyW3cuxdgHTFUYYerUZ8rruBQQxNvm",
  "key22": "5yvgS3KcgfLwwFvjq778R38zPVhNEKi8f2pnF3uoQfURGnDr9VTXKcaN5NkmH2dAN6Y5D4moLBPL4sDSzVtmFXMd",
  "key23": "3kGAvGwyAB7uGz8NZezSrjJ8nWEXi1tZos8chCPsGffihJFPdzdQJ5xZEfXLgub9vPET1ZpRisnNh6xJEnuRC1FH",
  "key24": "sRHaujfZ33AeWSrDKxVM5ADtKZD55LqfEfKmEJHybpECVE9QhGNhUDcErULpjZYCMLtKtRZs1YU1CeFD2s5LAD7",
  "key25": "5khRabLx7oXgVFkn9PFUUDMHkNtCAg5vWBwM1ZDw1Y7rKbodAQadkJC8f9WA6KJoaB6HwxSnAAgMvFZFcR9GX8XT",
  "key26": "3astQjyymM6hgH6BfXpfa98DteSUTcw5qGavhcwyWw8mFPF8C5gk6UAGm6APnUXgxaHiWcCtrRzoVTQhkTHdj999",
  "key27": "uznEThcfMFJA6DrjePtTUD9uB61kTVkSXnjfufmNUTrWx9mmZuLjjcqDnjviND5L2EPow2Gw47xBXMLHziKxsTG",
  "key28": "7r88xrVAk44dB9pd6FSbhWDxkmyDgrV1piGf3zjaVmQxZFGS4QpcuQjpT9SbzDtF39tqt54qC2DB9XysEvBuXsh",
  "key29": "pSrQibHYyPKgPBZqKhm1aYQZuV8RSgh2TomceUYKSHLHAtsypVfKaP3XjXFAFP3g7FkAunLERZzQbSA4S5Bfofi",
  "key30": "4S4iVLVnhskBfHGwRnXPDpQuECA5aWLf3GDeGJuMXYhaLoYPZz4YeiBgivpMSEAnZG7oowYdbh35zAL1QwyWutEN",
  "key31": "2Up2McfNRyADG7tCv5SGCCuJfEE2MARHoP9UjozMMZ2YD2CG92pqD8f11JwCxatMK9p1ANhLEJLPeqRKjkUu7M59",
  "key32": "5FzxB55prF3L3qGu1Pmo4DKb5ErVAcrhgxqQBDgBLHPLCwk8XJiombf5RwdiFDGD3ny4BA8HBxZ4UmDW3mS9zs5o",
  "key33": "3hqT7Pm93bmJH14KMhyTy4QSoBEQLhPMgo3uMX2JnuDWqSWxaEJAqWBWcADt8Dx9J3GKbXmQ75nBS3dUXKBTxpU1",
  "key34": "21x8NgX9kZaj3yTB2qcpqwVWQMwNQCzeKxkyW3Z5f6abEj2MQ2aKLbLwFw791FvEsgp73vVTro1WafwznDqwR6vS",
  "key35": "yWjpuLXrrTvxChXaqrP2r3BwmurSWfZSPeNFbHgkeSKyg3yGdD5uP1hTujUVAX99Gay734ywUpeMfkQtDZMdEzo",
  "key36": "31uYXVjzH3ifSpWTKb46xxe5WyhQqHSKCbH1NxqukmC2pwgCx9bqQE11tDQ4DFwjo3kHPLEUZNvwYSgiJhYii1Gp",
  "key37": "2h3Yqmub1VfnWDvHgptKUki94t4pncRCLn7AEYz7fN5zLajQJUC4mwENCAwPXxSoroAd4U9QmjKUau1fR5DaGQq4",
  "key38": "234GVcvHFU39PzXU53R8jSf4ijqtzaWAHWDw9xUe9vDCPUqFtsq9FxUCdcRhzuXsTEt8je52vUY5CYBDTYVg3Kng",
  "key39": "4QpJrMebXewTWVxJBNyjbELojQ7GwXdHY4312Zc91y5y92dtsxMXdDQkwMyATsv84CSfNCto3BNWnWu5GW767Nrc",
  "key40": "2zsckHs1a71g9r45r9hsEZrSewpktcWBMLwMws57tTk5RBExvBwhiuUCsiJb6vsgGpZEVH7zpiHNheQfdqWRbN6u",
  "key41": "4FfKNVJjZjjoSPRwBe2WTEM7zePZUQ5KZ1nUe7duKdRkv7TQD9Nf6gPoBj9bRJvn42acVWSTQ38hcHEefqoes81x",
  "key42": "3La5p88BS6V5vXv8B4g7AG1Ry73FjBDMAyZP4ktqCz9u8VPx5Q9EFQy7NdGyD7NKQqVnQMJWNXoXgVKJm8PPHydD"
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
