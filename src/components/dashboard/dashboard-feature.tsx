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
    "2d9fdMhntnBVF2PuA8QZUWUzeEnpiiAYu8vndpsVPBYyPdZgnXyJnw5x2DMGDjpSiULDSzDH4cpmpuQ9kTHxixb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tMSMWVXMsQSYkMWNfeTV322H4ive7uggwAJCNBrQCkYSnVZFgyAPLG7Hs9pXGTfu4sn2hq5Y1WdTXLCQ4eXSHYH",
  "key1": "5rPwhbgRzW5qcWdtb9VN4CU6hECGkRgwVc6tCQXwqsRU2QV9BX6iDejkbtcaDit5MMzmsANF8f3NGtf4MiW7NUEw",
  "key2": "4KWKTNB3Ne6XvvvX1hZg81LuzyEEGkTQC68ZWyUhWGWfdMSr6stnNkswsDCxMBwgzZh878g7ufKtgZbRssaDSbP",
  "key3": "5SXaeuD1rSeKs43xzwFDwsiSoQmrbh8tLkfr5vctuif66fbfL3UotWpvLz4yHJayNXj4AbCy85n7ELQ9abXxz4d2",
  "key4": "dsBsSCGM8Z97KgrYCjtcMwoc9SM1MFX11t9Sdi1buDNMnuFNrXXEcfpPPVso6sX5ENu1ruTw35g6zBY2116Kuso",
  "key5": "3goQWyXkoTho6XQ7RiR7yutYSm1u58nWzAvuYbup7C7cHWUWAZWRVvXhF1tuW5o7b28SHQjPQRaFTqdsGfRwhy6D",
  "key6": "4wYtAuihZC5ky8JKziMQiinveQs4tLQrgfNDx6SaigX3yMNg8bKSadvpU5kUpBGrcqoFvwcCaNZ59YnCToD9mRk5",
  "key7": "5ozGoHkk1wb6xd4639rPFb83GcfN4UUC71MLD4bkeThT9mCqURYVQRmtGigR2DvdP6EX2nB7VjxFZaWrMVVBU2Du",
  "key8": "2fmdYeyjDMWgLYs6441uDv4oo6eFLitNFgCoTCES3UWQvwAmW7VxeujfUxNhtGmJio1cdrqV9F7jm1wxmRUkYHbx",
  "key9": "3VPJ54SA85Tj1DQ9dxKYPZLG2k2mRoW2YXs1YXidP1DhNduHidyyL6PYHGiQq6TwM4mpqbKjz8rpewUdLWT9wW1c",
  "key10": "3qDrHfTR8gMUkf1sLBDDS53K7JkKoQqvMBdZhq1hjkSuUGi9x4Lc7St2yrmqahEDJdgyoK9bus2oaJJjTsj7oceb",
  "key11": "5aGs9B1EcGnfqVVe9nr2zuwevoQipCZzS6UrPPpZZpG9NMewq8stedrf23eZ9zaJARcNJ46nq1e3gTBMXUrhqCgz",
  "key12": "xdCMweuhwgBMjCTkvEKRduutMJucZTj9JkQ1XdcEwCDwtaVszjjwt4oihqDsfDGVitSQDPn2V11oGrh9aYaXBTx",
  "key13": "2wjBoX5MXkFA9mjBi5x3be466RLZMtjygi2zeKk2oJzyTthWgob6YAG81TGxAgWjuy6kwcfqJ7kqpHwwsjJAHxpD",
  "key14": "7Mi2PYcUyXXT6rGR1N5z1CKQ5gzEZjfVyewGG1s6Qepccs1VideYHbQHqS9hfCutzmemtk5bjPuZXXbAnzkV5G4",
  "key15": "3DrX8FqgZVeiHj276kye8yRDWHiZ9FznfShzzPwqRdpcsv9dcQXuXBKERe5Zvpuukc1FGwhGVdeAJRk55rbFFdYf",
  "key16": "9NMWTYB4yoqjRsx2WSX9j6MWaJGH69Hi4NLHi1sdN17pkMnbFubjEoHTGk2HCeavYrEnZ629LtevwsG8na9Rtho",
  "key17": "58wTQoh2jcFHRXMHtYesUQnwg7yLirFqapBgu6TQR1ds9vxxc3bx3Bv3ZxViEGJkhZk9nqr9rcSUpF124fpTowov",
  "key18": "DfHV2oTmCkssa4zbYxEohKGnpsVc1cEraNMGtWxKLBhGfZmmbm2rs1bwUZ2MYNxVQBjYVNn2N56bsUkvj2PThCo",
  "key19": "4QDJeKMwwCkPEdsD33kHx2gFMAnXRNXEY5yyJaFBv7DqCT4adLLPTbkrAsddhaFzvxcRrN2F4wzjvufVWb6ZpHds",
  "key20": "25dsNHttty4VFNYmCd4pZkB412ttoJ8MhkRJMWrRiYGmK5xAWxWXzyJikbjmSzuajBz8AbxTTLrozx512cCATSvF",
  "key21": "22nxVJYe1wQq4KEq29FWMpwPuUKpGVWfPAK3fLuewUsnq64czDk5Xh6jZt4kdrWttG5CnDbEKGKs7ube2DAAYHxq",
  "key22": "3JXHQuUpgy3KPnKB3nR8DxoXjCLwLatv8TWrSMqWWKwPSL9uSExGdB46btnvqQb97j7EYg6VN6jfTWyGcX4M41Yt",
  "key23": "4L5NS6tPaYhFPMfe7kpg7CGSj1PQ9B9ZpMuCPfNFCCqoufAXZGJEEpoFBFYQUXuyTwoj4pzjhM38253dcNGWVjXG",
  "key24": "4mwJkNhyAjAC95uhbCVJhvosYZkBXDCophvPYmg4FxbepZ4Dm8pE6HcwRtDeBXVGijNpTKyWvhS5oXckkpgbkdeD",
  "key25": "jCwWhdh9DDkXC1tGWaTK5KM19hzjtouBnsoVYFG4rZJJcdJcySTVHrJpHWDSHEWEx2DfpMrKmNzH1i5FAZSRtEW",
  "key26": "477Cvbr5JzvDAVMZ1UB7B2BfGKkjD1hawYknK4YGBX4uZbf8YJpTnikSrXKu27RZFmewYwLUeSENvJ6PMAnqQYmY",
  "key27": "CmPdNA7yadmuL4eB9rbZjPQkXhfkTLBbGnW5RcWHTFNjUBB9aV2j5Y8M49Ls7B9AuWK1QvhN8Ro67Rnbb6b1Go4",
  "key28": "5zfbP9jKw1CjaUDhhEWaia7PbosDb52ifitAFCcR9NFK8JCjPPr8Stbrp5rAxdbmXctS89F5DxDnP8wEVvfSncXW",
  "key29": "29XQwZs2Z7Vs5jUPzK5KG5F2KgT3ueY6NZSQSmFBWLi4mAogVU8joAP9zqaX695CuoKP5E6z9MoAKeEWMXBXvRpb",
  "key30": "79m5gr8d13RepLReZW16u9p4Q6YA8rbsEMg75SxaFgpHsMgy82pQmt9gBB8C6xrEmqK62URwJE38ekHDwXANyKn",
  "key31": "5vEbsDfsKVbgqa7phJbmKhAgwFG82KgLiJVkFxjwGA2KR3ppsexXPcY5twmGzXP1aDFfQmUucGjkSVn8bsYuG1DN",
  "key32": "3eBzZaQBEztA9jFeyWUZ4gg813ik9XGkuw9SQqJiEAgmenV2BQC3fdDKLntTAeD2bvstThrcnqUC3GA3bdY4KzQj",
  "key33": "5svomFSngFC5K2y4BsXbNmhWRjjk5pBgcAdqR5yTdYScCe4S48ARsdomTtNvjs4GdJ48RYVRysfGJgm8r7kbNvMp",
  "key34": "4YPibpRBumsgphRcqCAEX5S9bR3yT42MzqYx8BW2Kdh7NK97bCUjmqSgEdTHVwSSXmeDFqyjjcnU2b5pZnneUM45",
  "key35": "5sDhC17cLDUu5oNcQnbAAzAVH3nyM2WDAAtmj3isPc71tY6qBKL14RxJEEyvji4Bo1u62Mf6Gt7zHi1a7u3meEza",
  "key36": "2mKFKFdCnYLnbEJUmXUe8cpzMLnNqpTFjna2nhvrfHrdscq7Asx7brcoHTpoYTbhxwJ8DivriqXyFMuMiGctLzt1",
  "key37": "43VJFMom75F2UYZce9sm8YJjLCzfiZ3TPMmotPpmN168HedTH3DXeoSrthGgtwztsxFv8dAwntEti5Emd3TX1hzo",
  "key38": "CmkgfpQjAdqArRh9dn4MxWuQyXbCMhVEgnXHoJzin5QnhkqEpty4KAXSJtLRAtWptya31du6HGb6P4W1r2Ei23h",
  "key39": "374dMcpbg3ZciAmLYdmx26LGmkEA8aY8rhSFoC7AVD2HVEj8Hwd9okcneQRsFJq7MYPmSZz4pemvanqBHirGmYYF",
  "key40": "5DLFnrBrQ8NCVLyvqF74qDUwCwvCtmWGnqyKJNNrxFXEY7BP686F4LSviDwLFYoWcGLkYotbt5dinkZ4cbUCRNHZ",
  "key41": "2pka8LDRWC74bLmmXuxSXL9tBqCeA1KWa45bgDHoLsUNmTiZDUfKvegqohHFShbJQ2q7hSBV89w6QRDZoSuE93VW",
  "key42": "RyRsuwHQeVriXSyiNyfkXaK7i8RT54fJ4UQnSg4NVy4decZBdD5kS7c7BCrSYnVi5u8mVHAK1cPN7PqBqHNJtdQ"
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
