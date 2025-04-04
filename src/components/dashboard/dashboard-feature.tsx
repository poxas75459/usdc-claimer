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
    "5GSYz6EK4sat1xtXfqUubV63QyZMPQBuTxMd2d9AdQGw2g1GFfbDzie24JNuB1YXCkRgPqhHLjJRZVwaA2qt2fcQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cUv4SQ67E2wSznnwuMmxJT25C3fk3ZRHPqVnyieRHk89h1xXhtNFxMZw1nMknMwwPgwmquvYRospNRhYCBT9DbC",
  "key1": "2q6gJt5EZkx9cyqGykhinWgt3FiVZ85UDyfv5Ms7w8ovzQ3DAFuXop5huwvFWTwcqN8wkNGsjP5orQg4fsepqBhq",
  "key2": "3m365z1WvxVGiiarR31wCP4nocY51D7XN9EayEHiGgLKjgGFnG4HSbbjrSp8NzwKn3y21SnziBLEN1LpeB3J6UQ8",
  "key3": "5XtUF5L8mJJJpaVv8ApGMud4tcmNKxDVdyiu2r7fN53FatkoL9bfSLRj9uVBtwkYtmpADJWSMXZrTbCxZUMmmAh9",
  "key4": "58brsjphxp61VJqKYGzAxKpVVQrCQ4Zz3Tbv1oigfapXq5JxJrCLUkjS8Qmm4Qnega7D2uFgZiRyQqaxCy9KSFqn",
  "key5": "w51mBJTJxx81VBZNyoC9MxfkcHEtQRvL1ToheMGRCK6oyEbYuJgUWgJM8q2osPQUweXjgRpUUVcnhDFfK8wX4qf",
  "key6": "4TAMDj5dtDVLMtGRMJe79o4fc6CtHxy2SMkCjH8jQf98D6vA3T3KYcLHQ9njqMriZfpCFuW1KatX3SKG9K98Z6pJ",
  "key7": "3ipN5KykknQBw84vpv7sxY65eF8qRmNryxrFMi1VhjvNeCAjqHDhaBTBx9wBWTjmqUWrugZtHRaUFcRKcPQ8sutk",
  "key8": "2XZGETguPcYwykoi6reDiHyQceP2DJwQKZxAB88hwRay4vNKuJvq1MH7k2sMNRrFLzqSwi3peSuzinXBsCpt8U4L",
  "key9": "36tSQWxhjzGzMm3YoPn9M9E3dzgxoYRsTmDCwWeaRfzLgscm18guc836vz5dP3d1k2g6Vj7MPgsdhomyfw7ufXC3",
  "key10": "2rdPfDM17NrUMHbQar3xEvQWcLGgzVdwEXeWsYKF5yR7vHCM5oNLL2AkuaX7jjDAHM4i5xHBAVhBTA915Rw85aG8",
  "key11": "2rDeiww89Mycyis2kPzcaTTP3Hw528YfxdmHSKUqLSMKZrZ4gmeAbvwg1huC8kk7GQPziU5S4EfEvpCgs3worQKv",
  "key12": "4dZ44mEC8hDgsYB6NPEWZxH333fwAfeW7XaAb7FvEDKhtHtGUodEWxQKUVSJmJKCVoWnHvo3wnhe5buQyY55d4FV",
  "key13": "2iqZbMQxCWkKB8SkUYX6jTHEtgUBNQwHtwUDLUNgpwT4B8CLuoQ3NqKeAKpcxD34sCSMZkto8H8QjHjLAWnSsvyw",
  "key14": "2UQwuGtaKtJVAkLUM8kG4thoqhaYt7ebFJm9m9s3oscXG61Js5i2MvFSUEfYbajSVqvmRvuWUXZpAHvhDPBYhaEH",
  "key15": "5cKZJGLsmCYnQZWaFRMVVPHUEHykv5KJ94Z5bMuY3U8R5DMhXtTTFVV99CbaFfJKqgYjvpqVx5dCJCyH35dUHjxN",
  "key16": "541NnKfp9QDovVbabs5uwWCGWWN1yXyHQhdExXXxRGcTD8KPRZ3juuf4MMfUEAxhokwtiTtXW32b1eJxihEefxNh",
  "key17": "2AnUnp1nVvDJHrJ6gPwW28jYpsoMk6gc5Di8N23Jx9jmT5jMm6s6CCQrBW6KsSgbb5tvmccmbbVPL2u72dwTpPsx",
  "key18": "54HYSVYtDSAbzmPTDDCMeFizNjtrDzLyMDfqKQPHc9VvVuUYmbhLJVme74uMnMeBZtLYJorqr3h5maRjiYkSYauZ",
  "key19": "Yo1Wkp6EkryBjz5qesyaxbdB7kQbbuj9JWYvgJrENnwF9pMPgWygzDmHtnipr44tzSZFrmqs97qjfXavxyGwAeP",
  "key20": "5wrTXE646CLKVYcijFRDTs7cjCvmnWKEgmSTMPooEtE1t8GTrC8U9fYHcQWGuWkoMHFumVD5gPv74yxVZQRCGaNc",
  "key21": "4QSiBWWFzecsuvPHcTery3w5dtpQbt7zxpHxqdZuXW5RKC5Dcwamv4R25D876PefmWYaps51uLwQ3UoCd9huqgHc",
  "key22": "5ERK9DrifHfARit6tfwFsrWxU89ahzfcwoPj9CMU8Hs2kCxmgCaGjd5YjSo1pjQW1RArTEDadBjp2JyNSf2hdNo",
  "key23": "5bkiJ7Q2279SW6Ko3f6BBQdgpNpxfVDGTkteCpGjoNemcS7mSH7cE4yLpeLMA7Y7YrQgYDUmY8S3FvfVgiEwSeYE",
  "key24": "49Jq4YiHTKyWQ9zReKhpuxRMF61AGgmcKa3cn8NKpRnyJjdLfPnMCCDeMgztbzahdosGxHjUWHSLzrEJtrnCREu7",
  "key25": "Xw3vyVAUAtqTgWQxqw6nNTWGMGmBprEMPZXmbzwn1dZMFwqHipYiTuUokGPv9V5Y5iNWDTSRpjviwE4gyTfCqWu",
  "key26": "5MDF35yVMsEk7s6fNGyAxuowq1F9U1XcY788GfXQwnixTHXvFDKxRZS1bpuJW6QyuLnmo5CxUqnpHhtYBcWmEGeB",
  "key27": "3yiEpNYuoEEp3KutBobTZE91ZvkFTch8UhP6mPAckeVGtLaARe5RwrvUvG6vgJzkkXvhufetaAGQWbkmbTQVxQg8",
  "key28": "67FgsejKKeg5pSjWB2siKU1NMMVpqoCYfQch1Bc2BMUt82DkYSaXF4NudTbRguaov8oCF19auCBdJpcENr53Wrui",
  "key29": "2bc9mWEQPbfhHHPGqQEWHEeNujypWbVCt9XEJVAX2GFdMoH83ePuNuZwPYomqDox3sREWaMymh8H3VfWRCQFzPqM",
  "key30": "vZdzjTbBkkfq21xdLdnfAR74koQg5w8KdBbqRx6nJyuLTNkVN7kPFVJ193LrFhKzqczK5yhGNYddTDWDSqcmeus",
  "key31": "5wBYxR3F2ZtdXsbz2kZFyEQe18nwxDvmi9k9Nru6T1JZHukSTdt9oVcEjxxCKvsfQPKNHnqnEDKuQDxuLWQCMwpJ",
  "key32": "THD4JsmBdau53MYQQtNDUMHYzk9osWaQtRkAH9dhndcM5b2MVopkpsMLwBi7cUdwZMCpoy48MxvfUgif7TeyQyA",
  "key33": "5fi7b7czdGGgZVyh74hMXB2ZcGH2ivgKMWiHq3mVdoukqp3RT4kPNaREETku7NMGE9gUa3vaR8nXWXfi2Hs7q66i",
  "key34": "2RASjtEPUrx8pbLu2r52gdrYFRbqYR3eVDk99iFXpDPPnR9zdtP1d1yH6UULxc9NGNjx4jFHhrAWF1WzHqjznBud",
  "key35": "T4B6k7A18aupui8xi2CGqJHzHoXvxEANEtyKhuhzsDkWvcjqXncnapvS9WvLhppUU6KsYLQsgvsQ6syzgjd9sr5",
  "key36": "4VpsZ5XzuwTRCAKSAkqm6CroLkg3z7qQjv1NSBeHpkQ7YKwt5wGVVm1HzassaxwBQqLYv8oVRdCZcRoXj7MYoHtx",
  "key37": "2PuVxmj3nWSzB9U3T3UZDboTg2nMmXNsDqqkun5PUBjXdvEoEFjavacRQrKvWbUzkvNtMDPvTxNrVSzi5Qej4GQx",
  "key38": "2a4x9oZ919ShNxWL2vpbsLFGEEEezEAxkmZ7dSJ2gZeGYDHW1P2nTV1rNLjWAUn1K5Hqz7pSKjNwjUhT7kxsTb3V",
  "key39": "5RXQ6Cuq46Fr9vqUzUVWbxsRo8nu7fii7u3w7fSdGtAr5EnuJq9xvsQ2RRiLkprrJ1naKyyknRf8mwwGeoY56WaK",
  "key40": "WFRxDLVjvTqCiD9sHDHdx6mk79aQAW7Ksdz3CcYt582fehfgQxpcryh6TnZj6D1mr1S96URbuaDvWUCpU4yKLy5",
  "key41": "4ZqKaeVXesmmULBvwYXREVmaAPbXiRYZ4TuWGnv9uLh2eCLHDPtDKuX62oazNHhc9D5pfaLkuNP4HTkCH5St5NaV",
  "key42": "dX4AP9BY4UnfywPtMQuvH6h4LU9PyjfB3aWCSCzbPz2X4PuqJe5B85wXFT8q2E78nMFEN6Vo6HJAuUuG7d5M1RR",
  "key43": "3788jH9WTayVpWqX9H5ZwhN5yGh7b3wLFgWc8iiNLiBhK8pyQspP9EfvbRon6zEsP9HGbrnUmNhaXhjVJB3ToDWp",
  "key44": "hDUk1FkrHBQZ4sV8fVVUMkA58UPFZyyyGjiXL4NZJtLvZKLfBJQYgitqZUruEpRvaGhJQCirfPVGrDBFfHWm2HJ",
  "key45": "62JkRVWDoVA9VTRvzN9YR1ppyBLGTCdJeX6U6iMXo9LnBgCwMHC62XWgmcP7ZhM6AJSNNk9hQKyW69EfxbjKy2sq",
  "key46": "4AjHGneeZZpZxxki8Z7R9dTcoYKV843tDy4ZG6ensSCSSzAG1dK4d7smssSWV8L9Mhdx8q74KBUH7WnyLmWXhvsi",
  "key47": "2km9bemG3F3AmnBteZbVKzQpQoSLqqALMr2kciScgx4yx7WQXj6hxpdebi4V7vSWtA1wBQHa3a8NzcXLTZ2cnvnk"
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
