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
    "4G2bu35fsHzLcMzDpDZBgWZWrrKKJyM9b6KRcVyeZaUnMgpBAjKPn56p82s1wWBfaeeP1Um6UR3X8AUVCWHqneQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62aEWb1GHTHarg1dLvmyyrMi3rXX3ESC53yBLmzBnXjybMLcxH4yJazMXis1Vhj94RfALTWzSjfvAG9MLMsBJc6J",
  "key1": "3uDYJztTxUd47GQXb5BXyPS9kV6KrU3TUZHGT4CUrRuhSjNXfo4Dr3daW6bTok2Zq6yi34HQKLNEJiBFoiJK2mtb",
  "key2": "47jse3Waa59keWLBZZH9b9vWdb6962TJYwV5D6B5BJeoSgGWKmCqee8SRuYTPHKPXU1gtLTjfEbPpzTZJGQmUcN7",
  "key3": "3Gj2YBUf4R61qr2KVdSu2dAzGw9t7XurVLhZCFLbV7HujjE9mDXeztmutpGdgFnSkkDRymWvbpsmUTvXGXAH3bhc",
  "key4": "227VrbhiX4QmPR8RHTV4vV1QUJ8zfCKaEf58CSaMcbMfDZVMoUncwMKWZnCnfxaS1X4c8rQsGq3vnFtQtdMv9SDN",
  "key5": "4nNrrs7Zi2KpyPZbDXmevMQvyy2Ftw3fUAG88wr9icvDcz4DE6qaEQhFQHRY884TrJdPiNPAVnbDsF1uApNUc9er",
  "key6": "QNrSR3UAbR4X7VnGXAdVgcDvYzveBCaMmyeJjbvyvS5VRAUUyGrz1rAMA5mK2SqhEEsaimv3KrV3A2WwzcHZdLk",
  "key7": "3HpvUNGPjDywNJ1coXkX5yVZGHhjTL3u52rFMPHkHvbVwiEj3G4xhPuqq9PwJN3mHo4fTEhwWHiWX8aCPHj37d4J",
  "key8": "4akimD99CXSvJidAvcXqFrXjM5tDHA6iCny1Cd5a8p3jaJf9FAY1QXHHZ8YZvg9ut724GLDvQzBYCnWA2CcKbweT",
  "key9": "5XTVRqggHimCYjvFTSXwGSiwMASfRTcZHcBRSgLRyQvYPrX39bfujsRcBSsvfdZ556Cd2z5dvaMmqYy2CQSYBw1Y",
  "key10": "3LjcnbWtzMffjH7MG7jeQgbYgNLh31iz6fV4pLMtrHp8dMsay4Nh7xoAGJv9z3cdxw2JHRUdcBXCMQ6SXY22R9DB",
  "key11": "49bv1ZKHCRgsamQYfxRg3beZWAMUGud7Lt4YMhbSUd1VnddJ8fh4tAwUTsZPesYTfyKwQgTZgMBgq58rAyqFqE3h",
  "key12": "3EeRPFsY5EViYpVY55LhXJrVzwGUWMCkk5rdHfyxbYHWCYfUqpeMgYAhfazBf9bh1n1pckJgP5sv4NFc4fsNjeE2",
  "key13": "vWJJ6Ym8heQtCJrx81TJcxcaDnaJsWb1HbVmMKe9Y83iNcyoqqqTh2sPCA13HaMgDcA3WzozxJHREPX9Xn5f7A1",
  "key14": "51Fb78XYstmUgqTtv59xdR4tK5FdPHwf9nLaYwFoBsdy8JX6ENtDYZ5xWFApZiTi4TxKSprEDtAH5zNk8NURSfHK",
  "key15": "5FaDJkiYE996W6NmEZiWe1TARbyiafGMXhCyj3WB1wMkAeiQq2nQ4uZBpdYAU2JXU5LbxHnrd8fLmmLEJs3Twrgw",
  "key16": "4KpcjERkVc8rEmxPHFPkfbzXwdiYuKuYus82KB6KPFvVu3ZMiKnxa71i7eBMjBELi6fuy7ajmsg47zTsw6YHSuPP",
  "key17": "oAF8qxe9mmnWegTFauMR78Lr9t2DAT6MRR1UCWN5V8bJAd1KRtfqYFC11GLMJV6RJkj8Ymno49ZfAKbCANqNwZN",
  "key18": "2L8reY2CBKkp5mGDqEviWe9r2M2pksqr152s1of5WJibEAZAio1JHBPUDTLuEMdaisbjLN2YaJpbf4CrRfSySDhr",
  "key19": "5nGC9BkyhfYkN2DGE4CyM6ehe3gpCN9bCiGLYdUiyGtmJbAbTT6Gw9byhvETe23VNzo7bdEQFwjfoBULcUcRRo8A",
  "key20": "25Vsd3QoveAP3BmkauQCzE35MdTSxXwjwh2oyX5zDpNc5WbHHZ8bTXS5HYkNu1vvs76yV2GMnwiJY9x3vDUBrBg2",
  "key21": "2NKVyRb4wWJdan7sAeWPWVKPTtEWsp1gTwP2hJULEbecNSeZzGgcF7G7rqcjdP3cdU2RUWp4sbfgyNUp6LtHxqPn",
  "key22": "3V4zkh8Hy62v7wDFSj7dtMS51HYPTNp5mHWUx7a4BzJ5xF59PVzhcBkTmi4PRJt1GmuBri7kPDymu9oCaXcVC4Wq",
  "key23": "2yh5m1EghzdAN1q22FTiBEzVKSnnNg3qJZ4gSHjT4gGJfeXL2Tw7mESpVcEYKDzSjg2gRAQUKujfpu7u6GxHACRv",
  "key24": "qxtoipfMDULFFddjA6a6seQGX5voNP7G6vrwypw2TwxoZE3Lq9w6jCpFKe3RyfDvhXzxwoFiMpGARp2CYm9bBF5",
  "key25": "319eEJvmUtfQFafSjzD8V5GDwaJ9GWdGWZ5vfNuQ6dcfE9mUUL9X8c1THKL8QiAL4yuT8r1b2CHPaSvq2BEgTTMK",
  "key26": "7cPKBKtW76Xx4E9reXXqfVt4idCT6nLP5yS4fKKuxFhzh9S8BsSQekDug68Z3hE6uSdxuYYRh2KSoZuZ1Cw5ui5",
  "key27": "55YJhYsJ59bcXUfkg2NP7wxzjDk4rkyRLr1yWMDWkJMQ365ukggFq8UVGQNxqaeR21rvisC2RGUW75rs2ZBw7fLK",
  "key28": "5P6xsvenJZLPYKduph5TaNzbVz449NEjtmr6nn6ocFWNU8MDFNbthsG5F1d6YzfzQ2yDCpqsRKL4zqnZ2rEWcThH",
  "key29": "3p43RjNh88dzzCYqmYmU7xZLxYQrXhgtxfMAkh8UzkYz81hY4bqsNyLamQWhRD8dsR8YgTNBBthJSGSQh3EPrG7N",
  "key30": "g2x6Frx33tAXvWKAiM1KocdqE9TsSL7mzhbzfCXGTthoYtCALPQahRbxXAw91tHuBYZhTtn6G2q7E9JRZqLK7Xn",
  "key31": "e96YEzkWGJRh5vnhPU5xhm2MsGKctc124HUtnM7nhVrDHB9BGMUgEaDfU5xaF3FpNtJKDcXnkBMRQwx3qHoAz9Z",
  "key32": "2zQQvbgCW978aF1ubqzV8h4MdQ46zbKtvgTDg3vHiiQfjX8PSmweH25qkLhjVpUVC5uJbGNVL4GVF6pt1y9Zuj7a",
  "key33": "5TcqK4tLNTjPZi4fZTjNCo7diXfpKbGd4ofJskCMhHmuShZ5ArKX4D6RvtMyF2cbRhqrd2TSKtgnR4r4SGtu9aV9",
  "key34": "4FGjRtLt4fBL7NbEy9Xm7ykVe6nb4jwpohxxwuZSiekCzwzokJaZhUq97Yem1F9jGxjTXY47NTJjkwpsTpkwhfnL",
  "key35": "2thEa5Da7Ky1ciMJuQNCgApwx2Tj3XrfirxucH1xo5QaDx2DfccDrzFxaSV9AF7trbxBfZAMydBkEBCqriNXmqP2",
  "key36": "44NLMSeWtqjiEvoLCi5sYi95guEArpRWFrEi7U3fd4PzoqWabdoyUrXsKHwH7DP9ksLQSv4Qq88Qvd8iyX1rip8q",
  "key37": "2Pt19cB3wQoMtPUe27oWVXLntjzQMXSTE21eRPE6ADK3oVYp4wBEeGFZj4vgx2NRfktUzsKcRG9Yx1aEjpyRTZKv",
  "key38": "2837Ts3XjhpciGaHyw2Pk4y2VpT5si5DV2jcB6KFh65BiQWYcQCFmp5dniD5VLWkvJ2fUBGEeWcfWrV63RrJ2Esy",
  "key39": "4LPq81hkNQ64w7fm8xe6NrPtf1J8vdiBem6zta67WRy2WCfw8cbA6b33wUrqZDwZPEq1xeXXT9TPL1S3ggUqoWCS",
  "key40": "byUtNDygVvJQzW9gVcEFc1YswXA8D6rLMDcwzjLA5MPTm1SF4QWrib5TZNCVNQXSrRhiUuJqHvaDDZw8erGHHAv",
  "key41": "3Cqrd22DtstHhKkQ51L2ezU3jQektde1Mhq4nvVHrvjdHPVDEzYGCsfJ7q59tDQ7ZdVE2ZBB1uyA6CqAM6AmTmvf",
  "key42": "4tDksYSuUNMmPvsHHCstVmqpA1YRWjyGjNzE9HHkXVubP2HR4W5nVcX7gwcwbYsaNor4Lg5nJZaR66to1wJ9wUG6",
  "key43": "xvUPfthkWqRzHarxBKhKGFzbVzuDgptebqRxPN9gpJ5W6Ssiv6UVVkeozvg29mDsUCnRXCRfwssqYn1C7DSkVyU",
  "key44": "38xsp77pF3V3msqtBUgck5NGmn97RFRM6Mz1K4mtLBFD1utAQCSJeRDp4gxvqGbTGkfvxyaYSTKN9Fe61BdEhiWy",
  "key45": "WfCPuHC4k7LRseGCBG9dQz7KNdXJ2CJw21EbYshoJT2ih2JsR1qUiyKmDn2QkdmjrXqfaLTY28KQbKTNbhP5dYu"
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
