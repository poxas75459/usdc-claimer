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
    "FAj7GXk1dX2KyCN5V16dfDVeQSfKic4G7KYBVGcmj4rrbqyAhCFGkUQGA6iGr64uJdaga5JxqPzsB1VrMZXuhQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58Zz4XpzMBjavf1YtH1Y9Gk9Y3ZvqBnLAPrfr4Wnwd89EUv5T2osVxphYFMCxdLFNJVuN5WuomY6bVgVzcJqntq3",
  "key1": "qEz2eVhUgpk8ZV2mAwNamShFJXkCq4Kko2cUZab4TtEVz43UEoc11s5bFYScVUpPrnDqhzQGWEezBZtkfwvEYEW",
  "key2": "5LupyXEw8rKZMMq2RUhXFdJPGsd5pWFznauy4zvN8mbzmMczUQo87y52tQKqpbyQiJ6gTp2aktEP7CNGAwfD7gkD",
  "key3": "s4w6GYcy7GWAqKyB6GSLAMdQivrKnqjCuLsrREL9nZpwHv3hy2V9F27WrCbZYdvCmqADbzjc5pDNGVraEuVmwVd",
  "key4": "3ALSb3BnU4EQ5pWHsuS5Th8S9J7eNsyxhzSrFVAFTjqNK7ia7UUzaFLSRdmKAMH18SEQ7M28YwXdj8aWzA8yCpKs",
  "key5": "2ZvT2m3QRzTbcNbK3oH6DX81hZkuGzhwhqF8AemxaPXzXoqFSojzbs8MrPYmW9RFws6G8Jc4czQ6uXWvu91bAR6p",
  "key6": "3x7Nu9aB7Bb1dRPkwjBBsppzBs7QVFRhPSCSNgSRYSUuryTMcxVhbEV27GU72vkWNoVknf8KgxaJKqY5PFAPTcRG",
  "key7": "2iXLdF9k4ULysxZUESNu28Rn5eokL4ovKm7FbifdiahhTQUS8B7FQ1Xd4VgokiVz6SUzMnjXFXEx26PG2xcjo9oq",
  "key8": "5Y1kUjWKLxkhPtpC9aqs5DmySZ2vwJRLjEh8paCYb9LAXEvkydgJKBjEuAGdLYwCL7kdW47muvG1SsKGAQhR7fXT",
  "key9": "5S2WY2TQP1whN7di8oS4xBLTanZew7uyfCFHRHmNdKjYXUHAhTc8SuXj5zuqcUCj2L9SLJ5AdhCpnFeimmuvUiGu",
  "key10": "VbtnAxwz6CJvyNRsapLVeXjJGWsDGNrYsDgEYbjc6hxfTX8v6EGbpTZEryVU5gr8mCAzhXBWzRtuXmc6t9VHUs9",
  "key11": "2jEgvmTjngbsCbVwHEHo8SZXd7iFFNvuxsuCp1uEru6ZrAAL1TbHhRrVtAgRdXxRH2kogRoh6CdmL8iiHWr9C9Gn",
  "key12": "4ZiqkYrLczhPXMeb5YTJJjxLQEGhD8D6NPwyXakWYmMsz6eXr3qpVXrqLjZrskgS8D6qaMNK3PJtbXRvbCojR1QG",
  "key13": "2xeVfLwRMARUyFPNGZFcbnTHKctZnoVJhtPDL5D66GsRAHSdhB2FTC6zw9eSZPH13Hw6LUaFBdeVudNMA5fpgu6b",
  "key14": "dE4UVuq3boJ5st2MxNfGCBTowhuQwY51hgkTLxUWwUt7m2TbfLmq1yvGopXs7sdRnUbadZa3EsxQccoKrsetr2G",
  "key15": "3pay13Uh4RZfkB5Cm6gNXCXri3abknitSESxoXxQW3yQyBgJRoGDSgPQdrWGkZQ1GEyjg7ReKc6EayUNRN8duB4S",
  "key16": "4L32Cqfjt7Dnqr32TV4VyCKydS8TsRfbLHu2Add8arWWFBexmr6EcDSV2gDeL1ihqcQkVCQP6Kyh5VcejDjWfsMf",
  "key17": "3JpPiTsiYUD3xKRg7DcsqjC9tU6GndABmof2oXZoayEFTynzRXPk81eseFLfbrHqvMN9kimdVpoSB2k6CNHbAAFh",
  "key18": "4XDB3FjsqMaeE7hgC3mNYeXnyYFXZdt8MKqDANEGRSdQuYmMwKsobZSxoJrfhogGamkVm23DRrBPhfYhMvPgxgty",
  "key19": "4nnRYo9Fo8TogK5rVuZ1d54ytfJyE4n13a2MWtKCTRPQJjv3UvXeRMuaT7LAKs4kKXbnV1oAVw4ysSp91QBpQKG1",
  "key20": "5htsa6ejfyDzmMWKwxsv3AupQkozf1fcdgzu6jWmm2Tra9cmcCSwXaf74QFisteZxJqHyoZqN7gAGWUKvr2p4HF8",
  "key21": "6Q4MDyiYTyWxhXmybZfzU6EjXL4VvxwbPdF6DnsWNh1LHcyEEuERGRy1bHbnYNqVn6pURv874ZAjqzYE83bz6SZ",
  "key22": "GimYPyGUZrdt4DH7f2nPgrRT3iKLHqyWKkMkdy8tGa38PwjMAz8RzN53vLtbWzySzYbBGgTwP2rTSkK7w1SP4ie",
  "key23": "cuNM74gnjVC8kiUcmV6KMh19iUStPLfDAW6bvok88tbfCAif2PWDR8RZBpr2QMzyrW6Hxhz4KwyLr4SEgXF8f8N",
  "key24": "2DRNvsxGUJ84ba22zbDacGgNdsRMtkKi4RBNhQadxV2SJhhLPmJCW5tvhfyMKPxoCkkgwWT2k1bEUB85NmCKmN2c",
  "key25": "2fYr6HMAyauGvY3dEqqwomnn5tD1eKyszufE8Ev5hX8Rqkd5AgoZysg7wjRyqjaCwKvDj6zBwMxMsWTHgYGM8Vg2",
  "key26": "2AX6aDiUhX9coX8bEXAn8nPp9KseDjRBrqst1MuZxXhYYoHHEZmBvin8F8CvEFqv21A5EjV2MwfZsaBJJBoFnzgH",
  "key27": "EhDnepiFtuDF2aQwja64K5YH4CJDPqcrwdM2ZQGw9L6omo3BeWbQ57UVhRgU8WjKjuiuNrysGp9yp7Uc5dkpAP6"
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
