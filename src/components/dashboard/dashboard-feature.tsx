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
    "5JQvFWgecsss21qvf7wno2PBKAVLVtDoLJUaFwrirDzpnnDjGZjLn7zNxtFq2DNLnG2qQ1q5ebmV41DSMzWe9BMY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59sbi4e4ARsMqWLWwYtqUZsBot6FkxUMyLakUef3J6K1jodkiacSdfYpEgHfV9RNY3WM5Tko5zNG83A5gXLcKmHA",
  "key1": "2ZGRs2Xd4aR1VDeF2LwU2uCE8Ad7ZGRNcNQK3Y4wzpnhc4Sbp51hHyruDeqxwyU55dwDTQXkGiYQ2Kd7tcmcvqP8",
  "key2": "ugsEhyAxQ8rx8PaitnFzkydx2SiRwtQaYxcJQWPaSuiEMo7v1ztE5yEc4Betrzsim29vo9zDT7mFgvm6SriZdjN",
  "key3": "5pvFxaapnfq6wtCQXYtEQqJopwP8kf8mRGuQooLV5nUqJWQwCcqNazcBcM2qTenW6LGU8GadtyquAdxTwwWN9K5S",
  "key4": "3xFjXNsKtyHYcDs8MEfvPhJojT66HwaLVSTCaNV2yx7t7AQxhr5iYfY5H6F1EmJExe77H98rKfHq4LvmWcibqYov",
  "key5": "5ByPTzuZgtw2HHYv1SSqupJLQ84c3meR5CkmLbp32PHgCa1Gcvp77DvjfnCsfTXanbSnZGQbL1y46SLcPzVMgcNZ",
  "key6": "53ftX9UehhrbSyGyGFwgGNJkAShDE6oxus1yCeP74FJtSAAezx5waYoE4rtvJUynf74wvC6hhz2dGLid5DfizEi6",
  "key7": "4y38GLUHuTomPpid29D8kyYjeirUR9vvrxmVWTthgG1brANtagGnDd9Qg88zMhaUVFgemCq2ifaLHUmf2uoDi1aG",
  "key8": "oYiA9UTzngTMmc9QpAyUdhNV5fHt8P9XJmUbvbVqWEGKFmyVkFX4exzyFqmJQGCka8GCkJGPux1bNpqBdYjtaz4",
  "key9": "5Gwctijnmx5rauEog7m5fPGAQumyMcMoutUGuCqLPPwNmTB6ZzyXVUyp7XUhof9yjNcqjMZFAxnZwhV16JJZdeEP",
  "key10": "7jr3knu76n6xZ4MWMeSQMgu6YcdC12FtuJ1RuPUDDEtgxcBSbAj5WM6oTKpeP42PpvHR19pykM6cmM1WrwSyJ6u",
  "key11": "sKzHcZAzcgqHd8FerVuA3taiBmi9MTkkECoiaTeJjPGRz3otV8ywSqkpfP3finnK92bWGUKyYLv1d7hsngtxMLf",
  "key12": "2uYyLGgGMxX5tTef6n5GZNKEorfwgHFE8bM1eVuhydiam7kqbu2vEthgGtjPax5mesPoGiKtCJrGk774Da3wgcvX",
  "key13": "4EU2hdaNW6AUCseW4XbHPsMJtQCsqz4BZSPVwpwW2bNe8jt4zGpeUuCdRQfhvQYam7eWKfo4hBKWvCDQvu7sWcxv",
  "key14": "2SN9vzAmHmA37dbkUpBJdrxGT7vPtqVLikkTt38k1tB7muDFvwAGQKqXiZoqwH4sgSDGxcQuugSfiJPHjZfL41jr",
  "key15": "5UkR2dSRAShPLzLvQJN4epzYjkN9Dz9aFXTBWSu9C7BzBoKorzjuru65vaNfX1aifc5Q2T1FfyUEMStDCCGKFYYw",
  "key16": "5BVmMjPWrtp81VTjvRNiQF4gBsipBBkkeJ6vNY6jsWfXH6No5Af7QBa97gYmHKksSivZGVUCxGhLUTmPZ5LWgspt",
  "key17": "dr3Ra13P4eGfAVKb7oex3WZufFrMAbXFytmuKidFKzhp3JrFJ7wFtpBB4VkM41PMFMqx87YDew9z2Wjb57a6zw1",
  "key18": "4AdPcPggnVoDGuHWkRdkuTRfgBuY1fpKu5LxudGyKuWN77BY5icMfeyELe35SgviyCMNZyn14Qvp5v75Fb3RpaWf",
  "key19": "AbdNrsyZoRkweF4dBfBtw6Tk4GbAvRJ7jfWyQRubxutkSqfxyZXibSo5Y3KgjesK372LXSY33iaHnNb97W6DmGn",
  "key20": "45wRGtX5AryidSSYqiHFURnK5PBRYKfwxTHfAHc67r8SjoKCPe7BcLEvtVA9qLEK1XAMeKm9LUZHaqsKox9UR4NC",
  "key21": "45XFBVACvLFZubJqr8n2rGXkqosspJ1CG54sqkSzSY3wj3v2VnbEGe9YoCnd8hR8p6pFdGj3qnoXBYFvuyt8Vagw",
  "key22": "5iq2w6fKu8kHM1GuRvkQT2vqfdvqFMKv8kbP5emxp9P3yRYiQjzgjg313dWSUMv1ZFpDApDbqALQyL1eSEKZmSui",
  "key23": "5FTGiq6TN4ab43N4pUHTXLYz5DUP7vyVuqCh9a6YzmfLB7cyjZemBKBWptpNvWfSg9WitHoS9dguCN1GaA2RWuno",
  "key24": "2mNpXj5VNN7VY59fiEvtHFdnU12r7QLz7ejQubK4uUe4eNV6hioBjoZqwbZyxLD4dkm8NQXv8XX6ccMoLzo2s4HZ",
  "key25": "4iTzpCMYJthZnxeHb9HMF5DcuYwttgcR5FsnDudZuHWjxDh2dj8E6bUd5hKgo2jT3Ce3wQZzsDxH8dRQNJmbBwwe",
  "key26": "Qwm3VNugqrrgmUobmKw6LLLEwCUfuFcZeo6N6YpHcHGoMkt4YzES9M2bsErvX19pat2LiFe8xeM3ejcdVWv1E2A",
  "key27": "4unZmabj8pxjd4ocGFCudDWwJL13er6wLW6tXAxY2Q2ugsNzgmdBbe9Cr6mH1waZ1Fp44mtPkDJh8xRrQwnHQgNY",
  "key28": "45YD7PAfu3xRakLihUmd7BNmhFZXamVCd6SW1pbqFnAQ4Rmw18GV7btXmwJNBvZDygfiATgipKotN9NpHWu2My8P",
  "key29": "3WrYTGDQvp6w8wnsRFVgewSJT1KqzRv7TUHyCADRhx2hYUq5MTak8NhdS688xhBpuK6Ld39NnSLS3aTNbiVt678A",
  "key30": "3zty7gqJAsR2DmAhxu4ouNSezWSMVhxr1quXqbK2Wv9E4PRoubJdbnJuzvDUkZMzJZFhWjpbMysbuxN26RhFFDSX",
  "key31": "2YLZiJDrcQVsRTnA75TmvToh6ktDukAnEg1gwodJ249nGxuakTjzUG6dwK1EfWJNmLe6DGn43NVKHYTE4QpSm1Ag",
  "key32": "3FksRzVtzdFnmSSZVrvMhRJnb5T8a53KHrJqxBoyLew8V9YZa5jyQQZH5mRHx8S1uzwhwBkWuXZEPB4uikVhmJGM",
  "key33": "oYtkVHoTcBtgahXihBkMNdp9utBofYVinryRbCz29evkK4aYp5oK9QK6H4z98VhBA5B9cC5JEqP3Bj37rXsdBQS",
  "key34": "2TmSztA7bsnWBcicqk7Gm5tCtwRMitbdjhAKXP17N8XmvKNbPvD2pC4UecDsDCeNeueyPzKs9z3F161QuYGt3xsX",
  "key35": "3rRpAiXYgfVQvhQUKfqgHFUBdJuFk6fTubXprgh4H27TYiU8C5ZRen2nSErTPyFF7SRfDqqfBXCZQrWFz85sg7si",
  "key36": "4VvtnF2wZdHn4q1UseYXZmziH9L2j6yS2AsZE6ji88Yt5BCjGAF6Ft3EmWE716Q9sEMw4Sm8QRrpiX9NnE9mLwu9",
  "key37": "47SLFNjXUp7o8STMW7d5rvwtHgrBmt4yxqRemM56x8eUtttKBAQqkC2VfoY5YmaFzoCUhCkxQPNeyGgtDwTzHDhq",
  "key38": "2A6ktyatG638xYfN8tJxJqJoM5sM2Dufg64Q56L1PyUWGGC75s5TLJGk2F22mAAu7Zs4dNySW14qTcsukkphBkRp"
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
