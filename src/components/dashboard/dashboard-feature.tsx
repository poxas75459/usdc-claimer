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
    "4B9eD4ecY2HJy3tEaAyZXGmugmSAiBanDFDTjYyCpzHzhbD3wGrVc6Y5cvCoU7iwMJPuEbmHrFpZwri6x6c4ZEfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FWkEh31YPTqFG1eJ1nKLu5yHgZkBGi5ioaoqfHDPT1gXXP3LZwSYRiwZ3yJN6D75QTsxKrtS6nAkrrWzatuymzH",
  "key1": "3Er9Bv699nJ2GJhsVSTnBroktBywSUCzk67C2ziRwVnb4CEd2tzwDYqSaBXqXi6AZ6fghoBEuUACcUSbTStPt8fb",
  "key2": "3vT2H5faygAtaoH1uiMtYQSvH7RsanjP94sLQahHMo1gKGyS21bkPoQgHVR3ymvh34Zpg2KUdMyxzEnaptPpy2Kj",
  "key3": "46tMoV55xcDCkXULpPmcq9g69FS2dUvetAquhChZJAhMtJjpih5su4XPmp2x6zfe8ga7cTriuHSB51VyupUZduiB",
  "key4": "53U4C15ef4oA1wXWBmyDS5yody9AdXp2kSov1ozzcr5XTDjXBV2eNyyyS4WXTuNTbvB5FUiP9ocWQcfJU7PBPwXC",
  "key5": "5zcfmU4a36ExtkiRnwxpfTJvmbidttVdjY8zBXDSTy3mv4LE7eivMoQz5EcfUQAaw1VhCjqbuQnR2ENeRdQDeaNi",
  "key6": "4t7qM7BK5pAskpWEoiq4mp8gRERfXXRXW8fdDMavVAUA23UhkJC1ztBuq7DABA4anTGZHLRvT5tSUF8VoZ7VWcWo",
  "key7": "5Nndmg4h4V9NK8SMZpMUrWARs3YC1QqBmFZuHUrNLMGnapycvVPoUz4vNaBrvZTi49fcAcfqTCDt5svbiboqE5Zb",
  "key8": "2h32MFdBQ3RoeF5CV2ggYvjCuvXSj4ANXxUB97VJTUrgbk7ixs3Jaisgyad7siLJpUbjTYtByEknHbBWphWkdK67",
  "key9": "4Ax4rKbTtnP9WDnnHy298qVAdt3cxBiNdfZeUFwyp5PVcQS97HSf4aF58tpnipZXTLU64PC8rgHanocrCMuW1sCQ",
  "key10": "4RB1jWLFatReamANGsgKzCGuPArZuuQvfU6ao4xc5UJc3MuPtmoNGsvWLsmBiNhcne9y9Ty8LxUP6eFtVTyvG6z5",
  "key11": "4nmfnUr1VWk7eSEwURhhfQ3vbMhY3nPBYKsaWpTcQWnmWQGCik6EoR5rMG6oh9LZQHs5tbosJdadsJfGrmkXyTP7",
  "key12": "2FTXGyXnZt7nSuBzo2ZiAHdBT8tBqSjCYgAhgXe4rje3MLTrzqhFYPDH3BLAYx2euGKmR8RZz7dsgouHAwsTL8pj",
  "key13": "5sf2jxAz5uGfH6DDsLbfKvibEfSwhaRAWmbZ2qgVgfpPB2AEitPkkvcbu57tdtrtDjdFLLdqPRaWUxtj3pbNJrHr",
  "key14": "3uV9XQCMjqbZ32LWu89eDw3W2DD36cnEV83tohDpdPNByLMyTZm61UePhN6vDQqeJEpK75vyqQE6hCF8CaPxFnG1",
  "key15": "TJP1EHhAvTj37xRj3P3kkGMdHGuybdoTBiAACuVNnS3y3da8B8HdChCUDa96uKrtCCWJrRwWUuELYAXn8yApMtg",
  "key16": "45XjG3WQJ1jKaAwdAG5QnA5yAxVffhgP2x8vUxMcpHetp3ftb2bWEzpNjx28oTVAnt5xqp385ZvkJQvviEUuexpg",
  "key17": "bbtuRwiu7DXdxX1EQdqQ98KYcb3BxovXDWpEFAbqADCR5HKkrC8MT84GzmuUjTEcA9n9nxzaiVsz7TDDMjA7sPZ",
  "key18": "4XDLW4aZgwXVKdPkcTjDdTE8V5jYyGgM1jyimyyXbjZa2Vpgqiis8D1gkNEjG8LUZnu5zV5F67KjxNGMGcGedqRk",
  "key19": "4vtPLwEvMV3W18EvTjZZRjkwLnmmwZ2j92fkq1eAnRGPb23V4yMHaUu9SJ513su1spMoDLxXzymhWrMxTS64B6jL",
  "key20": "65gkK83LTA6fPejeRqAz7CAhsjCAd6CPRHceqTuyrLBdUDfWAAPpkNejKMkehCykiWi9bEW7DyJkGgT85W58BbdH",
  "key21": "9g8PWi4wRAyY7HHjDwduYQAy8BuTiFku1RntimfBm73nJ2RHZtDmXJMT85j8qTKJq4CYhkTK4B8AVVwo9mzeoAT",
  "key22": "4XdKxrXiPzticimWrTzUKzmuXgYHWN68KrLjDk7jNowFEyASxsU2RbyMhHWjYZZAkyVJMBRkL8BTEZdiiwst1cHB",
  "key23": "21MN3p3Qg2GXDEX6vf92p1J7Ees3ss6jZfMAf4UzUKUUUrpgAnLRBezcSCjD8Lxo1myWZJnTZuVHe9ajehymUtnV",
  "key24": "38ait3CtMNeT6qNDxTeYXfHEezUP1Kt94MyphpAHf64NJYGgW6JfaJ16mEu7ANdC75oLDBmrREjFKiyNBSKjDBX6",
  "key25": "W8H6uFMbmZadgZLzHTznoktHX34uCcAYHsLwZxo11KsF9RWCTcQSvkJbbhV9DdzEWhifH8EB27f43W66YMxVq2H",
  "key26": "22LUsHUQB52NGVYHzYY1MTFKzY9P754X43ZGee1MQiYmrhTPJVzt9sQf8CYF222u8vhYUfmTJnK3LURqL3ZTqUNX",
  "key27": "4mrEbCCXBaYLH7BGEH4h5zQoPeePVeeUbTFfF8eRkerBuhLJVNtf5d3QQUjXXwHx9B9pL3X6Jr5xGsGVud8i2kPA",
  "key28": "2Qe7kxNBaT8A8XjYUCNtRmgF34hVbPEAnZ3UpHHbaUCYMh85R7M4xqLqVR33VqpfCkm4wDTKvTn5DZU8XEGaEJSP",
  "key29": "mUM5qdMCNKxKq1EbksftAiXyianJUfpaMiwqLiyQ2WFFqawkC4YyQKkXBDSjZesGfaHzuYooTR65CD6fr9oMGYN",
  "key30": "2FfCWMth36hb5bMQBfhNzP7ZxmSRsPB7omEo33X3FrPotrUx7FK5sePv27LGipD47HpCsL2kaF3DBfdZnEtLTqpG",
  "key31": "5XjuRnoP5vnXmPztoPYn4sj5YxDjxQLVnvG83XBCsMtofp4dcLqgDhwnTT3ookQZHbcgT6T6vAj38xNUg6dMrjse",
  "key32": "2tYPWR5pg4PK4rA3VsRSn6xPHfGoc2oVDEXKZKKa4YdvNtLA9U6PpxYgvzgB7kqTjjc8ZyLj1vpBtW1fC5gShk1F",
  "key33": "2GXYwhmyPPrMFiTn8de67pC2D1ogFevmcwP6MfMxaEEoAPabB53pVXxZdvN9BqnL3KsvHvprVEA8iq4uUopvwuxE",
  "key34": "4qfGAfbyJ3KtjJEqguPxDzbMKippKjHrxdT9scf3CK7263fiTNGMeZpXYYk9pB4kQUarSV3xyww6GegqmPLPYHgE"
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
