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
    "558ojTKgYi4gLTWKY4zfdRZo4q5isJTm9hUQLzZsTKLoTfTmuufst2rN6FHHhMxuicL2TPwJ6vesQDxUrDP5aYEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ww6Zjqu6VWc41TQM28RjdmpA8bwPsQf1PzitJUCbhUSZpyk5e1WYtDkGpeNT8YbQkUD17VmDFVQgTuqdAGhkXwE",
  "key1": "3nQk12ZVujAu8sEuRWcKYdNiSQBsxuTSbkMFiMmT1oCZRGMk5tsQyHKTYipKi2zmceFECnsDJYUVVzgtidMSYtjF",
  "key2": "235w5stzSZUdCV3VWXmMkMvLLRJfoup6HhieEsi4rybEHPgWxvGo1t5winPxytVN59t11TnEhCmpVR9xCZcjzDo2",
  "key3": "47DLB8dBTX7H1rcjYhLEFAU3LPLm9cenCTGANadWz1XUbj2jdifTXXRvYfwcrgHWHVV99uKTdVgJXfdsk7m638ba",
  "key4": "2Q4iq6bK7VdXW7cCvfDDYKpuvrNiQbMa6agrwzAPaZxgxrLZQ9W7qBnaTMTKcRfd5S3fQXj7XZy395pp3LmphAXs",
  "key5": "471sTZ4X6MyLTyNuMrQQrAaj83y8PbW5JjT7rQvJEkHtEaK7LGBcsL3SoNPantTY3XEQHYzHBdkGNfv8EftCX9LX",
  "key6": "2a9TaNDgqPbKzrjgwhiat5W2dtCYBHvwieA8MdwyoAZ85ejThcsERsxuqfEzRYYaaY8kcW4y6vJa7qYxECcX1e2t",
  "key7": "5ZPiToxXbcgNjmYnUdTEHQa9G5mNcVgMc9H84V3tk3HhiHFu1GjkDmTPsZDCHFBc8Y44JVAginnr8Swd9WGWJPZW",
  "key8": "64KgVLs5u8K6bfq9xoekpz7VsqH6wjRbnYyLT1YPPPk66hSE2XhTf2vGAAzBn7t5ADmkH43GTSSMTaidB7Dp5tQX",
  "key9": "2htQErfDXSowHnLD1d2zxZCWToZfEWo6ZQ8TJaasR4JVrHnZnounYMkwTidJfqCZFEDnf1GLvqTK4XVPMuPhX53N",
  "key10": "64SM9ZZW86H1pVA3V818Q5GayiDYhAYYzfvWdngWmrmTBj3ZMKh3CfMdMrv1U97urUs39wcyqF8deT9TNyz6DxbG",
  "key11": "2kjBqF8smjW1D1AjcEGuCkGDJ3Xxu2v6WMvpJ6qHjPivrq78AYyDq3RnWA6K25EcvvnLcgk58DNvb4t4Dsr3ERDX",
  "key12": "AErG2JaLNeJuKhwFUdT19ThrzP2vmEQYd1VkpRZPzUuqtvo88m1xwU2KbhxoBFqPan19gd3juxWt2THzc8TmbVF",
  "key13": "i67dyUwUpcce1PWLZx2QCr441PY4GUoHCWJrLrwecDPKSveSp9xZVThuZZLfWtYjJZFShf7CnrVXwrGPbzamxPY",
  "key14": "2E6tMErNoGYDPLpPtTDRch59uGx3FvJRKzZTLUVTDxgLSiRYRmehJcW7JdExMni4vje7dMdwksomdJBFrz3d3dZS",
  "key15": "57LvcHt2G3QNbATtMw8hDrpnEDRfwGjudpZByCRaWbnTJD35kDqgqmmK8pewHmerKarrpAuuKKK2qZMmpSKXfDyv",
  "key16": "SCd2P3MFXznrCHYYat5Ss6WtXq97HNbhtyAqVSTHpthzqRfZTFhjwdUGq8EYhmsBJpdPcwRBoKoB6kbECQQLSJq",
  "key17": "35JdpFRyrcSbrH9GaYGAj6KNFBQs9uNNQ1To7LHaFBwYdfW1ijDNPfHsZMgYsWxNvoFnQ16z7mY5N2mEhSTeacqq",
  "key18": "3BRcDSQspjH1NVZ8ptWrenzgADtK4qTXLQMsxeexh2jegxJZ1w8v5eyXWFxwVMBqciuduKjSBNSLXenTujVXCfmB",
  "key19": "3WXjhgKoPMyZz9wHP2kdvqfVXuXXMuuoF7QCHpjjCoz3TxDYZeKztJoZJQ7fJjFstFkFv7TY6sEzSzxQ7hDYoiz3",
  "key20": "51AtgbqijTWNBkmYr3qj35K65CenUB7e9zbiRgrtroPfr5x3t8h1RpseLNZCnSNu9aCrjKQFbcpF62ZbQqXjFuwR",
  "key21": "5vkKEW3Re5otnB4ooN7tvyYGQGiwSXvFk4dyY9azG6GcRPX6MwB2H7VajyQiNmZzkiTKmqhWB4tuukqjJ2CSgwni",
  "key22": "5UBHP6cBaesrDZG3Tu16J16pYFxuFq2eXFZmvjgX9cJ7Sp3cafg4wx6uM6ae6iXjHJyN411ZfAH7VwWKrLNKXJpt",
  "key23": "5v9rdy1KrSS6AhThhZtw4jobGuU4vwU3hgKY3Fk84R4EsRgR9VWr71L8NgCoQ8d8sdMKdLSUN5uczTvz2LouvAyB",
  "key24": "2YK41FxQ6GqKaLkyYzpSmAgX4dbPAvPkXquUiw7ZHhxhD58MMrSBSaBRJ68zJMntQBgmqUg4XQH677NQvCEhcEuS",
  "key25": "5BktWrQEW2o4y6tZ5TKX2MztsMFRyGQTYJXh5NqcAukpcn8a5xJn8eMdU6jDtYYAjFFuMHyTqddkXfFHZu7BgQoU",
  "key26": "66ENZhaB9iN1XMWmEctpmFJDpPpGH9M6XwGdB3Dg1XWjMSWdmYhFR6pbuGTstX5WWweq2x2zHsPHFiTWcjENSwDc",
  "key27": "5so4uhAt4SdGQKRXJrcMrGrTxpdfRwfaisWwxSrELE47qbLef9bQPogaSARcHg1F3kASEpeZJtRMgdG9H9BTpfr3",
  "key28": "57CcePD4ep5WV4ASSQRijEMEbPthcF5m4gWaU2r72FujuMQjTKtEHqw8rDG9JkEhKaPWvQRUANshqHJy6uWgizdR",
  "key29": "3kZPsW24S6LnQ2Wnt2qDAcB1QuHkNB5ZzPQJvGebzcwUiahfdNXaesoUCjC953m7RERnCWMmJxrfyWTWWRaFhUZA",
  "key30": "4qxXYozV6fDWs95kNrgWNR4NgYJUczfQ64iGiRzqXqk3fzNk2diFmP4PaB1a9VjMZHvBRj4Eg15NkRGV8b3zkVjV",
  "key31": "DdUYJdNPewJuEevTUTLcfkW1B9QC9q1fyM73aDo2LMFZ5m2u9UXEruzHEWRahYMNfviju1sh4g6pRwkpzpBK8y4",
  "key32": "5p3QiJUQSpuNFGixpJVqdL7dQ6yKe5TSHsjAzAGotVV2iwEm1r8Ae5t3NaSvrhk7MwrhnDyr5iRoqtEx3a4876fu",
  "key33": "65HrBLJSGxKmzHpfqCJsiHrbG6hHh4yggB6DR4sdiQLgrayfWiBsWArHebsxA7wN2SEdb6uNoTGnf4zvTQbuPL9N",
  "key34": "BYLrYxM6CHEAku9udSRsXV77Lg9L6h6ERs4oVst5hFERkmUAm2PrKmV53sG964WFDMSggC8TEEqZkV32txY9pYZ",
  "key35": "XpU76kRbME7bqjre37B2bpSos8zhqD9pSsKbkGyxUzRerXinMZtrrBypGtX9gXKYddcjtQqziys6Vs1MgK94D1i",
  "key36": "E9qeFtSM1ZL1iKNMCTt2XwUrwnpGXg3CKRa9r5Lk89MYqnaQMe42iBasxv6xrpmFgsRii22Nhd6AUynfqjYDp9f",
  "key37": "5PV9kmnpEgA2V6MBiFDzmBS7W4gmDqoQjFTgpLzzbJopcSw9HoGuofWW2dwig3f2zCUBKtNrAbsbUHaYy7sLwTSn",
  "key38": "iTvkZrw6Kvtd6HE2vjLgzaM3BPLCox7hC7FeschuQNNNQRewzNjMFybyky7YFTiuBHsRTtiFeKJqpqYUN45B9WW",
  "key39": "4LgvkMsVrcZ6rRXS1UMzBvEZRCgDrCpuEmcuLA1HidbmYigbGGofSzBwa4TGvdQQJhkyvMfVKomRQLzb5un1cRrD",
  "key40": "4i6pjzw4QgxXydSjdq47f26zERLF5nAMjnU9EWdyhmzUR6KJcJQg2rrP3UeKtubu4u8rEUMC53EWPi2j5LcK4V47",
  "key41": "4LZ1GphUVyptEMSPMA7DyP4VtWtXCKYnUWA2k8nbkjYVqRd1sfHqgFfyX4Gg7fSrGQ5k7daUTe4sz2ffVziFqktr",
  "key42": "58pTHyrypgktJN7uGMsUoyfT16ndRdiPTBhfGQNo7PNbJ54Tp8wow8JN1P7kVBDFht7dRz5y3RqTYpFon8tqLoJK"
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
