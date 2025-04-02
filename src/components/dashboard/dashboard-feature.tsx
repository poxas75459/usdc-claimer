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
    "vPUsiRYK9c3W7GvjVMY4WwbzKU1JH6z5cTcZGemRZUwXhsyw4xzE4txEEMw4N2nxxPocCHe8SEy1xuV9ChXHtk8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FNuLjUs4u4dCQv4tbWLdAWUA6WZ2kt411H8xV1yxvVsJxBoyvXGuhV21rVqsf28GVDUdCXoNycHpMSTRKJBu5iT",
  "key1": "3Q8hmhQBTXeDCJ1DYCPCLzPYf4uBP9ru7nV1g6bkwhcr6omTNs8AaztnXnLab4SdHc2GMUP1m1Djrsx23zdrgWZr",
  "key2": "4NAnet9dwenwQiC3cDCrdPWiRwkTbKR7HWhk68oTwhfyThd1kRRobQpCdFUD5RUuharYr7jzugvExaPYwS86p1r2",
  "key3": "4rUbPchXBWauoxJo4EYuLDCrRacNUUjZLjHjba1iPoA8f1c8xQda9kqmFPQsk1XJNgzAYVHhMZVczX3qniFejPQm",
  "key4": "51j1Gt7p9m2ZFjNfLq1TDTgj2H6BSPAyyam7oYB66WSXEXEmev66YkhYxiJWTJMrGyYt5D7eM6DLWsAk1jMXvtXZ",
  "key5": "5yxL1p5tvn5xV7bxpGBN5XRobDAvXK5j9jkpP2cBX3f1ghN964ZqfsSZMwec2x75eFAW5Vq4B2YW8UQWhGJm57JL",
  "key6": "22rb36tDrw6SVfVkVYiEvooEpymyEX5fqxC19CozLWR5J9dm7n8WtNFxtsNy3MTeUono8dkCsNGmQakcArWPsy83",
  "key7": "G3rsAWoNMJkMGKy4nfuikQi8hGpHQ8TMWEHrSr1jbVoA19shCkLQqTWLGD1htV69Yyq3Fu2iykMsRdAbXPPfAd1",
  "key8": "NZqZ7L5z4kkqEm25UY1o6GyPPoAimACxiC77ma87Jmz8BSefnm5FQjxBThfkM3oCT5ezrmDaXKSAZ624Mxh8JKu",
  "key9": "2Xy5w764pnHasG9fibAWoGpCSd7XQcoCMQYyZ4WjyBrgMbK2udWcWNgJjzVPkkC41Eag9GfBqeSkxMmmREQ9zBy6",
  "key10": "cRsrZfwDXzW4qHXvCC3TGtTwUvn9tsDkjWr785ppWdy1qBJoo8ZMpFRCsUKNG9CbyUHDWbmGrVzrVTPeuqEWB8e",
  "key11": "4MYc2Sk6Cfd2DuPBceWCF5caPRNc1ugvwQU4HbHFNEF5TDmWnfik3kKKrQFSYYQJr1zi2PBGMD9H2AVdBckpSqCh",
  "key12": "4FkZSfrZB6jVPEgRd7ri4m8pNgfohoWP4J4wnprkKqMMzmSmLT78uAiWF6CokjSiDzGcsjrVHPhwFmVKFe8XfroY",
  "key13": "48jugBC3y7oabDMJKemmQNm58PjBGS26U1pJi36GgnbLGQsfTTUkg9RK5diBDVMwKPJK57ihKQEB8cWkRdggX1K1",
  "key14": "39bVxsFjezdD7f9vS81nWFtWYjU64x1U4acZDKnrvw5YuH5zmWMoG8ZvhgsY2aXHFn1rNnTWE6GSsxZKDTNz5pUP",
  "key15": "3d9YFZDiLHoqXnfssTqAFyFVaKrDAdYrj73M9azPhG3WPpsx8MU4GCf9FB2fFhbzsfADYNMB6Syg4BrNEK1iY4fV",
  "key16": "29W1ATZSPafEdYFEwMtZEcSQkWg82SehAfkJfYESQho2sxEV9gdY8TsDvUwtrt3UPgVkBwrxLH8gzgGtSiJfQBn3",
  "key17": "2BaHsScHyzapbuUSBM7SNa2NDSGRWLhWaKeZBzTR2FZPmvg4NbkLz95PazA4y8rn4xt3YDUGbgRVi2rrXjo3oZz6",
  "key18": "2r49xzs1pu1uJcCYjmf9NkpkvhuDv73vQM6RC9KCUap8J6FEHowFE8jeFkp1dZrWnXGMZFxHqSgf3idvGnP1FmNh",
  "key19": "324d724QjfHkZpD5dM1z2S2BJucr3SzFR6DSMVbYWdiGURzh2fP9eMdMkhK1mQVRUBZpBwHe8aysfqmeYVVkgsuu",
  "key20": "2Wdg7bFu6mHhSKzBquYtec4ZyTrVmjcnvib1AEDNZn67LphsqhgD22jDVMVj7gXtfJER57KYnB1pSiRdeghYpjGN",
  "key21": "25xbH9BNdg1sDBfFNxbV4KTsN2yfTn7cMp3LJV1w9F5Fz77cJqR3cPcJpm2jSpwu5pkfVFr7ZUimqU37gSn8G1Ru",
  "key22": "rwsQbmuirnrGBwqb5t12tWe8GCeNoqj5RDezcbx8qHiCZRormk2se4ReRrhGgZtszWKw7RFVsUzHb9y8KwZjaiH",
  "key23": "5SLXG4WwpuK5AbR241xmN4FoWXZBMZNymfo46FYFECEFaKkAt5ZpegSSYq12ph3oBroAv659MBjB8f9Lo7AW8S7a",
  "key24": "4WgJ94Xo9JucoPzfddxhdNq6jEBSgyt4vonscAYfs35wUD5StaAkRzdMypLSVo8iXenm8dQy9gftxMDrf3qeGZNJ",
  "key25": "38xj54zGAP8LrBq9W55C5YBGpppAzief8gCzJ6z1DynLRXUrz39A7UeDjJFSGLGw11cJUmWLmCYZFUneMJH4M1FK",
  "key26": "5jT177bUtFncf7tgBuHSt4ZRMZbSsifZyv25GPkYyZ1jwvpuqpjBg1EbrA6qbwtPPSsXJ88zXnoLLN9VZ3Wpq5Do",
  "key27": "5SWYLmi8JFni94RmBTX8dPSpo3CWTREu2wQTkwXSSuBTrWorAJyqu6tux5cTRxo6X4hd4aFyrgdj5zDrSyCLvAf6",
  "key28": "4yAKRBhZNCoU2netM7fzWLtuHFtUqsmJkVDTtdehgKvYqYrDcYHoVMrG5RAiPpUHSEkxfwnZWJsVDLjD25zLbBze",
  "key29": "r3HYakuDhvCSbg26RFngD397HFQsNjF6xeXgyFvDaTA9YfyinN5PCTnJj9eouLxAoRp8XhSLPvRGj8PHAf6FTve",
  "key30": "Asa8yuYB2vL5GdkJoSy91BHwwwN8UkoGxrJfA8BW37ibKe3pXChwSokmerwMCKQD9x1J8EoKwfDV6fHLgKYPZ5C",
  "key31": "2pCD5P5v8d6vYBTHXF8W9EiUXBhitydnu3SiyUGgphmD6deupTpJ5H51TSk9RctcBP4xyggsevPS7R1FvXtGqFFH",
  "key32": "2ccdxFdCWZyiu4uTbsPx8Wkn8EQXLCaVJWuosLmLjM7Em6wzoHq6HwFTp469uyVz74r1Kk4BAyPtQcExDT8XKGzM"
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
