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
    "9ep5p7PLUCb9gFFPLTcmS4Xx7TrAu94h37Rq5UMLgjM2tkyLjVJMw6aJmBnPPHAtyrCme1xFVHGhiMnmQQL1x7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wrwd7ePfaKzxnDqXgon9WQxAq4AvbXmm8TjRsuSc1f4J6gU77FC4SKyXWH8YosWcVpaR58NYUaStaJ8bFnaJWiq",
  "key1": "5ZPcqFxQoTYXJkFiMJ3YPms1yCJcdcctKFggUqJLHiiYZxPp3HDEt6biu4sFuxnfKsEK2rm1LF7nG94fkxUAZLh9",
  "key2": "5qNV6cbDtdHjsVkFoLsgCDtRYxqBPjee65Gx6DmpYkNaDyrcnLjfXiozEfEYQY4bfPJ2DkKihvyAemyeBYrsDmMb",
  "key3": "33ANAa64SAwsAG9GAbwZn43oS5UcY3YjK6FUYCycAno8VFeVSx7UsuMRT6ToArxKNbeaMgjsWJdb25fFDqs2mTXR",
  "key4": "4KqRQUEPWsvBVNrghbVrSHgA3NTJeMLQyKPUkX3uAMGdpFstmBMkhWvispkPxT65oe76BEJrdoJDyyuUBcuyvbnW",
  "key5": "5YvTtD5EQ4vm5F9rz9irX9fMut8m8EG19U2uyZDqjX8cV6NvKRGREyrf42x1QP61JXKat7NVeDZZKMbWXoNqMwiC",
  "key6": "5NL7skyEigwapTczVrNgCPBtumWtF1Um16atU7TaDNEYCVZNBq7dXz6735rukqQLgTALcTGNwS7r7GLBW8uvuEKg",
  "key7": "GUh6PWTCdbzk56yQ9b9MxNoBs9pa6FzGYePmvAJNfVZT6aLxxCeEnb4FMiapz448QSW9oDB84kpPsbJQZ8zVMWT",
  "key8": "FfkRG84nHgxqd1sdqPQnBQYo6jxVH3Kvj773BMu2z1DyhcxLRSJ6MhxPWfga2iBWUD2Auib7T7FT8sfvH1poiTs",
  "key9": "4YQKu2iCZE1eERTveW45Ek3H7zGq7ZpAuBnPtEFZk2SqBynbpLYHtQXV9iyQ98DkbWA1NxCTYqpHUKs5cKZiHoLz",
  "key10": "3n9A7XxB9jBWX9rFH9g2pRXAgTkZ49xmadnGNAg2qWUhjy13AUAEFhgzmgsH18JbffhgWmo3cALqkRDjNBUqg4o4",
  "key11": "5uNLS5L7ugrw37fuxPSmDJFwAtmMC3EV6vSjtzaRz5Zn8hQS3mPrLZG5E3QE7Nb4EsKxwcrWUQApjPDPwghqe78w",
  "key12": "3qGSg2WJgDSDCFvjvTQ7CnBskXg77zLw2LaNthbh9ZXh94a8iQmV8KwUv6pfBecdeqFwh6PCk8ngtGTaGLmG6Nur",
  "key13": "386oz2WA8ArX98h4wW9HAgri8Ejzt8EfKzQZUJWjWSDHv5f1w1EfrioJmdNWiKwWfpWAR5Ve9GMfnsN3KsF7p1e2",
  "key14": "5pKQjfrQWU4upU76SD5F7yP6DgqmsfshvXuKuq8fLPJVUieYu1ugu8QB4QzK5J3xKfnzzXZwECjNpcwqvky7CDbh",
  "key15": "2926tqAMM1mjBXD5sWAhrdQCqvLSHdmeybdRn2naNyVw7uB2BPFCpEZ3tZWRjQeiGJLnHV5Xvyj7zJJm61M7E65M",
  "key16": "2rQS8qirA29wFFkqwNbx7Xm9APXTc52L1FhHX3pbiYCP8SFWpJ5hd7CP4BqwRX7iTLL2LS9eugFv4HcG48Mpx9dP",
  "key17": "2cSTxkgdfDonQcH2BFF5LA2Fj88oZguueXaaLKYuEC28Pnwdgohjku6Uuw6e28ZnMvvYj5m9AivkvJ2QQrkLoTmk",
  "key18": "2FN3dXzAgbCXwrrp1bPPCkgXraGrqL9bGzZXugT9HB4vkd4sGFYoMeg1wVhNp26qANn3Xnn4LS47PFuYrCEHauBs",
  "key19": "4qeEuRYpse4VJ8auTHxAYFyhzAdnU63iqZxB774CjzQKXoKNrUSQHZfE1XrB5qVzhh7VRo8hREF6MV8WZduFRG6m",
  "key20": "39ZYY1Xks3AHr4ZhScjh6wBRKaRmrrdy52gXH6uZrfKW15DLv7FdMsW9h1YbzoNxT1Cf9N1K2NDbt8y6frnY9vu9",
  "key21": "29T4fMj2odLVv1s6eRv7mTNueiiqjFUAfQtkXt2J6kc1cXmMTogfTqijBvobQdChhM1iv5dfXPAp2r1Noyofi7Rv",
  "key22": "zG5LnuZgqQE1LcS1JS72yW4jDS6HRr1PZpJh545sSHeNMKE3BfzNTYf7JTvhvTAgpsT6HK34TB9hmbp4iN3SDYY",
  "key23": "3aiQ4pbmtPcCGF6Ny93vdzTh2rGd7DyvoNnwmiQiPeD7y1SmJQc2w9XjZV3nhHLEpxr1cMyXrtyXCaRo4BGr9FvE",
  "key24": "4mzZxrHqQYheNPcnh6bRJLvxLTAD88unsvdxYhXV8TFmiDCgnx67iEkgfZjDf7ZW2iSpQo5QrpneWFfsmemSrc55",
  "key25": "63kq9Z3yCpeHtvjqBknzoUwg8dPkjjEhaZRPBtNTKHiPRvkwAhnjG1CsMyuQjShX9VdEWg9w6SEcERpvnmU94auf",
  "key26": "4TithBKhA4q8bjK35Swxxpo54X1Nz8Gpw3Gaf2Me1tJ92TGGnsv1VBaxaKpxPg6ixeYDjWCiS8ta4FsbSuYnzvyM",
  "key27": "J5xFKnHPXpBqAyu8P24Vefw8xBJ9KtNRSKNR7Qfcws9KK83cgsCc8bAg4EJQTn2qjCricCRWosFsVJwrHBcMn6F",
  "key28": "2HyPpHSnf32qKCE18DNz3LTTZqCXLZ3qXKsDDjnF7oYCVQArzKe8EUBUcPEZ5f1aZ5iMBRGpaPRiQDwVtWDdkp6h",
  "key29": "3KudkUFpgBsDT9Z5xjF1c9AMWrcfTS8hWkvgUHPvfxkJv9gFe7BXNHWGygxjwMN1zmTf6K7UteCupst6c6SSEVuP"
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
