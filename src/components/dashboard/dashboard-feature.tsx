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
    "2C6ghm8Yh8APRXxzs3rZ2GPQMLz2nxDdPFQSH8uDcqU9iTRhRgTTFiU4vNn8Vx8ht2bYJdi5LJFrzUUW8WLPfg9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uVuXJ6kemjyEXEJn9zFMA25qNSnYQ9HbL9ZFSP3CJtxPHYN5FgDicEYBbU1Hy3Vfohycaf3zKbDrPxrxLAMZPpK",
  "key1": "2rxRqUFDee5bUKVsa4j13tZ7DuvZub1jmFHn76P4BDtDCJwZos2U3MXhzmeGuehzWWF5QyuHhXJ6BSsMS4CfZppr",
  "key2": "5x6UmBZETNeMUqk2uvPtuqSEbY8ob3ZfyucwiCBUN5vCMWgqZ1LiQ9ejhj673W9PC25o6kWeHquJCMct84NFu8Y5",
  "key3": "58EA1W2CeUKYhXFN8kVBMF6hDenSgGV8kpwNEBB45NAkLaTQFavH4w4H2vNr5nPWBiD3smtk7T91rY7tMh9De2WP",
  "key4": "4mafQHx6xcgrvUU8xxUtMgY2GtmP4jThMo1HRDcoTTaomHHpqjM5oA3W8uLWD8Y4KX91drvaL3RwDp12TLD9qfdc",
  "key5": "2dwFffMan9XvJATe5K6JHewkUZ7iZ7m4Xy2KsaMfScvjJhMNVSaUJgYb3ikfkZMzkcMDBHJxH3QeFsgBo2bjwdVd",
  "key6": "4sogrq1GcXDzSbckKJD9L5WWJWhikEVjoN3T6myybm64z8pRSKyqrTHues6JGW1NdDhHKZDKKaTCnDbUv1hWqdba",
  "key7": "YSfyY1fqjo5JY1ioWdk5V4f3bgwD5TPiEJv9bhTiqosm581J47nS4TnvzTW1kgniJDAZdJeNFEimpTEvj64AHND",
  "key8": "2ySFFTnQ1Ks2EH8nKW2iFvJmvRqZYK5zCXsnNZos8ivMCrqgegNGRBnZAi4EE32D7RcDBmJ4Huz45BMESEmFyYXb",
  "key9": "x3TnQRVZdaNuNKnZR4mAp4TyJCadaDTi45WV8qB7PwLbUB5yx7rFwFwztwr2ABeAn4GYqLnLahguzkLY2GHoVj9",
  "key10": "esiz9bwYVuKLNvkc45AnKg3ZXQS1F1k9fL4k2ao5Ron1ZK6FLHKLoSW9CWQTM2TuSY5boauMgowUzkA2GArhwnR",
  "key11": "2gLU1F2KAazXTRtr1ZNZp27noaKgeinFas9jnq4D23oNBVS9pWsS6BPiUGfCfNHv6nGeUJQgZC7tCWrCVgCnoPos",
  "key12": "4uVeatcVSaR3wsY246aGZRuPrshYGHchuEhDUBPCRUJPNcnNMnL7rv829Ptk66uVDHp4wgQM56BLrEFmtCApqxx2",
  "key13": "2F1DcDp7b1MDPNGqRfcNGrXSU9f7D12xLd1aE7UVuFKWKkmrthEWwDar26tDotHiha2CugY6tpwGybAhRRxpaQ85",
  "key14": "5LNZkCJ24qi51JfRouYrsj3R9nSSLLfn49vGxssicbNbm5fBVeGWcHy8UWh2a9PSTyR4acYiuweGGCcZs7MvA5bj",
  "key15": "3q9yp1WpdJmmApMse3ufGgRcpeek7KcxwBR7jWV8ujsg2GEmVST9DqCikfHMA1huRykZAtsnzM3dwUjRzSKhfKFd",
  "key16": "3yyqkKp63XeyyaGqcX9eRuEhXE5jzR8PxnQtzpJjXpok4iKkK6FNWww7UZ2VyifpTSAy5ykgRvumofJMLoSBPsKi",
  "key17": "5HXvxBR1pemP92TqcX3GL15t2PdP5autS7EjCpoVCWK3WRyjsTSNPZc1SbcktiXbW5eaegqajDU3AQkGGGiAUDD1",
  "key18": "3iK1yNW5wgDBSYPhoixKti4fZCpnPtooqCNJw1ujCH1xPytyNnCtDBgJcazyesg9SUav7xfLwZege7pyVWeTUq35",
  "key19": "43XLu6jNnreFFJ9UTvLAiTbv8ANkpDZsd8rwtjj98EWR5ZAgFnWNsG1dP8oqqwdmvgNBoGWs2QqoSqptwo9NEfwv",
  "key20": "2iykH9vwvxd8K4VrJzQxXA64sd2kkMfiD8citAaKZ4GrbMEGwZpoEyvjCkzWRMLycZx3FA3GVVDqhhQAjGuexi2x",
  "key21": "Q3ZoXa8TRUmZij4KDa7oHB9aeNCYViC9otJ5PuEzJPeDHsCGzceqews9NY1QLX8AW3xWLnu66r17EUwfHpqxGqB",
  "key22": "397BSxKimVLRzNyPXCPrt2SEgaAsrzSgFMRDgy43syyXuxDHtHYtKfmBm2rAyipfGxg7RURoFFjgQF8eN51WRRhV",
  "key23": "64zkaSRwCMGoozzfMweSTnuYMEGKcBiM3A337PQFZSEcQZDMjnwdmifLi8f5z68x7eatuCMTRhrLSU5PPyGWJ5ve",
  "key24": "BXqeB8mWZP36tjzSMjaeHbEpicxwsN6FxtD6t5gGwYcyyBLTRbffvhHPh1wnhHkR5c9VMWK6SKHTBzeBBpQi4Xi",
  "key25": "4LWLHQWuAjRhWjf9Zb8NKHqtgm8aMC3uKEyL68b1tEDMPG3uxWEkX9Xar4rMD63iUATayV75sWvVTkoerdgLSmjD",
  "key26": "4NVUdnmppRn2EGigtH2r4h9d9zv1rppCKfXADaQhWbwa3TZMCc4dqkiRHVx3CUw95GJtFjiHhiUcXLwR8U5XcsdW"
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
