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
    "4yGNa6pV7DhfsVKrKSYiFMVL9QGyQsNZcN2FJLoorx78dhpesfyrw7pXL5Pi4y6PJw3P6FRnrBY3qcfGx6598PJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "usiabJNwJmGe2LfhPmUmPAJr8mLikJrCyPEcvnJ3X8H21BpvQVhqgSH72bFc4QiiyGJdqtrTvteGQTEYK5auHgf",
  "key1": "2EAwUoRHwFtfoKKYD5Qx66FyajzQdqwstLx42Tcfvoqf79R6UgAJxD2ipF99RrztdaA9K3fwbjArc9sz9xchH75F",
  "key2": "4Yk23J51gyCeXDmN452mTVfspdhSb4C7zjDBuEQPExnDViZJhHmxcxwpmvseXeUcPkn9vsJGegxgg2UvqJraXMSk",
  "key3": "2PQPsJw6N8yz4AR7m7tP34WQVcXe8jfg8Qrz3Sr6YfHEx9DL2drNoT4Bb6LaaDkFYwix67ibNDKtmvdWh5Q8Fxix",
  "key4": "2inpaEzN7vuX2b63fxC9QBBQhLeNdKt1ZgZbzfXozuQV11WSUgbbMEPo6F7uyX9cZANUPAUtaX5tNRiTwK1Ud8z4",
  "key5": "4gSDGoRR8UCnHmu6VXdEJVCMKdSvgZxhADeveVvhMZ9oSLmozhoamDcoBwR9LXhmJVM2BMXSURTX2j69frfv8oxd",
  "key6": "5iHkDeSnbtACP2wyuFn6TFhNsYumzCdFrHHuMkJpMmc3WsW8YA2hJdcMaXBQ4RgGce8vf7Msr1VBEcffQajnQi3r",
  "key7": "3bVQAgWhvrtjsn2Ff3L2XYe35fedSweDYM7pi9NjTtWKPMHU131aE6AzJwpivbPGzwePAkP2jRKhjfu2kiYwuEZQ",
  "key8": "VmgJwXyp3MKCMwtygFVhtinhsWMzJqiWnCEC2jde5kfk9k5YM1zbK1xkv9fVEtbpG61jULf1JJdzq7z6XkSU5RB",
  "key9": "55c6gLA11B1mer5Jm6itWsWc4XjPQRxmu13Wc1wLnPq8gd3c4FgSCVJdcfhKzHLQzy6A8CUv8Dqv7e5Sptwos156",
  "key10": "4a5725mQi4vK1Y2f3jgCB3jso1cbf4dnHyibCCm8kU1QHH7e1TXKdgrUgbVGsEerhz8mrfK47WcPT2NNn712P3j6",
  "key11": "2hWN1JxSyvcKNgF3kToXtDe1eygt6PPzNsG8iqdtr5VX3zXp1tVVSMJZaRc3c6GBCyvMS2eWFUYpC9SCE7quVzYw",
  "key12": "3Wezk7AWTZdTq9KQAYcTpLaR8PWCZgrzzmkxaeoZp5qVkZcJqiyWcttWyPMGvpR6pS2iiTvJbqYJU7mBu2erXDND",
  "key13": "63Mkj4GtcXJy563x2VncL3zN9FahLMMW5FmLWcUdiacHmcJzQmw13LKa4DdrXfaNTGbFRJ95VTWspXKPUBe6zVnS",
  "key14": "4cmX6qJ2giivVeSp53CDfEpjX6Z1D3oC7Je1GpM7L16TKUmwrxy12S4pEiwHipQu1ppuHKvSj4S4vfytvf21Jmtn",
  "key15": "29hGMmAg8dYEtohJ7P7Y4XGcnctv2e2ufhe247gNwy6kuZbFP6hC6q3HjmotY7mj5G5owAsPQ5FzX4CapK52igoF",
  "key16": "4T27yHGo6nmexEVeVpqQUi9KfdRUPPLYW6851z6WPFTrhtQYkjQmKxZupwLk6grtQqmmgpEWvwpw13YDJJ5sfec7",
  "key17": "38rKMYQaP2igC1DDP8MhsHHxQZFVTUJJ3KznTcTHAANmJiJjvaAh5QFBjLdFnpSArMZV9rgJfQmH68EuB5L1CczB",
  "key18": "3ALeDA86A1cH6TKYh1DzW4nFSFR2JPtV5XRnmW2zmXNC7ku1VDGfXCy3srfuimP2yzN1hdAotaD5pyAVQxxFVNHa",
  "key19": "2sQVeuUkA9VuCSD5oZ33r34zBWPzyaLWY3tYvfdyjJUquoLFQ27QbEwJD6DjunqkVkzu92xqJnELDYUMgRoMLF6H",
  "key20": "3REAGhi6RAfdWvRcgq2bmWEtCEmPUJdoqPe5pMNTVCmvoWaXegx45MVrZcwgSUU6VpqtTBkqjktxmrXdtVtxJ5Fp",
  "key21": "2jHvC69ed9n3o2LNERni6e8RtjCDzLUfs9MVeCSADrCxTrtMKQxCWZWtE1DMwGqJJbTuaLP9STv8KSdrcxBDze8T",
  "key22": "AXCfccthEiQ6BMYwgeq4bH9MorQFFPByaLSG3vVXf5yEhUpr18scmQEgJYJw6Yikkoag5GDmaYKDmzKmJ89Mz26",
  "key23": "57G6WsZd5kdNq57cu8XEfUxt27LTdZYPg2c8X2QX6jnpDEAJac9HrCWG6TakWM4FTZQv9f1XoWrchbVCZ67TeDny",
  "key24": "2Ab7no756VFWfiqeGjGs3WtsmhwFTYDTyJPG1frnrw6eBEeDGHQTiDLrRAy9v7fcawjLNraXiPShaNDJC6KEbaGP",
  "key25": "2uw8FgqH86e1PZaHK2AXfANPjk2JRumBtvm5KkWcGfmjoGtPnSUZQAQUgu34UB5UWjDeD9cMyH1q7XjQPea9rQHA",
  "key26": "5ZMrNrm1ENDWGrG75QpFXCSNrkXPSBz5rF6pYkTETj8YjcF3motJNtUHpjAGH5HoLu1gXxUGfAFiseHY4Key9Hfz",
  "key27": "2sAvcfEp8ezpy6z2JaNMFrBDPKd6dMVzh779N7MSfaH1b3ji5Yif6iHmGm7A6BKGQnFDUYX26ePe5mywEp811qUN",
  "key28": "24DVXkrKpLrWSnba8mLoN2q2fBjcVdegHdLvvGQxodTTghcVcG4PfmEvqXvu8XiQHxbvRgkAdyNH71jh2AxuGDEk",
  "key29": "2oMP87ccgSPxErixbryx5okkQU6ZMv8xN2rYXDndJJUXs2FqLJuSXy9k9GeV66kQPtvZPvDLWfKCtpWSH69P4Wxo",
  "key30": "aBJWwSVE7MGCPj1ikfJeBELsHWQWmnNPKKAyK517w6sHa8YnfiamwuNfZLpgS4dVbDtcXebyoXugsRMSKkdkTHW",
  "key31": "38toBP1DXfkKtuvyto49Nwdx9ELTD4CRHPSXHpCJUPo62xHD5cSu373PSsgDMFSRx6vmatCCYTi6XsaHxh1ikzEJ",
  "key32": "4vNYw16fQB1hFx5yqL1gHZ3ASkaUCVygpcWiUTtTpxvNsVmX1hA92TrFX2BdLMKEx5pYLURe44hXqLcsvYEsmBTK",
  "key33": "5g3sifdu4KcbRYLxccVUKECtCrEdctaUMsYRBQpJANfAqRLk7PBAfQshtmGjV5ajyY9UMbZnXjywJxgKeki1CotV",
  "key34": "3DMJX5MJSXL2XUuHRTceYPou7tiVqDpY4uYaAvQnxSSzDt68GTjT1NarkcnKPeYTsNcFqYy4NEpSGbRT2vgxhVHf",
  "key35": "4br98nDctjhhJDrR4gSggtoTZJ14WuYzjzfoBW8E2EafqdcDQwHGtauFA4GXVc3Ckz592YRMYRKVCBfP7rFpFRn4",
  "key36": "5co1FcwVohS5RQj4eP3SG5SZ4ar5WAQK9VkZfy15YBoNwrM4LrfPPFrL3rXJXyvW5vi72SckKjoBiX8jets5DaT3",
  "key37": "2SRyssfDFLzM3YZLaGf6ioDw9REH3sENdQ9eHVK8jaJpmmNqTY4cesn5VrXYe2NQE3GTNyX26qcNeWQRP6aabJAv",
  "key38": "24sYTeA2GUgzwjpVqhMWfAxxGb8vNgH8Ed1MW6EArmnae9Gd1GoLAQamJbhPvUay9FQp8kTk9Axe4KNxu43tGEKX",
  "key39": "2sTE5HuK6MmxdFRwmy4ZJcsUpTfkWvBwvcmjW5tv5ttWPLXqG8ZJDVGK3Rvtd64BGZXfnMXJ2B14nitcv4FQSm4d",
  "key40": "3KEatLvevUBeGS6HWGWJV3xN8cv9EgcTpc6VLvNLm8xhJg9C393z3hkKjGabd68QJUDhQSy7AN53pJpnfMnHC2aa",
  "key41": "3wEdj2J2K5j6Ahcbrq5YnyReFvDDb3YARtdqRwYDECrSZQUVN53kmBi3HQW6ha19AnVnk4LGG2kEBnr1XGkoyJJD",
  "key42": "Yb2qGS5AzriMGXT33BzYQCBeUnBACR2aLqxRhztWC6jJhBahNmqpHbGDtMFq2NKCPn9GWE3GymEg5QHHpu82TGR",
  "key43": "2zP6zG8TK7gjYaLUwAVXRCu69ctRPd81McdcCCSB1ycES2EPRyKm6LubCqCB6883bJpqX9Tzg7BeXHnVX4ZHj34P"
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
