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
    "35xRVxSpVu6KVNUP7Jaauj5o38bDskKEABZDbnM1khusBkcXSQto2UmD2GEViaU1YyCQnQx1JcvZjvY7cymRteEw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Echr6pMwqKRoEgRkuRf7RYg1SokQkN7nZ98EzKjGeJmUA19tBup5WxSgD5zK5HMbAPSZEmfv5sXkiyuCHhnRTSc",
  "key1": "ybYXTtXrrmtdme1KEYV5qpQaHS8HEE31ZTjjdXYFEqZpSzNhM7fyaAzBYEBe5JSE1Hs3zpx2W9waW3PWxQo4Swy",
  "key2": "2sKwUFZQ4BzQRvb9rpdEAKDVCqhWD3NoxCBWfcBVBoE5xbq3cJPW3k5ZHe1TE6rt2fWEkiK7iHptuzXHqmjncE4n",
  "key3": "2PcaBYpZoNJZVNe7rz6g4R51SjQhrqgL7nQa3d2BWeJSwcW4stH9n3RHNaK2opxfNaHVck4i5qX2ktHzRMWeU12k",
  "key4": "5RJztfzAnTKwHPbMaQhscpQEV6gjmozY3GW5X28eUuJTrx12VUQNYVrT2tQcxuUXqkqfyEGGHNwuzLCdbKMsRwou",
  "key5": "5nijC8umhBTnBWvHjKU3aiNVcSG2R3Ld8fwuuCjR9fpQmJGdhyX2oBqXrSiLZsAhmrM8nF4C9ncNLzg5ySeWXG1U",
  "key6": "4Psn1VDxaP463nn5HpbCsLaLpHPgFDLiYZub14w6hakuRfiCLVngNKXQSAXaQBvDyN1wxwcY6vyugvkhufjSYnZV",
  "key7": "cVL8MAyeqtXrADdjxsKhBeKp9YB7R88THywUyjkEfov7trCn31F44YTtCi95ZpxNypBcPWoij8eESgmys8ztEMx",
  "key8": "2H7QVBNJkPQCWgq6Hu4VHpDmcvCBkkQusoStxBQke5gyQkeJ5gZhKrMVefF8ZxzaiGA7SroZYtmX8osGTctFWM59",
  "key9": "26N7kiCuvhuHGMEuwGrs3bVePUPttCn8JwsV8Pd3t5mh6a5bhiC7WrUSKQ1MbZuMaPv7q7UN51hK4FFbDDMA4bJe",
  "key10": "rUEnbNgPtvTrvL6UmDMPU5greHRGFPQrwNNUYskDQsaiDnb7LV5CEGbyoWLhQXG68RNYTLQ9hwiNUWTwtDVkfjK",
  "key11": "YAGLNUifqjR1GnqnKT9hbAYansUtC3FrTn1AcVXH6tWWKppheAYGmsgQRYKEHjDBKFy6i9D2omf2sVPVXTLNifQ",
  "key12": "5ccaGptyXQc5y9nyTMudnADsBmMBwGGC1jpxPruNcN1A6iv9WX9jvsx8ohRcT2BPHhXR38FEcztW3FmYVjRM6JfJ",
  "key13": "2XZ6pVGwNa2Ss1DUJb9mHVuTBYcvyZ3Hef7kXnAjAMSn6pGXRofM8t4MnD55giFAeyK9QZBsmb2JYFot8S5AqTvP",
  "key14": "tJnjibLNCw7gU6AqW7Jp6Mt1aE8i5HPBFbcM1NyqC529GMJLQzZXkgzYGR1vPVwWz2kdbDiUN46x2eaF8Ss65oT",
  "key15": "39JDQ1HaoQuh27xbok1wo1voWv4ZSdu7oJm5X8hVrKV3yHSaK4aVe4f6VhxviQ3Ai6nqi18Pf3yd674FsuZKNE9g",
  "key16": "3LDcUJ9DzxePerGsm9TFSqg9ipxrZDvv19pNkmXZ5i7yrjt6BLhmma4Bw9wZjhofcyjJV9TeNoKJELWZMrec6QFb",
  "key17": "2ihzZ6F6tdVSWQvUHNqpSP7YS9g7HoCNYg7PRzpSggD3WD2p8QKsU7QaRRuqcDh93waGqUxWBe3fAMmF9iC5H75Z",
  "key18": "2LZsWST6rC1RXvc7f7JYYEBhnC3bLht6uPQ5K3iztdexq1s8AkCGsepusULCaTwipSJsVudysaDEfKZgG2YDmCzE",
  "key19": "2Uzct81bX9B9GYidCHKvwbvE5H33CgCEXmZ29aCBcoAtvfNmTM52hQt6sWJLUbBG1gfiWV8ysEZCRgGqquwLsNGf",
  "key20": "5kGcGoZJTbbr5QHAAhfa9hSvFqgLoTsBM8mTBUYUHSJsMGeuviaSqGP9i7AALafPPyZ1FhRK7q5tFy69dSeAyCKY",
  "key21": "2o27oWcAg64dB1FHP1nodXHzE4ayDrEosu2jcV87N71HNMvwWwTR1JH3eD1DCMnauVbbEY9a9vy9YDae6fDZKNL6",
  "key22": "3NeCCojx98MzpPp4D69SJVUbPstraordCZE8SCWDeqHEHHFhu6w1y4VBkJVDP7xsU89xGnMBeRczZ2gZfqGDymDD",
  "key23": "2PwPxfMAf72bT5Ch2mjiZcSLToegqgm4QPhyAcU2XobXwq2LTDAuqDgyPxfWkHLV9q3tU5Ee4K3BVkyPhFBjMVkM",
  "key24": "fmu8eAHDHRfc8nF9oHRRHojfpHkHaTNqkRyoyjp7H7Cgeerp8Mm3BN7xL3MXuGfT94Pd2Yf3RodsDGx53ZvP8HX",
  "key25": "3ZsEi2gDJFTNSZqch9CwAF3Mbuukg7tcuWinUQbMk63oXVy69X3AuTsqTHoJtiE5Da15newWNyNWfy46KF4136aN",
  "key26": "rVjBx54rTRyKU761jtsN6ktg2ysgXZtHCFzy6mSSWNnagHQb6evwo7rm1Tw3n9nzf9gvzX37UfrsEn13vtCojBo",
  "key27": "2irECC2a1DzmJkzNgxEKBM3rXX1qgiWJqJdT8fGSfFHyZvv54HV7VFxrU8K6dP4duTzAKLjsZFBZ3XxwoMRnXTKd",
  "key28": "2DMZTLXUNLHmHoYBcNPRK1YEtoDU7bBTjwu6jpdTWkHXpv1Ev7TpyxSGXmKXFkTmdPNpYNmmsUXa5cw7QfCv7rH6",
  "key29": "2FjHoCbNo5evfpRem5pvy2kBURXUU8TGqmvVRMJMkRpvU8LQ7oiYHJMCp8cdwa5N3ypAc8S5c4YLWmunYF3651BN",
  "key30": "39KARUi8vNwBA8vJCzGow2qpPrKy79viBVcx2nJ3smKL69LdTofsz75ZY5e9CgNJbbzoWdGgRocr16NK9JpQXeSh",
  "key31": "2Bzmkc3ntpkhB4f87gm4K4QQdHN2We36vF3AW4eZXJvtYT4csyTBdpumBH1mZXxkXDd4ZSiDJtsn1iQKw66Z1YJE",
  "key32": "2i8t5GEhZoyGrLjGdJqjJQ8CphTumXmLjcuqaBzNJn59xwTsLnbcjU8Agn9ivssHiLk7CwffjM1mDVRyTcaUYtaa",
  "key33": "46rGnxwJf5aneZg87YdFzriXZon2emRYvmppD3L8diwLBQWRcejAgMQ61XKMb7zxSQUUbhtCPmc1rHXfYqALLMnn",
  "key34": "3uhdJqqJabAV6d5FZ9EmXcF1hgv9AWq2HyPrrR6cheJ5LwutxeNZMNb8rLxCxZCjqFcx5bAVhN1s4McNpcQp7qXt",
  "key35": "43zYBXppJCyMZodw5oGKUWFNFjbBypHfYDdYqY7qfzzHMsRChjPJrqK74qPnJdiF47Vq5qrrnUVQjM38T5RUcEWj",
  "key36": "4h7hSPMauAHPz226kRY126iHRpJwzHC7SNvCb1ZSBSWjw4WeAZA3Hn5HPJyVTrYZiGWNrD1SAdMnL8gQppMD4NB5",
  "key37": "4Y8xaCgsBAZD3EohHJDm1HYMPmEeAFyu4W7Xtdh255FcvY7Gyi1SHE7xaPcCdBfLaSXbhNZrrJQ7RCH8LQJ4rWXP",
  "key38": "5814nAXsqbeBow8LkddB9TGkW9LNP31xth2ZEDacDMmDUTVrKxdc1gNqqABEahZDfGmN9VxqJAaVni6ARDffC2wp",
  "key39": "5JDW7vjMtVBVuLFFKjtZhqq29usxhPSN7CJZVaN8r8xxKLJ5mfv3E68we3FCYu47mCjhmJQftZeBRQpfVzwQxYNH",
  "key40": "4i3qiDVfMYw58N4aR5ox1RK7gJTPWScA68QjNSg6VkdY2VGJV1neyu6xjxVDiAqVLzDiKYASkCEZjXzr9ZVRJW4N",
  "key41": "5djnD5xnJ2xJcdXZc4toSZaqFD7CqTZ14Hf6hx4DG7JcR5KYE6K1Z5nfxLg5h6svVAUn6jbXEwQjiAJXgiZPaNfj",
  "key42": "bZwpkiuvUPG3DeoqHhDkTYDEv29bjSzacmkx9oSmmAUavjdfqHdfDY3365JQ5yBsU3erHAgXcG4rqBeNJsVbd4e",
  "key43": "2FWRLHNLhGzsFM1Brm4i2niN5zBGXPQzFQMTtqkrtX47eTtosQjGanE1E3ipM3s2xYy6tsdxiAEtmNe5UHHjkquD",
  "key44": "5KYUJXuWSs6B9YrnC1zu51tggUicpM2mAo3pACdfu1fLd8VdJqVtNkSaLRvLcNAMFmSZXn5qEZaX13V5cDH4mYQ5",
  "key45": "5QNvRNG3J5b4g6C6kXy614R5va4JSGaUQF9gmFDGfkBNGYM15mF9STRybShKiL7SbXpevjP7z9oVviNQmRRU9XMC",
  "key46": "Y8b2e5Xv3u6qpm2FLSYgC5Fiz9nodThstfBhEQJxtYBJPS74jFwt6Z6w8P2MCwf6dpGebfyeXLQNjMfSB4L4px7",
  "key47": "66DmqBZsg3zsLsXjAypiAJ8F4AvLvRhkR6JSzTy7hpTouiXSJUspVZJKGKU6ox7apLtJUFB73aUngeYobxG22nRC",
  "key48": "2WRVZ7zW1rBNTXPSqjNG9RF2EFmswHCqrLUc6tqUD8Bhabv9JgY1aznNDvNXvEtU69SxGAgXTEvZy9UgDXaxDXBe",
  "key49": "7DQcp9VhzRNQyeD6bkWnyP9BEksonTtSq7CaVCzAUdUF5o6sDphYVamNYoX4qjBgFfsif7XWn2RLPDW7tHdskL4"
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
