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
    "51mtGzUixoNBpNRd15Wws32PvyPSdTnK4AXxCuTbeDoxmbAfZoVyqjXwVcjR41V3uSnLWe93pUcNLPp7qoyvD3yF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51Q4GT48RMZhRi5RdvYwcKAMWEDMpLkYfw2JjF2A5NmdLAKW2QJ4Z5tUfPoBCzfVqWVkprp9un4pirSFAapZhNm4",
  "key1": "4yV2YnnMYcdWKviR7T7GRArt76MRaDSTFPy1DcqvdDkg3WawZqoetoJYTnRaByX758eEPyWW7yCjrwiFqSBBeQDN",
  "key2": "23oG65v4wZ1VkFcoGHtz7NbcTVvSW3pBFbtLf7VPnLx1YCYnDqJdozrAQMBWni6U3hWUvMUPvLivsHgMFuKL7Kri",
  "key3": "2eGzRAJSJrJQLSkFGz72RwMuvmo82cka5aLQ9dkfTv84g86tjqPyVh4t29AUtGmVbHHCwQM1UwdmfHrTfBtfV7aS",
  "key4": "34AyDxqPnTLeHwAmdRgi2Z4T1SKPx2PZamwea4SvKLRguoBawLExkpetaLAo5oGWnKvmonYVmJaWqb1NPsQ21XR",
  "key5": "5fqFBu6oJoK2U9ijZMdX5SKXFEuXymjKM6v7SvEpJKvtnnQeKxM9EUtT8SHnoLJcbnNLAFzzne2ShwiraaWPf2rg",
  "key6": "4KyBBoYAkrZCfPkpvagQ9PA9qUFKyANn4znnu5fDjhttqvtYFM11V1hEmSenhYd481NFrucz1ViTHwyaLPFuyneR",
  "key7": "4NXZrtxbpBtw8xAjMv43jMsAy9naJtoQMg6uvRAWG71pKmYuwpR4JKHtXV2abSjZJgiS1B6DX55M4jJVwwZG4wVe",
  "key8": "4kiKzh8WJMBqmFoRdSKkT2sfYihsBwaatXjJKqJPjVhNfK1kqny9sftx2JU1BKnM9BcqUFWwFcdYdcbfb8XvKGDt",
  "key9": "5vMpkEDLWuHRn5ohZ5gUK94zog5srWrCsdgN5CmezoZRAq4mLnFRWTLQCDKqPfBikvJXMjGuwpMtVcjqjpUsgNDb",
  "key10": "2YNuHHEWaQHybHt92FSRi4vos4KdYvE7eFVbYK5cLJNgds1mUaL4fUPTKaXY4mBcmvaQ3JYrEuhxySjWJaXty6Ka",
  "key11": "2o98sUswKURFYSVGFhpfGntmbVxN41g5mmxCHdLdqo6NeJNSEfPesLPfraveLorGfGiZXX1UdGwrYFD5ZtQHi5Y7",
  "key12": "5nmjiM4C9axsoKww1sTt3o5D76RHmYeMSHe3oVSimPPWV6juDx6G3FwK6259h1rJvvRgDM67P4mGys6xtjxYdHTC",
  "key13": "34ujnViiFvpCJCshM3Rg2fpNjV6kWMNGFt5u5jb9vvjw59p8EWf5uwo464ZNhRboAXumx5T4wcPygAT1hyDDgE8X",
  "key14": "3wJgMmJ2LMQ32yoKMyWyyh4dB1QYqGRrBNjvF9Ydyadhwdqqmq7Nj7G3qFWbn295UgxX84NcokoDC7p84JZQBj56",
  "key15": "5UVaEuPNNeiFUwL7vZaLgDwGdfh9jpMCwfawM71Y2C6pj5v9ffYgqyRxQFYNNcdiqDUxVxshR4v2VWG7cHVk4c9r",
  "key16": "hetAATzfCDSH65ZedND9tLf8Bxc8HJvtnB4S72BQdMx5EiHVGfXRT2hqAAfpZxRKHdshHwvEibD5NdM2L5d4wcZ",
  "key17": "2sonf6mLWeZzTgazM6rJEQ3p4E5UTtHoeUhYa5KYW5NmFWpnf63DXw6TMd1qVkjd3XdZbKb5HYd3eNBve963eHFd",
  "key18": "5xbeYDPtRZCMwngino3iAvHyGwGUMmTSgEvM7b52J4eHTesHVCbpitZyjcF2LvpoAYGVqZB13ARrW3ffGE4YmjGo",
  "key19": "5uCTCLhPj4Z111Mtst1ELUGt1hghtb97KcQpdANSsbX5xyfZvD7usNhozrbPriCoCJENrNgeaUbtL8g9s9adZ8uo",
  "key20": "5ELoNh6r3mF5A7f5omcRDoX8vgh9cmBKB2KCz2RQAd4i6nTQ4UfxJ4qD8Q2BosoVSoLBXSjPrurRhBn9rMvUmASr",
  "key21": "2CYrirZNbvcHHfghqYqTJCuzhLu7bMhAz8egPWmrLpxoJKXqP24KpLU3CGX1GDphGYwF72Fsb7crCgxJaXmPjgf",
  "key22": "2WeWfRS2PF3SQXYxzCmXdUX5dgmZWakCbgS2a8BhTeukWKYmjKbwJ3oqJY6zPMDkQChAThT8r8DVr86tBs1vruRS",
  "key23": "31AynMqLuZSvB3HuAmpPVmQo8vtLMxfjP6hD47cn7Aj3o1bWc5Aizffnp87uYazyZaww1LoNWT5Rzu528yfwT9QJ",
  "key24": "4zYppBAxnq89QZuZZVUaN15XvDBpUkdC67RKMzQoZy2dPebAzbHLpuxLmziGdGpeqwYPt6FRbukPZHvmNsDmmzpy",
  "key25": "2x73244Gsidt5T2o9tC1S1gYy7Q14dFosRm3a4gGvFFF6tXwY1tEKcxLghzjmDHHwhqfCcg3vpsu2xKqMg5e2SNV",
  "key26": "2BNKhaYKv3nyUArKGVax1qyacg6xxq6a6eoW6YXrzKam4RrnmgKuHH48qXLvFn8b9Rgg4CnkNRUMDgAP8sPsS3yS",
  "key27": "3tS4VqFvXoPi3KGaB6vwTP9LogGzomTappQmDB7gCYX3nt5V9X882w8AHofQvqNg1rCYEzfdvFbgeJoAfVooMvyF",
  "key28": "G1LCHMMGEsHnX5Jxr1sc6iLKGjHmj11pn9sc33QPwJYsfvARcVGYMyLUnm6wXpq7tqtzH27SYF4c6bfy3pcDXq8",
  "key29": "MTXX2FGp8XJgmGVgpbFEJhERGfKUvRghFhFMnJWTf12Popbkoy9bp2eror5XMDYAVQJ79eYrcbcLdez3VED4Sbk",
  "key30": "3yuvpLJdmy2roS5kAEF25KTMeJV5GZybrtASUeQnkyRv3U8CcbKqM5uqy1WCuunYWUQE22TzhWvJXmfUFTy52gyh",
  "key31": "55zVUD31atj67ctLkoYFKyR6gqYRoYKLL9tRHEKicgEckLctj94Wep11wn2DFYKqwksgREip3hmU5HjJYQAXCXir",
  "key32": "mqnfap3sjjF7pTMhV9kUZQqzFEche62QzG7zTqVEtbZj8pEkmr6wfiG1cFqjQZTexHsVfFmTrPoC43dH5hqUtDp",
  "key33": "2rh5JeuU24SN4GsLsx1CMXSEsZti4uM6T4jesw24EkB5R5G6SXJUiNwL7CqmExmxYRmLnFUnvXo7KyjVAEXaNi42",
  "key34": "PMMPyGN7dNxfDB5e1uktMoBwcNHBP63gqecKvg9iU4e5V3LAAqvCsWBY6Knn9bEUSHh1GdgjRt3BHcFYXt1kKvi",
  "key35": "2GgCZyvjX1cyqbEUBR5fGTi416orAJgRTxhCPcuKtzZTqdEAydwRwPZRTVr4sU4tGy6tPPvx58sChLzUaherd7rE",
  "key36": "5RVB3XpRiGotsMEbz7prbnBU33nwZujbSmMKTvV3qgDJGAWrYY2vYj2bp4veXH9BhvVqHYcyEBLwFc6UE27vtD9e",
  "key37": "2MBeUpKrCg1oMKgJCxmpdEYvud8kBhpGPuu3yVNky4shUDaJVcRg5LQ92kztWDfzD6vsiRJ58k1MjTGLJHtpkoPa",
  "key38": "39grUD1zFusazb4q7pEU8XdzQh3oLtUiKmDkE5Ac75Kjsa2r6jsbX4nvSgnKEfBPWKR7epZSzKqPi9XJidNZx1rN",
  "key39": "4HSXgGZD8pYcdxABUS7HLs7zJkHN9wM8SESiRBMJ8b82pdYqWLAK8WCUB38rGbtB4WEC944QGhfFxay8vrvM8zNE",
  "key40": "483zeBVHtKXJTQYDP2r8CeeoRBknheBc5tDRkPU6cDsJh2VgMLEARboFsvf8CKwYzweJmxWQbZtotikrppg5YgFc",
  "key41": "4bTTBtrTZWVuFQzxU55kfxtpS4Fc1H7bqKtKJM4WvFvA4C3LQSQdPd5sB8dhgHTTzCyb1EJ4e2ptRzGswjftT1mQ",
  "key42": "dcnJTawbUzLDJiyE7MEYku5eU6EAwPDq859d5vQePUMUKDxwVUqnLMfAFW1Pw5gYnF5hNagbcmWEsN7EZcRLvoo",
  "key43": "3CK43fLXREPVBmnPJvBaDc9dqyVwuWhRoPQY19ao5egD7sdfydGMyZcbkMBsCG4mBZSAK7SAE7JQZYQ8tSUXw2jA"
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
