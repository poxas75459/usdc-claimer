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
    "4VP4Hi8vabX5sBVS8XTmvhgVkRpgXc7QuGnSNrzBCAGzpUAoUh2VgVGHDuARwMgUpwTFikPJNQxyCBNpk3NoN9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QNGUzSSsUmdd35vrP5RGvN1bFCjs7AXB81p2BkQfCBUDvtU8VkATw1juVanoXYTt69tZzVep4nAAn9Zr9fUxhqG",
  "key1": "5hU41zvzXtqCr7BoyNBqoDkuEjMLFrfTpi2PBXNLLCQ8kpD9nD7YnridEQR8pwNui8a3z4T7jLh6Jb69b1M1kgRk",
  "key2": "Pwpt6mkxu2WGwVjd7girLaLuWLe6Feb8HrvvygQWJL6h7XuBKLdH7tzRa6ZWoD37Ro5xVrVg7cCCwjJbpbwNp9p",
  "key3": "4moVDmRe8uDroxYU6yMsgEABPLiAx9NtX6HUtXMveoPPMxscdrR19JsEQszTBfqzqm4iaDsRxNrqpXphUu5W4SZX",
  "key4": "4bPSNu78LNndmzRDwKMtgLbcZpFsaVT9ZW6W4d38rsVQtVz8qcsC9NsT7t26E9xSA4n4kRupMQCBKWoWbxLdYjHh",
  "key5": "3XNrNVkQiTn82h4bVxQdiSf6BzT2AFtDqDm5iHCpyZyjtJ2UkMhR1B5CKr6Ef8qQSubPHrSs5mzV45RWsoqNheJh",
  "key6": "5jS2Ec9cf81hTYg52hmNbMda4egr7cu2gmWcosq31hyS96RQYx8HuhsK9qarVYx2UD1heeRhyNH99Mr8to6VqFWB",
  "key7": "2tmQgatWZVzcHY1vQk2Uq4hu98QXUBVYhaCckLxf5UVsDuTcaDi2n67YYUtJdPpWY9BZ4KbwaJJ4Y3bbgKYzjCwf",
  "key8": "249hJSA1X41P2BcNiVt95d4H9mNfp3aK3St171viEP2xDm6nt3QamnDqTrLkfEeXdf9xf3PLuurnwkSyqR18NuNC",
  "key9": "3oJLfJYyVvwA9tCaTYpa6wQ6x1oPkbEMJFVuQ8NBvY2bT2LFUgifwgd9fZnKctGbfmwwcLx1bgUnuxcRaoaba26h",
  "key10": "5KFWoPqXeerjLWFNAJAiHcihoFTp11oj5a1GFcZiSH2wPVWhEuJ8JZYyrTniDZFMuJoP1qGpNXmEG5UJjufRFs6i",
  "key11": "2jdCrB2TJE6GBx3zuZf2ukqJ3GwFSEYrmgPUGmub5nHnrkS8MvYTc3F3hAPrDXq7tkiyzxS89qwnQmLThe6hsZHh",
  "key12": "4KjnUZWDSe9YHfsmj3aeoMjgHwaBFx3mCdRkpD5dAG2bRQFtjuhxKtZKBGpGiYxM1TqnsF115cUF2pGrHDBEDusx",
  "key13": "BqLtPb8o7RAG6Tn4oc8zRjNgcDJ4toZ4SDNc2prxPnSxCiUojvZFqCAeJBg7mdP5mT5wTwUYNoARCc4nuTnP3oJ",
  "key14": "3ARPUE1AvjHYeHPDXC29TVwa4Um3aRWdNVeZaPExTZQmDnVXGPFfGSCRRDXx3phn2pQt6QBdSC8AeZSChSdF7Ky1",
  "key15": "3tTY2PgkPaMZ3YmzraYNZ78hVg2drzqgnMo8v5vfFL4nbiGc3S6Ysqa48khm2NNafz5w7kX3dvByzAfStLpLywYn",
  "key16": "wD222YdYE6aPEqa2W8TnqQegEnMG1rJqFTeSLpgeWZStcveznawpNRkhTFv6JsE3SnZaPFQxikLH3rDdWaHFzqv",
  "key17": "3qM5xQRKwSWDR3EyasH7NxruPVS7osGvGW3Hes9yg3k5kqiwYhYvHxesXYzEeky2L7txYMUvi2Nr9bdTw9bnPaXd",
  "key18": "5bdViDwwjFA4QokkH3ubGt24BKbqt8uNbGQLiHfpHjpFrWr58gf6QCUuDrg8y9igd5Q9rY6jLTC9kyqzWeL5f63h",
  "key19": "EJdTjt5vU9J5BhTzaELuQyc6zGiSoHDTbr8B6pyfQiS5EQZWrN5RAE6WSzjNLowdrLhZb8hXt8iuebxn564D5qA",
  "key20": "5ysZnfRmF3BhYEvsn8wNn5DZuS9q8PGjVeV1VpYXu8Wu9mqVKTdpm3c9Wftq2WXJgNu1rSAWtTfknnecfqaDeKJo",
  "key21": "54Hrs1XitGistBV2vFvLxDaQDwRRasyxC54EFnDDydPcyikNcbkwcFKtCunfA7RREkUDMuRbb7tPdDpanBSJ4zjo",
  "key22": "E5pJCTYNsnwGJ65gXs2utbdqARhYQ3bpxLioi4doYHeZJ8fkCovo1LuVktHtxuBjsoMikmXHKvXZmHPeZWk5xiC",
  "key23": "5yvMXepKV8UK99Ys5ffH7QFhACJ4p1AKqX1mzEXdkdKCc8pyW85mVgtCovTcf5zJ5HZGK4mGsvPTJPKppjyXT3hQ",
  "key24": "67oUF2yRASDJeLDHfurhLQRqBgCWkTXCDzEPrxqyUhLHRxELM2KHmB8jnxbAnQEWxp5w3hKrmCS1RQ8uxhaQCwP6",
  "key25": "2EXEX1ntPBEfKge3MeE8Q2nA3UyzpgZk95FocrLvcWQtsGppXVK49J6hhn5TY5GCBPbDcp3xkWaosFtSBJEeB6TB",
  "key26": "4poUknSeWekBfBkrhWEvyN1q1MxCCsciuEsoC2C1wMaZwPgnpCE79DR1Vs5NaBHknbWyzLpaUXw1p9QkLXSUe8Vo",
  "key27": "4V4ofyZ9WHFtvPcWxdtbpLKwvzg7mGMcC6NrQHTonYnZoKpnqUrvTQTZgsft4ERDoNLnagwvhyjX53xRMhdJWjab",
  "key28": "34Aok9zEYjKJeG2vqSdXriXAXNokYPex1iwJwQSGWMCmT9U6BQL2crvCsjwZx6AG1tKZ3YjhgkkPtvnCxkay5AnV",
  "key29": "4eTrFSzKDcr19EbVhdpsnkKsGCpfgNquwyj7a3HNAEG8ARNr7byEU26hsDj1VFbmvoQciwFZbm6V31UeLgirJabt",
  "key30": "5e4hCdTxY6zwZgpvzfCJjVoJouQbs5xtbdmedVLbC2N8CcEomNTkNYfDRYK5Y6qAqvQcKtJAZmpygCgUsXigtp6u",
  "key31": "239uhw16rXK6v7NKxmUpfEzTdo6XtYD3B7JmK4amXAFu5qZ6Sd2wbTv7D8hXB8siHAURKU1zvH1qZLqWGMWUjqQH",
  "key32": "57ZLwEdjm7aF1N3zYCBTf2Z5nD25xsZdWUAmQf8uhpBacNrSnQNuKQTYvyV2whdsVEFxmGwezQgcHKABC3zrANYM",
  "key33": "254qnFihgSx4goB87BJW53PJtd8NWKJvKPgACeE23v8u7rajgnm6mkZQtZgLagbZafgJmTNSFezdQPf3pACm2RuJ",
  "key34": "3JyWxfeUhGNnsixKUkxzaecxJNDR29Cf1XGst6Avu2tDPE5L4qxJMtFSS1C49PRumRXLbDRi4ULJEv9fTmPkvVbG",
  "key35": "n3YqQ3KaDC9BB6WsLJsaPAReV4iVPMSShxMKe4Me6Kj9h6dkFSV9K5aVKiX9uvJdaz9jjSA6up3aW81kKe2nGFw",
  "key36": "4KfnXTY5stN6qAq6KvaQk4SnPSgQdqVGqpzY9JGCcacmQjJfM5bmMy5bS8nzHfPa9bCtroR1Ax5ofTXgqXm9aXQZ",
  "key37": "WZmA9Apyg4WxZevKgabLxb4f1RBkZFJEhaeYYhuEncCA5XsKDpRKgLJtoLqbQYMyvxoFfMd4kAxBEHvyoNdyELV",
  "key38": "5Woe9owdiuUTLV23kt3rFn8pGxDHWS1EScG2Mx3R617bqKza5N93GDDsuc2i5WqTXuhpZGCC5M5ZD34QNvt9cSAb",
  "key39": "6464tG5ykHUAEzUzMpS5BK6rsrQ1o2jU99LwkUpRqkGguSGndYeXVQ8DYxaW9K48zogZVXwm5JFtdFvknx1rGnEu",
  "key40": "3YUYAiLy7JJSYkCLYZbm4YoFADkDrnDCJRuqunLxakg2sBRYec6xsnQf3Nb3CREaenDd7PdCUcaiP5MASh488jzz",
  "key41": "jSYuE4WN3Mfbb2jYj1p2j7kvtnMcCgRP4tBqMiLRTEAY8uF7cCkCuzHvmuoQD5HcJhPaUmnkE16NDmkrf6jKitz",
  "key42": "4UmCSXdHEE1YAZxwdTW9QZwa827Eg7QDzHECAU7QucFHCAvTYJvzvxU3tt9shi8rMRMr9dBzXYfU1MSAfT3Xtxkq",
  "key43": "3WUorFeFAd6tiG83vUFojzrTMk4sA7b1PNPoH66yvE35Ea3PrP29H1Cb3mnyNNpaghrRURANuoYZsqwMU8UooLvR",
  "key44": "4xZ6iAzA7CA93tY3zcYF8fNQW2MLkD6p34egL1Ajw2eMXhbNmFxjCS2T1DPhnZsNoPQ3oxogKEXdxgxBpkVYe61o",
  "key45": "54c1YTkcEP7t3rtTq56zApchVGoTFt4ZHzag1PB88F7pdRdj2XVV6M4y5zV71SWoL8idVwUPBuXkAv23DCcmMEmz",
  "key46": "5azCb3YnBDBuvafsXmHa3G5rvVPW2dG62RZDhvaeDjy9f7ctdto9EYdb14MFeea1vMmEpmTPo1jrD9NmYgaSqKzu",
  "key47": "Czv2p8swWJ4PTXn99f7Aibgp7rhFV2DEZgU9X8TnQ8tHHUzGCYiarK1k9EvcB2z5Ft41XRoTetBEReNVCYrLDwg",
  "key48": "5inKXeMvcu5faF8JGPyk6KJxYKaepPj7R5Catyfgps82j2wTgDmxATmmYFURD5eGCWTdpBp9L3ZLxNbNv3EyhHRw",
  "key49": "sFXMKsVsp8EeLcfUUUj8Z2F14YFSQa5g5qbpfDiAkRPQqLmFVGGsvRYpETBPzsR73WYDWyj98XvTS1zy8gQK71C"
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
