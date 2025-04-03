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
    "3jUANDGyZZXgoTXJq5dxn3fuTQiTUAZLvDcBdmEpdWy85Co9RoY4gcHZ6TZQpmNuGDynEAPnHh1kjyCUb2SEcZLm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25KFGD4bzs5q1NyRzBqdDTCmbfr2rBtNVr8v7Pmz2x31sAAbCTcgPuzYvgEfjC949cjNVuQLbKKvTDuPKiNFMYpG",
  "key1": "4CrD5whGmLBUwte7qz1to7En3mQUmsxTmp63onuKjTrkRCVSTUHSrUFdZcEGfGUJsJp9fJbMm3BdKiWDsSSRqbHk",
  "key2": "C9RhuGFVcRH1T2D9V79hvMnhrMh1iu7ZCVqudyMMjSPBHDt5dJX3AfkasTDmd37Xw2uDxyRGJs4wRG4UQvv3fFb",
  "key3": "2ztQhUupcM4KXN7YfqRdej9b5yaHgRYJmteaLrNFkKWCS84HoSehrfvTh16GUHnRUEouotWLcLBVucAWwBQhZh7t",
  "key4": "33P7qeW39EVNUc8sGzrnWjVbarhZa1pGLWUt2E5RGPE7DzWipz8bdMkcCdtJPx3atPGYAEmK7Sw2LpT8BdAVqqBY",
  "key5": "eXBZe4ENE8fhgGHfHkmSZvL7kJvYkDKjPdLXbN11igxsP86sGTaFHcBTUKNEqC1Aw8mzqUZF2cwnuiEquRR5mxd",
  "key6": "f5khNnEYemmhaBD1gzXoZmJJ6UE5QfZqFR3ECvMnCbmfebYjioQ3Z6GWWPeX8GkY4X5x6ZMjd8SQhm9xSWvwxrE",
  "key7": "4ervgWGM6qUBzEGjejSvAb543833o8Shx358WtUbTaNZANFfttr8XrbWqrY1bCwXot8eHnBLCaKGkEWWFpfFC4Df",
  "key8": "5Gw5Z1txHi4rYXMvxzA4wSbVo4v6FHakf6vmxR4iyurfYNvusNCdkvpUnK7U6p1oAHkGU3QYYwUTeb8hugWrahG4",
  "key9": "La5JrzRimyPvFMziSUjZkTyhftGF8uVkmWoqaX6FirCHmgzVEpCKpd2gPxqtmjEsm5rV1VcPej53HWHJSpuWKJ9",
  "key10": "2vVBCSKPBaBEmznuo9DKENjjNobhbDktyhFW4nC8yQ58y4DW5vqxuDug3W8N5vRezD9xEUjUnK53ZXi3KHkAdi2a",
  "key11": "5sZENTtygCZLMVH9t1Ro1TGQZM2cVF5VCGRfgmgY6aH6DgkBRPWkQDCTNMZtYybF477KoMYs7xLbg5F6Ry9iqb2K",
  "key12": "5rpnLtsmPWUETfB2QJkzN8A9k5cu41it9JZx6uE7hcKWxfpZYPgjcuWqNRb9jHphmrMzBAAHwh8sHFSf646Q3krg",
  "key13": "2hnDAYz28F21hx5fxNa8jWHduJ8tPuvErA9oS1rjDsN7sH56tzrpA4YbNVgf5DYiJop7Hs1rn9vnCyYzj9EabioX",
  "key14": "zKi3cut1NCboHuDMcMYXfPtj1Hg3zjeFNa7FfQTqgUepMCfUParDUUKqFyRAaHW3qm3npMRYPrya6ipQG26ymcY",
  "key15": "5YnNra6wkfRm8NGWydspyBXDANDCzchxX8GN1zXRtgmK2L9xNnXSRy3z2ETynnKK4nrEfsWnxhgAUnRgcPGtuR55",
  "key16": "5axJ8bmyxvRmryxgHDJd9L77r7WjVsmRFzM6F2X7wyUKGL4tVDD7D8s2BFfbRDXRWnfKssATPVfoEJA8867Mg2ML",
  "key17": "2jMmnW75CDYPLNUY4G9JHYrZ5wwNyXxsKxJdXKcLyfhoQTrqfsZnZNzxhK5yAoxm2zf865ChjSAxNp1zyPp6tdZX",
  "key18": "4KkqLTJnpUNonwegWTjDoZP9V6zptGYQbVMPhYLi2whhKk97qrGTcJHuBvBXCMtAyLyHk4FEBsxvxMbc5vC1qNSQ",
  "key19": "23fAUbS4ZR5vyN2jnaD7UuVQWVXUHrNAKWFfpwDC8KQKP7SMSdxqjQbnnQeVcpjTjmKxzrDWQ3RE7ubAGZiRj7Pa",
  "key20": "2sSYd49Wnu2hCSsPkkwYtk4JVXYpGH1sk7wwXWRW4RSBFSgGgD8ZUjNFkW2oo1WsrgumJjw5DrbnT2PFmYvVaYtP",
  "key21": "4EsdsRzevTZWSgsedbfZEt1NhdSpQ9LifPonVbPBxRVsMTD49iKHp1Z3jZTGB4g1p7U4TwB3bnjmpwpwS5MPzN7E",
  "key22": "NL5YdaH9ANnYCw7APoxxkuT5atb5bYvSQBtYVgGmxyqJVcr8sSNGcthcoukT65cR3GB1hjrixzSFk8rtNK164Sb",
  "key23": "FVKZnpGvr8Uk7S1tA4bADg2pFMMAPzarqPYEMRce8Q5Rms4g2aSRQ8FMUca5csYpkURu85trzVSGuoneTu6TC3r",
  "key24": "3VCDhfNDn98Cj4hu3wYZwftbHc4oRXixsrRpXPaUYUzbPgoCKuMwMb5Rf3ynHHMugc75L2TPRMeEZYNgVa1igsH4",
  "key25": "3J4VCDJj1du9XnfMiJf3sujV9MHyYTNbuADCWiV36PEmJJdSvyasZUYfsPsV3FFTfKGPvgpYMFYsQnxWt4TrTZ7",
  "key26": "c7HZwumzh6e7yEpUBMY8dGiT3kk98hiQMuSLPGgFFxLPBesF5hjhc7eqe6iwWPZmkGcTGJzX1zefFsC5a7rLxNS",
  "key27": "5Xch7XkG6EaCns7GwAWKixpivKXwQ9J7hCpTr6s8r1rb61XPegivzRRwVTCoq1SpsyTHgSBs4smiFBrbMe6e1e7c",
  "key28": "jbkwivcmtPrrVdmbYsPVkd2QgV6vFDgc5epTnd6qPrWuZ1jbRXDt8gyaR21xCfXYE2wvts6bcc4K2Z3LMgAASi4",
  "key29": "3H2T8qMrFofhSbknEwggQdaroDwZjMwFJBH1VQ7PdSXdKnU1xX6deZVzxZa9ZhnrBAGTznjYLnvpYeKoZfj3P6Km",
  "key30": "jHcMDYkEPm2b4GDFBNY8D2YfWVh23XZ9a1AskgYj177MvVmuXjY2Gg6nWQBotaK43xPBbHduJtSyBNjDcJoQur8",
  "key31": "Ydg7QRFe6J6pNJpyRSCszDiBWJDZjf6VNAAJzS7Ts2oiYpK7BNwb7UDWA6Tns99ytQ3MJKcbK8NH9U7ZYBT4wfL",
  "key32": "2h71j3zaVxXV3x4BoDYTRJPyhHYdcZrinE9yWJyNCN9pbw9tru9o1Z3XepP3nJLcaJy2nrKAX6ANHVEyCCU8Fvkv",
  "key33": "4mSQcit3SHFjQortxK33RJgfGRxuaLU6ViqKatq7dzLV15aJtgpfhTRGCD2JbBN23Sm1vbd3ip6E5hL4KRFHm6c6",
  "key34": "2WqnHCymJZwnCvSnLaGDLfLDF1nHoUm88uoh76yRZywKPZxZic4GkSDmU1pWeYDms4SgEyuZEd43snjDtYWg8YfW",
  "key35": "5nJG4uJSiRanAuQBHrhJpQpFWQhx5Eerw8qgpRngyNtXQRpMTny3NjhgoRsKEmZKYqJXVQq8BxYkojvazKreEwZg",
  "key36": "3ih7LoiSN5KRgGc5cwuW7cezVrL2MYEPirHiRTjZmGPqHdnSwy646cGsAWYtjVjxeQfACdMwEx9rUzMzbuZD1BQZ",
  "key37": "4TSjDbYAKqD6XKAKnQsP2Mb99RxMwmdoYgC85fo7hzJ6kS8WNnm43ARogucDhdBnJGQrBDTeD27kKaRopfzFzh2b",
  "key38": "3FrqXa7ULJQ6fbi9xqcLk7RfRnQY1h9bvCT4jAW1khEvPUqMEnhefXnXeiaQb4343KvqPmS4CW9urYVt3HgYM5nq",
  "key39": "5wzMfkhnqheePme1wVNYLL2T2QMqo3ee57fqFxbTyGGXdaQ73UdwozaKLZ52zjPv8FhBBdpSPQdRZFiuxcagGAVJ",
  "key40": "5DaQNnY7rHJVYJnmdGjJcMYRtjgMsRweUQYcJYhmoMgYYabvVoGH8UWrhin1wycGMHzkTbv2Y5Z3GrHqJjWETDAm",
  "key41": "3YThjeLUPktgFDq21rMcAMPHq7J9MK2JkazbucUsgtiQyaBGhSaULMVAjbn4rDzkkG39Hyj68BHoFM5hoiynhcSa",
  "key42": "4DfMqTVTE84uzTcJhRB53jyyVbyYsC2yVxd9NTyhC46PPeiDeArQwCVDJnPP5z1GVy4jLqynb1wuNfGdBpuJZ329",
  "key43": "41XxpeVArkHaCpWt7gV6wnR2zKWNe4qXgpwRQBvSLAMqcCkSuwrkBzFZ18TZTytffVSn9Z2wAgoXRDkpiEfiypJF"
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
