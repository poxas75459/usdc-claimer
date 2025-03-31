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
    "JeFDEa4Yii7JiGZQGVw7dtZSuzHGHBxQQ8rquF5b1zm2rb6kUPypppUHTXYHStpmXRMzFZkjdsZxL9xT9FQ34rM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nbpuonb5pkPpm9JLSEiLTwBWHGNrF2zimEcKBgDjQFnztpWZtuyx4wynGirDdFnrtG2sRNLg8spfQH31YBfeGkC",
  "key1": "2iXFWdLJ7QGbWUAUwtz5R221Z42utsS87EQ4PrCtRgwJtUcsc9PGw8VkZ2KQoMXTbxpasuF43eYrr2JfPNjJMnDK",
  "key2": "3W44WNVYTexqUimEGDPJE1hxjMWsvCEhpEvckexdaNaj2F5KdGTSzo5viqmivmTz9nHRab6xjpn1Vge3ndyUSbvV",
  "key3": "4HSnZvQ35aXFJj3YvuigZxqYhUex8dTRD5TR7v5tKNvA57gthG73mGhXqpD5vRzktbYcFrtkQeLVUTAHnnnbUE9B",
  "key4": "5MwmYSFCr2xHK4GxyVVsNa3nDxioNb7St7hBZ22aFjh4gbKL8GdB6grEsPex54Jrhrqo9w5QqBNVq6omcxfEDmHD",
  "key5": "4V8xQ46LsMAkPbB6SbAgCRyw5QY1eSGric3zkhGGEBu1CYbzH9VYGTbMp3J7BiAM61ufmYxcDKjkgMj7ydp6FQ5P",
  "key6": "4HzQ5AhH7LqdGU1iz2EBu7E5xRS3jBHzfKufDNyYhFkd13Wnequt4wgR3hBuMXzmR4Jm54LDETaHouJhf9zpmH6B",
  "key7": "27CsfC4MnTd3bxREdmtHAD7wLfHfwbskBPLv57vj8Hg41XnYGfDd6SZdnhroxAp9cmWdk26PYYNKj3VanLFBV5s5",
  "key8": "5NgfYQuf8TPbA81xvk1LosQLRWsDyJn9VraiRYz54Nmm2ifHKY3XaCG8Y8vCRTRw3gzGNDtxYHmqxWea4jZWxsta",
  "key9": "3oqzmjUTctibNCYG3nAJ1nZxB68Qfpbq76gGQtPG9TQoXHmG9neSPesXVixfJCotxgwy1mVPmcYQBWyNgj5N4fdc",
  "key10": "5DRfjdr73QHv7VwCPfz17obrarfRnCeENgqb4pmZ7WnQishP4psmSSFS8iyWYZ1AKZwddbWR8VTW3iyWKVrETepH",
  "key11": "3iHMsXVGw196vWDpjvZRVALzF9GBHEJcMkJ4HbvW4krPn3z14DzYvtxmEtXBAcgDwPC9Kv6kFTDAY8fWjfZs8PUg",
  "key12": "5kifCZYhufMS4AbBsqm1rRUS2SqUzDLmjMoch1uwzv2uaiyoe7cVZ3abbSRB2tFta6aze2AFQw8Pz7Syx6X2efMv",
  "key13": "VqPjwf1Hg9NwJEf1nmDnYcFf6g5roDerbzvYP7mYSgncVYde6v7ZUt15BEPjfS3CzXT82iwPBLFgWYoAb3roGng",
  "key14": "3WNj2dpYD8vi8tkmyDu579YqExVoHahA2JKYVpvxDT8X2PQKAd3Yz2Cmca6dMs4zPhi4hzyHJkRA2x3vUazgCfZr",
  "key15": "4KXa4pM3fLqgttxVpba3dVXwKwq7sQbmqyiRhgsLd1C4MBbzkAphp78mtwLQimdgxYX4s7yrYmvyQEwYmrFFpFrK",
  "key16": "3GJVDjCAWR6cuXm62vZd82Lp1aNPck8PVevt9AZVTw36fxVY2cFJhgu4hRw5D4fTEqDZjTWuyzxuaZe8goxkqTer",
  "key17": "YUPnK2A8YKVVRdPhaS6qXm8phQThYMuFcy5Jnogs6bX61VQuj3MxPqyFekPASBSpyVe2ahmNQ5Pv2KeuwuuX1Jz",
  "key18": "2DpLTFQs9WyDGcAwrN3p8SeVtSHxLrP4fh3TLHv5Ye92Nh2qgryoy3pCkG3eShk9yJrPLanyjRwL2sBTH3ZvutbX",
  "key19": "4TNbX7ejPMKim8VcjiRiAKnnxZbd2ZcQUEDPexRFGD9Vgp7VyvLTWz5KpgZWRUKku8JzUS1rYz776G62eCPQnyKv",
  "key20": "4r9NmKS1b897kTcbXP7oeFrLWt1GAsSvVi381148HTLr8Qv3USogAD3yZTqjgSdEgKD8eEGFj2NAFP9vvFjopv7J",
  "key21": "3L3gNkynvfLims6k3vDNM67cu3W5hxdZScxEffafgMKoMd5X8dXbV1vD7CBFfr2rLCbJGmceEbpv6z3HHSv1HndW",
  "key22": "5Xy1akh89ZVMqEqJrdUttAoMKewXcd7QH2rcg6NWoMhUMVBKaWVPayoSp9qG3RF2CNtYw8fYRX8PfaY8guYzo9x8",
  "key23": "34uwPQiRVrMjZAcLGbxjGj2h3VbYHKMM5bzF5PjjTEHZDUwgjC3YjEzZPs4mfXjBzRhYAuGmAM2XsPccBwsMjzUX",
  "key24": "3MUkMYkSJ9TECesrUvdq5AyoG2EX4vizMEzxWc1bpcBYicqgzd8zPQSvFswGd42Aj3v7GX4YEmh7WWXdaPGNKSaS",
  "key25": "2M3pw9igc6vSqXgbRoyDrwfi8KpPhykMMTFsWKt5w2AynD85CVArqukW7dYQsKofaQsJ1kLqvPX64zWcnazu3acy",
  "key26": "5PEermm8EQ6DiaarzKbtiLCBxmqVZ4QgfvuWzSjnmoWNdVAba7FUm8Rebn9Pwu1DEQkqQYXc5ikAaMbG6AYFqLdW",
  "key27": "2Rj5wDvqrz7z4CCdHaYsASjMfvhCrtzRFVLJs4LhuZzDBLW86GRFG3mLbAVsSn7GCapf9jB8Va67NZ77iQm5LVqA",
  "key28": "2cq2RqDiZBwcHfK8MDMBYciiVLjczJ5JHfVLfmMTSDa3QGo5GD4UqdZrxE1PsiRFU9gzvRk6dz2SaHe6obaurrAE",
  "key29": "4Yd1jEbpv2Fx7NAtsZrAL3suQQocxhUxGeFXVSTKj1yXCCyfLEtt4wcMaKW8HPdNCZkc64gSbUffMADQ91gnfMRH",
  "key30": "35uoUx6CEHvd3F8komCg5B6PZMb5fcRSnGc82h3EdE1UMyyTcc1a1vkEAAeH5sXSZe8auHgYyKxYbMCu8PYkgk7a",
  "key31": "sqpaYBjxFWafyhWk9JsfkWGqm1sNnuYaTKnPEiqmKSmmJVDfydm1pVtreDVNYhiGTK27ENpwcGLedcn6ESmm6j6",
  "key32": "64mvLsgdHY1eCZtXqkJQ113VSukq9Roo66u8yf2EqgDhp8juQMAejq7xdJkt2ewVZ9saXW738mGnF87yGSNrNoFE",
  "key33": "21rmCrDHLTELy8DffoGbhwVChnZ43PVNDkXXcbSqLrj8UZsS4siPthZpWvRgWRYfcEXx41xUTr7iDMyKfD8rsxxL",
  "key34": "392U4JB5rx9wejFUMmZyohq38JkUSHcjcFm2mTSSsjPFbgEYnV8xcsy2qNgXyA6NinQkFjcwASZ7voPY5sfoTe5s",
  "key35": "4Abu25ZWK78MbKDHFcF1mg68ZTmbxuN3XGc8QDZ5jdXMdNnTEXWkZ42pkjd5vgKEoRBrrgQTiymxZZExtTngkXb1",
  "key36": "3TMYtFaKsacn5V5RDaHTjHxChiRkFm1VThbaDFK8g9aimDHknKR2FL2VmRVrhkSmLD1fyjPD3F5wcsTEEKKGf7p3",
  "key37": "39PN3QXhzV4PAeGLXRtQgoJQTxojgvNJA3yFXEmwpy5yGoCfLZnDrGj88viZSRUmXhrzmpWKzTgw23kFUCSZT4fk",
  "key38": "3wVJivkQKErUUtwLgaZQUaZmUXvpvR7HCgXJXw7ksaN4baVsGNbfn1BSjoUWu8XdmSN6SwoAvUX2gb27Us9o5BGV",
  "key39": "2XGAr9ZjeqxRvQ6mnR7g2fVFuGGmvNUQVFdy8XwUYREz2153DVamMF6GqrvPuUzkukq6Rne2A7j2MFHB3AiCu54B",
  "key40": "Kg9WoaiXCpcMjBuwUyjTyp98yYhfeLm458dBdQbZGDymNmHihvPFZhSoriyrtPkN6xekSEYCcEy6v7tmd8hsS3C",
  "key41": "4TRu5VB11SBgEo2F4u92HJtgAYZx2XoqmV1UBdvtoRqiZiZYQ5EcxDcDjKcAVCCsrSpiwp5vvHjWvy7Ped3FuM9o",
  "key42": "Z1zQ3GQf81UV7ogQ69EwBPotZ8xjhntJbitsbPwvPHJi7GTgdrroSTNhm5Eq3DeMCt1nK7yKgh3PW3jVt2SfuAy",
  "key43": "5eYc1p4Rsq3NSsf9jtmmB3YMxwPzwe1CJtho8ZoXig9jTuEa7AeX1a1rGLjDQc4HW5N4wnZM2VQfwn1LofZzdq13",
  "key44": "2uGxHP9JEGve3ixnWcdtvSaqzAJA5owNXTWAS1oTDwZYU8CiiNmLrkHrwnSTX2gY8Q7oHiL4om7x1JhfyyR1sXaG"
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
