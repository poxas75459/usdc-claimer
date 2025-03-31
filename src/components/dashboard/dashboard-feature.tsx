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
    "2Ub2wXmEtkqytXYCg1dmeuQSk99qU4wjmNr5NMtTNZATYMnstxSQyLfHaZxNdnX47MKzUWZNxBBqMTPaSxWL3hAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HUHdXkteENNmR4KipdQNznGipK8um5FYxbFL3r31ou3tBRxtkKc8rrVNE25sdsM5zgUarnefjgA7urCPkatarWC",
  "key1": "2STPya5ukwUF5L13HWaNugQvR2vtexZqwDdUjNPPCeLtALv3ibu2bNfZTjcEWscS9Re1kG5QTZFU48pWxZy2ixhK",
  "key2": "65knZVvpNqWgdsLxzk6E7er6n6nA56vSKByZ7TAhsHuhd7LKNa2k7fMog8M5Z5WGdHoNqE3NBf46ddm37Y4sCUhi",
  "key3": "2LXob5s6CDQsef16UKKt6a7uJyCVsCfdRpEeTxwGVqT4rv25R7xM89q5VEnikovshmbdLD1LUtrd7GQjGcWKuMxE",
  "key4": "2WoY9ea1bJqhAw2ZDbGg8Cd96jiGma6Qy4zNoS7iJRNZ3AM3n7YokCsb44qRaDDwHGd8FyvTcqxbzYgdpkS8sHC9",
  "key5": "59YL5JHygutKo1AviANNyiA5gS4BYNPrbmq8ZboPRiYJpXLYz3YoMKktDXhgAsaxQsRFHsViVXynbtfhc9TMj2yV",
  "key6": "2tX6nycuDeKnyZEYR5SJg9Y8kNYSQpnBrz7xZT4U7yBMuZsg5j2jUuGVHEW4Edkuhyf5MD1TffRfBBRXjSE9mwoH",
  "key7": "4Ji7eEPALYpobuzuQ7nPej4Bjyu6aY96n9odM1Mwra1rgWmhST5W1AnHg7nS4jRAmirzKV2NquDXxjf8nNp3UR1E",
  "key8": "3psT5EYCD4twpc4jZQvtRScqdKrcEBbehaGhKNXw5iP6vZaJr5sDYoc69H3rTKiPRPRpbSCPmFNLJzRW36XGuu2m",
  "key9": "QMny1uQCcHZxbrazMKg4UVYL69WP83GydWyhjMj5AKJdFxgcdHRpNx1NkA6kizj4t4Ur33A2iGzsGgJeCgrSWDm",
  "key10": "2HPsiztRhPJW7dda8uVPzPdDut25E8DwVa5gvZMxzoYHPUFEbHixLggD2KgsbcdmQ2QWe8ymS9QHzwyPzoBVF8ex",
  "key11": "2MqUvrGjPGuLrcUm7yzbygCof3nZokh1fpNwHjyYbPsD2y3K2eB7J2ZuLLkJoKGv5FgmiCuMSCuZJGhBH48RMFfu",
  "key12": "4gzfBbHGF2WFvs27BNJrNVNSgjj72T9dUEWWgP4JkMdfQvE96ii2gPVqaMB9kZRg8D8t7vjQzqzykVGb6LgubMgy",
  "key13": "4KGdWKCQ9KtQJCWLhBG94aVFq3UFsnwe8mGeCiTUzo78aTkwKocXr2UzZuZfDEmH2B83WuNGj6e2ih6o1s9zCxQQ",
  "key14": "X7CBQAdkZNgQjEWScHT8sD3Cwof9DyxitBTtauVJq2Quy9jrSKjaTYckWUJ8i59ULsa9RQSA97gXNxycoJ9FYFT",
  "key15": "4DYJDwNJGNto5gZ4WubAKvVT8vNm7w2SzrYKZZjqbEotH5ym5TwAHTSrqY5i2tvNV84UNZZSvdobtfPCXZY1Ht7p",
  "key16": "2oZnWTrFjhq596LTafS6CcbQxebCC92FYLbJ8UWyykpoDK58KRbDB3MUnTVBTLdDEVK6BJwHhqeVPfQ63Cc1ZSdZ",
  "key17": "3HjoLC3MdWXmcwUd4d6xS9327qeHZhavquaSUcrK8er8KKpSxCbRR9HMrxgijTVaRmbMCBEGQrM9Eutm6ufCUT2j",
  "key18": "WSTg2D7QyAY8tqGhcSBpqTiibZyLaEU2TnV29tjyHzu5uZo2kHUTSCYUKsHSS6qZQuKgo9Q3k1oy9gHqL5xifxp",
  "key19": "9ALxHVT7oQ4Wq492n2zPCGPbipmBe13ZJAepKPJtxyPMjXEBoBAYPKDMjH2cpj5K2CxK6miQGTeEg5P2zkNZSH6",
  "key20": "3ros7xyNLUb9dj3zDdibJtzmRjMrh1CTMcyqSBNfDVwgy27FmsiZDXkVSor8KVee2SKdymhAKCrmj4zKS7CmXZvM",
  "key21": "tTN4mAkW2r9Yg6frLtWtYLXuFtLwkjyhCQVgiobkQzipKfXT6wqE2T5H3EXkjnYqMfP6ARnVPSt59hmj88uJSNo",
  "key22": "4SgQnA2yKnomubA3CymK2wnrvgShEvSui3DVEKs3qQisJriwSZGZHEoHo13qFqD7iWpBhi2JT22ev2pYS5cg82oM",
  "key23": "21DHCQqVZxpMVQnX553mqApcb785VvQhPe83WFCyDQ7Co81QtzyJy9P7Qtr5cWqdwP4wBHhKTA5jZtxdTmqGPjFo",
  "key24": "5Yoh24UnQaGuuB9FZsn8svLAAjsSbSb6rWYFzsE5yRhq3cECdNRx9sSLHBxfC2yfT25X28THWfiLEBdx9xEd4vFy",
  "key25": "2qXeVX5dp3A6hZCutxmYewyut57ctR7TzR2NpgfwoYwois8bhPwGJ4hSfqFGWeDmeVD36vFzopfGU5FUbQskhDaK",
  "key26": "29tBWw72jLGXo4Yr5PSEJC6BGjictDSH6emXDHXTrfbRqEt27FS8WVxB68MR5qmGVai6ojwpkvYMpNSogSb1sXR1",
  "key27": "5kXb9RkdQ99cxvn5LTg4Ec4w5TP7eXpbePdGgwXKrSanFaWoz6KPm2htYQrq8jrb66nDwYm6VELPcXFFxuq5BkmL",
  "key28": "4GTfun1rZzBAF4BrKkF48GiHDQDNTHCSZD3yE4TdBJQeiNy8A2fTFwiTzacjkzMgFhuKn6CQBZ3cUdm2uvRUfbvM",
  "key29": "58gVVNTTPiC3gZjsh3tyiMyNMRgrdjdP5UYhW9VupxEgVMX3EZBHWYMfTBmU5cZzGJRZWCje5FenPE1LJuXsrpxA",
  "key30": "cGfXvoSppyTS8JNm7X9w5AaTHRb4cfwSzw57enokWErNHFwgo1UWqudEVVV1AMVQtMGW4WdwCoKCJ4hSgJpnhTJ",
  "key31": "5M1tTTrWa3u5Ke2uAoBNazTLDy16HamB65qvCj7FZjDGG7yD8sVAsMko3rowUHCeM2fQecQMu9Yc1GuyWoaRxksU",
  "key32": "5PaN92muk7X7ZQETpaaCVeQAzRwbZjPrVR45NVtvDWDbniTNkPFrFeTS5eJ5x9xn993SbA4DMQyF6ZG1b6CtFgtv",
  "key33": "4RYPJyMeSZidjqhHgkFw6CMai7KfbXEY3voLwjHatZVGkTTPvr2UvqRtKr8hfnTa1cLzVFeAa2kdfBj6P1CYmo9U",
  "key34": "412HurZ2dQ7xdqE4HxF4u9Xng955UujicpfwvH9ozABLuCnQJLeL3jcTGL25rv9VECAPArWQ4GbXiroQdBigUnqH",
  "key35": "36PFFZAT71HmZYBA4WWbxuT94AhehggKeMTNAfoqHua1aekzoLqNjM4ciAt7hCsocSKkcsN3NA7bbwUeGFbjwZix",
  "key36": "3X8mezZv42ZSym7waqDXqwxERMeBr6B9VgtrPsDvaeZZqRZuxMd6jped7hwmZDcFYvt64ybRBbhc3XFBB347HY9D"
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
