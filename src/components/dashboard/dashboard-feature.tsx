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
    "3VCac9pGfKBE9kaeKpcpENiM5ftaVMBzU5BRsYf7MuP4joJiCYTK4kB9xPHDU1iZs9QJFcD28NRyLBMkaVPedqFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51sg8GYMGvaF14hB49uHDiXiKXMXM1oJZxM5fP2TpsXR3QRp77U4FzuiSYd5LqegyDCzhxn59warQAjfVs6CUoDd",
  "key1": "3vXnA2Fx4YxW3kFdGzAPxpfsLFMwoia7RRDA7ezpFbc3BRTFkLQXtnqi26Skx2rN4sjs454g2DXoi9nHxRY8rSTP",
  "key2": "3uNkwAeNmd6ftoo6DeMAcawMSiJbFctZqo3dCCsUvD5dnE5oGXHuyUmeWmGeXpD9qH72yoRf2hzqLikwAoVMMaW5",
  "key3": "4mYoYYdV8skuHiyuXLG13TELSWgSfuypmNKdH6TPTSGEhpCQUoDS5aCe8SNNqDp4Q8o9225ng3zquLAbEdTxfVHE",
  "key4": "3ZU2ZC1UwRLoWnVUv8PrszK4MBm1ehYp3LhjPjH6wdSdvksLB6ADCb7dUcEpBM8JzZkgTjgxZHhkwWCX1n9e6XX3",
  "key5": "sfnNwpRWwg3JMePKQNQqMHna2fUw3DGnuM41eFt3EnpFKeyExXRvHbkCjSMPcocJMQZ2oPPxJC38r7L4T3jjaf8",
  "key6": "JMvP6LfL8vK3GKo8oBwW9YSSg2Qy3cWMVdb3h3m6hNkd6EXnE66TYZyGimaoNJAdsHV4nF167u2LkNybEbNyTnP",
  "key7": "U5Y2w78Vh5kJVJkyna3gi2ZFhN2JRQpLwF1TFDjL28Bkpeis1goGYSJJMKBnAJyMwDsu3RJq31Gxkgjnn31r9yh",
  "key8": "T47bPpbYFAiQ1MAkLfZrhKXGZoRY9VJ6PDj1ZqoiNF8bbRJN2PiYukwmswizfiAUrLJcKrModzSP3zAg6TqGCur",
  "key9": "2hBvEMR7T1hTZ6sYgHtwKriqkYsrD3bfAkqGuc47KuzwL3694QxGQ9SNQmLTtLbfv1HSqaojWXKPAmPnzgDR8jBx",
  "key10": "6UaewSjHAMoc9AwLdi1DJ25C5NRMGEgovAFCfh7etDavSGUmBZVgLgett7a1iNjSL2nNQhmFoVC5nfT1HSJcC7p",
  "key11": "9PAoG2ixUTcEDsjygGA5qUV8h5qDKyudQF2ZRUQdnZ7r9hjng1s7LMwcfrcjMAnRqr8h2zpc799fRZZ3hVWb5a9",
  "key12": "3D9Qb5QAzWAVuKQTzJbwyakVVVurxnNQ9ndueqy6g3MUzaLewQrD8cr2dXAPZoXDbwaBNP5HaswtAyCaF9QedWVA",
  "key13": "FJFgdiZup4grTaHUzuAdHeVwJkAQwd8eRVWb5bEBe2yS3dDSAY9DutzfH68sEwNy3yWGSFMf1meiKjXbinnfuLB",
  "key14": "2rbJgsauWTqWpXdX8QdhrDEnMUuvHEHWezf1eHisgWL7ADkebCfhSG3HDMvDywKzvXLwXLUmucC3Poje1SFPysXT",
  "key15": "2JSMAwJLxVjTVB9AeiMDb4z5cGGZkf7gNRVtDac2ZZPSrnGo5qtpUfXh39y78JcTg3XVGWMVetcAiaognF1wFqNf",
  "key16": "46p1pAriv63gBb2Rdt9nEm7cguH4n5XPBqjwQwEo2UPuvpciRT2vnzpjEnDHfiYJyBJpvfZpTXwgSKkUFY8v2SQ3",
  "key17": "4rXDkuKcop6bNxyjGwtCnDmKEYSFTo4yNpGQ5NfJDEMosiB3FQzMhUY216Lst4UTvyETLc2MSgjEZFs8WVh5wLp6",
  "key18": "2VyGUGnshxXcGz4TZvRp2MxmaHRyycbWDxUh9FVrM7iTmgkrxUEHEFDSxmzqsn3SBYoQT8EEzHHWWuTPyBHN1qKc",
  "key19": "3KKGGuMypA86Uj5yT6zd7jpkQBcAtGBa3DtzUKcMZ23UFatejS1SZvCUmFR3qNxwQqvow7KpYYexdrkV4vtwiDcp",
  "key20": "64BDHEVVxSutbPTKuEWRiCtPxxcUEgRrVF57CAWA1NpfqX2WqnzZk7g86B1Rnxt7eU87xTsUBqfiM7DLdt7Zz1FB",
  "key21": "4x8UyNmn3ECaYbA7LCTTuFS7nHt9CZLegwgMaFfPogAEkNXBQmWE4FvDYLLiZhuWnWMVKDJM5SAkEL9Bt4nUem4H",
  "key22": "4E1MG3t4p1iaywg5hfvLGPd1U99b2gKsiDC8p2XUrUaFjFCfmaYzpxDcpiq7zDLfnvHfxPrxL5pBKzPzwF7zm8fu",
  "key23": "4vCygRPm41nkzzPPyC3AuDSXbtuLRwGTEdxZpTrRTCfQcKUjvgSer5PiP6LqtZv82yQbRvWDPzvpWB7CGhoPQGPQ",
  "key24": "63dBaC9R7Le5BkoiVCxbwzVDKxr7S5T9R7GGRcfCnYUb1zyDhQ3VtXcsiLiqvQJE2FY3ZA9auYSUN4UPw6TN5bdY",
  "key25": "3rKFBfGWVPEsrnytpwpXhBLc7ws3Avp8N1ZBXpZBgRPKYSo9jFv1cu9kzRofC4oUU87eqauUjCtyFGxGbHCshJAC",
  "key26": "4BvadrzYNLTnojPxeWnxFDkndjP75ya95wzRBWcPZ95ZyaJFstsUXZmrZrpwq6Xgg7CgppeVLDAF9yLUCD3Z4sNz",
  "key27": "62MamWHUnXxCatW2e4KFRrYPM7K87P8ipVy7hEnw2i1W7rLFf6AyMgnsN7QRRpKnTqw5xpjAdWzHFW6HaVZgUVBN",
  "key28": "tuffdsNDMAjA8F7gTu6r3RgYQtPBzuDrAKhajAPt5zDgwuhAz4pTSYB5HMHfosYaYhMULi3xAV3Cyb74HgJyA6f",
  "key29": "42XanAHAUzGpJxumDwKEzGARf3NFdGqJjmREJPb3XzNdJheuEC1enBjGXQb15p1N2HZ8gfdfrRN4GDmvpEB61qq3",
  "key30": "2uV4hjXcHt5M2d682gnnXBqd6Kn5S64VGkVxf1iviAbWLzzYyGkG2aauuTLjdK9utZLbkziVQTi7mRSfpeWK9Th1",
  "key31": "nFRMJdtzirrJkFWg98foz6RHpEyi41nJ6oJieWrd17BkcN4y7BQy2DesKJxFJt6HZg5K6w4zWCHTxTiUsbkAFEv",
  "key32": "jx38j1KD2gZDJcmcfa3ydBdmC6SwfkVALHWFetP2uuREx2LuTgshvb64GdDz4y69sWShWxoz4QcCA9af65i8KMF",
  "key33": "5FXekimF39KbTd2iQW8ZP7fj8WT4m1RcenXEA8tiTb63134wzjwChcQDArBT1r6Q3s4yZKuuMtDi4juFdbuTjvRt",
  "key34": "N9ZAQHbV97K7djdVdaZkshXvTMReDtV9aN7vM28ZfiSEtcAVdbPp2Rje9p8gdXVjNEYWQok4H7FtkBqc96JTJNN",
  "key35": "XTTZeJxJvm7dbHVSAe3cdgUFyJ6vdhG1kXQmsTvo4wvoZFftjVdsp21B15gohCVZb6hympnXaKMFt5eU441roqt"
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
