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
    "3MHHrGgN1x32F2Lqs795skzgug7msMQtbAUe3GZCd47X2uFHxo96dNtnQ6FrxCLMr4t2YFwAxn4UZPJcWqkgf8kr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TdVtepT68SZDVPP97M9xfB22ztLzHxbpbwvBJJGWTicfysDPxdhjKSqmkJurZWKG4kUbwRvyzEYB62kwz7kUGxy",
  "key1": "3Qxw526zAR6Kn1u4FEJyEHwvw7YvrBu9ssCr3mAXHMSSxF66bwtsCLbb5TYMPBUiu4TkDZU4a5LkzsWmp44V2USd",
  "key2": "5f79XioGQ1inhRmXpoX2BPZAxmZ1DvPKfndtzqHXzRe34wAUx6xTyM4gRhqU4nrPDoTwcEDh5hizLsxQYLd8yCs4",
  "key3": "4Mfk2geQA9YLRJb6akn9RR26vtG5r8k43PFWLguUQqqcHpmpv9Rq9VbrJ4GbTEoVew33qziz3BdLv6gMui1Er76T",
  "key4": "3kVCeLdMFtzS26rzAdV6iGwTat7xqo1PtqSTjwWDuFwJdh9A6GJrtHd9wL1CT6VpeBqo9nvwaM9eTor5kxT5yzdA",
  "key5": "5MPrgYLRig3b9XBBcryLz1XfoZZrUKcRmUd4yYebK57QsgDKc3WB4s4x6cLeRXDXSz4WGneYowAnhi5WoRrywKni",
  "key6": "3Juh73Kr8ptNkb34tsCXph47AW3hoCk116MvU82tKVAHdaJUzFYmY5A9gM1nXHzvsio9Bjq2WNADaSzDqy588JZX",
  "key7": "3fyBFzav9zsjcnhjWto9XPfZtgss8T6a5SmdY2oLiNpbWXqp1fYqpoErFYvUr8d4gnhFKdguzXq98odTUAPf6MUq",
  "key8": "323Fqwz6tUoSMUzYH1HTAbajnkLaiF8cGtiqdzj5eVZwt7XBbrNQPozZETzLATKtExowvfAXX5bm6Zx6UiY6vb7u",
  "key9": "45YNdabxTQnoVrnhnCsFSBQJBhJrmYoaHh6bLTBx5da8VN8dQb7L9QD4w2UB68AZCs8wYeps2JLSP9XM8pw5B7ES",
  "key10": "3DWXYcXo9DWJYXunSGmekzQVJDg8W9EhXoHrEfVny2RkvNxgpw6E6s13aEMJnRxArcC5tPkDuvckdbF5g4cd15e3",
  "key11": "5rU1etFd46TsHJvSj3aaNSQJNA1umFuYpBSR74K2LMfdfSAaqknALA5y1aUUPnf3Swj5tFXYiTMGYEF1LHKo1zZg",
  "key12": "21CgME3a74hyLMhPDMgQtppxShYtKfwGghEuCarT3Z9nrTg2fRTFeUgtzeXWX2a4svWWPY5SLpBi6JntNGqw9ncg",
  "key13": "61HSAi2qtCY9y1fE5ZvS8CJEd1CL6UnsjqfmJq84T7YBi1VmavrgwesTmUsEvPgNpU6rTau6mG74gJUJ8W3zbfcA",
  "key14": "2gN4WQLqhyv3oD9thUGJpKrS3xuxvoA8cn7qeJQjBTcKNr8ivPkU7R7mTkX2njfkAgfyweDPdn461R88BiEFK47s",
  "key15": "2KsWMLFgx4848Gsa6rgkz49fsyrxPCrJUJ1bZzwqcVKHYjHPmHAvTPQ2gwK9HGQButUBAoTFncmrZ4LMS91imuSb",
  "key16": "5ejbrMVupiiMefWouWdtwjXuPaMFZjGYdu6sKt7m2gU8Snz8ZB3MuCRNZavZAc7ZhFxSxd8ZuZDcD6ksTs2hwvky",
  "key17": "48MRmRtuY4uX1rjWUGwYPSA9SgbY2VDqEtqSZAii3CW81tKzocN9eCgoAV2zwxzLrm7DCs71jkGzj3WKu8LxtcyZ",
  "key18": "3Y7E4bQWfBAycqeEg3g1NchQJC4qLdcTepM4hwzpkCgzgvVtRvEvbrG34EbMFye6p46fXBeczw6DQcHkk2WgdpgQ",
  "key19": "4by4nuaVMM1y3Wy4wftQV8egbXqpfmYYq42hgYRvyiHo5Vzayhn4CUDVzYiG3Gn4jsYe9r1uTfeSfqfQ1im9PNHC",
  "key20": "YD1jfRVkFWSd9NsZYxgkwMZmVyAeAt7mS91e4j2fn6mBsFDLNUCcnJ31XgMjYyUE95GU8KBWDkBwse7E2irnS2j",
  "key21": "WAEvPS9jyf1doy3ToDLoVkYdynZtg2GaQfPBo7k2x1K5pECq4Cojr7F1SVQ9qKo2HZ7eVWoja4ckYw7Yyritqj4",
  "key22": "3ZnfyuLSxRhgJ7yT5G8ge1JRdpFXRLywy5eEgTTAyUB8QQRcW5MR4HWJLZr7Lzj2wEHopRH3Dduyefi1ZnUZFFuP",
  "key23": "5ov7nDduycCdHNTvdLvCphQ9U7FjTeVRt7MT5j4AoekmxuxPrVBgrfgP8HyLs3utkRn9FVKGQnnY6rtT8dRqkgVw",
  "key24": "3GGF5RpSFdW6ZWP7BocUHmeLzeDpK5Z8pvwAjJ4sNAvqxboGkJoJDu6rbeBkhaHmaBhn5GiWrrPNorEtm9puSwC9",
  "key25": "5xfEuz2UrCvYJGGRRqucXzVZ8dFdU8PiCrxY9YaNpKXXj25nUe17PxgkqgTq9zcAtwy2wAw2AkvfxDVXfWE7PZVd",
  "key26": "5p7dSgRpEHw5QWc8zJuaGmtpywubs2mNMQNR4p8hVHtNtLE7NiayYd6GwcskrizzEKg8xBDVXGromkQLqdMxHRZq",
  "key27": "5E9N5BZ9KxBQFaJkBtdkzYpSdTavbMK5FhrC2u9mxLZTCtSzorrJm5RRaobkPFJjavQwop7gbeaWx6xVFjSKt15L",
  "key28": "3fnKwz6LSEKCg8s1gPwTz3BraFQUvMCuEtH9sVprhdzGZReTcdgVpBFUgQMoFPqzaiQg1D5SPhe18guWYYi9RMM8",
  "key29": "3z19GrFETRixLfJAsgxeU8YRpyfboChzUd3hJ6QCVKyArX1QYRfEnCmYnGowxbb8xgLLoYTMT9G6TpkiepTu2sye",
  "key30": "496oTTEAVoaJHXTsSe2Qn68jpD9f14mdfyL2ddTpVfP6J2JZ6DnbyBuUWEYvQiow7V7wr9kVQuZaE2kzjHt7sV88",
  "key31": "4QTX89gops2DajVaVo5oRCmQzm4Zq21enBtmTuTNgoatu3QApf1KUbh3ywQuibiBP9cDzkFqs8zUeAuGLPQrD2Cx",
  "key32": "5MsJzfNnm7UoTfAk92ThhcAHvMFfzML3JTS2iMFqNv6ue92wUPd3hdPHgE7PYp4qXmDfEazNJJjUqpkA2qvEU1h1",
  "key33": "64cFmbvyJ29iPuTTgriEoKx15tD4t6LJZ7TqyjuZghthhSggX1pz7pDcFXc41DgXuAuBxUix8iDFb9zwoSfBBJ41",
  "key34": "5sD73ZqYdwKsRNtgnzEC9sdq84zoAM4sapfTNdLTHS75McpHLbTS4yZvGxm61yj6SsBwaeZVX1wGv4XbPoo6Riyx",
  "key35": "3h3F8DoVpi3SFRu5xHN9UN7zQ1GPEgk6zQfQZJhuts1bETgWAf3ETzYAPHAWDEp5Rq7maPcbeDezQgVMmMkBYNLq",
  "key36": "2HZauyP6V1w7a4pGvhV7ZRdkw6Zo9JM8FyBim8Wr9z7UiGtuowdUDmqXP5iNghxGUkqTvrZa3oKmKeGMpnhWaTj7",
  "key37": "szoYNgw88kCU8r2T9SPQZZmopwFq1u5uKzvp5b65P7Fnvq9xHoP1jCGRXEokeQFEGeuozk3STtBEqvXGEoqasgF",
  "key38": "7uEs3bL7AcVdLT3PsRJL7eCL69iwwUYdGTmryQoU5FmGSMLrgf4j7dPAZsbsq5xzx9XQ6nRvQRMYqVnhpLPaymo",
  "key39": "5BoXQbWKDiE4Kyh9d2CK7Sz5izT4AFqiFdBBEjbDri8WBhxifMX1niuRmrEvVbAqb2u2cjKK8rxDtBC34BWmhaVH",
  "key40": "2x5Tr9P3bvkHyAPimm5Uu1r9DAKo5q4kHsk93fkpQb8UCHg38wm3MKo6i2BsecBHS7CwxUMwtf1hRQKfQFWNU4r5",
  "key41": "36rw1eKxtVPmQbiwhXKE6YLDadxdyxtohEr2dwuoMhdBFmxnCGLGzz1WCss7LxAdybSZgfxwoTEEayYV7U1monPP",
  "key42": "33jsFseiYM8Up1AWbF3fSR53bm7hpe1GyaSw2TXP11WYPHrU3ZLoxc4seLM25x4YJrzx1hWgfviLNiTi8A7R3oot",
  "key43": "3fY47y8EbrVKEpdh6VuXAbgCCWPrgseym8mCWPE2tZALTefwSRDQcNaAjE3ZyGz66hohTsYq9eimzYSHd1x9BzU4",
  "key44": "5FE5bSLQwA3fYiWCRbDFtHdQ1CERVdTjH63fUcWQoWsfK3jBs4xoAfbjCCzEZrAZCLipPWeAevgSHnTGeKq5XfCM"
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
