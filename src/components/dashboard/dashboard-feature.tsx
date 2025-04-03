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
    "61FPwmxv9RD8YJD4qtL7LZW2hrhTbSdmU2Sy8YA8E33yFE98LqnM8ET8DvDf6rqjUYNXXALhTpAtqZQCS6iNTYYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tf6p1C1KhEUFDYeDHiuAZVDLfiiMcFX1SPj3cgNyne2r8Mdjgdbowk2K5kKMZnf8FnghwQLvPPftJRzevva4B3Z",
  "key1": "2oGfiZ6etft4LSVoogT9yek11yqrddF5BC3uNnTu2rMDoN6sBopdQrDG9q5Duxe9R8LaSSuvRKdf8MpSLByHycip",
  "key2": "4XeZodDmFVpbebWjs47ZxVQxHLfVG6vzffoP1MjiEx8UFcLjL6cmdPxSkLbg3ZutLkvhFAgnJi4ZmvN4LwYaVpNj",
  "key3": "5BHBLjRmLMyXCk4XVCbAGUWRL4x89z3d2PQQ8KhJEbsHzq6ZGjziSpVUXZncGmwetgAVKxuKmmRAJfiENcoUAkve",
  "key4": "UeJgqNfuxZpZp1goLuWzwRJyuBZLrw4TxxVkryM3TjEGoQZeyHukD715W272DVHiW5USa52AXdnrMEh5f2z8cus",
  "key5": "3vxo8FDve4GcFDsAf4ZfwAAKGVhyYx4zrrsFEe7NJXzVzcV6jcdCVeU8kEQMUkerfg17NvD4iBL8uWkBzj14MwZN",
  "key6": "44baY3thT6mQ2WPcibU2vAkLQUcg96YdypTTZLJZmMFfnd11zs5hUPZ9G2ubK8Q122mUAs6rwgSj6agzRvhfeuLY",
  "key7": "57N3x1ZvLP8pGMcqUdBnimmTnLUT7RQrRCuF9ojbQWRtv4EgiVdqWw1tSVMrQxiQF8ehqadhjb3B5s3ouaYAKKJD",
  "key8": "2QZAu94Snn88BixLCHVouQgxzt9gZPUA4ZJzkSrWEoEsK3xrvKsTEnP4XtrRRixGGKKuhJkgP1aU7SnqJkeaXLju",
  "key9": "4f11bDS4s9QjpQQxbQiDCwShvT4FEY8EJFC8f4CjAMuzvYwQJu3FTQurVaXX62vUSgnhRHDAtC9B2Pt9J2WHYa6D",
  "key10": "46YwCg2fEMqdmP819KeuFhrnzoM7m41iBmQzEN4HKbW4f9vvFyfYhPvV4Xjiif898PddjuU8rFaoSxjRS6kDsXeQ",
  "key11": "4fCKUq2cdqUNvZxkZEAkE1tfA5BXTku2jwAjNxRdzzi4BWuCuu3KzKMtpNDwE1Tj3irCvjQuc5uMVebYng7Hzh8t",
  "key12": "EjRLzfbLfmbjWsUkF2RRcaqo8fHAaPTYS7U1ViufPqRtmFJnRThqBPZf9iqBLbugtUhHCN7X4fLQ28YeGUvDWqu",
  "key13": "2xu8UaHXDWgv4REWo9EwzimKNVmTTwHCDv3bgXvjjUeUPKk5dxGqDYicuaEf68HZjDegALBFp9VWittF95CY2mGZ",
  "key14": "4rkxGiqMN8s6g18g3AiqTwCSpo1CjAXQmqDwAkyWoujxfLVqaZh1cLVWJcvrYB6SWCVUry5XfqoxThWEBygskBff",
  "key15": "XChCDk4JvMvTxmuMGHf4fGHwvKJDRG3mn7N1PTeqBPH9b3LoXc5J5Ugjhtrdzru7LHRFfE3gi87mMgR8TnT1GVR",
  "key16": "5g44FNPke1bvP59NcjbAA1dGvi2Ntkxu2Pq3Bj4TpRP6qTb1xzjxmdHvydeAMK8qNKojKG7189FWLLXFSj2eZL7Y",
  "key17": "2raN9fH2ButAHuxniJ4Nkj7Hm3VuW3DozQwGiZJKvNtKAvHAgnsx2V6qVcSaxHzTefDiYZtDF4T3EhkbGmRD5xjW",
  "key18": "2wiNL8c9izFfYF3972JNMWkSMeWTzcR2mc3eG3qC15pXcGicABcvFQKpnD8KdzUfHrNKHyG1963V3TctqHZmXirU",
  "key19": "3JAEzVuPearFTzDJVBmKus9Eum9Zoq2HB7HaH1obbtoGWNybrP1eJuVthDRNn2hPR1oYJxaqdEoMmVdoZkdSsgyv",
  "key20": "9xD8z2RxYLVir7W3gKeCRsmKxufTmiipRr7TrVfM5TxoyrgXnT4QZPT8V9ugoGqxAGfuFB1KrfySGnehyoD89bo",
  "key21": "3RPgzkyvxHNeUqk4zqTSfMXuNy4eNviCx76GiKJ8xRNrQgiAbeV41ucB736vpyTGQ4MkE6xezH27rzUs3KH17dRz",
  "key22": "4o1dyFDpJgFkpx1xmKzHDyUiZbpFaXWC9M9Ck7JvNiK3AKiEdup7RJpUU6Xx8YaJNvQtrGVbDHJqbxC2PqggyRdN",
  "key23": "5Xn24h861HRGVKrNB1KCF7v5VVvp5xdpz1RUa9DT1QPUSv8zDyHyqh8xWPSn9Xii5WoVE6KAgiXz4FheTuugs744",
  "key24": "4gUg9H4f9XaJ4kBYsUSMPekXVts5phjfV1VabWZJHBuMeyCWmi5qMjTe58GdU1uHopXTKuefgkeU4vzqW4m5BtVL",
  "key25": "qFhgAQJKd7jhh6sptkz7JZaW2ZGYcxYWvWJTGVsC764bVEsvamcbcNEFd4qMjVGrMs5Q5DeDSZyLdZCDmiMcoGx",
  "key26": "2ogqpwSyTQ5bG5JdVNLRwQfLUbL9hcKqrmB2fEYSbQUgmWuf5pSGVrhjfrumMtMVYYhMNoZVLSv1XsETmC6VNd2b",
  "key27": "yhtGeJ6iKmSJX6VWEXV2xy1Zwd4165egyVz7qjQ2h2ThiD4V4KUdaU3TJBApSESwmCR7RdHNHbs8kTPNPZSpyWM",
  "key28": "38Vjoh8NsfdT6H5mUUgjTZEKZnyDB2kpnt8VxpCpVSBxNbLq2vRzPSgUaarv65LrFYkZN4JtzCQkvJjSRXMAVZqE",
  "key29": "5pUZh4z5TkTbTAsPpQJwekNYXouHEF88zDJPT62wNPk1oPFuG2wRuBh3bbiN7iSYtavXBVr8XAngDYiBMbbqTgyp",
  "key30": "3ZPr2Rg9JmxC1HMn7KhAQqYkF43PbPqpRSKYjMHaTUWy66DJYWm1P9VBsGuGu65Uh7wsFUbndKStG9rKmXjJuZnM",
  "key31": "3bQhSRTU5aHLohwkT2K5R5VHdeSb9eTQ6F1Ejs1ExDDXXrXqGSx98mUwtjkcTJ3kaWkGx7YGMfeoPmukZ7yTgqKW"
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
