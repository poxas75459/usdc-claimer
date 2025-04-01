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
    "jWukyY4vRAs4gp4E3QgvsBhK33uEENN9q5Rf2be924hnLY6VvCVB9LvrH9MEibb53D5ufPEZyfGc56MVxWXFyfC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FnxeqB43N1JNRWCJfw58mY1KaCPjgSzvg7KhPbTxCwkhFqyxu1AzoAbn7tSGwRPEjUyYRTVyVmBDPqP7sc9B5Sn",
  "key1": "2F4XXx6as4dkzttFTmoFTtBfRGjzMaTGs8rzPweoegM4NjBmPCWTJLScgc5cGxVZ9CsdJFkF64vXHpRKayTuaZ4U",
  "key2": "4CRgGAwN961wdG2gav3Fi2WFYLmdsVFkGBVFrBenDPuQuaC6mpuPg5Z5a36ULKrh2nKoupALpU778idZrz9hrzNY",
  "key3": "3UTaMnZnvMDbbg8d5by7m1sUgScFVogDnjrxWhbHLAYmGTKYdhzQAfWPJLAYQMEo2RMKWNtv28fTKeDFGhLt24yf",
  "key4": "DyT79DXuGJYEhwM3Y2h3yDytrNMnRVh2yphL3e62UZgBqyfWqdDUSy2yHVArxZbThZdsKXmAt1cxg5BG7e2w16j",
  "key5": "4giSkCzWvXJqvutzWg8RZWNMQJe5xQXXr6WAz8Uskk2QQDWuSPWE3jex3i3Yn4y3oauTqKcGwai1omwAYUpp3BrA",
  "key6": "5u2h4dqLg1FPxUCoNCM9PwqRGsKTSgKjRT3oCAC9x56F72uqqbA71CTPq7c5B4a6b1YjE8mvteu9t8aXTpgMwAK5",
  "key7": "2uNjdwotfn6at6BMTcXfdBCJVqkauK3pU43F2b31KdpncBBuMAgGawazBe8NhGSecicqJAUbQC1YGyE9zxcxEZJm",
  "key8": "62RNrWHYYt1KGd7LQauAsysnRknMqc1bEHros9ass8XnR5WBiRAdELRXrMUvJ26LtYj9Jp6gF3GGrkugKXe9Musi",
  "key9": "xTRuxSX2twJnYipBcqZP9pajDhfQX2Au45BdHb4Uwvw93Sj8JaAUUr37V7kvX9NxHP4zCcZ3Ux2zX3SJybqs1AS",
  "key10": "3vx3MRyScTN77X7pVctuSN52g13EtAr3RAAbEMbzEc9sb629NbVZNYM3DCirj3gwkjKijh96BwRmB39kQNS4GYjb",
  "key11": "4bga6TFw6ozDimWmng6mbph5XijWiDYj6Ah6MQTmm3b8ww9JPnYRHa7c3bua7Xr2YtEUsAG3nKxoJQTR3pAcgE5",
  "key12": "3HhugbrYWGCAzy1MMJ8zQgJXnPSbA5xXsKfEs5SRCUGXEs2csY64CUBiD9AkoYwAdBG5XsvfvnWKkBxqGDxTiUsb",
  "key13": "4Lf6koUmaFgpLXDEMjsLB2hsw4S1udgPNg8w8gD1R8JdLmv1ywBgp87GphVZahnX1UoBNUz6KaBMTD43isRS7KnF",
  "key14": "WnJMRgQgan9A9M48cQUHocNJiQZ6dqsrkeakU4sfZBzWbmAAY5FB9VAszRij3Y9ABkfYDwCAhid5vYozs8pF49y",
  "key15": "2zcFw2MqDevKo2agcA5gfdRtzCF45BaWYP8J7n3qykeAGZKhnhRiHARCDHBYvTw354HvXeh5zwrRvirmDuhTDZTP",
  "key16": "bTxVBwthUTcaWGSVjuZGdJjz2e9ZToTuC8YbcRk1DXYKUC7LuafLXAXgoukNhshGXE1t6hSpZqirznFG2rSVzhh",
  "key17": "2hfZzFH1dT4ui1te1MdxUYEp49ukwCW7p3zAKwEuuxet2KWgvWuF2Wo6ZdP34XT2VZQBgPHKwYCzsx6JCse3KwcW",
  "key18": "3BaRyG8NuUzoR5RM3x74p4hR4SHCm8nMnF1sbX2gUL7zqAzRQA2AF7tNa4JfRmG37Kto9w4NNg7ngLMaQbMBUkXe",
  "key19": "3Yitk5nMMAaufEhRJYsZ5mVaGe8cysm44emXKJv3Jn2etCi8yHqEJ8WUpQVsCgg9UVwFbgKYfSWR93butumCsXaM",
  "key20": "iyZ1hrkJXA6C9XfAscAbbNdTBEZ3LiyqbUiJ7okpaGz9QKynVtq2pwBYZW68NMNyybBReacDr3iuznfycK94PVi",
  "key21": "3SquJERvhpngLg1eopVZktaUABkEgR6HPb2aDXxWNFRWcdcL7bhGeU8NabewzXQ8G2nwsLAKxzndfbjjapfc1tK1",
  "key22": "3fGKxEVeFaBW1vxuu7v7SHx4fX8ZqBpJimbR9QYkbE5CReVzHtYX3KihvURgwgFXcrg1Fc9PDXfCDoHhw9Xv5m6P",
  "key23": "H29Ga6s6VDa8LtYD3ABsdCm2Bsu5ZTYdZbGEQFcQnM7QiGMLUtd8gmGcJRfRiSmvDzEQRG3b1pAXfDGJ2d5URsU",
  "key24": "5tg66HnddXw4Mi987kd3c6DcuPpu7TrjWCQ4wncKrnFZc8pNosiPEksYe4mqzhiM1TMaRyrkHWnRtJxykhDbZKER",
  "key25": "3h29gYn2EwP5yinMj67cdi22oCAVV3m1ZcaxDYAEskoTv2zjM54FgPCi63DYFhNAnVn1Zf1AZfs2D1FrG6FwStWa",
  "key26": "2VncMC8fqHyD2LbxrZcEsoifwLKTqL1gE9uHmfZBuAmTZ1rKZ3fYpzaR5YfJisvGNgAnWj5LvQ4dVLhe3Lq81u1T",
  "key27": "3cB2kUVpZVHrQ8ksAiGPNqB1tkDyzWD7uwqbWTFYhF1iFKnG1yn4X8gPKJ7tJtE1GG9wSTwsTypGruF2CaUUyNKt",
  "key28": "4fA51VyrH9Cvj7gfa47zGtzmCAHRZMWxHJEC7tbzHsdcboczkvFqV8kpMvqypz5vHNqAD1jFGn2QU1a2guLj8sVw"
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
