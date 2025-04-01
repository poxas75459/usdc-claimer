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
    "46tEdCCeBgEf9MWUKcDSC3rF8Judh5KaWDoJt4qzB7CiGErAKTvhi5HwsrdHSPFiHkwf4EjSoKCVcFovbRmTEFbL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MF2P1zvdzEwYmiH1aVBQQSkrJuWGqwvT3f3wrkh9HnpDBpYq8fCAf89ZSHQShvTEcGtmQhUGFZRYPMvUwSyZWLj",
  "key1": "4pLrWJnJf5VgHR5wNow6GaZrqT1viSxwqwAEYE7x6LP7N9dK945tKBrsQ48FvskJ2URuPqC2SB8EE6F1venBPeJA",
  "key2": "2CEUfMcvdSQdZDnw3QS225NcaerKR8jUiYFH3qEahT69y1UYNgFp3ZWDpgbJBWh2Sm9qwAYTauxfRnKmcoDnj9YR",
  "key3": "4QAsB7dFUEDpWrG6qrvXZy7VxRVeeFd7tcP6zKGQgxp4x8rYBU33dwWuD75bkLLK6BHF9F9bSsHXfsjocYmtoAEb",
  "key4": "3vgG5RVxfZEmqs9tzqAw18zS14rnXth924MAEeXNhNPynpnbv3vESq1cF9NSXsiBSvCoJCdLHWSSPzPhVzXTp1kH",
  "key5": "W1nVcHr8J2HYRMQvt95sCTpyxvt6APgcSN43mexoRXQ1RzUJWn9swYmix15zb7oPHBfzdEgCbQjvy1Y4MVHDLPJ",
  "key6": "4Kv8UQ8aLQd3drixXJRymjR7yLYUmwJVxmSQZkw62AReiU32NL65EsXNUS4vRDi3sGop2jbyotjCSvCDJQmrzLrk",
  "key7": "3G9Sqbfft26pGoXs39NdoFD9DbEgRHbLk42jbfskSEN3DAZhk9JYbSSmvE4VpDsCtCHKXeckXyQdn8zHTNsm4NVs",
  "key8": "5RAQU83fuSeMTcSACMi17DGT8fzGv8SRnZK8jV5NvrwgpyULbBtKCi3uaPVC4Q194kmZEHgibGp1Y4dGL3S3rFb1",
  "key9": "4Ud13eaJYoS6QFiPYsDAUphcyqSnVnrLPz1dZypifxey7qhBqsHrVNhA56LLhZxmDP9qFLakLJSuSrD1xP4AbbXL",
  "key10": "2CMsh59X8aPxT2GsVRzQ6YH4StVo8gbqCuKh4H1fU6NASFwikb4W34Nro4KtCbo7BAKGtWWRBxesqu9VviDmT9yr",
  "key11": "4mbQaoxX76pembMJAoJxmDoq7paPb4fM7hYauAeJFbCkEziX5db21AYmBE6wM28NAzUV5TihfA2MJyE9EMUvo2UL",
  "key12": "2WMvCeCF15JgpapoASE4eriPgTuHzda367AJ1BHWXu7hfHYRnsrAzy31YFz77wsdhE2HEA9NE25brDSqHNYkM3Hp",
  "key13": "4muZ9gxwDkQiGctzZurR9WRmufc6ahHbGXo7osiWYRQpummttqQjWbC7yT4wzML6XrdSgtdhbxmvnxg2TCnN62vu",
  "key14": "44XmWj4Vc4zQDTxFnVSWUJB3maeK5LSfdKY5c92qPNbKM48RSE85oMTi4dB78r3nMWc1MRhJx5JydWHRkpAyMTmz",
  "key15": "4whUVtPsTFYr29hGZkzwYkDAVApGNpMLknjgmPVqTbH1b8QY47enBjE4EEiq1PHiEdfsWX4aQXXTjPottWCqJMQd",
  "key16": "29H4HbhhLiD18ae2ehop3iZRoyr46x1zNcS3speX5A9cFRVzk1pMtTTwarqJmumgmJqu5WWnEeFpsvbxoMVaK9XE",
  "key17": "49tWNWwpkCMrGZMB3iMggLYCiC8x3cPkX4YBNe61pPhQ8RLcjT6hiRp3VjZcjxhLZBX25QiXt4ZvajSs93yJuKLu",
  "key18": "2kMNUL4xzGrGtpwosjHZTqZZSYewp7LX5mkm6GoJu5pGRbbsqMzMPrWhFMUDq4ftvx6MQNCSfkFFXN5GygtTeX48",
  "key19": "yNiyF1FBfta7Q5PtwDJySfbPhawW2Y9iynLznVtS38nftkqTmaw68wApffjKuZ476pCtm1zUBhYP41abtxeXMvD",
  "key20": "2o8ijvTFd9FDQtjCNtQiADPN1FGo4XmLKeegkbztjQTuNzyTgmGCbNUkjQR5JR6DDPNeSnT8N8bcgqCysg7RaP13",
  "key21": "46hYQNCYibp2EeSehbgfTjatVSpnseMg3bkMNimG1rdwbt7nyPBZspswwLM1X5pKN7cE4kt9Pr2UM2FUKQjXiUC2",
  "key22": "38V1fPgseZkbKMZk2LwWDFwA9TABQuXjrvPaqb3M1PEnhzzyZQTKc8nxxP2bZTNmBTcSaqFaVo3s3MYnHgRGejUG",
  "key23": "yZpMgNfr5HNuQzG3bjQchszegNQWWQVybFt6BTdDE3rpSDpk8oitVrDQb1HhcbVy5snDhdfEPcQFYfHSZXXJ2ni",
  "key24": "5poL4qR6JAbLHS98GZgKtsPQzwCijnzvTpnnLbdtWjaCzSKZgQ8g6GLvsYnutQT5T4BJ8uNkeX4TXqD5jSYXkfhV",
  "key25": "4erojE1M4imcC6uFwEouJZksK1Lea8gU2XVqnf2N3vcmG8pcBQTrY8xEQTErjghHRzwSgYHETZ5CcodGkGX1Eaid",
  "key26": "5tQ3Mh4f7qPhT4zVHocMaZaK4zHhsnphxkr2pqCxQzSn3wjPZNdTCJYBVvmTdS9ViAgQ6CuUFYNy4HpVGp53y5Sq",
  "key27": "jh1J1Ar1ckFwQRGnBqwA9iY1dWsbCPFT92qFC49oRQjppd9iqW2VBYnjw4WEBYQp5ZCcSb1abaoCeXngJrhMspC",
  "key28": "58BUfoKk5saGQkGsDF25BxkBc3DJ13Qw9hTS2A6dMfiQmSiH81LsdwNohqGedWRqJ5C3hkY918ucVGzp8FudZmPw",
  "key29": "22vbevtbs3EVzyWqbzaHDNSWRk79t32Wzxcbwa1bQmmUwMv8syN3MA3KArJHWcEgRJAavvw6uJYL7UK3dkXn5zsx"
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
