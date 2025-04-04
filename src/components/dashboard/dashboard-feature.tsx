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
    "3yZnQFUgKTV9sWn6J8Xq3gSio77JQc7VMVErQ9NHrGr9jhn3fQgQ1sreWr2gGFG2rnzq32dqArRC31eL69D469TA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31NJjfXRCioR3X27fh7veY4jnYKd6nbMjr4PcjxQjyE2cgQPAcMDYHHprZKWAmScsbx9FAgWMqeqDxGu6sQpGnoj",
  "key1": "pRqWGRsEm1jvxxfnwvP4SUcRc524mTRSgEVnzmbEPn5C5CX2m2UDZbmmK5FCv1XaJowgq2axBGmbyoX1aQ8C9j9",
  "key2": "5HkLCVtjMZSgKegPb68s1fLYNbNurvofZqv3P9bUXpE1wJgttfYmDbKrcFyVxKYhm4GbDBVRMLn1YNd2joETRNua",
  "key3": "4pV7wR33FcBRpxG447RUi8jLheg2rNxoKkKQmUAZm5o48CQ4kio4heihCmyfv8sXwbqmWA5uFqNCahR2HSg2WsLm",
  "key4": "3Nz3XPcLFVbBUujmCNuX5bb4WYLnCQiWn85HGWGas3KEXPdy9qgVh7kxDAHUPGqryJcVfYJHsWhktfJsGFhCpDFk",
  "key5": "25fDDC3s4t3VtnbDBFKGpwvo3oFbGDBVvoqTyeCYQEQop25Ue2fwVZGUptBcrpjJsyUieZSwToVUFHcdR8LnNXme",
  "key6": "4P3Asvsz4jTgydGF1ViMk5EnrRYDt5Se3wVUQpgXZuGoizZkLr5fUPcGkWP186umG126qHj8DJ8LYwbphuhyi8H4",
  "key7": "3Tgxs3ZKA18qEtNSFajTWVdpMYU4o6kULFJjyJ8VsKuJFvEjLGtMriDYrz5nXbMYGHxkGjy9pjfWW3UrANYbBNXi",
  "key8": "3AukjhZiMmXtzt75qJern1nTTqrfeg4DWEP6Danj5NvsjvqhEmVfJC6UHNWGAw8K5YFPbG8bngofXXqsPRjTfATK",
  "key9": "4LSJqT9UxVscf8rtYBy6y9fBd4cKeV2Rd6vDtp8JbavUBaZPEitrT1FezmkoyizHDLRWxLsNDqH8NDay6QAM9LJt",
  "key10": "4mBwRSZjZK13ZDoT8feeQq92FZwMsGcPUangG6iAuxUFzvDW6Vrw97bQimk5RQvnhS1Dd4W9dQsNEynWgm3CNcd6",
  "key11": "5q6XgvHCBuxFdiLt4xEPYx9CqP29b5KbTCQ9LHaS5SdRJhe7tVf8s4zve18uPtuvUWv1QAXkjj6SwQd7n8MwqKUk",
  "key12": "AxLpv76Sr71FUQ8tVRAPEwRrBXh4c27usEtvdsEGZxz3oTiMb7747NsCr9JU2ES4bVJRtuodV7B5ShcwbzS45ZJ",
  "key13": "2EShLrCAttb1eW95XPC5PChHFtutCCJwx5JHbWELjNSposdNs1DYLGJ6uVuGJs6Zt6n76xQsRTaHKqW6MqmNLs6e",
  "key14": "3owBW3K1Pq99gWj8zA7dq2vcnpf8jv9QTB2EopN5q3N7P3WmeBnCkA2Red94UoMBm6Fj4fFjYiEw721rj8wGCdv9",
  "key15": "4nqg4DwM4cTxfNF8M231VtTv2hQzfCg8fUrKBGiExmAyszz3hJg9EHvvNybMuXnbGzth2zxheBXiTfQbMMLqfYtD",
  "key16": "5axVVMvEAw6zWGRvjsBMnKEULAaqvmWwqV1tVKDJ2Dokgm5cQoT1Th9UjBc3k4qaghiA14hv1N7YadXx6iWutvNW",
  "key17": "2BvTxiEtLumPaBTbCH9jz1X8Z8mVnN1BavosLTBC5WWnwifn7VjHV6djB5UZy1K8NxSa6USgnexvYZ6TcczFueqJ",
  "key18": "UuYNSNzejKskNwtBcJ5LWCHjZ9jxxZJ1VzCfSZY6rxi4pdWKEit47TbCRHxunzojzLahZDk7qSg554Kf5Kradbh",
  "key19": "4oYBgC8gwAbPm4jntedch4WTvUmcmPMyuShwN6rHdzvZdAAdiDYUd5JNkdmFhP23AdyDbXd1cgDBbNyvtfYupUH2",
  "key20": "41uU9RXoCtGYJvm9a44CKrfoo3ekXHqS3Uw9JiZaL9H4awfEsgpvJWm5s5tSwjibroNgu7M2tAnqFziMwHWtq8nP",
  "key21": "4bcNxWZwqycD1UnNN6YNuzJG62kvYBdr3ogBmNwqPPRKNZ3T66bjsqawoWEaQau7uUY6qQenDBP5hieZULsy3Tfx",
  "key22": "3suLPrCQsut8vK7pkvMNCXG4jKvwMeVWuaHhhzntao9KP4gAmbMVaTFokPeNFi1mAYHA8TcSFFv87A8th3uEXG1F",
  "key23": "4pN5WjJdnq2RgxfUmLZPkeKbRppi69Kd3EpPeeckdPH9kJz3ZGj6Z333gNnBXX8x3GGSsJg86xszqLgLFaiUN63E",
  "key24": "5nP92jyNAuksMruxz9T64twmire9sBC5eo8VscyEcT8Gy8bssLXXGoXT3oWgCYbraDGGyenMEpHgcfLixGVtJLPJ",
  "key25": "48K9bkbMfMNDAbo1xGTzPeJWJ6Ah1CnvvU1FqGM1dnxPNK9ZXPSez1re7ZwvRQDGYCbG4AkWtuAMWLCgEnQNHzGQ"
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
