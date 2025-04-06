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
    "PZ9b8JERuSfuuP2j1QakZ1QHXg6wt9LCf7XcfVxf4hAqYbTSaRtLSiNmKozSCcUNNijpt5Wc8c9SjuhbawQiocH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i4VRPeQfhmxLSuZ48tQHvf6AHGvBTbbfN7CpyTcDSHw8FmmpunbJxDfVAEEqCyVMnG8N2i6mS5fT5y8FCaPfQns",
  "key1": "iibyKr9wkinxDmAaR3zhUwWYgcgW8XdXMPo9gHUbsP74GS2LjQ7EtGSuJ31ZTKLKsB9jDMNYtf9oNXpNZQPFzuV",
  "key2": "2fHcMLvExnPy91hJgY9ya8uFZD7JwwiThTSKHdQ3DnH14RyBF4hwmn1yPqZHZyC6z9WE6aQKoVbH7bQkBbLFbhX6",
  "key3": "2QSGxvSo1nKPeSKVynWmfz92zr2JKrSx45YZ9Sfz5q69y9HbMxZrFJGKFEGCvA9b74FcZUexs3GF34AVxG9FshHU",
  "key4": "2Wcv8Mc8rSw8p2pdtzibYbNYBY66shp8dXJC3VjAU11h62DijpzUVHBDw8k1fLdezxm5w5GHjE3VTTypxyw9zcJj",
  "key5": "3NQ4RjNLb4afAL3ZMnRxWzU18ML3XrjyRsZoF5mTRTwTaCLffEZkqyAV1evdM5ASQheQQGJyib1HBmskz2ShvvRZ",
  "key6": "4qys8ej5CAXT6wAXtuv4YG5KiJrpQ7w3SRnQv32wTjYxUHW8BJTg3fbniSARZR5xgLuZJ9ZGHLfyJa7SHgphUgxr",
  "key7": "5Wud638HU6NhbKicjBNTApzXjQzwissYhz6CTSct2eTU8rhFyimGoWs4xFU8KWVcPYh5LDgPwjtvXTd2JxrWvQrx",
  "key8": "3GDBFpWvm5Nizstvf3VtCckkJyobPcNhrrskyDKAWf3DeUKsCQ8c9LJEiNErGkamAn7Gnfgx3pDHsSEhyCqyJA7u",
  "key9": "4GdSvF1WfMtvA9MvsDDWDxaQN4ENUN58KURtXscM5nSfW1BnNnMXkpaxMBpefb6hXZtEJjxsaxnBLuwHkc5LUEYs",
  "key10": "5DhHjLT88gkRSkNSk5SspoMppXNqPEfz5XCYiEeCC82S6Doyi1orq6mtsP9c3K8Ffu3CgAFDGhaMX6UeLkySqGsP",
  "key11": "45J8TBiDRjvaueM7Ho4qKvN9dGXWEbHDWeHdVzzcwwTUBCGitMaHX2LCzE1T25GAXjSTzncoqmXCajVxqPoL6pe1",
  "key12": "HSy5jhrJDtRkNondMd5hz35hShda9QnMZCJQU8yqrwfes2a4K6JrkC5HVER4rJivbFWitYeS8EowYygf6qpAhHB",
  "key13": "5BeEey4fdyYW6dNah9m5YnyqzfZK6UPPVbvCVZa6y1uoLzSpfUKxc965VjUxe9i2G6LYF9FBKSQpwLYPGWbDqjwT",
  "key14": "3Pzeu4tnvpxWpsfPPqEM6uKCLDJGDujEmj3ZxHApPPM5aRrhEHCjBAvPccB1x7q6YgXD2bmL2GCujcaQMHYfGXry",
  "key15": "48STqm4iRuiHoYRp6WTQVrgw2foYDuxuR5rJh1ZF1mxae8dRsSoYk9FSt2GGQazxWjMtn2psYfWx9nGt3WkGcaiU",
  "key16": "5xLh2VVoXdKMGYnWRW7STVQdqd3jUbNHSxJiwSW8Epg9vtUxwxqB9LUyMK6iRkSXR3E6EuW8UctaL4jQ73bYN5fZ",
  "key17": "4x6diz7JAEJhTaT4WKH8ztYoq6Xra767ur3M6p9pyT4AjA2XpKHTQKDQbskKzsNA4YQDDKUGhvUDRWwXfi6iaJK7",
  "key18": "5FtTYFGc2iZyk9hVLj3yRKM2SAE6jpydTrE2DLwjDByYKTRxZKrRFiypeV83ga5ayHDdHJeTkFXGWx8fcADFg3bj",
  "key19": "ctdNivjHWxPH2bxtdk94E61sTMVbt8qvPoYkQ9KpXhjNncvF8vd4JZi6qU2KAMsZGX6GZnTYdjCh4M6q71c6big",
  "key20": "5gmiqHoEgjD5nSNUWXkcvzp4GpVNyVzyWYrz7UfY3YGnsQyBgFQ322EttPWfMLdmBvm4zECovCsiFz6HGW8jf1zq",
  "key21": "CEsgHxCjAXjCkLfCKcAMoMeRCRUYKFsS2cKkssWrfAJTvaWGtRPwN95dUXDvBgLe8dKzPVembqqY8VMfSvXbqMq",
  "key22": "E8jjgocrYaNUaWcgPBNX28s5y2zjsQpbRu5MdZT8XbsCLeAQFsGCbZMGwgZafkxJrgRJa8btNRXbZHA4s7CUnMP",
  "key23": "3NFYX9VCy94fKkhMKuaQPLMZTAY7GfNWUnPCCiyFXKWUQzGvKLk8YoaRMBeydBHk7bP8NCmt9FNRwBYBAx8aoY7c",
  "key24": "4Y2BNYNuyHQiHzjmjcfdsFv13Te14Nz8XJ7Y9uGiS8ojxzi7QKzNdVrpTqMdGvSP1pm3n82c5YfyeKadbiQjfreW",
  "key25": "4HH9jCQwiw2eHaY6EhRb7KKX5cqHvV8DZdhKpt6aXPVDBReBQj8KeXLn6GWwShetnzZWamttCqHg6uwSma6ZBGjy",
  "key26": "2a6KwebFTDLWAEnhL9Wu3fNeNMXcniQ9Bim6YdpwMeZbwrGRsnnFVQ8RoTbDkohjtSaTy3yDhHx9tEmnx8wXiJpV"
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
