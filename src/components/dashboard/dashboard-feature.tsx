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
    "3cq42LMxULe48qPoKzWTsNNBkNKoktNV5Qqx5VoqTwS1Zv6BnmLgZqJWWBUyCQ9TyWNSH1Zf1DtnSreonmC3zVgJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XSbPgKSdXdqURpDFCnUfWmwast6MVDitcxsGWFBcozTquwe2FCYbBEruHq58eQNZVkg6Ra3iAA8MWRiWm2VNpgr",
  "key1": "3MvJxxw9SNLVtvqzUeFKXVswnt2qqisppnYj2wUjvyRnevjyXdDFHYezbXC5RyRMBX488rc1Wkbif5fZQjCP3Xz4",
  "key2": "54oTFefau2u8RzkuLXCb6vVD1GvUgwqeTHPADhbeuvUDv2Sgaz1Tw1kcB2pd5cZ6eK99zAiQBnkgZBoFsiZzGpWk",
  "key3": "HPpDLKwsYgMVzp5Jj2M851hqmtQhtZGeBomzzKfMRryJsv81MkzmsCBkEV7gfT3ofc9euMBCDuZTTbPrxEDwtz2",
  "key4": "48ef6ALg8UPHzKTpuoYPznyqeSiY4STjzm2Uke5YhR4ndQte26mNi9fzSXwdTBFipnimEpCVLByGr62uGx452Cjv",
  "key5": "5TmCqcUqpKP8zHhrmKnxj7YBSGzmkEXgT734NfU9i6ZwPmzprkTZom2GFfJFxYN2a69hDmV38phQYhtKrM2pRV6y",
  "key6": "4tehGMg6yJQEYjpAcmoTCth7WTYgzL3FEdjFPLz3DPxbd1id1uZbLBZh1HKNds3GKvjSwpnqkLPYru7c8hYtH5pm",
  "key7": "4XRybmnUqJcU823Fu9TFGrcpPPp3yZp4dm5YaKSdRFUeBa836e7rWUtyS2uE1hWd5RENzJkTLi6MAnW7q3Q3skZv",
  "key8": "54RCeDwKBRpSBwBeW6xPiRxksyKvNDwtUoNugc5DAvbS4Q7FUojgeTLdcwDL2MZSftAQEfninqfCWVy3E8qqNPjB",
  "key9": "u56JozP4ssyMtP6cENUEZj9oT8CLV1t5evc3EFzPDPFEhpMi275gSMkeGHo2SwAG3trjeSTadZoUWTgyRNuzzkQ",
  "key10": "5rLCzFqRBvYH7C8EnZhzs44y4m4YsN75kfLPhrzWMmCav3P6eNBJn3LpWNwrrp1QwgnmET5NF8XGGAPaRghWZGJu",
  "key11": "dp9tZkBAb8bH47umP35H8iSdqknRpNWqvLFvuLkn7aojjrNmGHJ1V4WCZyY5kG3LMSGHmpiahmtmUrkrdD57uUB",
  "key12": "HgVRpoyiPNUbmzZkFfNh77deugKoVvZKLUTL7yQaAXWdPVNc9p2g31pScTvNPbxaNqAnm7yq5zdUT7wGrBTp3GM",
  "key13": "27qEEMWkjnf5Mq4ayTnN1CVAEY2XsbqZXkNxkWM2RaKtRa5HScYg8njxPT5fYWS4Ye8s1wZQSs4NKhT8xmvw7sAB",
  "key14": "4w454bdBZmuuZFrvsZqiNCiTTJse8aPHvUHhToQM3qixVLfbMjWgJcDSj9K3APTz6WYUrQf3ot8dCW1k7NQm9EQ9",
  "key15": "3FmgqYhQvz3Te9Rhx8kQuRTV88DS9MEciq4oSC53tYXYAvAiogzLWxHaqUwnNUSwzNyqZg6CV8ghZoZLCBQzn4Hp",
  "key16": "5wxso1m4sPgvvxZhsUuA87FDFLCgBZoaLLRM5JisWQ9baqykD4JbCLBrn2NAv4TRcQJ9P6s1Qo72mMmYspg8aWr1",
  "key17": "2UooirMmyo5zzmNUGouGsrhfJVtyX7iJUp9gPBZ1Rz26inPHx4U8gdmQwK19XcARfcpQVaZTkWSbDBjMyw644Wmj",
  "key18": "2GUDsuHkThyhBfMyFp9VqLDwMGV7EncgV5VEQS6VCWXEYUJ8Tu3r1Rbi45yvsYNf1aFPkpR83VEixUwvK74pSPvM",
  "key19": "2KVopn8zsGSFDWCXZ6QHpSnGtfKgkEeLuP7kv3P8VFwV4R4cx2RXKsCnAJXJpDEP9tb5aWUMW8A332HhBmFtVL39",
  "key20": "3EtKZ2uCMfUZpnG9r9ntVn4jBqy6K2WDCZ8wJDxHo1m7K7pkZxMLVwmwC382wYfupobjbzcKWgitnv1qGgt2D48i",
  "key21": "2hh3B6GuRKP94DcSdGoNkWAJCMgUYRxEE2uKPu9kHWwgCPuafXkjNncF8UPnQwaGAU79XMZ49DVHJK6fjfdiZi6Z",
  "key22": "2hzfQnbrzAZEnjvDefzcnFF25TYGy19XU1SoXR9ecmSZngCKycbNBfEWtePBnRL13KbNYniho6wPBJiyMf5MyTqS",
  "key23": "2ca1LK764kztZcwGmnUmDgqzuuVG176ivsWBRyGiAfa8w7R9E1Txs1ZcoZHMs8sHuP1u8keV6AM6MAXeKpHSCHHv",
  "key24": "4HNp7ie7zbKPxzSsaX4jg85o3tRoG6KwwjP9FbWm5W14Diu9JC2gNmE3BriGAYRJgxJFDmCYvSYfrwacGH8mpyqp",
  "key25": "Q3GfrHpKisTm5mZhPjEjBvdjgk4MmKwNgG8jQZd7uUooGq8p3xGHxftqSgzPzgFTD3gUn9nbXscwh4CPZpupGLA",
  "key26": "237aYb6JsMWxNxEYXhHgi2VKA5tPimpmFQn6K34ACPLnEv2xnV7hcebyE6zZEN3xqKaar2Kr2fsrfo1TMaGmbkeg",
  "key27": "3gXrKMUZ2RU5fjtieywAybbWMK5LPmyLdTkvnv7zudpi5KfCRssgdPoj2sqC5mrYY9PkYBAnd8WAXc7vZffPVYzj",
  "key28": "2x3YvT9Nz3AmuwB69bTgUtp9P4EbsZ1Fz1aiQaUajG1vgHyjfjVfGytZBdPGo283D26V33UZiX9CQ9rW3C7Xw4vk",
  "key29": "5R6BPXLXJ3qB5Ai5kyaqV8dvebcucDgWgnBxb5tSUdyYPzhw58UN9mxCCh4SGpbietS3474SNiwrjcXjJPCVey7w",
  "key30": "37FhvxCUQrxjhU1mJP9svA51bPL58c9QHi356NCgm2E5e2rLvBS7s9LCTq5Ec12vXm7LcgGoZp6fmVrL2D3Vsud",
  "key31": "4auwtHZkByxwHkhxTq4oVvv8HUR8KK58wtCmX8P3SjesC2yFd5JTWqtKHQB1qtApx6tf5XDqN9MKFpetDEv9APdz",
  "key32": "3HQEfqxQLuTe3rtLewXMTi9cudJN6eG2shtqu8czmxRAfc2wXmkpLR9xyqF7rsndJg3meeGoxwpWLtD2A5Ub2vtX",
  "key33": "bcfisdR3AknpmCaTz3ZVT6jTrDaz8bi23pTn5BUj4mmtYEKzoM3WbYJGP5JtouRJJrUWQDQZ1ut4Q4wkY1Us5Lk",
  "key34": "5xwjZh4Kgfr3z6sjnfMEHAB5jzpWfm8DH4JkgPXKGan12MhbPb96TagkjUoqrC7PETVAHeVj6ZCVEip3btS6hDZK",
  "key35": "4adLzYAdyQAkAmGdSQUDbbzhLjDrTCaJf78ZJBxxbSfuhdr8wSvqduSbuaSTfp3YMJfoTUC59AbCTZ1uUg4EGe1W",
  "key36": "5VsMH9fSYFu7WN8kZRUXwTEJVKbnUzNtuYfgFtqUHzn9FnH1xyAPjUDbfYCrVZdjuhxTjt4NpezUYQcEmWgdg2a9",
  "key37": "4QYPth8Zjj2ZFHzdouhTxVWPWkeVdyScbPPSUL6zFwN5GaJztUWDQHx1ZMJUDdjf88xqKfJPoCd3gjrZMB5oB6hL",
  "key38": "4cb2WAgVJMYrFQYb1cg8ZHH1LKpnkkTmhHp1ufgiTw447eVU9zXapJXKXsR1zwsWF5ocKD2V1K7K222NmmjVFJ28",
  "key39": "1LkHNktuHQ3BxjBRMQepo2Uh5WgC91ULzGvBwMxQCXoZw6nzFA6F5TenfKkokhdAdg7zhsDPAyMXJhmWfRqHB4w",
  "key40": "4gcqGhU6sf4CvuSikrv7errTLMbPXEuUu229c6NZtSsHjDdBqBnft5REXWXogSTjB75CwJNKYNpwJvr98JScrbLJ",
  "key41": "4fYwn3aWBeKu1fcgfifNRU72KRgHEL4PAnB6Y5cUGYwXoEtKq71DGmSXwDayCWheyAgXAup3Hpx4prCvtjCJUnKB",
  "key42": "5PHPiy7v418K1n3oLHS4zy457caytxPm3aQJ76spzF96L658LX3ngg6xwJViVYbN5wkWQghSXnWBhknRVWnfqoXU",
  "key43": "on84oGzpPutHpWiS7F3tXnbc9njxqALKEURsFYNLyabAcUbcGDRAY4b4Ayp54dcy9yQrauxTP52hrz8iwgNG5Am",
  "key44": "4RemqMVoCtDcrBjThZsLMbgFDfBRmZJxatXEF9p2scJQ4Zsx8gezgSngqBdxJgjUqp7tEDmzoywpWrPvmhiyXB6d",
  "key45": "3rpGQkrDXFKNTK2F7kj8BY6m4vyuYcyioNTaXmpiYFgL4cciK4z881EwxtkUDmGVxnxTZTDJuDDy2PAELpiVW6wA",
  "key46": "3dyHMTxsL8MSk9vG9Wpkd1BFjgg9HQtmEh9pEL1gY1xY1disepLeBXLhtk6npJHFgmakHxKPaNC2d3jbJyxCgKfi"
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
