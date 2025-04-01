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
    "2MSqsMthvvY81SCGnmki5njSnzxjFgBeT2kQU8nvkSy35JHumeFFVZ15s7WM9pvYt61Qm2ZEMdFLG53DtKRBM2Az"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "465Bv4G75q5jDXeLKS7nHnscgyPSvGkCZpkyeTpF9vsijMuA9PeFPnx8uiu1LKBHv5vHaYiGEWJX7YdQuwaRtGYn",
  "key1": "2x7Z8jNeyjYFcbPQG3oHgEWKfJa3pRxJANwc6gH27ZYWdEPPfyRL2eL47TrrHWT8p5XNXzoUfDhJsEBhdy43C642",
  "key2": "3WLkXgrdZ9j3L1oa8YMCtWhDZAmjMk4yBfVwxqzfx6pVj8DFGkL5yxwJJtFHYCd2oj9scA1ayLf9fAqkifHmwzmH",
  "key3": "2kKYyVsci3T3jy5rq2kn6x1468CKm3BHxQXXD6ezJrF9kD66k4P6KNjX8TGAWBRiXb7SWmtqQazQcCKQqejUphYY",
  "key4": "2joy6sXmprVPnJ3zZTT3FDfUngXvpruVVy94kTsECNKS6dEB3GxmWhuGczBiZi2iJQMTYMhqftvHXBPnnbtfSofR",
  "key5": "58b2NGonSZNLLfnwituADTr8JrgyjoK2RDvQoNYnJXHcYbGq4epGAgVB5tVcaHRYeLP6cVEdPuw28mwXbUCAAnDK",
  "key6": "3hD9Jog99rKr3m43fS4wG7pQempeUuvDVSDSdVzCbEZLammd5iFU94tBzsAzdpYhfirj1BaCBrFgguacUt4kpr8m",
  "key7": "4FMTGCugVp4coQXAAvJLRMSzMpxdTCMuVaUBKucTtx4soEQ1f38XkDTT6x1kkFS4njfkbXgUUDhNzc2W4XLMfqbU",
  "key8": "QVRdLHrFs5t7HgWZ81rw2iV12YGFeiP8juFwyhbMnau8R36Y6W7hP87HNNk58QWNPhYjU5vbZDX7TXwHhUGxCH1",
  "key9": "5BHHYrA6iJ6W6apvwB7UHguFmq6SGTBDSBaQFUFy94rrJDcwuRgoKwZy7XHND4EPV7yV1yMjNA1XVfAUbzPtMapS",
  "key10": "5Hrjz7rBd4mu3JN72LmtCNwYL33TDbumT2YQ3H2cojueusxuaUaqqf4eE3LaRnv2oVjzDUM6qUsNc3kY9FTFb7yY",
  "key11": "2ZeNf7DekrpEpWpTJptQv1upFHdHNakbwqajjoC6NH5tbnH7TqwFtt9DCeWDynB2wTSmavwhgmqkjSmMvZujqxN5",
  "key12": "3EQ2nCkGRpjsKPjxzyPgeg3266ENobPNVnwMVdKPLwJHLGGkKU5oyMbmR7fjkz9xrXuJXEki28RqVbVbmgqyxkBB",
  "key13": "3q4dA4jaC8X4AcpLS99ufgf4WeCEwLVNHVshN5An4PR2U2L7emT3gJ2WMAfbcrttzpDTF3srAGhsUt2drad8iPtu",
  "key14": "362ikHd8GGiScKnqybD9VHhsrLXYTYAfDyGuPtSWpQ5NYoW71mcjo1rARdk8JKdmRPBG9DkhFpDVYdy5QJHrzfmy",
  "key15": "4cn1KhfMb8Ehd8E7ujb8KPHLTpyUuFtxhHMQTyBqNcmZVYN335UX4FzeV4pGCLgyj3ygizSxqr83nZMQbY6S9KMr",
  "key16": "VQxgPFSftoka3kJ2kEmWhLBbd6meUSdV69Mp3gXEnCntEiWF2B4Tev1pCbTTCRQCcoYMdZbVQzrRVfAW5wket4Y",
  "key17": "KXxzuP1piXZ1qN5XEYPzuoEYyQ2CtxbsPLFxdUp3RAAT56ig2a9riqquLzBWepsXq4SCsb2fb9KwM7eZzBmVfcU",
  "key18": "4XKNzSiU2EV3C9nhgoyvHTX98JsBFo2HYiL9k8gN6nCg9LDNDqYNhzUrSh3xsx9kB5a5dNUL79KxLDHS9tmmV9PV",
  "key19": "5c2bxzHMVbSvpGL4xnHQDYXjw86LiwkbvR7biSHSayK2rW9u4bjMB3Am4mHxejSWQyfwsGmJR9CEoswuZ4ECrfJQ",
  "key20": "2cjymSve447NPUj29HMgaKLDzBpTu54eXywQRC6emiAWG3q7VfiQNG2varsRrfn8sXRDZmk9GnUadRpbkpNnmAqK",
  "key21": "vfkrQH2931hpkipkV9ifDkEjPtByEJQeKBncK1cRk1hRHXzLEYr88t7faarrepyKZra3NWt1C8AqDzHv26T2Ddn",
  "key22": "2vKF5vjqHNLMN75PT9MsndGoRtLSLBkTYVsPs18Mxf4uY23Xc5mLpqTrQQew971eXq3L3RSV1wqgS5oD1vDrN7os",
  "key23": "2tYD8zSgC7ZrdhTeCYj3uLvwQEFNu3FbnwvwtUJM3vNJjKnLWToT3S1DBcE7VWyJxm5pKT1HJkymyfEu8fARTqKU",
  "key24": "VbSF31Rbac5eVBsTzYSL1WK9sCF8mDWRq7sZWwGCfa63GZ5EFKFMaabAo1uT7AvATJASBvzpy8cq3xKYdr2UsEe",
  "key25": "21E63pQcXSxXhyQ14B3UF8xGXrBkvwk6QiM2nfHSaqqXnqQrF4a98kQKZFuxB2cRWegRwH8NYCTV3LwoYsixpFzn",
  "key26": "4ou4LYgcQGRyQ7mwXxbJ5JHQGQLXvKAgo8MMy3MviZaMLFx4joncyHBbkSQ2tjKofbebFjcJ97wts3tEgfv2DMJF",
  "key27": "5utBEXmaYGtPvfCD2kS9aRkq7FvH5vAPPATpdNm8Y82KUGUxEVD48UDhPmJJ8ocF4CLLFz9iTWnxx85ReYuxoiPe",
  "key28": "4KAbzcKvER8RMpJwFq7tmFLha1Q5ZuCmmzfXCCidLeVD32RRetfLGuDXAoRtz3MKXkGRkFfXeygMAVHjQcZrTozR",
  "key29": "4j9jN1rwk1Wsvma1yNCy4p2L1k4tLXKwBpz7Bt6wE6TAJv8nFW3Au4FEsTps1whhywQemhZVy2CJqkrBkXpRChw7",
  "key30": "jzP7ZfNu4774ZEXWxsQi2VRZV1qWMb1bY9PAUw1vvaLttLAq2VsidR5pjr9KKf5eHU1Kfn58QPiPVG3pDZhh3QQ",
  "key31": "57zWqAR854YRreH3gtfgdQ7WfYJiyny3RSJoJFuBChMcaDtyL71p1eZR6Q3ZGvidc7SRzZp4wtXDB1EAJ2ADyqcw",
  "key32": "LCTodUC1DvYWjDPuBkCozed6ceYUJbRMmzVDAYpUZYnNpsFSooW119w45W4tTAzm1wu8ZbepuAmDkVvKBtz5GFr",
  "key33": "4QnqK88L9ci9wNHCvLL8UQiuWMPxjXAH7M6UHdhu3Ks3XnSTCGr2uhZr5F9mFGvQLfUyGswz6bbpAEQpz1vxhm6y",
  "key34": "3S5ueqM5feUxxiTv7hnLKkQWduMBDPiri9BaeVt7DBWDgEGMYqE4XnagmgrUG9HeccKDds7StB1ZEtTbHFzdtmKB",
  "key35": "YR8tB5JKXCK8ENYea6VzBwRK7dCbtcgZ1mfS2kTz8nNCwjNWHzkrTXec9YLrmc6RPgu1vUkmHkRZvtaqmQgC5ay",
  "key36": "4W7Ay77NxQhkxK5pBEH1EfDoi66qiN39uDzt2jk5ncBhQAdcXuVhRh1L6drW7myFHH9eBsef9JFR5YEwR3mut418",
  "key37": "2oZLn1rYS7D4bVHAye1vvRxtwoncEA6AGdB7G8rMnhJF8kJQ85gUUPxnY8KqtyV1Tc579ZeWETGbsZXrDx7HtMof",
  "key38": "5hzWnVQ2ckBqWHQFv6ayAeM4bkF3gLrfmheWRYFu73orVjYFmmvkkEHLkJCsNozg4b7SkHHeoA465PUc6VY53oEC"
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
