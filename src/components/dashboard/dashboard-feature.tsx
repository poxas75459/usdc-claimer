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
    "59CDsrvAo4gj9B7xbDbW4xcoDY3uwLZV8aYQTpYjCCZwYs1nKtBds44qkHRqCy2WLSVuXikgQXkoePz5uBXN5Ykz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vD6iV7z7h1Aa9VHTAUqBExgsnssPQYSKgCzns8Xfa2YvAJChJFJeXKWRSXiwJup2Zm3bsBExKcopWApFCUnhVnz",
  "key1": "4tWLVF9CrsnHAtLqK4g2STddKc6SxPPB7RoHDQNCXc6FnmVbXLXWSJYGtqH4htWH8nYJHUbF4vHEEyz9NeeMpz6Z",
  "key2": "5vSiLHVwcVphbv4nbPtPau4cE4Wu2GJxuGo4iCuxeYaXEZPnYfFScUdsekbjkbFggJq5A3HpEXuzg3Fqa9Z55oJU",
  "key3": "2FWjQn21fjrMwrmysfdkSTon93uiUkBffjFeo42v7ETWztsic2QYbc7RywX6NDrJtGJvJnaMjgHxeb743K78PVsL",
  "key4": "6Lkn5p8wGATpv1TRjQTW3r7jN4McN8BM8jmuUs7XZjoeqtwZoZijFjBjdPyyya3ko63LY1ANvgdFFjMPwFdSDnM",
  "key5": "4Zqvmk34exh9tLEqf8FokkbcPVys2iPi4G3HPXFhoWnCeXbdafbi16jfCAwk97R475pD26KZwE9HR8AmazpHmFZE",
  "key6": "5D921zCzoqk5oUfDMGS6rTmCiSDBy4MrpDk6c3HEsVdiE3YF8jCwb218UPtRYKedZuQKRyT2YYfBoDNAd6etPz5C",
  "key7": "259UBLbaqei2S6CGcwkfNsc6XrtLsYP776BAszRwxQBM1orU1rjW6BJ1YZ4ZBud8qRa7bRB9kpoQSbBR3eGa1r5f",
  "key8": "gijkz1sx9PY3CK51RJWUP2HDc6qpk44yoJyEWoZVXUWuhaZSVLNFFF1ynqA3CF3zFskA67nLXMqmYZY2SrFvuFo",
  "key9": "4rUa5iD6ygNkNFZVZaeKYYv2pbyrBMTztvaw9FEWZ2VEShbCkiVC5ejDZjXHhP9WeqAe7yXEhrWAZJu49WnPoiHc",
  "key10": "5Mt3Bau85nMR3JsJzA7CFvkfcHR6169eTw6Gv7dBhW4d9P9XMSh9tQhUTBRChEJyMnCPLzwLW7PEJQcQ2mXFaPuh",
  "key11": "5JD1osQmSgHZKexka3xf9tKEpqwZi48xtXkDNYVCX6MBXcqjrzY4xyuKumt8WwGJD4wVABWgstEWecuSymzRnRDY",
  "key12": "4vcHTWjc3DEgc4P6S43V5dW4SJhaREu7QEBQMh8cWQEHazC5cTZxDsMtYoKgeTGECY74KE6rotLkqG3BfkPgF2Jh",
  "key13": "3ReYL74Wz9UXKiVd4HgGDRM2aNScvnLACyYTTFdW8FzsA884eJxYKqZbDyARZhkXWy15WKQud3Epz6JjGi2ixu9f",
  "key14": "4D1Rrpi6phrowUH1az4145uDPxm8bnY9VtG77aHRFR58UrTdwQELJaFx4x5PGFsbVF6ezbjnPzCxpTvswgoa4g4N",
  "key15": "5Ms4zgFqQtNDtpkb4eDgF6y69Sc5vbRJ52VwyMNrYbNhJy7kWbq67De97BqMSBbjoG67ffNt5N3wVhzZtmMvYiTN",
  "key16": "2LkuJdjob5KrcEhf1wh2z7VZgZXU8xjNkMSsPyKwdKWxQU32MUF3EfmCgGeBh7fLv1DBUM9N2fewybFcViUXk3nr",
  "key17": "3XLFDWWScaHntK65SVKaPGNRaDpfrw96VjSf1fb5zBZ2uvqaKm4poi6uzvXj5LwQmCfh3Hb6xQbSMuv65ZKpCuvX",
  "key18": "3Df5nfSEkhxtHAgkrL1te8TiGwPs38futW32CT6htQCjxW9T9b1v8KP5rpQFhgbfsRCcj7SDGBib8pZEZ2wp4urY",
  "key19": "63WLy1PrBAkX83w6brGCZuEFyXeNjm6hruEmTuwbQyLix9oqHuhuMb5emPhBQwqxU4wobQdNwKT8ZqEsvdepCXts",
  "key20": "3nJPAMUXiwBJM3kU2Ysca6HQ9YrSxZ9U2hbnyPsnZVbpCGXEJ7Ep3D2zBmZLMetjnmyqErs8Ko2PiukqxAhvDxWd",
  "key21": "2kZ9iEfNfy4iuDP4Sn5F9h8jwiRRPUwmueXuU7SzxZzpaqfLQLXdySPv1KgZLq2fSVr7g9FeqMvBZTJ7Jr1JWJDH",
  "key22": "2kAiVdxT2YaBsBxeK2srEd42C2e2k7bXL4zQF1h6GFCw6B8CmvpL9mvL2YULVd85Rq28PUAWVdconX9TWTFkfcLh",
  "key23": "4EYwxHvoPq4d23kAwRArYLiyKiXUC4t3Fia6kQWHVrALnJ6uUPCZVyXJEu3Z2Q6Q9nDzPBPPWYK5gqExzv6HLxDc",
  "key24": "2RE6t44oa86VfgZ4MiDaPMRcDcdNeYHcphRt8ng6qNAJm1EZ9ewdDKetB7cAtAUi7i5TgpoMZCqkivCUioJsHwHg",
  "key25": "2YAEzKA93SDK2RvUDUkZV7oFSrTyndrnFZdv4JXF3yHdGxLNK9KFoLzA49NuzqbR9KjRYfwWg5SeZg3aadk2Lw4Y",
  "key26": "5jYZ12qqusNZpvfKMdu2GmymX8maMncPGNaJikNYXhwaq5xbHSy1pXgXXXZhZuaMcjpa9SVmYk3WTAkon4qEGLbu",
  "key27": "2DUuLJXtKn47S5UtZHig1YmEiUy9tqWte1pCh6wSqegu6CQCNXitRkhoAeLap9q6GB4HzhYGkjPR3x3WMnn2gBbG",
  "key28": "nZCMqUtCAjfHgbbwPEJ2XwB7Tn4G5grvLjVwQ4t2yoeKfW3t8yNh7BdwJsawQ2tAhRGS7aHj2pb6RcNcfE73dpg",
  "key29": "2WefweVCwmJfbVDQYhBBPTFsar5X16wFgn7mgH3s1iBQMgHGQrRTFGWwy2nVocpZhMuS8nVmMzntVzVwz1pzh8Bb",
  "key30": "3rESU8YAa67N6zrA3ypJnyhZFzCpdysLfKyPVDARH8hVfcmut4JH71H6Zif34dv157KZ5wHgbMoEsFcyhiZHZbaW",
  "key31": "2jQChveLKVU9bgxdy6nEKjD4xQcokrEGbkkA19jf6oaYN2bTizQqim2iNYFYjh6qySp5BHG188o9RqfaZBmygPje",
  "key32": "4pFo9REJyqT4wZvL5kQKXAQWo2TqAp4kXUbqPJaV5BiNV3WnjdkeYR7nyp94G8yMdj1ryV3PfxpNtnoxkcTrZRfm"
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
