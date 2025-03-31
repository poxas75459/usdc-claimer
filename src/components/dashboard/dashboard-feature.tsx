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
    "UF5KacmCL9N7JY6ow4khit18oEeYig2Jt76316RuLBP1EXRLdeoubxAFt1GQzdDF7HRJwsW5G2GsPu871K6wmHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SfqVHjsDwoZduHajzi826wAuCSZtAZGY69Ri4Jm5jfMxtDKZocFG1T3Ykwks2XTbGHjd6oiSA9RnK2nVbASP9Lp",
  "key1": "ihb1qiC9DaYZba7DFpbN51yeLumuYoy6gYsvAP5Nzd1S9uqRQnYTHtMiw62JnGnPPCLbPutCEfBuMF1wDGsU5e5",
  "key2": "3hvuHHUJxoi9KXX7YUJtZTMez9qknegnQGzGrAGVEWWShhwrxrURLdUULn62J7mQtC72bhZYMg276PEYGs1cY2WM",
  "key3": "3M6JwuwxpQaiKMoBSjtvfzwrkXfrBaMPLADuDjAbbkrtCcppuzwwdpGjYzPFUWcatdycdNhcKbs4JkhTUArbfcko",
  "key4": "QVY48a9PbFadRcnhCvWYafraApJ5sAeQsorKUCwwyHb8cGqzuL4zvfkabM8guv1QYFyNvMUdbHaNMJpEDj3DEZS",
  "key5": "5NYuG6MEeztpfDytB57qNQoc5NCDBef6NiYyxaKgxy6CBaoPivnNnDLW5eAESGZqmZ5gYPaFe52XeBAyxkLJZKEw",
  "key6": "445a7vAbX7hyuPuBAmknmp2Ryx3V5bKTBXdnYYVAun3iBkEHgw85DBiXMij5VtUUix1cTUDfkTmWmjwo1MZhMrAh",
  "key7": "5udCLDirv8UvcnQd4ZvxhYwFSnajKMTbe7bZpUcrP9hp21zka54jx4x82AnHsKzgPnX1t76jk81pezrNzKp9QhEc",
  "key8": "4usvnLumbjbWLSujwRxorhTyRB6WVVnz9WS8hcUWnYsAGWdFH55Nx1dbkU9KdD6CcsrTZ5FpsFKy6KKz8Uxs7Bbm",
  "key9": "53miqRBqgzBjwqAcSj9gY6PLm44zq3b9KNjsE1MVryKRMj2g23ZCbF4MYbW1R4w58rbFZVUfS4Js9gPCUjDqbXVp",
  "key10": "4mHcHn7aLuUmGbrmmoXAxpaoWkwrFgb3LX1juXuDHneJMi8TV8ZFpFsskkm99xPb2TnKxHQH3vp85MUY3E3fH2xz",
  "key11": "2rZqS9qBK2hTtYirKJLKDhXJxDwnP5hcGGRPC6u8aJRUdLaaev7ebn4raWYNjqBqhmhyhtoKB9y5KjDq3YDLt79k",
  "key12": "364JjH7XT68pc4bt82pjkSXvpYw6B4F1MYXVgHV5GqLde7Z6oqVNyBcByVRwM5SZdRCxwcgznXq8FmYs9pHaUdNV",
  "key13": "2uPydSKmjzZVSyc6wczKSL2YTxGfF7tyFZowuiLc7FjVm2DCVMav7a8T6xXRqTygey2ijwFWcEMmA7PkhUwYygFk",
  "key14": "LQSx8BEbarmEEqXk74TgCR1mcr79uzx8N9a3TGnWL3FNJqVVW15ftn6oVjVPRyZT6ZdVY75oKWuA9uDahEEiqiP",
  "key15": "44KuDzUERA9HMVE2q3mxKyaKgLwfuxBkEU38eKEJA3JTNC1kSCpu7yNU43wjCh4JuSVActZdBphsJkTf3x1ndtVT",
  "key16": "2abLF2HJgnVpZXbgFXtZt3gJ51zPnaQDN5mxUgxn8cprL4pbr1MS1SFbfUFnjHCdYF2tT5fhktawa2hkhuvVNYoH",
  "key17": "5uYta6TwY47DCoeHKPPrkx5Vy9TYH7MrTvypFmwPfbPBTM5SrbT6zfan1hUFpbfyEPnGHJSCaFoRr1ShQsDemFTr",
  "key18": "ZTJZzAkG1uYNqmjkoyuAtjLp2NhRaQHXV4zKYqtKZn4nWfAnCFfA8dEwrMtgHbYsSzNYiUWYZ3SVoAbFc5ckHfr",
  "key19": "3nbmvhx3bpHLDBMQxCkaBbRJ4iU3xFUiZtKK68rqrmHwrBvFWCbHys6NAHrwfZNDg1XimLQoz6Fp5iqXEmJnw1Uh",
  "key20": "62GCGTHXpzn4631Ami9ZhNC2L8pbxVgGJXagbA6dWTMibcvVt2B51aooVkCVh1vVNXBA3bnJ1tuUyqY7PRQMk61M",
  "key21": "4VyFDjjUQfWjGZsgb36gaFdSFMMYy5HKw8FKTBNR3RpGDih9eTg38xR4MwYaTmAHeFibaWGCyvvKCGtSULKvQRpc",
  "key22": "24CVgeRMqQ3AUcMzZRNfSKWpk19wBkosUaGhCeUCvJKwZ8jsULHhfawQJufvf5VAL54vW7EFh7sdhzqJQsTFLP8W",
  "key23": "46hZKuEjRp9zA9PZgP6JumW52j83sbLXAEmoiqxvnuyux8hp3EUkFiNHgkr6JRdeMWrT8SFsgUhtRn9TYsEcmcAg",
  "key24": "5HhgiR7RuvVm32mzzdQu5329jdLiMNJd3E6xtirN8X2JgRUZjYqot93Yd3pgjPiEWgrmWGShQ2tTbtTmZpAFFCcU",
  "key25": "5bZWcJvyoNWJ2cre97kHQDCrCU5kGc8t4uVmdsRk4ruvTNBCw8cmkQsQgJkAyLyQxFy89A2kQWTYoCDr14x4Kq1m",
  "key26": "25xWxXsQj8oUUstSFN6PfwtNzKTcFVMPyRMPYgtqGVnHF87J21jNhoS3CnnZKYc5PDsHa3A7e4TQ86bZhgASLMuQ",
  "key27": "2Z7dkupF39Lp2RoUiKfUvTmELNYUAKvenZc64N52jwrmvoc8ePFMZq4c2wv3wt4SMMvhMteJX8UGFstdMdsLekft"
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
