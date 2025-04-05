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
    "3jnHLvAmvQDc6r5JAh3VifCKDrw1cW6XkrcJ7NsY2Bzojh5C5mkUFNYJexJti3NhePPC7JrFFX7coBcop9hKpN8p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41vb9FnQfuorWpsBUBgWouznjN8e2fYSwYsXyNsUa4g7bNNDov7vbSCBYSU8ATXg3ff3UANBKjacduRWubKpZVNg",
  "key1": "3p53ByHcmL5mJxknqBvp9sYfxqXze4PFLbRkiifmaNZowbGJWYNujinogV93LmS4wSDoSdY3xWj2vpxZBr4qvoxV",
  "key2": "4TJ4mDwADCcPYG6myfjpvBFjLzp4jCUXb44Kjay8Q8xJZ3TMm8oRkW6KaYDzQuHX7qzVR3YU6UYXeguyzESkKkRS",
  "key3": "5D5qWa7x6RRPEASPuHmpMRFCuEYw4VnoqLJiZweqKxiNzcFyVTTg8Hh3St5aRzrjg8K33kqAeFqVFuxwcT4hxLyh",
  "key4": "y27TnkcndNPPqnLgJg59nV9aNLFLtYccxxEPm2WABpQ3eKyrrARHKo47FAWvcBn9CeE437xJKqjro6oEFsMp7y3",
  "key5": "44iwdFTxR1R5QKfzdVM5vmsh3GL4HzeuAAoyg7xU52vW1DtbgAYwyaDi5nkZy6uX6x3rPgt9P958g66q9wdQGZRQ",
  "key6": "8vVMtNEP5RybwLT6McxC7NisJUodRkJ5ywmJ4heSWNV5dZaaM84hisAxXxmpoKtKYD3ZDG2A3bzkEib7b6H97B2",
  "key7": "4ZHfqFmQCowerFqKKuF2JU77Vao83aMaFH7XkSmcKq5W9Cce9j4tPSj7epyzYnbGsEH4Ay4EknAgsxfEhABgp2Ms",
  "key8": "3XTu8r15wKoFCJsV8ScmNT22JHaZ6Pnf7NFN6PMwvLuscjEz4xzvy5DGsGFPxJpqUeWHinccpmsjfrXAMmoqDp3f",
  "key9": "2EjBiXMqg2tMSwVT9rQDT83LmeyS1BrajhUzSZSvLJ4cJs4Th8Hv5K4v3UybUVQ4ocnSZ2Mjpsz9MSJpnFioonNc",
  "key10": "4JpfJbuzERXLEtKvRRRAJyQJwt2ayX48UUH4nt11yfDFdVCS3pJWUobCqdVfau3n8BeNBTrrDJMXNri3TraNqt5M",
  "key11": "Eo15YiQwMqDWQ9Epym88uY8KGxVyAUHaMpgQXyjE3EkTkxNdQFnXjMmi5VbSrXRZF3nowcUm7fwNFGLqoTgFHJa",
  "key12": "3JmvdnecmQpGzC18MryzhyU7Qzijmt166VHR9ey5ezoPgFEnd5o7Aje5uChBzoEcDyvEJ6QnNCHa2xxhbbgYV1bj",
  "key13": "nqidYRDnJWEVaR2EVfvRt6YsUWv8KMMxbxkBw2tRS3TFDr4vwviKaZTSMdQFWQWbw8LEuQ9UGSoPsz475zVYZvd",
  "key14": "v9deWgFsNw8PH5ggiRQCrxKf7aVDZuU7EcwP3uxjzz8Sf3AvCKDuUduHJcTBvNsTtLEVg4KoNcwKT3dvm5rysTc",
  "key15": "XkK68S53AvFA4WfvTHBMeDzHNr6zNZzRGZhXzutYdsnyYoUsshDzPNBwQeVrgQRtG2EVQGU4v6TYYEMKGwS23gY",
  "key16": "2doabpRdj9ZVKdjxpRie38D2Eek2oHVAVEVRGipc99xvHs4oqnzmxVk6Mt1fdbD2RDBg7TpjDj5xZk2s7WtjeKoS",
  "key17": "3ruSn8RgXREphg7asYLejReFEycfAkh1ZovkqZS5DBth736nLhDDcTpEsW1MTEjfqPAFRu4BXLNYq7ZMX6C1pwxg",
  "key18": "4HzQihnq9sTh68kRamSxmrjir1i4WWs2MkVhrXj77gtjqyCn43XwipVRUgUmof1Mhp8dNvgescq41Aj4JgLwQDSX",
  "key19": "3HvTybS4tToEwYoNcbqKqeFmz5RCopqmM3GVbSysVMRXJqD1876R8jvT1JHehC7cT1BPqVxxTjfyrSy84Hixp9L7",
  "key20": "4prPawofHXqosGtQiqDDc7AQFmv4k9kq5mLqH88on5vWb1cY2yL4BjdGx8wd6zjApM7wKbQ24u16WiRZx3NCAeJ7",
  "key21": "62H2hTthaX3gNrVY6fvrJZER79EeFSquB8wswCzNUpAoL2Nm9SCYLTzh6R9Tro1bAzeMYXSz9gDYuYgsvnqEfriD",
  "key22": "46BoKVmxk4wwFD2JrqwunETvPsaTZGvMrLmpsopY2c9hdLckR21zYiXv6vcJdfjz5bb2ZsgQwEj58En3yRcqwD38",
  "key23": "4zhfKYwYAmyQJfVY251Hmg1VDtHfY8pg6c63VFVEZmjGUGwdeDDRMZGpS7WpojstX5LbgqnsctsR7gw1Y76CCDTG",
  "key24": "2yAqxtBnEd3PfzXV29ZBKyVvSnwVwPEfjEoQhdMdUHx93zovMCyu7fe5Jvu5hp6ZAwHLZKTeeFDmzndyD5D1Yc4S",
  "key25": "5nXRdmU7caDgZwvLBQ8LS45buku4KG15cCdcHVY83Kw3LCLoKMQ66DaQStRYnkBwQKe1nemMwryJBxrjEKUAMuZH",
  "key26": "66uy8DNPYbebj9bHX11abfQDPWriGVjW6fECRudbeL9sofJbjjVFufh999CNJtnwaEndvYVYDnNeNs8eQvFHZJMz",
  "key27": "4ah4e1ZUBsxMAi248fC1LqSaryPdjnKQdqh4JSkqWDwV7L45B3z2bcbhoVr6igUzKVk3ameTswPqvWdAGwNz39zp",
  "key28": "2Bj5jG8r5VhrG8LHEeHe9DMAXR615SgHWxADJ14GokRspkSD1h6gEdn3QRFukX26BU4E898mLJU5nEAH6FmTvHmM",
  "key29": "3oxv7K2ADYH65w3DbcmRczCYU3N9YmWuBtg33JtCtp5ZjFXt86rFxgZ6E17UuYokheYWGso7VXQ1AsAeDKk5cZLV",
  "key30": "AXoxXAYPXpddCSFEsePBUMNHaq6MowRHS4gAyvTvuupQZWPeLufVoqYyQY5NnVgsxg4Ppt3m4NRZHZvmdFBHnsB",
  "key31": "3iLop7jRX77YGPqTc2s5xaAoygqS9XMDunyLA2kmyNFbXzJeXLXSAmTJmTEbQ9d9Z3vFAbvb15TJbMeVpBiuUa3y",
  "key32": "4S1DFnBBPYUWtPUFfwYZxRicnrTnr76cMxNvsDewVKs1bMcpqzaSBV7ubFULCXvBdSzhiRWU8MSy7V9z2PQ9Ji7L",
  "key33": "um9TEcz81rm97kAyaH3yjft539jCennTBUntTNuBQRZ9rkEk6aCyNwsgDssqfLQDv5ywsPgXs1WtrY8QKBZxud3",
  "key34": "2qhKTEXSNiSMV52n5aj6b6X6XNGSdGjtxHnRgUwUpZn3YNb3ZDvmCqRi1MKW3bd29EnEPYV2YdjMk8dtNZYNmj7z",
  "key35": "39iv1XtMKw6VobSsm46TRwBLXcbrmEvJffxV3ppBvM9mEAcdojrXEBzcxVrUWV8joFuJpNKH9LbPLUKkTGHkS1qS",
  "key36": "2E8F6cB49FyR2m5zaEqQqdTuBKfibUHnaWLHBF4y76Cstt6kJwjtbQWnKXjhRgR2qTDmULWGr6d12tXR9BfGTeCg",
  "key37": "2qbUp8aKP2uyQS5nymY8Zp3ZYrfgR2k9BfUWChVxBG3G1jBas5MdHJYapePXtq8UVuYrjdHRFrWrbFB6UWXQuw9y",
  "key38": "5PW5rnsnWNE1ddqH2R3K4CpfzzRqV7esyv8s8nB139bH7em2n9JNFiw3xb5e7Gx5A17oRuuJVNyrbikXxy4HhUZx"
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
