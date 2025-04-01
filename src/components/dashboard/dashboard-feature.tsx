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
    "3ajWos5C7W7VHiFc9K7cL6t9ArzG1gQK9BjCdJd8fjaFyZrF8WyhEp3AHzG6odFYjou8zGAbEp9oFoAWEJifjqEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f52T2NVaWbKbqyBbdd5mfoeoDtJ7Mt44XnbGBhPqmL4qNPjWdmQ8TTghMTxpA2aQa6BZNbjg8Upa5WyMcsFirMv",
  "key1": "3Y4eX6K52pT5iWTu2R3RAvEyV61fvJXQtvXQYm6gtymtw44As8mdXQi9M58RzGXDHFActQETW8FNo3xNYDG5V4dE",
  "key2": "4u2d4V42scexfJZrBmG6UT95Paa5G1Jz5hW3y57nqa52SsUsC7NyL45ixKBC7Dw3QvAepyPmC6xv33au66E14q3c",
  "key3": "2mByUZu8vE5q8X5rhVwUDt5TwtZS2J9oLKWRYciGLFnnbyQ78YcVwXLmRsm4h6UCWpFRzCKJzXJnfAjT1LZWSNCU",
  "key4": "31NANHraLTJ5WUPSkDo5gEsNfjbw7mUgdaD5gqZ6JFn4qrvV2dcWe7y4fZTspJLdYX3SZZ9sJ8AK1FFJS3xNsoYH",
  "key5": "XD38CqmdggAot8qUuMjFZUQJMCQEFZrggLRc6A2pBYBRn9ERWtje2CNpsUQ6So8CD3Ku8HnySDQUFF4mfxidvJJ",
  "key6": "58mKCKTu6NJK9isyq4sErRKCh2aDH9LQvTDd5hzrVLg6t9stBWcdpGLKGccJuhZmXZvVhMXk3Kmcc8HcG2rLdMN",
  "key7": "3HCBEoHX3e3HSTDxQAKVfNX4esEezEnRHQ9stUuQionJwWej3DCjPb8zDcSG8v96nCH5ZVP578GRTwm7D4ft1aQx",
  "key8": "4DfVdSFsBNRvAqBKda6ySsPRssaWaAJ2qsPbz6n3tZetVJRXu7227susy28TDdSWMdqvxT2374tFDW4WywNJKHu5",
  "key9": "64GDF1UeMcZDj7oBM5KyFXvDvTTGJCJogkeez8nd8H7xXTMaUem7RzzUzVh4P8cG4dNuXMB98xhrH6iEL5cJFHHa",
  "key10": "62suUV6mziWkbABPxRi7xgvLQXYm2Xdvu93vCtfRruULRqNx6z44hbkJgpyQPax1aMt7iiXtNuy2wiTr26b9erkx",
  "key11": "3XyCZwzDaavhjgLquKKuDaj5pn3ERmxKtdbUHCpqjgKX4zntapgv5HL1PGAwniscedGVA5jwZ8Yvt69vD1aR3jZ8",
  "key12": "33v2T4osXDueMfiPXqtgRhxGxq6mpR92LvZMZfEYHJjmXGBbr5qL6oWrEjRe57V2CVeBWnYx3u7DwmUpsLFhMRoL",
  "key13": "29fPSLuH763p18GHveRKchvNsUBwiqRAxsQzgrSMXwxpdT62z7umEb7fcWPKSdQVSP8BAh7gMTT7Cewx9SZCswWk",
  "key14": "5YAm2ANCdx65LspF4zoYLRTCSEeWxMfxVuT2Tp5SYK9P3FQXrj86szf3fK4cRYYghnwMRDoGCp3eitahwGHXomoT",
  "key15": "2Ep8uAT8pNTgWf5RjBEi81BZHWGYKor71HN4LCHLuGVGidyTT7TTgPwNiMq7moNk4YD2cFkZkQzz9GdCbCUgsD3F",
  "key16": "48Eup5GAZPsKZfM6m6mPy9VDpxmccfPorNRBSvV9jQG9FYyyBYfzex8EBo6vHVWRSPSMdhYM7RmRuo4k3zsscebE",
  "key17": "627zbuW2qAt8Y2vhNa7k2yDcfDUAKg2C643oTRGnsF85DZivPDBcz47r3N8cFG8W8EBWdq8ZwC9Xt21HFNMoMepe",
  "key18": "4NVByS2E2MdpxvwvXaVAPYGo9UUjG36JV8h2vNErVG7f5QZuce2c3pYBesBadpcG52FcHA2jf36Z95nxQqtjSJas",
  "key19": "5C1NLSeotTwyDP1RGUkDCtSiYKKA1DmNe9dzjRVm9Drv1iHcJC2yMCFJwXtdvawv1iqvnh1E4EWgZGhsF8woWYba",
  "key20": "3Ffxv45p2s4Z8iDJKYQjJZD7Uuoy7CDu8q5vvXFm9xbRFV7nEV1a9h6k6FNAawD2shLtk6BJAxMUZjsUhDFTsJ5K",
  "key21": "2jZ8PbNN3N5mTAXdUyb9bjyuuSsMBuaZ7KwscbzDB9573PT54dUAAkc42fKXcNF2YLZAGYYK5rwpDTpooAkWtJRw",
  "key22": "TsxrWRqHVP2cKUgEJ2oYHzoVjRp1uc6VJqTVYJGhBDeuVwdMqH4xExUmujofKjeDFS3c13hcRxxyUiK4mxZsypB",
  "key23": "MDzhBk8V5wh9wSNPkYHB14RwTkZL3QJwbsRUBPD9tzq7e1DPvcqtDPQ3acR853nzXY68HshcgGVBTSMombSygke",
  "key24": "5MaeLh3Uw3voHxeFPx2Y42M5GRUWMwafDEsxD2XbNWuDUe2cF6LgLytjyNXdxUKTGxRP7DBcEoSB3PdDQDD18GRD",
  "key25": "2nZLC6v3a8YLd8Nbz8yjUhfTcvD8wHpo9Psvwa5ajcXymxMxpaQ1iQkLyvcz4bdhoYbCH4Pd83t5Roh5kFBW735S",
  "key26": "3uVEPQAT2SswsnmaVo7s5WKKYAADcocgMTvGdLeRrGQNA64QQBRwjpe4nMUHxUSQEEDgJUupwMUz4srUgxK67YCC"
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
