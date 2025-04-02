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
    "2tXMEBxRKTnuiCyF31q6swuCuL1SdP9VFbqkW849RG1YxKf7pcWFqE1yctQtDcVMmnuy5sx6QsiTwCQ8AAo2ww59"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ShsHkkE8pvhQuE8JAQr9NbvGr99GQ8RGd3z7UTTDb2aAqA1nVSyRnv6JDjL5JZLwdLhyuiapDYF84fsKaoTNft5",
  "key1": "5GCFsUzdoRPHdeoDtyHUwg56JcjxptcZVijc82k2xv9Pbe8DD18rL1reEZW5b8okukxLQqy1fSwWgd1Hx5TSRrrG",
  "key2": "5XNuYCb6ZZP53vAq45VEBWPRy8yDKTZFGmQ1G52RL3pbRRqfiZBXApZTMpby4kDLNvw6aRqeWMq6cyR7Td5kUQYT",
  "key3": "2maSTU7KaBa6MADKFRPXB9MnSjVgy96rrhMZR5tSPMmLR46bacLttFhMH5qkMxeG9rarJvALH6m5PNVhqMpnSJB8",
  "key4": "4sk8DsnzVev3SnTsEZpJAAoYuNhhvnVpbeQX55tknq2hjGArruzxgkJCAAtfaQKJYWvPCmTpZCy2RgKBgDuJf8Ee",
  "key5": "vq5FSYaXh3rYGAKBJPVrWUHmxye5fzkuV1GT3qgWuGGt6z64cZd2kaXn37yJoszCHJAHSddTcpAn7NxLWFG4fam",
  "key6": "2McFNcoSuwCZpZ5jmRrMCjmYjuSA7G6mp2Lg4qYoQmpAZwu6M3QW5dRVKTvFBGXX1aGu2VnXvgT63XHhns5SvMKe",
  "key7": "ifU69USRrWeo6oPTLxLrAPMuCdvKJbokHoXvTiV5wzgvo3R3CBcaUukpMpsch8tfzGLNGHcducCRYWHtyM77Fwm",
  "key8": "kuWXXrWMHvn9pmzePdihJ6puZAuHs1V5TDXT8NymLLBbyK1thENbjGSU6RqwMuupivAdbv8PEkbePc7AzJF4a6n",
  "key9": "62pntbxw5aiFzTQdRHDEct6SvofRsAmwVR1cz4sXeujDkSXW49Y2oEfaQGnuCcnxunxmrm9kkJrSwo7fUeD74NYy",
  "key10": "3pbyZLUqfNtxuB1dftmhihHVV9TuNgHMzFwBfeCEWFLzndMDk4xUPxBHgzV9v8fnL8mpZoyJH1RDDWA1QMMJUjbe",
  "key11": "5dxyuYXqVsc1JzFn7FxexNpVknTSaGD1ws8fCnr6RyyKTV3Z9HX1dN6nZUrsyeyLczYsNwrDX6BWonz5DVByDYvL",
  "key12": "4Dj1uhe7uNdUePSa5hFTZHwYQ781oCLJfqepxNTNT5KAuG2LoDVtNW85AHmfCzqFa4C1kMWUCbttioTwUkAALsM1",
  "key13": "2R6VCVXBGdGcNrAcVnDD6C52TjsbWhkymQHRetx1TaSJ53H5zWxwUWHG1tEWDSUXWSQopJH924hMGuzJcDq5iJS2",
  "key14": "SZvKLns3XWmbSgpHBz4572JtYdSN25J2NyKtkSvskbG2x5voRA5gHnZrJCeJC4GJyrNsTMjB9UK9yHvv86ksbCj",
  "key15": "5kdNfD4Sz3E4zKq8uzkPWPyNfAReqXeGZi7GU7jrzRnkNd6LrH5tGUZwc8fZJq4DUrsUn86Grstjx3SpZBTE4R1J",
  "key16": "5vCduWVKVpzmWf88KN4KkNATZfhFgVcQMcmgmdaJ1WSs1HuhxttMpotgBCyiHbfTkKPZoCacZQRXDEaunziMufru",
  "key17": "CJsKGzE6U9NvQZB7KDdjftGJFiR4wrsxbW1xphh5uxStj9RRnFzZ84DEuoRXpK933qVZCXMKmkkMrWKtjz8v9jc",
  "key18": "4g4gwKCjS71FVVU2TUtgsq9Lmqa51c4Vgz557TctDiuNX8Dpb3VXagEToV1JkuXMqsk4TNpduh8G1zXBhgtXpyih",
  "key19": "2Lxwd48716QCmQmSAu7TuhwVMwEhqBuaNZ6Du2p7q8t3UgnmQHSmnFx2KcExEgLXie2frcWmqZt68En11hZd7FoQ",
  "key20": "3o2kN9QeQpetcGu1ZNdmM25tGJhr6w8ZGfUiU3hiTvHK1czHW8a65Coeeb5vrizxjaws9BWX69EaNBYmVhQ4CJPH",
  "key21": "4LhG8qYqt1Yw8HYHnAJLbTudZ2kXnNwTkDd1azgaqNEbFCQsSQjVmA6NDU1SN7caEi54hec1UpCQHzXkJT7bArxX",
  "key22": "3tRtjRv5xvhpDLALRCgs2HB3jaJHEfBS494bXdiCHqqWMKaNBjwqSkj3r18JET8yLdS8CLh8tWKY3tdGRrm71Lj3",
  "key23": "45orrmGVAuaygpZ3JAESDsPpyqveBREVU6X9LfCwhACJ6Xdk2cRtiFxvQNuHMRxSbpju2TLyT9zn3ABJYDRn4ttU",
  "key24": "2Vgmu9it6hJUuTAF7cT3rhwqmXeEYAETa4AHDZDJrTow6Q4CAiKy6TXguyjtPT2yVmaBUDk8Qrixtner5YF32jmQ",
  "key25": "2m9Twsjfu9k2XtCBgkaXYuEwJuJz5RTDeQKt24JYqskgohiBTWKsUqLRMVcr4kduia1UM9NPVYKMYQ1BTvSXBU5v",
  "key26": "5eHdXLHNSQqhzLnEN7SLtkuT1bnx8nVtq7jpQnLAhrR2bsjXnXitpohDsp7KqivKZkN1338guLJPzWDWghUandQz",
  "key27": "uPnSKpPnCgCtAeYMm1UPpy5C27mTvKd8o5MNSEvE3QCMwbmDCGXAmGV8AzYDK9mS5JCaCBB1Yf5RLZcFGXfjrfW"
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
