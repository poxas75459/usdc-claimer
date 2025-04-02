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
    "4ff3cznYFqeYQBufU6coL9fGWqiVk7n3jMe8KXECkC9mWbfH9xXGrdwnbU9y1h1mcXXND2RBswTtNnyUGsxXnuSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R9PTBDfe9RgigLEuySu6T3bgbaxSrhjrte7yARGpCPbiQt1oD7WPnBLrXaiMXhBZ4tCdsfVT2uc7YsvBh1dBRjv",
  "key1": "3Q3WD2hZGBHMtc1Nk3qQxyDi173cWAi4673UfRCfrAuUuoWFTvrxUDM1TBcHbX83Ts8PdBNVXAhdAgGsDvZBxv6h",
  "key2": "46gsj6Bite5PGcyuc18LFHZ91eeL9tkEhjNULjsWZYMCT9M3vSpxMmwxueebfg6mKpGLx6t1tYo1kNEsaqBmECfH",
  "key3": "ofoYTVpSFjRoBKF9gQVxURSF1Y4bPAJP6n1Dm8ekdGvmq7Uk2aVejCSe15nf7tFDndbQvyod94s5hXxPKW8TZBS",
  "key4": "47EHEFcReoHruhyZuoyLq92FK62Ds3d6Fu7owjgkjGCGMuEq4QWEUaJzPidXr4PC1t7sr2p4hkH7s17kqtCaX4H5",
  "key5": "3jeANydSqyWjH3TApaCVwhtkvHbLdHiVhn5CrMYjYnbf7xdb5s37NC8wDHxS69dgmtLjcY1tRDDcw4jK2kR2S5fc",
  "key6": "2JWYecVgQ9hCM6ZJ6bUquJSATiHMzh5LMMoxMudXJqojoTeMbQJpcB3W3qzXorqrpgGo6CmPbmA5iriF7h82GDU6",
  "key7": "tCdbS6PkBnwLR3cKj7HFrbMF8XRtUppkpgqebGyjKmCXvdBNxVDGJYcxNbpGn9xb4ruLmkJCXt6m2LGAuJcvFMf",
  "key8": "3DAfpEvR6osE3pZNMWd58CuPcWT9fNSwjfzSzD7fSwyyEzKcLJSSyFaMDF4EiHzudL9Mr12VZZPCXzkHKmdv9rFU",
  "key9": "34qdBePKk8o2oXWBNttDQ6t5dbsmgNPhUi7vvLh1xNWcFmWhuBu2HoG8Gou5q66RVgFsPEgHJh67oSAC3kmPwiXg",
  "key10": "5h7JvJstN2ZMocEwcHYEVoGcvpF26XvyRSStSGeXLrnBV1P2JLqZNrfg848x4FAEg7BttGt51nQCQVtVj1W7TiXx",
  "key11": "5VdgC7UnwoS5q7LXch6x5YfcLW5NnUJ2CkGd5yRsrJBvRCua4j3xwZH2ZHb7CvwKwbWqDEkS4D3zQv1qAjWeg3hE",
  "key12": "4XwXW7Rx3JzAzFXpgiP9AAhevdzU2ZuxdNzF6ZMweVY5uuCded7qVy3c2N4nPdY5i8AFYBdjtq8Pd1T3BrwiYN3k",
  "key13": "38suHX7Rqo3zVGueF3ADo7BfKmTar6SfyVFb48NY7XKabuCXG4y9yd3TC8NQCZYSz1yJEkFfAkztoFMjXQXTYgx6",
  "key14": "4xupKCSpZcgAMvQPPPGJBynpX6V5BdV8tuUJgdx1jFHy218YvGMJn9mYtfjag4EpMz1y3YW6gE33Dj32xALcxtjA",
  "key15": "21X89Jp8M5s9qyDdsDjCgNDoSPhNsQgZ13DdikVg9UNBFYRpEqbpLy1F2LU8xbsKjVyR1sUBBvGC6T3nbqXad2Wo",
  "key16": "92jfmDcnMA63Bvf5n5Ave1jMVZEuiPi7xaWZuVA66smpbLkusgos4BFuph6dgvyr4u72gQqzhkbgpGUZgXUSNJZ",
  "key17": "3SBQonth1XH3NNzWvUNqCmmeybsHS8WRr6Z1JrkXHCZMidNuiVAoAzQue1pyqKZpC9vseGoMUeTpX8g92R6hDkB4",
  "key18": "gjb2nP7rve6Nr6yz8jdsbDre49yHJ6ZV9D8NAhssVgD7s4vEmbWQsuvjjrg5cjvefYH2YWqKPrE4qZFmWLMRtoZ",
  "key19": "35CvKnrToYQB8PeLYkF2XakxGBm4bdfbvjzwP2VyBJwb9VVzGuceRrrCV9foay5JE5LJqNuCESBKkUEhGM3jYRFH",
  "key20": "4MmcNbYjvpL7YhDTVvaZa9skkrceCnG1nAd6vSV9YLvDZHRQZr3wCCoVRhT5W9Q9vk6mAHUzb7oyVaYowZ1V8YUx",
  "key21": "3ijdk7iFjeMUe82WJZ8JW4jYUALAp76PTGUBqbHaKo3Ma8pRVKEm8XKioy78WoEbEhxdzUpYwV7D1N8Gh1YeXBkX",
  "key22": "5UPEtFQcmfZNJNtRZAcMaxUYEqBLGJuJVRX3QPtFfk886hycs9TZD5L187RT5ayTSf4p9BzGk1tkFHaPtUyy9ViW",
  "key23": "3p75iidkDbHoHdfCaxDhRzf3EExUYJN1VZEVpUsihKfXCXdQoosT1np6faATjxUrzzTTZewdFnF2Rd7MVGHfYMYq",
  "key24": "5nC3iFRZ4sYrf9MA9XDPMdsJj7qEohgvRRBUWZT4WZ4efu5DJwWwiU5Zjr9prDeMJMuwtYBh6L36WSPgSV9bEbdu",
  "key25": "2CRzZtgFkNvKHE5dzogv1U6iPZJ8gPXRTokaaM9RRABsNAaDaH56fkBhUJgWBC616379gs2ttU5WoqWEkUDhYjjV",
  "key26": "9esCwa9jhY5hwZ8VSmRPeUgeNyXqMxK69ckRhjvyXrAX59FPP77Apuv1ndF95GaKYvqqfPHe2Qgjp69pxB4spE4",
  "key27": "5GbzHqSSLzp3YvFESrW1Tr3ma1MDg5yZf2N3ABYUavfWbfgQQbTtD7XypsarLxjsTTDiC14pzgrYcxtTt7xeTLKL",
  "key28": "3E8MNf86CeSkGwcekK3EcbgjK2h7dSxKhqdCpJAsp6ph4h8jZGP67jPwxu42CwUWVf77QUpLKiJGbam1CyH7xhDk",
  "key29": "MTGjZNyFeoQtqShqGMCk9prMFdHdvXrURMTQAgz9aFp9nvHVF96Zh4E6xMv1YeTLSv6TwBcut6YzNdPn6Cg2pVj",
  "key30": "281qZXA6fNGDh1Bmoj1CjYVnFq5AgNSx4MBytfdzkf3gVqPmsWrmTAZUpp2XT1D4CbMvDgpsMjBw6ZbFznjNnvbS",
  "key31": "2zaon4mXfonEYJn4i7zi3649cMHj2o16PdZkG87ytLzTDSL9WH49he4FAdUH8s5xqTiJtcM3vMvWVtKAFwB7rkyZ",
  "key32": "bAHaCfBYoNnEoRSo7BHrFhZLhLcja3VzS7iAprcd8EvLPS9vjP14bVewKEpWHeG7J75hmh2H7CvMZzp5hNHTVpm",
  "key33": "4Az1Qg1TgQfbS7HPyVhdCUrfWhaweyLqfjXJjCGJSEinK8xc858caoWoREaoyUAJpssiXiv6SeVJcC65Tf51kBFE",
  "key34": "2yzgs3MwS5bVRHinpLvzMMfHanHTsim27B1ap4UtqHoT7oRTNBpXHQyFgKrKp6TEkQCJSz8rs5vVZGqCMqQWtQHD",
  "key35": "U2oWJfJK3eb1cw9rdafkWFwVzYKAHHWrV3BMCP2JtTaXvKyiUEUZJeNKZqhpqWrUkbhDuhYftFaxmJvMJZJWmXN",
  "key36": "46XJg1kmYGRqbuQuPQ1SPepYEigYF6tP7BTQCYWYyb2J7CQF2Su6YVwGpbbasbGT8RCTm2B2LP2XXenYHif4bohx",
  "key37": "jX2kzw41nupANajmUvQkeAuKJ4kQeUdxypicwBWe9R8ojymeDWM5CRzvqRt5frTk6CznfviRovo2pY4dEcyFaeR",
  "key38": "3eepCuSYPDjRNVCQTRRHrKaD3j3qawoVEvNPw5o9B4zDE7iLB1wumd5BRRNiFsuk69i6Dk8TBAzgv81wuvY82Ymi",
  "key39": "3PTDnFGn3qd3CzVTDLE97LRCviBmdcCnQNVnaPrZEcAFPirWM8NwAXCYnY3fVYLCNQ5EeWRrEHWPHDPgo2fTyDDn",
  "key40": "3zEYAYKMYpZUU7ECFtccmKPWBQiWLPPvGafP9UZD7U75Qa9drjMutmhBWaW7APjtNr2G6pmak77yGAwGiiurVqMi",
  "key41": "4uaeyCJ9d9yv6A9KX8P9YBj48rfgi7hLEHoXgSQEPew2LxuocznomdDPvKxVW3dGoWiEnVYkKVh68coWWSR86975"
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
