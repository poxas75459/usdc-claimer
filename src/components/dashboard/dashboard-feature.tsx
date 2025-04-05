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
    "2r4qwKs9uEWavDo2eNmXznEeiiZGXX2X6DszmriN1M2Nhx18FJtsHZpeWcCKaty1Wv8Goh9LixyZm9cvdhbamcza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BiTq5E5JsPo4kAgFpSm9fdyFqYcUynHtV4ZCzrc15gLcMCajuGi8gB3QJKaiE7t9rhcGgC5xmkiwg4wggPL4cft",
  "key1": "5PHbf7boE53dubDag1TyHvdosYibHr1Btj4A6JRKbM46vj2x7robLzW74rwpTc3ncCWSAuKc1S2HrmfoW9D5k8Nf",
  "key2": "3cdvGUw7A3XqiqFkWPRVhkHRKtzEZDCdudTXD3TMk2GUfAp65YVMMQ4ryfm833EUJpaKLzCkD3G6aEsVqBhj8S6C",
  "key3": "fzgCAWnp99ibwKvthRtb2yEEXVkyyR3dsghHBcCDA8rPfKLeB9QwfCzunzBRAag4dX911eXrW1oPmMZvFQFMi6C",
  "key4": "5hvVPAgFFPqbWxDNfepXkCND5jTy62gxw9TRyWtmFXZtXDRuUJdyjT8ScG2Bpt9UsSjYEiCXN6NDxe3oJRh6w38t",
  "key5": "4iwp4T439TywKVvRGpPTAUy9fFMRVqP6rgFmm7jEoqdMyHnUzm11sdfJKaJ6FbG86vTvn16Dvor3sMHVY78mUesz",
  "key6": "MtpxNJ4eRdae1JYcCTwpWrfUi1pigvwaffKqvKtS6tWa1WAERuFX2UjRTGQQVnLBvGkce8SSJpACjftBS6Ya5Qr",
  "key7": "5j9wLwW98LzEqjLHHePDzTvNSQjW1fJrckT97Tyi3Hyea5Ao3MUTG4UXkZjKSa43dPmNbtd5ToXmL7iXezzZzvXY",
  "key8": "4QPWLJN6njg4hAUmNfhNpWr4uLsvfRFHNgV2eThDqEGRM9gx3d3ELZam813AmvgNd64Hgp7z935x3193ApoksM5f",
  "key9": "3Zr1y1iUFFg1FWvCdn7D6uYXcPecw7yQtHrbKbTWhQrzKHsv8yScxpYEevWFHL5LSffSRTZ8BDASKuM7hk3TMHsS",
  "key10": "66xbKzk2P4ThiEDhT5zuzaGDWXkBm6NeU7LgzhLz74LCNMrN4AmuVF7ejfkeF81TmYRpRsaVWfo4QaVz16R5jEPp",
  "key11": "5e6fNRwbHtYsxhZziDMpAGaB8yZhuPozon4fXrRDrkyDLYJeQuyqcYLb12f3A3Fh6UgePLHMx4uwUaqDXCSKrZHC",
  "key12": "3CEGfduHymzrGZdABKWYDkPLJYR6MkMTzVRZ9ATbfdAgzSVKDJhWRXePjSyhrEWzeh8ShMXohRf1mHYuvURm7WKH",
  "key13": "57m84PNqXSSMehBf6bEVEJAQZoxTzSs97xGfMGxmoTz3ajbtSsN13cE1e12rQwDmBV54bQ1C1Hgo1YHHSb5T3YQF",
  "key14": "2fAr9LvnF1pNn9A38hZ9z6bWUeNvhbbpQDMCEwfuircXxAvuf6Scc2vsM6MpqKETnodtRMcAEhoWuG4RoCvoAj8z",
  "key15": "5CRQY6z2JDRgS6r3vaGjeZhKCwyu9zGcZWeMY2oRBTS6U2GeT5nbHK4ufdwzxyhCSKaMt9GDbW92hSjgjCwZYHep",
  "key16": "5PnGKyJ83Pb8x8HR9LQTXW16yGU3PcqKRtGRNiHLPaowFCVNEhyuuEFrHJK8TFz7TvHZhNaujd1vHtGoK5Zsf5k7",
  "key17": "5xDCtdx9NXCaSoFixFrVuvgwN7KPg12zdWGx1ruyZ5jmSAQ9cCXrS35SpEvb5b1PS9AuuUrR1ZPNUyhTWgP1qNqK",
  "key18": "62217dC4TxA6kFHMcUQiTakykUiuFgswngHnGJKs1M9APMUqTZhpfT7PCwFcRDNX3fqYp6BVvv3ME3vtU8QebDV9",
  "key19": "26GSPuZFnPq5WLFfVRDXeruLuw77cR2uxSaNCGwyKEipca35mw7ia79oZqN1rXkeBcLENHAJzWgcFEvYGhBj3kVo",
  "key20": "67AaoWDbzmVgDvuQXViX7FLZGwYQQzyJwbztKrWmTG7vtTzmCy9p7speLDQ7MWBpzB4cMZRh5ZjVxAXmRPCm8P1B",
  "key21": "5YBS2Qi7tqNehKULBiLkYxssaJWrymrCKvPsdwJDsVgemCszPLYBSTsVBJ93JtHEWWSWcChjy2UT5wLBDj2katQY",
  "key22": "sYpTP55arRay2LhDWakBTvXEKTKs74MZ7r1xfWKFepGa93n8UrRh7U2F1rinFmHTCmo2a4R6tQfS2QZRq1xu7pr",
  "key23": "5fqmhTj2qkyWsMuqritjm61YSj6eXbe7FYPERqze6s8vER4f4Ys62Yk9amfzrgP2j7xiLFVFZjQQZ9Da7Ldm8udi",
  "key24": "G8yV9ZDgJ9NazvkkWa9nuws2eR26rXS9ao4d7FUHJm8oKRJVJiy9N7zsT3jxv6vR4t5TCke4WdtJL2uPmD8izqX",
  "key25": "623jD5siFUD3kGdrsFtUCcFGgNPQtz6ztfaVuG6RR3MtcN5qz7TfZZcqe6SAB4otL6UEd1rgkNwFUrsm3zxTmnZD",
  "key26": "5RsryUqfPxKFNDzQWMitSGo9XWCohTNQ2EX36ALyuhKn1tpi3A74UzoRXqQTeYnLUD8AJJSxZvo4SgUPFejSdiAG",
  "key27": "2nbi2N9WzcE7QrNHxESEF2Xwcn1VnK9uwfQZPXsGQQexuKDctycCUwBMemtKzu2zzb7jskzejtJtVUhApGAobqCd",
  "key28": "5gvC7XtufVuyJTFsvs88zgkcWCXcGJiGD4jJT5Zb7tgHsKTpKZ32WAn6Zv2qFarqiyKuQyF57hijgWPf4u33uyYK",
  "key29": "287FSTWT2Grizmk1ZFcAdcbcDkTpeJnGePCCm11n221Zr419hNRwM5puQRmKfnBm1TPvy56P7p7KEwQGtDiAUtXB",
  "key30": "5TpDvctjSwRkH6kkHA5LoXwft1U4ZRpy6n8PfUmB86pgqkhc387HUEz6QU79WYjbVZtHaZ8udYWmy14b6HChnFnF",
  "key31": "2WChVaa6vXGnh82F5Eoib2JSPbpfmLiMbmyspmGt6XwRLAcCqSJpXbvoNQrQSTy9uoidEGiNaFknMshSkqJJMynn",
  "key32": "3znYLo9B6RmgsE3ivPmRGheK28qRYAA5QhKmjGzHSeHa78wekMkcm8iY6FEEDRYVRrLqR48uWRBJSrJvrAVxPkBT",
  "key33": "dBSvPTvP2UemhH9HRquaNwKGsonQkTGLxg5gFBXF17h59ZRzRiFzvkXYsk2VCQfMPGPKP3eh8fCBnA5JR7cWcP5",
  "key34": "SfgDmGbKjqDfQNZRWasvLY3bTqoqno74vp4YAphG3ZXLqGMbBdxRrYd2YyxRsAtqZ1QxYBi4EPpMc54cejirzBw"
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
