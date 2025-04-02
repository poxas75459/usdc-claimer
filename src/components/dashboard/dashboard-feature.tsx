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
    "51Pia6mySLKg2bkxaGw6qYSXPXt4FQrEDx4xmB6Tn6Uky8ikTFFNx8L9TShHhmrNLdVWooEBh1uEfixa885LN37f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GQhxQxVAWbA1DbRugu4bqkBJkA5f8oUigAXReTJNgiNCsv9NfHb67vJp5Be3QiguTBnPWkemdXNQPLaDofWKXxb",
  "key1": "RR2aEYXKKhcfC6qQRkWk7CFhZ2bncx1BELkdBMT4P9N4KVZnfkRAErr7G75dD9HmDt6b4YHVqxPxxVCxkzczZbt",
  "key2": "3C3Wh5mZyRXnpwof92r6KVswNtynqWtaAAnvAMSJtQJ5EjD6LP5raxKCAkddxMkDRsUWir32NtLHPhVja146bUP",
  "key3": "4HVy5XLAq8op7hav6Dusg4MXEb2Fn6J3iiNHxRM92n2stKgkoGi9WwPG17kMkjADvXkDkKuz2WZ7SGj3hK1DpkjL",
  "key4": "tD1HScVuqGHAwHAbF6qhEFAkjoHn29Br2FR8uCjxdjvYGNu32zQ7RL6bueGmPtRgyi1GjqsXnARpR7s5egpBF48",
  "key5": "5foG7CZNdDJxtWRGVGGFRvH9rphZ6qUZhPSBMecpxC6rWKkzZMBkX34j9WePHu5LAexZDgQ27Pk6JdZMjHxPFeoR",
  "key6": "uimH1GDXen4DjvtGkaajU6Jcguckb4gaPc2W964qssDYjH4PwsKLDTdSk8pBHdjunivoKK7FNm64TmTKmPL7YzK",
  "key7": "3DFYvPYs7XHFGb496NjJHGaSdK8eLdVFopRZpGbBr79hCi9zUKmVML7pPkFCnzHGHc6Q9ZTJdP5ikNAk4BB8WB32",
  "key8": "yDuMpoiqsxw6ZMwBYg8JbpgcQxv2BXMkDq64i3wNCEYMwt8WsCPe5nTmufmvNLm4z4qrprJuPq7wemAHqzvLi3Z",
  "key9": "2N8BcSGjqw9UtRNYv5CdSr1ysA12dxiU8VnVHVNdvWo8edsEfJGR1tS8gUJXZnxeKVwTGztoheUdsPsw9tTT2xdk",
  "key10": "4uR9eGx4mMboo5HPMeZdBUCGsb2cHQz5hhuBUPJ3CR24vbwLY2KRVjfteimDmBAkucsNH2TgMJ3Ez3kFgBzYNLVJ",
  "key11": "2JnA4vWdhQyYXePvnfz8uVoKquMZ1CjLFR9EvhMdpKTuckQHRgfVG8uqNhhxM4N5oxL73m456qrBxPAihMth6Q2d",
  "key12": "3nVRYNyYmWLRFpQfr1b3F581UNxWowFZxnULArvpvqbLdT44K8Zf5LTmAtBhLkgx6oYnE3FQt6xL6m9av3STshjJ",
  "key13": "3DTKMwczPSxZGPX9gxyfPhr34dX7FfSaatwzU31neMfmHxFmfaBoaKB8cVvGANeRahWGN5FeYbsMrKALAbGMgAUH",
  "key14": "5ZUgZt6c7tsgA2Tkb6ifhbmwi65JaEJG89FDPWdNvnaKKHYSegqJVrucPGkcHadYY8UCqL7gbG2Sa6GbvGGx4cFX",
  "key15": "pWqYfXj5t5vX3HzmVzEHCeckcFUAKFZkvpkzVHG6mieV2oNQ59NKeYv91WwTSyQq58hx8Scs8K6wkGpfT39ykR6",
  "key16": "4CJFsunKwx2M28UnkRCwoWtUCSeBQsUnPF9f8r4b5tZex8ABsNRqhWKGChyhfYav7foHtFxbkaSm5KXHN2hVU1Gp",
  "key17": "38FoC2Ys2duh1gPFZUeZrmEexitdxRF1v22EupSkwuCgSYc5CRkU8gffNmxovtVShGq6jq8tyE5upPxpni8BCAoL",
  "key18": "4J8xQHpXM6G56g2cxm5dEZvgiBM89PTJD7jQ29fU7LkdAFzsgjEMMuAJp1rpGaqXs94P2wMPN1W1tqCbdNuV6SiN",
  "key19": "2hLRXPHy37rhfY2CGzsoLHfkdJKQKctWd2LDxCUhhpDSGMEJDSsu8Cva9L35j1VkCJcDcNHQH8TGzTppMqpogBoW",
  "key20": "3t9jvWdfoo2Dk6d9mjNp53bFJShUdukEu7dxiTrTJTEjiUhmqBBPKoLiMyqe3dbBg3fUiFePXEcXB8jZbhDjWT24",
  "key21": "4k5JbE9TWVmgwZa49JNC3bu6XKZ3zHt6JcssDbTU4p6xySszEzDx7cmj4hRQicj8P513wYiFpjtYdjDmibDPgnpY",
  "key22": "38rziSeRjJ9jkPiV54dK22TqR9yVVThHpseVpTCHxvbtogPey2zxBwy3RtQztG2qcdnwYeockJJSbt9HET9ZP85b",
  "key23": "5Upmso14nMZxRa2SFJX4ZPZ8TYhAMFK5rSrBs3VAk2BUVmM2qVrGQhHvHXTyTnf1iqmKRseE2N9banseAGPYgTuP",
  "key24": "5bxeScERWsvp2UmHd3CtjiXumMQkTTVYDtKmgYMjGJbR6qPvDbVSf37cNyfLJm9hk1EANKvZDmLPXyyRc9KFQAag",
  "key25": "4uFAoVEtGssWZCX9V6r1eSzUxitdQwjP94DEoHWEQs9rSrfew6KqbjrQPqiTG9a7xGf6dKT2a16GF8hqJCXE1ww9",
  "key26": "3xTfXoHuPP7CQwYuuwjyJyJKnPcjoWvL7hCNHteB59BULSUoYcMBvVAJh1Ggr7bU6zo1EGNEC3Jr16dWhJhfhvzt",
  "key27": "5r92YnQ41ckH7Xanyk9H3k2ybLxNjnBv5JGiWVcirgk4DfSNK3vn5BQPXXtuvZZkKAoWieGyhtsJexdCYzfArpgy",
  "key28": "4RwRYWEpStnTkHRAcCcnkQ6Kvmr94Z8yDApMZdbhJhBfbf7TGp7FZNUPVA32iGU2Jwacvra1gq1qPKvBTmT49aKT",
  "key29": "3TXBVCXrqJk1F5AWBWR5kesk15TRH2HETFxstkCdh8YFbSH5HBRX8qrzZzjXVA19HFUxygtZFk9DUgWg6szE52Ku",
  "key30": "4Mb4bhKyNA2dqHGBnjLkHewzpQyKUXVk6i3dSumCo9ScSdAt43dKzJg445pGQ8ZrXfm2jiQeNzWAE9wzCsWoqn3t",
  "key31": "42FFLSBPYTo2RXkdXaiAY2v3yMkHsHgKsZ78vCbaNVBrB4cxTE83XTjRt5T6AkEemzU7oTai4TrELdoKAqZG78is",
  "key32": "LSDD4fHkABQi5UMeqL8WKcy7arsKS34zcAbfFACKq2eUqmVgcPJwbEguVcC4tyk1oBS1FoenRfj3d7rCiHiPMTg",
  "key33": "vsxb9XDjqv49SSqVVVMBReYPBKpkGZKcWT52VoVuU6jqiZ4KZC4t3CFvU21AmULUo6CfZcfFcJdSkByRmViCVMP",
  "key34": "2fianBted2Je6EiqRd2yHGbkTRPEDJhs2Rtpr839ij1pA1D5uBFHGnEiSVxgmUFQPP4xMaEMYfkfavfXamv6gLam",
  "key35": "3yEguqNwbfwCJ4PwG8YgkYr6WajaRUHbZsAywoMayd5yAAgVouiiLG74HPgxWicxj5KvJcHCboTyYHW4L8UgUQBv",
  "key36": "3Mjnzt4GiM3T2zfR5E3JhUuTfxEoNcueh7pqx3cg1tbEyYnC4rtrrUU8fpiaToFZL1B7AeVs8LvaK4x6ZGAnhEvg",
  "key37": "3RDZqJNqz3Q1kZythfdBRZbEnhorvRZYag3ArebF8HNehU4f2cBR64DC8iz7wbhLJpaD8psDAm1WVpafLif8yMdg",
  "key38": "62zhm4yZd9nKn5hrLWbm2bshWdK7epREP4yC3wV4QysJG8sC1NbVyhnzkcSHBxBRhdiqW1SaajggkMf3SJxheHRH",
  "key39": "bxxH7c56HMJseDergCcq32Dq9evUUUk1gS8pm6zEELE47KZfoEDPyap9ByVyvYobhUw2bwXFKvTd5uns9qJXa3L",
  "key40": "4tAEoXsCCxJFudmU37vCnoEFghQUVo13dLWfgh2nLL7dmwVBrmjFD8F9SDMPyxezAmrK2PcXGVRfeRhXsLz7dP1Y",
  "key41": "2n69hCoxUhTkVKBFYs9PRwD3KssYv8MVZAq46gntquA9U4J1Fm13HQ1TgXc7gtTZwSnXj5VnCPGU39dg4gJKKGmM",
  "key42": "24quBsi2tvPnpSz9h6VBQZAmrxH4Sp3kNVrCuGVzBgYgdwERQZGKgJWDNBRLnjTjij4xVUR6N6GALusUg59bbHjK",
  "key43": "4eN2nKUg61qgLXwuPgPcxqy3ULrCb4etyhiZ3pdTY1oeiRkEiwEZztoQAPpDccSFbxEPYgzeGzCZ6j4x7CT3xgZq",
  "key44": "5TpMj9T4fB2GcA5DAga8L2UbSPgd5DQUggekjdrH8TV9nvWq2TAUGnapWUgkfuCWmgEKzJBSbPuvgFaqud9Gz6S8",
  "key45": "eFfcJ7SCrZn2vZLAL7eRQ9hu62sgoaM4KeoyY1FhjQ4egBLw3WMCDqa8D5ikSPNGeaMGcg2wS7gknz8y6go3eZX",
  "key46": "TXJDDj3Ad31FMcyeMiyJdeS8pSvvjGYXnbmpohTWZJegakaBheSMFG8s5ihejkrw7dbmSzBd6SZ8Vp4vKNBHPFv",
  "key47": "2kMbiLtkgnBgTTHk6vLtTkqDMRpNQv56xJY3jxbAzFKuS7cNrTMNmmeB65ybEegJCDXUNcSByWT5zhdzRiJzyaqY"
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
