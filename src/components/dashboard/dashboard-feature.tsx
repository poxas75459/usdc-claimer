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
    "2ZMcAAc5aYR2D31Q3TezHuRCjDVSSo76FVrCyWXQHqKWDjPksixTEzrudJmkQLKrHc8KWYEKZU8V1D1Xs23LxrRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GoZZ9ufdhwdAFGCzS39q7fNtbCBfKQRrp41mp59QCaKe75rF7rQn1M1BGDuruT31wvakANa3Y95FzdnbTmtwk65",
  "key1": "2WiyynaUvTfv7b6pmzgHx7yJ9zCtpWZW9AVJdjSqvUcghunvMtruc76d5nTnpPymiMx9rcbn52J1epgqAdbj3PZW",
  "key2": "5stXus5ZJKwpRBwtQUriezUGU172kvrwsbxDf2v74dQ92HtHJFh8AtCuGANkyWBjmVYya74iqgVZAj1mnTfx8ugs",
  "key3": "4Tex7QCTisqd4CEA6R2rAqAimssnwCmo53zoFjkmbsvtqJkvo3tVky9kcuPHvhdn1njgU77Cc8AEVwwMXPfSDt4f",
  "key4": "4JnBpiENMDGEdxtjJFxoHrbYF82EMzhokNPKTDX8z3FsWEYoW6dpqCpftPp8ruYHZUeLtjJ9txpm7fE3dNkbZSUF",
  "key5": "53sQoitK7nnYBnTqttGAR2CDpKNc5ppFwuZkKXWLEuX2dSkji6NJLcJQce5r833HGyeYnxdoA8vAtVfbVzvR9f7R",
  "key6": "4aepoDWdzKJS3EZD3KDEe1D6q9uH7ccaLgQMzWnHedwpPP3f4YGjUVtMfcpsQYxBQS1AwpDbQcZvhWTBG8DNcuHT",
  "key7": "4dufgFPQn5jZ96hWRnWmaWwb9BswrEH2Z91cED557Ge2dkiY5eodTKuidRNtbWPbqg5xdTHJuiK5LYtDY9fxBHxE",
  "key8": "Yw7FAvRUHQQtt4A9SUpnBhu85bBnzSRGYuGxSpYNtfs2mjxnQYTeB6ktAT2xw8Wy8h4DyejwedGedJdQ898mhAY",
  "key9": "J1dA26TZdysXNSRXMb8ZJ1X3Ks6Hkwi3gJqASoMErusTtAFDopopbH6wrC1BWSvfn5YTug8wawkYWY7xkro2VmH",
  "key10": "5jr5ABPmeNP9zZcMipevqgVHLNvimW7mAV3BdMxDmDdFsVrhTGS4tdUJTDkXxhLB9MYEwJ8BFu8x2oHq4sQncem3",
  "key11": "WBxXnSWLnhRRSTHNwBPnCduT8L2VjAtqBc9VDXzZ362WETASEX8foQ88KrYvuHPZVQeKzuLJVVyQNR59qU5c87s",
  "key12": "5mo5rXvNebiX4HqCfDrCxESsUiWAAi84tUUc712aBGgk8f2Jf48oydBM7DJEbU7oM8C6hxcHrwDG4sjCFQx5tNJv",
  "key13": "3kV5iRonFs219wRqBZcT14FSFpyVuvBXdMPbZapBnqrHMz4Y4Wuiy93EBzaBujwoNGkaZLNRvzrq96mgKKm4HnKN",
  "key14": "adLeV2ZPA5Ep2cddZYxmyW8aVFGRoRJmjZHGdwUtzhb7y26fRtf3z1JPK6KLQcf8zgoNckwChEWaoch61wvrq6t",
  "key15": "3gtVDf41Y2A68tqCxz7CoBtGHt4rkZP9vTB5m1U843mgtWT69hBRj75QcocEjVU46NxRgdAXQEhZSahCQUJvdE8L",
  "key16": "5g9qxrQFHkJ2FoQXCEYDp2o5U8UdB7iMS14QhmhWE2Yd7JLvZZjbwxgaVn44ijpULNKb9GS99RVziKvFVxp21HDN",
  "key17": "qZMG8UUHrSrfEc6mghsKnRyovnTanVyu2kzQverPZZT5fwEmrics9jR8VmbMQ6Z28j9DgkkzXd1FhSu4DUPWZcw",
  "key18": "41DT3jtWDVHoDmvSVivAc19bh73XpM6De1GaH4Q9XZxgdJe29kAJAdDb4DivfS7M9aoDJwV3qDMLh3BNJM4hhnSw",
  "key19": "c8fQW88K5y9vTjAgCua537MLStu9vgaySWJKDzZ9XJ9iXsZfap4AsUXikuBCPToxLUG6NB2dFEuS1oMqnChKkPN",
  "key20": "29HGRa3GAko8WN2YKV5Xyfm7hqCAJGhK1z6PxV6m8H6SSfaV8vMcJXC5gxHTe5xFG7nDREQ1cFY11QKXu7Ft7Ewd",
  "key21": "2tRzpVLrjxWMFkCFBPCfWa6o15UGu6EFqhVuXGTMhaxG6DR93GE5diacRrVyBmdGXXCKK39rQZjwP2C56h5bZptV",
  "key22": "VgdNeNw9LzsBocGbwg3QYxgyUqWn9uZrvd9vgtickXVpUuvhuJZxHepkqVkq2st9FmNq3HRTGxbgac9YKC6uQgz",
  "key23": "5uWSCuZ5nppFHpvLvdn3a6NrY8H7z2zBZsMijGDJUmfH7eXJ39pXJPPfjAbQVmWCufagW3VpJ4SeaCy4j7FqJ9L4",
  "key24": "374cR4fdadYtyC7tDApiopTCYhfyqyxoBfUqxMdiEoN92vaYceHevReiPMQXXkeap2Qb9xNRR7X2Stm9y5SAYZNc",
  "key25": "4XjRKZXtK8XCzsuQ7rVvjsP2MizbfCCZJuvhKjpeuX91hogtbpfYRS5a8ZHNUc9r4L626PPoDwRDejZ8TDGZhpCU",
  "key26": "2fpu5NWWah9CFV61SrGBDDGjEcPgVMD3uTUmpkATaR9W2xeHuTuvnicwXFEwQXk4nCUDABxTUh4J5dBzcWpTPCxH",
  "key27": "43DzZXfBr8w5Mr7R2NeMQfqxsFbb41iwYXgY3dpD9XEUa1KQJEQhktVLwmxhR6958nLTajFKT1q3PM6UD8RNsrGe",
  "key28": "VaZWdAfah6xpPmfzhNaN2Pw8C8NV9bE5rMXF44CDSQUjnqhiSym8k5Eo6wjUZbr5dKU9urzf8hjss3n1inu9Eaf",
  "key29": "3V6msT9eWzoiGnVVGB9quEKkYpfHckGn1oPiH4XgeNnFVx89kZALhHkt6y1MHsCmhXs5umZGhjX3CUYjNf1Czz51",
  "key30": "2kEpQ9k4fThjarfM1xXeT6JRDLoc4Mv6WGYiHNm6Cs92ZbFAHwpfPDmMNd83jnnReodWPLHWQ7y3Xvv2YuHHLYEc",
  "key31": "3rdaNPjuTaMvYp842Dxur4NxcWdBoi1ousfUYVkwNGyRsyrAkCcPuWsF9Ku43cj22CQ5zpyx1yn3tmniiJ1odxme",
  "key32": "2bxN8Yuh9tdiZL4vBpP2yFWAR6FCTpnbBJQgfm4nA4V4goeuJorkVt8ECecw4FfYqEjopbBxRezTFLykDsNSv38e",
  "key33": "4LQagkmKAADqhrxTeb1Q6Cyhjz1BZ28UBWLKNzUZvLZSe8B2416WnVccs63TgQWB2EedbK4Pp2YZLg1qTSPYnL8F",
  "key34": "5Q77hdav3h4sW6CMivZUNv2cxNMowtH12Fccu2X6E7Pjs8PdP5jYHscKQDUKaXRoV79fay8CRzNhxNVsAw6iCmob",
  "key35": "5czobFBWoo22pCuQq8jS5LrLocvsN33WiEJnrwCfFkd4pPMUAmbUkpKkxzdNVrULe5GJdMeBSKCP2WtxvF73ZnBa"
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
