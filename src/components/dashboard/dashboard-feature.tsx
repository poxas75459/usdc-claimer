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
    "29bwf33TpNvaodpvVGgrxd4AP4yKFpYGU5xFnj3qJ7zcUWTdDBSycd4Lj8yu9MUT2ykJTyh4VhymJu9LDLD3AkPh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kpUFx93yCqq3nrqbaB2XDcD7oZr9Y2XTRAh8cHSZcoGaCtQf53pDuXH5hPbQY1g7WwxK43pr5Vst8Ay4TUEUfvR",
  "key1": "46Z91HjsyjKkYc2W3c6Ciuzh2U9Hse1QzUPgr9WkfEVi8oQpUpfVjVxSkDKJJxMxDEe2ABGeuTvvudvHTVv8LWGC",
  "key2": "apEV7E9Q5AGyFMoUKHqfoWhmvf9vyBMtdoon5aDLxNz9CRSKMGaftLAhY85RteFtVQxJjQSm4dtBJ8juPX7mUx3",
  "key3": "Py63aWVoQsdSPNQLaCWEQqRUn8CUSutiv81Uij1rF2ZQ1v6savfG7mSvwP1giTvcKZ4Ka1EHRaR2NsQYUTp52yQ",
  "key4": "nwEpYatSQduGSUucJo2us3SGZHoxffefrX57BNJniXZrCPXBPzkW5ZmG4UKdGbis72UjwLGxFfhkBgeHAtTABjw",
  "key5": "53aQYX42po2F1vqXsisRjZjBuL3sZB7ZCU8Rkg4ojFeu46uKLxugcXtvvU2KRp3yDntBFRaHRJk2xrcwd48bR8gK",
  "key6": "4KTrjPtt14mS6HXZ8XEUkWv4Usi7Dhkuhjh99TvAkCdziQ9P25N5Y8dS8gFM6g6CSYUxcqqLU4VC71JscnQxpWWC",
  "key7": "5q9wdUEYebmUSQW1Y2vdQNERer43A1GR6Mwn4nw9UHr99HZHAkZBqvKKt5oePPj3Cu13w5gtccber5xArKCjumYa",
  "key8": "3oR3kxS1tduxEiauPJTxtghvJ1xWkm1bctfmZ6Ye3mhjFoqhkS9Zn1C6FGPvaFWAXAqrebKPrgkdFFtgBCX7wVjo",
  "key9": "41g75dfgGgifGZrrZDo9SGKbPKZAPB9K3pyZCGbHrgN4g5L7Gi6kCrfR5dzQfRYExGZMTNkpicAsbGDQnUGYwJgN",
  "key10": "4m7kggm72c1iyKw7uCevzSjFX1gEDknrNaCcAjD4s6in9JF7wcfYpoDiA4JnZQN4LoFNvnzLNwAGfVN8maV6R3Tx",
  "key11": "5s3aRsEHoyX1cYngeVwwbooh9Y25oorSt1HNvTPEqXukBiRmY4HiCa8sHPBx6RvuFxDF8XuUZas5vUqfrntmWx7Y",
  "key12": "xWneRHrjJWVknu4utEgX8CDtUkbsrM5wzLyuqLXwjM6rfxm1JsXcMZzCWhLPDF9dvK8sL1F21c7VEQx6Ef17QxN",
  "key13": "4VVP4AUJpKMZoyjspL5Sp3SGFanbkzBqy5AVcfSNxVQb6KQNG2rDyCPsJKzFUdvrJ3D7P6JdvYqqsofcJAJTWfpa",
  "key14": "c8EPZv6ddNSU9BFAKMbXHp9dmqr1oiBbKRbwnHcD2GN8H5AxpZdYMDgWVzYxVRUu9bnn6933jwARG6GYaFR3MQx",
  "key15": "51Expx2CcowHBdRSiRYQvqUE5GVsuRvFvhj98bcZiukpV7RPbQpDp2VmgH3fBSNydZ8ZcN9upxo3toEcSeNScPhB",
  "key16": "5BtFYbjNWHzQxKNVoeBukzbo3uXRVxhTxqf9kfjcn9KAHJz42HeNY4VgUpBkVB4xckDNkRrZ61FSGj3iSiRZbYgq",
  "key17": "3H4DXGKsRHoiiyaroz6cmraFv13xGpNK12F3kW8efKqd6QNTLS4xRMYqZN1WnehodHEvJV1QacfHiHQp9Njb5P8i",
  "key18": "27p2EEhGsKZRvBrPYMKmoSAYxRhXPo6Mdy3ZLCggxBYR8QZHwaq5NnZPV3Z9ahHb31gRyPgUr75oCtQZR6VzEqpo",
  "key19": "2pJ3952xxwVH5eDHVkFWBWCc1ivKCX1H2dMdnJpBK4hax5N85WQJ3G87C4KAeNPFXx5wcXKtU1UcthDvxAp6zhXJ",
  "key20": "x8F3QWeQs1bYxwZucH6tv3pHcfUKbmYvPQKonodXyYbXyQQH8krkyeCvY8KGPDRpTz1pkUChnmouD67uRs9DzJ1",
  "key21": "5RGGNi3kL7DPrAaYcJgfrzGbyUSLonvRaFBNT53qNPf4ayz7CFHUggTGeCMTZAygPKB63LUmHC29MhdrjMAECkxy",
  "key22": "4uy7qzJkQ5Jm3EXq6FAo5HX29iUkGvExyxSXk9jpozRV4GDd2qYc24arvHgjnRyi6YG4gdoxxRMUxDq7hqMsmxit",
  "key23": "wPF4tMc9spCAkJq35hNC6tmWRzqgGJLyyn7LNGDrnc53QrnWUEvFWw1jrvwgzyfQeQNRSnfcFwUc3GjcminSp8k",
  "key24": "4fkEVCXgbfJVhdoF66GzzHjA7dyhQZyiu98zVXP89hXRZF7pBMtQGz8dCEHDn2FesiNf4rVNM5wiDpJSXZhD4szC"
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
