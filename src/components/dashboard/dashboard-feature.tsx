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
    "ZGcTnwkQ5kmTW4L1RT2Qkj7X7p3HxQD8yit748BbpL79yuse6YfBjusenYg2RwC4PAL35u9owf8q8jq4QbLD17Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TifGAmtCZp1UhNmvi46GaeEuJcT2g6L5BuAnMPDkGAoYTB7QEL5VnNs36r6K7fb3rW8JjMKnEChwvTFPhuDqNUh",
  "key1": "51VdAeV1t94dPV9Ti7bWnX9FuU5qHGeHaHtFkhav7tSiK4PxCQ8F7gQdB4e4j4Fd4ad5QQWEfmUxnzWPaa66FEHT",
  "key2": "NwxxUDzXyAB4gzmFhhUSuzcZTAeAQAd6KNuaQGTjse72PmMLX9rrQ1CqWLurGp4gw2rWRxx2LBa4jpVeecJdqNX",
  "key3": "595tBybreiqF1oPYekAc47qYJdg9ufBiGhPULmDBfbWDLjSvR1ebAdXssrbxdZcRJZNZ5v9ZTnDA2zSo7z8Vo7EA",
  "key4": "3qX5fLy8NvMkdpYbuCaih8XQyaZChGMLS2BBLZrToXt5HWsYzPSBxyEuZtFCD4AYGiLXdELpnTFbwFKLEx2JXHDu",
  "key5": "2ZTELrGabfDjkzYCXw5jVPiXg5v3Ap85MzoJ7jooEnfN43smRHL8CPPZJSfb9hLqxPJQUbDGWHaVFdombvsvpD3V",
  "key6": "5NDWRoVchAZbaPYFSUpGUW1467Kn7cXzYRprCsSjBnGNuqpBF9fi3JN4dVrNGsxhy3fyFnNaqT4zHipVSGh7ofbm",
  "key7": "2FpYmzbQv3TTvAinrJqVc6F1iJcSNG7AV5Bytk8vMbAnKVGH3y7cB5QvxhMMU29hoXHVh52sLeMpmK1XsBEnLAkX",
  "key8": "5GZAj6Rc41z4ZCPH2GBGpRLGFP1gzJLxdATATJAnhWFwLSusG7jFtr3hYm3Xeqbi5PPj5VUUjAc4rNN2q5NNzgqz",
  "key9": "5hNiwP6eh1PkzyXnt1AJXTFBsjjmpkmg3wWtyFkt73Ezrs6BCMsrXvbbCwhG8grwJYQ7tc4mJwJFiazpyX9nVDW3",
  "key10": "4LDVXCBofVzTvx2hDWdfPZGc6WvEe9hUPzmKPZSGvaQuYFkRACce5xHN7mYKcCcGsfAh4WgW26si7NBdkSt5bHFL",
  "key11": "3mBceDBA6jt2nWbYCh1S4Bm6a6jz8JnyDXvPdrmzE6etWbQZ5btnv4TPcaewXfPxJqV2Tmw22LSiczJefuAa6CHH",
  "key12": "5RDqXdcpZLW1fPzKP9Dsd98DwefUpDktczCbDSEXe8T6jJxkqU6f1ciDNRFuPHgEo9vCcV2KotJoPLwdjC9QDbeZ",
  "key13": "5ojquigeVNkU7MguB8JrqBJHStSdfqsqGWdozSx1vGKK2bYhd1KhVu3VZcKXax2KGsXeAEjRmivwA22hpeGn5oU4",
  "key14": "4yD6RqesVjeRScjGEoHLkBntRX4sHoG4rcg79fBX6UpRFt2AZXGZvSBjWFARrjV8P5Qkpb4rXdSzroeeGBLFueNG",
  "key15": "2X8RtVKfD5JZEAJWtXkZz86DoYMvTCJbYN26x3hw24Kye7t36GRAYBmmkeRreMf7kSP1WiAiVweYf7LGdAovRfhT",
  "key16": "2xTxueKkKzfpFnN12pN8dm1z1UYVDunij16ZNUG5J9A1UNp4YjHjyAbgU5XVGa6987LD19negzPTSUo8R9bMnaim",
  "key17": "5rLULmKprsfi9RpzG7Q4y2zEhC2vnub5pmKyB1rQcZ6jxWrDpUucBgVPujtoNP18MA7QnK3Q1Fk59nY5cL3V2Sve",
  "key18": "5w1dctEgjpDHkRjT6mWgVmBEkXtx75iJEF71GYmiSB5Kt2suWrX9TLozPKzpHXE8BV2eva4s4ZX8uM4Lh8By7gf",
  "key19": "2XETj1RkBoJWFoFxKttSUQsEmRD5gjLzDEWzCo9zsXPqHTa8HP4p5HXtMi8VTmtYFW7ZAEts72SW2jS8vXd2wAo7",
  "key20": "4DvmDAEEgQABE6q2huR7rnqWgG2ea1xEEBuqES2q3dU845HF3EogdgJkY7Nzg6HvPP37eJwx4zpa6Sh2tV8VFDu",
  "key21": "2AdRVpsmGDhvcSeVPwrQ1Bjj5Sng7gtpF9pco74yT4v1rVBoGnMmJWTQYJrgW3yfnT4VqYsw2UTBuDocVypnvyKS",
  "key22": "4pFy8aU5UQQxxfbFCVGA7j56EB7AdYUsS7EAgYCdMcvKhjqg5rd16cy8CrFVREKsf71a1omLa94GiofKH7jzAggp",
  "key23": "2H8RwpG8RqpGt2DYP7jnfyfcgmZmcEhB8nVjEPJNe64u8Kb9bgP7RDAAo9o2B2NYZYAHrm68C7MHe8ctmQuwdso7",
  "key24": "3aW2m9wkvM4QQ5oGS8PFRRLzNaZFxBacTEGbB2rsNuwpNxT4pTeuXNJssB73UpvcSeDroRaNE128ZGhBfAV8kNAo",
  "key25": "4ySeH7vMcUYZsg7zwybQypZnEe9BRhzhZW6fo5Q1aH1V2h17pxWUJEmuZNnGM4kcaWCeo1UaKLGCuUuHUVwGzk7A",
  "key26": "3sLTKHMbwJLvyGjRWELix3RiXg9pVy3Es3DwGWmPBzTc2NwRDqN1YyBdxEVp9unm1JPViraqxDoNCkVCE673PZKi",
  "key27": "Lg6E9q97Z1E44CavKBsvWrC662qZBEm4d9PUdWNbSWhQKS5xAko7TUT5qY4TmaihYqya8Y4szHTJuYd4kVnkP1r",
  "key28": "BzTbe2VbY9CLnNsKWsbqprD51PRRHh6XXoNQnx9CZW8c7rVG8oFxK9jhcYPMcd4pETEAmTy1cVVimziDYJnAmyn",
  "key29": "2MBiTGUBkKN7bn7hPfoUzRkF8N3F3uy8CHS7cektcF7pYVMXtYK2qZPySL69Jq4EaXLcjWQCFA7v9eZgwDTLHo11",
  "key30": "3cTTFbqhRDtuinD1aAMhFHvTvY6qiPCKJLs9mrwG1URh8VCb4SPVcibhML5YqdQnFGsvCzT6HbcTtuGV6GBKUjD",
  "key31": "35Gn2KGM7JGpajycS5LgoGxoku94se153kEAHQzHWkqXMWD3pXYw5ZUPVoRst64JSxQc5L77p47MKMSCeFD63oeC",
  "key32": "pihyDA2s2NADVnFdoDX62DdBNgh2KDjUjeLY2oU7Cw7BuXLP7NHFrJYu6F8m9VkMMFV2da5hviHWDuXvbhcLspX",
  "key33": "cyLNSmWqeXBuhE2sWnkV8bBgVPzTQ2Vj772TvZ42Vs51e2GVDFYyMgQKWWthoGUmQBYwZngECpdJDwGL9ca7VQE",
  "key34": "4NHn1vWgYD2W2g9A3giBCNrmKFVGhpppf9TkNoK2k6wog1R8XJ6tXi9pN8uwudJtJk3t6tLsMUnJfdsQa9GbzfXH",
  "key35": "4sfCqV8tEZpupX8FV8cnSsYsNQhTdH3izTDM5v9Xzn8RSGVzQhJHuJy7sB8DWxVksx5GjYJKofutPyHGi8VGwpq6"
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
