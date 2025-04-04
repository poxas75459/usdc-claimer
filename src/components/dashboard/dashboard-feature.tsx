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
    "2C7KTjegt4Wgu6w3TtHUrWqpbHY9iBfCM9iobbvP6Rw5Y4Z2sXqabX6ZmY6RrB1SfceC8fer5btbJd6RGVscWDjo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HRnUcETgtuvy6bXqFdmiZkLauVPteDniuvLyyTeriBoRtVvcZHS8bmSmFpzfUaCJZKEpNA5JzuTC6gBLV1mquRC",
  "key1": "5twiGUgWEzMfyrk6ARk1wb2zoRzzEvrsMsWxsStiphdfy5op1pEd9EkNv6Ff9QxCsr4n3h5sQVnrPd2pdpGaBK3M",
  "key2": "5ZfkM3ZWZXd4sMjvEfpbgkqkPiBhAsGL7SMphq3zNF3Gh4q4ZjY4jmEzKdfijqryF947XTq6BqZ2MokdRPwcHwL5",
  "key3": "4za821YmPkqRMNYSGZcY91bGwavvNEtbdVFgEfzeHzjtTygT91m6hpi72oJRMhCBCZfPL8uy9iJXa1t7ArNN4sTN",
  "key4": "c7eDaByLFm6LaR4N2gR27VmUmhXoyWjVPyfMfZpczs3iwW1tTWhn33tkLqzHqtjeN3DfftH5eGKvMveSe8wCYbT",
  "key5": "1yGp55moA6ae5ekokhXtP6vpmRNmueXbxhZwqtFTZXygeqt3Anh9DLYxuAer4BeKPbfuyEU7612pJdgUxkqdRh5",
  "key6": "2Rd7khm2LHK1BDQ7E3jAhY1YHkTCoqWhvbLAk4nV2wk1tSocZBWLDDpkfyZUHZQGuAeBnUUmbKfFgRmG7a9M9avL",
  "key7": "s84AouXroScXmyRL34ckJoB244y2sWpvgPqUNUBdA7cqowyBAuL2AyvGnF75byRU8yc4jbXX31kURP2EzM6r1Ga",
  "key8": "3AxZZ7UoQcMqcNLKWPzAA2P3NAYyvh5WNF8hKvvrqyHYD2wVaxCFiwq8MzeNQnysJGJEmtud6Vdj5Pgd6kx2yYh6",
  "key9": "5ir6vzYu1TEamXjcXtKyuWWJ7pDThhfqmUNTsptFp18jinxiy3GyRFDbM5A1Wp3no1dURNfGPZQBpXsGfknsY7Vk",
  "key10": "2tXZQf9UpHHViDFtoHVCVZNcopyJfncn8NCweC32HiG3GeowzLTsvCHJ1QKzyDhJCQFjZ8VzSyt3rzDTSbdddjCJ",
  "key11": "32jZ1BbG9zsh2oq199f7WRdo5aaZwh5dWa8Ga465mLczNy2TH2fPqQsESy7bVEcYTLcANiAiTjfFtjmRude36CWH",
  "key12": "64H758mUEUyDZxCr6qwZsdrmoW67W9UcD81tUCmg751Xv3uixpDV9ZHiPmPDjXGkPZ3ToQ5J3y8uGDqPQ8nkSygd",
  "key13": "3MdA3DhtMPW6BXzU9aGvnA8XBMdJw182eCHejZ5nt9iUVx69WmvAP2wYaJKss9uc5vEchFZvRRVaYXdHF4h296av",
  "key14": "4Jnz2TPRdgqpL25kUPkK7uDVYrMuq3qGathXC8AZtbJcM8i6VzMwvtXtRwL19jbwAqQZyy1uKEvy4ARiNB5uygT5",
  "key15": "5gPHV63zRVMPJh1qZeBKENLVTVrVLCZD7AaDyT4MbKY5xy4ymghnnz1MV79gF2vy4PGEtjUSNYsnyBj6c5616cxW",
  "key16": "484wT9sHK4oGiMbXLYuPAJk1iAj2QrSXCbNLC3mcp1xWEpUcgktZMmebvXWcZrQCHjTCdr3DZVdYy1p99G86nEwR",
  "key17": "64Q3yyoGiTPPTtQ8cjGnJnDAUvvKcu9y8CMKJxjUuNFCbbYRQxsPmxr6RrHT4rp1wpuBh8SAMo7g3LJ8JkZhmjuu",
  "key18": "42e4EQohWFJ4zpykq7bJo5poURjJrYMe4cG3rHFanRkDJt4RbqW15ZoHg5U644tT44buN5H4Dc7Kh4QH4HNUuti9",
  "key19": "5sd5G3fgoGfDvUAp3MEMgiNEN25mKJwGgsJ3ytKbhxaVPWgEyofgWb4HbQoQAH7R6jiSNegNYYw4nPkgs9piMe8R",
  "key20": "c69MGWgHziogUyAU3uUTUosEXKd6bqhNfjxzUfo1LqNhYxwd7sprFPNH9beKctLh7qna9CXL7mc4gmbwT2Jih7o",
  "key21": "4s9weAZ7NN6T3u8SiuoDvc9cRyAwqpcdzs9r9KjMoLHCrK9pG9dpvrFw3tUKu9jkggHwcGF3yVwWgyFx6gQcwtYp",
  "key22": "25b3k5XHd154LvcwFpdTn9K7bozoBraaVGMDGaXaQhE3KDKRkeFVzzKhr4Zf2w27ZoQGfmXyrkNJF8iVjW6U46u7",
  "key23": "Jt8tXGQMWpvGxhUAgmCESs36FYHSbFPdN9SYF7WiUC2fqv1SuPW6wQL2aH4PdYQ6QBp3o9iJXmQCzqYvLQ75S5m",
  "key24": "4FN5sTyx4GUVANS3ckgVkxXWQiyYSjvzC5V8NwHzncUDzknr19HPdWhtNsCeyU6qx3RjcDE9wtBM9zKt21N7CpzD",
  "key25": "5bBJtY9XtBtZT22Zb2SMo152XYLegXG2cY8b5sokfWXDEK3h9ZHS4rSAf73Aemhjknm2yhte8FH664YaqXBvdxVY",
  "key26": "4mRXe5yGxC37J6pE2Wf6YubmGPz8QXonRBqnUYq6rgTAtjrTCLQmHw7jqccqRbkUEMA5bFBs29NmGSb4DzaYYqGr",
  "key27": "4bgJ2asHNbTttnZhK24jtAKCV5PRkjNWpwrVFXbSL1FrK4Tgjokx3et8m2rtbx7697uDT6g3P9U9ziji6f9DPUNV",
  "key28": "z1oBxEzNVncBAJUvD3PYc4sVkPrzSXjZKvKVjUfV81mSE9bDmYuFvYDmZX8tEGTgFCr7W6FAXaZR3k9HagSiSRY",
  "key29": "2Eq7LmdqNw1kHDzwj4AA3kuV5uRegGNEj9pjrzjt9vwacukTP3Vj6CJd6SCD1b93yvs7gyCky8s6NmZ6avdZ4V8o",
  "key30": "4snARCTGKTtyfNaQdfsfbt7ymsDZ8qDei59XXgA165e1yDoozoKPqVgNqPbbMtZf6kHJJVEkTGyZsb4wfQTp244X",
  "key31": "4J8k4ETH5GA2hnPTyMG17VLacpBVkkJjFurKqtubLswtMdBqMTi1zb6pS8tWZnaT7hZ4wuzV6f82JJ7aTqbyofB",
  "key32": "2HpUeJsMhBkcTELomAfyL4EqwWhYxHzjy643ZfAjcTZF3MnJZaYmZLf1yeBmGi3EzStxU6Kvqp5xGJtcJGbjrqDR",
  "key33": "2C1Af1o7WUETz3yNXtvoffRqs8a5gcB2Xzo15zUYXKuAe5sinXkkZjCQ7vBjbuzAQV6VxYLZpNL2FxDwzWvSKVUP",
  "key34": "5Tw1nadt4phBb6MX5tMeCp6LPHhq4twTEavscBiqL6hs9hKtWBUupbWWiENZx6rEb2nae1VUQMvPDoKvgjL5GcyP",
  "key35": "4evFygU2MeM29KLoY2gAEi7tUBJLRZYtM1qqDsE9Bj2ZF5Z1EHvcQZRESPHvrYPQQjjCMN2GTED88W2UwuqWD1x4",
  "key36": "4xyEE3BhfhtKX6d96j5DSYYhuwytCcQKqYzHRHp8UEjRajz7yD9zBPDqiTTbVuBNMesj2x15HtvgSx8RwVy1wcLL",
  "key37": "2SYt1SiF3qEDVRfXeQxTWpood6SsPNqfSDAnGW42jBzS2HVKjKHkdKQY2TPRSiZJfKzXHyufJUV3p9LL4yKNXSFW",
  "key38": "2rT1z4qSt6oQ256AkdH1bFLShqo4Bg8h6VTvPZRCgteS9U5vi5qXCKbeNKCjLQrSoC6TMy1aGUNBGHjYfUS6ZSKt",
  "key39": "5BGnf34VmpyiufHhKj6eCAdXeqdeMCxpgkYhedCAusmoJYuYFHg6GFFA6AfupUHDH6cvxP8FHLfUrbfV4NfBBWCQ",
  "key40": "2Vgw2YHA1z2fXAc3pgVFj8yYXXGx3WMV8RuHvGySWASvG1RARicapLsvyfJDrbtP6sBZh6MsmhyfgrsBrsFZDgzk",
  "key41": "54FpS4MfDKXsDQHtyH82PkeKcuG2UN52s4PbSMNpFkkz7nAeGaW7H557N3DCoxbok8QZTdvkRfignhgaKxfmqx8v",
  "key42": "2vmQFMU75tHtLFJWvLaBFX3gzxg2D5cqcUEzJNBMH44v52UeZFzDBvAtV1gqZqFGd3a8FvJTi8VXmfaV9EvSZiTX",
  "key43": "568qqVX6Ct16YkNY5nui1oquGz6Vg4SVdYTzLD5LHQR7bvWgvFEmzZsZeptJS39rmvo3zHn4MzbWe4CzsBzKxn81",
  "key44": "2Trk9HSoLKnrnaukXn9aUyH7wVdCVfLsSYaUU6cyitDMSA6dsBH1zciC1roc8d8exBTwo8LFXEvtdgyyC3ffVdGN",
  "key45": "2zFyzrGtSVaaqA3E91MZMe2Wwmsh7f2AQSwnrS4wqPqKZNrzUpC7zMse3ny4LysA9vRcHrssVD5RfyvWtX7c8JdL"
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
