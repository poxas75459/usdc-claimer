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
    "319uAfN8xZuK7s2n5Ere4gQnK216R7bmzD9oru8f8xvTJXRNcysJJMXrV14w7V72WyLRx3R5pH1sJ8zW5DXfgVqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TN37fbpX5b4q3YEXcHQPJmwvCZZDsBkNJnFNPxW7BQnmworzu59ZQNZVoQSzWkbZDYhg9xYdKufCxLRGwjxbfqm",
  "key1": "3zrWFRKZCP5xaFv4V2zdxYpSqJruKzF7bwxABV6FuSJRVhUT6JuLXhHzh7aG322RxKxaRP9a69EJrvqR1ozjmno1",
  "key2": "3NAw62kD88iFUNDJSfWdaoz8VJZ5S8d51mzPY8AR5pZ8ru3ktoNRPUJD6yuNw9Vwan4sZXHuqzHnamWbhTZdYdsb",
  "key3": "53viBAnzGNg18LgNR682VL1nqnWLGp9jgZMegRdrQRiioCkg95xKY5aaaAp8D5E58qjRH4Du7WUxof8EfJsHY4Xe",
  "key4": "5mV78SNez4aHC4AjaFxkBFgyBAs5T3vS4uW87TaD5iFaceS9XuGHV32wiU6k1xvo2mvu2U7pMPy1DVpcBxK5c31U",
  "key5": "Dmdo3EDVJ17AsDSTTwY4yV7i4Wkg7VTf4YZB9bCTb6Y9edMwkdFwiyGK1Nrtbwj65WGDppZ8xzoSR9P42MRizAy",
  "key6": "5dQovRozPf5U4Zm1xSy9N3kstcGbYusn9FSV4RuNddKtZM1YqpGXN3mz2oimWeeWF4v6xwriqQEB52CF8PUXUr4r",
  "key7": "3oEKMpdgwqFLA4ZdTmKK21XTSUgLVAZHVXsfEBSP2p5ACnzFjWG52zkbFY77JFe3MtuNxAMcoPGVAfQLW31CLECZ",
  "key8": "PheKJxJz3GgDhhybo8bDTiC2wDvnnRdsFg158g35oUK1vvcwKanDsYrwt4cX5m3C7wnpJZzfNTndDuPcPjJJP3R",
  "key9": "2XrJeZut1Um15Rjxq1RWDNuPs5bBvmkEBQgDpJCJRgah67NvSDB3wHxMfXfKg2Szjb4GMW8fcfBmYVM8ohLSvoyD",
  "key10": "4HgGMT7SZyhbP3JMVQRPV3gXbqDN7YrinC18kQ9YhjmbZ4eSVQqiYdmDxrEYAcUG3AtiH9ARcQStY3iNWJDcRzRU",
  "key11": "2YWc5gEpdGEuSoqPYh1uVnJVsLqvCntL2RoagvzVeKU9Y2FFrzAaUvGYHxNf3Di9VvikpQDmdJxzXhZQ7Y96uTfn",
  "key12": "3TWau8qXkXKHPNkMq1hmPypgwBAJ8Aijz53RSebRgnXErhuZQzwi7udb7gecDWMnMSsYVfe361nVNAGD67NVjywE",
  "key13": "4LMz7wWRq3CWNhMxBaWumF5JPn9eTbojb5rFanpP4ACE2LYx8md9aiPSZ9ynsEqrdiMWp4SYCQg62dHcEniPWM2W",
  "key14": "zB6sBsH3YfJXhiFSpupSqCPj9bGqVGRMvXWL8j1rjNzR7YSogtRftNyFMgFCrS1CpbrWMF2YpR4GYDG9qCLyT49",
  "key15": "4iExMjBBGQygAR9ez4tSjU48wUepG6k4UVQo6yyD8SbFfBNAz9Fi1aDc24UPpSzNDF75vuRzq3WkL1QrbYGadkuk",
  "key16": "3AD83of4vuXu8nDHxKuwUxbYDKSZ5kdB5eXYBWXRoAsUaRBYgj3gy5KV2Uo82KdYTZCDfLh5PKFZ5HfjZdYN76bB",
  "key17": "3jXjEeNYS9ThF3zePEcAzYP4hQZJHXskUyQbraz2uVVaTRnZe9CkWrL2UApCyD8a87UvAa9c4rTB2YpVWAmZWn98",
  "key18": "3t8ZBsMs4JjMCsieiQq25jp3iMuXGunovzhF4erVRL9mqiEkvnXwLfUj9Gv7HtXBZCAyzN2zwcdtEzN68kEtT8GY",
  "key19": "4t3p8MYCTdR6t5rUrmXVR3mdtam4if53BtjHnoDmLpBxCsfqiCUTZEuyBHj25RL1oni44DRx9ivnL6Rt1gocV7ug",
  "key20": "mCzthbHZcc9zEgrc26YbdDphMbbaj3JiVxKftWbdDJcY9Ko6N3PcaHpCtVwE5FqE9BE8ZH58kSUe6spEhdB6T6v",
  "key21": "5gCbkTyF6DJJSYetEak6wooELj2ojAK676BrTQmzFwBY1D7oFbJC4oBLbTHjPueW25SjomY1m56eevUWP1etfiyQ",
  "key22": "5zYsbsVCurQyNt3cnz9MjpoEP6LShdvuq7GcATBcCeMaQKh3J3sgkiG4LDJWJjAmtYMRTMde3zbAVy5RTRdcq2yA",
  "key23": "4EBNB4TArtoca7xWLPnvumNywUNQwFSpruFasLWnVK1g1nm2AM2xQC2yWAX1xmJH7Agis2Rkp3yfSmhjHDi22UHL",
  "key24": "2FU5Mo3RPJUwW4U1hfmBG5CHLNwGLPYJGywoXrAENKdjDcoRcZuLFStt66A6RENFjemoCtus23eQMNRZcQBjCcZq"
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
