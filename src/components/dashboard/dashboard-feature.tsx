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
    "7NVPexahzc9QAQMXopnaoe49CzCKsa3JLNJJnd2g8t5gcoubqimQuPGrwUjocFJshHN7mw7vRXZBKC9BDMPfqBY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fFB19XrAtuZ8bVUzWdy8kYExYziCRQdXAaXvmb5CAn4YNvtzPvV31ZXhMJMmWzpAEc6Wm5MztivWRVMmRXJbQVY",
  "key1": "52V5s5cLScrRnN69pCnZBP3GDkYN3Agh2GZnoBpX9EUVoikEuV54piupgWDhfpHFyGUdGoFkZVJNhPwGgWkPbMGD",
  "key2": "37Dpe1ecnobPfzqEqmA3zjGi485VJGVCPd3kr8EjqjFTFpmApswDmrfxacfqimesFx6eUzBLmuhoaK8gPu19NB5H",
  "key3": "5fHEXoxDoKuwCqzS4anj6hVKZkjYyvCTeqKsV7f3ucPEmjTq28XuvrfWgXmN595XEHAXGTnsXajuP5in3XcF7Ps2",
  "key4": "Jr7CNfHBi246TEydcvEEDV6eVwD1WcRDGuCYQ31MvemF68Ds7PJahjkyqHdJ1oLjFvyHJPNpbrw7BE1fRkZt4S5",
  "key5": "4q8H3sLcGQwyqdvj8oFaHx4DLVsCBwnGgM8oiQDTXyYPEXyuqLNneE7jYT1yP4ZMc21VVzKAy6U31CmTAvsoEwBd",
  "key6": "MAVkoqiTuQxZX7XoYtpQQ719kkHgnVo5dc3YvsCs9ixp98zup51gDkUP4vVb9yzeSSsGvDcoD9mcqxRB7rZAnYR",
  "key7": "5bYQ8YMYSxt5weUouC7D3ZhpqhR1cCRy5rsexT1i7QshCC9FgWU479uLjwzBWqeCSjrpa3t9dh2bj7FURaFghXe5",
  "key8": "2wXyogJmzTMaTGzyRLs3tEKMSbYWu9eaL62yxtVGYJz8CUSUdYLjTgsa4ga3TRBjRHQsMnQnzfF1LXY4bjDogAEn",
  "key9": "7uGjiHpQFRAyAfrKT5gob9LzjkxqoMbnCqNwzfDQQN8aC7y864dq97yQPcQPCNknE9ckqDFCknSY23R29TYeJu4",
  "key10": "35mxgHdYCpnrA113HC8Dt6XFcXmFVNRWHFSZS34qMcH8iTXtFQUmsTDxoLAdv9yjLN9NAqgRELT1kb8pRAiwf6wR",
  "key11": "2aGzZXGpDJH7uErXVEeX9XyP3wyJ444ojRAQqRXJs1UcQRCdHWUAVVfW1SptzPPEGQaxDTyFJPsEAgDXcZM4HhjY",
  "key12": "qxqckCfCXQxJYyRiQCMUf1yDwgZDiAssG5DhdyASCoVroUE9WQvwmv8TJZ4RVm1caCmxxZcSiwr7aVYCU5EgjAK",
  "key13": "3oSNU1E6Cz856msjC49Vj4RHaK4fepBNV5Ft3JAptvibEsPUhSWFMtSvYaE7vFzjkMi2puTFGaCCdpZpwmGLjbJV",
  "key14": "23QjkV1Qv2zZZMPoCGtqoEtk4ufTnFDFhJT4DPVi4igFZJvGJpJv8YQEvRkB4iBbean24pZuswks9FMvvY41FBFR",
  "key15": "5BEngDTdhCs8bW8ZofCAAfYBHjLkzeeEw3Kku5jgVQPovWH76yRwdxFG9zPH9fVD3sDseDsMwZhZxWfESvsvyey3",
  "key16": "567n4FZsw8DDwLxkieTJE98zpeNVP7MBCvz4HBScUbUQYE8TLJjQB52ML577KLGsy59ZNDGMyhErfTmDutMd9XS",
  "key17": "4HWAGhuaCfNmDdxQxhsPFq2tQEJASpcM25FUXGCpq1TkDQgiKh68nnovTBwoUc4cFmFcoo7VLNFCgoX5hbU3U6iC",
  "key18": "ddjMhL668A2hmv4kFHv7bRNsVidAk4AsbPAh6rAhQgLiEgRnKRUMHc71hTLVaQzZH4mwrEqtg2Rc8ThzFi4YRXU",
  "key19": "2AykMAvR6vUMzgHDe6XnWiZZTTDJKSVYftoL3HjrEv9eYYJ62RdUviXSNsm6gTqLdEAV4T9H83mLfMjesprMvU6L",
  "key20": "4xk5K72MT4zL38iDXnN13WoBpeWhPSW23QNAZmEb6FWbr1esosf8KubnitFFtksP1buQwd6UCY8D9hjLMjfEjar9",
  "key21": "3mzxR9Ld27ZHDYfuzFaC7dtMJkoesNwoMeTterUBokaxu9A1SxSHU83eQSTEV7y5pDbA8AG3XrAU5xNn8PqsDss6",
  "key22": "hWd1P4QSRFEgVBfp2oJYPJqYNGJhi8m8uJiuYPj1HLZmLUyuB7Bj8oXbaaokt7ipCGxgC6F4TjgWGk7gpMgrMc6",
  "key23": "2vnPVpRSyVqPQMH7kZrtqTMbfPSdS8MtNAc6kDK5Rp8zmzgaryaiYXbkNUk7iSqAumghrYmSYD46udppJHZMwkvd",
  "key24": "5mAVFnitQV9CdZhec92jVB2XzcFBPfQoF2s1unTnKyRujxznSaaAL4owAEZ86yESJhqtSxpp3unVF4SySrhh9J39",
  "key25": "3C5PjaX57vokjyVGmTTE2fKLCMuiGHUs3Rr7CFhPmsV28KWE9tUw77vHzjcGtNsCx5iA5HDSV2ysRZpsU18iBugY",
  "key26": "5NV7P6BewhGwD4QJ1Me4fFwSBz7yoiwQQb1XP12hwLpjrAZbB68QTApcBJyqr2Tp7s8MHucugrTRH4n9qQoejuCx",
  "key27": "5hZ8nSB3uRte4KsvdkAmFPWhV8Zv4LArtfaHzfrLAWxmVAAxEwU74ajA3F9nyFCTCSTgtzLoVCHmEwv9G8JgGfm6",
  "key28": "4moQmTUDMYhRL1wtAKKDjv42gUx6LfWsuKPhCuzETQhzEfJiPpt9PrqxSoazSPW2xsGRKHvjW6doxmJWE9Ts7s5y",
  "key29": "3tPrEWcxk9sFSZ6pwXkV5m4GQ5pnWGng6bDdMuhAZpHEczZx6kDF3DMomoYzCKFQK4ycQpow2zjB69d89QTTekf6"
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
