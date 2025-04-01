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
    "i1QFKoq8DvXUqHYvQGDherwvgvHmJ1Bid5ifU5fMcpKiiQ6NgAqKZmrNFVEG2jkAdqqSMaJ44eQ22hsShxi441x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27FT3Zs3kNPxNxyQqTbD5CnJTjAPiBt1vBhn5mZMKDnDudBv7kiKuBaab5XUMxXMfnCgK3TAcVqH82rp5oMZ4nt9",
  "key1": "48wctwuAGwdbPVm9sPbuhtPVjPGv1YgQvoqLC1UpEvFoXMcozEsP7XYNr3XarnGCq6mpA6QSUozTj29CKobeorUJ",
  "key2": "3o43jx8Uho8Aru9SGQ3D9WRC64s3jSCyhgZjSNcQgYKT8cPSpDcYyLnvrHyfuXG6qaSnUp1c1ZZuyU7i4Kaib9Ct",
  "key3": "4k3VzLD2eSpM9MGfv6jvsbbgHcijzKw9afpSZY9AcKkT963SZcLDRsxwvUBoFY51VfHY5FDNExwq1XitsgCE1aLP",
  "key4": "5x79F3XWUpHpJMTVy3NEgM8hVnZz2fpqE2WiZmndTeiRUwhhueuGwUrvYSu33LU3B7PRrJvLhxWFS8uQiCoUBhDk",
  "key5": "1SFobaK6qz4oNn5hMY3SgepQgGwQfNnd3tMgPCHAtiNNPxSQaVUXmBJQ8UrD4dtZ1FPrc7WYRyhuE17iTauVJEP",
  "key6": "4Q37EGhNgGuSAmimPomA1QiTXbXrQsuDiyuS8XXXX67tjm9khmboWvT5tVAGAPAwdUKSvrbanGdmiK7CCUT3knv6",
  "key7": "2akBBD2qv6EkBpXtJtSKJqfzRk5axky3eGQHLDSML73tSFcueYLF8zTsbZvgCm2yjMrASSaLPtYxGq6vasA7ecGm",
  "key8": "34YgTy2FXwqVog1AtuZKVrWwCGGKjeh5Jdo8qtvYLZxYjQWoxZ9BVwzfnivyrmSHRgu7XeNkeAk9Y9HPkc7rgRrp",
  "key9": "5URZsvFUc4587aFft4UnoxHpgGUmbxCkcrbrULpkSKv7dsvFwpXtDQgP8SstHN1nqD9rRVWw7CtLTFngKNH1pEJZ",
  "key10": "4yptnvSEjQPQ3hiDJoEnZPLMQPv5tZr5Amz2QnnvWJVNbmBNuBwyzt1isXPvrKJeJrVMSHBSoEonHcR8ng5enmPk",
  "key11": "65BE1ZcvJyrExyjJoW5qBPShqvMa9G8EjqYjnhVSBgWSYwbU6N2RPWb6dFqA1CKJ9fR4KY4FsteKiGChrTkYsGrs",
  "key12": "P2bJKEZezrVvWorFR8mbeBZ5bFLrVdUKxCfuZRRFiRiEfjdxVrNAujqq5e3ZPUV5e5g5EaZCRfWqCUg4mg7AKdH",
  "key13": "2gDZ32s4bgrCjafLp1xAzzrFvUwpTgx9nagwBAHNjw6pjKovPkk1XdWe4QprEHCUFozsNertK5i6xWqXaZ4S4wmv",
  "key14": "GBSvRaRjNdMWRBTFgAMjHt3Y4hMX9XfZZr7g7uL5zTqCsHBhxUARidEuL8i9UJVTyApwinvNVEcGLcA6Do2FD9z",
  "key15": "Cic2CgpDyEYCF5JN3EQLhsxC78DSWJ2MagF5snjkZeCGt3y71XEipKpoxY4RY4jA5zhheeeWXAS4gUXDD6q63eC",
  "key16": "4MjGXx4d8NjaokfJ2sxFhANUCpi7FfbHS1xfRTpycksJMBJet1c1MPbZNDWDHao6J4a25pTCpwTDiaZfCSPXp15v",
  "key17": "wtZpWRBt3ijghqw2i3RazkuCMUc2LvjjWQLtMZGt32ir4RrBmfpDaaiBW6quGuXMKHhppvmdqn8nL5Bw3RTv4pN",
  "key18": "5XCgJ1QH1mwWX7NU9MUe48J1qSHnU6kXW7B8H5SdUDPSJHUNjW3moKozawpJX26Y9rPs5goeMWmgM1x31jwvfbhP",
  "key19": "3UMEeNxGLkDeALBY9d3NhScopyHgmXtVnNX8bSqdfUWDaHCzpohgWS8CEqnwExQDyeUdeXkni4HgdkFyPL2cVsrD",
  "key20": "ui42Qa3N8V1QnMbaSFFUgxk1uc9qs2pfpNBJL8iB2qsbBfqgyDaRjxU1Qovp9Jv79jjWYHygLQRzJVTiMPE59wj",
  "key21": "LUqbtxsi9ShEHHQFfJfAN61mXKcQo1Nq4ZSma9cifHucCreXhnYWjZ9zpTsNz4bNGWt2iNRbaYFio4gMmn6pDnH",
  "key22": "2zYH1DRCFm6UK1cGfc9eAg5HkWmu4Zj9K5GruRjMkkJqJvz4ciJ1opDvJ5o5fDtFNwWrUY4c7doAR1qxAAXbkgw",
  "key23": "3pkugSYWfPYJ31jsQxZZFC7bGx3vA5LTrsAk1SEx75wzPaNwYogb6mkFATqcBbkD1wGW8ecV4FgpjKQkyQWMuE91",
  "key24": "HvTRyYXrDNvY5ksPpXvW5oDwKEJgod7LGsi4kZ1g8TmPTCCejVz5xDq1Dy9kDWc9mSPBqb33JsvT9nyr6HT2R6q",
  "key25": "59juKN6GNDmkA5h5C2Y4BJrFmq3E65GfPGrAadAjjkWSqFKstf9Fraw5VeMvwxpaxeXZTuedkUBQeQHTNMkakA2H",
  "key26": "226L8LU9Esw6oxzvA7b3awLvPunhaS7FJKEUGmN2LAJcAEb8z7LyJXsurZqsgEaRwEveGtEG9EiHhstbp4ZCrgdE",
  "key27": "4GNhZQWFMxvXiuZHKxJpqywo2WGfFGF5UxrTYeqsoEzM3DxGAYeLZMNJxLartVRpzRYRjhwCjqMEEdg1t2ANxMAP",
  "key28": "ZeVjqX64aCHKDTkkMFGWboreDH2oJnhWXSAiDKs1YjFdCwgc7euRRb2WQeYNPHQv7JbtskXMqJkda1u7tvB3qoz",
  "key29": "58PDwV4MESA2tyBKrUfMW5BX5eHyQr73P3Bzwj6An8uLTGicHHH3Q7AQYj1u26TrV1JeZihmJJwKgWHrnNVjggyM",
  "key30": "9jJPis2u3MvWiWvwm6SSBvjaVzymMSkM5BHxexyxnRES4DtM4sNYazK2Z8iHSSn7Rt6APKiwx6uaV9fPrbXkfCh",
  "key31": "6f6EUav7jTQ478ohzW3GqqGv1om7xdV7LvnGpRVuRy8Z7CDJzLWzniD2NK4dzfqDoRWXPqZbfuf2badcxYMzdD8",
  "key32": "43gBXfXi4rjDuicr6k5ZycgaLgnG7XTZCwXhM1QUykMxepmApacYDdUSLzTHhC5eawAoFAbTUzaFtyZRUW6EM23i",
  "key33": "5Ap1AN3osYqJ3MDnivVzXoxqMFWejynoAWztxqdKH7Lk1GMVikyUFUhUzLfffqsqeRGgn9G7EX1jD3ff3587Akk8",
  "key34": "45tknu3GJoQCfJDQr4YLsoEMj9zpeGf7vA288SxME96gtw1PEFyj4BscMWzi6zD7GByUJT5X9xLXyQctYJKbTHak",
  "key35": "5yLXhmygCFrJuKW7aN9n2EQz1s7Vpg8qkN3ovcBeMdzPTqeVeu7XzjQ8gJQ58wCcR5LvNno9f1Ej7EYrx8FMug9Z",
  "key36": "ihmBDutU5969eVgkhhdYKRWzYgmUTqCwBX9kNy2dXdZJVWKJYeGqs4nP44RmkE2Pnm7pRP77spXMZAKmFpnZcMq",
  "key37": "4MFvCN2irMyfswiPZQwrouuhDCuG95TbEeqFp9C23VNdUjdjbFSnpct4DFk9joLReEoxzNrZPeNp2EbS3bGjEafy",
  "key38": "5crULMJqkCA18ZcFBn78JqJKFuNaTTrDqbWEkKjzrEoZyWXQSEp4eV3AaqXweDCrrFvFJBn9EyVrGpYTE6HQqpgM",
  "key39": "4tZUQenq4ra3bTXjqGWt6qPYT75KRUrRQhAKS6Uuc5P3GnZcL1CAkVgCcusrmbQTXAvpDk9oEu98qxd5USXEyrAS",
  "key40": "vrHiUvhaZTWjnBJKMhugDGuzfPb61xJi2A3r3vX6oaZGovrmswpzfjEjYYJnBW62T8mV7tgfc31Ty91LGzttgod",
  "key41": "4viWQSDsjfhMiRhad91hTSKEZFWpniPcuaGAZmLmA2FiuhsVUiQFtRPTTj7KgrjsMPBm7ULBEeu5aNoV6NapL6Zw",
  "key42": "5tReHfCURG3146RfLoPxa3k8LC7bDPZsTkSRFBuqi66demPw5gZe3p4pSJsSfeQMQxbL61LkyThVdEFhyPnHUusZ",
  "key43": "3F8oXyHcFjPb76Ys6QzS9BGhecFFvBsZjmZPBMLKTuLZqWNp2Vwc86SSwWtuqLDbzy2UNZpgs8BEmUfUyi4zs3Zf",
  "key44": "XCb2gHnkEp8pQiVnvqpL2WrafpdvgJQd18NpKN9XTjihyLJz89gEa59UZtLgE2cMceQ36DzftjkxestdAoVCF9z",
  "key45": "4oBDQHVFY6pfMzjJxRYLfTkWRtjXLpgLqjfKVhwZEgpK9VuPX1PK8AjE1A8C5vzVEbmyhxmrdwUEcghQC6bnQhvU",
  "key46": "2Ab4V8La62gEVaFr11qvgso9nvxGoJmXo2CEkS4MNbKAj6sZUtCwxZGv5g1uCapXJRvm6pukJ7ss3EMgVsxZP3Jx",
  "key47": "4ZpBHPpQ9LoYQhK6Ht4GZjUGuHcNuWzgL73uoCayUSVzaUuyBociBHY61Ciiq5XCxb64xNjZbwwJDaeYmTepLzWT"
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
