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
    "2ymmsREX9sHANEvqeHBirT1qeWQptJeBQ46SWVaizPviJHqHRneTiPuEJZfAhPS2gNAaU5xzrHXn8DQ9eaPXurwL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "goHZC8GJpJcdGndC4quukePewrEpHp2PgDJbHQuwQjq7wb1sacHExchVXcyeFGZYWTsqkrs9KUqaWmefhHwoQpq",
  "key1": "4jqZiQoBSokr9yfZz6Wgtc7bAXSD1yWUvtD4QwLrJzboU17W32QGjKKKDCgh2JVnPYBtNB42j95zCsURzQov1Gzu",
  "key2": "424jRPuuZbFmTLtFSRtDMxDxvm7uBW2UgspgNGSnAod1rjAU1y79wsA5Y29PZrRH1pywpL3Hn3AffQ2z4mT1n4kU",
  "key3": "25xAjqPAW1MpQVzrkUycsSfXrphr3nYT4Wf9pX8XGg3JF5GvtrVNS8bRGyAzf7QipwQ63LcZi8djKJzArW5QPgst",
  "key4": "4CeEcjacLR4jaxiX3WNUv8ptTJf96dTg8gkUJk68ovcZoHpGYWdQG3Cbvo7iCePvDADFM3JpEAUJc5DwQcn73Zod",
  "key5": "32NBQRF2jeyjn3L7dC97F2N4PKcJdDMUikRrWDtzXY5wdCyjaJ8Lv3eSKehY539gN7JBr4b9jnrpqucBc3Gt6Xu6",
  "key6": "oYKS9Ypc9ZnAE2fwC7y7P5sFdedJPqNb5JmqRmKHxubanN6MdUCprSGTr4twj725CXtak5CD2L89yRy5ZquXs8m",
  "key7": "3ZkLusdL1stfuLPHHWWSHc2EovXCPYLf74zveajCoNDDhSLyuBtmY3t5GVM8wHnyPqHQ4NQnkCnkrnaSXbMhtmPX",
  "key8": "4XLDCDh4JZVVVExRZowwPFakVfckU9nf8YEvYzii3sFbBFYHRemvfMVMjtyXk6mYTpuxuAF1znzvgFQySFawSpEo",
  "key9": "575UPo8xBsXpvGoqnCmeAfMNkAVgb3D784VKapcqigR6YfqSRN8Wn1TBt3cC2LF3w1xaashFMticogoaWE99EVvC",
  "key10": "58H2WrceGe9AqCkzudw9jLWSSBDvik6NjwuPpLkGxVFkjWsRntqBnRAZfVuoDfiyExJwqSFruRrGRNsyLtdxUuH",
  "key11": "QFUdta1id3aanzKShuu9sNxa5YxvGj2hp3oThAHC94VyC8Z55uN518wjt2UWZXM2PhHAmQdPHxc1UVJ7Gr8akBz",
  "key12": "2njdbpKZS43aRkaqTA4kxQuobrJX7F3pa4P9QtwrrVC2q1QmHk35j6UP2oho22SGMCxq8sdCAyPk5TMcck6FGsAC",
  "key13": "4XHPoqVHXyBG7tiwqHwEYyU2jqTC1SETDaaTyUAh5Z7DSydTrzsPFxxt9tCotrM3mYctSMjZFB5hgSPTQ8JacPkx",
  "key14": "5z89L7Yb1x2UiUWGRpUmTP8h7E87VNRqutZ2eX9chy7EVAB1JLNuK6gHsB9hoR9S3SuvCTqKw2HCy4vrPx8vkaJa",
  "key15": "5iFLxt6vNekz1JZJZYJcjYMiBHtbKN1ndpNzqDi3BCm5miuUYCdxrPutYcRbeDeCQtSJRTsgM135n5dfnnQ3MquS",
  "key16": "59JQ7pRx7mzAfZtNZiex2KitUpb1mq92BRTT2LdCbtTSgLkvb3so7GX7JB9Jg1mE1ANzvNLmne4eupEBAawNQvFV",
  "key17": "59wC1X9NcWXppkSu4Pp925eqcQgBa7ZBoU5XjpeQXVLH35jrWgL4Sk7EQTumMSHd9sM5XsC882JvNcG5yYzJWpCD",
  "key18": "J5CqPu63D3axFNjU15htD2zQfFWD4hpYmd36gi2PHd6vew8NYPkhVYE6yqavDwfn3ZBd8mUTpdRgJ3aGgVtNRA3",
  "key19": "mxU1gJpmj3Hz3RptZKVuvobXxb8LcWiEmMaPkmB7chfWEKiaRd4UTrrFnBWS1FXnYHSQcra3ZZ91mAKwoUZAAgH",
  "key20": "32WViaFCEuBZRv8UWKRgUmieyW3cqVv1FLhrYCCVQahWZqG6yJStE4Aw6mfhzV9ibnSd9uN4EHWeUMpyvqJNkqFj",
  "key21": "2iMdcW7ZzgDEJgnguK8svF7VSjwn2MMe5iL286f47bgKSMjcn823WqiReNTZ3h6QSjakGjzdUi4cyuE24KkTCxo3",
  "key22": "4fQVcy7wv41CdkCzVp9QADicUAay9PETAHwHp2BNAW1S35HL7YvMEqJQ6V63qgViqWLX4HEyHybDw3EPUxgfbbqw",
  "key23": "3RszTMQFU2zjziKT6zcXeXBUH1JsCsSSfAWokk9owynEpeN77Gk5vXEegFz761EeXv2VB3aPjLqn2HdLVrEU6oLT",
  "key24": "Gbp7zfMYDidS9qpzWuJHh67CdtMZ3JHvaWa6niPWLc5jAGNxbTy8VVwZo7p5MDv46gxNDiCNMFWJLmtKfRqF5A3",
  "key25": "4bKgTSzvUx8hfwjfGLFFvJzj5sKHh3RGSfcVPGDbDzF4UE4FSGt1KdvJQmomUGje6iai6MPT4cdzStqtPzEdW1dn",
  "key26": "xidCJuo45v4A8hMY3njMqcFksrxrXsaB8dSCSRZWLjhTaZqxEir8VDcwC5F3c989tPA3csagg7ZqhBqYjkaY92v",
  "key27": "4dbT86cg6Z3Brq9SwDsZa6TMTjdxN8M7oMR5SvCpDBBogohvN9AN5YGsx1ykShMr2Fw8szWFPRRCptVUXwGUEqVa",
  "key28": "3jhib86tkhSFBxre8ZrYiQdf8iepEY1QG9Z9kcHUYijuKRB7CFRVbpdX4r61uNs1v6H3N6Qya6ocPBAAcim2wLtz",
  "key29": "2CmUP9gG3iMKm3La9VLbEeoC5Jx7PfvF8HjP4NExRSNkHA23ZUydu5KJ8YHGEe9CaC9Zp9i95JmHueaL3QgqRyhV",
  "key30": "4TX5Np9gtyGU3AuN7v6vj7Z6nPfbtuZ1dcPfqpVc2FZk2oxJyWdAj5bX7KYVWdSnAMTmgNJz3YswcgrarCL2pjuW",
  "key31": "3Aupm6TrAwS6VhQpHuQesEz3javtJ5zt64ukgLufFUXnj9sHPpwGvjmzMtLvvuSPiZcjbWVE1NzxqQ7D3v8b957g",
  "key32": "5EiB2kePJuHhSV53tAzCgzQVHhUbhFg8eFAL2NqpG5vg4VBRqfXb444AHP3vFcX4iXHHJ6p82Yk1MkhcPTmAQdJQ",
  "key33": "2ASJbGCmLynwSxRh3Sf1rgprA5jhoMiiVQibnaPoVSDQx4tNeVW4ktTnG9Dew5dL6anC4Nkiy74XB57Wop7c1Mnw",
  "key34": "357ut64XrJbAWpbHNvvws7m4RDGGxreMoYVZjPbkmzYUCM4pBeyx5A8pcnAKvRwEqB9L3HESTtTTDJXwbTXrW6L6",
  "key35": "4gyhTPvstbw8Fbud8U65W44FGf2y86V4LwHXo5cAichzwdD9muVydZrox7cE2Zg5YA5XhUJepRXxp6FRwUYGF616",
  "key36": "5RnucXc9c1E79jnxMPXuZVe7wM9twPxbH3gLLFcH5Fr3iPtKT8yyZKXEpZaKXCL65rriCD3C8rfCmtAfQjF2TvHt",
  "key37": "22ZN4ynuccKy2rmFrUjaRKrJh41Z3apf19hvQGC3h3gkmnpuqb7QHM47uQhAD1fDffQwG8Eun2Ge4yMS6iWG5gfp",
  "key38": "2sFT9k7HibCtCj5JjjRHRKwFHqC4NbhwSVFr4Gxrk97X4bXzSaj4hcCyFKm24U4EHYKxx1iugR9sscxo38KeKw9i",
  "key39": "3YbppaFiofUhHWfo1jqT7X72pqNSWLK9kdGTMYzWGVb94TbB9DcAKywUw8gnbYCXZn1GjVmNmtKdRhkbPMBoZ7tZ"
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
