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
    "23Dt6uo7rwc9deSDPySooVQHeUY8aaFBsFBYncYqaJPmQxpLKfwm6qV8aKi1Z5UVK4iQ4ZkN3uJgih3XXWKzGZfC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LDVcaUyqSiC65pLCEMbmrNUkAGUjGeeA2gGVCW2fzeub9V1NKZJfwpd7FEhdPXLigdbmPm4XhK8FtGkgTQ94zdX",
  "key1": "R1vtmCKmicwFnLp5zqmbUPFXwbJ5kDEUPpE8aKcS3jbDW5rTVrHkfDBwpjmRdj4be4AR4Z3uk6k3rXsVVb7VFP5",
  "key2": "5mpLivstnW9yc4F3yn1WpVziZCyGv35Y31zL4s8xsKW6MmVy6h4rC8fetpnJKFYGjLGaEfFbk35xVdcSnSf64xWh",
  "key3": "45eoXnBvuwdsbhQnA7FkBopHgEVLDiaCn6tGy6sbK24ehHAiFFRJerjcVJzgKr2p23JZaTxiKuw3Yh9hSbWxSmPe",
  "key4": "s9arrLaK6SSc6NKkrsL6ffnAAoah2MYvn3ubuhkbXmxmv2UdCPi6ZMkkhhfCLshxsojWCVxpEjzti4FMJTUG5fQ",
  "key5": "4VFk35p1QGWKAkJ4ktYfErHHP3qswpPuY8XMQoXFY17Poh5cSgy9Hia9jeNbqxmGEyBsCGbZsQyKWsUr7fCJd4oh",
  "key6": "4td5JhE5DbZ5LbdUJcqTVnQdEGKqABNA64g4a15N5WVeWyirvwsqFXZPiQhp4NuZbncJcTUZBbuEYyiiTWZ1hnvP",
  "key7": "2HM5FVsVFjW96sKP9zsqyKLSpNTM7eURqzeHAi4Qs68esKaJFHXcb4efeKBCiajaDrBimmBcSERDnR7JgoP6TPRL",
  "key8": "5E7XuHT4RNXB9o4TzU9MUHDfwBRG4DCxzswsh72oBP6jiQY4Vdk81jZHhL82mF2m5beq1BMc8rswJZnq3hPpm2Z",
  "key9": "5bovUcca9cVVjVDJW3azuxbBECoTzFtpem8cSJZqBp6JQ62ZBL2p2tjFiYb9N3xcw1fsCL6LLV47G1sWLzbYSV2z",
  "key10": "4tQHdmXUsT6H3XgYTTdFFN9vNJxyNcLEmCYHoAVm5GxkX482y4mmGPtz1KRrqXP6B8k8XGybiRp23YNZBqo9kw6x",
  "key11": "4hoySd3LFoPGiJLyPZD3J1fp3cbmQfQ6p263oukWHHEyZmy8JX5AjW4g4TrqobC4RRvZ6GEBGFCyFHbGsUi69Xcf",
  "key12": "46eXUgL5GkUTnSj3FxhZCPsickUhuzzktMMZEfd8ctuTVKRd7pUAG5tnZdzEPbKSqQhTk7YMKcQ5yPHYsexmtDcE",
  "key13": "3yBuw4Jdn8mBLD1jLP4UWNytrwuyop8EJnZQ2kwrR21mhBnPvHT7qBybWK55jAhr4J2vbn4zVJcW1TMT6AAyZAog",
  "key14": "38E11Nw65ivaJzAZN45FMLnjyAXtkCaWP75a3BVwJDzV7Xc9coeqNJLytRyNFdTLKMar3MHf3b1wogGzXVqz4hzf",
  "key15": "52EFGNehyxwdotopnm2FjFsrN17HK7tsquhdrMYXHty1fgK3d5cmszqEhVkG8cy7HX825BkTtgcz55xjn3rGkGMt",
  "key16": "ceggmSgEDXTFngJcdFu5c4WN9nSoztYLuKP4gygWB2vg2RhhjJLrfJ4AcKZQAKfNVWvmq3CaguSqx7mDANvq4oi",
  "key17": "cLBjYjJx44CudubU4pJrkWysGBD6sbgEcZJTyTDqRN4j1Dj7WRJgCtxfUf3yKbsW1mefRu57szUnX5b2wMnLgke",
  "key18": "4DAJJUKV9YsS3SEKBEHhAT8KXPEEZFp5qHN1vN2xkC6cTAKNvcURzUwYvK3agpFCQZ6jeUC6b98dg6YnMcEB8ZCt",
  "key19": "G1yLykCa8KMm1DkRTUUF7eE7AWVWL5DryxFZyfk1L22drJFupMfjTWHWdWfAqQFxNmnMs1y1McjuZFmFYhSCbK5",
  "key20": "4Zz7bW234QXTovu4Sxhgp2ksSwp72ZvmspqizASnRRQJ3pmDedp7ni8s9RjvP2Zadm7aopyqXoebfCBAjyj2GMeZ",
  "key21": "pp2aVwwrmxyadLXpymismRMaEGEch81JrL6QQDW8Tr4ESxRjeiCECFMsXiXwHdCCDUPrpuv7pMGhKv3MPJbWvw3",
  "key22": "5GvzrKMcPqm9gMg1K49x1Q3sBnX2kWbPTZk64poZVkEjPWu9Y3ZhtW5sgCkr5ySBrsBVoJBpKFnGUcZJYCio6CmS",
  "key23": "3ssjg2dTXbcf717KpLXoYgAY3FUbQMvmsCqVMM6PoU6gHEFUXmNcRJbSeVoiBP8h1oDm4TdKsepUpFdR7KeUv3oh",
  "key24": "3kRUzFQsYJBnpX3rnBkxDqgfmeu81yAB8QK8USU6wZauXGpPk7fFm9E8Fcn6fnfXZPrg9ZwviZJ7cgKNZukXJJP9",
  "key25": "4MUUBeR7wochZgtoegFDrWKrrHBFmMNx2pB2mYoy2xDk1q99ZNTvMouKFbfqZoMA4cftcc3x5WXvU9f8w3ZJHneJ",
  "key26": "2a9qR4PPvAXiz7qFoN5V3rwmsg21kdxG6qVs5sCBZdCD9x6MmyV7NMdHWrtjUor8KBpF8f1396CRf5aQKWqw4C8Y",
  "key27": "2mKX69v6GX88e2n7VPHXymQuRTM18gmVpVbjaq3xqCU7Djtw5XQuYEnAGuTqLFg1KQJ9J6mqCme84MvTGFchoQZA",
  "key28": "4ejq2WDiZKBEcRyKUJEA29e2FSk553HzdHS4dZXvhG5cAE4friKjk8upZLAfThz5mH5c8LdkpzWwjnhsZsrcjH3y",
  "key29": "5k2W466zaQi6LL4x6GMVz2w979wYuwwKLMbKhaeXKTpZj8vYBBYr3L797MHJkPRXmRK1RRcQmQTRmFXkZAPC63dx",
  "key30": "4eKu6SX3gLGMCXED2mvHbDvZb9nwX8fE5E5JHsGqPN7g2QUPY65Vj55FdTWwijhs6P57mYyiTRCg5Ze7pLEgzpxo"
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
