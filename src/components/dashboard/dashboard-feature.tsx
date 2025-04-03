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
    "5acTgPjhW4Kmy5KUVVD1uDJfxUonLHf2AGKcaoZHD4sV1DNM8iUmL8vgeLrFikYj159HM573MQPUK4HJ2xJJMbL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aHe7PMydiL6HbrBYvnB8NuHvLMcPnxKGvvL2SD5CUPFHkySnUTFrPLhkyQn4oY5qGHLFMoNjWT5NeJKWrtzXaEY",
  "key1": "3JvQ6RAgH6tLUyrCsqt33sntKJ5U5p89sk8Du9gdGg4UYQWVwd3HJ8jM7f211MSR48zKEDvNHqsVZn3Bi5DTNr2S",
  "key2": "4YJCkfhBTgDMMmrJWjeyiVM1ij5RJgqdXczNgtLrsy5AuaFoHWb2eZByjDrh6yp4UGNTNfkfvJYiphQeecLurXgZ",
  "key3": "153E8kPVvpRx6uR2cZqWUuc9Qh6RgR7tE7r69SjytrPYKNjcWfU1PDcwCrqo6VJkDX9aseW3aJkKyKGoTkP9zMS",
  "key4": "2H8aYXZ6opBYTKDmugnMvSLdrRBRpBJxCTyT6ENU9PjELnBheVvK59wAS6513TkDSAt1ufMi2JdqWXeUnotX2ysK",
  "key5": "5ofvKyuuMbwr1CkPSNUhecurvYJnSAqztsPKtTw1BoPuZE48RXiRK52PPfvmfiNivW5aQjY4KLS37oeBwtHZmamx",
  "key6": "3nT3QYqGRCUh7SrijDcdCNUmYE2Yjyo7S6AHnes2w542YijiSnmQ4LwMDj7HWWb1dphVtvVeMzFWeaDzgXU9hErW",
  "key7": "2jUK7bphVAL7PuxoDFM3MtE2HtA49Eio2n4TEBZrjLGNkbjFcG3eSVTAGZVR6kRqZ9ja7rigdcPtbicrw5xGDvpM",
  "key8": "2uo9bAFbaHWBFb1nMvGKQQcLB1PiZfUtoXptGuCNc8PssyDAuEsYnehhfsDgmHr9saFduMmwwSBiYETcsJuB8oSs",
  "key9": "jJjD8oZ5WhNCxnts4mYsnXkH338RLKipLTMvVrvaSgjjyeRpAjfPiT4fYhQW5nVo8u2QHwN8bX5tMntfBDM4ebS",
  "key10": "28pV96CabqSXaLdw7G3YghSMxzNmBuPYFdMX2Srqc4kh2GaxQsYo3cmJ6NDPaTREj2upRtaLzwot1t9634dZG6cB",
  "key11": "4ZnGfaujkR4TqiwR778WvN62Fd5ocDWCjK9CTghHTnojTwFseF4SFxjZdYV8u7mSPnZVrt5VdeAUGTVjghyoiGRR",
  "key12": "5HqYnrvc36zr1AyeskACCxt76kuGYSugrPYPpLsNZdXEnR7gjLVfYdYjXRgEfGMpPPocD5bLuvS36ucSURA7wbRh",
  "key13": "44oUgFrnFe13uZskbhpdf2Qo18Ykgg8BaU2nK8VxHkCQyDxiQsAeMRttk62nonuSuwbB25cwyesEUqScqARDkFwd",
  "key14": "67WXBEP16FLPbNxuZw5AeTDtZdAdF9s6iqDaFcFFQ6mthiCtKfnDN654eZ6i7nYEmPa5NiRaU3bWj5wymbUXKi9A",
  "key15": "2kSwV8LhjU6vTifHh7smduQcnLhAsiZxkJPL1BkaXXyheNGyQvq84M4NRkftp8zJKkLJ5TSKf4my7wewqj3zbXM3",
  "key16": "3bkdsNtqA2mxUSAwV3ajWELzFy63QJKY3iNQrK25DZRvYa7R6EQFbduaW7yhx7f5wrHGUFa6F3zPDdxrAzjQ6cCc",
  "key17": "35iLwEuXdUN4P4qW7zSCSQXoCD3XDrxaXR6ntkv69ErsYDwgvQKUrEVcrrZNeLrJHWMtE2Sg92hHnfSdH2nHqh73",
  "key18": "weztzUDJo6TinAhtTBQVFLTVTpChARTNvSW9MMRv5UEvXQCmxdrR1iMV5meJaAnK2anKYDB7uY1shnBRveq7qBw",
  "key19": "5qmm8uy6Lv9Myw4TvkW5ZDghyZU7CFZBYHjJJRXuucVdAwpmS2wCvN86baHoZzM5H9YsNkZbrLoWbhak19RQPHY6",
  "key20": "5hY9iXmVEmN7GZjeyGWG6Gm8cgUa9BWFNy6TJvgKvwERJMW4mU9Ntsa1pSqZtoVSCBh6AE2dLSytE3jda9RXzjvG",
  "key21": "26H9WTPJi2k5BrFsF5t6MVf8ufgYn1Bm21N6RHFpT5455ZrNKknKBMbDgB8Gf4rjoNFCJgs9ySLLh8MoSobwAgBk",
  "key22": "5BbHmwmRi1B7s45XFPX4pgwae7krgFxJkW7bSetSoZsdqEB6BJggmrYpQs8RD6QCPdteUf3PZHsyFJgvZNUeP6Mv",
  "key23": "56yM9FYjcrG3ztXaCyJgq83huV6mjWe8X7y29tETfJxt7GFRwUe6G7C9SN9dHThk318qfUyyPGEFBrbKq9mNVLH7",
  "key24": "3v2AsxASXf6yVNb5JZjYdsy8ZSzXPod1ezE2ggWguGB4rUmZN9LFvaCBM4poEcwGb3zCvQqvhMmKs5kMXzipNeRT",
  "key25": "2fQKmuLro2BVULxDP7bqBcFPoNP2ctFwmVTTMZwUZq19i1Y3uv6BZUKrwAaLG8FNQFDQUgu1KWTYg8Ew4gc5K1rz",
  "key26": "471ezEfvPn8Y57ofu5a9YtkZmH8VgaqjU6c7VYforgSXSE6YQFLQsDxoKd6Nvq5HECG6mxPkp3KpQpE1iUeksVuK",
  "key27": "4ddXpV7MXkwFNcKNYQGR2vgQgc3KLyyWUf5RNrqnEuZ9SgXqGFERW4qjLT15SDafHLmLoi6fa7aWdTgrTFqaLfwC",
  "key28": "3cCBkpLUgkePyk5QRpbxXCrkS65vB1hH5qS6NYmdVxe8hZYVV1USsctnAjff2UexksemBX1GtzVXfKC77pSnhtmq",
  "key29": "3QFVkrtY12bc6DbdbvbxwYP3A12UnT4WhSnGtHnA7aDfLcihz8JwX45Um6mx3Za62YW1ybCpeL43jjMf9p2jtKPW",
  "key30": "5TDk7ePemTtBuZRXAD3wDrhKWQkEUd4Kmibcjo3DUEWnUCvY5ocxpn8D182g7WZuki9X6YBbYSwADWzJPZojyBYy",
  "key31": "EVUkDCPoQBHELn55QWG7EjyzAseCDcCxYkz2tDKR1utQnzMhM3RoQXVE5aEQRCs2AoTdWDPiHdfSG9WTJ7nkz6e",
  "key32": "5VnQmeDxpZpn39onLGxTnqubdQWG9sbaVZuiz9ethTKK5zwy3hLVytNCD8Yt8rGidWsvaLFASaAJbxCsSpDq9zrD",
  "key33": "5UhWdVnDvLThqHfSRW6yR3kTf3LNckSQUvanPbY7H85RuK4DfeY17DoJ3zC7QoyDJa9C7GGnScN4bGLY7cASg8JJ",
  "key34": "4XroEPApVEvjcG9p7qFueHDrrdzTof8rVdxmZJoYNhQ9eZ7bGCY5VUv7gyG1m3QbtVQomroFFJokus2yWFSj6fcy",
  "key35": "4FZngxDFoSi7yAYMPQdVQsm9Czf8ZZJeGCLPGhQ8z3hF16yfjqYaDidYDxd6vZBEuiV8wrw6wWTEgoEwSU7z1Y6W",
  "key36": "uhfvaeyNaokJMPZLWsaRYfKSRhdXEdt16qGueo4h13xEbqBYifwzxkzJGj6MJfs8kYwGV5Bdf9WTGV4eBKZmLoc",
  "key37": "4UvoQRvGJ8DzGBKjeVBHyYKsenSaXHG72mHVAPiPoXGjNWhNePxH7btC3YhjVNoPSzafet3EkW1K6DwcrPbKD6xK"
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
