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
    "5BLkuFNBMXoYWYwLdJ2rdYjYrRD5G1Ct4tw6M5aH76XcxqKbeeqsN156Fg4JiVLFh5zsavj1gXBXCy35f9s2kRwS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fm5rkeTAHAPo5CsrhNSizvgdoZjVkfz8FGTWYappM7vNssjYBCHCR9FfX7fesa2XfTkHsw7gRERMk9F5475SA2S",
  "key1": "Jt3Rp7iy3oG7trukfC3hJk7gL8BcBb5RiEhz6NKvxk5CWD3UmfY1AGXYmaWzpPL2FF8hPijmg7g5MRTeQDQCkdR",
  "key2": "5onXR8zBumbDjGH5DsroVPoRTkigmnsXczVSzWHCeHi2E72ZUZRwtq2DynE7hkHLCZVmyXsVwRG3WZCvHDG3FGwj",
  "key3": "5n7aCspoCAMXRHQaBPzBChwubdX2jiBPZPQb2poQN9edrFnoEpxn21ZrdYRmR27gHtyXFsvaWTkoVCZxo3XHAVQG",
  "key4": "54pLAfQLH1X8NJ3p9Y7vPoCKkNSyV2gmVW47WuggarDVtDpWyAT2XMbFft54TtLxCAkeXP5AJ5gZWSk7WpCKbMus",
  "key5": "Hhx3FPvs5ZWYbFY7TbQ7RfbCJBeA9YSdwqWXDSSxQ791SbTT5kwJbHgyWaTudhewtfLxeizq6MSvpJxZgTavBBj",
  "key6": "wTLGZpYu9Jd4wtuMCsxC12mvQg3hgZVJxMHFr8KEdasHFA4hVzrU4Ychi6K4NncRceVaACHxh8aE6oR5CRSXhkP",
  "key7": "45QcnsaVtgF1jtEYouXxcr7syXuAhT1VmVLrJrFVBm1uhNEcWBJuW1kPrAm9oGsNyxUDneDyGggqwVEHY6r5bNtg",
  "key8": "2eF4zGZy8fQfGvSriMFZ2dAozQtJfZzwogX4M1373pccyPQiXxnxp94TBLqorppB8bqXJUjoWLyzQcY73qT4BFLp",
  "key9": "3Kwg4znqifvnSDrhT8LHKdnCAxQgddvA27AdZroJtGVCu3NkoHY3HM4KQu36YwzaRBu173FMBed9XrDT7X7QHwWv",
  "key10": "3iJGWeMgjad2D4rNcUkQqzAENk6JcVqgaaM1aZjbLvbJN4Xd23kY8w6i5bnUGfD8L9P9pMc63WbkqJkhzD7NFNiA",
  "key11": "JvfPWyD9yPkCZ46jDhtTLRgEWAF75yUQtYv3H6tHQXFoGcyTn7TpqtxWUiTjpyDiTi2TZh5jVPDBnhWDgTcKibW",
  "key12": "23AoMtaT6fabafvViPQqNx1CbY94XqLhGN64Vfjqzn6hyJYaez8RQPB4Uh7Z2YD1wkVFWhqnY7Uh2Hz5ZaE4dbJq",
  "key13": "3KbUc7k3MLfQuKqfTpiXz8rzoD2r5qxb7d2YbgTHTFiApVXGnP536jnEZZGtuBqF6tZvm6pnLyiz46fHmwg2iR2z",
  "key14": "QK2sLtggEQDEcfyTHa865xZyxkkU4puJ1bHHS2yKq3r2KWujqRtr7Q1t6Qj8rA1WzaRmtpVukUXQ7D48MrsCLyi",
  "key15": "G5DsZuzhTXmTDZure1Sy3c4Jj27qNCsDmPhQpyKHxUrDrCKrLCBW4BoTjzM4Kua1UBxbKhw5U4ChoWN9KJ3ihjB",
  "key16": "5ERmvXBmpFVsKWTa9vVsFEdymFJmV8QXmePp79PsRyYzvYcwWRqeSe1cb884bCVXoaVJQJJtmXTzT28RiW232Psj",
  "key17": "63BSmNW1oKNBs4uBDFxvD4WLYwgfJbaqEH2n2DsgNYUk2zWxGQ7KneEa4QMBzpZJu11s1TYZRHhr1xtXJzzFaw5t",
  "key18": "26SEWACKKFiNkGE7nCwAWYyt7XA9uV692FxpjjWM7KXG6nUyUU9QwMbZQ1Hk6353tnLadXXYgRAZwih91XsCUmBH",
  "key19": "5WaDruLqFiiroQkGvYvk7TDgRZTRYr2ELvysNND89hv6AJfRRmFcAJZciSQps4ZLvfwcNF7mgA7up7y6DUHtc8cp",
  "key20": "nAJpv9JCuTHA1t7nQmm9mt8hA2xN55T4QJNYvN3rhost5pGdNHudFNUD3Ga9M3zoBK5EBo95YwnJdkCsKBZfGiz",
  "key21": "5fCWzwUcQGiCd5pePcbVZDMVkG4KsqRuYLnfdXJCjc6b5e7HkXBfnyM4wzh22f6AWabAqaUoiTbDWjzURgbp8iuE",
  "key22": "4wBT5RBeXV6DaQx4TVcQmzmrarDvyu1vvgt9qtXUmAp7Ei3RqsbTyVMV7AvH4FgiL6WVrU5Ep52bpDpBvkjeoXmk",
  "key23": "2xE5BQ38RUsLi4ukCseMh81DDjUWuAHSNvdtbHTUdbmZSY1AuqzYkepKZVjjpB9ZLG6Fn8pmJxFq94D6yHc73JVS",
  "key24": "2qLYWwx2gbFBF4x2nadf63icfXA1PYvhWPRUcXxPiAHfehdCcf2dc2dEfZ3Yitap7LfuQkYcrKmDmLWzEukGZAM",
  "key25": "5ujFXVFw6tnq81Cw4mznLBnc5Ft8VwNGXNuzzUqGgvvWu7uUKFXZrhS6RY7s8GUJF9K8UpZASMq5EBWXWNKURf2Z",
  "key26": "2ngAVHmnWdpCyVE9GvayJWEFuGXDuaK93Zg4WNVBEw6dqGBBDBRJBeCUhTy24zaxb13FRYKpaPMd2ewY2cQTGqKo"
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
