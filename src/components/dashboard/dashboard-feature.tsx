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
    "HPvKrV6QwTfKkbcebrR4JLZof6X4p2sWHShdUBucKMVW88BYDowLi6dGRGycytrgg8J9nTmwPjhKEku7XTP2LH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZLm9pbUnHdcoNM1pX6be5iUcqhAurDpAGgykjGFFcGaHFMz6KRNPJ9VdizRSFeXGdP2jquKs3eBVWe41ZFLf7CW",
  "key1": "4oj7Ytsi37SdykinLF2fT2GxxPLKaxNXJ8M6aRUadHbqcSu4rnsE7r5pZqEwi9N28EZj4ozJ5q79PEVBr2TqQihQ",
  "key2": "5yb4zpe9JiWB9fc3Qu4PFhfhor2YaarkSBTYo4wdoG9ewcbbuVgiYXG74eGJUC36hTHzVyesAxz7thpySwdXBnq9",
  "key3": "5hUjHY3Pt6nkQAKFKBR2qNqCkbHkuNm1rkFgGLEYkdTY4x76Zv7ZQHveiVPjmGGd5W9twYCe3FUnYsK7YccMesd1",
  "key4": "49P7p9Bwg7LA78Fu41Qo2rjNpN1xgXtRuEuvw4mxD1eZSHp5VMQzXp5jNnPVcbrycxvsRswn3f7pJGsNFat6b4f8",
  "key5": "3T4qxBf5YU4vKiwZaNygfpVme4YrSACJsNo5zbrVRRCzAGEHjffPeLvhssy67QQ8Fhq9sDNCs2xSHRCtsBSmQ2TJ",
  "key6": "2yPJ7Nq2N3xXxjDqwvF7CV4YiYnMFCHyYxzP6U6p4sRTJnoQY4QRWntEicNRWQpoc5EaiV6ddC3KenhLJtAoXrNy",
  "key7": "5StrH1DxRypvBWYb5LwLCbvgPBdfRtGW3g3jP42adBq49m1mEWJXQNacXFckyeHf7EmpaS565GFNTQUabi44q4VW",
  "key8": "4tpCf9PYbrN3SziLyh64FrKRLzF4bkvyYspZEHRuLdzYmRk19bY8A7ZUFTrNpDe5PGf6zqb42ECN6F154NGhL7ah",
  "key9": "3bRKcejxCgTg2dsm7s1zwPZ2Wt4WGJF9PTD5KZjh5Rmb7ppMRpyeXiaEo1FzgvCxALpeq2DEquZehJx9oA7JFuZR",
  "key10": "4dy9PYS1Ri9ubbxdj2GssHfZB6dAXKNsoE5yeNsJcEeZrQcmTkxH8ziffLLrRynAFcJaTrkRU6VgrpMkCj3kGUiZ",
  "key11": "2UXWJehXUjWf5bBT8f1kvsH4QtPtkWvTAssfQTKRAE8LRFe6YhufsNLqTfpkFeWTvmgaasr3XpXuGdpnuKkifkoV",
  "key12": "ydxT7oL1VWaz91hNY8BvwZfgxU1F3w4yuuawVph1fcKKoioHYHm9NKHFfBggjvAMnEodbdcDRWDCbNgWqAxueXE",
  "key13": "3v6zcwXFSHjYAXYsyDHhKaXy54on7is6hp4LfKmWmfYDKvyoic5nPVGJm5DQuBPao7S94W22jT63b5ZHAPbqG3cT",
  "key14": "4pfRLxJUXBgnx2C22C16R2h5Wr8vK3zsEj2DizkmnKqcWge8NzKkCWstSeLTMp1CEagV91yg6EBJuCKLsnnGGpvi",
  "key15": "5K8ebCLeH2Y3zEFJvFzENWFSNkyDzWthSQFMheTZeejT3x9CQCoMcBr17CYn7t6HTYAXLUKMAgqiEYfbPxyn8ea1",
  "key16": "5xjtj1ZkD6E7ZprcyHyndUTMP3MQLnQ8PHJ3WFWCAMPBB8oCEgLwK2Bw6FiTiX9DmEmnpMnMfTtk7h2HByYEpaA4",
  "key17": "GSGbzSjghabu1PqMdqtf3b8MfujYah6dqk43BBjFH8Prkx43si9zUMaSkz76SsTwJYQzGN1QJw4oexJ9dceibwP",
  "key18": "g28DrnoUQgcFiwkG3FdAP3uU6QSBJWynwNjkkFsmY8qxNuQix7KWn8yXCfYwqqZWMhSCD5M1RSG9AUehNwyydf8",
  "key19": "4GnTWQ8euPYy1fvoP3ZeWhFPX56Ph9YQ9K81D8g5TZcm4zjWLm6omMP9sZxkPf4VoWGzrLb55ixNBXK6hzSSC6Y2",
  "key20": "3YQJ8ghmQDiKEUQTvwsC5GMEnv8jASgVSuF2FmsB2g8WdpeMyC9zxAwuDnF3tcpHHwd6vdMiNdDW74TUqoyxeaZz",
  "key21": "2VYxsQhn8bKm8LuwE9n1acczEY1VDWQyCSzezn8T67puuHrSq6VkCyQdNoYYVAefubFsy1rYX7ND624xaUvCurSy",
  "key22": "59r15GEbGVgPFt8Tk6JjXdujpYUuj812VfduC7tCP7u2nCShcwU2CmDY82YgNjcXyEF8fBFRrps48cZ4tbeQm6ie",
  "key23": "4oagkAkyDQGhtPKozad62KVahC8Q4K42i4dLZ8yCBfYR1op2XDRd8jY33JGi13kaPF9vzwoXHoQ98FPgcsUGwkre",
  "key24": "5sJvtCwwvBZug6Jpj5ZvSMdUwkG4Mno7ZHmJBNEcNdSqstsULxihfL5Wyh4eSZ8qwjnZyTvb79LeHoPXipjwmwd9",
  "key25": "4xRxXLBHVJdXmfdbi3oLzNm7CstqsyFEPdrjT8Cbq5xHkaCpGuAjx6sJKEKdJTMjkgTXAM9PLvFfenk61iW3CnWm",
  "key26": "2dCPcyeGiySvMnro49CmV5rY9XB4wedz5ULqLpktGvsEq54ba56LhYfKDec9uSApPkWKe3vK3HsjDQtEig5h1SPD",
  "key27": "44WqXw71TydXvh2SBVmaShTrsfY6qtuk88W7EjbFqYMUNM3yHDNkdsnP1ApqjR2HM8MAWYW9oyn6VrmrQmptFn4Q",
  "key28": "4jkwdV9BQbrBG2eiWHGSRKA4nLqo9og9uRpyaGPC3Td32o8gZqZRSZJpJtJSWuW348KWu8hi5nZuYjDtCRxdqAJR",
  "key29": "2WaRNTg4hJzAHo2xwVXrazNjRaeR1j1AHrJUyKYjxvYg17BDS3LKHugxbZMyRDd9nRyK8CKff5vdAqk4r1ZT44H",
  "key30": "c7CDtkAwdz2f5VDj8NXNY1b78sAjptxqfHEKs2VrBav8ZTdNLuyJDsZk3sWFN3MBFspwds4yZMpjAAcFeRvwEJT",
  "key31": "4Zhy4kzrQeF5mhq9ibsJynwXAykpzzVweyzJT9FMgWoEYuSn2Sh6Rvop3uVDKCoQVcaWHUJvMiPmpjtEBXvgf6Wu",
  "key32": "4s2z8tRbh4THi2mArcDziwk7p4oPBoNTJdT7j4bZurzoCuRWMhFkV6CzAyapsJxaznEZCMMYQ4mZGasMcGZEhk8L",
  "key33": "T9fwqDr6TpVygPaU7jh3diHkCeET91qvJSJGjArpQ4yb5LMbGakz5tWLQXL5NWRnM5ABCZnz3J3FMnDFxZLNAVc"
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
