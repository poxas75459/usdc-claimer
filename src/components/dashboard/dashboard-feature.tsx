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
    "3jkiaguJGq5VjSWxzsDDf1eQVAKWnXL7q5LchrFhU16DF8SdkRrwJJiM52jsHK4iP1nfGmKDN1QQVcDHcXsGHRy6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Aom2VjenLyV1gBUpE8Aftvk4t3jWekGuJsSnJiuwrp9mYwaPuhC7EPHYARJKRuDuKAEVvynjSTvhXC7zK6Tchdr",
  "key1": "26e5Beo3kV6ebWFyXrpw8dWxq86ekJ4AJCocLbEDhZs9csMTERxqdV2HDevY1pLGxksjFQkLJRFMGmkB9rpdPBpH",
  "key2": "4RcHKvLqmEG57qkxFC7QCcHzhA9waraTPED7vpFKaDp46Ae94Mx8JyiTMCf2vLSHp8DRknrUYurrCdzQkFtws2PS",
  "key3": "2nvUXJGchc4Nt6Hho82SZEvYrX7MueK79pMJ7n8EghVRPz8iDsfCd6SWwL4kAyyAwVoWrFY6Yr9J5mWkju9Cw8JU",
  "key4": "2s2VhceUFbHX2vPWWGLENkyNSkuGsz2rkbn39PnurK6zxpxE2biDM3d7bvrRkYNNbH7Ci1UVELLfFZKF3NUUFRe8",
  "key5": "U53AnEQtu2Nx1mRSqsqTz9sSZPVNfhbhTX5TAFa1aEvGvU4FT9QaRiiVdxrAsoT1mxmDb7acy6Gvi6e5VFBmYxc",
  "key6": "38PFZuquBVYTusQJsHV984ibW2P8B1YPyWLm115F98NFQUJTgh65Tg2X2t9A4xKEfrJLEyhtgvZNBYN1kPFDEHP7",
  "key7": "3x1U7sJiyz1pqE6d6rYyFjcK7LgFJdUB3zhUFQ14tqdwry6gMyZG2rshvP9C8NfjAbsWFpnyN9T7jqUgwNBhT6ED",
  "key8": "3TpPREPhQHFeP8FCipFxn2u8S1xxhnaY8R37ff7WCBEtHvFVosJZfZWKMnNNwsQ8RgV9S5fdo8ANPJuXSP3BKb2e",
  "key9": "4XVQX7cAm3ECZtkuYpYtvnWARxh6R6JdFAdPFfRGmhtWkXEJyJa3vn4HAWFuvNuUCrZ1XN5vd3aM1LauGz9XvM9t",
  "key10": "21WBrmRw8rbUFHSH84cQ6b2DtZhdRL9CwRfgu1jwa5axjcph2KiMVpDqT5mruNGh3M3LugDg3ervaCd72Ghmn1XA",
  "key11": "3Nic6kneNY6HKNzomSx5Tv9EnpgacQ7etyf7vUY6TNP89gPVxNBbnUM6KXuWyBfwgBm5miwEwPLdQiFeX61QHdqn",
  "key12": "3vtgbUjpzMsVPYdaiP7FaRG3JrvQoSJHAA3C58fgDDVENHsYyaJALLijTM1EuweW226eduNKVRg6eokubmFzPE6u",
  "key13": "4ErwhJ3E7WwbRk2n8GLJipgj7sFEpv9iJwQeHj4MjdcGbBBvNhPW5jcGN4xAQQk9Z6w1vHrHbmoPvyk2YDJHqFBp",
  "key14": "2stGwbpJ2FLUhHUG1wN4vVYs1tdALghsqKzYtmem5i2E2LnDEwd97RFFnyUiNi1LcvC4nCZaBW5V8P9WqgqXCaSJ",
  "key15": "44QAwZVXmPVUKZoEfi1x5uhcA57EvHNr1nR1X8gJKfcSdd3XHJHiX45G2Pgj1QMmgYQqPSRnsZ23YYXAfApwVMrx",
  "key16": "4MWdNazD29LpmUfDCnAAQ48mY9jctN5fws8qyY6RVdXiuFf6Ce24XUPQmreLDbnkvt6HqptxFD9eLy8YV9pxoNup",
  "key17": "3wtBmaQhJ8KQZ7hHdowy3wf39WcHY1KYFJhui4k1jNenxyAbWwRtS8GMTKVwyBdbbmyKh5jBAEi6zweqa6Spu8YQ",
  "key18": "3UEccTYkDQMS3WfxEYJodFSAJGwW1LAtQ2348nc9J9HDZnQ4VKuaxboaTpk6GPn8witv9jZkdESLiZutgGXwsKmF",
  "key19": "5NaN77DnSbDUTqGrDbnuaKGtFXFMHXPR4UgYVU4kcF6hvR2WojrPK9thqxttzXBmB1jq9A36KXVySzg7McDk619m",
  "key20": "57qfTYkfBNwEBS3EoS5GXstEAzmuKLM75gCgQdPELKmspX1s33t1xZwgE3gvzUVfr2z5FmzgSGfHGCKDYyrNgKz2",
  "key21": "41h2LVgZqaSc6DQ2bFEL7gcFHUX4Y1QvyPLzRfpHoWeT344Mf5t2kCQGVQXDzm3hKu3WrgSoWgdaVfW2BnKBh9DH",
  "key22": "6472qyTHX91XY55faGchB9f7aw8kFoPPPuUSfjKnMy9jeaJRqF11aNUMbiNWtsFhL8HvBDwffbt7uSf2GBVYWhAr",
  "key23": "37faWSNkDdNh8iUyveS4iPH3MxEhECp3SyYF2SDBxE5SoksKS2BY6VZ8ttQN8wAgs7za4gVwsAv4B1ieAo3AqnkD",
  "key24": "28iMEDzam7sQHgU5xXvq6VQbxc13TmeacNMtYPNqozhv9t5TnYtn9e2JEFXWZfRVcF5nJyoKTcNySsUKiVWsNTgm",
  "key25": "3MXaCD4qtAWQzWi4NpVyiarTrN4BgVDX6PKr9mx5W6toS47UJZkgi9ZHFLsRkfLu4uuRQcrJwDKmSA4jfFPFYjMq",
  "key26": "VyPbjdAMDPb7H7TtdX9yq1KqYp6jU3S87Uw8WdhuVbp3H3ByqheP5krMx29DsBK2intHm6J3AqMnEGszn2YmmrV",
  "key27": "4BkQmGW8u3MCkA28QFAojdyNuk36AucArwiNiuKagGrQBFAKMaVcGKcrWBonY57ZuPB1WeJA5rgMoNyihHWNkMq2",
  "key28": "5TrezLJp8ZirWSjtbi5LQz3kP3aQwx9C6LzLZ8sCpy3fLtm6ME7RET246vdJHar2F1wHABe7Dyd5N6B3DrCVc67",
  "key29": "2qUJXNXhu5ZyXg9DXFZ2AbNrWBZ9U8vbngdx32xLSuRZBGUHP6difyURV5HBsYkCWsMV2VeSnTjGYiBpMmMdL5i1",
  "key30": "22zQHbiSR59ndYd8KpPmNJ77Bo16TcGEMzHmvjuABn3CpHcwnRt69zQRkejgziDPxJQLbL5wLkdoWNY57kxQcgR5",
  "key31": "38vVy81g9ZcQwXGuQ1LuCwzfBSSN6DGLqCgRa7ibfY5cZ8XzXJYnaNifpAkcuP4cJfEK47J9Ywt3CMXnJmB5k1hB",
  "key32": "3fz1kjBVLfabicT8HnZv97pq7ZasbGgj3cYpSBoi1MUqccf1FeYv3PDnVxW7Q3bQdXSZoPM88LxKL9AUCi4rUi26",
  "key33": "oe4mtcjQ7Uakpe9gWMzpsneNuASUmyywTSLPq7G6F4fuo25uf6U9LBLcb6dy7KSR3CeVNEfsxpgaHEjkWiPmxMu",
  "key34": "YbU8MfLwnfz1DoVakvHupkCoezdvfctPwoYwGq6nbJ5q8DQWemDEwNCNjrxiUm9ZrWdonEWL5WJFYdU1VqnbrTw",
  "key35": "2dFPxUeJ4xU3hzVjpcHmzYx9p2bTDEfYTJxjembPykULhSi1LjfV7QbTrGo6VZk9i699vbLdzA8js3qrNegv8oxK",
  "key36": "4gxrjA5yqzQGSgupD1gma8SMt4dG3X3u3bBVVLWb7MRVvSxzEjk656TAFiLaT6g5yZgfVjHg3JfbXR6X4aBKDztA",
  "key37": "5C8xtmJmsDToHfkn8zhvLM6A9W8ZVEFJYe4fy1PDn9C4A7E9vGMaokV7oSF8wgijwZsUgXCNGfAHW6VqBjWkn2tQ",
  "key38": "4TBqsWG12Lga9hAKzMqSybkPtW93SRZ5J8MkP3bcCvNQYQZMFJQE45PPSWEQ8t2BaE8vnk2nvVPnbjpbF8tNHuGg"
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
