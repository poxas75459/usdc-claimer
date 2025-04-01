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
    "3pgEHTHrPQiR9o12ZPGPTR7WmwYUrNCBT1ZFdqwpHifv6duK99y9iDm6Av9vZmtDwFU1onSZCLXTerzeYnU6Zq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DNukBfzNjCEaypgA4mkmQeYGWLRBQusj3H7A9MwAF24fb4CZoeEeTxYQtEx59ZY2hSV63cdEAbLnQrGytEAzUC9",
  "key1": "58jLXEiupb8eoGfq78MAhv6Vf6VAGagBQ6JuEmFYxnzrsL4RmTpRW1xEbwZnmST3mr4yV8SWfGn71rWQJHgNcEZJ",
  "key2": "2BBMi5hzWBXPYHiFXA5FGS8ztEmA8DFqoVBo72QSZSH9JQUyvENvfVmHZ6uj68ZJ1DFQsVFU3wtYeXHkMhEb2yXG",
  "key3": "4GpCywNrqzPBYERnYvrDpP5a7tSzpDbQw7Gi9jrU3pLoHyssau7TTABc9k5EVnELpdqEQRfuo8do56X47mofNBKB",
  "key4": "4b5gNfZAFsJVExg7bQQT8qKcX9eL9ZB6tFHWbLa95xYpbKpdiWoGjUywnhRBEQTZ8MvAw9Rmd3sp5G73ziyBbpoo",
  "key5": "3XyE96gMz3tk88X92NPp3Eu5rWiJCcUcuybuNKKvvZdVbLRHvM2uZoKzbXpiWLTWVdtdJrcFus4765nWApJiV5pA",
  "key6": "65w1eFp3hYytRyTbpRhWbwG3SrP162agwgfKt3mgnzGzaqKTmid71H2WdiCHtHuEbD1TmbkkyqRQprnpjYPQ2sik",
  "key7": "3FkgkYJxupyb2Ma9rARKJUXL9AWGMRfPfw9vykkHtyqaw7YijEv81YsGz7zAe9gMi7LwVoJTR6SdQPEAE4c4uxgh",
  "key8": "5uRFYHA4qm27RwqeKZLmJFDywMMnRRtV4su5dL1bqgGYWosB4wC1n1WAQUTa9eWn9H8PyhQ1FZo1rTRy5Nqs8To6",
  "key9": "Z6gqQh8ScSGrr4BKXgUast73QyduTCVcvNLCLvXURuEpPeCx46281EB6B4iHdsZLpFiBcYsoK6cd6bDxQCZR3nB",
  "key10": "8Fi1MzzJyKoeaycYY2iDefRzRd1NpmjrCxCtPuMvDGU1s54U3pGtAYHPTN5km7dWvPVKAGSfZkhGyJm4UDykLu4",
  "key11": "4sKNfxSdWu8zQt23s9FaLi3iYJVGtt6GeDFoz4rbYGp6cQyP1ND4cap6GLrtWS18TdR2Xm1DPwAJejBnBCqVoGst",
  "key12": "2MxuyocSeorDYr8J5Nx2PXumHJUxcUK751gcQBybyC36Dizej3FMajarJVuPKQJwqa8TVnW8cB4EkBtSaL83omUH",
  "key13": "49955bsdX699Tchci7YYb7B5ykjscDAo22apoojsBLfEo1KBCHQb9TcGjbbpjKu8ox2KXxKwo3hVk2m8V5mW66Rq",
  "key14": "2N2nYBS1iyK16FEoXM74MupJQPSpZooXnzfzAe3pgWor2pWeLyzExGirjruRq2frYf5jvcfLk47Q9F4AdbsowBkh",
  "key15": "3rkXDh5frx86EiNrRKLwzDMqxs4nfiYBgfsXsEvp2W7a1f41Y7scC72ydxScFa5N7v3AJUbkc58AxrvEpEGe65vw",
  "key16": "2mzF1QFzweSHa6aq8JzSaj132NSXMCSwwoRKRBkcNJ9SfFhWTGawjgPecJ2NnTdda5c71oNCS5fwnVnXegRCoqF6",
  "key17": "Zdwsvf3RERrVVzaUHBPebEF7ZE9szjGz2GJ9pHBahoNarVcDxySGM7jh8fQyVt6jgPj3mgxFyThbD7diJQcVuga",
  "key18": "4YcGUG2gyPZw98NjZp15WD9dTeR3WMdybwBcjJNmyvHUQHcor8Nuqe86gzzyN8ri3zZQZyDeQzSaCLB3QUVBFHCL",
  "key19": "234VkS6P4okqAqCrWQ4xJQod4brCrgESk9KYwAcZT4Cura7nV7oXPpy3v9qfgGhz8WkZ4tjEMowtZqASsh4kGLgn",
  "key20": "2LJZZ3as9xcVhEZzHUxytL4CFS5ceJ23tQHZPwB3RccR9Y6QDTwjBUi2r9284mtQdfVLZFTJKZgrwb97j9mV1fUr",
  "key21": "2W2nc6m797HRTjPi3snLjaFjCyWuMa4FnGYN2SAtyEXo13YZ9K9nzgYEQR495B3Gz9QkoXepwJPBZU92pzNqoGYB",
  "key22": "5NF82fkoSCEKouRmWJyb4Twy72ChjFwNNDHcbmsRHPSBmL98pniDFKJM9LkYaE81NZUz6JUYVcy8PVRmTUc1NPQS",
  "key23": "5Wbw7YoxK3LwBnGTRswszo46AfKLaKtDVWko4247xEzZjCahrVJfTYVFxW5FcV8KBZkqdBP8JXeQe9QE5S6K6wpt",
  "key24": "2XFFdexYW2JdJgXm5KABkzpG4RQo3CtTVGzS4BRLdGUKhdiPiYgUrJmAHT55mRDurYzsCpMJ7aeQdN4xVUXo8MEq",
  "key25": "RTWasbykmQYg5g1yfUoB4yY6K1mJPRr485Vm39BKDeV9fenBLi4XuBiUpQPmgTsCagsUPv4QuVKGWV5zE6j69sq",
  "key26": "2U8rHDz8r4oRZ8nA8kYeV2JfyYaXejTgU7KVw59c849Q3Ae3esnZVZJuQndJHYb5tjmSxYYmhTv731btxcySc8w",
  "key27": "4gEbomhWE2ERW2BLyi69wuMCHJXRUC1kyDGSD2VYPhMFzcHha77vGfwqTfnX7PHoDTEGxrHPsJ1pbfaokiZdWNAp",
  "key28": "4RRjYCEsBqdfAjAeQSBYJxY5WUHmNAtWRz5QfH6cx2nzAmuE9Jz78kkn26Vs8oLNR2LB4kibCs1VDXszd17rR3KX",
  "key29": "4N3vLKgFNid5VBByfxhfemxEcUy4sa7K9yZe5diF7daTMiTmcGug7CYHdu2n6GATmJXL7MCEBPowvfFpyfccDY6A",
  "key30": "4HJpmea5ypAZdP33xcB6Vc3QWUpgJaWNPJoNGpDqVAvSXXWXqgCSc5XgYbp3KHNT9nHK3tUSnYsH3mKadH9NPw2o",
  "key31": "3yWRdHYfkBQZLaf8gbVnY8XphYwmJBAPMDWcc3wPWNDURpeoik2G2Y7fzHibeMKAxKN5mEhiU89Gx76m1YkiFhjA",
  "key32": "3sBe4KL9SCAhTZFjjCtWLuba2cP6PiRbk2HgDiM42PrGnUBM1idJM56LarqVnhqMvduPAcGnPhcFdd47uGpFRpWD",
  "key33": "4avfC8HthvQbDMUxa9gK4JP7ed1dGcqLoi9Qr59SUbzdUJM3owVrbSxLkUVgeaBy3KsFpvmUuyffeF3J3SNYBic6",
  "key34": "59ghNX1vtLDTXCF1bRJNbhNHqW5wHjWfxDFuawrh9oAqLKX4UxJRsUMW61Nx3oX2C4h1g5r7JqShkLxUMSVtRQEd",
  "key35": "vjSSmb1UCYL219ibpLhWDT9M4y4HXshroLbQNrC5wMkKY7KHaoam2xqFTPJbkx5eyAh9XLceLwVVz5naZgvKCVE",
  "key36": "AceUycZ35Sw3D7HhE4ZthLg1veUFeEqR22BthGM7jEMHToc1g87XctXfxDSbXL5quxsyxsUwipd1adyoEZKCZ5A",
  "key37": "TfpW7qHYcjsLL9fLnqjTsTyaWxrh5dB7gjz81uQRTQAemw3xPMSv2PvUTG6mgYdSjBFnkcG3T84mTy8f2q7tKce",
  "key38": "2iAix3LkkFRndTiFrYgUg2uy8y9RBQhmektA42zprKFa4Gouq5tvS6q1Lx3nuyt47MMLi6jbZMUcuEu8dBbGAecH",
  "key39": "5K4vgG1LEGyZsLBLCDjaLpoM3r6WBU7wHqKFJM92vaZSr2iNXCT56jE8AbVjR4XVqEQ8pfmZnR4PjHmQ8fjSWuDn",
  "key40": "BMGFS6BksqdGo6HyJPiHNGfToKwvvLiBq7MzhSjeNUQEdPBeshnC3mQmR2dGyfTxeMgPXPnhUbn7q2uzWc2i3Hx",
  "key41": "5EmMbwRmR55PoNwngZUBMAft6qEdqgqMCDsJZPynNJgrn87j88Mkd1eRVyt2EFdRpm28EPYEvb5f65akjWSE3ohe",
  "key42": "22pPDihMhH2MfR3oeDaLCz7mBVRsrHhpPdUp5uJNHpw1mmyUCmRbpBvAsQsbFvrNoVfEgsp6LRkWPCYnbedxVNjp"
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
