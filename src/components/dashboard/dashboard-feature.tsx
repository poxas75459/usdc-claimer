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
    "4tXiUD42ZbxVJGbf6o2ceo8mHuMubaJoyyeuoo1viS6AWji2kpWCLCznZNKvPGLvRcKjM46q9HHjqBxhe39KtXeH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "648kYCio2YRthGJgarQYHeCpowgZFVamQSSWyM7fb4NY6jsSWfV5m4m9Z6SHcpqT3nt8Sy2RaDozwu78qbeQ3HXK",
  "key1": "5PD9v7tZjTi2NbUzsWRiPgWoYTeyW112QAnTWjxMrJoPpNSx9Ub7kpHLrtA7hEj4Z6FGHu1VgCFPJHvwNLUc6mVF",
  "key2": "5RFsdjT1N8mQiLHi3ZSMVfU1hMtuKFiodL1188K5WyTzpthjbyAw9b94jEAMW9A9EsySS6HMnrKoGKV4AYvCSqyM",
  "key3": "4D75cHknpB1M1p7XPadSZfgNrojRhUURXvhjhzq2iQynZeeChieiZTL1xtt3DBWGV7PTesKdbiAEcCxEijra3k1Q",
  "key4": "3zkmu1o8ceVERUarNxtnsffFazKe6A2eARfEag2TiAycFPa4UcNRp1MZbKdww19rSJTjZdx3xgmkbGykf9CFg2rc",
  "key5": "2vZ9Wj3qFjFZ3Zw2SuR2CiRC3s9EWp7s1iCWVCdZjbybi4DojFsJYKXABwEczr8pGT9JeJa4QgMqP5btpEhWbMxL",
  "key6": "2EAoyQDFndL3XJseAqGDHemG1DnnQuQhwgH4zzaih4vzw4DL48mtkjzGsTzHxLHHRM1mCoDkiKe3bumLshmen74r",
  "key7": "5hNN7cGh9nXQbtnTfg1QTALwhxv8hHraqfUbbsrSExhVBUB9HWhy2TbAND1VKsacZbfjiHfTUaGcJ4hXCYREDi84",
  "key8": "pSyuqrgdbTY1EFKWfWr3EzgHpneuv6Sf4tcPwBL9UqiUdaw8LcD2dgHtffKKwruxBqYbu6rSEqVmjNGpYrvrNcA",
  "key9": "TRWQoQcXqinHDzc6nqjFiKCMkD5DonLYFdNKmVUyLwA4Z8UaAEhLx6r4AK6yNkABmwQEXBNA84zozdSXkiQQZUp",
  "key10": "2dLaShVH9yc71rwuVv6Gk1uLyR9feELq88GsM2T4ktXJY5N3cTiHtvmKTuVL5xJKKj46cUeBkxdqtwUUkK34SE1h",
  "key11": "3ep6r8BvSaWgiyKUGmoupGiMdto7e9sDD9t9nzdAQ3rUrAAQBdw2zr4hH1HsowNJh14D85jeTq8bitWpzFDSQTLf",
  "key12": "49s9Mw2RYNCeAYKSoyusHf4UKqw1Y9sCdxCu36FpMm4FMbPS7ti6cUWAunuhJNZmEdTTvFn29EKtG1VEiWKgcmH1",
  "key13": "42qspMAKFFmCWNAiMeh7mFAzudK1p193vdkfj1hTVzQKCA7umoFjhAduUnpYvx6ymKBG8bi39AiCpJKmTaPrB4nB",
  "key14": "21YhzKEi8cwMo4rtsP6tLeyVQgb5V8EkKoPqb8x6ybHDNCMF5NzPvW7P4WBXYWwa8439xVWjpaWEko3mWbLwyR9m",
  "key15": "5Sq6ChLE8iGXhuLjWcEWDiFLmByfhfSeF9Sd5oUwesXVtfQdek69Q9sEs2qNmMueA7esUb6oZUcXo45NrLmsNbrw",
  "key16": "4dvZEgb492dwkGmU4NuGrj8Ak8iHGqePvvYeFbEPDs4cJTuPr4EWz9Sr6XG2vHKK6bZufwFCZTCRUTtxECcHXPqe",
  "key17": "2WTFyyauvJfLQmBbTrygC1T9afv8FCsn5DcwTkLxsg8EUzxxZxi1Dv9gKNYbQF7QSEaCUbBiPCBNZQbQ3C8ZyVFq",
  "key18": "62CjbvYmNW5PdY5aWCn5DfKHbSY8P8oSf4AdhmqRrNucVoGJ4cW3NY7TT943LE98akija2gQQh3FvLcCDCUooSd5",
  "key19": "3AmSEPcQGNQho6tv8QDESoajFSLg3mKihEDzS5YZMktEvTRc8D4hyyDhD6gYyqa3wttunMoshLLPDNjD79BF3uih",
  "key20": "5qA3SPWk1pNra9w89Ve4nC5D7UaDWNrZzKQE8RdTXVDCvx8gAcML6XbCoHZYCdFTRWeeYPo2bfpEM9ReKoTbRqg7",
  "key21": "3M1wVLrFo4KZYYvyfckFFEVjUctTRX9Uu6fPnebhPJKU3uvSeqFM9hCht89Bt88RUiTJ2zVEKAs74snSQUSh6JKD",
  "key22": "4BGGhNP9oD5tsv9TdgnGf5XfGyJ5CKwTuJ2h144Q9MmPcpSMVVqURP79WmPARtcJ6STgcMAthxnrF74AHZodbLLv",
  "key23": "48Z3Wm2zCyrsXhNMZiSiSipdssFBXpNknapeGqDa6XgnZ4mvkYqRpNRYu4cqbmMLw4ohEA6n6oWfSizRif32usry",
  "key24": "43fiNum53e8kfXsLqa8AV4unBmYyjiL4pVPg5npdNLnbhsod6gqzCeSSe3v6BUNFW5zXJyYnFvePKiZxL2FSrrKS",
  "key25": "5dgPUgaoKS45YeeYgRkzQF4BcUvnakHt13KK5ZyhrSxF5Zp5GcX2YPXit9C4Wu7yKaTAG2vpTs3jvXLifvzvnbuE",
  "key26": "4dUNG65yn7SvhyA3rhGVeYefFosSYi3ge38yyewbFhKSqgGViPsGc2BsqJtbxjq9DrmBajfvaijoA32GWmrwigXL",
  "key27": "5FK9hr3Hfnrb17brsY88fukKrusHbP7Ed1x44P1tTpEitTp4FnBbp7EooBqZ5VjxNfPR5URpsgc8qedGEHq8JHho",
  "key28": "4j42HXi67PozFBNR21CiVSLBWSx73CPoCYLZ8n4ifGyeCwa9EfKJ1SvB5D2qQ3vBiYzyTKVQZB3zw45LmMwVQch5"
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
