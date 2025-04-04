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
    "61K7Ac1zqAPcsmaQGZidnZasyqmLbtG7x4otKfiqDQUQTrQV27RDWFu8VgXhJuibWPLKxzezW4MB2vCEAgiBrQhL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JCVrchoUcY8tzKM5KfkqBSV2i8BEaymmPxUzhj9XZsiRE3t1Ne7H7AvuWer78eySgUpTgwaaceZkzuJ87JrB1q2",
  "key1": "2rKi9qqbnH4Rwph7cFotu4HYTZXSYSxVF7i9XRE7c9jBfiPR99C1L1ZJsubiWoAJbnQhcLaD75nduqmiSQrn14nS",
  "key2": "RDk45BLWzrJWYM5hWGee43H2e7KqwKJwDnnUFaGmV5qmmo5zd5VeknehQrcWrzKdoykcRVkjrR8wW1P6ma9eavz",
  "key3": "3dt868r2pEsmnemRCmfdcoLUK8w4TQ9WJftZhB5bgatAGLPHGn7SbUYTLqyLyCb1CZibiA6jttVsn8T5u8bxnf8j",
  "key4": "31oPu1YBs5FHe6HG4fV7APfsHDLtBxafTr5JQuAvZVtyE93nr2WUfwQh7AwkZJM5ZTrW2z7pexRGic1Pexedp6Sv",
  "key5": "3149pLnnNUg7eb6b6N4eY5HhNTkPxZcqo99RqnF4UYRY82rNnxePWrUNdbCzw3LNrPtfPGWT7e2rKmoRp51SLFLT",
  "key6": "3o99fB8wjmJ42eELJ7k6G7xsQ4nse25jYiKUu3JTiP7RPA1yo1yCUV1gp6eMZvKaZo5qnB7hEAuKh1tNXxc5MAHg",
  "key7": "4i91FUatLqyWhqWNGrufZdZF2ctiQ5gJeSiYjMwdndmXjruv3FJHQTy4hoSwkaX5bMyaDKVn22WHCuWsguB885gS",
  "key8": "3hmCktC9qtfF5jAnTNGyEXYYsEzXoPwG5fuBdQbFqgPVadyFWt5hrnemm8dqMiKiLYPkoYnfV6GPqmeRgway3qyq",
  "key9": "5kBY3h8XBQdgz6SjG3hbQimVSZEqBzvMVSfvtPSdM7kPbpoCECbyeXQ5tUESasf5chd6gQeMaVjQxxkTdD9eWtme",
  "key10": "4iqTo2JHuxTt72sXpZxECYamW3TWcdXwfjJJpL2D4P5TNaqpGyZNGfWNr4Stg39d1rGvfMxPXEudXXXE42VBXUJd",
  "key11": "3jn3VWo9bmNJq9KFNr3iBAaVrEacdkdER7UM7BdxghrFwHTHyqeQDVxJ8h4CuhXFPcTp1W24yGh3431oxt1R4eeZ",
  "key12": "5uiA7fUTJKETYBfH5yX9CxqrSJTiVwAKngD7bYfReeHZdzpeTDHirBm5dcsXssH1mgSMfaUc3DretUN7Y9Sgyj8D",
  "key13": "3Aiw6PdbcS2xabQ3kZarYDGNZj5aJ1P76uqc8orCbjCD8DSwRDgjmZY2jZnWyN4UKDtMzyF742WMyagqntyobuLZ",
  "key14": "5UnWpA79FVKwi92MF9GD7dfXqhGGLcjER2qMMig2XubzbVHH97si14vkcqzo8UFxLLYQuk5bgyT7MVWvPEneCR9o",
  "key15": "32unpXoRmQ4XS7ynLmRzGW5XT5U4f7mRSPegktiW7QwXoRWvkPQinoUrjtaSce62NBZAYTQ8i4g2AbbeDgHkm8cf",
  "key16": "3BStCTRgfrit4YSEvtFSbwoy9PcwqSCtYYSh14QNPC9jWMgJzrSmRxbxzZgg7M8jpqqXHpoo2qcSpszRHyZ8AZh3",
  "key17": "4eHvwP9WTuQhLGwTVgE1kQ1ZcPXJFjVR5hT3hHKinbntu1DEstXqyAiLaCr6wqzBrNQvpKJsZuZjnU4NesSrgm7z",
  "key18": "4u8TSKDez9nzH9EEW1vy1DPwBDRFMiA42zhBy4MdjuoBLQij2QsyiWstiSW5jHspSZWc6iU8q3Zy8dxtaWuBY1r",
  "key19": "2pQqzxFA6nrMZLfLuztYet8zasYrGbptphUhiiAsQgT68MLLUszrjkZn6a3ejQdFTEfexn4EXrg3KaCAA2g9Wzq9",
  "key20": "64t7P2RZknfht2ntvNzmL5U53DWYAadMAneXv8JxBEx1hbyD777fCF9S5mcdt4dpoRaBYrYQmnYwcwKG8xk9QZ1W",
  "key21": "1t3oqyP3fJeq8rax3nvAyPaR1PjQyjzuUCQ6QiohyifAQtwwPj5Jpn5GEej1haW98aLpCFC93RSuekVTtNfvi6D",
  "key22": "3s3xkz8oURg6sVqUMMorRQqw7uu9hem5b5XCRsWD7Vyg7PUB9rneMTJDtaKDbRroCUYFJqQQsUKZ4Ch7cjMhy1rZ",
  "key23": "p51odhc5Z6KBTB24jizzcs9DfVSjmbpCuH9McFgYdc2c8PiEbriCWYFJ2uwutDPTMspCwbVS12BPeczNTmNoivv",
  "key24": "C1Jmwu7kVpKbiSycF5DMAMfzDxEBKi9ePfWxUytyWNEf4Zc2YmETvrvybwmQThR1dgRJ8sjJq3hzSDS5vtdBRhH",
  "key25": "4v7UNieoRZGH8WoGc3aZuco31vrJB1CMGttqDJbGpjsRgeJeY6WG1m4vc7bNE1EcdD1J1oZGomgR3ao1RuFU18hW",
  "key26": "3zwPT5TnjgHrxp6WjiFSrUKzyz4eGm9ULjrBnjAgqKtLtTWUPnSiX1vwU3xsVAfQf5uLU5urKbenG2kHhM5CsriB"
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
