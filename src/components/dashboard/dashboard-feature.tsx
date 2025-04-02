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
    "3WjueFZoB87PKpGVpeALWGVFr2e8kLSZiV6rXc71h98CX6QwajtMMMQfdgPRibDUeeNVkqRTWzun6VGVeGLXUqtK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24ZLErBzbSpRAXPoVC28wyqFCuPP2WFGn425SD4YiVtqfC8TGSY2ZtvC4ghaggd7HbxcNCv9UaqVdfRNYM8bLsQ1",
  "key1": "VPFPvdKU5N4uqW913UnpNhcA9VSuDApEBaJKHXHvcpjjpyXtKegNA6dabVWfBc5P45ct7cstC9wpfuGLMPYexdB",
  "key2": "5tt45zQQX63hrqzhsPd9kHGDUxvhDWWeUgmzxjgUVGL8D8Qu9U8jX51nsTqU2GAQUvZRiptLwT9eiLkkB559SWjj",
  "key3": "Cam2MiNs7DAYwQ8SN1GozW9MUduW8QxfUmvHJQxdWdaJUtxgoiZK8H6NpvLYUBbzwQpkPFXC4RRuKmurPNz4UoE",
  "key4": "4kM6NricAHoTgaysp6fmFeC1MAKAkYtLWT4LXMGV47RK2Amx1mvJEsncnd9KzXDXAp5sQeADc8xDdmxvgE7oAQVk",
  "key5": "21HSPEbVje3BV1239KWvSkHwZ3jYm5PfftktciKaoZWNqBnktvLUfxTEvUhMsznRE4rkLhbBKtRoFobhSd8xKYLg",
  "key6": "2yEm7e1epYRoupAf2qqr3sXHJd4Y1m71MAPPXnbCU6Mqh7YYrN2pUpC2drcGFmLo374HuTYfhkUVKYrZsiyUJWNo",
  "key7": "2EjFTc2ZDTwHUxn7WARKXh975LpSTwMD9d1XSaoQzVq8nwkDTomczHR43Txusf8aRqCZL2JdisNejZBaaX5tKtzb",
  "key8": "41xkrUJuMYZmq9Sdnu6g6ui6twQxWaaS2MgNzQ7g8JBBcfcKcoDbgo93vwziMp1nRiAErNhRvV2sM5gduR1oeHpV",
  "key9": "2gFmGSQ8ehnZakEvrvjU8GDvkpCtbRNNEL1ZXq1byghFTNoWSc6SGSLZd2Gps5p3XrwpV7fMpVFWvrgHBEdp7bFK",
  "key10": "2dCcATPtsDaMgodHgNuGRkV2Kb5ntrQ4hS96UixyYnzsqkhnVxSk3HckakHJXX22GkvavvUoGTZgwzobmFdZyWGw",
  "key11": "zYngjc6BHzuvUCct93Gv97JueHc7XSGXqPPdZqsBscSaZDJmcvz3515GVb1F9feaTcX31B4WBaMuvSXvAENwq7h",
  "key12": "4UJU94SBdikDraco1PNCyNac7CRGy1SbJnshuiKyw2ENSVUEZZMwJQKwed5euJ85zYvEo23dW27h9TP7x9JTH43q",
  "key13": "5fFRyiLnNPP25EPcrDbCeVhytQfrYvc8mHc5WEMHQo3hpd2M9nN2fSQ8FQSxbwtfpA2MHnwXTQidZVARXTSUw4wJ",
  "key14": "3yVytNxk82jFp8ff9yq4cXXktwhQmmv1ZXKBCG3DRo46wPkHhfyKQPC59U11KaByKxMvJzVVKcaDA86bHLyJPyA7",
  "key15": "gsRwGWsLNCTptK6Rrqti6Z88mESH1JEf6y7b8tHhZhiBn3R3WvvKSTJNLkJQWwDLahPom4oYoQWrKqu8KSWj3Bd",
  "key16": "5PdpghRZHtZnQCAHSa3L9cQfnCbJLQAB4fxhG1jVgE3q58CSqWqJgNx5iirY25uFrnHPnbK8mqDoYDySvWZnvBsJ",
  "key17": "5XoVg8MaLa4DSQd1B4gAfqBgQ4PuCXBDGUStVWk7ey4k3rKgPq1RW1gATMkKcvfvyyJuv6urQwXrULTRhGJ2xdgq",
  "key18": "31YWziwEj9uWDufNR5B1beGYKvtKjvHHXDivHHKQkcdgtUtaFroh5AmvqVxmMKSksMqv46AxTCADRLdNGHrBrdP3",
  "key19": "3rJpL9Amr5XWpm7oLgb8yADA8J82YNnBmhbUR5Zv6C41RC1ruDZzDJt1iYRxHg3JMygC3sCw3PW8GdnrrAChLq7T",
  "key20": "3rN6v73bG7BUYNgnqHRuN8x9kiZ58iNfY7gScfK1NB2qpz6wbW78c79i9PRqQ9pbg7Fr8gptxKABuM4Wb2jEibUb",
  "key21": "2oBVQjSJH7oKikx7Dr5WgkNXM4tPegMTetSPzHGZXutrLEi8zNkZ6nwk3Ge6U7DdyNqYfqPaPm8Hu3C9pxGwQvwH",
  "key22": "4i1CN8fg8vsjxWncTb3z9dHBPSBZ3rHgAimcA2LEuXkGSLTC4dwrDhuyFHgLwoSYfug8vzGm4bnbSsJJUQQStZph",
  "key23": "2D2FEmiHrNL5Wsc2vs3XxH66E9tsWvEYF5kjkjLca4Nv7DBp5aAeeWGLt9re9VnkRQMhyWDs9f6CwMvhUm6m6Mhc",
  "key24": "52UcELuNwd5pRTiabDiHxLYv6tPWL4g1y12LrVh1ULfKHFEMmHA7rbxWA3F5F7hdhEUKx1sCLnmbJvUiCaJkCiUA",
  "key25": "3t6jE4MnFEx81rCWbFuXNwfXgjcjrepNLzmhn4FwpMjfUs6FYuPX9QCaLduTiPqZr7nh74BbnxNzbpRm7H6E7XM9",
  "key26": "4vFXdoRjceYW54dajtVCGCG4V7VhVMeTPwwhPipjX6HwwGUs3CDunzbrmmJq8BPDhqDZanwrbTXDHV2U7d6K9T4i",
  "key27": "3oH6sBcCswfrraFb7PhuyqCZgi46wVesMvyTPpGvGQ3tjhcMyqi6oNj2Wornp9d2yPNWZdnHzUHwZV4JyAyNcueK",
  "key28": "4AQJpJR5ria7HFeUJCwkRaC6A8ALRCyTFTNfMc3zYd5CGTYfZg9Kzr68fKJtvrKv6wGkPFgF3kFPZDYpDurMQut8",
  "key29": "5qpMcRhiPX9ZQutdoYPHe4GNui79hxtQjvHu7oWMoRUQopMQkSwPT8pGzordUzoLXhHp4taoEoKogUPmsXvG6n4n",
  "key30": "262M4zY8ocqopwqhKnzBKmXsMNzEHu8qgqvqPVdSSt8SQEgoXkVjMsZBMk8tRDUhhh6kTkdRqnMyw7N4eqvrVRi5",
  "key31": "34mytaZuzruikv1oXrEnK1U824v7MAWuJqrb6ipJtkDAwVajGFRudPuZftZXxwPrAWtQZRR32WhH8jxP9wxAL6HR",
  "key32": "TpTCH78cFRDGnFwP11bfDXsBDYZUPAgwmXKrpvBLNmc4G1gePpak1MacYnpHmBbnoRQrqLv1qBMhransVJwWtdz",
  "key33": "4xVhMRtvb1didS6ApKh38ZSStJBNtKEDucjqCjJz6NLkiugTSnHHWEesus9FZLL5cy7uxvibxhdD3ktgx35L4jiJ",
  "key34": "2kyua3KxT47CaHh9AG6kENpxJUb4YrmHNu1XNTQv4wpQpmCxDkp5SaPe7mquNgA9JzWihL5BphrgUU1AStgqBkhX",
  "key35": "aKz3fr4LFZ8MYMysPjQoMtz2KDmpg6BQRkvPkY7MhHxhUFhmqYscNjcdHpwcnEPYjs6nbm8juuJaXHsAiFr1E9r",
  "key36": "3fowmJw8Xo7tB3ZiTeCM1Z7G3YaDAAPiAN3D6UTXDbNYJXjH6KbA2LdfJRMm8zt8bE7NWamPeXBLVymMVaw7ybdU",
  "key37": "5LJ3VJts4fHcXGXNRpXnDbiCewfBAAEqc9MGpiG94gcQSVCp3r2jPbkfW8LP5vnriPDyrgdSXou77KjWiAmboX55",
  "key38": "2HXrpva21zLVr2BDDVDSRwDtaXwQ5QzW3F3ZRP2GXBXy8ZJDW6SGb7zyzQHcM2tCidc2cx9e1FrbeF1thwwRzdDM"
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
