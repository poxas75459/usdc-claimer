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
    "mHBv9KN8F2yAtuVCHfJ2M8beNiGP1MBjf3Wz2L7fsjdh74Z1pXSVNSrqTeCb3uDRasrnwHB3Bxv4Hybg8PJsZ3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GB1kKXVPHGRamWPPSdSxH45TkFZT1kCxeghscM74JFmEbrVdk7zZpoZDbZZGuC2zQ4wiZwsa7LuHYLkhcgh6M2w",
  "key1": "3h2SkzkQxvxPC3pV3i5X384jEa6zTrgXpgje171mAGTzTSiR3rqEoqFE5LrtPVwgMJhzVyinePSjjrLCu1bHuJBs",
  "key2": "56H2S1wd5sAKmxBU3ctUynrC4FipKQX7YBkfGfiECq5WTRFbL2XE6cEnW63QfNTkAAb4YGcbcvQQcHHJ551XL44F",
  "key3": "CqV71KUKT8ufHX4VwuerVAEvxW1DVT7wQ1RGUJm7E9Ny9HjhH5qXA6cHe1hQiJ1YtxafycV1xQ5UQViqAM5HzrB",
  "key4": "4ha68VQFtkRYvKghAd749MbYvyxbtcqqCoAayFmpDdM6hoxnGmeXGNFbBaxi6NxWvZziYy4Yy2z5478wbbvoh83a",
  "key5": "2xiYfWJAbZ5sY63G7hoejYVsb8ijnvVa11By2CZvWiL5gJ2m7UNxkPa68pUVUzurZysQu9SE2Yg4dTB87oAJtjEn",
  "key6": "3VAyA7TPT3JEqsqVw7PVmKdadi5mse7bvsoEL318tqbxgkEH2WtMHPuSsHRZskLRFHFhZdLEree1UYiJjAFC3e2v",
  "key7": "3craXx39ccMbdrQWvDeSZvTfvvD5keyvB6SexyRKzkNbztgcbiHW4MUcXHm5UsRwgpHbic6LZPeh3TVE3bbK8C7o",
  "key8": "2RorXiQQQ1kY35JPE1NpNbGepk1JuTr78aduTRMzGis44Nht4rMkww6K3hkyvcKkNKbsrxUQhueoiJ1KHrB9G5Kg",
  "key9": "5yFk8kdg5CYa68WF5JB2x62Xun8kVQUXwxfRE58mmgYHZ3vdMoVhqxkUzvMAx8jeSvz3pCZh8DdJ6bGwhRmnWo4A",
  "key10": "4V36UKyfduXG146MdWNEmQT7J9jcLx23S2kh2NgHaoL3kCibcZ4YNWSGpXbZg5H69Jjk892dsWG1xsTaq8s2wMVg",
  "key11": "63rawLXVUyKVGKwofj12aUte7zSXyeAjkKiExXpukN9wMSG5phGswUeJFMhir1KdBiT6SjyRv9np6iLXpkaW36pN",
  "key12": "zLxrb9ypGhyQzAfBihjmTveP7mGE41umRreXgGb2aFPHAiTJA2BMTQNSWGBWMy3uAhugQDLLsPFVUdtiaGAqptH",
  "key13": "5befA9iWvH71f8ffaeQLfR2vqGwkLPJU9NVrdzdrEJwk7iQDLk1Czac3pWJAPzpPnYsjjN99eqXN2BJuqMdgpC4Z",
  "key14": "4JWDwfs6VG1QSXFoVzALhE4KbxfGWJut4tuNresrYxh6nmJP534iukmj34cXUJBU8WJ4V618XotEznampr6hqzza",
  "key15": "2StDhapXZunsQK16ZLLurXeSqouS8c49noTx9VEY9BeyBB7ehUvTpwAMQGu68dpMR3hChAtFLn8NURuT2eh2urzL",
  "key16": "5FVKimC4gPcoEN3dPQpxxVsYHaWVidYXKoh37FwyMom3oVo2Nt4gNfD84EzJCQiKQDHXohAUSz8rGLBo4p5wiAiR",
  "key17": "57MH1BR4NrnNy7s3YsqdQmxxvmwVEQzjcYwrYTXwTGmkHByLSwuhGU7seLBmbju7p89iU3vRCEnVrmcp5Zh5ktH3",
  "key18": "1N5fHKaWZ8vAgCA2gXUJ4duubLrsu4DhX66rnG9vpixzn8tUYpDhijWv1bMmDkDPXNGip9NNCBRt1mGyswk6hFj",
  "key19": "98PbBN6vfZTqYjkQxxoUoREn7DJWkj33GDmgdpnN8ZQ1m2JvNiqUnq3JC2GheoKcHQSW7ErMRWkfVhuXbj7y9iZ",
  "key20": "5dDipJphJHS6dJidtWBVvXARUX5hcAoELhdVjdt4RRipD7dTqpWecEFP5rH4tQbGbFUykkvDsjB4bNtieRQgGTXD",
  "key21": "3uGdiuZmuEFJaCgwYXSxgqQpAnTdNfb3B5VTov5Byt3dC2NXBVn2iaBLXFu8K8u82wKquigu7PGM9MAADVWKBYGp",
  "key22": "4SKnm7TDfTPiwUxfCf79MswPmDEofSx8K9grDPn5VYgUpjvbemXpGuD9hENiBFySCbPpBEoFNALBReeEDfwEifQC",
  "key23": "m5yrC2kZaiLri4TkNDDgd33csM2o6EKdRKZaUSaYwhKvyKs2oUfPkkcGQvBFTiHdFxEK9oYmgfRxAAdYuQ2czVb",
  "key24": "735VmB3pC65d9HnmRvZ3RhmvEWw2yGtjiwVfeqpoXDgyC3JCnmfrrTTwNtxzYyBnoC2ZaSZbaQKP2qrXDxfbQq2",
  "key25": "918WzQLMrL4ZAN7eK4bkDHSr75HMSRZfCbjRCvkNCHw42NonauoYaM1aCEojNR1DXD9pbXg9sNVWWBdTajjUAwi",
  "key26": "4PuG29xDsjG1Vccnv2WrrM1YojFqFsDtacQ9o2JfbAZx7mpwLEsVbVJgnK1wxKsdkZFGg1g1XCB8CZnF4aQSHtaa",
  "key27": "WQ7ykpT4JEjRy8tBMUuog6FkxqMgoDRc7EfBFiEMKViby7ktuQqnWKam6R7ceRMTEST6oEGP7cKcEJcTUX5Tfrq",
  "key28": "4WhmEbiEjGmiFdKyQSHyjDZaM8fh7AuAs2EHQXWK8UgE3ggy45rEzXpjpkByzNrRKJ8JtX3nhpmTiRqXSuoszLVB",
  "key29": "2bZS9orizhcQmmcpisRsuaYuzzs3QdF8SND2JSzWe5D22tgoe2U23Bbj9JHzmtp14TFK37WDvDpbKQZ5q3CkaxHe",
  "key30": "3pFKZPp1ZD33R2tLq2tewmyxH5KqxsPLjxzn1MoRGDgLoWuBHh1Smf2LSHFFLBAs3jZQPyh4f9nFbFyubzqiSDcS",
  "key31": "2JuZetYP7Z5gmMR2EGDkocPuDN6fS7nCkQWvmX5fsZz5WErhUFhyHKSPdDxBW9g7vN1Sw6fQc8BCfPQASEzuCSu9",
  "key32": "29xFpMk2NnFVK5mSTXSbrHJGmKtViBURGoX5pFi3KwuEdpyTajoBxvQvjMUtwmkPJ5AqreTFHVZsC1pAmxT7FnEN",
  "key33": "hyJpVu9fSBu6BaFHeDJ3wV3sGyGcaz2sRLCoqrnMBZNmrRBvxkBMSGe3dES72vHL5BRwa5Dds6CUYiFg4rdyBGd",
  "key34": "2XZVMFjRacvAnNETdJKwQQ5RswGpp9CguF8k8QzVtgwzNfsNLwbSdG6XE3CaM2oEo3S3V25hQn75uQtEHJKukCj7",
  "key35": "4HGMZyxqEn6X9LAuDJ3NgTomcrtJSaqGZzHMpgNK4DW1jnEBcQypKxmD4E91Qqd2dy3LXV2SVPPZruWJ47saCkUS",
  "key36": "N63MSjMyGRUvNmwsD8UKzuZNnkm4bYf6f5ktLWtdUZzhYcS5XBi538F5B8AGFd8HGnwTm9unPZUaKF1vTh1jAXz",
  "key37": "4Qe4WDx7aGLhLnN83KT1UohXaEjHUeD98W913RqaAj6tLtkkhQc5aJ3WzfzMtVvSjQj7ceBsRaJQF75zy7aEwqPa",
  "key38": "3ifzGktXfGJfnzrabu9reCjxDLuVEX8camRLaamGTYvPsBGaf2BRrt6ayTuGDocsSnTQr99YmqfGNDWte1jrVjt7",
  "key39": "5MU8xwQf6MFEAdRTkGFfkd7KSSiT59c9QHKyaKywq7E3EGePVEVswQHR7wFmNKJZodjoyYipLdAHYoGT7NyNxRYL",
  "key40": "LRxgpLzErBhNxugCTZt6ygWMgheqVKLgeb7fe7b3ukXMt7JaXbQYU86n5PEyBWrfK9h3YxxrsLMygMwgeG6WZJi"
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
