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
    "5VRjTsJkKcAz9m2HpV8m937an8qVmLBwKezYFDUpgRJKrmKM8xUvfVw3KBRQ2xvyzxpuc9pc9yKhjReG423fc1XT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fTAbpV2HacL8EnGBiJqWqBN6FCwA9vKGj618oHzSabjfmP4BTdFGH8rD8qam24BBEnSsbCzjXoFznqa7JvHw1a3",
  "key1": "4pb8V1Sdg3XvGfmreMeJoUkuS5uU611yA4aeL9gqnjBc8VkP6PkCqJV3LH6teMHyoeUBFKWjFMwihgrHPRWhrMgT",
  "key2": "Ag3u2XinbNgJRm1XTGJRAzDth8yLXRYgAaktUok7QvoYpYQzjW8vxVHvfSDx8eEBCCNRxnNTRZJmuhFAEny35pw",
  "key3": "121g78RCXL454SJPmg9vgqjaH68Nk9qi5jE6mc2aV4yBxCoJpNKmuhsR8HW6LD3Hg31wkvJcspXqV9hr5iCMaJrZ",
  "key4": "3aarTFK5vjRnC9KZKxrJZBR9jLiRALS4KPCHQm3Djw2jAjW8FbrL1Rw1syjR9Xp3tcBGst4n2hivPqXSLH6Hw7hD",
  "key5": "2UUd7XvSY3qLBfVWAE57MVvzJDp7bXhVh8UoF4SV5mjZAwG24MXfemSMiREsbeGpdsa98pfJswKPPXufMaPh6V4t",
  "key6": "4Q4mB5zBwYFviTArij3RnWoSVYeP23r31ecbsnBCvfUty26jeiXJY5yBp6ubVCTeexbfaL3qycpGJaU2tmfVEB6Y",
  "key7": "3762eoFPJX9bFvtYkYAQRvSyVeuGHe4ozopMctErw8XJeZqLzMrnadDbmgd2csWJovfqHbiLfCxn77mo3Wz7myFz",
  "key8": "4z7BAMzqv1Xh1uk9K2wnoHd5YtsdQmkA3pc7SQCcnRKTQyur9KVZ7rv45kc5zzcQpJwKLgzeW75SYMEK8XXjAeXX",
  "key9": "5ZtBLKFFaRMxfzMDFJNwToADA4zYG1YXWKvgpb4VV7XJcwAV4WG39aY4nMFe1ssMd3Pmor42i1u6FgrQj5QWhCfL",
  "key10": "38zMtNtjdQDjBaXjbBy2Lzb1xyygtVH9qNwa3aS7HQdXcKQoeTBN3xnrr5Cy8P1GajayWjsaJfo2EjRf2K9inT5h",
  "key11": "2KTeSvkUsRf3oHb6fJ8b1yfjJ84Wjw4p9vbmN3nPsZA3DL8UecdLNCBrAGWp7YxQZk5166TVhqWdDznUfJkHRx52",
  "key12": "4An9x1cn69V9KfYxtqvmr7Q69Bxu4gBE3Xj3MzxmfSXk1PavMthnxyN7hi8chKGBMZGcFrfhHKPVK5HyUL57wBLA",
  "key13": "5s2UW3DmxxpFLin9WDdvCLBfesGgnA989GuYb7E81sVLH3yJjCE5v6FDEYhJQrmYmtN7F76xhSYM5w31bCg3LSbv",
  "key14": "4vCMCYmB5DEY1HT7h63rqVBaxBPN2MpG5qGmzYzyNG7AumK16q79L2NbGtEZ1dwA16Kzjg7DCwvhQbfWQQXUED1y",
  "key15": "4X89g3r92bCj6T3ZGaTBB1YHzKuhkwfiGfR84ESEVkJioQYDdwWwAuAiNeuC7A8mRRXDd4iNspTHHTEyK14oS8Ac",
  "key16": "397SmawPzeTZuWRUFKSdae6jSmg76xJNxEiRcuZWbntb3Foc7mQDs2fsRBdiNXPx1oFSKKxL5ReDBm3GrfaSDpg",
  "key17": "3uy3XdAdbFgmYhgh35FSP6QrifjCASuyjS4fqAiihsThqjYPLmSNF8zPtTBGXhkDtxG9q7tdC3wrz3nD8s1dxMM",
  "key18": "3Wu9jVDduyVMJi6ej2UdntX7UgqJxCnixjuv6iR6VjpQAHJQ6wR9LshiQ8ththW1NmcGefhUSLbTTkypLeYWQ22D",
  "key19": "51FSfi8wawsz1qTQJNfVM4ZrhVEzFgvAFtM9vT5xBzcqgpEzTLXMmevP5UEYygUtt8T7fxdtPXPGcMPEqqFeRCbo",
  "key20": "4orW23dCcHV26WxUoyEEXJwxXy7zCPj3dLJaEvH8VsQeQRXexBjyDVKuSauQfYM7J4p33RwjdwtMDeePFvMVbXAW",
  "key21": "5DV8CLwm9Uoh3FaogHhhB28J8tuuPp1th7EV5hvW971jSQQdMMC2461QFNh6xiN9qCi4MahBfV5HKcxLFEhPS91t",
  "key22": "21WcBaCvTm4MyZM1gs5RpCZrwqJ5d57XiF81UiFy5xAtDQbno5ZPKT2H5Hrp1XCf3v5nph7QMW6SYQxVW3kE4CcU",
  "key23": "5MwbrBd8Bq3yxbp8BnvtaFSKTKUF9PFLBdj6fcb6XkAFp1De2vEAxk7AQv9gz1xcBsTgW42HLQ6WYXy5VARm2NUv",
  "key24": "5Mx2V94zpsGiyGhKkNMRnnp1pgRqTgKqQS4dMdEWB7HfwhWcZw8Yk6oRejRhcshgjn7wetKdkuso1fp3zvh66LFa"
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
