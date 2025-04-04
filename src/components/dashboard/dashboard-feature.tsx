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
    "3C7bFEKghGCmsVHxwqZgFRChWqEZjtJJmU2gxsiDWK4NNeBy91C1gJPm35ySV8am27JcCCECFJny27WSYq9ERLwq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gvo4HbgzuGMaxLYbfFGqDaJSiM5Jhu1TfYVCEaRxfjqcv7xmPcLMzHWPfVPnBEXYaxcLMKeu8xEYJQhbzKmK1gt",
  "key1": "3yLPtDXw25aai98ReKabboESxoX8wN324Tijj5GfENutFjMnpNwiBuJgJdY7UT5Ty5u8M6zZNh7pGAc7UWf2ccXJ",
  "key2": "5NTfXVzJDCXNQJ8ZfULUkBY1WqkPd6sFqUR14wwRygNDN8s2MiM2ThujZghdmdBTE2XrJbgSDjMeNrK6adxXMJwy",
  "key3": "3H6a28iZDnd4zq3xgcks6S57s5cHtWZHkKvhHrbVEy2bynf1HvhfH4pYpRSkArZ2tgK7MHxKvugZgsGcYDwUGvRg",
  "key4": "47p5p7r8jK3awZ7X34MmRWkmQTdpKSmtGR4hjUNN39h4iWuTf5PB9TviqLbEgGa6ebWvU17K87iMh2TXpFB2vf6N",
  "key5": "4qUeSc535bZ9v69ZG1gwe6SYhcocSQEkUjmWhqkpkzqkEHMGFZgZkfBsDTMgLHhgDfuChHYMqLpAzt4h6irbrLLf",
  "key6": "22691NPuvH7WfWQJ8rEtkFvssRmEyxCQz5bDw9iiRWcceD3sP1PLpVSA6zidKUC7DTquXbwddwWx94eCcJBHwr2r",
  "key7": "5HYxErH1pCicHBuMiqtok53HFnSktm424YQ1aCQzbKL9DWLtmHhHY7U4Hkxxk9rzySvFd3ZpkS3WtoTAh4Q7n2Bp",
  "key8": "5p2vhg4hpqmvrSZ6dahTzwCPvCwxqck3JVHy4apHmXP9q2b62zVfCs6VimK3GvYpdKMQTjtoLpmDCQAhNqqqVDmo",
  "key9": "4oEgkQZynDdfbKAeMhhSjZRjopWid88ixJ2aAHDYWdpfFt4ykhtLQMoxCRNafRhxvCVYnkwspVvqKMHYZ3nTzPau",
  "key10": "5po2UMjJfGXFpSYvQtCPqvgRehMefPmxUv2rDJtc6X36Knk15bgGtqk56x32rruhrDHf87VULbUdo3H9r1b71mLS",
  "key11": "m3y4oJT7oCPfDFL5E5b2UAdhSny7zP6LJor5Ydv5GodRJSaCoktFV4XJJXykSmn3rDT69zR4tmNsso4V34sHq2E",
  "key12": "2fw9oUSuYkMCDPEApyxDGemy1eEGEwCXjSvL6G4snCdt65bceDFZMi2xh9Mijods9UoDvHH5MLhUvNZzn9129dxx",
  "key13": "3zZD9fkqmggv3CSnPNoyALfri4Sq7GERbrmTAvHsncphtkSCKFWpnrRcnnGJgjbeLH5YR8zQq4z86At6wh2jn2oG",
  "key14": "4Rj4WVCzPmLxuL6QsFJPpQ3Z6wUSbGEjqWGFzg4WyZyY931nFyzQD2S3iiFHABJx2XRvRr76ydtBDDbv6sG28SbS",
  "key15": "2qtBzqwejBe4NXs7gm7ABzujoLV7b2Na8tVWXtwbvYtFAKkok61xRj1J1AyLvjVdyNVWWj7wxmbBVxY7VrjDiosB",
  "key16": "3Ai4VbFLPqcDrUjMAAGYgrKNBg4bemTkrgCopitAi64LfK3NwV83N62xyTd4ogAjtBvwAKLEwm7fLByj4H3rc6qh",
  "key17": "D667SgaAnqaG1osSSmzNyvnqq63gqHXAdzSqwQyQRhw7kqdvMnTpg2MZnvayrj9pmhMc2PgDuWMbtiu7VuJU4zx",
  "key18": "JocviTsj5m9ZE8nHWnXGNToEYzuw3MMrEJSpCMaaiNCWAMNm96zjrETiVHCzmLFSeeMbd2jB5ubCCCVDxzmBB4d",
  "key19": "5V7RxsHzMa6G1GbmyXnxCtxiX1DgRhMB7CeE5NS26USQbfXWunkmtyMhk6BWt9i2o2hBj2VBzJng1oZUnrgDhSxj",
  "key20": "b6EeBREJ5D5Kgyaf2fNwjxDUxKfauabtUiNVwx1JxUosMft3wBXqbDBMA9HsETFR591d4Fafp3GxZyRDgwn1sKE",
  "key21": "WcdupDiC9DDTTjyVbvmkEvJkrrpLM313JX6AquJBEigzzbRPa8GvjgJa3n3Uij5UP9qEpxQnhk3yVV6KTC9ynsB",
  "key22": "2DAHKTAVhp4uthfPYiQ1kvfdAEVwwDJxh4miMitgn7UdMxvdPozJMmUF2Az2ub1rG3oGuEYaQ3R7tDnGJUjvt9Wn",
  "key23": "5ZXkTevV3kUE157XQ4iHfUzD8EffrknjXt4ziksdnXeYEqcgxm8nYCdy8HUQhdJGEV7DPbrrEHjagtYPzfqLVCi",
  "key24": "4knHBKPWbv9KJA4HPjKsp7ko4B1daocdb9pYsnk7AiiE5Q9TwgzokDSX9N7TBbhAQ4SpU1MCQFpefh74eF3B5W74",
  "key25": "3jqnYT21UPp1gP2UpmHg2EfgVXVL1JsQco1hirFARC6MCJaYMvVdUir8JVyNposSajCWKUUpmXFQppJWBzt9UExM",
  "key26": "3Ry8tr1zfNuH31goi64HfAQyMxYKKKFDifvwUaX4rhNB8w7hzvT8zMB4q1kB44kfbm8BNEJtxRuCdGDseDjsaRbX",
  "key27": "24if2eWF9RPwtU1gzGQ24Dct7iwkDxQ3uJDeTf5XPep6zbMpqA4ekw24BY3sGzyqk1CbpvCbuLAMeuFb2RS4HtXa",
  "key28": "5V8RXAQYZmBzRZoqT8NYYAPjKvE9YQDSb4huRzvydXV5auN9BDyDZvfT4CGru6QLpGRSgRwgXExX3mNAMxcPgTS1",
  "key29": "2eHVjE9Xq46C7z5GyCKYPC6G68u5hX2vKq7nS4otAcZmwjN387PPH8vwGNq2u6oU5cFUYpP89AZ5CsFGo2MUuDDS",
  "key30": "2eqh1RxyN2pG1X15ntWk8UFjKSzZfswF4TAAEdgRuzN3oiKTSPgn63nV5H7i5hyh5H5ZQ5eZChBbbuhMgCch7p4J",
  "key31": "5ihViCb4K5AMk2AzydVhkxWgDxsjSHP8jy7bsYzDdEUFmhLGfou2PoFB83hGXzTPkDgSUbx93r7J674b53xuGADK",
  "key32": "5jhSLzJmNxu3SwrABMM3bpFeEtvo2b4VkJTsMbwxMQH9vpXrYZoHRLhXxQxYJehXMuso2xpAFzVV3irKqReTA8wb",
  "key33": "2DcNJ79ZGd3TY1d3gHNDjqLU3w7FExYTZY7Ef8FxVc2wE8J1KxiNJb3xtnTd9ro7CW6ScP5TWt5K785hiPZqYq7A"
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
