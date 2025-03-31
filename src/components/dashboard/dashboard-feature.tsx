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
    "2hZMRDPvZkQGdjSQixrh8LuNB3qe9Hh9d186RAeKezZRCvfdHL85KNopfhVYjdDtCGjagLpJnaFApGyNnZi1Q7m7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hNb5ZdqsZscK2zfYq2vZ4gQcvA3V2dw2PNSdUhLdEkJLJ8RFKYRy6ZVbpTe8HAop48P7unWQi2HZT2dAdpbL1bt",
  "key1": "5GSnK2JfwKdNJRxddPWBT7uoQU67KfUjkFnTmaGvvpXe11nZzcrqiXMKEoxMTHKEbRk8fcGuyjpjgx75X3ezdP2i",
  "key2": "4wR7QA6hgs41a5PMU9yiEQLWrXrUvemPQ8awUxHs9bX4VJUgY8PEddcMi1tc7jp8mYNUQfPPKhkHKjLYx5XJeTxK",
  "key3": "2Rys2pr1y6rXF72JXV6oJwpjoZdvkK2puu9swPZyRejLdVMTCzLzyZha2jqKjy9VjmbmAMcE4E2dcM376j3iEAVe",
  "key4": "YkXYbGa8DcAjW971GcABVRnHmuxpnk6zVsqyszTEiM5ioYhFAm7orabuKDNaieogDJrW6CSWyez7czVtv1ZqN43",
  "key5": "44LswMNGb12mVCCaALCLJ2qJHFsUSh4z1daZU9W3NtYNMgKe6gjFgnPBpYMMo2zB9UUr6TCDBZmV9sXyDM8SHani",
  "key6": "5BUSqEU8Hc8PJd4QF6gKJcBanEkyynxr9FtnbAQGymVfQXRStSoCGj1q8Gx73xfJLsUEffuVyW65dd3YmnLFY4X3",
  "key7": "5ZjWwauvtbgS71tsYyiDx5L2BkTSCcCZUPxT7mFr8cojQ9Tj1nXTV5B2Bags3v21C79ZTRPyyu4HCb2EDE9YmWDv",
  "key8": "2NM3cAq1fdkLp4fcETk75gyX4JeCv74rGoV7psvyDqc2P3r7TzpT7PJvx1dG6pSdJPqHayjhLUzPfci7m64hYqXA",
  "key9": "4hsQivUANTaVPEbTan5orxz8U27ePFBezNa8cjHn3i7To1DmE7sx11NPtqibaqKsoEzwdJNCdxSFzpNo2iaSm5E",
  "key10": "4u6TPYk9bfuLcdhZxda7ZhHYNUrq24cFHcGyTRJXAhBAGPfmwoRiqpYNUub687XAsA6Lc76sAja7Eda4rLdq7PD6",
  "key11": "2BogDQkfEDb2dwMoAnKdZ8F4uPTFdZgzkEnmsmhLkGmeL49hYD1VhSjhWSJ8ksne4g4k29ybjNPeVFDg3Mfrp2RU",
  "key12": "2pS8taGAfiNAwYySYZswKtZTXDvUED92EyNUGZJTPENosmiWgTB181r8DNAyw9WCKZ6eVN5rd72Xgv3fqraqj7CK",
  "key13": "3jHS63apvV3zLCN84FqjFLS6G5VvKSnJ8hWAHAJCtc7LEVuoNKCzdwbEdfkLEqkoESxMqGE6QeXV4aXybdrq9tDT",
  "key14": "3u66PocwM34SHaATbnxzhbWz8MJp51WRuv1gUxQJwkN53mBDQrYRnjPPnRjc2TBCEGdJM77fkkyZ9MXCLkKEZa8w",
  "key15": "4nEw3y1Vt7ANYYjMgdCYSVmyvPUiwAtE8fUGgMMnA3B6XJSm294NB4gNX7WPJPHbLRjMBpCqMVpahDAELgiTmHML",
  "key16": "2MNA9ExuDaDQgkXWTPxX37Jsw6AMcPLrCVwA97a3Tru3Yu1GHW8Q2dCyTy2b4btSJqYCnW1Vk6FeQFh7SQwXNNkW",
  "key17": "28GkVZaJxSztrfgDXf7QxTcM234YLD84RF38GmnUZYXjcQkeVd3wLJm4LqAUPtowLyAKWfeNJArNiTUhhqaQsswn",
  "key18": "28A1w2ynmEUr1rtDSviTMBqAaVgodw1CUhBUYCSDR4uaP5Huxs7sxK4WWuaeqxP7y3ufcSD6G1LcRGAfEsu6jmtS",
  "key19": "5LhxuhV6cedbXu8u9FpnvGC36gZt2rGSWKPtpUwDZQxazzphLCZJjVD6ax9hgX6Zb3jAxQyxPFvb2p8hy29nZxm2",
  "key20": "3KTVLtF1Miw16jyPaW3msWb742CGFPW1E3Y8K1qeYy9L5qUwK3sMAUYgV1hFVSiQvci2nJ6htTaM6UCtygiTHhTc",
  "key21": "2h8KSJuBUX4JWp24bSKMxoqCAJQeKuShnspSPzej7cmzuTZhgsLiFBAmrQsYo5u4KGL263NfjQFZZ4CFKm8QFhQb",
  "key22": "5r81Gk8GyKzLjjTZZ76gmEouvFcs7Y6RNgqRFunt7p7yjb9pJp9cj5Z2dZqjkWEtHJmGVoTGNDrkGg5Cpa5EmxJr",
  "key23": "3enuSNbravoAfmnEKoMQFxNAQj3HcCWki1HCLGYMrF5KgjdYfhtGeRj25hSrtac2Ebr9ZyiyobJAyfMNNW3u4hFA",
  "key24": "5nQG1U8F3iTwHxDk7fZsidqpgZk6ZfAZQWWAT6wvtHLzPZvmHUAQ2HkRtSRyLpFF5i8Pm1awZxDCGB3F2D8nSpXa",
  "key25": "41T1ZAu7x2cPXPyDuwpN6uJVnduegqgKjZXGoePJQUKan43vXy3yrwVAHXKY6dHUKUvFoAySusfsvKqTR99KDzTg",
  "key26": "3F1v1hXHg95eLxtkLFCA2ECjvUTZt2RYfG3ce7T8vVA4hPe5VoshMD8iPfyLzJ4UVbMArUfMuV4r4Sk263zavYAK",
  "key27": "5fsEjK1swiCREG8RYr8cnbNqQQjZYYsbXiadryLQyD1gubhe8JzvU4cZdm89H6U2AdMPvYRmEnzR5cFRiqHY71Fz",
  "key28": "3wthfKKvM9uP8bZGbXeTpvF1DkSQPkYToTvCDpwMSYsJGGHfxkdeS95zbFK16Gm2SsGdYfMrGynaTtveMmPy7FnD"
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
