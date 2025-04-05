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
    "2W1shp3yKZZNMnPSoiGxqfvfVnUiiX3eqDGQFVHgavw9w1UQBQFa5GTJ1T6DDpRUU6G519XBYXiVjVZUjHXnJe5A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rxoazs9LdZf9krzznagYnvtbspDz8mAQe9d7UADgPFGEQtpE3tEe6fK8xQ85Pp3SxgdYTJ2A2xeTACqqBimBrzX",
  "key1": "3em1tKgtur6dpMmVRdFnKUeKauhRe29gpNtQXzS8Nw9xMqnXQNDBugQQVMtVbDuaaZsRfiFh4aanCDmXr89gWfFL",
  "key2": "5PC11zuALxxxHYKPqaN9D96n3gQKteJERrCZfiL4zzf5ZdptUayFyeA5tTUuiiKSn3dbPh1wQ29K4vLEcUExXrfp",
  "key3": "2HSRHMh1EjTvbUcwqL3kdN1GGkVaqR1qt1EKwzc3vmPmZZuznPUpcbQZJ8o1Z9csHGAroCNF6Xb6wY8FtGVnto53",
  "key4": "5WbCDUA5npdGX5arEAmU9aCMS1jFZTxTxzVn55dZnasPA6vkGxyiD5LC99XCHk3fYXUf8YkNhUgBMsCehDjL9Gvw",
  "key5": "2zGaLzvJqjmNugATb6RtWEP7ehezfhd8DumhQEnx1SFH3w5U49gwTYSwGypM5PYhiypE9kcQfH5h9M6p5wpdnrky",
  "key6": "owf2hGpCH8dYMvEAu3cBp2NyPn8qnK1f7RCfykhLdzeswm7LEs3oWF8fJCkqUqB2H7QnmMYGFigm2Xcx8HYo9y8",
  "key7": "zTmR6LkAahHsSZHQUZEh4aDMqgw3w3bvAstsuHaeS4FgF7gcazdhxkK9rDXSf4UMdwQ7Cmr5BW1QJjABcuXKCWo",
  "key8": "5b51oR61VmSDU1oGQ8cyHz8AKgh98f6bBqhh1sFaH3HJNi1E7ftvxL6CTa21XpNUs5pJ5sPFxgsdbFrJDq474XdV",
  "key9": "3G3kX9WNQimxRQvqoszfKNk2MU8goyyBXraDoCPJNVwL2zTRxypYXMZVpxxjPc2EwKsdunsXuqhZEq8Vov7s8gCa",
  "key10": "2vdhUc3xamXPqqELg35YGZ8VYSvyD3ZDdJcxDKrUwLiwP4pd1SiNseub7gmWPVMT1TkKjCSpPnWtcGHoQFpGmMhv",
  "key11": "4N8vWRn1tCjzNRNHVTDMc8XNzH96tx79vErXU6Wn95KujYYPLscPhr6XR5hnEw9YqHHzfLc33ZoGpQfwxuT3yKPB",
  "key12": "4HWgi3NGhDQHy375ZJ9EpC4Dc8NrABUauwikBuWJLXk5piGx7tbr3EfPVhoihJ4P6W2fztjEdL1supxdUqK7eztw",
  "key13": "2NqrWWStE7nEFtxfA2ZcaXhF5fDQADWscfzZDogdPNpAcWpW3YqNAsqpEeZs5p1iDyuXZaHA7sC2J9j2ohAx6v8F",
  "key14": "5suubUCSjz1kEVq8zpAR1QqgTsXYQgeAE57wvs87kgRpJECeWBG3tuJHPmgixD15PDzGV6TsfWJB2fwu2D5gcxCL",
  "key15": "4sug5Cn8HsT8Z7EG1BR83DHLTvKTRHJDuzWqXWrDikUCtrqAFpGwq6kdmfP6r1kgJ9CuZX59C3w1rKAVvaN17h9q",
  "key16": "5itNwTpgBc67oPm5wyWQjVEYwJM1y79zPPWdp1wtmY6LRW1geTnseyWro9gpXZMQQiL6NMgF75JFnGhRY6kFQPn7",
  "key17": "2HaWzf6F7e8dM2zi2GCzEp8aguTGoKxAcuvS2Eh4FEufm2XqBPw6Rg86BStQtgchudLfSZMs18Eh1ranimCBtVa6",
  "key18": "2SSgZGSZFN77ddsTVoJxrXkXNxqfxGeLsuzJAkqHNzH939ZkT3DBW8ktvRCsWh5sZMEat2DFpqNwGYNxZ1CJAnGZ",
  "key19": "R4jHLwCuVbELwxKDK5XYSi2dTnStk67UjDf6hdv5z8edMwecDmR4psKqTGXPZUgrb8N5Rwy9XPtjnJ2791E1eqg",
  "key20": "58L3KhBZAuMo7CGGeyaG7nHJmb29hiFQ2Vmcbn2hE9w8HYDoixGzk4hb5zn6VLnzUbLDc5bRvmnKhaCtyFEhKNbD",
  "key21": "5nj77KLoXsYDa3EJcz8dETyUFfbruD5XPn9tL6pnEjaacR2fueXZt7kXFynsVKzbmFSwzuiXQ3vboYqSNhurNDzH",
  "key22": "w8JgH5boB6NwccfLLjCcW8tSxmy5kmHvkcyMgC3dnDAKX7k12tQENaKDpTdqqtQADsvMa5zpeqEFM5PQkqJ8SCH",
  "key23": "5HrQiP8tzKHKh1kteWZkgDdMtgVSoLSohAeDTPfBgtYNg9uQaDjYmNzuVPujZYgAkHLndFnBkgLog4q8cv2A6Gd5",
  "key24": "rdW8wJcuQ4pkwWrfNAgpqFzpRrnXVDo4TpiTime11GUqryYWC7LiBwbt6WUhhkELUUg2b5XKpcTnQs2iJirYh6a",
  "key25": "4F5LCKj5a44KG3LwhCnw4iisPAUUa5tW3AUzta8dxovKuSwMf5tbcobtiPU2TBJW1YMDTPDna7GwZNnuqopXra5N",
  "key26": "DYdTBRZTs66LnKgsp8rvASWSit8qybBZUeR8JLR8F1C3pocZoQFxAXAMWHUXaGwNqdVixGwMLCHejBVwo5XVtQk",
  "key27": "63KxygHDEDPPVg6RCVN7mvgQQCNHe1CbWpVD3jVKjDcuGu7P2ThGVsWLAfaTX6CmdLe4YN1ULKVDkJ7egioQBHB",
  "key28": "5VUdCBtVR9FMKpQ4BCHhdD5Y75hnFfxWtGsg3eFaguqUiqtmMWJPKGduzHor5jhqkvwofw1kLgmCyfMFdQgruhN",
  "key29": "61Fxf3SdKbRhwENZQBYo9uVFuhyJXoVXmeKe9ANT2mHDLDqKjtN45CWAzCTzJadzwcJcgbMQ7BQpbnrwn9tveRA2",
  "key30": "2V5VRZBbpkbDjteWQc9jHmsCzHU4eJa7TrZfFHd5DEmNDTvivoSQUrGncVNWtzG7FiUUysqJM9efxvzVXB3KX2aj",
  "key31": "4qQxfvqjsqTLPfeGkf7spoVjS2BcETUAm5Hg4B4KiFxLeyBncBpfFg2yGguGhVXzDAKpCJ1AhsYGwfK6AZauzhCJ",
  "key32": "5mzwWC4UunFmprJAK7zhG9tfBL2PHdAtDVN1UGQB7na4AxxfSEbUQzG8Gs5H7ptunLbwXE4b7e5WgocXpssLAZ49",
  "key33": "4VpeCoSNUTudfqjrxQPLvchF8aBnHAU8Aj3yjuymNhAkL1r1iygd5BKfaBS66P9Y1vze2i7P2rjhCJHcNkHkpdXg",
  "key34": "4wj89ENX7tvBRz8N5ug6rXWphWDHWdARgaz8ncshbFwyVLBgd969eKSE18NJfjiXJ6qSnSgbKyARkchmSUJJbLcc"
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
