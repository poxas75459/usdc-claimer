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
    "4pcLx8ewGKHPpAHvKE2aDfakjtS884xJW1MLE3udrGnBaW5VTeZ56GibYVG4uW5qB1WN7SAyQ4FsVpJWEMgZ1qGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X1W6YME8L6AARXy7YSeQu2sMg7dM4pC36NEuJubyCmmn8nJcQ9hPJpLA7B9ikTmiDmu2NaspsT3BG6E7MivGQyT",
  "key1": "49EhNcfYDVaSP7QNhC5NZ2WUpANgtkPfpaimr9WtTsJ5TceZRyug68JT3WX4DoYKkyLjog5y87rvTYQ93Zm2btTU",
  "key2": "4NPVhQqLVgiRz2MXqEBc2r4jFCXQQjBU1HPkeZYKgt7tHXcn6RRNd6sDuLL4tfTWq7sAn9zh4ZFa6ebUNBKGKgNm",
  "key3": "5ybh6UaLcMuCcUVFpLGd7TfCBrEsEyYoi1JMcWo6ezbV1v2Rc8Zze2U9afN2uUV6mAWxkEmexrsyr6Y8C9Q76rfG",
  "key4": "21rVH6Gf5ygHWbeVwnyhPyD6ckdvQUUJF1Y3qQzM7dw72oPZFyRRS3xxuzCiAaCUZuMZHan892sFxQaYRA6Yxikj",
  "key5": "5TffwXXK91ZhxyrHtGkPJQS1kxN6gWVYkUum2eKWzhHEEBuPZLH5LKNn5nZfbsVEhs8ycLZim3j8F9NWLgtQboCE",
  "key6": "3vvLdktfjiJ9Lrzv5i6NPgebZL6wchsHHM2ZJvRB4AW5o9UBn8CNNu41Css3KqP6bmVan56omhSqm8TJR6h4RM9U",
  "key7": "2UQeaQcSavBLdN9cLiSRM9ZfgEQVyfhRkXBVnX2p6bKaZSoehKsGaH22Rd5hMZFatPvDbrrKYnKH6B4oiEnkUWxw",
  "key8": "4o5EKJM5szfPtKqgtQFTUczbTYabuNFuaLV3guSuxQkm8iNySdBvkPDL57yhDESjW9NgvhF91A7VTrrNBXEst9CU",
  "key9": "2tr5bPDtC6CE8tnyyqiMaZVkx9FJhwSL1MjsPZ79zYm6cLt2Y5h1vHezN67RbbZzeigGDJXHjxb7ebLzXw1T2QTe",
  "key10": "TMScbVnjB5Fjdi3HzfMGZ7JWCW3QwCjRxRv2dAYdfsbzsPUPLC19NuSqRCEK9LUeuteDcLTuAhEwUhLFwdw3fTu",
  "key11": "5KEz6HFeTz5LdjYecDWPVC7NprRLfXTs3U4JX9S59FxdpWnEgmg4E6jXn7PegStr58vBL76hs2jCcdEGSakTQZfH",
  "key12": "5tWX3H78qcJPTV9qK3AmUwJGFkPAqTUP1DrwoU9YmaHavYf3nehB1Sw5JRicUDXBsxSCJbcMFaM6Aj6BmpPMe5oY",
  "key13": "4QYuF5pbh12zsmh4cLaSRMesHTMK35AGnFhbB2MJwyvT2CMMymbuzaH22c1PU9YijkwVJmTMojZwrAQZ62qcwbAB",
  "key14": "3B48i1wm5JTWHtFoZgvU2Tiy46XXAV2s5o8qzitSPyKzo8aftRDRZBWadG5kktVyAszHHtz5XDn3uP6ddQq1rVtP",
  "key15": "3ak97KeUvRUEqgpWD18YJbmW8JEu82kkHZ14deQXpAex8h8ppBKMcGaoSvao7k8DjaXEJhwjPRFT5wmETmNEbdXY",
  "key16": "S9FrGPvbuiKRa4Xfb5SoA3WTPLip8zAJgiMAaRiyamnMkRYTK3aieWggk6tKx6CLjv5JSCuCRYrwnReNJ9SxpAi",
  "key17": "2oFH66drmK11s6sxiqisZjYGLRdDuhDAp8xpq6KguP6NzuxF3dCdM71StZqB5CLSkGn2tCewytV7hmY5hoMb9SuC",
  "key18": "2YD7FMeXvsa5eswfy5dLqbNNVbCLfX54ZkvVXzn3kaZtV4Kw9xcp6XpYU5Ywxs6cyTHndno3gUWyPFjjZNVYeWaW",
  "key19": "2yrdiiaDjJKwBbnTeS3vRSeizTbr6wkKWAZpzAiTKP6h4XeMxKrcwjggT6xAKEGGQFwWADbj9c7676HkksNvBfFu",
  "key20": "EPiQN7fpF1f9gUzEcT5sWWvJ2L3fTnZjKzk9cLZq7wwUxUjsgh6MJMdiCLZN11bmVRRTGAbxAFieUYL8JRtv1dJ",
  "key21": "3CQ8L3Ttj3CVQeuuxV9WxhT6FFs28tb2BR5gZ1WSthBoyUCMp5CcMQWhWKQCSK3CcJttauEKhLvwHW2qhhTmSLo3",
  "key22": "25AT8XPWXFfGGub7ZGDAX1X6SrxCiQPd1hkXunjpjJsaKjPYQNsjFYpsauZVbwmmD9BxAUwp9TTvCEF8JGBRprz8",
  "key23": "5LWkRMpP5QknnFSVk4vwsRJQSfk8NavDY6WuGVmRibbKePE2SorUNjuK5YwXozQvaFMzFKdsBawczBxaQFXmZfKT",
  "key24": "59tbv28SbX66wsTzApL7dhxqZEnbXakQUj4i7uV4oe4TCrCfovCMNcwKB4ACwzxwjf6JL3UdJuZZr7qNu41Cot41",
  "key25": "pWLP3sH51DJvAUN7TfCtP9tWrstsutq7qjvqGARMUZBwo3tFJruydh7ZP8AZmU4ka77Z71kyKcQpbHaSy2qXa3c",
  "key26": "4KKxjMeKC99B7yRXWu9fKrh2uD2MGHjRFXpL2fpScxu5PGpFbaskcUvr8tEMfp3mQ2wbAJtcNBY8SXZzJh66HYp3",
  "key27": "3XGqqNQdwsyYoCrbYjy1vrsWyJaZj5dkanx4jfTGeCsCw3Q9YQgQ9bDu7cdX57voVi3KXKxstqSMSHDG3iBbTq5s",
  "key28": "ugHaE7EmMHrTEznZ8fqNBLZXooehKCumRbEoYhcJJqZoj6WVodgi89EEW4s5c1HyxzSEnoCJuC7s5Sfccixj8GK",
  "key29": "3Pz2DcRjf8cG85QKptKRABuQonMkbhUyQ8aXynVLosYDdw8WyA9busPVBifU8bTDznJTRypyQYm77A23fuBtwPjR",
  "key30": "5ybFZzGaLcrAYqjZYwDT4GRiNGJeZFtB6oqKu4qfZ48HYQwQQSyjzoio2qfKbM3twXKZS1XZ77KzkXiuuauQxtqU",
  "key31": "4e8gW5j2rTa34JxQp8bKDo6gg35HiDXyDxwsNNgaX9vR2d5GJK7a8uaCBz2pNqhE7zoe9YbiDoXiExUWPUcrVi5K",
  "key32": "5vZVskahQv1j4QyeV42Cu7B4jPD2QLVffTcGkVp9B3iBuHfdezs2e6pNQJvjLtkou8kTA8icxRgZnmsomjdWejWu",
  "key33": "5rHL9ez5nmQcJBeuGq2XPrzMFMg6WjK3zN7Qi6xBLVfjo3nKGQT7tTLoW1XYyQZRHfeaHTpuDwceaRKjjmTJPWkw",
  "key34": "2xfuTjQtr8RibiZLgbPg69Ek9mp7hRrXDj1L8wRxQiXBxmFtzSkfuy5ThPBi6ACKxBFki2uZed5PAEH5eCyYiV8z",
  "key35": "5AkzBQw82FDseGmGdgaGcFxeUwMGTcPskxDBCZdEW1yceG4kfzQ4LK2dhAGedssJ65gQwUY1fyWFd38A1voTnXZx",
  "key36": "2QLoUvAkLD8Hh78fWVPxDuB78kXWmRfk8d8dcGzHooALBiJk9Z7MSSkh7isQVaViWP1t5XRhNrYdJs2ncHqidjg9",
  "key37": "5PiVoRkhQ2FyAy8SLfj8AyZvcGg9Pp4kXpiNBmkwdSuCC4ptNRLD4iDQtBZTXnJZoeVoSszimW1kPjZZnEzzXoDQ",
  "key38": "39JvYWmupVrExvwVnDRXtnSkQbCzSMN1JZFNyRRVEK3iCJU2YMvwtAJfy61eEJvEkQQXL7AbdFrzERCkBfQ1u1Ki",
  "key39": "4oQB2wBsxNUPZsKEkmKLZttQKLEZWhcwaUUxbwgidXyEAPom1re3okZSiox3mHQVEiD8ZWE8TLLujsndDmDTLmYF",
  "key40": "5edUE8qF2gUgELYZeem3x8C7FGw3tQYNvvaZAf8PUL9F5NDsfpY8vsZ3tuSXx72qstyiMwikf894taoaL4kgceEo",
  "key41": "2Rx8gjz3tYVQ5pb22QEGMtaSLrRDJ2G2N97FASnGUvxz9fUG92nW4vRxbSNcK93sML1ZVcA3pccTrRjYJB5Xzav7"
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
