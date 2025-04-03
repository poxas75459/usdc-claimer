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
    "5nAWi4LkByibaN62RH7dPf8q7jLr6RBdK9Mt3YzpsbzLaH7RpkVBswjv6sJpRAg9LwYtkAXSMS6xdtHtPVGjbCX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UELjhdvhBN4tV6cxa8VDGKgCgty6YP8e7eLBTenHCyd6QrCA6QKZneUfXmqaSG479TRfnTu9WsKwaAHkVbVCURj",
  "key1": "sH6Ch9pcAXcuRHbwLr9SsjwEeK738xJppgr1SuTYreKxCPz9tCXoGUY1T8QqvPNn7roaZdczyWLznXNHzj2Gbrb",
  "key2": "TNfN7BEaHKy9JDTJVPymFNwrv6bPKwQBCX3D5fBSJVRqL9NofEz1uwvjQYS72CP8godkLL5w6foZDUZbitX5WH6",
  "key3": "3eELC6aq8xJyJUWjboPrhdHbXX442uAkJw8fxsMv9YafZJipUjKN6YVVA4LwtK1JGVjEip7Ur8eu3jsfKxRHpkjs",
  "key4": "2Zb4xKGgtsBwCMK8mt3NxXzDYMHzPFLk1k3g28A254pWczerfDkYdHUneB3cGu9ot6q7BE1eYJUZxYbT5isFBvzx",
  "key5": "3EF2bQzxwjThRKfFnyyVsrAhGGode8DEESvNctwpjvcUgLmJxzD6CAspSXgrbFTuN9gPEFWPj84pKKdse3eFVXM7",
  "key6": "3cxz2BQGZHy5Nh6ViG4h5mMjYJrqfiGFAucjCwaQY63gtXRUYPRF1RL2bWcQgfVQNMAsknrNzpr65mCYrhxqmHNH",
  "key7": "4Q6QvykrF67xWm1fXVJk8otxB4mW36cH1mhfPLQTHrC9Awn9KTHitetnz4bzwKo1JNqrfziP6EwRvEC6s8V5Nawg",
  "key8": "3Q4K8UrspHTKgZqpzuczq44ZsZnLtQ8K36DBEfTKHMCiPvLESU7FKNMDtCnM5bTbe7iw5cp8d2mBNEDhwS8FhAyf",
  "key9": "5p4nAUvnNEQu9e1AqqC9nXEwP8zpX2oaTS2ZGZApqtrXgRtyp8zyMQTKqfsovsTNwGKxtcieH9j6JnXbNoWpp7Tk",
  "key10": "2gZMvRJf1mkQK1XxwraCxwsVMrcdzHZr1sZywXWBQGwuSLpgfAEaeRQL7V3gVMmbnPNcPS1JLR49UpTnfv7uMAyo",
  "key11": "3E9rn5qUocaby64zYyLYfC8zKpTmWRvLWTWXJd2seuorT1WSnMsxnCvsencfT7gju943GxhHpvvaT6qAQVsQ8Yok",
  "key12": "59QrYoDorUZvwHFw5gALRKLjccGftkbuTXJRquraZBoe7kp8p84i7CCFaJNpuyaH9NH5wUgqUrUJaV7eMUSShKgq",
  "key13": "1GEwJcuJAv9EBGfcdwtDCMrcFpSsRF4BLaaFQDkz1E2wboFXtJg3DMuMwjvMLBis8HkhC29cAtgHSii9kCPc5uE",
  "key14": "3gT9qXwQM13oxPyHC6caq47P7RWAkFqERfgPC4xJFfii46UMYw9ygwREcbTBXxBc7HQKdZcfu4Gm1Q39fzqJC9Lp",
  "key15": "4DCzq8fzudda4CiHghNcVjnDzLZMQ9LWjzwmten2j7DPYYNd39P2ZNawniA5JnDsG7fdjkxLx8XwSjsJmkyadtGv",
  "key16": "gGRr5inY8LxpCt8aLzMkWiwgYcc2Ee8EPrbtHArmhHKXnc9CcgdBCAg4kuDxkZWFbt9bazeMsZcsVpjaYARHkZb",
  "key17": "2KPhMu4ugEM1JZzZdYRKq3nfYzcPBxzBy3JNB8CBkKieqZrY63pVgMdGD2bDv6wEtLPrtohbVyVHHjG7owTW12fD",
  "key18": "4RKWaz6ufC9pCGPmL5uB9v4bySjP5AdCQaTjVoKxw4xvdtY473nizpHjR5HmvETEEpesvhuQNRc4jKz3y2WcL8rj",
  "key19": "5zuwfVRgFf1tdKqztedMtQkDnZNM7XJgpvVNLJAhw3gQUVt1r9ZiMqC8uBnaS94pjQajYzWzCQwzmhF6vYvHePXm",
  "key20": "5X54FALfquCzacmwkgUZRtJZSnBywuBEix2zrxhdscWbfkwSRsHH7P6pTh3gPcWNcv7HorvPzDUvpvKgFHeTbUDG",
  "key21": "4QkhKSmkMiqooxvX9pCAtYnoGWMQ643sAa5vk34aph2UvjZ9ZgZCxLsFPRBDrSrvQuZA4HMH3ScHrLYY68QzNYiF",
  "key22": "51bobNZTgChz1nCKAe1VfLK9m3R2eFSCeNHP2ekaXywTrYFsixyAaiUYQMZhr54G81kjAYxAVwSGhkYo8DNyJBrX",
  "key23": "3VNSF9DTymiLnE3xUxsUMAD2oHugFBqLHyL1H9hf8kxphjk1bdq46ZJfSRdttboHfbnVtyRefRmErmwfQH4CquzN",
  "key24": "2Fkeq9xqS9aieWr33V1E2MhdeNAxr5GxJVzyzDAc6gMBj9ndK7FrndGnFNWFdXW9iRP78WLxPniwXToLDXhGca12",
  "key25": "3CRanwFYdRWwGSPx4yuZ3J5MBi8XGp1r88Qpg9Ryx3wZuVvp2dRC3vwHHNDcC3mgR23iDAAr8fBkxorxSayBG4MC",
  "key26": "3oKuiXCup4Agypps5X3W1URCsDQaaEyJvjehmruKuUCGimnzHM8VaqcSeFVac4QwiAJWx6QUBF2BZpJKyA4poUoM",
  "key27": "5GZBzUqFLASyCUd7kAEnSMV7MQMhNhyzCdkSc7qZS6am99jTxMQix2R9eVnFgqF53usLUfJU2FQYth5yJJo44sy2",
  "key28": "4BTTV3SFQMuAETVh8VAXaWT5rdnGvSt7NDYUJqXNUq5QmLdMXPP58xgJjziFJyCBUDsdyPnNmEvrHU87CrEEdpv1",
  "key29": "3QHEfUyXGWWEeZSgiEWmbzrzjVLwDpcyk5dQ4bXwARAKpysN92SkHrxJPimuxi2XFJEk35YgRWuxP8c6djZFimsE",
  "key30": "3KfFmXqJV8YDXcPH679r4KeS7kTXnhQ37762LTWeYxeNS4iZ5t7cWVnGp9HZdi5uwFTNWYXoMkwCAuZ3aBMYAn2A",
  "key31": "4hw9UnNHXd8nLiohwpvkPSMZ51pVDjVDLy2ynpfwcqndMpsxkXF6PhPYRFdjXVe5hFmUjP75yBMpgDPvmNGXzHxP",
  "key32": "64pp6zXvPMfox3LANUq7BTXZxfFS25q9NNoe2VNRtRS18rz88es6jgUrktiLaY8eQNfJMwRmdx7BrqGY2k5hgAXf",
  "key33": "Hmmx2daj8E2ofSagchtUxEoPpaM5xFxnuQTHJi5CPjSi1CDeYNjLFStUaMkS5Bnir3JTmngzuBAwdeZHKKTVSKx",
  "key34": "5dkLE7HUN46ebCEZtfyJZi11S3hhtLvi4u3cZFwMKHdXdWHTm4abMMcaWsrwcmtkEXyQss6hXvAmXXCtsxe215SG",
  "key35": "4HajQFxTisH1nYKL6mJQzhFjP7vPUnJNAiASisp1k6AKhN5rnpfVSx41eSePXWWhu5MURYiLzCWte3kYnCYE9kw4",
  "key36": "4NfUqsEAQX4FJ5aVtysyhsvENy2V9hKrR9KX3XZQAraVsjwgauWSw4Tid7eMLuwjZLwdd1ybHwTFnFpaALPUXciP",
  "key37": "3JW7CqTNf3JoVxi1ZLW62iKop8eqitMzYJFt3XKn83gHntaGxqCQJaMz3274YxFZQ7FyA8A1jdxzkBVpNesvBgT9",
  "key38": "54heGtMvWaPt3CRZDkhnMM2qqqDYeC8STiPQNDWtWE5igmPKKyiYpRy7Dk1J2vv11G36eDmqYjRjLG27PiVhmyYZ",
  "key39": "5TgfpPZkGMzWNSNxi3aPZrEBMgpNrPfe1gRNz1tFpgGDjDYUyCLxXqUXgag3RKCTZKfq2bs8E35n19S1PDMZeWST",
  "key40": "3aeEBCPFq6SKx7dFN5Rnm5mWbC39uAeVowBaWnB5jmFRxCNbkXsHdB8fbyjDzUZw84Bz85aRi1S1hZDpfFRpkXfF",
  "key41": "5nXQvt9ojue89DkJGMyn2og4bEhaEpTaywGSAmcJ3o2MruWm99uWvkne32etmGxpPturnVomBRJRP5JYufnkgXbw",
  "key42": "2brCtQAk56kEpnnMRytpgPafahpGn1EnjnQ1XN1UdUVfZVvkLqxFeYzH2VcmCsiZ7SR9RnSkDfDg45uZnkA5KTQA",
  "key43": "2xwdB13KipCmtv8RXDen3nf34uF3g6wYkcrUQX8oHh3LqSyWBvn8BnYFcC2Shf4UxSbZ9aztSpHbHdmqKsC2c5DJ",
  "key44": "5uSwLLNu4Qssad4D32fiHLhPwW7mvUZPSHKu6vTzcVJYbXS8jUuvdH1kG7Sz79h6p9RE5KvMjZV5TC6YVCsX3sHM",
  "key45": "5XoENpvdgYz64obgy4fvxz3UvJ4MukUPMWBrELcp6JzX5vDaZSirRKePzewnxgVy6pskPbKht7Fud5YNrqPfPr3H",
  "key46": "Rqk47C6vCWWJ9gyUuaWzmQEWyXeemitPAvHBWxm4p6y2pgmsrrCp3hUDyyXrwmSRJhJTb1ZKtEUbLkDH7uqAFLp",
  "key47": "5zAjSmouU43Eh9SshsNuYw4DwdohT1oT1dz8CdkvfCEH695EKsU4YcWh4ekpJYeBz1KuFfQjmannKFv7ih21pnPb"
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
