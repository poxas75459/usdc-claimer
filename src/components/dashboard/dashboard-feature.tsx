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
    "5ecNM7j7Z12ZcgR8kQYT3FNPjFshDx52KUUCU4owpWkV85QiEFpvNFiZi3iXhxAe4nHFLi6A7gufYHJfn5sXeqcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4coRxbMjQafFxkzD12QnnA1jtKZ1wzeprFHGwe3watyHqY137kqa2G7PedX5QJysMigizvrrSW4DMSwWApggPkdo",
  "key1": "hjDXSvLV7gHNabAYhewRApgNa5WwqY43oDJGnoAVAQTnjuspJR63yh7qgFdsr64soEE5gvS8yrCFvgqUqkQAVKN",
  "key2": "3MEtGGUYqnJSSafnHha2psEZo7WcVVUrmWMafDo8t9g36Sqwwfahw18DNCDVGrEH6wBre6vToJcD7nwVMZ2FCfNQ",
  "key3": "sjHqhPttjpi2Hew7d3mh7XjdweGeQt4ZpD6CdzDKeNAsTJ9MCB1DQBFMcY1Cx3HYVB2Wgu3nNv1sjFPSL5GD9xz",
  "key4": "4QgCsKhHk8u6RYC7UKCB1UZ9RRcRY4WXoP2sMGLXwQHS2Fx4akGtSMkTQMvTBdTEkekb5RhFCt2D4mAjtnR44zbU",
  "key5": "4iJWTGP7wKwTKCfLqbPcU1XJy3qkfBs6xgYbdkbf3fCe6TiLUkUtwC1xpMWE3VC9rRH2TAvd49JDVqNz2hrVuUzt",
  "key6": "3MuEMTmCpYPAxgqacvp2t8tpL7ymBwjWaDhchMedD7eaMu8WxwCb8ajbLQ3GH5ZKQMKTPRRKnweQAVwrenqnMqNo",
  "key7": "2nzDYh3FfAH7utpWfe3TkDuWYCwo7UsixNZRRM13mWMk6QpkZ1y3qG5Z45MSMtVrwFGcYdsvp3y8jAA5jVV9B5oC",
  "key8": "4zq56g7NUpq866vKYyGJv9j2FNGQYXWnWjBuevzQn7L8z9J79edsTSY3mWk2Lir5oTmRCxnPXutfn9pKwa63d268",
  "key9": "25E42NbeedWEsPSDLzocpo2TbLQxag5nXY6t8u54J5MEPm31ad8qGkfkXh4ytgaKQ9cFrBBWgbbYgTanvNPLEriM",
  "key10": "wX5bijtocrELeZgjWeDmUdY81Smk6eDRRfqAHMtUQKABc9eM9yGt7jQ1QBhGSstaWoWNKjnDpVoTUFgoUHdbzzu",
  "key11": "4drZJDX74ahhQ2gRhEVo8uGFRxg7119Y7juArPh7fs54twVhVV7BwBaujjZJJ6PwaRk7KEPC5EFxxNGEcuxgpsEY",
  "key12": "42JSmJ485J9k9Zqh5T9VtNoXqWHEHkY3N542E54akpEwpnJDxXmXRvGxMs9KN6Qr82AmP1EitpkJo5R9373czwdp",
  "key13": "3jK1KQRbTzW1nNxqLEDV8ftQCgBD2PGv1YpPAaJJG1Kh5VQKAPqFstYTUL6UMWvMuC4tVTEKLLxbyQJHQGNf8RRS",
  "key14": "3xQYkm26qqsLMbbJdQ6zs8NKDEHzjywjdotAr5YN4zVgc6DBWZ8t7PEag4AGk7rjDjYuFW2Gq6Ev5yyfb1r8z7cU",
  "key15": "2QyBotvrF1WE8yJzfMrMhAURU96ZeAyJPSFJktcXHHdjN7Zp49skTBgvR7jvD9McHkLQeZx1JthRsr5GNZWw3GiA",
  "key16": "22tGYL6sVG7DdcWMiKHPo2CNTYTMPXgNGMyHPG7SYAaiLvyaDtXNWg7gk5PZk6PHNVwKrRwacPU1opLEg7Mr7ffN",
  "key17": "2WiAW3wrM4ovUxSJ98jfcgGBe4sbdWKUbjPJPnc8K7sKdwUJdoCXQbkjoaCXysr6PB6UbNxTZip2n6cEu28h771v",
  "key18": "3XdpRMRtHyozTp8hFXGeq4qeH4whHWUqCAdmSKiCbBrXbP6C6jVH5ScowyiAXwxddSJ6YBzsKT1ktaiuUa9rkbkp",
  "key19": "5FeLDm6jSziTxzpTMwcUnsXL8BbTmf9kbdmN7ZgEi4ysZ459Ksaij6aQGrKHAY96hZxFFgs3bjo8Ui71SGybpYLf",
  "key20": "4NA3RQM2AbGJMt9x1mwHLvkhBSvYAuZyECmsFhT9aKz7B9oaa1NpCcrb5QUL7ssM4zj1BDmn85bP7BQHD468nKD",
  "key21": "3MrqSpF33Sa9G3VqT5MCj7s5vAB95zqUEPxMFEJr4JGJKM3EQaMP77G6nAMpa1T31XmkFhQbvgvTKQgP8P2bD7vV",
  "key22": "VjADcMQiUrx9q2qqHkPrVQ9q9FCLdh73nPimP2fJUZHCfjRogFbuewXAPxzBhUU2LFNR1jAtZEFkVb2LTeJEWMP",
  "key23": "6ruLLbcLMxGRD5EijdzvcpHEnweaSSxwX9Bp7n7EmygxdJ6EYMi9LnrfYcgG9KUY7WvyfRVWj3FRypfwASRoR16",
  "key24": "5dZWr8qxL4D7p1oC8hK6esm1qpnRNVgoJyupsJvMw7vPscSV88fwng1achGyzLB8kKQsF5Acs63cfEC1Ed5FqBvS",
  "key25": "5LcV7mxp2cFBEX9h9Cn4ESADMnWtbCxs14fZgB7LRipmwygMyZeAV1EfC58xvoAasUnt8aN7J4SMkaYo6Fzk5nhX",
  "key26": "5KjV3ThVdZotj5ZbPjy1T8SX9GbhsFNuh12wyLo8qDppWuX4kFk96K8rKVPqtbGGofLcxnP2Fxw5ENe79FHPTbb8",
  "key27": "23j9hhJFzCEZK4NYG5Fr7MgaqmhtstxC6tc5EA7nzeEZYKnkqaWUxnrdixgTbmsLsXzz4rkoSzvHpUtSmw95Uaau",
  "key28": "3HFtgb5cEQoCzMbMfe1p9ZNSMLHmU4bDuR1GCP31fum3eXAesB1LtjRQYhnan78JSRzUZDMcjCFE4AksV6QM5McD",
  "key29": "VWFf4KC1Rnm2SmCpV7x4SQAaof7A14THYZPv9QJmTPXKQt1wqQrJg8Eb2KKRLQMDv8BJV1KHTnfY7Tm8Kdux38F",
  "key30": "29e7nvL2WkmvSVL5eAQBKZZvGAG1gekbYZfLbWxvJTjzEz8ChfQp6ZompNvc9dQSxGPX2AWvwJWZWfsMkpYPqmVJ",
  "key31": "4Qkz4z4w5zzyu5kDd4pvcHsVqtCzx8H1MDWucEKFEtugBpVvdPEHfvTimEzBKAzxUdXb6XMXDJZQswKWZStf3uN4",
  "key32": "2iHm9jJxigyXD4jaPL9iTzMLWHd14jxK9HmyrKjdH79SxaSdnNfqXTX1idx4ysogi9tf8jcn5orELJJsBCVBS1kq",
  "key33": "3dN3Sxq2sCvhiboL6vAQYEZvkShGsVzjfHTuu85SRSpmzdvkGznT7jKnrnL68famdMG8q3wHHqxtSQRd9E2MoSor",
  "key34": "4TmCX4xfYLyDinNG9rgb589rJNFhcj574tkgzeqQodKuGAvtgp3cEBKew1dNP2ym9SF3upU1NnbXLHypzvFqFpnh",
  "key35": "5s2oW5k1RvXevY6aXxU2AXnjm1eCNhfjuGZT3wHbAJAsPp4GkvV2GyX9QJVcKQ3NAbD5irbAyVCEadfcjW2Vu2zD",
  "key36": "3Y1YdfPR7SUgDUEd5z9cTEqh5B7WRHaNdNw3tid8SEWhxtbx2qQj3tobkKVYSqkoojmf5NgFqqKTmWG1gVjMaKcC",
  "key37": "2zKwgqqJhLyjK5ke5SU6wk3XSfWxQ3JJiixh8wWcrWpNW81wBUMTKA8VMyLmnCgNih38TL2JUh69BsTz9KwK7TjW",
  "key38": "4S38nP7LWRKDXtFyCftBm3C1FAv4MChQVQ9ALHBm3NTsTj5uu8ukh8B4ZJMDznDVvUqE2P4cE3xp8qQUPitPbEb9",
  "key39": "4vxFZrVURA2PFne739BcLtbuWeHN79S7aaW29iN15cMUFQdNXBmhYXwxW5H1csEjCn3jZaejeve5CqN7zLRtep2d",
  "key40": "55RhiYdMEUo9faM1E7vaFdAjq2Gf5QTaeV3z8tBxtvWKAhgKttVNJFksMvFF7KjzSbpSXJXMQuaMy8YyT8QiSthG",
  "key41": "3h61S2ijYxHfww4JDr4xMrGAx63yXFc2tZCCJxgbL1wCCqZgdpNkYHag6zGSH3JFri9zDqC5ZtzCYYqzCo62XDVT",
  "key42": "GDYM29RFen4RgxwLp4A3V7j6wkKgKnBkEk4o9Q2SRp56dZFVFTV8tdt2MKJjv4ag13du6KK7cTqoUaQqEE7kGy1",
  "key43": "2zo36VMu8eDHtbP3kaJiFnFKBhZVUWJPqM3d79f1tcRzofYcPjhfL8J5X7ssz9Lgk8KztdUSKKPkadYQt4VcK9UY",
  "key44": "3qPiVccgG7XjMZXurfy9GsymkuTstevxF89V5AfwrmqqCDjnji96qK4Knyg2ZZt3Yg5ikNR1JZDp5TDMKwfackF9",
  "key45": "2QfTqCgH6WMp64a2mM3VBn7S3TnMjoMtgE4Y2Gq5TL5mZ6NuVzZKM4sdbu91nPFuHEph5cjMG3H5nbBHnbEE3c7f",
  "key46": "4KJ7yW36U2XQ1hNdy5xQcz7jaVj2hq5AAaFXSQA11c9VuZ6Ke3Un8wdjYgqk8Aae3pHK7bvy85c2X1vBv7U2rz6K"
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
