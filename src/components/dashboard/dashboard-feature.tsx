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
    "5mmnHn6WQoJydd9fMRu3LEteQKHcumQtNSE8RC8aAcCFvhmBw66CBCzFwEWfHDE3ZxFKCszeaL72x4eB94WEZPWe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vDgnDAuR38EsWMV7PfokrdofCzuNmegLhY7YDJHufb9yH9UagqNrdRHcSRdRHj45VLW52ajz5TdVeAsixfEyLq1",
  "key1": "3qDkYfxFAmPK7UiB42c1JZFHZke9E2LAMrNSCVBvufQgJc9eD23cBed2AHGvajvD8dN5271ZHQ2DiG5mVAVJbxe9",
  "key2": "FSPc63oEzVcuakJpQYiDncJgDe7hCZPRz48qYJC5Mwjkk7H2w7UyUULKrKA7f5edZcxtwBY1Y8UiUT8YS6FvBEx",
  "key3": "37PEnd8yb12DKsp8zNiS8v9RuBLvPaw1UqkkM1XMvRYhNWLPxF5oYbT9F3cgDYsGCrXBkjSpLYqxRvvt6rAc72S2",
  "key4": "21QqB1ZM3SwmkhUBAuBQZW4pzDrmEa29eANHCLxpBzXrcfRzk8ZXyJexFZ4G6uDYUBv2gau6G42vtTJYmM2L5cnq",
  "key5": "5emkc6eKov3f2B8NdbTpCAXVtASn3LxmJ3h4gsrTRppsZMxDbez71MD3qhPG2rjMK9Dkij5sRvJRiitcFc7V3ApX",
  "key6": "4udwVHooKZ4M8vHwnvuWQ38Dr6gESWKKk1nJ1Gi6ybvEc5dnoSMF22sxDQDEjigeEvfuGShFku2ZPWrTEvz8tSBm",
  "key7": "5PJmpFPm34BSoh4jAyu9y3Kw8eqzXbUcb4zB63tTXbvspemZhS2kkTUEUw7oJ13nn7jAwfZhhaEVyBGfKfhmr3Fs",
  "key8": "3oUXSbHwznaKkrH8nAVWJJuX5SGWWppRyGPmxChiJ8hY8jTQpBhUS6K5Qofz6NwYFMGtZA1XK6gGtksMv3bbBip2",
  "key9": "3bcUZjRPWySBsUMdjrpS63emqiJ5iiew9yhwetS4Cyw54YtBGYNHs1zu39CmLz2Q4iwPukqMgD318j4brBsvFdUS",
  "key10": "42geszfc3amub3qhjH9FzsJM8AQxT2xBNn9xh7hbyQMTZ6sEjrxaTj7gyiLK3VnU6aQqxZhZDb7PHeBo5n1iEhm8",
  "key11": "3DgaD8TQkUbyiqZW9WSy4cvHXW2UFdactEYTSerxu2QyFSKxzxkvKuooPVPLuGXscRNX965eTTp9GJZchykjuA7B",
  "key12": "3sThR5CiLqFJAgRnUvwq6gcw6sW4yTnaaqDt9L8sB18DUdjYA7xzTx1zWrvobfGkCMVY7zSit5ceTqGcYZWi4kdc",
  "key13": "4bKxwidPwLep7FkVMAPS9LWwb2YxGRmakzjdTCCEcPu9bKG4E3raUtrU8dXsBrgv5XVVs2c9YuXU3nNumwmnUhcs",
  "key14": "5sPAinGjk6YvaCfqPziZ1svuYXjTcypaxNkhoWG2aTQpViM1VHiVQeNZ737VyeDwfHLuBjhXTfVwD3QzoKBoaGTo",
  "key15": "4ZuyF11Kq2t774gST9qS8a3Sy3XSNzGFAYFTVBcwwy8tz4tcmfx9ofeY8KYFdkqWs8SauDBz9dLxDKowqCR5doAS",
  "key16": "5HGaSnzajRyh9EByJxA4poT3mW8R5smCmukbUQSgx5DiJKHe3ZpR692PivyYg7uncYzxXnJbpXfDACemwKQtuqxR",
  "key17": "4GEqbawR7dVzEt1tXXGHgh4FVFge2GQpDCCfb4kxXsj7Q1a1ajjSzqYBXEgEcdzrw57G1WkQvKSQTKpcYmcRSG2r",
  "key18": "4VvEE6oLv57wJiT5GPdnFNJVCuiErJt6zSFwfGPzzvTed7dag12bUim96xkHqN9f4xpBxXNuqRVbw634RPrW36v9",
  "key19": "2s7Ewcd3T6bo5mJNf4y6KXTHbA5DuTWNZGyiycJpVkBbnCjLdc6dbQ4o5mmREMk2S3Gx8yjW4k6jEKzneZZADWaB",
  "key20": "5ioqoSGG4Tc1daQ6EAXiLyxs8hfvL4oSXAuqtLWwwhvbyirM7oAk4uPi7P3Nw5aFMv1Dxc54NYKdyxu84fGgBngE",
  "key21": "2AWVg7t2tedUHVDLHADmYSbwj8QNTNqw2mxGVAonfKoESDEiNGFzzmmRtBGr1e9PynxmL23GeKyq8t2xQEpfj6Sj",
  "key22": "2Bdso65yimB2AyfREC9mggZ3D539fUknRJPL79DU5khfmtMbUNZ11FTN3uK1AJHucq6SAp73piPiCMdTHLojB7Ht",
  "key23": "3a7Rmb5Vmmjxx4Fnt6cXHPZ9m2xGDvsEAYEzNJi8Pnjfy1wAwEuUzru3g71kzQ4YfShbJB2rbdB7gT53W8WYRJ2H",
  "key24": "3oiwtSFFcPNHJ4ki6Cm4j9GWBw18DkBjmGxnoEaaKKjxdmfgEiBb1pqwv37C1FXqkvGrkbVhEZ3VyfUYse5bBJ4e",
  "key25": "5CcfRh9sexht4hgkyASFLeFKcdu8YMmmNULKzWSwQhuDBRbXY6Dk6Zrdhb9b7cSrBDjSsN4hUF3a6YrAb3mMi9c1",
  "key26": "5vPUbkdnEnC3Su27VeLoCVMH6HAdhYzXVxUBvDtjTavrzfEqURkuyRo5VAVMq7W5raY9TH54VRByeDR6tpTzi2H2",
  "key27": "27aGazBdfFEHthWs1EGpUmH63Wx8DKyWLLYqgDKYqSKicQbuXf3BUdtiwe9ZtjbvaKhgaYisamai8ZbkKEfaFM6T",
  "key28": "4PKf6BQd2BVpn38hdwDJPH4F9SH1GTXapm324hxTomv1rzDNBZanujx9TVCCApakjwyy3Azej3Az91uMRSLUKScf",
  "key29": "Jw572VTVvWAuoLBTBs2RSXq2APLB6mdeTvEgW8VPGtUbYqnCmTxUZ6CekHmBx2pKK6ZWCAnWMkfJjzjbE3PM2so",
  "key30": "2c4K2bnUHPHWLxpMdgN9WBgWP3T1C5yFFC9D6kLxe8NtY6nNctoSedXTvxRGKHKkspTAkTRPgDFfKgop6ZEq9TFv",
  "key31": "2P2yqSsRMczKMMF436Nq4GBdqjoz7QmuJmHmQeBGkjtwavyDGRYkzqdS3kGfxP2rCLhPJyShnvBJzmdVLh58AFwk",
  "key32": "t63KeiP3VhxCqxEZukUkYj525w7Ud9EUxSp6tFzLQxdVgam2mw8CfykEGCsn4J3SVuoXyUs2TAk8nfcFYTRYRd1",
  "key33": "225vbGRaHoNXCkRz9zB1bbgYsGkqUBjzn3fqnU9MdNv3XfFP6TWpazGGHGRvgW2UuviYSSbciXXLEx2iWkdSCskn",
  "key34": "o3AKu5aqJnieYhomyJT72nYzBLwsesYdbzYWBFF5keow8ZdXkQkpA4pFg5hWrWNHZwwhiZc7oGqqfsT6XsmYoTu"
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
