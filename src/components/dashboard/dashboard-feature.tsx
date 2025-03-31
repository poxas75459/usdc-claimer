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
    "65z6bFaxpxHyPy6p5kMDcaqGSumHdetQABzHy6tJjwzqk129PofscnMLCZjS7J9AZtBPhoLDNi87h4a4XhhyFvLJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57Mv6Qyd5TE8X99ShRmPoh7rSzajae6n22CwYydDsh48oHicWAPF6ssFQVmET1Uc9FpYx7GFBcbfDmX77ZcqhuTE",
  "key1": "4eryq2Pw1FXiRaDSbFdLi77CdEuWE3N7wabcJstFJr9bm5PpYCZZJELPp2bSutkUJFju3n2fstPnB1e3Xx28kavH",
  "key2": "25MTBUbY2NcbgGQX2RDS8hfYDcoGerHFJGGdcXM2rc6pLFcstNJyGAkXw41hJjaoo8XwXLbuHjsPhN5dMmdMZrrN",
  "key3": "3PZmD5nFitHwrQqwC7pRPTT99k5UKoyMHZSaD4iwXrMXAB79snBevTJdbJedEwsKrXKayPy4phYbMPPDkSvDoUuD",
  "key4": "5npgN3g2n8Rjjfj6vD286qeL3wsFFu4ZtY8fSW6pauHR6G5GYVC1NDcXkCVw2ktb11BEHGycXqBoWPJWLpieUomw",
  "key5": "5GVJRVrd5iR4FMNb6JoykT6UdTLUWbWhcEYTVP92x15F18BKYsRFuvfM6w8fk8cPtAi6nKEJra5cCeh5avDmY6EL",
  "key6": "2jtUyFSrKirH8Twt7qELot5YgGaSFxrmwgxsBz6zVZH2pNFoDEwK4DUFmHSYD4smEAaJFoXpAQJdpNnnWprcvJ46",
  "key7": "4pqwTuxW6jtL8LDYTsysBLJpk5VzY6mJg8ZxT8neqULBDZsgACn5VVifhzcgSh8HQ3edQujmDLzbyqaqtMnYb1y3",
  "key8": "8Y5FTmhcLFC8EM4zV4ACLpH5DKrDMjpSgPLZce7tUhahSXoHhVp732yQcCbRmoorgfYfxiCkrGTWtfQNB4V3aGp",
  "key9": "4eNTpJXvhviuvFAXdRQV6xchQxpUyidG4vT5x7yjorPrCd3YqdrorQR9wqM7ARj7y28tjBWQRbWfE3NQdN4NTama",
  "key10": "117UXhCVALtABh3UVyVMpcqELDxiQgbkcd7KjdzsJdZGg7exgsgP2sJYBFY4fN51xF8e3exaefeiXRumdKh181q",
  "key11": "3rzKmunnCxz1yeQKFfBkLaXT2tYhd3SzZGDecKNB9By1b5QVvhsEE8dTT4hcMDTYnAEAufZ9xjCaTsmZqtKWamq3",
  "key12": "4gWVjgB8wnyCMMwwKMY23i2a4WtpK6y34PxwKe8DPscvPCujjckkHGzucCsKtyNcDTYVqvih5Ee812MzW3jmDsQr",
  "key13": "3x1SvTrfq3TCrKNAQfEpKEktiUTc3S6EKXv4Yg8f4qZJ7JyMEXqeJ5vTYc6HB8RBDgjMQ9g9MAdvviSaniTR3x8a",
  "key14": "2nzQ7wBgqVZ5AnufX5KWThBXNr7MrpFTy4NcfLtbZ1RxnaDfYp5e5pnNknEoQnoa36Pcn4DTx5rNVR7jhffSbnY6",
  "key15": "5pyiet4ehMxmmJTxPe8S9NWwZPgoxCnFRASx2Nd1deksQtrvDePyqmnhor2n6SUuUwLiY342N1ZPEDGg1DKryd4U",
  "key16": "v7kBQBaPZuALhoMjAz1buyXyYdrWcxXNdF2JyJc19rFfcxp5fyF5Q5YW64iHHk6vbthwsRWqdpugGcL7qkJgXG1",
  "key17": "wkaQ4u8z6WS9jzwGagwQyiB1QnjKcTCAQpPjotKJCbnCbdiBJSDzLAXNWMT5H7LugkUDWrwKZeai6t311ZRLLzm",
  "key18": "3mqirbbotvAnqwAKravvTb7U3ZuEmuBnKUAzD6YaDCbUMQJPMS83UR8FfU2zvje8HTUWKuoBDJLZE7MbgKYuJAZR",
  "key19": "4gVda5MPkxnmQdkJE49UrYE4pg4P5saD5vEqSzedYk8r2AaqSAzcUxEFtVykvcwDw9Eh9BH7HQs2T3uwuYttEzRm",
  "key20": "3p2QXYqbe5tZKkrRQxetqcS7RQEJvUF4pABxM97j133PP9w3EiLaR5z8e6FiCv6T88n6NpE45w8er9eDzg2NmWbp",
  "key21": "gmqWoGawG7voYPhTFEaqHXboiQkS6uGS94rWnk34pCpb6T6ws536naaAvSsDeiPfLDtBeaTE4EZaHB443Gt3yCS",
  "key22": "2HcqeHRTQtNbJSQXqsFsJtHjvEmj6nSrG3SaKLqXELPkLZcg7EGrYzt3XFz1ZXamE9p6VfPCQ5Hoy3sKwkwtdDMS",
  "key23": "oXKdpRKyhQC72mi12z7Tc37yhYhk6YYxKfNFfY1nrBTcVyxQpYLByzwHo4RnqoDQotGMvCXjuaQ54kBiuB2XRP8",
  "key24": "5c2gNpNxNFQnwBsB5jeG4sKEuWuynNsGJ14N8joZ8LZ1ByabN1FCGBqv6iznJUywp7adnvxYuLic4ydSU6MTySMb",
  "key25": "5o5GjLeNz42kFtaB6cDWRoz5B4Z2quyjr4Sf92XQLz3PQfXwixqCAFka1REitLgydr2scSxRWmPZt1KibAfXZB3h",
  "key26": "3uQ3noYdGoGK8W6m49Ru3YTGk2dXnQqSLj3fRoCLCnhYWqXGoKgQHxNbvx76zZg9M6d2p51aprzB8yXm3EzrmysE",
  "key27": "ohzBzfjdNp5FMc4KfvFqHYmKoy8H4AFCpkt7xkrzaVdue743fKVSEhQgtMkedVrkbx1VsWYC58KRSJw1Rxns7WT",
  "key28": "C6PYBzKaNz2QmCsRT1eiqtZtPQ9kKaxJZZyvCwLbGjLT6QJ1HXVS6xvFrv4g79qM91m9z8iUFNdqgc9bS6BFFft",
  "key29": "5gmUDZTUcgwemvozqJkT9wj4uZzo9pPpkjAosyH55CDhwkRkPbu2j6YfdyDBmb8G55qZUUqPq5uLBQqm9cAtveXE",
  "key30": "33MDFHLdA81PXU9KNepqefLtdZggaTfj7ThAJGKgiGJoJbziFYTd7FAGtP81Wwds55eA3ggaKEUNFHE1BHuF96o",
  "key31": "4wvPtxX9mitNLYqEC9KFeEohAoXdWNKn7GhPfVLranF7jPsSSE3PZJfwrSeBx3xVquPbYGwJXBhBY6JL4hZ3xuhq",
  "key32": "59Xqk1B5SxJ42pJsRN1U6VEALHVLsx6mLeofELniDTHQKTZzBGDEDbbeSex5ap4PhDzxgGXTgfVkVejRuodzyHWL",
  "key33": "ZSjj5f145DC1DoPUNWrRuWexrB9GCRQLfBju8X3L6p9GYki6BBE4HynLFChDX19ddAv1ChhfNb7LfCWKYC2XUcS",
  "key34": "2gHuieqegRoA3qj4C88q1vH2qN8j72CEYZEkh8x4e15EvAtqCm1eB83abzvkGo8x18gRrbscTuraGVSPwVtY5q3K",
  "key35": "49cuXRJpZKAora9DAp99eXWZKpv5n8ecwjCwY5yuaEZgWni99cDqTtdSEa27DBXbQYP9wf1Mu4eqFotUDLQYLci8"
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
