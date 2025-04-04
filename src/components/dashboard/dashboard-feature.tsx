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
    "3AfdyxCjrA8voWqAaRZ2EFTKKLtcL5T1Z7DXtgaRK5zzw7AkEhp5SA6PN4r5usrYjADMMJA948jueZvRb44qNB9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M4MaJH2AXvLTCjGtcneAgCgACBmR1Vq8iPWRc3royjKiZn35SXAsq8p1FrAscEDiJ8RrT59i5ECRQvJiLnMPVzm",
  "key1": "5wiptPinppwwFhTHSwMHFWAJkUPfozonQoWqNaAXc8U1bBUWqstNknGFUaRwY5xUaSj9WU8gU6QmirbGrC4GFsP3",
  "key2": "2PYWdpFMfM4g9ipivH4m3gWfvrbC1WxfDBkFb9xgkmpNPKNZWyZSmsnt9p7NyrYQMz1WMBLtHdt4dGKUG8GKy7MN",
  "key3": "LR4bYPrWeHB3MuFd7NSFcRPMtmNkesgAa5ggrdmyfXpZ2WTPwZEyj6Db6oHYbvsCHaWWPREgq23SFHjuG1vLgFM",
  "key4": "4V3kC1Aso8D3sKfQizYVM91vpsAqLk8H81T151pbGQ1rq8rksBPhFecwAWHKC24E6kAe8YaLt5mpJqYurL1YfqFr",
  "key5": "3QNFdteEKE48fdsZiDGHtuFfwvu6inJL9oxT4X7L5r2bkpvvb1fnNnSvZmRLbCBpDfGLmn3ZYT4JEfjei7LsRt6C",
  "key6": "5JMi8FnrDLVDUyUBXMBqBCgkoMM7hAr7g1XPogZVnGGULJxJfiPboG8VN8C2NcnmydZSTuLzo2tzGMCdgsu3aNcg",
  "key7": "2xt6kXXUyNZSmSowo4in9zcq4uun9ZLmY3fWUnUkYcQ5uFNsPznVrc1iZVwecjF8cCnuWtVKozV759hv4J32pKCy",
  "key8": "524YZksqJWpGYWBuYuw6BwvhYGXai55tcC6o1sChPsToG6TnwyHiwqnarHyxJukopY9desKijrjzC1VjHuaHZndc",
  "key9": "5HLpArECCn4LQ8CEwYwqkQP8pgahCFqwEbZYvrE7NnQ7z7SqAvGY2JwnWFWXSnLzwGb86Jj3sJd8zC6bLJ67vi2n",
  "key10": "4zG5cx9YjREmF3LMz2sEJnyFwrfPKdKjE4bhV1jDzzio9zD2EafrG67su3ahS6VFWdq53mExuBirWH4Vrq2B1YW3",
  "key11": "4yBB1xAkZRXaU1EBn9UKcPLZSMWKNSajsbxVG2BWjHmK5ME7pKMkTqrgmYU1Uu1nhURLCBfEBaruD6NC2VGz8JF9",
  "key12": "cocvXuPhN5JHXCeGThLGgMVBzc89pqRg7CE6Jj4LxvLwLV1jLQSFehcPgf6zzSAGUtXJDvC6iRAJ6BzjwSXUiwg",
  "key13": "TZWnnx3LozsMDqMR7p9UCRHLcQbd1r4aXKcMrJHEXVznKMnkhzFdHJhWEnW1ca37Ps65VitLDyzqhD9ka8hmD3d",
  "key14": "7SUjdVzEAHJJjHxjfhVoJ9HwAtPAnEwPC8j1E5NmoxysvBpsh38iEt3r457cqfcZ5NV7zz9D9nwGTnDK68XqtWj",
  "key15": "HKcWvwiNrbGiXV368MpUKd6PqeLWgjEDEbd5vf8Yud6WNhnMPPuFPFxjqwwGPemWZfPjtcLfyYQ5r8StYH5gmqb",
  "key16": "2ibxGPHWLxdwKuYrReksKc3heUomjmhk2p3thM94EvL5vmJn15WhSwtR1a9zGHpg3VP3Fb61jfrRktkCg9MRSMFY",
  "key17": "3VAMYccVVgm7itk1PBDRMgRHC48vSPgvHvRuAyerksgaTfuEKxp3h9D9i4qLrwHBzHG73L5Meo6H32PLwfN5Gw4C",
  "key18": "5eTH4SUC8nBcufybCYVGDT5t1CMyccnk5nmtsE5SPBJhf811zJCEXkdAycSzh9sJGfYEHUypun8X2co3HXy2SP5u",
  "key19": "5ZNXCNbyN7kf4VBLkoHRzx7Nxc8TCeFeYiUHge15uLM8DX1FHTb4cNo7ouz7KTWvXKraMhk2uyyxBBx4AYi3Ecjp",
  "key20": "cfA8QseLeH7SgbWD1XeS1p8Ea1wniNxPeaDhAyaXh1RPfYqCEsotiHCv5FAKNdYQcHpZVBeGmVvPAke9TdRrs6g",
  "key21": "4HPFsjVjjHsJ74QGK3yC6khYDeYaEvuLY475hPu6WXZD2rKSg1i34YUdynGW3FmNbPaBNxxx6ctkzyuVwaaPVoxW",
  "key22": "4sY37Y1Qy96VGJ47qeBcRZFHP7HnWSU9yYKq6McxeTXHmZMKNA1s7rq1YokPS8m9LckwrXBFGjzP9Aa3Lxk3Ud9a",
  "key23": "AHFMe5tCBJn3YEVcJMa5UtzgusBS2pJUBqN9gk9pHa33zYLM9st99dm3oC6SFmgtcFaFAmYGk7HJ6QyL5XFEiad",
  "key24": "4bety4jzzW52R69eQWwDVvH3PUvtwYzMGnAYajQ6iCjoBkAqTJmFWvXarq27Z2wtX9F9UNohWjzjpJ5x7yfmrKDe",
  "key25": "57EY54fyWcJrFojdj5HaDX9WT9UZSA3JLkNayvVySQTVXhsoizqZcK2ZJe2AK8D1eWQLHnrzjHED74gXKJbSiuWU",
  "key26": "4x3E9NyvApUTEPbxXTd23q6Wt3qgrjdnHLYhD8xt6pKqZeCf9tCkNnyWPVnGyZbsRcUQY1MRC9Hb1DvrA78JceSs",
  "key27": "5jsrLGc1XQvDebW1r9wTfdnAtJxja7AWS8MtL875qaWVC86P7mEVtAvkPGQvvnV7WVhzPZJBoVdL9FCuweJcYxro",
  "key28": "2D8YMbZMy4LTaqXT82vn1qGuVNV9s2Ch9gsLDLYa7sjmH5DNcmX8qcdjUYnw8KtfZWxoJgWyPQRP1xLCmducsfA6",
  "key29": "21dAfPbAuoLRgaj8w4FX8qbZnWy7zbvcmLCja89q4GYiwhkDUzbLQaMdWRfjzrYWJ8bbvGgHRogNnaSvAw7ejYgS",
  "key30": "3ktbuQkNDycTDwCSWRbG1PidF12pVN9L9rXFbQjcCmaApYgtw2uNZGY4ZZ8mNQDkxLUSMoA288c5rFTxUhXR2bcn",
  "key31": "4EeQUQwQA39b2eeJQiwjmia8Q1g284L35zLBzsAtrR6niDkpSTzBtfU75ZnsvkpK2YHDhRD91w9PWYKLWdQr9zEr",
  "key32": "uG4jY3wUQDbXsNgfVNYvdnznuZdueD2yEEopMjX9Hf8rQ6qFEkMEmV6KMQjtUrgzuWYYNfDQzsAR3JXsbvhtHDF",
  "key33": "5b2V2c3xT86z1FHmXnY497F3upvEsoUtPUPC3UhQruSJywEskjKExf8a1AottNBwdFT5RgB2HshPyyrrj3kznusK",
  "key34": "5ubUg1b4YtgbnhPi33PgQjEcH7MavTyxNNp44LigZMbeMciSnjm5MSx3hpboLT8XC7QtVdvaRvjmHugW76H8FeHM",
  "key35": "5qQzB8YgAd6RDNScCCrVzZjn1R29VFXUAMiPWJG3h8Ydyhr2oNXmBH3Cg7QADnvM2uYNzjrw3Wm3GTGekDBGN3Ty",
  "key36": "4pNKDcDpbrBYkeTtMNwyFR9cqeVJzqZ1EJkGtwgGD3LBMHifiMqk9ZULuZqNPzxCme9Ur9cuKuPv2yDZj8FYw6DR",
  "key37": "51dJPyjko3GMH8NSyE4VZEFu8kAmwgiVFmn3en3Emh85dwxmUzML85KECDgzquPjcYyHhoLUnqhwTjRbeKaWWCzM",
  "key38": "284qGKBnMYVRm8QdZPo8gXwAhoQa4DDBwfrfbKKK9onaiyMWxdMDut7yQy8mhoTuqKcP7BLGWXbsEoLdWfFevhQJ",
  "key39": "5nH4NNn6ENbrwVE5hiwhFes9eqA94fvGVcut6PrDpckswXC91aYu39NbW2nvNnwReK7kQQ64g1o6u5uSRvo89ePC",
  "key40": "2XU57BbBmWe39e12RqTShjp1hJFJrbfaw1FYoJ7Q2GMwzeuvk9vURjhXZVXi6vfYUVuAKMX8kD7zrx53Lc25P9b7",
  "key41": "3UfxQmq7gdw36F7QbNt9hZAcRMKxQGHAS4bZ3q1eNi6ZMtJwzLNk3iLN5Pb2rqM6mQQuW6SF7AtEvjGFFJ1FmF9N",
  "key42": "2yj9ybUqW5yY85umDaq2d5nXVs2JtsfinDqod2PTWSsKkiXdopXjeAaGrTrcwjyRWr3khX4TDFLoPKtCy2wpXdad",
  "key43": "3tujSX2KeFwWQWshcPSr8QKH5rM9YnrUoRZocW73YW3ZVXsdvDgPDXnQMSCadV95vG3YCiPYCRR92nqtB2miYu4i",
  "key44": "SW1QG9FY1ZzagFNZTjGToUj9nBVWt4gQFgUCMzj9ptdLiSzS49f95qXwA5wiiU2KxscsNTQbEWXPbPDvshSTEt8",
  "key45": "5LqC7S1oRWPJ4LHTm1zdfPNE7RSot5d1uSrgS2cVf7KddY2yxNhFZeUt9KSFYYgqMUpfNiXN5aQ33HWWnaxCHcoa",
  "key46": "g3NiwzyDqLUYXstFHoDWCeACBmkvioo3WZeVKzeWiWCoDunDXVvhcDzzPJZbi7STLrabHy3FWQa9NcB4LQhFnPR"
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
