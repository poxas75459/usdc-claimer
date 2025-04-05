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
    "3v6KCiHAhwknYJLhzqUz5b42U8hMfkqmWaNt14bh1p2UZ4cBmhYQ1WzBxeDJhmcCycDXKC9G4wknVKds1h7LLgmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uYhZ9pC4Ht5bEsLQrvSNiEcc98PkdospfJ3aWwkQb5F2shjjK3hwsU7CsJbbR3fhJcR48aZ6HMjQas8GERYdTuh",
  "key1": "2aDJ1W6F3H7D5KKcoxhiHc2eUYBzMRswqx8Z3RgSjmwArdmkKfKjNmERWc1eT4cfb6ttpzcSoH97QTCJ5hqhr2ao",
  "key2": "5ptAiMUTs2XQhERuib2MJ7UY3bBUTN8rmGn3kHaGaCCaCxSMa4MLRQ5eCMwU53qJ1iWfhFnW2j3msmyMRi7LuUgJ",
  "key3": "2BdAUyMxNxm4zV9YnmrnkWtVr1UCsMas3rUzt8xQNQqqGdymeunENke3rXQifzprGFfzn6jpZJPSDnKP2UJp4hT2",
  "key4": "5cbgqVMPrLpR8stPXVTeKqgDUtQhz9SfcZ9xkRuYBTmnXzrJhqZZmfg3eA3ySAUxAhPB2T5ytAMLZPau7zQd3B9P",
  "key5": "52DoNshXNe7tASMQKt9YuYJi4ZrhYc1FFqt14zSub4cszcGDgNYUe1WTQoRMfQo1Y77PqAe26EchU6HoUDcnkJCx",
  "key6": "3jxYpw5xjNyVrdRWKBJEJX3Cb5W2PsqEkq643T98715ym6Afh7uRLPhw6ab6mGtMgdE7x4W3T35HpLABayNSE4Dy",
  "key7": "5mcgefUNUu8uHg26kdbpMPBUqFFWT3X2ieAzPtpNiTfmQM4uPDWoe5xzziBHS9ob7uL7EgqwcTXuuCaPF8SJHcB8",
  "key8": "2QcJPa3hDaYgNv1UWf4HjyUwQY1cTTLQxcvDXH99uQeBEiEgWCLDAu9gyMq1erSyej3BA9uUcXJJTS7xkjNVTJWG",
  "key9": "3ScaSHnYnQLwrsAo5AYWSfi2zFgGogeitEGzR5mKJ7hBNNQ2Nw7VxhXVYPUf6JppbKxtVNoPpTFaKxQ2wupaCQS6",
  "key10": "33d9YYWthupvc4xT7SVwLApBPXLz7egRorNJnHghVzitjXYtGkZ6ha2Ptg3aZwScY9UizcyEKeQJPZNRDWsUqiy2",
  "key11": "2RV2hCXcLj6stn2Ae8BMZeXXjjniPGiequV3e5tDwG58hjTt9ykZ7RRPDLRMWaXkjEr57xKdiZqf7f9kyPvHapNs",
  "key12": "4ytW99awU3rTfafjC5dhzPrbEc5XKat6S5Siw1nPouefQhQnARMbfLzV8ykpMBQKxQyoTncNi9tVcMuMquRpbgLd",
  "key13": "5aV5nshkRbXZVFcyZhLeQQnjQGV8peyyBdWDmzNvkCHECNh9kX8B4hnWtWuK3iNC2vTopHDWNwgBv5LDZJYinMMv",
  "key14": "F6DFhDc3jEqzeYi3L33f6UVqbGrGBUMu9Awno9De6ZafMz9yZB9meRYhhvTRnG1iusPf6ScJuGsev83Z3AYvwML",
  "key15": "4KcTdS7sELVRww9cHxFa3tUodCBCCQ7k5yB8vfWcrDxFmwLMHsP7tQZiWLruDDHX8PUTjndr4E7YNQReH87YPk8Q",
  "key16": "4Xk3epQsVfup9X6RE3Ezqt7GeSyBPsCD87yFA6yU267g2KCuvZzif9vCprZb7th25b9HDFZT6bwGWfiPh59qsmZR",
  "key17": "7RKRPqAbdGXwiuvp2QhGUwDSvRMh614mJTk88XHRG8sUC8XxsgvGnnkaq9VJXXJ8AEX4oJYccM3cEm2WD1sirMg",
  "key18": "5xDNb4J2kF9ScBm4KnCs6bbx8HzjeSQESt3SMihGhHm3QHsUBXr5du4S5prSZUo9GuFM8EnTBs4Xp9H32Mtq27xS",
  "key19": "5Ky9PxD43LHiHKYkq1Ti3erqeVzijXMbXiqUFYboxHPKjY7jZfvpJb5xNwiSFWgiDKk7LuKABfz71Nc3Pzq7Xip9",
  "key20": "3QkSUfkLdKj9RTkRC4KhGApG3KbQLXEfsFVHNqb9HWb2mWKABKCFcTSWQF9byg54ofsEkT7XAWDoyyjk4mLRnJAx",
  "key21": "46dKcWgDY2KkA4JqVcofcYV8VBAArYef21HTtFwHkmJWDjLrAdG9DKATS5tFby2nKxE57KMMSKdRiQLb5LTJGorC",
  "key22": "3Lpz3X1KDV8c5Gv62g8GaKUyJzudjrvxkY1SzN5VTtnxtB5yeBkTSw1Gkhu1xzUuoXkaPGh4T5g9We3Rz3yVmEzL",
  "key23": "2TzE5TDuiB4JtfoiQWoGp4JFtSWsPvD5tbXkfJG3cVBQAe6F1HtsKNEyXm8Bm2fC4wkfmQfWUi6xxuTncFgzuDQJ",
  "key24": "5pLPK7V5hXrpPNdzyWAdsQZ6JCXwb51ztzKAwuTDyM7bSqBzbVxGdMnb6xwbDBvyiU7jVk1fK8QFmvWzBenjBxmE",
  "key25": "5AT1vN1p2LMHNj5VPTmiqmiVKWYWvPWA1zVPmdKBwhvGoiWeW1hZ1ZD4uwCpAqwkQSnumYRKsnD2g8UQanrpk11j",
  "key26": "3vgnLs59LXhoUwqXjnHXeH7BHgZ7dPAs7LorLcTaUhSHHAMaWq9R5gGogpf9Cc7hdUdZ234ge36ynz2rj8JjNWz7",
  "key27": "4krW1xP4L6gyXAj1zoehfaowrfkfmQtR32bz2zwcHJ4zy8NC2XGLP37yzyn2fWnEYegLytBsRKg9sF4Aqg44vtJm",
  "key28": "2r3UBGmLMUMWSAcApGPMCt1qrcMr6dXhUNheoqjAdeQqTBy2uKxpF9R1YCQDEwT3CXNzid9VEC4WtLLQpjHprSoi",
  "key29": "3LmsGni7appHZFx8cuHoZHz3meU4npz8pNvGj1RtPc6Q8zYWFRnDjWiqNjFyp3Fog5B4tQHy8Wb1Snz1rTu2VJfN",
  "key30": "3LGmoZ3dQzLzt8C5z6CqvVh5sm8bEtdCMhda8bZ7hdn2UwvzhGLVkyvr9QKUk9k6PfryNEdaT9Dxgh6ygtxVvb5q",
  "key31": "S2gN4UewdGrVWKQbNviPEXbQ5u3YApCHLMhkY93uthJhLQgjh43qkpwKJz8MipTZP2SGrKJa3bvVjeTQhp3dgME",
  "key32": "V5MK1Uvgaw7PykGu87NWvLoraJkDjWfsT7kjX5EjgXe1ja8Ujnq53AEeMxeo6eRnNhufUY27g8bHrwMiB6jPjT1",
  "key33": "4RDwq24Nkozdghsq9QmoottdWatU5SLQjkD1Ppf6tYWghVJcu5vHuWbkD8oZ9qJsCfrErnJjqW1KR6C7vES24pnh",
  "key34": "4Svk6JqAEDjYGAbwXXfE51b3e8zysYPHwLg1bAd2eeZaRdvZdD9dQMyhjc3wjvtsDf4trrS5mmMZruifadmh3dV5",
  "key35": "rJQTmgRNdByGZfsymgGAshcadjzTz5pCSY8LKESNReyakrpXPo1grUL4p2dq89phXWf1Msf1wuiYgKXkJVQE8uA",
  "key36": "29rRxrq3x3vwJJfuqBkfApJPw8eKXza2gWgMa2B35DajfUVvJaorvmF4q1DFyTf8iLzKWiJBHi5qwHxdLR5kn54q",
  "key37": "yhuwioB74RTEp3BuK8EBR4usWsWciARUgQEavog7uGMKufGDJGcMyY7uLLD2GSZqA3tpWPDLeceBDv4bnbMjArq",
  "key38": "4VpVrP8R4H4ary1RLWyL1fDXJc1QZd76wLy6kwoYzjzmE3As9BbCPmnSfGeJRdekjADBe5aD2yEqvPxzGhDDiFGQ",
  "key39": "5Rzg77uRoKaE9nDSwsNcqHYw9U8zgn2osAGTR9rVdxUPoTVvjMbZxfxLEQADWbXxEmYB1LizrDazLTBLvgWWTM9E"
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
