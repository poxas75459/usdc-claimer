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
    "3mM1pBkSLNRfocF4e7zFECZRjst43mFRjR3PWZJ77ML8hYspxzM1PtRfwapP6GYnxZo5GkZ53YkE7FEU6Rm8pRPq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AnxbdwzrGF8o3aegQ85rGR5grBnKYtntqr4kkurqY35giGp2W6QGgr631CS5JkzabgLQVcGrQneJ7eFrd6de8au",
  "key1": "66EtrZgPrUsnWjWBLsfrkpYzh9qikFQfS5m4dcKAX9uvhZGWMKzmPFAMAzqimQ77EV2C1YFHXNnRrDY1MrSj6osk",
  "key2": "5MABSEbXBmnPjqoxppbkKHaTuV7NDVbeqDJgdeLriZYs6jR25Zr8QcornnmfysNKt8UbbvWfz2ULf2RK6ut3t7oe",
  "key3": "5ipv1GJXKKMMtMQ49bowFWXwK29rDatF6QpaFbWWJUVe9XJMxfp85wtfAyNq6tboFn3Mj8gZuivhCj151UZgC4dC",
  "key4": "5Wnmz7TwCGBa5HwnKqmLhf6ttKDtgj1z7UETeAVN1poheG99u9aycJMPjVcfXPcKmNMYXkPPqrVBDXzpEyHACNPo",
  "key5": "MS1K4ohWAwBAGHpAzVp6KUTQoEGNtbuLbYsSTFZEj13fEsz9DcLHCN9bc2pf3o5dofTFrCtfHEQVrUCsDWhBcBc",
  "key6": "hQRz3rafpeSbbs448fN2HH3MWq5JR3MG7N4yf11hykCeCjHGtHZFF2yn1wGZKeiEw2FqS2sPG7utWBtCDyUYkje",
  "key7": "5ZQEc2WTc79VQ8kdY1qq8coga94h8Sty3VVzdAbiCnR88YAjrwdmMPYERPqKu2WoqxgQfhVeBS4T6dcgziLn53ae",
  "key8": "qTYXGEzdvF4LgJTTsFMoodCTtd5NzGqbHqV9oZx4728TYHMa2SFA4cADe5mmGjTvKZz2tHyg6q2gWZ1ZgXWwcgS",
  "key9": "4Y3exTVVbenCtgpfwUrAKJvipDvxjSjYCF4bwrjDhywyYAB4Vwy23YDoBDGNbKispYPeHvLBYij9yEYaZBMWQB2M",
  "key10": "49nH3QsPFLJT9XMGJ7hutDUfMqHtvp2KjLteySTTJMT7BgpmNGPQD7foALBdv3AnQ1dzW91j7sFvZuEsqBo7iyqa",
  "key11": "syCGG3PeN6afFagFTUNfWcw6iyFSowevdEnwbcnWsxakj4D6BRk1w7B41icoxjxSRGQTwhJ2BWriGwmXqAyJfek",
  "key12": "2m25BZY8geGWZnEXRxJJKwVG8NccMyejunrApBduSyEaCPg8dpQigHWFYMmvKHy9MW4a5GNKgcSvEg1MAH7GP8NK",
  "key13": "2V8MSAV3A4qAG7taYP8qaZedZK6VCkEjRmDUfYVeJh2awKi6SLc7QKtXaUqGsDHT6pysPpfd7H8N7G1htHLE55Du",
  "key14": "3Go55yjYXJyA5kReKwnafA2yp4BBbhFNS9DHt3LhKrKnExrjqT1cZf6aPQ2nTKnXgz633nmgcpsGjZvqpfgDDYSf",
  "key15": "4zYAgHaGULeFGXUZLAez3kRCq5FrWkQ5mqizuT5MGoMcxbk8LpcmcnG7mQvgxjHuaQJWF8ewuzR3eLN6TnLzWSzR",
  "key16": "5TrXk8t9fy6e9RDdHfv2JCRu2wHGF4iQtMLA5dTNf9bnW9eb5xHwxKuaNhuwjQMXBs6p9ScYj1T9ZQYCmKDW2S5i",
  "key17": "5vF4fcey8nNQGbPerQZGGV7yDXRF5FPGMz9PiZsSEHhvbk3uSJCuLs4uAfUJ4puddx2SHaRxrBBefjY8M5rYr23r",
  "key18": "3W6Rzurm5tbDczZi99Nb9fSSKBBAS5JCsb6Ny4gq39YWQBktwGGKvZQLyRmL6FFSVaXjNvoiAFJoxVPpqjc4H1WB",
  "key19": "3rVAKsbxi5NANz7q6o5HVDersWVhzhVz1SyDttNs9caHRTeZ5Yw4TyUstSqJZugaTNVfRTTZxk7bfS4Pgz9n2757",
  "key20": "uc22Bn8dKYKAY8rvjA7ppJcenYEeyuM5pez2cMYn9Aav6X5MNYmDh6nkdvkUQtjhXyT73so7EvmXuEYx1GFV72h",
  "key21": "5XvdVZurx6xCstJ6d1nvxJm9vCqtyoSVJWCEqYoJosXoT2gRPqvQqcfdmDTN9QfLSoZLuxWKSVQ9a8vYEve1LhSs",
  "key22": "4XmWPM1LLH3VJJHCMUa2ZRZJmxcQ383MJTMNWunaL8ZnaQxkmkE3aVkdwyoWzTtnDvKjctbSMGNJ1WdJwnygQ38p",
  "key23": "4sNhzgJQVvZXFLRpns53hJ2gyMuSvJ9Lj4QLJJ5MepFaZ4XeXUDahyHQk1aLcG3BueSUQvd232gdRE7C1Uoux8xt",
  "key24": "cC72pUkaB9j6DFs6sWd3wVLh7AgkoWo1SXpqArgk9AMJsbggKDH3yRoLQYmg3pFcubFnhEw7VEifYkDj4BPofeG",
  "key25": "4xy4mankRery7niMCCi9Fv4tERM8tpRYM676hC5bKEDinDU9BaM45e7Kmsve9L18K9vA28XEkmqGLXp63uypw2sP",
  "key26": "2FwpWm8jbnn87fLoqTm1FZFVuJmn9yBrR6YGW3dipq572pHGYPPtgsnfi9GEcHwF559f1Bh2MjNnTER7f43Fv5P1",
  "key27": "32JwKQZsG2C5W5mkz2RtBFauceYawxzKyqT74diSidMaFJZV7WwSUvzbVggYVQs9yodnsxoas85aj2VM4Z4qVJxD",
  "key28": "3ZQfpoUZ2hxQSSfUZMGtcnGeZBL7hvXZJuPoLF1LNxdSoN1JUePRD1e6TajDCHPu9RaRBGAt9MJvX3AcJb225ksm",
  "key29": "2vTxnU6N9w8mjs4fBas9uYmEUfhFfAqJbTEayvmGUrVuKyR72FP63iv43U6A5JBtVfvWkzFYbeMo9faK21EeNHQn",
  "key30": "37ybWMvFBNkLb29C2Ty4gGBWnkjNbuFaDckxBWA9hRGJ2Njt4WBowf2fktvnNpFWjz6eLRJxNwgjb1n8Leo6M28A",
  "key31": "4wzhQvbJaeFtxih8EfMiMMJfVEM6vgVZcG8V149UsjQ6ktkHMJkendjkjpTNx2Rp9nZM7wv6jjq6R2VqHvYk2jKy",
  "key32": "2ZTTtsyvtFspuQr1KQbSLHtNF6CGDWAhdK1365Wr2ugR3S63TYFjKP6Zy1Q2cMBqQ2azfVLvtRVX56MgpotWShHu",
  "key33": "3fbdHwP8zRdB1eZDEsfhdFJBbcUqqbiCbStRS4NB6sEJRddmT4JXwNT1jy1vRyqFKQbenBQbeukzfVh2tqcBiLYt",
  "key34": "4EiWHx2cc2LhFaWxrrtu9qect7FJbwgJLSXWNMMSRwkgQSFZMU5GNNgz8QQokJTCzpPE5Z6XDn7MjVtQXohcE7RY",
  "key35": "XGjGPfUpwXQPPg2kzxVgE8sHXSTT85vwwGX12wNArNZT8qp1Yx2sdgjqKAcoSJRdBCDW8cWW9HSVEfP2P33bGjS",
  "key36": "5wMKCoHcAPg9r6hTuXonYxbuZsyFpg5cf37KPy4A6AJbiVCNyCmwnjjv3pbKCbXfky9q6PHYx9MPNohz7oj63NWC",
  "key37": "52z9ebtqBexW8MMsvaVDBtrGFFRkAMoV3NWRCKztcCFhzdPEmmL5pjgiQxCZuy4mWnXm99667JrCf5GoDWAjaRbE",
  "key38": "5CU2MzARCqFgGEvchJMQZoi1m6gzap16c8c3rUVC45cS7UEoB7k81UcmJwfmxUDgeLyTnFGXbGBitxyGZRYNi5o4",
  "key39": "5ztpR1EZkzWzpFCQ9yjpSRo4yeockZGntCPasd7xEYgGPqPHRbA2KF5zJqjugryd4AvNGGcF4ZzukCRbWCxhuFCw",
  "key40": "RZ36bSHYjW62tNgjMzhSUbk7ceTMEfXaJ9j3ouG1dgkCAi53A5u6AS3vUCwrNgpWNdEP9q2gsFegX26WYkXFhvb"
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
