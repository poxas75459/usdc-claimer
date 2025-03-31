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
    "AxFt4TwgPAxqidKddiTTCScAamXTaT7bdSvBfZ2Nf4tYaPff7hWF715GXjDrjiUe6HCYD18LvEX1f7KvYohYP8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gAi1kbsh5y6ewnEV3cS9Zk383zPE7phtb8T27HHwrqN5BH8bsw2KoNhajkuEDf6XQN7J6eQhvAda9YYRUP1CmFY",
  "key1": "2qKfAJ5uib8tuh4DB9CAvbVLb5hLoLRFAJeYucH9p22Mi6AQMJvPnLUp1Z19Bj5vH7MXyhELAuKrYhR9jTq4Mnp3",
  "key2": "rim9nEWG5gF7PvqkeGktZJJCTK2En2agtWNMtDX8gTvTdBPcfTAx7xHzt53iCdXtWQi2hPj3jkNhATMnhZViwEx",
  "key3": "4hkYhjmYEUs7H3er9XoifzMKomY36vHoJj82kwhWE1hhfyF3RjJz3yyEafMUnw72YsgZ29KQXEEWo2rHidhxBT7i",
  "key4": "36MqY9cH2Rh1pbjQFJFt7Txac2TAYymPpzpmFLUG4ZuWpf41YWsNJvqeHP4LPB9CC6C7JcAjHPdc6JALqHxX6hKf",
  "key5": "4478xSqyqdC8ww9BdgQ2BSYkiufbf5XLpfGtbmDajVhB4ovX9oBaG2BTXVNq8wyQFPUTXFSj4bt4YpiA39nN8Rj9",
  "key6": "2LPdUbHdKxAmQvHDATsoybQ7qJozHsawgg5dCUWx4mdRwRJ4GTMce6J2vt6oRiAfJqxauqCcR2QXS9uvF6iYpi7x",
  "key7": "2hth49RrVuv9L92XAjAeuQhyweUvgwjcPngFJQnkWW5uUJ9cesmB9Jeyw6vBscnPqHyVKtG8EyuM9bMJQf2ApiFu",
  "key8": "5ZiQ7VtYhnV7UuZiTaHtR8hP3Yr2rVqAPsGNSxkvNTCJXdEw9pym72hxXsjb8iggRmB7SuVLj3wh2xJQyXHHnrWU",
  "key9": "3JiM5JGS6frVJ9oUpBmPSNGFPrbBu36fskdd43UBvB8moSvVyRvTss4zhmi9hmBHJSe535UEkxanjFCnz5WDeGt",
  "key10": "ZJPPN8UrL7NeKctAwAb7R7urHQKWfmP7xapHGz5vzwJRMydeaSxijkkt6royB2zgYyzo3yPMe9jaKBV5ao7vgUp",
  "key11": "3RaY8Z2tgxSkmQymkHiCkDwK2t2r2L5zfDknPFuXkDHKmMr1Dm6MryV9XYAi3Q84Vc1RDZWUch1o6pgBAh9kQc8h",
  "key12": "3oRXgsaYoD2RM8gjBBrFs3jZYCJBWP7FhfqKsehcFaDpxrauAqBz7eBNh39hSj2SWuFPLMB9CGjc3eUZtiWNFMfV",
  "key13": "3mwxTug9NibKzrfwYEMmiYCN6dPy2WYBvRMfwZYZs5GMyXR4x46iAPy4Vov2dcnccmP3itBMtQraTpRHA6bc9g18",
  "key14": "5HfBhAF6j1K81u116gv6DQEsTQ8ZbFL7NqVuPNX4RJKUctGWww1mYBL4bqYSz5tS35DaSoAxC2X3pG6YNe6LGzCT",
  "key15": "22QxhcBceeE9cJhkZBCqBnwwjJjUn4j3BiuPjDrUjJFXuvAB7VgVrorAGpFCd183YZPPhDiMiXm6QummyQhzcGeF",
  "key16": "3i6vcFbfp62mjpiyP7tX9EW8wceSNVGP3cfrXMh6ARejTw4rY51AJqPRpDcYRm1BGnaBJ9wh5A5RhW6KP9GZr5f1",
  "key17": "RxUPbYMx6EbmHuqytBprXnJUuVTz44XPi6aHe3o5ETo3YFXZ7DxjwhkCwTaGcp2XS8uSQeu8MU7wsMZfbj2cyYx",
  "key18": "5QHiinHSzJ8v3s6VtWiw8FQNbc4adhdKU74qH3B1sB6W4FdstGihmB84vimCdgaFdhYeSCwW5VtqFPUtPqGrV6tP",
  "key19": "4YA2JjtZXvji6tSiavfh75WbLgNfAAtRwZdem6CFqZUATj2f61XY6LCCKVCSafLJ2pHQoSKE7MZwzeSwmWpHaMMP",
  "key20": "YJZYFHm9Yp1Lz86nJNqcgzGPgGPRGfU1hkmb2g6ehAHem93ndHAJ5xhfiXsZPzD1Hd1XoqvA2xgF1ufj6PXWCzZ",
  "key21": "5fpouRht3ZJ691STkz9Y6wSasHB1qN3LK3ytXC8A1NGYBeJLdW4fyLpuZx6AeRiVMeyBZg3xXfD7bh82Kfrq5ywV",
  "key22": "4pRAHhrQjD8WehWZVuNVLaU2Aq4i9Kgi7Dqcfn6f7WLQnvkufohisFXB9AbpMZ3n9KE7J2ddEG2FCcpQz7jTEKXT",
  "key23": "2V8gXKwCr6SQHbVsuRrTKriRDLX3Dmu5hngMHADmCgcPz4iBVqutUGRCgB4CCYbSrHfHo1LJmyetyYytQQiDcwD3",
  "key24": "5ThnJRS3pgVP66WxxTL2Du5fBFeoN7JyUCwZ6kAPdEY7kbfSnEEkL8a4CBzRGtNjFMsgZQnDTe8fgHBKo3wx3LiQ",
  "key25": "4jRQEV14ypJT1mmfu9h3sy4ABKLsUdYyCkDfL4yHcifBzg1niftzNsKnyC9FJYDk2KNMh88Bdid5HpEsHxjwSe6n"
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
