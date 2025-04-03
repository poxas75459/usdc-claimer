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
    "3FQ1tcDJXL3QKc7Dk9RBFG8WB3KLCn3eRfufWVPBjw9h26sEuqhYvJMXdVf7SyiYhEvA4TCh6xfHVGRbYaG4mLvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yAC7RXUHbLGtK7iiV1NmxpJzRmnoAvow8XFHXhpQDfZSWWzCUjoJwupC8YfXK7PvP4e4JSsBoPL6tgu7cCCUEPv",
  "key1": "38xfHZJKSQnkQ6WVhWJp61pbWXHgbRNLhSysNBftFz3JaGT5Ludn9NLSmFQTTv43VRnxHB9ijH9HD3NmqArgj2dF",
  "key2": "5Rz2CVjrbJ3QvB7a54V6d1DqUi4Hs22ZEypza5oRgFywof3kCw1yqQeBLqpr65bRRoP2Pc9crZsbcMMXqfjsVpaY",
  "key3": "ZoRhGvENDdxexessAQfprDdcqEFNVtR2swpUrgFNcfwoXtFkmGABYcCHapBqerHxwsovzKmKpmmbz2cdK9puxbB",
  "key4": "5odgnbXBbGQVrRoeep5WRKd48SCHoAe3ZWjbGsVzz71apWMdEbKmSKZjmiLVZE81KCKeHfTemL74kr4AWUr4tzq8",
  "key5": "5WeLwhWHyEUKdvEDmYdPWZHP8HTgw5wCbPPaBZfphyUmapeSBVsesBcnnK52KnxjE5umhZpbeRSshdCkCKuWcWob",
  "key6": "3F2MhvBpksuLWyAQExx2vxqd9c3gtTLe7FzU8UP3GvR8xq8hFfgiZHZ667cbWvfHmedHGZ6mAAamjNRR4VsqJRzs",
  "key7": "3daAc2EYzRfWgscEZz3hortptNLTC41WhoHi4i8nzU2VYsH1t61wZtnzQUpeTSzannNbJcgCoMzD3nwX4kNwKB2v",
  "key8": "3Dv7N69FP3gHJfwvexu1m1MYsTHgnBGJwGbWFmJomFVCHLxukHcvQWTuzS25oqNsjob9GmicWgfctxZM5sNi26xW",
  "key9": "3a4f1CfW9fAhNUwCuBRkGCZRhUCMW7aaFnfs6vTW2gi8ACoYY76aKPesBDkqs6T2JHqRuQ5S61U9d4cPv1bWxf35",
  "key10": "Z7GHtDFfzegpDrHm6NHqfPU51Z3SFph8Y9Y1KfJ7vqh5ZLQR8QsCdCJxJQZFLwqk9K9nFa3kAzg965x3dJNn2r2",
  "key11": "1o8KrfsNMaKpmA3w5dN1eW931F7F1d9RSfLwqGFxga83JUgyFTfRzQqFDJQURxia6kh7uw29xGZWwptBWtcDdzr",
  "key12": "3o6RzFQdGigeSyTVQhQdpe4v3DgZ5m6a8etQqTzanU5tFVrLP2nGt9xqt43FWD2grAkfN3h8mbwCWKvrZuxDaRrt",
  "key13": "3jrtFzijShHwWpLpq7vZMFSS34ZpDniThXz7qncoreaH5eSJNxH69JMBV1P25uhKRZq9P14dZj9Ptrw5LnpSd8a5",
  "key14": "51tHVHapvBnZiKVCQDnermse4VYe4YZdUYQWNrMrYXspGgsTHEEWppweoSwS9tN9dwKd19T2GVvHtVxNHTErnT2H",
  "key15": "8HVfxpTHYRVmQvMWXeuA9FYDHYkEdyJ75bezqHZfHezeMBsh1nuwLfDLjmMa1HkiF2HzwU7fo2Ag8FpUySXVSqE",
  "key16": "2fCYtYzoWHHkwm4atBJzw4k34V1EavtwHA5TgdUW9Xaa4gRmURVf4b4Pok5ZB4Umzov7PRem94McjR7ZFxZ6fUnC",
  "key17": "5PsU1CAShAVE9FuiMqps3h1fmcP1NM48A7Fe9SMRNxhWoi5yff9zwFzzbCrKg2qD8YDhGQAkSY2mWA92veQjy4K7",
  "key18": "5ExkViEFJPwu4iEsSjXsGVuikKRqjCpVPaorV4yARUFKkjP8Za5EdxKnc8u6Z3GGGjxyC238pNkW415ZsEQe7kB3",
  "key19": "2rWtUQ7pcX4tLGx34UNLgjNNovLGwFQ5t4Z697te26jbGviPnRtH1LHZG34QvhJgTizZhAs3NSQRf4VG3g8eejTX",
  "key20": "2TgGEQMRPtsZMwhicDNYzMRNwY1uHY1KYoXWS1m9xTPcJuszqGyKmE4EoVjfjhiT8dTrKHEBmzpDwhbnKhogLMVa",
  "key21": "2wWssBvBxP1F13hSV732Jg66XhgA6joAAZ2tQtUb8N6dE5KRgd6L6ndbCvsCGeouPyGvHRvLn26KxZJStCNnEzBo",
  "key22": "UawDR9Cyn1m39dPtj7p3TSafisoAYAixqXGQLShtPeQjVHNwwyJRrng27xhS3AxUff2pXXypC6exBWHKsvyRGU9",
  "key23": "5Pd962zozV9eJQBjPm8XinUHdh6PhNSvSzq7qkJq6mzckGk1FXavzncfAbes8sKswGVRQLRetEc4D655HyCc2PKS",
  "key24": "2e9hqXDPBgonmcUyokgiG6Hns8DPzqMoSqDjE82aa77VABQqVHXgcmjsGYGPcmKUH3fMa5oxAVjqCicVM9EfrpC7"
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
