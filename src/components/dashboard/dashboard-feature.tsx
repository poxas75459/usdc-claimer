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
    "65m9DGmQfnJdBUFsAcrqWR5BTT2XYBuXjVdvUjNiXBNkoeTxxCFAVZ39sWmRM1A3VbpSMnX8QtfLUrEjvVm4V19e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49K5uZKgzjangVaaSNUKinqGaTrjfxYY3UeNJ1HtsUUNDyywkWAJ1rhVk51gkER1UfEZMidqonkPk1YKSRcZvdGm",
  "key1": "46VoGjsnKAcEadJ8MoAXtm8mMhRp7Qpkp9iDP6GnkLta9LSht3zxaUBoHj9jXn2mvEcQpmbFGBZBkbXtY7f29PeD",
  "key2": "44aVdkfSymgNBaXPvy4dZrfFCkh8Wu6qiPLSrgSp4ZsqBb5Cv6aySEQ4EPefGHubZ3HcPUgVpP7P2h6TkWKKKRyv",
  "key3": "4ToSSQNqeeoS38Z4eBCvEnPWFA9HAjxacbxXsVuos3szasyyrhppT8zzAHXFRsMMpcRnqqSgL12EH7yAxZpZwJAk",
  "key4": "3CY4EroqFWN4UznTPerkZwmfmpY4k3XTbkcKFQfmfBZb8eYMnAVd62QUmRtJYBqpmU5WBaDWkUVdnHjLYuNvsM9i",
  "key5": "gGrDYh35SWSpeygFjVeXKaKMkXyYru8qUQVdTko7KvoiYoYMPH3vabbdUMJ29vUprf8gCSw6C9SDpUujL2nqU21",
  "key6": "hwr6pRrAdwqHWhDkb6jfHu6YbDo782oQsykKGqvdQm9f5uRv37fsteahrY3XhtxUHiMo3iu2azFJwH1ezniDY56",
  "key7": "tor9aP8fyMn1saavLbTkyvuYmEw6jxJcDC89mC72fnAzwcUMgzE3t5iEToANVZUxVBiWCni6QAreiMQcEiNZ18E",
  "key8": "4xuSGqQbQMEfwBKr24F798bpstiZiqmiiQGN511kvW7utL4deqeKeme2sGCBBLSAuqf9RdrVpVFoceXrybdvPkbB",
  "key9": "4h6dFcAQUrSdYCtB7WNE7yrtcHhDk68cdoxAMz5iwvPB7PXX9PfZwtbRR7K427oFQFbTYMmds68QWiSaA9EKQbik",
  "key10": "3ArCmjHhp7XC4CFrNcdEnNvjKH8h2W1PCaGXC3DLqLC8aR5eWttPRyjT5Crg9uLJQXWNanpXtbaHZM5S8TmdLGSA",
  "key11": "k1jdiGRHfnhHHULL9Jfc5cwPqNndPzFE4GHxsTxN1UWT9dL2VUFw8tAgGCpzM8MBbamy3G8b6KzuiDRHRYJEkbS",
  "key12": "4QQfwGgyAkdQtgpTQCLUEc9N11yhcmtFJ3ivtSPzhJMCLsiDGijmrg6KBavYp8i2XQ2MJgAx2odqwZ5iCJoRynuS",
  "key13": "46qhCwXuFqfjEaY6UdGH7CCfx7PENqFqynTyG8ZwJQqSGrapqx9DsRKjgUyDJ8DianuASZdD2mkmUok3cu9o6RE9",
  "key14": "yQ7G9ZA5tt6T993TPm8nzV9u6EL5kXnZQgcyqmKwuCpkE6nKPNRdNe46wJeU7z89Gu1ZUAuqy64ty4pwXdYG9QY",
  "key15": "JnHgXrPqNJVYU88mWCTB13NnnfRjz8iF2YsJosix89QZuzQpyNACQ3oGrhAJVjg6kn3SLpyNYAVSmUqqSAbsGuH",
  "key16": "4CYkWGEAMzD7ZMAboKEmhncqwKC8uhUT2XCEyjmZjcZAHby8QG3HtUhpK6uWwA14ywS14mgha7vVix4qt7D4bCD4",
  "key17": "57rJMXdTrxrvZa6W3x5cVQNh4keEBMMbWZ4fTsqkhAzVTQgD4CzyEuyN8VoWHMZ6iWPtarHAZpfBitw1FhZ3Rs3V",
  "key18": "SGwBUFjAvbzbrdeAgR4kH8vPAEHGEufjPAhx7xJQnNwkGY22cs3aA6fFt5RU73Xzqqr1SzYYTrqbydvwt7Uop6P",
  "key19": "5ixp8y17Jg2uB21Vz8HrkPWgUrfjTQ4yqPobn7WkQC8GpuadofJGK2LEptpU6E6mACbWbF5xdhpVuUWESY5E7h1c",
  "key20": "3nSeuazVC8sXRyDR3PQrMw6wPueiFafJQPbYYpDAYFH8aXaWxPwNxZDCq6kTZhqt77opCP6jQP8zNrHmBPxQK8aZ",
  "key21": "9ze9fUDzufzaomFneh2c42kcFjFfc6z2Ddm78Nx9tsxjMDayQFJLuhAV5wpkcEop8Lcb36F9QRyaYjAukXLdntw",
  "key22": "3Xrw7xuZy53BnywVFono57jgUpsw4L9jwhz9XnGX3tmUvX6J5LWm6CH9gzJnedq9AMRXpdQL1nzpyCH3E7g3ZPzm",
  "key23": "2LvoVwd4mZU6DzDW3QxmWQyYP5r5ppDPD1Cw5smytctXpma8JKZ47RkgaDPxV7z4awzogyPojeLSyJ5XKfueqp3W",
  "key24": "5odSdfFN8o888HUcRwBa6LmLF2DQWYjrwCiBp84HKSiR7QF11aruNfT1ba4jw8vHDmQkDi487CdzFcfyTWoedcWj",
  "key25": "2X5AiECFm8UiVAPbwRUpx8o7YkvJ4Redaf3jSWAdquwVGYKZ9cdsHQAjEBkzPxLReCGPHRBzjYCEdUxs7U3vnpx3",
  "key26": "3tzLeE6tzv2rkfNRQDiwUTXUtLWKQTbMcb1MfTYqzimUwofBAy194sJDQVWjuvPPgA5MTxRmBprVWj2pRMFLxfcr",
  "key27": "4zFz11XahGTMHZJbTzCJRgi67JH6GkVfUfzf93epf2svMbmJ7NMPnAybDN8ZqwLwPnM5znmjzSYWcFvPqbVgtG4K",
  "key28": "3y52nvkuYiBnoGVduoCsZNNc4X9jp3BjSzi7WTERGVW7Lkke72397SSVZhHmhozsemPrdstLaWG569cYoEpFz6QU",
  "key29": "65n4fs9v8TcGk4gaGFBGHm7asztwbUQKubrmg1bCVje6Ki4tufWLhugWd2nFxbwP8xL9FJqmQoqudWUQTrPGy4xi",
  "key30": "2n7jEymUvF5Lb77fqwvk3cgzrHTDgDvt1FP3cxPhTAtUeU3o724Zar1q29NUGD6HHX1sfE65nbQ3pwjREVZVvYhm",
  "key31": "416rwkiPuo4W6zpHTYQ9JZBse68c6s7DvCfNGzyYRuZdMEFrdtQdMsooTvyuXRkRHvEdoa9rB5AaQcbgDpsGptHc",
  "key32": "527e3iPtrQKpCuX4VzG7LvjhRrZMiEfjKKNMigqE6HvCAAUh8cwNchDoXd59iGjwJ3THkTrsRk9QKP8VBFnZgrYQ",
  "key33": "658Z4DkZhp7tv3t4prauixrsdJiZxHPw39Yzt5dAxA1fG7FoqH1GSwfNDeoX4Heog9HCwVtVnR8WqNcTrMoBRmLn",
  "key34": "4XQbrbV2ZBbt1uTCj4gQwgSBwHGL14VeKT7GAPpzqok6QTJBVkohZYkDqMeg4cHBYR2Z2W2dnKeoCAwTQF8hkZvy"
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
