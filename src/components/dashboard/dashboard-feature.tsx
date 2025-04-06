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
    "4vA4GQ76S38J1xHDDf9fBQ5PZuUpgrs4USbrcccMz6aU2YVybcpmbdsD11ehLrcpjw1ope3rWsJRTvBkysTMdCeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SnhkCfoGXdcrh4gQGkdGzmNpDkXPjxppASbiH38UEUY8pHqhTj3YP6dmXfXkhA6Xg3pdRGd3wYQftTpLTwdBStE",
  "key1": "SLxYtv4W5Eq8oANPKuDPuW9WR7F8Mc9TkAvzURLnxM4LDUgyLSYi1yQjc7kb9xTn7ZFUfoPWExKzZyBpB71rHik",
  "key2": "2CQgMJNaNvpheHbSHUjvF7J94pgEpvGqh6NcNtCqhiTWK76PEBK7VWy2QvG5XfVWUpGGcjKXyXXuum6FAaUQ9Yrh",
  "key3": "3fNj72NJEEZV162ov5m8ijkg3jwFbt9KowB4A9ZpqTcaktMGQK1JnfZCmjjbT3nJECFXLbgkZsFuGS8Qj5pHLi38",
  "key4": "3it9ogJwRU63GfetjaTmt38dUZBEsxRPxJr9Lchq9RJapw7tZ6oXxEDaAgZaQ3ANwDD4yojr9UVEAFqZDF4nTJcz",
  "key5": "5VmCyYeZfVhACUCg6aH3MgQYmvVh3BMcEURg4VaYqUM2E4Z6zsww2crHMt18zZKR9En4VFF4NePBX1PhNNNPgG3o",
  "key6": "3o73L3HeAWoy7sa2kLspWknWEeYuwHYmjWsW1RBJWfNXxQrTJoRynQEMRMBLhrf7GiViCR1oxjDBGKZvjjBdLd3T",
  "key7": "2kBpCf8SBntkuGQuNUDo4Bs77aFKRCQwjVS1nS9BuzgoTxNWH3k3pQn65qZy3FSUVmcMqiovyxRjVoBtmwrXYp1p",
  "key8": "3fyCaCuNaVEy8WiaMo7LdgzbRhZ8fPqaFeynYaUMMGjjectFGQK48uqd62CMGmWdzsmHuxZMT8w7JR55uTgsXNAq",
  "key9": "5tBq8tJLw6fwkaKSN97BctpexHFA851MqquZTYSTwnk1yfaweEsjvxHz9mGkrv2jWn6vmAXijbFn37A1tKbZtjxs",
  "key10": "4npJbu8RQgLrZEgnuYMBUJ9vA4gRay9NkzGem91YLHFqrYcSkcGTJzu9dGxTFjdZrwSGgHupsLne6HzBtxpG63wW",
  "key11": "VYeQfcnJ2nvzE17HYu5E2CvAJiniqW6GHNha3YxKW8S5fzvBqaSwwq9z4Fe37wnaB3YL3Qiq8X7UpbZsZsXR5Dq",
  "key12": "5ivtTpQahTDKympVPp5DscjXFNEG1Za3EaQodwGXbg7QyvRUSaimSm4cq9Bgrik11ZKqf95XyyCKbnUqHCRQL9EQ",
  "key13": "5H2rmyy2tXXSW2kBuamyGHiwqKFWBb2NWHHbE1p2Kemx9WbXxqNmU224RPjtnePFkteVY93TadTCv7nNiQR1SAQ5",
  "key14": "3ks6vxubwiaVW3fK6bNRmePM77CfkhahGiPw3idxsvwV2mSDef5w8n17gj8JoiJSgCbLDX9BzKsnmZdgmvxiyPq5",
  "key15": "2dtDZvk56MHf2VEe4QNd31xXZRj3tQQQcbmiAkq31qMjXy29pzVEmV7Uv14jv36jXZ5Nt1xasjHPTAzEQNen3sUK",
  "key16": "395egXcpCdtY3VHRUtL3f4zmmh6nLqCDGTTMiqzR5bb2UrqRGEDsa5eoqj8oaG3mDkv3fHyBCnFXDbyHhMNXk3CN",
  "key17": "2edZtFzj9VdcSgdX3cixG1GRmQQQ5EDxsQ6HfydKpJfLWibjNYpkMx56Nvrmv1Cz7SpYTFSFXNYqEernw1uuQD9V",
  "key18": "fT6bGGpxU2zvmSZiCLbRHKAFkPALqs9dARwZAwngceBCwdAaZpgEdZATb6LMpvzHDwJmkViScYvHx4JgH1gyS8Q",
  "key19": "4Cr7FySWK1fLd5wWy9bvfvqyFWv4fUkCFmx9wz8rHgbgUbzNdy2kDyoa7gQAF1wHZ8wTzAsrunr8NoH1B8LUJan5",
  "key20": "DutHhYg59Mg3apYXkrCYiEtnwc8hErTMdWP3TpG77FVYXiwQjv66ZWEdRgbVrH6aHHLt2mWRGAQJghbjYov4TJu",
  "key21": "3eY6LbdTjmG9sx8UcBkMZvAygWFvCAWD1p31wN9hn3U2uSZKcBxQNotMoEHbGZqLLrpgz3GioXDLNgmMwGR64UHm",
  "key22": "tSogQQyNXWcsTuQ5TmPYbVsRA4xMYRRWwghSdkqFYyfD3HKBv9a6AhA1xSibGLZSEdAGiJH2Q2BbefiqTUfDaue",
  "key23": "2CU815xMqtj9RvuLhybBiPhk3RA7qGdX4yNUQ5RaX3aTs2bpYx8YK9jxJkx6w5gLG7fKEvPC5f2FML9Wo7gRHqeu",
  "key24": "2TPCo4y1qU4KB12vteQ26hb1DroChpNVj1nPLFDYND7KHdfq59uLBoKJdLT5wbJef2BpbHeFPMQ5dQ7dDDpixHsV",
  "key25": "3n4WxM9Rz2Dm4CVxseSLC1kKuy8Mho773rKwUPrJhcfTeh9rrLpPa9oU59JH9s1Jx2szwvVQ3RiZ4LCzRFLSVWqp",
  "key26": "2mQMsij7HcZgyBzYXhswJq2crkZwUcCizX8YbvNYvALZVjYQFR1CdUKuxuLxsMaLp9JvACEdG3QTHzUFrC926vGj"
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
