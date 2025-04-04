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
    "3a47BZ9PrdvGfAY1eoCymDYcoW97hLqPCwpgGHkd5dpdxuYfPDZG9DyZ7Wsns7gsx2ffgxmLrgGHcRdaXNPDGRga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nyuhuyzjwQLVizyNCQPcnWJKAdZWW1XksMGVo4yS9YW9kvGxbeni3vHZksU3AJULvQr2PtsH1AQUmYfa6wdAStP",
  "key1": "2dRmRKgbmdeKY2ti7iuwanWMTAksb3vNrSnbAvLMRx1RZQqsENXuonZcdEP7G2KnDbrjwQ6TzeGs5N1Nnak7RXL3",
  "key2": "2BEZhDT6TaXrHRBoZ7erRSY92JK6kMaEsoeaeZu6gqgLPWkNRwBfp2Y51T8eUGdyJUWgpEAx6xaBks2WxD6hskyn",
  "key3": "33LPPT9G4PVAfGTm9aFFbcBSZ7oWkSxNcRXFX431p6fjBUtthjXBZLXbGztnz9kkhxfHfcmyRYD68P1z2suHKEb5",
  "key4": "3ynCVZvrFxJXk4odR4YxgsJMSsmTaCGH6WPgNCSmE2jqLjgqsfmF1fP8ujEPDhRBhrPbJgFmfX4z2unzi7vefgbz",
  "key5": "2dcjnsuVt2dy7My9g4QXj3DcwYWt4d4GhxTWjUfYGJLrR1pifPqR5KNDh4xCbtijzRUpA2h93EvtW1w4VGCnTUXg",
  "key6": "27TWJtfXNitAGZuYp2ySm6EHtFRYc2FDKarvYMxhzEVsihtdz6sFCtoxGXAGoiZpQVWTHNH5P2gH6x8CdUtnzNHb",
  "key7": "JqK9V6uxJkujTH6R4uWitJ5g41hpJD3X2UAXJAxEUuTBT6KFNmeakf5t6jVS1en1YtYsTeP6GAGh9ochYcqUCB4",
  "key8": "5vfgHZ1fFPMM4YqQHUQmWTHVTzzGavFDd1XZvKMpCiQcdW1eTxdUWqZ1xSkd8fRmbRBJcmqxMDLXpJJvGcDyLNdw",
  "key9": "5DeTH3J47e56qxnbRsuVBEqNFeSfue6FPXQuYEFcTkkKWWC9tiwg2wDLNJnPMjYNSSLnV1rsXSxKQvLn9rZWTty3",
  "key10": "5p7CCW72crHspk9awLsGzGiij3sgjgsmbUWzATWQEvvWVY76y1LL5MhN3Y81RLxhgaEzgfJC95r5jYWPRF4Uutax",
  "key11": "54iiAXPXongQoFu5XvXUqLpiZKXNNTMaJSUeptjyubnjpBfmTKF7DydqnvMp7G44iwCXR2U9SN3mM7QSgPXoX2Zg",
  "key12": "3JXEczfpaiKxEpxS5zZ1cbYtNaUfpQJxsJ6DsvZvr7vJD1XP1YLKhGcL6dXfJZxPYenNMoncBbnBmNqGPJS15kQh",
  "key13": "4AjNgSeTBnXLUrUVTPwpGUbEDDATVWPFD3CYa8V2Xvn7QWTCEkYBTLF3MRAXgTdRFh44TuPUVKDXurxhuRuiQaa8",
  "key14": "4p1YQtuRJPu7nVB6V53MJRLzdYohqSZrWV18cUxCvxGwy4Sif8BH91c79y9FJLwCuYUfghWbKziY28N3rJurKkad",
  "key15": "3ysmSndVqbh9J18LAMMW9nJY2RRBZrFwjGuQu1qWYiwUEhjx76PmigNuYa9QB8zm1wFqoT6jZb9X7wWELcsmNgDE",
  "key16": "31Y2aAf3a9FJkSsGhiXVEMBZ3J4XVWcRsy5KrbSqKvuR7A2qJtBZm2Gc5Tcwfsvb9gBVi6tEBpSfgnGmiSrFVesj",
  "key17": "5j1Q3xCt6zxgQJ4Asp22LotqvVR1UeJEMmbEaLyaTH4TrHfaUikoF9zjiWSEYJeXLccRuvDrsAAMpGHCapZCKpi8",
  "key18": "5WwJSa92kdZhZmnKBJTaMAtY162fVK4eaa6pa7Yoz6ys7vWh2FLMUXLiArVQB3W5gN6pnm7QnZreiQCJEtBUrGdb",
  "key19": "4fKAQFuLhFPbyd64CDoCZdxrhqY3dDmf6SsvmnkEqipV2XZRvSxGBn3DRLH8v5WrnYfkoxfYVw1nMUn7KsVjkxPj",
  "key20": "4K6TgbRq9DBTseJyA4FJim7QuiMnxfvxZ4YUioC9oBXtXoZnqYKV86yJVfELacVLUQbLCrYxJpXfytfVHg2u7rFo",
  "key21": "4JbZYR7VKYBNPrRJtyUqfsonhiZq16Nc9PPfVvZFa3q1ierahrnBxMrDNuG7LffZDbJipuMWtomLcqPKwoogTKHX",
  "key22": "5WdXsASevBYw2CTD8eJ91BaCwDJJUB5NVVjfYSt5uhBdwSJLJwQGCjE28uFDmSL2RrpXepSUDADE9LnG25tJR97U",
  "key23": "4Dqunw2P6k3FuJzdpbN8HpBrM7jRfekDWkMZExp27svaDKzNrZA8WxbdEgS5TDjRtHnRqX5Dfxnfv95zwbQaPgLY",
  "key24": "2hHWDCv8H6BbbpwunUAZGFu1iukYnmBzR9Pfp3m79dhu6giJxC2Bxm7EBX8cdgkiH79Siunjx36xAtrE3icpeyBS",
  "key25": "4kGDbBCdXPbfgTt6SpdYkut483vP5fpkNDhhRPhgo2DUH9UmtSaryQmzHe1KUtGQ8cyAGQrKUcsG9MkKRwEqojZ2",
  "key26": "3Zc6QurPJsvrBrgJDSfeyVVp8fRcEQ48ngxdQN8C55ZTmzKCNRXD2TCEw1ZQozLJ8s7x264EhhS6bhRWEru6QZ32",
  "key27": "3rTVddmraTFHiP7tP6AomSSPPkv2iAjiAgCrer9YXkWemJQx7JZdPLTV2DQ6oXiyEWhEb14vztYN6pzqFZBwAskM",
  "key28": "3tLxFdPzsksUQLPKonoGhkRqkF1kRcRWzjEjZBrhAYWsvv9H7GWpEewF7H9Rj3UstQZaaSH33J4AMtncqBEbEAmi",
  "key29": "5eVR4ph1TjMogZNAUGQ93iZWELjFUB2dacBeffi5RN2XMm4qJ5KHaYGgoDMAaauReCuXpHBKzZymUojUuykpYRSq",
  "key30": "4if2FQdAbnwciLGNF9BbnCp4VQ9tsWCZTtTCFuP6z2ntC31xPgzW4SSyD6vR2KZszCWD9fpY8bVLNroC2utKQjkR",
  "key31": "5vTKKUQfz1Wx7ksusoc26js6zy57iwrjcTeuoy4QybkHkWaCfiuXkHe9NdMAvCsdG3Pn9T8Jb5P32eWXUY9XiuuQ",
  "key32": "5XEkZJcPNp474nrfUzufn5D3eBveEonHVK4mV8z8HzrwhehT6AeQTQkaudrAY5dAYsgDo25BCaUxwaBV9VR6hbLy",
  "key33": "3GwAeBo7hz6diriRB411Uf1fJ1kDLXPpUBxpKeM2DM8EFfCdXtrYc3Sk9mgsrRB9NZ7H2eF2puascFyvDwYHr29m",
  "key34": "5qmSVBsQT4aZgF7EqnttGQjVhRidmAMDmdaZTRAZYXWwfaDjTW7KZQNUyNcvPZe8vsZJbm1quhfqWSndQekx9irH",
  "key35": "2U6iQ93X7N3AAP9E8kePxSnmtpjpnnSp4hSZuRhVotwC188KdnwqLMcmfCSRgSuY7crV87tzLSnLCVSzKk86c8VC",
  "key36": "29dnyH3ETtjuceNPNqbFrcctivKKa1NCmK3MP2JyPZR51TBNb7igXa6TKjKTHd9MRL45Tz1aHhdnmnAfZRBuE7wx"
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
