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
    "3fe5XJaUU4MRws7ngr4VdsJ1eCiNNhruwzUQpeVLoXB78N3UFjSyJnSyg8xsrqQNYurtt4AVHChn6t2RjG86VC22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PrGqJcAghMG6H36Zzqy3qEtkh2jS11Gd9LyUg6vMJdLsNhDmZ7A2tD5pAbqVBRahB5nnsPeV5NZ6sx1d3EQpX5k",
  "key1": "EKx3HMGHh3uZDve5t3BfbesnRRUrxJd24hZNDBrEkoC7pGQ3Uv9MnirVYYnUmHUxUh9xnQSxZEZ9JqW42tm8gc7",
  "key2": "411KmgSLG46BMiF91TG3qkmdom2cf3v28pmCNsBro5bczs3UZn7A2M2k4752oYSVqqxXvzPasYiTMrM1p6xSKp2Y",
  "key3": "nfCzYN92YuVkkguAcmNr4PB8E9AGaCyKND4fujkt2a3AHpemqPmFai87HigfAKAA75JsXQJzdJxan1qyoHH2n1T",
  "key4": "KUBUerbmjLXH3AwrkMqg9FZJehortmN1Fzx9pPmiq8cCWVu94ydw3hptCc79oaebVezLgBLwZRk4qJbEvySB4Sf",
  "key5": "5Awf2vKZW9xp4fuvYQ6XEHyqPknDBisJYVBqe9svMcKsdS6LhnU2prw1nwbmPDNdhQScnGFUv3zLYvUQsRhPdxfG",
  "key6": "3e4CK1kYpxeRpDQDHfpFskpSFV8oz7UJSYwJwgdyQacneALTxuAREyxnQqRGWnvJRtLnai6gwbbCj5yzH2r5MvtV",
  "key7": "619jtmvLD7YLKfHuvk1gjtnu1CMPSH2Nfav1NmUFgUHvEhUGX3YLb4NeU5ctgFRYEc6GAFijgpj2nRgSSvFdNGiN",
  "key8": "6khjyhv3e6dvDTiie9BC4AVtGe4EgHKR5VCoX7UQ7JouzDfETteZ1smb7sX4yC8UhkZqbJ1vzuwRJyktDP6LR7y",
  "key9": "5HvXN2j5B4caALYtvjRGov4igQRTLS3F5GkDRzA6wY2CWencZtokCYYQyvQC9XXvVY3mj9vczg5sM6HRn5LK74p1",
  "key10": "21M6QXRQkAHJgE6xrXvWRUBSTc1RJeep2aPGmVKC4BGWCJ8mVvX2LocLubnVn4JNieKewp5WGcaR6uGySwUepfUq",
  "key11": "wDcdP4f6hQgsJjcyvayZEpLyt1Gx7AFVi1id7gkPrcE4FZb4ifZigdY8cheNwyNtGWKAoPjgMzV4YQEiksBUgHW",
  "key12": "5vyEoymDhYp7JsgzB43Nu1N6J6ncLqxi1hpHjmBg4LxHJoFZRzD5nRH3pGNwd8W1UTMgXjPEQXToEZvrzgGshKqj",
  "key13": "456EecraEq8ydvPH8c1Snd38mKCPoz6PzM4E47zY54WMPNAeXKYoBr2mvzQVoLV8CYJyqFNUcHxqBT1HC3eHsUvo",
  "key14": "MHnjTrpuNUMY7okJjyFgxivGzLH3ceAkh6EAhJqfJV2jJAVvsTzDCJ82P4WekSJygQJS8dzDWEcf563wAPUBiyi",
  "key15": "3xVYdni5W38hMkhXCoXyiPGi5CcJhvZeWaDMYgZ8LRB4HE2LxcVSz5cVMgSj9uVwocKLivUtZuXuACqR316W3CSj",
  "key16": "5UsLcuXnixDkUjmZKJyiBgeykGPYZWA46pYdZHD6eRzwR1Pqi4NnANPzU4mGnay8GSZ54WQz1URzs7ka9cTGp5XL",
  "key17": "nSoeQ4GTMZ8D3ZkTZr8vXSrxoxYWcXjS5aY38TJEbuhtkWg3Z3hhDcyx4pghY3SskKSZ7WaUjCbsDrz18sec1gm",
  "key18": "5nx29aZQWd24nm3TsSzbM68uZh9QJ6Ux1uTdvh1jyiFuwiEadpnauPbEtejLiUA58KW6vUUSHbbf2jLRSPxpmMUV",
  "key19": "5D6ZyJynb6YfeWYotfKgQSfMD6P3rvwoeXcSQPbtHmvQJwhLJZuTq3LMCWqim4AHjiYKRX5Bbx5dDk2psNbDJaag",
  "key20": "3qXrW89nkc1VsVBnUmvygoPJC62aW6wpScKp33AEquYaHGKc5KjANHV8Kes2eEGLc7Xn1hPWLkLFPAiYPiUrrc64",
  "key21": "2TpzKp1oiowpK1SmFzqK9aUGLkbEkMAFw9iEGckrTHc8BhsBWdREsub5gMBimibF8yjPyQLJfz3Bj9DukUyZiKgR",
  "key22": "fhdd7cFTNZkyLtH919ufK5FECA53wMh33eHbEFuyEUsfUZ8kyg8N8igdrYyYpbZFePFFXqToWqdDdZeGPv9p1fW",
  "key23": "64Vc7JDhpKUQxke7wkKvLDsmeUEq4RGWvK9d3fgH7qBWKWd6s4GkLyTNNwbdEieb9axpttMKKQoupr4kV9MP9LYz",
  "key24": "jCYQ7BkrF6eB7SPoFNL4BNR3rTFksdbjAdSZQwKM3D5hUAcMwqm3v7u3BkzrYrasS1j4FoiEiEFUK5U3DU84NFP",
  "key25": "BGxCshjzTskxgdALXM6QNqbCFEDfFoFj5NUZDAuWuBvVCdNh8PkuJe2BAD2VPxqBso76qxytBixWxdaxdyDYTeB",
  "key26": "53dXuizWpEyb6ThcDidrYPjWpjGyJkt7s38f3jbcNrb4EvVdQQEyfx89XWoPgVoL3oKEhwYHwWupZ8xEzMH42JDd",
  "key27": "26LEkAo8qKP8Dvse39wb1f22vkWSF77x1Ptu25LzTse1k2t1N3uL92p1vGXCyBxNdSbiWLp5EL4rDxSYYdwq21Ds",
  "key28": "3HSisibb5njrLyyvVozzDae5PQvKcR4eiVxA2yPethKvN2E8a9hAeDgx4ABmtLPrShMmbwwCwLGRLeYjuTd3nDvK"
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
