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
    "3MHP4z2G5hukArxBfcFJpeYxqSfxEs8EwmYn5JYwqDr4kofLfun1b32CW69RBYoXx9QdEwvCgMzqgmGJ6DsRjWCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iULGs6ESKg3vtYnJkTBfS3GtCsCYpJEmCy4koaNXBsQgrV6HHTSzqAy9iZoRnDUrnq4KTaLQHPEaSvKb2n3QgxJ",
  "key1": "27GrnsoQuHhGbXtDwaBUip5D2mRsquHcJE6furUyCQ8GzSpgRRcAqX4Mx1VpDZu3CdnTZj9w475MYJsxakZgkKaw",
  "key2": "44MZShtuznzSqMGVrvfyNRJ3AWNZyc3LBdX7G826Fj8URXUdRjTHZoc3acUiF6SEBdPcSa1XeWzwC1SkruV21eTp",
  "key3": "JoaCNCePVjMtwjab4PQyFoX2MnxAMExZeTrP7usik9DANh66mVQX2zuGBvqvTfrprrcAqogCJZjqyGizXxUcNBa",
  "key4": "3ytWuhGwcGFHY6oT5sUnLNb4MVNuWeRdoXj6M3upruwxjxSzM92JARhMFdgsJBphCTjoMSLBbPdWm9kdA3AEuo6F",
  "key5": "2tYUuzJ7zJ57hvM3fxDJm15ur6rbNHGRuhYA1NgtbV2gHzA85tCmUJvnLYH6XQpQGGJtidGYNu68z47it7S4aKkp",
  "key6": "2qVwn9CWDCtRRXoPTnmpsDcMKAadiCB6qHgvwVETSzKmiNPpqFeqGx91boUaS8cNAUze8gUwcsV62eM7ptXyQfeD",
  "key7": "dZC9irYpCp17bXiAmuGua8nMiC4bNXpSEVqSfoSs6cMqgtnxdS6qeRcJBAkNXcm46E7XNK34znBf6tGXKPNb9ST",
  "key8": "3s42Qr4JmhEvkpa5SqFAdk6QJJWxy2PRUKmoNXFvFoUJ3FzV4335TSwYdyGE36sBqZVcL7cbbWrZfMuzheCYE7Es",
  "key9": "5TSJs1Vv721KVGFimfSFt5sKfrenfagMbsUejboFnGkqvpi2G5Ud2BmzPyj3ZrspdZ596rMciWcASgRnLpVmT5Eq",
  "key10": "2cASPQFChvE2rNpjQhAXmbLDUh8sz3mojGVvPBs2UREqTcshm8FGGB7mEK5sMTLgDFsZ4yxp7uU5AStBCqEYCLuc",
  "key11": "4LAASEwhsoAsERp6yFXUy1XJCLzuHqYPxXp25TkGrq7yMBV57vnbGqn6b8emVtbfgr45bciNUPRFRZUCr2agX4Ds",
  "key12": "GjYzktFQ5XGJRwq9KPNmTEARum7p1fptVbtQUfz2RArbxiBvCPnyK1eHpBP4Zk3pdEKv2Jehi21wuEm23NJ4Gr3",
  "key13": "4vz8xcSQys19TtQVefkHFidoYp6shtk4FMChV3jQku6NsS6Lq8zEPeXEYLhMDvSftCfxwyS5iP1K3qRMGaRiGxEf",
  "key14": "iq8eQVvU18UQAmSNnnEGRRejNrt4CdG23cnaNM5Hw7UPasr1GDYXaiiJ68j2kVeayYXbT9uudKdz5FQTcWF46a5",
  "key15": "2iTKdg1ycCjHuje3c6yGpvsUYWm91TiZ46yE1nTQxL7vBMX6by5S4nxvijUaKGSCWfMSqgedg2beA2d5eMrEnjgq",
  "key16": "2Lby1gXJCAtfeKTfQzU1ZCnMmCaUvxYApqFsJ7Ttfcz2AChZGbMsCUCT8v23KJqFtbbYXs2aTcBk9KWebxqhgXjU",
  "key17": "wX1cYet5ng8JRuZAJYD1Ad6tRxhok1a9MPgYymkcY9zKFj1Qpb7GYDv8svpwMb5FsHoTosF25u7L99z1DRifFKA",
  "key18": "4b9uosuWkao4Hb11BAjaJU3b8p7qHw1SYPU78NE8ohCMB38J37KB38wo7Bfy6CxocuFdp5yT3FepyDgXtL51FY2f",
  "key19": "2nruUnvgR7VT7tuQXZB6CPnXwSvtC9aMqCmky3zN8c3jMtzwXEpdvfnri18iHbFJ67QQnaEQDcKF7ok1AGUeNQAM",
  "key20": "5tP272xsUnVvtxHaqiL7fha83LePCjy75hQSzGTqQJ99razbo69AWmNesYARmjbEDPj9MAFVJpoxmZaVDsS9FA2t",
  "key21": "45bq5gFoK9wBYxwWkKxzrLXaEq2ADpyjtpBZ96NTUHmKDqjmmqyNdHxuksFzuHEdtKU3cpUmyqbxXDtPS9J4yRse",
  "key22": "4NFvsZH8PnRgHpfdZt6krZWEdasUSjEgXoyPy7tGu7H5HYWKN2RMDcyhAgUWPDX2RPeBYF55th6UAwaN2ihQdHnJ",
  "key23": "2gi6JW8EkXEC4UiDkky5feWjzLdEBtMUUXcGdmx2n1GZPqHrtSixSbk7YAR5KtXG8r4DbGkxW4MrAK9mbPzbnhB7",
  "key24": "2FCfyZKS3Uej4w4iRR7pYFBe9KAxBcfmidm1xAovS5bQVwG9fjE2yDFqTNCfQ9RTErNjoGkECFBQ6ybkkAstgGWX",
  "key25": "fyadBfaZ24DwUv1raJK7dTbG2F52udjjkNFMjmoHNVJChmSCJvsdZNyHqPpzFA5WRV1qXST39oDvGBiw5yGWh9X",
  "key26": "4AASaX5gz9YhaY6y6PvRfiULndTVFsjuNswQr81bBM5nquPmFgxC4BuWhco5t1J3h7oVWepTEb5tupx2Guefn6HF",
  "key27": "3FMF9UJLm7n9mGSfthGaiSBKVgYfmtdnvz9uZxw5vQEVCwYApHGWVthboHGCSxr1XqofwLVYzCtE4J5DdXHTMRfx",
  "key28": "xDHLm9DLU4z46CpLtjgE3RgNv8zDGZ1MPtwzWmQbSyYNKiQaNgFEMEZcX97u1vDfovCxo8dtgkkfow4HtWwrpkJ",
  "key29": "67nGUVUQSbsCHJD9n2WSonpTjKusHPC2KWsguPcFNCFetDs99JPfwRAhGpPjnVyKHmtwZjqZdo39h6Ud7eoD9whQ",
  "key30": "4rECQydkmgMMMR1WV2vRv2ENoTebjZkv5HTxnigDGDUpjfTDsd774GRdLea9SvwefhKg4wdz4d2NDfcnDPNBCVCz",
  "key31": "p6e9oRZNNucDgsEa3dLgjZmY7sm3YsTXgtHyLt1m9hNrNgkLNH94ZoMW4aF5zrkhQxJyNSmVarGhGxc8MqyiUzg",
  "key32": "2wszBoZL2o64vr3SU9CcL6kHg2UarAKMqikMZexq17d2KcKu6yWZGToqUTC4jVVLV7Pig49RjAYF63msKrrF2Nf4",
  "key33": "2mzaYNoSQWuy2vgpHt39NCK3awAFaFfQwB2KvDJoq3cXzSXmv3Dc6Mk5E2t7f94EWQCxLwcvvGedDce2jsCyQc3W",
  "key34": "2B9h8Hw7cbBG93iNeW5J3JFp1XXnUerXsiX6kRh1nekz7B6zWnm7rDtwWPxGFB9jwFASvo7hsYf5NQ6bgYFwqG94",
  "key35": "5nre5r3L2RQ7iA34zfse2H3g8oreYp8VQNpsPCYkLoHwx2m7DQxpHJfPBFZEZTzmsHUtP3Y3uB1anm7qKa9YMV7X",
  "key36": "647PApu73hJZv6wSrr2VhPq6DJ9aGLVf4R5TFA3JebA5VuTUEoSibNpRnrnHML1SXUhGEkDNephKBhzqGqhsjXqe",
  "key37": "4XrjrghFP7Y6R7TeXjyou4PBX7hTemvSXRFCR8fUyWoSAU2ZCbn6XjRbEb9apgQzYggwYcv3SjcqpTfh7PPLCzhW",
  "key38": "2f6XpgCwsLNtiPXBS3CMUj9DEzZ4rmTBX1AA1WWuLf2LrVf769CQSTGxhgY5YJdSqYdJPRhsaLaPDPDqJz32KfYh",
  "key39": "4D5UR3yYmK9Txs47xCD7AdF55rWobKR8ZrARMp2jHLzkWZ9ZuSvfPaBQLj5qpXtSLxo3m4cE6k3mD77ZZ8qM5SY4",
  "key40": "wibvtByqD3NUD7ydJqYMXhG3qRZsiW6wTGMwDC5CoBp4ufUu2AEY8dAAdX6inKVmTGmqryffT7Po1UJJ3yZTvia",
  "key41": "3AcynTMVxXvVN9VDN4KDLK6hNno8zD42SkSpZc1taGQgnMiwTzjwMJfuh8yVfgfXP4B14Kow5MBB3sAjLwoduejU",
  "key42": "47V2LiF8ifFjdPmH8AFshtCDbXpfqJ8HG24BD7AdL648Ek1FvE3s3oBWqRoTnxVYXsLfygLyfWE5sWjwKVqCng47",
  "key43": "4dPWvpicYDtBD7GsmYcKaX6NYG1Fi81tDuWssSdN2i9HZA946PyYST3EUU8BcJmZ1nV4e3MLxRbftYyXk1Nradfy"
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
