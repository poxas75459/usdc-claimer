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
    "4Lvn2CK6Fhs1oo3456FsesA9BtNkL4uWCM1H9FJfxj1PxcwUNYFh99Yv6zhYmEVzjLLi23yGd5Nv4iqgpZAB9Vi4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SHsojT5w4XckZAsqbY1ekrYVfHYBTmGByEQk9ZktrXeaccUS9KRMngzH9HNsQUJU3sS27cjWR6H3ZTVW5ZJa3ud",
  "key1": "4gZ3HVn1nvWvXjcxGkMdPmmGaPmjavzAcXytTNWeGpsGm4fCnCEQ4N8iwps9ys34RLoZUmx26FTCR4ssMZHVXyws",
  "key2": "1xcV6uz66pegRwn8TPuS7xz3WU2ZjvwapwFpv2aExDBtmUeRLZuQMQu4YTnkkWWvLVXzbniMdYV31Dp3YTAqidt",
  "key3": "2dJtqLczXyrWBM89pfJbiGARk89KmYWwjTjL29Je9bmBHvcfmANtNFznzvYDkje2oBwSKiiEKJBRXdoAtBpa7cM8",
  "key4": "4HJkYRnN8o55z8i9orxQnmc6hFho67yt5xYw1FfVUADya7bphC22vHuytm5R9J6v3q8wGjNquvMcCvxPgUdUU9ET",
  "key5": "41hxKB8UxKjhH6XHqZgtRUa2ND7zHMhGMrdiuZAG1D1LXiB6qAU7ZuCBvW8VZD19UU7GsoMYNN6RbS1Ufqrvw5W9",
  "key6": "iVwP252XgkCnV1raGx2k3zD93x44diC4SrCpz3YiNJq8YQGpd4NzysNyLdR4uViuqgtBeGyqncpV3SCGTFnUg4p",
  "key7": "3DdWNZBa2xhrjRsBgKe4WBPdF4gJ8G6KGoczEXQuYze2roykSA1Cb2oX9KcHnhaa2DmGiB5CU6KYMusjzfvmgaYJ",
  "key8": "rceaw9aW8gEier4VBMShmYCQGCtyT9UoufTt3fULia9i867MV45SKvH5CEwQLLEYtGkgoB6YmfRHZHanuGzfNwj",
  "key9": "276kZoRGZMsRnpc6ChkTutFJ5zzz17vFwDxsbaC3bcSqnbZeTER79J1BV8rZbQgamHP5YZ8o8zU3WHNRp8wUV5LZ",
  "key10": "4nqXJhuoJxD7HPxtD2oSqQoA3MDEBzgWevpn9raRtFB6rCxtxVYeDqpdyFgoPETfqS5qmXcFbB6FL1h64gzJaVUF",
  "key11": "56z4JD6eNySNTAGDBG5QfcJpD4rN3HDwSWtMT7TsxPAfh9R17mDmrgerC4eeaQWiXbMtSzphyD4G5VM1EkuizNCM",
  "key12": "3CbcXi2uKXczSiezHM6R9Hp8v1W9GjmvyGrZfuE5MMynhrhoewFYpvCs54hUNz8CL2HPkH92ZFkrX4yo9zkAz18P",
  "key13": "49p416eYVjds4Ux1uk5oNAhf9svu3Wybx9HbeaSyg7L4qJSJDZBHHYoaF9TV12nzfKPksAQEPn9rLMrwBUpVHmgK",
  "key14": "4ZVCbdDAQcCqvYZo4fn7XYAPp6Fk8uDR5Xqfq4eqjv5QEgnD34n3iCHYbXHAA3qEHPRq86NtM8iFWjaB85ETvA4v",
  "key15": "zUVE4HR6AV7QCrzpmAbMP5gybCYSb3rhTcsXj62vBQaQZFP75CCymy2UX2H3LZJYLqvsRKLpa9iA735KEnNqEY6",
  "key16": "6VXVZC296x4ytD5XwjXTrWuvzzRBYP4mUX7tSM4xGEQAmKCZWtaT81BPreAitsBR1vVSvD4AAmEiMzbK6LgJwNr",
  "key17": "Wxa1xjmUFXvYNj97uMGhy3dxVsZ246RdGRsAZw4MKWFVLgx9JVLzHLi9yUK385DVyftgLEyeNuaJdjmhp6AUGAP",
  "key18": "3NYSxZSNFuL4gXSP3JcEfUu2fAJ8FhhA8Un4kFKfChphpPfooxLSD2wbYujLMsgq6FqqvpaHq8HScrUwNZUYmzAG",
  "key19": "5uYMj1UHdC4JMdDRVZL45XsYgeKucnTMUgyKnMy66wrPvkGPuky8nfifeNxcRJtnTdCpSQ9Yt8Lo1q5xTvGWxZuz",
  "key20": "4feK9L9xBbJVHvz1AonYufujKDgAsQLu1hs9nZNuogxyGnBjM9YSbgvqLoxhwJJNzpdsj29NPJMSJFWe1m4Lfvva",
  "key21": "5iKLSmiMwE1vhETM4AmGsfzXitvXxA2oewfREGkKgcqzRPwE9bW5bVgnMu9QS6vFnY2MhPuUhAA43TfSfc8AjpKe",
  "key22": "D8XtonCrRBpiLbmyNkcCDZpTPWjrCMxe618hDzMbZgrPw2GQoQWrFtV26qGWsNk2xBEQq8rprH9GNQyR7bvnY5U",
  "key23": "kDsXfh6yaHL43ZpXcuXDiwfvHvd55GuiH3T1djjwUzrRdkbmRyCbiaDsYUHsB2QPpxeJGTCmK6dBdwhixY5MZPa",
  "key24": "65ehb1P9BcBqaoknaLkiok2Pszj55rfKzpMatypDdnnLxWYEx4B9qRU9GXnerZSrj219xD9AHnRKdmK14dvnCEVw",
  "key25": "4FJmoVhRidGbgJmjY3eV8RQMAPeZzDS1jZXJXnK1tu6f5AHP56UaUkXQn2pJz9zvwpcJ4MmvpyRmfvLXnGdW5mTG",
  "key26": "m3qE4cgYjrM3aJQK99oL2whmtFaKRkpBv8CbN2Prk8A5zH4jGeDHczkN7fYCrgnAjzA3TgVqBmGyMtMwsYbz8fd",
  "key27": "ZaCXddkoEf89GJaX4btCLcqGkjxUbJ9aDUcgxBd2kL3NsaHdN1sk4MEhgoPxU3AwV7NeNEaSWvPh18hobnxRave",
  "key28": "4RrxyKneZKB1jT61JqMQjVhN6wf4jndzFxr6Ets8SeftiLWv3iwoJL5UB5rTcnfg2mdB55gKCRE1h3uWbo7w8nEk",
  "key29": "W24QHQwcpNgEHTJrSqy9Y6pFsSsUyvL5qMycKpkmXsScDKAEnnPHwzNM8hxE1RKFAQuyqbgAuDFEMzBqHRzxJkW",
  "key30": "3pcGGyaBNKmF9fv3iwbkHKvEqT29HYBZ8k5WYaWEo41j4WQWTk9HCg5WMZGAwwKbTkyh1hg8AUhFgYCJBEejfkEo"
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
