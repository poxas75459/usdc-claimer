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
    "2nZpJWvDB5q1qX4aVbPdhWPF3nFVvws1ves652Rfb4iKrjvatRwdRwKiWMEYeNuSf7mTnTdHwXgPRPrWvZtcYBtp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eb1LxnatqWTUjy2WUAnRk2h7KmAHsuivqGEjetVyvhrH1NwEkDWz4t6FbRyFidssFPJVYL3uHEU8rZxJqMvi4Eg",
  "key1": "3JT78F1GT3FQiGg45VRadyq1s8LyZs18MVdaJDQrT8RThoHsyfXJuZj8r1MTWwYLHMYssYjE7ynbDATyjuuWrXDk",
  "key2": "3RcFjvJaomqwoh36UUL7JZAb5h7jXwxiU9wsiWM6915yMPh5PBFNK5mSJVofF4rL3rYzFSHG1f5ECiUvohRWwtuB",
  "key3": "67wEwm1fWAJNNjA9HCkCbwjx6QM2XaLUSXSMskxVKVEAkZgVeZoxeiutqA2uvCUNRtWkky9zZ5tVLxXxvZef1Xz",
  "key4": "4DFz6beg3XqxhKpFusky4pVkMS97ziCWrgrDepFys1hDtSd2DL2VigeNuMJwthEvMscz4UxwKPdyRtcX6wXSUcNC",
  "key5": "5KyuhbCqgCfKZcEzNcoLiVpL5BpfSfBK1wmY2RthqYjaYfsux1EEXZFURwUh6pVry3s3genhPnEUNovMRnKmatbi",
  "key6": "3VhQCN648dUecvw1Mtx3yNE5cHakP2kDuU4Hx6MEhQLteQrvm61rXiUrA1D1rR7PhyJhoo3GoNnRSZJuso1qi9WV",
  "key7": "zWf97roVPKqQEixtyshYBF6QWY458AyDuphftWnwQg3Q69GUq1iMF6cgKxdK6sAKvyBqf228AXMChS6ybr25jEt",
  "key8": "5w1LUMnmVtGhERiMCMy3Ngj8qhU4EfqGmS9S8w4WiAmF5HDjDa5GV6k62XGX7EQNYkhkK9hZdXj4HK6RozvC3FtP",
  "key9": "3N3Lf4YgRzpZR3i4nhCoViBzJngbQhPT97TSBXzK7XUmcu42iX8oQDBu7g8LPecrBRtojMGRdhARY62SoYQft9Cg",
  "key10": "kig8KSxCtPV4TcTgRVb7711vkio5ysVshapEC4fcpzMBNUH89RUDqjcHUxc27WH5ThkziuSJMEM5V5GbsKz7vTD",
  "key11": "zscQJuhmadBBk8zw6aidumgLAenV9QGjA2L7B5yWVydLmpaFwTVtpqExLDKg9SGPyXDe8kSGPEuAKycw8BeVhct",
  "key12": "2XbwZtGKhQupRqcvg8n2BiC2261fBqtKd4XkiAeUN9fYL7LoCmwPyFoMA9dY8TUNYFZTFYen7o3JDKLnj7vnKNRq",
  "key13": "289ckVQcvCcNeaRPQFwyUCE1dQEo782D57Nn1pAZb6iyAzHkyxbHGRZpKYdVkWf2F4ZJBtXg6TMye7xVhvi7C78g",
  "key14": "4yCGLc6xZYGHLdP13Feni3ZrNLRCE1ktXmdry5uCtqNoL3JEsbhrooNkz7jStwd9CUd6kuo7SRuMaNQAsuxm7Biu",
  "key15": "TecNQ8KVCA7nf73PWVD6a6mwnrrsk3jvDxvhLKM2zvjBfAgNq2q7wXyx9VzWhox7hB8Cjt2c4iSgJV4AWJpD47R",
  "key16": "62Zf5PSmmFqFu3HRMKSsKKc9Lzgsfy3vbjFeef3WLew6WbRxwpY5dMLm2A5xdKFUEuKda6DWWWf9Vzxq96GtGBzf",
  "key17": "5xszJ3bSh6rUQxXFZLCaKpkXMmN4JebwNXNZFfiW54FsR9FmEKHgAjDuBEz595ajPHYSj2sLCuVkQvAy65Mk21se",
  "key18": "3Fe4sTyfoRHv1dw2ntLdpqq6EVexj6avBiFCmEpzEz4xRvP71CeAa7hijfUJyW73oWRr9AqTEG6CSP6AV3R2tgSe",
  "key19": "2pZ1vi7vayTkNXXND2ArcYx1zeQDnsm6RgGKBQL24tDwX7PmnUe31utBVSU4GoUZq1kfhQt3DpPRyMCpGpjYYyWr",
  "key20": "4sTwj97em46X6QL3QCGqDFqPAMhGjDwEPN9jmEC5bfCpezqWPfZ6L6CDMuCcwVP9GSoyFrA2ZbBvC49NXJuGFAJ6",
  "key21": "3YVw4uQX4YwKNoAW8xZoBJjg82twuVxbdiHCVxx9yfapWPF7moSi7cuJd7C5H5rmNatvupLpDfxudY9hnEpRryv6",
  "key22": "3t2EkRi2NamER84cUCcVebfxLEKiTWvDJrYbGoBWEwaUkhewWpDSoaM5xHzvd9vnRyNyyuWEG2kW4L4kexsSu7tz",
  "key23": "2e1ShEyMUP4foAKZgKpUAUc9NgV25BUuDQsMrA8dzBrrtmhTk5Z7KTXPQpzWqyM5gPExgtJwcu4BYV7rPGDEGEVV",
  "key24": "3woHeeAVfyN3b6YUoFjPMds3mynEiGHdqCFdm4tkSEyH6AMR3paEoKjCE3Y3QKwPVe4dJBNLeN7buoYGr3jcAhmB",
  "key25": "84AyzyCMAs5CJq7NMUrTvyjs1gzX7PbsbVdiiDSwmYiqMR2nU9GPH3tVydDHDZwkWHVTmDyhN1tuStx6NShRY5K",
  "key26": "3FuGPhp3fex4AZAivhSyJQDRztDz3mftaX2Lu8GfFTSBQpAj31s4pHFznXm7PDYkQSNJaiMr8hLWZM2EBARDn9UJ"
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
