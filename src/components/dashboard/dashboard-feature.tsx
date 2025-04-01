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
    "4fSvQ4jguuxxLqcnEgrA6ChJcMCh19trmSWxX4yiNEromYmdoAN1kA2NRnMEh5NGooPpBoc6utuT5yJ1oYJ5NZ7o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GJq3exG333J35ZbgKRFbbV8ByoP6id1BebUYSYTgoH6mVtFvM3xq7iyJkaqDrvX39mhoPWb2UXAB1DVezxYq4mb",
  "key1": "2WgspC6t9ts1GqoAbpurKPagJBvTkykUJBiY4RBBPfED5qjUbykXskx9dcEJ2EctF1kBAunR1oNVrSq1YnL3dEkT",
  "key2": "4eaCHi83GPjYsAo2BtCR3dSJcZ1SpPGKGzmCrfea3t3LCrDFZV7hPSNYv43wEwt5yX78tVxGUpevcrrtBqU851pU",
  "key3": "5LcnnihpbpLwvrerEh7yr9ZabvREDPcE7ZJFwHK3q4vhj9kFsUiJTagStGMTPoc9NGHwqtWJxfReKam8y4L2ZTsb",
  "key4": "eE7DH3f6kLihAwNkwXBJTtQMMFRQ5ndf2ZnfK5XNHp1t3VKJmTzPYrwvPBirpmL78BjqLHaRNN5jD5Mev2N1eTn",
  "key5": "8jTwe2azLQcme26dALGNyvvinPosphW5EYhAeDcJ6Ev5yCpQhS6QCLFzB4ASx5Z9HCnD8hfxrwPvy8kir8VEaEk",
  "key6": "4FKvRvgfsyuY6EcrjJ6SjXYGGZNdwgC2TLDSgfxiK97DzFGYc1Vqq4aMr3aqPBTsMX9G59AmbDnQJ2tUMxRND2nS",
  "key7": "2HrfELsZzgT7KKWcBdJzov9gprzvc1z9sx9iR1wVxCgFanT6AiVCUMSRDetV9SmY9j38ReCcCkzUJZdihWe4tCBs",
  "key8": "5UoVVp7hk5zV6vYFvtKShq91N6niVLHHymDcFCqMYJqTdftTHaFgV7vhhiZf6iis3jqhFvczVew1uK8MdHcF5LcF",
  "key9": "5kQYNt1TDkb1sWKiW2uBSkPNUYZK7Gn1xxLrxRf4zeTTnFSdydgLhmyzLwsDJC9WEiNpXYEMXYsTCEHpBuE7bmPe",
  "key10": "AHXTDqNWdURbuyZ1HYSRQofMTRFAbBkBQKNC6KqSgprELvP6pgs7ztoRQGgqq18BxczrQR56rPgk9VudLig4JtS",
  "key11": "54cktypmkQbkLAna15dB1EmWVVT9xK7X5XFiZLBWa3MkLrZuvavEwMNwzNQSsvPgu1Hcr9L3N3ndb6myTs4n3c4b",
  "key12": "2P5jY8YpGFoYes5UJToujDi9T8aoZAGS3GDQx7sCL8Vir7UyuNzC8nYaG9CnTqrNHdu11oENNgREKJWe35s2bYSJ",
  "key13": "BdqRrxy5gdAd1jFY953YHkPHugKA9ZqDsG525Aea6qcvAjAabcr9jfhVZhgiSfMT65bHmR8CRrnsFEHoAyF4NfE",
  "key14": "5ALVFwVyjvwrjumdfUcMJ8v6a7DdNjVFxnzW8VsLSmfbEC33ZZg2kfnuqJD9ifoAaYBvtnARyCK8sXDZPf2xu8pK",
  "key15": "2cWZW5gDKy9yt3maMAgjgyU9zt4uqwT9iBsxqwApuLFxcLBFgxnH4Sg4SWgLsUsJHj9eEZ3qYXFJM3Zxmik2CE6G",
  "key16": "3US7pJHZ5wAVbBtMg8ERH42NRdA9pEMNeqCGyEhrmNHdsRLVMHBSeGT67moNnAVjVqQ358v6Byqcddywf6dcwdhU",
  "key17": "KFbjL6agRU5ZdcRsZFZ2rsJSUcVXN2BusMbXPY9GKEtCu3vu6jZDM3jP8qfw43HyeZbcbLukePoeoFvck1cNqkU",
  "key18": "4zkJ83FxthmBgpjj916BQUeoJvRep2Ka99tktaYGw6oJBeXuUYrS1ZqnECUDPCwHBHcBE4f9gSujeSxF7hXZrSyG",
  "key19": "5iDLTkSZAyMbKSyqzaoj5hLze9AQPvwDE51jsvdV26jNgNcsvFBdk8egPrHj6xbcRxcGVsP852QXUtfypYMTL7vL",
  "key20": "4P8wmcWPMtcZfc3ax2zUiSXkpih7YffafR28T9fZHQHp94esWAdhmusDXNeLmhFHGJ4Y98y3QMWmC8acgr5x5ycX",
  "key21": "oDX17huXKFRtfZKFGA8ViX5ooznCsSPzcBuGoEtS9fE52ebWd3LARdA8EVWFXCENTyy4gET4uedywSsJWXH2PjX",
  "key22": "xk6u9kzGP5dCowv5Bfpc4AZRYR9sZemE7ozujRSf5r7syUSmudNhPenuo3PpfQcb3TFrE8zVqBincQRE9Tu7SQz",
  "key23": "DxgMYiGUYzqJVx2TUCNAe1gRff9p1oK4JusfE7goNzt2pxiAqR1QyxWn2vcedZLPTAt1zznXsZAWRqDFCouzMFo",
  "key24": "5kiSDE3rH9XxJTVR6EVxSoAW3BSMBmsQvKXNCfLDWD8n6bzgRCx6V3RaGK1acZd2of5LKwtnNmVmHvupDCMZdTRh",
  "key25": "2RH2ycfxXdpn7EwMwpu1pNdvy9n28kt8FPgyQq48adL99iewtBdQsKg5fH4f9qRyCh5d2DZph3B9fCne9Frkaa1h",
  "key26": "4nXDwVMSCLUjHvRG3twovC283z1CreVcsTTxjv4dv31LuimoZ2wSdLLKREx9ixE56JDEFe6mmVeix3DqLCZzxurN",
  "key27": "3k35fzKEsHvNzNc5JPi9FBR1hJoEan9sy1LmgHBwgY3T2jcHnot3T5BGa7V49MC2jUuARXwnbKsbBPC63wqkFxZE",
  "key28": "3YucruWXeqHDoSzB7iUKxRjGYpvkWw3KJyUqKGS9bCNBVLj7fpiNkoHX8PTaMvd6tQGusxrNZ3HL2bxtGG8p6XmK",
  "key29": "5MMzzC3f3h1MhgadFEx1Hu4eCEG8UmR3899T3NBXKRNcgKcPaWRLHr5PSbGs9k5mJ4fFFAfaD7wxw1JYZp8WGHxE",
  "key30": "4jVBhgbFGDpVzgrbXqG1PU4mD1ZKEmCx1zapTGjBgbNpMQJya89pzYWwsQ9Wat5AGfut3wwn6No1VnGgaDkJNZNd"
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
