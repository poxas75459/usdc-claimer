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
    "52UbEWC3UuNZCmbk4hYvhXFDLaNrXFAcNLuskDTjDTk1MdjwEZRvdThDD8C3Uq3jDbW6FHHKJPifg7BfEo8kFv5f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iLgGxRAqRj5WyMftLJfCug9xvASJxtNyQqrCsRidLiuEGD8UGy1zVbHk37zSxjfiX8V1YravPV5A7uYjGhRBNFv",
  "key1": "Fj9ivj4FwffvhVbhveP72QRyfLStUFygDaadD6BKonXDTbujooFN8LfiBFGnEFLcRBgwTBEmUXE3sb5KUy6DX5t",
  "key2": "31WosRMN74cz4MGkNk2rvzqvzSqj3JAzTgf5SWPmSuNjGQeMzivFgZ17LDxMNKzoRRGT7Yct5W9e3Yb3PgvdrQFK",
  "key3": "24EUkAE6Y5RnyBwojdQUAAkakrCCRQL9DnvUduUtjCc1hTTbePeXe6Adt8YmpwW5MKAp3Lm4RhRL5Tn2qYHd51iD",
  "key4": "2TNqDS8Pck4tSBWdWQxW6gUciAmjV3Jwqi8HLD84Yk8TxGVLoxadBEoDXkKJXS8BwbHZTuk9ZX46V5eGR2Dc3goC",
  "key5": "2gDPexV8LVYB7yHo7LXttqFtzfKc7DV5qrBR4L2Jm8iSnmnQk1BguLoXueEgZqc56Mmi47KHPCHWCoWpJQ3G3RNF",
  "key6": "4m5MoFjZdU6sRp363kqTWePPs2i9TCU2vcPyAz26YUBBwfJQMDJ1pAU55vhBUm82iraoAbaCZPAi7b346LDYL4Zc",
  "key7": "2JPRfjvSPt5zfeWyyfm8aCbbUyGMC4QZgT1YobiCHZMmu9n2GfvcFxBMSsWAnZHotoBekW9UZ1XqMn38JifeVwQr",
  "key8": "4DKjiaWNeqSiB5R1VwJWRKarSXax6Ung7R7SHchgEMHXpBZk29VgTFrDhTLY1P6pHXFteNPTM96j2jYotM69fgeD",
  "key9": "4rhydedJk4geykPrHkqxt9v1ctqJuRuvjUTcewaxydAkbXocHYt8TxkDcykNdKULtebjQBSjNXrSYtq2aghjpuCa",
  "key10": "5Kqx15Vzv8K6uDPCpsbyfiPqb93MG8daabYUYDFN6EviWMVyCX4kGU1VEoidSTpk1Ayd4nyfHQFnkBNxVQHiyW4P",
  "key11": "3y2CXLgwoBpVhNQyqou43VYTkCR6neWFTvf4ta4BiixzLLtuf515cLgbcAL64S14uQ9ZyJaJhGrqAF9B8oRo5CgQ",
  "key12": "3a4ip85iF9T7TV4aQfA5MEQGPmoxpNWn4G1xs573UrMNUeaAmZ7oepkyigK4Cnr64hQZ6NRtCm3sStzi36vnNwmS",
  "key13": "2ZhwBCf3ybCpF4YMP8espM8K2aCTDP2DxdDzyqwBxeS1KSL84Gwc4X9Md38onodCcfahrrnoxqreq7GEou2UyziU",
  "key14": "41RnYxmNiKcyYHPoV2abY99E4gkiwv839pTpjZaaBuHis44WPn9wYqTsr8NwKqBSWJt9TzpZcjzebrqMken49yg6",
  "key15": "5wDNn9WtW7X3v8Nw4XVeHR8K5LZ5SY2Vaaq8Hao6vCFXFBsm42tscdKH8MxwaeNvkiXXstJBUcd2JC1rayDe47MS",
  "key16": "3w5Bf1uS5QZNgpPUrK7Bq75zwQsJbEWYFQ1ufapkjXfmXY8ASyPU6vj4sDcG1RcsyoTv7fq4vfaxpcYiS6Fks2CJ",
  "key17": "4QNjxBnDK4YD5AkNGP9MxzXkX1y2kT5m22EoKNBF4Qna25BxhKohz8x1hZJVXz4C2aixsdh9V1Ev4ohA6cYNHQWB",
  "key18": "4ASs6nYqbqqgsaExLqTDm7PQDpjSZ1Qb6i9ujAFp1QjRhzTZeou1iYJRmAjCZ5mvfA2NbypYKy8P4tTN48FcXbKr",
  "key19": "4pi3YPJVobTSURZHTToAdEEbYJwncmtwcRkD1CGz6DvjadP6upLDUibMqnHrg48r3StC69z58LRyMsYXs2Vtn2Yq",
  "key20": "nAEJiiq2f1BNEcFW5CJEeFWQF3iv3B5eJZRaS8PZERbucXpdNpn3AnFG2LvPEZT9pjQ7ocnxJSjYFxm6iJtZ6Gb",
  "key21": "3kdneAG3ZSYdRvcLpNmtMwqRV6f9SMAC8QKxvfK99hjCxbZcsp6KJpTS161sTZZtvV9hQWvUqwXEC5pHEXhLYKYA",
  "key22": "4sb2uYyTqKhQzVxmQ34ZWZdoX53JoSjzP8FG7owxzH1D9FjqnyyxsuNAmTRFwes8YoPekoWujfHdzx1pqfrhNN8k",
  "key23": "F3n9aAcmXLeZtiXpY19vfLsG6vR6dTAqrnZxGSsnogfBCLLyGj9i72gFYgLghRek3Nuh6DKmGvJbJqDyDB1Fa6v",
  "key24": "2EQsSphbnCv2nUBzmUBZvwLMCsHV6uyrhnnvt3aS7xaNctd7BdCRUyRPA1PvkrfDaxMb64A91DAaC1tc5Z84731k",
  "key25": "2Jhnh77YZvycREqz2GgFz8iZjC5RV7CaNLLpvJSfSqZUjo8ox5nJJo5r87unxirLmrNspjv6tT9aKfWa2n6YPVi1",
  "key26": "2LvpwAGLt1JUgpAa5VFEUDcufHmKWNde3M9wXBQHHyYdHjM6qxUTgtx1JXQcJqAsmvcZQSBBXDz3Ui6rMtP5usd4",
  "key27": "sLEvYNjtMvhKb8m4AM1iUyePtB5sqgiS8H1FhnqQJ83LYNLGQ4F3PaDgrcsYfXqjsG8z8eRt9NMys2HfKn48t89",
  "key28": "5jeVPA72j8qbhuE8brRLhc2t8M3NryBdVw5Q4i86TosWGpVZ3hBnknhyWrE2WyMKXeqv7RK65bVPT83AbBLrGs82",
  "key29": "3tXbZapXaZimg3e8rGfN68SvU5cd6Jjx5Nbkw68vXQHQQqDHnmUgmVvS5peZbkBJKwVDCT6G8eKZvxijUf3duKZ2",
  "key30": "5MhvqK4LXQGDkok5DSco9G8WMNVpMHJaU8GBvwYdjdFKjdSAuicXhcER2hLwArHDtvrrJuvhyyEPoznAtKCXq5Qj"
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
