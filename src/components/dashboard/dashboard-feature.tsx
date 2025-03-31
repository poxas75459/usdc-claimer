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
    "5RHrFDswDyq69eKezitXCCVX7WUbhQKUnwiFSn2oF4Uh6q6UWAob3Ek8reD1smzBs7fAjDhK5RriRmP6R1tRYSvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vjy7ruWXoaqxd4i4r3qLVsbphosaya1qQ1QhX5r3HwPS3gD2KvSoWioNs8umnRSy9kSSrzpTk8EeeTmKTfhqxVi",
  "key1": "3a7Wb3XZeQYhmZ3cFrW65fZuAr3Q4cuBeL3Cz7iyPLTe8w4sQnMSaJQwqR7ZhF3usPSAUxErUqa6EbHM38Ts3omh",
  "key2": "KxHyaRQiL3Tg5ADo8TJ8AuMeV3nkv1rwDT91X3Pq9WyDQPrRnrSacRvJTKYFzMy9Pr1AWaioiXPvuPBgMAgvxy2",
  "key3": "5ySEvdNwioAZwtebPq2APnkC7VcTPjdeuQ1YWHR3q9QRSUNny3ADueEGvvoQZbXDp1MDWXCYGHanrGLhREcbdY3N",
  "key4": "4YG1Eeb3PojqPAAT82BTphQiMukZYjvPGotLZNaZDA2DzJLyJhduzUcVA2tkV3muybu5gVTBb5oCnPi8mYCWorE7",
  "key5": "35tME3wSRUpytRfsfG4RaCXSA8muwFrNN9E4BFWaStqd9ribA9Pz2RrmKWS8HyqZ6PLdTFX162GVqgcfrU6LJZHz",
  "key6": "4VcFPw5bpaQg1bsx3s6eRh8Ed7Veeyt1q5yMziqPzcrEfdLnjQTPnmkN8vSfooPHUZ39JQDnwbRuyemZPxxTX1XU",
  "key7": "hwFV4VLB583S8UUUd8yHFrKpwzqkVkrLEzEhhXdoghzrRrRY1UZn5fHbyykHrps4poaT4qnhTFaiPaN2iE3VdLJ",
  "key8": "4cqJ8j3eYCtsqHeKNfEt6BJpQALcK3ccUyJMfYbkxt1sWiJPvKa7jAM9TBBsh2U2kSNbr92BQkHJCEswNZuDPR1n",
  "key9": "4APnYxCGhqosV8Jfo7gb5YkeVTT2EzrA5CmiEAfSeQRirwkGQqX9uK38kJFouwjusd3b5kYqc3PGbT3KorBw3TYJ",
  "key10": "3Wif9YoZCidEPGbPEvcwdVgqPyiiisEgt9CDnfeLRuqsTQ32MwuBHPA1gePWGHHxpJU8ZU57iQwcxZmMhX5f6GB8",
  "key11": "jwm6v5DgiTNbRaWoUh7ydfRdCGaJnxyaFBpNmc1SqagUuvU2fka4Sq15qD9LuBsUrBDmJks7MgxLQy4io326RoV",
  "key12": "3vkoRdAoH8N9ugBYi2exHLkqA4GnX1KYq1crebRkxhonWNGyPq5mQjNn4DXTYetPKyahWZA868QxFsKXdrUU7EfC",
  "key13": "5tehdVhqMDSM2JChczL1Dzu5zAuYq9KVv9nUoRCvyRwwAedtnMTChU8i5Kf3ZMKYtEwPzoUPT6gHNdgpqFmq11ms",
  "key14": "R291BL7yE9HZHajE7Qxe29eWQgprcoZeGoxxPFNxw17USywK3fPHxJzaGiano1ZuYXsur1XyTpSSSEJ6MGKB8Fi",
  "key15": "5duETHLBzWYUbWR4h4eVY3PUrvZHNLtF6Ay8b94iqiYL7gcN7YA5v2C1W369UzMNdSV3Dmzx1JbjQUehgQbTc9Lt",
  "key16": "2PZ3ddDuxgCtQohQyT9p1gFi7RKsSBByrnBKCqP2jPYShhv5eFyHB6UyoWU2w7qv97jqrxNDv7sSudee39XSTfBf",
  "key17": "4u8xB1FMkeU1QnorRANbUPP1cEcpv2x1FqmvinrdQpHZ9BW93FMmYbnG8wkQvSu1164yd6YtKfnngecbaP2nc6q1",
  "key18": "4o6i6UhvbbWnkLcxv4Eh5CBcTMcg2QhvuU6rsTGQRPzXtm2sHvfrcEk8wmqnBs9Sba1Z1ypcMcxX7vvfdbaSN88q",
  "key19": "2Xyv6udzhvbNA36xsqP75zj41TRmF83WGPjHTfbzUBJ9Lttt48CYVTEtfFma6WKmNSo2fWJBYKu6eo5pcXCvfTcd",
  "key20": "5y1UFcSwkHxnEfJEj4h66psJjhmuq2Lw9EAF3PFPaUejryc9ccaVZ8oeP6xztupzQdcwyf7XpW1yVjAXjhtSP4vJ",
  "key21": "2fqpuWArbXmtf5PYpVpqtVyqoKeW99CBLipFwqv5ea2TWHmirpcb3bSCGfdDqofLFzTYvz3ohhkHi5BRPrKkSP48",
  "key22": "YJ6U8hvEAkxGnfr7icfH1ZrUCufsELFsKGZhKHyfUkpPP8gzo4XmavBtGT6ZNDi4R3UCTJPubbFXSTZitQzuYj9",
  "key23": "5UtqF3nATrrvc4eQpf6K4Tk7ns1bodKSMgQzL61Bd3ufq9RzZgjiEkQeJaynunpLGHnfb1xrjfAaiyrrQcMmKp2D",
  "key24": "5eoFgaaFs6XM3JJcBeAxQAT3rmjz2XKsYU5mHpZM3SB8AM5ijgYxPnCu5Nc67AkuPVpdiqxfyGa27xn8EMGXSzko",
  "key25": "W1VY63cFeRM18KMzGXXPuhmG5XpU3f9eQw9X5hfzeF4girMf2P2L4JNvbckTjr6yPQjAzvhCZVVYwdnF88sFuF1",
  "key26": "2poXE3TTSKnVvf2qATwDCjytf328n2QP1BAdsbD4aacC4ab78p8B9B9k5qushuv29sxQJRa6c5FqAUGgju1tKsvw",
  "key27": "5Gs4KBQrqAsKjSdAG7dRMKjrf2QxMzCH4nGBJhDbKmX78RT1pEFbCn7hwidHjRbHy3tzY9U4CNRAep3jGjSiwb2",
  "key28": "31RuMQMdHDVJtsUJEsW72A4Yjx5BbitCyDxbpX4DxJbWYYH8A8oBY3EhH2gP2L3PFJrBrMxMvePv8Uw8HbZYWjhW",
  "key29": "2sAKjqw8zfAporVJibLzQMXdUQ73gP86udDakntVihNJRn16tHeRnBHeQvCo1szX6qSjrz6X9h2XdrvEgArCVd7j",
  "key30": "5L7R5bGMUvzq9rtoAEjVLnVzgTahmZJP477JbRnhfxphsdDjDocvzJNng81msY5XHmRMdSEQnKE9DaTFAcLNQv3g",
  "key31": "i6yhTSic3VQ78hwXZUwQ5mXTCaA3taXM37zyYRExTW1JK4AJApfEZEEVXmzeroDUpC9YXhzJycHcqcdpHqEm5bL",
  "key32": "5BPJTvQ7NigNZ2Yk4DZq5GxJmzZBp7YFS1jeqPGjW6b2nnJf4ttQbN3afs8Dk7f7XC1T4MGM6qcbjfrBVU8Zyhg8",
  "key33": "3CS1G3CDKhdXua1UsvZfT17a8tYvzSxUuU467ZkZVsTGimkZG4tRAYxkAzor7vEdVKBZyDPyRCPZ5d2uyb1wocvv",
  "key34": "4Y47NitWXiDKec12gevbKVw92tEdYZxfTKCQLhyaFxRzErFs3xVdXnFhXw6Nu5UaaD54YsPGoYfoBR73khE6r1bX",
  "key35": "5McggxpdbeiiSSyYwL2kPVGL2f2B5uiShk6R72mcAXFvvxT5YkEatM5wd813qPExTfskqVQGLEx6PnCwBH3Mkdmw",
  "key36": "4N29WU6mdqVi4xmdE8SjaUVxzPGiL4iESRreedRMTRx3UMVurhLHF1KDbP6P8uWcGw9sz5RaVCNdQU1SoJWi51Cj",
  "key37": "2G1xkfB4wpecneYFbR8n9gYUt9b8K5kd4pxvHTQEd6Qj3Bhkdu7zVSSzcLikVQdFvZ3FBdGZKU8N1uHEiXUVWBjc",
  "key38": "32XeYeU6kKeKedm3K5AvbnYPrwCNP2aKoVawAtgwhts7JndQQxGCiAZFjvrunCAZLHEffJMQaVeoXArYfzASFhFT",
  "key39": "53unAyKstPdXy8GT7xmMUhP7ZZYNVvNFuDM5i7KvB1KD9n4LV4aopJTmEjX9cTiYMxYH174hJgLwsMvWUuEaXktQ",
  "key40": "39eMjuQx35yWKAvYtg2mhNEfmvjqLzxnUmgrEt8eojdirs6KwshLUzzk2FuZvMyZkk1jjhLo8TKMfzibVZGQtorL",
  "key41": "4DUWJ3thjs2vz7dcw33T57DHmyjQQtiJ9rPCzQZs3zWyTvCqWMsiPpuuCCYguC9FVN4DJWGjqJjqH3figLaHK5Zj",
  "key42": "5KPWHkoX1PfRjtLkFismdcdQhY3upMAmRRjCEgfnG1rFFkjkE52QTXHm7BhnTwGPwm41CC7SPseZuZjrW8uHSWgP",
  "key43": "3GA4VDSmFUYdeL6ijskvcGwtZFsHKGCfN3wCNv87tdiV7bUkXPrQ7Jrg9bauWNwWDc7ufAd7RZyQSRQcLBUp6TAf",
  "key44": "9wu78cDXEJXsfvC1TMRt35RNnwEfx2QVr4BFtLjWKwFXW7M48Bgjy5idt47aMRvDh6sNT2f52Vks2ZMGs99SAvY",
  "key45": "FntU9tgUL9uf5swKkD9ChYK6RxdtkbdYu3sLUVtkchvcd8Lkxfdf7JYu1w98eaP3DZnxke9HNwTPFkGmYY54C4c",
  "key46": "2ERc4eLvJZ7JQXkdQDVonk4AitdXUFrianzpTY5LMXtTuEiqEw1wQyUqXAWJG6YUe9uRkgvDSsArnHQa3ynbFAqP",
  "key47": "x9oRioLpEjsDWJsfQ5BwdDBrEfAJQjkdwbi4UmhLcLYqkiehanFNBj8DH6mpTDtmhANnWxQicutMrFUeHEAy5MQ",
  "key48": "3XjbAbdp1gzAwvKSDQvSiuUUYQkDKM8LWqAb661hDR95kb7vsUEtvk4iV2GjqRZTmpEYrW6wLTR973XpDxreZRio",
  "key49": "2ytmYtpAUd8xy92syY56vS3eGj3HCuV9LAc8quVHj6tS3bh631RAVTm639JReMxCRzEBVkFeXLmxxyW6pcw2JJB1"
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
