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
    "45rrbUhCcJL878VHUYT8h74usSFHAw7gaZqobho1JNsCNXhANEF8DAMQQcYosjji4f1Hwt1pGZrKQdqbhZsKQnUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26x1SgWNZaJpgVZgu1oEd3W4pSUQYFzS41ZMyg9kkvQLkgu91n23myJchBT7dN6x9rkGaNNx7HEARQdniut4AWaP",
  "key1": "2FvSUaLRDc8TuBEqfjWMkz8bmZAyktR8L7d2gwQqxSGx5hXTcbDs1gMcpJHB7XJ15dzanBd4vZa18qpXWf1zkpKp",
  "key2": "4i9pWWsmDWr5VKiYYnpynrBLGJrN9D44pibcPot5qJpENUHfwGM2NfF685ruojMVkF9Ca7pKS6vUzAMb1hagDY5J",
  "key3": "63yVF3tB9QDBFunfxKyJe2tsaa5mKjacYmxDyAreYcEUn1NBkMfcaaBe8KF3v2rQ2Kho5ozEma1uPFbfMhgLTdXA",
  "key4": "4t9SZF59rMJg8o4rVSDnSngj3ekCssQz4NR63SbYUg5YXMBdjjwcaML1guxUHjsuEgCarYHMNTMSnxTtQVz7upWm",
  "key5": "3y3dockd76kJFstc2htjZ5ZrombXCZZuZn8cEZGrXc28BQvn6gznRNUQeqv1wHrXy6yzw8TpSyHrfLsvasxt68aK",
  "key6": "AB72488FebepU5UVEV8wn59jKSCSJpBdi9fh4hwVfxJJJvE6Tzw6WPBVSSALGjYLyg3cRUcBbLyTkK5Si4BynHd",
  "key7": "4uJd9UCFSH1UtUkgNYPyR8yEVEaNMecgVx1UNG4F8fYB3LYdUppSnqGE1RRt2wrAfUB89kNWvbiGgCFXNDVPkUUA",
  "key8": "LECNh23ETgSMfC1yUDmcTMPG7HJpAS7CK76Rvxp69kXBKKqjbevW8RaoSgQaLxc2BeRVe7yyXDYYbTDiZxi7uYV",
  "key9": "3yq1eKEUgrwaM2biyerusxXpPFbk4fmw93w3y2xX3ktGCWvaJmFpgGrgdf8MYPkPrzR3JHTEpooj9EPVkh2jDexC",
  "key10": "2ZX1Yk9SypP5V2va6n2CHCYY1eMvYZrtzPV8WP5e9LrD2H7pxA8BLCGo7gYJGBB8WsRCRdFyir6zNFhWMvUMWhRP",
  "key11": "63nFYj9dkWtabJG7NC8d2W4aJQs2Gva7gTw2sKG2hUnnZcouvDnAuLiM2V8N77aSQtaQRcYCk8Fpoc5hWUhuECee",
  "key12": "fjbL79yZZezkyvxsZgtEaKWfJgtCboq2dpUkpRMPqSiab69ZZAAXHQBVGEjcCAiXcsFkmjhseWdh5dZcB5YkHC4",
  "key13": "4cKz4j7jAYhC5fuukNmNKZ5GhJSo6ECsvgZKJwwywSaFEsovQwpXiYxUPGAyh13dwcQdNADhRY1KttkkaZh94RwY",
  "key14": "5hBjBXka6njGPeXbNNjEbkKQ8mcryZtYyoYUJ8DwYzr4pHat7ASQD3b3RE73cf5fogYwuqpTzDy7cW2za1f8N3H5",
  "key15": "2bxHFPthA4xUhCAMwqtBzZaL2hVwbYp1GyWyf14Z93VUa6JAdrb3s6PDkYMTLwPpR8qpTcMxpHoyYkWzdAj7pFfR",
  "key16": "3ouUMfGF13ojxT8CubTdHVmXPM9PVna8cxd3WrzkFNTsWyWvDLWnJwvvWAx6E3YZGWNda3og8HRsffgVAbwLAn8w",
  "key17": "31nQxpi35h5RahK4KkpfoRNq1guV28W2hure9tHBYrYsTiUf2G4qhfi1hNE1dTGMHnE74zcRthsWBFWVwKGfmBSf",
  "key18": "2aFuLetXHEyoeDTpXmTR5hBVjZNdxxkPYvpiuQwXtkqeChCNk1oZhy5e3pP4UGTVuH9YbrUQ7vgSpWwMsohZQiCa",
  "key19": "3XAMtFX1T7gtqX7hqAyeYtQsoAUaPfEiaeKjWocAGv1UmZ2Ttp3K6SDZDeHtWMjGJChJnFWG9MaNNY4ELnhJtX9e",
  "key20": "5xTvTT3PMw4ximbc9mRBUtLNw4Kk7eEqop78DZf6BKJ56kz8ipANcCvP8fFwojBfyBrGsEyfFtqMNj3YhbXn4CPV",
  "key21": "GhSmHZKUVNyysWKwzxmQUvSJ9vVtu847CD9TEBfFo83WG8qEerQJ14tTLb339K1zjWsKvJhKetiJSbQ6zGs4VPX",
  "key22": "25S1oGgW77qu3QMWBnsbAkhYbLaLeP7f4iEoTbFcKKi4RJodaJ9UqomLXGmESCt8TKv9qu2rFoqFKuzNhwiWaC1h",
  "key23": "3zMHWbtzS24FRBLfaajxpLBvN3iT9bZ2ssu317gniXQS3HYzpeju8tMYbTgPXbEpwESwbfnmXE6rUztabwHvKUVM",
  "key24": "2jWS77pLojXZBd223oJLY3rpbJntq4TaZmUxLFfdfTpHDhUANfVVeAV8hKSBsUZFREGRqjRTsVzQixBctUJ8HdgK",
  "key25": "4uDBTjcmhAhH8ehFABeYJe97J86GnG4i9wmicSDtn4v1kezx72PQD6wjyMo8d9PAbfyoXuaUDc51Lk1gX2ri1FCP",
  "key26": "2piBWjcHuGfjypKqaD7gF3oyfrH2kA2QSzt5T2a72RUfj2bA4ervCNfBwRkdpMxvc8fxu3i236YJN8uqycZgg5Ns",
  "key27": "4nWTnKm2AG5vgmQrzd2mahTBmyR2uirwzVfFViV4qYYM8NRSniDhJqBNJVqV4CPkXrsTbSQ7fRhn8hsbs39T1139",
  "key28": "21ao66XbEpKtcLQ242nbMCHYHY7sY1wXgkSafEaE9UxSeMygBNH1SQbrCCGFLjrjy812EhjeJ5PNA8aYGvtLrGt3",
  "key29": "5TzLHdoYg29ybZDzzXXBRoXzgUk64b7SBvh62trDJxrcounjaQKTZSN6qa6w6Xrpu3CAcJE4TZDo6tM8MS6q6ydq",
  "key30": "3CQZ6vm9mZqGRxGbDJXhE5G5YWCCegN1UaKhu7ZyqmPx49vRfmZ8YHBDYPLDVCE46UZazGmQngVCTNyWrnfgXysn",
  "key31": "49iDpwEtQdjD2dMYahBpJA8wDkW4BCFoksyzQR82j3znPiDNyQDaSpYuxZXBaLGZjMJ5A2Mj5wR6fdGVtg8HXQ8f",
  "key32": "5DnhPwnUvKfVqzKhTPM2aX8qFSeMg4QMAPDJZjE4nrQLRR3WK4Jr92LfjeKjpD4QVh9EfB5oRpGGNyRjHfD8vj9P",
  "key33": "5XdRYDXLEYojWScaccf1fGqgLktzmZskgutgCPA8HQkR8fCy6XSuaJyawnC1rpu86auM6Q1HkeWepWw5pmtLw9b2",
  "key34": "Wd541NkZdieLZvHMVfh7FCpWbzQMQAUpWZvMgnneW9aYeiVFSybG7GCGE5qpGxZ5MZ7rbK6ERetYMVN8NM3pNfP",
  "key35": "3EgphCBVcxRLzu9cFdDM91jb69vL59RyAMUbehs7iUSvcctPHZPzp8CoinwGN1aArTm3oL83pL8xtpSLLq88Esnc",
  "key36": "2TTpVqnHriRk7BcfEZDLEx2PMuF9JUuhms3KzeVdujRcDvQG9uX1LyobCaJ4xkTqherMKcEi8P1Kg946QJ8JQpUc",
  "key37": "2Reqs3eodHavFKgj5xCUiVxSxE79hSCKWkc5KtpGFZHehCPgmUCWYhuyhp7hMC4x7CwSF3xB33z49FvfX4coGb5F",
  "key38": "3VbojJnB5cPwj8UMocDMVxoytMonoRey5uwozAKmTRqw5mca18vQCNp4J1MJ9beH4iy1i6DSkzhseW5CKBSHcmxv",
  "key39": "5hbRptdhnu8SzueKCQvg8MpNjUPe4ZcA9F27AuSQJ5r5igvCyVWBUX1PgNGyyRYSQWVjPtnuRUHRSucq52pE9TMk"
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
