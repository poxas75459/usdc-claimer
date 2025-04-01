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
    "3pUc85zph8xYLRowomih84hRdc3sDuQ7efmStRXLXqmFUFWN5Uzfy6f2vksKn6d4Jshu11cBmNsjEq9XmMWXFABj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47dZ7SMvDzyoYoDZGYdYk4WUeYjq8ikVpyccWRJeafXXU1svqtadcYcHfoPgQmbziiPj7UeciEhif2U7KqK7NpDU",
  "key1": "tfrDixM1zHiE66VvdTXHUwyCYL5apdxk2pkwU95bD1ZMBCFbffj6SSFjYJVLgpUWTjLcKnHgrNPsddXxGLVyqDP",
  "key2": "bUGWx3GtBqonUTkr6pPP9KasS7xBw4eidXLBSeggy9mwDZwHNC28iwqtXtxw3bUf3zpCciLHKGD54mtauoAoK4X",
  "key3": "5aErNm4mR3eCFXBH3QQavSfu3SnT2jDwyL9hFGVqntudoa2RSsMPRKzx5krN7YRo9yvd3tmFEMYLUBeD96XVGnpq",
  "key4": "3vWaioaW2pUSbLtzaoiHJyC1zBLCi9JQjoKzYrsZB3dJUNR3D8tnacr3osWGAWEUfgGD5UQ4QpBqc1XgNCeVhhMZ",
  "key5": "5enfTL9sopN4ehhtfz1yvojLTBvp5RMciNzCBy9VndxXpaKAUm4y8apBDhGbuS7C8SgNtmXJr1cx3wZmH71Tt9sT",
  "key6": "3x9ocBz6mY569ZJzvXpTycqNPeGvEUQkKSqDcwyHjg62D2moex2Y39q19n8fhcLgRxJiKucv4xAeojUUGrFfVnvt",
  "key7": "3m8yEStu5W5zCLTqHQhgLqUoyrdV68x1mHdHRfJJ2Lvsyo9qCNhdPDzWotSbbzxUmNg46mgyEiHL8w8Rn9fdMiqz",
  "key8": "4u1RtfxnwpmfcKmBMmcrVdsKdLceFR543ZCdCN2VWfWhpsmNVgCQ3p1Z81oj2gfSmNUBcVN6oEhGG533uuGon9c3",
  "key9": "45aQNNz2Ahaoqg64Emzx77SXj6CrA1o3BgQqF6NmrwDrRDoqe1EZcdWLqPy99TtYcrHhk9ovCcr515qZbjq2oJKK",
  "key10": "24mgB1vr6CQgLpH1Kb4etrMgBeDE4PRZ5CsbkwGbhZ1kojigE943MjbubTzLUKUrVhaDW9H9ECrDn1X62a6FQp3k",
  "key11": "5pSDbzk5gFe6KRZVh35dCingv4gYhkRuyKTELaKHCruvWTvSc1w2S4PWLZa5RCrzHvWkw9m8b4hqocjyeCD33D1C",
  "key12": "3f7SmHyoMCqH2jLtdunbyVmWSPaT5QZ1HR5xPr849WWqcw6V7vqGBWaJiiiDfGKkN4jP2xX11UxGNusLrLgzUs9B",
  "key13": "4v2yZ5M8P5DbZvxUtpDn97n2iKVXJFBCJMVrZ2eupuyeVYyGsk81Xb1pnjqvcM9AqAHVVzxxXehAAviEqLkxftjZ",
  "key14": "5hh5PKFB64erfKKAahhEAz578P7rLukxpRg9JYnvM1HvarpfAUhAaSGGauetJgstu21NBEmtKtH7U6hERByuYxpy",
  "key15": "3N8XxJuUeSXk4qoywxWrrpVbLtvV94WKF6fzjF7JmLya3wUPZZ4p2GsC6MMtyPF1MHFLkayMtco5727sRuNEffUm",
  "key16": "2aK9YwXprNhtcpGgp5nYhshEmyfgk4Xdw1arNZcvnQKuxqwKkRv4KHBKCwFhwHvyZrXxkKAdcQEqrKh4vGZyVt2a",
  "key17": "2ko6AdFWQWDjBYk6abseYX8jKUBMLm1CNGYNM1uSt1t93uuq687D58VjmYk4CkSXXvhBocWrsn8HEGcyY7H29DHv",
  "key18": "5JcVyhrAPuXrv7rPmkLFicNFiNc8ER3Q7qhBsTXab8tUemeg9PtugG9B6pP6AxzAvz6SFLpZ9AGMU3qS424MaPjQ",
  "key19": "3KpDsnrvsjd2zjwcUU19QroBeutSX643fQDWJpF1Ksa58camP6ZgAojsQDRW6DzR8ba2mxZ6ELG4YJLKE91sQAdp",
  "key20": "ymrkmvpec8mAwYBmg9d57dfYmKQ8cMDbhzyCHahoSKbWshLpRNSTamh2GndVM1sChohUYxJDFCqE12ahsEEFukF",
  "key21": "5Z7dzFAmfF6oV7dwNLhYKVvxw3R8xeVgk9KanFRkLLrryeKdaV5Jq8ArXFtXg4VegR6PNrQFC2TzztJQNoqe119d",
  "key22": "5k3s1rWNZBde127N52rT4H36PZpXtQx3NBZ8Rhj6oui8ZLz56faXQ76HtXLxmTpEpSQnNDQPKfCXuhdjBTeN4vQZ",
  "key23": "2d1tZcMhiRgnFq7E2W2euge8LPNdxpSSBppeEBQAszhZosxSC72P6TcZNTktayCH8KPiJYAwtLQFKNJ9f39iWjss",
  "key24": "4oAgQCN2gdrWWkvqob8iYibaJ8FALvjVgszTJkKaHJWNh8fX5WrSV4Sqc74Bxw5njnVYVrkbSGhV8j4ErpkdPcXt",
  "key25": "jvk63GBr4Bqgs9XAkj55wZy7jRntN8EoURfWzxrCDXasGdu1UieStzGBuCJqZ4gQ6Kh3jgi24uYUG1oU4Bm9FoM",
  "key26": "3FDMgPXXFV6ZhwLNt6HsYxQWacpvmHtqk5hpzJ82VRejew2AFVpQPukfTwgNgdwVkHQ8HV8jik8GPjSgNbab1fbK"
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
