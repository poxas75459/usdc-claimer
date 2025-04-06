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
    "3koBkheva6RnztHXyihCd9Z6cweRe7Xe5DRSYVnfkPHcKQkFhTzXKcY7sowVEXNAAENtBue5f9HkCE6HDha7uygc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n28ACkcgE6F2r2MxnpXa2eNpuFzNH3bxUwszhZ7Cm715dZFPn8MpWrzkp5fRy6GfzeZ9f9D5VJfbq12EjzwnwBQ",
  "key1": "58Ku3HYr2NGmLoyHh7qdVJjyuWmSG831FM9H83Y3k8yNBRpNLSo8mbynMY6NyNydWPr9hsqEJraoXvhYj7BiUGQy",
  "key2": "47WKoS2K9c9X7zdmy4AGybPQq79Nz2pXpDTNh9KDRzhyHPUVyJrdKiV8DxZLJjUFJUSM6yQGWABc8ewKLwaA3Efm",
  "key3": "4SNtZFmmZAgfK8W2hcW8MoHJ4imi22dig8SwEp7H7saf6bg1zC7oFdPCF2YmRsHVDqXF2zJ8oL6zVddmGyppSMuY",
  "key4": "BZR1dx1CJFRq9c1yHproBK7kvP41XKSSrzNAu52VvXdt4TEDGHCEoju7XBrMgJgz2ozGpL5KSGtZwAwszUukx38",
  "key5": "2QWWGNvwZ67nuyK4BMvgLKtfBGDxPhKaKL6FnGu7N43TDPKmKfK5LEya5vjHyDGHVYhUnCx7HA9Y9YGEAD3NvBxK",
  "key6": "54y3hYL6VT7E3C7ZyBQxfdfkXa3r1BL522xtPRBozM5y5tCN43XQHftbNraaCmRpHQUU1oXjtMp4mRfgKZ84FCgg",
  "key7": "93wFkG1U5RB3vtp8Q7YNfRpqhVKEgFWU2GGxJBDjggfFM8g4pkgA9reP3nkGP1JeyyokgDSuS1hNedNvGDJ6TgG",
  "key8": "4dfXxGyh7DX72eTpJfGbGNjRL46Lyo9UnJzUxx43M9nUQh3rR9bWG6q9T3AAFAEBHF8cQ1pqwLthSXrQ1Aa1TRMX",
  "key9": "2THuag42gnir2vnDyjQcdycVgKJLRb4umkNcH6jd16dNMzYzkiVAE7GhYSkCdJevwcgUNpwSrMnrk9jZBiBpJxMk",
  "key10": "5f2VMuN1ZmkobasW3XJ16uSYQDvDPQEBi1F3uTY51DGo1YxbetZGKmR2KAD8GspR2CgzC7QJJCwm6eE4kKXdtuRB",
  "key11": "63AariGFDS6BWG664EgpMDbzQFyqovkhNUMZRnDHHd1u99mA7wFUmCEV2H2RYbTMkxkMFGYg4fjP8Mf9rcZHpL7",
  "key12": "5oHQFf4JYTcCcRCLiak8SkdZfvw6WEFZCoCETqLoDEAi72HHwqLKiq1PhkUhWifLRePj9PrMjWnzwr2u2osVnKZq",
  "key13": "2RrXcXDxLL9raPu2KGwY1uHmCkB8hiRTCLFoQC6KXqaVzpLjFYgpcX65qNpxR96rGERDFbFSL7xyNCxyDLYwUa5X",
  "key14": "2Vz9pa9TzuiACad4wLQejtAC5KmhGcJJRcBNewgSuywDwifHcfzJKf7SGkvzNUtKtKvbgF1JTHZvfruyStTEgFxy",
  "key15": "mvdEqdcSYiAoQpjGodJEEwHTwDEz2N9saN5xEYMb93ngKstAQCLa178XsDVg76DBTX47JnK6QQWbp2tFzQmLYAk",
  "key16": "Mnb8cEkdPp3EEWKgheDbR4989z6sGwa4DLYDvKRTbrcz85jihYjuyQFUUbuJ3L7SAToV3Vyxu2h4rNoiX5iXbo7",
  "key17": "4xDM8oLXdTQ1RCHSKUr8ZAkBLu7crx4sTjejuJspHDsMadrjoPSpHQEEwHWuBaTfVFWT8nfvMbCM1FMAKiAf2Z13",
  "key18": "5ZP1xUjP4nSA8GJvZNzknb9zvecg6kSv2vE2tgmiFRqoniJ8VNac2fD24vjDdAAwhwdgc3wLjCRW4FHMnUCrmzgE",
  "key19": "4MTdGhYncWRGqGgQuUiyxM6uv7uqGVJQM6tkAzpk6HrYLfd4DBx6wB3emaHprDCfFUxxutXTUtydNVu6AAZvHMmG",
  "key20": "Rx4gTmwSaRL3dybV5mdmo3n6VmdsiyPaQrr5NRjXBCx2Dk8LB1935rg4U5oQkqdLdpwu76U1e4kuBUimB761AxA",
  "key21": "4Ed28ctSZ1WziDYRs4dXZFiENvK1uS4bmnH1HPgeM8UtnMYmUvGCagNPPiqNSw1XE1BvWQdjdwGG9NnHB1GNrxT7",
  "key22": "2HuibnBsJTb3Cac15LjGWXGhNLndMGFv85UnxFF5ytwgDTrHNtSaWpLWaxrauWm9nv25p4whE8sBXKubni5dcQsQ",
  "key23": "41Hzyy7bGrwCfmQ6WFcBRvHNUiWMVZadXXnyN7E4kFTxE2m2eq8Z4rmE6vMdDxUqtN87GDgVtu7V3z5Eg3TT5mEz",
  "key24": "X4AN4AUPHfmg3tRiHN2teEHUtBffE4MjZB2x5Dd6CsvUzXATGkzgwj7uLdAbk4TcKsymHSnK5noLSgqyzv8P8YF",
  "key25": "3EqahJSKRPLKv1EmpYA9pZNjjjSMutR97aDCd9a3C389ymW3dVsuo29wL1BNdYiwRFqRxzmvLzNSYiz4Gpnp2j6F",
  "key26": "osJNFf3B2RP9gccfBKq39PwDKJSmPvKbpiZNtYT29R4DgPQue6xEyUpGZez4ThJXoxC41D6zZ6uqKdxWwua2Veq",
  "key27": "4hTqKKefeynN4jNdz6Jj3b7aRX9NyqTF8guzL3WBNg5srzKQeiuYzLCGii9uMEMwnwK1Avm9D9dtgBCQSRrdWLjp",
  "key28": "ekLVHWKvZ3CFLEJJXNBDdZJ7E6JbecqpyC7LQGZxLdEmCYkmrTqs8X4TWezDbDAienr6GPrVw2iKK7SQyUDbSaw",
  "key29": "KeEs3NV7yvFNbgzfVkfqCB36BrpW31qXP4NBFfgZQg7vMtkMsGxANguXbDh7XuauB3BAWP97BE8VqQM983daXdr",
  "key30": "5GiMirFqqRn4ECFA6B91S1ZimsttvMvLUXkZLAgSxmdNu4BpPLR54ggWb8cPo4et49zbxDT4NXHPGKU3JEDvVc1D",
  "key31": "63LLCaBCDXXsBbm3knCv6Eam5pGYxNAxBPTmWWsVxfZRrBZxjkNx1eQkPKUfC5xR4qgDg82CBqUns2PKo8HevVUP",
  "key32": "TpvNe4gW7eQFYeFwdXN2UKi8rKHwWEuutn6mzQXQVSeL87AkQWJAYMhboQ8p7ax7VRKLq3c93uzQfJiA9oJuJ6k",
  "key33": "5p2PPQxwmFv5XhAXdr6Xf6NbVZBdkevZts8sTwS9KUZeLrjR2jVg8Cq7UutDkanqGjQ1aoYTsxfxXmsbd9BxEsRN",
  "key34": "5KyC1TPYntAmyytTsmpuHkMd6M38VKuncwHeNV8PTp8WFPXPXNGbZ4xtVn9NLdvaMqAeHFSQn6T3qffJyyRD9U76",
  "key35": "5tmUQfnYQsxNwqA4E6uiLzRLdEADGEnsFg1JJRiNJYbBs7bju8JbQiZeduR8KiqvvHxzr48xprw9oDom2VYdZXxp",
  "key36": "5FumFYmc8yEwzbjDBKnjzwwTeZsiszULVScNPDFdqiwHd7GcumhzhLXTz9Hk7PKjsUUPafUgczQUvQ8nUJ4rrDbD",
  "key37": "3XUxJcceVZxJE7Y4BKW5rci1YtcSszT1GVVxETc7QSWWtVxCFgF6xfe67j4FWpxVCmU3HiAoT4x1hWEcTafFR635",
  "key38": "4MD9WKkiAcxMnM73KafnDpqs5Py1pA3R9Z5zxe5Fn8dWjSSJkNsff1zSsazd1YbSaYJKT2qAL7kpFr2Cn5x2W3mz",
  "key39": "3WAzfoLPffoPNhZXNWsXfpMZerk56uoEg4DLqk272kk8CVPMLPupMqmbF7ACSSe3QuCQ8w1UbvMexYqk1x216jyk",
  "key40": "5h6ztc3CLynXneW6hsRpywKQ7yUuUKBsenAgB9LoXaHEdtW47a7kZToWrtt2AMU3AK3BbnagZ1nEXUtyhynVvJcM",
  "key41": "47x8FertrjW5yZxtuVannvoszBhxFQ6MiWzDVmCDaA1xwxi69izZEHLjRtKRVbwxQKDQJXXmhErvrDcSKNHmwTy7",
  "key42": "3PoCtAcLUoM8pVFnhB6QBWnYfYzkABqVW8j5aeN2Lfx5MSJXSP9oMKxGstUB2wHgx3aUAWrDDugksFjfUMiW9LPv",
  "key43": "67i7XKNKmcvgJ1FBBgAGmJjdtDCbUektPkkGo6eCzZ7TcRpta5QfTDvs9LG25TdvyHrJ2MXDzQkYTGTveyGXnrv2",
  "key44": "3jeLG3tNE4L2rKtvTiZwmbJkybXUzhvHzTVfPbmCveMuBzRtjKqG4vaLhb9jdiiTfX8Ui7v3bPFEtToEHdYhWyBU"
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
