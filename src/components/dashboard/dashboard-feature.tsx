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
    "Cxu9mGZJaRGbNs4v98J2V1dQvTP1iGbSqSQZUnBD3EzDBCrcvicBdcHQe3ahaLBjfWf8gm7dwZTaR2KY1y8AjPB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fq6Zbu31Sgpjpizt9rWCCamvCtZiVwHP2tFw3e3i3wyzourcTCZvBnMYp8UuaUJbZY5Nr5hQoFPHAASTwugKbP",
  "key1": "5JrFJLyTsvKDJU3dPzMpju18ujaAp5vunh5oHBL1FAHgXc5aRFudgKAQHEn5GekxGz1Fb1wAVyBVMHDRfTMRK9c2",
  "key2": "5RovJKUhGNkKDtp47CfbpPx5xFGNgAM7h5kgDSWX8rPAWtMnmWL3QyR2xUNDaJKXg9rLa9iYKJNk9fxyVMRSvCsW",
  "key3": "3J3cRH9zNMNzouMmfjTUrnx9VBWnPaFH2K3c8YUbjLPfLXooHTPaf8u2SUq9xNogpAh3yYwmmNZtwQHMh6uuqnU6",
  "key4": "3gAcXBBfKapc3BWiXYBJLjVXj6aGPyk64DckYWNsqMtHM7sNsj7Qz3Rf37ez6hZfaGg7tfn2SrqdpFcfosEWW45T",
  "key5": "3kzNBem3JqTWwCGQGH4wJmW3VVR3bFoNjTe4SgCtNCAsTkZb11Nf23tKTToyQoUk3piDnvc7wRo9VrxRaCwxKmqW",
  "key6": "2Z6Ens9YpDH4j325ezaZhMPkgjCWiC1kokjD5n7V7jTsPpZN1J8gBVKPJGvCYrdLZAME3gj4B2h7uAcfZHgzURCf",
  "key7": "3Pr7gwaxJUpX1QH2hYcTTYSKYFURsmruZqVjHQgVAhw9bb8jns5VzWTyYSzqjmB2xkWtadSsumgLchDZTY72qZqZ",
  "key8": "3L412oy4GxpXQof3n72ewQjk9RBebwyeYoYcFLgfpDpPEaDAWDcTHPiiuq8vhuGyZA9kp57rXGL53rzPgF8bspKb",
  "key9": "6yU3hwoCwEEEguZEquMABvStB5e4NyNY9Ge962NJg2F6NKKsRbYaauurkDfTwfLiDGjsoA44e65pZRrCv7bJzTK",
  "key10": "4dsF2YYNWLdBaGu39MZmjMAcbFWeJJ2k6nUd2yHwnZo9mK4D4i7uwQ7QXRutWKjR6hnttNwjWfPeAkqaNmZNMi9G",
  "key11": "3B1KtXEmKx7iDPW1nc6b7om6qYPK3C3by3yRk7xhihNWNGyE8AneMbKf29tCN7Di3s5EDVttcXFMUWseK4Mkk6vv",
  "key12": "4sQ444tqmcuLva939x3AcTqwBmhd16QfQompEmWkXXjdbwwYjLVE62mPgpToowxe4qK2Gpa3beH1X1kDqoQNfDfu",
  "key13": "2nEHjNLpoE8VkXSCkDZywoRMBxEsMraBZNARXjfnKBwY7ib8Ewzy5SLoUJCUsitbWfwCuH6tYJ7A5pLHwXbzbaz5",
  "key14": "2g2oqj3Vyc5pg2tUMTfZxcpVorbeCXs9ED7SY1VshCD1Tzz6zyYtQy6U5BjM5Ch9sVeEomJnRWPzb2XbgWzd99m",
  "key15": "mimBP4xFmwTqnyhmwaabZaBqEgKDn3EkUxNEsHd4DroPCEjGnntotVA6c2LiQChKv9759VD8vVcGpPFgCT2k4dA",
  "key16": "3wDWsWKKDLJJWyyw8cf9E2dAQtBGKGFMG1v1RSx2wNEcgSSiM1FdFXMwK8xxTZ2A7aZyi63pqarZQuxYoE9WVj2v",
  "key17": "26dYrNb9xwTgwnKfrqd3cuFv2QFmubeBYd39t21nKQKf2V7YbjPJn1EG4q3jxBhYq6NYQ6xNB5T6v7RLh136t4gr",
  "key18": "5mnQQnJdp3UwjR9fU5eSQ6N6ep4CyuLimMPhw6PynFnHc88MKxM2RcBWGsxDBsd4TkwJL2XdfkwVuJGKCszXryX4",
  "key19": "3HfajJiWvG27EeAERjkzeyDQttYykuQSZ5vP86bFLXZrLwdbrJfkrnSaHztAoBSKFMF15QNXA2eSpRSKGPUvaGLW",
  "key20": "25uPefvhDjktreLsBr2BVbDUV79wmPxkFQdjFdzxG73Bo4qv9sCJtKWEBanig1FE8BY6y3RF4wJJ32CHY9QoGAH2",
  "key21": "4suVEWMxV28rpG1FNUj2rBkNjAVDMLAEvCGqbkgRiXTyvCxPTRcvvMcr2hugHjfab1kyk9GkQFjLgsRzc6Qecaqn",
  "key22": "4VXZjE8eiS6VFiQxVUjPrXTFuuBHu1DsTWrpkp5yDDBc2Zges4uNrKQar4V1Sc6JUiCLE1KVZzL71da7W9Pv8Qsk",
  "key23": "5pSFkJPkpsQQzNDU4bHsm5h4qQHbZ95LsZrf5QotxrKz5BQdFbeFJ7JWf3GFunTtpiKhTC7nyRgmWRoXJ6wQrwqZ",
  "key24": "4qqxLPtFb4aczAHG1P5qMBmwJ1wcYBseqxV9JTxyqBCjhvBHd7bkppWhvPdDQFMts2UM3LSYJFwipL16R7z1oY14",
  "key25": "4fWKXAZVfqcJpiB7ibkWFq2BeUeJCfjs4o4Sao2YRs2uLzo5hc1RW1bPfJc2xgipfLMFAqbNLox1RqFKZyvqtxhB",
  "key26": "b1Dmo2zsK6jTueg5638VA88yjtE8kYo5j9VDK1rdbSdGARP9R25TAB5CAAfdmRZBWX3cfJJuVh8BJa7oFonH5Gq",
  "key27": "4oNcxijREiZie8jqAARi6FtA29sr7sD48BKWzj5LXy2psF7tyBR8eLvbSCNEHU7jMZmqZg7QTYgid6WAoAXYA518",
  "key28": "4yQDn1hQ3zq8ac2XG2VMYx5tC9hGP8hrtMwJZQdof7KznuBs6XoiBcyYrkgrEaGJAijWYhbPjzeG4G6famp8Tt2Q",
  "key29": "6eU2JkMUKjK1A8tPnfdcuK6NUchMAyRfkwq5dsiRwedDU7s1zWzGkkL3NXSaxSkUEiFDkwoBKneTD3cBAe53L6x",
  "key30": "5juFsoxNfUYVFe7HRVoJSvQk79UeVqQPkXXFFVtrUqHuX3TSMtCitBf4te68wUsJhn2KYSh2nYrAvEoes8BDXu3G",
  "key31": "63UmUQsaBjGtjdTTVjPBCroHTDcnutXRPYsTAhaAwXYyx6y2wRGdL7n8RQkYWnxaBhryQxhcJ52YRHfjhCb1QWQj",
  "key32": "5ce3o38akzhsQmqcDkhhSZWtCtdbE17TTKPoSPXEWdtfCuCvB2k5rE3GcnbBnoy3us5r8ZLVLqSs4vFzCey4AqVK",
  "key33": "5tAN41SZCKnHNK31QK7KRps4rjP1HyN27KNvcQWfkhnNPb8gnDMposxaFDo235UqVAqfhWbmrueNguLtJNEUTLkX",
  "key34": "4kNVYHWgTN2VQntBruhtuUHxf51qSWBtAkq1YieSCt7PJLZLBJTzwSMoiVQLo7rX2s2BEx2kTze4FFBStndcKkdi",
  "key35": "591JK4iaWmUneffJ2ooEqE56z3V3mFU5ok6kwmayQDTfJ5Xcrge8yAHkxg8Stw54xL55oL9NWmPCewwkAz34aytN",
  "key36": "5ND1fZvA89W4yZwKnWxRHBZ8fZxUchRgtpdi4QqNiiT4WjFPy67MMtWGk78cQhMjDFgnRbagetMqmqBPHsso6ZZD",
  "key37": "3vYYHGRhB9ZUrj61h32nwNiGi6VzWyGADybyyzG6m9WmwdPSxjeW64siZbvto2mANZBVym3nxNEUpPkhXWikemuZ",
  "key38": "3dxwhpNWKoth6j6vYo7o8QXfKGNWd4RdPuVYE7gWyebMio1tqXEtghikRAtiHjLBXy7pw7rdXAAYaDpDdbqhv9Zs",
  "key39": "2KapcfWmVcRq5nd85bmU2e3yVknN33BZ5ncAfJzV5CJaXCnjqLC8T9mrEyEXrKeqUk6BBrxQyFc8cFbK2uBWV2sW",
  "key40": "4nVKSJ2ERXieYKmykgVkF9i6HTeZHZtLgoLSgYWiQ9eEwq1W8pbxEdNxes9FP2icYviZknvi8exbt8HDFJqUdhie",
  "key41": "3QnxEhh3a98kjf6t1ZdHwkfYbaKWzuY7FBH67qjSfSigbV5XsBodFThDK89dVB4JV7LiP1WJqPxvzXDG1xu5yDqz",
  "key42": "5qoT51A8M2UwmaBXJ4Z1LkqFhKsuJETCHQDa72dryCiWAXosssY3n1UBy5A5WZWd6jmtwAYAmEENXpR3Uq4hZMJe",
  "key43": "4e2V8NSqguMvYmDN7nZQdMAa4GYdw5VJtS6ffqtaAEdzi3bkjVTh2kjyA9SGpak3e8mYuiYtpk4FbQv3jG4KK3do",
  "key44": "yaXKfsz3K8DkVg5DKDUTnBDAqGut72HYrADt5L2MSx83pWHHrsLKsmrFt3JZrR4DfeSbJAu9zqmHRjPWerr5EcX",
  "key45": "2HSHzYKLHMEM25JCmhhnNT8z2LTPAtC5d3kEVh2p69KnPXGAKjcTNLdb4T9C8rGHDKZ7UtrTD2EK98dQTkd3YLee",
  "key46": "ftw6RxXtvioz7TECf7DZgaHaJUyN9S96D1N5braChkUqWUpRBqsKLAAobrHzSbHMYz7hytgttRuNS67TVWVPufA",
  "key47": "7h2DnvSPBexxR8deq1yjxrdn9FjpaNvpX1a3zeRy6Mo78G9CZHxk2jxanBzSKQ7DVZPte9i92Ap2pn2XNc96CWf",
  "key48": "2Uu82dgQkwcYCC4uze8Gj8QLBz2MrRhWFMtXbGsd3M4R7LBSLqskqDPMUfRgUkuyzxUEPDSn4gB6QoF6PUJMA3RZ",
  "key49": "saT9xNChfZMWhHHEw9WVZwAuMhFA4UegCohGbxhfTHD2UXK8VjQr3Dvc616PatLBXZB69XLyqZVKeCELykWhetD"
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
