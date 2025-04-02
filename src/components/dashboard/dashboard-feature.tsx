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
    "52wqskStZQdtMYXZDmLmZwGQ8qe2oknRsmq8rnpKFeX2Aawk7CFL2VGevRMVXXmaEHfBNN4GbZAnVwXUY5GHTtCs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SKURHZjeVKw43HfcGeaZw2oDbzx4QrmcWa8tcUa4n7BZrEznoZCP8vduywaGNgA1C1Jmeccuq6dFDP1HCBd1djv",
  "key1": "ahqdumf9z73dqGhpwmUuLoLLSCDmRtGdpxoVMY6bpbgqGJ2LVgV8erhwEfa3GPgPhFP7AtauEtcLgmo6xGJSzGN",
  "key2": "4bdLt6WntnF8DibDQsbYn63NiHvCUVbYC1JQ7W1xtrpESPJgxsL6B9HtVDvXT75nPWp2HPVD9417pTVDJGzKUFrE",
  "key3": "2zJYYHyq61ZDkkteCQ8YLLprUyjJosvN92uzLbueyD6EcSrcujpgVFaGy7d1MMX5FBb2zWVudWK9NxSqRt9Yg9yp",
  "key4": "4yZaEqLiSVe6zS8T81FYMyebPEzdc46cbtpwng7TEhjt6hGz4eWhsAZzpVyRquEyBu5ScqacvJ638GN9LmdsvgPK",
  "key5": "4YLs77YSiCXpCmkiA43BJ8E4JQSTTvGVWDYW6LVnki1bdJAj4TsVsW4NjKKpnanUyutWNWEWAssF8oEGUcMFsGaQ",
  "key6": "5TZFAPhY4SvcYBnVuAusrb6n9tVicaSY6gAfq3PkTu3jwddgQMQ2t8gDJjkA1EiM4jUmQDs8BtXFhFH3WXtabbyZ",
  "key7": "41QJ8b781H42L41sJjcyU4hbrMeufc9cFevypRduVJuLUZbpTUdWrqJ6Ak2ck4bypT97XzxxKuWcuY86WEPnUb6N",
  "key8": "5AG91qg2RYnKjHUUbxZfRanXEn76b9And5LdgaJAkwjMyjTZnMqcyn2L6DxZj5qsJ4y8F8ogv1vj5XFPJeqNytRE",
  "key9": "3aN8q2r9KZXgWwW3k1mYHLA4ELSZNW6q946LRx1YYgqTrveiBouygvNgVU9rGjPpkc8ThAfi5Zmbbs6fkJVmyYbG",
  "key10": "46BKf2akKJFbC94iD44iQvh9T2RYscxZEteh3Kd3KDxYM59eoXa4H9aA44LHuBK6vt2hfPJ56wECeqc7qonYFxKP",
  "key11": "4siqVnM1Cii3nJ3hfpsYenBejmckszLYMJM7anXspvXebweyBhDXGuAjnqebsZC9PNXsHT3z5RyJh5JCWNio4TXu",
  "key12": "diq1tt5dScwQvibT35t18G46dUXDtTkoC2dQBzroJq77f3Bq152VJnqMYLjcpM3w5T1CLJYRtA5EMvzfTeDVFv2",
  "key13": "S6w9M5yvQXDLV2c64MMu2CCsT2MjZrJBDdYruQVE3GdBuz4z7aDdUjmH4u2G4kJMMZJiob1Ssv7oaiwxF9BavV5",
  "key14": "2dm2iHStUfVT4Zi4s2QYGeFzDEjgMgwapTmmJ6YcYVjFGQcRX9gTh5neJHdnMrfm3r7JaPor8SWQQhvchMgjKSrF",
  "key15": "3jMu6vfqb6Nndfc6fVkAKBML4idubDsPmifGYA258KWuefZK2rA9RikTbdVLUeLzu4F67UaQn2njFbzjnGD9TfAJ",
  "key16": "mEmtGBrPfez4eyDstN9Z8mnYWPToDP2eATqcfjNeKCCq5jRCsUYn1eixyotF3RAR54apbreKoPPYFiRZFfjnUYi",
  "key17": "2KQBbhEjDZsJNgzBvMEqrjXHbKCjFaQfHAG1LfjSEEPu4XSyZzcHEqMARAUqrdWDnPX7HarSd5cCDQNCsUvUVXJo",
  "key18": "343gtj2rR6xUBDwZ7mVCwgm9pC5tNecQES5odQvE2X7p7UHHjewixhdTqMsYK4mPiihWwuLCMSEudMpFMuvr5YxH",
  "key19": "57y7C36MK9p94VSrwPRavuschUruTCE7kDTSMhq8p2sG6CaMAe3GZTcWVPGuzrm3kCNVHfzU62p1CMGwghENisuw",
  "key20": "3kfoM3DjeDLnEiiCeQakQG79powqAJbBNEvfYAkFch13MoBA8hYsCNfYFobif9fVwQdouZ9Xth6PYg3bA7AZeRg7",
  "key21": "3m1va4x2zBCo6iWB87bf3APAmPykA9Jg6mTKi3R3kmCw7fiMtGNDDbvj18HGvne7QnoAFkf53FG6xRsvkdpx3mWM",
  "key22": "4eFoRMd191rRTq2ZWN9yH586LEjUuTDUcHMnX9tseqmwCGQQ8P3rpiFPqyPAHiydeBVC9d56YEMYUvqg7zEW1Nu2",
  "key23": "3TKHDHadQ8L7L8aoJRsRSJ2RteueENeyVMKxW7BoHLZcytjV3WdqVGshn9U2HqJpbw7JU71u8HU32jyvN3BZSqPj",
  "key24": "2qbZy1yZasfrtVBFvSyPTuPraWt74wiqFXr3CXiGqvQcJDaadfSQBmBzZU89rZRuzAdAP41N3Vn3ae7J8E47iXzx",
  "key25": "4aYFfbAtmdDN9ZioAHz9dJ4KSYvcs6NzRqYdPCGtffgfLoDv58dSYsu5QQMk28bu8PfpMVw7cRzdNwEZKhPu3KFe",
  "key26": "cWx3W193Ed1fR2aFhbtZs4ykg94nEHhMiUMSgnRfUD7SA6kqEeCL5VxN55cGWaPTFpE8RTec6N9hu4MFy6WBJUE",
  "key27": "291uKzgfPGJdH7dco19MLgx2gXbCmcrFt8m72pD566bJQAZtyRPvVbNawcEfnjvLSdzRXV2eGUHxhV1WhpupYHWE",
  "key28": "5Mm7anKRiMbQx36Di6tkj8amZXyGjMLerd1NMqHRPmJJV4RhBPKvgfYTxBTx2JWDeY8J2LMDBAM7VWi3XdbwCBeP",
  "key29": "4s5AKuCnce6cMM3F8999pXte65KmApdFbhovxVrfL5fDoDZdEhTJnuMWG2CLJi7gviCFTHeKrZ275RMCJPvxgpRq",
  "key30": "67KrWS3vRed3VYqPL6BvDiMcxyfgQRKyD1Uk79WKQyp3vAVkrTh9KhLLX36tMTdSMLkv2noQEkmHTvMGrUtVurf5",
  "key31": "4yMYb7BLoDeh2hvT7WeRc4CSFpq95Wa9khyBVcH3G3kBGc78vhVniAQAFNdM7n8zR1xn6HYLXU2oc8Y3gVHto1Cw",
  "key32": "3Jvrm2mZ2Q63Hiq5U95Ti4hoVcK9JfbU4LoGefWRgZ6NL6gmCDZLxFrxmM9E2g7JmpjgDpzUNrTkn3BhTv64aSiU",
  "key33": "3gB8oWXwVaKeHwRw5XsCezcCEzkkJVAvKHDpnBvsMnc1gwB6RjeQ4XsYsrkLbPRg5jrcDPAVgmMynKBVLbQxYbrm",
  "key34": "5DYFU9UYZfYaRZBwXZKaa3vG2Jomn7eJmGfZCycmeJ2Skxz1A6xP8FXbdTAcdcpggypnuv2io4NJkQMqQgRYqBXj"
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
