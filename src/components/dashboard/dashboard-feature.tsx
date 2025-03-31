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
    "5TpaturxqDF3EZ2mSie9Bj5iqXW4yASw2gQN2WgAZSiegEKC4BfppSPaCemSGAcVENUCFX6ok9WLTPFpPua92w9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CbcPkq4qoJC1B9eG6NpNV4g5nJVHPR74XrEbAz47rLLVscMQfJYtcgMLHqDdQuFPqpKzEpeyGveLibEFN52VQG2",
  "key1": "udPKgQeqnR4iucgiFxE4pLgzZJPUxxM2kAXwaQNwmcQjgZ7fBDnqZBpyDbZXMKvkpyaGAVyWQjd9WchWvhG7jpu",
  "key2": "5JJhSZrmsGmaM7XgmRnWFKaD5LPF4kAfokvKYy7SZSfCuFVMzxbdpSeB7sN6BqM7EgiNABjheiJg51eowaDyypzC",
  "key3": "3QHvbgTaTgxpC56BohxN1sPzLF4gedYwEpG2CftjWEqrqayUKvV6iEBdfVx9B31CjG6Gszqv3tzCzb9rJkt7CMpe",
  "key4": "297iVLBjAcPfMmKzAgtWYUTFCgeLFRT3J93vJyrP7UW8jHqsdAkgZ7aGLtwJPmFTumD12sTzXDfvjBWrcyecFDwV",
  "key5": "2rvdCMcGGgj2HAd6oPPM3cZ7dk7j8yqAeEUTC1KWBovkJsAUhymEyMhcjrjXmNTGMKcpsfMbL1W19E2HvcHLjDNC",
  "key6": "39Bdyvur3mEzVKvWvZeAVhfAJkYGPPuuXrYMf7bnrtDbpy9XGSKTcexHdSYAjAuMuFWn8YKrJao9GD3Tvk2fhTVU",
  "key7": "2BXT6BxJsJzK8kgPmkakdoCWkSuENBqyRz6djVhomjeDVKMpoHi1HqKiWnYpLqmDAzSJSxGFjbG5LEBFfPqkLe47",
  "key8": "vyoAYLde9k1v9Ne991wNQy9aBaYtaWXukKakTWVxGpuxDGYTYwNmGdJHFQYmymgxbHc3k6maydonCf52TKT5v2t",
  "key9": "PdtNdXH1co2rt29T6L3gytrHYb9J38y5bDvrHfBNAXNumyZWVt4in3F6qUU2yxRnXgdj5aFMvTxfs5Md4LZSnVP",
  "key10": "36BG9c1M6uxpUvHk3yFUd9jCny8VLHmh7cbVu7kUtFWN93xiVQD72nmxKaYZng5K9cEyXfosU1TAHNY9UasJgv5k",
  "key11": "2pVN2R35NpWvF7CYFBVXtrSuC1hLMh8B4oKazxK4mfm47D3pG2pjgiaw68sJMbEhZK2mJjNaFsg5YAaoz4xRMiPj",
  "key12": "5mWHcNHTBvQTJFdpe9bMK2cSccWWAiA36YLaiCMh8xnz33o2xF5v2zbYMYCp8rNpuA2ZkjXtCttExHkESAywHYrA",
  "key13": "5dsjHTm8m1csVYQ6Rf7YhJvgsPYkPaXdJ6DSFftsGLfGd8cKET5kWDAV8F3yTB1QzVnmDAdwGgC3t5M9X9NgaVut",
  "key14": "4Xy35RNJwUaNSiUb99HpWKQgCAmBEEYhpX97i1MZEAXKQD83BV7Cs1FkX3cgBBhE6rS1xyCH554LKWGJrjPnuoGW",
  "key15": "49huD8FrroGn3B6S1agGKVjuaXpjNQAmATrWgWg8cTUtqM1cYMGTfLh1cbG52RJwRwYL84YwDXP3BhmdsYzesHaW",
  "key16": "4aBVDzaTUg6SCEb3zx2KzGRXfCuaPAimcLogtUQmCmZsz5WmcgXSMF4pAmA1V16vYgwt7Y1iyUJC4unoMsfEMrpc",
  "key17": "5c7dRJfujgVn62kgD48rs4BqMjDvUH6En49k2WUponZiD1RprGf3UvspkzEnkGftd8KR87GtQrvv74ncskYWZZ88",
  "key18": "62QUtGDsW5zQZB8qiTNY24AzcWu6XDHaaS8Ec3eyaF6KmHo3qrhR1t6sum2CTGMJWuk3rmZQGpVydQfFiNgSNp1Y",
  "key19": "2XengDDWPHGn8dLdukZb8jyfLUzTfgf4kAiYzLvJavtufqJZbxRPF7C5uQdqqh1o6kCAMsphbvMdyUkbGyuEwLKC",
  "key20": "2c4kb3E3vj4GcCNaSZNBN95HMxEAXNo77kQt6m1a28R4dT3Mgz4KTSGvwBNcnNv6M55NtSYfeQEHuP9L9LhpL7nj",
  "key21": "3ptfp8LrNd1rpkmbUBXD8mEH3aKKXyayhLYhCsAo2a6gi1NXNg5vS6x8YZ6GLcNrdUT3fAEXM1Vf9XADy7Azux5d",
  "key22": "2QGy1dbGv4wPopaXH64CwsZPiJiyVzCo8Erw3xhNEx5ySX7p3sqDCxYria88EW9ujrubG7VygwQbccBMCZ8QoHT2",
  "key23": "4FLcpkHoMcy6RBwge2kykuv1z9t9WM6fcdHknfHVwFQwL37UGnFU4bbTEzTfeC7AGZ2uhspuR9ydmTihSSoe6mDH",
  "key24": "34e8nCkc6NirUfeMdp9NS9jTsGUvsQSEiZjc4XE49prDe2SoUH4ovPK9xbSJo4m7BTV7RuAnoSoQoT2MCvPEtzWH",
  "key25": "24ct3F8knvu1RCd6skoSik7KkvwW7gPxFczWjsSpqJrPKZMMydkRWgEZC1zqG91iyeX5G4ehzZ433abhYgvAashH",
  "key26": "51XLSV1Coe4YbsTtKR9UZGi95Lc7q9FHDAZradWu84xfkfdYfqLxrVrMB3juW5abLumfYbBAevMDCeEE63VFBkTb",
  "key27": "4jGtMMtCsJH2HxnLTWJfUrBhE4u9nkQZj9PDLfJ3oDZnTDQQRig7T3RXyi1kBmTfEXnrSQNe7qBZukJPwpH2SE6T",
  "key28": "SD5MU6DCtrSoQw924gC7mGD2wvy7tbbDR55DuyTM3R52h1hv9h63j8MJYXCWCESwrvu5z8BNCbabtdKuKHxWb1J",
  "key29": "3Tf9PTxSM5EzMCivmJUfK8VW54VpJWhLuWKQ5uft21kExECrUG6CjRHUYJ6XtXoeDJ18RNEsPQYeHDsS4CsHpWQT",
  "key30": "iUskPiyJ7oW1ERV82JH6KjyLWaQXzCfRv3ke9J6vNH5SqMCYyxbK6XnNVXMobwRvBS1uYmw6zirwwvFHhvtm6M8",
  "key31": "34VTmzLqzUFe9znYumjpXeqd7hQmoTWbejVjz922x4SRDAgX6Bpx6VoYC6W2QcW2ZCKSFusX7GkCLayZxNugE8eE",
  "key32": "38uQK9NLV5do81so3nt5SfyNnAaCfGGb5Ejx9sRfnAG2b47QyfJhKDEJD23zGhA8wi7bQSFsfGipVK5isa4s4XSq",
  "key33": "65FpdPMDyBXkv9D3R7MhCj4LoThNpXvtW5zzcrhCqi9Mi3MiaR6fYSGYXBZbAkQVL3FodWeK5oMu3ZX8yYcAiRKR",
  "key34": "jzBGMUCbRxQkLsRU2UtFEkroFcupg3RMmiFDZRGu3d1WwqXzHVy4WjwNCLP8epaDxpMfEnParYJCNHps4gPUSAD",
  "key35": "5jKQYezKfUrN4SLHHdSjxfYUok1xCcukSvLUtXu67NcBNNa6EEsXpcfpKWvKKgWdZwGe2Y5tV9U4yLbvkKtnASFQ",
  "key36": "4QqZ8xBN2j9mruL5T7X9JJGUNzhjwAqfGRsb5x6iSspXz5W6q4hocg5jUPfR9J67dUMRD86tTuVXQ7mpL4MimYhk",
  "key37": "5dDemT6k2C3qLbZr55XU9q1dcremrS2JBYjNpz9DGNZw7yo7UcFvfPYmtoyEWjtuYSeLhemYKuPgFTmU4yBhZeCT",
  "key38": "3xcZZMkijTNACgWYto219fdUkHk6KcaG2C3dyxV9aSDCGX5D575Fk2NkciTSRHKYQ5FhrQFm8Duu5nvP4DCrUjSn",
  "key39": "C3yozuv3GMeH3k89At8nVNiENztcBCiajfWENRd7otUhNUR2Nc1HGAqcQ894nFunxnbZAXtnqAiJZbnvyK2LiAi",
  "key40": "5p1kWgdM7dnPHt9Dxf9SPXXEt2SC1ouLe8NzdyBwqPwQy6zbhNPr3UQRizxqvJr1ScQQyxiziLeFufDUYLrZqoVc",
  "key41": "5VR9AnATNgesMZEVZD3Ky65ZxUm893UY7hBBm6yChKUXY8YEVLdMYqzbeg6mYgRked7vEXt3ZbwmPMnnPKJvbxJY",
  "key42": "3QmCVyS4jvaJGjitJTzSsrWgFrvWethXY9h1g1LpKUeZXGgk5sbCdyAM3QZhdGpGsNyJkSJ9DxwkrrcJGSuZ4of4"
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
