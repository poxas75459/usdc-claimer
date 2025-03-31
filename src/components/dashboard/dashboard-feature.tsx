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
    "2Az5CaaFLupfnAuPrsUposkVSbv212RPKr2JkUK2Sd8Py9RAbAsVCzRu6R9pyzFRNek4sHFHhcVFZyDNDaYC1vYU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PiQZXSv9EGmmTNmm9CKD6q9H4aefXf18NULSxX5FmwBXKzVVbvuztRhJmudvmQXtrDCqrABJBeJQ1K3DchSnoZ7",
  "key1": "3U8bCi6h6YCjVjcdS4pTK9vpotptLRPJTVfCwgtTMP2GepwPPyDc8gd1UkEwfmqrNYxMnSRAvL1erWgKewG4Aqqy",
  "key2": "4iSGV2SoBBFXxZZifbuUTqnPqhdHEgku9bdKfoTPcEimWsfhjdFTMfRhnXrNo9uL1cjvuy7KUHnD1xXtFcbAGH6m",
  "key3": "3rwFvcwVxKYs3UihstYEAqjU2cz7PKK93m62EpMjoqadFPH1g8ciGqEQyKjtUto4RUvSGgtgBYoQaAfR9xo11BeT",
  "key4": "dUncbAvK218et25HLTVX8a8YUo2WqLMEXbD56jMbhtiQCRWVPeDe8TVd52up61qnQwUjj6xRcsKYskZBBALV4W3",
  "key5": "3kg8G5PViQgK28kQHFC7g2B9tAZenz9eUKmsfHvRXzkmhtwBqqB8JjR5nBpVGqX9roZ2JhXHAeypstoGwLjivYeB",
  "key6": "yTXvCBLPeXqFRKCnqVfisDtq5upChB1HjycbN11AeLKwRJJqbEXHUcB9HiNLfQYv5qP5RMXbievrhFK2HtQE8SK",
  "key7": "5ZU18mHv1RhnLGqj9ooLMR76xceYnrRj3aoGmzrHg5ixPZCKDGMfunFoKsGzqnSx2Xbp96X8bBRNwxYMCshaHiLY",
  "key8": "5xDfkkvnZQmesfpEvDojirGB2dHmR6ATvZzkwHorfws2dRiwdEfF9wRXVJ4Uh8r8oLBHbwAufZnEfQb4jLvmWvb3",
  "key9": "2zczUBzCcCmQ3DCGhzjqn3EtemoogXC18KLoS5jsS9NbCbEq1tbj1Roiz5A9c26fuMLSajkLCvhHEpw5Ab1zthCg",
  "key10": "2EVcGd55HrJG78BXarzrY44Bg98JcJrUwPpu4YSEiKv8aU28xkEoXgz9XzEkqqeB3zhKEZMqJ3Q8fioCHQczzdut",
  "key11": "tvpP9ag16sMj5fkmU6VkLzqECRQwTsSAAskRYcM5MU9AjUaNmHw8XeMmVtJe7D99LvELKmHvioKhEVDLKxJ9ibd",
  "key12": "2Vqq5iZ42Msd3x8VJ38efMBCfa8rBGegd4V6i7mjcbop6k7KyTfWQGKiziXYbfWYCsgtcj6zRbRG9uAfZbN3Ep6o",
  "key13": "4EQit9x8mhjE8STkaQaJ9mQBxAErhyyzwMD1H4Q5LMMTbULn8dDsYZmqCHCX3cofiXWXmgvGsDG57vSHwty5x8Cq",
  "key14": "3NozJzrgx8UJSiyj9znieNKHnjJvYWSFQycoUWrfWWYSfMktRQqVgLgrJuWFMy9BssDDdgHxejJbQPDQAr7FsdX6",
  "key15": "45MGSBS3b3ahhWxhWYaE4k3iwQhjoPdqV5owLhpHxsjryTyNMAWc4QKKZDKQCgUrhXrmNHEpLvpmTU15HEDLF39c",
  "key16": "yT3d181Egq9wNSHcYUVz6DPhLUjvE6F3Fr35u1qhSwRTQvRS5gKK4V5ngvgPWRSNBjfJc9VbRQyUJDX474UuQBC",
  "key17": "4DPnDU1WC3cNZ7pY3NQTZZCVCqf5VK1WnyNmaByqfGNKKBmSeYdtwpEpCizYQELaNgkKsodVm8bhxTL2n78T8m8g",
  "key18": "4BFrdmUqU687ZEkvWGcosjM17cJqANMFUQVTV6nNETH18eojwUHbeQ675CpvGHX6WjxmzayjQNybvZwetJ9jGTy9",
  "key19": "5ArvpYxpkqXVP84uTd2CvxreXR5d29yd862mFBqvdGdMrDdve8VkPuQ3Sx6Xiv4tuBTnA5qAPaHt38Bh2DwtHqv8",
  "key20": "4aJoMXDJZvyjaYU376TLQr1K1irkk8oqHW2Lk1vxSVT5pDFC4tgUxjBN1cxbfHU3WnFciAEmDGjrUaq4bbr2sb6x",
  "key21": "LNyJuUqgVmuh189ggLjb5jgKyQtYZZAwAdFGoJRjFSCTch7hK79jAJTdAzzCotLXq1oYZemAa7yY8wzBUgNo7Cp",
  "key22": "HELxY81puVgNb6wMQVWhZAbfqvSmesbafNJEdjipFZoFov9Bcpz3HeRAjou6zvXgWMQ54G47hYVUQWChc4PvyJv",
  "key23": "2JTD3Fh8X5jYARAkpFXXrCnutDyxJ4j2iWucoVxNWVj9QMkC9yy9sa2nhsc18R2FUHEbAcogXCs1UF9F8h34nff",
  "key24": "38tYus4gebE6UiLLsf8hVPw1ctQPmQWmqU62irMXZmGE6HwKf7RyWNLvSTxk483A6rKKbfuabR36YMAnhMKEeCQF",
  "key25": "5Za9vpZxWUxd1dwaojrg26zn7Jvn1z67Vro6tooaJU87wT4168Ye5XcXuzRKtDc7ErVDQZXpnhSdtgMUgvZL1A1e",
  "key26": "2cwqiJBxdsurhvcBKKgD226hxwYSz77CwqKzsYTRemEBFFD7vtrtDRpEXUf169KjtjL9JHhv58yEbmXP6DTTQ6Ls",
  "key27": "5pBaeWVWsqprnnecwhHMtJ2tWxQEmksHoiMuAGJVZdT1crHhKw2aoHFVLTZVycZzH6cgGUiMMn53s5nFytXPk78n",
  "key28": "2vRgZoR5boc4M2xyq1w5LBFyQq8QrXGARiw3cP8zxBYQMvEkrp8kD8dMcaNvquiRWnZHbFp4ipswD8bk1acB6dk7",
  "key29": "5AakLFB7ArQM5RmuT5TpjAN3iPX8ajV12VvfNSfqADZK4z63JFrhEXZVdjpPNEAspUTQbzQcBhLzCx5xGy8CMy52",
  "key30": "5n777p1KhEjr9zyyLTV9dXHA3GrCgNE4WJMrKGUEYgCAgHv9irYFQAxjqpr3jKGiKTLxWHh2v3VpZiEzS696ZsLx",
  "key31": "2TRbxmi74YVBV9FbbknirYwyVdPn4EL4djkHsGUZ6aEL5iyvJyKDgmh1qinGogZKPLtUtLiEsqoEwtCP3PUjkb8F",
  "key32": "28LtD5M9ZSzGZdMbeWHeWbk8a1NQk9mNGd1QpV2mJzQ9yL4fBY8t7niADTcJACZVayLjeKLP4uwMQPybFhhReBNP"
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
