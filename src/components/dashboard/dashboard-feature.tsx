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
    "29RCdLsCLZKpv8tkf2LaeE9Qz2N2ZDaxyCUQbZmEAhibhNfbLeEBPhEXxNiDoZme2upjC7jmDacakZYDBTsZe5Sc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XewQDTkJLknqertt2nUJw6zguzJ9WADQjzvYbS4zVEhSthKmKQ48vxE6MTA7ZYViBGqBec3B5GRfFZFxKyEge1",
  "key1": "2pMVTQGwrPBUvkyCjiWbujMHmd46A272pJZXFGC58KDppdGdWYnBdTdaYHmNVpLWzbZb8ZcpgNrBcF82hNUfKJpw",
  "key2": "2LJDYJR3vPyVQkJp9xBc9NtvxgJk7PC2TsMUCZdkAbECBP8P63jLAK65em7eZzUGYGBxH4nYHtxyut91TSKVBbkF",
  "key3": "6jhFvCFPJjT4YHYdonJGegqEjZHPg8XBTGJ7feKki8hxmHVRWs4D2o81H58rsmVDp2SDB58d2oVUGaGh6kzWD72",
  "key4": "3ZRYWWBDoYbs4rd37yCDsN2NsGjFwZurHwkbvNjqX9fBX4hqWHnJBJdq3HTB3ZppCekdTCgeTNdDHRGhi1hFxFBS",
  "key5": "48uAnCHLDqMX63sNQ6EGVuqkwVtec1XsJicT832H2A2ix54WZTgVKMB5w6so5RgZ2NSoFugnauxhdYpydWtSHU27",
  "key6": "3j9jdNnXwmQT6bHDoqmWK3XjoByZ6HpqVaioD3u4cGM3LTYSFAVpoZVMvpBMqbvFHZHYSDAFXFXETmcBJzfLCiaH",
  "key7": "3BzgUvVjnG6GgSmEuayr1iz8x3M5Ddqwz64BgcubBrkWEM3uru3VHdDz2hWW1MqiUJ2UA9RmQBNfZpmvebe4AJfG",
  "key8": "4ZaJ7pP2fxGmZ9TtvXfaU5miBYkgQS4BGA322auvmot3R1kSTKU62HEgws4PV9qb2GqFW7DNUcLiTTL4abQHEa2d",
  "key9": "56gHT7eFNZreF9parWRXccSoYyoVDNgJt7kd1Y37aB6bX1f6ZBjbn8eA3yKMjVdh4tQ9mdQHnrHVuVDFoW61rRVj",
  "key10": "53aMK2RkDJsFtskDrnLJQt3dvbHUSd434jZ9jcK84aokJbKNUcfvY8x7BPkJz4HsHKXf6CjqYPAaZopZHB5HZr4s",
  "key11": "5EoC7VsKmKLKGppRLx7a6K31ZL7h8kAN4WELGfeZF3iGFiSgghfkxVF5qYhpEFRivSK5egSeTHACYcxJ54FTVQWK",
  "key12": "4aod2uEgZciLKUMmpoHQ3bxxQcm8VVJD87yUobGdtFLYyuKvPxqesxaEH6K8KTUhxEit7NXrqXhBcNsecsuxgNkF",
  "key13": "36s9H3JyaQxyu35XxswhWHFevpcvXXT42fTsaYn9CNBvnVkQ4UQqhsFdYT2vsYL7JmR2EMF81yK54GzUYP5jixeU",
  "key14": "2wq8GbxzPEFiDTKq4bbKqVh3NWw8e5uyh1ELuczVsG7ppoqtPEbe9hYpToCtBT5aWCFJLpbGLhrrRqKQTsKigpGX",
  "key15": "2H7Mz9C6KQnN4VbcTsYYfUjus6JxQeQUxjEQhpYXDmc6nMrBjYAWaCXKfHiyrZuHaokg2EQau1NmZFYFgDjJrA1q",
  "key16": "CJPB3RYstt5X8ppQQHWnDfmjuanip3Duh3L5vSt9UjvEJB6pz5JTu75qjsxoDYArnf2esTCatgiPM3ftgyhWpoq",
  "key17": "2mmZQSvy4e6agF8w1nCqrB653G3UHAMgyCD24wMUoBWsNdj2oMcfdGyQfPVk4hy7i5aEd1U1M4jtkWfmKBTSkpgs",
  "key18": "3KC2wR3535WJsKY4x5ofBgJPCcCwnk6uRVzj2Gq6J9p7R9aNxGRzmx8vPcQyzXuZnxq7HY5TzkHSoRnaTbkdD49C",
  "key19": "SaKQzM9HMJV1v5bLN64mei2hCdkLC4mbtPs5wTtGhycqYk8ZRdfLLayx7YMabc2CgdQ3QcFYXSDXA31pvYewPbG",
  "key20": "4FpgxoDEw8voX2kE4hR3geKcgNLFoyz7EsfBmhV6oRcSCsELED9gPhsEXeSzTqHQ61xWM6jz3mKvM1TeQ8oQRy7a",
  "key21": "36Pmb5KBFaR65JzXgerTRhGADWxZTbBKCJygErG8UmxUsKJk363joWxabukhRjV8CXaUpyyFFfreP4EiJx12g8Hv",
  "key22": "2CjejH3KoV5W6brPLNfV587UaGKATtyH32UT2HLT9pqBfPtdCbPbLacWbEZcPG1U6nviBpkZgDLpfV7DWbpQXxAi",
  "key23": "2YXZQ4jncuUT6hkMhnVPpgbKxsUWGg7TR3waM3QGqSXrYorCkkdRyot2tjP7ELNkhUQ9NcQuRnSv82bRNZCD3CNW",
  "key24": "4NaVU3BxLGyFyRSisgQH5ZeQqRo5dAtP4me7z1EAgZ9AXUeBRfabj8kX5eKnzWG1BgB48dfqAsVm55nyhA42mMAc",
  "key25": "5s6eJEM8FeX5L3aQHSF51rZp4uobEquNajiPizxcK2dEX3wjMZ2Av8nQ3mpCPCNmXS2ActCZ2Gptv5iYP8rMrPQW",
  "key26": "38yowi9KkFp4PDJdGq1BJAyHrooYmDVNKZgLzghGdLmjRPyMCGhmLdetesQEpDJu7yAEwEaw44MduNM6eVV8Swkx",
  "key27": "2yqFQtPxaf6efQNoVVCyMj1EzwjGGEZNe5NEMiFRF2bzJdJR8ecdGzitewzhmyBtyRcExxKU9jJSUd3GV7oG2ZbL",
  "key28": "46oj2NeJickt7d7yLXMVJfzeM5QbxjhJ6UtaPC7rvSosuH8YwUirueVe9wY2MY27Qcd7z9QLaMcbspQhH8ecgrDJ",
  "key29": "5uXw9YQiJfQKRCraSzXXp7nEUGx59Kguzt5JgvNCm7y46Ft6yEZSFsfyYAVc8zAKac89VgLVxEubRZx8Dp1GHvqh",
  "key30": "2Q3RHQcyT2Y1eCYMAQ6QEHWbjXS2gbBkJJegQhEcQ1eaHXL1cMDFumwsM6zE9k6ogutSonAUe6FhCVFJuombKK2x",
  "key31": "2xnPg1nMUY1BhRhF4v4TyR67XbLv1wZTEyiX2jwK9iy4Xn7iFJWaH1n1c3EycxLEhUjpB1rYxAesckk7H95Afvhc",
  "key32": "2DQJBmFAFtNgfundWxpZfMXCcS4sFdyXnZ12aJiAabVcotw51G2DdmHjb9CBPFeNufpX1hTji14LkKZYhzAbYq3J",
  "key33": "kLKWLZdJ9C6dupuZDWkwHWrxa1eLzjrJjyTvbe9eXDpFi8eoc3tixRqiKUXgdF6aZ2xgKXFSWYiAjz4WGWUGATC",
  "key34": "4u4FCK7EkGgFYBRMi1jMn4r1sfh82PX3Uw2MmmvTAxGsMVktouojgfM2miCxwt3VCBPNE4s59vTvcjWYBxECwDWo",
  "key35": "5kiHvrQeArrnP2K441r6xF1MV4ChMve97uBoJmeEopfG8LEJddLKXX5Jnv8ywhBtQEfotY2Skymi4MmaAWYCyJTP",
  "key36": "tB6mYkyDuMZet76o9KbTVvkMQHuPNx1EEcHvdZDfuPUuk7ncarbLc9AAqaobSrsQWumn1nr74Wg8uzGFHQLBsPm",
  "key37": "3fvrkGWBCWfWLgyhoPozF3Gk2spvdFLufPtr4yz7yR4PDm99rfWSycAD18bgQibtJxbYK7iJqsLnajLd7tqVbQi7",
  "key38": "29zSp7y3bQAQxBCUBkNMMroEuWsWZJWg4s7iY4Ngpec5ve7aB2RWKnZEWgJXECV7gYs9mMWExEW8DNAnT3AnhtPg",
  "key39": "3G7bF67v4wwdSiY3Jso8C38ELgGBD2VErL1J9p3XNk5gGgAdKr1SQsd69ryuSsJAuEqJ4zEKPajoYp6gnw1ATFYx",
  "key40": "28rnUet1sLoRNpGLFpcepAxvGUd7yHCmoZdkjvTNa9j7PB1T3LZJqmxcK9MBEK7QmDN1e6iVXJgLrKdG1WNJjR29",
  "key41": "2pwFNxjmnoMtw5qRSG3r1WDay7WGH8zspeLS4uHP24U8NQL91aPg7acYSLF7tFLNjpGr1D7wgwJcQ6YxpiifPzDY",
  "key42": "J8t2axSFU4Wnf4PrngvKeK3Ug828pqXyQypacMmtxArN9TDSTegExmZYijR7Ei5w96quJCQ2eT3NtNsBbqWsX14",
  "key43": "4RLnp7kFSu7vtc7BU1rNJGe9NwVvdTtgp9hNt65YzV92hXDEjj39R5s2mmLjHJqTG1c8wSYHUene9ee69qepBB5T"
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
