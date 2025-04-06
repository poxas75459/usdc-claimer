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
    "5CbcQSP4mNTrwvombzqRXmFzoHiTd7b1HUJdp2czWJiwcx5T7T1JPfP1nQ2uooDqjWAFeURwQHC5CST1nBbsrymG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mZeEhE3CqqohQyiTsH4BTVxqn35MyZijuz2F8HDvfPn3wkw3vUY2iyERvLDXqMfhcXmSEyrHXHF96CyemK99DxF",
  "key1": "3xzKFC6swtwwo4SmqrthtwfUmx3futP5UY4HWqBmuwXWoS5RgPTYi3TuMtW1YEsXWmv7vu9muqtFUt4D3E3AK5Q6",
  "key2": "3aKssFJh11zsiQb7p4zPqQB7pRuq29zKCr2uzjnVx5pfcZ5678HDzk3B3pK8BKrQVn4LfyJWw5kMsNRPpshG5uuH",
  "key3": "2zNznHuVwXVfjJnR2QLGnVd3B1BWnUjqpktpGapmrdKx6m8gK3h3TwH2GzCGazYmFTi1k6fxm6e91xsdJLSbYb1p",
  "key4": "5zvRSLvc6kVTXQt5xfxBZ1CzS4QY7WkfVm9DKGNvj6GwEZ5Gmr8aLaXQsoSF5evjjD7q3MXDfe4Yzmdwtz4koTCU",
  "key5": "5WSbzNFpDGGJdoRu7CqXCp9kVRSx9WDu2s6BmJQGSjoZ5E9hF6faLPYknBDfJZL8Cg2zv1wK8PPq47V9xL2oAVAV",
  "key6": "3u6NZETy8bLTbhpKXMkA6Vz57vMwj3b4qHuXZvgLPt3k65Z9JSkAsy9yDw26MUi7C9VfXruqWtGcogbuw9HbMAjp",
  "key7": "V4s5nRZLUn9hTW4DYukqR4cd1d8FJupkEbN1ntjHeBRiyCNVhoNwMtdb2ZhxD75uJDuB3YcisqsrXhcvc5bUv7h",
  "key8": "5hkBzwZHakGnjE3V3FiHJMqxBjK5sZ3yadMuH4U7Mopdn6jmHtBpgkM2ESsuev4mhFgrtty7awDT5zwejCzLQwab",
  "key9": "UC7QDxUhdrDA2Tk9YaiUkV7TVRVW1RwNzJj4JvTRVErLZ68CCD3qZqLzsE1DaApzkToysJ6Q1Nho5LioJgV2zZR",
  "key10": "rSAScFzCxFbHz7PFSWyRhpbUVfnSGQojs3QAfT24i6dyCRZRsmandc7LqqcVHRcXh31k2q1cN5Bpxu2sUi53uQk",
  "key11": "2upwmL3jCicSFcL8rQ7dF7ydKEcFbR2UZa6Pv5RhMxRHS7EgzYNvaikXYiu3MSqh9BvaKnBUcQQ8AzQGRksj34b1",
  "key12": "2LneGkR7yPWLiJw5SFKcntL8Dt6j32v9ppVVmaA5Pqo6zdHjJfCNf1exVuhPJpEBHaQuSQpSCkbw9X3oz2tPXbSD",
  "key13": "vnS9FaWyrqp5S1SXFkA82trr647UFUkU8Ao5biKTD9LeXhEwjfcBtrLUKiB8frTUexWDQrtPUJePCbWQQrGyCDx",
  "key14": "31RbvEsekCaHwkubbq6s4Mb7WaEUFDfyisKP95xG2NpgYFmwarYsrBQhDcshEWbtERfdoEoKJU89FQFooWEwhB6v",
  "key15": "2dw3XLmqQxiz9TEWs92qBd5fAQzpiqrLJ7ppDX4GCWyhSkJNeoTkVD9NSJjjt31YS9qBsDCPJmXfwvfqchCYA1xP",
  "key16": "2NXtq7eqCPgDSHehySrb9evLpenuubvm754t4gsYBfbzZvZn98yJvACz16cQBVQeFnqagdWHcdoPkCLf5gE3ZHtx",
  "key17": "Fx2DHhAe9W4whyFqHuNGtFEq7fTKLMCSs3ZxRTPHQ8pC4MmeJtLyAKFBLQq6NMW33J67jbQVSYptTSdg2SBju1i",
  "key18": "3QBzg1q9FLhZKqXRZjfBqERT1oXkj44XKRY53r1FhEcNK5BSffXwCMxTVoegD1dtwyNyDYYnofUZdMVnpyHwRPwR",
  "key19": "Fd4Jt9BQXuQ6ZxANixTVox2mXV8zcyYyY5PviXfGCvaBjzEKTMF76PxEzoN3kkoHTmrwkubbTmi8oT9fXLvKXWQ",
  "key20": "bsAH59eoZPt7RvU2g7FjyFRmRQogW56YnKYuvzVCJbeaVbas58G4ogz3D69pRxQnRQS9q3s6JnTMwCixyu6XgBd",
  "key21": "3jqvq3JZ4iWCcZwmoa4arSH36CHNDoPrnYeeeV8RGfgSKodVva4djMhvVBvSFT1hWifHhFEbLzdQR5nWYpTgRvZQ",
  "key22": "3QUuGjvs5WvfEcHgjzVHCer2KrM4DdeTMgVqeMrAGAY3hBBGauHofHtGrEvASr3AGLXxuCf7jmfsT6aRMP8MUJoU",
  "key23": "5iFCNEbMJvtzXR6rVNL7nfSJuBcPqdT3pTRumuG5HuWpRz1EUBE45htv5dmp8vfcXhS4ytYem29dEtwM11AAxak2",
  "key24": "5FzME1NiWM8b9ukcw5tKPAvK7WDp78YTRdResSJf6jbqQKtdropryXCWeiUnCS1NZc8Eah55xEPy9DQqoENR8Xnj",
  "key25": "2cnpNP7REKCkCuGMuzVzE1dnBNbFS7mFjrfyRE6VejrRH5LBTTZA9QvfB235yBD4upfTN3FixUnxSvvXBFP2UJ3o",
  "key26": "5RxyJrVSfBssGZBcrXKHWNv1qnz3Yy91FjY9drReRPHJh1m3Bc1Vi6XnAE9jKAZbVPuEBALEMLBmxUjHfxCdyJWM",
  "key27": "5cqPhEbLm8JikiKUeN2WpHiRKYFyM4wF2BWTFvh7GdcETqkw1xF6i2gTGjCCHpz8DVfvPvq5s6ja57FnAWmB5oPq",
  "key28": "J4Ujf5tE5rR1G8e4Ym5WYZTvBmxHNJwNfD89u9k5nDHwN3sJMncAEEJTgpMBdxZh4sbuvsS1eLk1PUvDPyaSBPZ",
  "key29": "2DemLRL471xDdsDo4rrgQGnm6jYCm44i9Z5aSQFLKRbRmio1xjjBh5GZ3AACb3wkp59Bc79kzf4TJmNbc95bf5q8",
  "key30": "3yWKxHteepQ3U9cDZKn7LsXQSLHbA6jKNtujn5c3fghGLagAhUT6er58QEALydFXLtGjbDsZGdx5Ta3ywAiH4jzy",
  "key31": "5i4MKDcV2BMSXB2aNyyxp7jJaAx4ZMBkMZMeGgsyFrW1ecg9JPRWtQuNiDCW93QA2XQjCHMzd8SAUHcGHbWiwD31",
  "key32": "ND6RjGFaXxME2VvWZXBtP8F1JDE6uB2ZmAYbM59HK6aDFoDydgKJ7juUgxWzBM8iiXn1znUMnvHS28Jt4R2gbJD",
  "key33": "5wsZ9kXEZceNXwKiSNnQQNXiUz9GP2ibzRgW3kTiDRsURHhy9XrGcMv6NLxWYo4TNmYWKW3pUShLEfpiyk1S3Jyz",
  "key34": "3Ec7Pzxqz8vNXxeejRaTc8jQAUDcJvphPUmjEoukt4KXpd8HHeEPj73FNMT6uamWRuNBBi4n1Sza3QzVnJyXvSmW",
  "key35": "5J6UDuV2N23BELNWbpdsAmx7F6uQKRe2WnbzJmsfeDTg7Mz6fRsT1TeBLSjfXYXKjcrLULdUSj6q6pXcwvcTa7TM",
  "key36": "3eeq5NnQk1McUXE3WSsGawG7TsEzWFCWR2yyZUgTf8NTruYCD3uMRWpCac1WtV31BuA9TVM6Yh3YkATYLtDsC298",
  "key37": "2Zej6Gj4zLbXTT4eZ8X75iot48qXWwnL5gLPpnbnkN3k6cK9DPyhEwD1tovzgceEycrciGVw6edmn71DthSFLizk",
  "key38": "4wuYfK8zr8PGhX2ALUPA9cYCjwmJHV9hynXajoA7nhU2JrNQEWkrgeLzBG8SEndai191sdNZsH3RVfJUbbr2SkSj",
  "key39": "3afwvqoeFjWzR71JoNRi49mwhbA9XwcRrSwiup2MwGPVj9FrS9ANyzdmYmmE2mhctsKZQtZqSMCLgTuVLcFUpDLe",
  "key40": "2AVfYW4gzf8dz5gRQhvhQyENyps5LmJoCvmc8nYNX5J2YJnk56fQnuoabwQLx5SvfxxgG5ZQiXgh8gzmYsetFTYj",
  "key41": "4ayfMaZTgDx9TjuovW9DvhVhxNusRu3bdXCr6NYH8awqD4NwzjpvgjRcs3VbP8NDFM2bSKiM7r3Ec37WokB7oCBB",
  "key42": "3wVavXv2eu4HyYRR3Miiun5hX1b6vtVc5eFiyEAQDxUBJHLv24wiCLTyqQfyaAuNuAumLtfMtsmCAnxDn1bGs24H",
  "key43": "2pcjZrWJDhSwpBQCMD4xp71gyoG9uskk1T6FVL5FoBzARzWsoAxMiCAY6ni6XtaFsjf2PS347eeP9Ta2JtyxEaYg",
  "key44": "Rt12VSB5eCLiEaoskyntZeusDwzyZm911W3B6N4vkrp2MuKEReurePyt6LuR55Fi4sswf2XfJ9rXPJxQbqcXmjY",
  "key45": "65gagrpHSJxhshanggR2X59tVxvmH5Gra6oguM5LYKCeKks2iYFPz8vgWvJ7U2wK9isGJ5e1DrZfkjAwWEScAPSb",
  "key46": "45pSWCU1VKtuiEH6ubUeAhqccfrFKpJ86Tu2cDf5PPwkmiiYHe7HnwUErQ3C6Z7Q3BGJRzHwsoZd9JNsMkD92Yub",
  "key47": "3Rs6p8AS6W8gDdFwFsrSjJy4j4rpNP4sqBmF1dfXQtcwujgz4jedcZhzT9U6fRMJhS47vUc47sTF35BMLmFQmoXW"
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
