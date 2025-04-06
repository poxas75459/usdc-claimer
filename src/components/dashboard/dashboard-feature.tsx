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
    "3Rh7kmdZ41px2epyMiSnH8uK6QrDWRnhh6io243umwj46CkZP6rW5gKwPqkVtxPKtLR8zk5xfQNBBzCPWVSDUYr7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35eyFqP4tGVbNZw5QtSU31QakfBYtvbSFFJ5itEJczg3W4ihzePZhhvswenwB985vRYTMLiXX5qmd6Ea3TCoit3y",
  "key1": "2BfcQUPdJYxeYpB4ZS9kRVuZajdvYrbWYzNiKuH7U11sHy3A8TXiVzr9iQYLwsS9wsKjNaf6vm9ZTuLKmXieW959",
  "key2": "4LsEAJhrWwDvmgHiwCuX31wWfaHs6ygo6ec1ktLXrXJQ7CeV5D6BPEe6x29J9Lu5Ce2VjWg9ZdJzMHA3GmatnmXG",
  "key3": "WPPp1ha1pwHLU5oE57cv6fkRh9B1SW9ChaZJyXgypcWbwcvAmheAm7hALXwMj3mX4gzbBkzNJ2qSMx6cdfHvgom",
  "key4": "wM6AE6pTRFGTB2NvzKgPxGauWqGETaezFbakUhEQoDTMDu4SezA5nKhr12jhQ2JkQ2bspNDA3GmFPugbq1jrPs1",
  "key5": "2XQ4agnzFb9FjfXCQBfriXMwg5PB2jNiqRAJN6sLcKcD35jwcY9mKp9Wp293tjZZDBvkv6qQCZPAYbJ28UiGtihQ",
  "key6": "2katt9SE7Liv2kc8zLjQ4ZjGfYi7g3zPSmWKKErRo7yK8nrEB74MXZeoEfuMiX9XmLNuj6j4LCumTTxRHLmv2xhw",
  "key7": "3GnhNGHzwAp5evMC2BUcTXNWQ7ZrrHFQqxf3QG3AbWcY8KdsFfJk4QmHYChzWiK8WfQMuzgvdQaphfimbzKUp4zR",
  "key8": "4uqm4vnSvqb2XEDcki6RSoSNYbJCrdEaeamodruv754CLiiAzGvEAAoeVeKNZYAzgNPZXCFJfhMuj8xwR9Mgw5Bt",
  "key9": "4dnqPXW4ybUK8DFPWtrJxQUs4Nn8DSaPRmkW6LtvgkGR14FcwAkLNoVvxFAUxnymVuZDFs5Q9pV2xdN4z6kUPsBP",
  "key10": "4kHxaGKMsgdhwVygwx3bjpNVduYDvfLXHy1ryFoLovAogfMRawxZhsRYM5A9XieRpGx8Z1bwVzfzrDuuTGSHuc9C",
  "key11": "373ivFK1EH2MeoQhayKwncf3QbP37KsP5tYs3GME66yzNdSw6Ww8y57CDecspV5qTiQaZNvB4eKi37bqdr9GEnTa",
  "key12": "3D2wZnaHttQv5K2weZnpFho3Nk11vBqfM7u2vRTZaAXywGsF8FCXigegnGzyhRwEZ2rpjsDoh4q1B1NPJaRbMCTq",
  "key13": "jrHxar1JnrPNgLta5q9n7q9S62d5UV3fzun9CyqQQh7QiDgF93Ca5127TWcUdgE7xRJJm4ofgzEjvBnFHbZs3L5",
  "key14": "2Kd5KgkNSszqNBtbgo8pbRZf6xHTBydWdpA4exAhXR8fSEMejWbHhRsD3z2oYfuViJQyQCt4eLJaxvFcPiQvgCMH",
  "key15": "2VTaC1oBopBLSj6GAfSb22EiMmez4hqncBoEPvD3FfhXbBfF6jW9mxg5SQuFMbfTSeUJ1TNch3W95DXkKQEyFm1Z",
  "key16": "2xdYS1p79nzTp2SrzHoyrkfgu1dKXeBs1P12zeJTE82vrsYoCFmxpefPd3xDDDgWmTSzneGQf9zVnpcgkx1mn85z",
  "key17": "3G4CiuZxYjvXqws57Zzc6dDwaC7idJK1S6QxJaXdDnu62JgBs8VJYJcp2DHPTGtYzWHDtJ2c3qinrEqc8p1UytZC",
  "key18": "3hCBZbPQWwrQ4UmZVo17xJrXd8v9GagHGfhE6Jc3FKHn9NuqVvVoJdRcnjuvKCdyShpTAECYzywBkj8uBydY5S4A",
  "key19": "PU6E621wTCtx2oviE1Er8A3EgvyuHA9fJdmmAtEXYxPLR78jwcumi8DU4rb23Lz41owY21ca1WTqmUxit2WVxLU",
  "key20": "4DCZURQmvgRvwEXLkydjMbmTj1NEAABW1NUVvdnp6cfbxok1WZNdcHZnrHreGi2ejiMBeR24JT9XR2kVAdC5MiV",
  "key21": "56Arr2Hxa3dv5XQE8FBbuLy6DHHtcobq98QQUnMejdDQM6W3PmegzzJufCJ7xTP6ukmvRx9cwGoQjTgkN9MYH2F9",
  "key22": "4zpmEbS9yQ3AvMykNKXFqTgvTipLNqtVnM6KtMgj4FsEyqxud2dgZJR9ZFe9UwxyTTJ4NzkQYr3YGe3hUsTrA4fD",
  "key23": "3f269sv7NCk1NxiKKomRL3MbZ5oDndMYBLETeVL45UFVmVrvfviv7dTjsN5JrxWcuPmgc4SnVDUb8XLgW5CikF8h",
  "key24": "5KmkCJWdF5kGHX1XeAeN7Rdg45EDZb1iUoNEVXcbHdygVRmCbW6UghezjkqvVhDUrhABkRMD5agBW6VaMf1Qw7aN",
  "key25": "5ppZhPjQS1CA6merx761VooADsYed2uLAufg69NDRSHSwvpV18TsQ5PngnyfHsYWLALHgaqthyrAwjVrQr3RKr4f",
  "key26": "45A6PP7X5qwoU3md1P4XxXQ2EhipVD9fRehZQ2P3yMw84pd6WNUTeQXzMCxAog1ofB6wcp8zhnhZ489VMwWdcnco",
  "key27": "3p6MEMUBRKYmGgq6pvFsbmDziT7b8FTT1QLrX9j1jN79Dg9aqfJLdSCxQBw1bVKWZF2s6VfDfNGcRmoh8YkgWzDK"
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
