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
    "4XAytq26YUmNSWTNaW6zAcztyHY9kck8uytrciKpKbjfJ5Mwv7tfagWW7msEbc9dTM6D7TaLmZg7KvFP7rJCa4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2skRZviCsmuRUUPHwjE4gU28BTmJn9VHQGFDfYij7VxYW1sVZdYF3QFMFnoCJaeF3uvkZHtddixqEjkZDq3oKeqs",
  "key1": "2K5AzHdeknqSYpnA8FWSScmPifj8ATiM44g8NGrHneNcCeRCDyu8xaDC76ukn4XLWZqmmhNW8GxamxCKWAD5CVJN",
  "key2": "5QmKNX437HHiWMPZFfgoGnZu23gwR3tVcFZLhq2KoKbTGKd9GB3VHAMiq6nPyhsxR9pPJuCksUR1p9FWbnoS5WNm",
  "key3": "agGxiL4X6rnhBZUajE4VnMVGKnFhjmT1j7qzwbLUeXF8LpcYKN53FGaBNrt5RHc8JCNvHc9u1jYEruQ8K5hFsMj",
  "key4": "45cbQ5bSmjTti2KbosRQKbnARP3xsMPeUX23FzNGdLcDdAZa7hKHeeEze5XRcyw9MMySkkWaBNzz17F3zdXgeYLQ",
  "key5": "3gU7fxHFqo3SMqLnFGgyFf5cmeVYZD2gnNPmEYQXiDg5TygM7AQo8xNXYFQRk1e6zCRhnyfQJdZDLFegA8RCu9xN",
  "key6": "5qqaydWKt98DNSEtVSQgtQ5MAzeH4s3Hwh13Dkn6zi17G5Fg97wthPpg7wn1UbQ5kpWnv1pwVnGhdKkepH2y3LqA",
  "key7": "2pnDcgPvAwtdsQdA9LBNMuKDSE4wq1sWJo5Qn6JmpFdEUKH9bU8Fz4kyc3VRfvLxcLAhZxNep7D3e1xTDT8st5Wq",
  "key8": "4VZFpZ64yFHW3dZsm59sWFKCWyEWmCDi4FSLmSi6ujMZ5StSBm1DkcKZqmGGdSV3vSAME1kvDmnQb92jteSkozwZ",
  "key9": "m1qWzEG93ToeJUZrc7cAusvzbDyoTb427Nm8abtNFsnTxufULKAHbdCFpMbYxvePjuM7mXrdCMWBQHxNZGudJjS",
  "key10": "5bUoWnjRVr5Tp93XrujJaC26FHdRij6HbybdFaDmCCGhA3YgMEK1D8cETThCSFV3TYG7Z8Tc5srt5vak6tYPWjR7",
  "key11": "5X17xXc45ASK6nehJLCNPGkLwxZ5Pq6Q7L6b6DSeXnviWzG8tENYiNgy2KrSv4DLYLEezhQWf1G26npxoDiQsGkU",
  "key12": "5L8jv76kFUxXSBJyJb4ey2PWxAwuWSnV6zjtDT5EvYT985Pae47sUYy7YFv9q67QQ6sUqUBW2PLgm2eCBM412A9G",
  "key13": "37ofec2G8SXdx1BUc968xZkgq8wYCMAD144HBTyvURFhiXJTFCs7PFftJe5RqCAnxoU51srCpj9wM7zVUaUARcUG",
  "key14": "5pVzo2tTGEHvWM9iHsfEtt6zMs6J5STpgjo5wR8MKBKHVSjYe11JSVnRXeRXPSRq5F48KfRkUFB3HzsQcXR42Ru8",
  "key15": "G1zj6NoFTcaV6nR1YxWNGr954TJPMajN9i1afkih8YBxnLpA3WHmns3RJvVyS8BhbMMoV83o7fgUyK9p2FFEHQr",
  "key16": "5CEGWricXrNm2WciEBjjZGdFULLgcuXjN6MLtGhSXSftsfqYyrApvxnXqxGn8Jsc3ePFygWaE4n7gT19rr2hwqPH",
  "key17": "35afqejAj881AktdJ9MWtuhyeS84hejqz2nxgxggnXP9FpmHLgugLHecnLNCqn3APEYYeqzTExKrqhPRtCkqXKNM",
  "key18": "3S6B3ssWRVsEjhCU7GPL1ypRqcknFwR96DH9z6akoHALMCjcnzgu7EAUTmnujXtcc1NzVVLK691fg5Netmjbk5ux",
  "key19": "3hKSMXtz3wEAxZZg1oATktVzfhuZu9afUzZRbqwZDWiwGj8Mb7kefNNxt5ZYF4JjhpevLrjPW8K3bcobgZ6311e5",
  "key20": "52ecyR8gRpM329kznqAqTHgzYGYZpegtuzE8Ytts4bB787TWBms6U9Aan5FpFKewtxDgMiD7bzQwggLhbKBX7YZp",
  "key21": "5DU5MPgzdKotjUnAzDHyEkPUi8WZnrrcrVsw84yWyvMdQwZDSf8cgaG5uqNmZpsFMS3aCLDuwT4bZvrbke4rAAZ3",
  "key22": "4EdVV6zmKeU3ZnxN6X2GwgqZjwuYbAgFFB27L8S4aUPVYbotwpv9MpM2RjMGcmDLDCioWKDjwawBNSinmiJ5C4ds",
  "key23": "28ujdYdDkXqbumfRUW8JohYRnauiHEnqPkFKYi37NDAP4PwSeJTiWq99BmQkZtDGxd6ZoCsQHDjWwPRzhLpnKTm2",
  "key24": "5fzsXE1cKsh5KEr6mW4bVuGcCQeXzdGk5wFgHcvK4ct5Wgp7FpcQWbe4CMppBFMQPXvhjZ4He9YWswBzNLCJ8xgk",
  "key25": "z52sZb7mc3VKiC9PE9Ls14Aj4B5CvHWoH27vDQZuqKaWDSvJcbyg7EnLmSdn6nAJvXUPZQdokhaRyroexLKaPsv",
  "key26": "2gHQvYB2gXL8xrkvr9WogRYsBw6VGrbFfVMJUqgCzcKo8ZEYjeoTDByT5A36UyBjkXywDGzmBwz1wHghk1SDhCjK",
  "key27": "4Z9EfJK5MyxP9A2V4gegTCxJEZUNZqbmHPMEQDb35HHqAfmHC283t6n2yxhW1k6hdXGaAJvYSswa6H9PV2KVUr8Z",
  "key28": "3cpfi4UwzDdDeb9LPFpaDRXWcQfjMGzo5Ez3PL8g7AKBamFYfqfBT1wP6CeqzwFpx2hqNAsdtBDBeV9hjvUueoAy",
  "key29": "3L5c8SYMEChLKVdxgpHePRRS4mBiNPGHLAjuByXPYE3FLraSWy8iVuJ12EbQhPGJEHhAe6T1Y8ufiGvpz2y1747Z",
  "key30": "2c6vqfWhfNoMKfxSMKQpSWdmt9XCScKAm1VxFRtRCF9Laq1qUBdRFscUzFRJcEL8ca4kSgJGZ1jfE9Da4Ze5Hu31",
  "key31": "9o5Hki21aMxpLxooNR6hFTMLXZgQwadXvgPXsmw1efLaxtMC2tJucdn3GCb13sjzAyVqagjn9t5aFDuwYKNxhTD",
  "key32": "5m1WgfNthFx6ej7o146xCj7fee4H1XMXPFt7xyqUSXF6ctpoSYvZMFodc11nqVYNjhU1pnxuqN9LRYJq8JsKLtLa",
  "key33": "4ZGKGoufM3ZFDt3Zz6NpZipK8GLAr5jAdnMLjv3gHfD4CJ8NQQtMwFPzRjSmVihBqiASZttKtN8gx1KsxZimSbjB",
  "key34": "2kQVdrH2bagznx2KTLoEZSwqMhmCTUGYaGQZkY278NQ9V91gBMn4rsyqXQmjATDLtq7wqpdgkSQ2pwuGtTA1D3iX",
  "key35": "3f3Kn9w6LXj9THNNu6umgsFHtYcp3CCYb34knNwZRMj8vuzmfpj5Bzr8NhVnPGBYcYZrLqXjL7k1mrYC4MxLSwaV",
  "key36": "PocsK5yt74ZmR9KD3XZhMwrmfkz5iPA2LCMbevggfYZevjprudmonYZQtoDSnPEp1BsvxMzG3yTzqg9hEss1gQt",
  "key37": "3sYcxNjutmKwQHW6cwjpSuwZZLZ7TGZTnYif1nijgz1mdWHwbR21LYCkKwpuxy7xjNiqthCzaYpFt8P1G9thRKWZ",
  "key38": "5dpExNX5Jqj9zq9BTe1i3H618XRKJJBygu5YcTArZnqt8Rt51UQaRQcHewR12Gzp818wLsxYPbKr9sdBVAnczMSW",
  "key39": "4XHYRvpaPckTEDmDSADN9jWgK7BCDT6W1iB6DNUv9J4h9aJa7TDcjgGGsyVD5qZAxaNLKFk5eVW5N6ZofFGmvJxf",
  "key40": "R58UeHRcd6Kq4usVri6uc4GZvU42vazSB7YGtKLC2cKSgMrAgtL5172bZFjczSphqaL9qnmWpwZdRhLaRFcy9Ct",
  "key41": "5LVm6BoV15cNA5yXHFyoxxXr4dkuvjM1XvgYJz614PoXoqQHj1bJfiiShrMAGgMdpxB9FCdpsEyNhEQjdYgWskfK",
  "key42": "3huzk8C9mfmbzhGnQ7MT67CGg9hY3qVDcttsBtDkGb5JKXFctqM3eCrPh9SVtqC9PBJ7b6Yh368JXZTWyjapPYJG",
  "key43": "2p8VPRSY9BxPfmTKkMxuKU3dXmvDrDkGrmTsWfg4UYL4qfWnDL8hdEUu9C97CdM3A92dt87Dq7kQ2uXw9TdHEGZC",
  "key44": "5NvsNUNWvru2enRaSi5SdpAwoK17PEQ7PsdMnRVNPBSQMAoHERuywbSKThN2u2W2qxK7PdAzD9bCYxqCqXdz49Cn",
  "key45": "52TxUQKnRx834N7Ci5JSAukXXEvxfXsRK3hX5CYrbXZHXytNbpCsX8zdWsSkDt1mbbxczTNFz27SG15JrdZo9FBu",
  "key46": "49TRaapfDWxgz3tnSuENNq6raTzk6cdh7oi4Uo3KE4L391BMGZ4yop77of4fTK5s8ReXDCHCyhmvsG5rgg3bSdiu",
  "key47": "46RGkVVBTmT22kHczE8pvYbiYqBGnKzvH6QLXAZQDgyge8mUAFENBq9Br6FueofBYyhCv5fgCXm4KW7Xsw3PmKjC"
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
