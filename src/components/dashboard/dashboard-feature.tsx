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
    "4wU7PHXmPdW1VzM1gEtE69uqERrUshZxBFMfycPDoBmedgVDich1QxtzS6WeXCatMyrAVtGqzQQpum68sY6BZa92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45UPsX3EC7HKBhYCcnWKY8qJG9stCyRH8w8ypiNuvG64s4jyLr9UH1BVqvW8JidayoW8CEjo8e4YLQmHHvCYNtbH",
  "key1": "AKi6nNCFXoiSMXovT4nLDjmWV8daNY67A3uAbVLcMEb7YzTZDBXc5RNznXq38B65y4fVSbZUYnzqnrafQsmVXpY",
  "key2": "4HPRU5ugcsmw9MEekhQXgscC4LE7oGNAJNdYxbLA6EoWtBiUVTmjEdxzwXSQ585b157jmas35g1doJmVMXdE7baB",
  "key3": "32enTsm1r77qLuchZfii2NMhv2U8AA4kFPan9jtb2hi4GGWJQArjRmmaMtM7Yyn1mVzYP4BzzNaGmXQ6HWY8kWXt",
  "key4": "4UeWHdaxXdWPgnwcFccprqVC64n8thcwevFURtALMdWMgysuAAKGpwUQxJUkDZ1ZqGn8VyfHJbwDpnKVrCkNYXyQ",
  "key5": "5mLbDyUBnPjJAH5CfrXdJvJeh48QKCN6VMn7VM51iLNf9mnjcCggrjY6v7AmCFifwqd7EUarZj6Q8urpRLzBCb54",
  "key6": "2SpVKQ6bvwoE5rGkSRURFbdiUKGfsekX8hodQgyzYYSehMbUPAUmJj1xQUhmobZQk8e4ZNATGnmR1GduVagcRkSp",
  "key7": "D2EbDQEcNScFTVCvjuyAaYHwGALMp5jUnpNAt5ZTrnKRfw6tDENiFgo4wrDamm1QbjcpHZBhHnewqW6qJRFTW77",
  "key8": "5eiudosgAvWwZCFiRRyE7S6tM6BWeDCTs8T7Zi3yBYSK2pVybUPwnCVyRQLWUedUBCkAosW2sfkG1UdVc8D52tHL",
  "key9": "L8S2ESMUrgTcMCKAhikWnyTmo46xeMp18eZARjK3YF5uxm6x5Hc41Qek8Wk7aVETTAw2rZScsvrVKP9xyZZwgT4",
  "key10": "KVUh3pe1GWPtrYxMjbXULVzefVWyC6GJcnoc6CkQnTkL8dNyvsPCLbLJYU8PwAjTpw4HunBkA46LfgeFmh4Fn6U",
  "key11": "2k2zARgeSLFm1kYaCM554zDhqHKAx3kvRA5oNhfXjuineCmmyYMoQJgnXNKtVJ8zK8bq968Hq1deVjCtCsXWXrCK",
  "key12": "428JMhTCL9bea7p1EoAzqx46ubr2tGBkhH5dPWXKFJcxUf9FFCJXGtuVuAB7JSzDhSbmJK8R8wi5Stk9QXMeQVia",
  "key13": "C5EQiRuti6BcCj98WWRx58VWJ1HLurce29LTpp9YxaZ9DqQGs15iFQ84HaA967dMJKNQwqkU3qxPu6z9RhJ4349",
  "key14": "56VQeAgATtKaGwMghKT3ycs9KZXMWuDZqj9aRy6swPm5mJ2WVWCZP9vuBJnpM4zDWFqoLvfGqQkwg3EnZJ6UD563",
  "key15": "5LxgFqyCNApFvYHUgrD5X9XLSEqiACUk5u3BPn7iz4GP9ckHvniragYCEqFVWsQTFCnaHuW4nQKKsF6vaGZWGbVF",
  "key16": "2yE5nKB2GdN8Qo5AyC2GJCvP9nxqhLkN7W2VPyLCY5eB89xqaZoAnY9fZmqYEWgfSf4htqRrkDJDM4deXdXdCYrS",
  "key17": "4oiGihLroC5oMHKdRTD2Tr5jZDFh3FZ6Pqnk4wEsuxHTTimTT7nAfFiTVeUwk4QeMzgJN4eEmTjuGbAjbggCRSEB",
  "key18": "4w7YuuBXCvjqkqPmarWTnZ5NMpHd5a4eeycj3pAWGN1PZWi4sPdxTHD29KiaJr5ez5Eh3ZEmNWvp2UQqibHnZ3ry",
  "key19": "39y4L5L8j5M2CatYVyay4erxkVuTA4baQ8BgRTZcmA35SNXbx8zHZLfW2Maz4xfDacygSQN9FbzedoiyMzMqtXMG",
  "key20": "3mMAH7QiaScc97NgUfabuF5jmqvQixaWthAP9fWqdvLeaKjfDDGxQZNpE2vBpkkhzJrsMydwQ1WbiAVUKVQZiegf",
  "key21": "5PaTBd7pJvTDUKaHgL7JGhCdgZNWjRuHpJA3gUsfSfLTq39A5jLhBFmMLDALKLwXbcArLzjS5con9E9MNQ5z7ZS3",
  "key22": "5Ty3G9rC6Y86V5SfTfiCFTxjMd4Gxq7th1QtAtPTN7sun4hEwQDAwobrMVhrFUBZNEC6SzVYhSR7pB5RmaAKxTeS",
  "key23": "4q5m38zkHooAdWhDgPzd4VWCq55G6Uu8Y5cjmE7zFBK18xRYvoEJnUAzEXS1B9qNCktrjXnU3PMgiEC6gzdbGEPX",
  "key24": "2uBVqFJqk6G3XYFZs3mnwgaVLyJauSkmW346MvmpqLxAeaWR2EgnHph3KiEVZj8G3a155trsvgZ2U38sctj9GVky",
  "key25": "3htrgjDEzjcasG1a3fRnrf2ZHwjEjX2FEBvVonRftFndpge8AS4RFtVRQNYgmYJFngAXLC2urnFsxkqwqZLZpTCz",
  "key26": "4Tmat7HVrHxFTx2rFDhbb63v1HjeuzsLegZ5titpS6s1DnmDzjuNJEK2337heBnsGPahaMiAYSFYxgc2m1H7QyEy",
  "key27": "4vhSDjeP34B1B3aFS48DwrQMSJpj64G5ec5EWv9fhn2f8PFWSYmb9wUZ4ZmCfSLbFMkugJN41uCCj5piCugoAffW",
  "key28": "2JfzKyRaVNPa72YZbaAQKC7ALpmj6aV5n7pFmTriusNYyxGJQ5VafPGQ8smRX3XrJ2p4K7U55kXQx4VTd4bfdF8g",
  "key29": "52zcDXMtZ7dUPkorVJwFezYsq5B7KzsMjxbo7dQ3ZVuZSiGMVo7Uw1kmtjsqhdtCKxKGFj2uK5yZ3Gjd4LskW1jZ",
  "key30": "4zGb62cUnCRHUjpmHNqcB7qSCg9th3JKLdBZxhuDn4U6gpjnGtiak54v6yL6oVzCMdhvTaqEhRApdcJVD1GeQdXK",
  "key31": "4F7J8JAMfgp3XwZmSfMwG39MRBHQzZj6zG6SXA6RBFpGf13PDB2StZ2ht76HsiMJT6kKg2jJgWQP6mpXrW3StQyK",
  "key32": "2x7SsDANDrYP2HCwbEskfoxbwpwm28Hg93ome1sa64mAGGJ1Qdw6zc8iexpnzNAH52ZkWfpniS7iXqzpn7ueLgfd",
  "key33": "o2pPoU42ppKpXCSDw3Sj983HyMZDz4n55MCdNXfwHnv5CAoQvrribAVNnv7Dg7hvDbCw51V1K9cVy8sv6XeY6AZ",
  "key34": "3htCKnSmDvmrtKVd4b63uwHJUUqTVXVWuXBhcCti5Qc9W5P6JfphvECm3vWzNnmQUcBrTZrZd7yJ8bm27U9vzGr8",
  "key35": "4LjUMFwpNGLGEUtq879WQS84BMRwKVYyjp7qnqZCCvmriP2Tb62yspD2f4DmDStGKKaR7MtYvz228qM2AnCqkFrK",
  "key36": "46SbLMiTf6isfFFREWhUH654RKKpkkpGkNwZjomqdf7SP3gTErNg92LnnvoFZj1afEMc1VGSsPyiVdNVkHQnWgmS",
  "key37": "7j7rdovs1HMMBo8J754fjw6fzoSNEanTNepEktN6trjpyR8LEqS2rHJFfz23ndUKGR2qwsBy57KKH65fNbixScJ",
  "key38": "63osax7crp7uHrW53P6o8RQ7FkD9UXSueiC3PdfLUS9LrsoC9q3TtRtZ7RcfytdnMXEepLjaaPMLzgCzorVnMhXX",
  "key39": "2Cr4unHKViPoHTjxziLFjTgbBQwjmeyycUNBWb7WjYLNdUJUu8JbHBaKcu9LDmHdSCzvojWCz9g1zG1zCt1hc3eG",
  "key40": "3K2kXKff56RZoH4Sh7MYeTC3BALkDXKKurfE3nkrdV984enTWXqe6vx4MJKo1PMYXBG7hXDE8jsXRBC79kxfLRPf",
  "key41": "3REmDJoqERK3A1e7zR3cJQDcHp6EB1VjqBSmUnCAoz9wAt1v1scoYngkVfBYYLWjPbkwEM5FjXVKfahFqxaivFt1",
  "key42": "3dtXb3bp665fUtXfTR3r5KAFZjgGAW8CfEc8SnSt8V4mDvrR5ejxoVrPtqNVRKY1RNqYfeMjvQJpDR81stGQQf7D",
  "key43": "xNaqZV38xcY3wrgiixSUVAhS43uy1L9yjiJnHiAJmxXj9yJxzXaDtnq6vDo4sP8735wbnvNrzyqYtbFeNTdkBd3",
  "key44": "4YkTU6ur8RwKGMGHKvMxnYXG5DaW8oUXWEoFxZjtoXEB8CYDzv3H76kqrGQh5pD7WhfV6XinddLxaRhQwnFZio9p",
  "key45": "3RWH5aazUKrFBxCQtcHyXVjPeurNoCS6DT97pcrbx4jFn1Jpjosc47aLCnEDbbCg3ePCN27YXSvYsdzdTy9aJxha"
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
