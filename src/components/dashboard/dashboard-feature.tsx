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
    "jVzVvcRVkgWRkgabcobs9ubYHNTuLHNHSh6TAyvpAC3jSaeZihvo2tzyG2Mfvs5ivjCK32KaSWiNcgMidvgLhe8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mW3aLqkPMXhdjJqb3FLbaXHZScuozALQHVV41WbwHFe7NPvM6h1uQ6qJiqRrrmYPsNYDZ4o5mgMBGuexgQgNtqy",
  "key1": "369W6MeXw2BveprZaRFrpu91VwH1jy3CXLvV7FieFJTA16FuzWaQpLyuzhAwECaydNFHKrrsMzGvZdXzM4Yyju8H",
  "key2": "3iSDmwZWiDfGfi5XDK591eCc8hQpL3msJTAaib4fPpiTaXeLe1SCY1QwLEeid6sRhq7LQ2mBdgRDcD4fsdkNBef",
  "key3": "4hYbtSCyCPWUhDKiTm55qeX7JXLWHmjmKCQZ9jasMVVr7mzKBK1ACDaWcv3E75PsNCGVkSTmmXeDE6oft1DXhSSh",
  "key4": "2bJG9TaVjqpVpdgv9r34DyhJijkzFu5CeHZvmp6vK4pwwaKWm6AuqeRPnjYPr9UaLpvRqiUYUsmddWh762WKXjdy",
  "key5": "4WypEpB9xMpqSBN6vHd8HkWoQkXmRXK5pWFkQU284vVokXchLVZSJFA8M4FEMg9JJDEfugc24Et6fTwapNDTK1N3",
  "key6": "2edmQnnuJTYK8b6bupi4sAZRXUpSYwM7VNWULTxvuMJseXACExTW9dkrwiG8HrhqAdpbdLvwRLbMewP3KEYNi966",
  "key7": "3Tmfqe6ndvnqeNwvvNipftohntxEqww6jWfinP7B8zUpAJcLox5b99ppBXGJ5x9BRJ2nbbGEbSPoUivzEUEozwMN",
  "key8": "5pmgmMsGTCj21AzsDvFbNwxYant51ZnG24UQ22nxtQbTwh73aKwe5AXLYSZArgGYDtNYyEQW6vvDzQffsh8jhR9Z",
  "key9": "5ddNAn1XHmHvKN5uAzY6JxgNcK1L2EhLUxndr5HxMGxHYqGGyRRoaa7Rxfa2Ssx4nqKpnXhumrh7hAh9np7WhU9A",
  "key10": "34ESTuY1Fo3XoUBQsHtdnt69yk7LZNL7eozfVe1pth1TyupBygXh3QND7yfL6xxogMGeE8YPqTfatQmEbkP5ydab",
  "key11": "61wGJaJN3SFcze5HR1N5d6seZPz4hvJjvu14HeFLK4ReU7URWy24jmCR5gaT8HCjG5Qx1MbLYNL173q9Er6H3MJh",
  "key12": "BMtJXPNUQXrkZzFVky2g95ZXd9RGPC4rGwGquBkEWY4wWYiCmtq5v2zARzpWqWpBvZePP2KgRSAgmRhbNjLGQYD",
  "key13": "3UGhVx2iXWuNF1ReGErNXEujp2neBBY3AzdvubmNm19hvGHDrN4TB7QBBkosTLH8R6y9zyq1CyCjR8ygQn9MHfTq",
  "key14": "31s3dHrC45szn7BeRm1RLQWEJMFxTHgfU5TTibga5FS9g5Lurh74h7k9qUFD9QW2eu7MzfRYa74xMqBKqoEgJpUr",
  "key15": "6wUhkvLTUp2dkXQuxHtSxj9F2JDCJqUB8qogdR5Xn63z6BmCYp36sEMN3qbD3342YiWvqxK1WAeGSyP1iUkavJQ",
  "key16": "5beFkhSKNB3YXWuie2hLBvN8mSJA1WWYHzCg57o1rXNUEENHTMSAKCya3VCcRnfP2yhHWpEmK55EKNCHQYDFNmvt",
  "key17": "4qncEP9J3a2VSRVwRcbC3ajqUZEXwnkjva9qH7vGefoYSmqE5JMNcdoXdh38GEZqttK1ZXG42yxsMTTeRTGHTENB",
  "key18": "W4qzjKPiSzE2cSf8rd73uPFGAo3vFdZWr6Termjnf8hmmU9iQGS3mp59FNBk15YzvcpWvLd8PSXacPxn2VgX4wK",
  "key19": "3deaYEQikSJmBt8XcJ5bajkHqLTEEj2qPHAuW8UMVCFjSpSkhhUsXT37bXgofPMQ8oPZoQRcdopEM2XHtqJdxQK",
  "key20": "123iD4XPTBiKJ56iB8uDoed4jn9ZZcM1nnSfpp5Mmp16Jsj6sxRSFZvDRCPBd2pChebw2ndHrGUPEDekdB9m3YXx",
  "key21": "2c9sJ1cNE8wb71UGDKeVvt5Hy1S5JMFiDSSDE2yLCCCELGJePLTikQmyHdtbNQV6Yz5ghXhTFXpdTDiSfxftMiki",
  "key22": "5qv3xGMoywZMfNw3AZLCVZHE1GLQ9TABZyxR8qD1xa99vgpFnA3PeDmieNrLiMMxDXzdUsWaJGVnbBU7NBpbFw1M",
  "key23": "4sVobpi43XPxJSzw6QGJ1cixJxV35gidabGc45k8HyUroKgqscGN9kdfsjpfRdMrKR3xdMTcNWvuuyvDfXpjHdun",
  "key24": "2TibXnTGSHaEtJJc2onHjXAA7xbKenoESL9zmz4VfHCJgyHgahVu4axE2gZ48VQwbi5UnDXwLxeP9f3Yea6D6MWm",
  "key25": "4jXJKpi6FqefRCuWPHQRGbcQk1Dqr9G5UPp9BbyMvK99egNeyLmmAED1rpPeRoBHKMJsqPZhGgaycY68mbcYQqjY",
  "key26": "2daUytoBSbGxz3aRYiQzibWDjXmCV3eaQoXnUFW31qknMknmJB6YjhXeecYkQj2uwSRPYwibds7VnfMiKQxKENfg",
  "key27": "CXtUjyNPwJgNgp4gE6nmXfY5Q5dqMdm7xzz7jCboNEpTuFWKG9jJx7kKU8yhYHHpaSUdt1bv4jeFk8XiSHKveaE",
  "key28": "2sR9qsw3LiWnRHFdzn5wqzmxxCNikM3KiL9qCMfeTrChL1Zgb2STAgijjGQBVrGgPVjUMgoPh1okTUg6fFu7LacP",
  "key29": "A8a6RqtCtKJyjwDf2jmbhwVzGgq5tL742GnD4WqdShYtuAM9aNFx4vvwkaedMPWpZ4vRQv5rEN3V7HL82GdtYyt",
  "key30": "2xbURDXzAM6K5u9wskSmTrdS3s8cWJCgskVFcjMQV2151nDeZYFabgXpmUVBg6famK3HmqeNgfJiUqfuB6zB9rur",
  "key31": "2qmM3ipjodJnjtBadpP51occjZMe1kAvhiGvWvPTRFogwj3HntuxYZ1kh84Q3dJbAHtkoER8vEf7qJb6GFrQy9Wn",
  "key32": "3jQwJDS8SUi7EzgRPxU5JmmDiHwSvzxud8ozGfbLcvKdSEH4LgF2AFcM2RLtNjsz5wS3vzsir8PLTY9UaQYjb5ct",
  "key33": "493vGNKEqSy2bxCJL7u3Lac3ypLQne8GT5rrfCcDXaLXrikUN2UMBSbdFGsktMLcXXSvfrqeBNiaWSWJDfPNpwEz",
  "key34": "YnnH1dVeDvmyNdoEBiBf18N3mTk15YTeUcZa15R8wsz4jnh4v7CEuYqcBVPSGqf4N3o55pnL3d5pNgu1F9QEujs",
  "key35": "3jUa2JGnysrQsejYvQbm9VyQ3P3wNzFCSxRoTNGNRVp7QyVyB4QJbyiibrCyPxeweeumSAPhgnovG3aNsthiUPV1",
  "key36": "45ynj96hwaoGcY53YW6UsSdA2Us4Cf4LAjCxeeMuiipSsmas713LpwrMkmHFM3JPRbmY638FC5znqnfgACPYZmk4",
  "key37": "f5ZsBmAXbbj8BcpVpR3Xmr8z8QXxLKa5SBdfuSmYf4x2WTW2dW2mENAqvzrfV6VtcPrUY1CMbB8v5G2cqPQZrs2",
  "key38": "3JAyUdWrumTYFoBYKUmcRAt78Qu98LbZJH9J5SL64c2pK9UKXwgaY9ziGsyuEHgm9HJJoEfGjd4wBECmeTgsT8ZU",
  "key39": "4onCPuC9iWw2898Gz1cKwmzdur2r6wgfGscZdqx2EqNN8Zt7mgd1C93YZbdC2DgrfLBs1vgGhu6Wcd9cvXkTsSZn",
  "key40": "3sDVGvjDCtP1MUuQihrSn39BLxpi26Tn92Fa1iLwuyWGNH7EfGwCNufTmo7RpnayAcheKKs1hL4rVK5oeahgPXE8"
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
