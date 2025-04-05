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
    "643f6rS9wGsNRLGq4cZzAARmu4GzQLEbqDZ4CquMWw857nE4gfgwKtciyCttuERVNAjzg2yBuUR4tnUe9FwNBByk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GXgTHH1QkDR3gswv4fHa1nEFEcVQ17aVNqt5o3e3hzWG7Cr5QLtD2gCH25V6rMAQ5HguuhwTxScKPvN9yqEX1g8",
  "key1": "2phSJjG6CpLaBbZZc9ZcQntUSMhFBSojZbhWTPufeumHt2x64GHsdqj312oHfvpqCd8Gd8gTHzkZHdMemx7sRkz2",
  "key2": "pvmvHzZCnpQ4M2NSyR3BLzcdC25k1KhH3TGVkUR3hnjSyhdydTmTz69892ievBebR7meQieS2LJKijec1Qwgw9k",
  "key3": "5cXtXDcsQfsSDEFj6oTQEQcpZkaNfVum6eDn7qSHzzKQckwofsW83yGr44tVJgkqS2H4SfNJvDZjV5sDd1RriPRv",
  "key4": "24zP3AdtKLuQDYQKNX3Yec8gu1hoP14UCCVsZ2tFY2157derVujjHDASoKRgLyJ21h1bDP4GZUq8NXkN1g8HV24s",
  "key5": "b9LJSP2Q7YnMBC279FZv4g8pLuT8GRPsJsnR3FfX3rdgAyf1Db7myayfWpBPHSYfEXjeiBgaT24rzgJDKYNGFNN",
  "key6": "2NTSNkXjHskr46Ywi1mEmCLSpp6FJqG8gkZ3zWTyThNdTrjDq5hpW9xkcoMGHLKyMvAg5fbrMFWB171tmrKyQDnU",
  "key7": "dUYDvSnHeAKPZJv7K6qtxASnVV15GFcaz6z19q3TEpQtoL4TetJkvnm5TcN8sL3xpAzXtNcSXmEMeHYUhH5gU7Y",
  "key8": "4RFz9HrSyBm7JnVUdYxRzMWNTBF7UYsmkVtW56UBDttyjGaK3fjxMXePZ1RDgX278VgrV8cyXXRZYMUuh5N6gSkK",
  "key9": "4oaUviuZZAyM6rBamCzhWmjsDfkJoqSvNkFxfxqXJm5fKa57MKuB7V87un5K259UWroeVqXWa3EsGHhtH3sntswH",
  "key10": "meifJkSKrGw1bw2hi5A5naBBNfXHRsySbaFg3ceH6VNYpp3F4iVENvVRPaPNxbPu3kg4jRrvRTTZDU9kstHGkMc",
  "key11": "2F4aoBzqZLm86MXQ6Xp3RKXBXoBxNok9fEq7s5Ww8kzU7KgDF56mc28YFjP69NYb82Ez4AC9uivWTojhzKDtpQdd",
  "key12": "4yN3nVhAxFdWoaS9pe69TFCXtZeY7mzqmf47yYxNCh4o2AmpCcq1bvGLnFbcY4JYMxETqDBFkxWNgofyHK456PB1",
  "key13": "3XHa68CorCSx8kMA6PqrbNgktSQJ5Pc6YbwNftQFndJrnQrPuQdxwUQQJBLWqwA6SMomSrixS1LzE1cSJe5M6RYg",
  "key14": "5BB3tYZVFTABUr1ecwXw9KAeKkzfXZyoGBCZxFUUduGtRHNoqXKZKtX27QB3VFNzAiRiTrnFzmBBqyjgWmjUJ1NF",
  "key15": "4QrVaTyiJjScJgKuFzRiihK9yUyNR8sZHaAwSNuU96h1vJqkqUVygCDoSUEDxrnPLMm2cb67CHFZpZpZooJoBpVf",
  "key16": "29hcfBHD6V7QG14javnH8N8g33uKFAisBjv1UMYPy18xEyhtvVnGZ9W6HZutic758h3Cqn4tGhzfKQVDopsWHnJM",
  "key17": "5nC5Wifh3PiGrho7ZeeC9RMCPaBv8tM595HF6QV6WHeX2JLVtSmsWvwKJyz6gLXiK4R7JC4inR5BpzMneMNEv8GB",
  "key18": "4bfyk6VKfMKZMjmyvCCZMey69aw9VB9gWiipYASjYdXkJ8qmdcCm2fCZduFgyJiuyVw9JHrugbSRvGCoWY3S3yFB",
  "key19": "JnNHS3ZcFARXdhezWT7362FrUMKgroMmgUb2nY6n4CnzknAG5fd9hVtmnU5Ux4EHWJoR4Hi9cxnBcy8XQambRTt",
  "key20": "1CZLuSxUTP7f83zFQ9SP9jpzj8zWjmZGDDLVYPnhD89Yedo5uU47gvmPSMb6xd6iCqrX7LAwjrrVWxW7iYaQNkP",
  "key21": "3PMCi3AaGSwhZyuMQBQs6bvnP4E6aQcNQQD1z3R1dU3G3HTCMfgLRZvmeAHA1FVFYWbiUdamG2JTywHH7Y6wm9DY",
  "key22": "5P97rMmNenmcvEx9mA3x6qq4vDfCovbaQ8HHfcM7jZqqUAMxCU9KmYZjeSrpeWVy4NjNmSrgaT7uP8oKo2xKAG3y",
  "key23": "74UpQ8CKzUFeuvumzJJ8zscL1JmhtsBd5ZmNvzjfktyxJ9wHEqK7wBhA5yYWQ6SyDDK3TW3B2pZUWWynaRfRsea",
  "key24": "21vCw9RGqFwQ54HCxPTi796LFAcjKxWr823Qugfdnc4WTk7nVHuDRNwNCvQGZZeGME8h6cAYJCAt8kb2xKDESK6i",
  "key25": "5NcfHvT4smN12SsCb1RMcuX9VGgzYxrCnNwJfupSJPmeF9AG9QkCe3gYFae9oc9jJCuwWQbuSnGbv9RLfj5Tv7yY",
  "key26": "3hD63nzVYzSF3BukXyqCyChF5rUVpYbU32GHXVyALqQfUgqse5tkvNXrahWRfVLwHc8U92Q39ihVLFWsFN9ewfeH",
  "key27": "WCCPQ6eN8YT9tP1bZG8fHkhZn9yzr2HJJ12WKugpprcN2DwUrAZYAiVrGH1RVoqd8bVWVBNVmuzGc2YdaejasaL",
  "key28": "2u3VmFCdHKUzzTjxHezrGfKC7TGgWiMG2eqPoKUKqxuALhM4KGDQNmx3PLA9HxVy7otJEgMPyw2rwUiKC69CqR5W",
  "key29": "4fDEwPNJCNyfnvT6SC4iKPXoaq7uguQG8JgHBMGDsP6b4TmePbrE3dJ4ALtUq7F4H8eZr2bCBYKhcGXbcs1UHcgU",
  "key30": "2f6t7FUoK2ty82o3mJCbZFyRsriGZuU8XPsHisVcwXqMy6RQbfNfkEzm4m9eQKiei1j5SGZyKpUva5yZWGpo43YR",
  "key31": "4ni3CmPmm9FMEkmRFTqJQDiEy374KsPPWRZpPuwxgUYdwJ9QiNmJgS1rjZJLXQqNLTJ8uRGfd1YUYBPok46FiB3W",
  "key32": "H8uzL1aUmM2mbWin2D5EfCxHmFbEvDTKrTWokEWC9e6LmoCjn3G81eh38LuQT6N7Zm5PL93SrJ156w2ToiuqU6F",
  "key33": "5RnDsTHnLYbm4DZtxeE1vCvMd38N1kyjdRuXbxrJM4r3HsTkPxu2j9X4Nxw8PpC15EYfmWmpaTD77U4nRfUvs4WY",
  "key34": "2ys1iZotCZiodNmDAewo2Fse2XPFxN3Ujy8hVc77yWkLD3wECShDGb2JLEfbYifWCLTDbCw6VUmex9UPSJhW6VPj",
  "key35": "2oHWmHhCe82afHtNPRVZtMskJxHHShLr2RaPTPr7cZ4fpdkMg7hFWvzbxyTWKcahcj1DLfheFdbkMj3bELcZDDVK",
  "key36": "2GoJc86Nunbeo52UYw7osW3mByTBTY2tXmbT6TTBc2ZSfo5vRwpmCbSw3w3G9JYKpkrDnJr9xWfummi995RZ7FLd",
  "key37": "222baH8wfUucjKLp6ZvVayzwtUvk16TP87qLQENcxpknyTuNjxw1YwHLznm6NtxzdT93A9enaWgUQFtb9GLV9nyM",
  "key38": "2DUqwvEWw3kRDxgj2H6uFsWqWQZLJrw2wQZo7E8Yh3ffKLR59G5duDKejb13kpLFGKqeLsr3FB7Yo9VMFGAeyfWD",
  "key39": "5SmMcCs8dBp7rMn73HF89SoBVKRxBkgwsYYzxyYhX6ewtyC25PLYuwzM8t1wxgWdmnXUGZKGjX8npX63KJAfC4Sd",
  "key40": "4PDw6a2cY4Fdna75qdpVYZu14DdqFtvFPfEeVsgD2VEvP8chXdNAmGsmJedQKc1sPuTCh8Jjob5Wg9DfiUZy58Nf",
  "key41": "3c3QQoBrgU39tS237kjyjsRLiF1eqUFH4Euwzri5UKTVs55ZY8aQeTwswiRjHeqohFAoDjn5thCdqjvdwsERmKGA",
  "key42": "7zXTc2A6Gb6vUMhFsG7RMLtdCTFujMKMbPXXe64BLvEAmGeAmF8MRhPpbFgBDkskmexmABZmi84ECjbWcaV7i6h",
  "key43": "nBvqUXQrwuEQwFdorz4UuKVFjosxrHxvoN4wapMpq4TrnL1vpJarn9i7w7aX7s44kLo8pcXjm6NF83NsbCME5La",
  "key44": "5Yf6Njcbp5ujmYMdW8ZJuiHQFAVPDKmngjsFvboCrxxfsrk8nCCX4YnMiC6aJBiP8e9nGFUSn4yzuo43KgC5VraM",
  "key45": "4CBBXDf4DtN3r8wTU52TVvvZ4ywknhQeQgboAu4ELgxF6PYezmu7QhKKaAKXQ8Fk78FNMJ4aYSkYwUKtDXsSDGdn",
  "key46": "24fpTsuX3CMNpdm3NZtT11BMJnZ8qDFvA2gD6Ltu9Y2PhwpgM1uybps24qtEkX2gSLW4zzyFoohKcV961EuNkvdN"
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
