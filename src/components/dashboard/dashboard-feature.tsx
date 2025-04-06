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
    "5gquAPemfUFom1AgifAb9h7SHZhMhcKQwsu5Th6P4bgvSnGu9ntxZ1Wf1hqRgqmaGemNTPERf2w6Y7Ck8hiC8AQX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ha6Uv36FXS6J9tHsPeTbQ2FBk9cfHVyogiA5991rbBKEFrWxEP7rctevfhkdreFtKptErmr2QoWr3j4aEHiyENr",
  "key1": "kPLYdVF2oq4z7C2B39N9fLXTSmkVrWJ5Muhk4y4tSjohmVuVpx2NFCFVcV3hZ88UYhWtdY5wVL7dG2ug9L7UQwX",
  "key2": "4Smg9M2KSDUJeRuwJjvKxpMVtB8WV73U2QdJMyKR9JL8MCZXujWCSHmqkYyYzCaBNkacu3mS8vGvpxRuUoLgifhz",
  "key3": "G5CNuKTmXqARz3pUScj3RrMKn6bRKA4MG1yLRJugGRkvbPzSaCvKdp1dQr8npUPtvoKT8KfLZrEqyTQBQkjWJqU",
  "key4": "43S751ZQBPt35DseDGL1X8vJgEtEFn24a5hPiKVZKh7AYaJLEuhDKCZ9fG8zs3SE8t5g5KyGkh6CaXcFFBry9Xi5",
  "key5": "46j3PSz3sbpmRNa6nE18ajHwAQSTRx5U37hogCMAdY4QmAHDiLkMfnUqDLghJCVWf1AUxveXBhKxdjTfNnEeXSGa",
  "key6": "7FTU6DWQ4M57VmJ2KhYWBrpYYZgc1NyvvDsSHM8XGnW41hw6sxfxWLvapFsjrcomir8qVD6r7kXEBNbW1YdCJf2",
  "key7": "232ch5izRDRZL3NZ2Pq68KUZA4g5zgYh5Gm88M87qBcumw8VdpXF4gSNAqs8WhvrKn3XyA7jHYSTiyZ2xCQ7e7GY",
  "key8": "4fM5eS2ndBJ66WK1K7hBbvXDka9nLbWtjMK7GNgyjkU3ZwQno793am9sbRYgH2SVy7BwmosiQB4f1cJbZz1GqPjJ",
  "key9": "26bNsp5dCKir1rGKGVCH8MZH8wbeUk9oQBT5PG96FiQE2FJh9TsiXHwyJXT6mfhs3KQnB7yCD4T6M5FTD2739Zaz",
  "key10": "5U613zf6iyvi3XPZz4gDxiWpchKL1pxiuNABj2JmRVmcTgUsU8gywBdL4hDJ5sPtDLHoSCkjrxP7avpgJEwaKctn",
  "key11": "2ganKnkheev6CFCnm2wR48445tw6ijxLs32tCcQj4ttESAiRr9vrnsfVpMe378nMMDjud8wiUUd2Vf9UcqVJg3Co",
  "key12": "4mYgiiezQh3mCavxnWUXmbojuQc2ff44zdU9cd4Npz8zJJCrA36HDwpXHdqTXJd1zDoF1qyhzPk1C5Wi5PJRvbha",
  "key13": "5Wm1f9XMWATiR9meVaxjiarohrtQUUGTmghJHXgomAawpGGWabHhEZJDCNN2QY5gitmzxUkhD6WWHTpG67famUb",
  "key14": "2fTLhNm9P6QkemVkGVvRSoTCFoEATnnL45Tj1Z3rcJYicTEfJbf6UAtkqoCJikhr8dQdrkh7oxxBEg9TM12LDYD8",
  "key15": "53hDtzyUxHCQySZRGS7sMPuSukEdS7446DU96shvYYcK8HQgEAqRqVXGWxRw6wD6EQNLFRHqxPWE1fV9Ck481R3v",
  "key16": "3f6Ze7C2xc7QaBiveftD9JNpfvh5JBx2Y43VtSBgPHTb1CGB5UVjFXhzBYPhv9KcfDNbpCr5igzGvYx8kzj4Ygfy",
  "key17": "2g7XbVSkbjBUUE5JtqqenvMdxXBSuRhynAU6XJkYuyDhAxan7NrTHJba5YhFvY5TfW1zckWQyZ9chXJYAMTYiTuS",
  "key18": "4hSE7vL3rzksrf7mAQDLabgM87MpkixWRZRq2xqpaLz9SaAz74vA1CmThBrTWGJn6MhRMav1zQw259TFP9oRvg8f",
  "key19": "2mxaFGe2ctWzhrs6FQUrR41DHsSDaJevum6eNFmFkB8khu1SRtth4NEUR7WB8zS4rzHk3NMEASYRS7hYkmY4e2QE",
  "key20": "2ZdcLwaQSyxR8bFWE4x2c2QUcHuxz4yMunLcTr6YCMBomLMW66rQxtV3hywUfE35MDSFb4ooY5muPSzojUbE46DH",
  "key21": "1xEX7Xf9iEtNW7JAHfV9MFdGp7mwHKNGxRorBe5t4mRN3QZFtnxV6rziW9DMhKh7cqN2Ppicgt9XMTo8krpwqH7",
  "key22": "hbmEsRc3KmB9sTrf4dgSX14nT98kT4MacSGiw7uzPgw3jJyHuYBityQ1qetmxVRMe5q3h3YYDKbnA2F6o6T4naC",
  "key23": "Ljvwa1Arc1BKYrgotS4AfwgURaeUEcqp4bpkpiTQNMYi87qyM243yVzBm2Fa3g2xtujTtUYsiBHPkmK9FYi8R8J",
  "key24": "5AVMEA2RQu9sjD7nSRjkj6xaHEj63ZEh5XPqkMUcihfqjFQK5GS2uN1z1QbpVqRCtZEQ9BLSMHaFXPzkNVaxXwH9",
  "key25": "2LExpKnmuHmSNtih1trsrcQxwkTYA3THxnXWApcqhcmenENtxvPBRV2dW1JHARURuLpb4qHw4WrVLEmSTBxyWi1z",
  "key26": "5yRW9rKpPJAX5CgiSpz7kv5fV17JMhCHhaxewKtwakDcEiZLigmwpkyLYdY39wimvNmRjWtNHNkaV4HLmd8KUmCJ",
  "key27": "ujSUppv2RSG8UuvrBbMdwG6n831AHAdKYVXrgSnyWAsnjMkN8yLUGfPYj9PVP4ZUR1eQnvGuquUQ6sCp4WJnaHQ",
  "key28": "5efFsGk6WkMjWpfhgWMki2DqjKwtDnmpEhYq16Wk35M8hoTWeKvRDzMdc6FNRfYUXV4en8AQ2MDXMj6q6ukQ7RTf",
  "key29": "4LtrM2xDQmkMSLN355yz69VvQHy3c96isPtVuNQEwZvkSF3k1iP77cMRKGyzHVhdj16kEt4raP9CoKatoZwryH8a",
  "key30": "2eRRs8iBDRebp2eSYgz4iRms8dbgNjn1C6buEky1GpxzWvvUdUSN2vrqFQ7oV5CkCn8gXpUFQb7VC5gzVuN7SCjd",
  "key31": "2RGhxJnnkbMze1srciGKRg2LXWhmqswx1q9coNr4ogrWihafXzZkckFWqLD8XFrKMmiyS3VUtPW4GkoW91HmEBaL",
  "key32": "vhYZrSzV79RiWGq3KjfUM8N3P6VK5PPVtiSGLtDGCpHzDztT9wnht9iYRyRazvaC3idGDAvuvLcgKmsbuksFmyT",
  "key33": "2yvZQrWcAJnqntphp6x9ksUxVZcorrkqmty5SC2rokbCJriqMniFYJox3fkHWJcEHWwepgeAj8JaSJGYtjRCyrCe",
  "key34": "2CEgnpzooTX7JRXgHXMWyE2L4gMvmTm8GJMBCyfZWV2mu4X82oDZYhB7P9AQ1VJ4YoXTWGBbR3riPusp4FFK4u3G",
  "key35": "mgWBE31TQkALrZXmauVRyojXq5xqwQSxiRNkymR5UBvDhPkDU1D3LvsWMz3ceBhHGdr7jubXKTPtptEKjwifDmp",
  "key36": "5Pdkb5Wg8EJUEbSy3qz1LiGLEyV171dMLce4ZUMNmi39PsimZTSHdWzsxU7do9XQURKRvH2P6pyDKGeCdzCzz293",
  "key37": "2bVKfPK5fnu4hoCXbWkmiQgZDYQMxiEprcGxWr17ZnteKUuAdXmTYDyMMifqqw96j9ix41hAyQFpwznCyDYMoh9u",
  "key38": "EHP9eo9KjPh78oXys3RiiEN7HT1SWvmHJGVxhThjPWjJ6HiD2cGJ8EFmLbEnV1vkoYkrxZm7bjHfTBp1Bjqe1ma",
  "key39": "4WbxemCEHh47Bvw1VcZdCVJYh4tuyF7pMBgW99E3rFEzyataifacmYWfK7QWZnBpeyetLyR5NCPiBfhxA2MMpRTF",
  "key40": "4UyDZ7cd1emD1PXVD5Rdg5Hmz8RoTYufufXyBwyQTKBH38Wq1m3dfy83qzc5jqsbTxzH4de6r9ABBesJEAXdx3dX",
  "key41": "2KEop67mt4kEuK5kcGU7XnaqfVJoihNCEU82ouNA3MUru11kHfTbCjFHtPuJbF6AGjB2G4DgLmdux39joStmvrXG",
  "key42": "8h9FAaj1LoKGNUTpsZNPYkZX2RdMHEFsLjLTDuBZ3MhepzrSBynTy7XgDe7u986zEqVMYr84KxLwWhjjUozytkL",
  "key43": "3Xj1ytU3YNVbhyqAbEaXnMmVB7wQf81mYdpJT6ocavEKss2nQjkMxNNYXG9mryD37QR3h62BSZhvNaTHeGazoHB9",
  "key44": "NQpxFEYqP8NJdNPgHcwHRbirFknptqLxtzzkkwpAy5UfiVrjbqbwFn4Bf31EXFZBFAxMzDwxV8aJsq8XCVALMXh"
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
