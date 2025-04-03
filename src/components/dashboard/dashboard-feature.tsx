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
    "iu8nVCz4ULxbuepi9ruVh2YGDtZprdbLWtDJ963zcvPraJxV2yEwLUyyXRJHn7fR61b3pCAustF7czZxHGWPYrC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67iq1JHoC2CJnbpbsctgqnQG1bviAkiC2NU3uoH47zA66RhKM3KNJSy44pYtWrXAHqr4bdaQHvwteit7wc6fjiiM",
  "key1": "38jFyZqh1Bw4jkoTLBe96X4HK6D9PBneea2MjXQQNStb8wUUBbtnK6LRC2kTRYLw4gbbL5cWr3dg4VWb2pzcvNGQ",
  "key2": "Ziymbqy44xujs3dJxLqArrJPhMK8nVVYjouB5UL7XNBneJcy5NLdHXg8cS72p4hyFjx7eqjbkTkEabcn5Kx27FP",
  "key3": "2bZE3zRo2TfXjVPs8969ThnRLJCFQtcDSekvNahDQifmgMM7oqweYcngSnhM7ggthVRgSy28Qm6up9oumBt833PW",
  "key4": "29d4hwH3PUwkgakPm2XPJUkKvMeHG9r2D8HW5KfbSkpaHtCTAxd5nMPRWoyWfcuJzBiRPXSqjKgRoaSzVn9Ya7QA",
  "key5": "2EbxMabzr8yhDPrcsBra7psSYUVCJbsZR8GERpsnZSYYwEtLCEDxgY7eSk2FR2friYegkmcGxRwb1U3t5NRN1YjU",
  "key6": "3oNnvUA2ercKqb8sdZF3zsLnBs4X14qjBpqiYCXfY4hcPi7ZxvNvMMHdw2XHKWsKSRdVLNKZWAd6SAd4h6QjEJet",
  "key7": "5LMqTcxVPbe3d3anbttWgdH4kKQAcXZiJ76SccLYmww6PL9FBEZEQn7shrz5SCCLxwcghoCF8LbETstvcUGZYj1p",
  "key8": "3yW5ViuBjnV8C6n51vQr4hywPdg1FHnwCrScKotVqGdx6TAW3FuCN45UNiC5H3JXgjRtCAHwyYRTFD9ixNbCBqns",
  "key9": "NoNEY9p6TW3DpYydRkMyCA88rQeUP6Tqv5WjnWbopd6rEzzrWXda9VmoYacmLR4VSV8WqchXRJWTxXzYYSnA1EE",
  "key10": "2psE2jPzmHi5F9xUgk9FRSXpVWX9xRmAFiYUMFhFa5nkhwHbUCX5BMEV26gdMsd5Y5znB1WjXDhnA9GvCBH2afPt",
  "key11": "3EfQzshgJRNWHzTdsd2wpEp5DfS6BMF36CX9oJLJmaXvSAsBVe8h4BDX8MSZEP2xNGNJEjFS47UAJVx6DLo2ZXYc",
  "key12": "4aiXpeZbyBWjtQKpo9E7wsAMpJXeUvt63G2eAuKSbpHfWU8nhDh8MdFQcjurEuYd9wbREStezS6JStqiwB15JkA3",
  "key13": "CuoAoCyWb21mVUZQUYM5j7TXeHR9pqJnkrWJBeDRXzX6BcJwfcPoSnm81zyoik9j3HYm8PjEfiLhPG4LqRX4gxZ",
  "key14": "ezsg2aMPD94kDdaTB2F52ktJdmiE9xTKekdmp81N8BpMHZsupfXbZxkE1Un1LD34AiirshJYoUeYzd6Qu161VM4",
  "key15": "4zd73KMxWJgcfJ5G479tZP4G9YfCxyRjmiWyn2WYmpWbJNtgjEJjijhUcT7qrM6XczeLJmNQZyBopT52aUeBszaA",
  "key16": "8ehu1BhaGtdpeYnjuEv4u9cNcefa98PFdE2Si6JDio58yn1r7U95mMQbqxaLtaWba28iFoyuWCAoRZKiLDu37t5",
  "key17": "67G28UthoyqA7jVvck7gdUkARp3g5pgBBvpkWVtypYnMfbuEafWbn44BjdnEm2WuKVRSHLJHF2CtxbyrkuSNrvV9",
  "key18": "4hnVSJ64xXjyYfxCH8Hp9Xv75MDWm6NeJ31mjwDX4xbg3BFwZZMgJmTWAMEctktmQs4W8t84bfE3hcW9mhgA8kpw",
  "key19": "RridfVoo4BFp1e5AJ6q51274mgA96HcJzuN2YSuzW8ZjvRyb6tVe9uKoPWbS36RFLmWdu78LneYBQs9nPRgGwMy",
  "key20": "4P64oBM9qZK2c2e5RQTcYpxhVpPE4ox96ds8YwkzhiY4WX4A8DX6bKj8nUfcYWK3Loh99xiGcxQir7gMrk3tAb7G",
  "key21": "4jpo4DmKWWfh18SD2AmE41RLhVrWTMPvvUUHxh4Bw7wgHwocDvgop65uzK8S8qakaNy6tEitRkwZ91MBTXzNA2wq",
  "key22": "3ug31TtWmStggNtmyebpzrUY8sUpN78vtSQv685cKuHNHuLar6pqtbnBVEGT8WjQ5PZmnqCpo9p4yjh1adJmjSZo",
  "key23": "3uEjsG3KdJJzTVwcQzw8af84oe5yoQZbdgkqUPASeYcDRmeidUPpdf8Gz2bJhpR2Kqm8fvp8sj8jEZKspSgXZnBC",
  "key24": "4vQ89ZSU2cSN3gnCctxYQrNof51GEnjTgQM985gejywAWWS472wjrvrQDibR7vxyhjRRLEXrVxqLSEjdDSJxAztJ",
  "key25": "3bUAdkLzsW7pnFXpXCspSpt8zFnakpzLLfbUjTxDQZUfBRGb5YhR4m4vjuUKXxGoUGdk91SWdKaXiq7NixqAJap7",
  "key26": "5L2vff3ZTkbkVJUz52BhBwYErgK6WG4a1GNVvTpaHAbqCSU81rY1yg2oYXweCBfD9GiTg4AHaKgb2v5xg85msjvF",
  "key27": "5LQg97e7HhsaoHjHwVaFdYfejQyNtDqscjXTuJTTCkBJnAfGVkYvqFyBoyAqPEyQHLvYFjDyVBwpAPvjUo3TeoTz",
  "key28": "64CyDBB8VtzLxJ166vyMfdwReU4xBAseLTGqp271CNTagFt8LxTeq2fXQDkaGjVvF1xgNYCNXysxatSPL86X3znA",
  "key29": "3SqXvYHEgxJmHsQL1bKzoBCuvQJTYy29zJ1vihPQBifTP6bDp93KUsPZkPmc2xMENyTEtGkYGvY1pKfY7kURRUo2",
  "key30": "VQ2rHZUHs53iAGyRTYkr1pepi9ECgteL8CXq1rcHTNm8dzWh2iw4MTfFfowcpkkTY1oT3bm9fnqJYCA3b79MHZJ",
  "key31": "4rzUHWsJ3a3LUQxzG5sxGP4USq8a56gS4YGqos3xkfvpjbovvBz5apLFMjKXfgwQ4Md49qkipR1STdMajJnv95Mr",
  "key32": "5iCqCc4Yh4cXuRLambkMvnrHRPCBjKGEQZDcBhWivi61MkCA4h4eTvZztvZYEVTaxxWaf5236sFv9uuuUnay5w5u",
  "key33": "2EHpYHBqTiVp6Ptf8G3piVE7ic2NGoj5c7Bx3HqLuiYUk3abownb7x2WeXbCdp5LfdEXJntpJ3ymFkdem9tAqsqC",
  "key34": "1WZNz6AG4p9VwPQCcKi175qxfJTBGW4ABorwugSauNe9fRQjW1wmT28u3P1F8NGDofnQV7VkwwLgSeqXeV8d13a",
  "key35": "3jxW79Yy3ZxZjjNegKkGwqxY1wtF9u5LPWFtz5aFAqDd23VATdFKviNy8BuWR9rAMWmFtFchBDiuf5ydkQ3CHV31"
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
