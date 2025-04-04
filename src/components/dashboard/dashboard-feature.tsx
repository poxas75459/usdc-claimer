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
    "LUxL6U9HdeABVJhS1Txub3sE2ANx4Zig1xegjmbJTyCerhnPaTBKYTyb9JuccD7p4QNa43pY5ZiqTMxFuwtoUwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SFC47tF8PZ2FUNSzKahVVeWWcm3N49YWP6eXZEUeGA8yEHk3UFmHF4VSfHzroBw1wtHuArbs8zvyBEpqgXqFCX1",
  "key1": "55i81k9XFxP8AyUNQCQpykL6sL2j4YEDtQTTk4QRANbRK5NAfwBEFWSNAb7u8una9992qMvNmw3WQeWRoXVvd1sd",
  "key2": "5mmNA41hojqvnkdyFccXwe4QcGRwCRCABSviyiv7Em5Z5hqhDmw2Guw9TA1aLgpG6ZaHXYFwd6eyKEmKA19L1zmj",
  "key3": "5TsD44uVQzbYsMtRxJm99YW9xhGYXuG3U9GRufyavbp4qH3tMLZ54vU7Ei1Jkw7RQhmpHxQGVpiF3V4SeEZfrq1h",
  "key4": "GEoDDbPXsvk684xkonvK7jk3LsEFQgJYXqbHXkEHp7GhBg1ZjU3HLEX4BMCCpeLdhzpwfyiB7Q5JH5i1VHsqfoP",
  "key5": "3ffx2zWchXjLS33LTF2GBgFoRfx564C1nNSZKVBR4xGTSs1dJMQyGbLc1NEPMqQQMPYUjbYgeGXPCAKNz2N887Jd",
  "key6": "39DDaD71QhXo9XjvxfyH5ZzRZ24nDVYAcjse3ftvEqQYU54X2R2GiCzcc8yp4fsjw9VUZwyjJq7CVUoq34zUqRim",
  "key7": "36GLB9NKTunk82a5xNjUsM9eWoVe3wBkUiECYJVY7G7deA7aw8FdBziN85rJVgXz55peE5Lu1iGyTa72E1kqXk23",
  "key8": "PVeySm3sfrfEGRtWkAU14LtKVt1vwz6N4AezC2NukJAtUAXLy7SnSqEnwdmiXGBSKb1PQbYYGWv5naYmNCxZBbr",
  "key9": "59tL4m9kDCL7uxm377Tm1v6oRhg3eR41sLSHMsSUwAcqhdMNF7kuBTMc6DpFg1nXAEmdMu73VobXGBVrzDRM2xHM",
  "key10": "S4uiVdjq9EQHRvg4W6o5o29aGj9JwtRrzYMxDwnoLpbqcNzGW4VHcCVsu5dUHshzPozF2hdHVB2JXWsaycgMUQR",
  "key11": "EfqGkvv4dKBjQd5obMUyXjcyQH2gBNjrY8tbeTHVsX18s85hABaEqKkgUCp338SKssVKMKHXy3btXKXBrNBg1RE",
  "key12": "5ygr43zmNDhYsQBQt9Fq5oQDkr7rw9YvngRQnpXAy6fmWnV93u9bewv6BR37BzAAxXiVzkbAvfSoWpZLopEVmC7",
  "key13": "52pSWmB14a2qFtb69vRAsN1AfAikm8j3AYQ3jSrdx5xULiALiu3L3w1WHDQopVTtvXTqGxbGPpKmNw64VLKeQKYw",
  "key14": "5BXm5vyNefTX1gjwVBuL8WanjXcvx3Lz5N6y1kE2BrvAek8Ao65fbywVXTDQAFhEg8apujfb2wBfWi17y57roans",
  "key15": "5q4jtWrhEMG1UizXQatpfnzdfB43TiNwEEiUa5aktAYCDPMy4Gpf99N4wjp7kfQ6rZEY7QTqxwDGZvhHEjzjGA2a",
  "key16": "3CJTn8euw1KWFTPV4FmffxHVVNd56PRTq5Zq6CZvxjZEyx9Bkr6nGUwmEsQmoBQrr95GcqttmhoKSTxwg326vhb",
  "key17": "3MLQ8189XfK43CF43Fd7sogULVnFnfAQdkFdXzAVNe8GLngRcJWefDSaQSspQiueTcpMaBE4Yq6t2jVCNDip9ZR",
  "key18": "3hK6pVo6wQbtCNGTkKjrWAxhR8kf83uJiLbe8DjWhunY8bUD5UL3YamBBmFYMtwXPqjZhtwKQA8CTfngWxeTHdBz",
  "key19": "46cH1VheUUzwAkNnfRogQ2NM2G9jcSFgC3mB2yx7gLzyvi8Uvik8gSfgef5obeAtJC2PqZSBScDDrk8DonV9mqzt",
  "key20": "63XuJ7R4SFfG6AdBM3rvMhkbYc6QRUkH6UAxNmqcfPKjVeGwTRQ1tPPqT15kSeVzcvXCcvvgWG8NdeGYVZoEpGMN",
  "key21": "58WUsuDvrB7N41ZTZT1GXDrQGjFJY2NfG5AYu44A5zht9GnyMXskL81T9xdqHyAuxv4f1zRdBnh3CL26ZSah6FaW",
  "key22": "2MzvVhbWhkMD5jvi1jTSpSa31S49zWPsVuVPJwyz4hUiAV7ndsiXrHPeKnFiBWv6egb5TVD1BxeyZ3tgUWzF7ikj",
  "key23": "3VkWQTySqT2dyMdh21HMmqFkgENTQUXoPcrfKqgeNnp4LF2vpWTdmu1TPx1CA5EsGBAW6j1uRCVrbz7j7TcEPJGU",
  "key24": "4M3icTXb4qqhmdi7VjVdBrNzRnuh618Ft7h1dTjuk31bq74pTD7WifKXcxXEDZeFVEbVpTRUag8WNCFZDWN71iCP",
  "key25": "3sHcTkbxp7JkEr88gkfxwy1SYaKZ35idE4LjnsoqeRyvQqJnX8joDLw23YV3ZttcgHKaxyYevWtp1JnR9rz8mBFz",
  "key26": "g4xdSVm5U9V2YXShfFdH576uzSifDYCsk8MyDq6g82R3p7999Y8cDMfttA4BkFjGZUVJGGXSG8TRwn1Eh4snmUz",
  "key27": "5V7x3eQvqmjJjqWGsdCCV4YciwNUdWVc8nLyRPs4xVxqnWj5TSXArLZHjDb2E2cVebgruc8WFEULUciSadtygRhU",
  "key28": "61fWEvkGWaNuTYn2aDRLj3XnPdG2WWdJnqZcRhZ2KoGwzphj9LomzdfJc4ZjzEA3MZaB82urBiVQrXdhZ4QpCQig",
  "key29": "5sUfBAfqDWbBgLbzMJ1iLA5fT8SKS13P3xCrFNz6ft6CYYpb4CJaAsJtT6wsufpiuseX7JqPBBFbqaSSSUDLrwpt",
  "key30": "3AbRWkcktMbqDsQ1fFrJU2cMibpzpUGMNnCNDPgGQaMTTnfnjhqSFsVkw2zdy2GwPgQwrXoYFwyzTfNEPRrXa2Xo",
  "key31": "3CKbDbGyYMgL2AEUvsNrorNQPyCjEemAsQM8ZKukBHCyZLXjEUJ6yXGcvb7fzgGD9a78EyfMUqLgR7W8nv9PfZBV",
  "key32": "4aR6cKgJWqnfsTKLFjWtJeFVQJuZKwjx5vUqsUmyWACsNxckfHpmXpKL9fSNZAyBYgV6eKCTrgsDDVvmkbqU5wFi",
  "key33": "2xuSCSeGnbKSWpREabTGBPDgmehzBU9pLsRrmybSwD56ZQbGeSXt3fDn5JoFRXesXzSTtpDpaMhM7ZndhaFBPZ7j"
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
