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
    "6432mSoM7vCd1nEVDGKbjviKMrjD1xH6Bn1mmYDRmji5r9DPAQQTAV2M4rYKruKrKe9UFL8f5vNtQcuswiKAx3z5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e5374KnZCtBogppMC7jePRqSy7exKiooJtqbHuUuvovkydT27bnoLmMBKnATSd8nNAo5NXmr8oWQXK55Urw2ZRA",
  "key1": "5ufqXVsUs6WGi2aS9HRJvsGki17xv2PhR5GYsxKHNeaCNKYEbBpETXt3enfpJK8WWTjMAtx7CEDaEnYsNytUxs6F",
  "key2": "3tXSd2faGnYZvi1osHPjVw9P7x9W8zX1Wp8WLtxntaA3p9TqSHr7fRYkekfmVUG6RBCFZPM9bnf5vhQP8NZs3k2S",
  "key3": "5DHqUhrUfprASpKJ1a16Ybw5MS5vVDXT6xZ6d8GT8FvjiPhKMwYphxVL5Z3hsmNYf1M4TUDCLCBL5tKprRjEcrqB",
  "key4": "477zrjwbCHZKqLHsZtojkodkJaxqVLA1RjzFAdpYNKkuXXfKerLz9D9KUryTjVik6JPzmzwrt2L1oWsehVDCzUk6",
  "key5": "MTSUmMupyV524idUgmkff2ZApYnZWCE3MzvJeokW7StSyWAVjhtbx2bsrBqknTu4kMVyriTAJ6usdNGWwC2GuNk",
  "key6": "2qLg5qCkrUSC4Uh4asKZriyJALEUfV341Dud4gMCNhJQph86fArTbTwvTqw4k22vUu4v6mWaGxe9DkKy6XbdAYbT",
  "key7": "4K4vqNbN4uZDq4sGCWgEJ6XnUSnHoeg3PFtL3sh4gubij43bDCHW1wrfvBHkGu5qr91ycWYPkAZazzAUXDWDY6FN",
  "key8": "LQUaf8krDWyJkzpTQtRCuZSrtXsMsQvc9c4YC2cUDWHVPNc6atKfqPiCcEwLGfTGgk9sxduizCv5T2aYnhv1XcS",
  "key9": "4F9RqyV9DteNF3Nxfv1Ss8NpVohJ1rRiz4irYTjbJRmsbMx66Pee27Fnkos3s4unmMkXQ2Z2Nqm1BM9Sr9R5xaUS",
  "key10": "G9946FLw3TiZATdYoEGGL3vys11DmtcbjyVUq2F6BHoz9S35e3JM3sNeMTPpoh1smAkDK3sW7j3JBPbWUdMZTi6",
  "key11": "jsWGgZxy17URCPYFRSEGi8hubcwhy4c2Pg12mTWcYKRy3PpoAAE5jVwQWQRSBna4HcK4uej8H4uomkij22eRYMf",
  "key12": "4tE7VCujCQDU591JjMNeXbCNDfzN6oVUfnwPuZLgV2tYudXKYBkUDqMw1kZ8ACopLnmPkg29TuuURdTLfHLs2AJB",
  "key13": "2VJxETGHofCCSqk1J8ZSHCwBY23tS545NkW2Y8rF6iRhqbHde4n4ykxH2MFJEDo7p75TfUvJy3vusjqjEg68VyEV",
  "key14": "Vb7TPnxJ5noG64RjWGpQcmNdfhGk9iN3B23AiwYhUJbUdXW2ANsB7fmnzx6j8FsDCmawWXKm2gmCHAJVfEgaMhL",
  "key15": "5F1vrTuzsSJVgb4Rxc1sitJE6W4iquCEZ9mDwGGij8i4ENzqMGsxT2kMWfmGspog4yKWQZWX4VVqH8FfAcYM4RXG",
  "key16": "6pPRT8ALozfsYP91CgvF8f4j55gcTSD6dRntHH7ApVMxgRM5XKYMkukm5e2pQXhpoqxUwf6dJSTzGcWr3fLNUWm",
  "key17": "3UMvzrBHa31S6XhvpQgdRoFBzySvttMQzFi1HshimqApfmhirbHmqrHpzzV4X5weuDqkyav9ifDqsdywqGjnDD3g",
  "key18": "4ShyGYFbq32jKyZnBm9mkqXzgVaNrgDKoeJUHVQK6wCec6YSCyEP6MspVpwDe9rqyyy7fz9x8UNc3LwfRCESGXt1",
  "key19": "5qU72bwGg2L5DimHCtTKdfZj9kjNDGykvrt5es9srgVLQtuALc2nHTZjCnBFPaYdyNRoyevVXZmpHexd4dqR5D1f",
  "key20": "2miNuHjgFj4WdKaBEqv8NZbJ2CbjUDPYJy2XGiH3x8YsAKxcEgrsv1U6P84fntQbSiWUkbgnpfRbzQAbY5qeDiWb",
  "key21": "5srnKqvDVmJzhKTpaLuMQ3yjCqdvUsSEjb2UWu44GrVhakgUNNumbPrw4tCnVjLBP1KxYrLxHVpcNpHtnzZP3mpk",
  "key22": "3UAe7diXWTySfq2TC1W7zseknPjvXGbZ6rcFqH7WobkzRFSyFjGkUyYVtX7C7zcQfLn168KW818q93nuaCV1iXHM",
  "key23": "169ZUrAfRGVwYd4Aqfn6rDtLmeMum7AmvUA1RJtBScmHxvpiR71GYXYhLx1jP13JjCTHmhSZY5GYrEFcJSddVyH",
  "key24": "33PQgiMHZ1CMKLahPAx9rbwi9WdKVMTm8KoNR9rtf8NUX1fbU5UsYtEyj4zFiazafaCWnEuCu33GGuHn7xx3xowW",
  "key25": "5b7bW8AUTeKmkd4uokLMk29aBaUUJzgDbuggRBxBcDRhaqBXLWYUkMg6xnk3m6tKrHzBgJhXuSeympopko4SXDf6",
  "key26": "EPK3i8yFTgu62ye15JqzWgsCqzUqhoANkTmkUFzHSnC3VxTTsKim2WbgmG6fwP7pKNoZFEHSxaTvpGhEku9DWFc",
  "key27": "2taUUassM6FcHdtnJ3Jy6GVciSfJhjU2ebKuRBU1xB5XkbZdJyyCrwhZgXUMyJgdFsvUEgYSwhH1UeijXsoCjfpn",
  "key28": "4wFkYG19BfgP7Vhr6jhk1fBWPdQUpYE8MyKX98BSBaECmmpBTqSg8ToAph3a2e5uV5GpN6jtui71RKPjLMEvi4GX"
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
