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
    "2PDzwG5mzCNGJQqaK4QUPpp9kLxh9mTAvdmLtN31e9BQWdfWUhxnP11bJB34DEbhxkJn4V8pMrG8nEC1GFKXngGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PyeuabUt3n89FwMr5fCAvPKDvLE1FdyC4Wp2Mz1ptgJvXB34AKq58uAGbhhxvsq14MjZBpkrbUYtpMcQcRJifRc",
  "key1": "5yo2Fw2jyE7BP9xrJEsPUz4ZHmKy8oStW2W8C796wtMorKb6CAHBUwbHKrWaimqTEJxUHS7b1yTm6ixyeR14XMHt",
  "key2": "5CJfjNR2Z3VvBHdvxU4Mxobojr4KyQMvaJjThgggUKCu7aW3MYeoFHwUtveDe9MritNt1eT3pAAoC6ihWNW1FsPx",
  "key3": "pHoNDanz2WFcpWfV1g4G2bjmw3ggEgwSNGD33prgoW8iuneczvo5Vd51iLeoSKX9eRcMtT7v8BB8CwmAVMosxSp",
  "key4": "HLgfwVdxsuvrY8QnLpDRpdkznxX14pEyM8CnjbMmwrfYavnY7E5fxotsqvVXCdvBudgUtYWMb6zE8FXcn9TjHBC",
  "key5": "4jMDD4QUU82WN6zQYLA3PjcdUnVm1zrHJyvA4bFvdsQvDE9LUjC1LXRpgrhfLpEzr5fB5g9EYXQgYn9SK3tXum1r",
  "key6": "2DuiKLN6356tgErAKm4d1ZGRUqCT5HQzvW7srAx6MSQ5a69EZaTTVN9BLSXMPP3v7weRUxRS7DWWe3YXwJ9k3Cm5",
  "key7": "5mWGcnhJ5T7bm7zPxDehEcY85oh4UqtH6Moo23UnYG1Rd7RNERr7Np23MdpjeH2uSF9qmXK7GqrU4bwx8UEqjXvX",
  "key8": "3fnzFHLUb8G9n2WVofHkHbboR9Ym3Px9qEzB1biLif41KiLGJywjVh17vmZtq7jJ2aCTFtNKBUYnSRbHYoSbs5mm",
  "key9": "5XgfxCdzPzHkVfxZ3Sq4AEACjbqAwVtC5mPYpiidjXWzVaLuAn7LfxENoMN2sUKSqVYZ3m177m9QaThcGvayk2TS",
  "key10": "Y13n9a8bNaVWK6rxkpmGzLYhjyHWCoTbfsWcMMgRPZT4NYp3uF8qckyoiJ2dknKNtQzpyU2dpgr5ebQ9zcYV9FG",
  "key11": "4TvqCahmzCVSY5c8swLG97Wj65YEh4N7F4sjQvj1UBJen8T7bEM1P5FwcZBFxPWSoczhwC1QGKHDTXke1eXnNVZV",
  "key12": "bvpzGCipfiVYBnwwJMuGwPEZhoC9TbrKtWZQvuNim9hmrpYCSXJvegFetAT1RLvuU6KTDVRpzCLL4ntundkCeiJ",
  "key13": "2dbAa8STaYpMnM85WEMxdyQs3r4EsHr72JEJLyg8S7SUhHAPwUdgDQegy1xMm7mgbnRkDyuAXp3sCbhU1RTFTnEt",
  "key14": "2xuwK3YVvmW18bxEratw4NxsXK67xxxAoCGTuHNFNbGaGJ5TwojiLfN234cPkkidiUdAeavRbfERVDR24k1uiBXH",
  "key15": "2ag4ZykxH948N6evCfvUiPtUPWoWXWtf2QwmMZqipKVZBuAWT7nXdtArURFU1aumQysPXDDBDAbxVvcCzWVUDEWN",
  "key16": "3PYP2x2UffHNur5fSdP2cbhLVg4ao5noiPwdGDA9oQZpkoam4PabnW6taQqXATV7RtyfopikXVmbTPXjW6RPewCq",
  "key17": "4bo4FV4otaokHW4T3piiCdDuE415PWsuUf7BAyoTpDe5gki8eukj4gJ92GmgNpvnCX85ADZtvtzE3gMXWAf9CniY",
  "key18": "tZBG1tZeUTykQ9wgMbWRZ3uW61d3QehGHqhsyN87QTLsWPzFUG7ZdcLW4RQ8E9JtQ2aw7KLRMay95Cb5h9zD3gN",
  "key19": "38RiRRy1ZcvkGJwHajxwxhXkuRUvvq4MQCzo59X8SmALxQwUdurhfwgFY5eMKJ7nZx2fA4W7fncZz4Ljed53ZF9D",
  "key20": "4GqedBxKfEpa3FXuMPP5JbhP82csuBrEY9VYrnA7HYjcGCpLavGvFbSSkq43ARb6dvzaCdsjcQ13MVm1DjDsuZgX",
  "key21": "3wV3bzm3ucrqeDmgEUPHQA9yFwoU4KDPRwGt3PxBVaUqJTbupiKtBFCtAV2H34C6D87TdcgPUvmg6sqGXpXejUtx",
  "key22": "4sCytiX1VtMgiARcvmsxASzK9ALsv9PjM23akgZp36PuSLhYg9nzP2HayqvpDXcnLAmbraE4B8V6auA6dFhQJ4DV",
  "key23": "4Jf2DG4sLrN4cU5GZwox9fhHWnKgXukUi2hXq1bVT9ojWxfzb3NQ1hkY8EqmX3qcaSUgQoUXzqUc7zftP5f6dmVY",
  "key24": "4NQxoNmkQkQyTXJNoD85vW7pR25sMzKC5SKob1n7KEB39geCA3Fzk8yMaKLfoJcKfSmX3XEoZzfRLzjqiZkzTCSM",
  "key25": "3TYM7JZxcRUWkMyQc7YV39V2LYtmRKAjTFfXKeNjqnXghZBZBhJDNca3PvQbPnPSdxdiEatjKhbuLMGMLzYbDgvV",
  "key26": "26z6MQYHcL4EDh9yfxgDVQreNcUXSVV7cQ5noDQyXhUnKzivTAJMZ6SAtejCHghYkzqz2T2smQ4gvXT3bR5HyXEC",
  "key27": "FSvP5cJvZD6Qxx51jXkKdCb1ePa7SCTpQviPCPnDBDLeLXxU3oTMhHM5D1RVgT2Kq69nQsraHmsw3faGUVzHJxY",
  "key28": "2Cxs8Kw6o7bpXT9VLpfFtPhuVS9Pw3SgWywVJS4ScHbhw5GYbPb3FcRwexqXxw4ZFEtfx5dzV161f66yX1VAGcs2",
  "key29": "4LWrSMhkQ1fPbLSUDrFpQofYNWYPVX56iA4sab642RheSDV5BWb6qc9TYX4tR4sRyLPkhxLf6HLf7xoD9LQoHi92",
  "key30": "2AJLjDQFs7v8eBenvd31BkLMDfcmNp2FjBLP2CzqkgqbA4WK69Bm4KsaP5EMqS4Y4bXk87MjhgWqCq5ZymknAaYa",
  "key31": "5nZrH57nEdc1Ayk28vPNBKMWdhFGv6PDDxRKtgpvemjtRumUBMD2CmNzvHw3EQqCHn15SuyDitUgxeNVMu4jCwyq",
  "key32": "391HqaiTji9WqNyTo3JvGfftJrfvRkcqeHDyzZ95kL2CUf3JR2jeSPFCYqKbghiVA9LL6LxYJNZx6kkzGVgvX23N",
  "key33": "5DmqpSgjCPxZZsDpuJVDWnvXoV9HvDsxRVYgMHd1z1j5senHfXUj77gSLuDyUwMjM6PzSFMFQ1g3B7S8N3WtUnWy",
  "key34": "2icSnrxYTvEtJwhoEJmZbWmBzVEtQzF37VX3J4TSNGPf9YCKPWGGnsXhdmAhU84WNtR8ApDnL9Uszs55UQUsHQtY",
  "key35": "2d2zqhcLb27iqXcygftZmskvfyrCtxr6prQTpMGuW2523MBMbL35ZxU5Nn2vDX4j1Y41UzDHRriminPa2AEvzrGG",
  "key36": "23vHv7kYyPnWEpEBAN9d6hhSVtXJfRbwi1fa9BNWysCpdL3xLkbKDFMpFj97FSpXWFVLUnsRfocXJcbrFXyUKABm",
  "key37": "5Sazwc7hH59hFE4t5mVkRk5SB3oB9P43asfteuy2oHmLJeZWv7dFZDe1S2D9q7z6y7HNy1utZ7ayDcbtMDNUpLkg",
  "key38": "4A4Y9nM3uqWoWDjFumkZdmHdjPapUVdtmV93BBnxp8bNjFKhW2HzA6aNxdis8ReMZVKQYVdjuoqBAs6iRQSSEMab",
  "key39": "3kSVRnTgfk8Lx5Bz58z9D9GY8b2rCBNNYvTqRzoF1Thq3w7qdmCsec5b45CRAqnJHbEDcQDDJbKP4gKmiFhha362",
  "key40": "4sheLnqjFWmnT5i6qcJt7GmNP2h4wH9Qr6Xa77xbrhpviHD36ha8cLxoHfn7QdExDDTRqnbSYa2aJ7VR4DhZ9WJr",
  "key41": "DBCpqWzgJ8eL6z2E3gvcYCERYx5Pj9Y4Pe6paGBbqRtFqgQSKt8bRyRFor2zxEydF8KrPbY9XzGzJHk4USSJMZt",
  "key42": "25j9nmvnJQ4MyQ7oZaa3ZahsX62Eo7JYfXCC3ibNPutkdiX6Ljd9Hi3pT1GjgUhPRap8h5x2Fxqa4UH4mEGSHjEy",
  "key43": "4Kb3Em3rM54fy7i7yUVz3udqhwcr4EXWq88s2N9VSMQbY5xDgNAxo5p5tSEffkXjCzBPn3dWgrgwzTsfXmfFPLAH",
  "key44": "3uGbaJ8xCrLit2vmHM4yuyWxpcBi49choZon8Yq4k3CBeSKF8GUhAj7tUD6jGLbqmCFCrwJeDBwDuvqcnf9A5uqc",
  "key45": "3ai1g3HBA7XqXMGB5GNKejgrDYbU7bS2wjrb9jgVi6XdYWSPGL8wu9jTrADV1rmRu6V2EQ4Vcbaai9iRjGbcpGUW",
  "key46": "53c3taXvC4y7dt4egUFP65Sdp5jC1LJ3JB9s7c5mPZ63pbtrepH8spAfUqFR7jyqZSaj9fZyXwKNaQYbACtASeAZ",
  "key47": "uC1dmG3nAoeQrgE8gC4kj6JpmCcNqt9DkzoHPzYsuWKzZnmWAjn3eQgi7a4AzRdqEPLgdSiU95j3Wd2oJXPANHB",
  "key48": "5KrQKCnwm5vq8TvLiPkKfb1gUTxDtpj7WZxDx8X8sDLButi2akNGNZjhjmjvzxwwWTKMPXE8ACSLSub52KZSKzYP"
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
