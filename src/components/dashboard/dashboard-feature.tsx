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
    "3HYBRFkCpE1aMRbgGPDhdwete4YMyeQFFBjdDFVnQRnUMZBcdjyM7g7s4fKZzcBPZh8t2jRasgNaPgJSWrFBmYgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NuxCqgsSAjBRCy2vHiGQXrLgM9kWbaevKHz9QLxN3FpmV6vXpkf9y1KC1yUKfBtqcZAZzTMRW5Bk5dPwwLM7pft",
  "key1": "53HYbong5Zek19Nbv243Z7e9m18rgwEd7i24cQdyNXeUPbHH7PiSNLx3GkKGkb3uwxpXzvi38wmmV3sEGSYKUo3n",
  "key2": "5yvqtzCoXNAGC6tAcpzqwikwkJWKbHgt121UXUad7RgpzKrTn7wWURXHmw6DuLUa8g6mLcMBKkVvdQ8jDDbZzaRg",
  "key3": "3TPTS8uJcJSnompdp24okkmLDPhaXFZ5uwiUGW65AcSsenWnjF7ragdwiKvSa2bdvtv9GqjaHneq6LpL74CDREeG",
  "key4": "4XEuVEwG9WRRafDKegwndk8EE3eEwPHmc66Q5ENqKEpKnFGBjvcVkGaZbCRWYfjJTWhL6j7amUcH46KEeHtHnuxQ",
  "key5": "22nvc3GvvoseTfjiETyvijkQyjr1dK6HXAeYVySJavAHcpasUX88npDUqA23tnpuZqhxqLt1eY1uPPmP7J3CKtej",
  "key6": "45yQd1PW4Pjvtbx7gD8s1MUFroikwCnaQajPRqRy8pGP75LULuRWhtPLdqnVZasjrqfWtwMTnrPZuLMWeG4prB7D",
  "key7": "28Kha38VYtDwY6PMuAcFU1k48suHtxcvLVFZydFrc8SdtLKEEkfLntb9BT35dSjneWRpN3LQaoyJbrbu2Z54hzoc",
  "key8": "2hK47o9AwyBeCGkFCZmxioV7CMkkpH681VLVrEZeCSiUUpy4esYGb1cDANmwKhcAAQShoomfTDQZUQw9kXAVWU9k",
  "key9": "66PzdXViX4ZPW6kUd4gDBPL32T6pCREU2JLWCZmfdArAamM6uLgLdj5ziEN6HEMnv8bqRVsKsaaQphoMHnmvTFAu",
  "key10": "Cd1TfetmoJJfxosdJPZCFcc4sXdYJRgXRStoxAQDHUzzGzmPNM2L6jDt68h88TsaS1JUBcx1myR83A4UhGQySK1",
  "key11": "FZPhFs7GrigT3kEAdhv7iFrDV4xPC4kmDd44iHTTLhoMbcdnAg6vkAy48nSSEmpAoxkUQPZxNG64g7mk959kD9d",
  "key12": "JufQnJUdYcdq9LPW9CgYLQRS5mzkj1r3t3CLd4R59AesfxxcEysubG1h2um4Q2U4LkG6m1AMYMhvXs2G6rj7Mro",
  "key13": "3eahJXEAma9qDiDzRvfkWNnZVKE9oN2jVW7wry9z8a5mDaZsjJXn3gAPLhnYcnDW2L5jMiRujsfHUqVdyRiSfHui",
  "key14": "3dHfXmE4rR6ZueQYmJEaqJVC2hhYNH4V78694q62H3YzAzrVbJTUwY5pt8X1enQvWrhyW1dmdygrMymxUzZoKWFV",
  "key15": "2sL5Y94ESZPYFHsVXeHXZsAxeb1r7rTTgSRro2RHCW3MV6i8aufo4fDrdKuanEJRMu8zjK26aPLgHwGdzJZ73qdv",
  "key16": "2Pxs76naYJnk3xDXQqAHgB9kF8fscVbDZD4izeQVP8ZBq78T1h35fNyJ72gRVavJkqdU1RxUHLUpYy8Y2JfYP6bB",
  "key17": "2gpqZ7oeyWTvRUm3MMH7F4QaEkojFKvjznHajsKQBp9EkquWQmmSx13MgMqGuQLWGYXgjvigvUh2UYpxb4rSMmHD",
  "key18": "MxSFJoiu2DjnCgwF5gdUi5evNUuncYjMtRs649kY4itU6iynHaXLtTh2iMLtxMkmxYE4q1i1dGUnqpWihXPWZxS",
  "key19": "8wuFkgwL3phKoKvZpkF9K9QMNAFduUgesMLrGceLJMTLkeFKfWXfHB6aVRQsLWEAvrKE8a4yC6EBCjSw7qKsmw9",
  "key20": "6AbhfvRMTmYhir1V2N4ib6SMVPRBpXqEMm7tumg8b7QRTsVyoafBVntZjdxBaawYvRj8icZcewEdB1eAmQPAMbH",
  "key21": "5BHgtPVZgzzNbQj9UJutnzWnetmf6CmyJX7h5Jdi3wHCyR8KibpHKxBAwfeuiCYXNt4Lvn7wG9cUsQYDLWbjhQZf",
  "key22": "5Kpj4YP2qEzevQo2JKbZH3c3Yk6oBQoWxmpSKLPn9HbTfBTpFE97YvWqy8Y7URunFTueZUrsnihg195XApcSjFZb",
  "key23": "5AWa2PeQBoUe8HU3YqS9doeKuMMy71BQJpvdR6jZXnAz5KCTMcX7815tibZM8mMaCkK2epwY8HH2Cxu6wzxnh9q1",
  "key24": "5JchM5cv3TG8idZdvST6DptBF1zPBvbRXMqdJgk1if2ARhMBL3y8eyNuHonBS7HZ4HCAjsiqPaLLrWjfD3e2sR6i",
  "key25": "52awXFhPr4NGXycBjsRhkZGGxMCKoimwpUkP7RXnAYXSA7rTHYfNcJvT8PEV5UHGaViuvgkq8Ed9tsoJqn7UipMt",
  "key26": "Atro2GirhAMRjH9kJdL3m1WH5EjehTqG9oPnzeuyaH42c6gGdajQ74Dre5KbeZFrGk5M54rPWEEEWDMmSQLA2mz",
  "key27": "3JuCW2Z5UR5GWpemJSfwHzskZQWHMc5fkv6RKmikYkmFAG6zc46Q6ZbbwyQDBFaYVZvPFpWLfq8Uf4JTh7VQMzjw",
  "key28": "26wkEU8yPLUv4L6USLy99StPbGddUn33iMGTMe7kFupBLJhBBsLXf3B2q4Kb2D1JG1ajxP7xLpx1LdfZVRyfVvhL",
  "key29": "5mqNYUZep5tVu8yW7fa3fNcQmuK57qfXquHpZaVhXXH9XfmrjDzmbqnPQ7tL3W8TKVeabR5JntyZHvSmv9vAQScD",
  "key30": "4e2yTJkm1QrgUsExYFUa6UHroZxAgc2RLehNoPCqE168MJiqe5gCZ5r9op1F6ZjHex8mJemprXB9gpmFksKruQSr",
  "key31": "64Ss5eo1jU3nhYJiE7v746Lb2m4Srqf96y5amwab1EnfwW5QezPpzJc8dj8AkFk1aECfL5HAp7J2aF8Eg6G7qS4c",
  "key32": "4VgNtxWbTQy6yp1pcRkHaNBPRvPTS6gYJx5CYGvKeXcrGtAacsjyuA52KiPpPNYujUH9w9rhG7cfe1chywi6Kgac",
  "key33": "3VjL1P2b5roiuVPEqLzF96utNZKSbLXrfVLDrbJBnLf37BhLXFBmRt8AugTLotvNJnK4YaYRjvF8GiEYEAyWV36R",
  "key34": "4gAt7SNYKmxaRkkYfadK6Z5inqPNf72xvUyCRXiburZgA3np6AHauw1VoiD1x3CmArBrhZL4jxff4FAH5YSzTZhK",
  "key35": "Ue85hQLn2U5r2rZueZGKEoiJhXov3wMTvkhzDqY6yuXJbXLaVRcD5iEdaN6QMXhf4XeWNwaEfQF998w65aEpW3U",
  "key36": "3skV7B7T6EX28wBbocSteX2HceRy42XFghsgjB7RVRktQ4EheXh9c38Kx4rKNTg7ZfkwMfm2jPvhQqyUUceo1a9H",
  "key37": "4NXSH1d38qUVe7UpLF34PWXvujoMBhe4dndrZ6gMY8F3efLGLgsab4UNj5L3h96ysJEhR9oPcAVXwEB5CL4nE6tB",
  "key38": "4AKXit2sBzTXxosUQgwzRJfBpTvzamSUYfGR7TUDzw6zkHe9h739GaZKT6KmjUDFdv6wjZNjD6Lsc5yZLtt5PHPd",
  "key39": "5ohBksDk8iSB38HC3cehC1FJ8nau9GjPm5LTnf15GJQ77ne3k6i7yamjdHUG8RxgZchShz75ReBav7du6Dnpxetu",
  "key40": "GmqdRxW5J2LzxHsUmWMh1NQPEZMwNAUkaxe6N6FtDtgLRhXAar4rGSbrz1t7PM3a4a5LwoxgPEwokYU8ERvqkKs",
  "key41": "4esGzDxZhcv2Szib8Tb4qMA7eU9bEX7nWzjxYARkWJj26rNKebpaU7mTjs1MVFxR31NUHmFQZvrsvxskFvYooRWt",
  "key42": "2fb36mP7hYcMxfTdKj6S1qb6E5rniJb5hzXYrkc4S7zzKrcoV9zoU6vZbdBe2G8qHfKMhtFm6Cg2pjXyCDryAYqo",
  "key43": "TZUetsXXkf3MxwtVBZM3TwK58EZBwrBgMNtLYcRbKvVwTwCVf2YuzKV3htmwaV15Uif6X6UdCLZPa4tJeWeg7fd",
  "key44": "3LDehjmWUjSGt8nV9rGsaSgGYHEU7xBGXxNeH6QM4wA4aRTce2AX7PZAFSbK3pfL71RYqWw5Q8tHAcWP1hMQbCGK",
  "key45": "59dtd4qeBJ3SUTCPNQMWiyWqzGyeXT2ZqEdCBD9HaYJyoktsNVKSxsfPiBcntJfSnySTgfs5AGPHsovvjsyKLSHf",
  "key46": "4cuSNSVcaGA1gNF2ceXwkr8EQ2LJLAgzrXPZHae1hXEqRrHo26MSgYtefJQKQ2GLvwvdrzjVDswQcFRE5yoxq6Py"
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
