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
    "5GoQFhLBCMojAJ3nFndk382miZKuuyCnrgVxDEMHdYEyibqKMtGrRsLk5HfPVHBDy57rHdSpoqswo6Zakqn12Cwk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zd6eZXWzYbHFiiq6pQCxPDCa2aASsxyPWZVLbRoS1YF1WAznALxkzmqnSAod35AbFwbFX8Pjt4nuhcguM4CcM79",
  "key1": "DmeFfDtNopXpibNZBFrhFSgak57bWxneDMRzWjXe3sJWSpwaGkhdULNq4xfkqy6EHpf3c1uCRmnhQgm98t7ZiP7",
  "key2": "NwJBK5L1PCbkey8CCjBEvDr9NZxzeH5KuQ4ELtrQ1aAwaLLaYY9vq6Yums1fHvYjHJgD4F57iHhBqG8hsCaDzuk",
  "key3": "Ppzk5qSxqDj2cVV7YZqTj7hAZEJ5R1ca5ukNmfWZyddvdsteziy49bEStcAsxmg3piprbHfme8qmx2Tj8q5FbY8",
  "key4": "5VA2s2ae1v4WPss9RKhvQHVpHkxiskxbpH7Gsy41yM3PT2i1vrMytc9yeNEJPnwvm7K1wPb6W4PMSyZLro3j4xkU",
  "key5": "23TRvJjNonGNxSDvdHfKkBaDA41DyVHHGscyboa4qsn3dcKHL1jYcYLA5Z6CHiSECdLdkeEXGF1xVBxGvvc7eASU",
  "key6": "3FEQzN6ynWC9KqvFjUCNnCrFaodtusvFzio1N54fGBkm31xP5UfUY4WMxjAmGnjEUekLXBdaEwuiu6Hr2vVsdgVP",
  "key7": "61WayfEgy5t583fhXu4c8t13iM1mARnjeV7F9NmC44SXjFNRnehKCuQayYDm8a8oTgFNrByJneQPtuHxscYXh27o",
  "key8": "4HFWwYkpx2yw1cVTrfCWA9JsfK2EJPmmMmNi9U8jf9Dsm9ziZXPPoxSFe35dCDbe34wjCbLg4c6zoBseRd6WCvAC",
  "key9": "NXj4WtiempRJg1K6igUJeZvyZjY1EhATyLVbfgQgWu3QCLrNNs5tS7jStoTBsBhiv7g7veyeCq3u3FBhDMGPTjG",
  "key10": "2fUrqSJeRGb8E5sxa2K84SPYydEp8FNnwDgBcK2A8BqaFHoWuCGnLiqW4PygrXfYkR3zaiyBT75iSSHVuznC6DSc",
  "key11": "3Mmjxg1eMUy8pFKpXoBFczTvTUffQzxp8yDGubbSjQ4bEGXayhsgLCqk22yRHRPW1bccQxPLAGvVddkD3oEPBpgf",
  "key12": "RKvRK4ovh1HUwk3WVoF6tZkV1XEQpMtHEDN5nMLKPZZ1VjiUrFDDH948MKycKkHubfYeBGZd7QrJsXQNBtv8kER",
  "key13": "3S1MDZN7c1ax3WvAHTdnXqacz65gmkZQVPngVBWkHg3eaqMFtYe9RGo5dNKmLyssX7ngJcSVV4TwyEU44RAMH4B",
  "key14": "26dbT9qDssfo5Sq2X64ZeS6jgB2BKdgVPEEj6omuWxHapPQ1PGLV9hCgovsiBmAivyH9inTUTdknff12nsrGe8jA",
  "key15": "31JwYF5RKc4TTo7hrpz3Vnh1EjVbsVdXT3A5WEyFpivZck8BB9LNgkYUxLdRG4kjF67e6MYGzkiQPUoq3eE4CVmf",
  "key16": "3bt16Ejc4Wg49Uh2LP2VwNbJeb1XGPgAKbKUevBkiBhTVsoQn5RtbXWtvPziRwJX9FpS6ht8uKcuW1JSgMERF6YD",
  "key17": "5wEtinSbTnvQVV71MEckW1sKcaYvMdhWgyS3Eb7Xh7q3fvDo733F5YpnDnKdsx5DaiPyydpmfpKpY9VSseUwzcxk",
  "key18": "4FAYrhLFTEfDvntEpcMdw9cnRDcoK2ip75xGEcQ7BVq8DR8VCUSkcLAhfpM5SbCqRrAKqtJdoBWaUiXqmGFHVfJr",
  "key19": "CFjadZakTK2FAshynooAngC7HR4h8WDPYK2c4JjkUW2qhSvbgvqs5AtXwzjMTjyHz35nLgdBzJSW3yEt1mirgqd",
  "key20": "fyN61KYGCEABPpUoQzupr5e9mRCKcF2MPr9YjL3oUmPZKCzM5hYwrkFxqcErvrv8kLioUkeyoVDAL4PquALaaGq",
  "key21": "4mY7m6pyJ3dBprnyHRMKkzFJnTNrtrd24bT8id5nKHtF9LWJEwvQDaz4Vt8ypwPUmwBygfgwMXVnE4839b71LfNU",
  "key22": "3bP2jGwY6p8kmoo7sADFriCpUVgPwDxnAnhD3WQ8AEQRcoeb6ryYpBBSxT4vyDEuvikKjMvv2EDKoMQkJTLW4RwB",
  "key23": "mMHxtZC97gTydn8QuBEig4Bix6WeDR6qDLW4ABeQJ8xPzM37F9UUDf8EjGvGpHrMLqKPKjtb7M1xQogqi8VEuvG",
  "key24": "5wESsmx2DHvwxznR7dUPmSqV6iJPqXwYEmbxcdkeD9pScGnWRHHBBVadLRuoFqHWUAikNQjaEnsG3Yzj2pFjC5Bz",
  "key25": "35qfzCEaTuA71gcsYt7tRXbpnTxs8UCJFY6mdQWHJBc6E9M2KYhMPKxzbRuTaB1BovrehsuoegUZfSX7jF2J8Ff9",
  "key26": "4ydPeYaAc5xdDHKFBvagHcLNaGpJiY1RGAPgsESLZD69zRxSKmEFi3vwXtL7GPncnJzusNddu1KEn6Rs4jEC3Q5D"
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
