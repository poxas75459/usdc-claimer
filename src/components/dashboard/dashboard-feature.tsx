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
    "5RcGV751z8mLF6G4BVHYEPtbJQqEBxNFWaKY4duQCHydXePYApQapCn31NwFBw8emanEpnKtQkmckv1NPZkHVSxC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YQoSHpE6Xj1u3mep8JAyHTWRrccpb6cDyWVBgg6Yr6eEjxGCfMBFK8mjHAw3zSBdZVzZqwfsarwSwy1tzYKwVUZ",
  "key1": "4q5YEXbiZYuaLdA4wqYQvnFGZPAdHFNjKpYR5W5JAe2paRSSakVWt7oQh6rF6MGvmAdWxYNfzo571GtSMhWa6Vd6",
  "key2": "2MzBfVJpN8SNqh48iDknCafNrUp2HoTjCdiMArhFPkVUgoD2ejbHJQJa9CLZEKgtgHe8sTsHZa8kND1hH3RM1A4M",
  "key3": "5Pj25CsTy5yk92zQ9qnc587TaSpMEnvM3bpPSABLbJMmd5nuAuVygXvsNoFeMEGAQaSC49MuJZKWzA3fvKibN7Sw",
  "key4": "2YKZRn8P7YQf1PVNAEE8bpQ3xq5kSGCRAVDWiFBU9fBEHNviM5x9FemUKhM2Mc3PqfWmtV4tKDL8zYJwNwFv2KeJ",
  "key5": "3re5T2ifBdaHMjQoo2dfjqEx3drQwYZXyLYQUG1cmQN74sbRwSuMjq9bmeVoW7Umpk3arhtpZb7HpX3y1wCQu1RW",
  "key6": "4dWmjUPRpLSJczGdphwDb5r1wSHGxTHiwxNsjWP7vrgNko1M42p1ku1xAtiqgrgyDLPfMPRPYjgStng3sDjQRcDc",
  "key7": "ZfTWeioyEAeVxSzxRy387pyfMT3Eb1RwqUVXhhna6amPVK3iwEuJtagfPhb2cyRhuSC9H7fU6GqUJgTthCjxk5v",
  "key8": "5BMWu6SfHoqGTQ9fCqfwE2e8GrJVahvpy37x6ykKzy3nrHFusJPgFonoqgbwdfeMyyyZwTHXB5WiWVpxKCRdsTPQ",
  "key9": "5nbcvkTioTWDMXepBnzPg3rCpUqrYURhNALKMmgmVBy1V5WgjCyJp3SKU14CrXQ1QaYBtHFeYNKQinWrJ7PgZdzp",
  "key10": "5oxR6c1oEMarnM3JbKacVAfwNrQuVCyYv9GcFYf4MZnYqXG3piD8AqhjJAWFXQg1hAidHXuyQkeL3qN6BEHN1deW",
  "key11": "2YfTHKHk2v1RooGxcBXarJNknS5RiZRpFK4DxuecWkqmkfJQDtSFaKAcrxyG7J5MNP2rJ6ad7YURtxcRE1MtiHsW",
  "key12": "v3Q5kgS31arPB6gZpP8vqoSLXXeKmfx6UGCSFsHDqh29HWDsHYQwVC4j7z14LtNALc2zu8TgLBwmGicShnimgof",
  "key13": "3XHLMLA5dj2geLpurReb8bXapa9qmSvMetr67n1c9gtnH2Kqt77ET24trEBL4L7zPYKJRzq1SGJ3MCdqf9BKs1j9",
  "key14": "3xz13fxGCG3qS31DUifLnPdeJN2txeZYkAmaXbT15FDcBeoVj5u2afyiGhVxS2qsseEavWjnYg1gnQRMfX7KAw4S",
  "key15": "5fsrbemkjXvXTRxAuj4znHGXcQ2MmTgZQ5tFVwWTQaucZUCZJsKBBBsFGUpV8epGj317jhbSjVB6hEnAJaE8HTNi",
  "key16": "2nYdZPeSuyBywr12eK9hmMXppSFpzVVvRwJ9T7Epm3W71ofohxoYZsYzkF4afjeJ3inU3XQ5wbHpknML8dbFtsKA",
  "key17": "4YW3sCTcBVmAosRgKk6YoQXoCfW2XpoAouttjyDPTNrqanqgx1JpGQC8cBnPavhpXKd4jqN1NpY2wJ8bVpGYTuMf",
  "key18": "2kRoyVchqLX7JA9z67Y9s82nkbYf8XwWKaB9xwJmicrCTrLg77dBGy7JGzrNwfuNqhEHBuf7TuX5kUeNYxjD1kod",
  "key19": "4QihtBPAyeAozn59CPHU8foHPUT6mRAvz3TEE4BS8rYQiFxWh2HgZWQEmfWTw4SipTc3kdAofRhmeNqfh9ELQFu2",
  "key20": "3ysudBcQPmVxkFJKiqphD1aAiZMzJsXZ77vgLgYtFudcezDiF2hGb5PWwM3JUMn5BWCejDaku2mcWTeCegoeNNQu",
  "key21": "62erV3eeqwHGhbinN9A1b3evRTbqwWHp3F6ca75DTz1r98NUTt4vSCiYhreX9YGrEpNGb5NXSB9gCJ4JM3hF7r1g",
  "key22": "3LjA6ccniLNAdYX8xubCmPAFY7hjGniFDC6FfZNRquuKkYEHqEA6XR6TUJBPkjALsfZxj9dwTApbWxmdLim8fbfs",
  "key23": "S4eF3gWqfZmfeQwLwuALvuWTDciD9T2RhRhVvarNgyqhCvuWcQViRhLK2FZJQ3veWknmzV7DXPXSMG27YGAcooD",
  "key24": "3c7S6Qkf1Fe9AE5P94u5wMRYF1t6NZGboXRdB4zRxPpBEGft7Ja7o4CV5mLAhgA1aHcsb64e75Ern2Ae7wqZ6MB8",
  "key25": "5vKKYZbrC7xuCdxva2HwmBbXLQus4rmVnWexTSL3v7pmcXdGvHhFU9BoerpCf9Ak5HYTJoR5CFqTFBeX51Fg8WmC",
  "key26": "5SuhgnQZ4VZVERnTpJdQB3W2qyv6x9wRzgNWnQR7HkouotUaCEDGeAvn1xDWGYSJscAj6ATjqZWFmmw3SXMvwpSN",
  "key27": "4Cymj7ExwpE5482aZrWLAogX72Mdg3Psukn3Dk33Tncj5hM4RJz87G5cHS7DEskMtGAfdLA91BpbdR38AtPmS8tx",
  "key28": "5rRssAFGppi4w9CcSjtDN8qcKsYg7kC3xd6N5575kpMgBgnC5k6KfDrggi9NSTPoisECRfPjfRX726H83iLjrceJ",
  "key29": "4HYqHKavaEC75VKm3iPtrFHSQhwN8DQ1CvdNchz6z3TjFpaCaDqJ8v48xi3B8Q76SBs2UeQjwK4Vw2J1916wQLya",
  "key30": "5CaU8de92Entc9FqkkZtWUmwWd8sRGe5QhepLKSx6kJbKmRjwwB6KH7xWQfmRZAibhmKh4j2EfJN5mutS5W7w88B",
  "key31": "5sk6ArA8qfEHcYBs82edqYDLZXfvJyz9f2p72Je4UehssKub4PdgCje39ipb8y4v6YpQbjzfQBrhKpnNwZ3j1KJo",
  "key32": "5KYBYAHacuPyrgbCpWeHCW3atfqYbMdB8njGYE3kcXth2H8krBuuxBeuYRBLTLeWN751e4CfYoEK43hZZM6moxPS",
  "key33": "5jfE7aZB6Vs4XJVbLud8NqZ5Vmcdn1PKzDhmcH9Ce2t1BpAidqmx29CmEcXXf5uRmryjdbREWWQYn6ZehoXiyrDn",
  "key34": "4LL5TVrUi6stQCn3hvMdqWrYR7ZvZGu7B5Gxo43zvXGsEhBzEyvemvP5rkWgA4hoSLvf9hfwRD5CUtHjzEPPf9YL",
  "key35": "htjDagXDswSbp8fAebZmuS5ucg1cU7EfaJgjKcwoJA6jd4h67DQMy84y8XSe5zmyoRCeCQvEJWBLSyFwFu3RHBY",
  "key36": "5xq9KDE79c9urvcgzDJxfcSyfbEFuDPv2QtoFkvt3CwquKqsYekf4NK8448NtepNg6jivi2D7L5dQFFd92ymmHeU",
  "key37": "2MPxxF2Mq7JumiwBXT24miVZ4QPNY4pyx1HL6Z4aiAakkr7dN2y3eYqkw94rRWCpCiEKEQZQ58hqpMTAqgeRcevb"
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
