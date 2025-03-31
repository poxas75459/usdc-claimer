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
    "2VSYDZzf2NkCfAxX2cksaBQ83FzoBSSrPFQkesYZiZingfb5mKBw66EWhpWfgCp97sjGhbSH5K4HqoKy8pzc7jR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PtN6Zr41YxAAjNWwuCR4EdSbzLxwZGT6BAutvht5zg7At4zaXWfDkWgoRMb66VNeuLHoUTKeKtgFMLokBfBWkdD",
  "key1": "5PzNJc1cgy86cBs3zz9dSCmwQC52Bm8K5aYvpHy4yH3cCChEcfd2tXMUMxNdkqDrkiDGpduef41Lg56n2rNq3t1S",
  "key2": "3qdi4AFa125wNLY3QLuAfHoD2NosbqJ44onNveD6HYNHce74byfxHr9JG712b4S9cndzaNeY8oaT7UEKr97s6yBG",
  "key3": "4FEh54WG9ccutmwPxpZ6R4nwsnTa2tP8RvJTk5iuSmLvmYpVu2sh1CuiGrRCMbt5nF6BU892BKE1GQaqnqPYFdT8",
  "key4": "3WpMBrsmPzsGuWK18ije6jzF9K2VySFqiu3a1kZU7u75wa7tSB2G7q4RUFAWe8b7TNj5LChi7tQKo9ekzbmGsZyD",
  "key5": "2K2itBuHLZbFqcSUmGGj8LQT2Ewnmvdp9EhbfYcn3qLe5J19ncnq7ce8ZXZbzRU8Kyshs5faDQkcNsLDArnHuKYW",
  "key6": "heZRSH2E3fxLGfzV8WHq8GjJppbzUq2vpzz5VkThY9uNftA9aEHLQE59Rmf7AaKxTDJK7AeyzDVCiggK75bJryK",
  "key7": "V8t85i7nbYT6YzfidknNmWjTNZj8D2UU8cVoAnc782iRq8JyXiUXM7vShkPi6DG8rBy9ELDy5wbBrkRzVThWVPX",
  "key8": "2vHGvuQZyHJNmCETsXep7f2L7q1T827pE8FThArtDbHHF6s3k52rSVNM7wdyHDdc4ncGiQDacGfRr66NB7L6PWe1",
  "key9": "3oULegLEQxyhkNT6Gt2tJA5DemD7rJQzjFkHRcTfJyw5MYRLGK63NL4FGf9sdsMJEJSweYb4TtSWgD7hHAd51JYK",
  "key10": "4uSztAkDtCazwhEuzJZ7REs2s4kEaY9TzvuRGKtdp34h9Kdh4Py9fhwzmYZnZkX2jh89yxB2uBxqy8yuYufgMS9m",
  "key11": "2wyTSoonMWU8tGBpmej5BV17a5MqR6zUDoDFEzjzBrA9JQfxu11MwC9kj3QiwT7nT1wC9YADJY7qea1q8YGu1NcA",
  "key12": "4VwzmqnwYkU5jGwcp3RK2DybeTG7vBsiBwiLQvq1cjx2WZc24uofdNKfVbpiaWejYWj8qvyi6XU2JNE5PoZaa72N",
  "key13": "3ZUikSkm1xnafEuK9Lg98LUtqMSbFaMEv3V4KBLEYdcb969smwAJezXTxBZ9fCVKd3qUeGHbUDnmHCJvqjhGRUR6",
  "key14": "4L4ivzPHxLjikKYRh3Qtfrt1Mb4ZqB2eYRTqtXbcDEtcmPXMHq4P1CEe6dGqCAiN4hrfyZQoC3KwZLDGXAi76ojG",
  "key15": "3WnCDZzx1ujz1SJHW2JTkx7pDHShJ2SWohvSbrNN4PVkXoNMgJXcBYx3YTaBTG2PT4AVag7Av6kVqamaqQUcsPBP",
  "key16": "4KXCkNnPdWD82RwcR3JQeVxbjuSvvNSdcLUDHUKuohPV3YrbqSFz1UZ2Trb6eerao9iB4xKyk3EfEfeFt6jZEbhu",
  "key17": "41MHLFshjPDFAtXdt7tDF8muMpryN5Pd1QD9HopjJHR6iXGgPuLhmK9xSVY4ATn3fytiZNPXhQ2jYLJwayUKRTTa",
  "key18": "2jxrh7PkfSSfsNr4Fcz8yxw6tWfvAWt6mKb21HoMpeSFXQeDm48eYqge8SHo6yGXwp67Y69fWkYVJ2JcoTm6iaSG",
  "key19": "LzNKRTg6t8VtJw9ZCM2E5xno5vhHpCoBwnitgK7A9CtM9GbnZVSfUqRiuNBGPPVaG9x9ebXJS8RRD23nH8nBDEK",
  "key20": "2demEU1x4S11N2ihbioyT1uBYnJ7huxSUswQMm4xaAiNm4uMXmSdNZDzrXEkuacq8jgWAn9isVp86ozGXa4ZrHzZ",
  "key21": "jR2XrC1CcrtHWCNTeG7YWyRCbnKWqcZjiQ1pJx2rcUegAMVurMiLvJFuts11YrCencmJjPjGek9NcUoJuFMKkqP",
  "key22": "5Lsue3fRWqMj1LCCwaNjFX8vVsjnU4xbS3avWgQWVhNx4sWSwjmmu52ZGdjNAwUFsaxD2snauChr3DtyfuJVFhuo",
  "key23": "4r7kysqQqac8Ffpg8KWCNYpXUZDL7eQqxgMRba1eBYgZSE4zc2ceAEZQj4ek7dkcmQtQE6EEiLsrQgWRHXDm5oKC",
  "key24": "Q5cH8PFf5G4WFpJWMaG4p37yowFR2qfFpdVrrVAHniddABD5771XFSsULuv2S5uyLJUSGxfkhUpyscLEm6325mW",
  "key25": "5tZdioV31R5Q6YBRp6Nt5HhvVufNHZo6SQ8BZqBkLBfDKxKBPfvrBSSRJY768YHvnaBJQyL2krbrZZpBwyAPdprG",
  "key26": "5azMLSQ4xmXVusCft9X47RPgfSWzESrtP7qEahHNRraqtWgnkaeiNLBxFEyHKzCj5YXvW43u7N82pWeh14DPHbFY",
  "key27": "4AzSpQJNHNr7FuQC1TV1e1f9EhU6AfGkrorCBqRByShtJeRo9sSjdEpWciFajhkzRWMj9cCfDhZf1m6h8NYUvWNW",
  "key28": "5SATfQnwm5o8vW3BYBA2Nd4Raf9YoMZTXHdQzSsPs8Ck3rZzohzi1rBj1wk9prMo7ioXPRSWsvCNP4AKrJ6fKgbi",
  "key29": "5GaeKN5x8PZxh8Tax51PGrSoWbCs194aYZMf94vZnYRPqbJrmtcVxMMpHvWRJ8KEugaFa6Q7JkMaoWkpQeBusPyV",
  "key30": "3cQXCWeubcZiyn5pFwmjk8CwmFf6Dq9dipMvAW7uvkrBdvgEkJgV7CZKpktGeG8Sdy3S2e8LTh3PdUVBpYsep9Lm",
  "key31": "2QFAwUHv49TMZBAsT2aD1pRz4cqa8w64K2LuHuj7CmU9RHkzcCLvLdpAx9TcHGpesAZ3J5QcetRTAZMgyjHUSfPX",
  "key32": "2AtDRRBicWicdsRf61WD1J8XiSnuxi2r8qGsYE4mEW1QJkQoE9QbDfkbPFzZs7HdzUrQCcHFZjt32QnLEChNwtYM",
  "key33": "23LMcwuxb6Ph8LTr8qx87MJnCD5B6pcx4WoQLwc44azLR2Fa4DZC76Fs5NtLdBLzSgztjrZsEg1FmJKsdnLQmwCG",
  "key34": "Bx3zKjH6KBNnu3tyy4kKXwuBEpst5AMS9RGUCw8UiL5Mv5GJnvBRYZRXSRWvgz8YkgfqNRsZBgF5tDwjNBEdBMQ",
  "key35": "5js3BE1zhHuzMpiJMPmzCAccMncEg6V7H9BUxBAQKpMCGTfeduDBqVSMRVEFqDxFSmFn3mdBERH5FGf1vGrTsM9p",
  "key36": "3mZFPUSbrDcUnB5puRkqUh2US9jEQx25SFT6oBX3bVLKJhfpEGjpDnPA6U2HdX8wgG7pon5Z7ur9N4AfDHkw11TX",
  "key37": "482p5QqXFaqJHvK5ZmUsw15qfMg63zifdvcFJ71t856iNDYLd64NGWrGPbcNL3PciZmrkgDnWNks68CWNxiz7x6Z",
  "key38": "3CbqK7uBPX3wSS7nrPZx773rj7Szsy6yAjKZaUQT4LYW9FpBffs2iRXw8Z3mwQaG4QqAn6sWjw1Xatk6xbznPpTx",
  "key39": "2g4H4fJPzRhZzAqy4XrFnxd43hxWEXoEcgLnocihXviLEo5Dif4GMbpyuLbewS75nxeYC5SotqBWQWt7Bh3LNhtn",
  "key40": "2vHhh7ogjLAT89hJhJdm6DptsPDU16on3Q4Gq3BQashMpWHH7XaPTzU5Gocr4SyicuVa1MEfTj8JRK4RycGovEZ",
  "key41": "5pYFi6C47rAhpMVKv9HT1EZnGUj5hkcEfauxx4EZo1qzoJRwUAn2viKUvjj2fJJ5iDpr5ufaj1cgQhuvX26JoocH",
  "key42": "kDtoqo7FGYSqDjWstG8GApTQpU5tbu6fsGJhJL7pPQ6GbeZepkSqG7nyoJEjAmCSFiWN2fkaZSsswHs3dCnZKLj",
  "key43": "3BEKv9AgdFwm7oh97opqbPnRnJyvuGp7hzGMt3AJbgNxSjjQ5aeLZoncBKw4NhXcTAgPX6DKdFNgB5a7GePJd64P",
  "key44": "43V8qgWKoB7Q8BGyVT5jGb9Agt2Zd5VSkd4GtQCvV7LU7jzWALBBdx6kKEkgipWzPKFtyPCAawprztuzSWStK1aa",
  "key45": "4sjikLbzzTUu2EyWtTab22UQN8n6HCTccwit6c1P4MruG1DNBiTiDTzKhvBCopfRwPMpw6vSoFXdr7XMe68vAQ3b",
  "key46": "4wNzSy9SKfkYtDV8rn7jQuSVyW1i5R19x3NquS1i7peED5v6gj61mBbgTNrkw7gcTzyfEULBfrxzHsMhZ4QcmDvq"
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
