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
    "374sYMjMXJBK9gHKos2WgYGKsxKUm4GWQrAMJG99Zr7G2jFgRm6M5jVqRNuzHJARffcQuwuNvHQqXL8R1ExuE3RB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3erBEXJHFYrjU41u6DAVc2puPYuZUqkfXaGMViAzMwD1AW51qGbaR6cpwDW57vVhgBu34MP8hGgfmuNZactDsieL",
  "key1": "4hUyLJSKMyvrE78GaeVLMcSPNgHcQMrrpCSFEedie6KdYvC6xo3R3WaHX29dmwgAEqCcrh4mcNhF36zizx85VD1v",
  "key2": "5HU9pyTyVtiM6uXKNk5w77F9XyhBWogP4jaUmKkDz9Av6hwswmtCGUnrk3a1cHumUVbqDmxEWVPSvzdg5fvMWuyr",
  "key3": "2bQNe9aJwMv76rbgR8vuf4eMvv3sVZxf4h8TewybfSnQRiHNaPnQxQDzGawk94rHswNb5vPDs6ejPUmPms2G6CnC",
  "key4": "3yHoFyn9328sW4MehjsnH7wLKYgaR4a4tnaGSdCj1MLe6aiZUtgRXzbv8Qrp4FTYUGUDF73CPhGGTURf9WdkAjMz",
  "key5": "5Pajmzn4tbHWbhAsvbZ1WevLMBBRcvtB8xwjmvwzZFc1eCidDJVrciDChMBiJ5kqboNsQs88784k2Nqa9avXgZ7j",
  "key6": "5cyeJedbaMxVZoviB8AcbCu9t9u3pQoSXnkJ4Cj562DcoVnVq22TVyCYJSoeRPG46ZVVjBVehAL6k28mmQkoQNyC",
  "key7": "5mEPHn8sFhQyV7Q2LwjqXXQh3dffneNS7YnfBXYVWFTFm3T4DNVsfxH9GZSHRLyQxR6XPSJ63QkMY2bqazinLM8m",
  "key8": "2bhkbAueEP592QKbyU31YBjoSXWUcTtdh3Uz11dVD9mw2GtmaEVWRxQPDyttbtmpFbfTjetNiq85BYsXtsDAn29d",
  "key9": "3DCQ8GUmMDsdqCuZzjzv7tDtT6wkCzGwGLxKuaisYBSduNcafLZjdxfStGNdwMY7N6PWDQYgJKzJCauDRJLgGiaS",
  "key10": "2wzsyjke27bG2WzYCtWS4LxuwM33eTdMK5jarMxNjgP3ZYQysqdvMthCmKaB5ob1fAmbFziuqj1dxVsTM1eLi3Xf",
  "key11": "5TXcNgCCteLxnRPiBi2BCqtGknTx9QqM6fGCVxgKn3WnvYER7HMRzihu4uQewZFRkKju2Js3V1rv7aZRMtEtDvq3",
  "key12": "5VD5h1hv5u4nqSQq2jmn4Vy1chStjYv94ndDauEVCsCHy6hbDEni5eu7KoFY11HzDEKiQ91Ec3DuYsEsqY2Hqgnx",
  "key13": "5NxJcb36abDPNrMibM9YFdsRAKfqTfEoBY4Ej5vnxAJh7gcyvDEzqhCtKWXtsWhJ9p34LVcowF4NTpK1PrLKwfeL",
  "key14": "5n1Jn8rveT3PF9Qd2YBAjqiSy3SHQjkzvofnwczxs8Zb2n8CMcRhvvX3RdPHwgq5cgiyyTG2kJGYK6Sqjd4PNM7i",
  "key15": "2E6jSivRmD9Pa2YGt4extcmeaVJftgBCaeNqHEeXQRqMW57rTfC7zEdLgsm8apEWh16u2iNghAoSefNAmkZnmXPj",
  "key16": "5e2j5uHY1nvV3uxFBu2dsAiF2XdBUSTwWo7Q5iFCdBQ41KjDSbnRsnBQ7axJbF8wegtvYnvfCjMPDJWTPSwFE27D",
  "key17": "bqG7UsMhodNxN8ToeU6PoEHCGT9X9chhv1iTgrpEFf5WDAvnp9AQrhXRoiXobNLdivSsYaoPWT1umC3qQBiLvMp",
  "key18": "5MQHLjRDdpe8SE5A3GPEN9XdHQWp8ZQLKFUoN8kPsHx9teMy9kBMNfydLYSTrrsx8SMoubCg9kc6hiVKrzEvhJkg",
  "key19": "zHFHzw5UL5KY18J3GBFe5r8VjqxBFqXYPjYGwUqMZHUHzo4guzTkJsCNZ3qNbV4J8ZXwPpfws6NmdxadazpU8yQ",
  "key20": "4STEJy1gAHcqDjZVE2qs9h2hFbCvt5EacWtL7n7ptrEbfVrVeTDjxTXzL5gPfri3yAb2vCsAjkfkm9pHuBS4afZH",
  "key21": "3FrmfaUXRdQERzf5BYygcVWvLVNVAcjwkUVMujnprvZdmtgbVGggKcZmixbsb6KEUnHtvBtz6qgnDHHPvsGZG1XS",
  "key22": "4Qw8HhY8rUAL3KZqbcCw27ahTfU6geguTdBpNKiCwnxQ7fFSQxM4TaLh6354B9c5B2ykveDVjYEMACxhFkVbT4u5",
  "key23": "4WsHkuUcyVkUecjj4x9jpgr2rm72BgFJENLZ46U6wsP3pFv1FY6C3HaRCJaKirHNchhYfX9LdzgBGUtFRxisaY8w",
  "key24": "jpSb38nujFmTVr2YeFfYu4Xhfyueb9qruYWJCfvGMaipc6xPfcZogvg6v3YvFAzAnWkA26Wo4fBdhc3Hb5deqHW",
  "key25": "4gK84dodC1XbDL6H4Gx6BgaHbu41Jz1Hxp9UDWcpYB7quzTwPNAhNvSLt9KwaoEyNPEb77DSnBSd54iPwSo6wqnb",
  "key26": "5Vn9Fw6F1DwoTG1tQoH29Zm26PtU4HES9RQxxEt2Zvdcab5p9pwR92FQyW9xCsEmsCHf68eZVmmX1oeeU56TkAW2",
  "key27": "HU1gNiDQvxKEqRLQuDCJRBNucJvcRFhtmR2ypqdNLf9YLjmYPnMPTbr3487w6y8X3Z2bcsqqsqaPMtLtdihfnX1",
  "key28": "51JeUF14r713E6Ls23kmMEYFZbW9x2rZMx7GWgqsjy1wtEU3uzoJfMD9bkJwy9HGty84KF8z4eKTHuy1Tf4mD6ph",
  "key29": "28Yy3HU8YHP5d7P8MZF7LGyJZjGCobTRj4H5ubzfFxamavhqwmnBLAQQAjwp6X9Xzf8cUauywAEADJ3HnhRBTqVt",
  "key30": "2NNyVCSmGVPSV4G4n4BJErLACzusZwJ19E5DriNiBPnsqxT2uyjoHrYfVttEDnABYxVuwU1xt2qjxp2Cvc7h4xfc",
  "key31": "NfsP3skVFDufE2ADXTzizH9v8e7dTw7YsSRVbQvMkVenQZaBL5Asgg6CNYdgR8xQTt3jbZ8QXSbQpSDMr9vkzJ2",
  "key32": "5UZGRuTFq34xRnPLa5s7a8dCj8L72v4MEGSa3NqaMMTr7cMPSBRenvNsdv4DjBipjU89eYgNeHpVhTvr9PYRjwvx",
  "key33": "4XBthjWXU1mXmX4XYsVfh2FfKCvVoghAphzuqSTGzHALEs4Q2KUEnDpdkyprJAhcC5Ep5eDcHzgB6JrmKy61B33h",
  "key34": "8onccbXXmffH4gNY2s5iAjwwvykxDLgZcGrBwb4D1gm1Eiprv8yB1SUpE3oQaCc4gvipjUo9bA7NvzVTdmeehqm",
  "key35": "3nDWPhZRjgtxyZAWF9Ykd93fgxT47rG6DB1sUsBki8bQ6jb2UaqLogjxcwKKMQLmPvS3SEdp2UcqsfHBdFmqCtSU",
  "key36": "2F7wsJx2ymYxM6o8cyZEkmJjxVxycLNCMFyq9xpASfvTbP43ihYf9wEUn8CL8SNCBR94Vwn4JMBrffLh22BATTWi",
  "key37": "B9FnDbbSXoVLCdvgFiLxLHonyudrXtMM7ggum4xkeEoJekJgFvcNpaQzw1M9Hh3p8c5AgCAGurvzUDLYmHg4VjN",
  "key38": "5m8FAsgipaZ917b2kP1W3NHD2JCAb48c1JjW78eKw1rhsGVNBRUWMcRmN4qbM9fCFFGG3Q6gzLh1GduJUq1xqwF3",
  "key39": "29DPVvwCt92P2aSKJb4kesMVyJqArcSoypWQ6mSzT2QPrTHu1uh5EDXGFDUifX4HQ7NmD5NuwneTMJgwLcP9K92i",
  "key40": "3YNB5PRFQU5MvPc1GjufeEHf4qx4Pijzb5uhDgnjUvT3D6Mvn7bf7Zm4CkUmxpVy2mq3bct3DqCUtV63Dudzv4ux",
  "key41": "2EJMCkskGfCS84ACr4WSk7MhGgkAdhAvLWosjTxDvzqHCkUqYw89Aqqqa815zrKL13TbDNy3Ts96ZfWYLdUx2JtP",
  "key42": "38DFzHVoJW92rKgZTbpWN69jfVTmwmUEUMLR3UEJeAYAgb8PsK4PNaSnAqfHTjPX8GDLYRnB3MRvpQ4iULScFLbs",
  "key43": "4PMfEyyaxVskAiqhrQuwECrC7Bg4AAC6K6xMRL4rHw6GkA8mSo4Cjp7MYnPSeRLF2FrxKvjmYC7pitqDk3e8tsWr",
  "key44": "5tah8erDANPcey91VGXz88A2stXE75CFaV4dBD65SxzEx33wE4M36JgRH8rsTU7moq57Rt2jFjRA39A6YyTY45aN",
  "key45": "36Fju58XRbKF9ZwXKdVEHiKL8o79R5UzXKRUwcgk1cLuefS5zFfRQNTFGM6dugSP5xkCQJ27MMZGHRr33swjLX4P",
  "key46": "XL4QZTcoyGDqevKkzA8J9nbbVhvMUz2zywf9Ec4UrA4XmTtdqVkuv3G9XGxsiuyu2u1QAUsHaR5TqbV9gw2HANQ",
  "key47": "237WF5GZCKgd4ZhCkCc6jcmTcxRnXHcLkPyEVDKMiSL4h3gmG87gKDxcDqveNZRf4qukCDMNfvyCKHWSQ83pd3j3",
  "key48": "5jkSg5LpBRzKTTxoC7p54tsuhf5baFZrHqXHppLswJojxGcLw3ABfjgiQyMMcx24fjW1X2e5JV3rSTJzv585Y2uH"
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
