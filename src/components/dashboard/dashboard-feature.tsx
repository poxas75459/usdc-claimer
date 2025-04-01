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
    "4TVfhB7ZxWNH5P6o7FjJ4cPKE3usVuwHUqxC8zRiGvqgUvhD4YBApxiAAHtMMQLoZ96PV4AFdKeeq4q8fNxTAAVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41ivQjbiRukxrBiE5tLjhoDAYoyJCFhQ3UkEs5znLR3MJM7295hjGPtrFnqDgMZApQXsJqo1LPoFmhqgm3fRR8u9",
  "key1": "UfR5G4ETYA8Zoek4BkDhfZoPYYmYbUSmcHGKV7qyaYXiwjtTiKwQyY3zYNMWw6uub456WB1jAHsV3saJbEbGhKM",
  "key2": "3dLzUEs3ZhgRBPKS1RAPdJp7C1LFnNP4Z4HKUJsxBLUbtpo35QQw5hDH2kQszzniXJzmUHnHWf5UdKX3VBCgDNim",
  "key3": "4C7BWoBpN2V6QsiiAGuL495Lmuu4i9YDUU4e2HVFHeJF3WK2Cwz9UMwAUKmjAZPCNavZwJewXxaG2zBLw2goZAEW",
  "key4": "3C32FW7EGaDepdW9mrmjVM3gMpPuyv71rXB2zW64UGvtxtvoVt9FZqAXVTXzuaB2bXRbWTUyWNABEbUVSb2g2r81",
  "key5": "2g994GNumq8yzxVyXAtSefhdF3HY7gXj6btoR5Ds2yt4cyVJSznnPwhooqkBaQCS6y4heJoFw5mkXqq8srT79cy8",
  "key6": "3vxpzYaNgVSKrw6roo3ScNVAq9o2sMQF8RS6RsRhgUgGZnbybgWqVEH9PPSAvmUsMgj3u7o3KXZXdSj8cgMYjfUq",
  "key7": "5yLSXcKtaRgfftbvcZvXDzDx1ZQqeLcHBPgNXP7AnnKyigBYhWqLzKuJiSpMjAnHbDr6ZGd3jk9ykdoGR9VpdJxV",
  "key8": "27tJTjhKyN91zpWCLzYqrAP4UPCGSy6hjseqMTDGUtWPxvyBT2GezHmryZjBirLhJpQvmH94vLzSw2iHJQrLqjze",
  "key9": "5RMkpuAZzw8N12F8k7crZx4zavBBjRyVbxpTNCoaVjgQ5WFXeTnVDGWagNYAjEgMBfK1zCcXvzL2VT2DmFb1Qyac",
  "key10": "5yczP3YC4NFLT8eevpvjGuBTANY5Dhxhheq52VzY8agHE6fVTwBgw4Hff1qjWSBcGUpeGmU6WbLpFnpNeif6cMiQ",
  "key11": "2jx17CNxtGjCUYghVyaLfbULSNqNn9bgAVfTeVmjuZaBVAD27EeuncE9rppiD6CStN9Jh61goP1akYsbrvPAtevo",
  "key12": "2bhPJ61T5xFU61oy3Bufidie9213zWutFcz88ghEPcbyg47gjmkjkRsy9mfM5ixistr2Do1KKkQGPzGagAHUancu",
  "key13": "3soqpqEqYkR6d7hBwDqas5gUPGDxMCD4xh5qkNYhsBa9bZEkuPuu5BcMoyRSTpBr5dSK9uKcDji4D657H45n2xhd",
  "key14": "aSu7AjUSwTtk62T5qaZrkxD8ZVKAtRSfD69pHyqxHhFUsamB1Piusktj1zDSbnLGM1v5KxLwPH7j6sZZoTk4G9X",
  "key15": "37mbzWsnHrkDzGrb8ybYgfeekVE7SEj1TmFzD4AzX14snjYqrxkdeAMn1KhpuV4yPoQaxmudAKp1FvpcBtRtjnXL",
  "key16": "2kNzbwJoBdKj6BTW1ivhLzRaHfRY6xqPdGs3rpFsKYmsQ1R7ZKUjdCJGyEUtgM33mug2pw2dALQotBZBdYyZQoCb",
  "key17": "vwrRKCs52maAAWN7jYDxrdos26QkL7zUPA9H3NiqN7iFcgRtu6yW91r7S2utGa64o8QLGPSEiyUJSrfaS5vFUzo",
  "key18": "3WgRAf1AFNSSPWJqVUdDggpxD3NGZa1c3YpNGQQnzXhh3onv5rueti6mWKwxm2e5ScfY3DFwxu2m79SkhDFz2WqY",
  "key19": "38YVs1C2ikPiD6fkBS55iw8yPuS61HX47mFDL1ie9eUxEGvKWaEkfNxReicXXhFSBAtkaDwL1n7egvudk42YY7CR",
  "key20": "3ypYpUQh6LEJLe5YjrdMFxqahnJX4Y9iv6UZ6LEQpmAhEL8WNcVUqZ9kFHpUSL3mXPLkcLxD3cX2h6qAJFuaPofi",
  "key21": "3tfyEViCM96Whw3S2wnvehsysCCSh6vSVkc9vCvW75cb7MMr5PfdYzf9tw2VdX2fEUSrf4jaw4pDwmm4XMEEQhKP",
  "key22": "2aYxavEdBqdmzdLkngSj163ZGsFaJNduLUrHy3zqyTUv2bcFdzQVmstXZetb7ros5DiAsxuqwVc2HP5DNwtaiqfS",
  "key23": "4RrpuSuVUNvKYkMY8mFsyn5EkwDVikxLxvaUjSk8vNRXCzKjJghxYEvAWux6CX38zKqfuSiEWw3Q1CB9htweywXS",
  "key24": "HhDByhjuU9MXz5sh1kp7agXSW5ZUXAvxGnBZPBqG9HucpBTwWyp5wVyQb1R9Q5pkp2rjHbqXzbV6jk9oCMSnnE6",
  "key25": "3xtC96XpDBGg68xNfA4yoMomox5eWbNfZwAWo1qREtztDqe8jH8YhWawAyn7VCUaPJfybbRgiouqtFeTyZEAcEKB",
  "key26": "j46vPxmLG9eiKpav39Rmrgu2DQHFoLgm4KWDwEPZ9H7Ci75qnrB7TrwxgXRNGyab456XQZJYPHYFACwLi7AxsVf",
  "key27": "qoAnnH7DjtPCkWSJ4KpCn9kE7T1MyFx3u1dNiaF5oBc4JBCUaSLVroMsL5U64Y8X2juggZA1iTLDJXMWYdaZoLa",
  "key28": "43zgA8k1Q826gvGecDPCfdtHVa6WHsPKthq4LdyRym9LyMyCeromSzvmbFpitiDAvLbRm6rHep3ALAUo9VQdp2pz",
  "key29": "5ihx31gp9v65MANHf7sMYWBzPmibLTVHcKZezNL71vHLrhmEZoCXBMkso9CTK93JVrYxjBseSjLkQkCjk2J4jXFv",
  "key30": "28JvCdEmW3GHW5wVFVPZD2BEPCWiciQPGwzZQoAoFk6cChCn2XR138G3wNt2x1MTsEnPQotkweuDpNdCXY6ME4JT",
  "key31": "5qXvkywG2JD93MkJohrre2thdpb3rAHxj1hEkMRgQZUdPS2FE35ejkoP1P55gdcyxhZymy95mWmbkAk9PYBMdvSx",
  "key32": "51kR5CUuSdcfhX4WDFq1NYd8pnk3CPnT2ajoE9azJgEjPJXLakjh6DnLuBhqqgkU2QUUGHQK8GfATRMe24XjDQbZ",
  "key33": "4LaWhHG8Z6vrJqLQePw5bYok2ShovEYAMdXP9Tskotsf8Z3KgFMJSC7wJZYXEd22iAdHEqRPuvAWrCHb5YLwopjm",
  "key34": "2dfmofkm2VSaD3LZh2h2aBpgtQRV4PmgWrUxuhTbLYhwMLkv1iDcb4jQSv4PgWJ7zr9cKWneKUQjgwQqoFyfvt2d",
  "key35": "tdn9xUXQ8wyVXmGMPjgLxyuxjNQXxpLzFWMrTj8c3fq38kdVumLjo2tShcZRk16DGPfa8XDmxZxusRVLUqKweyk",
  "key36": "2kmLwgCw2Pf9ggJhyucCX4jq9u1F69jrY2iiQ6JKKCsdfW8heFQ8JxQALS4mpzhGBW6GQSUsK4Q8MSE9y12fAZrB",
  "key37": "rScu8AR6QHGvJK7m5exeR1XjtFyL5GmAma83WGTaX9gT2NRViua25deEwUmU12B3Yu8ztG4yfEdSnYEJeqKNVtP",
  "key38": "4FvrT58WDMKtBdxv7ALFMDL3BhfY4MCyLdLn3M2wBvwFFdLAbVdHzYoYNpbtpWFNPK4iiTsRDPVuqBDSLuSf3khH",
  "key39": "5p5HUDzRAdxUnidwyoVzZAftVud3ztyxfyKSo4mbCqnemDhr4yXYpy7ao3dowBfmUWy7yBRsps9B3T4Zwpd3Y54x",
  "key40": "4K3EPrNA7jv5e8o3c224xj5WwCCvQ6aGUUYYDm6tjSUPAFhixfobgZHw5ij8jsF6i7mBhGCevXna5LHicLZsnPuH",
  "key41": "2KUEQ5g6raU4HS87gUK4ceAmrYs5FPZGmRPg2LreijjwTGMGjNGKcRst536pscNS83rW5PLLrt8tKcMPKCfKGLQN",
  "key42": "4r6FycXiV8mJF5HM87KqAmxfHWz6CN8XJ6VvSMVvVEqhPWUoMdtAVUVMjyfgJXfZUq1mPzpFbyCuxqNoLT8L4tap",
  "key43": "3dNTirMZcGmAbKj9Y7VMW2Zqdcj6CHcRYNULXQMsLJKasCCZEEovUzjyQZi3pDvtzGvzw1AArsvAjXPTxLb8nhoN"
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
