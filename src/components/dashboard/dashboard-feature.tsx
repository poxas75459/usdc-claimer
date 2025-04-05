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
    "428Yhfz5SmZspdCAxBwggpQMvE6kTxtAXJnkSZstDZ327xJson4CtJM5UMAX7FoSZDbiPW3ysnTnuTkwF8AH2EfU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35mqQuxYCovqxBLyz2CsarFW8MsfqsvB67msNDK1kh5QeR8sMRPrKBhbKo1h39uCJPf1dtHHJAHCgv6kMgnCvq5s",
  "key1": "4V5NdoZhTc9JFJHvQopv8p7DffD68CGVb1kCtGQH3FfgyHQ3cbw2FtUT5mYubCHe2VtfFLwaYieDzb2UCgo5T2dg",
  "key2": "4sUSHQf25QwhTVbLJZswhsvVmKAbJUA755Wzq7BUXEPVBCQ2vNsb9i9wQ48i8gjawthNQVy75ZE93r5dAZpketWY",
  "key3": "2nmX1sb5ui77gVJuNoF9EtsdyN8gXnBveDCss1qiixEzPp3m6hAx3iToBcmqtKSxgcpjWfk2qVE2eJVEvNMTkE4R",
  "key4": "3ePRWA96PLKnz8iBJx4Ev7RxrwpisTuqLBQgmH4NS7HQketbMP71Da9NCiLGXpVt9cXBEYSDB3V3sBgyh8X9dqvy",
  "key5": "2FPeuiuqhAH12mdZqfFTpWt8jEEcWk4gHbYbgara6ayg8JsSSNSk9b32kb9TriZT6mF4T1M3P67Uix3fTxsFqdE1",
  "key6": "1cPLGBsAZzAoQnbrhKqvY7VswjLkHcSbKRgfuadEt7At1D1m2SFzqKMUudCGfq7bqRAbMCpci2dKGyH4bSrB5bt",
  "key7": "4qKL1uc8STK5frwUrxv6EtQyVKxmPbuUJvEZKePgV5ejpZBFgM8fznb3Uw3Ja2qayf8MCYKhDS4njFgEPPbditWw",
  "key8": "3TtEEnqYBAsqfeMTD5z7WrL4UG9oCokCG58hUNbZhawf5WRXLJaiuMS1e8AsB7qEptD9FWs4k4wRbVv3JrVFT76g",
  "key9": "2DQo2WGxVhqCMfoEqS6S2oHfUPZ1ZpUP48b9ui3JN3qmrx1E6b4SiVw6tKJeF5pC8wqzAP1bi1pV31uwxioQ3oCs",
  "key10": "q2mhLz3eatwZxnq7MB5aqcewWwtibqmDxZ71eerhyPUbCief4LY97cdc5LRud5c5Snb3pmKYbSZi1LGzHtpuESf",
  "key11": "32Jc7Sr1BNTD5Rs6hixpWDrn2P7zMtpTCkdLKihJmjLzk1U65xXqXpXCmeqjxmZfKNooKbBKaqAFtbcsLLCdirdb",
  "key12": "2snEgX8roHiD4wnTS6hW1gFymhwprXGLs4MgqevGHKQWW7FJdJScaqV2wzVZvztuccLSf5iuHUWg4VFDwmHEYvuY",
  "key13": "3bS62kjZtD2Q1VR5Yz4ASyvgBRNZFAQvsZNKJ6H7MhYatSFYBnu6H8AegtRygQsczvdmwwFaWZ9JtAC3CqNNkAi9",
  "key14": "53ydu5iQLoQxBGYzB2Ea2zzixC1umyrJiTXngDp9hZuauUW1moMVAJSC61L7CVu6iiEQpA9esp4kEjP19RSq6Ahh",
  "key15": "2sLe3VmmYpMkAyx2bF9rQswADdCqnDZ8NE19SQSciEd27ttEdHW8HeoqT2r1N4hs54b4PtJpcquHJSx8JMpE5t4v",
  "key16": "HKuHtduWhAw1XAn4LSLV7sWqnP3koRNWXDpQgz5Qi7AGoKx5mAqSbN3ByvpbHmVJvDwUNKxDVfziTAhiS2VsW11",
  "key17": "55t7wfkccpHYvmGDmP7itJUrkgnddimbe5kxUjg4bDBYvh1ntXqRWPARzahHDMmkBrxzWZFWnonNfzJbcKRnsykv",
  "key18": "3RfETjwF9rYnbVLfU3SB7zNvYYwNExCaNUFsQLuBMt7nYSi1UeXXkU4LrzewwZ2cFdE3R6AoMxoSv2c5R4n74tL6",
  "key19": "u8kd5zdAWf9hLT2M2nZakaLKUFurfA1Hu5PFzXbm1MZyvrEVMkJ3QCjyrj6yo5QScaWkxMxswNsYJHDDVps283B",
  "key20": "4DsiBWbn6pvR1PvC14Hf1iQ3jnRG2dX7vcDYY4a2KjuFocRdfHpu2dL2s3DseTcHa3wW9AjB8XEGgyFQHh6Zdh5z",
  "key21": "39yYGpCe23461EPTrY9kgYqEQ2UMNuVQ9BXMdokpNUyr1cYy92FUVz1D3eVFaavu8KDmp45GQJMFQXQZTrGJsScZ",
  "key22": "382LtxYSY1Xp35JbTQ3zigHGCBCq5a1L8sVE25Zh4wrYgGWDkGHeXRCPJnLWqTi2b6mQ2kLmUc1T28fqLvWF1jm2",
  "key23": "38bnm1YuMARQgr6NCAZLF25agVERd5jyMJsSgUkFDYBaQBMGUoaW5AHzTQKgoSMoxF5T843Tyi6aJ36PEibAbB2s",
  "key24": "4wd8GN5yqpwjiris4pPRJfnmAS1eBEputTEyXEw2UrkedMDZhUcd3B8PhE9CWunDJPaDmos5Q3Sox78ima22B8pR",
  "key25": "2SNVJZwZruad2yFQzK71ERcPzckbtc13uSf6KSn4YJy5UW3q68nfDcfuQbapE4LmhdMpHJbwg6d8SmdE5SW6wNeX",
  "key26": "4vVnunC142LAcwuGP6ipYfSmAW8oYvbSVeS7n6vmj6bGaj6aShPsTZpgro5ZtLtitbHVtKSPZg6aBbxZAKFHyr8Q",
  "key27": "2TsE7SVJ4wTTHM11HVJzs9yVGANPATogX2ATg9VTtvXqHSVuZQr7QSszwTRA1zefeGbYyNgcn8zmMh5JDuHXefq9",
  "key28": "RsLqrKCUMdQvx7uusQeDgmzLZ5SjdEmPZVhfrCRrN1twXh8X4ksfjv4nosK9Y5BaPjAyje4UPCiSriK7aeMm9zB",
  "key29": "4zRQiZDoCzY3bzf4msL6qKL2Swz8SgEKLSQFwS4o51nxxnRF34j5zbhipXaRSC7txtm2FXtA33V6e4hhjQeM8aBJ",
  "key30": "5KxdX1Q1WWWfU18a1CHW4WB31ggJX96Vu6AEWpLfS9W7oSDhC96CqTNFHcWV4JU33YJapQwLPvTbyAx59jm16Pms",
  "key31": "59ShmLUTXh8FrZgsrL6RLNUo1xZvz6eYhomYZa4u1ZLrG5yaQwCVBvRgEn369rXoko6o6m91fXwjt3jcTefG4VSN",
  "key32": "3QpG1xAgoG8YoCg3ZCtLsZBH8zi9Asgx72tF9hSdbwunmFcmSaxPpqibxC9DQysx8mjSXc6gUsmTHW8CavfWrQ7V",
  "key33": "drJu4ynKMWFSwTWspgKtWGBaxQmmcP68f5KprxeHD6ECKb9XDaJT794daQXKiiHakyZFZQs4FWwmwawCJo1sJ7R",
  "key34": "4f9mM5vCdH3VoNA7AbwxYZX2NiEZMBzW4KhxgCdNtdBo3iQvnMwcDcbGoHpeM8DuxtCBUoheej7f1DKeSwhDvzK8",
  "key35": "5wR82jde8pXvtwxkd3J7sf9JuxjExcLRrdztUv59sdbWE4BdeqL7XNazFG8AeAGgq5mi6454fvYXvGmeux3AyUfz",
  "key36": "3rh9wwvCfGDS2qpX1QNggxjaCjMXHoKaZexHdFWwX3JgRXNsUCoMzekRmABG7jqF4AeVSbocVc3AucMhPPNn4JnT",
  "key37": "41fhfRuvuiXB5RFEtwgNaPuAFuBTrZbHFiSTwTqhBb33RXz6gEgBKhHMpYuoSEWMywG4E14ydsN4ooNiBEqbUuWU",
  "key38": "4ozns35cRM9owhg836uLFqqEyfGTJggiHHAgrfGUeT7qLTfymZARQVqJEByUFdpM135PZ3vBnwX5URVRKfELmGh2"
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
