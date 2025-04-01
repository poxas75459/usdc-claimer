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
    "uPyAza6GgYhv6jADppx1CKbiiXhiEQR9we4iCUJkJnutprfiZaBtqSCBJB3FiaMgLNg7WYK6mpeWAaAnNFtXzKb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eUn5mEfH1XnGrUJfb9fZn6C5W1td9h24QmnPm6xViAfZdxdNawyvKKbMuYkwockk48LjVD92TaFaoBS7sgjnyXc",
  "key1": "3VTgQTbK9Bf1hQmYBs3Rvi6PQpxbK1ihUgHEdgYYAdqWJKgkRFJkX18WvMgy3kaZgTHGD5x8RhfsZYadArKr9F3S",
  "key2": "5WYyDUZEK8VeeujJas6qHSXx2EFsarorzwMV2n3ZTrGrgMA1gk9TVK5gTjSCjfPBpGXQcUgWG95aKutoK2ne8ZDT",
  "key3": "te9DdrZC7E8v1icBod5XLbNGF2KJtwTWXbyEYvv9r9CcizmE56PiEZA4CgqzxjWGTj8LRiq3W8QXTqvy2nMgN4U",
  "key4": "2ynWkwGp1M3f7nuEK96zRwq55UiGcuu8dU5NDszcb2F1akcJxovnFDY7w13Yr1aS8nLdjJVTSJSk4Wx4juVvT8D5",
  "key5": "3PEBN7wb3Zv1zVS3PjPoXhDzWpMJyKQgiJu8quL7SfEjnRrSawbHoMx3zcoFcU1mhAeHwdjn5SGHZyTMnBseMEbm",
  "key6": "41GzDn6WRbeAxSaMi86xxpWHRTFiA7UNAULpvXEf1dsCBEZQCUWNP3XJt4bx6ae2NtejECjxa1yZcymMkM2ni2wQ",
  "key7": "4QZYBjDxohQKN629SW6xNDtccaQsJpbu4yhvWeMJicXAdijHTMjySP5g5XXVRMojFRVHVbqjihpqZnEwNe8jrkBc",
  "key8": "2KBd4N2t4aCSeXLTE8TNjer1VwXVWuv74W8eoAgLdZMK5ZAeKxao8sLeNwgXePwWbiP5joD5N6xY1z3SbK56NM7M",
  "key9": "4fXtmPXT1CmzFGn4XQxB5LxmEBnFNi1BEwX5haxfp7vnSvrrEBJnHDj8AHfgoqgf5WAMqEqxNkUMFL8qxwLUJ1ih",
  "key10": "2K9X7Zd65HQiHodcjGVAxsETMdWigqA3nq1QRAaYTA6sADhcEhNb1BMp4ad2sqtqAXom9hXSG5SbmisEnsd5SVX7",
  "key11": "4JmXpoczmKyYSc4uk5VDooP2kwmqQNzv9PtTrp2wpz2XpJwXBDHh7e6jWhdD1RmemhzPZA9eeFPhDqdg8f4ttvDN",
  "key12": "5iBYvzAckdVBCEAuam1vu5ctueg5vdAcJGwXFszXJFrfyg7WRDfLibbeDNhXK3H2ZYqLFuyQs4AGtwn5a4GTbLuN",
  "key13": "4UmJn8f8akG6GdAq5ugbtdksx4wbSECTamf1hEj6frvv9y5yCmxMsGhB76mw7xmiFT2TYJhXkCVU3Fuv1CfFd59",
  "key14": "2gasmqgxd25NagCZLje9F37SRUhAXKmuc1qgdUPKgYa7DBzj22YB4stMpvzvowYzg9C8ijTjpcoHcwdHdV71Uac8",
  "key15": "3uPuMMf7zPXnS64NoennZR6sFPL57GwhBq2dAVrQLy3CJGdvmb3ZeBHjEBdg3PHmez7TSB9D7ZFDXUrnYpJ5W1yt",
  "key16": "5qawcpRGS4fVNV65H9MgAYBw72vA5kpaGkazzvuBbnyoM8LiFycAJPPUB41CHv9KemoaUfhivZTT76DHRs4Kqdbf",
  "key17": "5Mznykf4fxVh5RehnTYknjJD95oBLdJaMtDiYvpj3qbPNU6hYxkiwqrCRLaqT39FnaRNbRxkt3S2oTZkxgzec2pC",
  "key18": "35qy37E9sUHbCgpWZyGqFzqziiGQn7s8zMDCjuW3ZaZ4fgd7fKstRizxNzWdaye5YMiCLzTzVMYDhRfG82YL2Bgq",
  "key19": "35ejrSYXeh5kDRM2ZUt7G3v5nV8XLoQTnYv4hGZEAU3p9kNgdHN8hV2ibSR6urZUBgW6xgQWANXPvRkwiHWW7LUe",
  "key20": "4wyb9o6dXTHmZaQSt83QUcr6F5s7WC82GDdf8iLokaoDxgWK6ZmuMxLdib5FXBpHRz8MHn8EupzkCXvjXeRSdca2",
  "key21": "65kpqBoLdGtxEHjJsjAaHh5YJDmFC9xbh36q5iaHBvVv6Jdjvb2QaekZoMoj95sVmxzQxsd22PscKrjUnim2Cvxx",
  "key22": "5ccLir5gjdyFDaFMmnU8C4gC7vLc3J4r5wxcXFSwwR5WX4ZMVYG5sJcag95uZDHHuFNDEWLoncyeMEJAKW23TD7W",
  "key23": "2cASZnyM5nQXLqJ9byYcjRqfCWya8vnWbAwEe35iT37eJwZ1EPKXehK5f8q4QoGiVXZNoLdC2Xt4A9TSsxKRE7pU",
  "key24": "8NKiCkmPFfiL41SoE874CJPnb4tKopFYatKknW8UbnTt3Ma9Bvu66Tv7edxv7szE9buoiKQSyw5ezgR5soX5eGi",
  "key25": "53T1pC2te8BwCoKM8RRnnobRLE79mvSp9AMZ9BJbp2JS1cevhioQMaZFBa4zpxFqLMKLLMp9FA7kcbCGaR4XiEcH",
  "key26": "3AJoPKfQSeHspGJEoPo8FeGUoZaBudUDVzA5Zc5tR9V3MkpJT73m952jJjoGFaRCA5mhuACLy9yQK9AqdWLv1fCG",
  "key27": "2q71JCXx5S4YV3TdMbhRzRWQiym2iwhLWfos7nUbL1rVXDeCCMDTrkNewktwhmoqumSWwQZy8vGPYh7B2Z5TxTMr",
  "key28": "4EaGa8X8wy8kZ1GK55cSeMhaVcB1EafAPHa2aiUBxYB88u2WVpTaNDVuqdM5sDCGUitLGf3y7U3Q1BgfFme5HCZu",
  "key29": "5QRXrQZVgrzBepHSqcj2fAsqmNFBrfpEmiGf3nrZUJ5SCQfBfjBCDE5H78pJKr1YkhST3NMpHvYqwtNFoAJ4dNuy",
  "key30": "5SPkHutiGCz1WeHi8jCSTAV21Ktuzn96YAipm2kCSTUg8kCVNnezooe8PHsgKnY6d8oR8exJDv5dWD8uobh3Nhsi",
  "key31": "2KxMKVmLL7U1EiBYUhdqYReWijmb5uFb5qgGxPv1Xohcf7RDQ4V8i1XHYkrUcKy3wkyY2bvjLmznJej8bdAvAxox",
  "key32": "qMJjTJrbkVgX1bhqpaQqjZKkseNSfBMZxo6kyEMrVrc1HRgVKZNb3D7R47UGTwsy5PR5dG688WpdKnejmVZ5but",
  "key33": "3rNBWtsYJ9yUUF5b6bdDm5vj7xbHNWokcLYPyN8vGSZQNoqV2naU7NjjHYAdJvrpsfkU1t64WrihPH7YZa2ysHyE",
  "key34": "4BptxqepeuLKehTjd6b7Goz6trjavJ45jU3zcdZ4f4AsmXrwm1VGkGHX1KfVxJhTQ9g9nSeQq8txvfa4uRpV7hWx",
  "key35": "67AQ6GGRCuK3MjTt5LiHFGBAhy5ENHes7fm3BfbFFQUx2KdCYhYW8MyowuEVRW94EeawqAXiv1kyNG9mujYv93Du",
  "key36": "3aeKKTzg55Tkv7TMKJnujZEqhe6aaw5Ek9tZTgevkQKtVzYdWrJ9esAzSEARqex56D9kwV2Qemega7GpzSapTCRU",
  "key37": "TCd8pLxGai9osALJE2ESjizMFFBE2NgPo6tzPKfDowQLnY93Hbw17RkCjVu7rP4c3uifj61kAYR5qJMf8xfb5aq",
  "key38": "5UuQky3HQnvAkSnkBJ8LqhkZUPZHfsoA8VRH8KwSi3vvHpQFWLk34vBWcr2eF5oy3dLFJf3JcJHuEDucyyFj2iMN",
  "key39": "3gW4tbqtdSN2EBMU4qzeoU1ZZhvEz8w9TS1Vyx7pBTdZodqEvHUqNfa2BLDYD85AcjUFA8Z3cX83Sk4hnX6a31sp",
  "key40": "35jzFPDvdCjRqRCgS4xLKhLtx5yYSZ6CVRnYuFHvRzVLKNrtdMUkSDqwCrYb6jywmjtxpu3JJzAX13VTxAxFaG9A",
  "key41": "4jkfoeg5horFJMyWLt2jiPTAaPHrh69YFTEtjhUMqirrfZvpjYpXhE3NhViytHXJveWWNK746rrSQHh5ifrcs39W",
  "key42": "3wS5FmXg3ewEt8kRzhcBX81YsczJVK2GZmWhA6NP66FSdoxKPbD3XBvQvKeUFHU6UF4Q7q5TnJMv8TnSgsXfhHLJ",
  "key43": "2ygbXmUaQ1gzTsxfu7FCxFy6JCmEwpZXNaW5qVe7R7XLnpXfVvWK8FuBzPyiGF46eJXpsfaBicRojjHqv7jdpgig",
  "key44": "3eGEW5jgUCotGmCLCWcJzkxv5nLhQ4KNcGLJf2ZnooXniFfrx5gfknmQNQ1oL8uLnmfYZ2X4PHovYrqJ1hvoz1VK"
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
