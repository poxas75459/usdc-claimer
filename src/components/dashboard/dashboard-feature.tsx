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
    "3rpahnmmmP1MAB5cLUT7PEUCwemhCeXrsbPE5sPjH8iL4WmQDvDBm8XuQ3EbtbgcmemAfYpYjWaogatEPbR39SgD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gZ3aJ6FQEUCopiwCGGZxg9K385zt7oLac8FQDrfBvDf6HnHxcy89FJY2jWrqQrMaPK8FbzfqvWuAJK4xbSsvEmR",
  "key1": "4Gk912SAhSwcH6BzRGdLwq5cyC2vMFe8PZGdi5UWtqNt9SdFT1P4QwqPHmTFEgoexmWPfZC41qbcuQYTsjBCFKX4",
  "key2": "5vFUapLrnbCicZpFoB23LyTFM1R3QycCoYQ7QU3LjWiG24C19aD7C3AS8CWazCayrovSuh2N7Hi9ggsLTQMj6qog",
  "key3": "3DiPZDiBNRXCGsjrTjuxHXJDNi579kdNy9inEQXJPPsfon9ZPnKahQbZf4JqhEdanEQSybc9UkXmU8ZoMf7Nvcr4",
  "key4": "3c5CxiigU5YK5FdeiT63gEZqJDtjnSpKaSgZhg7ZjcUs7hfNXGGtfkogYvxdGnpk9behohFXrqZPYfNFZfXrXZks",
  "key5": "22kLPyjEazgm8zAmrh3F5EkbjVVSXXXM4Ru4QkkpqmY9SZUb6LvUP2LAFCjycDYN3zKzyjrTRK1SEhgPZFGcSk2K",
  "key6": "3ng9AsLpuKHZXVEbJPhyEhVbxVG4dXDoAtWoqhG1CULtAJ6vCXkPZMaxCF8hmuNRoqJSdaLAfZ8FkEEBmvsmG8eE",
  "key7": "4zJtWT8RQQV4gGcmMvbdFPH5smAysgobNvoi9WzNQmbjZWDEUT31uVDY8dH4ZRo83agnhu3nuQdDrSyb8Ki3JYFo",
  "key8": "4ktxMiuUvt2pkvVjYsX4jnsQGV1mKrGujwiELwkWrgcpHbHn3WKVBagrRY9VDuJCHCVwsB9D4suCvdu5U85PccmB",
  "key9": "j5JS6Mtxc8jCBRYM7Wa48GHEv7XMdk9ZTVTcmAcPZ1wvX5j5GgVi3e3fAA3mJHXmqgJUkHKD2N1ftEtrF7gSTis",
  "key10": "5AKnGXYYa92pJRhsNRDW3ERrXQjeesuimFAL3zSBA6Q2RzZ8mTk7L464oHmU7zNW2XSLowg7qQFT8VzcHpvwP1Si",
  "key11": "5NZxS7VJPgj59qoT7oM2iFeysR9MYWh45wPyjc9jGEnXJTuZsmpmEEjZjL2Ybf3zhnuuDZ2TtTjx4jUynTyxJQX7",
  "key12": "4DNDPij5CmhbTekqFpjZt8bLo2Xp3PmuvitDs9TYHk1eFFBXqzEcLSxutXJ8Ro4pruGGwcvun2NoLVFfTBrshnGB",
  "key13": "3Hq2ZJfzfdZLKcYo115aPtgaGiYUMogMfYgx36pHCtwRRRKqcCK9MjmVPa288VTaucr48SYkCSUE8Ph7d9b5zuLD",
  "key14": "28K1whkNsESLhuaGFYkYStzA3xxPqyusRF45uyKQbHuW6muAjFhj5Rv3Pgxdw2jGQ83u6xhb13ADmks4UcwJ6HAq",
  "key15": "2HpBrYB4bMpGNFuuyipuMfpFgYEKAGbxyVzzqhXoipJZRoX4gDqKH1mLJToNXNGuCBZBXaUat8bmd4ixAioce1hU",
  "key16": "5qCPQawbffNW3b6C3hTXjQZ45MFrQphAXa4RRBKM8YfNtcWTZJazxjbfMbWNEaFMyFq97p2ntAvynStea2PqFSWj",
  "key17": "tuLKeD1Qt3FX8REqh953i8vk355BemymEocvnNWAvZQWnj2qXdQehBWNw9xiiuCdweaXYrTcG2tT97pC7biaE2w",
  "key18": "62WkBEYTnp2p3B2TLb2Xe8aWkxDNi6YhvCtTzUq2tfAjLQhyWULNQnJUaC13hvWqeUN3R32dpFAyQ3HVwDLXwb9y",
  "key19": "5XuYn8qyb2g2CsN7jrzWJte7g6jBjaYhafW2NdPpGwqPChThmpQJ3uGqXfJrHoG9n7G7ReYZZfwhnkXrebF9Ny3D",
  "key20": "PwAoagLvrkkHDCEYYPsJjuk7SC2KhK97BdWeCpXAsJZXwdBTeRUJtNCWQrRYxf94vUvGR4M2Wr4QfMA95LiwcDv",
  "key21": "4cYnDovZZdBg4cGq9Jxg1nVS2mzwnvc5ZRNMLudGibUGcaN6gQcyLF3S6NiQoboymeZhCvwKAUc7pCh1jKXikQC3",
  "key22": "UNu6jUAYFRbKZUtZzrnc1Ps1F3g4zQkBpW3ZtXxP6sxRKppoXvLHrUezXVVBs2azkqFQ34YNndXYCF6HSwKMGpH",
  "key23": "5KhSQEg4vSngPCd571JnvgS5weerHQgLMw9pZdiXGTvnN5G9UJYJdfvburhrcRSicTZ6cgWKDAbPgZNUC2x7cs2X",
  "key24": "4YgEHUVTcsdJBNSXrwkogw74P71dqcbZsNTda97mLgRJgsajmP8dmpagoRwp7UbsH2oRZNwSaebJyZUimHQkavap",
  "key25": "4kYEsq4EfD1EviGvoxF1RZeyCs4wYdmPG3mSFJzsqMRdXSHJUU4dTV9sZQduwnxHEdNKSCUzB6JN2c61SER1i3Yo",
  "key26": "3nYVLDniarUnu84VQKQshEc7u6gxmUVdEdnVgS4QSMBq1z6xFLRU9LKBnM4mSefxMb4Bdw5r6m8qWfMwZzvD8A6R",
  "key27": "4RoqQ1Q8QJSMx6TLmdk6jumFrwW5N6gvRKfeETNfAfvuvykcQjfAnofrxJAZ4pTCqCiMRErUgBEicjq3o2vVrSnk",
  "key28": "5tUeGphMLBkMuAAXiGLpKKHw1YBBntE5V52iiRCravZ8wWE4bNeUcQhqpBA6fEToqoLJ6Fw6GUbHHqyUGuKDHte5",
  "key29": "2auUCdhpJFKs1LrF1vt5ZYtNFr6qTo4bZfEENAsRa8wTd8DEGK5wBMpRXrWzNsUWHPcgtRikcihurqWFqBVZB5tP",
  "key30": "33NBnKtiR8XDpf67ZQukvpoJrKCnPrAiQKuDvKUqbHEkKm1eXD7dEbE83uNAiNTJhXqupGu5stXhvpx1cPzWQTJh",
  "key31": "5jVXSZQd2RGzZPQdTRk91Kd2GrNZizypGPm3puTqTVsnQk68eempgCtms2rFCEAJdjLLSn5i8ts4dG2HrmjxCAeR",
  "key32": "2ZX62C1Zb3niJ4VNkuuRYHv5Q1jyVL1EvdhM1WTJZ8s1CxxryuS5JJvHq6vQhrGy4KdJAf5EoqshLfJ2Dq6yFrFg",
  "key33": "3mh9hH4aL41ypRzuob8oBA3J5EmESrMrwzXdekVZM4VQjr89vgPqNH4BdxMMirPkHffL9AX9tcPdUBFprsVB51ct",
  "key34": "4gDmk5a32fXS9GK2gPLXtUXbbprCJg99vjX52fuLndzqqxrg4DgdhfWEKw4fkxJCTBw9dwCETSPWTDjoYM794SPq",
  "key35": "43WbBLs7o6GwHiY3jBY8bqaaJ388Rxk7zuCsmv1u8g3WBvRjAzwFVhKT65vFPCCa5RcywMBQPhqgVWpN7PU8hKMk",
  "key36": "4Psj3kYFLtpj3ARaGAj7iakUpXXEQdWemoVLLxDKCxjNnKH5TARhihC4z2xcfF5RQjHpKfWbV8WzQ1zFFAduoHWP",
  "key37": "3gXAPsUymbyZGtMCeW5Tc1km6przkt28DWSbESFcqwUQqDpwoYPbWoKFPkrwHow3qGJKSSt4XyNb9d66APCQP5tg",
  "key38": "6iNXwjDfiT4ggvy7T21oMdc2eKV6aEB1LEVW1Yzapz66USdLUDe1cLP88stGmUt4UHgq7xHuQUdBnvMmbCRuDb6",
  "key39": "3ujHwwZzSRbAMnfQqVECFuVCSZYH38swkSxvW3xcxZsVk4RjuzEUTYGJHGT5VTibtPFUAH8PkkNPUxLwfTuEdojQ",
  "key40": "2RoRndciQP5LrpNGkYGLGtKSHQdAdfj1YUWeymWvtR4zq84azet3QKxVwBHQyzJfwDEp6XfyfLmHJtTfRLvYvJZ1",
  "key41": "268EpbYQmWgkdJA2c86hFHzXXgKzxkR4BsfiUwAUmSiaqWrffQwGP63duwzkUniTVxs4kg9RwGf5Fkpm3UMdQr4d",
  "key42": "3V2cWwQbRbxkDZn4WW14hwVhC466EweBYPcF4nuFDUq7hVDx4A53MwNTLVthMXM8bx7K288xudQT6GxhzWoNu9VC",
  "key43": "2ehFY6eqokwVH68M8dj2HPidurheW68953BoTMSMqXLZERVy7CWQmNs8H5RogbK79JhCs1qF5gPkmnYMkbyR39Uq",
  "key44": "thZrfrxmJPVHdQvJw5MCaY9LL8WqHvgrMvqz7nkoFxPeTfz9PKLdBUZaPwojuM7BqYJKf5gzLhLcWvZMYG2ap1d",
  "key45": "4oPz1Qk7Y8AccVuVzgXkJc5mC1gAYxnw4dBhUPe8EAcFZBjHfJpfmcxp1WrQkxYhsZx1mcs37tkcuNqKqAkHkjff"
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
