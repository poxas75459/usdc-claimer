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
    "PWuopXimcQhwyUvXvqtociygeFVxqjM4wTRDHXukADxdh1kKGYMc9NLL9qd15x1Cz7hXXwZXfYtfy2jyd1uywGC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4evEmJhD4umMiWofCKmtiYRvAizQod5BNC9oZDrb2xWyVypULBh4tLy7uCc3gWUVS3LQ9tUtpfBqkzLthJDLSQdM",
  "key1": "3D1FRy5UCCzy4bcqUk4Wg3xRLxhRqhgKBXEkKZRDM9NFNcPQ7qRsLopkXQ9Mjv5TKW2kv3MCxB7P8moRdzj3iWQ8",
  "key2": "4NL4fomn9bYy146qGUtXWNoVMWWnnHz8zwrsFrpf8ruTbxWP4VBopXZLPmvypNjVYRn7dHGtesuAjaNgYQkWXj48",
  "key3": "3W4oix6ywZQHpDnXrGmk5aXx8eH79viAR3tSPWbVXhrr6e5ymR5vYKUVapLNavxiBH1bKbnbbhUMuwqMmptpZzSj",
  "key4": "5MLT2VpwwSyQFZXLes4EqicKYnMpLyatxyXBHiqjoT71tEuDKwAwe3htYFjG9629uyyAUJp2RLrDzVK3fiPpnwtB",
  "key5": "zwrTWcum2sS1WsE1k2qN5LTGFoemYb7EeDprsaKHV9aTCzo7UrmP1ZAKMUQVw4quYMQ2Ury28JL4XyFx6mxgUx4",
  "key6": "3ptGXShWPWBmPTEhKi9idXzaytc8KGaJkzXx7yaCCS6maP7KMqUDhUxDfpDqpJhGpdCfKYU3kABxNyFvEVzaMFG7",
  "key7": "2ps5uHe9kuXsUZPybTioqGfSekKVR9DHHcr64MNpZuwyzMh12k7K5r5t5spJcSLYm4AT5WRcfCzK57rp5Bxzhon4",
  "key8": "41KhgvfQaxnyBz2Vd5cj37CT3vqmymwVRpLqRu6yoBDRncUGH9b7brqUwV1rgsVuDHHzJ3UNjLJJGS1NkQuJvHmK",
  "key9": "2AbJPZG9YtvGhJ1varfZTRpjMCQxPM6D6AYw3hr1j3jC6GSZ5nPv3wzah76zb2bpRkTRFkukgHrRRuMFztybeRay",
  "key10": "2jFKkQKAT1PsxRt5GFA1WQiNMa4mjXoTPDUnUkQDP4ydcybEBXCGU4Qq5eweUjCu3SZrniZyYrEE74ZnNgfBJxCa",
  "key11": "2XQFKB1vEKgN1mXi4YT7Aq6etsijQV2BCq4GYt1WxWKELSQoXQhu6hXoG2hShPSpdsZhiTcrfZ4AsESr3hbBmvLR",
  "key12": "2M4vJcuMxuKpMdyxmWwTX7gT5WEytfW1DSVqT2H8dLmbKiHZE26Y7WX5vBhbWffYG3gm1LjptynTPBxy6zrBH6us",
  "key13": "uq8zfsdyauiiPTbxTcDuWk96xtrZhbLLMGBwp3tKbNHGskgFEip5r92w3bD6N3B84uoLDYp7pgctKy76HN1TW5q",
  "key14": "3SDsqX7UX5Rdn2ejWgVNXrSAxajD71Ew5iy62rPsv3H2zr1LYZrQ6n6fce3ZrM8L9po8uhSmFXRVd3mfxnC5c8mk",
  "key15": "5K9aq4WEa2LQWhzzBu3aMyuPuNEuSjfAMAF5sRoF3sDUh5XvaznbmFF1in4A4djDHHu48qJuYT2KmeJQzPd2EDeF",
  "key16": "4t7cHuXXazqzNkyS2rhkWgom8UqsiZwYBxdBfKSN5FcoyE3skvgUEkNouZYUo7hPXDihTFM6CLQC5SWG5hFxAeDR",
  "key17": "4u8LqbtLwTVEi62awphaZ7xr2u45AoeaZE5nQ7LLQGSTFHsAKHLxNg4cJpWVJMfwb8Rbossr534vzZp1jjiPVsPX",
  "key18": "2ZSND9be9782oMwPyPFb2cQ9mk2CPxCZZE4eL4g3rEQ9fsMukA6AyBFvtJ6hHoNBYbYcBb5da9jUuc5SBZMjfqm8",
  "key19": "47d5W2jeekgnSzGPMyoPKdezGBZ9qfjbRWe34BM2w5PeHvLHm2pHR6ExycwDMhrqRRZ8JmMFa4Hi4hZMpw9K6Lnf",
  "key20": "1teWibuTACwZ8BqSX69haGPufPsHGNZ69LimpsAWSxm9U9eWLdWW6nw58LzahEwTe1efmtCndVkLe3tTWVRfzob",
  "key21": "2xqWB6thJ2zGpMCgHPku7RdP6g4FiNpJwGWrbGYP9kcfUxHvhgsJZJqAHhpxAYyFcAcqVSCebNBiDAzL6McEbov8",
  "key22": "3Uc3kVpPwkEvf9nQQ8LmHc4Acf5UapxFzKPHY1BNLsvWktsqNcQ3oZYJhrU3j9CePJhjeiU5343iANgmBPT6uEES",
  "key23": "8S4Gx8P9DbqiC8fmjPw86msPS4NeWJDEdMBcUuWPu2dkToNivb179KGrXRbqe1AXDKGnb5KRjByn7LHwPkHA6d8",
  "key24": "2tGJuSAtbvX2XZTvAY9xsvVCu2Ca1nKd9AzvU3wzGQjMeXzgqixsDG4q8ZG49mWC4EjgWxyzN5jTnPx38qsQU32i",
  "key25": "4MXsQZqr15FAEpoN92qZevKzipWnKumbegPmxmKnSi8KTVMyDJyBSk9g1qWgqBtMbTSbyyPVNhTmnBoDBPw9xYHP",
  "key26": "3UUDy35T2XmfFgriW2AoJQc13thhiFekqiXqVJ8TFFqXStHKsGPh6PtfqkRqntDB6cQV7NKkRJ7Z38fgdKsxZmoT",
  "key27": "4bxz3YeU6wwBAMGE6Tcd5ct4x29myWcdTmhwsMRA1Ybt6QrVCRjX62UKtmVkZGKyVYCZMTDRW7bXqDMiB5JRDbrX",
  "key28": "5n4UkpWevKwDWmzVi8cr62do1vDeqbkMBeppw4AzCdY8UkWcXc1zr8DGFwX2RfjgTyA5T4E5D3F5fBR6FXTbLfvS",
  "key29": "x9BzVSNYcx2d8Ga8G428rA6AG4WKrUiCyc1XMjjA9PmsBtf9BvHAi14giqRUFW4hsDKjSEMAABCqQbP8meizA3x",
  "key30": "5Y4FqbaVqZdisWo5ZmPdb52thCdSbWuTBpdc2CnNxK73xc4zttHfu5rYkqr3zLyozd3EgUCypA3jRw9metJgj7xi",
  "key31": "2DQZ67himXtiBEd7qufPpLPowRiaCaQwWqqcvTYE66Nxc6qHRiEchd9oQYZNq9sGbgnEXVcZXQRyzc9E8z1xezye",
  "key32": "4kQJViKpdhR9LaxtMCs1c8proSDaiXaq367bztKjkjjKVECevbLQfHqLg7an5NiDAE3LJJu2SmMEYR6FFkcAerBu",
  "key33": "4L6CPwgrC8XWMDktkvnjsrhM3aQV6Jth5PL3DVMGR73eHiEp6iZwP4poQ6RDQFDZpLhEsvj6sh9aBSrUcN4XfA8"
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
