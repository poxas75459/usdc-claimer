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
    "52WEN1jyvkzSr7Hd3g75hwcP4W2BHsXBPdogBoziVX9n1oagYczoabtLzcqeixnuY2y328Ng9sXGHY8R8TTW9jts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wWJEeRorYU6GHXfxALUf6PYBXXdK8PQ4Auvt1UsGUvGDhU5rdZJa8rkbMpVG2cBfwMaCnCau3QwpBPmhkA5YPJX",
  "key1": "21iKFYUcXSpLfThAAUYHVAShyAjyr1HZ1EDU2h8PgVnHtMZNsazFERkHVjBGcbMXyuvaoj6fbJxwBAeP1tjFHeAM",
  "key2": "2MGDzL6wZFSDGx2GoqUNFERJKTuGwgR6aXFEF6SXHy86CGNqMMMe9ERpTfBLtqizKn5VCtQZvGDapgRJzHaNP6Mi",
  "key3": "2Y9c9SAP7L93SU5reiCH24EdcjZMRPMajcZ9M4WhysFQm2nzsXKZAmff6wBBKDNZEW4JLTijGfnb8uQZni1avuAh",
  "key4": "5BQGjJygj5E5pzwRGvgq6HcYumA4CNERgeskbb1L7MHHcofGVh9LqTysRtZsSzFiyMsDG5qTWjo4nCikmrpX4ueP",
  "key5": "2Jp9cNHb1KKDt7thEfThkFzmH77bncYqnTkne7QuFJr6kQj4D1rADZEP9UdKYd3f12fETxFnNMBcv4gVFccTHGpb",
  "key6": "49M7yXynSuUptxZ1NbU8mw7xufg5DF78dZwM6L98FUJ5N2gsUhdCeaaEkwLNE3Bn42UJppb6uxwV2CiLscwqtUgd",
  "key7": "2ANCmnQYTA3YSVsQAyW1EwdP1m7poXXbWwhZ79LWaTomhPeF1oXi12pxDcrYJY9Wx6Jh8snQo85ZJLGJqUQpNx5s",
  "key8": "3kDJbapGVttvUV6DJbmjzo6ncWmNzhqAHaYMVGYYAP5cdHR8YkuVjyguEFdWd4bm2h3u7u3T1LfVDdtkb8YMZqjp",
  "key9": "2pEac5NSfwmDefATimSsHNkBnLJdtE3vqKq5ESMbnMCePAHt2m713jn6BWCaiUodZ4q8YV3F9j2GTobJ9vxf7vGh",
  "key10": "4Esk2RHn7JcwMGAP1mpdsrQWXccFKYMLtwhqTJdEuA7fVXs7LA56pRRPDWMZDEPLKwoRc2WoFyozsjQcb9MVLKHK",
  "key11": "2hkavT92gqChXQYGPBwPLG5FUXcCtynM4fh8fFe9P1oeXToAzq92bDnfo54XxfrPrvGwrfm56pkqMDZ6JoG9C8d5",
  "key12": "5vfxV6kigMX5dcqr5jtQLbswWZEh9hEHNs5dfTh8h8unBymzZ3Zbb1geKPzrtizeHsfp96hnDGz174BZffF9Z796",
  "key13": "2u6CBBuVNLfJAnxaQNFPi2whdrSYph7Tam3Pzn7yAe3wLtvh33X5mSfiuVdfzdh6JpnivkLNgU43NYK7xYxpqh2Y",
  "key14": "2tnrBkfcXtXCu19CdhtZdkjtV1fUX7Dk6NgamK8qaHq2L4LDmdoUmto4uYjMuAD9zxozGqcfobkNceAYrK3X8gNu",
  "key15": "4VUJyCzasn5jPyTSPnsxbQyju8zSpmH2sUP5x1kA1DQGzJZJMy99srn8UoL7AhX4WnmuExvN2x4TwFvpVauwFo8j",
  "key16": "6785XDgoHPwTTHU7MSkshmVhttDs7FYeiY3fDx6PQK7AXJVmmC6WrFm4uKHXgkMwUhfdp9pF1c6BbCz6jcChBcxa",
  "key17": "YGM8zEZF3WUi3QczgcAmVnvQdB8tLq12QdokdPxeqRD1LGpBDDNPA9H9cFKmbm53axvgJVBN3H2soy2fvg2JFgj",
  "key18": "hp1VjoygNBWHtygcTqNprNUvL5fjruiia4L9q9gharGzGtsNzo1Zm74wbiSH3zKjLHsQCwUbwUbU8zRdUZwFAxf",
  "key19": "4bTVo1fDfmBTW9W2Y6ojCALrbj9qDJp2shcG1wvC9GZW7HUfxeiqwK3xZ6t6RRKLz6cK84M53AtoTjAVKqKX1E8h",
  "key20": "41ToBPV8RqGNoHNzuqXnFztBbsZEkJMxuL7NbixHmfxWmwYp2yNeRFXY6PkBHZ7FprRwg8EzndAJBmkxWX4AySm4",
  "key21": "5xvdSRtTp9vj4twdGU1vy7p1KKqtZmSPJ2e4AjnFSMDRPxMV8hjdSdXSqfDgmyc4AbNT54ZDtroCdexuv3RGJAY2",
  "key22": "4ze9e7kAJtLek6qWm693syGX8mKrcyAmBHnz6XHCbVBBFYk5ADsMZb5AiuJaNLUMuqFgf3VefC2WitvyoyuDaetg",
  "key23": "2hRH2Wg3Fm32DCoBz6hj8m13Y2qNb1yG7ruar7xvwq1A9oSgjwXjKpAPh31WH4iDJF8CTogvjAS9tTTXF4dneaPs",
  "key24": "2DYJyKWfkLCuQEz8UBtbEB2f68pv8ehS58iLk9G4ZRLm6dhEakfsPvidLkxPwAXYtNE2Usf2VkJBvmx4T7FzHguf",
  "key25": "2fGgisF5FmTPBLcG8DwQtZ8PkhceM8G8cXLyS9dLR6j4MHkfCdK4vv9X8sQdRejtmnxpsFRBX5Zy35ZKNvkGN78F",
  "key26": "e4hR3BoF5d6wSrSvqUE1mcQXg64Mbs5NYaVHEbzLdtXd7i3e1xKE8AH75PhrBXGYpmEzNy4NbJormEz5mV9UY3g",
  "key27": "BqVWbQun87v9SQpZSciEqMHWWRUHeh1VcZjLdifRD9W7npmYFtSEaZCsZe23tBdPsEqvQuJupGHpxPm7mPycukx",
  "key28": "4t7fxdFwVR3Zc8S4suQxWzrFTXPMZJF4fss8kHa86ktneX6Br9mzPspYHyvj93b6RiyunhcZgKWLsMXPPU5e36HC"
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
