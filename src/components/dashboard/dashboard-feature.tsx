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
    "3e73xeZLS39bZDuh57H6wHjc2BYkkbaS3s8XMto8tfx2cDfbAt4Wng2DW8KJz9QwK4kBArtgDRDTvfn8Ae23o2U1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CsGDo3R7yP5U2kG6iAkRtDpHEKvhDoLzqwzdcUnzc2Lwfk58ArcVNuhy9e748RsnYcYxeJ1DmxabsAMj1HJSuNP",
  "key1": "U7JnmA14zibupxTjzyLHe4rvkByAN3JFKKJYBa2X6gXomKS839H5z8XsRg1nyA2ABXJECdnh76ZUSjLSdXvMuMr",
  "key2": "WkWvhViZ3CfQoTMb6E3Cit9Y4UT5NU1KMRQ94FZe4VGmvjVMZYvLjP5kSq2mEG2uvEH4iUGP2SnkxNMrHtW8u1P",
  "key3": "2WM8W9eUqe47WexBRydpJcqxCHvqUpzTRfntAbc3eqwJ9worbSNNFnTzBgtZEtPwFb4xBARMNJesczFqQK4bEM5P",
  "key4": "38xeAGPLpu9w7N5bfAf4PDNhh9TH1h9vgTmUXYJb4kRkWtmWP9QqasoM46sGoLJfSM5AWqXSCrTkHiDARjj96dPH",
  "key5": "tEXVBc92HSUREhEc6i11sDmpJMw6RDZYJ6qwvbYRCZhb67GLDvqieicyb8XhkJ2xqWxWwU7cuSJuBCvjWjCFGWJ",
  "key6": "4zz9MwcmZqwWzx8UhxFd9PQC8EYKLxjqMqph1Qa19wvFjuCpVoA8rK6vTdaKGHZsymBY8bFTTPKUTY6y2DUE8nS8",
  "key7": "2kh53jeohNCZtnSmxnWRqXqsZhx4p4Kaxx2SSN6tqoH1rSf4NYvHxWbZLMmkRLx1tAe8iL3YqpZKhD5xLYtJXkSi",
  "key8": "3zo6j2KDeePhyoZgT9noWe2qjURr2ri7CUZRduRKQgr8L25Yx2ZLzQwTT9HwoEnb2qLXXep4PrXTAYxRPMY8xRaK",
  "key9": "5hrLVyhDHnKLvLiU4vZTjPFNwZqVFyjze2KVTdZucemUq34xzB63vkdNnRrBuuhyYZ55sTbEBLKabvMWVSVfFL1Q",
  "key10": "3b6ba93S3FCP2nKTyTcCbxXdqRfqQ939dQGfr6qiNoaq6EN6qYqRJfy9tXGF9S6twvyQqdWzbnX82C6KKzkMpe28",
  "key11": "2coaSnffSrwNniGKA3Fo3VwpeWSHq4rNQLH2QwCdJPLEkiQ29ZUfnXGeFLwgHDD57SPLorMae434XnXuxvyUWBwC",
  "key12": "25xKiG7SfubqgGnncNLFHseWzqe5HV1kowX9X1RhxZ3xQVQJQzXUyNgyDUALjdWdLv46NQ4gvmmgfqTS1eCKNZC4",
  "key13": "mksXRdSdjetv1R8B1Rua2Dpi4YdKodpn6F5K3W8WNBiPm91AzSvdWZMq8aAagCgpCkyfUHrWf1eYioJhs7YgWea",
  "key14": "5QGZtEjQ5VemBrz1dZ229EximvHGmw5Ge5iyeem9iViCP2urTk37ZQDexs51eXLtJWE1Jso7LV6qZvu9mQxSy7bM",
  "key15": "3MWNXKzzGP4HWzRvK1hpo9FkTPab6RNKKyaoVzJvetFiFxKYdks6ezv6HdaVTMtc7mf7j9zWpPCEQvzsuxCRLAF1",
  "key16": "w1xoPpQjpNfi6PpBRxEhvAovVH3YTgKRaAnbBvxxRT6ghx7bYPoJ6ypxkMS3gnCer6u6amNnLoFenp8DfeDYW8q",
  "key17": "y8AErJLCarfRVajF2osPNVJcV7bK76GUc6KP3q5gBdJ1t5McP5gsxSBqtnYePnuEWtMFZFc2ohRQuGwuCtUiG6H",
  "key18": "d5m3i4RnqMdDPBufrnfWW4uzeTv8c119fVXwWYb8fogjfy5DroZ6vgJnBET3qkA6vNiRn3Swh7pKGGjCrEAEi89",
  "key19": "4YNrmQLXVS68Mw3zewCChApXoMqj7V8sXfrrQksniHRVGCBqCzUywNg3G4Wj3YUqU6YQvuC8tsdirU24AyggSLUQ",
  "key20": "HbZG2F7mVbdYFpY9HrEDSX4uureQ45d8u3vbD7y1UqzfSURQk7wUFtbcN6UjTPp2ymJiyqfkEBGJVzKgcw54RRb",
  "key21": "4pRTqNgidpC7qTM2iF7UNWCFJK7KxKWYeB6fNQnZJDdbg8DJzwf48EsiAtbniexLP2eAoSzyA5J6z7Co4N6VKxBU",
  "key22": "y34JehRneCmJ5RKRruGbKgp5pNWqtmvacjEjggVUmDiXtqwTV3v2pmcpsHKdMTr3bye6wxACn4mmLoNGdAN9gcm",
  "key23": "2Y52JW5sNS7hcxzMMHQ6LNzJis7zyW9M3YsYawjfr2h4QF2Wf6dVhaSF1CB82A5siocmxwSQ3cFaaj7PURAi5dC7",
  "key24": "3NkLbrn7pfcjrshZscyZoSvYPwoq5BtYNNnuiCDjzJf8C6SvpwyLzEcj1P3TcVrV9WjBJESWSVDEziBCGBGWEhBA",
  "key25": "383gBvfHdhGeiuR734TZZxVJBKaohpEMLkSA3Sx4gVWGygWQJQrtVcJNF3pgHHtxQJezAjqTkGWPbU8kmfqt6bkf",
  "key26": "5WHdVDTVb3wj9u2E2EuuNbWN7CojXajLjDPPQdCSHyjdJ4YGZkxypKAjkxJC5RHmKAmCv3BZSht7434oDM8budQ5",
  "key27": "5wv8qXUdrZwPBNZ3BkJzufeMzVigNCAFHvmDTtsfp7U8gzk6858FZDwNVs4VoJowNseo5kqkKqhkMd2fyWxoYHaN",
  "key28": "2CbqfShtmq9cN5ihEbyk9sDogee3Y8ymE9mZVi1T6g5hiEmCZ9H7YSmprzzFEKu92apHSXxrkSZbPJFKp45WZejA"
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
