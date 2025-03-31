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
    "4B1u88Mgjjfmz6Bq35ZM1wMqQ8p51ygZNbrxtp9NR877wbZ5PDLHZg3kiQ2483rELMQ2Q3iNQGaqrRkv3ZJwKU38"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w4d3M6wWFR7d3g6yTWTtJseLjnAa5fNNvmoHX2NGSsJ1Vn8HVJxAZPUB4HV9PEtdSaGMR25BUa6CEpzFmeGn9K2",
  "key1": "5txpQpJBe3Nsvv8CVv9fQ1dgkmzA6fEhjBZToZxi91dkSQmKqF6a1txqgZLHsbmxDWo18jy2WiV3y7A4ftAukRTY",
  "key2": "2JXjgfocii3RZVrdx2PD7DwFBbq1xMLgN2Fdo2gqe56ERrXn2XTy1A1FvHeXpNZ1gaR6Pv25wAvG2n3gVKyGwUzV",
  "key3": "2DxQEy6jyw1vf2PJgCfDBPwAn4jABgzibbAVE1PtNPC32J5Qo2faJ8y8DeVcWgnDVfp26wM2mZheQVnREer1W9dd",
  "key4": "45d5ZKprVeCc4QxYf8ED7HLGqTW6c1wSKEhiNxD5e3bdxWg7Hsg1Xdg7RmHZhmFhW2wFghU4qU5eW9aABAkN2ivj",
  "key5": "37XqC2EYUHQLHBuH7ZGVhCC2g1nXibeXi3aq4KaTWWdAfRLfR8gVvjNzQ1mRLT7Ej1kFHZRxbrxm8VvdPy6Cmp97",
  "key6": "5QRHuxo4VKFXtqtdCjKSjLG86dPSy28eQMts12G8AzSMyxUd1MCv2wy4jTy1HJuqwPZZxnQD4cPAZjCqrmgPNhNw",
  "key7": "2m7CwDtUWYCC1vr3ohLejQcj9idFV8QCg4ayMUvYWCp8thjJehGcJ1CtTZfd2ZCc9a62GVDMPeap5jrxhgREn6sB",
  "key8": "4VMCZ5fHB2TQ3JNgZurZbYRDPmpWBcrYNXq11aPToDQsQtfN4WGaztvtmX2nsHee3nF8ZbSvXVhFCGBMi6SSdjFX",
  "key9": "34VV7CAcr5zccKQ1wFZyYkABnhFwmVghzfrbDXdC22e5g3LX5jXqadguaj3fccCU8NCtJuHvrKA2rmLkLq3MQtuz",
  "key10": "PYe9GdEGQE2GM1xKwSLF8GWWeUxDpxEfDTBP89neEpUWobtKkDYwrVqw6gMcV5PQxxn3byKn2VcbdWkMmEs1D8F",
  "key11": "4Z6V3QTYjsHxPqhTJRB8mQDENFVgWzrUvoGTdwynXJtwv5GYP6PK2mtspjtoqnV2YB4s4WkvKBphmDyLsadYvY8W",
  "key12": "ycJXU97GDfJYsD5sdgXztx5b3SLpjWKrLRDmKdcatUCypvTUqtHoUrJ4qF1vSAFeuZHVM3rnh62f35LDayo6kBf",
  "key13": "3xpWTy4DPDqd34LsndFsNqVusWrdnbtonaegmRpwYb5CkdNUpgivSB6K79pfmV2CdvT9HRRJ4A6B6trNa8hkHL7C",
  "key14": "4zJqbaFuHUCNjoHSDC1zXVQtUno9B2XnyZjNApgW9cHvTeKBMwsyTQF93p6rT4ob9Y97s8ydgeYouVtKrArJxxbo",
  "key15": "heooNpEjZMfryGCjG8bKaVmGZ9fD9jBd8huhad49CTQg4dauZTfsM1oGBAxhLdAcmeFa7GQvTXfZZLGbXTVHWLR",
  "key16": "31TejnhQr7BugjVUUUUGtKHs6SS8Es6ffXw4nNijkszYfb6dJPHst2nUpay1ACJVYeC6j629QmEu4AxFEofwg7Sz",
  "key17": "2cYHAknWsXdGKMxQjdAbN9x22PdPXQ3uFHykZyyAogRjvRiFUpSydGTpmPapizzYdUiDd2Knw2bboC57UKgnzcNq",
  "key18": "465Q6wE1ikjYHSrhyQT2tY4aQeYQWXNcNf1QerPN6j7B2YpPfwb5w9sqpHL1HAdymDenuaU3WWGYD22rfG6BnNya",
  "key19": "2hgDfihfmYAKW9cDBCgBgRVBBd3DBzBsb1ACyzTk5xYFJvZy5mQwqcVfY8YcBnhh7dindqwJshkuxYhGDZsPGba8",
  "key20": "4x3LWP69anVVuypARXRZNJAYLBRKgwxmz33yHgkQFPQVgtmoqLE4G1bRDF5pxRXHzFoQfGcKLNPFCDfhjU3kBYtn",
  "key21": "3n6VFWhrs7cEZxgDhYLszPnDHQzBnfeBdETvxquYp3DFwagQT5s1AfhQhswoqB5cSa72yBRo2UebtFEDRDrzF9TT",
  "key22": "5sgr8yQJTscECfjCvHjDwhjyCG5u27ksJut8dxdGiqqk2zhYeAkdEMXo1uSDRf3S1pFS7jFPa6YBDNyxy6RrDGFP",
  "key23": "4GZH6TEL5i8pfAgfXk3KCvn5VSgBoEbKAx1mxk7nczJs9iJt9zsfAj36g8DWEHWbNukGu5j8DBpYoYTSCoPnTkBJ",
  "key24": "V9Vq61Z6Dz5M1yFwjp4dLKwCJkN7jy5pwaedMQW2PSthZ631AT8LaadW1zAq7cxHPDFUPHJxEv1gMmrkjtVYoTH",
  "key25": "GHQUx6h36kZMP8K3np92aKq8o5N78s8wivFs9MiqcGhmbJLoyr2SBV9UkXQX2casCU4QZayRgiUp3m8fxjR8bQs",
  "key26": "3Af3ZN5WgzC7jsxidztcgGEZZmppa7osSkgVemX8WUPd7EMZHNo4x2SeveNymsqBQvXSBBixKhy6DmMSm5Ek2PzN",
  "key27": "5RD5ckfDvLFfcaNAn1rKbntzKpmQtALdy2fMBGLRZwPaKuQ7FJd9vjZ85ycydV6GK9e3RahYL6rH8LUWkGizcWZN",
  "key28": "2xau8NEmy9FQtwWWZavryBCWojv4nb5xvB3VjVaCArtTCfUUB1YVXWiXF4LUywAc1ftpLMxv1AwZK7sVHjyPj3LR",
  "key29": "47Zx1acjJbpoqTRV5qAcaab6J6ccbJJCiFRBb65j19urTSNy2MKZrJJQ1ahozp5YXtAA1dV9XmcfLDDNyR3rfFXC",
  "key30": "35NjapoeiTwev9urF7ETFuEbXXcc71gEsCTXrL9W4EKX6x6zfzQ6ZCpdyLGcn1yLNeS71xRxMPDnc4gSFazNrFCh",
  "key31": "22dWWS2HW9ws2Ts9NgX9kYt91f4edotUoJ7jPvpnH2Sf8oJdUWRMNEAWA7XjvZCndsgs7JP9km1QTUHD9YQ9zBqV"
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
