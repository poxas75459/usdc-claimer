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
    "3dhgCswfqQsBKYX9SmcYkajDmxsvHrisrozRSPH6nGetoNHGDuEu4XG6gYqCF2sgfkSWWLcHKtgfqNvjfUvD3eYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2snXir6GfNfgQjAd5HuaMxCWraijKY8JpECVniBhZAtU9Vk948nuSUk1T2j8h5yCFXfRrznLB1VKCPwMLJ1VJomL",
  "key1": "3brk8pTQr2oeJtdHjnwAmUgKtuQdUqYoBmpsyKcas8kTRvzRcWEyCytDz4neexagMRWcaku5aKiwSBjGz5W4sXdd",
  "key2": "kftEbpX23uqQs1SoYjsDgRQ3J9gortSQk8q6h7SXjFXG3JWrZFxjLjzntjg7eJxHzZDiMdqeLKAsT1bBYuQ2iL5",
  "key3": "3oUcXwDFDpEQZDFifbBMu4a7TPLAMKNZ3WvTxC6ZY97A8gZwuqK23FEauzZcqRhurzndoMLT7f3Gu75x863KFy9Z",
  "key4": "2u2p78SoeVBLShJvxoV2YbHFb5SDwt34wnQqxUjK5W87Bc3NcQ6Yt5V7LzMiyxMwAN2ceh49hnary8EhsmJU3J3c",
  "key5": "3tSbmUEKEdoSKvRDf3zfy1XCkCTfE7vXNA2cDF3drb92DXntnJ1tJuPb8rGedgksLgWH6VbMVPRccFUDAyZQyDy3",
  "key6": "56tTE7K6fs6oQaNb4FNbw1njKMkNu1CmU6HZV1HrBeRmgRqGb274kH2ETJNMvQeqwuCjVXcmteEJBjVzizLu6YSt",
  "key7": "4PPraJgqwGK5MpUzshdyxugu1vUuR547dXjSm8vXAWTLypSRwC9bH4Q9JY66tbGZecfpKhgCvWtgWDAFgtzzaj9K",
  "key8": "4Hpukg45WuU7xBNb8Kh9j485yqcZF4qK94WhpBvRVNXg7ov6Tj24gqYYdJF2hvY3ZUKLnGDb5f7N76GgqKVETdEs",
  "key9": "4dtfzE8K6y92FmcFn9WFdiMvsaXrhvud1A42vH28TAfwfcmS6fiu3Wz6zp1PZQEQZzWSSAUeZDQAVSeXAtqijwQb",
  "key10": "FqtcbsR2eibwNkpieK8DrV7Lp8pfAPW83QqGchfjipPTMuggHuYbKpaQbQ4GA33V1DMj6uftSsWMbkQgmxteG4S",
  "key11": "jkbTpfpF8GfprcNJGsvno7UVTg3hMefPeThEzhcHbhmKkFsBMFJ6bMZiWkfQ8fH3YCmKFAVzqAqLhKVbgdHa2oN",
  "key12": "3cYcMrY5T3hn6K5U3HbYdoiCFxrp1asGys9SQSuNuiFsdzp6vmoXcKV9jJp6uui6FJ6MKAo1ZE99X9zUoHdvo37S",
  "key13": "3cxdgjm3RhDnRZoKDXFFnSKd4Xor5C5GGSYMehnsQRTBdMJ4dq28EFRGZzAFGVSg1b6Asi69bnEnXohq4WaPM6s",
  "key14": "2cj4JQPcxbPLKnyDDhVJK3v8aQo41MUKLkdNk7XRCJFibwauaeeZe471AtqKnsvAUxyRj2D72jtPnj7aG17GBG5W",
  "key15": "62BFpwnnvkAFX1nrPMfzKcnRUg9q8Xb7WxdTnuajrk2cfXzx8TEcLcMBResxSNa27DwvyZ9FbQUBF9B6TADKtKLs",
  "key16": "3ZnBYR5naeXtsGa8HaDrs3SitzkFeXpZdVPTfcB6LaYfaEcaNz6dUDZjQEyKSr4rZWwQ7qq15aknhKgANGvzENT1",
  "key17": "eGd9W3Hk7cu8KD5Wg7BZmgtVoYJdNBnFXz59ZPm12mZ7JrkBKK9SaQbECfaLmzkkBAzunhBn4GpFCbB6Ft4kfVn",
  "key18": "r7jqZCqCW6vq9AgK15oTZfxb41zZe3RXcYCyPY4kFvVDWVyGsGzbuKfeqq737kmfanZm4gA8eQkc58YU6ioxSdd",
  "key19": "hmVHoEeVKa5GwZxA69NPdP527D4d1VBGe5QjjvpxzoMoBUShkRdsxinKMNS4jDj83udcCBe5LDe1oQ3aWfrxMFo",
  "key20": "VzXQESfKY4gXTNQWb77NQYbvGJyYxwSJhicpzazC2Nmtj3Kuq7z8nZSNi3fUFHGRzFES6XDQzmWLumDthqXK9GW",
  "key21": "42WhwaZJUj5GW2jdhfmrLmASQqiFfJDGznCppwFM5yG8tY7w3ceKNVN7ss3qYPAzn2JXmpTv7SPiTuADGbt8sSvq",
  "key22": "5ZHPj1W6RPx91G3d46Yui8oGEXL9vCg84ntYnKfnoTGb2QN3TnAQ1AiycwLWHWCe9GDgKtDSHXhrRWQ8t22DDJAr",
  "key23": "4C7r4KQffbNg6sXd8AWLLeUPnonCPFLPmYDakSy3Eh5GhijGfesxnx3yWhmNaojyp51FxSGybEvPNb8AbJV13vuj",
  "key24": "3LxooB55pUV5hLTvAyvTRRT5Nbjfb5i9nU1jXpAaa5Cevy4Fs8zQcmmo58DKWDvQkowojMBT9kytTCKGhXbS6GMm",
  "key25": "3eWuBUAcpEa4bptSMQCEzijD9T2qQbvyg99cWJoxHFwc8PpBipHhSYG8tKSBdyUzsjfso98ReJwiwqdUSo6zZ2qm",
  "key26": "MCh8hobQFENXeFTD1JsbZMrfXB2ekscgrev5BBR2P2c9kt2Us6mBhcupgEcqNLrhx63ajsjni4pZSb33EL2qRPd",
  "key27": "2ipmBWaXgpXpHoGd4EM7zp36fgKa7ja597k1Jhw4mtJoFibheE2sifFvQ22B2UUaMcp1zKRde7cGJNR4iq12SZkG",
  "key28": "4NceBcYUFNDU5WM3giYR87ZXWKqpa5jKMV5GmhdFpfyrusqL42qYLsuRbxm7FmVAXfyREWFcgPRdySfHKHT2DZMX",
  "key29": "3Q7ZpUenMQEgzvMRoWbzS8ki5d4B5r6CWePZmC1EnRGFW64uSGeUVeBwiddTUC5WFq2PmNSzzQcDWufVRDMKjbkK",
  "key30": "pG8C8aNPSk7PwkdRc6BprY7b1xZfLkZLA3xvZVrFAYNE6rNHGz4zDzuGCeWHo6dgy4N7Ustdoo2TbtoBLYwXZf6",
  "key31": "3jUBEa5EeA4dNrJJNFY2dtLC2NtuGEiTMwGe5ps8txZZ81sW8bbf4j9XbQCYdzPNAP6Wq919LSfCc5BduzuGG2zm",
  "key32": "4DN8LzJD45Gba1QLbbKX9EX6Zkgx61vqTwDiMpVuwiWyinsfxerXv55w4ozeVHWa9fGPFP41GdkWrNfdVza2boSH",
  "key33": "3WNqFRxgrwkyEBmh9Hau7mcCKAguiv5NbepR4AFuM5QQqE5MuWBGEr4MoNC9X7ZnmCJEq8jrpFAocXsYKop2BsYU",
  "key34": "39f2tYxdkcQ9KyX6GvqUgemcvUXwFEJNNkPafvPpzRdparovqkNpVoLuCEPY72WXDiCEm1S4uKucYQjPMVWsSjHV",
  "key35": "5DvA1cGEbzCZpJkJCVH2q3VmwkRVr3gaVSzRa6kiuSz2LFQBQippP74iGfCEdGha8FiAvmhauJv3iskvJKt9vMik",
  "key36": "2n5dTr3cHw1VL8byk3WAS7uG1PhZoXf5SX1fhmTMPoQDEWU7CjjAz7pd7DSuyJRRxTm4yQEA8JhkApBh5SnF3qxn",
  "key37": "3ksJzWYYeA3n7boGp4Yz1qfw7o8EzWvXakaj4Gc4WNvC4P6spNm4XDPXZdVDzbPdQSeUJ6SXK6u4hqkhwqrMPWKf"
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
