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
    "4gdrw7DX811jcg9cXDDXpCbfEWHKogim8bRMnH94zm6jmj5wrCKh7DWiacwcDkwFQTgRCRFUtavwZYntAgumY8T3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hTGYk2axS33ncCZV8t4CoVzRBGapQzLZf7RvcMQkVqhDaNWNJjSawt4zg3M6yE7PCLAz7yjjfHASAq17GRexdNH",
  "key1": "3dbEd3SvCbPPcBXpBo2PZBQGk2mAyeWa9vrFcseLy4drrQk6a9CSWcooEBFTwM3DhdWEqcapkyNoZ1B6qtxCn7X2",
  "key2": "33RMSQgWdH8J9xZn2nTKpPNB9uWCwTaDAE1VDxWxioYftmQFT52pmyaSgb6WgjZuYrF3VzM7W8HSTZiBPEYYu6Yi",
  "key3": "4JvqZedaeFrqR2A4T8eQsnfNAvrPRLw8dKQCJrAfAztCycG2GMFt8f2mqbqGeQ1VKtfM8RE9prQ5R72Sngx9GxBA",
  "key4": "59kk3LGEaJgQSxwdGe5DnK1qz5DNMNUrM4wXwBd4DEbR4Dhmd4d4h18hFTBwf6R2hYVL3mCWwZVskQXWdQcezs6w",
  "key5": "5NFJaEJGcRS2tTb7iLbRsfAqG4ckM5jYkLkh6xSS1c1A1rnfuZrVvqw9Nwbx9i1qFiJk87tAKg3oegj8whwXbLCQ",
  "key6": "NFssfmbRxMxUgGbLF9mM6brVKVLEMQdx3H8uPvZQaLkz7Emf7G8mQoENNJAJmZTcUy96rRy1exAer9cBLMXbUKL",
  "key7": "5DwdipXq69MHmvbmjZB7NbypxSMZoBnoR1myzT2wn6NCcaeiBJNVUCcncMydMpKZTtGvqdR12KL6JApb9DcJhsBc",
  "key8": "5URtu3FrKobyDtKmM3duytEEpAeSx9QjD5LmAfAtEcpFoi823b666HaHK6jrkz346hQ6pdoWAjhZgAjfszYgZFjf",
  "key9": "2mMYb9xwdv5ssrq5XZkyfAUxrRFL9otEF98TQqqYmbeUFM1MWyLS5CXPb2ntdZyKEqAyC6tHjqs2iRMxJ4pXvvdX",
  "key10": "44Jpcg6xjt2F9W9mShRzR1r4o53hNyV2HLBs9KaxYvEZiFE6x8okbkP2BH3GqKUtB5SUQbnGtPviBpCKpm2gHN3Y",
  "key11": "4iBp4J1G4JGgZmHWLiBXJjNE2P4PEWXuCMf4spHR59pt5M6i5nUjmo63yecXHGo7Nj4X5ia6pYmBVZHassh4hNa5",
  "key12": "3U2RJYL4ZFEpndLFTrXF6hhq79KqWixeiNQaS1KhC8Cuzp8B89xa2dN3VnBnggXgogdo3Po7QexEKXc5mkB1g4LY",
  "key13": "3kWLry73KPFCxHtWJRUuBgPMsMHL9bfwFGvbaypDh6aE9vxFtDuRVyBpubAWaXCKMwznfkP5rijgnw7tBva4TMKq",
  "key14": "2PthcTsEQCutuAPdhx3AFtr21fYwXqyocdmdktMSVUB4iTKoFLPJrDUbnPrndcdVKJ3aqBaVHhGy6YdawZbaViMy",
  "key15": "31j59r8FEeecxhHoUZ4kuMfjcK722jtPCWnrhhBfvbmbaMX7e9nH2WuXxamwiZK97K5VSseNSS2PP4wYwAf9jqdb",
  "key16": "2WHqmqnuaXxyc3Z6uFc3ZSAGVM5QPAgRXwTeuFjDmCehDNfE4RZLTdBZ98e3mRALT7K3DagMcSxoyo6YBRbHHRfP",
  "key17": "5m2uNq5aFDj4NoCzXgDQdgr2KncCPv2TwrmKzfeumAfnT81uM6z4Y5mdcnhK4UVwyErjRMJcyskh2oesr5ZiMJdu",
  "key18": "9sQQUD9PysJUMZfm9eQboCjfBLzuFeaMAREiBmbkVJp4XT1j6afkzxhsWDZrZeXkjkLBAWjQWwGrBEYKmjoFjf3",
  "key19": "3e8gfF9A6G9TfGM5Z6t6SShQtifKHCUd43DiRPGpGmf33Tv6iXnJELZP1TAL4sekC5EJeWM4ZskH5jkNafqhbAHT",
  "key20": "dwz6AbNDs5bnzffxmU5p6Q2hgV3NryphNDfEMkEn6CLyxPyrLh5BpVSRqmpSoYaPdZUuMRi6xovPugWgNsDMTSU",
  "key21": "2cMiatrvV3rsdEEqwW5hX5aD78pChXQQNFhm6MVZ9bUkMnrpSRG8F8xUDbyVrsNhBFS1xxFwR7RbJRYcRDFJRHXu",
  "key22": "ex57TkFxeFVBySeVUcqexjAxLD5RqJM7uBs25BUEkQoGwwVAtVpizg4PydSsVtT144BJrNfWEBMKiBvw98vnTCR",
  "key23": "5wSS6z5mtGbKo54hfdACCbK8TKSjpxoFj6Ujzbv77SQZdnaYLUB5sSVEqiNz8eVE1owaBHmnw1rAVDM9ApMmufDW",
  "key24": "2Didkv9WRbPSJWA6VGKKhchJJChMGMJdeAkvRgfbQPWmyGkYCo2LgvcskCZ8QwKhBYj5kgkU8XwiNHYXzPbJZUda"
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
