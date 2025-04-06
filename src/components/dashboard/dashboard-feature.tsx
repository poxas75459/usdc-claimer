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
    "3LpMUgp6skf1EAuyXzvGCmoia7ADTCqx6UKexoND5GPfbbxSHFKkDW1Txwi9axiNRcBpaX72T9TqgtGYsBCYLzJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EgEDiGJh1QDk12CzkRe9YiHhe6GRAymJxhxaFtLyQsu4CDmPg1V1TM13xKRTX6A8ixqN67xj8VQ2bxJCgE2FWDV",
  "key1": "46YxvWoks1UrBKSQy3pS9RH5VrJDkLUd4yTzs4mRcdNQbVoyecp3kudarrxuoffJFdSdzKZZWeDfKWni598FgXUN",
  "key2": "5GtNQ3jKYnbgQvY2VnLYji2TGemgDwztqcq2eXJJ1w4a3ppQr5ntoLWGPdGBiJY6PrrqmgTDR5fkZUShAfBbqnrm",
  "key3": "3Lo9hPTEAQ73G2PijHWqFsvQaVwvJzUFEeeNiHgZnEF8ee2aWhsSgBqS1YfBM8j7LsFxTr7JKBPak6gjgXfQaBoE",
  "key4": "4RKk2CoJDThmbUrDnqjc2Ag79HyA77328eGWCyJww6debRfCHwCRGr5bf4AFdx76DbWXErZugTTJyFXZe7BdtfH4",
  "key5": "4Dzafy4V2XhEBZvyxYAejXbRbEjoboaRwknXZ3jeLhHLpTRTqQr7gEkanuMxNtBp9SW44KF2jLrJ4Y7wBHm9foim",
  "key6": "2SEWBELyob3QwQJN762fcysDCh67SeQG5DyyACpBhQg4gxUjt9fPi2LTPhBrovKs7SGRqbKeKGzHdGhYJgfAfHLb",
  "key7": "oR9RShjsJD4ju2PJ1WUzKFGY2KQexnMCrT3dZ7DMkSjB7rHSUQ4qLxGEy5dUANcyD651Kb35XBeUqjpocJM3Yp8",
  "key8": "5iVg3WVKq6kH3eJyGNCyodQnmukdhVfjJhwLx2RYyQYen2PCTQxyVUzSyGhsoMAY6g9W41dMYYxpdDfd9opvcZcX",
  "key9": "2UXKRgfjT53KPE3h8WCp3WGa5xEUJ6pVBiRj7cY6qj5X3P4NsRjLaNtPi95usqjr5mHXm4jmVnkqgDveZAijzWtX",
  "key10": "5iTjdyY8jbmEvtpv2XB25KLMmishK2SHdXJd2wbtC8oUP3kbcQi5v3fge9urAiedeKCFT8Xyuxu42KUcyfDHVWBQ",
  "key11": "2zJmUrmLcbYR1yhUMD8BxwE2jYBJbw6Jur4iwiYSPKhXEwHjMwFYduvCPjuLhj1nJqL5cT9VVha7o9gnBZ9y8jnS",
  "key12": "4bwVE1hZ17Bxg6GfuYMEddkVc6J8Usky6xgT5UydmnEdPogr46TLzh8bYRhPjZrQLjmLkdvyaFLnoABJZVEFQETk",
  "key13": "3zzGjsVEUHkAYZSsUkfpchZNCGsgeLnQc6zz8hDf8nn9jUZijvuzqnK45icHWWnv4rxt8vNVHCSSs2g2PneAakqi",
  "key14": "44CjWixAF8jqkQkc4pnVpkX77XkaWKuJH1S1mojcdJTMoAk3UjQp8PqVKufkbD5uWdygnbpnZ2nZWrBQxhR5YRkG",
  "key15": "2DxhTNyqNAuZQEu3xfwfBhyMA7cfrSMghhLiKSf1yMs8F4gVBv98M95LxE8wZPC8x8a7etDaAokCdn7EzirvckFe",
  "key16": "MZ9V1mGggnYAZchDWcewC6XkerYNBSN9afTWabDShDrjpFsuWbNDm7AKsoJe7VRe6LQPaEYgREdbHBukvkF4eCL",
  "key17": "DDdU9BLa1HREjPzGugLt4KjGNjTybaCsK7PkugqsmJ7dKsNeTUVVxuhHJhUh99WReYnanHUJWFXyvQndsN53B8a",
  "key18": "5skGPpst8yGeL59zG1szukkt9UU6jHLaEoKXK9ctHuzRoRjhyUYrry5grRZDQJrS3djfb41Hu6UWL4stDdfAQohT",
  "key19": "4egUvdsT3qZbAwy3ozYcVtQqcddKZU5vw4hSfnPKstokt7nRNn7cC5Xz9RyJk1Hqi1cecsBdDthrKNd7UPva5baS",
  "key20": "KKYqTC4yoW7yyjsM79kRzp3jy4RVNxX5gdUEHbk4f85LadGx1ardJhDysowVrqvvYuLetPsHmgr6oSigP8bQibD",
  "key21": "5TSRKasHfmhkFF49qEdxUcKLEzcmmfrk4M839erBJjs9aE2WJLr2aWsaAkJiCFQF7oHEB4rusLvgSD6HAvNs9gdA",
  "key22": "5k2XH19Dp8dwdZGUvZEje3RSCtJc9VayEF376GQnmXQpquRmYxqqpDUPjXETt1khzon6VsnHAtMTfDBB9rrWDndH",
  "key23": "2fYvibNgi7m6HZyP3bUEn75wCAKXUCryMbLXLQR6UJREjoQ7EgntxBt11QTGeztbJXJu4VdyEXp21SMN4GwS7bUP",
  "key24": "247vRmsYPXLNKVnrGQNHryWNpwUyVqCTmzmwDnUbCGc91ZGwVQZYE2nsJh38xMSWT3ejTiNJD1624KYoguL1uvdG",
  "key25": "4znTQzfqgcWwxdJzoNJBBVsQoRbVSsHoaoVwP66BhCTNgmooe6PXCve9keNHty4a7wsbrFRdgbFi1cLMwJpg2KZt",
  "key26": "4NDx2fezxdsNycS9Qh52P7MCZCoKYPSH4rEcvjxiYRJyBecY8SAxCNNvg5G42oW7DC112dzRG5bkUvoX391bPjmN",
  "key27": "dC9v4gsKNsXRS2JMtopmdxZzVSqWqA2tQ1EjVHB2mVrJnXcHguvPE1dBr5XoYhnASCpidRWDN4rrrYSBp1uxDyw",
  "key28": "3aP8TbmPFSKMncZ4fqhc1Wf6GrgGhtUVPN6jUdJAR2UBSd36eH6npqcbJKSJq5GBQv9JEdRWMzc1bMhejKNoqmzn",
  "key29": "5CA65CR6LZXZFyAJ92AgGk6cHHpKYKqrHVwj3dZW61nekMjSoWVPqdZ8DPE9RtPcWMPw9ZWAkUz5w4un3yviBd2p",
  "key30": "4Y4YBNVKwkDEYzzSpDhXaMtdqg5QNkqaUXvi3s1pJpNZuzpgKHopgPzfahLG3BWxZoW9PXmEc6FtZ6rPcRBc4FxV",
  "key31": "NquhQHsh8jxNDnE2GsXen8YrChDyMzgLVF1J45kHG1LjksPCqb3qHR3tzt3G8UtgiVA2BZRZnn43rT7gKhHzKs7",
  "key32": "4FTnU6Dt58ife4XXYXMUnHpLnULdthBPDcynJEfnY3v6veg7A4aCF4ojSZ9b4vX42gmGgRgF8zCYD2gbCGk1E1EM",
  "key33": "4B6wtiNfGdjQausi3UFTEJ2uNMMWGw3UnHWqc43CETE6JNNBakZtGoCvjMVCKbwtDk8Y4pDm1vohojPmmKTjEJQg",
  "key34": "3iR7g4JQ271sZMZQzyjqrgGpFnoZRtF2Gw8L4BBuHhJiUdw3f8Q8SmTAGuyz1HUtHmwtTXbuHhvVtKEVSTJnwzwb",
  "key35": "3MGupDhALwpYvJFNwnvqiuEtEDgLu3npjXQAD3XvxhRXV4YVkLiupGYWQB2dTtPm33areRkXjTEvgWavhTuiiKXg",
  "key36": "43UTvcZJ2B8R62dtG4qEFTWoJCpbpj9aibBBuv9YXj3dG2s5tDFArEWm4KJwC53QVz5Dy2DsLmsRm1Vw1o3jxm5E",
  "key37": "5roa29rTCepZk7PSAsh7MDS6wSoy7KvGmu95oR4aH2BzXC53q6ejZ1CrxUDYYQedRdPyvCzhL6mDinTJgvwu7Rog",
  "key38": "35DWtnUjcpGxx1gANC98QQZKnCKRU4dx1L4hcmEfuKrXVaC6SxBPi7Gq6BqX6fd8oa4HkWXVEUzvDApCLNziVJeV",
  "key39": "2vDGDtkJHCmpqgm8JLu3BzRhqLiKkU72WvF8Z87g8bQaGZajAyv668heyDMXPUbTzmY2vZodimzRmncP3oM97xHZ",
  "key40": "49c7VPuJgsPUtvZXYpQVLdjaRsBWCJmwvZ3NQ59eh6niR88e66BoNZKSsKxMdB6AL7YKCwHNTjYfqxGSWMRj3CxZ",
  "key41": "67S3TmZm1vKANAicYtMp5fba9s8aTthD92AGtmwpMs7ceXT732H5NCqrm5p7yktwrc7eadYtaHN1Bq4WSoWKefsq",
  "key42": "5w5GsBAx8v9D7knGGzMkiBT6xC6i6STo5PWeqNMrPQBaGba382XXfppjv5oHAALrjCXCGUL2ooAQ4JGm3WwYJrT6"
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
