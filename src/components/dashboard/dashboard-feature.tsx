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
    "2JbnVKm1sarejcp4FmwSVFeabQ54L3BaMmsKSLp3H1HbkxSk7tXhJNr9pjyvqxLJQGFkpK1ENwAdwqxu6gXJHM6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31tb3o9GnaQCjGVLJwoG45p1HCMsi4mEBvz5rUKybhAUQhRzkLTm9ytooSmvvHSwWij9hCZGGk1apSoEA4AfGoWt",
  "key1": "67rMFGcPdBCvAiXnBakS9FNmF7yYi8PiCBqy4a1GJAPWtNSkVpjkZkxSK4om2r5sWWTGntK8G3UmX9MGkob3PJi8",
  "key2": "3MAiwsrBVLCuPqzeAtzSdcfj7kPfcba1w5d1y17GM2fVu5mLGQ4aPdBWK7kdwVXUt7maK7KE1kvfdMAuUYzh2Hzb",
  "key3": "3okp33z9teVjcpXMNSYb9G6tn7Q6J25tz5JE54Rd7PJHGQkHpuGmsLZpWuTRGoHYACMuZEciRHPMkMjdE6ezpFmW",
  "key4": "42Mcedb9FRBYCVEa79KikFo85jF4T9CXcgVqBuuZsfwa6YzRQvSJZ5vFg2zAivowsSN5NLeoAXS61a5cDH3cMp8K",
  "key5": "25SvLipXM38J5Coeh5Zyd4NnAptpJ23kKDbByfTP92jVXzpxErrznsoCeG5K39gAghsc4gjoqSH6kG5yA3KEr2dZ",
  "key6": "3i5nPapvEFb79rb6RScsNjbdRVu3XcZ6zgyQDHg8ddMyxt6g3UYJ448YpsBYsHTjxQKkhvkvJaTf6s1hJ5pwNF7p",
  "key7": "Ni2MzAbNbsZT9eo4dTZHjTXh4pn9gKgskT6XLYd7KLMZvy1SBiPfDrAyGrujC3YyVjfUwSPNpCb1KQ8jJ2N37BH",
  "key8": "2KH7amgnVHu7o3CYPaByC83epUQ8po6wffDaRPYnQdtf9cam9MtP9vYYckUSVJ9RNfhkPLZtLqcibUmw5fYTiC4k",
  "key9": "4y1GqU6M4E5gAuKPsYp9WfhH1SssTxj4ajJnbCm8u1cM6sWcDM2NFfAdQvGBCD7BoEUcbxwQLVHrS4QhVg5Z7oaN",
  "key10": "3HLn2vRV6aDKz2zCHwKEdf9LvsDJGdCwd3EDV7x8TjPDzWtTMYPaPRCyXc88tMCVuTov7ySHqfqokqkGH9XNkiXh",
  "key11": "5gEaaMAnppb1h71ahiCtTwYXri4X4dS4jyMcLnwPJtHpsCSEf3fZip7662iQaDXP3N6Tpjxyf6xd3zEPZicZtq5g",
  "key12": "2E1egLMn4NKFyrfcuqkvYnijuJuw4xAaKoUik8XEgqXzk6u9ZwQFfhTZvgFJrXoyH4dGfDvpKC2Uar73hadL9Tf7",
  "key13": "3kZpAJyU1Ue3dd9MKPrJKWck4ZacuLuaGCoRG8k9vYhMWBRZM3iKKjLqXVVGzWiEhM112rB2hVUzQZrFxzXBzxAb",
  "key14": "4anNsNtBzdCDPV7eNUF1p3y25Rs1DthYNjoMf7QbzWHTJkA2TnBKD3PzSmat4M9vAVMxzEJVDypwfSjNy9k1K9B7",
  "key15": "AA9Cm35XLmqqZTUHQZZSXgHepPcis5AcCERKTG71bNVWMuo97DE39n8wR7RHMxqBydXVqQBG1uHaZLSxZBQxvuU",
  "key16": "PFcXPPRvnGDxCeXLszZEe2Y4gRMnJDKVggy4wrfc8Vp8D5JPzHa2s7ZikGKvxEu5jDbjQUPUqXykuet4wBvgVh6",
  "key17": "3nJE5XTFiCLCBpgs3Gs6QHeaZv4XoWfe39VvMHFzfgmbFhbxmCX7GeViD7q7L8qHDwH3mTRCNt96LZkm3rgbEAf7",
  "key18": "4Mn9bAaw2Xkxq7a9DHaX2vnU5mZxxwagxqr4KTGnBHY3wJmGubysjvTXYRV9czKwPe4cgXrs3F1K9xVB2dbW4bKG",
  "key19": "5MaYVKAJ4cpMiPZx4uSrjzh3njUfkRkfGvLeKvwLqHsGR9ecuDwwxEsrtkhKLvEs9xLXYr1TNGpSvnFh3pYVbNg7",
  "key20": "294U3Znshy5ggnXcminJEUFvNsr4Q5FbgG4gwuoUawrgfdJVUNiaSfqUAxctEqXEp4nwTNYjZahpnT7ikM9a5XWZ",
  "key21": "5558T6FAUPZoP9xjzbWCzbZg4JkEF47LHovGYP9372UFFg58Z51S4wbWGaVKgLNC1QNTTcGAhN8UscPJheCErZJX",
  "key22": "2Vd5znwnsogTHxeP3uUL2cZ99Kr6seyPgY4ewS9HirqQrpYQWthLegQDYdkMUbz6HzZZEF88C4R7S8gVimF3tSoV",
  "key23": "ptHB7j214GqnnQJMeaG1DDCrgazoQgfQBPKLCFhKMCfzidr4SFRMAsBSZkYcqABhguxdD2yRykbW88GYt3uvnfJ",
  "key24": "3yp4GRPr475V1K5ZR1S9qhuySdQA3Tsc5snqQ3YWqZYqkNgHAdWbZvATh1A5DNhs8USkvCfjt3WEaHbvBmEV8npv",
  "key25": "3cKHpVzojNq8H4jafEMuBiXvfKvrhw7SySU8j6wQ4TZTnzNiwcWWY8JKZcL5dR1UQRSX9s1a5B1fhfEYSMTev49R",
  "key26": "N45GaAqAThfDYUDEmniZJL2G6ibGSWrS834fHKQFGKpgx4nJVuxd92DuWEyb49Ct62nqXwmNUVfrKidTZkbTjXV",
  "key27": "5i5yDk7z2idwt8kXSg3eByxpm8cHrChH4q7NM2rX48BjArmo773E4fq5iGtFzskaVhaKC8ttdV7QBCJS7pUT85tw",
  "key28": "yghSXsRSSvzGXbodioAfNGZXWUhrWvbJCKcb4raYZzy9VwwHqGMsdhKfZU9nLEQj5BxDjUunTBsJPaUQgs97LRo",
  "key29": "2EcgBtNvhwrxHHZWV6NBknn54G9pR6Sm2weMFJq6NYATRX7oQRqhtnNGXHB8QQPupVnjpmuJMZmnwha6TKYMeXhV",
  "key30": "4N1WJ8AhtrmRh1uK4LRHUojagpxYr9tLkvuNr1TpYYGzWRwTU5oodXB3sBUZiyLsdBXgdXuFi2K81JxLrDWdC54a",
  "key31": "5kqDF8TUGvfDpiYFwxwHCW94Q4Q4zjxqk4dmPVjDQh2ariute1DxyRPNFfpigWkQTWKbkW8nm61nwibM4zjsj73D",
  "key32": "kcuwBYyDFQNSH4dDwtgjw5Np2KWM6bEgn1GDaBpfssUNVe8DLBeEsT4ibLJVhxjZ5XtwQoksoXyhg8TeHKbQYxe",
  "key33": "3xTeGpRt3Rt8ngiDLmFwWQKAMHa19N6VKAjDa9VsLFEKzE6cmPAA4zj3w24QUgUofuKwaZGCzfPnt9Fc9VFWGutF",
  "key34": "41LyTvXdoqkQgMVATikW5fPryenuW9LajQWc4oEz81ugGYsVRhG8ZP8B8ozdC5d55u1CkRP9VVF5P9LBBTNRZJWV",
  "key35": "31jaFuEXhfttBPz9qpTvhwg53ym7EyKdTtDLh33mGQUPXHMhdxpyDdjJWkksrV6x5RGcMtQ3KCoVJqEvKZpWTSdU",
  "key36": "39sbqCw1iXXCeeoyhtBFHZVnDnZgxB9rMLAudfGnosZQ51Na8C6za9SuQFFt4F4ffSKvUnuYgG433GRkmMQfFVkq",
  "key37": "5zxy3r2eSWokCCe2snGodzQvoRTU9thfqSiUBeNGpBg1HPtrDedX4GqFJnzjcnxswL71NxHmpLDWQA38b2tYNu1W",
  "key38": "4dMBS9vQhkPsLq1E6wqDLXjgX8Eitcj3o3SLPstWtCnb1FDVNAbTDJo9bTpASHbyQ7pcicAMMAD8apaJGuR9nErN",
  "key39": "2Cx5JUNjmv1EFUFUHsDBq2mjP6yNKVxeS626aWzA4prjW5pXy9PbrfD1yUsKX566e2jvkuxLKZ44jZskMhWkfooN",
  "key40": "2ed2BjXjmFXXnCNeabwp61Ho4QfPiLYJDRRF5Vmkyii97BX4JTynHcU3ahGdVM3XzLzkd1hcu9D7hYgZoA4pF8kB",
  "key41": "328zbTYnjC7zuKoWbV3eWEAkdANNwhLe9qvQ4CfEXiR1RvfdafKGz1wqPEXuqdSPThz3DUzAUZBWZBpSQG6rjjc",
  "key42": "4qBZq9MyHQDo144XLMYDLcVjdB3ogFd1puLzNz3j483JiriduF3ToG4VYoWAvx2xYjw68busJbLTGK8ST8vavTQu",
  "key43": "4itJ2NUSq93KqrqiAALeGJuSkYXj1TiQKhyD485r1ZnPcbUyCBDXbX5ts57DfJXg4H7PTpXiShD3mk2f1rw3tpCq",
  "key44": "5AHduTrQDF5TssFHkmauw5LWoDLSHokTPBpe9ncJBiupapPcs93hUATFsmt5h9mZf84zwnRk5EhQzkozetGCZEat",
  "key45": "3Lq8vyRe1WReQLdEQdtmbaAmMSUnnrvTtd3xJSqjonQpRTg4wtdEuWjHueTL6cko4K6bhSRUzakYLbZ2smC4yTwo"
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
