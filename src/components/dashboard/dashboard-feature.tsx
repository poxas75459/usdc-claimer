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
    "2E44HRnKbUsuPMM7hbFJeMQDpTPwji5ZAdRgJed1uG8wtjeEMdY7mVSn26zJ4VSoxDgJcmPxmwEtGCoixwDQjf7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yx8LgmFmZDRQKSybYbjaRgTa5FeHFa43LPxSd2hsbxpDUAUwbm4ipNx4Qd8WajpWN4NHB5GBhzqskUDAb2EF8JG",
  "key1": "5MyRZ2JyXCMRN1ZEnx7Kta4qe4uEazq7zVjXGm7w1gQ65gW4uoTUE7hmSuiV72Yz8kh8aMhPajUdVKke2hBRpPTn",
  "key2": "wiVHg9Wrin4MQHGY98nXxet6RMNnAKrdWZ61K6GSSYZQ8XtXi7CenGwpcbQYnubudtJBZbBsuVB49gKXTLV4LEH",
  "key3": "dPF8wkVMoFV1gTXWtsiTLUy7eosHdUsh97ejEx2sGvyCMTE7RVo767SfffpT8J6Jxv8AJF6Au4tC2cFsTz4NXxg",
  "key4": "3vgN4Y72N2J8QhZ4mNbd5ei6KEU6e7pHXZxxtyWiX8iYRRmSq8vVwvU8ZgvWA9GFoyBBedBVDFvP1ufGYUiAVJjj",
  "key5": "53w5MS6tBRNccZxZnLdth1LgHTrgeNMMWzpya18peQJPJb2KV76fBuuKjewZXhdFDuhYbT8jJaf4HbjqsECbR9vY",
  "key6": "4m3G8AFsRdu6cTQvBxSyPHeDejpLBfXkktgh4os8GWJYuKkJW9nzfZkNjCuyD1Ct6tKPYHVxWL4yqU6bYGrGUw7G",
  "key7": "2aenhSxwCGzW3uxThHrUYouYA7Akzj1YjuzszxcBGcfgbf8p1B8ojyRxqaXpPt3KK8VbVLjuqGdQuzYJri7oc6P4",
  "key8": "zbtC8wLyvX1u2eWMJBH9MuNrLZnixdkhYeJeCjiaQ2U3f9Ghr2cQ4dyGuwhae9gcihjWKgsuqRL9X6wHKPLWDAq",
  "key9": "RUPkhV4SezyhRXPNbBTYwLTwYt6ucp5eGSwUG3eSXfvij7D5j3hhgqj2C4MgduA4Qp7MuA9P74zD3BjvwdfhUfu",
  "key10": "4spcz9QMtqRezHQjjVNd65puRxs97B8CpZZs3A93wcMmnnKAAEQGR63CbYhZVeAGLzjugq98w7KVxgn4w3HDnR39",
  "key11": "2QCmUFDoTJuqCLFJJ6HM2aZRixAhZKHuSqvybHtoTnpBoRwM5wyTAR69CMGF4ybQorKgW69Ke1bXdKseUz5e5XNG",
  "key12": "34Bzc7f8GfDM7dc5hjHzXHPggCAtncStfLK73Ss4UkhiTp5B7B1EBwbZRficnRPNSjiJD7fx5fmWUNtHRHGnore",
  "key13": "2ypkoz7t7fNtPMjE2TcEY1kUCiNW35XtBunFjDRpX6vxw9urvNNLYL4n6icGqgbhZzkVGnQac1iX5V1G89TAe1W2",
  "key14": "2gC6L17PaAPiY4L4VBgRHbAvV4a8UddCy2EdDeaxqh228oJfmzsusszbmPvmBepp9A4kM67XUSFt2N6rEBHm1UBZ",
  "key15": "JpKVf6XaBucFXDWCntm41y2P3nG9dLwYuLF3MrMjSm5UQpTUHEhMKzhptgTQHkYDUo7MRgUatg5TJuCqmYvNcUx",
  "key16": "M7aCq2ZqxbygZHSCJFBaiEvq5ctDmgBSGbxLzPqy99Cmp7Gr8pM7hwb4gjHKB45vipqDympwtXS1vv6xUD9Ch1P",
  "key17": "62L9sC4pkWne6uLUEiZFHB9Mt8yhu3Qk9X1F2gcffMF4ZoFFWHxYPReYCpJGiCudnMWH94Fc1V2Y6Cp7pdGzhPnG",
  "key18": "3RMvmJM2CQdQfZXCueSEFVJJch6gqKUF7ugvv33yqsee234VShpJm3JqdbuCMgzBLPwLW5Qz2TGfb3mE8FfpKrez",
  "key19": "38TzGevNy1xi3Q34bLuQQAvo3hXhDvG3q8wPJpQdxAftev1WwFbAc9NTZLf6cAMT31H6pYCTD74Q8ZZzWGH7VViV",
  "key20": "2pSUFELDbwFq9DGVtxiemF9RUYhVHsgRfeYBf4URETMZWZ9zJcsZcTkjykyezvTGYiXSvpQDtjgYtiPo6KK8huwu",
  "key21": "5xCwh8y35PyiF82XeYCTSaq1Qx5CMrMG4JzDg2TvjmjHJcMVQxtGewbfqUzbCkUK6rho8ew25cCBe2oSnptS1fr7",
  "key22": "2nrNniaG4kcq6L18CthVkgDFuUXCY1wEeDQaExYTHy8sqsk3U9ezCMj9LbAnxTJJrT9kYrVj82S2Rih6nujdttPi",
  "key23": "3yxZATLXTFYondY1EYHgzvcNHs7u5J1tzuL6kVeVc2aB382DR9tAAQj2EozG4kDtHfrGjovBsJYtkDC6f5EtjC7h",
  "key24": "4S7TdYuCkhShtNYGLmDS4dFqoou1FHt9NqigeLu3UjzvwYxZ6KYoEjg7MTaFf8gBVhh16TTS6FoqnZuNrMG3H9sw",
  "key25": "352No2MvYCMxLQnWvHVKww8Qxn9A6H9MyEFSpfx2PkvAcuxa1QGYnnnXATrqYj6QeHuwqH54HJsp2VCjowfg523a",
  "key26": "2vqEVPTYRPbGsLUEjAwzTGuB2o6ks5o677NhX4M8tCimFV4ABJSehV6zFu8ks1GabfmJgBQSvJm8fr2yf7CiqKxR",
  "key27": "3LxWiJAWofikyULgcUY8EKS4m1e5qnESLY2LtMyVgHAJfFFPSo6C1gzTSo1J8BCDAMduMmLHKRSk6vBdsJxDLCyX",
  "key28": "2MYxRFDAbGMQATfb2M7uf5FpaofheTn7zTzvwTJXACVCVuZ81p3u6R8THXBoVQ4YWR3sdoWzmg4DM1of5RkQZM4Z",
  "key29": "25uTk4fav2aznzkEsihR8XjcJ2R6L7oFirjwVkfAiFUckhPgdprQu6Zxhk97P91RwvZFchCnMafTcdpQcfcgt6fm",
  "key30": "52VUGoppJypGJUvfwzhBbLN4TBtnesz6c2xMEXx6cmw4tzHoWi2dnCiapM2tn5TTe5AzZLJw5q1gMj2cW3PMHh5t",
  "key31": "zYKJzJCYVAhLxjwNhgPXhrSCWoPk2bHf8d7c6w4JhskySMiAGAVPV9zZaA6yQH626TFqhJXEBCbsrCpqG3ohanZ",
  "key32": "3EGyLadwaMadeebZT4oZVULmZNWX5JNWqtK5Yk6AkkEB7qJyfPZ4p9SMBRfsZcWKCquSGAxNhwr5QtSosaXe84TZ",
  "key33": "3ZcedUpUfN5kLPMPnXaM9Ket8eqzWjbHYiSnMrwajBFZWjHdXcunvcvvaNYs1y6Py1cJ7DyTkDdb85o4b1MkHHd8",
  "key34": "2ZLYDBqSVxNRD2axdyizo5T6Q6NHRp2KRg1FE4JduV8AdysDbPWNhFqqJ8SDjnxpC8SRFxtNPvT5ZjmpCNvDKjE",
  "key35": "5pT7ghhE86mfgTenZNbkebzBPzsPoH3R3jcr2mjaUiJHgkcQ8jiS1LHxgMPtYLihpVNtbJNayJq2FL5ZSGrkrA49",
  "key36": "5ybYybdaYSqLxGCAkzuQD8JvR11Sr9DEdiC1zeZaZyWi8Macq2SCTSJhLPK34qJuknquckEseUbuP7FgNSqvhhJj",
  "key37": "f3FariGvMxb8NHnK9AHTUYXrkQ2S22Ne8B9jGktEudEBmqYDsFsmwVF5Mym2xYyXRPnDdeoJCqcdJcWmrjxj9WT",
  "key38": "4pu58TigHy8w2vGEPy4FnZBKGh424vy3xghyqJznNue4H5vRgWJV9oRFfQLoiwTAgWDgL7BBkk6QdvK6aptZvzRq",
  "key39": "4Q9Q8VSAPrttMTWU3JxVtSPUjgfTKkSihqQsYiTemPKKvgksBjJCZ6rq8X6u3HfD9RAHm1Z1mD2kcQkeyzVJJRdu",
  "key40": "NMgysJXNsebn7GVGRzqLdTSz4cyvWK6ytsQx17AoSLbNXJkLgoh1vb6bQi3hxpy78Uy2hpxmGNBCQBf21SznBHR",
  "key41": "2MMERfDGMW6qhT4aAGufNp8miZDgaWhudfK8NfzUzf3QQ9GyZxvWUcLuBau5hQHqX8wnRTt5ipKhzyqPZ9m7GA2z",
  "key42": "2Jz9cg4cPP2g4VDKRnDDQJhd8379KhpLy1d7bcNphbCfLPrbAGhr7szAfUmDXgM71V3LLT2jy2PMfeQb37VkD7m6",
  "key43": "2s7bCao6xngALPkYUbp5tNT7zbT5GWU33fPdNyFXSfHzgmwtSRS2oac3nLswSB6ULNP8muBLzxskgzVm5muMMii7",
  "key44": "BESinGE84qpzDy3dqTvW9TZJFYAQZXL8LkJFh8oggXsbkUYKrZv46UbHxkPSXtEX22YLcWqYk6HGQzxnpYLwote"
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
