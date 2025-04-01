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
    "3x22azg7u6UQ5VapLk4TbAP7KsJjdM23aFuNvGAFALTrFxaEayGPiUCGmBPJ8DqtcZfACopsP9y4AZMJMiGt1kMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F1FX2PYDAwSCmDwqZRYUrJAGJtiSdHBeNkybg98z6wxL6Sq5D23UhWMCsM3cbi1qhDmoAHhakRsQo57uS5LSzp2",
  "key1": "4b3gvoGkSwHY3wc7q438x5rExn7Sb5QFYWa9w8Ps3uNx5xnP5pRNYocYeqXyC4gkCmmxtMfVaWBzfJgpSwFqfmd8",
  "key2": "4EE8Q8w3LxQTJobT4yKH7U1LeAQVy2VHEVTCYqwB9TpZ4UEohKKPKXfxb7SYYc1wjSMQQxXSGexkCtbFFM6C3K9w",
  "key3": "6gBtK8bbjX4qM3j9dZrrZb7VNjtAQpb4mh3mSu3awQ5Cc85st5sTB8wAgJnuE4SYvHuKrPQm4HLfmuKB3KnyXHA",
  "key4": "3VdUzFsEANCr4VF7CSYrkFeD2M4jBrQRT98tzN7yL8UYHC61kDTL5uG3EhRMJqJzaYBDZE73Hoe82DWBbdmf4vcP",
  "key5": "3zTmqrFagVAYLJapuog6EWrpd23rmssWwfmpuXzRtuWCQZ1VGryX5FUTGJFJWT2aoTuWUGAmUDcWsTB14q9xn5jf",
  "key6": "46rwkYxpkq4rCuSL24b5Qe3xzTRSQsDVWCTKco5NbHvWrSFiTCEADJn6XJNYJcPq8BtkaP2nZ2FLTjhh1ujSr2D3",
  "key7": "2xVV9KQ4hMe9dEDB72SVSKpsn5akH2yDoKxPUGCTjDipCzjjuWWrb93oAtXknZiVom51VavH64ignwGYrrj7vyqZ",
  "key8": "5bLgQkabeVPAtuD3Wi35fu6yovBXod6BNuA6sxvHKXQFbMViYxt1dinDLAiVviecDDiq7TQBNqAeKAMWSCgrytxe",
  "key9": "zjjjivZCfPC7SBm2BSFv269opG6MiWFCgqXYB5NDdvpEajbN6qJ4uAs8U4PMynTb1RGBtUfrZV4za8fEKfMjY2H",
  "key10": "35J9sw98uzNcjeYT83trsamN8mHNNcyCCqCRWYMR5fEE27Zz4Qmb1QVQefqXHtoojkifLsrB491Fs4JApC7UMmZ3",
  "key11": "4qmXRAiBUx5bZFNkpXgSrC4JTFnG6tT1nbmRWsatE4VzPVz2go9DSpTJcDTqJYgryc6pA4Miq6NFUm5evWRMUM57",
  "key12": "Kxzw6azGqyKodvTtThpMYPHGAomyScHgbkX67Ftz1izNBTnzu3VdfrxpMjGMaMAkPz1em3UjBEUx13PtGBNNqrG",
  "key13": "48BqmtqSxxgzEZwudn6poKR98iv2x3bWxnomRZrELVqx32vyZK8CZmLVQDv5vZnPPAuKZEN1sF5sXwDWMN37gB9m",
  "key14": "54ETboxfFxx95j6rWJL5gGKV9Kr447FZsugkCW5CSyccVxsBCcQ99K5v7EfhCQeTUS7cwF9JXchs1FwsBLDYuRLs",
  "key15": "57nX2ub8yt23pi9nuyd8AADXTcDh4fYsRz5tRcaFJKPrBNsaF9GozFB2FmQnc93yRjVvsds24CGguHPZLPbsEqhd",
  "key16": "4QqbYDFmhbzghXe31QBkgVjcDAGHPsEWLiHAAUV9y1Lobyjv73T5QZvxExJUMDKoi5VRoD5J4U29WoiUjRYJBMfH",
  "key17": "mm3vqKjzjV9K5PvsLJCiv2j5YaQpNjEYFoZtrBsVHGeErDdRHa5QaGw9p8DSNqDVQcJdVU6CwHhAY6JinrDGiH2",
  "key18": "5M59AER7BxznYWzCmKfXttizZGHGqKp4M49kc67rTbZGnK8BkEs45t21viHYDoDXkuBh1TH4mBiyMNp9f5PiNrFy",
  "key19": "5Ggx6X1JEx3qKucd1Uwnir2DHK869M8uihXqtdKfx1XpNcCnFnxC5YjUb3StdEX7BAkFpfRdFF9DxptEYG3xFGMo",
  "key20": "3FBQNCdVm9GL8wb4c6EWktha6NXaHf6AQNxBVuojKfRpFt6FqcHBEueXAaLtzaJu8EQX2DT3hmdjex4dVvBbSwmP",
  "key21": "3MhqZwXtMTS2U4RQDUDvmqFVQgYkM8dAT13LX5DGeND1N6SJdBU9rsCtMyJTETbuN8K4XfFn8J5HC8zBHpXgJzPk",
  "key22": "xXj27uTKnKPJjyJFiYLnbNtC9GHPtgCLkKUgojU46HmKxF4xC28vExtKSh6ArzyEfwHFk8AbgqVfnY91oDwu8e5",
  "key23": "9MnLQj9KKBoefwKvYCPZa55FEqy9GrsYzkVNvNDRNL37cYLEcRCyrctTQW43sKXGerNyCyHC3VBhvSX2TDVH5CD",
  "key24": "RV7E4pKW4f48FWHaXPeQEgoWkQTrjyFdH2XWrKvkMaRMbhSr8MMvEpMgk6SgfdfzTmLZdvEXVAcqpNsrsERS94w",
  "key25": "EEvA1C9M221Ck2dJiHLf3jVZUPPumFd54gtQuKgN49FMWPf8jPzs4wGmoat9RFAyFaBNJf9FrKdUPpd7dzDMnh7",
  "key26": "3wG4YUdk7qGRyTo5jwCinJ8vgNnmxabY4VgdnD43gcVJKyq9r4Q9H9CUvbbRmT3444hmRRMrFX8htgDjGrfPvS38",
  "key27": "5sBEMiT62rc9fW6Cxu5Q4473bBXzZeEYc6AN6P8fpvqkSEU3z6iw9d7jn7HMXRhb19vvDaFN4zZBmY6YaGLQ1e1g",
  "key28": "2BVtaJoEoDLebgysvXGc1399c9ePN1bhUtDT3wh21Xbr9vnaJb7Az961wCDCPEMxBA8F6zq8VWQpozq2Xq87TJjX",
  "key29": "64fkgRcA6qDmgwRoWD5sWQXj7HUqgHoKW1DVBA2JdLrNr6xcf1Ec7fixfXvUDFiHZTK8LqBbdULucPc9xUWnFVLY",
  "key30": "3Fj8NWteTzXHAfZExZGK77EuYQs64xxwnrFHLsmCBBAwSUF2nmGxsc95k26ijNDeX2hhfmwERK3ajZnhKm3raMgM",
  "key31": "jRfKVTHwufiLCSnaSEHjXEj7fjoZ8q61Axtvg7hYbmMiqtJ3xwGVkgY3hZm7qhqUY6A6DTinXXhXNsrq9yWyds3",
  "key32": "4TvKwKisruaKvKErrHa491vURK94LWYuKaMnPA8vZiq7a38s7cikrnseFri2KA4AMC1LTike3JffZzojBW7XCMYF"
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
