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
    "45t4JiuxYfq1QMivHB2YseuqUf6XWtArGAwXiPJDhXwKaJBkrFbe1ZWmZMjpNSJAsJryrSuvDMqMD3aQVat4331Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K9gjhy7D2rRmsTpsgSfMm4Mtfp7Z314mRRr5tGMi7hahXsUSFU14sUuo3SeNi8LvwKKHxpGzZ3FBh6wZUgi5vXE",
  "key1": "wx2xBE1BgSyR7dgDYerh9M72wUGpHYYbUEZcZxjRzNXgyLVv39668tFMpjMwimQeSqZzUo2eDZdGx2rQPcx2wqJ",
  "key2": "25yMpkPQPLwoDnv1b4kBrvx89vV3uvqnF6tfobisZmXS9PtLsP4o8EFQwPqBFei6Vd51z7nsroN4fRhmDffCA6fZ",
  "key3": "32mzyrev6huYBmJLN746mRMYpUuCAhJHYUhFW6inBTmwWGdh2CspQQbXYq1UHes5PoTssje2HfKoxkhmnA2uXeaQ",
  "key4": "2NSMCRbJmuvENfAUHmJpU4zrbm3fgwn7G1QrUGgb3Us97z3QvAsNTFoNev5bnPr6FRqTASXZcDeDgG7WUt8oeY8H",
  "key5": "fA2BHnKn3W5Jic3GEksBkLpAwrowJroxtxddWU1eimAdM3bFTznc1ALGs7m6dNN6tQgkQcAQTfwhJcxWp6rUCfY",
  "key6": "JXYvBk12Y5UTGNEJQMpyGUGUnScMDgKXByZJbfc4LwV7e5La1yVRBPyVAukC55oCcipsifufH6dZDypJFMRwHHq",
  "key7": "4x6RzV2k1rTHaRCLFdAwFAfQNyGUHfWgr8wswb3kDci86H7TZcdrrzmFctVx9Yze2ye4EWbDs7ALuUkPmgu9wnjw",
  "key8": "2ohLyW5nCcHLzBsQrcT2ucZU6NBHF5fQva4jywnmWHkyXN1Ps72HTgFvdENPRx8FRCQE8EzTnM2SoQygLDN3oBFX",
  "key9": "2StCkPgqcd8hNEPhBFnzfvYLymutsYJhXCvCa1sX6FZSGrbsMppNheTkivYwetsprTRUXqCBUaZHYZpGt2jHp3ox",
  "key10": "3cAktSAjGScgEr9nUywchegDvPKX6hCpUW7hyTjgNKZjXEH9f1cEnTyH3UcViyoNszaGzvQkCQ7vcDJB3jsRwfAw",
  "key11": "49imjmceuLksT1n1MGtUSp7ktpD4La2LERKKTvjq5o6Khrts1xew48VzprjBRsQYkF8RtFtDU4BuryKM9g7rGa5Z",
  "key12": "2gS5wV3PHnjn6Bf3euVpAXFu5R38rPYK4Dy7k87FfMAmm2mhSoAEwDhpg17qBMWmn4otHV8NkxfparCBRhtbbB9J",
  "key13": "pGgCS78LxMUrp58JuJV4YBwBcfW6WxV9sLPUBysNvvBfCLiPpVJeiF9xUu5o4mcmrSKHyPkNb9YfFmMboABqXC6",
  "key14": "5TGCdFVMYoKssaVhRCpitGuAL1U7TQEJCQ4vUSemcnV3fhZZ7Pib75RuC9Yc8LBYRZHYsLsdrtQjBvPvVKeNTchT",
  "key15": "335Q7CjTfFNgyYurf2s7mVjbNwXC2vLcTLHkLoKekFCCuoi7EYYHSrfVjhrtJhxqm9VmmEvEBTSwi47zna9f2Gcz",
  "key16": "4tGa5HCy5YEfjRjVQHD6GWDuxL7Jt5NX6mBUbMMjsxu6doeRmcTdLRw3nC5mzTvusSNaHLW5kSitVRdmkXdsF4ct",
  "key17": "DnZA1PMCtY8DmTVDm9vMYpz2LVkGqELG6N5ACzPQgzCJi66oRmeX4SN5TbiPeaHc94prWxYLJA2jsJyv3ctWm77",
  "key18": "2SJpC4ZVYw7F1xTsxX48UninPEK7wuwBEprXuUmapgRYCaGW8NnnuCDVasECmW6V5Agbmf1Wj4yd9kiyhw7Bpsxs",
  "key19": "2iASyNx6QanPBVHadDCCC21t647dXFpKjPM67omqhBuohRwaRis3G7jX9yatnvf6uwZEtMk34Rbii3v3jwapYKai",
  "key20": "3J3c48HQXk68D2mooNMeQzfdQDkAeE4SJHh11LgycjbgjFvVT4Bia1Lkon2mzGke1u9vZFd8SWUq3e7f9btYhzUX",
  "key21": "4GXkceFMkBEdri516dba3XMMgabySBeMq3Yy6Jjf1KKxLKY6gktgzsXYhfBNcpJMCu9w83EMiCUKyEFDT7K5nUun",
  "key22": "33SVLfjxXMRL5BYswqRWQ7DJQpQUjF36GCLFLjLmmD9zBqmGC8mUCZpVqJDQCsc3htao9UnNRnLpxacxUgacmoXn",
  "key23": "32L2Vve87XxRLdgJsBRrCm29qKjxudLtD5YNq2xJxBA8iUwZTSfYTXkMdbyRgP3CejFSTg91ApiH4XUsmnfjKrAV",
  "key24": "5H2oaU3m54AcUgtdC2bbRPFCmLQVZuNa2h497nGj7UFkfqrUjMTSpyFHAWdnkDu2KSPRfoLqJELPV1EjM9TWZD4k",
  "key25": "5j3RbmJfLJ5fe2U1yGJPiguhrB8GpAn7C5tYD5mTBE6iMQ7UBVsMa425efMALTddaCbua61RAxNUTCQeSYAnRCf9",
  "key26": "2eKJtXmP9xHT8qvkmMj834XK5FhRr3xijbNgEuw31Uf7r5xzYvyGecPjywq4vYeG2u6AKUzEyFQ9CKFScfnQCGdk",
  "key27": "4ogVS5guXErc2TKKdRbFt8v1Ve2H5DjmLQYHAP6B4LPGgK9XCbcxVYzwcY7dv1TuAqmtEjMFicsxfCUjiZ7aubGt",
  "key28": "5rqinYNBvEGmhDh1MogZSRLR7QhuspiEuZZycynQA6JSMY9FhZz7kBnvikphe1DLkkC71X2QuXR1ZvEJTwz15ZjT",
  "key29": "cMTatxpdS7jQzB3cAp2gmR6BPp66adTdMjvhsxum8r8JGyqQUFhLwRHUopbJgJjaUwQyWw2a2MmDPByvU334Bud",
  "key30": "4PpVuR3Pvw9YS2Nky7P2CYWxYgUWVimj4gRuj6y3sJJRvgYEC7ykdsSwn1RNimQVWZSpYLNkHyb1QFh11cTGAUVk",
  "key31": "3uHhzNetGBEqVnVAfmMjhKkvpoLdv6fMVdu82DjoEU2nSxBCwfHGBKYeZuj54zjx9iS2MmhMPhxRx3HCPSYTkEHS"
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
