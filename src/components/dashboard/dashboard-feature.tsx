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
    "3g5KKswYbCE1HG4JbzbgTzbJ6J7uwFztbd2j51CGHBsTm5KSTcSV6aih9VkvdX714KR4CZGnqb6L8WSweVRQtgYL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Sb9jfUArceZ6TKvZib9taqbBWJv8bV7yZhr54MEXGQJq2BVu8zyemkUmhMdu7ApHgANEco6okaJFrpjdEKC3Ck9",
  "key1": "3Yv7YvyCoWXf4FBFL2ft6zRueu8eoJtMD8GGiULJneUWhc9DekUZ4A2j7Mhsns9xnGCE55K6AGmpHBZrj61doU5d",
  "key2": "2MAdvdAyVLMkpg4ZsCdrN84uaQBEfd73JXEJGwJULW326wgQ4CjLStz3dKYcNrk7nsqB4b5AfmMTqyaCAd18mBjT",
  "key3": "54G4U4ja98L39pU84vZXRK7kKFem8nuew7hiYKeUfwN98QMubB52qnY4F46uZqRcA6iRmEXucLiLMWJmAKHzPtCT",
  "key4": "EEw1brEWhuDF9iM76HPfKy3zGCprs2GUKtRtep3q3EmF614gxEiEjxUduz7q3zEic7sChcoyHzZAYqbqo6Bnptt",
  "key5": "2anEejZhcoHAGqEGeceePTXEuXm6HzbjHu2MHAwTic1yeUZWtrBCT9N5tQ1niF9EA3c8HTakxo7W9Ug1kVGBQNXL",
  "key6": "2wDVLtdBRyiWQYYPy25YJA2SbSvwzytDmXFW5zG5ZW9cfAWP86yYJWVGzLxsVAR63s7EHhPaQbf3h8bLXLMzzkCX",
  "key7": "4yoqzYCZdo1WTn1eGXmrnUUbmLTLRorYVMgLns2YGvHn61oREdEahVpR6vMqnGEkGAiNCGJ7Wvb6R2DKcCdPjSDk",
  "key8": "4T6amSzusHuZSXKtMZsPQshLHQqZMzmcN6i9wpeHprPXVvQBtZdYA2977ZfrV5Gg9zz2wUKviyJijreb9hxS8Duu",
  "key9": "5KuHyrrx2LzBNwch8xF6vGFrze7PvZKHH4mvA6q3vPwh4jDWyoEGVqEVJMcyPyg5VtNsvqb8kA6TMPXUTi2LAUua",
  "key10": "5sYT4angkeYBzBR3hneEbfFwjtk5HhSkfbAHwo23onYNqcyi7hzuUmkS4z2vpfDL8UCq9EKoiLMKdVoym5Xi2k5e",
  "key11": "5YvNyKS6nmX6vXoqWAZVJinfwUQH9wj7ACa3t14BZM88JyGWGzQQYdxULyWV4YQfY9BgMEwAqP6CyFmzzSgx8QhT",
  "key12": "4QZ4FQLnzSoYyr1uZc3vSKidBNDf1Jt6wr8f3MgWoAkne4k3jxQ646ubeHQgME8NBhGtBPUwC4EQNcy12Wvndi5F",
  "key13": "2YTo8ZucCKQzNe3omhYpXuvK7nwhfeNyB24VcjQPJpHEejojXtyur9P6nZa69ceF1BVcBKBEKQmDxj6juPQFEAR7",
  "key14": "4DWgL47Kh2izy7iMUksMKPjsjiF2Vp7hZgR25Jdd132hQNqtwwbhEazvYtbnhkSLtAB4mz3Tom1QzUTe26B1ew3r",
  "key15": "3SXfcNvJKid8GX29p1rfrjeYT2u4anqVPAKf8LrmYyz27qjCVrZS6iNN4yBR3PXiLePE98mJsFLk38G149cxF1eq",
  "key16": "3LUzUXrYryAaMUUdwxCf54cKpg9A8iHXZ8KMHeXKiqztN6szEXshviQM7SoLHWCw4QCAQAfdD5moryjdVibKeiWa",
  "key17": "2ti6xw49TD6vJswnsacCBcK4zWvhasGnUD8jZRHP6S2cefayLwPD5kAp97fqL9Mx7zyn5V5idFeFTAvn3k4kPujP",
  "key18": "S75tRYJkULqVrVUfkHt7rKvEitV6vMcKYn5D62w2nFYkga1BTZiAQB4bMAeAMuyx7CUbTp8nwQ1ZpvTzbehtKdc",
  "key19": "5wzcf3JWeabHP3acjtXnVZGVjyzFd8HxG5V3vzAvfkqwTXjT8nFCzEXMCRFWvu2HmpGdx9d2v5LA3oZZhHaah7Fz",
  "key20": "3Sx4UK6U4YuCzRttMzK8bH8h9b7XJZgiGE6A6Yfn6v12EaAdwr8GRGnEgqDo3MPpAaGqLxfGbwtqHFS4FGoNwKn2",
  "key21": "4WRQGtXs2AaTfVUsCoipGKBeTdFCFahyRAFcrCnPTZmjuw2jpEZaUmT7KjVNuPdQCC5ezeX3urqM8GwbG5LfzovQ",
  "key22": "32zMLn9etagoLwfLZHnh6GHPKSTCZAojUyAABurBZWN1zBBHdMDyQXSttNPeQPQsG5VS6Gj2LVkZZbGtXxfbxNBY",
  "key23": "5NaaJppqT2QGKrxnvuNiMsqVX8nq9svgGqkSuUncqyhSi49Gqtr7D5YQhZgEXMUNfSPj2hkMyherfZUC4MZXS4F1",
  "key24": "49yc3y1s1sVsBCDuxd73eNtUFVaLL64tnZQuWxzcnn4odHj3spPMogtgk9w3UvYzLksRLnRcZZFGXg6t7rnGkaGV",
  "key25": "3tjiG3PSwG9hHQtKdYA72JnbUmKHsjbg3kqgaDayHD9puiT7WQwCeStm6mmRaTr5zYcSWrtDgLhoEBd29kNdxj9Q",
  "key26": "5iCXGh737VDA2Dv3ohrZrwCJEPyTveSjnCD2oLwJN19tXnXd8fmfLtERTeDKqHkdKpvuqDRfMSkFLPrZoWfP2fjS",
  "key27": "65SyhSeRjSM8YhFVMNX5pZafvypqj5niDCGKfcmj1uHRLKYKH1fPkuAWbLYSffc7z1USU9YPZsifpShGKAe2oNtg",
  "key28": "8qQtWZMCCV3v7HQTGAfrH3opWGzaweXmTTHisqxNCQPTbWbb9a72hhjK5RcniWBoo6hqwxkmUdk5QZiTTW6WmwM",
  "key29": "2fdB16yRXcLt3Nih8AbN23qofxbQb2J5i6hXmfsNSAw9ecLNgE38NWtioeqNAt1ZdqqsaYr3K9u6zyy9WMx8b5jp",
  "key30": "51jZcdSxS1UkYAB34VGfMfUbRs3oVd87YPdTX8WERnJzex4ytmBpSuQLtzsradrZfqSMr5wZVkejRPsLBJh5qgs1",
  "key31": "4HcgigLUZ5MRcs3Sep35Wcugpq5D16aFefvpDVWK2LTRcDF1S6g9fuircRa3DUyVtX5CzREF6teRoq61vK9SzxwQ",
  "key32": "KDf9yzuocJZKBbEFX8seGUvbLb2wTBAwhmuAovW67VhxuU9RGvcrzomAyis865YZUycm1Ts3aLgjxNyXggW7RCm",
  "key33": "Lkrn19Bgi6eniS3iAv3VZoSDpCMstYUWbKpX26svH8wKfE1sTWRkGUM6sftSHCFnWRDAJXsBthVEtx7MuYZnZ9t",
  "key34": "3895YZzwmyVp4e1JV1qY5f9YCRzsTFzCB1Ykhi8XzEDWkPwuVrXjAR6gzy4QUqyyCkppXQt3GMQvVYdVHJQXfV3F",
  "key35": "4i1bXF7qPsnBYeTPDJRWrcjDNZpcWoVGyuRHmDNsRo9kDksUZqyaNSPiYpBgqHLkQgukkvsN1tDSsq7myhZ9nJNB",
  "key36": "2LGCioRPpggqYrDeZsP1eg8iUmSk6KP9akZ1a9QjwfC5ZYsk3WehTtNm5YsQeZk2h5sfTVw6hVGGhQ2De3ZVHMkA",
  "key37": "2p9jsNXdV4r523un1tu9nfz8N1SoMAeAZsLbQRRS12ZtXsXSdwkpktcEA9YRdjsHf7wv9svw3KR24uCQ6cgqJrYL",
  "key38": "4UbDUQ8JUBq1bKMLnB2wn3UoSEoGZygoicgnMikBrai5uCtBpJeX4t9hPAPjX9xz9hJgMDqUWAYpRFMLzcqYQGW5",
  "key39": "3fRBb9jKBEymFZ6RoMHnTbobX9oCU9iZBnQxDXNxtoE4Bt8aZde9RqBj5WM5qn2umVLZuG5nytLzqxrcRJPSu9D5",
  "key40": "5E19uJnXK95nqWkzkQPq5hzeamwPXwrvNzvRFMTSpkU89UJHJN3nQFocxgxGpVzdDpdbTVZ4QVxyLux9EKXov1mN"
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
