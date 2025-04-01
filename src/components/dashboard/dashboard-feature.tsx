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
    "4Q4UAbHny3cBfsvsJrNqXkpDVa7uYeRrdMLdmQ8h2AN4qZAi7u5Ze6SW2ktRuxBKnZG3d8FSnaUdnM71YR9CkaLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oi3piXF1FS8DyCVFfvABf2wSTibbPD19RYJaNqrvozZJ6dsA8GiMHDRvxbvsFeuPmNHEjAzhDYVKEiQr9uEgsxc",
  "key1": "3ZpUgmjSsoWn4MY9jixfLjSPjrsvVHMbACpfvWj9niwXnbmrFQPTH4gCV6rEsxZe2QM57zQ57gCcdY1pVXuPCBBu",
  "key2": "28VqXLJ8c5sWLwyiue9SNXpG64XxzdqgQszEqbmXiaJPA6gDWAaMmpkh34aWFkLAf1zbRRudLuyi3jBArGif6bvW",
  "key3": "mp7519bmVfTUDKxVJddjsFVLCXS8yq8moV27LGgLJ9Cr8vo1cpakafCUcCZLE46boNdvqh6uxRP7rZCtJs2yAja",
  "key4": "4ArbyEChAKsTkbsFkms5UJ9ixD8e4V62JadsRgJggynpHnprysCuTbZcPHNjbXuSNcZDB49uGJUaHs3XxX692jY8",
  "key5": "42pSMEz1TPopVjsHur3vt8d1UtM5JidCSKQqEJL9jWYYo6hhHi8ULZ2RqrPy5FRX81TAy2YQDmELgobqkZGdtr6x",
  "key6": "2HTdsEoXh8mrYTkpXS9ao1v7QtvmJn8sUWwWz2EMm8JpZG6PLCNz5xjqDbMGNaT4NkVkUeazYyLQeTfLurPo89Ja",
  "key7": "3pngBHb7S84P2M753w7SbeBxV2f1N1gu5i88Ztud2Xy4pQLi9ntT4aRY7DV7pPHC6Mv111r6RSdHE2rGZBMSoQCi",
  "key8": "4TaUJAi1V6XuSvXtKZGWWfhGLh3WsVncFPfMw9y66RrD7NE6PTYybZTHYrwkjXBcqYeZ2DAPfYDv2YTjLpC8fkQo",
  "key9": "5LtQFrkAXMyXt2bd1YaavYmhtBWcyWWtm5wYQhdoFmSG6QhwLmaq5M6SQBxrw1VTXYz5vudbCwQWC9VBzhtphccA",
  "key10": "27fy3kHzEkvQQPMYJNeT9QNs8piS823ySq2b73ed5CNudFXw8v3iqkrq8znj3FsTuKCJ1Mg22g8ZeDw15gQCj1et",
  "key11": "3CpKqCSJiPXL7WAyevwq1nd4taGnr7fgJVu5WGGN1wsuzd4w3DhzRbCEK3km274kCKnmbbLUZkC5zjmmKyEALNDN",
  "key12": "3eFWcPrqev538J3m7QptkhjSx5aANMtkWByHcYvLrZ3ukMwF9qPH7DFVsnSpucMmLAMyeokRTynqFGVQ4eaakqtx",
  "key13": "XvVPoys9Fy4bhLHKpNjWmcUWvQdaynWGgS91bui8CaLYeCej9NfyapRkGdQwNjw8T8jRfbbWTqmbehVFYBEh2WV",
  "key14": "4sauVCre1J5yHE5XTCHzopayozdqVX7s9nmVPr7czEpa8wTp99GQ4hpmwNLdnMBsfbCCTzBvN6V1D8pxJnirPpyY",
  "key15": "4zwK3hKZiW58pcGbxNC4DqYStkJnPhBx4VpzBnjuY5fHwzJAQ3KTxWzbcJsddcMyp5eFPxLYwLvfHMyaA63N4SBS",
  "key16": "2NqKZBJPga556bwDc5Dw4Kp6YMmNDBSiXQnr2eBKC1m2c5VvjaJhq9BBHztSk6bEdHuGgwxoAkBbLbLwzgv8gePi",
  "key17": "3DpnU9ooPs7v3hYeybKJq2CJVpvCvuXTWCa59TBHZQhBDiiZhooBZF4DAghLTYM1yFKkYpcJLBF5UVBmZmF5uBJD",
  "key18": "61tgLn8Pen7J7jCUdNEatCNzK2C8zDcCrjZqaPBiqKd1n9iANkPUFuafkEbBp64AK6QEqgYUoSxxB35eiQW2fuLD",
  "key19": "5oMxipnB59TnwhaWpqagWtx4bqYSiE3QJjE5HyuUXRhjfP75F3Tm4Lh3CYUdjYAEPffWATq1DwPHRhSPC8NA5ajy",
  "key20": "4aD8hnRfLv89QsLVXJXCKzgS2YLaHyyTHt9TsZ31Ke1HmSRSMYzZUkQWT1Uy1CCnsmtxaui4Dj6NwPSrq9ey8mPk",
  "key21": "51Gm9RNir3ni3aMUEPcz1a7yxoBTPFB3v2Z1sVcP8U2gPNfiJgA7YtHUikV8nNp9hDDQsunWHdCzutAhCAWJtsAa",
  "key22": "3YxhMXw3Dj13H7NvD5xn9BBzHUWRe2cpXCBLuLERrcNf4RkjXKiQBtkZda8c88HEXq2rbGh95vy2Hwv77KQDczFG",
  "key23": "bbJzsVmfqPe9DdSpiXLB7VKBYNNBeFEcRaQ4e5bx6NPWUx4YPf1Pj4cBLRTG5cLu1MWKWZXxs13HTfDtRBsdznd",
  "key24": "5nMJqx4t7fNktR2JNRk74UkqfZ5LFLfzsscxHYGXGx4g8NeJUf1LtU2gHysExq7bkKfKiZveNxpWkEbN7xWb7Dd"
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
