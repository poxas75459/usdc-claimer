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
    "49UhkN5X4rjpkBX5ExbBz6SccQnm9oyviMiUpobAJmFyyJNWj1f1jgpzoB3FRNzU9MEJCS9qGivAsy5QS28mvdnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "71qdRKzWnkLLiRXQQbXk1aikVHgCaVMYNU5fD6gb3xX3ukpiAyH3ND5eqK4Tyg54otc7p7TLkzonwqDZRNoEsmy",
  "key1": "3xo5cj8txUnKqrmGZby1VKjcaLHFQ5yR4N5b4GPx8QZ3GvSn83389bF6AP6zEZv863j1K12TWb7TgJsDCkUHKsWx",
  "key2": "5yzbczKyYqc3VZguepkrpoeURLRaxMtFueYYFLKVopks1bijTdeEiwZQVHBV89TbKSEwhaBAHhVkYwu7xvyvZDUA",
  "key3": "21Xquo76KmvAhknLV24YnayFK7aM8w55EFrzqFTQEuKZg65Bqj3oYDRhuLtC6J44cKDDe48cUxqQbzpmAsH4kSPU",
  "key4": "2rSFKYYBQHbxanBk7pWL2r5CscFSYjBVxFTRjhpz7nhg9tuT1XdPAiYpJmh7iZ1zWg1YnXioiZL4wd4zQYNLdSHq",
  "key5": "56w6T24hLkj4aJ6KYBTgf4r9fgGnRu3NhobU5FmE9ZFcBY9sqvpg8Ag7vw5nGGRJHrHrmG2GgsbeqUgy7HksTGeb",
  "key6": "62RSNxGnEkwMevvWzTVb8JL9ifS4iSFyRDQakadNZrXRg77iz8kFGUEzWJvGzYpjFiFdAj66uZTzY3GYoze8v3tC",
  "key7": "31oLGYP1MLmn4HkehpGkryjP1EmUhPwYrYuqhXMGZ6kr6U821FiFsUvxeepnXNfzGH1HpB4ftMQPL2SxHz1htEEF",
  "key8": "2qj7EVbcYWvYE2fZGXmvPt28btXVcV29e9iwpKftVB92JJiML9rV1aFcVsqnFunDoNYcXWH6uocJEwer22F4xQPT",
  "key9": "5HeSHp9yuhhw8KELpMC6mLXfMVYYwpSVNvpE5dV5cC4kE2f3NmFLwsjwzqp7nHX3yD1BSJDb8xjrtpYvk8LGqvCr",
  "key10": "7CCouKSMM4NQKAvvKiFgKJc6vSJMG2K3Zp39DtPfeYRA5VjxCyme87LCGKjGQLtUNzkJSVsrodYWPrNnTxxMU1p",
  "key11": "5JFXvQvcSjKS7XtQsvXdb2EVbihX6wddTyiLFjXAzdw5iwdHpcCg4XkCaXdQBtdbEbbxR9wCs3xhppGVsvEbaX63",
  "key12": "hCGQfqG6kbS9UqzeqbFfrtjHBYeBKunH1Bd65dwQhdVyY4TLfA8F93SNk6s25euQjTrqADG5WoTNr1m982JS7ds",
  "key13": "uZfx5hD9MECBsqdJmJv9atqvEQea4PMjVoj4WP3MQJr51ckURj5uSSWuZPHLsXFhX6PAQHoeQjZ7T3XmCaNmuAz",
  "key14": "3EFakDWSZzcibeVXAGajLBb1S5dkzmDXz9BvzSCsRZKohrNsHq8h81iYmXc7PP2ooKuktqYfzSgNpBbKG7MEd1hJ",
  "key15": "2xuvWUrDpaPcjnqcqDVvLSCWHXEBaE2g9ufLmpKRXUFEm7QwsJVkd39Q2tW1fyQZDWPiQiPh3KmwxQ3qvH9CVEn6",
  "key16": "2kXDfpj7NwErWQ1zaEwXobH31WedgZg4n6kcCw9FeYB1uSEdPPmzRRXW4FQ2TV4EqhyndGQ2sntzCDTdvsbJdSBC",
  "key17": "3BuKgz1WAfHEJQH8frZT1SLLJkd9Jcbt649VwA9tpXsbj9cntmJYEUChwi3QPUZfqDLT3McojWvvEDdfh2fiQ1dY",
  "key18": "4vSekAPDTjRdfa3kPYBWtdcsfiQFnuDBNPZ2SwSCsa7p3zrZx2aLkJ9o2hqiARFGuqhWFdLRCNnfJEGxbMzNJ8cf",
  "key19": "eYRBi3RfeCxjmoaD2xMNcfzjJVMRMdGqCDzdaGjKgsA19fKsTtR7DUbYhfsLm46QVY4sCZgKgk8SUJyFopBdx4f",
  "key20": "4QsSqJMgdTNKobchqNrT3xzaPGcjuLc8Sb3HMzEnjzYjWovvfHm6LQYafbbaTfRRyeVJUfrkvLzBxDkxKZDRPgui",
  "key21": "imxCCNoruPAgpAZaXLefbjTragfjboSQ3tZsGFk2DE6GLzf6bMoqkWgh5d6jsiNA2YcpMWZB4ahJkw6q28VcsxT",
  "key22": "5k1G67ar4zgxkqeyVaZnaJy7AP8awJgCWoY7muJ7EotdkPKHW11shN6wZgdrySq6mUthZUxrqBy719pX5rHaGsn2",
  "key23": "52wCNBPMBZdnYKYHpy1pJU8EPANoj6pUypLNyTrYWLApsRrGydLwdN1YyPnLrpoUnRU1GxHwLuMT2FnHc5vZSkX6",
  "key24": "2HuRtsaCrgrdZDcyuNDNXpjNKtaHtBVv5PmdjCzhmX5S859s48oTiaMGAb1kBCYkoojzccFhr3HSxPGjRGto63xB",
  "key25": "2NKwGYGfWNfgybbDZebteFWjaRnyRU8CFfmCEn5FabKzCEwqX7jW1pDJgsYK16mLgXPTA63WMFNaovwQwbRKZLC9",
  "key26": "54MmmzGmJr7eHYudYFo9FtsSKCnGSYYwaCMEoT1RBcYZLEfbaiquAWWLgaxCwj3fJNP73AiSHfqCVzSygTKQUTjN",
  "key27": "3teSEpF1tJpcL8LqgbhtirHz9y571CfbEfexszEFr1n18DfYgkk2PxErWMyHRyPBGJ2Nf7TeJnx4uiWW85842zy",
  "key28": "4dUAFtQjhnVsnU1JxA1PfijYQyeveG7XCRmMdjxNMiSdDLDeQEYEZpDwvdtu6sfU9sR9NVkKGp98TGBVkZo8Gtnu",
  "key29": "5EFdVTRg2PwrBxbYMdH8H9AhFseJjNGZrzn8GMytasCvUEzMNayo98rY8vCeiqwReEArvEhbNcrY3zkU5mJzc2p6",
  "key30": "2N16aSGkNtm5Anurd4bWsJBkY5VS7yJKef3AKmDdFPnisGGzjpHrPExfg87xXo6LyK1LBURGjadAzP7muPbBHNXK",
  "key31": "4oHoG4scSrvcnFCMD7fBwRTcK3bZKuUq3de2CA6cLj6nJcs2zMq3Fgjosa2PXbm6JAuwKp5uUunzUr2YMsFhPcMy",
  "key32": "5BrnRzjjF2wbLYnGPixbCaTG3kRnuGXqfwKwyrakdL3evT9QyBiHv8nxXGgQ6g5icp5KmCVdJp5FYYwhNRkPNAEC",
  "key33": "3H2b4uo4xqAmwyJoxNGFBQEuahr2dHKSCaNizxmTjFb9RBtk42mSs4puV3LPk2fPMPCVMwjMh6sQ5bo6nywTHEUn",
  "key34": "3fGD4pwKWMsducMQZoBWqe2yirEPQVQjotjEg731FrGYXUwqpXZs7BDr64LbXbbA4dmqsf4kyZN6zeRR6NuhFyzR",
  "key35": "3RnhaGcxmnWgmY4v1upNLbgKCX4EQ23QqW3KjJLsMD4q61xmaw39z9BE33wWsJvt9KC7wSxRMZfGEduYyAbZpJCd",
  "key36": "3v7GPJMmHjGTWxZEvUqPLVj62bvpVDss4KyqxPV7X79ijWGzhVfedSxbCdhzCuK4oKK4kpjdLXR7rCH67ZXQUy1X",
  "key37": "3ehTXPEM8nfTCbhxSdtJxQFgApeayfhGgBvrxRLm2ea7bM7f2tGcx5DYQH4wY4Wi95VUK2kiB8yseg6fMXpMLT4z",
  "key38": "3xwsbrpWRk4EFW41GfgtS2BqeouqvE2d9yTnf26V31f5QyRr6VFRqwVf7axw3t5tkAdEZAdQa2fpcfJeYHQEwjwR",
  "key39": "1MbgKYPEem9vxuRqWvDQABpXcRoNazLsE9mWCq8W5Lm5oKTJ4AY8W19VR6unYMzXdMCdUbHEVo7kLcTeBwuwFXV",
  "key40": "DvH4YEw5FQsd8WEPd24XpcPgZyCdBdfJe5BZ3gSNZMH2nifJtsFpnT8XnfpuLqNJcq6hUFzzZkguJpLGV79wwwj",
  "key41": "4HuaQfXAPohxqTDwvXUrBaaNQhwAojH4Rzy48GAHRr2K8VgoYeE9UkWc4nP99MdscRwA3MzeLC759YfMwny7qUNm",
  "key42": "gDJzBkhTSMf9P4mSY9AbjcXvqz28vw1rqW6pbeeJyEe2s82JZ93JsqSNtoS37semP1omcmiNjmYdb9YpPnGQWC3",
  "key43": "Xyy7ygf75TPUuKTr2z1197FiLKPZrhYFjdoHQD51fm4k1V43DGEhCQNc6tzQ1N3b5nkmWaAVvoTSnJz3WjyxKtk",
  "key44": "2Ka9dUMPrBBspAcZMKjP7Z3z8u1aMaGXGRppT4r7NrKFVXWXquS33JM4uAtQGGEwmNkjG7zk9VhLUJZdomo91wtf",
  "key45": "2oqBLm9sW6r1TV6vCqZGWEqDukx3Qt9VjTbCBarAUkiNu2hGmZSCD7QntUjJDfEwESKKuhx5NwcRMtk5qGX3McVR",
  "key46": "3cWC56E8fc9JSvus1QXoRa6kQNYStBuiHDKsPyooRuWHmr9ScptAbC4GWSmDF5Y3Nzp2Fzd1PN4kAFbA89tLvpTk",
  "key47": "2x418VvA7j6CWRtTzyDfFFDN5RoJVkDtLqjEeBL2yCVJtyU5f8g5P7fVFm54NXtkdxcodZYfVSiXooMYMRYWcWUL",
  "key48": "5AZRp2PzNn7CBtjynA8fC7RxReEoZRCvXcP5vjh85MZJbT2qfktf69CE41MBvpg3ijGtwXijWAy3gVgEgKtPREj"
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
