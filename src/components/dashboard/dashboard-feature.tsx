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
    "2nrjryReiWqUFGABuD5T4rSKpP6LsmcnDNUrsiRSK9FSiGwnusTVevMaNNxFVjRj42FFsUkjPhn9Na9MGJSmrKnR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WZGRTB3JtYFrs15iXyCdJ14KzTbNEkuJThpzrmnEApoHLmoBFurGJhcv9J9yPYvC1SL7FwskqmnGdxad3f4mKio",
  "key1": "42V64E2JkyKqipTtjpAYRasXjtQUxoCfkcxcnHcF2LDsECxEQteMmHnRCuY4FLTPZaeC2Z1H5bJUs7CS1PorBTU",
  "key2": "4jkvU3FksHPWydy3MdNxqk4PCXgLoGj5Vif1GTmwDZdrAUmqoC8oCqUWsh8gxJvFsoQLx5JmCcyKfPAppJtTG2rh",
  "key3": "4g5b7oa1m5KWRRu2LZsdmNuYBbqQrMZpwo54Vd2LppGvvJr3mFJP7cerhjzYEFcHHmKSL4dm2f8bzf4moaiyhp9A",
  "key4": "22G8SwXkGLVNcDbWJoutu4RgQjEC6QZDtGwFYGM6pMgckcqyB2Ut3Di3uket6nWJXkLdgKLQ3kGXZXzsYsfCHW4f",
  "key5": "2kjxNprMDNVxAMYNYRipMTKTA5BC3FgtBBWMYPx6MkhHPZBx6i81bfsmH3NVzTZ3zKMbgM4eKcaqBUP5i6rxepxs",
  "key6": "2VhEjouVWBMsdzwURSqpEFkXTjmy6JbS6eKD9YFg5GP5oRf2fiuhEJ4vFADxwEEW9Gbc5nHYVNpys2fWTFDa92Cs",
  "key7": "22doftEPAKNShmHmNjUTaeyqQs8DrYXbVXzHF4YoD2uDvjnPMPXUkqBS8YwKNkV7yN4Ud6sg2LfWYFDsuz6R6G1t",
  "key8": "2GEH785KF5dgtEoRtP5RTnoeLA3bNHEQyVXgGAPDTfJT2PYDcVcd8KdJcFbRtMYvFoZa1sZXPfNW3nVNbqzUX5mL",
  "key9": "CYY219MwJocbswUJXrLCSUzbjXWpMRG5tkxEoj3uv5swW872m8dHHXjwGnrDkSn2Rm3J6cYGCukhSLTmx5bNUac",
  "key10": "5H5Qfngc2J2D2D4UWsmGNx2gaxd6KJcfsBTfravMfwAB6HnbtipmrYU53p88EQKME7eSYTmFiYqVHSrTSLJ4B5t7",
  "key11": "QdERuCsi3avhTmU5TtXcqJvaMjA23KDJcuQiNPngqrWEwrGPQtufKsVcbKE8tBGJgoyW4CfH92JYVAxGeZ4dYJF",
  "key12": "3YVoWoh1XAFzYRZ29PK5aTDtBoSbbCwre2xVa9WZGMXPc9F3jnJ5bRjvYDt3pNxe5qpD9vHGGDf8azpKSjmLUZ2f",
  "key13": "3589jqQUhKdB2zm3uFitWYtEJ4fVkNHTHCZLTH5K2d5NLMSt85Wu6zoh1iFfuzo8DJoyG7DHgBrScLxU2ZN8nDCq",
  "key14": "eSHmxmg4zQnySEgscQDYqFM5QgV7og2iQPhePFkqqTjsu2n2KKr59QZHrsQ4ZuCbHWCDGJrrtGoVHDY5DdzymRW",
  "key15": "3HFsHLvyJbfFaS7MdUVCjr9qfVmcovazU6Frou3yCJoMXHo67qfD5j3vD3qjv1RABRKuXd2b4BacxZ6eqrDemydz",
  "key16": "hximbAXomufomWCeHsmNX6hWHp3tQY4Lprfs4B44osZ4WxdyodP9D4pf7YQLTiKXDsFtGUZYqCPupdJDznH2RgD",
  "key17": "vFK1eZoA3rFUrxJ55QMbjqbrFw9vEq7VyUKMwLmXCXfJjra5ho3dzYMjMqAJiSX4Mq7UmgxzYZUgN2qDxYs6nqh",
  "key18": "59f3VAGbfVe9csHyestm12PfBFgZTUKNdysaRmwDuBPyETb5ssYweZkkpPf7Wbkp91eQsR97xeWneSGoXQ3WZGnk",
  "key19": "4FR8sggvrM3WyNbrsVwXduzicXFvonKmiiKjNs9a9GEE8s3AxQYoVgRpg11i1K1EEoMVxwJGJadTi8x63wjUMb9w",
  "key20": "Zygeg1BracX2CibDjpidENeKXTWSdt1D4G6GkUPSdyoTc3f2zxoxytCi8etUE1iryDqGJ9mxQsaeCtKmj7pzr9j",
  "key21": "QG7PJL56iRHHdSZKAJaWSvEk1kTZgg4PgFCfWViqY7u9AZUw7LH7iTAnDr7EoCzsL2y5Cdo6tsU84T3fUK2TRuK",
  "key22": "v3WKvd2HieyVvNrA1zD5v8eLVpa44yG8ZjRoXkRw4CPL2nwAW95FVKAyEVFggFQhYnyAb5mA2AmaisGo5BvrRAY",
  "key23": "48zMWn22BmD8McJa9qBQimmzcziEp2TKpRjVJoChW9JNtNFUdaSRFa5S8VKEiW3WNhVZErg6UJy7ktKQVoCMAYJB",
  "key24": "3e9rVrhtVVbVbDgpPx8225CJnJ9bPYS63TmvdwHZtJqPHKpqDRtGqsEkDq7u3wBTdWmWTS6tLx5XbtVtv72yXqe7",
  "key25": "4UmpL8i1rwKDKPnPWw8KdcHzoV5BXDjb5w9cPRCmEGqRs8nVYH83VgDDCgzQAErSCcqFrAmoypbi8sEhGLgTLK7s",
  "key26": "qj1fjwNvDJdRFCErE2euMXLRwqNdeWQbsgn9LPb7xQ96PtxQE7a9kENduVbp6dmcXyzzg3VwGk5wAse9TPeftji",
  "key27": "5a8iKGR2zjvvb6jeYDCL6Zh2ANYrzeLiyD2WyiVyAhZKqxrVbQRcFDZuurNAeujTAgaiQ1oL4e3RWL3bFLbrjRzz",
  "key28": "3jSYeUGpm9a4J1v7uFFqKd8bDW1VygjgymsVkC5GdV16SCWaACQMrb9s2mjYSGxeyR8A5WPA82AWqAYydvizpewp",
  "key29": "5zet1HdSR7TwLxobMz5RpUHTQfp9d4VsCWuuQppuJWPyLCEaJjmqshDjFht43PNnzLmPj9G3nddjnVWkazzbvEZp",
  "key30": "2VYS9uvJ4yrJE1ZsEEF14418wumwrMj4EEGBfAE87Ya7qE4wxzEEcmhuN3Wuu6hR98Z7MsPKpbti6procqq76Tqq"
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
