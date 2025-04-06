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
    "2hw1pJPX1HS3pU5FkTkj2EcQ5u8Kx4A799xebjkF3Ea9hV9Nmjsd7MyViEdPMCuD49dGYUCxnRqFMEbGfNoeivoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ALm9P4F41Y3iqmZabMWuWoYAX9qjcXft2yXiPgxVMacUGXgCq7UazKScQe7V5ncVimbwUmh5opKLrXz9ustxzCv",
  "key1": "54KquugxBkcnSMrNuvxdxmBbQy9BWSNG8LjfFgRsDw73DjsGuN4fCSbE5hyNPAfD37nuasLj4HmNEaFN4z1yiWSP",
  "key2": "L7YkLUVciybSFfon9MKcS28pUwBZSNq2vrCr74zTkJM6rJcuNvBYAc1ink47Xgc8k7TJpQw7LeDGADtLFE36NQw",
  "key3": "9TmsVWUeK2Pbs8RJyjrXV9657P3huYnea6G3ENxrJ8AKsj1dkGKotqAmF1725rPGWFyaMyW2iNTDSX2BfHfbLG9",
  "key4": "E3eZRW35nvjystbb2fNqe8QSfwng2FjAca2FMNnF88kzLqa8L3vojwGN4WvGsWPMPmpfDbaghKWn8Z5XHKDRPED",
  "key5": "4rBfDWqSfwWaJbL1QK8XLxK35HpELvaJzEuRmh7is8Weskn8y8MAKDZrCBaka222GH3AzKKRYoydTQLizHYUoC4h",
  "key6": "3rLd2UgkutQYXJcgaF5T4hLSKKppQetxDECjBSaCbcKrJeHFvMdh2tLKYzufakJnLQ1wCscQdX7BKnoeg8ahBFkG",
  "key7": "5gcdK32MD8gkV4oFtWiz2p6yBpzkWD2oTC4V81F9Zmu48Q6yBPp6bzPXJY6VNcXzsqa5vzKBkXbejBWp4L6PpQXQ",
  "key8": "FJQFuN4ZMsdDwi6RKvCwGpHAs5BMbTj55meE7G9cxLq7foVG5hqBG6ftPh6k7jufFYd2VJKtD5cCVtt2rLRN4so",
  "key9": "3vmwAAe6EynNyH3RHhZAR9UffaFDKLkpyCxs4JXrHxcdDjPCtr53rPwyPmTXJZy8Ux97Ctk5gr1oUp8wTZtNSJXL",
  "key10": "2suK3mtpifepXBM63iq5Nma1AaSiYWFKW9BCTQoN88HkSLsff6Fdh3ritEZFiRVnaBM8ZLyduebCvPphkUusF6gM",
  "key11": "2yApoa1HYm19nrbFeJxVKyjiczdQu3ptvqu4jeJogwcMqzqfDionNXjYFWNiaPrMz9umnqov4XNKU7CrC8MgJjZ2",
  "key12": "2tzNkxphXF4SZjEuSkgMNbC4kH5AXgvGkbs4bmE3teGGHyfZceVHbzuhjZKfxd4sZLFyFvM7YZEN4bMbyrcZnYnv",
  "key13": "5y5HuMHLJqhxW31y4Tuuptc44tQ8DrBXeTKucuyPHWYwP7DhKKXQ9BHHr9RL1L2kFrZbzmfhNjVJD7FX5BcMENEn",
  "key14": "3o2iidXsz7sWBdBYYSimhT9NTcW6p4kakrnuCNYhR4yF72vpM2WuL41J7Gi3CWDX64363pzcTqTbABEYk5BgcYzD",
  "key15": "hH5B89UoouZUf5DnmSxg1AH9AtKGT1CMYyhCRZwXSDJqpKddEJb8uW2Fk9dwEZTZqCajaUUKQhFZiXbeWvcsCjB",
  "key16": "4Mg57f1eGqafvT1KJQ2mmtUkxybbY3JaCZMK1C2L5ksTYTY7ZBqsXfmYbig96X9wAxo46NzuaPWdMqDfHk1raou1",
  "key17": "54geHAUHP2XD73FU4rGrUrn2zXLBEeWitCyQG6SAHR7MqzKi61qgC5wXT5dtv5QCqnu4Bcu3Hs78kNtm4B4yC7kR",
  "key18": "3y4TNce7v7FQZkbVkjQWAkPoyixYuTktAZKVGfEX2SFpMJnuoXsy7YfFHEdyAar4MofGFJugBtwxpYJzLfQWiUGn",
  "key19": "HTQK1BWxtWTTuoDK9Pro9apy48QCJduMRk1FJ64TWtj444JD5VgtVr2PNCGoutVcGbmgCaECHzbzQXNiYRj7Ae6",
  "key20": "3MJ3LzTYVy8Kz1YBtVtxHpgZ456YUTkMKHzNB58PoqNPTx2baUPJLhHjXnoTa7rngSneXr3rHGNi32C1oLCKBod6",
  "key21": "2G6Pfhmq3BanBeXXoa6PqKX2nYxTskDNLT29G1HdL6aPMwgqDmkn4ET57qGDU5Ff2nVDhwBNzp75QVoox9M3hoEp",
  "key22": "4XUQ2tYYGXK9qsQARdGNA726ABZemyUyCDdDyWGuXC3tSUxaQq1wye26yXf2FYS9tcXG5rsdbP14Q99E82v41TYU",
  "key23": "41a2GW4QR48iAMfd2Pf3MdU9oRdeeT8UDaFDXQZDaJtUNi9e7kg83FHcvzskJgrFF937gXUFFzpHFAs1FgWuxKoV",
  "key24": "2G4iW7YTfEJbsBTWKaJ4yQHVo8gNhxqwjsaUANG5fouoLYXX1Qh6HiKjYuAZDeFXmLMpLe17oNb7befviHrMEQse",
  "key25": "31kF2DXYVtLYtvvhnT6rmAc1YvwP33mNgL6ESnNvZ3vTaYk2NdswP5tDhb4i1ABJLN4esstD5ubpXWFD6FK76Xgp",
  "key26": "5x58pyv8N3v8aCz3C3m9q2vgXXomTZg8KhDgc7fcztWD3LuNN4AkMZVRtWZUCCJMmPXX7V6g7g4mpJFReKF8boNx",
  "key27": "3m3h1mC6bbt1MNjJj3nx7ehnxyb6SZQWfrQUS8dsVJQS8N2jDLfLxNi2bExC4QZJtRPLFAbY3xjQ1oJijLUb9J1R",
  "key28": "23mWJmkHxrhwd8sgpXAoVBvPK7pGrPXgrbbA8qM6LsF7n7GkdG6LV5apQ699fDaf2ofU57z1xQANdP9Bjpm8SZRA",
  "key29": "qZYNyXzuy1DY9kNLNMZN2WJzbqMkD6dJe3g9bYS7aiKmePbuXKTnzx3Proo29pydKmvyn8ESSX67cGmKHzXMpkM",
  "key30": "7c7fzBqcRdgs3txL8mid62sDMuHtw2aTS159HbGi89CXiGdSDKsfkYuy44ede27wvSmrYqx6CPXopRGdEecLGva",
  "key31": "5bqTkeWqzEUjWsiNKNAAMutkWgj1CWdTNaqQFEvB5Cn9rBbSBmDbSieB6YYbgRoQ6MgjFa1R4MCFDBjej58tHisN",
  "key32": "dequ1CdY2nrFLSQpRZ6fuZW9KX5ooV4PEqKEphxeAm1WpdiCMdntJ1xozWDiBx4Q7JwgHKbiPQC3vypWJ1SqRGV",
  "key33": "LsSx1QXnbAA6yJTYPjXhS1bZV5C3VCRbmT9unB7EbgbGPd4c4kxZ2iJwNYcwzRfyDZbcrtrTJzAyAyGHNKaSfry",
  "key34": "4rbAettPMQVDHUJFjFHhAPJeg1y4ipjzZ7fzpkR1iyUWYyiWwQrVu2ZnQZH622SgKVJJDsZuk72Lq1bBR5Jwgjxo",
  "key35": "5xFJHyVSASgJiTDv7t1c7ZCwEqqmYGm6PEQ9LM9gPJqjf7LVt7qsUGe3vobRDaFRPiL8e84TZY5mGW15JFKNtMNt",
  "key36": "3fFWKmXR7pt3Kg2yNzno6Ai5AH5nB3AmeLfiaB4hu3SksqmfxggLQQjbQp7Y5t1CobHvmShxdwJhRZ6JUjRpNFt3",
  "key37": "5nYZ6CBgeKpGdU18AR7aPtHivJyoqgxBwB1N6GQbBGbDwt25HrJ28b2yagVGi3NH5LcHbo18b66nViMPJQcod5mz",
  "key38": "5EiXpucbsPM4pCH5ZLr3fmGNNn7ePvBKBrkJyjCQe8J6Xvth3RQPxDYN7LWSjNqcF1dzfjEhkRXEWhegH8CRXqPU",
  "key39": "szHxooBBaUvCnRR4cFSdF7tdyxccRVfoHLRWjY7MNPNgNVCgFbLdPybXPyge7Jx9TPEWaEfKqoXkMiWoNbBDLMt",
  "key40": "5E1tCA8T34WAkPMa7Yxei8nDciHj5QfNfefGzFaxdgwjXMVMm5Jku1TqkRigBLayJTd19fE6yp39LNu9UZ2f15xo",
  "key41": "3rD9u5DMMvzhMTsVN9eMh8QWihQm5R8YPvcj1uSzqgbz2qmNePcVhaiw2ZT9hgm1uHniqfV6LX1n6BWsJ9vuGrzU",
  "key42": "XigoUw7bop4SXtS7VzuoKTFaJurXkrxzG4SVsv5TYvPxVhkQzRPec54FxrJTLjSiecRkXjf4ytt7HXpA27pdaTR",
  "key43": "4NHL3dD1Md4JfRQY9LAN2c3gWeeQ93oQssanoRPae71zKWtABEhm4hWx4GF89SyebZduEZGeoDjpcVTELTd8h6tK",
  "key44": "2ru3stCJz179rGdtHx3hUBGweq8aNHfmTSWt9RkWdPgqDa2FhQqUUB5TE1xH4YLQr2Wg1D9Q3qS7wpX6dSgmm5r6",
  "key45": "2Td2FXGcTfvVgUH5okgJF9RyR78KmYgokqbSSVRtmPTnRM998D5ZmJJ1zP9k48wRZE9xDUzJLaEfJzV1DCqQ9SSn"
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
