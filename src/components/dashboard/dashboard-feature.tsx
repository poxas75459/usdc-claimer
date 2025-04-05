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
    "3C9CTTrQbhJ9gWvHkWcTFEdxx7HahrzqJmwSTtPVbSTV6B1YXtt7KXSzrXyNQfCtBW2sb4ApYPf8DVGNvMVy6Q2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Eq9u4E4uHPVuch3G32EDLSLtN6GeDst9du9f81jze6aJomawmKbcMa6DdwVwiTeS4KEWafRQzUjtHHv1qrk29y",
  "key1": "5hGkgbbJd7AuEAX2vMeL1iYK1C5qypTPB431DHq2KLBiVdkeYCMNnotYSo3Y3ZufQqd1WENBDioscfNReqegDbEF",
  "key2": "5JSCraVgFCrVve3eC9JQXUCAVXP1E6PEUkykyi2FyDprhQfrxYcJRmnEaVkGarucubDCTaoXngt18wCXSTTg4yjH",
  "key3": "5qsDN9i5cgGHcqzg9cdQ9AeaUZWrW5sdq3wNdsJMvXZ6Uoni2BRbwabDm8GPqcQEP8E54DCwGBB1KDtEZebuNSo6",
  "key4": "2nsdHaFmMkEpBBQPm8pj5rJwisEzMnniKcnzpgtGGAtWKEKLEwNDmruWcfsaRiVLHM6SGSrf1JfurCqSgsGXLmRG",
  "key5": "3VPv82Htg5Y5z9E4kXNSTy8nFPfQGWCzEDNAmiqfKRh6tPPdgoNi4ikxBXQD9pGBajYuXsdsKhdjNRwzmV89CGkP",
  "key6": "3u2igVuJPpH7eKhYGWUjh3yycVaPH3pfgYtedVtWjLbo832V7MNs1KYqFXsC2FVU1Kwk55jPsSjXU7Mc8pZDw9rK",
  "key7": "Z2L7jBsbtpBYUkBzPucupYyWE67ZPThp5FQnkJTXKCijaUvrLBnvkS7BmzBbAmKkNG5XPMxrcoBXLy18rrhVtFd",
  "key8": "3CeAi7kJagXagXdLbMM4Zq6kuAhkhUAoxMR84PC69BJiWfGP6cAXtHDJu7PJAw2xNUeBwuwUME1HCZfycWVij5zZ",
  "key9": "2pQdbdPtJpnVD43KmEzMA1Ni8hMzpfH8r4yquMxLKHN8JAeK9eWhHVqzyHoA3ygsntrErgG1S6d99mrkbd4bddaP",
  "key10": "4WJRVD1VXPS8dRsBJ6qMRWwQRQncFBJcHMaMErGzKoUyXYgmxuL9ZxqKoY8bw9fzf74sL182FRCNNV6rV99BLenM",
  "key11": "sGHp18boM4QViBRuCHqAkwGWGw9grn5pZtBgPj39nP4qfGnaT47f4Tp8isDgwWtv1DoGAKFvxivhB89HDHQsipd",
  "key12": "2iYzhqsGq7c4NHkhCZeGQp4PkvdxVshYET8762ewSrhDbsmEQr43fHRgB6f5KfTBVDi9Agibm86og3dBC3CA33f7",
  "key13": "4QH7xvyhmcBX4e5C2ioCyERHNJD8Q6qkk6r1BEu516FivaY6wgJUA8FRmvJ6QPqx7pLMqVepc6iEdds9kEXxndkv",
  "key14": "51AVDiymKn6ioPPP42voeDmVZHk8HwuBZfcEeAsPRbDQTMtQ3VxrY8BbBuwjdB7CjysLSJMD2QgXpR5jfP4edxJs",
  "key15": "2Pns1uhhb6KaQ8B5UYy7HoRTf6c3iMduH7JPRoHm5j5wg8FsBrxy1pcLMsJfbzRV7Ej1MgSSYLrTfsLb5uWQbHNj",
  "key16": "59RALx1WmMQP53oJe5A1oDhTNsZ7M1qtB3NF2ZR2MW1Lp9uWbmNw1ri3dcFVLGPFLxokvYYZ3M988bT9AXMG7kij",
  "key17": "47teZska2TsRKNVBEG88p1RwPm5paVGHi3KTsnNq6JUy2CnzSBp54pKD62TdAGhRx3KbFehRwykso2GjeWA1NYSP",
  "key18": "23gAi878vs9qXL94pMvEC92pcFRKpkWNVqAmn9bgs4g66XHogKQsPZqEnzWGMNUcAAFhs9312YMPg4VNyapsjJuV",
  "key19": "4SddQZwVSFiamMdihdNVJXrS8zDdyi5fGsxuwQWj5gw444CkUBX4d1n8tJHjjsqZZDEqpciopQUASyx4ZWugJjrY",
  "key20": "35wSYDGAbKiNCJSZceGMK7xgn5qT8ZHKfVop83h5nNc1mxAHb4hZyiw7FGpAmZgnferxGJDZ6nVTFcfPnuVY9gen",
  "key21": "4jaSNJLSyXuFg9tvAyWRigSJMGW4hP7UoXBch6ZQDFN9KqKTSTWDuFXmCMw9RJzR2LNzg6nhYLSwNCz8iBiYhKfe",
  "key22": "2S2dAwu3CC11uir21CHKtEkv9nhURd7tw8Uf1yZRkpSH8SpRYSNtEcqxJ1QFYV9jph38JWqmCRFvTBbkfLq7Ny5G",
  "key23": "4JG2CB42BrineT5Dttz8MWd2nz95s1271rzjDhutmdhtgBnxFQfq1Mg2DxPmG6gFjjizE6y15NrfCxZB3W9dsDPe",
  "key24": "34nm5WvjUBNXZ48bTdeztgJs77JPLCSpiQyRLgkFXwXcAbiGzx74RvHrF1qHMWXSThuK86GwpR3yTt1yAwKeeim",
  "key25": "DwkAexJWw51yXLyPSQ7wmyLGcKq7HM2QhuS26SDRkSk15ceiBaa887owR2adKuA4DBytaa6Ca6evTkW3Q2DQeha",
  "key26": "2LWRRphV6qPfNzZCYFj7ngZ55dgFfzR8sK97pMPjZLdZvD6ciXKfLcwGioVGYeDRKYo4z1K7Ey8np4oTb1yeqfrY",
  "key27": "3vUUnJpV8Kx7omo73EZg7hUBQ2uehn8VYWLJevjHWwsFpuSmhRuTsoNHQSd9XM5QMpeyUxR3JUpfWVG3C2tzKPrQ",
  "key28": "fSyPhtkxwG1J7yra5hxk281G5JGWENdnd92uSb15Ey8zQGCFr3iRt585Yics2oWuM2B8SxLKBnmgnv3xmYyXZkF",
  "key29": "4inRoYeRXA2LntiFjfoMaSjKzVhsFgmGAvzrqcoQpqQy5ng8u3bLWouRn58bup4QJoWY7RBAPSxrnbL9QqsX9Znq",
  "key30": "5zRmx37ic7MfQRpw5iGu8Gjo3LJKDTNmnFzZNeQvQ6GAsUa9MxgeqSu7D1r4kzFFhhD5vE4ntDCkXFS7mKvQJAnz",
  "key31": "wUwuyj1g7YMhsDtJ867TmjSn6LSY8xUATRLxVBjCyGs9EvUXtczUcjgYYy1ayw3wAGYjxSLmfpRzz1qB1NJYw2V",
  "key32": "4H4kGWDrH3g6dp9mQkfJCkoRjaU4iGHxG2nP9hX6Yn4F2mBNTy4qCfmCuTN7JpZjFTctxv3VwZcP5XGqR89bTWPn",
  "key33": "3K5MyJmXuBsQ9EXwC31FdjWXnMTH3xjFXY7Vv3S18ysMMrk3sfjyZAJQYz9qS1iBpRv8XYZ8PzHQh4gTcVBpy7H9",
  "key34": "3j5pJetghngfJN2tgAEvRP7iayrXScsgBnD32aXQoGvkpJBNwdZdHEoS6BMuH4bsv2Q4UoHWKwpDTv7ttBQmfbY9",
  "key35": "2DReeQDqSewg3yNFYNK4RioouwQgHKpWvLxphT4Ybh3k8ftZFj45giwQyxR3KTwHdEhQT8GVj817pnmZNyasDR1T",
  "key36": "4NA7ZqMEBtkX22yqfpYNvkzBuYkQ4XYLHXsEuJZR3EVWJQzomiiax1wR6a7kNSB68DEBcTHtDQMnPaU6hC2pxDqo",
  "key37": "58YhUvEmSKovovfPWjGt3s1nNt8fi5g42jue6qp9MPYh9PA8NCPQi3ARUudqdcTxxYDSZcxJErdeLYm5NA7pxfmq",
  "key38": "61Ww1BoYh6NtnHF3rweBuvZKpM7Q65HTvGSwDnXTQuXPyrKghvymsiccjdKhRAGrschRUuPaWUU93xA9mwPHnAVq",
  "key39": "4y1mP2uM8aPnbEmhsU5cNyHPLTNznSfKkzvBHrkKZyyHt1sjGP3YCftbdgGDsMRQS91qjgpRas4yQp6JWr9eCWD2",
  "key40": "4rPfxPWva4gPLyHuV2Brq9WQum6rRAnHYMjHCicQVG75S4kLWbRgbVQWngQJMDvmXtUfrgMfVtwoo5676ByzbXrc",
  "key41": "2vnepzn3pNiKhJAAaA9z8NhtJQgKWb24m6B2U2ugDTbAT8TNixZsTDdq6YK618SfFMr2UPMt5XTfMf2uLumrHX8a",
  "key42": "3giB7nfUHxCdVJ5qFM4xtPh5Tt5cNCH3jXmrbAKpCUvxVPDaQTJ1GR888MNXvcYsLNXzDjMoTK2U4duZcL5xNpZR",
  "key43": "2ojjaEdToXF1tK3Ys1yGNUCgWKTPtCzpQEfsHnkdW1bv4hCKhLDpdv7sa9LgmHE3pSB8kMMz1gRegXyU3usJChrt",
  "key44": "3z7b48nnyHBGLqqCykpQELYBUd5zQ6MrcumnvV6sm8jH7BzjTJ5yHVPZP7vXRu6EkNtwouVEHWoqMRPp9Rm4SBdE",
  "key45": "fvrep67s4ysSyRcSUWSQ6DFZHCT8v5RPRjxxvM5zSJc6i8KRT35BqRKMti5ggp2QoYt7nBT5CbvZ3He4jqrfz2W",
  "key46": "5jff8oKSTVNHfAxcAz74gLyUQQPqS6eUAU5Yk9TGtPbzAFd82R75MYq593CLuZNVFFqn4shQ21ToScLAPBMxSttr",
  "key47": "5XEGaUYS2dN6NjfdAXCRvXsYi8vPPLuJUHxE9JkcQ3XyHGS8x1ipH9wh9cxeskNRhM11V8SFZz3NSPFwQVrzEbYe",
  "key48": "2QEe7maPnCv8RFCsYtNca2FE9BhRwP5sMPkcKEPFywoX7oqRsdU4zqsTtpxadoEsY2435kYAxsC3rMXjVDudyRZm",
  "key49": "28WAhNDxZozDTtGPNfhTCxy8RJ8ChkoZqtUWGPJUPaRcPG2N6kKZc4jyQJxZMkwfgGLVZmHhzrJckvSaxtKWiWiy"
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
