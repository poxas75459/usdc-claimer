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
    "NN6ksbht2PfENFGNQeNposZyAHeCLKPh5CDBh1yARRvbKiYBwQes1CJfmdDNaqv8wSpMDdFqCpfuf1njXXzWQGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "569aBXD4NmtrSrno7VCJpaSsyyp8R6KL6WdU3Y4zTAfCpkZksY4E273ZJFQssoPd7QwHiB2mz6X2aau1AQ2ssjzr",
  "key1": "5jckoyqpb6FW5mA5JRbtLJy5gEJLu7tU37fn7h1VYFRsbk2mC8Zqt9jmgfdpB9fY9XBeSw9VbHr6Z8wJJnYKYdAr",
  "key2": "3jvNb2QuqjLmjWTez1Zyx3VTECiPy94jxPyjrvvuzWTGjqdo5D9R9fb64Bf26f6EdMKEHbYejfAdsk35ndzbTHC9",
  "key3": "239prGmEgat2FLHZE9BBjYEwDh7pvVc9RUzKXgSCiGamSTwhghvEjRJgYmHBSNYf8uZv99QPXVoD1esWXV7dMWN8",
  "key4": "4X7zvcqATnNw44kmBy7cCGmURRyRabdygXe3h2i13NNmFTnbTd4h1GEBA4T6L2WWAr3mkBanJDNChBA7yQ1gY1By",
  "key5": "4W2mg5JDyYisUGnrERuTjDeQPWsNwF66zz6boHroZ9ssPCyjao49z3f1zE2Sin8twyGJKRXsfjULex2qBtXXrYYv",
  "key6": "4x5MLtDvmw3wMuyQ1ACR9EfFS4mu28KcXrMggr9Bk8HZPPFWVzXikyxEqsf2HWhjpfn5Jn7hskrHfZM7ApTsYh1D",
  "key7": "3oMkrK4mvtB8vt1HjWEwtpueSD6FSizQyE8iyFquXPvDUXuS9vJjNaSSmp1MZiBsmuMitrx1B7FGr2uLGnZjeW7E",
  "key8": "4thQKQ7qpmaSP9QyyniFhMdypGQ42XnfLVFAXsGwF6ngBhTV87LQsdpCBgiqF2UCVwwvtxqLGppnKdidHFenuzWu",
  "key9": "5L59NpC5HRcjUP1SZHoiYSZ24sC8zhrUYHtjTAt9VBogCAPqeqUVRdsLSxQYSyr5jaBXRw2TPura5Fn6hDTcSx1a",
  "key10": "5VuRYVL4q9nK4WuNSpYwtQRTuWUC23iHpe7wKYBXNzRfSjV9wQcxsfxSwHiS1t6nm2FBdkmy16SGUimHbJhBdq4A",
  "key11": "3oMuPe6kPRyUyqYvfLwhqB2TM5CE8SeSYhUVyov5KKi9SUbueDLuWPyqsqe9Pxzdq2dhg4HBYZS1DTAYsUKbNfQP",
  "key12": "4L9gPt2LjQ1U4EwoDffttgauUYBFzesn3pyVVBysomyjUzMvXd4VkNXXExii1xWYNGuX8ZBm4yqcWCbS5189S9j9",
  "key13": "5eZ9U4muLnWVZCE6SfCGaPNB8EdPKMJPJTMt1hxgJWYgogd8f9cvHNbudkFyJrPpUAKFQKSKVofW24BMkj4nB3SV",
  "key14": "5FqwiqmBVa1EUPtGcfK1xW46kLWkpxSM2mH1yPstiU3HiYMLQUsKSDpgqETy9PbLF8AfQeBcfZMF3UgxKPupMfCA",
  "key15": "3iHMsKKHkGaToQ2CsxqQVnZFAfNV5PrEVwmyTN21xDYrFyjwKaPC1S4Dm4KP9i7cxGZLQfNpgXkYSzSnjHaGG868",
  "key16": "4BMB34GRKvR5QSA3YAwco3yLE5gQ1Zuo5jGT3XkFR6kdmfX7hSDempyFKSAB2Bb4Sx7T9AmEF9Y29qrkvcn3V1JS",
  "key17": "5CjFq8z39ZmbPNxtA1NQEESeZ9xJbK7hegKKJ5k35vPdeW3MT7gC1PEQ8SN765GYH8p45Y7GuUHQaQ4NfK2voDiW",
  "key18": "4k9zjFVWGnKewAizmgg5rim1N2QeD5SZqzH1YyojrwMwJd2SLcrshYDyd6drh2hjYFLKosEui3SRij49scTWFgNe",
  "key19": "5yELUumSQNWQrPfN3pCks3qdR55yaqrD8qAeVrVwmA8pP42H64y9zt9JgTG7gNN11hz9VhYbzMGpg1kutFvKXncA",
  "key20": "4FgU73YqYV24Yw1NPi3d5HTbxeuX9M4wEzuaZXW8mGGc9n5jAdAu81Lpgzk476jvbWAoM6469J6e1je7NiyWhY8A",
  "key21": "5nSdF8ghrE7EtRUoNDkELAqaoRho9R7WEx3AajqdcyxfRDHzwzmhoiz96kAz9dySXn9h2HZFp62ZcvekyTnTnkym",
  "key22": "5Ra2juvvMeNWFkhmjR8NxCTcgerXHdkv5tKcBfPUig1M1CSFPRPWncQw37y5sQiyTaEoB8zGaR38vU6ED5MjtPCy",
  "key23": "3EMf8Fhx9FxDVfdGkpdvL9ThxayygSe6DM7BU9Hgxy1gFyaFdFXDcdXgNRKUqXKv7nhk5n2XFuFxRxfCdaPLGbQ7",
  "key24": "2pN2BhrDgwyiXZkg4BE76hHtbxScdKLqSwqGrhFZXGzMT9heJwbjJWeaJEYs7cDBPCHHTxtzTKRxdsGZmSRLTNJZ",
  "key25": "5NPLS81rMCzXzJtZnG384q38ZgS4hNeeEpJCEtSFrFg354ftjmdZwU86sa3wtgsA1AwPdmi7hKwx9xyqCy3g2FPy",
  "key26": "3iYRuvmap52tsnP5Bhrk8XinoNgg3MgAHSDpQWJxiwtPJA53xdisBbSYcC6XmLzS4Zr4evddEaYAcWdFsLjgafp8",
  "key27": "3WfhE2wNhzKk4HAi1qnaBcTZb9Kg9W2A3WTi9Qg2pjeimwVwfUUDHsYCFT7G5M1n7tHhZJFwDUuRQLvwTernqNhk",
  "key28": "5WmwbaSmrcaEHHE9DBr8KXL8rpPcobBENMgyh6Moouqnj1bBCCjQbwD7yaPF6Kf1uWmeer1wwXH7uEh44eZHfmCi",
  "key29": "3aKUMLCRWcXViSfjGyuKequFUMd6mQnEP55RNKa3BSynKqXdhGufTrBcNKWjpttKWwArymnYP2eg8A8bA9MWpTtu",
  "key30": "64QSSd3wrBxJ7ho9bAUedsc57iacWTyUqpJvz12EWs7mp1cY5vJEicNp1ptv2X4VCDMJJMcpC79E3REkJm98pdFc",
  "key31": "3KCvfSZDesQ6wHHNZSpT1L9CUx4bjAgMoJroRW9mQRsZS7rMgpTisF9L1MzP8RxhPfQoFfGQh2DpXawPq28kY7Xh",
  "key32": "fouBo7B5ZVySp1EjvTMuknNn5Ajvj7xmUL17Z5BMEVRV6zrsd9peT6enPoUGkNXyxgrSQ5fHGPYQVtTzY5wnpDs",
  "key33": "5r77dMi953zrKinLsrPnBhxx2ndESkTpYNjxdsU7wnwC1GjzjozTxzEERZSJF7qFAcwNS4opW4PWKertixf7nosG"
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
