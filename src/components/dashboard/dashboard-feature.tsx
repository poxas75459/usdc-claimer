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
    "67xGAfksi5cm8rA7fpp6zUW4FF3C4W47xQPBkZkUhK5r3qs2nLSag6MTD1jTFibcY1cNFYhtbhRqYyNdAHeYnJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32pzH7vcmbSkuBHkFzr1gtdeLF9hibfM98e7JWMuvKhwoKpyMpBgugQmz3UP3Ykn12MxRJCykvzSaautqRW4GXvF",
  "key1": "izBf3jtxzUARf8wFfpxipbZx7HSvVMHoWoakrkBBup9Q9WYLpa2k7mmw4WMwDhMR7ZpM1wQ779YodYErbTMeSnS",
  "key2": "4BxM6vwXDHG6RkwuBYpLULbr25GXTf5GUZWsbejiUMxDCCC3oLYDfx2HQBXYZPeY9gx6zaJPJJkVcxNpGnbHkxQv",
  "key3": "679WuScdLBgBeu6zFn13VtkjKNX34JwLAyKcDh5AYN34mTttX1fSqZYcxVUanjQpTd7s5YLbjjTGiaVwjn6yvYS1",
  "key4": "cd9ngCRN9SfbV7TV18p7deyN4xDu8WMBn9L7kHKHz1BowB4uVFvYCSmSqdw9PvFmPNtHtwvogivcQSPkkedXwnA",
  "key5": "5ARKhKrWTVqeZiZMgJYvffXQugEPuyhqPHjK3z93XrytJao9VfU8hMd3Br5V3pEa4VShZctABrdphQgnmVLxgY98",
  "key6": "fLTAitDQ5StgfxtMR8BBKR3DczaTWHFo5sxpaJ6JgLAPXnk4foVGVkXXbdvEuDG7yZ1ysWmAqbHq9MiXLpKEudM",
  "key7": "3ofVui7wGd69a2EjQqAsX4dW34dWWMrVzuYybpDLL15B3cBkp5HEL7faw9f5mZUKYH4TWjPrtE3Zw7eCnATicmFR",
  "key8": "55NSDi6Z4b5bgLEoiSiVqoRyVbs12n81P7cZWZPGsArSu9guL4bNM4SEZBjQprFBHHSNU7S7RV5xyhqPhvESuuK9",
  "key9": "2Jx3eJmbzn6sb6J9eJEUr2BnQpmNe5Tdqv9BiE5WWgb2JhRSCQd8nko6ondiZ5o4wfKaDzrHAdRGmQ6LkeEzs5kE",
  "key10": "4X6CFLFNugBvneTBUXVChkugzBytxu7iGNqBx78SrQ1uAm3AXeqDav9Z9jxgB2pLZdNVcsTqVvYLerAPNhZv3LZG",
  "key11": "2mcyw7eGUjtAoF6wGe87YGnnfPM9JXefW6c8GFu4rRnuuXyZs6CK66xB3SG7Ex2g23af9r1V943SaFqy3vqNus4J",
  "key12": "qJYkHKYKwQYNJ4vT7QST9yxwUBDX28t84GPpzz6c4xaJcDC9n2E5YHBf3YHhWCPgWMb88dsUTGwiSc3ebaVKUL6",
  "key13": "4Xuch7Arb5bku7QtX9eF1Pk1y5dHxP992v5JkxzGifyPSkgMHVFEnQMprpDDmVCGViGxFmgc1vejRTNoCiRBF75Q",
  "key14": "46nEsw3nBfL25dHS7MYvsGvTgGXUeVgV9pppn9LMwMEna6xUJjipJ5X3MV2kaebKD5V7Ak1PB225byVev7BX5UjN",
  "key15": "3Ea3QLTfU8yMvzmZLmGdsGKNqGH2Tja4yD4D9wFyZnEM7JnyC4SihjMja3185whVDPXQsM87pnAa6SyEA3Enucmn",
  "key16": "4P2KNwmDfangU81kHYi5YUbQj2BLb89C4SE9kk9UChmfGAdCTdKP6cDXMv1dxFkx69v8wv4EhxmdiVZshMzuL52D",
  "key17": "5NbDiFDwDBhNbGUziN45S8tS5ALPqD9CtoN8WHnvzxSutSy1cNPrvD3SJSRezfZag74uNCeRsiaTVHSJYmUB4Nzg",
  "key18": "3vnVXLJ9PMhThmKvGXghJnWRMee3HUt2PN6z8WhF9GifqUDu8d1wEYUmXWTukhuu8UrYAj7tMCrYsw35aVT2TPuu",
  "key19": "2uZxebNWDeoiFnaRVpMojr3BzCgV4i1efHnSpicvTswpSDviJV243wkZM3owk4LNUvgU7eD836yuHAhGzi3yuA1d",
  "key20": "3xrAvHdnsDGzxX7qAkWWjdYRbU1DXWmKA9qDQnU6gsCRNWuxM7KZfn8fxR4catipHtyyJinDMLA4eiTrYiLQUck3",
  "key21": "5YvA2o5Jcr1GKPtHuAdb8KmhbvveMNjSHwGTi1wm5EQXe58agGrbr91RbksAxNXpBnAKbSeDfSnkQvv8tQDjbDhK",
  "key22": "3owv3svFWceHaCrfnhCXEqhj1NqwnKLXaQmyUtdB4vThXmndC7VUTXg4ECNWJzuUGK57aDwdyCBsgvGhPMvokkTq",
  "key23": "3Qi7SE1fYfVqzfpt6MgCtDX7NoGap7LHXdRnLGEJJ9AkGXxPuMgKMhBPyh1akEarQ7GLckn7NZQHWAjbJ9jeA6yK",
  "key24": "4z5Wmod3KiCYNmWEZUBsqucCEy9cFVUPejtoCcecQERMAL5ctuRpva3fsR845ipma6RL4PnYYvbhXTqoy2fDmvvE",
  "key25": "4EHhaJKYWLgnztrxUB3pKq3m16qA9K5GLfFiJRdDDxs5KMrSc8TRttPa18ETedbJe9sdXMAXAHS3BNRji7a4goCd",
  "key26": "2Hs56zDPnCgh6U2SZRnLMTH1iLZH44auvCpckmw5m7xP4EuAWneSN9ZVPj4uZc1YQfjCNSDupKhecQYkpMv2zDQf",
  "key27": "28WuP5pYzNUqAu9wW79ZYksiMDYiU48wLFd4qfgjtZkX9H5jZSD7SPNQCQYePLbSzqSEHBa971PWqEGu8xzZuqVL",
  "key28": "34bN3WnJAqFMrA21wqr8tptSv5KE1C6Xw1hG1yYoGvGWY14gYLcpCBKPFLSq35qYkbtd7mkJWULe9g1VBhuDD5Et",
  "key29": "5DNr2TbBjrtin632NwsPLRK6cTZE6vQbg9ELYRhSGnGEnQh6aDexcSNyEtSAoDt5iwjNcjtHhattpgHZPc79ie8P",
  "key30": "5t5G1xDifSN4MuKmVTQzAgdsqUjWBFXDQQKp1hm4G9EYt8iCYviUiwWSYcppGCjtoPr9TDAZEkQkc2MPM1VT8pUJ",
  "key31": "VuqKrxNMoETs1UjoCeSnDWkDSVVpPMuu12QnxnodMpknyS4VTrpSMT2WEHRwxv2t9f1SCU2WHGYKG3KYuYQZzSe",
  "key32": "86PYSZLn7TyngZKE2XCj25kAUYwe6cfpxSFwXU2hHM5pTUeTzDnqM5a7AVoHMxH7C4927jyUku3TEhMKc95HrPw",
  "key33": "2M13JXSiwUY9fqQ8duZfrqWgM1pjwEo7pGKNN42rkqJ9x8mQeRS6sGzLG7vMnswYVoTKD2444EF6njNu2XhjJvGW",
  "key34": "2neTnMgrXykuRZQ76hihw1Sq1t9F7bDVh32Zs89HfNLFuzFhjGJaXNMyTf2tPZ8caAMwHZUGDfGF9JYcMcz8Gt7C",
  "key35": "3JNZZ9ebs3fvPoWg5JBWKCUUVz5Ne3KfUZT2GWZG3g1zBBiUkCb3UUnzD29pPPLwxPTHTsXx6UqahQjgmS6NHZ8b",
  "key36": "4kaYTrxiEMCpXGBY9PQR3yNyZavViGkx5DHDzp8aT2RPV5K8Gmi7eXpB9seTeLcwKnryG1AZrwqZhqWUyykCyjCm",
  "key37": "2rLGLhBp1Lupg8U4MVWjaWzXMqcV9TjahQhRTLmLYvHQVL4ehhDVcZ7SvsRPT428ckHxujR1hkq7XkRtGz5emDYy",
  "key38": "4HSRQD84mfFB3DhNcjCuknftoVskZPmMrAmBDwJ6C6xmBgXEjTwZPBVsVzrKxy9MNkLkKznxbzZb2cXz8hPEF95A"
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
