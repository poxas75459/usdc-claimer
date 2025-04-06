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
    "gK6K7Yd38L4rFxH9MYuweSNqnYPeVsNovQg69QoePzKF2anngutJJgN2gVPfBm3HGTFgZbdbwzbuEfVmzXv4LwC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LUdZCNjAEnRqBucJi7ETFW2L5AnsYvbduddLahWxWsEUM5Smd4fKEHg4F3V8ypiJpNSAvV4RpAigWjSE33HDoVH",
  "key1": "3EQnHsMt7yF8Sc4yeCsRxGdnnzsdxY3ergGdfNTYZwML54bgcmkQxeC7sRgBPPku26fqDpUyJtfNWBJuLjMVNkr1",
  "key2": "P523k767f7ncARs4YGFoopBA9JuAs19mMXpjHmWUiuHR3b6Lvrpy9pHAPbgstNnW8fbCeeq5VDr1zqtDn3JNg2R",
  "key3": "5Wjw3Bf43kiDss9wLcCLXM3s3PNiRNLZizT3e33x4xFbFMLexySrmELTD2ehJ4LmHHAb3CYxF7aCFXFZ9C15KzLU",
  "key4": "QfevuuACi5HPFpsGqPe4mYbHwRyYs6E7egk3CBscfmADzXt23iHZoK2gEEzbqN2PdioVuX3vo9PM2xnfZ26L8yR",
  "key5": "2ZKajxr9QLwxi7yar5JiWk7DL7C6JCE6QJSsb7BBzmbFmviMFB83JMNYcBZHmR6eGsdmmg394M5U8UjLyEENzjBh",
  "key6": "3vu1wqs7KVuLQWXFSm2wjk144q8EX7nDLeR3U58RWuh8fBiuTWWtubCe3AixaZZHfqCmgjrnZRZ6b3aiZV6TpG7K",
  "key7": "Uqg9cj1ZEnqxPtzaDFPGu8ChH54pwQfZKQpbSSNG7ELFrYqSg5AztiKxARWWMGooXAjhiV5G7frcGtZaHjPVHvw",
  "key8": "2NGZtx7PnqjFNUh3NJK6uYK8eKUym39STfBdsJFd3H2sJVuwTWxv51qRSZQMUWg2hDd6CC4zp18GY6VXMFx9QRFC",
  "key9": "64msS1gNkoDSgVdd2VLK4U8K54kE4sQDj1grZ57UQwnPV2c1hV5AYP7F92SmmfVwCBHCxhPoYdJ2HegbfQM6nr79",
  "key10": "wtR5LHNytQJiAUjpGHigxH3x6jqjcnNihvQgox9wmKUmjz1hxnWWjTc95cmkhc2Hv5SkW3mhwm8Z8ZJr1hDxk5H",
  "key11": "A5oo8DyF7AjWQ3bKQhgomihfMZbriTmXEMZdUy8gwaCN2UneVQiAqu96tKMfre82jzor8SQpoFMta8exAhVmkSp",
  "key12": "De2DtX9CAS2z4BL9J5D2qG3AJtDkPHCFRncx5SSHSBJhsgfWqjvorvxXPFwg1Zd7EenNVzWfWyR4WW3vu3twcXc",
  "key13": "2xAyZSBwv45VnKJBBfe9FhQq65DvXm2oTVfkgT5S1BdnQP7jzyXhB5UYfw56ugkty5GQdniqS1xVBoTkcW5TLpJc",
  "key14": "6fyZFZPdWNE3zQAp79xGmLE7MEcZFuNw4nTLaoUCidoppMiGwt1SmoQTvu5H5Q3aCk13NLP5Ex5RtuoZordvepy",
  "key15": "3mmoKQfYbnK93R6GPfW6dzV8qosTRn9wMNsfzJNdLWAx6uQc64EPSV9LbUTEgptjtjv42UUDK7fft98EBUqBEKjZ",
  "key16": "P5mNCqRipdH4vvWKTpnTFw2oAjgTdkMbqDuJdVKEuaGgHyQNtQv7adKMM9RBS5eSf2T4q9WrPRhwiMgJeh1bxnp",
  "key17": "5W8japXvPoUxPEYKr8MzVpuxFwwEyBvSL3bA8GLX6giLyRhy7kit7LtraD2XaTJz3GMEXbFtT4VDXG21o29iXHVj",
  "key18": "4QhEiNF8iAfCrGRFJK1yDLqkzsgFno4ZDMBaorG4sxrFcpqjindfh8MySsq91vUXnau4uoyruKPGYyKbDn2feiio",
  "key19": "4T3KmmXD2AGHH7DNtheTXn8a5AZBEArV2xwfsttrG3smKrTYkB8wz1ocmzeZhLyFFxZFVmkKtjPifV6zGH7czKSt",
  "key20": "5oMauRFhCnfCppnNeH7roxV9qjPN8czupMTRWjLDrVihfauTBdWRhuWwyRpaK9rxN3dyUSnSTtQWn1jeSJqrd5nP",
  "key21": "32WaFoJ6aYPtY6BU2bwMdkSzsSg9ANLxD5qPoNmANCz9GNidPKz7ddi1qWmtwSRzAfaCwQExnLAwHDfygbvD4SCz",
  "key22": "4HxUQRnjPejSV2e6cTN6W53gspV2HyvyD3mLgz2TKgFni6WrR2rHxk8wvG1wNaDb26BP2qrz2GfDvt6TpccszSne",
  "key23": "2H1ZvMJrwh1hw1HxKnHUqVz9ota7WqifnPeeWZ5eGXgG56FYAs9i7TjnTPoCqXRiT6gBuAHL1ErDfndBea5c8wir",
  "key24": "umgY6RazGce3se5WqM4ZUZsCn2JpDn4RReVXn8QJ6ym7HYD3imhBmjhx8t8DGEnW7nJfcQ43xTQ2EJ92UuGdTzp",
  "key25": "38Bzae99ye9pwWrM1vS3vujVtRmrBqjTdEFMtoiMU1wZE1n27UGQivKth2t4wnuk7YajZjdmA2D8dWCa1ETxJ9x1",
  "key26": "4WTYTgcNLGQyZ1aKiPAF14CKqMnLfZ3sus2DCwsCi7xynk2VMnKMwk3f6uDYjWnCq13hfQUK5UcQbjkFG9ZYFK1q",
  "key27": "5vM14FvXEiczYGEmg2teLwzX8JLLv62AMorLLghm3nFyPAr39XaZhNf2hpGPqFticrfwnN3Ruez4j3wRJwd3xfm9",
  "key28": "4z7Tb9nFsCZRYPMeEKsjHeA4gK7ftodLeMN7K7nyMyj7dZco4FVTeaAkwxssxjH6DJdCPQj73Syfv5CuBDzoE4GX",
  "key29": "4XGTmoK3wunXkywCj7Ynva7KTELjVojFF5ReQCcaL4fKz4fHxxpohtJoPamwsxPvn7wBmEdBQ2ozhmHJe4RJtELE",
  "key30": "X5CChzcGbdX1RixQewdgR6jQUQg4jwKG6EFSG9FpKZaqHuvEcAucdXxyLkAgagaZLFvznwbeQNPRfrgFGrWeyG9",
  "key31": "21sCtmUDfmnNgMx5p3UGKomRx22bP6MKb46Lki5r8LU53RYZ5dqYWXYazTHmeLwHUtax4vXJe88hKDLZnbzDaukr",
  "key32": "3RC3LjHq4iyZywNMyuEgoz6dLygFTYhAoAoTy1kuFWK66A8UJG8JdDe8qyKPw1fxxjbyxT4RApr7AjpgbngP4HjB",
  "key33": "5611XFYf9x5LTa3badLSBbEHTuaUUVHAmobMxUajPM9mQiPeRHvcwsXG6Joc1GxZuox8gxauhBMu4EHzqy45Ec19",
  "key34": "4x4WCeJjnX2cuCc9VnAbEVTPQVRW2oqUJm5BFp32NJkJuHUG4toB1EqZfia7duPAZnDCCrxxxUCWW4nQiGFGaWNu",
  "key35": "3ENBscjFvWQFqGxLng5p36yi3G6fNp2FYNbcfftoXEnPMJY5dq3VdQH5To5LdABqft3KQjVp29fYYBvQpasgwDna",
  "key36": "4GQ5YyssY4UJVrPya3TRnFthbwweao5Dpyo4VgizeN6cRFqkHRLhB56bzJd5YbKbJTKMLNmmTTKUmtYTckhQcKu2",
  "key37": "2hSUUrfFzb6enwQQSMFdp7yAwyzrZZRiT2hYkRJ3kd98rRC8tpvHUkJdt25uYVJqaFKY3e7ELdEDjBPkgG4UL5fQ",
  "key38": "4MNpisLeJzBQnTDacASfwZJF4D9p2EABYMVWbVcT1K2MgBPMqatYHbJ1dK4z9pJE8boqit5tfZ1feXZT9Dpsbc69"
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
