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
    "3A4ez4APrH3AVTbWXCEuFGwaWqfi27tJGoZEdFZqp6LBJUtEMdcmL1u6exw3bA3iughD9mBMkyDFyFbyYnMPqsgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5viPEF3jrapRqpSuY7uPwr4FFZC1VTRFxQnEupaWDzZ7PeVGWCgc1WmX9bsGkxZ7K5ht7GtZ6VWxDBBefsKRT1Zv",
  "key1": "5rb1yvLxSBEmjRxvAZjragFjC1LrciYcieKYRhEV28FDEei2eNzownEN2mgwZrYXFKN6GYSQ4nsCx1D1zbemYevU",
  "key2": "4LWcFwchgiUz6jq97feLmywLkeMiJSqwhAiVTYYvV1hJdVtLXFZ8oijsshBomTvMW1AZDm6MxbDJdQUWSzSt8JrD",
  "key3": "4KGjBMd7qiyYXHXGyYU9kkMxe1jzH8mKHuZZdZrVRFj1aWYjo6wbvaxisVFXWU3HPKx78SNSghSExUbvkowWrMXH",
  "key4": "4ZNZ3MtH8yFDXbwHYH3AB78who4WuHNPeB6fpwkqS3nLQ1y9cp6A3sjSRBbmjKp9dYWDY3HF4kcxV91JVnUMafv8",
  "key5": "3WXqFUxwdqLBxnW1diheW1uSb3Z5TvwE4VNWCLGkz4to2M493uog8LaidtRzLnWR4Uu1a6pAPLBBcEmQibNsFM17",
  "key6": "2cfJjZ3xoU9tJuSD7NaQh3giFZKTa5zBoii3auzZTBx9Q7Jy253gqz1aq86zfP6SswLdiKA4GoUYXaaQtp4c3Hda",
  "key7": "4xgJubvgufSyVVkT28yz2umruCW1chwV3FRMtGQj8EDvf97krH3FzrMZq8CDkFV8rLBRUdaApVPdpmQm2iiNLzAT",
  "key8": "irvj2JgYtg3vjfhzPq6YStPnAZhX8dXPbmMXb9xcoswrkUoNWFR8iSJoURKmuEFz7ECYon2hjaJXddDjqNtK2J9",
  "key9": "4ALpdsYyF9ZCWXsANiYivz4nbRYBXfC3i45xWuwMsABz5RtavArUxon2PuGH3iVjUwqbeufsHwJBMph4xq69WZ1v",
  "key10": "4YDzXEvcRaikPWeTzooVYnosmKUUmhuwrgZYSQjsG7RQJBkM5QL6H4SMqU6MnVpioBQka7c6ipLNDX1Kur1VVyeu",
  "key11": "3Kusdoq4zAgxCqqxHuWSwfshGQumZcYQwGrvGtU3BgyG3nAf9EfczdhaMxXWUVc6cipdAF3wuU8vJg5AoNTyYarK",
  "key12": "32AaE4a2XjLRpuf9j4GDekK77EqXsnfdqgEeiEt1TUwvxeLqeZ8UFytMKPyxEgSgeXMZAssR43RoRxcbtVq36Vp4",
  "key13": "28dXqsBzLa6R1ZALkESMWTA5uzWzeKaFh41r5VBp8DRuHrCYTqfQ8XnzLJiEAR4kS6ucC4tmo2PuXhA2qxGvgXZo",
  "key14": "5dgS3QWEW9SdDkXimhGaf8ttpy2FyzQXUkgdf7eEb3cPT2k9URC4b9568J3f793oQE3TzxCyjnLrnC6JcBpGm3BB",
  "key15": "4vj3bPnQN34YmopaZ6bcap4MVE8oVYCyPDXc2xtMjEpk97yBbfcwdwAfroMMSQuVyQdHhcntUT9jKaEmD8aF71x4",
  "key16": "5jn75wVJVzuXvo1Tc8Lt98wP9XYiu87ABXs1umn1rZJu1seyaibQCUZfjhyniiqWeNVPo9Nkjw76W7A9MTpF8VtD",
  "key17": "41BFvnyaTXRZ8FGy5ayV8ayLipQWF8gThGwVmtrBKrZ5h6fSuxYoSqbpp79CSifdJUTWTUtrRcGewq3AuZ1geNor",
  "key18": "kigHR4m2c4J9VVfjFMMaX58JdDXivP9eXHAeHtPWhLkFSNg32GPGmiw4tSkp6BSpd2XieYoS36WyrdxL8VXeU5G",
  "key19": "C74bL2mbZ4TEji8EZ6wbXzk5dJsLHLz2Y1Shq8XZWf6wjz7J88kE3Cq3tsjACG9scr89GErPfBsPskpuC7uvt5w",
  "key20": "63QLxRKCPuGW3vqVZB551U871NQfs7EmYN4deaT7vdvuLhjpT2p37Wwi3AqMpVHKxGmC3ETuj8WHqH7WGzMhZ27g",
  "key21": "55kkN2fe9jaosuksQ7yyVYjaadec3RkvJNieLHWQ2wHCHa3LeUmdqM5nUS3QgbAyiaLjWzAYWoyfQaMQ1FDKT455",
  "key22": "4y4thzgmgabxmLThcet2W3VMyBGEysqtEt59D7WCnjf5JtUVkrQXAi856JCLbJWy2D9CyzfwQEy2cSuL1fiyZeGF",
  "key23": "477bUqvL7d4WYShJAGnpnheJtyXptyS9NwfYaEAZCTBTqVmZWYEYemJjaW5XrYDhjaU8qie7cincK2Hv1Wee2nZu",
  "key24": "5Z3FXuEY5QPfP1AqfMf4cMBx6JAfGCNvEKb6FNZj1B9zWjYMkxv3V3w3cTL2ho2twGtSVwDkUh9td9UMAWJdu1Xh",
  "key25": "3Za4aW2ZFjHDgkdQo3hVEssKe8dHqppmA6ntjEKkHCTBCDaanZGN5KuMKTVxZnPGy2WibnvHSyBsmV5PWzNmV8TX"
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
