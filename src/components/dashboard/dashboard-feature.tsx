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
    "3mS1GrrDcgzFhFL2joqnKttHRjRvaAjay1MTLkHXYa185YkfKEcMv5mq5oKR1KAEErozec4RVZbKwDM6ChgojdUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38LPDhqE4HiRyJCJSBnnH7e3wrDUkJJQq3Gwh6Ljn5JoBx4PDYY6A3zesiBEmS2AvFuKxRPNAQgAWVnqwCxJLHJo",
  "key1": "4UgCoBpmwNzcSW351GWF3iDGNs49vkHTjuptTZ3EhZ6FeE7t6jhi7WuW42ZQ7dkmWsAwMrSs18SgtZD3Rw4gysrG",
  "key2": "coQX71i1XtmBQhJHx3hQfE7izzK2DfJFQkMUSgESFiRJb1LkimF3girmot4Jkg3EswdeY6Z733xp67n74jwb52A",
  "key3": "4Pi61pnKCztg9A216VC5GJ4S31676dMy7TYe8XFxdQsUGyWzzQNJ4xuYJb2Zcetu1p4Xp1ino9DpbVxqzkqRZ7on",
  "key4": "4fXHehnsjDBRdRrqAijdm4t4ECxKiNx8Jtf3hCbQZqa6jrHFFtPsHNbyEks8Jo7VWxnphNMbBtE9MJQDGegKohQr",
  "key5": "4D7FfVxqZwZCJoC99uAVZ23Pa7XQPAmX2FyeFvu5hVbirmpMAz1LzwYsTdLPTrNUPXaTYSLiRbDPHSrjAzcyrvd1",
  "key6": "4ftwUNfp2qYTqYjyf54mq7oPoe5mFaa8Eg36cUA1pbL2aRmJp1h4rYtZbFHXv5N1aYLagS8FKKFuXwx3TSKoZqtw",
  "key7": "39KMhTG3nv554DsCiHMeuEVSDeDFhhzy9iMpkkvYEmcwMYkk61R95Dzhg7ErLgT56TG87Q25FcwCEySCzTKiPu78",
  "key8": "61z1bwMJv5kGVxHGXDu74QBubNywAuRtvMncn1PXHynJYqN2qTf9cn8xGXA3hbdMpbuXDr6UhVrqEkF9bHVxTqak",
  "key9": "26C4exAgsXcAbEh7bfbZorusS86x33CNyPNxnEMNH5piRMLytotoMPtR4Pdm3KYLkwc4n7jZ2MgsnGPyfbXv3MAp",
  "key10": "S1m1nM1Hm3jiNgXwoEeNrbW2YAs6UqJCat47iY4S3d66o1St3Pqdm3Sog1sT2N2uXRpaRRaAc1Jg1XxLjmUVRTr",
  "key11": "5sAvX1aknjb7eupFwpHFcyznKqEJQpKz1G3iF1LZJVezgLsYYMXerDrdAWSkkoZRbahY3BiUQnC4UPU1qRE9J865",
  "key12": "46TijMLohZeDR8hTUEejaN13e1CHyu2mAAweMbQYfHHjXNXGpTf3tLBGptePkYjGenSkwscpRRq5ydBpHqK6LeWJ",
  "key13": "2495Lmic2jnTT5sFCvnx8JSFmSTCdJMeWV9MFvYedG6McPjRMN7AMujXq5NdUTpyGoZd78AWCHM92sfNt1vqBTE4",
  "key14": "9DWf94QCWBmAfqQkoNZbAmcDZcB2KVZn7fX5xgbWHp5q7TdPp98MeCh5WMMJqo6RAR7DsY32SJmSujYKLfSRkbT",
  "key15": "2PUnALJNy33qkoUriHnsUDERXbv25UbBVhwEZ7W2RUbFfj4AdovfyxYMddkYDEakr2Koo1Tr4KHwQiKgG7sPEfau",
  "key16": "2gh2n88NNhYSrc18xWhFoE9GPfpinvoGYrQoDKXV6WWwuxytsfNapVBAFbiLx3LSn4P6G8emSd4JafnMHmUbHv1J",
  "key17": "344gEXAQf3UhHCK3yKBwAyR5VRryaE2nvyCYBxqNJUWKHdZv8ACoF6UfdyLD2N4yZ7Z5L1WmADvSNy7ttg3A4sh5",
  "key18": "TGMwtLBwShzmxPqdhyFF2pvJSyqrszaDfvMNNkrwtSYPKyn8aKd5waJLEmXguPUayGbzeAZijDq3kRjvbRmJ28w",
  "key19": "5xSuGZzWZF1VRLc7JymYaRwLJ1hKnhSLe93vyAKUPJv7ah1eUYc4CmJCNrgNKDiQCHUNZz5LExEMmTbAhq3uwoB3",
  "key20": "4gxEFYkxVZwMbtDk31r55MZbLiRtKL38qEAZhr6kmZp6AKKsfad1cVqRSpSu9CBwXSe47CY2oMv2u85JKo5RZ3mF",
  "key21": "2i14ZUwqcyGR2unkxT9623NtiwTg5GPRtwPsjDc7adKUj1umCF8Nooz2mkVM6Sfso6v8roWCn1TBsbzsczCuyBMz",
  "key22": "2AiERkTvZsafUZ1SdapR8nXBtMQccYBthLRDAPB6kVSxGvb1tEK3cHuAkmPPdu4gTZC971ccMG4m4vzz7oioXfch",
  "key23": "59DX8WcqAyN56okscwyMDeMoLjfrQZEuZ2SbSghfVuHNjxAfyHiYttJHFVvoSnHdz7Wca3xP8Y25R5EXNkzVDTNh",
  "key24": "5MV8uidx5YCjoBR4gtah79wWnzUGHm97szyTyNtiQPdJr2x57vgsn6jtiHEfHboUJpmhVDFGAAyzJJjcgdfWnt48",
  "key25": "3f16dGVzW4ptVzv7aJKV7hWu6JZTYEcor9whJ6mTCRQmGs7U6n4b4y1TxSzLUGddFG7VSqA3bzZrzf8zTBzEz21p"
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
