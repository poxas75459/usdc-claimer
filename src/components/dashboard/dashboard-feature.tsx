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
    "3fGUUXBiHCVJgVHjg9CTWFWyK3iexaPHZ8jNmRvum3rgFJyEVLe6pTUtDZD3LhxbXrzWVRb5Meodhd1Suso6JSPc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yGtQoPdxTE1rCMiiykBkQMqyVjLXyXwbS8rgf9zwyj6GfXFKZQMjiG9oBACan1apQiGHvrs54rxz7sfapL8Xf7z",
  "key1": "4DcHjpJCNjGFTkZzGpz7XsKRun3CwjvAgHn3GRmBJSZxeEtxMvayKvthAQcBCWu4YyWQ5MXFiPEkCcpD2XBdxuV4",
  "key2": "B7BR28FuqgDPaW29MuUfCKojgVs1BiYamRRYuo8kdCJ2TwWa2mMCJLwaaqkLEZcvcFZzL8L1FfgfRosFKrZoZW2",
  "key3": "3x12CxAR2oftyWxikzabqc1b4HPVEfAQLpnvyXSJ3268o2F8iz52ryjbd7f8VXSwSZsTgnqrqREcDAiAJND6BqAw",
  "key4": "3MfXoPGJziuhEbXjfWohv9jRWPvkx8HZ3aGubPtdqqnBaboo3auy7sot2cy3sizwgug5NegcbK1MZg7dgUPGJUWy",
  "key5": "2UUjoertVKkDZw6Rp4brQ6WoEwNW4MTeyefEe6b8JGCah7LS9RYD3JPZ8Aou3T8kFHjKDkzEVhpkHVU3NWFeymSQ",
  "key6": "65fb8yQszehGzW7PyMyRb9CcrB1ZZCMHoEkgxnH7hmRJwP7FjL4Zcn9D5UcEqBnNvxpJ9MqgdB2v2nsoNXCSv7cQ",
  "key7": "4xdMht73QQpSvbVqqVjA6T1WpeTJLbXFYgvYBUZceZkzMRHNqD9fYg92cxGagrr2EGaMyLTaGvzeUM48z2tdbUTS",
  "key8": "4QZ8iERWNHiF7dmdzq1NSA58KhxBMNc9XbsKW6yad4rL9FLD2vbYpidPmWU2sEDiBoVJ32u51MGv7JVS1MtVw5kD",
  "key9": "5DwmftchocnaDDz3EoiFPJbTgAfh61N3fQRPdDo54V8NZK28LNQgqcLh1yMdhLgPBSktQC38uYmTRnuPSrpyeDUP",
  "key10": "McQxznqgqLuwqYmbm9t8ubxDC7C9teGAc5XfnphqZnCy2ih39hN3xyw4fo424GWoatNmMj5PLXq84QCBBRtbfK6",
  "key11": "2wLDHtStBkZSwRTxonaP5rWCkMCTAUM7oxDk5aTjMU8Jr5Kgp42HPDrP3XdWCWiuTX52BUrKtPCSvAj8B9CZ1cSf",
  "key12": "5CRsFAa2UiGdGyZCSqGNRxWfgVY5gqCt2usYzBNjPL9TFwmqaE1TWAMNcwYDBGFpycReQVoZn6AEBUo4Cpcjcj9A",
  "key13": "3uuKjpQ5Sc2bZF1pjQiE2sfX28o2r36QdzjssaPXQQMhEpRPvWo3ZpEQcs82oTUAmwyU2UK2gMHk8zjVZcVXayxm",
  "key14": "2GxD4Hn5Rk5yt5vH9MpNKSfTp6spESMouvdj72i5tdn92KuQiTzCYJcJiyuyBrKqHUTnKnWXXBno62tNqYWusCE9",
  "key15": "2ZfUAzHcF4iJ9y4EJtkAMJ9zrKwptBjW1rwvfhL2h6DmsexYdJ55feDkB6S17Ft1vWZDoegBgL7Y6PQPvMCS1j8j",
  "key16": "3rweJAVYwUQxwN9SYJxpikX19W6f7RXwTjU4SPCyGG55qku8hB7Un5y25FksytDxuxkJaGBWyFcy3Rzt6gYKEQhS",
  "key17": "FKeUh4ia5ZFDr1zTLiEdvPHb2xjBWCuGSSKLpR1MPedak12RYkFcuigfUgJG5zaAHATCPLkKKQDJmSdr5A1Ygid",
  "key18": "2KZsvwCquPphKV8QjpHHpV7MHAtaQmX48tQDXktDCusDwiTtqq8G6DU774qcxjPbFqNcDTxM55jjy3yrGYjmqMVo",
  "key19": "3z5zgaXz2D6xCAtSEzt5dPcsxwfymRpPh4rXKiiKKEm9uzSt2FLhKoCntQqGUE7CaarPh2NcAYXUFRWANcwAU6HX",
  "key20": "5bbgGFeek3pRXtU2aXEkvY1h525xmNzjiFbbhySiK633BoQwwGqJTeGupvAQXEmNB8g6dwL7ii5HCXPAT8JjCKeB",
  "key21": "32rAm9zpMkTSSBj3fbZxKm1GVsa8mpjoz9M2k1FYQMK1HSMgTQazkCjHznKicHNV8zBSvcHyJwifaQTAh5sfkVU3",
  "key22": "2oK3oKmstd6qjhomyYaYCD3j1VgvGiEAjzuuosj5cHzzYPUuZkp4ikuPnwheSBQq6AaZzXkJLm7eNAUSEUL8NTer",
  "key23": "pFekvkCmipuV1DZ6iLKaf2YjUkEYfTq9RmdomY8wXD8kKmJT8NkZCuEkQji3hDLgdkMeuteKZ59rDeqRxFvpo48",
  "key24": "4XDTjbJbEXrnfRkpmhGrUQn4aLoPdSw7xmkkGS9mykJ4WCdrXysoeNqsbkQyuX5e1S2NSNE83jJgRuLe5LjWRHwZ",
  "key25": "3JcufBMiP9eCPrVEvjWDosJkwvGx9UTCCofa8vCnZago2Eir8z5dBfSjudC5xPAFcBohRQCbaM4wFFpQz8sDQbBn",
  "key26": "Ai9avXzXVWbr5BiY8NgiK6rWuEwAKa9NtxJRJreejKX7pz7PEbsNUC165PUtMuxZq5fsjQyFw6sVMnnpsVrV2bj",
  "key27": "3M73ixaG2kLxsJ3RvGun3qcf5uyDZLKyttBpTsp9onXdDpXPMsZTCtKJtfDSKt1PiH1deMiQ5dqCwtbQm9g6U8i3",
  "key28": "4XTcjPYdMRXn8pcdsLnAMQ8bthRh66fgo9gbQSFV2cPMikaSjL8iYy31mYG4kqCCsEti2cQmVA6zzTwJj7w6rZHQ",
  "key29": "67KtY9CiEpRoLZ5oguvoH32om8ZVz9RZ85KgaHkDJ5HinEUqNVbQawgNWiMXoGNevp6L8Vqi98MHv5u58X4E8Kzn",
  "key30": "2hyfGAf8KQUfFT2LkQruY5DJzHYoVpQuq1rwsfbYWQNmXPw5JtgF2eS4tBiKRhjoytNb62qQ8eeDuMAa3DUDpTKm",
  "key31": "3WynJNhycwxuPchySdRdJUUzrN66a97CLHkPdxvuPeXhrP8HV3LJpxzcURXety9Ud2rpgULPfjvtv2g6VKxuGv3X",
  "key32": "3otCAw2pou1WiFYfzx1NuHMm98vzVxXjQJd78UTodtxwQeFnCkMjVVKdhRgmgf1UC7N9ZvEcbPvQ8fwdiUP45yQB",
  "key33": "27FmNvq8eyaKKxVbjSvdSEn7vbMtm7TCsu7f5hhSMaZPnVL5zmbaiyGyLuxAWhaHs7B1vdSnMVF55zrzTREGs1Ui",
  "key34": "c65pHnpoyRo9daacbgC7QUrm5sYqgvMNvbuvtNe2gpss7GbqLXNMoT2HRcPV7p83iHsiKDpa4vHNKqyCsBr4xvf",
  "key35": "37qYtoQbeuWMm2nLDi29rwnoVzcEwFY1ExfBgh4aTjCLXVu5JzbPCt9djcdkuQXdmzP36wbMwaWThw3zkuC59WLu",
  "key36": "2GfmK9Y2UjmL9wNUbd4VAwrb47GuXMym1inBbs6Wn7VYVynSCsVHsgXJzznWUedFkM8jjVezCN6RhC7WuewFrgjZ",
  "key37": "57FTxH7C6eMMuUUk1ib73WPVUL9xpikMy4WGHmrhSN3WbqUUq5Qv9uVbiuW5KfzJAnT4Rmwoqemcbv4HCUcsUNrd",
  "key38": "32LvyRJdwFJUfpK4ig7GmVDrPGhPGVSGnVvkxUeG2WsYWPwSWbyUr8Fq7csyaeZvWqix88L68TCAzvURawfPai6J",
  "key39": "4mbanMFUSHqUSgJzNg6yi3Dn2Rb5PtrfAfFG2fVm5WAh9aptbVQu4raj8NrJXdY4vn4yV5X2iNFwfjLuwSyrHZpE",
  "key40": "4vWJqgFKWg9cnwbPqqrv8DNGWZP2agAvaD4ZyS8H3Q6LNaE9WpHZghwQPCBAW6fb21BBZgAMEFmj7bUD94cDYod7",
  "key41": "5Zv32KTFkbE6AuUKEnbr7nAk6WjfJ3Gs5dZb5H7XmZXSgXiuDYYbZUDUQ5TH62vb1VqB5fpsii6P7Qd25SL9vQam",
  "key42": "3XeVnLCR2FvZxBFHuC9pGgQeLiDxx9ZzgeJ1BdAYBNB24QSPRhWW6A7wuvxjQpsLesTfpMFR1QirhTNyKMtiY6c5",
  "key43": "5RHZs26E5EzFW7A7J7XmRaNdjBQyMAHyCWYi7qeazZniZTwCGxiLpVUP6QVqaUFr34Ygzy9XgCjDzboecvfUjD6u",
  "key44": "2vtTBw3wbUr8WFJe855dtESiFrmMPtLFDUheMB4moj6jyjFZvmxaMC5YjP2DQeVuqkNjzV9vrm26YsKnErdR2Tw"
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
