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
    "3rqAuTbJqwQedBRqbbRRzVkooLK3VQK3LLu4sP1Cw2BV3BAFZiapMnvrXKpfJssMidP7zJua297e3p2JnUiJG4ps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y5fVXZyZR2MLs7HHmDMazUPRTep6vzzZQvgSipLmG7i95ZQcGbJ62Jn4ihUuE9rn2KT1Acboz9znSiwEERBCsGT",
  "key1": "4wA7J4XDZsgGPYjK55RRs6SKSUBgA2pSv2B9nCW9tRcH4KuaUVkK7utVAHzx8rYHPbW2MurjvyxYT7ZDKRiBqi2e",
  "key2": "3XRaueJKfW5pfCzQ5Uj7Ju6wRrY4ZrKB9PxdTwvfS1AbvgoHqJgWsgY5XwYzcMffx9u8jZoYmgGJzLRm6bznJ3Bq",
  "key3": "3Ciqjpc18q7rtFfQXhsUnmUyP2goSKFnEyNbWxatvPndGizjfAb6kGTykNwkNyeG41ekVZA8HvpVboSuvwGjCZZ",
  "key4": "5RACc36ZSdUfoo5StwjtwLzztpYg124izsTRCTBMeKCcv8itA1dZMoohGHyUxHnat86H7vMUxyUngzg8HnBhAfum",
  "key5": "21LFk5wH2fN6aXNMcKHeabxA7PNVW8GZVMtemHfXQpnv5ef99HuHhetHm7FcDTGC7A5Z3QihxViF55wTXRTqMcBn",
  "key6": "2Czb3gBRpjGJhEDWApGPay8hZo6zFtbQ9pucMkRJ3yQNDzKSPpNVCdGievmaVzUxzUywsooheehz93xze3jTD9EF",
  "key7": "4jNDrsrWN3sr6o4brK59vtmxcxALZxK9sGWf2MhL2sc1ya2PPFsVoAQ2QbUUPam7WqEPuE98o8UNqSj6GK4KXLeN",
  "key8": "F6U6TGeiukUb81YpoT7iaU2Cn8R316JkLFtnFKpgsqeZcPGaHcUDMRQRqkVCKirssUU17gdthFjj5FFB6v8L8ct",
  "key9": "coZ7v5ZwAJfpv2gGPTS8LUdehN9W6yToY1CXvYDruUrjjZYbYcfNd1nai5cFpdSu9d7SCmqMC1XbDde2PqKHtkP",
  "key10": "P44yT5xXFoGBaLS6HgtEURo3tADECcN86o8eZRtnF45WEuMsf2DMBFhw7rc8V4jf646FZndXjV38hmbhycVnWpN",
  "key11": "2aC7d5zPzTG4rbdu6A7HchT3ZR8eo64f1W11JmvZsvFuK9ccWftdYap8aaLZ7DtXbuhWTUkyUjFoeJ8qJtK2tM4C",
  "key12": "4BrjTr52U3M1yuyCgT6jy1Rrs7PLhJQYGkDCDcaeLsYBCCUbkrEXZLGUAswrR4S5KbT7cLMNXiX5c5wn8PKrQ49N",
  "key13": "5XTM8hdV33E3hHZJT9884RQ1CMSaaWUiJhknSH5Ka1JxafudJwyYX7GXoHkiH2ee7br5u9thwg1fdgsXDgozgGbH",
  "key14": "5DMbMNd7qxbHPGw9A9DtWbwMmKTDZgLchYZmiorH3jzo82SdHfNhNeJX4sdmspU8tTb67RGsvvswAqGtuF9RQJ7c",
  "key15": "X63yQWmUkX6ttCosJFNaUCDASE5UaBC1gmaouLX9yWPKTHdFfEj7sgwpc9h6qTDfhKmmRMQP3kEKmaYWSwFsJ9W",
  "key16": "vfn7cvSUbf1L8BbGWAAXU4iQUsK9FKECtpb2A466eMk9R1Hwz4B4bznUhFHGR4kwrSfpfLD95QBE7Aj3d5ub1dw",
  "key17": "3dP4agYTgkxX3ZgRJK9xq3Swm1Cv1yGNKChHF9Qry5JS6zQMsRknoLeA29oZpuAsdsMPkrRVXnjyfaqNSZ3ik34k",
  "key18": "2938KAaBt3iBYdsXJ6PjH1EgamzwjNKf32afBJ2Lh1XcaXpLNaMrovfc8CUz2aMBGuR7r4WSVeCzeJFWMByob9ca",
  "key19": "Nqw4Et6NGnTF3oShC65Fo7hF2zYjFWdc4vBCbExCMzaLFWPEqEMR1iWGViikE1914xUtFZUg2rryXHuehwgo9gm",
  "key20": "LaUsuv59i1MxajnmKNUMMYY5ERdwGmYGYH8s7LE8nzcVkJC7UDS44ZMAqinfyf16XSLNafqxwrGeMMYi9yw2FPk",
  "key21": "3U4dYiQbiVeZz2V61dwduRuQyT2T3B7p4Br6SQ3S4FZinb8K3hEXShen9uWaQzxEmnLs7SVhs1ZgpFfPJTaFjZow",
  "key22": "31eh5WQ6ui44PDCHyChqeKUbSftdxAkCr3TvmyQ9PVJC3pSSL9wyh2UPZPK6q7zerqfbvdqCeErVVcNDSXZEp1wb",
  "key23": "Es354NmKatgQMLBpfFKEgjaBg65qXYhFcFZvUw5HcbX93dkXTu3FjtHDqJn7YS4rwngCqre7qenk2FRacmuaGS6",
  "key24": "4tA5LrvPuwhinnF4aYsn7rgbKzfsyugFqVAhKwniAZz5Zmbrbp6JMZ6XZMLqiprqVpN1Xc7NNbTvyCYvzpbEUdoD",
  "key25": "2iD6b6rvX6du1A9vKxCzhNgh6kArZhRhKBpaw4tY2bs8vaGurTsHjAbu9EhQDbH36ZVe6cNtZJDDT4WDnXtuJcKP",
  "key26": "4E29xSpv7btz2rF9CPYbqnzVp223LYsVMTtsX2fcoTLeFGAmsQ1KZoywikV8QqJkR3bsXU8W4WpNcaES1XCt1N2i",
  "key27": "2hWvXUenpco2sjT3P3YRbjQc6CasdDRtXTY3p8CiVCSbTocoC2wMfDSGXq8Rp3aoBndxwi895xAJSSPML3Py9dca",
  "key28": "53ZToZQ9WJLZEfQUvMoRd1fwURgZrrHPnr6HSpaAM7BJRYZk1Mw5rudYgWQCnwY4SNtMWi9wFqbYiTYvVE1urmwH",
  "key29": "3C36RphN6rKr8tTDRzu44JEeTgwZ3ZCWg8huHukd5w4hueCPGL67YDkK3rhSQpxiJB7qQ5DJKam3WcoaSzEFD94d",
  "key30": "5eU6yr4hDpkuoefuUfS4X1xzdxPeekmcZhKBe34fSUCweM3iP37HiYCRTjUCirB9ET8dRrpCpEvXbBL5ieHkd8P",
  "key31": "5muvE7nCHVoLXmY8m2v4WZcmnMuVn4utwbSUoxnj8XGT43ndPbkmK1UcT8D3ZRPVLYnyK4C45HAQjebw3HgxikRB",
  "key32": "4YajNHXhnTyGjY3yv6Xo2g8E7eMozRTeYfCPooVu6Zrkbge5KNx8sdPpC44RWVdPjZwPCsaC51RsKRbwwi96tkjg",
  "key33": "2NCJ9esHcndfR5sJD8Z8VSJ4VpZ22z1gVNJT6kcQ5dPXRv6r13ejVAjG3toDkERbLe7otouYos2gE9odhRPJvXJC",
  "key34": "2n2XANQiyewRG75AvH8qhmSAAAqTekiozXji6s2q6ZFdEiRcY8iTpv1tEMMWx1fLPkcKEtpeLfpHyBUVoVsTQchc",
  "key35": "3ysjAjwTZCxjWr79Bm6XGaMi5jQwaR9Fa7qkntuzrzgft9MxGK7cv7G6qySubAZ2rvynqdUTYxFJ4JU77k1FkAwr",
  "key36": "5DU8ioB4PWhBwbK3DvA6dCfKwrVnND9tMfDrz5VnPvqNVC7YdnLRQzBmcQVA81vXUsHeyCxZW1qw3AVyhMAvLmZm",
  "key37": "x6EYYxHAh58omEKiZLpBvYFkYoPUTYRj1jaW9t8FmUsQCv2RpRTgJ9tF8iZiZJ5F6XjoaSV9qPPW5EWyp1MMFRq",
  "key38": "4ETUHJXEhzVXp18K3r8vJptJj8at1uqLdbfHUn7KtsimWLSWphdA293hqgZgcF48tqfiiqDArTaRFWX9DpAhQpJF",
  "key39": "3wsqWVXaxw3HC1AiUtnEP61bzFDV39fe8RyQ8kX8xVsVXZryYWCXCokoFb3kd6bXg5pFdCzAci7UXxJhryFRWSxd",
  "key40": "3LyzUJxyVYQXkB9KKwYWxUv9BdoGxyebQ32EvY42YUCtTxPVeEQzeWLtFvWCSzvucYj5sXQCpANqdzmBgzAurLEX",
  "key41": "us85qTykjnBkyL4TkoMHicKESP67H2MnZB4x5nmsmdDGQZhh3vZf3ckfxZPrnvzA9PGf1EgbpW8NY593qixh8Ma",
  "key42": "41s8xBH15v2Z6kijnFjeTt6yyDnTV8FY8zm9HbRk8gzTYnc3KW1zEPv16q45V7N121zZwDZEibYeHBA7767aaLpH"
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
