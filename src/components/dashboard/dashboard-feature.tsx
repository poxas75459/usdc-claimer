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
    "3JHXNtubVDunjKYVoMrpLJFcMucXJbJBNwxUYpGE5sSPT6vFH1SaZMncUNeUowxxP6Q4bNwjkkUnKaTYzoY4J5Rg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zj1pWUgeRXswjebmPUbvMSzCVQ4vq3ioRQhCZkSiRd5eoKkCoYmq4Gv6PeNBxyPBsBGpPM48FLD2XxCRX7sc6aL",
  "key1": "4hkoXdvb6RuMHJuPtF5agAhEH8TctXdPVnnbdaimkHDzNtnddwRHZiTAVtvXGK3VAL8r2nY59DM2QVnqRXkYLWpr",
  "key2": "3A9KyRav9ypsCikBZcfNJZWT3jorxA4dyD8Nu5sLkMVJL83zSXJHX29Q7Cre9hyjdw3t12p8gmGxvfJ8qQuoGfbN",
  "key3": "3kT8Xu1i4W366JUHz6LefTpEP3KujwSkmQdzhke8Cfsfroeja9wmWDhb2dKgUi3yUVsAYca8ANttjzf1QJ8r9YiS",
  "key4": "2jFqLuPiSC1Pc5C4octfNAqXcJfuVhh713QMqn73tCeoJJkbGSwgayb84WrC3x56USgPZsVCpVR3HCw4mu8UnhFN",
  "key5": "2ujpkBTiRDur6A8V4yMKhtgD7zmSoCMYRymGUTFiHVgjeD9TRHjoYir54Qkd2KBu3VuVb1C9CXsQxnwD6hx1EMV3",
  "key6": "2DPmz5MFbhjGb1zrz4PfwVmXM3JjMDAMM9u1PB3zrZMy2LHtZKM1HexeDRx4MV1hXvawPjwT91z18qAhFXB7kVdB",
  "key7": "2mbVyjbSRbBxoJvzgp1RiXa56NKUsd93aoskNDT68hQKxBHuspeKUHVPkTzdxYNqgyQunC8JqebApUG3Qv1scJGH",
  "key8": "2QtfcY3FQfoXyUhA6JEBycHBGMUqvXcqk8fTtG3dnBYpcw5RbJkkJNLZiHY8VTGefYMMiRVUoRo2fiW5acy554xo",
  "key9": "4EcpEDnhD69xbJb2gRzwJmpriycMiRP5BVstbPXRZzJymgWAqyXSt5q6gvpyCBTDCkkruJGNKrsyHRFG8eAi7RHF",
  "key10": "5JGukEr8z2UXQNzUc42rtSo7DkdrhSJSqtPbH2rExHmPiCwN2vTqGNPCfWGb7xnsNT1MSqeGShmjwRCGimkFDaFT",
  "key11": "u4iscxPJg3qEmTd2c5gtgUE41EcscPQ8Fyt373NfVzMk1dy3hp4whoS2DNFSTb3UMZa42yM3zmc4aAQYmdmfEhp",
  "key12": "5oZeApessqfZppMEtXJaBMj7UcqephQWSNxmF2RybSRUj98iUhtMfLUPskdTkVETnrCea4PiYPiA61XKLiaAueFy",
  "key13": "4HNtSfqyES7VCYUZuYGogVeHptJhuVUM8g14dxTdi63CTWSo5KmJRMKYnRQBw357Bku87XXKUZpQT4o8GjFDjc3Q",
  "key14": "5ssgqoQnJ7JhjbEdbfHNzknm5uKANYfnkSqL8gcb7otH1rqCQnkFMGhnwk29oP3xEqFBPyW5Rw6fiK6tTJbyT7Jw",
  "key15": "ssNaF1kwMYNJFycdP31PBk8g1MXvUvGVkVZzjMrvhEWzEAy5UrU59ptNikb5NAeR1BbYbLQUJn2ZMpucHcJk8C8",
  "key16": "3tyoPm8sQFV3zUg1jcjUnJCYLTVridfpgXD92hT4WpX2Ab6BiiAJTVsypK9BUnK61boJhiqEjGifAsLyobS482nx",
  "key17": "65VBh744JtmzhkBnrqDuDuusGqS58d8mwKEuv4U5i48efUUXdrSjDzxg97VoQ3sjDsvmUWsRTKwHvw6Q43wd8u29",
  "key18": "g2HLm3Rpw4UeJKz5AM8jEeT8AU4MF3PBJGZMwWw3jKjfAsL21BJJCQykmsQwE7BT3WzFnPaoUGh87xiSFyiGV7Y",
  "key19": "3dRu4X9aBE5njDNSo6q1yEhq1z3adYiBFExLP4cmKhN591iwxgewVxN3xPSWdkMZPkr7asmtueEn8TubKBNuTsdd",
  "key20": "3o4rjMUgxmEKRUoENiXnLiH2scqfNHyU4UNvWMTNu7qP8iuSfj59HNRyndHf6QEkfv1d7echCLUGVJNcvdyd621h",
  "key21": "ajFbzBAu3fcawnn1eThoQWRsphsYzByGppAyL4EMPYzpCVxWSuiesrcifDbgpgUCypawdgTBzgxoxJQohhxxw7a",
  "key22": "3a9QvxQ1VPYW8Stuuf6MGwF5WwcuwPRNV9jsjsjikWg3poAUTQhGr5o322VgPb9f84rSugoRfTSD1m4Xu22yRUJ6",
  "key23": "5zsDrjiJLL56LCwLaSs5aAp8RnZatoMX95YCqN4H8ezKnABkgtHKy92AtnXifyVsAVJrz9aZ34qnRhuqDfc4jbzf",
  "key24": "55vqvUchEU8gQVeFLgsZbDxeGjgUpVE6YmBYjR9a4JpFzLYcmWN1A5dBuLQNH65cYPFQJR7ftZjPFSSevonRhy2A",
  "key25": "5Dikbk4WeszBBHdP9coHzJRXoB1NkQLm3nJ3W7HfPygvJKvWFXbFwdgCvNitTkNAozaTT2TR8LnXpoTNFTMkBe6J",
  "key26": "3WJ54HNY58JzbH2XYyjzkXEiBYu5WG1Qm795aiJAWYcHNvrjZ2YBQ9Q3AyLmj2nFppRvim9ZAQcLvo2ezCnNvZa8",
  "key27": "4knYxt3qBtNjJxNwftyAz5cK6sah23RoFGCbN5Hze1HL9UWfdP5svTYd5F1dSaNbUJFJScFSoyUooTJYr98ehsqJ",
  "key28": "aswfBnMycfy1TYiLqn3NUBoXNtNpoNY5LVzZdiC8vKfN2KZ121KWMe5DhUqZSRnW6Kf9cShBUDcDhpMyHgXDr4T",
  "key29": "3z4953S7mGgtpUUo9LPnMeVEn8kWJ3HLZf6sTgr5vLJeYjwY4sL7yXLjDnJ2jZ2VAKjsCrbaFeint9eoHNQeEL1D",
  "key30": "WMgE1ryYPfjUzAC4KZLJgPpbBU6DvEfzNFrU8FVQoDLB8HusXRJkKFJqoHJrivsBFBHDtKaxWFLcVv55P8njBCb"
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
