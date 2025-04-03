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
    "3NgnLd4UorF9zXNXEsTEdGujH3iVpN3iS2ePB9nkNYaisxgJD8QpJgdK6LyTbDU644niCQLBz4C6C2pgkHRfSV4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rji9t5WzL7gZUBapZpEX4ZNgcFtZhnUAy6Q7vFtrXpYrq7RGCXJxVfURC4M4WwshYfeMJcoeQ11PcHxw49fo6iQ",
  "key1": "55GqYWXGijFxGYg1sNJePNEJ9Fqy4r6ApDdoUW6t9nWp9GqQNktELqb1ierYWmjEdkio5NVjfa7VnqffMuRKPVif",
  "key2": "2w4A1bfgqvsarsbdyw4KS6nTDNLNbXvi7gk4NCQ7L6zX1S92D3nagEg4NsXgmVpz8wEraF21XzEWx1fj33HTbPLw",
  "key3": "2pjrGFc19Q67R4HWaa5ioy5SUWSu1MAcZLqKrYsPD3aqTAuhzi3zfjb4uuJGZT1RkKhQ2rpXV37ZG9hF5Z3PyHjF",
  "key4": "uqGLT9vVXVHUa6MvXnXYSwF2hbE2jJmMs5gZvVepsJBYE5ax4dfhxtZf2gbXftDfasZnv5ypHi9k2pLdTdaFeap",
  "key5": "78o2gfZJTBas4RTmhA5zVoAwXwR69Jfm9jxSjcseercdqAKzLtY4AMaQate79GpMerf1i7B1j6g8ccrdEaobNTo",
  "key6": "1p9CqvZPWEed1rsxLJNTPyrvMXFKGXiu3vgX91RaBvnBHY625FY6rp66ps54hprGmUdF81Z8fKYzY1sXF3MyWaF",
  "key7": "aYvCu4bfACbsUiF9BJNiemVtGbMGcPmwA9uYqv2pNFkdQTquwqgBsRTBAS3CL2cw872Tt9ieL3t8D2EgSHoYzcN",
  "key8": "FpHQ7NzxnYmvxERAhiPDrDcekVSHtZayyqGwr4YkChQsn7MHne3WCMJtwn7iLoKQjo8fYP4UjjF6no692DAAadr",
  "key9": "36mSPVBNefR2m5PVLfZVkbsYhfMc9gPm92BngpvZkpCuV1qAcrfpvZJnG1PtyPMWq7MTSKRQgHJzDgJ6jviCMeBy",
  "key10": "5t7nEef8C9ogNifxKk8AFAYUgnL55Z4ztBhKN733ziym3HcT9BWw4FTd54QoF3kxwyAgJcbbn57dAt9She52Tit6",
  "key11": "2ne7T7hS3xCKYpfRtDXm7YLaBv6j8HCXLtPvrvb2hD9LkvkQwX9cstJxf6wN2LPS7WxKJKCU5VzBcymRDDjXVpNU",
  "key12": "3wzjVMBdkidRTbSeRZpnRhzGgoAXpfgH2ky8VHWRJQDMeBNNn7ggrpwJgd1FzLxLQpDEgdkSmwoWqztEhLBFrSDt",
  "key13": "3EmxoVG5RdcKe9VtQtHKpdN8ARngxYS2ec4MM1xKDUyUNTNfxkuMX342iR1kdb6wAH1uWtFbm6nqWEKUCpcmoouB",
  "key14": "3wBwntfBaZo2cRbc7339KRmvRaZDCM8iJ93gKK8gUREKc4DfnXhN82WkK6YjbN6qVVMDNBjEEA9QgGnwCZy9JLz7",
  "key15": "5jgDTFpM6JLxNXf6s4YBXY9Txy3WpGAbPuGxTgZ44Lh6DdRs54VEoEb5CsBdKmGexpnKTSo4VGU42FdSDJH6ou1y",
  "key16": "5YqYwGaTGRKsax1FKwHrVbH3uQ3KufqWvPHb198Q2NJPpRiMyx1yvjhAyDoZSXryLiqq5ETCU4fvDdcf5VZCMP3x",
  "key17": "5ETbc9UP5rWRaJw2rtgzKeuyPJDVVtCudX3CHfJYf2hnuqtFq3f75R4D9vDgDgMohkKYzLs9JtmbrnuEpXqFRFZJ",
  "key18": "5SYoo2Dt6JSw4hhE4NBPSgttkqRxNi4JaM6Zk8vf3vGyA9XBNwvLpTbC5P4dQX1PVTJA6Kyq7jbVDzCxNKyZpz1W",
  "key19": "5QeeWonc6muYMMKYzLG9buFMqL5P9TaUjutghBbHeu1w5XZz4hxwNjzZxPxAYXm5TwPKE4itCRNNceHmP84iCzch",
  "key20": "2NC1EErLvyJbww8jREYX1hrTYWGxG4neo7FFyFeusKFkLHT4pzqcemX5ya7aP5pGku3VWjdvPY4hU5pt7bytWh9k",
  "key21": "3XS9dtpaGazrcxppJCLHHdZtKqETqdR3ZMPb1pwoLBuRKGA9XQPr4hndZj1yAcMQCvofbKV9kqwXnmGPDZQpwnqj",
  "key22": "2SCFg1Ynp5nkJV3MTTbpiV8Siadr8LCbEN33q9QZSN5bAQLWp3ifWDEJAPt3u3sX6LHSyoXo3MbA8pzYXLTPGe3E",
  "key23": "2zCFvRSFUMdsUaGrnqxkpW7wK2WBdRbADCRuM4LES2PMmyA6zFShNNLvFivKZ8Tx7RRyiB7of9UNfGw6wky3KRfG",
  "key24": "PaQvJvBq3sapiWXCSqTc86sNE9a99CiX9mZGFZ9nvP4i4xeDFd2ZvVpCiht3gyZadRPR3S8AG64VRWfBqwSPjLL",
  "key25": "4xriyvTChVdwE2RstKkVGgKvxcEZBq2NwBnPpNonpQdQXgwMJoyGgewUH9ACRerY4zjjQo387htDbEvbVDd9RY1B",
  "key26": "qS8zu1n48x6um5DcpBeymv8oNCkuoFJcFRBDH2qJdNr3gyjWd3WX2EZWumVdvNSg1ESab9Z1BBYEdxK5LtC3UWT",
  "key27": "41D9VZXaHpTsq7umTqQzD2AbkDsEdzw8hmknYTREfWYxunRErghTSqinRCsLEyACuDHiXdyWQfcUoLZf8aAR3rm3",
  "key28": "4rm2TiERukNWjFPzA9JaaB5HMa5gtLzqM4kYsSQNBUU8mG4df4LXGCpFrjhmD4ECCiAfeios2zurftw8DuFW12tw",
  "key29": "C4et9tw8NgXmRaTiT9agRyHweQMgxawBRRPNdveWFVJswDz8nAfMKX5TGjrcEGneKPDy99yvmcJfpHMHdPYUtjV",
  "key30": "szvF3DT7565BUwDqgCKpqQej6m2Au8soLk289nPpmVtrm8GbmPvFtrZnVyaHke7RmJdjrTnuBrrMybNKRMipDai",
  "key31": "2augkZdkfcw3ujsJRa4zfmeuP1WUyQNnQoAzmdKKaA74fX8xFgpF79U3mychjAFqJshbJRRZ4pTbBStDLJRDu2sp",
  "key32": "5JMduqEsfgHZKMYJ6udrNCfF1kezn6HDPaXgJNNDDk39qo9kTNYPXXBhz9H5yoyGUEa49oDEegyvC1v83LfM7Ayt",
  "key33": "65zM8xXQLAwQuVt5fiyqnvCN7yxW3TrVxrWTC6dt88canP7eGGoePWTSVM56Bqd5ndH3Uk7gs15LBPjUZmLQsnxw",
  "key34": "292RAmywv2mM5wNEuKKmRmhyrUQvfYBpJhDy491qQvXxH9Uf4ScFgjESKLihovBWHL9DYuL6DpbrsagUzTBjBEBG",
  "key35": "2Qyg1HR5HjgBm5iYVXi9T8GV3BQWypGpeLCYnYzhtsYxYHUom32qXRw3VzQ1U7WwtAZgD6K9iRYVfCnNt5U7bV62",
  "key36": "2h69kzgnmjC3ZGdX9zXd5oJro2L6F6jK7A5E7U2fxUbF7LCNRgYdGVhfzw98j4cM1bVLDefMmbU6NjeqSpKTeaRT",
  "key37": "44umbcvFsuQpG9ad5frfSExm9SrqJD2iAybfRiTpNwcFy9kQMqLBxtEqjcApV1Tkvqnhqmc2CDP9E3mTQ33bFN1M",
  "key38": "wZszv6PxxD2hncEfsVEnAoSKuuVJirj7LdWhmqzKg39ogMRmSxRD9SHysK2K77NTuCnEgDw3XC3b9Rxt21Mkvgj",
  "key39": "2aj4ACCy8o5MGy7moXF3mQtgacHXL68hy1p6u54GmgXQuZKSABck3P5CcGAyg19inScRoPv7ecJwYkbzsAuohodK",
  "key40": "ZMQdSqntbyLb4ERmBXwSMVzFcPj8svUhUbkrVfmEvF2AGswpJ2x3fYGkt9Adv52zmxZybsbjsktiKUwyRMaNqqs"
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
