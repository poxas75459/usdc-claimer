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
    "4VQJugRah7t85wg2jxBMFEVaFU2WmWqqreaUKS34bL3UeLg4WjUs851AS36LVom4JDknRWtGuM66YMxLupj4UEZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SntS7YwHvWSPU1eUH3c2CiKsuBXfLayuA26ewe8c8SGHnLFTAEGswpe4vmwSqvZhGbFQfuoaEUvEwq4WAShgcmN",
  "key1": "4rm9LsygvdJKoWZD122dpEV7KLpjEysD1tDPkyoq5w5GfgimcUNVVnRGxAUtHxR1xzaqoZb5bvbbNoS93afdQL44",
  "key2": "4ozDtvmT6mVwvAU555kGsbzPRZgdeEyJimrimFYTpqH2Q1nf4FGriqdacfkxxxyPQpwKvL51d2XuhyBqcURCCCTx",
  "key3": "4VjYr1H3EHKJrt89J6BAeRavmmYnrBoX4YAe9vYq97HNwTVRaFAhkJvUaWZP3YiDnVYYNDJtP4gGV6NQCt1RduTc",
  "key4": "329ztnxBwEWUUhbKPks4DMfdX3xx8AC8R2GYBo7vbc41a4BPwqCmPNbYxUb8cGjC3PfApyCDne13KcbagYFTxyai",
  "key5": "4UWKhynpV1ntou3DFg3KgRLZQ46yonCJXFRSLrJrovL2xZhJcNPyZftoWqijW4tdqVPRBbydmshhpVMxLhtXesJT",
  "key6": "48Ma1TTnVs6KVU9rp7UrHUPT9imgSKb1S897uJHyH4p6yqbixCKWFGpPygKHi4Qnfq7TKJRyPHbjNzdHBReFc2hC",
  "key7": "4om3EgsoTjLtWUuVbSwRE9GFNnTGuTfuFG2C4Fua3Eo2xLPD3vJfUkxeKDkre1Ttei8R3Fp2SZNAjXswG9tXUFUN",
  "key8": "2p1U6e2THHHYwhwqKuVyH6qkRbdx1Kh9jyUk2NXDWoRfvkJzmC96UZ1mV8nY3g9cbUExPR42Y9rhGWT31fdYnAvK",
  "key9": "3Rx1JEZQdtNuwggBvhkanfNZeFS9nJCgc7kVuo8YtJEHnT8hQ3FNyh9Uo1QhcR8WNWnoRW1Rft8bD1qeNPCUY8ba",
  "key10": "2ZRaGuV3hES9CwPq2Fys9z7f9pk2JRZV3iUBk9Q5mxVe78sW8HgVPgf69TTXvKnBQn6aPJD8KwMdJ1WzuHXqx99N",
  "key11": "Vyboe2qSu9Et8GAz41KR5jx4TQgn4tjTfuNRvPM9ee2mZ6DcU3tFc5Qybizke5d9hX2hJGPGTPiP7i1kwvCbz6N",
  "key12": "5xhbesZdt22CGVasiHR5MWQZMi9yj9AZ3YCFwjFDtrmb7zPK8BxY8E9EqL7ZitPQ9d34Qt33Z9ve1HCnLFePxuYb",
  "key13": "38JrWNQtUi8uUY4rwVUWswVAnJwpzMypZLk7unAzQezPE6aWxhxEgPbBHMu1RyaMdcawC1icJTuCmQEaeD5ussec",
  "key14": "5AxvCJQ4XQD6tXPwmTKuWsRsXFRgP8vFV7rcaeB88VbE3Dg4LH5tWUaiR82xTc4xX9XEgKR5udyoChYRRBfLjFiT",
  "key15": "5DyJ3zgP9qgX6GvbUwqPwFo92eChABtcwANF8mPNXtMy1XDRupkSfyRfKGKFYoRuTaZV6tPk6zYhyBvBxRsB2TbG",
  "key16": "5wnf1fy2sVdQnrrbw9cBYqDCUrFKU2vRuSTtyg6FARaEAwmJAA7g4A4JVBpnJgkSVErB3JLAAWMHXwgSU527LTed",
  "key17": "1Ht5aS1qrEQkptvD2nGPeR6EMPtEXGndU7NqNUQg86zF4SE9Wjb6spy7skKXHZrkxqWAjJEVf4cZqWiYn1uBpyr",
  "key18": "yaBps4PzmgM5GxmPoZK4yHNU5rH6QN8w15Nx3JWWgvUeu6vkZtC6n1hnVxnYjmYohARdkzt9FyDYYRW5Wbj93mu",
  "key19": "65wMgihpLuzgM1kNPfDDLpuD4ma1wEHYx2Vhaxa3Edy1fti4Eeh2b9JcAvxqQ4qasrwqAPeqADwJAtvv5R6GZPdp",
  "key20": "5V5SVvuB7FdCNEQRPbnyXC12BHGb4YGTZf2BfNvkoGRKpkCyX5e8Y9PYcnCRHxBWC2XSBLBC1cP8QPPGrv6vm1cv",
  "key21": "51W94W5J79tW2qnhptqusfuHZGKuG1wRXBC48LKxbzGVMiXiYQzQMpWwpAPo1dJDzW5mx6CjunXvBL5sVoUZP2Mj",
  "key22": "5NttmpRywKeZPnNQpaMxkj5fHXGH71GeiZGHV93kLvhHBqVKzKWZV1Z3Qoz4JAFEVKwLXyKEjiwSpnKLAYN1sZMh",
  "key23": "5m6PErJEbqU1op5Heiuv8unzFHdxey7pR8rHWVHXyaRsnVAAsdAbtCpotUaeYDv3ggSCeLYabGogVkxnSXpwfnVE",
  "key24": "28yi1fAZphpY6TcUknjPHNYWDAoouQedPBBPvAiyufswEJdjXKLCq4wKHhYVkaxtf5ocmESXpckX3zwZjNRbzeQC",
  "key25": "GcjZMt5CHp7uW6ESavEZLLNuWALS1hPFuAbvfpgeTEFjaDhmhhdTnNwXGitA87SW8n14eabqJh8gTygEcUgbvKY",
  "key26": "fb1v1fA3qxDMiCtLz6cYF3JkWhVMqi1K5yrNSbdkLqv9fopn73RsyRNKj49NUnKoyeYTueg8DCxvWx7gZ91q3cR",
  "key27": "55kxkLzdLLHBGs3zCkyKwG7EsTCgYJGkZo9tvjopsvnBQnGaX2qijkgAGHTL7qjAxf5zY3Jfep2TtEVyLe5P8sGq",
  "key28": "2PaRfHYGTZcQrL4qBSqjxBo6Vncqs8K1Bhei42YTkT3Y9TVDFM2GHDuys1BEepufox3ax2FfrAuDmJKo15cmLd6S",
  "key29": "5PV6e8CmPedz2xv24QhEbXtyP1vX7xYjjWUhpuD6uJTCAGsJCM8F46uA4HbTHFQ5gtXnMmSZdjpLzX4hT3hVKcx2",
  "key30": "5g1FboPSRP6ok7oa64U1zSEZNoVCn7A9B4r7gaWap9YejAGuv9gM3BRKPzQ1Yi82Lta6ktBrh2zMvCFnujAuGQvL",
  "key31": "DQrF5Gkicvg6G9WZVKC82Bch85Xpp8r9pRa93g3rm6FGRdowKPwU9NTtRr7nmB7ZS9GzR58gzdHpohmoBcMzCJr",
  "key32": "5oEHsDD4b1mnxN26VtanQiCcPaVLQBKn1QQb14SvUxX3u9QMMT2QgibAjvch2fR3dRAeXsrJkFHKWCoDWEWL98GQ",
  "key33": "4th5rVeSSAD6kJ46FeuwJxgJMP8WTRmQe5b6XDgrAFfz2BAZy8x3jMs5x2XnQ2TG72mnMxqbYWwJaAp7gZwXVYTz",
  "key34": "4p23nuRVSHReMZWftfFGmxQRDPHzj5CS3Ta4QUq7yb2uMnTuq4RyzjL6BWYBc3p8qWbTDqELw8BT6RYJKQpfqy7h",
  "key35": "xDnig7owjksq7QxE28dD5BTWYNxVthNBMFG9QxiSrg9BCKdcsEVMoVjpCJdD3VryDFcQpYtzaCVrP3CQZF5ASBh",
  "key36": "2Dv7x1TMti2yEVmV5VCnEvmZ9XC5nWuQx17wZXf5GdM5kGXq29As4BWD9g6wmk2QDdMhaU1abLrh7sMvkRoU5xAH",
  "key37": "4yzHvRHaMdqXEC6fta5v7usjgejj7jboF4a6CU8bLWnnsRjuofwhDY5vRzcQTgJiMU8JPNyp3a4ZWK7dsABsRMWs",
  "key38": "5G2WfVDThkEUjEcwEcQq6uyL5svDytzNUkCJi5HoL92o5nAGspDPD61VYpE2uaaauJs71q3m1TzF11zF9r4b2XJV",
  "key39": "2qrQhffDBfFzfQKTVtC8Ryp29iXL8MsfymLrt28Zxnj9KeyVQGKiiQxvN9VgNGij9Jf1QYUUzQUH2NWdqNCpw234",
  "key40": "3nTsuiBgBFgRnXATqPvPUYhqKzG2W1wM6mzWPuRAVGqn3rAKt1RXV5Rbp17XXhpvCBwes4qneNX24ij9VpQAprWM",
  "key41": "ngGcZzafe64TnjZxALHWugLcPhktTNC6BooRZYs58N7RL83kyV65gtFr6nzUuto7UBj3FqEhwnDuMpuM1JgCUdt",
  "key42": "3qTEz7u8jqVSHD9xFLDtmWfkrJg5yqhrc4RpE7dmMDA9CtLhuqFAu5D5gFDeavZmVymCbeo1a42HKhFv14m7uCeB",
  "key43": "2KwYYWezUp3YYgjE9X6NhNKAQjibVd9yiGYSz5H5tsL9srhuHmcKMksTsPnjx6WZYZhsd1Y9RrxqT9xW3Zsr4kNG"
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
