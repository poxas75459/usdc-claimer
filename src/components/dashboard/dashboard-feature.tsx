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
    "4nDedAHEskUxW2L1gbrjZ5TZSVX4mmsTj4K2PqAbwy29MXrUUFnwQ4h5FaN42ZVV6QBxHFVGFSqp2ARojUzshPH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uuTBgBu1xaD1Arn3WENRRDB1uT1KVrskd2LKLRjrs1qG9opC6mS737ctR4itqbWcXn69QsZRomjRuJ6Cjh6AECr",
  "key1": "3kJuKTeXatnmHgjk5LhdGsxtT1VcuUojwXySxBgo9W6U2riiyNxyEEgQ3i7KMRC4C5MH9BBjadKXQq3GjdDtBW2G",
  "key2": "5hfQroLYKzBhaE9byc8Ub2fkNx4YCy7RYnVowHE5jzAJodUTzHX5mX8F5MDaRxn5fcPtDDNE6mgtpLY9sUftd2gY",
  "key3": "4TY3VJbq96RhNZ37zm8JRNTWthJ6ckoZQSJDXWcY932yRe2LLeJTAJ3KMabANC5eVesfDw6YjrDrbiNZFjUEvbpQ",
  "key4": "5zggihRnxqVSMzzgBVvXS5CHBpLqrUFwcUowYSpjvcgJu9QdeESWo2DUrVaPwaWNZm1Ja9yT8gJZvzM9US9hcXoV",
  "key5": "2JUQuhrUystdwvAQpQHJ5HZPmW8CxCoSbT7YXDe8qF7ohACtj6u3k2qY7CQ2SxNL6SYUrDBaf5ptg8bt82CXo7NW",
  "key6": "67p2dwankLrpbYdbsjgdcGMe72hnFeuEQpuTYe6Vt4zD2ocK2U1kFSm2BFsLP5V2qjjeTywLJmTLwGPMukndq9ax",
  "key7": "yF3x7ueAKT89i3uvVBJJkyfisCGxhuG1EQ36PVuWw6tvuVdBkRgLH6jdfwV5hkWTBJSbiSgKpQ3Nn7ppPtdrRmp",
  "key8": "2mo39p5QpQP8uJ4CcPszx3gWvU5qq6aaVh8QqPPHFbvTHUuMeA9mpjQCaLbu77jWHGMdrDHSEtkgEmu3a6mBYQJ3",
  "key9": "3MEcCqXqAKvn5NMosxpMD3iSugTLF8YUZ8P8ZwC3F476bUaHHwNDcxTyAGWEQGAShpJnuL24HSMXNcaNTk6KWenr",
  "key10": "4xoC1iiizETAo38nLzD1Pb4chkfv9srV9KrrGRYx5LCr9sonXFu7WFAVgrYsExEk7WxbxYJ5FvMSpPoKbxCYEaqU",
  "key11": "5G6to1yr6Xqekmryv18ickMHBzMkYAKtQRCsaRYPpuGFHAEyjjigpiXrp3cPMvo8CQ64zPJkrSA5Q4xtuvUQqSyD",
  "key12": "4Tuw74nf9gtbiPGug647pjDdsPyjF3yb9P9kmemNfBPTogFqaN4m41JUot3gAwhvY5kU4Es4GYdxsLU9kTWdtGCZ",
  "key13": "5uL6hvRQqVrYcntTkV93isuVYtfSw6a1SBaQh2sWwbi9P4EUAj4QG42Wwsg4BKuj4joigSzhsybDrG2Qv7VbMk3F",
  "key14": "5D6bNmbwo4cPTJToJz5q2MFqVnyBYtVC3hKpmTmohUZw6aUPD7tH9Qu7KiXWxmn9ybx25ddDYbyycGgip4uEyiYQ",
  "key15": "2iwN54nWVLoPkicFdmiUB9bewRvRBKb8kjkFWSHBYesLFcdAJztPVnoBdHvaU3NSRrZeos32c9BTPmaU2vpA6Muz",
  "key16": "nsRnbXASyzJgPo5gekdyWBSwBAbSvW5NKxaATB44hgFjHXCEFhHqukZxccQ2TozS4Yc5f2qY61z3B1K1KoV5k82",
  "key17": "4XyjAkCxdBy82Eb7AjkWceXya161s13iDgTM2ZJJAfqCPB5Sou3GFEDyPrYpNf3QdLhR8iW11sxfY4BDTCCjAAo2",
  "key18": "21fUQJtiSN9TKF5YxR4iAVXrXN8nkTdftkYNz6eDpUx7B1oEa7rsNY6TzdqZVVnGHtTcu7hCotVHGZurx1dyTW2f",
  "key19": "4ujfBEr4hid7GrL7YKPz9MXpkzUDyWh1Ls1GjjMZVn1gKSr9oGFMw89ef4YfgFWjssLSZbZxuCmPrAE81K8vKidJ",
  "key20": "4HFXWe8a7aptCsrbybrhjvb3BH1BgGEEokBJdQFVu2YTPWkU1yeF76ebPP43L42SRBF2SbD5u8UggtxHM2W8epDH",
  "key21": "54CVEecABoexTsBbVTwV4EFBtuN65MrE72U8pRhvpJ8u5sdF2spvDaCBYCCVqwnhJ5kXHaY8XEUoNhPzax8V2Gpe",
  "key22": "4EGLdgLL2HCmneEeNyCaXs7ym7v8dhJmxqvHFMQ8paEr8eYzizmL9kzpRSnXh8Uax3i6DiHJd4jRYMkSv6N4tQpW",
  "key23": "4YBtFuC57uG3KpDd9wB1dYEmuUL1fXsXADExjcuV3VxgtDBsu9M546fNAgNSX9qUAHhLGa5oEAfEsp8YMkfsUHyU",
  "key24": "5Y3vrUSPrv2pt5H2NqXb6ytGKebfbANVgejaynAPt9GtW6zyHrpc8qkaf4xxaZgYTn1CEKDGFjMXeCU6Eaqm8GjN",
  "key25": "2SYbxBx2PgyifSNBGmMmMCoJfPG9192x8DwNVCx5c32Rrm1B7wAG2Pep535mp2kurERvRLAFYXLX65vfWfqhmuqc",
  "key26": "23hSmgkGh2WGzXGpkDpX98r1jWCi2oS7R3RGrZJqgPcGJQ5rXEM5qmLqjCrFTrPXhSgT84fm9Un4kZBZPbK7Zwrx",
  "key27": "piWyDXzv56Rnot8DFYe3889gZ2PMdk1wtGEvrBDebBSeypyZk12btVs12Y9ef4mz6yDRK3S9E4ccEyKJHh1G7du",
  "key28": "2xKkN5w2dm9upHR2iB5dTz3qWSz9XytrQww9GZcFV1zqhUz1UWZnwzYUGiVXHEhqGJLS4Jo9hUX9tiB9Yo9o8Ggw",
  "key29": "3T3eoxxYsa9BWmZoTEjd7vmC64dpEqdoWtygUwyBe2RqktjU2mfiVv5ZYiZjRkZ97fkKFpXTwQvhGbUAGQQYhRvx",
  "key30": "Xkw54ehwcpwDuEXHG4dAf2TegNmcWJfZAH6DAjg2qoxFxd8c9SbTof6EdguUnQ9ckDRXSEVEhUkQA4TBUjkupkU",
  "key31": "2CGmvCtmHx8XBFKjVjLHFQZfZ47unLC63jVntMqgzaLpcfairvSmt3dNX5bUDW72YvCTkPFUE6fJk1oNzou3NdnW",
  "key32": "2ZQumjoArQ4HpXRBruQXj9yURcRm5gjJtJh16qCDA8cMQ6wcM7fjeJvbDTvCM5WyUZpY8q3f9DFD92z56Fptfa5i",
  "key33": "4mXar7NXZRnVqinzejsBeiifHvzc9BeLxqf23gsU6fCdKmcSMAiio5gUzduTBQdTG4W2fhzyLJVCBwwvsP1xQ9YS",
  "key34": "5k535vuJMwvqfpTpcZDauma5Y5igGYE7dynYJVxwKbRf2eWcj8xDu687aJ4qSP6iZQxwRCWKNWdbtBe4X7nKFVNM",
  "key35": "4kejGJkNp7V9ETWSgiPomJxqrQqeUK7VKDVTpT7o8dPuZLuV2LuRhU5TLSvRPkay9TCdGFo4fgYDWt9KuswRkM2G",
  "key36": "3U914fPjaFnFS4ZfKfUUap4NLz5dozSYr7wvYeHL7HFhSCYFUstuuXvCv4X4NCfnScZ6qefWuPnjww5m7G3RGGTD",
  "key37": "3fXtUJecotvH6Aw94PT9YqmLAr5sqSN4348Bc4J8kDnDN2uaVtB9ARaMV95Yivq9hP3yEy71EuanZsnoBJCdKAGu",
  "key38": "5xHnhZWEwbLMx5jbezovSxU3N2EE7thWDkSRJdvizt2W9zB6ixHeviCU1qW3TytmZSDEXtZhDtAV2wzxbf46mJGN",
  "key39": "2qEMMtbyq8Te3XudPiHmSNmtfiEFFWdDjF4deUN1HeLJWCCmshkV9pghxnPhv1CNV3tBZqcrpQV8h6WUV1Y7fiwU",
  "key40": "DXpjEogJi9iM1aaWKXRyyBhmhVQtWsjNNBbnCA6Uc2kpyV2v1WnEyAPHkDq8KgYdogKDUtA5XfQfjfhP6apLnmd",
  "key41": "tp9gRiAkyvFU3fb9taWtUXDwkoa8Hwwr7dF1rYgdfPJV1Lz1GSZmuNHUKD8Patsc2TJbGKq3sBmRtckTmhrzwZq",
  "key42": "5h3wGcmyaNd9au6AV39RkjE74uxBWPrJRPnoDQcZYzkmgtzh1VPujSKFxnneyYephb6cF9ZLvVxES81imGtkJjvF",
  "key43": "21Zt15StwJwojnSaWU7GJAknLWhdpwdPzeYrBMcHJQoRCEYbmiSotUZt5upVsbTEN5uYhQjCep2WxDRdDmV19Rgm",
  "key44": "3dJpmzS4yaQZCy1DH9KCdjt6kmt5CGAjpPkSFqU4uvSM9JDGRzYwdSuhXXnYKp8kujCBgvwJcBgG8ZBsHPjv1U76",
  "key45": "39woSMUyEH1Beyxg4e8pvhct9we5sBrVyrxP89jpLiCySYHYAfRacAc4wnXjiqmfxdd1pamegEeCDuevUtpQABRa"
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
