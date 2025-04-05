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
    "2kBeXgQWYcd3afqCHyHhi6DddPG4jv3xtrJShss28xwTTFJWoxsV832HHgHXXbn9dAamhCZ16AJxNUzSGNKQEWwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q655bU1D5gTdeP8tLb5nX55LV3w4HmfV1bGeGQ2AHEgpZZKG9qAFjxA1qca11DmwVz3H5VRyxCNiu5j5uBhZvQT",
  "key1": "5U2zEtFiBsaQEZwdXS9bPTtfxLqTv43DbDs4vmzJg3fsZXcjqJSraa4NtoWbKGdznXCcGH6XWZZRPbtzfMNoG8CH",
  "key2": "GU6QfZaP3E82XXVcRSGWRLKPsua7SAasc7eyDiNR87jm1wkKf55nUGHuKQM6VxGpSUVP18ZMitzqWNtbwjKzokm",
  "key3": "dbG4Npbq8ZjcisP5EYtb4xs5Uiaiqa2SA4259SJwtSNj9Lb6kVKNu7Rd5NtiKviUjHc3aYZ32qhiuYiEREnkeds",
  "key4": "itTPxRWQQgL21fgPjtaXLWVLZiigCvRpf2PhKP1JDdeRbp5GLpHoch5jpP7ZykwqCEU4s7fW2x6ASAVhAP6XMRJ",
  "key5": "2gyAec6zsFEPw48WVQgMgpQdLfBAuL9kpZ49Qb2PMcczuRxP1LYRrjAxcHpo1TpcDZvuKhvCeNBw7QE8ebuZwsqn",
  "key6": "5A5RemanCCDwYxDPhMp4QYGPsRKhH9QuXocNXav8SVxs99ZzBtvbVrEwQMyMcGBrsPLYK4abBYFt2BMgkQyMcJ6B",
  "key7": "2ExNUfpE4GhhkY9cxdqh4T2XQfzDmRNi1x5ehJiJT2sRkHc9Tjm3u8tqt65Qr5B5N9xEtUjnk6cQvNpY5GmYZEG8",
  "key8": "5Ma7Zz6Fro5fPr9W3M7UbPzsD62jEC7uVgU2ChxGGvqW7JcrWwzXomGKsrg5X8gajeZbWpKBoj92gfkCfq5oGUhU",
  "key9": "52rzLFqoJiS5DK5fytLkDHZdPPnjfn2BhMT5Y3C6Q6w2UXjFcD5NRt1uZDrungFVKos1kdmVxGwmsttne9X2ZAnd",
  "key10": "4WJxDGU3kU2mam6mo97XrfeAZMhat1FHbkxzw5cc8pLzqXmWDgTih9PQ8hrv7Ww54cFyN8EHWMgb4aPrhzMmGYxG",
  "key11": "2PsUYF2Y6zRVhDHeEgWVj8TkWg16ocVhb7kvwXbeWxesZVeB13tYvAEJooBUE7QfwiZjkBsQcmumG8uNMnP76h3Y",
  "key12": "4Su96yGPojJRmkB6ABnfuPr46nqPka5ReE1NKpWFPecYEYVx62RhS4H6WARrjCncG3E1JjqDD8CoFRuhTgfrx65E",
  "key13": "4y6DKjQhbLB4rGGfiwACa1vp1twzdcawQnUjNW9kjAge57guYhPTjFWBUqRjZQHf7UsZQsmdoSR6zHpWaa8QiSm4",
  "key14": "5a6ZbPNocFmWBBrQTFjmPaEMiNXiUrdjiVdkntY3piMdN2pzZLRPw7jmydjBSjijMSTSpQboSDXcFMXdetKQYoBk",
  "key15": "3cwyD75rbo5wx9qb92w4CByHz2Xtvk2W7PUibQPRyRdRzVy9A5Zy2EP8frGF1J9QmVK1MPRzSuQTrY9dYGRfGr9R",
  "key16": "5yRMKsqyERkF7z9HvmwFQuC6kKCCgHzeY4D1Wxgvw7EzZPmruGmww2UuemQPjb21BVnESsvaYDn9SC41PJV1vGEF",
  "key17": "3iBQ9sDBZQw9uqcVRnNdRd8jgZfAiJRzx9DYCMUMheCtNqc8nNL8LNuZY2DzzPEhd61QtvrAUQKWNaJk7nhgHzSA",
  "key18": "2Zd4HW2bdazP51sGkocQP9gDiHGb524W8jCmkC3e4uSSuLca7Qx56AtAgDCMiSTcFUAwggc3fsM38wAnwzmTDJss",
  "key19": "tsqVQfuJitFc2a8A4HQaMaJ3pXNZPy86yWAcjwumHeakLw1hqxK77urcusy7QLFpRQNUbw5fB3Jo62AeGfrH37M",
  "key20": "31BdckBx4GEpt8PrZn5XTbaBnFCoVKwDwRZLBuyVWYv3HEV1f5bxqpCxxiNPgrMRTdE7QUHJwT11k8UfX9G5EvjJ",
  "key21": "rpSEbby2zvCZw4xJEo6VBktmuZzjrs5ed7esrXR1NCrA635MZpd6j2xNe1kJzmzRYGn6eMvmUtAR1kMbw7M4h8N",
  "key22": "4TWiN5RLVgPExiNza4QvoEkDZm6csepP5KaH1ex1TV4HDHegfRHAqZohCzDGcBJwvJSsiu4rQMnF7CUsxLP7Xspk",
  "key23": "4dyxkeG1xuL3W1qJEkgTbkAKf1pCdhY1CSjZP3RtzMfRGZ4i6kwBCgVEbHbCkh7uogeMHhuDB8BkUkGfpQhxxXgw",
  "key24": "54vmEMVopcSgSgNxq1mr3CQjcv9e6oqE4agLaGU8F62xMAxUnphfDmHMParNWJfhMgTRJaTKywtxfdGNgYNf3ct5",
  "key25": "2E6hCq68YvVpJ42hE4b6WWwC2UChrK5aSbcAbQEjE2NAE3QvuTkCViAtyxMdmfEhyyVGc3SpSn2ac8uCbdtyL9Hs",
  "key26": "5kzBjZqUrb6oc1RUhx82BggX9rrMeGYxPEoGK6bgeda1jLsBddmpnXxztm825kA4ciFZ971NJWatmUq2qM2ALsrh",
  "key27": "4afBDwZR2bV66JkNz5EEoAu8ewgnB1jo1e71EqCcHcD2m7X7GRj3NqGcRsmBENNv6MMdzUrVeb7hVHAHiUXasjiD",
  "key28": "2aMA2BRJi6MzatHBwvzwuoMXa47tSEbpv4j7zRj1CXMod6y7YrXLES1iUtFuZq896sQzm9ErQC7HAsqT7uoZQPQs",
  "key29": "5Rgbq5GNMbCPXe1vxiPLdCee6NTo7vNU2t6ERgRMnFCzdjr5rVNj1YGbshrSBz23Ri9pewNuXGgGfuJdZ3AoE1cm",
  "key30": "xm1MpxLSfSqkawKL81eUZX5hyABFKW7YDVTFJpwXsPUwPUFJDhuZ7UVCjmHyKkUaQqtSi2CH9DmBMVGkHXZZGxi",
  "key31": "4mtyXv71X4tMxab3UifEdtYntJk2W2fZeEnupdk2kfMEHcqrbBeeuPaM4QybdG2sp2y8sYjua9ASfrQmp5x1jFWY",
  "key32": "5fqTpjfqPEk39bDPvEYaeHafNj16HYs6HTmvy7SGpTBW3YYasomuEDq5eiMBPsvfUWZeG9tv8NdD3LbYRxopLpLG",
  "key33": "WgMkjvgaS7vNLcfuNnyb9aTfLGmcyLktci9msv7M77tTrhmpHVMT9nHM2abUWH3btAvJLdXfX21ZhmHLfym7nqt",
  "key34": "3bFcHfXRFG1hNMMMbDJH47VKBtDprAwhJqRhs5setT7TyYakpcUMFWYiHpytXYjUqxYNjVfPcyfoJhpo1YKNH1zZ",
  "key35": "3P9juwWu8iXwfF19QEASdTpYrVzq5xewyhG8P4uhXxZKkisM1LziddFqCC5Z3QjfUFpmigzvChrUq9HTXcjNq91g",
  "key36": "4QR2GcyhnRLwjCxfydS61Fmcm1LuyVV9dHrFDe4Fqp1A5tUgCb2KQgqBhTVHBWeidnBuiprPiEMV2efGvcgf4wXd",
  "key37": "u67bpzq1rZUThX9k9hSLkJe4D9pdNZpNGinVu6ayLcc3YWdNnhQsGisyXGnFXDapRW8JD9M3AWGDRSuoUaNxVZR",
  "key38": "4GUfN2GXsueHhozisQbQvVCW9MTHHUDaJvsPs9BEShyBHjgwzwA9EdqrXEJoSrAPUmNTXPeBtat7siEfH5vFzsrU",
  "key39": "2mgiaEqVU2MTJSQciiRbvu3zpo5dT5jZbDdMadDCDsTbMswCYodeTcUN6odPvWZStH1bQvvtSS1YXYGh1Tg5ngY7",
  "key40": "5j3L8RnC5f1A8SM42TgVoh6ea4bCRA3Ri9X1FU79Zqxp47X6FNGXaxKCECJgMhv8KRJrzw2XnnR6kbqeJpwvDmAj",
  "key41": "63hzbYBDxR3opoA8Cz1u8TqcuTewVy1uA4a9muTi3L7PUU8p5mmo3LqbNHHAxfNUwvVi41ScEjEWLCZqfJCDEPqt",
  "key42": "3Gfton9PQXKQ8rUAFU64K16gJ2pYtJoaEVF17rua3qJf9ckSd2N8QkyWti8uv1Z4T7D7fgwZDwLYJcnobAgSG9zx",
  "key43": "DBt5uuJtA6stxWM7QpDBUwT6BzNV6KuGUr3vUsfpKVLoCXRfCERu9R49tyAZoWiz3t7PYdwu7YJn3YdbdXYmiNa",
  "key44": "rGbxRmzsmZKHy7JfyX5cpCY6aErUNtbG4xsgaKBoobqNwrCc9tcCQAEDCtD8XDuF6mZuX6JqrBh689ysX7tprDV"
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
