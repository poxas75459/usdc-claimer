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
    "5EhJUyYcgbsoWDFnn52H5JLeDuNU3WUL9NEdYbuQzHVDkWbyruAjEicia1rA4MPV7VeVV9UTgc8HneiwBJgFobBW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p2fFhhrk4jei9v9TDfqzH427ofqDm1HMvBopZBRoaviCRH3JvkpHcu2G88zHZg28nfvimzd6tfRjP41qUmCi8nB",
  "key1": "2LcBpKXyzfYSiU7m2WPQ7nGDPs4dymBErA3kSadDgeY3pCrffnsKXcAtDnirL4eYauMmp4yyf5Foxn6iAR3JuShZ",
  "key2": "2Ezx5xttXYoJprP77woKSSAe5xDLnRVJwmhe1HY6TMPN6j4kZJsKuzavxQcCDou7UMBKKfRgD33sA7Lt67WcknXG",
  "key3": "59PPgVEqjEoWPRpPcKTY5zTejPjwcHxV3zzsc3CnZm76RPF6iZKf1wjgRw1piqaruwVMguzshzs96ohFwQTg76Jg",
  "key4": "4U1fMaJACK6mEax18xUnVhinqTEZPAizxFruZJiXes3Qq2VCRjfgw526ogALhMjXnQN2oNSujv2SXH77EjYAF53P",
  "key5": "4GUZcRSzKcMwV4sVQf1SyMWNiTYSRVraDUc38MFwVLtCVjkgLXbo1FML2fHGdvoYu53qsE9pFzyNFvXmEup5aDxg",
  "key6": "u7qwtTX47a9HsAe66Pj5ncg6ypNT9G42dfva5AWvmkfX2gV2541cQdCuedXZLtTWiG9n4KWYyejLEaS1pzT4929",
  "key7": "5x9dN6GktVm5b2GgSxcKdkNNpF3khnRRAeMfbK8vkuqi8jyfysr8FJrewdah37BmpnB3DbCCuxprWN2nzRcidYAa",
  "key8": "3ohtNFKmmbRHChcVLLfBQfS6z5Stx44r7irbytjnHcv8TBM5SUtuWsz3gn97uKBZZAibr4dVkfV3Cvpgvvtk4tDW",
  "key9": "2FX82himycyqrxeR86Pem2rE6wTWDyQATnaVfpM2oHsfoQhpk7rBWhRbHqh3ftGTEd1ks7GnKhehFq77nRoK9gyB",
  "key10": "mXDryaNCGbzeYpQKA44FmPqShTPPgdqaLst1WhtRvdVCqumUFk5AyrPS1HEpTwDy9hV5atMQT2TKvYv6yE18smT",
  "key11": "54ffkpT8cdGm8o8bLJZMCCdV3yq1ZejaxjyC9KT859aastGGhLZdUVbAGF3SegU35a2kZVHGZYKfGHWN2cU3VCeH",
  "key12": "2EXuJgpRMKqX247jSM9cjgVdZ8Z7JnwpFivkqtpFtWeWvSgN68L5jbZmy1XJFzYpUiQ3A6gaZsD8G4jUHtpbzGdT",
  "key13": "Pyff2LyhGQM22C35JdpjfZduW6G4xdPNezkxSUz961Sx6Q4e2QkV4dDziEuvF1zwZmsxm5snzn7TbVfwEWMTGn9",
  "key14": "FX5DQ65KFcwmYvGVtFup81WyE5Z8HbQehdfN6R6VzrJQe1kVEeo6qZ2XS7RN9ZURnuRKjH9BgsAA1hiyBZfn9mB",
  "key15": "5p2xA16tBNNz15kKMSUhLkg9VjVNWzPkFK7t1Dm4VzQLXqH48oRmahb88983nr99tQ91EBdADu5t5yhFVxgiKdet",
  "key16": "49RuavAbXXpJyPZNs2tk2CSRAeQXX4FxWbokZ6DTgNp3vdatS7gxFrUMUHdFcoCACBwGj3CGKuspoTgW2Qx8zdnA",
  "key17": "3t5MY4Di8gw1uQ7ZuLpyJLQiFHEdAAA9mpWGfvJK1BovboRzQqLPUX1NjBThDHL3SoY7zumHgKVUacXhrjvBrd3X",
  "key18": "ajeDE7uCUGqHaL8atr6fa2vwxXX1GhF6rSEe8JAnJ4cSKhsyqQYF8XMARtiFfmUPbxbDDkx5TNzXCwffi2pYGdH",
  "key19": "SBtN4bTToGsScL8m6zQSY9GvCZbd9tkps546Uj4pELbHYnQs7oK3kBiZBgnKnMdX81SNNs1H3qrtumK1ukzgq7w",
  "key20": "wEgZRZGBYsdbCW9g9HvHkQN3jJ7tw61eZB4fLx5wvz279H8aKF6x2JaFp9sfN3Gh9gc1JnpQaNE2kz3wAUTJpYE",
  "key21": "U3G5qRHRjc2TLxxtdkjrMBvrnC8RJUwP6yHgUTDwHykpC4AC2BoX745DT9e8dM6qrT3USPuCBKsekrtrvqrgPxr",
  "key22": "2qVN2kFBpDNHEY8urCFukRerxgJMWmUXpMKkPHCXZpQTD58TutMfqm4NRaRqrVPsoqzLPzwoevdJag7nLhAFbHTG",
  "key23": "2ZrXJ1GfcHmcnPerQyvAzcyZCqwAisacf1GcXHJkjUxFe1yV81KoGi89JNp9dPo28FnJJLv5Qrcc2W5UrE3ELn3X",
  "key24": "bFdU6Z9gjhd7cUKqSp14v6oGDTbyw6ELcTJeGXWth2qxtMeebEVTaC2MESQSLdDuBhTWMxKmbt68U6PmF7pMDLz",
  "key25": "4x7vNUYKeyd1L9uqtDgh4419mPovka3uCbiW3zgdvwchvCGhkcDnURGHkN2cwiMVHDBWVsTgmuewYdG2SyGW4ish",
  "key26": "38toUrm9hWmWkAQaivhfWGp7L3SwFh4JtpbsTLbaLBUt3d64k9ugTA9E8UNUeqo9ogryZ9CXvQY5Rs3bDD1Kux8Q",
  "key27": "uutY7fdq4DhoGEko2vXpNqsnBU8cc2kFJecct736R6cC2mjffqPucp8zWfxDdhK9huufGbPiJ21wKRxgk22NVCC",
  "key28": "2Z1kaxdJhnsLAaHgtxKyk9zskXf3ZHLXA5XBxt86FUFquFFAeRVnbWdgBQZm333tiED73iVaAJtTNHvMLJ1EDQJa",
  "key29": "2G7zLsUfzmuQv6T1yNEwCo5CrcEkfnVZM2LeF6RXieMv6ZsZguDpaow2tEdePLQX6JU6xhSYVAyP5kA8iHnytZ7t",
  "key30": "rH4XvqffAj7xV2BQfLQDohQqAt91aRGZ7AiRYHjJNaGEHZZsgsNQ1AiSb7FJwNVAzdg4cxxyVda2o1G9CUBPNr8",
  "key31": "5uBzoTLScHTPsSegW6UFYxNLFossUCaR7Th2zNuQYvKpvj72zfoh7UZXDfcVDmyXAk7PsKXzatcxVX5LgcNcNdPA",
  "key32": "5tZ3wDNyUUrovPMcHwACk2v8ryrw3u8MRZWKvQ5vzHiQrNsWMbBd5bQBm9GBAyJQ849puceqi1brcdyCRMSovcmx",
  "key33": "3Xq7iGBYMpiRf9kyG9hv62CCpe6uBP6TJY2Qjn39BJUVigm71yjP2rKkQCnaguzeTA2FNwUhAp3j3qgYVLe9XrdZ",
  "key34": "3TjLZJBEpxASX9TMHiVkp4MuWEogiBmKGonkU3LdZ7vdgAYXkJEN9P8U1B6fZVmJVGdcC8BE5DSVSLtXCNKMbicN",
  "key35": "3xbVGoeaeW3D4HkUFGm2LdZToKP9bgvfBbsE5ifNWQ8dAke2T4ads6qVEL1bHRPj18YsyoUQnzwMtNbx1ZNmxNaV",
  "key36": "4wo3Nm2VUXWapw6GcHL1bnpApvDbCoBZRhcBrU3DrW7Pqf47k3ZP3UdX5JXcsfFbVabBmjwEaF79hfcvhJcMiTHZ",
  "key37": "kPcGm3cjut45hsLbFypmMzZTtXoL8PWBUhSiWeor7cZyckDUVPdYW48Kdt74g7msQddaUD2NJfgxLBPvoxuG1yw",
  "key38": "2zSTg1qt8Aek64FsAJSRnkYUtHGvnb6BcV9j9G3Cbnih4zrGqzTdMB81F6aGgbuLQaPpCNijNotLY9mHyBq6bNGe",
  "key39": "36wHWiw5iHj9BkYAN95hfmaLhABaA21GUDhJGTkzYU4yf73mCQYcAH8kSqMMmuTsG9tW7VmVKR3KH6A86qyzkL7D",
  "key40": "2gU5o45cAEDSQqMe4zfUHWPQ4zEvyLi8NgaqQw44MoSGtAQfYJJfpMfGnbQmSy6hcjboEzniMX2wbWVx9jKQj8hR",
  "key41": "5wzGhqHYsQtHr1b3DRfDSeBs8G68gifYQssu4aMSDi5HZRYUvncPxYy4XvAqSYqQaqSDrYAxnwSoGBFNexioqrVP",
  "key42": "wgjeHNsEXKAWsW2h5rqHuazXqVs9aVQ7wX4BtHfijUos4xLSuLTfduV58MGv7fnzFPCdUmnpuCN9u8nMq4LpUqD",
  "key43": "2BJ8xyzAsnQ24eKEfxNEC3x7HX9gTY3iCzVH5BoTsgQW6mr7qviZQg2EAg54azFzxjGJy4Ab1Bqg3X6ZRMvy11qZ",
  "key44": "2eDd8BAMS3eGznaBK5ffZJohB2msgmBieDYkSuUFS4WFgiFUQmUbiSJ6poT5qiw5DALBYumCK2zzw8LijoD6Lefy",
  "key45": "2daYJDWSe4BsEejfLuWkVKggAE9VCQNPuSge86gf6YLd6BVbYe27R5cxhfe1cbRtYs3RoLRSiEhXYFvUaQwbGauX",
  "key46": "3Ld86Cedy1vDBkz1G5mADSWDB5UeAVgj5pPJHjaFfh9QUAEm2kPXRZRTDmEjC2DUmQSpVuhbFL56yKWEopZtegD8",
  "key47": "4U4bEocbHsUhCCQJUJjJoqpmwdJQYZ8EJKmDt1QbKBExZbhFpZ9y2nHbUrJ3RR9cEQ4TMt4yTTBhVNyCNinrV3px"
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
