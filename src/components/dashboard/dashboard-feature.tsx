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
    "mJYHr1KLpC9oTdcP4QLefvKYYagnBHxkMDjwjmSjaen8XwefZAHxfPKUnhHJ5f6Rb7BEHVWGwpzjCAACyxYwvC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zTWJMYFZAeWaAWzfaXHX3hecvuHUTfdKMp7BK5n3yG18bJ9A6ii7GoALJWD7t2TsXw95ENDnDAvsNEdvuFPa2xi",
  "key1": "46RHZbS8Ycud7aAYnJ2KqXMc1HKmLb9K3h8wTWQUDNXhyYCoE571WxnmYCw14iqkjX2sJxP62iPgfuwc5sJPKoSS",
  "key2": "rpeSxkDGDFTpLPvLahWeZXxBwU7emcQF6zkfDia262xQNq45ymGyzVfteUtTZXvX8nHhFWBM6rddCveXhx9kgaz",
  "key3": "3MBGJhgfFAgjEVgyHyfdRmaYtRLtx5xYosWwwZpcjbX7Pn4WAYRaYgoKj8AiyvzxKdeiVVp2nu2YQzxGDNQ2EZE2",
  "key4": "L7hzPu3X9vzLZt5AdKM4pDZnt37GpLudD4iiFiH8fJpib1SCNnjKwX85sD5ECzGjCm7RfJgzvCff5vBrCB2TfKa",
  "key5": "5Cdo1V8ZgdyHjxjof9SLRa3Wd4K16FSMdJZhU7JoR8H1oUbUHYnjpix5UXTTanKBk1KP44ZXmL7QrmXbLENLWgau",
  "key6": "56C8pb1QXHmaPY4MFG3671BP6x7e2ykRpBSSsLMY7N1w6wanWLo2HCJRctBLnJb4Yc3WhvGYpnRxzBtkSMbe3sLF",
  "key7": "3zM7zrE1XPvZVU26cdmFySotjHmcVEkcszR5WQTHUvsUp5omryneC8kbnjQ7nQjkAQw2yv9TwCRnZ5sPvcLuZC1j",
  "key8": "4YeGar5pH13akFEWiAuWvduVPMZJZ9Gp5PnCWvyLbM2n3g544Wwkvo3KpVXYKdUZaTq6xdDEPd9CJ67sv22qHAQV",
  "key9": "3MUkHUNijCzMrBfgbHQPQ2awZywatGLisrAhGUUXdmVAKiawZMCGerB7aiMTG45Uh452dvwewThAWXeqLQsdgrX3",
  "key10": "4WzMAy8GvnVj2QP4Jm3VGywUj6ZrHennr6c7d1TH8qnLaAUGakCbB1cBbESbjNA7ppWSiEtH4ptu6XeKLHHmrEb3",
  "key11": "5Mp4zFH8pH5AXrgpVrG4ct7WVLSNLujyQ7WmpVw6kmGAKyFmwnxvCmxNLRTrYMc7WDofFWkJL1KzSHfcnmWwYE7P",
  "key12": "3teMRwFGStvXbWyghacvLeuULGLVEuSn4FkqjmyTEoWATNsoh51cNokWW5jUHy65Xkzd7jw7nC5pvTsmkwjvBKW9",
  "key13": "3GLx4ABtrYVkqVHaw351VMEB3gPXq8mm2byxTezDSXpwfSMzsi5rTGi8xZmBMqzk8Z3tyWSaN9HfYuZzXDoouvAj",
  "key14": "tLGZa6LEuJiN6vaHGwXH2TJjGUmpY1TYBEbZxTDutx2MPbYCD2k21aaE58vqWGwrDJkexc5gjXLSVgwgegezxex",
  "key15": "3NhbyttaMCTUGfsyNhb7eqSMa2H3UK1jK9yV1Ahe6BvJKQUyp3FUafDMNVqPJGhpWRWxw3zzaKvLo1KE6eaKyCib",
  "key16": "3884GutcvmDuUQea1BZoMi4GUdooGgYqooYcqDi7xB43bkjjzVJJyP9kQsxwY2R1nA93kV4jVD3kpRz8gGtAiApe",
  "key17": "2ahLrdoJX3rEJEp8JPrW9j7RzsMZktS8h5V4iX28UifueR5dqHgiNUqd4qiPzN2ECfwqTQgy3JJjkPwNrNoQDwkK",
  "key18": "4xnho5iERpBiHj1VGpuu9Y34nBUfv4uSGSi33aPiDBUE7wy8J3sogizfrTPR13o2LaL8gskQa19fcjBhsm8uAyQw",
  "key19": "4oNdyEWHiLiVFN73SATXzhSPV8AL2fzNitNNk5AxhVN8bwCqjeHz8dzBAweLRG1UMdZsxBPRRkzTwzJEqmoZLJtH",
  "key20": "2CAxe7kc2NL2LPD8sMmHiCiYequMcqNkmtqzisuU5L2i7Mjz4K5Nur9VkeniWBP7pwHSDEapaARcawbqGGQPPeV",
  "key21": "5nWjWD2CCL4GzbmxAVzgkVnGKzSHm78G1JSDLBYrmAga4hJYYtgVpqMAbDRAi1CcssLXPFvzAEdtWoaU7ZwJEPe3",
  "key22": "2fM94odEaL4bCqzw7HyXTiKZGUNhZvbLYB1Mrti6qhxe3nYa14Xkmy6Nnjm23Xzn7phW3BR4UvPNLHgCGLHT55JW",
  "key23": "5CfRnDTysEchsnJEiZNsCbHxFws81Xqghuq9WqVssPKdCtL9RzshTB5XKrwAAgkpkDufcUv5Z8oy9i6oFG9gehTC",
  "key24": "2ohsbpwQPC318M3W9DMss44A1uues7wZMopNxtobm9fUpAqDF2AbpXYe4rXhneYhZkFRuN37yaZDEjYDs3o7uKB9",
  "key25": "3DHqL4bJAZF9zMkbAHGML7i9MQ9UY4cA2BYDNWoUUxB878DKqdfhtqjvsMQtWxy8tAmNDNG64SWrriVvKEYZxRMk",
  "key26": "3y8huux6zWmNq7E6b88S1J6JsiPrfY6xKidxsxgTYH668azwhmEk5KXp9oNj1GLmidC4nqHLxDvRjhGLrM9DXaVh",
  "key27": "3jNpDyzH7dBZP4awqtNgr93HnNN3fVoeE7NW9wAc93LH6sExn2yEczbSzMWrFiirpU3bVfJHe1KHJcd5qk34tELD",
  "key28": "LWgPyAQh6pDehfJoRHZuuiW55szkYkz5hCXdg8coibeF3EsZ9TzSwFZvTYMjWzcDdFSEh72nYgLc6ny8RCXgVt9",
  "key29": "4zTrjj2ebbbm8XsfgwiXT96WEcwwyvAD2yMja93P9Kj6odMy5MB7xVhV3ZLgAVfteaY5HN6rtKxWQV5uDY2z97Lh",
  "key30": "qkayHykBB3gpao1frrzYzeXpVvSBa7zn5EkKgneFdpLk17X3ySbZfsVMnomXvSka8ehX3fmzWqfAe8AG2umdcZ7",
  "key31": "3BnQ9cx5SWcMGFRLFEMCVSqeXFQM3vWFgQGJNAvou83KBeTT6UgY1dVEh7N25PpAXfdyyMGjYSzeDmNE9QCyHZjM"
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
