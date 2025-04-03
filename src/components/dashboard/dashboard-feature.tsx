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
    "hDZgy2gEug3QQwK8xGnrPWAwmuvqW2t5MCYGvx1wtwgjjV7c5yWuVFKXR2gvm94Unh7a8hf6w9TiBzYrimMVBuA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WJbZPhsWs7oFAFvA9PTHhqC25CRDgzw4FyMSvbNX4vuieaWG6UNo1UpBHUs7PeMbcjbpyfU8aVHYm9PpZ5dkgMC",
  "key1": "5xaGz3gU41B6JwphY64i9d9LLLE9PnSsvrkivLfmukLDcynvvi1b822hHcvdBE8sec8C1K3eZSr7KD4gyZZdBoG4",
  "key2": "5k5Rx9jzNUaJPcpB3WhXUmzbegvkqWQdw2K2cJ7kvVdwkyAxbAUQfrWq2isGbBSGSwZfAQsZY3FnKnqpbpDfwtbe",
  "key3": "AZb5VLbwJJmFmsWBLJ3kPaTup9PZXKB42dDKBjuj7sHMa4FbMJddHKZ991v4iz1zwcFpQsTQJHbgCui8nAwPyJp",
  "key4": "YJVJESA96X8YMeKxGAimRnqyLxUFZFQUyTxmrci59vScCKi9qZGzXfWpATr2Ltr82g3ie9vV8UC9RfZ45fJL13T",
  "key5": "3iWyYXkmUvCDvbePjbmfjGZ3QTbPe9CyPiTXQwutjWCfmDVSG2YNFXj35rX8JPTuR5G5A2J8L6mRugY6L8XAoi1g",
  "key6": "55Vrysi3XzbTyiUTnKJWAhdDhYsSfZjYfEs7CthJ9zJXRhWB45MTDjJMVxJs9KhGEwkj4Pr3VDM8tS8AitMCn4tX",
  "key7": "2iFSnyL7kJU7SGMBKtmwap7TYKk6swyh4zqhVST43b89QwtpZdWG3t5a3x6cWfJB5qP8m1iwL7bMuyNsPQTCQAPZ",
  "key8": "5gpci6or8aERmemaQQxSvNaYysDD5iPY7XXhDb7LdeBMH16x5UkwpgPT6iEMJsAz3KiAV7xq6V6xfm1dDGRTLUJV",
  "key9": "4jo8xajFmsotSBFAGFXqyVmvYGZPUiPLyBUoCC5trgsoSrFgFuXjRANChhqKJRxJEKYPwvjkXy7BQxZ79b111uNo",
  "key10": "4PhbTeZFVYvLkuAhn2rcdD17JyASJrbtXkWJUjfFttsiz4Dx54LHFHQLoA9VNzJhXxNu5kdBeeLGM5NWfRojd82Y",
  "key11": "6XV5F9veSorb4tyTW25ZrYqzVRwF82oxpWyXuHRJkaUdE5t2sdaBrGoDT6TxQL5FM9a8ckdbFbijobLbgqxBvc3",
  "key12": "4NxaEGLSiEf2wEyfuFmbrXXCuoFPmrsUMuAU3K8VctkQTfkEeHiExHMzK7W9hQmgT1DK79xYWxBRyAg18gsTceb1",
  "key13": "4rLzyWpSyU8Tx8J9DuhubQdevKPEDuzPMnwKwRDLwUoEHaiJhvezpLaRD7ooSpirGsH34wzXQLzZYJMkYfUiDrpJ",
  "key14": "5ExXJ5er9ei3nkESw4BFjHmkuB3ySYT9KK373TYY9fyXhS2cTSyyeLAkTjx8H7CPZyh8M4HmvLmRossoxFnQmB7r",
  "key15": "2KNa2F2nQZ5PQYRUbQ4EeuLRkN8GYEtg1U37jgXt8MNGUUGgG9EznKvxKbH9tnmVxAw3VQbWcFmLoWaWsRMY55cx",
  "key16": "3QAbBFKE3PtPEJUMeBm1aG8Cjv7perY3yeAVNJ22EXZf4bG6UTJSZ6W2f56eSc3r3rVviBsBPC5fPMFQMfDkGZah",
  "key17": "5FGkgjPKdWfkBjEEqSbJT9abbCzaoixicKdZaPD6yqDu9ufJxDkuucVEEHQBgwDGjsQtrfux7BXukn7rjnrjKruZ",
  "key18": "4GFdw27EJjuNynMwKDN63v7UzavKazeZJD53qFzc1qe7HLLizyRXkdmHQ6sg63yCCn2kprRsnWBRHa6VKpTqHwmk",
  "key19": "51LspLerCUtk3wnvveF2thAuSGxaCyYDE8GqG75g9eacfRd4wjoyhmf2kYs8UyPdf1W4vSFWaiJpucDKFS7Rv73b",
  "key20": "WevysKU3jQpfnDDTRr3fgB3kxqXc4Vda6fjGuhknqVXp51MiMsm3ZcmAtuMBZMFctaUhgtyxuE7856MXsaEMMqT",
  "key21": "65vsW3pbkUdxuUKQH9y5a7Xg3Zjm8HCXk4k7akaU59dAwU9HDGVXBQRScny1X3jYi2WZZAevR4Mjh1PekE8VMBDa",
  "key22": "3fKUPYMguiuby5Gznq4tE9aPTfmzt3wmg2vDJWPN7Gb5Sajj1JGpsGzfhDRH3xTiWsgUSM1AqJ66HUn72t9EFpFh",
  "key23": "cbULaFSwGMVtQLLNExLj9tx9VazBVuJcXSAwoNEjaQpwDGqzKJpCYFheGD1ntpmU49cxdtXb5T8wMk7Cf6ze1vx",
  "key24": "3g2ZYc5NFxB9QezVmFUJFWrTvoLZP91kcLh4WcZQogfQsEmxDEpzyQeMALjyA3ouLePuiHab89FDMCUTfJ6PDEaH",
  "key25": "2zvfDNhE7uAczFYacJTEttyGwJ1QKWb7qrU3Abu3vZAM7ngZGKsreRdZHTcaAgXzVvTkUCRTZCcgMLHGMD3fTSCh",
  "key26": "2De5WRjEERYiyocLSBRrNSH8ddAkzWr8Lduh17kUPnN6m5WYphZnT18cPaYvb7vTvWWe1HqGKXjjhzquTyKQZkoS",
  "key27": "3vmMLPNYnBSkbM4Fr15DZatrPyw5wU1TMHk7xtbtKuKQBW5Wzdai2Brpu2WZBoPEuRHaF6ZYvWPQ7wvstEq4h5cs",
  "key28": "2kgzrwZ6ko8qRVE7uDruXabazPKgEGed7co7oreTizuVsCcSCy3LVVKbUh2qkUXm21BdmPZWZ5o4b86mxoaQEhWX",
  "key29": "3KDszdSLnTD9QVEeteyD62cc6vGCzmiJHMP2uzVbwDAzgHGXoGwCwBvny9b3yZ1kEJU5Eo2YgBtDY9sUYPscWcg",
  "key30": "Hcv2yy55faYYtKGRrMcEmnCz1ztYCEyckKrxujg9vig5NFhB5hnLeMQYmgkXcdNSecAFNRqcWTKJ7Hc5Mrqzt7W",
  "key31": "kuCtghngUsrjErqP9RnjWbmiiP1rD3V8dzJ3Jp6upoezHzUsR9UEiatyrsvnpiQeySX9V2oiFQXLBi4vTGEkUbc",
  "key32": "45JiEXsPur8jr5ex1jSoQrZPNXHkf1JkVKxfp5WETyUdxTkqDZpxRuqKyDQpfYrtNzXiPo1jqueDVuvkmrB31qYs",
  "key33": "3Y4rvtdyGuwuDqacDpCod9vaWNvgioDoChgJdp9iWy8FEcDNViiWSxkAAEAgAtp96C2aunDCVCZwMDuRqR3FKq3v",
  "key34": "2dvLsSZjxAKxc2CPGziL2nvKQLD89Ls12kSiz2rpHtFYYXWg7Vtdutd51UfxEpn3Mvv1QYxzkqoThuvpeZ6D9EBj",
  "key35": "2CQfnaCgpT6Q1CovkMkskbyhYkmnqvCAWQkfTYgVdm88cCzFGn4XjTgkaksMhxwKNmqAaevKWFNfbxvyzFPk4SYf",
  "key36": "56BWfAxMuYSGEz7oNh3Jw6Q6rFkkJfjLmfnk7eezjJ5kzDdBj1wmWjKzPvLD6naBpQM6tvySa153TEPXWrUyytjr",
  "key37": "5HhAcY9NhgpVvqNd6NkXDeJgyotkEKDmp48LkzRgj7kopsfQFpjCYEHsv5qGihTGaqoeQZ4QUK2EuqRYMS3oMBrX"
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
