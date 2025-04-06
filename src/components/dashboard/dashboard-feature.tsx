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
    "2BYZ2xrsEBqrijph4fCpqzDXDXx5h93BZCgzwfhvhB86dvPnB7Jmat86oYU6cCHXTiJrpVstv9WnJoJrrL55vXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "12zRTGwHruHqJxZNUmx2avFLJ5uMfR6xFT3EHvqv2CFp4x2Q67m1xdXq9vB5KK9n28nFN4BKB26y8hKZbTd2tuC",
  "key1": "a4QwYMnM4YvW5rZA2gykSvmdaSTWAzMEkgZVMGknkbUHGvUsL1dG7eBQWqjDgvLhgTSYX1NeJhWwAQMNtJVQrpi",
  "key2": "54R8pMQYqKbWXVbV2onjHk2UAQRYw1y9Wr2nuD6JMzyaSPtYzosvzPayLMngMuG9nhZdnXiv4RW3xhT1UKmdaNHK",
  "key3": "34scVXQCHToC7NnYKdE6ZhTQrAWBssVAhsjc726FaXPVi5noK2Tz6g7toTfMfydKzyJ4sQ18hATnUQh1Q3U22byP",
  "key4": "5pWRXJTGwAepo4tCnPruzU7b4tPopgmtH976b2gtSBEqoVijejnyA8QLWDp4Ad8rSxboejiUqiZf89BpUGpYE4Aj",
  "key5": "e2ZcZzGNL69fGu9w647zTVVfds5CgELAQY1UVMJd7GFg38iEzQdZFyVEpnpcHWh124Rx7C3JBdCtX6eGjDVR5aY",
  "key6": "5f82kUC23g9THVwXkayryTHDmxsQYqQ9dHyv5Xf1WK2M9C1uCZxgHPnKwb72PBr8Tgwooxh2ezzJukbqYVaoQnqZ",
  "key7": "614Py6U1dHUU9Rsek2ssrdpUaGv2Dk6hafLHnZYeAdLGZWezN3d1HvgubwgJVyenmSdYZwTMf9PLUL3NkdHJkGZh",
  "key8": "2WTht2sgCkCJANb9Xr6XV46LhSd69N7LDLx9qmD1w91h7hmZGmqAHcDBx73DArruuoL8qQq2qSgSpYGFyYiQBQZS",
  "key9": "43yrPK9z4bWQEYZDZWVrk3ji52P9jMpG7yXP7H9VDVhULy9jj3MWMrGcmJL9Nuvm7PzH4vvPpp9LTn27cegXtGTv",
  "key10": "vPycBXyQd7ip1eN1FeHERJrMVAXFkEHdAsng9pPbZ5GAVAMWzgijRexHuTuDBJqF5iuRQtWVWR7uG9khmt6281c",
  "key11": "CsqtoUnNJqZ5uwSrX4wLTAD8qgQmTdPXxbJQVqwVLbhoDXZvVtAd1usaXyQ8LyuvcTN9wffxi1khxAdvHs2jNkK",
  "key12": "4qXnZQLffcntzPjNXZFBWXpiQM9m5JdHkjngrzPosEhr2Ac95dp1XACpE8Dm7Rifrxnqkm5tqMWswJWQ4mrDvsFk",
  "key13": "4ffWQhKvM9Yu1K4F3xQ6SkM6ETRBvbgtJB29WRT2U14ecyafcsLZaYBztTFqh4zADpb7k9dSKfpEUQ9wrE2LGaBK",
  "key14": "29CvRVoJZhSyZYBK5XBEMuNCi5oG9b6bTnRSnc5kUXqaZcKdbxiyFZLoV7jG97ZUhMWD1XUx7ZNJStJLEEqAx2Z9",
  "key15": "4RbaWgsnGVhKFrSDiyCXvbAbN3BPnLsyBjoADbQXZxJRp9whLTgYcbPiTcDuXEeFPmhkbd7QGUJLrdCeJbp4Fctt",
  "key16": "4ryr6Z878mg1okC6y5FsSFKx9He4wFLF8ubm19GwE7z77qvpweF7WLsRNbUXWN8Vic1mGbBgpnCD3aVLjVVsuTFo",
  "key17": "5YeACd1JFhLF6yWVTw4Tgm4wJ9uKuXE8MLsG9odqXRZFibsnTsf1oJzsbrqMgEpgeMKrTwzYFsuGykyv3x8TWjtf",
  "key18": "GhuL6bMrJmLFUqLPuSku4u5mqp9VB1Z5aGLnhqkMiNdyKL7KBpcf6bzC483K8ZcfN5ok7putURz6aiCBRMnGPL5",
  "key19": "4q5DxnHB5zumkWTMsqEmaBwNmdWJXUHgUpeDkjFBNCwXYCogfn1Uw2JKgzf5tCFGZWRsc12htUs7cLEpv4D35Ub1",
  "key20": "27fKu7T6XLChLMkodV7Rhpg1Kn8F4GEyngNvg2VbTNNEXY9xth5w2k9AxP1qioGgn6xHvKwyRkpMzhQ8qw1ALee6",
  "key21": "5H3SoZcjt51ujBYa3prQ44bjmbWuruqUMWwXNSvtS7CgMgeMdsx4WCrcjpy2jVD1938CW8yHo5EkWp6DccRXJNbs",
  "key22": "5JdMMrAVUhTnaE9SEfEb8hDvxhB5WEJApdfT6T4iCHewCgAVA5oPeDLi8NzBuyzmFNspZL7AFnmLQ3aXvuGDK8HP",
  "key23": "5K1de3MeVbQDiqcpJ4Hiy8sXRDBWKhBS6njVqh2pFDZB9UJ3AB65t44MYe2hTzcaQmGJdqLBvGfWx27sZ6y52mML",
  "key24": "4oGWZfsVqCcgSUFB5HSfMNoYpkcs6k8Z2A1Kvg2CBH3uP8rwf7CUyMrpNzkXGP2Fm1haeXWSGTPar6owiQ13a4Qm",
  "key25": "3NUQQfwf3r1qq7GFq4XdN43yxGodJG3MPFkRJa3vKxaeqfXDNNoMDLGximsmMX8Th4FzDjmH4zUTTstZJURusrei",
  "key26": "2kH4BEExxoQoU6gLp4WWwaqeMP3yyRD9MeGWPmvL8gZRACfsVV1186BzBSGVoXnKvufjG2dLa77ovcpQ33zWgAFe",
  "key27": "mtYr7j2HTfEy4DoSeVyJE7JS74buQZ34e2yLSwiP2qQjnzHPVZ1twVJRXPMq6Qmd59331cofjF25oRowMNaoBLa",
  "key28": "4sB5KjxefETAustS8n5auig4dvsfp23S9WMNQjctA84wCKpETXk5FJQgmEQcAG1q1Ltgxnn3V3HcDjmo2bbSNGee",
  "key29": "5J3Anw6c6xJo2xAKcmQ7ySW65QfKURNgkpsLjN4fyo6nHGERajdQm2uKrCtVeUZXAukgXkSEpfuyzVpiiE3KJtDG",
  "key30": "3nGxD572K6yqzMcME8Z4mbaEh4L2Ry8jyCXtstpDHaWxji6rra2uSvc6HJX8bHVdnCQ3awLcYv1Te92CahqN1j8T",
  "key31": "EBx5qdSo9SkuLbrcJkqkbuzPj7uSDxASqFQRR1e1QZbKd9fhzdyCRVrPfGKsJi6S2aLkUJwjaWBqBHk2uHyCQdS",
  "key32": "5b6g7LhxLd6tb2VLaVDWLPqAjLpG5d9AA5PbBCkchea51KYWKrKLg4Xn449YCRpk8z2a37aGbNfNh5PDPBNjNarn",
  "key33": "TCBnpBGNMDPN1UWHF1aunKcec7FbubYsePC3rq8JXk51rw9M8rwPbCtVAXA49yjNCuT3hCWRCaWSggmGpXnF8R6",
  "key34": "23gYJ1GsWHmVqj4DFpKbNBdRAuaDH6mNzTELzJCxaTijUKE5GaQeRaPQMHdBjmVhKXtwakbNY4G8dRuVfVoUZpV9",
  "key35": "2ycVWNc23q43LD8kvLdDnYBKqY1MzXtyE7BC5v5iZkzU8vRmyDGRU2K99MAnUfXGbYRXoG6aV5BSfgpwr3TyU4dG",
  "key36": "kFgsoDqK82qB2ZzSVuM2jkrN2TfZkSdXBZAP3i1bQUaFdeniigfzZ9ybzX7Ca6k8x97R1dG4z1UtMXrXcEi7Tka",
  "key37": "HfJU1knNxdux6dnzGQLhGHNBBhq72xvPyDsaCiePgehu6qbxVuW7wpjxQr5wX3BuBFWNkRanCJsbXMrNBqNhcPz",
  "key38": "5gBCEFqVuxRNsV2UUSKnmd1FZe7SbYfjw9SGJ5Uhx2wYPnoXyWRqUYzKAa7cVYrZfWT6xLz8GDmaQwqNHe4Muyti",
  "key39": "5D948VN8tXps87HCM4BvqjV4KvEuFYg6zhjH4Vhg6inZhsDZq2wZJhRifSYhoU1KJP1zLZEaJV8JBBtF5kcPM8n",
  "key40": "5djFkT2LYMDwBTKgSnAJRhc7gD6fMzXHajiFaxFWti6iWZPPGC721F9htuLiAyVZtxyt4nU5fpvpExRULP8gAu2M",
  "key41": "39riLwyiDiFtik72tRNVFgMkzM9tqgj1ayUSWApJEqg1QiMFbcRFTAjuLZcKm7sUFAzuBDeQBpU2xc3kXLA1B9Fb",
  "key42": "3TWS9EwTCp4QCEG48xK1HVtbfdrAXx1nyd9sM4LbMNPCfDJ24R47DnyubunURBi1tJMBCwhBecjtZSnCUvNi1Lw4",
  "key43": "3Ye7WqEvzV9uLd1jsNb2srtJjQFQLDTS7kcNNeg3M75Ctyme5PDoyWVnezBi1ph6CoY1fZZgad4kxBoFsT7T91Sf",
  "key44": "2rPxZ1GXoBnLd1Wj6CKLFUwKghvrfhup8m5q3U1pvyCUdp3uxH1kCdjmv9nfLrninwZwG5Jc7vG4eP3wwAkRE3DR",
  "key45": "4oSqWPggkKdsHQDZSkaWwqBrchWqrHjuKbaNy1MciGevTxA6qWrWHwwsELNeXGeWf77XJ35BoEjeoet4yQJL6spx",
  "key46": "3ARVLtsskG4BeAwXi5RF4xwRVz4zTmWwW9UGhiSmnqkfdaHrTMZfKXpr9C2a4fYZ8jDWNAp3haHUaHNKeH6HDNn1",
  "key47": "3HA5CYbHunSAMc9ddtzRKHa6DH6Q7pA65Cd8QCg4F9Zb9eLkNXYK22E5ZQuufeqrH5LXPSL4c2GvkonqWNqjbmNT",
  "key48": "2xKy8FNjGATNgEQvwWWFW2umXWcGYXvcsxDM3vzy9dzaPCNi6zNfrkvWqRcMzbyPautMrxQdR3FJtWUDkV2yxwVC",
  "key49": "536VEkR5aTAGGpTjULU21nSzAVy6bCJu5S7R7HyBZjdkqBWVHTtqnjKwCHqmkY9pytczJer965CKifmA1RHi79Pb"
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
