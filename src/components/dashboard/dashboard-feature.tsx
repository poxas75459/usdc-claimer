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
    "4WTUp7UkGse6bo9VrGLCLyay2CmTFBdDBoVSDMws1UPPAYGHArz1xL64qb7MHV5eBg6icpz7hYdhbUqbfj8XQo4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FA13K2db5BQvmodmmjzNf9Ur76BfQanB2ZydvWrRtFYkU5dgL2UE8n3fJY2FUW61Hvzvkwhp8ffFNCyfaRZiULe",
  "key1": "5T15khzL8PMN5seCiio4eUf2z4bzKs21YJhEhDzq3EdKtcTGjrtgstDwxwEmxp7XzQQd3wwq1g5Seb9A1E8M8Jp3",
  "key2": "5tGh5mAjMUHnMuTxcfmUgGfH44zNE8WywCKuRWRvwBXHYDingEhmmW6JEyAT8gdKburFicZAZEFxHFv7B3kjfeWF",
  "key3": "UGKQPAvq4QvtMQ8o5ME1Tzbb4A9LUFLgYpxsutDWDgHWDdxo8z4rXHjZ3k47wgjFXcmYf2UWqNAepEZ1E7avoqd",
  "key4": "25N533Ghp1oh3xvq5rRtCoLi4Lv9xEXwghyNH9yeEERemmLX8yViqAXsDydtigpNCZMyTGTnKjZXBVe9QdetLQJX",
  "key5": "4ziEzqwCAGQxSRXsXzktJSAeLkkn5fX3roi6mUcMS3NwsEVfjDPzb9A3mT3uu8SyDKyf7CgCFDAHDGxEPyRC4F6z",
  "key6": "4yZCA3MWvNwfLBCSAjAZ7J6wNUi5SAL8gsihNgqiZD1g5Tk2fojDCjJdG631yNKuovkiNWetHJirBMCmvmcCGj7R",
  "key7": "5EWmZTusRNyyUhr5L8vuQkoFnwK3cyYabjj9bejuuJ9Yxfirzf1L6NmMS4YdpEvjycVJah3bjPuugsp9dZsDkkfy",
  "key8": "3jvcyYcBHmereNrAnKG7d7dfMs1tDAMNZ7XZc34Jr44aXLymbfL4oquFonGeaPQkiwkPh2hVmABYfg5cqEVTCKJt",
  "key9": "2Cyuwpnk4duMZ5fYEBP7uUJUV1z4bEnZyyB8znAAu17xKPFLeFegoCFvEwdgLBZD1DVdEQDHppuYUVfL2HRnjdax",
  "key10": "dVnbfzBgzVXCVeoRodcD6HELmPs8vpQtKvNsYr1HbBkPzoA2A5ToKuiA3C1egkDUDzDzjbeSnDkf85rZzSpTxc5",
  "key11": "4eodVffmDdZHqQxgWhgmZzcu9zszkg1vHr7teJxT94Zj1jwrWZpmBcGFHAb13Woi28rEzdnHcfvstsg3bCCdYu4X",
  "key12": "3SbWGpozXMTcnyei9GAc5ABA8RNwFdWBhmt172fwiAhSF6MyvWEkD3vsftm3yFnrNm4uUfHHGbEMBb6D2sRCntLR",
  "key13": "sAhtzxNcRr9AEUntS7fawtbpuLZHHwkpeSA95AkaqBUM419wjDks9o79aMaiM1jCBpq4ok5MwxL8bXJ4WGSTRup",
  "key14": "oMeAwASKJJLQEuGx8NdUYJtJSWabKzZoRUzKUDWvBKS3hpTFTrLLWmiA6F4mnmyby4uGvbQWJEZtUHm68FC6jKw",
  "key15": "s4LAHvYM2MrrfEtvAwHn5npaZWsf9Lt6ojCkqvKTk5Tk3gpJ2oEtZweM879ePgera6YszNyqVEn5zfN26LB7rtJ",
  "key16": "4YzdmKh6VnFpiY4rF3V49f68xeWe86rivqH4vE2sL5fUvLMNxjeP3ato76DPpc77HKzaZuA9FLZL1Fcra6X5taRw",
  "key17": "2vrnjmZ9digD6krW94Sy9YfSZag2q7z8fytx3bQXGPskBUcJCWvk8DLocjfCjgcToQgqgJn81DPCtakB9XUgtsHn",
  "key18": "5KuKJHLkZ43oceukp7P9afH8rpQ6EeEbFfkwCtovWZGAeGuS2B2g5aVLrVSqySCB8KiHSgqkt6EUUjzz8m8PGBvt",
  "key19": "wbRy9RH4uENwZw4o5hiuuRjJxLKo2BQxepXpKLT3TEcuBkoGpL2vRPCWD63sQppX9FqX7nA6hUtbRqUWq5kVniJ",
  "key20": "3yVYbgt1p13cFkXwYi5vtgkUevHBHfdgHsJjSMMp86xz8MbLihjEPnZrn82LtoPdbiodcTzYCAMZ3Tg7TmL3VBAL",
  "key21": "4UiUvTEWsuJEbCtAdfeN884oHPnL2dVWL9jrSfF2HM8CBYrAkui1xfnh1T941qbVtzppAij57Xxqia5yWPjAk2Lb",
  "key22": "399yjctRC7AxMFDZQ3BbCZ5wnawgn2Xa2LHVfpiC8JhUpR78PsCLuNEXRKxYmw9WE7E3QWUABAAiq6xoMXW7Aiza",
  "key23": "4SgizPxfQrn7KA4DJG4ET6EmivbJSzhvECqymxzXNaDARAxGMenURVt8jPns7jfPGGVHosV55A3q8nM7v31y5egb",
  "key24": "5ewF853FfCGKGzbm5fYrcdE9JA46axSQpRraDe6snfTVubhrHJukLymsRz9Tn3T1HbNGDURoHQLPFPDtPQUgPs5y",
  "key25": "4JmhGvgoobd4MJvZQPq9HKBqbLgBimPkVVmrufrPfagJVL41iJz7FCfdEv7aLXWe6FoJH9VzGw2B1F77RBsR1L3E",
  "key26": "3Vecv9VVNksxJxfTu8t3PXR6DtM3tTSptob8YMhYt2R2JtnwMkDYNKktWsPkgDG7ZPddMpuqK1HLuMdyT7qhB9kT",
  "key27": "3DxiPu6nmV6fcHx4BGQVEZMPrGnZGb7Wku1wMbQ3KJyzUu1rrM74XEDSsvCkMULYfy6Cm8DN1yKDq9Q6oZSvzYZd",
  "key28": "3sQ6uyaG8a25CSEPn552BQ71LypNM3PvujyYUtX9NL265gH4hHD4T4UBeZBUDn8ZCZfcfCcUxkav4YNsD2ANjbBh",
  "key29": "MLXh7gGuUpYv268hLrLXFLf5qvePesR4hWevPmznMQ4izJvXg4NwDAAcbUdX22mnhq8G5QdCjH7Gx2J8R8rPJsb",
  "key30": "4wCPdZKsvmo9WPn1ndB2FYezvdwuGcaVAcX5u6MvnYce9dHb4GWDdeTCJdf95aqdydmzzGVkS6NnHH5514yzRsZT",
  "key31": "2N3VBygAt3eWh1RATqRGRGz4hqTfz9Kg4PyHa9mjk3UBVhabMnguvkrMYik4h2j1U9KtPp1mm5tDrFBevW6CxeZx",
  "key32": "5q615FVZvEP7xdP982gCKqqV477PrjtJSjbBMyk6Y4uf1R9jGoYuYFqjwGYU8TNKWWz5VTJsZUhpEECoESmkFkBz"
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
