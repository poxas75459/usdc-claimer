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
    "3eJitK7drSbpNn517kMAyt5n1r5k1TA3hCbWF834i4wTprhtpDmTaBqSvB2NNbf9Ef3y3Dik6SYqmaeNKR2AQxSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M3dhFnm52GiTdip2vid9Hai9zcTFxhDp82qWBnLBZUdBGV1vWpDm7LU2r1xN2LPRBA2gB74bTCzna6mQ9TT1uZU",
  "key1": "2Q8TaBiaJHVpakba4KV1sk1RYMgii4wtpuVukS2t7m9WrqygEpr1ZZVSBkEwNUYFhTDuXU2QcVksSdc5DR14E6hs",
  "key2": "61XXBX8H18CV5DZNULntEPyV1HkFiQ2oma6VfhqRnc7mj6NHiFyjRsM16DptbCzLQmA1Mxe9p4NqS54FFAXBaDB1",
  "key3": "PtZL44p4y9VfmiByM4xuttWBHr5DXwCtoDwCSq3ezRofMdN3t8JNeGm1cLuHYDBDCkkX4cmq72Tff1u8dwar5aP",
  "key4": "5QqFTSr739EmfPyscBTDu2978DNXT91aXHWHeTDSBVPkcHa1VxQ3oW2VAsqE3kVyPk6KdwjzhsRqA9AtaMBDQKnr",
  "key5": "2G1ABEMG3C1iV2x8zyFNhx4PNH6swPFLFydbyPbSFWkFJsTT2ydBj7WsFx92YMtRAT2d1TuKoBgxLpigU7nVNDFo",
  "key6": "4yCvmn61eq116ikFcBjQ3PCeEZhWaCa76pj8Y9nZ7MAfyYVqqEKwxguwerieu8THYQ7EQa5Fh5xp87S3aJYxWChV",
  "key7": "2YyxrGhYjZHi6xMGWKZiiddA3V77m5HhGpBN5GSYm5mXCctfDknScaWqupsxJTzmMRVWUNxPPxnFt7YAqc2j2Uhc",
  "key8": "jVe8U1wnrsAR9GEvrBV5CMvU81GfAmbGyzGjHdBpF488N3ga5ecUENPeUzLMvVpbigy7gctKEwhEvgbzjcyqVgN",
  "key9": "2MPCuwwKVbq5AXGxMAf1cpQRoKdrYu4UF4iFcGi4HJ693XTk3PBQj1JCUCJ5Trw92VCb46y9zVQs8Dy3LnYqTnTG",
  "key10": "2x196qCHEXBkDjFR7jHdC3o5DU4EHBy9DzsbB6Y5AS3e35Cifm6gKhHvSHZpcUFYgiSQt9GY79TqRN8CjS1rRgsC",
  "key11": "2BfvhMZpjU7Y6Zc526oB8a4FtcscYytYuNvbu9EvHXaKC9nF37DkeXFEgjm3tdGec5A8xijd6JTSNdEze37Ajc7d",
  "key12": "5LbocTbXweivshEUpgwb8Q8dMQMzYvodvdrwDhp3t724GEadpBLhf5wBdHG3iMaKXkZ9bRjDzr2bp29zNbdBiTCg",
  "key13": "2EqtFhwLBWUrVtWxdRGhKFENUwzWGuPkKbaPjDNC7yWzPunqwU5A7o45harJSSScfG6zYBRdMnAHixAwxsPFwSQS",
  "key14": "3jRocZ8GX4uzjJUhYXRtNdDwwARRfCqb9kSVnQgWNLbrkbAqVad43Qpp8WFsE2npVihpcC2evm4E8fgHnK2Qqjbn",
  "key15": "58X2d7VK3Kb6dCunqAzhx8D1WsL3ME4JUYbUzZZgq53U8pbuhRgx6FNnunVb4GDAgNn5ytSsv6bG6reEPqQvb7hZ",
  "key16": "4uVkP8qyTvQmh6ewpBjhN4VFbndKp6cixYK8BiWqWcS224bnuHCu1uVUFxsTb6wGRKrun5jx6N7RwLXnBuh3zQnc",
  "key17": "41xYhyB2XhYTLHhofCQ71vxjJNTQ3qfrWHMR2nwoYarX2cYe96TwzRa4QbwCYmzExZsynB5SX3SQUGdQ34vDnFSz",
  "key18": "2Hc6C6zV11cH9ivHbXenwo9NosKmiDsyGpcUgWQtvRCcNpqodjquxac3qmNJQLfceDK91oDdMnNZjE8bcACFebiy",
  "key19": "4ZVeSwwTGZtRk6ghJggvmt8kHENYhXFWNmV4FDuED8z2fg7fnRqepMwybH4FjawGrc4wiavYmjDrKRacSkTSrHqB",
  "key20": "hTrfTEPeRoFTsN6A6iWM7PUZEMZTtYhFszYCpHM7xU1iYp5HwvYF9P9nJ1jiBuDpyYKKfG5tKdzqSFaCJ9n5A7i",
  "key21": "57t5wKj6HLzQtUQmnqJiD6PHLc8MCPUx35kb8XZbf5tFFAq2jjb5ZpvjMhJW5kC1vBZPQ7yxkTbGuACfLcDWBssH",
  "key22": "RS2W9Rek17S4FqtH8pd2Av8JxQpAZUx3ey3iRZyfqciPov9AVfBXxxwicyv5CPZh5EjyLCKTzLH6Av3YwxZroSq",
  "key23": "4yiFfX1efNGMShVqKVySQ28tdwGAMBU7htcqeGUJKeBHJmPnuCT8RGEDAAq7kAXbAzRbebUqRoV2ft2vomhnLcw7",
  "key24": "3BnRrEeEkYBLWAhSU9T5LYAb6yqnbjR2ZRdhkfiaHHHmMZKP4kLYPYCRx1TPtNvDPT3WEjob1Axs1wQGcAeCxiS7",
  "key25": "5pvvA7Dt94o5ZiN4qYdsa2DaY63pdGqhSV2t1d5kEMakbSkFiCFVypphAzZEMdF3hBcmkD63WdF1hQx8VZVLfQ7J",
  "key26": "5firgoCKuikC5P9PeS28Ce6xtjrxKKJseCMzfhNRUsU6LdRH59tCdkeGVvT1tNg8k91ZUFsDAxxmfgk79DuXRSQw",
  "key27": "5qC38STH2cALuAqQzAZqRivKMTeqm5n6hP9c9vG5NySqof95cjWPC6oFQ7njGbKyFNhESJTaiNS23Siq9VrrGNYS",
  "key28": "3Eh9nFNHRerZScC8YDt9qBFrDZxZRDpd33dWMP3Y4KR51xxsY1MEEFh2o2Q6x3d5s99JvCbq2JuiKDb9DW9bTUSk",
  "key29": "5ePtwSyUPUw2UyBhzyYk21qAg3LG4JZQMXKXKAUf1w6JD5JF8ocAyPCRQFpeqHhUFYWkfC44YUBkKBhXmB1ZD2ZN",
  "key30": "5oGJzMwBtj4rHLbY5v23SUW4GABhBU6sPtt1BTpX78UePPCizgTmynBkJdPDdsMLG8Mj9pnZLQos3XKHmyX8NXKS"
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
