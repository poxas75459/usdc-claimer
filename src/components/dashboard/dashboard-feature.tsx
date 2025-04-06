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
    "4t7EFSD4SpSBEchiHgE8b5n9Bm74jwhUxL8srwbh19oxgRZTxSfNzwsmNzbafGkyBmk9vSLxdt1Zyc7ZBuEA68Vi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wTjN4stM2tVvsTx5SUaEAv383T2xTnL7t73ccDDLme6nmRi4E98t9TAt8perAUUJUY4hox5EfzSqqZzv5d8xeJa",
  "key1": "63fVwDNaZRbngzhorPZKzwaRuyEFD4HeAMdqDtY3jaJL6jNbz4CSXwK6dqV8uDNb5J2gkcH3ZQY3r79NKEXjP4zk",
  "key2": "2KHi8zonVAQwtXgcBH2wCmZoMb7YBWTyuG6TWrHGGwmNBX6HS95pY2h7FHaBmP2F1U3QxZ3ei4RmgzB8tViPAwag",
  "key3": "WsKFvvCaqbh4tp1cX6AmULgyA78FTnMPJAEyuTiZBC96B2jqaKHsVSD2ZuKE6enQSGhjxW6YuKWcWsybFYFGxUy",
  "key4": "8eDqvqobG5VpDPFUArdKGa4cHJXgxXWHzmC5A5Fp1ESSsVzHUdt6qELgZ4oQyAToVFGJxUzcbYUgyrnDCqTEsCt",
  "key5": "4KTaxTEYNBGGtVAymjXVP9Yz7djrXD9WZR2dhqy1JUWUFZPnxhm3WfChHGRbA32C4TwU7MCAth5eimYAm2j1DMm2",
  "key6": "uC2vx5XzqZntJvmnCScbeYgyDCKb3BYdMWzQSHXSG7GWiRtKgzssGxarNEiXXeYu3uyV7TMp1tZek93Sa8YEA2v",
  "key7": "4VVLjZGJmcrmQe2qPrVafaKxU1wgAgP9vi8wonVLvtRgtzomSQjhEe4r2k56HkY4Px8DVH9ezH1FZqReCYLDvmdP",
  "key8": "59Xim41nL2j3Y7LogRV6vC5Udcjie8LxSXtJofUdCPVTiemHmdNUkhoQchE9cpPi1fBtpd2LeZKyENoc9gXdneTU",
  "key9": "5C7gNMztwA2KPV1gS1LMxMkWVE8wgwcyE9k4MdLskahgRhpnpzAkgQ2Hrp1RybV1nne1tH6qR4jyNMK38Yd2WhyQ",
  "key10": "3Q8amyj2i1VK5WPMkpfG1DxC7rnptZSujCoNic1HrR7iaC5WE5qfCyQn1XAbyvFUePrFTZP6XDdbkKVeo2zY8hxh",
  "key11": "2u8Mp7kxoToXjJCNcerJviovPinBXUi8rTurbkE85wDpB134bKhBpZyqbBFWi45L6a3FuvodEJUPN26vaZgghM5V",
  "key12": "3LYgwqK6v5qGi7dgMCZyJKw9S4U2r424ERrUhbsemdYVE4RDRDwgbFhRYXSrrfts6zBSFPzjvqGirafDuciH2VhB",
  "key13": "4v2NqBDJtgWcAktiy9vXP9Yom4hikYVg5ZbQJpRaZ3uLSLrg3hyBnmryV54r7WYuV9pkFyJYNJDo3xW5LAmHhs62",
  "key14": "2z2Be5ysTX6X6kWT4ZXTgC1ThS69SPP7ms84LAtL5RhDQvzMLutEwazjRvMkgBi7Qfj8AhNx9QwnJDsEsWvKLkBV",
  "key15": "4pbXWmbD76TA3wpB1FfjsULW7KUnMzmrgQhQZWQJfuCEf5UWtEpPAkiXxonVyWrPtY9oXpj2azNRM8SDf3ShYp1m",
  "key16": "5Tfqbiq2wtZ99xD7UAZTBBZHhjLYnDB1CE8gkTUTmtYqQLHsmjrEuA5ha3LyFKBrrkWUGaQpGc8dkGzRahAp3Stz",
  "key17": "64Cmg5SZBTsPnkkfBwostUo77mYUwjvv6Cy14mCuKqFSkPz9rnyVSu2eo4vSBVqQvmquMBAEgYxhduTqtKqzdgAX",
  "key18": "28hfqyhp5P7JL5n4S7CDQ1ncvkcpQq971tZHQ5wt5eoAv6pTy5cdagBkvfSCaJp9DMwg3SSB5uEJtJqaARJVvLfq",
  "key19": "3TtNjHWCb7xaqHqzUXVFMuvTCVFkyiyQx3ThocSEVcUJevMvuDZD4NRL7ivJXpKnxmurZaJ4MQLCp51ntQK6KJV9",
  "key20": "yHBqMbxgkgkyqxfiVLEHJLCHL2WF6ADJ98wqnMr7dzEDJu3Qqd2tp1rMgZJWpGUpvPdmUJ2Y5EqJF4UswFB94pe",
  "key21": "5zkxopSaVFPqbyiZdxjH5QthpqkaAsDhNgmcw4ojv8pSJdH79oTMUxsxjjaLp5BPj4YeWoAQejiKaGAupvbQpiGu",
  "key22": "62s1DS69km9hPDd65tyycTjZWGWtzF4yTvocyZgN6AQTA7TwriBKGCj8F9G9pgdUkQzURCbmcQCqmNwcH8ia6QpH",
  "key23": "2C2BLMvLjz6a64PdiMJnu2FS6cqfsZyxAvxv2UwKb5SgFpRjYSBCySENsEv4cey7LKBzg9QdzQdQsWrVq21vLxpL",
  "key24": "33y4xb8bANtPWLVzCksKWwCMUSco25T588f3T2jA3Gc2ivMvKKpJUEU8ycskyHoh2JAGWfbY95zUXaFmePpPEHiu",
  "key25": "2FZEhMu7rekPYibu7TeU1x6hyUtVH8c7N1hPjoeVrrMWjSGuMaytwUF4bzueEa6aCs1vTn8mw6WTFxMj828uoLsJ",
  "key26": "4o4EZ7de1Pf2Btfx44PcE6EiwHCydWVKttmW6eAWp8jRj75WR2Pah1UmTbJ9kQ9MRs9jr6qX6z9QqzNTriUewDpy",
  "key27": "iCTvWVcW6CZ6Vtmc4L79S7eRVbVitEkMyNCf9BKxbteXR4YvhTTdhZrgvtg6LFeLQvd9zhR3ateUUoZtDa6Epm8",
  "key28": "4VLCRmv8rNgYBsuceq7PbTMxLfMcxci7MvAPsdMnwzXdbcEgm77f1AaDCNiuiJ9HHTWotAeUo274muDu4QPngwA8",
  "key29": "5Gy2qUPy68CapLuamCPQesBzHrjNYWx1LG6V1vuk5AfwmesWXEipC5MDh9SuYEyW2CmnkNw488kahJZNm5mCpG96",
  "key30": "4o6gkqABZTorA1VBSEH6N9kbAtcNYrqLwCMg8RyAmQRUD8sSR8kx7EAiY9i4Du1wpdPesjajezxqoe2PcdcDnX4V",
  "key31": "5dL6ctz1f6of9QsycrkiCKK6HpHdgQ4ivySvqLofCSUZm7b6gev5DeGGRKmEx2zUyN7tJWZqbTw1KpzHKGqpMLu3",
  "key32": "4QDvgvK3xr5Adh4joW7feHXQBGaKjaehc8Rmzqnj5iCa5ztfh7j5FsfRA3vpz55EVvnyqV4Xtp93FY9QocDQYzJt",
  "key33": "3wLXqpYutqWMRPJrpUTh8qKWssqotDvua9xrKxr3Eg1SboEL6FhAXoK7ScwbxADAyCVbU5E7BAtNCB1wMPyHQX4C",
  "key34": "2yznHPJSbqqfCgyisSeeauoDNdkJufCbzztaY6ZfYar4fTQrn8NpMiqUaJXghrmNzJAjCMsUbRB9S5Mih7uGtf9F",
  "key35": "3wf11Uf3YtTwcU7umQvgzmfaSgdvjAsS7RiaqUQjwicgzG1vH7vSC88Ux2KwUdpfQyHLB9wW9FpSjad14GoMQRZf",
  "key36": "3XSi7YG21kKiuyXgtoNzbMReoKXrY2rKBurrj3ngWK1d8oW4WQQRTikdL81DrLPpHnfSjL27VvL37naCRDs1Dygj",
  "key37": "3RZuKHmWxaPxBvYxZQciksJs8hQUWo1udxzuBpab45Kk9XmeiXS492cRyNYj3Q1Gga8DDUP618EimLCezaYNopcq",
  "key38": "L275kFT3SKtdnPsNGMKRywycD8itCwjn1mzNsKEp5KjefbbexQxTAsNax9KAxcABw6cFJHahowGpM6jQyvUjffE",
  "key39": "2H5mrQTHvq1r1RTvyk6z7cbGFp1ppgtseT2G8yghG5piZvVR8kiDvaG35CF3XiNqX7JwAhn2Q5XRDQMLddQJhxWz",
  "key40": "2RGZLbs9J2Fk7x2HZuzupumjcERdwXxNy3nav5wb3VeMzAkN8g7NPxjVLDwzgYGyQiUa39eGgkoUmmQvvYLBsXk2",
  "key41": "31DcU5vkpipkoVF67RJzL4rBog5UJF19Cb988XwFgzvBotTfrv5yL63GBeVkaKqnk8ieEoMaeG7FaneewKwQZWRP",
  "key42": "65NEdouBNRdeqmyBtEX8wUAysBWz77FvKuKsoWJLV83X4Ywfh3gimHRNdJUosxZtXHzJSc7xsQ7z4w9gamsTNpBv",
  "key43": "3vzwc4C5k123g3oKrAuQRkWn3vTaMyaQ4AbYHoFgn7D5Ly1ACn36bxPN5CzhBHkk7d3uNV9jUJJHzgeR6BESU6CV",
  "key44": "kjm5DPp24V8N7xk5x9c774w3q7iqeqeDZTpfFch9fsBWDJqM4PkDfbuezgRJPhD1gdjYa37j1LPetdw2MMCU7VF",
  "key45": "b9JaMjbkPHwojGtxoSkaR1FbP9MCRdurcfW41eYfykm1W57cbpGU2vcb4opxs2qW4sH4eZYwuFoqnz3m4gp9EoH",
  "key46": "5MTDA4j7MqmmeQCfouvY64xSk5YXhb6oRhtF5RnfL5AZMUDDh5ekp3KH1QopY8wy1mJh4cw1uq6UrS52VpvnKQRq"
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
