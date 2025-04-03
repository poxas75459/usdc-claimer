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
    "T2EaEkqe4DK8vt32xCoT1b4r2Ey1VZ1CqgwAUwEG9d3SHX2p5UZmeiHEyuUvYVkemviDvZjkoWa3WVDeTDLEn1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q2u7zynStws8UM9EJCFq33ewos42G7U86yZ2f68ZwtVijpCvqb1c54pCJKas3BMWpbZ153ybm8WruRfhcn88d3w",
  "key1": "4CiqyL2xERna3FFj6FLcz7aMGTYbmF9X4HKrZaKzs7LV54PKUxcKMufE1tnyqiA5JG2LZFMhY8cvpDuhR9EeG5Yr",
  "key2": "2KpEjomKeQKFubbBeLaBVGVuVRsAziZHPyEgwTZck4AvDCUamLsnLz7TRm69LQf6xJ7mnSiimAnNu5TvjvsNZSmc",
  "key3": "43QhjdwC6CcvGoEnRUmNEMyTFU2okWeQqp4dMrvGfUsdtApVH1Wwnnjjrx1xNNvUhiYafKqs8hmmVy4nsuMEJQye",
  "key4": "4yy5KFkBwuyribA54PhrQAHzsGNVrjxkTtrgumHQq1DNDcYejHtYU2k6TfVxc5h3C7wVSNjZct2o15oKaySpninY",
  "key5": "23SoKbEWYhXhu6wU1gDWD6WxhUhttZLpvmzTJtTo5ap4U3dtfbVePtAw6hGYMtJnSHchdHet8RkBqWMjsuJBBnrG",
  "key6": "4WsUnAG9xED4mwdwEKAD4rjFPxMc8ux8jGtQ3zc9zmSSM3y6k4pGE7kYfD6qwBabyXdFi2cAZXSkFbzATkWc5T3T",
  "key7": "2SR5MH7m3pPxbUtpMmANrQhPQvAfVjtRGjfNCPc9JSqgdaFReGR8jTrKChBfxCKF8tXgM2XPhiktD9C4iQUMBUEr",
  "key8": "adj7gXB3vamqzRDwVZFTMvZyaZ6zL3wpn9XAuwkV5ivH7rHXdF4cYA8zYABG6FKESCe9W4Xg3ZdQSZWKw5a1tsW",
  "key9": "5em6NN2mxabuvs7AKyMeuSJNkNZW6KoFKCYTnDSZ2qptxULMHa82tuQaHCR7onafJge4WbTUjhhKZUUugtoGZN6R",
  "key10": "pTL9JMCc1mkLgYiuPpEnt7YJ5SE3ESHLJLXkDjFsBUukWRgbzjhRfrE34GdFTzUKCdcfBCcb3ZzqU3krLBUvrKY",
  "key11": "2p4iGEnAiRGRQwCAQLjKTmcuQF8TJCpEoKL4iZ1obynHUvnvTc8MVggWTSdsqfDXzAibd184fwCpeCje8d5uQSKc",
  "key12": "3kcNVqdbH3jWKW16jMpSBtaaaihHuFgVo8vr2MddX9FtRC9vcvE5qKDTdeFToJBP8Y45AqdkbE6XDZxBDuBTPZXb",
  "key13": "5YhkQ4byL3ypo8NVojyarGPCdS6Zem3g1XVhtZyEStvaW9hGaAAmaJD8pLRm54KMgsWgbzey8dD4MuQCw2uskxEK",
  "key14": "3tGDZBT6T4QjqowuufXayBU4WRb3TNMBuiP2yUBpnQJa41hh5Sg7a3RAatL94Cf8H4N2qzuFKhmdpT47fjPaoV8Y",
  "key15": "39v9X8raU7uR4rR7rMmrv8SscyhDQRW91XmrcxN3D26DUUgbszcdFuhZ2X8u4GgfEHRKxjMhwZw9omcMSi3p1LJk",
  "key16": "4beV89fNCHpxADkxyBof7ouUvZxWesY1BmMZ9QFLCbkUP8NkdtYHMGoHboCRpuHUKAu2Li1RpX7BucQ1EAcXqszt",
  "key17": "qrpxcn7YxRD9g3wcqJhnq9yXHuV9wSLe7V369D6iDwEAsnwPifs9Eer1vLVkppJF8EfbEg4VkZxBBT6sQq25wcW",
  "key18": "2q51uaN4S9xTRjuRDG2fi5EcNdS1Jvn8KKSNvMhbFLBupwdxJibg3Zu859BYL8gTmoQzFfhdY3SGNoKZfh6zcMJL",
  "key19": "4zjRekEX6537NkyEeZka7QfWsf5KRsjnnCKhXpauQbH9khauaE53ti7aXqHhtsotSr6VNRKoTqzj9fMbBuwaewLS",
  "key20": "bVYZLm266Z8nW8y3SLfCNL8VwyG48k1tgeF9HX5xNjwb7yw2mY5TTFYgiYdgTFEkM21J91Mk6YLf99ApFkj6Mqo",
  "key21": "5VK6Zd5MDGysFEBWgPZrPCTSBkFHpvKxJjMQTpTHZACpsGGU9P9RmxVdgeBzLBvVHbFEPzVK8AeSnUs8nCKLPy4M",
  "key22": "4W37aTAYPGRRN4gPA1iHL8pyTSNjVQgqEhCzzYJftJ2z8YEPfobrMrzqZ9iJ8QNBsZ2V81D6wKAzquV2qSqKd53c",
  "key23": "2YU8UxSGYrie9MZxCuxM7Um45KDu1RDuasgTJHc4jx5ZrvBjsQq6vQoJ56YyaUp4KGrH2L3ZULjsjDfKYXwmhRob",
  "key24": "3bFPZNrWMdxRtzb4Bd6Fn8JeNti1WLbDXt7gCSnQf5yUkUSwCR7cjNcp1fNbXYnGDpgXCj766CHEeaYTzJPeYjk5",
  "key25": "53V15wJ65zaLK3R74apPwpSrKdyamDGNAFYgfzk92HBHkcDe67nC6JfRopZKxUA9Szp17WAqMnC4mv3x2fHZMYHg",
  "key26": "4pPbbYPPFKGd3EnwY3iEMnE3EaySywFbisukHGctvmG6MMeZT4brZxCCkANrpAuzZ3kLtYHRKQUBq5gWHWLFWhuN",
  "key27": "HCQgVTZTCrmgww11XKCiUT7hYxTushwDxmPNmjKocZxktzRNf657pGyHQJd7fGMZ19kZX4pRjgGELiWXZnWkoM8",
  "key28": "GSZfH3kzyrN12o2398M5vyedDzNyopz1wh4VLou4YYhbc1aoiwaMrZFrTnxCs4LqZfXmCrfwQAXYSU85rmZhPSj",
  "key29": "4oEpAt4euSTbzSV3pyRREKW2UmQRbnhxiu3SxXc2466umvAEPMs3EDwDjg9U7cAMsaxPoR1y5ewYv3zAw7XLznZW",
  "key30": "SFyArDKLXTw6K64aZKqVGwDi69KTzZz2iNWBC723V5fG7g4VZpe2k7eTbafnWExK293AwQqEnaYgJMYAk9krCiH",
  "key31": "48cbfFSDMCtVBGe3wFnWU8rvbniiDLHtuNWXmz7DzGvaxodNKpYKYwkmtbD9jvkPPTZsoD5dXg49RrvMB7tuGsp8"
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
