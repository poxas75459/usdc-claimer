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
    "56h8joSMJKvGX8JzTsFadXz3Xmdz8NAuEKDztoiWqcKiEUzPKhSYDsrNSE9xezmP1kEk7BbgKiYJfBmsUZ81GDTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56UZsUTLzfg883QV9StMVjNTNrJY4tcWb1jJGRC9zzBCgiTDB6pnq1uNUpkFjZ2q1Sgyafg7dN7qqqzWCDSfkNZb",
  "key1": "2g53uH6u31eJMjrMWujnkmzV5T3cZSUaN3NEyFBkfQjsa6QwXaMw7Va3UMYne9W556iyLKVo3PoUo5KBXm9Jd4HE",
  "key2": "5pYe3QUWNwvKm6wAbDCCCfMgKjgCKjhbcXedkm9dG4TynnazP3oLk86rghzY3G99yhyVrwhfAf7yXXweHLmmtXj3",
  "key3": "2q1YDHx2SZCc686zy8GSD2hkHHm5d2MB46qeWsWaQH4wNLNbSh5KG64MrtmUJPWb9cdwzww7ZAugX2yvuXLNMCmp",
  "key4": "4VXrCmFnExUz67rUj78dwf67ZEd7Ea1UErPPHsLvKEoHEWWed8d7Rw9qRUxNELvFLFGZszrPcTUvdZcHkqLrzhsa",
  "key5": "4saCGNf2MKcrF5PuZh64J35Smb8UZNRFyhRjZheXh8kV2hExGhPQAZnMtZvVcL3izdRp5s2pm6veSjFpMV8A5jsd",
  "key6": "5sBU1Ew1G4WPqJbANawSDeeaUPaTEHitQzmBjTAQ487eSLyTEesdHXeMw9UusqqdGtCMgChxmDKehWUhoWEZRGnD",
  "key7": "4sQz8HsMYk3NZ9mSMd5U9P8dL9FH6Uc1XHaYGzwVv62qh283SAsuL7No9BgR1MCGLeZ6vEEymwzEH8VzCrP6RdHX",
  "key8": "2TFVfNdQRofrdKedrQ4oPwwcWntn1J7xds5XzUK6pdGoPPN3j3U6pFSG5HUD9116Xb6EtLVZk1XvptUbNDm4QD5u",
  "key9": "5CjZfVbyKuBZePXi5wWVTFcon4GPfN3EVDsjawUfaVrxPuEu8gzZPa4sVPLysGAQhN4h22zEs4c7RrDQEVinWc5f",
  "key10": "2BxLP5xfLHyUphLB2MKTGEKhtyAxn3bJrHCFB3cqrM2Xg7Pp8Wtk2tdqiy1iExYTyhZABinADpPRJvcLQxwnD9wX",
  "key11": "KVX6DBysgmEydfaFtXuLiZuDY6a8JGTiwRNiT61jF9cqb5rZWgS9TuGKNvZbQgbb3e3FfCVhyYBgJ8Kw5cxZTGg",
  "key12": "4W5cyk5Z32fFgdRnp8EC3XTaH94e7i24BgV6dcdJuN7pndJWwp1QT4f1sbR74LbxLMCnSFmYXwzpUyeZYkKq2etA",
  "key13": "2JbAJEejDgvs7Tbk6QKHPYo7zCmKZaNqKSwyYxvkrHWTqjEt6LQ9ej8qT778ra6GC2cxcvDR9TQXxE89VTUxiY9e",
  "key14": "Z2vbxm2cqmE9Cpk7n8ihkoe9V2xzJ8qC9yKf1gyiHYnaa8W15FmxbxhHKEafJjC43G2ARw1b758am3Bmh1G2tRw",
  "key15": "2wEuT7QYzGDqGDfDAkFQYL4WD5k1mtoFbrtjhAMMEFsX3BBXzKmbP4VksN7ezEMcvu5dZ2KYqgDcjhxVppjmVRS5",
  "key16": "5LJAxwBXfVKMMUkZjCGa8qqtGUrXhnv1DRuneMUA85xLEEHTQ9BNovhar64VbssdbuMUEW6HGf13jxMpw91LQvKe",
  "key17": "3ZLxg4ZvfPms78HHwhZszwGhYF1itPEnqvJj9ZYd3c38httq6TQ5SZUqqwa3AZH8oG6jtem7WiEDyMuzVwQPL3KT",
  "key18": "SQD1uxm77uavv6CyR4vSVQWSFohRnx4ucm3xUu1faEp1EgpJ1Q4TEBEmTJU4CmVSmYEEMqgVMd3c7nrkMuUAwSM",
  "key19": "2jMj7MB5qVZXUPirkohnzUkXDenfympKSUpBvuRFPikfzh8QuTscE1EJJhawc14hSGmLUFbGaVDxrYs236m4LrP9",
  "key20": "2aZyoYTxjZHuk8WMiJ28zUbuiC7uwwxoihjTdTcoxTZkRD21UBx5q1hRPhAyFarzwAvvcaquPwWdmWeJKCVPMScQ",
  "key21": "4HcrsgS55rM1o11zMaRCMCPAA5AN6dkkf4XUrmqsyRUWpNHMZqAJKrYoLdQd2jPkw64GQjw2Y3wqcJEeU9Kf4Yeq",
  "key22": "33ef2h5xun8pPbDjcED4ou9YYzWMDiK3yWavvneLYXXJKbjCtr8Ck69kcwNFJPUwExEviRKFSjwALbcAiQUzjVxd",
  "key23": "4ZJJrEBfjFcuPFEfvz1JYNFVCNx4KjTAuMurmUHAyL3u4NpeYBHs7SfgLZWMc6cUH82ZoXSBX1w32mPZfEkMWZJX",
  "key24": "2PBjj4AGh2CXvavYSxx8maKZpipg9EB32noMx9tmZw6nomKEpAFCDJHyyAMTyTpyp5TJUw1Gz2Fc4uCC5ehhmSEF",
  "key25": "2YBtTy9EYP65jQnAqZSSqsSfsS33r3sXsyxNiUqYwNYqPCrU9Yw86SQLnhxfwAtvhvo5fqae1ckDy2poU2W87wZD",
  "key26": "2dbrBfnEg7CB1okcywVg7ftwNY8EoFE8b2jED8kYgg4Lw9X3MqvmKydj48Yaj2Ygy9KH3dghB1BxTtgVgBF5DDqN",
  "key27": "4riqk3Majy6qAD6ya72qrQDR679MN9Co2SSAaR2CRDR3wyw2z4GiZ947xjHqFGQJfDaScquNwd7UPqTkPkPYhFV8",
  "key28": "5t5nEd1N1qYf7i3ymPsmdaRfzg1Ln2YcQThBgMPUHyRTUhEV2W9BQ9Ksfb3JdKdhG544e9Z2uRRGdPoGdVHpL11a",
  "key29": "2cDQb1NRtobRVedapP5yiQ9DexDPkUUuAWhm3rh3oZqSqregP2BgEJyb42eZ1FiAMrHfpANqy8FXJD5LbN8i8sQM",
  "key30": "UQ8wdihp8XKrXywjPA1rJgHc8oCELPNU2TUr79FmoNJ33ZkWzByRzh5BHfFPMm6GLB81cES2pV2Aaqst4f8gKiZ"
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
