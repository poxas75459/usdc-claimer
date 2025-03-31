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
    "5ypVXkcpqVcaoSqJrAM7J1xdVXpJF6tBKc7gRhiMSK1eVhp7ZomcpmezBG5HBCzCtz8EHokzDeB1v9n7oUAXA2z8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vLpaT9TANKLTfWMQnQYkRiL458VPhJvHGqcsERZXNePAfZs7jx5NADPW9ug2xN8tLZQQVdx6wxQpvkE5EfYGjsM",
  "key1": "4SqwPgbmX4GkWCmBeSc5g49WFr2mgng9TPxTDvJbcXTxxTYCS9ew4GqmXrugzjYYbqsHRotKPSWMGt9iWVfWmuy6",
  "key2": "56YJAQK1peGta3m6TpotLF7y6xfYLcz1FsZLPNjCUhGUDChg6YZQ5XoWvhQTDdGLGVT2GzuuiX8gCg1J2ntiQ5EX",
  "key3": "3sCaqLBYrmyMms7yXvFRAL6X4HHTF5rEwowThLXVetQTopbTn859TaAAx1krMeptfeWwwMvJ3NuK2BWHozHyqa8s",
  "key4": "cNPntgynG63FLV4JXkmGFAZ9oRMLHiE1zpKZ5BwBqeGAqTXDPEg7X4TxTw47779wZfLmb95yX8bM5UEbjHnf1eC",
  "key5": "5NLjd1mCDivG4Eu49DP3Cbb2LucbmxWmfRUGuKkxrYVW4s6rs4V5KSq4ft315wpc21yMi8Kpfgh5ov4bxSGoKW1a",
  "key6": "57qr3CT2Cfq8DsU94WFYc99hEep33J2ydYr7GqAqTBLfwVVsz1c9dTUGtitwwctX2WmGthJVcnaVPdbbxXd4YFWS",
  "key7": "4mPYQv9FPVbctdmfujPLpfE3MRZgGGN8apaiV5fvzUvKrxxYzE7qYECJXimxECFCgGuK9KzAqWWR2ndzPdS7h2j6",
  "key8": "4Q1FSh2mvzZfhP9YjH87RsSeRfausxURo5TmGfo2uDc6ChjiELDg9V4KfxN5wAmnucgZhGP9RxQC8XaXBiKE13td",
  "key9": "3QyfkhwFRwcT6AajXD7DZoS9K8WU7yXh3b2oc4YyJsMWY5rpcFxJX9uDgJhHS3duWVGKX2dHmAwFxDoJQy5GnZbc",
  "key10": "3rMaterCNLzCZVeFDC2TFHLyQn7QULTfu7fNZabHLkMJEqbE7jbYANiwH8zUa7cSmqX8xqLpNQeykZmvPrhKbAio",
  "key11": "3k851DP87RFh2p5ozg4DMhc8wHQr2fZeqVg5mCGUAvShpzeRP6uj8k7WfnV3HcjqwqC9B32m9T9oH4Wy4FSrC5Qi",
  "key12": "4XCLjCuuR7ZXBjfoXiQhSxBQuoh3SFkxdF5vDbu3xQLdJhxkvKyeG5nbFqq5tpLdC43M69vZUbNZS3TKDcGaHUn9",
  "key13": "5zsJGyDxqRyRD2mK996xbVp3MoGY2Zr4nsged3KbkxtgRPavpB8hL33RyGyQFhEapc8m8HV3UAA2WMQUeU3DxfjN",
  "key14": "52GVMByVjBj5FmUzpx6BQuQuT6Y6TcGgvrTL565pY4SRyCrEzeq8hVQT3yJHn1JRuaCA1BFyJQHteEZhexWEoK1Z",
  "key15": "5BTS7XUNVsfTyorgTNtS4kG2QH6dcBQZmpHovUKnxHcUXe34zZCAAgesHiUqpYsjhGKFKTnMbwrApyrrL3NoQr9C",
  "key16": "RnoT24zRwNPWMK1v2HmCq9PjkNqQErCxsXHv2oXYupWLPkqnioSiQhpn7dStQL6mjy8WyLHaeyt5i3b7fHzZJBw",
  "key17": "4KtUNTvz6RXvZZmULz9X5EW9hnNifiaSNGme4bFN9CybkA7nEdHg2YnFTiPAZ6kD6smmiwFL961StzEAzVmuk7MZ",
  "key18": "4u4YRiKqRDQVSYQVNvWqtK5Q3kshnANxKswE7G17oYLCYV9udfxUdM4rUboqz3Zcy4wUjNnf9WYQoL3TxhWKQCKQ",
  "key19": "28Jk9PVPQy366dmB5rbPMVcJfBYoq7GnSKX1zMFHnYhPvkHra7YAeZSXyT6HEM47cnKpmnMPyQnnG35siPtqjXWG",
  "key20": "4TTXmyzWxrNmriUu5CfLZTud9rRFCGbEPF8HPPQb5BSxVfJp7K5ejJFvcPgga17YcdQShAutLmK5p1VjM92euB58",
  "key21": "4EvSHeTrMv3Nwc1s2LvXH4koL3EYd67hb9Ed4EgDCxySaWiFqxjamLE9fRa2YYqyFuNoWKVCEhUbrP8crdFn9z9T",
  "key22": "3xu8LELJanEdjmEWqGQUVGYpRByMjmE38MCFfA9Q5g1DdwuaUjMzjz1ToC6G164xrWdpdckwTcgGfsf8BrSbvoyN",
  "key23": "4PBxrHRFjYeWAhwwqzV7AtsrWfMUWyLpeZkDQ33MR4prkjCkpneuFqcZS5cXV7JbFKZDRwtAfvhND9Vjxr4an1Wb",
  "key24": "4VFbETk4zAMuN2hyanJL6Y6sMuhdSdhv4vnh7kwAd9fB2RAv1oeikm1ncSBhfUnzzbsRLNkUnMYsBKAsy6ewWyEh",
  "key25": "3qNwNGEP4w7vknfNzS4SJzeqn1QBQn6qejP2K1Fxm51Ky4t7mucDQ7oq9v2QR4fxK36a95R8oKJQNqz8DLeT9NWy",
  "key26": "3ia4HXGBsUct8tQRdzm66v2Znmr95C3RYegKRbzeHauJ915SHnCHuTbendfRN8pGvPy7Bee6rSRPVGJTBjKpD4ot",
  "key27": "5d12ghNVEUNv7yyi8ETscwQrjSkVChwj2PttUN4WKqpqKrnRFfnkm37Do97m9evSv4fgjLHZh9kHEMBuhfq6Eu62",
  "key28": "5PVsk4wNBa7XUbYB5mUATYQKrBjiddGMYRz7tUk1bV9HS4KhoFTEhbT1q65P8WmEAVzdSGXHheKKWYmeJzLMqF5L",
  "key29": "5LEtbvUVHy7RaL7NKNRjioWEaFEMazsWnbyskikbE4amY6JzvHkrXzz92n8k5EyxFmwkgbWE44CbFRfEmcCmMXkw",
  "key30": "bdG5tcEfXQpNtykMHWTWTx5cXEJjYveLKuyrsYNMxmpA1GSfMhMP4sTzLZHJL9dDGe8vDeD6Q73KiZMkoJj2jLQ",
  "key31": "3cTRV9EzpuN1AXTcBzoXyAxAwJ61hrsmCSXGs23S9rJXnryY6d3sFNNoL5yVkwt9LSwZ1Xo9TrGMCizc5FF6t7aQ",
  "key32": "aQTCJ933aUKfpMy6h2kKWkJdB25VdE45d6qjTWuF7K3GcTJXhaAs1HQHfZJYNDuv4kuKY9QLNcSqum19sfcXrFu",
  "key33": "2y7bmwpM5us5C5Q4go5YEGG43L89rqxT8ExCcEnz7UGCcGGKWhf1dMPPGi4KXTEaUkGBMPfZvUrsjQqL8LurJuT",
  "key34": "65zVqrFsE6Smox5a8qAZ8f84j7fzSkwsPJaVE4EUVhn3aTio9CWHrUgHva4ygtFrJrzx69TE3x7H9KrzvpqWd6Lh",
  "key35": "4dAkRyCpN4UHPhCuCfWoRjJkzFuD4r2aT2gpY296RvHyJReBUHrAPh2DfBR98N3PoutMjnUrcPRjeRPEeroxgZs1",
  "key36": "5WDgNZu8oYt1mkKqAkvPJbvv9fY24pUaGiMjn3ETzpSKyGhmXV1xUUtGYZVmatDKvBTQdgMPCryJWDZZ9raYsZYh",
  "key37": "3EodPhuk4nRyGsgAFArktMi3uM73L48Ny1M4hzV37bGM5UcSebHGY1JhNVSMfUGNPPaVo39H7m1aHUhPiSSzEh6p",
  "key38": "3RXkuvUzNcQiVBjxgbqYhwTjvFgAWQBw6YHiUNqwn9LczUAPjviZu3zZAzc1qAm9VxrQmLS55EWRFWWrxyLx35F5",
  "key39": "pywUU2gzFiYMR2AkDeF8G1H63h9HFXPcapJ3aoq9M28qASfqYYWfYRmNum5hYbww2rbRfH5AjVCPQc4bzR7bG7x",
  "key40": "5iCt564nSEQDKogPfNyrdbqR9dKAv31yctnzaCC3LZZvUda6bWrYxNzRenHGTsnkC4iV2u3R2XNm1ap9VSwrHFLD"
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
