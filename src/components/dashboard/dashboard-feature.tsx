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
    "3W48MTDc584UbsJLbKxXqojHFXqPn6mWT95Cg5huXVXvZXChuJsT2J6W8nEahmQAezprnHeJMAxGiic4hE1wj7CZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SMK6cXbbnkSGkVMSPTq6iJ7F5G1GKVQEejgE8TXwJYdUAzwQjtXndtzgF4TwBXvBBC2GKVducis8L1tiXaDueyo",
  "key1": "5PqdGnp58g9LzgrAjfdKU5wLp3dyfDkBqkoS2tKyEXtdnNt7HWZaQhpEzRQNZ1W7JU8GvyGJnXu7H3egXHsLmLYA",
  "key2": "2DaG7BeekNX7uxeXEtE6wQEonByRhCbAR6L7uwtnF4Q3kvGiiYK5hcW6oi6CqNyBdrYackA2yznPF3QsRUkNzG6F",
  "key3": "ecbMGPj4kKrMY7GVAnjSfCJKeYqTeC41gcVT2CkyKj85XP3p6HyER4fDG2MH86hj92eRKw7GHYm4ThCt4tBop45",
  "key4": "2LL7jJ5MSkFct6cP5C81yra8yHwCKPhw71wDWeQNNk1Z3kEQ8YpdE266voaLZsnj1dsdpRiKGGN7wvoMDM51hVGC",
  "key5": "amPz7TXuLoZbzLifaUUVmq1Nvgvfu1fGFL4Nh4YnYjypmPxT1cvwKU7uUhxxYGR1xNKw2y65GhFA676XNh4r5eY",
  "key6": "4XWK8YTCLT7cPqhEKhYtNHYjPvLD59Kf5bAwwU4txcxzFSG7wNNAgxjnQHbfj29RgUjC9Q1xZZ9HCzt7GHYParxx",
  "key7": "gr7rU2AWsYJzGxoDe5GhYqZEdY3fPVgzNAnPDjNthy6JgkkQEVsB6T2x5x7WjzuUiSig1fmhWgaYVfcHrA7bKCd",
  "key8": "5oWKD6xvWYA3uFnrTAzkXAs9oB8SYEE75h2yu34qbsPuCSaGkEmhyRreriz3tu3PWZ2Af2LUGFpgqyvkNqRxs8Su",
  "key9": "2oe8WXQN2VhgxkRcJMRvAUi9FtfTKSZRVkE2mMEHXkNk5zmKQ2V5TyCqqavNBn8tqXbB1o5kf95ijCWKruprPz23",
  "key10": "2TAE24e3yg3tKLUFF6CP8UHFMZAWjSjCftRmyjTT8dDz2n4Z4ZFkrYmKCyokWbXTnEuVLXp1LjjxCWqJHFkR1h1f",
  "key11": "66jr53f5q1ZJLnjzhWFwGs3trk99S62bnxjD9QZNmyMLYArpJ8v5CDwyavpRBBFAp3WunDbAJ6D7sMvyLRNjsM4B",
  "key12": "2rbG2LZrNUPYmjfERECEo47Lxysjz8vke2K7Djj7vN1ifPT8FvzrRYRV87oCaB2nndmEEZvamet7mJCUc9dhM57g",
  "key13": "3YvJc7Zy3RGKhAVUcFCkE7f5Foff7sU64cRy8QRqi89qq6kNUgjZzf5nTkDypZoVeJLFyRyGjiNnNRmmrDShYnXR",
  "key14": "1SpnSm9kqPKRzfGWG6qcSmfiev7AbRM1E2AfQi8DMADv1SBGjEpeiExxJQdmUJiFm6c9fCYSpeXdugUsw1djqBU",
  "key15": "2w2YhBLhG7cPXNm1wNNWRZosbezvkGqqF3kB3r6dndaWNdXSmVStsaHPbpcazqNcRGs6xG41RwC8kF7MyhqJh3YD",
  "key16": "5vGd9qGSteGH6iYtVxG7dbQNeuNVpTpKJVGDdF7GV4WgqWRQ7WBsJGVaY4ehkJvks3bd4WTXR2FfnDrAE85DmeAq",
  "key17": "2mukT4FZFC66mkFd8adJBQ4FF36HzXsFjtVvbvXASUHxL8WYki9Eu6c55Rt1Ld8k4oMGqnAk8iBhFW3SvbkgpHQK",
  "key18": "pAYW7RnogVrVyFZvaX9gPdv2gGs6QRpFn3bK7LHW1tAuLtB3mUfo6jvQ9nLzzNeiaHS7ynvDTFhtEMSz1pUTxPd",
  "key19": "3AKy3cjvmroyYv7HLMC5hjiryC44TWdmwsJCK7zrhHt6jCtN9zyFNqdVoVWidxTTjcRbfGnCByCfCTAQD9SyDZ7A",
  "key20": "4sRX28i3dVpAXQteH4dTSpQndbZYHttZjyggNZGsfGeoQpHUsgYDqeSXTiqCy6z2dqTTgfBZKDbfw7Lwa4A5Ep9L",
  "key21": "nRH2GtHTjaAt73rxE2EMg7nRzvHnmRxAYJPnJBBWt4eoY45RqUqC7MeqZ8hkVABanFBYFwGdGwPdPic9aK3FHP4",
  "key22": "2hsWjHEeHQUoHmAi4LgsG1mwYp5obW9zTKr16ZJgU65224ditKFkDjb2HmbiGGbtgBTz3wFem8ZxtDE28d7P9tyg",
  "key23": "4rzyyc5zSD9YKvfSPWEfRTukDMdMLkASiSBo8BgyM8tdonduXzKsoRyfRkibTbB2vNXXYGjkqhFvkP9vCFkHr9Sm",
  "key24": "362Uoz7JEksTZJtd1S5zavhPDeA8mi5DTyTHfM3pKi7wEmyXnaPGQ9uu7yUrcFAes3URwL47DnDGXatoPC8d7hT8",
  "key25": "2TNDaVjczWF3owmuV4RneWdPAWzYAFNFQgKNK43xyBDvVX8bK5Wnmx4xCn3oekARacvx2fwbSRVJQkqopumdSUjf",
  "key26": "TCE3sJ42H9y97cF4i3gYdpVsAAkWTYpdMLerCaQiej5DzXxFbmiVznhskrQpAs87xNofS4NZXLzYFtfRjKyYQ27",
  "key27": "45EDSLdo4yPVvPZA18YYBkwWaog368vFNr5zSWiNUVoTtrtxN5bmnfho6LvU73nehLhfHv3LDSd1dvkqzcKzQ3BU",
  "key28": "4LT6nrSPH2GS4UXEoKpzLY3cira1qBUn2RqeovD4bJ8PpivgcpbEjKGRy5zCxajMJuWSc9vQVWaK1J6231AQA1mP",
  "key29": "4XVaEz4wNQS1PBmKdyFxqeqbwYwTv7xzAF8GSrQKjwApGJ1uiLLJiNB3ZSs3gWZjhdZHXvDeCcakFgPZ9eGe2Bfa",
  "key30": "syTGuCVw6pVrqKMtCXjqM6LKB9gf1CofhRek2fZRQcBtG5rgEX24CDT3Yujr7CEtRsjtcWTW4Ls3vZFYjq9d4Rt",
  "key31": "4zzoKZGUDSTS6fVhT8a3WpgcFHRCr1G1hgsgFNi1PSMrq63HWYs3LD5ipXfuSQrKMgLbaJbtGUsSLEGfDzttkmhF",
  "key32": "3mTSiya1fzTyTJXT3VieAu9qVgKPARNuDpBNM5tiHHjRxxfA4DAt2EbEW35iU1829yqKkpchqHRVhhhdmfHgHA1U",
  "key33": "4J6DHGUH1zKWj2oANgroQsXGSMwLPgBwMLvinaTmBJbwiSPp36fyF9mwcS7L9p33UGb4Cj6fHjvBEdLxDjC9HV9V",
  "key34": "FbunZsumgNeadLpSSEC4HbLorHKh1LV6Mb18YjTeTLLvUv4UWkDUDtNsUfrSSCJjeLnxY915pYvxknXbatrFKme",
  "key35": "Bc5fknuM57btG7vjxhB8MzWiajKNEX2dN6VGQLxFtu1fknRmHa5c1UPRGRDkLY74HXPb4mGUDSmoUZcx41i8kqY",
  "key36": "67qcLCAYGQdbkaSEtYbeVSKN1cAE6TyY3JPuk4srAp1g724SvPeSxxUdZABbrX3XBibLP1D3mYdq8wAF98XDve4q",
  "key37": "35swKCF2ZFFqbX9ZUb8Smu2YLNRV3pGwNtPKZVNob8PtrPE8tWBKL5uyP4Pzdr86sVcvoyaN848kvxCoVHrkvBYb",
  "key38": "3KyVstysTeXLSuEGZir8pWGqGKtBAyvezXhqYCPhBUn5iacaGJoW6NfgzTc9aMtchsKECtGnaRC5KDMico5rH2FQ",
  "key39": "2q9JfiRV99oZbQgSj7qZpCQzW84GuTx8F2ppK8yLNer4W9FqRRrW7LWk3WZa6Jw5QJLwQhZ4wpGDhMgBunZzwxr6",
  "key40": "4QybFjGoZjEuxBXxXNYS9grv89NhBrx4o5n8VQYB4237ApKoqihZbKJLGN1H4a3FKJwV6Wp6SnocXiivrvR5VTFX",
  "key41": "3wE1CbxWhprrNj24NK3v4VxakVfdtSSA84kPD9N3DZTgwLW3cS8ZUttSR8yLGGGEcFDbiBD7s4TWEVyEK5UiimME",
  "key42": "43GizZfZ1RrwZ44Q1KNCp6FwbedY9FDPQyKZVU3irFix6PHA6eBTfY1i2kq1SLpgVk6ABdsRgaMmew59cpCRrRgw",
  "key43": "5fjgcucxtEjGKD9f3xjh6KCAVWapvbTNUTwvdnqqZJNSqesAF5pqXMobNx2VEQDDVoN8EYCc2UNWNmsyefVA71tm",
  "key44": "oVkqcnHkkxY6dBNPvEbtBUogQkgYY5nyn35zS1azd6YnfymeLDyZhQswAnDjPWDrtZxcb7LgxU59yuiVKqYTZMu",
  "key45": "24P7dSCgMRmbGmWvaQRwMibZRxoS5aDCrSBZRNU7WMSHtRusA3nmcRGm6VQAdM4HMVZt4vtHSsXKqhJYYC26ddDR",
  "key46": "64M6bcBwUCjkuAPfmXraKc2ZUbFKdCwijFG4TVMagfPsYFgUfZESzAzG1U14LzHZt3Af9pPD5rFXCXbyA1P9Pdx7",
  "key47": "5J8pESo6UEB6p6LQ4DpU2wRiNJPpeB5AvDtmxhFNJMKqTmzwiULRWfsuDKSyw5pxvN4jjqDFhS6KfAmhkETDvvF2",
  "key48": "3wJqLrELsZfy9B4F5uXcBJprQHM7ohAD3Ms2ybXTVLGSYsfT85z7wLquhW4Rkp7n3kj2eC6nY6CevN1GR4Kpx8cz",
  "key49": "5f6TQiWKHmwutvkPnbDMVSmkTUnRyoLLToD8J2L3otJ7aA6353pmhR4ZHvNacY3cikHpb8M3HyDBwEuAYza93uUF"
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
