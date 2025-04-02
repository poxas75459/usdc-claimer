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
    "2hChmueBoFg3twbvKdRAmbJG7stDUuB74w3D3ykfyi3ij7Vsyn4fAM7cFcWRuSYyWaTiKRbXnSHzaJQQkDrRUYV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V4bMB9Dso97xvydotTBwMFUuKzTg4EKaqQvSUtGcEHPzRca21WrYdnb9ymvcBhDZ9psyPTEwBwrrvbm5GN15MxQ",
  "key1": "5hGDryPNJMd9C6bsceQZ6qCckeoJjrVPpjgoeuYU8fbMMm756AQwA64KuzB4d4L4x3heXynBhepX252DDZQGD7me",
  "key2": "2nxfcZezRdtpAsNsqg6eacVDJ45oDHJ4TUKrPXgDciMcr74KJhmSrAb3GaLyAbRRYCGPd8z5ZJKUZ5n2q8ekH7bD",
  "key3": "5Cmr6fBmWdABySaPComZkBKN8NBincYgajPVVFJawWxQ3tzmZYetjwpUHHqqY33gHhHqCGiQEFXLeJ4F8AmY2MuZ",
  "key4": "5oeaSssJvJceGE1KVY5k6NtUNezx8QCmwNRrBZUsMaVkSqNfjwARUeJ5iTq4DsX4TcxbsW3iExrAfLtRtkGiBh9c",
  "key5": "4JCKUFsmgUeYs6rrPUZLzfLnpFLB7gkyE5TJS81PTXSesZByr7d3uXS1z32WpWe2Pv2uy77HYwgGwabpg1pY4PGq",
  "key6": "bHWL6MKV81D7FUQdw4LVTuFG4Pxch1NvDdHE3oA3nMTzHh6tkvQ587QLwbA1cUn3mhtRHatqbGcxYETerWH4mid",
  "key7": "5fD2GHHmafkrRP88HYPMnJzdtXQnQenmtpPRhK8NMDQANAh94AMm3GqKRwTdGbCALRgCRmtidCMAg1qHMBiu1N5H",
  "key8": "2EPUAW2kjY6YHVkNPrcFVXAhc1L5M6ByQ1wMATBCv2p2mHURL3jnoYm2J73XZfZZcamREfbZRvPrqGB5azKCtTRE",
  "key9": "3e1XKTLbDw1rYwKfdV1LoHfmQJ9ao5kmziZsc4HfL9JdRjyQS23FVC6rN4sDPC4m1ewb9atpTFHL9i6jAqccSMVH",
  "key10": "43DfBdLr9GWyboNGu1kLkLGNp2VhaX4Ne88dB8a1KGbRs7vi5YAkgcA15NhV1VXhNQpiyJbUti8EkBbed8RJX2kU",
  "key11": "GRJ7SusdRfUuJE8Dmm9MbT9Jr49SzvT9nHR2N2HQUwSajMT5jz9NWaDRYs4NHFm74L8BkzBNzAjmCoGzSu6zWoo",
  "key12": "Mo35doBwt4D5bqNNbtgxy2LEVBZeFA67T3PFhJBgDgvo8HL8AyDc9fd4URqtZLnF62h9xN9Ppmub9A2zZUMqg9y",
  "key13": "5cmcmtWaqAhTEzPBY4UsCTFA5vigipqGmqhm6ZZkcpmQqkJaPArcV7PvFJCkCDPz1Yfk6vsNkXow9x22MXou7akw",
  "key14": "5VmzTvoHzZCVKDm4A3oxzhwZpm5twryrrxLKjQTRYeuUgCowK6RaEYwji5F9uYoCfkruGZNVMJE1i4p7SteciqJ",
  "key15": "48kJgVVdimC9hJiPPuxSenUC6oaK2wui4bjfo2zjtFJrYbd1Mpd9DMTbreTda26RAx4NJ6u2k37DGp9J1t6ZReT7",
  "key16": "NfShUJ8rnTPf3QJ67h9PnRwrqp1Y8dkQjbeMrhPxXoTBm2apKbaZCmcYrZR9j1QaFcviGJ3h11gVLuFn9EDbsdS",
  "key17": "54ytsRPvDRPx8x7BQoAuRNb3Jkp3vBSLf812pzzx8M3767KgPihHd6TAE79PcXwcMMWmCmrfwcqmiqQ8XbAYQDDt",
  "key18": "GHGfca96WCGk4v4Dxgw4Kim3qixHVGwT3eDYv7DNLBVX7eTXVoPMzrFoucfP2AezCezUJZZwYVSjg7aj3xJuvUE",
  "key19": "3KNhGktEDXNgx9fNFNAsiMFQ5mk5bi7geDZn7JkiBAGHqtpDQ816gD3Kej9qS59wEXwHYe5n6dSrS4HV3qwtgBn4",
  "key20": "wLVue2qw8VdofrCWGJyg7erXxCgVFxAD6gZVxA7hfATHXu5YBdPKbr6gTmQ786DkKuGnjH7JLkqhwV2EY82wDAE",
  "key21": "61xaeNus4VinLjNNpqz3wnVy1iyYoV4fEyR1EXyi6wukD112nZpppPPQHPwR9X4zh2qRHgf4nLSm2zxZFgUEGXVF",
  "key22": "cRXNBp23sEBnb52SfjkEZuQuGX2fzaNqe1ebNPk7JsybnJN6soeWJSTsdgj5i8kdqTLtsqswae5wF675YXYzQnn",
  "key23": "EMzYg9mhNRZYiNCZqmFFYwZuKNiSM31zShjrtzmhKqGpjsrNABkyN91Qu8ReBaSPooavfZTEoScHmrW4HmR8scM",
  "key24": "rxBFD87kLEAKMymhiyxBj3nti56QGkJxGawYQcMZaxDEQTpPMawZ6YLx29MVvmHvpYZuCo31ay9pjkuriaDGFw8",
  "key25": "4ZpCsdUVebG1SgPfLiiP6hEqjN8BWcyQR7xH2BhyVoxY6trmGq85zQssdugWJzLi1bBvkt64rZeDiYtpJ8b3cdQh",
  "key26": "4qWiWShNPLTKqurRxf9hzrCXZzZDrVnwsHdij6RYRTY1bWEztxpv6HCBReWV9VhwTPfbfLqyjf8MVHXY8DU9hvne",
  "key27": "4FkfQsMCSTedat1cUfqvubLctyHa4vQcC4PoojErwup4Amt2ggNyWrJweD2kMaYkDmet6BbxMdAgFKA9Shq67NE3",
  "key28": "3pqJXZNdnH9LiGE7fvAiLJMKPUfoUsUPb9AXQjLyDiEKsLruKhkh5326P5BLGvrwS3eiHYWYtehuX6oeNKwSe6de",
  "key29": "51Jk2ea2vhx5uFESMKGPPTh5tgM7T6TJycn8Vq8yRfnTvUqrL2hsm2HDYGyJ17TokV93EtYZ8uxmkjMYgpRpENHi",
  "key30": "56YVs4X15M6C1jr7Tpc71x2FtwqhiUR5Hya8dkA349aMd98gasyfXg9bT46DncuzVA5tHG933KgjfAoAnP98Msb6",
  "key31": "4NTjeKcsSEFNWdxzMbNQ1F6zrSL186fRCGcVQWMWoujdHCH8P8oHtnCmzD2hqRhrqRon58dfTuzugpjJCM8KtJuv",
  "key32": "3BSTZKhRrymkm194NdUxyreFDDakEG6f9BZzChSsaLBAzk7x18riKtawBZhuYEdszvu6KS3ZvtKbWAaQ4dQXYRMt",
  "key33": "2Kj15snrbzW7dLiMtp1dnARAsednkYn7NvbBitb5k91qCJ18mo7qeG7mpwgDRtHgTK9vyoJEH26WeCzMoNAZ4ozF",
  "key34": "eqBMBw8BXFhTRC9sTDWE3WwA1BjKz1UQprA2zTc5ThUXY5yVPnvgGapu6w7fhTBUDVRnqftgCJxJVHs9R84VJzk",
  "key35": "4QFhCSu1PQQ1HaUM6hhy75vcKaS8fSr2wEiZjFPfzoHRVrG9aBQnoHfVQNUA9q6J7S6P812Ky7Tqk622m4qNPKU5",
  "key36": "3FTiAGUeptk4G5i24n561345MC9UeTan2XCsWkKk5uf7JJXbDYfVNpR8NUCTL8pGMcVoDgGxBiVhdJPPSq4TL33L",
  "key37": "539Jb4N176k3kYdhJYuzRhXiQAJTJbak4Krv3TREe4Lr7MUQf7zfA841ZoS7h3iLoev1JmM7gmHKUPq9rNSJcxuU",
  "key38": "3SbGRUtNjYh4RKrgDWws5XHdcjtkLKBnNVU1P4MAH4aHCuYgoGfM5qgHdo3TB9geFUSWTb1yCTu1nCuW1QdGH3eo",
  "key39": "3yPEZyQQCRb5EzBfbKBLhE8m9FtDgjekrBV4tJqYggAf5ALmEGthLxRa6R1tZUp5FN48JpvwgdwaswdmzoVWvXXc",
  "key40": "5guFYqf197oW17TAd62eEZuDofQCTtF3LRmaosgjbcEo9Dne7gfqeVECU572d5oKFdRHu9NBwHkJKQMVfbYBZfCw"
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
