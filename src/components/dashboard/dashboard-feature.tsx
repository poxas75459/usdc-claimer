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
    "3beCJ2Sv1Y2zqBRHaVq3as7xhtKMGMjdXMkqT88LR56qDdWJ8gPgakaBpXRL1BxFQ55ZWikZuaed7SehZ7gxcF5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63D2RPh51Zztqe4qTtE2y5QtzAQNoi8qN8cc3pQhLxzygi1LMouybTcoJsAJGMMkjs1Mh7bWfa9aRNbAmRHYYwdQ",
  "key1": "2YaoRSATMVZDV4V854rGxj5vKD3D8ZeEMNW1xHvA69TsEdcnaPHppJh7aVzuHHaFb1BwFAURTC1AcbgYDsJ4HYMS",
  "key2": "3u1myXuNThnjupSRu3rQfGoPMCYruGc4ucCrNN4j7zs9iSqXrwQHNUNiMtXkwogvQ43qntdjMSSFVSUyXZp44RDM",
  "key3": "3kGxHstjdn1v3kL92fyXWeycxTnDYSjSwqeDGvRBa1ktQ1uHZJcdZsCNXs8j6WWkEHC4GDSgZWi6cPauRqg2fCLL",
  "key4": "5k6qdeqLYvzGZL2NLhw7y9Wc2od49md8Dx2TpP7az89fBvJWDe2WdonTgq2tmaCfSDDdokro4GnUp6eBCd1ENfpk",
  "key5": "2TkVUKxvcXMiuQ6DfL4HNbP4hjwFhYSwKCanqDykd16qXRkTjaBp1EyCA3qmyKQk6xFafEoMDBKMKUgRVjYa4TuT",
  "key6": "28821qiZB63TwB1nV56UrE1nQtbH7d2MSgzEwFBTngS3AnBCAXqxw6P8cwrXVCpiSK72naYZi9pK7J6M4BVCg1aN",
  "key7": "w3iVUQEAX9iosP5feYaUCceQoAhMDHKiCFcyzQMDHLHzFbjHUJ4tXdCJLTP4mPZfGWdtmmCQ3PogWpJBMszZZPB",
  "key8": "4YiQykDKwdriZ9DCBXoYTbpjgocJTX4Rkh6Zdetbn2n3FDYdhSubSPYgTQLmguNgYyShPpx4YGyh9mX5mSc2Fjwq",
  "key9": "5RMQer42KtXHT2iH6gNtgSoFzhLHY6skiGKMgDBjHnugKBaYEd2e4XmS2XN7bvfHKbv8ph6PzAKP7KQFLbNgqXXT",
  "key10": "25dh37fhLw8Q6uCa4XusMbd47cKPEvnoiFnPYt9J8osNXz1bSuwwXzp51kDfqV3WsgD93ZbiMXMzwpj3pL2Lrm83",
  "key11": "4WWvUwESQfYNZ2Rt7v4GYJRrFJPKbPLeBk4m9w8p56RgNpXH25DirLph6BiKb1F1i7oUmejtA8VUsZm7XinpbatL",
  "key12": "3WgnuhmFvsMsrmLt2CSbve5NAZ55Qii8xezqNimPCNxFDN4h3ewDLyPDCF1k9pG9khzpqgKbPtkTFkBA6HvdnPXm",
  "key13": "1j7XBRVJjgqRDxrTUdsJPx45aJVNvxnppWZVw3osj5KEtbXhPpinYSbsKfpt7haxQpf5vCzz4ru9haGy2DAojzq",
  "key14": "3vbHHHa3WKdaH88jgRkvAXC19p8zb7cnZpvA6aATVX9PWuGx9n5vki64FYJt3jytN9wsjKZ1xjwZTBCosqGe5cvL",
  "key15": "2BTvQECKR1dp6HhU4eVNuNKpoR7fSiEV332i8RMYpys4bWmEraZj8jr6pSoc3pmjgyVRtCW461h18dEawHWSun2C",
  "key16": "4kUFAVGHBG2qxKdieynkBpsLrp6kXFPts7n7k4rEpM7zxRsK3C534Hc15XsefXsCusBkMjbExt7usVkyNNveZujF",
  "key17": "3LDYg9KULZzxQz9exzMVCPXojMExP7SLXDSGHxETavbeU5Tnza16CRCRSo6XPDydHavoyfxYLJXw9YySA7P9C1gL",
  "key18": "4xGsVQu4iHM2VH8S4JMEyVvZNWhhTFRd55veZPRJJZQupGDg8B81ETLrv6prHVa3krUCKcUdLXmm4nwuvpBpXHRz",
  "key19": "2iCA8N4ZAciYfhY1WkHpxZcuYmY3nfMdbdVMebBqFchxg9378n2dHBVjKoLhSM1cmjZGb5tW4vHV5KH3UmPdZoPn",
  "key20": "5QdzgfUaK3HDsGirHy11W84NbwumqrkmPmN5CWE9iE1ntjRkdwrsz4f54buCe8DGME9aRf5jZsj13DDMtqFHNqL6",
  "key21": "2NTmq3qnaa3ThtePFAoDfqCfSRYwXeKEm4TWarzJdFzVo1kqLkpiNi4r3ZU8Nv1L6jCPz2bgexstcYHuVXFw24i2",
  "key22": "3XrAF35XnXHoTYTJ5Ti75Qqto6yLdsfJKJvN5CHmnR899D8Syx5RRyq7R1XhLCG84aRbgsSFZ624Se31pho6Y6CZ",
  "key23": "2HwfNPKbCbYVMarpcnVBBnTgYK79w6PSBfPXUDzGMpv4TKYqNS4HV81GdEX4iEpKtFPGBJbQ7TzZtFVYVqgDi8Z8",
  "key24": "5Hm7CHD8qczj1xEPXBiBnCLJwfHgyTG6xFT8dr6wSMFS4o9ypcbLwDJDwc7eLdNk5rJmGoEoQnXVWTDnR1wzMriY",
  "key25": "54CyiksvidG3J8YgW1z66ojXQiocbq11xV51Fw7YmLuWDSQhvrwMAETuy7N5ZcqD7U9VzYumtJD3eZjCGUZf6hmr",
  "key26": "52HQX2vqeGjtU5Hhdjjq1sCFGr14bA73L6DE1zqqMkEhCshZSWy27J4pfxDM7CookYCMKKcmnVFUzDevGV5zXWKS",
  "key27": "2yqwqdXGG9yadRNXjyrkcwSsMjG3HxYDjhzaeQimNzkoG8fAJxvLwxEviJytgFtXC36ftXBMqWhhPxbANF73Cosq",
  "key28": "8Xwm7Lb7zsQ5t3f3SZR2FqJc5TJ7vZAE25iwMBomAbMfk1UMKMwoa5BNqP37bKusgGivhsyMaaRsaVJa8PSwxW7",
  "key29": "436VCVwpkpauXf7y4T8f6Dt2BXgziUWacrRASk5GbgMjt63y3Xbra4spLyQTTusDznmwY944GbwTCa1TxnKeC85b",
  "key30": "2Dn2aeYxKuuc8fvi1MchWv1TUvzb9bjHdgEcdFTCNLoTWZxmrAtFTSJdv1Jgzcpvk75mgPu4PCwmX35yuVDGyMY9",
  "key31": "2GLHVHDz8AUZXpLqdsfDTc4C4SKyaCsCJgz5a8VjrGpav1mFBytxGBvcFdYYw1QEkPavizA4nqdV8VPfB2KgFYjd",
  "key32": "5FzMPQ25JSKRSR5SiHBhWFr33BaUWkPfDQeDt3mXY8XsC8fHXTyAQfgSorgwxTiUZyxMNRQWEdY1p2fGp7b6raga",
  "key33": "5UHyVqjc5BaAM3v1koJ5SsBaLuchbBgM3FMc4qr3vLRxLX86i8KUUxdUQSkor3rZ7NT9GgkiEGfBAGBGJWXawNj2",
  "key34": "2wmKg6ujbs7nJeMqa3AdKL7SBzEmBfQ8yP9inA5VpFS51vRnCV5jGJBJjCuTQuAo3numQoUXuWBvA1CLhfJVaDNR",
  "key35": "5tmp9eB161EQjMFdskZiJ1WJDSwyhmQk3ZrNKwn6oHhMBqNTfq8YgKsRdLbS6DXw5B7bbtEhJcyMc7fi5K2YxZ3u",
  "key36": "tLZtfpCdcK7NQHgTX3XHH8yGHF46MP4gmCmtM4ashar8WJENvY6xE3wPiEuytYzCsGusTtHG1yKB4CyqPj9RY3y",
  "key37": "2CT5NbzuzV1benkE7w7SPCjGKvMyu2aa5tCHQDWw4ydb7kngFe7FqD6MFEwZtycXdF9qC4P3bMW9FobEvHGXtkMs",
  "key38": "3fKRG6uM5Sz28sDmfsAJQbnezx2QpGE1qkyruSqkfsTTDw91vhmw6ifPXN5RiGWECcN2KnAe4xPHxMoqcBwgJTaT",
  "key39": "3qBpo6oMEMKaipngcwsWE9xdZNbgN4fEdgxd16GE3PcDAyEANu7t5MaJd2nU1BJRoVc8nHhbqJCfAY89UhL5Q3wo",
  "key40": "5beEe7PYA6RSVdnAiHPUxHwuxgJapEf5jguzWpquLjmC1mfnrkPiVG1Rw6QWaVqqbmHMZkrzTVaVahTDH8dk9nhX",
  "key41": "g1CEDxwctX2vzB1AFA7DRGFjgG6G7pRMU1VQtxKC47NQouaQZk4q3eu7kxYg9ReCMwQU3a9DnF6rTdWoW1dgUGT",
  "key42": "5hkx4JrUUV6oLo2MpDaeim9N9b3ofnaCxjxXxbychmYqupj2X9uh8Nop4ET3iPUB3LoKV25fSiCuAr91rUHWgACg",
  "key43": "2QfhNzHiKVBzduNhGFYFGsuA1vCouW85W2wVYquiWLNYKyad61wm2oEmQNAVBNBrAq7d6HCEHY6Ve1tgnJ9wc1Tc",
  "key44": "61Wx42VFyCNhzJtrVNpYzJdTuF79CCbskACWageRvvAnNRbnkN7hcUaH8r5zJuL5gxLL3wMwt7YFKHJvDAf4HzR6"
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
