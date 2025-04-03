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
    "4gy88tyi7KBxBsRShCSxVhi56MSuKzymddf8pcj367zCFLq2bt8SWsJt55BKsLnLxBfgk2KFqccdV6QVJXq6Hj7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57LnjsTGiNYP5oA781uzqN9gLzAWordq8ZZFMKaq2xsz2jwCGczJMpt2CwRPRie2LaBM6z5ZRq9rahTs9PSr4FQo",
  "key1": "67hgNnoSdpcJfohkaMV8UGkCpk52GJNSLmHDd7YTGaDGab1AMw5GwAAKURTMbNjzheGZtjEFajf5uJtoQn5RktVa",
  "key2": "4BwpvHJVviueKce1aUsXqzzMw6v2yLc84JQ93iByqchzbbBbVAnDeginyAGFJs3FVP8wkbUWgyxioHDEtjC6oTtp",
  "key3": "5Zd3t8MXMU8kGe5nfmysJfRhKjrqGAWhrfmCr4XL8tfD6ELfPWhaKwhxC2tMMGY7BQZ9Xrsj47n1H3KtWCoxkMjE",
  "key4": "2vtvBGUo1v8dVK4NLDo1hvG4yKx2wwqKovXHGJzYfmsgjC7DFWa4KQhcuNAd9UCmwTXq1wyCdCBbyEoFJ3SLWNo4",
  "key5": "48HYaF3GrY5zpJTKer7zqFRchw9SKThmbHNEHbZEanv9vpdTW7dz7U5GhsgicnPCiTNm1iSbEtx1PXq5JYmcAWiE",
  "key6": "3wtok1VTzGuRvidZXyc2FixABpbDreKDqmBwj3K72tiBh65ZjYM6kFZdPfiuCRfDSXUcopLLtQGi8ZF1HXpJ5XCt",
  "key7": "5qh8tHJfpc8ZBAyERHkvXZcjwRUu1vT9z6AKLFEH7o5JUw1cFwkfTLBBH63K4EKUzp3GeCC4zjfSdE68tLSXYQAn",
  "key8": "2MZ52uXo3T2nKpadqyu6enUWn2VutV27MtkbRKMJrXq7ir3RKskCSFL7Yeca3phXEhjNqscXGAtTgzW8fWBT6hNd",
  "key9": "Td9A3bTVvPaiEVPLPdNB3q2m6dcm8DPgpuBGAFTaRjonoenth4KWZpcQbHBBxMmWuojnWiMrD7mFz2uDbB4j9M7",
  "key10": "2Uj6po8DKvF1JiW9BDr4ZKEkzoyQuhvyCZphY5N7rur3syst3mkfeh1amCUqzZJ43cE2czSKDXzzzJRXECwrt4b",
  "key11": "z8D1BH9cMNrZ3ziJBagVDUt5JZsivT5Yi2nGVnLwt9QyHYtAQjvBnW8tZFUtVPJ1so4FQ1aJM62AiKVy91cKmB9",
  "key12": "2rLCuyUMMH2VHeMjGrVvZsQngJJwKQPLoiJdC3AxfL1iM8QSidkN7ey2tYhMLBeL3LRxUcc1y1jKJd6uJgssNJY9",
  "key13": "4TcrNMZDGEaYf7vEUcg7FKyrxmKem2QJTRxi5RFwB8VCiS8wcmReWLH2DYyAq6eCfLSW2xDQn1cb7qEC78LrL2Ai",
  "key14": "cN86CBLEDn5Na9VccxPnBePSduHWSQ3V3pmSt2cLs6nfz5478cUzB9FmB3zKSMXveWsWTaZsdQC5Cxem9bAgDqp",
  "key15": "5CMfhizww66V2H8aMhtPzGBKq2LUNPFeLeRK5tSxeL13dh3dyetGNRZditkTL4bsiwHuPTf8Ktqg2HuPSB7LtG7t",
  "key16": "3sExR4i31jkASJVUfXhqqa7YChRQrECUUg6bfMiuhkYXkx42c5uAarwv8G58Lm4br2DYN5ULGrM13VTtJYqPLC2W",
  "key17": "3gEUi5xS8m9zeEbbwuQFLPxuPzkE3m6GcNn7zemLeYaJ1mgr53B3LV54ADLficqbicCZAM7o9uh1E5fyDzCEd2fd",
  "key18": "5zeE7FqN38w9GLEKd8RZzh2GSiAjRw126Zeiyi37pMbzUhEYUGuoY83wc4DHCVsfd6ScfTqv2hr4AHs8d5daYhxh",
  "key19": "3bh3YtGNYz5bGSNDSCayZpE41EPazvFn7sX2fCztWjADwTVaqny49cfzr3BDgWJZQAYpP58MmofkNpZizYL4Mb6o",
  "key20": "3KLUrVWnFDXr1MXT5hGVDDoRKkKfKYALaC1KbA813VmHtUUZDAy6CbX8keHUkk1wmXWFSGo3UehAfbYwbUYK2qGB",
  "key21": "nsV3gK43jbhR6GbxANg4qrdt6jtEBd6A1PDGNuMtFaa1jLBoDf5h1Fdc9zhYngZLPw8BtFiZnqZt6LY5F6d3KpH",
  "key22": "3zpyx9b9Z6MBzsqaHPBNhneDrNYnGKdHXg91bsRc6rfqYXYzLNMWpWWNk1W3eE7Ad3pt1bVUV6Y3Z35rwLTCJDou",
  "key23": "Np85ZAsrdwuAZYbZ9GSVYnq54UHWWDT2RiAAJA87aCDa5RUBoM87wFqWJJQdNQ44q1air7Zrug4cWP5NRP2vyNB",
  "key24": "c84HmVqWsp6YmFciDAgn3PfnPvGaXwLAT5S8PMnjb21dWjxEaZ9KHWMmzwxGeG8FonmwNrFTuc5BXXZXLYG9xLd",
  "key25": "67Get2iXYLLnGh3seWayeLsy77MFMCkqei5THn4qvMTGys9by5J5TN5vhFu8qd6ASEmZ2PyiEH8an7gcug4LC8Fc",
  "key26": "vNKDMs1F4CTFsuWSCX3sSakU7ShLZUz8QUT7QGpwzAfLxGNM3tpJPAhCksnV5g2rRbVcy5u8jdnfYJfXzaaK2yY",
  "key27": "45Z91GLNLurhp6GQwbs3Uh1czg93vpquHD5RCSiR98tCqBcbMCBGzaW9Amd6SJ2okJ5NVbmmhdPH4sHBDEpzuSrK",
  "key28": "3QLiKWuYQk7iJDQ1irNQMrfGyBA87uhuw38S31oKQV5NFGJh81fB16wSQMdF1FmPet3qzQfdCPsKYwGzn66snceH",
  "key29": "5suTWNeqcDaWiWY41EnRVePyKSS955RnviJQ2XXaYdZ3gnJKxKqNcgVDKQyMXYdSqkNsUFyDgBidZ81GusaG3Gw8",
  "key30": "5e48VdEoZEezMPLTRsZoBbEjsk9UaAdFJhPuC1BKcpMYWH5rTRsYj3tp578gcaVQYziyNUkAUpm5PzGZf68dkCK7",
  "key31": "2uu5Ne42Yzj5QTA4mShYQEAEvth3wiRTt5ve2rqXPXSxAnDgR1MUAbaDnnkNaZD2CoW7ZtS9TRtayen5LntEw5yP"
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
