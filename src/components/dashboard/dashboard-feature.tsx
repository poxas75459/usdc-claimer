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
    "4mYpMb982TLnC74FwaK27iFt2v78ZNez56qDUZgmwwrX2iK4ep41BfUTv8q9mtzEeezkcBhHPjzSbECSA8m3vpUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RHQDL3jd8LCQym8wKy6qQ8b5Db8L3i2yazu6DSdJYxCxCfmqVrUH37PayNGeTBM2N7KnQ1jpdDg3a6ammZrt3AC",
  "key1": "65vSptWKXtSo8dJrsoTwGXQhtXRszE1ioCGii9232Kifns6SddN2dWERGWZCNbVD5Qqvjs2w1EvQJLQUqhH9nmQ4",
  "key2": "4qRTujgyqhCBdJr2sXqHTGw1M9sZnuFceGrRWDjEe51EgQKjHQPghR3HGm6nk8dwBSDHtmHMRb9Ky4fPHtPkuiqt",
  "key3": "2pEG17n6Wc9x9wSSuqiKPpKD7EzUNm75z8G6Qz9AzqVTCaAhCzpjHQaik76dQ9U6PbDU3MCyzbis8Bh5aEPPkHCy",
  "key4": "HVUEBGKNACJy16rhEqPBnrLabHSNWd4fyDhMHUZr9T9tHhAnZGHjPLrtJXr46zSnM4KRUj5BvWEs3mntbqB5Pd6",
  "key5": "9eEjkNfKKTpen4acNK4QfkN5rXpaPTadbVFuVwhcvCsjoQxH6Vg8LRPBuVxhNsYvYA4feYmmoCdMZnPnQabA5jb",
  "key6": "5GTZKNuwENKoL5moujuSqNAjhHRo737dKaUFkp5vKXFpFHwvNr1XkkuyWSjn4NU6RH64ANakfqesQ5iUoTNGjq8N",
  "key7": "566jBA1nt1vFSkvqhwegvWQr69PW4L6znEnDwcE4dfrK69qHJrskYYJcxs9ADjj8qcHwJj8KFJhfh8cgyTsScf9p",
  "key8": "2oAtppj1yCuFP1bb9jiXG7B186GfYiTv4Q8FRv8dBpKgKgSbEF2h9XTrYXbvoD887TDeFEifAczF61oRVS4Us3x5",
  "key9": "5DG1zWgcAmixZaamNXufFq1AzeBbnTv71fTtsHZKPowd8TXNmqvmhRKF17wvXJR48dgu7kYZyfy7vNuZThqFg34C",
  "key10": "2YsWeCxPMEh4SidTN9Wr5yN5skmNv8nPzbfUoaufQCyDFB3EBu1UoH1YWf1cx1c4GG6U7cXM57DZ3ckiYLUvMRmm",
  "key11": "3M7rn4fc6tHqEo3itWgUbAV5BiryYUESuvKEhHpiVz8fGNcb69h9GsyfUEzbQ1T3c4zUv8j1L6XQjkHe8SNM3MhK",
  "key12": "4Efy7wzUpxG7v3EQeT8F1ZUuX36xoSm5Gq7A14TpwN3mUiy5qteaqAUj4rGXa28BjZm82JQuYrosXCrHYdpQeXjC",
  "key13": "m9fWvGU2dcpdkKS2Y5feJLhJtN3PUnEyaT1fFSjgsBX1MxLeeyALpDWshrDmRhnCSWLtHafgBUP3rqdgnTNHHft",
  "key14": "5NPQUB232cqdVpjEA9AwvFLeQMhzwwygeXQLCXeY9o8yxqjYpPq6pkhsJvXhuiCXY4MpB7tf7FmQzKL1GateK9CP",
  "key15": "38Ejd29pr39mZo28kJfscqmNtmwJw6MzNerwnW91hPg3pbmE5YKdprBrV31p6ozHCRxWnudbVrTkoETAcmDqhdBX",
  "key16": "2tdChzxyppJfWUNXy79SDCZMFMYuaPGXXStcTPCvPKvTf3uWhcVw863JmaJrXF26Bxu6ZPwGSKG44FKorw6VZDS6",
  "key17": "5bQCkme11bU7HDnC6PiPT8iYYnGkHGRE2xBNGRRnktMPPCsGQ1hnnXccQwE3QgpjzEGw8onkjJhMZDjradm97ocF",
  "key18": "vusXLYd8sZwX27F938owW87UZmAHDAc64GdhYa7QSYYRiQWVX5eniNMbadfriLpv6YMq3CNVj34kiNJpKnZb48W",
  "key19": "2ESTm7A3TV7CUPHjEQhMHMzCgyFzbT88koJzbBCMGuvcBo8XP2P4kUvcbRZ35bJvmsAK8GmopvKFf3hFiz6Tz64S",
  "key20": "4WCjp3BdvTHyW3LemJ2ZUhDtMXGwnvXCTgmiUwPb9eBu9iyuxKf5rkkFSCF3GooR1WDhK4R7eaNsMoXyqi9uqxMQ",
  "key21": "rdmpJvXxVfdmDZDCkFP5KvKRCwB4brqB7GvVRsdpLDZa4DdTx8Tya6Kx8jSqg5ZRxX9VhCaMV8K44pkg1RX8Lq5",
  "key22": "4nqTdQy9MwR6Bb7dCYGS9Ji9GXuhWd6gMNXymcGubCy7m7gPLaWz1MdunCxhXW8hRaxzWNUUB5LzFzkrLKyTTBH3",
  "key23": "41ubUDbnfD2CXkLTw9SbMmDFgJSNMNomX2s6ZdgSdCfF5GXytxXXnAhJbC8GaJQoMd7TDrBYajCRnYTzy5CigEtE",
  "key24": "3Up2Aad4diyYcPiwZZYiAW9QxEus3vz21dURJCq6673Z1cm9ZcXEWxXgAHXF2DiS4PTtxKL5XkXiX1MAeqTMYAn6",
  "key25": "3As7S7QNymHJSLNSF9tzE9jD9gghde8tEsRZ37Pod4j64gToTxyGafQJgxz5NSEJkGhJBANKAw2aKfEdtGZdKZE4",
  "key26": "3QBjQgqppTGGtHkoUJZftVHzNdSJhwY5nWzS6tNBv64pew7LHCRL3goHYNQrNWQWbk3RiMimieDTm1pbS6N2YSAZ",
  "key27": "4Qv4j9EURE5EJjSBdzr1DkFvLCsAeBvhUGiWxt39TVbnTrvkz23KitrVLtkJmLhdmma6PsgjxFVX57uVY7UbPeHw",
  "key28": "2ixwvURefcXd8uezemvGTdt4ZGEt4xKF5Z7Q5zVUCqdqsUjb66A2WVLr9AAJFQUraqB3t6R5BcMUd6rQmK1HiXQQ"
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
