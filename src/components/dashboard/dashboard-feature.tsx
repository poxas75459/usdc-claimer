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
    "65De9AUz55YPCmAfjjFwZURkD1gD6vrWTkDzL45gCeNLBrNmraLfpD68oCHUPp9HJbNrZseTfruG38wExPd2HaGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39daVYeMN7SSSLBW4uDehSEFihqAdFqp3ZT5jAUpA9c9w9yXLqZVmthakWEZ6fnTDTFkB3BT9gcHcmfpSQZAAXXV",
  "key1": "2WpmJ9mJcTr5v3rsYxfoTnadNkbzW1DW4msmj4EXk2UmwDovhQYQQHC9DzWmJwNtDgSBe4hMLDSvUL3pNZUUdR6r",
  "key2": "FkWmHV48PMUv58Quy9x7PUh2Nk121gQ6Gt9HG6CN5tFPkEQ3y3hBStHXAPJpLQiZLKLjwJzT6ZkM6xfi7LPCXSD",
  "key3": "4eyV3EBnmfS15uMeth4p8pN4SC8N2TFZhSpSGjDfGiDK6jKi1AJoFZHKHwbS25sXUSSv1UGwEhKXcBcEkavFrNMZ",
  "key4": "AUiScLQYvfyD9GvrWBHWEx3f88zb2RQEpVpydUAMxYumpo6wVhWbiaDEmi9p3Pg7UwzNGgeYt724PiDqc4Shy4x",
  "key5": "asJ4fDZyoKZXUmPRq4aWFtZ38a73XvKeSNn84NtL86ij5miGBKqpWQjZQecRAKqVPm13QNFjw6E9t7nDSjUbKFg",
  "key6": "4JuMvyGjqCtzvMz2uurCnnA9DZNtUvQ69atmV3Z3KheZYgxUEskB3uxnKJiA8x6auCkHc6RzoPr7MNa1LpsdRBx6",
  "key7": "5mad4nMBhTkKahdpPpeh2JZL3uddpFthzwwAmQ9osT6VppQtFoLbevBfCRccmFrcEybadupxoaS3JohMPchYJaYT",
  "key8": "4GDbMw3nkpkkcYeAURBGynPFqX38Wh9fdDBeAh6SgwPRVeZfJ9aa9ZHLSsKfX1L9QAZqzcHYuenT12G3fqtDzqwv",
  "key9": "3tSxNrsuSwiTP688ER6q62vun4pHDQstcCdhu8KcuKYt5gBEqyv5Ppo5nFAfFo2NQSv2w6jGcMLX6V5Lrkdn7kYb",
  "key10": "4RjkwUsqxEG946kNyyeWXdWpTYdRJVvmk2mTEMLBhbSL7zTUo4CGVmYoyErVrB7GvMZU6aXdZBFg9UMCGoPghcJN",
  "key11": "4aN8ut1Zk2Yztd6DCvffi1edrmLokL49nTRFPpXVkYPh8jfvxzKh57vD58rrPr1uYLuKsbHP4DotHvEbWZhS5sxm",
  "key12": "8bnD38m1FoWzh6s3aRchjhn7KQ36uRrrnT7nxULPz8iynyRU4wz7xrc1c1sJhm8FgohpKCVugmaNb34VkuFYhvg",
  "key13": "cpXC4UR2nGVtJko6He8hkfagsLeMtTyfQcZQL8x8AFS6SyhxWaz6pMUuw5xQi2NGRciAEtSqpAwG9mvyyrVn2bE",
  "key14": "3kYqyCc91iJiogAkAwAdpFgrj9T9fapstYsN7HZSyLp4i17zmfTmbAvspfLZrEiMkJhFbHywYVbCmCsP2tSaB1js",
  "key15": "2yqKQu3UXCLcxjf9LQCQEy9MJ8Mz7kGrNRf86J5ysH5tRbbiLS5z3kRuJhgRfwX6FL967EMXqiaAs5NtNEjYFFoY",
  "key16": "2xDgBuPi7gyg3Ug4KEayYeAaY79E5ssi8YEmmb1NRSGK7fkZeFTQpFeEWmM6EGpRWy4qN4WXsoun3PPrTLw8mqDT",
  "key17": "4x8au98TCCNfaQ6ustLH35WGvC8ogPmdKR6vpuNNMAoJk9rUTpMXZivBAcbM5fV25WQXJ24sM5Coo7aMpkrN1kJz",
  "key18": "4qfYVvh7D8Vyeea8DP8Peh5ik8crqbAGUxtqjDZVnE9g8XJhRupEdm8UNbmTRQ2MkfN17TZN9XAo15jZJW3kY3pQ",
  "key19": "31rZ2pkXxU8EtxKUEHC7uxmqvstNLMg4822CHdtjAr4CfBSsZWLVmojQpVhtNHTyGrcLL8d8fiVkkodmfNXV1vEo",
  "key20": "4XkSyaj3aE2zV5ZQsg7tF6i5UKdxpqZqTyLLykJxNAEC9MT8HujwUgBtPJzZYbUNzhRstJVD2mNFK43rM2apL8L6",
  "key21": "5RWBxYmUeyEK8R1mybT5rvL9gjLZYgPeskFM2D49Bi54wBmEzikFGHz7myAQsS7xedHUpcVzWgihD5ia7CnUxR4P",
  "key22": "qV5VN8nPn1ssmxHBcD94Fy4ZQQ9TgRD6UCop7bxnRW7VWvjMhsG5KoiVpoPKB6pwMxoAz247CGcpc29nZqV2Tak",
  "key23": "4CY3uThaa73DEZYb1pA8s7GfXajE4YByYSkqFUS8s5nX7U2rAtzLEsT7pvm51p8AztBnvPmBAwawsFG8jKyJWUbX",
  "key24": "2aap13kPw8veKsdZAWq5xc2GEYrqvgox1UkjL8BapwbkUyyqkUB1hEvJ23PpKFBDY82aoWohK5jrZEtfYiEoLi1X",
  "key25": "5YREzgY73XJZxayJA5dZqun8RRK1LvjSgWwkgQJvTCk69BLeVSN9iAsq4eC3gFSCFjQgHYBSVKCqwRJwTbEwjipz",
  "key26": "3CZNDv7yqTVyhZL2qzG1gqfDzKWF4RVvNFGYhEsCCAp5v8yEXSDMJ8rweoQBGssUnaV5vPz8QTDBVFths7NYuABZ",
  "key27": "8hCL8X4jCviTZmYP2Us6P8RfSQELCfQm8kLEujKsCeTdMZSTHtxF9grF6fWiiE8ytJS8EXASbP2vExiBZzxUqJ6",
  "key28": "4pHpUJEbitzAXw3fJN3dRBHBHSpx4YMGBYNreNVLDx4oFbWUv9ow2offYn9NXv2gngpxjH9vtDpfQuEeVAv6WwCh",
  "key29": "4UeKsfXR3JPqJb3aP6mgbrmpT2DyCM1NHDEK2dXp7KEUTUsrFR7mJ6qHKdHsemnpjrVQmst8863ZRhoMagczy62a",
  "key30": "3qHDm1ptsXaZfMop2YjvngD7PauqUmeLZ4hzrH1GyEzbFQdwxZ2SMCFoXg6iB5jYXAcVBTMkFBzNbxre2a63LCvR",
  "key31": "3xUdirds3nkVuiftPepShPVxeuL6WmDjPoLymPqnDAZ3yz9jvpaY8L6A9J3hU6wx3Qwr1t9Zadoy997FziBE2DQ4",
  "key32": "3Fka7GieXRaAyhG84N5nG4vqarpAG8TE5WMjKomoqyYrfKSg6icGNw9MW5NGxUyF4fugSBxYjTD1YhBS5CHnDgqf",
  "key33": "5ywrVwaAt5ypZqCUJDJQLm6GwL3g7eoZPomyJ8jgTjdpgSDF59puhLcEgyy3ZvPxFmodMF6FNDYScEHYhwEy2S2k",
  "key34": "3q2g7hRGPVgNUhgssEkDUHqh78H7LnHDS1oHvU6jhzuU2MzLo4vrLDdoGkvU9xYRzDZSpzFrp5XJDHd4YFXWgCuY",
  "key35": "4Lz3F6xiFNfKcUxK58LRaBPKYf8XsmpdNCbtrz1Vo22qMjFNv6VdXwPb7NgaShqaqrXvHnJj1pDe7rA5wrS9zKUe",
  "key36": "53SRs7Xo6gyCDq4ubzJVBxVRhc1fwuuonZawkV6ecfu9metd7ezCHoMib92TNgasCReMGnmCeadPwwAmcT9VY3jf",
  "key37": "3A4ACtDnagQZcvS4tmLwf2qVw2juiGu1UL8dk67Vb6AgEVZgg7C57jtEY5iKGRKCVqz8pEeRHxrMkr63duogYPUj",
  "key38": "4FYRUrJ5HaSduGjc2qeMp7i9Kv5q1BEuvAa5fAFQw1aFivFFysvhFT93RppDs4oMfB44YHCpy523cQ3CDYmkijFz",
  "key39": "3v9z6qVmnZ2mmsU7b228jpHmWEWxTVmcEuv1kAkTpfCqbK54tBVqdSnzWo1ZgrS3tp4Lw7Ky3CjQiFHBp9LSXPW2",
  "key40": "5VazhXdcKDgHsabDPrRPvh7YNheFKKYuoFsRUxpyu4UKEUuvMNSDeuViUy8kzroXXbkGSHSQ7oHZW7VWfChyfpGc",
  "key41": "Dx3SZC5Soh69nNFQbxKkgcQEAk31iTu6M2MwRnvjVc43yn9WAMYRMjVhkyVbkfE4fT7ScMoXdegmMaFwvWAP4HG",
  "key42": "2raknb4V6St5paJhr6eet61PNuqzaH813jgATM5ryXuhvBxnbWTT6Yn1omKLRQMSYRm9xwcAWu8ASERheVJynPDs",
  "key43": "7msMjHg5ftGojoVmTDuZ3wsYPHFcH8KVKouLPZUNbYzaK1r1FBnRxqn1oEN9phSYYWLZWKgyrL7LxB3dESuryzg"
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
