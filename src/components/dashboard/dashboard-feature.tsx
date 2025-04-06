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
    "4NQFKznXGdFwe2hQDe37AQa3pba1RhxSXuWWtLBtE2XFddwbKGX3g5qMZCUabeiZzZqshcPYUD99YbwjouCgfTeF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57XUKV1j4Ezuu9HxcSCMW4XButfbWiXP7WES4hxwRZNg3ZPHtJjJCRWj1729Uc8Lok9SMEdmE7CBESGU8YE36nUv",
  "key1": "3r18Qae2bNGbG8qvEyN9gjxM9AtbYyukow7XtWFXYCQNBhmSd9BWsY2nXrCVza3AXxKYx5NP17SDEzHTN6o4EVRx",
  "key2": "5tWmj67gm23s5efFRYyb1JtR4muTyei4zVuYuEneWu54zbie8heN1cYRj4VNXVUtaKtkdUFkdNUcHJ3uUkC4jpw2",
  "key3": "3rosuermpvefj2QAHBagNdteZbGsDvpBAan1qDWEiURsSbpyX2ddUWqbPffFusvFEtrCy6b13hrxsZZuDnfsB35a",
  "key4": "5D9vuFeJP195Cpp7RdLWTMgzBFoW6aUz7tmsGFGXWY1Uexmurfmec9ymMAiFCX8wKDFfojszyFN6rYsfTwhsCDkb",
  "key5": "3pqcLqE8oMm15H2Qqohj3MDEXZupNCShViWr5hYn7eZVsq7VLCv5aVcoSNej1rXrwpPv3JUR3qpnmBh6NmfSfCfu",
  "key6": "5zCUPQWcNshkHSAKnX6yo8tvpWJWGLpJkBs8ungeyBEM8L2YxkmM8K1izuTaLfveKYtEqsqiGvtJYrgDeQ4tYB2z",
  "key7": "4YS12eUBZBo8ycRmJ2EqZKhRfb8gKBHjLpEXHBosoPm9AhXz95zS8dbBsp2AucoUgA2bQZRKW8jhUZYEQhUHot9B",
  "key8": "whD4vfZ34aNj3pWbLUFFc9Ve1i8mGdtoAVvD2MkayGVeb2JiLoGcWWpdXnhYjwVNqjPYzVRup4P1KjikeB6ntmh",
  "key9": "FtQ8tHaxzqAT2Nrogj27tLNs9NAdduW4osto6RxbXfpSdKaxxm5R5m9G5tu3deqdgNCwqpSerM2digr1Uiwp9A8",
  "key10": "5ievLjYv4ojWW1ZinAw8MqumoapXT4L7fEx4R41j7Q2LfoRsj7Pa1dtBbBVbMKDQyH6vStdVA2ChEUWSyFNHyAE7",
  "key11": "xLJEwrZCMVeNgYFbJUNNH29weFKMPZh3jwywZjmN24UvwpoeifRUPCpqP8dMBh1uBXtwjnRPyHwagVitw723qs8",
  "key12": "4ZSvfS3e9aGYz3skXF99QiVHE1FroVBVSRMgYMNgX37EsMh4quHJXKrt8QWuGEFf9j5VZsCEHXUKtX2VGDNsh9jj",
  "key13": "3v2CQ3PammRomqoaHkkdU4Q8AiLLhceV61LexcKEdopMcbh8ALuUd52LaahhX1F9XrPEupQ5Pn8kyNgKnF8qGBJj",
  "key14": "3EkngQVdDFwiUMjX3xmj5NBe6vqXRy71CKbpzWNnKbXmbuy33Kr8Z2L8mN2GtLge1B973usPFoUei7c3bPdas8Rq",
  "key15": "3gaV333ftAe86dYvqkL89MZBkCsBfFjriUqcr5ELQqZgs26Ty3PNNk9TtxjYACXgzD1XbdnRnqYS2dh8MEKvctkh",
  "key16": "5QVkbMgPoEbtSKnZvpTEi87EyzrXxAi6U8CgtJanL1qcaTWdc2fJuvF1EEPUWFYKUBH7vDohnFWva5FyP1jhhSc6",
  "key17": "5gYHaTM4yg4VfHE5cgSaMpmuD9njQxjSXZvwV64KG77WxA84Cjo74r64VRfXK7B2iW3tvAX3nHDAnMS3yYFrrosE",
  "key18": "EeJeCPZZQr97nnugVB9HxdtVpqjYZZ8y21rBvxN8Xg3Yb4biVtf9G7Jb5HSfERqoWikg4e8VtDAzfmJa4iCuDMY",
  "key19": "4poyMVqWyjrywsz2GCCeCnCmtHeLmrg4RUxFCyssjuMi7rNRmoRMVD5oZbjDhZws4JZHvKJNntqGX2LafSC7YEHv",
  "key20": "65vUNs4tJejtYH3u9pLzmpVQn2jw3irY3ntGRREM55xqPPNxCTvUURUfGSVDrMsPTcAVDzmRZU8h4DHRLEQqSj4c",
  "key21": "hcq3TQT6QxnJX2dFDEccM1R7oqonYNLzeD3zd26yh4n7LszJ5aASPdA4yyamkW3o13G9rGoYScmrPF1SKvZSRJk",
  "key22": "4Tkm8VZrMi1Yx44qdHrwPwgD5jBPtHU4MiUNbbPhMtD7S8X3yTEArzTGoDsZXekLrtTnyU12Ra9jvnQQExbPj22F",
  "key23": "dnuGtSKEEbpUWuHiSpw31QMqBQdBzfUju82Lcmdjs7M53y9Z22UBFbbiq3t4GytRBzhRYMh12egHBigSDtDB3Wi",
  "key24": "2trFyX7VJ91oetZPt2PYswwRhH2e6ReaWghF6kKwUNv4iryb65BMkKBsKhwH75etkRZK8aKR4V3VeEL1L465CfHH"
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
