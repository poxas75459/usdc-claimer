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
    "2WjUWijWNrn6a9rndLS9c9eTd4j57nNPFXEdjLnC92zmp6raZAhD5JpYNsF57oh6ZMLsYJ6kau1A66Yc7stzeWK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r8Sz4uDdeQvHAsvz2VtwRbaP9AXr5TgRhbCLo69uk2ypKqvdJjngnURDBV4PzghxS2iQUvdGYKhvmnLWcFUtESR",
  "key1": "K8ZnmtJ8qb8KLv8DAybHJ4qYqTdQVt4bCpVR7AbHzzWxVcfpo2W24PWBXvWpSDyuZGoCd69hTr2dUDS7hJYEM87",
  "key2": "2rrSn3BwvnWY7M4LmxWXLPZErREV2bWJ5seb2FQuJtYjU9QHyoeSJXp7d3CDduZnJegw5NAT8ei3wzk4kPT5HUBX",
  "key3": "TPiTCgMrgu41nDKYEwvYxZqxEZKqQNGZS5Qhh4suMb2CS5cqNZkcSL5bGqLatyNjuEnAyAc5obJtTD1BQ1R1v9a",
  "key4": "2X3TLndWbC313NxuJjbmUCvuuuJ5hV9gRNvvK766Sxhb3pYS9b8JP8GYDCZB64VTiAwiBNH4dreTjPHXgSq3wzHF",
  "key5": "5hJiqMrRWjyR2u97AmQRnxqPvBfusX2FCmjYgKd4BHfwjdfE6MYAsKKehgiVaPxdyLSPYNid8Gi6ZT83dhaaq3Sv",
  "key6": "2uGi2R9NDRGaaYrDtLPkyv9hk7UioDXTbHej7VUuXvb1PdgRgsPVMWTKoXdRph378JZ2iUWeyjhbkkHnHbj5D7RS",
  "key7": "3kmujJrCjoiK36UM1BYpFsovNXwZgjVmfFVpZCNg2XHU2REzMG2AAxaWaWybmCBJwVGRxGncGVQeMu7xCrwME5px",
  "key8": "4RPuwz5H3KEMN4tv7cEuucZFMrrDaDHRGnKskmCB42dbxaMq4g83wX9YPYoDnnphAZsXpkxEVG54GzU8Ka2fJipM",
  "key9": "VBV3x8RUY4nPuNbSCxTTJHw9jixxbWJhxK6enGoVhwpuVyZ1xyG4nvicMK3jWKLnY1YBGHmj4ACk6tUFv5HbeHe",
  "key10": "3kgELXKAdmNizpBLDcdj9VYvNfnhoRce3ieoL1qGAZfNsvTdz5ww7keSe31NGQCvdAWQRsqHLorYTVJx1i4Wkc4d",
  "key11": "53KZRHiti4PByDHuASZDgqMZpu3Fh5rsgqXTUdvcNGRjLC76bAkNvhE9iAdLtrgrjndrcBwjFJavbGzkdcPwCf2T",
  "key12": "3RmF6FvrA4mmFmrHCQRuyMCSxXf39MZ5YNTy22R6ATUXNQe79FaDEHtxGdPA6zQT7yj2wR6Ue3PRyrKyTeDvyg8",
  "key13": "Rk5MsJHNoh6iW5zGsjnVPVxtX36Fv939FnkAemBNXkZj3EAbVrBdVDM9K5XgxXN9zrjTYroorv8ygN9bK7LNwzh",
  "key14": "3ecdT9o81HPPHbyCRdth56LiC8Njz1sEXis2kJEWDggJnbaY8BQ5kc8yU31tnsUcUKdmDTErdUdYi5DesHcexZm8",
  "key15": "5f7ByuUuJvhj9NPZ98fyudgph4LUWMpt6mbuVTqrgPNh38CRz5gPEaiuq1W7WpXkKpBWQ24ht4KvX8Vv8D6jXhfp",
  "key16": "3JnSkqNEPJxbjE2m5NoL3JQgNdkm32LcJBiug8NNnBamCrd58jiZYAJZNKLdN7vYj9f45uHYRBCuij2vcxantrZV",
  "key17": "5A1tzwn6L9sAgnfE9W2sdSqYjmUDdL24vf7NNYY9XCxmkQ9rrUYtM9kiUNZnQwipGyuSgC93FzYhWkHqoTeb2UFo",
  "key18": "32PSbdnhizXTeAT45opxABcoTreSdZdZLSjJ5J2Fe9FBhT5J9eiC8hkkhVpxALEC226SvnDKBxVBqTNekWhfMP5V",
  "key19": "4RpoDMLZxvVXgsqWZRSvuLUdHBjCrDWRCrekdtpYY5g23Dj2cKYsKjKyh9ttnNLJJz1198TSLhJa81jFZfwxE5T2",
  "key20": "3khL7L8QTVXknNZHNe5VGWHuSDosxx7J9TkQKk44gFa7yvy3vXP6Bp2jqWexFKufibS6AieEcP6L7Jdjqsw3YWhb",
  "key21": "Subq2gftY9iJUi18iJ3LmHSh3zQusi5ygJEf4bLbC6HfbqV6NQryZ5pHXNzzsbecsRGTGdfLAMXZ1XuiY2XTSKY",
  "key22": "62beps8rWDy7n4SY6DEKo746d34ewQrfUV4uF5jkoZL85jnDkZsaCrEP3cvrnWcxRN8cH5JchW4qyV1BTJQNhUBF",
  "key23": "4h9h53RUoiPsrN8PzQSzHnfJ3kHm6JcGpbDFmZFTjDbo82iPxXK9p892rrGUAm6tcf8PRkFNynanr58b81wueaC2",
  "key24": "5JDrTeVpnZDMTRztAJExdSCPncTYGjQgMPjr7EDHrbhpUtgDfHDxw3QATfytXN5afWwMbUn72ND1Tu6hmyyo5uEy",
  "key25": "Cn2Jya1EoEHD4oEe8f4mT2ZJXkgZWztEPABq7rBXiuZ1wjBUMRZcrNSkn8V9QJ2RP4TSrrGsFPos5eguttMWYDr",
  "key26": "2LuJewVzupZhY9yQzMiwdrpsWLwzKR8ugJYHWdx6oEGwUJxaKV1E3NGxWhR7Nm45uo1mk43B9dkrGoZ84xhNsyiv",
  "key27": "35ATNT61ftz7DTzsykAh8W4Gm4REhLF69X4SQ9ZmjXWAvuvgkYZ7X4tPu35vH8wX2NbcHrBe18PnoofvT8Qyb29p",
  "key28": "2Lp7hdRVoSCgK3ZScyJhH8mqThZxci9VRg9PrvipLTsAq6QtdpwTa8ZVH7h3o4SfFCgvS3Y4uBVwVU64aT9yGfk3",
  "key29": "2NEBzacAi3LqWLzv2rqwK4ZW6inKGDWTo5KWA4d3FU1gdxUbiedvRd6nmzn411FD5fpsDifWChcA7WCj6ajCqWT1",
  "key30": "L1JFV8v7eyAFoQBAtaF22HWYLKZKnpVQSiQ9ZCVhps1cqz1aTdbRJTwCx6s5Qva57Yv5EnKmHp3SkDqHgu3HoFh",
  "key31": "3Y9RfZB6ycF72RdTqEUzxJQd8w8f7iEhmnLxzNHZtvR62nwzLKyn9Ng451hozS7onJeUMyZaAEGZvZnQkP2Sbyku",
  "key32": "pXfbqH7u23VeNS1eq5rxFaD31VwjJSkZJe1rSbnu4cY9BoNbKFPEMcyi1cmTFRnqMwzRbxiUegm5V146gQkNpBY",
  "key33": "4yuesjKsTKxgvwLzt9bGeACC42Aur4Xfi7HhXcgYYi39wPs45hKWhHRZCP6KhPBuvTLMKanXcKKThv3Feeb6M7KE",
  "key34": "2WjHNdoyJKwuuoPKbVajpAz3kBjBCrx9Aixm6iZWfQ49o2apBkyFP2viMUZ2houFbNUf5ot9BNTXVP44HwkQ9KLB",
  "key35": "5tF3CSJbubG8Z3qKiKcbT1MYX4awibTSV4UEx68Ec7YmCdCoP76fgdfikd4g7svnUwuMxVmnXPjhoHXiD9nFn2Gx"
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
