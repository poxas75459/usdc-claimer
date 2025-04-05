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
    "5mbgMWkhUoPwQhSRNKaW9hdBbf1fjw1m9CH8ut2cbwbChf4KC3VhVBcs29twHBqQv4R8fQq3BjofnKPS5xNxMDGE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VJMPgUpBs8Z8tSyXP2iRGfqYSHnQtPhp37y17z81WLAy5nBxXSzFgM12LYE2Ez34siytsskLheDfyNts4EgcbkX",
  "key1": "46sai5ay7sLBYpMbz1t2k9KNCpfDDn5wPFCXQyTheHY22n94yW3ztxgCgjVqSRfjFgjePwoWsBhnoLBuYc4AXXvB",
  "key2": "3SpZGK3wxd9vubbnAQjG4u9EtwF9weCxiSPVu299thGDoGerb6E3UWEQKsNJd5kdV6iQSLjkWfLTsPUX7GtbSigK",
  "key3": "4feA2Umv7Sgc4jis5phY4a7XRWPKq9ikgHUaxuntz163CpeYaCiZgnmLped6gXG7pbs7R9zAcHodcDsbAWenStdt",
  "key4": "yqBV9rZ9hvTQf6EYKng2WZ6ydqQpnGFgJmD4mRu8KjCE6XadY8cqdmwbLPG3VkHVj1h1DLayVN8sNkLd68uHKXU",
  "key5": "3FvY9rcAWrKBMXxe6guorwdm3G9eEZxvwD3mVB9ymXEKpdTETzvYDKPeeV6X7ddyXWom4RmpKUTu2wKgeenE6sta",
  "key6": "597NW13wmmb96nro8TEHaBdRqbPNRSEox1KZyNdeGSqzakawoppUN5RGK4hTzuBRgAqrH2cBVrRLTDgugssxQk8z",
  "key7": "3rgYXqgfM2L1xY8dWbbf9zgrWHkXTw85YvFyfFsoTEtYxHpAgpnLMhiEeTDg96QFWU2VqpH6CuECsMSQSR6M2Ejf",
  "key8": "38BdeEq8vTsivMFRnXJkiSziK2VjZNDrRQgatC1oTXxGAeEjHd6iBhZoVxV3hnFxv4VPcfBAy5uv8bBLzxX1LJ3S",
  "key9": "2PMC7emxAowcz9EFgXFZdnyXMjNwkFfwZS7ntkkG5dsfNZwnYs3sLVHvxUf9szaLxMHNw1KZbXUUGAmDn8KgARAw",
  "key10": "CHz74aDxb6RKGZVAGbeUakQD4pqpfFPnqiBn8UaNQz44vbyyoaGLFf1CLtcoMUUQa8PV31ex4LKfnPhWPGNqXUr",
  "key11": "2RyumR3zu1eLYjv3cHRYZcLKDpi53PLDz1sC9CPAAEsjS3DX12mB5dwWmP1JN6TvK1pEYN2wuBampu2Hwxovqbah",
  "key12": "672hzqn4Pp4KuDWkbrsD2K5Raqvbjdr9MPjHUZ1FjwKsYgxERuB1m8SmvcSa15JY5WtX2VRzdMEKduHxuppS2qLv",
  "key13": "oK3hXSkELiNwUt4XJUCCgFKJjYc596dhdPDt2cqREcNEwWs9BDpySamNqJAV9Hhxp1WAK4qqqp7jBKWza4ZvGYB",
  "key14": "HCVySbmjHNVeA5S9qGiLdrMgLx4AvwJAbPoMW5a1yCFhkdyZkYhervCZ2QZ1Bzp7mRaZrDmbdLbCSZswT8o9r69",
  "key15": "5RQvxoVc2QBnDztMg5Gz6TPGfHs7w8pS7ZuqNzhyyuvbf75PawNYJxLMeDsPkswfwHrsxEEerGAp4FN6CV7jrNZR",
  "key16": "2nspGcEJ6qYY1F5GCsWTcJuS8t8LAznLSR1J53qBBPADwV61QGNNRkh2PvR1Uk6JDDCbW5T31r6R3BhWLJyoqATd",
  "key17": "4znJy9o6r4enfdFjoWtCeBdmxcQg9r9FXtf7yXYERwY6pfYC62DvfUmw7LwuZXgM4rMqmEK2J2qhRpQqeckFHpNB",
  "key18": "25pLeU1upWQ7CbDgZkmYf5PjHrGECQ8P9wYPrfk37Z1NnHkb9C4ZbVxv8Jt18EhgX5aBUBBNJMB6N55dWyGJEoq9",
  "key19": "2PU99qQ6rvb41FPzEyeX9DfwzBsWzKyFerXdJbEJx5zvc7By77UQC2QhLLG69xJ5SbeYWZvbG51UFkovYH3agN18",
  "key20": "fn2cPxDYJZWAEaY9J7hPZipo2ajPvpu65tPNKujfcG5iYoUfu7HKKWPx9mthEXzWAqRQqeLmc9SWmquHGGs67Ev",
  "key21": "5F2AkTFd3vLQjanrMn2KcLT9j1dRETHRnFEvt36GX9DkasAj4cufYhbdWYAtNriu6cpgzL3K1BWJcszcRUkPRQ2V",
  "key22": "4P9wrKfEYZie1uomrSmp9ozZNcqwx3WNEK4HsyjWokZ1i41TcYeCpAcY1uqkNLe8CZqGm8j6cbFoiPYdP8CmrjTM",
  "key23": "48xuaocAbmAjJyqw8VWHeYgaB6wTMC4phFDCiF5cxSHQWsvGvvpwatVEAU8rpAp4rzPqJmpHMqbq9kWogs78LPJe",
  "key24": "5fzKZtGaLRRkJ5eZw6SoZgsJVPEVi2nU9NLUCWPNcuvPw2h7dBxRFqVHpTDqMJUrj8wdbUo7npUQsA2YD4iXzxqJ",
  "key25": "59d31e2rim8BphPN1RL4KGMeyJQNQCGEeVRX1XiBYruKJqW8TAbXgVgduCKTx1HnrqkyGA5nnFL3S32Nsbsyi5sx",
  "key26": "5xkvh31pxwUKtPUYMAhuhoxBQg7zX1uySvcu3R5n5E1pFyg3NGKDFFzvBVTn3k2w2iy441qQddmcQtyE3KQSZMJ1",
  "key27": "5eiuhvuJ4VyGPFzkeexvAU5piL8XkRGQRKsPTfzz6aeNZYJGbYenHhkV7gPobrdrQxHRdqZfpsK6bLT32nkS5inn",
  "key28": "1b6vKbnsR1BYiMLMrizgfVCoDJvjhGMtEBPBtRyMThEDXaWa65a6E3mY11omapbSLq8YN49PMoQ4dCDNFKi39Ro",
  "key29": "3dx1yrbacdnXAaUEnBwwngkUEypxz6A2kpUDG29AKpX774drJpcyHoXxZFvNbebQm5PVysGbJ71rSuFfPSK5rscR",
  "key30": "HPQYZNsUPNdqvcdNXywRLBuqJWxSQwy9ywS2PKn582gNa928NLaAwFM1skVQahiez8QQHscoTRVXcW9UzLcuehz",
  "key31": "2DAN63TATT9nDGamUE5yPGuc62RahLad6sNfjqCqicUpHKE4rFLXSkdTPBhQhTv9zSKEwViN6txk8JoNMJsgv2WH"
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
