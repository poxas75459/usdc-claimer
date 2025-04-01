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
    "QVakSaSjUJUu78X4bYWjusxXNZUA3L8Crb3yqD1DRLyCQTen5xikfiN2cZM25bxxS4Kifk4dg5ZciVJyBeMCYsh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W2JKWZ2xAk5krBdHhDPfqiJMtNE57zUXMq4BniB31mUC6cEhfgmKMczssuYbKuGJTxF1oNn4kJxziHFxzrP1hDJ",
  "key1": "3rykZtLGfi8RBS9XxrT9unjobEj42oX1TWa3d9izgCPymbZxCEywKpRCBFRmumNh38CLG9NH8cQQEMyFG2Uwrhct",
  "key2": "37XCh9oo4j1VWyzoVVWyeyLk6njEAyHdsCNiWrk3V5VJqKCyyhAqp2Ptd4kNXSvXvgscrBNmduHFtzGBZXb3LmoA",
  "key3": "3C9cSdmV5nntzEEmmxPVhSteX5vrj6rftCC46VHMGiJ1DshoTu62HDWiCJTNWbDexsSfkD9xjMDrXBVGrVLe1xFE",
  "key4": "3Y7oxKbQ6nJLsYr3D3q8fCkQPAtTbQEZKpDkBw6ewSkiAPjxFwgEdxQa1YWwcwPXNrbj1uW99JrGJq8dyaNgJmuE",
  "key5": "i1goXcbjHMKgouu8eJeuAegGMSn1kVXb8ENpTM1D7D6r9XcJhrJDsMBwZEr6ieQhYpnmzyBufnSAUmbVn3qzLCt",
  "key6": "27vodQ2S1tUUsbMDDiBYQATQXib9HzVeToEZqezAgcoxE5JK6dYhH2VkgfHPfk3bJEwXiMSXKZx433zrKTQ9ibPg",
  "key7": "5srAEgG9Bka9ox4JHqTXBDhHSYuKU6rtkmBR5X44aKzjwNWw5GxMMWSgDVanZYRLdCZTai3W3Gttuf2bYUHcHcL9",
  "key8": "5KFfrdsfCGcNbzYQYncmxeNeE1jDJRv54sr2jXZCNVVigp7VrJr1jYozroYptafGTWPhPTgMAubfGq5iro48px75",
  "key9": "3p7yzfx8uZGTCDXXeG6vt6xdVCNodCciRqj1LTnVrkY2Jp7gCNUFr1fBFutkomipe8g4ep6BGwAduNYAKPKTmA7a",
  "key10": "4Hs8xiDfgA1JeoagkAf2mCKNbXLqoEHfNjn4aghtcpYAtgLrxQupW85KKbgMick2mA6Z2AfdBQaPCAn4eX1DN3XP",
  "key11": "EWErxkU9EWCSMsVB9GSBCUhJG4xzFFzvRjBC7nwhN1GA7RNYpd4NPehCCzrMfAT4RxZZh4LXZaQKU6UNwkHSQkh",
  "key12": "4xwSS872wjiB27BxT9pdUbBPK6Wiw7UN1EztowLCjmjmwVCA5LKKaevLQyN239ZhtkNK1a4WvHv52eQiJ8pNJJhX",
  "key13": "5KQKpT8Zf4eNym69eCQHPGNcUWUBvzkdj3rD993z8CRA1dstZWDJk1zcXPEuE8bam4aTqS2Pu537X6zEyKxhTC2R",
  "key14": "2TDhLgRb9Wy4gTxRio8YFZ95EdgBsLYftBY3myhncC55Ez67ermW4NhdtvmGDTpwM3pfrRFh5Le8Ud8kKRV6JXaM",
  "key15": "415M6KnFMSW2a8ba8XovsmtxZjMGMLCVXHcN6RP1XHVhxtP9HqRMQs2Us4K5nKhgg2CAFCqZm5fxUxT2Gef63jtW",
  "key16": "wWsmib6m3bMvad7fx7LFqZTfsQqcXF7vy7Pdeg8hd4eJaeTEqxCAHrZzWPoiP8Mw93FqEMWVeQX99NjhfUWj9t7",
  "key17": "huPUMXsLjMxEBb3fCP4gCnjowpFbiYeyfUdR8uou2WfuHMxB1WvdwT4n75wpJaUvCvfJ4oUP5Jp2mjMi2FTPaQW",
  "key18": "5apGV9RLsNhMn5FzcG5ALyTKtQTiTeE6W1uTRDQgDruScR5kadbRtdgsyxSTgwJQDYqw5JHjFwWsrnYf1C9rsw4p",
  "key19": "3EkQ4VHaGAK6yYav2XEJZsnhw4FPAUmGb5bDfTKa7koA25iWBBW1niG7bP6YfbuWJpJSWTksnwiRUyMmBeqtRu2A",
  "key20": "5S3fhiAKSbpMkN3GEeqmDm6LsHFUxJhomg8fgobL1UcZSCon2eBZrM5HZUPJVFp3CYn8vjJNMazmgst2DvstGzKd",
  "key21": "2dya75MZm4SJLKYp3DGz2mWiTjYFDq4qctkAPjJA5uQ6r2oDQtZynCMJNiNKFQHeJd3ooZPkYpcfYYrWmKizR8QA",
  "key22": "2PgvL6bWWJwqxcqHkefjYU9yByboHqa3fHrPJTiHgJPiberd3WxxX2mDrLg9ZyPoS6F4cN5ts6mxadSp5TFdPaC6",
  "key23": "3NMyHLDhTxWbMdgVKJ4Kg1TDQqvn8AUneLtF8yXuXhKn2fr3VBqyU9y39KuQcjSpEiWDrj68gPwPZA6c4ZBCxFoA",
  "key24": "2DouWpkbfAZJgaXBoK8qkxnzzBC4W9b2GaCngDqNN4YogD8zQXtj5UXiGMSgwp3MmdueqApBPYSARZ8QrviNwWaL",
  "key25": "JgrjLZJotZxPwfFAjYXP9HpQgNMWJdzadvwDm5EWSoiJLbpgqtQuqnTCNBRaoTEneEiBmnynbysw2GskKMgs1d7",
  "key26": "3mVY1rzab2JgTmct8sNNK4KZWbZrva3YuUSgLUKJumomQVZhQ9cwjFrMhtTqsxfDxiE2GKcgLH3T9dA4uRfBg7H6",
  "key27": "RVZwzDn48m9Qn9WEPFsJeBvVCySHb4YHimcVEoybZyLjPirgZxa48ewipTTYRYDctC37H5RoSteP8PHvfmkwidV",
  "key28": "38NgrTdLB2UYAkadWkmFySVjQvCH17gBM9fqzgBagSXJ6YT8wrsyqQspbydJcaFJQKAzua3wiUoBscecVTG7xcLg",
  "key29": "4kevsVcoW5pWKinBxDP4emJVHZya5UwetuxifM1KD7aS8FrJyEG8PVtT7qrkTMno7kcVNr7keFPGvHWxCxfAhfg7",
  "key30": "4WRp4ifDu3mb3wGmLzQBgfXSfdynisoddTZqvNZPyh5HgoaQNoYJtM2j1qkMzAfpqkScWKpDtefMxeVMXzZEmc8S",
  "key31": "2q9d1tkoWSHQ4QWJ31wFbtcoTgZwQFJ3qiiBQmKVS969edNQMhm1V3F1wx922HFkXNT6VstRunGQjUEzsj3tFLM1",
  "key32": "2Qivhbh9UoSpxQnjXYcQscKvpkdUXj6i3YkR7s4CoBGudv2e5vB3CktnS4KiZpEVNLti4Y1j6jo41FgFz7NmewPh",
  "key33": "5bvvju5iLPQip35gcgDwSzcUQN6ScqokA7XHt4b934BV9mrxXGSCPqt2qhuD8zRL2KCHsDjjD242GcAXZzkvTDU2",
  "key34": "2QCna7eG9o9vVw1ASrM4tWaBg5rnfrQ41JAvHiGxKrZf1LkdokKms5Xwy6MD3cqY1oym7kefJ8Dp6s28cZDPLJsK",
  "key35": "5z396jtuw2KfiiHWoZsRuzQRZTkEnBVtgATZBEucV9iyeZ5eg1kv7R1S9jxUqJPFo3jYjdva1nUzyePSpU7TfKuW",
  "key36": "5h8UUdwmLmBkV7F8XMxTepMyDSNxBaA2gJgs8eDxcPzaq2CBbhb3GgDoJvBuwRZW7dF2urfxGjX9Cc9FjBPNjUMe",
  "key37": "4bEqEwkVKLjor27cHnYtC4opmrH2HuZsf1BMJ36yFQFiSHdDYE9iS5hVwfv6YEydFDKhDck9P4k3YGLT8QPMPcUm",
  "key38": "wevGzGCPSo3PaBHavc8QPSkWRKbRj8mjmhpYPGoerEgvGNmvHsYsJ1ZetTfCJLBEk6NU1LokiNQPCCbFELKVuqR"
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
