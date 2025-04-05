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
    "3tmZQn8YroSARQPpQFeN3hH9DWxPecTfN5CRpNtXcm65c91FzabXxpu1CboprvW9hxuMA9ufGaSbSPFoP8WfbtKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22oqde4bPdPmoyibbjjzkPQLzk2Cfr2PcqJyecEz6Nda7w1NGyBE9EJ3w1pTxegzj5SsunKPbB2EFtT92AkCpmwy",
  "key1": "4FGRPGSSdjqKVjg6MBHQ6b25nWjcnMpFB2NZaK9e2LgBdddhmjuVLkmwFLLB3Tt9WGYi2cxz3W3Pc6cH19nNzHMy",
  "key2": "5fP6TVu8aToBdpTkkUMuoKyE3mb8XMAU4nLTgRsFMukeSUGf81qTyfNS49EsYDeDBx3o11ztY4uvfrsx8j22qHs8",
  "key3": "2C4vrsiysDyM5i9VRaNW3QC55yYA8wgZkzkzCzUyjpqqSoXwTGNyy8bmfgiufgthNgcf6G19ZLEnEz4pkTzLqrRa",
  "key4": "5UZGMi3Cpq54naGfeKFaUW5Wnofx4d4zuJvaRq6rsL2cCnrQGifzHWNp2JLTBmTcLCyZVqgLD1TPEKPCezyYNSMT",
  "key5": "2yL4p6Rhc6cAdchPsSDSBADFPKkP93MoHDxwrz3VKG7LHenmzCL4QhHhg2wnSShmZgwZbKUYBafdoaQRNQEt9FyN",
  "key6": "pRXZZUfA8PVjjVtu9PACghj1picvpvxmFaQYr9nVzJv5fDMVWCiGSVpyGqSsQkCKKjYHgwETpzNHXazR6zhxfiz",
  "key7": "4rmecp6UM9s4y1unUEjoMCqZ47qLPo5fSrZYWDMQotoboWCkZ6n2HiSp2Bbzj6MKsezF4y52qjY81LqSsBp48RgB",
  "key8": "64bFi4wqp5z689n3KyehGTNhTnYs8VGBZMuiXKsQmSLQW54wtefKV4RjnkE57QVm3awLZH7zuddVRaChDdjKqD3s",
  "key9": "2xVDf2htTDhhRYbYrH1CQZFPdmaHj58DJ6x94yK59DEBv6szAGDacDKMkzLwTkZQu24qewqRSqXGtvvZHgSbqiFw",
  "key10": "vzJFXygatd57czE9iKKg21KmbUrPaCTtK9SKubtkg7bxQbyg7GLqEhvrPuEDf1WxvRseP4GM5FwPLyMLkyMZMf2",
  "key11": "5n6MRUUPAj5TXY5rUD4QaTdZ6tRMiUkWMNddMCtzFzkLxMx1oYG3ZJxm2Wwk7cWtBVHGboWrAN4GRofLrvoCDJ8i",
  "key12": "4UyNwi9Mkq3kwXqiQvJ8oypFtYHtHGfYk9vkHRkhcL3ggVi8GrL4hxrHtop5yAPNEn7oAsg3jMvSBDwjUw51Vzi8",
  "key13": "pMJ9KGjUofdpNvR3LuC2Dn7JrrZREnq1KjbeRdHMpFouCsWeF3MNtygBW4bcpgFX1CNK7WR2vYxjFkZ6ww5QiwU",
  "key14": "r47eGpZehGvhMGz9DVpxcS8joYkh2YSYbRp7uKmPyaV9nU1Hh5cdoA8BTbeyKrfbaSUDB5APh9FHcHmZpRoMuiz",
  "key15": "8NDdzU8bZaWztJoYrn7e7kZxUumneWRu8zLeGTiJ4TKrhsr4iTQGJ4KM5gdwGJr76C9WJ12BTrSHFq2o4D4gEcB",
  "key16": "2nNynoatqsVdQALfhNeUo2Zvn7rWbg1MinB3qLFgf64ch4Rf1f4zBq6NYrX6ZSbM8DQ1JwHonkVspXZx9StCeUN6",
  "key17": "3vWfnqJbA4xNeSze2iZAFTCWYwQDTDLacayT8LX6Yb6rXth7P6YpYtsBhkER21rwu8DiGpc6hjSkVZvfY6k7CsVv",
  "key18": "2JmVq4kw9RmL9vX8ELEW2tG7etNaCFcTwSwyTicRqAkWNWTHu7H8WMjPMWnXjwQuCq85bSgbjrcxgunNtxdM4r8y",
  "key19": "2wyvwStapkpmE4UbsnK6KsQSF8xNqWsWez2GeuPVrxaQyUEZac75Fqe8gmSXNQLH3esY7YKk2ipmrLa2qBiEoj34",
  "key20": "517r3hyRrtmAJKzh35sPnbTJm8vWAPERtLtGCseUnTjEJuQFhP2AKyHmoiabGqAQ5EuQ1cuijsewJTZCL3a7mFs1",
  "key21": "3GF3jGEPVBCjBszpkZYWaK6KMeNVB8KFbhgkhKbWtrQL6eTazh2R28oBD9iXiLgdAgHUrPwwQ9NDEkWMKBcxep6R",
  "key22": "5MWbT3NnocdGmMGvWQUbQqbAEZSwrp8c69hFh5RkHbwKHAdCspAohW3eQhiUWYMiUK9x156cSk1J8Fo7tqk2DEyw",
  "key23": "s2F1Mu1wxFDMTn6XFoPFthQCUpYc2HarHseZxoQoMm8SEAgjugAmAYaUf6xWCA2Qd9nGPngkKoy3LK9nhjUFYaT",
  "key24": "3DRHCbQ2q1t6eLPQb3SmKPzGiwyS1YsNwgekCaj6ikWw76oL1XNUc24oX484fYxW6mHPxZorVnZBuZBCChJdS7qp",
  "key25": "4JrDbGrxkZ2ErTvE8jiVwMiDkd5xiNWfNHu444uJNG327R8XCFBVot41PJRr1zEvPsNJ1YsCAGfShRkA725Jh1S6",
  "key26": "tzgA2Ppw8V2PC5MmqMfKJxU6H8XDQs3swta511CoKWGsHyVJukxoSgspdziP4sTPgfqNzpPaEhy2zqhyP91Z1Xo",
  "key27": "4MGZ7jVMRj8mheCFfmi7JCvxjyr663X1x1GG5PB5xP2iWfEnuiGTzpDxeKXDPEYcvv3tozBGFqKpZTWm5tjuYTfM",
  "key28": "b6Mp4AKEXgUenzNufzgV7oUAhuhToV7oRck2BQeaqvcTEVuW8zTHMxhCRyQFp9Ho9dKhyUuPTM1LSwFhL5YXApB",
  "key29": "j1GHzANxXPuPmJDZS6zUz3BLeoc7hsrhkbVmEaUSRBcWfNEPEXpMA57xrBJJ4zqkJS2Zcf5EyfaJByA34pi1vCY",
  "key30": "5Rx7CNixCAafD8XMK36t4FMs5y14raZ1FSqg9YdYrwvnMQZjR43XoD2D4tZnpsKf5rN4S4thT8dJucrNsXx7EAHp",
  "key31": "3Q1WhpviBRnZaFBWTJiyYacQoxz2KJk6NYUqNRtNe8oPqEQq3R3rtaR7HFQfeeFrii14SwMQPKpcRfTBjNtNxf5C",
  "key32": "3pDobNBDrpWvUyMfQYKoDqnpqN7C9EhXUq8TWT1mjstABsnyKimq9arTq8ojHNdpr42ijV56NFap4nFLFJs7S2eX",
  "key33": "3psL83d24CDVcxhifxdJY8161RFH1RECo2gYxiX2Avn4Gsk5mDP5zJf4W9pjM8cvH4deZHBm4gexVTL34qg15vDC",
  "key34": "c1U33ootu1MJ6w1ma8iZ3tTgX7y5SUVu2Wx8fwRyYwU2LFDh9ncCXy9tceTBYcGNZjo1hYKUCyScnZCzM7A9Ecr",
  "key35": "2oC8n8UrJGCTMvpkx4jCSdvaiH3iRACww4k1iAqy3qJcoDF2CrMKEb3FCFHegbT87VqGQdS7oBLWRELcRC5yBcCW",
  "key36": "62sHm8vUZVh8B3t8PXaPQdFfX1zAQXwNjrYmTUTUVe4yuHr9xAoif7waxDj1MzPe1RD7SYctaHbcT6Gx1PxbqFoi",
  "key37": "3qZHmMvfDPPD2kRv6PN2izUrafczyiSLHxxWiPjYxri3iKZvpNi6EvUepDBo5H6hYmFZprP2q5d1SS6x4QyiaidP",
  "key38": "3cMh35YLJSQRYNtcCPgabu4y8t4PpF5swcwqPGYW25GR5vKsMwWjsnteRjx5AxyVke5QnHTz2MAppnxmwqpQathC",
  "key39": "41PAHtd8ugn4grjJL1EqJUZos3bdfE5qviVtGT84JzFuHR9PjVPdvK6b495XgbxCzyW23h586Yq2GKhQz5mD4P9A",
  "key40": "3HcVgrt7kLHnLVaRQj2dqvrZoDtEG3Zoxxe22uhTQCVKNHKptTBofRYQPSbn3HNgJnaVwzST3qtMugyraKY6SNJq",
  "key41": "5F4fhCEtAQPXgsPCiommaggurLEmpzUaorZrMXwQjTnmhooSSbR6UBu7QMgGRoutQRkxA3Cca7r5VjErtnd3JZ1a",
  "key42": "3kiekvosjGBrUFDBLfLe3TW2iUAkrUs8MgsefKmWwYgGQPPRHkHx4abbpGEQSCmULuZaX2nwFEJS4W4kUYaMFmno",
  "key43": "VVLCG7xU9L6AHb7KKrm2dEgrHkpmS9GyRyToWxp7KEAyg3KDA9MRJCTUv8wqZvsu4xVbRPQPt938wPKsyohWj2S",
  "key44": "4cJDkTV5q4PmT46f2CLnkBNofzxvmBUSpy5bm5U4ocmuuqyRf5rh93GPtzLL1P5uz73dtEMSfZUcHgRiBzzAv7TT",
  "key45": "5ywNg32txokwufCbpbqhiYvZa6ihahCR3HPPWbY95dkWyKBNLSAdsGPVvB582SkXu3HfjvTdN9utfvGHxyZtUYRA",
  "key46": "4W4Wi5HYZgj1YFiEAufuPYob7LMegtmGttzMawGGosGzL1yP9r6vdErprboPD39Eohe6EYhPCoqCxiuYakhEWX5A",
  "key47": "5WWW6HjMgKad4nFc6wSidEsY1Lro8BpeyY4QF3P7LTMURBWaKZFfaNcoyCpkz7psrNbhF5SFYcM6BmGbDpTueXe5",
  "key48": "2mk7o6f2WzFvp5dXsnTAxujotzdVdhrPGc1xk4DJKCdMG4KHiLGZX3QnzwHB27UiLbyTg1auJ2Y3qT2TzHF5TLYv",
  "key49": "4GJUo1uE2bvH4GYF4yi6YChdikoTCekxGz3GZmDkfYG2ZNuxMtzwde8HrD4tT58KWD2RCDBytRFSL6iEVwuPeHWk"
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
