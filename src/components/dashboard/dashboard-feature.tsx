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
    "3E4pg1RwXub6zFXD9SH6pCVP8cmR5JQrhNqzwMfkhY6Aw8f5MpLGk9B7rS5RjU4TRDNXGKxzKQHZMHNqyuXxTkE3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tDDiYXFPjjT9aQ8sdXv8jjYyhgz54iPkqiRkyexgiPnV8PnYhEPSANuftGgEi3vKhDG5xePi4njP9KhJ4abnbac",
  "key1": "5vCoPT5niYxrZJA8EvEEK9N7ebGTACoKf79KEtbYcV7uZhwZDzKMPpEN7LwFqAuSsjXTYUa9BcWZVYASrkMH3mLC",
  "key2": "23GdgDRhRdYZ5yB6aKyCf9AwLTGj4rqwtXScfCJx9E8yrcgiMjQmJDm6FejTt98D2E8nVNC9SJvRiHkE97gjZkgZ",
  "key3": "3MtnTYN62YumTZgAstmATaovYboCgY51CL8PAzEqrgLEXv9QVpEG1tJvQo6gLThsoBxFuQducJVyYfC9vjGV5Zb1",
  "key4": "5ASb1WNqya8tFYkcuJ5CXT8vDaibdD6DZR1ryrsBh7y6fzmnDJr46hX8XoTtQ8Ys9kKDZ16SUzAbUhLonifsu8xi",
  "key5": "2FVuA5jQVZMCSBrhMB3MjNGnd9STMD7uURB36ejbMQjkDwDJBPTckKJrnhnFgx8aXD1nTbvJpdV1Q1VVeW3Fn6rU",
  "key6": "5cL9GqjS2irjcTZL6uT3iXm6itiwvWPZxyJJmT82h5mERttgEaYuaSXFNLFYS83EoJBFHskaUGjnyFxxsnXLTvxc",
  "key7": "5fwqvwoJ8oL82r1swef4hzeKzE5stJxHXAerDMBm6keVt6HGu3J415z29D7txvzXaSjsi2Rke46zz7YzGrhGgedU",
  "key8": "2NEKDExK1fWV9JKYAeUggGEdgPgSCWLPNMiQQT7c4kSGaGgCckAz7op28hUkbi5xuCZY6BNwpVEoGaPgmrrN9gET",
  "key9": "51bi6vkCyf4vRCyZXF4JbzfTWDdxQy7xyRC9VzMqSGhEFeKGUgwTqxq956JPqrXsVP3iwEMmGeWXLbJ7KoxpPgEm",
  "key10": "vAranGQftYc29dJKh4EaiRRNTns1z52bcv22nxQsNAoQfZXqV4JGEbKFdf16KMb3FYLHViSJcqVMFZJEDWizz8i",
  "key11": "3HsRF4ehtZvYEmGzMrteGbWjCnb5MfRFTfQUsKE4nhyL5LDYhcQsSnVtKFDkSEXwANmQAehadiw7ZNT3KPazR9ai",
  "key12": "3k2Jb97DxUYcw5HDQddvGecJB6jvVWxeamSbYfAuwdjB351WxR1ZM4fkoTV7cjapK91Q1DjgNFv5vPtiLR34RWrP",
  "key13": "2Ac8JQ3gReCDhG4yhMuVoXyVsVyqv63oeNyvAyvpZnBRdfa7TGFtXGHPRD7yErdnGUZNaYX1scKWp2YhJew7ekNV",
  "key14": "58nXwyNnzzZbKk7k3VdWhVxEaVzXdGKk3LtcoFrDVXv7WVgzGLWVyuCmAC2r2FnRf4NUZUBPzHGTKFRt3qxiUgSw",
  "key15": "5ssBGFxHWuiqUWC8AttbdcqwxHRzzaebtjp4pFRsmAne4a5cjso5otpniavoBDU1Et1Rn3ydbdpDwqz4PLVnkNke",
  "key16": "59ZHwXNrGwyVAA4713LFnRkdNA3kvBn5RTvf1hmREz2AUTrxppZPdqt7Nh2cqns98KnYiJNiUGM8UvbGAaoDQiz1",
  "key17": "Au4ipEDWJbk5z44c1J9koJ2WUbnH3aF5yCZyUT88nzkzLZG6LNccfiNG1a6S1J7KLuEyiWJHgme2uAhLXtEbkPr",
  "key18": "2gLutJ45sfdFP1vZT1diMfc9n7K1cbvg4o4a61FFGBQmfRdgEYGebrVZZ2CECuYKPsDKdMheYYpFYnpq2zwN9K1t",
  "key19": "2Qe5nhCmuvfsJ2S4wcXpzA7d3zoHuBRPHfid5syFLTRnAEev4BotZUmpN5AbxXUE4jAz4BME3maBvcQdtydpthbJ",
  "key20": "4MVFKo1vTaZ76UzSxDrpgoG1Pkc9c2WavwjWoxLvDp1hNKgcZo84RUQeH83djHMmdNyP27Cfo74WPo3KGmeTSLhz",
  "key21": "2XF4TYUbfaHoT6QfmsA15ZkhxiviUGFKDkyjFtekNC9BMrDdCNGaYg8GHXArUWpwCZRW3nNUFS9URfyooYHNjtLZ",
  "key22": "41ZKnD385EMCx288nyqtXTpShTF19WJumDGho8nLETtf1P8P7bdkNytKwe5fqBWeE23W6n39myXtFLi2QsVAdgMs",
  "key23": "4JXd3d1JHwY1E6PTi5Nvvtm2VsTL4dsebyqqDUEhW5ujabeTnmzc6FLffxyYs1aDYVfST2emaFW13DakMqAjNCfp",
  "key24": "4CTQaKib9ctBTBxGRd7mgyzAWnNbi5u8WZXbTiBTiCr1jQoJVZ5fXJx9JBLfdEcEhcAJDCvWDwUr8J2ehhnYBPhs",
  "key25": "3CWgdgyurkcyMnLUZ9fjABPcQfy1T5Zx1wDBBjDvd3xCLPTUi3Fq7KxU2cXxhM57psCvRUUxpg1E16SjzkEjXAra",
  "key26": "3CVHh4LJiJdRDPF3XoMYPkEKT6fgqDchAv7ppxTaM5S2qNRW3QHEqusuaLb1th4NZ9FcKLhxE1sG4ixdxBU4Jgc4",
  "key27": "5rfBiBpACVRQnR5UToG5XAJc52Q5CpgiT3TSVEJcxLXjcGknq1crnafKM9zFdqt1n15n14syoqVHXccZj36ka69y",
  "key28": "5CCXpTjUbkiVY4dx6cXoSokGgxccvmPUEVtWBZsZPuwzEDTMgEuNRLC3q6Ps5K7SwMicKYSyix3vy3Kp2sXCXVo8",
  "key29": "3hD8hexpNrY62ACmcdUxUGXvnVZRGUoU5qrXAw8PiKb66gnr6BfhDQUpdtxhb8PGR9r7aWANsgx92yj7ChPFMdmU",
  "key30": "3o2yTR5wxSSQinjxBbD6T3n6z4QhiWDCSBhwmdLttXtDgDoTKPF4BeeKccWX9YTmBdaeDxbwp3W5yhA6ecrBQpCy",
  "key31": "3pt5qrFpU77dq2rFc9sWHE2hsC8UEWbeT8JEBmtV2z9rYEcjFUuCM6HMpG1g6EMcps5j4zEw2WgrXZ6etUQdeu5D",
  "key32": "oQsFK3RkiRkU6XcySJLK9ZJkxtZwA3RbDQdMdcQrHTnbeoimuuegyeWaxSKX1DsFJL2UMiYo3Rki84Y24Xwb6gH",
  "key33": "NbenaLAwXMPtkUr7S1XnfukLaZyr46WLTaWbA6dU7jhqpRTLde1AsfSjX5CUgiCPLZZnxY8f1JwGp7HyHNERugU",
  "key34": "4xHbSfzoxfUue6qBcX6fWQCykwd1nXih86fiXoL8tyXFtJSxtn2qrUzbpBBKyYePMwXtJZyFzRocT8xRvpGd3xsu",
  "key35": "5CMpqAjWaFazBFEA5yEhExsi49diZ6V3qe9DKEvB7idnh9GKCrm5MHCJv2nvppCDLuz9jerxnsHdwPGYZ11mMyAV",
  "key36": "2dPYXPuHvha4Ky8susb4N8vbhVSKt2Zwgonjey6UjQtK2VLizn6TTKA3Fs7LcYW1bUGSr8FXLoxM4xk1brcnSZpN",
  "key37": "GR84RXotTEQg3GaXz3EfNMBB3dEDYqZJWi6Kx3EyaiZ16YK3CvKSZV3PRXVQA91vSbkL7vsJxdidGdXcHi5JsRQ",
  "key38": "4tEsnH3jWVdkLuE9f9GjMDvkMbbRezMP9Df9Xhzb4GHEwaEuaFXk7BB2CTUVUrTqoQBc5XpaV8pvHr3ewZ9C8cFD",
  "key39": "4PmBcxnKJURLu82U6LDoXFGRX3RaQk21ARf3B7w3ZDKLgJKJMyTEkAgoP5Thw4EYRbYW1AUdhKWYLmdKYPjDZSa8",
  "key40": "5q8WKMeM8zFRxXAV6poaFJxosGWDWXjSzb6QJDWvuL731PD9Mtyhu7dN73eaSDsiW56dLaXm6iDZ2NDmt7LJ8FsJ",
  "key41": "t9FoY62ZHyg4Vfev6pEcUvhtVDkACLzzM9p474sFVPhK9PEpprQAgG8fj5yzbLg4mNpFt8qg72aMz72EtYTQFbT",
  "key42": "GrW7y4SJst8Vg3YokT41aPZ3ycdrrgWiDaYY6TdNp21f8ppeharAjAegHDWfHXuA7n6YCosacH4FY4zzAnfKZR5",
  "key43": "4ygMn9FSfgRC4KPJQumDjjUQnnhzBnYbA7RZuWNwNkfzTkEHt52WjyL4Lv7C6BY1Pe2CrDWzzvTxgwwkkWzuMCCc",
  "key44": "44JHkXZtKwwZuRo5uWsfuxhYXcg6Xp7tFjGz3YcTb7tbqjhJMcjWJQejvFach92g8FAFVhcsECwArktBQX7nbLCo",
  "key45": "4VLG5JzXQfbNtZLJcS25ZSmkbgFri9MBpjqp4jybwcmJJmgnLyxGT7RmP1Bnqxb5xHTMWiuzWHiSGvXSyqm794wm",
  "key46": "2RufCi44joQwL8BKv5ZxpfC2A8gdb82wVzdYHppzoW5GySEd2xPc2TthTJDoytscskfA8Uw8RK7o61K4c8rLTbGi"
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
