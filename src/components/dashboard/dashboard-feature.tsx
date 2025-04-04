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
    "4zEKdMUweybx6z6LguNd1tuANttuhWQj4ViNZAEosScm4CJk1BuedPfuQwZzG1gTysH3UgHohNCgXtWEgLcv84iN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59ZjTcG74ieXxADTNKZVuNvdwL4h5DFZ7EL6zrUzocdKoWfX2ymLLujBkMAaFPgNHrD3ufDfxZDVdNY4n4F5pRA1",
  "key1": "4KRaFCbJz4xG1cNrzA23gcUggKM3UoiPJNt6Cw89JEuuffJq6JxrLJ8oPzbCa13E9YS4LEWEbeTdVhZ7REmhqFFx",
  "key2": "25dqkDXDT5A4Edppw9Zhrux8x6ufTD3UCLCSkyYsk7kpaWLrJ9Ck6eaubZBhC5jiPfbAuh8pWN9LG2BJNWVsqGEa",
  "key3": "5mN2CG5f56SgYu5Kr3qcPuJL7CejNVpKfNudErpWm1AtckmZZHJZretXKQ4XM6AYGosxNEQ5g1coWnVmCK5vpef1",
  "key4": "3yw7hrHmTsg38FKECPhH8aDw6rDga848RUeBPJ6YQSzPonCbfGzAPwBcMEo6VKzvc24LqwpjiSNXauJMWwuxwNXw",
  "key5": "5aNnN6mcQBhWp7PYeh8iBz6vb78ijW7fq7worSKmkN16MeHjMS7WSrTig7rfG7hk6zEgj5RE5NFv3kvVREMSRp71",
  "key6": "2qspaJiiCtUZaF4WbzH72zzTQ2vyExrmmvGFr7WvPZ77gpUrwaBGJwvsnqpgnzrvL2G4Q2nL8its3iCxpd8Zy17H",
  "key7": "42hzvBNpLv1oLKihXB4HWXVPco4EhVWEZFP7K7J6vHVfz15rDtPMG1B6HQokUaJfkRW9ZiUatGYqn58L2XZXaBA8",
  "key8": "GS5t9WixdVLjThxyh7CEmpjrMPwU4RbTu5fS5hiAsZLJLAmAQmCF8uFAxLRqeH8z8BgcPH5ZzgWEUAurwTuXsai",
  "key9": "4tTRBKPVGyMrqSWZgf1grezfwJ3AmBTf2pnWh1biSETzQoRceqkLpdigsz4FrefNvn2T8jLyQVDnhSpNdMK5k8dd",
  "key10": "5UBWWWHkaxWkYeimLq2ThThYxL5n8ihH35vE1GFNo1kdbZkPUxs4BDPdhrpCwAJrU6n9vqzZ96XqwGWN11dmdm8M",
  "key11": "45nrXzE7WpG3TZPUgxERmcznd1CQ1vG8D3aK7ej1jUip31kTGeDpp5Kq2FNSVSE5nysg5HP7D839J5jpYT8xTG3D",
  "key12": "3T1LGvvGo4SqpDxZ81LSUv7DShfNFtPG8ua9Wgj9QR1aYx4AScGyQh47TqmqSVxVWAbAhWmDEQKumWR1STAnyuGe",
  "key13": "3zdeAbTNqrE8m8GLHDzGSJtpg47a5iwT7vKNNvZFmsNTzo5SSShLmyqmttRKdchVCvxZ7HgvuDcRSoruqJA1rGyM",
  "key14": "2BGnd2NHHAGFmrAKj6mEU543wCoWDzjhJE278PUuzzRsHvPec8uQzauUKbZzj6eDCwQ8fBTh22M6E1QJm7pjSuj3",
  "key15": "4YK2MdwhS6oufUZJe1GGx4YxC6RZHdGZ12njkHJ4ScKXJg3QN31nRnaVezTf29zg1Rho4qF7EhDcxM6YzbZLjPPL",
  "key16": "2MzYHQjkUp5C1KEN21YWMpt2LkFBMXkj49PAJw4hmggngHJLha75dVzu67nS67eqmUrEArh6dWp7yLGVPvLqapDg",
  "key17": "2Pg7ohX3bLN3HCwKH62FrtDWaYuWrsgJrKbSbcJajgYvzNgY9XteyRpdMgUeMrk68u3LCfPjAA77PogNuCX3H6pt",
  "key18": "4xxquhEPTNzfRSTja4TDaj3Ff1x75tWRwiewTcR8PL2pP73CwAqfacHBL4YabPxEWp2ovZpycNdZRS511sSXoKgP",
  "key19": "5k3JWzAWps7MZVzG5ie6z8sNoyHM1PsrJWt3XLWUYH8dsAsHv2iM23EUUrtKLT1kaPF22wXj1xdyBG4MBKBVRBgF",
  "key20": "3VXRkrKfLKeQunQyUuqRUW5xVHDQCAbXyxhiaVUKcGi4m4BB4VGsf14Wm6F8YinoGbq3NpLzhCcW2pwkntL88f3a",
  "key21": "UZE7pdtUKvxsZqa2BMVFdscdkSvDeHeEynKH8kv4byK5XWpbPcRnUHoH4tA446qSpFCFjBzTxGQjYUE8bv2xGsV",
  "key22": "3AL5dzHTyGsvqsji8PH3gqumhJBuKCxA7gHgE2cXsW8Kj3jYuJm7E59cHkAUAXbksaMLuJoVdVsMbiG8BenkrYXU",
  "key23": "2KbJrWGG6dhKheExJc6VXPmwLnpArrqsC2YPeeXXUAgJWFZxFBd2waANgHb54vnXxyduo4wQTQXpVkbcfEKM84Vb",
  "key24": "26Ej6v5pRxXbxZQik9JDE9zF2JLF5gXp8XUBbPLXia9dD7VgdcWeqUH9uceL5SPnugBmSQNy4HWvFyynPkjA6uyu",
  "key25": "3b9DJtRUWy8crnWPZ3wXZEmzrvszw3Tj3bYfnfMt7BpcmL8TH4XYECCXoUF2EYVvVLb1118LwWM3kPnYuRH2dho",
  "key26": "55woqyFUgHGWAvoc1tD4ZLB8KDMxxmxSgW3bWQku3seUfs1Tmiyq7jZ7EL5Ein8BhXH4nN1WwQakiT27o58R1EFH",
  "key27": "2uaGaHxVsZW2C5RxkywF7x9mcAnJBU6rsKuCZH45QEFM54cpUa78uSUGyFA1rWVYm5Kfj57dGT8nrPZwKVJhCH8i",
  "key28": "2N4ocAXFiosoNgjKgBLJbhM8sQAcmRFPE2jcxDu85ULuwPM1x5uSWxKzkUNmZFnt2X4442JWKXWyjM17UrsrdQHL",
  "key29": "4awtMtZciydFH76HUFjk38JnTxt1iSfcBN3ccojFwVXLm45SmcjrPVstjAnQAnEadcY6Lfefftzo9xzj6pfLLiA",
  "key30": "AvA1qe2WSTmtAwdHQLUiQEZCFfVmXocq7v2truAetbu4hCGkbvQvPJgabTxd9P8udLDF7Tw41a2qsV4B4847kq6"
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
