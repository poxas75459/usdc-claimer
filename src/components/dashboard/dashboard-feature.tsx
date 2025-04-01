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
    "fTsDuCtwtu4sjE42dLMyhVkjbkBXqvnGk6Fhu12WZunATY44PfcySjumg1kfkX4BmwYxTzMqjEd5ccTYCyokFtf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pmtTS735EcVCBHWxgrKwzgQ27C4TBs2QfLhM2CoAYY5KKRE7aVdiqsFVnqHuAQYS4VhFxa2Fzo2ojsXwtsQNZhj",
  "key1": "3q84wwpLuiCFJWEoN5ZPjEmjgwfcMyzbWYzMi8k9yc1XFsBaS9qTKhxbtr79QkkgQ9PX4pCyWec5PhLxpWk9ifdz",
  "key2": "5LuyNZUT2ThFbemb6XD7Y2oznn4wZiTRPVv1RrNGBTAbddBd4oBbKp5iKmFeztnpE7rQ6953eNTY2LbrBtXGr6GU",
  "key3": "2TpossUWPvyEiowUovBJDTjbgaxARrrPdagwgB5QtVztsD4mDQ6kgMcvaLNxEs7Thr5LiFGzzwDyoQKdaxnWzyx5",
  "key4": "3SCfnrxozWtHrYNhuRWKdbQjUJCuAH9tQ2gtJRaRNCRCGe9aNbSxaLvUDdgBczHdzq2zXeHDgo33n7hfxJ1c5bPY",
  "key5": "9fy7fxn8gDVGic823ESRqzNk38bamuZAc4N1ZbLiai8y72KQzuJBDuuQJG9pERfSLXxxisqYHvm9Snis6HC6kpC",
  "key6": "2iU5LPqTZdQ9FWdHnfacUXq18WMMLgSD4CaRSSY8jXwqWhewV4re34FCCXHhZzTKwyn8YgjJ1f4mm8HaBppZKKNG",
  "key7": "58PBa8yHYaLHkVEoKQwKnevs6LwmCVSFysnzHGfZeL3Jw8e8QjcPgUm1cFmG968yp18DnBYAnoGByKMSCCjjXgD5",
  "key8": "d6TXCWkNBLzKmufwDXENPen6i3VJHoBSJTfi1cjFzx6gtaDBhgtXULc4ofEvTzy8KC12Y9CnqsgtonqLxdtdxhB",
  "key9": "59SbBm8sEkwn6cvJqPD8JTAzAmUi4qNYeLEaABa3bTutdnHgVaTktzTfwtWkYcXHyaiovsTHAqUWmMVWmGGbzZBo",
  "key10": "3yQZW21ZCs39RrYgmksKqYeFxGWjZ9iZKxHfk4LEWnqKhvGNHHD4739ajbC8FcNenwveFTpV1Ax56KbshCgtwKWs",
  "key11": "3UNq53TZM4dFpktHWLs92Lr2TSc4GW5eDXpdB2UPVn83Ca4amqVpyrFoyxKR8BrwxAcrhx4w2rvmQgiPKZg19TEZ",
  "key12": "ZKfcMFZwnPUMv5hP2QkRGrSmNCJm2L9uJnaP2PBWFEhNv5oJJvNz4YK1dARrAkv5nqFYBT3XSU956uqsrraYxbo",
  "key13": "4QhjouwNt4AmMQd8HGhuhN9MGG4vgPmDfXpyVmz5DBSPU2mSi1jxdNERSUuoLWr7XWxGqLXEjxKj4g4tv5WpYKpn",
  "key14": "4t2rQJFZh8fTaWWZytK4zESh8N8MvoY4EJtRXrsMmbYzwwaDjb45qAUjgsmQUCDKC4oFHnEERroeidYEVw3vC7N7",
  "key15": "4sdxGPCbCqFS2NXzskAZP6iVzQQkMU8TkDX5X4QoEfHm24G5yHegZWEZvHomWMSNGa8oXJhBojk17B9mTjd3xtbm",
  "key16": "44QWHU18EEoSY9Af8NWXNgng71L5SVNACTqXgB2bQaqbuiFdFuwmzsbovPomRxMUtKgErwsHJKNqjSiaB2TWTJ2t",
  "key17": "tdyUKv9CgNcBQJYEXqYGJqmDBohMwU9Lg6jy8aExcosQLFCF5Cz7cSuPitCdg1X6PBUHHFCQZHpU2xsmRnmespr",
  "key18": "5RknCYZoR6VKmPaQ2SJ38DpMamDDUPK2ci8DdsJXUDpuAfV783JjagS1c5NW9XncwdCa1h2QmGxbHzVoNZXwrBCm",
  "key19": "5ZZWDEjbg1F1cHvtQQzoBWuJxXwcV9fBvf8AUTQ1PKTeou1SbhepoUrpKXoP6LKXKwo2cnn2pWWxG66RWLebiEcM",
  "key20": "5H1XYfsFGD4m7dtDYfQUPRPySL7v1jWchzmwoSe58y9yf5AzbLLgxQf66gH6aCgmirmYGNmK85AgzfkfTaL9ZrBa",
  "key21": "2gyqxicnT29u3Sg169axbP841d9BGqe32gYqHEeLfxJZGdLcGDiEDxp1LfqNwnhC3uQ4fwHheGJ8rYy1zPEbMH8C",
  "key22": "4qaSzELjSmLFQnh9bsZPn7VyJv8chHcFsSqGnXBKBVDNbH9VZ2JUMv6KvSCJw6E97ss7ad7EjARF4ssqPvWqhFZY",
  "key23": "4W58ZTbPSrf6gwSbPhkwTn5VU1pPNz4WYmVTfsSNdGGApKU9ksUSnjommJsKWo4xPFG5321CrfjcsJY9VA9vjHtu",
  "key24": "3WNftoXWjbPCp1smRKyaqG1DxTBBR8g4sCwbfFsE9Fn9EBg5zxwEKxL6eXHJ6aoDGocqG7Me4UwuZfRLXN4EWqDw",
  "key25": "24PxrEACjRrM3g3E1GaN6whsKFAg8PDPBMFkiFvx5aBWS2AyKxb3VHQd4hhLVJVjn8HiR1rFcuvKGLX9m4BEXdL7",
  "key26": "3DoFRXJyesAb1dPasRzYt3iyeZKxLFpJtxGyCKfoqB7znw5A496ruqeAcVkNvvoWdVQYcjm9twogG1rhNiyv2EdE",
  "key27": "24eQQhcPTTEHG7Rp3ZLfY2HLgQfJ8z6PdfPZvK1yVVmJfTumspHEZGUvEj9vvdzJSUxbyC2GYsC6M4jDg1oZ2EJY",
  "key28": "5nXaH853rSYe6pwPHvf7dwFfUAhr4jkR1xK6uz8FSHGVjFf3utkzSuBLNuT1RzyiwgfMRZst7Ni7Q3B6MXvti6r5",
  "key29": "2wi7VuFY9ooeBDDdfmbAKSjbAg4kvhvRqnrsFof8yL5xGJuHWuFsd2HJiWWjegjgE55yNxVXkGCao7Ka23ZAkTLL",
  "key30": "57WXUWyK1Xfe8nfCLkchh3Ny2ZcvfZKYBVZ89FLpcBrNa1EmVm81QPzj4V44g21amQVUQcfeBLiWkwx1PjFueX18",
  "key31": "3o659c8VHDGvWHqpPd5rTx2sszcwZmoXEkwsCzof1Qow3Tnu83imEz1ECwpkmYC9kNax4xAoMtg132ABaDRMfmkq",
  "key32": "3d6AW4E8XzYxrz142cWNN3HueDm7Nu1zqhxozAp9b52BBAXFPtpu5UCqoyNkkSj7f8roybxvbE9Hhxtyd5ncAU5i",
  "key33": "nBziny8B33DhudCr4Nr833vwsAX1vk3FeB2QwNASzoLPYgcRPZs2Uq7BQ4dVsSsGPSkjzB6c6zDUBiUm6JiMV5N",
  "key34": "5i5hQDANiKFjqRpZBn1nrqRs8VooUHc2bHBxCqzMwf77A6xBM72VNLmSCj3g3T9yX8HUhDSv2NZEVmjHda5Vwi5q",
  "key35": "28jtmCHnG6sXYouYRPiEbCZJF1b6Z66eTcfMcZdHgWyoQNRw7GkUVDFu3LxKYYXw4ffTEDdnBFz72SCz2ns1xQoU",
  "key36": "5M7ssY5yYMrGrV9HsZVx4xPLDGAgbPwtTAGqyUvUYkjNNzCs2i11cgknsJRFjpSnLHpCRiLGKYnuZNzkyYg3aZdH",
  "key37": "2m7oYDsAyLncZdJXvcApAWqdERM3qbjsbQAMBqLuViS6rFsYspEzBqWBbhPsbJ9uPusvdJysReEXNRaxUhdaB9yd",
  "key38": "qb3nnVhefj4EeSLZaFhYt7uoH68rpQ6n5LsbcMRoxJVLsKMthjSSQi48Xg1U2QVKTvtHsm7np3XrpocnDb9KdgE",
  "key39": "5JGWxUZ61D6cmfjtxt1hVx6XFgp9fyzak5e1X9Wx8nzTKSkxSMvquycMJDKdvQ2gKSfQctauE7q9UKiSphdYk1x6",
  "key40": "5uRw1Nn43VVvc7SCohDtABgW4Hgsoq76zMAcvveNn1G71T8EuKPGcqKt79cnXcMUQTcfedojH7zCNjtuSgdNt7EJ",
  "key41": "4zaSMFcLsvANmyJMw2B2KNmQKWgS9741Lji3YAJ7332nN8uummjrTvEs9syEvtcRM9G3TKTeyHLwKpcVc1LZBb3J",
  "key42": "4YKooVZtKwYwYp9pqTDiCnzcqnBicxvhdZGfXiUJGUFArPovPzomKbby9YdijTMNPsC1WG2P8w1uRtpGfFo8Q41Y",
  "key43": "4eZcmSmGMU6PpP3WZGHXctJbLV9mqdQLWaNTCG6cKFwQkiZxjZxmGQXS6cKrVhCwLtwyyasSKC1FhnE9zDqrZU7y",
  "key44": "53Lsdp8oPJHRE9qPDt8cvXYm1ygMasA4xS8YdaU35HkzqsQz3k9fKJVNL8HS62FVcPo3o95CK48pKVz1L15X2J5o"
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
