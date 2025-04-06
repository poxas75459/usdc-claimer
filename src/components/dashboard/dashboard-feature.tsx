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
    "5ujv1gVWNvKZ9xfB9p6UrTC1ACG5aNo7T6qq4qfsEEfGJAJwyut5Mm5qmcmidZedWdkEBA6Q9zz6ZLqedCGvWzH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54inpPPXJsRVtEzcEgiPdXmqnjAxTpYszsH33UAaeMqGFb6djr1rSsvo7wJh8wKZMWtfqxXFPXdAPbV776uz9XGo",
  "key1": "5jMPGH46HJ67y3Tm49si3J2YEDn8iQNpX5F8w1P9kWjbzoNjb5XT8YWTN8FRjSL7mfHJVgeeiTzbDqa1mXkCxu2m",
  "key2": "Z2dXCgkFsZrnDpQRrxPTzwLEBLgfgZYYRvmGZ1miA9QghHsPS5Z9RTkubvzcDajVuxkgb5LKvSaVwCpGP6FDbv2",
  "key3": "45y2s5D6hiRpAX4FUfdiBoeT34uFHrxQouzhwuXFi9xGn3ompG9ZNU2rHFJq9pn5V81TyQYZkHx3bv31hDZYEKg2",
  "key4": "3TfBUpPALgq32qjXFTXQW8vHZDH1pEiqoj56UWBwnbg3VQE6NRgU5yyqmE8ECTrsU3jD9h7BfeFNA1vRGbqjvaG9",
  "key5": "z6XEw5eE6DkNGzBgAqg2efVe31sopFCT4iEi5ycTvDQJvAZb2ZDaKZenfhadQsyCVbmdoP3QtKu1pwCmW3gDDPV",
  "key6": "35zRRhXBKScAAT5UD61ZABd8LZBrorhurTMHxn5cHaMT89mt7Zy1ZP388zRZf699sq3AbQFYunQ7kyJQztvvKXYB",
  "key7": "5zcuWimsruX23sxBE8WiC3gVfRhUGFFJLDgSC8ZZYkESHyH3KAp48jza5FwGQZfuRV22CGMzUDGDPTWfdoqS6MWb",
  "key8": "4mq4Dy3LwdYGXDbTbmBphXVopetVjmcwKKRgsw4qY8ygpJ79ezTpV39cChZamGqtZJUhhEeDqQJabLb5WsSq8kfp",
  "key9": "XiUjAV9qZyexNCJUKkxfL1dS35P9XdYbdntf7Zw87ZDJvuDefnh5tV55a2yujXRuy5ERadzzMi1K47zNTAdmGqh",
  "key10": "65UvX6BiV2gfxK1hcw7oi6hK16Ry1Qn43pGuSJtsU1X8jFu9rDk4qAqWpZbsdmyj1Cm1UZAvTTELo2fYHtBuJmdx",
  "key11": "2ZP8PFz8fxPBp2c5wVomYVaKLsnopvCzFWKuJaxSXLUmmp2XWv22S9gtv4TRTaUyEH8cFJCaW5RJ9Npd2arCQEe2",
  "key12": "4zZYB4oKKK2p91vfzkfbELmACjbJAzsHXp5wMd9s4upzVkSci8TAbz1bgx411XZgpWjSZd573E6dKVj5hui8yRj7",
  "key13": "446mm9FaGVis3dSA4LBoqNoscMbTosunCakSVY81H9UE4E8bgFp5bCRcQR6xcovZ3saPs8RPVYej24QoTYmwtjtp",
  "key14": "5v75SVXkA5AKc282yu2Mekjm8j2WZERT1AMsEuJAjSr6bfrw9iUDYZAVzjdQMfF5xTR6jhszaKJnLoKU2s9H3UoP",
  "key15": "gzVJwWrAEV5VXDU6faKgTzQ8pN1oBLhU7bkxYR1goPfHasFMoj3xW9nWF6ZRmE8YTaFQhekhoBMjRsicbtibVVq",
  "key16": "3yukeKvadYRtbfFjYHJX6in5NdxEYSBsBN9CLA4pmzsD3oMYX7TuLy4UbFUV7rYV6DgJqhU56hofhJvT8MGjE2DW",
  "key17": "2VP137gMBwwVotNAELbLoiMfGnK5ifaxdHJamnPD3a99hnB9JHy5typywyd1LffX79LvyVZWEoUxESWN5makF4XH",
  "key18": "2m9KfRnsFVLvrroftGctYtxSgKDR7APBM3ZA7UtoJyce93b5P8i7EHdN3MLAoMA9cEQ4Q5RJj6YzW9CKAKvZQdZp",
  "key19": "5SSmSuTzRajPhmrn6hEqQQijJja268fByGjo43ABR9LYqoLrmXuVjCbz3DGc87wbsmazZf1Mj7bjKdEKptauRVyk",
  "key20": "3a4MEEKLztpiQmHKzA36mAf4RQbQJZT9V2oskTBfpgE2RCv3XrukUgHfgA3PEQeMgqLiGzoicW9QiJhpVeWsTbzG",
  "key21": "3THqcyFUzsbheqh89kCQg9fmfgX3TTXbXD9GPy87z9vVwgNH8ed9EGoenEob2fiwVhTWJzVzixNB2ZXPbsAsB3zT",
  "key22": "3Xh3LVoG5Sw4q7qRbPV6QyCCMfbK48SyZLViPDExHgdBJBDNExcM2W3R7cgVmeUCvmx8BrTH3D6e3VvSyK7GGsU7",
  "key23": "4fSixUkbSt1FRGLMGhMnd66Lg51E5SaEVvJ9owXGqRESc5YMGvy58iwjZW3NXaFbhcY2miJApq5LjXV6xSfd2F11",
  "key24": "5XeUgUsZZZVSKGMrLZ7HGt7hKt9sXJXKnPr5dfsycExngxaLCY5v4dwLLygJSZe8sLmPrYvXHiRKmktqd9DNHBJv",
  "key25": "oenMm7okMGoU4pKtoLsYsLatKh9Dn41wS8wr7fG3fDxPqMHS4T5CA449ZnEDABXM8E2NGm6r6kKsrKAiZvBfctC",
  "key26": "4jQHZMgi4FJQjR95FHVtKTovrKeaQ6apwwVLquHrAM1fBwyG5rvArmg24ivNn9TqQHDGAHuLM6TeMJrCX6Rh7Eso",
  "key27": "2TTcP3sDZgjtHp29KaNgtLZ2ywtG1fKd3xnEmYH9fuhA894g999mjZ37PNVQtMzsJS1csabTtVgWc68qvRWF8wcu",
  "key28": "65MB6tvUv5WfuzQU9bKaM1z7xukRguDdxB6QEbk6xTNhNQweDcEkcCq3ybCHTWvfZSyv77ySRyWg5ysRh5qY28Ye",
  "key29": "2XbXvHohUpmBKAcytpQ8eCh4tMnTYXADiWWUX3RRwCmbPPMfBfa5FMw8VPuKkAzPpcrABtTHuMbLZAHZTkhR8dtQ",
  "key30": "3Sa93t7cWJYRuYHcDtiD5S9HXsFve2AL4hLGY5zBx1juaUyFK9BEMZ7jPZUmbWZ4ta83cLcGJNoMEzxqh39sb9pw",
  "key31": "314ys7CKGG8ZevxjaJk4ziXxFNBjqihYqzHYTaZgXbgzaGW54L4CSVJSiZyUiLZ7Ueq7k9LkAFPeAAQnwRVh5gj4",
  "key32": "7H3A8c8grzGwNbF1pUUFJYEL89SoSfpX5BnYZa4KbthcoW5BY8ZMgHY7VpvA2vcGvby5Y74iLSZ8KnYMzW2Vzag",
  "key33": "PNsfU9VgLPj3ttAUim867oPt5EsxSjRuVRgjWigs7PKKvhdgExvB3XD84uRTvqdsukKk8iRpfJh4j46CHbVxo67",
  "key34": "2m3gBMmCsEsjuSXXHrLTkrCfMm2QF3QuoB3mzbv4BhvVsxFsbsU3ELULkmo7cjesDQXW1c1VJjcvFkMYYfQfdMN6",
  "key35": "4UgrfYCLW6WqJYQesu9LmWirBQ7JEoQy584dUH1ysMKU7j4HXxZhtvphWiKW9pVRc3AFxhqQwX4L1TPoc3NfN4in"
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
