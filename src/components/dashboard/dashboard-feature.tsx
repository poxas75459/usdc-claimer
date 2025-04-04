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
    "4Re7rowqrCq7WWXHA7h2GQuJT3im8W5RHs3NHZUVmFLVwEusX37jepHsf69wxhnVztPVxpCbJTHdFJeUcFkFS9KK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YJqgd7dtpiHkzv85yAyd7nbGWNkXffRj3eH3KH1WxmfwsfLmFWqA93XBob77a4dCCci8YDUpchHYoACMuzkVv76",
  "key1": "4pyAAiYvbp6eSLTaaNG4YE4sjmsqnXXhTXESz288rpnzdnpXixcjmFBo1suxHVgiGJ9bPvsyu3rxEDRvdHijx1or",
  "key2": "4oaUGmGUMiDrguQkTiAaj99nbpjuuCVoYm9RRdrN5w8HSpkpjCq2uxaLi8ST9d5ZBmDWvEj5bqk8Rg6CPMySoXZW",
  "key3": "2NUR1P48zBPPBifLymjRDz7oMTGT8ZTFwA6Upvh5eSK3paxJLb1oq6ix5U4VhTDZVCf3wFAHBoB5i2DaD6H1GQiH",
  "key4": "3Rk4YxciCB9WnpEmUamsVs4UcrzGxVqzLkvxT5bQ9E81iKZTS9gTcBU39JdMKF99sNzYBq7v3dYYX8yf6Si5nKoN",
  "key5": "4zkCogkcF3hJVYeekMJrTdHgp1DiYgGSQ8cJugUYJQdzbXozJZSgM4Bz49XfWve4hw19RjgCmr4zmy1Ew81DqVVp",
  "key6": "2RbLxDWxTzy4kcpRheNeEF1gVmXjiJUeHee1xGczZCqCLC5LWkggMe6dGeyXHNoQ8EeSwd5CTbULwMi86C3AndxN",
  "key7": "4P5KKwtBiuUumGx8jBpQ4dFu1tYquwQXfaedQnK5RPUwGCbEN1EXxDyDA5shB36HFqqj1njJV9E2f1pd9gbF1h1i",
  "key8": "4ExxDgZkf3dK8z86WCdpLsY7RvMH9sbggfkVrWFv8q59XMvowD1gxTgDfuGStfSCqaSA69k51x8iwRzHBsXpaGby",
  "key9": "5XZLvNbnt83UEWHiLBCbyRxvjRv5akcdFd7cRPD2ucZ3tDkEwBNAkwuWe2623WF1khQWDAmEyxSHrdVR2UKaG8Cd",
  "key10": "3WYT5CgWfadku4iDXiYQ5Wt2yE5n7rDejYKDPJPcMHZkoX7EjrGS1PJxWpf8x2zVc7QQvPYgfGw3TtohHi5SZfYX",
  "key11": "R8BrQa6ubbmEdcADTiUhPirMDibHziJT95AT932pca2VEMWUY7LXVBHgVBsETiyBeBVSphP1scxwF3q3Hdzx8iX",
  "key12": "7wumP4d2ng49exEqDE9jntuHtp9rnS1S4PQhjNVJ3bamg3PdYqXR1QwjKovJCdhLiWXB6CmtVC3xnGY3Aur8N4x",
  "key13": "2D6BtRP1q7curExhguArQHzKXmNn6FFFtDU2j3N6pLWJFuohFFMrtCcqoFEm8HVi2jAoCBvo2DLw26oLMuuyWS45",
  "key14": "5mYRwvdZX99zoJyMxW6ypa2nu4iegM3puh7WV6RbyjV8UMuWYPDb2yaWWCGSdN1W4sT61e55vD6hehVfPEatNoJo",
  "key15": "3LtsMrC7wKvSwMtLhCQ27gyjvppX3eiwHox16zzf8x9Qg1Y1xkB4gjh9nLLRdGUHGrEyjwkgRkiMAwdtqRA3kYXu",
  "key16": "3jCX4fRS3oLXu1177Kx2ALVq7fGoffHCWGeaNTqic9VAw5DbHcEJwnPhg5o8nkWh9ARVung2FqvXzmQqC8QzTgiP",
  "key17": "2sV31wFQNMqaypuWeEBnWjecrdDXWLwagvpnNi5P7tcFjeDKBEJYBYqnCNjYWYYKgjso5hdfWFnPXkLBR9mNLmGi",
  "key18": "q1YqopMi7rWoKqPBf5nTU11hgYhHs8NaHJKFNyQRX4FmfXHS1RNLBftyQ6jzA1YKcnN97SjACimbsf7NmnbVGwb",
  "key19": "5EkPx4yJQ2mp1NgTp4ctfXe4FPgrUez5HHPMKx8ob5d71Phj1xTP7Qep9EKUCThFSiouHz9fPahhkWZaAcEZRTJf",
  "key20": "2e67jJroqTA9Po6D43Wr85FDzoymi5Uvmm6qYejpreVz6jRtqhDdvJHX3e7i4kkMHgbCcAzVmQ6KavXdUZi11kVp",
  "key21": "eBvirjiUPEVoDFk1DUpHvyGr8k51wMefXoEXsQxWkoQek5J9t5Tner6oTPu3YA22miXtVbRdHtLPCZVJP1kFqGT",
  "key22": "5sRu72zYA5hupsVtuCVmmVej4Z6FC7WNKXRrsNyFotMLve8TZn2CmVkqcaYQj4BTfH822atW169EyjuFCiDswxoM",
  "key23": "3RLMJoFizMH8knDAnokFAFtpEwBc2gWnJgPNLJJ4C6fEnJ3sqHGUuJCqUWPs38qM6xcBpqmo5UUJ85QmwKGH59Fy",
  "key24": "2P1mRbvLcSNt2NFKz3oHtZD7GgAqvDDBg2swP2WGVu8heit6GCjZZKwthNULak74W2X3bndKG1LHcLBnCzDMXu3L",
  "key25": "4xYrHNdLqZ6raFhKhqhAbojpQpxSeqqQDy67oN3VeZKxR65DEca1RecE9MNFLVdS9bWxLipRQihK6uiGkGVTSbAV",
  "key26": "2AMTc5E7XFGpjyY5grAse5bf8NHpvuXfnokDPjFfr2nM5Vkuupbv9aDvmAEDX46C8HqpBwjDKXR8gWFpGYHh7QJn",
  "key27": "2gycFVEtfNTZuWyGqCSVdZkwqHn1yPFXajhGBGa7VgFCNX7DH1kkJSAT6tMJXLpp6XUWxysGW5WqsnWnGd4dgvso",
  "key28": "5mhCScZwCV3ryoAgxZXz2KxZeEGArixPXmzZ6bLDhkZ4tQoGVhpTMtD8FCrvXTn8DG1yzpYz246pzHh62dfTUCKo",
  "key29": "5n6biehgV8ZD3kqPrrAKiNCGWR9sTCBDVYp7s2mkh48mRT4GVab5UXeNRdqKwc4FKRwPQLVh66rJ9PQ6D7BWE42i",
  "key30": "5Fxp6mN3EdexjPJ1hMBwwnwJhbdcJnSgMKwkveBQTb1YqiW5iqg7f8XpQTdURKgjkAV24MkZYGW1V96zggXZCgep",
  "key31": "3WEAbT2g7i2XLKeBHyhHguy2GmF7GqKFRiunSAt9irjz7K9cLm8yWRs1SCW7aTkipBEX2aNMokjxqJHwAnk3Whdg",
  "key32": "5j9qfnUB6c9kEoiPmbZJNMKKET1Eq7cF8eWiGkgWkxWS7L5GHXgYZ6Qo4kTeLjHwWPsCYQvvnYAKcao9bSLzpyVZ",
  "key33": "5GHamGhLahvHQ7GPtci85ataD7odbASREjJuA7zY59YgM8G7xAtzA6NuZFwzBnm75Mi2vsZP9dxxtkiY8KNDGSG8",
  "key34": "4zdk7iSdaBnovT9gtcwiKUNtsvNrXwwWT6NWsMxW6e5Kb3tjckPLsMS5wXLU9ND1RUMHuz53LGtCFnUVPoLLN8QG",
  "key35": "42bjjkknrrsmUPQu6HHtiYJrA4yejZwcPqNJMsHSA6WYAYSoXSUCLJekLxRFNHDQGunknSeiLZCvqDpLZTkoSPvE",
  "key36": "3gxHhr2PeTJjGgBsBHHmowg7ivPTUEXLXz5AQsB1cu2yKyiYTAw6eSY8wPp6rH8uJxi9LtSz6Er2ZF18NvjwKFbK",
  "key37": "2z9Ve7eA6ftquqbpp4JYYo3Pmp6cnzBKzKFvTK1GutKKbi6UJZy36SefeYvxswSMtd5HGMyGuc48J3wqHJZ43qUF",
  "key38": "3UmT8P9J6LyBB6SnwbRrELWiE8MFBCXrwe13jTS6b1J62XSZDFZUTbY7jHHBsfQqxd6VWHwh5iPovZSaGtft7t2L",
  "key39": "3qqMFj6fWyXoTtMKiW7XLYykgGefjU2LTS1CoCGodkX8g8MNqT1wMNz4pm7LJW7rpoXvLTtY8317zAiTcyG6XYtW",
  "key40": "KGbqQBBLobtxFyhjwHNRUv3hQQed8MDFqCjQckWza2WBedfhUDxTVTt3wJcx7q18p9A8c1RHvzMWykw5TANxbTM",
  "key41": "3BNGVjRjqNB2KWbzMq1XB63Uvh8Wf7xRhAbFn5hMA7Tj7qcKzYKm8fJbhnBPz5KAKqPfsFc4kPNfUSh8Bss5CmtB",
  "key42": "5vNW6KYVqfkNdACac9hy3gTwWxHZURCeM5cePpT7jXZuNPCmQ4nNKHFt5yAxYacAkPXT1oN3hWDjQoACV33BAawg",
  "key43": "uCwt5kJSfNoECRLriCxkoUbLRuovB2EWeJELspWEAZfTGhnVbwBfFpevBfvUCgQiMGS7gFDc3FCrmXJKDsgFpKe",
  "key44": "5JYZaqq78mUGFfkcuJNzqaQVZaeAPM4YfjHFEho3eSR7HGovNNEQBaysAgvnSEEdBweJCrs1X2YLSNWRwsF3h1yR",
  "key45": "4N5oJFF5tynqwyWQfdDduyFhXJDymYamZ87cyfnRZ2eyyxWzEh8CmkfN3AWsEoJ7n1EXHjNqzcBGQAXCHr1RJbiw"
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
