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
    "3PB8fxF3eNRcqFkh9TAp4Az99FtiDhymgvzSGY3iHX2XweLEfusKYziVfKWFyTcuiXiCpMoLGG8TLS3JfQRjy3Ff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67oe1LdCVbieoQGmznYK9XDRYLsetTnWSXXZHpnjKcCufR2pch9MgYnto9Ac33VjtUqy4hvD2E8heECRrv2NVR6S",
  "key1": "4Wz2W8UL7C87jG4yBBVGexjVDS2jWBM6BDTvEk5EfcJtjtedKn2cJ9C2mDK5s6wDSvR3xFhaVuGrQu6SZqoeU4JY",
  "key2": "5qSuFUiwg95QtMFDSnnwBRidKGqvWtvM1hvE1Cjahqaaes3YXVvN9qLi2BZUcwRseMkQmTaxjp5DVTrxy3bD68Dn",
  "key3": "3BBZaD3Y53ST5N7cMdJW7Xui6aaAkG7zdRusE8bxruwtd9Y8hdadc3RTtzsLTL9U6BjEewuJVGB3U2DmfSAEXG6J",
  "key4": "2knc52xgsQEfgPJcYtL82gMxLpS1QytAsZvPc8DF8vvxVpBZfun2zYaBsCB7MSL4FN9NvvUL18R7ikSZXXTXUeaT",
  "key5": "3vVW16z5wx72XQAiYsC44Pm3wJcbLoHpCZ8YPtD9T5g1VT41j1HkJMAQnr32DfnT2d2aMeQazSH3DTFGsqXxzAgW",
  "key6": "3JGhNDx9yiHRGJFwbVg4C6uqCh6GeZVQA37QTDr94PqmZnve4SsssaWkXXXJTYH1uSQBW1Noq4Q7uGV4zxigWPEN",
  "key7": "2bUV4TCLGYGCT8EdJnvZYXACDRQcMnQXLnaLQnw83cdnu1J1JEsbeNG73BsdfXQ1hGWb99MaadEjuw4XJDnGV3PW",
  "key8": "55AxVkkZNPrrzoA76CNWQagCVZDJQmzajBbZeGDSJLx67ywYgizQW38TuHYnLx2wsj8SpzRQa4mow3FLkPP2poUb",
  "key9": "3RmXLcaHzaWDTCPAJ1t9ivDX43KhoYkwgu2bfyd7iTKYCXkji2fn7SuJwCWSY1N5C7paZ6g7cuyr6Zk59XoF3FbU",
  "key10": "38UiAprKja7cZfpPmwC9QC1xsGEkwdDqTL2r26wK3xEvC3rCFMdkii2sm9V4MPVHgBoXpheugdmKjbmAyCLrVUs3",
  "key11": "5Fs9LwAWTDiaEbkfMGrAfA1uKHYwYp4RZfqrtqY1i3Moj7HBsV8qvAvu8j11s3A9U3Cp1w9ko2bKSRXXXcHHcDMw",
  "key12": "3S2mL6q2FBPTNCf7S4UbrygwnQewVhmwvkYtcnQiHViwJWcfQoHqMFEMPLrBHLsJBPjFrmY5XBC9BtM2QfywQ792",
  "key13": "vhbE7RS6ioHsVwoZk4Mv9fLCBSPEcN4mAQdhWeyQufLon8qobdcShExTD6v2F3FnZBdwJpmsfcyBNX2hHBJ21hX",
  "key14": "2jexmpkRk4wB1JdggKjALBcU9WHvCGDe5vRHnSR2M46ikj5nkraP9SNsihfhZCcDak3NkWZ5zxqcyM78wQpV2ss6",
  "key15": "4A8xaCNq7PGwGha67cQofrkcdWRUafJAefqYoUK6uvcSr1q7xJ9mUSQbAesJMpEU3SXvBRzY5qsm3r3D9uMzZ2up",
  "key16": "3APYq1d3oJow6QLiqzzshSU55TCmF6GdXHiBSXeANyNaoLUcAEyGUEN2a9798BSkgicprkHZVTRAbxgCdBo4VqJS",
  "key17": "5bdsLV1jhWqFsuqNiMKCimPMY27HdiNFmsfbLH5HGzA8QmJNHuQtXRDexDfSQ5MPeBUyNGbaD4VDdoVoWorB8Lup",
  "key18": "5XWNWPBzG3M4tjBU4oc3BSiJCMG6oLLkMfcFVq6ouUiJocC9ZgCy2UZJedkfZX9tvq1Qcw29xyaETHuFFg4bL5QC",
  "key19": "3Cj96WvgoSrr8GWj8Q6K3eNhdX2tnG7SkovZBB92TMRvuvXQeunNmNGwqVtFbAYMJPE8A9Agt92QDVRwjbxDjcqS",
  "key20": "5JXyE87iy4AFzKdtg2eTrdARDh8YadyXWZgyRAT4gcmekGwNwtNGwkoCoPvTwRwpFTP2vzr5MdqFYonf2iyhKErc",
  "key21": "39fk8fc7woMMuPg23MUao4RLxZVV9GetFbadatQ3Kaq1YeoReySRik535NuZQEFYNQ94DKZZB7VF9yPyYNEAJv5a",
  "key22": "3TwhBgVVJEGWnMuq5B9U2beTS8RHbNKspQLPWGRkANAtcbqY3CrQnqjZ5B5jcjKuqXnLkSovCVA7qDXtKFjuZaRN",
  "key23": "5bVKmd76v76BVDKccSY8jRwGg7UoGrc3vcgpJiq8D35w8bVJtTP6akurmG1Zn2ZEqdesWoNZdSgjtZxpKBZQz3uQ",
  "key24": "4F5f5TCYJdNMZJ7SEJWM9PCkVsjfMMQNY1x89S6cCPP3DsT2DHZP2858c7myyBVKbgM59vyNe4DbPdonBSi72Aga",
  "key25": "rEi6Sy8TmgE2xpSCFPNqBBkLxT1HovTrWC6y8EE6TCVtRx5EiDefC2JxVcvM6mYzAa6UYvfkb7x7SFUgaMipvB1",
  "key26": "2HLuKXanAwjwhAnQA8Hup1MuXVK2uQymg6WdffFUYj56hpqxamqowLMK4eM5o53FaKmRF13EzdEDCHAQi4reBi6K",
  "key27": "3og8qiXctTYf3yGaPWGihmC5wK9vV6nc1fLhZeCYe5NnneKCRnRgB9P9gFZs37RpTEMu9LUWoBFoPt7cuqWjKJvB",
  "key28": "3pSDhybBZBMEeo8DwUYY35a54v9Jz84KKnqJtrPwEkTUKdTdWn93RX1sVessV1QTCxMFjawpAeCye2FcwLFXJ9d1",
  "key29": "S44frDGbcqkT6AEbjhMF8cohdTcmMUteBFhQ9XXXGb9MkEaQbb4z9emtpD7LGLpu5BvTJM8JuPxssD1XWoqJDHx",
  "key30": "3u74a2R6VJRLJ6pk2MoMxQvHfWWPwheoAJ4F2MD9yqjymKXjY6UV3nGt28838WwQxkLmR5W2fMLbro9vVFYX48UJ",
  "key31": "J13Kbery5SSTXGzWDiKxhK29Fs21V5AXknr5LLHBLjZowGVtuBXsfxd2vZGbySzPNhG4uMDNDf75noHmPqccPwH",
  "key32": "35oaobWVMm8DyRuDBZV9FxGJdopwGumXnTvKExiA1UA9vr5cfdfHVETntJ5LmFkTXh5sZjVDn4gXvi4otPAZPKXo",
  "key33": "2zZJH4LLBkjdXuH5harrYFUUy47ENUYbNC2imoMW15tzBSAmvRAqPFUwfCY6UnZ3xUcSa2XJMtCYQ8QK55jopDmn",
  "key34": "4TxXGqiJUy5Zt24UM3ykq5W7EvTCjU9YhLR6GM4QcLrhUzaiBTwjpnnq9rwhEdFcnvWRdgQUfGSgyjK7vLcRvfX2",
  "key35": "5TDzUn5pR28Uuu24f8f2pW5muiZhJvzngE6AKLq1voaCsUfan6EZdhS68xsXG19VbtCooenASFYksrnCTSWt1gxX",
  "key36": "4NndizDNcLrLysv6iSFukZALuY3KWLxoCKrnYTQBGC14BGqceLp7nYgSVWDa4f88WHHUdtRig9qfBH4zXs6BNkfX",
  "key37": "3CAAKqg8PZ2SZZLnS6Hw3uakU4k7gjFxJqjpbG7QoQ6FYFpecubBQR2cT1HwFwhKCHmwYdagpmqkT5tbuKpMjNNy",
  "key38": "5u1rW1d7tTNiKNEBEd1V2yz5FCGSsP85jAfbqZfBwoC6FWeHqx8LSQcKeZEEmH9kQU2aTuKiaVKdwqHN8mXHsaz1"
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
