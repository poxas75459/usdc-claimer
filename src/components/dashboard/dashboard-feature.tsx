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
    "59G2eux1pa8gciRpE9xqUxLXuUEodutYQMyvQVj7ENGP12PtQXkFiK9487nx5TnL2pwrNjj1bV74MuXxaTVFYvaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iKfGPDJrnvxiLzLXgM85eGm1g67wjTz4pRi9bsf6jUkjVdUkE68YxjFkrW3YGoC8hcQCLX53frt2buR5VThCDuD",
  "key1": "3HjBm57wiqictUtNxKRc4ZsMJDd6Mj2XrXPPqvGTpHe32H3D7pD2dT3JRuF1azzaC26Fo7t1wKewYrvw6vZRcidM",
  "key2": "2Zhrq2KVF9CKHx6DojVzreUxCEZNDmXqbcBiwayv5DNfa3sZngvaSCAA8zVsYKUwDSkFJmuoviPjsSGGLaNy75uX",
  "key3": "42JBRfmgTXFKVcYdREFXixvb1DVqzvJ5xGcP2sUqZiAUHVpJqmmyjxU1hdDhQQpeNCkvDz36bzGiFJWyAwLUheeL",
  "key4": "54BBQ8ffNfDEjAp252XFzNSriDAyL23Rak1jRf27FXao8zzkiSXimSt263mA5Dw4eWcSfErrV1JkKaEdjzbfhSux",
  "key5": "38oVhgMfYrEvY5wYQuFPuVXVywiKHFXZiQ47TzNypDxHHTmh4ceiG1uEhtb4E5p8fmr5pXUaPjffNRDhWN9kgF7V",
  "key6": "3hEN7xjhtsoNYACTvQur1rNELcYu8ptEYVUj72WgEzZWbiTL6xTQFSGBVfJjpsp9vCoBPGeEWiFZnpHaiE2U5TX8",
  "key7": "47g7qnzPWhFNt24AQx4P9n9peQBxxv6p8MYajZvLeKToG68SdXhxhHQrZ61aYmAA1HSFMHA6W871Jxb3XRM79WYz",
  "key8": "5tp1DALhsvN6gCX3Kvfm5Zq5D1fGtqQH2G4pdVNCvwU2jqmwnMqPmtxCAq3Hqm8fDangej7Ao2HRebjT9Pd5RTdU",
  "key9": "3aL3HezcbDNCHN2qnYKEtAwktNCYhDm9k6bGLTRpTahpJX67ZWKhEW1smVbuYmfVayGKbYFJ6QE9pKDLzuGfSW7k",
  "key10": "4aDMCpTQ1smSUMNqtbf4RWuWZ8fWJvdN68A7Mk2DfdW4DayozjyFjK6SySkQNdB6AHGeCJi7TqeS3DN5kBE9yCPM",
  "key11": "4YC565WAT1sEkwSBHiEEKU2SWTSFTCXUoWENWBzumLQPX2eVdL2v3HPFmacAvECtyZBNNE6zz5rTwDV2RkLWHiW6",
  "key12": "3jvPkwdixd6HPJ5sMq4Ps8mrsqsk71LAMohCBLFWmanxfSf1dG9Q3hUjeda9nQZ6xTYGvGReaJ8oASfAswWBYXym",
  "key13": "4fozCSUaVwzTzWp2SpXtWxHskgpTBz1uy4bM9fphxpwMpRfuKH2vriG2B14DPaShFAEYhFGtCYMangfxkybkPhop",
  "key14": "2uxApdxFHXKeVFnn95k1nArFkuT6FwzWkmj4yJWBHCRMoP9aif9CxyaaP4pDzHyoTQWeE6rikiymSF8nqeDKPUkF",
  "key15": "5nH5wvuM4rCX9XdmNSTZBSeuTxBEFQ7GJNJubKh2L5xUBSaAv37Yx4Z58vBift739bj8DDJ1jJhmxyb7VtXbaGLy",
  "key16": "5bdbxihBNnSUeiztW2BTYkL4BBWN6d8kyVZM1cALtyvAvrETbXe3pCwgJCv3LTEqkyNfByicDtuxTHy3u62K1kXf",
  "key17": "5wCphKmvTWoq2jdsXrek9s3q2CHJkd2L7UJBDjpucsVvPQ5mLWkF8Ao6Pzf2jTkctJCbgfkhfXF2BvbFwWoCvhzB",
  "key18": "3WZY7jnE7JESWonEue9pvGnNJeGGZXChcANTYoJWCQgdfdW7t4MhhGSmFneVBdfWfBDNkUE8M4mhj2RrpkZNDp7F",
  "key19": "6hL5TQ4X8mNvxwhTX1ALCkgnupYVyJ1B4rvhZnuFuLiEjDtZvp1GiQTMahNQ1wthTQtdW2BsZimTjLX1Vi6bUmS",
  "key20": "27ecBef75J4PFUPY3xWKGrgkiEeqx4RGGV72tkSvm2XQbyEj1VefD17SRzcdwGW7jydkspJ2iFUVahzyEZZUxcoo",
  "key21": "3FNsuNV3Cywnyu2L2N6aXVqhzuhfkUCDkH98aBQZegnPoBo67oS5wskgAz1LNWVeC5zfEAiCHd7KNFZRTptwkaLj",
  "key22": "5zKHnTnLpkaGU68R5bHDGmnRWmaAC8f7gKyS62bzZjx8g1UBbjMBzRy9BH6DxVsCky8x64zL7VSSucyu6dsNzDra",
  "key23": "5ocFTYfGcpJ3Sk9F6P5Ci24FzRPvsP6SKX7TYZu2cj7SWfw8ZCJfoHj8m2B7e3L8Ay85AsJgmkKqyxcz9jcN6dXt",
  "key24": "2Xq76a5U9JbPjstpb9mLHphn1UoRmmQpieCMFHjkDRYH5FJefLN5eBJCoHsnHGV8AzBfVH1W67CuPdgZ1VBtdtR5",
  "key25": "4WfV4r89tHhMow78AxDE3bUDdLY72SZ1mNoSs1iv2T57mBfDvht4KjnHu1LqRqAkmCnDB3i3oCTwNG9JhhJXuFiY",
  "key26": "266F67xewMoA67VYyTURu2miLuJDU2bjxhcVFCdZ51kpzJ52EqTn3AaR7sPYci4yexkZgUvGPLzkYdjvnZBHJ9bw",
  "key27": "3ZFod89a2t9Gjtg92cVUmd24AYFkv4xkZQFzNt6RoHRUrhA6D79fVNkZFz852dCwPuRGNSAc5KUWfhR7aYW1HJjv",
  "key28": "8n6uKffV6zFy4cuyHJ9RDgabFhCeXXHuf3wsFmHkU4FNWgh76ZMjAY4sJz5VS6DqLT9Wbi56RN4GmFqzQEPGZE1",
  "key29": "vVmF7dwXbMtVNzLeUTMrnGD6sk8obFzxNuwcmj7Mu4gNB2E4zb4PEGS5zbDgr3y14KKYUUabWPu9L1AH8Cm97dP",
  "key30": "2JbFpRRLopmVe742YR9G7JFF1jjZzCgF574r5CQgWd8y7LKtKFHJn5AWaXmfZfCyyU9G8RJJk8GFozXbMEPmV32i",
  "key31": "3YtWyeRigh7yKSuNoZy3jRK1kQumupG9gxpd8D7iKZq3HgkBJ3e9FR9L8pyMq4FWLWfWSeZsXjwwUZZVeaJ7oALm",
  "key32": "5oWys1Khg3fzk9ozezg5LFpQayjeUujyZVv7P2HctpMuckeVhESg5Q6dW725bX7k5v1htSrSkSKpjfeBbUFs2DwG",
  "key33": "i5PS8DE6a2Ean6nq642T9o8PzSucBSsLQUdsJoakfWPy71M2t9WE7XokdknY7oLbqkUwYUPRzc2PPcA6ppMYEZU",
  "key34": "5ZT1cnZJ8Q85YA34e16NwXyNTpSYXwrTswjzneR8ScEosLUqS5pPSKtNwEZEN9VR4BDgbtYefhKpxwwJ5nvsBv5U",
  "key35": "kQXneZD7QXC88YEuTAXpsv45xDi9meb1AKAvuseyDw6Jhd6XBejgz58BvgCPwEZRG5Gy3bcz77656S8Vhe2eMTz",
  "key36": "527hf53qDwQ9EqmvQkGyzdzmFrNiZUGdib1YGzv2wTnvDVd6eKyx8iJi9PvEX11asyzva2FTyVFKHx9PGpZLL9vx",
  "key37": "4MFwkp8e8kJuebG3oMb2wNBzgghhkCMGiBB1n9UybSmrEBHhu79kPB7xtJsRzM8S9vH48WEVkQkNjq2bda3FksSQ"
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
