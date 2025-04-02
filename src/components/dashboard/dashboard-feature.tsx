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
    "48Kcr5w6ztrXuzqqPfcKREYeq7jYEkUbDWV68ES8DBspxhMPF6iz53udqr9NuSf4s4MFGejDYitqnJ54fc1nY5Nd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VoXdA6SJxt6chiVC8uDg7TwokQBpKJvUqCxGk9t4yd2o8NiRYkghJMnS1Dg2BgiGidtMbrNwUy7MYRGK7uG4ofr",
  "key1": "4Z2wZNsrYZMN1VA2qNYBAFg4pGhf6U68hwyqbCxiRekD76tEfMoQ3F8X6q5q9QWSpq6FDvepzLJ8rcf6ZhmjaiKR",
  "key2": "2bBhPcWH65epjVLFZVjS34pZkbusA2maFDP1ZGVbEESk9WFSfRSgYLhnYyjzXFAXNM4A97WRXyejvSz5M1uumBJN",
  "key3": "65bs2Dyes94ZiLeMTjgTeCwA1cjYSwqwBBepnCLUQN3eq1JoDErL7MWgXa99HJK6HkqZxYpm3m6wgVrgTaMmAeap",
  "key4": "2KpAqwCUZYwqE6sgvuG3UHJeRGrUF2ekXpGkE65QqaEaCoJZc4KCV3Ca5DyaT5HJqtiNzDB8cMcpfMhM761QhYky",
  "key5": "5aVyKtAujQpzP8nmPAA5FRUWevUPLDexL5ATA7hrCuQNqFjPxrg55qQPvQU6VpyBVd3wkkypQx7Y1Mxwdrr8YjtJ",
  "key6": "2pW1rCDwNt7Kxf4h4SQQJddVredRvmKepTsvvrq43D4X7QLRRuPUjybCXTxBDRJdt5ap6wC9yuecyfP9w73fJqAG",
  "key7": "kYK8c7Wde1nMwJmPH243iZBk75adGwUYubmFFcyyrTtfusHSs4JtXFxTkyw5PbaekFjHVCZDTUHtjGCgKsgz6ih",
  "key8": "58tbawRTFM2URGtFgvfskBbbeQTFRUHhBLcvasgSoaaUftPmiHYBV12UEq1WMZoDm998Ko2Wsocwokk3Bj84G7Wa",
  "key9": "58hGDdZF6wNkH7rSKjQRdKZr6bByJLdFjkzsRA1FaKTxv8ziZjgw7peJj7dcgPrXrTrAMetWWxhwTu1EhyLis6St",
  "key10": "F2pc3EGVNi4m3aHx3AuavsuTxCNwTrWP5RmyMD1Juhv2DLNA8hZmb5Y5FE81Uaz1YwgVRah2A5PuvZpqQjvuMk2",
  "key11": "5aXbuMp6avbaxvS2UQCDCrnrMVRHMepyCJiwU6JSPQXYvtpTjKB18Fw3cCYMVGYhRB7JZAvtH8yGbDvqdUxi94tU",
  "key12": "2afZsufWYAamH4FduFErqHm9XCWMkvS9QZtvSHPFYM1iWNVPqeqvuVhtZSBTExsrjJbY8zPQtSNMAN8YuJWvsv5w",
  "key13": "z8oT1JVmqbywGVtveEsVMKAgj7HVQ6ktYqqB9hRpmYwYNjdxA7iQRJKnqooHWdZQ9tc32iHxkLYrbguGhqmDjag",
  "key14": "5KcQEE1ZusKH387RWZC869JQiThuXBnNYBiyDR7Sma8x9Y4JnFGsTpEWiPRvYm2Yxa1MfmZSghP5wcro3Gusvzut",
  "key15": "55x4SubeXBTXudoVdFTo4GvAkTqRCKSCac76gpgSvmafhpfPPffBMbjr6txVX1v2CUyYApksF5hdsGiNLmY7DPWA",
  "key16": "3JWcHBzxg92guj1BWED2T8PDVh8YtmtpsofDTgRrHQbQQutpbykLYy1YRAjXXzvYmNDj6Az2nESMmCuBBVYdmMzA",
  "key17": "39tCxkA8L3eUdkLVkvvnUCpFJUnS1jvLkrL1hS5NkEkffP3hWRjDX9UQ1aAM936qqdrYjTkoU4tCAF35PTcSegv9",
  "key18": "aBiYGDJp1dU5oSVps9Zje5Vbeb7mUSxPpjW2nSSLnhyEVVYMbkShb4kPn5sS4rbBLFyr5SeoHDoJYXErxejB7oR",
  "key19": "4F2toZahTXMF2g9jXtTZ51ujy9JGTbadTN6MUBoGf9KWAPL41TBWpCbE4mCXmv4MnYfsfWYxQoPSMPec7uVFXJMc",
  "key20": "5D6DutQDVsBkdWGtKjqePb5UdYGRt7J1Xaz1qDimGiqBHrGPDKVLnRq6gXhhVec63QGm4UXo4SiBPr8w5F6gDQxW",
  "key21": "5nSm5BphzYnN7uFch7AKgqDQmbSJvJDocXh6ygJG8dpkmNBWHRGdBYyQFo5rWFytt6usrWqMF9dEbS7R9fbTefpx",
  "key22": "5BxGx8YxHDYvsqLdLEmyug2LqTwirC2pizDUnhxdefQBLsTgpNnqatC3dNA9B8gxffgATosBBAiQnWTtSYC81NL",
  "key23": "4agLeH6McgehLxWNTW9frTTpLBCv3t3keMqmnFcZ5jNCYyoCxkZVaTSAKdbGQufKqzAVjtJuXkoHsrgCh1S22uMD",
  "key24": "4kKwY9k2Fi8fLQdZr4Y93rwvyPBWfgS5jQX7vMPP8KwcT3jvTynfvncL8r8BtnN5txvAxmdz8L8iu5wiP6skQ9uV",
  "key25": "5wJuCdA29QnGx63vfaJJ8riXdq3qWGQ4oRCfuSjG2kHQicnLjRwS61nxZNbPZXuwRjda8W3sJdAiUzb43RV7MZQZ",
  "key26": "3UCkNj6haVsns2ckKCjeCfcDqL4RBWPuVqFUbUs9Ht7i2dQtouN9y7RGqgUZNLrkq3eqWeskxXi4FL79ioS9ni6n",
  "key27": "2wLhYMRVfQK2R6rHFyW89cwk3EqPL2FXStuj2iLZsZU9e83JwWNJiRonM1sz2BUDnNARgLBEmPcXTgqY5SL442ub",
  "key28": "5MhbAybgHxfPZ17BRLGZZ76G8ooHqG3ir78GuQ3bD4MHGyeyYG4UsJt9CkYBKtMkX1muwVtJgW3gYkTeQsEnbWdj",
  "key29": "2r6aipw8mxvrDJ9eLiLpeK2xbLTkK5ZGDTBXJh2suXspzGZ1tRSRrMBw2Ee5EJzNzB1fn5qnmT6v1aix9hx4xz68",
  "key30": "298jYDEdRn4PfyK2UGF2rL7kFXhtCCeZjnz8DoWsF2ykzxX354xgsKk9ZjEQ9ktzCx9DuCUN9fZuULfgQF2uSkUx",
  "key31": "2SKeGgv1uef2e13uHGhBapm3Y6VJujv3XdyBNUfthE5vKMuN2ojCVngj5SZMWqJtkvK2u637vVKQjj1PPAdadskR",
  "key32": "3CapCqrdL22ZLSANaGiiX514HXRrJMdtESvLfPs5WVA2jT38hGfmYPGUtnFU2vD7AJFCkAHd9EG6EuCKdV2qMYZE",
  "key33": "2UZJNd7RYSkZifmPKkhtzr9AassTTH4kpUL259vSJAkZ8VEUawSd2Ymnt8y313bsayWSQzcg3jMMfgGDqLY3veqH",
  "key34": "3TBJcS3F8v9pEKqRbsFoJX44DnSLDAFSdkep1c2iJ2xEa5ZoZNfWWRR8YA4m51FYJBNf5Q4iWRNgM5mZSHxgqGos",
  "key35": "3s1hMcbvKfrjNy3KbV555sXMn2U8yXk4TVdjW3ikee76sySwgQrk8bNVcE9xPmTyxuVVxvqR2VCKz6Dzebn48ygR",
  "key36": "raqFf34d4cHW3WtXuqHvAcKdopaxdwcSZALZGuKiU4YNBHpr3ig6rqEHCv7KiAgYme1RobRdFRceUsKut4QpAAu",
  "key37": "3NvQRBsjQFmhdEjnRDXZJuVzcoJguqLZt8TaMMuAcTHs1CaG6rswr4pY3aA28DdxMQMTyLsb1T2pEkH8dNgVg45B"
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
