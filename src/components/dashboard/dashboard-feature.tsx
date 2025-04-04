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
    "3JZDNQTxugNHffgftbGWyLjRGHKMUibiAnc8VwnPFSm39BSgEfGjWsECEEGuKmVLNEVc34R9kmdEQRgjp6KPoYgF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45geriYc1CDUB54cr3CkKXkmgy6PZCjFibgFaXtBqnHFcswvrV42uzV1QFVbvAUYwZ3fJ9D2fwWP4FkyhsTRahzi",
  "key1": "2NuiRYkKFoEWLVqj7aEcCEM34GerkPwFLigy4pneh9jQT71YkgSbm8f7nP6vz5dUJubzY9wPVQdQ5JLygknMxDpS",
  "key2": "5sanUmVdY5hobFGo4i65SVVe2HxCcKE9Psfa2A4oyyUyd3FyPf2ycZb26psWfJyn6gydUoYvVVstht7KwApYDvCH",
  "key3": "1XT5x9p6siqWqUoYUWpRAEzsas19M694C1SFQsW7e5YMDhkzkPAF9o3VePPWNCxoh5WbUSJgnJj2ex8WrjNWhYE",
  "key4": "4P3HNvDaNmBKv5dcqf6afWkQVU1dr3nophTMUpVyzJfFDssTSXCL6q5GoLH7sGP3w3qzd6U7vdBnkZLYovLc9Dgm",
  "key5": "4o1BpetAPHv7mSXqvy2WcuTLvT6NP2bDyLTpK6u56NpRQoy18fA99duvaG7JpYn95hYNHRAnX7Aiu3SPbiggGGdW",
  "key6": "4xtQM5Qvkmn6x2AeTb8Yz6mDbDWefbEXQxT6fVDc8bY7MGou6bVmjRmj8nAjHpHY2bW5fg5s29KZHNruJJEVDN4g",
  "key7": "BJBLxjUVp43nZT8K3Dazss7aYxSaSFqthXs4HftohnXXwcuoR3yeiCePit3VmNpRnPoHJZUEHrYQ8DTVex9i6Ve",
  "key8": "31c3TbiHomuMKjbPc24KmoiG2SsXsrMAfZRj1xJJfSSSea3aCUNRSwLZNsTCrjJ5xPVhLFaxWD5WnFrzUMSHpW7X",
  "key9": "3rZ9tdG4zZqYguF1vLdsT3zRse5ubRWL58fkQ4iF4awf1rweKBorFa7HWqZTWY8QeY6LsZdyBqqMjpBP9YtkVpoJ",
  "key10": "2voaSaxbrZWoF6mfnEKVV8Htt4J5iujoW7SUBsTXFADvExyGXgrpSkRKRiaAVghFCyWjVcabPKWt472TfX8oXAya",
  "key11": "36RNjPJcaDL7DeYYrjaaRuJnyVAHxCMS6ak1ceYsQfPUoJ1r65quqBzbhw4zvKuSoiuGWAeGr2GJHCo4tqFAB1vz",
  "key12": "4VhkoqMHD6G57MXLqPceum1FA7tebDnT4irKRzDPLgNH2SMtohMq4iYWFKGHyW9Vsnz8XkxgMWe5y5GY8SmuHURn",
  "key13": "vJeAaK1333Tkw9EC4m517G7esaPzkULHjbgZckiKJM8fr3EK1QDxSY9rfuoMVD7tpi9TAqJ4CXoBKhzxPw2My1i",
  "key14": "26899H94vJsrfoYYyb55GynuzVcoDPZ1RteM477GdhGL6HKW3H6dyFJYdkAxdb4x42i9twMNYsaJjfaKwnHLRopo",
  "key15": "4uB6rKY8nvCKFqW4mgJzsUQwnwjS5K41ETKC4VgSwgkxauo7zb8js5ArumwTDY2zf7Ytr13vPrvjcZVHkiVTkEPS",
  "key16": "58hiv2LFvv2pa3BXJzzntKfsHwSDcGS3z7h3s6nWaXVYYYaJZgcUZicxc55vVp1cdvCZv8ni2hkpVpySvyRSzVnW",
  "key17": "j8toncSqsx45nvTFNigWT1oSJcMFQaJabVoUzUWg9RZv57vioxBXGJhehWBFL2Akqmxq3ytXQVVBJVKQgFMUY1E",
  "key18": "4xzdUA5MR9AAP6kmV8aQb9vtxKQbjtmwvsKM9VWCJxESoZtEQ2ZPeP8um82xy2ck8CyG5RzWUt2yLUgjGEVVMrYU",
  "key19": "3uRBo2dQF2HUVi1xoG5RY7SFMd2dJcbixjD6dXAqksLKzkaXKepMSNLGwzpohdxtAjxPFhuCc56PvFAGSGcz6RdY",
  "key20": "3H5geAh86AZdMYW5k1Qw4hUvxp9j4MxiNxef1fLq6EPRc6wf6toAxo2HXjA8uHi8DD754SyddgnACLrUthPKwU4F",
  "key21": "3wfbWgxCFGyp4Het1TKS4VaRxQs2ZFDrczwJGKDa4tbCrYcvTHYcGYxs2QBfN8EsYN1W267CgiA85EV9jAgudsE4",
  "key22": "4nLzQ5b2PZ1JVGHkQXTVAhjrLKu9QYa1uNy36SF27rbpvrcPKirEPU45Urc6DTBKBGLVf7Z91rC6ZTqutLacRzpk",
  "key23": "GHVM64UPTzy5tnnWiZzSvV429eoNnwg4PZxNJEFPBhz1XATHsvdWSd9HY3GQwqgduUhUg9oNXYESaVVmuPJNApJ",
  "key24": "4Ns2s9vRWkhFeQdrkpHubKboSfxirwdA5j33wHA23msLURm9TUj5VnnJdQPyGREuD6UGAUyA6NZ54Q3GRScC5822",
  "key25": "24pCswaARTqN7mT7uVFN4sGYqeMzxtRCDTbyd5T2pif7L2Sc9L5vfXxiPfpfRcexKhsLuMrgU79bCcw2PDcbuamK",
  "key26": "29Cz6CNkd2UPHywgaTGoD28rA1PGZBvsdoXogLqqBJfe1aRYXhanyWjNbQEfKsJRyeathTYWxvwtGK4tTzU6fHkp",
  "key27": "62NNpGFidKXbu9LyVzQ3HfKpiSRfyo3rP9p4q7j9JtJd3e3bNPso3kvJHHEpPDMP8nj1Fgm4HkmCLrXXkHqcf8om",
  "key28": "3NPxJPFEko1UrgHpUtkteVDBw2NdNaanCK1qxMXTmDsZcZo5rKoeqrB5Etr3b2p586p2ESWH2v9KT3iFNkJK3fAT",
  "key29": "2LGeecm1jTLmhAvZVFC94idtZ9pnkDHiDsdbgitjVaGyxYd2rGNohZ49T2tgW32xsWmkrSwGYHbXomFEWqasnkS",
  "key30": "5BkgyVXvKcUqerRHkELRngbzDfTXWHLpaA4hew24fELXW2dauLvyodWPiY8rgP1gYqaXE1NNn4xMEwyMGfRg4Qwg",
  "key31": "5vKVvfG9SxAPeihamLhqLhQig9kyeiNescDLyDPXmRZAgMwJVwjWHxxQPBqqXJ2mWHZ77mTq4iPzK5QCtXGJ6ex6",
  "key32": "2QwaHAL9QyqnyDL9EfHDNL8ieFWUGe6pykYQFgEqmgm2D7Ezvc1LMhCQa2GumWekX1csMwzEwp14xUJHfRJ1SfyX",
  "key33": "cg1TL7gdXTz7QysoykysvHnt488pyrBBKDWSN73yZ4zRc7zpXFKinUjFd1mFA61vKiHCwBmfSR4RtSsz7HYiGzw",
  "key34": "4WuggeJRRyUjPEDzVL4C4yrvq12nWYJdZz3ozhDy6iCMumC6bt3sFBUhRq7Fr3nbMDdMs5hdh9a6AeRBueMJ65eQ",
  "key35": "4EGVxYRVrGwME2ScNEHibh2qTaGniA5woiscTtBhcnZSCiDA78V5gFoiL4cWgbsFE6iwGRdFdUkPLdE83eaZTMpM",
  "key36": "36HQh5vfHbhyCwWePv8iZr6Vpc8WyCunutih5FSbdSHGgdAE4eX27zFSzCfBHhC8c7dBdghftT2os9Hs4sDdb55A",
  "key37": "54SNABPU3xfgUhTwSzbPzwJ4kXk7U5N9hoFNs357qpxGM291gh6Yb19BxSJy8SyzSvY4JVzYE6vZXE5qxC5gz81w",
  "key38": "njKgUm4EEf7k12qdFWxPi2SkXKgtoEXiYNijPAbEsNndpAH8pz7aKQBGKWN5mawBmYxK8rqbvaQLxtRAJ8qC8A8",
  "key39": "gAheLXgDmihg5cjyARBdtxcUAN3YHozRqNo2DeNfFS2EGTqi8F7Mi34QCxCsKh4r6LqcqkfaqRtHiDTdSk582ya",
  "key40": "FBRCXuKYwcrrRK8FPJZN6syXJ56YtbLh4HsQoemELfrmFJUFt7USGDQBffmjBwhikAyHdA1GbbMKZMxwimhHxBq",
  "key41": "23iWwDL5d8wbvLUAJ6P1upb1B72RSYAxWCr5hJXdiNMv9dwCksn5Zzi8Ytgd3S5D8oCK3HAhCYd5DWURvkdVoSdM",
  "key42": "4HkMiAAnNr1C7BQB69UDUF8GRSdqDKWZ8Co57phCgyd32C6PMGpp1DMScy5khPZ6JVDqcMAgnd7my4GqoHFphNi4"
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
