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
    "bekaMhe8yX4J9CBHEuxd8PY7dWASSdmPGGi4aLT4xetY1AT9VnW31g3Fx1qBQBbr5LXQEKvWboeMCqBswdMZpqj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yBibC7eWeS1da49xrxp4Jw5iVZttawRQ3jrg6YevPRruLUt1BpxP42WVQKrh8Veo4z4BWf3jJveKuxtguAAKn2e",
  "key1": "27G7HTCKNZH2Arj24HYKtbihYEmWixPkbqoP4tE6CAB1pmA23hretiqguXVEBaer3LskjjvdcTBGsVxdHpGrcdKf",
  "key2": "iAvHTLEqnqUNTS5WHnbyArspPdmuAvoprGfYT1s4RLXnkhvF9dqQmk6pv9eJrNJGyXonbg67ZX1TdsZMP159En3",
  "key3": "DQDRTHWi4y1GRenHgV4GjWxrgkWVGG91NY5gusAEmzePrfiLd7RQEWGgpMzwyycyjw7WaUYuLfuTP8QBq2a7i6R",
  "key4": "UoPJGvVUW4CJihpht3m9A14eTzraAMjjdoS9VaHwsDCbjpebrXyqVAAgpmXZcNCtaqsXExzvwyh6xgGRvA6PsXm",
  "key5": "2GEdtoECuh44DEfUY6GumBZacyvx8FYAKjCjG1G6ZVjZLzbCE2spb4Gb2AFWJuRnBoRAjmGAZLspnXdbSxcrN9Ng",
  "key6": "3uC4jhL1QSMD2h9g92Gq5FAk2qWHY8KGusoDFimuWRhQqNz4Q5hg6dqaNqojKYmHuHopuEC3gBvndiM32gPuorjs",
  "key7": "45pVnWprC4NyDqaNoTr3WzN9EGWJPtakrpzYwfFZK6cBSjZNkU6qcpFoEzfZ7TDq2H75eUAouJLASdMXoWpeAcq2",
  "key8": "5pJD1Ti7VJ43trWvke8GniiiNzMMFgmserPH8sKNhnMSoXfdYXxE8CWJpGUgReq1BHbzT8eFLPGZWVmJonWMyWGM",
  "key9": "DGDEiXzyi3nA1B9DZdFshhCLQ4rqg8mtLrJ9ti9yM4mY8AHzTbUbQJ51uEDCe4TjKoRckPXiLoZKYx3Pdp7cf7t",
  "key10": "3dRAxw6MCwkQCNUYV68KvrvdNcDLPffHaamfpUXkiiqX5Hn9k25LiSqR87nJ2U7Vc6ZH1sq1JNUyH7pkcceVGq9y",
  "key11": "64Tp1LLX9e7zdTrfgRFuy4cXceSwxpVLVM9VuFqysrtH8sfCQ9oe9ocGnxx6zhgJpQkXGYQof13GJaBfh5pFg2pA",
  "key12": "5jVYQMTDEj391L4btTX6CJazigAHNN5cJkdLVT7pZRg5UBANoByDTcaujvj8TByMaVU7LCq9pbMMEF23V1tTTdbR",
  "key13": "45NrG9P5kTUYPW9FzdP5daeqkEDurKqkFpUJEfEauAJmT9NqVD1W5FKJAHRsPU373NQxU46sWuEcCgitGApAsV4Z",
  "key14": "5NsAecq71Yhtt5zg2zjgwdgBtgtrtwcTZr7Hfk6UZGqynfwLZ3LafBk1HWPB6wqNpSLqWCjpvPwoJewPzTk99Mtv",
  "key15": "2Hp15jikq5uxNs4HtKxK26KhuZXznkWJTsRBMHdgpPD5XBTUhinMcNggwrU3UZ2wXVevhjvCrNc6VRK5SKFJi74k",
  "key16": "5UJJET4JDsyhMUMsfxmzybQL9x363EDgfzCLL9yvEnmDKx82i8xCRCHocK8S9ncgG3MkRoYPBg3suH4QCuY7d2AF",
  "key17": "4yMhVyi96WxpYxnTdbFBmySCg4hGTavtf8VVtXsnndeYvLxaMg9EciHBxPtm191276oLvM8uFk9aMry4jgpW73vM",
  "key18": "45spb1myNgxZFirEKMQxqwGad9QxSRsg9cZcjmfpyvh7tZ6jrGR7e4LYWFvAyZqUnKUNJB38iPCmvCQb5kg9aCmN",
  "key19": "2VRmrLVfnMwJW1j5gyqPv5ZSbMvuZSyHKV7P8BwzhutXi9QMVeh6SS2HqCmaeobndp3JJYAd9uRAituC3YApxr4F",
  "key20": "2LCT4iMgA61jGVrEmdMpzmvKES7ciuFH7Lekp7N9EyDpUnztkJRetormMR6KW6PHtWwR6dyk3BD59FZ8TBckySCT",
  "key21": "EPRBpav6Wa9v2C3BTiQUZNtFvfAcVKTFPAR1o77Fn5wvJxEyCDhocnwz7tXPxWp42aWcsQN6hgkTS3Vv3YW1wso",
  "key22": "4fsf7W5jZJijGEjziCscdMMAjSRvb9BnhaPZ5JRovcXdNYuhrLQ3vhZJ2Vnpu8CmQyR29LFqZciXkfMMVB92XjYM",
  "key23": "4to7zjiCczdPQaCbbMaXfKe2Czo1JhMFmvPMSUwrN9UbZSB1RGtwUagDPcckPzAN8CiEwAoyZd8zETpkMXSnCHQX",
  "key24": "4uh5WLVtVdCfcNjYxXX5XJgQtxe6pA91W9pci1GRv6jUV75wy7hj1LjJyTBkTg6J4YkzmFyoan5qnGeCGkfkTidQ",
  "key25": "4ZtfJycPQKG5uHocMMbYnaKxvCZNcy7MJ5pvY4G5T3BKPfPS2TEQctVd573RBozdxRW2wHooGfXZXspDRaQAmaZb"
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
