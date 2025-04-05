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
    "4qS2pdinPPWhKmKs6RDxA5QPQs7B4ksvQ1UBUs8LHr5eH5NwJvW1APLDueerRxEegAey38jnG4QLx64LUGq4hQBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hi9vVMV3EpPhFpyX6q3xBBS2SeWSXBNBbYFpFLvDGYrRNHjTvqsR78m4ZizFnpgfSVVvU5SM7A3iq7hgsXnqy81",
  "key1": "2jSBqWxmywVHy4kRP9F1PDGf6TRxvCkp1q4Mknjz7Vjc7FnVeKEoeBeF2HwrajxgzJ5SZKaQP5MmoXy84uFXFLBN",
  "key2": "46jjNky3WQjLEzH3hdd2RSjwRtwg6pXTcB5dK3Hiy6VtqSPtdBmRVV66sDtfEHtPjXvk3S3awccxcnWapXAX8kk",
  "key3": "26YgyNJVfmPVaeZ7f96LqdNvygRwZH2yHJgZp4XTAUDGAyqTrnYnS2aPdoYKsrkGLmxW7euQ1at1fpeHMbR1AxBb",
  "key4": "24NJERBPcUCMYy2RDX7QJTNYxeMTNGVDCddTTL6bhyzeVUK1ao3mSn2WuhiDWEiWZYUxzG4SDe6ig8KMPaX7wQtc",
  "key5": "4G5xgi9zX2WvvYeDVWJ2zRadp4yVD3TsNbk3X6Z9785gqUg3qENARNrqf6GPqbgDp3ty42KYf3Vh9wu6U2vi6MV6",
  "key6": "5fv4QcQ5XJWCLvSmcQyRLK6AgdbPw6SYbzVoaTugbUv6F2FWBRWD9VtQty716bmqMY7bqtJeQ6kAVu3vFwSQ2sG7",
  "key7": "gqpuqXX1kUDkmQbLmwffSyvohFpuJhN7VeRhKPzaYFnKoUUXoFW5p1jcm85DdLeS7qHu9kwXKLpLn6RYjeZ37au",
  "key8": "KYnS4C1UsLCNonF2WAxYUXK2iUwW6GKQFae6EQM4tK9eRV82LvePYHvTLs46Dvxtqi4B5dRY7Q3wfQkarywwiKJ",
  "key9": "61Dbg76k3y8dSQi5BysW4QEpuWVaNSfV97p5UD3rBaQHY72gBHhia7QvQL14f9YRYxBFXW95cxWdEY5JFsEDKeM9",
  "key10": "3PDNhpVJFTvf7MvakVoaVKLmASgJHrREVRpHD4QpV7SXMRe531At1katAZ8YfJQHasrshSoJcjkHfDBrEwqwnSDw",
  "key11": "5zkWP3BzpTDBW1NL2jwCpYTjGvch3kpr9cQ4GRGrJx4XtgUxLSbVi8BdmLF6fN9YBkVYQu8YApa8nAeMmEPiwXPA",
  "key12": "5wCTFdQpPDsJYgeMEUJAVRUK4KPAUfg5tAp1rj74U9s64bEvHpMiYGLuMjhoxwy8fabhxDoLEUfecmjTKUTbPCwn",
  "key13": "4uoRWVwVMbJKsAGzko5RGt1BmpBXUBwqaPMM87d2eccHxagHa5zNwZtakZ1fWJyLoqZjWRUxfQcrpwpeGJsV7TSN",
  "key14": "2WFdbPC53ZqhwsyZjJTY8RbvKhoFwsqRHXxUxhzuvK1X8T6u6gmL7hys6MWPUNEujbKSFshFBwMYt5TNX6Xsv3PB",
  "key15": "2Qn9uAPE1jHaEokyX5TG6J78zdn8Mzg39nFfTFvrUDAJowpPe51GVdSw6WNTKNzJxPVMb1TWVfN5Y79iA8c232we",
  "key16": "GX664xu2MqW1b6tLdPFHrDkbD2KurbAwjw7QUG6ZwPKbo7b1TKazapN6ZFYQBErLWCgTT8VLXHq9UonHE66aRd8",
  "key17": "UyqfRvoFt24J4Xb8v1WvWRVuqTigpnCWGAX6GZWrVC4rUv8qpK9GqaCi8kEHrYF42xHE3Pg9UXZT33NPEy3Zgbd",
  "key18": "4yRGyB9QwqbnA1MCx86E1zaUdSHJ6F7FXVdMzbpCvzpL1Ex92dEjECHA3LFNcrLeTHP35f8F7aaDog8VbGQ4Txqc",
  "key19": "66o5ZPSFDdnqnp7pMA4H8cNYo1oSDL8gS3vERb9gMQzEAVdNpFfzrWFawvPPniKQ3menv8xr8HTjCSPik8EeFBB5",
  "key20": "2dh5tCDWdwhYUrPB9YwWerT3PYgxnULWBjnLatKuh4SjNxBusCUsxH4bWwCaGbhWjAAy9fqLVLtHrXasF46JUCer",
  "key21": "imACRULuGdH8tnAQfTUHoyyZRzbF7PRoKYdY7WDSikq7XmkV7PYzirvUkH5bmBPFAn6EDdsCxXmwf7qLeXt9vG5",
  "key22": "46gK7szkphXFgxWVVLQu4u7Gm8bhze4UQK7sMxNM7eW4997RNrVKE4fhnJ1FFwRuUtX6xdiQFMLCzNyB19CUxzU5",
  "key23": "n2XhrRfKzPBypUJUDDbVs3pQnpD8udcpM9BerayFyQLHSoUJMmQ8rvq2GBAem9KUmD1vzkgHVoDZPNJ4WVqKkmf",
  "key24": "3MsuDUiB2kDHoLVisUutqaSkhytihzydZRJse2TDKVkQoRpjivF3xSqfyHjNwFfdAhzxgDnuUrTMpfheRAew3Gkw",
  "key25": "Yk4VSooT6vVy5KpqocLCr1uLmKBQ8ihG8Bwpt4y1f4ZCg7uRhH2SETq3tJuTnXFJrQsLj2frPibcFL24zVYMMw7",
  "key26": "Bah31KsFFoPugjHPxx3c9p97TGT7mik43U9Yt76TybdWSVyLL4LoMiBwr7VvsEBUVdnzPfWG9SXdU9xb6DhX5po",
  "key27": "4oaY7vRge8Bso1xkEvjEmgzruCoGLUuFshmSVngDsoQAXvaNbKyXanBn9EUjnMADCVnRJwdzy2c1LTHoouf8ih9f",
  "key28": "SMpTq8YsNQLAT8jJGYEyrFzehBDgypPnziWjrkE574SFqhsMTPiDVGzmYse3r2SvfGXN31XVxdsXPxPmwN3XgY6",
  "key29": "5NQ1Evt7DRmTA1iYDiBCjEnontvbLe2GtKt13gGqCkt3MDz14QonVEak6gNkh96Zryd8uqVChd2s1VLeHm3wuAiK",
  "key30": "4ykRLUQwZXt1mvXsXjqZebGNH7oBDfVeqabkTACmnunn23qoAuR1x1NoLVD4UK1cao524eRQoPc9yk2sqoBHMfp2",
  "key31": "5e8qEuCSir5saxTKUR8E6UJtc1YtvzQsSCzb6hSjgPyrDvZpV6NzB3k6nvX6cRnQoMfQfogkymMwt9KqefFexucB",
  "key32": "5qpDNN7uKgzeRa1LSgANy14vXDxSbpXwQXi3bnRLxEnvVNtuZhPfgZJDw1KBPGKARrBbzXvzVGGwHG6iop55siGJ",
  "key33": "3Jz3jPRtEXkgS3HN4PNVaXonnSLeBaxGPJkwASieCYvQPsM65yKWJdFwqAi1aVpaeqnJJ4CUmAgoAaBybae9BWDj"
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
