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
    "5xTR1wmcTJtb51Pfngp6mnGZy9UCoGMwXWy9UjnhUrXKYy5TUCqfa2hgwuKTuMQFuyhrCjudN97wXv8SoDcVeUXB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tX3yqyhPKXtY8JSnkfd8Qupyn5AzBDYkShWR6iWX5jjQFzxbQyCHM1hab2t5iZBuGtJnFPBs8nkLe9dnav5kAzM",
  "key1": "N4M75b1JA22WBmUVW3CAneYPZ412yhqcbEJPbEQ9LfVovG4D6wwut7dHuC9PbhXwMFjgNJpoS5Ro36q1dv7jeF8",
  "key2": "3poN2NCpLTEoKZ8DHdDGrJ6FWyRY2fdxmy8xWYnM2EmiirYfCWGCHYRoc1LUobE3dAqPvCtQnBKeeQX9pyUnLvNq",
  "key3": "MsJRD1XWVoQJNr2sp3eCan4EPBFNHvTtNamB3GaM1oXidEi9RWgATcB52BBjk5BXTkkkWBQpURgnkwJbY6BDkww",
  "key4": "2xZfqrPk2ehRvAz4vNQ2V16Es9fapS1tAhR8a93qptELPxghhQJ2dc87DgZsNDecehpajZJstLvpnCyGF2T1xcH8",
  "key5": "4JSKxnidZZd9wdrNT43teSiRJGoz82ZrZ2iHK5bNqEvXxV2ZRsit7DaYybhoNssL5FqE2VPQEed8fXasSH9no83i",
  "key6": "2RTUbyH9fpwFQKoJcti8dNzYKGDauNr5E6Vu4GoGij7SbEgXraFEfAw3UhAvvpcThzQHgEEgVnbVb1fN52gQiHEs",
  "key7": "5F5HnwUBteagg2v9d5Mv5852K7eP1qTMkukfGkLrxX2aTGKC1ypeJMCKieRXp7dwn2n8cYJNat7jnHPNjNXYy7KY",
  "key8": "3ZCauoBx5SXyU2juL2eiaQytwNedLeozr31eiQxXJdDKmyYoK498eBn4tMKTCtDBww24SZYQmM576M1wCyjjUTj1",
  "key9": "2k8W53SJXVCqjxi6ohiE5eK2Xbx4rAJ3GDfjzZvS3JdffAnxHKeztVDeGSuSXGc1PJrSCDuYNSBuPGycL74yjQGK",
  "key10": "2RyWGeA6878qRkqBqP9BLBk1J3pdKyYzqtMu9D7qe5EQ3XC8Vtu7x67u3LtYtrAFvW7ec92Bg7UWhmn78kjSYxot",
  "key11": "3j2LdYpmx1gqNNi6zxk42FquLVHfwhM98u1STaz5U7Nco1t4yoiHf91NHbAh2Gs7XdZ5622LZiVkUxS7BC7RNxJB",
  "key12": "5813wqtvfb33ao3Pg9LhRaCjw1A65xWpwQMULLnwrtb5qTmrhpuwv7NUBhdhjr9ZjnWaH7aNVERRPysYJNUxfCrF",
  "key13": "4ESooY1ckTtFuprniGUVt4T7g9XYKHpz57jAsQj7dAqU1JnKDQT7PqJsJZWWHYHjFeC3WkyHnSTmhK8taC4g6mzT",
  "key14": "eQfERGoJS9BtUCNfEtSeDMfq2CzonmzkwCTtjrttHUjNBZPZCY3JZrfWd2wcP1znTCTdrnWBo188uTALmpT7sbn",
  "key15": "57zNRzadoHN795f7T613V6Ykb76UEMKT6dPxWknf6MFC6qvxojS2hYJTJ4L5aiDuFEmhHqo9ac2VoMFXnHxhPFKq",
  "key16": "2tsGh2F7QsbXwM3uz6pwiBDckCJrkDpGDFoCKNe5EY3yiLsa4j6KK9ssB6v1RxB1kHyem2HPBpz5oFL4FtccyUbD",
  "key17": "55J7pqkfxmPax7hc3ZQhyBeavEPTxyhanTviwaAsA5QWb1g3uUWcaaEj3cNfXXahFfQ3cDZCEbGw2HJQGkZai5T8",
  "key18": "3iertQ31jT6ZL5VrRoRCZvXHf9yF6G7MJq62BzxdfyNes8MsZcRxQ2rex7KbwC9Z7G5eWVzX9ef9nGu5bp5N1uF1",
  "key19": "3ZqNBn6h6aBL8Hkp8pEi1eh5G6mq6HWS33FsMH92HBDWUpYRePhWG8JjC9UhCaJJCqCoF1NAuD1ZqQFFzk6KXXCU",
  "key20": "4PtJ6nf3HFGnvo5E4KM5z44VR6zRgt9Finotmkt4hi2oWmVQ7L6Da9Qh42CL4bkJHNwUzqoQApbDbShSLe6mbCeE",
  "key21": "3RCda9HrAbyWk4fwNF8GgZsqX5ZxxqZZKq7E8iRFuDj63cevKdrWTREKiU8yeSuoiEAA3kT5T4eSyB2owEuKRfDf",
  "key22": "532H2gPWrm6CbQVmVyfzhPvYohs79rwPUEG93pbjE2mHw7xSuG7WzVc8StgxHD1sAVXEdxJph25xo2BfoHJvaek6",
  "key23": "2PHcL6kyzvEwKwWpBJWgps4sZZujEAM1hR3jcSQZr5dHY3Fb2DwWJVwLFJv31Q4aAtx9FziQK96GU7vVVR1oVpb8",
  "key24": "5GiTRnAP24MrRhyLKJ1uicqiXiT6SRMpTo48ePiPb6VrKtEdkpMHByd41V8hJEyWRKohzqFGzft6xsXcsTRCJhsK",
  "key25": "5daG5NL3TGmmeGPmtS95HJNHeWa6xHpMAsDjWJHUPQPumXUTxTSc4MVpeNugxwSVD5YdJn1pL2uGCUYhEZkFZ6te"
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
