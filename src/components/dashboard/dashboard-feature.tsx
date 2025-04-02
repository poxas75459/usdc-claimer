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
    "55Mne6ccEbq4hUfBf886ekyujR3GRQBf2baqNthT8D9SWQPT5f57s6r5YivQdtzYtd6FJQJaSzVRgpwLxKojtQeZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DPMCJGjUpdpZCdz1NpwseFjqJkpNn2coisCjzQ9i14SvLTRvrcppkBh9ut2PGLye58WnpH3gyChDsLyoc5tLEHJ",
  "key1": "4UscmURkyH9VknrZrcWvkFu2Wv94SP6wHViTGRvJrTC6PWUP6f5MKa8EqUif9xPxq8jZFgyS2Z4HMwnq2XYNdCc9",
  "key2": "66n8YjrdddPJ2axB1JxLv4YNbiLttMzk21zU4uUCTZ8B6gQVUU1jD3xg35cTEUbP7Y3Bw6w5YbE4Uy4EPrEqdEFD",
  "key3": "5zyqPmSPqXiGeF6iQtV7WqS6FwvyFt18Su7J9DrVydeQaEFFJNtverNea9hRTph3eA4dyLxrSGjp8QNnCimiSTq9",
  "key4": "29M7NF7j6QLovN3kwFiyLWz67gaRL98wkYQ7eqk82BDEthLuTR1oznyLSTXJDBqeUK6iFLYNDMEemMnxUQ3JwXsx",
  "key5": "55SUGZCuq6heXKSqdVH4zMZ9LcHtZkoh61brfHnNPP7rNFsADFDwZ1W8SZqz48KGqd9STTmRtZyAepaEvACMznjc",
  "key6": "5L8Z256HMjz4ho1XbMpFUCXKGR4D9eLiZyWJeRdXx68GnJxK7rJUhxtGD24SdymB3Ezr3UncanqEomkCgPTYcjoP",
  "key7": "4MruLVucex2oeGGqLyqRW7eRbUgCUENZsdFanTctoSagudv3gYJJ7kkgUupMZ8TB9cWfmgUnkCBteFB4QBqYmcCV",
  "key8": "3EAcFWMKFTsrp71MBUVDBALTUtUh3zGaig22WSRvAr8fzxVaKdRq1DrFgYQddKdEXDV1MhrjLppAsCux5uG4b4PX",
  "key9": "3piejfeyesukF3Jfw1LEjbWtjCWHS4zdgWXaDV6jAJbgP7BbcMXj6dWw5YHvLboByfxjZfpDwbsbUJSbezH9mLcy",
  "key10": "6hUWhupuB5BRqHKsQQDafzX95vyWTAe6EWY3YkAyQJnJ2g676GnqPDhSwZJwE1SoZTcecAn5JetDjrdrsqfYVLC",
  "key11": "5XyHZRakwNzTiJtD4Msam6FsaJh3uD78qQgGLpwqSTEWktLuGH5vHgJPpi6H5YKqnfhj5CppkucpQeGeKDSpv7Y6",
  "key12": "nmFmbgJutnCEdyTzwMZdMTMQn97Yy9vqU3uTwDvxVk1dBgEAhbVqCAFHsL3VeiWVYYZGh9TNwUSUEkM9PJakjXS",
  "key13": "yRFxuN1TWcop3G4Y45Ev6K5tirv5Nx5s5JmCoy4Rk9zKp2bYeUChF8nhVdCuxyhzgroGWNyiMXZgrSxcAvHeaZt",
  "key14": "2Y6kocTrK56pujL4g6AnLTG8cYAThpiRDFfwTuRFYKTbmavA7f3sgxCiUbqPAL5Byea2f7Ban3winmkwrSjFoQUS",
  "key15": "4UzjNSHd1eswqWEcGXQf89m93xpkCsfBgRvRUXdtwazZjFzoZkSHpAWdhxT6Nk2w3p1jtNgBheecMqDfhmboZSV5",
  "key16": "51XJzf9j7HGKpuvZ2RqYhPKMNJQ1KAcypBozbRrrJytWXQjrCHvTgPBYDs69V1kDZiJUuJv5di9JaAQWSpiiKkVJ",
  "key17": "9xamPxUS8DWW8Q1D9Hp4coshBkgGd21yZLwwa2iyshajTe27DBD5ffXHkF3ipFXJ16NzPn6CKPeayzM3TJgeoxn",
  "key18": "28X9osRUZDkCoFKsc4K8sPV5tRpecsV24MtURhHfkDPYXG6bX7Ce1eqtv63mteNwM7Su7szirfeH88Kb3fPVQj7G",
  "key19": "48r34SGazGANE3yAWJAYTeeCRu7Ly7oX1dgsn6EkwZF17hmSZdaUd4rVH4DP78xS1mEhbqE7qEHxyzGC742iYMq7",
  "key20": "4AW6XffxaA2peD3WUzfqJPkZW5mNUiyZ4xXKhxf6fKsXT9v3xvyyeggXjgK4R5FuPY3Ed3w481GqE6R5Aq6HrMZC",
  "key21": "4frSTKXAwP8efdxbcZfTuiZsoHruqXkxRJCZPHYwcfJJ3m7YJDUgSKJampdCGNKoNLX6Qak1gFFePBrcfpDLnCPb",
  "key22": "5H5ehzyebMe9f4nir4dUpyALBqDdhBEYZGe1LtJU8g64jk2ZgxNr6GxJL88uaxmFj6Um9yb5dxY5HJ9e4mNe1qhG",
  "key23": "3FvZhSzbswHXSxyLBFxHJYqs6rYCFaw2HTycLTbuJSiEYFtKQL2qojHpxQeB9Lamv6JmkopyQy7iWH2AgbRm58zG",
  "key24": "5VBBzoJS2LHjFZkDRvxVWJvRD9NGe6QKnWtALRhW4iVe4fBhfz5y1VtsgiPoFWYWs4pHLQYAtH5muyDD1JdGiKa4",
  "key25": "3ghqoyAxCNEY3rCoribxxPRexMqvCorSuR2ykZkUS2WpWvGhSKdr8XCbNqmTQJ4LMaDn1d3B13BjdKMSwxwXMVp3",
  "key26": "5Rut2fsCSAEDQATraA4N7ALqDtYZbjpL6nfNRu58B8GnDwMFkMygK7B7sLEDYXFpGBzUbeYkiGGhjFrauoEJEqdE",
  "key27": "nL8nwjtmhM17XzJnMMLQPNzBENrs2eAMa9Zgm3E34aKc79E7hXghUUCrvWjcRHCXXMN91AsHK9bLTndvRmsZeDa",
  "key28": "5aXQVwm3WutGkGrq1Erzp4dwBP7xWScfkC5WCQTgqFSQnfgdQxiQBtCRRCZ2UxKurs2yJaZ3Wni3yxf2Eih45T6a",
  "key29": "562nSaH7HiA512hnvufFfQg7FUBX4ZytJG1f75nUJg7FRmBdzd2SfNJcTGxJ9juSidpkNbSSSEsKwkNNQ3HEXAdz",
  "key30": "2hNTcMXcnKs5Q3qNodx65LtsmoMyDJe22EFgN1mENdwYWZKNcJHQAST7kzgq2KFh1mYmieGeDgwURVVdxZxKgVsY",
  "key31": "5z5rcUba76qgRe8YK2hJsgu3FLL6XEhwYqvMmwEmUACu2kAuqvKYxE37CQfk6nQYYAtLfA6quv8e6vh5dWDeg3xD",
  "key32": "2nUxVUgpj3M1hqrsAjKYfy7n32hHpmzFfv2tN6fbRm6ynUMAYAKgdhRDTjDnrEeFAm6QXVyCMJBoMUUzemB82uJn",
  "key33": "4oYA38jRk7PFCcifpgGsWYZHyQHkf4vbvgtTVbwjD1WY3Wm64zab4qkkqk2nLEusntj8AdMhVpPoMS57HXW1rFhy",
  "key34": "3tQ1GfPZcqb1VsBgWdBTHgotfPr9cP1dtGaHQ5DyGC1aRe7yBPwQKMwE69HEpcLCkWuTsYibyh2D9hUNNupckwx5",
  "key35": "3kzsq9tug73FyijMte95YgEUsK34rc74xW6eK2JAFc1Bt3RAgNrqgz87qT3mmSrpfmHsaJjWzokiJCu8rARY7uN9",
  "key36": "46nMgCZArwFdvWGuT26GqcmZEAAEW6j2PLvnMZNsdmAqEjkbtZfkA4ypBugXuQGJqsyNm22nJ7A9LEhAtnjkTWTE",
  "key37": "3NLyFEXgmsU2ftkii9QrxkLyUdwXN8TmMmSer1t4dQD94d5Aq9Vme3BEsAALERXfAvXoSFDpZeabeSGiXGEoJ51r",
  "key38": "4sR7Y5tE3ReC8vayjdvNEC8KqHJiMqZiVsoYpk97c1yptBP6uECiT8agDw7uDeXv862P2mqkemyptgCbk2a612gG",
  "key39": "4ubJ4t9QBDHLQi1awhEob4LGEWiN3Swo2bySL5nwv12v9ZCowN6eMSRnHS4iExSbhRhhHMe2CqwsE1yxasqoBcVB",
  "key40": "532kugZpAbRRVzYTmWZeWBDeTkxiohmvrHYVunfzJcuAPqnWrnjZ8u886cxzqG6aWFkREsHUiSuyYVPoDkTCn7zn",
  "key41": "tF72LMN8vJm9Bcru8FEa3ScwmxskUr7VpLGePRdgfGtCxAiTCqd7qY2LeWsrfEXqL6a5tDFrB8r94ZNJnQNLsBg",
  "key42": "366c3kHmuQMRKnvLwDKRqvAhjPbj3LHdJM4xPjdxQtdDABG7YHwTiP9ZcSUYLD9S4mcR72fRTHfLHsKxw4SURP8f",
  "key43": "291cmJbPFJifbhSPtKPiGgFCMzmNW7E8BGPLkLDcETozW58VwiMZ5oRGbsHTCHoEM8ovbkC96rXWPyBS1BNBrybh",
  "key44": "4ZGfXCZHza84JCLAhVnXWLFG5CHpUEcBHZHwqwJx1KDfsovcK79nUZV5uJKgQQdaHayYbQZaMvMjgvqumrKSyNtX",
  "key45": "4Wvb96iAvRPsgskDjFwoZSUYTa1x4D6QrUzuw6JK6AaaaUDYPMZ27PebCM689gum9WLcKLAzhojJG2iecbynKXK4"
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
