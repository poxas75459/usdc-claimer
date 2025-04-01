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
    "2gyaTdxePrhBkQ921Yknpgs3UcrG4kvdHsocRPCT5vEg3eo7Hxsa9hXQ6VDevYEnWTRWTcXJZgibyseTVNyfEh1U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T7asjGpKfQCNGSv3Sy1qMdK4DQN8v4JWYWf28XVVHDYLdZf8kTLP4aUzWKJVRxf3VC84AeaDrrrmQt1ZWHR8qy5",
  "key1": "5Zt269F5vT5kZ6j7gXoWU3NeRoS6tbvsFbJLoZinzwLqdzM1YiVX1djRJcPy2XZayEL5DNbp4Cck6UYXCqJFGQrH",
  "key2": "adY5KicqTcYPCnpUsNGtji8WRbf4Ui7F5fDFhgvu6rzzFByddUPLY184MvCvho2CChUcipdfh6fFXcJauUFDtfe",
  "key3": "3ksodJQgbLRxVzW6iBZt1opB2znzoE4drk4dJQKg6sPGJjxo4YH4bzTp7GHwSz3oZ8SVCnV8aRdd6TbcDoREAVES",
  "key4": "5XJJoMSrkGzqrhbvpEGmcZuSnH2em8hGF2cYCTb6uHVhY3JRE5kX1ki2Ljd7eZkA8ceeFfJ16NCx4bcLXdCSaENW",
  "key5": "5yGugjcLhAFzfgrXNeprtZeXEUkEwSMngDWfBEdTMJGmuCLXH82z9QaFnXjvDWtfL3TpsDrDx9c3ZYtWuirVMZbo",
  "key6": "3toHjtZDouwQmTt6qYgAwB7xse19R7TBibujdByEjHk1rdBfYSg6jtvHLMz4836KWeFkEHBovgo1hvTJFBSvyJ96",
  "key7": "4YVUNCykKUQCCPyDPf6DP5CBdnv2h3bcqPUML4WxrYvuCrZNcRmDv7vJEcysD1toKDA5zrrB9vNNncmsZH4Prq96",
  "key8": "2r8LmiUQLzt6cAwewUMCFarmbLZaN6jm2QL5PxnShp4k4mCRksCXw4jnGaBtDwo3AGvZajkvznzxeKnM1feh7byB",
  "key9": "nja5uieQAEKM8VWbZWWSXSgXtpdBCUN9rcDEn4MgvnRQUuz4JV2oKtKBnWC6gUjKDE77hVnaCVsn3PKhxgUFW5R",
  "key10": "51c1BEnpEpYqjTHmHmjiSHAtiSL3UvvyDZGnKCpHBgTqLFyqtX51E5B8x4e8RhZmSv7HptN6cTjysKUq4Y9YUobb",
  "key11": "4ZzVJrZ3zBrsriwkwVxtcZ3Zj65umPgWjqSmTW89Y8Fy7CZmJxYFF6Ni7Lz6VgujAtcu5Trwzmc1qJpkhJxUUsem",
  "key12": "FDiBGmYb3JLB5Z3uDTUGts2cDBxRh3v6UZCuPSPsqPkL4Yh8W1EyS4Vjt74resP9QhS2FcFCohEqoGC2jYSwgpm",
  "key13": "5rFWk2PvmgkjHruCzvekfXdCLNfJEBj6RuKgd2VztXNJS6QtWM6UUmweLGjSC7KGxppSLozpRFzjVta58mTU2mAD",
  "key14": "3ci1scHKJ8kbK6eBULjVFAj6QYkS7XCDrpeU7hFTVSyK9NZJxW67uXhxK6TV9R4X4Nv1xzNDKUWj1ngs9cBog7M",
  "key15": "4exGEiS2P5gMYLM13BKETMdocDcAuJTWqMu6QETggVRRTpb7tf8QQARxskzCNdexK3N6GEgneV1a7pLabwUQZ3gE",
  "key16": "2ruEYouFZ4uqWii2fNYGGGgo3nFAnfjUcpK1y61inCopdUpWw5U14HYxzs74heQJ9Af262ebq9XAWtKjbUxWyR28",
  "key17": "4CcKQ3MFe1rG2CZkAHrgdJAfJW8grCvgcR2PKqADbrF4piLzpeujrbU31vmybH3mv6oqPbTawVbQMNZb36PT1xEt",
  "key18": "f6Ck8FhRhxaDuGWoE5Ph61WKKcpPbSekj9sLhBa5ARBcyibnoNYuWtZiz8SkGTumdpkeTvxBoghBvaX1YhrGWYu",
  "key19": "4QqXgBwanEwnwn7HFhZd4Wr4oi6RLGYDiQYi55oovqTgmiqHTjMN2bFPDnCVrLxz99Gpxbpqo5WxgtL92VHnCdQC",
  "key20": "39yC9uQcgbR1nT6Sru5qA98c74bjzzNnJJwU5DuwWBfnFNW8T6Dv3kHfbTF7tEQJdA13nmWEKyaZ2WkFNyVRVnuL",
  "key21": "3UyUiSf8AMGUmGDfFBfXUyTmaHZPwqH5KA9UVNBDFUnbyRrGGVQwhBPYmVMhy1DdpuEPjBM37ZSPBYyucecp3Df3",
  "key22": "4wfffGNMHq4f4HKBgWsYFG5Zc7nDsBNUircYo7NhqztDFeFtYKceTbpKK9HHqyvTjbHDLu9kRv6dFFeVN8ifeZpn",
  "key23": "5EPZCZRy7oHEgih2AVgiRt87PMbQuYrym3bnaXS4Y8JDXnpV4K66dqTwddf5dxSBpX1iMQVsQ3ZTT9zQZpvSjmKB",
  "key24": "4m5aMw3DS892ErwCBqFUewy4tThNjxGs2V6Rx68XHdLqntnjmh7xJq9Nnk1oEJrTZdwfZstafPM7QomSrykTQZSp",
  "key25": "2dw9Wmvk8rrBYwLqzmmKTjCdNUVDFrdbyYEwaSk6W8jARRjUQMiGez78VrfmR5dwfyDkn1T4qmCMk91NtGviE9NB",
  "key26": "5YRWAGBi6JDR4uDhyfHtvvvVXSd9LizC44XJS63sUmN3CNxZMdiPvnsfBjoefNU8EhzGvGVkawmG16abUmP4ZxBD",
  "key27": "3eeyaZrFqDkiLvbXNDc1ChkmWmhCYergVMCX1HYUKiTvRUmqei6rgWsDcFVuE8AP9zQcakFM48D6H1tz8mRbkeLk",
  "key28": "3eckJs6oz1fgMPSZqT9su8o6TV7zB8uzto8BvTzrkwex9o1XnqyDqa3PwFKpX1EB4pmp4S3LvH9rgrQJpM3h9KJy",
  "key29": "zyyLbLQov2VPFXEw4AHqXHZxrGyxRUbhx4Nxh6xbQUvdstWFRj54TjqEgbptBwXdCX1HmKuDh8HJa7s6yUWrj5j",
  "key30": "AMesME4ZUYAS1JbwE69KCH8rqrsQixVWHpqCTja2J5ycfnZMYhSyeKmk77CE5Wh7zjfiar3Zqsm37aJ6SC7HTsv",
  "key31": "2bHTj6RsL17nNfY7c4CZCT3ybSNa68NvFyr7xoJbzegBLzSDwCH63FkL2x6X2ZhdSvWjSd4ugFuYXVMqCiTDkoBP"
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
