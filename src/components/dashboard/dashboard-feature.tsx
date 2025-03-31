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
    "4QEhoUJu4n3umzqc63fCjHrrZrknwxACmfVy8Y6nRwYZTrVsa7Fad9vYWvnNV2VWqyJ6x7YUhTPm63fkj9Cyk39M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kWYBSxmpp9bRKfiK1AUS7Y5YU3YXFK4q3j1WunTmQxoddgcB6zGhr2FTtPVSAxtRgA4YP5eJD5GCGzx39irXmnn",
  "key1": "2oJGu76shKCqzzeXKWng5nAn4tq82cpPLZntW5rKAXMBekYV35FzqdAA1YNCigfwjYPRqW9jNt6fNSTTjCktQNsF",
  "key2": "5nTwHH9YUB5h8JY3tweNDmbgnd5SKpUwkUg9Wwapf5yP6T4HDnnZ3remUjPiuxz1wFaFztLUixkMups89fEheSDY",
  "key3": "56DJNeA4T4MjjDexgMqdnnNabVDA34ZFxCfaAuWZZeVvZ7paTo7dFPq4tQwvhgogEsExANsZ2EcwnVycW3fuF4xB",
  "key4": "215zEdjwakjjBmkzgMWazLfdkRfCms2ZjasZTjJ8zCKRWwcySTj3CWWttZqQiKoXSPLeZX4ku1q2VbPdbFWt9TKT",
  "key5": "2JoM5fDUGE4skrtqt6foCgHZA3nhDwzfN7XVKaf1XgmL1pitnEtndWHiW4eTrQNSyPSDAAqmcE7DZ936Mzg71B7y",
  "key6": "39uASNHCfh12x2LoL1822RHJpD7owP61Sn28JaTWBtsxe6zCApAVezhUGzoE7JpsifwYR4pnZdv7MpYH8QLkHhok",
  "key7": "2sK2ahMoYZrmZcQrVJFNdX7ZM2FYRvwUjyriaS5qMiy2ppX6kMqJ6vCXVKSnWtnP9kH9Dr5vqjUjNu6JwPJLR8zc",
  "key8": "3C2q1QeFiiw72NZjQrJ6LEJKCPLBT7RrQivznk3eEmGGZjS6YsEa1Y3pQA7XQx5LWDGfeCoF1oS4FVfVaNan6Ap8",
  "key9": "5YnRqW3MLtYUzWw1gTYnA6pRGA5mjj6kUioXEuR7bw9PNYRCjVMA68J9vuVX7trNr9TiNL8NWqUwf6ggXr9B3JzW",
  "key10": "4PbdwrpWv7bKHhTcyLUJK6gkuZMp4ZPVakbD3cvAazUZCuCDZh1ZJY23JLKwuzK7EY6vKiLDqDwpEU2nMjdPLMag",
  "key11": "3XE5PrUS9xriEQMGJRcyV2nMd5Q6xAsJrp2tZ59JTGiiALbvFKSC4JfTAsdaBFkwWMFEerWANNWtPDQMrgrFyyNM",
  "key12": "XaASaFvUornNNpHctixUd7WtWMjxbSXTpLb3bJaipjgoa5xS32eRNeS5jGW7GH7rFUQYnR2qtFwFbP63LtF9teb",
  "key13": "5QfekMxH1uebX3rEgew7Xv6tkhSaZ169jQVF5eqXBLQDDcSNtdGf83oeUVRXET9n5BRugZs1j62F7KEpDSz97KFj",
  "key14": "xQ1Vz9pDwkTiLcpkzGmbx1zPULN47DJXPCvyk7YQNoKhsSWZxF4zhyGggHbg9S2eK8rXozjBnmvMAddKboSiLCo",
  "key15": "4kemPEKL1cu3N6ydr9Qi1Y3gL8amgwGZrqgSua4Q7KMXVoPJi5jeFxG2xqa93DLMXE7fh85jAjuFeaqx58gML6pm",
  "key16": "3Fu1FNHSWEAHHrQDgSdtAQUJyxMwe5MRWWQc7yR5pvni8q2NxvUpLE3gg4dy7QRctqim4gXd226b6mYpcXwRYrrY",
  "key17": "QfLmxecJdFh5cLuJ7gYb6P5RnjsuoAr39Y2MTnRCtaaaVzczWyEqvPC4vFvDGLemF4VBLsteFwbgEaHC2bLvTJh",
  "key18": "HrkHUxnRXxTqQ5UWtm4HR5moWZZ35JsPK9zSDZBeMuVzcQtLUeaQLJsBSQNL5wvqhcMGyTg98LsGoQ8SzvB1tQb",
  "key19": "5zZn5dzDqpvchtpeB7ZYTyqcX4PdWBYqZahRGdEYuCCVi425232izhdPEPuReuNHYrUwG7yTY4aqmRoEDmN345qb",
  "key20": "5wF4ZBhjha9XPKRUmdbGGF6UB5otdar8sip4rwv3bXwkRF26dYbcYXq81dddbaYsXRg6ycyp6eYHyEJvHeLX8hhq",
  "key21": "4XcKFzA1fDhDUae1NhguVbJuuE89KStzvZCBh96T2fydVeRQHyvt32U8Q36v9xb14QRcsN8kfvHzH1v7czhCWFvR",
  "key22": "5e4QzZXVPFbZEqu1oe2SFbazTM2qg4vGNRHTJkFWLe9kjNn23VtZjTGoMLLwUrPsgkpqj88P8zbbqrNPpCiHpFeV",
  "key23": "4mszct5jx2tw3Fxqk69sms1TfXdBMCCkzU5QpuLHy14YM8mosBbUtfvhLog1sRcuQSQqRrkXnZXjAZDUTiqx2Nxb",
  "key24": "5rWGTCGqbD6MF1TZrC74Lia8xhLJfqsdTGKJGRcowm6Lbk8jkNT6TLGY3MgfifTYA5K968bhVwnXiGCXZfFdiSMQ",
  "key25": "5r1x6x9azyf8zjYkANkuaWuqAZpwgGHBhzJVkbsfctqMreYWUzcx59xCSgJ8LdxUvnXsLUHLG2xyx5sLZsYCHfzz",
  "key26": "4gabMmd1do4QUC4DmnYQBFf88Tby3cxqPbc911zvvy2GsAzipcUGXCF8wSnDr9Uu4LTXEq6qhFFSQTX3uB2e7qdt",
  "key27": "h39BZDunNvmPXpx4uDMAoxZv7htiv6DCNRqom8f483799N2bqCNQZS4PxCDfjuwx9b6jaPriFfsBHGVRDEMRswz",
  "key28": "37zLKVCVJR2CGrVSUdCacjPEaTCHcie1TFErKPwn4BnEbn1dfC82qN5puaE319Rum76ozo3GLW1vHaUrtbDMwLQn",
  "key29": "5t82K4hjV15w4ivnkpogUPqnGiWGr97R8w7ZHDNUeY1R4qGyd4KLFjCuEW5snN2D5R3iCDRrxhrhv6dvgHESwwrE",
  "key30": "5yARCk5LL5g7736Q6xyiCGwoB9rMJKBe42iyaFhdcTMFhYoS69gvnHJBo5wS74yrm7PoeSppP36ZznWJTCiqwDC6",
  "key31": "3zp9VnWRuyqcUe2sGn7GxcRqFRE4KKYWTxdN89D4xTBL6YkxWUPSoqrXse62dWMerD6VyHg75fy2ADhcXDbUXkoN"
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
