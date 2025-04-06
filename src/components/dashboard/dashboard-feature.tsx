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
    "5nSzXxwRzXZ5c2qwS9cDUjbJYCMArYmvu6ZC1CGKBfdaeewDkTwhsk8FNzxipzXAzNrQ5f1x3zZrEgYV7doEqdgc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jvFnE1hkZzuRPsYucHS3caixz2q4KCULuNX7ASKA9E9Z76Lbx6pKvbnDH9brXkevMYqJujcnKucDEc1bzgpnLyE",
  "key1": "5fVn67HRVDZWWQiciNgMJv18r1BDPwU3DuZoyAJekHbK5kaE4WGsFBdrGWJ9cddrEaG2pU5FrjHGQswQHn63JTvY",
  "key2": "55eSrnQuwM8DGAaagYkrgWHUX6baSaE7kSWCfT7AmrbRELRmGBYWw4EafeyjdaFSiomy1LuDoX5Eh9hMmzM7UeYZ",
  "key3": "4WwUKeKdwZWd4XFhY8L1qqhL2VrU4wGUFkX4ToHvLJm8LLBNrg8mSSUa2HcWRWRpTXyUyWNrxQLhETraXNWa2hgm",
  "key4": "CoMRMcvJUTL3VfrmUdgAjsM5v33prQf4uEj6cxGwDJGTHhAev4TDZAvUrU95232NB3xx9nwTJNNazmGjsHqS1Q6",
  "key5": "4G3Ati7QLoGYgqnUDz1SF2yh1r6f3rcxa6r9iyMde8CyUkcr51y3tEqWAJD1iqXa2bABH3Jd8GzA3z5XNMv66t1S",
  "key6": "27iLErfRsMc25GozoMWHq84UdJB7E1TocXsfXNdEJwAbprJtxkNQvFAE4jdbzNdiwUUH3aW7nXBZci4nGBe3U9Le",
  "key7": "3sWRZq6hR5ZcJAJz4pthGKqmJ7vA2oyda51E8pRqKgQLyGfc8dfkXse58mZG7Tcyv9n9snH9ofQFSZbDNtixkvd9",
  "key8": "HeJkQxGywPSRzjPHgkq3FjRcexeDTMMwRMvgQRtQ7BD6YuP4V6kW7xQmAQAUBn6HuNEyZwxzK8pvGmoCEbt6JcT",
  "key9": "2sRyA2mc9hSpfjjBpudgURdzhaVvmek8GSQREkZRUZtbirEbNbeZAbatP46CRGi8zP4Ndpwbod6bYEgoGidBVaiB",
  "key10": "2iAAWe4bdo9UjAw7v4vUfdQxF7JN8TLuaF7EQjCgTjcitBBvQmgEoZXN3B8pt5ruAEPmtjnXfggraRoSjqHbJsY4",
  "key11": "2yUbU9jQ2U5hAo1P8iMaPSTisq6JcKcnfKdqMzbzcYdZdBjQ1qiCVE1MGgs74P9QidhHwVpyWkRBfxRJis9QzZqw",
  "key12": "P516EA5kR8gpSXTvdWdZUwubNQrsQbTmx1vAVJnfPVDJVdSPkHXnPfBUbwd2g6npUoTYCJ4xd4sannTqQrc283i",
  "key13": "4TU99ehi8qyLTKYaLRQmakNVLug4APr2sfeW1xZfmy3CK5rCrM8NxhdgUtYn1mLWSDnGGH5GhjPbQhe2xmg8KFnx",
  "key14": "4Z8EiSYTvRyDFZAq7tEgJZHkTGdrytnsAiHpQUqz54croaS4ZXUDrJmXJpJTeWwSYanDHdDA5zkQM2sR1q4NXNbS",
  "key15": "2taeoVWbJLxX4eKfuTWkwmxe2mMgbBgvExjR7DM2LKiaV5HMqFHWXMy8eig9jmrekybfmuCXMwYfEPTxSaABgYpb",
  "key16": "Y76PuJ1zqZodkudCwPBMtexMkzHGcAMArinkVekrsdDCiHfEh9ATY2XX7UWDwDnipDxpP2Ku1zjcSqEbzintysp",
  "key17": "3Z2X9EoaX6JubWgYFhLYrZY8G26PKNBWJckNtr114BcZiKKqww2YgA7cLfMaDcAve9kFgQNvPEooesz53iXvHrDT",
  "key18": "5Uip3Lu4eLrs9t7GSCAqH3XnrGRPAg1NSw5UeV5qwE3XLAmwSg1yTifr8vXUJZaoEZ7fLhVGAGbMvLFkoYRxMYWA",
  "key19": "ZNN7jM7cxW8cxgXH63wZoHhwT9WW9L5Aee4ngsu5xxoYAcyLQ3FHc95q3gsQRmDRaH4UyyFBxvZvgRheB9BSDMb",
  "key20": "EeGSvjsp56YXyvu2PmeAq3VrFG57zvqzutMz125YCtgcbooa5J7gGVFg3sMYHhPCxw57Zn1LF2p6enh1oPBmmGh",
  "key21": "598Qfqyrr1GQ7LMgf8kou8cse9xSAmrqVunkvSVu3Hc9GdYqs2pJH97TTCx35cPReQWZv24cSkEs5yTR1PB4y3nC",
  "key22": "5fFUMGsck6aLQgP3jqXXd9GtnubMhqkPmqcufWgqFE4kvtAC5kAcYaMQqyAyjFgTrhzo6bJBcC3qD6k6RgWzpViR",
  "key23": "4xX69t2DhkvmUFrgNwPL6usK5jy9LGkNDDwkxA7MyXAcgMHsNeXMHixRzc9HAFMkacwqQDV2E2ZGVtya4LRaxCG5",
  "key24": "2pQvz8eGXJhHL9XBXwhaRyZg1shR1dNtzndtje9WzLCAcY8oYDjcyTx6A2Uo2zsGXUzAwXqXV2STyTksJ5fTbLHL",
  "key25": "3dMemaKL3UznUie9LFE4NZPCLWNfqvQmaE3PxXvFeH95AUwmFnVb9xzziiCrgQaR3x6xQus5uAeNhjhkQtqgmM2U",
  "key26": "3usEtKUrVPjBvbUBVCY1zQ81yP5FSK1ZUYaBj7hyg5qvWrH2kfvY5HZBScUPBDkJTMnzheYY4H5Az1gnLAuFnyUK",
  "key27": "2cWwkSw9UNzGfTeBUjCQJvMXnGkYVQRKZaKpSiWj5oh7B8AQGU31UNzjQNDVg1psWGqfnbENYE5ggkSotixQPnXd",
  "key28": "5ktxMDxF8mfEkGYoidYvZwUT2EXwtfCZdhtP4KnA6BNiigAosGXibBqunstYY9NUikXL73yEjD16CXVTC8t3SN9U",
  "key29": "3fPk46sXxrg1B3Dz6T6bP4E2qRUrwuBTde3uqR9n7U1peHePu4wxR2ny7Y2tMeZg92LHFD7ib6xWAr2kBS2CSsna",
  "key30": "5oxJ6P5UUtWQBK88YPxnxjz6k4tDZxRwrRmD5x26W8vSYsZTjuH5nMWWsbGjX4eNk9xD7Kc4sDp8cdR3XsMMTaEc",
  "key31": "3DqBdsNoMYnZxtwZnATgjtK34VpsUBbmG88CSh7MAn6iRRnFaMiSUyNYvjAW6Wg3qnPbDKirxK2433ALkXWQqH2z",
  "key32": "2KCPFGC1BWprL5HDvEXwNpvP1tyxkkT9hzwg1KMKqpWerRcmpRws5AvAFW1DixThXo87tGnZYu7DE3JRyUPCMXtp",
  "key33": "4myY36WHw8vPUyuNrUjmZ1FCudRFmsx66HbgMD3n8aVrMVdLnz3eHmuUY7HeUCrSCTuooWzpgi3XyDVxBbmjMvrk",
  "key34": "4tPETuL7GzUnrxWQyRkjWTh2aj2bZfS8gjh1vvd7PZUsgMSBEWxJnSfJfJD5Ue2ww3agBi4WtFGFzCKFRjumkNwV",
  "key35": "5Mnzeww3qhxXJSMSvJRAd11fLRQ1gR4NBB6kzishiKDMrj9GrRi4bg1QjvCQCpfachqSHLgGoQRyK7A5mcUEEVjc",
  "key36": "nqbhQa1Ks53bEYL4eQq9vRkkJG8X98PsfDWHj6PzBxTmvi5kfbnskP36KQAtFERJbFbUEvq93XHvsWSV73m1XhT",
  "key37": "57rvp2VQpeefJpiiTVbkkYRnbuoZxLwWyqdXdEkoPEym3rU5bqvxfsWouEe6MutJuq8dNc2GswwoSycxcLWrijbL",
  "key38": "5NZUoxWLVsKiQnj8eGmxZ55idXDD39z6RUYZWXpamAWLV4MrDRKnaJz5r23ZLhnZWbky3WpLGuXVtrNrjnrGfLmv",
  "key39": "5kJbCjt9NqwFoeRWhxKP9EYndXitVXgcTUYKuqkMBarSfErSTojoDpg1nAovByPoWLtdHRPCdHxKLgyLxwLSWEtc",
  "key40": "4aAWYmRpAJm5TdRSdxSscdjf1XQLqxKNZS944u1HTZaju5Hs5jGjF82HSLmPLMjgy2XX8sGY8e5viBGCVYHJv5nz",
  "key41": "pYtB7srShroGZgyCzQJjbwWN2F7TJtk5VktuRn7ZQorfwwy2yARrMDv6FSL1ZWRkL9Vk6EnGbZWa2D6dRNaUxUC",
  "key42": "3kEKGyfAxjTMdtpX73qok4C7xC87fjyWNfAWA4yP27Pqnt3pEBzKe9Eir18mP7nMNXJLpHes3xw4AntWkWdGh5Fc"
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
