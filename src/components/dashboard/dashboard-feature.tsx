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
    "2mgLNnE9XEAHyPrDdDk3XX5DeeDw84zPTKdT4gETj7tib7xWZDvEsu4qKogcDBfv9yBLTqFD8fM6ozbjyvzWfuPf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MqAFC6UnbpuCNM55NiaxMRBVH3uf5ei8PvU6ixwmKSyozUXk95oRsfhQLhLirDCf7oCBMmrcXMYG8A4RnBmRADV",
  "key1": "5otRTCX15ZmrwmDc393CrtM8HCh4CnuYkJktvEHPdptqrjb6BCshc8AcwaEX9QnS7svzxKqNMyzKMsdo866TTK2p",
  "key2": "33cZgvmSP27gnwNca17eindVE8kNTbYSvLttQeYKHQiBzonJJWoLNX35DKvs786cgwehZFchHiMAVqQUfjuaBKUT",
  "key3": "5yLhBmSgyxzDaeDzXMHtLxAtKz7HXbzX9sB5Z7kPUWei25yBKUxynYXuuwVX6EpDAmj8hwXw8aiwsJK1iJKTCWQX",
  "key4": "64FpVE9uRP6KuueVYw2AQJSv9xeFYkhvTbmsPz3A7Gg96SycjtwhtomsYEqHE4TsMiDf4AE1aZS41bxosCXiiL5x",
  "key5": "42pfzry9CJyn9K7GLP3NC2PbsfCxaXECDFmxhEEdEMf8jXf9uxXKNHaPdn7gP8ZWRtK2xmhBW7bQFWUdaDp3FhaF",
  "key6": "5tpY6u1Juyaj4KvDw3f5Yn6LvpyPRW28WRaHD5EzD1nn3VeZLXAqYf4qXFS6gKSfP6cYXRGqfXSFuXC69s5NAcxU",
  "key7": "3yqXvgtEp21yLHLkUKe61EfDZZPv1PqoUJ8yaH7sBXd9xw93WTyTHhxXs9eK88y1npfaEH6MAZpgo4HAEqsU9aW7",
  "key8": "2acZzD2yBmRZJ3kcLuYySVf1n5obLHG2sUnYsEJDf9rDJ4TGHzcSXCH5vG6EeJLKwXHf3jx4MyKf75C8HWf9kWhS",
  "key9": "3ujzgtm1TEhHrufzwk4d5FDSFdcWxzkCJSVn6LPPPr9GsaLNrze93K1yHrDntZLgWy3KvM4kXjoxcqB83gYfU8b6",
  "key10": "Z5Z33kCEq7rS53rEJ6jVPLAPdVn7VYME6wjXdzqZntc5JS8z7W3kyv382enJfR7Raadp1FVdfuecW2QTzDCA8hV",
  "key11": "yXPybGaKMfyUabaLqDPR8ek5gF2Ujb2584ofjYWujSGD88KR8Puoow4HMLKM62YYJR87fmuHw4UdJ614ggrfeU7",
  "key12": "3mMeExfn9qeX8GG1eyXzEPV4LJzBhMudWRG6MR1VbaMpi4auydmQJEGrTWTHg6cNc8f5wkJHLkcZzBexKLryMwCw",
  "key13": "5QcXCavW6X9SAVv84dBa3sYaXDU7g1HvRDxLYdJopX4AM7722duC2Dxc86fS4cLQdtk6gFXYh4gKMG71otFd4U89",
  "key14": "5cNMGDHBMa9t3EtfDbsvGeDkPo1rrK5EeMAHaC8ppp6MA7XdXxxb1KxVEnmpUzMtoDfjrb9DrcemDxFCg6Z1NfW7",
  "key15": "4uWSurF4eQdu6FKf7vU2SW2T9A4YH4RnK2GtDn8dz7bBMjeYau4RBaH8NJQdw17QexYGF5VAxF8TTyEffnHUjncV",
  "key16": "4pHL2nTX43f7AU4TLYavdec7x18T6fLnbXvs6k36rNPdjWrhTThsgxbpoDZskFCqiMEfrpAtaxUvaDtVTDXjX1ux",
  "key17": "4MKmGY3VtsKY2N9rVf7zAgp1ctiqyJv3WibRiUjGHdRMuHNA9WwbzGVfZywUu6SPr3fQqcxAVxBfzQiJszPjkRW6",
  "key18": "3KJz3wZtfZ2BNpx2jD3zcyAC7yNjTXaQ2tpdfVfSECGQkb9Vsd4fUHkN3g8791D7uza5F8bSVU1rkWK4EsFAymMJ",
  "key19": "4wbvB3Csvj9t28LwGvG5UFCeENdjfPrk7dBqAkbL7iRtjKuMxtVZrBkJVAiXQ8sZRNgB5crgSwo5EZBx8xbfBWPJ",
  "key20": "21wNHJBD39LuJ3w8FcafAxYX3q3CqpEUbLJsM4NLFaQybijksetk4YEwRQLzkjjMraNmHASdB87voj6KRC11Xp7f",
  "key21": "3EGeezsE1dpHwyCTAs89F3MHJhm2i3qryFqokrFhCJdtZ2ptK4VexPPxqpmmWeNmvA9mpBfjC9ZntMai7tbhGL3V",
  "key22": "4eYEUhxuS3VGpR3Amb95d3pB8vbdGPz37acUBXC1oRPudw28VUaP3wmwvGAoDLFVVgJ4pWeXUqfrc2rs8LGDVpJP",
  "key23": "cYaAJKrXBZxQ4baRTjLryp9xK6ZhuvpwLwQeopteHn7iqVTqnzTCHPQZC1patjEnzpWqcECHGEJ9CNCEQp4vLrG",
  "key24": "43kgjvYnh9JMR1H5PZNrt2LYuKr8c8UkQFzbBQGQc9hhf7tYLVgFAMg5rFWayD9psFnQ6qDyryfLAT9RzJwapNJs",
  "key25": "4aj2Uq6UhcLEmL43Mmy5f5owrVQNRDEw4SgxW7eJf1XUsv1qZHph69VyoNLNDTxpH4k2j1AVafHBEtvSQWW69Vs4",
  "key26": "b15xnu1KkUPVvVr2uKyFar1oWCAbZcFYJyCRfDWkhcjYkuM39Sr264brV8evdAidegf3tCpMqr6FZtBLdhFmUwX",
  "key27": "3CA4D4eT5Fk88YXaoEZwfXhGUHFag1Dotz8YbumQsT6ZwutxoxAnBAUAar7CarvuoRr8wQrGR96DpX6wqpCzwQJ4",
  "key28": "3ouTDFHtRptaGqP3kzMZ8uQ82zeRyt3jyfwL46f1kbXqqDJLyyHD5N9Nqx4FmdwmKDLQnWEM6oZNTSk8uoJcHWyF",
  "key29": "5MWjBrLVZ1yaa9Y6vzfsFfJCQWgHMwSiLZsVG1JwNyzipheRJq44W8P3NWjgkWqcDNxSKmc5wBJRUkMFjpCVZvnF",
  "key30": "2bTdrYjBzoHHgJYdDb5YpJqXuDCvXHzCUnt8UBD62WevPheDkFfb1svm6A82EJpRTKN3hzm2Ea6orzKJ1nPkV9ij",
  "key31": "5HLtBUKCSHb6ZCWuHyRohB8ifyFyrvzwm5ejZD2SJ3ybAfLfmWBAPzQbyicD668YKtzKdPWQ2AxrDfVUktepnds6",
  "key32": "7JBfFLYwejyGtQRyryQgfyceSFyut9gacUPGm6yS8B2BbgXzwgaRKNEeDsU6Hy8QoseUPNhW2SQFcnHFqYx5Qr6",
  "key33": "5EhkuoeqQRCHgwk2XQhwVX7av6958kDAGUMZnkqVGLesggL5GBhcRGbtgqEj2EEK5oHmMFVXX94FAp5aQtDSXyay",
  "key34": "eaSwYStH4JKAq6oqQhhwYNTYDtrDo5zLcMY5bUGCheXQmLCNTeMSMDqiwkp3QokiSak7MUtFcQxg2Gq9bhuYDAr",
  "key35": "4MUZfXWnmeRL26238CLBJdJb7puixhSo2xFD3QvBerMywwAQTD2Hmoj3hHCHwrhQWtN8WmjMdJAfDdDbb6Uw3aum",
  "key36": "2dGm58Gja4uNhbaegH9DJXpchqnQMuVgpfKtnifV3chmB2sHzFcfGQvZbjzm5edBgdhr5ZrZamX5kdVGVRtD4fEv",
  "key37": "4GZ41Tk8b3F4S8cDFmBGdS4wbhEWcTP6QmiNxfBZKRrxsShzKLx1kRNubFRoztqapSZmfHaXZnfTHHBREJ58XjF1",
  "key38": "pSG8xVgcMaWwKadabrU8ukErSRixEJXQyykJyMaQZJrQ1PR97UbiVmp3uwc1HvtPwMToP8mfXmQwRAaSCbW635Y",
  "key39": "5cksGTySv3kT7RJASu78C2dfpz5VTKBfXMPiRYVrRmdGS7NPB15V4FkQkDJ7UT6pzmE4y7YnjubkDijE9NizasvX"
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
