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
    "4zPcvnRFNzczdNW1GSwzbvxwVkZTnWPVpTkuTkbXPuPzgunT3irq76TZopcuJ8mUTMyJLaixLzzwAf1kbW2PUSa6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xwpdGYneykMctrAaQSSjxVuRju7yrM14WiW9BckQYbst4cqkcXtb7N3V9kD8iHn7wfsWPebouAGkJwW2u2aBSwc",
  "key1": "3WqTigV1AUkyniaHkecCAAVRw8CUZap8fLutkcNouVn7NpnCKujH3jtj5whRo1oLkks2CNHT4qMY4vnSAdbGqykW",
  "key2": "3mpvJekb2WxPAwAL5zJdaQd42s8vxv4LZd7csC82DC19qkkHie35ibnsaUjhs7ozfWSNK4WSHJ5YqGHafCiFTTVP",
  "key3": "2sBv7EzNQv3v3DeFAePxU8DRPkjT1LYPtWrBGADhHdZVXAbysYTRHHGHuBYYqSGVheCuWUdy9pK3tSCPRRyQsk68",
  "key4": "wcbGbgx8TjBFzHNBUVQvJYvaKJpy57as9hHcuGLPDQW5nsn7rb84MQwRmtmubQgbksgit21oMGAnC26i5Gk8o7o",
  "key5": "3cJWTahEypednJ3Ju86Cr1mDB8BkmNXHFCvfqF1uauc2BmqYqwkJE9Ec2eWwJWwfytLMw6xwUFf2EJo3AsXnZGKC",
  "key6": "25V5MQPiZczVmie7rHohsi6nsvpoXy5izL4SNMJe3Jygbvw8FY9oahcNznYS4PjVWDegDMKpprmbhYvHgX6mnEh9",
  "key7": "2UKEctSJkoTxBSv26XuzgkZbuz6dKMD46XEEsYofk9VycsUBatvhnXmvFB3RqKZtPGwoxnRHRbn3H5gLrk4N3ASH",
  "key8": "3ifqBshzRc1ueQZMiXdi95MmNLg9C9nnQJkoFkhT3hVzyhbiP1gfEzWQzqq15p1VFwdNA1dPD2rGT4Bj3QtvMVUT",
  "key9": "3yHiCxTLmRe423Z6cJYfBcVVU85SKza4mgP3ts1HF2KzCAAvAdvyuHgHQwyCjDAT3DhJAZJw3dQ2PXMyjteSQ8DT",
  "key10": "44ttDWu2ijHoyD2xi7gasz9AxVs6Rdh6Wxfk9eygnp8XRVQe3ywCcakxpXFvt4gF98RWb4VWH5MmC466x8CtsEsU",
  "key11": "3g4JEijio86qAbEHmAzwKzmaF7HPChhWVNQYFwFmTrTK8Nn4K5zXsf1QmUUqsLFsxDBWQpTDKCThPAaUmAAMzbzM",
  "key12": "5QvyYsMyqUK3zGKHwHTRjrmmc2539VR13582mBkUQQs294gxKQxqoZr3QfVssQYHKN9gFDa7s4BviZGjvtT1F3pQ",
  "key13": "4XFtdvS7bbDPVkNZKbKYJvA6kcNv91WYnNWyAxzjT7Qp9iWejPT9mchrHHNGXSZHEfxZZ8YRZm3SLkmYhc4upAVg",
  "key14": "2MrMPciypVHzKXCmFdGq8NhSZgFXmsvmYcVCFCAvdGbtxqErFVuYiv1KVQ4JCMuacPo4zkD9xNarh2p4NpdK1kkd",
  "key15": "5dVKrAmibSmEt84StrUkyeqx8DoePRVbFXES7KoXMQx3nSZFnat5RX6jKAdgAsYMd3z18S2bcJ7DFbLCq9bZackm",
  "key16": "3EvNuCtGt3LSM3RNH8WsQGW27pbrRAxLTaAksPyQ8iVz2Ef6Fm9THU1YCh1mc4YEHVyppzNUBQksACNA3AQvqpyQ",
  "key17": "25iTzvWw3yWZemp7JqDKd6w8XXHsbZ2aPMTniveiTB6gMLJ3GQymL6ejbUVg3q2dokurnx9Vcz33bABxbKyc9M9E",
  "key18": "5SdkqbJDeevPWcojDBELh6zBz3jGsGQ33cyQt2VVhh9uqJoS3PpB6gezhy6ymdDS5yTcgNvxoB2wsqpruneBptAY",
  "key19": "5qaQfQVxRyUhL2Ss8MnrfdLTeVJ89rDSjtbE9uvdvBTUB5UKetNHjeYAkcRvx7Px6ZBPDEd1sbpDuTBS3JM4s1SQ",
  "key20": "3CPQjE2jLECVHrTR4GN7y6ktyYB2bh7EC4A6w9k6km3c1NLYeJTVrk88Q7zguuUjSQzSih6ygBwWVKoeojSvMsks",
  "key21": "38G72YNFzZf7GvyD1AWQ5viZKeUPTz84zHRLi9i9Fyg7pJrh2qeneEWHbWMs8zEYdnsF8grhCxBuNKH78yV5W7wW",
  "key22": "N75exKtMyySARkWGD6d5jKYZ3jGPTHnKHmb4x3D5WZRuwsH9suxwqjSGB8wZtjbqtVEZ5apQo5H821myrmu39tk",
  "key23": "rRePX6qaMPe6LDCRSQPDR2bcCxdcxTyMBm6LxG1eobKAgxR9HA8qwhaX5ZBCZS2uwQXfqu3c3mTnr8jPgRhfNg7",
  "key24": "V3ePMF3L2sWxmMVKnYsRBnHsAKumwBeFtZa7xdVSSGmVRDAmDT1bWy4p6JPKm66813SMfzDxDA3rvTfWSTgGr7p",
  "key25": "4GRYmEyyHvx75YTuufWHdgRbK2hzp51SKmrTjHZAVFsT1jGE4xs4ruWs9NaGW3kwezpwW7HsHxDjpYWkMPfXQF6E",
  "key26": "2VnSD71yjtiUAu51MFjqA12eKGncMJjP2RYrEB91L4we7MxzxUCy8o3EWeEkTn7TGstGpnhDs9utcBbBxGKqmFSZ",
  "key27": "49P8TRcDhUkhhBrdoJj2eDYZ49yGQB5yeBU4fFpBVtcyFSDo7QVxqXJpbmz8KSim9j9Dtkuty2i8c9n6cYKxdKCY",
  "key28": "2CCgqbbTEnnv6BBkRnNKCVFg5LqUm9u5mUBX8WHCsHtGsNCXhFUHPUjdJYrYrwnVmYgTvKGavXjZoSCVGJYmWTWA",
  "key29": "5qAhjRSXTU94BhjFeC4YTvjiYkUYuhSHiirWZjx8coTdrk5sm62R2KpkPNrKnTa4L3fQJMwzSWP4MnQWunfTHUeY",
  "key30": "4kifd9LhjtZy8RKpJKFHUQUGqmY6BiADq1HZmhwVKs278QWHsE3f37HWkW4cLWACbU9ajokfhNDoPHkym1LvkbMo"
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
