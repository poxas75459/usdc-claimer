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
    "5ohCDm9YBsfczgwy6SgKdPdSwSeXkQmhtvq1Lg4Mj9do4YVkQXs74Jt1kpxCJh6E4PkuUziZSSJ9D76fyBrf4QBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pStZsoWgUiAm33hbezvo3v86RsXeFkd82LTBracDRfa6ZhoV2t8XVhqEgiQkc187iEjWSCTgGrL1V1rC3v5a3Kh",
  "key1": "A1cYTVkEET1hLm11tsNTZzGgGAxu9R3s5RSGeeCDuREWT96bwVL5udnED3FJpPTghM453UW4QRpkkeH6PZGryHw",
  "key2": "2zVXR7xr6jXjCjA7eAQUu3QqKg7x6HvYjYzh1QKzu1EkCyokvB9Aa2ATnx7UaiRnvbvfQ9pkTSaD2YfdUTkN6f3v",
  "key3": "29Q3BvhCXLh1H2gvYzRCDHX5qL7xjsjrPpEkywgwrieTZKuV3AdDjWFdRstFUHTxWvCwz7wkkKd7TvhP5U4JJqW1",
  "key4": "4MKTiAHM9DQHhKUqPcYnbydcF5GAwfdVgdwTqv67ZyASgX6VpFHKBBAcsxxHYUnFit1Z2vWph5d9gGtLTWBG9S5f",
  "key5": "5rzTPJpaiqpsqxjRh7XCjwR7L2xbfvgPwLtduuHLkowYcYRJjDAzfz2ucq6Hh4yQ4AA6VzLk4ELkZiW8wNvEecDW",
  "key6": "2pY6rTg57HMm1nsY3wgp6cuoGy9sywcH7zDFzHqXMK5Pw6oFRNkHhAX1zNtpiziiKbEG2kTynbnMLvu3ZMpMNaU",
  "key7": "2CRe1odDEPz7caWKFdzrYdzhUKQkdsa16b8WvQ1twAAm9U54wFNqGck3E8aUzg7pFd3cTKL3qQ4iD58UQSFyGAgG",
  "key8": "ydoxyXxWgHR3R3SyUYAwTJsKkjAjjbvW48WRfQSKpWiUeGaWsmaUsvPGFYBbomYzsxF1BSZVWjKHNbDiq1cVMv1",
  "key9": "5eFgstHUMfxnv5RMNShfqHCLRg5dJmFftjwhMDBkin4ksZ8JUhrCAaWcHsbU1Erp8W1r8aTU5p7LueM17WSS5Rvq",
  "key10": "AvweRCPXTRCGaFMJuFAWCub1oN4sDBtbp4g1VfPweQjCZuG7X61FfL6YJtkAWg8vRoZTthx2Dut78mxxyyTKRfi",
  "key11": "2vhb5dttdSkAbh3t2rz4t8Y3jhBhxq55PZBSxYidtJBNvm5Ve5Tf8Dqmcij8zNLrHvfNH89svw8zNngzGLAqcKeP",
  "key12": "2XMPXdNCSecekA4vETtrCeeTKK8khJtjzzAPupqBQyFD7GPGehSpQS9s5mFFDAN9fLMn94NWLdzEPgLXzaVXn3cR",
  "key13": "4Cp52mSZW2RK4z7KHA91PgRDxGGMJvp4oSowv6FfTeWYDxYaVpAPSnmbug6ih79H9361P9Evjhf7WczNTNfvnnXt",
  "key14": "3tAMorLGz9DfnARWC1Mquq4ou2H4kUgZhq7ZDELigGXYAaoPDcUYH7WwrTnNVCNiMMmouHHzqg38Lga4Adv1ow3D",
  "key15": "4SukeDZewxqUd8Vz1dKJJCynUGnaantzV6vSxTjPxfbiMfC21H4nA56iUnqHDRdubQRpmft96fXb9mcWYw6BKMaQ",
  "key16": "TLLvyrY1mrrYNqiohYFjStq2LDuBWvZi1cZ6GGL7TFndJwSLHBMUfPex2g8q71EemA6kaCWRMwAPwQMkG5yYnfz",
  "key17": "4VmsZb6M1ZKp5gfAocnLXj6ToA4tPe3DLM5tk7dvsxEundVkShN3CPAaSimToWHrUrsWc1gS8phXmcJatwbbmj5H",
  "key18": "4Ya5jLZv3BiJYj1e3ywEh4g8s9ydihjx3JjUADMQNBUmfmTWRkWPHNapzY6Q3fQuq1S3CSs3aJheRwTurHscvXwf",
  "key19": "5WNL66Wex8HgVX94uyjFcZw5MNmkyT6V29zefm1SUes9j9JacUZJGryeRgMsKx9c48Jc7eoQ12YxtGjqqPfG1kZ7",
  "key20": "6334FSHzL9qXRRsoFkZsEXaZDXiU6fZBGHcafbQGx3sVvru6FGGfCB5VMM2d6Ky4whBMS7RLQQnEF3PnYCHH1GW",
  "key21": "4JRR59nfgH6G8oQfoXqQj3gfBE26ZDUp5D88YJCebG5FxiU8rMbL5yoeoAtRxs1HWX8xxz35pZ1smeiEvLqauCtg",
  "key22": "4JaLYaALWYHAzYEmypwwBTqaNRsoFPYpgtBoFv6MLK7i4gi4r2DfrR5brSn8V9RYY2mpZPnoDYFBcJcExZfMov6S",
  "key23": "5AEGBYK5drn71bv2qBACHoHRrEUs8PaCiZXe3DEFs6pqArhqGUxBg8NhdjVANeTc7SwHN6WcKCKmBtiByRiYaRps",
  "key24": "65BhVHhJdUUwGyCfRdbBRWaHh8ZNuhwV98WvutqsNorpFdi2iYKMD4t8kseYFC5ZyAkYk1DmpN47cyVAeibngEQu",
  "key25": "3DUVfzkzSs3sruc5svUyYgo7RnXZNSypgkVsfmb9ya3tw1GAchXyLHHZkdEqFNz8N93y5D2RuamH4RF2yAYU7GTk",
  "key26": "5V6uc19L2D7tcLqtpHNM3tkLspDgy1fJenLUesb7Sx8ttLQhnviYxz22zfR1RCySJJDVN6DunV9J7zS1HRSMvcCP",
  "key27": "5gettCDHxfY9tZe3a5gBwepeyYHNnzTX1S34SwEkqAiSPcAd4ZaSTw4RzdMxSegVu28EYKCESUdXBWsvSu6hKEe3",
  "key28": "3bhARcJLa1DA6KCcmJ4SyCyQV6xBiEU7vYBg4Mp2ic4ZbFspngjit3NezYFeAKg1EjDpR2iZBaetWnfpcBAuHjfU",
  "key29": "5wa7bFfGUvAW5KETjp7RDqDYC93561MLSVJ91J5YRoUFYDkyBDRmHZqHz44LEMXvyqFcfpRSzThqA83bu77kTGLs",
  "key30": "HCiPoqUK3vrdcC9UcVmzjzkDDjLwWYE8T9e35LHN7bHig2ZiTiqW83ggBfZB9wRsSq4k5uhrTkzWnpGPsJnFsgk",
  "key31": "4cg57uhpfrVEGSnr7PenaimPQSfPPvQQtyxmShaHRXkY4ieah9qgkqFd29Fo2ozCuk2Ws1DSbbbV1c48ChqEg2dM",
  "key32": "5TqCmAokYYoT58BeAaPpVH6dj7fZJUX1dKzaGHs5w6LCXpUfN7xG8qw9PCoQB2bei6SHAb5x2WzPbtWSuQxtHGeN",
  "key33": "4zwtnbLvM4mKbF8VxBjvbXvp2SmeJqcgwUKZfp8GtriBY1Tfu3z5fUNeG37J9seEn1qvp6AtU1Jvaun4jFgKQjwX",
  "key34": "YyqGXx4BPAUEWvs8DM8XGyRqPNfRjxBaJPkaKSZxHSx2KadyHcJDcZiwQXBrQp2ZN7oryaRokCXLj2ZtAeR8BHa",
  "key35": "TJzde1vVEy4rjMWQWzdydQvtpGx5n17KneLcND8vqbZFbSyCdXbfLTEHKCdNV6XB8FQCnzz2oVtDqRmTjxvLGGo",
  "key36": "5hdssGkvD2k9qDiJrjFoEJx3WaEtWiXSjz7K62K1GWeE1D9rhPNu8op1syPZ18iTuTYFXzAcoW3g6vHdf97GnAXC",
  "key37": "5imrv5q7MmXSZqnPqe4dHLhXLoVPmi6kejABB7TXCvTG4uPH3P7PxGCi8iUd13SeZSoQQaMm15wY3SeYuagwRMZJ",
  "key38": "63UC12Rg4MuXoLwmkeUhA8GbxhXHBGLMTtCZJDC2966GgzP5hrL3zevQwSgq9VXtTJmpvCRyBj1hjWLzEQtnjW29",
  "key39": "4wcsYesNs46fHKdLuFNN8NjxWvEGy2SnHDUVQLYbpkmuawwLPoTti5GJhxvBeabfQkzxuRNcK1BRZZDjzL5GKFHk",
  "key40": "5QGFzrw2BdwrbhHMzwhBdqMDeXD6M4hNjgfiUMoMZCuS5rYT6n21j3fZJPTcZ7iouzQHRgiHN9Fnod4LbeeDeJfY",
  "key41": "3bsGy8VJcTa5aVuynL1hKWdLwFPyH4CJZxxDw9618vjfo5KgpyiX4CBK6fZreFwhsXaByWjJFkTKYZPb4t1RPGib",
  "key42": "5He44nQiJeGRuZfbHPqdNgUMvC55UJUnMc1qJkeSHVJmP7scJXZP7W76xr497x6Q6uzxyuvPyNkpR9sa6rh33rsQ",
  "key43": "DERsC7ztWtppuHsmBV62raC7NEuuBPjctUdpDNzCbRQfrnm6HiUVe5n3WMULApTnJ7Jajeot1QPn1ew1h8Sw21o"
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
