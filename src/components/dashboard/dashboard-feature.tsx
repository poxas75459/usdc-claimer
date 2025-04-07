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
    "TyY6RQpCZzm4urxUiUeLmjtkuP91ZGYeVBj8Vi2d5jbyRk1DtTCsPzP83SBWLcyhY6N6xnvoRMbdZL6vVZu4nZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uzaaXYUJMAKWkrLCv5sZjteSE2FaPtqYp5GmfefjJwJjVcKhvHLptbSMJuuCjDiqR3rCj5QPay2AU5LxkG5H5ph",
  "key1": "5JA7uMYaEp8Dp8FqJcgC7vGUYJHPpAzcTU7AmWxMFcQzbwmFywDKDmKmFZL3TLPpcxqcx7ni4SEXmVpsGxhQrGLM",
  "key2": "QWapqT9oi8UhmeHkYTbgvumvgtpvwzBu1qC2K6VJdgZDwQrrx3w121ts5LTMrtpB77Lib7XZRYdVLZtErD6SXLy",
  "key3": "4AbXRLhvo1wJYXbbtVchFaE8MAp3yGPcZ9Mok3UzUKFkjKAxjFoSicJk4RFRpeFMN5BeTuEcVtLE2njbTniVUvhM",
  "key4": "2EYvLkAVLQSqi9TyHPNFyahjQ4powBUwpoRT9pwPDBMm4YXFXvQojtafbjCgMmco13KNou4oyndkLcmaQu8MV1cP",
  "key5": "2KxvgySWAeMGKAxWZL29DjVjG77FvFmPbU4TBm8FmqkbcixcvTFnGhX4GmxMeCDxLBguEzceAaLvgtGXpFB7xWfG",
  "key6": "2qkWytFzamoiABXTzLw71aawkkHcNRXeBiXFxZ6EZtRPjxRAbcKy5SQgT2CDKEKNxMayMkKuKhgZiJSCse4Gmdfy",
  "key7": "4bQKumBKD4jWfs1fJR6SKNEU5ZhbLGUafMLN4yG7preuNDDDRmjey1dViBfPiBdPdfN8iXLfLY8tFVZuHG8phhxe",
  "key8": "2mUvAHLGy8kMPNuQCrUf1h5F14WDHVsnp9tDVf5TFuayYQx8dKbPkZtcsjY9s3y6DUmjh14Zeu33H6tpL3GSxb2v",
  "key9": "DGdoeQ5HVKKptv7zM18wmLh7NazuVGwGQvKAomEWhXhndB8jW13AWXu1brqn4qRyMwYJsBW6JLdrEVfBZJoWYKG",
  "key10": "czSN7fq13mYnbGXMVPKzJSnzpXPZDf1k9JwLVVWZHez3uttMZtC9PiGhY8wpgUopk8Pfm5m5cxPz66gtRpEyun1",
  "key11": "spLuWmoL96bJ9g3sdDAb2cMHMFvuXDhgWGs3yXs5f5MuDNsoKA6C7YEisXxLAziemhTJZe2uMTn4Zk4dhMLTijU",
  "key12": "3dvsjgUd36QSRV5b3N8yUCKMiyxjfVYbErrNY3SfosVWXSsdE65FRVrFEAgoPhmaxRmp2rQGCsNn3pQxPLK5e8Y5",
  "key13": "22Rp8PB51y9KV36gY1o3XcQkFnjWBR7TpFhUQCGnkh7MNmiC7npWvUtsaDtyXc7EfNgCrpcZ5cGjE1LAw1TE9WbE",
  "key14": "4zSZbvUnLoFyGpdRgrtvN8DAhaqdXTTcF7bjtph2s8yAmPNVErrakYPUe9n1Squ46YtREWuCzaYDKJy9yJyyfuhV",
  "key15": "5fU8eKzuiS9QEtkyynk2BHu8jzJ4X1hyK9Li19Eu4QPW2A6HocyEuZWcxn5NW74dpaThsNnF5kLBWSuKfdvNBnEB",
  "key16": "41wo5XT19KorfUNLR8Z5VG4KrcvmyYGS58AL8pj3s8cPafMFPdKNan5S98LdtuU5Mo4Eukv5Y5jPe12e7ZteSWL6",
  "key17": "4qecRaPpoNK2pnrjgYNob5gpofGzitAoby83UaXwQtehaPQfdN4tN9rGq4fSP3X5XzUfjGknFT42jimxsGgqMjWB",
  "key18": "5DUuxZxdf8WHzzRYniCviaSVD68VKtf8UQWxTWPoecyF6rrYq5FykyaEQ12hmkoGe1eY4B69YBFsnnAHgn31DtPZ",
  "key19": "Qv15VQKPTD3gLCoPwwPbttKRcWoqi1v94hYhXi6YgjG8JoQYQWn61gH5oYu8mdSXcLsrKqRJK2xL728u63xxHCd",
  "key20": "5CrGhGWyKqcX5Er4ASaFbyDWzxnxaTpRzAhEE37DQGAJVFmQwV7er9LtveyvyvdjxZbyWFBqg4TNpXgahKkJ4M4K",
  "key21": "3Q3NbR5NHPohMCq6p486H5qTZaUdU3MEhB1Z2h2NE7HAngaBSkoa4ZH4jUmhd9cCXEuvLzkmANkgebyS8yRHnK6P",
  "key22": "3CzPax948L6Qp42UNPfxNbFZT9msQLPxy886QeL8tFxihriS4XWd9KRBRwntoJkhkFeYuuLmzivnCGZDaDUdpKpn",
  "key23": "PymFhVmfhHpJ3L5tDCgTX8yiBSGS8qQFFPY8S7pet6YGMTyZ6NeErNhHJMoiaPDs43NwQF1jm5WedRT3HMfs4tx",
  "key24": "49kLiyRs9jaex34CT8A4ZRgnXryfsh2QNAbBzePLiys9VQhKdnP9F3PPEufxcSL5eTMw69mCCHNrMFWJ4ch7ycmr"
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
