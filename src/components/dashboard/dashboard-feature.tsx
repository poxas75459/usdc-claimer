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
    "5QxupaCX2SEftGuyN9QKUgvHuZL7deuqszN3sJtWjNcZzduKFP4sLh7yUUAdkMJUrEbemPi43zfDR5t7E2fmwwj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24KprJMBe1rzn7C8ztKsnbm7CUTF11rGP7Ph16jrQVy7Lo2XxhHra4i9RpmXzmbh6kGtxKZS2LVsRdq6s8b53h8P",
  "key1": "38TsViud9pDi2UznB82hswFYMjb3J6BhfzHzAkWxjYXWtd3EdCJNsS3EUiTPafhegKFYD5v8x6KSdgYjaXi9BYj4",
  "key2": "4xEtCZdqsssxuoNjK77NTCGPorPPhvoZM7BWdBdzj7f64Kyh4je4phnDnEAYjFwrPQBDZgf59baZETYUUWsxC2uS",
  "key3": "rhrePPtwvZNCvuBSf8k8t941iZ3z3u3W9eAiedsZfScemtBvPEWc1CrcFzW5BFVzyTkrM9CfBEZeR5LHjyP9FYp",
  "key4": "Pucafw8cZfnGdphPpWnwvez6eESaiEVgC3ULNMnT1oTgcJWaPjQDJGCssikWwfuKYLvcatqtmDJW4fXaxJmuzX1",
  "key5": "2afHQDvhP21ZfHbGADRA4SFrJqcJahEKH71T4wsvGys9UUZ7339MZBPqVp7Eb1Hf4TVpnLpCu6oKrD19yDwm4MUU",
  "key6": "4oWwDmTcjzyfwHtdSpDDxvxUAVEFQpsNuK9KxdwAKH9QszvwCWtJQHiMabHpFwVDbfKdUzMgpWES1QEZytBVXcFR",
  "key7": "3aJwhVZkQL2NzcgLfQqjKKDjc4pzAjmfrncjYupwWU8vcJRrHTT7wtUx3KaYWrkThX5QXLnucJk4pUhUiTnQfqCC",
  "key8": "5ExdcJxTFze2xHVDQQ3uXkRwb1iATHGn2mnd5T69xD3Xnwf4ceSRKVNNnfbR2CoP9fZ9JbmRerkS9vHD7cuoRxLW",
  "key9": "54zBT2SygJ3SEwpGB9kGiy3uhqmNmTBnE58E2NuhXgqbzgUZxb4TaRtoePoKbe5Scbktt6yySHKkawLTBpgMtkbX",
  "key10": "4H59E4b5ASFzTzqc8aXTtN5MtzwFx2KqAtaEjgs39Ky3VcQ4E2sCDxiFLjbYkTJmPPpyibo5gYEwvZ7xS14epWcb",
  "key11": "658VZ19a8QCS8hspMAxyvVyzSWnATNqp85negUNjYY5mJ6UjunG2FL1jtYTX13pHrukWE9VbiSy7sjVs4x1V3cFr",
  "key12": "2XEmRvF8TyG27gRCMNhen3UXPr3g7chu3gwoU6dAehDJNUEkQonwte5kLKZmFFuoz8hZ1RS7Ki8EGGnWoubWoBhM",
  "key13": "33AhpU3iQzGvVJEojMAU8b1bGzRK3GeuzZZVtRMyVhSvGWZ6N7qwtszY7dMBPTJ73UvVezVyXF9b6VUV4X5diX8d",
  "key14": "4WHUmK3iBPZhYXnoJnVEWMKc5G4A3FVxSFR9mfAumdTikJQRPJD6KUFkJFii3TUVbdsTPdfnVdZcoZbdtPsU87pK",
  "key15": "4PyiQHMbYauhwoBYwyQGQmV82CaMm63fFXekKgiNsX2dpfShj35N5HDJ3LwFtaPVrv4RRBtxbdRZJrYLjE8pKjyJ",
  "key16": "56myMRqwrwDaBaPMqpSi9DRiiH5uyaCnFT1PspdekSQss2qHrJS8TzCg5iV9PoCnB1rDDxHuHbAPFVFEV6aG4ZMD",
  "key17": "3oB4btSgGt6hHwZi8kwk2mrjFQZJEmBNQJ5Fcfx9QbvFi3rEcyGu3CkcE3eWufsMqika6qmU6fgnBHp2p6B8PSNt",
  "key18": "4BJoWwQCXvjVcwj9oU3iYar2Pxauw8WUWRLRLwknm8faDW6XQ6d1xAWtSuz3RLcJqxTnwKDZK1UxBmW1TAfmzukm",
  "key19": "5bsq3xp8oJgCpyUpB4vVPV9XbkeecFrA3s396sZoETkW6pwZKi7b3dGnQWTT1CX1gnX4dMynbkzDQUC4mrde4uQN",
  "key20": "uZeSydn2rDv125Ns8puasWcWDTPGAmGCsjX2bk3RhBZYKfGKhas5TQGYRJBieSNJGy4DqyvtjWJTX5ok6ZoyxSZ",
  "key21": "3JP7ce3KfQ9Dh7F2mQNGNUnmbY18FSZcSJ24hn2FCHgFPQynYJPx7UBuPgRY3Wqh6gXZsrBWDnj2U2cDLX5zCFJx",
  "key22": "5Ex8Vmcyirh8BGSv1jFNVUzsomnjeLimHFXSU93YwPjokN8YdEMPkWUSgcDGLmkFGGH8sbXjM8wHncUop4qJGEBV",
  "key23": "46FQGxw6gSkj5NDhF4hHhCQfnjBb4G7zW7xmCxHEyHNquu4B9NorEBZvZsiByDizSaqnQHDHzzWMCuzPtNnKR9Ld",
  "key24": "5hF592qw6Euty7PJVLwGxR99Z7GLbSJYTwmLSpdsJcdgbpssC5qStfL1VvBj5djQ9iQwCMBX6DMchJBNTQ1E56nu",
  "key25": "5doBCyXEsTerBMvUg1XnGRgvRu1R34rDmw3qRtsPSW8QjLeRFob4mejbnG2Vif9wiFnFFqg8NTG81DpJWKja1PPD",
  "key26": "2oXWtn5Pnjq8bdaKP5ecJcpFfz4xLF1ughYMo5HU1JWjsMxAjMdXLmazagbfb9CCU7ZMkpHwee6YgFDcJutFzbrN",
  "key27": "4C3MTeY1sW9j4Wech5JtjntfADAKGwdXyjEkM2BVzUwRVNa2L9RAQE72uzCmRf7TATSGAmA6nK9nTwzrsZP6p3rt",
  "key28": "oPFnbFMqu6Y8bxKtHXnKUKYaGSKJpPPxQbvoRxCc5MH7EtMpYMDa3thmX9ww6iN8Pgu1j5uNS8na4LxMFtfbudP",
  "key29": "5mZeyiVtkA2iCfws4Nbs4C16MVjKy68592ZDTUYicRYPXxCbhuYAtkxj1wAzp3EF16Q85TiiNrJiJ9xYibML6t19",
  "key30": "4LFxSkEjCjFfuBxJfftBPtfbhnDKZkNGKEgRiviDWhi2mVi4DJ2tu7BaAnCfmGzad5BDM15S8gyntsgaD7YdLaid",
  "key31": "veHzWcbddVMYFMssHk778Z6yaeYEX3z3QW6t9wCZfA4MRExis3D7wj9LBnjNFrjYfauQxmPeakXZJs84kwnUqh4",
  "key32": "zeE2iuuxE5PdAdEJDYtmqWeKsEMheh7GkBZD5gGvb3koHZVdWVnDnXqxSVmRTwTiTrzNhsPcuWcyXhgpGy92W6E",
  "key33": "3EJ7iKQXjhgPQHmSrChpx7MZWvYZ2PxWFiz6BofVzJ24qWMytPmgFa65MS3DVzFhJtEonvJQxN7tmWk9GtrCdfjD",
  "key34": "3qRd6iQr85CFU6TAd84k4W8fUTng1FrJtxWk47Q8j1zohJ1heofimD5sApq5GAyb2XRpFV6pTiLKh39qY8FgXZgA",
  "key35": "2BLpUEq3ZJcfh4d1h4GBqDqjwVBEDaSwYCikjwZq148GHqLjE7q63NkRo8tZAD3aUVRQMzp6exSVdhHLwsNzaz5n",
  "key36": "4LsrxNsvGwyMZAGVEgX5n4M2zit3t3PKep8QSmhJJFk7XmJh3koCaoQGa38NKVBDqWBJK9V49GEKxq4vsxTsCLQX",
  "key37": "2WL9Yp8c1TuKKxHMqak7CRbJESE1ayGWNx2HkkbY6i9Z634zhDbzfaCG7jN2XMoDffbKxgnj9JvAZifWnpbLVNhU",
  "key38": "4iu4aMFoNnBMk3NZdHr17ndY54oxGoWoUv3dWZSw3kUoXUsnLMuTt31Sbp8udjxTHfMyxJF8BdaobApXRdLi9VBi",
  "key39": "37RAW6kjzPfCDGvL35wKUvYpEMnoHNuhqdJe2u8GQrwCY3U78BCZADtFFqc58MwvZs6JiKyws4UZ9DbiU1Zpetam",
  "key40": "23sbzgPESjUpwF2ZXGXNLkaB4siWbDzR2C57Vs3UyBWNK6qZGEAMd9J3vQTrjGihhJaoAiMiDcHNMJAiRZ8xRKNG",
  "key41": "5s4SEo9PxD5dNKVtYx2Y5FgDbUuMyLodSP1NYqWmV1FLW7aJXowrmCnziMB7y2d5M9wCoKPCzngjZn3msFVNBUBb",
  "key42": "2mzTTs46idqZKMFkR4xqPUsaJLpNtGMXcT5zwvZLXUFqsqJ1VnBzAiNQWV7UoDFFja8owZxcW2wLdVkCpg56sXi6",
  "key43": "4PAQMmoan4CcWpS6nf9j5SKEvCAPgHQ7c19RM32ZScK5SWHnGFgWB31sQy7UNEwpJuaaBEBLWtyxiRdXdZ1Ci8vf",
  "key44": "3k8PbN6oPpqr9BAnHxJisvNKbF9ZjBJZh1CVYNyQ29XmAkBbKuAZEqLqezdB6LvcbaC3iErL2ikyDQX18xTYWQrS",
  "key45": "1vkKEokG6PHaWdb936tSCrLor4iG78uirvCBGuU6W4YwsSFytrkhSHSTzrU7ETqzaiXrooJgVqdx7pM1JgVUyt5",
  "key46": "sZrL49QxiB4k9PEYULuKLMaqZs4SAdP5TvA7agH7VXiKNGhD3kRzh9fDgdWaTBXN8TK9MUwpZwhFs1LWgAr3D67",
  "key47": "44kPW8zqkFTwrhxCDqobEzt3mGLxrabiv2oscmNmLf6cPNsw1wKEsRCB2pKY8J3fqh2SiF2cHED7ASzrHAdKLm9B",
  "key48": "5VhTY6magRfsGb7mtNv3QNDV1d7qaPYKhArqHV22hr3eM2QbQ7cMm75VPRYoDbwAcjD5UMr4ipFh35hNQaxcKoaW",
  "key49": "3prxetrwoBdB6kenPxogRm9XbkacESdWzuvHWosZEuKsnVKF9CJQyuaSPZteGHTmNQzKKsc8tdCACTSgzr13kHjp"
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
