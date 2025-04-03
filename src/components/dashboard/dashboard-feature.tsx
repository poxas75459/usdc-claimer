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
    "W1int1Zs9ujXwqtY1YEdPajshFswxaFivDRjHZ3CYeJWASzV2NjE8EgSsBqaSyBmZdnepzSjdo6sC84LH3Wg7TA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FYigSFTcJepmRnE7aqUVDZH2uge6uv2wWtTkVzb374GRRBXkEjbSoL5eywo8iDK5PwS3CD81DKZpueyo4BDz2y9",
  "key1": "F6beaWoYn2owGW2Ynt8rTdSyF7Fka3sVjjiK1uxgdgF5WuXjsBNKNDiivhhDF7amPkpTDRQuybimseqxAsNrPzj",
  "key2": "2KscDskto6zK7VbbDZFoZdAphLVCAvZuZk2fSFaSKSHR59PXdPm1rwcjj7vuFuvyZvs29HPvEgQb4kn3pFCXYV2V",
  "key3": "33xdH7eoZuVxtcasV5Zo7SZgYQscTmj31fwfaSphVAUNA2k1G1FewMHA2nqnz2VGKv3WgNteCUDapJctoFuAfGiY",
  "key4": "2n3ZBbof9HksgB9H998SCkxNzjMEbbYTmJihuGoa9YesGnBM9UnhnyMVC9eZDtwSHzqscmjUmiegbgKpG4hzVDiu",
  "key5": "uuLxnKfK3AuhRBXCvPBT33pR8WGDrBbsBsNjvKVUkguFPcrFX5z2yebKbjEBL51Jq1CgXGLxKLYYzNJ6JMM3LaR",
  "key6": "3Pehbgbee3E98mi4K9Rr9Sru1sCLMrQnab4dytAftrfYqkHFSc3Ab7oFodRbtcHmdKmrdun28BX6ENNDMcu18gfJ",
  "key7": "3SvhG9undYbh5vvYRZwxNEUrVkJtykLpm9AVdaF9m8ZHR5gKH9n9f25xoUT6HCYyksU4H5qZa4ZLo6JtHN5Co9P7",
  "key8": "4Qqfoa39BAhtLxp2nKXCDe4HxcA3pfkmA1xDvUMLPar5KSp2AEy5xVacsU2js6cgEvBnYyLrv4kh75nG7NQA5uP9",
  "key9": "48HnPdAc7PRQtRAt4CGKZBUp7AA2648sYgCfxum9RpshnUzgSsC5eqxoYFJeUZc9zCuhDkrD5R4RiEyYyrZ9BEXC",
  "key10": "5wCvMtyQvCGEm8zUNoSJ471unVYbcKZBojXrEAFSTetFsdkkoVcG1cdwKZmQF4cjnmh5hQDGEo9roSqpPTwjcsvr",
  "key11": "EUdDWyqtEpqPSYu7kbi29hciB9Eb2kJn2rWN2Ze331sfHByVJLePPmdd3RjZSGSLTqhwqYnHoXwy46zPb6Qj4u6",
  "key12": "39Gf1hKxmjkR9p8Czr5ZNc1c399MGok8wCvWFW3rcSX7hSydB2WeKnRCUmfpDeY46Tz3eVWsa2AdmJAZBrkqRewx",
  "key13": "8kvCR3feZ76LLqxgQqQKxNBGa9X6H1fCqKWZrTiUiha5yum1wiPh891TQuWHqgS5KtKKGZg2BUBBU8tBLJx44sJ",
  "key14": "2diFouMkgqW8HGKJyrVjtNsc72beAKVPeg9kraaPw7XHy5kMBVdJEFQGtEyEnyMZjdcV5QCY9GjjgjLWVfVM2H1B",
  "key15": "5cYTntBuwvCm1UZJXvn3zxwddaR5umSMH8LQmDj2gCk6BuL6BbkyVTbfVsxw12DTafsvTRGffVWgbhTVdd9aZycJ",
  "key16": "3ATeXxYwKdqjszPa4d2ttHki7MbqcLMzHhV56D4kuy1Jk4ZDEwhjhdi3RE8Lg8sghqCDZrkfXJoghQVrUegwbkbk",
  "key17": "FLqJBfR8mUBghPyLUe1Tq2JA2dtvMhGSn6bSapD47HGkESQj5kFdr1cSY5UHAbKuEHqZeWE1X1LMp3gLgBwGcm3",
  "key18": "Ddpwf7TqQTDajvgGxsCK5hLgxRwm14jVESKYPGLfLE4uHhATRhHddhvCfQ4gk5hjMoaVEMw1YQvxJFwgppUY6Gs",
  "key19": "CMnDAf38a3GNiSMQHV411XySBm19vvA3doKJ9i74bHqcZLBC26NyKsoWewos1k6o74F139owFSVmAx9ZzHq4fp4",
  "key20": "RCQtdrimQzcqm4DwBfk6XcMrdCi8L5Fgntf22KedV4shSRxAAQzBQYgvDdcRXK57h1CJ6s9HyZgytWmbhV2cnEo",
  "key21": "4CxsjE9J5CYSWoS1x3Br9KQjizaCuxmc6NEHn8g7HJyBPuoC8QhyPgSxA4DjxenchR8GppsPPSDxsgQayageqTMB",
  "key22": "2qSF2gHMCNP1aBFYYaihr1asxuCLzJmx7PVQfSupuZbRj6wTZSDAES2cew2kYZwcNN4ZMH43L3qFgupVLz5v4aEP",
  "key23": "4EsCFtRx6J7kG6ucEoZhFc694VXaEdBtAufm5Xa5cbNughb6kRcYSNoW9YQxpYyCBWyUovE6PhrcDvWuHHUEV7p7",
  "key24": "2CCzXucdELy8Nf6UK78YW9dpTuNMgc3en6MvqEHsRtW4HztaZ6kN3Xny7g4DdKJsFRVhPBijSwpX87vskPzetcar",
  "key25": "R2VM9G4tYDuqoh2iqA5N9486Gri43LLxYqAWWoi5GsWdtao3fxYk9Fb5AQj3VdvL9d5sYfcoGEstF8VAWVQ3Wmg",
  "key26": "4jv2txsgYnaHMa8wvbgxX5PgX7p5TuyJY3UyAe1fm3WXG5GtiyhCVEYLseK87JATuZ2Vu1xAZgaFiR4QN2A9dNzo",
  "key27": "4bVN3HZbtU3ZjQHt8RUnGSE8k89V6ovUm36isKXYCBxwM7ou5XJX2aWhkPEv2mV1rA77oCePJiRjs9ResEvYzKJr",
  "key28": "4GGy6JKngnexGQfCoFuWYgm2my8vC1XLhVp12sZY8PD3E2JcYU9vfxUEDuZjDLhKqBPYHXvYd4yRxADdvuja6uzf",
  "key29": "2iqnDAYM2nf1aMAEdyEjAaoeBpeu4P8byYrLGXfkG7QSjsEw4Vi62zhwiPNdhaRrodcR3PRp6Nj7143tyoF7WN5U",
  "key30": "5ui9QERV9DSmXRn2pc1p1Fq14S3sPaa7LNLysUdR9S9XRoqauTHUSPRoGj858UWbqGdvHLkZuqJTYTkYFi8o2KoU",
  "key31": "442VM7ss5YuWj2yz5zXVCNqeSHoc3AgGdsRaDZkwfmT1egYHYFVFMQEwroxWE1GiYeXFwD2SfsCCnZc34ogda2PK",
  "key32": "wnztuM5hJnVk5tdFWne2EUNYE8KWPLeQnVmucZ8PWBhxv5yk7tiHrdBfbPZGsfccQwQWmS4cbCPcWK4CwxtHGNu",
  "key33": "5f36RwLtqQcjtmwgCA7u34eANLv83ChEEM5Gk9ysshXTqavnJozUWkaKd9cw4FM8vFi5oTr5ZP9mTz8EqeVN7eS1",
  "key34": "3BZufwcBanuMnE2muc36ee9i1ztcSSGygk2tqz8CFo9WycG9WZTG4LNYed8tsfDFc9UmUni1bD3ut6zVMYRYTodW",
  "key35": "2s7c3d6udzccUbWCvty52EvCf5LbHm6x2FF17CpYK4XQZzwmBFsuydLBFgShmLYXzg9Z8FCdnExBvQY13rvhoeLf",
  "key36": "fut57zzGjozoPLBfT2BH11aTMgvhUVUD8XGNR7Bn4wQnEFUQCbx3LsoFuAiCpsr9LMtuhMoYPmff4yoj7UcTSp3",
  "key37": "5QhJNtVfo4wxVunaScKoFEMq89RXQi8u6JJyBy53dxNE9isUvgubHZcQ6vqbgx7qb79YPEDw3rCc9Cc9oUm69pfm",
  "key38": "63kARWQHPNGsMJ81uiCG1kc2Wj2FM4NVMYUwAXaPyvkCxnFVpdvtCCv7Li1MiXRuRZQb3eBekNxZNtQXXqUMbKsk",
  "key39": "4trnw84Rf59m2CEtHSxhuJxZxasmDyYDyX4YosVeJ8cTNahZZnWbNGCc4Bv8J13jMBYmCk5TnwyyHKDNKcQERqF5",
  "key40": "22Y9UcJLTSvF9CavYkR7o4f1EDNZ5KoKcdumMorVjF9nCNJJmZ9Bu9dDiEPZ2CPkdcLntiVF2tj1Ui8UwPZGB5hd"
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
