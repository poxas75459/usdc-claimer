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
    "5y7mZHCa4aPfTpE3fK6qZvg9N3Kca4hskGZKsaYiRtyqzwJGgmLDojW1CqMMsqU2XRLcMRdfm8Q4d9pEHcDUTGd8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LybMreiQcZjBaBm7gqSapvczzojhunkkA8m4H1DY58R5SFVxtp9idTH14FEdm8qT3GNoBq8rebfc64ymECaucbx",
  "key1": "3Z7MjiuR5BWDNcSdW2T1mqznPTv3DTTxXGwV9sqkvP6L79xRfFdvQankgLKGXD7naR1j2ZVqsREGB9mWzJ6rn32x",
  "key2": "4ja9AWWtGXRN64kdmipWPdQQML6u8VkNyu5CARAuRXLkQt65YTmudj5EE5UdZatyZjHhttuGpJrm54MQpkiRhoYv",
  "key3": "5Cij6Cjbe1f8YptggW5qv2xvMuNDU6DKCjs6RdnEfSgh4LpKSLrKCEsWkhj1xQmUketMtRsAXe5jwh1dc3xjrfeC",
  "key4": "4LxTzSmB2WqfoBxUwXGWTSf6QaGEn58472XLgaEYunRjVXH1pcouZyEmi6oX6c2YdoB9yVawsCfozwktZq68q1Rq",
  "key5": "36YShf3Y2QJhbrnGGnrVjqzJb4JdB1X1YaQe7VgGXN5uko725zCwySzoG3y8B5cSMELqmzrTKLnwyFkgJoKuFRPk",
  "key6": "2ieEUMvfHVUL15dxrwfSVGUQHUEFB5c5J522PheBGagN7j6WS4djWZgXsFunGhEKFG6ntpAzCRd5eQLkRQWKgwe2",
  "key7": "5rfjG24Len4hb2HpMkbVbRABJ4P8BykvbX2wDnBvyDAiRx3i3kKu5HM4vpNKCPL2aBQRLJyryBZACsj9fPTpXdtP",
  "key8": "2GDxeq3caVcwKTCJyiAz6pND1Fio7CAvDofFttaQbo1Gm8pSRqZE2WNd3jZzLAe5aq1Af3ZZzbLGwnhvJ1ryuJjc",
  "key9": "28iseEzR6f8BHvJJDATjrX4r2kY6NUK6BFb5DgRbSdMvKsgaVWx9BwvQX74NUtQfudYGuUrXTjZF1jHjRjrAYRLp",
  "key10": "4a9k3UHvBY5ec7SkW2D8NoQyvsQc85LqjEpx6RqztPiJtKsz5e5B3bHGtjbj3H755sRKgvCFKx3g3XsiVjQkvhMb",
  "key11": "5B7L9LVfN9XY65JegWaz22sqL68c4W47QNWsjQewVMQAa9AZnyJvdho6csBVnBXgX6XUVPRxmvKiTbgcTvRftUWH",
  "key12": "2vsPTsBQeoA5SLUDVDsTvSiZtBhLB1QDXe2mncXGi6UWGfR5SsFgWswgx6PovB3DEE5W6KkTKuoiT4pCc23f1v1D",
  "key13": "3VWrjww69eVqYJsmHoAJiS85DeA3TwE4nHtF5aCn2uV2r19rjTc6e9qoUSf8LfeSU5jbJ6BhPzm9VKJoaMCZkF6z",
  "key14": "3qFtuHsjnbmSnPkNDGEpBurkrNbzzb9NsdgRNcdLPvSGfmmvzwzbfCj237xHyHbekwHNExcaRu8yLzzXwHUdyLya",
  "key15": "2bHmahZtuYFW7pDmvSoodbyhVWfjf7PPhWPPwiNCtVwQr94VvFxVBRMk59n1Rq5zHFLa8qvYa8xAVBH7HGErHWFa",
  "key16": "37EhM72eA1sEbGrgrcLL1MhBh7PmxsGPdDsyNcDBWbjFxnVuBJY3PqAdvqE7fWQGTgczCyHrnN3QYiEGHyecWdPf",
  "key17": "Ai7EeC2cSQJEKZzz2BQehndVhYTAAok47JwG7CKPh2XbuTkyckkQizx7es2Ws21fwmXPA7Z7aGpaGU5BY3wbgcU",
  "key18": "uzdWHAEXjwVyV7DuRSF3fHELX47L3MbgofA8kjrC2kp4xG6nGqZzejHuSfbzrQqDTBwBDw8NjtA8r2bFjmVA8qh",
  "key19": "3ju6rqq6x8hvq4XakFKStLnuj9u99tU29QaAsQoKovrkjcfurs3R3ezRmGRhHfUTEi5cvGyccd5AT3tEtnhXwQLp",
  "key20": "3XWrwHMVKoWpRxnRHQTyJmgo9tDbavZArmVL1f6zD9QZi8dsciEjaCoX97KsqBSzmghCy2o3T3EZFHFnug4ivEeC",
  "key21": "3hbLLKpXfQSHjEzG5ZM5Q2HGkeQzCGhi33JhCKU9nUHfmRbfYosR1deAabpDfBMmCD4eMs3z8b2CEsjTYhGQqaZs",
  "key22": "3czzUoApUqwyQgGozHdfP27zWTJsENqLu1jJeMY92Qqqk2ur9GGKxN1VZ5JcepzdU2FRnFaqr7cqa6gHQxfo7pYx",
  "key23": "1PkwTm2c9Rjo9NGmtbEXTsaF21BnAQngVgD3NtDYbQmaGP7JamXJd3836siiHGNLQ8tnARfYMEcosf7gDDPru8q",
  "key24": "D8phmpjt46AQAmW3gQmUkUhYHYbPrXRdsuJBAFCzh2oNvciU1fRsjR1ZGn2x8aS6RhLEUvhh5oDGe632HFVV39N",
  "key25": "5kXcmaYLNjK1SgvJyAEp1nt9nKJ5gV6aFqCL6Y5nj1k7KsNnzhSwa1mo4QjL6BPG9vi4rFjvExyqfMoanENHUR7G",
  "key26": "3GcLK78b6GEQmeVdrg6iL8H79q3qVEqGSW99rSr8J19231k1sbVmD55VNaLeQyjhkEeyzpJ9QCde1pxWkZkB8pV6",
  "key27": "3QNGMcMVs2wH2zAqFVno2HTkg6rB6X52wKGouegKCn6gFJD8Wx3B1KGxJDSwimUpZGVVek9uVvpkTmQfVbk9DJ5S",
  "key28": "4EbdhLgcKsLG1K6XpvS6ncmToedbFGf7ycsQLA4oag6vbbD3EA43i2Va6tSA6BzQsWXPWrkH3VDFqYspG86Zjdkp",
  "key29": "4mVARs3EWJ2ftNfpiBMdfz6Hg4no4J6oZBPbBXToeVZxrn5P1ibEbM7NpcpuFTSGmiCgsLKPzZnCJS6ngYnDFYA",
  "key30": "RqdCG9AQh5ERHrg6NU2x8fuYnBqb8jkQTvCUt9s6muwxBx6iAJFLonYoigkzP7PCWa7eJQRFJoitkiWADPB4haq",
  "key31": "5pJ1HA2BkWasaUcLQ4ckykvVez1Y9gRLBgrbKp75aEucg9av3BWQuw4DAdoDaaRyjUF4t7Kz4Ht6yw5G5G6jyYQf",
  "key32": "499yQJT8pxFh9njXvdX2Nzm2dC5xEBnw4JG5GKcAwrhwL3ixFNQG8gkjD8SouC6UQx3iGHjW5uNgd2C1M8qgcae4",
  "key33": "mhecg4KFFe2YF3Ui5CfPfvaPSN92XRULmh7rVkXbppd6qW5jE2Lanzmnmj8Np88uaJ9wYyZ9H74mAUF6Gnnjn4V"
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
