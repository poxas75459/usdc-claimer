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
    "2fQr48RCaAFnkSbn8jzdwrbo6kmDwHSY3RSZGRKkS7fwQVKqWnhBSCunFzL4PpYiuoKRJJk3nzHgtKAViYB62GLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24LVdfip3ERo68v2AkYra7S8UDPSg4pLtSVJpiUf4tFQjr4cdmcwFGenBLqqzfWUap5baVkTg5WX7d7JdGK4KsfD",
  "key1": "3PDdK1duweAMUijdvcBFN7cZS5W4NDF88XfQ6uN4iZBR4Zabfr9xH8SBkGnxxykPwsu3MhSXB7Sfigo9XeG8PEk1",
  "key2": "4eaa4todsbd7KLgqkZErtLMVLDghZKvtNxbcn4Bcm4UaURgNVxjAAEHJQeFPrfb9XywepEd5AuXJfD9tucthB198",
  "key3": "2jZPNtCiYbq3FCRvLLqLDFmS7gnVnMTVyfkNJuLKWamnjkeNBm8JoPdPUJNrNbtUUew16WrzYj1enibY1ixJ112a",
  "key4": "MgDUBvmkz1uApsw6ccw5T9GWPdfzAyR2mYXrbL2NYhs4j1xwE2YCh2zbsMgW11yQxUcqZLM6mRaqS78Vd34vZwJ",
  "key5": "4PXdmncsB7jnH3YXLgwEtYZgGZhTWpLK9QXiut8oyPEotQHszV9mECDmQywZjFs3FWbBJbsxfGLwa79Ewx9qfzM8",
  "key6": "575sb34uvqeQQk5C66bmWmcW867vtCaYRetoAWVVnvA1Vk3LJupAP7UDD5LLcm6QM5YEWUp4XwqKwQPs3Bsi9M1f",
  "key7": "2E4QNBdo275gfqQhv8BHGnJCWDxnofvbPN5j8HezvtFdctkX593UNjHBjdqpfaiHLHEyBGvoJZSgBz9FNJ6sMRdE",
  "key8": "4FrYofy4u8SEuQAfyi6hJt7JEbeSJm6wnh2kpXmj6KKU68RbW3v681mKyH7DXwv63R4Jxc13r3mp3vWD5HyRTBbL",
  "key9": "4AXrx8EvLb8nWqgfTppQfgssRK5qfRdsavdCZWQpcVqZSUgtL7Y9mCYSCGmsW8rp9nxao3ztteJsQrycVfaiAr8P",
  "key10": "2HDWMt3tvQyQsm2Up5o8AphZ5JXhDB68npTcUyKTn9SYesUwtTDEidJuivzTzd96y6RH4jnfrbyRgQ5TZBrGG12b",
  "key11": "2ry3MYws8QFHcoRqLvWoswLGsrKohhBLMT7DDZcRWUREJYPvRrYVRpoiHij3iR3vHrHK2pNsV2icgnHfhehE1BkB",
  "key12": "wjRjiJdhA4QdE1hSngUAU4wF5BhijpYLdEkCFFGGkgJt6qXoYvstjfS6NTezb5Z8hcH6oeboS56EJTHPS15j1Xz",
  "key13": "2TU9Q135BFkESXJqL8zMdyLdoyHeFMe6zTuiKu2YjtWaUykce6BpkbT2mYLt3CvSqqHYWgkZLugf1qXaF4t2WUAW",
  "key14": "2vYvEHAJzpQJJnGdZw94EMGb57GADJrXh2yT2rKLovfyfGFNHCKq3yztDx2rYxHKKGgxyofo8pGsbeSvV3DrpAiT",
  "key15": "4HunqTfMeQKgd8KNgNozoz9Z889hzviAMnbWSGvys9t4Kou4AfdtQnq1jXyhgkpjULqiSyxmf458svTey5TCVww2",
  "key16": "4ub1WjNqvepaRxFSteqKdYvJUvpPHDqHfC9kaWv5WGmXuQiKAUPkowcz95wY1fsHtAft15Sfbsopi2UJPEAkS2hJ",
  "key17": "SpnSkpbbtu3sQsMpgeEUG6pYLN1z7Vp5yo6K4sfKGntvgq5saT5SrFQHDgGVc8ztMLp4Dmtu62WMVhpKQhJrdwU",
  "key18": "43S41kZVRPvcg9Sokst8cjpn12hbPXMzPpeRGyKhhdDcKEniTQqDM7D3PQmQ8jYaCijs5UmTfwxhFvwyxPrSwKuc",
  "key19": "TX2aPGMry1NaLhifbGWh6CMQT9GjVpxvqiMfzZp4r3CyM34KLQTSgPTfky6rZiDoQRFLdnX54riHnYnFPGocJ5t",
  "key20": "fyZtMDEGNW5oaDsnZCHLE5iuLTvbwqUDmHuWD5DzquWiu61fAwbjLrY16PEgAVu2DyLFbjC5PBctFLgh8a4Njer",
  "key21": "3z2G3XvR2HyK8ZoBTSXz1PkgLZULtGmCUnqdBddMq21SLMXgwHWpuCZoKLUdCoMz9wdMuAVDztM4ATU59YP78wKC",
  "key22": "fZ4U3Mme75ykYtFQZahi1UaehNgR2D7rGXouCCaVjrPLV3mXpiXpC7Noa5CaqiZoS8bDoo1iadXAqTReW9r45Zt",
  "key23": "3x7Y3oPeQgBFyaAj82hREkZoDYRmvyFBK6QSe9kpTonj4SDVTq6wSzemxzH7CDCALquvfniUvpMga2rwhuMLZ35f",
  "key24": "3thtXutdqJYrymj2kt5jJRFVctPJWHnSUGbxPQ4UUasTnBSdwYkRrJWqbtqc8ryx6BQ4H2JBCqyb2FBaSNMk3LUa",
  "key25": "4dRwqtwdMpFjHrQCuTW5ev94x3Vm78ae8zmm1SPWLj4cJ4b5VzNZuTYkJrJWFscjEuqAvJBu7ST6hBPhmpS4gnHq"
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
