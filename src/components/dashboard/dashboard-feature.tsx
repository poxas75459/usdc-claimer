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
    "5PgWkA51g3bX3zZJewUZ4MwWBA8v2SzLaPrXxaifU87cLSTTKwVoBwhcohgrZ7kMnYQwwyvrjfxZA9xbuZtqysNv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pxrnFUH9ZXWevVBtHSUbmdE6uyWtB1uGTLBw3YXtkb21ArY8tQwQzyEtAshihm9u9khPtorGmrmwRgYPBEeHoQy",
  "key1": "5vVsgHwazgHwHUzwq7F25RFhgdtQCPnc5SBuehTfFQxqBHouR2N9HuhT7PEguiVd4xY64SeNJoNoSLAduruisMJJ",
  "key2": "CjJAj2Pt7ptiAXFptpFR8p2Nu9z7LyGnbuwjhwhi3EhUtLg7jmMSya4dJc8nvhL7WUeWyfyZ2BixpPFoBKueDWo",
  "key3": "2bPgQZJu6yCQzRkp2U9DYBPSgRYqBFJhhVoXmeHfmUH52MHhzn7fDjxvHkoJUviyLY57xtHErVNFCAhDACG19BJQ",
  "key4": "FG49yt1XhBVbF4ZwJKmnCnLcCL8DQz8FVn7wjrioffHFYSf9KaSUzumQc42JzmGquH6ASbVyQrebQ879LLNqipX",
  "key5": "4q1BoZ3dzsoYN4NyFhGQojpaFuzqZAA9faVJEGddyVc9gTKKM5FgepwfPWpZSghBd2oUvAef1VsoLFWint5Fmjtv",
  "key6": "3zLuBCbPYjymJCBioX9xaTk8o3rnSvyP2EKs1Vx67d6QakQkDUsFJXmRn3CSsu6ymrWGpbkipJimRXBE76KmsbP3",
  "key7": "2NMQB37MbzeuN5RkhJ2TZVfErBo8LRTEuf5WwZw2raZXx6vRtr53pU1DrDJCHFhJ6UrEnKChjotiofUiimeTkw7o",
  "key8": "2XKvFK9GS1DA92kwzvyXuFjtpbBxMVppwPNi1gdBQN77bsrrXYtieq8PfcNCtEbAnSYhaWJXcUCZvRvN6gM4dq4v",
  "key9": "35xPCzZUrqhnKH6pjQMP4LY52ayrbei1WYK76yd9TuFq7J3TveMzjXv9LVLstYCYShwzTv1GZjs969kZAC37HiLH",
  "key10": "4hnKAYmQdkfkneDu5Ywni2dD1SJMe2WJCZTcmeGc4wgku7FNr9Lz5kTUCstH2VdwrWjTcTAi8B1eND9kYKsQhUKe",
  "key11": "2p1K2Z6FA8XbDtmZaVzyeDEy5QJ2N8196MEaLzP2QuUY8FdvkERVfUkTDjsMxkbVpQyahossbXd8wrz7QTgEBfch",
  "key12": "3mUdY1jATdQNdyLwteMoPiNgPbaUewWaMxxngEfZ4f8eBsyRkxgsk4AiW7J7crCME3eNS4oDDJZFhLCW8DG1T3bc",
  "key13": "4vWMLDLuc6dUVwM1ySnUepeW4yCYMyekTTNnKskc9Wwu15GLd53uh5UaG8p9Ky1f6NCy9L225NwW2Go7R7etxwK4",
  "key14": "4W24NWkyxpBs9MjRrkzEj1LPZ53xdGTRoqYGF2gZsCy1Et5Reke9w8tJMxDnsePv3gEoACLVUF6uwXTFrMKkNpgb",
  "key15": "4DZJEQbSdFf9gpE1oHfDkScBXG6jMrxbjfRFXWmP7umkUi9cQBbEEXnS2m97WJJaxQutQVcN5CfxPKapn9HTyYZN",
  "key16": "4dkrvxeKZNvPVeoqpmWxP39prxmkw9BKc7Pbfx6JXSJZSUXuTpUXiFYzRdnnQTMC9vS9JJ3yYtJ1dhkcoj2Voho9",
  "key17": "tJLKLtJDPhy8M6Q5VAkLLSa6B9SjwbhqUxpTJRotrbGt7KBcFXrK7necp33nY6ucPdJBshUV4EggaRjCPMKRCvD",
  "key18": "2szXARZkh9qq6m1T1S8QUeaYbwXLibg8jyXaAh8AUJQicoE4rfBPugTcrPbLLixg3eYxQ1uan8LQn5uZHgVVHGfp",
  "key19": "45DFA27xhN5XivZ8BeBvbXTw9pkx4Xjei7bqrXYSrhgKJxV2WSfhFGxETMaMuh81PCwNyfwaZZy7TUWzrxue4zBC",
  "key20": "4qbaJpCcMDeyWw3Yf5ZmQ8pugBad38Kjg1nfKMrbXBgfr95PVPjhCPm7nru5X1UCKNW5m1BhpzyZ2M2564qdYhwd",
  "key21": "21zZU2zmnChBc7B9xpmgi1jqNgpUJpaYy26CVEBvYA27iRwk1CLDB71vXaUcKvt7LQdqJ74ivJ4HqykfgaJeYzdK",
  "key22": "32Vfw2X3uDuFNwt3CNXKpcJayehQaVEpbJgiUutT2dT84wsp52MHVXjaz8ZjoD6whrSJwfVxkf4G16d5vuNhZ4y8",
  "key23": "2RtqZeduqtq1rv9thyTS9MoCqD3g4XimeT9RrYB1fLYCmprrfQQ1atXr48T31Ebi67xqs7AbZWTrHQSCq17F5px",
  "key24": "587uACNyRnzEJqo2B7bv41yYqozN2999PcKPw2rprm5gq5BRKzucJYvhZGpdGfcHi8rXtirKFNtWft6vJwEW4y59",
  "key25": "5WJ5jkt1MFv1qTYVG6QiLBgjfnqC8ytJg6YqCkTvtzv52wnJ9fh4cYiPaabMQwLcpas3G9CbgK8VQELpZqWbeVhf",
  "key26": "3MyREtnm2FdTUVzjbqwcVgJgJGAbbxdMdtFCUouc7cc9ado7wYCfwbRWFkzCEb9o55Qxr1s6XxPCFqQVeergmdhP",
  "key27": "3oPv6Xj8xDY1Uez7JkVRvQs5LJiRhR83QpJrKgrU4qccuuXaN1mVgdmYnoJJGKA1sgiwkYf4MrN2Riu8Pt7rrx9E",
  "key28": "3epW4t2RjRLsZtZwY4gffkUTKfxVvEp2CjJt2N18RejbC2ygZXTMm4VWACZQhnc8Rfcw4ohYyBjio76qn7mQxuQx",
  "key29": "HmXfXHq3X58wHb87UzkBoBLc41c1HL8M6mByUd7ukGu1V2eL214a1AQvGL3ebTEHVJ2445hjW59xMemPiGKrNs3",
  "key30": "q5XgCEjTUo5w1BSyoq4963Aa5fAtUohYSxw2iK8inKkDaK8p17rrk7JCXTNrNHWScJP3HkgQP6WgDKyHDvdW4cB",
  "key31": "3K4z4pZQeYCi6wNnZCsDWzWNDEkhEiwyJUWvwH6jY8qGWkecf9Y8SMFjS59J1B5ppokVargxDqLQjWX45ahD7JW7",
  "key32": "784agiHCvrCaKG3Mw7Z7SBo8HL9Vom7YrCyFU83UmTeyN3LhAsvAXNnafSwVNPy3dALMncJxVqsdiNqKR4gpNJa"
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
