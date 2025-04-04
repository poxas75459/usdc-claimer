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
    "3j5edYXdSKGHtUsXfXQtt8HBiPL7RXagnjcYWAaQho2TnfG1X4TGkYcKn3343f84BYeiUN6cuo5nDZSQsPTE5wNZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E1cbPwYcrS1213XSAj77nSbtQ6i2pdJGvZqfQKkyRhEXjryuJUAgwpFGXpnV5qs14rJuWYXKu6Ds4Hidgv9cPTV",
  "key1": "4QgiJUj18q6LqPT2y2u8TsCSe1DrEGSGQNPQrjQ2WQn53rYzMN2Z64PPjuXfQv1Q75egtATGib7QeyhXKLLfJcrA",
  "key2": "p2B2KuQoraLzy6Bwj6ri2hwH5FoLAESGtcd7SMTgXTXN6vnijB8dxYfCJMxc1mEzNLP7G1SCrc83aXspeLCQCVT",
  "key3": "5WkF7o8tAB4fF6hvj2HMXfqBqLhoz15dajAcZwpZNGfxxVxoUctE1KLSdCF5LAQPmP1kFJ2aKyoP1bKntKzcXo9v",
  "key4": "45A2Ao3nMvE6ahue3EyAK2MzhSgCTYMEVJzs8FH5jhuYonKUhcmaudoDpTSj2q6qyHtHw5Ev9PZa76nyVG2FabLb",
  "key5": "33xH23urQVZP9euQ7jek4wH3gT55BKZddytgsoLzVY9KXg2GRmpTC1G9vgbJbG6kKaEoyWChaTy3kkH6et35Ne1z",
  "key6": "3KzAaV21BQi86N2URpM5AeHAHCgCVBqknNq2iDfRtck3Z9o7FxuSGFjoGsZETk9TtpzdLuajYvboHEhF5aYWxJfG",
  "key7": "5HeF6aFLPnv7uVgV4aCPn7tSp9oCobnWrYAJX91j86Z8MfSPWdtkHYNymZTNgwg368XxdoGYPbRi5mcMWn77yPoK",
  "key8": "23BsZghqpzKZ7qPQoJWTkVAkVBTz7zt1netiqhpubELKuSWrdpD2Yv7Cj4ZNX22xeZWk9MtPrrQf38TGozwn5vBX",
  "key9": "2ZN9DjJxWyf2ZNev1hd4iZNkpVNRtwT1LKpx4KLbRvpYWDyLE9BLwVrMb8E1ag7ohBkGkfKRMN2JH6vgtQxCEWtq",
  "key10": "4ci7ku1cymYutp7F8i8u4QucosAEgicg1zymCYokbMpH2FVwj3EigTcsfs1jXsHQriDixURQ7UUKmHwq8hwQUDGU",
  "key11": "bE5gukedTgHeHU3e48Wu87r9UyqkA3upyB3nv8knKLwg7XhJ2SuS7aWt5b4ajpGyjTk2A77MgVRosWFVp6RJGqE",
  "key12": "5f7xH9npaKkm73nRGpEzoay5TqiENyLHGMtXUY54C3XXuFaE5r72rJFwxNRnYbqxcLzydnEgDryMWHXQWKRGbZ6g",
  "key13": "DX16qn7iQ1PW1MPnbatUm7EXVDJq9oseYjnq9iDyoa8bEGfrb2vXNSB4vCozjb9NyTDEsWYcEzk23dxcToDHA4Z",
  "key14": "4Q6v4jVJgd1bYXvGhiVd8rEM3Dc3QVEM33dDSmic3UGCJTvcZhUDUzQxkH8AYauJMjEhKEuwYe1qeCZWaQzc9qFR",
  "key15": "3Q7FFdzPPpQhqVbwksTAcJcx7yqrdTx6fCzh5uWXdx7pUb31nV4CraFLt22YfEpLJQPTAqdmXcxM3GBHfQLKmBFW",
  "key16": "kooiuRCK1vtFhRX1itVDcTjXiF7Fcfg1cQhKfRwvu2hRmjtJFVVAWMUjwWUNfU11NSMBhSWX1H1vhBJUnxtWVax",
  "key17": "37kU7sCChgEgpwCLmDHuymaQE3b5cuBkiEd81cztEsaCsUcgFiytHfDL1dCeMpRAxjYuzLq3dnjK8n2uXwHFCcrH",
  "key18": "5aVV3amwyX1U5PxYXw18Rh4B7tgvZuPEkfLM3cLSj9Fr4tDpYP1Ux4rftez4wqvtNzc1hFxmCLYbtAxwCpJ3asP2",
  "key19": "5FhWW9yGcM6Ni7h98oYEPBb1YTwoRj74CiQXHACytubJGaLZoYXKcsB8dtkvSUBM2yEUHRWHjzZENpdd17ByVWzD",
  "key20": "3qTvsQ3xsnd8zogDts44pU6UJG4zyUVSeid3anc8ssKpV2aFuAG5mARj8Koce5njqHndUrFhKUZyZSTJudCeMo2M",
  "key21": "4gaWW9wnCreZX8tNUj9KKiNgeKUH54ZP2KhLQMyNyY114VVtcoTi5YLmnJXLUxorFuokwuCgmtr8UkeWvHqf9xiK",
  "key22": "3usJt7co6ZYxLnUCMu3yRUxKXQBN2omQPtH8svzbqur7HKjLoBXuuZFyuhaz1hs5qFLXjMXA2XnoVTchutmrRpZ2",
  "key23": "4EGt4jfqbfF8Ytx1YDhgJgfbbFc2sJKjRuu2NfBjAK4zkGqofaxgg6KMFzHqnrxPAqw1ZoeXh2qscLAbjZQFxroU",
  "key24": "3T2MoSoiMGq6jyVRsgRVpiRGRqnRHyFHb475pYvMV2x8DWprC387sihYgYPJxaVxnW3b75pxV5mSGoMiAMKQU5hF",
  "key25": "2U2Y4RCuekgKVGp7SaBCSfBn6oruMjLQwxAFsv54YFY8xWy3TwBaCrfuWNYwqLzgPfqhinKAwd42x33ZWEXc249N",
  "key26": "33LTSMKEqYcNzGDA8WuA9a4mWLVL5cieYVbGjztCAu6k6oxcr2YTCPmKAaWR1K83BceAcapf3Q4JGS7HsSbQL2VB",
  "key27": "2j7yiow6ix1TrWgV8RGxxxcLoXvH19u2BwygfZ9tUdQpG5PaStnQ9857QRDdZp7dPXMnQ1hzmDV1jShtSs41K4w7",
  "key28": "5dWevFHwzqG3CKzvkwFFdy7Z6RxJ5NegonTCfnixNsf5cucrvMXpZ6Jqj5HJi4zvMa7P6BHd88N9ztRQNEaZgxvD",
  "key29": "5arNtYuH1UeC27njj8jK3Btj78RFBoqXpWufmftYqcEXmBMHNEq3bjULvCCLZThiyKpvPABfoyg4DEF6TYxP6o94",
  "key30": "7CsgqNjZwdKondPMaZEx39BULgrQEuRZzqV9c8YKqjKPPicqHGLPs4mGGUTQgAynV4NbDeHVYdiHRPudZXkGWM3",
  "key31": "5vm7KT2LoxrRQS6Qk3YAzbArRQRMv1Kjn2xWftkoAhTpycGQyYMjdyM3kpJhy9JMfw51ub9bNgboBM4LFpGu5uyw",
  "key32": "2ohCVLg7S7YA3i4qBAcyHSePwzbjqn1BuVsVpxnmw2mQoU39nbHjczs8LLjiywcrgNZkybyDAnzG7xy8vNUxkx8v",
  "key33": "3Tvhm1Gjj4Bx1VMvrXFuudk8PPbkUWo6s4NqDngoh6hd4BGW54HEYBF3rarXvLiS2EUvGPgWCwHDcFyFG9YTNNg3",
  "key34": "2CU9pcYNFzxsWsQ4YNVZysQtiEzSBFpFHLj8oXuTMRnNHQVuTj5B2mWHAbEeHf2tGhVBYrSTZYmhz3hvXXQAsyCQ",
  "key35": "4M2bwnaGGnNWm3PZh1ugffhPNtftFBKnqYzgRWizQojCG3dZX4Gn3GW1qgGiX1FiYamvKY5qTshQZnj4c4k62Tmk",
  "key36": "6AfP1MY3MVy99jtgeCDQCFhhMn5cd5fJq1im9e3o8gkz8JWfMeixJzywTLZ7mtPKkWYj8voMGSYTzJy9YKn3Y8a"
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
