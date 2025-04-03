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
    "3wH7bnYbUyRcPSwncigEmjGvRRcs4YTVDiFz9JDYt1bUFrjmPrZBatVVSRUbNqTfHzfkiKDiBMyxtXttSN7MCvJd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XUCaNi1RfWDJntvDLNXnzhpZnB5KCrpK4QddnwUfB31mGkxLPcYyxVbAjNqJ483tFv326iLxV5GyenCQdpxhnoG",
  "key1": "2xnkgqmQ1PhbEQG2oXdfDw7cCQ9s1Y4cbViuC5Eno6ve7QhTwb5FhHPSALF56oSVV78YZxxq9tG8JAvHmp24XMp8",
  "key2": "5dmTa6r5vBuXpKFL3RissrbvP1vKNaLRnJ2DW1hAQw8LHroU8GCxkqWrK7MrYN2UFA3baC8Gvabah7o2KMVTFafm",
  "key3": "4c9g9yLph4cGJzAgoZTbRThp71izKzqMkzXGpDikkz1JafQuiu86TxpjubWJRx4XvK57LUk2DL8EXjXhDMgSDc8S",
  "key4": "fVjRxFmsxxyFK5nkfPQ4b89VfEha4JeWtqkn33ubnKqLMztAW5Jwf4RPVWrWtwTV7VwRh7LkzrRL7UzxwGFNoeq",
  "key5": "39a3DSV61iVPcoD7fnXaUHWgpqQzUcYzhYkuSPTiEohHWxjRGwefFU8QoLCtwLhQumEMVx98Qg2DCAhRTtiLubfm",
  "key6": "ANNY2Dt4ocwmfhrhuKq8MHqfpAiwwRWuSoqBHUBrQ9xDvr842Mpy12rxKNdo4bWMoneUs9c8XRBmeKVvQ2u5HoY",
  "key7": "5CNmiw76CrfzWUfvK94DW6YiMfi33DLurtoimFE5AExTUAAvcGWCL2FVxzG86tp9fKW3fiPt9xnbKWMxvS8V8e5X",
  "key8": "zc7sL9NDLRwNwaq6XavfQgkkjZ9M4AYjThj1HPoMENbzPty44Ac96WPQUBb8MHgrLZyxpFYxPnAUGX1pUgKURxp",
  "key9": "qag8LgduVcVJZP8uQufH1zbKMjjKQYJCQAK1cazcB6wgCkEpi1DQ6pM22RBqQYRaJWEoRUtQKhQohszJtDBtMks",
  "key10": "41YYT61YMJGbNco3r7M2NQPqoGr1FRUrsUWmqiXdnTHLRYMHFeH8WLZAnfemxgikuR6XLXDk5qWLLTKpRKYjpwnA",
  "key11": "2m68Pxr5QD424j92kJm5F4tMmDcQj7tzuWZDmrQvWpbAtqbZ33Jc1s7VG9wPHu19b3kgM35DGXLPTE4SP5KGPbzf",
  "key12": "5sUyTuXRwCxdHCn4Pcv3NYAnFeSomSPiwCbGXCPwwTs5NjM51wjJC6j5DqJniq5rjTD3j87NjDSu4zULE227BpRt",
  "key13": "4mHsPJQLi7V4AcSv9NgRmSP3w64nVBuoYL7dY1s4oozM3PVMVy277PbFQsvP3ZiNQmJrSsArDt77DLrZUvUAUJAU",
  "key14": "3LEo4WiztsNMXovY1wZ3aRsQ468kWjFSrdq1sPUcoetLYy3z3Eaykv6aLZpWftrVhwgTcDNssRHDhar8V2hUYXhr",
  "key15": "3y2D1WNnejgZZTJjyHueHhZFvqi1wWPAKn69d5yhU1mVrbhAFzh2JFKEXxtJXExtU3MstzHbTJF9oZi65Q5YkWfV",
  "key16": "z9QTuLBcm9c6JEVdREs3gAw4NZaZecKVRDRSMsePwWWfShAuy9eGNbSv7BL2KVMpt22PdbyYV641DdZejAaHwfv",
  "key17": "543C1SjpVSmTTmtEHgFkz7JVGuwkbURiCUAtV9SjPbXzUwDZcXtCsw274QdsmKh3x42xzuDRtaXNLjzTPp1RUiuc",
  "key18": "2Yii5inyXRXaDDLbWnpMW6Qqbv4yuHSoUaVLx6NXrgVdSkEocD6fLZRuxrzhCubtkdqa43o5qYEM78R6MJXV7kqi",
  "key19": "2jk2YvrFdjxCgwcxDmv6UEu81RaXAmiBYGkK2AC2b1sET7VLU4JCFXiA4F65fCuUFqHHBuvJr4vBiJd3SSg9dxeY",
  "key20": "4modQaSWFQYvwFHbrWSGM4vit93Nt3QXz64dHSxqJu9f2u75FhybmXsyDZuMmLa1F3c3zpfhDLQDH2sw7SewzoBY",
  "key21": "2mmQRv38P4WVjdAvsvT26XbnYVu3bCYkuofKv8ZeYjoHZEu9GamXYpaxE9EwzJTNPrE4RdER1uRX4L8LwjRGAMea",
  "key22": "272iL6XSodtcM8hJRkU9QpiuKVov4a6Ugp3EezHtgm5AnZwVA4JHZyxkLrGsSUzYKCf26zx9xd7yerPKAnMBipsf",
  "key23": "4coTYRCyERmjAkGSBEQMbTarZS4apVnHdN6PvnomdHxq6AsihFx1qbpuaCq4zjYxAtXJveEfz7c7hgtreRP7zyQ1",
  "key24": "56h5h3aGVJ6gUUBsrMhUSjomhTeXpFioW1Ua8KPxwwEJE3gKfsg9L127Z7sZ83q1cwhxxdeR6RnjDsxH9g98jHAt",
  "key25": "2D2hsZHQho9mqLqqLiDy2dzvfmVjFd6UUskscAaibUUe7Mwb4qNYbcU8KywTx5N88xNUijF4hDhU28fadAoQmoK7",
  "key26": "HtuX6fRKXVRJ8YjJaqpUfQ77XsoGn8i9r6iBoyYEqMTxw81qbgUyuN8qZ5eGP2LpKk1Nk7goVsncQXQQ5nk1hQv",
  "key27": "4nBDa9q4jCh8nP6C2DaKGwMCPbg7mREMCAomk9semKETxUWCyLv5hw765rC4rFGCx6ZEFo5g37JZB1ei6QVCi4Na",
  "key28": "2fZbb6hjiEr8gad7tFAStmnGxoY8f621BPMzfpwDHJ1nywrjgmcnkC3LEU4Lrj75ftd9HYEQzaKrc2t3C7qtVoBb",
  "key29": "4DtrhBALoTR2sz1ysTbvVhGgmCvCEtNZR8g9kdvLxLKZq2mV4Dtfa4YwvGNx1HMktTbtxXkmV82LdPwAtirSdhwd",
  "key30": "3P8SCWam52poChbcEgUtSF45tJ3icY8SMKQL41s2DXV7VmMysJGXRDeCdNqupyTnf3UJ5MkP8zLCHBjYJzdmKNGB",
  "key31": "kT1PUQxPiErr7MmRjCpfhTD1gbqTBzwugUTM5NMuzETfyHYKsygH8TWoB1UJvLDZPyYVRANgiYa82DuLBhpbSdr",
  "key32": "4Dtd65bcx1prJrVJVzP1RofVwYMygT4CpvUBjbqVrLprng6hmpusV9PDRf5KafCNjLXaVShUtbE73PxSKJPQ8wgy",
  "key33": "3zF3DWNjFFrBYuJtTs4ZC9N2t6KRKbXH3Bfh7kHJMtReGFFf7UcvKDnep8FMSGirZ2SeRiDq8P3gEHxcv7rMrAkJ",
  "key34": "G3KCdE4YyrPSUbPFd5uAYsZQCUfq9tE2huNimw1aEnEefqZr4xXDiaq7G6uBzhV4XVMb8jJtJ8sm3ZNqsfAUFrv",
  "key35": "JJr1tCunzpNaNamqhWUubSYGqEwmPdt8vBTQKb5htHXec3QBrqE8644d68HjyaJ1rvk3u29M7JGE7XyfAfvZjzc",
  "key36": "2Pbp2GeS47KhaqLajo5x5WL5ho2MK7947FWT5LtTALmyusJGV9jh2NAS1YTE2eKT9Rhn3VCkwcTTTcTvcEj35ff2",
  "key37": "4ApWdhPqmUE9tsJp8axFHhdrLgSuTvzYqzsbqkLDWtrm4bq6dT6zzmj5R9bMK5dCtcvVBmAk6ZiQQ9rixniteDVH",
  "key38": "3yvpYbsFs4WgKb2yyynNVbM3vMyRZkz6Gy1BKSgYcrFi5oyAoMNfwYW3PjKABMMkcuYVZUahFaDZcV17JoNuUuZY",
  "key39": "2jx7GDhvLrE5VLJckfbh5sWzitpzrompMXj1nByXEzndCWFZXejXsMAFyzkHpcEbkjjTCQb3LMpz66RKNHdgk2wn",
  "key40": "3zjtuh8mgZmvFqoZu8J24zFYwqukh576yzZu3SkkdWRamiqAXUqFTtA3UEsV6LnMNYFxbG1GbnmhfawGbeQ9JtgE",
  "key41": "45sWWmhi1vAYgNMxmPT7icAGttn94rJnVTjwehq8KeyDBqgzoy47NMRS1J47MgBADSQAvqW5pVgtCLRrgEEvsMBt",
  "key42": "4g2ZinzDu2cbHUKLec9H4MH5jM8gThK47Kno2LqMvxezhkqnqdGk5FM6TXrDHMdB6DQ3HqWw6jBA8ZazssQ3joMd",
  "key43": "SwUs4DW2zs6yeJeT6i3RAMqc4FUmrAtjUYkQUWJk1kWmvDBopVAbJmXSjxnEpgubxR4tXFEEBRo2sXLgEXtCQK1",
  "key44": "2dABxSHidGNXj9FX25zrUjqJmQeZ8SA2VJSBEBnc4M7RRiVoEz9JRYe1Kyy8Vaoz9QeeHNG2bFnZTjP1yDontWyF",
  "key45": "3KFA7nnpHqGcuqsNSa6k2R2BM6Z7XNcBYmKekUi3jeAJb2EXaNivezchERwb2Mid5Jdx3xj9qZaBQ66XBEeUjmEN",
  "key46": "4hui14Ttrr36aUWp84YJSzsNtqB8iFKSEcrkLY2uHnW2B2ssYbUvSKaVgPtZocT7S7VgrcLe9DLBeEhGUpdLeyA5",
  "key47": "5yWnfhtDV1Gf5fypEArU4UWX7mFNHhsu2ntD2kJUgVdCb597sRBwciodh394eR6hXdRPo44a6jnyDHQZg4k9wQDq"
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
