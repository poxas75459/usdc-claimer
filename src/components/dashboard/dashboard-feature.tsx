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
    "4idVibnYcHAgQf7ZFVxshMGZAZm4NJsChrwdkVXpCCwGaheoqYQxr7Yvw2PMbZvtfCnw7AY7KxmdcKDGWBUVseA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NMD4agZb11sxzv3pUBEYvv8m8DJby4fFQush3VtChSPCV1QhjXwthWk4AEcU6YDKrxxL6FFYdHibUKA9DNjcXnJ",
  "key1": "4i8SbEb7TYbw5PUthDVXvUu43dq2oYMT885XEiJdGgcskotjHo4oArpgFg2bN3mGP8fALk4eKCsTeJrWHD6bY8zU",
  "key2": "5hP1NNuxQCL7iYKHoYucaKYUnxfdkos936uEwRkV1UaJ1fuHCn1NF35hin8wxz6eqHdrVtwoJqv3Pe71tQScxPTf",
  "key3": "4UM5bARs1CDZPm2uxwDm3ZNGBfFStBTnvpJGSo8SR5YBZSGeARSwRxz4xbN8fDaB1G7N65UhYVAqRenVKNToqZeB",
  "key4": "3JiYygFM9nksYM2YZbLqUEejEeksciXqaB7VbXeAywX7fV5b7pytWwyxBCiVN4UY7ePkJ2K5Sz3xyrT22Voer26H",
  "key5": "4RcjwwGXcMavJFhMeN3LuBum3Fs92SLsxmmxjzqvNQj5n4zrx4GtVDKho7s9v9iXmrPR3NmtQgYYs3LXuNjhJ8Cr",
  "key6": "yEkuFZgmAXo2f5mtxmQzEoAjx7EWqUt24TvZonXgssiYHLCWkV3w4Z8hHP9k58Cfj738EbE7gTVZPMEHf5BbusN",
  "key7": "3Cs6YKSRipHoLTUcHJDtUH9ZaaPJvGtRymS52pB3Dq2tWEXYAd6zFaxXmGuVoDaqjTxJSmQYirLkAb7dzMzcDCz7",
  "key8": "4MAHfpVouhgRWibQYq1bj5nvh41ypg6dqJgS7GLoME79etQz6WyHLByPjBZzsbrPeqXvLPrkx5KnNgKonSRjgvAC",
  "key9": "EovvooDGs2WkSiYBESiXMUCJXAcNaKoC7hgsd7i9tWAXFC8pRcwSwDgsNaMFQ7UEeKwBfeEjRjNwLaemJVUxtKb",
  "key10": "3Y5hhaSBp8VMqRRW3KWJB8EK1EpmAFex6uswJpjmFRbCRbFn7xbbbMXSMcFYroV7UyJq4o1EzMP8BtmuBGfsEGyr",
  "key11": "5Qb6cpAU9MXqreVciAVxt1ujJzBEovbLWM1WUuqxrcqg5HxX5fx6R29ZpawF4gEsAtHiPfUggPjWo7wbNjSNRPQL",
  "key12": "4wpH6Z97ZwnWNdvVsKDfSzht6X6WFW6Ue7H37xigxcPj1iBKJrjWD79LGVEWEkHSBNFgSJxFH7Md9sDruxc1CTCb",
  "key13": "2Fsr1v1e7o238UyNnD4t6CqiZYkTwbKfZ12nAk6TfhejbQB6GYqjx3udxwrUq97FVpiDdY7w3vgCuU3BKoUVg9yG",
  "key14": "3vY3tN2tnUPRAGMCBtaMQVs8MzrZNkQTrQxZcXxV5672vgj5s1jF4Rfak7peNyu2M9ZGg3rtBDGYACvQyesMqM9E",
  "key15": "5MyPrioZDZ7itG2q2tQGjqJbe3ML8XCWqdx8AFogTmyxcHBGx2qZ4E8oChw7fvcn8QCCPcswRzrEj5Pj3JB8aThV",
  "key16": "2842WDwXWcS8zDLmw1dVqZHpY5BYP8Uj7p2dZhbpVHWxynouuDKsGAtD55C6tKdxXxdY3jPHvdxaSS9obfDezMNz",
  "key17": "2BEw6tNvHfHEFEdWdvSm7ZjyAtynCocydFcNxcHoEy5y65qKwciejhJLXkVgWe6wAypXjZsgxjvGVsVcaWUqVdKQ",
  "key18": "4AkxpYYUxsfnNcCtbgEEyKV9BXpDJGUutP8KZBhkhNUkrsz9MtK1Ni3a9s2HmwWFSeyMZhGqN4sGzZVgnrfEY6jo",
  "key19": "sXbaEjmiH3Y42zQLi2TNaAaVF27yNxUoadbQv6HoLGDb8BNfcEBieCPdsiJgnFPedpKLv9acAw7oUfext33PMXg",
  "key20": "49XtcYSCJhho37UbVYaZJ3H9E5817hEQ9d8mzGBsiCASHNnYRVu4EH3q29JP4taEm4BwQmJDzhgM8i5Gdzt9utHS",
  "key21": "iHxaNtkT7MkQzXF9BCKhRQ2gV6EPpS36PV2eeBPzFMB96oDGJeU7N7Kr6nCoaSpHPKDjjFmbMVJntix5RjSC6d8",
  "key22": "3L8YAtHNA7ZZG4bP341Gb3JKPgeLVZGK75oVepSAYfJEyJu4hH1QgRLZe7swqnuRKaeq3w27yx5gFCuiAeAv6HBz",
  "key23": "2Mg26SmNfqyb7unq68yzBpXEE8LjbxAVTbGnGVfR6QH2Sc987ekXE6vv6qGQXMBhRo31ddyKADaSXnUSK9Nz4N2F",
  "key24": "Cqi1j5yegPpGerRx75UrxAxhWcpuhcsupKgV15EndbBqagavDHqp62Pi37AzHsLntFxv3nvSqfW73hw7eRCP7rR",
  "key25": "5nGMnLNa52GZYjmsVfjCYd4GLnbkBc7fuSLVy2t4x4jzw6Z6rYqmifpgHL8Hb5u2GhPiV9sU2EE6FokoaVAwYT2t",
  "key26": "4diLF2oNGr3r53ZyqqFpGAM9DywijSRyAcxZ1tcV3DRxMBuPv8tuj5nPT87S7eyFNMrTqE1CM4rST2cEwjbPVsqN",
  "key27": "31msncWjidVCXShth3qYeLdYMqjsn5w6P5998rerLbhJ2tpWNmmM6zdxrX3L2WWA4mmcuBYAmaovwjmCAxCGKatt",
  "key28": "4vVHXv5MkCJ6DydrKSmUNHpFfGrAGV8ytgixJFFACfvf9e58YabtEHKZSgatE7prsh6Yubo4paib8pV4oQVgyuT8",
  "key29": "4JxkP8R8YhcebJKpWnm6LQkqfrtgyowxoo8hFXmoALUkg3gnjogh5BKzXp25UCAvDrnZP9fnWBkdpVw6ihycHFGY",
  "key30": "3i84ZgxC7yuPMM8Xa5UVFh3aYQB5AcX8swpCzFnkFS9bLe8tnG7Lg2KJjDG6btGzLnN6DkAE4UktL7LAqqux83gX",
  "key31": "ZqWDMiT5ERPg5B4MK86T9HH5eJmHbNfiwDy5YZxM74dJEHy2addmi6QLYwKZ2JfjGQxtPVttQ3WEsxD3aPziSQQ",
  "key32": "2aSZk9LHwiujqq1FnmBtrxqV8usFQuw1T39SYmFzAXscfZgGWuRsAYbcossnkkvERWM9gdSqpsj6kLq3hjvQoAXS",
  "key33": "4yNdVvwz4C2YGELzYAHFw4BzCkfRymSRVfhzdC1y4y9PnrTLX433Um3n6hiot2gb25ePGcuQCfi4YW9nHuH6AP2N",
  "key34": "5JQmzMrWvbspfarhcPdxL7Zvk1hAHoS4H6NjZmL6fYXCCCadxTRsSFmgrpNKuvYdfk1yJJ1PAKM3AUp8VSzVrdez"
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
