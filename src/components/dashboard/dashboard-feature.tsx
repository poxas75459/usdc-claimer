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
    "3rxfSUdCYW4i6vC9C2jAdHMjNF9SNfTrnypRnEGRebJVobsicE7F6pM9FsZHb36XV52p1tbGPuVbmYewGHLY9K7L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vzikns6xD6qTT5w35eufMSVH7eAphjSBApgUHczSUfXqtbAhedzs1F6qviRw2jp8BRtmbEedW9kga88GojbtRzu",
  "key1": "bkqP7hs4bXDg9CdeDkA1k9Hf2CUWrzVqnMzypWxn57Wf7BKCEvsum5QTrJewqxRKAzvs3D1Brt2nNH9wisRonmR",
  "key2": "28HEUePozK5PDLDhrDsvFozjtyciTS4oRjs5vTHSom46QFRz2jrYkt7iC3eEnRnBQStGCpEm6czWGVTfrct5azhq",
  "key3": "3fQQWXpBmdTGCdhe4Pyg58vWsAEVUdipeNrF4Q2YtDkLo7F5LrfTCHc9Rgi9F66N6hNYttq1FcirtjrFfAZNR3Yt",
  "key4": "35GrXXmMAZkq8zzfj3aEMijqCjFWbgDinZg2cpr9oytcTgWQ8NyBPxw8NRVZ5C39eVNVVoaTpFNSvYX9yy1YsB6t",
  "key5": "2VqE4xqh7daMgANvffewks8ghueVUuq6a7KyyJ9WM9aSgLCBaNasCXTVqnK6jGvom22rGtEVekp623YrFDzf1WaL",
  "key6": "2uXkNEEpGANuyVCNEoW4hqczQQ8t6bs2D6bPcKP6fJoLfVZP7SUb8fKfP9J89oFKspCddYqmi5BGa3YBDKyD6X2P",
  "key7": "3wRo8BDyGsPB7V8WbvNWcTXUwGKqLpFCjAWLZ21mhsGPHDbtozYs6qJretBTpvoDSCTJrUvF2w5mgUDBeWfkDW5B",
  "key8": "4d7Axi2QNoYDoQXEPv8G6aFGJsEv7PzdgzUUdW8ubg88b5yujxRFZdtTVofwLeSkG3FMhZtD7qKRsHkB7aEeEtod",
  "key9": "sHeDVAojU6RJWmdMARoSTU1gMbMQp8PXL76TVrkyJhrjaQyddNmJFeSEoCrVjBdmawn1R9akwHejzddoxXiePpY",
  "key10": "4mXCPXLzULdQDxmEM4XiEqUGZgVVUbJCtE3sEWo9Dj749U54fgeM4Wk1cqSciCrGbkmwwWrUyMGnfPyoz8u9oHW4",
  "key11": "4cqZYNoQjgrAeT8fENysQgq9TowM4faARezLHiSPu8dQa6y2soKq35RzRdotmHE1XU7RZ9FtZS9dt1p3SYpXcPLF",
  "key12": "2PLuG2UpxmkLYZkVM5fF34NdMwYQjzhhSbRwurgzNWu9sQ7dtSJ9h3FpFxP1TkETmXytjkBRYponjFfTVuYD863V",
  "key13": "5uMim3Qd5HgetMZ4TwZ1zDcdESpxUZqzBUNzFrT586YpwgUhdbT1ri6JYJh2E71NaFQGNUE4mf38kadzCNgUPrCP",
  "key14": "3KPpzhgy7vNK4ugyusESQn6FHJcH7qca6RH3p38BSmK5TNR4aEYSvgjpNgncmKTAAFQg9xauhXRgQbHbEgrYgyL3",
  "key15": "5YBugrJ97PQhLwWzTyFsrdcFdVc7mM5SeQxSmzqRRk6BcxAchZWcSCTUQ1GkoAGTVGocSWuG6o4GpZh3be2zKuGy",
  "key16": "3EimFGqfd9axqmTWdseTijvrmEqKfie2Rxvk6h4gLrXZ6BT3tgY9stYFqYxNjfxFzLum7KLH5PRydc67YGDnn5DQ",
  "key17": "5eN1qSpxzRq4HbYZU1hARTLjG3Gnct4EGQeC7ZxDC4L8fYJCidCrmrF6K9xVEMhwjgavH1U78ocC5oMkcQ86hSAY",
  "key18": "2Ps8urckMqgf3QDckouTZhiHjEQzrvxbW4SuQZFnAuqqrwon82E4LsmXrkHrzCBS4RVte6Ae6b6r6FnmweqJoJjj",
  "key19": "2gftXo6cY9o4P1HnrpABNNdrkNjixuTjUzmM6WFghBSdi8YLcys7Uh6XRVGXnvZEbs5dS3ZvxdxnmRRnjhAQacub",
  "key20": "2f44Y31eiUCBJQ7z94rqnSdamDCSt8ryKpwxNdTYbCNtGTvm62KofEviqjWQSMSrntdQwCzX383Es2PgfkwyWm3D",
  "key21": "UmEphfLJVn49YTz5nbJG7WbS4dwLA5jSXiECifQ6jTD2HGJ3bLjhBj9icxw1V1j75TMvcPHGbiJbxuQTLuanShA",
  "key22": "4v8BURjnQJRA1HwnYNQwGh9mVDxH9HFvHtxS9NPrZWhznHM1HEdMqBiyAKgTB8cjHnMjTMrdHLiRm8YeD9dVwrZM",
  "key23": "4zQuGsXYwQVmt4DkWEmfLH7BgbyhgfQTSq11zZbsRUanPFPWUtrsb69fKjbpaxKmrzgEo18ymZUxg23A3jmxtjNB",
  "key24": "me5PWZNAKnV3s8m5u9EuEmbyvmHH5QrG3bBctS95V9eLyoqfWGKGhTuH2JkQp3LTi8tFdsDjvkktwA6pHzYYzpu",
  "key25": "38kDVQFJ5FLFpAeDMyHuRUbWVNTSAH7oUFDanszrTGLB6bCGr7NfdsnBTokzYnGVurmxsGhDBAYWZxGcmJ2PXbhM",
  "key26": "5N5WZVWFsJokfUwQJbDFnhSg6qRYbVbgFwQ1zCpQo1DBvNFkK94zG3wfmyCHFZJJB1MBQ9PvqRaxnxWh1uzkrpot",
  "key27": "2UyCQALjtG1WtG65cfxoyudBgkZEDK7QffuMFZ46rNY4zdZimpuFyUp4jf3rKFhDeVDqZmd9N6Rpycy5HYxetHXN",
  "key28": "3D6tTF6YAn3famEVnFrv6ZjfvgfD5BeH5FJs1CT1SQAAeBRhZA9bMzhHtRPPDZ8M5qsZ3ZByprdF9pBJQNk3hbL9",
  "key29": "QgcFKpVpuafWfLSXY694VrePf9tiN4WRfgZCuAsc1VwHoa5nTeesd3KvimEwVQrsfaA37M3ikiHLAh523cfasGh",
  "key30": "3ADWuFAH6a1g57JW5dSdfWvBqkXrdYhKQ6wb8V9SRM9Q1ewgY13d3DSN8bnhjhVobA6P6gpNCxUDKa8GhS7yvpZN"
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
