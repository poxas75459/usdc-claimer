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
    "dWxXfbhcMbHracaqUugf75VUbAjLArhesfHwxSwVoy4f2odGQbN9p8fgp46WG8gsVLQM3yBtj9Tep6XTgQL1PGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zs7ifW1idowNHVVGNtGbapuMdpUeJqKFgzkWBWfnzDd6iK2bzeeGMPZ3jZgc5FejTnE8TLfyWqAUL4bn7Wp57Ss",
  "key1": "4fcrZnDPSh6jpfeNQQtHKw8aMp5tYLyQ4HsEn1Su7yTmUHNWXEMcB8JvvkK61KbpcEivgPSWY8Fb614wgXWEe83N",
  "key2": "58H1erWHmzaTJJRqGS8DGSNGQn1m7NGjcPrZJDWE8XM7kvNdTZkJeWcKonrfNarPz7vLeDGz4EaKd6JTj9rNYKYH",
  "key3": "5EuhaKfuLSUhEjTQybGuegqGMtn4z7HiFL2h3W4uUqrRBpHfPZR7K1rveCyRy4RfXpFGd4bXndTy5uJznM1tU3JK",
  "key4": "cdHJxk2GCUCmSDTv2p7BpAyAeZL2YVoewXGRVeN9iVkpGqJt4v7ycWxVNxAxuTAnD8FaK4dqcRDm9S1C2mKTtPA",
  "key5": "WWxj7QFc73ebTVPHrCco2GmJfVCX4uRpDnFsYb5URc9TGipPYekaw25UzQpCXaP1QEFniMUZDZ6rYEMuEU3Ntiw",
  "key6": "ZHC4E2pjLA9334hskRaewgaWdxg2jAgzQfJ2kc8MNRq4kzCqRkHAsvEMdWioJKUfNWxLRXAkFS2kr3Yzt4b46fp",
  "key7": "2gi7HQWKz4dsNatZxLXpbPVT5S7oXNc1wB6nxehuGkHHQ2Z12UKCig8oxg7R4d8qTRiNqrM5fLjmTKL1ghqho6Wf",
  "key8": "59hkyVuLwmMJ2SYhyQ66U5vFKxHxebDRsauDmf7woZ9tK4RvgS4rVLMLVKU4ZBrfrVD1fnrB8U2EUzcNebZRQdFY",
  "key9": "5QHL3Uq8HopKU6TYkwZsKQtsEHgN7J41hNecuT3qsKkJayM3WzgSqwAacwLFtzAW89aXktTwmNKoFee6SipeuBxz",
  "key10": "3x6yQMq2ikYUtL5cz3BzmSNG6WxtDwU4ZoFYH6Uf1db9ch635jBv3sZFSgSxMqbPhXEsF2oXXkuSnuZKivkKBz7c",
  "key11": "4bHaEeYC7zg7aEazmuixSUvznoUxSRBgQ4uqoggQnmBBHwgyksBNcjhv7Z8QPvMMNPbA6ckWhPh4mHSNCeMMU2BX",
  "key12": "4MSs1geeenb38i7LLpwcLKxzSYZeDUDeWbz9YNW45GN2vRdCZ7PzrrenQBeDfhz7oQFj6XegL55J4MAPRDY7YQCq",
  "key13": "4fpigAqnXi5w4YZyoG25hkmjfWGSBD2hJ3ckTTTTtk47ywoxExNDbfvMCeYF5ygFH9nkLhp2Ux279TXVGpVmAdcB",
  "key14": "AJodCPVUbG8GGpUXpMVLREyfYXt45SKgJbVvTizRKAtV6Z2tPptRhiZAh7QmiojjdE9QoAXjcen85dCRh9iVyR4",
  "key15": "4Pujnkn2pKfN3T2S4z9fwKGUVEfdxo1vkFPJndEmkTsMMsRA8qJvy2gV2jUKAEvHpnsRk1R5avXe3sHfzDNXGhEf",
  "key16": "5HFUrfHKuE4pViFgV6miDTxuYmjn1SHU8H6UseMLXNoiM2pyy4owi4BYMHShdtaGdcNRmVismkUSo9eipMkejqRG",
  "key17": "4NKzX8V7JqX9g53yVuiFuucwhASKAk1zcQQksan3V9hHFgcC7wbFTya7FphXu1D3Q6nwi16TC7BU2WupvjUNGe5B",
  "key18": "ow1bCvCxK2gXyrZ3nsL25LMBGxTjShrLaPPsMtZMzsUGEi7qzCETt8LK9zr9krnQJ3uLvJ9LUaj1P3oGSTVfdjL",
  "key19": "uBKVMwrxp9UNsbYXwaqumqWGMEfTZsR9bzteaQviFZPfYghFj6k5L22EjTxfaFAesqwkkLiWQypUjjWp9PhCkdw",
  "key20": "tGdX5K8B5MiMcb7gDdLM64q5BH3p1PoKe4gg57MiSNdBHV87EWi7sKNyfavrg2q9HgqeixQgUSAaa3EGoXENdhm",
  "key21": "541MzEPJcjF6Yhs3zeZjV843knpNgtiZQ3u4hyNqM1KKEeSVXQBtLBz6jtQMX2kqypFkzE9YiUcM6VVYVZ7KA7jU",
  "key22": "3TXCtm8qwBCdYibkPj4i5H5tK7rGq2QkCFPvL2UDiYPipJ97sCcwk8CCFsFMiiGACbnZDKs75wh1o2nNRjHQCK2b",
  "key23": "66mqT6Fd1dWwgMNFaKvX21fRjao4FL8jmhsLSdbw3kuxEPAWPXGa3PsTswfhpEkCKy3Fur7YbbtXykqE9kCMLnnM",
  "key24": "32m6FT3HuFgGisiLmhAZuhtXNZbsZQMLjVjBTbjXz6woPjkyDDD1YnhWSkM68zcWp6vW9YoaHAMLh254FssXuT6r",
  "key25": "5C7sJLF7ZZMk8XHLaJg5ZKo7KWa4BuKc1BAgirsCfYULLrS1wfUjKyT2h32jppVrrz5dhdKkkVi2jW1ZcxMBP1Lz",
  "key26": "4cQDerc1LDwGe72CqqsqKHDZ5H43Gve3EJaumdM8TsMs1kWKAAs8LFFeNbMHjybPZeMZ4o58MRGn5btLUu3q87Gk",
  "key27": "4Uy4VzDhTqoG5Ej436BHyzfzWC3XFakViqnY5ZvPe1Lwb9vqiTtvzxBwU7EQ16UzExtgkhjAfTpG85KMrFvS3pFn",
  "key28": "4RFfk1st3CMGR6EPisnnTHNcAitPnJ6rCqF1wep5x5vh14jWa9cQRneHuYp9fyqrnm42K7Wa5D33RbaKL2oEq2Lm",
  "key29": "64pdm1wQTDCBLcK3MvUtJVg77LhhDKMfA6yAEuiaXmLJsic86MuocYuPM21nW74xcynA18JZAR7xrf1q4bi1LADf",
  "key30": "34SWM8bUXo8wpCicCpH7XMyzzPSReXeXB6nD1skURA3zrjrAahdsLWm8PaETnneBknvZyt7jRqRFw1pLoBVbds8y",
  "key31": "3QTDm6EwKBU6VJXHddmKzooxTxsYXeQS1ddgR18WWbhVBwAnmmAzXmZRi3vENdg56Hj7cYqe2taYq44pnfw4LDi1",
  "key32": "5soAgtHUUNAW1FZ1X7gqmXqjq2uvJCXmv1KAaGSjSGdU2U2oxZUsjQ3rimgvqGL2rMGXKGduodoFnAD7K1AYfoht",
  "key33": "ySMqwWcSJF3p1rE9jin7uv8iws5PbtxxbnVyZ7ygTKqPiAvrnwd9rVnxBVwYXKqUkn1FoY78MYWujombP2eaeUf",
  "key34": "5EfYNA2tP4xX2ggAiFCPJMZnBrnH6zPLfBM2tRTudf4Zx6NWfJmkuU2LBuNdEz4Q3YJcMwNaZLWyoKdfuoF5ySDq",
  "key35": "3tQ1nNyBaJXFHZcsQmqLmgPGDDfGXSiNT2yYNpKQ3jzCePzEH4F3Nm3DAEGApoFMKL8Xaz9TZDJMX3fvgSXW2Pyc",
  "key36": "2Pt3A3TyoKCDNFh3PnuHdFNrKQPL8bLWtT573TctKomVSi7jCVuUtkKP8tVoy8s3VUjidBTYsNDBYsyEx6FJahhs",
  "key37": "2YUiDW447qAxFgxxc5V6XmzhTxiScfi4GNKdebXvicMpa5xsD7zaaCkwfYuFbDATEQbNamgogz823nygiCDUrxhF"
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
