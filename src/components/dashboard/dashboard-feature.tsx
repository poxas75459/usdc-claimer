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
    "5PUXYQHBM4hot4bYxrArHGNJTGmiaZBxhMWWsabiKrGYjhcHwYGdnrWMvxrtvXNn9TjmXWL9z5hNwVTYFTwwF2M8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3965Z4kZ2DchNuEPweZ2iaGXr8va6DgPgh2JQctBXu4H9yj1iEeVBBM6Ef19tFhtgJrL3rDT5Hdj1m4dxtKmAAuV",
  "key1": "3kjP1npk8Jd9CAaUfF5Yba6JYUeAsS1ZmoLxeg2MFwYcDAJiHQjXYvhAvx4aa88RyEaSchzAViacGg2yVRL379B2",
  "key2": "3tqqvE2SRdXQ962qy6grneEEvyHESWCigxW9q1d4AyPemPtvZTtgZaGva58MTT3V2PJjhRiS2EYntWpDhW3PS6V3",
  "key3": "yMwQRiLzJyG98v2zSAkMKPZPFqbUPSthuN8sBVxUJKpijJF6SRRQZJrH3VqVajVbxMCDjYMnwMjyeeyaKu98i4i",
  "key4": "4VYsC5L7UgWJFNFou17yBLGkAPePBSjxejeJKTwcGu3BEozcBbAnGhdENt58kC4CxTGY8W2KG6e12cxB8WCC5RGj",
  "key5": "3TrVZfJtkpvETv3rGLAKQQ1FWYJ3p6CnYaNhzJ3KFWzDm3QC7pmeneXYM2CuwAWy41HVCYJiDEL44hm5vHmWEzbQ",
  "key6": "28ETfkwBfBsf7J3SF9zHuCMpHz2cJknNt76GKWg8vPEH3gtCYt7uBusGipDkZ367ohBFPhEJ4zxoifsXvzoLdYAc",
  "key7": "5DvyuVT8v1CFLkkGsBM5oXGgmSNZ7v4FsHx6zwCsAdbHR1kbwzurhZJVvy3vffAXWrgguZR5jFvwKrUDB4qH1P8c",
  "key8": "4ueQDdzbjGM2G4HnmTzneEQJuFBUjUYaAbAW32Gx1xFGaxYgCW9c5uRgnzBFyRdFqTtiVtvjRgRLGa4q6NrPJn8t",
  "key9": "5G56A7M1VYk9Td7kwyV7zsk4Wh6sj4R7KYNFf7KudoXAihnCUo4HPJSoGfqox2eqYfpPE8D6z616K3hC75icGzHK",
  "key10": "2n7zM4YwhCvYnDR4MfxnXreAMPSjsWqcTQfSa8tcHXWVtEtZLsrZYwmsP5WTHULe49B7NKGKYAJrBzoNdczwS5Kz",
  "key11": "4s2xBXCFnkNynkiMi1YZwpzcRYDoWTUXTJZLX8MqYg24WUyZA6vw5oKSooFkyKomfDrq2zvdKNH5HFjUNLLqw1Ph",
  "key12": "2UZ9MJBicWHDLnbVAtJFYm9y7b5P5LuzqAiGGwyStEUEcRvzcQTAjtF9a2jdb1Xzd9af62uYjG8iAKULrg3bkmt3",
  "key13": "4Y1F7kXDCxU3oUhMdX3JzYqC9fbcYTZw1tm1RykD6Yk8u7Qm5XaTTarSa3xCvqj5dk4Lpr25b5tMQWfjK6UYdDfK",
  "key14": "ffKnwzEYjtyrPmeeK9PEyW5w8SELyTppEbWm7srrGJArBa7i7oS3dbxkM2fPuHai1TyYNfRBZiwgKxJJKMkMTNb",
  "key15": "4dg3jzJHvVtNp64aHCHm1QNWs5mJD29SiB9sLGfvgJpF9CQZrLmuS66ZJDWBqB3BFdi6QFVZfSLHD1PzoxzrS3Pq",
  "key16": "2BNM8EX9KhLRTA6o7noi66AkJ2jazANrj9qgQS7hf8QkLmSqQAp1zFPuHtd21DFXh8dcg1SNS6Kk95kfWqJtdkqh",
  "key17": "2SqqyVwZtDfc6zvdcaKgDo84PJJBrQsKgF528dCaGEhrhwtMpxBLrvVoPNEpSruqSP15fdXQEjr4RY1ioL2PNoMC",
  "key18": "3e5zL64rfSZPAtvgiJvDmdrrBhAQ8sQidY25J8VhbTWrsyCcCWrXNroA6fEDW6boLEg9smZ7JqPXDS1DpAQbecwY",
  "key19": "2BpDorpt1P7xTP7Hhw5i1uC1keGaJAuavkV8wh5PLqEkziZJGsqw7pcNMv7tA4QgSQDfjsLajA1P5V1KMJyB9JvH",
  "key20": "2USkDairEbBi1Nn1XWYa8ufFL7MouP6dNUJ66gGysCQcVzZiU4Yqkj2seisS8ZUpTfJdFAqF9RC6AKuDBG8qu6dB",
  "key21": "xfeZV6mRU9qX5oQffLbRqX9edToH27we684sjF6CesnGv8cyHdqUDoKCGjYDAHYpKPBB1bjGhWmkq7NkgXac6hd",
  "key22": "3EZzvCTvwxxTvsxAY5CW5bW4gTwG2MLvnBd45oDRGe9tHa21UdoJc1RiJssrQpsgPrkBPg3ienYwKuStGGmq27Xc",
  "key23": "3Wea7sU82PkGneJc4KGDqBCfre1mHvpb3qP5KQyjeBih1RwLQKAq2Q3En9zR3RwyWsL7JwU68kmB9xZtXwuQGyaQ",
  "key24": "2LugqMKbdXpdGBDF7tKH17d3PvMZYDYuEANvHunp2Uzhyuztghmqopx5cE9euuYFTkqGv28HiR1YXCmnKyTqDfdC",
  "key25": "25iyLLDMCeYZ483wXUdxRJ34UTZLcMh1RGSiLPRKdEESSCcxyps3FUjALCLtYQyvudRYeMnwuMmGtNAb7s3QsLPC",
  "key26": "3xY8oCzWb34XvXjEVB8mwUou2pPu7FrUbXQCv86HFWnPee5jzprU7aX5wgVSEyTevvqJ8E3SCyJmouGjrftkHEHX",
  "key27": "32md8Vo1ADjzN7Bj92HX2oHRmcraQrcXUcttac6NvAF2VoSk9Ctho4ditvBARQQ2stVBY8vmHWS68RxcuBYh65nd",
  "key28": "rgrGkUxAccEczZXsPGPqE5mJChsUNAk7yjirTX9cnLPtqCgJB7tnV5aRmJUCeWmoT1gKJ2dT8yD9pUHDjJMzFqp",
  "key29": "5JdsrfpTKxunLxFW6sxiooVna4K6JJx7xpsatKw5xcEaGYNXhLcYVjEswJby2JjRQLhFbefDmPQiL9p3hY7nYMEh",
  "key30": "af4PP43CdjymRbPjfgATRRKXTn1wqwoZA2fb9yr6YL1QchEpzic4EJQzDT1wNThACV6JgMgHACdB4XizgcWw16d",
  "key31": "2J2r9maxtSNCd8wwNVyUkqxTYMmKVMcNVEndv9qTYvgyEAJxFyZ54B72HeJ7eEdjsPYjszxHrpFSedkFo1Hsji6d",
  "key32": "3EzuoKqDiLqSPSzBBu9r6CjhxsHsHskYzDu3dTkUs5ik2f5STy4gCyKC7wnZusimH9EJYbvmNnY92vQ8yJK6VLd3",
  "key33": "47ySViHdFpijGEKXn9Xu1gqk2joZMiz3exXj1gU595VZAWCSgh9M6pbuw5kH8YhuE5CKkDoSrPi96K4DNjgYYGat",
  "key34": "3Ea2U7LKZKgpjVMpy2kuQNvFN2qhXezfQsNXoTmuLaA96zdnziAgNr6rxwz2cjgao7MWSi3yfmVtWFsoQ8DbNJtz",
  "key35": "2MND2Uxctq3MyVtqwA9y8LW9CW7jyREkx1syPQVwKAuYv5VP2r1stBo728QuurfALgGjctyHnouyn5gZ46PJJy5E",
  "key36": "2PKyw7TKUBVTGzAAcE3pu53JBFdhsZBgm4ZAwPYjKoDzx3YbBPpM829gs2SETgDEEanzVrHW1AcLfhYKziGMCohr",
  "key37": "2yXYyvUwy41NW4HWcTuH3c3Xv3kwuH1HZ7mAFB4kMoRMPMBtm9mgzGphHv27MaeYo8nmcYYeu6pWFqEEE2PvDwTm",
  "key38": "5YTmV6ECZUgYqmcuxsZPStBdUaihgkEo2wfeyzzWT7juyCfnitUuBCzdjbe2jyvswywirEogcAkwhj3s7jQr3b4m",
  "key39": "4ZkUTjnYcD1e75LNLWXKMJh6WhEYFVJTcn3wJrqS1ZrunGohGLjVk53vzwqcxwk97Rc14QNz37UNiXWXjeUVapbz",
  "key40": "5UKDf6tf6pSt8Mk43T8Jch8F2JzrHp4rSVQzBXmzVZQsgt7rcWRgB4U4LiN3wxVe5zp1pAGHmQeb7wTsdA8FMEFg",
  "key41": "3ZiE2zb5g3rtfe1G83JuxH2eKUf3jXGnGpkpJEMXPN1F5yV6T8waEAF6LdVFWHtGabT1HQGk5whsfnzRxQYNfbUq",
  "key42": "2xB3F7cs575RXLChvWXme4azKop47Fo2g26yyKsA4Z9tfVqBD4u2qZC5cdxDtXVSnZDCiH8f3ChaMbdc9qbCjqym",
  "key43": "5gFicvVHwBcp1oJriCchUfYNXVC7kC6iVoaQP6iUdoRHNm839ML4mMdWVGVyhoEDqaL7JBzQJLXmCHqtMkWGMunF",
  "key44": "54F8uDffP98QaL5rNMib1HGVSkmQpNQfHah855g5w3EeZHdZbKNmYmQjYrbgZQU1BVSjG5ZcxwXDXQes7o6FL598",
  "key45": "2612Vg2EZvSfTyG8B8mhgEe2rrC9nS2SwpnJxVManEqL8Qhitqg3hu4mhhTNMpXyH1Uv27xvkCp4MuR9AvnEsW5E",
  "key46": "3cFHozVGEy8dcM7R62vaNsfgHzsWAgPUFHNFqCyF4i6JDfSeGranzFgPNswawP6h242dEC7fzM85THDQRpwevzgh",
  "key47": "3fbubAegzKAE99MZ5oxRuAT5LWTwUDEJpyKdTasPbYJS2hRa7cPxpjRCkvUywbrskmCoEq3PjHsqchLrN8P972Hc"
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
