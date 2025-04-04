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
    "2Ma4P7UCrzoVydToMMQtKQt1pNFn9zGhDMSMvfFteMjHFZkcyN9xurTM9Ao7FAvKpDofUih59k54JpFz9P5rXTFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XKVJJvX4VXXiXYgfQGhV4zb7sTK95VycfFa5nTkK2cSBW5aEtaJJ46DG2fzCbfFyBj5yJ3sNCiaVH226gZvoxLX",
  "key1": "3FhcHMxBCBL4qhFExKkiMRDbe2wC1ShZKsDtbza13M3sUuQYQjqsMkzTZGDRXJbwPAbSGNGZLpffzSyFD284aRBo",
  "key2": "j4oxwU4Q4D67vHv6ADCVzbXWWzZLMxvdUqoiNw49P2NUR6BigRGCtfw69jcdAd8Myd7BVzxyKMwPmWoTyBbZx6Y",
  "key3": "2mW9jxLUUNgxtxULPfgMPiTRGJTcYLHSzyV1SxYE9yGwmbx6m9nicvCFThadcsjDGScSnQY7NQV9JnqtpvuB7ARz",
  "key4": "4HLMYvdzbUw7TWAprkheptt89EodmBpAfvwmi8MmH1jE3ZC21d5LDnBNJd7NdejPAuKYtvWd7Aa5rxJ8cPsKqkZY",
  "key5": "iokdDWFuwi6w7BZ6TXHXgMgz72yY1utJVXcXPs4pRb2utfab7Z1YpRAbsxcppC6xHmZJws8c2TyDUzyeCWG1BWa",
  "key6": "5KRLE8mACSmhNTZHZ8yT9gf7gbcDLZGuizSXDfj93o1xMVJJHaoXeMbDinAeoCC41kAJCvr9aJDSaEVDWHSaxHhn",
  "key7": "2zvNAkJLFXzj5CSCWc8T1rteHLqt8KStoFLRDomdMjYKz6b9djFHAbFKj91z2WDiUzVryETDsVWRkuY8JwVf9xb7",
  "key8": "2yiCav6cucCNrkbLGxMrSC9xR9fwNg79LdWQnYjf6XPa8d5YUPgku2HJ5ms2n1E4Wx7YtGfs5au5Xws6AYFY8mBp",
  "key9": "5nRJna2dfpGQF3VJ9j4YTB1Lhs8fve9qsq9oPQ92wVFpBxkLQMrLv4HGbgydeDSGGx4wpdKUstZyq122eHvcr77R",
  "key10": "rNjSeLkVWGJE2zMdRxjZUFtD7yH6BNsV2pWYPXKqwAPfv2Pd2Ncef3wea4QwvGeecSq1xvExaCWZAzrgx9Ys7Hn",
  "key11": "3SH5gKr67BaSbApkWNyUj4wzqb4PeYGRihg8n9XMsWnWQMiWKtPAamb5111GwigLw8nU4LeiUnNkUkz44vnTYf1B",
  "key12": "4Bz4h5LChBTQRnkGc5YuwDiZPTKFeAPzVwZN3LvCF3yP4QBieaGLEdKJpnVVbzibp6WcmexjxrmwEJZZ1tLRwWNV",
  "key13": "a5aJAd7FfGRwL4nRx175ecqghmqVZSN2jsTpssqpqLQfhmEW7PeDEHoQ8mEXueqG8VVxnHj22pB1tudpDfPbyGo",
  "key14": "27Z1wYhekoJYtGUa65qCGhxL9dMhgSGzLiHEbeH1zBEwLBf3vG94NHq1CDVcPEfJ4mmZ5V5Vt41Xjru81oz2s8RP",
  "key15": "5xYfKoNkQNYMnMfTsCLf7JFE7PqcMxpDRvPP8ee5vYPpmrKigXZsKqWDad1xBaSHq3EvrrpivYAbXmgruyBYKEfC",
  "key16": "c4cDqxZAiH5Q4yVZZx7BjuXG2hmtCSwPgfGG7Dcy8NKadPdNkFJ8HFdMkGHvGrGGcbyURcWHxnbfT4RyCfr9kmy",
  "key17": "5gAsuc9ykyavjfAgYzCJ6b8bjd1gZUwKhjnamUAwM4b3uuivC9W9nhubwRsWJziqoXLjXZXWuYKgtG54YjJ8QPQj",
  "key18": "3ic9CBtsjg61Lcjnr6YDeNWa3LFWCEzTGm3NWcL1zVHaLNGL1751TB46cUuDUtAR4LgXFuHTQVwoYkTY8QQL4xYW",
  "key19": "3596pLJyTkxhyTEwQv9WVUJ15pAw3EAuqopsJmRp2gGZDpEF31WofSrJpk4PZDx5fWXzs6KFGLFU1QnxSMB711Rq",
  "key20": "3n1UkQnTyfumSb5WcPt4mtHj9LYGZ8xxqNXBcSEG2rDdgZquaF6V6ekjUuBX4Phvi1xZH42hPDkWbvZ73MWhQWy3",
  "key21": "fssASFFZ5cZ4pk8ZHGBi4eokMcRgbbUshKutXGQghu2AYzCnSN7EB2NCLQBJYokwhaYtBN3h2596QUFvnT8YHva",
  "key22": "3P8sRv3CMaqF8BrdnjCHybB6yu3agvD8z8zJ7GdKyRr4Ga6S5KMa7PHCnqL61mk8Z9hfVdEufgSmKAMmVMZULHsY",
  "key23": "539vvndMFQdjQWBJCA7tMCSrVgQYdTugCBvG4UpAc7qY8giLXnFuUXMnHoD5vG2j8w8mtdRc4DYaT4A9KRd5hAf6",
  "key24": "3w7NdveKG9GfvsJeQYNfc6s5JwNLJhD3F63ajVLekMm4pqZrnVw6kuAvuyha12qKrgXs6JbgNDkhJagJGKrfn8Dm"
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
