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
    "5VW9VFGtteSNFfNADFnYmFyHbdBWrRqMSqp6YCZGE4ogL6xKUjKvCKwVwNXKkxeHsjXd5TXhM8Cid5ipdKPbUsU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hw5Takpw9aHDXA22SdUr4P34xdUGexkofJ7LorL5PRFKtompJhSasNcqdeEMLkF6Sb33F2iCoj4UcKaPJQGPADc",
  "key1": "5vUQJAkg53od69upxSjmhsSwEvtxvNPxczW1jeBZ4t7KS2kWoHUHjctDVF5Pe23dc4H6WGF2EBd5utrVPpvNq7Si",
  "key2": "2zCVcAudg939svBWwejaU55TMF6gLyrjAugJEhSfRsJRGBWbbScqfDurLCSDbwAr24tQDt71iiT4Rg9XLZNpZnF4",
  "key3": "2abc3YBw77xVsUYPBFKSqusMKQwTWtq9xs32GGoM4n1M44NgnjSzJJkQgQJP8ofZKqzyo3MK8EShBWDmJ1oMKv6N",
  "key4": "5AVbNcpV6s3piWmhtkKqnSDP1WRJPVpYTK1JyFDrnczmAVMjfRJdt1P8n9Vw8XrnBdqBvcExW57Q4G42BiFxJUgG",
  "key5": "A8VFC6v2kdC4w36V76kzev6gBQhDnY2GvvN53cQQWoPjPmvtv4MvRfiV1crRMZarGpu5wvW4o138mRR6Z8RfGQP",
  "key6": "2PUeubeDnioUDhV7KsCWmC4Gtp6PgfrmkJZwcCqr6Hw9pQPxBzkTKCedr9inDG3VXEAyx9WAN8pMQ5pwp46Dm4v4",
  "key7": "zNVLPr7edCpk2LaDbRAsDiLk22ivUBF7V7enCEoRa9NBHbmYSTvp15xYCkpP3J3ZDXw6ewW7ThtLiNDb5xrCVSk",
  "key8": "9Cqt8YSGjrDHSox98gtYxR6nx1cQewZhSf8JXNqXqWhRxc3rHj8BQRhVQr1GMJ7s5cHcKZRh3cBzudWryyyeLx8",
  "key9": "4Vy65ry5B9u3FaURckthFb87nDNpXbKdom2PVZ2qPu3Bi96nEnwz441hYkbaZoTa2H7f7frgQyHEAs2Khe9EA6zx",
  "key10": "FbfrcAce2DukXviAjcQVaptojo13CXURSg4C6vg2QJv5kLyptpVuSbnmTNSPap1eTuNeJjP4ZY84S4zCGVpcW12",
  "key11": "22F7KQ5Gv8YAQUhjjbS4u1yjr19xadGJuysPeGNncco26zn2MF2uQ7tEqfMe69rznqg6j5vPy9Y6P7K86KBjVx16",
  "key12": "5L5L43o4x5cXRDxMAtrrUUCwjCYJ192ui9voE8bhFYW541rXhpgupREAL1jfz8nEKmRVZwHG9u7dkks4ajcemJM9",
  "key13": "2BRpx9KE7zoaYSq1FZ4zpezoAz8dq4wS57zDkHsEoMMR6TgT2qoQ5ztdGL612jVk8fP38owDde2dstiF9LqhKKQn",
  "key14": "3Hr5B8xbd6XemxVDxfnfMwwfk7zjP4HoAgLUP3HD8dDL9ECfaw3L9WvAfwLPRUmLgjCQvV9BEbitbBdsBFf1SwTA",
  "key15": "zrj9PRHVsfENYrdBLdtXX6ENPTCdCxDhiPwJedJNjeUguwWad45srUj7CbuZfNiAb1A7fxLq9UfuMq3XEWJ27tR",
  "key16": "65BuDnMUuqNYpfnswd9uAWva5cTfNMtNMWr1N6wwPKPTmaq2iAe65xoQHJrRqUcjoStkJ7YUb2maYN8AgseM4Hvf",
  "key17": "2MEZMLTG5oKuQXiC6mtTsJWetDKiJPPfbJJhKGawusT8nRcAKU5JX8ay9tB5EUgTRaEMpM5v1CkKHXcf21ESsSA6",
  "key18": "4YfPU6V5MjjoQvwZhSUMcBdBXMuW1ySaWVeTQjD14Re3JiQHCwweR8vGpsPwnwHDCx4XHnLXwpyQ47s27Saiks9y",
  "key19": "3pSRyUBcvnBHuBwzqybgxn8dSaruVhS1qtWF62WCvaSKeT3WhVHsG3jRHmt6Zw5FkczHfPNC2FpDD3EzMVnPFD96",
  "key20": "54uNoy1sn5GXo41RPT2bgwkNgEwqrzCNyB7T5EA9mGvTFG4MC2FfQYRvd4fdBoT4VJyv9ptucEMDss4Y3LRXDzo",
  "key21": "5PjQjbMCvUUWkCemMCoLNvyeTon9LgGMUPtdKras1HRTHskeaH6XUgKt4c419YsSS3VakA1oeK5GfZZxYW4fPrqk",
  "key22": "NFpkaideavZ2xJBZunkRqmLFKSuVFkd9mfFLq1d7VHTSzRrLQDkbvCk6VR647BSFw3M9jxFJXSBibVeXk8FFhNm",
  "key23": "3mA1vfwERzECawawA4dyAuQY2UTqMKkhjM45RWnxZBnmxEaB5xbr9wJVj3cKgKe9y46t3wdwAFRowcCiUHfBEy1U",
  "key24": "K7BMNmmkUJkVAgK265Ffa9bMpoWf1RoyumySXFrhY5tn9CWMruFaapu5WipmxEBG9uFdWFBM5b85pyvzD9h7eo8"
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
