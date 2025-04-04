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
    "5kXRmSWimYRSnStF9qf9vejEFxp5mwCSLdwpibmFRdAyZFPKMfdXp5BmbneKrKjQfCNmUDeYKVzejv6w4ziESHki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NYkb5u3EQ46PVf2ixzecAf5BiJLmuXcNUrGtzwxBRpmG5zhHHgCaPyn68GuKaihGC5PmvwrRT5sHCZakf43fojN",
  "key1": "62C22uDtCpJ3Fku9mxPzK6iCPL61NWjoaWa68zarMzs8iHvEZKfoJ33D78bURYvgVo4gE1q5Uv3DV8376fkU1viv",
  "key2": "459eU8bfG8kx45kKvYBPjZHsPpU4wwGa9XYixnd2KKxE41bx2oTvvj1nkLJZfpCWNhC6wk5gUfKBMg8wkrWA7SzL",
  "key3": "4qtvKCSdN5iv2dsH9FVaJQy1FRxs3tNFrkbZVJRrq3dQvThWLZmu4f43dBoqLaGyoQUUShFhU8sBAwAgMBNzP6L7",
  "key4": "2JBqtq3tC8XGAPQFKtu2uqY1Pc4DiKf91pd1mwe77ifiHeLjQajx82iQuQtuvArc9sQUWPzevU19a5LSAUmHXbX7",
  "key5": "643nrGszHfzMhtQcb99sJYW6E5HPwv9JTqmri7JKnGSzphTNAUfx35Mye9fXXTEqYnNGDxMo1K96h6ptpCSy4x5B",
  "key6": "3SrXPqCKQ2f53bz3MFMhEsQ5CyphQSZHwa49HdpiM9rj6TJN6m29grGX5Rs8BLzEgcqRH2bbSPMx8yXUJfWsvY1F",
  "key7": "5DvZ5zJ3h9xiU3wWeQd6mthVMWBUVyjuNv1ikWZq3Ve24sK2nubx17bVchrMs6VHT2rhkYeE4cJzqqipvB7JY4LL",
  "key8": "31jDKDxkjD9psjhxW2SbK8aYVm3tp17E15TwZKGRhXVr5q51ePbSkPgwUSEfVmFxyH4mxf4hcppj1abfHzFgSreP",
  "key9": "ByohcP25qAckTL46Fn8LxbVGbTEfYmLziUpHmEpvqRCR2c42QQy2oyPu3aH1nRRbBwmZ2s4KwJfA1LErzXfsEUZ",
  "key10": "5imGf7e5FTAKZMGcepXxzq3uPHERaz1LicH51aGnyqE9Ko37SKPiLeZ3t93CnCNUG8uorBJaitg7XnsEdV2zsD1f",
  "key11": "CQXPEcs5mAXnmFusdHkZv8UUM7pcJEH9yPmLBPYYy2s61eZTtBVb98gHsJeiDMvaYUArhr6gG9rJUTPHty867Kd",
  "key12": "27ebkgvKwny2XQaPTUwtznz9tJehTwaSPQNrgYJcy8n5r1nT8axHydwXfKU1N5zhx6Wm4LPy9tUPu2KWt42vFzq7",
  "key13": "5Yon9tXnMVgZxSCeuPhqYpRXqX6S6MTBjzNUBRNUBgdX3VAe2rCBvTEYvS81mqXhHnVhL4R4PGykS9e2Rd9UX4ci",
  "key14": "4G9iSt5fkfixLMsZmR8ka95kXwW7EPTKEJmf2EsioYtSyEXgBS3u9GyAazyYFaQJWPXFp11evtyLz7h7ACCRe6Ww",
  "key15": "2Uk7BTphiW5Kspwi9vNV1aRZuAgTFeWHmYywA8Pf7wqxBXMkFmkHC3UbtoA2tqDeo5YA6JGqHwYb6w4zue4deAPJ",
  "key16": "3ajQWSYe1va3mBqoVFUJc8ZRZSmYPpzZoeL7GbyfjS3tEgnk1HCs8F5RsQiqt3NeSh14GS2ULw8pPxWzTi4QcHon",
  "key17": "2PYaZPLRZRyrNxcMBzyLjpm9E9ituLFuY8hH1niZFZxgtB7uspDQWb9xwWhuseZWCYKqmALghsv7DSuZnoJy3dVS",
  "key18": "58rmfgGafcFoY52vejY4bZ6Mszxzx5xS6mudNjYhgfsLydRLyg5EX8pg4P6PuEdQcEpGmbTjvcSMfm5tULZpBZeU",
  "key19": "35YvEtWeCMGc3xo5fKziWyWTkBbPehUEaytjj2qLxyAm63y23hd1HvK8GFTkQ6ZVyYPr9C3zPetxsE95NtmMmXYQ",
  "key20": "TnLkRPSnkHDa5Zd2mbgnxCeWcFaTvizSMgzuL3sWifJC957fa4o2SXn2JFVioZ7MZ2hyUeV1nyiCfm4KUoipmt4",
  "key21": "4fTwf6nhEJjjVNT8BUJmDDEttzjtLjXMhPiAGrwjNSWmry2mp5ErqhfsT1eRQmUntMfbR1NSqxTqZwNAm6Zyamgk",
  "key22": "4429bFBRfvzRATCKw5jxw4EX47imarNA6FGY7dDW538KknvYkHECp4rfFW7jUZgpNM3iHRttKHVTuVem6iBm7Saj",
  "key23": "64HvwNnHyHntYp9p3MCUhNNtMeXEEGq5HLTnxM3tL2pCGsgakJNRUDBFp78R7xTMhrdudXhb8bQyQxZi7FhwhBc7",
  "key24": "4k25cj69c5rMZVV5mDFjCm9nMz8PBJPnFvTesveFTD3jLL52ApJ1dQzB9krNJVnYiJsCjhW3aps932kKwdHpZ9T1",
  "key25": "tcHhUH7MwgbKyvT4j5W9boX4a3nLpWwdRLrQaeERtEa48Fwsmfe3J52J8TBVbbA57TdMEG3i3u6KFi8CZ9hy9ca",
  "key26": "2nTHWDZGRiBhXFj87qkhFQKyjcnDbt5XnkdAS7W2eCBWzkHKJfd1aMSDgyW4K7UvnU2ku9Tfy3CKJayf1gb5jZ2D",
  "key27": "3Qc2Q3VcxRcwwVUU8STRgiRxxHEiuNZKQDREwYmGZP2JjecNDdpj4YBk2hBshNySmqLZxfneA5PpNJV9HsMMYP7F",
  "key28": "2ayv4jE8MUVbD1XKdJ1qDzCbhzbjC78YzriA1tNvTs7HX1dX6vR2Kvvjbsji486HZbDexy7tWdsNB1VxXuwSmPc1",
  "key29": "4kEG7FU4UwDr2HtNbAy61eBeGEMmUry5pZT3xovkh7CFJ56VdbomN3PZPtdMBRMfgX8EU9ePgQGHbcpf4Fmw41bo",
  "key30": "2TVrWYaG1iM4ppMmL7dHbPwUQ31M3ZdAWp3jhSRLPaDyYoh8qs6zXnYZVBHWNX9JZTxL71qonmWxnVN7e3FLVy5R",
  "key31": "2UZk4H2McC8yxp2KDisk2F8zrRRiQGqkRPPktvkZUS8nEeix5oySReYa9NkWoSi4iVxigvsAW671sPshiKX7DaEx",
  "key32": "N1bfke1YsTj5LKiJ2DSrWX1HKNQ2G2VkNnSFsLWuypa7uDY9h6caFRJpsUBFvoATFBKeNwegaQYBzUpB7QfKULz",
  "key33": "by5Dtf1E4Mpp8aCJGGQk5xaQK2JvEWStfdfFq4tBSBs4BdQL3hF9nXswKfPk98EBsZAEQX7UxqkJQBd6BgzNF6U"
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
