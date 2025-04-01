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
    "2g53Lj4JQrStyxsz7ipaJzSPDEBLcg7RBqzrsVFrNCrH4eg9CyQCntWsHvudWFGQ3ELSVpcpTKJSzAkQ5NuDusuC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BK1RkzLGQoZYxeBKMon16GpieTZ4emVMvjFfh1GD5apsFUYXRGLAeEEfrgkBkt7tEveKJA1gb8wiXr5mQ6TNXgr",
  "key1": "2WS4T2fF91QTeguLZNx8D2MDNjVRcF6rDNUTikHD83kMByWJ1zMH65tDj89m94FwmeRdYAB1RZSdu9WFqD8BUeef",
  "key2": "22VBTGwU5apmrRNCUZR5ifyLJSocpX3be7LojZgjAvMRxD8BP6Xpqav85sXzv4MaYkM4X8my6ufbrjkbnyFriCDV",
  "key3": "seZtXbG6Lh3B6crfZ7N2fmJ5uMWUnLjdhshJMX2KVf1yejwUKWumUhZBjip82tqbegPArwrzEDzT9ZyvyKormj8",
  "key4": "5Lc4cb2fCLH49BSrE6sySAN25ytjx49ejwMgkzqRmcYo2LCXw7rC2mXNVSxxMjrREDNZspNpv4RBBWCgSwqYvMEB",
  "key5": "qfDSyUJZh6fYsj2KJDQG3gqEWKa5rDM2oFYGb1Hu3AuGcJE8jaLdxhykBW2BdKYfxZFAkDmFvviG1jrVc52it8E",
  "key6": "hbhYvEpqPp4LZKL2qP5we5NzGj8EtT8P3C6tX4nduaPkMKfSAfTts5pHFuPRKG7KSBeiQuLUGXQ6a7gUgcJad1q",
  "key7": "1twp2Q6EjPQghhp3ZNUnGYvnVhcgHgjjndb9AmCSRovVEgresXnxeQCLX3toC4zz3FeJYBRgHbi9kzeGj6oALks",
  "key8": "27wufvwxki5VwRBHCu6cLnxcXvEUDguLiG97pRmxThBvp45GK8KvYP9if8J3ExVx5T7FMvaGgN8njBKBMNodN4sD",
  "key9": "2Qg2U9jmq2kWdJHTtn1LUNE7jABiybiYLCUHjqGDLwifCiaEUHNxtGyMUDB23y9NcH1kEhh2y43TEp3hyT7AMfwF",
  "key10": "4iSiaPXd4KK8bP9HR2tDxovDhtoCbyD1sHQ4yGHg2uB9oEzCbrQgHVgz8YABd4NdUXE26XdRYZzPAP3zPQG7twNS",
  "key11": "59M3Wrj7mkUuy8A5RQkenBcwSJDwSXJ48fkCJRu6hyT8qY5Medy3BzDiXk5dwmvTN93UvT8aBk6yn4kpTBbDazqC",
  "key12": "3rVnLGxMeaM8fcr7UDSJWuewGhFzhfqiWCKprvEAzhq4PAqPUX2BGGyk7m5tx1w6cbHgQZtqvMBqSEiroDc8Yak",
  "key13": "3Mce8XoyuZo5kpXwVGyC84Yr1dF2WGDZdPXpuSBxphLhz6AimTq1tf5mkZe8uUU1uXn1HNagncYiht6RjMq4Qb9f",
  "key14": "9hzirZTTjp29Uo3DGG43nf14CioKGvep1o1nCvDDMRugVNZaHEvTNGdcsCUq2gjLc6qgL49gWWakvV4uskC9H1w",
  "key15": "32Qypqa7j2S8cgGzYueex6adhN6SVCEbAZpNUzCjf4Xfka9VTWiVk95FdV8FzoePtsXqs5P56srfKhnzLi8p3JVB",
  "key16": "2uEpq4x4eTkGbnTmwzqNBj2sfPJsBYqHHPE9UPpYRsi74J6sjX5BikwAcTnZhJNLfGGKnkn3PJqHePy1M4kiM3ZB",
  "key17": "3NpFX4jecp6rihjRJXqdTHrqQ3CVQnnybcfJfQjjrQYsWWWc4fxbBtzPcdw9JsVgdQjcKpMEEhbQHqpwE2KM1kD6",
  "key18": "4dBNGcPrar6umHsRyte75yrMnSF685iyhUFANvUVwRdwSBkMuJ5KpBAbuf157q2XCW7gDF5L39NBKmMVCR9JKYA6",
  "key19": "Rn2s6rEutB6tq3sFsUKe8WphPtyLpufoRXHJetCYh82oTh1UaSZ4LqdKab2HDw6BvowkksWhPCXCQCeMwRP3zz1",
  "key20": "67Guzsomb6Hq27g8z1ubWZwxuV3sMumXFNPezisUiFdkcz6w3xsHvD5XRhyuozAS7YrmbeKZki33H22gEkFmahfb",
  "key21": "5rRKRhUBT5j4dM593dfiu4CnRj4QyFYcZyCUYnqw88q6AN3D8g4NewKFcKTr9fgzWZB5agDGGNajKZqzvUQmptY3",
  "key22": "4ANP5qVHeFKNUAeABe5uuubBnkFgKp723JW7UjDxHes8aK2JkaL2L1v3npL8zeEK5aLfHLrj5HGTXHnazvPXXv2J",
  "key23": "y2pPVUgxsrMYpa1iz7xs6zq23U9pBLmNYsDQjHN9VfEebaDNJQbGWPNHrYseWE1v3whU6mbB9u1BNUGUWXJ33db",
  "key24": "5mm3DcQwhEiofEw9Bs4Ka9fS4gSG55U7pZT8oeTEAeiYouZAyfSfDrvAwmnom8MJRdin4aEp9uGrk5nRBVpo7LRt",
  "key25": "2oXLSDmNtQ7mKGxBQ2n9WcP7JKG9qANSpfvMLQzSD8r7Tm8dYkPHNT3qK6JCeyJyE2EdaGbhyMwThMG58oTMJFMH",
  "key26": "45oMX1js7zWtPXK2TtfC8T6RM5RqWd6kSzzWTUQyHbF3ysCzefszrfhc6rxexQycCXv5egNRmLWqbCr1VhNDnWF",
  "key27": "Dc2GBqq4rC1CykpjPJ1nJ2ZPgNb92tznLCzeTcVNB9nXt5S5c1HTrAymP2MHQ9HzfT6tczHqkxypt2jtgwPspJD",
  "key28": "3wvpbsxTSopvgMU2oRPD8zpSdDz6SHxMnaGwKvVr4uhkR28J6ZiTsCJfqAc8CoVuY7DJVwFS5fZ54L83CDPN8555",
  "key29": "3AfUUGdr3SFJ1by2mgCfUjpV6p77mmfba9q52JAb9oujx9bfc16KxBpYSUVoji2xMognxA1jWkwTSfqCRsvCaK6J",
  "key30": "55oAezXDB89en4Ci1yUJDbEW4MGmuW3LnG8NMY7hkvJJziN5w8istL9157ru24YJHaWSQsPJ8SuK1wKRezkQ2Q2T",
  "key31": "33bQAt6GJFHBNPJCNPvSxxSvnwsyiVCXDbz48RtTZ11dVdtTwerx39cz9QijhHzcsAjdzfW9BfLjGtvys1tF5AWp",
  "key32": "21XTaPMt4WiFB1jZGSDMR1FHhxt3AGTBhqgezoPWdLfSwx8NUkWuytDf2CmkD38DtYHnmhSGniHXFyYcXurp5wgS",
  "key33": "3BaH8jcWmeSRiiKCGWPRmhb3cS9iT6hCaJj9bfRSZqy8ffFzA4kNcaL3qZjXwndYMxp3mMChDfKoPf8oyEZdNbrx",
  "key34": "223auC5JbDzZvr9eedNHCGHuX2jyJnKM5njAwMRW8Wiq5Y5BhzBkssDdSa5YJWDq5MFeHRUkUrHbYTgucvWseEbV",
  "key35": "2zXPt61Rjf3rE5zcz6LCfqCnvzBEwv6ZHGJwoJYedPMo82MVYkkMZH7YeBNHr6vPVuiFurm9jMBy2T8CotukYRci",
  "key36": "2pHHjZszjDq7Kz5hhoJuG4SHpjDAHKfVJmfUuWAZCoD2MKiLQyvnSgFbbw5JJUzGuNYfNxDpkoAYHPZWXEVtixLc"
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
