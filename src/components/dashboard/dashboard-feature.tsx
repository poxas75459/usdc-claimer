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
    "x8xPy86Z7faYkC8NGBG9ocYvgWd98vdPfqGcuBw6TdpYdXCxTcazik7DqdWULVxqZv4qknRsnQPrMshvB7eQJbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jRcNmo57Jt6g93nNefUnFnnPbx9sy42NbbwEGeULWTAzZyNpEGrzDXsAJT5MiT2oNAWA4DZ4kRzyuxHxUWhyTHf",
  "key1": "54JPqTfUyVxjKBxndhmiBXPWzs1uT6Wweq6r7Vw8L2MxHc4b85kuDzneZqcjneL2ESDR6P1p1B12SAfZqTUJPM7m",
  "key2": "usY1oacxRS8YtW9frWowGqgQ6z8STx6EoGhbjDX5XYWgfcWa175iHoK8JLoD8uY9PAN47YFi4pbkBGiR7XpL1YJ",
  "key3": "5tpK2NpCQXyBuxu79D1sTjb3FqHVzem7qRFgVEAmnjHjHjfSVjda5oM7JyASrSDawmDHSXRN2i4QwMtsWUSdMUaa",
  "key4": "2EtssKEWCcp4ifEDyHjrjcohwx7txcEbkV2tkPbX6grbJSKYQCihaz2iZpswof9tt66DCwfKMcqZCf4gqpyojZ2a",
  "key5": "2CzmaaXh8d8ieG2TwHkL2ePyVPYrCXbwYrW2PuUookWYRTnupHbnaZZLoYnVWFdAs2oQEEPGiZ9APYmrt4XA691a",
  "key6": "4W1LdKjaLXejetEwgXBJkQquwqPCscCCWF7q6HNb914jXbGUrp8qviS7Ykm1QwSnTjwME3StZ4EEZhi2EsEvr41t",
  "key7": "2sbp5PaGVpGXd65D9JyPikJvV1oHq67Hq58YKXQ5HpyyVUX6RqzuUBexbga5zCQL8Xmk7WwXthUF5VqSCGJ6MLtD",
  "key8": "gvwAAN3YJQ6UQXxHnXUMST4ukvPHQwmtUVgnuxHTo1T61zmwucNUB1mb2yhYmXTuSNfRZujNMER2DQnANGw6wfP",
  "key9": "3Jmm7NWcMAsm8AJmZ3S5aoikas4PVNDgW9XQ41MTMqkPg3GVX1FT6CkHdSgq4PKBMyiT9Z5h8QnHRLcd8SVjYhAA",
  "key10": "SNEZ6o3x4ZxQbsKMqQKEWLGFdfLByAGiYhUh2AJP7qV9NLCkv12GXddJEzNjkjrp5Nkuhph6ivSxHsdhUDNEmL6",
  "key11": "3CT6gkRZeK6DTLwLZgfuaWwXs9U1dFN7smdikeEaA1M1nunsTBriHCEnxDXtu3TzFm6H4M7MYao3Y2zcwaMykcSZ",
  "key12": "1pXvMJbRmYUXn7j2Q3rxNuk3fuSWxD7EsZgZH45HzEfAmEouVGq1fidETHCvm3YrCV2HWpvTbjA9pE4fpPFQzcB",
  "key13": "2RTiT1W6HkbxjfoLZe4KeCfd7R6tJ2fZWUhYTBeimkqTqojT9PdVNRWe8D4vbHX2Xv1927WK9XeR4avvq8uZbU9Y",
  "key14": "28K1hPth5NKuzGn5xToArDEQUQMKoNwaLVEgk9ncMMYSMUXrsUVqcrVXMDTEnNsDsXng2oR6XaYyKeHkFSfnh9iu",
  "key15": "4N13uTojPMNhbaUJBJ9p7NHxbY1FFU8kMadVdgHC5i9ajLW3qU2dnxXVRGtiaGqwC4sBE49rW38Vhj66KnEudWSP",
  "key16": "3x6MKVSDG3kR8XhLxk8L6839vrcQtsDLig6Xoto41M1gExtCLTUvHzfXiqhZrk9bxbnFUfrxt4bKtposCeVxVh9g",
  "key17": "635vxBrCcofQJMpN2G4tqRLA3N6UssecPZuqSzqd8T3HEQB4RXGS6Dae1ZEXABVh9NgF3XFfn8sQ9NqE2e8Xae8P",
  "key18": "46nrBWxEVgdSeE74ZpQwvJd6LL9fFJsLKojyhLZhbJiGnffYYYJjTfa7unHk6AaKV8eiHMBX4oSRoaDRNZVWd3At",
  "key19": "5Rsp78xDtjrYxUmEWbDsR6LETPXeqF72d99EDmHY5fMv11YNZWmEbJhY1x6Ao3Y447ERCHYfC5hgsu2xK5sRFxUK",
  "key20": "3XVYs1EL4Nhe4rPcQkNxtTVyX1WBzEDX3aW4FB5gzydrKDP1Y2kbfTjAczf7RjS2dcZ6xZeq4ogUPrM6sowHHJSq",
  "key21": "5NWe4uvcU6d6WBcq3HJKhENWzyDhrCbsiwCXNm4XVpbywqHPgXfRnKVstCWNr2rEUSDigjvgcbKEQu5K4x6QTEjG",
  "key22": "4xbTjGcbMKeRUB8pj63vAyssucFffxrbCYwk5MgHLKziG4CKV11zDD12vL7yNEspSjxJkEt7VuwrFy821Bh9BWsK",
  "key23": "JrGFEWgXR4AUHneQrYhMuDAgcaZwoFor3hckqs9BGjM8p3uqkdwpYjrJBzrXcVuYB4Wf1aux3bVqzUjTLRxkXW9",
  "key24": "59q6BiwvizL99AuW4pTYzt1Y4A8NRhsEyV2KBHF1yxqxBckaBcLetFUVp7qoMNc8BcigKVWK6VTQG6FigaaHtnab",
  "key25": "2KUJnb8ZeUox8p6bNfaAciGMR57Lh2YVfk9BH4Tv5TPsQmiEeKZP55sDixPWgSeLLRRjFpHx8iffqitFui3roaX6",
  "key26": "BWQ4Qk4zVEGDNAozLSuN2FnY2Jny3VNBSLngrs79W9UPJQWh2w7CiWmufLx4MC3VRSfJZAXC6wNgW5zMCLPyqEr",
  "key27": "24r9BYZABHTwpvc1pBCfSHoRt7pCsLZkLPMeckqn63xvXrFRdt9RNM8Ms6rrBXJkSa6Y7oWDPVJWiVK8JeSxR3oA",
  "key28": "2jxxJdxhwYBrFfd3P9vf8ATN4ehees8UhGTVXSDWZZH3TUfBTh7a8rBxSrqQ5xbRBXKXtXMSJ8eHJJnbLTBABVVY",
  "key29": "3Mupju1o2aY7kVo77AU4yGwFc43NzSZiykHYQA9Akye4VrpmXpGHDTu5QxwatTj4CSWgh8PWg57fJ5Ft79qdp3Qc",
  "key30": "5Gom4GMXHhFPXdXZP8HZ2DLbSoSrfb6s9Nv4HW6SeSZWo4MTa9YE2PShi7JB6wGLD4mK34bm9ju6zhLcyRPn8juf",
  "key31": "3v8wEhNXZr44YyS94xp3jiii3SHgPad8FCaxZLAMnKtgwisKgVriHN85YN7GsJWhyATKks9TLGWFCyWSJwVwg5Mh",
  "key32": "3xFySthstifXXL2LTHeLGkmK6JQGdFi77yVRNeasYUXNxGX3eKYsy11LZpkhpyUUckwne8j9xgfhDHaox1YFocZE",
  "key33": "3uc6pyVQ8ctCpgh7zZZhYmjfFCymAK5YXmDmymhDNWdWw77BFRY7e9EyxAmsJgctLHVmFrvQUhaQzXHbLgicXTt2",
  "key34": "LCP9GGrTSULtBLv6hpXqADKHWyJUXqrRWktncAKwrBaBVqyxWH5vbr6a5x55EztLQ2oe2eHtpup3XqYxQzByTDo",
  "key35": "3AYRQXvqjkzuW5nZ4MZK8Jss9SrbJQi8x7DALKPztATJrc43waRihiXBLqZZpkwXgWma93Ad9y9JXQHFH5jMmHpA",
  "key36": "3zQUhhm2cxYhhLeDPxQC2oezMP1hjaP2i3j1U9w9jpJAgztvyr6jx4XwebPJur8j2FmDPURoxQHuY811xTD4odfG",
  "key37": "2gcybUeFkFAx91gmRQLFdcu7h2rVSBArpWom8QH93v4s1EULSqyWKM6LUZ8xdFwMoLDzh8uAVnCARibHTasgKZFC",
  "key38": "34LTzMv994cbbN2UXpXbH64d3dbJNwwq2QgoQxyquFkobcPmaTa8X2TUru7QM7cTuAC8kGrzh15Y56LNNcvzzNGK",
  "key39": "3rf7WPkkHxjRNkwSAYZpJzv3ZD4FUKzNqDVbEG1p3s4URQi1bTBtmthgkbaqxQMJrc7YWtgXJmg1qnLuTuSszvEu",
  "key40": "2tns6aGdHp9E2du6w4hNQqsYSiwb2PdCos8hkBxzqTVU7nQHH8Z9ijWb1GrNmoA1cXkZbqvLteiAtPn4SgBmc9tS",
  "key41": "58zMWUq5qriQC5YtJw1pHtTWZrAxJpQNEXJifSsAvwhCdsV1GEMEL8u3cY8vDuR31T6a45szJTr2Sy791EtCPzwf",
  "key42": "5krHPMJYVzyvPMzRdWpzJD8TcmiXGzZQVgFpF8cMhbK7CVDTd82XQj1ecm1JDRxhVwdz25MyjHnKFiceGFKVWNwj",
  "key43": "3cRFjprzbGMAtBECQbmXZz23kaQ9grxGfsU2ATsduDfeY9vVz4QNQYmKBN4s57ToQL5d6Zscs3LfkSbM3LpP6Gru",
  "key44": "5FNXd6wz3brCocxnapWwUsSFrptE3Z12xa4suqBwBNv2iQPFBgoqsryqwkkisq8qLdUX9qgSPXqaPjGb76wPaW5o",
  "key45": "3nJKfptYxSYfXUHgVArNo9KCs1PhkEE126a4PZ45Ct4rZdeDQMANzZpfgcjy7HuuBjL7XCCAdZNoaVRMwtvC4oRd"
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
