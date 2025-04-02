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
    "5GX3tJ4aDcFW8EpMRmBNkhojPjs3H1Dts5a372dRDVudqu7GUKD1BTdCg7SGcPbpnWUUv3SKoSNjaGZZiwyBMDYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eWYLKQMGLGK4nGuizz5kB64BAyjyyD6gqnnnzcaDj5LaUNP9JZq7ZVw849vFCMwB5xVoQqWrYoCyXZW2i4DfdeU",
  "key1": "5WY7LocFjG4cBF1bZbB6qvzaWxcKdafAuoZaXCjxF9M37g9ctvRauNtw3RV8NB5pjZh8rbjqAT59SvosohoYnjQs",
  "key2": "31mky7xmxG5v81CPKdaJ1qG1SVw1y7QS5GiifK6UxRszD5ofm4ykfwop2arVSCZhoG4PKttt3CCFF9DLCG2JJPSn",
  "key3": "4VBix3RSr1E9jzM8dZTc1Ma31ktBmXdrMP1bzZpCncQB3tCsAUzgUUwhvTt4i6HtRjDcuE7LmdGVdn5sMYhiRHgd",
  "key4": "22AgGgmraMD5ee677RroSYakHhnvk2FaxB7RtFbaGaTZ2kdTuwsVtHy6nPvLvE9X6sNiPB3ukP6YEDEhsAKszieA",
  "key5": "65SW2xXxLtbsbZWKwVQ6Zp3MWuPb7ATwBWAS6YpoEpda8BREqABwrF6ykfWtxzVU6R2eUw3yRNU3EhgV7AGAiMpA",
  "key6": "2KQo3Q363AnqJWjUAeiMLX1U1vc4LdaEyWW63W8nDa2Pz6q9i9iAeeugsndEsqPsKPiUxk6h7txyNSydPcYphGne",
  "key7": "53TnoKCCrEeK69mwQNodYfzi8NsRpYWBuPVmfaA9FHncSRWHcrcmyXQkFTdE5tiPm3zwZADNT3ejTjwen4ZPcPzP",
  "key8": "4gFgjxrS56BqX9f8Gd8zocNSmkHHSrViESf9dNBKFE5e68y9dy4bMfUp1uBABEaPEJjd845GBKa5kbU7YGbVERcU",
  "key9": "4rpTMnDM6urhSL1N8hWQUntr4wExrqryEXnXiBHUnpH3Et5aZBJMjtMjxjzJHD8pS5wK6LsxP1uRdszcyoVjSL11",
  "key10": "3jSNJLcWBAQwPvHdqnRbFSmS3ehwApQGEGbEgE8K8u2pCAwUmL6Dcvmmso8PeeVuog6q2i2eeeFFqxhw7Ju76Gh9",
  "key11": "3VRF7jbDNxtrseJpFDaX3Kp2Z1dv6WznqmtXRGyfAbcLTUez7H3nbXrMKrrMgN6ybkmCnFnQ9qH8BD6hEsUKqFjZ",
  "key12": "5uUP5fAiCDUwomeQojsTttdLjSA8YmBvwGa7VVJPFLAfYBnXaPXe7a2pVTRjHj2iV941PGeRQXovMvhCBHPbmRgc",
  "key13": "66sc1B5PeUcPLWySSqWmirMTYYM6nSinBbVpeTE4HTTjcmmpA6EwZfrPPhmpcEDir3hY83sRShxP3WWWQgBDUdeY",
  "key14": "5xjR7cAjDPKkz3MfRU76f5dEkarYGHf2ShhZ2eBSna5QqjpoZ6VfVVJeGKTd9huJW4Zf5HcVxWUuqq4Nn7M8fktA",
  "key15": "3xBKRVsEBUPaUyb5ZLVFUKhEPY7KN3ZZKmJhLR2iXr6uCyrzHj8oq8tbhmeXvjJ1kUAdbKT8YnFq13wEeLExzD7b",
  "key16": "3vVKtzXKBfy6nGomdxuMGahFcGs99Uvu3DvUQiJ84vjiEAuRBXbssScnUMMGkJ4CTgRvfzUvCNvCwf3UxXvaJ224",
  "key17": "5rEZS5A4rZE3mSRkHKLEiqGsh2ZvvYiJA4UjTmWK4uwAZ2CeTD9VQR7MThXZhCYG9YTX7hfC7NrrM4JMmm4fGtwT",
  "key18": "3o5w8sxsUjvMtHoDhMXgjvj7FSteCE9YVbkxUBdKZVXT5LxVUpHZTxBxuzbqadBX9fRpiS1JopGSRVEZYE3VwqHp",
  "key19": "5mmtjkm9ujUpHLjJgTRRT2VGFn4MVUuVwkYsTwZvDkMvdTVe1Phv3qnLCgpjCxyt81aEzYGLjvs6zEBuQe7MR5kF",
  "key20": "36vDokYF6CBpgJ5mrPNZfZsi9aUnyzhHZypZshXuuPoTqQTnZnUTMYkpcMTTjGBCdQmfpFzfnBNUqKeoGgEWK58M",
  "key21": "4xYRWtvzkxtxDEVMGtQxHsPScQQ6SRdn2sjfMpzRzp7rYBKVFRfcMNaaeiNcRS3kAFr5hoSoaG3je8EGsnbX9Yvr",
  "key22": "5CXTGgzxvrTLEL2T8rbbgCAwQpaRbEwMB5mZJmJ8LmKijFBviyvSyvbevpNBqFHvMbeD7oyRJh3gKWQwBAXUAF6c",
  "key23": "B6A3n1D9Gt7CgrQxsdLuecLVAm2vX4p9i2FVm1X99Zy2GYzQ9kFWSqZ4MhbaH55Jwu9ThZf2e5mBFpVB9GynxCo",
  "key24": "5GhfkHYr4PdAwt7Pdq9JJKJwqffGTJSjxyshVmxj5SsnJgqZMhEZCVWysVX4i8YRVYrJ4S2n2i6YKj3JRYPPsfA",
  "key25": "3xdkyU7THtYYLNUpkAxPowPCYgExB8MecGYGfhHwySos2tvHfU3DNYwSih1dnL5iZ2F1Busj3cdryw8prDNeFFu9",
  "key26": "65SxJmn9gN8ULhoEWpEZrvsUD6GTJ84skRL2Tf7GNwgg6bxouWVr969hGnyaC1XaWNRikgwm7qwwjAtqD2bL8YPo",
  "key27": "3ZYDd5GZDfPWixbZeDAy9FUkG7feMmNMU3P8e9VWHp5UAHwim3UB7kBhYn2K596taHxWYHX4jDCW5cagBz5owd5w",
  "key28": "gSVVK9ccdvEio1XGZLVVvgM92cdHpxfFMAnPfsVtyNPLYMsY1mT4EU2bbmG6ATC9dzuoqaT7UKysx5tz89NojXP",
  "key29": "4QXaZ3E7obndJkVMQDSwmb8fshi8GmtJcdZQWNbVpPHiR5y7DWvm2pykKukrjdjuDHis26c1Qn3YvLYGwAyAXZ5b"
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
