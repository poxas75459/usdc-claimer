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
    "4iDUKrAuEceyzvG9XFQ9aZUR9bMAbUKB4TLFm8xjwDgmUWkQaKvN5FgKqCH7qa7dysihxhc1ds1CdYP8KTYDe2E4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QPrk7CVpFvhxpxDT29JEKvUU4cckFgxt7ipqhPHX1pmjbEZjH7pKgUJmfhpLaXuraZ1diiuv1rACCztaN3Hcoyo",
  "key1": "5CCLi5QAxwUXtB5fSeeAvnoMwLW5gNxqmoZVqkmEdhuMbhnLELVcgMWTR3bWV4K4SYet3kD7fxwaVfZTMaq7oBsB",
  "key2": "3bDt5MJpQNNgiB8Am5vbiaf5iFs7A2L8msT5LaaYhXfNY8yveBfdu1cEa22EEsk7QvU1QL2RJCqJXJpBcJNzQ3w8",
  "key3": "2hq3Ba8tCXyrvnYf3RdwMwtLcMy1Ej6NkgNw1fRWYWbQNrhdmQeJVGr9u51VYaYJB77DAyAtatR7koE9dtptCrSF",
  "key4": "4n6MPrkuzEXmy4LnsQM5kMS6aKDe3sN2saunHrn5f9KW8kAucW8y727grpaBi9sFSsd4QUbLwe9fVtFG6FxinDf8",
  "key5": "5LRkKRdq792Qpr2eGiacMSCK1cNjEPVWqsL8AgyQa1D8fUFQKFua8WJb2ATVFstGcKYpdwX4tjX55X3PRMykUjUC",
  "key6": "2KdhKRt33NEzQQJTFWEBE3V7VGZMfXSFUEFs4yxfYL1j7ch1FqMMdZE22B5oK9TWyC2D2Yz1PDVGYsDwGUvWdZnv",
  "key7": "5QuFBMoPGq1mxT7NhWyN6nQGa9RsgN4acvbFTkKvJ42kGP2yu2MpWuSvu5QSK1ZEwZpFMBTudHUfNmoGnid1adBw",
  "key8": "32npFAFE6eiHSbrcRTA2f6MbFG9KKSGoR2GHuoMPTAB4ZjEJ7wiJenyTWyL1PSWD4Jd6c4S9KNmjGkda6ukKr24T",
  "key9": "5eADVTEPx6yG2xJV5rFDhnA1y7Jc2d5kDsTnnKn1tWdsVhNRaamdH4EfLU4sSNSpfoH22kBarR64MHQdi7gHdfwT",
  "key10": "dxVVL2cHT4rRaZxnMR3Jp7x3EDTZiVYyHPNBix4RwEYh81gt8biJ5bXUcuA3YovzMgYUGuzC4yrwKbJSi2aPDA8",
  "key11": "25FYqmE2Sjq7L7W3foJStQy7ZFXc6L3kQpaiA1tEQ5SRZTvzjaZoqnPz9veKphmgVEhtkHtSaXWzLvJpD3nT8EMU",
  "key12": "565EdYa4RwdHZLyzgyvLDkdDurXkwRGS9KdVnThsDvya91AyWS9Z5GehGTfk47ByoYr5twoPexUp5LnvppiWetbf",
  "key13": "3ZkL272mDPYK2G22Xsxg5Rw1G48iQzHJQqmcCCHX35u5XBWaR499HEDmx7Wf9BXZg1aQCHLcz76rndSNbcZi3Pof",
  "key14": "2F39FGPWGDemijSF6nXfgZy9cx8caTPqhH8DfmQmQcfyi4epn54dpJMFZnPWZVrL7oVx2cWnbcL9kJKkHHf4bGR6",
  "key15": "2prMHpH6Y4bSf4Eq2BL8Ls1Phyyb2AMWu994Uqfg5Tcx8ih1eqdFGbU3tT7B324som8v3Hvfjguacz7DqEQKkY7q",
  "key16": "4itWw7DeF2xJxYbD4XnL6YsUcudKUPcnifnFehFe9oXJ8FrTQcwc1KbRjh1GJEN8DByGatK6b2eW67QAdAPgXqBD",
  "key17": "3ZHejgGa9zSqt4RBb6TopJqJGmc9FiFfCSNyhgr1x9Tnbj5wLqiq5JbnLiQBALYC9xMj4Gy8EH5HMuJYzX513sq2",
  "key18": "yyxzebXvV9PJ9vfqtsKt3CDiYreZavooJua63nAvQ2scfV1cDGkgs7RXDzd1cxzzxPV16TbSscpzFmY2kXB8KvJ",
  "key19": "2xNQEcS4B5DfmkpL1LyGESTj6EKiiC46JBVT4NeWtS6x3CGJ8LWVPsMaRccytg9cidfdeq2Z1V5TyifagZikxcNs",
  "key20": "3E8ipxhgLLs8L1riooAjPZr4GaBq8YZLYzdgdMH7JtA9A4S8RgQPj1UXCqHtPgcg23e422jQ3VVMs1symqDL9eZn",
  "key21": "Xr3u7czeuBSJbRkef6fsRpnPCjCy5qpF2RJuNoFZyCkdsFJ8GTFperxMGBZg2FZPjnbzEPPrLSgZKRiBsUtLGfA",
  "key22": "5z1HaQ6bKvPUEDeCDAtwW7W3eVf5MwPCuBrP4nfrs2kmfH3GNQYyt6syjb2ZgqKY4Ejc19tWaseC8xAxymSUdCjo",
  "key23": "63q1Jdf1mSxtjZ6UtB5YNoMz2XhBHm2X5imwsvYNX7AfR5MvMEJbsGHMXdX9uPW13XbyTFwLqjByh6iHHVepDRmN",
  "key24": "3jAG4n2vgZwYhuuimrcnqSq65QwGWwhwxgf87US9ByzAiy52FpGEEz9BU1snU7dZvWEKSesB7FGzqiemLJhqpPgg",
  "key25": "2DeNTDfTYKWka8fLLc8Yw7Di6GX3KLRaa8NYn6mN4wdThDfwf41fmTWS1nZisE871zEpZfAd4gCrwGCJbcrJkPsB",
  "key26": "5k9w5KA9zEEKZv52GWq4Z43xXAaEXcKzPLoziwiTWKcqAkejhAByZdGMj4Y7fQcTKyiDH3PsGM3MXcbvvSR7e8EA",
  "key27": "3EDFJeHnoRS9YAEA7iDTwRrN5CDKxEmshzSr2Xsq3fVMfzHGbA55dkg3cVCpvzujHRG3EZmo6v36af6pjQt5ADVL",
  "key28": "36E8sw8jiHA46EHCJL3TYNDZuEBtbD1wo6rzEWcZs8haQnrUcRAqXrASamcAJh6TQqaDobEPXfeT8r7ZHcUJyzKY",
  "key29": "5nUJ3zAJ98b5vthKf1CfPwVWEDihakn97247fnqvW4XCeYy9G4EjpqQ7Vx9bYuuqh1cc9VpuSkaUjHdRmE7RdUJr",
  "key30": "4tKdWiBQszPkr6AfqHh7Nbcr8RKCLBRoF8Zyn1UKrWL69o1Mk5gsbam5FRAw65p7eE6Ns3EfvY6y2bikCTZiFUbW",
  "key31": "5F5NCS6SJoRNYJh8he8ePCMxcg7Lm1Lz15nD74NE6G7RF7eAjHtW6q36kc2oC1kme4QxcU6DwfB3EiD9tkCqyHDE",
  "key32": "3yBuVBGBVckiuj56z4aKHorfdj1Xj61wqoXNtoogYhfoMTuMKYFFwDhcnCLGChPvcJxkxEK7oana8eAE8LVFbUVT",
  "key33": "4LQBw69sMfJGjQn5erJ3G7WzoPnh5zFj5qtDXaPepAz4coYwWyr4S6o1dBivo2N8wcG3QvuXA32WrVooncHP9U6x",
  "key34": "29Ljz7k2fdSRmMhJMrGi1wf2tPneoaoexiSM8nK25fSoNRaCMFTN4j8Gc97nEpLRiziJwbxCKo4Vg3CatFFRRWsj",
  "key35": "2f5Yp17HPPg5HFtWt9Ly3qftj1Cn47PDgSzkGdAmoHB6DV5HfobaW86CDjqQzmZ3RSdZ1vGvAmoPJ9m3LLu2rNWw",
  "key36": "5smsqGPDr64UNrRyFhXewFW5qRSfAsbuji2saHfTB78huVr1hNsbFifh621tjHcyoZm6BEWAQWMMFSuKKsFvWSX",
  "key37": "5sPaeNGfwjWCPNTnp2nLCinSbpM2bhX1G2nxVnPu7i1USTH5tvTofVG62H8rDCDAMqqZQQBB9QLEZeLQQi8PuHrw",
  "key38": "C7N34hPpaC8CNWTyMfRxEdrFFWztha3bFxrcNVBRxdi6a63mhZFsvbufqzENCwtuUHCrX6K2WfTa2v8f9RF46oL",
  "key39": "2TV5WjLGy9bVg2Z4vjYkXnsHk3o8o85UZWhyiozFyc3gEBNwKMocYqfKGCZMZqg1Tfguith8b3R1zg88b88A8FjC",
  "key40": "3YaVQPEfKLtMoBdx84pGvrHsEr2fCk4TugJaUu3NxriWqvshZAJ6RW9XbJejbjVXPvfi4fPivPatmXE65q4iUkNe"
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
