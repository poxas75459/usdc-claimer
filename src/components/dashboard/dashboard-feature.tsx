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
    "2UthuQ4asTYzhG6W9ZnkD9LDct6HhQfx9vmp13i8tiYEZzqQdZmRjb7greZhkDet8fe3cDmziLK4DZ6FhxfjUFUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nc3RDbvP74yuwpUtvYnZbozX43RYPeuQzSDQ2aU11KnoW9mfkt8Y1wC8Qxw85NgzdfaAYVdj7aFjr7xEfqheRiy",
  "key1": "2poygJbCPBwQXiMDkDZFecWpUs6nHJ3jWSRmvevRFnivNvZBR59JG8fy14CuoscTqGxUNajLnZgVPdqpLeqxbsQt",
  "key2": "5FKNkVkr1wj4whFuqYW9KHJz7HnvP6fHJSznZHJWJ72whDonVx4kJ5vXY67ehdE2goHqPjxDfs17MVG5JGuks5dN",
  "key3": "29PvDm8XajdJY3gjyzXXm49aHvDcA4wrae9pF6AFw7DRw64mMaUHfdZSacrJri7u9sjDAt6d9euCYAtcF48AbJPn",
  "key4": "3aQqbijjRPCQmiYRCunqva16tLBNvcmvXtkpmhHiTE6EWA6GB8YaVnUrqvNw7xUtvKm3TBLnLYgYbbuD8QvMot9t",
  "key5": "5cXUFVYg67PXdMhT3dXteacjzGooXNoCKnscmVzBsuVhKKBwaehc3uSmNNvUZ1PDE4oMTGmbgHeZFtXc1aB6HX7t",
  "key6": "upqNVfPqZcs2fzGJVqPiNiwxtUh8J36JjpPaVEGTBgpHUynshueFZFbL8YLpSj1LTvxm22Ywn6smco3jEXNq5Xn",
  "key7": "3a7Lpn5a74da1sS7mNK8CM9qiKvPJEk7EkwVVVTn1VefCMRRLqxrNUFAJ73rBBmhAcyhxx32GPXhby6dtD1e4mUC",
  "key8": "5d89m591eXRUET5P3SzRW1KruJpnBff6M1UMKvnUncXdBDRvo2YRT6Cf6c9EyPV4QHW2SeMSWTBfrZMuGXop8SDq",
  "key9": "6evAeECgSvxnFrRp7LoMMowwc6PsDJpxqSPNdwAg6KzFAHZFoqZGKw3G5FYnSp8kKbp5D2rXKT9i7DcLnaYFuMo",
  "key10": "UjgkNeC4PtBELrCDGaAkJFKLznuiB34BQPDxzSb7VEApgnhkM8Eq4SJz7zVevQPPC7QVQgQsqqde2aeZgYFH46q",
  "key11": "eKxhqWnSqweC9yZr655BnC3bQFZQU9iGQHoNZWsHhQaQUDQdVdL5JFzUdtFfFL5uVcYYV77uwbTHuG2t6DY3rUp",
  "key12": "24T3MQkA3zFVHWppcRkTUx3Af9xa4SLBVaKgz1UReubVq7BuMfb7JKkqaZEun2SqiootJY28y5WxJ9tmKvAWMg1R",
  "key13": "MrG3oa6Xh1swG1oVpwS3CHLaKPmMQC7EyDk5Nzi6dvfpx5JyS9oQkT2sK13nGrfkUum1L4iMNhCok8vFbzy1dEi",
  "key14": "2bqez4JZWvEm72CAAcbAqRY1K1CDc6BKeETDw4gHTLKj2WUcgB6g7w6JnihVUVTvb58k6DGfEiCgoowwUy8fX4Mo",
  "key15": "2a7SyYdEJCCSCB4TNu6iPMiVzBMxYavNkZEypPUEa2vGaGwBC5Qxkq1kAzko5hFGci2T96nYfZqKp8idpMLhdp1b",
  "key16": "HFX6ZigKURNpBZCXtfj5rqqKoACav85Ngsd2AUmoTYXnvBKkdqFUskMcGkvkm3Zfw6jnCHfohjLtPk37iCmDqXw",
  "key17": "371R3A2m6o24C5rVsfqvrVT9ffBfHyKRssewHy7iPJ2NXsxHZuRSCKDuNekcErufjSrFHF8m2JCM9gyXFrFNKJRJ",
  "key18": "2T3ZgscuTAfGcHAzhreJzzuJmNRqDXfB9fwKeCqqpFX2iRxfjmtDfCBXQTTDMPyScXSE4BtcSoTNt9raE55U1et7",
  "key19": "4aPCS1asCoZK6YGec9x5eUgnffVdZktqzsHtELEuQhAuFunSwGELAm6cFb18WKB8Z5kzatKjhcGqv2moz9jH75W3",
  "key20": "5gbZ2JFsgbq83xWs2fYPzkbHNr4Kdjbo7ivMLymUaU9zGwebaezmnav3v6E3TsgLgoiM4h4eVGj623oFs6U4STzU",
  "key21": "51q7fTHxY3KZiG3V3jAs3mnNPH82eWLRNzaWNoyMrf7vy2tVvjoEX85npEbneFFSsoQJhmr8PsHvtBAZFLrLuhLG",
  "key22": "5BT6mQ7g6NviMJmEvE65vQtmjuHf7WqESTQEq7naTHq5BhquLnjGqAi3TEMBqwWc7MKzi7prCRUjwsypyu5SaDF6",
  "key23": "2QoDY1sV67ELGZJj95sQytee82vCZnVAFnNPyVQGLpgmdnWzjxo2SedKWdZhtxrK9mw35A5yKEH881GMDygquRtx",
  "key24": "2GveExgvAqbBBLLX6bX926HmoDecH13LgrNRR64Re8i8GAhy2ZguJNxaxNDUMnquVh5HgEgADHJ8A2iT8SNSuQmE",
  "key25": "ZofHSzhD8CiCr56LFif457aCBrPK19s9yiVtyAExvmEQUok3yTf1TpxTcDCp3sfE8F8oHvdvFqP8ZyYRjCJiYmT",
  "key26": "57rFxSiLWhb5TXKnHbmumaraFQ9ev1t7qUQ72rbcYJcwZqJZTug6aoMVyVY2CXC4swfKsYzuTuvoSTpbgbE4m2kV",
  "key27": "2dRioVfwScQhbzt47fabkB7sJhL2cGfq1D4s3uURw11MjtpVcPs5EWXbUdtUJ5CW5Jhn3hBfTpA1ePP3B7h7M43j",
  "key28": "3vSdmu7treqeDzSrSJXNwsWShKD91owQx1hdtS4pnjDHFXstPZg5oALQnPDreYYaPD9eTSvXy9met3UbyQK3kpg5",
  "key29": "3Whd8arCEGX9t1RhXTEEC4XFZwpversZVjhu713MD2xdomGsSc81Qx4juebX1NMkbL2RUvpPUpMEjtZgAYApbRg6",
  "key30": "4foToFBKEw8jVvA7MdMGNWVswBbSYyqoMA7XfR3zBYbA7FVvFX6BUNifbYtNmvi5bnSVbjPTR887iK2PhDtfoNBW",
  "key31": "3zMwJuBSsZetoPDXgPnGv3kptXcPHQKiGDhDPe7MfFNtTvE9RkbiDDcNaW3C3eeYncV9ChPvLD1GVY5LfYk6syEy"
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
