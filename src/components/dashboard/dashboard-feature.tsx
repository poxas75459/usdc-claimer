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
    "34e8PN635wYCWijUrCVESPruuooMfeUrz2ys5BqKtu9hydte4S8g6ZPvzw4yGNu4PsVwnZdrbZPiWtcogsByhZVM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5khM7ZHf5SWJVk41f5vPvkBDmXf9XwLJu9nky9s2tbqtq7z5oKxXchoWcf1fYJo94uiwZJuNSCH7CoAer5Fn6ooA",
  "key1": "4AxVkLmMfaULwGThJ17xx4zm4GaNHC6RfbdjyjwpcB3hfgtTyhph3McRDaAzv999rc1ehqf5zfLUoX6nGrmPFLS1",
  "key2": "2LU43hyc6Ztej4izbVSrEagCGUbiaqfPWiqyUrSVuhnaTsP7xGSbSLiebyjhynBvynzugBJzcF9ktJRvpjYiqZha",
  "key3": "FB7QP9oMB8V8wx4gmEmqZjsad53iwDmkcYm1B6GV2vBxs37GejqUsrWUTxWiyprbXdNeX8NpXUwLfm1v3zN1fxh",
  "key4": "4h4aRccVVfqqBpZzFmH9awoPdi8Pu3qXoaWGVVmLVPvRM36Wi3xQUB2XjjAhtNfaGSMZVrwGQiK3R4VaHodq4DZV",
  "key5": "4WzxWreygfzJRUZ5ioyodG8vPASkk24SKYhTqWfdU4LhK3vUsYejVLUwJbYE8dNwapKikvv281dQJPkV1GMTGHDT",
  "key6": "4TFdzj2LaWWgFA9xp43KmKK48DjsrNwp9626kgq6PvZcJoAywHo16TDvo4JMpSjYSDjDKovNpNidh7XHrU1Da6fV",
  "key7": "59ce6YyPwdyhTsMeE75rRsvC1nEULB2ZNcNdTNJ9AfhAjFCUF3sywjpEfMWhN2PeSsGaiyPCY8P85sjzXYZUHcPf",
  "key8": "V1toFMaZVGUkx7uxz6BzzuP3ewY9DTHdqUVo6atsJo8U2TUmSMioqBWXJ6d1eNgEb2Jbn3svJA5Mi22odsDmrXF",
  "key9": "44ytdizSRBZKyAgZ1Y1wKzFqdYTtGH8pu1z7uhQtDs5ZrtGQuVLi9dJc5vX7JVa7DBUVZv5NxsS5fMtMwmQnCwGN",
  "key10": "MW34xaP863ztZF5tRtpf7K1HWhgKKj2pznycpCjKxWQzZLMvdZcjQUmwH8asRedBzm4r9jPPaJWXrWHgbwC7xEz",
  "key11": "4MjdSA2gNwwqZ2odkg9w3vknRqnHe5p76KBViKUgZ1JtrM5u3HJpoKRnDXLPZvqRhWvBHLF2KMX8Lg6jWQTbwEXQ",
  "key12": "jFdd5LjP8NRFwqM2yoswZVJMj1tvgocZNAzxWs3aBszpMQxUr42J4C9wx7nt697eCbjhtijrjF3egqpaLYqsbii",
  "key13": "33XGvXzJiUzRuE2hDvMEmt4JyahyRfGc2jzkb5pQb3RoM4NkgCeiPKqTgFEGzH8vTPvrEbGW7usiiAC4GggYMXKD",
  "key14": "5r72XjmLACybps9iffpNbjTSvBEEwgMnWw4TtF9nYvZkHDuFZTbodYrXZueYZDbFUnZiNjtUVP1YAAtiYhADtoQs",
  "key15": "2FoPRwAmftZnUGXpWoWWySvVYTYRantYDGY2sNLXjwu18mTQv89MvRfCTc4cbaaLAwes1PrxFkKLw7UfAZ3ZRJm8",
  "key16": "2mqisXzR92MVYuogCfB8bQHWbZDCJcZe4Bf15gSHpaUTSZ5rKm1sTNYZF5fdV9irVBvyWHWnNKQbAqpPiMq5or4W",
  "key17": "fWCSuq872sXCs5Cj9z9cdpX1FT5SAUyQc8xnxe3ih7eYqiiC5oJJ38cT48f9gLbntLPNv8aJ2Mb49uTN1ZqM2Lc",
  "key18": "5815rZ5eug6rYR8ZrLd4C7LCbJXNQ7gZGiGg6gmiKsH6nqCGvZMV6vGpEJAhrRKScRQagSeRE9dLRpVQzEwMqGGU",
  "key19": "3YFDXKCFKBjVdmL1kxfuuPBqLGstyrv182Fk4aZb4QdVJ11tWuhshTLKQ31Z9uUt7VTMvMXZ83RJ8YnnURgSeJ4i",
  "key20": "2ej4YkZd9gj5r19KiEHNxZdZM49Lgkuyjo1S7G82co4C7cLy2fC3X2jeQBNECj6vkpLGV8PhwEJeUtrZr7WnFbYV",
  "key21": "5uiewATbfKGghLLzUhb8ksn6UR3E2o1AP9LYk9u6qRdqQUCZ2K2oB3AziyYKPcZrcFJk8HfD6dLHMLk3zHoHcrSX",
  "key22": "qDRNXEjrfSMQheyZMde1hRY25QWv3UZPtE5BqFxoupD1BKEgmyYLHW8nhvDiNJ5yj37MXciAKjoFu7FdQNSCsts",
  "key23": "3bu6EfrUpsvba3qcLnNcxr8YEywskaqsrRsGayEkDf9fCgLg9MhbqmqUFwVGhUPNVFYkoWtipi9EJk1DUMHWn2aE",
  "key24": "4cxq6AifveMT52rhmupFBe2fz1NbzyWLXPFFHXNdKKXAm6sbNLtBN4L3q3CcPWVrjLwDVo17AX8UhLMGqRu9K2GR",
  "key25": "3t8YcMagzbkGMpCetcqJFWf2eFUUywshQCr6AEC6WCJUFWZaSa59MiitbLsr6Juyew72RqGyA6BqfFku757cEoDX",
  "key26": "33eccfw13eTDoaqiwz7Xbr1Qq3uMo1gtsSdcNA2ukDAaj1GDiQLV8CbPN3LVp9f88sJVkLwEu16BnEvDTKDrPsGF",
  "key27": "49yQ6GKGWXPqZixc8g73xdJavWu8WqiQ2StBWGyEj6f1FdkPAAQYXVmmRaqZV1PzHzJDdKQmV9uNgCaFg3mWqNnc"
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
