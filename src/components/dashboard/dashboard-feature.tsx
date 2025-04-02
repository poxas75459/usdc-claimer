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
    "22QXDaFaRQ4HoKmE5pFrhuKc62dUyVwfQHjd8ZPCwAhzurP3VCWLkqdD3r2EEs9EUVrb3CLd2g3tJQS9WemGLyuz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53RTFfXtpHYziMGdScQNzep9mBj4kXYEwyyt1ywb7tV5d6XTNDAubEqFZB2LQCaHyTuV9bFG9r8mQoikoLnK3xYA",
  "key1": "41RRFMDU8ttafkZkxbDd2rNqUE17rkAQZ2TFNF1VMVpQMxLvqCDioYzZ6yEydFP1g92YwwaKVu65sGddQnuYfReK",
  "key2": "5JyLp9Dq4vdmv39enJj9pzKZwtJ5feEQsLHnDXAa8MvwYtXKMPekyxdDcixx9Xv2xRgPyT38o7Ypkv97YJ3LSsFM",
  "key3": "qjhFs2JcQD4GLcY81HstjERGe5T8kekzpdUStLuBd94u5gQFmvj4QYJtx8PzjNA4odrvAmHkrqVnkpzhBEiGrig",
  "key4": "CNQkJy1sFsahru4TnzAKpKU1u4nJjZ7AGo8Dbhc9pACPWvSh3XtFm8VFzRpS1hWczJGWHKoAb6n47AaAkX18d9D",
  "key5": "2RMMou9rEKnWdSHWuouarCYeb19L6U1WLYLBxGEEb3LawpGTmoTuPYZdMuiRMqRQBT1qqWDpDz3C3SrC1cTzMi4c",
  "key6": "33oGtE43Es4Sb8oK9wrR6AtEtmxDTKzjwt5evaqx95kqE5Q6DvnDNLfUwKjL2JzvYCBHCWJNgJcyXM6podanM3Sh",
  "key7": "2XWQhsZfjkH2yZhBP45CYy2C7fNaYHW1KcVnmAzyzcKxxDYdHgtZAmfmJtgYDfXyAXrvcTrZTfpCwZnFfCCYAaWG",
  "key8": "t12pFEJcwaZYCR856FJDZuTz5Lj1wyoH8rxBDsZnvWFL9yM6P49113PiGHbdFHhv8ssHESGaNZuy4rgsvMWA2B4",
  "key9": "5CHCXEzJ5xBVuExWjMPAFdocmnuC6drCni4SPpPUBAJn1uDDdc7eHNL8fmkjE4Pbzaur1VBsLDohZfGW3erFFTB5",
  "key10": "2BrxUrMS4ULsnK41YiS3y5imPMPfBgx7gd2AFTJkiF1BRcatHbSmdtBW7hEkx9qWhMebXMYMb9zbAUPtWjtj56En",
  "key11": "b8EixUVqThjTJXHfQPxRbRRRULhizzaXcUvVkxcSYdDERw1VnXcYxN5mwmLSWNNR5BCkzeMffmoeu6sfxM6KvDn",
  "key12": "8G6ePMsBDaVYJTS6gxdocYSzGk3cLzcks1CTe19DYDvLdNH7P276umHz28L9vzroDXAKMJp5WjrWxxym1R3bu5J",
  "key13": "5CWmvAAJ5KccbkmWQgD5Xd3CGhL9VuLQsjGiMUFTQq8D7agY3YJrWHJKWv1a73UFetQVaWAW2dxuF6rxuoNc6fm9",
  "key14": "6zknmXvvFpo1HzVZjFjQtJXXwK4VrdYhHiA8qLiXyNBWukW21H89izBDtHmHAWzPVQTPpYXjmtx7cAHiYHDBPFN",
  "key15": "4DTor9F2SzSiUmkL78rSN3LNBFAr4Ei3bz56w8sL7Xoo22c1GhiwwVVMDWk8UVma5heqDZegF7b7yQCtxJgHzrMe",
  "key16": "32ZATsKbXWGw25fw4iCD2ZrRasWKtyHzLWnrsra1acbhdqRYnVat4EFDPcf6RwJo8kMyURCXB4hNd1LqVYjfCT6H",
  "key17": "4zdGKXxasVnaxLMsFq1VRFmeWk82UqNpPSRvr8b4gWs4YKVs33MNrt317Nhf4n4Pf7jsbcKKaxBdKpfxQiLN5tWN",
  "key18": "MTFE8RgdMGHofXLPkCFYUi8q7xLQdbAoDZ9xnvN3V7gH9ZxZEiN5owjTz62rCpnsNsnQkoQ41o6HPqEC4USroAa",
  "key19": "5M5ztfDA3s8E55FRKGnwgZj3Z9NCHyUDszj7mMcYzScGJNNNLew7LSGai9ihkaAtRYQfKs52HNCsma43oTB9bcD5",
  "key20": "5QdPBKuuUE8fuTuyP7VwTfSDzKkL3vqqLXSRhMTFKxoBaTAKbsqBCCpzwUfYiAtn3baXpLgkxkwUHpXf3URXtokb",
  "key21": "2srFK1vXurNC2wAEY72qPanhAURPJqiUDZpfmp37gUjE1G599uGDfPmdDk5ZMdh4nunRswwDDoE3ydRNpgX1H4VJ",
  "key22": "3WTCTkXvHMsZydEkcv9qepwjY6dQKykXDngTkganT6Szr5f74JP4fmB2d3px3NcE7KjyMndQxPk4nVphRpV4myVc",
  "key23": "54iydeF2nhkKom4M6sMBxCBEZRakv7BP2ZTYY6XedgE6JP4UtxhTE46eYMBvMzmV8hkY6ui85NTNvETY1scXxw8X",
  "key24": "2hYEE6gHAkaqoV3gtCB3LRWkVhP54umjFn24FS8FdS2HWcj3s7CTavMsUzXsqhDcNTTHJRFT9SHWN9pkoLvKg6Nv",
  "key25": "4tZYxvd4qeGZLautL2MWuRxCscJLpm9KHim4moeifKXQpMZXqdTtnnTSuRYNtTX9E5y3FbovUiQmfR69MVFKob84",
  "key26": "5UiPVpAPfQcZ6newRZBVvvhDs4XMXgSSi9n4LbEreR43rU2tR1fJsYCDniUga7gHYcSqzgFmDG3sBBFJ4ho91G2F",
  "key27": "3YyEdb54sqvwQ1RvnV7za13wp6s325L9g7s6W43xoMwcVxLaK9KPqhez3MPLr8FPdhftRKwt14BFLRZPUJEZFDMY",
  "key28": "5UG8B3aFsp4rEndrVL9rXM7BxqMBDgYo1K3riaKU3o9BQmwnLYYdDPQxBMLM1m4Fkqy338hUoHgYSTRNLYKks4Lh",
  "key29": "u37nkQRM41FDcTNHb76oGfzF3tvP3CpdBxfYgnWma4X6ehfvccUh2qWphvkMyJFqA5XDpDDegaH6pJr5UvYSefv",
  "key30": "44fSZqPhsgGRZfMf2qrytypXML3beksCTCaJRQNB8Kug3VT4vEMkfK7wSohci1Ra6J95DAocFNvGUReJmjRHhfPR",
  "key31": "4ukE7X2rLx9Cz9R5kkxeY4vQv1EfiUid5RiLT6VjsTpnv9gH9BYtRCsibXvL8sxQFVVatFsGGi87Nh77roeTDGp7",
  "key32": "ad6pTXhLRfpYcGYoD17rvvN2WMjfqa7tRAaLxhxTVJc6DqFgyK3XwTrXUaoeBAWHFKqjvvd6Wxhf6bD2CpiwfE8",
  "key33": "2fUhBoaa81yPfVqTUnE4sd2EoUoJyYrLpqP1caR69d7jFNH1ruyTCCS34r7UUnVSTsJgAkSdpuZJSe7wxRX3d1a",
  "key34": "2EPWpkryjzMYX4KP3m8Wmic9pQvPvP61Gdz6UtTAFWsrV8KA9XfqmLQ3DTn6rPnYvZ3jpPu3gLWbsZfyA27ayKZ",
  "key35": "2V3sAnJzes1Davv3SDh6z39fwZVxUF5PtRymnyzzjtXEWaaKuAzFRpp2HPLxSDzrUJYLMDC2nVvSLpdDnUUa8HnJ",
  "key36": "5d2HEDpqRN7PsqBUu3tNqVDe7T8Z2MP9WVx1FXCr48gn3o94N28L6geNx1RKzA7WA34JLDqXf5Roqdvn8p2NoEWA",
  "key37": "5vHYCKbNx8FbUfPjaX8mCbduJsM19hBs3gHzPA4KSfUHLy2n3JY8YVb6SjFSwkENU7fMJEGviYX6aDAWC7oc57ea",
  "key38": "52uGh38AGz2DRvcyvtsJATyZQwUja4PCbPjnHxxGda9e6xJJKQtjMnd68aFuozvFyNdJWejsEhGmbb7uHEK5uJqt",
  "key39": "5zavNAK3DheqhihdsxfeZZNeDs7brRckGBDLeoRMoG1CJBHqN2QJXazvzpTnRCTYZ3FoGwVrSAKYf7qCSL1ykghX",
  "key40": "3u9V6pN3XK9Fj12GeYH7Ji7HJSUyQzmmhg9vbjKYhR9u1LFe8c9oWyLggv7MBpNxWA3Z5HA4fDH7J8zhJFEo2vYV",
  "key41": "4aiqpUMGU4cbVjGVR6iisSjt1RATUwyVu3m7FtN9mEEJX2yfJELLjRwoy7rVbYcxaihiX7kogeHBvtSUhURwfcio",
  "key42": "2SHv7uNHg88c1Wvs9Cswz3qepWBeYHeAYQkCYmQz74o9BBnmsTRVRbivjWgCKo5R3LoQoNJ1TstZETfx5mmJo5Wr",
  "key43": "hJNsyCkTgmPypLZb6yug4AkbAXm2ufoE1ZBSmu1SR3iMGpKYAWN9J4VRm32CyTy2HWcE2Yahy9UMPDxtZCMo6mV",
  "key44": "54NcXDN81jwpCa9Sx7Cy4Q8DJD6WeykTNkdibFGE2uTgtDft1BMi8rveYV5WuXDJZe3JbwGe8tc8MiDbKsXeRCAQ",
  "key45": "2WDwUeZAhHuW4Le2zkvtYXnpyfSzWpQJodDqeSoRKZSMuR8LWTEgXqo7nVyaitRrafhpFFj6vXYGrtR4xLYSWyh",
  "key46": "2Po65rjyuAWWCBxKJuDXyfaULSqHHfaGygC5s4xXBDyAuZYjRGKnVPCtfnNgLhJ1HUCyVcV7aJnPefDgGZK4pamc",
  "key47": "4uNdLeBjupmCWJ8PrA3FaumhKtFLb6v53ahZ99jDQijsZYcEFsawwwP8V235scnb7kcjV1UWDovKmjGqU74dn9KR",
  "key48": "z2qhe5V3azPvxd1QsrN2VpWEMezn7myDguVCebnFWt5fQADeAmTybShpxMbAPAqG4a11xFDvYRv2uWKi8L93oXV"
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
