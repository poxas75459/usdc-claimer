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
    "39WJT8F9jqPtASW2o3rZRE9MgGcbViebRqnzXH2ys6EpeRsyJ3ZDjh3odyZsKzrFfbmuZiX4kPk1HJKNkAbwm5bZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "572ST2d8KJfQgy7QvfrYarfjB7oFWRC2kkm88HsaHu7E5PjVtqV6Sc8YceCV1dCf13UYszNQ2Q8Qn1AtriMwBu1E",
  "key1": "3NGuTbrsT7cnwVcyPzA8qZd2LeyQEND1J1uhJxsUoEkQW6VBFE5ztT1DEzdgWSMa8mR2N6xSjU4ZBJA48xTG2oTQ",
  "key2": "BXLvkaci1uPifAK8gsQqvtvmCkpbkqtXhm5TavJpnWPP3uWpxGfTz5b7reFDQLDTF74qgJRuKMaQvU1GUFLRym9",
  "key3": "2JLx6Ja8pg9TTGquFJXZaiYPdAyCz2gpNZN3qyYAYCnJW6kWVQPYKdxhwwCkuUpM5ikWNdwq7u8xNwoeVJwCoNZp",
  "key4": "3a8SK3YFDSt1Whm1GRrq4KQfnpxPcAQXmtkg8z16KVGYyswH74965URtjuTgEXE2EK3qjcK3PUdGz5YCVhLjP741",
  "key5": "56VXBb95LoJMSg7tEaSRRx84r82Tj3mB15YVuGNaNCJLzNn12LKJaKULnzfjodeBSiAwF6bnNAZZHh8q9PdfCB9X",
  "key6": "5BB7ZwMtWe7zqvXiT8WJPwWaCqJutHt62DGas9iGgQV4jUaK2rdZhNU8vxQLmvQ3FF43zFTn2UfP85Nx92pZVkUU",
  "key7": "5AG8rFVLBqyZTX4WRxfUjFXbYPWa2Q8jG4JwayP418utFqJEysQZiKWPxNPthYnoBoeyXHKaMkreMD8PsCbBphW6",
  "key8": "2bpf9YtcAygUnZW57ftVHyCc2D8gJ8sEszrn8THwhJMJVChzFYwkm3H8iKiMtEejtsYEffWpWbWvmNAb5gk9xB39",
  "key9": "5oGHbERMsszMJ5wiLWEntkxSWgyX81TXEKvHimb53weLaccDbDF489nf4XFLozELMGvXmijkJSk1r6wBCvaYkHLB",
  "key10": "5bSYj7pMXTXJU1WfMW29gfEozRMJBVJLM1ApBhZxdRi9Qi9c1C9u5npjLLpmuwWDV45ozrCHeTZn9TU6dNA3UCwr",
  "key11": "jZrNmzkRf5kYcG7moJc1RokVgC54L4a8QvZNY1JH3BQiWRAg4vMeTARrYaZFFfu28TpexdKnw9N1KKm56jK6hPy",
  "key12": "5SzTiwSWJjJDzWWvM1NVgvLnHwTt3WzZt4ceh8YUewjCryhHfM8hW5zV7zfbCHYEgfdkH8X295EfJrH9CZH7sWC5",
  "key13": "5SjpUgnxtqXGVPh7y5YzjETqZywukFd2xXAJ1MkBkiUeKgHaLRNTDEbQkwhmDcuE8EiqjpS4g3Wu9RvpcqdcNZNP",
  "key14": "671W9PU6H4NUooGu5zxykWfT8e3fscLN5MYrADai8ehWz7QAyo2LcqXPuPLyrTeR2ioGGKEpxhx6tTcV4Hoi59aA",
  "key15": "5iR1UWkikgoJFDGFqP3ZNALCmt1BimrKyUkh9pUjbE37a2ifxsYrRkGimBv24HqsLok7Bsjov43UJgcejJC8Dxix",
  "key16": "4pCQqnrskj3tcuA53S27dtHt1YWgDCQ48xj3rUB55QLDjB5GvYCw1RNbntg2RZykApBhDmEd3KH5p1noa7Vd6i6h",
  "key17": "4dqTWC5AoNjj3FP1yJ3XiaDyQfzpFFagh8Hmb4m5ARN8f3AE6WAV1pB31peRGRUcidEPhJtmgW9DyLvXCpsFg88q",
  "key18": "hcunwdyYiu9wDT3uG69U2KpdRDQUCwgvRmu2CTtqfK2C3Lq5hE5R2LN2Tmx8LhCajHntnw1Rwt8osooZLufhADL",
  "key19": "Rv9NKB6BFme7VDkmkqrpvY6ZpbfPS5dNTiibvsbs4yPaGjKMyhy51RaHwyvYqtCJGVdi1H8oFY5C7YpzjXELs3y",
  "key20": "5WrdJqchZwsj3SgxEFwXXYMynkd7BNH4XjxNG9pEwJxKr4b6gJYaoveXUPN3wFmv1FAvC7sEtMKTP4Eo3guioo2z",
  "key21": "3mZsNtsxr5CsNfNnUSmLJKz6LNYNrMXs4NYm65uMUmnj6Jn6cd1MvrA7oNkC6bET6MXgm7X3gD22NSMTZvfHbaS4",
  "key22": "BxJxqiEeMkHkcTtf7itodryXfcCD8W5X2N1UX8FZFGMmJgX5vpDgD5Y7zbGS1UZmTsQF2r8wHZ5gasTXLzBzNF6",
  "key23": "4aHdjSJy5GjJ1kLqPNrr4E5CoteHk1NcHhvQhrCEqTVC83QjoCRRkZ9QrNhZNXaZ2cKKVXrK3WfucGV5TgJtfbP6",
  "key24": "2mfYKqgZNHbf3YW3ztvZVFnGgxttACASKJV9ayetWZSTBkz2wKNxxVA1CBeXrVjpQnJJyhgrjR85dSU4ujfQAu58",
  "key25": "52Bt4k9XXQCRUS4C9eyx9rYGT7FSFfZmmVUx26BnPAw9tLpkjMz4bwVCcwrU2u8c9UnuLnRwTVhkmhLmK81Wo3Ri",
  "key26": "2h9RnhLsHC4dVuBo51H8C1QRoi1x9XWpymYrzCqKFABT4NXQSjoVHW5t313bhud1wJW4a9BrGy5vacvgevwm24N1",
  "key27": "4vmua88ZCvgWe9gbP8VkBxHh2XrTPxztervR4yRm9GJDbQH9hmoemNFb1YTkdMh3WEnB3BwZim2pqaigRY5r5YaC",
  "key28": "2ojsmCTufEoZQUYHemwpJeSfC76RJAz5LZBtFZKMMDpeUfKQuDRiMJVQt2AFqUTVvXEoTPFA6PPntuuXpXSivsgP",
  "key29": "4TnAPGdrJZx3c1ya8kio6KkZeNZLNWUy113UXYXaqZ6UBHCF3NgUCK9kJsdR9HmTTrMyUjyTh8ZN8L7WTYNCtX33",
  "key30": "teiB4QKqRH3YCtJXLYRTjn1m1rGvNhzQXeYj2csAVyyVi83SFvXN5CZZe7G9Gn1HtcAwTZuLRhTG43cfTqmFgkK",
  "key31": "3C1TUCyuyrNM1fS2YJG1wnaxfjpbYSofqgpTAW3qmHSsvDbaJvVH2teNMaHZScdnsaV1mmudhn7UV6wQ5ttFEGRT",
  "key32": "5LnmFD4q3sa8WmQGzNuYnf1rrkQLwaf7vTptMKCShpU1U1ahN2V8Ni6QF7sLnxsC3rAon3AssXm23xaqRRtdujxT",
  "key33": "5y8Ki8Akdow1Snvf6ECdtN2vHQWU9UskRV61t8PW4u1FR1QjNygRFY2bjhFfzPqtbdE1NYz3CouopT36QNAE1oPJ",
  "key34": "5etNRBYU9g5Cvj2UKWEuNn2HPfkDEZVn5qZMtLRSxVPs118grzp3Mb76zjpZTCRUGme3MpgenzWLmBQ6wqdATTmt",
  "key35": "2xQ4JSmvsHjfVp3nr5Quneys61jbcNcw6477zPJytX3hXGGh3oz2pK9bWiNSqkqEu3dcD4EAc6nabgqxJCUDzkqi",
  "key36": "54eaBc8cCtzM13QLd4AY3VcxDPtqYAdGrk9CHHjN7xTjQ7waStqr14WqmN45xbZogcd64VZidZCF7ygKsT7hxy3",
  "key37": "4UPXeG37uUdQqSjX8UNptNYrTws2a5Hr3E6Rj12QvGWAxPDdbhctGPnNGYiyupHgia24MUGyj5H8z9FKfm8X7cG6",
  "key38": "3Tu3Kqo8X3biiXNgJiTidqVXikKxwZ4ipKsPM9Qy4Tk7CRXgZvXMzC4ZkReyDnKewixfDmafX1GgEMftdoan3pKR",
  "key39": "4m1kuMs2Bbxh4sZXQtynASCYE6roXDXKKJJZVgeX3wjTThDWEP4yYcKe4LdrBLcVaY9ywDMMe6tWHRWWhoEFFCX6",
  "key40": "2wSFFKriHmgwa3dm4v3kjfnRh1tpUsWJhkBRcswQrXDH4SZcMdJ7aB8PVkhgzDogLrfAqcHpPhSa1cxEdij2mfwz",
  "key41": "3n2nFngcfjSCFszfoGwhCiTh4MeKHhchEoGZZHFPoYYPYGD9WwV81kdmPpENw15aCrCNkfMau4AbmshELR6jWy8x",
  "key42": "xwZvU2y6zQaFNH87WpoAxAnuEFAFzNgJ3Rz7rGZct6ciVQRDQu7k5tekjg3t8fsuxJQ4xSGKo6SeTMGKRJPBuh9",
  "key43": "2y3EqyDViviB4tw2MCzfukdxSQZXi1ZrvZbT5Q8MLgVB1PTej21a3EX6kw2jjobXcBwdDZgGTCz2n3PeUfgnsx7D"
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
