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
    "3HXNkFRcAZsazn8W8gmFYLNSyUXHRPJ6XDR3grerTxemxx4tcCCgjBFHvfwwhD1uytUZoot9fJjZs2Sp7WbmqkkH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y2D2jSQPgKL4xUEJdaC6hUyuHAYbaQG5wWhm6qa9TmuCmL6xK9P8b6YeVBCEgQqQvVca86XM97GPZtodn9TkoWT",
  "key1": "4oNsht3kC3RSdDhFBp2tF4UvJQe5VebeNRJAW86nYqrwjSveykKRcEk72y195MAywsm3Tgu2nD6ZqHPACw9S1yhP",
  "key2": "5tuCSYKbr2s8asup9APX35MoTAqYmDHFonYEduGLuDwAHLrAgkpWH1aiKq13BFmBTiaiCbXzNJnW6nYEtYC28vfW",
  "key3": "4GaCXsFLiYissRbeAraeUAYMdvd4dVhdrKJSSmnBnDUmW4Tm7AxqKKYtyUBnjuQzsv72ppxkuaPehd9AxzhKb5iP",
  "key4": "4BdACQczt9FpdfvhVTBh6nwgWNNS5TCC3jZ7TPPQuuqtJYM5U4F2gqo6D2NULLLne1zxfUAfqahPyj6urGPynHrK",
  "key5": "5WvmrQUBSKijG6634NoN8eiRh2wrn6iJVrBTJofAXUUK4V1H8pGSBy4HWandNk5M7suBmiokoqf9oFA4qugfreXP",
  "key6": "mNfcLDAtwGCy9G8fdS9GsqiHSeGCBqScmxNzUMkLVR4iqYiCnVf3XhAiEqFW86BSJiWFNTwWGn7nGNtrmennEAg",
  "key7": "5HNCymcuaJ6mHNU1qQNSnWQ7eroZkpinaMnYqonzH3ujaQMjab6Xbhjphi61GassFMdxXs9DoXY4euDBCXpaHXYk",
  "key8": "5HcmxvSPD8c1XMB2ET985zSqBXWs2AbWcc47nkGgeThyv38ny9aYK3VnpE5yo3UvECM73vy5rwHeXVXoAzpvGDWg",
  "key9": "2YeMc66n8yEUDyBfJpLMDYi23B1WqZx1FVX7UB75v8NRkfqKLBy6HECBDvUFLVcpnDHSGKa3A41g5hWkt54Jc8cS",
  "key10": "5qZRX6DAFhZSvgt8J8VPY3UjrrBbhois1mpojxBYxQxqLFBqKGhR6NgLbFUGSHUVscU7fDnc5qNsMjeXUra3QsxW",
  "key11": "2jMtPakqbGiFQs21ieKaqRuFhiR2i76jFXfYEDKocU3puWx5WsPcYgc5ecxCe9Ah6QKphy5uAofgWLtB7prE3tnk",
  "key12": "2E5Fa7jh6uuQAJiMZoPWSU2x9CREDrWx8Y6anJw5qwWHGoRM8dWcBfnZKt76W7f6DYaqKkPV3wuj1MWuqPtfJPwy",
  "key13": "3c7w9DwEcmkHsw8ZHYgbQvz7FsqLU7SKDAXu3CKiaynE5vJsXpPYQmLqSZJpyY3husb7vsex92ChaJt1U3C7Zm4t",
  "key14": "WqR3GEeTzh4UUSqxqUNfgGYYAMDqLwMXCpBshT2uRK1mjrFqkjjjHpgPBhS8KpA9oiMo3TtmEN3Cu4vs3MsoaYN",
  "key15": "3H4EiU2Mjyk73ztZ5GvAavp8h3yYEvuYkH2q9jv99ZQmfyzcFzQaQXYSef1Npcmih7bNZabDcb8f3uzdXacR72r",
  "key16": "4eTYbJzDviA7kSGtqrgrjWayGcqEVVafmxwcavturc1sfXe1MR1kpCZ6LcqvWQBgXTAaTX52zDJsrAtbZpd64gv4",
  "key17": "4g5hTSCwF5VWa5g3kpT8BU1VZZnZxGyNfiaeDFFMCZSgYDuD4fvzNAP3CxRUg5pKBfv9YFCwfbSH4YCdLbdWf1YZ",
  "key18": "5t92LZBe5i9KyC46Jc6dM5ot8xr6379tcfmYd5yBgrrQDwoMZCphBHTZeQu7dLGAfe22PaA88SHmiisxsFXhpJBx",
  "key19": "2SfZTsFaLPYEXdgGztrxkQt1pkGkAWsLWke5aCugEeN5yQg537GD7FBsLUZwop8vYzmN4TK6yz8SkcZaR1a7FkUW",
  "key20": "3XXR79bSwZB48X33TmSVUfXzGUGwFw5yqJRzzexEYGqqdLKRLN7iUuXwgUAnT5NozZ8Bg3oPrcDBCDUYq8Wv2rK7",
  "key21": "31BP27veuCfydU139EZCBK1fyEp43STUtrVJAEGFH3Vezq3w4SQvm67oMdru2gGkvaCFMjQBFet1tToj3E5uLFJs",
  "key22": "3PrKNaVaDxNX4GdRSBFaq7RMibkcmPBjxUNz9q4YrrABe2XrqTpvq2jo9DazPDJHKkQCmzX6m3qQU6cbDzMb9sUT",
  "key23": "ayfQxRkQB9qq9coAQCG2Be1Sfep1R63VxmHCFGTbkaVoBRw4ToqUbbWaN1GnzBJgXheyidqDuJfijzuzZErZDwC",
  "key24": "3qvhRjxuwx4LzBMW66xLdgeX34iFGCoohtoTrZvNmJT1srfuAnBcWTnSLFCqTbgymwJUEMSR4195ANtrpSdCgmMZ",
  "key25": "5vE9Dy4wpX4PtjThAsh2z4MX9NZR6rou1afoY8XfeU69hX2v6CeJaL89ZumhoBxjv7hHQFVAgdSGsGbdREYB1kuP",
  "key26": "4nnXkpV28etehdpL79RRet9VESYat3S6sQCfYQbFyXwDwFUebENTctuHJVajCareS7dWJtVyjwjTYPb7SZtJvsPF",
  "key27": "4thiLTwjb5TXZMNji5eH7DeWAZRKGJyshPjaxHPk5eKvobsNChPPPXre5bZCNpyCgxx3Vhg5JneysiG4e2BExgG5",
  "key28": "4m7uVD5tordw5hPwB6vixreAqjFnvgHZF41SqxuGh492zc5Fgq48kuq51nuvtqGueQncfy3CRfBgE7ZNovMyggvf",
  "key29": "5H1SRJjhYyWEHbD7e2GrtffECrKrCciR6ontc2nseVtBoJLEXB4M37zeMHh3cZ6q9jFPzNjAUc4texnaK5ojA2AE",
  "key30": "4Bk19M22cSco61UsUTR6UXRMNfRBjzPzDz8V85ezRM7ZqTZ31ZERZNBMLscs8sfNEJ1csp9kazknNAmhPa3ffmVY",
  "key31": "2v8smF7RFoVymh9xAtnH33Nces1gXChLF3kYSorxemsWtShchG89WW2ZbcQ2JrsZKXdqWJPDNmo6cevRuHEnmfg6",
  "key32": "3KWYuKvDX54xspFti5Qw3awTMyUH2771BAP4Lmk6nm6Qur5tbVdX2WViJunxdf91pb9rpsoKgDkmWmvwfcsQgUyF",
  "key33": "2feAdzY83ATZbTQ1sBY2J9hFtpm3L3MEcBJFFwk9Xev2u7ReoSWdkjfQ1X3hVhM9N3SePGx8CK6dzjEZSkDR16YG",
  "key34": "5PpiasKHd3pJQ3tZUrctm4Ld2wusVSVU2AfxszL2RTXCrMTb9SJVjWq7JDi7gsFvQ348MFxJAf2xMBwmBaap1i3y",
  "key35": "51TXVJGgVUSapURQfFj8mfGcakQViPBg68wWWLsW7ZLVcGHUSkXbKM8DZkXaQzCfwE92wXfnrGio74AQ3SxfDrDL",
  "key36": "49b7YyUc3fwN6gS2B31YjcWs5koF9dqTSenRwbtQzVEKZM3apxy4deWndnDJhhaR4DtVp8hHWpPUCwZcFtLtAC1L",
  "key37": "3Nxw95gaiwuNZgrFetRyyqTLJt6SoBVZ2Ne7jvw6qLNsLHFc8HjfU1cYxov7rsj7pCq91WoVuybNe5izTs6tuQtz",
  "key38": "3RefW1SKnNCRu65eNQBkmTLJZhAiE2bcLcCPWXQXTzZLhJ4N8kgZMi5RXapJqrfdgN7Gpzyr9UcaYJPStTR6Esp3",
  "key39": "4iWb5xmA2oUNjSQtgFN7j7mRsd9R3wab33nLqqAS2ftcayrYqeKDPbzKdrnVQrJTAHXDERD9BNBxF1fMSDBbRzrf",
  "key40": "24n6ZcDk5EcB3eCvu47TAaWhCJqcvXnDGsrbx7FzJGFckhgCqcbCywTL6QAKk7GifK66st2dmnKtjea6hG4PWdUD",
  "key41": "3HrRpHSCMrMqUnftCKwSv3zYvYsYo7eEVRyj4Jmp77bKM7LC28Sqv9sjzhGXbpdS2oRUdjrejxGMWwY5v37sXyLA",
  "key42": "3xPSVv4zzTjsShGieQFKGtksvakW9WCPL3PjaoQFcYC6wybTp9wB7xCy5P48hnfwnkT8vLXbC1vxA9DtmkEN8czF",
  "key43": "3qDdGhn4gNgP3n37r6vzjq7YFVYHezAbZvVn2XFLn44etJHjcadj7rgPfgWiR619dNWfn4ZSjL4RsQhrfza4VhSB",
  "key44": "4eUYuUfaXV3xB6bLsiDcHzVAdVUZnXM7ei4aAaDoeTiDbAFJPZKcnPKsJYvsbwyoKL6PjcCmtF7HajpZzbwvnuXm",
  "key45": "5fWBjyUT6CJN5PLytLCCoeSdDYQBuz49Af1L5AmHqMJZ6vj7bQTxp2Qy2F9hJ1rx3f7EhUbWBtEFreyUQvMAayNt",
  "key46": "679ifgBtmZUsgkPPQoNvK4A5McLLnAboSUPK6MKzRUvz7rWXmkqHuc9jV4VopGXgXA2PeDHi9sfN3L1vkAocvCgi",
  "key47": "67qhpy2upRzfL2NJu6eaEyjNji89pzPPD3RxgJ7Jxkz6gEuGoxNwMTzd1yehAThDmV7VKnofjDmAQ5UGHpzjXhRd",
  "key48": "4nzKQPkougKfQN1nW6Ugq2Mreu8gUTSwUiSMcd43AUP1gSfyWVgXTN9SJz2ut1pFJUSjV6DQ1c2YCZ3RKommC8oL",
  "key49": "2iqzbGLuoWxSsn5VDeM8CbngT7A3ZjyqsEVEZWTQqQQf3y3WijUwt91ouQiFT341KTBXrZt9FJAfzZvsr252p83X"
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
