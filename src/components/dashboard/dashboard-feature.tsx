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
    "4FGUm6UpkJpCHwQ7S9vY3C6jwxA9tFCXsBaxqjkLtEKvzdzS8kWYVdRqsuxa24U7LgnpcfKBWMtcJRp9RLg2JwSe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7fvzZnSi8bu8WzB6Q9AxW1eJbaqeDgUa28CPssxixYxMQh816R5C8qJgkocYxYqiZt2h4gcBYRnT8KzKbJTYXPB",
  "key1": "4M48nJLg8vvHFE8Wen84y2LqfyNt6PpYpn9g8gNQPLf9wjYy6JNSYW2tdHdYrs85yXEUDsSr4sa8DV1F5oMs2kGS",
  "key2": "4cHwWKHRbUiDUurFv37jh4e2AUrzHYxAedRVZ3ThtJVHgmVaHTw3V4mB5WT1BLXL6aBpe7pkNkCfAUY9vxotCCVz",
  "key3": "5yFVSFpNhZM9erRhTvqFeAqq9wUDeHW8MytprHciDEZ7pf4pSv3ZE5UHmiyfZjf53NfARJXKwEMqAzJxeYcdgpNd",
  "key4": "2n3vc62yoA5y6o5aWDgdKeV1yeASh1ve535qgLsx9pFhPFVyfVB9KawzycMippqSBMJo9EZ6NPUdr2HMvSzPtYiz",
  "key5": "4fHDtMNyQqGqEkK9UD5f9sWcSe4koqoUCLypcqWrQjUY8cqPp1vEs9waZpv8T4uEtSAVfKM69Ddzt7rsyn8a3bhv",
  "key6": "5ieUwCV8ShtNgEGwcKoXA5mDiFtA4Gr6DbXMzRpPi6pFG3NAPLaTRbu3mpgQ1jRNaX7g8HPGqhgmzkGJbcicLKz5",
  "key7": "3HrsDLbNxL85Sq8ebhp4g1XWca7gHJtminZADJq3HpgYUuAvHbB57uQR41d8GetkqB3uhG6WNC7hEE4Fc7vqALmr",
  "key8": "5ud4dqtD8P3m7n2wjZKNHMsc8RB9QRQz4GL8ivWbgJcncLtjtYr58NGHi3iikkdkQSPkX26gK5wsXCqQ8MZjS3yG",
  "key9": "3cPrNEdZE3KoWx2MAgsBhVYRt5hThr2qNJDyeL8jSVJwaFa5G2nBgwHRxWH7ob6WFX9AyfwLMs1mofMztU2vhDGC",
  "key10": "4uJPTB3Q95zbRihBy7Dm9fPEa8m4rzeRDSGG4upXyBQ1y5tapdK1rdmoyuZ1UDtjaa5R8JYzj1XAzrwQW4j2qAZY",
  "key11": "zbRNt2Eyv9PNSR5dvAcffQ1WGE14ZRy3wFK7cM6x7GHYMqTh4jWjLVuRory2avAviYWpfHkEMeMwak7CM74gmGY",
  "key12": "3ncV9idVyUPGD95Aysi6WRgezvfXZ6aaSb5vfPHnFU6n8GdpBY9WVFNnhsqK1cA9qXSby5KcBJwXZusqtprX4wXg",
  "key13": "SkdvVzZ4ZdDxrMTju2Mp3r4VpX78q5FB6xck1mpBAkbYFWGfNwEMRFJTj32rb4PAhhjK6ySxYVgKehtyDhrvkfx",
  "key14": "XtsVZuMQ8rMPo3Wzio8ZcCcfufB1Q764d4TFPpj7U9BadznManmPmdEHTUPtUE3kWG4ExcBvMbS4MNfdCWybjyT",
  "key15": "2DKr7vQTE9cu4tfmULMifx1XdZx7KZqMgxQpFf3No6HDhBTcemwUH2tbPEmipNFKBrTnHoZuc72tfzyo1Hcm3j23",
  "key16": "2Ed45JVPbj1p3oDfBxSSdK6iWLXMzPeaePeMkMGRFQ6ULqKFsPfgwEwnHaMNvEykzooaJUALqPi8z2dkXcZZRDxX",
  "key17": "3nZMQFWBs6VvgQHihXG3ZAHgxa3MoZ9iTZCZr5nTh6PEPecCBZ1StP8Fcgk4EZCntqBer67Z4JJFfKqsWh8d68t9",
  "key18": "3MsQctBuandH95FEqW97KBQkq2kXvMLLqqr746yx54nP81mBWaCPBJE8HiLDVAeqLxkgEn6EubU8p5kp9Q48cC5o",
  "key19": "3mUkajahdzDoUXxSpZ3Xyn4GRXk4HJN3A6ijQZCUty4A3mNtxg77yUGGThMcJ4GEvebBsVrCFiiqEPvnqvF2JRj1",
  "key20": "2MTZ5ERTWdXRNJVvdXrWTdqXcCfS5F4pbVcyXsb3FJwcq19LSAHntpE421758YuMCSvSGnGWrP6638JKY8EaQAQ1",
  "key21": "3WotP6VYtx6nKQDyMpk3Fn6NiKirEPAvxH1A7xrJRikBWXYpiMDakkf7Jw1jHB4bfhjGy84ACDK4DjWoLqqJYiqb",
  "key22": "3XT49MdNmgmV3Ck5wYvKhR2GGfRertLB2cqjCcWSTZc612JpYUuRXaNYZg4XXKwQMDQAzwekidxNrnPMs8eU7TvT",
  "key23": "31uqkxUXv7PSG7QMfMqew787hijKGxJFLJd2opJQ23REANT68T64PYVWsW9iifDWvML28ogBVb7osdJDPBgbevgt",
  "key24": "3eVv6QxVD5E7jFJA4oAZQ15u1bcUGR7c9YiZXp4S149CgEwVEZjtPuet2FRvmXeJhrFGfbjSdhUTSqEN4iMNDQZc",
  "key25": "584BSUhaWp6Mdv3QE5mFLvbJjRChvY18RW8qmPzNTjHCobXVHr6R5ceBT5SvZsEt2R7Y7B3cm5sJ3Fr9j8m9r21B",
  "key26": "vAUNMbRkj8Z8dznDvk5w2EKjm3mhzRrYWK6NaC3MQLPW9Cv6FQuyuoi3M6ZPYaiMwEnznTcyKU7KX27umzgm6JM",
  "key27": "5AiaVB8TdPhr4ZCXmMoDERZ8P59P7CL2hL8ygDtmvNGjgewqGo3BjNTMqYt9UofZbhiYBa1HCBbe2KV7RoZb2CkR",
  "key28": "42VwcpDSXpVpkhYQpQZyq79QWU7BKcHTKu2WWEDF1NBopTy5PXDeP59cSyfQkpCsX55unaA3P867zPAhMxyJFTCL",
  "key29": "3uRAHGVqsMaNQBXnEYFKuTE3L3cASK5aNUzCpUqdjU7pDRjRb54hzJEDNo4TT359FwJjamdz6jLhY4sPtkWkshgU"
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
