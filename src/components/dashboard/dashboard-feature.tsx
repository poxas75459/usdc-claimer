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
    "5FwY6YEvqCuP4sZvUxr4KXTbzh5rgEpFrb99dNifk57aYqTfdxSFWBA51BfZdxvb3iziyBhxK4aZJ57mkSNS9Zv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MTSMcJGFLnzrDpgU6WuJiAaeWyWFrsJkyf5uJKvfrjWLkNhfziUUXAjHPNwGWwmbxpftvEBt7sTq5W1huGEm26P",
  "key1": "4i93iMQshFYbtxwYvGzsC4U6rmEEkQDGorQtX4mjr2WPniVuuPuvNf8L55ADqcbo4LWKGgwnk6PVZL9ZPsDpHHGY",
  "key2": "4YNadQGML9GyscAnvXRx2E9uV7gqAktEPohHy14ZsaspMtRtSApXVzmpyrqmczcmnK7fYMMD7rrqNnSTTd6NHNsz",
  "key3": "2FWHpyyrjvseP1KrHYJrKjU4S9TyH1MxMawuZwoRrfyRLADahQvdhCSuyQ8bN6B4FtWWpucAwxmf891CfgJtw7mt",
  "key4": "2if4XEq3kKY1ZJsiq6my5BWWWmk34gvAz2fkzqXhhvF4rjteAUNstE2sZN17ef7HTTjgDMx4P6w8iN2zk3nWmVX9",
  "key5": "53LrMHDpNk9Wmv3BtprJHB2X5TpjVHB712utLEsDgihtxpsjVZrXtiqyuv95spAUdyA3jvo7tPP3jW4NZQjBfi8f",
  "key6": "5EsS8WWZmFRuNu68QqBECjLSKbHbDy65o9hRBAWZauSy9y9w8tYjxaJYfMVhu5956LtFa5i5yMfFC1uVm4yGK5wY",
  "key7": "2uDaYKmcFW4tth82iS2NoqrwnsSEccAFCt367ZAyszamSujLuqKmSJhNJKU9LjbRhZem7hdNMAUmt6XFwfmzLyti",
  "key8": "489k4ko66uv5mWSsSPWFFqwSuKqysS7sANupE3mZeMGcx9PnWejrSYuxaKo19o2Mt7U7EMEcVTaWxeimZDM2YQeb",
  "key9": "4DdvcsERqmRAcgt1ZjfkVJt42oDAEUkkwjmDk21Quvp1QDiDX4wCTeWmhdHpx4Cy1wB1rUYUhLygBet8R5MYZTo4",
  "key10": "zH4ApuwTWjBVoPRRmoFM5V6HEZeboNwmfKZJVeBQ5jiPG6CEx1jng6Y59Ymq23UbaeihH7bb5ESVQEqy1d14cnC",
  "key11": "5dDp4m4YVBGiT1NwUYhPFz4dVdySfvmsYEAbLay5mvWFaNp3F8hmCB6Jm53eM67AkA8bzS26YvFRm9yT56wPw7xA",
  "key12": "2kJjJpsSrp4uvz2xvzGCQ4tJgvsSMPZ87NQ6JoSzgheWo7rvzamyQXWZkCShtVsyunEFZrRjp6GmNqcC2h5TmYbv",
  "key13": "5xx6iaEhBuF1hzvraqPGWQasc1qa5v3aVnBYmR7EkepUCPuaKWFuvdZwwVXP5iDFfFryXDwjKBMe2XoFQzzEFnFV",
  "key14": "6hNSq5kDME1iCNi26QZ6jL7sgLZmtdnwWhnyyfMesf4nR94CT7J22oR21ry7LyVHdCcb1cqa96QKhVVgc363j5H",
  "key15": "42c1koNmCxwTFkfgmaWxHWG1GACRa8ZSzzk3WnxCvJP16HhvSKQYBfvrUNyB9FZzCGjn6gCcsGHGBhHYnNLWFG7a",
  "key16": "39p5ECDyhtS9YE9FKUxBEy3TmoF2TzMK7PfTSCneYTu7T8sPZEgPrM2rc7axY2jd4vFMRNg9hANhqUKPkF7JnZTi",
  "key17": "2JJGsTbtMe9yXBh7qDDVG2zRaDim1wi8ow2RxpCBkATdfKihypUfyWAAVp35jnS8V3ZN18phnyxgmZLb32Yp5Cm8",
  "key18": "5BWa9oB4rbZ2dcFsmersdHDBFXo2o4XEEQiEqBWv9zz9FzXyYKxcowf29Jp1CB4DnKueCkAniU7LkB3zGpQCgnDR",
  "key19": "yQh672aBT2eAYjzZqdB1DxNVpuZpi2yXQ82uoxrHNkL52TYWbpwHytZqSd56VJFauGw75YMS86ZjM5GeoeR3ixr",
  "key20": "41YaAAExnK2QkczPmXBxoujc8KaA8LQ4swLYgfWihi7HT75k5dCuQUb1BG7JdWkd9XUXQ79Tbt471NkArqhroe1t",
  "key21": "3EXMgTdSbinxFYKnfotwtQbWMCbfhHg8h3mvCj33oAMjvPTko9XasTufcwGs183GaHz7qTkGpjKbuHnm41jK81yp",
  "key22": "3a1uDXZurqoitKDcUtqbPN1hJLHp411TQuE5gYhhXZiDTXhWyEq2RRV63nDh3tB346a2xsJ2DLegvPvSxmn8ByL4",
  "key23": "3paHhyXKwYFLHJuS7SjXWfRRPyDzokwuiH2dHNV27dntyaLdwCsMvn7tT14o54XvaMFVuism4Lwshuse3e67KpAw",
  "key24": "4Vidyyo99LTZ534PYSB9ZqqiS55BqqAXxr5GhZLyJnB2swtnzYX4VFyiQa1GBHsdXcqDuCaFRFWJAc1BunvwDp25",
  "key25": "5SjPKhoxY5qfAVTgeWF2KhixasFg5KsRs9WUDTYUGRBzHijETuejQcwoDNa3jU9iAkD36Ji83PqQBPmsntpTBssZ",
  "key26": "65TSyQsYRACoLbownAmpVcgmQkFeEfG28NnoHsT5zVzDrCBqZKCbhoBEYPyPfWK2d9uPvsRUKucV2bWiabSoAG6B",
  "key27": "5vtX8wqkZGjxdPMKfpweYSu66ornvF7ciXBDFsGN1CqqqCJ99XpN58m55n9dSbxSw3wUbmoE71qBvcQXMv7hx8Uf",
  "key28": "4AKSb1XU15597JG5RNehLsLjvVZNpn41htQMfh9MkBKZggkugqxDpDVH4f5eRVchAqqyQ9WEivFNpNGSEQuPUmvg",
  "key29": "28W3phk4AxuDh1uWnCM7mCVqkGpSqdLDWjdqBiZsYWJdYJuTLPsS1Y7LPRCBqVq6eaCrfETY69x8vgD5wFEX47C7"
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
