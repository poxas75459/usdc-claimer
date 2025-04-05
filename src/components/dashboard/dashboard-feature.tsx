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
    "4RVrRxQwtwLZqgbRErh1ektAEqExm6gkWpPcHe7LwLWpkduD49ESgLBiBHYRJJKa6qbB73979QLuGRUBZ12XyCry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24HTJP1F9oPW5qL3NNuAUmpzMimYqU5cDbYZofy3LQBsPrAaZa17CCKmK5RqTQcthjcChs6dha4XWHVtfq152Ph7",
  "key1": "4dr91RKyP7tfg5vRAvSooRHVrrZAQT1V2Au1dAS1tnXKJG9aB56wNVFEuWNTieE5zxcxKJjfQNtvE59RnSRMnTef",
  "key2": "3zr7N31bjr6AdFuL7AGXi5VmooemWxc122ZGAhdkckgs6XupFA8BvPpkywETdHGgMrkL384A9xrho3aZYGaaX6sj",
  "key3": "3X2g2KSPkrHMRZ4u1SxLB1B2PgT35mYUwF1zELHxwiomwQskMgj8w5fDWmAixqQcpTCME27NdYEbquRQV5vktioX",
  "key4": "2iUzLbYL4PjcYGu5cieX3UjLSND3UuXcQo6kSNYCF3FhgNgajawTCDYWMhCwpp7dsKxrzgYhFHHCp95qsBVT2vaT",
  "key5": "2YdPUwy1b4pxSHefqTj5nwaELBYEZvbKYiGiHE2YRAAemNxaKTAQJQwevjrKN7Wk9uNPJhCfF7KzdWHpmLy2yPmm",
  "key6": "46TgEwaV7uTZyFte7QrQQKTNemacBYnaJ91DQXvGR49bBSQN1bBPFWyvz5mf1UVzYCBd7ipZJSutXK1w4x2WSB3",
  "key7": "5YNfDnAXgVV6sbmEjJyegA7K4G5iL9zb2SFjBgfW3XWSw2qCNnzpgZFjaShfunBpbzpCTZhKH2FZ1BjTQ1r6LAQV",
  "key8": "2HDG5w8yRDJju3fY5uqyV8vmVvD34Ts5fVRyDr5Q8SFnkRPP9FfqLCY6JN76TdgbWUuWtGyp5D2phyRYbdmXps1M",
  "key9": "67FaKVN85qpF5p5HuytRLUmwoaKTz6jNN7bRhTQ8FU2iq4Bi5vpQtMRprP5vDELCBPnCXbq7aVfBKrfu3PTsAMkW",
  "key10": "5vdQMbtReFhZ64gRnfGnY63C3Rq75XGgr99WWE6zV2yhe63xc6zGVpGjii4UTzZAsPb5t6cdjWcuiXTqVz1dw7v8",
  "key11": "33kyBuibosVHT89wdhytDRFVuEom756B23aMfReMHbBLSoGBLM9szfhFyFauDNkLyuCyTkkfLe3eqdk7Wm51YpMj",
  "key12": "54J3j2W7HrMPfoAh9rM4DmVGcEKZXDDbNgvkZw3pRkBpye1WC7EHqUQprkymPDx6PysSotKrXcARuD3PwmGHiaNW",
  "key13": "5dGmCBexfZafUMxDdh13rkUzN6XXeUxyLJvCVSv5c9KZAwpRbY2P5qsyn34Eaoj3ZVxQBcwJAqbtUstYDVDtU1ce",
  "key14": "2LLw1sDeWDKp5sNru2MA2umdtLzak4xybA9eKRSiEkUfLx9ApUmqv2Virh4uTZfuzZwZta1xRmrbfSQQPcrBfHsm",
  "key15": "2NpQkuNMfPuGyKydxagtVJsDfCyXgrDypx8xD7CvibDyFL5tMmKhyycf2cNwZZM5nDDd7bY4T7LuMbqkr3CNSuCC",
  "key16": "2suQFkSr95ATp4Q3jWKs86ouZYTe7jzTar2wdQfJxrZxrWB7q4CxB7GBJGq42fb2PxkvEDHrqnwEZA3aGvyUm5MS",
  "key17": "25M3rmX88Jc8oeE6Azj4UwEfXQHuZdK9o43kujidThCAyNVhrdwF5p6tUH84yRMqNF4FTKYu6NfTBbPeVnkxqZVk",
  "key18": "3AHmwdU91AMDfuogssFGMonpkQbuiVFvNttHNkEAzVnBn3wKr9UhT5A7HctGtmPSKbAVN9eZhjzEYzXHreQrByYZ",
  "key19": "J8pzwADw4KwcS2B2xHHGGccVfEgUqPp8Uf3uuoJEnsSPPapkoVYLTTR3epYrzi7V97bnwaK22F3kbF43XdAMFEW",
  "key20": "A9uaZg6KHPAHxbSFxxpTUwbQtxvPJ2jaZkkHModEu3P9Tiv4QM6cwwotcJNZR7huZeCUBJCLiMt7qbD3t24oKNj",
  "key21": "2tsj57boaZEUrfuDTNdm2mRQxZppSk9eTBvGvQj8Cz2sw4cgn3yCRUUy2TrvTyDzUXHkzfABjfLZ6eFDbhZ4kDe5",
  "key22": "54q9a7QPsMiKHnk1f586TGgohsAxyuTQhCa8CFMAM1YzDZ7KJJX7EycJZHhuLZekDgNmkMn2wsdLGG7dwCc2Tysw",
  "key23": "3ZrMGDcLXrNe3ir6vYjAeZw9ybeQCYKHQdEcBYmdYmSaP6ZoKh1oTcfYY93EMBfLmwfZwZi4WpWnLUFjTZBi6ZcY",
  "key24": "28yfpfZPfQBfLxhY2htdjP87oWXy95JVeKTeTcupB9WfwjDWCGVK6ejLzSHTWpjGtkL6bUY2mzXyQpGDpYQaMLrn",
  "key25": "5dQXeYVSZVjqBt4qy14tJ5ZHveLRkFYG9SrFCUUi7Nc3z3MGXg7TeJHEPiuzxk93fNXYvpdnTjHPAXJge11piVb5",
  "key26": "4P2x2W3Y8KYosHJTTeoj6Jerx81JoevnXxJUqj55zBuFyW78twrBh9xbPsCY2FqSnmDjL32X6Uo16S7sQaJTSb1K",
  "key27": "2X5GZUMqGrdDfL25oEyL3uYNvQ4D1NpkXxrsGdx3FrPaPrpQUeQ3o7PjmzpZnXMXuqS7Yiwd4rctMspKQCNurWXw",
  "key28": "mDuMJvPVKSteQWG6zAT21bwCpRGfEUGjUV7duJX4bwMBtDyDcxowRB2pj7Up5xCs9F82nEhZPBvYHuQ1yZxzedo",
  "key29": "5rjje8M5zQXc7UiAT9tCzvQ579speryf5Xkfs3ucwekxLq6BYKuPwNjfub1KQRtg2UmLrweN8SBCEVGZ7VRkfv3A",
  "key30": "5jdGidBq3rqMr6i6MDxrV2WnrmN2Uo6QZCoAbyZ3nP5Ne9DEq7KD7GWuosKqdEseJxYHGiMoJvmtEfRnKoWiDzdm",
  "key31": "DxtF8CAzZmhFHdbM2ALKVby6jbegFimEKi4GHBBWwE3vqRTXCtkqfvMtKLFBjpz7CuTWePvgGDNxJ2mo1HyzTCD",
  "key32": "5SCgLpcQBm56t5YBtbbBDEu5nzafkdu7srPDfYpBCnrEdTnqeH9ALqZGNyyKK5w7fdCiHZTmjuRdCeyBpFVDFwd5",
  "key33": "4RzDcwKfMgNjeJKc62sAUuCkKeXcg3ukNeCc9BUJEuyN9ji1ZTWrPT3PSxah6nkhJoMsowNVxHGQG9ac2J4F2FKq",
  "key34": "xh69jiuR6wnnGMqmQMcXmzdcXxzLDE492Bf77HwaeWVRjTDo4akbky2ZzgdaWTrHwCMyjn96agSkaLhB9umwp6W",
  "key35": "33NMJeb7ZhVJwThnRUvzurPmDWComJKcnWvpU5SUPCJc32Dm2txnNeAwoSRShZRXEkuioukvaSjiqmvNrG4AdT2B",
  "key36": "4UKemYkXebNsC2tnbCqTqrM7KKRxigWenc2nVPFAAyLT2Y6KpgznDk9ki8oK3PaNGwJZAJwvAHDugHUzNy9K4Gnu",
  "key37": "2NG53yBX2Dz7GC1ifTnjE8QzEZsvqx7mbXisxeRDCzpMGTwzSaDzGWPTQtsChjDn97inrFUfawNKagBuEYrgTY6n",
  "key38": "3tEyKmGGq6Vw8d3iciDi2cJU2ozrPMXQMJ4RXphaYSwWWw6iy7MLreKot58j9B11srp23ZyJbQXKggMpPjgdAdr",
  "key39": "5dw6U6wdXwMm91m5vmMytfp3TKn6TdC1ZcbQzQiJmS2vvxGDVcoesFdh7TXGjTjdVZ5Qt8j3Ts23doqkAwupdaPt",
  "key40": "478gZzKyJpU21H1pekpasHfcCi7nP1aZyA5mP2P9aMZ4G5d5ExoFoLnkzxnEHaz6cnYTQm1hBRNsvx2MK7X7tqWv",
  "key41": "2Gv5H5UHK4xygmU1YaE5c9s2ZbvLbABdrLyWi5Eqitt88jrgXGU4p4LBTVmSDDxrQfDLEuqhMiZnDcUwUNBURdnC",
  "key42": "M7tWWA43tEgfCf8akmTKrdpzaKTCvQyT4JvGg6NUzzErdx2ruRtFiwF6BnQ56Xo6dSEM51YayvDHFFexBYstPpw",
  "key43": "2ZWGtoaRdmEBYsN1bHpEB3Ybos64HqJwNnfpmxLrQ4nKAUMu92xo72bB7PLPJ2Ym2FYA2c9cVKG6kMJdjMvzN9oa",
  "key44": "2w4V6KnnSFeRQX6UWtCG7ySJBd3KrpRMjCsS5ATCosApLNhdBc62zBdDePjenAaMnHSynKnqun987TpE7jFhyvuG",
  "key45": "2oCbyXE1H8mLQV7SxrjoqvmQEcreYgPkwaCpdcvVmNSrhEjxq4zjZph3nZQgPWhZ6BiCTSqxhbwcW1zNSBWdYzwp"
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
