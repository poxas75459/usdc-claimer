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
    "5BDRf4n1WCbifzZdedF2FFCj94ZtagUf67hX87aPmwuZ4rAD9R8k1NPSxwCwsNoFnszmsjrHRY8yZreo2WYvs1j9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sL9Cz9JiPvxh7EgvTBy2edwSCCihouAVgMKBCcViKRUj5zz9BoNLvFEyvZbbyYgQ7mgof9Scmc9TsnFQDoZWjno",
  "key1": "5jCjaysVgf4A8CbBVUVn7jEtx6PEfeQHVyzysLtYV6tAU85fwtAEEbYod8tZHeRiE4DTc4KDmtE2j5ai28FtXyiB",
  "key2": "4NHL5Xwk1k7KrfjHoGLH6fhvm52jAs6Q1UwYKttfBegVgJv3wGerPzdPjoJXZj65Gg1D2uy15F968qwrxxtQ5moy",
  "key3": "5e8qR8vgnUY9kZW8EBTYYHtxyTEMPFmA793xbUDph2tHxv7AaySdPDFLCh8WJUkqML2aACF19okkCjdwXYLo8o1C",
  "key4": "CuzSJDMvTAzCEaxdMrwJnV9pyk6jWHNoeGpCFHVCe9J4p38bbub72tPqGTdiSDwF3XqsGdJ7X5TRCK22LtsyufX",
  "key5": "gGjN3L28qraxW9QHUbwUjLJM3RQLPmAFoe2vNcknC59S5B2Gm96VRjFUnk2hKt2Nb1LrdZAhKasasaCaJWbiJGF",
  "key6": "5ATkoBrN3RNYzoehmMqVBMM6vfK6cx3wmDVVUojDLFaoL6J4PPjgAQPJghKyW9trjUPSLbbsQrNKhFrxkRxmXVQg",
  "key7": "2hZ6zd1d2pKPdd1LRgK3mW3q4txmXG5D87bmM2dYiLAPx26dc3DNo2z1frxQpNQJHXvsQWxH9dt8QSm1rWSVjiQa",
  "key8": "4bsvnd8ebXEP75e7eXiCZzN5qwtXdBAsDFRLV9zKovhxAAogvrFkAKZaLrEXa8CcoPRmPeF6p8LedFxig4UpZFNq",
  "key9": "2DzLtoWakr6Vad2r4aF3zpdHQ5p2KXH6TgXLGWShSQPfxwYQ9rmxo3NPrVbzfp2izDZ1JcXVdggyGTsqweEDEf2Z",
  "key10": "4XVcZ3ziqup7UYS3iVwo5Po5YBp3WyAd2KEmfSoeic9Zi2rCw6EAmBk4WA8A3X7JEEzGKNGJUHCGKtSS9JwZdpom",
  "key11": "4dMXfEmYfYRhTQABvbS4fdRvueaFxjQJqKMmD3Gq2fqak6hTVntJVQV68Nkrxj1jAbgTLPTm71A4WiDRf3bbtgAs",
  "key12": "ot997YYEx6sHaQKsBbo829DGcFJqTn1TEWEDzkAmjmk9J8DUH55LmxDVKmTZ8HAYs4nSh8wiatppgZqH5J1e241",
  "key13": "3oabDW1qCt5MYoXLt93TK4fNib6s2NYRkKS4oSvEDhiB16KTReXsEeQoHWEKEwpkmWVUvBRKHzw5e5P8GTvLiSoP",
  "key14": "GMcrtvETi96tjGwEP44jY5Bjh5qQStcM7TAS8GtMXF7F7rxCcJMYvnzGmTYhcLPg8pGSRGR27d8J55PCoi19F9k",
  "key15": "2kh2Pk6C9xuT6aYhBYH1WXLoU8kYHF57K8WMGdRK2MGVFpJhqcCuXHT4iwPAStd9ombYLoUDPiBJAaBV4AYmT8Xc",
  "key16": "47v9HJVUEbsmdPmZ66GDxdAe1vg9JdiD9rkxazhqvhaTUibok4jAfKyCNUUJHJXpBZWPcTruN34PociqU177Q2iz",
  "key17": "4XLUGq1TfnCWBTQPpWu7xCvNswMNweh8tGmgLXTgQ2JsjpSKMR55RydXM3nZBcF4daP3M2nXP88s1srToN7P5cqt",
  "key18": "CQguS5p5UdV7pfDio8uzLVRuXGkCYoGpq4WJgGT4M92NWdsYkJth9znKfGJLfmVSh5mktz4ggkfwyKWkb3ABbE2",
  "key19": "5VsykTuuwRZoMBSgFbKvFhreXBhjy3hqCkYwVFtxoaAAHZSwXv3DRVMuCVMBjaTKAbNgWy443Fre5u6LdLiaK1Tk",
  "key20": "5czqpt9BD4fYu2wku7Kg8yc49dzubiYBE6DGHbJx1HzWw9PcfKskUZHJJaknFgbSsoagA9tfXa9YC64r7iR2NBF4",
  "key21": "3UBFZ9wu1hiD7EX9UkXGTJAyhNSUuQPvuziLJTTQdDQaTEqKm63gQ7nVndTfPMiciAVUaHVM4WPdZ4Dd1SzuhWzY",
  "key22": "aJ5gFA2ovFfLUr2GKFwkvvkMNTHZ9AAHADNftEkBye3BkFrjnCz5JNwJJzpXqU1WbX9czTg8ywehUFpo8P6P2i1",
  "key23": "3AVPFD3LUHJQJeWNssGxRSU7YkM5P9ffcuwt3SryJsmWfR2aWKasVAToD6tkyUdnqzi63xy5kW5SG7U8978eBNcX",
  "key24": "56ap3iwfuhEHU1V94rigT8JVd1oJiA1EEsKiPLB7QFDerixLhfRD25h8PUXTjVXPk8P7RKjuNHYnrTirwENXx93y",
  "key25": "3P4rr5MrJ9B1c2iazVBt9nhvFsifZw1GHabPwkXNZ2BYViVHNMBt3bpSB8HVr4GdKVeDkhfYLHxCCWPU43uXcrXX"
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
