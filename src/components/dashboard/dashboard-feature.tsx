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
    "5Nv3Guf3pjQX2FBJ5BMPPRqFd1ZT2EkpUJaBCjv3ojK8HkGsAvEHUvdQysKwTFYu3248fzHGQdiFTbaY1mCmezqT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uWBWkCaJxR2LMscWK3tM25VStd3FKLbKzerLudyrywHBiWGUe4gmskaibsLx3R1ni9x7vbz2aVRdKYwQDP4xbqc",
  "key1": "4vKtCJodsuRF5ThAWe7i4FqqhVGy8AKZEBvnuNm8tA7EowfeRJyfw9UVY7nMoTgnygoNDS8AUpZ1BkLXCzJvFsLc",
  "key2": "4iGV9QTQ4sKQQQNf39Y6vHpizQ8ePwbNcyBYBk3iJKu9zGAjkh1XACtF1hQ3LLQBQqoPgXe8GLvjcKHBRTdabGLA",
  "key3": "o2MqjivnFVP7uWVLFn8WBjWJ7aZpDbFhFFePtuRsGoBeLBEdmNu1iybrtrBwqrYFaDiGeZomJDXncfW1bDyPVTW",
  "key4": "4gx9YAmxFogyaBxKwyiDkJHTQ8nWnrj9aMxeqkA9NRPjLg9PWne4xbQBbULr8xbsQJZ67Z6d1fHTvfs65US7rzGj",
  "key5": "3CYdHuzgedr1adbu3RWFwMH6PcRETbX6TAvtXdrFqNudzfmjecLfLKycZBDhVRYPCrSWo5C3Xi2TzTTPwEi9ibEW",
  "key6": "4tbHmiBZNFFdDoqW9c5QYPG3SVbXbq2AX7u7YAXbm7dta8RQSvvtg55SeWnHnFoMrpWwHyRELf8F3Zg3jDw9VUN6",
  "key7": "As748EFbsee1xTYxx7BJdAUnbF4GueyJoENbPEhqXZPbdhpbBgjVJj2nYZf81Fqq6LEgGWRsERYGh53vMShctFs",
  "key8": "4vSP2grDpzP9uUwpHkjnY8GuGmzQe7A7N8sEnfjJgK14rKdTDmTR8zXSEjtxYadGK4csn5aAqPgngw5bPCjCfdJh",
  "key9": "25yvakdn8fawWx4xwSS3YVC2mmJ1Kd4skbvyitxbX8cPEqYXtr7XvMBYsVz3CnhFQNrUHFb4gU2FcJtt8DA1GrXg",
  "key10": "4WWGG1G6TdqdbvgAoFLfyEjsGR2yNjkpVCzeF8AK3etSLaEfMAovMnCA3WaTKfWpWJhwoZcwkkBSM8Jbkhc6uJUU",
  "key11": "5WerSkiMkpF2EfeG5njZq8FpidVtifzgLeRtceZ4nBoAuMV7houErCwMEEQtvLo3gqs7r2YFpD8B6CAux8EcioXV",
  "key12": "4WEVJ3v78muVE2dCzdk6KMFZHRWbSHGSoRTdW34Lw7JyV3ZZJvm7qr8u4WyE9kUL71ZwCW1hPYS2aYGBZcsdVBEo",
  "key13": "5k2JkHVh36eGShxmu4bRNCUU2F1v1mLNHgbfbP93xKzMohL7M2yVKuic6UKAA5vkijoAjFuS8aE5o9JvTcEdBpCy",
  "key14": "583ErATBa7WeDaF4dGgPcePfc1hKuQTCDPAd3q4ay4zLxGic3shfxBYabCus7ExSaxkrTjFQGmLZsRr5A9ddDGKE",
  "key15": "5PJ3or5XrAfjR3L5Q92ynsZW2YzMf4xMktKL3MBzaR5y6FbTkua4UhHSAQPXmeQ6HZskgqthnoLh2dpm3usNodF4",
  "key16": "4uxjFfYBXxcXTdUB5rM5GstSLkW4mBJY6VFRAFU7qcdeGEAFUwt9s2Uc9fcxLuMUtyZsRvT9Edm7BuzoX2ULQ6Bm",
  "key17": "5dq3knzk2GiNdEo9Xi8ALoWvCumnYDwyCALR4sGzJkRXxx6AMTPm9X96zki3kxd6AQUVoiphCL7iumSZjDbEGTPc",
  "key18": "2SGRsSieTcoe5CYNj2gdkooa3TZorH7WLM3ySLazBep32FRWDqxQWPpb2p9dBs82p4MmR7AfnRc8Yzb6BztPR8jP",
  "key19": "2aVwD8giQfakLV8Po1VYa9RFCbAc8xaxuCGS3BzeF5VgeM5JHngb3m4XvXSK61DFK15XnJB8BrbqWruPvN2NuXuv",
  "key20": "cUreDAXrTSXHXtvUFogim4dB2dx9mHjQu81Cd9ghr6bjVrUW8cji6hUpvGB1eaeQY8gMHgcAGi7kTiZtgr9tRHt",
  "key21": "2eESuiersf5J7qqZqWB7JmDDABnbpMcjiVpRRcHZL3vhqK62T9gkCcnLbHbp5E1tCpvzuaPDR8AGqbrpWtQUgz7y",
  "key22": "2CTcxmGodR2Jf5VLT4p2D16cBS1WDuXDRoCAv7XTPej2xLjJBhJaz5L1XbJ7dVWVvcBcfBWbzi5GnDEDjhJGGXWP",
  "key23": "5QKThHpn4ymskpNtULNGbNQzXeSPZ4dS8so5UFYgoLuoJPwp35CMr892asysrEPyfu3keYWjFhVmPk2vG9YWy1fX",
  "key24": "2x67JR5SPDae32BnxswWJAR6t1xS7wCWY6DTUTjMUrg4hpUpaQwtVJ8EozMGzafjQPHKpzk9h2yuSCfyQgVvikta",
  "key25": "AB8s57VUEUb5Dzj5DVzb74ydVANmYUkAnKGwM4xj9BxSVoYnwLz15RahsJ122W3p6LNg455QLcXewsvXvA29mnz",
  "key26": "2cJWumYX6cVnF7jzFy24SimBnzD5QEX14FUGifyor9sM7nKT8nkCKPFpe76eYTsaddXr8jckBZpEnWNGFqDbAuye",
  "key27": "5T48ahzzUtRSUWmpMH5xbQh7z9TBnrneZwUyC8tSx5id68JBqrD5a5cCkHer9Xx6Pau2mjRC3vHntJkN46cN3YoC",
  "key28": "3x8e1HNZTUa5V4A42CHXgQCVypX8U2FpksrJA4tEJVwFkZAmoQEg3AR5NEpWSidZgmvvxxZL6Ae51u42uX7DtXyS",
  "key29": "2C7gCv7FNJshMyRAxYya17CFqWxvPvvWkgURBMdbCJUhhLtejrrGQA3ppiZhiZMNryu8N6fYbtvtbcpLvjVkzVQU",
  "key30": "49NZrPtyeVCSAidiQET4ANY8nHzRBBq1BYhbMT6q1KkTCDcGTtMuh12jMeU38Uh2o8tMby1RqdiJdS42QG67EJ7",
  "key31": "CdQzbHuE7ko4kUqJh9MC3PtKdPHGzaxiu1Fw3vQsYfm4RbExT2do13R7EE5bkSVti64Yqw6VhHKGnoAji7qkWJx",
  "key32": "4N5d2wbP1mYvMyw7VCRsLTQnLwENXAmMrcnPqEXwGAxrpG1rQj9LnpbqfpxpdcWumsfWpwfgv3LM3KNEg98zy5J",
  "key33": "5tAVsF5dugSj6j2h37xamUbF45GsYX1cgEkMQVVxJoTYEpXcPehv9kWppFkjy7krbpKFdxP81zx9YM1KnSaHqDSh",
  "key34": "55ZMhn3ThNvpnTE9cJxTzB3GFcGUmDXgdh8hUCjJW5w9sPiiF6dY7moVQnvWcZGKgQVwk1c9f5C33kZB8z5qga81",
  "key35": "2PrHfKQEqhoa5Lq9R4mL6UHfyHYjY7eQ3sjMwWDUKoyANhzBG39sX1R5eh8gNceZCwC9az2Ke7bFDzmWWXD39gXu",
  "key36": "5J7FAZqjaHH2ZXJ2vd8BFNYAbUw7G3BKk25wVcCRhtpAjQyWgyfg8nMRZZWjbJLrGYYrgJmANy3tdAFhgrceBJ2G",
  "key37": "5Z8GLJZRKaG8DPtG8pEAMov16f2RM16PAc1n13HWmY92Wfzp29KKp48Tc4qEJ3XfUaReEANFaKekoT5RP5PBT9zQ",
  "key38": "2kb12naeCPyedJxLRRuXNAUbfCe5HEYGY6Hq4RvB8hq4oGpFQPVdv5wApPoNTLjAzTFYzaU2TH98CzajebqUMGZG",
  "key39": "4Cs25czMefEfhimNWGFtzZCX9BYRM6C2nDiwcs7Pudr1uiZiLHTHo7da9i8x2AzWddSDXfV5Ypo5Fv1epXNc8gvT",
  "key40": "3bbvSCUQ7mF3i7bzm7rgvy6hCyxdUdSbZq6KNbM5naysW4md9jvEA1inowAu2nkLGmWVDbhEJrzxTYFtTEbVgzoz",
  "key41": "2MP8TLDBhZ5LUst4huvXqb6Q1NJzgnxebuzuwDapq9KBnnPhAWcUNB5JVW8ARu5UyEPbsNa5iPHX4rJrb8T8CUhG",
  "key42": "4o8KKBB2P76wiy4uLp1oaHvNk4BBHu9u5jHeVyTmKMTU5e58prCp3gHbGS6dd3SKeNDmkvx9vE1QyeqEmdHR6hfd",
  "key43": "5JSzKa6JDRfdG6tAnm7JEDV8cH3KPhif9N64WJc3ebUL6daBPviXMsLZQga1jaFBAW7j7zWuFMYFAE7RJ4uYhgue",
  "key44": "3JhV9sFjC7MAFHsc7bCJhYeCGLmhzUQ6Reohqu2s2fFKX2oHhotDxZBGr5ZWdDhD9cCrqSEfXAKo8jnVDMV9EVkZ",
  "key45": "5ivVQfFfLiup7eoWmp7bgYZCpLiqXw6naJ3AHSmbpigpCoTXyqvnsANUNdLByXqLM8nZ4wuVFPivp4VoUPEtC7tp",
  "key46": "54TerjMMoDW5stH9XaMWjNxzq3wx4jfv2gB8LTZ1P1kKRmGoBTx3Rts14uDySS59RRpWpNHhhB5YZ8nLWQgCBZ5e",
  "key47": "2RaXqQyosvxQHCQa1FTRPq7xdV1e3VymCWGVretqFLf5kG1CoeiW12VeCFqvdKkSWwQb1sGMgE8vDDkvwQP3Ta8v",
  "key48": "3T5ymczZShMq4rEXySNMoZDjmuFdR6buC7sYMoMiKJtQ5WtyPsNgmVRYmK1eoJC4VQT5mtCDBiG1Sibo9JuNShvy",
  "key49": "5UycyhTdPffedpWteQTVAvv6grHpYPndY3pyQU23dfpdMRAvs5cz5F8GHAkt7f6Xre5VP7TBJncyfjgGZ71qymMR"
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
