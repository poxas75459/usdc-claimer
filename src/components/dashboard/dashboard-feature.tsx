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
    "51sL7ufzb6aMMMmDNmYrCz7i88TUtrbThV4vyJ5RbY96fxPp5WUyqok9fF1zk8UbVK6QV5Ai3J2x8tvPpzCuN6jW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58mVoo9dYKpWQUrjVTCK7WhjJMfL85igT42jSVtdeQSEuBySwUMKBUgAjpGeYHEG26AYSoYgZKuq75DtGB2RoZNM",
  "key1": "pKKFFKQscfhTweBWt9YiGsxCcDumkF2jeuvAz2jBa8i2BgRdePvaBEfC4o2Niyno7fkZqhcaZAB1u74GFn1z4So",
  "key2": "2kiNKFozDpujtFEeGFozPqZvMEm4GXzDA96DFpkyVu35Lw4VTAFzeSJFq7eAwNptfHWK14B6ReMT2Jwmbzo6KFWh",
  "key3": "4krKdkbDpYd1xrDLvo74bMCFfvcTU1VMeowEzu3BsCqiFj2SZwhyphFrAeJXztDHfyX8r5GomyeakBfKWUWDt8rx",
  "key4": "5SexzHqNnFW1VF8Uj745i42cF2LsJksGhou1fw5R6cMb25Gzcg9in9m442XS35sUByeGYgvRkMY84LaVDThqJeCJ",
  "key5": "2oWaNEKuAyTiUstzPUT8CnLRs4AvmkXRbqftWNVjuQWXfn7an1yxwjAegWp2isaVKqcYyR2EgdsnumcMQns1XoTT",
  "key6": "2rCrvNLc9DsoVcH4paZUEZm9aK46Di7Re3Kf2T2TSvF27WKsjMxpZQfejWJFp15aioruVaApXv9bNMo9TCxvoiNT",
  "key7": "5pA2tZtTbemvD8aUgi6LxmcBnvufcUyLbdVYhgi6XGTLmeaien8VUXFzQHSe9hQ2QLayMdQiR6G7MDsyjzN5NJXs",
  "key8": "4FqfLK8KHtLyZtVnwYC9ioPpymPuJ83X6aeqw27e9rWY35HtKV4nU6dGPphJNrEciBnbeJW6EhbbXKV4FNabKBat",
  "key9": "21WkrcYc5i2JChK2sh5Ma6iedKPurPg1vLJgNDgsiNF8Kz64rppThQqMsT4WT3XFZX947xPLiMtNboxwDurb7NJT",
  "key10": "nvLnu53eBJ55bhTKWJimLNtPjFumBPr5E4f4Pd7R9kXKVxzxh3LvjjXeJax9kdXZumibjmCSPhQLa3svMAtNETf",
  "key11": "4fP2tamtmcpsGi59zy6ZdxWrhker2oodZZ1oK3HXvzz9VLTZQwAjVR8Q3mzm2aFjymWNFWUACeLPChTshLH5m92b",
  "key12": "2cCPMHXaCMQrGJKVPiBPi5HziK8JBReTJnrZxfmYRQ9DWtzyjwSyvonaPeVfcDjEPqjd3XnRwcSqfXSJ4yCq8ymw",
  "key13": "3CouNH52ocTF8aPZNGgKe49qWz1gceipb4zeHU6mWrvdZDdj11ARMDESNdyH1B8nHfXaXQ7Fgcssnyb6pbNf5oEG",
  "key14": "1f6UitUp2Y2YrmmuDTazRs6r1iawqnHdsCvVWoTVWoQWfsS7QtG1jEDRX4hBBSg4YPquV4FvGMrcaJmaxuKzC6j",
  "key15": "3A4gVy75WZwXeaR3PbsSaGJfs6RWCHSY8zebKpChaM46sYoGv85TDv6CduDvnsQHTzZdQ19tL91ksgLnKeihKEmU",
  "key16": "5THYvG48ET2gQYLoQgetQTMRErZWDnERz8EazpeanNMmDa354J9K5vMLMzY3UFX7qi3u9SC2hpyEZujGbTHn9gNP",
  "key17": "5FzwNcfi3SssEDRgQnszs48TXR9jHtxnD5FjXJwSuZCLr3wpx9JubZQQmPUgdVFmuXeayYuRecHK5qQGiFbh8aG1",
  "key18": "5cuoaCkpt9UxvZpcPodDdzAZdgkS6arkcbzGuJHMSMpkPW6waVkHXATiTwBFEW8P857buX1ZGAfLT2gbGYMRMJTf",
  "key19": "3CEbFgLQmR3bFfwFtKUtwZTd76yDXhbJP9As2H83gJARKue5UsAJTFRy5UUAZq28s12MtU9etbS5KyjL7gMjMZHH",
  "key20": "3Eei4myNSdYH38JVFjzuBman2KDeNx9Lant8TzAosL3H7DgQYVFynJ1Byu5gsqJ4XW14uSDGL56jVzdccfyLk9gt",
  "key21": "6eY1mw8izTQbuvyKg1kyEPUYbAu3bZeVJpCvjAgG75psTBMPGTXpVfVSidFcKdhvqY3Pt8eBk3PZH9yyaiZLHCp",
  "key22": "2T52kE7TESefiXYgTcS9UQopcac1EwZK3DRbDKKQ8jfX2RhXnFzatTZt4U4jaXZKQmbJ9TLv1zjua6Dg7LXWggRN",
  "key23": "336NqLmMFv9dbpMz9p66fNXHn2XjgLiQ1FDcgMPqc1B1phH7kpE2tdytCYqDvJURC5sMYsqJZ6NSrEzKHPE3ogdj",
  "key24": "5bA3knswMuFW1NU7SuARA5gQDFekNs2xXUx8bpB3ofGzNjPhYXKLAr1WWzcSj1PhcxHF6yQaYUPbRkMBoaCtkjeD",
  "key25": "2cf5s8cV9rBozg5BkPZAx4Edv76KLcDgEWaXfDGufM1YKLPzVk9rbpYuQusJpgbCN1kTdARus5v2mjQtwA3Wgidg"
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
