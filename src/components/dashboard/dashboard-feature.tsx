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
    "RtnHsFQtPrJkQKfoGfmU5WjAsD4fNAY5W5vw3Vf3qcJr4Ty6jWxRZ8TVerkPRofK7tLiYH9EYwiYjvpQfrj6mVT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48cu5gH7CREUQcN9e7gqrzPipFXDktpcszVNZXkUugdc6zWCjzbUCSZoqxRedmEFEU8DRKTfYNiVgdzfZ43Mk3pg",
  "key1": "62PS3uN2TDXiCL6jrMqpLN2VLW5e4HMCPSSzyQEijGNDGfG1A7bpbqzTBzxtq3rMKeepRxKMJxdCGiaMofU9cvgm",
  "key2": "4rmvdZfbQEH1KiksVrFRcvNohMvCYdU51t3SH8jJNuJc28WBitNTDHD21Y3pTGL7HBtVc3GH3B4dYRomeMzSE42r",
  "key3": "5AeRj3MYtDd5zhVM5asNLQGKnuPPPjLh4kfXNFp9sJSZwg5CBwnvRQrx42jpYskDJG9oWschySvksMrZ5BGbHC7P",
  "key4": "3e9SAH7sUzZH7BayKveJ14jPsL9ozNFG9ea4K2mxXErCfra2XRxXcFntgQ22wRp1VQG86fFZGvtfHeYJEbkvVzT2",
  "key5": "pCUxSwgrsG3TQ3EZywrFaB6jkK4PdP7SDK1ZWmhWZH43voDLhV3TsJCHPt3rEUkk6Eukjn6a8WTGKVuPF7citTk",
  "key6": "53UVLqUkE4DKHLB6FoLvBfNAKzUobzwp9Jz1PfkTKkTkfsWWeEbyC6Vhbm6snPcKB7nsD3XN9B2XgSKf3P99aJEc",
  "key7": "2351HGxCuRxi89NwH8qo1ZvBd3AjtTFhfAx6CKE7tzTsf24oXHcTipepebUQ3Kz95eWDKMs6keC1XFL3Q7UJVS2C",
  "key8": "2UQN15xuz31LZrKx8PydejnxnGSkRsj6HsQW179H5u8NFk5xvGGo6gs696DT1YSoZsTJddogTbis7avFNNLXqR3L",
  "key9": "3WkYTb4VKAa6wzsd7hhFwaozDcZy2qX9QGPhomCAUsAUxFKCharAbD3U5SDc2iiscwvBmmfw7pPmDWkLcdxTkW77",
  "key10": "xNr7Uioa3ZkFLbV7GkaWxR3TmDLTUfPXk3C6YeyZE7CqwmVXpsvfDcbmnWCRurQHsRgFdHv4o3ZARx7t1dYWWYW",
  "key11": "4a2diU7UmogoRBfqRFfmQvz2ncJAuvA569Z9NaQXPrQSWFr8ouko2eSKjjVUHUCNvdWNGeMfgvDURy95yvyLSjm7",
  "key12": "2Azqsm9SAcBvFXHXaUiyC295ZoDXfuwsUPrgPJduCr8BKndYRoc1PirNwB2v7ZaZkDmgABJenpcVykSjPg72Aw2q",
  "key13": "kdmkhSKE4s8ceniBemzq2DTEUUHsG2Q2L2Y3YEP4xt3W33w4nD5BrKx8rjNGZfANdrhd2qgCqvRkSSaMxT5v2YV",
  "key14": "5y4m8rvfiLRQNZZJkVrwEK8ThKGW6jkMeLRsVetoTEK7u3JNmYD7HHX75kxXziWnuSJNoseguGmVRbrKEWb3hve3",
  "key15": "5EZVEZQXr9gaipZJgi5GTUXRZVdNCfKxGAoQbjbMDH818WaV35ss7SjzFBVPo4eiwG6LxYryZDb6AidjxJUSLiB7",
  "key16": "1STfAV4AeF4arfKbFKRwbMdoDcnJSHMfJAgNscNZdW1n6qVvWXjicm1ZmrhjUYbge8XVT8QihLg7gukMccViCti",
  "key17": "2Ck87CCEkAVyoQG8oWy4kyhv8ZS1729dUFGe6hMbyQCVZ7hy1PUs1vDDU7N9azBXFBoZZzDwFkEaQN99XRYQ9gZi",
  "key18": "3CRoC2Z3sssfquEn6Z4yAP4cgFpxGdD3M8xDVzfC7ysmLjuhLkyW1KobkUn94K9JJHJYqeYStFmp6fwdXp4psbz2",
  "key19": "3aiUNQgMcJcb8VjX4oiaZHZaXojcvjrVdw8dujaoHBpu1M973zzvqvRwBQ3De2Au5qforn8suFXGLiuv9bbLKSPt",
  "key20": "4XzBLk4mfdp66Uinf22Qj962ezfaVk6ebf9h1M6r17E3drug43hvHUPymyp2az1mKK8gPkUGEYLe1CvN3ReTk4Fv",
  "key21": "3D9MnHNFwrT4z3bfd8W67VKqSd9rPsc2iuu3hEswjFGisRLidGkXB3t9YSZDjovhvNYnmkRG3y4gqAaaWbm8E2hw",
  "key22": "TR3sQUBp5mtFfs6V9VW6DfMzsqPg4M13Fsz3yvCnLtYiw95Fb7EBgTtoCGMJUHfw3UCriHfQeAUu8PF3BgEzHQY",
  "key23": "QkmujP2XefH7nncD2RTWCXaqLrZW5wpcCe6VydstMykUg87kJXkqCaiZS5dKL3xQS36wyDxLhnJCKYxeA8kSnu9",
  "key24": "2DPZHeZU3L889pgkt3KS4ca1AcLxaeiSABWNjnanDbiAcNqTDHLmghFrww1hFuchbGfQqiZ2Dh4GcUF7VYQj1t1u",
  "key25": "3zw6MFaeCa2ogphzUHHLvhzEnH6SgLeW7WFGTXYLhoK7WydErvtF2T6T7padnFLGNokNWjHaztzoWaqoBoqqEPAf",
  "key26": "4Yh1sk4hy51ndAs5HmTBv6R3CsaVVyZyvNHaVyMCCFckj2dGJoLZ3jTfrZWVDDUKURxPDbdf1Zc7K6KxLz3bxw1e",
  "key27": "4WgdZ16gs3C2mBFtXfrVELQXZrRLY2XfLmVazJmGLF7jH3gbPMMAATLdiUJ7EsD5zVFb96jvv1Dbg4zT3zhstRW3",
  "key28": "5vtEHUJxiCLMKA76qJswV3Y3YZnJj35LwAEmiQz7ceKpgHt2UvCXR25gg3NxcHDgPcR9MLdZ3L916teRRniyJ65s",
  "key29": "63Bu2t3gjyQ8rMs2mGnax74saPGkAoyNT91EP1Jq9sFrBhEkxiqtfBoN1NAUZsudykSvvmzg4F1WDpiKBXqCUQG1",
  "key30": "bxmsb8roRDjbjn5d2hU1W5v53iEeVz1CmcTvEzXtZ5qvFtVLtEWrTZdEqp9NqTNJ7cEhV8p9s4p1vuYpe9f2CVX",
  "key31": "3tCnc6yZLu3wPwHNWNXTyQswpxdN4fdFwmrMKMoeSCNsnYERGvWCxQPPoehGuAH9SjsH1Y76P9CSnzJwX3MvNk46",
  "key32": "MMyr5Ui1TJBrCaEGN5VzRshVoAQT6bt6W4DDdSLK1kgdVQGEbMb5QLP62egUPx5CAvsryXKkWtsSE8bz3ohxrVx",
  "key33": "5NnaqAvgp6WZZLSgPNc4a1jmw1uN2i3SJBuc9Uaz62Hd9ByVCcTTzXGnNut33WAjnxeYBYvC3Cq9NzkY7KC8A6Pq",
  "key34": "FzxQefqSv6vyyfoorKbL43seV8sFxxo8dZA8evqEEDgZWynJ2XUM5P9xzZfk8jCYdhvY8TjQ1mDVLv1AHQXsiPr",
  "key35": "4uaqGk491zm87hV7XTrvKezC7gqoqww4Pd4f6vZ2BFxZGPd9Xsju4Yya2PEwT1inv3tqKDSmewWzc29mTuwCRCN4",
  "key36": "xFGMQm57git6oNxiBLkmSsR116KxDgzuKScPwTvwcSEPec8BteLMoGLpCUwDWSJHG49TmC8NW8S8fXzzB7bTo17",
  "key37": "5xpEouTU4pHVN6RBcABdyed38zS8mZPvvsMwkBbKHss8raF15jZqXyR4pgaoG5Le5dFkQQAccvqDMgRXxSrNnx6T"
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
