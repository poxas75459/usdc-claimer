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
    "EvcFPH14MJn2DoNe2zJX86VxrmhcJBUQmV5KbxXwqRT7TBXmCwUfj6r5C5HvKxCZRYnjCLfudhNBBkwq2z2qgh4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P9bjuXj9hA7K6StEsHKTpCka8krokcExSdRoJgxfKDisURfpoK9VMPUdLG3Y1ZCBktSSqy5ebZC7DtS6ouuLA4s",
  "key1": "4E5SQixgX4DJZWKtbZKUwAdVVppmTBnE3r5fJHVWJF96jHkmQ53ssWhx54GVPpK4QU9bkPodSN13f19EU3ELiVVZ",
  "key2": "35eL2F8UJjRZcgk1dbo2ZZGobQFEQfw9tVV1cTh5EW2K5bGXevTqZufN2TMEm6QC66Edti2ajfxpbtRUavCuh68W",
  "key3": "5BVijK8tAV4zzaom1idp2gxsA22kVZXngR4j22gr4kCSDks8JgR5JyzP8sq269CYQynQrfzdBtgEcdmigzvaY1pL",
  "key4": "5khVzjx29qnNQ7dRVh3TyooSXSHmBcPLsJJ5fXRNbFydpTHxLwwq9gaVvw96oksZr29XmMpoYGmgRoSLtgdt2dR3",
  "key5": "51g33UnF75tkrcyugSk8z4ty9sqAxeqLNQCKyN6RJGeRNWFUAZ2cRpEJ2sZrw4Up2zvACdxPf7LzafydHEQJj42T",
  "key6": "2rXvraRhaVnEuaeHciZyf8941D74BDJcS6WCHFyLqERmvrEuDRxkJovNspdWeqgKhKAsLVrwqxqB9rBZg2HuBjPJ",
  "key7": "64SGf6U7y55sD4NzEWC2sygNuWBRJfV5JEN2DWKp43Yn92XSo4Lz8gX5puBR2Dj5Dh7yvAsNutL4VVFQS3d5mi9q",
  "key8": "2bw9hmNCxRv6NK6GXxswXZXSSsWKGrWjPdzLjgnyJcXQYSb4Bpw6speK5T2Y9UiQKV6Pt8THHVnkG447hrCEtRBb",
  "key9": "2yq66hp8F1pb4ZU98aahaskroYs7n939EkPoDNYbJpqWRfHHsVcqJPDYwANh8AzMjyRVJVxomQUecryHV6YRsJpn",
  "key10": "dTaatZurYh4vPDzzchU2p81ETS7z7ofnFUs7UqCMvNgsWVz2qd7GtFMQDgwkNq3VMFqquEjPB3Kt2dSJEVWArY7",
  "key11": "25f6ZG5iMK4eimeChTbrzuLWvpCjN8CKA9N4YoSiH5BeA2ctKUK39aEacf7GrCoStwuFMeM9CGSCEr4ngvB24TEv",
  "key12": "586r2mmTwozhBBesA1ihegoCy1UZBTNWM7HaDcsALf9M36fUsdC4ad7TzDxdUQU5y7VnH9eiZL3UB7AxrRWfEgGY",
  "key13": "3uaGPGffNzLAqywcjCTh7mwmpSbUQQgrdUQFSrT2ED7x7eUWtuXF3SuyxVmUWKqhCmPKJA9ak4c7H8dkV4si2Vei",
  "key14": "26HvUpMwtfraKwHg51CZmyvwYAeBmreshrLkYD1fAtMnz8HR4P4ojLJhWjzoAFjMexHkSg9RG2uoMxErvVNrTXhi",
  "key15": "26ZG1GZNudwZkzWq6mU2rq29n2mCTXatqJwz8dfjBT5ZbZN9S3rU2xpYjFRhazRUWMtJAC3jU7wWPUDxfdB5B9h9",
  "key16": "5U5MgPK5k395dpXwZg2GECq6aAJzPpdcsaQ4efFvts7Tf3GRWMmwybEKWEes62XCiXXDxALfvZ4BVhpFxTBpeuyM",
  "key17": "3jSfQMWmpbR6S6xWKNum9QkZA2rhrGTGvGvwKzGeedR9E9YtRd5QZXhweu7kfnoKhVh9FkBR73nYQQWDtnAqa9r5",
  "key18": "4Th7Ds7qoG3pe5wQJeUNBigfiAQ5SW8hvhJGKAsyutZCNLn4sj3uePhYym5rQvbFF18NDp77EWNBTCnX1BbW3an9",
  "key19": "2EZsHZ7oZUVaGeT5kCooTGkovhkV6T6N7HHYhfZDuc39MRUNwoSNs1hg9TfiVo5S8vHbUsZyjb95UCgri1J9MTRE",
  "key20": "1274ZUGNKGC48dAg9pJw7GBzk4QoSdPDLcoouztpo6FVhpxHrkuYyPHVZVQVw2xdBFSMxCUKkRtPD4TtsG8dgEKC",
  "key21": "4DGTiHbSvuTFWzPFk5p5Rxx2xYZDSYEDYruKvJURaANCr39pyZagVzMBHsq8wcgCS9XHAHnGgcqfxwCxTpZ3mpet",
  "key22": "2URAD17TLSMHtUbfKHnoi51GHDz8SnoHouSQAVaB8RZQkMAwrnNR7nJBQEg6SHyqjdP6iv3K3jbQkaHqkiBRryoT",
  "key23": "5odVtGGPdkBWrcUbiGXdtWQBhWh6dgbUeWVjXqPqWYD21s5XhJbc2vUWjykQ5yKbVro89obL58G1FmrQvgyNJpSY",
  "key24": "4SoujfhPv3r3bvLHwoVVUcEPr31dhadujFoZxatmqwof19VRt6MubiSJvV5FcA81EgeoQuBvzQCZ17UgSfPiLJ3A",
  "key25": "4VMX73uiajNrVLkPfF5XvfgWzPGT2E27FMmWpxNLnrnH5STAbM7At4nvKzv2RsJDHvtE3RaJQkzf3SwX19gKvy9N",
  "key26": "5C7QPb6ee5DZ5B6UyXkZTkMxCha1HqwUyAjM9imF6Ezg7WJZffHM1kgHRjMYxD4wbwvgY6nRzD5bdnYC1WP9PcRX",
  "key27": "59J1RHnP6DQC9T9mMCPNiajktDoXkAoo1jgAH5LM1XCbLbUbZH43SW7uV8DQo5xKG4PjguA7GKJxqFdT81WA2Mbw",
  "key28": "3u6SKETdW9TRa8didVfoMb17iKyLgRPPncow2n7ufuS5crafT1RKTc9rvk4un3Kw9gyXACRpvYMvNSkLQyXamzKX",
  "key29": "pArAADsJzDroYnfY8C8rbGQK1MXqGBciqnhXWQuUDNv56Cd5kSzkiXYxFD9pPsAg35NjHjL4JoPqAxEgyM3swF4",
  "key30": "2oNcamua3xpFTuMxr2ytxcoWugC1rc1xPCC9rUAXqmtEvByszJNNLTviiJxfzK5sfseFx1jwnVkNw693hDUfhPby",
  "key31": "5AntMkdmbxN2JCTDvKUkzMt82amsDvHPJVkQYvDkYaQGdWExpCpmj5M2x9PzaS1nS91xqfVNdQjj7MaWNrcSyuLt",
  "key32": "5yycWEhWNGUUqHN69yzZwFpLq4TG4gqgg1DAiaz2kwYtufge5623u4GRwfHHgNU22NVG6jG4nBJMP818XSxJm2Mv",
  "key33": "42rFfpNZKTrguUe2oyqPTbwUVLTSEKhazFzB6zJi4c2MsGEmx4u5T3iZjD4zYvY99HobtTdJoRGN6Ut66Xaz9jf6",
  "key34": "2qQmR16BoPdL1bHdFWQfEdWCXvZjDSErQCUW6kJurv4MrWnuLSnZHftaRFeEYafTDT3Hqmi6fpiahjYiZSnbQbK",
  "key35": "5m4FdAKbEY98HDFLp5vVxXoNT8S4yPUw4NnRvZYzPMQTs1YKzoA6Jn952qVEvSn529xEe3yCPDEUfsNoTW6BJeNf",
  "key36": "2gNDWo5Ekk5hrWN3Ws9Hubxkih319UpMvyMdZEtxpnpExUGSgCyroj7ezjk12F4ZZ7Qav1FH2RMeArgpM1q8HCVt",
  "key37": "2bpQt5zwBZ72Vjns5NhMem2db9VqifHr6v9ahGtSDRTrs82avCaA6VzHdn2AhvEtDmCYAYXrZNKDFXkyn8wi53Qb",
  "key38": "5YN3c9eizUTNf1dWV4aRGf92kErf47vrJjDJ3VyRokan6UyoM1BagpVC6Rve4MyZDWbEeTraivFVv6ShBknExoPB",
  "key39": "3ZusWtp8LMSwknApqRDetvy2mx5dT9rXUGWK4K2RmxR1hSuFv69rHJGBa3QQHVVfM9wFmxHjesLTJe2whAdx6aUa",
  "key40": "5zM2ZcjEMrMDGuWoja198qUn9rFqUxQGyVGfc3etmrj9zhRdgEnejdekypZfW3uA5fJnqh9GjLCrdz78Mn7KcMGh",
  "key41": "4QAmN8JuL49N1RnkpFqXP7QQDZgVi1fmruF9E4PVLuqdbi7NZQyEe6DJDMwGd2tDTdLBoBWVhF3nJjm9a8J1q6xV",
  "key42": "4iD3KMUBEXF49eGgnwjNxHYV2LM8zQUQ4te5o4y3asHbaTkXfY1Xckf5Ar9PNV71Fwws1NV4mHd1NsPb4qKePotA",
  "key43": "5uUbgahQqEaUkj9jcewGB6nzAmafX3EWNv9zAFuHTdSx6r9vTnQfcwLzTsKM2KCUMaRvziMoy1CQRLmfLRznHRSY",
  "key44": "3YJzjs5aoAhaAZpWxGjTnWMpYW7G6r7ogJ6qWznZJn9ycZ87vCHXEKYrqpJPkWtW5NWrJg2xADhfp5CAieopuoTT"
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
