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
    "XCeSzVNN1cXjMwqihZqaCJJVYTAFnoYSkKt2PcpU86eNttcuZSkFAoQ7G4saeVzGukHH9AAR5KC5VWUDjgWybs3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SyiSTfMnXn2HpsHHnqzTZqduKDzY21rqimAjx7g9C4kZr4iV4GN73qr4Yiv36eRqUWsuU1pDXseRuc6LX4oUGQ9",
  "key1": "3c2T2EaKXySvtk9x7FXR3L8UCvuDtw9aQAtr5sdwnWfGSsLKcLmcNszxhoXE4vrDtQBSYdF7FiAdhHVDiy6DyAu8",
  "key2": "3mfHgkKvf7unp6oDyV5ysuUdEcvMnM8MjBx4QtcysvnQUpxPN4XUkJvwrFHQv6F6jMBa97GajMNNHpR9AyWCptzV",
  "key3": "2t49AEXne3d76iHyARZRe7XpKjuKm3EnKyadLPbtazzgBwoxNjdQSeL1dP6WJsE92bSvbwQUJW7XLtQaXsU9HUfY",
  "key4": "3DvSorGy8urWDq7bTMLj9qg7QRCvPDgZMsNEmaA97KGwmBddsyorbDh2RyuKavy1erQ3MrsADJAyC28KZGW2VBoJ",
  "key5": "57JtSY53sY5DSDmMqtYVACF2Pv2ve7VrjcpHFYHA9YVkzxSsgYacUoWkq3yAeyjatrtjgCusvqyX4HtpkbiybwNU",
  "key6": "3V662tyBsYW2AsGWXgjz5uwJ4Yws9ks3eHsvrpY9A5hGqwdiXJ5bafZGP9VZfmgJhJYWouzacd4PZk8pHvoB1YDp",
  "key7": "38CZMiUQeWW1S7NZtvQgzBRrv3J23a6cvWxtao4jobJUUHb9T6G7TixdvbxYMQaZwGtGYFqukPT9hZE6qKuM3X9c",
  "key8": "3Ac5PbkpMpeEUUHTKoDf8kZahXRrHRee5ZkkdFsyLqz1NTwC8hYCgn2jQ2tY1YUaBvWHV4gBoQodnt7MhDSUVg4e",
  "key9": "2iq4PCn1UFsh25jMVrcwe6uGTQmyyJX8fb7xTWsAS94PfF1okzTQTH4t6WxM5U4VBNGSW5DMC9tK27L8L3rG6HKr",
  "key10": "UFL26YuvAPoUgDfc3Hcn64mYyLyPULQkwi1BmtrLLYPgRVMKkdxayiWD5rFrPQgKzTaKM93gzTFH4dfkBv1GY5e",
  "key11": "5eZEMAg7wZ6EKvGSfMvSvKKdEMFWdPVppN8NYhWdemK14nJMHT5R6fVWjg9zaYxKx5fSuSvnFr36jVyFbzJdP4S6",
  "key12": "5KSKjeLSDA2utqdE9kaxDkcSuFEixzmtVbY9kNJC4mQ6AyqAFLqeiu2Qi2kxsjVzGaLxTrhEZHHaUq9eMbDo3rjT",
  "key13": "5Bw2jfWwkL3nVZdDSYG2X2WAbwjpVvJhpjdFwWJaznZeWG2vRbSNjk3TVDV8rgfEWqTEtQwCgBcrcGrz7azo7DAj",
  "key14": "24AN3Kubrtg9chjpYnWxdwiTpCwM895NQSafbhh7md4R2Fjsj26XMD6UvrpnfjiyGLQBUxQE535eutFk5p1xCNwa",
  "key15": "2VpyPPfTUYNTbFRDaRDvXPjeX6JhmgVuc3HNMeg9c8JAMN1Pt4efaUvnGmC2Gi7NryMikZgUYM3AWZ1DdjysFsRD",
  "key16": "4suXpjz6V14VBLotfbd34aejUB6LK2E5Gb9CvExdqTuQSF9PM9GEXTUbroPjC8rdHQ92e6uupJsnQXyV8PSBvNJE",
  "key17": "3tTkfxcwaenFSjn2yEoD6Usi1gkXwj5ohDFSoSDEfZx1FhktsM5ixWr7jqQRNeE32B8ayJJ1NkGmtMGdKdFXnYCw",
  "key18": "2jAjXq6gzzd3qmtZRZt9H1gr3unbG9V6gfNejnwjaTJ7krykyinbgHCMryVkMLtbp9UGK58eEV15vnYMXo8Ce3Y",
  "key19": "5a7uMEU7oPxoyeX4zDrTEexBTjaRR5czZnPZzjEeGCoyjoJXyPLkMn3MCPbtMYPBd3XgUuQSeebBNMFz5h1ANn3C",
  "key20": "4H2Qu6C3WDgDXm2bDVvShcma9MvoosqptGrzuFJjVWjJdJtVM5x1SxJk81HTxMurzwpNiecbV6KCLdRKPPJJDnpG",
  "key21": "3y5mt7d5y8niYsWbGU8q8ETqE7zEY4EAhJGRraYU61tsP7CbBzASKmrgFF27YF4UmDEFuX5kspjonoDVCsRVVfVG",
  "key22": "4zAHjQnPHGBGBzEEG75c8F99yHny3bJxS37o8f4U5tc5QXTEsPis6wvqie5dMpcNQzS9KgPrgcuLXoyd9dZZbZjD",
  "key23": "4Zes3XnuNrcpY6dksEKhtbTaj8zpAfn2FYirnG4zUX4p5y5wmUCk8F6mYtQeaVwyLD5szDwDeNsFynh2MbREeW3T",
  "key24": "2SZbwFrLdzGT4NPpLnR9whzL4jd5LVggt1AfXi9eD3rZKUFxsyrrcixCafAvHEeDbH8myqGHXmQwxQ6MBbwuBeE1",
  "key25": "56KAFq2LXaqwa3gtouvbUkdt7hbkZQNM8JJWqfV2yUhkzpdio1GqinBn5H7v62YggfyqrGFe7gGVEmcqkBM1q2yg",
  "key26": "LQUu6FQ48bXCKKW6v8wU4tzZyrhZEwCwE98pcWNNLxnpCeRBvPyMBHKMc48RbchzLEXiNAEDG3LZk8jBuhJ7WgW",
  "key27": "582SLz6rAJmYw4EgnQtj6r7a4cgDPwwMH46jgj1BDjSHFfY3eks8SnbwE1jcBP6brdHvYJiTaMm8aCZkxPvpBzEx",
  "key28": "4DTwpfXMiGv73cqFKhhLA7BU61Pf4C1wDkVjZmWMPgnD6f3UEqr59tykKxbg5pwk3NDHKGMtmpkCdhoCTwrZiS5r",
  "key29": "oukB8hPeDmh6TnN28aN7wd2MU9HUmtTXXRXa6FxL2vf5VzqCisGLAHgDJkBJvbyfPNqKhWx8GmApAHQguwgusgp",
  "key30": "2MNJbu6WoUkBFMDGpMt51avgPVkxTtw9WNTKcpC4UHuiEmP996bEfxNwEcGC4AYdU14SU1dN7tNtUoLZ3uTxvB35",
  "key31": "4E1xejtbPfKsPSQBFgtM3ra3tiwmueXXyLAwieVewdoAbDB63huVzhts9EHkNjZxMJoaDXhHyYsad7FEdaLMTq5n",
  "key32": "2QBmPm5qhutPk73VDLChVBWBZCrfdWZniaZptSU9Lba8Bb2qTKLPTT3qJTma9meP9oDsE8UiadAz23GBCJJXvhum",
  "key33": "2zSqHvLGbdZTFeaBkpcVW5kNVycVot1Pf6ABAHecKmW5Vpt5Y8vuyYc6aEfT8SbFdKWF7WJTs4eK3xm52KKVC28A",
  "key34": "kCHb8GXopVbdYrdu7nENE9DXcwkQmBzYNJFgFkYaAhKDUgRiYZ5uF1sxvB3LtEYnJYgPbJT9RbYH78fuN6rF6Xc",
  "key35": "5j5HYcHZ19LxATypcEiLNK9Sy3LFEhbWWCgtvbkgv3P5sBys2HVyDSokUSWqDQR9HCcUPf1MdRPjH1CpyTPX29gM",
  "key36": "2xB4hSXWFpxEBjumv659zz4VuxZ1ZEnsExR9fXcczRV6GUNr4ctuy9GyqzY15dYDCdTsN5JrJahKA9DFQ6Ji6oGQ",
  "key37": "4eEB3zdgMjhimmJrZuw8g6yd6z4moArJLMsPv1Si2X2HTBtuQxNJYxCntGwfe8n63QCsbMPdtE21DwGU5r1WDvPW",
  "key38": "128xRPoXqPii1hjeggJaFDigsr57twzkZKuMw4w9gZjQFNPwzgRN7udCSPunZ3ELFyfkE4NYbHWR3zg9RdN92q6H",
  "key39": "26A84gcGMni2uLap9pWVgzsmLiSLpgEChbRPsiSPoTYEkfR555XaBqq5diemDtRwQCpeGeaZWN76XzSxNwSFhZ3c",
  "key40": "h7Atzmz5GDnP4ziuTuJU7E6Q3U2CdWxeAtB9RUA2peU1NFjJ2ypHyN97znNPKkKedvtJ9QffjDDr1H82ysnRMxC",
  "key41": "5wuvwA9svafXtg56jAfTLv6g9nrXjpVSnBL9yXTEo7gsWiLdYmfmj9eNTouGNeJ7WBn4hThUS9qDWvsqK5YvKpQn",
  "key42": "4dUy8RTHYqypQBWY2UBKuXyMrATBvbU5vUaAbF43ArmwgA6AbrmPQF78mTxhnEyMYtn9SuZBpRuxisdGTD4mJ6iF"
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
