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
    "64JV56hcD2w735HFZXH7WSvTFqKDXXnrgqezdCSXA97RTDRp1esLG6SacQK9J9tfnfw647ef9pd1AWkwfg4ZjkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dKSvfrdtUA2qBXg8UCfMLkxVukuqr7aH2wAEFqHjquHq6fPDw3JvpG2EEfY2ajmczDhHJMo9XFUvNGaE7tEj6iY",
  "key1": "5L48sSg9ZGjj99ZzqGnUNpYNW5drQGm4EsPy9ALuRsQu5v254m5bxjaecnYLdBSGqX9dA5PCe64k8smdgnoMY1hH",
  "key2": "5wPXgPjqqDxZWS3stgdEDbBvUprkUcuHmB3RVA49XZYGiSUMF8RQiBY9KyxzWaNt5EWcQN7FWsCAA5AhjnpA8xEY",
  "key3": "5GzyEBPkA4GsvnjsNEo4nKFEhmoJenvfWwEuGSHLAqsCp9tY9JJRP5mZo1tW1nX9Pdr7wzwQePQDzGgLzFj9GjMG",
  "key4": "mrtoKqv2pBtSNa3gNEpp3TCBP2Jt7azL1nnBXQeVBQxETHhh2A1KtavJR3cB8GdBz1zqNW2vcBDcZxvpE6QaD6b",
  "key5": "5oTPkc7XWgZyUnJUueHH4wYQVHhCuK9cPEn8yk2DW32RT2HsLuEPFaSFsYD5LP68gW3wdwXivenjaysPqNWMweEG",
  "key6": "5FAFAkdDG9nmJHfa1AtgH18tRbtciLgtT2C7XofPvUbcfrbBemiXYxtCvBTc2h9rb37YkwMWLMCPAix6Muacmgdy",
  "key7": "3RUCVrFxDSkZohkK97f3c7wP1nDirtCAnqYzvtGaPiLbszE55m3GLUNS87uw8YtvmbpNpF72FSiWJkm8KoxEgqJY",
  "key8": "4cRruanJfstPNtG1oL3tAz87xiM2gX8GmHPdZKTw2iEBXSsfs1yzAFaYDFMRzJ6XUAdNRj8Et53M6BxhYwn17BdU",
  "key9": "4nCVtvrW6My4rcND38GzmvD2oXKHe2JtoSXySipaSePomx4NQ1FsPyY8nQAyGKvhtPGb7BUMTCt1cq8jwDKTAre",
  "key10": "5wZzn9kfUbUGvJC5LGfffgUtaj7vBNzDRoamWC4L1yhkvJx1k25yqiNb8An1jyuAaSzS5tm23CRyJqPXmKwSXj2i",
  "key11": "522FfqZYjHGHi1gcXxvBmdZxPSMURRvHYqkucFjBihHZyeWiGTvJfFsbHyMxm1Jfd4Jjbix4qK9b16j2nAm7HH7k",
  "key12": "4Qm6LimHRUycB2mEYnwWR1HmeKtj6GM48GvpmrqU7eiPKnsaepxyECY1dewPNxQXYCZrFUYX3f6yA2fdgsTetQoh",
  "key13": "5FMvcw8b2Nqb9E1JoAbnL5TLa8x1T4NoNNZWDC3TkjYv4YkZCXpZ8UMei6pBayxYNqasbLLWNY35i4LXq5mQkCKk",
  "key14": "5ZCTCr3kcoe1Kob3HGP3JKRVJavhXQNb85oAqzghgTutxuQQeHN4ycCHVYSR2dPCSMAGKsbpLpvbtRgzdTn9Xa4W",
  "key15": "KTJ9PaCAkRn82QjUqoc1t51dmuCTjtqQnfi797AiTEPLF5RHD6RaTbA3xMGFkxEnx7awH7f89SukoNDyCqRZtRA",
  "key16": "42DWEePmTiFHyuYSA9fRzvqEY2RtsMwf7GJHn1nMzUUgvbKReocCupXhLLcVicsrqoKT9GxoyQ5y8oV4Sdhq17XY",
  "key17": "5AH8ASpUo6EoxxZDqCMoA3nGNJZ5pgihoaJWXWEmYMQrt4BemhBsagGvE4aCU9v24oHJ5k5HotJRJvgFua3Nhkpu",
  "key18": "4kqRupvzCxfJ3E5XZkyFTQmPongeujQ26A1Ncv37HRK1TaE3eK6hGHJmYbt2ot9RH46CcZtNZCF7MD8EJwG4dRwD",
  "key19": "4EjvVUWwRf2DYTZTMvAcmefV2xQq39funbCtKrG4RgxYfBUerKZd5NqUGAZCMnP6Zywf2ZzK5BKBz6hZbiTWGKrt",
  "key20": "3b7y2t2TkqAiMnrdhc7iu2Vb7cr1isjzRGSacsXYartt58qAVrDYP59SyLMcKgBpe1EMV27NuHLfcG2AWfT9xvN4",
  "key21": "3zFfNhWAYwz3gEWQv7tAjK8DtYQeusqJnmmqudhcFdnoQuR9PebnzeiTqHtbQYaJqC25XKx3e3KxQ6J2uPdsPRcB",
  "key22": "3bLYVSEp6ywbJeNvepXkonowgtDdTnXDDZbZkthNG4FqsU8aswEAzhijuXidrr7GXosZ3WHsNfYr3yTtVMMANrZM",
  "key23": "3GFZHfsFGptE8nCvwoS16nm2jHZ3rhx5EfPfMX55pDC45MoKJBmnahvohZUKDq1nMj7FBzGdBTUT2hdUhbGeyvjc",
  "key24": "56ZLMXRDANDMMLJ9EgX9KkLtT1h6KsVWfsbnWynCcsA58CxfZYBen8r3Vft9QZ2NpY99YjB6hQQ7zCkLkY8AGrEo",
  "key25": "5fPxCa1pSgghSPgyvf3kpCuKdp4Y2SPhxRKJQGqSBwPKBB7e23YvsgCuyuqpNv9QcoN8asyS1yVqrBxxkJmU99N3",
  "key26": "3prsCLKn4siMQrx4cXJkqQVULzLiKAZz9DqC6qf1cxaRYhXgbpdBxt15VLsNQPzqSR4HF9p5ncUT5YqavM7Kba6g",
  "key27": "5G24cS7wmfFMNS2oQx4rg7k87mb8vhaLPYn1EVFkHpbXgA6uXstNYSKYf46GndtHgTuvosrx9DP87Apv5ZqmiNS1",
  "key28": "46xrDDeokQF1uqyJJGEf4DFoTXAdc82M47ktUD56WXxVQ6MbyFhMYJQFiqm84M1QyLQA78yWJgG8GhXuQB1au6HZ",
  "key29": "4gF3kvUfoHuGersV8m7LEURuCmiMfGmmPqJgrU2fSfdvowjQdK7Ub585kpkXdDSVYSkhxRpKLXhPiEyURuZtogdW",
  "key30": "5BBL28iYaajok2rkQMvbVUCDFf3zbYMH4iiT7HwUwHLWneDisBioiXM92C1KX7n5DEZ4nhYAdsLv5yRMiiBJHNcW",
  "key31": "2ushe4AGo8NCqCRU5mE4egQacDGhyTJGocqjSE4jHC2Qh91VH7QyHtGXiAd3dy7dKNK1D815n8PBi5mVGZkjEtgm",
  "key32": "3jMwS96jyQ5Djh34a21LoifGdNYRmQiqgzQL3c8C4NXtFMKf3LSx7qupE5RW4jLBMkYoiaMTtNAUUUCt5xr6MBex"
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
