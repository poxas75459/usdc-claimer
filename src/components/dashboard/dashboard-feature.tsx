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
    "2PXBscRW4JJ1Jfu6tbAYwruNZ3SiqBWnBmjgUdftstoURYxK5duyqMNr7ZGGsvVcfcxQ8erSiShoGuVCWfzCfDTk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oNxBLLrqJd2Lh97pXTBDeiCbVfKXXkA8bMRvyBM15sLcts96MQ8HYk4kKEjRNJGfkeegpyKsecLe26ZAc16D5kE",
  "key1": "2afeYcbbTnQSLCeks6PwDEFor2PYgShz3TdBVSKHUsfvj71FHFSoo1wwiGMwRJ9UTDLezaTwfDR8KFPu2VTPkiya",
  "key2": "2FUVtLxP4vW48zkSqSRvp6NKSaEeG3ZD9UGeTL8LPUTmpdPGDQyAPT3rEySAbKmuKUd6sQBvo23zaX9WxGZueReC",
  "key3": "2irjqUeXk4vSsSMWXGBG5KZLnfYxEiEQrbHHHKRWR7VPpDYQVhjpPN8UuPUda78Q3YcrUmabDDHBG6P9uDBxaNL6",
  "key4": "4Lxobhh79Fh2iWNSB2EMsBP9XwSK95jxawGSwh3nMfA1mCHjLVsT37GiED44y5MKjNA1WBSkezAiNstyXRmbLho4",
  "key5": "8YJ25rK2B9qjoTibLQz61HRpy6f6f6RY33GMCKpizfP7W7JtRZ7Xpfm7CdmXaiRVxaw1SdXJGrEmkmkmdvJcLiQ",
  "key6": "qHXafu8E19nE7WCUSHsQgo72ZHDJpdVHr3itnSMLsK1joyVxEuBKCYGkoyvPMoCKwMUiq9tQZs8aqf9xEinsFgY",
  "key7": "4FdWREWY29D6Xp5ycZWPBhDnjLo79tEc3odkQJNQMBWksra7iBtL9wgD7ogzVsqEFPdDDPLR9Tuo9YFxRz7HbqsS",
  "key8": "4NzAmfTd67qpEDWPbtmg4sphExnAdLvGKEiPM7nVPHFiCRiQJW1xt2AprFHe9JPLhrNjhBrKDKCnWSkhVz247E2a",
  "key9": "4npb8EipLDqsyrkY4FBsuEMmeEFyXaABwjE5qeDKXQ3c5rDP67naQwuQpkuAM7UoRTAgCBY9yCF32wgTcBfYYMXx",
  "key10": "Yufm5YBrT7BDUp6m8yfdwFSVoEMBVBEaWVy29WYSZMgbG1ZayS5FwfgtWL4JYQ9NydzoRBXh6ChiYm2YdvJ7rFG",
  "key11": "24mZR9eS54KfSgDfxbDoCUKg8WpJqnVX1RYFyErkwFVUBrjyS6NbHbabVvfJGWvZQ7inEhMBNqjAktbjAsAZ4njk",
  "key12": "3ZGt7fuo5iTMfWyz2BgngwbMtg42dip58Y16HK6kAfpZEpVGmHsFhrc34FUi1jJdaTZbpqCws49kDE1MJKe9oubs",
  "key13": "4fDYHov7MGPcHiAHEk1XRxFwvi15y4JeadGJydm2b1vkaqx62e9xYGa6G76pYTBK9A9n33aiyvaAx3HNsLtRrGWN",
  "key14": "64y21FwWgXYKEUSEYtrgwym1NFQYgdS6d9FaGrT1L6mxF1qLZJtQThCPdDaaM3uaivQBsCMEckA75b63vmN97LHn",
  "key15": "5UxFzVyP962pCJPi48bBygZy776skEfwSX4HQHRyX1g3aqmbcCUxUq6jwc5QGBiMx7vRV5aBGjW2c5mpDPQHEnvW",
  "key16": "2LwHUoqoStZc28jeCRm8B7oPpzSDg3LCeAVPtwKMEZLvMLVeydPETxkzZwyxNYoU745z6q6F7t6FeCwErvLgzmXU",
  "key17": "3L1zEcgMGtoYSJybThSZCs3YKdmgDLkAJQarryJThrrjhuQgUt98CX3V64oaBTkBCHoVVfhgk6RrbNaN9AQqUYya",
  "key18": "2YmAw3yRjJSmzktK2y5cjHvjfbfBb1WgJ583A8XMxuSYFfVkZaM1jLkXv5PxsuH4HY4XNee7Rq82p857vDEbzdCk",
  "key19": "4y1ufzzqeHbxeJ1LMQRag1RDkGAWqv5g7xDh7mv4NKFMJbn5dRnuUmoASoTQzXQHnkzNeBoWn1axkt4zcuSsx3h8",
  "key20": "3Fb7HjRbHxtF11192HyVJYXv4XoGrcZHU7Kicvt5p9s1inQbKWXkCmXaKrAzd4asFbFoJbnCDh7BdduJH6zUx4o3",
  "key21": "4qvrbafM9BayWNWnYRFaiX9pbt5d7Tf9u6hncEypA3icFdAVUYzZiLvpQC4yfu9Y1TK8f1jX23LmtytGhniu8zGw",
  "key22": "VivgmS8tqimknnfFY2Bwd6NWzUXpv9NNrWpeYBUwdTDhc4A6rNen8rrsgFGDExomhsomgw7x1D9Cet7pcowNCDu",
  "key23": "i8DYMx5LLRRbsbotMJvYGpTYERyhJM7SChiJUBBcNG5eaRfPsRrLMcncA3JEC8y1d6RNnG5RAY35zNWsPgqrQcR",
  "key24": "29yoW39FKkvmwxE6EydeMCiBrBsJkci53RcJnnbJUaVzt9n9nDdJ8SeAJUexKHyA2M65e5VBu5HSTS8oiirtkmNJ",
  "key25": "4Qf1tQebepqmeHSnGvfbzJ3xuTEEaLqZiT7wSoGXgbQVHKZnnLBphWCn8KYz2EY1XBUEzSnvQ4hGoY4Edc6y6D3y",
  "key26": "4ZdF5kBQSMDAi1J8ELTxBHLvrpRbk5pvqY1HBPn5ti68hHkCJ3EAFzRiMCB5pgTthDHfJ15gbc5ASaeYaVeJ3AfZ",
  "key27": "36TLzbyHYfbmE2DsEE2iQTgFSGKNaiu9NggYbXvr2TRH7WhCX4uVLX6RWc85SMCKib6vpnPuxEHXqJUihFvEpDRN",
  "key28": "5sJn8kKPMhrY1Q7UZy1oUhhXdGDKb4dZhPm54HqE2qL1X3WRYisRnP3KYo1eV4MRjHgoixog9USLiLo9ZaLSQCFc",
  "key29": "5sa5XJaAofWYzfpWnXKydWfgiVJq2kLVKF3RjXJpQcsXqEKsBc2dZ8uzLVFfSMoKdnjDNwMJwWZ63VAxAnBQWLKP",
  "key30": "5ZwvoENbz12Te3k8CE9HemLoqzwJK2FffNdTDb1AUP8LiiEew2qYudb9nMTbq9HjLpgsgMLcFAbjazE6Q4AfQky",
  "key31": "Uuy2rvpnrKNHLkfd1Ed7QhnrxM1Z9Sqzjn2FWL7HA4jGZiLu2R3qApAXX7v52FY8yD95fvD9kCdCrQfmmZZehg8",
  "key32": "4npXYhhtwPWjpQk4g8SDpxZazgDuvK8K7yNzL3qpD65xCsUusA66ofGwxgWHsU4VmkU5RiZo4NjZnjKU42GyQNsS",
  "key33": "2RNHEiWkrbCXFw46Li3PzRZePfLUdaax9W5be4t2WSDx37vGEoaJTcKTYNdyhq65JgptFYCo19qbAGpR57VyT2xg",
  "key34": "5A36xsmuPizpnnPCjGkKNmBiGU3WfhEfGoHdmzVsq29VnQyS8E66QdLpPjz8jtRagGVTyJRqLJv9EPKQpW3mujGE",
  "key35": "41kqvPfCtgw3ZUz8MuSr88pjpEFnDBw7Cz5DaV5UzTJDZTn6daBVzE2om1uuD4843fXQceem2qyGkP8qBHZ4F1ps",
  "key36": "K3z9EgVt4uzg6i4onLRSRcQ1zEQfRv9cq2SYqPAogeg2hREpVEf5z3vVw16cnQfowobARr27muzCyjc3uMhsQQD",
  "key37": "2HHR69yZwg7aUiPFUcnBreLVaeE76nbsja8o2b47PH9xgpcYVjsY8BgMK827wwPeKvotVQVQHGjYsk4cXm7aoAhn"
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
