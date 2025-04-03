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
    "2eBeuEUW4JcSdb4ZFDEDShJS4xTEKZ3ue5vKrdSx8G59puiiiivTmDPPGcZ6WA7JUSAmfa5mb3PJ1JcyMvrcta7q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LYHptbMRRG9ZEJjAZZjwjkXoyjba4FJcdXHYL1MN73g5H7Y9o4Ji3fXhhf19k7DY2jdr5da69VGayMnuPt6T376",
  "key1": "4HZDdj8f9BUQDNUysGUYmUJwKyuWY5mvdyE6fKrJuWAcKkc5HXjooV2sGvBQPrsqRb2j33zJYi7HJa7ZAqRcBFui",
  "key2": "25GXaJAotAcozAratbyXNCCzaxuXE3rShksA48rwyRSmFDwrCzzMFJCCpVPgzYPR262LmUdcbUozmjwe4pUWSixc",
  "key3": "4wPN5XHYyeHoivE1gD3SPwZGsCNUoo5VvQ7Ly8BfThrR98MWQHkpGJHcMWe873qSsuRW5y9XoxAz7VjwdEZf6ppx",
  "key4": "2gsrPCroQzHHjuepdSuiL36qhGSu8QXvB2kjFtLy4Sv6WVs7w5fCJy32T6Ene8EWpM5JwDkHoBgNKBj4TjDGovFr",
  "key5": "5mMSgTTiTyjX92Q68yu9s2uhdxTnAkCNinDUUCjhCPvEUPckdEevnxukYtptKZLWEfXYehi6v8NihubLKTLmhNKM",
  "key6": "4JmtVwaNXUzxmoHCFTxFSNQVMBTEEhPcXsyNgzDpVSELUCXFQB58M1YTVgeycXkAXs2xFtGL5d54T8R3bmJvkFwr",
  "key7": "5PHpuAn1tVAo55CANZAGT5zinSsKRLP2xC1k5p7CoJXTxD4ikMueCCZ5QYphdLu44mkrLyAH5sb13bv1BxpT29hQ",
  "key8": "55D5k2auhJbXonG3UnHqq3rfZMzYuAeCTY43brWiYcAEuJ6jWjNWbuHDrTQWNTrkUdY1mrZQU93YUBHV6r2US7CM",
  "key9": "3wiqRFAAPZMgctBD4ioEPTjS9gAY54DWYaLPfyk3sBREaDTLhCoovpy5edRn2GSXVrbhd6oFFPe6PRixoXeTqwKG",
  "key10": "43vzQdYdqbUNTQUyzDGtH2Tg1GgtHNYcaNKGza1VKGwGZsYRR868C3RNhtT2TFgJrM5ZBDiF7YUEemUUC9rHZRFW",
  "key11": "5M9y9B5mVCcTZyb8d6AFJA9tde9nSJTG73oKtFSajMieeL9RXt5yixJr1CChEE4cXqyjygnoMPHQ24UAddWRFf1M",
  "key12": "2gPkASQ7PPpr77tLajC5wyoB1s7xJBeSBUKoYu7w8KXYnmqu32y853RxNMvy2ug7hDNSbQXEcU6qesKSJmMTtbDC",
  "key13": "3kx3kkLQjGwMynESf51TdNwQ9pVnMa3Hnk7pTfvXpPbSwYyNt5X1yQzfqnqB3LfogsSpS9AjNh6CngVKd8YUjGEN",
  "key14": "FXffryAajgtM3r9QSeQJKC1BCKk3fR6UXzB549mkoVozs2T8Err9LaubfTXJpfTMWBSfYUydqC2BdjbdLbXhF2X",
  "key15": "3E5qTXyYoWVazp1aNtQhwqUpckCfQmkGDAn5V7yUx3n38vww67hsVfhPyRYr7yhzo3HVPi5jGGKxTocHyxDp7aL7",
  "key16": "5MTZbyEtPP69y8N7TdmFkrLdxYN31WUJ1pwErVAwkrp8zbdWh31xCXnR6gA8eLx4o7it7RbdVQNjQ1KPRHuJQqXq",
  "key17": "4LUeSa35TFFhk4x6HxsioaMNC6CX57Vvoin6dEb8iuDAj6GLAqAdCdWWcqcZVMCG8fwkm7ghGgjAnR4Q5U9RHnsR",
  "key18": "AnGGqVxeks7MKYNK2taN5KSpmBG8ut2X1vGrycUTSFoxhg4doQFvHF4sNjzWcNpLvP71nZfNphkeaMu4TUHza3g",
  "key19": "RkoP3rY8d2FeLk6QQ51J7ZN6tMbQxww3GRZ4dwiij9cLCda35yQ9RFXgTRQyoJ6QQiMvAXcHhPpffKQ72QoTSp5",
  "key20": "2aRGwPCk4zo5M38JCw1Bfeg1MG63vVMDKjEfFtCVM1Q9h1HUADcj5cSEaQeMi6trDJT3s4txHAPWoDj4oUrvrfoE",
  "key21": "2rb6JVP9ZAcW4MiNvUVs9UouSSjZXKKQfiwQoYRwAvwYtMGvbcMVdswemzyUVfbaXNjv5y6QDdp75o7nWgNcdpBV",
  "key22": "3TeRH9Y2QiECjeERHzohKqNUCqRNwQ2qgFLztEdpN8yCtKXUCJbHG1w2JgDsQJtGZyL89was7rL5roaMHMRkTmT5",
  "key23": "26FxPp1rYLicUUjjMkRfTLZbQZxBe9Mu8eHTeH58EeJB8p4Uiow2wJU9R64rsSncVE5MgX6Ksibi6uBsc2homR4s",
  "key24": "2ktU71q5otg5JdJDn1GUrpCKFon9JP2NzR3TPH6NsM3cWT6j2p7kEiDDWhE8Dt3pzuUiqRA3cp74KjWmoT5R3wbj",
  "key25": "3Wscn3yyCrmQUHUa5yRvYKdxMPQSy95MbVevEnZBc8sxhXq4LcqsCSvGGdwxLd9MutYicjuYNMzrNtQnGFfUXTiT",
  "key26": "3hLnG11QPvFN51dHYFG2nDmfM5NncqfRFHRA9kH1eS7dNZuGRFeuWe4Pb1JJYBBfALkvnUnjdkZyXM6ymbMNLRSS"
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
