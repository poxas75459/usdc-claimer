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
    "4dvPeSTYCsmFsp8k5q8yqEFeM37KtrqXTQzcF3mvvaQmdjnX12VnozhwfdbofXD9bieJMRDfXsXDnnViRvR6Xnnq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67dauwUareEDkRUxRxjM1hiXZMqnqLRWGVqE58dUiifjBeu5i6wPb7cLABmeNzqrTKjFUHR3SmechpykAHfxhoYb",
  "key1": "pkmZLiAkz2tVhtriuSLMWp4sk9Y3DzmUVwAi1XzVzdZir9r1D85526gJkrHLcpHUFkfmXLMDQfxRqv8Khhh8FeN",
  "key2": "t88tCjnn17qQrKMe76LdzFa95rzccSidqHtkW8uQZj9xi37B86jfPWk956zTHcEejajf8piXUKAnr5wNi8d6Lh2",
  "key3": "3UkdSZKqVKSEd64vir3aWEMaYKr7re1WoTtgAEBwJSuAoVGkg2r6dcBv5HMVETbtbanJD9VrsNKPARymhtmkbu4L",
  "key4": "2Ri2qtSUectsHYfGvTz8drP4k6vxNFnpnNGWhtYqXA3fhZdZx2NgQz9demPRxEQgQJrYYaXNzFqCZD5mBoNhm4H8",
  "key5": "5ZqLzxsqzTt25oU82ME7C849yaV5PGKgLTBWDbBf8sytnzUsr9owaPodwTwM2hmfZ3k93Ss8nzA3AUPqXJ9EGvMm",
  "key6": "4Nj8Fyqcm1n8Xp5FHNiuhg4BD6mZxkhDMhvnwaLgWEzvMMfCiYfwmAosYGstNzaHRAvEFp6YPFNXioyC5dF3eXRt",
  "key7": "Lu1bsiRuZUnjZYmx7EQFx1FMrjdkj4MXP6J77QQxZtsi5XX7LTc32LGW1X5qtbus9oip5sCT6Ka8uYFhQ6WCjmZ",
  "key8": "8kmzyhfa9KtUQ2MuV61xuPsTadAcnQj5t6WAVLHmJX4CmfANZQKjA7xkywfAp2ERZ3vu8RMboxj9sa4dwSHQpef",
  "key9": "2RPebSpAXZ7XqWNGP7vxeYrEz5bk8rFjAeajnUC6GmcrZt3JejFx1n42GXevzJGtHmsQKNo66ULfjNwuK6PzAp1V",
  "key10": "4qd7JikSy2nHEy1xQ8Np1DsgmraQfruCVLRUWHpPuxq9DS9h1JkpsGRwqCPF4EpnkFmMT3Rqs88eZC1qDRhD4mdp",
  "key11": "pFEjy2eUKqJGQU1VDX3y4hRotRj9dSkPoDDLiQH4nyAC2RW1aqNGkZWzMQMS3EeytqbXh52Xzf9iCBh14erwXcd",
  "key12": "65845KYRGEmwQopxEQ48j6t6CatSycZ6AYqL5NZECnWJLEZHtB78cPzjvTV5AVDbYBrX8MPqQ5Rsu2cSwTGMpGhA",
  "key13": "3cu91MxVbYKX19fsQsU5VhpXMQFxr3v54mq3ZGcrgNssurphDu5j64GoQ5UGKWmUKdTuzifdTvbsAm4wygqbRN4f",
  "key14": "44A8ZWNT1Vc4jH2c8Gi574rUmz7PrFtLD8AR9ULZXNMLDi69PWWnwPLEsoeDuBhn2imV31cwhN69DBW2yWvMDeo7",
  "key15": "4Jsm7y49XNNZJ6mRPa1jqnWohVBzzRxiiVCQpGaxrxWwBwHsJuV4J7JGCkG9JT96KGaJnk5fMNW3vrFoe9fmkqUS",
  "key16": "2PxpM7g99rjnzqdS1Z9z79P8k1QRAc4BnxkzvZ1XjBZQUM9wHWhBGm6ykGiKiaTKPWjcERamHdVxyNeymhtKqbZT",
  "key17": "WfkUSTdYkCF4dyYoWw4txPUYEeDq8Mx8fVpGx8JgbTuS1UcRcsNvve6z8GWniZYBRdrdbPqN5x6AHcwy2XLcFUA",
  "key18": "2odWxC6Vhk1WTeR6YkAsNbnFJt1HMvP7BqmoonZFEoEsBRnndT7hGcEvVEqSnYXiJqmvy4rYdnn3YkZnExJgVJgG",
  "key19": "3BhWS55YvkV3yRi4v7MDBs4tVJe15cFfUfATGzQb9YTSLQDhL5cmofxNhq5TX77YBGzguPrcC5AdtGqJkvE7foWk",
  "key20": "5g5Nx6jxJKW2e5XwqKWCAruJ4yrWfot362XgnEmGdqANTvETLpCKrAwsAq1H2wJ635GkdChaFwpSyDU9ST6Yh6DB",
  "key21": "Yk6vwAwYmEHyfkw8yBXzL4aTHBbW8p74k5WcxqJ7L9uK4zrSVeYAVdfDk761EMBavn1VdApJpaXZLW9fVkH1dwg",
  "key22": "2Sm3VR6mQzWsA4J6mxrmJBwbv99xMhzpKwMptXWh1cZfihNU1qPc3tJqsPr6ZbRwRYqHDjLnAGrvpRqDZMvFEJ2v",
  "key23": "4JzvtFTejbzNB6yrwheeVpMVcrjKv5N1KUANwCCuKKDKh8kCgLGbFsa8341M3wv18rfsV5waJs7r65YYjeGWoktD",
  "key24": "A3W74kstDwSLkHahqhGhzGfcREr9k4yej4vCkyywqQ5q8LkcEBhtHx5LSqUt5eAD6HkorWXK9nYxAfaPCEA8EAF",
  "key25": "5d8LrMjJMiriEMtqWm5KVXYZtHudssatFWQDAyo9iXm2R33o7CsTtsrSPe9VqaB24KN3qpfAsWK7f3Fpr7Zwb2qX",
  "key26": "3RRHBmuorG5zbq8WXP86vpykyZkGpyYNTuN2zcL56CxRyrwEb5ZWQsCzaCetisjcNfCk3M8R8iPcUH3XymYUPHYC",
  "key27": "2QKez3XFVD6JVzM8xpp9UpgrAzLH34NPZPrncp8ByC7FSrQMvHtjs8sme2pk1eksCHfSrwAchFrjyCwbbYDEamnr",
  "key28": "NqBzLmGJ8giKkxPBhebmHgEq6xDNbRVSVPtS97EVpyC2ixCH6YNn5mWSVmzzY3dstG36sWxi3TRgjmGr68oSGLE",
  "key29": "59ERkoJ9UnCtpcziDznanRyRwpGers1wgK9YJ8PFGKKkcNiZKdffqVAdqGovUiJ5naBZNgzb4M44YqsW7QxtY7HE",
  "key30": "5SkLT3So4VtXbbZdUGkYsbz9W6eTUVM37gaafAKm4o3pPexNQB8krR1FRKTFwZF2jaJq5k3n155zaYErZy6yAJqp",
  "key31": "66DPbfQ9uT29A3rYoDMRr9FJsKfoHfno9e498gisKyb58UUzDPeZ5AZM3ayiMRFngFphYkaxXJAmPBpkF9c9hruL",
  "key32": "Xu2ttkNj4cDdYsziG2hgmSKwdWTrphVbDcrzSwxEK7RxfBDtUaBJcxu6gRgHoP3s3utzhRx7XmXrnbEQtMagbPk"
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
