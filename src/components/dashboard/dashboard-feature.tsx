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
    "63rPidPumb52mWSvdXoHAdqDEwHKPxSkHpLdGrSVfBfWAefwcDXN372nJN5hyry7MXRzVseLECfrndtxXU2dGdyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z7S2insnGitT59DFND3mEeqrZhdHCWCEN7zoVt1uKbUFcoiJ75JC6ReVNCnp6ybrd8W8edgLezkfYrnrq9Tq4XL",
  "key1": "4FU69okDrDLgkyRxY5V1hcEecLuEqs2AAXBMxGCi6p1UbvCYnzhXgHDAAguTV85n7WhS5CScPVHzBAQEG6H2Qga4",
  "key2": "5vV7w5bas4x4AJZNeYQGTYL9SveaTBSEs489EE95Y4E5VJFYC1FLxWU3jajdw3SBgVyAwkWBbZbU2LhVBFC8rJ2T",
  "key3": "2vLQEdUqbTb69iNFLRNGt9fm1akWmqNPFPpt4xEVhjiGMP1TM6MwMu3YerHzXWBY7R6hQpLrUX4o9assSuNMDgGf",
  "key4": "4kj9cZY41PAF5z5Bpz2YmwTKFTaJSjXzcwLjKEb6YVkoyRi1LnrDQHW2i83grTSQRHadfftpvocFvB15fLgsMB1h",
  "key5": "3BceDjtCcBCNQS1FxDRH7NfnnxCgLhfwxccYCuQvhQeN48Fa7zUdKaJKaQbNo2yf8sTyCcUoD2ZDihTyFLeY1ppP",
  "key6": "3E9mgRDrbuXAPnG5fkgNrGACgKRG7zqGEYPyuexab1vYRrKF5vBxCVHBRF4UrU3zex5XEZokzrgnUWWRyg5pKPQs",
  "key7": "4mixyLC52Fi92vZD64NYDm68zfZ6onxeVAq76ABZD67WU3dLm2jEhwXhYENXNARNDAjQY7pxzNuELmxvt2UzfyUN",
  "key8": "SZtHYjWewsmZeppfvSkZwovwWQtgEmWDoNdkCfLuAkfGYAWtr2yDEzgrSzFt5RhAYo4Ks5LgFvSTzLYofUDpDhD",
  "key9": "2u2H9PiUPsRYPSFghTeDUybbVYUvv9Vt3K4YT2iZV9xo1JpmpSpxmCrNz6ypvfZ8KNm9V22wkA6krRJb6okfHerU",
  "key10": "2FhwCwzwYS55rdpXzeUzvMu3nnLToMjpGhUAf39FDP6MD7dV1j6hm2GFtTAMpAZYkjyfBg4zfRKrv2HY9woskUpW",
  "key11": "WRdEExWbqDqKWqnD2NDzRe6JSxo6edduDr8dJ7tfrcHnqhCXc9DDSXp9SHk6kHVWJgt9sCoCNdc8PtUYMLN1VYc",
  "key12": "3DvGGtNUykZmdh4B4LVXggMu9bcycAzcAs1K2ie3SVgdxJprT5ny2UVgGiAjMDrmVLc3zSBTvxNKbScRYQ6U3JbW",
  "key13": "Fws4xdUuTb69c7hh1YeaafjGZ5GL2saGHSpuXJh4WYpdezqRJipbx4he8rk4dSagBMXUZF6SkgoBBfokb7pLC5U",
  "key14": "36dfupZxNMSL9CxtYRhBi6zKYeXpLgJV6Rao7wBH963ZWUsVVyaNB7GkiHGT4Uv5KYbnzayGpbdodKLrgV85KyjV",
  "key15": "4YqLoju34mcQwTRW1CxZZaz5x8RgX4pVEMBqX2wn5Xj21vKsq88z3BCYJmnvpLfk7eLpiKnACLigBxer2EQqk2iw",
  "key16": "2eqEJrARw7tyNAAQczbRSQQrPycBzqMqmi7sba2QNDYahwz17Ufk8Vuy2bDgVmZQxKNohcDMUi2t9girVzUyTHky",
  "key17": "2qAfNvE4StE1VntkLQCVUrafFnrLBqmd7Xo5Q5NpLx21deTr8dKcWk4G4K6xw3PfBZ14zcjotzuxRtmmJPqFR32",
  "key18": "2sdzVFJB5rmGZcrMp3EF8dSMFNUj7vdq46KAX7ToAunrc6wMTSU5swmwUxNqJVjW7UHkEmoAYnQrjbv9SSqBXgeq",
  "key19": "5XxtPn6crhtjKqZ8JbQGZFnm636mqfPP687FWfb1jcqz6rrBzDNPQ3ZjvKz9cCuvf52HBbonND32SXc7ni4dWAwf",
  "key20": "5ajLf9DYBgjZBQ4Rfhx8tRvU16fbCVs26sF8E4P6Eg6JPLrpeVZqpACGEs1kp5hR58TGPjZ1gjrfDXyd3iG2xY3f",
  "key21": "2L9nHC2p6Jj2sQ2wdjXW79KNrqAdM3FZe25CdVFt3pv9kpDsnjLQeTzQ31sE1viSroGenYCdn2vtykCSsCe55YzH",
  "key22": "2Azmw3b5BVbjGsBJN4qoa4mKJGvReEsNxu8jyMCbWZWpMdtdtM3ZSuAHCMneyGDay4J1JiV6T5ZEjxBX5vguyevm",
  "key23": "2MwqoedL1m5aWQyEvxXF4M8gkd5364hD3SVRYFaSYr3ZcjJU3gXeJrSsuxhj1fFFbxZDdgKCj2vDsUmguemdqCCo",
  "key24": "4UciZjZUkMXhDchnMwXeFgaYJULrEpPhoH7v4B35432xrhtRbXGc2zyt2Pq6mDRy58f4N7RzEUzkoFPdqibjqTCk",
  "key25": "jsWWM4Ex13MekqMKZDDfuejEsNkCVY9ifQVtwtk7KQ8nuuzhHEFXWzgUYXqbrv8nMwcJNGwQBjjqwnL94VakMS9",
  "key26": "2mfSbSoLuHM4VJmUVLpjkP3sxMausbPU8aHcNfmJWeo7PRiiMYU9qPqV1ncjiq63sDLaeyqBjhysLt3FYmsu1oVq",
  "key27": "ZwhFy7MSsMjMYpM8qVCAvSvFGUMu2ySh43SV6wXbsjg2DvYbpEJ7ZPDNXAV8JFGUfqqZfSqGeWe2ewQTsjwgtnt",
  "key28": "3w5x2gvn31kKdcfqurg9sThEuPPzuB21Txeo13JdAqfH7ZtW5FfDPGga1ZT9m3nVXDBodPNg4G3ABbkiW8JrmUBa",
  "key29": "57Dr5Hf6226vAsP8B57oWsC4wgdFSkNy6P6EMczvQbqTXFZRj9yak36UGjVyNEbkJGaQtWes5GMP6s9nWHnzpZny",
  "key30": "5dK6SZ2i3kGiLDyYQG25u3JfNtLN33hJv3qgsFRNgik3Da8hrcTEf39rAc8ir5egBtDAZ1rWfME1caiDtKtKkTgM",
  "key31": "5t2GpsAeTyFYgDGNibWsAzrCCEDJaTKTmXXYNCiCVqeshXsX8P9F6B8eU4EWLSo2J5RiALfbmmTXhnDq6ZrQ2eFQ",
  "key32": "37Z2q43XA5mFvAEXTAnakEqyPb5TyDeWNp87kx8WGNKvdJRjMDP4ntQyGNqM7Jk1dUSX3ZcZbeev2hMa6BD5mHkw",
  "key33": "4jd37jK2zC6vPydV6e9NpN58m3jCPU476ZFcjS7ppV28VoMVevs5HibxGCQSzALJ9CuMymHrpHFvWEUAUcMi5KGk",
  "key34": "4NQR1L5pcK3uv7EC9k1gPbhYWL4LikuLWtPEA9B3qxscpucnUptKZfPuLJm5y9hxaM5zwB5VKFukUuRYZoaRchyu",
  "key35": "4oC33nuapiUYgtioWUTvYwKMQPvNE7JfsHqYQrePbHsfr1UyzDmKHFQwxsvxAMHJCNYoGZeki1T681US5dzxGMuV",
  "key36": "K7usDewUwCH3HEsJ5aKBXe9rXPgEr8g13nLdBQ83nettUGMdQMKv9Egyrjc7Wkp3smQBWui5ofvbwTV3Tt8d2Qe",
  "key37": "4Mr1EtTbH3J3ki9CRbysU2uiftQ5FYeoWTc7HpZxPYrxbPz3caW8ZQguxTSH9HLhLFzeBBNL1crXsHZBt1qa4XSG",
  "key38": "51eqoAkdigAeM51ysirEVNh2ptp6G5ww83QQzumvbysTgWhBPM1vi1jQkVYzNK8yCpftFAxhA6VMafuL81PCwCJq",
  "key39": "3MwEZWSFYAuofsWPDPeCELGiK8wjAmDYNst2ANyxczQce2JQaaFDv82wAFV4CF4GGfmZVvzis7fjVxgdrb73Dj9X"
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
