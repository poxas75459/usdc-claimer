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
    "3XYSUqGnzLpXaRk4ktLdbCwxZWzNTGe65nKSKcoGtbAZ6YqnjDHZpZwPYtQXazVdCwK78t5S8LMJa6VzTgfhSz2t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RSMtRfrfzTZiAvCLP2TAM2dmDMHkMEnE6HWrSuDu9dhhejXZYsD9XY4Dt71nE9P3TML1d2s7k3v9LaPzdSMvKEZ",
  "key1": "5CZQAmYL58dTQQoR74K1bTcBRP5FB2VfGZeMqdtbP9DkBRMAeuY6izogRpHbXytL1yUxTurK6rpdspjLx5yBGbcq",
  "key2": "NdTEGAv6NWiL2Lgt1s3XTnUpk74a9ADjDvK6E9f2k7AKZsaCCFbgWvLG5EcXrKG3DBwjrxNL8ddL9etTwgvp4cM",
  "key3": "iNZfcboLnFkD42KtpkSjzRwELwi2jk6GPukgcmQKLsKBixCwzndBuUBEwR9Qx2s9H7NotrRafX4GLfwQ8qeTC7u",
  "key4": "51qfs1LcNRTbqRFDGwyrA2NdDKFyREbLmdLfA2pBs5ymjkCcxSJ6y36ViFCpi4jG2Bdm1xkVRw8fPtHTEAUEWKXu",
  "key5": "4TmyJHXq17N1wR2Y2VuTC73MCQCyZefzDcPErvMemSRrYrnudtYRpHR2x1oYzeSJGfdREWUi3MkDZVEE6iDNCYyi",
  "key6": "2Wuxi5TiZYHendB571Z8mF88TyytJjsMw2VgcHZ1fxCPhmed3tMXmEmt47m6DMWwasKXCg5tp789PVqRPtpemuPW",
  "key7": "3Rxi5vHiRpLFWpzw9sVe7thNxrVgWYnEhLXRpmuz3ZQsVJUVVrBWnoqAAEKnrGbCQQ8HSZdMNzjNmUSRc2eRBpeb",
  "key8": "4BqJDktzfmf5iakSMDBoT7jn2MEWMz3CS2uoQEQPFhCgcWr3p982jE3y2spdx6vpsukrvod8Hdx6Q6qbsVrkMJ5K",
  "key9": "4P6vXhQpaJG9BiztVnjMfFN3bk3Q5n522fj1wK8f4y6rPt6Dx64rAkDrPMavvZmzdo3HHeuT3AbsbXf8ch6FqM4K",
  "key10": "X6k7xEDWZKHGGMacGjsXY8dvWbjVN9bzhZfv6ZeWspdxgUfFqJ8VHWegCpH14sLaq9MunU5hWz8WjDG1gmUFZ46",
  "key11": "2UrrPDhQcGYzz5D7n53Uwoyz2RhqKxJkejErukz6WZX75ati6NJqB2fyjVqGFu7XwzakEWHnLG4XHquzEC7LYWp6",
  "key12": "5nn3QPtwgjy1GhFwzxokEs9U3bW5h9b8WEGL7JqQmqu8884kjtsQ7njSBAuGzmh6DEA9HLuX89gr7jrPT1jyRGHd",
  "key13": "4YPSyLM9P2R4cZw744moKshj7NbfJ9W3rRioXE1oqtUsgAiDutNhvz4rHG1byZ8v2SVeXpwTmBz7S2DQzMivLoR1",
  "key14": "2ZdsDR25BPHRuYV9vjfU2Gp33ZWj34AtuRpz2aHVtrAHwWsWQyY9tR1dYRp8wDksqnJcRMuq6w5rHs6hohgzTC2f",
  "key15": "Nca8RpKzsb2UJQDDzgyx9vN2oCCUawpYG7HRgUugb8QNfjwJFkYLuoREXJifpYqyA5XrSMaHkZkzfzVkyeYikei",
  "key16": "2frECWKZ7ip9tFwxELmFVb1z9NJ7gULUuJ4Mab6boL4ff4KRUXiC6kRefjkYQYeVgoZxZK2WBBxQ3xTzDUnhgF38",
  "key17": "48T8pz6zzeojARk4HeeMcDbRQKEDVpvMVpbvLhxVnkaqi1qhBtKxe2Jrbq4cTZkHqdu4pxh1jWUsQGpBV1xnYLjp",
  "key18": "3JC5cywthMQtPTsf38xTTrCCCrZ6sXCP2qsjgGrgfTskVwmA8oGFY39RXHbFkgmPiXX3UgW1pBr12ibqj7AHiTww",
  "key19": "2cJ8zM16hjdYCHRTVhiNPkwoF1Yzos7XZT7ADUHPAveUi2eBzM3mtfk9CgFaXnyKvQ2PvPWcuAgnQAF66yQbMRC2",
  "key20": "4KrFXNUBLQNvNjuovtyYERr9YrETxeZXpoMTn3y1uRrNgAjLFJsCNsfwaYzEEBtGHD2NAoPqZT9QCJBdGKdaDEHk",
  "key21": "3DUk56fJDFQZo3z1MdXaic4osKkVya2WJ1yzwMRQqwuiUs8AbdPF4jZZnwmUeazTdMbmqsspuqEx6k8suM7MRu11",
  "key22": "3EEqm7oAhXR26bjjvczirgEjrLzerhd6EEhFJw77roixYaCeLWR96cMSD1siYb8WWx7s6pHDNpP4ZU2dqj1eKgJz",
  "key23": "3FE6SWthjkFEuTfHGBUX27mGnLRFZXQKuU87cQ1pDP3tAVG192LVwBQXZVdhQybWGNE6YRk5tnkQqsJvvCmwavaU",
  "key24": "4hgqmjogAJFw8jwmJ3CdG8Ho72aEft9EQpvHtjesQghqzkcvLLQgpPKqVgWki3Ua4idN4o7FSWoExKbdXzXrAoeD",
  "key25": "4w7hAQv9DyZfc5pD1eg6fgoJZHAbiUeAvgn8NEvnJxaCSd14B4crAEKFhc8RUYLHKJSbanPNbWxb9bd8y6CLgQAF",
  "key26": "4d9bp5B3KSNHEos2VFEfBKBhAui3BwYecz6uTBvzdfyxKztRXmCNLSD7NMSq7F8VoocupjaPXFkedgUF1fxJDo4D",
  "key27": "5fS533smmMQFtdehtzkN7ig6CBYBF86Q9KVvyiw8CUeEZyc7Nz8tEmNwEZHujeQuVWrdQVWNWGf3UiPt8X7G7d9D",
  "key28": "LMLVHusrGt8gABJcuqYyUXRBQH11Vdk9ZYUXbMTCGoobLL8v68cWsnXYHduuKEHvtNFxHAM412vm2vHDMVar2vf"
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
