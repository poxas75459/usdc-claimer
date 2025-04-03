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
    "2wto2G6YQ3FnoStS6hooKDrsJkEU34okn8MjP6og9yHNPAsUTsZADGvxyTCpp7Xe2HEe4fjSduMfqpAN6VUAq6vf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o7bUjzjZxmHHeVGRbu2kb7FrrroEEx438SCfAcVxKbGLwzdiTt1EqZgzhvTVJ4sQZkVz98MHyzyxN6hQMdNu4Vc",
  "key1": "3vEZj7xjmDQaT6xfKnVFJS6MAsArqAzTDpKGAtnHPjGQ8bc18rxHB81qXtcXWFnDkquQbf2t4yY4PXiDDAzxa7tp",
  "key2": "4xHq8PgwRGn8f9fo1UaaX3jXmkL54Ug1UuBXhQPGmKvHTDHFz9AhRcPVGq2HKkoRNcKk3xU2gNeFqcSFa9kCn5fs",
  "key3": "5rE3yayXNSsPrb9vGJHgQeozdX5FymvrPCFwMzPVu3R2oD49KRTmXm6pmgkTSrBnum4NkwCef55H3UmGE4sck7CG",
  "key4": "4KwuvMPgq3giZJ7vRGw8YPBsYzWR9vsLnibWQ1jxb2KKiFxPZQa8xdqpL4e7QqXYn7B4KGdi5cKciE1xc9eiAiJx",
  "key5": "2R7s8VZz423Hc5uMHskTZVybzesonGe7drf5GLT6wvxZ3fNu2ZWyNnN14JzqZFfcsJnPGxU3mJL6MTjGTMuvjC1R",
  "key6": "HKQgK6fxJ4GVetMBXbicqd4wQsQyQh6TtKBDHy6qkJ9KyDtv1RNUTK79ZUSSnYRgmnECp8diRyYFkzKXjoiBy9g",
  "key7": "4P6pUNTjR5Y4Kdhrvq6FP2XKuAd8X4xQRDZHjT5ayfzRC6H6kGbBd8P8QnD8koqTNPfywSAn3MeMYPDs4Tf5cQa6",
  "key8": "5X4NPnddCSemhmnEAVjqW4G2cxnGJJwLkKVdBg4uWvqLEArZnEfX6Jdst575tmUchsy3KzUTpVWno7V4atWRUN8W",
  "key9": "2XgawhgLJNc6eZ58E5xUvvXyNxaiw9F5x9qA4ZQoc5o9FjH95Euqx3XtzAWi7FVGiRaF3U6hnb1PbK4ELDGb2bCj",
  "key10": "3XsD8geUs59vntmF3NrLDwxrGqu8T9gSiQMGVwMQcKLUuU6fmEtjAkgJQCqEsuHRmJHWig337UDmQkYQ5JkvCNEy",
  "key11": "54wx1MR2UsTzC3boEKPaUmqzy85N3LoaKrzoUEcEaG94hPTrqJQAPsX1z3eznja1u4vyyhR3f5YCVfLegee11tVs",
  "key12": "3MubZngV4jYxGz97Z2FAy99cNK6CoJMeg68wBZ2NBZGa9Rqd21FJodgzfXyhq6ng93ydbjwspe9tUYLeYz8Tc5i6",
  "key13": "5cfXsnHHdfg9how8zzq3f4cVT8kPPEafkbhEmjoqpDadNftXgpxW3YbGarRJtwUaiBvu9oswiQbn5cyVG4D4eF1H",
  "key14": "4MpfLE4VgCbEFBZiS8Joh4cFL65WRAhQTeB8kRi8bc62j6BBVonmnujDH9RVMcsy338vovjuwtszuBj33AqdnLqV",
  "key15": "3kD6M1Q8witx6R946oZjoJZYTJ87tbkcrRwXqdkZbi2wcbXgnVWyJG5mLanijexwBE6aRJ2Kq84Kz8FCAcSHENxA",
  "key16": "3V6Z7WtPdu5BQNV7F4ySandcLGqtT9gCtda5JTuSWAKSZxpAgpQ5YTozrfcm2Pn3yCpGyagYHuTr7UNt5NFWepm1",
  "key17": "2EDbfK9AHNguNRtCyQy2m1EseyLUJpyeJgUFsmSG2RoRdDKqPwv6iFyiWMo5JE5NHa6X3MoRYJy5UNQUBZSGness",
  "key18": "5ReF7dVjCtKtuZywf6RE5eN7pHZgLy33Vnun4h9Ewat8CFfPQZPJcMeMUfFAaDWvQ8MfkrewgBHjND5CcqTgXLkw",
  "key19": "5pM1F91WLM9GmgWJeJCJ8XwcACsofPrcFZwxerS13EMhDUyMTEmtBkQcxM5tuaWscN9TB5rMRjhXMzMV1fgqx4jv",
  "key20": "4rHNGF3mdoF2kqphMERkVaKXeCxVbCXjJ3MTjkvk8zD9qxtrexdAD3quDzwKqyMz91FZZcbuwk4dUSoF2LUg9wPM",
  "key21": "4TJ5E91kC5n4FxxZUJiD7ZgHo3ahjCwqASLXwNXbYr5W9hpenN7YwwJ4vF8j6c4nsvvcfTfyxWnPNfwRdCuoShHL",
  "key22": "3HaBosnbaK8TAsoM9HHPrTU9mM4xzm72Vew5RqpLn11cjXYK3bq3h5v2HQeN1w2DiyvPXW9kt9QrGd1EVtipuqcU",
  "key23": "5EuvSUxbdFxkhhdGRz7gwYrUJxtXkiZjry99xetnfSGjAAeLbEpGhJuC41wPzGZ1PrnbtAtMy3TmFroFDukJeKhS",
  "key24": "5Gd18vJVBHYNS8ahryasDspkDR9tCTF2J1LEuQujph6zaadbmKXU8pmDNJQMDfaXRSuMWQ1CfjrAprr2d3ZJD7DH",
  "key25": "2Q99KZ2SRWFs8HoRrYfZybcoYoMY9MSsd6NTmL9kjn6NkUDv89ERuC6PzpQ1hFfCgfXysG9t2KAsJCsg4hBxo2e8",
  "key26": "2M1KYTkbkYynq4sYPSi2L2QyQiHribqt5w5ufF9HYAhkAFaU5bS8ZmbtvktEQCJpXBoK6LvSJYCje9FTJMd5arw9",
  "key27": "3U57RazhLXm284v4ZMBRitfWa3UjJcJdwvNWRp4pKpPAfU58LeWMxVfEiaMEQpr3qNQH1WbxXBAQmF5VkrshENW1",
  "key28": "TMRD28z9kdHk3Us6PmNnGwwkGtLChEgXwTm1ohxftQ9pwQEiPFHKRVjTCoUqPmDNe89bx4pucSKDBAhzPtkTmkW",
  "key29": "2SMWrzzGBHxtAJbpoAbQhuBfomj54WDQgoWma8GPxJHphJvNnSm11mw2qxLGVH6kvS6eyA5ihrsgCvtaAPxBM4sk",
  "key30": "3ZimNHdpnvDei7bWh6ytvsouet56F1Mc2brXn8wtNJ7QPdxz7RpUZCxPtkHA7Z1oa2mi4QXuQoYysZuLa8AcTkrA",
  "key31": "4RGtRheyhHtg75hciPZCY1YvTA24ubPwxU6opX6HRsKvRhsQSgTvj4FWZAA6v1Nehm64kHLDAb8LH99rzBJReWBd",
  "key32": "3P6uNzLiEwhnCtaqZD1SLUSwE1CzSrTMBqw2SzvmQgng9kjiwByTenSXDEjC12owBFnB6SF7KXoG7QYW3z5mtDSr",
  "key33": "2iXQZFgdfgs415VZvVhoJQm33mDAZqNU5n1JQBVgq1Z8VMkELQtJqp76e5VbTyK4WuSjXT5bJf9RVHTPkGMiXiab",
  "key34": "ZqrtRvfYvDx6K8WH9dcVQqWHBwQi6tAAYVv8HrrqvHPDcUVkikCsQgECtR9Hc4BTsYuTzhWijiWvRvKQ6qQDDcm",
  "key35": "2YFc8WimvdW2136MrY39Ym4hK2QiVCzmQWN59SWgjee2kdwaXa8RgDLS66j2MPWE6xMp4XQbSff4HsK54v1t9Rop",
  "key36": "21EmxTFFpPTNQMKveUTdTMbqUAdDPqfz96GsSwpYBUPj7X2dNrk4jGPxsvZL8RhL7Da2dbtLWX5T6vTibmy1vgsB",
  "key37": "sUBuRevSLab6oAqJjLEF1XK4BsgEYWA1r7RNgnQbWPCxT5L1Ka1hZvbVhqciTZUKVy1Y6tQtERQZHJ1W8cviTji"
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
