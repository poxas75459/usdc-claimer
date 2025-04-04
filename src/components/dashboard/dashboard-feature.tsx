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
    "5n1zFNyxkCnpboFYrrBPtMtHaU6GTcQa7L3T6GJywxcS4APFAcMNuFyh96D3LvgaVKEor2L98UtuhSZBMKp2v3mt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QGoGScn4U6qcEMmZgTqV3KbWXpRpZxneEaqM6ieB1LY82uqyF9v9WHdsjgLFiVYFMbhSpwUcKpRiq2GUoxhWUQd",
  "key1": "4NcUaU4b22HtVYsCnjn9jkhfFZu9fqjxx2rWPubqkrtZodTT56dAMbbWiVsVfid9XL537HPQv3pPsR2yh5SATawL",
  "key2": "Eky1BgwbaBuuaDQLPaQzKKKZGV7aMvwYEKdiR5MsQi5sJPgDV9VThLR6ZeKMR8MCkPjaUkTxamigoBibeGHhwyG",
  "key3": "4MYBdhukHKtDw8nSmsbXSLcc3T6qChnsim1bvWLzhucmfdWghJQ1ceoS6Es5jn8hCaAdEyxtZvUHyvPCDk2pWZun",
  "key4": "2UUXCzz3w8usXP3tGMYhJ3BdWdX5yQBSnfUBvNnSRnrN1qxQcRhhWYbmTBkq7KTATwgALyfnuQC2Pmxeui9HMgCP",
  "key5": "2qHpL32TCvjQwo58zETRz5GvvaMffu4RaSNepjhQW9xpCmRMMfHjBmC6GfCtUZbvm7GDV5KtukQzJDpJwi8m5Qh7",
  "key6": "3EHKb6Ubs5oPZ1Bc66K9cLMGzYJhav1PuSFVkmYuE6NQPBCtD7vS9ZWEd23E7AyQou9oPEy6p3W6eMRFhHXdhDn1",
  "key7": "BhddACu7mamqEHqUf3rXj3YVG8QoGnBdy7o9a3F685Ss3hi9MEtcCRAuaN7HREviWA3mc9tWUqLSkCNf9qTazL1",
  "key8": "3B73EmqzYY8Q8e4kcaequzF6GGixoNCWB9hSxZpMFLt9WLxxorB3oCEtgYcSVKggyu4ZmmTimorperYmnZVKfwBJ",
  "key9": "4fh1Kh9DZfDMeaXGxXxf1bNMDhP5SggNvybw8vzXsohFUkX3djGyLY5pHy3no3YfrBSytX5him2eAFiyndGyYGfs",
  "key10": "KJLrDoje2RSCJXrZPyTwPhThTpdENsfzrgxBFdB8E4jGPqGfNcBgLF7R7sFKVFpxA9Q5yWHzoZG15FRUq57yMvH",
  "key11": "3RiUPkvMaPfkyuXEUmN55FSPYo1cCJAtaAo3wYjaFd7XgN9DEUCzoAhyCmSTB594CnqmWNEg8bRTdTBwared7nPD",
  "key12": "45iHBB4ib7xxcnKc6qW4fiw2Dp8vAYHd9zQ2wtnUt9KwTRDdhk3th4RXVYAjyNoz5eSXZkDbedLGE73WHu9Ng4CT",
  "key13": "SuponGFCZ8v7MgC9owWCQ3DDs8WDZq5UFr6oeMFycWWS41cNThj6zeYrFmf1X1bC31APBGKmm7SvLCaTSX51V21",
  "key14": "4XRp5fx1LiTtmwE94r1TKwLoW1wdsx2cfTbjL8ozn78VTnsUFHTy7AjpBKc81fkBWLjN3UPYdABJsCrWGvGvuZsH",
  "key15": "C9eQMzY14qbkYk33noZYwYecxBy8ujiCZbcoZqHFfHERMeV5pznrv78oeLARXJdZ6VWUTJvKwt96xhpf3MpPFDz",
  "key16": "p2XxGMTKoFexUXqgEnQKzjmJZ5LMTniwPCP6jvy49NxJJDg7qHULYwaZV7bBuZuToshAHW6qNpvvU8chNoruDsP",
  "key17": "5pSCBbWaQ3MgAPN5dufJU9DovZkqk9PEBQaDtshZ1tEZzS8Kv4oV4gg9GV3ncfpFezHuxLu1sstmPoWrcp2SiocG",
  "key18": "D1xtZjguKYPfGMCQeemdLJb3D4EjWZBoPb3NPdgEfu9MFWtq6BNhEP5QnuQEwZdAs8ssBxwmtUAAg9e2ecDTggP",
  "key19": "uxz5ogLCejqiWhBLUiyMj7A9aErhRC3k4Q9usnYg8rvMpJCDHLZr1z3s4MHCkfB6jxk5wGJrZVb28SPTHoDbL3D",
  "key20": "2LdDEpFQEZPJ45RVBANtvR9LVMgkvmaQbPHQ9mrUFX4QDdTujH6bM3VBiZ3jarwYQHHUriAP5MdmCcRWiGD4P6LE",
  "key21": "3Jr5d3yirBUjFsW8JhYfMCRXn8RdeqzPfhasRCMEvynYWsGWS9z2tpCTYieA2VFhu98chAZZqe6XArqFFhDGBa2a",
  "key22": "42hwLPH3c6n1VVjo2jLVjy2JQcXCW7LQugC4aZQsPScPSRKowfrRMArvXePhscAcfe52RBH9kBmQyoncDozgDdZs",
  "key23": "3xsTYbsrTwdSZ9TPjabDAuT8XVFj8eHWsKGXgSAMWEAg5t7S6GTTAVFoPnQPbNLjQy25gqudajTrrmBjt8dxAzBV",
  "key24": "56gbt498S4rdrJbh5PF7vJUUXjVWG4Qd8Ysie3fAoXZMyyNB2uHbje4AV8dE3vGeM6BpexCuJvZYiKarCP97RYQP",
  "key25": "3Kir6iLnXinxgvLeBkbA7cTEBxGYJpXpFPv3zHbhJyUAtA3BSVPQCqXyPRT7ofNj8nfS3RBxzYmyTeTrUMyYVPjZ",
  "key26": "4c4jRiaFPwdgsaj9niVL3Xmm34uBotn4c6H3tSynmD1KPnpGTYadX1MZLRkJQCX45qXVZvBGJ2pUbPJL21RRBV6G",
  "key27": "4W3EyVruEbcY3qDzanwUaXcjpFxtAqqQy9Ps7HjQeVt738paedH4RWWJvEjXjXkSdijJGsNuyRbKSz1nPUdqNuSp",
  "key28": "2yn9Cjg9pTrWxvsYtzLwuKMSa7e8uaaamL8Xe5bqNu5hNaj4kZALTLJ9vtr2QdenjN2hEJpLoFo5UBGVT1h1RtSV",
  "key29": "4rG9pdTQwmRjB1jKBCCtSeJh76gTLdADmQzefJ4nsTgDF3NryqCz3do2KHHUMGKC4WRP2aYHVxvzApWU9fHsyqb2",
  "key30": "2GaZJ1ikUHcapco7ZquHBKWDAGRjABMTL21UoeH3gQofrvcQuzzpfbTTDgRopk1GeJ5c9iUa3oJnfrNzHedxSte5",
  "key31": "4a7WtnpN36TzdYj9KqiWkukk3niP9joWn9kaZYx94ka12MdNZmZANTZb9H3un8DauJ6rhfbfNmXkJhtZukz642PM",
  "key32": "2McVsF8mDDJbfN7nZ9oAKzJF9eoesSYNXSj3vnd2WV7aAgF5fvHBReorFkVC22CyynT6FLaByymhkxUYrgY4cFhU",
  "key33": "4n8uL944yHc1D4MneCvP4Sds1owHo8vD5TyMWGQUFh4LQiF5tb7BKWrUVo3t1qpESYEMptE12rkQN63tQC41EWuM",
  "key34": "2XtoHcQZx1ECypS9bisCEQaAupoAHgyhDBTD59NjNcc6TmBnR2KcZLS4dps7pJEWBnayG3jdKUSAhC9AbjHywfEg",
  "key35": "5DqE3hzQiCzVNZNjuYPYC7yVvZE9YDTPE76Pa6XcVcBcyFvPrE3Zv1dQfNTHDdDVWBXwN722zfaYqYpofY2qZV5t",
  "key36": "29chqdf44kYceDUw8ZMCJS5QQmpD4NWySBG9HVWDYrrY95QCS5rFQ9NWEv3uz2NXCKebMkNAanG87SNEzArhGiRz",
  "key37": "FM8Kp3QMsvUvvEc2yNSqKyAcotnteZnRw2B941jEMapyxSt1wLefv8F8ci3fW4g3CaHVviasZuUgBnyWuGRLc1D",
  "key38": "2T5BPX6Hda3YiogH4UTtUtAXr8XfajEw8cdr9rKQWSbSa2fyfYrAPx1xMEWHkPe1PdNTLP6tESwiVLj8VRtjh2ip"
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
