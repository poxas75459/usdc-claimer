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
    "3ngH8U2gBipzx5X1C8mR3i68z4AedbtT4XaVLNzRj5MeiaVBpgQXCFGPG7pZmMiHp4XqCo3mkC2tGhN5kwMpCtmm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vi3aYMJRVsoA6vYXWw28AkseK6QfYs3khSMQ4TdGvrZ2eV1QfNsiDBWtt7sVfmSzctwZbPsScQAjsZe2ugb4yWW",
  "key1": "2JW1suSinsMAjm1xwmSGf1bugLGr1C7TeamBpXfWEt5w73zVqBzUX2onNCYbDZwMzmpeHZQvHZsWTxTHq3RNDkPa",
  "key2": "2gBxc89YSVkhVqu9354hEtYAa7qottKKRvzqrQzG1Cprr7XaSbW6dSC1bMzRs82gVpJKUxaaBZ7zfYTPWDgWLyR9",
  "key3": "63ufS1zbFcZetGFix153c11vsSPTsFdW8JDNGT2cEuxY9uPeVzeRcNxPPcxi3vyyFxn8DSmb6H4rSL4daTSgH5ut",
  "key4": "2XXhxeJhR6F32VXP7HbeUJXrNvHJ8atdAGKNx2q3DAdxWWmhiMXov4DLqfktTnXe2G3csVhAtdKr1zcmiDmsDmre",
  "key5": "4z6vMLdDnUWKGzVZi9PgK3mmGUUG1DgteYV96LAWcefoBuWZwHmYWvtpNHQo36ebuhRbggfmNtksE8DaR74H5XEt",
  "key6": "51QrzW5nWdnFpxmbFPz4KAXTRuxyvwkj2Gmq297R8yB7uqQg51VmchtPZz9WcXwKEhhty4bjiMHbWVgecCY53SUD",
  "key7": "3huxAJN2Sx7r5DhEVPdjrrdM2FZvgSkH2sJEMmdbFPssGpykP92XFhzLTGBpE96gA7mMdhHbWXDRc4oFAqdLKwuE",
  "key8": "49VxP3pA4L9e6Zrf61kQNd499G8oyFwTz82UC6qQNpKBBrLnB7fxfcBB9CEBzK1JBg2TjZ4dQQ8zktwWw417JN9g",
  "key9": "Jz1R1CSwkNqQSToMsYgGu5S7A8qPnFeu6rg6XtP2wQ5M93DjvbFy4vEEqUHDSZSgEMLSj83CoWjcji75PN6fiRQ",
  "key10": "sLUW4kELp2hFKTMq9jVu5SWfV1dntnWCYyvnoWdjr2nznUKWn1MzyBRk1473NWTLKTXFzpt2EzG8VCpGF6ZSmba",
  "key11": "2bTx8p9LtkSFJAtJNZNSJnqHfzQL84bNPearttHSLGRJ7eZLzYgEHfKeF2QtRwmoJWEA1w72gk4cy94UuowcN94a",
  "key12": "4gKpQ8AdyVp1CYu9uz24nrBdRzuGEPhyMNuu9ngiLyJbEXVQL7zwxq4RFs9rGbKDHRfUkUQwnt1dkpumgrWupPr1",
  "key13": "43TwyvpRSouABuqS8AsRAT566cAP4G62aUxLcNSoDL6PP4N1M2ZpgqLDoGirHkgxoPbdZQrUc7UsT1MMeBthVfwF",
  "key14": "5QC4o2Aet1d9jdVGnJJAQYs9nBbKxDjBsPHS4jnc6z915ZCSBSvCjCGiz3XXJp3pM7a7oyMMUMSxHcnCik1sAjr8",
  "key15": "5iWHSSqApvpXsS4F4nBKjj3gVXjeGYui8rxsnB3Pr4F3b4J1n1toUGqwCd6oipMkGbMZ14EXS6TEa9GYRfCzXdbE",
  "key16": "4kqGcXWcXTvdto4npVpKcgxFqC4kksHiJSg1xiACrweBxtYAeCR83jcYSr4BzB9pVtpZViaJVR6fwsnz1fDhoKHf",
  "key17": "57sd8W2xKHFKLDHaAR4eGuhV3wvGESJDrWEQWdkbi6zVgERhJ1jWkZeiXS9geAcwcEXPwD8p2Bmt4CdR2wQj9PQV",
  "key18": "52Dtz9cWKhCn5Qg5w49Gu3P3BHcaQeKAZ5WGU41DSX2fpEj9mwVRNWMyCtWXJsybwj3DivdzDoZEVBuZHcsDQNoW",
  "key19": "cJauj9mSWy7q9dQcjko5LdrodvrVoXTz4xnZASikFnXTKqKm3SrJiugTeM4zHDMoim9pqnZtaZ5xNcdeyDUTc37",
  "key20": "4K5hN5UP299Y2mTKY2BUTWnEJc7VHwSk5pTYwkV6mryNr9jQ5WvaytV1aNVrqpj48RPovcLqd9carFtWDv4yitqR",
  "key21": "246Vk6oNvvPLTXCSWPzf34Uqry2twjZy6Lq4YGybGGxi77yUWqqaAomXK6MT1jXrd42zbbHytDFEkiNKKeqT2A7r",
  "key22": "JQBisjzwefBmoHxH2jYiGexGD268UJNVkt9T9XUgHWK86gtJVCY2kRUXeS8Jdr4g778h8EByvzcsQsvuxi6m75r",
  "key23": "3TbiykhgeApwHBCgscANBbEpHJRdhH8rWTDUY2JSUYwiJJRgxe9aBvaJFDNs7DrwuWjf4kQwgwaBbsfKMtXumsid",
  "key24": "5HEFCUMaHiQXDXaLf1Mw2JgKDUs7W5D1HhfdZt6vcfgDrPoKMeUBT8VEgsb98J15LonDLF58tHZzWVesQAvDbWTb",
  "key25": "5QQCpDdCwXgCDriUkpnMxWykgko8LVWuG83SeWczqegAx6pLTD5Q5qZ5okc9r8PwtEjHmdve8b1o9XfbxYA6CtT",
  "key26": "3oWrsXUKqZRsmbFb5dLe92hk4iBj9tVVq7Erk6Nc4bDeupzDromPSLumJANd8o5BeNFZVGGCtqwcVbxrFN21xqDL",
  "key27": "2RPm31xYYjrXskfqo44Ra5FNeeQvaMX2uwhMFwL7d9pQ92RxyGNNMHTpTPMLB9LmZ8LP8RPbeid6fh8ZtLhJzeYz",
  "key28": "244A3EEWqbPv8gu6x7n9sCmaRJrHZEANDbzmPweVrr2BrA2QENPZLBoabnJz7xZXtaZPTBNzeL3oY7KXK4TES8sE",
  "key29": "4h743MFn5RyZgU8dRS63Kuev2qn27U4a9NzwwuPtw6KyUbL6e9WC2vZiUyKJwZKmGEanYVX436oaQCgHy5ACw5T1",
  "key30": "KvtuhVbtJ1i6DnX7eVskgQNx5jZLTPMm9NA85azXgUDPW9PPQ98QwM4PpKEbrTqy7erDVLAwdHoMoGfQuHYSZ3w",
  "key31": "4ztg7NpGePctu3WioWAg2d6srMdwDnkeWFW6CmV2MBqBKCLdkYmMMRaWppPo38amMvN4Q2q8RwTnhxToMzmKfqxc",
  "key32": "LAqKatQ41L2jkxmU2NQAhk8JRZydWY8EG5jz988eLcxomNQC9ZYpYY2AiRRqS6CTYysK4ztsJbJFvxZfdbXwZee",
  "key33": "4uwJW8BZ3PyLTNcnMMGSSnNwA8sH1pvpKQWbFr2GsMiXF28oxiNbPXiZgjZmTzJSn7pe8w2eZLusxuRorwojZ9bt",
  "key34": "4wB7n8nNTt3dPDVqJ8H5eyqHMQFc1gPXXMotxFmXpfQvGrQ5iGijvNwPsE6U3Mw85Dn53ze5mhYsvA3FscFkUPBG"
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
