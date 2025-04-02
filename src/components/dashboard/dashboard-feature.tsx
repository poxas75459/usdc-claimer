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
    "5e4jAZGLbkn7pRbr1jtQ1DcSbxKKtAW7KJA2qLhRAK2J95CTekXnUDSEGqL2kNPWCJQsjBiPnKiw1sz1ujJSJ7sh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fY4gBBjKHr4ExLG4gKVvdCQSaQostT1uTwkpwmxWNQtuN7nJrG5p4zQK9w7PHTnfCbbYXtxR4Xm9czcdNdenEr8",
  "key1": "5sgm1h6gV4bxrPVk1Jpsa5D9NmySBoMnPtKTtHxYHbCHmoFybbgJhM1qk5iGZRvcvuL1LG77vmDWsAD4FWx93Gaf",
  "key2": "3K4tKisbgNvRxxRdga9VNA6fV7pRAKJdQQrpLSTNEujmWaMhXib6WTWkVrmF69bFj4G11QRxjXrQyigWuz4GNJDQ",
  "key3": "iQkQ6SRG4PceNaxUMQM7EXu7vDm55zNntouXwKm3SdXBR3mGRMUB1dAn1DmWSGU4VimCTdbtKgJC5zXGyg4yyWk",
  "key4": "4kZoztRZ55mxKGpFBLXE9mF4VkL5NT3QAJemqhFjBZ6aZpWjiu6eHBsMDVg5Mcq73ktR8M5uhKqEqJRMVGJuhm8o",
  "key5": "4auveBkXjaCZG7PHyZ7ZVxbcjHxb5fwKzchoWcD5PntmQJfRD2rRXfcCuRkJJMQqzFP8mbnGSULqPAYZhReLtSbQ",
  "key6": "64DEr1AH2j8QqzFbeVqP24EQK13UhcR2vq9WVFntya5MRaf3RXtWjMpDLUnuUHHMaxc4oYshBfA5FdUdSK9qMrfX",
  "key7": "6axqXXrktkjwChr9ypcYiq11GyAsCo6KWzeDqLJYL2a23YQ874XfFhjJYYCdHyqBiN2oZwkrdcKWmJbxSMpZRco",
  "key8": "3RyL3fsrzU4pvAKrD4iNspFsExvvWusFcaKq9WkJS3xvo75JD1t6yBHhLz9UnrCwi722acBFJp9C8AvGWwe21wHr",
  "key9": "3kBon5M8XfDwNfepszzDTT7czyNEMLq84Bjcda2w76UXub3U8FqiHE6ZuARVFMfQYTXFTfho41AbY8u8eu7zoXkD",
  "key10": "38R3U3S3WQ94fMr3HpWVRdTU4VS95MXPmHx4NxJz8CrAgFes3tUUnVuTjSAH69q3XkTxcQ3P4iA2UjMDwSuV4frY",
  "key11": "2i78m651a5EmJpu7534LzrzoFvCiKDtKcjdo9t4J6mc8SR5RVUxCRrU4EsfGywhZsm1HGq1URu7DtaGou7AwBwN6",
  "key12": "2gtkwm8qQnyNDGiuwsqrZK5wvatNPH34P9FfwaBcvdDM1muuNjecLR4y5J9U9kjogoPQipse9RxRaCxEcFNLMoGy",
  "key13": "2MS1K6E8AeoHTAmEfFnA8mRiYGL8EZpdraEDkMAkhi7DViSAEuYPnH5cfDNi8fQGWRNBJiSBRJtYSUgDApYWqdcE",
  "key14": "57WzEdrSHcmcXuGJnNFRLNUioKESn6A2UE7sDuzVCmqGEscv92rtpUAounLRRsVaPGaDhniLVbEU1CbDp8212f3Z",
  "key15": "5YKKfEDQu3BNLv6gSw3eqHPw8VWu41bFnA53zKFZVAYzmeFF3CcK3Denu1MWNqe1bWy6mKJD41KXkpxvTifArEpv",
  "key16": "5TPMFcofpt2JLdA7fKhmNowyLyjpxgeT4pU1QCEZ5TJ28rs6Aj5Xzc1iVNpZwMGYzZZwxsxyFirBjz5AtgNMQenP",
  "key17": "649uv1wnEd1Ne7RM8SoARtwzwyVd4kLKHTu5NK3EzFvhdLJgrEwSnX4aSihQ7rNrfSZrGdtKRt9R8TZiPbrCVAzh",
  "key18": "3UgmD8BBaxRNEF8xwe2fvXzt7jf2ZysP2c85XUHsxqmxUpePbCcsXoLWtsiFrQM8YsbVVMSvKVTYHoKwfuViC4Qn",
  "key19": "46fvzx2QetiaFmVrn7i6MDigXCTfDbNBm68rYBbwkZYB71Yqukg2KmHUN1jfWM4xzRPSfEc3fYhmj4UnpLAs656z",
  "key20": "XGtR8NbxsigpLFanitGb8ZCm1USB5qofM3AV2Ssfcf65KhS2hHcwyp8RAxYV1iTtBSz87BfHKrYg317giZV84uZ",
  "key21": "5xXXiUJh9wewnrAtQXBacxFt8WX8qKDWscsekyKuDKoDyUWv7WQ7NZZdKNJCp5ZVRm8AMh3X2om29h2aXEtr69A7",
  "key22": "h53MxoA1u4VGKQ7vMpguBsoo6tTgeYhRx1x5fGE2jcym6cP67uG7XKHvXvomZwf8yPP5niEXFvwLARrgcffbLLC",
  "key23": "49feH9hWy7gcSEuaD8ikGnWvxWbGYiQKDMBPc2Bd11qUzCY8JdrtZHx1aF5stkBDg5z7oPXSt8gmRNLcnRtfV45k",
  "key24": "2FQzfqdooPU1YXfNM9WMmeUXDQyf27mGyfH8i4kPTFBkYqp1NJjEjwo1bieWnxpbRb3EfG8U8zkMAFPpQqsZk9K6",
  "key25": "2DjKRSVZCHEyGM81fzGfCQFm5maaaR3adQRqsmbMLeCoGdGgYvtYymAQRQBhq2nSMsBCpMxNg13YwwuuHLwP5n4p",
  "key26": "47TFArgTjQ2L5nP2E3G8Ho67L1BV5QkVB9JF5QvBT7N3HgccMcKwn5nHL9vnW9MB9YETQRSPBLgxdgf3xJfKuG2u",
  "key27": "4D2adLJDJACXg6KDoRkFiktzqwhFDNDr2PJ9AUZx9ufdseWR8Dzx92wDtA3F8QCEXs7UERf8kzT59LPhD6aGNwcT",
  "key28": "3cHBKCnuWb4aFu24XJhiAkwFDEw4pVgjcu2NtxcoWm1Lg98mkNLJg63S5n74pJPJezbpFkXj3VTLLbTCJ8hxC7Sf",
  "key29": "2mjeVWa2BqEei4kLrQQqmPfKCMUmdeHxwpio5XzPzUxoxKhBqYB1xGTMazDf6zrDp3aZfCPi5MqohWyACf2n2cgy",
  "key30": "36qD7YssmCX6cwBKnfqe4sPP2DDvR6bVxvA6qe5v5qoLZVNaQ1afsewn33oFt6apX4dpbWBDyVSgVRB5jnsvTXet",
  "key31": "pYCQM3RqhDKuMVMMLLXkQFE1qCsCTzZf43id5myHArbUDCqKjZbsLM41s2uh5FXztYXSaisZDSgxbuJcFqZVNfj",
  "key32": "4P12fmTfFbiWi2ADcGqXWuKHsJrK8hiD6DjE121xiGUp7f8E7HABMcqEx8buV6pNVxaM8Y7w4M6UjMZpmDa2Lvwn",
  "key33": "3Z29pB8Mz6Hadz37dm7ZyR19munSZCYP2YP8FHsKDT6Yg3assgygruezvyAhHGPbSrF89D7L5thHWr1Qb4zFDGbT",
  "key34": "5We1y6rt5W6qu9DUVxZ5UV2xvvFrqEi9vAW3nAhnEaNCVpoZjQPhZzXRP8nGbBKiLsTADAagCqnErJkKB844WdGn",
  "key35": "4BXdovfiur8PwCZn3JezgA3og6HTKWx1ibW5uQzoLaVAHCQvWaHpGkdjVChzpksrZQfg4pUAi9kbXStpc6L7ayHv",
  "key36": "4iDzipjVRifJjAVSM5evNBVmDspZMGVdz1C8C5Ae8Qg9A3qiNRhNxzacUo5hRUuDTQ8UJb4dk6cdcR1iz56zK7sj",
  "key37": "4wkLjDjhqLiYxzUpXrK8k1y1TsCyf1voQA9h6wgq7f65Ta1GDBwbsgW8tbkj6W44hoVHYK5amGn43ULqN9tbd7F6",
  "key38": "4vVxCvUioX3kBMaFLjafGXVYrmRY8qDMRMgqFY5fuKMQJEASicKpWXKoeYcQHNAh6TtNcajdwNfDq4PcKb161wUZ",
  "key39": "3gH9Rj1cqUbaUHLsvkFzFtQg287Uxn4Skda69yZaeqRJfeWdq857b2hxMSwb356JraQT4LFPfXt7g8pXXCdaducM",
  "key40": "2VM3mQRuyYJWySKZojyGqPV9ENywak9s6DLAcFHYj7Bp3CWCa9Ufi4Tz3PgthSizHDwNDbNBGsjFUojtYyNDTYrc",
  "key41": "sSp5QfZvN5XzdHoQmvf77gj111fyQvop9duvWaHjiZFpr7MhBQNaNXXWwVbF6T3W6BQmEb966KK4thJj5n6TQA5",
  "key42": "4V4HHC9v4wMV4Fpz1ikQ5nzmJpUoBsubk4tunjmc5AAMGXsQGkwkdWpUKN4YR2ry2E7ErrHCRQSQpNYJoYVpKWGn",
  "key43": "4xdrr71BjWZXj4zeNUuMsLFrBrsmr1UjyRpdvkxP9CMdV1jwMxtoD8LVWH8ZtjkK2Nud7jLxRqCXarx9RJM1bQdn",
  "key44": "2frZky95AtqdBQL561MmMf6W4z1W7XAnoHAG3sR3tQhowm3mMt6dMiZNSBCmsoCdcAuBjtJqELvCcqkyJoUJ22Zo",
  "key45": "4dkW95LgKmqLmTBJyKaha5h4MsKLaTyhktsAZMVq7ZNefDkeDBvaRen7TB32kpop6fS26nLXUDTAoWYKBx5B3TdH",
  "key46": "2KHtbmuuNSbfyLaFVgsYDJGPnmuhTHuzrYRdxLTGuYxpZPx6RLdjhZqjDvU9tnR8Vuc9SETaThpKtQw7W3w5rkvH"
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
