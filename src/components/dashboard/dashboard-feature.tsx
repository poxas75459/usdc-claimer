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
    "2iJf1cyUzNhZ657j35Ck4AsXeFU2bE57CGxK7eNcayFpznM2gtdi5MUhYUQeNZ7j1P1vR2N37wRMSSJk82TH7iAD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zXz6Jzp4Fem2NeCrttfKrDE19c5abKmW7ePadAxkXmdjznjFPhrb9fCwcUvJF3KvewpTFk4C5sHm1nFGNosyrUV",
  "key1": "4sjwMYpUAkJ7gNsuEhmdz8CUXgWfg8SST7yNfH7ZjrgjkMfKLYCmZPEkEUVQeY8dHpP6n3dic5uTVYT3H33bBBHq",
  "key2": "3ZfTfznL99J7mFL2DmMWvuJwMRHzq2SyDmieZE7WyjkkSjMa6vLEjjTG4A7uYC5mAjK4qMHkze2H8USRp5Q19m4v",
  "key3": "3jH2sEFQ5jDzcRjRatn6hogFfd9uxpNAPVj7qEPxAtV4EVViEDxEFRNMaZ9jK92t97gcbpd9xYZfyJE6GkUDmVa9",
  "key4": "3k5cntLWmb4ty2qMcDfmUnHnSxywucSPzxwLiuD9zMTTV6LipZKoh2ekgj4hpVZ2oyEAj2yMUFkuL73tawPfu4Zu",
  "key5": "5iPFyGJC2J2oin3YfJCqUKfbStVTsRboV8HrWpawZoHcpd681qPnPM7R3aD9jQcVeBQCLHv9Ndorgx8A7p416afL",
  "key6": "38PzDNtDZCr388B2ejNtARXCRRLvqW2UPvgZ7eSGv1fiAYDstqqVifBRgWTY97iwbmh4ZmUtNA5xryQYcL6E2RtK",
  "key7": "2RkhnKMPBMJh8e7BQsGoyA1hKFK61fwqW6QhqhPXy5omGmykan2GBGWkp7qGipbpKBC7cxV63NSqrRmwjksDAu7D",
  "key8": "2i8FixuzEBMh3MX6xDWSbQAZ3eG1gUbJqPdFBMQyTXyDcR5R2gPN3UDh9tKP64rDXe8G77k6SGAocLgNT18GHjqj",
  "key9": "4sv44wVU8EMa9jmYLYfpHSdQGKTjXuQXWfnVk1V3AfEcL11memHU974beAR73ZgmmmG88CCC8URLbcwVyQrZKjsX",
  "key10": "aLhHfrCmdp351aHnmr6jbkeP9GtENnh1KCBbbEfJV5jeF1TPgikDjzkBPWc11zAUWf2V6m78dSnzDVEqWKZ8X5t",
  "key11": "gNPSsmt2GRQ1MkLvQQLREfGuu7ZU6Ue4UkxjdYrBBip7Prs7RqxtAy5b6R25uW5fUWuNipSxWjdxube3ENNkLsg",
  "key12": "oEMFg365sTf9ZwVJTnUDyDnCwTHLHMmQR2PsgoxifTHZXfUYXa3g8SCcbNkRaPiMqhd6aWUS4imQFhBsv4bBccP",
  "key13": "4ScgsnKCmju854VHzAuCy1AVK7Ue1H1t8BuvhDiVCZh2ErwENjWyC7myMBgD3y14bZQFmYPKMQv3erAGCi4AcQd4",
  "key14": "2gwRAbHvwWy5AGn5rtgU18Gwcb1Xo15SrWLiaDZXHbYpbMRqxGhiqEXjaa6mzjgs9L6mxSDH6YyWsYmS6w65g6dU",
  "key15": "3Yo1Jc9d6rTNNkBaB2tcZecD2V6pAWKVeMkQficZLfX3hf5kVYnjfE2RPfTcBpkpqE25jGKwWWMG45TBU77CdfUY",
  "key16": "2UgJzCidhngv5LmVH3yFy8WNKGEkZipDfXsvnXsFG5To5FkgfRL1nuoqXqMLYA8pF1rRFd6dsTN6tJxCDbM98Ued",
  "key17": "3f1EHBMqiCJCgwmJ2Vqb1hMMwdtd4KreYpeHjD1GHmawcH3A9kw7erisok31U97xm911bfHddux6ff288mm6fjKR",
  "key18": "2aGe64wEHRM2A1WmxskZNxhYKkYcbTKPtN56NcizQbTSjqHAxcts1EXPZjQQ5JcVLxTgpLhX1tuKi41qC9bdjGpq",
  "key19": "2nNLGNHLn6NthUvKr1Ti9FbnJC2AaazYqEbpsvvuG188iBGSoZdh7gZBf3gfyCPzMuXerucb8DWdSxKuV5gU5EjX",
  "key20": "58vw7F9MHNNWxWvV46nfXU2MWg4VeCDnf4gNGhDiUq96sSV2E7WyrXid756EQ4uHWYz5TA1eBCsvETp5yLu9ur8Q",
  "key21": "4i6MV4HNTuWGNcUCYoRHJE5Ycn6Pn3QPfeBtEWriKLiSgfAvBHc7LZNTbuiKc5hRx6SToCfqAtwx3RndWaADZ1kg",
  "key22": "dDv4f744XV51kuBCi5aN6z8NKabDH2gSZdL4Kfk1rKK7TcxS17HxixgpkpKPpHFjac2usQ9Nmdu4LBybCuVL2Bp",
  "key23": "o1e2j1u7NGWVJou41ygTqUNbd4iJFwhsax7qQXwSYykt72YkPHNeC8CQWVqncYiJ4Pborf5wRa8tFXND3rjyeMn",
  "key24": "66R6h3DYqz32TinBY977YbpfvyebmzwtR1nKT9TGFQtzuKN1JybvCRbnHXQ6FbasVM6yJgZQJwPiakiJ18SaqVMd",
  "key25": "2oD7XN284NCmaRjFFUUUGqupNVwsft4frQxBFQQnbmfoRxggCgqQt7SKYQKUc6BB59XjQ6DbKBHzLr3KdWMFBVW",
  "key26": "657HWxjTdAXEja9dfq1zxNBzdPCGpBirU2caRPVh89yDjVdVq8Mh68spKWYUj5cxZKLS27SdD3einD4njRT13tRe",
  "key27": "29m25PbtYN4v6witsvfnRn7G3VqmivQB6GhxrPXrhginnVN4mXwtHsikgbeUSN6D1Xwjaie4VtHsisWA8ggexByN",
  "key28": "gtqoD8LbBdNb4j8HZdv9nTDsVRAfLokJhVrrcpKM3NBDQJ7NkNyNECyPgz9hT48jhK6runkS3szb9smsLAbyGUH",
  "key29": "2U5b7J1d5DB89DK5nEUL1QGnX5HgamSdbbcBK8UFaxFuyjmXH9CA5qGuDAXYqmPyfrMb9e5VCAht3wc2A8mVTKqd",
  "key30": "36ih7amxrqLVEdaheaVcsg78qQuWTzchnARvD4vBrGyUwKoxgxWF1WtwyY4dQgjAtScDgBos7k923RoZFKXccU5",
  "key31": "5X7q9H9WdMpW8KrdF9YKEUWXCzVwXSAEwzqVBKGBkmQtEApbTXLJGCXSpKB3sNaeG4uNbzHdcwVnVJbjJtA7NY4v",
  "key32": "3SzkUezmrmf2aPN4yvhq5vV8VW3e8W7Qcd1xbouSqKxjf5Uy6f1aKuPkrZFRJqHKtGhqUm3pihE3e7wCpr5JBbdk",
  "key33": "47JcbtsDARbzT1LnNxbD1QupXziNysDfcCkV6KSLNB6WQagXGSEzrwvy6pwDW8miL6x3W2EYRrBbkw2Lc9cKkeEZ"
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
