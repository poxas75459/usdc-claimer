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
    "5i1WoKC42emN6VNmVBuzSR24uNw5pEr17zsaMN7shDjK2wo8hUF2ALMTqYjDZtStbWr7cb9a3heWbyvhHw4PV39o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FyCLk615nTg2ReqtYFjEnkDEFTwtJ7ienExLj7htN6Ffk5n7x311fkqCK1rJiRYUtSR446eJVrXuCS7uhY6Zft1",
  "key1": "3bqfz5wPF9CZNwjKmGDhbj69iwk8SGjm4P9i7PccK5rsVgk1Yfb7ph4LrRwyUmByP86EsJ4SUtjuSMMM8BdRsa5h",
  "key2": "4sUGrnz3uUDr9o8dXn9SMGHJHmtCYYvNsoqa1EKcnCUh1JXSABwiNdiDV9AnTvxpcd1EdLc1CaKRWGbYhaCEqnLa",
  "key3": "3cDMR3cRqQXCzEtFv1PxNxbjh434q3eiV1SmX2YT3FPZ7eK6N74ZHBPL7wcqDQ23fg6miAbiEhEbyQpRBqjYZHwi",
  "key4": "5U5wsFNnevsbf1U5GyYu7nHnJJWirXK8TcMwzCSMZWkK6N3xtUtjh55uKepBWnCUTVpPwxXb2wSPKU68wwebX4rR",
  "key5": "gkqpPA3rJAQ2MZZCZSCmRuBRSfoKtrgeNKNnNgtz5pC2avwEUdyp3HDkzfsNSt4zghhsxbCJgMBHka9gLJhQCzv",
  "key6": "3f4Nu6mxRVDW9E4DyLHxu4umRJzYjtrQcceDx5UFLj45DhmNdziBohb87eYur1UHgPpjEQhjyrbytcqUhUi2Rnzj",
  "key7": "27abmcnJmDAnmiKQZqaYy4ap6ZupyPDj1x87xaTZ3rthJUGZ88qKjFX3Go25dgEYEmRnZzJuPXEW2XyLr3NpiBjC",
  "key8": "3xzZVvrUyEYtiSJLoL7R4gA9qeH8vfrxNEPWGWygqhBCixKnYGyUorXVSi2kDSwZrBMPs9PULnpeG3JSQYoB59DK",
  "key9": "3tCghKoyyQEsHTyzMFXhrFkC82eFNCAMnw3os9rEwga7xqdyiVLivcdKGfkKhVcm3pnxsa3PioBPFDyS2Yfy2jia",
  "key10": "3QsykMxXoAY4EFt3r9mGCKDTKqCQqYMN1Xz3ezqtSg2Zf7mbSqjnwYGxraw3JSRS7E4GNPLiVe3uWFD7ZaTND43u",
  "key11": "hFfHm6PAihcLs9x3ouv5qnV18VYZ9sDCmuFfZHpZvuPNbzFbdYVMGDcy7WiQ8UcGc3RJtqSfFr9m7pTVeBUKDUa",
  "key12": "3tceZpwHXF2BYybVfP1ybFwEa6YhZ97pHXMTZh1e8Txh7feYTU79MePS4KHYiXDD6NumPxvQjiq12CownPozSEs2",
  "key13": "89q5eZsELUF2rofA4hH4pjMxeFSNNQw2GPiyhHrw4k1Gfs4J2jzb7eBrSxfG5Dk8dzaUrRjB6yWtWUDAWiXRkqa",
  "key14": "44uJXgvZpox6KKeAd62GsQrfApfvXuS5E7Jy3BroH6WmR67ZXn7Fx4RgMAd6SbWPs3Vj9d95cjYY8Scj5cRQkWhA",
  "key15": "2KcJxZ2moNMHaJV7bCYS9VANPsRtn9N9gcUXMrewebXoUa9E3BZNR6AeycZJsmQeCwRMady8xtz5taigwoL1G3R1",
  "key16": "5EEV6AFAi4vbqdgZEsQ377TYjnPqUcnrG1wLhdruFnxFsMZpj6tvPxHBQZ5rYtzgYYBBLVcuBqfAsGPWFCdXWtUb",
  "key17": "3BxrGs74wJFqqhohHS58by5sNzCkaZh8k8YtZRXAV5dHaYY27V5uexrLL9dQEAaWUZVmWsT5kJXxWPYqKJwxj4Xr",
  "key18": "4ha79rbAvF4Md6FuwgZquZWb1jnwWScYsGkxB3M2JTtrALcgkmyRqhoqJq1QsLiPwkUDtcQR5NXdNKUZC7x6X3B6",
  "key19": "2nmgHhMS8fvdk4fk6QSbgCorJCPqfkfL8kkWCV8F6tMCVQoAGpgg1ynBjs7zQ6bBXcUW7FG3Cke6i6EBoe1894GM",
  "key20": "4wQVTTKWDrcR3yHUbpm7qjVvJCLzf9WKySV8AqwZGWkRJts68hD9hLt85z7ttXEZygEVxBk2GTnU9jBarrD7zUuM",
  "key21": "2JXMx66zeZih82Kfo4CpmA8KiwJUDURxtdwmyXf9rvFFcgDcyuYomrZLC8JfNLad5apyWXhXomZ4zzwJRqw7GzZe",
  "key22": "24LS4PGMacsASWTJW8kA5dmzWPAenpFG3bZFcbnsYyt2bULZCgHB5bFUwcFpgNccm6kiaSMQFXtpBRqVQzYok9tg",
  "key23": "2VgK7VrtHfpzm5LHqmiEqJxp6FvhHosUBhCS75x4Gwki4ay3BMchowd3evjRf87Ay9tSSfLentm9eNS6Ugjon58j",
  "key24": "wk8E96mFsHuQYwzwpGNoQUgVDuc5xds57HNwN1UA7D1sXbkf27bQy1CoJpXS3nv4FvjK3utfvbZapkQuy5yZRcm",
  "key25": "zmpTDunQP236E4wX1kEKH3H7mkv52pAUowtzceNveUEoE3AHNMUZZoZVuhqhQc25Gwbo7vXBGTprBuiAw3zgZ43",
  "key26": "3Fg4ApBV8CDVvNUo5N6Ci5nf9CmujuKyvd5szsLXJTs6YN6UfKC9xLcLNiFRraT3YLf7vsvX7DB5spnuygoXwmWg",
  "key27": "2sBFtdJUtKDprdjyPK84iuBnkVTrnv2VcSQXJX5NN1SYgqKvNHNQRdNS6mPMEMyD3y8ko3EaL73f7k8hoGmdjUQb",
  "key28": "5HyJcnsFk8CNMjaLmcH1VeXBkZU7kT8soqibLbRKaNP2pvaJeuGMDn5WppxxkybnEi1tmMjEBZAbtVQm99DuRQCN",
  "key29": "wEshMwrUCJwpBp3S5Ljk1U7gcQ5XFk4YngrcRyJNz9H1AyxRdPwXu9m8Vg5guhd2YFrywHEqarjMC9hc8zboiBk",
  "key30": "2THesk4vF52Tf7SrsseEq2jTjiCoBeKcobxgbLUUMMQpEohLbhf9mxAbE1WMTLiLDaLmCUeeXtfK8Fv9tF8rpLA5",
  "key31": "3o8TJtvB23jmirCWNzJeNMJzyw6w45MaSp9MtTyFjREvp1aFGgRexKaQDWpQW9dyj8yP5TmkjZ64yhDuxsh7h1jK",
  "key32": "2FjH24L6mHmiP9RiFXrJ3MUorLXWHN9LTi88WhkKikqzzjtUnznvzn6g8MqNoG7z7XpwDFzd7oAJD26UteYeDbcE",
  "key33": "4yrTUSzGTpoPmC7nopT5YryduKhL66As5kSxUTqbnsMUCqsC4aQfHJifud7QwTQ3kXm5Qu6F72GwNbzy6GvDhJmZ",
  "key34": "32xE5EsuUj3AAh5EugPtF11DjdfifZTcSbeV7UMgXJLddYvJWFcpwRtgegUfKU2WzAbZoCj68qWPhjq6yKXoZJwg",
  "key35": "3b5sPAzPooQFZpjvNcPDJkGshwDDkdkv9qKCKaKmHLUyZYLokudPifp9g6DCvrJnq7trAkvUf9X6zYPqaXYJgw8T",
  "key36": "4xdMNyzuSvpAwtec65zRZdE33dAc25rK5fgk6QsCMgEZKbHWQZiqnP8A1ef3wqsbhARpnPMsxXmRR46REnG4Uhrm",
  "key37": "2CHoxBTuxBUGHxdLsq6SnBZkx1XwX36KuGqyuqHAgsVx8uEPJGNZuLE3rJKQnk3UuXZDgaPk1YoWQuzXJPkxJKPt",
  "key38": "DCovWafiyoRmGyY6UjaaFyn4cFYwpfFpzX54gtLiKUV8LGv8cR5YbKnv7ggU9aA4CFf5keDT4N7K8JNSuPSA1Tm",
  "key39": "2rzBnR9rbAjTXRLZA7DN7jX2Q4hmgwZk5GAPRYfKGN98bWHGSeq3ProVEZ7eWNEJNmGiR9vjDAKhVM97Exun6S8Z",
  "key40": "3fdMAofQ5QJRTRja6MFhmyrAtak99CZHxUZZiX4ziiL3PUVB9TxomcVL2yyZvcoByXBAStaW2JKBqKVQmjJV1dQj",
  "key41": "34eLW4AmFLQuLW4anULzrhpNWjbmoabU1Seve9mF1e3i8b5RFVoomTuwFkuSXVZp4WspKJqmbEgmewiPFfVeAJFp",
  "key42": "rKF7BbgRPWsrvVkRaAhgR9pRGuB3TiSmXJTcby3ygjYPSd968DQdaUDZbjAaqY1bmVcQdKumiq1bTtAwSgzYr32",
  "key43": "fQZFfdbzHy2y69TWaKKMNt1og7KwoPQjWfBVz2Do6emTNNqMVhYVr87BbN5c9b6vzehUbZPcPkj7zESUvdQEG6B",
  "key44": "5BceKt7KDePFWYebqurhcAs5KmSiWFuwQEnLxQCqdriE5s96zjLDaNcXSviEDuXWaPbHQL5CG2cqSUAdRarnYyxK"
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
