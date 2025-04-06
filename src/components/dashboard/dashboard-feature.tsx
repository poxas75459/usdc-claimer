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
    "eB9RtTCcPbzoEzWZFUguvJeiGg7mYkUoaT1Vmv2YEtEBdosMakngssXkyTuq4k9d1wXQdDMSKsLJFgodaVPaogF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58fxnSqPRizd1uBvgAA1upQZskDpowruqauvUh1t8ByovCyjfnHhf7vRpE3CkG7L2C1sqauLjQ2HJ5uUvMwtkxXm",
  "key1": "5aQPiqMcQiv7EsWSyAvRrQ28VsBY1y7Ev1kF31Ca29Wu9yNvugKv5B5ZsGEMhhgWGDJhqCpRGzHfaFhkPWuerC1h",
  "key2": "EiqoRctQknuHp8pLRotWbkQnVGnahJt8gWjskF6i1WtufeRWtaT6huQAM2muE5jwDo5aGegivmGARcLGyjefkQU",
  "key3": "3DFKFhppU9DjvxwEyVYCvwQ3y8MGHEcQrdP358EtbEVsR7t9pksSvnK8KW91jLDgzbxSRNx8jpro5fMVje8RikjG",
  "key4": "4KJMPpUc9XU6oztCVMfZzP2tAZWcUrQBRJNizcSTY9M9Cj4FDG2GNQxmpUAFCtA5QkX6KB2MPq97DJVgwD77fAFQ",
  "key5": "HhNpESLX7j1rqvvtiqkYELtLNTH9Vovj6P8ZQLEiWZuNeXQYTvincEkBsvu81PCZYLMxvWxXtgHKRQshbR3Tubo",
  "key6": "vJUGMcpvi4deTa1UUtii181eV9GXGMxZr7RZMyLZKWjgvn6Au2CqR8kM91poAZFPyCBhQgBvVReDyvdkf5S4k6D",
  "key7": "xnNfW6ueG7TSfCFjumJwQwoURPuEKVJg4JyYvZtMtMEWMJZuPgGbhc8C1ozggRPqFqatdZBN4rxhL3LeGdJtR4s",
  "key8": "3RhRdTUcvHV6Ds1r6MaGXHZgpYjQdRQGdFnpsdUPTV44d3v4tiXGnALsxaJYpCJedmaErkW8tBqaEWSw4Wfb7dWu",
  "key9": "2DUVF2DExhUzhpPWXoidcHFxWMhAHxRCjE8QN8cDEM1wUpuHY7EJHXAXZpiAQ41FbzNxLxC9tvjBVNgD2WnMyR2U",
  "key10": "3RvbU5jqznRAknDsrxjidMbqnPorkk2JX1BogTQaN1ZofQwxdFYt1erKXcTK6NTQwpAe2gLi6L22RX5YnCRAZqWD",
  "key11": "2vxjZFcUHQoaP6vyErdiHLG2188rHorL6ktF2AcEhG8Fja9cqK4fi59M5b464KvaaeTxZwhxP38vScGowHMU1ByP",
  "key12": "5aRaWTR1KPuMdaFHwnp2XU7syb782B9JRsdnC5xhh5bQrnrCsRmBRAmher9gGSHkxCobb3CqYZqox2fCJZou5HF1",
  "key13": "3t2r5Q6bbAVZh53tFb1TQitWwds7Gr1mSYaGSYVA5BxsdBBbnSbyC9EESN8YuyGrqVz5ngrFXiJ9rHFUshh2EgSk",
  "key14": "5HyzijGvtrcfi5fEi6TWvR7SdBkUmkGK72KRh8srpNJsYBV91zVCb6SWDWYDPLpFZuFKwRRKS9JMwwmJWoX6zUAE",
  "key15": "2yFsKXYEVKjGDFZwEJaGGyvEs3ZhzmFUQ4xbsqorrovdFYvomQ6X1C5bmkPbRuZfyLkqrvFfKzWhBAp7z9C6GtYA",
  "key16": "53tLPvJJjvniDs1gPJ2RvZ6Hfk7ssRQW5qzwk69nor5cDiU87zTiZTKodbHCRaYhpoeKosM7ydh1JutyDTdf18Yp",
  "key17": "mX9hRT8eaukUUMfLHutXmfnriJ7HLmtX2jC5XBVSjb2Sc6X9c5oJiSJvwGN39anc1XYmDN66tiL9bg2t32A3fWs",
  "key18": "RJJXVBaXwq4YMMpd3mg4rHAgx35fHXDoTa9GMzJ9UZRK6jWJSRyY94shthEV76Rzpewa6MdAxsCXXPmCWrWhtdE",
  "key19": "4shjCUDqgRAvJM8WH2xgcM55DNY9dRnYjC34cZQzcRux13fU4qaefPkW7k93JFce3Hazho5uwJuhmiVSqt6qcwPN",
  "key20": "3kdkbSDeB9wDKjzsZEuejJn9GduRex9czcpYeuPbrXKrB3FPZcdN9oSMCRDAG5m27P2AQHnqHt4iyRgPGMzpAXrX",
  "key21": "JXj1RJLg3jYsmotu3NavngnmPsVosTVzC7NKUKKVaK2mPTKb9VtDDYXsvRWeYZpTBu3c92TPU2YktouNvuV3CuV",
  "key22": "53ZVPvfpfq9GWu1wiFWJpAusaDF4yvoxmULr2tMmHRnDnKLRCYHDPWEBX4uwY8B3Z1ksNU7gKH6M58Etpm6nAth8",
  "key23": "cLNL4SkoJKki6vzpUWoQ17aGhc8JPGRMpPXWAGE385vVNfSB5U5yESuuK8ARxgWGGnSFmDfY8bwnJ8GcgMhKxYx",
  "key24": "47uVojrhwb3ckyG8zDT3211MmUNZti7pPmAfVEc7VUmWKonPHQPQUpnYGp1o6xDpWMRgozSW3HysRgG6uAFmQBA4",
  "key25": "tDXdmDozGh7A7ykQqeJKuBKCZzNdSVgQK9XrMysuCPrTWBWitsHKjNQ6tGZXFm1x9R6S82FPe4k8GqnN6QVY98Y",
  "key26": "2m7NRaqBruLfT35iu13N2pFKLNpqRkg66Sampzv5kk4BVJHUR8pvACTUgb7ncxTozUtYbobwA9vc2KKiDUpgE2Ui",
  "key27": "5aq3NhjDB1Qhp7eBv1Q3kVWuK3AA6WTwXpTwVA4ABoMxd5EbrongTybayR5PzHQxZvb8iSoCHH1m4CA51tf78irz",
  "key28": "27jzCrQthUC4pYkrMPu91VkuyCqnUdSR8fqa5pMRu2QDDWUfQR7cdrxwKDdTwvLXKWMjqueiCsyr2WdB5FWcvAQv",
  "key29": "jYYfn5ABZUwiQGQVFeK8rDBoNtL5reW5GXH1zuXG1C8TjVyEP9wuhkfspyjfYKsEvkRz2Wz7p8EuPCEnvBDhbjZ",
  "key30": "5NbaDbuzZUuadc7TxJPTUy6eh3mL5EFUb2i9funUKS9upHYLsBrbSQKzvGbVKRYgquCJT6tKm9S3PBjWu33WgLyn",
  "key31": "WAJArRajjHwjdQHjKRjPvkdbRsKHB7LB3Rm8nRnakm5q6vEmXteoQhmGc9Rvhz8n9NWufE82PSWk5moBhLmH69T"
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
