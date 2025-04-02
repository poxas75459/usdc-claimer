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
    "vgBD1m9GXQivRb42DXFF433hmneRrZm43TaXGDHLPepg578MC5NPZPSNYx8tmd1dT7xpUBxz2EbGWyt8MgxDP3P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QxMVtzmp8sXJ8T7exYf56udhkqYS9xzqmf4ZNF4MrLs3vuiz7HgXnJey83XeJ9A2vKAAEA66GkGcK5j97aNsDmZ",
  "key1": "2FpX8hfAEFoUYbF3TftDbZRooNFU3jxATEUpKEdigvGBpyaGYW3fxq8U9W2txhunwSZEQctL5EUGtVDZATqmcL2r",
  "key2": "5H6JtS7vSsyqyGjGPWtU9SfcAHRYQckyHqwrummQsFPjSGWaoK4bBPSTXxLEVBdzUu6FYmaZwGiGmjL4zm8QNdtP",
  "key3": "4KAvQxhgko7F9wQRgZ3FDUfWZ4iCa7ZGk2sgqvkHFUmvCENeZqhV7A2o5Q2WepT21BhghYL2rA2VvwDCX6GCz4Kb",
  "key4": "5EicUGtsqJzzeoHEdik7tMmMX4AbnXYtCN5xxwc9GyW6uoTCZAQguvYTR1RSCaYiVzBVe41cSDJh2HkPXAz3g4X3",
  "key5": "3fwxEvuWGAagFw2FVuA1ipchV6NEe4PZGLAYPGnrMkF7ckN3tN95rKENbp3RQEHq1QBEKJ5FgF3VPUC3ScefTnt1",
  "key6": "498KNmy6NQG1LhCcXowQhfDF7B5mDkKSjsjGsjFKSxH8VM1eXa7sggPVMNH5C6ikbYZETihaBv6foYm8bcpPncAU",
  "key7": "3SZ2tytigcWkcvS8EmjazsXVXoy7fAJApcSvuyn5qPm3jnTSyx5SCfqk2knRhmGuz5naZWZiz4rQfvg81EujNwDv",
  "key8": "4dwL72UEjFLCK9T9aKtZVYHjdr8eqba4wcZQhnpSrGss1Ud5ehs6ca3SMZ2ECGDZQSJRFoBoE5KKZ8sU8kRukDiG",
  "key9": "3DpmmhpYi9818VQzmxSNC21C2vaz4H5J3hSHuy5z8ZPZaooQcbKRGQk3o7iuXxb3Uioom7N3WBwfF8gz3cimHaMj",
  "key10": "5QLvzeXtQ6EZRvqPwuD159jymWBju1pBaG5npVwm2P34svvhzCuyiwH4Fwf76tqZVut2t2VkkA1yzgfqxgEjUfDm",
  "key11": "2twBkt8Yen1ysjQ63H8BegHKZKdJKxYh9et3ZgMSbhoycRwuVmZHrvgLUiqdHwuRbDqZX9fPwy97bGq4PGPhYr8o",
  "key12": "8zFRuqzH2LFGZEPosmHW7TA8HDUgnhdVsggEP1GTNAo1TqYh5rcS68kLirkdt6ySn9tB4tWqW5x9urKJ26NTMkX",
  "key13": "63AwB2tXvQqtuyyW8BYyhvztYMeNdcjhoSULLhBuTB6rGmsiLtcJXcSyyvMkEUQvCX2HhphTxwoV15vVBh3Rvbw4",
  "key14": "2Nf3b2X74BkX7i5y9G3gvQU7TUQqR1noDdcHNcsBvopjjxpzWrcRZFqQguesegL9d6a9EquCiPYhtz2L5o42QDF9",
  "key15": "3s3Gjo7ex6yBLjS3MECXqSN7dGwDxVVBorrVacc6yL3Pv1HU22iz5is3bc93M4aaGYfDLH3k9RmRCYRU2DJGDFgA",
  "key16": "2mWcWn5mVBpnXu5TuErE4h6PKrPkyyefD5mCP1aFxSTVnh3eALaDa3tCjQjVVfj6c99dRs8qXruxiwyJ2Us9Lj1w",
  "key17": "3H7ioawacycBQUfE2VQcwZCADK8jGrxwaXrMLDudkJA3PUT8rEvZYzjxrfvvAP4Pdkn2KnaoUocAvroMF2RgnTE",
  "key18": "2TLstqD4h6hoR1qdP9cW7P59XM4BusMUNGQS5XTMykK9iWC4nymn8ZA2snATcGNp2rFkU9rFM1ND38DVAZB1UXoY",
  "key19": "67XcDZKCyJmDdCty5yAHvt4DDx2RYNDZD9FRMhHiLAVcmXJvrook22fddJL2FTWt9zFQtTie6FcraPvb18EPTGDx",
  "key20": "5XcJy8o9eMSBco7sAatJUUrSLQ24FMVb7xvSwe4ysoWbBcU8dpvcqMWGAg52bMzB5NKdQtuBkgfurUR2mr7huHpC",
  "key21": "5CPKdstPHEBAWa78DM3wdMyKxAuz35k7gDcH9KJutytNUTthjcmNbN6DCQrE4Qj1QGVJvnqdL3kRnxcx61YDZXea",
  "key22": "4xY3nHoMcXLsQubeN2yNcpjn4JCsFUsHcZc3BgoPQP534x7aQHyHyKZhWWDq2ACvwzVe9UYdU8V4kBXUpjPXHgRi",
  "key23": "HaE5tfZ5hbyjE27Kp28sX1aJq6g31cJeeKehxLMNwsp3NWutysQpnoYiQ6y4FWRYPHhKJQRG9goUuS6aNQtdK4F",
  "key24": "2qgkSpfedHYGf9JTN5pVRDzCuHe7Bg9zM3HGzZuGPT6ZD9N8LzJNXFKR8SVGaP5AtjKxCKWHniHRz6J4VFFZarBJ",
  "key25": "QqcxtyjoM7YeiEP4ne5pgLUdkrBNm99N3ybkTxCsX2KKsc1shycXpPeU3o2mz2cVpfJXnEph3RgDdZPV7ZYfvKt",
  "key26": "2omSgBtrAotP5nVhAXUZd8rXoR4t5h2zzjwbcRuPXprZT6KdQnUw2SkBQP29oTpMNh4zRPGwmH8C9ses4a7fAkL6",
  "key27": "1HXcLbCAAYqmeMVUeGT3MP2oXf7Rr9MErbNziV2ksRsYctmepErTzkS5on97Q6wJLoxHKx85SrEFsBwupTqo6Zi",
  "key28": "37bCyD3YwHCug2yZTzYpdYYNhYq1nJcqscLyUEg3Rt88j4VWeua3WRkVXQxYxErjDPhBcGykUBwvyaMcnSxR7NXs",
  "key29": "2bTDGkm1AnTMqMDrWss9mkZ1Cb4cuNL4j2w4jjyboSxtvi3JevXW5QD7y9eoBM3XdwzSGru7BxPuGFjS98QfiX9v",
  "key30": "2TDtoqbCgC9jz91QommCMRMQ3Tfms58YHchMjDNz6MwF12s8QD2LNtPpB4SgTK5S9qa3zpwtXhhymxZrZSWedn2g",
  "key31": "412FwYsSPBqybC3VujvG8Mcw6R5Tqqzqawcrvb59x1c2Jbu4fFtszkY6tNtvbrfJ8yH7eS7oeN3egjKntyB7hFje",
  "key32": "5EuopGEuSiYdwunQjMxjBkt9LitaSBRE89FfbuDHE2K87hocw9bX1cFre84zzW6m9xfxP4GF9WGeZkL2B69bTssx",
  "key33": "WhepJr6yMyQ7csDuMUJ8qdYBdADoqF7p2nCu1kJVhe4SgRtmDVBW92FvXkiut3XcR3FNzC873mNwgsxzsfQPBb5",
  "key34": "5qejxmC3gR4cjGS4tPFgJTdg5NVDHyEGB2XUPEejqJ9fwmktP6JyRooy6pwvGvTsigdmQFNGY7udVtKH1U46iE1S",
  "key35": "3CAurbhetvTR8K2mvQWfPmsvvJ97jCbdEjiBkG1sErNrtZ76g3PesQq3siGiy3BD6TDwkcbx477McTUHtLXbB6tC",
  "key36": "4cVGFPTx2WYPPjVWk4L8ZHvtSz2xuPtsZVybvbCMgYzhWKpFQvKUaF9yqZFhaTHwKS95Gm8X9YZhwt4BzMqN46HU",
  "key37": "2SWbvPeTf3VAPiGANhd17HXJqmqNLQ3Df8KbrkKnJA4AsJNbkDp3mHR9aiLEwtBopjuUVoR3spyuAcikktDYRvj",
  "key38": "53T1kn4i1LYoixPg3HqDT8gG4gd16yCs7Xntu1MmS3ySuLRvESRJepwfed7iWHnoGAB95JMLVxbXDwWgaTzVqESn",
  "key39": "2Ja1zXhhuLD4KbWF82tNYmasqoXJQdAiy96bRPAfvAznge6pGJ2mujk1RYQXWyYXiYvyf5XHnMtUL3ttfoASifQb",
  "key40": "5WeekwPiykGi6gTH4JvAjMwUf9jdKT4QykFnocGH4qZzFLKrhZxgwfxzBhWKTzUvhKjnLeGxqaGoLe22p5TjceyV",
  "key41": "5T9xdQ1t4gruuxATu9Ear7zfR9xB4DpEM1Q4TAW6sS8ivnyZmLxZJVFyGpeTkyzNhzFAjQkpwqkkY9Cs5SXzvBKQ",
  "key42": "3yyRTsfufvjTVM5RRfrKnawjZtirFWudkcNeBn2qtFuE2u51V5waQm7V8BMUp7x6medFn8Ks3bzJDqXfudPMWBHW",
  "key43": "2ubufm8JoAhHsonbzD1YpkoZMeCs3Th8wHupmtMrGx9FoJEy9nPRAYy4Gro2Zut4ZmDKozF6ZGA3hMP63NFJYWdD",
  "key44": "4Wpkc86qcKuh19pV4Jt6yLs455xY1ywpqxKDBPSf16mhhNPwaWY8fkFmbCdw2fmd9zBLLndyEuC8kGAJuQDhxANZ",
  "key45": "4r126ZpjWnvH3vqVcQ8RzqKfxhbwkkyxjDVzsMNyygXEufTRXdjHN1NMxqyzMkosSBmd6JeYmQSb487H6vvxgoSm",
  "key46": "3rwCh77GPTFkbVVQdV3AjxHqLg8SE6gW9Fq6BVUXeg8sAJauBKPWRNvczLmXBG5Wz4sTN6Hvj7QpVFfoe1v6Q5hh",
  "key47": "2FpK9NW8YZRmWkaoyHnEXCBqpH7cFJaonyTES2g91dqd6VJNBT7P8cF42Bh16vsLASpat1CKfqC4wVYBz9VhThLS"
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
