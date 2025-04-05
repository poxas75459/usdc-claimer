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
    "5WFS3Vw5smwLgEr94Kj4z1g7Ljh8oe3H87PNf4CsfBWnDziD36pxmU4su7ULa2XFwefTufjzray1i1sKj4uVKRx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fd5uLappNhJgLFtqUeQyPSpZ5xnamBTdaQV3RzRuDDU9RyZP1kKEjMH3bGNJLcScPHRuHTYVYVDyosa6Tyu3pa5",
  "key1": "4LcJnSM5Wbg7Fo7MZg4TCWTs8VnHgp8PYErTfEfPSB4LMv2hD2wAUfwRiggAUpd5GpNvGBieDu9cLEAA2yks28pm",
  "key2": "45XRqaBTRoEa571wP8udXvMMSRCXgPdBvb21i2DZptLE4gmxLt1Rb1oVuWmB79K7oxzr4PthJr6ng3UnWreX4m5d",
  "key3": "31ztLzQtcyWk433hJ5fbkej9Uggd3QgG8Ra4hnmqFvFKfG9ge3jdrKmiMk9c6d9ufFPu4cqbmJRxZdrYcoqrxNez",
  "key4": "boY896WdZ5gn42m5V4H1vPaWyLKjCkJAjLi4quQdSiSGwk69nnRKbq41CDePTYmnThymvkbucVoCiL5Mhy4zKBa",
  "key5": "RpG6gV9tcNiwzaWf1Xt4i9ArVQ4mKrA98EKCHcPb5iPBPG1bkHfKUi8ePqmD2MDnsjZSLBiE5UQXfopqwdgrXXL",
  "key6": "3xBfXB5hoV8hfVPBNwrzFHP4jwBXmDBefpUW7Nyn2CLQNFvYrtXgjpCG8ra43HjgXgxZ59nbXkzNRcTGhNgxNoP6",
  "key7": "5qhNHP71ALaGG4A9qTUzK6NGfnnZ5WvsowHeg8SNtCvEvq3ng6HxaezAnndtoP94xzpUGpXsFvM6m1b29WJfXg4g",
  "key8": "3hGsBh8tfihNbaFVk4xFCXz1Z82fRQH9z7bqqDCzheeNZEUKSJ6y7NPuxJE8pV92i5GkCcSQgUW35UxXxE93EJro",
  "key9": "9jCftppAWQTi6jdcoqnJE9STkcaDkcQLTs8HmQ1ZnovsEQJGhZi2qVqJ9Q9ZNAF29SPMtnDZkkEY8b2i9XrmoYc",
  "key10": "52cadMRkus1SGpHoa9tzu2Cj62iBnMf8syJeFXDgUnGxYP2kC5ecWnx1QojUqm61JLiDr2PXZcGmhyoyVWjTQ8HQ",
  "key11": "3yaWbpWmJuYAXY5riqznaKbTuBsM7MaMc1mHorGJfh4hnMz6KzRqrXzkn7AejATy4cmyztM4DgCTDqUs7fEf9TzS",
  "key12": "5WhwWKGk1XdNCTwFPQq2S2fsYu8TMLgWjnpR3zSUgz6rpqDQpfVbNVgPYKmpD4LMs9wAjtgVH163aHBSCafmPmfe",
  "key13": "4ar13UAa56JEGz2eX2tkfMZVHu7GPnGj5Rbh8eC4w8HT3U8wtU4b5y87oEQtjvjyDkuKx1LMfjr7EtgDgsDyFuf4",
  "key14": "zY6em2rv4zGhc8vBHupNmYY1qX868QSyN1dUTHrpzG7S98jLaNvRKjysC2AtjNv18dfvxiC4BLSU5QoB4xzEVnB",
  "key15": "ZoigACadCsXPpFw9AZeb1rneQzHFNqXr9fVehuKkDNPWH4FWePW6kn6e3GecEtK3FXLBX5D3C9s9DzZgwY3b9Qb",
  "key16": "UF63y61kYsT3kTmKFNAMCSX8AD9CB2QHPuTe2t7BE8KCUG2z2CSicut7My2KAKrX4dg2svsWWq9RpVW292JqFwx",
  "key17": "36555eXPTWcfPBGoxJe1diP66XR65Rz9ckm172z3eyXeqp3rYxz5hbHdgd9rMn3knddhvNJBqnaGff2ke36mdfmQ",
  "key18": "2qdV9vNeEna5qi6X6ThYfAUdgxSJKCML9wZzBjXU2sYo7yreQhMNQ9QFgNMU76Wmp19iJZFQaAjLAmNux5GohHvs",
  "key19": "FF67fsoGN472H3VUAbgCzCPC7j1tV6X6jk3EPdtSoEZn7obff3Gi3NnPZ5vhMh7bmDD5PAcjmNGAbmvYgimR9Ea",
  "key20": "363PFtvBsC2T9kaVhRTgneu9bVzRbYSNyLLBHqRmS6XZ1MmiphTf1ZXSPp9HGrq8jogKg2wLdo9Sc7txfGS7TwCs",
  "key21": "5Tm9kzY6Hz4wt3jugxfkEbzwmXQh2eLghBitm3uDTPJdcG86XBtXZRLYPPVFkNkT8VKZqpPaDQ4LHkU3mT7CoTe1",
  "key22": "29yPh9MLa91qeYmtjAR3LA6d5ccD8Tp33wRwUbLfzPR1zXbHeKQHyQv28xk1mqzABkhHqEnehXojbsrujdgxZ5s1",
  "key23": "614Dj9SuNtJuE4LpRBo38U5RJp18BojnkciMDzrqdx5yAZ8ZMer1qNy5Ge99faYY7h1g2Q5Wm1MsZyatsRBZeHWb",
  "key24": "xZ8AfQzkpvmC9MWuojHAAUj34WTZ84krEqJfq2dYNCGcPrYR3mXGc5NQ2mGpJQAdQAFnGqD5tD9nHmxSt8A1V1F",
  "key25": "4JqEss6xqNy9dxUGEvX9NrsUWLqkYE73q6VtKXQyqn9gG5dz2ESK54Gsa4XsmNjFbytDkKDMmGgnnQvng3X178Ne",
  "key26": "2DiFCYySYq1mV5kWeEDfFWPkvaqC4XG9rd2G9QJjxaVssrJSFKB6AQJDkcuK75az4eohkqCXdn8fA8EVxsC5EKe9",
  "key27": "8S67AjMpBR6GMkRCQwhwSR9DafNCg1a5ERsdJZG6YPEc6BsRDrJJRJSESxbt5KEKSV5sXogyrHCzyFADfxktget",
  "key28": "NtvLrwXmt5h6pt2xKhuBr2DHAJYGDKmygsoNPuhGsLfQSLG9FxXAz23Fpk6D3VxrpWyVd7LH7tjviB1Vdk9JewS",
  "key29": "3megNkyrstuQN5ppZpL5hHnmgAqxGkUYqcCFi7Q5EsgQSHvTruV3oAurVhPacAQNhTTA6aqWcv77Rofr2cyL5FLv",
  "key30": "C3sKMSRHB53q3wzhK8167M5C5ZAbPuZLAvwHtR5A1tRBWGZ6UvEsLddqm9VzDw4bMWtv2Y7Q5Uwbeujew3wMAXp",
  "key31": "2oTirqp986vV3x7kRJmJP7roRRNsWg6uwAwvZ1hV5xhX5Y2R9RtBbi3vaVcngs2U4Cw7CQYU79AdwvsAU5LxGUkH",
  "key32": "4hwr1wccshmkXnxT6eamoMgFpvz8BrJJTCion5oJYBa6ZMEFuQpYCQj3ZkSoXtR3kAZDzL7PhhwrVFXF94cH26P9",
  "key33": "4Tw3ipioyyi7pd7kUFS5EaRdqRxSfWqc5XLc86dxUs1fT2r5wJWsXsZ765SbmzzKP2VsdbgK7pffgwtAJqZwshW9",
  "key34": "56Nu3XaZmgNXU7bzrZTHoLJMjJtFc9YYWNj9y5ktrLNQb9JZkwRbs5MpEAtYiSzZQ2PnMn9q6DkTiE4h2Ce7KmRi",
  "key35": "jcHciSmBDyAXXe8f56YyTxHDpa4GtVfu3L6tmaCUAbLRyEcPi7vn4GCnLhudzDkdT5hqfMDB3M4fRBExxBV93mq",
  "key36": "4sjhBf5qS5M1PNB6s1UrkhoGK37CqZ3Lc3TVrpB9x6UsA3SQFtUtYWnCtTcc5hR7up8WZM5UpC4wKT5ffA5jZyez",
  "key37": "g3zpR6ezY9vmBhgjVb7SEFYyhM4h4vVn9BQY2y2sjufM1apouBfi9jMmamE7gEZi3MXHGa4xiJGAXZZhe9aSfEz",
  "key38": "9PV9vSLSE9JtQuHrB3NwmicJ6h4BqDHN51iHrS6335SfaqXhd1EA16KxawBjjJUroWCfMLURboq2MRigX71xwah",
  "key39": "2UwCEZfHvaaskX46oGFH8hT5SViyeD45yf66j5BfCpVCm9jLHjNKV4a8FgCv9ygW7xgxVPfCjJmt3xrf3bkwaTpq",
  "key40": "39GcXJLNAVwWCvtR4fZMpoDaYNu5keN63YAKEttbMrfpds4WeZrFg2Cpr5mqLFQsNdwY9tkppzqwQhBoWroxU6zx",
  "key41": "2FYeEKwr934eXPU5nYHfGsotiboYwU5yRdxhnZSXTWwXivF7RcdyS11ewXmwKFLMjvV8NYeyaWdEaPyMqSaByLop",
  "key42": "4f7VwW6Fvy9xMtoES1RLEzsNchDnctWFuEuvrx11aXn4yYP7nx35tSMsjY3JRSHGUkC4NGGKjZNa3v7xXHrWeGN2",
  "key43": "4tvPCGgQreTNgvW8RgDqeJWjJmr5v5cj7ZGKYuhocw8oZHtZRHNqtFhYMTnZhfLRE2YqX2ugbwhZR24f9WgZ3775"
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
