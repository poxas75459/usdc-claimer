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
    "5vHonAkEbLGHsSrTKuBTwC79M3casJwenXp66w2TDj7f4QA3p6qpG8rZC9uVtzsw1FrTEeUyTLNveLzQUyvtLQbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WTs8Zbw7LniVMzk3EGXc8grNXRuZK8jJKPX6ofUnUVch89zcuYYbRALpMuFh5iWx6Yo5CMhA2zXiXogbHoT7nvq",
  "key1": "4vbgtZc3oAUT9yJG6xuKwT1VkUWNfPmue5dGQFrvKN7k7AAgrSU22aJX6xdxBxrsxicu8c1zy3QXoFQ1RxAdxkit",
  "key2": "2yjtZhBSDRRww6rS2XuEPhHwmFSULpaVFvHULRU9VssHbb3ozrTfgmM3VsVF9Zh3G76NocRdRRDJNf6ijBUksTck",
  "key3": "3YsT3TQgBrtHY81irsjMhH2juWNtTRGPqGRXXyW4R2LwRfJmtCH3hg5JaJo7hcfv8Jyn5sRnhN4WyQgZGLnXxSWs",
  "key4": "65NBGQ4AxPGDDb4boXNT3VF9TZnjGBYSRqqojePGxH1SY76GGXNLrkmkGvsUu3Q3WEJ11uDRjowvmJDQgevPnxtQ",
  "key5": "3kz7az6ydfrcToVUwZmgpJxYmahc8u1TNEH4w4Cfd5ixTfMx3g91AyY47fqaFZ6U6UvZGqaqwV5EudveRAMGt3VJ",
  "key6": "3bBxpNaxEsz7b97PZkakN84DZqQD81gm2rzt5QphPdK4srvZXP7HRg4CKvaLk1YbTGxUwLz3qRnwY7UBt7Ds5zrv",
  "key7": "3xwDfwdjq2h4BqwairZop85xXDH7FoMyXx2fyCTXbFvNJCZ8sVA94e3tUqG2o41YxwT3JbAXR2BA7hQz27ihcy1G",
  "key8": "424FZacP75Kj27UDjGRWDC5tapbZKc6fJq5VmazVMfVWi33DZfNgkmZCRdw1EpD4Pf1UijdQir4MyKHCGEBMU61z",
  "key9": "3gUiGM8a9hRs4nzLnzkzcivcRsjwEMSHec3UV21fEZGSoMc52DsqrjULL3EhiPhPdfYim79Xr7davcRRf4gW54aW",
  "key10": "6363gimLzFJCZdofbRAryMi5AU1RNRqJLFWj6coTLgWZ8TBdTCz4XN63smbe11z2SApZ4wzHQkYbqZKnMHSxL9Aw",
  "key11": "2Toakn1dbf9LfsnPa2Z4pmZ7FcVh1LFm5pDpjf3hVC9z3cWfc9Q3KmB7KPAkDYNjbXdyzjk31c4PtbG7koR71YHG",
  "key12": "2KsyBxXrgLRVURybpzzDonTDkdzwKJeqDKCyJf5PMeFC9aVxv4jyxYtwiCzHYCSrbRp3V8EgegR3ScpqUwbuyeHN",
  "key13": "5RfqusUPbQEPG4pcM42QtRbu7cZrcPAjswgiaReCHydwhj4xTMPPd1p3qaxzkUgXbW9jyYmYoBpM2To3fCsQfrPJ",
  "key14": "2SibFgUs2ps9oTUfwS2q1ymwuzo9yyiEwcy9SQ1kxmR6R2dbyJPfvp4Kj6i8AxHonf2H7h9W9rYpA5JMnRg5YSaD",
  "key15": "5QZ2HvMDnSetowxEa35dY5GFJZnD158ivhuFyxSzPtDoBZfbJQUMRd7TXeBYAxpjegG3bq1UiD1NvcDrMx7hji1w",
  "key16": "3tkoTbc9L3FPEri1UMqyFm2CEKHWSG8F2DQawEFHmP6ERPj3zv2cZatemmt3EhuRYk85AEbgyVfh3rNRSqG8Cn7y",
  "key17": "5GY6n3qTfHBsJ2f6Z1TtDPjcoFYaQkMWwbuyLibkc6hzAd3JVbdfJS2PznuK8jdwj4HFhAYfzUhyiZaSon9M7CzS",
  "key18": "277ZDzbxEYQWKbJ1Mx6DzXEBSe2cic24JSuA4EL3asduBXzxHY3aGgg9uj6dif9QYqGaa9koBgTFp1YGLWCTyA4j",
  "key19": "43cjBuLwFeLnDuGesxBHz8oKbiagiWJeKVLdNxaizJdaMVydMTyUMce4gqb2ZWFfUNQJCzmGXuQgVHhdnkGQJdUN",
  "key20": "3WLpztjj36Atq9NS6saCRUPc8oQmisGJDQH1WadnhLPabmsyovi4juLsh4cm5RhPoQf2Pcx46RmGXBgTGuViQyBM",
  "key21": "51eBPeK15QYSTHVqYdUQ7jMye7qVesArLcoCTYNV3zRKKYv9nBJ1pz1LPgz6Kz6aMX7n7NtAKug6oXcuDegP9Z8T",
  "key22": "4PWSTe2epje5FFAt6qZrVxFRY9NNv7kYE1UVruRddcrjm4zyNaTqPjs3jKZgVDqbH5iAcPi6k6AFGp3ScxsJ3xub",
  "key23": "C94x6YkJzZFAkbbiB9HMnWXJpExYWiKSgEvKc6irn33dL5FhHq3qZbaMTY2rnsTqUcZFjceyGUwxX3yNJ2X9843",
  "key24": "3BhasscTsJH9agGTbXM8bmknsd6aTPVsaL3UBaAjy8W4C8vH3SPqYxBKa4bSa4nhgGmvXdFZaJ8vPYjFCNiWqfLy",
  "key25": "4rwYFqkSd4ChKcEPpXKQNys5MBMSNFcavVpfJ4cY7LkepJPmbJa4paCpeobxSayUdnWCdbB5UW4W7jBEVk7aewHY",
  "key26": "2J8ntqJdC1KnYjyGhsZFRxUbm8NYKcKt9STQCSwEotBJmNqEv7qmC3LgXjuKEbhHFBjmqgRFt1KzazkVrkdtjsEF",
  "key27": "4GsB2Hhtea3fSJ2mX4Z9Hrpyg6yaLWHWULDXye3xaDzRDCQf6j26bA2EYyE2KdwX2yhegLf7wWCcnSZbhivSHT3M",
  "key28": "3uDEPcnM6doj5NfRttuZoGX9aGw6CNiQwuoqfCaEkPy81BPeED98cmDghU8uC4fHnHfYDTFvR1WkqFcxwJ4Yrcn1",
  "key29": "52VDopCYa8wbW29FJBFD1vtfdtEVYQcUqwJWm7jDvZ5vvBNHaa71mErdefcrHFTQ61icPcY9xiijBfyGaspGFL4w",
  "key30": "5dKXLh2wz6wLn2Kj1uJL5nhhJaaN8GvUKDnfRaGzmhzsVTxhBP97z5DyiKSt92iB4JpPHeWVmBKTTt3wzJnWashP",
  "key31": "4eLjcHPPeKVLwQV5E4hUTu3L9Xd35LNUjy3XeJB6NidAfgqXwLpozS49cbv1ZJ3wpprGVEzKvqbFekSmxvrXvWas",
  "key32": "35VjSDnqAfpSkdzJLZUW3wffx7bXSiiAqzJYbwznEAVjwnKdhmBpERvcdvU6Qp9Yu58PXKzDpu3q25tcU9RDEPCV",
  "key33": "3FNLDRDJTR4ojGgnqnEd45udy8xcB52fAXtUoD6L64a6GKoMgWcZzPy1V7rSiohyk5ws7JWdMN6udQXrhufTbKFo",
  "key34": "3vKcP3TfXa8DWGMvnow8UzeSZqch1F5R8jvM55GcwPPmuv9ZjZmAMXzMF8pRd925zYymvYY97sPsfjiR9mjeZjPG",
  "key35": "4wLFdxq7UrwJ46T219tdduFnvroBXYsEqJQLkNgf7iq7JvpJ4Sjwdj1H7EAoaUdeJ9tfApQKr57JmwzFTa5vPGNX"
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
