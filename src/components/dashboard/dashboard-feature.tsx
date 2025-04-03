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
    "4LyyDgAs8H1bL3rFmpC7J3DLVqf1k6kawVmyVR34YwBZtJkk57q7K1iUUNFeAmEnHRadNojmZCMu9rKFhTfjMwUd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZuYE9PvxBGqBafkGZHVqECQhuWXnq65pwJ1G3TRg6kavWQvo949y78YbbGUmUnTwxNckdATc9pJZjCZ6jDgKvFM",
  "key1": "42KSKwPYJQrZzvnq1gs4GqQVGdJ7baxtPWxbSKNbtomASdEZRQusV8AY3vCTRvppr4YnSgTAnGbsriNmCBWLbsea",
  "key2": "4ykzg5r6qKZcRhZURS9Z2QQrB7k43HT6AFX3EQxwbCs1FEQahuvRqGEkLgeqmcXU83jKomxj1AkMApHUqedG2tfZ",
  "key3": "2Ja61TsFVv4WzvHdo4GWsDWfZ5okJZAnYW7BuiayAwEZkJz5Q8J8hxH3cbdRFzFrLZJg3kKyB8KrPj47MFu1odrP",
  "key4": "5weHWUHtnW6cGr3E6v1JmdgyHdbFp77wyb53kRc4fx6frU9c7iyg4nEKqK5FbshMXctLPLKoVv4Nsb211UZQxpDD",
  "key5": "m75syrh4EBEPTxDTA82pLfJtycRBJdnNedyd5UbEKdsXLEJib8BdswQSaWyuUXChHh88xx9USnv82oa7qpd1nj5",
  "key6": "kmuCo5WknYS7FRi5FeQEiaJgFE2iaAeXdFRkLJS7xCCqDpyCPyZww5uyMD1wHrco4D4ComT2bWy8XKZBeszj8oc",
  "key7": "5rNLWpxHUgeFiXs9qSZWcEt49RLPmZoR1zypXRYk3Q3fMjQk1fkLpVnebB6LhSGVj5nDKyv4T2jFvoB8FiN1gu6d",
  "key8": "4c932yyriLkVx52skYkD46Yi5WmEzkrDQZNtaUVFkGUfGPaFDoUF3eY9QNGD43DoP5ZJjXW2HFnrWxsM4KWssue9",
  "key9": "2sv9JcNNKAzVCvFKvbL4HBrEYDMmyP97org5TSoAc671DuF3fWKJVjMhSLiKvTwvBQ7khoGVndR2wHf7V4USVK2F",
  "key10": "4e9Nj9cDbdQEfBUUdgANa9UegGNeBToy4Q4Z81tTJPPN7FW9a5h14yeppxysYm4RJGAkVnsygdS8ePEtmAaB9Ehs",
  "key11": "2rHPM3Nz9G8W5cPQanfgFG5hVwohovhjv6KBTF3suw8atN2AnHJ4CuRk6i4sEjg83bQHJ2zL3umjKm8FVktk42Fj",
  "key12": "5phiHKBSEgVNqofccgmy8Jyyc8ybPCEAZDRpwh2s9T3S4z3hcKUD75pB7HG1i8sRpZZrQiLMhBLvzsuyaYU6EySV",
  "key13": "5PeU6KDFLVquL5wsHb9HtaZvhYFpmcCDxNtxbpTDL6D8hW4yyUBthbLbSsR2QatvrtCRm5vExrW73jsUNheZJjy2",
  "key14": "4czZeuBFJZ8xTzzbEgXqnu6jFQ3nS4Es4rk7i7YfonrcpMJ9MVEtEJk56NwpmxL5JPqNRdLj82LzR93qgceF8EMF",
  "key15": "QYmQnypGpkPr4txZvNw4F3euVoUCKD76NhuEsxvxE3pxa77oXahovMukfgMnbXhfVZypjQtjTWm2mJSGnMPoS6D",
  "key16": "5EgBKdxY5SVq6JTwptgkikUPCE5YJDFYemGND9xAae5HsQp1NQZx6KS2EhqKANK2b74F9kYZiYTejYCw8CGM4WMp",
  "key17": "3fvJ77v1GZu9o7B5sxPErBkgkwceMWUjrX5fy1w35GDs9zF59P94SnycabUtNxBawwyjbjHgVakZavfnycpcdfo1",
  "key18": "46MwdMPFFin2s17LaSGZqgvMqSvkenVTCXGHtjYTgdXtt1tAJCg8ujcKY81gW69sQTE5edBfgSSMa5qRbBjbcJeu",
  "key19": "5URHRBGkdAbNoxMM96Ji2S7XFGBkmcXXH7H2KiUFZTiooKdY1kq8nTqbryvqaYS9fCqpfSRkSC8rfoFtEkg3fxZy",
  "key20": "4KhFCgVJpgsKM3rxzQBH8VTrj5k5RRaiena6btuCSaTkNNWskYfn1nEzssBsSnsC8kJHYnMDGBpt55iZRyPMRhGD",
  "key21": "9sLj2GmkKtr6asyi4kLYQGCPjQuMGBWjoPuxffPCyVjN9LPcmiAXBQBEXjWY6YpoS4ibmrYbLwtz8vN7hUJa1Zb",
  "key22": "3xXGdtu98rQpesvLaphZgpQcW8ExfiygXkjLuhzqC8E6soDYRkmSQUNdUBSB7yzwYvDpnJc9W4y8JbdbQ3cByt5y",
  "key23": "zvM13cztvBMKMpuFj4nzFx3WAc3vaLkFJfQag2i3wPVgbTf6F7B7XyFx3C5dPuXoG4CDDmqXqwFUs619dQAFa8W",
  "key24": "3z1oyJ4GLfz8qdj3e3WKNWSAWUXagGom5LjJswGVahCpaktxHR4ZkWJZiaTGcv6HDCdAkW2wTZ8A7ckhKPcDVwRW",
  "key25": "5K8iBGnKRBJZZdPBLcvVG1h2wWQiwUQrbPGVptp1cVfMA2JPjSgsY9uvEE1xHNdLQnnDYMxzvy2hmPp6qZd59DRp",
  "key26": "4uVD96aeGZvpyTKYWQXqKKeUSq64MGWeXCvbx2eUfYRoWt7KV9Unmrxk48zv7vcrHowTGPyQohoegeg7hhpAuZTn",
  "key27": "3sRP6WmbtaRGCgwGRhhVg6QYTamaFcKM5ZcvnPsrtkfJv4MFp2G6AYXgo3ewgsJXEHo57KCvyuEVf5kMTbqyUyA2",
  "key28": "5gTJ9PqoocR199MMH6WyFSuKussDEHqbKGCPukXG93RRhVj5JBvLthr6USMg7QYrTR5ck68s7zH6fMvBc9jiBtdE",
  "key29": "Pubr2dV5KVhmSXcCy4EGFqDtfado1dbgWmZNKXgUZnG1iTZPuHXMDYcxf23wbwCe4Q9sEg6dZVDj33GHcYB51yk",
  "key30": "5HsCMmH199nxThJhqkD89fBMN77YSv9X4J6tJKvcSoZj62xCcZ7EbejCKxe4RpA83G45b6LLuv6NhwWcDwXDkM5F",
  "key31": "527cGwLwiQQeFuX3aLbzyEPiJAmxXZvbmMgkmtGVjfSmPzPTHUbopyHzqTLgDbntUpSAuFwhyyVRUr5aEyWZvj61",
  "key32": "3s8C1MF6iDyJh1d8MLxtG9AWNUNZFqmVSZKroywfZxJs7RWuE2K6Cys4UUQUosRbC11xXypEjE6cqNwkXtFZEN3a",
  "key33": "ajv9GT2Y95zkXpNqpvPwwMY7WQ8nvM4jAMCi12oZinCEdWjpekhtowhaNX1dxxCJ1ypp5mYuELPKrm4deyp3JXz",
  "key34": "22Kehcj5xVTTe2p5AVhFFeXvMjtaEtGgVRKx11tHKGmfnxV2yybf6P7BJnsxi4WQMLmjCqH3ofZtMAwUQEcx5fEi"
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
