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
    "5r7cnB7JTpxTfEbDwHbftpwCrnSERpttctmJJpHMgAsQXhHefv98PjefjpJg5t9L71oSCRuZPjwZxqZeyTEwMBSA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mEf24SiJnDHWX5HX3oErKJL46Rv7erEDmYQMetKdMtgHAavqRNA2Z8vgsPVw1Mbs3XnFLngjvbYZu3qGz1JR2va",
  "key1": "5GyH8TNxpzaRu825tR5ZmPd4b6myoYhDhUX2zajX6eXk58vTq3AGaRvJgvC2PsEbYD2kPMYEr3W3yiK4kbLFE4wk",
  "key2": "4snmQLMFivbGUeVJe5BA9XYWGgRtoqRtBi32YfNFCEKrrqa3WKBuei4mZAh5zChvaEPRRG1xDK9bjztznUZ85akf",
  "key3": "449R6HCeWt3u8Jfg1FEoh3WLM7wNW9kSefBf524EPSevy1TDuhCrdU4S4jhdtzf2tovgrJqHdhcT19xtNcnweZDT",
  "key4": "5UWWkZ5qPRSQWFcq9rYFKsuMc3z3f27ETJh9Xyji9xmfiggkBRvtbMyCZmB1bnh15UgqahD6D32P9eTXahYVggFR",
  "key5": "5cZC6wnFRETUWHsHgCNAQFjnN9N1Ur2dDh53P9hNvhNTxX2xpXKxPB3bNSL2jFM3Tf4Tsst3vJ7j5VhjRE71UYKD",
  "key6": "27ciquMXoe8BE9XgBHiySRkH76bbz7oZ1scQ5SRF9jSfVbDtjF3188VJTzmTzzsbtzwSxfQeycxCAESHbBh8VnmF",
  "key7": "4EmuKNrLdKnBR6vRHZCX1T8bCRfdHBuXyTNEjhtJ8trpYfL2xRGY93o1HrEbVsrGryLPNquN1vmNyRQ5DREwz5A8",
  "key8": "4EwUmbG45imRVdEu4JT58VXLkpXGJcHPRe7YoB3mcTSYr4y7qyP2Qwx5fEdT7iCBUHjqSBE3jU78C1bfotjgo3jr",
  "key9": "3y9xnVJeGBYtCjhPgrhJq8vrStGnFfsfQnG2oQAPNqgC6kLYro2Rwaw8vWRjdDSrQNTHMVjpvisBsTKMFwprZu41",
  "key10": "2VGWu5KY1nRJ7kw4bwgByFTy7t6hBEu4RCN6ujz1RbLUMwJx9oXpbtj8p1Ptj9emRmGx9jVoAZXmAPu4pxh8KcGY",
  "key11": "5LtQqU1HDFxf5PS9WWgkWhCj8o3gLu6Sdi9KUxih4j7V8qHrVYAaKQYKHPQyYQtU2LBfWmJwizhu2tkmRCKZs4BF",
  "key12": "G99m9uu87qYkkKdpAJwrTvMz3KJp2DSweJreJDjEWvrnQVDgEweAJtYq1tnMU6DMWrDzJp8JyrZzrhTXBopN9J9",
  "key13": "59p5nd96yupvJb2sBG2dCrwpUAqsdHRsknSgRXiwk3efHW3r1Ty9KstyAVxj2Pxdm8yzWg5Uz33zHtC3c74dGBZM",
  "key14": "5aJxs6J93nvJ6PtUdFWNpDcapFaMafdFBtRrXNhiTkqkzbUFzTSnenw39ewHHbYEMsznTKpNxqK5Cn7YUYS42Uqi",
  "key15": "4UriJ4Xk4PVdnA2Qv5j7GZP3KBMjPsWDmRqFjuNBPViKoZtvyFN6FfpDXxJh984fSNufFxyJdSYarhRRr2SgDRZ1",
  "key16": "5tUAWWJyTdtutXGnbEXw63wcxChF4M7wrgMcMCMpKuSuQZpvRkrVaJy37rdy3B2vxmdaJQWiA2bdoBEtHMxoVi2Y",
  "key17": "3e84EtoA24xRvDYEzGhyF1RbJD2VPtPKrJarM3EnSsMhF5H7H4RPLput8xogVh9D1z5thYxNJepoRYkP7tN7TDLf",
  "key18": "bBoNu4C9a1N5WaDw3mbRJXdJncTf5p85X4fX81Chm4Eg9NJBMJq3xT6YSPLMe4Ua4v8ohUXqt2aUvGzhBiZ7FkC",
  "key19": "4eQ8tGHH9ZaNy8fp5TCYWjWxo8bhuwkdABit4Sq29sxkh7p1QJtbiD6dMJwUbJyg3yxEgKf8HJA3APsSkACtYbW3",
  "key20": "4oZEwsFZzh5oy1gxCs12jMkjv6GUXQpkXoWDCpW684pDfkabd7TcizNEcpDdi7SjPeEM84ETQy2DGGvx88pPaKtW",
  "key21": "5M5sPz1Ff6ECbqdBFa1ksU3gexcP5URw7WSD75WMwKdb3YpRZtRqCBzk3kkWRdRr6NRoGkmN1DWcPggbsxnzhoME",
  "key22": "eGqAR2XygWRhjEw8UHvaWigyWFzUpBvHk3VvKo2UbUTsA84amrAtDsBgLepFwkUnGkpbGH6VbpzSrS4UKWPsJAU",
  "key23": "35pgis5q6JmuVo5RRvPWcrWxgpKdQq9S3uk6PSwNSxq6w419da4SReM1hGSPNQQoizM5e8rpEF9uwu3ikwr3EAP8",
  "key24": "3441ZsDy8SkJ3ZfdMV8z3AYw3T3pCBGnUjLB2ib8cFQbXS8cBHYS3PV9e2SKAZydvUY6FwWNVk9qcBwgsJRWadr3",
  "key25": "4FiGwbABcfciAwJAS8cR4bnGjDJFV2uAJuYph8keooZMf6a7NcSSGdv3bDsU1awvwsGDcnjc5BoRjcuWzjsEKKFz",
  "key26": "5jJf9Cpj4CZWntZ8SfP26cEejUSVGYFR41KbxUabE9MWVfNhAuq4qboXj4PqYhQEtSuaa8MoSXimoMTk867EmGkR",
  "key27": "5jiex29JBZcpzpxeDjfwMU1VuaQm98SqDvBE4EopDyYenuURP7QrmrpbhfVAAYzjNnk2tCKf7PuMreRphDJ1zBcC",
  "key28": "3FJKUTX2hoJJnAxU49jadeAokgRxLDatppKvHHUpHZyZULshzgryAcgjn3i598ZEfhfAbCgSYC4DXQuMapwShUDX",
  "key29": "5sTLsMap4KtQowKmKE2ve3ZUSa7cMMiGWnRCQM9nhkjNkbqzEJCV2bgBEykGyXTKEhFvraPcARAVCsXQo3YhG2cc",
  "key30": "4k2FCf7Jb9XWryQfwzaysPzycbvPUk8RBjeWMpsabduUFauqkL5R545cJFoS8iL8nd3s9uRk2rfDDJx3m3piDXb3",
  "key31": "a6Jy44USaN6crLe1C4iJLydDe9BsJ96TWWDwQwwFsuVoKkx6mAyxDRT135PrUw82sQN3Bkha4r9HPMifr6RGWAv",
  "key32": "5sbR7zkyh3GhvqLJ8kvcPNnbaJYZTHAVJohkyisTR3z4LdZGNH8Ldh1tkLyZfvY8LvGfZHi9JZe1C8tLNs2GfyrZ",
  "key33": "5cHhKjP4qPfqtyctVXs5BMnLrWKRLFrdZPuLZ8gs4Cymw1iQeeoGfqSxSYMXe5xy9QUzQok4Q4yjfRFft9R3D92r",
  "key34": "5d4siAq2MVgf1xHWirVu7y26XH15BA3Fq2Yh95NzFgicd87kYYg273uAMH9yEyPZdtwds9UXtmAeJiTBXLZ4bNVh",
  "key35": "5AQCFgLpWgqi6fF9urtktNHWPnj4iaU1AJLinge2Fbtqacg5wHfKYhUW6M8DEnfbY5V3Yk3TNSzdX57tsv1f7YB7",
  "key36": "QEQrK8856VSrUo7THzpiYp6RKsQNW9ESftjDdYEjLqFkzZhSwEZ9GasjAcp93LCE7fU3e1vRLnxQvGvs7txpBLn",
  "key37": "67DAZS2hTV8MuH3i7mEwMxktVjBMACZfQHatWpW9vkrFbaWg71Ck336TT6Ayic1dZWVZAHSDNWovR9ErBS3r8tGG"
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
