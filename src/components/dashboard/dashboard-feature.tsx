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
    "2ga9ZLkm6RcQEmoyi1vvMefcMbbC4e9EYJ4GmRKnJKCDLN2t26aAfY7XEe2PUBUYkcF2Sj1aoVLLRYJR5kWc5AT1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o3LJiReQRuGxSvQRX4xyjm6EJUynMoEDFnVtsyyVC2qc4rgoqu3DGd1JuMQQctHA5uV1ZVD9bd58WJDpqR9kxZA",
  "key1": "4KUNcoE4pKbFjBsD3xYJdMhzTbyQNaarWqNKPf3oFhzADsicm3ghqmFrS2YXXFs3E1YVkhLKLoTbbBR8bqLnsCN2",
  "key2": "81nRxiUTmJ3s8hphejZrb84HyWsuFbaDz2J5VBWbapvJg8DgMsg8dg51oSbbpPp3QXiG6sAZ8TjBkqrYsdPL1mK",
  "key3": "4N2RB5aaekcVVguo3Zqp1xp2974HK8VFzo9wwZRENS5UFeKsi7ZZfhvsb8LVQuHtdLhVWhYnCmPyx3tUKgm7z2vD",
  "key4": "2ckEuBU27kJ3LrHCYji5dMvUMo4e9WiVLVVuGedZ86NEP9cy7XSLSgPZfQdKBGYzaPUPkbS2MaeznNjj1nDRrBtE",
  "key5": "kFRDZEusaNop8QXbbmpb5GPiRR9rEzA3rHcqMgCXg3Cshdx2xbXZTkPMgx9ost1buWGM4A9RJgBDp8GqCoaiXd4",
  "key6": "3k7W2Hyt2rLUDTnNB9DmkRxphV1ginUvZrU3PQZuJPF9qEtU7Na8gczVpo6vrBhDRYXAJypc83ExCZrGeF3NvEP2",
  "key7": "9zZrtdnNkQsFif8Z2dWPMaUa2SXmnHKdrCgZpsznuUhcHZkjTnKFAsdQVwtJZp3b9DAuHT98rAGqMgv42LTgowj",
  "key8": "3hZyREip4sWWxgJu3mYN6Cupn3vffJRPQsdZfE7XPq1YXaSGhdMaBMtMAnJzVTksss6z5Xg3QV2QvkQbNEKx11oG",
  "key9": "5Gfg7HRaR3BbhL56xdg8R6dyBW7a1fnVxJVTWWMgiyJrzSKoSc9jd8Xpe3UgTcbNu642nYeT43ksKkA6qyeuTx1x",
  "key10": "NYo2bftcVT2sTDbnHWXXyNBa2PrdKUYiqafcNfMPui5pAzwZG37DgnmWDZxDHDz2guB62h9pQTnjK1MHS4wJGvi",
  "key11": "wBfxoYDQUANxVYLsij7T8PzaNXzF8RwRMMs6f374tArXjprYyc2spyjBV1n1grSEn5JbUSHz4AeEssTmRM1dTEk",
  "key12": "5ypYeuq6NL8UryERPJExxynqmVZM3z9Tmn47s97zvzLdjpgpKxGscAMqxA1HfXDqs4VMY1SFRjrAa4bvSB6yzgAL",
  "key13": "2MwuXktARnNjGFVcNghUd9NXk3jgpbnfFDstbBwGNeTAvusEE5TkX7DPfBF47wr6DZUu8aexg7KfXk6zEZLjRRWy",
  "key14": "5b1KBBC4afDQoCcewBz8CDMwQUMu7gRn91VXvYJowLjZZyAjfTtaFsgzeFiy9sbR1Pnmgfo8ceXT5fDdNZszRScf",
  "key15": "sZC42cVixMKbeVRfr6BqWQBpMhS4JN8n7GTmJTZ3P8ibv3eRWBCSJTrtyvHTF1zJ682T5cBPJ13pSpcWUBe1Ucz",
  "key16": "5sP75QxR5RBhrPfm1suQ3epKXmiXSKorU5euzsHJf3WoroyT23qnUyqrrpKCi5RGasw7UN52hSF3njVjLvRdbfGw",
  "key17": "o94DzUCn46uifJvMyiFuSEEWvXkEGUyeA2jy4kB7KrPFogtnADD9gq825cTTwK8mNgBCxuYmFatF89T6W94vauW",
  "key18": "FZLf8VdcreayPwLBNhX5VcerY8m7xu6dXkUkmGq2V5QqGXQTRHkQCtwqvKcWKAQzWektmHzdwJP1CCVRDBcJZze",
  "key19": "5EU32ChmpzNHHzoqD2YhaRJRodJqMcg5tJdiwsdB8Cjh85Lxqmo7HZGb59DKkAJYiXY2NqpuhJMVSKAxwbfGH4ED",
  "key20": "5X8wBh8RdrkpTKygwmCGrrKQGWkMTFHD49SH2DnLMzNsw93VX5oACCFaxYzLRtY6UsoASCTu7hMu2zo833UFuoNq",
  "key21": "3C5Bo5KccQBiS2t2Q3cfLHcsokzbxVsuisff3obcmSdwFScjS3stphMf6ua5jgqywRYTXSbpxTKbzaViMqc5DHYY",
  "key22": "4UgrjJfdzT4CYqbzF5QrxvUujjQJoCbE15XRx4rDCeC9c4vKyCUpwDBzHgzT2FXgv9YYx5UmxQCqkMAB165ys6KT",
  "key23": "2Vrpkvp2V7kWPwskpYZKoXSNuFzGyHACNLuxxLFi25R19gN3bSL7PxE7Q9ek689972GM3nVbFKEcPKtmc4P5SbHm",
  "key24": "5Edqv9wvioZrq3bJVex4abyFPNBFMzA2Y6bJMr435tLgYdje8gK4kU4c123WoTW9avg7pVJMmKBQMx4DzYenqa1k",
  "key25": "4MUGn6B62EuEqNuwFAJRCumsyKibpY6gngx9P1NwfcNUKg3fMwD4up2hronq27uhMkU78eyKtLLBbXgHkSg1YcWz",
  "key26": "4a3VXBDFg2pA92YRry4uZwKBq48csz2mnAzkb4JAhqmxLu2rEhp4qW48fR1GCHrkLgs1t8Ttur7rxbGBBoXrGAMj",
  "key27": "3SHm9qbZMadcZVUpXphDHBGVq4SVW8wpVXU38QZBZZZdzYDtosto2N2piSJon9pxvf7SkDjk7b5wH5eeQTozfMPp",
  "key28": "56zc7PmHcSJL5z7A5yAwEUxRwMqYMs5gXCxdNGqVatE9DPJXGvrsiN6nRmeabJHkUB2oKQb3wD6WVCuVKNCG67A4",
  "key29": "4TVytCn5NxCUFTqUtLSMHFL5ex9L9yjBKpxBLhoeLVoCJEDGmurEWRri7NExrjTVaZTF6f2TH5ZFBtsLELYdL8qh",
  "key30": "36Pbsu5ThQdmJrS33BmQs4uUqvqH9aAZ5jisxj14AJENiznGi1pFGhYPqNczTjNmFiE3kJ1s8fAewKCV7RgNC8AU",
  "key31": "R8gUYLVk1nhdJvLBkLBPw58zSkM7eDytENPEmKT3h35NR4wpr6YHJe86g2Tn9tfpZGwnc1tXqzkvnhzSGx4BXrR",
  "key32": "4ZZszrffzrFQx7q41J1RbvAcmiodN2EjdcJnYmGipsucdt37JhnAtvUwRBoqyb2WQawp96j8yHRbY8k9kdehDwGL",
  "key33": "j2wEcoDg2SmsmuyrzQEU4RDjGKheEqtPVuStTn62eeAUMGzjto9qn5UCA6YnRXwhr9D79oe3teVy9mgCso2Chjt",
  "key34": "4bWUb5pVys7FBz7WS1EsKW6udBQqgrgQsifJquHwkUS6npthuU4zqNSihfUCy2zErTqXgww2RTXiGZa8D1UUUHST",
  "key35": "xHvBNZr8dWpdxD88B7acHBYWLJUfuxSSHzyazUMGYyvhVdWG6fJrEB9FjhdkeBjUxNKdbh3ivLkMzpfTYtbDLkn",
  "key36": "5YpM4wtS9rcAMSjKLpPx5avNKMVqzKn4vNPS5hRAgUm1Wj3KN9eJzJBdsUnJJGPxnQSJy18bcrZWa1gTwgL5vX1k",
  "key37": "2f7JLW1XY8YH7FUzAkcpEwDbDY7au7GLj9m6qsNC6ze9xQpWYSSSYcqj9RE9ieVaiFoFfBH2BamnXyjyUmGYEYhi",
  "key38": "2RqpxKHutLjE1fmmjqViVXdY259u6NRhpFZTzaVWQz4BtPvRuKRLfxbcktLC4AZfptr7ebjwCXsDiUivHdVAtAFD",
  "key39": "4EcVcEmMFMpW6gZaEm5JduYXMtsKtw9YRykU5fj9qNVWx33HN9AsHpNvN4dsuJN7YVJWGmBZkmKKNQbJ12HrGozg",
  "key40": "2wdigNpgU2mcX2GDCFCdp6rNu9FwMMWFHjMmvLhTccbUiKnC9FRFyndjY7Y6LuMrhBowJNW2PjJ74PxXV7zCifLh",
  "key41": "27KZ9JRVGynTmbnmTYACudtjjXnMZKzojuw6PNdVyNbugfBcZdFDJRBNx3HVmLrY8hvNwyfixm414r5U81BNdBmU"
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
