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
    "587TZf1asuQRDoBgroqc3NokH46ztn2NDj8Dr9uAMLizkyVVT7dEQSHkYrSVmtuWPTA69GWG287KBnUNtdNf8At2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FV1J1PVs8VpUa5ZRzUMytS9hBakwif6pExD46KDdGUv4b64stM6CgTeNB2VmKv2nSy4pdHEKpA2N6dfRctZRWef",
  "key1": "2R7mf4H7MvTZH2pQH7ZqhSQKNWx5jGgAiuCWv2eFjhaM6YtWX96vnsQpqzuHrmgFJ2PPu9kGGEjnWVdCbwJqb1HP",
  "key2": "5uN5LsYbmppYzsEySCYRwnpW7wu4wmP1XAjf6owffzHcK2jQ1ahZ4HKU9ZwP62Y3YwzR6rM3ophBhZWZj2NZnusp",
  "key3": "4EusiTaa7ydVV4uSPxMRYP9ASJF2pFJsar8GRhH4TpxhrBQcbEcQx5xAsFTsEb1dWhDuocVn1bSfC2Myn8f5GrA7",
  "key4": "2XAgQhWNqVSrt8sM84ir18UUGNYSXMRvwBah2jcUycrPHcsXnNwquBh8jTZo3WjB8CP4m6RfEdC8YsxVW8JxCdw1",
  "key5": "uSXcxh4KGgXtxQTr4gdXp5aNvtag5SghR8NTR7PYPwYT3fx1jNpcxC4tYdRok6JLy5b92zYyBi7dzevoN6uMnHT",
  "key6": "2zCtz52TnPhKZ3MS1KU1iEVginJ4AETCfkKu2qskuDaT6JhHopxxH4ua7myWLubekBsmtzzFJXjrwGfkffycGPPk",
  "key7": "5QF4SaG4V1Rt5AqhPT7F1ajUixsC5xrzDum3bRWJZ2fGFDwseYkZczG5FJD4BQjiJqLzuAR4URjBnGukezcAUbkP",
  "key8": "4yN7gjWaLvd6N7JtzZVSFeDXWRRXjKbzgncfEcnjz5JaB5c3xD89U9sQQqybd2eVhjCiCguhHZxjVjzACsR8Tg4V",
  "key9": "5eikKrno9jVb5efH2tvNzgckfU5RiWv3vMGZW7EBbyG7gUG7E8puXQVGDNvyg6D6P8PPbMFx6BEXWVYk9ynZjETz",
  "key10": "fCcFFrY4LAUXPeryEHzsmQktjS7aVPsyicSibYCYYvu1YFLxkyyMvwCeWUZHWLuvxczinVxKtEiGmPG1tjyUUxx",
  "key11": "4Pfde9qAWNeYDAV6zarXLjYYBrp4zyGQLcBAwnDPXFg8gxSkRQnfMjjyeNVWPoEDMSYfH5SCewkqNjoytDKp954q",
  "key12": "kTjBe3SYX55FgEcyr7b6kWYp9APdNVQUWbWNPNUx5iqAusHaaN3Mk6W8QjUHKzy9SYjqRvEpcH9iYrcEGyt5byc",
  "key13": "2kwLDp3PZjMc4EwnVwsfJ3wSeVGj6La5F42Vo9nQ6EAiGJn8bk17QgfgXyoCzE4ZfHejdUZGghDJZqEcbphbi9WM",
  "key14": "2S2ZTNTZ6o8mmRpi2Gjncuvzc8V4Rg6mjJ5KDa7zWy5DDqZuZ3pBzAaUAdKxt261hYFZbdh8CJE6uzf23A2wS27g",
  "key15": "4eV3fXyv4kxMyw7UTqxCVsA8MSEhdom7afVy6CrRYZtuT6Vsv4i1YDFukshrjFcUyoZWhoZru8FAd2BMGgrBYPub",
  "key16": "3UpJUbkDJVoCj8TNac5snVKHmbMvRbfytRjRPWByMSQxFs1Hz5F2nbicXBeJSZku4RbvbvGLSaR35BDZMSsKVgZQ",
  "key17": "3oF3E9Q7fP1hfwTWeNhGtioNYMnMGtBKdcfzZwNSqRh8nSfJRQvF1UwySmXUbh9QAVeaZuKiV7A6FrQpWY4XuRsg",
  "key18": "3pyZ25owxdx5doGMCoMmFGGg6AWZqqph7N7Mu5TfR3t1ew6TCPdXxJigwruAiF9PVGwjZigsLL8kvLXX5yF5tosE",
  "key19": "57wf5RnyEsEt94i33SkSsHY3VBmfeJHw4BA7De9yWy2XWCGfSFsEBHqu7rcUChjHaYuxh2U3QP92eN44ARuX7e36",
  "key20": "5gEX6fBHzPHWYLgtnr2AXP82zwz5ntnP9YnDtLcgGKR1WqrnEZNPtmyV2LvrrJor5pzJ58YAdm3mxZuhqVbFjcDp",
  "key21": "bFiEn2ptfDkBGfyY6JfXhWRGH59AkW2sDNCpEuc9BB46SFFrYe8KLRou5VbR55FQ4NdW9GBRbWHYEiW6oaMdRsb",
  "key22": "5gKWVK5HuaaHzUg255QvbfHvPxMpPKF8kVfryPbB5HCiwLAWrwKevAdPh6BJyvyrLzdv1BMeL1yHp2bwNYKaPsHD",
  "key23": "5ZDqmyJ4JwV5tFhBpTMVFERKSpq4FrpGxXSkGAcG5P7W7voPt3Y3dKGVTZQh9Vzf2cYfrm99o6dS1YGy6N1j43ES",
  "key24": "2QjxKUjmANiF9cpZ3iw7tAkjRnDhRn9TLkQQgvfwAdTUxSXfpBayfPoQHB2NGrT1amUZgEXyHJDf2F2T6N3ymZi",
  "key25": "4asUJr7fjMtaEU6fCVaD9eFydgjiFtnUHxSENJmUP9MC5b5hW7iXVo6axMZU3DgLwcYwn6d8jDmFuR3MVJKbEHSy",
  "key26": "568peFQ4L1utPjWNoJVEkMZT1iwKZ7Y5u9QNRDEnxcwouN9gywN33VMxpLFjueDXCQwYm3YjQYGGZbnuV8HruzyF",
  "key27": "3E6bwTGCxq1cTFF8JKCkrqEshmyRiEWS5KejTLtvapCNnuW5peU3LWt8vTCzsYMdRRm4k6rawrEwWVHcDvU5PC42",
  "key28": "Siv6SyxZcnnUqsQ4Qfai5FwAPmjRkuCTfZajDpDo36p6ZEJ1xKoE3TNzHqJ3gdx7NzFP9xh6T6Bxf5UJYTnkaUF",
  "key29": "5J32R1P9buy6odJdnvGSn1qVMqfJCEYKKiZ6Qy9QCApvT1coKHTH8oY1543ts7uSTYATcfGcdbZ84r4rxFvzwqrk",
  "key30": "4ezReogWPyCtYEzpy78rb9RVEg8jDCc8KgDu2Ai9DgGKx1qgJDw3YCxVPcvfQWgLN2xkMQJvtMJstV42y7j3K8Vb",
  "key31": "Zf5VWBQ2ZH7XpDo7NwizT1VeX4jAYSpUzXHqFGBtAdaXvveB8CYGZd7aDvM84ZDfkthHrebgivpdGCbQ4caikKd"
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
