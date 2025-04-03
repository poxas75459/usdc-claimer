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
    "2vvXTqGY5y61Tdtbzwh4uTRLNSKr7rUEPGaXHJEMFH8tRPrBvBZcTbuvKPE9Fv7ggzjQq4cjnJvU5icKnZVgept2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36gEbQEume5RxfNeQyyzZd6qyzcFG8xyW4s3Tasehg9Z9cuVo4znzNftSTSpG5hJhFrCEW7buoEtR5hrAX1evC34",
  "key1": "4vbSTHQ1MjcyR6XtBo7G8FjkzhjeymPPNS7LqRKrwjdM9mnmavnoPn1agqvG7mHyc5XWH4NM2jZBuYo8b7284uTj",
  "key2": "c5URccgfwFcevZqAQPmgB9EWvJWZuTRBAsUa8j8gMQfv9X5tWjXDRpz1YMjXi9Z4WVDww4TNxU4f91Xt75VhyTs",
  "key3": "2ZdSUMydUPMfRx7eCL6Lf8RWYZGrvmmi4F8PcHyGUum9uY6yT5Msb9Y3weyftsFWUPufqhff5TkP8znBaFw1iGiw",
  "key4": "57eJ3Uhu97YbETaAzjedUV8ZCYeSDLkPsKTpL5ZY19VkuazU2SLjJ94fhfuhXgX7Cptxb7BzWC4nA8r63nm3Uw77",
  "key5": "3NkX4ccxLdYBStPvBAaBm9oTjcjQcANYpX5swSGLWNTgt3MUuSRJeGu6XeeyA5xuhLLJBZwE1K8Y3XmMrBnQEgTW",
  "key6": "V9g4xZFYbapWwQjrgwsGT6sbf4FjS4SzsLARp1VoeBhmPWQ9XMRyuuNm69Tpq3pPpJ7bhypXkFnLqpTtU27mU1G",
  "key7": "31eCYGF1FXKet2FhNTiFjwALuJZiXr6xnZ6Ag6FiLCXgkhkf1CKJJeBdgCRXuFNm1VZKoFrKMMTxYNSjH2RfswEU",
  "key8": "Ak89Sf1xxiDefTVvPe8SzzkWZhQtLd5mr5HYc7RANHBbZVZZVvUvxYQjTtQgveUZxtpbehKygBy65AwyxtrgigF",
  "key9": "2W3ufrx96tSBv8mjSAHHcELEQavFjwkzaj3MHWMZBLW6EitBgdtseWdws98iidQnun8g2RNun3Qw1VhatmtDL7CS",
  "key10": "5AmTD4URpmhRgdLQnHuEGXX1fEsVw2cUj8JkKpij7tiSaWPc2qrq83tfJBgLwuJd7oP9AhwsaTz52UJpWgueuVGi",
  "key11": "4We7t3bNjS7rBhsfBfazL1zydg26uCDfyNH1yRFAsZtPi8sY2ZKBGgdaMVxh9ftx6LFEafyWXXnSdASbEtEyGf6L",
  "key12": "3qmMfULNNLZmBYZZKDrFfKfTpUFXhCQQ4iqmhcCCnFiUrPbURQdffUPtQ4EfCAnE3zTxJewydx86LPxcQBPDrte5",
  "key13": "63JTLdWU2TEQwDuuMo7TSJcTLvpTVRpNUubQwQwjVQrhHCswvY9gSgpogCJPpwyfqPVegjv94FmXqREoQJLxAWwa",
  "key14": "2zPxdMzUNgPteSxsxALxxSnkXzGSis7aV6EtzT4Ac5crmPiQ6PhmR9VRJVt3f3EcdeTiEMXzQqduyipuivn1uYdS",
  "key15": "2RtZ7eNo7BKRNrRjWyESvfanGoYieq7W5ckKhervoLL1Do8wFKb8uDRtFTRZgmYqR8BUWiRyauP6XVFRDyG4wAhC",
  "key16": "48gjfbQ3yj4fK5Uy7y3TMoCi8M6iCBR9kpgnvgHiVcgefj77ssiufrEZHhCeKXSLbSTGRk8rerEKRJWQJM5AiTKt",
  "key17": "66ZLyLXFPs7JGFPjoGSLmH7aNm8t1woAJNhVX9wSp6czvnJi89WrWKmF5hZMvC9wLqP2hMgf9F5EV44hjDMkwWaT",
  "key18": "npdf1NQVqcEFUm5kjfv3PhKBav9PJ4BQApfZQEnRjFd4WLhkihNZ4kS34hrVraaM2522QS3uvUzfQccbQwA227J",
  "key19": "2MB4YgNPkQGtff5pgGpYgLxHJAUH3Ti8D1Z3zVd2yKPCVjSVai55RrrFoztQ1dgmYQGfeGVj9Ss9HEyJQvTke3C9",
  "key20": "4kaoG6adWbSFmGuDUp3nTfRrnjHMSiU99cq6qWunx3rjp14qXcMkhNcV3EH86w6yySGhvGAwcshNyVXXSnV3wtC9",
  "key21": "EZRJzuim3RYYvZ8fWaaSYsJxVLjJMNQfNwf7wbpG3KsmZNjkHvygG1GzzedF9wvVRmepSTxtJUgTxBAnoBR1veW",
  "key22": "26HadYftXsTSmHR455GqYTQ48VwuhsBpvdwdKVMBXxhMt1W7wAWxb77em7gCNqVTab1DyPwF8qFbnVoBcyDhi2kS",
  "key23": "4geWEN1TnvsaQx1WuHKfTgewoKQEvJUg47YagmAAaHSoYpmeMfZ8zt31mAYcg2JPdM6LaTtoUxtBEMJ5aQEse9Wu",
  "key24": "2eGfEgx27t5mP4mXNYLr1qLAj9LghKxtSKY8UksD8WAxDeR59HiRNDd6fGtV7jdH2PNdoToBirNkbnVCxmRg5MgH",
  "key25": "4yN318jf4XmpAttXPDnMjjWS5YgcqaYwgVTKXw3rxK9XnsVw1YTmQq9MeNpnatMkfKVaetNBMi4ck3X4PTQFBQHf",
  "key26": "5wQNgBBD5qw7SX2CdQMZUVx9egbB3h3tjngDKxc4CBozH4qXNr7jCYkjrmBYQC8rBUWDJGVE43JorC86H8R31jzt",
  "key27": "4SSG9iCboXda7sUVjb3EDDv6Ufh4NrwEJGCZta91kuR2SKrY4Hk92ZX6GsRSG237ZHNP5KUq5sazyGKrGeYm1HUf",
  "key28": "47hStsGWLSR1jT2R3WzRAVvohKgx73aYDQUikZkhrx9JVxJaCrShxQpSDxaCJVmBSAmYPPgGoMUQeyonR9iRGak6",
  "key29": "YckK2fLFurPYhZtjkxNDm7wTe6kjQKZYwYkMrKcSySBUzqwSmKq6QzQLTi5JQC7nHWiCbpmbiTRoxKiNZKDUYgb",
  "key30": "44HWHVZQFReBDMX3YFZFibTbcBmf49ZGZbhwZnTV2Aiyf6dSuvToTrSDsh4Uqr4zKDvKkiqo4gsgqBXaN6z8V4Zw",
  "key31": "4bKTdTtvBBFaLRTCmtBjoovAfrk5auHp5NxQXxV493azrGkUB1nHPeFZuAtmQDmyAxMLd2uamC7iGw3JwPvmnvb8",
  "key32": "5xa6TEdvvxXLAXkV7PpPq7negYtmPXiq1zprmtasDzfxg4aTGsSLSTtQokNzaYHLmYitrQPLyLD3cHoPktxDEuaj",
  "key33": "3Hzxt5oUQV3ReRgMdmmm3y85VTcDpmWmpoHwp9wDu3tQkeVdZNkPNEw8NruXdLiFpGaHrfoYZMX2jRGyPgzNbTTv",
  "key34": "4xMup9DN3iKkT2UbT9bFsVub7T3TVsRKk6YzQ44ySAeY2AbENorxmX396jRyNrV4JvDjkuc47xLz9rFN3nPx4CNX",
  "key35": "5R41HSfk9Ut27pHddETzSVecy7frJz5rXSVFZHaAHc8RsB75Q7LPdBH13yoQebrvq4H45r9d7rN7KNUxtzDMG5dQ",
  "key36": "pWXpx3GBWJLLpQz3xeepn4pmopyAUYtMJ54vWCMGCJzGq9WowpSgFUdUiYz8JbUQDNApQR9ePwApLn8MfHga2xG",
  "key37": "4ZMcbWNvCWeo7Nq87reim1Vh7p2qESNXmqpKD9CMLHCJVbtBgBgXxDwkqLgxgFVnk56pPgcJz7x1w4LibYKEyPZJ",
  "key38": "H1oyudNmCHHs8aBXQiL6WLH8Mcy8v2YPqpoYwDqKhEsF7rjxMbbKRRiWoRWTmAMDzdNTFd9JuCtLd56393sKzmc",
  "key39": "3hcCtwWpSDdaiABd5i6DE2S9Mir9sDXJ3G72XfbMG2NKAfxv9uzQkrVtgr3LxApa1dsJ9K6rL1zHVnDUGvrK7gdY",
  "key40": "2sGmjPZJ6y853hXEMFWbN3tTQ5Wmxw2Vt3x7dbQrnajk4i2VzyfgFshLLCb8V16MM5E6EzLHKN8NKBJf16t5rCYN",
  "key41": "eMP7kECwxLnFUWFdhtKdt4e3WCDQCVfxNfafoZqA7ojrJqoMtnf7rtfC34bMXrjjonmBBAUuS5QHEyi9wSvxWgx",
  "key42": "3Cj9DtuywL572HdtXXrztX21C8uFcM1Qra4gbnWNTx5spCXHweAg4NY864dd1vcZymbjuq62Ha8YPxHeAHD3dwM9",
  "key43": "uUXo8eHA9GVL7w144XEVDbBkwgjNpWig1dnZHfXmqDcC1rQmmvBPhyPZGphis5x7D58AyejhB42iSzfAVgW3YzN",
  "key44": "5UKXV8urjcZoR6ebgXvy5o55MwnbYhTU8hyUcfD9yoajt8hCqd3t9P2hiaPDiLPjzkkG4Epfqd2WrXBg1zSFWVp1",
  "key45": "43ibdxcEfsCATnV9GhLeghH89bRAUWrufaExY2bBFCE8okmiHYrKjjrBUL2ppi8ZF837QmEjXpWjyFHayaRT6avM"
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
