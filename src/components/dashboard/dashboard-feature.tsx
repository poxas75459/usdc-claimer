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
    "3yUE8mp7Q7ZH2k85V5dw7rbij1R9xL7jYDRyge2kkbkHX1sb4GTCqx3A2bRSzgwsgkxJW17bxTq49Srvqwy4pR71"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "674SNHmKyL3i25gwnxHW43fvfCBysrEKH1nt9bTJRPaR8QjhiWdThW9xerWpcppU2pNmHRvLmekVRfbfAnD34UKf",
  "key1": "KNuXVjTpu8jJoV4Eh3Mq82m84bQkt3trhce63dPyKjtnj7JTNqUXEx7LVS8UFyv3YHhqmrCinfpyh82n13TLSio",
  "key2": "43GVUAF4uckWTJUSG2wRJgvFES5zgYMzwzvdzFTKh8Ct2bVbEhAqe9amyTz4px4vyMH62XuMerNRfMVvUBKDvx2Q",
  "key3": "5VFYjNmvmHVQZrzUytmgv6Sdj8mWWig9a4vZS4PprtAmGojpSqvdjyy6BxCRjxJgUZzQW3nXL3Mpu9HXNZZTU7fX",
  "key4": "3P3v1iG3VyBhPoVSkz7UvtpDXhJjkbH49nFfg7zCdAVWpbtzR847cc36eMGnQffxG1vJopZedVgMiHQtEBgTupYj",
  "key5": "HybtvKhk76MvAAJvSRUrMDmfh57NLmwH7txZC3G5WbMexpWM1UYBxS7z3JzXwpGUgBFSe3gDY4oBUJQS3DyGHKc",
  "key6": "3voLkisTtsaCMWoBXYkswWQSDoyk6uZXg4TpEz3bsPAcfMHThLnXkuzaajwK6bEbALe6SA2sKa1kkfdj3QF5E7a",
  "key7": "2XT8PEeaWDqvzan1VSd2FwDFtFG4RaShvq6nrPWoekyXdccsqht5HDTMydx2wYPhZC6ic9dFqXNBmBi9RsF9LqJi",
  "key8": "4t92kWVhs535eXQHcKKAu3S2Qt7ACej6Ms5bS2N1rkBoeHKWq3M7yTY3hbUEoLbSZuKBaPEYvZmyj1vmLcg8aojo",
  "key9": "4xhD7BpzoJAFxHFwhbnffLzUXaZoXykguWQHc5hjBiBSgkamobWgKWNKYJDBGtMpn5PQHSRF9uRkcb1N2SocJrrr",
  "key10": "hD1kGZxZdNDt4LRhBcpQeSupujD81PBSQeNmg4UkFbWU2Jy4V4hR515a4L8FBu8sXTg6HK8PwBVVNQgphuDwQj9",
  "key11": "4VqGYrwqvrCkXawNRpQ4hvVbtkiSMFdXKLPTkaqhVKCY3Q52EtLw7MrxgG6JmQc7Hfk5WQ7DGfoVoHGTsYw3tSqi",
  "key12": "YKkF8hJJB2LzHjvdGpLznAUFwpvEKpJq2VR9GskPDF98wE3vjiJoiRqiGti5bwnNTrptPZ7u72tB9jXgk6SbzRE",
  "key13": "5bf6rr8DTXjxgXQ2pmTPkg65hQufDhbgCwT9aBAAhVditHPAafJ7LVxZvjQCtusWz4k3iWLX4ccuMrhZ7Gi7bTMf",
  "key14": "5qJKBfZiXc9VPVGZVQdJDY3iHcsvVpkMgcj5W1jERu5czyKEgCZY78vHbjCqgoWdmi6KRgVTVyiAtSZncUVAfTPY",
  "key15": "5MSgabMa1bW9hzdXkopYgUSj1hU8s3LfyeHmivhDJerw4dxokvBoMmVocoyo8nqxpqh2k7uTMntesRyhARG7x4hg",
  "key16": "5GKjgvyoj6AaSGUhjLkhS4Hp7anmukMaXS1TgdmPJAftX2AbpUKxZPkB359seXg9dzXbdEuNkB46RB9A9GtnZwSU",
  "key17": "4gYFW3HmN7pEFR5uPpbZyuadyUPvsoLA6ktE37VgH94WK77NqwjbwtM7Ez6bJeZamQ9xv2jXNJWTkJKrBcBYkTGZ",
  "key18": "5a9EFWemi4S6Mcfu9b2yaBhYdnAsF8qdZXQbTuJPjHreYqKsUedWWoaPFPpSHKuAjs9Mjyrgq2ftnNhvRUueDsiU",
  "key19": "64tTNhQcqp2dwGHSDGw9iw74DmSMBVAqvEdzwkEixJFVrRsTSceHHsmCohhgB3GtaSMxNTdRgEqm5FnPEfK7rCQ9",
  "key20": "55tdDjE7sQiHSgEaUsUERN2DySHWgqCdS6bh1tWm2fDfFCcUeNqBtCP1FC9ioXcjC11Yem8QobrpjEHK2ACa7yGH",
  "key21": "5t3AKWo8XpoFDFjL6kbxD3unkU9w3eZQEF6mMNLHBcRDrZGWZrJRmhDcSSz5E6rNbjwVndEABrUsh1CVuEeh35aW",
  "key22": "3PLwLZesM6xejYwsra4yohSrrcDu1QhjRPLprx15V6w2ptLitN62cE7dezFF6Np9JJeiC8kzxfa7LTDjaaDiAFe1",
  "key23": "4yH7XUQPnnU8qKVckXpdvufFij1c3fkLCA19oLwUyH4WAtbmcw5jrpmYuguKVwDy7ZuRNRmMT3T8iSDgYJkyUQc9",
  "key24": "2xq5TRWRQNxTe8JnmBY2APcfokLAi9tkvJwE7Z842pHJV66BPC3DWdVWzbmcgJieutV2r9rFCzxJrNdwb5BxcbLi",
  "key25": "5GdEmDUxKj1GLfF9zNmSCWgz9z3vgFeYgWS8fPqMagaehHSpcAJcJKGhTRxpuKJmy6JrVDhaGoSonUPv1kYkr8Pu",
  "key26": "5kozYNgb77zE23No8J2BADPqZ87tXrdRdySQ3f9vbeamDFcxY25CctQRDjmpxRUGPPvwxTgWjVgL45eDYD9UbaUt",
  "key27": "3kvRNr6ed6WyFFX1MzHQGnkEMMeFmQZN6HRP3wXsMukM1NGt7HN7BKAr27EW45YkAhqHGRVhoYVcWV4Mahpwnktu",
  "key28": "MxverLGLY4GCKZ3Y42Cgz6y59fj7aDsR2XrMrTGpVcGAoer8frpXCnzHkCvKvEnpiPtdt9MTVMkg1dL4eGUnCM5",
  "key29": "3jjzSFvA3NvZN7AczczECgZAxvnDL2A5eDTFLQXedXFonsyVrnxzkWv8gfNUjZUK74aWx8gk5r3gqtsJnNoxhXKz",
  "key30": "3HbaZxmwK5wh3qjTUTKV1v1JU71MAFPhA8gJUFSwxRcm4w8VcLQ6d4EhmgKeZvFhrbShsYnpL3q6w3NqC9mnJTHK",
  "key31": "4z9auZUtsce8gNszYJh7LSadXRkpzstqScSHz9gd3VVSvvWvztfG9T8be1cEVBUGyaB8LTRgxZzEaLvScTt8tG3Z",
  "key32": "2zhB8yoNF6bpuTaq76MEtJfZM2geaP9nh76i1hwcZycbwukcYJAeE2K5rmWs8GU78YsfWRhC18igD68y14oTpajP",
  "key33": "5RgSMuXhei9TLhyQ3SKUp8AX7VGsjj5SHDNf6gVEvbtHyDHkyHA2nYA8AyjG5Cak1RGu86oWg9L6TLq3dnqj5aLT",
  "key34": "4KqndwWnY1rdewCw2H5MY2oEw1nkmKqdpx9mjdFaiKnjmf28qdKhQzs5z1uVw8Ys85GxRBhXcpDQfXLKdqDtzaTY",
  "key35": "2erp91wXZCq6E8XQYp9LwxQy85iwookHqcDyT2C5AcBYXPf9kvvH97oTj1AkAhvPxi3Nh3uLSHfWYkAiDX4aGwQc",
  "key36": "kYVzjGXmk9kKFkf7Xj2CPqdTh9wKxXijPjQJx9HJVRftmQhg7qh2EV37frLbYapzmtCcK9K2fx5cCX3pxwJ971R",
  "key37": "2D8bK8pUa4P247EfAMVvWswZbiSKATwpP7cPHXUYk1kVcCTnFpRbSutFjA298HHKF4wm635FqQ6HVhYXms18EX3W",
  "key38": "2SdFVbjprHyKFATREcu3c9YQCraq7ggdh1i3LPtnmu8fbQ8qwzoy2x7vFvWjmXGFnHMdxhwj6qqUpm1KcLSQjRuj",
  "key39": "jLg3iv8czQnbK2R29YYTHecwiukrKReLkqmk7yD87TeiXTBW8J9mNdMTmfrNaXsLBvfUeGi9uUEvwB9kFH1G7Gq",
  "key40": "x4oE4QeGdH9CPg27TN3TT3vjnimEAFz9U8m1hxGLXNZG5K9cRGCJV3TjYJXs9sjS5BuCZdMMi73XVAYm5Te1uAR",
  "key41": "3JseMmrv79ciG9PDPkDXoz8UjfmaZrbkWh8pmVjYK3UmRwVtS5dX8X5p7eBzpA6DuVS1khvQiATdoyKq1atTSpeJ"
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
