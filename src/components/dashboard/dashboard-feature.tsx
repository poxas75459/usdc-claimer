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
    "2YepHPqTt6uW2yvDGepCJboaUJgTtBewg8f4mBt57KLJ4BddNyteNAWoe68y2g8FqBHicQ8PWUyF12jQKPhpGkx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oQNfXsRFnPwqMwydUvaGc36K4BA53EocntJZNAq3n7qAqmPopHViq98FDrSpp6m44FNtVKxvdWoQcLtnACUAzkE",
  "key1": "5xHXPNr7jFq6CyNbR7LnzfNhtTXh92pmzrigFV2CXQVe7qdhr1XcRKNRGVKzosy61Fs6z1AJRwotJBVM1jLiy4WE",
  "key2": "3fJjXCce31KmMYyNsMobEeyF8DR9bFZszScJiJ8h2atEuUHBjiRsV3xxwYHDxSryoUe17ie71hARoXPWQiuXKV6i",
  "key3": "3wnZGjy7QLKdpCzdQZNXizR4nrSu3zsYRf9Npu7ckQrfsTK6F4DdHQ9YUHW1F5iBpn126GpLGb6eG25SUAUARnn8",
  "key4": "3mZCwCDzjDuUDHyMBdJdbVuUmAntMzNpNDBYS5DL2W6dHhuaQQ9sq1Rcd7obNsJ4eDX3c6APV5x8KSz43hjbJmWk",
  "key5": "4vLQARzWQJDn9ptxonCDVYeovK6M1hoZfqQim4ZP8giQrZPteC4XoLKctPdz1XSD52898vnzR8uimNH7a24knPj3",
  "key6": "2bKYJxCm1KQ3xe8YrYFQX2ja6ez2Ru1ob2Le7GGCEbzheSiuLjPZkiayUk6m8KTVnEr8Ukme2SMwEkF2YNrptix8",
  "key7": "5Zn5UZQXxck2ij7UsG8LnN7X6Y4aZL9U7jkMRNBhvVu8FGCUot1jdocLJHxgZyJqXsUpwegQNfkqugt2jpf2kVm2",
  "key8": "4HyCewG4Af3VFhwhKPMfHMhRXnWV6zUXyNx4Vd7pT6NpnCZtbGYYECjDWFcEvQmueXTLCm1QP4ZpnrBdn1BawKdN",
  "key9": "5BDqkcop4xGw4SRD5KD9HaJQ1diUaAcF2kfifBs4PTDkwxqehndR1uthQUvMUiAbtYbdGRCp7fW24RGzyZ4wnYyM",
  "key10": "5DJxrMywZ2eTjtH12SEFsqY6bphvm4YxDW5x4r8dBuZjiZy741TzTcLUzKYSq7ppAg6Ek93i5oDQjRpsHvuNApA1",
  "key11": "23XvurhuotokPtjcLZNsmEdD9AhNu73dKEUJzuzg36rsMr64tQbMLK7qrXnXrd8pKSWvpq67zuGuWsD9evvPcTuB",
  "key12": "4Myn7cV5GKoeKnr5Eyc15oxk9mcWA3BSLAcMqLGwPcKTVuGhohFaQkoubWwYvGin8LvgZEFzEAo9S9tPpthQprLg",
  "key13": "219zc9NAs1zcjwRMt9ixoiuYLQWmmxuvv68WaYgB5GWEmqezUuYn54CTkSvKpiiHHGU39Mzua9uxFapafz6msdei",
  "key14": "3kjrQCXXg3cVp8yhy8d4Qq3fV2jhLvfJLnLKkjxaEBVrQ2tbQjuARPSwm6YSp6RvxCn8QVsTLMFGZSow34wp4M6F",
  "key15": "5TsfHGSn1WJuDFdxNKRfQX2cWrpRttq2e5wCJUjxKCx4YuZ3KpEYvdtowEGDMj5ah8Sz5LyjWXijAPYsZWJXtziv",
  "key16": "4sGdEbjZV7o3Mw8ncYm2HB4fhuC1aqMRiAuj5xxP4YnQGhCDvQP5mhXCLKJpYtt5kN2MrjqcpUHdRJpT7UdZtMzS",
  "key17": "duo7QD2wGNKroeHmahQRKJWUQJTMbKZuBdN8v8oQA8jpkQNfKUG49QqvsvqB93qh6EBXDTw7HjB8Jbphi6NqkoW",
  "key18": "2ukbBMmXyaRVmzzzjbswAgu3gDK1dyDHHFwJNohVsPfCmLX83dGd1Gtm7P5cyGeLnn1TxPMqfSi2quckFFcoG5iY",
  "key19": "5bnWQHQrmeCcGss8BscGJ2kKnb2YKwmsu1BLCFDBYVV49ffx91MsC1LdmX5wsV2veLccWRtBfY5FTrUtAjdR9paj",
  "key20": "3zrEgBzWXXecaskUYsfog9w13V1WYqLya8RgKQanom6YYT7reDCRWEHPReHqh5qdXMZsQnY1xFvUXZs7jf3PH3zx",
  "key21": "4ZCHDkgTyCS7HXmUmHFgsuqZMm1cSsvAXjEN9CRjjcBLGs7RYEPLvrJQysSuAyo9JvZkib3GorgJYhYAmQ19EU2K",
  "key22": "EtzN9bFVAGvroTEMmknC4MnnKQ1MMMb4aEguK7yb8CVhVT3fnQodb5ttYu77ucujVXkuDoAxU5Ph2YRjkVjXSSa",
  "key23": "2nuVESs93qkFedTgvYRahCjgh47AmDYgPAtoHgq6TNutnQHSHaxn2WZ6yLskZRHmABv5hGTef6hrXgSVRo6bWQBU",
  "key24": "5NpwRwHjSnmyRukdtA9wVFTMWU22GGyf9gT3Lvd77bzdKo4mc1z7d1NUxLirbgPKT9XmTKTsiXx7Khd7biMmaAuz",
  "key25": "2KMRVNGpCLdJ5ypLq2WJFHVmbgPVEvEjo3o9uKpeGmcao5LJyD9TjczHzfrWFGkHaQ5ZndeDBnhZDHN94VQEn5ii",
  "key26": "2NJuVznjHwSEKnH13Wc8tXHu1YLASkHdQG2NJAeDQbMNp53by5dUpRmywPBNRbvmJeFZpmR6JCmKxy2zzZidHRQc",
  "key27": "HtFTvayghKJbbLkRtCeFfssLqr6rVuCVGYZtjhtYKenkUWwqJYQPBdwGFhnJsZgykhiC1VsUMescGkJ7WHGFmb9",
  "key28": "24fTwBy3ujcz7f1cxJ8GW5p1YPKr1o1hzzQanfHHWzk6Dg7e27EokkJwzwbfTff88HprZYgg1DgUzGWu5LW1YyMr",
  "key29": "2NFAFRvziJstUgEGbHePHWP5kFuw7bF773iQbKDiDmL77zGjnmLqkFWK6u8qSVbmMHgSehxmEVTMynJbgNDAJxvD",
  "key30": "yazCrXwaDmk3CwQdDuhrhCHcZUvqLzyJEQar8Adxd4giWK7TFgVAPuhL2Ua54iZFqjmMf3Pky2xTpi9hQg5FELS",
  "key31": "3eEcr2PtSFFwikyYHKKog6goaqD41k5rLnp2Ht6V9J2r6p2H4WNFAK8h8noieZCnZWmG4i2FX9EkxvC1Q1d8xvU7",
  "key32": "3uofDkU7owfQGSPVX4HNm11rvcsgizNw9i4LVJbntZDfGPZDgDJ9AKBTCuKTgH2bCAMuewn7QmhUzHAVe4LdUJwt",
  "key33": "36PeWW1H8Kv4mohyTZCYwUs53tjzLaHLXM6sPufMjp84KjoLVjVRgAHGnyoskYFh9FAtjTgStbJqE54TUuxVeqvk",
  "key34": "619HQj3Z9596JZkfqm6fR5QswRbsj9hoWQDxy5syfTFB8T72iVvuhbzjDgRJskS7xrjb5cvv68nJZ7DcDzR8ZCkd",
  "key35": "3ikguRBNoSSLYncUHckXvTtgpc7uY6ebsFnn3tKf7juijxAD6q4Sc6QfM64nqADqN3nLvS3gSMUe5xX1fUtJVYix",
  "key36": "5PGLbYXQgVoaTMZcscyypfHGEFj4dSBXipFrpg8C2YPpFK7yZokiccW4LaNtnK1eprd1oGa3wSk2PHLikV8Hw9DT",
  "key37": "deGzVVQ77CYbgXmoJFryZf9AVWEeP36srEGJH6imHxV8Q4NJ1FDodt72FLx2oFHMpNU6Vx5CZoEKiwHGwcNsrj2",
  "key38": "aoCHci945zgQnPDscFNGQBjiug9o2oF3nDm2iF7vUDFajcDwftGuM2RZLC4twGyBUX2YCsUGdWgrJX6as9KVbsx",
  "key39": "4vBdvhU3fcuYrLrzRohKnfTMVk7bPDT5BEbe8BD6z4W5GPE8R5ZMjd1aRS6CvX4DEyvbKB168AWaJMqc9rm668hW"
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
