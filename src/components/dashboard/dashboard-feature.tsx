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
    "VfqX73FVfaHJzGkecyo3S37vup63V5ei1iFTDEEsaJYq9nuTRrEvKrGLkhJ2MiGPrqJAHcaF32xXuJgke2HMS4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2inkfkx6FqxbJN1ZvqpgtZCsGh7CYsjmz5nuGfVEGzy95mf3gaToRroUaWNhiznNUANbJujmgzK6NjFVwdf5ShD8",
  "key1": "5nohGiX8SdSaZyNUT7Jck6XPaLBjrwfs9SmzUpyE5a9mFZPdsf4mKmXD7oHz3z9NhjhF8JEKwMn5kj47MNKB6VTz",
  "key2": "RgBG7ZVaQcQXMzFDPq5fLR7TbhVd8fGZ3uz5k8YrcKn9W2PRNbMtnWDWDr1ChXtbb9YGyLZGzwKkVJmTea5jFfy",
  "key3": "2fEhQDTB5fApts7r4NNNWeNAq3Qf5EqFmQRaB6LK14kHkyfHj6t6vSzZYwfg9R7uekSEg6T17hompPYV9HYQMTyL",
  "key4": "vc4Z89PJ7v3Qvb4dbNT89jmfzTLPDBNQSLErQNEBtd85Cf9Jx3Nvwd9Ub7W5hxLa9cBwH2W7AZiPR4RR3bH8snk",
  "key5": "5gnuvrRXGqs1wMWF4vxaVfNdRGZ7LAsueVsVCAJi8A4MD4r7ZVSSZBf8WFcysKoH9d4b3q8DvanShLWmrXsHYACa",
  "key6": "ieV1rxWeb1eRSdue2vcDtiS9jUspGidc2WES1MUrk4CtmLkPFnV7p5LKgQGNArCNiNaBBF8jDxaCynFbDd8hgSp",
  "key7": "3WCKH2ZUPyuaU7ppKiZhV47YjbcvA2UthaynT6Gph5vHbkEuHsT6aow8SRRnk3mypRZNaFkLiCfTTV77EVRTdtvc",
  "key8": "4kkeHvtojUVjPJzk9wmrUc1pbxJTGbdJq8hhx6cVnGdznvkaiXwt4fS8QDAZUZvjEnm8SPgccndAYZk3XHnEQ2zU",
  "key9": "22V4YT3AAfYcRG6DEEjt9ZvrCPUNAg1FQo82yyzdRVAnAqpDqALivQ8Rxuh5CZLRc1sko2n3fwtamfcxjhnCAB33",
  "key10": "3iSrpRYRDoPSenMxXe47QBGLFw7TNWjqwSXcj9fKC5itDbx4bNNGsZyQR63fwGcAFB34CSYutxLShYHeVUfVAXrq",
  "key11": "2qbPwraZ4YEU8hHgwXn5hGcyaXSqnPxxan1GMSoRzqnaCon1SDMWfh28Dg1Cgb7VbjLyMkVuCZUZmXwJK1tMaAmn",
  "key12": "5jffn9vafiQH6oRoc88o7w7f1X3XtbJRVDZanqPC9b7heVkZqdFNLyKaFwx65Q39YsqPWgXFBHv3g6piEVRnnAZH",
  "key13": "47yLFEmtcufDybBsbncHTaEP9QM1ZP8TDMV2uUngonyoJ9bfTi1C6HAvdB6U8MCQV4cwC9NDZtpzRDMsGhg5wP6E",
  "key14": "iCGarsvXMP4b3c9niDwUdHyK911Ezrk2z9chjTPBUktVWtDeeRR7GV2mDdDetzfqJuqSKgV9gzVYafFMnhdKaHi",
  "key15": "39vohiir9LLVVtUzPZJ6pQrinNNqvKezHwaxmZVeMhRikvQLofT5woFKAQaKfj6YGiprMtNaqG3vNMEeZmxTR1hD",
  "key16": "5WxKmkKKgsk4Mb7iPMS1mjSmeBmgges8ywfugaUyZUtQED42NnWePu7vzhAWvReLJYmxmoEFfRZVjQiMD9g8V4fV",
  "key17": "2nPC3SBf6LcCMDgdFgwHaswu7RJHKxYi2Trm5Z66aybBPHmNHEgucsdwxAt8Pjp8HFpEoHw8admEaGUjP2JT2Zat",
  "key18": "4R4sJHp5LY7wuuzZ9XHnKWxFRJzxvchgmdMxYuuceMDXV5dTdTekUMVEw3fSBJ8j1DWsBJsSB9q6ScqTq7kMvJjJ",
  "key19": "5Ad3DVsYYkm43m4H8Mh67eEyovzKEyiLqAAi6n42abPjxkw4dNon3C1kPXkvLxMpCezBWNHWPke2euf1mSaHTjwB",
  "key20": "4txenHxyut6PTh9be8rcFpaC4x585UbntsFC17cj1QSTihmPWd83shZQD3qdhHdWhSewSA8AMDsiqAqq1Bn87HtP",
  "key21": "4hqcXUpPgYZivdjxN2Ens8mUNAJ3EaEsnKvZMLDiPwJBWjR5QPPtZcibHzP6MMMcV1oq8n13mKv9vmcdLvNm9mmt",
  "key22": "5H5qLon4n5md4mTqhkJqMvicPchWAjPgtFyGWhEvEDAdTcr21GsEtWf12tJoW2JfPJnZCZpT466LYiwA9J69etgd",
  "key23": "5kmfnJPr8v8WSps4WNujvL712x4KQKguR9fcnfa2ATMun1FeZV1szpHyWfasHSeBbV9UsNcAUxDaVsUiyXKN1Egi",
  "key24": "z2UtPew4kF2L1sG8bYXzNj7wu7Y2VAjzJ4Scxs3tao9YHqMXXtRed9yRXKtzMbzJmmMgsdD8y34FAms9kL9uXLD",
  "key25": "2UmZ7cR2oCqndUnG8tB3YNnHSnTs9Lx6vxydsgwLAFM1HgN9AJTmMir9U5FPHZTFVkabmiCM6cNJ9MJj2pqek3Vx"
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
