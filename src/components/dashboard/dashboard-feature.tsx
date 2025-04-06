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
    "2uLqSSGEBsJqWMAbSzwhGkzcKEYXa2qgQ9KLSh562iGn8BfZUvnPQggbkYLgUb5r4GRR3PKD6oTgkmEBqdQkRF7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23ijecd9JTsujikA4wUAiv7ZoRunXahC6CJGKEtVLtbJKcmQmJLBypAtPvyUnrMYA2PK9kryFij2QmcG7T2zY541",
  "key1": "5pRxdmJPT6xWr2spHUL64bYK14YJcsBQKcLN1qE72vaMEGr7ce789NgJdnYQtCbykw3v1SUp31tVgEgF7MeqVBEQ",
  "key2": "27PjD4cudyeN1Tmx4KpM8m7HYrP6PA5paH43bdyzTfF7asjHq4EiK29FBEkT7bMpioykDom8KnGb6YgdqXwyyUVp",
  "key3": "3JpRch8yzSz6Myop4om1Xd7kL62o7J2ssgsXxpC565tyirb8VyLQDRuTXHzYZi4Z5LekFGTCqGDcnuURyLWHxSqa",
  "key4": "4ikruCeRfftychrRJgVDKHAAoXKnuCGmwDtjPPnfe9r7yX8jGbiHepQhRhNtRh61yYbBZXrvF5eRmdcx81sv1Mgb",
  "key5": "22uVHpHjAX2PJ6G9BKCXqcGb4rreh4b17MaSuezpckDFWpdY9GeyHuN7LFZRJETFwX6FX2aV9MyLayQ8bwKdfUca",
  "key6": "32ZxVeZve2ZVN4hUiazKeuNhR13RPC3MKWN437NL8NL7jsjRweRXAnrG8niq7T5s3TfnMVnx999sCC5SqnXBrRnG",
  "key7": "RoGK5XpbB1mSSjZ3CrGC1jBkdobDTAQFJiUcqPCHAwbt31LLZAok3oRrgqVya32rkreNsgPQGSGixsuuWYR4z6t",
  "key8": "mpBkpunU9s7gVPM544whSxMjakZv3PhkL8HxgV4Bh9hYpM2gGcHg2Q2F4VZeoi7cKCd9o7JK8xyuHjahFUDfzSM",
  "key9": "3mResre1nyYcvaeqS643wuRVYNRatzchG5Rshdv4M4fqQ8Ude4jZe4NRkKKjiQmBFHwF3Bd9szhsTBLnHStUKfXz",
  "key10": "35qdPfD4HWLwSkyBqqcj9uV1xoHTivhpN2v5NDCrJEPgbeezTwLJTFuwxuf7SRZBVW3NuC8W9rmVu7pGUvnEwsCN",
  "key11": "48tNv6g7Gc3f4ni4CtNmqi9jY8AD4rH8b1PF1Nr1CNYt6g6sanj9ennmPA4teRg27qRawhJn9Qj3YQYd1dvJxmVQ",
  "key12": "427WeieUSnPzmapQVfgAg9uUNTxVeVc9njVMVMcgM4E41gioUurRBsQdwL2XQzSPGnjcGy4GB57zSVJTrzuE5o23",
  "key13": "4Z5x4tDUdqpZEDoVKMuDqcMfMctW3HypwMDA8FA6ojNfD6tgcQM1zJpc6RLqcdoHRarB5zMboWaRpbArPia46T65",
  "key14": "2NcGo5UotGQ5BqKc8QmqM2jmqWNBA3WA6rJiFeVHUDsisfEF4HRFvdrSTirPe1gwi3VzFNvbD6CKgqXY6xnVZuzD",
  "key15": "2RPhvr2bdZ2VRdnvreH6wTuiRXcq4gDis5gusT7yD64FLFEyF1PfCDwTDvXEvZRmHPTyC9nRUrQEz8xVLdeUSPHx",
  "key16": "3NCaQrpDyUfRsbPN43uLPSsU8T7ApRMALP3emqWAr6kibYb5dbeSV9uN9YkVT5hYbABg7He5iEModcTeVipkrTsD",
  "key17": "5CmvkGVoWNZvqm1RY9u1g4TVuekrajrsKUcPAZbRPYGagtEMra2QVxmGRB8R3F2q1najTrzAPWyyBr1RteMrYp5h",
  "key18": "3JUvdfEjtAHvAHVv4AVYRbF7oCVWCzn8zEeWPWTa9r8t6GhwKG3fYFdrCsXiHdJods7GeUZ4X7JUPe6V84fMxSx7",
  "key19": "2KNkqzf9xYmgKi6FegmV9zhJiLVUoBoENc1Qj4CD3Uf3SFDe3Vg6DMphGrEer8fpPs6yATWABMhu2Mq6MtEyMBPi",
  "key20": "36uqGQZC3CY4bELjEEZync1rM3dw1k753hC3szP3bsQYEL3fw5JSSgs1qAVyinD3Ta5YdvWtSpf2fkN9x1aQDM4D",
  "key21": "2dqErdDMkDCGWGv2TdVhw9U8zYAC2DVFnTjw8hh48Wdx1suUp4UuJhTJwoAyj4iRhBzM1Fbp7S2ziDkfrzoxytdr",
  "key22": "5vgQm6BnfpLAwnzy4g3ypR7BeqGG37jD8qs483CzDHwFUM927bBtqkhGomPdneABoVZkBA1t4476tgDkJYFV51Pc",
  "key23": "aFqQCLFUXzkMYdgUUwU1T4DDRAXhchGm7vHup1i9DmHnGWBPTXXiDiWJHsPstS72vqAifwFgJHi4tARcQWGF815",
  "key24": "2GDoKPt2som1e6VGKexxu19D2W3v7NhAKRVwyqkTixBozZuAnZtw5KJK7bfJ1QMBNauVVe58AZW1EULh41pN1dgP",
  "key25": "nFiaa63hY6baCSFX5ZRqBgFq5JnnLENx358ggmJyY2dLFuMDc48raJ3Q24ZG6NNPF1j6gpWR9P4HUh1xJ6FsyG1",
  "key26": "51X9Vp69AZvU97FPwFm9VuC9HrbaMMoux6fUWP76R2MXaNnEfvEmQBTQoJHfQNFFsHW9asnkePVCJa8VQgGG7H9h",
  "key27": "5aSBKPNZ45TKeVGkQEVMUa6RFrt6iZjAUFCbCZZc8KAi1nVCw3MQEdF2YKrSPD6RkgRX1Pv7Joy4hzoNPW4RTteJ",
  "key28": "qMtTr6ddQsZTWmZPnzQnS6GnRr4HkUBSHFnvchRTWCDda6r39tc1LZy5PNQvkQcwNXkUAqEB53B2RnrLDgLppUo",
  "key29": "3qyjv2CUBdcxRoNqcHeziqqNU3dSmJVX8JTqVHMDnQdVXp7gyT7JiDKLoAAwCbLEsn3hVkckVKBKWtWUNuBc7cG8",
  "key30": "2x8ZdcdcqpXRhrmmDj3htNGj27kGp39UtJ9Xh9Y5KQ18hULpXX5N5FjHYVuD8dhN3NKBYYYK1BD3qNcbeQmN6PwT",
  "key31": "5Y22sx1jn4XfdaJfZTbvQ1z8ctHpUEGdyp2dtKE4v8JMxxQNtudqXgGiEWPeMbdiGuoeVms2HtWtAwSF4mKLf6B9",
  "key32": "2fnuKaBtSL6AjWu6mYx8rvLxxRKGvnK9LxmmaZJywfjbMpspHKegoSksBwvRfDnjDj8ZPHWaKfpFYks8oZgULmR6",
  "key33": "3P8xnN5XmPhyfDj2pzb2uXdbNnXVFB5FFh1grW6w8shLa4vD9rrjLsXyKaZpFHbvp5FDybfzwxVtz35v1SqDpU5n"
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
