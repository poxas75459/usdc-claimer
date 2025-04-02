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
    "5v4U1tmAWZ7SshV5nRqv7JkVii6agSpdF9KdqzbzP18Zqqdegyfg1bbUycDr2b9bNPSFbFMwYNwq1ryv5hUcB1z5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PZARtbvK3GfvofNNjdHmdb6BTKVzca2A7Ks7vVre9FHBVFuaUzgYQG6D4PLxaiZNTwa2XMGfkG1RKCevAyioege",
  "key1": "2vc8hzoGvGYmmKGmebx1d9C2zJougBk7yW3J3cSTAJ6muHPLLXkcebwMUyMDUD6puLaH3D1bq8hKxWPWZp4Qe62J",
  "key2": "oN5x53siVBWfvgCHYdazHSmvN1wthfS2qVfdhF8PcWAogCJ1KQ6eN8RcCzCQcWXmtvvAhrXCHo4iVPSPs3p98EL",
  "key3": "5QC4KdK7TNhgbGCndYsT9ojvjvt5qh78hsK1EBtozacH8LgLQ9fW4Tcm3uH7FMcGPX5YrKaaosXe2KQ9AApXsJKK",
  "key4": "5RcAKPKsDfqMprXfciS47TsPE1xYLTASSKRWJ5ypyL3MHRJabwyACYUnLuN385zMBDML5FTuCwvQKe1stzqeNdLx",
  "key5": "65q3x4NbDGYcBeRThgSA9khTHg1J5tTeQwpUvsinK24TViodYRWZeQ2irpZuNP8GCJqToQqP4wQh8ktzKL9mkydz",
  "key6": "353dAVEN7inZBEqntPpruRKnKxNK2LTWQWCQPfe4MLgWR9C5B1xj7YHaZivbfCNaLM4S1CrjxX8y6rmZ6H9Zmk9N",
  "key7": "2m6QJT69Z8gYvaGpFCBzQ616hcTexiA9rGd2ygMxeFJiV1qiyQu6awVnXuWBdfDxajJUbrv6iYTDB5ySFEhEngAs",
  "key8": "3bEmmrwfx4aPx1AGAStK8dnnDTFc2Kvi1VfztPtwN8R3k7J8emSmt1bFKyr2zbxSNZcUDVB2D1sh7vbjPyFHHQV5",
  "key9": "3kN2CnZJGgpR7PJ8R2KS39p1TpQnFXqPXK6Ba5c6WTN3uNDc7yK1cWeSh7QR2adKnEQ5a6saDQzHGdGJSeSgntPG",
  "key10": "4sf1crbsDi8DXLGCXPywwLs7XaVAz5kvJMsFoqYMCU4mRfGaNugH25ShPUQAngAMZMDXwxQWdzeRCAGP7Fbywi3h",
  "key11": "4sqtzZBW24ux5GXvRyKpu1mhY3NkAADRSciVangmE5AiKfqAQ6nxXnavYFWyNHp8WaHqVoeDzyZo8cMrey44Sa5x",
  "key12": "5MciK3fVWSNs6nyEWudoHdZX4AHDzyWgCtZMCEE97bGXEA3cMB3HYoFR7KiJAYXsqmuji4dJ8LYveHVARpED8SXp",
  "key13": "5o8DTHRug373bMYJ15yBVgSCjPMUcyKsvzC2Zzhkoi1AWgJUv3JJrRHMe2rZAvG5qsndUrWkKEjwJCGtFeDDtSVu",
  "key14": "kSEiJ7HNceYzNz1FnkbvCLdEimxEUTvmsrSm6NiLqZ25SKK6wyARJPdfezyT4r3t8UW23HR56tY1KXvxFwvQ4M2",
  "key15": "5c2PnhPVAQbMHSr5yZxVcz3rQ2zQq8UUxMuiusKGPrSRxy7s3jdj3jXEnPkknrRrtGrigaNbjq2RWnyBn4GWwxDM",
  "key16": "3beoGasogULQvQrUauWmDj36ndnSPFfUBTbzFhgNa8nEAxVVPMsh2Y6J7hWc9zmTqqdy8eihyX3trioKDHCn92kq",
  "key17": "5f9FyEzaQKoR33NY7jGRcyEGreeFZYwGuMBXgbthjhsE2ZcYjZ7YbaamZUdviJbjKLXU6gdyiEDpDht9rpFyqa4P",
  "key18": "2HJkAdJMrgfHFSC9spUKHrGjTSNG5KRgpD4aZVtEkK6PzatpZV8LgAbZCauTtWqfboxN48y7bZrT86msfoc6QhaD",
  "key19": "2UgU7VX4qmjpihJrRPkeEjj4bdbvq4DE2Ax8JtbykEHr6iaxFc1LQmLpnhPULA3zdjUik86Ye9GzbypVvVQEumJe",
  "key20": "i3CCy7M9eaoSpFwDAWN1xoFyiMzXJnRTx1zvxCTmWs88bYgEWSQ7r3pNjUZwp2NFqJFWYRqA8js3pP8QPYrb7eh",
  "key21": "4zR2RJ48wa4bVmAnnyDHEVCPN423MnTRR2j8FX5kyC7f6XvWyVwaEq2cqUA4UhTAQLykyrN89xHY8DhE5x56uMWU",
  "key22": "XdtYbp8o4iDhXN7JzBh17rMhCPj6VeFwzvqP1M8Wf5NMXgM3kcL1YtH6Mj3GVtkuF2kv2BzXGK6ziokWSqktk3V",
  "key23": "3iBfvnbAgXCdiA1iFCFxVveCrPaNUDvYz24aUQoB7vNjdW5TveCWvvzFymsgWp4TYDnhHUCBzBM5pzYVv1v4Uxga",
  "key24": "3mZL9dBMz6TctwnyAwXbWVQkzqiAe7iE3YL8NE5DUTsS2T5DFnAfZMFdpYko8pdRWbwY3FeoTrtKDrDU9BNzovoK",
  "key25": "NwLRLsCQErRsJ4Hwg8q3sYJvAzj7S72enxrREKYxKt81ZX9pj4jpM9uXQNVurednbjmHsVPhu3VaiWpgceHMr3g",
  "key26": "3BzYrJyyd7WCV4eyY1GgvWDT7KukfJAEnTiuznn17FthYqf5XvdDdRReeDpjydC927ZQ3jy4evFW2Tg62FtG5Pik",
  "key27": "4G1ogZW6NRmaiBSLEyMM91bmAoG13rKE3B8HPhR4H3uKy1EJnpvemmqsFbAoUGiosQVVKnZqyanYdy1Ra9fUru5U",
  "key28": "4Se86r8PkSTFtWnAT8uFsrhEzk1PYWpGfj4HijCHgWJYE4kRs6s6KmAG4EqQQztfuNA4HxYfWs8k2TxnQnD5X1Xs",
  "key29": "EZBmfFD12ygDAudSFAht2QHioxziFfco7LPLrMTWgNdimBgqUL5ptYcTKiareHwCCEGwohKfUsL2ZRS7rEnSAUQ",
  "key30": "2Mm6vZexfzqghRif35MCa6gEPA8ju68LV8N6mrcof3XevW7mG5J2L7j3wkdtAmBdzbYAHCFxCNgoBHEY4xMGFSVL",
  "key31": "3PqbgR57P72f54ha7wWFRReCDi7guDZNU7v7vGfQNEx7WJGJe23gNkuNuKuiQndd3YgTC4aoLYm9qe74646Hvhfi"
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
