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
    "3yW8w1NbLcQVQuNhPBTmrWrwKS9AgbVGV66gdvU1APppvaoYbbeAGZWMvgVjQgMnLaywKnu3PhfzJ3S2ftec8mxJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oZN73VJcDZ9P3px2TsV5YFPDm94eBs3E61Xx6MNXe2ynDjnYK64KpLRhLNES36FNd4yoNLTfc4z6yHNfUwVjy3N",
  "key1": "7rwNE1CWC96yCxwZqQjEtioQcsqbY79KyKGtobqbPoEchjk5E7XgCgfqJbYDT3k57Bd5fY4GgcsNMaVHp6N97im",
  "key2": "4WBNscT5docBDXnZMQ8MTMEcgdXzLZstPmaRiKVC3AKt6GMPzWCT4vSsQZirscF6fbHFtuN4cZsGMeZbkYm2RyNu",
  "key3": "3joUm7YrBa2kQzx6Lc4TiJxTn33sPU2f5JVKSjBfUL1Z9R55e5hbNwQAQbFyFCvZk96tV1Q4N9mMGgLW4ue9zxnd",
  "key4": "JdfMoTPkWnvpmAJFwujEsu9h6obAG1DaHsLh7HgbFhoQgxY1L9Fp8bJ5xPFyqjbouMeF2H4EMmeu3ZpQZ4UKB6c",
  "key5": "2MLXX7tiv78g2p1H7rNkACsE9wcMaqNJy2DUtFtAECLvjszyPscTp91o74pRVyRaRPMoHjqrjvJW4FWoLpACoRPB",
  "key6": "4aGUUaQ4JZinyRjrRMHFH7QHtLmDjGNGdMVRzMBba4WEMENAuMrF7MnQbp1nrhqgCb8XtBYRbKJ6FJpsBUnwW95L",
  "key7": "65twGWbFEYDf3mxtQGsZcA34K9pRGwYrRVrgUNzEWgmdWj7L96N2YB85vQTFs6gpfEoRhksYjb95ZDahthrZX8JX",
  "key8": "e2zFDdMXiquchVjr64juzUbk4nKxnNKbKV4z1JxF97DXcrjUdBeSoVcAm578hfCjTUK2YpM7a4FQfNwDKpYUxf3",
  "key9": "24kHDaFqUeet5k9bktKmG8spAbFjVk8jUyRrrkVYMK3yAHBXH9g5UXJ2QBKY3ypWF2kCMZtkvmLhfjn7KAHCqWuj",
  "key10": "ReTegxDZ4kcTvWPhDTyb1y6VRcRJT4kiAnBk5coemx83CmWxXBmw5HsodKCAhRrYLHxLCus64Wdmj84PPwWVYmY",
  "key11": "FEpD1yswhtyJMPRp7Kx6wGBqy3KbwzKg5Paqnc4qYNmGo2RZeLJrp7mjfMcdGZ4Dui3euYmbV2aBdDWYNJnRQaL",
  "key12": "4akAKnJVtpdmKZvtSwiz5sdmSPCo3Nz36KwdAxmTsgkRGR4QCRp2UGASnaahnDWMttnanz2VtLMG7mLVqBL1a8G4",
  "key13": "3iusXagLmhMDXXaTHi6D27Jo9UZTe13q3Ms5Am2mjmncwXPZ8ehxXhrH9q7vbWbUjQMbpLk32e7itPgUwHnxuYWk",
  "key14": "62MvMm5QeyuE3PaHdxZZYDT4EeJYqNLbjYAtoUcDjKmctCRMSw3MPBeJPrtMxk9HfDtwrHNrdcvSqc4is1UMc53m",
  "key15": "31vCsuCWP6MnKfajubPdgVwVXKfHcuTMxUwPBSyBuvrtuyVfeDPoMSE4SvqLnz1RrFvT3swTYNHJnP2g6gWhT88t",
  "key16": "578UTvCNj9BfsL331gSRWp7LbHSrW3NmGgtGGXzRNqaVZMAe9Mfy8vSDkAdCsgELRi7CEa6CFrWzeq7KVGDQxv4d",
  "key17": "WWx468MNUDnuUohPVdLhhU7dByHQnhVGGDVgS17y8CQXfQefS5MDrpokMwoz2Wph4C7uE9b4PCtuZyvQoTjpD2T",
  "key18": "67nTjhkupyPtL8aYMX3SU1Erud9QaSRf6ceWoVGNznbeYbJR7Uyj85xbQqvwPFNhQo7jN3GJ9C4jizFdSTyV4kLk",
  "key19": "3mnEhMpxDsgR4ZoBLdR34fAGhkPvJENiEECEpd4rghToKgL2xPuDDenHX31kdu398fsh9QScrqfUm4QbQjw3DFZC",
  "key20": "4yuq1DyyKN7aaaPo5HVng3pPpNVuCbWkSMZd64JvvwvowDkZoFHjhZvq6GCCBncXY4hGazC75f1mx7FRwsdAQ87A",
  "key21": "21CRTyYcG5Z2NmbyAsrySb9u3tgDV1aWiNaxkwks1vtfWweZq5zdvL8atRjtWfLWr1Xc5WkuNMHTwEaaxChDsB7Q",
  "key22": "4uRC6PwnAW3MBfQCpHsnKgAPGBpi9K8Eh3znW2jSkddTLNskrinQHyQLpMZNYVPQmykcrGDfYGJ9kqArrYjTba6y",
  "key23": "31dvMfEsskEt5Yx2s5DCsG8ec6zwkHoZKH8WeJZXwmQFeKp9ounaHbC6eVkaJdJEmp94WdSk5XQLDeHQFvnApro2",
  "key24": "4uLKaVzm7gEJfEjPK3JVRCaKz1RsWn8idc9PRhNzoR92jnskpMm4GSkDtM9MH5x2U9M9Ua1pLT6u3M8mup1TfYXA",
  "key25": "2Dsr9SHP15nQ6Kke1WnyM9YULZVn6kDbBbzGh4yDoPTLwxiFnTmY9xXQ16B82iZcF51MusqswBiL8hSZjNpSLd2o",
  "key26": "uge8Mg8amdmf6Dt7MS3NJ2UQ9BCw5DbiJvX8Ki6tzGkVwavRTepLVWXjwPKnZvZyqBtqhwTCMDEeSeVVCq377Vn",
  "key27": "Noy3zSSUh6Nx4SdBZ7tAnmo4ib74KJhnzGZjaYDmKtJaXVSrSvqu4JShxNqHrLG7q9GUzp2jmuud9wUWUieHmBF",
  "key28": "2aw6YiPMLw34gnUMMpvUsfRGZdDP9zdYoVzF5ABFotn9652XXM1XC9yqJzWFCecGf9iFQneHzbR5UnEwdgD8r2p9",
  "key29": "5vuyZeDRtF5Bo654uNyGsXcxUXA9UsPBRYCirrFB8S4Zt8CSL5GZYgFBoB5SRGyb3ojtuszo3VTrG96pVxojVc33",
  "key30": "51CgWjfdnWQPMLA3iQ71sU5mWosDE42c7Rtx9SHMzDCKsLFFVSzM9dyXY77AkaPay7G2iDy4cTfajUnBJ1HrNEKA",
  "key31": "24SWYcLGr2nEm2RCdbz5xGaQJbkqJmu9zguayqqYD3CPzyxQg7RhqWmhuUh63gGwJ1SWnLNJ7sXoWq1YFcVHBbNn",
  "key32": "41UkBb1sNj4rzAZs9jvFWSTdLqyEJZcecrXBHJvTEpLKTfeFxYp5Lr4QHJUWEnvcYmsS4AdB6xuJ4FKarpK3mPVf",
  "key33": "3TCvuNWxzFzS3mvdHqWGSZUfiavdZcjFJ7P6MV4ixxjDh51i2Pirby2dNVWLn8nekgQucejVthBrDei9Z7sSBe7u",
  "key34": "5wyv9XVXtQBpAH8Zd7fRa1MKsGQzLC7HCmRmEzbnunf32717DrtoMob5j9By5SQPnTPmaxr66aS6EnXhBbEiFfxx",
  "key35": "2W7juicaKsAm7hXYpVUt86GcSjoNXSYFzT76mNCuNtFhFHZLFAsz39SWU7a9z3RQ4N3Z1ffeFzoHRHixxSLT6QrQ",
  "key36": "3n1VN1XxbykP61G7kt5oKDE3BvqDMMWDg3XgYR756RJMzr5aXKCVHKD49xdtkpB931QWReFykM6K9AwuNigLAdBy",
  "key37": "2yNBQi9xRV9u6CHDuxBTCLGW5xvJ1NiuzeRH7Hv75EUJDF9b1kxm9JARw5w3M3h4SDGD1v9hYMPjLNNSy92b8YMc",
  "key38": "3515xc9VT8xkQ67M4xPY4b9gQAXcEQTgqXN51Ace1ZKjVTGejtzF2nkAA9bN4EPNoPP5NiDsWDU3ptc893ZHcSeP",
  "key39": "3pK8ys454Hq3wLKWfEv3enYCN6CVm1mbbBd4jYo4Dz3GkV9eJPQc2GctAiiHJxMGaFAwdogs9gB4nwk6h6xHoBbp",
  "key40": "4Z4Bia7LMqEHzoyV1ViyhwrDSb51KKK44Xpq9hSLbfjFkEtN5z49kTRDKjz33XyxgeFSWhfH1npk4Y5gEvQ7KTdn",
  "key41": "hWCFCCyoxdFhpXNgLmCxYmQAwHgd7nFG3rPhFUSL2uB26XeNwS1WqcFN7LUztquEVeQxSN6b5zYqoDtqkF7gPQj",
  "key42": "3AE5EX8e7xVBcYjfjDG42jrYo1k5L4qQEcsQKxHH91QKniK6bcZXiT5xK2BSSwKgANYZ2Sg7nWynt7x8R9B8L55X",
  "key43": "2Rqts1mMYBw7xAtCmLETGMxxDPi46zK6jjULpto4opuL7Civ4HNYqwByxasgrMwzbmTJJKBh11bstr3ZvNyQcJoE",
  "key44": "2LfXFaKfm12xoKLekHHrD6fvGhjFE4CjnDMsftD8MBdBbBXNhW4KH74HBhK1B2EiK6cFdB2Jy2yL5D2kPZ2qZqEe",
  "key45": "52Sz7jK6KsgHXVqNduvo3mfTVEyJbYADJP7ffxmfvahqosi1EQNWMapBZ5xDfqfGswB3V8msUzgpwHczCLZySqeJ",
  "key46": "2PAVJ2Fwsbk3dRDB3Bi5GEom613uSjN9aKHonRX1rnvuLRRf89C6gfaRVGNJQnbzvJteSKHqznv57wxit57fc3fV",
  "key47": "2vCWNTwDGpkXLsZAo9S3C6LM26Q95LPo1r1jCGpaGV2c87JVTkfBRt2bivps6zaFndVUXFazrTnD7wucnvbjj82T"
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
