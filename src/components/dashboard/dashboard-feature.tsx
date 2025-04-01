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
    "3ivHUqTGLCXwMeocHTzRad7XnNnsGBHbMwnUqdHCbTZS7TdBpRAZkVfyhmZcA8uw4mrQGsvxb2iuxEyGAxyRntBn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MCKKvJ6pxv9sfdTJxjqaPhBtrEkmUbuL1VneqMNwWCtzhQFQrvV1ARMQKAJ7VvaxEoKtTDHUssLf3Rqn1y3XJ3f",
  "key1": "oUCTtTpmzQajmRR5Rgunj7pFRW7EYUHqoJcPfcCVC7DZTtGxjty9F9FQfUjyfyF2gd7SFV5yfgF6bNJZQQD5VeC",
  "key2": "4SjCTuzs7Y8rwnMGWNr5hrqjUoeer5viS4jk1K3zqPf8VPf9CL1qSFCayBKASNrKLDydqqmoQFQFiECdZzZ1Xx9J",
  "key3": "39hR8JabTLEJLq4VAoDEKXZUsbvpiJj6z6p2PWjJjwix14KXPijTEXkZTtX6BzBvqhQsZF4UakGWHenvKcrUjDQX",
  "key4": "4Bwuv3MXiSf9Fcn3zF11eQvSK1X1Z27MMsBJDxZe883tD7XFtjt7QfGziQZBCbWRuQaygw6bk1oNd6ZPwQ4YMf9K",
  "key5": "4CmqeDPWYNZ9EgLirKHyCUrEAwnqBTxRNKaHvUXzsuLt4FVgZkjXYt54CEof2XvQmvX5xcS8mB4U5uAjmuxdfQVf",
  "key6": "3DjKexKyBezjNEwXJdhASUsoyoXgrJ4pxVovrp6QmR7XyxzJ71k6ybUBKhyqdorXrG3DGxz4MLBAH82kRJsHGtMh",
  "key7": "45LoZxvtAEtJ1yGuNCNC7rLyf7SF1GsuQrEuSsVyFjnQi9RhHdQYWjyWQmg12Jebv58Ev3HJb3QG81a1MFchZWTv",
  "key8": "5C255uDHzzAtg1KR8SzZpbSW7MjxT1kLDUQrdunghQ8WGBVUG2VJxH8Sjte8WtEMPNLD671VhT57icz3NAkDob9W",
  "key9": "43cM2741orRCfPdN61X7CDQ5hu7exFZKsnV73iRF9TRinPXYtjwG57KMgXSWKFbU64XpzwysMw7EEoJxNKBFL8E3",
  "key10": "2NaPZ4imRgift3nZQvpA71EN6R9ENK4U6DekGQoQSRSrDyiRXmyLTxZRsK88obDmsQ2xpfh8evryKJsfk3otjRcr",
  "key11": "374p4n3Ch5QwTU916NCqX6j8M1MLwcwwNSrzC4apZfVrQv8xGTFV1g6buAHYH88SJS9fibndMdGZFthAU7d3WNuk",
  "key12": "4ut65JT3EB5xaET88M8ZeG7wVz2cqPFqPMBqAK8akKsKETCkTfiDNrdrweFGX1At1apXVF6q4u3PqkcGFpTXa3Je",
  "key13": "2yvCRagMD6Qc1METRKShDdLLqckTbFVnpsHLWZW6EY36MRrh7dtgB9LLQu7osd87PaZDMN8sjzUpKiQtgExyxNHS",
  "key14": "px3nNVn6QQ4j9RNCAVCctgpeXmqh4hh3qxH2KKr4rskBXt2RfbBz8NzSYaYMYLiPqpfmqvhLhi9415QkpoMGEg9",
  "key15": "4BHCuwQCkgAR5z2rrQMnn1kXF5uBsG3fa1i8AmL3pZRWXrSxus7cj2Bz3C3L3qYhFxEGiLUnB1WF7idte8Qkpzcq",
  "key16": "5AvVN433rRWVkoRnr6qndgHBww3bDYZCufEpB1CgR6NzVZ6tQDNU2sv5agqa2w85WiLTZCm9M7yzKTNxawzgUTmB",
  "key17": "2pwfFHEmwXeLhF42fQoSZ8EZk6acrMR1S3cfuHSfjmZXVmjNGaXmt5nqYgFvmyqV8qBV3RGgeQGpShAwCkPRL8jw",
  "key18": "8pKrK6C7Z1d21ay8HWN1pxqNeXpPcoZibJ1iCc4Y64Ado4qu3SrrmQyuC6XG6YFXYeWufHutenzS574GtLiqTpK",
  "key19": "uMeQtDouo9c3jCcHJ1ftzFBpUPLmTZG7WCC9Sq63yf5vZCARbvJHQjwe9je4NtwUi55M6b4sDYNdttaFkVRhZ5m",
  "key20": "3CzzKSvE9z4jXwgdgk9XB2e8UK188hdB7wXVuMfS2F4Z996Ez6RSAZKg6aqbx7y5iycG76M876qP1WdGok1Za2Vv",
  "key21": "2TtysrnpDxZskfMc87FfnpZ2odZJCJvLTHQJNKuuF67qiQRrVNfDv89FgCervmmf2tLuApEygbaFosFQvmytYuS9",
  "key22": "28NHAB53kHsD8JiywLN3DQ4yLa28xUthEgYAAzEUUhBfYqMLzzuEhKRde6n3UQqRTN7DQ3YmvRBmoxSx6eUUgjy8",
  "key23": "zEAL1iTQSPh73c5r8kMD6WbfC28ipWi8TBvKG7Nw4zvfYCSTQoUSttvemtm5NXrt723EiCFBhcUUrmWdLVshyf7",
  "key24": "4fWTtphvaWucuRCiU4hhAvG1edBC57BeeCWSakjP2G9nrLhwipygNZNkeCpmkcMLPfWFAxwg5LsEK37ekdzRzxET",
  "key25": "4pMYBsKjSfHcKgfe2aRZ9BoMmc694tntUeJ5QAKsU6fy12cobUwoQSzaPL7YPi2EDPCJDD2PUZb6gPMRJy12yJ42",
  "key26": "2GuH6DDJhVo2CTUGg1jgEfoqkS5NMzP6sVFXuAAD4pZtbCfq2GjzWdWABUeXwm2xBDw4eBbruXC9KiccJ29tDUoZ",
  "key27": "2SpnVi3iJKN1hid5Dzgek98R9pxWuDTZQpvsPoCqsswfirYDMwqdL9hpYERqx8XK814BXwefGVyxkDvgqKjZMeqw",
  "key28": "5XvBTwXENTZtJt5R4AhuaYyYmHKRjtfjLH6gXxFZs2ARDQ7EiQyPq469XcfRvDLZwY8qNgvnxuJmCPw2tzgNVNNL",
  "key29": "3zmCCyUDHKrGsEJtTmWH1cEjG3XKAXhvc4gfe8MFfJ8fZj4v5K527g2EVPRp96PBimafhqakBxmQgVMhr5pcWRdM",
  "key30": "579mkov3nveyPeAV1fGiDHR8y3ZCBmrRA6Y9TgXxDAEnpyz9ygCjmNFyd9qMejziD3c6rczM4aHqwQDVry971JAq",
  "key31": "58MLC5E5i1Gq2GVTsJr2RWHavH6xcgthsPW6w97WA63NcnMCyAn5VWKgr8GaWafKfoaeuCARHWnirSM8tuRLnhyv",
  "key32": "Qaa28wcQwZF722NL4GWeQPAxNGknj9wTmt7um1fmZgWQEsH3SvgWEWBCVXnMw5trcaX18v9rwvquxzdiZCiFZsL",
  "key33": "4acPCWR48X23qwFfskox4rMZNe1aSke1GWh27XHUN6KsW73oEdqKMU9T6QJs5CcaAJG2sELyHkvhASkpEvh9S6FU",
  "key34": "3ghsce4uT5RAWUG2yMeYhH6DFPDYqmVkzVBMEFLqiVYAB2FU19ibGiotvN6bZ2MCBRcjL9qhSmnXtgVCLfxxTm9U",
  "key35": "3nCY2tTSpN9YXwP2XHVkSUvGHxJ8go2dfDQwHZ2NqFfWS4kbBwHbwW9UHUaVw4XC4ZFNUJoAzd7fs5JVYHUzSFa4",
  "key36": "5F1Pg8ac9MBk6hcbCn71ui4ycu92Lp1nEWm19875qJ6p1qndLS1TgnZ25jM1MSdpFoQupEPtiENhC5FXd1Ep1k6B",
  "key37": "RZn3d1coJX96dQb3SAuX3vHvZyfAhQS82d5FYgiwicGQcWYJUMFjsJaC1VfssMNvHbUyqmbTHG5o7mFqErwfW2i",
  "key38": "48ijTPv14yf55absBrb4NVpgkqtk1QcRESgz4Ji85MAExPFBRrfQsctrm1zU4axWvohzekiHWGTCiPffEy6oJEon",
  "key39": "4GyNnarU7frkiqMniBa983oRmAyk4tXNqBqpNLtYgHt55C6EEdz5U3cGbWzCkpkF4bau5yxyP8uiYgrFWDb2WkGv",
  "key40": "4aenZtHKDNXWMg3tuHSQmGgxH1GxRaWHRibDBzQXGWd7CGge9vP8XSVvMECaTeUknf2hELJm3dP8x9xxzdRiEFZy",
  "key41": "5hiotWZwnUm7c2BZ5tQBcpeM6XbmWsFVPCgAa5ehjiSG3KSzqsaodzHE3sn5o46Q9ayiWUydRTaVwCzdRRYcTgqH",
  "key42": "4pfS9qGboQKRxAArYX1jAt5Qg7Dh7GDcAQUJGcPrMcHfwWZiqitB7tinjkBxYe4NNmuSH9tVgCzMbbZdAELin3aw",
  "key43": "2z7FnMonTZaXDkALK6CWVCccYaWHn1oW26B5sTBW2QP9jabGLDYzAxC6b5otYpJfTVnZ6oTwkbZW263svrVeqTmH"
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
