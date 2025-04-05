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
    "3gNDqF54mbnX6S1999DcEKxfdkEqEwDpsH3HKd3UaG77937sBq1GS3vCUCjhbVQ1xfWghJYqLeHk6v9iUBNKgw77"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KYpHaUovFbxbY581RTtqLbYyehikzAjFnhT7McVbpTRJckgonVgcaK7FGLRxXeR9R9P4httUm223AGUEEh7GqBM",
  "key1": "368iU84seCneHNtUohjR15Cd2eQfguXEwjrZp9MMcU1LB1q15CNXa6RvwB5UadhyPunEJkEoxdW7aTDkPkSzF2J3",
  "key2": "3T5fVZPq8MCsZNRsDTvS51bT34E655F4R7XsxsADSR68xjGqPpmfHGgyHw2f1imv9veVidiyVgMxGv7XQuCNCXiC",
  "key3": "3ukABQMBMXRp9Rk78iK9oKi1vSkPPUBn3Ni7azt9TF2gTPp43g72abpiEs2ZYGd25oRFppoGZWirVN5cesYavZCZ",
  "key4": "28SvuuvngqfYDt5Eq9uy4byGnuDd7wohMvA5dYB7NucVkC34DEBvbhaf8ts9bmywdaZFKtWi7Ey42iB5WdDx7aye",
  "key5": "46KNhrJNmZ1xpCzaPV4zXxPDgMgfCoaRCMacZxk4ZYTTf6PNFSVHtpKrrhuZ3Mn5FdnHmZo7epuiicDjRLEtSTf9",
  "key6": "HXDvLBfq7Mo4V4E5NofHNrsKEtYYYGekWjtS9hzypjQpU9U9UM4o3p82DMWk1vB1MiUSR8c4EqEbhrbxBp1zbzM",
  "key7": "56hTC249GbrVTtrNZTNGodNFsxJ6GhcpEtmDSt7o4CRJozrBQ1yEgG5cjHwW9Tkimx1Uva5egBA7rGrb5PwdquVT",
  "key8": "5fmShZwjeh6hKwPdTcoYM544uYgaaHED8VAiMbMRzsHYmi5CJa4UBgmnhmvqcx9FA1gRLovXYq3VCaNMbnfR4kRz",
  "key9": "3de4KS3rk3ZvFZjusGNhDpg2Fgug6Hdh5gVJNNCKn67RCh2bLCqXtZP1jE4eAZ96Yw3xgGzN4JUqJUoYLXNzzstc",
  "key10": "4bXnSvynb8xZT6GEMijdZVPFgjndNsuwg6WotqkXuP6CUNzBFg62UKkg1yjxY266cfLLbyQCKdY3oE6k7Mk2BUvZ",
  "key11": "2pF2n1Laj9SnuPkEZ8vY5g8hLK3VHXEZDRbTp4rfCEp6RP2nN4zJQfWo8fC22wyPYyEHUySMZ6fwUuiKbUo8vESv",
  "key12": "4Eiv9sEVXk78w63Cdsz19XXkcc2NjWXswoZXPm6yE28y81TYrSZV78K4BaazhkutDbJZ6mDoEuMTHVdKrvBeRnPa",
  "key13": "vUoaiXHdwsvpgi28JdajrP2FWeqqmSxmpNCrHY77M3ttW3s6PdUepwjs6eu5DUwHfv2yYtCniV8oxWxcPXp9ySv",
  "key14": "2YmAR3rPMC4uyKdDpn3V6mrBiYA7Aa6sfdvQJC3U8zwKqUZWmuXRgUbdcHVXaL79hNJk7Pxudv9dgdiC2tzAiR8T",
  "key15": "2QNybWAYDMTSiDtwJBCX4yMsNV1xz4C72tMVCdD1B3KEmStnJvM461FJg6ChHzEz7w5fAdGMKZKvBAgB22JjA5WJ",
  "key16": "64jAzgNRUyZ323r3XQTtKFq13ukyhEG1Z3vGrTMuasYW1wX4mn4af9d4FtL7Wj9F3zDZq9zSwrhdQ9MVMoQXhZEj",
  "key17": "3teeJwXaU4kLtRgvvX2Zo2wMgKK2uS9USLRMhPh3q1awCMfyL2SLTML69DCq19ury1BGXpUnJFmiycZSDJwoUQJ9",
  "key18": "36gjUco28oZEgjy62pb319LZusJDybUcsB3rJwt4QA8rtbexxET7LQshtLzynGaBdBSi2J9Y4QC1k7r4ygXVCgca",
  "key19": "5eYcxZL3anqSBBaCa7xxnarbgKZB2EgkzrKRg3NUCZDU9EWDXjwQzJoTXea9fTvpemZHFW8rrPZvRyb6QkkH3yNZ",
  "key20": "4N9AnHRwGNfwdrD5dsU5GZUGmSkSm73euZxhDszsHGemxTvqHAfwGz2bepRoHjo6Rg7zFEUnKLqqkX1R1kNmWmAf",
  "key21": "4B8PLHxCure5QmZvfnkugwzH8xui656vtFQwJ7b1SHphZKSvfU9pgtPd1UNK5UsfT8Aj4yfLxwxN3RJxtjWm2KJZ",
  "key22": "2rnogVX5J8nkPhm15dykKYHFDx5TvAxaneJ9VnfD4WajbfXtGn5zjZ9keVBkZZ9ZS5HFrDzcr3ZmDSrMxj1v7xtx",
  "key23": "NGNrkQiJSWuzcZ7TdrvhmngpHTbvuNKLe576tNFH9Xtcz2NvfGd2uxASznTkNq61zX2PfYpZ9RUdLfQuiT695hW",
  "key24": "3pdp2i67fHv583EfueqWT9p7obe1SbEcxX8dWajpR6A1XprKygxWN16CQqW9qvKYp22XiQ52U3GY3u68yw7dj3R",
  "key25": "wVrW7D3watGD5VtPKoQ6yiKC4HNrUR4PgwDv2cQenJeHSbhV4i7B6aM8hRykct4rG1ut86UFnaG9jvpcV1vVsrY",
  "key26": "odmMVz2qHbtiCmeq7nwfPWezutzatHu1D6V87ADLNmMHJZni3qVAU7u7ToiJvj9oQdT29fWXEaPsP7uywVwgYRb",
  "key27": "GuvJevFNShChynN8wRFUP3DjFN2H1aoo6Fc5efjPDBGuUScEUFn8M3y9JUG6jyj5vT3GZttQCpRJwoTAJNzxtaz",
  "key28": "2TiWaR5ed9AXkdHjdg7NaiTtLtWksjVkDRFRLNJxFQX8hTf7zDVVrA26vUfaaoM9qR3SB4NyqNUff8hBk9TeMsQR",
  "key29": "vnePKXcFLrNsqhqJp3VSJX1WHsctHGA8nXdVzmSvBZKed4qFjothr6fn8VLRA1X9X5stSsncXuJcG1ezKpkd8BB",
  "key30": "3qCfaMs3bWy4H7F6t1fhRJmumTWXJ523haghGxYBgonPN4yKUjaJwsY9XHFR4nSQKneBegnJ4cV4iWL2RnC8g352",
  "key31": "3XPhRXJ7FHdJDiqrC5g7gJoXU5KwcBNQAVsNwZjiGn2LRkZY1Ahrk1Ww8XWf7pVofJbR2T2K13dEvbfv6MYdN36j",
  "key32": "28EZPxLcADte4qrAD2QirwBADGzYB98f5SBfweTkzdb53KbTiNz6q1AqDi8YrK56LQvKFcsyXuN8dRiQduCFs8e2",
  "key33": "V3zDvbqZsRTi14yvN7hH9KKDbshEmcDyHm1Gmbqu7MNy4bnMAzH4JNRRNSwMNHoPGvgqbeV6MH7q8aWHBtcGdmJ"
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
