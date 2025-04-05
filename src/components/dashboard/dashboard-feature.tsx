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
    "28RHShhiBN6kFa62fVyXycMofR6c4BBWRqJokDAcECYT6AZVEmuYtsfUXPN6Zx2DMdix1hHWrEBwTMEX89qdqyTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5khGskgDNAWNVzVkaa5XKYc85ur8PMwGar9491XsC6SBCpcejbGWBYAqAhWPvgXko4gMYNAnNdn4r9iUyGawo6jY",
  "key1": "3aBVkHogrXm4wfQZj31D9UHYYq41F21LLU5vCe1H2qE61Hyei98m4H9phrTeG68UXSgdxETpZGuNg34htsgQtfwi",
  "key2": "5z4pdtaspbxi38jU7BP3cnLaaqWMdZoBre8ptbGr2jEmUKZqEyDQjFKXem6AEph4M6sRoFZvPACoE1Mv72yPZgBx",
  "key3": "2Ux6Vsr81icEurLZkHXWAtPQQV2MgjwQm745EVvYFwbHZxt6AZRqSHcW1r2V4E8coo1RJaFiWpkPz6yubqvg6rPs",
  "key4": "314KL7fcsmsbhbz24QxNUB8bZLrRj9ZfXXC7aBFTP5RGDvoasjtHGsramDHgrtRoZ69VZPaxCQGhthjKqhuGo1u2",
  "key5": "3ugpsKn6NJSDGL23uHWnrcoXyMuwJqUfo5vqXhwmzZDagPtHkWnUDUcRdvK3Z8U2QPhZMJYLZRKbFrZWNGh1YtXS",
  "key6": "42ZQCZJtn4Fma8jkVP454hKoGXojaEA2V7ix2Eb8KJgabYMjyYwfGtyU68rYi4tP4K2MXxPsQmr25sa96FMwbWWf",
  "key7": "3aHi2R3cSvpXrTmG99SWXm5zah475t3NB4PV3gnH1EESmHimAo6m8S8pvz65N4NoHekmekeHBQaaS1fpNsKgvPg1",
  "key8": "4MdMBgzYNxWsEyvqacZZRgo2S9akXVuELQ2sdXAKmqeqrZSV3YWMHJxGK8J9SJEVQCJATPmCvkyS2R3wnpQ7M5Wo",
  "key9": "3fhUNhgegzo6okTcmMqrfVf4q1sqFtrQNkqndjgQdP5B5cuKwoN5WKvpMVZV2UBfQGYCXV15E23jHUZnGYMnEiS",
  "key10": "zqomBiryqWjFotjJhdgXTkgRHzfjtgXhkxYx1MEhPd6pem8vLfSSwQnHsW9uuz4DuC2Mtcgpmddtx9LJm86XATA",
  "key11": "2SucQcy5ytdz3PdbaN7Z829BJLqKNA8icBTBbo73EiFen3s8CzYwLo3t88qPt65Cqi6AVdKYs6vx6RbY4WRtHxYe",
  "key12": "3j5Xym4M8a5oainNRYyRXE4KYAN6fBozr2Q4aLZRSD26T9rnPFQjNgBTsD7q5urYD1wQ6YihiCwc6SdGW2Dqs87G",
  "key13": "2YXCLjXzMH2KaCF9s1qgfBBpLdZtYXNYs5rmXAC5KSjDhV29Fnnm9PUHy7H7JVEGQEwKoZQHdWjWvX5fYk8m3KZw",
  "key14": "5cZNzPvDUWixWU3KDKX6PP4jppuLvBJxgTCuoVo8F2PpB2fsiVAYabN9oe41YJiZAqWVjvTuWY91B8PgiSuiBnUz",
  "key15": "6MifqzVXJ5VRUWCEDrBrfEM8MVzsgGSm9huyd3xRWMfdQ5VUjqZv99GqegSfWUzKwnwZSTW5hzUoMDtmEL8Phgd",
  "key16": "VaZ5UooeCqzog7a4GZxP9wxTjJKErGp52prM5WpHT15NTrGgtFg1dW7uJUxhEm5onxPQUtMhRaXVYsuwhV8ChjT",
  "key17": "5G2WMZtQv4JkLomgJTjm9kQSBy6RYULwVJsV7RAeLBA2P396yo2LeUYqARHe6nDBHEZPWiEuMnWX2nXVhw2Yf8kk",
  "key18": "3HxptvCBYu3QfWDfFmSrDQJNiG635i8nHHfd6qSYhpQW9FMg7tXBgJnEMRnhCd1rL8MJiWVBL8kivpkPxMFeCXJ4",
  "key19": "4EVypq5U2VH79wH5wfTexMod42YKvMufunLj36GohGBXwdaPuTPKHUa9qYJRGMnYXTSZVkt81gFxbqJ5zFvDdAJW",
  "key20": "53aNavQck7ktr4vXHyCceWnTjJjgfdgy8e3HswdWbt3wtkFwtTjjasSMcHVcwfJM43YLTNDQQScQYTErJYk3StT5",
  "key21": "45Z34dJm2sS68SM3r31zjt3Uz1uE7fQxySUtgodhknBLtMCQsYS8oFvFYUGQukEsERPV9z71TTUmA7q7yeATVwvi",
  "key22": "4oyxDKh19J2kJzY1oWK31QjBHHpAkDbnVr6bj1NUcZmA1Y8bX6EcPSyJCUXxYyy1cCcNtWhCszxwAKbEdQguvb57",
  "key23": "zFKMLmNyvk3PJui6i5dbRgUaEXLeHXpEhib4zahvjULyGMQwACwL8rWZ64soao7ccL79xQVCYFtwSiGCj72ioH1",
  "key24": "zcK7pSs6Vvm9mZUhtTHyKQFSS7SReSyZfDGpxgvyrzdX6Rkt2daoKmNSNstRXUfiLKS2YzLzZrSHFLde8RbBwtc",
  "key25": "66EtqCew21WABvpgTtVjq3mGRaqqohmJo2kxBnuL9yNGyMWTFTqfnZhgED2xP5w6rBH22nPKrBytxtWj1Cv8uFQV",
  "key26": "2f6mHMB7fJAWXPSDG3XbzmtqhJ4XAwuwZKpWPcNyAmVj3jDGUTMH5dJ7azbMTnyKz9xVwV1PDhJ9AmEhXHhk1yMJ",
  "key27": "3sYWF5CBZTdhtoNAzirfyyHyUBqGnMcFmCoc5rNzc5FLW75QeytQv9qvp89oFCZSVmLNDZowCUhQjbf5GTRWLbyN",
  "key28": "wmEsH5ioPRKsnDzKf1aHMqd8RQg72WPNofAgwPUPhbPKA8cQ6RZwjLzuK94c9vN5PDZ8EsHVVc4bVzAwLA2wcr1",
  "key29": "4QmymaBbNs9SBt4fezFgGSKNBfSgk3X1yJWpFWoqXbSYWYCbFRVBvuZ31CUDgfweM8H8stsbBHbhNDUxFEQkhaY3",
  "key30": "feJBJBe1ihawg4FXXShprPpVqXHTqz4FEfsxBQ7BDoojsfty9rchvjRpFPDLPNubU5UURy8NZwYWQmxJB6QQ9vV",
  "key31": "3z7dbLpJD9qkgsHcTbouuUjK1CSxybE3gene13RsYjBnVBCKZcDnxTa33n5fufGgAmTisFNTSu6U6GYKZ2ALTUC3"
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
