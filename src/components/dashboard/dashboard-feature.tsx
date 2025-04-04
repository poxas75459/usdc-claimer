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
    "2hDE6Wi8Jujp13qw67XRbd86HaDnXSFyECsyj6d7CXGdz5izgUS6Xi1zZeLNt7Hg1SMQWRXJboYNPPmPvZ8B6uDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AU3mu3SRv84hZoBFm3aLfSJqajB5TyDVUjyxHza2rTi6nw6hxwtv1DJ3ntJmQbx5erv1RDKudprqW9Xj1CDqWz1",
  "key1": "5gSVTJt3SEDY2BNRXhxJaWT9LNYaAeEFQNGepEcvNXzB2NjunAv6SmUVj5FUgERkSaXd15w7cQcxKEZTLpet7ppE",
  "key2": "25PHGbmTV8ypUADFfjib2ZGRCVFmg8Wkqgz2cgvrqYaR5hVjTvNAAhxGo16NRQzq1q226o1co16zzC6LSRLMJT4e",
  "key3": "4gZzHtE79iR74c9jw3jXdasVy2hpNAkNQMnQwrsRxeWjhmTjH6Sje7fjtQd5zNqKWhKvhaYeb4Y4fyrF1fhr6oHF",
  "key4": "35qBFeweTrpDBspdYHJjFL97DnJhTVfKKpv8cdzxPpY4bQtEVWE8iMEsm5N5zNRS6kyou51j1YD9zb5gsi4A3NXb",
  "key5": "5mtGcVkS94J8vZCJgT4bZVvbyaUrJXHywwAcR1sZ4iuEyZiK5G9hvaczqqfFLzwMSowJExS3xyYdU6P8D8dqdWjk",
  "key6": "fvz5DKUjdpzPddd5drzsTmJkcgDYj79j8SbEa46CDPxZSuSDKUjvj4o28HXkp5eqat7zMgCXfCtAbCik9phsZ3f",
  "key7": "4txgLcJxbqYr5NbfMJFMmgCkyFZJsxbUM6PPdEMjj91kXXWdU1hH7WedLgcZZ16o4qDiNBtYYAPjgspKfPg9BYgU",
  "key8": "5AMAGAk1XNqNgoWiS4dMAEtAnNufJeCYzaa2y2f5cMCxK2LKh75HJCXpYs4Y8cpdFZ4b5XUp4SZEwjNqfAzBaXpc",
  "key9": "2btcsT5XiEPk6PtjaQYTox4kwoF9JcY4E8GRQZxXQAzDPA497tZQ1CuYfn83Hankzvysn8CgCx8Z931ZLbXVWqif",
  "key10": "3xGP1GccahPF6kzCzdhJZ1i1v2tf5fqQDZhsWGmHSFux27HggQQNf6n8cZNeGydiEGyB6Z1JRZ7ETb21SrTfHHJo",
  "key11": "c8zBjQPuA7vSiEpeFqA9tRtYMoYLjhjdknSTt3mcGh4LtcwEAbPiV4Hg2P1uMesefUayhR3YjXX6KVS3mJYcVi4",
  "key12": "4g5nYxPH6i2GDRVYR2KpHPataU5LsT9jLwqTFHGNvL2yYK1R1MjvZdcmzjYVaEHJ91hnkx7UaHfHEg6gjcTGGVbX",
  "key13": "54g5jgz9DM27xecGEykQejQ4vQ1YDh3cYFjtKufRCTiCSB1y2DSvsuZzwEQcsPHAVqV7BTiXWpbfTpjV1SUcLrWt",
  "key14": "3eVPpz8kgSoditu6yPqq58A3nvVC1rSCyhhK2mMxZ8ZzLBtJAGvmxAZAyP7tGZQayAkCvK1N7A8KtAtEDh45kJoX",
  "key15": "3QmjBYLgPK5QvPGysYvYdK37bLwGzeqxqo3EReC2x1rsymfq5XsKSSHxLEqJbxczUStiGW4xHiKHj3E4QeVDbryy",
  "key16": "5n9LURXeLf27x3ahzgsWFfnwgnzcq4bmvYH5Uzbrb3R67ouCaSdQtZva5dU3VSey4CsSuWJghH66bxgEPpLFA2Bi",
  "key17": "2pUYxJixRM8nJ1Ldz79Hj8DVwUutZ764vxBPpVNgs9HmkRCr9MjCohC4UvRYUW5otEgEA8o3xBJkJXGhXCr6T7Ym",
  "key18": "sGJBfomN6R4RqsyQuZ817VZifz2f6XXcnKPucKykXJzTYJkh8VucvXo2PBWmVwNhhx5pMKNuuzm9yZftcTvVPQ8",
  "key19": "2drqoTteYDmsX1vRt3vkT8e6KtdEi3GDGjzcuhwFhW35mBNFUyo2Ehbufd4wYNmvNdQsqwCAshvf6q4DYohkdjJ3",
  "key20": "5eMSZX3dCWLnXJxX86Ma12f9jxpbmNE5zbrek2Ahu9rgc5Ae5yLrej9NWzRmbnjctnGcKwkqd67FEBgdmXL3Npej",
  "key21": "3sNG7qrpq4CYfLRNsEBV2u2JpyaazzkTYQh7BKcyHpmcHbvZ9y1U2GwiHP3vQbahzZb1KkMCtxXs534PV7oexzuu",
  "key22": "56MrwSPGkykm6shaa1VdDVcPREoaMFLpGVnAMKuMJh5cRFFLxSeKvzX8t51445kQ7ARnd3gpE1aXYFnsEkUBWfQE",
  "key23": "5c8aAx6zzMg9UhNm9Ny3q3haAHYse7droonLmzzKJffgqLCi5qqE6DdxcRSaVPtK5bZYUaeQrT5TfBfAV9US7y2r",
  "key24": "48Z58aDYZR7KtEVmbLAP5bh5phPTjgxJVm31Q4Hh8BMzWJXvP7npqh2AgWafYcxgkf2Lsp2SZoTYgohGW6kZrkQE",
  "key25": "4NJKzW47EKG7EZ46cYovJR5NzE17wV8wmx9fVc38Rb3CVc4FXsv3dftcCe6dXQvUuPrKtkSWK2YGSG6oREivBf41",
  "key26": "EMeRsdk57p1R9BDVemWCRuJsEsf4YgLo9YcSTR5m52zhUZD5KDrmsyYEpATkkueTGeWt2gwjYVWwG6GUAvuzBtS",
  "key27": "4oCJrEztwatmo9ovU1ZbzJfhihnfi3V2cTQHfTfwE9vKgmzzsRpWdg3K5MWPvqLhT18189sfPrHvekDdxMeNFWvk",
  "key28": "3AP9eMXDJzRFwAxVWjgcZiGjPdabtvumhAMXDbyzK9SQAEg2f2vk6pnbMhyia2CULbGoCVuqmuUDWLuZp9xeggzk",
  "key29": "67JCZbsiZ5r7BiQyoWMjdB3KMod2TqcMX3omD6s4YYB9rXBRrioiLXnBatLSBSS4PQUsvrhfnWBo5HMRuwsAJTCu",
  "key30": "5wLK67eff4KtGvw61DFkReaUyu63AxRFGBm5DCBj2m3T2pRwzH7PW3f4JkCFVZDDKQEAUvWwaonKvGkeoKNkooW4",
  "key31": "3xefKz4LCnNWmwaX1z6xT9nAouWUhN5hGB175SDMny8bEiduGP9oex7FZEWhWoPEvqqMmZdrnXUzuqZRSJr6oYgs",
  "key32": "RA2A7ytQ3dk9XBko2nTe6HKmPSp8JW4DZxTXqs4p3N2v9CMamLRFGoFKkn8JJyn73UV9qRJ1bBSSz1pZrY2NEp3",
  "key33": "5XnuK9SfYp8Bw1Gh1qpNiKocmgV219LYhSD2hTSwL5NWfcCipZE2NHmH1NGVX8rreeRDWYG9QuYZqyWqVmVWeEQk",
  "key34": "5nxJmCGCg9mwSwrovKwqVmPPq8NeUQnqh5u8uRvnky2SnoGjPYi5DxrdCwuj7Tpo1ppHbiJBZ2E1Sz2F4J4UCZRV",
  "key35": "57vXjLpS3z5EsVf7TMAZJhi8WqZoGFtMBdL1bz69PqcwArLuZsYQYuT1yi9Q31WhVfvGRG5sDo6RzQyoC22H9P4Y",
  "key36": "4Xqb2CXCvLFre5aZtXQLkUTPJPKxpMTnaJRaC24A46zaJ4GXW3R9SoFSWbExX2XP1kqbMPk7PU4kwuEk86L71bNv",
  "key37": "5VUab4PaEZ8ASbGJdx9LobDCeeniSzvutWQmWbYHJu4in7o6zAEgc5i3noUpzQsmHTBZb8fxKbrMCzqyNm6UdvbC",
  "key38": "2pWjUwr1Mbuiu3xCJL6nCju9xBkg8GckVBuP9KNUJF9KCGVWoosjNTPuLzzjbdoBjjSPJVuc4eB8Y44RDFEMo4s1",
  "key39": "2XnkLVhov6QBLWVTpyajeKM8gktw5tDNBc16X1aUmMoS2h1hNMiSSV1VSiB94k7F311jvPh4tivHqos1onAKtD5G",
  "key40": "nxSoENMbj2igHRfdjuSAp49JFeEQrfDAghXW5Jmkk8AKmJmNu7o7dNtdJQyszAKtuKTnqW1bFMoMvxAjMCMRWXZ",
  "key41": "2145aCxDmSJf7giC2EnrgtFWqVEwbrrsqC8uaKGGYmpvvC1srZExccYqvVbajUv6X8dRxsYhwfKQ6yCWmanMDU4B",
  "key42": "5JUf9EnzKR4PBKrHZiuA1zztHqFww7qwa5YJ9v1YTjUHMoWhYqFJ8AR3ugnFTi5fGoJHikdgW25UvaBFEgxfttP4",
  "key43": "7QTARGUwQxohe3mE6pWp2AUQQApgRQGiAbxFptJzpnqBL4oa5fn9jyqbwHgzVPLZbq3HtnWYWJQpqrTYBAnusr1",
  "key44": "48srS6aKFAs8UuUBuPxri2E6ub1BqvCGYzMtwC4FeAnBdYVTWJu79S5nWaAKmxer7QQ297fq5YZSNYjxeAQiUdWC",
  "key45": "4Zj2Rq72aKRjgjwZKWAQtCq55ZoZ5nn5do9gP8AAVVRoZ9tc8WMpzmHYvB1ns3nSKFsuKd41dnA7puVpKAta3deX",
  "key46": "4uduSuQybKtHDkVCgQ9nzXDTgkV8WPMDRwcfpqooyTMBKrFV1KwCwJUUKLQon7cBWwLHx6C3PrxDdT2BsMT7gdo1",
  "key47": "4woxQBzMdTSHCnzAwJs1vqi4aRxKHqz9hmBn25xPwgJ9KbFDgwP6hNovt4YSwF7hQk4LjqWDzpAkue3qR8beefr6",
  "key48": "5Af2NuNwcmb6bD2gEQTWLDGdzgJcN6u2s74gRMaZtPXATwJurb7oKSsLmnhJYoToBfEy7fuzPy6VVkjBBCKm9txs",
  "key49": "3ixxa6MskPEovF3bj9ucwkvPfa5h3AFAvU269JuwVEQLtAiy5munERMxxKgug3bi6BjSLkBNowgvUFFpzeFM35d2"
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
