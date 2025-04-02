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
    "5USj4WvcPV7QSB9yrxYbJKzQuLQptXgmwH7Hx2FqS3EihLtFxY7NTAyoXeGwbydvHnEDDcKoSgrb7Akx3NR9FMC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65infN1D2fgEh4moF5sACmxQdGmK66pD7Pk6WSru5k8whiQUBvSDapVVe7fYfo99GX4qyVtjULe2FSf83aZyuXmF",
  "key1": "23kzthYWHJBZyEoNPrmzwxPUYKsnDB2D1TrnaN2BNBv4NHYu46mPaZKZ9EWHL8NmimBSAbg7X2DLJppFUY2Qnp9X",
  "key2": "Eqp5qNL7gvu7Nx9rcjBakGdzLFjrez2ivvyw5sD1TfpyUCL9xrxmG2xpz7j5YPFdQxqfUbJsbvdTrvReotWphFr",
  "key3": "5wCMdTuWCuDs7BoX1Y7ycjhKpN2YBzVM9ii8oA2ZV3MEmqokuZTP2nLkqZMhf7sevafyLxdiqunHMW36hwDGDtus",
  "key4": "5mKrr9Y1z6BLF7iM9pX6ESENPgAFJ3X2u3dFDhRQBWhPNNZ6HqqREtvnfMzr8R9vgk6hoUUcSFu9dUNSQxHj5gqN",
  "key5": "54rC6zDdm4J7R5hT89hTyTvUYEoA7Eghk7UZ2J44jWvwoB8R6bsA143T9n5Y6LnFUHrx6i1cB1kNXGJnWXmV1juU",
  "key6": "4wFefp7iCoKiaNgFJiX6XrYSa4A4TyCxynbz6SRwoAt9cpyR1VebbkxjVfU8kyYnoW6932ndfqKUvsqrqEZBnYXn",
  "key7": "2xwxsyZMtZ59WnjpxspEY7n5DZh1QE2mr4p6kS43VT23mdm7n5xQkWYcZJqowiMde2TbfrJidcAS8VipW6tTC7T",
  "key8": "asLw3HP73RnJtYim3EXFKW54LQcnJAX3rYsnYnfT4w6m8wSP96wKx2GZyZtA1YQHpNK2bMzNwu6KyAuTehaBEZ5",
  "key9": "StgUhdPmpXNmbh2zJbHgVzCJbgTB2gtSxC51b9xgRxsV7EDCsxTkijei2Ytkn7mkNS6GQP2RX5JQCqGUVVvz32u",
  "key10": "5i24FBCbD1QN2qdES5UijiDup57gvZucrV76VK3x8sXvYnuHprTBhogWEnGYzjRwfdBWXSef96Z7NouDHqURp2ZJ",
  "key11": "2Gp9SMuGkqAEgprZeeVJdKGnXkzyzpCYjKrzs3j9uDMh2Nwr9nMbpBRMoUJr4JMvT7auNYW47H68DstVXreo3S7H",
  "key12": "jL3d6V42mXogrn2874mEuCS8o2TgEhrq3Q1shWXzVTAqwApYt2WvEWhcvSir9SdeWc6KqiJSBN7sFUAQxjUxwrk",
  "key13": "4Hc54RsUypyYH9JTxzjacNptZoaapHAPCZdTaUmo3Cu3V2jvcVxt7pJ7CBReDJnmjE4RjzYuaeAgjV5BAAf6nbe5",
  "key14": "3XsurPoYv18nKWNgEy67qQGUX7Pog4oPkXur5MeUby1YwzhXrmyuUV7xK27aymSMk1GzHyFsy534Dp1ocuTehWYJ",
  "key15": "5iFnCgK26ReyTKg2MLbr6arfn65LDeYmHQVJCF6TehrUqELcVBahhPoCVZe8VVQxqQLf4c2GAYUkWSRUafuUeRDm",
  "key16": "vK9GuvgKddixJnJ3wra78nuqk9Wc2Zq8uEHZMYeJufuYUhuqLZBZCJDVojaLRFBd39ZTrfpHJzUtKxTgurr9GAV",
  "key17": "5usyPxeuLCBzdfgVNAZ8NXvDcLLTSU5ipkc6NvrcoyDQ2Tvtz5tFhUd3bBvAMBfT6xmsMCxZetS6BUeaAg9eQauB",
  "key18": "5S1B73eP8cFaA5U2pGa3CbWnsbPui6ThU1SrtSHWpuwjbKw1uhgnotN3ZxMD3uCw34t5jV6jh4UuyVZ3KH7Xou8W",
  "key19": "3HbV9f9Le9QUD2FF6bfAagubYFdA8ECpBFgohFy1UcdjJzSJj9RKgWooSSJT9BhBHedCQ5Bpisn4eg5Ng7kY4sov",
  "key20": "5ZQc6i8dvR6mZH5pjC2knnoFZnZzkCJKmvAJkRisAXEMSaQPVW1k3R87scnbCr9vFpS5vEHqnRo7iFopHjYfzWf9",
  "key21": "3rzKLFqwhmt32m19rpExQsCrvhHXMfPGoQWX3uKLJFjazLs41Zjmht5M734mm22BwinM3GafC7cYP5VJS5fs5zdB",
  "key22": "4CZSRadWFFZ8cuE89ACLg2N5kEYN9BaFUUJdZMuruzBGCvC1ryZQUHF2hNP7chvpFzASYhMCYd9ZbrqY4zEzamL4",
  "key23": "4AvdqYyEANdiY8FKvKoj46tQ9ZvzFUkLZhvBcALEkSMiwahmz1DdszgfYkLthqEcmzGDwjFNANKWp3xx8x99JbAU",
  "key24": "2iTCsNg6F17aTK1uU9yH4UMLyvR1dUoe27PrsdJ8VARquovBcRgQo22TsvjJVa1wvkDkNQRBzJC1uMfbNH7F71Hq",
  "key25": "3ADfRVwMyxNUXdmYXXKuhtYNt3ibPyo1h1kDaURgnFCa9jZibkwTEcpJ4FyUgdfPp6yu4i8m7FKAJ4N52YR7JK7L",
  "key26": "5MTLpPsGexCv2YW9FXvYA7nV7g57chjrfTmnmhzX3LF8BQgNA44XDmHBfJJhagmttCCa3TgoChq2Jopza3fTHNJz",
  "key27": "3QVJXoFeyTtKMu6eZe3nDQot9uujcMUua2oxe1v3uTiVdmdKMQ5Gkno7XCejgMB8dHUeMDmqZ8sctXXjBg1W4Wy6",
  "key28": "2mhgYAsnpo1o42nHZEu9JY1r6N6XKoEr3gdEMrXrtAn2shcRenCDky9X84TMbhoUSHKPmY8Xh83X289qd5zy38hp",
  "key29": "yHuRX82YQCzCmTN4nNpxWW9NHcZadDbX8weX6dKqnhsdzVJVnXf4K6RGsQ9ziBQa1qeuRc5592P29ebb1piLgUd",
  "key30": "5U9PyUV9RjZVkzJUHJ2HkWQE4vddshE5hGSDDcFUVCAisKAZSM8NPfvgJfPj2HaYfQ4rdnBBXthb8FWi5mR4iUwP",
  "key31": "Ya3uho1iuVwL36Bd69G1kFqUMNnANp1M1Z5qxDhDkjYHUbvss9K1Z7oBYvx65ReDsfN5cfKAPqXu7ys4qTEDusS",
  "key32": "3jntSx19tQiduijxka8rT9YKbB8Xz4TQkNNAjksh1UPQrZebvi2tUxnRPUjcLzxgeGZKgqPcwC3o48vQYaM3g1rH",
  "key33": "3rbesV7EwfRrsUNcTQhRx3fdc77dV4XZ1CreJWjX73yYge2mT9d8Z3cVgDHELtE5iYJTqkvMhvMajpyeS5fMTnbT",
  "key34": "5nQxtLXLaUsttUstN7tQ7LCKHpxCM4Rd8FwatjZSabLGE6oZXd2F8APJPkZVDDLVp3GukgFfzu51WFfzRjdbPFaA",
  "key35": "3qRNymv6Crkdyh939aEFqf1nSA3w4BxiG7bXWExbXWf6dgPK5n5Mf1mvx1rihmd29bpsx2iwdNzsWqvvRSjVm5QP",
  "key36": "qAfXdsWPYaoa9nTJiAdaBmPtMwp7JF54H8vrL5UFkiiowphgASkqNR5raB6tcquk4j72k8ngzPMuM8sCQ1BHEAx",
  "key37": "hGS3Qwx6py2oDL1BT53YNgi6ECvKnfV2CBUed5hBZmHAHCTqbbUrjb8fXpgWJp6KxQEk1dm29ficPrRuJGkXdmT",
  "key38": "2qbj7MFdaWWJbregjk5KZkYUuFk9gHwxg94UpuxsCt31A7wRddp5VVAdYNfFLgckoL5CYZBJUM4XKZr2eJZVAwHU",
  "key39": "58ZPkNzXu9oT5wYtGrWLiqh4YNNiVbhuBxFigtGvqACd8nkVsk4SNxt34sDGmvhtnhupZPTXDu1BdpHHqMRH2q52",
  "key40": "24YmEsiDrPyuZkPH7H7p3XSwYiPnpcJ5ShrY2aWouqYKP1bbq5NZwC4BPp6RU7ReDd8wbcXHJQyqmfpNCCZeanz5",
  "key41": "4t3QEPikawceu6rvVUSSNieT2ornpsiMeW9BmgtdDksf5zUjFdrRBsJgnCqDFGWm5Xrq99VaEhbyyL7BpNdudWNm",
  "key42": "FbvN6xomoY27W2tMs4vjoSyxCoTEWBMNieGhQ6YnUHD2KkLRHphSvnujboxXQTjjD9pcfeh31mcC1jR3BPsZm3w",
  "key43": "3aNCWdoHXs76XbqtfLu7KUobXDWNEZgXawBHxtjs93zCWoM1eUTjD4kVkZUdXtp116mXC4RqfHDXMsgLNPcF5pWL",
  "key44": "5fkAZvPaf9JSKiUKHzuhghXHFUr4tagXw2ivh9wnegWZTXZ8a3ES3rfPt9QwcyR6wPAA6Sa6px5Puq6H6WtHeYa4",
  "key45": "3N6JKhzjvRJ9QMrPJ4HbGPFcA88ZH8Gqg4wAgBSKqbUyK5Q5S744G4v4BxcCJDegXzUbEiXhdnKjT6hwRoczeKiq",
  "key46": "54sQigDp2zDfpKkkEYo6ccJPiH7GrgLoYVea7gsVVshFVVPViPBKGfAN9DKzSzL6HJH72wa7jQWUeAThMQDBKr5N"
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
