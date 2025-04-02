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
    "3A6hMgH7bM2u2ETNToDEG5Hu2DLenXbYZUXvyuatWUnS7WesA5A8zpowTgARC3VLVsfiYRP3NrABavdfqtRAQ1HR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kfqVfTprfuCdpueZ546tn926x2zzXuFTngncBH236yyh9tSdtPVHkaonoS594dF2aatekxZp6iCPxXKB1XoVDHt",
  "key1": "5N1njMUT37eWeeS4fmpue21zPXn9yNGE6DXAYk8oW2QiEqraBLqDKttXYgV67n1oJMr6vvdDaigBePfwy8YGWL7x",
  "key2": "7AruiJgHLUsrqVvoWd8YRgsYKcWHvszMZYV3m3J4EipbBkrSVFffnhRMmVoAZBp5HPSHXQm8xoX2cUmkD8d5tu5",
  "key3": "62EZGFxQ6Zy6cCcNk2CAtrQ1z6DHfK7i9yp68G2KLpCW6yPnr9o6mzmAhhzF2UKVBdeebCc8Vb27s6VFA6u4Grv6",
  "key4": "4Uxir2EjBJGprnDNMvAC6T23EjwFK9U1kWDn1UwfTiE2Kb6uwTnKLvsRCnPSrvpgRvWHUBryQegmAbejzTwyrC89",
  "key5": "24HQAKP82skTUPt96tfy5YSAAMbR6TPYSvVpGjKEpmpEMw48c5UVXpZ9QvDvCjK8R5KD8vqws4dox82Si19BNsoU",
  "key6": "4pzGQhPDti5SQxarb7bHj1tdFv4zMTUXMgqrb9vyZ6DfTvgkBfRm1thT8kLcuuJXuoApx1yKc2pdtDEynUtJY3Pv",
  "key7": "7xoFAQov2ZMbT539c8QgQWAU1E8aZbfU5cx2GG4hd1nKsL1H6mDoq9SEyc79Cz73gY3gTuXq5cdpGHrjrZ28QEC",
  "key8": "25yPwB6z5kuc69Bx55zhuJiqqY3XRzbnfzH8fPBqjKe9dxob2HBZhT5Z7humUiT7RhaVivzAvcdCNhcFUktRVPnC",
  "key9": "5qiisdCUJJMqLfRcCHXonY6M2vp9C65mGgy3moKmaPjMVLEUezoRJXdhEBbQQZ4MYRt25nxcW5pDYAm81pPrbRVn",
  "key10": "HMbPT7yjfkd1N4FTmn8GBF4yh9JZt8pd4NyhccKPHHPPVM18SCz8ixzziFxwQxV5AJsFdjBjYgDpXfbhwrRp3E2",
  "key11": "4obm3zDPztL2DsNyhSqFydfbcN49QaFP9zTsWfS3MVNAmZhHVsACqWtTvtSNuDwrSDArvgBwGpQvGC3YqAWxMg4S",
  "key12": "29JJnL36vZAJQkcDwRfwqq6Q5ggvjAt1iigQbwM2ydyMSMhsRMbsE3Fb79CL5LNbZ6oodmjESqB1ZLi7Cy4Zicxz",
  "key13": "2JBx6oQzHGsRzwwAPnogv1Q22nPb7v9uB4zePhp2ygrmB5FEihP45Sa1nKsNs4LyEtZ6jZJY8wqhonDyzzUnjC1f",
  "key14": "2nnMFwZtkC2qfCefH8pqoehMvfo6cukcyjG6wpy6Ue7JG7XfSDarSmjv1fdhC6XBgQqjfjrDKDvknmZYEmA7LdV",
  "key15": "5hxSprMmhQhEJtHHA4osY8NgU2E2TVrnXMVjbfMe33XTsbH4rhAHLW3E3yQSLWuVmwsuEAr72GgS75sYVwo2sMkT",
  "key16": "5Q2BqfVdiRRsEwbgqxqXbLWG1BavHq5gu3rBPoVNj7J2m7SENNc82HZHwJuhe6dbcugyGdkiGoRkYzqz4DN8eY49",
  "key17": "128k8cPoPytM2bUgM1GrZzkKez1PHN95ASfF9zy1sJkzy4dKUVTCvwGExm3sTukJ9szmXqzaAyGzmqAc2AT55HiL",
  "key18": "1zdoXiY5ZuE3dzpRvRiMeSjLj8ApU1H2ip9DBDGXRt1PusNB4HZjNzzeVU1KryDDmgQrWBHDZsopcaHnk2fodd3",
  "key19": "3S3aUyLBxkfAte8bGVYd5kMXwHncKsxogw1D667D3ggBZGbzxLgFBFt2v7C5sTwXZGLCWcgbt6ZXprbqW4qBTREn",
  "key20": "2tswSaRLGYwj8LNhyVsbEvWfMwBz8XjeFTzQn9zZdMf83TYYbA2CUYDSe4vVU8D82CFdCt231nBkRXDSrAF6c6sC",
  "key21": "2kUCV4zSsJEkiTLHGBUP89QGFXM1JrvGvCHvNpwpn9xfXfptZAcpECbVE6Wp4wkQGiggkrrMmpRV6uwHggYA8YJj",
  "key22": "5D8eFvKunRbYZX5U58MxfwqbVq1K4sD1bHvYBrEzJGJMbw2Q2LiBsECAw9CCtJTV2bF78dVaLDVpmv4A4gU8UcYW",
  "key23": "UCtMEVub4GcdQhYvZQkXHJej5TXGUdQPzG79bSmbmk4o8Wsbsfbw2j1BrUmE3Bdx2JK1YYFAdgcjkZQp2kDjGi1",
  "key24": "3GVidRZWFDBbkuzHVVwoUSiW2xJCFjnsR2HYbLqKKqMU8n6n7QoU5UFpK3Mr3BQK4n7axBrNdpguifAedCKqxNBR",
  "key25": "4jn21Y5dbno913QvJvxxAUbNJhzfkVwbKpeKybpPAmyvrjHSZG9YQKhQRt2NRTwWrFtMVaeJiUQvy931Zq5RJi47"
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
