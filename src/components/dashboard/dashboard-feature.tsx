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
    "5iqKsF5Cc1Rsd1E8woNg4PDqmg2qMXa4q2bTbTNrRJ6YgoXZTkJyyUZownbCrq5YUDi4kEp1VULJqJ2rKZrVa9ZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JwpRJEPkVTiZhH2THo6e8eZ1YRxubgoJ2gPYVy7kVXjp6yPajzGkRfqDfnvk4gUyHraukCTeGyjXeotLtgRBQa4",
  "key1": "eK2RxRYuaK2rYA6HnAFV6pYXyuVVTg29DB1StpLMTPhp2Pi9F6595vpbmkp4buxAKraCzUTAXGXfpUDZz1e3gNm",
  "key2": "3Bp7MM6Ag1HkTSLsPVFJyKxezhAQ8BABAhNnjM1bYyakpRVpbKxQFBrbTi83Ns1kNqcDuAEDGNqLq4Gj4w86nqcp",
  "key3": "4bG8ZeEAUWyWUZh4vmffPTVgCYKw3U6RPhsF82fULpTksMhFNL3qM8gBQ95XJLN9iKQHQDyU8sZXtbrLNNm49Cxr",
  "key4": "51QtYDRMgPgKuWud57RM5ueTwkCDbsxouuRXL78E5S84JZ5bNdidedU6bAxBYpVAzUckkDZRBqPMY8whXMBxJA5u",
  "key5": "5oup9vZSGsNkeAfNc9CBHjsm62M7v162qoKi3CmiCJG3YCwf43BuQdq6iVWDFnyWrDuXYbsUruRqUM87dzhSZsTt",
  "key6": "33ZR8BoGoQij3UsYSke5hzYeziJcmgLagh28njiPs47WETMtbm5ofU6QLsVZ4XVymaq3vgiBiYU9HcEgEmRkUFRn",
  "key7": "3PF31d7v1SZJRD4mFyEcnXwB2bnjM5KRtiQEqXnJwr4trGB7wkaWPx3ZQFjbmPme7affpJ5UqYicwtyqxagoqanH",
  "key8": "62qDCPQiYKftgcjgWydzGSfxAbx6gc54swAqKXdv9GPT45DrnNEXu2wnHJ5mwTrtdYn5ETbbZ22JCbcv1UVaLpw",
  "key9": "66oRrCdqu5YdpZ3xUBTFN6HwGL2QcU9UNTV7kRYKMGvKwK4RKxZ2ZCegcdjztRR2ktAmgrcCYQqir8Lj4HGaLhbU",
  "key10": "2MiYiPcmsPHZJkReogvMLPwUK39HuYad8fd9ABLv35Y1rxZRsaKtGy9w7Kej82BxdmKQQT2MjiGTTgs17jpCABz6",
  "key11": "fSe6RCJyhLQM5mQcgEffM41KPUpDPgeRoSDkeHyy9t2Dj1JrpsJ5z3kR5oxLcGRHx2LdLwwEwH3MgCVdq3uqL5f",
  "key12": "4xfdum5v1mwjW97MiMonqL28YX5G5pYnpbyNXRJmL4DZM53tosoQaqRxfqA2gDSBF2FkU2rRmHXvZxgunDsNgLK2",
  "key13": "j6Zm1NCvRjfVJsg3U4QrSgsK5qw4jNdQLs8URfo3qu9SHdJKJJLD1Uu8s1VMKVwSn3Tmc16nD2Jj994YNoFEMVM",
  "key14": "tFoZvtdCXxt8RWPEJRstwwqGneGVwzP38upXVCTjiFXtMtofsBoTKRFMDLfQAr1s72ryqeZmtb7ACmGCTuafQR9",
  "key15": "4aCAbN5kwcgGMEY3q9witD4bL3TK5NqYooFMaGSVZcBaJ2bofy3bGUJJ73xfdMqQxdg1DY7y5Ra5mWitChm8BC8D",
  "key16": "2Urcr9SgG4y1M8hmb6FHipELZMuLQLDoqH5beutZuYSuzDcwRBhcGKgXCnvsVhsoCkVmyFSWpLwLRQDesgb46SZJ",
  "key17": "5JfEeTByx2cJH5tQfbJu2Wd31PLw7uHC42PXw9kZTFEjAoHbdqvvStDD5mYXJaLAZjJf26H8maMyp71TuKseydru",
  "key18": "4xvQ5a2Fw6vBW1CKJYhXLcyQeRYSKuR7yqz6NC3JBL81Uj1ior5XnTC3gGJW9z32uNBe6cAtbGDg2QYP5YiBj2vN",
  "key19": "2inf9y2gracbiMaywWaajuzWoZkYj7pg5mrsxx4up3SkYaaUWNMtvDC1XcR7jehp84RLuSCZYDRaAQADwy7JN4cr",
  "key20": "2w11CYxnizxW4t7Qu3GzTGedL2Rdp6Gs4srSae1PgQACp8N4kFd5bUMsRCSYnQriuFQhPEdtf4uAJnA59iJbGvSP",
  "key21": "mKXGCYtWnrF3rHKPQvNMAmV4HEDv9axUfpFUfS1pHXWDEcvxttscwtSrm8heTBNApcaRXjhnfSJnEkEgmWQin9H",
  "key22": "qsDAfh1vSHpzt5dL69JAHG81rxuQxzCsqW3oW2NAmnbE2apk8E9kap1fxNPn1s3KNYHczRAhizwnDmuXsG2iTTK",
  "key23": "625tFxVLjGMkck3cy5TTg2z9gcHyxgAowZki4csBVK5TiAn23JQow9x3XXPh6arWMVPm2JueNxWiaw6Ki3bQLVbX",
  "key24": "3UMtsXbh6M7tjp53JsVdP8d92sC65LY11QzoERMgna6g4iE1QbAwxgSkGfeAZH8SJFfQEJP2FWdp3w148uQGCqYU",
  "key25": "snbcKGHRX33NNpKTHujhMaP3pMjgg5aj4gbw75FJznX1r66WzeYxwf8UDTxTqGre2mKKnFmE4RZY2Pyr5mxtNLQ",
  "key26": "55bHDN6wzaa4tejgpuSoSQXMzHJ2msVJNibjq1L7CXacZt2fT1E7sNJkha7Bm4Gnr7LC3Rai2TxPuwRD7zv7qzhA",
  "key27": "3ZHgqUHSVD6ZxZjW2bf3SS59XWKvbYL5qVtM3EgqgcFpdBUqj6Jmb91rMuqStCx1M35mKMVJu7jfabqyurRRmVjL",
  "key28": "3uArEuz5ea2uXj8BhBeVMVdurycK8sGzcz3XyNo4PtcZuwSJkYsGuYfqXEiH6mfAxwNVps62LX1dBJ36V63W1YD3",
  "key29": "466ZpWwtpVsJ63K3vgLNmrB8VB6WVk8AmaVEVWm7xtNswPQ5pb8yriXSe135jAuG9FBggUy5mmv4CwD3dGjrP12S",
  "key30": "5q68zLuSZ7XB4ZYEkgMsBxbZkujt3cWcda2t4mEdNJsY7m96JxV2bRXeSTGG8g6ygCkM2QuVRJjJgVHgtwQJyyRm",
  "key31": "2Xbd3oYv5k2gsCDkCEFNDNSXZcXAHwqNSZ9Sf3HSu22zkYjCdsMhwjaHYJ4E8ibtyoAbJaq5hNKMQYLykMto9Bnm",
  "key32": "2A812ETS3awsY7Q24QfjPPyzypChT3DfsNJDXsvhmUXNX8JzYykNDjuAeD9VbjC4sVQuEXmj1vGvuEPS1MtR8yik",
  "key33": "2wU4GY6CbNWVaNPCgKu2TPvznaVJpGtB14srbVDFo5koEyFnaTux1iofEXeRx4n5JfD4sEaj8KCHGmSM5pHkmZC3",
  "key34": "4x8EG6C48dQZtC9cdtWsvJJaxPSquCNayQuktQCZGqzDzrWY2XzavbF6S2njBgkLSpL9SA9CojseasudxotXzLiP",
  "key35": "rM5KVGhHSNiMkwtPPxcPTWnVfTx2Maobdcqvf8WRonJktfhXBJ2WCH2YgsHGxxvhaXcMKHDf4ntYPXphi1s7iLe",
  "key36": "3kv9PjePPaYxVJXScbNx9LD2AHv6EYjT14JSck56sm1G74YwGD6FBnJ9sBF3EFZjsgYFxJsr3VxXCGHJHBwEFM9J",
  "key37": "5X7kzR3WhxtXo1XsUJX5Ez64bsZXrpXdG7b7A4TSeBPKhCEW8cCjYxtdPkPk37DiZAbG557MMNXjCg888krTfkYi",
  "key38": "2v4eg61c7v5vzkFLrxPfYnFopqjQC3UGQCroqVC5fPHc9anEuCi9tUkbodCnUNM1ahWJdbgNddKwCucL4Qg3rMMA",
  "key39": "zEDnFnxc2WS7vxDqU8GoFGkMg6yhH2QVxSp54pCJ2bJo8p8ZQVxr1Z9kEeAkLfBffUYmdN5RpjBGfHQe9nmq8Yo",
  "key40": "2aKRiou7Q14zRaceET58EcTFsdkQNjB8zbGF3rgwm39r474Jm9S2PaMEY1AoHmEmeGZDpkKhg9xMy4ecHeSDhFNk",
  "key41": "36GEfJarbqTF8wuxBCN2Jiyd3JXDPnP3gM8ZgpFvu199WPDVrpTcWagxiqeMk7jnpL9ccePW4nGxGmts69X5LY8d",
  "key42": "61zLG3h2Av7X9PNB9ZHBVtz6nUpyTh2EHX762RVDymgduPSwuHDz8TQdpFNVagoqdw13xyoMpWJdBPbdhoQkqLyL",
  "key43": "icwVRBAWupyxpiN2N74m9cYxeqG2P12waDqXMTzhQWoBEKAb9vuPxzAnT7cCzmj5ycy2apw7heAH7Uy5CwV1yFY"
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
