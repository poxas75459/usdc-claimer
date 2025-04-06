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
    "AEcdmgZEpB7UDsTA5oPoadYHhLYmfHQfAcFRAsZJBh9DoWkj3ay4C7T6Us6z74nGscobk6WKVq5T5QW2ieSDHm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3awtbjPc6CRgQisT9jAP49Vd1BjDdqaBFyVSkmPhkZGybUh3Wk48WDezF4KhhC2DUyGRbJ1QLyiG8C3m1ZRtbmJf",
  "key1": "5XMYRccvjviccJKQ5ENeesoXgjMpzMYkmQM79dqSJ35tvGenQffi5Zi5wMbwL8YsBWjg8y5hrXtoddvkEE3JYuzH",
  "key2": "YiWzEvYXMZZxsFya3kY2CtmihMpVkQ3o9xsJqVX4xizBxvjwF6Us3jxzN4fUczT2VM3mCjCze83c3jtxKh7hoXQ",
  "key3": "5WkH5ESAG6n5wNFCPMY3bvQMLmMv9DtqcWRYtvZUte3sFQ6eTSAJ9ztL5XHmRrw1yzvBM8aQw3niGiVWuMDVUNex",
  "key4": "3bVWZAf84pHMfoP2DWb1UGVW7XH4PoEyoPwHwYunsRmmgpAxW1gagK9LkmM3kcp3L4xgc89m35Q166sQ2rYimR71",
  "key5": "3GWuaZjxFSG85qPpGpc9ycYMvbNpRoGTHffFurLD85FnRZkkMphLEfPd3AtCa9nfnR2Ha1fmsiKDkZFLEWC5ffpX",
  "key6": "4VpWYpPqHQpZLLauy5A6rZZADJsVRKfbTXYyKY1nBwk4jf4jHHsxhRCSxTd1RSiNTiAv7y3CzoMSp1NztSrvB5oH",
  "key7": "jiGsPmQwWKhYRFQ4xv7iMfDbH8aYWYwbpZH1cCf3ENZc3seuhparjZgiJSqQnYccepj5VZPa3ojUJF6jNB4MXpy",
  "key8": "2qYYSkJCpW2U7sFffkSJTpb47CiY1Bqbj1BBgntJ76E7sydmahwZuFK8ZJh1mrsKwdhviZwjRZZ15CPTwmmszuKi",
  "key9": "gdcT8QdZ31NT7UgqT8MRQ4KXcD3vMiu8EqYh9onqd9SkYeQ3xR7GnxSWHNHK4NMsDek7Wv75Pop5aZ7dTLi8htx",
  "key10": "521ztar6mZmt4GMBubekKYwhBoiLhq3Uz8X14r7u5r4VQeDvBkyjPNb9Pox1j8BCVt3AbACiVVsq29qSMUkeXqKf",
  "key11": "3VgHaHeoAbCTxtUa4FgXWC6KrGPptGrmqZaFWMhN5RWkrsqdSxKLYBgPu2ZJJwzzPEq6k4VYwpPu3EQHhKKHryxF",
  "key12": "5M4CGSG2rYdMeKx4JFsSfxhYeAjgmchzfv3FfSUdnjJFYBeEQCypRUqttdcQ1XPbuXD6wpxJGT3e9bWD83qHwk4R",
  "key13": "2NsX9R3QmRmTbmFPwFwEdxrEijgBgqs5GPjYgVSJ5fYu5ciseBKKFgv2htbvBG9FLRbPD98WGwnq6CckqdV89LxP",
  "key14": "5AFf2qF31oCsg2BMvJMWAA8AeHTjhYQi1xfQbd2eHYsJut3mS8V6ZYgE1k6bNUsLTQ1RMUi73E66fW2ujzQZrXje",
  "key15": "4A8vRBSGaFxEntzG9o7Nh8wzj183JWUcuGdQhmNfzhyhQP3m2XmZTGH88PQxBRCzse4uRbqv8qSRakLqaCBSEqUJ",
  "key16": "8Cjoz85LqszndzM2YY4rFatVNsmttQ7UpWZuxP5mRAA9pKBnNJsgtErXo7RwpsMJL8KLgPfR3vmL5AdxRStYHYZ",
  "key17": "DHkQvpJ7vCjVC6KWMKbBMyeLb4E6jeZNzRGh2DvWosPWisMsgZ1unCiegnpXecfUh5t6G2iWSaU4TbCwhGpghab",
  "key18": "5QLAZmBiKn99Fe5ZT5pRr3mEoD6U2aDV1HucKNCrz38z1AMRVk1aUmjkuiMchEdwUHxYqknGgcgbLj9aMx8NF9yE",
  "key19": "3pyVetQMF7h9rxuRPDSY4Hz2BmodEa34FhTAP5GXJbqEkm1s1CrJNFKG435vKyZY4eVrLgsmwv9WyE1eigYR8GU1",
  "key20": "268wwDmAZ3qdgTUQ2ADqzwPZYRJCK47XpcZaytXuqxSoFvgZMeSSyrEbvLJnhaxXCvrjBnN7LvuhW5vw2NxFDqTH",
  "key21": "4UfRfXuzzEG4U7TS9tyGb6WEiz2iiBtMWAqRvRSozuYZyGs3RGyxyHWt3SBc5V6E9u84YXK7ZPWjYphBWPEe2gXj",
  "key22": "3LWhoM8HyV95p7BftCHHygm6QiAoDfS3nCeZEWn7uSfgwJwsiwjNPed8nnmX1t3iqtFHmmc38WRa7xK4w5LR5nBk",
  "key23": "WsASM4cVXPiHefFREHN6dgzV8uMaeMgzSbL922in2J8ccG39j5H2uDJeRLETc6bBtgC1dMszyz6kME4kS92QbTN",
  "key24": "n3Y7CczCrFuAzVWAUkPWXbawWpouampng8To79mLaJX7UzizS6CkpEnEHN9hUSyPtAEF7LrhpJMMQtuS7PAhwTJ",
  "key25": "21hLHjBDTJtX5c7WsxDDEttDmSysorQyQeFx3yuTHzKHvvHsb71UQTDTQp4RryWFqftzEy8tsmd5AgAtFJW5ZaEP",
  "key26": "2WGnSea9jKoMSnkEvBFZAKNu3xyMSunMFt7mHJfWT8dun6d7dPKMeSnMmzU2dHH1sppHbUdAbDb9GNVNdXZAMmiM",
  "key27": "412qFTj8bkiJ8CKPi37DkDCcF3nc1GZJJTbUHKb8JDmGHEAjuKjNq3MYokUuY5Rt764Ts4TbJT1gJsXyVtxKwsjU",
  "key28": "5RyWtp4Stu7qbRS282WMgPcAU2Nbuba3g6PadH1K8J2FNPwxGkRRKqVLKgiD6ApN98EGBStpdsMmx4EUdWCyUiSK",
  "key29": "5Z1ckDoY5x3rcUscEhLzx1AEKwUE9BczNnApy7MCfeWMTmNZ94i58nvFYmthPVg1CTLU1KthBS6qD5U72uKJCkDU",
  "key30": "52YG2PABg1VrPtfuYTNdSV8KJcpWjjnWM6vwrnmkBcAWtHoat4N3JmAJtLj5CSMQTCDWBCrnog1PkQBWqGCGPYct",
  "key31": "2YJKoeanpD31w265omjXeNXKdXVW74WP7wsQ26Mr3tsBXPERfbBWhjnV5pfHQKnxMZ4GVFQaFj34421R2WKFqL2c",
  "key32": "YRkpU6J2Bv6var2XTbwbFFrofmjAcJ7Esjz8UGpdg9gghrkYGWWepRzJ9mKmbaJsFWa7D5HZvaNdwLzHqDxhu7H",
  "key33": "44MeyKbg8xwqnjvdprAtyi2xmnpQPVtbfYNC9sDY9LzzqGGSRkqSXLJDzCCSYL7x824aoy781tw93ySRLUys4oF",
  "key34": "zSoGB4C2NiLAwovNVniNFSLUphfvaZotAGQjZGjyPnGTEyzxBrywnvHs9Qt8s3acczHLmgjAJhMuAmSPDt4UEFH",
  "key35": "3z9bK4EkAi6VyThSCrzWFonXJpNXKeGXH7emoZdQpPPrTfgQw5QHnHnQefVeCFdWdKKen7zwDbANEDxmTJCBexb2"
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
