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
    "5arhGJrWNUeXJm3TKNSuziPdHwH9mSigZcAtWWrmJUqTwSxEwVo3CzwxDfV5DMDBsFbctQ7L4PusWPrwnLpSRdXA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ipkZYtipBvgUoMpak7GPNt5JdM2Uq7JF6xbE1F9txY9w4mvD42vDhv8RXEuk2tKL6FJK2rP1gG3wamsTBsFKrvC",
  "key1": "4ksEHfktFK8BYBUgf93YqFXtqSWUnm1DPPNqG32hAGg2nftyK6sv61kVZh3K69tQ5g2acrCe7gDq1DnqdjQcrQPA",
  "key2": "4qDbK3BBPvPQc1stGCGRYCscgUTasEVKpKuyxaAmaLMVWpGSFXm6XjEjTWnP1qt1bUGdajmQmgnHQ4HrB8yKdGru",
  "key3": "TQzTx4yiEyCxS5qqFjxM42qSXFCcfRgnYVmDVfVDnweeAmFdEGH2WT46cBcXTb3L8VxyEdcDYsuWxFE78Byx7Q8",
  "key4": "4kwKX2Pjzmuy2B7rQTbdaqGRnioJA96ieDoGwLXwhgwNwhx9AiKYbyGvigiLXwpCA1BbMLRjRkdqANW4sbN4PzpV",
  "key5": "52dKe52YQeeivY3XEUuPMWhF7t89dMgP7o6UHwQtTqN3zX4ducZ6ND7a3bpkBLxfnw1dJ7gGXu5zJQ3muBAroxQa",
  "key6": "48LjRMFy2PHws1A2sjbf8nTF5JPxj7CnC6bM4uo15Lz59TXQHNkEbGmQZC5S7i59CPFTTybUZnJzGtBTdNH2EQtA",
  "key7": "3bfZU4ZaDjJxCk2BbJvbnS2jKcR55sHRHHotYzkXSzUtYj1CFLV8GSzrmxm71hv6CPdgxg3mrQ5Y33hc7FY8LWmG",
  "key8": "3vuYpxHAPTUM952HnQN2iyRwVnBfLKWKtddYnMkXqxbDWNqbTc1oE2M4YeFGhQA81WucaJRzuGxH68tbcc3SBiir",
  "key9": "82cdusRHsjiTVGzshuWb45wR58m6RqpSTS15QM4bPdeX2ef59Vhopafrt5nsawsdEV63xXDSuZUXfVXs7enaAgo",
  "key10": "qbxM3ovEtJDE2jPesZysP7YJi8nv1xCenJapkQK1D5Qcuxev5Ed8ZzDKuwUjmD1DVuDd1Teps3JP4XkR8fKmcGe",
  "key11": "c4pyhDhdvpXtW8R8R2JF1mczh7Wc7UibaLvWnGkrVteC5SrPHynakNoWAoiCszqg4c7mdV9gGEbQGBVPeDpEoUN",
  "key12": "2wh1XthRmbwJpMUDcjZfiL7hozG7iozXxfsikJMwznrraa1VkfbjYdKs1bmmx5fUJZLJbakg9rChbFoP6NmoUGZe",
  "key13": "577duZ5g9vogVzQb8LFVmRkrQKJQtG371MLvEjU6yYK5gj9Gip6e9oXGY4Bn6PypcVmJS6EqkrJ3NqZxew1wg8FM",
  "key14": "3oXSYBDNRr37nGfXAFA8h8r7ezuMj8vUpWzJJ14kqSt1F6vGdPdbhGTqLBLkPbMFrp9FQ6jeSPhJq8dmFhzXSZS8",
  "key15": "56GC77oTK25EnkwHShwm8LyUEvPoutNMh4FWDW68zKWckeNi6z15Xzv1u8uYXPNXvRFXGJsndtbECx6JSG8csWJY",
  "key16": "5jQkty4rDaZppKjLK2ZNLjtQGFLZsFYn7djFbYPyQVBcEW5hZyATRduBZgA7hhrnRubJ8JbsG3ViJRJQ1yPtcF3x",
  "key17": "3huk3zjR1ejXNssgnCEmwUTc9AmCtKofzKB2N8YHWhXouBw1sEd8q5asByAk3RSqpH1bRHuFz1hxBhKkLwyr3Joy",
  "key18": "5mQ1Xg3jpkZWcPT8v16c3P3rXAq9CzN5JT37h8Ms2esxZCVDXtNQtD3WQFjXLBfHc6tCzgKjsZ4zFueWxq9VwtWy",
  "key19": "4i6m4TyWnXBUGBLPY6KNLpkPqG62q3AsUAFkKqXjFibUBKosmdF2cy1dzr4mo3onFv7ojhCo8VeEeo4G23TepNB3",
  "key20": "48beztPfHV3TbHreobBBWvD17fvbKpqvrsKAW38rs9k2U2etpoNvqU74GbQPRPckFrj3gmkPHMFcyYdAXuTccHJv",
  "key21": "4SbHZeALm5xrnyfpraxqN3YhmFczd6gyvUBjGAo8uqm6NXx4mv1EBPrBM1vnVgoe9smBcmDp9rHLA1Q1to9WFGV9",
  "key22": "5isog67M3bN2vYj4ucMvSBCiySFVextgLLdAaR9gJhPN9KG7qmGay7vPPRdejv2b9uKEp38KU1Hjq9WQKocWpR2A",
  "key23": "2FSnQzT7MMgUGuzcBEYU87jqvF6P2Bv4ywkCcyYALKMG5ycgecfpD7RFWG47WquvrPEMFomeWx8WjecPXvexisnx",
  "key24": "45QuzGNdjxHSkKMdMsg8dpCLCWD59kxZqRKjYVRwpvgz8TrufrzmamYVqFkrXq7tUkm6pYAPGcd55F1hukYFBmN7",
  "key25": "4dfSnkcfRiGh1cipyReEYz7CsXKZ4HemXoyn627N4cTJP5Dsx5D31PJKkKsTxVhYCkkydS4L6Uv5arhFA1j6pd6B",
  "key26": "4giiS9CqLdoRs8XgK8AhEvr1zdH2qw13BgwkMvqnzMeKHRoivZWGAxh6KKFMkpmXW2D6uw4tftZbgtq1iQ3nrsY",
  "key27": "2xSLVTrZx5UaRPBLfjYJBYoG3mpo9TRvZrzdUA41JfsGbDkyRf3ms9zXbz9LuXE4eTtuxHeuw7gSDsANWVcLx78",
  "key28": "KHqMu5ZN5xNH1AcbeZcpCmtGD67b239kNzxnwK3ixe97FZn5MSb3sxhwBUHTozAEX3a5zMJJHrqCx5NBJVs3Nd4",
  "key29": "Ky7CGGutNJ7USUmo7LzGA8pC21XHskTQ1RoBRXKviskPfi7FPzNSYYdPNJyFzADAzwYdj1eUn1bnWradCV6r3eJ",
  "key30": "5UBjzMjs1ma1ayTuJwEWev7Avsxt2ywRnDThjHpAVoy84CucbdoQXp35La4qs4EE1Xz1UAyrPMajaZMQ6nJpe3z5",
  "key31": "3t1rnuFn1n5haFXDSqX5Rx6FyN8MVD2Bq2CdLsmbWduqZ2eQTsti7zusXqT7mVQb8jYJFaXZ17H5iwoMUipWaPAh",
  "key32": "3Z3U2wXvUVN3R3ePM6u1syBnUKXKgAiDXMyadWfCMYJaT9SBvVMumTZ9DDwTiocgcEVVPvheKbCKK1jgKwxUS5FH",
  "key33": "kY7Rq61hzvY5J4HAgRwsQ8wrDWRUjpryBaZw2EBu9UpqwbxiRkKt84RFuZcKw9TNp2hXokqXBKsqeUrRNQAuUFM",
  "key34": "52zRqcy68pFfWkik8P6jUbYhwkeKoiQ8REjShEevDdNKwgzvYP5vaxgJaACSUGsnW2ucco8yYjXAvVAn47SkaEe7",
  "key35": "4UDshFAmCbKSTckH8htU4tfdabdWcpymWzJtH8dHox7tE9rmEBZDUSQkShqA1stDqLtNJm8srMgbpatXhz5mKX3m",
  "key36": "3qgFLhqUpvaxLQz99WnNXHdBNm55rwp1gocfcSq2awoin1u3yvmgzfWZgg9VMBsuuPv9qgcm176hjy4gjNHpU31p",
  "key37": "5TSYrUDTSWTL5UugKRhRg5XETFa4MMMfw8gQPRGHGb8qZPbb8Lq9fAqEkuG4iYkVqZfSAsMgBovCWeos667N9xYr",
  "key38": "3emVhM46NByHdocesTD87wNxok3qAN4Z5D9t5r96CXXZRVK1BVmp2nKo45rNRT7gWAhayF95DvLXhmj7oZZpqog4",
  "key39": "2PVDyng1hsfiCzBMgdRUa9gsaWmxZyShQgEMnAgP8VUSuiTm94EUPatEvzLmQZhQvdA6QjGFMKSnb9qa1rXjDJ6W",
  "key40": "2ABPE5XgG7kYz5iWiKhrranwahHdEzj8nDM1VfCuWvGQPy1FxoakYu8n4yr2CVSvFGRixns6BAqUw3eg82a9MMWR",
  "key41": "25MMF9cXbV2XPSn23bDFUBf3zzpfg6yjSozSkm6pdj1VAx9LXJgyDKM32wPeqH4zzU7phBHzySCAeHcMAFY9w1ks",
  "key42": "4BiHaLzbBK4Wj7H44JbZLR7u7RJLXLcUkA2QEcMGmpdjWAuZCg4HMa9oEmiE9yrf4oZVyxZpag14Rb7brXRfxwcn",
  "key43": "ztERaqT436uvLE4XHFCnanhY7wW25LS9HmsjNfyfvBwJqJC4t1yZ5X4DshexRUK3LcK5G9FF5EyK1W6FRN3V49x"
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
