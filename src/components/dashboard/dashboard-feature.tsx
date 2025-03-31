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
    "5JkH18EaupChjE7eoV2a8CQwLTWqzPKJawRJPmGvkSXxmkDDZFaDeiqPiY2F1zcopsbV2mPyLo155veMaPHJ83NQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tSxcC91GrTEkAPHWhTiWLsoUmgqzziday5GxditCqwivPqhTdsWoFJmSj9kswz5LtW811ehu1MFmLSufttn6FUP",
  "key1": "5wSVpgFmSYTuLKAcbBt7dRQ27UTvnYQwNnKeiQAA4d886Nqsqf5fKXtUCgpRHpuMdw7GeHKPbgB25E3xe55PNbfg",
  "key2": "3Fu3jq37diJRVsXk1KLesUJxWA48tDmac3WVWc8GgBtjpSkPNXYVuGQ4WXG2vHPN1Np9R5R7Br7YCx5EYQnfHMpq",
  "key3": "3TrZ8WyqvFMPJjt6s2p5vPDponKF6W6uDC8vZ7zm5SBCDCtfHnLVGRzCrrTHzympSvcvHJ61G5jHMg4xxGERgXgr",
  "key4": "59UpA22aBYYfzYjAPGp87CRQ1E6otZP1MDAeKmTD4fFG8DiBvrbLpPLdk3T2fGTg4D5Hw19aUaFKT9A6nVxvoUpD",
  "key5": "3bzDWABf9oamE7VMAD8ExvVPjkY46J6e8seKTtJJTfpbqXamKdHVpnUkFReuYfTPcbwyApYNprzX1R3RPFGqf9FG",
  "key6": "5iFPo7LMfBkwxP2KqokCU6zU3AAuZ9DCA7NRjvvqSuWNafGTHFmNqVHbJUVHXQ3UxfdCYZNRSqPBMpdBnvWY9Pmt",
  "key7": "49TMsJtBaRQ1q1you2Nj6xo3kr2k15KV579o2w5NggJ3zLbzSZysFWVSnXqv5rBkPFXbdMU2dndBHPQLApL9M9Q1",
  "key8": "4kL4hKGUeqZvJoFTabV8JHyrTBckvpue5yPJp4fs6FGHgLCpm4vq3ZTBbEVYQ5H81qcdeR7byGAvNLafpaFT2DMs",
  "key9": "uQEc6YWwzCMDkJUM2gbTb7B6tRzfE3F7kmdmMfhgdhcqHsCMXNyJL47u2HvSNzsBTbqENz9fQFjg81SRpM7bX5M",
  "key10": "5JrBrb986fWdGLksKj6hRd1V7R3AZiVJfCRw3yzRi8ySxqFUvi8ZsYW2iwVHtfvcpUUq53czi4SQAAj3duR52RtN",
  "key11": "5jCsayDKm3E5GexqXKr5DDok1KvgFS6tsTvMEgKtYyR3R87iNQPt1toFM1wxjz3NDHGDSmS4bShbxdy8i55mr2G4",
  "key12": "42GpajKQD3WHNMoYiweMdtywjfXTkYBkJ8JvSqofJbnu8uZPJ7vrP31vgWmJhvS5XoDNgw9AdVjteAKWeUiwtNYu",
  "key13": "hgf9GmWrQuSbvB3kU99xEjjZS2VGKFGBq5NNRhJQih8XBFrW3sGqXTC6QfYsY3BqELrWgCN5Loy6orL3GBYhtRd",
  "key14": "5Ewa9uCTmJRdhUvwH24ugCnNMHBfF6eSGPG97ogMCaEdjqKEDHxch5j7YBqqMVe18yJ6QUvmxKKTxv7QakZebGry",
  "key15": "4SzWjZinh94d8mfsVNC9bCjgtuxbG1o4e7p81CtkmvUmx8oVnyRtsaw1z42ooA8DmDkUpKTLm4AY2Lf2hYKUuF81",
  "key16": "5AJwHxcrKuia4N5KXGDab7shGwrnZa2GzYoyBo2V2wpT6EGXxgmKHncMAu54b7DJ3fq5Za6VVEweDd2PccEKqJwC",
  "key17": "2jdkCpUC1nrr5V3w3EufqwGcKdg2rPSk9wtuWeDs6QTjktkRh3s5u8EzW4GGm1JnYvnmk1xUDWj7C1DUCnoP2ovH",
  "key18": "5iMkCSusYJbKUbVV4SQcv3pDaw2W84k5wxLRELGKbMHE4DUav6AEWPnKhNqnDewwZ1CoVGt4e58AZ5hzMe8bKacP",
  "key19": "2DY2FP2AdL6Ni1AKetpBCWF49jCcLDF26tw9yHtZmG8tzpiFGPqBH9ACh6nVDok1X8J3XeXV7KHJTaHTx4SENBhC",
  "key20": "23KWnwKEcPKMcYjUTU3MPeTMt7J1XRN5ePySQiDnDWxqzRmgwE39mYd4JKdtVTs9qqZQJGSnQW2rcArdBFv6QCz9",
  "key21": "5VdKofcppURspcvBFKJ8zB6sL4ZjnjHymk1fyNbRRpmghQuEHGLJqSdfWrWWZ4AzkMfamS1QPq8hAwn6Rz272nrZ",
  "key22": "KaBoZueszqyv5qvzghwbd5qhV5bEUat3QNC1T3ARfup9mxwqTeyipFQyMvCMt6TfTgGn8GNZ48YnCJGQ4PsXVfP",
  "key23": "U1VVBdWTzPNBAZvuWf3mQ5JaD6B93eS9eMuSrYYL2hwP78MDhWUuDuGCLzbvk7tQ2pbV9ejDYwRTRc3sxjSz8vi",
  "key24": "2T3KDNh88AVUidmKkZJn46ufAsvM5H5hCcQ1HuwmyWQpSk4BfejeJ5Edsk3JUSC2iBvyvm3cBQTdtRkDd1CLNNUR",
  "key25": "o1xJNq1j4uR9qakwzcV5TvihWzXz16twmMgqagAP1yBNfSXP4xek7QdKjqe12c7Kqz9Fp9PD2StosaiDWqX3wFz",
  "key26": "5tozi92xo9b6eYmjBJeryhxPESQ9Rn9WiHyYBy81jQKBwVZHghde593U2sG5dANorR4w8HLsTnurPaYUfzxymSvW",
  "key27": "3f5D3qJksF95CHXk9AVJJ31nuDBBhr22BQM7biqQQwbQSXW7HnzZM2xGmYwfgMd31WiXcyh6GxcXFeLpt89RDGPz",
  "key28": "o78EtJkm3yEgi8psE65CauuQEZ8F6SyeF5xi2Mg2NXmCej96v1bkbiumFaLhsMXtM7gQ5iV1wD6xWZCmDbCY8eT",
  "key29": "21TXRfKFo1u1jGEGgvcM7WypZVfN7q8iXFi5U3Vrn4169uHcRCFRhrKqYxgPoUkNCs87xJSVeCKyyeisxTLL2U49",
  "key30": "3zowYYqG7DGAZSKaEYP3hb5zSRDh2rFPkTAfgKAJ759nAthwfiZmL4i69P9exHa5Jw1HnmDESUbdGHTLFdiG246z",
  "key31": "bXiwevMySw6K3JnFWBTWSBvNF2NXxw8MoVMXHNT4Nv8oBMbUSEMcAvUCE162XhjC2EieFQ46cg1MCJ1cxrMnPew",
  "key32": "4t9JETpMMhN3dLkAuxLD6CD3Za5FsuZkdjzVfuMfLcunJm7TBiR7QuNE1r91N5MqNKwmvJsE2sseTSiRWrHcUKpR",
  "key33": "4Uxz1zzoLBMQKTAvZjvf6zF9uDWzCRhBtNXZcVyisKMhfSUvHjwoEo79iwFk9mE7UP6xtKSr25LaNpQHTdVRFfsT"
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
