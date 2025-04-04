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
    "eJM6kwqc7PiikDur1Ss3UZxtW7AefGFWLGY89txbftdrZGcS4zfmo7WCEQmsx3K1G3HrCdfABXER66zbMQGRVcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vFNyQ2Ti17GLcT6zESdrHWbs1TEG9XbiJwP2xpmUD6Bd7AZskBhLhQAWs2bTTgDY2JMNzoLrZDBhs9aLvuP3tZ",
  "key1": "4hxzHLJrLhmBLeCLi583nCw5b2qAV6AfG6oi6dmrouYMwEkEfx4fjERNse345woTzZmDbEbkEzD7L868p5SqLjUK",
  "key2": "2ohyMtbnpbXBLmn2o1DRoy3xjWnwYEP7rFZVspojn7CkTxPYMFpFjfELxcreiRHo95UFy1KgpB71geGrBp8ZF4qz",
  "key3": "3ieBvScsVBoDtYZfwKRQ45Z7UfSaTa25a41sLb2FJJycpGWdkGRmmT6EvEXuHtTkrHexRg9MqmboMjwJTHbfaNN3",
  "key4": "4y8rXMEg3vSmHhiw6TCzfkcezZeE8Ltkswh69wERvzhgjLzbtZF1LrYgJbRkhrr1YjR7WpcpkygTLHGzNE3wLWA6",
  "key5": "4UFrAB6CXWwprHiU14a5hLJBwo75Wo5DZuxNaK9pfsQomx9aLf8mcySkSntRpDEUG6rAp8jqpdjiWZrqZLKPxMjp",
  "key6": "e2tmA6CTALbyrG2pgEnC2ZHgVqmYPMfzidw5LLGdUogCJtr49j5rbdjUNjcMt2qvybSzPtZasLeJpskpgizEnqA",
  "key7": "4SCzxQBhp44TZj8XkWsuPfApcERXL8aB68BMCNbggmL8qUMzs7M1d7fytB1bym93tKUEc1oa5abqtpMqiSUhZobg",
  "key8": "4datprxokWqKwQMkKB2DNggU3BKMA18mevAPAhS9nh5fWS6YyfCfpU3ypkkMLJRW8vYiX4jZ6eB6r8pcBK5pGTq8",
  "key9": "2A8nHKXnBqJN7tPrhzjPmNnk34hjhuuEBzEA8spxBfAhTCqNYLJgD3eTZBHdJgBqUiAG9FsaiEiigvZzUnazNN7g",
  "key10": "352VyDdF77nMd6r1oJQedoDtMF78Cr9tif1Pnw9NPxxt7bVD8K7YPkhEfzVexN6ZwEzD9AUyw7WBmn9Dco91cSi7",
  "key11": "9XW9EPNJSdbtrPJNLyKtx2wdXkxhGYhBQ57KbrwK4dNRnBydTibrLCXoo2wdHEvSrA5fUxzAJRaNbnMcnvprPtm",
  "key12": "5vUonjdCWo4Ejm3SJ9cpWxm5JKQ9iU3s5NoDSMjN4mwYLqLPcdTkbxEmFwXFKe4VeY6Hu1fPC4ToS4cdj5A7vK6u",
  "key13": "4Ueo32mXHtPVerYJhdsfF3YENPABFXu2LoSsBPJG4UuD96JJHid9wRtjqQtutTh9UorPi1A8nRGfRoa9gkuFFKFg",
  "key14": "2sZ4SaZJ5caMNfdRPpAGDUHGmXjP49WDDRgUQuZ2s6bkstvUGy4zrxJAhWDNRw1hw3ghi9aEGGdZG2UGGgSfaeMq",
  "key15": "2USM8uLrxbQv56H2BonboKx1CeDF6cFUgaAr7NTaPWt66RxCBmoJBNu5cppGiqtB5VNqks3QxBSwvrQ6x9sCATyf",
  "key16": "2o538z31KkQSfwkTmGFmnUtBhN7jVyyCoePBpgQ8KQB2rm8oZC3LmovAgJFgax91bRzBizc7ueMFXiPSUNywif8x",
  "key17": "vU4AQ46hj6N1XRkEjWCDBhPCFZGL88GYRjNDsdcch6uFqPB6uJzHwZEXy98Lz5Nq7yR4usT96C6ULH39KJWMHhP",
  "key18": "4NurVTeAruX1JBdiFrSUdbgS8LNCGdrpWginL6pA8PHo1pBaoX7Jww9Ra4FpknbSM4MHmJ2TAVA7sysnfLUXgjMC",
  "key19": "5923i5c1wyt2Zd7kXSw4PjD1tbhzyVaFZaYdMxYbyNB1XPEf96DoSFxGigkLDSSF8ze9Y2gGjttMLccDRo8UhG3M",
  "key20": "3fBvLc1zPUbaK8Z2Q5CthX1Jz1X4gVZBc9Ye2Dc5WucxCJstofb36AimrQM3EmTNbcmSB8VpniQ3vke951fL7yDn",
  "key21": "2jrKJFzGt6B4LWD1NjiYYDrcZmqLErJVnWHK3CouNcQm1BbnpTkUxRaMQo6ueVX6w46jJPdDA65cThrMrrSMSBsy",
  "key22": "2aL4pUDhyFfDiRJg1mwQy2UZb1g3nzkL24xws7EaDnomArqR55RzMCxEEXEjSY1KTr9rc19ShHebRyNWn1SixL5u",
  "key23": "3fbckxQicDL3SegRxLEma69WUaJ5s9aJdSZyMmd6RtmsZdwfy79VJrdomQr5LgGcMKrDQsgjtc2DahKHJyRYwFSq",
  "key24": "4n2YRJZYGMERDcu7QpHnMtF8m46bmMMUgGAbH4xntsHsYFgqvrMCTQWBbr6mPHYX4FipYf2W7dcmb182wiqbh2YA",
  "key25": "3Mf8EfcjpLR39ZxpL6m4Q3HtL4dxs1FCzGQu8LDR8pm46npzwn464zyphPwSs1M93WA1hadkRLvuBr2gPUhiBqeQ",
  "key26": "5CdEWHaziygWkZXiNuHJZGCLmCqxFjAfj1wKPqFWRt9b7P7dvdTSGEbUDfH3fM2eUH31vbZNgqpdfhePdz3GfpHN",
  "key27": "2WAsw3UDNzxo4snTF2TisikrSiczbRvTqoEsGSpL875zc4Hd9qtpYqxwjkmediPJ5mCD2fnvgyD3MuYctzHS3zgi"
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
