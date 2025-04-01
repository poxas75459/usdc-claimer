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
    "3KBSMkUR8fKPvzCtjXHq2wJg3uzssgbN7bLspTTcYERpDwnNQBrbQWW2o7RaLki9N46GRSmSFrZ3M8uuxFtJZW8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jfe3Z8W3CKXnH3A6CFCoSKuuqMACCfLoLtRwqw9vcVXsDXbo643cTAJYNo3EnRMxQ1RoqVxfJmbjmSQ6QZ3676S",
  "key1": "5kj1h18KE2JSS9WmYLMzqnuHFhVQUxBNknqCmsvRpsSBqrr2w1VDFbyzTR5379SjT5889ot3STiBgaQzPmuB24W1",
  "key2": "2xwGgTSkdZcvjHfo5bP4d6WVE6eE35z14hTS1vJnsw4GY49n8HmhgVRzxotdVtxTWJ4rm6nmdN4iZX6iMNAGCeH1",
  "key3": "iinBSyRCPzs8hpe6FNnT2zvPLkqcXRyShELLpyd2jnmSbqm4uxyNaK8mqQGKQ1JPxgwvxiVu51wnXxkxWBMPM5R",
  "key4": "4Jee9UgzEYAFHmPQ3m2LKBKKRt5n99RmxJPqfwP35b636MK5vUZ8Qv62oNtoD8MgMh48RmH7TN4JbUUzBGyNNsmD",
  "key5": "5YCAoGrExFXDP7QTzEQyc6c3n3rTrq6umSTGM7eCxzSq2sT4wphAPtea2XzoC4GD5tXPyBKXwpUzY4x8c6yeKJEb",
  "key6": "2Z5As91fZJTqD9aF8jh9VooURBRAXyaGn5cugp3cBg9PtUhJmjUej8414oR4CUkgLYHgTmQQ9fN872c1VdaJuHyU",
  "key7": "54sNX3YHkU2Xd2PK7zYVGYGCQNt1Nhgiy8upSQv7qAqbiM5dpuE5JCyneq17sPHyfaVXMd4cLgtcB7Kqd4ChGf5G",
  "key8": "5nWxV34t19hZm2XqjgEg8pnvrQY3419oS2ub8YJR25XZ1cZjP42b5uMnieF6gZpCY7Y9nRybqUwrhf68fzXMTEa",
  "key9": "48cxBeuosNDZ9bzAjw1xadvAM7Eoe3i41s4yR8nPHfsujUoc8whaMpWiUEfzue4aQgWzmLAmDhLqWGhJ3Pim7xxV",
  "key10": "3mMsX29yjszYXVD2eBsekLesQNic7hBXrcWtiKAFeHp4nCCiyQgxnFvyxZnT3uV6wTSDhRsykG7DwTLFdYKrj6NR",
  "key11": "5BBmhioaTiNfT4f2YWUScsKhRTh8PMKL265DbxWZGGiKxSJJQfwuM4DNQfskcjJTmgmVA5DKGEZaSEKi24GDv9iD",
  "key12": "qfNFcU4FPPU1EQxV3hxcYqLXZKaJYYJzSjojuqmD4Sk7z8XMjodDJ4dZxprNsATReYsncP4smC5yCgDUztMN2t5",
  "key13": "5f3nLA3MCwGFEBqjrMphHVNqxtaRpqK1ujGAZczdwTMhF8ZVX5UiEFZvnibRpmb1DYKbpB2MPqLngCUT2B8XhWD4",
  "key14": "3w9vaFSHXYPkT9dhvrFAybWMvwrieRPpqK9xJJXfZb5jewtjkK3Ac6GfTVF1Rrer7an4eFakjLfe4oZKDch9XKBG",
  "key15": "qUi8EGheTJF89kwPt48w1AAn1ykSJQqDejBP2p3DsuYQ93NriMS4BP69c4QwafVk7CB255fwdMt6V2LeAkLt3Rq",
  "key16": "4tQZgwVGnfZKndqLqnWBWHouYkYmXFW1BihsKYoXmZjbwzr54gQgVV3bukBYJQ8vfRbi3xBk9yngjVypzqotuLCY",
  "key17": "3vStoLmyQPJucD2XAji9iumC79d5BerEXKehEMs7M1AUQqQoBA9MAdJk481KhRaFefLZbcLkJ9MLF6tYjXLFvKDm",
  "key18": "iTFCLw63rzBsGsMfbFPsiwRHQvrqBRvvfMPYub4w9wHhBBSw8ib2zgCs2Js4Ko9cHPj3h7Q2bvyRiSZ3nK6SBpa",
  "key19": "5yyZh1eC533g4FYETqFVKu92Dv8AVFGrcDKPDVrfk7tuFceS9fMe8WdhyH7vsrSAq2YfPTABXPiypc74QzArNC38",
  "key20": "2mB7MMxAyCR9xB27yYeRN6HQ2etszEuuiv5Vv2du1Hha15YNkZmdLrJsq2ckMHKHRHEkVTrbZpCHDKZZG86RHnAT",
  "key21": "3njb9idRUekncus7Fx38W3VWfBYgLcUXGRqfDxKN4cyaJx274qcgBBPtk2CuDByyXXYpwhE1pQjYxyQw3A6rcY9K",
  "key22": "4GJ8tGF3PNN6pCj8cTkgH5PjxczLYakAwTEZHzwqTMxUa824AoNToRpa1WUJnsnNDFK7PDPcbFN6z9dtKYbTchPP",
  "key23": "jcMbyRwJw9Ez6Yeyo4YbyDnQps4UP8aChqGecpsr6NjDREdBWV8yivMvkQkWHNiSNqfy1eDeEkyxrpKPaAieuYQ",
  "key24": "4QECRh7HPBH7c5Lemmz4ZFjtS5T2rQNaDi7C4jZVsXC5LFxGS7AFcG688UCL2AWo9sarAq7TNH39GQtqKjqaYqfZ",
  "key25": "5aAKEZtJvbBVcbewHJNVLziRC1ZiQVGHWcVz82WyDadeXgGCQKckB6KfN6AekHDzEVkmkf6d5MPnGHFbbGmBu5wB",
  "key26": "5bEyDcApTvXSpDNGYjPHPjmhfGA9N1U5Teta4qozEgvoSPiNzEQ2GxBtkKPkWMoJEFGfJtxG5dcLVfb3yzet15Px",
  "key27": "52UbM9SBjQS3msaqqE7EWMEG1bU3dkEVqNapZzMGBZpMmBzyHS4AH5iKXx28jC5yaEdhZnnTUaZnup165QjVB64D",
  "key28": "4crZPn7gq83jSihYEYSfwhjx8E4ASu2bGZP9tEGfegZTbMsQPjyYksynS6bXHBUi2Hu6umWFthbohXRZGAHF1QXb",
  "key29": "rYLFzHY4m37b3MRHNxrzPzeNAtzV3F6VDNgc31HYwE1NrjdJzjM6qHViog7k9ee9CZaTgBxK1LTn8gMTQ5HhYjm",
  "key30": "3APq51feWJK1tix4YSuaZ44RNodduP8q2p7KVPXbNcbfoNGu1U7AjChPUYkZ5V8xqjV72K8ujpKw6kqivPhPmRmu",
  "key31": "2A2VWoELpZLWn1qjHRuYT2x75bWrKY6Sbww9nPsHxpKMvw3BNGH8UE1aizBHfQCPBFEtcZ4RZHFrjmwfEGPuhXXF",
  "key32": "kiHKHbj1NUwe8xHbj7TRZxzkqPk9WQkJ7bP5v1kbd7SEfmFskdbkJzwAcoYduaR1CQ5h39VBwhgUwFGthSoaNpL",
  "key33": "2bAhGU9X4mF1JN98sVJxnuuZzR6fPTJmHZQJv7sXarkENj3UaVUbpWoQiPzqTX5ofmKTHG2UWXGt5YvNkKHDsZrE",
  "key34": "2ZrCvmi2shUFpCQqmuwhU6VfBbmPcKyU2pLgoxrLnA96s7DGvZEEvstBdsaq9gGCn5B2d7ftDZakKqPr1EjvTzvF",
  "key35": "63vn3WDv415woRZogw4HdpQH1U8cppU8zsE41mZUsQKNGNt3cDqxLnHQgJMu5QJnrSL8by81ETabXfyQHqoAC2uX",
  "key36": "3CwTCcJU8p2SHdPKh1ve88RfvAcehKnSGBfeVsrFKS5fa9k2LVq2rtRvEsZBr5Ec8HFjQS2REUjj9qEjscwe5o2o",
  "key37": "3G6PHCWSD2FLVtQbWZvyvu2sqNNbkM9Zv1yWkG9jFGsJrvCcNKtCkHUiu9CtyYdSJiudb5U2WMJ38F6crcTHgDUJ",
  "key38": "3rKioQY5LYDPU7drHacNcD3187jEXRtsGcRx68DF7Kzy5whZzAZ3hPGqaQBmfg6XYcvtSyTpMDT6EPdRYdv9gfLb",
  "key39": "4DLpYZASWqf6nAG43mwdggGq7RMwaGhA6pZQ8qtDRF5CmeoBzakPwVdeq2GjfToub4cL2QN6x8fkFGwG51MTr9wA",
  "key40": "2TAD14hEG1DToXxchHckx1WPmKcs8CoShzcPNYTWgnvswv1JuBVrTiuz1QC4nTcuj1rPZfBB3vYk5mX8As4zuFhr"
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
