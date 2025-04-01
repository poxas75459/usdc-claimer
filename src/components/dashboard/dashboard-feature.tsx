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
    "A7YqkzMwXeJhH7VAL7t2nCKW2qPnMgxHJxb78KGpUdeyNCpbkxEYDMx4qmGV5ynjczFRdJ7hTmHtiyoUpR4K1yp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WaL5cAbjYLBYKMA6PefnfwfAuuCsHaKbVMuHB64U4bQDqXu12Vsh1XPJi9KHH8MPbhuqJrHapmCkMLqN2Sqs7JF",
  "key1": "5wV1Mmg5AoQhRN4JxT6ijb2jS6k4q7tSNpjdt4mn6rEEPBTHKxVNLxtSuoXXoat2tryvrM1b7p7C6QmDf52iR8y5",
  "key2": "4SgamenMqPY7UmQbwuhrBS9hC8Bey4qw7M7P32Ri5MYdNrRA8EUUqDmkNZeCNxSCQpbgdvi7XCPhFfk46p1DHDUh",
  "key3": "5kpKSajGjTA4bUxG8VF48NLm8dJA6dE9iVNZ9prcjFRRBNtNXXUZma1rHbDQYSVkW8nWmf6gRe1iWVoMX787VYCX",
  "key4": "2o4DHkGB6G1KktRh69TQU49Zw6NZY2gdi4DASCtBcmisUrRG7CPgaQYnHuAmV2BhDKWf8g3KnvLQSLiLwoJQaFvz",
  "key5": "bSFqJjrUn5RQHNH23MXureLiGDdn4ziX1haJsfdxg7brxGoePavJeZyvK4BhkX6iCAL9v1aYLjLLbdPmxGAELTB",
  "key6": "4CT2DKhW5iixdFay7SaEJgiX99HA685vGEvPTjoYPknUfT3vFb5Ci2ZWrd4W5MYWF2FnBmm449WERjzYXbMCWWKY",
  "key7": "BUqzA4VQc8LQMydZLwjqLYF2Db8Jmgvoeksw2FXNnCciM6XQZ2MR7wMrxakdTZwdLqcjRrQr4RXEGuJM2Gh4wJM",
  "key8": "4GQLcXTLziCDySC2XMQgBBhaVAqG9VFuVbnwSJRb3zMirPkivqcRwHWggvGKaGadKvo5M2gcsk7dDSm54KvK6HbT",
  "key9": "5ZnfDP74gdTtWSgg5EK45wJDSNREJYbkf8b6SCRw2HPvRpgPqgruYWubW3ftxEcC9dLksSkfimYBitVdNkkB6U3",
  "key10": "4KrwBK9EehdQmCBSbKSZ3eepNiyRvEQRRHvcX4W6zRvNXwitu4Tzy6a5zi96bgfBduSzRdchAq5Ex3aT5am3YwQW",
  "key11": "44Dtjtto7kC8G2T1h7VHxojxfsNVBJ62ncKhYpFmPP3U56vrfqWrYaLWCLUtfECHXozzP3xpfLweB4E67dhxq4KN",
  "key12": "5zeA25Y7StrCwoWFeQnAKF9aq8sJtUQT5Q3UK7J6gGjbbwjMNadUm2Y9QYgnfvhW7id1HL2YDAvhUve1oKz2vetx",
  "key13": "27xZfGvPoHpAAPgdJyuXx5hgXWeWuHGBXJFMrzUVAcfY1TP8q6ysxYNvogH2CXsKVAhSSBoa7R8NHeyASfm5ZTy5",
  "key14": "UWQHKhVhG62rKzTocdj9iFPMPZooZxvv3XF7ZTtGYBJHbvJ8qdJvirsUtdbnndtJNnvpGGemrBkEk6Ucis7p6DH",
  "key15": "JkWYFg67Yc9F5usrTwjorsbtxznhhoKzsqCf9ZyyqDYKdU7BoZnaawgXvfg1KC4df32qe6WF5DpGcVjGTKX92o4",
  "key16": "4uYFQhx2hUAmvsej4KkWMaTg67jhkwgak2XgX2R7w27Xymhx7pzJoJerQv83SCVfMryX9SyMXCB68u4GHsbUPYse",
  "key17": "S2kuDAHEvm8F4NtJGbeP3dVnE6NW4uFpAKFkNoWpy42pFJhYC6yFWg1asbdnKi5F9AJMc7RdRdW4VLC7bqKrCkr",
  "key18": "FthGNsfn9MqkJxgCpysGs5jbwaHhcoF1Hhjc3iHRRtXsGg4NVLTjPVGiSqB5gdEJ6yqerAdwUbcw5dx25v7aLer",
  "key19": "NG3mqSFtLWK2x7AXwqeymxbJRjb6yp1UqVMqpQ3dNH6Fo6keihaTwPUNsyhXfJkVgcwtRoYNBFhc5vzAEzFZmdw",
  "key20": "2goVhbP94HRqkUb8PCFWxCUvCsrEBXhXdkHzyneUBYytKsw2iDuCfw2RwAeZSwvG9i7Xcu5x5of196gSqGWVDiLV",
  "key21": "89YhbgUVSffPVcq9KiBscEP2EiBmE9LTEoo2VywGvbhPMVW6BNoz8GrPz9pXW1fE2aD6DNh1J2ZXM8oAm9qR2H2",
  "key22": "tvnSTzc5ixHR4JnejZqanWjPnPzPez9xc6XBAXYPonLkPodmNMfNY5XLVYenUscpCnsKjRWj61un77CK1ES43ku",
  "key23": "21Vso5qVX5qyUzyf1AGiVG2que8Qys7cNomJuxvbLeW8mS8fnDTHMQUdLX2toCXuyTqvugGBURb1RnbUs8meySEm",
  "key24": "57h8tBnxoRn5fGBYE8QNm2fhe3G4toArTxbGeUsmBUhPVCkC9bisPjcSLfJf5FG3t3MXb3jYygvPrn9V5E7GbdPr",
  "key25": "2PGWVHqgvgVavwBbmxxEvhLqorKFpk8w2twGa8m1q4y7ekhN8ye6AXYSjaTAGrjFCUyNyESbfLbMj9XWU8ANa7EP",
  "key26": "R4nu5pVixQxc3WwYzNbkCejpFcPFyBv3TS6nVk2kU4UhboNvvZf6vvFPxJS3Fn8Caj39LAiFYrZ6NqtPKKssihy",
  "key27": "2PVMKbGP1NcUjkXjyWNdtzefc734QvuuWbN6LhdK87MSxWG1uWeMaJzJSBKnnaja9BFkaEsFH9QZ6RyVcCfmUjFy",
  "key28": "2HX35RttdN2pn6z6H7DDM61rRV1z6dfxafJZVeEaqJN3ZmLYQpoCYgP7A9eeoP2qeMb3xUuiWmVepaa5JCe9dvTS",
  "key29": "2ExRyBxMATKYkkLfM4jS7HrnXGnXxbTJaGYFrPp1UXYjgnHqE1QnkXvsijigsbvXJy7Q1U7UeP7kE1QEsEFEgcJp",
  "key30": "62zjv7MgFemw8jnLSLDnJqLgQsWUHsjYVErfqWg9cXiRLjtjcPLQ1Bbzu6YSeH7Y3mgPovQxcbBZKLFoUyJwdjFB",
  "key31": "5rBRgMCwpkDsnwGQgkgDHkfYDtqmTYrrhMDLpEpDMr9TGBsP4cipsS41GjgKtEPzRsH5V91DPxJkZxhaDvW9JcXF",
  "key32": "4dq4SPc8iyydufPSqDJE4Lndrtk6PAien8PYDsA55syDp5RNNgXW9yrSH4ehVNB21dJnPTPv886nA8Edu9xCeVyN",
  "key33": "4abEmWhgjvqiZRYM5h2vJa6grL9HtSLVdbUuTdkL9UD7T82fSdhNNJ6BGRMbs87YNzKiu1rPkCAjb1ENB3L5RMuc",
  "key34": "4tpNZS8mnPSmpFLiRak81Gtmb87nxRnwNB1tFzZ91kt1ieUeYT8iFiLjbHZ9cTnvnct3PPtCEnzi7ztikdc5uAKC",
  "key35": "5UBkV43j7qFi2NqqwUGRPVyBNZLDTB7Yyr5rze9xTewBYrWq9EPmHvHzZdHAn4UjvxroZobYrxDfd1NHpjqr2vFC",
  "key36": "4gyPJv66cF5E73wY6PoxwgAVJT49kA871Jczf2wYuCPBWpP89eXFoHWk3LoMDsJJdPqabkWNWh6dx3dpp1BM1b24",
  "key37": "4CVCaMuBoDkfVcpxb5XshBP5eESVor8Pf49ZBF3shwfGPBxRmXiCQRgYpuNFwoyUzsP8DWBE4vLQTGDC7ftz8iNf",
  "key38": "3iRxY5EWkd6BFT9bFb8YRuGHouvNNn65pbmeBRaCt5mjWYSKUDrY2jyEtnEyjFPiNtXBsgUyXdHTrR5NDsHFNRJS",
  "key39": "SriB8za9WLQFVoqdRnZ9YXtr8MScLG1Xejj37EfYN6Xzz3wT5g7qyQixjA9RAKKWcSHwQ6Bf3VDrUErxf3mv9rb",
  "key40": "5dCT7SkcaDopnXoXhAqGxLrB391bE1jHj43yDg8YQcB1fbVtU9ZAxbdtSrQMaRq5crhrZU1ef3Ah1VcgVkpa9TfR",
  "key41": "2h4w4LTNbyScnzFu4yffGJVujP17uuAAoi75LZmuiC5oYZWrzFM4mxSWUTXLYSj9EpkpbLrLc2njz3aZKPu6TCw6",
  "key42": "2nDfmamTWA6TqKesy6W8Xuxv25dEdMFasdcexmebxHb383p88MfDwApdG52rf1PDWHP3okwyDsmjB9dcry34QaK7",
  "key43": "4J1iXFft2hnD8cuHy9xhqBo9Z4nVPxN3yooe9YKiRyALRF4C5197sQJ86wUrap3Cjj8pDURwzroDG6soZVUcyQ5v",
  "key44": "MApQ1umxMA6wMKjF8aoq1sq9EHfoihudT7n7mkrwhn5rfZANXCCipJMkteB7he9n2zo4hAQJJnkQzg9DJF8wN9C",
  "key45": "5nsJZWe9dfwAoMpLsKmuPNJ93zozPbmMiJfFe6E5X12JvYd8Pxcb9iWhbATnrFozGBHzpSYVM35r3ugMy7oryU2T"
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
