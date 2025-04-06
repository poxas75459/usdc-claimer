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
    "5diWJQ15FvNnbXqa3Jav5VcUKEumMPcTpACAM1afQ92BABnCv1V5p19H4PYHVpy1RbyHsnewyYhZh5YLNpAuc3HY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B3rAzM2gY1R9WPrDxyfBGT51V8sV4DtREP8WKqRMKibE9Ze3qvUV1zEpSBGhVPB6Lxfinhg49BQ6i6qaP6PyuDV",
  "key1": "53RistUGd6FHTe48NoyCUjJ123fJ6VPYTM82AqSzsr3eQRsh4Rvdfrv1rKo9Leoc3VTKoKL6ppedevMwj4qCkwLS",
  "key2": "5Dsvmopo7P2UyvYhEFSp6aftgbMXZgWAoKUs16Vn787d6Z3RyzWyZgrJ855X8gro5CnarqbsBaELsNAHAs9MgbTc",
  "key3": "3eUzGcEoaTsey4pnNnGEy1LPxz3gmsqZFGeQJ6EfgHVbDfT5ottrMq9eVaSsYFpwr9ubMDeEfeiXiAWtNsxE7xTz",
  "key4": "5x4C2R6ySyTKCU9mQ2kBsMZehWqZ6jdkpt8jCaGGCF8TzksAsrwbCZcUimwTjHg8ya72myscaKHZuBSDRBKimvkL",
  "key5": "4MZJ3VcssWhnaUc9N9qkJcdZHWNfWmYvJALa9Yzg3Gf1jKcowhwQhducWaX1pfFuqqzCNAPS4LDmMuACcwjqMYXy",
  "key6": "EoxcJRn9gxC7LxwcbH6hGh5X776UVdThtsS3MqsDzspiKJqrSUbvgb8XkvRsSFT5eBKWtn3uCbYacTii5Yk5M6H",
  "key7": "2KCao8epPQjh8T52dRr5K8xJz2hkFaFGnY7jWxWMNxUtkK43SErb7ch4ZqPZNkmRbHQCPCZdLmXzZc7xzhnDXM2C",
  "key8": "5rVdeknKsKg9QP3kSmZSYJjsZShimUXERZcb7nkqH8MNGVZRwrWhMrs4X2zjPCGGegCMm2FSN6ctSWds6sEVJsAa",
  "key9": "e8kpZwGZjgDBaVsLtg4poSEoRkwSVnyck7pevGDDDEhgAbhRuVjgUSGRGXz3YoMbKHinNDjT7XdAfUGv2Y5B4tT",
  "key10": "39kTXJ15PcjMS9xtit5SD8QkG2JBv1QqWryxhB5ykinbZ2WFYsQjsf5mx2upXRfwpUkQgka9NL8dnPsBMAnCa4b7",
  "key11": "2AWG9X2fzGyReqwD2jkuraH1ACnPjXqefZef7oU4VqHmkRNY2vcvcjrQcNaem72uHayLrcb9AvexB3SzzkFuSgMg",
  "key12": "5guMnzz2WbG6A5oAoGoZnf7Rj81eXt6oGi2gPKox9GgTAc8KKu8MTaxhmjN8yE1a9T99Z2crNK5GrjW3SE3Hg2kY",
  "key13": "5e4L2veNxo3P48GVM4TYYVjeNtDaJsmWR4NsFFf3U35HJzcxYBtVdDUR84JNB6rUYchs57fyX4zSk29hk6gEazD8",
  "key14": "5JW2U8eo3i5tdRysJ7jrf9ZjdVz7eJ97XfDD4AQUCanff8YLYV3mq8jbDNFTApaPyJ45MwkqEh5vGcnHYxwXKrXM",
  "key15": "2EM7NSUEoCGUv9p5YuwyrqHzwWXBHSeCGi5AxZHohfaHATLKH3zsm5YimZ94L3FfQ7Y48b62vx2qcy76RtztL45m",
  "key16": "5GqLvhMkwrj6SaB8DVDx9iTgTqJd6mTVvQ2pySWC2j3RiNSPnGUFxPunJx3uKNzxSC35aPRMPqJuDmCVFTraHM8R",
  "key17": "5gfYPHa49VLNHpjus6TvSJb9Cbc8UF73ViHnskdeE7xjt1CbF1CZ1n6gp4fMVLGrfY4d5Q92HejmJwWN42HY6Zvc",
  "key18": "4DZzWBGTH4pcytKnKYqkNMZSj4RhLj9Zs26FgdzACi8Lq5WuqeWSEHxawSBy5hm86n45WgcaMaiHm18QhGfZ2fQH",
  "key19": "2xjX6W3nVAnqHazPd9jENoqSPXgi8SBVfwMGv1G3kyhizAK9c1w5d55PZt4FvxrAMKMiqj5zLxW5teoMbjt4Ujy5",
  "key20": "QPgsQNVuv2cti7crRnqQed6UUYLmYH7sokejzSbSoZiJ8Pv7Jr1KGzHunJQdJqi4UZ8gTFH3PEwvJYEJFyg2bQe",
  "key21": "2Lz3rSh6ejrxuD3S2geAk1RrDNbRhtPbuLKYkkr2fF6mJP8H1HWTvZUZQGgY5Tg838ux8BirBQx2GHqE31vfUsL2",
  "key22": "4cey5uN2Y3sPzhXQcjo3mZYMzCk5VPpMoWQoQPHirKdX3WNmNHFgsE19VyU851hnyUqgW76yMeoHXuqBPCM1kEs5",
  "key23": "7kZvVtJs1BveCgkDGXp1EgTgg88NQ7gb8dGbJvxSd7cwqKSp1Nw4XwCVjUK1mMpKNjuQr4dpKq2KVFwxWaxAe3B",
  "key24": "XMdyihL8YH6r6puvUm8SuFJqjDuHgMWb8FoQAw1PkB48Grck2gELtstgJy4DviMrB7SpwqmwUaD1eRNVrSG3vQN",
  "key25": "26htm9LDgitBYBYVtzw5f9K6ugv3ztEZxNCHXBzGdgt2Kd9AkJp7rETzWwmXZGhxXpp9uvK7GZu19RuUmNMa1rAt",
  "key26": "5berdiagwGFUYASQwcKv8S3DEmueqPLG48Jgf1MYqoXEsrdoetEN8WZ1gyZWbwTUBoZzg8sh2QjVT4YcVgEHPbpX",
  "key27": "3LHf5w9Vc7WGMFUQ28s5bFoNABQ6Dd4K9Y7eD4c9fvmr9kucphj3MwZiQxkxWXd2KqqgmhGpsDknjDCg8DGvqV1F",
  "key28": "5A5vDTUYjorD9FMJvY3kbXDYHRJv2SRd2WHuuVfEETPDBUSCHx7vS8xWFmuecjjjgKdFWg7nNzDB7mg3ED5urRug",
  "key29": "5K9wTYd8GnYaNWUUMNypnJPtz2RN1NrR8H3pxUuGavzBdf9uaA4yiS3wcg1hXmu122XfVpUqa5DhzBGUsZEtJFNS",
  "key30": "3oNUutaRNTmWKLYZtLiGur97ofQ6PWdApsx8eGfZd9xVqgpRuRgosxPy4gMoUnvUksxqwx4g4Bz6WQwSjYMpm91j",
  "key31": "3H5iYLga6Vtru2xiGcr9kajtMELwumi3TYJrQFeuSUaji3mnY7L8NjJuRhUBzPmpJNBZeg1wPPgKAykDA3MzGyGL"
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
