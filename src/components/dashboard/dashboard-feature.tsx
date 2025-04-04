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
    "5E8pBAGBvwRiRNA8iWDTDErGtuaA9ZNq3rjWFFK9qo2mhs9MuR8VMy5bfCMEV3uWeFREvbcC4LLxzkieHRdD6FP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A3cw2M2qFsd1dihhnz1f9z2Eo47zvvUvR83GfiK1YXj56LhHpiAKCiceU74hbeMRufGZuwtgwWbzPZiL8noo7tB",
  "key1": "22zoAPh6uNRzcK8tQCQ126W9o6wcDT4nbNQspcqquRMtng41n9VLdCB8aG6iv164vDfzUVNeywkoxACWj9dPNFzx",
  "key2": "3oeHGgkBBQVb8S4uKuk5BFAmWBQqMJ5oKXVWHQ8gJHVuGZdrZpp17YgkJ3h1qcHaa47HkUURWdC3Rf9QZJEFmoYh",
  "key3": "VE55B1eAq5u93bCZT9oUe1bZgVDu14sHL3HF8c68zsJDtGKTm5RFGBuTqxxVxGKwm88HpTjmefx1emWhjeNkVB9",
  "key4": "3KRKVcfydGQFQbd5TSGdxRFuLzD8o53ZjFrPUxCDcpqedfWpNWWaB5J8mdcC7ix3nXw3CEiognWx5Ce8uHdBnwb",
  "key5": "2isAmNSCrnPrx2c85wCMc3kanKqd6YRF7LBKxNN4FHjRkxbeMCQS2tYGPYF1CfTF6PNS5jwdhiCEmMTEDgqNEBz7",
  "key6": "5xhuzSVjLBFLF7vzhmx3LoTC1awcruU2JAs9U86fkcpSgfszQhkv1PLgG6iLFY3aCMwt4s27AqhgqXAWgtF7bm5w",
  "key7": "nguGrBbM5in8uncKgBRK1NJwe3Qffg4acA6Le4WwQm4tnVg88CS7ieNNKUK9afZrSMDEXEbtRkLoYKBRCmdugK8",
  "key8": "2gjAeeQWmX7NoGTuuJhiXLbXFGkJvGttsW2j2wL1KChfHcvp9v2SYQSJQod6nt2FKAqjUZYi8qBm9HzQibZ2BcxG",
  "key9": "29EFPdA2KQcXVnTvd4uNwvRbZuM4tcbz3QrP9KwRravFEXmstb7yZq9U5yP1jKGRjh93yp3CARqTnnnRFFnzECHw",
  "key10": "Ttf9CS8rrEsLWGANorMF65SLVS7nLzXSf7VtVnRMNViUZvU3ABmMjHdK19v4gxCCfV5CfmYbf4JS31GRPLLZqfe",
  "key11": "23bDUvME1ETkNSNU4aWRQCN93CLoM8yqV6NMiXnqA96hxh5hHPiKouMumq1NM52mQfufPjCJ17TjCYir8J6REoWx",
  "key12": "2viJ5aMC8MLinjVgnSeFt86etz3LsKQBEgNeqn1YbCpSquQ25eED2Z8cpkgnNjjbwFWFAcS5HvqfDcpLK7tmp7om",
  "key13": "4WwM7otaBi5yN9eMjCx2c1sDfpGKUPtpG5MEEJ9XLuxwMK4vEF7jt9bqgxUq1RSL7gKpfmNChJYi1wfiKs3j67E3",
  "key14": "5MVSSqZzbjESxxwpHjyk2YgPMfmHBbvU4apPgr9X9L8DYHuZGE2y3YcSz3temsxE7s9suLtpa8yujMJKd5PjhAux",
  "key15": "JBALqtBrjUYTEd3jTvnTmrh315UfdwMeXXHbpwpUtvUugqdEBTjs4GH9bop8yG1a4zRoUqsoWKixJCf19FPR5UR",
  "key16": "4qpQGKv2wGmVE85UsLKdW5CkBjty1wJoBEmVMyqRnCjV69kDKZeUuWtymBjRrC3QrgX4rX48cWpuB1piB21qEoLg",
  "key17": "5xbrdr92jzNMpoEFp9B3Zf9eoAexyuNFuRXscTg4VBuSVeJ7uJBg7BtgPiBSZdbU6acMKpzchunJSFBRcC6TSXZQ",
  "key18": "eoN7ruXpPsdHrisWJ2tYqJrEztaHVA5y7wTg2PtynhMtLmUFhnnkb9AqTcSFkajASjnApYdWvb3dfoMXbz5J6u1",
  "key19": "dNyGwGSBcHs4NY46uifCbVgJ29sP8REMxypeSjwJgFvA8uNVAfMRSpMdiDieURRMfMN1MfWfbrQVx9b3X2ofzJh",
  "key20": "2Jk8GPYvqfntfJBsF8nUUL5MrdKCp9mCGEGR5AA4QNiE7VWQNqN6essDwAoAVStkWjdQ14VnCizHK1VNxvzY19EM",
  "key21": "gb9vEid6KzvYMSgxpxzLB65ozg6x7YGo14patUWH3uJGkebSHC4rNygvoLYhmj1QwbnQ78DtQvSazANADwVikG8",
  "key22": "2fTJxPqtT1JvRPAKbcsfETK2obPovzyqmHuP2jTHWuP4ixQn8Hm3CtmjpbPGUbgSenKnoWefV1L3EZ1dizps4NML",
  "key23": "4ggFwe9qiWfeTcR9Buxen5g2a4x2xPrtKCYAsDutiZSoqfRsGkDBGWijNnr234Te6Gi5DPuPJDyVPRCv41ZX4f5x",
  "key24": "351oMwLSd34huzuHS8KgPmXKbeKmBw3ApP79fT7u9nvSYgwos6mVrxvz6swPmcvFkkFnLYFrz1zT8hVkZPc2qKvW",
  "key25": "2jvbmreBKtBoAwVkGyzeSH8UmbLKVFhrnDeVqDMfWNmGDBwRfrrrWcN2cEszycj3D6fUfbUEGcrZQE2iTzWb6Uuf"
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
