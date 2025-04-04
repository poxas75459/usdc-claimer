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
    "4T43bX83Ura7Ldb9atmeDHGEGzP5KxjAkZsZKExu1JnZ5gLbNx37WXzW7BsGRXUiK55MP8UzYZRZmTRRfU78Km9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41oo9UFpzfEK1g7Jqdra8fPi87tmkqMv5YZTCeMq3s86ayska3VChnf4TEN75LBc4vkP8HpDaGfvruf1KPrFL94F",
  "key1": "3R7cEsGdtvRsHQp2b7nshEqe5wZ7tNiYzzN3JAY6taWbfF4MAXbVkWBz85KKyAyPrGVs3Ha4osjokN8qAiqVpiAV",
  "key2": "5CSb2ktVDTLdviqy6SnFaDsJ5CqnqXt66z1wq1ZCL4UVCB5h75F5NkaBe5pvfrie7G5VXhNSwKAseRQCLXMT2xSM",
  "key3": "2f21m32cE2pwZVc5363WJDySm2W9nHgHAPnqsbMSnfhj5W7oXVyKW7B8TsRv1bKMQKke2Y2tjmqR9ZebGaZE4aBH",
  "key4": "51GkDtewrZxYa6AGqtKPW99ND91kAMTWKv33KCMqeRG9VELZV6EfzgKiDrrGibTtDRZ7QN5GGMdTYGWSgqVuqChS",
  "key5": "3nSbCJXcPzrG64hvaLrVZpd1wUJiMmWSXghK6JZFUWgFkqBkYCCceJHw7jMTKdqXqxiSH5JtpuFUGD9SGyeMEUNn",
  "key6": "5EPRU1bzQB16ESQ29CTTK2YyPe783sNECqjB5yYLcDDhpWsnejzdJD6RL6G1b64WpLqjFBFeBeNy3x8XkVnWhYdm",
  "key7": "4VPPwwwffrHAQqx5UdnAiza9X6Brp4HFfFjbFmMg5wUSygpPaUVsoNLi7JYSPSV1kQm1yLyWdFcS1F1Co1e5ZS3H",
  "key8": "27tgDJy1nrDyo44NPaqiSZaLE6kJQK9THHgpc9xTo4smrDBKYK5iYZYBvZ1ynmfMFKhtZRKTf2R5XsyqksWpdFDu",
  "key9": "6gDFbnBd8zrQYe7Anp3LuUabsh6aM2xT4UCcAjYzrLacBCCKZrtWcKkL4U4pCLMkozy2TTBta8Fuwcg5LaDG3c6",
  "key10": "592bCWEyEnFWzbHmfcZxyF6QRMHQPwKhABrx2vCdsWvD8K7K3U1GAruEdVyyr45B3erj78GB7usxeZNgdeVRWFdd",
  "key11": "BtbQFZhCrqjSXapTNyvzHxFqNw8jGaXUPeVovGpQprQKWsoP5uoKkBRa3R4QKcwHkw23z7xnLCc1oEeE3w9KGZX",
  "key12": "5MdKLwU5Z3sXa2MnMTCDKXW5iRokcCMaStWhyZEUt7cvhJa1hRXCMyg2g7qiz7oweqm2UrhHi5ZTU1qNapeEoCTP",
  "key13": "3QpbVjVtaeTu5kCCWA2cRid8mZN4TMJL3CDtpbrvLZXxKE4XfiDDCxzWroqUBtnERpoQQJdrygbvqVAdtNqKMLFT",
  "key14": "5CXaBsFmAq5zrELUQFCsnrRMeMPjxZY9Ch3gy4sfk1XKiD9vbgiKdEiMc6bKAF81NPDLUhvS3or8LVeRibCJWLxT",
  "key15": "y3rHCv3KSC7Tt9ncYgojYdxUR39Hbww5vzV8oR96Nw71B9ofgfREUrAfRgNuUQRQ7SGstG7vEZGLGPmSJFF2C3S",
  "key16": "2wKL8vBh7gR2ANqhiYdA4PMp6rfR9j2suYWDLYMR34FSSPGLHZAsPA3wCEYiqMqrHP3nYNWfT6Z8DhjdiB6TSFEp",
  "key17": "5XBBwVTizqj2FwJwxQTAguGCTKjP5wciXK5qt8g5XoUVue8FV4E99Hi7A9JMVRXVoengLDVsGA4CWRstX6MYAYSC",
  "key18": "wqx39M9uax6hW9SwZfKr7PJt9pZsxyDxi5mz2r2QDHM1e4GiRCJpUqsR31n8djWZ6zFe1QCe5Lbn7SjpfK8xqnA",
  "key19": "5VaxBYy6VuHWttfAcnBJETj1iTHb1WgMojefascVJCwsStjt5fxBM5fcqfFfQq2CR998p3DD6aXkPSJax9n38p1i",
  "key20": "2Zq3aW3GkgRMuA8m5MGTec8pgStgpxdj2MxX7fXw7kq43Djwz8Ab91jBPYCEHBPQbGubbGc5VqcjC1t7ARQmxCg4",
  "key21": "63soi48wx2nXvkrW7oGHQVowct44ga2MmcVfNKZcaJ4aydD1jiN8tcAXbGrLbgKsL2s9qzJpWK8rJpveK99X9s72",
  "key22": "23oCAWBqNEoqSZT2uxcrCzJUPFHVULD1jSS2tqXfpV1SUkycGwnpD7ao9vu7LKmCQK74rG3c4dz2r2jycgcCa1y6",
  "key23": "4feSK7fJgQ7NXGzoKbhEbFB2Ps5iAM1mt7d7fzZo5yWB9DfmG8ZwY2bEWVmWdgCCS3PZSvciwEy5zEZXaodmEJtm",
  "key24": "3nMHEm9EBgYBvoZYdV2U6jx3nYTire7SxZ8E4tfwxbPciG3Y4GLHcWobW7L3FmAYQ8rjMotCPUprdfaa8e8b11m",
  "key25": "DY4yssZ1BDePMhEYr5eyfNmW3aTioiiS13YaBDsxH9gwZjmQRqcSSjemQgmqR4Fy1pyokFy7tpTovbMEpV2ohYM",
  "key26": "5qhJJVSgSgRc1iFsCcikKMdvSPHZ5yAyAbU475N94Evewsas8qSBJDBxXuU1Kvk97mRCbQTfHZHL2nJh7978pv7W",
  "key27": "5fnokX35ubBbgWAaihUk1MKJgcA5SQKfPNHGxqhwEvkJHeym7X1N3UFVvcVJg1uWSW95soRAwvsCQ2VXYRfKRnXp",
  "key28": "3R3vPhBTK4GPdxRtogZRXvTJ6BxUaEs5x4FXZSqHyETXKd1AVTr61YfxZbEASriXrtzebeSZfgdN7cTfTGRdtyw2"
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
