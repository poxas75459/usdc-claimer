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
    "3xyj2cJFL9TfUCZBgigqptYvWSG9wBSwyWYDFFBzRszgSXfGm6YwhTuaXRw8i416StNbTebjgcVH4mAjJAUYTLy5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x66UPbHwpyJZTyzYpZPXuu4KaZvJnMWFbKFS7yag7FgyCzb3x2B59gCSgzdaKmVybPCWWu9qEZjVPWLT4PYzvdk",
  "key1": "2vcpNCeULZNiPtEoEc1s2k4WpFwmKLerPfsCnewpHik86rbDYhTyPRcxjLCyNQqo2bdxze68iazxMo2mFsSPK8HM",
  "key2": "4RaiCVRYRxjqrP5k6aMQoYbM5FG7vdNosVasyRBZ5jLubVKZ9L6QgZj1xBK7DSWxgcaFfcPsCPAqD9rZN5Y9wLXk",
  "key3": "5ZhQ594g7SuhqCcNuwkwQ4mS4SiBn4MuQgvktn3CEinCrSs4VdMjyVe1qcuYLSwve3aM5t36Y3MLBwJ9sWkWrfzB",
  "key4": "j6DeXM5psN2emdbrqpMK1ihDLKgqDRzRSSiwzf9H6u4CAGJYjEhzyJvNhDt8BV1mfXAcC7iHX6RQYjwn7uKihbh",
  "key5": "3KbNN9eXKzdeRSYQT1a4wQd1B2ijacww6xYMHY97iYYPUs7tSK6oMikNRRuEa878RUNBDvroiUkS67Z169wrQW57",
  "key6": "vdntcK75wyeHuyrFiyD1YeteRsA9QQz6kqAxarcuQ29Qa3eE4BQuEpT6XRUGnn2ZXwQVuF7JDK9pBEkj9CSfiEP",
  "key7": "2qt7j3bXZn2xhdhSxJX3NzWzo7inDGKQmZPiXQQE4d1ZgwgQdG1uGL4qjRNWsFS6vpT11CFCK7rPTMosj9pDZ7th",
  "key8": "627NBpyMP5gzJUBtZ2jaDFdDhtdvJVnVEfT6b32rvnLzFzQ6HsrDhjZru2Kb6pH7QqZoiaTTGVDNu8HA6WdKvPSD",
  "key9": "5FeD4xBTCNWH1g1wwHYTiZZDb6c5ff8jggX92PwWHzEdG8zeWesZXctq3UFaDFx8J9svg2yLRB7RGhbZq57TrCFE",
  "key10": "5stu4bRRuKvAT7U2GqsKpePipwwtiWTdX1R41uzeUpqta4cuNn5JHoMgHkNjGzEx92QRxJK9mecXiSe9nHPgiiMH",
  "key11": "47VbAUQAgPKvzKLFcNU61yxWbv5M5MT46XPCDxtmq8nUUc9A4U7mJXZP8cXtFmTAyv75tmuDg7JE3ZUVwrbgUxWv",
  "key12": "5tL4EPhLexKwDJe8DfMQvcqj38qkAkQxPKUdQScVG97HyANCyMKNV5YFsLZ5ANt14jF7DaxSZHmMxhsKdxL1XyjZ",
  "key13": "65oxXaApvXALxdiYSJ5YttREEhu2KPrTveusnCHePiUdsUbzs38cXuFmJdhi5a5QQQ9FddwYZ2v2qLeQwsBiQv2i",
  "key14": "2bgVmFs2U8y8FNQ91UF6eDcPvBchbGBTzezwgFL2NU9j3N3Ag6uJE1CKbYkyadMaYojS5wbiV8yd8otRfV8oLnvG",
  "key15": "kK2PPQwCqJzNHLhMkpUSCTknkjoEMZ6k2U5VBCDEioSza6D3QtrbHVk8rNZKZfGDyF2di5PJVGaXkgDgdME4Yxk",
  "key16": "2XfMZDkGhUd8a51ewDgdNRLKY68nR1QC16dvvWkeFD6efqJW3W3zwghKVYZCyEtVwafyMxF4hHk5Pm17AfD9XXfo",
  "key17": "225bj8Wu3zWG1wTWTDfLzDVBobUoVQsDCHE59TCtxhQ8JnBdgEV7vdbbnj95D6JcK3H2YFv8eqaT3JRukP8UeyLJ",
  "key18": "2MCqUwqK5ProRSTE6yML2D39UF4kaCzTMGqGQp6SfovZd69SUjJD3sHX4SiSUrhZ2bsik7UMjwwoRg19EvSm6dAT",
  "key19": "395c8rKgVGfhw5KnEVJrLauLzqES329bTgJ7G9nBRTDzPiaA4pkDEpmBeXJL9P57Kzg66Bej2wjXVvKuchGhqXxD",
  "key20": "akHbf44srycHQefGcKZf654n4pKDUDRcFWNkXtdsVtnXkspBKJmKhnkU4ULXqfurdJmPKtQZmgCUXvVWv2MU68p",
  "key21": "4GHgrQ7LqMzHnytDHwKzpq36qhHgCqYm9kZsCrThfJYgJ8DLSbK1GkynXZJqAL3GaazMNxeE6BgithchenSoJJCX",
  "key22": "37hEBBYGwSS89oJi1YghrS3zYWxoRp1UG76cqE3zoF71bAxPUN82cP8dw5Gjh2Dpj81L8h3aduuYzKLcCx8XnMdW",
  "key23": "2CWkSKHnXEwsLvtFQFamK1i9iSPY9BqHUm2JFGb2uhaBTxhNNVi37gaGdzX8pEbZitq2hH1Mn9t7xhBg1e7krH1d",
  "key24": "4Qt8oWYGDTRQCvLvChbQct7hf8Uu14Wumgn33Fgb4mafFAjm3QbxbrKFgeLQ6nMaARMiakndEK8GQQXC8oDd9tvw",
  "key25": "4PWUgwL6L5Z6MVboFgu3A3shfHbuSy3dHfLszYrhDjLisJx78FSEKznsuY3Q1n1Nrb23kGZrSZzAYPPc8ghLD8D6",
  "key26": "4b2nKw1wDyH2KH84fL3nobERiiVKTgWsCGs4eAF6B5fhEgwygLBJCNNgCJq21X7H7ujT28K12gPWiNWRCyJtviDd",
  "key27": "2ccfLyAJpfUEDbdQLCaKFaRwKt4CCJXrzueuqFNj3vyaa4f73NG3YA1qvB3ep33Q5Z6yX4NmGYYu2xhqNoGGuBS9",
  "key28": "3ybzb6HaWAGy1XpPYPSEoLyrmpDWX2dv1a2kn6g7J1MSFD1ec2fwwQHrBZ8ajeGsoZfsvoTAFXhST3zB3cZPsmAt",
  "key29": "5CWJwaNA68e6eHwKajXZ5oqVkjVXfoLuChWFRyQ92X7tYGXkCvQjU764GEggERJ9Q1urLXtwVLkTEXyCY5N4FCF3",
  "key30": "54s9fGQqNuXxRD6sHHBwiEupJY9NV1S9CPjskg6Jrt1v5oRhjw8oymDz8CvcQzRhAB33qUpE51NXGevGWNMc8o5L",
  "key31": "5X48wKuoGh7T5fH7rJm8QLSEm6JhJ7bjWAwEHUrzhMt23m6JDXPvavfZ7UN6JvjwVDvW1pTtav3TJCDQNsAuT7zt",
  "key32": "4nZbMxRsej8ximxMikpKiH3ppJ8ssLGvzd64wZLtf2eE8Z2gHQyAewMimYA3gWWDicA7gZ4yUt2bTiH6ACv5daeY",
  "key33": "3U1zPA8PnCmtT6SsVYxfZuTav3ox73zpR7XjDyXtjUwTCt8jxT3a8e3EpjRYwttA4o9xAtHVvMAhExA6ykL8wTiz",
  "key34": "65tTav75Dnbdgn6dAfLDWpogGPDECT9TH6njn42HJwwzmkG6gtyS7gKP8h84tXmhjac2iT5ymd8AFpdSBVdc44Gi",
  "key35": "3a6p3HPSUhKeFWodFYT8CQdUJBdyjovsB68bz9snhezuHj6uC8AyfojQFT3WUk83hustzecJ1geyK8UmQzB6w7VN",
  "key36": "3Pqi5RATbFpdgfFRKFxB7z3CoATzoRu7hcjXLRBU3Sh43ddLCPBCJHBqA486zojWJBueG1MbQHTE9Nb32TYwUZhk",
  "key37": "4yYQXraanLKzhkeobkpQQejUkKhSdggvWHbd6D8nLZ12BfmdX3LY5rogmEVugjHFKgnpGMWCDpKEi8nWveHrnp3w",
  "key38": "4paENDd64EsQJjjrc6KeyRHrGBvTRsLAKKLLm2Y4cCDJoRQG1ZSeqom7eDXdQ8M9QXijaJ1CfYT98ckLohSF95gw",
  "key39": "4KjHoMp7cTe3MsDkiBbrhguDCBXKB8t8kKLwVLvqw4hKYyuMG6hJJ48DbzeEpaMKHiRNj8xXt1WEuPA1jwSwNJSW",
  "key40": "4cTBRHor1Lvfzz56Xit52vswgekCVG19nLq49vkiCr71dzDWHRKFSeZzsnqpxopdp9witZ7aDSBTR8KuSTxJeahY",
  "key41": "5GGXMNNWgbpfJDWd1LbJxAxyMqkttgnYvq4s9HpLKAGEZMxLrfXnGAjTSNLroJMv7mWXtp7tXh1MYMsX4LaFDk2F",
  "key42": "2CCUcPiq2z8jcQ9sqTmUgoqMxbYUjhZ2c7tXs6maSR6TvMfKnvGXqQC9UXcXu4jTrBAfcTsEWab6orqZV4HTgLUy",
  "key43": "57W5DbhSw2CQivLqnXvqWpC8WttShEhyNFfHmThtNXwHw4KoZhX8DRg2xAMo5bUApfVsKcQDTCzBBhDhKTVm59GF",
  "key44": "3GQc5M7qNpukaTZ6SJtsyr5dmtSwNg5FdMboMeSzQ8aNxP8ZRhyEpaYbgwQRNSARoWwaCy8EcCYYZtJgAicPgiEN"
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
