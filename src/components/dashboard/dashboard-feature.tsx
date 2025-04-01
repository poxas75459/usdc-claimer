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
    "4fErK4CMgVzjM4N9YDvoSd2ReyPjh2q4iaMNQdVVg2jvohBSoEqZFjcy3tTW4Smu9rwee4B2VbmYNyynKUAtCAfW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HCxVb9kVQjsFMq6SNRVwyXSQH7jUJ3UyLHSrYJu8iJ8jk4eLLjRfQmQDfUektKzvRanyRMGPYaoUWVyrwHY3h1Y",
  "key1": "3yno6Au2HbqakJjirJxneGqCy6jrbkVLto72yLYyosska5xibfquCNyeF1UaxznDnh3rvL6h3jLsvecL1Heudjjf",
  "key2": "2wzBVaaRNYXrq7NGyCnvj96w4zefrwPfXzdaCsf9SG5DWjcpiuqkaNV2yBFNtjxJkbQQERJXHDDKKuhsNeEx7VK1",
  "key3": "4fmRsypJYTSTzcFXqE28T6EFFeAjYKHiwvDnGKVuuMJhaTShcncYDTm2Gsu86VoqkrreuPzDeFjpEtmuPPoUSkiM",
  "key4": "2dnoeMzKXFoeFT5RFbLDzNZvvwHYMNDvgyhrnTYTFcYhDgNiypWwxVeAHonGi8dAnwhBoB6mjF5LQy5eX4Maz9mY",
  "key5": "Vn5rMJNdg1uULMA2bara1yjoBDt3kArt6Q6QUKc3PGCfZJ74gR4CucGxSMJPvT3i5FecH6Rf5FpEqZWnES1xVPw",
  "key6": "2AWnphwvSE8RPLVpJVtuzNH1n7TBDAnRXt2wctarZHW3NRrR8bW4kVBqcMKNXJ8zaQeETew4AnWQn7F5gfkWBife",
  "key7": "5xZR5NF9aCYRcxEjWTKJLC3iDeCRavcj2uzdjvadmBpYvzutvMqxZQJ29SH4kVK41pQoWJNzLRQa244QyXNwdLSb",
  "key8": "2rf3jFAFwzneTV1Xq8BzKRjGf3rKXggGxgSzdiVcZ4njugBushpJScvSZcyWsvdHJeKSiDEbJ2hB8ZAHWdz4JwGs",
  "key9": "33uZbrubNumrx7wrR7486yvxpjwEHbiQB5HGyuoYbQMKJHFBpYYG1n1gAzixcEkodNgp3b8k6KoqbXbGTsx9AvVv",
  "key10": "4AQbGxJ7kNGycQvCkKAe4UFjmRcwTCk348e7L1BssTPFV25hSjzBh2jVKSsZqHUCmcsepcXPesXPnP3Q4a9VuNX3",
  "key11": "2Pvq1ufgUGHYgRFA4v9A5qty4PB25DbPsjkoihdJFYHG94rjn44RH3Ybg8dizkEWeie8T8SvHEJRV5kkhKhFX2BY",
  "key12": "2qqjk3rq4oxfkusgNm1z6DYA7nydpZ9HXWoBwwprrFg9YVjujLDwJRRzcvk5uvoEGwgCnUtPdThnPXEYsdtPRKii",
  "key13": "5qCATGcdVDncRJy3zbEt7EsfT7cF8ww1tpCUCvyNvv7H6eUMFTH5iGa8din7gQLTE35rK9hRR5X6kYQt3ZJLmMoN",
  "key14": "486asR8VA6kHofJAtJKioTJCM9RP7jg5UmKDtWKiG2Lu8AY2JnmQu8PwQmAgy1qjoc5iDEa2h6nfG6EPk3V7HZ3X",
  "key15": "jiLckNRmGVsC1HkziC9MwqM3RUkhWPnVQ1937zrJTc65boqAT4wE5rNnuyS3k12SoZrMQkzF6UXbEJtHhTPrXdg",
  "key16": "3MANj71bUkz45mZ36kiVNtDyaP1gUBJJFbevhYXDrv77Mz9BvnTNLKGxkai6DBF3CGr6cUoeDzRq7Du6ySSJvRLJ",
  "key17": "2m9Yo9wrmfcwLqXyoWhxVijto8MFxJv5SKVNwcFJeuiFWuz7NTeKTiLGZNr2FnKhvd2hJA2dYtFX89B3vtErsqDQ",
  "key18": "34Ud6ZbaKN41KEXkvzNX6UCisWjJSXvnAMg4cL2XyoTdfatq8qwvtDkPEpNMgzhG7nLF7Wrm3UTiyuFjYmcLKh3k",
  "key19": "2Qow6w7PdfmxXoLhPrH3H6LMjkW5ZDzPxZQBat49kTgoSMdoo8eMyLrsSLXqNzt5TFRdjUZtUUw4jxncGZhgKUqz",
  "key20": "4b7RibE1kJZxE24FMwyCtyey5hEEvMeqrq15Wa9KXUeEs8mBGRTn6ciypq7rFPnjXiau5zmE72YPiXipwYP7XjXT",
  "key21": "LjbauVV75KavGL94wWqd5kPR9YTK6fMXKMDRv7qBJ5fEQ8X26WLiFKTddZSGnfPnxDy36rPsNzZCDiNEfiZ6tBi",
  "key22": "5sdCq5L8wEWBou2UM68EPBgxVpH1TZtN4BMffiNdzLVRD2aVuNHiQNbiaofMACRLcu1PMyZBabFWuDuo3tCA2xhR",
  "key23": "5sPy78uiTQVTxSvAGTmB8x99eyQbH4rQo1zBCpCAGnKDMJQx8ZPiKT9yKhnQW3bGonhPndhjrdXBBSLe5K3BJAut",
  "key24": "3sLuxHFhehLuaqAGWMrT2KRZoFypbdd3AvPNNbg2V4xjdqcETL2FPfTz8a2hRdGMBMmsnZmtZugYvFVF3Q6bawtB",
  "key25": "4ejGucoJ434KS1aZSf3SxCMpYoXqxewEsAEd8BbHoYynaeiDfJsnbN9VZVqK1LoWvJfvEwjCWj9aZDfiMLUvNafp",
  "key26": "3h2mFGYwf6FKfd4SFAFXjJwZPg5k49ZRQ8bPAqcpdnNSaZ9DBVcDCkSccaHJCPMcpgKNV3WhkdBdXLAEtfPSM278",
  "key27": "54YcgDqanKrz1cgw4CChLUTteLdWKLCdjUvurp45pxLqQczFnYugZcHr2xXc3USk3Y3vmjrQgqEa5SSC5c4kjVgZ",
  "key28": "hzGCoK7sD4DBvvYiu691h8so1GkH9ouWQkN5xqcwLHdht3tToYnyhMEDPrDJoP1XgkwEK9qpi5rjh6VQkoLCAYs",
  "key29": "4g4aU9N55eituy3mgAeRVZgvueatsTKn7JbEiFzHNchZrQH7W2FGsd2VugVkncBQ47QwJHsXU2wTbAbiLf3tjCf5",
  "key30": "5byV2SG1yyX4PVBAQR9T1pWsLqgNsQMdN3WXS5EtonWEG3WEubaxGhiS93o4xBbmEq6XwvWQzqwsqS4nVsF8B2o6",
  "key31": "5Xh9bbVjLfst4CVnegWjysGQ2HNUSYzsHH4vuPPJWxeS4dCd67DA2J6r1ALHK3JPcJkBCwpC7k3zADcrNQDzYfk3",
  "key32": "5VYQbtuWdh2DeQR3mJqhjWwczWnPasztzu5reJAm8J8eqMB7zAcYjmNGUav4c1Pux2nQQf9JN2ib8PYPvQVsXnKG",
  "key33": "3EYs1nzcPsEjvqdSNR1K12KFKWisz5n6XrGfQFpA8mRqBdBrW9PSzrvaWmWi9HNUimgbX3Pr1BFk4NjEm2njU75g",
  "key34": "2hMb6P9E4mteM9zzCaHB9uAM1pebUej5qAke8544CK5p4WRySE9SMVxgQkZaazVv1AdjcfMraWUCtL2noXyzVNm6",
  "key35": "4U5ngbo7YthpQafTQ7xF8kxgYUMpt2mDhCCtvFeubpWRbxnQczcDQa7W9VhFqjh8zknqF2DxuRGKLvDvGrHc8URB",
  "key36": "56nsqUo3Y3D4TPMLszz7Xp3xEGtifc2QhZvjiuF46TXnhp9qkyo5G8LDtVPPyrmzxKPnrvRzPP9ctr3MuVX2FvSJ",
  "key37": "631bzcTLyFN8eGC4nwirqWrv1pD5WYkj28Bs8JzihcuihAqN3DyQojPUuDAF8VY4EWNmCrKeqBkjtqfoUfX7PFrx",
  "key38": "2z21czwJbgoR4VhCeL5XVE1ymo12f7iRCoN64Z4JaLvVy8TURQhkiatXNJkzLyiYK6bskpKkr5HD3tsPR89i8N3q",
  "key39": "ADqD7msXqPTxk4NfP9ujGvN3tBW2FgmbE8fqXcn4eLYqrwBfQVvHDrQiSvUQ49QuGZZqcqfQnRTFu4F2XNq22wu",
  "key40": "7KF8ix2LpMzjCcfTKA2wwWzpZvRHtW1urjt9wtazYJ6BtDM15bPt4JYoEj3WAjkoXkikXTenLD7udQDjXJRU9nB",
  "key41": "3cPRTaqsXLZgtEzycLZ75cCDJiDG3QW2Dv191qVm7GR5GTdRJPNJezjSvHx6WCXQnqDdFdiP98uHnT3qWZy84Jwx",
  "key42": "67FNJpPzRQAfwH9PjwjPBpxuvADeaiD6KGX8g6jJr2Vwz3RbFciXSx8GgAc4QTns1TG9tvyp5Tsos5CJVkUbfMVc",
  "key43": "45kqAgoViE1NPdrwgpoQE7UhYtwPkqLgKmg7SQ8TKDW4T6Z8LkrphX9kY12jphVvSuFh32yhTYnZS9WGJhpHNmXU",
  "key44": "5FSKaGEK2ZZonLHb45TGBQMsKmgDKcAhEeZUoHK9YS5DZsyFYt7LCsPfWxDE6EhM3cwGqXSw2wjuz5gPLqkPeRPA",
  "key45": "3KvErDPFUiFfTsDVScjLBiKfxWpFtbwnrRYnFUyJkSyuV9h6H1EDojyyWvpBiF8BSgDGJraZzygcqMKUUcRHPX32",
  "key46": "3mz7mE25sLqVdYu2WQ7S745DNfNzL1RAFePU9eoajjsXcxMHKoVE9iScPcKa3Cus37LxTpZU53kqhjo2Ybu6axCR",
  "key47": "4pwcPubw6fWUE3Pq6L7DBSvMJMou4uADkFwdQkFeuyhJri7sCvdtPxY2HnH2aou7eym7gsamE1reABZgY1Hu4cPy"
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
