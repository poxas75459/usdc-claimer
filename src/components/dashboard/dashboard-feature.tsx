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
    "4VGYFi1QuWrcNbD8QHgivMFUCFMHdTZdjkY2NxNt9BSU1LfJ942LTowfA24WnLYWoKu3Fc5Hh3vEhebnMGYdSgHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CH3nKoeVtGk5UKdA4Tmsro1LiFLSDXRMt82MasBQQUYdXJVj5mMtSZMcj2veVeyvfb1FZMSMykdb5ekZWnGSTab",
  "key1": "3ucavherC2iHtarRkoUQaFK8TrXE7UUhF23QeBQHqjgMeGAvT3gtjkFtfWUCiSQMFEdoE1dcQJZu51kNrboXpK8i",
  "key2": "2pXB9T7BHShLqNpJBeCeuL1PXzPwpCVdPTMWcGtcWjMSx2cZVw9zvrvcq1FQGyQwRBJ3Ev8yAPpK8qRxLDwcvytK",
  "key3": "8J4DzDNmbXnntphBRw6XWN5sprW7kxFaK1jkJjG77jrkdjZkwRzLU32PdEfiC5pbo865FQLuGu136CZ4gKkkJSu",
  "key4": "3HADQcZDwNZAde1ywUGqKmqvxxybEdhthfjKKwERqEKnJB86ZyTwoiNEF5wWtFBuKbiARXBmTNZdHEGjMJhzZW4z",
  "key5": "3geo3ddXPs2LxeJrhVo1ZCxR3dbo7iTG3jzWSFk47DTerDwUS8VLXhwjH5oNsySVX851gCHWFxNWpxXTrh3mZL19",
  "key6": "2TmUcFce3gH7xv6QRET5PHMH22ER7q6ooueJjgWPyA3ekeaw5exn1tDzsWSoF8SqxZfznkSkGL4GUxwnd8XbdL2B",
  "key7": "2ivmfvpD7atNM7PStpb5YgAGaLQYqY2bJcfTtPqAr67UPQgT7fXGZdyiQ7x5ZovMzrJV5FgifbzD9z8vV5EmMWPz",
  "key8": "4RwKpCE4PTgvzxY5Hum7HtinH45vLydFBmNyiKkCXhn1K22zsNmikqtZ9RCzcK8ZSj479QYmsEni2xKctumSB4hA",
  "key9": "2FgNdK8uLQdrHBuAAvEXMu8w4eyx44SCzj1nChF839HWQNVms4hAe3euhaDyvQmh2J2UJeKrY8tnDaHyeM1hDE9J",
  "key10": "MEBwzSBgsQ7TPWbATcRL5imB2TxfsmUfLHThcjUGfM9jBDMHmxNTvi4szDENLtVTMUDE3afhbw4WZQwDH8HhVsA",
  "key11": "3mSitrHacdjuQ1joEnBaZujzx4KWGBoQzD1RX68fpk8qb8bALg6R9CR5Cb4kstTLmaykqFhWLEkZCy5rq4xC1m27",
  "key12": "45QmhpJf2EvRxQaqDJFEMTRkiNPXQFBy9f2wwvay93NFZ76sxzuVBFKBPHLAXaiHZdXSwoaYv8NmLoZbDmoCr8PN",
  "key13": "4iQaSdsQ2Q7wwLAqdYd7T9UWGS2N4FX6ukt5zjyCbr4gPdQhwFPahCTpWJ1QJRsUE2xeKnqRZXTGzJFRiVwhByhg",
  "key14": "46eieK9tUatDiSXoAsLviKyaY9ximLtZm7aJ4J3QJMYTtqtmVn9nYX9Qjvg59z1kc8sfMKYL7kVgMqPNymJoGkSm",
  "key15": "5ewmhD9jbpCfBX2gEzKFJbj8yHB7BzvBZfPSu3SgUPotoAifkHiSmPVMs4moVNrvG1vwtESD6b6XJ9FAV1NmMNMQ",
  "key16": "3phdZxtsYZG4rJccpLjF43YfSsUDU8JUPRWRMrUCk37RTYdiKGcCZBXrxykTdXiVyaej9pmwxomJfuENfpfApjnY",
  "key17": "3VncG4TJaNvzUTGsa7kwetW3TtuWG7T76hmMgFFh1Lsar9CLmEoE6ozEuBgaTdPWGLWG8NgL6WMGKhFeiZbnj1KL",
  "key18": "5zPjoJU3cVGbcCrMcg2EsbTwTtD9UWHPsNQDHMXn24ATCQdRzhwbaWvBpsQPwwQoK5bCrS29ZpmhbHg7e4CZVLAp",
  "key19": "jtCepiaBaej166oiqbMKG7FNAA6he6r2BZ2tdtYLLMoci7YmP1ydVTb8WidSx4sm6tLQ5B5PXUWUEtEDYAHKo6A",
  "key20": "5Kcpky8HKoTAv5Msg9Uj2pGzkktz7BkMVkYk8nGwnfC24FF4bsXaF2oUniUifaCouPmd8ZtgaM1Hwvvf8Dr2kiC1",
  "key21": "S2NKRam9VCp982C1sQz9EWXEDYg6gWmJ5y3fS76ZuVdBPL92LPBqmXkr3nqduZo5EkUxMCSs5Ade8o6MbLG1axE",
  "key22": "5RNSeoq49DziCfjcLU84EPocPcnJ4Z7XwZtdF4DAXZRomqAeMdfGGbfUxL51T3LF4GyF3nGXWpxXVpSqp7dwWkH8",
  "key23": "3hpDiQoFPzwZ4YGBXkByjRuS9qDco5uunc5MuYgiHpJeRvYy9VpwJg4dffCV3NkLKP1bJqm9Y2XFf24otZFUjmVd",
  "key24": "5XRn2JKsEaMcrpowtj8hAjQVCvZQyBHz24PJV5e9h1R222N3KgrJcU1ou1RP4c8PfM6EFo3ybdmZvU8fMAQBust3",
  "key25": "5NRe6ooWLFSA4sfqx3Ah1dQvhSmxY5kYS7rhco2Ky5bf3XnczuP8GvMEGBvuJSJeYrKHNXrDDxjAF2UWjDzwCNSb",
  "key26": "5FuwBg821ZMLEhdXWi4EJBJE7psXG9t63tYwMEJ66LTEANnM1TECw2g2n9NbAbXWaN5JETd3BHvr7Hio8fY9QyU1",
  "key27": "3peay6kyMwLneSLY75S759EnukYoML6F4UuJmrfn3HXDKPqkLoPmadjCjCTcocEFJH1szmTDcezkz9C9Mtp5W9A5",
  "key28": "3f1QxGr1abNJKUQMz5CSxm5UyrUK6rL73qQWmArTSiFeZMDuGZkGxV2u9LK1AZSdCHNQqwa4SjmoSwHoyQU4nVM6",
  "key29": "2A5rGdiU4zcJkrSpiQRn2BTXg5U6oGw9NGbGMzY5FejZvgSm4zRRLYh8NyNi4T1sBxFZPitMD823S7ngGkZcxJDW",
  "key30": "66zNhxWEgojQq9FHf7kzkDaGVZApVDH4HQKwUWjaCcGKrJn7dfaGGdmmvPVHPzHAHdHHrCFU6Y7J6WwyTnpR4j4d",
  "key31": "5c7PHRpxv3Y6fZdPJtpxfVRwHuNedL2C8MTvvQHSd9ohENRB5pZnpQ6nDwJYE2sAnwnbRnLzrzh6MRFrT4s86Sog",
  "key32": "2Xdnm1HcFpP5gCSmQs45iesBBkD9sXbDi6EynVknNPxqpPcByAxg6y38fMMEjUFtYux1bd9sFLqzmhdobsXFaAej",
  "key33": "MiKzWYzwV2qJEW9WJsZC4WXUyLNEW7JTcdcAhW9UtHmddawTGWVV6SFWNv4ykyxEJpfWkNDuyBBvR5s8cexZqtJ",
  "key34": "s7CyjkCR27LSAcihtX9kfkPqBHWLwd3tMPRVTGDQmeLwSAX8Te3nXgMp1wUiqFtQeDe1AJbfiXZt86BvPtdkM6g",
  "key35": "3tCkVuVqoCHZtmkkLiCaThMez1nfjeqwLeEK59vVwR8JvugkHbeyntzqhsLUEB8e3YTha6Dm4B6Q6PUZF5fcjGy2",
  "key36": "4cyaoJWLrDc74EtcEfeUq5U9JsEpBPMLZDpVXnfwBcNYv8G3xai4UenPFY3uPfikGxrHAsGxta136VKqjMfsHJbt",
  "key37": "LrmKebawNFmJaAHkAF21eZXFQBsGspDbs63DNkqJycjqvSQjWxr8w7A6u1c7QhHJeEUDemEVRHWfB9MqAN4Gzaq",
  "key38": "5RqDjDfJsxQLHsM2w4DYGR6K6sPHZsxV3QJa87FmuCpKK5f5W5enMYgjKuEQkAHMmCwx2iTxczQravEqsb1kbDmV",
  "key39": "21EVaFHJGuZeJTGcuasMnYCWy12ENhF38wELKzpXodApgDCeYhvFYTED6x6Rbcf7M8KGHoYobfdKZefYucUFFrqk",
  "key40": "5gL6A4sjePeEN2bMTgEHxFY7qnDEnwS1e2V4YcHaKxkcucSH6HhkqDbsaBCsBRVxUYsmyicPFEKPsWYyip7r8iV9",
  "key41": "4rXpaWJ6e8TPu3oUjTrMdha1pi4zZnLqqkx1PdvCaJ3bVkSp78Cg5Kfm6e3FmrutERoWfX8YbtVmzJUzjHC5xrfb",
  "key42": "4Rz9CknNrn2gaxBq82K2sAFApDSYJzzynKBifkMJLVtR6aNdFTLVaDkirjdnVUGfUDnQebNFUwrBVLcA2G9PCMTB",
  "key43": "4RkGXRE697Db9PXaiDSdLTqP6PPo3EkeptRAwuSdvgWfBcKpkVy6R5rXg4Jmhe65VKcbpkTXhqPxSLBKYgLRvL7B"
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
