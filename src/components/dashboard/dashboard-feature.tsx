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
    "3ZZCQCVKD7SpdB5m5cjiHLrzdk8b9zbrPWojQofLtQkYM3tQ7tLxpPH9wSMuiMR7yB2UuU7YZ7R9xE6rthSXhn1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gWz3JE64NZQ7YKNkT6ovKv7Cxz6zUEmxxpHdb4N7CQhaewveVzdiCfxLiWnSmZfGu5S12xvJy8fNxo326fqKCgP",
  "key1": "5U1hGJwuMDZnD5f24YZF94TSWNBWCRFfxFatQa1KEmNd7THDvNUp5TxUydBgskNQa5c5EhTBZNVG8aaAJALTEkWk",
  "key2": "7w7N2ewMN2S2JgzazmEemqd3Yo43MBpQQT5rhhGqPu8wnWQQRDaxJun4nSeucSU1qrtnuPVtiXQJUtXnRHVKz2M",
  "key3": "5mVE67vhrfnTweVyELcQHT7m1jxPQP6iNw5t1xbMfxhgTCbdkHybx41QT7DDfDwc6TZvKn9Eh78CT3nWRsnD7KHB",
  "key4": "45fmukz9hKax2vFgYdGdcH5aBxkRyEFocZ7mvA3J9nwr3YSebDv48aywyTnqeUK1BL45hsRJ1LZttfjKYsF3VFp6",
  "key5": "XLnWzwtUUeWD5mQ9bxevR8Src4uqb8cLksmmgGyBaLaPZeEkSqDzooh1iWtAtUXNmTjUrbgjVE4PC99uEcyghd1",
  "key6": "66FHiGaryu44Yy1SuBKJn25z9U29yPsBwX9ZBnG4vpkjKXhkWRa7n5bPNj1m561drHz7i4YuzBoDgFdDNHnexE6o",
  "key7": "2yEhyRcP26sGcq3KD2a75iz5iffFdZbdvrZn8CU25aDpsymzZrwDqL6esocvacJ53pXL2WQ6hjXUTjrmRMv6iFPR",
  "key8": "3MDp3x4qGpATkjP9Lgbsyeou1ove9qvboYs4FCZGQayCQ99XA7L4aoNeaVjtU1YQ9XZPhmwUiuM8ujvuwfJ5vQRj",
  "key9": "BLkDR8ggK46ct2hTe3UVTfAh1NLBmDrZ4k4y6m5uBg5JfRi4Mz4zcvyL35zfZqBKtvNYAhsirGWRLKtqHuDmP4C",
  "key10": "2NkprUkHAseJaSUS5pRF5Dwsmyx4uLkWn1N4gfs7hbesSPRtrL8sqfHTf9bv4oCnSdQuQZBccKaSNEc5Bi9Vv9X",
  "key11": "W4xzUvqyUMdAn2GCcFP28d2EyMEkJisSjotX7WffF1qaCowGHxDjFzikzef2trqckHsZmZJwZpXAwVD8gzmJgx5",
  "key12": "2N7PudKU5gyMieYUMkfXqfhBtjyZcQHJKezrwAutGEgVoUFV2iS3WNfB9kj9UoVYRCbzTF1nerYYZGo1ZszonKBw",
  "key13": "2RQtKdKKTczifCh31aHaBZNc5yhhYQ5rWiosjvgMtQ4NcjkhxPNP1bYigm9zhLR6VSkbeRatN9zx8fuGU6AVVxdY",
  "key14": "4Ey5HzR9hkPr9iYdKbjRbuhYXPsmbg8CeGVyjmwrF3qQVBqLQ5asZh7S2BF2FTHyK9UVvfRUL9Qw7BTLgkqzKVPH",
  "key15": "3cBHWDXbfvPpGCEmVLfxYYkfqsZn8iktFpidzNfHUkPcyF8smcmNE4feUkV9w3atk5ewMGQbt7Frg6n4YT6nQtzX",
  "key16": "54PPqkjedckYzcRcxerJVcfwaNY7u3URejCHUZs8sbfe6PdJwEW7dxDyfRChZVP7rbcJhDBJkMj4k6R67uLP5YmA",
  "key17": "4oCJ4ZyRoY6XRH4MvMHKiZ559f7Bu1BL1DUU7NghTpwKwbdA7HtVUHMvKbNA1UPJFXDwepUbYbUdgmHEdyBqwNoF",
  "key18": "24hDegQ5Ea4XfhXeFZM6CVw3Bu7ys3yQnz82mmgZyuLuHEAe39T7kd1epYtU7tAFEpAYSQ86fffzQAtzn53cpDnK",
  "key19": "Z4JvfUsDW13YEjSoc81UghYZjJtaT4tH4awvNLroGjbBgC94rSt6yUC2AEh1qyxctfnWftfqANHw1ji5E9jRwJ8",
  "key20": "47EtPyUMLEUbjjuptQDjUtDytC8APbr5FL1zYz5yVXt9QERUEXLh8vCm6M4cRK9XpcpA98ZtN9g73ZhQD1YJNFhC",
  "key21": "F73CumLB1wXKugH4mnLoCB3r37bM4DzMUwqvb9xMiVVQHki6RxeimVpPH3rhGgXru42W5FYLKh1bDvWHP8xcRUx",
  "key22": "53EsGAbnxEUzyi3FWj3A7QN6Jg15K48jb7Jrt7MjuuxzTfz4ESaQyKXP5fvLsrRhfJfyZztcb4FrGTBFXCv9WpjL",
  "key23": "2hMHpbohxjTmym8ft8U1nQjswxL1KcvRkrkV7ViGu8GFWzchsEKoh9R9FkPQJPDX3gyE9sDhBWd5uzukRN9Fm721",
  "key24": "4MAiuYAMij2kFrdrVmBMUyPpFEfALL98fR1smygckPJ3QD6xv7F9Kh1CGMgoSG5bU3AUuWHWx1TBT6mm2LA8cSyi",
  "key25": "27xT7T1Ksxs7e8n8Vv5C1gnxucCZnpsqb4UArLkLeSiHzmBYPj6tmofUx6rgRdiVxDx8ysMBjBHGWGFkEqf77tiT",
  "key26": "5MA89CvuB8hZ2FLqRVv4TVeC1Lm2VfzdR9cyCjSb4mQfAQifeJm3aYJ4FhkCVk9bBwLRE1ndcUVUgfFbHvjP3sWv",
  "key27": "44Ryv2jVPavikvacM15nfLcvfp3dkgWfbJjUgRSaWe8mPY8io6hePEvPZPno3PqmmhuAoL7wqoSeabKUWSomjszN",
  "key28": "4bceK8pnFaMRUwbF9oXGaKKJKQfC9eGvqWfFZRHQ48rFB2ASf2tCF7VqqwphnKVGRun6jRw46ioj1DhPYSX8yVHU",
  "key29": "5TYmqLUT7SEfiSvAzyLtnVmygt58Ufjb5LtB1PAGDjpPgCUsp5iP12dXhMJSuzuFgMPmu8SjCajgxnhXVa84ayCi",
  "key30": "jnDomkTGfLhswFZhQbHMfskE37mwYpFGhxyw1nXRsYBi7aHSXQRWN7WvqneQxiJJ5SUoCbmNTRo37D1BnYcpmtT"
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
