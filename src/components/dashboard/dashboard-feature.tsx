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
    "4mdA21TLWi1MWjMDL14aMLGuSwrcWwNakT7mbwMrHFQQiohMJhm8D8tcH57EufotQWrKv6bShk2xNUFAQjX3K1nJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KFdbs19dKzDmpPxqSxUycgJh1hx3kmaZjWMRB4ANPiURbQbteiw3pLs5kpNwbRe2B5bXJgfMmbpgARuyXYDF4bJ",
  "key1": "3qaJADFpjBcSionKiZxPzYC5PdUfSWQ2q4Loa8jCzHjPJWHkQqYCb5e2Xsc8bjQSSpX9Zqm8CCLGMZwXtFL2tFez",
  "key2": "5HNvPWymFuq1wDxv7LqSoc3NUrCAbKBF9DRFimp7SMhYEY6PxZYdJYXPDvc6sZN4VaogUpFkUoZtFx5QX81jcQFe",
  "key3": "h2RCNzyLAcJv8mnmQNSXN8EiiDbdxihrtaX9Ya834P9oqtk9HgJnzU8q3uosjG9KmgkTLid5NC4BCNrqCyTq325",
  "key4": "ZwiQ1vpwUHJqTvguYXuw4xRFVRu2GKWvgi3dkeWFXD3kVszuskUYkxWtpjo7EFZyuTnNJPNF2f3vZk4wrbRa1Ua",
  "key5": "3CneysmqW1uci6QhtNpSzrboevR3tTgzbrBLBgcmk63ZC5yAMbdD8bmaQrcnVmvxj4aMyivVz9oQmtepBAPBPcc7",
  "key6": "3se2YoHMhyzjR6CESXrmNX9TVXXSYDWrA4otcyVwixdQX6TUndcevXgt4ZCjU4bH68ANNgqm79bsuX1MF8gZXxMA",
  "key7": "T75LbAzTCS7W8bvxHvpxKZWR6QUPTTK5swocudF25Me8xpWqUZjewoFJLrLjEmc3gCg3wQ6E6Zocdy446byqbAd",
  "key8": "5xbTBdrmNWpcJUtCRKnsidUmpCQjgQPbA4Vd8LeCvQCMwXN2PkY63drYqYRXTu2w4VUYqtVG6W3TJg5Ew7Jvcw4V",
  "key9": "2ojzAV7wLtz8cMaGnFbfZ3sHcCEC7gsjTsNPgur5GuNtBGSEH7e138s8uruGv8jQvmAZmbGr2zQMVHTUzYWi15Yc",
  "key10": "2xiXZ1yG54oFhdZc71jMkYcigvKt2aVYLczE9ixd72Q6D6P2dhkzjQW3QRemZtQdRnsYvvPan2ZZQQZvGbQNd6JR",
  "key11": "5QXpUsae1GyXhdvckcdLU8DdhQaX1NvEtjYxkssPUGwCLEpidrAYR4WTnczMqUurHv8YVxW26kvr8eYzPwiGfrWU",
  "key12": "4FAVhyATHThJYhvP5tsQuqCfTEYfKHJX75zgjwyWzbj4i2ZtLAbaazscGqdK4abQHHi5hFsfrgd9SMTa5XUVm5xG",
  "key13": "34kfnDMHKGvsogaY8vPPN5uoXymZTH5Whzm7ptnUB9za1CSPN2KMtC1gKpzY23iWD7dv1zh88jGfKMGAmC218mnB",
  "key14": "5GgkdPgjLmQHsh2jc1nN8voVn3F2D9ESa49CJB93e6MotZMLD6BmQ6ffPPCyZv1D19hse7xFmjHDEYt6P5W5oJ2Q",
  "key15": "4XpwSLPRUUvqc5k4SpHNrMyCYnZHf5f9SdAmn75pmmkx5hznsgh22LqBjaHy2n5Yf7vekvwTksMM1dZy2pPaokG2",
  "key16": "RTtLCYhYpteK7ChqGfv2FyraWnNSevLFngUdpDbtQ5tLJuzLz4kouCUirxaA2PSu4BYNcVkxxr6BgWvmJSDHRRC",
  "key17": "2hnvdVJXhSx1jL5U9UEhuGJUwzMnuqrDH2fMYLwRChh3ytkkVx6MtRGeCWo8Vhv2daQQqGVwJJgk4xnKaHWffYLE",
  "key18": "27qiK1o7dPbnn76tB9jg9ffc4S6XXN8fcpFicGbf8AFM6Gy2D1qgUncnNJbPfcvqt3JEiRPaxjrrSVk5zvh1Xr75",
  "key19": "4CcC1oSJLQsrjYA5w2vtf4xyKsV6rVJJ95RF3AFRNsm7a9EuC65dzMwgBr3jS84o3Y5hgQYyqqxmT4N2FXdfJpY8",
  "key20": "5eBQuSL9EronaiovMZCeBb8bEDV1Dmuj93Wy6fFfJpSJZBMjn8vBx7g9yZH4nwmL8Zky56d3C6Z4f7VZpYJxbcyN",
  "key21": "rswkpkeJe9uGKEM5ryZUsmaBuhYmNXec1VheqA5BNc29FoYyVux5gTPRiEd5GFsCPFTDthFJeKRYw4Wtvcxkw4v",
  "key22": "5cDkKWwe53JzykknHV3T11fo4rCUjaEbfQ1HZgHffmEd9z2KNgUf3T5SXfW2FDGsMGcZSk96WYhHPJ1a6meoPhY8",
  "key23": "qjEQSpbuqLuekAV87m71EoYrvgXbb6ZXtGmDWhpRm5thwNosrv2317DG821Lxw3QmUFufphETy3tQgByU9fveyM",
  "key24": "21yictfJBaz1HmrQDK2noLopx9zGpPsAXy5bSVrvFuYXFxKCjwjpAAtvqVL3qeywYyHV7uwHggsGsYpxya5BcnnW",
  "key25": "2Wq3pwgj9jidr5ftHJdZHmpfi7ixhXi1PcHzqwzB3AdvUQGnqYgAcU8RNCY6WqTmc6qsrpKi4ueQH6h2EsSBH7mn",
  "key26": "XZM3enmxPa4eq42yHMW8S9M5wPzhpWenb7edrSWcUdoRyAebXgUfdQ3pMjq9iftYmooCAe3UFtbQM8LZicW36Uq",
  "key27": "27N3sExXdpxeZhZBVkQVyD3sPuiUgyyCvUdS4yPzmJeGHuUEqfhJkxKL5JScFVzvhqJypc32e8ahuBziE51aLke6",
  "key28": "56waKofPdKe1b5mvB3eP6MLCiApHtuAR8bjjyzEnShVwUyHLD6jJuJg9pGGqBkN6SykJ4V6dsDDtz2PAizL6etfh",
  "key29": "37ipB3bUEWeKP2XgxT4epLnwQeRgzXvxTjL4uLhvmAHYrySjzZdomrWBqUzgiZvKDeshc6ocSUw9vkhD4mY6bg9A",
  "key30": "4QuSCnmNDFpnGXUABDn9NarHWnHyMe49SuuVo1nVTkrvVuPXnQbuQGF6CzYnu5hyfTsV89zMLNppHNsx15c58eCZ",
  "key31": "2DATR3uwda7gaMf43Wm9zdy3DAf9kDiC5CvWXmq3LEsbpZCQqcKT4t5AXsXKbJKhg6RXV4iHwAuU2jwiFedjiL18",
  "key32": "5YqNR5JbKP3dHRxkpXzeP8PKonUbUP5WRDmVTZUdcwdbEh8zzqqwWVn9qnZesxuGoRgKfTKTJqkvWgR7RfqbyRar"
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
