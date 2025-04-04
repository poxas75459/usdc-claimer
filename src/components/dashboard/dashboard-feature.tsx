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
    "eDHMxTsXkDib3aRxvavWVjUj9tJAnxyqm4KL5WGFhcBt9UowTfUYGpM93dBWd8wE9gxuWMbRezMWLhpz5YytwbA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o6pN2mCgFV6ZP5noBieeygaJSamboSSvHMWAi6JgVx49oxSjUrx31w8F5gWpQrVFFKzWjcRTz5gM7huiszJ9RQW",
  "key1": "3drEM3sRKCYuQCVFPeiRypmapNS1PDnZQVxoobz1ZVCz3W9uJc4e98Drn9BnEFLB5sn6o6PWuioVUwb8p4t8UDyF",
  "key2": "3KsRtsSYB5MsUBfzfbPNZowS8FtAt8kBicQ2wGzWhu82UiGMRYr3QyWnufpBCAMLgQ4jDxfG89KcAyNVUTPQZkv9",
  "key3": "5Pf7BnGkvHehRrRmvvGJvUziyBFjzChm4aZpxsLpeZjZJcTVVv4yrP1watsnV2hpMVepTMVrY7X7xHjMXPiqpAtr",
  "key4": "5FxjmFx6tf4stFf23rgxWgjQcRAY5z2ovjHHaevafq8M6ugGwAX6vp3MoUSyT46cqBJKNnqqgaBT4mCJcgMzYSYe",
  "key5": "2REiE34RNfLheQw2qUPdnYmw8kzhQ2D59NS9XGuU6YamyXGG72Ly3ZQLQSyjmNEwGSd5BaTtmnbTfj3jTAG3wp5w",
  "key6": "3WUUNz56VVnmGzZh9oAfDk3DnD7afxVkdhvMW44wqQ4P1XKeTh8uU34SpYJsD9j6esp7jySM3vHoun2r5ZjArkch",
  "key7": "4PkvTijePfYsyDynergumEjH1B5yeWfFvMvSzHYUKn4teSevbNU5eGc4Vp3pDecQSk4WmCQHDwx9ZJeoWseiMZNz",
  "key8": "3Ds7MFn4eSGLYjc9LW2d39wBS8VnNBQrMJr2bf6zyL4bZajPCBTposjxdNwFi7j2MzWDUETeS3F11BTbNkS5Ssif",
  "key9": "2KYgLzMDqTn4wFHdUBxFKd5V3pWMfXU4Xxv2G8bvB6X8JccF35q2XeiZuhLEwywKRLsyBgwP1sH7knGAtmjTppgS",
  "key10": "4qHNbABwTzbpE5v5fy5DhdxevjNUYfL3iJxwciKMTTjuMhtcZ6ecnTPP6Z5BuntNBvQ8GGB8quky4QxamZJoDvzi",
  "key11": "5ereHi6wYuHdWNYaS8WBwLtnx7eeKrZ3tjLrRqsmpQfEZoyzHpZqanqUzcmu396voi7G5eDJEp4yMd1Kxkkv6Gu3",
  "key12": "5X5hdoQ6zL3pU3p8LLdaMy9vMBB2yNsJXgNGvPvudvVPhZBJkAZgCyjw9ELq5UDoLvbeHeqHXonsZeawFHDFpTw8",
  "key13": "AzyfJ3diagVx5dU3eB7JUsdfqLgmQdpPfBxppTdjJnttH33Rmat6NoVyA5MVQPU8ZpWtu4R1S5d4o44iREjEApp",
  "key14": "qchxW7rvyJpZ7wh2ujTDF2tXRwC2RTb8YYXYkhvrpJ1npcG4xN86dtFbNtJzbPSfzzpg9SDTAkavAFnKLfSN1sM",
  "key15": "5nGPhJQzgi3guP9k8cxiXzcDgEoZ5Fb2YsD2w9WpHS2zg1weKMN7DDvficdLggV7WJ3qttC82ZA6xHJ9JWRjMyi8",
  "key16": "66Ytx8evrZqSiPtMepgQVvhMdwyDF372QyDD6sJw6t34xoALLrQi8rzGfdfdVYVpnQcXw4cMy7jZfxqzx3pM9Tjg",
  "key17": "27z1g18qbTJXXLJGRC4tELQxsLDNEwn79XzXTTGWfDDKf8dy3n6v8dBskg1oY9h4oeUpakyvuSWnLp71vNoxuSJT",
  "key18": "64ys7f95JaWAYGwPz9kbuZG2fQvva3VgCWmhKnGzDkvfMgMC1kjRGKPfJKrF74De2pMcvU9jh7o2djSMYsAtAjiY",
  "key19": "66wJ37gfnGgfe2Uiv6rWk3AndAV45THhbWmaJFj6innxpJq7oCowxXoB3NC4r4rzLntyiN3rf12iAqjsN44i84HX",
  "key20": "5obm6QHca2gYxT9toghGRUh23RSJPcmCYkWAdN6iGE65dePbKbJQ38hAJv2tDQkS9aeU7G7gs7TekNodwQEz68eX",
  "key21": "5RjUaBhUWwuFf3wfuqb9HvCFxiGRRT3huY46Pp7HMDBbHorNYrYyCMrmDceoYAZiyjQUQogkJxEZgrpg7qfcvo2V",
  "key22": "2cYQ4e8D8yiNKBq94C9Sd4vmjxMJG2CTLcF4gNTnvnXQurHFYM7eQ3dEh2QRtkVnbziQ5vH3zuhBcripKBna3fnR",
  "key23": "3GYS3PfmEMLjUQ4QR4SsNZFRF3P5DtTx9uWbZQY6k8JKeQDduySRoBuQiKxc41JRH1YaMe5jQ7mTSXXhYg7e32HY",
  "key24": "SWhsrcDyg9Ptrf6nMGZJSo7a8pykEoRjxPUEf9Zx64LiYNASA8yQDB8N4Rt9k2NgjNhe6ELwqmo5npJumqABFkh",
  "key25": "4z1eDmQs6Vzbd2Pg86bVAdc1Jf5ZErBLAPaSutPnvhdCW1msNpD51J14TFhJg3kiZqCWh4mkL8mEK9EW2JD9jeyu",
  "key26": "2ddb134RafLqyjVTfhg1kn3XNefUQMxwBQxr2WHW7UvCGJZDBeoB6EdxXRM4qzxbJvwHdBkjtKN8JWGkASR5KS5h",
  "key27": "4mNCYWx3SLUgggRnN3tpCX41HzBrV7HDJFBN8V5jgtrGCsK8K3X1R5qKxHWnKAu23z5WjH4LQdoN1pVzCw7DKmLZ",
  "key28": "34jWAfxFrdqmgrQJDGnWU7mPVE7i6Gt9NjWWsbahx61ZuAX9G9QxvNgr53AnhQwWaGXmGGu6DQDZnWiaFy1cio3M",
  "key29": "3Xv4jrSSjntmmebERYUg6L56bcZZHjNoDySFaHXmCqdv9x1negqX5jtsthfQCe5XP1L5JGB3ggZHcYZR1nQdLseH",
  "key30": "5ehcRBBbMF3URH5CdC5XVPeHKqagzQy2KxLUUT1ce8FgAN9Qn5sWqEdeesFqnduQH3GyNrVQkDtVDyQVhgX32Fbe",
  "key31": "5aVc6nJVkFa2nQcnZw3eiAoMpVRXGWhpMzMELDzyuL3WGKMr1UUs5BXKNfJwKRHsiLJ2CXCXv4Egf5YmZJmow4tQ",
  "key32": "4ZnUt7c59wbvDpbKgHVDnYjDyMszxBNehwMwpNwY9a4SiVxCCrmyMe8yKRmXM4C89gX6mXPxVG86mNcPECc7ZyQH",
  "key33": "H4KSswHqZHbBC3jKoEtErDPospn3husQTVufwvuWT1B1QCMVH2s8xrW8JYkvGFMfSNYWNcWpEvtNWNMdNLz5vg3",
  "key34": "4YzLM2QHYMCAoGupEsMh2aroc1Z6cSSShuqKTuMWQMt3w5SoiSzsGRn35X3AHz4CTwCyAAxak9HT1csEofc2uSvw",
  "key35": "jfsRC1oosx9BCrFtAxU7GpnG8hVH45yTJQNya6WzL7Y7My8hScHhq9GF6tmtv4RhN6onRDH9nKaMkYThkSYJyRr",
  "key36": "3HJ91uEQu4kPh44GfJ9pKy4m3A26aFoSbGUfe2trVi5RLQm1Gsmxeda5EdkTCTLnP5B2tEmr5aiTySVmumkxnHK",
  "key37": "4MGrHvQQjxmwq2q5Zf3rW1tEGzpVXwUX6NHpMJuyQ6n5kP4J1Hyp1c2bK5YCy1ZvsrAcv3UobzofZLxPE8Mv91sr",
  "key38": "37gcAzha92W2ksmMA2fZj3kdBsp2ueVSpka8ZL9hTVyqzauy4ScufAk386uRaPuidNbD2R27FFgVBNg8BV6bHpyd",
  "key39": "jHYwUwycGMgVnRXxd9zZBikcAsamyGAEspzVTQrbaE6Zbb4PsxyvCiqZ31Uhtza9J4EQoJNrtrvdLU7i3pJj8My",
  "key40": "4jw3JnFiyPKJPQRPZ4cTrMGyxEyFrRmfiDDBUgytRFWumtCjCivpgJDbT8jqrgbjeMwJ556YwFH56zLXEn5HG3Pn",
  "key41": "6723PiAZsfUzFcESPPYCn1fZVeKN9vuZo8UDRc8ZfNnynAzPaSuHhDHsDde2GE8wSuVPLfpAvXY7LyE69Trd9wSB",
  "key42": "3aSQTYMsv1xZXm3wLwdUFfLBXeMEhF8ZLv2de1n97MT23bnAWDrYt2j3NHAoRL3cmszxYrysfPbJzykwZ2HL5xgr",
  "key43": "5NsPdu8hJBdrq6MBugCeVxQggtz1tmKpBF6ajgy7sXPqpaTdqYrZoKVWZPqeHs866NbyBVjXWVFyKY14hLXfJuzJ",
  "key44": "29T9A4dAnZWWFdjPcNeVNdEarVJwZgGWFExLdFFWREqjY3RLd8LAGtTSF57FQEAwbFWtjuTn9nukGzPETcyniAFx",
  "key45": "fzJTPsfkL8KbdBPjvdyELgJ1wW6X9auR4k34zPqm5gMv76UN4Bc4pafZNWcyzL9yHsAdZVbURJaRtLGyAkWYWQU"
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
