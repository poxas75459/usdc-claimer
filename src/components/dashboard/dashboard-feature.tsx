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
    "53or8u5Baggy3CHaWbMmGFNQ6EqMN38ZQmSFRQZiKUZScQJyYmU5nUVPtKYqC5UdnHvtLqKfAPKkZe75eUA9Bi7i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DegGtsAKDwAan7RfHFiBkEGR5QRaa7U6hCMXTsQqjqTHWHA5qefVngGMwD3gFfGwGCHRfdVxJHmRRsmMfmAZ4To",
  "key1": "3fYTtueiEExCyXodJGVVzaxWRHpK3kQxjS9iVAqEkJqzg98k3pg4vp3TLLKneBTLvvqn5xvmuwmdg8GjdHCYV1W4",
  "key2": "WdVNwW3T2rZBodoNC3yj832sM6pPPkSfL3iuaiibUeDAnQiFTtpXQipadjaVF3AgEDP56Af9dvWxc4v3DzhZPNj",
  "key3": "4yw37QhfkWtynHwjztTRUa215nYcGL6jqgapGouyqtqbVrufTBJwYZAs3buCAnGUfD5SkDuauFuBSQdFWE2kjgKL",
  "key4": "42LoVKKh2vfStaTWZV4GH3ct9Cft2c5ArY7UBrXuhR8jkG22SbcfxayZR2NGcuy656UUpV9wznNL5BfKfkEVf95q",
  "key5": "4HvM11jZeVFwR8XdPXrYSM1R5n8bGbqkWkEJLzT4My3S5PYsx7oTYCMoZP1d26FzL1dQtr5xLq9oe4oZKGBpH4Dw",
  "key6": "2dTrqGj7qbsgjMnvj3pHTwuCnKvDBGmDRAoXdLVRXzi8jAK7gGaSeptKySaQTfpB8SdRFJCUNznn83BEdFXKD6i4",
  "key7": "3rn3h4ppARhzqLKc9DKAunSByKd27YMFson8w2fgG1Y2AgHncgg5B2DKLNNhd9AjueEtMGtf6dkFM7Hc6yUUcRcj",
  "key8": "RzPNXHvsgQBXCkt35J6HSBhhjp8YXXJCVFqe5P1csqRGUGwFg3Nuns5fudQMzUzcfWP9RHEQz92znthBuiVFX8y",
  "key9": "5vWGxZbc3Rrv3SAEofn1qeeCywh3ur9pTn8jN8oeJ7DvGxx5EC9vmDnsVTEfB83GP3F4A9LE4NKLV8vS9RDSGXW2",
  "key10": "xzfzbUWFVAtVLjgAc8vXbcm1Sr4R5f5wa89225yc4pqEzhnZMDSH7cDYPjbNTBdQW1huprtHwDU2urATP27gYTU",
  "key11": "4ntQWJkAGB3BNEgjEKtREm7jQHi785mJY1rFowNVAa3yrSnhnCavw1h1a8BMZSMMGDRTqqr87SVmPczzUAYXWqv2",
  "key12": "2pvfbG32mu37ET6vkpYD8qNo6vZXdJxHXphvLtS3hsnCWQwyozCN9uw6aZJnues73MGNyMY9GGXyRprJEenQobgC",
  "key13": "2z6QFsnMsUTJ9JpS7TjQVZEK13Gf79QUJbZmYCCGTfqgGyty6gba56ZNGpwNFiEkP1XTAJkvq33UWGxYjSBggRFJ",
  "key14": "3pr4ug7nsq8h72bEUKfVvXC6v9ppEKSSuGeBmmtFP5XKPwBgKfndbjexzEdnQpvJWAPULw4UuF7VUSMiWTEREPXS",
  "key15": "5hTYKLd7kjFwRM153HCE1j1NLkzyKgVDQ8hRUBPcDnJNQnCEa8N9cEnc35ML4Ba2wnJcFN4DhEr1qAAXz9emWH3C",
  "key16": "3BBKt5xRZ1r3XXxdidtLS7bsrBb6ZHHGEeTSUT2k89xPuiyzcGmPN6czKz9P2E9PoSnfynfpoQW2frP1d2oVhDCB",
  "key17": "4MBMgm4yL1ccnAcSjnciNc3hSb68aEj7vVrEEUZuVm6soZpoRkC9roXkHedu2gsLoHarWBfjqZV5myNntL2w5kt8",
  "key18": "55ZTFGrQ2q1Q5f3HiRu5tm3nC6S3SjtrGoeqFUmk8JxXQYoS7HqYnVKB6JNF1RE3g2LZiKmo3iKmwtCD3Pzjpuqs",
  "key19": "5e3Md1SR8hEzyqP1KNgn9R148reHSdb6z5JFt8GFZ2hxV3uXsrhKfAJawxVXJ94obTgcMgXVoYab82xjuWVduchm",
  "key20": "23nqSpBWrxPCBvQm1M5fzV89qay2BuUPzGoUnasEizTkg4tY8ZxQiEEFe6NDBBczzu5isAKLRGDme5r4GV35W9RY",
  "key21": "3FnSg4nEHbPCX4U1W8YB8f9NjR9vzDvcrPofvbNyvPQAAmEuY2XheMFMRc9rv2qokGoVGoigNfyf5pKMuC7puhAL",
  "key22": "5mE83pGG1vJ9sb6jyu97DazTKodcTw9FafBxYe8RFjkjPXeiSTt8YDPtsXmi24RL5xtbcUvEPUFiVwraAtToGuFi",
  "key23": "3bW7K9ckLMjWbRY9qqhyeSL6Zj6N36fNK8Xke2pUWoFcRVnNwJSwQWb6tGqXS4mPo6UJrF67khn3vUbHP6tHGePf",
  "key24": "2mApDKi6EaRmCgQDrDhUScQSHCLoheJZjJYf9zxmogNAQWE6LhQXQW7MLXQ9pCjtmSaXNk7wnpoMfw49aDuXd1Ks",
  "key25": "3fgCqPDekXremTmEH5N818uTJMQQZ6uzng9AyQtN7B7o2wNgtoAa84kbFEeZgdfC7UMZPbgUtE38ZGVHFpyR1Zaz",
  "key26": "61HVqwbi6h4MMQ2SFq2VDii9MG7jypRS5YkRa8zRoTcdpuS3etMHe5xCjb13cdE8HbkFnHRBSNg936fQcy68YEtb",
  "key27": "66qssDNfgDs3CZQJnAZ4mq6MtNgY9wsNSKDgWPZZLdCQDUZ9QkxCvyUp4XEJaBUbLeKQR1HgNF8pRNA5Jh7LRXP6",
  "key28": "2SyMCChKECPMper2KRCDj2zA4y19qeJAs1A2WD8Vd2HWWCcZC8Y8P6UWJ8pLefarQEMwGUhPJB6VZvwq9WR6ZbXu",
  "key29": "2tPMwcsGL9D1REpHMT13mo3UoqwgkWKmWJLzUHWf99C6VszPjKFXdMsYjKdQA276VQXk7NmZiJb4PQeanncTgg5v",
  "key30": "3fKXj3G2WaefrBXQThxCYCD677hFYCsvdYpCJ9simhe8dmJM1pE8fyS4ZFGeQ6MNfM49EuhPN3RfdWoH3a273yhC",
  "key31": "2ySfWZnyi1g8Kawr8nLKfeZ7i91NyTWohtYnQa7umySQbi1XN5YVnTYuWuLLxgedeehAehwmaN3z5UA4H29pcFvC",
  "key32": "4ZsoEa3hpFKbrGBt7TeNvkfz4nBih3mqj5c5CyFgEHueVoXfRdQQuaNW1Bmcctk3ifUa642n2hktbF2BsbRT5zw6",
  "key33": "3bABYwLXKkyrsaxNkaknbre1E7RsR52uze6ExKqaMMQjrXSVe165SbNCHexEpsqe4GsHDyPnwhY1bfYXzNN4Y2E8",
  "key34": "3hexxwaPiBEf6aVGs5Y27SWttdJwzEsza8XifDQzugJJjeEuMPdoWBef3Z7ANnvSjvoAF7stdSFS3Kr4xZg8rYEx",
  "key35": "66dUFJB32copb5rGJk2Zj7Vwn9GbLJ1xjXwusBZESP4WULrQJhnXxQMVmjE5jsyDAWaGixQPeFUbN9JmJ3JPTLiu",
  "key36": "6FxSsB9MHnLkHQYxeMYfKtjfvNeRCqikmr28H6mXpnYJYBKtGxZVnaNezwDYEPKS7HoZGVWrQAgp9VFxYJ52JK4",
  "key37": "23Mhpzv9GJELVqtXuZAVd1uz26CfMHzBLqXFH5dJzSYeLUm97B77S623iUvYWrJ8NsiAr3ycNf3pRj53M5gCM44Y"
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
