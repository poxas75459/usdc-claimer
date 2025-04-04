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
    "KMjzXxCGobxVz3KXsCUEJ3L9UjT9UXd9Ab8ykV4ECoUtwXZhMsiev6Dv4unfcow3vjZRyP5UrRDBKPQL4EsoT4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u55EVbBkSWEyPMEFGZ2enNkzLNkYa4uaVqiULbvkEHC5o4pWno7cysXVnuYCa5TwcbAuhPKJXgqGbPL7da2wSn1",
  "key1": "31QPWCMZbQaPEdnqLQxzEzepQ7RDuN8xM9wfB2Ui9DKunwKcJzkqjS1rTS22tbrTFkpde2FvpwFFLPzRXvzSRpoH",
  "key2": "4bgN1Q91S5BG17Kw7P12mmT2kQVU9V8V9ZJoPR3G9CjWQgCtooByWueXspTggj1YCJoTqRw3TsRrucbZT5RjTtiC",
  "key3": "5k5DnECaGbhzzLtA6zv4FTVnLhzswDuk7rgz1ASW5X5PG5ecn4UX8Dezz5FtKw2W2NmAEXixaWfF8LpVggs3zbDo",
  "key4": "3zpRTVDt52rwbrerPrj2jYxCQmTkyxU4XpRXd8JEkNhU585uHVZHrrWu216PLXWVLqyynnD3GsoAYmWo7xuUWPf6",
  "key5": "2V1sG7s8zrC5ryqWA3A6rabZHLh8hb6xacqaYF1yMPBK6B886oVASYGgmyo6g3JZi6zsuoVW9s9M1AHSTgs26y4K",
  "key6": "4A6HWLysDfMHnmcisZVv9TF6jxeiUbSxCKn7ygQB9WSGUHDKeiryh6oWHhu4hFLVvcdfSDqBo3GCSLo1MRDyRVUz",
  "key7": "4ooHETTTs2WJg27JDDdxjQBhsW1uzPrZvYPFTPmYTrwBYzY3DCgDHpKpb78m8FsSeWkJDpuDJjWYy9DWRtbNDBf",
  "key8": "5RWYAo5n4U6p6fzAwNwXpeTA6ZLVxu34p2DACTgrpTjUvBQNW3SkccqcJskndrmUx3baAJwP1zkidZeyACsKT5UX",
  "key9": "3hMr3TJHjrDPXKd2efSUf1pCCkLWGHAdoLctesVEzJxZvZvXEFbVYBvD4Q6JkfwJp72DTftsNV7j3R9JVLnKESX7",
  "key10": "29DUH4g9p1Qvq3WrVE6AGqYDNvDL5MkRX1sajq5nqaSjiXYMSDTMQHn4roSRdF1SxvKbDwcXmbDUP3sBMvZnwVBv",
  "key11": "3TqHWEtnSXXC76rZqwpoAXirnmfejyTU6aY1SU6nJAmmfaochDMtETmSfFJVJBYaBhCgE16uCn47zh9gsJ3hYVpX",
  "key12": "sHRwrqL3GWYRtiFKshePp6HAFjGNV8hDv9eBQqc5LnmhU5hSDdeJNDTysBGTivLCoYUUfY8cHkt66k14Kb4Xp5i",
  "key13": "5Z2p5hBdnC5T9jEGd9mA6Y763BHAka2uf3Seu4wi6P2ZqnbiFZ6G2a6bdwed3iGUCzf1UDDZqGsuDdvSZdZf7iKw",
  "key14": "kxbXC8WrpvKu3Ve5oc9rZT5CXL49iv5F9e1sv9Q8S6y9jWhjhn7zrCdYhG46ygGmAQhqnZYKAENLmLD4Wr5UGWt",
  "key15": "HUPhFbmcAQHGSkJmDt88mZ5ZEzeXvhfmwR8HyigRG4xUYXFVBqhEwuhuXNiD7gihXsyMzZRAyCNZB5hNhkpNp7q",
  "key16": "4fQiPzLmtzSqnL57LPm2hWqLuWvRADniABVfftCUBeqdnLDvuipd37Jtamsf54e27VwbVtiwNUfY8H4mETwTuUyv",
  "key17": "5g2vGYbVd6uiKKiRgyvwtdfu2Z5wysY7Qow8Ffk9cGrsCpYXqv81DuBjRmC2q1DBSyEf2yAicEQJ385TZq3p4L1Y",
  "key18": "295Ut6SHAPwe8sHuKXGYZSxJfUfEo6htEnPohASFPSBvFEhiSBf33WTVd8TUVNZAcF5yEeEkLsNk93NrXmYaUjvC",
  "key19": "3EcKYuZXpWRwjJWgW5VE6ahQvHFLygPctUSwop56EybeSxX3T1KwMz8BcjNhRFvWkhkMacpoGagrEQofg49rK8ev",
  "key20": "3UncBw9quHRqbNYNw8m48M2WJT2BtY2ZkfqjHUAmR3NYszJpznD3jna96dgsB5mBRAxUDcD92WZsBUVbnMwR1vcx",
  "key21": "2a8NSqNt1qZzCoZHMn28nYHyNMLMZdvb9YzjPSnFBheWLc6Le4Z1rN9oo88iW1tJHNm1PqCA8atdpc93aq7mRhHN",
  "key22": "4Wza8RrUBr7jyWpLASHoW6pNuy2hNVxfsDPfpAsMgSiVvMufjScDfzdcuL8dYNXsyrBm7fcwX8mQ3dugaCsxwfE1",
  "key23": "61HiJ6NfvaQBeC3adcsS2apGhWQuY9wGQ7avbPU8oae83abSH3wBLhQxRKsCzrtFcNQ5BL39SHGZqEJdrVvS2ALx",
  "key24": "66P5tR63znpA1gU2fhpzG9mywZ4fGne6uWMTJwN5ccVWNVXYY2Af7XLPzXZnBhfBK8VaXm3C1u12oT7ZEQ9MVawH",
  "key25": "3Wcs7Zx16Lxuh5R68znCRz1SviFhE1Vd5juNCfHoSqZ5V79sYr3c5UAgsHDfnGwTTUWdGGbkPRBdyuQtXBcLMJf9",
  "key26": "258ddictg1bVUeMaA85bowKCbM7MostVvibAddzVB969kzXtknRVXo4PACH4Zyrs9PATyGybfqzD8z1Hkb7VcSpd",
  "key27": "3LDSX48UKw4ThbYwTk1edXPCKuYmnMJhXYoZL1WpY7UmT4qbbzisGShVjYbppkEGLexj1FmL7qRji9B12AZ7NC5A",
  "key28": "5NsaQKSRZsBRBkeJgnQWQMVtGT13vT7t8SSQXfxqHWyCLo6AP3RMDQSv8mPE2hEweZucBz2onSygrN3bLTGZViuo",
  "key29": "8y9B6dc5nPdkVPWRrCMvD1TmvJGwfWooMjNwerR3RZ64bZc7Gr4SkikiBXfP2ExiV4FHgtv7UNHSJK4y8UBy8Zm",
  "key30": "Rj6RxXbnQH6BRHX2w5rU3XCzYNSU9xCwN1k1y9iH2RJGXNRUsBhDsnGxkJD3Y4qhk8kgTM14ttiyNitFEfCGW8p",
  "key31": "3F1giqWdKWwwUd9vxSrhJ6K1gMhbAMyiDW6oNxe5hQLBRcs7VhSiZVvjrsggn18o3denRonHo9LFvfN992Acb1iA",
  "key32": "2WBt1gvygCTs1me7sS8DVCEwRyxmY5gW8s8Du33LEhyhJhrQE9dCeB4gDUS2imN8B3yuMpPAL3TKLEfN6BSawM5a",
  "key33": "2rKwcC75dYbuECGwJZ5A9BeteU96fpuXiHosxw1M33yHuvWgr7FEp4b8kSf9kJyXvsSQn6PoJ2v7tE4XPBVHX1EE",
  "key34": "Usv2SESBMLVhN7bhZ481Zi731x92DRGbkymY2dSsYYpJNWFpuNCemXosX2cxj1dNdE2D1NjpKbn7Cdfh2JmrENr",
  "key35": "2F3FeEY1DCW9FUzfupJCFrF6aySTR7Q1zfamx96DbdpQU69aeLuEey92MbpptBFRFL2kQV75c5uTpdwJp8nNt2ed",
  "key36": "22Ek7j7yZsjWb2dfFf5io1EAPFx9CgyfF3AkbEmTKPXt8Y33uhE5qPnhgcc64JfRhMSUj6t6DU9vWZwhAKTgvQLV",
  "key37": "5pS6LqvQkKJiYoWYmaesLx1nzwZe9j7HUvZmAjUDZDfFPjyMkB9LFi9NgPmTPZYWqdmJai4vuRZ8bsb8rjAniUTm",
  "key38": "4Nnp3tzhoYB3FNwNEJzPjTDcCxaAQZVMFYJcrqTjNkRDiAsL3g1t9KT6Cg6UWy3UJeqEGWdNzfUgA75Z3XPqaRdv",
  "key39": "4WgzqLrdE4xH1fyd2ZUvENsAP3Q9ze5rvdDXPVrtiDcKTuU44yT83ZVMvMyhb7wj8chcA6RNx1Uhe25bDrPaspur",
  "key40": "3yeKoro9H6tkycLDECiAjS69bvHyF1YadnaXgNuam9tASqamrwNK7Z6yxQ6YQz1o7zjzRNbUXibcFDaZhTXrNDWm",
  "key41": "2gcPqVbEgCdRXqkNLTKH1tvzLSoaYefzSp8YGnyrAsQ9GEjp9LBvqKnzu6N3giWE2GHnYm4135zhCsQEDbRT97J4",
  "key42": "2humJTijs9aLZUmsp4RBa3eLzwQ9p7CDkj1FtsQGRJo5KcmNGduKCLZqLkKAznwpZqNsWNJyhAEM7AUv8WL3tERY",
  "key43": "33JVbRhMrhruDrmA9etYpi3wUqXv4AoaWYfBQhXbECS1J2VJ13xJZdSu8Qfo4dV8jhco2URRhzy7ucFDeFcU1UPD",
  "key44": "33pyrZQVtEWVrWydfeFzz4MkASSywq4BojkKnJ2txJVQSRgNp4QqhhLBuxnCwh1RHhZTtV8Yii8LXHjmNsRvJQT7",
  "key45": "3osLekXEDnxLfZH6J1gAsLzg3kjL2UnbZ3UU4n9rm7UYAXcUdbgrwAg3GNMJhcNuxV3pga1e5h69sjzNTuXco7eF"
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
