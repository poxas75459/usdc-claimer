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
    "fWu3P5gRrAV9j3auvwndKbPpBVEcSVcCPKUt2KhZAtM91a6pv93Q4oPZXVDKfqq3FoCyssphteEPxdyPoPs3Zn3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ftFeML8GQyFn4vcKoiyw3evjXG41UGgXvEBscjxegsJzuohnnD9L8dbiPH6GhWRuBF6BLeUUPZCuaMT2JWNN85E",
  "key1": "4xYMnGFzbdhK4LQzvSTxEv6woJoE1PaKMQjKDvsyDzEWESdzcgeAkuwdKLZdrbYotdt6ReEKmVaS8tkMScuRqWyu",
  "key2": "4yjFJ3axgTMdc3UHtesQ75icQd3uXLC4xKMUMYwLzMqMuNAtgdJQ9UmU2k6fw8YsLnEXJBUKFyKQVnKcrVvGeFky",
  "key3": "5ZWmY6Ypy5ASti8H1rzWjkrvwxkaPyW2NAEwKFo1YJx99pwPpiBp54S4eqPPobUkJdf2956kw26R6Ca63bjUh36R",
  "key4": "e7BGvfT2iLVXosLE19f3MaYpEUsG8fQi7wsMnK24GeALzj3rQZCfip4reBRgNUVpHafBKPvhMcQQcgHhzFVRovQ",
  "key5": "32pB8uTTxxCm1z4Bc7XQ9y3d4RDpwXnJJ28HLKQ9L5ZXawdesxrnB8QVrxqVYfPEWiSit9kok2hwYfNhMJeHrXLy",
  "key6": "5f48py8v52KgvYJ45BMnwMZu413YU3E4s7dVdvBnuYWjoELEgpFQsSMNm2heNYM5iH2jsvUj1w4nLyqMqvUXyfSs",
  "key7": "4zLe485RjrsupEeVf4uKDGB4SWmdTSfAUsB9ZLYngtwXiyYuqUG4g4TJsxNfNtx1QTrciqUZ4Qr9KXRKxDY78ABy",
  "key8": "2J4bHUZvpCcYCkoWCJ3f45gweU7dkJ3r9QGND8FwkVZME3E9VMQ7dho1iaXsQFs4GTfbrBGmHRwzMRBpfM5StMq1",
  "key9": "hdAHqzwsActC6bTNDa2KnV763FzR21HH6X2ZqVfVdRhQHd4ZvvWN2m5QN7qUphKdw5ggD37Wuh1TP4cmm9a2By6",
  "key10": "61MK9PqbhuEeNqXdbckFTV7waHr8pafHWiqGaBpVAJH7tzNNSfa2xgPhxqPFa8M9o9vuFU1U7kX1LUyNGHC36bis",
  "key11": "4aMMVdQ4Jt9aWjbezuhTV2VWSok6Wyn21Tkf3hLWyX7DPLAgsm1nRLhLovfL9eBgG6DjkFKJuGVLAanRGw2otVqg",
  "key12": "2gEQLduTTVWDfR1vC4aHUN1BUPkhHhTJbdqsCkDQrxvqHd4tZPbwfGrfpMyp213NvAUKzEq4qpPerevsu42ypjz2",
  "key13": "5umAGDuipqhToyWdr5qCwhVAeFR4cDGYvQ3gGy37kigR1HNSJcu6FaPjrrFQNmSTqXrDE2mqekepiNCMXzdc15w2",
  "key14": "hbHZvFrxA93r2EpDqfAypGezvi7W8V57kLVXFENhcjnfLCkASMDSYYquxf1fP6tYwz2JubkfPStRyaHSbNsRE8T",
  "key15": "4TitYWWWixyuQbjAiBuyHJ5Zu9WRn6Fy7td3KhxY6SydFrMNjh5hZcWq2oTKTekp31jCgJ6hrjn1kcWnuXffBCtt",
  "key16": "5NSQJ1APgDttS6aVi73gev5hk6TbxAk8yyPq1zCCrAGUDYxFv8h98otSt6zLp6hG8aWFAH4BpBNMYNn8Xy95qtx1",
  "key17": "3iz59bnhExwBKnKXzDSfgc7MaKkVmnfLqdCx1zYpxYjtxp29A4RmLGuqWH4qGm3XUTfmGiw3eyK7VDmbL1P2CC4i",
  "key18": "3EL9i76Wqg2PjVLxhBjHz5YaTY7bZbXFc1Mhe6fRmuHwnghgGSEGsCq3caFHWzGecXkHD2GStxw1znbWmrPQqPco",
  "key19": "4ae1KcJx4ncBfHYJjKPXbvVYD4TY25BxYrfVgUjNSmmWSvj3Lfe9mXxEoLiSSxc3Y8pXoWKymswQm4qPqJXP3g8L",
  "key20": "3ewan5ixrmsERKcXg9MQ8zNDcDNff9ZYZQVjp7AMtk5Hm82E1V65dWHLo2ePFesFkhW5kQkZRsNxpsupzppftBBD",
  "key21": "3AG8NtLLfxTGp4tzSv1UmXq8D4ZWQHsN41WhWu5B74Hxs3dZV12ig7Vw7kzH9UtCssbbZVki1u6Zvd1LGD59QTCJ",
  "key22": "45ep5UexbR5wZrYkcpn1E9TirZ3NqgemqQHiKftW2UH9NxTvDE36h8pPrbGqcYZZVAQdeF6uTyxedpPAZA61MF4P",
  "key23": "tFQb7YxqoHXCEf5aFzkas8V4oo3fYgy5sgAVPHfKeZeZepQJqdLWbq5tcgmsmPzvmhfKkrUoT6gmAQ6ju78XQHv",
  "key24": "25AA6fQtm5uUsVPBjkqWYxWLLo4ybX68z3AxR2Szwg8GSt84EkyaQwQH4DkevibPhdmeWFSG6sdJwA6ZVeXGHPA1",
  "key25": "4WFrPzrrdca7YqS5GZghjJaXLNqv2s6wSUZhbCYzg5Ry3zfSD1HG9jFJcrqhTnYMbX1WXgeD2FQvakTvHuwYqPZG",
  "key26": "44Y6UYGvjL2njggC5b6Fw4hxbV2ZixQ1BANcCmbnisE7QMswYh7Vt9Yb4hLqZywNEonG9wqGAYWp8EWLgTqi9J9u",
  "key27": "53zwi5gzhghAcBYCL1FG9L2GfG545hcydg9Ggew9zDX76PBk6FomaQ5QQcEzgVb2QGGcbCWXGBp4Q8RR1a6XmPbb",
  "key28": "2i89bkDmZxcLWfnUwsNYo7ubyZxVd2wbczXj4SpevfQHYXL8C2GxNgdETVKX6ATD6s1Uo4VhrQEf7spzaFpsTKKf",
  "key29": "62BFN2sWgrnAckkx8bQrxDYqYmnwT2rFBmvoha8ScmtBu9i4nBWNfdAGEn1C9vVzuMxJsZ93w86bXaUvewhLTnsx",
  "key30": "23y1wX48kAt186hFnMBMrLE198RLcx9RFLC3wwz775Ex2SCqgX7GF2mheZvbWs5M2EfPsWbeKeFHgEvnq1aKakZf",
  "key31": "4Rw7d9X31KPvVJBpeRbwgxGpopBZFAZXeqKG5FrrAzc6cTayFRXYrwf7jcrimtVkAHvsQLBVWKpPpvup9FLRgYCQ",
  "key32": "3MYjhnu1F9R6Njsskp5Z3Z2AzSTbeTWu9i64myGiJMkNs4EJDHvzvW37iDycps3uMVKqE3GAjJRyguNfFU9uqECK",
  "key33": "28yGyuMq4kewvhTLhYbNSHZXaMdxTsatCtohmVU9HY5nfJMwBKxvw8Kb5YHwVLeD5tQDGLqgifGPijBZR1HwMW74",
  "key34": "3giF6EhLHw7offVLvtykVjqYaBmcntjZLcGtG3expNgdJrzPjzM7cvENGz27uiMoAYNhGt55ASSYTQRWpmLyvNmx",
  "key35": "2e7WTVAmJaog38nqesuKgAKdUiDUnJKmXDRbsLCEbKmuJbWvj4hi1qoxph7zj9WnaKnemps3qy7uo1ZUMGfzZXNm",
  "key36": "4bDca3PbJM47qgEfu9TKns9D3gfTA7g3EXkR9wasuPSXStJK7976tcdtpMK1bb3EmjS8WnnKbbzwoyrycDRBBu2r",
  "key37": "4BWhJ9qyPXymPjK3HboACMXvgcMKnEymnK154oo1deV3LDrhMG7Pftpf4eo2Sr9SBnJCQD3fTx2e9pxur1ynPLEi",
  "key38": "5ZwTBwznXSFJFVxvg8SiXG8o3VnhMJLospUFDV3X7359sKcC8z5aadZVMoEcq7VVn9eCyjAVAoCg5bGEXTvU4hA9",
  "key39": "p3soqFfDqZoa8UmcPBwUqk3YWLgFRJX7G15RC3RAtjFbcb8QJMoAyU3bs3rvawexu3BpmcGHDxTmQCr4gtrh2kL",
  "key40": "5hs2MxUbaPwjzgCqCcAsvDnn8vy2zszKL34c9qtNSp1qw5nNcU9pq5DvBVrWwsdTFgj2o1mAWocWHYQKPEAjE5PG",
  "key41": "3gvH4oSahuXuTHycdiDXEnrEx5U2qtepdfVc7oo7cvH22eFBayn4kwbM9cSsy665mVbyUJjJtSmFn8fvcB4WE3bR",
  "key42": "4ZcSTJiKcsn6YkgUxKCjB6Pm5eMXqSFRYziW2vn7w7sFtwqwXj5a6VDG58w18LsGG9CXpHcGufMUfm6dXagquTWM",
  "key43": "4V7HT1pmb23J7Zcym83Scaxx71aBKufsLEKh95oWFxoEaFyDuUhdTWnEgAj2UZiLZXrtS2R2X4VKD7Y7ZBJ1ngb7",
  "key44": "z3bio76SqSmjXD4AutG1oaMi15zEugdj67su9SL3odtoWqW6LXrRt4bRPwVR15g7TrE4jH73mcFUxgoRXezUcXR"
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
