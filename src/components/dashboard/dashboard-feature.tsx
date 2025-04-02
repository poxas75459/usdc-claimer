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
    "2U6gwrzunVoCQuU97XE5FvAA4eDvcQxboPr7CZ1nah2wADeCqnRkyZuzd6rgS4RBhAUJ9f1Sd8NHcMToAEbwmVoo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rrk5uR2RhShvDWUCrG3gpBCshDMfRxc37rYUx19wPqBrW3HQobzLYfKVtJ9TCsjSknR2UeV9oZrBCCjbSihfoBu",
  "key1": "2BmX1H6xDHtMoAiXu9JMQDYGUXGskkasnqiRYJFCETKK6aBgYtZ8LqQYmbs2Q2GKZHHiP6Nv7DyN1WyM3nTqxE7Y",
  "key2": "3Kag9y3fNpgYyyXxP4TQb7DBCjqFTHjdkRL98L942jG6qhJNWrKRbYVXdK7GzHnLM9ukTXFWooKAPQCryH8jPvxJ",
  "key3": "2aTKE3Xe4iq5ETEthiRXneGYZY8Ds7xB46jVfHcEtUiZShvAcBFQrp73xvUJRsDdMaf1uSwHWm8M6cuKtDJbRuyM",
  "key4": "3kmN2KkS6Z4LfzK8xVgCK6KB9nm4s1TgcexCfgGMndy7qcD9oFV6MkDBiVrb3KhTMgfByocCm2pxAChNWa9CLigp",
  "key5": "rFmCMX5jcQUux5kUKWincjsiWb8JTNwkKyrUj2iGuacemoELcrDPwGPx3YnyExyzjU9WL94UZ3wqhKNXQjKPzx5",
  "key6": "2BVAoEAA2iMuepinfQ5v31Te1B4i8YYuk26yWDXMhs4t5j8EMWFLCoNFYEcuVMhJnV5iqJEaUysKyTNbMQJrdmkV",
  "key7": "2AkMSrYakZibK2oGXaPwPMkrK5qhtLFJZCyaR3U9NUJRpJgvm7jp5VcPEhAen2oAjrQTnGUM2xhbqjydREJTy1TQ",
  "key8": "5wqtHmbKRePBQMqrSPU8H5YBWY8YKN3t1JfuHTsU2JzJwhp7jR8fzBZAQptboP2jcac8sFJ414VoBGR8ehrXGT1i",
  "key9": "4dQ4wNDtELdSFCCKRJXQmowiH5wMbZXDNyimz4naVMmr6ktpkG9175hJ9F6ViMHcoccqv1VLEbthLMUpLZRaVrtJ",
  "key10": "3pDDHjz7cvQAFKDAMm5BJGLCTLsS1sxL9gUa3y1LivTsVDykqESRJeWrqSTL1QBVZvs34fYT5L1VwYNuxrztAAzm",
  "key11": "48RaepoLHvCweKvFWmAxLHBYonpThQ63Pyr9NJ48onUqTQqvpaBXnKwsG9q4cJrhNg6XtYdDqVi67en32FByx2NS",
  "key12": "5LgP5nPMeLESXbb2WxsatJCr5irpxHwp7o5Qx2bUSQPodQpSXxrY2zPCsrB6yJ3MC7CJZefD47x8vyJVTuQyjfQp",
  "key13": "2MSLHoKKQ1NdgjqsauMXvDuwuiwAqKWZ5erjEf5nUFfMEX4xXqHwccy1bAyHYPE4xCcGecx8c9QvniAvvkLT1yEu",
  "key14": "2T8stfY5vhafDpTd5YyUndgLgVStjyZhD45XBmuLqrfHnymeXbXo4kLNS3TLyyCW8fEcViynixGNCxS7XE2BKmd4",
  "key15": "4c9ofPcgL4bkjKLEpTi59g3kuixAKiKbhdScpHZ8sHkh9bvqD3BP2kXo467x1NrF34CZLYNnQancb958gD9hVepd",
  "key16": "2pT5un3HGaqfZatPNmCYe1d2c44Fk8kYkZ7YgJrr8YaWp1zT1GZQESYgzU8xeKxpVPFkWKfTLF8tZmzeSYc2GPkz",
  "key17": "2qeCJovDMFYNWhYjxmoqrmmg9V1Ws4rcz2MLC2gpYawJMT8GBi5Uq5snzWSma9QqJ2UYXo3Pqdc4zfv6c9hST1ku",
  "key18": "4Hw2w7tooic6Qa89rjnbV9V4pQ3KZ9zcMEJ3773v69QtC7kMrt3tLboK54ZnfdG5mxQyAqRuRgnecAULewxh7Nxz",
  "key19": "UHZocqdD7eg3TPyrS6ojuMw5skayikWww1eWNmnGv2DX7VEtz6iRUiEeXG4btppNq3nCMyTdTwXomfwsLFU8Fx9",
  "key20": "3kut2oYLnYHp8BRqDWLEZCKtgMzHLpDfdcs8TRJeF3yYuaWSSTwd9ksMLaHJ5bf4xybM7Ts7oePgNFaE53o5Qye3",
  "key21": "3fAnvPeZRJeLbcFsyMWSEcGwAc9sUPvEigYMKb9JN7UAuPTLHJz2Gy262sdXzbU7dsZXsUEyxA9J5nqBXRJmPhDp",
  "key22": "4mi3qdc2chraSjSJu31MHTCa5nDn7XfTpDeA1Mvp9R6dp7P8GF8qJHbEuvqDS94K9A9yYP1Dpj6BfhrQwVCrRtP7",
  "key23": "5zS4y62MxzoPkyEu7rkrhyqJ8JwuNUq9Bf15yGRbcuoX1TR8A4NRfUvteGNfgnHjFR1y1UPA2iaEybcA6vThCuha",
  "key24": "2v1TwAcAvx2uneYm8Q5UdDMsy6sqWPEvUN3ueWK7UXBL3p7u8HXEZh6agPF4UiGgibeYaiy7W8y8QgSn2MzcGyzz",
  "key25": "4Nh4kTZnf5ETG1m8vHShF3feBQRe2Cn4yDdQ1RHfoupYuuiEVoLBmVaFh1bwmjg6fUjwmBSS9KrwM1GBkuAGzyyx",
  "key26": "35qR9QQTGrVr5PikLPmnRyc4ge5bS3J7qwtJYp8yCpkP2YUVTrhYNcxPsrsXmPfuX5akjKbhPBZBCeM7xHY879df",
  "key27": "5csogYmu9qEX5Fwd9D7wncXSWfFuiEj3rqLm3vm5mx9yPZoTbMHvMX9Jf6wUWp1PN7Uay6r9WJKFgd3qwcCTceVe",
  "key28": "32H1xwdHwLUXjEc5BkpjFHYAcvXhPKixFKEpQLwH7oKwxK7x2JXwtzSSE5JmFrSoTNRsnQZf8X7b8E9Csi8SfNpU",
  "key29": "4kEx7VHbacoyZ7W32b2Drj6rqxe3VniwmRX73RhuAVihmjBeY9MQxx8NgAchwuHYjtmXU5Mwcn7c7kovapgN2pQg",
  "key30": "5XHiyGTUipE2hAmdPt8FvKvmE6zQMx7i2RfmB2mvBysRL4ZGhmHe46f9syxQHRX5CooAobixJrFgpTXT39e5YJMu",
  "key31": "5iG1hAs5E5iNcsoSx3uXohbUZBh1Tp2aUV7N7F59vzi5r1gpnGqTu3cbAbKpuchFxrXReZ1rbJ55kUMZbASAcrLD",
  "key32": "iuRNZYDm9vztJU1dkmJ9YcgiHQZuJUHkUtt2cpmvHSot1fRuz7XF7Mf9DBM9NKUu9ejUV8ph9tx9pQGKx53FUFa"
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
