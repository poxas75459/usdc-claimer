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
    "3rboUxfuuK2M1LSwbDwEAKVumMRKktcDK9GsQpuxypk6nr3kpeaNxHVfv4LxXZ1774ii1sB6veDvRkvAi3TVKtAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q39vR42JCFZhyYfKgcK5M6HZwd6tpW77dHHShCYLGbKcSvpHjGZf3gKyN7NyJ38wVxkdcccDNsg5eQPH8j5rEfy",
  "key1": "2o9aTyx42E4CVZ6y5pzbRHxQvhraDRK5SftXyc2CQEcKBT5USGHSUQpWnjzPy42BQh7hY24emxESf2rVs5HEb76Z",
  "key2": "4jN3CfKTN3rRUkUy5uyyTDo3MU4nPaJQWeJVHsiQwsmZLiZPpiPrCkay96MU4XyX2zC2cx8nwW3xJ3Dbyh83DQF9",
  "key3": "44QCh4AgLSJo4PtQNAZuyG7DEPuehSq25rbzBoevvsZzGsQEh8gdEyxb2qoyWXCJMmktWjc2HTgdfXRVB7gcPyUP",
  "key4": "63Wa2WWAPtXitQ9VZ3dz7Eg1BBhDpRp5wCR21PkxJAdJua1EANzvgkgbcpZPnCmKB5depmZNYziW64YwWDr2EBix",
  "key5": "5ssbvkn6LQsZ3nkRPwjcVx6hsCdYhQj2CwtQVfQH1EqKmLJ7cCv8S2AKE9o32GcQqMYuLSDfcp1zveVwQagvJxrP",
  "key6": "4CmdFYsDv7ASWpwTZa6VuVBesqDGtQp6jzTjecEma8Rat9AvZHGiQRbJBzmjbUnsQhhCyYMkVtGVAJfBDdhAbLZT",
  "key7": "43toJSHzFKu3FptggxpwfFws696gX7tseFcg2zGs9814R6gaYRj1TW9zh2edEdomnm8MxDQfdL2vSfAv3cerwENz",
  "key8": "2gcLPf7P1MyitsU2jWm1jXNP8Ru7hqY5LzL4MfZaXjSjw46VtDraHFQzm8GhFAdLshaG1XhZL3MsjmzUih5S5PxK",
  "key9": "48e9MmMfTwrPBwpbo769QxbNDZeapoFmf4kskW7yPrpZscqutHkqxGftMmCUux9J7GMpkao3YBNRLr2cCLvnsYnf",
  "key10": "44fY8E3TcpMsbrBvQ9RWq7YQvtU1CTRv77JMqLVMjQMF6ibhMpkM37gwKV6WAexNUop82HdJ8gLjJcRgBsbStr6v",
  "key11": "3Zr8dqctAGxmUxUBPEHpjzCgbwqbFcksiaP3tD22bWarASCe7uxfGKDBdz2ETFf8QboNY8eWGkin8bqARxB4Vmyr",
  "key12": "3Ma1yx1XFLsvnL8xDWBtYieBXGXik9uiPxNAUbiCMo9qJWdTu5gNH4XxDXnMhmZov5oEpqAoRi4nYTGzhmspeSMA",
  "key13": "23mn9SnLSFz5qKATGvStT5uy9CKg7tXB1m6PS7kb4Pp8j4guC1ay6oCNwRJvqoshEAkxRwGkMt1PhjWDpovCeYko",
  "key14": "PnmDnxybHiXVg9yuGTNrc7g367qzgpD6c7E6ViHEWZkJM2HBhHAjQyf1MXbo4iCyxmYyJ7jDcq1ttZcnTUpfDjF",
  "key15": "5t9bW6CHpaiX4ERyZyrWwLxijs3geGZVsHXe8yk6PpqnYqq6kwCidZMEP85rQyQTZtfq8ynxkwvEJrFH3JGi8wCj",
  "key16": "4ucpTXS6ZsA9WkcLp7e45hU4gGoCbj9FkJ96XdzmfUxPiLEnk6zj12hdARSn3HPao71m81naXjFknxrpe3FCGqLx",
  "key17": "5iWFakRcQV46dNC2wGLYbnCW5XKjwMmtUGgJzxSRrwbRTKx2ExNWHwJDoEE1ri4KmdirQmtTMhjbkq3s7T6mkrWc",
  "key18": "5bMuF31Ecfx7TPwCzgcBw4QZJ7KAmoSLyXcE2tt4fdpBCa128wgSzfaeVVmnGrARZPAyKEvUd1CpEW4dy9MPxwbz",
  "key19": "2hGdjpyTRH3sY9pH5shpmmHx7NLwJPzcB1TYMk8ireLQ5ubCG5mVQrLpmMhzAu5A9Hw71DtNz77wGaqtMkimEdqr",
  "key20": "CzpYerS95tCBdU4s9yucAZjVML4zSnNnunQEiyNNX9gykjdHqUzUWEZWNKVzEfFTJ8pLM6rCxW2hueQjv4cG2ok",
  "key21": "2LthSGF1RrdM9nSNJLnzTgNtM7B41BnpytuUWpZZwrm9c9yqWnRs7htTUAVCkq9NTx8EAqcCnjsx5LTmiLwp7Uxw",
  "key22": "3UFRGjLAp5oj88nKSKaPUbH4ixGoXsWTn83b5Y8Rbts15NirvG41XYfETev8GJhm2hmKbnMHdqufENxxYcjenr1w",
  "key23": "45fzCkx7nsBCKzUYGPCBdi9uB7bDMbTXgRuU1sfbWkcBmTg2DL2xmeJvuTEx1GCqSF43nyvqE24vL6jajZ3T3YDy",
  "key24": "3uZMGozeSAM8kxi6WrNoP4LQQ2AmDfDqwEj2iFACnuX5P6sKAgZy4TTVGx5Ss5rZSoUStUyfZVR6LhLKZVKneMyk",
  "key25": "5LvLEwtDdAAQ2eW5yAxK4Rf6Ey677MuNrBYgKRsTX8vvKE78jSmnjZwn5vGTgRZ6frmu1k17A7mVv5XYwGftfVek",
  "key26": "54EKJ7951AUskzoWqYzJ9KhCHXMsrHJtg3xFbeNcDq1inCB9ggFhEUHEf6KHFDHpcGA2nSa9tDoTYpkTP36rdqAk"
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
