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
    "2r9t7UPc9ivrNsQ278fbwHFmBB2SRE5EhxmaWYknntZ4C6K7qQGYay9GYpCML8SeDjHYYsK2jy8szLxUmT2ALU7F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61cTFv4om627vos9JFVQkFZRiusHwseAouDdtWgJxt8XLvs9MZqQaUvFG3qmeRfDpcSuqnr6r3kkS1VyfeWvkZae",
  "key1": "2Eo7oETJ9diUzLZge2YJt8JstbJ2WQTEYcdEuptSiurYp1c1eX7hFDCpXVqbAhRb7cbMHwNtKKu223ctxFozPW5x",
  "key2": "4c7PmQ4TnxobfMwgxcQA6i41R5CRLSKP3mhSTA8kAS9cFCkswmGc8WMuu1PnSnTYjJ6LyRxzyubnoCB4r1SUnGyq",
  "key3": "2mL2PRxgopyYXByVENBBrWim1KgBXYFHnFYMQ2jE74GaNjbVQNtErHCLHrV4oczhQQNFe12VRjG6pzXGECKyRkZL",
  "key4": "LnLAxNvxHFL2SNGvi7WU6w1AHCZY4HmYSVX7vC4dywkXrfZ5gSTqWuTBf8GyMwfnfV6o4qKpbd4pyAmdhrds28K",
  "key5": "2dqaqVx4CbMzKnjHcWh7Vd8mGZTyXk3hADaBL6zyYkor9hPS2Hbwq8nqNbT4xkeUwtToJVxkSy5MwF7zaWJP3Knm",
  "key6": "5mwLdRNUgwDzAt47DSWLhNq2RqYJ7o4gKf2ZPu9m1djNpHALKGynjjK3zRuhdojziMV5ttpBgDNd4vH48urYZaay",
  "key7": "8H6myRu6xF875QkBLgwNXajM3xDVeAxqpueAMzBkegrMopZ2xUfA1cXahMk8KLM4agntsZneipzDPX2V5vuw9k4",
  "key8": "2ZNmZB4GjYUhnPUSw2DGZvsnJJQBCAve3R2BtrnsnGY7xfCDSD1L8LhaU8fcUBS6FnMd6onVSyqCWYVmg7Vt1rda",
  "key9": "4bPshUvLs1SG4SahsJfhu3Ac7NVcNqELzs4PHj21hDMyy5dV48zgwvUiJ8J5s1G6EpTS9MPyUbkAhfTyvHWPEHXj",
  "key10": "4XMD14kSiVoEgWnx3n83byLU4Q22otaQycQ3RuZb5giekdcdyu9iYkUMNhSEgGxUJfggMPaDdubDjKjhW8EgLQNe",
  "key11": "4MdAXLE5ENTfUP7XBUJeteLrrHRyQs36bM4oFAk8x5hMhUuoPYAhn426eTdvw9L3xd6dQGogohmT8b8RUd1bKDtu",
  "key12": "2ZcWUy14J5KEdpUkhmevezUT8fNH3DWi6xutWXpMBHxXNxhWg3aPBLD5uupe3KUWcUrpGUr13yYKnDXBKYHW2aFL",
  "key13": "U9536aEDeobBL7rmZg13LNzbPBURxdPEHsu73jCVd8o5D2VgjBZhh7w6BbDdTLZ8kRX9Chm51DDFuCmhhv1JE3d",
  "key14": "4rvazqEPuw3P3njRd4pkVDweQLYCkqAUeqg35W3HtovP67Pbuco9zD3vnNZTs6jNwY1PrxPgew5hqyiPXf2ZyMkY",
  "key15": "5odLQ6zpBeDK5TE6KwQiD81XyjAsrxMcwD5ZYXpjjyAuqGytrAGwHq8d375cxv9WU1Abu2ndRpG7drnQ6HVLijXf",
  "key16": "2BDWcG64DaHyycfds7kKkyDHmgSh7MdZi7RVjeQA87yfjjUiKq2q5oTXvtLocbmJmEh4yGE4reLzUwdWXGWBrEtf",
  "key17": "3iD2aiGVArfpSDzihv9ANYR2wWvGrWrvCiSmx2zPDjeMd5pN2V83R9UX38thdDzyh1UG7NNkHHA7f1BLU1XE8FtM",
  "key18": "3kLk7P4YMAeVFkh2ND67qLEs5FCabMd3dX7ekBTccT5pZZdrztAPTphLgDg9oyngc92Q1QsD5yC6nYUvj3q9JfHN",
  "key19": "37mxGtY3HHYHPp13r2HbiCGREM52xQvdCaRm8QLDsM6reTicvixMN3AxXSg5A3rsRT7opXUf1BTFa8gJj8rbiMSD",
  "key20": "34j3ELbGo1WZrgz6Rvpo9E54vkVKyBBZNRc4Gdc5rRSLFT6beMREDjG5X7rYUdKr2q4C59G37QCfMWppULVoEuYU",
  "key21": "53A317tPXd617kT3ivPbFvxBTkvfDyAu75H6aJGfiTr9bn6SLvFVAKCCjTNxi6CYr3fdxjGNtiUKeyYBHTEu17w5",
  "key22": "3j8Pjs8FCo8Dfj4ZNCTpVJiccMviEXLDWrskxzb821yvjLgEEuV9KfdFdS2Uu31ELxC1pxKp1FsefR5n48CyvMgr",
  "key23": "5kXrC3cbhed1pETdj6iw1M1YvyZQK9D1f9HfVhNQGk75vSCsmd1hBSB5rAGt4wBj3gPT8WBuCJw73yuP6BqpBom",
  "key24": "qdQ7hQhsP2aRVQx5MU8fZf6dpEqkXFgVgJ6NGHFB77LvQuecuiaUKM9pLk6oL3PYqhTNkjcqocifUo99aREpAkp",
  "key25": "2TPDJPHEqeR5bKP9xYCxWwoaGAVKXB5Xp2raFLcHz3mYceqFANLDu2fnjSZMHgCsoDYpv2CKVP17UDKsNEc3XKCp",
  "key26": "4vZh16muScCRfnUZjRkq7rJT6Xfp2LgrLairUXKBsq9EZzq1sURGwZ7FeyZWWEoKWjMqZQPNtM5Ej6pML7pcNJ9Z",
  "key27": "2NNvdhWhdLK6ANfwjrf9JUS3uCRf7oyELR3APMoB97F9iEJPo3EkXrNbvKmEYRZcZAtJXFwBwRsFW72mu82dcbZK",
  "key28": "3TDhugvUa8iEyosQ81av34NrMRZB4GEhj3jTmk1SukmQPGEMKSPmRvDurJfjxXjNk2hPPLWWQ6T98XA4pM7WDoNy",
  "key29": "5mVjaM4HUftagpezqBLdTfLDvhYDWcaSy1g2tESAcHUatCshcuJ2zy5BSuZ5yK7S4vczhcekFEWP2aqZqcZeLCXK",
  "key30": "WkTrUPRbKg1rnGzUuu2GSqENgd3B4YHeD1HfthhrtqQrq1Jsni8hiFVh1eFDYYuLNE6YNbXWPoaENxdTK1CHvYb",
  "key31": "3jcowDDkVwoct58mEvbMiWFjUpZyUGL2JjE2LvomYNaEvJyvArHuuy3CTTTZpy4boGcLrau8FbrYKT2dsL57j9pB",
  "key32": "4HMyGEKgi2ihHYhEzLyXRDiVTYgZ4NbeRpVhiFMQ2caGeExpKuAU41ms2UL7Jo4HNzaoYjSup4noGxjk94mRPGiS",
  "key33": "4p5Wu4Y32Lp5GvpYCaZRgmNuW8wGpak3K6ZAGg9FAT21cSi4dEh1A22djhevac7sZEteqmLwz3V9kvo2r9h9i5PF",
  "key34": "1GmhtcGcyHKb2Y1pgn1wzXAWRdqHsaiZ1yn4mH5aJzULyRMEGSEs1KzJuxUobawCtiik2ugs3mY9PVoRJe2vAei",
  "key35": "4BZLm1qVwYemg3pTvNSs6bsHS6vvaStG37J1eZZBqvt8cjn4exBBPBAU64h1EXMaosrh7YN5gA96fp8ZHBh4VxPU"
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
