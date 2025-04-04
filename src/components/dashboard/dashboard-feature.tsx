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
    "UCmgBoKmSZ7K4s6rKtT4raj98j1ycmp1zwYkQ6wCYiXGMmMwFbodEzLJSMsLrrNrVHwXrBTFLGeQtPpohTbGnez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RBgSePWiczyAccHYogjoPDwxxtcW47JEopmcczAmiY9cW1yyhSjRFzBnMrFNyzXTd1oT9PA1aykfGfmE4c9Sn9C",
  "key1": "4PZuwBaBmeUFvE2vnKEFVfaAwiVVwCNJs2FbfR1MZPrVTdz3DkEdvAPLkkp1pR1vTknSoVsu8Z3qrNmytooS1F1W",
  "key2": "3pvu9qe5sigYmPkyqyDxxWRxGkA5TYPNeVBYZDTT38djvcbPfEH2AnYzv3nKmEFaCSyoTYoSJHV3NgzqRTy63KtF",
  "key3": "5DhcmKd8nvD9QqEM5c5QnuJZXuo1vynudqapg4389M8jHCLUt9jVJTaXhcG2Gf1auUxvhq6jA54TGjLXZZpBfWc8",
  "key4": "53EMPDBVywpbua95B3qRvvk5xmr2C3QjzDGisYqqKj5Jhyd934ioHh55wLzZF3yeHr5PkMvCZfDwED4pWmeFNEsF",
  "key5": "5uJutREte6SLcUbRHnqbYHf2kyb2egRYDYmGgizSrGenT1vfVh2EVsrDUfuUKgdCrgBqP4ar7aZKDPDDtPyaoRLb",
  "key6": "2QWRkgi4HeXVDoe4KJT6eiMn4astU2vtTGT478Fohb7FxPx6TAioc2e8bk6Hz9KuxhmiYdboc7Gusgdu2himrgie",
  "key7": "3J42YDVthRRp619oJS9zMtaXNSUEAGLYiF1WvJXGzZNR9ajNYAsAcJpuDaxe2vXje7nUgbvknZEisQ1gkYC7kkM5",
  "key8": "4QfvM1vGGqyRkJfUJhnkX5FBpvKYpzmNTa4qZqQsnHCpur2nK2dqQRYmUteZV6GBaTgdyyiFiuR35hSEeJK3Thkb",
  "key9": "4usvNssdMCi21tb8CY59Fgd9tdi1Z1GLP38EM6KXQLiV7MA45MB9Sx9CF5VvWUw447Aum2QxXfKN297Qy2C5JiAG",
  "key10": "3N28LrvSxyuNWmWjAng2bvrGxkLb5mXv6oGj7AY7H1Xm24QE874Uh9uztrPajGJv4Wbgak5cWqUAK1Hptb1VMqzn",
  "key11": "5Q6wMBpTLrVcoAiw1HLXtvDHQL2tcgSN2khjN3xNmhxmcAQzEzi4t1NnsQEPXxxPyNaWBNzqgf123Y7KTbUWCJSE",
  "key12": "5WFFBGv55dvRmTgyC4KyB9cxKHfEs33rdeGYbNiXafSdJXaeErocdSJgrwAMgyoFykTpvyQNnU6MucmQ8aUszX4q",
  "key13": "5hLZB91QFE4nibaA752EdjAcGWudX9iwiMVNUi3jTT5F3LzW8ToG7bqfNVw8yFtCJHj89iirBksx1U44HPFD1QBq",
  "key14": "3x1P73NdkbF8EicTgrvXf34zfgH6Sn3ZMu9cxUNgWd5j4rCTZS5NZs3u1H2qxVcpA4SGJ9Y6siuf6wQgpaguunMQ",
  "key15": "54gtpAxvYVKzKdthQRAMzccHRvgQJoWF4jfaP2DSHrjjP8QmfrXebBK7ZBDVAG17X1a8GaD9oC7m28e5McEzRK44",
  "key16": "5c8HnFbmf9nBrimzNGcLhdEB9iUHfUmGJNAhJJthg8kZfKGpMNHWzVQGFFzCZrfUHi1drNGhH2guP3y6zdMhedUZ",
  "key17": "2x9Ej4oEsE6BMMa6XFxgbcfWLvLqmtdtMk8jZVvaUBnseCFDXq8mEuDauFRzkinqWHgdXY7dRcCE8Q29CQEpiKqy",
  "key18": "25nepTuqmoAWMMRE5g2hx7gz6GoZjeX56TwXVQbs9rtX3PLggvwLBsX2JPTjun9NPCvqYHN2pzsR5pyLZLH7ZkFD",
  "key19": "4jET1WXNascAAFRbMKKRCpwNmyPXz5uVTzfYjizhyfPmQ38pTeqdqiqU99G8vUMfyFSKE2Hz4d4bjTtwPD4NEDcS",
  "key20": "5wP5pNuDfpaAuk51Qugw1CZxJQ5os6QwYu9xuoP9hnmLrbc68h4ZAWLXHgAyKVnVTjZXRUsQFYwDzg8NtNNv4Vn",
  "key21": "3ZiFFxUm7D5jgQ6zAuKQsZWGtYb4TGUA7C8fariKGKjM346BrasEfDKpPnsPUt1NB7Ny5fdsNdro7bREaY2zXHeL",
  "key22": "32ui54Eej7VV2vGfzjQZ2MXgwfxXvuTBWFuu2Ms8cpg2n9idU96o1JiB4bX8VM23YWGmCyZD8vcfxpKj63Af5sTf",
  "key23": "3qsBoQjLMR81wgykGB8syL1myiksVrNBbH2H1trSd4WKhqatH46yzHGLkp2pcKm1zE8rYomfxJthiFtbKPwaS5Ui",
  "key24": "4QKUgpGCcx9PbKtT3nPLramjSHVzTnPecmFamAiod3wpchK3eLgdK2o7jP98qzaMVjpE7gtTirGHSTxHQimsgNkk",
  "key25": "4Nu4p4S7Q2AzfUkDkKN2uUj7mnhTPueBTxspui9bGym3361xusjxXfZi6CETRud46R6sRNPshYVywBCvz7QR7d1N",
  "key26": "4QJ9pjuXm5ixThhtgSYBEFUdDwQ2z38QMDmxkRRfLajUPDmtYafLub7BWz2Mrn29MsaoCwdGV2mhAw3vvgWadrmB",
  "key27": "2ywjmc3ts75VVvqvQMtMyHkZCD7E8ZCo6ud7ACYDKbvLxiBBqm4vQJHw5Mfknf7kZ63qR7QvzNLcjf4pDeWmo1RT",
  "key28": "2UUTk3ZdNQSGxEPKuAi2V84ouTXWbgry23dog9ZsxGaqaY9EnWaoH7Rson2b2U79KQJKnC1SNaXTinkVeEAumeHY",
  "key29": "44vU38C4DjWbbPhJfvAg2kUyedB4A1xRLHSRuq3Z4G8J4uFbPEa2eYRPCKeaq8SKr5eTrtj7DQXHuT4VLSFUfccn",
  "key30": "4GtjWhZmFLowPcXdVCtCmdFAXRNmiKyEjwFDAiVVS5GkwjD36yB3NdaPkKhmWkD3j6v39zPJ2w5ndE9XKVVFyqxN"
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
