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
    "3CVmMRrMvS8uv93TuS5JaMfZ7PYf1mj4dNhF4skEUqXnULovdSHfCeUjTrbgKpcNZGcqsgWU5M5k1rRAzsc76243"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UycRFkiGtRkd5215qU32gCh6vkFjX92Hw8XeSKgbQUXT2VonzVhbxYXgeKz48xhUMsgbK7XA8jq8qMt1ePGtKzQ",
  "key1": "3uHU53AQMqpYLYiV6eifGocc4FitKcVp2nT25oBw2SxQYfxUSZUDKyXbVvixVqus2kLvZVW9nmcDUJnVFJuXUQrt",
  "key2": "3b2qSP9skJscporw1GVDVRYijrjQjHR6bQrtQUd4HuA5AZZ3wdagRRBYniq46NV6zUu4KpTGE2UyUNuAMRyZYptK",
  "key3": "21NRNJMXozWCa7Sx9JmABMLgqL3awiTy2VwNudzrHNgyMvrrYgYsdiDXTrPpiSZcEShtSyc5ax49uAodXcNdQsA1",
  "key4": "5D1hWnrmS62ApqTq5bRPBXyWDifyDqEg4s1QKBArkTeeCbMVU4iXRXcvLbHKd7CGE8m6QaeFiD6mHvuivvXapSao",
  "key5": "5yFBc4DZXniTfr6UA6NPQ11Pm7PHGb2rXJZFX4wLmJmHwVz6PMrgbEzBLNQSmrsJpREuf5aTJSVUB9xS42mA18co",
  "key6": "2gPZWWDXCDWBnfcFjjVDbEgPR4S6FFVn34T8MjMYgWXBjGsrirhvu7sDPQTm4Yhs1mCNqV4Ph3U3ofFdGsZBnugA",
  "key7": "5BxEThDAHgw6XUd2wLkZrJKAvBrXMVC1ViTVRxuaYyN7PhqCHMY3A7ckVEFShBGx4KRyQrfgYRqWrbXfFf6EZUHn",
  "key8": "4AuQQK1cv3p626iSRgn9musGBh6HpTaxWkrvuHQaoCv825R3KgSgvp2JYshHbCfxaLc2qrzDew12jA1BHHCoDPVj",
  "key9": "4Jem4XxsqJz921zrypfuxuJwX5MJSjxpcL5t4QpoXB7WGykBZyU9bwbuxFcTC51t6ZCQwdwsv44vaiGbTgPMdABn",
  "key10": "5wPBVeVUvesf69gsfBHaZEkazTCUz2YtuJPM9MMtNEmrPEL1wRE8gv51oAMB9aZ3q54mHKbPdNGomN13DuDEt86N",
  "key11": "3x2rfPSidLKoNfsgMUz5mjTYuYJ9nPXuPMaRnPdSkAXenQB1GtqsPC8HgfMVcMgXGeD1eDVc33XwuovhmJaDXJQ3",
  "key12": "b4pTftHCM5ztMAgULnMBAgRrfWpPjvEZVKJ2rFdgZFbTccC5RyzofNm68GqoebN2UH8t1jMtD9YL98Syy7YabKj",
  "key13": "4BAbEQ6TxCrhhLa2QUCuXVVt1UdsAhYPdXFe65UNF8khKrfqY5WLMyFuQUeCqzfG14NmgcjeGuttBjUK4mTYXTjM",
  "key14": "Ju8k9M6Fnp9KDmGT2XU9vjUfbTbQb4nJsvegePgkicuyzykkiCQgxagFKXghpW2m7NiaUioeMNFoyoJnrYZcTnC",
  "key15": "3a16xzcVuY6nZLCKFuhSrWuk3UoNGm1viTVWmA29TxakGbSP4kLxkgfnAyGxbY7Gii23877wN3N83fS5EzKzQZoj",
  "key16": "421NfhhAvqMYzq9vAQzSpUwLFkafGjyM7aLwV4gjLn74c99mwhVes2Vu44eiGntFo4gDXoJZU9EX7NDrwoTmiZar",
  "key17": "5G3pWmmPwcYa1hjR7brice1CsLsNNJyXbq5n6HvvLAYQ8UcdBy8XfBN2UvbP29bZk6VNJKHXY7auC8Xqa9P7dBXz",
  "key18": "5AEpAAcYGwFJNfLTkWhCM99ApyyTx11mJeNaBdtMqdozsRWMwh6XLeqoPEqbqo31spLkpbp3ty4PW4gmvt3fMfRR",
  "key19": "3XfsC9TneftGU8R7o8fMRcym52ZK4vSLpkj2wht4aaqkFAhSWLhFmSjg27Mkni1AnfafnBD9bhMc4PTBKbLPtkZo",
  "key20": "51WV5EcrgEyajRC7obxjCqxFxTTeKktaBSpDG8hDr6nfmpLHkjYSPmgvcdLKMPprZVH91E6GpyvJkvsmoduS5MLL",
  "key21": "5AZAv6rzEKzFfb2uyJMRSgocQwMttBnsXz5e8Ny7UpTasKiYRQV5FwaTAoaiEcgxZq5pLmy5SG1pmC5Uc1cMvvAy",
  "key22": "Gk6BWcYdUffMYZsJdobvzbaDvNfKuH8iM4i3nedSsxNhtygmhwJDpdAt6ZS1zHtJZRYLQtp2Ry1UXehUtkBjjRt",
  "key23": "4AZBxwxLfk5ZxGj8ZNXjhBsWPmnj5aDdkfz9cmk2GUzQrV35CrzFxQNoWMSmr6QnxcvZQe4X3geYmKRZQViWbhVa",
  "key24": "5h1F5gTHdybbaATTmGgCinuriwbs3ngnsw4nKJzuBxKtRzKBu7cV8vdY8PRfiqRv47qTy4PCEWiJX6w8ZSXYa2nM",
  "key25": "4zqA3c16MX12j6Pyg3yqXjw3hhsSsat7PHTejSzrRyzsdXVGucQRbMaMVoGyK9cTh22rFNPBiFL8STvzfwHvBJgx",
  "key26": "4DMuc72PT8bmpQVnhNfrTq68Pu8V8GESBhT5QjBQRd6suVTvh4tm8M9AGbpFueWM6ZiTBG6Cvrgn8zTixMUgQBnm",
  "key27": "39cUbJZ85qrgHBcMPb8FygSHkXprQErE5Zh9W5C3CQ9FWbNUkxfz4LzftSTPb9w3SgUcboEWz5HqT1qmYnEs144u",
  "key28": "MZL9ZwyLSbPuD4c355QRbPaYxhdf5RHcgsCMzur6iMbfnRH1g2EcGySfDToHgDxJW99Me6ew9nEQF2YrQLrZnkt",
  "key29": "32vdmRPA5NYeFgDduW1fydyC2b5f3S4DCec9ozt6yRK1gsPfXoj3TrbCWwhweq9FxfB1AzXt4p5usVEXEN1B2zwa",
  "key30": "3kPXe8gjY9ZSiFibGhpkgji1tFShebU16sVKuuRu3r22VsyMXN2gqR1DpQCyaoDAZf7J4cHwHTzpwFabGrsvKscH",
  "key31": "21qdEZqGuT3pnmU7i8Gm6s9QJCKsq5k6z4B83yzMyr2jxCmGkcrvLi1E4FJkwSzrLUKCQxZrW3ky59DPtiKzZo9z",
  "key32": "5gkrrAhavNs831V2T2koh4TimL9hDD7Zrr192CDEZTRcQM4gNtB63KhZWzz5Jmq1ZQ7hHZcRMEwabhNLqh1bzpUq",
  "key33": "3AYjT4FdbWFDknMeCk2NZuDz84CCJE8rzN24QpczDbnuUimCsgxzy7Gmp9AMzzF4QYaL1HapPEjjQngRRrvBgYcW",
  "key34": "5MRXs3mFBuYGLRLqcdrBZXh64KX3T4qf1dEbkyWteGK2AufCkWhH494DEnYea36UpA5Kwg2z7q5hcz2ecgAgHZRt",
  "key35": "fUaCUdeRPGZgL2TWqJQPkEoXrfyXSTAtsrkTVqzNZs7KTBvA2mXqvmP6e8P23Gg4wmgkA9xykoo4gviL4Ai1qdS",
  "key36": "2kHEYwGz5yF8nHENLf3rZSDZ66BN9ea2GRDzELXTZNdf8fYf94peRgG4A3fDw4GSdqFxoNb6ydm8hy314yw3MSF2",
  "key37": "4XXQ1eVmQidSDw1VRh1g3j5psjLChTRwE7jsQtipM2F4samenPYW8SYGTk9zTQqwkBYhyxMN1TRTYvvs1Vgry1eL",
  "key38": "3xpTxcnFtTHqAvsLchnomKRvdgB8uxhHHXVGBaFErRVuadBHMFwXo3T59qYXz9MBfD85oPjrBsKG1k2asoGANAAR",
  "key39": "5zLKdTXyNpLhemn71eGRVNpCPgXEbdwwPviPGDzk4LG8JKa35EpXUEKSc6pVtFBvUiS7mcMLuyWNyvscMcq8eAnz",
  "key40": "2Sr88GSxSAHR77iPwPYkpRZmPVBeKfeK8gXHmbQ6Sio7VeCQivRGeabY2a7tNVJUw6y9W5aJykJDkntkm2kSjXn2",
  "key41": "2xgf6WPD5nEveDc2RYXcyLT3v1atUwJUPEnePNTVTSJTB9ZxZ6uKVneeZmHHaXThmgkSvxLxNjUxQNg9KJdDHmHL"
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
