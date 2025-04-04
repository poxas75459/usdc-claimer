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
    "5pE4a4957v3pbJnotqkCCYNiyjK2AKRXDme5NsMRNeZDvqr3mKVrzsBcppYjrHe7CfyiMHVVDeDW2Ymt58rV1NjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sRCuDNGYbNZ5d8m6G6SP4aJWU4Y2fzjZTt9JiQeJHGGZqvMciGSi9rshNXHafcrMCEWfffi8EycTJUiFgHbYFhN",
  "key1": "2hPtEC87SqgnA4atDeQw7yHMnntWRWGDpcGrcAtbZuHCvwwqx8fXAyn47WH7e7EWqjGyHCrCs4xj64NZ7wHDPjXA",
  "key2": "32cTuHDT46s73MuUiuLA1ByRYa2YTRy3kzYukT7EMgb38qKU9pDV56tAV7H4uJTPhhYTpTgvbaqMQLdP85hNib6r",
  "key3": "3R5hNQfLPFAytDDuW9CHnS2QjLAkHgmwv7APi1sKWvaFQJovjfwPoTCUa2N1mKezmmHfxkg4u5sAMecKYiXVP1wS",
  "key4": "4fwzHNasmdi8qzRanTx3A9iVG546uZFMav6gNZuEFdhNz8TqRJGcaESguD6WFUqwTSEhVYjmtMTYdCBubWEQuos7",
  "key5": "61LRhpNrbKriDNXNbvoV7RZaFG2hLxuLHc2JqQMK4yZzAKjt282p85H2hFv4EKwwsTXutcYEwJdZqW2jjw37KMDB",
  "key6": "2FujCLPhhjicvV21qdVxvYehHNbEXDxuepTuyWqB4HhjX5cUuthxLNbM6espUavRb4q7US6bc9JqmPEUaynmE5jL",
  "key7": "bf4oZF8kPBZgvTEnUgNauXoEZELvZWmyg6FVCxSvEjR1CAmNwq11eSgWmknFoE5S4dLmuWjVCcEzNYfVJBUghAj",
  "key8": "21ghxNG46UJyq2hrUtgTGXWi7QMHaSbJMR6EoGTFfWzRT9PRAZv8rtjDuq4epcFqWKDj3J2bQxPParnTokcrzbUW",
  "key9": "d7D9UXYkoTzTG6YzXBig7WAjKG9sdGtZPAvMsjg8VQPwmVB2TpE9aUFSmXZRd2dpEUjKVFno5AcHtx5honxmitQ",
  "key10": "3FPGeyLrmspoScGqnEgBr5Ue4Mf64EDPbf69HjoGafkBi3G3msVEXuSZWneoc6msSYgmJ2mWiPjoFNwJwRmkW8h1",
  "key11": "2UvFLteJrXTzWR4PUHftCxWymxL5ZAvTbY2yR2sgyGkRwYWqZdKACa29aZ4o9A57DnPS3Yzh9GLYe3ZL6phqYrKP",
  "key12": "3AmJjqAHFQ5mEq9AeTUGG3nJYoU8XZXDEiabBSASFKdpbwjqZTLnSFYshx4Rkzb7FbhrkSqPr2FNS1NnGFJpsxHf",
  "key13": "5ybqxxW652uuFJVzndDYdC4iEMTwURnwPgamwLshZdyegbRBJ68SVkFJCoEm4wMWMF59NAASTEjcYbZgUUr3WA7Y",
  "key14": "2jPj249FZ7jZSG9xvyNc1D9h1wHUXpe42fNZpEwGr5n7AQ2HZwTSex1hQzSqXSi5LoWGe48ZU1PjXygmjBero8Xo",
  "key15": "5kbKsTdX7sAS2punXTtzUSE5gVaTwc68JXtRVnMuBAZKzYdN7LLUwuXs6ksdLfQwjYb2azGmJAuj3CePPFpfeDRK",
  "key16": "P2RHGEZ5Y97yWYxVNHxF2xyy8yKKJFtHVLc1MJWFSff9JpWQHf5RLcfPZyApLRLxDQT1nkbZMUzx1aGX2KccFm7",
  "key17": "2THBTWcXKx9y91ShW63WFZ1sT2oQ2goZUTDhZtEY75KqiVoobGmSgHQQiA8dWgMAuErCxYcuUg4B1jUk7nFjk4Bi",
  "key18": "2jfrrgeH6zSZf6pTJdscZmzcDWGrqKytZimKUtePx5a11hwg5aQffnjensjxDg3GD2o6VBn8GkXNrVUwLv5F6cV2",
  "key19": "52htUGK93eh3anJaEvVru3vYv6LsGQ3XFuHrsyNfRNzvEbNrJNW8C3uD8EmnmhLbn4d358f4mPNV1UJjXyYdJLuQ",
  "key20": "4Sw5D8FcJMLH6Dvb2MzZJcM3gdDLGJoG7e8HTc5WiHBmvfo4xYkKN3fJeTt8Xk68FYgRHAbnjM2U66HU1So5iWCn",
  "key21": "3ZPHaWJ2fLP29s8VYyQSN1bSmqhpjRFLuQGw7cCz3Moz9ey89iE8zXBN3tCUWGU55ZSmHQNsJvTg3VgddBYqpVUC",
  "key22": "52YQhj8jJfwWjWa2wkn8YADGSGLdgMqYeuUFKtjnTiRacqsx55yFA5h8EQVxm2DoSoLsbry57afEtq3amExR45yd",
  "key23": "5UQxRcG6HyZgySHpfMytYdW9e153YB3amtbAgqN6AoWD3BAe1KJEweNBWeEdkVHy7LUyS7T9U2RtA1JouZXfDcwx",
  "key24": "39m8AZZhY3ixmxGppVcGaXC7fT4YFsFnX6M6csAt4esEiRFTSBiffr337YADNArtdRo9rgNNcFazA39hRXwNMJNh",
  "key25": "v2X11CbZX2CJfySxyMssRTdN62E66Aezew4PE28TefR3XezNRewKEPmJy3QjCiz5JRibe9VsWNTD6JKcf3GQfMi",
  "key26": "2tf75dqG5NZsumcv5XrC6FMdzKdQQFRWMnFcniLR628KT97KMpLKdLapFPXx1Dr6gQ4wMXUn8bmUBbn2ys783Dwi",
  "key27": "5upWmAFohcpY8eJvsoK93W5FDDb4Sf5nLKh17WHkk9TYXvNoJCDUwFm5cXtNH5Tzz8smqoxWGoHJa43UQkiD5gDH",
  "key28": "4NY62tZgXXbbfQvBpX7fDfEkQGUZMBnaLxjUPjK7WFd3whGQSYK39Tsh4prGedLuKLYF2M93QbZa2vyHnP4DUGLn",
  "key29": "QypuQbWkgrVvbnLG2SpVRKtsWvDLcSprtyrWpkqWTahfN7SbJJziWfZzmy6bM6bJZwXbzdFueRwgrJNFAQfzrer",
  "key30": "5veAfS2fAhvGLJoeBo1nEcR67W6Mvpw3VepFJsCh36Wfyef6HBKgg474V8CPibeYjv6BeWdDwruM8iWeH7Xtgkcj",
  "key31": "ozLFQMR9QdHJQn7ajPk29ziF7xVeY9pJTAd1RbGmdfGRXKcoFeVprML5mMbKxw6g6J9tJLsw6QHFBD3jS3FmFEn",
  "key32": "TsRH9muY1YE1NCwvijsLFDbHY3yZd1TDgobHraFZo9yEShkRmaWCNLD37uW4YrdsvdtZRkGGN4UrUubBmJquFKe",
  "key33": "2D8iDqivQwjwPV8oDAEmZe2U1rdriHisACNZzXxL2HYUhq9qj2ssdu5xiator2vQb7NXq3kJQkSm3tzVLSj5arTZ",
  "key34": "2tQBnT8LZUcLaFX8bsK9Yd7cecUWmtP1DbwV7UFot2bz32fhCSc9kgYx452PHRNNKDVpo52h46nkx6MhEhHSx85x",
  "key35": "4eWS8XswsTW5EVafhLbZAZbBaCBQtkM6FAUCiuDhQLxMeaiYTsTUD2eAB5Z5pZ9JoGFLnU8TsqbhtCS29QYMBtLB"
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
