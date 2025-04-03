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
    "4WGXwopjGsjaZnMRuD7DFGeUaUSnki3iG6mTfoD8kRHhMhns9yzD4HPaaBUFkeg7wC2uqujnNBnHjzXBFWqGCQhk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sR9LPXVSBGD6t3sMP9wE9JEpSu5rDk93kYeKsTsLRUoJKFusvX3MZvJEpujnZXb8LAG3K8CdtVuphHdwpufeKQd",
  "key1": "2o8SR3GhAMFZiNFREFPBVnjNHYSgXKAbwEzGkhsdCkBxYJUYLbFAz92S17twxudxzrgH9cZUobtYfYZFFKX2e3An",
  "key2": "636oKdQ1Aa3Z4pLxWNLBpiN6uVmKpLteHhZdsN1BQzFtdZwYvRfgNWEVe5XB8Rhu8e3VZ2AnGu2Tx6M9RzNuJj4U",
  "key3": "4WYs8577A6XbTkZkoPDru92joeqYBVbzKSkAFXd91s6R6v9h91rijUhxkuGzZya5EJHawoy8WfapvH2mKERZdGD4",
  "key4": "4Xa33RbPEzjQkyxH9d6qVshbJzKAm1JzacrXhS82nxwwN8jHcnwFJTPT2BcdRaUKWZHPpYbWwZxM1MuQawb8gGvK",
  "key5": "5iyhmR5meg2rieET7td3s7Xm3HeEGH8A5imbmUt4geLKrwanBCF1cuYcaQCAoNnAid7hkUe3kfqZtWziTYbxsqhv",
  "key6": "3SaqaivvYdbeehyjaqW8ytPDqXWhw38E1UbmBeGLY9niqpeBdcuFwDiJsiwHJCez2sCYTSWmndFeNUSd22uq5qta",
  "key7": "3W8RZLyMg59eQf2CFYGHgLNyGYGRqbhZ2WJ7CcdVNmoDYcN7SnaQ2k6pvRB8P8HTJwkBiRk9KoGmuJs9LRrLAF5H",
  "key8": "5CFbkGLYJSZjdFPS63d7epTweZHUerwnMLUTQdmXtCukfEUTJWK5RmeU8s12U7nf24Vqvy6TvMeuFAa19RpQvssB",
  "key9": "29s23fNShtGBay2cP1ZMQqrQg5P9bQX7GVDY27FzKdkJoVR4kExkAx1Qs3H2iHQEnNUPqjtUhEaFsMr1bnu7WT3g",
  "key10": "3K5Jpv4QoXQt4VG5ntyuMK8TmeivUBsc1GKvpMhqJnYVcwfRnij7NxLcj3twM6PMVTQPmZgWDfkozXNJiXmFALin",
  "key11": "3S91RGLNgfchbCKv84xQS2CDdi363nsQVpsoxP4mNo2PB73wJjkBmWGau2PX2M1VQwpdhexNq6Ypq9LFfwuGyH3f",
  "key12": "4xmxqRPk8UCHYcdC8EjrmFh9rBK41eqDSP4UqpqttWVGjKD7JVuEd5fd57fGuM5zUWGTwDa5xtJGytEHfVfKwqQ1",
  "key13": "64khjwGSp4dcKGv7QRpkcc6yhAw7QGYsoFikcMmmEzMRB3JHVhRwE4Bbjav47hRQjzwMQYqxfz7JhvfLLAA9raAp",
  "key14": "MmgCNA1gzAtDRGJoarz9BUqigRMXCerwjcbPFSvmamXudG87godEFG67NWhn2Xe9HJaUKwWbWAFzi1BtsY8zWax",
  "key15": "Q8yv7fjkbNTdqJVpsvZgThCprWoCGb5gS3XPzxkLXZRSTjqq68cFsL3dz9wBYZcZcyWLG9Ry9L2guqNco8LY2ES",
  "key16": "cWSzTTX8XS8Ni3pGGTNpBYzoyAqmiRCqoQBG2xbhBP77hXoS7JkYjxXtksu2Zfeu9LCAzjAxT3QQgdgnnJdHZLS",
  "key17": "oLVxJgPWFKtt9pUCPbx9D23B7R2JWHS6v13CdEAMb9Hgd9f8i5YxDGsxdMqGs446rrYhGbm7GVAu6NrKyNL7yrV",
  "key18": "n3kEKZcdsPFSgQCWLjh4b8qkE2PN1N6iPPyhRmgyanSxd2UiotprLzHbjR5hPbaCe6cigtecpYMK8bagqy9Vr5k",
  "key19": "57iSrXGBbeZtyvXgaFASrvuT3ECUPwTs8V9WxFadt2bpEykaqqcctPoEgWDg4xZ7DqEEuxRpfQ96eKhXfmmpSFuC",
  "key20": "2VqxXyPJrjQHvLEocG6fN3B9eNDDzNyBJpUK9Ju3cGRwRaHQcGzSo6vrfBsGrGWJjG5rDyg2Uh1ZmPDJzvuRA5qy",
  "key21": "5WyT91AntXfsevuju6fVc4U6U4dGqDy8eEPZ9iwkaYQCKevPD7Qj4yDqiLrJoTNZSULYVbZ8t48wR2nSVTpUB2kk",
  "key22": "3s5S4gC5Za5N9sE6Zg8HpD22mQC6pRZLmffk5doM1GoLRamQ9ihessemYhrFzjze8hdLi8Xbsyo5ZVNr7JWemQQ4",
  "key23": "2UEeXiVKSiDbk6jY3ghuunth7YwVfBRhUoqn4twwXy4oadFCDn78321Fy2ZvH1CyRRjSYZfzCmnK19NWgBLi3G8Q",
  "key24": "66XjHcaAJ5aZrZrn2tQ318xvsS1o9tAP4LWxnRhsvStewm2wKnaHpPYSJeEDoe8VXuRg9MYcTYEwJWS2ENEtGrNQ",
  "key25": "5QQrLLicFyQTuVDgb9PKsn9H8VXgtDS7GuTRKEEr2ikaevV6Zxp6xJL2VeVabtDGofAHfjiJkJQiDY3WS9sDd3N1",
  "key26": "3VEWi3VBjidAsYYeZ8mze7r77KLjxfs72CQJDJpgEoytKae5a2yGodczSAHo33zquB2y7BNBhNr6wdwSxwyq9XkY",
  "key27": "56hkF3W3kP6u5MTEvFL2wDwUfkDATXZMmZ1wosG9N6gZhrohtZjBdmaarBhoSK9Eop1dyJqNSp1eexYp4CeuWzAw"
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
