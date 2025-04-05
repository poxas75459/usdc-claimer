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
    "2HzMmWjdWsHNpknmWHbzYZGAQ9ZpsuzZUZUXFMSA6rxH19BQ4sJ72nmPYnqdFzg2de2U45KMZRfwRcriDDmnCzo5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57ZAo7o1wDTLjtEv1KWUUUD8JTrMjqHqiqi4w7vKNDsfnR17hoqSBJAyXGDB2JSokq6dLaQ5P9LdykfHG3vpjnyN",
  "key1": "64mKe4EgQ7ZJEo5ifwXLErDZkW6suGynduL9aguzBdFSGKa98HBScQD2TucAZJwwzhEaH4Fqnrsnhkw8kuv4jG5C",
  "key2": "3Gjrj3taWHD5nzp5ax8ZvNhsQhijeZiG4GDP3aCzX1hVkSKcUBGR5mNg6fNPRDCRRN9GoUxecD8PVVopevfnLfK1",
  "key3": "3z5CgR16U8tshfTeRo6PgocrRwPbpueDmDxGKxKcHvverMko9CTt3tusA23XmrhueK9nKjpw2Akro564dQWf19ec",
  "key4": "pkFNUdsoo5WC7JC9hguJcpdeCh17L3F3HbMxYq4DB44T8jpt4eoVh7LGScaxsHcoPaTv63afoS7Q2wmYwrRm11Y",
  "key5": "3fZyRkDSus4vs2ZjuKFC7kg4oQGh2zcAgKAUU6RNYPA4xSd7acykej2M9DEoyqZLE5xg2vWrpk3bGYxCYRBs3cP9",
  "key6": "63hK1yeJVkxFgbp59ynXU7esyn3fcTu8G25YuSSku5xjrzVevZL83xpmQGDCqAuACGekYc1jM498vVYyijuSpzvH",
  "key7": "33NHBxqrnysZ4ExdWrwLBCDKRPyLFSk69Vuer7UsvCJ6ZYXV68sxcaPV8ycfvprmV2KzGqcecqVigk8ULV46R3rJ",
  "key8": "2tsrKfnJhK1jSRqD8rSE9Ru52FuAJHCZ4gFCB7JdY8Xv2b62t86MfsBApLHj98fdieGv2N5k3odoF9Mr1BpK7myP",
  "key9": "UVrZXrYkEnnigW9ZMH8oQaNMwLopYoVYhNmSKrUV2HPdjwdkmudEFBspd7Yr71TqxGJcsAtVHm3EYGRRLLWYuav",
  "key10": "hvycHnyaCBXafD5HxiCGwX5CFSXQqNdLwfLTUZEi9FVyBoHer2fExopcfNF79nGDSmNfwP9t8YjCf5GzFWgpYXZ",
  "key11": "2qSSbHVfadAbvGb6S5ddgc8SLg4ZMDvfHqLefy5M9cXBTnGjjtESZJssfztjfu5DCXwxghZ9bo65zDrANgjpc7dh",
  "key12": "2Ho7bYBtTGYJVYJwfSrJijYozjTR7VhLQsTL63hzAfaH24udvbh9f1U7u8eqphn2sXz8v3UxuSHDsmMnAE5K64LY",
  "key13": "2okN9XkJvCLng6SLSYqBeXKPNErzvnN4BaGH1tuYWr2wp8jvze8GQDSetHoyM3hZL7C5RTpK8JpjEoUDCvg9wgTX",
  "key14": "3eT9GEEfdc4atmdJQhTDA9SvsoJfQDgzUQTtBSxUJzNzGZTxV4aZhkHy8nrW3HTBRwKMvLZQM4NoqN7RPuNG7VMX",
  "key15": "4dW62pCts6rZcVBPbdaLi6yJLvk2pvMhSMCXaZqj8zjErPyvSU8Hnez1T3FcESBGpmtJfKu22mTyu1Uau9RQT9b9",
  "key16": "2TzUwtaZAEvb3C21t9GqPXzmhAMc8LJhbUBqR5M9Ewo7AEa1gUpkzMNBRMjjUAm7GH7Qs1bJLW3GJeAn9uQdkHst",
  "key17": "3VCtEeZfwjBxvGNntLKWVSqPxvtaeDsbeHJVuGdb7F1BTANcwTNSmTXqjAjUzqcnjAkRgxYn4rbhgJacKrJQkeyY",
  "key18": "5qy9fREh3bH9W8NV9nMCNBgfynYh7wvv61uYeXmScDcxoCHS3CL77SX13iNczRpHBgJuXyVXLipTX8bDL6HZ3aFK",
  "key19": "5SKM3ULh6cKWtUJMjjNebmknPMenqykqNZDKW838StqQRZ9TjLfkYtcFXuF4smLyMjbzXkVGAztZb8WTcn2Vada7",
  "key20": "2gQwfttRKQZ63tq7Pf2ink9PAHD93nAL5pf5Re73cDw51QZNCQyN9RNut77on2NBNeBT6UNG98jyQkb6a6ePniys",
  "key21": "Q7GNXF8ctDyxt1Xfn6VAALAj5GHjyYo5wSsYt5iLtPw2cmqGbv9v9bDhJNLnS14RHuAGDJae9Hma7ArpP5GX8Sb",
  "key22": "4r5digQGgL9JqHgwDGqzeRQJrpHxkfGJMT5AgJ3keNMzJYnuBCwniCqibkmwdHWhraiAyu4mghvCiPRg5QFX9FZZ",
  "key23": "4CxhyEjFFQ59um7wVAnQwBxP75ctLEymjUJzvgHiruTnqvxN877UwvyczkJgWLMmbfU5vfPgAEPEUN4SQXLcdUZp",
  "key24": "KqGgGj4tTzok9Ub4scBuR6Br6NirbEHrcXnXRoXE4RZ7zKBKjo2ZyNtWA6ErF3NXCZT7NoUoKLFcBuCRpBbx3qq",
  "key25": "aA1BdNGVC7iKLsdfA3Ytgw9MDQNfLsN49dYQH5oqrb56Nt6oFrXnm2mrqdP8cCAgi8Jw5R4dDqmxX274HFPmqCt",
  "key26": "fh5rdiE99MtMj6ia4XJevLTKDvaJg4TGzs6xRRzugPfFpve98GNjvL4A6DMByJ3j1Qt2aQqmVZX8xzqbJhKm5TR",
  "key27": "5rPAyhpVxskgZHG9gA1Re7rfDvvGjaGJHhK1oaXu5mxTNCcMaEVohar48QkVLGc47mEpZd6UvMHqKBVeuVrt7EZR",
  "key28": "4v3cjohR4KLSYHSz1kexB9uTkFe7HJT2sju39f6H5fWJ4edi3bUZ4pEAQPsJJNRFwJ8UwKtrUcAG8R1p2sFo23UF"
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
