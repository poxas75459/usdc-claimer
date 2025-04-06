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
    "8LX8rt8CEdYXJR84M2dDA7tByiE5vLojT86V9mrCfwg4b1zLXPBH5r3VAU3UhiwKFSwwGuMcwjnavWckkaPQoSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58UQ7d6dowrongwxcz1Uosdpk8fMJWvDJv5BVgMLBnDuJRUvrUyxZAbUkGerpNkTKGGSdNWVgYXHcGf8rXDcEEWJ",
  "key1": "4ZcjoNK8DP9F7kJEFKSCYHNYGjd7289ZgVTsoaagPDdRD7gM1Z9fAbjzaZNZZsLF1c28h7gBtQ2psJDtQeur6cmz",
  "key2": "2xmnufvRdksqc5ga5GBxQVyWKDSSvnT4kxjN4n57E2Q74Ufbd2QVWzauxSG2P33grkqd7cpDqdGfNATWaWFtnMSA",
  "key3": "5fJRMDD7SYMzu8gyN6nzT93oHYCobk4xLpp9vubQPR5CG2y4c7vxK4tVFcPr4g14nnJ4hsBviE8qii6vAwRVcSwH",
  "key4": "2K5QbLtFRPoyG9bEG8G6bhwYC6vP3512BAPMbpTdyqBX8GMjRCBXd7m27WvQfQ2hXnFCfamvwgrzsu67mjzkwPFN",
  "key5": "3XyodSzyp5zshraSuHPqCUD5NmPoDL9WQe23NnsAYHyat53afLUGxMjPiwNrfFZKhMVVRGTpW1mF3SBKt4ptx5uQ",
  "key6": "3ybtCvFyg8V8eb7kEnw6FQcM51GocXrKTfuEJAETd14TzjJtU6szZtKhrVtkjPemJe9jcXSs2eHJjFovprp5L7ZK",
  "key7": "5ZEUE8mBwe6ajeREeKq6fh2msE5FkbtT2Ny9ULA3TzKEYa15C75voswANpHKTJD7z657bynexqmMxNHG14oES3tj",
  "key8": "jaCR54Lhg758wbrecbDtjT3xjk3NgPZ2yqKaJpSQERsoZ9Nqsy6UqZySXaup8tRgzivWBqxGStRhGq4YwQyNhef",
  "key9": "tTH5Wm7awLjCa716wf7QWtqfEWjjyufZMEc7teJGfAY4a3JuvmwH6PhZjzwwez6SFhPc1xEAJxHed17rK9esDf8",
  "key10": "3BizCS2BHeoJ8fty7p6NrS3f5wz41NWasMp98MHMN41k6CTipCDp2LWBVnZgWqPTxo4u8mxfSe1KuzWwyhiYvpcU",
  "key11": "aRfzJyPFMzSY49GoZ6uskwUNw3TgtxKjoeDHhjfkGj7YKaTbKxZkSYmFxfQaxBJfmfjSNbUqyS1EDfTanbrP6yy",
  "key12": "45GmdCvjyt4rSQU5DN8dV2wM5zj9yXzE5do8rJEWfZ141EnR53nLbDrYRy4ojpd13AMV7msNL5ucvyM6CpLgMUdD",
  "key13": "3rHo3yE6hRjrLZRvKwjjYcfvuPBUwr8hTyu372AgnNnBmHt2AK7UacQxiATEkNAo27hfdbw7qjF2io7czm49FGfC",
  "key14": "4upxFfHk3AKwoW4ucNvXAhJbDErmoMuJoruowtWJSkXmM64SEtTJEb4cgiLb492nnEtDHf2qzd5gyaF4oqaQkMtJ",
  "key15": "41pgjFwjqXXpnEYoob1ypiQJjSobtrVfrmCyvBH9ircB6DfUXdxmAFHEPPsA6KgMRxUwpUrFm7EYsdaHVoaRctp7",
  "key16": "4J8qZipNvYPQ5cemrQQpn1DZDBgPMa4LXpqAYG54ckeeWwXHSYpzN6tbSC34uXFnCdyRJcSXHNvHkSV4FvfkqeWr",
  "key17": "A18Q9TNWcM9ieCKYBdSyqpwJE36v4JSjEyTx5g2w6pu6Z8phD6VJwYiDvXvhM9jU5JM7Vwv8kYVTWU5n5TWtQJq",
  "key18": "5zFGaq56hx4sFr3VmJNRi1rx5JMnr6TWE8P9buE72TfAgXoBzwPV7zRTmCfa3gSC8oq3YyRmrDPERCkoEhhPPMNa",
  "key19": "4A3a6RhBo2P3QKVfC5ayTXrddwsL3V6DvH7odmy4FedRQACL6Yun6r1hQz9YrH2aGU6px3QdxEeLegL1Vwdh8NXh",
  "key20": "5kAR6W3QJa4Sb88WuDhcKcatK3mzoTUahZfNvKnrgwm1QQ23XMszQDsnYA26xyZLS7NdntfRxWYAADoWF1mXLcMy",
  "key21": "PJZaX8iVgPmQjUTjqRoq5mrTYaAW92QvVH3gHcY9YNeYbXzKrFs7QTzqmjEqGgKsHV1zAqQpfqdHxfx1UCLwxPd",
  "key22": "A87uEZg4aU1SMLBbC9mMtCAW3TrHZ5GidiL8TY8wm4AdqwPwXzeRewtbtPZNjWchQVgkxjfYkmXP6xPjAogk3HX",
  "key23": "5JQDhvp5sMGAt96vhaDCB49aiBUpJF8kXfQFrihb3RCk2CvyMoah23X682uXpqbWEaCndEoHUBKhPY81R3H2gbpM",
  "key24": "5AnMkFBats3nBwm7WZj6yh4B9jZAQKuz77PD99UH284Y7MLP8kstoNKEG7DCSEXDybBTjTca6pPQRt8FkN4ikgyw",
  "key25": "3shYMYVpz9r5sehFc8Zy7f7Vj8rQDtRLSU8E5e5ChyEcsnK81LD7dXyyJVvL4orFFyvUspgmtTjCKtVE99znDBaw",
  "key26": "ehbqhzfUiJugZmUYkiSD2GK61TWjrz87EzQCeERcDgHzyeANxQzWhCeHHqnn4mdbVXXmQE3EGuPtYPrra5CQ14h",
  "key27": "3yfUbYrP4vWeRmnzJn7qjF4WtLHUTyXnPBnHQyp2StaGnzhNHPjTpWtX8Afj7rsDJAmUyqRpcrxRuyjQUoWJ8dwJ",
  "key28": "3pmN1fYXZAMAyoFQhqMtMyEb7QyBubDRUhZZgDWjtX79QFTzDrastCEAVFWntj7Bh57zZkUt11VHgzNF4ASvz3fy",
  "key29": "676o9ejLiwgwA6bzptERAsNR4nuAeoKPhAuKCgSShrvRdWYJLFuCEMB87F7zzgXJMHLZMrfyd6UabvJBaGDhebK4",
  "key30": "3Bc2HeF6Z2r3Y98NSKbixDx6d9poGmWcb75EAu4M8U1ypQHrmEC2dntfqHmLPMRgc4rs5rYme62ZnHiQ8jsCik1S",
  "key31": "47Saw95jDbCXEEEUd7YRroQkogN114fiULMHXZ2UiXN58zGaWeVsBmv4tD3v6RehFzUGgA5Eqy73Czoof7rm7kwK",
  "key32": "FXjX55jdH8asmtbP8oso98g5qqgSxLFSazkyFWVGULRwPai16mNt1Uvsh9adPhJmq25PFmsBb8LyEYoCnZfrENY",
  "key33": "2HMLkVwThrMZrwUXs9LmSeriJ36iGnLrYacGtnAatwwvY81fpbM3uTEz7zkVNzSpapS7L9LBkrDSA1RJgTBUejjW",
  "key34": "5TJ518i1c6Xo6KyDom4J1HdFJt9ZZRKNCZcj1U2fREw8eVKHvd53mmTphpQC8TycNax3Lz5hyC13pPz9c3mkj8YH",
  "key35": "4SMoCe5qgBjNdJNuNmQuCBL94cnXwsmifatk1ryzq1JKQVTS477dGCbEBhThPYppH2SNCtEv7AYEcteWg6U7AHWp",
  "key36": "4U2ggsabdSZA18gsgrnLGZENZ2BKdf1UE3c1jVK5XrkpL9DjyXaxD615JXsC6JoEGnZbcP6mn5XduWupRPgPTb5Z",
  "key37": "4HgSQH7uVFTB2bvH5zun7WwCLxWQk3MezNBbELiWZTnCpRnMoAa8BchZMPVmLm1Vaj6yvjk69Pdt33uhPdqTyZdH",
  "key38": "2bKSc6EGTdkav3ekPprE5oD5QLDJNoRCSLBpVuZpNK2KBycqr5t4cmHFPbZoYkmk8VrCBLfpY3zw17iM7sSmn2ng",
  "key39": "3bxfWqipCfxb9FxY9zwjYzbi1rX32uW2GiUVukdQfBKW4fwmVkT5KzCwFr7QWZE1iK532a45xthFBCwNkpa6Eh6S",
  "key40": "2kJ6gpcfJSiUbZynV9TeuncwTzguWFykYShBR5SvKknkQP5WeAyYw7ZWsNexXFeanrb1CGwwv6pXHCezpw2GXZyi",
  "key41": "2ZTK8AXAsmjHHWjYU79ncy7i5HeB4CiiTK232KGkBPxaMHP6EZgJoTR23jhCuNDvsRgpd8b5aoHvbeCbrXsnQ2xw",
  "key42": "3w6tXAotZP1FByt9vdTSEm44bNpDigZjpwEktYfrT5d53s3VaDdw6o77ac6qrGSBej5jS658nGgFQwjBSqgX3Jtu",
  "key43": "5sJB8hBy34hTyimFAuJaQWQ47ZN2W2ff2wfZiAxZy2ND4nFnm1GWeEshiG3pE8Mmiy2NnfF861oudcXavsGdRxLv"
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
