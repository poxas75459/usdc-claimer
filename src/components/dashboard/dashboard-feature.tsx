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
    "3x4srfKpWoyE5rTXH84FeZmEq2nqDwyY4eyRq8eZzN3uXxWY24ZyppVKP7kWJ1MfTPanWyApcUYP8dggXEAYsgLP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j4kxnUZnjZxGffBfepy1Yj9xRQ8PBMZ9iGxqMDKneTfmyRwKQKirpXmEZHCkk67pyVzQyGQ5M6fifsh5tjjB1Zb",
  "key1": "3VGYUtpLMwtxhpZmg6P4rLVPxUNk2JZwA3nR6pmrq8d9uT34vn3h9PivVv3RXN6mzE7zEE9W6wa1V7Np3BtzgEyF",
  "key2": "2SqVZ4KNrUGJ4ML9B8oapZwj1agW4RRCdQpcEreoSQ2k6P3kziSm3mhu1QamZnb79MiHNYMAaJ4ev6rwa2EkbuzT",
  "key3": "31isQyC5pNjNpWP1AmnHJCzACekLh4ARsGjAHddoq2m5MwHBFVxy8oDxd8DekJ7fKegn5K52E7UaE5dDzNdUFVHN",
  "key4": "5PE9KKtSgWVMJhDrfDfQYBpRhDZxkQ73onqo8V49ra1t3nf1ejPZvvE9QG2fhTccfidgQqBFAy4vTHg2Zia8SSK2",
  "key5": "587m3ZhyF9d3qviUfkRbvn5ZfHQCWk9jJE55r5sYWjX7yQ9YjqtTZLRKGQerxuxHRrLMg4qq4xqjCNzifiUFygxd",
  "key6": "3TrqzYeHSWEuCqsN6QEcfyrdF6vWXXVCyPjogS5hjCs7FrVHzwT4GcXxdhGcgQyNSEnuersHALhjXmMqc9vgDKk8",
  "key7": "3T83i3cWn2RvHc3kHF8Yb9gHykVuT4i2YhFAS33d55AWoG4do55tUMxmBot6GmPSjCWxctbX1RxKTvCsuCoSz2aZ",
  "key8": "2GRQcUHj35UzqfYvmbnkKjhF9AM6TBv6Yy6hN44FGAsEGJiZQC67ktDdZ3K5s75YMqtKmSpMc7aZ2do6tZnym7Mz",
  "key9": "2ZqERSeWv7rx8WbEG3Rwjsv5tYsj6fH7JYgUBREuK3Zu5gDkVRCxb5HSNockGiTNNyMRxoig2Y1w49WLxUfNcmft",
  "key10": "eoFY4A1jcDZ31TmMwphvLgwgtGyjJGvUT3dcirf5tHXkjnF4WGcmoik32QEqdPJKUDft5c5s8GvnzqihuTBTc5p",
  "key11": "2jSrTxmBqFSEZYCEmUD3uSJ7e1qMjLiP7iBZ215uSxyskN9Q1Wd4d7uaz6EbPrJ3LzuhqtVRJAqbxRaF9hQ6Pk7F",
  "key12": "5QhKEBoEmpNqJC4zCwu6tSn3xGXqfwH7zEbjxVJJGDyMaPZ9jngu96AupR4s4Uoq1EiSv3LLhLB9ncKYp9UjjgKp",
  "key13": "2CGYPQ5zjiLpYSJZ3VDVLuK6xvhHbWzS2fhASTnvLBpxpxG7QGVUjFA8GxUdfoTsxaqv8dmaznqJXRcVjwzXNAWW",
  "key14": "51rugFMQEgQ74rT3yqGRy812xuBKJQGxb3XDda1V2Dn16VhiX83bmmepW2Yo4UQc5Cu7rzoRMvg5NWV3eBUPKoX2",
  "key15": "5s8Diw8ckio7ePUtsvUSKX7fz9Jwdwi1Xeg7Wgd4qrjEZwfNFedk4jENWw31gFb2mZyWpMoU61amiHEi1WWcdmuG",
  "key16": "2fP4SXumxmy9FCxK132UKoozu1aPvEe4pePLYAu8jtDaDzbv2kDVVosXxq5R1Ej5qA5vnNVQzXFx4u6B6FnyCFGg",
  "key17": "26Za4mkj2D19cEjDKkAUvjmqDRYwPT2RuBGBPM268EqYpK7LBNg18C7cqn318ecoRY6LSchzbvnGZqyEE7UyyvCs",
  "key18": "2mEkozxiwNGntuayeQqZSbe1KLrd8PadnuXqP86UPF6BUVXFeZK3JhUuegkNGwoqtEKZKgE6QdotucpybZAPzmuv",
  "key19": "KHAPLfgf5rwZoKviL3uSdSxXVHdfCjf9UoZvwo59uacaBoyS2Ln1exD1pompX5tkLKZnFStr8z69zgHitAaq3v2",
  "key20": "4s1uN3aRWq2spBcGGBZhfxDMB3wgDfGPehdrUPHaRaNsKSjZtJDibLw1HPNsHF2NwVe9K4qmf1uMHmwn3EgG6cSa",
  "key21": "3rBuxG1DASLGCdWSokvfkEvsBsyrxHDxz2ewAzVFSN2BCZvT8io6GaNDi1YkiMsuY8zwLecezkmEM4nDdmZHk9vM",
  "key22": "5SdW3DCg2n2h8CK2TCpoXF5ADjvQzdFrez51BS6qsvrAtLL8cUoBi9CcsDsFhsJdiia8Td4RthbCMJhyTeC98bLD",
  "key23": "2t7cCGADKjkerSSmd6Pf7ftNZ9JuGVzKR6n4GfWqXVaQComCxxBY3p5ifPoevFckoFP4QsMigpQdyW8EhU2sQxap",
  "key24": "3bLiEzcu7hZdJu5RJmYTh77HkwuQnYiqxGnSnmYGEWkptkopFHMY8USvW5zjP8QYUxpBEctYK8C57ZMSD9UGzTvc",
  "key25": "4YMQv4YWAArDixA7wDe1iR7c4rWYWdFVosKoEqohkeuPHtU3n9VUYhEitnVas1rH9TUT2MJRmsThyCw9C1jWv8eW",
  "key26": "2NTGa4VYkeiCL9vf7FgFuMjQwGur7NJTV1246wgE2h1G5v9aFQShGjgqYM6d8HjrNbUPnoeoL9UYvhWHetnNztCS",
  "key27": "2pcG9s2YCoiazjXPz8abDSNp8MyTqrxtUdHKndeLagYFhee6eujm71bpHpUM3VbmtD7Gfj1LdNKyEWyrNMGrtuFf",
  "key28": "2535cLYcTLeVaUCBsWoYL68sgUYToSYRjCPkQNyGXkqUVvRyyj1asQdfFZgopKnNHFCGSx6bWK5ZHKsMe8rYr6bH",
  "key29": "5Q7GhmhJ5scKfx6HMpEgzwdNb59bQWyEKu4V1fzvrqFQMJkDLi9LGy2RTWZEnu4cmiY9KgkBXPttVNNxZtSFFE3p",
  "key30": "Snr2ZQAjtRMwdM92cmhrh3XByhsQANiHEjUUQCtkcfeah8VWVTKFuQbboBgiX2tKfPRAVwHm1j6A7sWq9N1fVHh",
  "key31": "3sZNqXKaUNUbDNaGwvCeABjXFNsatc92MFYSUyCYqotoTeKVGnjUCq5Qmj6E9XNhTLLrx25XTheTbRtCK2hFCCkE",
  "key32": "mrExQADKCkJf8seVeFzYUWmwHLJga96ALknhQAdj3jToBmoip4kFKJHhopm7rVwNozS674VSws627hpgDk7JD8j",
  "key33": "27qCyQE9JcMbVMJf6EfBsMsc7CzvvhapFqJLNMwhMrFzd75tpjUPG6oDxtkGbRvNSABtWxvEdoyk5vEahiDH73c8",
  "key34": "2zmAr38xXCazzuzXeNSUv52duE9s3BGjBnJK8EisTaEZP1jpKj4qcZpUdxYgfNPVgDsuGHggRuScpugpnDw2aQh3",
  "key35": "3Yb1VHwBjqs4q6jnnkw2GjSQKAekMLHBpE9JKYSeAyJdG9oKwakz5Ut9781bXuVUtNCKC1XFtY865wdtWFy8CLwf",
  "key36": "2XyP6RicTQSKzo2Q15VvNd5KAThsRtZe8hPs4u4ggXS2ufKYuTta3nw1TaZVFZW4U4nA6SjEYguPHMSJjbT1t2zf",
  "key37": "3aF29ki22sYraV5Fip8VWa4yjFcahp7ftQeiZc5Q6PSXcGcQXAo98tU7W9qAHixzesSM9P1cQHUjkq237XFGv46e",
  "key38": "2gPM5CbpCV5fkyvsimGdG55mpksokokLJWE6EqB5LtM3jp8SRm6pdENEMNmLAQdsDLxvZU9Y4E1P3ESfF7GTj3Aw"
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
