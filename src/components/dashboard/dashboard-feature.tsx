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
    "3ZUWboGpvrsS92DiTkBqbK8Vbt5oFJPju8Ua6jNKbWbrUiDx9jq7vGRVDmYSF9jmCEHjE1YRWx98umJPMByztZe9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K7Kk49sm2oyum5FrxYYCgRCNmmba1gW6YVLnAwM5yXWCyiMau8BNvqJA46orsoRoTVBudGE347e6ouFcPeqj9Hz",
  "key1": "23zqXFoYNsdjgKL3KzwmUPKz7S9TER9ZaiWg4RZF4QycCVcE2BiFN2UpyqEJBKE7RRXn7FSYEyJ4yTis7zSpaszr",
  "key2": "3ikcpXbQSvR37GcjSRytVgbNG8ni54Tqg9VsWrwnJ2jsfEqFQdL5RzEzJGuifE61BwXbFHS3qR1PtcA5MwMh8ZJL",
  "key3": "4tx4Q7xssMhSHeRDhieStgkj3X6CqD2A6fXMZcpyYBjZe9zxXdKmmr9pbATCS8QLXuAp3ndpofCqYUjow7kwMv4Z",
  "key4": "LzJg5jRj6fABSiFB57o4Q2zUZEutbjJMyphRS4XZ8cRpwP5GwKKySgUcK2kiXyc2S7pmqAS1Kp7tAehDHNJuZg2",
  "key5": "sEuhpkp1eo3fZbJUyWCyhbpfy8JVidohvkS7sr5a1MHpGgJ4UWDGBH448CxdcS5hjqEoekYbtDJrkji2yXRKwms",
  "key6": "5PsfKmLcQVBiRnXHkrxi1vUoV1Vg6aHgLrRzwQKPFJhuzdPjqbFHBfqyPp4x4RiGEBRUUUEMaHmLA2ctuPQRNGu7",
  "key7": "3hTKyhWWGqS3gevLHeiM7XhJChk3UnTKgzwoCZi4W5wS4MxfRnuKb3uVWG5Y2LDETxkt1gSSBJWymUQei5Pb8inA",
  "key8": "qm6m4S1NkipZB2G5Mz3vHXXHqAsQWQwFugDfofrmRj4D42GPzruJE9ypn55r5Hepjm8Zeagun4qrQfUJtbB7E5x",
  "key9": "2xaRnxBsb7khk747JF67osubcTXgwpEQ947a7gyJv5u7AHYrMZWDQF9Uoz6iXtpJyMRGVxRaeeWfXsQCzVdpHe5",
  "key10": "4FwGd3N6VUPsM3JPnUnSUqnpC4R8zgegqT8Egi7VzUKpaCHis2JVTKBCEF3MpgytL5co7DVbddexcBqLwGPEd9Qm",
  "key11": "424kjN1NvkvbH42AExXHwij4mMiTT81N19Bh68PE3CnKbf8446w2HDfjC49rdmrGse5JCTm6zen4qkfwbrB3u5Qa",
  "key12": "4TS3NdGQWobik33kMSRWU5BWgfKmTGijz4aHzfX1JX4qsc2iTh6LhbtmkJGmGWnEKMB75u7mdf4QV3WgTXFRvBRX",
  "key13": "4iMTjUP6ti3ZXejZcSoA5X5BAFhS8FSmb32wcdBfuQbCPPa2eFaHxKjNE9qTqe7tvAq8X5Xo5wthrgCw5cqQvwNT",
  "key14": "5zox96T2bmLQcNLHe8Thhgyx2oL562e5wiJRXsCfRPZ7HvBp5RSorX4Y6tnnmbrqKCp8CABcc5DWz1o5fbnh79kg",
  "key15": "3fHvbs9fadjKBMabw3k9kzpL3AxvqrJHUgHaeSAAuq3vTQeAdqgAFTvGMfsJNcpLyBpqPTKgNeR4WDd2HUDmFJ3u",
  "key16": "21NhTFhKNSmKFRaTQ3z17hJu3TajaMK9MyWE3i9TNnHgRxjFsQ33cokp8AegBfy3nb7GqErTocc6SCRZRR5kEh6o",
  "key17": "28P6DBVbKXYtK2whA3cLR43KBwTuinfk1T1om1kRXssJCrqdjZxWoQCByFYNgJf91nmQAmHHjY3Z5u4wjMgEgcTs",
  "key18": "dQzsENGxDBAfuow9Fz3tUVS9Ko4coWc5UhST5rFwiEobiKs8EqDzCAobtdo18A8eEo7L6StdAEmkemrYaZNkoXD",
  "key19": "5bocSDb7xsRue1HwQBiNsrzFJHjrEAUBUVTbPrJXXTFsX9Ykz148uXcrUQ3yvRh8csFXnrstkf5E6r6ZWmis6LVD",
  "key20": "w3YQJYZPNhFJuigBsgPLccc7QBwAfFTLfA17f6USeCU4PtkXv928GPatxRozy5TxZAgaKhfapZ1oh7hmrd6ewxH",
  "key21": "5dL8ReiXxN4cjYdrdu2RcPNTjRsAa9uBGEHK4PoZmw5DugCdEQYuEJwV4qJw5QoYvHfGFsdKpc4bCsQSuhrMMyvC",
  "key22": "4Bh6dPL1CDjXjvaxU7TUbJVGGWMVuc6CYcNm2Vp2G4UP6YNZv2FyraXj91pTfiLeexv7zYxptteW1hh1tUJuGcPu",
  "key23": "oVPanosb4B2hUCzf84FhjmEBKBpLb4M1bVDZytwewRfcPYCgvjYo2EKcxroYrgkjh3VsK1i1g4Vev6KvCytt4BL",
  "key24": "2a1qZYUHkGmrRawFSQnsBNXcfizK9PnHRHuDaxVFrDuzUpzKbqZDgV2ngM8MYrL9JXMU5MGkMJpVNFVnfcqbY992",
  "key25": "5Yb2NtwH6mAA43Wvb5bQBy6ooKS2oinSzc5vK4xg9QXUbs5qkVhNwoXgh1uan5nYQ6GLBbbgmSDHocmhk1jzMA2X",
  "key26": "2n7kasDkPdmJPver8J24phQ9b8ardvbKTXf1gP2bPTJ4zfmaxWKk4aJaADs7TAoTbS2HyejyrDCbAvVopKiGtyes",
  "key27": "25Wo7j4Y3yhvbzJuvKK9SqTsCZkyie3MW64L5ybvAwdjeq2LtZnfCiHVEzYt2RkfRHhVvcNte9f9jZ6TMumBrwQZ",
  "key28": "12deMioJ1Ji7DoE45D8smCGJm8rPYZekKB8SCS44YZKcvs1Wi1cAeiRYvUid3zyWf7HYQ9Tcm3VYW4zEK62tSUx",
  "key29": "JSCHTuDW4gBK7B6pESYhyC26WT56cTABpk1b4U4b6VrRN5qb6hBut3cWpZUvHRmugCMK99WuqP5R2dJmqe74rtt",
  "key30": "5ebD81Wjvs8iRnH9WYvguGoSQbxAfjoKovubdNZ2wWJD3wTiKxkAJeyJyHutphGTpqDGCdq9DL7xLGGCGUPwPGzS",
  "key31": "2nWzQXhY2zVnVQr3vhH34q9qgv9bBsucc2TgDF8pMjFpRvL4y1rXTUuvxbAHtq9wbJzqRQjsk7KRPJnf5ni7ChKc",
  "key32": "2LbprNG3YPhLbxXMP5Rx6mJA9LBhFdfR2i1LTYnBNDXBqtWyMDwLRs9hhXXu5khioJCkfryNMcRNbX2JBRjxEBZQ",
  "key33": "5VmFdBzEBCkHYWrXNgHuus2Pg98FDMow1QCYA1WBQd5axNnodvWL5XRmsmwjkVRmVZ6rDHm232WBQij3mjgdNYn8",
  "key34": "owAvyQhqWPSDeTAVQsj4De17e6qN8KX5G9c4eowSQ7wenKXFGWoxGjw7CBJnPg8YBhvC6L3HkryJEp19ANVvLtS",
  "key35": "3NWYycPCVeGDRKJv81QSeQZ9dHooVpSQ7sxbDe9oXt55d7hADEuj7pgJw7atQuiqsAcdtxrNoe4THiqKYDKpD1YY",
  "key36": "4wPnnifEG9gYUfTqq2KH3WS7LznWwyx1tYb43j7MYTkZa656rqGvdJBvYkjDJNHpbiZ2jo6Wt8ZT6ZMfbKSWC2ra",
  "key37": "4YCxF56ZXrDDFpDDWsZY3vd5EFYAPdtbxqWsj63H2e6Hf2RXmdaZFZA9uABZwchkHiosUsyuSHRsHZW5tsd4BzGR",
  "key38": "uDuBidpt8KDMkXbzmkhjBxN4QdruH46gtFd9PCGCZCD9ree4wviBotY31LKQM8ggW97nHn7jRhdK15KkC7FkpoL",
  "key39": "5wsxWqx8dbNM1hvcmNz2HrzEwTQ7bCT6CHikeVZBzzr7Ne1pRMhUv76hmwckLCUN8YwEcULPpgWGJemSYScpZNPz",
  "key40": "2ErFxSF8aZjyAGhnp5bBTa2gUcQm1tdrgQavbmuWZMnhwKtcnGHHatNoAjg5yp8mUVM9MJRpQcci54cMSkhB5pFS"
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
