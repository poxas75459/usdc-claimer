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
    "HuxAFydiEGLJinrdZmwJSWwP1HRHVz63RrrmAu1KVBFGmYaKYsVi5g56qa1DFSGhwwAscEHANiHpofpWL4wXfDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54hRCqsFB5h2hgU7VSAhQQTyeU69YKThrgghByjCy3MagjxnEkuJi4GW9aNBA8TSmUf4gCResMsuNTSkLUTiDM61",
  "key1": "3FUAurU4TSwy3Liv6dq9vMDMGFChZ4d8ZZw4z17WCcK6xURXje5ZAuQLHejF9exdWKuUDA4Pp52iyGTUT5pcnegs",
  "key2": "25WJp8NYJtn7BmGoiRo1TbSXWiQjBhYnvBrzJQEFbTG7tmwCRhhjvdpTuqfbkGZTHzoieFFyxFRbQZSWKp5pJWRu",
  "key3": "5rMfBx3vi7XTv8DQA3VUuHhqVCbHcT5pMe7h68X2Xhk29sNWjnqVK11yLktQXBdWTNXxMtEefQr33WLrKtZo7Dyg",
  "key4": "4Hz2hALV7MRtr25Rfmsxx357vjzP4GRaBcfnXNHpd8KdFp9jkvSTDDZpe543KsRUeT4tqY3iMjM2PdegsfoKJf1q",
  "key5": "62jxUrajERbttMY4EwTuAWkt7DbdDwpLLBHzj7jNdxUsbdTXLsMum8upzLgAkkJ84LHp75KzZYe7uREaFpGxS2ob",
  "key6": "2jrvspty61YHyYbVi2JHj7m9iDP8f7aswi1wknxnFRwJu8tzTgmy2uL2fw6VyoqCbNYrgdmAz4TUkQrPC8ik6tL",
  "key7": "4FxAACt1YBRQUWhHRoZjgMMqZvqP48jiLUm4LmNEtntZbm2wbTccL7T1Pnaq9X2kccxzfqFLVAFg3SQzMiR5xZmb",
  "key8": "2iYHu8UmftHahgoUS4bjtvz9u3iX1Qp7Xc2W5thBCzmtGHNik1KfGYsU5YFtivKj6nAvBbK2WofLeF6NcP1vQr9C",
  "key9": "5uKZzFSbkAf9hv1aKQkHHyVPaPbyXsNxRKE4MoSQsRccaHpYaUH7SqVkvJEvair6LYFRFzCbo2kjrnoLgr2kSdLd",
  "key10": "3coZpeux3mmhBPMCcsdDLkG4Szd55mytTp8wQYvdvUi5aU1btfkggbE4jyz6J1wtipTV2d76Vt27E3gtyYzyUTe1",
  "key11": "2nJrE1ZajyH44qZDY7tpJgk3mkmhrwhqxz2FFkXhbe9iaXqPHg9JJvhNhf5nz1WGvGy9A4MnKSMxUzdKD5NAuBbj",
  "key12": "8dKVf2H3W3LeJYqWSpKDPcdgDM2diisTBUrgTrBzyAevSTnBCXtEV135kccfSJKZzHapGnjpuFht1YgJZGzxjKS",
  "key13": "5sMTMRTAHGNZKCLWkyzjeiTyET3FUafBgMmqqVT2fp3fXsBnz49YRhaxvvg8hPo2eNjPgQPfbwkWSscoixRbocUU",
  "key14": "3dKZvPG9ajhEV6hmCLpRjhjinKeTqRB6avMYJMLimUQ6rt9hQuR7k9Ktftqt47W91D3jVQ81mPRpnf2jupFbsnDr",
  "key15": "bEcHHJjSJHBELeWUQyG1bjQLstkrctfTthBJGfdFiyy4adDPvqyKUvo47AVkXLz675Jsr92fUgt4sXeQZ9F9Sy3",
  "key16": "cYXaRoPYdqyK8Se4i8DjNUccLBzcCw7woQSEN1zHX5XeFehnfwNfELLPkuHMB7Z4Xc45y2trwL13JghDnhQGupw",
  "key17": "bUhs6Peb1WpdfJfRt4nE1psrv9dUruTEMG9dE7MwnNgWzHhCznDtE3fhSwLyAcxXFvFsgTuug8bVoPTu81Hgjej",
  "key18": "2KTetCBg6NxWMzw3e5gdTehYbhgLAKtSh9of4FR7YgUNaVF8Q1WG8TcfT9by41gusJx45NTeiw9YbxTwfFNJQRie",
  "key19": "2uEGSPsmjBjeAJ2hnxqjYGp7VEyy57ZJa1F7GL2SGQUVowBUkq33tctveus5qUEw7TDkaXS83nW3XgwpBDARPCBz",
  "key20": "5Q39cHFHMjpE666wY234A9aWY6aJYubkTerzXbGqWBZXzqUQuzaozNgYLQ6RU685LZ8vdXZB89jDSmsDyX34rtds",
  "key21": "4Ym71JmSQYYoUtQFPJRCN3XQ2sBpANRajKxQJ7HAa9JGfxXW2CBdxSzQRuWqJaMknYkQ8xqdkmFGdocaaFFCa8mF",
  "key22": "3iAuTYpta6exdXa8ogGiDWAqgCNmev89nd4tNawT9dRXv3Fw22PwgEWatmqCH5SvRHXQrMrqtd6ndrnUQjtChezj",
  "key23": "E4q2a8JNyHVNdwSV9VQwi8LDA8eMeRN9Gt2GZuTMcxgJg1Le7dq5fCe1YP5x5v3yBKrwMvbMnru7q5jUhLEA3tt",
  "key24": "Cai8jh2csYt7YeozbBYVpF3HHY2bvwGRxKE5n4EMKqhQ8pVZy8Y48L1dqw1HX7bbMhWvvpwJd61CQFCnJJFaaNe"
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
