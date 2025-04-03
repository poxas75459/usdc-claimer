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
    "523YuWhW2XWjnpkAVDuES4SBSegG3p8i2m4yajMkTzkigFjiyH1YYAjAu31d3EveK7Q3ywzS6sioaRKfTdWNFm5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SVz3zEtXA31VRnUpcuXif9vNZHbVFX9LATtcVSFELAL7MuN1Fr4283YE81HAFpVjv5CvLgtjyDBxHNkqxi3yjsY",
  "key1": "5GoPU5JMwbj3nzYJwUY7N7GnM7Dwzds6VtmXFmVccE9JyCePVhFiX7jcGChWBGuW4n5oBvZzfoMeJYUrrVTSVNMY",
  "key2": "56W5h1igb8NQuLt3P2tm9GfzVgPDV5AThTsqDTrvWxX8TGMq71wMr8e65JaTcFZ7hnPNKyjNg1hFyZRTTGcFwfVH",
  "key3": "3VjMsfHA2N3HQL4nuT25z85WRCxaEZgTqaRbvZWvR5Krg74B5RfmFcw2eAYPErZPwtCc9eacKYrdZmemEkEzFT1M",
  "key4": "hWFuYJj8PTYJKTXJu8piwWuZY7pTsvGoBEpBVTc8iCDsaLasP3vyHsi2TQrzdSUmBfsEk2UqkodnXBPuRTFauFL",
  "key5": "BuVDcDbYybcCc1g35ADasCy5SRoBhzt96wLLbVQiJ1FuaEHdga4JJb4Q3tFPQJ5FsP1i2btFGKKcUhzxm1s3pwA",
  "key6": "5F15Zew2xH4ENgQPHv4WA4y9jU3smo88A4pvnDws3zDJcdY3cYUzmnsScEcVYEKtwPX6QxdGTaDfX5DGMvsGqj8q",
  "key7": "455EDAaXTCazqMb2GBgGE83ttwmm34kucLnjihfZ3V8aN3JR5f5Aq2QCaZeifaoHFY1YM4AadjPXhpSfzWgt7RLb",
  "key8": "3GVcvrPhGnCnDq5ce2AXSZix2Cc654PV1L7ykd4fjiHFspRnYUgjBug9jg5mHZZ5Mi4az6WoxxBvGa8KrAg6CTKm",
  "key9": "RUMzWo5CQbsQvoTXuBvCmb3EV7eZav3MnKfg8T7psBweewmgZuh6W9jjhLXaWBSiTbkWsCRUxx384kbpMz4Pj3P",
  "key10": "5BmNkQPEZpLbQZYVSF9ESw64EQGxBvqWnJnTgQvjBsUoo33k3gWsKeTUt7xyqXBy6RQRKXf4LmLnPm5Mn84M3FaT",
  "key11": "5MLN69L9MhA8hEZWRy8BdTvKSyRrAtYChTVpaAiHa61dyvbPt2BBFf3ZFQ3LVR2joTETBsPqHBsAYX9sba2AMKPQ",
  "key12": "3jD2i3a227WXsucrCW26mt14yWHtwCcXu4CnPYdR3GQL2pt2WTAbfSVRWoQ7hkV36GZx4QWfKNrP8ShMTXB5Q9FD",
  "key13": "2qPiiAfSSJDAPGx6Kg1VyogHJFt2zV3rfxXobZALvXZVW8HPfiq4rT8WTaP23spzRYUyRbT1Q1YuagyNbgDwspHE",
  "key14": "64nYqw5RPGPSJ6R2KRfHLFP2ZpyrRLceMQmf2xQbRiV5zTYcMxvKREBdgGzkJSVbsa2xHqkR8Pbpofgfdwhmv2WB",
  "key15": "5iRRWjvw3656dPyJ381MZEBE8HwW3ThcXK9EdCH3nCqXRoLq4EMieDPaRxahR84xZ3tqis3UDTTsxL9AQmqejPiE",
  "key16": "2MFC2YiEUSxmbVPQrpn2hYJqTAQ5TJwJTQ2raPYfVqZ15Q6VAjCDutwcpbJe3GMhVtsFz1D1EuK4zqeGfgR2K7Vm",
  "key17": "2Xx9MkyWcd8rMPDrdrc1ZGqdmVN4dSBKLmZqrz6USZUju3ygYHFAShzKjtJKtNvFtfDcvPe21uhVHjRMc31qE95G",
  "key18": "iUigWsH9Fpn4XCVa9WqpJApmUpiXmQGcdkRx6kDcs5w8fNNSMLSaQaZAf7j2ZzWE1xygSVGgM67Y4zXgfcmLaFP",
  "key19": "4zMtTKEG76DdgcKitW1JRdAUBekh96aQyvga2evw75xMrwxJrR3Ezt5zdFMmc3MaStjEw2AgDHt83fkx2Jnd2Bdq",
  "key20": "p7gL1D4xdDBkJe3M9s6nD53TZcKQfEcApJKr1oxk15JviEvm8pNwHkqeP5fYeHbGFSNPHfgoSLLmC8j4jJPTYEC",
  "key21": "4xFQtxhNHNkmVd6m3rfHqeQgaGmYwR8mP2DwKW5HiU9xknzGDUSDpaQ5RTNG4qfWbdJtZBnTCawMxF3ncj4ZfFi7",
  "key22": "5qCYh2k2JamMD7RG6C5VTKVvQY4Qf1tDTWq6ztTjQ2gg6TVrgjcfDLi4NB8Myq6sUQVGaim7MpAzmiKB7ej5Wbj3",
  "key23": "aCLcVJbt5ahCqEVzTkYTKHjzzucWsiaNAFYQLrQJCyteZ9YuzPc3o52pyBW2oXaoAA6nWTt9YX58ULgXzeiivvM",
  "key24": "sVKQK2wonxCb61PZSBZCkUaP5ZGAtzfCFctd9w67JjdUvfv5EmQXCdSt2hT995zMDU3NrHNFR8tTJN1JZRL3deX",
  "key25": "3YYwobK4dX3mxcHsjEgQQFinPfAjeGHW1iYRmSnwaHTpGXSFuK6rZJ2GoqDeMPaV1grLHGqSVJK3CrHofT4mFx55",
  "key26": "7ZHcP45RLsEKoTXKuW768ZMnfAzubRzQVYqbFg5gHD65rNHrB2Dzx36qP2mWwLSidxBgTBrmgyE3y58wEvvCbeR",
  "key27": "3UxphHiS8dYgEp1XYsHBwXa4EpWbWPB6gASyebgWtZYt3kV9ApSGTfaJdFsdaLVX9Et3Mwd37QgKj4teeTD2EJzq",
  "key28": "54Aqa5biWedrWixhMC9qqCkvzCw4rhUDTXi3NzvcGMg2L6Qba92mhXg6h9Ahv61hqtPp5mnZQ3Nme6HYggZcQRMT"
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
