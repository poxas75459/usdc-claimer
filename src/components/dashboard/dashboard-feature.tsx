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
    "4omaqmw3gkxJj9PfuCPpJt7x9K348PTNYAd3YJn9QYC2Rsdy8c7WWmPTeG97g9YvBcJkJGcYuCrTgnVuRFMKU4Ay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W38YucC6hfkpwPosFVnsDj8tdHGKWazAUBBdBp7NPW6jLx2DLBcZnZm2LvutVwkk7B22idkd5PMo8eMkZBdugCL",
  "key1": "3hbrsnpgx94gPwfxEtW259XzRoKgUVHUxRCNaRC9jPfYTq6PGHqWvaYQTjmfXCTYEX9WgLvuJ98DHsMPvZzjin5p",
  "key2": "4CXLQS9437KBYLfz2uq5JiC98HXd11vKricVcwt8J2ro7qB3DX5vtMbLud84rTyrCebQUBFVphX8KcaTrVARBwc6",
  "key3": "3HC2kmEaig3MVxBQNMbTT4KpRjxVSVkE1BksZnFJTnLckPbCt23vypJYbUzgogiWsMxjwLTfuvRiVfEWVjxgXTcX",
  "key4": "2AbVdrSibMksiVN2jCh53UxVHKeCU8jJq9Y4yGL95bKmANi4PZrgzmnScpACnQTaxEXcifMFraisqoXr1zgLB6Cx",
  "key5": "5DeBDcLkZx5p4jeTsFu7Wugvauv2PGjRXvgQisA4U8iyf5oHm3E4Ak8TNN7i1QFbiE6wjmJYrJHQbQ6X2U2eGH79",
  "key6": "28tdvWox5E4BHjLZusrqwWqvjutK9nW18SVLN5kEehNzUL5REbruwn5VZuAccan232Mko6nGYfCxRubghFzMU9ZB",
  "key7": "5n7dgCwRQWZwTPQZuGzhnBTue6iwP29M6wzA8T4uFrCNRSk4Qz9PAhYMNqqmMGunEgZBXCjkNUMcR54mw7x5DjVa",
  "key8": "26DyBMyiju76NdwsxtxvtbmwJnYpwzJZnSvnuvnyjyK8Y8gmB7QChwyrw77dptjnEoND2BPzGYbmADutzR6M6ApX",
  "key9": "53FwoXQptzCpqnZHM5jDhqJ23FZS3UKY2YcUujrJRgR9ebYCkNCr66KTLLqTdnPkUaCRd3Mr1u2coSoZrEj4VWPE",
  "key10": "3qfR3wp5cwZX4nZCtb6XE5VSVg3nYG432gNDXhxCtA9S2QLdMXgJz3NBf6HxggRV6SgsMWRDADo6rhJopp4wSdt4",
  "key11": "2SW81bbEbCXHvkuSjJ2VDYjUtvnGW1nfKCwcjxy2DN6FWkhmxyBWdLUhHt3tpcDLPcFgsSeeKkUPyF4m88QkqyvN",
  "key12": "486hyijtmhEDtrqBqDJeH3MG2uzko185C84zp5NeyFttefADzc8TrNEYDBcT5BCJGzbDzrwR8TMGZzesKABWCMBr",
  "key13": "3pGKuUD1AnB7mvC4baWDdHkiSYMnyYnYe7NFyaMUPwUjoARZdEyNiHSnCCF2v1r6Cs1jbh561NFbrsife4Q9ABEf",
  "key14": "3NCgAq2UjNfR7ZQ4nQqxmES1d2PcsTemtdyPGaraQtXzrz1mdRfsZJdkF8wPvxjEqXAmsf5xsNikxCxKadBuybd7",
  "key15": "2WRbTzqYTmHG3TjEf2vNb8DoxhYh1ZypA5pTeg4UaGHGNYKBGXU2vsNZ2dpdimvuhC7WNm1pt4Bio7dVQvRcan9P",
  "key16": "5H1NRoFpKtPmvZ8VR4XEz4G6RYPqYv9fCdEfQFYQhhqU5uR7cw7ZxYxKh8SamKp7g81tUcMVE593wxDzN5toeoEe",
  "key17": "5zSd8HRXFMoCkri9uV8aNM1hqUfRsPrFPCToMfZtzVHa8yhMNZqYvbPZYxnACS4nM3QwmYzQz5BV4ExhBPu2CUcC",
  "key18": "2c5p3vXffiEAhRbPfxT5Mz42VwjAJ3gU4yjHTB2jm1stv35KHtDoes5q19mQJMkYcaPpjgZzEPshYRyEMGjeqcRi",
  "key19": "27vxSVGpagme81Bqsz9rtkVFradBgEFAni3dDu1f6xSFf8fRRNXH2zHNEaPrnaSLYbsyVSXEccshXrDfk9GH9cm9",
  "key20": "2FtF1LzoYnmfXLk6WyqXuqvJqEjkL8PGP1kqYrofdj6ytjRcwG4MnjyzzR3qJkhmrcuy6wJJtLYmQtsVZkha3yKg",
  "key21": "5JiQ1dYwJxuLiVqggxtW2AViy2eUL8UAkwLHBhtnHzfLPBBhut3iFCSdz2ygp1mPs88ReHzX1wK5nWDbaeE1Tg9A",
  "key22": "4e43BdBeQu3xLGKgkahGAwfYWWqfRQHZfpyZMG3BD9w5NUVpFGVhpDg1dQRRJBmvS2eHaDm93tyGJtC5DLHLG7me",
  "key23": "Fede1bJFcnU4P5oPQzsrABTPdryJbVyRBr93AY8VYmU76pegeL1J2ns6TEFKqSk75yjFXmT54XQrdVivXT8QC1M",
  "key24": "51ik1LomJ1W2FJpYZsJ6SGGeWCBBNraRztSEwRe8anXdwZcGv2AqWdsce3YTgj5DLzWuu2TtePnUPwHkPRdfTLqN",
  "key25": "NM8Gj6MAynz6odDZm3CbaUkLkVrrppcTrPuxhiy97fH7A6Ug6wpgTEfmt9VHQgAxnnaWa6xjCt9gf9iqCGVAFLQ",
  "key26": "33QeYkq2tW6QSJj3K5uoGq5r69oiNs26zqj5WSumwg6P1XaHfp56pVcwK2SkXE23FhqHW9ScEuUi8iF4Q8YQWXUc",
  "key27": "4gkH7tS1z96teZdrJ6vfEy3U7BR61JmRnT53r1PSAUE7UPiXNKEF1g7N3d2z3GDX5UzUXYWMMLKbYAe71Y1Q8Dge",
  "key28": "5R9PjYJJBYz9GFYLJYAXjP1g1hQCTfNmVcHj9eUcGU8JokBwpX5VHuVoyezMhH6bdqTco5xfiHK3pUwd5LjD4DHb",
  "key29": "4mWJzE3k9qy21aKNz1gHRgaEqznctJez4Q1D6dfu4nSYfEyFJskWEjePHozPdkQ7TWjNA4PtLf9cXX1rWsNxwf48",
  "key30": "65yKwvfKJiD7VrNaLzrUiPFJnHQxUvc2GGNsCFxKxWkYsHd7drgFZDXtD1VVy2Gbyi4ETDe1jZPcBGcLuUtwJBBi",
  "key31": "4fmxQ7GUkXfQFiSB8G8WxkmivzqyNUMF7EoaJ41EAi33LRdsD7ZvUwfH9NGmq6E91JUnsZ62XCiCHgJ8dS1Nd9GD",
  "key32": "2kEA6AoqQDiHVZ1PZejyuekwaNqLVrbBssuMi5tqKWWxWrqFnLp3HG82b1MiHjXX8rEuVNCh9CuaKCdA8zV3nbNd",
  "key33": "3TMZoG4oP39eqn31aoP4Btqp4AW6hb91qXFCV5Qd6kY5QXCDHtmBqZ54tx1kd6oEpQWFRHdaLmWd893HDmNbxkXi",
  "key34": "3U37Xg8xZkBUkVu19pArH5EwTZsCuiCAC5hJRVWnGeM58BJ2g5M9W67X2MkxX7g6YVcheGTnVGNDDVgeTL72YLqS",
  "key35": "44n7ciLt5cBygcVBpPwXCny3FVvYV1CDben3pnQjNTBEY7DQgW4CHbkQVFd3g1qBgudfSHeNZnT6Hi5nxBjNVmmj",
  "key36": "xi6SXC68RsoKCdJKs4uEXKYi2iTjghkJyXcxHjzC4Lnz9qVyznyNRxryPV67HVzMnxkqifNr8oUvPZTZijNPmKc",
  "key37": "5niS5Sguzbwa6Tsax33fKtKm4yCr2uYG9TR5b8wde5H4Gwr1bqNLEAnuoNgzHMqNQjjxh4R7jHHTyo8K4BSnh5sx",
  "key38": "nE1psh5Web8jHrdwxLWmgmTEgq5zeKkbBwjkTWnUAFxe4ox3PyudFNFZpW9hUEtfySbR5trbKNiigVVRHdSuS42",
  "key39": "4oBu5DDKpqX9AyXVConxNsChvnkoMnRBsLQ1mRZN5JKdJD13R9aoe8E4sX89mkGL76tw7gMaw568kdv9XtSGGhyX",
  "key40": "554HVwo6gEKmAsFTMHBcy6JMzZ8FS7G7PY8FdCQ5YaVG8mHPTnwKG5nKHphtQGVzNWi196AuVBbsbvBtyfnmTMHf",
  "key41": "3joMaBCy7tmgAp8iunv4raDNFd779XShxPYKzQR5Dbr7DSxYo7mkvsmaHiQeDSTU78TQd1xJrh6uyuwsntb1VCmg",
  "key42": "xGwb3ZMX6kuovDmiVtXo7zAwe6t5XPbzRFygqCVkUQa7XG4eKZGgPRp3F8omGd9W1M1TL7cg9Xpmzg8Q7hbu1ow",
  "key43": "Ztmr7c2HcLSpfUQzFdcEAzTDgvq53nS9AQNdPsk2LEPnsSFnwusq4DFm1h9jHr7iQpeMkEzgcbcgxeoprHr9K3f",
  "key44": "38dd4gfBxbfSumUWY3vMz7Xay9Hb8Gra5kf7rfAgJTjfkc5R3ATPhpRwBybbJb5ikdX4vXY2HaYYTkSeU6kzevqR",
  "key45": "dVXZuiorvPDX9XaBan7y776pBwRxN4HLBk8CyxuQB61M5iHyHLQKk6NEgpkRgN45jQRKFCLVtA4Ray8fPBSBERx",
  "key46": "3kNoK2AEGAMufCUYSojWadEVU1xJ6ctAtLjsr8fCjZP3JFSPxJBTvWqisPggqX28co22kc3JuiaEHY8iHGEBXUGD"
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
