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
    "DFzLcd457UMMsEFaMj7VhaAoYu6QVm1SQbdqXf99KpW3D6KNYsGEXgrJ3v5hiauWokRNyFNc4cBdrZsod5u3pko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q1Q6LnmVD6UkUSDCp1Ydv8ujprMMDKKRHhS3Uzr8THtq4zxGb3G9xrb4rKsKAv3dopf9R1g34KPWCHGchpXJqRQ",
  "key1": "4wDjSP1kD9JkGFDGswTE448LUpEQZmq7C983KCw2RzMZA1BFCHgXnZQNtA6sz8JVpQM3Bhb6z5ajBN3rXLjVqmbB",
  "key2": "3vF8VPkQWREBF1J45WoJza4ZeLEFpc2VBe8rdrT29uA9AeVkMD5Jx6zpxtbwJWGHjjwrmhsXDsAe4dPXVQqxa4bM",
  "key3": "3Vf7Qb6dMfKRvM1CyhR26M1HkXdrDHMmtSLitMm1hycL5m37pYCu32RBdVbUPm37JRvC8NHohgvnHtEMw454w3us",
  "key4": "52UgSepmPk6ieNuPU9h1esXikpoCpzUAtQihyVZ2ifbhA2orCWBv7kpi5sVzNGdN9p8uMkg8o8B8y5yUzF9upmxw",
  "key5": "L5mQxLr9wQioGiFHxus61jdYgFwcnAzpwu5nWpVtm8QnKsCKQPGgKqAL1y3Aed78trubKVEYxmTstfLAvpVV1Zt",
  "key6": "4ntVod7DtJjah8orusHRrNjwx4LUc6jEyUX4WgqL5dtjQUX6Pra4GKQoki6cibPvPUbJtUEjaRcYasUuCBv69i9v",
  "key7": "3ihzLdXvFHaHo8mZy6jqU4cCdd3QfyvWefwQ4E7hQfkyZNRJhSsa7DrxnpYaSjupsDiMEHFGgLM58UmCKZ8jYoP5",
  "key8": "29qA4oPsnsCevKaSZ3SVfgWqfPcS7AKvYkgyDLcLSz4c2toZ97fHsb354ssmfPLX6QCJvg9o4ie9LuVfNNJBUJ3s",
  "key9": "2XGMFPTXSHmdh52SsJRU2Hw5jGJWqzGc6mQFw9KY6L33vCw22Hqk4pSyKiM4Tn2ZyFXLA1EsyFbhmjkHu2Q2TkTj",
  "key10": "25hJ67jooxdZKs9TXSpa9WBceiGs1VgRw1cM2rzvoM2XkCEyFUcqKGs974nUd4LgaowQoAZ5XRenErqZBQdST6wk",
  "key11": "3XQzkuW1FvBPhzvPSspbi1yvd2toi9P13ACih86dszaMi4sF8TC9dqXHjQGx6YR6YJ2QFp1R6NZQRfszzVrfnWUW",
  "key12": "riULXoNG7W9HZuoKBEzkghoW9VFwvsgippTEd7mA1BrgsN32yEaJfeteYAiApvuqXNu9na1FeSM5yimsg8yrwvf",
  "key13": "4SKU4nUftoNy3RaB1jUCW5qCxh2o4DWc7my3x6pDYyurpUzVHQBr9y2WzW2LCSFYTUP9Vc2CiQncnXKfhK5yCP99",
  "key14": "3vm6MaF5mQKyqVFZdvEzMuLEmfWEVcAUXhJbKoztbydP7DGZLu2M7zKtD4LW7ivoy13CKWDQnbNSU9jXxLTZzFQ4",
  "key15": "257d7yfYFKDKsW8T9dxBD9uVbZZHVL2e4QYyPfEzGzM6jsqQFJTupPR9PEoVzbGqYgR6cXasw2awZGRFTSZZi5ot",
  "key16": "2ZyAdNKYQRyndR9ZzRJSsWjXjWVFwDay8EUf3pEwku9PHh78oxMt2X72WfTRZYm91bnSC8QHx3ANdeqDBzTsVjws",
  "key17": "4YAEvrpYKip79oboYUnb5yWBYGHdbR6vVSBCaGi4s21EpB5VUMH59R1LPS4D5vBfBXtd1hVVU4Qqby1uhcMokxa7",
  "key18": "3SwdsijWEvf2pECh91At6noiggMZWcjPcntEKqFyGoJLjnLEVAVed7bebHusboTLkRYFo9wW9P4PCNRXxRcdn4Av",
  "key19": "2D9wx9PAeJDUY5vJHXHNaGXrqGLFYXMYx8hHP9CsNr8v5WXucSXJ3dk2JANspPDhzutXtkCtP4pV2UMYT1UqNKcM",
  "key20": "8f4hWeXerAwsg3DecrXcVMYMdbFjyTzDhrxAjog8j9PgSsKJdQRYu11sCYKyD8ZmyiyuENDLQCND84ixyG1Yph8",
  "key21": "3bQAqcbe3az2G6gfce2ySWrRkuHxKooRFn3YUEQftmY9782mchUFBwA3uxjuAd5XouB6Q6d41GXKc5ffTjP58421",
  "key22": "oS96SW6hwVNVq23sWatejsFkp6UYkP3XpUBEEFsgP8Q4TYsBkvZ1jiXB887kcNjmF39ExpCdktxiwV5KjJkW7DN",
  "key23": "634vu3HsAaBKRTuSexCB1omiDoy2qU6S3G9vzxHz4r8CRyHaWnpCVp7W7VFaMeuVWp99N4j9i541DWBpf2hutct",
  "key24": "BNDfUkFxCoY65GwkBN2M425zPb7FjJDUL1Fsh6om6q7tdsmkpxfsM5a9p8w5xregrNRwBP7osyrYg1zWaeTUPiS",
  "key25": "2aKKLojJax5MQt6Murru1mTXkK5WNRtdhT4ejhsF1T2djpMV61xBGJiDnbKn7hpTahvR6wNXAvDD1Q6NSG4p6Ub3",
  "key26": "3TCrkK1btJwAGow1NVLfLiDjkrr2b5J9Q4xZfzA3vQQh5d4ADzZMXaGKNTGN2v57d6sbccvRavUbC4fmhZS91cLh",
  "key27": "53EkQ78tszv8wKwVk2q22hUBs4YQbeujkxigaEXy1j1V4WSpHbY5Sea6iFQoLV8btSM7R72XphozAczwUS6HzBPp",
  "key28": "2beFJjTuRr2P4SWkyuao1tCoNogeCzwLhLEu4E6U9ZyzoCVjNvpkPEjAx5Fzrrp2tapVSvz9NLNvQhHJr41Rydze"
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
