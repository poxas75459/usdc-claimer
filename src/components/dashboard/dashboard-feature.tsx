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
    "5HCd367wWjCWGdSkBvxvntt2ZrvMvDqSrMUEwnhzvdVZ1tVWPNhYmTH3jHAqGdQHzgpVWKVhvpNAKarBhcJS2ApJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KxYHTktAoJY4bCHqb9JBhdH3zfCFa4CjAJC81J5B7ZTNy2jW97oxekrn8ALk3wzAa5Av1K7Jxmuzo55sw2VDE4S",
  "key1": "23to4oS7BieXMbNrSCmqu9ejMKC1FzN1YrbHsV77ckTwmZQzmRd3kPktTABM6C5wXAh9B9hrCa7MPhnyuRC7CMR6",
  "key2": "5MW8UqcUkZgpmRthacVQ19axKBvUBHcgYZcxxWhp5MMp6NShTWbDG7Kdw6pAKAoHLLzawY8ez6FaPRybzkpyruC5",
  "key3": "5AG6oDGcDh4tRSM5mfB6W6JjVYooPpjCazEVtSLXNLCmYEMPdVR8uuJUL1jvcTxvrXkY2ZAqjoBDSpbsg2dQixkN",
  "key4": "2LVygNAbgMYsMx35MGmudwbboNeE6SM5g16dno7aQeyLFdyzfvUfb3rKpB4ahqqqvFZYm4rVzjXQS14JmKvD3bVU",
  "key5": "2WSToRfFEcrm6uAboat2TGTezQy86ENz4fUJkhYRHz9XAbPczAQQgsfHcemysXjB95wcKJfinZmBwSSdXz9CuVFr",
  "key6": "58Ke55dyH1oNnfexXhjSoacUGYVGg8z7MwjHjXCMaDb18Q7jGABTuMd7wk2bhbEu9NUf1JZjKe1joHYNjdjzskUC",
  "key7": "4hgR2nBrzfALe3CKUHzPKt8bNtQXYnUGny4dKwkLJtmwAWp2sVdmDnyMDwrbJ4VfmhT1Ft1ztiKH2zDTvzp2efLm",
  "key8": "4mWi9aSibdzAQZsK5wr6iNu4Bf6RUvdkvvRthK1aNRcPU2LUdHzGx6x37FGkyWAcm5q9C1t92GJtT7XykbpD2Cbm",
  "key9": "Hmy1gCDkjRYsyjX9RsjGw3TJtj8j7fKXBygxuVbSgXHTB6r7FXPTK7JxHD9EFoGwNygEThjrRMTf6hyjVUgANPY",
  "key10": "XyM2ZNjyz79ptmJZXbWVyeNwyduBVSKRSgkZ3Epqst226CcGrjLjTuoy6FjForZrXUTc6Br5KhqGdjDzxDpMBa7",
  "key11": "5Xt4xTRtn3HbMZakjdG42cUfWhYudQ1YY6oipaCGwbDvWPmh6TVtHgpqA7F6FSY4RciD1XgGmbuJa4mmUsPrvUKF",
  "key12": "27wQfqjRdDesRYSyXgwG4usH76FvQQrNopr7Kc58d4H9ibzQZPH3TStRZWekeyTCwqo5HzEh7cawxPyuTea87ZCt",
  "key13": "2DzqWcBjg1pEdnBSrPLFT14VNu5yuzxMXNhieZLftjw1iXjoVMKuGC8e9hdP2Lwv6PStALoqghR5B5xLiUDDfkeF",
  "key14": "2S82itiSwxrGTVH4ij5WquKznYy4SSPeLCuxCg4pAsSXusf8XqzrJFeCLqLsDWrsmCi57GRXcMtefYmdksKRVUZ9",
  "key15": "3b7v2io9U171A1F52F98yPBg6gfTKyCvBx2YSDU4YBmwf43PufBmUgxNmtc2NEyBhF2ya2mCaqVNPVfDEC3ZM7uf",
  "key16": "3UNDUX6bx1abx4GbbrXR9ZKEM3PBCkjpKJE6SPK3dxWEcLWvQ6sYCzNGMDbJ8AsWPuSPj57f3P433dNnyB2gp1Zj",
  "key17": "5aSSJvAikQhR9L9oJywY8if3XDybjgXx5REeAzX39FNBcht63z7uY7xbgBb6vY8dPnHp4SnPeXWWqXKaGNpxmRSW",
  "key18": "3n4aNQAEHHDqq3jQG8HKgFQwbegE53679WKBimojBDuMjQtEQBQvPMF7a4cBxX3H8ExACCdNXmgG9m1k5xxhjyqt",
  "key19": "4PD6KWNW7tdpHU4LDuyWsPqfJf2YoNwkSbWuYba6VQ1Vz5Uvaf2RZPjrX8opCmMEDztK4BAxVH7QCVGzcPgsxP53",
  "key20": "3h8xU4UWaVvj8ZySPpJM18JoeRYoyorAhcWRcaJSmB3dBC3CHrn1TwrjcnjtW2mvoCJfRAdfUQKfVzADh6LfeeX1",
  "key21": "2k9nUrJqcQ1DrY42NbFymtZzNUtxaCEu7dmwK8LBMDwkRTh76CdsRRdnGJaRZAWDahz497tL7eBR1hppYFBdi1SQ",
  "key22": "2QRLsL5fk2KHcU85EB5ZFo635Eykj9fTqBNFWhLZeB3mFtE7rQxM7hPgsM39cSZk57XeyR43kSy5gt5bvemJFZPk",
  "key23": "3C4QZN8TB6bXuQiTZQcUM3uwdcTCeiP8EG6sLQZ6iBr41hkLx4sUvpBLnHY7cZDJS3Ld3EtXk21qFN8arhDECpbf",
  "key24": "3u5cxPuzURA9xeS1QHpeRveu8RsSdi8tgchrsZ9HQLwn8k2MvKorCvbs7w5PMJaHZu9rN6jF3MmBpEusojFNDTj5",
  "key25": "28vBvbte3dYfJwGuiRar4eg7w41ug2PBKXPXUZ4fSzEHsBGw4yZ1vn4oKDmyCXrGzKP2XRyioTfDejSK6AVKCuuW",
  "key26": "4rDj5zZFAJ9j5dxUYd8mRH6rSbjvPjJXY5T2rWbP8sGApQxYJP8mxL9tCwS6gEXUtBaueY7jpBFuacoE7RFbm624",
  "key27": "3MVLYA2DZejmjwQFetbZNnCnAkAcFh69XCu7Rj35HFnhWkGnST1z8DDVdYzsL3R86cruLAtWBb8MDfPbZakz7Fhc",
  "key28": "3izDgorzHyJHu3GCUygWyvUFJNHrLpeLZa7cfuFsaPLPRtzVZCr7nDQC24n2nbhRdnNQ8QjugjSAcQv8wcdhWQ9L",
  "key29": "4mzzfopr6MddhyHNpP4oFkXZMRHJy1jZ5tSrQQAKSYStD2huDB9NGyPkq2o6oAeLauXfs3CPniWVvK6jqMhXobqD",
  "key30": "4TXVQrSbP2PJcALh1WCyXbUQ1hFMPdGbLdGpc6TiJ56C2J22axWXFD3y4GEdQxN6BcUCstPBN2cCQztxKdMXvE84",
  "key31": "5ds7j48XvLGE745tJaPRZtJqWuSvwA69XBgvQ1qftsXqexSeGABywtDnGeEi6XBufyS54wKLkRQ6C3oXc47Aw7Uh",
  "key32": "WfEMCfqSt2w5Z1Cbm3md5WuJhHXacMRXjy9NxwzvPWzUjJXLLvDE31HsAwqBVYdqquiPG1cMsQsVR8oyaJGP4PN",
  "key33": "2ZtXMwL4vL7o6oM3Uy9AT8Ht4WJLRxrfwjb5ri9xj9Mz51bvgWwLVntcrYwYKMxSNaq7NkwRG5M5JxbxZxjytnYL",
  "key34": "45An1QC5qSdNmNa5UbfTUsg6CpAjQEjeWBXTex9uNxQTqaKPXfetMagwSdCoFHa1Epz24wPnWnzLtTKEhCpNFhPF",
  "key35": "2qjkU6bxGv4vZ5vRkHL5v1CJbEmyZAxmk7H5ko9JqbFD3kiwHTHW6oPEgs8s8UZZ63ZLBmPGeLXkpDbCT6gkZXmk",
  "key36": "45eBkQesfApcBwT2ewPyHroBzjNwPHTjU1JKQW6LYQgkUbJWMUc8CAeeWhptTdKhkHdk7MuZFaVchZo5BNYHVSaX",
  "key37": "2QoWbT5uYUGL8GUU6CJ4VKv2dQ7AYbLPqJxrkgUBJoUozmWKW7UP96YGSz8sRPcU2djHamuwjD5R4imjfXbZc3B6",
  "key38": "2fnYABECFVYyZ8QJ9PNpdA5qEDya1VKrnm76aoqJtTy9CoREJ7Zhhra7kztWYWUdGezGsvFLKPNXVhepZZfLiDHL",
  "key39": "2fGC5Hvu48derbVXn1N7kPW2YRHC1m2hV1JN1UrZoBkVJGLdJ5VefimDBa6WBd2aMLqn8UxaqL7JtZTkDi3fcnVK",
  "key40": "63sEpqGX75SdtP4PkotZS4K4jXKhuRjUvtz8zpHBxarr5iw5KbKNoRVRiJj5RjzJ3ZK15RU5or6ALrfg7HE8p4Z7"
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
