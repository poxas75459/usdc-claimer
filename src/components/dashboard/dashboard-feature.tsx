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
    "2Po71okUAKdGKQgXCjjUaDDr9wounEqb3eHCf5dW3T4kzdcxnudwS4dR6yvXoGbbmrKYjYeKtnDyiHMKgtwts6pd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7sfCrWabtP1e4SUT7W5drEnRwdhAbQWcJ7yNJYGt5MwVGSrcxHtYoFZZSwAFFQ47NDmF8zcwrTsWqfuVWeec7nN",
  "key1": "4VDH9UXkQnx9JbmLeJLxe4EQH2XsdJPN4QYwyufxVLv6mH4xU3Ze9ZEZds2MUAc77PoJv4uQpaSbytJxQUbNsU9Y",
  "key2": "3dZPH97A1ggreLnQXVhVDCgZ1Ks643tjTncha4ht3rmUacg1qmoxSTKDoRPshpg3bXaESSU9eWEEDd5psceS9V4b",
  "key3": "1291XHEnR8ehcAp4zpZKqkMB3FZc7whYq2iyXe6Hhhj44TcVtTZa44sDJMvfE2Fzyciapt7fPxRp3ewTLLxGtrkn",
  "key4": "hR1tmeWCGrkSL1syekpj1ygbfJVPH63dXJ8vjQPSRTM2TnHL2jXUJRRgTWPyeMeBCyo2BcxHR6N4oXey2CwSn7B",
  "key5": "4UDC5WAfUiUjn3oZyxYX3mC8uTM6Y4JYM8eyBFzR6H9axQVLCavq1fZbh2WQFX9UsKxoDNfNpHG5BRi6tMAP2ro1",
  "key6": "24nMDW4eBKWoxgWEfPojayvYbSVLwuwdaFGx9Qw1ee4wBJ7xpHnD4uzXw4xqA7oc5D2sTMhmvXDC3FQTd51iNg2Q",
  "key7": "5LW8hoEBTXQeN5fP83WztrJDKFTbTqHW6mor5pFbvoSzjPJdcLEYrMzn9DcXa4gY4W3dHYXjKiEoBx7KsZ5Dv6ZE",
  "key8": "2q9wKqfPj3spmLKNqkHiksV1My6ZizJdCnujTDZ831CvMop7ubmiK995Ex6RegMzop3UD28o5UMiCoi6zBihenxi",
  "key9": "BD9aB8kshDF1kYF3pRN4wg7npJGLSTTzBPtnbmLEX39a3NAxXnMGgqEMvQRviDXPRY3wecrmAuwM8aJmwYRXhBv",
  "key10": "3jPnJYupk9jeLp64sGrwoF2mY4EH9PHrdTWPn5NxEXsboJEa7cf65CfQWCLYrWZKDvw84hqqsiNMprNgeG8bwQt7",
  "key11": "TAwpCDbsYi1asWruNp2yoFsH1tZ5qwvZrfhpH32vGUsWEqHU7Q8VTNAk4kfn9xe7C1tz1vLEkFMo8hYeKnFK7Ca",
  "key12": "4CDe1WPeNybs1hjAQx8vcmdL3QcL2PmxGGGfjKywTVH7ea6ApazLV6RxXJiAXAjHNtaNMVF47BEJwstEvK8ikY2w",
  "key13": "5cXnM85EXnZLntCQAtRzn5nS26NZFefuHSsnbpccH6ki7SoNXGXYpyL1Hv2DXQbu6E2h5N9ioToUKKPpMHucnSK3",
  "key14": "67Fi41oLrRJN9uKvgdY8VzUvWqUAYNcNJ6SiFqBBTF6vTWav6RF1jLWSZyLvsmrbsbvX6oVrecSLAJXe16pXCkEZ",
  "key15": "3AgvCYuHcTs1cpwrbGBBou8TNKZb6dWYkoMnACpJhtQ75Uw5BzHqVLoD9hKn75JpUBmYm9dCxn4VukZse6WPEr9m",
  "key16": "3isdpcDizAPLbmmiCDzV97Cx6DguC1KS96Yzv2dWxniJpCVcepQzhhhQoR26111t1koan4gpusKZ9QdP4142Lrev",
  "key17": "4cQMfWvDqPcXGnjFFxboNxCSRMzAQGTntL7JBGuFf5XHAR2QnQByAF1FHS65C9gbFjb5gT3vB2jgkpRRoMAiHQtU",
  "key18": "23fR2RJztNpc2eZE7k7sCMTncLELarKfwSY5hCfn9SRrXusbavuNWUPm49eAyHVezfDijN4EEC81XiJ3pg7SdTDY",
  "key19": "2JVwFNz3h9mSmfu5isY1mNDrWRzk2ozoMkEbxyAfpVpMt5ZrF3jSgehHKMvMzBYFpUd7V2MX3aYGBV6wmTsh7oCQ",
  "key20": "3D8TZpwYfynN82piihXtKVxjWeWtcu3BKF5WMkhoupkzPkhnNUzLntRdgHqFLLAN1Z5tjpwYTnMt71drBf8vRAGh",
  "key21": "2SJch4ECzdTs9o1nXPzY8TXLqJb6SmadKq4gfRgd7ViwbxwqbpKYrgyZ5xhYja7WeSy8ppwDpa7SvJNPZp6WXKei",
  "key22": "58XHyHW7MAtS7bJswTED8NULAtHhJsDSt97RQu3hQsm68ejdGDdrQuc6cpNBGo4JefSKg7j99Haj2mQttJKqriR2",
  "key23": "4hctSngMBwbASUxHYqraLzDaEL7raEnDXRCf7jfm8Zt3rD8XDzz5CrRQaTyoeQvtb19oBottDkwYQczrjm1LjhDW",
  "key24": "5vHFb5bNLXm35TU378kYH56z7eUvg3G3eDhm1tBh1CRhqEe2uapDbohwKvBR825Q3JXHXAdmnKfuZkgE1eurfvn2",
  "key25": "2ZsFr4bFqaEgKN17AstjTv7xxMG7nu9XzvPdZQY7zMdJkwRxfDhWZCThCFB68ygcNdj82ZQCHW7LfQx3u8t6fhYT",
  "key26": "4fmk7S65BEr9U1tQbraLwx5gvQxsGHNvpZ3mdTcDJc6XYxYfXFAAVfXQSGRzvvtfrDCvsefXTD2bgwSxBtZCFqxV",
  "key27": "5Vto2zzj3HkpT8En7fSxjH5KDRw7moWozhuF2XmbMHhErgQjy9e9vmpk6Fx7WK4oGGUbyegGGXDGz99faoWEQ1vV",
  "key28": "38eTtUBvGSw61EyvNbQne4E8wPedvRAGVcCzwecZyQLQkHq6HGK4RMmQ31EQgqfkiASGiys7FUvDFGyAB3miHQ7u",
  "key29": "5i8P1VzBfBGsV2RrBiFyg3MfnXjcSvkjhkqBaJHpxT8aPK2RC3nk3Zyt7nQAaMbpuvNCvW1yrQyaHCvBWoc7xY7b",
  "key30": "3avXohmNDDTLSY3TgfPJVvX3cEDw4Nw8KCHGPP1w9L8jGaQNRXAsbcwJ6RGoV3aS2SY9V7wHwZMZtD7WEksNQpk6"
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
