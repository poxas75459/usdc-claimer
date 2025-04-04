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
    "51Z4dNkyvWM93VPZ9AvujDT9u1ybGAjaRe3YcToBTsptbzHNEAJxJB5QJtNFRfuJVedX3VT4gCcGMuP6KJsBzF84"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2urwWR5xd6fSZEMFzyomXSJVs1p4TiHgrWrwqDW44vrNTWWkfsZ197PzDeAf2o28MMqygLDTa8fokro8gqEcjFKh",
  "key1": "4GU1GagwxGNE2wBEop9tH1FwTZD4NT8r7BeYXF6K8zBfQH2HCN8hsrRwy21HgFEG2y4TSxjorFoX1veXSWByxQnv",
  "key2": "62gQ6M3S6uQQxqoutP8YquuSTqL8nRKv4TuFv1rfSpQGuUsq4bQcwkAXG9YiF7AEUbWGUJSMusKN7zufgfQjMgFf",
  "key3": "2gxJzzyez8BNNrt6dDQaCLtSoigYJmEMWTEWV4wWCKz4nFkWoJHaiWDgPxJaxeuJ6CkipeaJi1xEMuSJXptRnAJ7",
  "key4": "DFo2oiYbqVUA5g1ZhnQoc6YaKhE3gEmLW5noBHJUWQPLWWqp6nWpea2Zwrqxzn61HN8ykmPDH1GphUKWKXuBAn5",
  "key5": "2tUT4fTbyywvJdcKaMhJGrvUxyMSYnijnRwhL5PSgMaouo7nGMhycXJDappkH31CjnRCZ7yu8M8NaZGeF5GvPBPb",
  "key6": "5TChExWe2p8mFscffTRqaYRVLhTmMpocZ7x9pHVehHVyBZ7zGwhpDcPuJJeXyBXAYAxcWBrXoABJjrDZuz7ufzHb",
  "key7": "4EEfnX75HSpVNWoSYiy2PDtikMMhanhmgpJm7SUMUBVP9KvHcjWF5bVgzGavdJhxLXjVMPZf5146WRkZU1v9BCEv",
  "key8": "5z7KxbaEVmdCnzaoCZj44EqiQ2CmPMjBZQnp6qWNCDuG7XeLg932L5qZCacbnBVCyhGNbMzSxpS4KJaMGpmxo9B4",
  "key9": "4AyeyPUTLdkLr88udpxsKjPe6bP7Nk35Qntg1e4re7P2NSdSJnwbjiTmLeKuLmLPPJ44VBRjxytMc8YJU3ENLELv",
  "key10": "4nMhNuRGCMHZFxv6tfrNrNSkYPTPmfXDdcw9dDJk2NQVQPHBajEtNT3E1SMVdpfbtpjsJBr6Gkeo8t2tXnzAQbw1",
  "key11": "4DcSdqVfPTzWbAnRpmrg1civMGds72pXr2YiYD5WDUJswUWHZDJtmKE3g6Ciawrr7UhKDf6c6mrP6JKv2hEnVcM3",
  "key12": "3KSstuyGT9f2mueJ8PczXKEUT8cjB9eQsiYPoY9aNnCdfeDfSWaeXi9zGXNUStHK7YUDkotFeCkrVMkdRscWCW36",
  "key13": "2E99GJFGerp9JwPTyp2vy1gGAYLsL1bQUQup5HtGksx7d3g3NspdQ5pPFEHgcVgY1eAYXdYzhpDXxgYyeitxUUHS",
  "key14": "4CMGPzPTPaGhvXhBz9YF9AwS84zbAMgPZoERHh3UDUrUiv6hDA4YWG5RXFPD37a9YB4Vh71ygMvJzjwYwGMnbc8i",
  "key15": "4e9tuzLx3SeHYBrkUpGpbenomCC69Ax2uStMCLNiRxY2dk49pRTXByEFNi4Qx1GCCXeyFAhwRHKWwLCnUa5YqzNw",
  "key16": "2Y51ZSG2LZdLtjLumXCUhuTCj9NMXQLHN15CfE8LpD7PxxQyd9K7uUEK9ZV21Cgu5NhLZ5f6dtANUR3Mxkj4RNpe",
  "key17": "2FiHrZzrmzczEbRvXU1zpSo1QhNCaMTzAKXNQidswWCVaNvUEK25TjrikqeYrpMtKyB5bS7j4p5P1JeWbzkG8z1L",
  "key18": "7XNKu37qbR4ufoYuKhSsVjo3itDKu14iiKJHVtkmwszKfnWMAVsaqhPKa3yFv7UbSJKzfcHotvD1jTkE3oYizzZ",
  "key19": "3FJH8s4jinUSeSZaeUqgJytncpWvehb51ReSbTtBsqnoqW387fnkkcmovvjzfDjviFL1H6KzfMJ6rrewjPW3Z315",
  "key20": "2RqFuVcnGWyvbLzRFn7dFhjxdSEbU6d3SG6GXmVRSv9LdLP8WT1jGuvHx8GH3ncCpPATU9i2Fg1SebpkC4Tfe5vt",
  "key21": "47TybCR2AeFGE7S1GoRbxWSyJXa34gv7JD9cksxM7DP6x3LYs9b6uWxtCV8Dnk8fgYWgLWLrSbrGMQzt72icDhwF",
  "key22": "3P83cZG9Pmcuc12WxUGBR2Sed6LBJws3a7ha8WGsy2fvvTFp8difKk867Ei3STmgEYVRnDndUMSk8pWEG32bBdjp",
  "key23": "4fQ51tscoKGk8KhXRJnNrNK2TRDPi89GMb1TPmW64GDjA2LHamfN1NvLJ8Z2nBUpmnfGcf3ru5nZWEZJ9FNkL9vH",
  "key24": "2BfttP6PZgZKYL4taegUNvczT7vKeSkv6QpQorM9FZZCTKFcvimjpW9m6Byn3FunDWVPLfqmf1Hu4PEo7LwJcqoB",
  "key25": "3EwhtN92irHDpz5ckiz5vTs5ExNL1r7x9ucD87LD2mUNHqAncqKjfJuWMzpSjjbHPQ5VU73Unrfqbsad1aT1Q6pu",
  "key26": "5kFixELhEMPeCBuQEXF2sgrBvPyRaQNxrt7qr8HsESCNSqB6FKjihYxvQZQ5J47QHs1ryAf3ZJdXELuTWSjhYtnh",
  "key27": "4TRHPkyUdRvfF5WhvQqK9wL2VfKByybTaNtYik6nFnconVoh3QojRbN175S6zt11D84EGjX5yQN3dnD3ZTSZQyws",
  "key28": "4VdLHn9jc8yB4AWfwNaD1hsi6DDvtsDL9gpuWq1HbfwLEYDuNvv24FyF4ZWhbCmfYfygvfz7skK9Vjbwvw5gHxVv",
  "key29": "3R992x5BkDNwFeTRKp5Bk4hbM27kTkQ4YWDo5mVYWSErY8XGpT9KS6XMS1GqRdFS88tby2vtDRRxPuQ2JWUgn8PA",
  "key30": "9EDRRQN6R8DWnninLPhsSnYgG2QxFP4H1MzBTKrmG9UTrWEtUTLUaAeQmMSj2mhbD1RDTVJfRP25ceuaPj7NiAL",
  "key31": "57FNYfZcDCVpgxKk6Ss3irBKzqumie6ztVhHhsPsASN4S6zjPZxKDGGE5G7j9mE4eSFwSC1dqEkQ12Z7Z2wj6Y95",
  "key32": "5BCzEBmXgD6GnimwAB7LNw7BmQXbbi8hdJLuTdtL4QhugdHD9sCNaGTnQLgbJE53KZKvAezAVyduA3qapeNb1fb",
  "key33": "243uFKj5FD7AT13wj8hLfChJbgZTTFRuXUn2vDXSNHbxspraiENkx6h6pyUEt144dsHD5xCNR7g2oVJWQ1Xak2st",
  "key34": "3a8DBgZw16wnQvCnTbsfD3DMFEZmD1XVxXn6Nj9Jrs5pAh3kJJLojj4ngHoh9Cqj6TkoRGQ4niqfmt3EERe6oPtK"
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
