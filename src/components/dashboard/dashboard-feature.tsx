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
    "3t1NbjEz97hycMVRm5WwZ9PKFHJK3dTMpBidebxf7VxWNYbbf17pexWZztCf5KLaubJLSoXkK9UkmJKEGo3ns846"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ebRdh41CeDVwrwsjMdHAjbXFAV1FUC1qzT2tkX7EbsxkSDYMqs3Y4GrtLH3R7W3WvPE5fSMK2wVEeiLhGoy6bZZ",
  "key1": "5xrDBc5rrvVRpTt1eWDMdXqi5m3p9jtuCU3EKiZSRVJgp2X3185BWDYQGsZK1jrXg5zQK1RNDGb79WiXJJMwt29i",
  "key2": "263WWuyr7sZbDDabxjpxunhrBoRHUFugpA2uZN26RriR2r4yyX8uZMsFYDy111MTVnrTaK6x4DDEFGWpcW3D4MQL",
  "key3": "2xjj8cm9fBvBJjMsUNymurEqnkUzwXi5dnip2GT6vVPzgGS9LjBbxZgHmoez3B8qVf2e4qrmn3K6rgo9miciCbpX",
  "key4": "64xQYyHgE2565zE1M8RHNqeQxAjicjdysRTcbgYEv17ZtEumWAXzhBMM7pnFbj2szKyzMCQyzw1TZhjnqRVzMJNG",
  "key5": "2ZXwy8S7Vg6YTFgNRtN1xC89gC1gkFRPT3EZaQ3JJ4S1PWsrvFfMjwEx3XBGcZtfshcRbFoM7zL89w1uSzRpUP4m",
  "key6": "9Ek2JnQ2HpZRFktqdJoECZGp7NFcCdYkFBhfEph6sumukNL5xgJJosLCAtW1T5GY5ocnCm3g6QFkVf2B656xD5r",
  "key7": "2ttjKX7WvDDSK2PmE1uvarohye1w14t9aAz8AhVgVoX3XszH3Btq4sDXsHuHP9DtfRybMkJb77ArXq8nmJ8BfqJA",
  "key8": "3yVHZKVZ7v8vdFepFJnSS6VuwhEe8avAkrrarwWAxDq9x3eTreq5NiwBkixy8rCaQRJ9CcqcrkGNCnXiNWmfQqSm",
  "key9": "dgKdHuRMMTok7YK5SnA4MS5ojVb4S8HbdW2jv1SEa6tmZKDTSZtAGMiyzYEr5GwmBeZbprFvM2CJbMyquQ5Tt3E",
  "key10": "2YziVjx3ZUPcrFvNfnwXGYZaj4pLKEVFkupV53oMijnjsnU2D8vsWR8UXg7xFRiwenBF2ehdYYFujijvFnMfuJma",
  "key11": "3J7Lupd8FywggzxJcFqAnnVLZFBoRYEwch2KRiw6b6ENNLx1x8ZNwRAmPg9JoSgKLXoLKXhsQgwbqkoBUAJumurz",
  "key12": "5YpZKidmzY6assLwRnBBGcVyd3QRMV67MvyfHqERj3gx6fqNbjv7upHccqhf7zrQ283YihBEML269YzUYEmiBubU",
  "key13": "n5pDkgFhVrJzyGyY2F9kCf5hD9nfCpUi3ZzxvrcZSFzT5vbXAJ94ZERfjmLHQJPuEk16STJ7upTF8MEio6cwyDX",
  "key14": "5HZ2zp1nD9mMLLbEm6d5GGQnFS7FWRAehuNwYisgQhKjpd14NeLWGKtSC8ubTqGoZFrU2egEVihzGkZC2gSpNamR",
  "key15": "ZE836EXfaYtrfNUqwEov4uX47y38jD5bEWv5Va6NxGh5jSt1HbRPFdsAL4SiWRRnAYEt5HbBHtG3FxptfBdb6n9",
  "key16": "5gQir8H7uMW7UyibzGhUPLVZpvJyPdzkR2i3ADX41uBgmQ4gZTTwYsGVyCaY7iX3R6HRx2z7yCVukP1ufLgbvDTb",
  "key17": "3zFgywJSwbrNf4XCWUeQT71Mv5pmEfEUxFuxFpVMU28meipUMKUt8QBGmfaatcPA3i4jcztMydHP1eowA7KQqNa",
  "key18": "xSDBFCRwEBJYCQSgZkaGb6ueVFa5KgTqXR1TWKsGFHTPFFwFzhvhYWUtAPKUbLVYyKG78YaXKZ1VhkB13hhdgnS",
  "key19": "2GWSwdFZFxQM2oYq3Qt8TM3mfxxVuTMmCXHFNC3zWn2MrzVEYMttGsTZrz6WepzU6HgqaxzZ6yncd2BibHb4zfsH",
  "key20": "3i2n5LKvekZLM9wpthetxc1vn4xqA99yZsY6sVtBr1YFf7FKTjDFoDffUUoiEXjq9AkjfLiFEsu97DDxdWYCm2Rg",
  "key21": "4pE5s21ECYG4MVSkj5FXSUMDvKMzD127A9hkmc4fWxgXAxdViFn1hiYzAsE6aio6oZgFXEYHV7xc5UePYq42yHc1",
  "key22": "ALWG7gGhZ9EJNXx5jqYCrep91pceNjJqDLjv5F1yUkXNaxgRpYajHs7cHvpd6KpYN5RK1zabbe2WijRJtus5e5N",
  "key23": "XzbTg5QFbuqcq1ACEY1FuTX5BVaEM81KnNyNDUzoFR5WWQPde6ng6SiTSU7om2UP6UBxKz4YYeUSTKhB1P54hjn",
  "key24": "4n5JMpv5TeHxosFy2CqNqzeQ4MofL2DYuijDyAyv18jd1msXMKkUxAnyBQ9zpWYRxcpza53jQnG7zsuZ3UshPiun",
  "key25": "2ty3aWyKAnfth7pXCxUEC5toA5kNcYb2EQciDXzKFyW9qBp9f9HjDkYXipMgSi8a7uxmpGR1y9B8GkdbBSD1ZXx7",
  "key26": "gpmcUzFgTbbf4n4cwmRYoMuL2MC9HSugdLYzccf548GcBeR428xo8ZX16i8etDenp7urzrYiWmV9Gsm34CQowmw",
  "key27": "5P3JuBGn45phXfQyA8gdtgonNdYcxQ9wWjjmT5vkU5oiQ2VC1EbYhcFg8ZABuqZrVBeLSeBdVytppd8hDGuVm2hh",
  "key28": "4YtSh9p78mKkqtzbK2f8L1bPGivF32QYkhQYyC9rspbdxYcixfuCuKBXeRLqjrB793xf3JxnKtyr4ucZTQZMPPtP",
  "key29": "4t63xcLFwGrzfhjNwNqpfzvhYrzTLBbK2YpDDS1qqamf733cHTARZzvWj5VvSKUoP2BJC9CehYXVTaDEcfMQohJ5",
  "key30": "2h29Hkmr22S1JJu6WLN2f6i9FoksWhS4d1yT339aSBBN3VAdKCFzXBVtiTZCL5wBpw7SYwzLfGwKxeKk5LT24w4x",
  "key31": "qXV2NgcC1B9DkrfhzETWhpV93dFm6qRzXHMXjFKbTzCK8oUrBLmAiJBZwa6MN3jnGRqzLHCPfFAE37GRt5UiHcd",
  "key32": "4JsPBP3aoAUhijCHTd7SNhQMHRbCGhdHQ57eZtgGRHDAVetCmjnd4RcL4yE5J3SwPHW96DbVYKU9nfDgBPpqUtjW",
  "key33": "2fs13aTBfRJhC76cfhp5Cd2kWSz6vziFQ7Xk9zD2qYwxDm3iBpttfeoDuBJj6UXKUmDdYXDsxW4FHT6uiai141pM",
  "key34": "2koTU9Gb1tyndAyEMuq27gPfryynHtVpktUAFwch7tXmxog66Uo5PQN7SzPwgu5dj7YsPkGTztwWpyRsoAXogVb9",
  "key35": "3Cxm8grCsAV9dJ2ik6SZoqobvMUVqNTMT77LLkivwTb1wLvzG5P1X3fVevMkYFdfTzheF1JF8Mg9QhQqsuSLYAdM",
  "key36": "5R95XqijBgLHVPmRkgTPMRowfnRHLhRnkmsnzzDuMZJkgvr8QvLtPSB7k2yL2W8uzeCgQGfS9tiiXskZBvqXHsxt",
  "key37": "32xGFfF7Fm9t1STJMhukf7GMFpBz4uTjff8pLWATh2icLZynJGEo4c9F4HCpwH7Lq71dduPkqCcoDCQHBN7bJBHP",
  "key38": "49hZdhSJ5swuj7SFGZtKLXW91Uofjvb9ReE7gvrsWmKM7q9QwZU1ScC8cCU3dxyzChud6Vekr94SjuEuAv1uQ62E",
  "key39": "jfqdJkxPGcWLmzViGAPeJLjGjVzimrMuS1yhRovVqDoNq6XcpefDv7iXP1Eud9zMabaYqss26nU2JYbhK5z7T14",
  "key40": "3pfm7CYGUf1fXrdThYvmHQcSVCAhH74LStzkudK2pQ5HmHtqAF5Y4H7SqUHGZWL3aZxEnUb4iuNWbSJhghXj9nfF",
  "key41": "2fYaGmpxbAcPTiBoqzPk3NebdmZk4HhSr8wfANzL2vRnoT1E518Ay8WAso4PGUdT5tYgvEzQRQFtWs28xdqcnQ8N",
  "key42": "bnoh8vHVmgniYHDdSbwRcjXGkLENeiEahL6PNgBj8xqtrba22bJ7vnGfbUcsaAXy9jKeSBvgDdoJQxaYBobwLmi",
  "key43": "sSgGoDoH6udTL5HdV7aFmgUZcjBBzmHvdGU4zzVSjUvH2bjc5aFyYw7Pk1VtHcxQXJR4ogZ3Df2TEcw6uWgMXZ1",
  "key44": "5B1EBQH5MuXrYj78qdku5LncCBfVk7eVgrQLmaqTJ3yRaZZhPbAeuxq5qneUemTGbVSu7LJcna5i3P49GZE5XjFL",
  "key45": "5KNRSxa2gTKAcvu88aZjFnmJtysoih11BPQGNKKTutAztowpU6HMLYuBgKUhnqvmBLSuHNUdSjgRxv6NtsDBYoEx",
  "key46": "W9bD8KPhnQn3e1TKqw7ac96DAcKfpUGF9sCCBSaFgnvsPSLLpnuuyzJC1mQLiPkbA7o2bzE8FHxN7h6QoqSdxqk",
  "key47": "4UVN42cN5vgpdTs7TheSDqye74Mjc92iPZyBFBTcowwX3V972cLUrN1X2eerUsQuwukUMEhqJSMcT3JS1LwVUfi9",
  "key48": "wJXFkUnW4fqBP7PbpiKZ8oTPoRN71pLsRFYkCcik9WGULRCcXFYrNfWXKz9Lo6mjDhkx7wZZvrZUmdYpMGb4LAm",
  "key49": "4bdcoMhaW7QenhpkGXfasnZDK9TqAS1xwUMCdMvYLSBGqrE72QXMEW5cYq9QSBjjs3qPnBQd5Cu9XTspxPS27bjP"
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
