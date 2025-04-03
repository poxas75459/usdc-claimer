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
    "BHR6K3wcLV38Q7okvft2ZiW5chXbVVvcatdUMHfmLLRTawHGcFkWi783jGKDqbErzjJEyNRwQM4L4AMzFQeLCXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ux1ygfZKuAP8mbExXeu7jVM7FEKiiUvuu3vL6TQKMMNpXjMoa8ejF2mYfDUtW191HvoKf2jcHsZ7GgqBNxorvTT",
  "key1": "3RC7uM9jyACrQwQjwzV8AwqBxjxngawa3x8NiPHSnQqRYADBSjzfYz9WmJoQe2masQTz8z1g1PGjTdWTW7xJfj2p",
  "key2": "4oycvv4s3spNiZ9wTB6SHbsrrbcw6yiXxkSQsVecqKtvj2pQawNhZ8jrdgyeTQguy8WZDchKzGmpU3sJg4XPNNHp",
  "key3": "NkbYBMxRtHsoVACWSYQXFwa4fpVwK7D3sm1NUGbSTXri3mmJsypUJbJJt2dW4g2KB8DZxnSk7e4UZhXnmrAVH7y",
  "key4": "5L7aPhkZ41r5PSj7VsLJBTVvsEJVFJupQEvBraYRazcfFi3W4G4U7svzMta69AP3gaqHzDLz3g3GjXfW6cLaAfGA",
  "key5": "5L4o2Muems3jgUQfARhRoTexQxc81veiGA6PBVowWYMpHEMJsBsEadW23iZqtnQ7qyLUYkhuzsdycu1PaMjfgKdM",
  "key6": "2ayUjpLHvSqEHjjSgRST6hwjb49BWQF3tVCkBVTW6yDcP6gces2SasDTuJsRUMPuVTkVqcxaSgPCQPgsmHum1QWQ",
  "key7": "32CWe7yWdKoG9nZuqnrxaCxbKzKJTgZ2Vw8jhyHL97mYNiAD9ypxfYXgEnKf58MQEJMCSTkJd744zBbQVTXGNyLy",
  "key8": "5DcNxR7gDEWhqCKWFtjPQmnpZrf8UgLhFgqDrStN24cnEPdbBfmawX9ivDjEfX2u18fpo8rppYyakgEKhQpQ3xHi",
  "key9": "3uifruK7M8moHWd5SSgxGRTmE2PS2J6aMR5v7sR5cFdvb1hRFqXrjZZAhCHxeLXY1VYmMvTLFp3W9Mgfdw7EDdQX",
  "key10": "4VKfMoUopAcyHkMruaGhCAyHF8DTZphpGoUupyL8qrnsHDv87nx8FKfKGd9UHJNb2dG5bNpKN2NycaJFPCQ9eKi2",
  "key11": "3PCLZzzWSRkMX1zhUgA8DyovksMpWfyb89CLATPgtW2HhCjKmj7tzpJCq8vB1ms1Bp7KLiqkdpFUZkU8VzcQ9zNx",
  "key12": "3JxUsP7sYSpiFUYhzPCAKeq2v64yEQPVVQeftZrSpPdgM6XicZsTHAZGYTBXs1JcmkHwucYJbMpeDfr3P1Cii9UM",
  "key13": "3auLsQWm2gffeL1979mfAooDotRrZkQ1jzEQvnaUFSZ6mTjdYAPLxStPQvuaZgiVfiSocMbX49zr4qZmWV4V3zqJ",
  "key14": "3KhPz45MtLSu1VvRbjwTAQdY9CBA7HfRwf8cpkPK8N4pMiD6J1dLHrJBcfA2xsJniULYAh6AVxht5WTMk4ikfMsi",
  "key15": "4t7QpZmmNwiPAZVf2jpBQV9uKHnxPe75FbqJdkSfuu7JRkvCSWp18ZznUeiQK2wZHf1AJJkT1Doz7KVQJpAL66mp",
  "key16": "3DVbYk2LJpNMGNCqQ9pH6C7HhQ9kvXuxAyi5WFYepULe45h8CBG8mAfBspqWGCwwc7p3SSfu5j3FLTi8aiRZnARK",
  "key17": "eHojhovsVaHfP7NrKwrVf9oFeMLqu6QvKJJaUbZCt1USDNoAmacPFtrf8PE4f4kmJV22AqXmWqPtJ84jH6kAMxX",
  "key18": "3SUwKvjScSywX8moYvUNJ8at3HPk6BSKWMKe1m1KE4YXnjJx6aHUAJZGyCWaFtL6WdcfUTE2KH851ue6vcJDEXr3",
  "key19": "4DcgcJrD9HT2NknUmHGV6Exn6BSq52EDyoVvBi61gPE5FCrHoJUZ5iBhVUWnp8MHpCBnmM4tFZ9C2AKBr96nW3aP",
  "key20": "4WJFpgTWTVai6kgfaDKXka48GSh1GRurYDatfuA5Ms9arr26gQtnD1NSLDTVKVpAPSnr88gYFu5Hk99a8fckB16g",
  "key21": "5Xqca1YNYuC4MRpFr9P9AQZoxYG4PkWBoAv2Kzky1BVGXH4nHpThmm3fknahuCGQTFt8j1942Rmuw3HdCLtd7QPj",
  "key22": "4mRC7X3wMA4YgTev9m2GkRjoWugWQNJxS2p92KQWje8TWwcYXaXC6HHb3ajqwedbiLWabtcA1cigxvUHyNTvo8g1",
  "key23": "2saDugBNQk3Am2mNYrisx6mjqLL6o2ZQmTEBfRCXKHDJF1vNubn3HtLpmHaNe4SKVnHBV5tQAu4B4zMqgTBKPGUD",
  "key24": "5UZLRetDHp1qjeMmZT86GXJoFGFPpEQQfz7CUCzGEfaHD5PZmGT6w298k86S8rduo8p9Sp8U5UPhbCztzQg66xqW",
  "key25": "UpxBouUDyUyuxsKHc8YVsfz2h6xNTWQ4ZWJoFNXRDFjUfEQ12nJXHbZNugP7nE8RZPhgAtZLMiuB46GcNeHt78X",
  "key26": "4C2PGFk23bZ56TGarc8jxCSfC97N7vCLQoVPydfrG96PAVsiKDRREPVHf7DUfYVMByrkhfBUMModMymRSteex9XZ",
  "key27": "GkKEeC2z6rXVVRgiUGUC3Rvse5tCVm4RSGpFBwFeceQjnK7hsSZh1MQsLUDt2AwEzdnNJUBDv6Mqd5fXAqWMLeo",
  "key28": "5ALhJ8eu3LMFoWJvyw42i1GwLov5zyGJfcqkY81Tt3XsFPam8psJVGoZrpbMNGTE9JY14TVgLu9upwTtpmyqNW2X",
  "key29": "3wxzjGqKHV44MN1wkCjZ8Kd3fe87iwKtME13JfofXVgQUyaDWL1ce7aT15JRTVoL9JhU5HihF3bPygVFTVEV2fGf",
  "key30": "5KfzWhYcR381QmjENmrh8vmGhWbvNnqzKFQ7FaHBA22tRJK2Ma5G8zuvBQ6BRPuzkEgmnMTrLYnCDKZhv4mqAYPX",
  "key31": "5qhFNSwnQ8jseUk4rnYXyWVxqbDbhUuRCicbQVWzh5xNP1KfN1nPLpCZtRaUXtEG6eiEWGYN3Lr386VBmMuLTGNe",
  "key32": "24zFp5RiN9nb2UGUx5QCmPz4MdrWLL2gD2huEUULpqxUdfFeg79VnZJzVVjBjErP9nAgqYcUxnSq3PuqjTv8AoSV",
  "key33": "3y6HnBE4irfB9t616eva79j4Wyrhah7JCuYMPPxHwWuEv6pycqRH4EheJ38H49vAmeVPsPJDMsJAYu4H7ViN1hb6",
  "key34": "4KUgMV8jyUsYj2eKqSN6xxJZqSqNorZZeKaK8cHiw96ZUa1iERR3B4H12wLy7LrzhmnfmS3sqhySph4RJAQeThYJ",
  "key35": "4KCXC4X3o7akJYGuBuhNPG15e4WgeXy5Qb3LQVkwKTqjACMumxhwAQ6XubN5SEEhruN5icnm6Zb2NK711y7aXP6m",
  "key36": "2tJK31nCMU9FztGNK6JkuLFa8nxCzBKTG6qjMARZpSFw2uTdC8ieKXsNt3KbS7qFEapXi9zX1Fkv23vfxvPMfsQL",
  "key37": "3YCZ7ujSYsQigZRdU1zbhHVYp7NCDEKDMG6xW4JcrACD5ESeVAydnPr2x4CB2rJ5XNwNPKB9CegndfKG3uh3bDpw",
  "key38": "2L5cvc1eUR62eZ1BruZjcR1vRMfehBLUTtHh14TvqzYF1aiczpzVERYv7MvDHANSPVrVBpWPaMF1PMA5eDnHCeLh",
  "key39": "5rNv3qqQK6hkYemP1PyjWsWNuVYNCU5PT63MPWYDiFeUVB1Ef6c4FuVqwNtLehCxx4x3bj9epaJqDkesLbwjRcCw",
  "key40": "2xnVSvJ8NeeEYeaSMED5vs9MBJUBmZSzkaKbUKEGPZF9yM5QSH2SbDE4qNEnAU87nGW4ZNTfxokBCXT2PcW5k9t5",
  "key41": "W2JoJEJcbqjkZiCd3gfrgYtaKJAPUu4VCFN9gybJuXAxLbQA1JehUP5JUNDGySRY4k9fxJGPixr3fFoMJ4WxDPN",
  "key42": "UycQS1kpgsmP6iruZcUDLesitEpLRaxzqfTAPcGdktn4TDDszEZRhss5TwbyoQknUXQYWvoBmVsejBfYVtwyG6j",
  "key43": "4WMYynsM7uttKTNKrQEPpvqQEhXU9owKWjsiJfCcrwBe3i1kbbq2awKaWthTw6XRoqq4C1PzQFjqYRzb83yg1N7L",
  "key44": "3B1QjQ4R2JAAX57yuqNVUzoYdMQ6bDYKKeTgTU9pjcennL1vE8zj697LJoqw4Y5UuYF9HRoD28K5DMow57npUjyB",
  "key45": "3esEn3HmincvrFWEGjk6rXVswasQkYqmU4oQENiapqaTsynyCkjfE8CgxATBq5bzSRcwvE9seCwfsDL67KBkLTB1",
  "key46": "3PSKyuZJosaHbZEnRHGS2CRPb2QEE7ADuiV4GMvgkF56eRL8fVHq73Hitprk84kWLm1mR3TwX1PR7ehe9roNNFuC",
  "key47": "3ViwmHNYdZHDuoAvxmpit8UcnHjCt2UPuYW34iTnmS8W2YjoE2aJib9HLVd9MGdwunGwE54GZGypDXa13MSakCAR",
  "key48": "TkqjFrKpzx2Xq8r8pZKbjnDwwtgdSTJfBarNS5p3H82kNgvNGgCUfY95CM9cWrwRgzmSAm9VmmtGsugG7Vc8qsm",
  "key49": "2v8w9QMSg1ZTZB9EYbHymtEDE7q95ayHvge9ekxZwMBEDY7Kk9pfzpdvy8BgKjvts7ZU96XvJD6rLiUxifKqC1Sn"
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
