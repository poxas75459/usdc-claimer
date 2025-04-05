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
    "xY2qgypkFRdsKasKL4K9ghBfh3EeK5VeH3xRmaWxzgrnZSNaxXmr7Y1WYrWvViB7tFJa6SQv222AyyBQuBKdiCK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62uUKmmygr5j1jUEPpRzNvehxVSV5b3ipEZRACizCX2XQwqdisUJ7irnFm6pT8C2j2owkWCpS5pAuF9bu3pG1mVM",
  "key1": "37cztwJueo7G5fbG81tCgJQVy5D3jbXM1b8x8zDXQbC5sdXkoKev5DR91uuSjRE6ehYPUaR6A7q4AgiL8MtKsTMC",
  "key2": "223HQakQTDSa2xwd7MwtuneA9T7PrfLsJmeH9zTtcotcEDNgMibiZbYowCYYGqgdALZNjeQFRSTuSADEQspeQubk",
  "key3": "4ncBABsF5DeSsKMvo6DpXqDPkYSLtv2bTBFVn6zaqcVsvRdd6oRNSH6gfNiKnPo4FAkYPiMQewrsSnR6pJ5ZgQEq",
  "key4": "4zwDkCAWN9yq4H6W4TWZyfiqpbPxWNvpRb9SyLMLCepYitvWnvm5A8iGU166d7yTtFBkn1ZCqzjV33nwfcTN6V8v",
  "key5": "2QhY2nThrNrshQzGeEnddzazN7eqkjZAYSxyfoRfcLuYosYDF75f6cYNQZjSNosiyR9McDxrMzW7N2AgF28Bthkj",
  "key6": "4SRq1VDrZTaYN3r2PDZDS7xmLLXWibk9uRUE9dwXyesB462oTSiCGFsLWQa9ftyPsJxBfRimBvEEoK65ZoqFAZaU",
  "key7": "Gx5auRDrnxSPKdY9j41VRYwBntRx7eYathdqMCvN2AgFuX6R5kEe7ZbQR6ySKSRNqYypGQC3zmCAcAWthkY2FWE",
  "key8": "5wAWvv3pJQrYTShwTqEaqH89RuM6pZ8G1WiSKv8cMY2c1RFRQHUaVQcg1bWkhkAaQQVcB4ewKvW6unxzRvvY4ukn",
  "key9": "5m9hSGU7r4w7ha7so7vRuuN2qGT64GWkBef8NHZUkjKFqkuPnQPyJ8huTSU4cn182rRwacTgnxWaEZa9nPt9fyos",
  "key10": "67Q2i7xzoYbVeE9R6Zx4X9FwQRybAbNkvhTryo8BDdwEcsPfb4nPXdmFy8kdSMQoBQ3mGHSK6BAi58w4EwVJuH6a",
  "key11": "2cmChQMmE7bdvnrzUwYARYcgMUBByjqrouW4DxQ6kHx19sjBzDe8aU3y5EWfT5xNbpbmySnVHsFwmkbdyebx1hd5",
  "key12": "4WzT8aXcBZmWJgJjde3LfD2smcWAPVyfkCvri5Qh9hcJQs9xh5E5jitnzRtwG5duAawK3SeHwM59dSA1KMj6f16G",
  "key13": "32u7KZRGC1aiiwF4B9FA4nC2xJSSda2YXBN8JpcybkCmGueBXxytfaEyk8TRLzEUQEnMmqjBsnePk2nDuYrwPGva",
  "key14": "5UCawpevy3SVWDvXbMeYh2Cf8hvnu4QfvwdT515zfK2VT6AGJbCqbhHvLW8BNdAzmsVnRvbTWno3AhVkkyJyuYe",
  "key15": "2xYExttXSfdYXnA9BjWbjdmbijPndxoB7QPNmj8KFFQgTftmAUBK7cWtL56Yfo8ZE2iVUdo4sqedxVrvbVe8q5ag",
  "key16": "MPq4qhHNi8vkfhT2hEJBfUvoDQbJfmurdUV9UvPy2MyUaQDanjkXLT8HcAQcU7sy2yuV59LPtU8nX116GDoPPRv",
  "key17": "2TSnH5Wi36sFxyKBsYcJz1xUiXXQj4Ub4TEqEr4rBgt3P7Vy93qDPydFCRwnuYsdPwLViH6uA3Wo8D3Wi2VDyVuu",
  "key18": "3fJTnb8NRpSyddrk8ZKpuVRpWbRUaA7ZHTnyi6p1VhSqZsB7FXMUY7WxnPGgYUoimUWbnEgEq1r2b23D4wj2metP",
  "key19": "4qWAySHaw6kyTt3wQndY8zhnJb6DrwCrYsfbxeLownKEqKGaEYH4nh8WjbahHGyQ5PcRdhKzyZCPSHTeYhuRsFNQ",
  "key20": "37bLaFay6ZutdqaJoRpzRmfcEkm5L6UxWdZodJwJ4YrKQHNomwZqnzqpB6zLcwXnAa1evP4Z38B7y8vCEWZRTsHf",
  "key21": "3vxiBYaytWjfCikkvzcUv5MgFUDsdgVcTQAQGAoAh8M3vEYn6hqPdicRn3JzoYj8GBqxcryGVFiEaPaNML4BoeLU",
  "key22": "2pSZ9XyWHen9ViawGW6t4sLAHHhS7B4Wjdf2YMUswUMdQKCrvctxSygkUpDEcaK3jvsWo9xCrxsv4HMKaRRCiaDJ",
  "key23": "D1bJUrcAkifau3KJFNEZyymE5NMWktNNBGixoYhET1eVxiMgRXu3EqSjjw5WB5CSt3gLmNTB8APYA3kQ9ygpPMm",
  "key24": "4sfp61gAfVhpWBmEARHoenpYJJQ8ctpXhKefdgAfYUHGrbQMn1uphwNFzqdgfPGXUSxgiRMaicsTRNg5JUUEr7gL",
  "key25": "vSyY3t19rWDyzpBwpZQ58ZhpsAqYN9Rk6kpjx6pAgwfPp1VoiQMDoexx4JNnsFE4qcf9CzbDLvoLffrq9aUzANv",
  "key26": "27kZqSGfZEqFGqD5rRzN75XWpRXPLdkgX9ii4qw3k13KmUAGpN5RDnvaVLMd9m9eCeLizzYbKYkeB73jx5puabFN",
  "key27": "2zdnUEsRxNvtS6frLey7qu1yQENcknYbZF3aqYim6MK822gQohkJzohhZ2aeLis9zTcVbrdvjLgDKmqC6KXaJmVq",
  "key28": "AhFCxjdAaLLJ6aiaQ5sFuf1v4cGmxkzUEdAhZGxhNuDgZoAbG8YPE4uezxDrMZaskhtvVkSA6ygJspTmdxtngJQ",
  "key29": "5Lsx6d3UDW15TK96MfQTHwmedVaU4YfWfR2RPafdwcRzQggnWTg9LiMkHRFb3gs4YD1PmBUA6wdruKnq9Qowzsgr",
  "key30": "4Kbjt9yJzvPdnoTWKzwrgjkzNg8NcxiQycMjLCXDBpkFfuTHXL8AVLUtp7gFVURFxWJkRKYzqvRq2LajUUKKf3fP",
  "key31": "2ffSkHtCC1ht7j2BGCA4ePJC4v8onBDVrCLmQN5eXZ1th2d8JKkqwp22vydTxNhw6hQ4EH74ZgVG9vDF5aaEsWRX",
  "key32": "5XA6ce4nQ2G7vCCJvRMHRKBcQ5JtKh6WBifzi1LeAvy4z2waPHLKRkQxSKAzqGaiEiyLyau7Q3EHH6KKJbFoMofZ",
  "key33": "2LJAKqUjaJU1ZGaudk7d41ke1SSvpvAVvbgP2XByDz6HYFknfyEDXPKHpHybqA7vYdxyoTymXv7xgeBpYUyajmDG",
  "key34": "5dhWHuVja33YG3R7uoZ3Ujx7XvPBgZj1qJ4kgkVE1KGtkQVUW5xgusGNhKeVwzVWaTnFB3EfRFD5KNyf2yyoy3QF",
  "key35": "4QLdwyVCwZZ3PQynsS8vF7jUqFFZjktoZGNBZaabAWAA9eiVVguuEqTfAH7dEMRvAChbsEeDP9JQRw3C8JTySyd2",
  "key36": "4MPwGJc5KR2QUk97h9NhnWtrPsK6TnUKsYPNTsHwdGKF7ecH5KT5zejUAdZJNG7p4PiVPuDx2Rik2gfgB6F8LzeS",
  "key37": "4maJEmvyDMdudq2kYvjy3awbY4TGgqjBcvmKrNJe2wwuEx7km8hAXw2uxEvb5oCna9pYrHjgNuFagxRkeAn4yXuW",
  "key38": "2hNxhU4ZZwGvwwQa5xTmbb6YphdkdfQjHmWJmyLbZHGhT4ou4g9C9Ku5yuCvGqvj8YKLnzZHR4o5EQogXw7DNSBG",
  "key39": "4Vru1mBc5VyaTQLPPGAX1pWqfBKnPPPDuhPKwEEChDC2FtDoDRptmHBK5NwV6HaiWK8wSeMQq3Qj8i4NfbyXNv8x"
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
