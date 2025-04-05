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
    "3h2R6ws9Tkk2LmwEUmZRae5h9UxpgWtKnyuCS7HifHaZsZ995uYtEEtx2VrspJfBxmYe9PQkn8YkMi26TjJQwFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TyFYeV7ECiwxf1cWh9RqVBtFaKtHZ3ddEXxVmixe2tgTE5rFUaqH3SFw9Bt7uCenEtvEEwKymXwhXwW7oBg56Rx",
  "key1": "2pMAUQn7C3JLwvk5gaCjA39bhkbC8gCzkUUc5WZ5zhCnCMZJsFHmk3VM3NFm3WXEcuKztUDb4g1HDzw8tFLNxqzr",
  "key2": "5tD7Yd6u4gQRtHXcZFLePRKY8Ft69ww33ribzBj3i5GFDGV2owbaqBAe5MxYoehGWuFJbM3tgHREUVjHfw8mVbQs",
  "key3": "3uEqG56DPRsNRdjcLbBfd13wz7NjoVHjU9FimAmSVgdmUVAfMrJ4LkytgEd627nszPvKdmWGwgjVHxr8P2fQtgW5",
  "key4": "5mYx2zRtZQiU7QNTu3SLZz4YYqLBVpStb2rhWe9f1UkuQFGEeaASfxUkiXGkCvszSS2TW1Y9mntEmZghxYhvCyJ2",
  "key5": "QFYRt9Z63Z2ij5RZbhPSTfyZ7VxdsQc3H8dia1AUrmWnnh2H43hm7uLPVwUGC8cuMd1akX2DjF25yDtoXprHhVa",
  "key6": "uw7G3uVbGaKYjspFRchoEKyVTozcXn29DakrBPdxEixn8GgmDhrprTG4HA44UqVwTNHTEVjbTFR2qjvXP9QW99d",
  "key7": "2gUz8VJPScyRpq7sxWBACU7C8iSsmEp4BTLAfMvBnebFVEu9DHU4pWCqw5mkFfSsAuWF8ZhHx9gn4WtRGp3YUA8D",
  "key8": "2cMdoGdTFUCRjsHMGsn7BijDZwzHKmVFhmyCbGBeWxcJczfsfb7ZQ4fskdqtrNMGGRtD2GT3RKeTK4XgiHkxhB3c",
  "key9": "5a5pvb1ZU4v4WABTGQqoZN9fjKGuWaFmuxsYMDaqzPjDbdMf7X35Z1ySLb2XGsBNw8gkFpaLYEmnsBPihePzBvqf",
  "key10": "2ZXyg4f1QPhfbtyEwef6Mh4F2mQYotd1euVRDMvQLa9RsimwbAVq94qRKkwvycQxW1PJQARf3UJ4Qk8aFANChyTs",
  "key11": "4WRvRUUeb7gE9M8zUxLReJDkD6apJn9Nr9wpJxHNneka3p3c5VYCzhhSwT9zakFv2Sk7ZhDnC53psHnN4yapzaxr",
  "key12": "5u1yvPwsYSXcj2oowmDuLaxGv52LpCLoqBqHt9xHd6eDFD8NbBGVjLLkb9iR3ho9cjoSbbQirErKYB7aX1Uv5jM2",
  "key13": "2oxph34zc2be64v2yrHo2RRBBBXZ6rzDXCz8eUDSZXzGQnBnB1AqhF5jae8TmK1xfeUQKYThxsWpLquvJfVnWQH8",
  "key14": "55HZ2nfsHb62bvmKqTaCEFX8JzQGFYfsV6bbEknYWovXinioYsoxR69Ndt87tKpwwpNzxy9Z6hE5Epzzby89Ym2u",
  "key15": "4NX3KzjH6WZcmRdkeaGFrG46pmvPWc2QKSJCNYniJDM1gDjTLH54BtKYGWLeKBsipgtXNHQPPswUgJfj7bpeDw3S",
  "key16": "39DRRCfgEMdpAsUo3SnYkmouYNYZEMPxYLqfwXgKAyt59sjXBQ3t8jyEPCF7UqZQHN17XCTxdNZYAM3zyAqm4PV2",
  "key17": "4toPp2aYVGqyCWZPzVdd3JuNVRVhAackDdeCfjAQoa1UfZgKGaK9BD9gPh4Eijnbn8AbJRMNGRh32oRhj3EmHTQp",
  "key18": "tu95ap89P7njyqb9h7AkYQQ5c961pPmhRtDdxTnyDrNexuZsemMZoqEyyEUsUarXFXr5CPivnhQH19XPpgCqk8y",
  "key19": "5VqrZnyu4ipjYJe4kWVMNHyGS8FZHM6zztMsis8YdtFWwB8SdtdBFnJpXXYCvMFsD9jAQEytaXwDaV8Hw7z6uzke",
  "key20": "3739K53VLc17f6oNa8wVLq2GahYEmEJ2rFVLx6Hc8J4dsFJrupapJavAop8Z7gXGUGn5pcXiSsZyLCxyVBMbUtzq",
  "key21": "5iDJg3e8FTCkD5qV7AfLhDLxKNcdv7UfmJ1hmHxAJHPnkDxxpKFTe6kVPed4BDmAr4VU6sruUsgBwuNEVN4w2aqv",
  "key22": "hnNbpCbobf25J8weZ7jK5XZ7kHtsACTDC62sPy6Jb9HpYxxk1ZukW2ckDKpmUcUguGEhiKptuTmaRZAnK87fDpd",
  "key23": "45dWwkqSzaLey2on7SHXPFuJT76HtRZmVJh4X8pgVz2uXy2vXXvwPKc9MpYqsXrx3RwFbTZPxoRd2MK9BZzey6bR",
  "key24": "3zcyBSUiegf6wDVtRMUv9o2MN927G65CV1FgXhx51fPPxkQ6Sqq9MppLRSqAvXuNHtqqVMbCMZL5LuLrupRQvfUm",
  "key25": "5b27hhAmf3QFYKGNewnY4xQD4kotf8bYkm6rMveKJjapDg4DXxikqgTzj5dBnb2TRPpbK5RzfwkVRbVy9BPwzFcz",
  "key26": "4q2cc32aY22eH2xW41J2CdvedqfM41ehWm8sUcqsHFgdrx6fYj4PR7249bELrPTU2mPz7ZaXCqFdUSGLRVrv2hxU",
  "key27": "56WUpqjj2vHstLZdNKWNSxZ3DTasgazE1uJRbayW93jxqqBsd2bRzBnLzRgn4zzXYXZ7FJJNHsjS2vb4Lj7kktqs",
  "key28": "ik4xfDSYRifuiUsAwgHkJs242wc4xxSv4VSPePmaHcwDCi6emKCVzaFFuXPW5gyoumPunbzGnA3rwZnZKTpRqnL",
  "key29": "2yRy6NWiViD2sQZqdJPvYX6iUizjaFq7q4YQc7q1yYCUDjvfU6aGtNzvzorGkeo6vyGuXuc94E7EzmU6khpVDx7u",
  "key30": "2x37qNEuaVVZxsTDSHMHt4QYy6Ksks7X8pEQJVYmkrAtmEetr69cwim31BZZg3SsN7WGiyHMxCkq6aBz5p9LwUeb",
  "key31": "2CV8bwB8Vgyzbs5qJ9v1Ucu6y31nF9nHXXDhEoU3AteyJwm3sdRZ7yCAgMAknob3egzRN7vbkRHZt2KDjTub9wqE",
  "key32": "2yLFen8rAGEzTWD4eWghB6vWVhFdfqnMaWUnsn3S15Gp56FUEVWLpzX8Ggf33pJRFAHgncB6yonuCfTfiUx2XCNk",
  "key33": "2bWU7VVPWNFnNXRhBsMEBLgMM4iakup798AukotNxZVRLwtoUoNu9XZ2qZG1Vjz7tKqg7rwYRc99YXHxXLd59tHZ",
  "key34": "3XuRtfRCAkoNz7SXM7mzppz9Ey6rrK2LvTYF5SVz4w3aTSxkDj7Rtoh5ahxCXxFPJ9FsWMmWTmwosVyauWE2Lx6f",
  "key35": "4pdzfNPt4Vqk38sGkqjG9mJXRcTwMW7DZ2PZYVBsNtgkJ6KCAewXVV2ao9exwvswE6Q94aEtTqaL5zpK2FisaHmb",
  "key36": "58acNxz47ybsepuuFspiPBo8a6k2cruqKqjqPhuYJzr7Pfxh1kiRWEaxwjFdfh9EAZRrUM2fbkVZ4J8yAXB3aDgF",
  "key37": "4kWpBWCR3fEiTacM6EwG1apAW4yVxqCV2bRQKfXtXT8VZuCZuK4fbCFiyPMw5rWpoaCnwHQWh3rVscBXLBKCijau",
  "key38": "2hKCgiKeESS98Va6nxDnM67iBzEXUjdfkycVLpodM49WZeYmz1r6Z5SMuej7Mb9qVFmSfaj9ockpvmFmzGbjHe48",
  "key39": "4zH3xhAnZXEWqBXuDMq7MeejU8fPyig34BdYxc5f4TvaRwVeNRHRwZZFNV9KJm3FRYnXJ75CxsMGGAB1ynyjzu1e",
  "key40": "5CqS6SFvboLqGPz7rd2HD8Rnjy1UXBP6Jzh1LokbCYhKLqkByeNoasW5aMhff8AcPUZF2HQgDJR8MmrHMewWZj99"
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
