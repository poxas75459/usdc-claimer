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
    "277cSycYUjjUX2Wxdrrit9ybjpg43rpJCEVYzHXamWdVD918ZTKosXn9WqxmukBP73Di2dUzuUTSWssgNophU5d3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FiKBdsbVM7wwP1QDo6qP5jwUFSTQN4opX1WKCk2sk4NhME7wZG4nndkvkSyQF8EERFgsFD6Fgru9Gtkp9BcuJzu",
  "key1": "4WGCbo5n3Nr1jwYd35LyTQb1TuBW8M9ny3WhYUTyL2SUbjuPyBrkrDeE2oQ6eFMzB9kyUG5vRnXG2hh3yssCXkdw",
  "key2": "5jep71JjHBrHhcHnJ4be5gZnbwcvT33AfiBhCqUEFnr9FgQmCRVrJMmnzFsQioQVAeZpgeE9StFKT4R37WyVMNLC",
  "key3": "3dZLjMPJH3UMqVcCTFSRcU8pdLfTe5fm2JQ1ZBzQNURXY377E8PqjLbEmqLKzwqbsksHa1V6WRTXhMb77yijzw31",
  "key4": "5cCidYGubLy5fxfAwtDanJvaEs4MG5pmhByibe63qVtmrVbe7yGgMe6NqBmxV9AoHrDtPfFmJhYyySW7hXqo5fwk",
  "key5": "2ZZHbje1m4qoeb8cS8dj7RhNTsJ4k3DoBnQDfj4Dn9bVK4pBh7Ruv29ZdK91vnGU3E3co4vAqDegGTaJukPTwNzM",
  "key6": "2v1bHgD7U9QoEHGsW39bkxS8f1cwikRjWCTeqyQT9UqHSgGAmuyK4nsA5LjFXXbp8n9eEvW8DzBEvqzedhRtE72o",
  "key7": "3833oyLXqNqjZaP9r22RLm9T2RpVBTZLiNfVj4Uc89BpMtCyVxT4StLGZeSmmSr5n926Neg11gfPdLjtv1vnRwdu",
  "key8": "5Yngjrkr4V2o1MdcVRxGb5RFf86JW1ADiS7Saz4KT1ZwBv39AjdFcoiZYxap5C1huBj64bCeK2iCYH8V4DXWUpbA",
  "key9": "2EaaqtjPYdVyP2eJSpYn3D32CWsecaCkd4NJhRmjgsSPbSX3NXqtDCaEmicJMKMkwiQwTXD2ducx6Q38mwe76T3r",
  "key10": "2ZHqrLwwfaW6P8zz6ussXEhFRCFTNxkHbfH7uhvn9o11tGaJM6zJ45Lua8ZsxQD3UTLHDagW5ea9G7tpkFcYkHpt",
  "key11": "46iHq2Vb4SvEWRd2eGcKmj5MtUPiVpnj28cX7LxDmZaavjPQF9XSq6jhvgBwiuPLKkv7XKekPe3C5FBm5wEP44PZ",
  "key12": "GiqhsVQswcjGLRhQcDyHiBvtSfTdFqB2NsUqBcyDaPBopBjQgvhYPfJrUdFpebL7X3esj4ELA8dST84cUeQ1SCV",
  "key13": "j2NBa99Cde9xspbzpx8DkrXStEWJFBfiNEdGVCrnfQa1fTpdzUe4RWxZ7THKww6WBLJBPvshknvQ8Mz3eE2gisf",
  "key14": "35xsf4XeXqCnsdc3XEYDhrcoEba74CFbf4md1GuZWrvQ63AGSPR4SyZRzaBJM6z8XF9R5GXHbt87rv6xLmRp2wca",
  "key15": "4v8h2moW3iXyFJTdsLsLy9b6HstVfpPc8SkqswfzFuM5V8oFBQZYen7E2S8idtycwvXZs7N2xaRGTn1xzFzdganT",
  "key16": "5GHYB3h75AKE3n3cQWBuu6MdjF7ifiRfzw2pSVKgFpjYGrkEUZ7UUspws7Aj1swKVnuL5kwBS2sLSptyN19VniUy",
  "key17": "61T7JLEWoHVeLuT8nXtt5MbLHJHAkkqbQwQsGDHiAgKnTLPm9C4Bv7MjPYF2r1v2WURB9CWCbPFHFD16am9n4qPF",
  "key18": "2tc4Mv8LCrkkNDaZnFUoqJ2HaAtXBB2cYGcGV5YDDs9HVJg4fp2j4jybCcMYwkGp5fygdMvZfwisEFDedjN6QSQ3",
  "key19": "5Ud4h8zqiP59XNKBzgzoTruPq1aZKunq7mXGbmrVTsai15XENyVzjYEvivJsdPhGn8CdzFttzY4HYxFHF3XvMuY2",
  "key20": "4NUNuXxyLNy9tioKFzqNFWZMuJxVbrRCiUs7t3CxiFFu1DmX7RPKCjCaNZwty4SdFKRcwev8Lgw4sukL3qjcB3n7",
  "key21": "5ZyGB3H6joB7AjWTibiH52V5fTWf319Dt7ff7omXLLz9HDYXLNfESwbMhR1oJkfpZSJTgnCrQDACgFjSCiHpnfjQ",
  "key22": "6Ym97RKsAiJzNtNsfaefXasuFHpccCzrWty2oL19k1hQRFXcL1seRFeAVkZaq8nLb6eZHe39YbZPKsBxscFZTif",
  "key23": "2E5mj6SSxr6SkHEgt2TaMFQJsRT3bsXSneEyCMVj8oXfMhUoT9xJxmmDjtBxM2ofjh87KjYdUNPMhUp2Mj7jnLe8",
  "key24": "hzdAdkcGTyeDzsrTqtbL6oPN6KtynfhdGX7mAjtjTHGfKMKMPQt8fqKMoifNRMtywPCiddXiZxbnMDT5rU6kcwP",
  "key25": "2gKMGtBNXChcEHXoGQGbuNwY1HpfoACGLag3eQWixgjiZCNG1fxNZ5B7jWwB6Jrt8A53KinAA3ZuG1LtmxA6ZHvL",
  "key26": "2B3dtyK6PKKZjiLNwFxRVxpwSZbmok77qZ9YNRtw3mB4Y7vEeb9vyY5grcjSU5EETXocXrnZXYvYJT876Y6NxHKv",
  "key27": "5cdJELTBKo6cAzXvBjuerhRNAxcvXh5fT1SUsRSZuweZxEMTNZFQ65dyuma8fiDsSm32buNuyvdrkwg7aqv4CzLN",
  "key28": "3gXSzyyydfWdjcaLA7pTxqwSuBappCEj8vx8j83XGWUVUQWFfFGEgkiK1v3fskAc4uVcoyarhN6aEmjCd6co5AcG",
  "key29": "2NY2yTshnPDNBzmo8xuNTCJwZFFRMNdLXLtqwmKn1QxQfRqxoA7BxeV1P3pG8fiCd2a1YXuEAfvLpSom9nTQpULq",
  "key30": "31SWEr3cP1hQtvmuzJLPe2MQp7ZfVFvQvHAJGkB9nJtykPn2PiAya5KU1XCooGpVv3Eb8WaP7uf88D3obEWivJ7b",
  "key31": "7goVkym5okWwwM71gFq3SzHxp8jFuZTq1kJ9nxe6GFnsQHdxD1wigTHEFXZVasCUZS61Dnj1nnuadp9zKn5zZbv",
  "key32": "55VkfvnokdPWngzvFQV76eoD2r9r9kFhxasrATFNvKdf9X4tKbXckKvnX9tA6jQTDJx1PbWwdist5e4WkS87D5xA",
  "key33": "WnEAdznHMx4Sn9NGyka42GinQRKj23iAiyGzGdkmugdDjiLbs2cL7WmXWZ9JJ2KnSnzMzEGMP5DenqNEdHzBaZv",
  "key34": "2r4iYEhGZu2RGSCrYmeD1e8g3adQWnkwZGEuUJixZjhM6WbKrNKaVZUamDnDbv2qswSaVdsgRsE6gUPVCgaEn3yC",
  "key35": "2XAN9emnXbEKxP4GWfgBdB7XhttCFr1axj3Lfm1uy1iuxUrwAcQKYkqRbeE75m4TyYAS4SUB5v3W9fozpjVooiYE",
  "key36": "5keDd2AippUDaaNrCUaxqqN6pcgTDeeF8FBzKCP66EGRtMXVjmnqe1L237yVpB7HcDH4RsH6eCTRsUqYKwpZ9RJq"
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
