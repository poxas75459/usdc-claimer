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
    "2hF5om82owuNRLYAEHUW2rNMr1jGKK77muc23WjCvnU3QdNf4c2aVkTR5hd1r9P4fehyE3rQppFbgsrZgMoBrxkP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uzBn17SxvWhok9iTYMrBGahedSrAjCgAgdAe1oa6BWu25uBtgb3UfeFkoYRHoeNvCR5nKdoS33cyQ2UsBiHeWBn",
  "key1": "5rnZdALMzCp422BoCngZS4vp8aRsGhjk4KbffcYZDAnaUkAN9ir9UPReRYTeQgmHSFWa9JtveBrGvbjQWfdx5xSC",
  "key2": "5PDQU9QFgGxpTNs6EP5rbsNfp2JeaD9iUXAnewobVz2kBMs3nHXi8efksTZA6rJ9KNEhecUxd8wBqZkGdR7eywZV",
  "key3": "3VmjiygMz2313ovvukoLZvJnyXi7PravLrwiezY3h28tGudordE7mSZifXdCmuCbjim2hjTgabewpvW2uKJmP75Q",
  "key4": "3k2TKm8jSpLR8jadbnXTSgZGmaboBpSk35AL9SzcVjU1yyicVtm3CN9oWX6kMqSAmNBxw8tN6HyLUJ1eDGmLG3SR",
  "key5": "4XV4A1oPAQ9tBaxWvJKddDBGFaeGLMC1RQg9Un7Gbno5BtmdfpQebVuzDYAqCEfNnmBueaMHxf9KAaox7So4opUo",
  "key6": "2kpaPRqivQQFzGrQuCMuocMiJMp9BZ4t3sT2MmQRWVGEXSaHzuuuTBLhgkq3xJUQwQz93TZ8zsATPCbjuwVqTXzb",
  "key7": "2qiLRvCU5GSVaAj1vL3qzK9c1HR3qKUixfPxXeVXn6Uq1DQSKyzxnxkd72RmVNyvdnRcyg2uc8tgVcqTfw3HTKNr",
  "key8": "3HmNyjGiFeyX29UYRawkZNYcemq29EuTQxQrLRtzRfnha31QCyYMMSXt4zV9mP19PTz7NPY1Ueabm6DonfxboNm8",
  "key9": "4qX3WK2mAZ52eXrwVL9YRhHaMQbK4gwXURev7L3745mKCc8SDomR4zkoJxckw4pEJCFyGAv3bHgr1HW6DyjymaVJ",
  "key10": "2tuAxVLKHmMEMh49z2vt4VWY8HrvmbUG2vz6s6XTg5eqJKdzn1JLpCsfDFXtkUjFAXgT8ccnJqgZrnXPQCpjCuip",
  "key11": "jMAecBamrLRG2H49rArQaGmX4ASYLTtuzow9HKovqM5LrXv7X9gpHZkbkKCP9HgrJjroC26z7XCwp1TtjrM3hSa",
  "key12": "3u86JRVk1yHtBbAFT37WaAZi1YKyDzA5sSN8wodhubzLvBEp5FbRs8YMNgjWumkCPFkmoRr1gEe2gAnFk69vNDS4",
  "key13": "448xQs5woZiErhHbdRNnoKr5MU5dMsH6HYSNwh6fY4uPeTWQ2N4yHHbGrRVJB9z5EZLRhYa9uvLVz12xDznfcgno",
  "key14": "HE9GeGNdp77BzLPBvt8V9sgLzkeDEYYuewhLe1PkYZA6mBtdUeFmgG3FUrwE2EmgYvPXvaoFTf4ow34ApNMKQVd",
  "key15": "ubfK6KerC6zADr4W8Dq7C4SWnSzZW9RfvJ23M8YdJDqDXufqnRiS62t3GqNCgJ3rLftiyyZv4zXbxtW381k3kUD",
  "key16": "2GQ54pPwLrFQcJWGVAni8hWsysTG39TrzpbhJMo11YhHWPReNi6hu3r7RzPUeMgg1suQW7DpbdiTHD5ZYZjR8hqh",
  "key17": "2ZXGbShTyjYnqHpytzkXW9RJ9noBSNazehRUprBMmL9tD8CXFFZ8AQSjxGJJGeaZ23d9tyscFVsZp29GqJKU4WXg",
  "key18": "5WDAzDySEcqoBdAe19GWfJvrAwR5KnSgwjGr3ZAniuR79PdDehJ9f9pbPFpqqhEB5binRFPRytuwGybFdxRFbWPT",
  "key19": "4DDk9fmSCm1cvs1KLkaSAEUXcSmmivE6Zn7ZTyRa3Q7zCC9Dgx6VeQH2bLRth1jMWgjmUJSUeAYZCDjru25YyPeu",
  "key20": "5E6AwFk2EjWXbChRS8W7v5dFXrEWHeiBGFLNDZf9Zq9G482kptAiwUXomyFQN6AQ9DE3DhFLQ9QHPwyRWhnKgakM",
  "key21": "3mZE5agmKd8CFPieqaNqVQhmAuxNz8AGSDcjJZJkET8nxsC2fELs6V7S2i7ZxfXYb1TCkP9nkvDk1crxmH3qYkz7",
  "key22": "36vcAzEucn93STNPmZgKVHvaP4dBZGnPrp6aCGa48jGCr3ogJLz3NsmBjNPA7JimowUdKTiFci8eAi5kLbRsqCu8",
  "key23": "2Utrackdz6gfzdZZUrwGe9cJggNa5yreEYwR7Cp9xsPokKExygU2rrDjspu4c26Qb8oR6Dsb5ydBbywh6M83PkNC",
  "key24": "3U3ucMDbDZqgMwwsyLGqzNkRfrAyz8Kr5M5iULpXHqpvGogqtbwyREdZ4x9cthESsQV1jL3E9meBFiXu9omffZaV",
  "key25": "2eyd7vD5UYs2vJ2F2Lg1F2eWZKXnTR8mMJhiwWadUWkhzANjZ7w3Dp2RiDWJ8294zU41gkj3q3nSPh7hxNrs3PJ3",
  "key26": "5KySCNGGXShTS65vHNzd9V451F1boSJ7wGk8HvzHpM7qCqoRVvjkNvUdH9HuZsE5QJAfBEYAv5HepovnVNueMutJ",
  "key27": "2CFDfQNzJmfdVZQig5P7BJwN8owRGsbHxBnxd4ZcynrTK2t6SoDJLE1KPiAm8rNYmFEyZJ3zg8N344ZtTDhaZPjF",
  "key28": "4rsq4Zz7WZw4ThWbP1fffSqTNBBhpXJD5mLuUkTvJd5bpmP93N5YWAHKvt297RrUeo9kkGHfzuSijTFM6bp3vXuT",
  "key29": "2j77oLSDt12YeEYSPX4JGbhRcmTDec3JWJWcMTjsNTKavpz9tR6Ug14PjNbxycjwwbsHuLVgCyf732GdHTr3cUKH",
  "key30": "2tabj1oQuhDk7fCuHwgowVTqETRXFu8nAUMswoTEfJvQJdbBBVs9brmU5MDF3QTVM5R7vzgxuHNKikDam1hFQKug",
  "key31": "5po3U7XsjcRDoEKPAYQgiTS4wBB4D4FKTrcDDWeKphMhKDK1eoMkSYvaJMdpc1MXWQ57vMN3fje6AaaMhqXT7rZE",
  "key32": "4fk2vNgoinNMdGRBoLFDuL2aHAd6B1E5iNF2SSTqES7Q7fxW8kw1JUY4NNg2vngiFC7qxtTe7Po9wXF1U9rH1Yd2",
  "key33": "39zv7XQ724hfGgL659Pt6Eq62AoykeysgBeTG95zcwF4cpzyeBMvoqEdwFvAisRyfmWtEno8FGvQ9qHR4pVRZUQg",
  "key34": "2TW2FrGBCn2N5d8GWNaSa16K2YxKnqLpLMU4objgv1spq49UGXzs6BbySXfsrbDPfxdhf6tgC5HPR1T6tC1EsdoH"
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
