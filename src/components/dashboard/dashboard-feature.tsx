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
    "5QjAwS8D5Dn4P3SH8wECMunSsN3HFx3RtPLABriQJs6g5Uq2EkZDqm53Fn4V1mBJUnQpN58NkbbME9B35DZs3Fwd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bSSyQmSbiGsT8HoEjmAExrzFjZmngb9RnoZNEX38CMSffkMKMt27rzWdLt7yRuGJRGciFWn88KoqLNC18JntbBT",
  "key1": "nWGcozMAP1YTGx6sk5pvcZiwrs6cnjPdDVseWzdGrY9TD2LryK5pD2Nnp61ym6mwd2M7aow9KknNZaZjuyPJ7CL",
  "key2": "2izAcYgucGy58zvXc9Wj6pWyCwk2gUaPSBbXwR7SuqGbyfaBf6f9TMsBAXqqbYgdCPjn68cDFzb4qba644mhnz9K",
  "key3": "5uqSQiwhNYznekChwkrRHEDNrLZtsWAipLKyaTkk1Ziz3TtkVBn7aJ1H2GWA4cNH7QR7x1XTcQVifCvG5HEUKv12",
  "key4": "f4EcVXnVHiRYbzGxD9eKZALX9guSjN3T6wZxjb7vKuNRVxS4iC6j3zpJ6iF8kQHV4u3NzQ44RrkbGa6bDAsFGuF",
  "key5": "56TKj2xCtoVM2JLjd4iaks4cnA52dmKosW63JjnquL2hmgJPKfuoGxep5mDW4qn8iVSU9ZC8PQ8auXRKjCKGK6nH",
  "key6": "3PS4TF86dvRqkP4sGytjqHyCuyozgU8ZPSgZkEreR8naitxSPDcvjwLXUPphEkv2E8PyM3RqeHEYPVEciBwM7U1d",
  "key7": "2tUXQrjenDBnFcnBn5qXAM4Jhv7de61r3FNNNmnoAHZswfjbYe54aGxAQDcbPAi4CLQsUu9Hnwr9ZYqxUC9iixHw",
  "key8": "4CLHu5YeXPPu776WBuFZrwgStxBx9juQrQ9j1DeK9tFPv2TqfKRxS7Ngi6FQMLapiWwRMcdX8q2iZtqxTVk5NjUo",
  "key9": "4q5a6bsJGVv7zM5y4QehmpZQcJvZWYPHuMg98UdRS9zzLcD3iZ6BhEsdAQNUsxFw1hjgE73q5t35CZzDrf7dvq2N",
  "key10": "4meXXRRyfPCY3r15oyc2UNZiAWokBnB8vVFNd7sksFFF6rSC3mJaBZty4tyYxshP21GzkscLfYmhpAvCZTvKzYmX",
  "key11": "51adeH5YG3ApD93KGRyL5Uj5N74pBntfZU9yPbMmELn7dbZCQjxDn4CkS9ffmLCpWcvUYzEG2Y7F2Pxw8rKyh96E",
  "key12": "ihMFvjdZKeysnc5rLFEfeVHU5nhmMUSHJVR36waApHx71zjCTAiEVRhQU7DcyDLKFYXGPvJuL5yz9AWY3r8jgoh",
  "key13": "47iwSGi4BSnsULAsVR4rmKLYWC1XSUEmTuH8r53pL1PbwMfDpZYgbvsT4iurJbQfgG62kcaT7h8qGdFEhQMEaeqE",
  "key14": "3U2KTZHjxqXRE8JaoCM487V3DcDXJAN3NDiuQ2Ku4bHrkyAaDUZiVuCnXDtwQh4j68cVWtLeXfWnfabriZxFxo2j",
  "key15": "2au4GcS87PDHovQ4XhF2P7UPLusNH79jQRkGeNwvQ5xL9R6UP9Uv5hm3spTJ8gA9wva97s1fqnuLRrPeHTtNwUNd",
  "key16": "249UcACTsvw6Lm89yrrufyV2JkM5jdpJqZ1vxrKdFqct1KPb51igPmL33Ei2xUizvm4RdGjUFAgzvNCktJgTBgY1",
  "key17": "qzXSPTFYktxpv5AAZ5tbWhzszndJi4hPUy4jo6aueruUcL5ZhU1wck5cXALSjiBYLUMmuMogyoJZrLPDaUmyEnF",
  "key18": "jw3ixfNC2DndjCz9XS5edUNdx9kfW2jr1GFT9YaBKTjETZJWgtvaeucv2vNuvchhc4wfV8KV27weTHN44aU9fmn",
  "key19": "3ScTFejD18is8fn3CYM2issxigoNTGAtqJKecnPhfcZxoRhtpyrSgRseWJPyfnmvCNMNUM3qsjmKEp4UrUPdSSqj",
  "key20": "5ZbK8erJxCCsNzCr4RgQRzsxbJ15ig389tQ7b7sgXcoxq1LDAM8bDzE5hFgbiSS1W3w1bDCemiEVRer6duFtErpr",
  "key21": "2EVPUGreGQoJTveHBMjUyEvmUR2mRHL2LcXpFPcede3KPkbss4JHo3QpN6xSZuBk1jYbEHFzfZtJYng9EEn53yDt",
  "key22": "3pGKvLyuQTH2nV7i49NYkoZUzDkcp5RWUVXYUTETRDEJHyD3AGZm43YSHsSi2S4NkguD74TQrDMH5WnDQoG4qzYm",
  "key23": "4UswZvx29sZubnVCBb4EU31YBCUuacjgd2GVg8inrc9dsUWq3SzfaqpXfGz34Gs6cYfyHCacAtJz6EdVHhj7GibE",
  "key24": "daJ3iQ8W1XfMDmqwEYhRHFWxwAdbN4Zqe365xqHTWmGsBka7ZXzfpK1V3ghD9KYhEnaUYPW5No1wcowk5yaWXKB",
  "key25": "2DtDk9ASuGkEj1giaz7iVRfu2x4bqgxZHkYcEUAsgRHwF3FKoK5ncZjcfqFnM6icfgY58AJ2PH76AAGEKyVdhat3",
  "key26": "5NtACG5pKHtsnYZ5gJgVtEqnFesPM9psqS73Q4ZzeQmdqq2N2Xr14E5eXYpeaEb1RqRE9icGtSdrh18siFrW2yHd",
  "key27": "2KqxsbjiYsGh8jqcnGfF6Gt79LtSBRSKzUEM6JREoNRTapXkqXwQ2HeujA1fb1Kj9SRCoeRwn8iwJpEg1zqmQzbw",
  "key28": "39NdWXpAqQ7ZG4KKGhuYFWgaKuDH7owBrc32aD8QnaNYbteA6UJUgJZNq2hjKvV3yhX3y5WeMBj9rXANjvPuqsFU",
  "key29": "4qmqdhUXcTK5GqYamrj2vEGoANPPvKJHZETFbNvr54QQtE7r6f5eizwbjpTjR7QvZvSe9KBSAYYBeKjZpp5ETPoR",
  "key30": "5QdhR7t4tyTE3dUu25Pv3nDjMmieMZWE47fwmuti53BAut3z1GoeSdz7JL4atN9ZdCxtc2ffya5j47CvYj7AC3rJ",
  "key31": "4a1NXgEh4dPjTDZgESzLLQ93o1dg9bQg5RpU1L6nvi7i7MV6f3pofXT6LmxHByP9J4NQmVGGXjJ5PYorrGc7AB9k",
  "key32": "2WvTsA2uRecKkeu98Z7xm4c2WECV3tKQ6iXASBVpGVoUjTnyX311UrS3QGxLYFdVRhFomZMhGHVnyTT9UXRPKt1X",
  "key33": "mS3zeVNekk4xfMS3EU86FkV3DizFUJRWAhTxqCpBgH9spbj8BDQKsqafkC6UjVTWa84nas1nQVPixcz3YQ3yUqF",
  "key34": "2TK7qe3kFTbKo2m2GQvTtECSLwwJQQpvbybh8RZjoGUbboH1Fo76Xc3Zr1wuEeMuo7Am9JtCuhRzX3RU5z9pt8iQ",
  "key35": "37HBWtbJgCBcU7vzuHWMCCxMCSDwXkayMr8sB1iDsg7vynJWeEsmZ2hwjPPBLaXNzwhJmf5PAFpQ7QeMAK7qHHrQ",
  "key36": "4syqDGuTU897pJj9fr6wYXc1KzpY3aqsRvM36meh2KwuhrFSWC8wMGxfujux8aiUzJXTdLGHsbdmS3AYt4wT1DFn",
  "key37": "4GiU6gbUunNgZ2ji5WXffTULFQnBykLzEHPP1jvYbaf3K3bpSXHJTaGR51dJH5viXMfk5YStX7aeWktr9fVD7XkN",
  "key38": "4R3kZwdwQVWxZ2Rqaxy8TkHXYo576guambKc3NwmFCL4vT3dz4uvrbbdj48yPYpEUZsUHKeJaQtkv4xbULRFNMF",
  "key39": "5ZWFKPzXEwULsLWJ7HmnniGEuWw9v8efZmRzLjkUJ9KryqWwnmWqsRuf6MVPsCcVd9naMj79D5oH3hEqtjRacDSX"
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
