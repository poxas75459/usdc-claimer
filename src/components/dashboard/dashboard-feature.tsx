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
    "2q3eH1y5etC6a8xBQ8wBL9GWbqZDHWSYpdsRacgwtFz9CN33UtiSuRVd76q7fV7oxSEHxmahrUDd3TisBf4ZVcFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YZUVxFLaHrNzcsibnA88RstJRrtX7Y5pvsU84vWkm6si9LBd9ZQYZWeDDRbJWzRYbTpQ8SvWvpk4WPkRi3kCqr8",
  "key1": "3vdkMLLF8m1WfXfxARqLCPioLqCGtbz2yo1JAbTRLcVMYMknF1RDh333mJNhJAot4WMcTQssbjngRkSC1fiexX5H",
  "key2": "3Aec6ZhwJuXTV2aUqJgWtmxa3nxFGBWYWVEcUa1BZUxCi36BrYwvGWJUjHY6f4pyFzWEerbaY5LQXopjCQ3BHLEi",
  "key3": "VxC2YMBTWHngZVH2PWobEtB2Pt1JqqvmpXBn7PoKXePHTHhp7iCjZBaJyPoz3EhfK6SgdoTntwbnQ2ETAWk58hA",
  "key4": "3CWPrX7ELggd1BxW9fE8mqzqLaxLbGCZFZbc7KksPoEWs8VHKxhipoMUPALBoSnnSRmDn13rbrhPti5zz8QbCw2b",
  "key5": "NvwxRp1mpxK8XSphtAimWhdGmbV8QLPKu96LqB18dwu6sEe6NuvXdvoPGbhhRyscbcVetPrap1jcEzLMTevkg1A",
  "key6": "2FanqFVJum5XBKbCvTvvntLMgaME2GmmrZmAPyN6WjbNfH63GRfUbHeMppyjwGALmEZDYnDLNwVgwoWrQHy2XDTF",
  "key7": "2EcqJr7mxwHeLeNPjJKy7DojKTPVWu23hr3M7iXNkxg9gkC9c8RAHeY4Tgp5LczuGqkSZdB51sQ2Dn4kDBexbDSx",
  "key8": "5c7aTcykidqjFKFwo4NCJPdRWPvthCBWNHqGdGj3ywMTQrnpJcGvSRKVBjp5ymhL8GSqmxJbjbUBtXQiy4nJ8zy8",
  "key9": "wjw5BC2MiDiSd68GdMQ3PFBdE5f3f9A66CZbrrmjwB6EphDG1p6SGYfKymaWuDxm3mhZikGoVzoCsuBuXa51Thw",
  "key10": "2QA6ZYQk34rxbDiZ3HjtWtp4rV1AEvpnRMdFScm28J98Xb4if4wWYMhVV1pPyBztwfPfprxBjKUs9rDYTLBdPWdc",
  "key11": "5bbLGzmvqHWkRmZwxrVLDJPULSBw8EpD3sPyrJ1EhtgNFQZuJirESvYaR95XikiZdoHQZW1KjZRTTFRVQgLwBXGo",
  "key12": "5dANHyxvdwatkJ4NDLR1XzUgbNuGoa4uqGjZ6QpWCHCfTLREqqHu9bC6PAM2Bxi8nMZGWQi3GZNJwGJwcM9i6CgM",
  "key13": "5BQnE88reFG8xxHGDN6gnSkuSPXfy3jCWGB5wKR4wH9iu7cSHYhsQfF3VxKxR5tZ8xupdkWCFDEAgTaSPFNbzdco",
  "key14": "5trLf8By3zSBnTLgzmtRYMNEhtwZ7i3epJbRbVEymAD9iwt3NswC1L2znN4ZczvLcrxQ6hodH6RVDh3aEGbjoYz2",
  "key15": "gmMPK7z9nYLtcCXo3mYRGffdnWf7FP5hosYhv3cDn7QrcYVWmGPyLsPzB43rbeRtmZCAvkTZ67QVExrLQ92nvkw",
  "key16": "2rCNgxB7Rv44tLckMx9yVZcQoBiV3eMndZFRt8qP71ihee89z3TjYB2fJ3dx8CtTgsd6mxYn4JjNWiEChpZ5xry8",
  "key17": "4KAva36qtFzQB3wxsD694K4p9fgTAVSo3F4LstTNPuQKeMoZHEdVm3Lna97mFgGjmPB8TVu7zqoJhDzQ1tGvtHNF",
  "key18": "5MF4rrKjTqKPHbqcPzKyC5s6nCzMTZ3HFpvmjsyZwc4XXpnQr2GSuA73DxNQrWM9keF6ACrnihXwZRc8sRXiJfRF",
  "key19": "2BnH38xS2QB2NPNjH4kr2jDzBVVtUvgVGbhLLxzppafCN1fRPj3YgzBT6U64cmUqPveLCsL3xBu9pZHA7p3hTXmo",
  "key20": "4JmCZVkd68eAuaVVFDtqwv64phb989A2vXD4Hc7ee4f2F4PHe8JB6F84HQGw5fmZCX4PjYrGeWaNZFA6sokjGUST",
  "key21": "3EMHnR6KmWmXSQuh9PCuho8yytpty5ff3tCiLPQpiD25RG7NperkC58yQ41vEh1p56PbQxBiLxQAUAmooLfgJNog",
  "key22": "5YJRJyrVuw5PJtYYYvxX3vkKeejMdb1gEyX82YHwfjZjJXAeR6FVjzHHpoCf66W6CJddGmdJjB8A7nmPrg12PM5p",
  "key23": "5RgUkAVnyAfiY5Q8QwkoQ7QhQq2EuytNfDKiEUMMSfgugspgW4RaKYmW4m1w5t49d5kazA1eMjEDuutayqjXnjnw",
  "key24": "y2vSZuSGWiNpCCC1xcDksLt6kjzXx6gThAsfMy1wWJKJ2YLHJvz823jf3vsNoQTyWevXDQHpVauaBTbWwwjjpsc",
  "key25": "4uZx1s5jVHDDUmRYQ6L6GcK8XTmDgXPpaojM4gQPHgBJKibiFAbnHpMnG6Bk8ZJbN1z91GVF4QJkQmB5k8Mvik9K",
  "key26": "2bAR31cjuDa65MW3htLEo9vT9Wa6qtU6ii7G38oXc6fqv2nDbcTdVHTfH7YiMPzYobFGo45uGdEiQ6BzRhdobPu6",
  "key27": "4YwT8jn3CdgzvkBPYvRapU3kNv78a9YK88x8JYiVUoc9LLojQtgbXWFzvF5xdE2dhN62bjn6pjXzmKWJeFCoCzpe",
  "key28": "2JTdCujrvUi5p9ELCge4y4kCF5N3nMxJ3VZvWAGgD9dE1LEm1yFd375341yQNF4hTAxXcgerrsXJBrk9mTDbvUpv",
  "key29": "MVJZTNNPxj2C5vxdUiKKQQypB2LvRMXrrrH6qU9CK2j28jNgaZ1yip128EoQP3pJ9gDQ4hdiukaHxNSoVFXKRg9",
  "key30": "3KyQFZ2NQmU4W8ZWbN1n16uA43ks1mD4JBTwkMPEtbaYzPbKVCmz9WACBAedizz74xk6jVpZwZo6e8byQq1YQJmJ",
  "key31": "4qjhTdMg3ncQXGe9jSLbzVSd6VFc4p4WwVfTihKJdhwzjjUHmHf4JZ5J4cUhMEZ3FaYR3wPHrD3dQzPHp1AW9JT8",
  "key32": "2FLn5xeaez8Zv2ZFGwzHgsbfJ1vZ7YX5Zw7g5gNkZ6zfwLUQB2kPBGke2mbiUyTUoVUp5XMBrjCxWmgeKC8S4iQD",
  "key33": "4rcfWrGB9HLSk1nvfxpiXsr3SVBMpuLWsvFwSJK3WejpoSz9fy53zFKEeYR4DEMHiATphXtoFJyCMzwbtBo4WHgT",
  "key34": "PzN32YDi222mngav3a4YDcEbUBRMxVxGWER6CTrvrdPgh32Vzx2WtPfSsmDAD6sXghqdZqaebFzC499V8Xjkhry",
  "key35": "5wfbfS6QCrCTQY6RxtVZUvsNmqRxdywrF5Aime8bz4GjyWDWCCFAfFtkDeDUS5sDAS57b2eanRXJUJmKUmvY75tc",
  "key36": "358x8oFngcU6kadBMngxdDVErCxTPWFfJ7esxRYHjgypGD9WrLoDxRshJ88JTVJRuNtN7hA4QcC11tJAZansTV7z",
  "key37": "2N7fQkc45brShkoGhHhefvejrvTy4aYSdzmp1UhHXQZjHfd4WXhNPXdz6JQ1UDGPG7cv6TJ8EUmWbtRgS9htQkrJ",
  "key38": "35MspbKSsPL8qouF15orB7EUDu7GUHyfxqBojVV9X2FTUwPNMiYNBAy9ihAGML82XvGXxfWB6cNxUx7ngVXFcFv7",
  "key39": "B4GpAynQ9pMgR5AHowkCuzfdfDpb4SjZu4boGdEYPhGA3aR88emVmwiD2b1WJda7twEDK3Ef5FXm4ZgZE3Uw77X",
  "key40": "2TwoiK79Y5Q1mwPM6Cy7T3QdF7c26PbAKkBck3V8ECNai1nSyy3tbh9tn6RfPxmJybpeGAaR8ofbw4U7TnrhGfrJ",
  "key41": "4PKkBusYd97ATH3vojRDr8AWmbJVzdFT3kNvTbzXYPG95CV36cZq3bsBWbtixXLejBXUQSNhwooGJkepADNgtck6",
  "key42": "2ipjK4Dm74QjbTyUVyTYRHtwfy3zVvBubjCuDHVciDNYnLjrcG2BhfKGg72qVKzmaFhZPPbh3CngNvX8mfmP32i5",
  "key43": "3x4P99aQxQN7wKTHMUobY1rmDxXArqb7s5H4ryUfQs2nxjQfjGvstEir9uaG7qHDxoBnci9WvTotmDXmwD2dzqJq",
  "key44": "3nfXwn5eycKkwq4sX2qEbYbA8EFBSpLce2YTopYeb7TyDpCzNVDT41dxbzbEZnbiyNTBpx7Rt2J18zjr1HgHFJx2"
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
