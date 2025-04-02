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
    "HURS5gPKPvbfzfGSvN68qtZud4BUuV2LcU6yn7B1u5BBy15pvFcWcTh7LttPEnXUC9bNAPpXH2w1Lp7gLR4J972"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PjwFm6GzcoEGgi8SJfYy3YCfb2TAYG62wyuwmhNontwXBMhww442MZHTJq7KrB8uFtmQ3jUxHsGk2K61ig2BMWN",
  "key1": "2WuhkmHA6CjpPBZ1hRprYRGvCeMh6hWAp4RdffxEVLWBQYspqzrprdew8YwiPHFCBzX2JRTdGcquTcmTK7uBQCqz",
  "key2": "2VE24GefzsHVR2jHeD3dahVRr6Li45i7KWtae36k5ipZ5Cd2Q7RG5TiBhg49eH7PLScwCrWG6QRRhw4G1bidGCYB",
  "key3": "2DdVK1g5jhxL2cdhEqRtWvwWcDUfXK9DPMUVYTSuZEvceCJMXE7ckhUqRFqfzNW46UFMfeiM12GMUPeZydRaJ64q",
  "key4": "26VLE1rUSc7XeupCrqATRNeVbLywgDpsduHkJWy4kLVyYCEvy9cPCHPFAM19FJ53H5EW6u3qH74pLKbpxzNm21WJ",
  "key5": "3uSzsB7bAsFWiPxt3U6xhTddXerahijPHCh2orcvgu1FaBmig4yXKhmp94TKA69wGq281BxYM6ADNvCC64uUwLNz",
  "key6": "4gvqGuCX1KQGuefwZgoqcnxWzZDQe1aHtiuHgEJmm8VJCfwzKwXCTGJPfGh7DNm7EMFwTLZB2hC6z6Pa8zH7yLhX",
  "key7": "3KaPLZZexjLY3aDDW6ck1dxWqNhkYsSoZo1S82e1YDrU2f3nRfkY5JL2YF7jViErN1X9TUhYH7NMrrspZZkQb6eW",
  "key8": "3KMUcycrHBv8KZ9HUMM1wSrj3rGfJByWz95vv5RUUMhdg1dVYHTKSQejhMoGnh9YH7A4o1szdVjFJ4okhwXwVPui",
  "key9": "4AmfAzTB7UFXNqLheUyg4cPsvEViFhXd58eENqPkKxsdyKQyHrZsZJrQAxAi2H2HvsF5WP1sdPmXnTBsEB9MdfpH",
  "key10": "4NNzGe3MRRgcSx2oy4xcjh98P1NZdQ3QuGajGT3J2q9BJcZ7KE2bqUWZZJYPSt5GtoH5aNhmwzQH3hFeB98EGVvM",
  "key11": "4chkU2WWCXmRAgEocZQS5VzzY5GDdZfj8iuSw7z4MAnYuHDVaBQ7fR634wmj69Afg1fbFMV84i949Bi33epessqs",
  "key12": "57u3ia4qKr4SFndCWZR1aRYEaZYyU4sNifCb5N4MB8zdGPC41k7j7UGw6HmHa6xe156fCVCrjQe2L8zgrsM71RUZ",
  "key13": "5mkEonE9WcQpqVeBYegZXmtsP6jbXkFPsrHGwgeVgHffxhdBgkyvcxTzCkGbQqVF2FKZsjdeRfVgxbDK71kRRetf",
  "key14": "3Xd9mqpWQzsnRL86FsqUXDqncHbhNy5bLSfoWgQ6LS2QqRC2gixQ5mJsRvX6Z79cEbet83ykQHigTxsGWcutmvet",
  "key15": "5Td8yAR9sryDfteDYFuCxQnAcQ7QKvDgbopqqHUmV4wiLqHa6EeHnVdJLtrozGyM13qFbjK7ez7NQQNBgfyfWFbK",
  "key16": "4AZBAmihacsazXm9YFob9b3VC4xzVDQcyAGGPTjTQ3boS6pF2bzPfR8C1xZwYFHnBL6NzpqK2iUGLN2eBebncHno",
  "key17": "2c74CrHbdJYU1LKDQPepi5KmMK9Pq6tYvL7ZeSueAUYEADRBRMYMyvjgz5q7cTEPWXX7gkXaDtDtxEi2RNXZibny",
  "key18": "2UwkyTRMgcfiHrmHkNqfsddVSvyH1MorqWDpgKc4Jv7jyj53dw7WWxbWHYXNW3YftEXCeT1jWtG9QDWBW61JpHJD",
  "key19": "dqWQ5biX37KXrw8tgqCCi8k2yjMGKpue8NtYZt3RCaUzPknXbjkmE2ndYGQqYUbPrkAsucGShzowc8V6iGsQAs4",
  "key20": "tyuB8UmgJVR3RVBsUYMRZz9ZzxmAeHRb7eKByhrtqmgqPsDQUyByF8GBhrMNbpgx7k2i5CmBHiuiUCnZfUazUVF",
  "key21": "3MnsJXjysLtTP3siNapDXwD2mwrqMrwKdAqyEda3TkfRfdghqnby7XJ5xCbewHXVrYdnfyk6id3VLiEMJvWV7htw",
  "key22": "XDkqhpvghroEQLbJV2MBYEWDhYDMfnmp6deZci83FVpMP2eqs1u2fJbhcwkzVqfU67aTSaqAeYMuFiMqK5Yp2Bp",
  "key23": "4qemzw3mZGSLW7cuuAftzzxjzHeCQvs3RgLRkDfyWCHv3qdLygVWLd7JJ6U2XHRpcUBjhwx6YPg84RjmjrwjbgkX",
  "key24": "3FuKNetKNf8Sm1LxG2vUEYch2iYyNUocuB7dHJzg7ybnomGptPqwQvX9q7XjfjE1CyYVMt9SaojRjPUwtdGfog96",
  "key25": "4t9B3JzD3SDZE1vzQcQvRmX4znVr8mxHK3R8JV3SobwXdTq8ihoVnGijnjEafRd9mHxhKjP7SD9MSNgGvjBsBKVW",
  "key26": "h8XDtuXYyXc9gVzYrcZ642UHBeH1cVqbbDdDDh9nay44HSftZscMt1fx1r6f8SxEgbGGgNjstyeBjqvSpnCkiHK",
  "key27": "3ayJThpBf4KZMNcsPpL6bRNvuk8u6Wku3uNsSbFfqc3m1DcdeDD4wB9AXNicLRCBaMYwNXWMntbq7u5zoeRUTEBf",
  "key28": "3YD3nwgrczij1GnSZQndsDpLa2P4aZyLyNJuJpc7jTL7dKoaigwKqxXVUqQibUTH6K3WTL68EEb8bfxH6YrewmA4",
  "key29": "2H44RLpWeCLyMZK6pkQvZ5f4dfFmZiEWZjmbVMBKmJBLpkRbDdFYmLFoHQfC27Qwqatz3TD3exdnDASHcNn2GkYg",
  "key30": "3N6LhT6y8ahaMkVk5Fco2LBxjzsKEAG5dfszXFt4krTXwGN8AHk7GyW3qHAoLaMXCS37A3WPTdR3fvT31B9e2CHm",
  "key31": "2UFrXbD1VGcwVSuTXMbhHfP5ufAmudf4sLUDaHdhq9PpmbJkXXtznYVbhJwAGcU6CBRYmzkLUKxTccsrdXwjkeVq",
  "key32": "XXeztjoTJZ86fDaxxQ4rfiTPdBuvzK3ZxL7mZ28KYZNHg6tPW5ED6s8TcUdh3Rix9rre9UyArugBWUH4okaJeyv",
  "key33": "4ADcT5r47dF1w7mmkwzzqsd17u6SzhjxkpGe1uThLUyYuEU2kJz5YbMfZvn1uv45befiek1pLZeJ96wad2cnt5Pu",
  "key34": "5zXFjgrAfkLputt7kQbhDQNuxy2CVau76cT2eCrNf54hSe9vgEMrhEVFLD5kUfE3bTZLUV7vxdE9SqLtBYomjuVQ",
  "key35": "3Exkzn9PSgNR55J5StwLeVykbhKVzDyrEKDoB77ukgngqyveWmZa9YGqEZrwBHE6mNU6e7HPSMyyy4xJE93mySTR",
  "key36": "5upj3snB5EUF1C9KQJJvgqehxd8dGr22VBsVz14E7paPhh5U2ticWGsZSa2FXuXb5NyAY3z2c6kyPvbJhm3o1beT",
  "key37": "5yc3Bxrx86A1GLyuMMVoZdY4SfA4HBYogSdTmpmrrFKuixdBnshR2RQuGYUZfZNb7Yebo2mMjV7NRnknxX6wtNhj"
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
