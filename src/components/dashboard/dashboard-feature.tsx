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
    "5XcvS9Y6j6sBNmYd5UpVvz9f7oqyN5Sq5Z3PL1EhZb5LqUTdSCDxssskBYfedTUhucyBQwxa81wMn6z71ANzfiBG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EFLcsgXrsJdj6yhkbzgAytQdS7SZzRgFjgELcyUP6Ek3eJdkPR537DbjTKp9njWXCsMpavArnkmf6XhfLCKPcr6",
  "key1": "65WJSmYXDQ8prKixddyfaZzf28cu3422zLTwd7VKmguu82ydVX5Xs4pNURL5Qqy851DPzR3sd8x2CSfD1tFobSa3",
  "key2": "26t9pyvtuLESfUvzanYwQm5YRJB1jp8ymU3b8PXuuSrhrGffoXmJFJT3o2HJvGPSAQDXrhyysWgaE8Kumoa32Rif",
  "key3": "4HhXCPAYMhoD7WQQwkZNyu3w1ijky6eJMCF2q4jn3urEVu5syftCJJXcsrvHjRC8kCivbLXeCGxVPJpUKZjoF3g1",
  "key4": "3zUo81VRfALtmm2WGnQj9KA6881iYf9VwbuaDsojSmtLGNpayj4KswBkJKX3AkHB9bed1wxLFQ2myshZQgAdXDHM",
  "key5": "VMgCBuxPFkPWyj4Ch2oR23jXezD9KSJqo4jvaL3ZdMabi6eYPWA8vxh1dvBXz1TkS2hbqe7bNUHbVAREKiW6AAD",
  "key6": "29XHDJY5qxjfUQd81Vxz7RsGdm2nVGyXo1VaUyKX636mQ8wjVufMC9cXzpXG7hmKCMASJDfahC6vM4kMapyGqTtg",
  "key7": "5mPghFVH6hcsRQHXcSi6o1Ytu5VCTjvNdeADgvFZi8wjvxo8Murtco2zoUUhD1THFYds7Nvw7VLk9vR4CCRH1pKz",
  "key8": "4LauPJXBdngaMnTCyVxqKWsNZv7Ke8GGQcbCw3UQpfmkprXsceCcpdMaWpqiRTrnZJq46PUxi3TcTFK7NnCMf3RS",
  "key9": "4Bij8ds1D8P1H51udXWFs2FxpMWjPookfjLgcTk9rMBMzaXR6wWPAFnXuxHSkocPVSZtcDGLm9ZheipFk1wKTUoX",
  "key10": "4749r2DHvwDfkAV8hUSGAw2ytgQDSVXbiZNAykJ1ebT2yJwFVirJUmV7xVxxKsQbuJWyMdB9Sd6D3Hyq2aTdcqwi",
  "key11": "3DrX7Fae52ZkHCnjyjh8uZAs2oAFUxgxJbKUgMSdCmbGCtkzSvSm1wStu5wcgYkaL9iL4Gerk1vZKFW8uZVyZSN6",
  "key12": "61SrXAuCsdmHZJdgHUmvZmXciZZZyGn6K8FFtsRW4CsPRqFpwYaWuaxuZFucq8Vu4NZLu5ppMa6YNgxX4hLq2WSb",
  "key13": "2sY2UVCMKmnwUJVFR7Do9C1pF8Lo3k5j2isAG7GndAL7fY5pcp7Bj9EpUS5Evuc7qXfgE1RiUPf465JRrZSAK2W",
  "key14": "38LYj3wGQycfUZYeA9s9kgADJi2PV8BSbbGGC122UtRZ5ZgpvkcQNPRHyy42e1SCnJchztnWpfqYBRtvgmisziNi",
  "key15": "nuHeTsPTMnGPvtFwsLo2hFmAL2bzxsE2RDeYKxDjVXqvean5ik9HxKmaY1xjV7USZLFh9kmgPsnAJYr7Y2kRchs",
  "key16": "5AJ2NgCGAJg6h9RGmcMkGLAGZY8kWUaH6NQPM8txStXCeURAcsdVsNDxmNtFcBcTCnSWiL8HA3W4Yq7ukP67bDQh",
  "key17": "4zSytSoz3oS94pA6sLEk6aZHyv6e747tHD5Zd6skbQMsX2PEsagd2ejUGFndEVGuRd1uDsNpY8pqNW4vqd5yVZMf",
  "key18": "5joJG9bz1uA5NVKPCLyUmznU5R8zeAnzdrwwhY1dKDoQrakRvxEJRgjzEdSvP5gkVK7QVucQomgrE32cUWLF6oe3",
  "key19": "1eaMLo59YNZNkrbeC55cD7qRzfEV7unecK8coQHVbttgUAMXTwogiYQLvUZ3zBFgE57oF1vdhANXqxq1MARChCE",
  "key20": "3auQZaU6JSVmmSE8RTjuPe997QfEUzkuRwHnExjpDgZn3TKAsuLzKDoSaXms3iW3wVtmQfcSujgP2KTPmWh2Wkid",
  "key21": "2GdSME2jHbc6RfE8PkTneQcAvsLBrv9A9SLB1C665BTGxSVK4coBeEPkU2JBotJm18A2JJ4zBn81oFu9M2jVdudu",
  "key22": "5XxDYJYpBhkLLAYFPhcZdymW2r2FzRaejBt7mD6Nv216LFeSmxPFKqpud9ZLvpKPhyFM3KKSCtV4BiViaBksjJDz",
  "key23": "3qUZgVNZduPfmGrBBHK5RKej1AFRbuooFkxNDxs977vCJDzxf5Uxvz3EGcznJyyj24efiWKP7GQynhZs2eBeg57b",
  "key24": "5kmayZunwXFF3PCLVQudWXTCAZhhf5f99WWzuDsmQriD7HHSmGjgtKBAkPXNBbEdNQz1ZfmTzYr8FKY6nnZQFmtz",
  "key25": "GNzZ5vy3hszdaUhmUeKAi5ZhiZeTL6ptpzj9pajJ9UvFutbqBJjrs1jUNorncW2XnZHd4n1oJYkRBiZb7ki2Yf1",
  "key26": "3pYZmh8F8zCUp54hjSWBujoDfwa5xTmmwhvRGUZ7UpUuGSYBzZAjyfsx4p268J3ZUJ9KdHqA1ndwRa9Z8a6ihja3",
  "key27": "5rJQdHByFf3v5NLudaEhiDWor4U4Ww4YLtXirt94UNuBC6YjsjL64hgPuMky5XVAAba7JVdub7a3dRqqVy8ppVj9",
  "key28": "3DAMnhKFcQFDU1d5JZ346u4tLY5LcBaf75HYt21ij9WgqKz2z6ogyq6pcGkAJa1RKWY1Ty6EwjDj79qmQf4uCjz",
  "key29": "MWf5PvMZvfSzuS6L5TtXvofTaDyDY3t6QYFevQJPj9q6PuDLVLiS9RnbbbwUzg67Kd5EA1jek2JREyt8q47rEvV",
  "key30": "57Kv3EWNEHZYvyZCYj7AqQetR3TMj3dqJkfsUYtnAzavZWCo8jSgQoBngGkx7Q4kJyCbDRHSL5a7jZ1reXAGT7cj",
  "key31": "2R7K2W3BYnVfuN189FejoMWYwQdrXL4c3ihFgiK8yo8JMXAPW647M4CK3bayK4qpRDTfHqqHDWQMTeGVhdi1gYRF",
  "key32": "fKzNon9ir6pThHZRxFN4J96dohen9Gug4WVYsgekh9iwnshXamqoPjrMQctHzhFPwKpUs58vyUBJV8hFU8RG7Tt",
  "key33": "dJypad6HxTS6DNnXNA31Y9hZAtoWDB4RzZGxGwz5qDepgdsxw1Cu4knLEXQow4RfsLEi19rwaQ2W6TDG88ZXbR4",
  "key34": "2Zmia4AqAENb4Kh1xZVmdvxVrmQ6AvgaaCtsZWW744aysaeccQCqn6aBmCaaTJDvBEVseV89ZeJMSgSSgUFv4Ki5",
  "key35": "EhPPwaKaiX6n6zKh7FMeaJPwRHrZks2VbrKUnpB6Srca6NZYLcJgnyWB1M5rXiPGdRhuhxvqC9pX3Mj8MfTWbxF",
  "key36": "2J3mTEPgPsDWAKiLN8kkAZrXMVxQkbLz5bWCWm5Y6qUYsrHVDJMXz75xWCuXgc7Hh1Yq1dDW43YTNB9MFntEprGm",
  "key37": "66rXe28kvu4rvUWcVb6TgSWorM2Fw97sTT37gyYxD2RSDko1gkQitf8Uovs4FMBL5VNRUuUBYRbN4is6EroSvHMf",
  "key38": "585yie1sFV4kS1wi8tNiWvygCWuCwPHB6WpiXHtu5krMDzA2Jg6psdweMz8XgysUGBmqVzWYLGVWXG5Qmmam1nXp",
  "key39": "2RpK5pLeYGWS45dzQmhtQgWgUgNDpaMREYSaXV9qGHYyYxjazMhcAAN2pZeHgqAicKx7bVxZHjeoTJyj9xn2UJhi",
  "key40": "35UETvkmwA2sjd9Rbm4ofdNxapybbDBCUgktB9HCn8mBuMttYvSx5unxvNk8LYTHRd36avJHosZAttkmHXPBzA5b",
  "key41": "4jNtTWPaS8VYbNL3maXgDEa1dps6GtsaYdPv8PXCGAuCeH3Gju5J2baKkobmJDpvuy9dmkwJyn6BFNyN881kcnGQ"
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
