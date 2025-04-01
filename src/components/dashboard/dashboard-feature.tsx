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
    "4EnwP4ad5UL1FGreJmkkY2a2kMBPXixVH31zsXBysFrV4j9V8b1i6YAMi4a7VMeGpUHvDNSdZaKqHMgCtATpKrmL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YS6wGg4dCCi4FucZeQeX1jLkgCawZUfXcEydfxgG4XL6L9w5Bi4BAPxgwvaXFri7MFvRYG4rXyNn76x2dopfYDm",
  "key1": "56z9Vh4qh1sD7pjGUxQvHFoKCis4UNGQFeq3VPjndjHj8iuKjJahzGJ3QsSTBxsfv3FyzyQv2e8QY9Gg8KRMsVHD",
  "key2": "3CibvszgJseVbJk7Vk8oanpPeaUSwgUN6ych5yf1DdSQ9Rz89BrMKjDBf222YBDiTfe4xrfqSbq5sPFnC8WHsYP1",
  "key3": "5NL7XHGMjRSMqytWH5ML2vN2oxzYUKMEgA7bmvbmrRi6UpY67FwvrgBoHoH2rfCZEF32i1jfn4uUxaBK68AicBy5",
  "key4": "51qANFAjSFxmZ2XW9PsRtLURjV79m8siFCXUMHTy3Vokp5M4hEJJKTiJZUDs1jQu8Z3L5hRcmyuYgtAisNbszTSX",
  "key5": "37JoQbrR6bmoFYCdUDCQTzKNqLAJA9jnTtSXuqZxzaGAo9uTpCXBUbE6EDfB4VuUcysBZfaxHnXuveVRGNKLB4mJ",
  "key6": "23hESbjxxm7rowCwAn84y6baU2aVK31FGgMyvBgznnFx3LHsMACEzwUtrjqWH7ewjL2n4tfhjAdjPqLTVzy66Zt2",
  "key7": "3cSSMipaM6eUNNCeHQ4iZjCpYAvBtiFrhCHPKnJW5qowWNCDwZ9FZifGdocjFupbHafbNXqjooUJS9cjeH99gk65",
  "key8": "4EGbxHWa859rqWqKdnzHMBUq3ehNLa8oGeAQz7CYzX5BbDEaJ4aWmKyKV42npinYpLy1WrAfxKzX5nYHdfwN4A4U",
  "key9": "4pu1yQgkvK84YSBeGVRZ37ZfqTuuQ8rz7FQF2WMqFVrwovweGnoryGk1H71zfhsehYzDik68JZiTqH73FmZEqsCe",
  "key10": "5L5eHCGi9FsZ3y53UkoiXR6UwjpiWskpTArXXZq7d4XqbQL6HS5Crevt5DbNNCzhPXgQjgdHd5jV7cHCCqTote7A",
  "key11": "VMquvFpBUe53n6aUBNSwuNypeoJY6P1xiDieKKYcRMZuNTVQkha8FYcU6FveLiZeBKdp2Larhcq6WnyaBtnm3MQ",
  "key12": "3ZRa3VLDkmu5PeBVSxPk5jZCghLcv1jotXYZLoRSWmCyxfuLDNeC4y3ERLVMHF7tCUh796H1UMPaHfoExwkDwuc4",
  "key13": "5MCVZtD3ace1AVpUNHrPt1ZpDHgEAr8kVQKNxQ7Njjvodk36ccvW35sg7L7K2NZzLhWZo1iNxfrh3tADT3yEJ8Rq",
  "key14": "28UpJSQKCp8o1x3oPSSDE7u7mRyeXC9yMR7ajyGmN7v6DFX7p8nXFszogB4eNXQB88TkHR2uhK32rMxwCJtVcsii",
  "key15": "5XZQ9FmfD17DNJ2wZLRe4F3Ben5cm6j5WhurLGiRMeLXpAPC2sV6KKLwY9ySkkchf6gJsXJjbPm5EXGKSiyo2HDL",
  "key16": "AALkhY6QzjymU71MBV2nbL3wYRSDj2YFwR9kqDV4kqaH4SZAQysxVzVk1rsoS13KcdnCt4TmDmYpg57QHrZjZQ8",
  "key17": "3BodBpen6gFzDp4j6ky8XRBm7BTNfFwUCWjufQkdatgHWJnFFUsD4WejnPqDwPtXCRm3hBDFEvThw7bDbKeT6tBv",
  "key18": "5haC1Nd2zxLQFvNYsfHkx6QW3FHa6BEBRMKe4CzQRnLebfNpvN7KwPMoNCrxm8HZNcR2N3u3YuJCMQ5UcToyLFjy",
  "key19": "522yyg53PayhBGbHqs6LdJUnKNh7rqyN8n841ornEKmMdA4eXNvpnhoMskpr1QwizGwTFRoJHpKAdF6ATs4kPW5e",
  "key20": "3b15CHRhoMjJ6xYW5MFRjRksFzuuRYMMwoiJaoxLo2PMyJB11PCs56XfQG9FiNB6nsjCxFznqd8RfYUYkdtTM1e5",
  "key21": "fFBHENwmrCjvJKsSZ2v3bh3eMFQvXg69SBNE8a3fYifNLf3ixbtE6qiJtwGWb6vmToZwsD2ypnmyNWLoy85a7sd",
  "key22": "ZgdoqyCjG21W6QY15ncP45TxEsTQGavFnCJJE6GmsSq86mJJWsR3PZCVgrytEFzB7gncneeiDE5hUrQh1GRv6HV",
  "key23": "ojXshFedTx4CFWSCcUFvjGQKJg7n4AXBDAKngVYuDYWy7FpNfPvMbzsX7j26PKHRuS2QNyNefmKwkLNFCMzWSTc",
  "key24": "665d8Wvoug2CfuSMtERyBBdBGRh95TgUfcbEBwL2zcdhDGXU4wtcezLA4A9fnkAwUd4HAXjbQJTjsQ7GgG3XjMps",
  "key25": "3WK8FALDr58jkC4d5AiWGHbHxUtgZcLCZgUQZP3Y7tAbz9rA2EjnDjetWRL8XY3DMqyS6C7Rpqp6Qovwh3kcLHZs",
  "key26": "3i5uAQeceE5ocWiELUV8gBaV1wR6AihT2K3vjeiRp3fAZ5JqM24Uiyoqez1Ravokauo8JQvquFAMS66vg4nC52MG",
  "key27": "DrZDsZLHrmPbi3UFZ5AMsx2YgKscdtJN9ahCjwQC4wAr3bmC9B4Nw8o2JyktjHSwxCL8cSQSBvBFpfyZ9HgKjkB",
  "key28": "5TDjk2JYrUnBq3DjvJUmd5QoQBiWFPMZ2MimSrYD3rAotnMThd4EtXdm8nSL7PLSYiK75mUP553y5BY8nFyGSb4d",
  "key29": "xpTCqHfRsSX14Caitd9xqjPpb2w198Wyhx4RdxGUS87UMYWrST6Z6JqDaN6ZYBZACT1egoqvavU72jWVp1uSEBR",
  "key30": "5fGT9ySopuUK1ZVxQgV1Ho9HUrWXZLcBVzJjL8ciy2QizCQb67J9zHdEDaKACJKCMp9PrcTe57vZc1rbeX94RZct",
  "key31": "2veEymtyww66oRRsLimWhHj5FWca8hNbqoLChcTQKh9QZLQBpCoaPZ8gnnkoMFkgpUVz2FZ1b1hqo7Hf1Vi499mF",
  "key32": "eMsEwdRcTkuinK6BypFSnYA3u4ckyVRcT6eHtwyQSUHj3xYWBuGrhmJmKr2KS8oKCis23GqmDEHGBVt5wxuD1D5",
  "key33": "5QEzAeLHihq3CCH2dFoXX84EAVcsYJx1Lexu887jExtACyJK9Q867vX5m1DYzQUU1tSFKJoXFDnu9QFAjJitbsxP",
  "key34": "3172wn7ose6UhRyf5mwmXr4U783FmEzrvqrTFXVC3F4WUBPCkWKW5ARUWrRGY7eiMiYtmHDP7U1TW82FEThaEjEM",
  "key35": "4cccr2jSFusBixHrU313aYAaxkhSNYucX8DqEKUHVS71Zeoa4Ev6n8uZPf8jiRcA7d51t8Nx9ChodoHsSisn8Rj9",
  "key36": "4pjQ9cWJ93J2mtLmWqVxegTouVNnW9fcTt6eUQmqgr7kz6z69bPgwVpCeXiwidUWpkHLZYc4Z24iovgNKS9CR4ws"
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
