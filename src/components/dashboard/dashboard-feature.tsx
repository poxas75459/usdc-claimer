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
    "HUegEDfBQKm8TNGXbZk6ftMjWWKCFmfRxyfFDtvEPczwVebirWJZTKmM9UGucYME5BAHSfusArin6VTonqhtFMY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dT71KNWfK1VCpkWdxb2Mr9y4i27oBSkpfvmzmoVUuyXcZ1gN5N2wKJSSzA9tqRNFq5X6EL1kRpHkjSdGczhVVLs",
  "key1": "4gYen6GequdJ8tHwg7oZsKGzHrNCvhdJBdjRh9LmQ2kCeiEKbyZLBASYUjvgPRUpBKenD3RAnDTqNLLAgLx99EkZ",
  "key2": "Tu8uXAVKAkiwpqMLLgV246ZfJZqN2PejaXN46ec6wj84mFCThPa6fNZpR4ycHvCY9NBe5qd7LXvsis9YN3dLvfU",
  "key3": "3t4kCGXG4b9Pczb418pEAktasvZt17uZgyWFBJztwjVoyhPgaziAFfBQx8Ukoxjh1v82QJ5ruHAcFWdjSxYqJYCi",
  "key4": "3xqvGq1wggtc3HxpG3XxsjmKSCfg4dnY6QLKnzCh3wMKt5iuWZcuXNKhHX5LUMzUGqms54E5YGuad7w73dRwVa5q",
  "key5": "3rSbjZywy3d2iAgvydErSfDkVUuSW1bJFPamXsJ3PoYChYk8TnvT93h5Xrrp3NtfH4Q8otH5x6ZJEAwWKsKjmSSs",
  "key6": "2yNTQgePdFQD4DR8GgDnKsBh8M1RsTfmazk8NRywX5t2eoejHvdck6DRGduo4nrAz5dYQVv2XKVeF2e5aUVyZYNN",
  "key7": "5oMy3pHyvnRDknJdsB3AkuzMP8EPjXQsVbfccfhv7jmXGYzieWUm3AYwk1FvE8sGdoJm2TvmnFGJLsCKNLDjVAog",
  "key8": "3wHFpCGt3gaehbkH8rNitdenupFebEaFwN7o9ibRKMLSs43gsjQcGfHxiLcowTcQ8AV8kxDDinqhV2HEknzxMXce",
  "key9": "46cJ3fnATgzh2aquHrbWw299tu65F5B2fAbsThWxZSP3uuBh2Kj8ghEN4YTmjTVsk6tQfJW2PD7tvZWiNZhBjwTT",
  "key10": "3vz2sTVmyrmJkGbRmQj3yNfckfyUtJVD3k2Gdxza5e7NezENB3TLhtokspDNDkqT7mRc8WZbQBAf9LcMtMXWp7ax",
  "key11": "56ug3qoi2Sd2tGcZn879DbZh8AbcC7ms9egnTHfE3EBKqJMYs2f2Zpk5J7orZeRQ1PWi2WRNZyqZoexUtPCwahqh",
  "key12": "37HSPbsCqjCb1isP51q2zvnyGmjLMBKqUNS1P9ncWAKRzvzZfNQMWJNU8vVyz2hoQvjxjR3j5b3qs8DTg6JrLrQa",
  "key13": "iBVLVoFoYpoBZYmJp88LjfetxcRvszkGoM7kUTnRUrmV8rc1KRwtx7NmnNaLZuboEXDxbwYFwTrcSPN8D8xdKmf",
  "key14": "FJVjM17ADGf7RFfPWqyLxGBmZDcK4t8sHy8WQpX6gtEUPnVr9C8bPGXmazCUSqYMDgeGFCCgtcJC89BfbaFY8fq",
  "key15": "5gBtpPi1phojTPeQjFHJjvcSLfthr4k3Rvcsmm91unEJSEWKKXzR1r9s7uHGA9dbifpyBzkm2UoELuPUjpSnvsDZ",
  "key16": "3MfL33FpeopLQsmvp3k9MdavNxgbhN4kcYsMqa3eaCfNdcBLieqN9yQquvrT2H3rtiRfkB57dpcpSDBjCW8Ef2E3",
  "key17": "PgKABv98sV14tqbpA14X5e5nBvJdUwz92N7yALWq51Hf2LhS7ruBhi75gmSvDHXk6XskSizMDiqGznYBPxuUMgC",
  "key18": "3Y4Wb6PWeeEbTMUJ6gcGvgT7YVXr1vuXpr9Tj5Aa924m5eCcF4sVD2wwcbPa9aV2G5P7Cpr24gmxh5PKZ3QUSnuw",
  "key19": "5Bt11SCxbiAzJQoMnzGp1qVfGVrhUnqLijrgLJgPFGRrctouUjpExyz4tnrwUFAq3RvQ8kStu2odNjih4sxztp1U",
  "key20": "egWgJ2hMaEfuB9jijXthsZXw12W9ZG9ax3JNxViJ8GXYfPrmbaT1SY1REhxhkEQj1kutoDs8d9vcksQrkiG2Csj",
  "key21": "59kMUv58UyrJBjgWyQfyi6n5YzXKX3jQAQEiTPvZH4JWXhqCzm4Q929frmP9yJWhYV4HkhXxSxw4yAQAsboftp9E",
  "key22": "2gazy7iZ95pzLeYuTScXWuHquPxJDJEZjPudnqgBDENTvVvQM1L7MLniRL412jDnTWLdyoqLgJYvEsTcSvtHxQNU",
  "key23": "39efRvbvm128f3ee6Bamiscno7ecgtxzArFdcTRCb8uyGtXAJ8aVM1PBisnaApYJiHjNpecJp9HGRdzzaxAF3K24",
  "key24": "4qbKrtQVNSg1cmgNfEugpkgWEvHgxsUz4A3PyNrx2D6tgEf4QopwF61qywDYUEwQCooBesWvhofaCHRhwe4zLFiV",
  "key25": "4rst5ux93tGnAiiN26MU9Jxud7XueqmfbSJwP3EQvnCGbVfE2rshq2Fxb4Ws7vZjiX7ZChPc1qxNoB8rXb54QJz7",
  "key26": "ZVLUXUtzG3ffcfVPKwCPsXuN9unVWer9aLxZiLAHc6eNXnaPvoTUKn3GdTAykhaMKSZBaJDJp7hhPD8WXQLRGYt"
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
