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
    "5bsNuTGiBVGkMR9pMLpJebrf2pmwSURtdubSDjsTUSjwzq71ivEpVpwxJFGRJL57eb7jzCE3jsusCQdMJBqPzJus"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rvgwMngDRPxJZyr52cXqQGCS2Hfbgr9UNW1dvhK4wm8Nq4RmKLgURxJWVuJVovEoyB1swjh1YmsYZ2p6AJANirr",
  "key1": "4y8dRgitgga4XFSxKJrEJZzUKNa3X6okvXDbxujFTZhXrSStFM1P4NzF19PCWLpLhV6GWTf8EpEuBEkgceBBTWwJ",
  "key2": "4wpdaBVaxCaAzz6ncxtx7VGSh6vLMK1j9EggQCp1WRgxVVM6xTG14AY2oZGNdAJxFJeLbyLE83yRUTECn5uxP3Kq",
  "key3": "63edPzQ3GjM63wETNCqCpDkbcKAerJhGZo1FBxqJNQ27zm8h9aZUHnu2vttjGssbgj7qCavW4vRFD6h4F8gtK4Px",
  "key4": "2zis8AnBZFHudGNikA4TtbQWczGEA3aHm7UcYQNkA46679tzDrVcH814HDTGqB4eQwuv6x6qHsY18E7YJKRZQAb6",
  "key5": "3Gfd55LgSVKpedRZYkbCLPsvup4P3SWeH6AjaBBk9PfA9HDnDgNQYQPJ7FDT71zMgdyBxQDKCuz3iyruvqqSyerE",
  "key6": "2RXNEF3Rgq66hurP41xgUBeyUcZanoHmoeiC1gmbLLCx3hxVMN8dgdmefUTz2PmZTYoBPN3N6igPDZpdo8smaZjY",
  "key7": "4tYRHBnh5iJsFwnEiZZW5ABa9gJYyaUpTxrtYAviQaj1CSUrNBQVV8vZnYdpVXBKf25nPpPLvqsZP2iR68wBnF5n",
  "key8": "3W5E7A4efSewPBzTDhjN5jzyYDHJD4zphwzWjCEEYM9ciQRerPeikzXFTKYpz69c8izyKYJsvPcSU2rHcFe5ZJam",
  "key9": "3GrHKdiZtcqibQwrkyZ1rvGqnDPEwmuJL5vGiGFskrzBwmYCepcRRrLk78THfFEPRB1oaWrEE1Bt6g4MteXnsacR",
  "key10": "2mDVkN63QjPbGZcCDWF7RSrBmMKuTB21t2tc5toSoNLi7jrBjxdwqPXbz64gaHzZQazy7AFWAwcw62cGDtMbC77e",
  "key11": "3LKhJniFLwVLm28AdanVKrVqL9q5cDdP8d8RDx4SJF3gufWuYLJiqarMXUSyXkHopHxmc8vdky9fBrMnsiur2vth",
  "key12": "qTkM8XFZSWpDTGYFCKLmzVcoR6KoKTbDWRNAekVaGuKaBL4vm81mjo78qTNA34JNZT32vREqh34XCqMfnkVTRwA",
  "key13": "5BdG7YR4NQT4Mq2VwLFKCc8RVcGD85ThT8yYwSYraJNb2UaEzaFwqwYmPPMVgmaDybvZMqU9Z9mRGpDMKTw6KTZp",
  "key14": "2uvo6Y36j5KTX497ocUVjy9XaWZsPG4HVT2wLSnwUqV9MaDdWt118Nz1uTPucAwqsLu2SPBqEqPo7GEruBwGABfT",
  "key15": "2xtY32hhZRDEtEjcraHAVjeebeJkjDKE8ko4eNSvLfasGxdazyFD9YrNu2pPN6Vr16UPyDF9iH4fRFwg6LeTq8xW",
  "key16": "2wimQygqEoWRR4c84tjAzuhNLg4bhdGczzRbP1iQ7V7385qGiKfRsGRBqmgvMJLUoAkvzBKjqo7iXNYHN3Z11t58",
  "key17": "2sNRXR4GkrdbQprqG9BBXzsC8NLXbKReM2Xd3DKmGRnvsjKAP1MnPhRrJyUAjMtGfsJuSzBMYZNrUG1MyCbKY1YR",
  "key18": "xE3mDr8Qfwb1qoA8HurQrh3Dgc2QHWgRqTBxrxUDLjBM26RRyq4isgXAoy12eL6GizQfeYPtPo7LSkPULm17LGB",
  "key19": "WvjndZhrmnkcZ1Y4dyhMSLW12VxqyXHAmBGQUjKU2j26R3Gdvvv32HW4HTNKnQsaqut13Ds3dKQfvKcZwiSXKYM",
  "key20": "648HCiCXUFZoeyc7pJVarxysUdzeLU8a9HywjFbBACVriUMis3v6hn6hMruKMoGpiwMZtC74majyxAEB7Q7Ja9t7",
  "key21": "4UuLHtJHGsRhzdgpcx6ft7YW9oZAFN3P1VwrNSwot3BEdiCQKv6BnqdiQMkhw8zodurn7TfB8BnBHzNYdimhUDfF",
  "key22": "2FZE4kc1BPfxKftc6mwWDYftvgcCwKVdbA1y81f6AqWFCdKPjaeBq3a9QyYB8vWQBxkq1oGYZNzwKdvAnzUmLumx",
  "key23": "4UvBhSfEWEfJFW47TcFkjm9hRgt3U4EjVLryGURC925DpdRCGNX2TqKhfhDZRHpM5NYLMfJ3fQKaoWLPL2QjgRKc",
  "key24": "4wZqTfTaMHJxn5qGy5g7jHMdxpNzUWQKDQkQpZLcJvn4jEDgnwgR3FCoKPbh3wsEkGcgQZ4GBKMfdKq5gQFu9id5",
  "key25": "2aL6GMY9eEpCUCnHHvcYiTPytqa7cWKbpMUQESoKF4SKz5hN7CJ128Wz8axfRkPPvntSZMQfg1qTjdESo2imLNZy",
  "key26": "23GnAWTY3QumZBxRVYXQtBsxLKpEANrgCoHbhi3ohaGUsR8aThr9HS71tSnfdUfnXJjTXuqbSMBGShkUUHYp6vfi",
  "key27": "2wt7VxWY7CWaK3qeuJ6u7DsANed61XWpdCbPPEoBGr6CGZCJAQhhsEbZbyML1QWjrBmEuN9DPfV5dMyB7aZbC5yj",
  "key28": "4nCTSnqzFexjhCYaYsj2dYrrFjPTEyL1qk74mGLiYDmqnC7puJ5XCgwbzCEDddhjrPaVjYYJfyrEtKdKPYJnbvGY",
  "key29": "5Es35HqjakjhGj2sBTs8exj4mQ9X2hCNcQiJ9XkZrrCNkis5oh6smb6s7FCHz4nDberKanVqkto5RoRY6gGgtiJQ",
  "key30": "5Z6uAhXVukRdkboyDqbF4Lv8FSSqHmBk5dBRpex8UZUvpZRiQeFDqF9AsutVhRRfZ797MJitxwPheiL9Yqa2cmSq",
  "key31": "3QwqCeDfoVm4zzYiUwYFhWdkTRnQWVw18r83HXFMTB4cLujDnsaAhdzKsZmGauhyYne74PzucFHAUvnnpSSk1T6w",
  "key32": "4VeB8jTmgwT9Z2goPgn45bsCLgu1bzVZ1agmj4yhW48Q1buTriuupERojtYQw34j9Pucdg4YFWqjUsVh8XT9UKJZ",
  "key33": "4q1urMpUAXQUo1VGXLtHTKPNEQRzyMYNkmEaQizMud8Zf8HGnoN6Uy72tF67V1PsrMf8THRuzV4sNzxW7NjH2h7W",
  "key34": "4V6EpZFHsVm3D9yE6XCzL8DuW1FS1CrFhztKo151JpXoyMNTdpYK9fZqXmcbLmHmqLV4fCFynHtbKFTeEc6GeRKU",
  "key35": "5Yfwv2kNuYuKcEFNQoGUb8SiQEPJXutpvwek7bQ3CqP4F7jUwfZTpnc1KXv2dctc7axcJzLTpqCz3UwpEV6oVUrq",
  "key36": "5UKcm85YGMiHiuVfZu28xNSuZX8k9nwSYF1Kc2mWMBfFFVUFnkUtc3pv8KEyZevSS7QavNPkfVtYhXqVuwYCx5zx"
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
