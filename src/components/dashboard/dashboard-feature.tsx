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
    "5NWe3TfV4pBVSmLg8q1aB5oKevb7Cq5TbYfjhGoDbRaGBxezcEaxdGuatfxrqTSDkpFqxVo84gKMJcWz4m9UqCsh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MAFVsbqP9BAr8pqMiCHNysm3XD8c6hi5QgBxPLuWDt32uzvBSCJbjLHaMpuEP14W1YkDayXYZ1iogUfR59x9v1v",
  "key1": "2emQjEZqRSVMimmsG6FkakWMGf96fRyd11hDCMHfnJr7Sf72ZRR3TGWf8wY48YKEXk7Fbjv3e3CpgukinA79B3eq",
  "key2": "25rX5YFkze9nK5nzyJbtgbsTM7WK3heRW4u5EtAzeJLvtv9zYKQEy5s7wHMHcK3ohWabEbeFGCvC9A3Zah3m4nRv",
  "key3": "4XKXzRSjw2ZdkPZeMyVHLUVbHrnmZBvaGNntW4L1GZpxYW3Yfx3CmKqpAEn3qVWg69kvaz2T1QFKzMpPZaXoguUC",
  "key4": "9CtkY8AxwsANVtuiZDRTWLQe3kAowGXc9UjAGLc1BcK1ttvjjMcNuyRyquFn7km6hwwq128oSvouzfRQtHHkMxY",
  "key5": "4vbwqEytXrotQgmy3ABAfAEbxnP2haK2eRpQcikq68bEmUeyqckj4SS3QJqM8dL13cagnwJa9k8ZRBhRm9xfU4ND",
  "key6": "ugr2gFzY6FLsGo711iFRniuc22MENHFVwVRNER8GGkLLAbvqZcWt3b9mbnz8BBjpfxZzCrMHR6JVPGwYXqeQvDa",
  "key7": "T5fhT48qU4rwXMsQAeQvgy2RDNMezaTt5H3kmGs91BjHPXq8ZTT9NNcUJ9kcFo2xJomBBRAieFaQTBke7vMfaBo",
  "key8": "5355E44S3gARkoCCQhqed7aFTJFSgUfvs7rZjnkujaDZjAP9uuG7K1xahfUNJi3g2zbq7yP6WR2iDAWcUmtJsNpP",
  "key9": "8Gmc3gv4tNASt1JTvp7KVdZ6Lh8hsGHf7k4g2JGrkFezg3jnXtf1V86BxHbwQMhkYp9LuzyDzsB6eBF9faBAZPz",
  "key10": "EQ73XHpDxM6VdrfwM8uZUMLq9efEep3mb5RHFuL1JkkHYuEoWF2sSFWuLgX4BZFqdRcjQunGj4io7zWavnm6NSH",
  "key11": "3cjD3ULx7aAcCwaCuJ1dFZMTu2pTVvXaKJTarntgYCrrU1c1F5hjZPKFUF2R9im8sB2CmUjXK8qWhTRQSwnXFm54",
  "key12": "3N56soaRuniUuCrtu3bZUkNNtdZBDnrKj7em4kyTEaYwS4Ynur3fcvSf17nkwP9gcSj533P4wDgG8mmAJjkN7iq8",
  "key13": "S7jpVVkcRn74h5yvHZHBtoxsX2cYWGTFMJHoJzs58Ld4AvzgQqUieqiFm82R61K7aZHcGCS6WLBWCc1DU7gpitz",
  "key14": "4f75rwVxRWwtSbXCuAdA3Coas9u4FtgVzqNLaxVkjCMZkYQV9snQSykxyV2axYDfAhJrDUyY1qn5Am55tqUaMMLg",
  "key15": "5ig9oKmxEvoK6RiAqzMDzMXsvb53Ew7LNA3qozEYLqjjk6qBZcFhHVETmKVpnva1nx5yBZizYTFfCpCmHgCbq8eg",
  "key16": "2hFjUTJ9SptY8jYr2d3pCWbXWcpkUHZ9e47a2FbVaZ3DkqRQuZ2SzEx115vYn6sAhzodrhBCKUvGzonNB457aWVE",
  "key17": "2nqnSgF8b9cEpn9t7jcX3LVRpBLGmf76QE5wg5B2X3RiJXBfMqGGHRdx1FHfGBPyq1VMuV11cT6eiuCrvDSLKNtz",
  "key18": "2hw672qWLNfPy89GSiVZL6cKGcxQFAff8JSVsGFHmv9KFyhHrzdrWoDoV1666LbEfchiTbVmikVqcBTgiHYqUps1",
  "key19": "3FP4oXePMtfMktEqPZLU9ZSKMB3xfxZtPsbxcindnBDgGdmqBQcerR7rVe8RU7Myhebuf4EmFf2rahF2VH3qyFEt",
  "key20": "34kpi5ZLv2Utd1L99MuzpstNuJPvLZ7NaYAUkozAZNJWig77e3vwtSSjNTBrPmX9faqr8jNE7x48TivMBQ1DAXHy",
  "key21": "23HopsgUQMUzN8dSGi7gm1FUeFbH6nWTtjw7iJkNmU8i2aTwsvePEWhmEcwqhxXjb2ZWoL5neRD2dXPd8eseSqug",
  "key22": "4notaKH7AcLQfwgCjmad3yk1xffkYZMc2Z8dSUhZg1YJtDyCQ3siqdnkAM6QdAyCUd9QJhx7UX1U6SbVKcxfFzE2",
  "key23": "4G5GTjNDmptccKsnNqGq2h8D6b89QhdCD4HBX5bwoRZaLAXoAjozCfdexRpfWwPqEyoWLrNHttPUj6W5KRvoXwrt",
  "key24": "33nnccyyd7sKafeLEoTtmgcWJSoC3AJqHdgEGSobJxZExiUa8bawai9GqBhtQq58LNdRb2TX74vBkqgkHW5fFJS9",
  "key25": "4G5x5EujWX7JKmHhv8ES8T17RGJraGodT2CHmbLGtdJMazrHj6FAgb7QhSESa2h3j3wWsQ1o66avgp5LWWoSH1vz",
  "key26": "2eTZEgiJHc8ktipzVYE5TAoTk83mz4KjdGtC6PcxpDkjYKtLYMbVHHJbWqEosHjhaArLqF9wVttSgFatMVsXzWsC",
  "key27": "3MYEyfEaXe22fvjjcoCbL4TommAYpwn8cpLKtovTmXwdf9cKsCxKunyAsfFRhHQgpyX6nK6fMkmvvjvd3FSqaAAH"
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
