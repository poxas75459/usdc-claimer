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
    "4Jo9wrGgqT4t7kqmrXeZ9xDLMMbNfNc7P35vMcyqWzvrHSReWeaQW5tZkHAwtq4jNJgRktvqM78yuzCivY7dooxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oBdyJS61UwtBsu8khnwR9XmBz4sAKoAqEiAb6YsxnRPrxtQtFJpQTUPMmNtW6cu4WPTzmsMa67MdhqQ1w9dyNwe",
  "key1": "2UBzrS2esYweBT67vpz9Ep1RjA3iGVMp6UYsmb5w5YRcYfRPSXMMDeZpeohJpoahGhZP9h6xo53V7LWyaETaE7xi",
  "key2": "5iKb4RRXBX91cDRWSsymC1UPMCmFfT194sJGEhBHskDg48gjs7frZJgXX7SXBKya1WqmCs77tAWEhm6pWtDVF4n3",
  "key3": "3bVCeNoKpzLh1rr1jVmr7N3jaGQBhpfMt7MFw7paJMw4WEYGFDesC9VMiE4XCgm4LNRuSjY2MVQtC2ubHnLSo9Qr",
  "key4": "4RpvBJxQeQQBfNmaDpoVvs9QqZEwkou1fUpmRwg3jVPWSnUT1VaBeE2rt3XfJrLvWLDuQwMNdkvbhp8oqZQGWF81",
  "key5": "4rFpbjNafmWw2e2KqFkHWkBXvsdt3KcXcrygB252apQCCQYqL82AUBHnfdDitpHNzKtQRAMjvCJvDJFWG2uZuA3H",
  "key6": "hacr1bnuKFCBqpocBu2taejjYKGzWyDoziPtYybjhJ9NpA33nFvhy7ewtemgXDfx1oDLKaj7n5V3ELeMRSw1oH9",
  "key7": "3ZdiiXeYeUmCdLBLZYXtymERZsshDjqGDnVdceikiVz93qKtS985tVSgWgtn348rnNKGnwA9GgMQrRrSqze14FxM",
  "key8": "3y5rbCifQXEVTzp861bDbEgadhkv2ot6SMKNkXZnqjXQupLSFUkgwXKLN3e3FSic7Rwviu4Rb5S3dDqaSqzRcsmD",
  "key9": "3sDC3ZB2buAxVBnjLBC26bXLVuWCrHhS1QsjRjkdeJfTSuLdxnQwVfrEXK2BeYcRPg2TDviYApbLXtUirMFsxKrZ",
  "key10": "2nuHzvtKXwjbFK4W4VfpuJjWu5TV4qnANX2kye8qK8e2P5LW1HQmzdXRYWp1Yyr7yzdnL9cGGR19W5XZqZYYjqzH",
  "key11": "6fnDMQWt5s3bXJFVhWSiwkLkUN9dsucfMP5FGXCgge3oRaJoSJLszxmrzekfEAUnTZDNiTYbmsYMfyRHdBWLWY7",
  "key12": "23JkqkZCVP75oWUzTRen1HFzGKhjzdoHUEKzf4uUDvpBEojjstTdnU3YKbioLAeRfK5JzW8hxUn7Jx37iHnx5Ber",
  "key13": "3WkN4cEo1rPsHMLwGZsovbzm3Tf49751eR67NU4s3goa3xsdaanj44NKsKGCuYoD3f3x8NrGPtMLJbTdB8LJc9R4",
  "key14": "41ELSuLYSUWrQczcmSwt9VQPRtSV8LAn3YjSp1EKiaTmNz6rvZENFqxsiuuaLf8FvxM6hk3E4MyZ79boe1Grp6WW",
  "key15": "2kmbPUeDYSew3DcS7dZKg6Cu2xXoN8RDCZ2Z9SyPrcw9iDnSRCv22W7gZoK4SjusjbpMd3botVtbxoCdQcd6S8Q",
  "key16": "3drVubakjrBYTV4xZGkmq2jWzykLvazQNQirpJv87tv7CNZXmk49N7qvr72Cz54jPMFcjU7NKovj5vnr4MciUhbr",
  "key17": "3m1xBANrBiH1ptd26paejxCDVMDsiZJDX7tVMTenxxMdBtjUvrwTJCmdGUA1UNEkxDzuFdm8jU64v2neCo2Rwp4Z",
  "key18": "4HXcMWVKL96MXSm2jXDwHZhvNtmRqChKyriLhtGUPZSwwCg9GugYwNFo88c8xbuo9xQutYUkkdBqPjVmeNt4pozC",
  "key19": "5U3sLAzqJEpeNR8NvqYsdT7Dq6fkUZDyBkAcSs7StYS23pyt2k4YypG2aGmDx5Dyub3EtZ8HmNiLi3f1ocuUNnWM",
  "key20": "abJyWseKpDPpv97aMzZyftU6ws2vzaDeMLAioe7wS2Sm5busaKpMAtHUaGEq82BJ1TYCXmZdcp1eJUWrEPZU8Aw",
  "key21": "4Epje3khLt6YVK323EeSd1aak5Qrs2nfABuJu8NpXg11JxoQ5ytYz3zHwL8mCWjVhDDYKcGbRC81Ga5EpMry7vUA",
  "key22": "3DaEeopn7aK7DBcsCRiNtF8DCYwNPTMZFoUCAkf9Ac7twxbJBjJMusH33ojeD6ALasKD4fwHBdGarrFmCwnmvbkM",
  "key23": "5nHrS2hvq6ZNJNZm4YzifjPCQHtchqcVTsQnppXsfjsB7qGh5VkAiEHKUza47peAiWB42tbFmg7neYHW4eyv8RER",
  "key24": "5ALyddjCrMcUyqaerXTX1DEuX7s769p2S67pTdwX4sLtHWNcMjKBTvXF5xjR9wXwnFXkjipkUdF8YeukXJM29ywz",
  "key25": "3TDaLj1cfDwoVCzpDeMeLmGypsyK8JkK5ifLJV6HL4j9vQTNWoshgaYRYfjAAEcaFyqpwg4tvRdweTd3U9ehBe3T",
  "key26": "45FwhJMmL7i6e2rqgAZtuwwcjKWmxyLJiZGx4zvzj7xGE8kHQzMrB9adDLU6YiaGF6hrMBc1mABbtdtTb1HbNWZU",
  "key27": "63VjAkDVvvuZv4iinNZbJWjrWxCWztxCozvzXCFcuR4suv23gc6WZj39i4hGuxmU6is7119WrdcKf5D1sikmgkak",
  "key28": "5oXCnJADPnG63uv7kMN1sK3WziohGsDrwZJvABqHCunnD4ZD6ecc3tb2txEvFVA4danMMgz13jAEB5nzFSvHqtGV",
  "key29": "5ckQsNdoUc1CE8iYipmVJUJuhsmdwWPeR634UAJTBtycZm4E1FyFgw2mg74HrLntQbN3mdxor7B1tqJiYC9jQpKr",
  "key30": "wVN9qfeysSTVtZaZrh1AbjuT3xxfDjtLAdDAXLrQ3g7bkjGYeGKaragE4dEPx8KZkyXP3jqA9Urj7BTMykYEFD5",
  "key31": "v6AhNvkKGAqY7qMuGQbCoFDbS535e5gGnuhpmmc65SHBYhQ3EpQLdMfrr8S9THY1Bmi3kGpiMLkTGAQRgntKKq3",
  "key32": "2NQVfCSNLcKZezZHYhw2KnqvuKJD4n8jzwwMyesuvmndqanTatKr2w2tPEppLwF8eDeBTSfCpuiFVeB2GKwS8Ytj",
  "key33": "4Lds6MN6bSaPW3h7xzx9R5j5JYiqfJEgRQGj4xU726gZGJkDkS1virkvpLsdBsnnRZrKYTeozoXmEEUD7vp2JXvM",
  "key34": "4WXqNUsrUzfmMu5y6afJ3ikU6a5hvVaZ5UgoXMJjWTtdemccG8aNb7jhFbQDMPUkr2tb5Q5CkjgpAiA8Bju2uPex",
  "key35": "3yp8EUYwfnuSdzGXfPxqmgVzVbhCWZLTNarXk9eKhN7aKwAXQRXKZYyAkRbCCg7C7JX6YWS9onrPUWWvfLabty2X",
  "key36": "5tFuumYE5T4ndxoQcTWRBW5pb5eu5TZF2a2ozy9ZB88dMqLsJ7qsuqBeRmSVUBiG6AeTmARrWPMZMeZ9H39B5HYs",
  "key37": "khJNksm2HeX6t8LCpCjDmGvYFGfcjMUX3Be6Xy1cBASNVKHYaW5ufNSnHpbXrJ7BAATvSDnuMmAFL526sYzHb83",
  "key38": "NESbG8pp3bVDHnuWJDpSq2dNua6MvWLeSrEYkecLUc37UYDMZJwPZxUyzDFMkzHzG6Q3rtkm9dApbZNAGd8xTKY",
  "key39": "3rYqVkjjAbrPXgJJTmZHavrctushLzgX4Z3jBHAAnDUqSRjGPtiRXHCn1EU3VYkmPd8cpyH7jioq9XJa18QUoEuQ",
  "key40": "gAyy7Cou2BSR6s6chcUqfQrZ4YCQKWtPC2wTKXWt9HCVm2Cek31onb5BGnjNT2v1knovZaQ3A2HdGaF9d2U36dT",
  "key41": "4K22JG7uBQWjF4hDNzSMB9UTfvj8Azwbj4y2qHziJrT4traiYo6hKmKk2TLFgmgFbKZJgaiXieeTYVAjwGf6vvti",
  "key42": "2m7jzVsmKmvxQYDNACdiykrEuPXoKnpvBadWxLn9i3twywoTeiUwShmfNafPNXRPdWduWpd21nEvSU2jXKUXEh9j",
  "key43": "4FzT9seaqFXVvoqNWK2Neohe2doZRS8qaBUQCXSjZWtdHm56GQmQfw5z59x7SeV5ZVwoVL4W6LhGdzy7cXzfdcjH",
  "key44": "Vf3Y65ZDVSid5crrJJVy7jiD3R48xxaMVooV6Wo6Lq8YNUBTydmCAni8yeFwQTLhrL9KYC9DiYf28qMykN8TKTT",
  "key45": "39VZaghB9aASRR1434eDiSWuZR8EigQneWuUsy5SMDBfhbw3VhRogKUR35Tp5YUcCSJmGWh25h3wRAZ2F8NUgifs"
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
