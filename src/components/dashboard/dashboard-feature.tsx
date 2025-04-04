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
    "LTwC6PiBUhV218GYeeotMuMEDstjaNFu8ar85b1q7BABF6se65NNk53vZAhex8L639U6XWpwVrmUD5tm7Wyjd2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NrBZvzZPuSwLHufzT9y86p547HgyNpcZ9QqoP3cNyHo7LdhFJDreXdq5S953MwFbKvT6wj6TpVdPb3ibUKbyeAc",
  "key1": "5LVhTtoieY5BPCWV7X6iApfZ2mt5FkTmCnDmyUXwdbniDjrE6Gg2dPyL8MP3Mxn1EsnrTR5WDwbdfkhaDg41acQH",
  "key2": "3nPDeMgdCRw616E4i8dB1Gnkc892awYtfe4ihA5FRMcwWAetqGVMTM7ArQRbjjtYhYnGQQc7yhAxkfDdU8hFqLp9",
  "key3": "5gyqo63AqXFbGn9YpBkNYX8joy28m7bGicSZhwDDVBq5CaXRGUM5X3Cngq6uUkkx4vndcK5FzuLnuRLDj4bjAdpc",
  "key4": "65NFoqQCiGnbP6iUR9RX4exS4s4h3xwFNmPRX5Vp2CSwjDuATcMieQ9QSzUsrkUd16cRSA8M4Sbe5hFcFnobJjfh",
  "key5": "5GgN2wJwpo4trwLEFKmks56582WYw1S2zKT5msPjy1bhmvBTLtBW7RoeE9Fy2MjhuVFcFZsJN5GdFNTGMuCttWMR",
  "key6": "2wpCwiZz8vXq6d9dWdfCoUqZs5Zwthnb7jrM17nEf4zjWin3avHrJkm41SJYZdziAguxgXWSL6kULtSvhAF8Y4Rf",
  "key7": "4k7bEumeBcNqmaNKtTyFtHhaZoy5GCXJThyMWZwpgQRJPZtg4SSovoCQ52CYhYfyxSfc7bBpdt8scPFavXSdB4yP",
  "key8": "3gGNTBCxjrtKehVBcM7Byik3CXBkrHLDxrhPnNZk5e1azCN8B5qEwCgNDzzZ5bkNcNjTgBZSMvZGAey9YdLuuxgN",
  "key9": "4Rv62PtL4w7uMj8x5Jw8ah6AkZXZDwz8r4qQKNJmBzbjgPicVd8y3LAtcQEmJ9Wki1GDedWfuh9siCJ7FyXxo8FR",
  "key10": "48P3F7p3wwbYLLcC8Cfr4EZS9hq7PjZFXX42vsKF38Kswk8z69oAhEWKMD4ZEneKDCyZbrETBaJXNYcBBde8WBBc",
  "key11": "4trNvcUEKHWAiK9jmNQB3WgzcmrUhDzenNtD3TSV2HK39bfrApkGkHzcWpYndNPzRnzeCySoVVg7hsQVQxbAJXdb",
  "key12": "2zRqLjbv9jdVMgUaKMMYu8Lx9QqjiSq7KCTxKduWdFLYwPXUwkCCDKGozMChDS9nergDxKcmGz1sYBm6nTaWdawJ",
  "key13": "4Am7x6BwbRQrZvtoctCJ2kBjJEe7QKZCjjR94kFwJ1doibKc7PUbC27qXkUnWzmQVf2FnfUTbCL48DZrGZZavYUt",
  "key14": "5YYY1QqvMe6x1WyKvCtxbm8jSS7JYyWjnMBwUuF8nv6PimRo6BectnZR7KKmMV5pbpYdCRUgab9n5VbhTKwj117j",
  "key15": "415pMEKADXzsn1mn6xFg1ZLzJUwxGb4hJ3p5HHUUZaUpcZxx7Z7P4wWUaa8zCyZoLC6T6mbHPSPKfoZbtmupHEg7",
  "key16": "eWQFK1pTiaZ2dCqJ8j1a2DyrEhpDkmoL9VDC4ZWHgWa77LF4wi6XpGvmUohothwye4SeaHfdWi3UBzLxhQ8jWoX",
  "key17": "65n49A8BnvHpax2xphLgwzZGL1EES2BU48TYBam4V9Yk8mMGQt1GibkFxzXoU1go11d7SdztGaKMY8y1ehuyubSY",
  "key18": "3F1S5fF4dcM1LJm7U3PtWRLDoENLBAvRbCHfCbsrhAThsd4JizF83z3Ug7L4fvTDmw4GPv2S7rXhhrvSgf3q1jnf",
  "key19": "4k1JDi4M2V3z94v53HKPno3Tk3XfhN9nkyV1TkVree4X5v7vLUJ45pVEMVRjYngxUNWFcV7ujoJtwo1puhGUkz92",
  "key20": "59r7ArbJxVrvxuWuACLVvBowPx2bSKr38iA5zK825VNVB9v5FUtEerXuaBAZkfdnyfFPKhENbEwc2sGyZF52ZHpR",
  "key21": "5DRiVN6rjyFUVyuCYb3oa2thLpiEeHoGhzUp7sYrZ13zBV6vMErCXZepmPfFAnVYin538WXHXfk3nWvaqzogoH1G",
  "key22": "t8ZA5Gghaf96UkfwxY9DU28ppyQbz8J14NTED4QCcdjAsRgnXKf75XdD7XA2pS5xxeuVJSWWSwRRjeAjYUt6Kq5",
  "key23": "EWpSLeUMfzUh6YJsuFxBoX5Ya6Xs5XvNFMV4EKvLmuYKmn85eyQCiiYrxuVwBkdeMf7WBUa9S4bTtiwGRJaUuRT",
  "key24": "2TGp1Mo2R1r5RyD1JvXfJB4cDH1GHyuK5TA72MPiXfPnV7DzKM4HFVL3SDd1kXnY8BzmiboX87jj8e4k9jPbAozv",
  "key25": "2VE1cYEjGykDendkgioJjypaWjpTyJ5rjaDkbxb6hQmTdq7Pce1mgdTBBaAUfUF2PgWf78ekzY9HZAAskgxRPjXk",
  "key26": "p8GgDnghzySLJTVyceGdVGaPQNUjKiaVuzT6w2ajJbPQm5MXCTWh1jeHdtnMrDXWtE79Apx3BtHtLUzVBuuzgE5",
  "key27": "24cAi2FifH5ggqwvfS4GyHY8oCM8uo9wuGX7Rec4sPgKRbw5v9yVoTcbaaEv4ZQDQ26dyMYVhRFvSB2pZ96HCkBt",
  "key28": "53ozgVS72dw8uGGgzmyhkThGsNSaRN9865Vcg6i12qws9VfB9khfGc12PYg9gzK5CawCzWVHXqUdaBKKBoYw7LVM",
  "key29": "5kNM17AYC89NbMnaT7qD9JkV1yDaUaXrRQ1Rsadyi3rJ7C8hiUxqcsNkr71ZAV8RHs31VCZJkiscj8QzAV9UCgF",
  "key30": "2qkDQxWLbt1TqdohnrDf5yo9TVm1ZAEwZ1wGfBE1BrVPRttNghLjK6BuEWpt9CBJFeEakUdnwJdKijTgx1u2NNsA",
  "key31": "5PimVrccAxQoc1EN6xRyY3XS5XasbvEic4MoCJKgZzJgdsp1wRcckCWb4SgwMyuXPxb9MoB9qFXhDkeFZMsSZRJu",
  "key32": "2mhqCAGJy5UPdiyQQ2V1LgEkNcsRtvDj1A4QDZCgUvANnwwwTVtwXZZJijaRdNFvjATzHz4JWpZWwhnoySXRqHTy",
  "key33": "2Pk2FYAw2BQzzBwQimewJ5tj8mdbSkFu8JEKfREbb6zfSK1k71YBaCzxqijryDCA7RfpZre4wpTeJEisMsaLUtSj",
  "key34": "3JsPq5cxwiFsL37dAiNhd4mnsqvAhdXmJmbntarDM1JhBaX1bErzJApe9TdeW4wFST4TEiU4mq3PjApQE94AY7DX",
  "key35": "528Uk2CLgkGW4r3W43VjC85t1kcJhLwBGCZX8KeeYXXisgd3gGMPy126LzgR3whHpSuREvpYcdr157gvqDebyLuN",
  "key36": "3tkbD8ZZ2hPRRufPD6W29Q9LGMKsdNhDb4uDPuwA9CuQHNRp1TQSDWY6gyexhZvL5dEdJBDXvkd6y1GgrCVc9xYj",
  "key37": "d3LvuEvFv7QryDhmqayBxRn83eUbbftGhNSQ6kDqAW5dMEnaojR5DJ15wAjfuK1CD2KouYFfwjaieojposWa1jy"
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
