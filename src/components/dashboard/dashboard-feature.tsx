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
    "48wZZi2NBsxebdoncbvmNNvbCs5BoJaQGAts2cQyqDSBWYbz15QGbsZ75zjKNdTxkckRt2AP4zQNPGczX7ZR7Bhd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41wVuAZmbViK87jXss4goe84wsHmurvKTbKjpBUuPZ1e3NfgatZB4fUi7dBrJnWZAT7UhZGtwKZm27eavgpeb9fd",
  "key1": "2yXUwym6gU1QABNRSquaBsft1yT9YL1k3hevubYUr8HMZDo8h1grL4dR1q3WvGr32i7c1byHFUKTcBmR15j6bFvi",
  "key2": "31CSvMcEjRzdzjEfnHWkob7g886fvbrivGH84dQQA63BoQELp4VnAowUWVXWBmrTityNvRRnWXwZZs1TVoqA7H4s",
  "key3": "tGS3tXVsaBuCQWea43DskaSuyCZ4aiVB6WkAmuxkpa6ydZLqBPSECfZ9ei2ryYD2t3gMY1NjHiDc557CJPQkhDF",
  "key4": "KEjwVeZK3dnuojBG5RMFtccGzZjQdnPr1x1euzTGijmoUGC4UCdBQtwLnetp4g6MFZQiHwjch5LcjxFyQWcsVqy",
  "key5": "6vAX5FiBGRddkUurzBG2UtxsPG5ryqWzmVX8fPUQmV15jeyNCMK2bQE57yjYSbuBvbBJt1sng4UPxGGfpBB3b44",
  "key6": "h2HmJeCJvm7MUXdX5m9hZiTNEyPH4tE8mAxPjX1164nNFYV9XuiZD2s6qtgqJv8R6m7kBToHTP5GrVYzMmu4N35",
  "key7": "64b8Vbmp1UfKGTLttZ4cPZxSPmQrejqR9joA7pz4XksqZQQDztxvavL9oTCnRuPXqrEGiofdVfEr742MZNAFSpuD",
  "key8": "2FafQcRcW2yH8bQEsczSj7GMbk4tvYE9peRwtVkaYCv6nHs98oPyXMwLwL5hiZiLAwy36QNBYTg5U8hLMvhtV3M5",
  "key9": "3ECfX7rArJ4nhzAcLMaF51bcKxfYX36WLCtN8UUN9ufow6UQz24XdweT2n7tzUrxXAWKTV6EGRNvhuz6PUez85fa",
  "key10": "TbCqcherazfJSEuRrmjqXAsyCfYoKgBh7TB9Bxq2XGUCa1R2srsevgggVZiKhZyfYbByjDTyXPdLSfMys9vkeij",
  "key11": "4ZXHQNKoCnuTmrXdoNUpcs7pZQyLyctktUVAWY4Kpeg8DwnfcQiCoG6BFsidrfEg4ZJU8LqKcs2KjgQoHXpEHqs4",
  "key12": "3L3DWf9LigKVRs6hbUfTk8KfXb8jNrN8Zi9wA9EvT9GJKqa3KNqKdP9BeoFHNYZfBrxLgoewkiJtpEixNoqntMzi",
  "key13": "2cheWQeE5pfADRLVtbBscin9K6LhFBedgsvM6uvNtqWLYBgtSoSi9Dac1DWhf4ExbZtePiCLCdHCXozek6FMzhPX",
  "key14": "hkWXUYdXLcmJapmW8C87JHEprLmLyHAGbTSL6mkXQrKXU9WLpiu2dgKfL1qLVPngTiGEBKzReKZsy5LJJJY1rL9",
  "key15": "5KGozVgpM2MbeyUQZMLuTesXf6xpcC1i86EF7PuDcm9DqKz2Y9KXLAJSBSkU5J8WApHF6nBaFuEb69BLdqhNBg3H",
  "key16": "2doaMLqN63zSQixmAg5MBoSpae371bLoRqR4tkDaAETk8csUzTanqN1VsRgKsJae9fyNhX1kp2z4YE3VX9eff4kB",
  "key17": "LMPVekrFFZxckr97eBRZTVtqnRVVRXzhmmFRKCgFYgo8SPgLitfJcFNNrQgYTB8Vm6spdB3LzUSsr9HFvqjxzce",
  "key18": "4s1nM5SAhadi46ZZTL7cGKTiKjQ6DWjuJqowKLDRku8emQoyV5XL4wssqUrCaa9Y6iFgWzS9b8sC2Dz58b2rpdUo",
  "key19": "5YCh9swQdtC7bmKLRzKLwU8YmjESwiRCJv9p75v29hGvm9ZgcpwPC1WUKeZfo5y9ooZ3wkRb5c3BHR36VorVzrfC",
  "key20": "4gAZvGB6JbYJ9M4dysi4u5GmPSvjtqRfTp15zXL16JGiMtNothMWCzhHUzHr8uaEf66hokBLr98CXYEDzpaS4Rk4",
  "key21": "3o6DpcAdE5RnXHkHHfmsk5FHkEQ6xrcPNvChcCtuEjvxQSj7Hq1QSJx67ErcogZAUid3Dm1tT9MDCdqD2xydzpBv",
  "key22": "3NHw5LrYJAXXUFxvACoQ5sFmdz7p8kttHEjFcBCyvpUwLHkMsr6taySdRdpnxnf25SXynnsqFJwPkCgrgMHYCcrC",
  "key23": "ge8DxuLCEfiWCqnU1bJREGLc7tQtqoGP5X6EDMWMAKPLMJ3pAM8JqdcZ2Z9aSmjTuGfaLqkZW3NXmTgmQW3Xgqs",
  "key24": "2gpi3ns1ghZB8YbrK9xiyyR3Tnh5aNWwTNDjH7bajLvu6kPT8LdB5c3MyYDPZsgkPVSaNp9qHAhbf2JbNuUqKTyU",
  "key25": "3SKFyYSm8Hqg7SbM62hxXi3SZ94zmJwYxjwtBgUPMpyZp8dqgDeYvmch8kNPqin4Asr4Z9PACqz7fhee36fGJYSi",
  "key26": "5aywfNrEepMLKagjU4H7b3UgjL9trkikL8vZrhGzWas4jondbJzW4ZPyUVa9XFFJdcsKG9K2kgvpkQYcm2382vhe",
  "key27": "4KyZs9MNp5avZUEk44gRrmCykzn5JoTRNNH3rg4Qu5W8a1TrxVW4sVcuvUdrUGgUrc3584oQ6qU3Q9u9HDjwDDtf",
  "key28": "2ZVSBn9CxC84Z9HaNTg8dHa49XQsESzH4EN3H8EBf78yWVBPKLoCP4nAVrC8y9CHFGZE5A7UqZKudfesVy7nc67M",
  "key29": "4dkewwSNco4UxKpN4havjMSCj9eXqa6jjSz2q3tr21jKpDqsUcdSy41wd6UJuNoTUmM71WSgkMNB5DDVHDVr8GD2",
  "key30": "4eMxxjFK6m5UFbh4aYF2kxdYLrmkuV4sjmGaX854mJaqDqqmK8jopP9MU6GvFAV3HBa9joVTSxP8f7zNrkWVu9F4",
  "key31": "qm671yfDYLmJuYGcqM1gmHAZp8HW9TaYM2N5WztVfrpZyFsEhJbE5SPStQWFvghPEYPmU5v2KAXHNVyPbzrtgWe",
  "key32": "3kEkbBLAEPDjLKYPLWv6YTDJeJfxKQLCfwqMqF9ozrduCM8U9ro1Nc3NfSB45aJTfZcgV933Jcooj3pEX6P5aybW",
  "key33": "5huWey5TehCoSD3wyqx9DVr6TWZGNPoCFbQHm4re9EpTzGNxx2DdcwAkUnsMU2hFKJvhYXNF6zKKeAPJQC8SN5YT"
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
