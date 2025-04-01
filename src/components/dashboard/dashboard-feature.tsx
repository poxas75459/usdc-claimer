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
    "3WiS5jhqFzSJdm83UQeU2XzUkDR5fZDt3YX2mvBoqnMaeLBTxcxxPEiYFh1SxqSBZ1jaGsCVY29ozYdgDgHxCkAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RRfVAFs6rc48HwWhJAFas9gqD2MiiZJLX43opF9zhuqrcE4ZMNhE97XcFVbo2kpW6xWuQJ9vfcKp9AwjKJqAe3v",
  "key1": "5UQcMEviW469uyBfqVrfpeshs4zBwajAt4Cns3MwD75jSo2oGHcXz5jsroC8X8poAJJ1xheChZBX3H1auj5gFSG8",
  "key2": "1eM3NE6o6ZFYYjhM3v8SHVA4KozTuVqXFdaqxFZMBxCGVVVH6pL2pD8V1osLCCMLY2ErpMcAjtKenZvcNMRw93Q",
  "key3": "4UZGgMPzUECMWqgkpVSzosediHymVDhf31cQZpgScVbZK88oXtrDkksHSLrUeMQABHNoGZ87gjwtV5YJYkSto1bH",
  "key4": "kQo3gZvcgxdLGhUbiVQbrgamLcaQbEomoFzBf36FaPXcZtrijgGiSnqqZHwKusWdf1SxrAxiFQdcshTMYT2vFNx",
  "key5": "jBaEQGkvpVTbMThgPmkED1Ae7A9Fi4dznek6jd6dcLqhJDsrtcrdNxXKNhhqh33Ng5KTNnVDgGLXdJ1Q3c8XXY5",
  "key6": "2ViYRVbPEcJ2isdfZUq2kCxMKmhgccjvY3RgcgfX5jWsL48HcxTv4otRrpQsBX3hg4U8yp4fodWXhnGyiwg4aSN8",
  "key7": "3pigj2TCCxfAc8pRx9u41eXUQFEv4jH2s1xup6mtbVoNYbc53SX9QUREabzAaFYFKZYc7NN1MNDn14PGYBLYjMRo",
  "key8": "dMZz6QC2p36bpu7wWN6NukYQmApjU8T6Yx4uV4CyScRQuWC5ywEj8jYbED3QhBoBhvoV6YZauf6jpVofxBtUftN",
  "key9": "3ARVkkfJgSf7ESF4epEjQdRKRKqfAyCnwgs5adFLv7kEPDhPKdoX5wrCurrqzXn8cVLdesA36xUyq9qfcTxKh1r8",
  "key10": "65HLuwwFG8z8EemBiqrkp7wi3fKsRpYhZFeaGyXysR4fYp5Pe5LSrEK9WPk8jmnMcZZjJkv6NPDi1B7yCr4sZekj",
  "key11": "4qRKSazPY37RRtAcGcteLwUxrXH8JYYq7fcWoQzjGtspih8d3qcscycu5NNKbv2btCTGsAjmoqsi5moZ8hFtDKpn",
  "key12": "3QjXxRPnQWMtM1qDmmSm4Dbw6xJyRRdm5iMhHSGy1FqGGX3JXH3yavypSdGbMFa6BSAfZA2CQcpu58zmpEF2vJLo",
  "key13": "48cBf5fpkYbb5r6CeiWce8xJFtdsgrZV4STiFvBHGjYULRbT7jrR8QsZWn36vkuwavSY2GMEgicPQ11QWtpJXsqy",
  "key14": "2aXsm3BksyYCWrhVSPfuXQw8aRD9sYp5wVFvxsVCCb9WhW9Rv5hsUFCWZEwRKpXSpu9TBpi2as3HvoNgm4Z1oEEF",
  "key15": "3eNocjKXFq5kp878deixhgjci86VAKukiqMdi5PznorY2oSVo44DAYy8JuKfoccFjrzpfiE5F2ikLfEjtR9TFqV9",
  "key16": "4eznUKcNomY2cE55KkYaQ8geR5TZFLzSRtVydRs8DY1orFW8Sd83WcmenNmvb2T82hbawwDJwNS43k4eEU1yUdM4",
  "key17": "2PHPqqLs6zwXQ1Rp7VvKpaiuG3vjzS3c5VxxtHp3fT8n6oGo9cGwSYq1LYd3a9u9p58ByAucSe1sQ9XzbN3yrZVU",
  "key18": "m4wXVnv8ULFUX8fbSVVgqC16JM94LTcSpYF6FaCgS2rhYi26so42piFDYbgaTtJsW7ddZNcSbTnJvbDeWpYRYjr",
  "key19": "5pXNjYJYULZHjLNPxwSAUwk2fTWPL8Uha6n5TxaLJMeYBNhKT3tri1PobbxBwzjySxJKHwRobTo64ojonKYn2wxj",
  "key20": "3M2c2sevh6UX3D4QmitEsCR55CYJ36iR93ytdhWAMopQZ7ZrDDCrXDC4eTS44fd84GzRatfRVjtsvYnwSYvc6R5P",
  "key21": "3rbvhYGxkacAaLJQD5nkhKkQ3b4jZfQcpykvVBckVCh2udhURyvQemzcFUVguD8yzxFWi4TqWfTAm8Fsu8o5DLTt",
  "key22": "4D7NdYJpVU37dmjs9hv6cogMwiRGhsLdXHqfBnfdXQg68UXoKeV2SN917EfBFJNQBHc8qqFwYYRHD9UN7C9p6jRe",
  "key23": "xjBXCT6WX3HfX7a6EwGskx3ax6gdCrc3KGB8pubxwreURdjsYQWP9iTn2B5EUFdG6UpCYcChVhqfXUCkrgATwda",
  "key24": "5rxUvjf84n1oXsd7rhMpJR9GJjM5R23hn21yGJLZgK6saVXSsmvvxSVS6sBFCah3Rsv3vxnxm9DbL7RNayMhgRPA",
  "key25": "4zFz538n3WY72RQ54NaLxq4g1x3JmunamyM2MEjx89skNU2ovtLGJzNs2mbYYQTh567H53XhMnGbsYK55meQTazo",
  "key26": "4GjEnZBVnLxMfHH3DwCJXprzWbvsFLspx2zFDSLBdkNJBVCB81ZoXUNACbqwq2X6yQ124hCPxGq7WDLkADxeYFmu",
  "key27": "4nKF9a8bRW4BpQLi4qbYkjy2id8if77VQTCGFjEDFMXuWPzJKbenzDwLqS5oxpR9qnd6MXQCFzAySF2nFPbeBcBp",
  "key28": "nTY3YUJw8ziJzpz1kvQdwLo9NUqETZyGwbrJMwcyawnzCvz7BXVpbbkbWBf6RoFer4kniEFEVJJ8EK5vcKr5r1y",
  "key29": "5yjeo4D6gH96HybBSyMhaoJqTdXGXmidVqYm7WoGyCpFp2vcUvT9Wy8vazQeGz3ht9c7DhT5u1tsovgJUQxcRWy3",
  "key30": "37FyKSbTcznvAGimC2YX64VvsqGudEtuK8c5sjbfHC3ZCC9kWJcvBiAiZnmJayuyTjCcDVW1FKh26XNGFtKSosZq",
  "key31": "2Ff1HzNySdvtTMFtZpHrvxgfcwhFKwYFm61eyBoTUT3fw49qUxsuEHEK6bWWTDXLZkptPy3kZdeqBbrnQd7KpUVW",
  "key32": "52bUACLS8MhfN2ABNMVTrZVWpj9BnxxXw7uVc2EdCq6znjTeysT5KyoMK9bypSGhDoxsdfh4DyQe2UzGbmpUv7Vw",
  "key33": "32R6axcSnBhPbK7PaeK2L7cX7suNAsuB73H2XAYtvjEiWcQUXbVifPPwoFQgcnHaZWHDr4wvbKYnxBBP4qaAttA9",
  "key34": "3Vw5RvDimGEzJB8kCCBL5wm7DssPui5x58693mmmVrEnPH3BuSr5xMcsJBTqW3f2Jvoq3dL1GmiTbpFb9LuGe5FN",
  "key35": "4XmRdT5GB74UBBtXcqWjQMWXKsLYdVSRgAHHJxznKarZ7ZoRuN9UvFVFbBa9EGRKpjBizh3JaZvrnQLJefxiMdyK"
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
