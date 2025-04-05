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
    "4cr2wDVh59C647EiE2Ci1w8ELhRMfs9c3dHBtW3Xr42vvwxEBerWaqLRXYEPUfgd9hGNBtSiFiVzA8KFMa59od8H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FaNDoUPzkWFfKqhdmpwAgGFUtZKK9mD59E77QGVj5w7Jk1SaU1pS2VGYxrMCw2Gk3otT2MfwZUVPv1myceJwKD8",
  "key1": "5NZVQaBJtE5RSF96TotNUenrjmYFc7cgvzpsS2nqmjPeNDsgT3ZtorTUwmCXkEVMXDQCQN9ixSFjENr3fbNAm1hn",
  "key2": "w5ybC4KGJRYu3Fc8P9wKejvAWAPUM2rW9GfewM2TbX8SZsRECa1FoUwA4LzAQ5SUkhbKkGNejY8j7eQK1zH9bha",
  "key3": "K7UBnAKuhLeSF77fd5SEBuTYsE3P7XQnoSr7ob56wFgSVryPs82PTqEuP2yCXAoSmVjSvyL8ajuSMaBxeKWBCqv",
  "key4": "2GtZcVTC8jLp8XSmKywQeNit9L4x6ZCyA4JmcXAXj5T6Sv7tF16VbBGGEHXs7Hp71QmC7auQ3mXxfgryovxkWgQZ",
  "key5": "3a7LjVtm9toy2Spd2aXQHSJ1WxzZcYUhS6VBc3EJ3UV3zm4SpGJNCVuYAM4rvvgisrrVqutqemPSoVWw7DgeFuG4",
  "key6": "5h8BiWitQBrXLswiy4rbZBjFMwMadQHSzB18JkcSxsxJSdHmJKdzPFqbjUYMUbuVB5zB6vE11y3h8AvjGGH7x8qi",
  "key7": "61zHLVv5EBkXagJdi8akQKMS7zoU6hPcBPhQkwcU3ujsHykFZcAfGAWn3zCVRVieL6q8Lh9DszPbjw32oiabWpsH",
  "key8": "4Bn8Wr5RtFdeR36tGF4MrkkdRaQjLRf45x1NEn1kVpMzQf691q71WtxHhkzr2VLxUE4DtdJ6boZ9VkCgLxxhgoio",
  "key9": "3j1grYi5EdaD2pLsGZxCKAP6nv1XUdL5MD6unYeKEwPEzAed3Te9oTnM5oMapB34Twf3qBLWY87AGfbLhUEBcRgH",
  "key10": "3mGApPfDa74d2xSL2WZp8BpjCWdiMKKU6HHass6pR4k5DmqWn3u7isPtahArVYYSwM5ELyiGDS11hDujakpVvZRE",
  "key11": "2mVwT3FiM7dywN4tw4ohU1futRkvqnZwi7Yg7CngLC8ofr4343LSZkidgNLPpx4pcqcrLzSsUgUM6qYdCfxT2At8",
  "key12": "4tXPwadP5grNP1YJYAmLC2PWKmCXyjSohRvP2iQX4VYSXyuqNAgJhRqUTYjRxRsjHZvTooGLSExc2XCUBrZ1NnYY",
  "key13": "5Yt6t8i5appNTgECbVTY7BDd44TtEqPkBgsNdZA3GoT1gGjifxpTni7Pqy4qgtmFrRQ8RRfbxxtoxGdRCxWVBxdF",
  "key14": "4D6RXhZgceuewhkbkJ6uu3r6D9iN7AX18zSXd6uwnZNerp9JrLrKVGFPg6JsuBgks5NFZ4jvvviFGywngJvZ2dJi",
  "key15": "3xQfs4CF49EMGjNwcbK74152SkrF72ENXdSi9PXnqBdpGet79YLS6FtrubbFjm4gCFtEQnzovpiqDzy4eerAUdpr",
  "key16": "4jFL8A2vkA5NVNcpyCixA4Uop99EudUEuEFWERaRTLvH4RPjKADoa7wyy9YPUKGuUx5a5GG3exuXzw8KSzeKxXvP",
  "key17": "3uPfiRKXtinKChLGQLQFQ6PB1Yhi6MtUgcRWknscZeetVYhagU4hW6xg3RFEWsZ2H9xtJkh4aSdMS6acE47ji2B4",
  "key18": "5bmyxUgxxfRpn6TzcMYicc56cKH3jSZ3ZLT4jzVQhKPooE22Rsyx7e3jctbPnkbymW321Ek8NZbEoGRtGLaBasPc",
  "key19": "u3kKm9k1pqrk3oiCEjit7DCiAN9EQcCRrkaAQuEQ6GmMKDsr2x3ExUGxkPNKjrnUxtv5mpCnaKcrQ6rriRGEuaD",
  "key20": "3pYjEXxnTzF7eYAMD8MGLAhFZHnZ6xzZyi5k9Ap2TESvuhqY73JPmjaw71iYtApcjJL6iwaTGPFSN1to5cd21oq",
  "key21": "5m61gaYnF1oSEFAxU3x4Uz3vPuv29vikmwpWZfUpxE7UsDBkVhvczLpq76w6x5nZ4V2HZAFdRFff1wcEPz9Cpc7Q",
  "key22": "2ruUjvu1hHWAd9B52ASufE6wzht8fbHd2zNhDMqdXu7qFA7mJBnddYCT5Petor6Dr3WujcXMmCjnm7hBGaPfcNJS",
  "key23": "4DiULaiaaJLTuxFnS5d2RJPKTW8bXRAADoXpfwWzd6oxyp7gpv6bwkigMJhLNoXZmDGRLZdMduFDj3xMmQkSfBno",
  "key24": "3iNjNCBWe6yLpgwxmXzBswmRX2HSa6nfqMMj5W6mWW8V1wpAzS66c8zJUtoQFef3Fu6vNATpvGJnnhMggxCSSyqf",
  "key25": "5krmfiVzUqgdmrfp71TLrQRbj2PeU6ni25587eGcE3kgqT55RRTzrWCTevJt6kbtbUHTJGqsjLKGarvVWkCU5Eb4",
  "key26": "2GnkxGGfQK8sQ8qrPHrPiU2oS87KKWsWBxm8qBFegUDtARv1TMGcXvMXsDViVThmrHopnXvh8XfnXvciMP7FZ8J8",
  "key27": "2JAhucmwx8e8CC2skws56YTXWfPMvfYu8sL4s8AVRvFjNKE8ywPesnKq1y9TSi9X73QLqSmsoeQciEbdqSxmmzLx",
  "key28": "4cUHaExjLteFNxjYgV2JYkdKrJDeP4vNwbKTdrLvfHvNiuJSKtnCWHLowKxiJ9X5ngorB9hNwwQrBojguUGScG7e",
  "key29": "1ozeyZbhHfgTi3VMNGE8rZAsRMNvEV5v7XquytAmKRFuq4G2ruettHLsTLdPFmyaC4Ak49zXBP54eWdLNUfcCQ1",
  "key30": "4btrzX1KrQPzaQesiqK7T4G2zZEeLWX4surtkyLBfkRsQUhL1fxJ8ajuYCeKYf4UjSpWpDgdfrFLWSxXjGppfUGk"
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
