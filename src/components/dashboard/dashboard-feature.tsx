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
    "2xG3i7vp8aBVKA91e5nYysbK9BJdL38jqJRbZvzzBRttrHpftoR9QDE5EHcNw85F59GG7wkcwzctnAGFBBJMVoMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PiAosh7ZDbAnc3ZNkvBNWBe677Ge8f9w7Yi8xqAVbi8ppmnqrNBCAmdyeq2VPcRVPQTv1znxboT9PUThTEFvvpd",
  "key1": "61MLzvpM8QniTZchT3xZQWU3U1dqtC4bsWrLJ1gQuBfaepSogCu7vowv5iykmBdG4c691Vf7hoZCsxxLeJpt4jpN",
  "key2": "5koeNFQvW39mtiQFNQGPn4JeSSSP6k8ndj6QwzbvT37vYWRWvXVNVMsqTk2U2VeZcfooLgneBdc65HC5KpDhrHLp",
  "key3": "3SvpsdE7EvPRDQVAzhrexQF89CjndYMmkBDNuSTmgAG6CY9Z2kXrmj7bACmntRk5xBMfrUAvRenR9EyKmDaHEY5A",
  "key4": "3AAiYDAxRBDFJGcgLdWguTCfvCFBjG8hdZUAAdBg1up8X84SqxVTmxi5Ky7YZietWdgAynHt1mWcM56oH2mkXuzq",
  "key5": "2uWzkkSwd3Db1wPxUehfoJyMAw3WPAunCM5tUGkaNYnNpX48bMeFmwNPUmRGUUWnt2gxNjgbq1hznxckQ8PLff8v",
  "key6": "Acj4R7v2KLr6zAW8NbnXE7Ptkw52MWkyh1Gx2G6weHDwJbLTV9vJfcZijaPAmByNvMgPPvNyZy6L9HqkhR2PJUv",
  "key7": "3Gdw18V5o8QY4WoddZum54JBGE8cUqwAcujaZuMhekYfoXdZ2T9AEnyeD7DLFuaQwzNUSaewokPjtCLCEaTSr1pN",
  "key8": "2kQYF6qXHNMXJkSoZiYuuL7PRwp7PxCyeAYy3jfaBx3MzfeM8y48bV7fPvHVxBSdCpGzoDsyZ9ustWmGgvgLmjqG",
  "key9": "58VcjhfJEUZoNxyrKvBZ7rg5D2jzfbn5sXFbAkhPdBzh9Z7tnba7wXFRragab3FoDhPKNEnCKjtNQ1mULviMvSmQ",
  "key10": "3YRveG8TS3YKnBevFCjSyUFWJT3HDJFK4Qpv6bhi53e8KCHgUPXxu1MPZfhtBnE7Lgbw9GmxVCycB4BZxTzBnQTk",
  "key11": "dkTs43yz81xU5Z8TVGT17uwok7PfYU6oFxMwWvBYJFQoUf8b5N9fmCvnGbs7NaFV5NzE6crJMazJNZci5RnHe2h",
  "key12": "4tnsdWo51nnwsnbG5zeCx1rJ55z4dE53Q2BiaJoeKuX3ovtSZb1PbNCtw5xg24PUDeCjbZ4mS6wSfqjg4Zvwpi6J",
  "key13": "5BgKJxDHHr1ujowRYKP2ZpmgAoqDmY2pWhjkuQPGpMSJfVefTa3CwVtyiwTqw4kvXRNLC52M9RQrxcAtZHvXn5x",
  "key14": "4DyZpJ4S6kmiV2yh8R3BbHdvbFNprQqSkZZDZGJUuPSWjPkbFD39c2JGed85b343QTZ9ymoQgbwgzTxGuaT8s5DM",
  "key15": "64f2hygWygq74bwSTfeJhmbY7Du8ZQWanAhPkrZ8GrJRvkWRMqvw53v9qM5KqXsTU2WygQ2A3C8VseBt8bSyEvTE",
  "key16": "3eA3xgshmmzNEVJbAm4RiLebgBEjKTXjPDh1SS47EZwG2ziwghC1Afm1vA6RkuXai3aoi9KkrKdDYq2Ry2aeyat4",
  "key17": "2z5MuDR8MWprorEkW4kwaeVnhTmb8zRMnrCdUcov5fPRDp97aF6uDBB34TzPeegAJBaHQUKDttHnCFbwfSGaoEiz",
  "key18": "5vANJk3e4MHrJDDgTm1n38NTnbgXf9JApXDr13X6Br7y2fiVqZiaLhZeRdNJm82MdgzGk8xNKz2GbShYy66Fhe2K",
  "key19": "4toNs3DrvXQTLTF4c8yzSgwQYSWvUAmZNCkjoa6sDGVpDB3ntWGP27snLgCcGvitGMLGhfGQxJLi2ijix73Fg6QX",
  "key20": "4iRHVPrYuKT89KzytFxdauQVKatV1BFzkqCLpXeXfLgqwmpSoW7sSYG7URHTHuMK66cPKDiXNhaDDdFsqaDu9Jey",
  "key21": "5MSfWon8Q5TLbCj5sqsDJ1QdVLkeXPaS1PE5SJqAk7XfRRVPZw28faX3M4cwSL1iCpUrn32CAFQTqExRCPCYwNwK",
  "key22": "2yHeFWyXYLegBHSy36iqwqjDxf2PDCSnxCZFtHbVm9LHN79R7apvHXny9ZVNNdbPpEbj9F59cHntoRWya6p2QYSh",
  "key23": "29yCxH833C3ypZf1xo7c6smjz6MgdeM9LXZtmDv5kAR9ZgGCNvNBnj1Y33zi3kVszJsncf74Nv1YRSsTF2DUCu3z",
  "key24": "3pZnmxjsdcBVMc8xNHVAPzgeaM1F6cApuJSHQwERYnDde3j3duDnkWt6XcLzxKAzueS4ApmYzXWzYL4iybajzChy",
  "key25": "zTtpytYCxiU8jdwwHJokA7XhLtXjsZtK9AnFbKxzZ1MqP1QnzUWVC739tkemYVeq33YPhGauf6fNk2YwZ4EhEy4",
  "key26": "5t3QzdaE3fxjdZaCj5mso7yC7pomS33Nt2vF2qJCf2PWsbMvAYAS57stKryNSFUPw1fRtJDBmTFQ9MqW1aE8VS5U",
  "key27": "4pwdSUJPpC1rLPujtEcAiPZLosbL2SkqPYNDC3QqTdgnC2b593CcrbdXeEtEa7VVyvgYjCT5r9iAvnpL2qHD7CvL",
  "key28": "3CnfiPVGRSarrZvQmXQdcyH73GNJc1HH431ASo3PJWVrMNswCpxy2Jx2N9TBscunLP2AVmhsyLLZHV7SqJeq7wq5",
  "key29": "3bUZu2fPEQDaVNy7KJt2FR5BdkP3zcwULRYHwk9TvFfeHsetw27bXiDXYrzDzsiMcjqUwjwm2Qw3vzz6DyASSUcQ",
  "key30": "3n8FXcSCHDx6dbhXQQHzuu8WfzVxG3ewpDrAqq6aHkwSwS5zUjgVDwxTd1DfJyqt3Ya2Ti3YSqEvSnnFezYjsRZF",
  "key31": "drHC5yyaDGTFoZtwY8iXyLayrLvwvBY2Hg7yiFLHseVmWezLqZcrPkNEoJYFMfrYkQTmV1SmfDErdrfdQ1asVdp",
  "key32": "CkjaZCS46PZ1yCeN886jVY1Qr7ERkJHUDhLBgEJe7Q22nKxUDcTKmbYwcDJtmA4Ksq6HFi4JbPxKEvMbxVhkKNX",
  "key33": "2d97gjUb3AJxfKBbiekuKLM4ykJBYKBhMTWxSvHwprrhWinrPmFsatwrWkeP2dRd21tTTujDwpJp1RqpjLsHk3aM",
  "key34": "2PhhMg1pMWJ7t2okHzohDQMWWb7muE8VdsjnSkmANfWJ2pZ8ndptrqcFSSmvLtQEhtPNFUsszhVKVBB4Ubxce5Zd",
  "key35": "2fmwQcokd3duexVwHfMfL4L7r6HccGB2HNqNJNm6duRDhCy4vMU2bRyyEDoZuNRVVGhQuuujQZQLh4TQqqpAQAr5"
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
