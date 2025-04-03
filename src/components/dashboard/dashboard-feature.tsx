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
    "5q1JxDi5fvC6bvHdwQC9Cuzvr3ioQ1F2DinD8Z8zqz9scjNunnUcmVMvA2aSxx4W1JTV9NAiUPbHyoGaF8vjxzhz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y7RsDYgzBHPNPLTigQ7tjfJ1iKsEFy6vVN8HakMEQy92q8donv2DUVJKozzCSDS9BjatFkEb7b21SDkG4DUHhXf",
  "key1": "4dmjbeRhe9tkRvWVUMMbeddBSjM4ncR4dWFXz54qfc6x4EbJm32yikQZ5hSa9K4GM88mMQPkm4WFcRnmz4ZHBi8H",
  "key2": "kqUVKRi8fttfRPbwhuJLFhrCubTcBAG56RAY8bK8YD4dxz8RD29bK4o8WoNhoFdXjXEvDFU4yHnzeyUD1fVL7Y5",
  "key3": "3CsUZREArQiWRA4x6tixeuQtZxrPHSPDbnhk8D1rUELzwUefU8vZ6uvjAqUY4dbyPLDWcLujaEzqTJA3WVFMoBuX",
  "key4": "5pyirMS8iuL9Kptg3RAcX3XvWQYdRLqo6XzLja7VoKSHVwPHhCkVRw7yY1MBCjdsrJBvWR6VqQzxsBJkprvskzwS",
  "key5": "2ynqsWP4ZDxc1Jcyqkmx7tKsT6Vb8Ydx8AVrgUaGme3VrKFqQVd33sjqEyuDhbVLr42KsTJyXhmw7tsddmvPdsq7",
  "key6": "oeDhrqNgR4XKGsEaEvrFLv54KSZKrQE9KPnJzMLWs3Xz9jn22b2rf1onx6CBKr7jeC64Sqm7HFJU2trcn5ERweS",
  "key7": "4XVvi7kBx5rvmy2oPkfLqUHZSQY7FihCG4Wbie9iqAZi4bgL35PGMZrcG4hZt8jz8dCeDCiV6vajELpc3oj42gRn",
  "key8": "3FVbhT2ixoxDc3EpLVePiBdGBwEXNh5WKLSf4LMkmKiFcipFRZm3ugRjUS2B2Ku7zPKbafuiTLPC1cGqe2xHZtjh",
  "key9": "5hACXzJkmDij4CgAXFspee5Grghnak2YA5boZ3d4PsvATqmZ2Pt99AoHwMEgsZJamdELoeyn8AdMv7Znhd43kkCU",
  "key10": "41UVN1y9PvfbJmfGfJE1bryoKZW56DJQ7CbWMCrv8K1z7t3RGLAWEm4RPBSHLCbvPdL9Dp5tBPGrskYv7L9449Xi",
  "key11": "tmSQM1KHVtV6oH1J6qzrztPvVERXyqf2Bz15kcExEQVHXacmRLo37MbuZWUr4QLDghzdHGxtaM2hEwatHkZQNjH",
  "key12": "4UF49t63zKE5o9tLQzNrwXMYhUBRhwaZvF3c4UEJE7a48e2cX33Wr2Z4vqyUsy3qko6vzFuZzfLVApqsCzxUoyDj",
  "key13": "NfmLcS94ukFZX1mLFHytDfFH3MtcmSXzS7niJCmHvRzWTsiah7M9Ab6m2HTuT3AMm4rEYnv3LGtd7sj2GRMxyCS",
  "key14": "3SRADRx81ibXt31k8PMygRNH5RQ3mruX3qEjgHP2LYrcpPUFvGwU5My1mmtbfcRbceB7dayf3MkRzJg6LThaRH51",
  "key15": "2Uc3GJ98GK7WmDEQtMd2XGodwmKwT5x6j5w1wokwchvWjedXkNywEnmbxyaBF69e53LC2H4Zk6XmQMvfNj2rettF",
  "key16": "4txEFJoEeC49NKyJSrqarvW9RQcwpzWMz69Dvvy2cs2RV4PzRLn65H5bMkfQ9mVcuEhVRPeZBipgqKZpp9ifmat4",
  "key17": "2jK47Y86HBLKcXQ8rtFC5VEBm2ufaARG2myQqjH5JMVw1iWZBeqXXCW2a7QJ4V1AWij8bF6BEpMAbHtRDhzNdjQx",
  "key18": "2oPdhoW5jsHSGSZNcjaJihSBxcvZrBtixE2DAUeb3YEsmtEoAsW22Vw7ed4MfnHrvN5XhrdBi3cxVqtAhDcd2XJ2",
  "key19": "4uPCDLEpfZRpW6nP3728EzvymYLsmhNWdaFpYtGD8WYGcFDTx8d5gWetUacUNqVFKQaDT9UEWuxNkNBGo121sQDo",
  "key20": "2oJQmErNZEoVgMJLriK4bH5hK3MQCmTvrk5NLV7Z674pRgsxn9dJPmd1XrAcT4BTCPhh6WWveTkFGF1f8AqNXsjz",
  "key21": "2jB9KEQ86KUDpCedL6Cgc8RzfpesqiHUCwYcWPtN5AyvHr6FyrL5fPnxRb7x5bMDQURfUxmqnZMcEgjHpj6VpEne",
  "key22": "549c6UB84tvPaLQJcw1Gqr4QYNsk8SunEjBXht3Hzzv5KWi8DB28NADAUkGDBWrfFogyzJ7S4hUfNoruSCo9iPza",
  "key23": "3HkwH8KBx3TJBLs6QbAGUdmjka1haRMT6wK5mv8F5DhBgwhuxdPBjSh16rjtmM6LguKvmk6CTmfbDvcUFcW3dmSN",
  "key24": "4xtDEcRPoYCCNMJHrT6EvDrR18w5WG5QzFaz2HqbSxoSD5RXpD4PQXK3JzCF1CHp5HD5wrdxWzisEm8KM5i4eJM5",
  "key25": "5iGvyjWkSAWNDVKGkM5XxFsfLY1BTDjT18ZrrfGW4iy35bEfDHHoWDNSz2WUNLQjvQQ6zoqfjRAXHFDpJHz8HsvF",
  "key26": "44VHRHHNFvbMoQcPEiyTxd6ALtqjR9ejie9Xt4Vuf1db5qTRLFcnMFjuCxqpHZs6Nk7DFTKy445w1ztNdhPPy6NF",
  "key27": "Ane9nQDjVxoAYnBVdp3tfoYwHq4qukbNNBYQpRZvAdRQi2yLBuE8A5phvfuravrd9RxYyGGFjPhgcSGComEFsE3",
  "key28": "2ETxUJHPacP2FRLeHbzK6H2DXdsBRsNVik6kYLa4S4tCSgyyWHChQkH9EXQ2E2MXQfcnLGpCnFUZ7gVAryt6Zfig",
  "key29": "5G8ymFgZtS6af566mdVQyRcPcmNcMX1dinUZyXvkALpgrDwqhKU7pqcZdyyWhZbW7i86aayVANCKfBTQb9Cazkyj",
  "key30": "5m2rWw3nUQtMJQkGd38a4zQssSvpogCwLjdvsfgEypD99tthLkGNiTXHkc5uSCzEJBGBnwZFRb1CUWKsWYsLwmfe",
  "key31": "4nx86XMvu7GV1aNarEXjG8g5toArsdhnVV7ZPZPwVBa7hUt7ARk1DR7LNQSxnHq92VBYdadLEsEfQPiqqaDBnx1C",
  "key32": "d7MqP2D82HDLo9CEG82hZAtMzrxP1WqekM8ceK5Wvu5nYms1uSoQJGe1c3TYCBTSZUnHUspgPvvrzfPmWPgSuxk",
  "key33": "3dRgRR3kg6XrKeWgsHrvE12Ws1hyySA7T355JAVpDwMibCS4XAqJE6BmNssziKzk2E9yAjjpax3MyyhQHj5ML5BZ",
  "key34": "3z7Q45efXzD7x27nKHjMzBGTCnc6Y4LHx3rQbGPT9mYeA3a1Vq3Mad41Qd7YjWALEXSmjLcPsCVbcy8WDugmqtg1",
  "key35": "2e3cMk9AzXB56FGeCMKNHXhM9JRVEDx6KTaaKQJq6E6haRvr75nkCtgm41yoKR6osiSA8F9WcTrTvoxXTW4ncxD9",
  "key36": "joebWBYfkT6oCrkeJ2nditCRt145UcHTZyPwA4fs4fSU5QgBtyBkkU3vGQDiLT9JEsgt5YA6P1gh2YbGB3ywdMJ",
  "key37": "oTBXdQquiT1K7BEobrgoHCwPsVrzxBaSEtoHsvFevueFLEyUHLZ85KPgicrM7qLkZYEFfQMFGotFmVHWT35BUE5",
  "key38": "63A58eMzqHmvqngEgoRjqpnm93NtguBvYhh8ntJYhX16M4CBom4t44QEqaUG1wCzy9xsKqKJoMJuiUSqHeMwiVZ3",
  "key39": "64Vcj57b7dKvTNGU9vuyM5U3Y9zCPtR8g7fTcHLP4nD9BU4Bt7qgSA7aUZcPsibDAptTUyo3is2TiD2CLdmevpYm",
  "key40": "5vPiZnfsiVo6q3njJF9mw8cMZdXavgYq1tXGXtoYaPwT2fZGUsMJ4uVLELFEVA1zn9FERJq9K7sWAWeX9XxaB3DZ",
  "key41": "44oUGdCHLtQDdysaTnodBRcVdqzhCZvduHYP4zDx7ieAzVHBGYLGnrrF1fpt7Fu6n1Q4AYRj3f11kT8eniAZvwRG",
  "key42": "3b23r2BLUBqZJsnULopsUwYisFfxeLJ7N9AkRWRBHyayWFcnEQvdmiqafbfVU9rpEjm4rwVypTgHu1wPrqbZWcJQ",
  "key43": "4jTTkFSc7ZiaCh3TffNPJ2eMQ9bJSBob7PuPtGhAbU9Hh316J7Hwp7SRLR5Yp78xi75BXtmukd3syfe9wZhvHyZt",
  "key44": "3GF3tFUXvs3gDLuDR2awk2BN21LYufksZ5kWXdCXjhsYapXZ2LtWjLUNxj5UJcHW2NUEJhqL9psEAmFqsjznRmir",
  "key45": "2PV4ACXsUmenxEv7BdhFwRoDvSAwercLXoeAMdWfRGyPQgzPyh2f1zEV7rsNxkz93xhdbyRxNVYZg29TCwpwicf7"
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
