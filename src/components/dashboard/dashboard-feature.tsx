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
    "5ozSz4nn7jjHTcU5Cbh3qgf9BwuENZNUxdQQZTdFLA9brazMMtH7caGJs3MCoN7sc68buHxNBKxyuTAfbw4mNFkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EsbciZ58aRJhx2KjxbDkfY8xYyXLKdV4ANsGjaWf2G28rKFk1YcLaYKXGybMbCcmMzx6q7a3MxNVomEU8RToSmf",
  "key1": "5xPXnDeT4Q3SaViqiaQHWWha1wzMB3LAUNud878QHZNdTWswNWvnZG3TMXWBQhkQUvPtkwqxbD9bZhVnVxHQThfQ",
  "key2": "SzPaqfru9oDDbDNiWvEhFTLcKiT5nFX39FvKZRU1YxZYCMViESc4Zi94cKGeLcKoF9t4FDgTHJLsd72X8G37xaP",
  "key3": "pC7kLXhiG2z6NPqGwoPAFZdpyjr2LfJNZJ4MbqnUuD14pVrkez1kMxf854XVFmofvs6CzsbKdes65rL1XLiDUhp",
  "key4": "YYMT2Te1ehN4zy8rvpycLTZuFW1SgesBrV2GXFaoamLNLqQQj6PC9vWud59CaVmjV2x2QZTmr5eQqYiakE4qLgL",
  "key5": "QLprkXKVoN5pyLFct9DMXqvNoWV6ScgxMjmr1BWxDwYzASPA51MimBJ1P1Vvpdau5ya26gcF8KPLpytaKpJ9RXd",
  "key6": "2AbKFmqA1ZswY7fJYUNE9aP4swVKtG1bpiXQq4DJzYrjoHC7KHCcZB3qA7Uxs874Diys6NeCHj9QU6hh8BPa1jxG",
  "key7": "3hMxrtcCLngSfBXfgXuNFUeZKTt2MSx2EwqXP8RKG9eUqQ5BaEhrKJ8PsmrACRuFLWJJdYCChp6uEVe3kV1mNXNH",
  "key8": "25MsYxDMrcZL1PpsDGiUdvp2WP8rZ2iUcyxCJZKVNv4c2KgvEkFVKdQVe4dLU7rsKxCvTHxJTKUzjmdHY6pSQKat",
  "key9": "4o4KxUCaFChT8QdzCgEQ9CpijNXz98JFZF7vhuL5gV3ysfnR6M4awNtWM6gSiDN8Sv3DoC7toZ883WLHhhwaku8g",
  "key10": "4EmwNxhN4pM5GBLRTMkcTSeAXRTDvJtUtU1TY6xbRTEdFeNCffP137HLTu9ZTAXuXqQGFcMjvK7Ap65UoLVW6DWL",
  "key11": "KLf65z3PyGYghPLNCNWRobvsyZsqTpLFucKiVKqGUdSf1KySMkxtRy8tWTxRD3LQ3MEB3dcJeZfWHpBwxC12dY9",
  "key12": "3C1ZoDQTKeSRiE1wfyiaFHQLvdwGEykqQEGkpoaQqGabzRoHPe7YJaSXJFiczbTjLkcv7yLNppik9pNd4qZdbERK",
  "key13": "4TctPLXoBFPxoxHuYSJdyBbgPwpePjQSzxr5U6xJ1xHfUi7Dckb8xJrtGZbU9ZCVbWC8vSvNnLVHAQzUBpu6mvLM",
  "key14": "5x6SBYTPaziKcJ6yarTJa4itVqukzmuhVe7HLauWEYTwSpioynd1ZM6gg4JH4ujyBdvfqy5XA6uon7C3Q54pZnMD",
  "key15": "5EPQyMJDmKbhUiwCY5PMExz5ZuF1mXNfigC3hn8VbemVAftmj14vTYYUZoddhq36zfM49hVYbZybtrCUUoongPcL",
  "key16": "4KD1KBKn37ftt4rMKFT3RmLiRQvoR6q3BYsts8siUg2z63wL32nrXgHngCbE3FuE6DJPDNoTDrkepmghotTbwmQ3",
  "key17": "39aD9hTnQ6MjVjRWSWB2VCdRQtW5X3HqLLcv2AA55Zix5L71SrMhTCoFgDojeN2vZAjfUxh5DDDpsVeRqhJsDYLE",
  "key18": "52mHesEuowDjKTgFNbdJGEeT46JqGvEsoR7j849tTeCybrSr5nbWcwmrGfjwE6VJr7B5LBRdomTYypkvVodCHBfV",
  "key19": "p2repXhWvjabfE63DohzyxQ13GNzcPbBZ32DApqSiLWss1aaRrDjf4qNXHd39e3UXmHC2jAwDAnhAfbN8mPvLE9",
  "key20": "33XXHbXuz3ZqTfSqZHaYhVKPZFJQfuzACZRD6cpp8d9u2wS2ZrXSYkfsif4DtCQgPkHtU5o3TaCePPkPyiCgkXcX",
  "key21": "4tJfnTrCgaqhTxvBDPpmJKtZBC7oRSuN9XHR1o9BXW6i6GCX5TmSkfyAYEQSdg1nbnK37e96FVfttcrKq8iEzMJ1",
  "key22": "4k2YsmN8s9eEPDTSSn4T9hcXJ4NowTczSvfW2ggUu9T997e3LJMnsfyCZAjwKH1afYZmamABtuSXXnE9mYoPpWAQ",
  "key23": "2YzToTL7nSqYQ7Mpod97fKwijA5r6crAypfMJNfSmBrBW2hsfZZ2iuL89FXbXsZLc6rLur2EbfeQipZccDivPQeK",
  "key24": "2fhTzGg31e2WXzYf4JiKc4AGsvCP5FisXbCMiqC5aZTFy4Fv44F327m6KHWbRfLe5hZzrYigq72BWWa39neqjfz4",
  "key25": "5zJQx8MQhGkxSdFoRhZyAUGsD83iUZ6P3Snc36fVkWrdo22DJhVEoTQvEU55JxwU5pdY59cPJqyESGMEzJKPGA7A",
  "key26": "3uK4sVSU7hb13h5qk6uXjorjFjtxGxSPAKLFJVYsSkRPiRD41WZbHWMDRrKHVUyVPsHhhBLEJXeAnbMmB7SN7hsJ",
  "key27": "24V1ActoxsiG9oy4uySfPyXp7CcX56kEawvZvKxHRZ9w2s55HjA24HKCrrU2cbhEY4bKs574UtEjiQB7gp5fs67p",
  "key28": "5DPvn7ZjciDjg6YPAULsx2Jy1pmo7gqq51ANky9NJ3AEjCgHZZWLfDw5prJuNFELKze8dCeha35JYiBnsNmNmMrQ",
  "key29": "5GiVgoR7QUGakUN8KjAoLekfXdgmaxs45pDvMy2ZRzWVdP1nPHFc67DZfnjfpdSYs6SRGv3rGRR7LoTU3PVjYUm5",
  "key30": "5bLKzVPErTR1XNK1sNQrPzeAFDU94o5iWo3uJEFPeMFyLPZMYsBRPnRcHbKpEoHqUhy1x1ASKmWyY6o2gVvsSbBx",
  "key31": "4kQd85raRssdsADWzLgCdoZ5enZK8zAVQWEqP9P1gbTxBW983WcebaPNeFGKb53PhjA1UxhcyFPzVAjuXosrkBxd",
  "key32": "3qbrURjvByoJzhSnvpshdwCQU3GPn2jQAhjshtEWxNDR782M33bNHj3jAhbrV2m6F7pv2bBtmBhT1uHzPAbaZrDA",
  "key33": "4rVcm7W5J7ftKaKoEiruKAuFFtkq968oK1GT2jyJnWNWETdyN4ZyMeCP3qzxD4YSjXmd8VCReZvNkEoJ3V1hDxVB",
  "key34": "CYNeFonBdRdRKQ5dArAeyjtZVqqxSYLdYufyciLDqrwidStLBt2a393hNcUWrqjDQqfZS8rMHZawmddCi8kGENd",
  "key35": "4Znm6HwYacnbXgyjaSHoqaiBkbXtj9ypdv8LBZ81qScQZzg3jKn5kqw17twe7YhTFF1f7w3f5sgmc3F5WpbSESkF",
  "key36": "5wLhwiJNhK89fwCunJQkXptnYBBuBwzd3NpzksXm4HUiCewvNyHRMdaCqSkeii7Zpqv5UofG6kt9WPdstWUxgU6z",
  "key37": "26b5T8GFi2Xu5kCLxZADp5yRtDY8r5p4A3Be665zjrUiysrtRdBqQ3QxbdhvoAkdvBbe1vGwmJQAnsvqgiJsXhTL",
  "key38": "sHPs9XCwTNNdLzLkJuH5UNMQNWdgXRw5obMzL2HWcFnfwdoMFjGaejrszKqUje4Zd1NEYV4yUF7vifiRiv3F9Sg",
  "key39": "4v1kquWYkQAWBmsz377ojbRedvpW1x5eQhJ1tLqaeiZjgjXDAw73Qj9ipUfh5iQdoyuriS9h876wBHfNaywZsZgL",
  "key40": "21e1NKQJR5S8z2Ew6BvHvCLL5pheKBhSwmrZLUpvy8wc7HWJ6vvMcum6sZ2S6bGZJxhSHgV5eKPr7dqZ5oKipun6",
  "key41": "5atsHqfb7NPD11QdDvUttfvi7JqgR1nscBX9v8NqJwJuC8s69MKHk2FEx1t6QQzbH5EfXfq87QLCZGSWk6wr8HNb",
  "key42": "3QaG8GezqJLpr7SmNWMPUGyatLLwqaFqSLCtK7ggYkz3WzWvBjeiCCCpkVNygD9hTDbfam4gVCJdBhY1Mn1Tq3ka",
  "key43": "3JJN9qGy5wTo6m54XeQst6yHeu5taq8S3mnXcTiKw39dSNthZFfk28B6FGb11UiVRna795BMTxdWYpHu7BahPwXF",
  "key44": "5VASXfZMCGpm865ynoYnVcukh88YhRbyoFUahD9Y19MDKVu43HwwSMF1qmp3LWCUsaBBT4jFQXcA5WjayWJPjrWC",
  "key45": "5h84APQ85Y2f57FZFF66kHNmvxqjYsiCMpTc4JY2t3Yijx13xGjw4hCbZVCyNA5VMWjdXXgKg1gAyY3CXBqYi68X",
  "key46": "5Fifh17CEo55sk1WTQZt9jpEicHEtjwZon2nTrrAWkVH6Ws3J1buqrAsBCFqTYCwkj2JLPhTo9mM2g7ybgUCH11f",
  "key47": "4SU5AtA1oC7VF2XQoze1mfaZRHW9QKmxRRsmURK7RcDfyjiQzesFFVAkU6GZ2wTxU7sGUivMmaeUBE7wVuaYGwbm",
  "key48": "4TvW8k8mXU2MQsBxwm8cW7pcSSY5jkKMFtCXZPZyjThJ9262gFxU9pDfeCn6gia5DGjbSCMpWnffxBSB7Pd8EZCF",
  "key49": "5U57THsfm7rMou5JQWxhuifG6KmDYqt3E5ExA1EB25NyHonG7hqeoS1Xf6yYAY1v6eL6co6UZ1jN5o7DsJ21368R"
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
