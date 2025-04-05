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
    "2K65X5WLCeo3Bu1rv6r4V5QZVDAadv2buUPGLvcMnoYkd4gmi1mSECeoTdd1CLHiB9UnhDu2sHi5QXWgTaRxzt6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39XLdDspvHyquRGNarcCwbgLkND4UhzAXtKvDc5wcrpg2nuoziHL1w7DwnZLsD3W6aS4wNqZYMNSHrs5vnd5wVVH",
  "key1": "25WtZFb9owoCMpX5MtMDqczbWAsKGf25uj3gafXweTUAY3RDmxHBg1rnqgx3Vv98Yc9MW9hUvpGtafVWoPaZmdCh",
  "key2": "fkTTPya8YA3UKK1SKUXD4qG7UoY1QwgTZK6QpZjzSeuT8t153kDS3EDMRSycJQz3gsjeJmtQ7jmRPtdjBzm7Vjs",
  "key3": "2t5prR3nZzbfbWq9j4rUady7Hkw7c8caDnc5FcXYcp6dt7zbXQ9C1c1nHUdVR77ExgQZWwt66grefknKTC76KWXH",
  "key4": "4yB2MAmUxZ3hGMYQ2kAw1CwhJrYSgpfTegjxmP3dJDX459TvqppKMRX3dp7c3AGVgWwM2edHJxkoTQhHSq4U477M",
  "key5": "3L8HfeFQxSh9pGqn2Hew8Qb8uT9fqpM2YY2cmHypefpQ5LDcctqLbTaNK7RJWP7S36bUyREwAesQbcPAQx7ayLQp",
  "key6": "9bnjckUUtk1tgtE775swTaPty7Rd5zbrMNoPWGP9qH3htKHGinnmnuptyUMfWvhZzcYGCZfXMZ29Fh1Tmod2noo",
  "key7": "67QWQZkEgum7CNT1Buzndk2sitV66SoKkkmtDnjRQwvyEvdcRWPpRMajHvrgqm2XEaairtDPj2iZscyC4uQQPjQr",
  "key8": "28uzFXdhUXR4ov4geL4WWETwsvFQVwBxHiVxPnrRYntXsXxSWCR8Xdg6p2AH246sD9doW1xELZDPtXnA595P3fLH",
  "key9": "2e3bJtuNLyYf8M2jyr7FkWTgWoYfgnnniuXPssGrxDbsPeo5rq4FSs2ZqbUYW9bWgpuPSNmZsnTuVAQ7MZpwQjNs",
  "key10": "2Vi2z4sHb353xNwCdnxhpXiYgrDumiR9J1N7BAMr3x9WbHaQ9HXWSb383iTCPcMrhdmLV5NW36tMTZK1kvVMbjwQ",
  "key11": "F3fc1dvY1BKRHxZ3vmhFjGkcpxZx8jzbntiRQSp1BtSFckRtDHsnXtEcSzmsHP6j7ALqV9vYpcU4ckP8ikPANd1",
  "key12": "4cw7chrG4cEyVjrqFRf1mv4qYkZPmxJLJAvgJKMbgEvZSSTXqT26E2szzvidsWMdgAxd1rxRYQXU1A8tX5eEnE3b",
  "key13": "2cSnaCv9ZjynW8yC5hCk3JQ2hmsvTHcUjz3coW31wPS613GRboqk1epiPwCXeyqJDkSJHamaDSsrp9rP1tiVP1bP",
  "key14": "58EbVaXHw9RDAGF1iNRv6ie7x3LDzmq954sV7a46LkRuwboG9qiiqVxL81cmPND5AwNZxhH2wVS2AbE7sLMP5Pgz",
  "key15": "56Gd7wRdDWYx1VQdKTjaXK25u5tCKwjA63JEQM39CJBeGwwSQsizaQfsKGv3xCBQEE9iK8tVPBPwvkNFuxMB2Bux",
  "key16": "2dDnQJcrNfAxJHJCBTRqKurkKtW3HSekec9E94HvxuTkojuTJkFbRETm2DXyQGNuqQ9bCnWV4sea6uR4pFDE5ym",
  "key17": "5AK4f96TiuNZqEJoXDrCGMPZ1Vva9d6ybwKgtDktGckSqF6NpK58YG3Z5a3B3drPuMBcqabwVHqMuvhHGCVnchAW",
  "key18": "KVAZBQ5pVFmfwDA41beDLMrhPwHpB9DCZVbi3Nm1bnU25pE4tRBAg6QRDnnyXYfENi553WfJbZqWqBWtgsieLF1",
  "key19": "5qxEgbR2Ekm3nbczTDkXfWb8VeU1mx8ZM2NXbkvq5U6wnJsKRHZh2rohjH3Gk6pVhhXMHcpux5UD1NC96iyvtnBZ",
  "key20": "5BLF5ovmYHP6WJtoeryfxttKU4j5Gc1258EZicTooAH8uT1nZin9aTg3wBWQYrXfvoKTmXme2Pfv2c7Ag1YFj2Yd",
  "key21": "2DNJLCoUczGX4aGcG9t7UBHgHs7zLTJ5ZezvwYxFsf8SvhDboG79autEWdyLHF8WSp6RdnwwZaZX8UgZonffuUUz",
  "key22": "61GxPipcDYLVZ6SeWSxMknNnh6mcEUQTCEVuhyvgtepcUAe2t2SxkpkBM4iXaGvGpgtiPbZ7t9vtEDkmNkYhkomr",
  "key23": "5vc2x3B6w2TkGj6m7fxGZ3HXfXvDCUF2RZEFUwdL6khzSg1e97HBXXm9XwmhCnRVaPujSU1DYeyhtzBrrEci3Dwm",
  "key24": "3JWsqPs5PhBQB2BjVaTHRHmrdXdsHYjXpf2js1KRQ1nZXtNuoNsFJuVqbYjp7QL7tZXoYy49JTywejDG5sAaVK6F",
  "key25": "5WnyZyfLj9EaCNF8q52zNNSvgSugS1mhtYbuCv7oXSwr9g4EYdvRv3CSJG3NByEmUPrUfQTZ6Q3nBHUysD83aJWa",
  "key26": "2Ecu7KptvnVMoeeqfZhJYEcLHqVfp79ADVuvUdjcvDGpwCPuumC9sVGRvAq6yhbytTkFExVbVtQCN3KnTbk3a7m4",
  "key27": "KnsWymFbn5tKvXSy1iuMpeVQoHRE73F9Jb6miSwiN4tU6oiEBRrB5C477NjTCwARLcC6SJcFGd7Rnb6U2LupEA6",
  "key28": "3tHgmG3gSEsKH6XuF3vJifseB7X6kHMzerD8NFVuPCXeGBUEZNWU6AnVFLm1WoQiiukUyhZQnKB9rmKVnRxDKzct",
  "key29": "tLAhW7E8jkSgNVxwDz6MLq6ofe1wmKWJqJLzHNvq7XwpBsD6mBYHYo2C3ityS17bBXQAtVRsNQnFeLQQ4qvrzji",
  "key30": "3dgzqgxge59uFo3MZtKXbj7ByT1nqvjYHLt9U586x8uYPNSTmpXvncGvxcAF9fskHdDhnqzBY48jkG9tftKiTGc9",
  "key31": "5UFcFzPUxbPqPfLYz2dSQVsSkCJRgErxhxJsTpP1eXDir1w1Jjw72ECnaAcYRujnjo3r7BTvZEzWKD5LawR7GBuh",
  "key32": "biQjVJq7bdLn3pDcEgccdoMyD6GCqmkuE9JTaJhXWC7zJmsadRARL7oG4af5SMFJTnaTc2tLApr4SN8ryPoJozK",
  "key33": "3sy7F19ZbQqBrMeHJmh2boeEoUvbjnw8CKpiu96GBsLoK1kr2npao4KefFrhiHngig25Kh3wtkEmaFRWsQuHG3Pp"
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
