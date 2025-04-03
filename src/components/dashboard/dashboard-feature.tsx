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
    "3qnUZnmGa5uVDEe7ctBWAczyFJeKXRPt8ZkPFWM7xYL1NWCFkhVBpR9AhUKXs9N1GV44DG3o7uXraMnrfhv1hQsp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rkYCtVmzkpscp1E5Ffpvxc4agfVbHdVHCZQEhkvHhMdvhuL1SJa2ScXJURdhrG77oWnPn2R9noWmb2NeBXVqDRS",
  "key1": "3yH7dXWTVmC5reDR6TnvcbJhKt93R1ttnah5zTFc3Jd8a5Ja6rPmU4a1y2EqYQyDajDsaMon4xodRuLDutVEoJoD",
  "key2": "4qn7wuyPAjnkMXSoM5nuheUPG6s5VcWVvGLjb9S2rfdH4FvxSsTQ5obKekL7W9bfLUkSXrS7Ci29gah25fDJ8Hgh",
  "key3": "jeQQyzmuh9FzWQEGaCdVBkzu2CxvgdZ9TMyWGnoHesFr9jK2jXKcQ5MFxQZVTywNsj6yiG6mo2BcWdA8DYHaTaz",
  "key4": "5wW3Tj4yDMBvncGjrqQPCLoX7fTFRMNDi6GTYEUQenwbcD9CVTspastAQEHBdvckyJz79vvxwbMYCCJd4FLfkz32",
  "key5": "3D247BdFzWxSgvzpoNv86pCQ6Y2yrqEQyscHvQC8JVCeEaMZpCg8y2Y1MiYBjrdNiGb3JvQ56Wx5rdh2fJvxhQbW",
  "key6": "3qyUb7fJuHeaqXZB6Ko65GBv1NQR3HkVZA7vPYWFXoVyniMUJFQzQm8q98XV2KY86eHHhXmXuiaoZguNCzpaHXrk",
  "key7": "UEJoTDLdVvnmq9Y1G4teESejdDfGvgNjcVWwLNVtdrYbbDgx2NFWw83dog4FF64rBG4CC6XemAtQo4WopUrcDX1",
  "key8": "hyDEvynoKyW3AjYVkiVg7RCkM5RS72Zu3QpWk6cgEeASgRnUy3H8TzojFiwmWEiuWiB4bx8b6pzE7sYRYnMHxLB",
  "key9": "2jdYVdHF34ARmxpTExaUhERp2n5n8mjoSES59W75qHTY6d8qEFrLEFRNhW41PDkenuDmvSCjyUnmBSYLiE8nJDbM",
  "key10": "3Qo8LPbe1bGZaRCTf2qKnxPDCyPBhkHxpVTtYMmxirPnvpMoPMzUyug4iqumiWJskNsS5ms75NEmt1kPErMmUu19",
  "key11": "4CSXn7zfxQC2puAxcQ9CohHtFK4FYJWLg2e3Ta66E9a8eheucTisjCwkMLfRR9xzABABGA7gL8hgAwk7M1gpasSD",
  "key12": "Xi668cwPxJvxPGg2TsrT88a82JVcW7APXBk2qyfj5B2eguUwd8i8QWoHnTSdKZ32wdq2pdJt7CG6qr5JxyG6a4s",
  "key13": "5CsBbbB4sPk8kih2W7nK4auAQ3sV34r2KZAwAh7f1M1GHKwZGjdRgdhRRWLZuRvW6HVVF5njKMAUwrNghrYCRu2J",
  "key14": "48xFVQ6WsUM6Hfbss5BhtRBTrg4iiosTZhYew8JifcX1G57DRNxxfp5hBm7TYMCtwqY7aNzyF6k8YSpPe1RZiM6B",
  "key15": "3rxtbiJ4kskKtzY26jTxDqfeLg6ES4H9ZBbn7bMoPLAnQc4F9G7hpsPQbpkGW6rfdrGQ6kukju51Zm76JetjCzNs",
  "key16": "5XNxy4BD27JmeLzEamD7teKGb96BZtjCYcvyiFJwCTwhjqtEtCJP7vzaiFvcSgMJ3vmvCRqV7BXeZa5j5UrqKTgA",
  "key17": "44GV7g2Tr42GhAKkQPsviNZ6aXWYYE8VKsBPJyCLBffB9dGHtMoCbriGBpTusS3WnQNkj7Rfxuyfr2fP26yX2XUc",
  "key18": "2zAHpRNCxfCpV62aeFuG6a7RaL7ho9UJMNkxFA2bb3V7B3Bci6YgJA69f6w5kigYj5xNE3MvcmA658Axs9VXeJ6R",
  "key19": "3GSAJS7pwVDsBWGjWP3PtsGzYPbWgi5JdGapiSuiiZe85hPYAkTpD8jCvWWBDarQ5yPg2tQwoR22eP2bVbn3XJbF",
  "key20": "5sEWzr81A251iHvGr5MbxBFtQSmRv9semoofdPJ1MLMkAQvecAZf8DFWdCUr9uroZfti2pEyqLTMvz7dt4tRM5Db",
  "key21": "21XPT9gNxQR8zgxxBFZELb52GPqrnhLs7naAvRBw859HaKKCpgDkrtVXjFBpbjjbRKbKm1SqcyRCmnaXipTA29YU",
  "key22": "4Api3GLqunUM7594i8nscpqTgtTY1MdWjGZBeB2FQ5qtp9xffac4Fz6MmKy5LGdQ2cC3kkpp5XJVz7YH78ycb1X4",
  "key23": "3nBWVZyb8phaVSY4H5wAY2n4Jrq5Er5JNWtKvm9zbZdAA2fqGaeg6M6wdft49CmHn5hNg3vPbaa172ATqNRrPKbY",
  "key24": "3fJcRgDo6ez3xSnDVDjk29qabbkL1idrKCAKJqCZmFc9Xxid1czLLBkhbCTdbeytsvHnoiP33y8xAP4u7pQ5b4LJ",
  "key25": "4VGUCBkrP5jdSkv6LBk33aFMz3CRvQ6Bf2MTYoM8HqbzV2Jhbq6bUsbUxJGtaVRnNWp9EQVxzdZxmhbW1ioHG6pE",
  "key26": "2Q8QS3wKTKR2b1UCy44PMEGUTReL9GyteZjB9pxpK9CcZgDjFsDNfyaw5uPpFyHvxzSVHtrTprdFRYcr4D5cNcyT",
  "key27": "4xdRx87sr6c6C1DqyCw7bGdT94sWoobMwhejFak3HNj1wWmQNQCvnWCJtnV3qBV6GQm4Dvson3L92Ec5G3YFvkzo",
  "key28": "3JhA3gMs7TTYtUD8N4NTJRkMnS6iKHbVD7R3pLvDGDKcT71Ffnzd4vCR6bFBnc81BedEG4XZVCeHSr45XZ56zm7j",
  "key29": "2w9qVakN5n4ADnANLp48fqQixJ1fstLsguBpEXbGJimdbxHimkRTcV151Wa8df8tLoUFrroEmXyuxb6yKVQA4bko",
  "key30": "3gs4Et2ogzcLsd3b5H4TWzH7SBLyHEFUCJhFZczUM3Vg9AZYRp58ZwFVsALZmeL5JoUHHDoWUH6NERZpxrr8fSYF",
  "key31": "59XZCwxk6wFut9MXM4iyAPvum71Lm78YiUp5T8CYtifxvvuJyDeYSpfAXczLKsPRJLmcNgCwyuYSJS3cvWZMPhZg",
  "key32": "2xsPQi9WwyBXdL3KgtWMUnVuCGRvG443WoLUMj3tcevPs3Vpe4yAMGqU8W2DNySPvVsv27gsH5uEcKqwMasS7erH",
  "key33": "4AFhkMNB71VaBkApcSypPx8oBU1MH8ScBvTduzZPXWuqZfpPQNejRWhoNchYAScfVfjozfV69XbqPp3QemjicLgz",
  "key34": "3MJB9Qgtkc1sG24bKKqLbDw9e9Jp5HFnuDSLfwrx7sHfbAyt9xzmxfDvVhixN1nr4xDbgWv8ecSH95uyjUJJgwU5",
  "key35": "4EFsaQHzri4hJ3QjDuYjpNBd33ocBguUBsCJdByF8hZNGQv2GqoTXfuwiVZskDrJmqrdfY5Rw6dizFCVKoHu2SMG",
  "key36": "39m9e8sbQq8NPZV6YZny6quEjBPRochETBc9Ve4gcPySTTAzwb9KejqeivNvpsDnzsWhhDn9yGzBtrf9Vu4AG4yu",
  "key37": "4WCeGPHhSjTBDmUXeLFdNkY52VdYkABSoavRwt9cH9V3TewD2d5zMegbqCq7v5ZdaMtpf5kJTKD2Bjc4nb49yDgg",
  "key38": "38FFGSbjRj73nzB9Mnhf54vp2kfFBphXDXF9tvHRfzHrrXUETbNbdrHpTrEnLtsono7PKDkxcYmKMtDp4BqUs3D3",
  "key39": "QFmi8cXg4NPe3NcNQuvAbZ9YcAiz1BSoYXMH6Fq8mkG3M7pN9966z5v4yfhf32fesmxzeUvAc14aCpJeKrc4KwU",
  "key40": "3ZSD4zVz48hnvirhPnmqLZHHTcq47nJ5Mofo7U2j2aVcYfJvEvZgYAoGfaXHhokVjisuL3AbYcUQnb8pwrrU2MTY",
  "key41": "54bWtUv1Y2AFShSYG1zfVDDEQLWEr6zZmempdsEQ3ZkFSbrvRqK24ZTfKwwBZ4qc7ksPs25bNCcFbyUUk7UNhmiM",
  "key42": "3saTXcxjx3pDTEgvu3vGLMZTw95fJJvnoo7BStsS7o71AM6kZsYFexhjfQRmqSC7dsfDpcG43rZFLXNLyPpBt51k",
  "key43": "2sVkpFnGmRuRwDPrpiXXsywzpWNVvPYZKS5XtU6aHRuzY4payfK7MTwbQd4EkgMnkBtPbjrSfykmVxyDVxjeVJRD",
  "key44": "EUTTP7wk5kKxXQNtzn4MkngvQNbMRcEpqSVE6R4732BGEQPnNUvM9Mdh56BctuXnJwRG9mbAAR1JpW9M5J81Snd",
  "key45": "2wmvZfdYS52qeHkrhw36A9jji2BBhKZs5WSGi78Gr2f2MeUNtp1Q9nVQbWZxupHAVjsVvvWWWE3XKcfxRT3NZqa",
  "key46": "5hdvuUdGcpJew9ZfKncqZs9BxEnc7YXLDqjkgJ8NgLxiozFDa8g6fjAZtLRnQWkQbfknEKjU6rrfbo2gpupvQFEY"
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
