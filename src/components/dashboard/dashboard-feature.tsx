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
    "35aoJ1jvea6X8dDktDEyv8GaA9Qgs8CwwfMGj6UyZ2EcYp3TqdC3dCi4k4YjrbzNZrjgfLhz1FqZmJG8nPWCw2yr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PSJv3kYs7CdnQY5s3dhWJd3k794YvkJnWawQAe6LthvcBgEcXDeX3HUE5xn9qPiaYL8KK4iahhEoccvnvbUxz8L",
  "key1": "XnNFPqQPXqoGQBwCo3S9Cp9PCvHuWPGwrGAPd2ovzRPUXLaBcwbcHgnfSwqHzFHCX32DygK74Sa7xxTg2A7fUV9",
  "key2": "3mjHjGcRduFQDJcpWHMR9SL1QiUzn52J9DshQhFHCLsnx9niWUZGin7rKnTZw1uC3RBotkhRYbeF8NKpHsqpwATE",
  "key3": "V2xxPqcsvCQXRZQhDFiFeRokE1vQbJXXZFQcFRashHPMb5jHSQHiPHsLAeg4Yp5swZ4knLsFLSKMpD34EtSim8h",
  "key4": "24MH9MXo71GGSqpCTistWyS9SKxjxu2HEs1Zjkzhq9ndPkEkHtnQcmA8BKM79ievFL4zh6FP6X784ZPvCVxfDRDj",
  "key5": "5Wod16as4LynRTCHVAnqx6zMyqAsiJnTBicuZEPaiLLo2ouTF2Nf7aMpVvswuppdnUNQ65KLzNMFfppENFAi4cxH",
  "key6": "3TvYWvB5SuMQu9Y6f7uVSMdfmYi7fUHhfXkNfbAHwse5wU7Q7VwdabLL7XDEkLVqorEEJ99UxqcGSjrgENhMkBdG",
  "key7": "PFU6sLcQ1NDjv8Uu2L4ooFmRkHxBLJjt6zCZefmByfckNFrjkmid8CUVR6LgZg437pYV9CVvbpsqdnW56dqFT2k",
  "key8": "4Bbmxub1PtwYkSf5avSxxDFMxxn7aeeDManGrRVhEJidkLZkkxak8ry12oY9T4D1twx4oJVigPJx3iSrs3qyMBsP",
  "key9": "22oGoXiN1vjYeH99jaFsMGmxj8BvLzhHkXxZ82waPTWwVQNbnT7DsF6KcNWbB44SjEqx47HTy9ZWSwtGHt1ag9hp",
  "key10": "4PQYEK74bdpi8CxU6RSBrfMSqENQUzqWTL3zAjxiS8ov4Y5Z6c87wpLmGhtjuy3CZ7RX9ZCcNG96Gj5McGzY5J7H",
  "key11": "2v9TwSLoLpRVX821xNXJofFNDAPi9vc7VGfuVDtZiBu3urZKhpuisqPXeLTPukW3FRZPPEEe11DtU1gQJDQ43MvL",
  "key12": "4DNi3LUJ9kaWmuFYKaY1MmDxcWbwHvTfHeFrfzErrMPbPwSbRSZgeqLbvbdarP74UruqWEGvutpFZZfzCvWJPWyc",
  "key13": "2xXa1MT4PHvMhPQCEKVWTo7bNLD5nPe6zCag3neRSnhBhLEFHRXNrsZRzJ32RvEjvg5e87MWCH9RMjjsEJuX64so",
  "key14": "5BFuxARFUrdiawHndHWRr7zzy85eGRY27DDQczRtXJzVwGQdz6mr8i5E3ZhAMus4XEEywupikW76UiUH1JD9G8JY",
  "key15": "4pFdoLeJ1VsEkSmVYSo861rBwoF6G4wjMagBeYMy4rtcoYbVEhyrrYHjEZi899WWV1D3MzQ6C6TdVrjUkaFJkjRz",
  "key16": "2e6r2huMKnuzfc8FG3Ue2fVZdhRFLQ5ogy6GxzFTewnRvEM9kC5p39sHDanUYCGtwfFcVi7HxhKRo6tPxQdKxB5F",
  "key17": "3J52Sn4oohPzKU4MZbYoLwQhUnWBn3jviT6TPXhkmv25zVRuwCQwSFCLUj4fQCHjWxaUeVw7iyexUzNj9VnVKVKy",
  "key18": "R4m3PcyLcgCVHLJhbX34BZnB17sASBZQzLGW1EnkY3fqwagogkfcpnYD3ZFxvc5KXWqqnQhDD1C7jgLadrhzNE6",
  "key19": "3iGp2wukr1U8EnXms9i8sJHibYmBjarBjd3nSRXz3qqBFVaVFUQR8mfRWwJcc2USz6TKkDTLrTSGisRw3W7fgz7S",
  "key20": "2KAjTtnxw28w7b6vvuCUHfr1EAM8F36BtiB6MKcBPb76KZ8uHTk3kgTK2fZoPptnLx6tBp76uXVaLusWkXsroEwE",
  "key21": "3Pp1aFesKR7zUSvTRKouxKyitwFMJgckWvjUq1yrXCxhHJvYhVEZKBd2sngDtALfwvDM4a3ZL6CVtwYe9NU6gW9p",
  "key22": "519PhzQHKCZwaCuytNa2mUUVJ2xBDpWLjGckp77Naj17YeDQbmqX5ueUw9GELXf545c2euYHJREi1QaVqobKVVU",
  "key23": "4HExNPEccM1cbmoh5vShbo7osPoSSkscELeu734aHhUBDBR228nG7Ao1dSk7E3qTYkBUUGuTdTeVVRqfNX93AMpy",
  "key24": "3XMZ1qjsYqLE7CMz2ubTTtJxAU9VDWFY7GyCDhKfqRE9yq4yeqEWZ8scBtzxK7FDmhefDv1HeTwR4LNeWuby3QgV",
  "key25": "5aDoPxUrDVNTMsSQMMJfkDsGHZiL5qEa4LAcVXGn5ai8FRC2SgzYpbEy4Ax5EV21paWyAhdySQCXgWkSG7F144nS",
  "key26": "2WWAyz8rkajzoAUSvJufaE6WsRDGWXmeXnxVefYSoynv2xPTF3UxTydahB2Aubnfgw1bxHr3xmBbUMfCXkApSeyt"
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
