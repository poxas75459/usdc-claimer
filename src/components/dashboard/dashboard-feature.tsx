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
    "3JCxNVjxZaEyk7BaqRZK7eYDuvmgUCuDGKKn7YeXyeGTmoCkCjQGWckhNH1eKhAq9G3JYfJguYQuk8afNGUEyt6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m7cwqMgn4Cu2yaPJ3MUyMwimJw4u3mvXyNkH5n3VtnwTvw3X1jaBf7JydMp6AizUwgL8AsxfDhAQywcjfMqARkv",
  "key1": "4YCEy6bKR9rk31PiAMMJCyXrBvvNDwNMxz8N2YAGjv75oVeiESNjJJA2DmtB6bDiB9onnHmQS88fFebbdP2h8gk7",
  "key2": "2xNnnpE7U2yzEMaAHaPgEM6yQift8A3SxGReDJ7iBCnDxpQPfyQqzfUCKnctGfgGPi3Ga6N3xTbuKHfqLk1A6f66",
  "key3": "3rH7UGc1aqzs4rTF9JhqKFoPnQhuEZmPxQzP5xsmYUhx5R9D16ByPsTgBz4RJ2k6EA9ML1z2dB4JJpCrggCwdKct",
  "key4": "2nJwwMyedQCWgehcZAypzVdDBQRiFmb3DJhyPBZzc5guh3uPeDnfcv7iqr1V9y8zgr1SGtFgkTspi6zjVaW7goBe",
  "key5": "4S79kmYeVLrnSCmJyi2g6dZXipT97zw8XzsrD2uDqqPM9QkzgnQs28CuJMcDBetsdfgiseTXDtdYHe5UJTAedWRq",
  "key6": "uT2JuFgbG6cJ4mtRXd6DEXEoksePvQnP96NhS5WzkeCD5i7rnESehqi41wAdZuP2PAmHR5Ca2gcHKy8BPohqoYB",
  "key7": "3q9xd8Vvy7Jx8ubVN9UoBaA3bsGPd1ejKhfLqMniLukPVLr5jv1EPsyAc2Vig3o9HBiq7yNUxxVcRyx9HeqMsH57",
  "key8": "5RoeR3cznZ5xy5RYjmYsM6Xmi5MNKKGhpwJPsbhjWvcnkADa2zgbf4drDiDAPnyFsAptZn9CZ2A9zuhJ8RokweNC",
  "key9": "3FKS3qFsK3aba5982Q8Y3M7dq4gL7tnXAdxekPiE9AJcvKHbzGCA3C7GKSrhAdTYHJiCyvXjEKUWgbgNhcZebiTF",
  "key10": "3ieJcaHCW62GGMuv6S6X1DegzTq85fmDKjsop2U3gpHHV9H1KmqZQu5ZSKZo2mH6AxcpW571mxHZoBuaWohCfGer",
  "key11": "4V1HRsh5EfrzF1J6B7B1CzeMrGyTtjeFvFqDEPhXF2BuoKZAMyL3nk6AZLwsnsGAGLDyZoqAoJowtirGM4zLYpj4",
  "key12": "5GxDvChmuVh9C8nSFrHYwZjL4ScnfZD6FjJJqRr1pCc5K8a8NZBsebRT74Bq8BPHX9AQWASMpKthuNkMVvDGg9t1",
  "key13": "46z826qb8RLTn5TyxArYUBXrgbir386JpUFGfMxQHBq4gLujD49hZeY9LBPm4LmsrMsWKzRbuURWcaxtmVAJqLQT",
  "key14": "5fcSmFZQUmsBNAaxwqWHd8kGfjpoqCyNamTKrbckDgYfqopq3W5euN8diFpHg73qx9AeoS352zk5txnMzvUEhjEM",
  "key15": "4g9XunKuMwFmD6bLh6APPM49oDjqJT22Phqn9VrvsQYJrdgDLcXTn1wHRa6Ece8U2SAdkWQ4atEDDFdkgVkZ7mbG",
  "key16": "5k6vdmpfCHSZfbU3mxQGGqfbuvjZ5Vm6tLCtH4KQ81Z8HwNTExniXSu1mupTFSR6GUhy5u8Eg32auNRkVpB4NXDm",
  "key17": "4zgNARfDUwETidmrQAc7mUFWEyC2dqvcdLifsdnxAzmiSYpdcfqq3ku4v9qTNbjN1qTuDds9YbbxwXbdGRAaMura",
  "key18": "4btdqaTM2cTqbEkSKCLy1WQ7o5ss9yujgCg2DffmHzHXCGuYYeWM8JiT4Hcjz9ha2d2d25D9zU4sCd1zap4SFJVP",
  "key19": "2eYJDiqwBrDYcN9MLJE8sQivcycF3kwS8zy2Bn4qJHyqGahpUWaBC1GAmvbSSPcNkLsenZvp8ko5UwnNi7emgjCS",
  "key20": "33L2L7ucbWhZDwMrn1erJm4hXxGWWLWvhKpxGJ1TjoBTwZqBxq9z6VzdycbfPxd855fQx8izVxxMF3PBRqhHrZcH",
  "key21": "23vLv9XBi2e7c1GjmQV4fSSgfDoVfvkxyvCYgjey2fqzDdmNzQDs4zKc1HD2tmLdzjwNmiepg45sRgAojPNfXojG",
  "key22": "3TqBHJjMVrhbedXYwbvEMjjCtg8xQizMckLy8EVQYYZgYqkjiYzDnhh96z4Wk2GVu8XR4LhegHddx4wBUyd24R2",
  "key23": "V12dNSGKPoo8gUCFcJYULcjEBVBAoVYvZp5Ls4ki2cN8RVvyChRDSMEwW1xMAFLkVQZC7xuLPXpXjEDAZ1Z494R",
  "key24": "8tav3pxegmSxyAjgkNqqFKdrvfJ1abPh3fHhDNy5LP1Evs9rLkDrokZo3Fvm1JePwdujaRvcih3rtnrjquuoxjj",
  "key25": "2rcLYeGc7tQLat9pmjFpKpL1TpGxhiP1XM6QtmRzGWYfzH1Kzj2BXaxLTRuMtJjnF9i1H7uT2Ru44ZGWFprGDU1",
  "key26": "2JgN3t9SX98ZsNgffVa2pjFEJqVNbyhk63Kj5Btb7Y6QuvhU6djUiRGD9ziSxvPhzc7cf3QPeCbCddM6uFAqmREj",
  "key27": "V64SMKui7qV3HCUx3zWJiDi4aseYKxDJAzaAUgbP6GM6ufJicXZppeyfgxapzBAoxHgDjCgsYM7nDzwA7hxSFVL",
  "key28": "XoCEFPyoYVu8XJEZHsorRFxYsFd5VChJpV7MU4qEc5zDga6eGaT5JJC5FK77EcyKFSQFTMZqgbcRovw8fa8LGEn",
  "key29": "2cGSeUNq4pJpcMTU3Dz8RxoBxnwPzQ88WUDvMGDrs4JR2HiELPVCjJgQEMLiku9BNs6XgQMHZt5ZFv4EBU8FTWKM"
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
