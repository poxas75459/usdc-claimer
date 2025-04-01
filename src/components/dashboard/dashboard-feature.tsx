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
    "rQ68NzYNigrhUfeq1WBFraF99EMistbBYMWtYCFvKGuNfhHAsKGR16sPfhrahhH8RvHbF9v2fuyQsrWgofSiAJ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MLWLxEJrp6kgfeXkKfua62FehQJ82CvpALiw2RY1kdVJH7XnxSEo5cnRq43MhCbvwhfgugS81FSdmrkaGSherE1",
  "key1": "4uFMjUDaqSbF9JJGqmxRWLkBn8EyGCZQSFQuLahc1nGQCTiL445Ka9oiqw3VHUwZKSQwZffcZSEeRjM9B7bVPcn3",
  "key2": "4wVUorh79k8qH2QVzHCdo35FwHbhpcjAhezSEo8cKNSFbQPa4FqemmLEeD1bNMPVP2t3gvFRQ5dqmuCNnT8SjY1o",
  "key3": "3vdAyUpBiZxFJYMzQcoiEqqE7wzu8xHcDaQm2JAwMQUk43R57X1sbDaYjETaadYyPxZzpEeijbzqebGJhUPp8HzU",
  "key4": "5tpZRarUREu2YPwq4fxLkxPMHQTzgC7RqvkgWbXJTJ65xvGgcrB9vRF3xpvyvLZA2aX3sUfi52FZsZZWkiy7zkSN",
  "key5": "zrqwDfBfbMRQJjF2GyTudkw5pgVATc3NsRwEKU7vdB2G1WtarU6AD8EFvYZL7CYCdJREM7WMbHkoGujWS8tzfEf",
  "key6": "4sQnFXJavf9G4QZgoGrVahK6SJN2ZDNxwWDwKcjVKAq29azCmzyP8xMLWYpPS3RCFFLT2zBEMVG7rZYQTf3ZpTFB",
  "key7": "5yHj8AD6QFn9BsL64n4MxDcHxTiFRCRBvZzvFoQa6FQcCksRNjVdh2fWc2a5cMaQjaUGbrnz3PLfikW1CZ79LWqU",
  "key8": "3SWpiRXGtGXYun1sSBYFTyBukjJJ8Lm1jWM8QkdzQGQDZfgnH9ufjNS6qvpKUAtezorLURRAgUUPFoi54GLZcC88",
  "key9": "28rvJ9JijjxA7hN7f33LFbSP9NrwHLWij9HAcPDFRxY7DCMULJ5zyJeqif71CFLtPWgDYe7MKd3EjMKVr6TYXhLR",
  "key10": "3WgkT3iJTAary22RFV9EAZu5B5LxuuSgpmPUovtjdMsPajzwPP8WTGJHTDDzbyjqNnXe3GqLxmqfvQHX6uztazFz",
  "key11": "31E3JrPApRHttrqF4o56YkrCgJ2BsRB3jwAmREsACce6dh3nDn1dhMCNkEf7n8CRsDSToKwgNMrBoo9qjn6H952t",
  "key12": "2N2MdizkQomg8yqakYHQXEVSrNAQPTD3JFCG7PDsPhBCNHBtyrE7NUFKs1hfUr8o17rtUeWb3PtYS8sXFnTLJnm7",
  "key13": "2SgUi4rdHjcLYdyF64qcVh2u8jpde8r9kxLW9ZzuzDBA7fUjsdgoK6y9xvNaWjX8spvhXg4DUZFwxF7z2wPkefdD",
  "key14": "5E9ujMUkE8w3Y64YibJtMrtr91TjTZZEbTmaNARMBbotnh84zX49Z78nYXPfXjTZ5zxX6ernEj3qq1wa5xiL1Kpy",
  "key15": "2GaNt1rSM2LQJaksf7mKs7h73QgDkViXgmELa3qk3fTJLs97PCfqbDLdmTM3FuKKpNKcmGxtrLvShwxtGHFZLxBu",
  "key16": "299bgMFG3tM6HLdjpGKMJC1j9K6eW6argJyiTdFTA2hkZQckK5ihoCyjzPgFBCusFzFnAVEfC9ijS6CX9vuAHxRX",
  "key17": "4UJtUH6KerpzXTVVETSPzABMEQSQ5GBnvHyjoZrg4onzEt8CVw4iqZ7nVQ4KnGZh46zBcuHYAharnT4mQTHSgZX5",
  "key18": "2a93W1uVoxnqBmg3H1dRUkph6T24j2WAWupwfJbJtS2EawKiu1LtbmTNarDMynrFaiHZH75EtznMrEgoXgMf29he",
  "key19": "z9ZsyQiPM5CNcNMK2bTnLA3kYYYyx7vtfKTGKqxTHvbToMmYj4gi4ugFK3CK5FvPHNvoeBLRuF6iTPqPsaN815t",
  "key20": "3WZzJRjrxs8ST8DZSchDCRXWSM5PxbaRwhJziHrh7D6ox5rspzK4k225FifRZMrXUbGP5y9zwpTr7sLieGJAjJwY",
  "key21": "27ojsRx5FNbbyqaCFLcW4BzGuXexa923PWR75CtC7FwNyPHbtqEU6KNBCmDuVUJQ3LBxkJeAKp4gxVVzEWyR489G",
  "key22": "3C8EGEn2QmhWE1zKCGAZsf2fRStkgvVcmArWhZStKrCnJVtTCCQzsHTscw9obuJV5VBBFAe4x4m1Gjy8R9FD8qqx",
  "key23": "FeGp8TqEUdjrSK41zvwXuqS8FYDuAAzWrLKQE3xkK7SvmvEpK1Rp4unBE5dZWYqWcz1EV4w7dkH3FbaQSFS1xvp",
  "key24": "2R4pvP7tKKNXg6vAekxLpusEUFsJtNpTVuvLUaQq6uq3CYrM9wtMxGaMm7bvTZ4efHCkYh7yjtFWRwAMDLqjks4Q",
  "key25": "3WY5FRu2dsspfH72VqdSxCJT4xzLcdTyfXALcrg9LDPyoYAoPPNUxco9TMaZypCQm3SSvE1i82Ebs6kdTHvtAXtt",
  "key26": "3RX5w5hBofW26EFMnom5B6a5Jdq4dmr9AJLup46iHjCMgZVnCR1cddb6EgxHDPHPXcHeArYuyTARV4mRuBnjrjkD",
  "key27": "2waHTxTrDPXDMV4cFtFe2sxSF6sRAixYgVvcEUnCAoCjN1T1xbejMMjNRu8YUxLy9FK1Dsp8Uka73Ub8DKe6EYMG",
  "key28": "3BKuPchNJHXLYruqaBB4FChNdm2vu69LPPWqzTkfVhoP3mXfVjMHTXew435xapnsdAvpKhcfhcj4bcoDDtVs8mEL",
  "key29": "35qEi9h49J5wgzq3qBh92HvP9sTVkWvid1GtUPTfVoXr8UXawTTUiY6QfCVbJd3sbcuXKbUwkfQQD5RgVBz4g8Eu",
  "key30": "26UnVKPToFCRq3Nh9JmmzhEukCDQfTKccu1ZPooi3ykMBwmduUERK3h9F2u8Q5wkYWNKp1x8RMHrYx1aKrRvB8SJ",
  "key31": "RaSTtY3YBFm4iDzsHAUtXyEpcZ7v4rEd9bjoPZwQwfxS7KyKCKvdEL2ADDt7VQjuj7uTK5zt2AnF4cWrpefGdi1",
  "key32": "2RmXEGxzqNjbPTpcPpsrmEpg1mr8QSQPYnXoc9jdVgPGGwUrtYBxhRbksfpNBMD8r45Gwt2P5xbffMfQF5bEgMEB",
  "key33": "65cspPLFy6fAoz4txiKANxtqtVRFNDDvuLtdmvP9di24kpMyPyWxFsXyBkZPrWDXEE9pApUu6zJKv1f8aZ56WYTt",
  "key34": "nNaKBzkbxU17RToJSPn1huKMWxhCunCKCPeh3FARxbWnqFcB9Tz7DtQRdksTWrN1SVUitL8E4kgERBPNSGDBiwA",
  "key35": "5KjajqV7PHy4R73xQv1zDqTkPN6ZmAFom16RznSuHYQUhzMFPKQ6S4nzafE79F24S5R2aTi2pqm92SzKbQqMWtQ8",
  "key36": "2XqBMssd8FqPa2aBKjGuPgVj4yLKFisLHp6NUhD4d3QrDs7Vj7CrKNCPCscv3vEGcNfYyFQTSYKo8h8rVwaQPWNJ",
  "key37": "CAJcT5nb8BvV2oDHYDLc85tvUG6xYLN6NeH4sHmfbsUWZwP2gXpLaBqs327QazjUF3Ss96htP1vdvRfqv7Pa2Bg",
  "key38": "4PxbC7hzwaAamDEbUMZM2FGqZ2VxzNMq2XHi65sky3NqXF5dkMnnJ3ZY3GtBa9t2ABZH7xYt2S5f9fnW5y499TUm"
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
