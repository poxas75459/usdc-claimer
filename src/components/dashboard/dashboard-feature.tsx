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
    "3Bb7qm1EfaR8auKZK19D1WA1UTEaTLzYRRDgua8kcpdCx2NKfvpdqRsAM9RDvpBWtFPYqydZ2fFGqHUWNUvgGKyr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B1d58AgPNaY4ANKjzrYzTzsNxG2t3hQyW2aN1Tfys8eeRVVreYiKGL9WGvUvDs6zgT4PmoBDKpKWQEboVB4LZgf",
  "key1": "2JLaEoyj2UgL9StzCb8KwJKofmmkf68n7WymJGQEXBSphgkNsX8P1GSCY4aa4wPRH9ugCgdEb1LRUXu6dcrtAw8i",
  "key2": "5x7aoHSycodKjvbJh2mMKJYd1PpdmxJk4HhrHsF1g4w3SjeDRyaMhYyVede3Cm6vakyK2APtyXXiDr9DWuXAmVJP",
  "key3": "3NYYnJ8EqTc9xAYW4pnrV6qEXe17ZS51dJbu6DANsRnVxt8Mbnh9TRLRmHt7CAsjMBfNmcEt2zKffDJRoBwxiynv",
  "key4": "3QnvdGV3dktdYSSTEHZKY2x8q8mwkc1fCz58DuErT9WgtyC2BMvW2r7JjXqE6DH1LT88qGUBmGHBBFhECVYDHdtJ",
  "key5": "2CEJXz15P62Uz7PNCyKuKnKhEfquySWZbxctVh1iRhghkTrBWcmvp3SVJds1XsNTQZe4261HCYCDXcjphhfP16iH",
  "key6": "hBJTffyVfE2b845UtHKYGaRKSZdhdLu5S94WkLe2vq4dXbaAERRq7gNpf6zv4aBUqjxMNGa5PxnLc2iwwwTMMz6",
  "key7": "2qCvPPsdJwfKZC9QV9o966konHhrA3CVUrBrfMUrqFq42hiU3kMzkpdBHV7DnyFQkD285obKv6J3YD2eByRk38aK",
  "key8": "5TtvAUPhTQi4VpS8u2RLGiTykdjrKUSZnynVQ4CwsB2qSWMvRZYi2oRS8D6G9zc4mjUaGjLMNvq1sUE4pfpqCd8k",
  "key9": "MrSmNzPH6pMbU7X1URUr7Q3c411iqtKR3GR7dGgr8toCBtoK8xHciytRJxb4y6HERsca5Dp3Gssu6dY3hv5AJWY",
  "key10": "626LYxj7hU6L6cMthTtQ4FcE9So7HtKJ1gaM2ucHfTE8kCV1bpbfRrdjyhRhrnUuhE9j3HMAENpi3cY4jJ3MCkP2",
  "key11": "5QUmGJz5Mkg81QTWuTzmcNkKQqnd5pnRETMkzEtWSEE7qvEvuk5ZxDBqaT71qZMM18qzAb4Jet45w5vCdBLcoESu",
  "key12": "5vCzSq1xZnjaKqPZct7KBFftfRJdKveoNtFqMkpCD36jF9GvWZZYYUU8arAbbwemARj4mQQCfhU2Z9nsL8sn4iuJ",
  "key13": "Z2E66v8sAHcedSkAHkDZjrPqmpsVej5ow9SYwdoGgPCfCCrRNFFuGuCkKeGo5MHYaRk2FniDNhVtkf9AqbNKLr5",
  "key14": "39eJNvnaUzevoKhPqjPNA3tH2wkDZYZLYRuZWmLzNMcnMmpoqTR7XpYd5Rm9vgY5pdXtsqKv26VqMovdFoWCwzMP",
  "key15": "5EDJHERmoUBdAWA9JZLdwn9AH52v5PqvE6NZeJvw2oJNA6eRBqccAM4PjieAD2hsgXWqXVQD9ZvYYUwLBaJ4fJEE",
  "key16": "3ARoN8irvstiBSPCsYizjLaDBiVy2Zjs384buzodnbDbDJ6zhVSSEKLJKug4fStwywYUKR9SosNuyRyfURM2TWQF",
  "key17": "58iHAsMN3r79AyM4gebJ2tPkWoBpzWe6FpYW3f1U8dKnTzdc4tNNRpAdTpA8LVEN1mAoSKokjoixuqRzUkVmcG6v",
  "key18": "2FBNBd4VVrfbLPvmZpSSJhUbJznXZDpbJP8Y7LyaALdMq3ayP9RUAVP6apz4YY8GRtjwSExMv85eZyNVnnFkTZwe",
  "key19": "5u1L96HYqGMGQ9dKBd8v6iY9tsPn22FzCr5QReeKCxC4JcbdVcQyzxWp8kCMUvpQG6B7jbr1fjG2uYLHRxLmVQ3r",
  "key20": "4EtcmuyCJYhPira5AWLBpPWq57GicEQVfmwqT7fJu9gJFqzJrGu75Wdd5SucQKZ8zoCdQ2W5SvhV2WK97RU3UE1p",
  "key21": "26zfxdRixTghBuhRXd1Map5qjuhdqVw1R4zehCSqPA5UwSLfs4EyDTGrK82njiL7pJj4JWMohhJkYXwxyhLKn6EY",
  "key22": "XSfv1m3egzMTiP7xQu7cuHADTAycfpCXf32tFgGiRLQMovHNtTgr1x5jLVfkNacrTJJaGXHMWFex9ieoZdKC9xH",
  "key23": "3yWtjvr9pRYsRSzTi7GEJ6Kp1WFstERj49Fc7Ntr8E47TWaCUD8bfQzjCBugPCKeqLugC3FW82YHShxaLGwyMxSS",
  "key24": "41rfi5tMx1mA8x7toXLXMRvNQUFZGmwjotsZwgK8w7AWesaH32jpsfkqhKdumMaMY5EVyZ1HEjFx9Nw7BeixiFvk",
  "key25": "Mc4KoG4BCC6spa4Wt33yQ7yLrGfmZgVtDyAMGnivie78jj7nJokXP7uw2NxJSfPhLAqo8PdfDP1VYjJBW3Lm4AJ",
  "key26": "3mL3YG7oTXtiH52gDas8Ex96HKaHoB1HdGnavf4T8nfohZyAcKiPQuvNELJhLWxSvKxd3SHknxGqhUFP7Fth4Rmf",
  "key27": "4Get7Afr5qQ3PNM5v4zzGXuuVff683Mu2UbGQeMMzoumzzFy1NVR3hEinduLEqimdS5SxnLf4zYoFpLekbjDZcL5",
  "key28": "3yFQpXExzhYq7deaYy2LJhSahdwGMFhdWJy6zwKFM7ebTpoGvG1eC2QiQdFpEEFpyd28Bngo48po4qBVoE7xQx9t",
  "key29": "yiciXodV9k7v1MhotGEyPLYGsvLoz9FisVyogmF56sEn6244mf9jAPt5CoTupDLEyqfnspVsUgzfWZo5WaE6fct",
  "key30": "342AhGLQwWaXyyjT34uDx7511LTrD4vu6PEsKPY7fMwpgkD3P8UMAagAd63ZMRvZzU8uLm7xedjTTsu7Xr3wey8G",
  "key31": "5tMvbEPVLLkyUeuKJp1fjV1p1wrqHefcXFPuZTFAiWHB6oJCWbk27We5YBDdGfSayiZxKrDyQNpNNUeiZZMW6mNg",
  "key32": "5NUkkRFsmaM3eXFWLg3kfpsVFTrLb6TzktNteCnXwEbrTaxwiTYJ7yZJYcDhrJm1TPB1fon1M8bAQiAsmHTn1Zze",
  "key33": "32CVF4bvv1rofQZ3ofLfB4B1vnRdjcniEut4mvfLBek6VNaQwcz2obeE9fWsMp247W7YjByfmibr1gUttPtxu4pQ",
  "key34": "5tRRx513e8r8hecurQ2EENbddJcJd6YYXzmgnZD8QLbwHF6xg7RGG8heZncevL5y95XWa3Pk1LtnxKNRtmd4H3Qe",
  "key35": "xZSe4kd1BSxz8sDLnEP3nPffwZDExubhkrjw8AepngMkE2L4KooBZcJitnh3npPRkcE1RPMyncwDpS9Q75jveKB",
  "key36": "4Z29dJWTXGiugiV5bMS6d4wNVsqMUksYvic88TXSjibGC7igu1hi1Yk4fhgi5yCKwp8xghNbiaLK6XPfEtahP7g1",
  "key37": "5NuoebB69orYR2Exv2458GUwbfQDXHLx6xoLXXDgczukRrSEGuvD6CE2Z4SPbNNu8fZcnDmKr39VHNiFG15iGgBm",
  "key38": "4j2ThSZCeBKH8c6f8N8aZnHjaE8sWsAG6VKtKN471qLyJrBprwDZKAQsupH3fdowh9yZAUuBwyJt68gTLfbCLnk2",
  "key39": "3Yf5oZknudF4fFT2W2QH3ytiehtdHBdV9tMXdFitqjNVeFDMpXSHPJr9uRZENrjuTSXa6roTb2gS1w9iqhcPv6sh",
  "key40": "4E23jUWFLDYH8m16wbn4NiTQ4YZSFT6JCrsfzSBpwVJhythfxRD5gitHGkz15pnQNRJ6QxLkZMobszbGyyQDBHiC",
  "key41": "4x4Jq3gfqGqwWVYEsfET6JyiDxQ3MoJKXSjDFxFYL78aHM5fQ23emDBp9CaLggotXJjCXnWjPTPrs3CvsXi6JaDa",
  "key42": "dSQvLET6jxDPU5N8nH3FEefdA9BXVthWdkd1hkgd3R8FthQDps312SGhZwipgRCGUsEfKJJH4p6p3vXeg425wnP",
  "key43": "3o7bEMYor3TQYNx1WiNhgvgYqGibFsgtmv7nJWLpKPu65A6bW9NNzzKx5CR443SmtJLtbTK6Xn5vDr5HZrMVFpsM",
  "key44": "4geh9gEGwDaeUcPeYWBeX2cHc4EYCrkpfVF126msfhucSgRmFXYczk488x3uRcxCtpUgiLggyha3y7vsE8z7Xket",
  "key45": "4LF4hFwFX5enVstKtR3F8x2ddmcP1caJm1QPmoR4XWhCtWMZPJB4L1uVx45FvLWEdPJiRsKvVgqXRxUabLCMVn3Z"
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
