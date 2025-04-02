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
    "w8vFwEUnbDzm5KfSypimE8e2R3Zgw3YHeCRYoS5aPmvzRryKSD8xFkFJqTrP6dCBGHpHRyQNHXgchkwq2ZDG2uG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3USkh94QqAeFqWKYSZojGiUCQM3DyXdRy9gqkB9s2SjgLccsNdSQ552zNjjetWxRTQs1dBFie8VDeAEha5hrtc1t",
  "key1": "5SAKBKKEbNakfowXQmpgTJVNpXnR5XxpLzZb3TpDbC3sNyKoM3vgD8SvEGWdDtd3wmNZ3NSLqu8GPzHWBvWdFHaH",
  "key2": "9pABKafuaJjztANf8y8f7HFj2vSX3cRJJ11K2RPcUskMRAvcGLigSq81nWqeZmskSxjMHnrfETd1ZcwrhoM5Dsr",
  "key3": "5GTNonosNEn7DxDr6hJmyHuqBZLNt3QKfucCt9SzhJpDKfdnXKzFQsybyGzDPtbxUGVgqkwmKPbEUxUrf843UmXF",
  "key4": "TM8FShUtEwsVAynE5rXeZRcnyk31G7MPJ2NPUG2AnD5waqpeg9gdiMyJpCYAGmuXFd49Fs1F71At9wwhVtE5JkX",
  "key5": "vKwSBJ9ABAqcJgF2hJqokEs1wz6t7gJW9iZdefTtnnMyyW6UyZ2DLPuSrQ59YqMHpFe3Acy1YdokdjhuzLbKv96",
  "key6": "5taYbPKYqmEmTbHf2s2TD2pLjLuCcZn7i5izErQXU9TQduYW7X5S4rwfqocmbpuq14z7NmFXJdi8naA7iMo2Rvqq",
  "key7": "X4agvBZZ4jCAXNn9eR5JpNwaxoMVGDXYQfWVqT7b1qp88Sbum43ZRXGByBFka8wwrH1u29EQGuUPKydD9Jvx4ga",
  "key8": "hBxwVj6wAT16Z9WiWfQzdZubzkyCVKdrsWumsL3vfJ1dMKJqLQifeEeY3vmoMwJcMD8AQC43i9dRVj9SuhKRVT3",
  "key9": "34FqQATR6tiQWgPbxXefsDVNX7tDf5aCAmb9TRY2BUHHhRUKSirEeDbmTchCLG8ppUwkFPwrJz1Xw8MfqN3Fkc6i",
  "key10": "3KUoy2VDkmE6D38uSrXpNVG9qD5yFFe8kXohYzPjDWWsxRzrBMMNRDifytb8jTgfr1N8sC4f8sW4y7H2yvXUdfqd",
  "key11": "5cgk1h6oTtWBE5F6kDU9AuVHUSBNc6rLeSQQhxpMGChtfX3m6qVdhLfF1Jt8K3BvJYkkX8hPPX9hq9n8bC4Rgzt3",
  "key12": "2fNepgotqAPMdfzTBm5hDbdzwYsFoxKX3PfvRxHuSxemKPbjMnoM9zAQjavm4mBebV7rRiSTNDM342L5x2C4MBXd",
  "key13": "2r3cLRtX4XHGBmsqzDQnbinmck1Wm5CREktBPgMHTBEaUkHwHd1Ee76WPWuHU75C25FATjW8yuofhYbHPQ8PbMxJ",
  "key14": "3FP9E3p9AVkcn1YNrZb4vN6NhXDMjYttZdid46HHV4PHbmBpZAYaAxiARcTRsQNMAQQEJKUpTX3mzCEjFkn7sMhf",
  "key15": "3abVnaLNKtePiqn1jXq1dMUe4bCB2MgAmFWSdy2uJC9i1bReaS1QCfvwUsdnbY5gADg66UttYH5xR71CDYZNNJmq",
  "key16": "3yBAH2Vj2vRSGAzN5HEhcnQqk6ymNDZyroNYo1MqbAkBBAew9JGiQqLJnz4gPabGKHFgAcoy7ALFepXEV2KsBkwz",
  "key17": "5GujSv8zybWFyNHYbYVQ2WkAszGhX74FemrVLNvoGhNVRHV8rDH9NxWEEDMYGDzjeBERsbrbEYp6nLMuVkDQwW1y",
  "key18": "5yc4BuW1kJ6ez2tdNmfXuWJVwgsoitXTkH6tQ42BpwBmDw5xU2ZedRXTxABmR1X8iGhSSP6ZQy4GtMSFct4E8nR4",
  "key19": "4sxMGm3s96EJr817Fryvux8eFP1TikhHkSmYE2PYmFQMVRp4jLnnAaZetY7kmgs37K3CMGLUMCqiyc5SZCzfuzZq",
  "key20": "5MYHxtPhvV5Xm1ZDcejZfQuQrAchsLjuU5XJU6ZRbFTdcnAvmw8WpzErac36cWXktqdox6XMQfKzFgvC8pAg24jy",
  "key21": "5ifdq8we1W9sfmdV47Q1QoSirt2dYV7G1J2NMt5bXicMk6c9TmLSdammsTqGb8jNNiHQPjPWcCDTFhBgDDDqJ9U1",
  "key22": "2QqMTXDUPe8yCMnkvZc7k2RRqKktxTCnavAGoP86m9KER5EnPHBvKYe52e4qjVJzTzvAVy9VvJD5RKUB6sNby3Tw",
  "key23": "TRp9aC4PA9ssAHH1ZNvfYpVJZwTCtVXLAgYD2hcQEh873JvE9c4ZEmXE58NwxW4DttBMWoxnCssLKSHcTkqu3Rx",
  "key24": "F9thsHHjbc2vtmwHNekhsrvwYtNbD7nBos9qpzRELPzzxSWZsU4Zd5R8vNiSVPbMJL2Jx6oJ54LDvJJ5gDEB6jL",
  "key25": "4o3twe17gKUVYJnEQDUTJJPqVLuGkBqP8fdu3BfhK5Zj6uC9SiUgczuNkUuf8YTdDWLKTzr6Yo1NV7iUSmoTpaCk",
  "key26": "DF5Bh84bwT3574unphuCLzgoCt6n9VXD6aiZgRn1s9pev4eou73S166wnVnNfGdgpWNmEWu7w1nrS8CMBUYiHsN",
  "key27": "7zFfeRHLBoBbgXp6RkVFKpaNP5QVFKaSVGdJB5xUhCPumzfAimfFHEkQCMhbDwe2JgvXPxeDZ5YfXM4iThkysus",
  "key28": "2wAmdZ2RA2QWMTmrFFTQbwxdRhGeDrf5feSqdQxkp6G766MQ6raX1zUi948R8y21FLgAQFo7eJXKE8k9GxfcUfC2",
  "key29": "4iWHiapFzZw1F5AV2c22NQNxF4PWu5e64M22HgztvKQmCcVQzeGoLdZ27ZtSNJ7GnHAoK2hJFEDzxJev3xkDtXRa",
  "key30": "5hLrPTWXgiv3zhaLs7hzPPRo5no6Z6C9wM9WBn88MEc2TLqfrhYHCTBZEPNfB6kKQSawhydSXKgbJLg93x7PCXp",
  "key31": "2FDapvzVWLUvYdL9naMoPbqdZcXN8k3HjG5nrkC8rirGkGr7WBk9ouSGYCnddbFvvfXSJL7xwKZAZpAHnmCz8x9U",
  "key32": "2XCmn7Jrew3gTk1z9jXRf4JDAvRvUBDFC9UUPqRbtaStjT369iF12SGG5m51Y2jSHi3Mju2ZnYXkU6bpELuMcwWo",
  "key33": "Y2Pucvqp9VVTjt5UoRzAbY4sbwwFWgmeLi7ai3hxuynzAVuz4Y9cKfYnDc7bJ2bMv1E4L9jS7sU64w8dZ7RzyJo",
  "key34": "2t9hCGP6rieGo9B1V6jQHwDemqt4KxmXwqMS6FjYwhQ6jcr2WZYFcJivDMSupHN2JtW8Wf5Z2ygDH91UmYiLuQA2",
  "key35": "28idSMw2ek3uyyKSL64DySjKyHWgpLpetPJhUDXVVEYr1f1XFMa6aVSXizicya5TzTTtNa4sxopWniKzsFs76myZ",
  "key36": "2ApD9byjZxMK3QVZyLi9H3eYpcYdbMDtn1UCdwcDPWPtwdfPuoo3sfLAREph7EGMsHFnjRzSScxXa5q9iZq362qH",
  "key37": "2TLgoZkfM1XZ1FhcENaaUAiP4UHgrTTBt2BKmHrhjUyGKf4nLY68u3kBFhmhSybGREkyeswRTNZH2tsjxQSqQYcR",
  "key38": "67Jhz5gGQAeY9AKybVokwdhnkwZLLHJ7NtNBykqWKT99ZCBYrQKrRyBae1Qmvr5nPSXPVG6y81V5VGyz14bN1YzN",
  "key39": "5qhGofUWNQtN5DDBmdr7F9qjkBUiqp4FU1HYeufkeuvpAuyeVD6FAo85qr7cXsN5ZGmfHbxaj5F8DBFQbfydrgbk",
  "key40": "5yuNJEAXt2zvFhtRYRRaRkWrRuNxXX8qfHHi2SViVgtMk8epCoKHtqt8BCB7syXtSqjUx1Loza6rpZLZUFacGfwZ",
  "key41": "66w8dJHpzzrrj5hUzFz27zubfCUqu7o7tdhSDLBKdJJ2eirT3bWnBRUiHjb1pUHVUfS1y1KGsJzgGKHeZThgG28g",
  "key42": "4nk9R85xBWCDztEoWUoEC99eoux4AKFFcUbZNAVxm921u26Sv9GnQMQUAGcPDpM7C3ppFeG3v6xkX6NTsPWGmtxT",
  "key43": "5WMeRCg8pZsds8Qtbny9PQrck6PzHXHBxRuZBYCumT92yPgttr17c61NxQu4sezK5SJWpZqWqULgFXCMU2z4UXuF",
  "key44": "3QgijMrxNXdFi61K4t1y27GvrxX8mT7YVxfNj96pPZkNmL68q9vfs2Hfqp3sowBSR29KdpYbVN2ZHRQseat5C8Jj",
  "key45": "5uU5bvNFB39aDQHHMF7LboFkgzRmbU9UzG4Rpi51SWjnAs3UNKXgLuUdufrZPAyqg1e16w1UHp58giBHc5dTxCDM",
  "key46": "53SkmgbAxwyj5ZY8xnWeVoqq9nwL7asBifeuxFpjVUSkhb1NACzr94DnRq9eAsVgMfhMPLWrC8WoTYhBMmLPLZXE"
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
