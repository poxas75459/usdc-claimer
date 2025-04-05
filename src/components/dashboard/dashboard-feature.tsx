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
    "64v598LAGWNK6fgUxPktyXctfzixUYkhcRcMw7J4FDrnmQFwZ8YbBNQAj8NQu9hgNBJwa1uphqH2VMDw1kUTW5f5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X89z3uLYDiWGdVHx8cR4FMVuc541p95pqAz6iWrXiEzyqkANFsCSWaJv3RikDxJRVB1LrRH6qGvoYzu42sVNfFt",
  "key1": "66MkYhMkNaz6Mhq4NZVJHpKfUuRU3CcbXypF2o4i76bCzDRFJQCsh9NNayhz4ghd9vPFNS54XYgDc9nBxYHD5Xn3",
  "key2": "5u7xaxc3ZPekJ2ZRE36eSdcDWzfSxhKyUiVf6592FG5Vkdrq1m1VFMBkp3NsLSJzobfEMvWqeud8SJuD2BzzRWmm",
  "key3": "5Ks6njSHZeyvxNqdNTm2DbQNVCgKMD1SbB5kyu37ErxpE7D7xpjECPug33PEkc6qAxQsxsDWspgYKnH5aMCRVzQQ",
  "key4": "4G3BGfefvHCp31At7UWvgamGtgrKjN4iD8Fqrxwv7NedwQErdPxYsRdTskPehbnVpw3REMttFwz7S6tdieGnRYUd",
  "key5": "5jkkGwk8g3wRG4d7hbAgxvxJfXijzg9GowFuEmm3YjWdi8QeUqkgcH19T7c8Z8AKR8Pr8cK6vyzs3k9Lhbsot1Yv",
  "key6": "yPS18TtJjwgG1ZKoqJwy5n1oJSQWV3ExwJWn2HPV1Le2xCtj8EVk8ffh8L5UL4QL43LxSJ6xjZis9JwvCrGQ3zF",
  "key7": "2H9Lo3nyNonuTg35KnBz96jeFskwdZejBFoVodRmKYHpgRCtSLdKZSLkztUk9e8WBRZ3uT9ank1RoUZuDTrGDsp2",
  "key8": "9wj4Kmes4TzvwdzFvcBtT9WuRMsp9QQToqeg7kgxARxbuMF13tWCq7RYuYm1VDowMgpr2XUTaKZQjK51gwybMQE",
  "key9": "44ShtTxKZot5WbjFiAuGv462XTqoVQ62Bn4z5omUcjLxZNe5Z7dXhwv9FfVeMWn8xXbhmEwoiCnPuHpDixEfWzsU",
  "key10": "2pnYhPxt77RCaQpSoVdWR3fVp4AhppxcAgpBJcVh1qCcvd42n2PDNpVwbY1Su2nYHVGCMeTjhW6F8uaQ5gdC12QR",
  "key11": "5dcyzZ3jHJjXJkdZ2NKgw5np4KzA7v4NPSLQ4xb9iWqqVjC5QmrrnjKJsDqPPm1LAwSFYYHinCKqQVfwy5JFjT1h",
  "key12": "5H2t3NLaB6FWQP1HGDeugNNgh7yQN1HRVukEEtqGhtVL7d5iQPsbkixegHdecd47aMYa5im4q8TgAWX9qTxfjnPD",
  "key13": "2n7QCqjqNYFPGa7uYw9bxGygu2z1L4G9Hs5tUY5tNcHQrUsQn4by93fXkJiYsdCUuJ2ZLdVpFbCwvzhGMyQyzwRM",
  "key14": "2reDojcBbYPS2VMsoQLsE1atwyH7NEi6NL2jPQHGEJgqNCBUahWPwFhCB9LKD47bu8jyiqUAe71j9DJ2VB8deBvQ",
  "key15": "2FHonkefJ3QFTjYWaiNtaE4dNzcSGvQd4zdqvVqTTG7KprwxphKyMkj4nGcKDVBizX34e7gsjWXJTXnkHZRnd7Bj",
  "key16": "2NCxmyzW5JNZf9k1hJJdLwsV4cxnr2GL6997EUEUjUt5AXWh653trjcx7zxbHwYLVbYfxCP6m9rkeCXaT2BAb5T",
  "key17": "4cLUSM1PKNxfoqJf7y9ShPwaY5fqXaQK3g4nAgQCyDZjkYrGAigJQPrz2F3BD2NYMP4JjqTSv7UMr3bHASqUQU5Y",
  "key18": "5Dodh5XhoJNM7z4paSY6si2cXGWS9aEfTA4mw3HFCvvmXkWa9Ng3uEte3W6R2bbZ3YY88zQKpjkgMdhXBwVzXV9",
  "key19": "39wQvwNihKJ5bZWVL2VRHMSFEX6tTzH11mLqiBW38LszHPuYjrwzTWsmZsgrbxDY1ocdFrjbPqLAFSSNtNsmhdNk",
  "key20": "5E23RijXh21wETJLU2tumozRutcXGVrsMAU6hkswYuhpnX4aQhn7bwYccUqj6CaUiPPbQnqK8JDAiUxa13JV6yP3",
  "key21": "43pTmNwv4sTHNcxq1mwvC5PinsxAjCHZSetmfGZ9Q2TbtG3jbARnxd9pk9au6NygaUgNJH4VgAiRKDGVagJqarGv",
  "key22": "3mgBydX1ndGpuEvBsTuyc9FPwy61xJ1mDFMETwxzQdqPQm6THd9EfsVmXwBbMi2hUiXFQyuSMqtnzTqenz31CfTD",
  "key23": "2c8HU2soifCLVsioqTQUBV81kG4iCAKQeqqLWD5i4DcNpbZYS4Yoo6MzPHybftAeu9JRJammFGbiq4178SZPZuEq",
  "key24": "3k2R9aFLEDbZA65LHzwjRoG9JtUPJJvUYWBSkharb7rUHiqhFenEfAGZHjo5ZHuwoQmrepZCY4kfVxkcNqAFXkeS",
  "key25": "3FHueRhASY8jCydYZdS7t9nHx76D4xPk8JeNkK9WtaJzpvk2NC5XvBbRVBqHU1evKLiiNahhed6hipHRFxjdoZbL",
  "key26": "nKZsdVCjYeWQP2JeeL9RML6PcPa49bYDQstfV9Eop3Wo3YeMNN6vdrUx72ha4Sf3t3BvSpYVj7RysuYAc3HkYtM"
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
