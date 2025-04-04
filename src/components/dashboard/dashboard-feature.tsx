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
    "3d3zw7cKwQWuZAKVbVYVUtWzU68JQTUb5BLMrZcD3nE4oZcgTooshUHd4JedGYCzx8czbCXEPepWCqRZJxT7fjL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZrJKWxghP4nrXbp7RE9HdCFZDyuq2cu8wz3Ru7cMBfdXhz9EfQm8qrNMUraWrpAFxumfSw6FUitSF7LBWcJ7p4f",
  "key1": "5ysD8FWNu3xEF8WaEJDFijoysGoKdxE1eQaPFaC5ozNfye6uqfZb6dELeZVAwErgJhPyYp2xfqNrmQSXT67JoZkJ",
  "key2": "52Q9Cq7KUD6NyoJqYywsDzYoMD4e3eR3RWygzowHHCEd4xwhkB2f7bdVsQ7XJWWJ6MbSoSmVTtJ44mjke7knREKq",
  "key3": "2baMvasirghn2omzwfb2Wt7w4Jvwc5R1T2biXYuoRqRP295RuutUmvZMnkdXq5NxZgc7hLukF3znUfTZkjxCP6Xx",
  "key4": "3JGdVTrQ2Y3q9nWdAMphxAvUvEUiGkKoPaAxnHkGJCTJWkdXHuv8knWjxnj2tryMxDuqAPnbaSM92D2uq2dCro9y",
  "key5": "5nJ2dycBvU2rHxbmo8gSQvJDFVz3k2vsq2LmNjrJv5TQiuSYqo28TYxfkDhYaAJ8QLwWTHhQ8WL8tSEBX5R18MA4",
  "key6": "2StznmUT85M21YqrjVGFaQ2K4DXS1MyLTn6AwqTAzkBhitM6yYsjgL6Q8GM1SFuFgV2bzqRBDbk3UY4i9fgpT4VZ",
  "key7": "4zNv6Zh6xejmiZoKUe4bnUajbUmMrMoQf3i6ztymkQ94BKJQ7ZZE5EuVYoTHoGfBen2jNLvQNUeP8TWgTfgrKYh4",
  "key8": "3yFoMgCzRcA6XLK6HMqvDJ6u7ahohhzySAm1Wm1kJAwpfwW6Lci7XRfgz8RYej5JzPLcisfnSVopLv4L4cg3DhSQ",
  "key9": "5arnkz8AVf26Vq4raLqY3UXfKFtikhzFzpA1mgLcWK5m9vUe8hUqiJSKhkdeoAQ4EgBwbCLFsbx6avFKAcJZcwYj",
  "key10": "21TDGBU8sANxBB79k5QBBi4NiKNr6uH8AWdBrVaBduMhF3A27msDQ7vjj4XGVui6WLNsZUr6KaGAvcf5hkvSi2YN",
  "key11": "26hovt3XsibVUiVFhAzvLuK5gSzNaN7z9KcoRkdXTVU8XaRMCBe4k6NxebjSkgqxrVvnKY7dbSmZxe7KGMCYpiFG",
  "key12": "2ssABEZGaUaUMuCj4btk2AKjHUvrjCJK1euoVmkB1pbeckeDsyzX134Rv9am76bUGeTmkccP11NXuVu3StVgaSbV",
  "key13": "3ke2qBYsRaARJzidhKYSt6z739WGqKGK34rHRPkPST1bhYF97qDWt3QrYHE3AHu2FBA2LPpMbevYR71nd9woAdmL",
  "key14": "5RB8t9eSUyudq5ybBGpnf8mrEXN5Z59PSDS5WxpBGN9ftmaZruE7Jy5m8c9fMhf9zmADPzqp3KbYruHcKgHcvsNY",
  "key15": "4fWReKCL1z716EJzXX1dfkEPqfou9d8N5E7hmhGd83Cz7PdJ67fXszfCRQcc4nXSmzEe1ymLs2er5LQxzkTtscdg",
  "key16": "DH6wHq33ULHZVHW53R9hEv57nf6nonSXKoviE594J9rYLp2YwwMwgK2UZzZikAxZNkY88u795fo3zdUbSRZgAwQ",
  "key17": "2Gc7JQRFJaawR79h6Y2EG7vawAGMmTnXNwrcLZs2Tqc2W8raqtimsbjRMm1cwv7HJxQc8n7WMbREp6TxuviBoTgW",
  "key18": "49w3NQd7tSifz5ACfwdJzZtVHYmuDXwTMiff8GeigwoqUkHLioZ4ZpASaMuNtpYh9K31GBtEYoRL9h4xdsFT8U9n",
  "key19": "2wVuWe2a5mdS4zpnGpbCStMaBk6SZBB4PDqMgCvw1cGHfs2epkmVePCEHd4EGzRqgZejXwfuaeEf3t84mE11SQEP",
  "key20": "DGL7x1m71A6PY8efCBPxYoEHuGFDey49ErBkfkf3wtfvF4uYH8WCsRyRJW1ZAz1q3kAJLenQsKiV1ZEhpr91Yf5",
  "key21": "5Js4AwAGHGmwpVMf4VFw7QZyD5sQhn6YXXnH89zmuA58ufPEtv5T3yHpg2zE6DEr6mXyEuNoh8w7QLHd4fp5bogQ",
  "key22": "3ruuL7Sscu7mKneh64PhYLR1zhgrmvekwpn8qhhgTXffCXdfWR9Gj4FEVPtLPQHrxQ6CvCsW87tsq4c1NSZrAgYs",
  "key23": "vPscjrHRD9GerV2f6aazxJUB5QCKou7PcKSfY7Ex5D5drE9Kx84w3yCK7mCGonARqAABhEddL72SRpqPM9HJRE3",
  "key24": "4YTW8uWFPbjcdzDkyRSE2cxNCqmABjN6uSbsbgg7965KfPih47Q3WPrTwEPp2iWu4duv6DD2uUjefnFEUEwdNp9n",
  "key25": "X6fpN8y34rWXPwDcsrb6K4ZUyfnvpJdQYV3fexgA1QZtb3oHbmYBY85etJhhr7333BajvbuDodaTBJ1XR8nNHTs",
  "key26": "5PvUVsaZW2F1CErfo5xR1YWFHsjpbca79Kcg49krYuak4mcFLvpbdyaznWLpiS51Ar6UpybaFtQ46RKpyrtwcYzm",
  "key27": "4LjAZfk9FdkM3spmcvd5489kD6tiYMvZNCRzVRgHpZojQKm9NMFCSJ8qSwvYH2ssNXC3hu4X5TJDWdQa42b3k3mY",
  "key28": "FFBNSSszaNubUEG3qMaXdLAqY5gAu7pe1FdHKbTmfNq69MmffWutRJvZhuasm3Z1Xq2JW6L5PVGVbstAHCWDSB6",
  "key29": "2CxHDHMehsgKHTnF7nCX4i5Sw9NCZJkGLmdNXJStMPoCJg7Taqwu1MPKd9NmEZ5GYutygML7SWREFfL9HMUajz61",
  "key30": "3xugNURywngGdu8MizbxDiJrMvy821FawGsdwvKi4d94dLYTukTjKynJ3bDnYNYvmiqB4fsXwCFnh6TuGXpWeken",
  "key31": "28PnZJRHx4p8Q7m6Pv8rCY2CxQLjDfC23S87k4Z2HstskArbor8bdTPgPLgf5baetpMyYdfBvMzDEMMpZ3sJoQad",
  "key32": "4pCMDBPrQAfRBpEX9J8JnGa7FLDVjXhxsjtqJDrBB77Zf1YNL7eZbX6xydPgW1uHMDvZUhjRgqVAeQq8hQUvnnyA",
  "key33": "3FVLzNbQByJ2zAWn4iQUZtHgMRAKEXtaaq69FEeYWQgh4Mx4xxqGeALXnsZYry8Pst8iHh2ZhQkT1F8F35LBUDSb",
  "key34": "3A4Qi52Zj3S9k3tet92Qmdbm7NL2tUqpk9eGFVZaaMngtFAQEMN9XtzZjN6dV9XMyd5ZgRpj178Rz33y7p3v1ij9",
  "key35": "4TPiLZsx6msMjMorMjGisV7rfzF4xCEGwfp29Q5f7nLjD7FpUYRd5TqdXDZS49swqnVGrs3JV3sRoanJs8CX1VYQ",
  "key36": "2XzqkXpmLdzbKvKWbgjuKcNbXknzQXfsCBXWYSXCYBn7iNBbR6Kvjj4VJATLKRk93RoG1Jg35KYfjUR7BR4NiKXz",
  "key37": "5brkFqsfazJDGMP4fcmB3U1xnkaYVJHFPRCaDyEapd5Bzo2WEbZDK5LSMGBuj2JJNe6eHgWcGveN11vJkVBRkdnL",
  "key38": "5cHzm2wQGhzafuQSGkmyR627kcNc7BV9PnwgEcgShB6AobZBpnygg6vWY8gayLZ2sfTjUo4F9FePzCUjFX5sd32q",
  "key39": "4RmKt7rjgJsqeAZe7Ltx1MLshUed4Kj5D3moZ4apPbnWUcPGNYMzi84PVvvJSMtpXGWXXD6iVLMNnWdHJEHkNPwr",
  "key40": "3cMG5m9x21WQkKVPxyy1yd3UpsxV9CdWYzEF58f9Mf2WZvyy2pugAWZGQq9UV3dEFMM5YikcCdSDU2FdLMKsqqLs",
  "key41": "3oJCmr5fw9nVT9nmwvzmmDi6AR4mtV4r1KxoXqr5NmZB4Sq3ch1v44hjfMrae1UekqNMcLZRFWD2pfnU52t5C4Pj",
  "key42": "5z23Wrvi5N2n9XJJNUi9vXJncjk2CmhJyD8wb11d2A8Dhvg3iM4Fs7uZJXyE39RXncbALtZp4BAsuWnMrQ57AWfq",
  "key43": "4sUig7dnZuwrohPESyT8X3WqfcdemoGyPXwq1ZXhjvS6inCTQKTXLRK4HNbRDEF4tnCJx5zrybzGx4dhDsGLreGV"
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
