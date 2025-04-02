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
    "jETJ4eDUMfqx7yb3WvABVAZieVEwMvQpJwJQPuz2QJg91KpyAKU4Q5BCMxiioaWmdgcmoHBD5Mk3bRMYt3idGEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BPGA8UsC55MiyBQRUHdN4MK26YMtZXSL5MijxpCDB1Zcnde3ehc9YukkNk6kf4g3zqKhxT3Sr6k6F9Ericzg1UC",
  "key1": "8VPX6ZdNLBzWW9cZoS5NuHhUvQ9bH86dbLsGFyuE68Dw18XefqJQNhHHnTmKuTHxd9dUoD3K2pa5FnVAeWadF2W",
  "key2": "4Y7ryEbQXkjYv7itPxbGEBxujnRqJ9vW2cuFgz8m53xQp2S9ue2jbJCu4hCv7d3auidboEMSXYzyJBPx3AtSu8uy",
  "key3": "2ARR5Gb2ekgpE83q2jk4j8qGJDx9NmdeZijPkcXpc9nHXhBf626YoMc5YEYoM6ba768kD5XJ6jvovhWhQF1wSsUn",
  "key4": "T1J2ZaDyrZMeg3tnuWpMzV3BU41ZuCwttZJtSV8yYpFx9PQBnWYLozqsXHjHBPDPnMp4HLkb4owdKPu8v7jC9um",
  "key5": "3oBMfBCZrFPrZzHie3j1SQWk2fChvGBPasoPWavsLQyNwkcTRvH8UcGcLuLj2ojZtDchqtZkRi1UE8S9te7hF4S6",
  "key6": "5YPCejzTeM1Fy23tTgLxbUF3VcvrBE2cucNSucHZ65ArAKRpXorMYMWaP12SJmNMXcUgPnBaffPZmVdUiWuB482T",
  "key7": "58MC3C46C7r8acS2jJDzMosofYdbAjmAMxegyaHFJNjyubcPi6TCTCXJC5bnb9y968vFkdJDKuyhBEFJGcZwY6uT",
  "key8": "4yRrwmvpAtQEjiEQAY2Uz2tvbeszgtDoqjhHE17cyjCRSwvJ74YvVbJB7f6vF1g9RdZjwcSTPwgxdSrLidDrDsqo",
  "key9": "3CVdmCzvk7LsyHyZ8jX2SJXFr3PdbJtRxLz3yoUzGkUg8C5L5VCaWYdZsr8JaM7DCcyj4gVSBk7BDU4MLXRL6JG7",
  "key10": "ngnik38whr7sdpeevkpkmBWJiueKtv1E7dqciHnxpCU8hwio7uvAuqRay9yhzZ9LHSXQQgU4EL4X1V8djz5UL2b",
  "key11": "QEuUCjfE1bdk7CjB7id7CbiBYGpwyyTWHpbkNFxjBog2RMgCBh8QmpzoMm9PxK5HtFJhjoZBew9dgActu5sVZnx",
  "key12": "2Q9B9M7v5SCoDm3TrTKhdj1KG2HYarAh1JPhnprBbUFZUt1n84bcdvaB7f2EXpJEWtrWTRvmLvAXeDSas5wUiiK3",
  "key13": "3euzKuTtPTbnbz4Rv7zKCZmRywFbT2DwhvNVAMjzZzkd2LGkdhDrZ13UiphGms7SAUGWeMhfiBZkcAfXxerTby1N",
  "key14": "4SGS5VPe1dRcguHeL6rMAS2j6nrcuWMCGU4LXzG1p6URA47N8ZpLAbQwMeFEdTzsjHXyQeQ8R6ZtE1Wfy5ATHYFy",
  "key15": "2HRWgC1jR3CYgaC7a28rWkrWT9Sex5F5kinkXFFFZGnNynxFC1a59cBjTAJBr6EngaUknTrUnXDq3SKaY6tHbqCY",
  "key16": "639LWv5t62JvihvVPRnr4q7Xmb3cjJdkxSo7zqKudYrnRvdHAGicLuRg97cckAqBr7DMn6fm2EPcspvops3bM835",
  "key17": "4jdZ2F9zkjsRttaibK83pG3qsFFS5CjWdaLLuTuKzX38LWH8rpxuUtKMBfPvo6pMbTGzc96Dj3N5zAsZLMzvXWxP",
  "key18": "56tAcmdMKDts55J2L3KY4rKdDCR6c6d53HNyJMobX5Ha1sff5KFpmRNM48c4KREkSLTR3vXJKS6Kx7cu1v7uJBHL",
  "key19": "2cbx7rDAJJGjWugf381GkrEeQ6bftzvgFzSNcmiwjScQJkfdvBG2X4yG2notgNpMq1gff1oKp9KsxQgdEf7svxst",
  "key20": "5DWuuh3BQ4bR5GusPHyaM22qBf5CFAXSnb8wmFZDJodGvbfqTVGtQeZWSTndxfjJU3Ryq5wx55YzYcf6StEBzW2o",
  "key21": "3k8K34GoU6rC5rLoDV5HbUjkDSBoc8Ai9e36B5LYFLGtfUuKQTQYYfXCL8XjF6XRDABDWNfTdyY9QxZ6bMrvS8ZE",
  "key22": "3VGTSiNggEKE5kFXF2dQ7E3rGB4k7DZN73vDh5RQ9RRVrPDiqeRgQa4SVfS7KR3oya1XnXUNN9cn7JojGwxoZbx5",
  "key23": "5i7nAGyp3x5UHartrxu2nXWnNnriiSxiDwkrbqfJuZy4gTp3DyaLGxXxZGBNe9eZRagQiR95gVtWBujS8rUAAcbH",
  "key24": "4KwHhgc1jGZMdcCdmf82XQCfemtrPAVm9usRGVWRiPKXjYRhppfxQ9cyf8ydCeyND55EPobrb42ZLuJFygErdojS",
  "key25": "41PXK4YZkXzduzVuhoqH9nHkqwPg6Q38fLJ38qUp1fmeYsrmXeHZftjYXbmE9C9QUhRZ2uMo5qyiLWpx72ehzaMx",
  "key26": "5ppqsa6qoGgchTF9ZtjdxAduM6DmhtEDETFzWEZqo2gn5Hj8Vno7Whc1YsjevngjLfMuSr7scXd1iqA3t3Xs6C3Z",
  "key27": "FzsgXjA1ZKuCdD5y1yejHSqa9mGUKQKeVhy2XEM6mPG3nAyowY2CXmfwC9stBkuie1DmoUzxdQrKdsg1Z8ewuqF",
  "key28": "5NXeAPG9KHaMPJWBfhEVQw4eAnVmvsxJQ9Yraz3n7XTUyko3oWmP7XA7mNkSVhuJYK39qmH6aq9KoL8oWJYXZTWB",
  "key29": "2Ey9uVmTsrCEhQFjKi4v8kmw8AKTNyai2hJUv4XoNqfpZDSv6HujTbNU1Cs85p5uieiscL4PPRcEewPqvDr36kpB",
  "key30": "3mmMV6Nv7KiAXPvs2xf1mjanUBQrCvFPX3FA5pwsb5bnmEJNdBEZi9pjj5p4x9MVFycHBAyMwyH8MpH64qzUcbCt"
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
