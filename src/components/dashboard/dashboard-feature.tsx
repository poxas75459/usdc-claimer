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
    "3mMr64k485jCRKLoayB9a6BjtgwfQeFAvRWRohAsavyx2vrNWB3UDNXaboqLYwj1WYznp5KGo95EjvzpGdV9RvF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3giZuQaT5m7MCBC21kT8kiFEimMKBM9qMJJFAV5QZZFng2Exp7A1yb7HJd88VPpF25cQZkW9V12jcmtZMySyuiFz",
  "key1": "3j3Rk4vGw5fYChnvvtmbr5wzrH4jkAkqPbRBN6X3CCJah8DdMrDoee2jEb19GTWsx8sc1D1y96VjHuM1aUgcwHi",
  "key2": "533mznRKu9NkX4r6jewjnMg8GQxRw7D7SdpugtnAcTp97QuhrxwEsqDLEWeqwBEcvDBHQ7DKJjto8ezB8rPcmc5J",
  "key3": "5fVaMjGSZxVr87CWhYkFXrpJzyFPEU6u8Zsg2THvz1wnD5i7UvyL1xZpCKqwtuxufWQiq5Hy5cn7qM64aqcphqRX",
  "key4": "5BBCtcYRXP1JZi7ok1ctLGALBY93uLihEVQqBkR5AKjVf9vEe99BRtSP6VgyBNsvy6wB4eBGN72WZ6y2cXCsJNrm",
  "key5": "e7ycsFSG1kCHLZQnJvECxMBfREQNEMadczyh2g2FPT3uJKJzbWS2CM7AKiqEGbnCLjHHLTkPcZhDYnEY8QG8jw9",
  "key6": "2TJVpASqSMdMbjBF3AXug98238LbKDWruU3Ap1UTDfTz5pZTyXHqvymTjFxzEyo7dsiMSXJhK5crkgLudZCb6v62",
  "key7": "4h2Zn9hBbJKTBhaizcf5uRHWhUv3q5WHtBcVBznorVc5RUkdTBZxfH8rAKxyYNnRcow52Wi9mU7zAh69FyFdHGpc",
  "key8": "37JTuzFwX64vQGmY26Hx2aunCxRJMUW7eaRSuyvDcLEmRBdGmsmyXAYd1qqaUthEL4PMYoBQXHNcAXHSNMx5gcM6",
  "key9": "eHhp2SxCwzEEqg48Lxqiw9XrrBnWWZCbCKupt3tYCh68ybxALFLieZMofa12sqaksEAApLKonMXwVVK78mW8Lr5",
  "key10": "3vxt3sPaEyY5k5Nh9ptvGpf1CDyXavpnRLgLV7jnmbuizxNKsBnhmnnGKyJ5F2PnfHTUQQbNTmDfE5DRaAsXmFfq",
  "key11": "2ZzL1cyM3gojMkyeScXhcoHfo5oSyaZ4ei2DiZYNjsChKfyKhjfwACZGmEKQo2AK6LXAhziC924N2LDJrfHWkeGK",
  "key12": "kuVU6sJFzHoDzRCvaQb8mbXrAvNwU4BYt8r9cZYdiUKiMCHe6qhwBkwsocY9qb6uebmTxkan59jWj8iyaPFZQnQ",
  "key13": "2MzYp6LN1xZcxkZ8uH7psFPFqugJoGzHzdEQ1ASwCcVpudEYeHBGHJt4KD4prd8htKrvWBFyCtNeMxsVbBwXR8pd",
  "key14": "4pFxnyHP2tTdKnu8vJr57HteCeXuR6cPnqcSR9ANe5q85aJeCi2W2LCSib1VonQyZL86bEK1NG73fiJHkCCY6RX9",
  "key15": "56MnhjdTdzurEmNakknbU2D6nG5KbFg8AFHiqZhq5txfDYCN21Z5cQi2qTz4zeqAqWs621dtYUWg85qjT9nHTTir",
  "key16": "3skerYzmMgw4Cvnz6L8r2sBMT8vKAoAYX9ifmS6CnuViay7mn6uTHGdx4DWrBy9QdWLnVm3RoEKjVwLsusz1inQP",
  "key17": "5Pw4d9cD2w65jTKV9gQLaMWnC7UkH89LKX6X8KpmBda7wa6BxCWPUpkmJPEiLSrUwYzBZXwTe2Z1FLQNRv7axpYr",
  "key18": "2KR5TLondGY3LNJcU5yBDLccKE6dh6RkMo5qZzNDEkZJ1fbA5E8MN3Z2jn4A255hm8StxDv6MPKSjejYrhUPnbif",
  "key19": "5AsBnbYQhxHhBq2FXFJ8E8TtQHk1bUsVf2EQCuq7MSPSwN3GKGaW6k2oWa57Umbge4GuzLUZ5aN3CAVurwx5CK2a",
  "key20": "3Daxv6djTh9ifAFKstwq6Gx6zZ8mkryxNgewVQmH6jXTVevageoZez2DeVGaCDBudm4UNvcBrQPVmznwM9iVPZFU",
  "key21": "2drgWwJY4w5i1GzfP8A61z1hKPoB1TxR76VCF9LKLV6Yqj3iqRxU1eKBHNi7B9i1xrUB4Lfk49XHmpuQJdnsi31Z",
  "key22": "4bBqa7nbMJ189Bc3hqHjDJb5m3L75PEUzMbtDyKj7EmxZrwpfozQBsu3PK43e6BeXzD3ksxJAws8WLMA1zUUd19C",
  "key23": "T22yrm53c3DC6NX9ACBbBfsqD7VjrGNUx2e1BEUQXqktvsbq5bnpx755mAuZWr13Ww2e4e71GHPxgo56mYCQRoT",
  "key24": "5xMVyCe9kYgG16gPK3AotpaZqZTXEgJBF3TRnZtzLFKNcriu6k1AwdLGG8jFagtYaVM2vJe8Zj4ARp6vbbHtTuAL",
  "key25": "2FysKUkF34nWzDfbG2js8R9TyPHAxCSfJ7ZGBLChdkzBUQcnJAocx2peHyFryY6QkkbiEyTPHT2996E3caQWu5Lz",
  "key26": "XtrdAoqEi3TfPEVwr5turbUSr9Zku8upVCwXsYjzBZ12fJrg9jhjoE9UBeikBSq6jKf3pxNBFPBzsf79ukgBi1L",
  "key27": "TZ6biQ6ksCwtoCH3SGuEjwKv5uVeKgx9YazX2SELHdxjJkQ1WMAgBJhFnWC3UAERLnJAy9219CBwDBiheqmxNsW",
  "key28": "2qzssjpatDqrt6FNteV7ctmJtbjKyaRwL4kd8EdquTXR4aZC7EAHrttrr62U8VwwYmNMusSw1bvJJtS6bGbTFMLC",
  "key29": "24AroVS5XWsY9usVRgmVSv1vcw2kEGCsam5Abm615yCyoynkbMkqPxoEFQQZ54jrAxFB6LrtJdGjfzPzasxVk5PM",
  "key30": "28UTUo62WnycNNuzbtPhjAXADiveoiaqg4eVS91msJgSbmnLWuJLBdVW14D8sAg9CT929aSZwAoPNWnXEfFHLeAK",
  "key31": "5i32f5ZghaaiAmr6h7ZfYCfCvhMAEvDFjJ5dhnH7VwEnWDojWicjLWcZzpk5rxtGVR5oDH6aJb5xaD1cGT3cA5m7",
  "key32": "xehHagkzBrQRgVufZPVAKwbDAs8KF8AGwJ1HX6xyqbPHycmvemTNmkUJV47kLJnXKTmkquNXFY3J8iGfeMcogVU",
  "key33": "22ASxK2mQS5pgHs8TiKm4qyqaVWyRGa6PK1dxtLoR69TACPh36ndmo4wdCWsoB1F9vzepsC2vzD8x3skVquqqFBj",
  "key34": "29WbD31ruvHX1f4MNffrMzUGYBZfa9o4MLxm9VWsxF5FdtQL9RH2Kunnanx6a4SYBGbczAHbfd1VDtb9zP2NQuae"
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
