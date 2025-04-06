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
    "67ACyVrFtX9exTXKdsj5dhrWAjA14UDudVHK7dXS65UbBtNefbp4qBquTgKmhRANtkuAKNv5HXNmiPj5k2swpfa2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4naPC5muC5si7oTetML3Ea7HmrkGama5cJzZzcP5x7yuiKjF8QbGFD14C4eRXKACaTrUMUKxF8CtTDVF7n21uM1L",
  "key1": "3K1kJoPEXbDbftSrTvHeZjD7GvPLYffH3UQ3JBjqYgZ6wAf19TUo6qxLfqpSBsGcXDdAx8KQ2wm7U1R6pV5dfh3F",
  "key2": "ScUgNTM3y7taGD93caqXZTh4dpckCGjP2BabD7nx5KubekY6FbCRL61uTwkbM9xCKG2m5CtWXreYmEB9Ak9vhbh",
  "key3": "53hVrGN3JokSpvXsL6n4onN7DCbH5VUipMGbp9YGA96Q9ZfVTrNQUypFbQkVewhAj13XgzWpHLRPJhcgekhitHWn",
  "key4": "51H7xoDJisjvVbJQymtHQa7cRTHnbxrXrvRgcE2FnuCqoy34UMzoBJ8BDdXFYiv5EYRdo9rMAsFZjVu3XHxZ2pNj",
  "key5": "3yjM22929Bj4BPeRn1CW36DyYRteZeXLQCqVNnngPJYBP4L38VCtemV1EXH9tkFitPUZyb9ZkENZMpMaVW9XM1xj",
  "key6": "krbrb42oMxxbefqH98sCKAnY4FwVETNCJrANDvenKVqx9XxqnUcoJH6JXFFdaxnWvCgzhGiEWT8VTBHLYrQu59E",
  "key7": "5F7d3g97McsoVRkReDv7cFtdq3DDh1xdfn4M5bcx4FKuUKiaC5cDjphCufdUsGtup6q6koYvbLcnRBF8QaGAgK2x",
  "key8": "5RpDQJ3gbzcHUjdR7qSSduXj4KCLY7BCTGHpyJ72mDjVNtsaYxeTWx4WY3bLiVJAn3MvVxiLits4vTE3cmk3wzEi",
  "key9": "5etgaJ2YQBmeSCVbTcg4XTQDtBkxbtQ2NaY41cpWgoNud4YP393NJBKtzzmnfKwxWyJJa2Szmt8RuLKq9L88vjeM",
  "key10": "2ocw7cARpBhKKPGTEM5dgKsc2s2hPVZ3R985rhvyg5F8b3daB87zDC7u8bF7SMrucNBXM9duJ1tx9uRJVxwNWPUc",
  "key11": "3APT2VpDecmjGeEkrR2hBNy7Nwz6n2nNiZyvHSfFRQKqXnYLzQKAJ2aSCxDgvcYpsdubov5CfFMZBa1uJHcXLyDm",
  "key12": "3NpHMF5kxbxSSYYaPRcxMhsDvcPS6MX8djyHrG23x9vTFLweKJ24qomFppjKxTaxTwTtNLtauTRzrVsqEsL6nKe3",
  "key13": "5fMCVMyXzGYWtEqxeCLDGE7DZ3KDUz4HSycM2QZFDkhKoUte4QzG6fYr5wmuo2DGRkVLDG38x44zV1fZ6y4iuHua",
  "key14": "641SoUtGgDjZ7vRg9osXYts63F8iDhQt3tSxJ7EFnsybeH4eFG7uoufJ8PMet6RYnybQb3Nf1RULB26kMKKw8F8s",
  "key15": "5iyZydwimmJ28Fm38ApEsZgVKXKRogo1Q99jmPq8RFENRWdqNNds8WCErhcJ9Rv7mEhoMcKwqLakSWrkrswFqe3t",
  "key16": "3AtU52qeton6aGpSb8mfNjP9NgeY6ynLFZEfkbqubMtRmoh967WanbUTCxSpQRnctTcZDZa9XJS7aVFJkExqd7Sa",
  "key17": "4siUU1uMy6PBihSKdq9UBoVUHsdb7729P7wCobQnXxXSgVWR3QmJHR3cjXZ3HFodwvfBnjLrW1FaLqkcQUQD6JiW",
  "key18": "58rCc1NwNZD3sTaQRAsrpnx3izh4nHhAqnEGbhKWcGuUHH9a8DG1ddMv4BNCy2Pt2sqMzeYE1BwTZeSteXWPy42U",
  "key19": "2LSA2XgbZGxB4hwzx4R922vBhMFpzKeDuv3rDfnT3rqi1UTziD9VjvV3tTDnM4bkVQBKEadWzZkmDYAtQsKYXUEG",
  "key20": "3N4MbBLKqMngRYC7nTJzKjCF39TVBa9U9xbqw3HmYemYPnrPuwuGQUygGzqXdqP1BWzvbMH8noDuUki2c7jVABnz",
  "key21": "2YD8GGsAt1RuRRSthjabzi3xHfJF3NMzyUNjRYYvWGDzzzQiq7CsHCrq9aBrCAkez6Q5J3jmuFhxcfK64NEor4cE",
  "key22": "3PR9ikZ9AqYZo1GVNVfdoMKC35qmfVdsz6qdQsAHgUibbYKtfaTAENCfMMSYFJGh2RPdvvpf2yHY3dNDMHdvEyeH",
  "key23": "2QYFxQhUbBnn78utR68Jab9wLiRHGn8pUHhr6ofBUDy9wAU1qwt8BzE5ABneNNSpsDwxWdUQLX1Uj78rgeVYtVqQ",
  "key24": "NQhQXWeTzE3X5KoFgbRMFLFEsWFMQ1WCKFavcXaAVUHDA6uJpDq7N28Ym6ccdy36dYFFXTF6rnVaagPT9o9Ndui",
  "key25": "3XfAEAKaQpggGNZ9REH7N9QYefhiSWvmC9Th5TmvFRqMvs2wVRSxJDbTkDfHSWzdtQuRrjhFta9io39sCeiAwxfC",
  "key26": "5aL6e1yYPitEfa1ivb6q6NBszjGiqFkZwYytVgq1m5SL8hFUaJpvhYoocTEC6kwJxuwgWJdys6RTgJYQBtzG3kbV",
  "key27": "KBNBqwR7a44uLLv5yBAFesNphoMRmjovFLhWhXwkAA3WzdAk4ax4ohnhoKopWV37Lu4tfQgdjyXPk2SW8VYk1gp",
  "key28": "2J7ZQULTsKg3ykJbDeuxLTWiG49Zvbqtat9XTT71DPQxdjVx3ZsGXD1DammWBgZDQ9o4SeYbij4gqdQaLSxkM95t",
  "key29": "2By85XNziR5ML7rD6RkpYqrP8xGHwCsNh6QzaRPXQ9ELsEftRXKwrk9Sya5tXy7Feq9PFdDVe17YvHmW2PzhonoZ",
  "key30": "5xpEpXwiev6N14NQisXrrx4i32Mq276wduKNJVAsJy6r5TFyDvqr1NVpLfWQdcB6DPQeFf8rdp5S11Z7EdhZdjr3",
  "key31": "3R7DvQWM4oAUCRq8R6xkGTD1NqxNTrPBYSx1kKrxuwS4puUd2kSxc3y85LSDG4Y1jJjAsDFVCMGxxZhDpXQcqV82",
  "key32": "37kbQK7J36Fhz1EnveFviwTfdaLK7j1vh6wUzP7E5J6GZrxetyAitBMRgH5PrLeTtbuWcb4BmQtk8N9wBirmM88i"
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
