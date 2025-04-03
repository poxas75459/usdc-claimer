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
    "iQEhb8jU4V6C2G1QgdkpDt76gD2zPZFLYU7ACqKrX3eGL2JvRqxgudN8xExrxY2CNhqhdm73emP3MeFbJiSdd8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YBRV8thfUwTDLAvZVBDnyPoPgnmmszv3UfhcAnqc3B8CRBGeuo5FBxeAsxhEzjQVtgrz9TR95Yp39svzuLGdbAL",
  "key1": "3kaR1CaT7pewVC28SLdXuUhjPhVwyrBmn9TZ2rD8nwEHGPm4icmTwe2mEcDyRsJ6WnHdT95zrWFmX8AgqeueXUPn",
  "key2": "2iErAk239iDborS4tvcWiSXeZZENxzcKvk4zStLsuGqpQVZxYWKYVpkzEiKhhSTh6PV2ery6RQdUcyAB5H9q9ZYT",
  "key3": "5nB3XCpTpNd1CV8V8h91UVRNXoc19u3Qco7bqfjjHNFmQdPruV99b9SavoBGSLbZpKWKc8BNTGMDSDYvsadfy9J4",
  "key4": "NkGPeXEmLtVt7L5njoqKf6LitLPWiu1wyD7gLGX64S1j29JJbQFUWsaRvaMdH4ESE2FNUajVukz1XLXn4SaBPAE",
  "key5": "3fCQsNBjVayszx7vaT1UMqWm2pyYUFNqycX1MnyHZwhvPQTfVto8oxbcvT1fwZAnBHnnA2Abu9gC3D8nB6eNu163",
  "key6": "gHHhjpKo6LffFJUA3ZKngaFfrEbvrVay2pJTLexyR6Fgr17ds8ZiTedaugrHpy9dXodCmAD9XaMvAM3yYtY7KvJ",
  "key7": "4b3tBdgUpzFxpmt7NGHXxg6UyexYvLq8MmfG4v7VPUjHVv1peYE9omH4FWHePwNt9kikzzBT57i7dYCJXDtCPyNC",
  "key8": "4bTTT5kVJny4ZM4YjfnFEAyReinqfydtbV8rAMZMM55Z64acFvAcsu7LL6kVdMwncJwXifinHW99FTafShmgYm2U",
  "key9": "t9iMZABMiQ7Vm9ag4xwbJb5ZjWykJzNj4RSX4R8FnLh4A15v8rDXqHz1wznzheftghYodqXg5nSKzcD6JJjQwks",
  "key10": "2oXpFKwEarwckj49G7WGD9KrK8AYFPpAxWitrcZAfzrAempaojPGPKWE5ZyFWoodJtrAq76yjUyvWUXwPqCMFuYa",
  "key11": "5bPNuZmni9nxeZFZYddteSLx3aijxKT6SFBcUNsnQvHBXrqS9sRGcHqfsRa96TiZM2rZi8FbPJoXXCRwGH1NWLXX",
  "key12": "3S537xycrJxyQrWzJYyFgu4HRND2x6ZSozq6bSiNqtLh9t1u4SmJ7wSrWSkdJ5tJaywaSxrHmV6Dgr1aGAQhpJ8E",
  "key13": "51ZpScNutwAwhV326tdrJwemRbxDuzbrkJz7KKwz27XcWpWkbpjt2tU3dCd5RHNGmnp42zQ1xA3BtT28w7nRDxLu",
  "key14": "3vNus44mjPb5PjXMMmi5J7vfhnnMLQSp4Hvmy7ck46dyJWxzg3aWRECSCLZjtSgwwrHeiGgGCZbHMyKiRYS1Hwo8",
  "key15": "3RCh35EQbskTw42iWj94VCxxZxRiyy4HmZ6T2yHDAhrDwJeTcHw9qY9AX7M8LDZdejsvFJ8H7D5gRN8QcMixetMj",
  "key16": "3chX5Hahb7xaq9wfjjRfiGFER8rEU7Qa6fSmeuv7h1pEXeN8k4gSYJpUK3HPjtUsmVvUJVtj6XQQJ1iP1uqykKa6",
  "key17": "4Fh71z9bHqjBrE8zqgvdfjnPhRi2Q853Vc57G96YTYbFvsCAY5cSviNv69uxUTAt2e5yMSLfRLVNtsQT95ZaEMKU",
  "key18": "55zU2H8yXbkcC32zcEbEVKnbzb5r92c2pmKNC1CogsXyWdNR859BJZ23Kzh1V3ipe1Ct14DHU6Jkw2ZhCstjRVKP",
  "key19": "53AJKL1gyxKmdRBDVzGVN2RmEU3sGA2BdeMBmX154qDdESpYQz3eapys5YJKxQ14Ts7SEV7jnWXxBEkqF7xfJPZB",
  "key20": "5QqTXbTsGVuh9xWefJDiUGCkwBsM1KH8Z1vdsxbAVLpAUKC6oMr9tqGjki2ZMauaXMoAUXzJyrg957a7SFtVT48m",
  "key21": "5sx24nsBUo3mmUkDfsB6pVf6p6Jcounfq4v2m7Fras54Ge2nx5ZRW55iHcwEvLV1XzBxSt5UwCpSAQtWBmwjxgJK",
  "key22": "4rBYdoe3xSsVJa5TVyj6REC2xXERm89wf947La3MSabPyvwHxjBaVmgoZwbWYXSk1Kp6D95mgGFsNweAtetZT44Y",
  "key23": "2GYKaqDEMLbRGhFqXTFhAmdM4stxZbbSqu8vG25w6mrNxAFqFXdbDjt173tLYFWYZoSuYX68LsCnsiERyAUoXtSa",
  "key24": "4LTUsSnWgkQPTcARrjKLRW1umBdJgY54bCnAfRRixhB21bhMFCsNvP4jftjQQfVHM2NzyAFhPJyrApVeS2GDEFiS",
  "key25": "3KmJR4EgprvYofHy7thYGEkJQrVxmFHUyd7m73ohPX5HBwAGMy1KFxYnfQuC5FngpZn4rtQs3sQUcqaFaVfwZqKh",
  "key26": "jA1r3h3zkxoepJayQ5diK91SgdM86ffTLyb589roJ6edfJmGZ1MUsWpH8NoxMZguzhELb6pW57yG6a1LE28HnMr",
  "key27": "vk17hVZFtkY5ERUhTgPdbrDBc1jsnCS3pNjypmCHNB5D6Y7GUyw69PGJMhv94miCbPUUNAsLWK6Jg19tkezNYaL",
  "key28": "1XSx27qC2i3XVNj3QiCD5AYuqKMN8YFQDK4k9ZhixCrDHbyToA59vPEfeB6rDeUi4ENkdtjDfvsTsYamWCfyaMx",
  "key29": "4xkG4pnemzHU7BZhnJeYTewJMdz9PdxtEj5bs9xUkRVhkVYwm6CRRRg2B1fzzwjfmgSVuw3oRBGeim6KYrmACmo5",
  "key30": "4P4dcUWhXWP8Gixr1WbMWeLLbvvzf7bZDL7b89Z77tbq8H98EBBf3hfPonStAP4qPAozFjFCWwgMyUkqtjmm111Y",
  "key31": "35jPKAqSLjyVm3wVFA8b4ghqU16n3iqUwxNtonx7ieLf8s4Fj8J8At1xk1Wm9BSj4PJZSaC67tjRDGVc4y6AYC5F",
  "key32": "49aKNhNEE47J4Pdw4CYZf8T5kGQM9wqrJsmDzgtMD9SYW2i5wv5SF1cvfueLgDFVCk5Aqe1KNQrk9jfqpBnCrabH",
  "key33": "2hySdemP7c29k6QGzKYyYxQzpgbi3KA4nDvECtvDmAwQfLpVKc1MDT5Uj37grK8jRX8VfVfjKohAxdakSqPEHC9T",
  "key34": "4gM2UnfSy9Mmnc6mYNgMVnwvEY5AphLZTBfzBPjB9hZtpzsQiyMCUP2Tuu3BdMfWkcg8f1p5ee51KGnkopfitS7o",
  "key35": "334meZPuUo2SvKLgxgGY7cREjWG7AtiXiyTFqtJxkm6i3DtkZR7UWvcBqRRmdsf1cGnwqYWpffF78QUv5pnuRDZ6",
  "key36": "5yaeZAuVSAqy2AcMEECJZyeYvUevN39Mvo8PAG3nFsMK8VXszN9YEGeQtCk5j8aAbuXudsSc8kB7Ng65YxyjnTYm"
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
