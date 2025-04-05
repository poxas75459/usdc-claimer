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
    "4aphRpatejoJ5H7oHWhAd5TtF8nLbHLQqp1o6kfJ6nMnp9eenT9PKzXC3jYgNv3LSMSeeoQkVYU43mhEmUsJupVc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MeaMfSYjm61gXYE9Xc3WXY1uspY4yikSTZ8Lkf9j62K99jb23ToScfWbdnFbqo3YvEmQtXAYrdSPTDekxo1rUuX",
  "key1": "332fnLWnevss16dpcsH4GcPJHd29eaN2FL5znHX2pwYEFsyKULgD8bEN3fqtjBN3spC9YbTVnpxqBLtvK2yxgfSk",
  "key2": "4P4wvdXbggNSEt7BS3mZHQ4ejM9GVmJSM7kU2dPR8hx2Vh8WEqnRkdJW46A1qRouWccC9PFKNiqQE6ptUk2bwXdb",
  "key3": "3Ex54Ac7Epy9Cesq52tg2ymZUgKv8TwYUe5EvRKNwMT3Li28ZqgBpy3YJ2vRipAKkbaJnq3kyh59Wv8nFdiFma1Z",
  "key4": "39qd4EJUDq4vGLxHxtHoxtm1eoJ6Smdv9Ky1ghPbikYFwvyXMNs4UgEPMNTjSMENmqhrxQqci7XuM2rJGSmnsb28",
  "key5": "2VeuMyYv61vi7TzZiFc28QiSUw9455H3K4gWYshK6xrB3N7ntpaGNqqV51M5PUxQYt5rQfjRrsGTrdck2bupmRxU",
  "key6": "41FKDFi67BGxu9thDhM5mykuV6zGmdQPByoMhLF7uKqMcVp9CVoT59CdER2pdxdiqddiL9hbHk2GDp61BzNa6tyY",
  "key7": "YKWssqTVnuEPX7cnLpCu7SGie3RMJS6tDxa26pwZh7p55MrtCaAscRyGZ8ER5T7G5eHDEyjaF6kTZoV6uGNZo8R",
  "key8": "2uSGPdgeNkujCqEfg9eJ3aiQYcyKxPL24txKeL9GMvDnyntfiTPmNn4wYj2npN7C49cqQU4CvKhoSSDMJzBZrHi7",
  "key9": "4WjBMTeML53HxYfRRDEczhPJxAfR6WY2FYuKWrnE7xo4ANNoEXUAgRbCtmuPrVPU5Ag4DmNZXpVXXV1XLK7bDqwG",
  "key10": "3nBNHe9tpZxqdH6BdvYKpQvmUVK6jz9BTBdadnytqXxo1aD6dEBLRjSaEsSsbeqsjert7P3Nt6JjAyAhLCEJf7os",
  "key11": "34fSLk2PBSn3RbbyA3Li3Ugmcrzc81WD575DxQQLNjAc2PUv8DfahkGEsbBqL35QVbXkqbPpWjiiFHv349qGH8td",
  "key12": "3YcKQgy61d6B6Fe2BGJEjsghyntas3T2yomsRQg17F7fcfZ2ikHieXSTbqrLg71PD18eY7dxH2MzYZz8qzSfS4tz",
  "key13": "q3v49S6P495mHwM5H3aRrPpApNtbjBzvVDGh8DxumGfbLmXbQpsacayNZKPb8Fb3gCd7agA7AnT4rFmF1UWw6Du",
  "key14": "53RgtnCxvpZrUkq5KxwU8PxvQHx9fLSENnssqb6p3PoyWrPmYwfZrpmEvCmB3CVckwvMYsEsK1wHRHyQwGzZwZDM",
  "key15": "34KVUJf6rCb3UrLNp5bZpY1zgyto6szf2AVHEUKX99xDbhndGUF6dfyLMVLcmiknx8H2Z1oe988YVQnnKpc14u9y",
  "key16": "4c5k1EupPKzMhSEYGY7XEDdyuaEg6mqsGfbzdewRiVsjyjKx7peb2E76LCXQhUjRUCYa7aafRDj2pA8KCkvbkpMd",
  "key17": "X7mVcyXBVd9wdFpz5QAkdA58fFwYj8dVQRxfKj1Z661tBBaMew4B5tRSUD9BuVo92xainR4hZ2P8xuoN91aiy4v",
  "key18": "4MsLCrCLx9skb5CxayBgMatk2mUus5tKfVHwtrk9ExZ8puWbXQHatkRSqUDpG6V3bsHpT5TheMFgkfg3mei5bVwk",
  "key19": "3uBjzHtuDY2BmXYqLobQto2n9SoHpz3j4k2t2wqmH9GTfDZFaHBAXat2wr8S7qCAL5bC6jVZKRCNSQvhkQZ1hTVW",
  "key20": "5kKTLxCXpbEPWiaReBCPKNqST2h69No8riXxByDRnP1j22gkdwYGgj5rXbLJT3JLF1bmhkG83MJapYbGS5uQZPsH",
  "key21": "659ivdnpduAHqkPdvbKQkm971j998UodcGLattmZU6zkFgWp6GEbNwAYEJoQ2YYDNykuMmvNbt3AyUZFda5NFgER",
  "key22": "RndR5vcL6o7xUc7X3RUoQi2mut4k48Yg9f4fnd5L9qkgUoaVoHL33Q56oqmHt4SdHpVrHSfaZkWAPBNE2jaX3R6",
  "key23": "31cVgJKRiqcQ2keGykT6n2EhFVPbqe6Z3TxnYKjwznqWh1xXvbsL8cTYs9pwykfDKTyH7cwqm3S3fVEHPJPB5nvX",
  "key24": "3K5RsCfnmUv135BXQd7Eg4iELWX42Bka8HK8DFcA7AmKpc28BBnUcvfMV6gpJKrdoxxGAphx2J3tzKofMKNp71xS",
  "key25": "3qbLBeTqwpmdtRScKexKCwwsT2XNAkmiZYwykEgWpxaYWMJeKvWpzQBLpFGwsj1qVdju8ERDdZerkhv8i6xfRzyf",
  "key26": "3Pbtjof1kdNXJFx5UTp2bDM4Ko61fMFCNWkn29SF334Ujtwc1WSTejMZPb72mYGH6vKs1zy7G5MstaLxgc7EHWts",
  "key27": "546qhf9smAwevMqU9ZAFpiEPfvrmUKfNnAAVbpR7rVyB2AtD75RQLqKqGMUUPzSj2AEWvRAhnTKWcsuogjTrfxrF",
  "key28": "4f2eq7nrQTFqdTxJnbbPQ3H3kwu6swPSX6eKgLd4PKxqsEwbdcRyZDu71Np2CBCjRhNoa5tg3f3Kt6vUppU5bH59",
  "key29": "3BLFKtrN9hTfbqpiFjsrhWDizSxPha9HwaDBWDr8uhZ4oQx5k4pgmwoZ43FVXP7JAWYKWkJZ5yC33ueZMTFidSbi",
  "key30": "VsTStPK1qY1JfhnbcZTQUHCNSxFPgRE2519jpVAm3WixLADuot8ALt1j4ekEigWVNLxw5SYGKNJeS3EbZAP64c5",
  "key31": "3eEHseVK2ZVkJwz9vFpRRKUf47qLiNWcYVwxhTNh8fZF595nvkbYPVa17w9wEMPgmiVNyukvyVhD8LCnVgSJuff2",
  "key32": "5EY335UfJEQ4voFait9NaHxFSriekT8JXx5mHLpKTUam6hMfBWYKpGMskiwKEUeTndxW3PYcahxrii465wp44VHr",
  "key33": "LQ62SiVGwzKbkdon6YynSYcTN9vFgJ3pPXJJ8cLKtUWhZv474wJfPRhFfNTvEWEj4UMezD2HbUDaL8sQ7mVX1p1",
  "key34": "4bnkxXUQWocTpzs47UvJCWh4m2LB1wDvAnsmygSrw3c6KriqhkmtXN57iUphPCEyeVXwS9uXQmP4WMkTZJwGS9Ez",
  "key35": "3qj4AyinE13rWhWbJh5zTjfEJkKx9kQqbz79sJiFUaY2yrrVjsPv334ezYYgzem7KiqwPkYTYzkch2BrkAyDqBvk",
  "key36": "3SZcm8ao2xUiezrME2vjjxiEu1pukS6Zw7ujf2cxL6xi9kcaz474YRWe3GDfzXgEKjFEP6bfCoqjmUu8ZD7D9hat",
  "key37": "5Lc1AYxy8txpQytEUer26swa6jgXGccNynSEffSG9aTvursEMANHdvw5bztbut7AT11aXZ5oEahDXCURcGMc7TFn",
  "key38": "5p2hvbakQ5KMGphnpYukccy3Dc1ctq9W4KFetPuZ8aj4UQRuP1GP2dQcQ22TNcSHemZwi2intJsaknUEu7iRt2Fp",
  "key39": "3C7sNd5uYRvgiTAKqGq4JqcNmZCt5Aa77dLicrbDv3mDiER3wPkCEoNXc4Ra6KTsHkYns4sVhiEXYU3XL6tt6BBb",
  "key40": "41RpNw6fXVg4zHdcJ55bLTXAwnCoLj3oeebuB1k1mVV8BQ82BfnCtBqHwujzz4FL1qJid6sCV1v9QTRpbAmviLCX",
  "key41": "5i3agKuQqUFnoBevySHeSwPuMV3TSQEZahp1m5hGSboRZBcQjN5sRegT3r3vmfcdaHBzNLMAtnrW6eF1Ex5bLwTS",
  "key42": "4vgUF2YQtbqKcYXhJbrSNxSfwiVD7AReujpkPBU7QXpFKEQ6uu19SzrW6U5T2JaYSoCAtfJDo38JAu38WdoJAbdA",
  "key43": "at3Yj75JzYvFSRHCaQ8wrfzXYxKeWxKkw5K4XgJ6HRjnUGV1uaet9aneuGUCH8camsy6A6LDJoxNRt2uVZQpkpz",
  "key44": "3JuVbHhy2QYjgN1X5yfLkmvuGQAtHmu5uPspUkiDq64yVMEhb1yH2Wv4qsNxPUT7eJv5vrWa1FiLac3qyHbmtPu5",
  "key45": "3pV7QaMiMFqGCo7gUhQKBsqXdq7UjKG1jGMnJRWUuHi4gMbkwsnNmV3X2DRbmjUtzhXYyzoep49pmz8ECDTToV1Y"
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
