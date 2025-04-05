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
    "388P2fy7gkjurGJA1aYUgBcai6TWVjSmG8xw7ZJLadNTNtyKLWdcrLCEQyKUouDDohPJJptat9uTretAKDiQ7A3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QPAyrxJTFNoySJDjzRhngbHVpRhYbVh7mdLsY7Y6gokXooGXju7nVR8UQ6LQN6fJgwRxkX9HhpHKnef7y68tkk5",
  "key1": "5e6Y1ieEnsxw4WsuUEx4ZLdbdTGq1Etzm4TK1JU7zHqcbDoANEpsdx4e6riT7GEsJAfJGcg39CpDzmWZue3mTob7",
  "key2": "4ZqRUBh1FEHhwxLtccM6o4oTEwYpkdzP1CxMq8fNzK8xDx1D4xzBJFzAEowPfwEmSqLmkCFUpi7eoKqxKVViFBbm",
  "key3": "5xQfjUn2qzfK6FFZNB7iXrxLZZThfbbrD26tZBMmWfpHjGcg7fWgGqwzj9MrZgUNGd6KK9JW81ECHtHH5pm7A2tm",
  "key4": "2dfDQSTCMQhKPeBaJpcPcsU9QFaTvTUWaRyyjYmPwfVbu7Ai27TpMNzuFLp5gPy3H3wq4CaUugFHUPtNJiAzY5e3",
  "key5": "26m82uJ7zmYnx4PDwDviLvbWm8Yo7i8aNtDQ4Pj7Zfh5KFTtsHLoRRaQChNkrjs3bdmP39RTW9vFEgfMqQ3dmfHA",
  "key6": "5J7VG44XRHQL1xAeRmxk4kzK5fDTPHijLL48gzy5i4REZVGcGTqHhrjKjRfW73CyyQsuMTWrx3BYxGQHcrrLGqjN",
  "key7": "4d2TJecfmvtC9vCwbeaiYLoPMq722fi7ecqtNZxH3fRikiNG7oo8tVkvpX1vLZVXE2naDZicViih5ZDbaoUQs4v8",
  "key8": "3a3qCh1yrXTVPDKdXLUcgXzu67fRmKQJ1FZzKgrQFUnwbK3k779PZheMfnA3vdahuPDC5VyZzJGHM2UaNfq3rPTw",
  "key9": "E7TjadLGY8UYjVKX6WLKp9uDQviwA1MdLMqSDTY57sfTkKZ9Fpy9dVsrCtuYmNZHrqrNSEaaKwUoV5LcbTBhrsw",
  "key10": "4Q2tLts6ofF99DtMxrGJViQ5YtL7Jvb16Qw1iLUcC6im33qxggb65Gzx8bjSBTzVLQP3zP9t8MNwsfnyAE1cWAQ1",
  "key11": "4NCXhH5SYHRmCenURdaKGnZBe9VinsJLSwEDSae7EExkpiSk93B9z1ZAuFuKXXW4nrtvwrh7vUy8fE1XwBtdUuZ",
  "key12": "2REsdWnX2B3ETUdz6BqEWk2X2pcKWubgfeBtEN9phX66htcqa2jGTHHqfvsjMTZTwupWqGKjjsqiptg5AKCnLrct",
  "key13": "3DaZRqJrBDVneTuPNv8moyXZarsQMfBvwcrhSEM8Bn3pfGedd9pDmMpREmroNNjccb48AZCqhucL2NLdrG9wMRa2",
  "key14": "45YgV9T3HgsrGckcQ2KenhwQznKJ8DtvbSiv4VtWyrhHeHscuwQmQmAdk1VX75D7meqhE6HbiwYzcy9QvR6c4zdx",
  "key15": "5ekyogx3wGPZgDierVq9yah6kQADiYvBWjdrnfyqvGj1TiTeqgZCPjejcgBUiAE98aJMeQsj9zzCc3GrRFxxU7XW",
  "key16": "avhFFLN9cEUvGaPT7K2QAH3ENo3nfMprHYVy8reSCrHcGvTBB5akY6XJPnoGu5WsHj566dhq2gWtJZ6GPn1whzX",
  "key17": "29k9Sy6r9PVqZ8JgHz4dpYu4PaJSDyvBBjBSM8QP9aNFhumbHD9cu21Xs5hVjq7dSQyFTsSF3g155uiqqmZ5sCDS",
  "key18": "2A2AGLUsz9J3kcjboBtWQZAvswfXJzuy1Jj39sUK84ZpJ1Rz1AjoEgcV56oMwfM6PLV4AFAAm5S95i3kYgfJPFEq",
  "key19": "reLxPoWa4MSKWHrbg98SWAJgqg9XxWQZiV7vT9NB7tPLogXP47e4Yo6a5mtsaPdan9RkHnTX6aWz1KmN2DsZDzK",
  "key20": "35ysVb2g3zPqDJvfWStYH5RFMtaGthGWBkjqR7cH4ZSNRVrGXBpGC7sg3smNCdKa9uobob9Lm6qDK2KaAxRQcrpT",
  "key21": "ZfY7NHKMAodt4YPRZ33x7PoQxgktTwBPYQHjnwYW5osyTse1ctieB9q4txhQ3XBgnsjSTY2TwqWQfgxfT7CkdRA",
  "key22": "4oLG3hz5UaSxR3fqPkrELEXahxyDuEhzju9ZkjU89d9ejY7SxMM2vpmPfR4ciuSa5H2QmykezHkfAX5UH6re54pP",
  "key23": "3BZdYDQhqF4JDQ2EiUyur3cL4F5iZKrqXUHxxCSr3pkPRrUbNZr1T9cMsZB1i59JfXZMvxXMuBXwQWmA1uf8FCkg",
  "key24": "3cF824PsvZdkamVovR5aFkMPdA4aN5RmDa29SXq3DMwUzjpM5rBt4FuuxGtuM2BSarH9EX26jPr2ZPuQ3LNGTV64",
  "key25": "3v4XSC9s4KMj1ZWrvLgA3HRBokPnEtevjTNV3VmSFqHHuwmiH2W8aLS4FgEhocRvCap6WPCtpT4ihC671VscWWCB",
  "key26": "5nzzmd2snqMXQ3fThLiNAHVfxB9M7yNDMSB2tZDHirT3CiAZvBdoNRUxiaYe6kP1EEzW1qptFSLAp419W6MrR1tq",
  "key27": "5UHfoxSyd5WzzMyXpakYdBdGvqiF7zTiP9Ngt45dbVQe5PoyszdkmKthphjQs1AjJvb1KLVVdTToi7SotmGhPKUM",
  "key28": "3sboYavHJbfS4BKfmwCynx3RF451X1AEvV4DdnyR7UXh6fXLuZMLzVxcqdJjgt4MhJ3LY92ynZS9PYBVDSDY61dM",
  "key29": "48viKnm53xe1zQyQHzN7GPZWMxkCFu7QsbY6Kfee3j9yrXgnCsss3JVjBz9ARFDDoNj1vSafAZzuCPALM49pwRTD"
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
