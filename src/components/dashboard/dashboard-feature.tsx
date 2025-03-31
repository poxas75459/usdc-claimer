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
    "2cBv1e51CapVSLdjoXpJ3PVrEM82eoXEbc9AvHvYSsUn1umKvuAUzvdcxy2ou7VwHnUt5mV7b8kCAhNxf4aCtvy5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AopegAJtWyEbEYqzzgfynZcmHhnSGz3zvGnmgn7QPbhVsoaGUQdnL8uuPUbv7Lx9jPE9EaiPhvMVDSZov1K5dRG",
  "key1": "3mnDKgfacTJAaHDyZUsQMXVcuJ6AXQW5PbkfBUZ7KQuk6ELgq784L549ZWJqzyeQyzmkftMNbLdnMzWrxVhS34TR",
  "key2": "uZQBND5raNTEJ9cqFxihLNFkVP2AoJZ1WuqBGe4HXTSKn3HC61RDqSpdKGuK6EgWjRYVyUfaAQCyEnEWQg3ymFq",
  "key3": "3h4PaNJ5HETnxMjbC7UFrhTGb1a8Qi3ZmDZSPQTgoWYST2gJHjRiGQguzoXgKiRgz94RG4rtUWxRZpmL34JCjkJk",
  "key4": "29qiyTY3VvaB7RT6VUbodA97FtgtKjzGjoAA7ec7hzYpVQdGGLGt6pBdgDiGf3Mx7bdh2j2wNEpX3HzSXrRm8VDM",
  "key5": "4VfmrBGwb857S4WXzeghuimpWeFKcAociGSmjbX9Zu1jASmNViS2yasEjxM13q4X2hzWUyjQsBaKAUS8Pz8fvctt",
  "key6": "3qgC4zANhbdeRSis5W47s4GTCWWoTnd3UZpjztju9LszEU1DENEX89pKBHzTDowYk9Bz4WWdWNthyyonPnJ3jFtE",
  "key7": "3kWwAt5Gm8qecQmiZoWX3msrDsS6iYC5NJswG3xHXaQhuAZj34bJvyzoxGB7rtrGvVARADJYFBRywFPHACMXaFKB",
  "key8": "3HYYwB7oiNWn8uSJWDFT7ZscWKSawpBhLiqtPFcdkHTa81bgk8z91UijcrJrxRTYi2QEWE3gYiW3UhEiLn1Dxo4X",
  "key9": "2mGKmucwd4LD5UgKKnAYjsBN7Jx7Epa64rATA4V26TC8Vy665JEwanvFZw5ksLzcotLPxFCpSYknGn7q1YWbhvi6",
  "key10": "2BnVSVTQkEs5K23Ebe62QEHQQ9vK7dAd68o2N7Z4UUX78CM99a5ymErZW1pTN2AFyy4nHfY8L9edbwhRwJ2GTUoR",
  "key11": "2Sq9nfsSeSEvASm8k1xNxd1TpkGG9h6aX2LnFnaEc564HBftegHNN6jekNavMjQbb8YyacVVrU78gP3fSzZh4rSn",
  "key12": "4uHwwUVwEEc2YFngeGvi521outxGkdcxodgsNHNZctN92Ktk5y1DCQDN4vcKmHHJT8PGfwpNb7oQi3FAJbdxy554",
  "key13": "2HZp2FjemgPRgmyWW85AoAAxouHBonEkN4eWAeCsq5JZzLBSoyF5B4Fqc7QuiDaxA3xBK1k2BDRWZzi4MoxBqxYq",
  "key14": "zCC9TiBfWT9gfgmq9TkVas9kTVVRR6NmpwxfpNT93qxtfWmsgfSrsHb9vARxgSkszANbrZEozM15z6ivfJCJi2m",
  "key15": "Z1Kg9hcTavTZehYD7onJcPu2AH3R4SwuxaKBsL58RePLmxRUjava79hKq3oiH9VECayJnE1hgPTkS3fHRF4wbef",
  "key16": "5TdTVV7rHAJ79APA5DmMNxnHw8N6HijbbMd7DVAjswfnendy2VJ45EpQwXhpxvVLubDx2Yd1Gi6JanWH117sj4dD",
  "key17": "5ia3zVGZ67EgMQyriBfwww34e63zNDNB9va8f7Mjyd9k2WqdNwJXohACJLqtJHbwHHGosZMvZCQx7iySQrGU93Sy",
  "key18": "3nsne2okj4YRjPoJF5zZgQ8aESMkvSt3SgvYy1t9Y78BuuQyxiWSFmiGFUK5gx4AEWpB6Mro9ce52p5vbSVFv3xK",
  "key19": "5HAZvWqwZziUoaaffvRHq64AJdvMA1QjieSLFZzbN1NJGBWWDbaT25zci26e6Ac3c8UAPsmFaJPTte326XRuXhyQ",
  "key20": "4kQM1yZSosrZvstsGo5BhsfoQpZcbkY5kFpVp9Ln8Q8zVZoWqh9BpBCyofLhnHgFtiMubYFWW9cPsjsK6kAVxS9u",
  "key21": "45qjyeu25YQkiLb2LG3MGQbgVMbmVaF9EiZLdENb554ZhbJAn1ZE8V8mMYWh66uKE4DnYsqebLZHoqYb3F7Wi6sz",
  "key22": "3LWS75PegXNAhAGYgSYX4yyoNgorkuQpEoaUMBYv22umUw32HYHqtcurWRg6gu9bxAVvNkK9vJvoEoAvvrzhcpz6",
  "key23": "5R2dMGkK4WSRMfMocfvrNnz5hsDiZ6MvfTKTRdFQr165ztErmaQiBVGdHoUgAYN7MEByVTVEjszbbde2MfC4Zy6m",
  "key24": "kqk7B1GzGPZrzHimMWiggJNbyp7xPdFvpsCRWhabcv52k238XHWQL84c2JmC1wB7LESQYZMigpwTqpKoogFn38H",
  "key25": "3dompHPknszWwoHtSf5xj6X2QV3yRYyJBZuUqyaEc8xBDZSRhSQVmCootCQmg77vQ2pVPcHAQRChnJ49zvBZoBY7",
  "key26": "3T7oNTwqJgBxWnDcB8C7m2ELFELSMBhUpQbFRpdkAYZwQM31nSYwDMTD7p8V3jG8S1WtwHpYtr89eMURVQTVWEic",
  "key27": "5ZEYpxhF8Vmx2zK8McY5hyka5H2LntwCVnuS6kkkZ1g42VH3GAMZqXzFTCNEMAYsvpkG6vDHj3VxXy4yCUFhuWP9",
  "key28": "5wuH7VNXXeLGPr2RWjTFt8UzWWMnkcyiAC66XH92vzc8nHCKcP8M7BXccFhBBBXBZccXsnLF6tQNFZ4iH43Xw7Kz",
  "key29": "fjoZJ6Up2qKa7d5SN1E3gWF1dQh8qfXDWshe75QpBzVMdpVrKEHmkSGTkQdtZRsu8gyYmVpHaVN9wxatii9ewUd",
  "key30": "2fNJ7wyiE4mud5ksFP6rQAo7fWbAj9BSuZZKsuAERXYatuCCbK1JM7PFYCCeXTg5AURtN4nX58R2jLysqcakGjP7",
  "key31": "4UyQZqRhGmHvsg2HFcYUFVUzYnE3sZvy3YmSP4h7UiBZThvuKZjdd1WxWHek41b1FMDHaqqEAJyWEeP5Npr7M6KJ",
  "key32": "3bGYYJRaTrpBpehEYF7mNsDbh69mjfCtBtcFGQsT28vH1JkmFCiWzKnEV4z6fB9NLqqAKAhDEdhPuRzjmcVv2L8J",
  "key33": "5ECF17KQgUb8x5mbBmaVoNAdiHod8fnFDaiTBWmWJSSruBoeJqLKAzeN8pgHFYsqLYtoDA1FWiAn1qeefqz25Q8v",
  "key34": "5JoUConnagUSJnRwYDGrJjPGMqT26KRUmPSwdtqJkkRCBJHPGdcy3KU6cuaXF5Fg4yMqNQ83jLZoAyehPbvFZaHk",
  "key35": "57yxoKmWyT3PZqVpKdGfqedUkL4Y8WtayqSCmQFEQaTNJqPvKkd4RmFMEz9mPrAm9Q2UmM66NgNrWTDN1tJFt16p",
  "key36": "bQpaqg1Q1NWP4JvbDPAYXfZTm6j1ehovS2UiAURETjiRSqHfCicnQZFhLrippBGLcf66HR3SrmZdFbd7zKpjk2n",
  "key37": "4v4MYdxAvfMmeX84NsEMLoD8hd5kjvaqyDhze3dNwTqcyDSQPQEmZzptEbUEwPvxf1LWoTbdqpKjSChuqBHNufg3",
  "key38": "4jUvBEsNr5suKLU5BJE7dExMt7cGxcASpaEjcU2QTZ72H81GeV3oJULE54NVk64K4TwdfMe523EE9Lf5Sbq7MRCs",
  "key39": "XAvLLJz8s42cNALF5ryctKmLcHJeKbwQHVmCZ5cSMYwBhFbtds1MtZqK7p1fZtBhWdqQjzw3YkpGA6WU8rgJWBD",
  "key40": "4eouqJZDMJ74bm6grsueowNxsYx9ma8T7yzqGJtfVxYCRg1rPZ6Fcr9r7ThYTkRfxCazbgNPjSCC5XomXrM9svWa",
  "key41": "zD6NSg6Be5YBbdwc1KTZ3Qu7bCof3fEnMQNzCz3joGLJy25JDF9R6xmZtLXmwa11dB9nB2c1d5GoRTP3eBma3hQ",
  "key42": "5hfT1jPzq46dz87WGMzsRpzuyC9AXvUTDHXNw5Z3nbKvhcR7nZzL8yW3y4EeFqq1t5iHDxDoAQcTDAvHbHpt9xxu",
  "key43": "2nRiMcgcLDCvTxzvr6NPVHt68FkEzZVTNSUqkMDPtF8oMEPa55hbSW8e9M5Z7YsEutjUSAKrLQnXqdPgZ8YYVo3S",
  "key44": "5xt6omz1nPFxDzVzpuMWcuEmDJVAs2GkbfB7SC97f2xqTZ7EYMBzv3BXSYxAzQzN6mumbTH2GTdMkacEFBdvQtjp",
  "key45": "3K13rpbqkLZgXhExWmtdRFf7m7z59YSVisDvgNc8DXT8h7XznFNqqMcjop8sMqEetLgjdEngogY3wY8uwHR3maWg"
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
