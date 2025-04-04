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
    "sWeftY7zt57Jas7iQxTov9EZ6RPdoAkQ47wQPctvSBXRV2MZ7E1G8GmYCN6936XMUhtfQE1QgBUxfvECyTvBqwr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J6HDnFYjP1ufWhAmZ77e2qiYHdWU8ejBBZDGD4WV6FgtgkwKooLaiN84K494afHayFyjzDwXe1UZH2UCpnC8A3j",
  "key1": "3GNj8Ad5VVVBhV7ZconHCVo43G8y7idEEQYuE9bCzD2CaDrCZ5hcWKuVGGQLfYnWrAwWzu62rqF4BRXDhiCsY7P5",
  "key2": "2Qv7ZySQZqsTuQZa61UNCSHh6JesnDqdRG6gRNPALXdkVXYgaCeN3h6qr3FZUsF2avyuig7kPdzsTAfTTEgmc9sz",
  "key3": "5nmzuvqwrUmgq5sC56mfrVXfecypSwTp4SygfY19rH5VWAT1cnSPPzkfFYq6a5RiMnhFdw4Lj33hgVQocnZLGapD",
  "key4": "4taBu2K6LoPbtGjvcYC4t2iWcjVunW1i3yvjLT7bVwwGhaa8MgsSqoTho1sW47VxeEiiezVuYjY7PZ5Su37kBADx",
  "key5": "5ZVsfHAhGJM8a5Qj4fzWCdbjXCeVWQ6Uvsxu5LxXSeBXen7UCt83dWxQvQpQ8DDFHERQedF7dwYGxyUcsoimAT8L",
  "key6": "nE5rWRUFWQp5t7WLFavUg8KygfvRdhm9ZaSLA8wzfd3CtwkqtNWAr47MNw2fq14BR7pB8K8ZV9depdvpPGsVAEW",
  "key7": "2aoh1cnisBau4TCZU7Nr6mjz4dj7LDW6rBjCMGQdHCXtnW6WF3xq7y9ayMzYGZjgB8ncoG22pudswrGnZ6nd9K1U",
  "key8": "3ugLZ5K1YvLPopmsVPbA5gBApCMfsytvarnpsWKox1k5wKKCDQCkyG6mHW8ENEWHmAJk7zSKkbrnC9NvjsGA2r38",
  "key9": "236SYz5maQtaKo3WQBV1zGeo9oY7s1ZQJRt3MqPnoGu6sF4JUfy3SR85Pa1y2Mo3iroMMGCjnxVEBtbPsRpuvXeg",
  "key10": "4jfs8jL9yLntHVBixMRt6eSTtUpqzpGJ1EVpq59xR3xUnPuNi9pX9qGLQMPz3NVTbq9dJdDYXJ98rLQ3ufAqFJQj",
  "key11": "2rfcpBBJ4y3vVhkHREgRdLAjmGdnnyFmLweupvuAJzjLE6QacgZ7JhCmsVbWDrco1WP8er1duw1Wxu5fXq1GuQ5g",
  "key12": "5867YhBBUL6BD7e7Lsiytky95LGjA9jxQdhxJh6cd53VkxSxRA6wyhxQYgjYYLZC32XRZrtEcooSyNhNcxqUVhnU",
  "key13": "32GjXBk4pMgGy9U2jph4Gvn8Q31qZSY1ktv1eAkdoz3sQdRGLZK7qH6gA8Ti5C3uU1CmgPX9a5s4yq6CQfgZF9pP",
  "key14": "3oAE4CwWmTCiBoiFK1MrVLLhStxtpCUNB9sx2mQ4L1gosN6LFCdBpRGrKVQQv3qCiLwpFXP6ZzRqDFcdX1MxBnLW",
  "key15": "2ozjoZQ61rmC4RqQAqPsNtB4RMxRDWHuCEirjXooSuLrxjwhfQHCspnWKzXc11nvPzBakXVoSN7YAx5eKr37q8Ni",
  "key16": "5qy11EC7CH8biueCrmzybMZqSVsbKQWBXbHGbKWhABT8yUpCVHjy5BAp9kDP2aeG14DkwaC8yVZAKPNRDSwp44y4",
  "key17": "31GwEui9Ckf8qHW7VJAiwKfJioM9gPUXEuXVVDqmUAjz5gtPt4XVBZbzpwksWt3Dza44paek66F23XN4QhTLS9HL",
  "key18": "4Rw7A4hHQEMfoGTdVRAoCViMnHhiVRUZW2LCi7mB5LUurEoH3Sh58G3eGctWE9RJ45QUvuy3XjdKWK8cRZU2GEhK",
  "key19": "mja3y2YMxmYxWG7Z9Y2947R8WjSnpJYdZ8sMpVSS1iYPMYyJ7a9B9iNFXcC2vMAJYPHKRLQEmNjBDF993221MhE",
  "key20": "ZUmXwiDtomy26spRba5eCsG9B3kifM1GgijRsiCwG9ZrekdHgu2ByDaDF5oQtu6MNZDdvfYJ3KVXSML5JDKK7Ef",
  "key21": "43yJWHNE6k2Gavee1Tb4rfm3muB5Joh6xdHUtZdwtkrkw9tz4GEgSpWGh6C5cSXZ31BEmDoHzjA5CdSFL1fdFc8e",
  "key22": "1CoPr8HHXzwy5UdgfDWnrXkA9Q5SHc3vNUVhaSooS8rLhRDz5vuz5iEyf5dKfVkjztoXxcAZsKDouMMJS8JeBa5",
  "key23": "2RFQJiT1qzHHFC9fi7c3c7qqyudLcMmDPGWhqK8u2RB1jZQprbo9jqueiMZzG8D25HjV1SwX2XG6Ygx5LyHX9pGT",
  "key24": "5TmD4HGCQbBkTFatGiwePGFVp4wW3mVqK7WuxSSfKzEUonWfurNUG5jdmf9uAzjHePxZm1cHEdMvRqgxT8MHz7XF",
  "key25": "2tPY9yhNuWfn4Ax3kKyiRwdYgb53mHnpZYK3KV1XsWcJgCjuoNHfci2jEEL7mLgm3rEQiYsGGyoBZtqkVkLBUfP5",
  "key26": "24xxEd7jB4PWa2HCXeBf6woSrqVMm4N32RGczomALtRyJDUM8mJcKW1bgQv3gJ1rzB48MdXugiQWMHg78z9rrYb1",
  "key27": "5jP438cob57x6LnHTho6mmmWkaJRKbKXffypfpPhTEv3PYmCG59s13WhLM6VJ5E2G43Qsft2XLTQKNH5QKudZArk",
  "key28": "ecJTANtZdRKFHz7z7w3ogMGMYyc11TiM5YJS1sn5bNMP86nKgzZTA6gd59AnR2vHiiWKtm85AhksU8eN8LEzCzM",
  "key29": "3mLiEE4Kx7ri7XrF6paiL7k7MrdQxnwAUUq7rrWx9CKFXUWiajfB4hSYgKgFwgMKtpc4ScTFEbTsH7aTpNSzbkQd",
  "key30": "4M733yZpx2xdxDyswB7SMNEFNTviyn8Ndc2GnRf7nXmi7XFuKN2HwHNyrdZAtZUcXfxfjf45Tb8Egpb4d9SPqu1J",
  "key31": "5vDCZtXX6eV8peqWW8AzzWdrefy2EtwhDoA7xDfSNDtDcSh91vTLqnVizcHAXK1xBEkEGCRtKy8iroSSESiMvZsA",
  "key32": "2sX6j7HKozrDQY4JMMtcYGs9gn64R9PkivgVoSZMMrF5WvegDi6ciuhsLgWAU3TLdFg1wUcnYVnaVEf6sd5v4RBd"
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
