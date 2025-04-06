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
    "5PvHYfDHWjcbJUV6Sk4xNKQsJGCV4EQgtQVLDMeVrz4w7KX3ARzay1XFtgkfEA7b388EiY6vmyHRzphJdKZoiW9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pkf1C3QgHa8375SJKzyBQ3zEb9KSrBP32GoXxBqKUfPLJni5vw6au8oGWoZ9JCV9Uqn2KonhgLgcqFLnYJF38Fz",
  "key1": "2Dy6nC439mY7349aaS4YafiGxLqhYaDLmj17nHj9gVqjVQyNz3Y7aXghSGbtH8huoyxrPn79Vcm3fQ4C76MdjxFd",
  "key2": "eXNjKcYkCBSdSh3K9ysMEJbqxNpVa9yi4UXzhvW3FcsyTi5pWRaskbrC7N9xLSb3abJ1VqvcGG65XB6EPRMwBi6",
  "key3": "2hL6QVsGqaaepWU4z95B96DBoTjpdWGPCuV1AWZ1kVL2GhX3QKeyVYSeoP5MekzXJJB82BAoPZX1LvkouvAhT9G8",
  "key4": "27riUWNya3A2Sz2jiyeMcvAfNiBZkVjEKpCGKpksHtouxBH9J6YFGbKfWHpWPsdADQ4f9dnrQPXgLeuSz12irw8y",
  "key5": "33DAsUaHa5y8vCqg5t32t4pCAwFB1Q3ENG9Ss4HYBy6CW3RQe9czHdn1TRgb9sMu3rrzrHbEVH3MAQkXX6WZZFHo",
  "key6": "2iSJahQSHnUjV2L9ZxHPJ5s2nD2rH1tiDGFK2kPtzmv47dTSN7rq2jPiUd2YbHqKtsv4PA4yHJdu81yYKJHzfe85",
  "key7": "bZF8AtuGkNf9S9GXLYgRX8AXdtcmqjPMpgfwnaLBRAF5K95DgDz26XgvXYABf91dy5gmg2bit3Q3b2DZ6smTWha",
  "key8": "JbFzsFiRs5dTBNmM3p5VS1FhBV6FhApMh1aGXfUhnDANi5XDkSZD268NgMUJFLiLquyReVMcyd2L1sWhyFZvfAR",
  "key9": "4tg7qZNp4PE7US7wT4FFq7zk5ai1aBcuj5hFpZqBrFE6thq2cWAZAjSMaVnHPBf16caCQZfXeyqkXxRd7kUjtjYU",
  "key10": "TzGQ3QKDQYuRsUdLmRYjjWsYnysmzetdvc4AmxhdPvkpnKAsSvQZk64aGoMzAZWAvLBCFZnmXYUn4H7LchwrP1W",
  "key11": "2dr2xQFg5u8NmD96e41MVKEz4M27WAeYWa7PyFW3tqJ3XTTFEe9mPJs8M12ExtFUrrDrAGWYKfZpKkJ9U3RnTFhu",
  "key12": "2jz1rnQsyD6hkFJBh3RVsVYwgM5qcjekKuu45BX27r1RQpdGv1trbTHgZ1VfEg2na9JByLfrAL5iasuVXkjWBna6",
  "key13": "2d6oXyVtrWiT2jDLkAtnaPkTt7hYCkBZfmfbZakhZKdLNDmmsrTUvUynBJAUYVpR8u3Qva8xfmA2fyGyEYb884NU",
  "key14": "4cGvFDJSrxcqm2D8r6SFQo7zwZmyGQZ78j7mKBjRHUE4CiXcQKS1VPciPYqGFXiorLXK2k7wp8fueSfpNVABBp2E",
  "key15": "CJmprwasLfjS9eY9XTREcZFifw4qx7J5UFd8vLLoQv7ZPGVn3uf5DsQhUt7NG5vJzZqfzJmBsLfL1ugRFtwVR5D",
  "key16": "4cgkidpc4ntSgngFTSwGMigUooSn8kwXRuZF1AP2WcLqtx61ekVpepcfJEK5funYqw8K1jYsv18SqpozW3VPXPdB",
  "key17": "4jPjkkPHyuvgR6iDESFWhdoFzNBWZGsegy56rMPbMSPbEtqHHZXoBiJuXzHdvdWhie6bF1tmauz9Y46ShMQzmzVC",
  "key18": "3E89yjHZYH8c1eFyeZZssnxcrDKdS8CvncZSKq7sBjpaft7jpXRbLxrMnAGnGQSUxutd9GytpgsjBdZgV6ZMVVgx",
  "key19": "55B8Th81rsP2hoCK56WXjF2uyH3mSVBcAPEAcdgSrnsewGG4b29Y1U9X3x7KpvXb7mp6Qdn7nSAki9AkkDvSmA3H",
  "key20": "3utbRawwjn6njY4Tf8n6TZBwhSBuisF5pnvccibBdFobQuvDRV616eyNVWDZQYj4S2tde3oGjPQXLPNJxpPwyCDb",
  "key21": "4VNSqfjmLAKh2jcUBvMTnEKBANWfyPf4qJL8hDz3H7TiQ6qEftew75fFR2mP1Zc4k4XM1cM8EEocazFnvnznTf86",
  "key22": "2cHbbXCy5fvcaM8uyUcowzcAY6TpzQ3XmWTW6TJSURUFjxU78Lrjsk5zBTtocvDzw7EkLKnsyDMrVt512mfieuxc",
  "key23": "5sPfUH7hSPKNvGcUfRdYoae6YUZbyWP5cVUukYQvdWagrGutGhLBSKpkoJPuYN1X2bneH9gSJ1JVPExcvMEJcrrW",
  "key24": "vaffqgyytT5fj6g68kvw7Cw4aAJ14Da5BFk6y7Cz3mYRdLhJGzm7nTTmuTmVWBD4dBuXEgmcWkm5zuvyC7SfRMv",
  "key25": "25UhVyqPRJpdgTSApuNZp1GCNQGXuxdeMpsEAtUcSusv2o8d3xA6dcaUSw1BbuV2E718NKyWabZs2uc6Ac71gxSh",
  "key26": "Aisfe3AaWuyU1tsBW3ggFWwUYKrqDn8vw8M7MZTE8M5eozteka2KoPYmzCiJdVsHjYWDQC4qvYvsu7QoSXi5FAM",
  "key27": "5RFzagEMsCPR2BXyvekqZSFg1c5bHjedMHGyNKiQLuM2JudFSTG9v3s2bmcbwckk2U3jQ2hD55QufTiMAP5enpUK",
  "key28": "4qm3DXSBuiS1tVh7Jr6fs7my6VhJ2wSan5BMk9ZmEPgJqECmn3ss4HJDpwHEqNNd7QYg2s7VegTMa72LeFb4yqNz",
  "key29": "4F425rTuCMibYcHcxH9a9pqrPU4fq9Wtk4rEda4MCNaop9suEhCSuE1hidpywAQQr83xP2u7tHaTX9dyhnJpc67u",
  "key30": "5BcawvXWWUQd2nvK8JeLHGgtnrmpqw4W3eRVquwfV71UDE58nxo1b87EnCQZWftRticjzbUx3j38fuKF4PmoTVAc",
  "key31": "314rJmY6dXDmqfc3NAwcVPb14wVkw8srLQpNtBs2JiwokNrcLG6BzjZLkMG9Sic6JDckoaG88VaJZTYiVBZhNs7x",
  "key32": "2Fd3BQ3f17TCZdvuohd4THRuCE2sAr4BuFDCsj9ebXiegL88VqCXRPdZqNzWyKtAry6cBSYpT5f2JfYooVDfiVNC",
  "key33": "5retuDv1DMkfJQbbFXXCxePpMXnDGXBYiKZEETgDUqD8j5aUx7xTfdCjDPxxafm3CFbdRJjEJQ8kbUvhZLbs5efU",
  "key34": "29TNHNrUbvqN1v9frLuKkoZjy3hTkHJFx7CxQjcjRqeSEZU9RWqNwB2g2ir6CQE8zsha1C24WBbkkfVwairMNGjd",
  "key35": "2P2sGSHPyJWvVjmpwDAeBpC3SLkywa2SNQxLcenFifQE1aEwvh4DpZ1G9btfbyjsd5eUQjuEpe7EHAAX8ELAbN66",
  "key36": "QFP74DNXck4BrxCkXjWmKchRNbBoMB8Reauv8SEPMMNf8zEvmFEa3gEys8rUXM7KaNdcPkMr2TGqEoFBa5Uk7rV",
  "key37": "yLjLaMDEXQz7H2TXgZhF11UebxvatteguGsCr1TBCYg9h7Ph5RQCcZsJSJ226XhxUmBPcVTZTEiFKgUqwjaMxNg",
  "key38": "48veNav2bpNcWHWPtrce2G5WE3ZNqYBWc9Vih69xKxRPUr2nCWFyRJP1fUscLEDiZ4ivDP1Dwo4sJYURyeiGa5jh",
  "key39": "4obEWwbK3fChjjhtSgvNtU4KmPSPHDwL5NNvUb9BcHfKAvQkXhFurpSSCZCQym9RapNic3dFeapygDRK5LBMe8kn",
  "key40": "5cD1DKY2V1Q4PRA3UzzZhRS7xd4m1NW36pFMvJGvNTPAVsT14gRqNR6Q1o3zvnR6cekoPi842vHDZz1kL9f3nPAo",
  "key41": "3ZDWTR6kDAqH4EMBiECCcxgn2aADsyDtnLi9k7KzF74MiFD7tpta6vT3nJVabKKKSDzEYW3tA8dUprnb8VhciDu7",
  "key42": "2tmMZFNLuFjrFF3cXCfDs8BrMkfpd5Z2qKvMyzCGMW42YZxiwuMrD95rJXpsSXuR1enh1mDrmwBmwCAoSosM8Dyk",
  "key43": "4XcLCoNoLnTHdZFo5usJvNsHBuZNFhzam7j9ZwcTUkheSn1kgkb3EJgYL8dxE9EhD4PkNmGFkAyfYnKTRF9gMBR7",
  "key44": "5gbLFdrg4LWr1AxF9ooABFAuC1GUt9BjUhtYyQkXLeucoVFHnffViarv5X6LJi11FL9jZS94xqj9CpcuYQzaeL3a",
  "key45": "3qqLqhgakecgw6q1vYuwYjW6bavJS3atD2JyoDDGAnWa87bJEYpgJei4XAEQR3G1oQbxwMGHT7mPzd1xWKoUfHyj",
  "key46": "3y1nGfNGJwuThTCT9D4QweyRtySgJxQ8cDacErYoUNxTy7axqasmqDs8bnxqZautAT55xCfhJbzVRW5QCLXCrEq6",
  "key47": "2p77KWqi2HHKfHjjF6pWa24vbepbu4UTHyYvX4tRNL2tKc1E9CnEPE2GrsjkT9T3KB1zbJAS9JC9ZW4jgLb42v66",
  "key48": "3xBZFuAAibgknPQ3aVU8Y8QFLynZvK4JvhSdKjgjwEXZDBarUAHNRnJEzPtoGyvsyySc27hQLvEtQihVQdBTjRSN"
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
