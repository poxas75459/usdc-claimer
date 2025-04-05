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
    "2eMEfJqTFwCa8tD4PB49SZ2N1Ma8oT7V1Wooog5McF1BfCsKkpodauqyu6LGRkXdhayCZHUxT18Q659sG1wpsDHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fAD85msx3qszzKWjtYqRvrKB6VpPNWQoYMFbqBNAZeAWNi1UwQfBYXjGjdE1PpYg1CM3Wb7v6vKVezCMrm8nMTU",
  "key1": "5M6CtzMGvi8vcbm7VEbaXFUsh3bHahLJyJatv64n7GkyRadtkBhB1LF1YFDrpkRS4KVwinzfjZnX3vEn69njttHQ",
  "key2": "224vXUBrj7EG1sJHaMQNfRbbewr2EP2w6GESufxkoAnXUbZczYCVUfdok3RA4JtwaJVeJBzgMDJmfmdH5NqUA2J7",
  "key3": "3rmFfV71uuH9egm3Z5BVn3icq1H4bCyQy3VG4FBureJeUcygRxmJczfa45azJs5F9WgnSRZmjnvZtjhnmjWcDJAU",
  "key4": "5tcKuij8oY1TwMWsFxm2VQX3LQMy25iXxmDPVQRDJW214cHHAk1LDfDRBuZQi7AVcryWFWsWy57yFGgbwXJmTFDi",
  "key5": "3XNL3oKWvUntWvbhgWWjnuPvWU7G2NHnNEWKa1ZW7kPSzX2rHVphmTBVQawLd2HXVYQsYhLNZ1qGLfyGNKs2CWMD",
  "key6": "3wRubgU3VJUjG576YeLHowuB88UkeX5mMDk6E9E5zz4cDXrrmNNPt4CqeCEkm6CNebcV2PywEdgFg38zA6pt9pxz",
  "key7": "3Qv97inkPaYqe5v7kBg61P52YRuaAqbQeTrmttdGgKxyBB3uDESfjMqDC65MnTeHp6T3LKuhcjiwCs8U7qhbsapf",
  "key8": "5TYd9ZxuTgkFdQU8JGUKurGQrznR5bFZ4HHrE2vZfjJshnZkL9qDYE6y8ybMxBRytp7a5hgcwZ45NWvH7zkf2Kwh",
  "key9": "pvq84j1GsnMuUuoha1X3tTFE4mawNcdhghw93gTn4xvEdYFQSbCXEmcVfB64kjmYy4KKjubpLisHGSwR9FwsePK",
  "key10": "366EcMtWAVFbu1U9NEy8cTDMFWSGvxMSYMYkygLRH4CbadugwsDvuTzvYhNzSpUP8WBjt1aXnFv5CppCVvib2RAt",
  "key11": "4cqbLgW4mDHxBE4fJhB446DumEScfLmUutS2cPhyAu9JTvuFGRgda3999GFkuC5e7td8qFabYbvMWmCHeksc4f2s",
  "key12": "c3TtqjjgZp5RqZViN1dhk1mqMRfnuzN9y8uwv1DaHH8yUBTH1hkDUmviPzEX55uycaBSSsrD3iS1nURT2B5FZtr",
  "key13": "5ueGjTzGy4nUcwV2NTjJ57V2snkbpEGUZaQNbyxxx68SoBWc9DQjLQXVDiGgGPqyTPhBKH6D8H8F5Hho1WSW3SuF",
  "key14": "5ARpSSLJWTvXDriC78efR5cmmMqMXZNRYkGq1tPpfWomPHxb8C7ro4ZoLsbukQX2vqMFaVikLMtuxu78VW5243kw",
  "key15": "38JLU3cdVZzt1wrVgoRMnCY1ZExYvw9s53qusRzW522qvVzEvGTzTLd6RrsaTV5dnHf97upsywJ3VtfUhjARUnD2",
  "key16": "4YANdz54LhapFU826ZcPPPVyXj6Vn2CvWdPftaT5twTjtr6XjK12vfS5BHzNyTU58M9uLe5Hux9AK2VwEiDW6Wep",
  "key17": "37N9cGS4LwdiGooV3pi3d7Eix71snPi6dNey4uQSx7TgorJM173JAwvSo1DYjbp32uB9GFDaMi26QgosCVSBbChb",
  "key18": "37bzpYHfxyZnibLpMkDjLQPsZa3B5e12tHW884Z2jpCE5DoZ5w5j89M3FaExR78fR963JWQU7tyJcU1mo4udBZEF",
  "key19": "5mKB7J3TE6cLkrRzQ2VsBcrcQNdCS3adirAFRroqMC5UBbFfUqSKndAnVZsD9yQV9FDkqJTTX7XS73K1u2FqrLTV",
  "key20": "5NPTJ9sWDSS1AGbbH5w9tYEMZ6qDc5yWFS1EGk2yWkQTDd89tvTrG8ggU2BcRYBNvQwSEqK83Zc65PYo6MwNQQku",
  "key21": "3hf2XWq4vj74ZnnxvC7vR2by6r8tFspGR5QQWdxYpxBdKQnT7eKG4hbUWZ6ftMD3dnbVUV32Dc65K5eYK7jc6QGY",
  "key22": "5s3SkuSPNtVAS7uaADu8ANf9CLCsa6xrvPeLF4MJsLXuWxnPHbLcknFmjRtDxccf5zVYe5UfJGVcp1mfPd4d1JvP",
  "key23": "5nA6ynhszRYBy6VTfyta6VKc1YMQYP7gsSzMiRsRQUgRHGygHhEig4EQkuduY7WBCzZttBDaxckXzES9AZ88426",
  "key24": "Wsor3rXAVaKeb3tXDAk5WN4XcKjJkvnHDhFM9uPnbhJvC26NDGxnHgxyALNFAf5UUfoooC81QegL23mV183VRu5",
  "key25": "4WDBEqYEsRSeiSA6NdhsN69b8U1As6RKQxJ2brVnLZSdEsGrKLjbNLSMzBZ5zHLBgMNLNgVDk35v5RrRN5a7V99F",
  "key26": "43bF8Zi3pfnNnsKfihjtuoc3Rb2DkESPY1Cdu92gKZhQy5eLRy1irVZwyUZHB7Mm7Yd94jvbYirkhwfS8LrANnrz",
  "key27": "Y9rJKDGD1mKrr4wxUW9G27hNg3m2DnMZUpuYgihhaYqXWA923GkBuM2o36eaqQ3JRoMZymPcUcr8MnarEdUwHYr",
  "key28": "NYXv9s27RWuWPuSzmGa32ug86zLEktJCAcxyU2vqPsuDZwQosE3sMNp6LtAJFT31K3cbu9kAQSBJy5eYzuiAq1r",
  "key29": "MVxdLAMdt2DnMRAAfj2CwEDeBvUpdtKxuEjmow256ds8AuxfdhtqfuSNQoF2vZfvMxhcxyxAXuGVw2cqHTMefo8",
  "key30": "4BuJMdDBwe3JJngazvS5mZS8XcZJxT3gM7YXfRrxsdnd3KjDLbshnHumR9KXBirsuMa1yCoKDecX6K959sDMA81z",
  "key31": "4m1ruqvyZU29hj5RrreMgWGMYDzEY4T1KDgaybwYEyAtqA2X53zgjcCcvMavQSVpEBAq59bqQrbtfk5SMxEhDNhr",
  "key32": "LdpgFPwMUNrLe7jLQn3W4CQazswbm26Ha8TMimpvnsQdSFzij6eEtt41PA7UXNY1NLK4F7gB39gQupNAYTGDV31",
  "key33": "ykcw97DiHyup3KckNPzMPuQbhNSYMQvSXgGH1d6sMuPzH3gxkAW1ey4aEaNvNcu8iwwwLVWdaQQMK31nEYTYoWE",
  "key34": "3W9YrEQavEK94HQsPsaHXHrToHg68EYHbPHTwYEQP6VDPLbvVT3qP1tNLtEoog4AkmuUj5mcQrB4h4Gw1SSDAMEw",
  "key35": "2kyoEwA7EYVcAktnEJtGdYb3rE7YoDApfP62MGmVYVzv5x33fhRongWe38fRkgZebigPNhWRaMPEJpGgQ44W1GN8",
  "key36": "4PsnJKuwxUgHVz5KYqJfoaSWpa2hrKquGmX5bwcpiBi2HdxkgHx9QjtFCZZGRdNsxgsJhYVo9c8ZX9MP98UULrFz",
  "key37": "2Po4ZaR3ghShMV3e9iyEXvniQbMPuQG94cPxVr1F32ybByBmTMrSBe6cCZLtyQeG9wNG3ENnmCJr6FY8ck9abFGm",
  "key38": "65bcsk9V2ymXBSuFSY8eqpRMKisSqhJGcfC95vLwntVLXNkRHychBmFadvHyvHRjRabfYAB9CRmhSLptuJk4iU4M",
  "key39": "kHUgb3vrhorxCMR9EEiQe8ksTWnYgRL3QucrjKqFHmaMkVvEQ9hp1LeByxzWTjPwQL7stnaufiQWmNgGjPLxUiJ",
  "key40": "2YXahYTLkgMw8AXMTk3zsQBcNgfPrXURHE1YFytrtYYN1HLY1oKWu1cG32hS1Ddr9gk9fhB63bLpz4taRVRe5rW5",
  "key41": "3addXs8NMVxyUMWoirWudyM2hjgMb45yNR6Qp8rXubyF5oarHXTjQxmcK5A8QHaeFXmpxnQqhFyuGt54jAhrEtBy",
  "key42": "5T5UVBddRBpr2ZmnMUncfHyLseHTAdDHcwgBsFPuo95ExqTTFKBx7NJmHj5CSzCwEbkY1vfnceVvG4KqCK1Wmyn2",
  "key43": "i6Ph3EByy4CWJKkmMdciZSpmcARZutjvwHrSv4ydU6dPvziKCFDayM4d58Qe1Z2FM4CpYWr9uAkfYpxZgyLk9JY"
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
