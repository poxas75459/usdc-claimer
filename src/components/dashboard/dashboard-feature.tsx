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
    "DXLkuERFyECzabSDncz84tnMMiSaHuRb8qiW1Ek12TBJzdedRqJSr1yMkZ6p3FEswVMfkB2m1mBroyztKArp71j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C6jfHKY2K4aW7kQ8oGQxyaigzaS8jBHhL5pPRUSSfHj59peyJTRoWkr2YPpBMAcqYJr3D28H1gnz89sWZwxvaTq",
  "key1": "2drfyb2nZC8ZFbc2Np6dfBVUAiD6isA3VAG7KSCR93mJee6UNW6pkzFp2YDTNvwRyHec2t2eS6LfXjGqZSvGk6WU",
  "key2": "2PsbPS1YWc6UEKJmY2RHq63RWsBeL26aPLmwTfV4teUwu5C5UKPfT6Xw4LLtVr1EgnDNWGrqLqrU6JscjMpReg22",
  "key3": "4qaR2AtuaMQP5mkGqAJSdTDfw6N6waTJmREVkvi22kt5jCg47djFmfsiKwHfeHFhwd6Ug6d13VETxwfcTwCjRFyQ",
  "key4": "5CbfxuVkAHnQvFP22eM3affhjM2frDd3iB6NjmYJEjiNvhzsFQeZfd4FQnn51vHo9maaaJkFizM2LYDvapVer5Uj",
  "key5": "cFV5uZ5Y555m8h9cmNLF4WPVgfi5uE1RA7LL1DkQKqV1wyLhB8oy6m5Z793Cr2biBAFnzp4g1CoYgCcu26zzAy9",
  "key6": "4CX3LjpKG1avg4qdGLNvztNSKdZnKVgEjEgq8f9EdS121d39ygZ1hbqcW3RsatUXfxkgMgmSfeiemHETPZtTYuvP",
  "key7": "5rHYGRZ9ZdfLoWobQMX9BXHCKKosPzcQdwC2Ru9SirP5MpWuaezgTgMfSq54Yj2FcRxMkmonAo8B6kq27RdXWL3n",
  "key8": "gXv4J3gXzr52H8aaaXpUfyuiYjL3ET2hSMkj28yQMQsAdQQsZhzrf62Nuug4NMn18EGx2kYHNyGiUi9kZXutmZn",
  "key9": "5R98jDDaHK7JNwSExhUwXq8hig1c5mCGPcBiskt2CWGZrLYJu3itJnBZ36ta2VW2aAs5ibfSbio6KWH9CutPViau",
  "key10": "yFayvmWiNT3G1qxsUSNNtwPV91Cni9vPSvGYM7kRctJPCGPbdciosyZv5V83e7BuCiyQKVFuxmauDbLdHEV3mpf",
  "key11": "2Qvc2rynkQ3J5nJgPZEmSUVpegHcpMoUzNHehEsk4udpuLfPkZtzNYo8mu1yRHVU4p1r3YY2oKFqn9HGWBDvH5wp",
  "key12": "4smQD8sFExAiKdrcm8h9q7YeWr2Ad8KGXNYUjjZMFXHmsutV4icd89YZXGPRPS8e76Usgy1MbG88ax6u3S1FSgyz",
  "key13": "32AQ1U8TVhZizek3MkshN4oQ7Kz7sTWEms14DhPqS2TGjXa6fdutrdTuG6zKbJMYn3siSoibnpdrpPxvA6iy7Ckn",
  "key14": "5SbJgZi387MmoR8xQHmBwcvfewosAsw1CzuJc5KAGbpfw2GHeHZjD4GzEKQjYjntP3KTWUW3QTqU88Zv3ARDBMWe",
  "key15": "4PJSWHrfurBKx94sTep5yNy2R2JLnWkuHP1iwaUUofWgc6oZbtm6KSpFgM2EJ9pcDox4FDV3111g5K7tfaNab7Xk",
  "key16": "XKXAPNPM8vi11sy1i5Nca3RseHcr9Bvf2ui6aPsJHvt1tyVEeAkLkDwRJ6VSmPQp22yco4qiBorPmoy6NE961DT",
  "key17": "AJkkJQ6x5n1HjhX5oMEtUofgUFEbUoc465pNpreznfibYJ58nYSgKgym3JWxtQBh2UdRTauoUC5VrVs3TX2QLXJ",
  "key18": "3QhPUFbiiAjpNNMDfpMN8zuFbg8BZR6jAn4zBta7HNLNSjWagdqayRynZ24rkA5GuUbMVXN4sodXnP3zWsEgGLWL",
  "key19": "5E4gdyxw7EYn3eg4f9iQBXPRLoSv5i9xtZyCtdgtoTrbM24rgwKiry7cfPhkrF3zrdJVSCb3Wbe7z4hAdwkapJRR",
  "key20": "2B74ghV8GsjcyzPMA622snHKbSxzQbLqJCJaFHRryiZ41Ww7xZCSAGRf1RFSJdC1Dz9EtBfS2DBEeCiDM9CPA4NR",
  "key21": "4Ky73nAxk3zW5Q6QQS3WyV8kuxz2MWrVYQfEWGKDfi7zvxYtKFLCxHJ4bLdiH8k7qbHPJ1oQcKJkuCAA61yET34K",
  "key22": "3F2ZaYkbK8vuLY749v8owLaF2Bi8Vb7rCnaAPVN6AdsC8nTPQmLgST6CrQb1YKLYPBExMXL2YyisWoaNTaxFBbDQ",
  "key23": "3siTPxmoePQ9sBdHf4Qy8wZr9vYgHEzwMP511XaoHk1KX8zKpm1EXQBeoR3oMxWeuwxnQ1HcW5dxNyUirVbmDA6o",
  "key24": "2KVf9nwTsLRY6du8VDP1Mij6knSBXaQrP7XWUoJyEN7p8CS5ifDmrmRDgeuRwN2h2QtdTJtveEdjnbB9FsWizBks",
  "key25": "2Y1eNFk1oqk4S38vEqa6BMiC4DsVxE2YcPUjp3RGoGxZHMGqNzC5vL7CSD1DRBh9pfTQf2E9iesJhddjY4djKbi",
  "key26": "4mS2PYWhmgZU2eFARLax4fb2p9SERucEYSv1aekGCnre2FsrvLqV1t8xNBHV2E8ggM6oiBYfgwvfsn5xRx8concq",
  "key27": "3XFkCVKpff6VHVaTDnZsPgg6ZPVDyokkwFEKTcm4VHKfNHGDZ45iRC1zVr4ot1KyNcfgn3Zvd1RTmPR3AH83LxNG",
  "key28": "3EE3fBWoPLPmUrXp4FJKJL5d9AYKiGQnFcQZzU3FCh9k2QVTrhRNp8omwRee5v6nwVdgKdJgFhtPykGJ3m5RjEsK",
  "key29": "4bDAgGaPHp4Hwrx5DTwD6guFKxUs3yAyhqeujk4mhUjkhmR2ZGUQLqb1V8s6bjJ7HvsMxo3KE8sxJocFhBxSUjPk",
  "key30": "5Q7oHR3Feh28m4sPfeaBhbxmwT9zRssSzSaA2USMmNpBQfHy9HFy8yKBxJch5UZKtRYdaVzSCsnhYL6Z9utfGT1q",
  "key31": "MXPKqWgMqn3xj77Z2Aa7GqwV5xRNoS6yRYnd6Ncz5mxuhpUWivQnWfzqasmtCAqHB8zxsS7tDrZFohvc47FdorH",
  "key32": "2s9RDsEXQ5A7jip6vZNrEuVNjFwm8TWDhwoTnAgmgssJC6sXdCKK6mbGpG6LSFM9jNaQDBMSuBJbppFMiZtUMq7Q",
  "key33": "2U6USq6eDKuHH9n9iN2ANmpyyCQ9ntintKRMqwCNgB95sou7o6aCu33cFaRp2gXmXCRyJRyd22xFRECjfAYgShut",
  "key34": "CQJfyciBbmVJp1Wec9eCBm3F8JZ6Bk8gUVSqfya6dnRTDoCwE1JtECCGaQBni9voiHTo5RZ8etS7zYWm29ZaY3a",
  "key35": "3ADvyzuCP6vLXotXuv5DXiW5PiRt3fk3FqVixSG7LTfHTV8Q8QaYgdbQ7edNkRbhPzFiB3C3ZSEv4GVCKr53T4Z6",
  "key36": "2bV3HPEvRbfQ3Hzv5fU6byGGUmWLo64CpqNeGYfx1iJ7tsZdQBi22e2Qe1EfqcjgYVXwTJpzhi97s4C7rr692JRs",
  "key37": "2NkCekLuxMZPx7hfJVKEftrfwHrypjZZxc7KBw6r2k9ndFuKUEBxD8KmNH58FQDK6wwbUfWbJ4xk1hcYjsQyQnpd",
  "key38": "582FoETEJHd2NjayF2bGGFTQKHRAGzMvK622c5UwNnsQej6Tczc8qwYsLThfD7CUaNkERf74mGyUgr1iFvJDENyJ",
  "key39": "3VisN8sQCM6UFMbyqEDpgsoJnzsQskXCddPSDnUNvtNSD5DgvtZxPGouQFX2r9ahQEAm2piVQfaBdZQQnyxMv7NA",
  "key40": "2Rf7hjQfx1UUedyKG4LHGBxJUBPVP9cnMG16jMqthyHEX8WazNoYPgVGx2EiwnauoUjp32RriAwAXfepzsRmdhkh",
  "key41": "5MbuX8xPSxJkk2jvfPWYT7L9p5M39WBgbkd3H17H5LofJBGu9bFiBfNEmj7zCAr5NwEFygxkUKDMZ1BeBjVZQE3D",
  "key42": "41Kph5HSs1VR5FugdunMUfF9Z3mdBzfPftWN3svK44M52agMNwf23hjKrvMbKq8WybsA9R9zFGzKbfazx1wxjgW9",
  "key43": "KPwgo1fgT6y3VYx3CiQ5sdQ95ifgVLspECXBio47EBZNdnYjftBh4A6RtNB8ETCb97w8rBviHpuXyXmyfnV8HLw",
  "key44": "3v8C27D5hFvMBE6bqCdmucwf6ZKzwrGtfxAd6SYa7cvn1hfjnwKcgG8iUKfRirncqFCfBtMPQXXKfP5Gu9L4fW6e",
  "key45": "3kDXKobvuvqoRriYi8Co8FDnkKpbYjeTAfk3ubJ4uNCctZwMQcoLinhhPyJEdNANnNdu8eWrnsf2kVMpEf5rQ49a",
  "key46": "NKzgvuC8jXxQG6CRFr9RfoQsmkdbiwWWhNuyQtQTmuAwEp2EPF5hxuzv1Q4wNb3y33JodhkL3mCm69mc4PpRiVk",
  "key47": "2hk449nFAM1aKQUUoY16SKqbmhu7nADCBasuLimXAy9Ba8VFbNvfug2M5McrQEDHbqByHMnvFrT97qvN91RqHb3T",
  "key48": "4snWZb5RZ9PSiq7atuVzdSX2hqmXbF3d4yqGqxJBtXLB3jP7mCLwm6D7f9ZwYemhkBGPo5JpY9Ro3QgwGFYCHVrC"
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
