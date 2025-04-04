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
    "3aMUqLmmknHfrJoBiwrYkuqEhQhNFbUJvr2vzZwTkwVgcBoFo4EEbS4BTXbwwJtziEJTJxDvab2oPxdyb2NcxMxL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MWqwooUSETTucPkSJaVdhWc74PJyyZEsLafKcmXmyVwvWU4LpwHTe8VbGLRgAR7dwM5j2fvdQJYC7CSiT5FKfq6",
  "key1": "JzGjPqgJUBXSPhewBj53EuGTiYFozyrJZP3jKi4dg7S4iZ5msjUJTRMiZY73FmXAKTxU4HVxix8WDBYWq6EXnpi",
  "key2": "3z2VUG8yeTUDrpx5g77EJtCAABLoR37utRasArJcegAD1VVeS19CXTkDQdNb5sMMP8VtbJ9xhXrxfDPscccA6SA4",
  "key3": "4uDuXYZV4RhxeU7FvsWPpPbENsWcjhoap7ARDuk3TH12YU3EghWofR2sd96JrvAMyhp4GLruRbebJKVuoMTacRtx",
  "key4": "3Af1GSfgL2robVTbaVSq6jCDUdst8mAysp2zjfEgpcigTnz1V1BNXuvVijzH1jmsHVeGf4zEbQTMCGY9Lu9feavL",
  "key5": "5YEAx68LpmPJMMGQm5ttVw3MifbhHy5DoFqdv2uVhn37cu83s9swi89npuMpmnEdcoPAdmwkSJKyKeQAFUJXLCA7",
  "key6": "KqK33A9GbYzdcjpZWAQbzS6vnZc9rP7oKVANt7Bc1rUdeghQcoxHZJKbPDMBEhkDHREeXnRQauZMdgC48PMeVCZ",
  "key7": "3TMmLGhuXQGB5iQqm1ku3KoCucjwvqNfQ371cCuHNtVUbvV1NHp3Q2HotjhX4qACqnRM4wVNcDQpZsDUGafuuNP7",
  "key8": "519i22x7sxqwBPfmfYv3DCaToX7z2LxSwWxe26RQpJKyXZiVTdY4FvYqDfUWa7NCFApC9xEWQuHuwXvwssdrrEkG",
  "key9": "5H62LtB441qfpDu8Pa8DETQEYo27y64e4bwbX44jycSL5JPE2WDJUAwPfAPdYwKvKWm2U7tJTC5dnL2oiyadynVX",
  "key10": "Jsg4WMWMyRULxAhjsAuu9gRBj4gLNuWBR6EoXJ1qEJRicKMqtQbpQwakVTQGBYWVbiFbNb3dbvLLYeoFMhBfL12",
  "key11": "2tDvACMKtHuicimxYtB4HHPLSvk7MVmta9xRNF4QQC3HK2hwGjAcbcmcpT9qWnTcAMV5YowEE7URq5bJrX86MtDa",
  "key12": "QRb7ffS6H1Sz8HzLod7LmPgV9Mj467AoxvH8DJRHHbGUShhmDJbXEcqJ5RSoR9ujRvGtGvPqUbK1752HsbrUaPQ",
  "key13": "RmFroq7ri8XKuHVAj7p259qs9CMYpVV7satzvvbJGB8U9e9CrNu1yX5cicnf9VAe4Xz59DWj7RcznnL2G8j3d2k",
  "key14": "4bA9zD7p1JFDk83G2AKnF6CvEsJZhP5cwukoCgUJzrbrrRme7ZcXNU99yy6uLQeWHBuUsWiBeUnz2gXBnQo136tY",
  "key15": "3cZDepKexLU2ipBq1cFYC56fSP8jsjL2BwdBzSLdMpiHcRCLgafCibGK3JpXNCLYhfNR9n4i7rLcWkseSubTGrV8",
  "key16": "3GshqHHzPtKdtnLhCi9YJqbCgMspAvJSY2pzCVK3W2jWmMbmjuPt4Qtq4opEXTGCZA7zt3uga31r9NcWzeBUaJz1",
  "key17": "4gP7GqhrxxGrezeuz5b1Ng38EDbp5QCoNSvpwrAHr57t9a6UZpnsKrHe5xskYLvLCmVkqDuWRpKhNXQ2vo6GmnGJ",
  "key18": "3vxMZgDQo9CU5GoUnHz4yeRmij3GvRcGjcSAYQdUn8kBD6Y7Q6tta6up6KivKrK4KruisTBE7wK4wHQrTqXdsfQ7",
  "key19": "33fkPAESBnofT4ivsNj14aD6MuqyM1GokMjZsSWqDnBqwZu2JWN9qF4P4DhqkrpNzB7j5d3CJMLmZeRgUeAZjqLf",
  "key20": "5WPY7t6p2TRUXT6At4yU7Ctzn1uMGPCbgHMmpaAQypqiecnvmRVZLGdsere79Y6McWawgArcQYWcr7T8pnkUP5Ud",
  "key21": "mhsE5cLdjdj82AGMMc9CTNftb6vfN1VcX3sQVxtSvSr13HRjRWR6QDoueAVo9SMLGeApBk7nz7umWYEa5fh25x1",
  "key22": "66hUjJQnXpvpkPY2LBYv1XysaZRuwunrGyR4f4E8w3FaXLusvZzWK6NKUvG7PcbdwqiYb9qynHMkAwxtVEyCzGVa",
  "key23": "3SYoYYVUjcRhtHfpgTDwG9NPFutqqF1fj2VbHboRuxpBwLYM6rmVgRCZyMuuLNfCFweT7kZdAbgRdMn31k45cQEp",
  "key24": "5eK36EzU3JkbAqYqWCRibp7WV6wd67avJxs8y4zp6WELyRbuZJ47MnhE7nR7ecbHe5AyoVKqewRquEDP7QoDzJ3z",
  "key25": "3qiPCqeSTge8mt9xsgFtqqJMJw4Ei6KHvVmsG67Gdhaw7HAaNNuyvSBkhH7MQkoFAQRDR1SNJ57YNcUaKfbEwuqz",
  "key26": "DWMJj963oNESKcBBHxCT6EDiNBXrpzssugtaiZgm77jRe4uyLKRRmq4fK7YFDEWARhnfdM7fCHmmpS4PoKXLgMb",
  "key27": "5ezbRZ9SjFkyLnVteECMrbvvqfVVbv9WGK1WXAt372D1k1gehNN6MNtUqEnp1EMtB94A7pWhkQvhvgW4ry9Re5v1",
  "key28": "2L68mouRFmAnpVcR3gZMQSgLr5W7ZQpPksbJmku5pfH88zdrmBrvpUcB9Mq7Hk3PmUWxqg7Z4i38tptRggb1EhnZ",
  "key29": "2L8kfqnq2geNUwFgCT6gBmantLTiEhfAXajvmE3FjYwcPAtpV6tr9o4VPPpVDT4EcM3Fovbb3PfGADAWFseChqC1",
  "key30": "63xe3RmDnUEk8yNsvh5fsrhUfWkhbBuU6anSwLuXbKqeTHowV5L7FeNwcGHLAUupJwAWjqEjAjB3WaUbwZQ7bTdg",
  "key31": "5ta4BGeTHP8a9KYo9YmtT3wFKFeog9PNzR3xE4sYaVuLCaV4BxSvePhRMUUn1WfpBmquqUxbLdbNf6hgYhcdPZJ5",
  "key32": "27u6amXGbsfvwzYrx2HHKPsDfj1dEBdHUkVv3oS2xwwUyLBuSX2YDikV57owA9PHr5YhnpSyGy1A54EpMxK1LJjP",
  "key33": "3aJPFvJytRHwYZp8pqRfLfDhd2i68QsAPD1yKXjXJi5usZESJBPEjE3JhiWG9neHn3ZQPPYx1QnE9uNmzM2CNAH2",
  "key34": "5ydA9AD4wZ9irj8dLb2zyXLCfjJHtSR6xnC75cE4escupEWbaq9iMU8EdtSSvm6DUNxqoCKbxr9T421rbiUNC3AN",
  "key35": "24jKpuTPL7ATfqwDpWW4ShZTaCFKhHrYgSaS7ZnY2DFJejytct9GwmfZGYQSjwrg2jbt1A6VVjph3jcGF1Tdr3ke",
  "key36": "5TjLHFwKcyCMa71ZNf3sXHRDqVPETDrfE2U66N4paAhMZFmAiYY6VC7c2DHm1LbT3F9atxQdWn3DqwmykUDFFVb7",
  "key37": "44vvxLMwJxwYLxr2tkciSDMkW7ZkkyU3PyVLDnCjgW3EsMguF5vrbU84oefRgHc8seFKywVjZm1YEWCGytxv5x8n"
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
