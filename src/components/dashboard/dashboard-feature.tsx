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
    "GBDSR3R8majMUmUJspFpB2RenEdQuhC5F26uuDijaM1EeGqEp9foAQszpukN8XJ7RzWuU2dxu4MHLJFg7auiVoZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wGg31494XVWPQ4xKDJEpDTP2CsftUFukviY7pwemvwwHSgprvmbEWRjpfXiqSt19cPUX7svadaDgbfoefUTQw4H",
  "key1": "3aD7N5cjLsxx7KPjrGDuDBa3hnBvYZsf9ifwUqerKdBV5AdpKMQu4YoGkXc3mZofQ1QQ57G2KnNeopw6Vc6mZ2XL",
  "key2": "4P8i397mjTx1Ez2i8w7fCTBgg1HLnk6Avaif7KxkRP1ghb1wFSaS3kkXyFpbZgXfcuVnvFG8q7ST1u7zSU8bnP4K",
  "key3": "4rrXM6tJYnkcPHw7LBfby5v8sGrPp3NtL6VH6Rh4WcKCZQyuVEH4BWUKSudeV12AarTfcRAx9oqARgCSc2jXc9ai",
  "key4": "5t6r9nXXLMPQt1n5BfgBHjYief93rsPQYaHkWQdGwAdqYmdxcrDmpQBdZUZainc4N6ZhwX3xHx3BWR384gGQiVSh",
  "key5": "2LRYKzEgHAKkvqagcYWRgrvxuUtrSSY4SHd12jWfxLozue8ux7gHAJm7wHUTusYkMJ5kuYzuymdYkya9YyMJ623U",
  "key6": "XnHsMKMp3zPkcj28ZXTdst59HbWR8G9HrQfcC8XNmrhUq9TqjaZs6JfGmuMSHzAEimQFXXxwbZ8NZCGvQSwTZDh",
  "key7": "3dcmYvuKJPMzEWgjaCBJJPyspVkwjyZf7Mx4dyjh5JWixvxNYafXDbXMXFtQmQWbEscvXp7MSR7LQo4TKSZAWKMv",
  "key8": "3vV8BgiMiV452BWjHqMsxZHWohPYTD9qiCQY2EVnJ27xCY2oph93c9vAZmEtsgE6JrVoMAJHTezk4Tyr2Mbhof7U",
  "key9": "3KdzvEVPT5N7MRs5gkLeUH8L4B8QWwixSuNQBAWykFXfWLt8FxuLv4DsbnvWKEXHo2vogwxDHPM33KSDDTp16Tzc",
  "key10": "4NhToCNevgZc9o34LBb3ChxLxKmYqpid8esSbGqeb8YdGEWi5pTqnWsQRvfH4d3uXxrk1dh1aQMqX7WKLV9FtfWZ",
  "key11": "5mTBVBT8LpyhzWyDXKT8CKVMibVrggK9Z5r2m9GgGFJ6fEsXDt7t9ZrBK1n8mQYoGkZULZ3HKTRUHJaebVCy4wFv",
  "key12": "35a6ofsh5LX6nmh1QcGDDwCgfwhZXumpcjrB3MErFBJyybr91GBQDjA33vouHBPvbb7yFcZbVuQNT8XntQG2KHTD",
  "key13": "35voSr4nTjKXxTcCxDnUnkaVtsWvj7HzKR9hBwt5yKwPDovPNPJNvgNT6E4dj5PSdEasrqXN5zMUXX64SNakZzeK",
  "key14": "2dn4qYw7zxXGdNjqpCU8Fxr8T3Axm2gXCRv44LC47TywNN462QiF8k5wtUiWDFDqMozU9V71VHeQidRLU53ExPHQ",
  "key15": "3xsMmgSqXFbK5PhLzv76dUZqGUHHzvi47LMbyF94X8oWqSyj2wqALy5Dxb39FwtWCAXNYwFT1CjNiJXAYWyjYQE",
  "key16": "4UQuTAD6B33vXWS8uJqK9c9nDfHZ5jRYPMHyAweRdJfDSbSNhuPwEBMjLXTaupj2QDRaxqjicHcbEQLktkVG4SnG",
  "key17": "4oEjrXMMLWLQQv7eNawVsJZu1bkCwxx4LRvpVoP9oHrGNdcAWkJVU3DmD2hmeF8Dvets3oicWEeLUohR5XdepTUu",
  "key18": "4CTrgXS6CVH9iFR4fiD9MVdHUqNq2t2govfjdXAxV1BQTnHHCB87LGesCkvCwJ8cJmYofpqc33r4rZQsDQgSBRLV",
  "key19": "ELyw6AxAELRQnrumnfE7K24DZ1cRzqjJSSrxKJ9h7eogmY3uJzrqzfURotmB23RF2msEb4FZMj8ZMQ6LdHFu2E2",
  "key20": "2HCULUJnC4QsBgzMWdPpRRbWvnDC8FRi9jeH6JPZcC9dCaC4LqyYNRNrWjp3rvggZGxXkRrf77SbW32cPTiAi7sP",
  "key21": "aYhTb7GbYuAqWpqxQLBBgUj1BPyfp886uErZ3THcZbM9HtWpoEDdKVYvvj4gC7nxTHHXPahXZXLStQ7G1Ht2AB9",
  "key22": "3NcgCyrmMiDuUtJjrAgv37wqnrseUqxhxcEajdWfWHoXVC2cqFcp852GHaQKjbk7G8UnKeBUXU9FdPU5LJbHXXwW",
  "key23": "2xsWz3bwtee7j9gynyFuiA2dHJgg1WJzRsYR8hBSpuPpPgixSeNVDxPLW34hjF4is7EioYtpJDmM4D13SxAQ3Pso",
  "key24": "xrBn4rvxxp1xMbMcrfokYsx2J6mxBmPCadBqsYCgbj5uB1hgf8vEN5KqRD6PdQa98BF98ehWd2WyKA74Q52N9nn",
  "key25": "C1DWr3JUspLxnnhr8LceVvAL7EfVkHd6p6B6WjGZX7zC8jJngJnr1cxATSL1CBMaADVXa2F51g3shXXvxMPdb6i",
  "key26": "3p3QfaHkiMZwmgTa7GSLK4vNj8VRXGH236EEvSJHxoMiYF5WgWrMS8DxJi62P5xUTw8EPsxdiuqdjVszapoVQ1XA",
  "key27": "4GfEVFsp5yaUakNDupPmoep6d6YToJJUKyY2VPFnXXhWzxV2iwBEZkrQYKjEqiH6FZXpnowiHWXTddPcCtTqLQWV",
  "key28": "4R4Zci75fYboW3Xffv4zKpbVcLtaysooZDAuHnpYynHeFJbZYzQmv75P6tjoFfup5jiJAACstjPjFCRYNnDkjJUk",
  "key29": "GXVPkKTLvR1G77A6Dn3W7szGShUzbu6K45jxWTrdGwpsDkQdAdkiDr4SUzYAmUGhNWsJcixaTLdSYNfyM1mb8Us",
  "key30": "ybCa3DZE67EXKA1GDmEx9FnkjMpWW8mwKgV6N25JiqdSdzep5j891x5jsHPuedbs4kXqu5xoUY2RAK2Hn2UmsTL",
  "key31": "4MmWDws91vcmt8yjND8QFzgiAtwSFr7v3UNFBayzNzhYvfm7NrKKVbrG4HvvLVPtDKQMKsjHvTh9zUjPBnKFfjdz",
  "key32": "Namn9UFuj58dy5Cm3tmdDuupRVL8GaDQ3twtruKNvt8RfLkqzumd6nQGXoYgm4SLQ4VFmcpAbK2LJfqoiEkSxnx",
  "key33": "5a3ubGnJWqZXNSbUipo3WmZaGiDRMaUhiKDTH4tGm2C5oSDtrvbdLU5vh6tJvyqP1uUJG5mfsnC1HraQUPJZeNFU",
  "key34": "2L8AencWaCSy1UmNKvubKbcBdWJUWYUwexhgHQ4kUonCu3jB9QWdmRS8dgHBdPYSjRv8uLQ8GRx96n3LpBD91WpW",
  "key35": "5XCq576rLXEAui3xr7rG7WL1RqemyTDJnbeU1xoskyoHVqNwBTCjDhv2ZzHW6xYz1ErDMiktkKZYrBuLShfFnwHf",
  "key36": "4vRaGFB1g5stgwbZ2ZQkLBYkjuDxBWRbCZemzMg53bZ1VxnkWbhrZaecVB1xZyicPS6pphZzSf3ooA8aLt933AiL",
  "key37": "4jVJMea87VUxwmSHg4YChrQMLFsQrwLf79JJduZpRCRWHiUifM5R2FdodUxpMApDtbL5QLs2Tmqts2MP6vcxWZw4",
  "key38": "63qFG9nnTV6Rnz3jxchi9FJVfxtN8MRES9wGz32XsGGWebjukSHqPByUPskkEcXjW1nBpn9AQz8bkSgkBhB5hvkQ",
  "key39": "2tjZKuaio5w1DQdF9dvHYqfSvVkssu8bGkEZxooi6a4PaGBXJTbgLGJUGVpJe2sASGaRJgBs3t2M7oADZJVQpbcB",
  "key40": "2P8ywiz7jZAVvKSAfZJ6RpKigLUNsZfSg9ucAWRZhU6ayAQptNjpXQHSvAjEXw6KAboSfMtNN6fcztntZcRRdt4Y",
  "key41": "PKyGV7D75u1wSkSXiT8XjmPNxrEMmJqAYNHXyx3ZQouyS4rw6uWeaE3PAXDcNNYHhLepA8pKTvt2q8fdN7ZXmbP",
  "key42": "4oDM3deBiMPhpt6NH6ANHQWdncr76m3niQCNvewPAzfWuA1wdtnMhWtY6Jb7gJ6cHX5vucYLdR2gdRSsU76tQvXx",
  "key43": "ECyN4swdViSyM8jvQug6XpvUQGRKjEgB8ExrF4sAJitfbLmg2t527Ukq6DUwb2twPraQSNKTJKLWoBVHp2ApoR9",
  "key44": "2URdQKTGC4phKLasrMK5oURoDEtsWgneME4Ws3cUeRnNxgWwCd5QqkeBZgiSDw1kqSgwfnQ1KniXcxHJ42XZyBJ5",
  "key45": "2Y3iRCkMuXxt9kr2uUErPaCs5LGhC15JgS4WY22XKWDvzZsxius1hZsXbzgTnLFQLyah96yE1pur1gKt62Ye771U",
  "key46": "5FEXyvDpnWqZSKH7QgxAC4dbXLTyFkpUmtzfJVJwXeZbwj2wpfEs1UbFifHVwWycL8Jc68E1muYPDc6LdzhbbAWh",
  "key47": "3ma7KGZG5SqvAJui5WcUfM9k1Ba3HmARSWw6F67gnXA6MDWh3NUeqqZRcFXJmpTc2paj5AjW6Ldgx7ZJ4LgpidK5",
  "key48": "TsmSm5zsKBbhVfDNQ4bbMwbagpVqZumi8joUnunDXwSUoXrF5LTdQp75wpp5rshFmpQUiDyJCKaBVmgzhHzjXMT"
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
