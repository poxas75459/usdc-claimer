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
    "2VJ7aVtYM755X6VFPGvUBF5CnJW25WhjWMptPsEeyg58sdswAq4esXchV6WHcW3NqHk4Az3CAED1tPYu8Q5SnL7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QjwWcKRJnXiYyaUiaX4E3FThCc6cgBXVbcRTf3ccAZHFv6GwKuRpqLDRsp8Pa1ni373fxbcWZx9ePZUrdzJqcVG",
  "key1": "ngVGxv53wbWKKsP1UL16AtgJHuBekbjBWFodsCthWR966Y6NULNn75zbBTPeBpSARmkfQWQpiGEJbLmgGTHkK6J",
  "key2": "2V9FYzVnxv1xe8SMyasjAsRwEvN3EAr4sY3w2hPXQYDToroEUhCjAWfuTskYHA4X6u9xCwA6QQKvwEb2CuRXrbJv",
  "key3": "6UFi9tBLos7x9GuG2REoXyEczF7QbdGDDj11fG5voTZGUvKzn88hhux3QX2oK8VWgLBFhJQNFGpD7yUZ8zvEydZ",
  "key4": "VQ3dMw3MdLJ3BVZoZmVTtCaYr5HeWierPxNft85VcQCgmQTLPej8BYEmaqDmpHXvWNL9q6wpnvv5R7MMMpZBBjz",
  "key5": "2RpJcmVgYVLW1tqjykyvvFubKr7kUUSyAbqr1eBqfrad66NgzDXyWTcn1Tciuu8JT2FLTPkMwQnbLKT1hN3nqC8d",
  "key6": "5AvYJBxqEaUxJseQ9RAYrS55qQfPH4d33CiPq4SrXmviV1uGyQeY2HBndy1AArh8gEeNdeSGFGGm44aCixL383tK",
  "key7": "66Q3oJUTdkcftiMDd8Drre6uw5TLgnnDzGA2pNf33Qavt1uJcrbgByg7cAjTjrp4xu4XD7kueahvNp6Zngj3aTpe",
  "key8": "5GPBPrjr8bnkE9Q73ThKo6iNM2EpRc56Ps4TpnLpQc3JS5wpbywBtMrhGmYQXd3SyTN3fRpXiDBnDQabCdDtowdu",
  "key9": "AfYSwCVmR7GH75DDUyQPgTqnrCtH117jb5Co1V6EHGtQnNriPrTD1w3zz6tnQgn3Z74Ud3jrrzyScaQyv8gv432",
  "key10": "59HwKerRUpgefjZqv5ZuyXAiBaTqaCTHET3Sak7NDcFBQ1aaWDpMqXPEoCz8szZUY3Nw1SySvhYr65rFuWFwT6YN",
  "key11": "oJrKfUgHrMa94cS8euy4kKhMpB7tkMQEHruxtsDEpeTqMHUVAfHRW7qAKb5D4mSwopHd9REH3oqaoUSXGXrafR5",
  "key12": "2Htk2dESsViS4vcVhzza8t2NtVuxNvWAHFdrznFsSZzfJBDRbkWeSCbYSpqRvLjxzzkUUhNkxstTbnnQiRv9moZF",
  "key13": "4PgXcNBvhNoodaUatkvzSpDnketJPeQWEbY8DTWj1kRhrYNvMcuqmhGCHTFMHTDwgdV6gsf4wfEe7D66FKYtaqbV",
  "key14": "2bEQb41oqoeQ45fwEnzpqgKJzBpQXfTrYzwkd6eMCEuLvL36MrWFjcWAGwbiHKHAkSmeR5PviKhi2SGxnSkjnVdp",
  "key15": "94t4Ae5jmu5m2LbS6jSDhvCTAZWJFsG8XARQf6SLAyCaKQ34AkgGu1TeSUr8pBJAiKr12JJgwrXigyKq1E2VoMm",
  "key16": "5K6Wf4KtbERmBzBKw7s5jYsUcdEzAc6MbogDkciymj82qLtgdq1efsg4RwMeVrUZoauQgyyB3RZHp8hWh4vfyL9N",
  "key17": "5x2Bmrdx1WbER7sy7XqKxJDZnRC87HXfgUAJGQCFJtQj3qF7MpZvMMKTkVnT68sW43ZAVCzrrwZyXXVzLYNY1XEH",
  "key18": "2nTikctKP6adxR6bhmcE3NxsGGyXfike47ijyYbcqZLAozNsNZqRAoQ4oJ6v7RvoKmfLDHZW42zmkYArZP5XYhh7",
  "key19": "5yodRyhXKmPFk2uoJnyv2EvwJzYSP2wCEK63ExJCqiJ3vRj68D6E5dUS42H9LxcckoYZ1hXF47RBg1Mw6SwUbGpd",
  "key20": "C1iCydbvJEZdhwxtpWMFdCmPGNtPrzfTzp8umiMCahrhdHW4tfDQ8pbReCZ6YFH1snhPx1Kq3KqP8NtjXjsCH4X",
  "key21": "4jnp6JdH6Q1wrbRMb81oPFmvYPZ9gcm3RSLht4ZuLWHxgqTL5wVbUrGLQakmj3Xod77dmxc8yB8PRW6bnwGuv3tE",
  "key22": "386u2UFLi7JnJY417W6Du26eTe5tfJ6qvoMR1wPVWRzZRPMfc4G3UXp64n5SJBnZomwDJZjAZaaasCy98iRFEj5v",
  "key23": "27UBjRbpjwaLSWy4vFirdH8NPWK46XNXd9qRiiDtuwBZjyVnNKRMd5yyQD3U5wLmgZKaJQ6HGx5CSvD4wxkkksfP",
  "key24": "2XjfYpBsjP43L6d55ZQ55cwBRU9dKz7Cu5JwXBmirKVsPnozNwVezCUYWB9y6AQm2btmDeCb5jzbMx7p8PYXT5kC",
  "key25": "65EXdppAaEyviLeXhbALk1yhV87kU95bWyGH6KyfgjaWWkee24XnDbFtwV9QeDZtCawZhfYvC8aLwVjWYqrXFW7a",
  "key26": "4LQxbTDrQdeZEnpbQ6iYuEa5igfk2cbXj1mvj4Z5KnyTGFrCH2Kwz5bZmFe9uZqWQ1YgEzs8cRYKKifoNaXXDfYd",
  "key27": "55MKaSGpJg8AWmeGUBerwqFEzbcXsLi8bTpM5RXXVR6cteZhGqKPcPoNnw7LwgyFEngiaWaUBZFscV7Nn3jjMAGx",
  "key28": "B24ZqtKMT4xBR3KxoChh3Q8yiYXBWkcxCPjDL6nZW7y6xuwPtf1UgFecQDkMETxqhhwZjmwD5JGNQ3EKAxBmkcF",
  "key29": "4utYpJG2SLFdKhSgSTXLJzN59ebfcUc9KGkUkF6SouPKpnwGP1VmVsTjuT6miiaZYAfkGA43yrLn9LGFMFraAu7J",
  "key30": "4b5tWDqKZudK3T3KqnHoXbqsW7MRNgatTU1YiY5jtbqiJCXiayFEXhojeaCmZtn27BE6RBFZczuerUUwZx88z5rZ"
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
