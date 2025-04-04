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
    "63eyKw4xgBzWWjT9TpDxXCjHu1isMeho2ABQoFyHYJoK22XkpvpTEn8PSV8H3PCtdenoLP7TBt5xPxvanrjaRECD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VZMd5TeZGAuFJKWvKm3ymWFAaEsRENjJ5Nu1cNnXvu7ojMYEBBrXXcisRjueQumK3BHiDnAxsWq68QED28Vd7xr",
  "key1": "62RB71oNZembrhxQSv9RZk6fK74HFytrfdLgQiMuWguoCmoBdEWTirgrHfjFrkt3aeLKYBizzzByHyNa1SENHCZE",
  "key2": "GVtybbTpTShs6FsQr3AYKNJVj7ad6LDAUk7BFWm3EM1peACNFBJMuTcm8Zj49qeHwvzTFKGSN6L6AAjAfrR5U4L",
  "key3": "RgQz5Rf4qDBMGVytThSCnJ9T93BtHhqdxtMHwn7DSBxSHpZLjVkJNDqHXoY47iy2hmMXbCxtAQ12BtzA6b1g7Wi",
  "key4": "3qDSMJXnmef32PVEBqwSJLFHbNh83rG3M153hkgzG1BPRocPiY4yASJua8ooG6u5yQMrHvqKuFPZhi38TbQvPdM",
  "key5": "53RUL43kcoyC8uxt9jJ6jjud7UfqmaxwDNcfcGpCacYkT96btV5QVbawK6mCgJDpyuZZZuUDEevQ7QVfSfZwoEEn",
  "key6": "5TL96G6oaHEkhGDagMTGbbdbmHA9dBZGPd56SBRkM1QrXpEwnYaHPpfF91D67M1YQQ1TBwLgpvtTCmYFYSCH85yM",
  "key7": "2zF7MyCrKiRpEqGgvpz1uNq1JvEZt3xmVaEnb6Upz8ggV9rzBzL4nNSjLnkY5dq9W9TerNDTmbQVp22hQy2WxXjT",
  "key8": "33yy1nMFSN16UHX92UB9Ytog3MQoVhBcqpBL9v2nwQNMqxZ7S5GDLT9o9DgwrDUhDgU68E71qPw7rg5b2puQgpjx",
  "key9": "5a3Qoh8YkFnC9j4KgNyD8JGBYBzcMxzTC4Hhwf8VRvNxBddpJdGKtNEDL6v1z9kUHqg9wPRDPvw9R4YGw1kGCg5e",
  "key10": "3yG9r5f6eheTqVPYPg7vB5D21ZSz9cn1ZfM5e8S7JDYtHeSA3tzRTJ2uvehpeVxFMcu2zCXb5qjxQm5sVHDsKSww",
  "key11": "eayCT9XGf1xdtmpuGHcs8feFfxsuPQNbynjWx8ySuc4tyBUqitPMUK99XBWdYw5BUfTW1g6jqPR3orbDizYt2Lp",
  "key12": "vPKmxu5zXCUmeegbjV4nUHbPd4SUzmm976co9WjcNDuhPH8ZLLheAaxmuggeWXFS96m7BLk4ipgzEb3BEc2tGUY",
  "key13": "JUpN9BSKv4Txdzun21RQiDnzEH2iJjd4GLiRJnkuKXXfbkTx64xvfYQT2hTUNxdLwHyBXu2KCg25uStuxrRZ6Ux",
  "key14": "5oYNdbdBgNbTHTt6BVNM8NwEDS7iQ2vKfbwqPMsgSb7NnGUTqHgRywB93pBRYcnS12srvzL2mcDnbS5mAFxkaZ27",
  "key15": "42vHfKP8oGzyUkS1CtR9f7VCoKnNMxDdQ92SefEy6dcURuoHx7pzpm5dAXZr2rqx154u79C1iNX6MCa9AYRHbnWf",
  "key16": "5r2VxwtrKJfWHCHoFjtmTxFkKcnP7SHLZxs1JyJPpj2pk8pSN19K8T2F6gUnA6bmN3zvDVA3Bdndh9ik3AB6nxju",
  "key17": "ayh6pKhZAV19Y9QEwTdpgVELXYQbCBUfDePDP3q8nfdrtWfPUPAMKtdKmTmfjjGY8xM4tJYUf2iULfuEkPmkZtW",
  "key18": "P53n1EXmdM6yfpmHXw22VA5fSWQ5sJCsMzJuhJnaGYyYmmwhn6USfdyQ2RFh7ZQnU9Ukc8o93yzRmCcfbfax575",
  "key19": "Dym3aoDMCmADqrfB7UK1eqz1Vi7Dd3tBqKpAUsmXxYZbrG2E3119PXcfR3hrT5nt4GYRVva24wYpFVdVnrvubRt",
  "key20": "5WoCN3E52B2yHzY9UX4GNoRiX5s6P2RkyAN1edGDo2nkHARdJ2CLvi69e3mTkYtsvj5V96JVQacMfFC7nmNpeJr9",
  "key21": "2FJrrR3xDdFurBfoUXHsAvBYuKvYugX9smS6J1WrGJT7mu3JEVvz4834QyVixDSpd4Szn3nW986pTJcCQAwPvoqw",
  "key22": "VTzdLA5nembM23x9zcd58gfK3fxxHd6BokyPLueuBTvrfqs8W7q6JtwhYtZVcBtFqPP1KKLCPwcQ7LBdCc8jswV",
  "key23": "49G6evoSyatzk51VScNHvgD8VpTwZifbEkwHGFgbbGtyBMH1ZqwGkM2LMFYqoYYwWttgqEH5i658ZnKj2YW5ViMZ",
  "key24": "3n7hoirR9DDmvHJ2szDaZ7Ph5Guv9TkTcqSt4Yg43ZfpJBQzeEvwpcu7oEvTcrQ7fGhaPeCUoq5bdFicwSi8mUnm",
  "key25": "3TwvWHYoZhMwjYeFxgrAogQL6yHiK1aRPqFiCDK3q2tScYqw4dEnRpbW96PaYx4tmsZQWwFw9Z3sEC8CPtZC7qAZ",
  "key26": "54o7BSM97g5mbJkh5RVuEbRbHiATohPReLPmHag22AXP522JiW6ii8G7bYDmxSEpKyzJz7dfFqYytjeMqs1fP7rr"
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
