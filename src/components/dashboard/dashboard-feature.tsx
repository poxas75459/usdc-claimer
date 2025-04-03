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
    "47PJWMcRE2BwFQFL12CdXT5sF2jMHMoD72p6JAM81GmJyXmUyyJfysHWCPgQJ48KQyDtWCSHDNBmuE3fsL89Srcz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KWSnfzqREh6EUt8DVyag2f6XgTwTmbuJJGkfTvc7MpTB83SpyUGs5sVAp7FYuXxdCc7uE8T3dYfxokepJtTksHb",
  "key1": "ezExXEApLm2qwu7yUFMtoyNSGeDE7aSLMsXYRzLzK6hwDPy3v2mjn5K44M27wH1ZzAyzzQgSsyYcXyZVffhL5sg",
  "key2": "5bbkEUkBr4ZFw8dKTeCrdqRvwgCFfPfBJNDen6kJvdM9n1GsTKYG7D16YWM43H5eP95znfBE988QmJUdxJXHvfGs",
  "key3": "2ne5friMJXZFJQUKszd9LVyaPvmKxiXngwfVv7FZvkaRxA8yBJW7mwiux9ksTLimdJoKB3KyhwvhwpxdXEd7wvAJ",
  "key4": "2X97EdDRutWYaMVxKxJgZ1GwYKtXKW4bkkzFdjo4Bqeyfj6RSkTsL23LbTR35aNHWYEVDztjYs3UhD4zTPF1jt3J",
  "key5": "2jPDbs2v2gXa7NcKUXAVdmoz4aqfDs56AiFveHxaf6nfQ4YQYXPUZ69puSr6o5QPdB9BUnHSXgagXaMWoac5f4J6",
  "key6": "5Q7nBYYBwWNSuQBDYPNChy8N2V5dmD6dHsTYpyn679CygfGQjvg4mgUQinc9cvVMhF4MbePLZ9smy3do8qPoaJ53",
  "key7": "3YGmZDro1BW6JGtsPQzCFUZVJ7CPzS1iU1F83PXCtu3z3FGgYqNJZqZNBdKsvxv7QWKYLHXQCNc9gEapvNEeid3M",
  "key8": "3PLxQxYkgHPU77CR3Vut9oGoJFpB2JR6bjA67GdoUpg37ssKXJWxgXBsjaFrHHchuSDLGK5j9rphzF4xVDWvWNre",
  "key9": "DYADNhAxLsU9okHbnMMGSsLrkZzvsofaDrtvQSK1QwCL5nUMk8F2cqp5Uo6WCywUGdquu65jwZUu9kiShqDZFiN",
  "key10": "3p4sdcujDYMD9rxYtZAMFjpM3fCgDnUgAfs7rKkSfkEtKXtqGHxcwofjSfnHcKJu9rqvhK2W4Duq3RMMEDV6HS7X",
  "key11": "37VUzpBcCrya3g1tZPe7Ujr4U4842VYzMThtVC1xSTpmX8hDGyHntWjDa3JvFa7BrXoS5Pyfa4KwpdT69iznnvbk",
  "key12": "dSjRvrzbbFyaMnEF9zDWfCQguzfiHeuzXjj1mxqSDDu23UrhXJJxmRyxUW3EoccqSsRB4K5qc9qwRQRfmo5RuFu",
  "key13": "47cHrnmS2ZEmkaW6kVvAm22gfjgptnGUbhFeBap4MsBBRDUPH9pvnEX7bXQttPWTVHv8gbjMhLrohRX1jyBVee2S",
  "key14": "3CtVjDoLwFTGYupHBHpaXfxknFR1m1GHeMD7FgR7ogkegjqKCdCGBr9k1S45Tqd5x6iGDZYAEJdQ1baf3ecqoaKC",
  "key15": "4yabNuFXxc8tr2BrjEUupFFBpG5nFGoGDx7iqSLy98QNQgdWrmhrcfjRjNAqAKJzK55fdMWdwbJntTcz66bjWice",
  "key16": "HGw3wVCiCqRgWG1sHo8rn9FBhWpoqWBCh6jYPwWgwPnXWPEDorKGD4n8sV4zUavZBjcMdA3GgBdGP6v8FnCQ6op",
  "key17": "5kVV4RANivpCqAcjjeaUAaWnPJAVge47RGVyWeBnxo6Pq6TbP1niwAhYURfa9at3SvECtVL3Mpv6fHQeQ2FCo3wn",
  "key18": "39hyhPEgViWVGUcDeugG6QqN2jsgVfTPCUbAcuKcTBcCTcqhk2Mz379WUNiEpR2Ubpa4WSBPfU8QaeYv8f428bWi",
  "key19": "31tx96SJ8PrqsAXeH8Eh2vbwJQf9ff2vwKt9zsNwBBuSSoWij2ec5pwwFWjZpaLzVen965PZHpRVTtp4Pc4tTn9f",
  "key20": "4KaKoDFvVUxJHzCmiqZCaF8DwQC3bbHcSuqsQnrSKVhPccZn1bjvSs97V2y1vNkjzXqwZodrm3rzQECHUkM2p2Rr",
  "key21": "kBtwWCEEAHojoQttL7LhrS36hgfsXfMDDmqkfSM5AhQa9a3S79njVErWuZ4WymwtEduZgz8dN5UzDybh5x5uLrB",
  "key22": "5nxdMnGtT6Mp7PzxWhdiViJF8shuwBFSQyo9VvcEyUgfKndbqhnsD5ENv7BwbHVdKXB5oResdqdrVS8H4guhsv9r",
  "key23": "25BxNKxzEhC7nKp883v5rwCpZUwHQmJn8RAtxvNfZtAAA2WYhCRXGgHNKiHvsD5b3EwrAqF2eHKGiQwf6Ws8gwxC",
  "key24": "21K18zG6sfNE2DnkKqaYd59aYqk69Qq64cucRgyLvJDPMGd3ZhDjuX4QgjoSd63G91AWpkzVSrqk6F2R6zu6cG5m",
  "key25": "2dPjvab1LKH7pGWRn75gusGUZfhn2j6d1QVkG9QQbv7HoCqJsgtHGA21cYmCd5DphEdyZRaa2Xjm1T5aHtJdFN7b",
  "key26": "oQ4JSoj7m9F5BApcnbwNCRuaxRGaZvoY42RLSGRRU4XRXwHwo8BYzQySbDmkcdsN49hjHyJMTF9c5cAM3iiCSZV",
  "key27": "2doTbjtjsFq77TLsRe9pujvMb8f1E8dTEeLLKxL1CSyHV1dBLiAQsiyLuZdAj3egQY4oqiUVq8fetTGKFM1XNyBv",
  "key28": "5suHytJD3NZZAyAoXhthn7zNanm4JrJ7ewr4ML25rv5wWGKsbUBjR8KTfkU1rggq7rF2njsPjDwWw1wrEKcPeSQU",
  "key29": "2H8Fzq4e7xN1Hjbrpxmprxe9isRjn3VeJ1ocwyWknQ1qz9QqtFmuhq2mmKGjyDLEAh4ifzGHvhHcaXDUm4yAPeL1",
  "key30": "5QGqnjp4grixz9E4oJ8wfohpK4cGa7QptrSCQ1uRQuyFehwTYeAtRcT5zgdGUyApACbChsV6curVs1nYNjjRTo8D",
  "key31": "5EL5tpDaykWx8GuAyN6nR5J2tzhawCKjRpmdWCbCrkEppkFmFjQmeAQ9KBrpjvEK2KzBqbdYMAzWpL9j2j87G9g8",
  "key32": "cZ9ZL1BuLDEkmn5XmaRfTUKS13W3rUzkUdmVkhRwBNkQ3P2nqN8NUwxstXzgkFpqLev2AHUWug5nyT1R1c7opWF",
  "key33": "5mAQdKivMj8MQdDYvnDNPmEpfk5woH363JuEn3CmL6EKVZgPAp5iggUJvtW48dVWtC3hV71J1NRF1iKJsaKBnuqA",
  "key34": "2NpgjaDxBuBLgoVNNTQWtELKEuHi6mxokR1vKo5vVDZoC5wvGHQTDwqxVZEmP8pagsqynCc8HgdKgzuVHMvL1gy9",
  "key35": "59bmB2Ku4ux8hGGnsubN1NVw3FKxo5CsqLGQsiG3mKU7GGG38iNXYaawXvzTkVHbZ1acUjhSbWwga2AswQUJpdB7",
  "key36": "2pFX8E4g4yCEi6W5Qqs991E1qXz5eKLr4XFaSVW8NUJwcbqS38tvMjxpXZDGUwPWP9S1DHbMTZMVQGTns365zfUj",
  "key37": "4MueoU2nxvUp5PEVu4WJFdsfUZHXrUtFh8fLLNPX8bojEx7ZATk7YBhBQAF6uzuknjjTgGNwWuwz9Hm53v2dwP9u",
  "key38": "jgwVZvYjVXJ1XAVM8NdmUh5Dj8uPPaFmsjfishRuAdFEjpcAJB3HDW9PogTmVw26TgqXfMV2wCA1aUraJiHAjiK",
  "key39": "LGDJww1tj4u1rzXuEuKFGcMBjSooKJV2Whaoh63aiQDe2UrRfnf5rGurfnQQc4VL3VgZz9C3z6mogEBV5CSXVVD",
  "key40": "2VyNWqLYp7KQkCjwVoBHgckGjrrRqdRjVGCYzkTrEF4MEabeFKs6madxj6a5aPuNqrkGD8qyLCaec1MocuDWCFR5",
  "key41": "pXEBW6ceDdFy1BXcVgAugkSvcMmoqnyfW1hwbCjjcaVZ7z2fDgFm9BhTNfsCKe4cDSLvNfPhTrxf2W88YpLUcuJ",
  "key42": "3RijsJHQm8MQZwQuU5wPADeKXYYHqXjmkYQm5BdR1WujcfX2hFm8cBSttWACigZnY6eGdAUyuLp7HtbdWFhHAGQp",
  "key43": "4iNrBCx7ZYgLji6GQDWrYSyuSHyhYU9mPV2Jd2MH6VdPZmkKAD9yiN4bBdTvoSSdRdzbnr59DsLKizkVXmSvh6ri",
  "key44": "48rvqbMr8GCXYjAjzZidZHe66Vh1ubzCmVC5ixx3YFfNEvo1WqwbxxxnozcdieZ8zjQuAcCW77qXgcccuCs7j6Tg",
  "key45": "5jTGPtfHfdUgvxnT72YrGAAJka6z5Xk2x9kcsAkrGHL6by3Zr78T7KiEi3YMjpyrPJS6xuwe5PQTihZjdoaXttyH",
  "key46": "36FD3Uji8zbcexSwSrgD1XGUHT3GM3hvgKNyYNobYB7Gm274en7DVXHsAybuemGF2YZGBF9659hLuS1N7g9UPFyu",
  "key47": "3mAQJ2R9KU17SSYr1Mg8FxDKFj3LdKTkTqiqsQXqRik8epMchcicQLLhKSgDNa16kFA2s1v67TeBvzE3iSgswA99",
  "key48": "2RfEbnhsizgGHaMmkANRHkPBtPraTk42aMTjzfpWUhDkt6qzZqVbJ8uLX9voP3dCFFrSgrMUe2VnufNQqTa4rccY"
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
