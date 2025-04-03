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
    "3KyNSFZw1Mj1uDBMkaB3iuw8KBoUHy6QDsiQfjhEpW4TM357cxX5deurPXu7ghRX1twJdv1yDWoErTKXTAcin8e9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ffZiURfug7eax5FD5Ff8Za7ZnAhfhbwJsGAeEC7YBeC1gJhp9xTzXQvewpjRiZj4rU5K1QWkQ3FKj7wATTNK9ka",
  "key1": "NPq5U7sTs2Lg5wjqjmdmfJGV5BFuSLZsijwqRZdkVNc2aUHYrcgvC4g574uXhbd2nRCKRYxudimwNpbQaMoVNE5",
  "key2": "5ZuQeeTkDVsGfc5GuhgrQn3STLHMgMHg1Eybbjgk4xMsLiTboAF6XtNq48BRZeMAYwkcXY43JiF3wAHRe6C1comq",
  "key3": "5edmdbAuArE2VWQA9gA7RzzRWViAAuZnYKVryXvDP5txX8euBJyj9RY89t4q9CfVfttNUcQwgRdAmeAhawyiaKRU",
  "key4": "5SURvGMJDSFe19JNbwpxPvGjWje7Vh1cKJHhDppwr3sY3UgskMf8M5uzL5H37Q6xHKGvwArShLX1UUqnqELjvzKs",
  "key5": "3ikRjwvJuMpD5HwcF7FwZMu8mvxK5uWhHmKtDgD7pN5fwaQmud6sUcw3N6fAVhHNJqrYMe5JsFthk12JbAH6YBQY",
  "key6": "BYwEdUSh6Hi6pkuQCSa2yxosqmCUp2iFaPSyiFz9n6DvtdMFa42eisJ2KgchV9twYWZ6HEt2MeEzPuNUwPBSVzt",
  "key7": "3oB272qFzfoGkwUdJP8scR2kgjkjx87mtXPyqMtQ2LqzQEw8diEnAwme35pEaub5wuRGnJQSvBi8egwxXu3BBY28",
  "key8": "bQJETuw9FMWyFXAY6CSQJu6aKSr6pFAB1omnFt4zcud932x1vV6YY8oYumMWzzRhhsXtSdD22KjbJQScvSzEkKc",
  "key9": "5hajitxNcARGzozPWpXoz2jXLizKGr8aSzHWw2pycjDvSKTKZBE8w4WRWK2pfq2yyd6iej85FQjcBFnQb5ryJJfo",
  "key10": "5SV9VvNs9kbXrnSDkk5vQ1EYNR6pba4Q7pEpC2id47MmoFWnt1T719y1QyqJJabYZCmGUbsJASKNXqmQKciiKMzJ",
  "key11": "34hQCoLzKpeUt9n9DvwjfRVoQ9ByApZVcfjwpBgJ4ZrrVdF4TaTmwMeAtSTUTtXDf2ffwSmU1R6Yz4VYve1GHUCu",
  "key12": "3wxwt4TBTeAskgtSnZ9a3AZvoWV6ACnU9kcJufJqWbfPm57eGcxBdBbn7Y1inzJa6aZLLYwfKaJUvQCmYhREdzfp",
  "key13": "5nR5MnnZCibkcufeaKhGwxBL8qxgZbCrcngfG2vyDZgzv9YkKRd3EWP4kgVUM1MRVWcJqTQmt2viWVYWBpWrPaVt",
  "key14": "4HR8KcK88tgXTR4TJTkjxkqWMPEA69BGUpcqy5SuKD5FuM3eJmZVZaEKNEAgnxhg4FHLNyyAR9oiDXPXxicMMR6h",
  "key15": "5kp1CXZTS2Hg82SBgpqcrndqCuRda3nFVqNV4MdKGhKrhy61YnhE5Esj6QeLQTuJ5M1bWoEHrJm3QHRpLN96zNCp",
  "key16": "EF5z5PbMTuGyuYWq1sPYYd2dttqmvMtvhd1gV2t3dcJVGCV9CYnv34Yom7QzbLg9FCCkFaTyPCr9hQcgnsA4Ady",
  "key17": "4mP2oZQbrV7jRMn6N4YZc6H29kYRRS29Sxbrupe9xjZfBL8zRQB7j8dxcKEKZGuXzvuxXxTZy17rQoVG2UBkBKNN",
  "key18": "5TAHt9koVL8X9EYBLMcMbUZbhdUTTweGcJxiVF1Sq5oT3gNHk1jdhkeduK7tKeNubXQFeBo3zKj41vV8VeoTAnAg",
  "key19": "2PTgp78Do3iv6hvs7FFaVWzErwTcQCHUYnF2qEfVaRV7ugBeD3xXuobP4X2F4sKT75zpYudHuVGc1bbLJiNd2T9B",
  "key20": "31XKnPMzxhUEhzPQntomadi5ScE61cghBp8Auq9TvnRLLXoJDUFwdBtSx78kTzcntrw6mo436LeGccapFtoedE1Z",
  "key21": "2rVK5QGum9oCvSbHKAUPmPrgy8RiaHbgqPt9wnqYzyfdjPfBJ4EUXyT2xG8Ue6FyRcVbytBQ3hTTjmSApitT1Bri",
  "key22": "2szY3e2xKPLtXxAD4EmrM9nCsUv8wWCq2FZt6Hc2C6DZDgAL4NXzW7s9pAcFPEAu2CSVssPfx4vs26GvhnRkrgH7",
  "key23": "2CCH9V6b6qk5CBDQ2pJsJvEJvGKq22mtt6keAEX7rzrXCWNB8YPwCTm8VmzvbRNDsUGP4gnLdNaTbR9zFQbtxSbB",
  "key24": "4km4nwieGrDgbsxrdXodSwjUDLjvnXU616N5cvN5GrLBzLFJTyEcgwcEzfyWWX1ASarsugQfh7sJt4UKDTLXiv2",
  "key25": "fQbS5LatZVAppRRjTNj2wHjx33kz4af6anytSNNAtJDUF4MP5LogtHyEs42jYGGNDHKYfcvasosmSLJFUYyPnkJ",
  "key26": "28S6aJBStnmkQDFnBYDtYRyn9iPN5VxDzNVSvpnai8v9UohWCEU1D6oaxywZHeiJaxxfGhXMngXTywXSKcDSHq88",
  "key27": "4YHjcSdBB6rgrEL4yrkgpZ2WwQSQCPCefYubYKG6uEnBXrPmAwWHLQMjc4qge3FXFXrRWoQhV6BWMAcfs6kPWRTX",
  "key28": "4HC6T6SswdasDmXdEQRfmmWUWBijgP6eDXxu36L3D9QMEMs4owmTSeSLfvuPY5Q7tKoruzPLyGSRFvFmhK74yWAV",
  "key29": "5SLAuGsdZTwnEauysH3fXctKbYzVV3nNifM3vzqthGYqGmNDBQA4HHGL63YycbjZbefJrV4JNn5GN7r1E7VUf7N1"
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
