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
    "53iHajpoWwxoww3n3Sv9kgtKkMRjKbaUoLSSBTCKQd5Ba67TPrUV5j7SBLGioHvGEvYQbNhXcuiepH9k9vLcX87w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MWjP9Xjk43tcWhuCgE5Z7H8gFnW1FHuvAZHkNFgtBeYRDxK9as5dQGxPDuUwbSysbf871sBV4wL1WSijFiW8BD",
  "key1": "3x5Qmu1AhyhCWk2aAXBsYuu2oaSm5UbE8F7Ccrcw66D7995UTyrAXj7spLSLxxzGxHPttm5oGWMsDrwnsPTUb8aZ",
  "key2": "pwAHvqCawBh39jPQeu8tZXSX6imqXKgV4v98CKZWqJLbq4deYVSarSgq7JovjwMzsiHX34GqjWF8hKrXTWFrUg2",
  "key3": "4CU2xe1sWWnqdNUjAB2CJUage5nRMnonJMyyrAHWfrQvmkBXMd9NyPYb9SiMGGNiJFEbn8suiAudnLHFdfP4Nzi4",
  "key4": "4hfS2fWLBkmzM9twN96vTJjkQtKPM86FqT31myatEZVyhm9PcivzFMPNtYFi7RTgJRBjLwrM3SBzsR98d9nvGXRr",
  "key5": "5umsCzjg7WFia7Y6rWrgtgkeJnfXHZp1g6YnmSpgQ5pWVyjMFez4K8o4JfH5Jo2TJtxSS72qPvsPwfdwRMpgD5dw",
  "key6": "475rK1NBzXAhU2BM3RUNgQNTmDPViqmGtePveUPbUZH2S1h6Z3Nv94FCpwEd3841wDZwcCPYmhLJN1eqVdNzipD5",
  "key7": "2SdKfDqyerYakBrfTSB3XvycVdyiuzMjpySt816e2n8uYwDWgRYyU6mC2FQDCws4fW2xPWBjcd6RbNaFyjjRkCyX",
  "key8": "4iKLTBqWLVxCJQsvtnnoES6xJyZoFYA9BxKWqrhyqNQS2uVxA9AtQ4n6rqMadpSaWG5oAcZRtEAmYEzzDfMDRSCM",
  "key9": "2STke4FXmCtSKGF4XDQMWeTPQhV6ybT2g7pTzhvvCumS7tPCZShzAUPNDRD4CH86M6YDbcgzSrboSJHhzz82hU4m",
  "key10": "qPDoRhzT46zRVZgADqHVeFdx2HLRMRDcEah8xjJcCuHkpUACh4Yp1BiY6FuhyEzrez4QiGbJxv8Q1z1kTpsLZNr",
  "key11": "3JkK93ydfQgVZUuQFUe9NzZfqww2R4rkGNXjm9W3QwUsQ3hrrrji2WmPxNvfWagoXbNLrfvosNFSDX2XVDo7cv5M",
  "key12": "4z5kJ9bXyQa2TWHzymQwenyywj2Q56Bky5AAmFmjZg2TSRFF2URnMFmcnSvRMY9MAjB3KhdRtNGsRn9bHrtikVqW",
  "key13": "syzW85uwGvPhFEL1morqAgbobCp2nyzJDr47XbGEcZ8KL1yPLH3GZbttS2mRTTzbixQ6uXxxR23ZePhoHLx7Y5f",
  "key14": "5zArzatuaLevPx3dpCmjEZ2V4ewuyAJXP1YVyBBzxjs3KQgC64sQfk4wQ4sPZZMkNp6cW5JHVNdJE393irAKYGwd",
  "key15": "5UAdaUQAKEC3H91rwCQsNinbyPzthHGwz6znBfwXCtCmrXbipJJMHZ9X89Jp4gepcdJi7LQ4PAdQDcRnvJ9K8ozs",
  "key16": "38PtViP2EQCHFB3nhSaUWYB9SPKFANWX2Z4VEdBNXFdB8xZ9XEbqcBMnhetXi5EotqHHh3ew7cukmtzqaU9zt2BU",
  "key17": "5D3jjStzHmxcPRoBopQfgeJBbxhsgMuTV3FioBiQGWhQ7uvZATujgjdT9wxE8v8q4QEqQbhEjz6xzLPKhoQ6ByE4",
  "key18": "gKQFPn3f2ijmkW6gdGx3xeAPjJt8tFBv2Xbw6S5AGkzXbfvPzo49Hzz9CTPQqgy645Fw23PJTqW4pyw4Gcj9hWP",
  "key19": "oHxADwUtUfrRGr4jwbvE7tTpashpETCwuX2zM3gm9NrouAWSLVhQzWoTALSNaij1rU62QhCPcfkFxpdcb4nzXHc",
  "key20": "5em3mS73siJJtXwC5kXq9G7E9J13o92gpyJuHHsMFVWfJ5QiXSHFMD8axEBSC7pq5P8uCc8i9dcSUyPTNUHPVcE",
  "key21": "2ZQbP7gLTfLg1W4my2ghQVpMfHA7BWsHoTPs2AD69Burn2GLKatfP77BjpBpPZAQwNviMfQ2wXA9H4SkNHke7rdF",
  "key22": "3H2sNh4EYbbnsxZQ5595SmwAbKc3Pxah1qx1uyhtUXEpkqKZqXz7Ta2VYgEaiQTB5RNLfqAAcYhHEecp9UdN96BP",
  "key23": "4NeJMm2V1B7NHbkwoNK6CRr1Wgp5WrakDzRsuo6Fdmunj4JnVFvQGSAa7HBHTRXaGLMpZs1PXWTMsiexAToYC8Wh",
  "key24": "3jGZV6jCPancvBJ9tu6uoarCXLDbuXN39Lcj2Y7ihZa5vv5HncL4UGGALphj1cM4bSdh23vdgBHGwXxCBLgusYUs",
  "key25": "2DHqH1DKNqoBKm3bU51xcfh2fD2r2opwuju8zqfAHYqxzEJgA4GHh2df3cPXetXrfLXHdy928ijvGSy7L7PPqqZM",
  "key26": "4QreS1ZXGsmBZfJHztmqF1kzvcR91zu5dodUeNVHPajryAygW9Wuxvy5ZGgBKJCyiGF1cnNEKyuPAeD9mfdJ26bY",
  "key27": "agCrk2FLCV9txz2d8PKjPiBPgUe41fs5oCVw29GN4JbbwNhpjA4tZs2w6JgKGdoHNnqVg2YG8TtbkJWhppcim2K"
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
