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
    "4oueZXVC2coJkutp2mr5JkXJEaoufz6zg9FaYggTrJrm7AhwweqSj11WgAGzJWTT9bgvJ8DcWSbcPUgt8wwLVqj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AjGx99m9nKZmUTHEafTU961kzd32xs31DxHfs7yHF56qQTGg1PJqSUGaSKeND7yA2EfSS4V5b8ojUXWZfjTk4Ki",
  "key1": "63iZLic6TYfUiqoerjfo512YEkgGN4VFhJ2jjRakeaaTPrNriuoS8RZD6GzoBwHXRqQuUT8Tm1kQ6vVNJhVmthQG",
  "key2": "4HBiydLKkbZvMbh86gRVq6PdVf2XmnALB7eryo9Xmc4VSYK8JGdFMy38AmM6nysUm89kPd5czMYwLxymU3K4xm5m",
  "key3": "3cbvyofhP9S9JtyCJqkikGyyKZFKva2DUA3H1JfKRvtQpj2rxpFRKWML3kwHNASPkWRcsdiyfFPwnRBcNJjdwGw2",
  "key4": "23WV7r3mxLLPXwBU9vwkKAqufwRZFdm95gZwueJ6LSG2qDXfcFuTMW17ow1fGcHLPx3pAEdEQMye78XpaSpgAzvE",
  "key5": "4ti4uEJV2z1GQwXHhYMy3zKTCJJFn6uehFYMeDzCbLMcBTZUU7VReuLXyxJsPYLYkfVN5zTbExNVwsQy9buYGEmt",
  "key6": "5xYWHUq2qqeAjM1VasjeGTZ7re9z4a4idLdhMMh19sEc34DFBohBGYMZHcnW8ExbqrFvRGtLF8t34tKEB5pUDSdb",
  "key7": "4EvrKGMEJ824K2EXoJq5xcpiJrGdGF6odyrnZKafvzBBUSbzUo3LeMysyq6o2bNbiaPtLzXN4EWMqKjr9zWSwjYM",
  "key8": "3kVVtrvW2CVTvW9NhjZcBhqkNSaWHAFcJRedYgXW4jmSMh598REheJc4G1Va6tEF8k85o15siX76whs8ZTMDdLpN",
  "key9": "2KGeTDP7DCQRNYtNcZ56mJUC97zUdP8fq5pxvKkGt3pTAoDz4bU8Jnsdypr352YiE1JqoGDDqBHyxD5zBHeYnHxD",
  "key10": "6391BKvziu33Qa4LMRaA1QYydMcnFb3M1Ywix3agpds1Ja6edAuRmLH3rfRu4yqtzGduBeq7y9ewbg9Noz6AS7n9",
  "key11": "586LCDyBZR6PkBeDqtrXTq3poPDDvv56XRU2NWQu1H38azXtATGqm2VA6pZLLEordgHpZ9pJepGvVrYydEAbrVGK",
  "key12": "2BL42sMeYi7myeMPyE5q7WdhTuVGhZhDF2m19o7e9SczsrNn6gQvvSqFfEdpkN1x9qE59bc7q1GSZgfCF1qxeZdw",
  "key13": "3AuW4e9REdPLFF8CopSBCjGdPnUwAT54g9aHogEAsS7cDkGwHrmsWcFy61jpiQTaVnH7zxgFbbwXUxiBBEkJ6Kc",
  "key14": "5FsxuJ4cKTUSeTdPGUypJUTJ6h5UzC39qN9w3botKmcxa5F4uxPrzu4cvHqeFzMiRtZbogaDWroPE4Ex5ih4aTUp",
  "key15": "5HCWH3rC4gC9wC7n3bniSs3rUn6rYrJQJHfE2UfnxtvrJxMddU7nDopdFJa6ZZHnSnkMu1pTZ9vbKuKn1Tc1NbjZ",
  "key16": "517fuJcDn1pupSXq6P2z6Wa5Pxj6gEL1oB3dH7jLYnaDhFrenNANSmx1ewjfgWD4DCusgU85jjxTtpg91uaGJh9b",
  "key17": "5gRpNDKVZL27B5gwJKdSn4t3ttTuA4QDhgrBLSQG7WEqDbB9MjQSu4pu9aZACeWdJpN6zAz2uUxxFkYi6GaffuWp",
  "key18": "4jPaWFogGqK8TBeL9VuBgFQQgT9HVyMfXafijazaENLtVk5UoNi6wUoWTPaaxtRzv1F7M2X2SMPzGe6XmjBJ7Pja",
  "key19": "5hJT711bYpkFTCGEGgn5wdRhDvUTkQuJdxm3f1UJt6aTtJZx3WMBksjiDNxsnC6Guy84NzsPuz1JXKniVzVUaT1t",
  "key20": "5jjqXtdTotLpz2kmeSsNFosVCaxGYX2cYzEdmCQqKZVFFvRT9DwMWYDxR7iGsz1qxi4iQBiNSTPcdDifNhvLaNoM",
  "key21": "45DxHS4XAV17KLpH148tWKdoNXRaEuWdt2PnkV7dfJnbQtCbMMF9he6NzP1ndcZPuezQJXL25Nme4pNxfXY1rL64",
  "key22": "34s1mxpw129Svr3usEcbeqLuCUkVMsRxxB8uN593Mg6X4hTxVpzdT3Hv8LzNbnFN8HXusRS7XzRhT1Jga4vtHAc",
  "key23": "2VY4MtoAd7bBVqpAXwu8yEgdEu7hKpe4nYrwU31RNegWPWK2LdoWNUv51CMWMeVvDJP9T5optyndoYX3RjADzBCf",
  "key24": "2fCAw5Zzzb6uZs3R5vosZJsZWHinx38DYnh2DZbZfdXhEA4uukzkJXJWaPgH296XV5bKnuiddnzLD781DMwoYDwU",
  "key25": "47jftY4DqkqMWjbr1wTtH6QdxzRGaCr5YSfDWteNR8bHpoRoELxYfLEYk7gHfGcm7Pnxsds3DVWF8TLbahRrnBkb",
  "key26": "4ssLLjJMAWMP8cNV4f5V9GjabrScLukGjA1F2BqLjPsT3EsmFfFCYCZsex7DpDP6uWVURQFDNnsYLwahmpG5TP1B",
  "key27": "4mYUraefGrLma5HZUsCfABTb38fJYt7J9XJJGB7EAzFEkdSjoKb8ucbZj3yFgx9EMgBiPqAGT7rTynaWpXYCpPai",
  "key28": "2zxBFVYfgtjdEbD2uGAm8H1m5GYXxV1iVFc4Ea1FqrW8pgWCSzhBaB9Pb3z4FYduLrrKKgeXUCt6Sv2xjdSEJoQ1",
  "key29": "5aBDGDrsQdnDprpiRR7VQCRo72KPkQMiKqaaQFsousYiGVzH9i2LtBFbKdkTDi9JD9XaphJv7UpddfrsAB1P3C95"
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
