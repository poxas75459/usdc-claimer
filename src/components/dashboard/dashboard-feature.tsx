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
    "5ZwjmWy4nYQQdM9jbieWmaDcwqdhPdkMJpkrHJ77JbHt7u4Pwe5bU6Th7xfzp3RMX6CviMph39g7nChzDEmiw3Kh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KzLadycPHrY5kfD1kKm9B946a8ybqNFEDNpVVVGNU3B7USuRcHEACkpJFuH7YrUU5mAJKJJPVJrw2YYWzRSPDoZ",
  "key1": "RL6Ng32VN8zSFLCWMrXGTXLhgqL7E2Qe65XrztetLqEwV67RnD5vasWT2rYqZq9QwSBYKA4uQc7XHB3qbM2QRE2",
  "key2": "5262WmaX6sRMPopaE68yty1pWKz1iXJbdWFzF3eSRWPgdxaUC4PdXcfKt17HnSG3h1Wk3eGdyYgG6PkNJw5gLHoi",
  "key3": "237eWaLDWEAAr2ZvdKGaUGzxvUtsc1DTygSBbfAohyciKDr5yLR4pgkVHuTRqJCQAvwUY9iSi8X5CUh2BFPEWKut",
  "key4": "fQ9bDb42XWsR2iibKMfBfH46a5pwNzBsNd8UktcsEyJgj5tmqvtCQ8KSVmKBoSpgjHh8URfKFLsgfsqym9FjHhP",
  "key5": "4vnNV7myfnMeQF2xfx7LHHyQ5r2vQ1Myq5m6atonPHDf9LqZFos8QZ9EcZtYY3j4FVdNKURiroadh2hzGRhbFFMx",
  "key6": "2CUcuwrjh1YnL36UrRfxMWBc4vsBVaN8pw51Uwgxc3saHgrYeVLG4YWsC2ZAMfQphe3D62tyF5pbFWtjcpgs2EiR",
  "key7": "22sXF4rBs5pK4La3pF3iQkdi4BYtVnbK6AtsNXX9XyHfNr4G8fDPbePyRZGvkc2mybBY51bXWsUNetV3nLqDUYcW",
  "key8": "Q6c2D6WwHaxnFNrU7E8ba6uwQWhFSVEba5USapVBeiHywuv5YhkEEUWyhxNrBnPrdx7FgiPvxbjpcqQiYvY6FU1",
  "key9": "5DBMAmEV6F2Yu9y5j5gTKaJpr8zmoKbUy3Qj5VgeB6rwMU3qfa9fMD9gskXx7P6SeU4kQoRu1QcJ7nbXkxjGaCFK",
  "key10": "5QcRBSvS75Ek6afxJjjjm2tn5CeiwDfzTBCMinPKyKBEKnignBPrbsz4MqocfnimUaTg7jsNtcwN1i2MNr36hNwD",
  "key11": "5mxcUqSGYELXWh9xVfeG65gxbEPjJRwfuQ5WfUcEoztXF2TzNjew4WszzC2JgrTQbnDy43ytD7MekmCe7WGpJYD3",
  "key12": "22g4y3jHtTkpX2bfKdmotfp39xjfUBrQx1pBRzjhoCr8Yap9Frzb5kvgJ5f1UtzN7seREyV2SDtEngNZWsKf8Bp9",
  "key13": "NMGnXEBvPkLNHdoWhzjF48BhEMiPYLg2NBGJzXv1wJTrdmiyjQVz3jNCuZcex1zvuSeDbrCLjGgjBqU3JxYGW8P",
  "key14": "4BuHLaraVVWHQFL2cfWkEwoxAf19T4i4zVqCFRj5nAiDUmzrCQtJFHgt3PoWP6tD8AefZQ3yuoap9MkoUyUEecz9",
  "key15": "8KoqWVeJKMxbe11ktXwF4AWoyurnJ7MrUMCqFmjeFedbjzbibPtsS1ryHXVxdMUZ1M6csg8GZoGcrPber4sUGT9",
  "key16": "4yBf955b5QYnNYRLNXLmDRDcR3KYt7Rxn7SNae2uFr3dGnH8RRqYxRTCytHUDzJEVzpZyxy2ixKvoNMXNqb8GHDX",
  "key17": "ywxC3LTyXxvEm87AuDTxmtNgnQxyuPCk3LQxUZbn2vjEhufZPt7heDxufruq6NmfWvmVxRvczRXkyWBwv1bDkeP",
  "key18": "5sn3jeE2mt8urvVbBfoiwrLoEUf5zwgNjdvaheMkjiBr6eKxLd8dS4zojqoTTA5JPXME54iQJyNuhfHER4s4YeU7",
  "key19": "WHfdTCqV1jBfh5CzMzw9Uq62YpcfzFLwp5g1V9DLtpVv2Wa6surPFXizbjhveTUP54hBxjzbVYTTwbv7Ho12Ufz",
  "key20": "5NQvjBvbsPHgMXsbX7QnEoBWjj4FypyxGzuk9rxp2phDfYHCqf2WnApXuDrDW5NSsNFb9aBm1eKSToepJ3REXvgR",
  "key21": "2374uSgNhSPzz66Lc8jJusZ8uYo4xECkYvQX5ZYZC7pzPC45snEUmDdFgEcpvMyCDcPuEGyvAn4QHfzre74nYMPX",
  "key22": "2G3jysph6Gop9AjKbgtFGnVq5xiauPB79beFLw7nwDMceHQhoWVEQCkFuH3JCV481rP1vd7nNZWC6EQRUpPnK9FS",
  "key23": "4pW8YCTRtWwcoX9sBugu7uWq23kpuvwreCKHycpWX1eXFX81dusCbZJAbFs11eJXKWjrijGMGvp6CLnvjoZ1EYgS",
  "key24": "33tvp4yG5cQED82CfWw5U6bMrp4hcDrkA9jFXAHxNPPWd1owAfjhE5DeqYJ6dJE4SzisSsLuttKJcQ4P3MWYcWsn",
  "key25": "4mabiFVz2GpDmJTWPjLnULjR4kQAHqH8wtaTcuX66Syr79KSt9hcdXv9aDqGkXVAENyYEvJvyNCqozhygigsBRWa",
  "key26": "5rjsYCtZqocXL1hRbzZGbkaHPWNr3NrMkvaVg3p9YN2DeV7mRxPwE4em1DoctNWDvB1WfSCMCW5oXxEfx63KDZ1g",
  "key27": "3U3dhyQQumeMggdKxQ6bNPaAk7nJ2mf5XW783BYtb7eP2mAMFR3UeyCZLRZoFpVnbEVp83FhqDQjZh1BaXdovyC3",
  "key28": "ixQxLFwJYXYiU8hhb2d7Kg2Dnzm6oUDpbLkx6kA6gBGktfTn22t2LkmiAFA7bxKqostbwYZPte5wcKvfK9XNHWC",
  "key29": "NHXuPWsyQze7NRDfpkgGmfDkCJcZcP9hBgGM7GCgijJbXSTFzTfL3q6GH288wZXp3Vx7fz1bK5hjCfQ4BLizkpE",
  "key30": "3xzZ3Rbh6FKHbvojSPknat1ifdK1WSpNYe3mEQ1NBWSxM7JT6jxuDR7XX3Nta1YnqMtBYEcDVGoBf4vzB3R2uHpV",
  "key31": "29F313wwmM8MYxwAVeXqeEZsqyEFexwtHjkSAjgDqxa5PvXu7vJnrJS4QciYoM3SbCMysdw2EPqa6xGKGRxbRysz"
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
