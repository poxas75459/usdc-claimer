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
    "3pNVwy5j887j3DXhjSfiLJoNXUpQv9VSjP7hmQEFuHFJoYc5EiNCdnGCVWDLTX8HGpNcjJdLAgXfmn1cb361h3CR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JdQ18URW8t8vsRTpTpQGpxbkWBHGTioMkyrmPM5H8weVX8VDhcMrtc1hfSwj6Xy5beSkaRizfAMSqwKt1UYdyCx",
  "key1": "4x1otrrzHjgS4qqNtjh6TFmTiRP3UxMjQQJsRSYLEggXmeD25pheSNe59zwWhu6xdeYb3SpkXtUm1xxszjeWw2rw",
  "key2": "3TsAZANULUQSQeMxbmNeVMQVXt4WZ4soh3eDrx1bZXxu4vB7UqPzqFhm6EHU1CYfbh7qRuTJAEgKdwqn5Dc96wfm",
  "key3": "2rn8NKbLiC543M7uBuSkMDMjXJ12RHZgWqd9hi6uungSM1GyJ9oRZNrLURG4RQ77YoqP7kf8jsyL5H4mwHduGmaw",
  "key4": "2iuj3BeejH7VfdBa6FKq2GExhGQV2SGFRvZoK6JYuhECovj65BbnDCyQjqNfDBMvoccd4vHmCfNYiaTkBcAMRfsA",
  "key5": "2kzgZztY8XY3GMZpRhgP7faZhZ3wLKH8E9quXm1wuBbeXXGX6LtocnRXkn5s7bWpRgMmEGfLeg9CsRmmr13MHEFs",
  "key6": "4UN8ufwwC6Avs5zxgP1n6g3uEfqYpiWgfpEXLEBtEFEd2a2yEHevhmvNyvyyPUbwVHEpUDgxrdwisdv4RyFo1ZgG",
  "key7": "62b43hdwViezW7ehJ8RyBfrmJCxaV9cVeokGcb8A8cwtyQTUiNx4nZcTCuekhAw9SbktNGvmVNWxTgHXpjE9Uxci",
  "key8": "wPupFVrRjRbNzXe3RzZHMGrBQyWwiPkGuSeooWBr2hU2y34w4PcvYJKYmxqsdXLLkLTa4Q6uU5KtWRzcyNvFSXh",
  "key9": "pJSFDy5FoYrbLnKiA7T2sjSUAPuUih4b6wjxKnAY8SK68pWr22dbzpcEK3Qjoq4g2YcctRzEzc2t4posE1UjhW8",
  "key10": "51R3kuZxNdeYiM4jQWQokV3CVkncezjQ9gT1BkbeuHBkdtKsCcsPGvJrRzzcKC4zUrzW15W577QkiLupx8zcfCLm",
  "key11": "paeqywPiFpcKuoMT9pCjDEzBntynCMGUSQEZdTTQNyrnX84Ty8uhAq4jYXfPTHKgN69jVwm6WvihkUf2Gonttuw",
  "key12": "PpdDzSTSJ2WeP78ox8CuGdFMTV6MFSRWC2wmnTGh1rLEZgpQa3cmPSZmWiRnHPye1zFRm9HrV3ptR8Q52GMVTNw",
  "key13": "3qdFQJNuJcuxKNBZt8rKg2jmWy1zmvPvjpFreUmPXxK9uR5M9ZPVTG3jRgizsbmYEpjRYjjjQcyj72U4EXM2ykNH",
  "key14": "32PFrK7TFYPgykE1xdzfF96XLBZSwfCEE9huNSga3aJKrRXS9nuQvB3F1QnGwzr6Ud3Sggni8uxyjEwsqEPACCZp",
  "key15": "StB5y3H16q3BTqmHdZrPVFqivTgTGakfooFuvnNJ8uAT8cqe4UatjS2GPKbNV5szUtKSur2eWDQhQbE3EmckLP6",
  "key16": "5yQTuxeimVJw45Mng2HNBgqxA21uL9euqAi9fEPtER8qK7tcbGNPwJ8e9roJvNhwu8TPBu35WTEA4YvTTdWEpYwQ",
  "key17": "2AM3kBezY3cbmpyaA2fTRGNv5BzwZskt84PpfQffTokN3dY6c1GL32e8pTXrXiHz3NqpxYxhLtgHgsd4Zh2eEYv5",
  "key18": "5kdakmQwgTXfnpnwGNLMwdz3EXSE9s7q2XN79vEiKpkSGaYWQpxWf6u6oFZntMFeLoMkSLHC2yeyBFJ88oKqzPRq",
  "key19": "2FUTviPoxA1XZMsLjz5JuUi15PPSUskMcHUrYyRZ7Y2v7hKbdVMUXkFcxnAGGn3vaoEcE8zWWH9jYjaomebfVeoX",
  "key20": "4tMiGeSWSGMH7pt7m8CMPPtcy8QXVZMtEERCKBkRosvaoqywnDL2xETibF5HRpZLAySSuk1z5tyLrMD3zEHSgTM5",
  "key21": "mhPTnbZx1H9nLGzfoYFGYYPaA2MYkzg1jiKsg11irUrhVt8eQ2UMoq7BKjE8enBmay3bp2sir6p7cSHPTDX4Dar",
  "key22": "5nbxRRkzW3coCM1PADyjkXENa4gRF1gYxaa8D5T3UeV2Uok3aSeCdCE1A4SV46zKJ5cnJXUA14PYmYP8CHFPBJgr",
  "key23": "QntDjwxBTpT6nmHoS2AUFZf2ezBiFeiD7L7CJUDGxZjMiE1tDk3NZ8yKHcXRP87yP3Cah69w3kN6pfhqrqtedKo",
  "key24": "5NPzyTkUTCUWfcN6zgK2Xcy12Ui5dJyS1VNoZCYUoVE1stfiz6uYidTQ1tHmQdd2dPExEr1n8G24vkQuP7wiRGBe",
  "key25": "Yusbkk4qgCRgAWGaPK8nfZnQpAsVsbn5sUd2zPkf1iPjrSASPqwvhFvR8X4wZqyjcHDvbQ5DJqKSbhMk1Q8wmJN",
  "key26": "5yhWCRazPnZtzM7WAdv6nFEPY4wMmZAJ1E71j7tfGPZQPCHEEWX5sbXz2qWER6qogqrRwioejzRtzBMVb8c85cH1",
  "key27": "4ZKgc9WfAfN8F8DabiaPB4xeHBMZqf1t5HheouySWKtnpfTyRBa9XfNJRnJnxu33x2xJ5hfGtMjpZ9DRZUvYLoNz",
  "key28": "5sUXEBBLyYGY2RVCvtkCiG8dNtpV9fepvEZtEK1TqG8eirheRZFtCDL9ZQbZcn6nH5BTwrJAHNodTuFCRbgq5xpo",
  "key29": "2hT9qtu9dBiGqEKxfzWf7uTaDJfsYKFZvKR9juiN393eAx3ggH3L2Q1DqU52KQssRwjnomJknJpDBrkxtkd4LKiW",
  "key30": "3wCobeLPRuQxvJgDr6EUjt5PgULa9uNHXcmyHLR3xnPPs1DwyCXvGoyC44LWAJ1ptJfjWFw17tBixMDVJsVoue16",
  "key31": "4qy7EYsyYLxCoaQUQ2wp3kXtBsTYFvCLaehgL9BzZBDN8N67D4zhm1nB1Jrrqm9LpqpmJVeN3pJ5sYZP123Cf9ZY",
  "key32": "5wE17hzsNf8pNx19TfZpXdojM6H26eUehxySauWqkgZTDwrmaQo7cvT62KhVp1SxoyGYQiAioquJehGsD5DH9xqy",
  "key33": "Z8KBKHjWS1yapHiiQZTV5RtS3yvyBkb4XTf7usp1z4fiKuryqdHpxiVGza9cUekzMTVortJScFH634auEmuPVJm"
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
