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
    "5VtydYsHgFWmVGQUcS7TeBa16q8CeoXyLHtFU1BsduGznAc8MVJkJSdfA8s4Z9qH7eexvfBqsd666Brk9zZQt2cu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BKh5V1rgk6hiMkyJEo4c5xEmFkVwDDVUMt4r5T8twADUrGUsPm5oQ9FTts71SvDFBzy6sZxAseUx1KDgMwnSb9y",
  "key1": "3omn82UrW6otxEq9xnBVJkXSUBnuEKZBVY28zT7dzKvcr2uARqYEQDnvSfyYCcTHrdq4YrqAH8BadrggDXUUxVFt",
  "key2": "3k4ZLjPvpfFkiN9uEoURx2K1CVs1GR1Fo2N1YCYpJoMNeWMXiR1Bxie3R2YYi4a9xZ66skMZ42RQf61HytNSLK2k",
  "key3": "57og3PqGSajsvSg2zPf6U71eicERPUmVA2NkbzBWNdfy4iDQxCqV3tWAXpbfN7qURzbz7kExqSfT2RSi8bkE6W52",
  "key4": "2HaG3XKRfNwMPhfDhvB6YhQnpsGdayhkag5oH59T1t9REDmD4AxgfrBN3tuLCZk8SRc9qwwMuG58g7PFAjfK5V3u",
  "key5": "4ED6ZAgenru47YUGwQXpS8GfRbQRPhRJKuJspbwBN9wMddAv5PPMq2Ld2tgFNK3kUeUwNH3ogGMrv4Cb4jje7aRK",
  "key6": "5HoBV25YNu5aKMLL6CPDwUB7HQKXmUknMjxtWDhyGxsXcwWPwotHT6ZryTzqmsj3S2cuATp7QyzdmLHYoCEXpYRf",
  "key7": "5KAqWjtWruvDV5F59ZLCvJwbJCbtZZfbqntenAGhHNNS4zqaChKt4mGGfug4zphGzTk6hafGpXdiD1fBLPg4Sj1J",
  "key8": "2TzuGDzxGHLZ7KFntizrfJJ2UAwi3amWSf2HGqNVughirgXjd3Xozwok1uWfQYnFUZdeJYUTZ11dRZJVzgu6vVpZ",
  "key9": "5fRDmep14cbMtkTJKiLtxUz4Cy44UmdktYpgFhLCL1Aroyv3hCoAzQJ6Q5PFazeQU8NT8PJWUjKS1Y5GzXbSeT89",
  "key10": "5UqSkJJ7pFhZQXz4pKZTvfsqVKoLKpsjrXBaBYiJxJ2NeTwJdHd3aUjcNVFSBdNpZiS4vsVyDuwqkNdxHroRRt1T",
  "key11": "3xMNhPi62UFWKgsLUHbmoCJZQtWGwb4jvRAGFnFMXhQoK1GrXey56dPgwF95YyB77okWrMM3cBYZPUptXUkexPBa",
  "key12": "6167rSHusv2EmeEJfjDPN2vqxMK62yStMFFTNQcb3dbPh7KZ1BZujvuvo85iGh1cvoJTLxYAMaNe3iZck5PWuzvN",
  "key13": "fPQX6UxPFpwCQ3ndCrafsbTZCAaXsLckSBxMNrWxkVXTgUFwFiMWnHVQhJvsvXGs3nXBAeG3KoZ13CsvbdVTedz",
  "key14": "2z4ouQV2XLHURNYjmFccuvRfNY8a4JJor8bfcNnKgy7ygBNoVrXcFxD6PhjXw6swsxj2g6JVgpauhPVpnxU7LWZ8",
  "key15": "3i3aWgsdrGLhfMTSYvsr1o8M9ESFmavSgMPyPFtLxwPJodnRmpBSkxtsyiKyQj5V96xeiXMKUCp8oNrsB59htvqo",
  "key16": "2qfTZX4MCpA2XH7Bez6jicNUCZQkE4YahLBSbfy63nuqPx3VnR3kQp1pX9D7wpysvxtiXAeuVg6sTj27B4t515ro",
  "key17": "2nHkK86HrxPVDzfKRvtLzpBUqWcMFXUB3T6MmNt4EkwY2bkjoggxZQP7aPQdGcFdZgUwK3uEXMDJxy4s1RRtW4hC",
  "key18": "2JZpRcGavbzrbX19hQqcLoeK72nX2G84i9g3HotP459TjUNYrFQoQCaqn5taz4Y9jU76TeWYJ8GJwmjUrT5DF4ny",
  "key19": "qTtJbiNwecs6xXVgFLe3MaqrCUzA6L1o3m9XjAVAYQVTDo4mAK2yvpT4s67Yf8HMUrKi9T4qaV6zUfMadaTCFns",
  "key20": "3D3pYbJk4nbxVsxzMERRTV3eCKe57Dp3aSt4xmR3vysEJ3hgcWqQVGfJghgzSudvYzxJ8akTJoSTnqmggbkuAtVC",
  "key21": "521zW3Q7k67zqfTMbLamd5ZJeLbJgXcL82Y8eu3GTxPfXE1n3jnqKYpvP4x5TTHNeYpKytC5btNy1BhBfUim4nYh",
  "key22": "4hquRUtb23vpDpGJdV32DpnpRnULS6xAcx5B9py7iHj9FnoUTVYFJoHb6jKCdYihSvFreejgnbpM3Kqo6rVrdZ27",
  "key23": "5AkETmZUmQ4ybzCbyDiBcLw29Mr8ZFCaf5wcqxDiAkQK5KJPHR9iNqtx4wEbJuzEKcgJ8KfhgiDa9V6xKYGy1r3M",
  "key24": "aqFfaXJunS2zmd2EN3hpTP3f1jjs91wWAPuuDNeyGaDgU2rhUAD122PmCBeHSKWnnNhMyk3eeSYEjKY52f4Fi7W",
  "key25": "4CDj3My5UF1HQhqtNgWuqLjweU8WkYjkR3djmbE6mzbDcVwMM8GJVyfWHQ37sQh6roineWbV2DeuzswYxFaCKUUK",
  "key26": "5crMAyf9YH1zEwaT6rMMYGi4bLGP191Entw4ZJ3yF7SzGUoEMyyriFctJj8zbCeq6pwbkjdo5uHTAC6khNGDdKFv",
  "key27": "5gXw63kiA9gexP7hpFpwQ3Ud86GbCQ4g3pyGRYQPr9VPBZ7mYNSq8Y3jyh4hsvVNsVtLs133BEwhxPKjyb2u6ECw",
  "key28": "5XQ4hwKVcEhfbuejrEhNRpnFzGqp2RSLQAWx8F9HweaYLzNpwzkpQkL3Vyz3uLhSGf9fmPfiohCPLGfheqN5mvKU",
  "key29": "5w4YnYZQxe9fkwWQccgU7M3DoG8PZiqzeUNPr86R4XK3XPpQXCAQD3LcHNQhJJXRCrArrdjhpkjSLVS295CrZPd1",
  "key30": "2QdDGRXGZiqdeeCcmJ1g4KA8tGu64mtEMChrZ2ZATgs3dNoptYzUs8gADTve8Uky8oGAvdvHAQ81zLnhqrcCM9oa",
  "key31": "5zceWTJPjey4kDGLC3qszH8pW4ZmUQAFrFA8AtFuWU3r7U435DJ28zjqzH866DFnUgjxP2yFEWjeU1KLzLSYpNFy",
  "key32": "9iHTGsZQK99Cxbmz2N6xqgEkCaDJsUnX1QA5WgHw8JfF6FeWGpLNEUFvhDz6aVRtw2CYFaQMBpRZ7FU11i3LPsF",
  "key33": "2dNg8iQdEbJWyuezHJZ3YgFSnRRB1nTbUuDreiCvksjqjN4y2hNsw9TV28jNvCzs35ixtDrHKaD5Rd2iXiKVx3au",
  "key34": "fWcnJBexU8AVxoKcAeFM3C4HJznSj7sB5hFC9doKQgtzCrGZGhF8fDescTWt1vEUeEcZias3p4yYP7uynyArVPa",
  "key35": "3Hnz2Bgpe7Bx6do6PPhCd4McUnJkRi3xuAY21VGZKvtt4zYi3GeKVbVz8gYvvZDg79mb54XNuSzKmcCxaU9oAKiS",
  "key36": "wSedK1zutPvsXJUp8KpwTXQizgb2m3Laa2Dynt5jVjdeiAAd9HzP6YsndsLaFj8igaANgM7pq7eP45stzu5jABP",
  "key37": "39y8ySBwd1MJ1CFeTMtCnWq99EF7WF8cmxUfxoZN3w9YhvMoHU96FtUmWXWL1bkznhaEeprdry9g4LGvChQpozQL",
  "key38": "2bahcrKehnM4LD6N9NixgXiUhYLqiR2ny4m2KvUGXY2ScyDSXLKbEUDz5ip8WhU2hNJ3BaT6Qv5DWZZk7KKGxsRn",
  "key39": "4BRhUySwHx8vFua2Ax6acb1diThwQe9iXfj3fWrC3VPA11SJZ8MYPT2a7RhsCNk5ZsWz8dEn3ZYcMsy9qGWBPWPA",
  "key40": "5cHDUdx9JfuaC35jDzQhppioA52WSGeDNvH5MCJKniXjmXZmarfPBrangaK3WhgsLCrDbCgMUFszLpotEbwiCVEf"
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
