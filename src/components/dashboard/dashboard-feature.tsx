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
    "4HDadofA9sLyUF2ZPf5fDkGSMPFvKquwAbrjxrvRNJQDRiXgE81xvBd72fJ5FkD4AdPxjYZVhfzNZykgto4sWJBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rfzkudG7Ydqzf1d7ReUJj73HSSUhMEk1kmQ9HwQpbnGYG7G3QKWVXWG2hJTDNHT9tGEDNMTCquPJrCmCB4smYxV",
  "key1": "32WwiRUyNQ7bMZcxEh4R12SZySfJTTspnSfuBLPF1c1B2J6hfq1QfNWMHoCVST9b8eUTTbFn4SNxuHB9qZ1saZH3",
  "key2": "5oRsGvmCBsM8ZaasghhKdbRRbEAU3JtsqBeTCdCxyhXPueN26f6ztPSte37kmJxC8tokvD2tHDyJf64Z7FUoAM9A",
  "key3": "5y11PuXjEsoWfZE8NE7E5Sw2tkxcJYFej63vxnTk4FKb2X7VMCjuynrjx9xXvATiDm5rJTiiyU8SDhF3Zfq23hjq",
  "key4": "5abeWrGBz3ZiNW3oui42SnkwiQGnLzeYvUEQc35RZA25rG8oTatZhvWw5usejwDX7NAMXmWjMhYEzNhbN31JjCH",
  "key5": "561QEy5JL4ePALz6fXD2GsAeDrEm2izSiHrE9uMeR2uSjc4obNB8howtvZGyhTCXyrtQEgNArHHhmZWWLMMwGRox",
  "key6": "4aYZEy5Ct3FWSWhm8gqqMDYht8q7d1GNCWqk7mmESBJhxDZaWZtEChb5CH49wDtuYf1E7DCShmXgc6ZogQJfkSXs",
  "key7": "2rkNYGPCeSmmAW59wyAfib9xcTHZwkU5CNM5HQqQLekQUWkhdPe1YYD3ax6fkUojJdADdaioQ4HYn639Rq1jSjsB",
  "key8": "52s4rnpUv7mTQZafQf5MWrU9bpXbPUrQQeBJhgmTNwKQH3UGEz8cqH61VumerC9XqJ1JA7BhCK12tTrc1VJgLkzQ",
  "key9": "63AvwTxbE9CYk3z1jPnvrXooGsX44v7wfpQ3VBmF4ckLHo2BhrKmBgPT6m834wWunKZPH6xhgoz47qhV2RszbUo",
  "key10": "45cySkryJr4dKBLbLz1Ga5pVnquMydmnu7PTTn73S1qm6eFrjvRY55Sd3d4VUSUwRTepktPwRNNVbigzeBBMEHoz",
  "key11": "YJthEc3gMfQfC4fub56frGUMyLdegVQiE3ki3oPbVb8miJ2UVvsRAcbWN1Zj4eFnYSSjgYtDtMcvzSD1aKdtwZi",
  "key12": "4e9YarX5WdqcSjrNgP3RqBhUeoH8dGe2ePfem2B4phhL29sL12Zan3uYZtiR8tNbSUHNZbrYfQNXideWLJdhXktF",
  "key13": "65Fcou6JXM7oVq7Ncn97cP9BHCzziU967hBZMpJW8B4bUvxhoZiZRNUM66WzQv7BXcfLdJCPV3NZSCm5BEVavkLQ",
  "key14": "35s7BMDoUUQNkACpELhtiHY9KixqYSd6ch1FNCaKgkE4zAfJ5rzvZkHF5sdQDsxRmiAEigeJz8hbGqUXm5cGdAnq",
  "key15": "53xkikps5N6ejHyNo6KZX6BX2JKCJawyMB9sGjqTs1sS3Hfngp6kNPJ5AkKr1Y6yqtQjBEKxeU6b6Z7pAewUa988",
  "key16": "5Lq1T4YQSbM1kBAWastkKQwaMYkW5tT414fiLiyyt2egCSAcWG4s4nkEJh1NepqTdM2XKLmRCwF1FjjrndkPpj7A",
  "key17": "519D9j3WzumtHC3bMead2BCANkd5rEL5mUz58qMcp4EvPTTtxdQQrHeHzNEbL5RGPc3wejQ6f3NNjb7xpRzewbXn",
  "key18": "4Y4iDmLxCZfCsnS2BhBBd6NkNpBRBwuvawxgYosTwfM63CjSM1CxEmULEi3g66iZKk3WDb9PZ83gTSktbGFjoH4E",
  "key19": "MUb8TCR39tDfS1eNwo6xF1BFVBN2EtVHZMHb537SxqzZZpCLtGGaUrTtTfGK9jJwSqtwaiEZWrH7sPjvnbFUrwo",
  "key20": "46wVGC6eKQ1gt26nDhGvRPVNmTsuR8i3ev6e9uQPbW4xZ4zwvLvv1qUd66mrFDMejuMJUiGqG3FEPQrLsh5ySNnz",
  "key21": "2rWCS8iTfamVrLzsaEzKkVZmhxYahntZ3z9FEpYXxvoRaN1RKHsQSU8D2SQGaLAmfQ9te1c13xmM53sBzFHKJxMN",
  "key22": "5hBRXKZDW1XVh7DhrV66V1ThJBjtiv4KZoST17XNurCM2qWZ9PkjDNemfkPEGY2Xbh9YwEdZaNdVtuAXwhGpYg8p",
  "key23": "63S8RQT9G6dMyjobtLRfqy2DvyTLNHtKoTcPTmKP8DiggSnrjctw9GqZnzSttpfXrDBVURw9hQmSA9ZFCtMr3kNA",
  "key24": "3s6wntzNmvcY9GGM4PEPyGdcnWtHC2BKyKgx6pSjMsih3hpntANdUmaBz3KLyBELfsfFJkhbR4HajQCtx3xTS39J",
  "key25": "2yXWDgY21GKrZaFHp9gugZUPhGdz5wRCPynYkxKw2DrkFZbAm5XVLUSDBLpE6fo49P5RstJ3GHBkSy4GWRVuGLzz",
  "key26": "r8ARD58ccgUdGi5XoXK4cR56PPaK7TwvXB4MxcZmCuKNf7vuGQH9svuXyKWg5LNVxvFQXekYKGLCnTxt5d71Kjz",
  "key27": "4NhW8R3RBfDG2ES1jTAWQoptnCG1SvnbvsW8fAKMm3ExchtN31bi83VzoVARPFXhyNs1fwPfrNyWCDB8JGRZp6dh",
  "key28": "MQzbgReAzh2tgMV7wcH7eUY9Bvfty16PZibE7iShJy4ktHtYaLJmEgFDe89sahRAksDGeaQSXgoyJTHJ5gsdfpP",
  "key29": "2FurihHJq6iLHXDW4HweNu5e9qfbHxEf1KprvLQ8CJd9gef9NKsXPSuR3kwCecGWBVpQiNkoGDKKg4QezK4XjdxH",
  "key30": "3K7WrDn7rg9oZUuPiifeGdLv6cVahnxJkzfG5SVatz76QhnCSZsBrkAq5iur26Z6h6v3V33r2pdQL3DZ8VsjvJ96",
  "key31": "2VQ6MJdd2EmkzrLyNLbJDdLLgJY3i7eUzfZdwGMEnnEEMzyeAE1AGmfunQHnBaHyGm2DNXsuwTFBVsgF5S1JZiyz",
  "key32": "3Qedmpt1mn2QdBr9MUdJ24GVdFAq63XToJm53TUZ6bQHAktJNmAgChcBBwFu43aN2tJAE2WNc3wp6cQqdDZoJkxJ",
  "key33": "2UyghJ5yBbo6bUTKC3V1uZguuRDAn6C2r7JndXvWZZYscFeQ3yYn4VY4QuYf5oFSW41P8iHoytXnH6YKQwMADNfq",
  "key34": "3ikhg7ZWxRAFygLNutC4ES8AojLn6MURcnrPEh1bz9awPy57hyLzxSUWXNUqUt5u3xMjzDxvmPnLKGJxVNJVMjct",
  "key35": "96LtaRq2hX6xt7CiTD4CTT5W3N2CZrYACtTV2HTw3LP3vr4tXbQqJP1o5mQtJc9Q1gohHQUrjQkq5SmGtuYysXz",
  "key36": "2rsWnt5cTFutsPL6bhiu1HZazRfkeVzRsBcnKB8D2r4ViTP4fTTyMFKgMX1YYjqWedqMq35epQmjyaa6gCL887kP",
  "key37": "4nWrjrXQyRWkZ9NGwHRJdkVELQUtjwvD6ib4mTmtcVycoAuUH5UXkxzDMRjfGxMfXWnnohorQ22gFKdcuhNZGw9n",
  "key38": "67qunzgbcd2ythHuApFRgXsc4BoXExzY4HsZuLFe1qpDKGqnnX4a7i5gnkVZtHSTez8AqdPQvrsnn2XvTrnizLyf",
  "key39": "2WYqdBjSqriZris8oxraSyKR69TaAmrMwK8hVxGpidnY1ucr1EycUKfh9JNDZxtaKysRar6m4HWzhmMZSEof3LKd",
  "key40": "5iwjt5NAgcey5LKSQfamz9brBZkigNGdvmdhxadmDcCwtvvZSxQFc8Xch5jNYuxY2Koh4foYtFxv5uTeVG9susKD",
  "key41": "3eJ7BxmUvsSMtCTj47V9ccCxz1JFjGNsiB8k3GAumncDzFYaYy6RN5AZcBXYex7cS3th6UFAXRzyLyZq3WuECH89",
  "key42": "62h6N6WHuW992a5rxS95X7sDXGUMSBcTcindde2wG79LrvdM5QpEexnp4uxLGDgkJwbUx72WctSCoVtXjX9xcQuW",
  "key43": "2aSaSXPGxstzRuBk6QijwgZDsHQUqDtn8T6n7VRt5MtHqXJVuddf6wDXtVAt4mFT5fMxtucacYVn8Csq87WScpUv",
  "key44": "2hkyJfTAtYivHJy6iRDtzzZDWT32vfeMTcDZv8p3ac5og9yeTjjVqhZs1QxEKC2WcX7qdmjY21aA46JjfJVPEEjL"
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
