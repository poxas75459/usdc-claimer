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
    "2Sf98taWGjw2hfKg8UAbpAmqCE9jnd95sFqRjnXb2bTYLHMcTUqtahPqyu4Uwn6TXfuHGVqd4HwGWWdnrTRDqCH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jd9pjYVH4TyyHhQjXEAwRRoognquTFgJoh5E8VBvCk693cFE57NbEeuzjPSyHrJrGcZiMFcb8U2si3G4o9Xe1yJ",
  "key1": "2NajdRyr8wAUCndi5z8ujW2LESjZYNsg2ZyRsWFw4CTbVbxTWCPbvDfpqweMmnv1GfjjMPogmT4thvYtaGPZp8EB",
  "key2": "2rTTEkQUdrpT2aHduvPZVGmcKF9sUhEjcXjR8nXJw75yvqB4uw4PnpRB24RmCJHz3Dksxg1qZtoQH3TWTyb2VYSD",
  "key3": "54Wf8Co8eCHutir1Vwgz3H1x5kTddsNJiQZC8tpdM4io4RmVmR2NEVkL9DVvenvZ84i2DVd91PVucYBbErNNHSox",
  "key4": "5GxLsbx9FLQ8wj4Vxv5sMRhx3M2JnfSygbaXmTTw5V9a3xR8mxHSvR7x9KSsRKaWc3nijDPdBuGBbYLKKqCbjt3Q",
  "key5": "2rqtGdSxo47fbiscHkxbyP6YiyUZKyskg7usJSFL2VNVHUURiuxjo1rFjZPXK81KB1vagVADt5rHt1M5Ygrqeg26",
  "key6": "4LgMBCPrQekrtMcBxNF2cLN3YiLJod6GKpzsLxNz6mmJftjVHzfPXWQVbUjzdYBdTvUHqucYCZJJU1eAQ57h2A25",
  "key7": "2Y6MhFxFbhbL92vE9gpHEQWHjziDpEpAqurEmq9AwciaoZXYHxEvoj6bB9A8QVuHPNWR4cepZQU3WXWj92iKTpGX",
  "key8": "5wCKLtCrBZhLQAqN92Z6gJWyTM9Zo9b8zWC74B9k1mBooaJpLzf6CNeobV3CNKJcME9UJHB7het74dr85Jw9fPFF",
  "key9": "BGUUegdneCyFnnokino9h87M3nT6UjTmp4XJ9jonXBm8CWNCWRFsLPwVzDsH7KhNWgKSWdC4rbb8WVhWMW6en56",
  "key10": "5U9D8hNVDruRY5UomFjyeVwa5CXkmQLp5pkfdyaee9dF4Dj2Mzgp7hqY1VAe2eAXyt3K4QuuWwMKSCDf4Uh7VX6u",
  "key11": "3RKBTDAMJuKxcBdgmD9tFEwupBYtbE1zeBJJBgfkfG7qsfDzGeyPgyQ3ZNcxFDcW31oqwhn7dtNvSucLBLCMftjJ",
  "key12": "5p9goq3ypv8ABnsu5qfeNCE8oDuM1Nx1kRUVkCPyThCmBd1aoHA2vezh1UP3EKCYtxtP53AVXfXixVRiL1tZ4w5j",
  "key13": "3D2LTNB63fQe4gCojRjLWVnEsnrBftvpXxQ6MjtGv7Q4QBwPK8oAiQwpkaMAXVCM51p8LnAHP1ubNGrxDFB5PhnV",
  "key14": "3NGMdVwmbBoeMSwX9v5pwg7yMofhfeHTTZjcGetz1F38D721fhc6V4tzuvNS1eXoh75tLCtT5NDNXimytCvW17rB",
  "key15": "62wXxWktR4U1UXXv4UmbETcZrXN4EQXN7gQdQgysmkJMfuic1fz9ddMU1KxM81pkSG8Ap5mwhSKUGoMdTJpy8wvX",
  "key16": "45vwZnpk1otoJtYfNxgzrn5ifDEdT82FGkV8RhHds2WmZ8s4e4Mad4xMsdUL83vfEiCLTuoyBb8vSxMfixPsUnQ4",
  "key17": "25bTDRuXfC3M6DJSUsyDLkahE69GhwKXznXsh3VW5kATiF9hSWnYBBdsB9Hv2MMxamfTQ8vL12BWrnPD7BxXEa8m",
  "key18": "4aLqsfDfNFtWpBnyZUHg5fCNte9fxwVzQQmCjo3PQqUnGkGHeEojg2vPvQ2F1y7xAfkpcEA5GHPh3MzjHqPoKDFq",
  "key19": "aXDPKHYALDa5sW4EdeV4roEeAYWLKTEDkP46BpWMDDDzZDAiB7xDP9Zhcrjpycdpodh992b88CDvM9nkLhvuifT",
  "key20": "4VgDzA88L6zFUjTMLNvVLdWcR1hKLCbQZzLj2UpT7f1TpXMa5tffUtTX222BviteCSySRdge4b1C74crCkmJ3vpJ",
  "key21": "3pcKNULN71ZfDNxi5NZck8PKXQW3eEKLS4M9doXJQHBSAjGmSXeC4qPSL5XYQUziJeR1cm1R4SfXPjsNzgJgioMr",
  "key22": "3rcvGXLYKW83RyNqjNaQMiUg5jG7PmiGfHGJ9oyeBpPAvDrrj4npkcNKd1mAcJmTeeUatV87KCxmSWvoDw6ZVAkA",
  "key23": "5z58h9GHPMkeE8SaW8KF8FeRQDsMA4wMs3yjLWmydVdx6KvD9Q9PJ7taDYSs4vMEkPfTN7baNqoT7G9oUZH12SJc",
  "key24": "5aUNAHDHgfPxnBjWf3sk5x4XWs44AjbS4aHrFbvZddApXJ5zkabP9N6D73idhTDD9bSQbhoBiLW5n6XvvFcV7y7m",
  "key25": "3TFy4TR6BZjMS7bEtWrkYCcmhJQzVbTpbRxNouk5FJHpk2aQXC5ZdEofhw52FTnEBqoJ3UoSHXFpLvYM3psDoZxR",
  "key26": "2XjvX3CQwJmiMEamph2Ho12ibwM89hCrQjVsn5o8S1xwRfXkaf9bcJUXFkAB9SdrbBJiFL9QtdktBY5TkUBd69FM",
  "key27": "2GZJWgSq748aG3GuvMf8ZVPs1kqgQCqRvNGJiPat4cTzyyR1GQwCFBMA5S85KNMFM1f6oohZ9761UDYhmypCsG3y",
  "key28": "JH4N8zcKFQ6YwDc5oMmXwk5eoizR9xjfZAGQmNQWY5Y79we4pQU4WzbfPixCirSw2iK7hjMbRhWL8pErV4bBoDy",
  "key29": "fHd8c8WjZoN5KEEDdzGzzpExbSc923JrKgwfGnrKcQrnsJGcGt8VPDVAfjaRZdgvtotsmGodv2haje3sTt1Fduc",
  "key30": "HRMsB7yLjMHc1MjsCCzFUDtVLZuJKRqaCjbb5qqJBEBkgMH12MUoR7hNSh5owJGBDc6Y2s3C9AA7fAbmYARq9XM",
  "key31": "4Sgub1wojPVEaeYn7TXDNLepwckdDFYG3gsQnoTAQgB4chGT9tiHfsWj3sc1M5QUZjDpxWWnHNzqep6KqT84aCTr",
  "key32": "d19jAyEYwvgcATvfdL9mQXmnQAFPBJfPk2dT6ZcBsBWWAt8VcRWshN5dFoKe8UH9PbSqPhNsJPDrCjBxsJpWem3",
  "key33": "3Lt7p7H3zz1EmTLESqQa6zATgFufistaAnJAPWinD6iKXRHrboQMAyUPEC1QtGG62LQJp8qd49seE7zGVQ5Kkt46",
  "key34": "aL3bEzoxuufXTkS5Ci9JkTL5RDeyYqz6KeC5kZWRNTGWZVcho25gvjCKjMi5YvgaFW8i85qFDWVCjmPXqLPbUnE",
  "key35": "4Jve3LwNaUHikbxcj5gefXGQxwjrd5q4ke8xgZERFyde1NMprJJ66x9Drgcnsv3uJQuSccSiwyyePHgx7vUFtjMN",
  "key36": "gC9mmesn5MynyR5o4GADQ9SrnvCcyo2Kx5MgQNQA4988WLAHmAKanjTkuddbiSpGi5t6u68HSec7RRxKnmnWdT6",
  "key37": "5oHPqoPG6M4AGgAE9bmJ3pm5gob4658GfQ4ZhYbG7A2WWwMDAuRAbUcZysAfCQSvMoSSGzqxvKCsVqVe3AkDdUjG",
  "key38": "2Rj3skbdeYqG4ZoBUZEZPWUJp4e82vwyMwa71H6Lfgtrj4P2zSQBvMo6hAHyRDDVc9ZXWNyvS2ifobq19oLf5m7X",
  "key39": "3tVvJVfYxZiKzAi9umffugMs5kWTMPt75cUZxNszC4cmdr3MCMg5oaf1AJB2xmwJDorbhNQ1HEASkkSsMhKXKxMo",
  "key40": "31TEMTdaS9y7dsjiJY9xTa1s3192MLH4Hrtu8ebrW4SfJpnK8PguyHuDdenFuQUEKsvXuE1eDFNknwFqZ4qVjThf",
  "key41": "3pCE5QauGtbBn6Tj79cxWkCE3bKcuBvFYDV984DSRmK81f7kEHH88d4FFNmGcd1eA7VM3KYWwUmiKmiNeeSYc6Qh",
  "key42": "34qsvN3NB5RNRFoQrPNvePKnkMRvuwRpY43CqtGKW87fvJm34hutfkz6gebuqzTJpRUodxYR4qEjQxP969WdKq88",
  "key43": "4ZBF5oUmR3HHqQdqNZrRn1vCALV2M7HNAE8AMXDvU7nvV4ZuuLNhtGMWtc9y8RGaSbpwFez4RwPAcjS3QxW4mXXF",
  "key44": "hwirLhA9Xqdn6h1Exe3seCN2pUqv7BpsXbCED8mhor1jCDXdUgJ2MnRBPCPzvngknR4cepy5SMdLG1AVZtnhwwk",
  "key45": "Cqevq2QsMgEbQq4NPNNaA3KVG7nLUDg1ydYsHGqPrRKNGz2iXU4wn8Zz3qz35QGzTcfutaXsLX7TpS47oycYFhA"
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
