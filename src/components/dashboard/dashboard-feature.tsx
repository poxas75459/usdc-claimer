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
    "49S83ARpg5HupAv66xLNPEXZq6B3TGSC1MUe8qtRmsuUUjRxxzAmtojuxDUMnbgZEDNiiQpMQ6ecEss9gA4bSF2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C5FwWBdtnv6SGwa62LwY1FNXuU1MHWLYZrjLuz7RKtTTD3AT7Hri34zNwz2Y7aJv1TebcQ8CaAjHGxTfbAv7uoK",
  "key1": "5hLb3eBALCcE6tupir11b2WJmtciRcJvNZ1XPEnnZbVDccJ9qqW6oLdHWFHAYEopHMrDZEufxv1VgtopxK6HPbFi",
  "key2": "4gtxxGgQ8aERtRA5Up6zo89evqgWkp2mnkqqPBxux2Azzjq6KvvhB7QXt6GHPbDxZivKz8Bn9s7vHjK7VU9HgjXt",
  "key3": "UjV4sfW21wvtccEwhhhVr4LApXMQ24Zhjrox8XWrBDrzZSbX3waPU7HKtYbHopKSqE3SxNLSUX7BRTDHxE9ioWN",
  "key4": "58MCnHWPYwSh3FHfA2b98YeyfGRBtbxefiJfPGdZ6yVf7UYU5samrPEqDVPraJYU5kHz6TvYAJjtaRxpUP1xYqrn",
  "key5": "3BBp4hRuHgJEvQbcRuPXvoeSH62uimsDDqmJhio5G2ztf5cx9LUcfuvohsyKeZGt3WQ6qdtU5E33EEwKtANSBbT",
  "key6": "3hkPdA7MrqtcuJ78kAPJ4AHNYK72nTzhHhDm86cEiZYmuxZGBtQgtZHobTdewwFooSNuhq1wkWnLh1Kghp3gTWaF",
  "key7": "mxUiZh3mtNg5Kqqnds36HGnq3iRaejYVA9trA8kXeTGPrxuNVgKyK2WzifhQXaSt23eM6iSP42C6yhhYKS2ygZj",
  "key8": "5rLx9x5FCBJgwdeikP6UnuJKz5GP5byJhvqcay4e6tGQfCZt2wyC46REgec8FZd3xvxjBAdhErkqxUQJBLMqRte6",
  "key9": "4AcP5ayiDrtNMsvKuygmpSufrTuxzjg8eiAqjzYkFL9YGMXRK37eVpHjPGbTUYLpvrrBHvQRCxQZUwiyRpgms3fx",
  "key10": "HkbzyULhCWph3VXJxEbqiAfevxdzk1V9Zecwh7pvCFxK3fmLJdxdDRsEqTcr6wMQyfhUAkpSJNv4ysmPfXTHqNh",
  "key11": "2ag8Dg5adjbqc9Y4rKrPb3KRg379XBZFGKj595Tyvj9carxb8nPmsATA77ykavyrTV7aSpkDmipokkRzo7m1a1ew",
  "key12": "3SJYB4vUjVoiw6XsaHonEt8rfcKXCn3WSeMpvsUNdQtbBsgCDtTDUXv25AG1QwXWHPdbEEEsPVZHtojgFcAjJND6",
  "key13": "4vwveDtekJocNAc7UWJwbwj4zyzyzk1tkEQZEwEaPMCo9cNhCyZBv4E6XnSXDy4wSxfJL5d7ApwB1fwazMQPGN4i",
  "key14": "4WNVL63hoVDFbvsenfDxFzQSAbniffzBzLcEngbEVD1P92VeLk4xdf5f674uf82ZFpGfekz1Ws61jUowJoXELzdZ",
  "key15": "5eqxU9QcVazBLdqS6NRDD9dFmaFdo8YwyC3KPRMJ4t5KM1698iY14qtfc5y78y226iNwwFAycfHAChJcYpXTRz5v",
  "key16": "4N7i6qdf2pEh1iNxd4vswinM322sGZR8rtZ9RacPwqq3f1Ydt2zPZWaai5f9UUhPdoKrc27SpVeNGq43jyeE6yiJ",
  "key17": "4sZNc8j6WC4Xb9B7BXECP6AYwQxd9mug4QNQWsmEmjkGCaTgip6w3tDbVvuEEHPt6TS4z9eWKW5aAbFDppVLX1fN",
  "key18": "4GeLnfvrJUEAzzNsSRTVXAdW7ZqG6NGQExT9h78Q88HqYTcJVZLzuskxBQADQPD9sdbtaQYSJMfcE5NY2MYcAPRL",
  "key19": "2mN5r53K85ZxgjuytPWvXc8U8N9f6v9S9x5G2bCsK3dZB3MDuKPAp8gifG2Nj1YsCQejvvEijzLxAFdLGNp3gWMP",
  "key20": "2qXHFRTvnrSuM29gTCyX6DKZEQkJTWeEGARVi8YqsJezpXmojuuQnxYFeACwBje2Uzx7GYPBgRsAnVRLmdbAx7jC",
  "key21": "4jVcbAm5auZKL15NqzUxLkLHJtuiGsDqduCAEYkDrSX6dBuA9EcSvTw15LXwwnGuQQPvMRZfRULmMrz6Fkw4mWws",
  "key22": "2ypQnWuYZeEo6vtxt4Rs3Q2YKH3Y2JDiNKyTzdKs33CXTTvM6VNfKmMy1pCQfD1KAWTCBYfW216ZK4vFNYuPkYqc",
  "key23": "5p6kbWvRH21vBobM4uEMUbRoUotUcewp4HDPrnkArdicJd5UKe52kqzLycyYtgsUfDZT84cv95M9nxEaAcNeRdXw",
  "key24": "5UJYsbcTH4VCKtbXnHj4xxEr9PJdq2bMRsUPue8Tnkp7wtSqYHPEj7GpfGcfFBUuLsonHnrwPwQcKaLWZejBJnCp",
  "key25": "4TP9RYzyunTKa4sxBkAijYJWcyEwFxdqQdaaCew1169kbKpqUCyFe97tQyfruCf3D1wZdkA7KgS6VWhsLGgWqcec",
  "key26": "3ry1oDumfu6Y9Lw8jgkbfDuwYSFqPqyepnqgwxupDWR8xBpyCR8UsVgJWmRSwL4eS1REgHRQ3MKBANJY5siugPzo",
  "key27": "5xuziTby4ZxwZgiDMEsswdy1zQKWF2TXpujWcwTt9b4Tq35RWHC1Pur8q8fPxoxLp3TK7ppmULtA1qFuhgT4AppD",
  "key28": "5rKUSKGXBQE6ZNpeSeCtTUw7cfBpXpXukxnu2xapdfisDgfiQ974DrZFQm86WDNv9ME6wvKapx8pqU5LcRk2KTGx",
  "key29": "UbE84n5gEcWwNg51mMfpPb2wJxrL1B43Dx32XaCnyjtUM7kaCBpqfxbRVxhTvf7p6pogVwz8n5GHhjEk1v6zasC",
  "key30": "K7Zk21pLkJz16k6FvqTLykJZpcar7u1nDXpeLGvnvYMytoRkd22CGXLdYdZbZDHSA9AeegYmB57Q6LrqSRDMCo8",
  "key31": "3Rdz41r6BbAPQmp1oCDa6wU2PJCPdZY2wwNWbgsvfoMojuGRByPzgPGibyzqvgCYdgsLspswWLiEb3Dah6Ta4Pgh",
  "key32": "E9dF77jjd9FvRLdWdKErw6cWymanEtcZYemGUmtBdZnUvBoGbDnqAUwfwAHwphcURUTuY2i1V5mrVLqRZKzpUBd",
  "key33": "2N4VqGtxAL7NJUTNJXyNrKDdNFnxDxj5MVPJjUbuwhsDxpc8GeAUWCNqBcjHpBoQq13SyD5N3JvrjEWbBvaM58o8",
  "key34": "dWRkPF3n6STdhXVuaELzS1ChTZGqnuEhhrpSXzTTfhX94CRGBf2zBUUAFdQHfALw7kPMtWQRT89wS5j8cp57VEp",
  "key35": "2vTVU1LW1xJ7YExBCXk4ovPVmYQvDxvHXAVvoHxBFKRvMt3dQVWRguQBBZdQ7BcVaJ9kdkfRG6dBKQhJ4u81UW7e",
  "key36": "4kQCk5RdTsrXhZoTd7Wbs2nuijpJbB5U2h4p9WhYgWUwRG9LJ8ZETdRDPdHQMov3ArgdT7yr38M7aBHoj7PW4BLE",
  "key37": "2emjwNjvY7MYAt28bBx929tpK6M5eNLHW2gqZVT9N9tVqszZwGrfGWqBG55b6fLoHRwW2Ew7iumaS49ofbPHBT3N",
  "key38": "5PSGfykgrxjqkUyHAzVcwBfH29ADDo9qrUoTG7Pwq1cjQKvY445emUqoJLXfcsfSHPYctzzj3erf8YoD4u9pcmH7",
  "key39": "2312EvwT3S1u9UJU7xgM7spQL3YVPKp3xoTuh4BeXsKGSuY8m4Qd3tDcUFxrxhoujvRrvnZGvmtqrdFxKt9LR885",
  "key40": "2vfbNHa5uaTH6NHJLKxrsy9vM7zf6dyB1b93z4Ujk62XLMRfGMV85LeyHCAxzz7ZPshntFBdWxJCriLfbE3Tm6hV",
  "key41": "66ttWeoVvVwR1s3n2X5taE9S5aKox3y8r2nVvKE9msiyCZo2rcGAWeBYbgG68eVp1H6mt9VuNf78Vkn8ajkAxkzh",
  "key42": "KeF79E3BpfBbz7tJwFA8HqDj6wB7T5s8gsLQUEvjGWSsD3Tk4FqEWL5u5gkYPq9Q2dSXTuhG1QW7ZkxpCzQatRA",
  "key43": "4pSYXKVZZ7Athh9zjoZJPrg4Tw9J3N325ZQBXYSQ13T5vC7ozowFtyedP5v9PEQa1X31RBw188n71Rwf7q6RZrGW",
  "key44": "JtUB29dmrd6BuRi93gvuYUurxtac8xeTTYLYhrWiHWfJp2WdiBT9KZT2veZawxStaZL7rDWLrvRJcNfVZWULrUm",
  "key45": "5MLMsWfmmJXpPXJUmcv8iAh34dpLKmBAhaP1vvyM8dpazgJxRAK8pjSorunx1ZJqjmjuP16WCfUPZB7Jx6x5mKmR",
  "key46": "2CJwv2Tp8jvuoUr3UgCoug9cMB4nFkxvknX2ah4fgeZqShQz4ADZbLGz9D9pBMC2PL5fLYgSao9T9TJE6gh8BJzB"
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
