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
    "4W3eTWx3dxrDPm7auGpa67dg4Svg2uosHcYoBrDdAmgosKsxYL4hjFb7sqmDryB9QgQVpxK9CvnfJpSThdfqWgJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KPmkKh9BrNEKzcPtJH39bDBisY7gUDakmzxywiEgYCzvJM1UqohiY2kh2WXEzqEDirC7BcD7k5tR8YXUaxZm2kw",
  "key1": "4enq9DN1YJ5p874Gar14yEPP4r3kUUMPgaAUyKE11A8ZETVnPY7Gk6RLHSJ1yDRMycTTU36N919TiJzrJEqwGPu5",
  "key2": "5s38Hn2Zfko6rGJb73se9UVYwv8N7GRqNzU2k4utpEKBYC6vqKDX53vhV6FyAtAMPVxeHokGu8TD7ancLVNE5xaH",
  "key3": "3jS5SxSxBbYBLm8cWEXvuFPKJshS8CMrVWEXrrkmrKA7aGVjp6ToZRAyc9vpxQ3drPSvc8iePdMi4PqtK2HLFDkB",
  "key4": "5bcTjm8JUgyv7t7pAXdUrA99TcWtDw9anmQcDADLZwfb717UY5NG1gkhqqVWUB7U52fp7cxyqp4dfSyRafumgm6e",
  "key5": "4mgXjp6eMA2JhKTZ7vDzawFvQH8E4Cn6FxGuHECx8bnC8PJydNQ2QURH3EyoqbBnNGBbB3h4aJ6fQCP1fntd18i9",
  "key6": "2Aw83xhJqnTY2dS9W4VXmoRXgNe7Kn4ci7aVg4oBstSdg4kxqyXieC1jbaThJfySPH8HrYkPTBMPApzaJa6GoJ5j",
  "key7": "5kfpLdmpzMTKTi2Hbyy13rce4AiQbreAkpGXAG37LXLToXHtYJzyjd3HZ6X7EV9C2QXiyBiqD1g6PKoxqk3NY4GM",
  "key8": "463ucP75TiXSkvjqCHkGgdM9dwvRYk2eutJLmRXRERLMgFCWAZ8KGv817hz2PkLmAjpYb393UkEjNsiSnDdZn34A",
  "key9": "4rbNdtHLJUtMQrTx2oA25PH5Tzp5Cg9BreCyQnR7zYKDShXmUx4VumEULscVEUUqedFW3wWLxWAgtYLe3SpMfpPW",
  "key10": "5VytNbCitDiNdzU27VWew4uMUDxbGBpfzegYL7q4ad1USJtyJucyNpaUzwnZLcWEAEARLxuBPrLh5w2sGLg7Rotd",
  "key11": "DewKvt1Sr8ZGCYAiDatyFHUrw9e88kUohi9Cc7bQSscJKx76AXh2bc3LbueyB3kTDWT1nLHkc8moFqQ6FXDfPUV",
  "key12": "2Gw5vsLHR17SMT7BQFJ1pXkhM97m6guzkqHFzPhuNWhXjxiyNEizCRbQRbdEqwbuefCNfHPt8NqsDM5oj9iH3LxQ",
  "key13": "23n7yhshTXhD2nqN7sf3iDFqp7rC6mcpmdkseQsXKmdRgVaKA7x1RzizNJRrsT1GiAy8bvQEjZHwsFsamHCdiCSo",
  "key14": "2ExcneHiXWUJpAM1s1J1XB7uJhuZgmiePJfHgVFDTNRMByemaH57sratDfGm9Z1ts73GnJDHYWRMZ41972WHMb2B",
  "key15": "YMW9Ye5hPbEH6PNq4uy83byEBTiXLETgskm52wA1CwsvCogwMsG6fcBLnQc14crT4THn8s628oKgc66HTkYHs5p",
  "key16": "2E2UgN5qcnKU5CdgwjNodevnW1rcuqsuG5yXKz4LTnfxhAkfVrkoLo5JncQSoyNH63HB2W2mWLGiVzZsrK9yXddo",
  "key17": "39B3UUqbWYmA2vwFhnhTUrsXA89FLsuwHFvCTtAcZygK5pkShc92bBaME4TMj57uZvfeNFG8VQETYc2fZzm7PoKe",
  "key18": "4NbWzwE4KPqJTkmULXK7uz4xNYjcXuykWGeHBaK8LdwzaLX6jajRkfoNSYAS7VvvrQQ7x4AVSa6TQuvcNnv9EqsJ",
  "key19": "4zTZDoEwUvewD5UyBAPo1ZiJWaHA58as2iQ1skBdjnNzR72jvpK8Rfr3rVVMzrWspCHnTBtVFdPJPTPANPAfhiZZ",
  "key20": "oM6DEPU5w8WFoxFtvmCxBS61gn9BadjxCnwyUWL2SA6tx9AHVxgDgDdhByxwSCbYQF2UC9XD6XkkdhAJubWxh84",
  "key21": "5bC7G6Z28MpGjpWYGQcoL1AW6EFbmatVZj9gVHEcvjmy86eEww69qqDJSswqM9eLqm2xtdFDgYD7H3RjG9FVgtVC",
  "key22": "5ryJri6TyD827bUQgswsNeZjiayvV4Vzx9MXTDKwSdmBpxw2VGLMpgUtKatLL1My96QdnCt8G9SGJdcQTAVDsYdA",
  "key23": "2idF4BFxCWVNqMSCHdSpHBjh1dGtYrEHZenP59byLLyoyE7HcoE7bvUcazQTGoLGVKs36LTcaDTK6GKoBwZspL28",
  "key24": "3bpoCGJQWehuiWvVftByDn3PTaMmrc556MeN2uRFDFjokSAFY22xbNwaAgT3pqJEqRSjJGn21hbUMtwL1bnueKEA",
  "key25": "21Eq7YznTHZ9MpyQJwyq42kT3w41ZFmMXzDrixHNnALHASHL4KV7oa5e4vdcjkLEG9chWmXn7BESpiMtwL2xcyjK",
  "key26": "5d8eXSXZPDZ4Q3rzULzH5W7HinUA721yXU6VbKyDQmmXgYohGqnazk7hy3S9ytVekNUbv1XeXkPg5bdK7AhqNBBk",
  "key27": "2C4TuMZMpmmwPX6K5ASoy6iHp4j2QWkAix1dQtS52tVNHoNkht87TiWsW1Mw76N8WNPuqqkMwxoCdHxy1pf8p2uT",
  "key28": "2UEveTzbj9EVSXKhQ97yyn6eXBNAX3yYEGCGbSjuyTBND9phcLvgULApJk5mdZujh8dErcXX7WCmpm5V2fgzFAqa",
  "key29": "iQAmi1u6Fwcs2bYUjdEv6de785G46YjE83Ez1UkCGRnUtXUJC11csqYtWZ57fbnJKqkEAKN8T1Aj5vrcyL8C5Jn",
  "key30": "3mcLPWFAqrDmnr9L9CN7DRbGQWJpQdjHMkKJCGW9GzV4bzMyVsFZqMZ2QucFEzudQcYAoAgPViZrb1aNtXEfgMEU",
  "key31": "2FCsyZLm7PsMpPMCvNK5BD1KPjZLTL4PkTnZ8dNAdUV2V8Pk1MKes8rYDRTo3GM3GrR6AN4ESNyDe9vKjgLRN9Wz",
  "key32": "4MNTMCK3Sf5p7mit1iX5XF4HxXe48oV4csp58jgtegt9289hGC9hZyaocCS7kayMUx5xkDH7CeKSE6XGLrA1BHpv",
  "key33": "3vmd53mMcSR3PfcMVmUDiqarFjE8bsEZkf59KYBp7tGSgPJgJRCvYfT7mtAcewewDCL3pcvuBMs2s5C5QsGHaGXg",
  "key34": "5UViyn9CcSEqJgZXqp5sHE8nvSiopH9C7Xw8pnA6UBNv3ERivBGVU5P21wWwL3NSJNib59DRSoRwmTnha4gGq4YA",
  "key35": "2jNEigqxZgjsgAFXBMMWoi1ER84p1rikuUVYh6XntKY4qCBy5UA4RHnEzwiyVXKwRbbKzqKRHykhRKBjndJ7m513",
  "key36": "3uhtFohwCqKDDNckcHMHFPnjpUhbXomF1Ct7ciYLYqGsRiyXDgThEv4oViJbVDJLWQPHBxosp5tg76ubXH8XzMQn",
  "key37": "4yiXYRUF9ZntajVf4NWQ15PoPeUtRQ7xrv5FNvSNUjya7XEoNhFCbvRxddp2hVX9J4mtFokygt4DTTZopfrrtKQj",
  "key38": "8TGogNA7KFAFp1ksF5uhZBjMrJ81Ph4Xxmo4DELFCjjh6cYA5MBoMWx3NfGfJJx4fHdPA32SzJQk2K8EqhE3awV",
  "key39": "3LQnpwCf9AfBsov8G5CVumVjBeVu6jHA6dMRkcKycGA7MYAVuTTW3ZuZG9a8x48gHucnnweLRt7TVg5Mvvz7Ljsg",
  "key40": "aAuuT7r62CHctJHyhqyD4otYpihcH87dFn2AkZ8grPvtwBvtfuu9xuGLYaBCcNLWVCPWybD5qZMLxgqYPBUTdQJ",
  "key41": "2SBCA3s84RGjv8ckEbdSNJwEemcaLfjfrvGEkLyxRoh9iimMqxkyMPzEYD3EDWsmCJt32oEijGWDB3rFPmGfuW8V"
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
