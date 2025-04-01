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
    "5CokD4rpvNCFNSmzZi3VipyQJ8tH2FTrz7AwTMLuwzBm3acvbdTocY334MnQ3845BB3BbwWPFzsxJKoPVWgXtDBu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Be2MMFh5BVTexpF2tsNHPsJayqLC8GmxjQqGyyfenu7hrcAFhduxs2F7WJGNtr9EGTY92Mwv3rXE5XfoDH9CyA9",
  "key1": "46R6FEcvZLwN4JHJ4iBhpJFTVhPPensfdK3WVHfVy9WRv7bEUCnUPecHCFkwpPm3c78wSnCyZUSPGNQ1TcfPZQ17",
  "key2": "5RVmfH9eTEYH6R9AwSQefAsJHgAHcHvgNQnMJw2qvfMCTpeB6mbLcAmVN4JC6RYq3dJgHn6gv2EuLQsN8v77AKfj",
  "key3": "39oxv12RJf9WcESvuhkaQdwg4M156upTkhPebRjrry1isyd5zfUBhPf9XN9XkJvYdcRqKBaktk1t3x6c4oVSRLtW",
  "key4": "31hxDy4KbVjtMxMyFKnYZJN5MJNqNHh7xwr3v4MHNGMGCcBBKWrN9H1FfYBammwjGza4u8NGnNw5AyDGLnzfeb5r",
  "key5": "3DG4achUX4ciT9raxXJkSkqVUi34MPYFaWDgk4tXyV8BfuWKRhsNcc6Dr1ymrPVVoWPQQjuemWJQRrNaD4FAii2P",
  "key6": "5FJgvpWy3bNeKdrN933uHXdgySLofiJGwfjiUdWvGN98z3495jkh2KrRDnFGcBau8za3dm8SXgfogi3QJzLZyS3Z",
  "key7": "9s1irZN3fDw2aU4M1Fvzb5yesgbsNGwtEJZp85NusbPAxMFwyTR8YPnF6q3NPNfSbzrp5pH5cpYLaJR4uw14TRb",
  "key8": "5puwv4jDrg3q7hfaWGcNjwq261WtUzLzd49FXMs8ZbAiCfeav7yY5CBpPG5pwvWP2gYmQrnh99g7iJjJ2J52Kdzp",
  "key9": "4Zc8L5qS7yTkZatKrrLGuTuYo4LG4YnyZ3sc9fD65JeBsjetznKhBJLivbW8wu9cozdF2VH9DfFXsAsh6EisWLEJ",
  "key10": "BJswgpRems4pUvjGtBjxazcABhr24jcCNtusZ8BXBb12fgC3YzKyrSywb4nfEhCEbTaFRs9h9oVSrS3ugSruxvi",
  "key11": "2qWUMv2Fjt3YBKyJrYT5Xd4z7BgN8QFocuspmKZK1SvBM7z6EQpb7UeeuTDi26wcjnmuTiuedVx8zZF5SsQq1ax",
  "key12": "3Hav4v4wLkKFXGXdkUMrYkXYkgfqZf3UFHbwJr4Ku24xUU3eHRWk6NPaQDDk9bnMWMujgo4w9XgmMDWweAcRwbnm",
  "key13": "3A9VEXHTeVpiWWYMDbLcxo5ZMoFimZZSguv3fPacSJsQesUyzCkmXhzGG8fFTT5Y5FgMwJa1SCfUC7spoNDonw82",
  "key14": "3iCis2Ne8SKiLSB4swC46ERhM2VKKzT8eheQdh1aK1V18vpTUMHJ8kB6MxYVYZMR3yzAi7Cbzf7f6s1fAdpKcwAM",
  "key15": "5Q9618usj2GZn5rf7ATUo7w6hH8tbaj7TnAwP8HQGKfLud8U173iUuKUb26MyBgew4JpoeHWwyxPMbN9TcXZs7Nc",
  "key16": "574oNJPM7YepZ3HXgK7zVxNGLyigKf5xEidYpkxKnCitRhpQQkRkrJjQxbYx1vAKxNBxGCrigzAprpKef26W6DYw",
  "key17": "3hkdvnCG11ykLbV1jqyCwAaF1Kxgywm3DSnZVrEpkbQnyApqt2hbTQTP8bwLAFv21dv2BAPs7NJSzLPeBADcF7SP",
  "key18": "2BQVCFSBdi5BpgapVp2YMWN48fVFrrK75kC1PdyZEadh3ZCPZt73Ro1wX7cQqHX8f1AHnZKgZkMZBUoThGPui88N",
  "key19": "2TXvQ2E68eqSVwr4ojaELrG7Pi4XAgynXAjF6YepjrtYM3Ho3Vhox4X23FMSTmmrbnLPF1HgabhMTCqd2pR46p8x",
  "key20": "5NxvzuziSR8juEZGimVUwcK2Axwvx4Tf6SbVeYC4dbTJ2jBQrEfYttFLj67jMcJupdXgLDV5Q5wcHSiEHv6TdFBT",
  "key21": "2ubZeXFK39ppx2HVrN9qaH7CyaRPENh2KWcdNQUsmEYgoDtDUCLGdWvmqpgxjrmX9qSSjRH6JJxYkxfuFKgr5yX1",
  "key22": "3LGLTmPGS198UDz1Z8bUTZ8YoGytACaLRHMU59W7NpSToPw8CtAqLNZhR9iEmD6NdSeXL7BhbaFTnCdnJpkBUKVW",
  "key23": "K1rY41zbE56jk7hr3t3NV8ibRbm2CB3v7Ngwg7XtzXNnGWaLcJbCSfUGo5QGmG3REAsiErouHNMVQ9x2tk1qnFK",
  "key24": "dNs7bbXgPAb2RKgEquXvbF3TcexijTKou99EJDHRHbv1kkQE2tqLu6m7J8fKQuYMCKT7QnTdkYQSHmVivGLXJDa",
  "key25": "RUs67WusbaxyZZLbuT8BxLhjaKrP3RNzKrhDYPHhy3M2saapoJZdTJaoKQZCszVTYm5u8ieyMtQoYSYmrr8GzF6",
  "key26": "2aphHLwhMatHe4RiEsUnhAmumQEkhMKrGyXdq3gks4Vp5p4oBptCwPfx4irLkSu5FnZW2XKCoJvcaxJAjyqEYt21",
  "key27": "4kqxe8ZjVVp8yidCffQECp9sQEsxhVeBRtLgjV4x4XAoADXHKR4mtYJBd1q8FsbhY6HgedF6Snabfm6yqxFvHCyX",
  "key28": "5JoN89q4nJT2q3ixMDdm5HbRAWuVcEFR1AwGp1W82qCRD4q3Fc9DTn5qpGt2ykrD6raEMTzykU4by5JrMHaxLo8g",
  "key29": "4oDXioaQQB3pK6S72oAqi3QuEoyngLcFNPqbQ6Vdp9T3bxwoHhpCQ8Ze84kURGhGDBxaHocSU16upFRvjBci4tnq",
  "key30": "2NooXMFwTDSsbW7gHTdkuQgtcUWxw76P8f7CEo2itiP1Ws6ncggLxWB5ub3e3Y3yRZe2XpjfqAQpcqjCbj6NkEWf"
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
