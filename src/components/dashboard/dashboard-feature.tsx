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
    "3JkeRVDnnNucPdT634NcaRwZdEsqk55UD2hxnQ13GnCBrQzSyTeu7AUdRWXVmXsVZ82RbtUdL7VkDKvRvkv1hAbE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "422PuaPwaL1F4rmo48uETnhXAhWvAoHcx2fHZ5pbwMjU6zjnaRqf2tNFQWa57C7zZrffFqPoqEkFXARg8XdzGMYB",
  "key1": "49pj5RfdcVFw5hLMkdtGh5W2Sxsiyn5dEbKTnVvpYiokGygL7semy1SatoKzhSHYGZkMGWwEWBGTirNUJYeYPkE6",
  "key2": "2oJSF7a7aR2XFCiRqpbho9tjjFL2kFbN2j6BbdK72QKcbe1U3AkjzaFyrKaYnM5bJfWWY8Kj4cdqLJtv7nVznG1x",
  "key3": "3ZNy6p4uL7mydbR2ToFRD4iSsWNoY7AkvX6MSJcVpXFpwqJz3nPi9NS3FZWSwPaE5drqr6Ds9qFEaEKjtpeTmLqq",
  "key4": "4afvthHoZ3Uy7dknAF2qYo6JuGpmpKonhA5PpYS8Zqk8amqWEx3VFLZEGTBZefb9AbSyLSbNhGgPJieeojkSh3g6",
  "key5": "2nJ5Ag67ABhqiY4KmTgmVf6dJNCSFRFsXAfp1AjuXoTpDcXjQs1RZBMHMm6m22sFWzdMsDwwL9XViZsYizoALjUa",
  "key6": "aTv6fnPzuLARV8mPhuXuYzLtemniu74brfr1FiFp2su1SWsWtgfZJqPMHr1jJd3G7acW4ykwRZRJL21Tz4pXAAF",
  "key7": "54Jr4Svx8YxRmoo6v5v3RjESEvcYK96xpUfxnJ8x19yGRbArDXW2aV7DA6pkk36aNtiv7hWLA1BPZwH2ZXirTL2A",
  "key8": "2bszstFherXxjnGWK4jfaTiQZj4YDKHUcXUWHWw6gKQvCY6ozVCkRKN1XeMDhpJ2FwCfQ8rDXNH1pChynjRhKvb3",
  "key9": "3Jc5EQk5rcucDTZqPCWQfRFiikQYwGoS79Eqx9NNLkK5asAYMh3VXsHvxsCyQs6nAsqxjAXYf5uCPNbfML7FXmdN",
  "key10": "4bP5Mdzo8UyYdHUF5SqxiqWs7g7HFSSvwYiPbXTHeT1M3jPvUD9JeW9hJGNeqMMdwE91psCqkv4GiE8MsK7RpTpJ",
  "key11": "4vpHq5pDhAgpSpVTVgeVRVhwYh9BCrWzZwWZGTRTDJ8tvFs4YxqkdBDrU9gGtAs5zzoKcPgM3MsnnPTXuACmxjvv",
  "key12": "5bNHuUP2oZ9rxhavGSoVC1oy8dT3YfWM9sKVDLkqVsAX1ZEtFAx793FzwHhVhtp4QZnFA7Q2jq6An5YbpvkV4AmA",
  "key13": "nedUWHzReJbNCtdZ4rMLTowbzcMTQtL7mefzWw6FHwU8bce3Fye8M5JyEjRtZtpqTZJS1qPLSCUtk5qTH8uriB1",
  "key14": "GJnwmPPbWm9rgshJoYFQyS6Xbi8smDLs5YamPnFgsZupr7F9FiRtb8dAA4HWfWaxCMV28gS62oKL1JKBt8ainZQ",
  "key15": "3qpbr2a26u4FQtG7JfhRJvWENcy11GF5oG4vEN1Q7etB9dfEMSGsn577q4fijaQS9p9qhp4ZC9Y2T4RBppBMebd9",
  "key16": "bEpZMPSJogZut1aBdQDysT7v2bwZU2oCawhf1ThCxqF5NmLHUnaXiCwK5Z5fTtEWbowyN8a8u6qNLaSghLeoNth",
  "key17": "qqX1wNQef2wB35PbbxQwdYSpjwHRi7EeajvrCLnihDzEWZ29TDhndmwFRKeZkih8k1qKqehJTCS8kyVnqdUn7d9",
  "key18": "5WxmfY2q19725JtuDHDTTmVEyDeVSBSoRgmMxYnvEu8RHPNMUV37xzTXzWSKqs9JPHShETqDhn8SsbXefep2fWkf",
  "key19": "FNH86LRZqJoJgVscxcUjvdtTfwyBQ74HzPMdLduCuGPxmncY1xZFqi5zzm2c1X6xbVn9u9BTFheV73Q3wCrgzKr",
  "key20": "4HuiVQb1rWY5SG2nAPdfxHQvAzK1vX1658VHj5omZkvbg7dCmZv2RELnGMLuA4xdfMofM3hgjzHSa86ZVFboiBkw",
  "key21": "51LPmC3bJNfsHMS1Vz9SNJbGtJcBHSGVCHXUzVA8GCxR2M2cu7v8nMjfoY6SEeFzuSEmV8vMnjstyhvqeDVBKvV6",
  "key22": "4yj2tfwLnX9SsgQuaYkkVCS5WiywGCr1fN3W28XWsgJYD98QxfQLuMW6T33HKF1ezA8r4VebVoUEyiLkBDYM7CYE",
  "key23": "22GRpyj2uxspYWSUpZJrUqpiYibnCx4FFULy748gkiCtDSVwsTzfJtcvYAYtnBza2mopV9TDZeHkGPQ3uiASsHti",
  "key24": "66gK4xGEi3riLWPEc9sMfKnRQnKMCFMHuKwmVpBUTBf958aPoTDU8zwzNGh5A25KoF3SHXJ2nQ7mLZZwjn7QnLxy",
  "key25": "3a6vVQCYz5Bj6snynDMw6F3PVCDdQenf4cr6xgvH2pucM8CJtM74KdUXG9op3MHfNw7fX2Qhq5j1QEW4EA3PLN6V",
  "key26": "2ketrhkxSVmDGQiS98MCweGnDCQ49RTYw5uotkNNtg2HZNMv6EY53PnWKns9qhG5g6fZLHTpVP2Xovn4UpbxcVtt",
  "key27": "3ryQAiDQJGtDmeBUhmoUhscU3QLguk3Rz9SDgGXXzJKrs1Y22jL8ya5ahW2P1u71XyvZ52pmhLCbhpF3ntBkdbti",
  "key28": "2WBKtChrTk961aRKscgTE2cQkjS7oUk8nQcr3aMdqBw1RrcNt9Met1brvpUpBQwu1yESgktd6fZFaW34L2oJaS43",
  "key29": "2yDJRHRuR1ysLMr1FkVHAkqmLiwHeQnU13TaCfBLMkfmfCAz4YM8R7qpbTbxHyAyWzDDxyNvZLtSRuctUi1c1L7T",
  "key30": "471UbJQ4Z2cBYJ6eCWVGE5SjnH5mH3unn4zDweHVhPW9yhHDoGpjKnThkttG9hGG84oUECsYEFdFQH8XazFytiZo",
  "key31": "4PieMn4VkQSnSkAnPu82FVam9VghAWw2oRqAqJMd2hZFbFGmfHtPSf6QCvU6trQetKbEVHY5xRvNkLKyxK1AkAvL",
  "key32": "4arzQRHLMTwTUuETw3G1W5RPRSwnmD4hbaAVmU7uyzX6mvC2nj9mkcdSHr1LtL1sTRKcaGRRyDuDxSKVrDHAzVMq",
  "key33": "5XxBDyZcKfwLyhN3vPPGzNDxYueMgJu4J7uzfMAySFSj4EJgW86odP1cp5KXHib8bpnC2entXf2hUiAAy3rWAY26",
  "key34": "3V4vbtpFzkuxZzZAgUPTd9XZAsrb8MexR2K6acySVJcNHLGQ3x63PSDqFqEekcbVryu8ubmNn8A1RiTdEjqoiGJV",
  "key35": "55DAFZ1DhfGaFDUUZY332mumFFvso5BwRphxsSxrUDeMnXxktgdHgNknEWssgoWLUNFH4ENzbyHQi4Vfq4y9T1Vg",
  "key36": "2nELz7gwdgfHabDXCosCcYXTH3wh87cGLiSg3gHetzKsof7gqtYkQMbRMTKA2hngDefMkVm9RvMkS9KbfUnG4VBw",
  "key37": "28peTp5JeXZzVSfGEiGpmggQ2sxGvbprnBUgYc72MFJRmXUJFSPifVh5EMxCa84UM4miQT15cLz7KN18kjVH9LMJ",
  "key38": "4tJKBZFP9SwwhpGJXtPE76Bk1VgkdvfUQZLCJRGuXypwJg76NNcv5GD9u6Z2cxiLdKgNSyuvkkFMnXMMm5Gtjiba"
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
