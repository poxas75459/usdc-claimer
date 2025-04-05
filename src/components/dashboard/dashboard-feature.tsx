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
    "4N4JVAdAx56bwsRmz5VRABAjCkXCJGSEzJntMFATMH2aNYSCW4wJ4FYuK3RxsY6iuV4S5AYEJfxvZgYs2ib9CRNb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QgxR5H11rSNHyRZWNhKumPyd4HtrrREqvLCJbme6PYGz2SWgppfs8MyEPxdNeCkejsx5YcMckArjpXoBirGqsS",
  "key1": "5J8YvZb7WUSvmQg6N6mec2od6PGxipRumFmMdyU8XrTbTr3j3eGmZj5wkHGTW6yScaKSuBJixNCmvjsecD8PskUS",
  "key2": "2tT5PmE35dvE3ZhrhRBjczSv7kbubc6okhvwbb9BQujoS6aVqWgX3EyUrLGFtu19nZ9emCVb51X72Hn65KsN55T7",
  "key3": "3FdpwQrgMTTziS8RrkYkce9pLPuzvZqEfNrjeHLumJMZY8mhEXe1qzTVfA1sZMYsEBfLVCTUKd27ZVnMSz7Acmsf",
  "key4": "3w2iD9YQcUsB9wMekdh5mtE1mCgzJEhXHzCWfnhkfpo7hZWQa56G36stdH6m6RMdFZF7L8xaYuchxZ89gRXtFdxb",
  "key5": "5vCdoeH7DtcikTv63oRhyjMS2iD6iTXVkLgVDMx4LLifQk2WSug1sDk6XnTW8ydcJVCRcwDfrMTBiQjQSj2ihTmM",
  "key6": "jRZKbSvSif2XDWZuJCiWWyW3ohCDwozHU7BivF925h7yhacre2hkQFVoXQKCMaCwqxPMb4jmDtGrm2Cy8NsKThS",
  "key7": "vaaU5xFDD4SzFQQzVEZB3wEv6mk2q4Vh23EnsJPtA3Gz4qUqahkvQ5EQuU32qwhgSxXKEyVrp8Lf1HhzNetKPxv",
  "key8": "2AWL8mi3JHLnkqpbSGNAKdH2euyJPgADz1XENkc6FrYzK7KCHsQJFudqYktVqtVoq8vZ57Ei7HrvFEigWHqjgfY5",
  "key9": "5N3AfBFfMnWZeV9xGi3xwVhmzaPETzVQNuRc6sFLiSbFXsHefvwgfkt7PGqko8xUNBrfZCCseSDDYLhS5mk52Jej",
  "key10": "4v41cQpk6ntXVvYV9KGpVY2opFv91YR3LbordjgThCYvLwuWz3u3XXRKEW4adwbYpiB58GdDz1p46iVx65APt2T6",
  "key11": "42eoD6GzsypKa4CY1MFdxHtmcg56NbYWzBvugTd7B3KGZsX6nmLkeAmpCg8snjL2ymL64VDe5CwyxMBzYuiDVnyW",
  "key12": "2jggM3UcPnK1d2VXwquyXqLL8c9s3tBkTXWcKpa2qKQTiTqBQbZN2XWKrLuWVzY2zJJNASFApayP1xQwNCZCJizP",
  "key13": "QrFNK2U4yvbd5TWRjmh78ppZ9DCFcAseKVQCXhKyXwAxNyA5XfUopXw7F7Xs4XmaBruYvp2Std6aaHQzvCYT2Af",
  "key14": "FYZfpJs7JCG5cLspiaCoPMMmg4gciF59nT6NjaFTkq9jrLQ6zio3VgQCVRkRTwoze3fgYmAY3QrxJA6ULhxFjbw",
  "key15": "5u6vx2GW7BQRNTpUQoBFuborAhqSZAvSWJ4dqXnTLnJeN5fYaaHXHxodK9YB4HMWHaxUQd6ZeJPqWLxaT7AUnkaa",
  "key16": "3BwDuicxfCsBEAbSAqve5roMLc6pge1L44VgBwF2pM3BpUMezuS4WWLLGDBpjYR2LJ7GzAvi3Vah7zKR8Xbay626",
  "key17": "4jU4YwkU2oKjeVMt5BbPtt8KKdQqYhcCwNVsphhqRWK2SQpXrdRJJDrTcizeiEb2BVvCKHUoZGTWbUpPxjj5RFGV",
  "key18": "NyXdeY9jV4HEZC9N2ZJpZeehcYFaJoCteS81KgZEH7h3UGmVPTm4gvsu2LwXdtMUyUSCXPiyXkDJUwgJ7xGnyzF",
  "key19": "SX98xgWEZ9QTKe532jHh3zeUSMruc5wSY3Dtq27ezNu5x7xeHnSZ4JLF349UvRGcmnyD1wkCLZ82nvRKbsPBr4s",
  "key20": "2s3bDauGJfCCr8jATbwFrM6LPTBELad1NfGQLSmyD4Dhvy9JmQYor2hnCjMSgqy4wBB5KA7xsf7hqL3r1fgRgKSn",
  "key21": "5hEv7sRFj5mxwstM9v3FA6ghWEH5EjSgeugARrmtAHwocYyLdPTcihajPdWbgYFjHBfgRDACvQrXjYcjWiEBXPCQ",
  "key22": "3D6RuJV3gWdy4GXPR3qcGgZwh7CMi7kun4wTe8U6LT5vDPhNkf7e8eZfmjtSQoL9F5LL1KMK2sNt4BuuZPpQD7XE",
  "key23": "2yqWAnzsaArtQPyv9jscdA4tQq36EtoVnawwTYzexP72ATtvFVN379qx64o4ebHe42bMMPWURU13EFeHscVbN9hE",
  "key24": "5jW2cWX5j8EbGxQxuSYXKzCDSVZvqoa8WcYoJirvWgVo3rN7rT5JvKqwhN7tviK7iVjHNyoPsKwEdwoiGUDbQwzy",
  "key25": "D3XrJwEZSEuCqMXUoY9MEaB1zQAdVchADExP4Z1cAF1Y231tEekPYYiUyasLQfnHdrfPsUhTPMiFz5H1QYUFtUZ",
  "key26": "5kk6JgeZKV82VpDTNdicoudG71DcpLofsfii5tyeySPBk2nCU7gBj8QFdSHmifyTTBYuhquiWJvTvFoHD9NXrjUr",
  "key27": "4vk2RRSWfBdTLuQWAom3REgBnNDbRF8cfQJyXmK6nE7w6BzX1vwFfGVJT4fnMxaXbcoJKciCwePRJrLj7hArPme2"
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
