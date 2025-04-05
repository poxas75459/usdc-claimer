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
    "2qpTRYXjojdAQG7XyqXTJ4X5KzGhZ6NtaGqaCZKPhM8eE5jeovMKgaaxCtofzMqrfYbXAg2E3R1YFFZGgfFczjqK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fLb218jRyTqupPAC4ThAQ99cxJzYLDbigLnAV1F8xtBXHvyPXPwtMBecFdSik7bgXC5vkpcUWXVvxD2Pf2kp5C9",
  "key1": "5pm6GPP29RR4iyRP32UzK5GUrU4Pum3nkNjZ9oeWBdEMNNLu6KVTPenzu3vnJmT3Rh1GtApVL5owuQRCCBj6NnUH",
  "key2": "55A5hJtDjimTmvdG5jobgyUJj4eWs5MqbXsYof1EYaF6roGG5spua2qg6zrVSrVti3z7tVzeBnitUNq72kDUkpkR",
  "key3": "3YpDRwMzjNU5hUtezCqhKqhmdZTUnjhCp43ARzY27udyfxAFeAHo8LfM8GijP3BjQEqR1PdK5Y1vYV5FmNZeu2W5",
  "key4": "61g3V6AqpmMy57Q4sfYzcXfFCsYCbLuVFBC5xEihzSt9LVnecoMRCYhBmsPAPiSMeSPQPtVaag7APhYwWkJXfzap",
  "key5": "2RjTvnMD8ZuCrLT43gKMohYM54jGAuJrxmtPDnVKvmtsWgqufQdouqoJKTooogLovWqQNyfvkFq4fhbwuduyFY6Y",
  "key6": "3py9mbUPZSD2frA2ZXm2D1wC3vkVkE4Rb6CMieZ2PjVhbR2GVuNcq6jKoYNS4erpBgzHv91ka3YXVvat2oejst1X",
  "key7": "4dtVyDQ5ceWGWt8itgiEXt2Vkw2qk2zFB2WByq6AyPpHjJzEMymMXhe1M6mQLbG94ZUJGkTDGQZaLAPuYMfpGNn6",
  "key8": "5kotew84pdBMfkkfbK9gWijDmhj1cJB1JyLHng7Bjkf5wXSibFSrJVPc8u1Smdh5dPxb9wGhdv9uMAVSvuqAjPXJ",
  "key9": "4eUpPUHn1FsdriH4irQUN2KNRwi4fsHFMA5TxAVN6pJtcpcqMiutg3KSSiUacaiMSFMTiLKx8vr6Y4ZEsnub5Kb3",
  "key10": "2PNFP4czGqLgJPbTKsn1VqEc9NdwDXicv3aJi84z862guTarL5m9YfVRVGf1D2pz3NG7pGZy4ESYo6HQ3M2iXuy7",
  "key11": "299xLU8HSoiKo8bKuQbNoegjSJPvPwUqb5ofp9FXKuqfueuvCZpr2e4Y1i7TMj59eaJBRZqri43PxZgjTbJ1KyZh",
  "key12": "LjrJaPrsjJ7p2sT4ENLYh3M5PHwgaK3ioeW8w8g7ZgxKK66gLgdh5LTACzFPjCju25Qw4mVsdqVra6rtag5mFBp",
  "key13": "2YsQrszhXZ3HW5B9fEioBXnF8C5sPKqbrTn8bpLiySLcRY6xPc8H3TVwDed7tY6wVKrVDkK63v3Jt3wJNAwtrstG",
  "key14": "5Q92erXt5kwvB9eamtsd4STnUNfh3cwigaXM5nyScGUdHZo9aopY8pbsmtLFX9VHMkPnh6q1kTpaAJigDLBGBGdE",
  "key15": "5qSs66ajj1g99t1BbW7yy7HjrEaRjApmZZKqUPrNmzptM3yZCJhMdn6ZRDU4ftyCyhwEhYYv4puTeZ8ALkowcXz8",
  "key16": "4vBSL1NwNtqBX7yDgyZzaVUfg43hGKDrkY7v8qgdTrbMY6aTWt4CAne5D4aVYWBstkTXVAwBuRtNp3dRAeE6bRbq",
  "key17": "53HR3CpMJGhj8oeza5t7ajPBSb1C4okVGd5XcZYcDsx246k8ZU6voycKv8L6UXCJy3d1pgtMSx3fxp887PU2MM98",
  "key18": "yFay838WGJN9HRQdHmqbFWokefW6DscHqY4wjAFKMJBhr5H4n9RYfpSfBFYKyBcTngxsQ8bJfx98myo1NY4kUbf",
  "key19": "34Bk8ZAF347PZvUnz7RwP8eBGMAJJtBH5pZGrAy56LZDmPt7WU8bMYZ6ue6kWCCMZtnqf28g96bMuPWtYqYFv26z",
  "key20": "66ogGhcisfXVjcUF7UGwa8cYAxRv2Kfmjkqi4Ps9J4dCnaYd61vFcyfHSbW7oj4ghtbFbB4g5ZQuoxinTMHxRXKE",
  "key21": "3wgJ3FjGyvypYffpP2znWArzd7SqXy8WjH6q4EUb4tdVS2wWVXb7stbhvY7KiBVPxekwmxh58251GaTMz46n2P5p",
  "key22": "257iupewbx4FjWgeJrsbUZ5DqGns77UeCZ3sSXQM7RbBCrm8xQHLfNsbSQLUewhu21kr4d6e5eH8aN85tQ9imMw5",
  "key23": "W62FNcN8HXTaYtNgnCXq7d6d8LwBtaT6GYMLc6VgLQii7SJt63neFkLeXVMDd88pYMHzRp42sfxAfKoUHte5i1C",
  "key24": "5nX3QCWbinA9wrediUhgZDm13oRZTpAAsyJUW8pF8RKyc4eHAgWnG24b68k8Hi26dGfMxw36gtUPxNkf7zey9AMA",
  "key25": "4aLNEYG1YNHzJYxdqC3gngyVZoPQ7Sps6dsJtwF2fv3fan9TNoskFAxX3fT75CA741HatvZZAEvk1vQ81B9K4Ey6",
  "key26": "2YyFBnHnLZE4DAZkjNzX9SYsQBVcvb9zeGSzDAS1yrNDfRtsc8CLHqHnowWeQq8fHv3R33Dt5s5sbH5kEY5mtNdV",
  "key27": "4zkyouraqqoq9SJV59V9ZkebxqxFRa1J41xBv7FkuwcGhpGG4a6bJJR9rQgaeBX5h7fGiUnm3CRAkrDKbSdsRwWg",
  "key28": "GdN1pMjLopaaxKNyreeXnjdoLdDEJAPKtiWDXjS9DeLCpGxXJhMpdUw5TR63yE9RbR9CVUYhdyAV9ywh9e2jnDd",
  "key29": "5wTVVuiWECKTWbC8XHRBa8cJu73pUVvtzcuejPs8Gu2T8jc9qdxVz42pVgKFFKQxYN5NyzEnqgMQYraiJiAMP7rf",
  "key30": "9JQBxhDBD5DQA2V3jrt8Qrf43J7LFGCQCNko8phWiAc2bjzGVTwnDZ6qttTbjxQuqxtMEn3Cohyh8Z9YguyZqTP",
  "key31": "449soxcJjWH5RZeQgZWT1t21jEHbfaxg3sGLXUdUZsjQNjAQSTkA8o6ckb33Vz9VDTWJrq23fobgRhAy7tReKA86",
  "key32": "34eenuvswifV1TVAMXCpX85xbgFbc9aYbX3W57U2JunGvdHnRmE9dy9sdqd6qaocRVz5nASdxhT1bKz8Y8ezkrRJ",
  "key33": "jkShZJou7tWPNrxHwr6SQmQvkaug9CP2ibTnnmaSZnasPsoGXhfCoFnfDY8bUaSmFoaya6P5HWjmMdVx9yh3USe",
  "key34": "5HnSJp5kTpix4mtf7MdestkDWEzG2j3vLuE9iQ9CgFFA23V7KxcLmLqbBUdAkx9QMxkWsxnF1xLcj2pMSooxaPbt",
  "key35": "4iD2HLLp6kTh6WRnTCAQp3ZeXmSBN7Z3zB67qDwg4evqeaKNWYyKAfvy2PryLDdRE8GUjn3RAeDEZzvWFJUF9BGV",
  "key36": "5sAzVhsEcg6cNmqULzHaoc6tSrgE8arhVtx4syDCregnjJkgMFtbBHGRHW8SrNV4Rm9DFq5zp6WG2fuhB2ESLn8S",
  "key37": "5b5LjzYwt5sbX3jh3bvN2mgddsMTHhVqxuCEzieCMhJ2KQ7gH91anNfUUxn7tYazjp6XrZKskASkpCyPFvyWjJz5",
  "key38": "5ZpUuKT3dCzrLroHo6r5NGfyjJRemfHBxxhokunEC88Z9cSJZKWwM9GavBzYoacACUp2kRnXGHytkPsNcLvwY7Jz",
  "key39": "3TisCbxEvxtuDXtcQSxtZ2HKd5ucXEE7gER517g27zFbUuFEDsSPHhNs7wGmwJKeQyjrAkkTfR6RTAZemybSz8m8",
  "key40": "4YCYL26z4Y7X85FSkoY9AdzCTH82pbr8e7rHEnTR6HQXFUod3LCJqTcmA8FkissvU4dQEuDLPcfUvUoB43b5T5M9",
  "key41": "sK56SDfcrLAJNeQfGp9tjmjF7S5YLrqMw4N6odMKv8tJkZaGhzNQfukZt69ESDKiawzPQfx2uMKYwLqwD2KJcj2",
  "key42": "2Qw4Tfqv3BDvyHYcPADUG5k1M5citUpKqneH5RbBJ5APP5gaWrsTdKLSM7S2JBzRpdH18Gt9B4G7DTViNZsED8fY",
  "key43": "3RZw9jrJAnreyMtLFggpHY8FZ4vk6QYcGfzt7AKivfshhWcNCehu4XQQ8D7cJ1Xpvnc9H5UkJDyUbvvcgAZTVpco",
  "key44": "3146p6mcH9jjXZo9EiWwfzh89TfrfSJzkQUdr5rEcKnL3UhkPQ9MYu2G7kETzRSRD87jinAh6rjpFsUKWN6Lc5EM"
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
