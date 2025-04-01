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
    "2bw7yLNdZ23s8FUtSsHfbr3pSa36H5njN46yZ9fPqxzfu8vfveGpQSdmYd9JZonVtaHouj9ChmLLAsVLN41WWbip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T1oDuRa6TrWSxemHHUdHmDS1diKo31WM3MzrjHtJNSM2DoEJKgddQJReqcwsEnigCYmWH9W8Dw1o14EiHFrcaVE",
  "key1": "2VNozjgD7n8kxAZrRGX9BU3Mi9xP7F5pvMFvsXiS8MNPZ7U46qL937iajbpUvAapqLuRuZzLN8x2ubjvaEJ6dXAa",
  "key2": "3brhsrzFWyxzbYB9T5raMfQsMo4fqbDG8fkVo59qaxJFXTNhgGg8dyFXxs6nETRYodtC7tukZCj4eE7iAniZ9MRU",
  "key3": "44ubCxb2gtD5a4yFAhuoc3mVdMxvMKTt3YZqKeaeZipPck4oiqgyDxL8aVvDtepGQniUiy3t63btyyW7grknFJCj",
  "key4": "5Q3BySEXtNYchhfEVfs4wXYzuU3E7n421MjifkLQ4edYKiFz1jk4QXMqjrYZYhXzcoAWLMFkGHhTTLEFrYRSQSYn",
  "key5": "5zwt7P8XHRXrS8XhvGkzfC2huWtbhjbPjdpTDcuWjsQ8MFzmCmX8h38KJKdu5QT6mcWUJZjmXDAGqwnCf58n8GCq",
  "key6": "sk4jA2B7NrvQxRL6sTFPGQmaPanKLFH5i9bo4k65KXx7XZ3T2LXtEtTN7vnBggdnVvQkL92ywUS6gLV7pVFM9hH",
  "key7": "5KTf6pJEfYrz7fJbLke224DP5fqMtPUYuF6HrmUs4BUziGNAmzTzYTkBuy54xihn4SWmS3uZgz9XVpBF3BszrHky",
  "key8": "UPN1XbBVume9FMaQXXLihN1jwVjhEjEyMfHeLVEKqkyoWh4adpxPCnD8REsJ1T2suV54x7wcYUbcbvRuEMqHE4X",
  "key9": "QkzQemZwG1RokosEJrRYwrrDyAVk3B8nyykj99vfH8W7TZ3GVaGRJyiiyU5axDYzonWk1G8QGTHgr96N1hCYywj",
  "key10": "5gyb945P7ZLQoVqAUbeTcwAHfDNV9dAD5dmc3FEzzFuriDQ9ZVPHPDP9HYwTxAmyS1tuHCaZjFaPHMfcF4DqhPFD",
  "key11": "3nzNVxbFCEvEud1VFAiEEbbVZ96u64kqERkStaWKxo9iXsT96urdYd46dVKxuXaxRV1i1GfidZVPuCjVACvp4Bxe",
  "key12": "2Zn57uQGvsDAJmLiGzux9wPKLWDJjjzLPminxxP9H79B8AT48Yszrs5zj8DzUWCYNrtgxmbn24tpHM2sTFQTcM4u",
  "key13": "5SqZkfvyETHBKpG78xT5qbEohbSZZ1gREArikMfVABXxSJmJeQKSVhbFM7X7RE9eEiHxLtA1cQfZs83yoboz7Z89",
  "key14": "oedW8bPnbDezDpNz1HfyMmh3mHieW1UfPdQ5zyLimbD45pUTjjE8TaSo1ugZCN7NALTo2EMQ3vhcFu4RbnUV8rc",
  "key15": "oRX8siA75mw9bMXb3gadViCSD7hHmyyuCrp9ZFRQevrLfpiB9psw8EkrWbdfnsLGyNhcAEeWZ8zheSjSwuwbmq6",
  "key16": "47GBxUXEQUwPJCHs3im5cGVP7eTLJEsWiMzYbp5uCBu4J2GJFfCixE3otHdQHVRt7s2iBMLZNwdDQhhgtjiPPHvv",
  "key17": "56VPHmnnNMT1q5wtJYRNMfA2FrP7EJGdeJ4gURusCFRcTwzaju9Hd5QuW2WZFrErcGxRzhBPsTVGQs5UEYTNoLPM",
  "key18": "RGazsoCU9sc8YQUR8ZNUwrWRDEZ1zKMDCWZoJKEW1TTG3f15gcasQ7noPfj4WrH8PfJZMzgzrBA4r7Gd2HUYPMn",
  "key19": "5E8jGARW9B6Wwm8bdrb9Uks6km8gX5wQDmzdpoXqMaJigzvSt3YjuoTtjWFvdYdqRfGXekL4kjF8n8oVL9x7NdJT",
  "key20": "v8yFJv1iq4gZMoCnRtseqtjgUf4bXApMfna1RiSZVZJRqwLGUrq8jetqMcxnPPmCeTY89FGrjc2SfJbMMVD2aT7",
  "key21": "4BFmUckkLeZi54AtpCBTeLoS37v5Wjatv74pFk58QuCHvw3uW7XuU4Tzx8MnC81FTSd9CPK35uJw3bc7LAbZh781",
  "key22": "5gbi3oefg2RAxQEMj8baTbB9LnmqP5fBmdrZBuykYQ1eMh7ShUdNkT8x2hxWChBeYfwDWuwpd9n8XLshZnXdkcZE",
  "key23": "5g1cRBEMdse1sqi7wQihMTCex2ZJc5bxdfEpzZ238iJsfHgHtHXYugRRX6M3pifTeVrzKjcwN5zsMpArzFMZE3PS",
  "key24": "2GRr9Jyqf1czsdrR7f5BTFvjNx17vTjGR5PXm2uZDU9EznehkRGGBxXcVmshrbo5aqNwVBdk88DLJFuGM9c8p1DY",
  "key25": "2kSLZofvBBb1hcAmHJ5sBWpb6Wa9duChhRvYF9EJkzJntE58uuM7CYgvxdPxWCogxYV3sbjKS1FiYzXdNBjb6ZYz",
  "key26": "3gV3VS5A8Hwv7iGUE6HEjspRWC8SPH8YAjHZP9zu7RZFSj2bbUmZ2hF5r3wbcqNB4Kfy1BtjHCoQZvgejgDSvBA2",
  "key27": "56bB68z2CrnRN8yCahYRwWjVuYHzdd85HQUbVtNVtH4xdoXtXqZg1XMJmYTb6UpDmjpxXtJtd4iQFfrfYnZdXuRn",
  "key28": "Qgm394u8xYzVYKbyHY3eWknC7bYzcPtQKH6nehdZiyKoZnLzdWS9CnjgjxKV2DN4v4Bt2K9vPA8XDak9VHpRrTB",
  "key29": "3AmVTX1AJ6Yiraj9xwcRprM7Jm3s48r56FAY5iBM7BncHiesxMvhGbPfbDJQPhFYe64RjyUGQKRfwVJZQk77FTJY",
  "key30": "3BPP8biq5swS5V2Pfs4dtoCx5SiTmiWPyQfYZ8fF9RiuMXRVEDLorpepYiVmDMiMP4DXD4VUVsVDvcYrxj466S1U",
  "key31": "5QdMFuNrs9cGupbWS3vePZkea4cfAwyhC5RUDN4tUToqXFMcNeTcQomFirL89w2m8VvFJRhh2dcDbGMRTyDkZyzR",
  "key32": "dPvAdoPeaMgnda5PiFUstQGFt86eYN31LN6MSjYc6r8RADNUqiPzCpkXAEPmSivRMwb5fhD25s9R3tdBU9fjNxC",
  "key33": "4bdKjahQgc8GShsELzNDLok3mCcQCU9ChsNMtLexzZuB7oJk5bVUGKb8XZvPqku6uCSC31cxfmQU8ZoX8wNu8Ktv",
  "key34": "BGTad1ARbEgD3u9GoKtBEkcPmc4xVD78muvWhKmVYx9xXr4jKbrE87JR18vnbyLkt3pQ4Z8X89oBdALYDec5tNR",
  "key35": "2zZKJf6TF1SvxprjZ7qtrvAF5yeKZUTqzcBzAad81QSFYppKMnGMsGWtn6k3L7h3dCxNDwG2UwiECuGk7MTtPAkV"
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
