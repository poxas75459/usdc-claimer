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
    "aSj6p5CZii9zaa6y6rtCzyYdd6YymTRVNE2cCg7kzTj8ncjGjtf95NKfvccANvmAo4wU8FeXjcnZF9JFHKgsheE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WkYViZcYnGasFeZTHsqT1Vithy2wdGNf53neth4pkNUMD4NqrwDhhh7M6hg8eqKNtZv1kPFvCoy7tPhkg2enrss",
  "key1": "3e18kmAeGQpsPPpwMZQ7oHuDjzWprEzcg23L5fUKiejU2hVgN95991CQc2F5Uh7SNhukPsMQ2qZrBTAha3PshANH",
  "key2": "2sCMggyGbdDyZmQ5MJZ7hoqw795vhR8Mu8xo6PpzyRrRT9ruTLn2AWetGSq1PgaRnyWDhLoDign9hG7gqVCz6HP1",
  "key3": "5hgGNgCZCo7F9VhBRrw3EsPcmDFkk2wTtCVuC3m4h15zQxR6fQDdeoJFirWXicKAXZJctNdpMxYALkTvZEXCZSff",
  "key4": "4RpYT9oZFfQkKTwXZetwKPCwzPp1XiqLADdzpgYSNqERnQ2isB3UnFtN3Q7BKgRAhLFPFJ5kNv8C8A7m5xn1uWBW",
  "key5": "3qxYrK2HCEX3K5abVekJr7JYe5TyEdrQyHMrQTsP3PdbKYEpNyRpwDCw3y1HAYBhMTBoaqLme9EnpkMM1tB9i15N",
  "key6": "3XU9WxR4pkKGgVYpUbF5Qui3vY1TThLDmsYYx2WRD32PpaoXnTnzWy1zV6PDR8dkuKHyd6fPygpsMA2YNrNktT9X",
  "key7": "3jqwdgPLyzvH8cLitbwUAJ8NTned4Yag39qVwpYRqDSJWmGZEZtcSPSgGoEkLNRrtvfiUS9Y3PCJqUR4ajMNGmsn",
  "key8": "kDL7dbkMbfzQugHkQaoRTn99HAKUsfz1YcD73eioGzgHRLLaULwjbQdBSk7K7sa4FapND22RpvBpZCHaaNzKRYr",
  "key9": "5gmtCLKpLE7eXZz4hdY2fRQT9jNUdJ4DCnA4yLWpK9cue51894yQcUQh2GPjgB4FEMYzFhXTp4qVpTA6phq8bQZh",
  "key10": "ATSh7dPDDgrhHZf4Lib3eMDepEw6UgKsk9tE5DzrgrdnTWzcdpuqe5KqQ4EVx99Mrphw1xsn7UU8cJ3HEgEfgJq",
  "key11": "2HZ9yWGN8Cw3JGYP1XsB8pdVB45eon48q4kZ3CvusbS7tFit9ugK1pEFXLEBppvZJpLvzmskwMndCu3kRQprauDd",
  "key12": "4P9pxTqjdi9dhfn98E8Ke3kiRkNgXjEUAKPSd6x7hA4UX55FYZiceHUBtktPGXHYDwvXHWLVCD5gCDkg6o7Sht1L",
  "key13": "4fxDm6NLgn5C6LgEthxzqRRbAKsuLV4vgfT8EWm7mZYK67S1W5fWNBhQv2e8gYpj5NRL3GNqSXRf5FCABBFWSccV",
  "key14": "418NeWNsYdsfQpzsZbiure3FKd3RutyCULJhMjZ6FdqxtNSpzdc1c9kQttMUFj8sTdDSka1wSMbuvXiwFgWS4Ja1",
  "key15": "9MQ6uwNpkK7MywjiXGmyHKwXtEyEbFm9fkG4guLfas5mL6EUrqofcFwQGP8GEHsQ1wGYxW1jLXgbqaU5nCCTvqN",
  "key16": "4n2w3N3mpUbwZPKKDkpcLicYA84x6DMf85MBAxgtzuMRt8boWNUAqtGnJJHXTi9BJtuzF3E5LHEYffAPL8bXetbu",
  "key17": "tzKJ7q152y1SiGCdjHJKBTpbSLS9XbBuprpKurvCv1CY7CimLg1JGivrWSwn4ST2Lttugv8kcKkmMSykktRupqi",
  "key18": "2D4jhGj6HBQCFGntN5FBHAHKfG95qV4tMWZXCVDza3oA2qryHyndD5jq2wCQHZ27bPjzNkKisL3GfVm6AT8xeLZf",
  "key19": "4Ly9obYHPXCem1QtdTHZh2ZW5UZ9332wFqUQfP5YVFxFxLBeoWjVR69aSCbWrkD3savxgHwA7pGkNo2mLeJEyXQQ",
  "key20": "3DexVrbqAjGQciXax8HnMzNL7NqPyCwx9EPFVwjg9AJSB8u8V9BrFYA4CjKS5ztR7Ex1r98omzwMZSskfPtuxWtw",
  "key21": "65UPj5dxBvqZjkrxvM3zc1ZzWk3vdJqjYfXcW1raVR73EXdQ2rFmxPJ7ws166vyASxbzkn8vKcTq4mupSycgpZLa",
  "key22": "4PhZVLjCuM7mcm5LUyzwT4tk7uc2o8uc6pAwN3sAzGgv1eeyHhJevTundRW1vCbnxbJrQQ912AUeumb1n61Jy4EL",
  "key23": "46qXghVccLmooLKA86ioaQwGFePNuc5wscFGMAck5hhfh7eo9T1mmLpcCM1DhDTuoPQvbNukAB7wrvDLArhs5K5m",
  "key24": "mSsVDk6qQMvi2DG9NFguMYehWXZvUKVuDszYQp19NPYQRvehLWDQfVg1pcfJffmpzeTE9ryfJ4UaWvaCaDGdQQi",
  "key25": "3ExX4rbjQHeAz6k6CDZkERJjPb6sBnm2hykQyPmhMeHNAcTsFuy688xPxU6dfPbZka4RWPQr9F3o3Le6YP2tcXUn",
  "key26": "xkKRrJ6xqYAwVwqDpTqKqijPm2V3rFHtCwTozxdGH1tGt841BikMotTisKYPwZQWQpQ6xKVTbYLWriM82jChHxT",
  "key27": "2fmfJ528SLQz6E2QwvN1nbhGahpFJBx2dn4ucpr4dUJAN8g53wG2RQvEf2VGE9eZ6eTWmq8S6XpfQtE7ST2pGyiv",
  "key28": "2Ue4fHGgebdn9iXCdHgKDoBLy2wYToK4vLc4DCb5ujg8SZv2uXjPAZkqxfZNFNU4YbuBTxPf59MNndHKBidC3T6B",
  "key29": "aNCcwjZNC3qe7MWDovbBiP8dm1V3unSbziVfJowJtkGwsFtWevnekd1Ww4sUqy9sbnehnHNtzRiRT3jz7y7zqSS",
  "key30": "3KDMD4Vhj7r9X6cmPPp4exkZgKFox7wA369JA2K9yaiSND6LpXDM6hbC3YfqhfJU5hoPeSp7EYFf6pV3FMBHtJgZ",
  "key31": "4cMJV2EzfEtB3ttzgS9sAGMgFeVQNQWJFqnsSMKNAHt2TLsnogzyx4VGumDTm9dXhzR89R45jrE9mYCLVuRqW9Vr",
  "key32": "2MZ73At6rLXswBrG6bPCBc8duSbRMUbVinENcSmtbgVUgR5jYJK3Lqpv9xPdFzHxzZhcsUuyM2A7zGnZHC6rYrgY",
  "key33": "3hFvBLXDQAEGe54yYJHKTBaWJF6KLfp7LexnEVh51VWn5b2N3XrbwRGr6zncAkZCFzShxKmAicLj9sYYxXoxHJHP",
  "key34": "4vB7zFnBceNtwWfMqjVkpZ677xDbJtnmz1umTpCWvbTBBtBuWuhccAiwUrzxLtW6FtE1HAB2b467fqnPLd3V4KP9",
  "key35": "MPQGAQYctPu4Qq6bo5yw4rKkBW5EmBgpZK5oyw5gX4c2fLwqheCkYrovrAK5HcdtJ4vUvPj5pNHWD7Fydh8B4ik",
  "key36": "3gEjK2SdizN8H8fZkUwDJBspgJj9KTfKuCxysvgUXbCs66ibdvE1j5udxX8ytcgWcm5SbDxwkBH41SWPSxhbGVUD",
  "key37": "36MbeZjLEz4FvEQaWy38gkpuTjyETPVjJuY3me2ZpUycYFE3U6dXFfFHGeTm59fsmfu1Q8egbozwGn2Kuqhmy7Co",
  "key38": "4KcwXZfoAWDp4PyjkfZTsQEFy49yNWzz4M9CRxmMmUCd6bpLHnZ17J2PPX82M1ndfzyoLxAnww3f2ffrC71MV1My",
  "key39": "2VDTbn4whetckdMgACLtjhERUR2VQ5Sr9NmbB1WySSU6LcdLUBnWiE3sp3aUh9sF3Ry3cz94VySSoUN2gJpia9pF",
  "key40": "38H8tS7JsgpJCbo5xf77nZL3TSi4egr4Xg4KCQjgfpM6vqzQWVZThRjS7R2TA3oWKA43LvJQi6ctgSRBTjNYc24a",
  "key41": "5uoaNhVLSfwKGuRhpDf8ZnKQL1uLpwJAjuujW3Scza1EAF9UJUXDXM6a34XWvpKkoSwEtehFV7fEwaHQPkZLxzH4",
  "key42": "4Gx9r167ksx1eF5UZ8fkPziUTFykb7vrzbzMf4MysnKNhzgo75SyWnqepVoR5LscjmCcCfxvcMPu5pmJek7r1rUr",
  "key43": "2bk8d8wTbpiBfwcMM5RRRZLbFnhJGWF5rproNQX1UFWnsoPY9oQNeDk7LV4d3vToG6nT2eG3G7YYt87xADEy18jK",
  "key44": "2ms4MH6ZMpancboQpM9m1H5bQtRzFskg6KD27YSe7GXZy7RTD45bEgjBfuaKGsMcPuRHuRKZY3jV96qqsfDG9PWo"
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
