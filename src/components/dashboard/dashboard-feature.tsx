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
    "61AV9Ys8tXVwHaTSBzpJNpv4az7h4LuECzFddDH6LMfUBH99pc6jERQUy4fCA5YPTsqmP4JjdEz8NGwGLuYAC4hc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QvMSQsyXg36bYZMxUFtstm7gxGkL4TLHcUSbeMR28YBMva1P1PU6fkFF9gWjyfrrZ9un8ac6o5ZsErnHpicCG8R",
  "key1": "2aCUiiNeLkQzwda5jnZLYov3fPX4ULk7trATyWwD7GFHBq9dbr9yZEgHPyPXnj59uC83pYjCsDQ7NoWA926p7TSo",
  "key2": "3xDb4gc6n5bF7vTvhugVtsXDZ3ch2ibqsvP3HUjsHrNmvUaTrmUtqLhMgXJcSiqKfGZD85kmCuzZDn7DHZiPR4mH",
  "key3": "55MGXnPjN4svk9bq5zv53KFf7fStstkLdKGBJEF4jiauSypS1ofyQ1ExJv7eP8aMpZWTLatVEGGBnbwbxtUm61cK",
  "key4": "BrAk7FSNRa69vKasLCyj5sRUGRQwpU9WT7J5Z3CH8EbS81sPNydCJC3Hc2c6gB4G2i6ELjyb4R1J4ffkzdEcscj",
  "key5": "5oZAhPLnymYWJnx6JUsn1yt4n9DN87swiZYfvfLUi5FbrmzV74vgiBKpa4UmhxrKwZMfq9Tz5soJXhudwyRuumC3",
  "key6": "3r8Q8PMhyHxvzsbxM1TtPuT3h7pmz3do3Ljc5jFJiMqTUSR8amV73v39L5SGB9dLA8pAcQz7EEMCBPhVkuYB3eH3",
  "key7": "4azeL73SEyi16o37hvJpWUWccMtpVg4NqaHUBcSG64GRi36RW5Sqzoz6fuS8wvZNLi2Gf4j6k8uW4Edun6j3DiXG",
  "key8": "2PqutkRoEAeLhB4KzEk5X4FxwuEgxNxdjynC3eeiW3f2Lo4yCtJF64r5kZgbtwY2BKHYgHMRNotzAiHYrYuqbAtX",
  "key9": "4eh8vMCE9o2xcZk5mgoyPdunDXGvyjmgJHgbFLSUX5MiEBz1UNuY2y11bxJHenft2w1ontVp77VmBL1ZoRzUcSgi",
  "key10": "2bo5sz7nrcMQPJ4JoEQxKQZhZdqrL4YcDZ55PwJwbmoZuFFetotiM9Wo4TYJ3ZNXC7DyJwuo73twPxNfiGwecGnN",
  "key11": "5gHBYYqQSeFTG6u9K6phWjuaqC8oZnWZ21GerDqdgdJgPpUMcZ6e24cYaWP1mEWPSMQnKHUh2GjaG8M5XhqXR9Tt",
  "key12": "4Q5tfmiPjcXfPLijRMMUDbWX7pj5Qvmr1PNZokP9vfZdiQXoqq7SZiShzkXyb4C6BJkQeuyfuLtaTL2HTCiNxcnA",
  "key13": "2Rqf31pf3hJxchDm1Muio9dw8esHK4aDcbQZq3TgwuzuUMqXYD5QQ6vooS3UGFQQJiDDYjreVbKfKKXZEsEr1HkK",
  "key14": "5k25vsRYggpmAJFT5zNEyoijVyL2YbKbgHHtmLqqbjuTFouE5H4BGMvzTCdegUFNrdC1R8QW84M9YGrteFFQe2j1",
  "key15": "T7KQVtrpPKMWz9x9hrqyXBtg7qxdy35b2PgYohDqY9WNaXkH2mm8ZnJHTdrE6wgZhhoM5W7UuKkfUhzf5hyWFva",
  "key16": "sbRJLfLfAyQprqJHb5LkLhNeyhXhUF2jmHK7K7mhqR2aJw88PuWBtGZPapAEayWQJoL73CVhZ9AgWDvJ1Vp7gML",
  "key17": "48HhnJH8jE2nU7SD1uw4LzSEEuc8Vpw7hDNeVhQosXuNBxwep8M2DATDKkcovfbB8CCVwcuj8ihcHjKFmbYdMRZv",
  "key18": "2x1opTUuhACSNpSRDLSkVZqqRXArpBiW1tAMEH7f86MA4L4MEmXJ93kR3n1KdhPGTVa2JYvErpGtqG1zj8iMJ4cN",
  "key19": "3KVuLxaziPy9AzPZUB2mQo6B4r4ZrGHedBw9Ey77AUK4BWt1CVeoJhQrsLJe9esbBQiDHewJ7b4SKoYzduPRK6W5",
  "key20": "2sx1bU53KHhsZvbkao3HCwZDhGHtLSscmmtTuZXZXiUSrM6f1Eso8kJ1JNcaZ3267ontyAXZc7CypqQ87Ekro9UE",
  "key21": "26ygV6gYD1PVLzyRiixfaShNGXaUmCt9u8Z1GBMx3SBNXyfud2TUVuCLLM53iEqkZRXjm3UiVj5yvv7v7tm2uWJt",
  "key22": "2ZiQAHqg49dqwRvaMksEmSWURd9xSVKHznjiGfq6dginuuxyzKpXsipto4rjBEXtnbiYUgKRGdqj11pUePak5cGE",
  "key23": "2xSiRMKP5Kcyb67LrQFE3fmhhv62ubQqRFz85j4hfqTjZSCK8REUCCJ9bWmbRQnicr9KNjJt7cNPaZPbDPHZ4jkC",
  "key24": "UufP2dKttY4Erwmoe1hKtFAVTS8jf528YpsgG3bFHWxoCTozN559MNm98545UfzTWsgXgKoh9vkTN7s9PAEq6cA",
  "key25": "52D5tn22oCczHiP9BZBypy2RSWAGAezNQjgzW6Gs29Cqk8RCMbW39pJivdBLsgBCwGWymFXjB7YiGaUiodNN4cMF",
  "key26": "4uufsGkToXzftr1pDtRv136FzvokSYQ298ZDyMLSvQ2ibDhqks4RtHHrVCXiALNneJzGLtg47h1DEJdpenGV8qLt",
  "key27": "3gre8ZmfEt8fzLRXGqCJGvdD9wUVEkALsus3CxLsTEvNLWfhqQ3wS9wGuGYFrAJSWkhsCYTKbW3TRVBTJ7p988D7",
  "key28": "5MjmLPFH1R5UKxgGAKBy8fm69L2Dgi9DNAn32GYiT9bgVs8XgdMZ7udJiu8A94fex8BTzEs37W8aVRPo4jRY7yGF",
  "key29": "4ZcCi4sCff7kzgcQVMCp3jUJaAYhYE33NHmwKkmbHvEvfUabAuMgvdatZwhttxbVxHRx2Kt35YbdqANkzRTy9gEm",
  "key30": "2HRHeMtsh2epqiifSudVdSSyrpDDyCx9mUzr2eGgswdjKDD2qdJvcNRTJujHXt1GeKHj7xqzpA2AV4vXuKqQJNvj",
  "key31": "d4HokAVDumnKzG4AmemE3p6Ei2r4TiGGhsWiypEEDb6ZEMBUEsZe8ZvDYsudPD2AKjZX8ychZQkKp6kok2J6KfM",
  "key32": "4yruSptjFMU1qJxSo558wdAjoqoeWH4QiWVUU98G9NFVKe2ymuY2CSWMcZD4N8HwtBBXvccuAtroEWQJu8cZabCi",
  "key33": "QYUmrDkxy4xQDZDWVRnUryjkqeWpEZujAe86n2vsUtxqZ1BiDPrbBWWcFPhGAeepptXoTucMK2ZRLa5SA1K9ZuC",
  "key34": "5WgYLbjXtFmsZQ2w9uMJpHNX5tYK85u8x6qJ2pPNGnP661q551TPRk78jv1PDXsGKY7kKs5udTVGQ8waXvPz2SEJ",
  "key35": "42mqgVuYJMKc4kkpf6xZyfYbHkSvsgDwUw5Q2pwwsiEinJr5DWVipfJJSUoWS6XiSy4m1kcbTD9BoV9A7LSJKbHh",
  "key36": "46FmCNBCsVGGs7DKzwdWzU2eeAtv5McMJi4SNT8JfPrDiAXJKpRQCBQ1Ms3a4FhMuXfvLwUjMLeVGTyKTZ4ZoJEW",
  "key37": "4y3tGvLJSMut4rQnfCSKcvWDRKsY7qMXaC3iMBTpufJU9e1L6ypKhNcsA5ExvJ92fkn9xiLcDwc4dSioRf5zybQs",
  "key38": "66ynitHuyPgq2xXbBVKBZkgnKHrafqq6L2mS5MgKH3JGefjzeksf8QT2JzdrxWaNgFA5Kgru8B9bp7tiAdjfsne7",
  "key39": "3RTQ7CJmZCBSdDKjD7Uaz683mwS8pKF4N6k5LtFFosWs9PccUcxtpUv1B2VykCMKYMLiR3Cg1YdgkZexmybACjPU",
  "key40": "2zepaEYvBoMLcXEhQHAhkBYEXpm7HgJf8DuaP42wnNi3H1B9R3CVhzAWK3F61FyDE4tTrB2FWytjqmJPd3Twsgov",
  "key41": "5mRsQy1A3mjckr4YZpcdr8PqLy5XvA2mFLsjV25u8r9Mh3Yyz6xEuXiEuv4RJKssbqCRXkJCGPY6HA8pt3uT5xpi",
  "key42": "4WU2aimBgZdEeiBBrHowaw5nnfEcMxMRkSaerG9Gq6Bqak18YkqVMHnyDNQNTdGkfxQjdCnrmEaGuC1CLzYwqsph",
  "key43": "BKLiKCjqF33eETAb5QyCM1EY4vWLZfyzS5dC5nM1TT4LyFRBjBJZYSqxY5RHkdQDaFc6UpKXoSu5K3Ecwazifk2",
  "key44": "4c8GaZCKKGXqA9Xej5rMdLqv73hoz3AWXk3GLZLc67Yxh1UKnCxJUSosHv21FSbaHgHQdEs5WrAuyicq7TJT9qdt",
  "key45": "5SYevLYTj5DPiAXxhm9Pm9J3zz6Ekw2N86wtHWkUtn5JhU8hou36qpDpMHc1xkncjcRryrHfAJcU5y8HNo8RMcZe",
  "key46": "4zsyenyzwVjogBC4fL4vgFCDm4htccgpcCAdBMfkChWsjKWH7bT9hJdquJbzaz3zYV92t7Aj2CASoBveP4e3C8Xe"
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
