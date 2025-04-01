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
    "4NNtYQJzcQYF1rupBq6xq6zZwgHdidBvkMLrg6Uq3eUs8i4mt1he2a1ixJhcqieByyaoR7HcNy7jd6SpZkiksVGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZwcNZTMmdv6FMnsbdhcwPP4mbnHhdqmAbudvxoGSuynB7vVFKWbkQw5kKs4xyGUksF7hShFJo4q4iWU3mi5T3bf",
  "key1": "7Rdb13MQ43q5gN17A4cKyqtnAuW849LiCuL1zmAueoQVE8pKGt1DJAWAkqHqTnCnmoBErGCafaRyWCfGR6Dn7ju",
  "key2": "oHzPXj7TBppEDgoqnQC29wQWtgnN4Mq7c5LxPd1J6fxMP7YZ65QzcWFcMmiZ82Uxyvi4uZXMnHRGkNyymRGTyDr",
  "key3": "KhzrmrM8xjUcW3CSZoi6vLqdwo8Y9JVjwwcCDSZ8HvGsQZgtbav2p7vN6jLYUQdpsXkZ12GwYfW8JfnbjwY7QCm",
  "key4": "ydvALvHjxruTAqiWyYzugg7Ey1XfwYPkX17yGRqin5YFEthkbUaoLdgAjWSEkq1HrqEEAwV8PLDsqP7R2Kq97sG",
  "key5": "3XUcaADXwxPKapuSS6cAxUqeZ2zu17dWqVZpChkFhb6sdxK8Q9u5m3my4djhMJ2QvpBNhBEii1EiyMAZNw4ttgBN",
  "key6": "2yJjL9jVqE2wYYu2jiK2RcFRpNFfuJvGa1My9Zk8ceUXRxj2GkYcqc1yvTDE9UL2g1kGP6G1RGKcfbFvgw4b3NMH",
  "key7": "5sgu4ARNwFp3BWCBMKLWof9XcqqdfYKcrYttKVTprkMqsCuStsvnwECM9JeTVySVGsu4y3Yng3GLEofMo6Rpq2ux",
  "key8": "34bcH6xMUe1zpJjZe5UtA4s85G5xju2ytu5RZnXw7VUHDEvU8EP2wHcLq9SAqx37WPRfQNVExDzFC6WfrzSvWpYC",
  "key9": "4Hiu4MYKePLY45LoBi2W6vfF6nWwDaurmGRnbRMYWY88x1VtgJRY1y9H2DqUXyeQrQWXRkx4LpSrp1qvXyw7ScmA",
  "key10": "3kte9cyvrCLMj2ra8vAJ4PWfg3e9QAjEMN3FSQpZ6naW67CWyyNZM48ryab3n43YBCENsjZ7cdd2jm48t8tbpWdv",
  "key11": "35gdXuJUjVFPebQGypTvHQmmqknPkYmuZfpFszs9idizFkTW3gbW9p8upgSKLk8X89nGY9yHhQsPRfyTMuZSCMCr",
  "key12": "2jedWpmzV12uBZmyM4Uvvqhoh4zZUadMC4ej9W6VEJDZq9gGMRfKAPkBHSm9wVHy7GWbuzhCUk9BnSwj57Ft6wYf",
  "key13": "2cjKXtpUx44thXmYqUCekDCSdvhDfmkQ8TaispDQxZEkNPbYgEMhV5b18AfCCyBqFDGYHAhpbAJt1rncfE6wVWTW",
  "key14": "2MjhK2C61wPPagwTVnPAJt7Y38GU1RWr271RwuP4nP8wRZUFyeud7sy2Y9ozvGHLksBR3n36jyFZUwjhhcaGwCLn",
  "key15": "46mZuioXKaYGcDB5bkFW7U2pJHYAnqxgxsdx2BoaWoLmMcpfYc6PKdTrS1GSRLfqT9n2vSM6G299RHkLZjbaZkyL",
  "key16": "33ms5QFaHwoNvuoi8Duc3eQUEP8PuveXyvTrPC1VBtgGrJiFi27fWEJEexhcu9hkDJFmYHkz8toKpWDVoF2WFJDQ",
  "key17": "k7x7YLGr4cxbTaU6eg3TfgMKqXNBA1uvtR1y7zcqwwhtZNZeDNiHXxyrZxNtgAxXsDvW4SaFgZg3HrZ5wbWscrs",
  "key18": "7jRQbmwoQ7RxzRQ2W2UGpeJTbsByBW5wbFL668HkESuaDEdqnqbW2zUrh8pV6YmniBJLyM87oUdsAeap4a7EEXT",
  "key19": "2gVhK7k7CDLzUYwqYMd3mzRB8suzovw2TE6pV8p8ay3kM8SDwzcRzZU3DA5UhGwSHVDqyFeSfXTZu6vqtjR7AKhH",
  "key20": "4v8mCpa3TAkBRA3mL9Aiimm6pmbeyk3nueWU7vszqhkFkJT1sKHi7jbex9vxG5CyyS2U9E974AoxQHbLgZymjJ5a",
  "key21": "ZpcnUdgEWBfnfjcDSQrbTmQwwZM1HFiiqUNVeCHn5apBULfV4orKrt7bigk3ZovEvuFnBEptKUjvubaPkht89v1",
  "key22": "2kVApCZD3kPHZ94Ya2vLyDLkKPFTVBKxCiku2VVuZ3TYxthzkUBer8xgkefK1shBBPt6VPHfd8Radtk35NBn8Nyg",
  "key23": "2RKkaUcfK37AJQU5tDFgSGkEgyadkPuHAEB7r28HGe7sUSiBD3cEPZbKFPdyQtuJ47NZMSoZxDuXcurahQyTQWrt",
  "key24": "4o4KbDRCim4XFRDrDEzf8UVqZXYEY5qqHiGdSrQiV9oTUsghuFq3SE9kL8yLx9mqo8wJEwQX6nowNt7ztucab83s",
  "key25": "vesEmvZKEPERmZDKSzLAW5D3VrNqZfDbuHtv5DKguLpEuQVJeEewHBUmjKs9ujB1762mgbTsKaDL1Zjq1pU3JQQ",
  "key26": "3AS7EzWBQzGwpmD9qD1taSV7AJVxfz84YPpBrZ95GNfmT6J7vckYGRkLzfeqmrh21WLqSR5hE3xnrbpCYbpwjbrw"
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
