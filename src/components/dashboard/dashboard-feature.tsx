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
    "4yAmpvAWSr7pJLrENSjvvvmbpc5tBJzD41cobuTKWD94i37cpR587NJDHGq5uk4cEBdiY89axoPoCgZr2cq4c4nm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jf4t3S97EcYHvPAoDgrXPfaGSwaHuHqiP9yQGyELy7mF7upGz7JcPTpUF7q7zAF78uaVqBpweWhF29o4WDg75Cg",
  "key1": "5xYTtoCvfPWcT8ncws74HkzuPQ9AG16TvMThAy1QUXyjimxRmkR5VvxoTzF6gPf5D1YRsoPuSrmkod1m7CCMDrH2",
  "key2": "26NfgtjHcSP3Uuw69dmoz3gmFuWyHFGG74pMkHhKPN5G32dB5Ay7ic5qGb4ZDnYQKwswQYuUCzM7KkL1XCCpNrBA",
  "key3": "2zCvVHBEZLdnugHwSy8jzNwMm7DHbsFS3kriEFn8wzHdXtovxyaGxpYyTxTfKJS7NSwsfegMnHpUa7rJfUEDwWaX",
  "key4": "52KvibFzHKQb7c6Axj2DB8DTZbidKfG77purrpiVq7Zj6Hc2USKeR8FPa9mccuhcXRGUsm9iFFDCefy5Yhi4EMZ6",
  "key5": "TxA74ADLbDWeLPUcRq7xEh4dQNMtM2yWxHSSsbkiB4suUyzBRujqJ7kBtApDAruvPYgj4sJphqncrQS1sz4T9WC",
  "key6": "61GPAApUsRU64dhvdFsJs6LaRaf7Y7e3JS1MVwvmcqgQzUzmqCz8WdcgALbPEPqiCt8FAgbxkSFvyQoiihS62BJU",
  "key7": "5VHQfYQ5eqjeDiELt8AUfuAccTp2rFUYzBpHwHqjYpipFgnRyU4ei4NUHd6QSuhJdJ9XFBB8xgHZdPcAzctWLTBH",
  "key8": "3Epm3MgKJtnh9Ye6Asxo7LuHbospAz8USPBJwFzBNVwq3uBa6d415BCddBgjEKDyvL2QXjUBx4reXXNoia6dyZzA",
  "key9": "4xei263GYVxYX7X3fxHWxA43GnuG24KDKzRbJHpFwj48DtHcAYQgAJGF5ZzKzz5HmmkFJro1xSMMHuPLDdmyJ2Uq",
  "key10": "2h4qc48bwuCACiTe886QjHjxaoa5dxjoCTALVZYhPqhEVHn3VTeg3wvzhmydsKTTbsnfL2rBMe9AaUjyP2WgYo53",
  "key11": "5Y8vETvGjhND8vrVb7iCCgR6qd2mjfW9XMNrBrLEoVU1f5oAbpP9tF1DfFmpSntsFacoh7gigDUUED5M29uQPdA1",
  "key12": "5d4tNq5iiEGaDuBo1neyHezJniHu9YdzFMS1thzK441eoRTX7fLsqntgNgv3ekpgEBd9tCyfJfgB5zVA3BjjBpKR",
  "key13": "4H1oosPW231W1qoSifZxrHzgWiNDeWnYZJZaH93kXLPHZM7sYMWsWFefutu4oamtWdgiB94Z1LHd7r44yephJFNK",
  "key14": "4qKf8VA6dC6VF9DQ12hXTchPZ8BrtmszPRup9noPZuqZZEQhNznGd4sFdYUvsGS2VK9hjWb7KCn2Q66ZXfNmfyVX",
  "key15": "5YzWyhgzjBYVXciqk7pNUnvRAbL68ba7BjhvjPkhGzPhSoogNaJRymgLnbJe1947pdhWrnH1YkhGjxEQg15uNnWL",
  "key16": "2AfN2o5TBCVhdHkLGzSs1Z6UYwp2CZvEJHBGhMx3MbMX9cJRSZuVRLYWcFXejJ8q9JKtdpSBgCAzDn7RK9mR1Qp7",
  "key17": "5dkZyzd9xSL9nYMkDof9kUwcfwL6j6Vkdetadk8tdkcJ6WkQV5u1nfeZt4aYBHoKRYUStiuSuU9StpRhWoVMeBoD",
  "key18": "44a9kXnzUyvfUv964Lg4FiEMkebimcLrkttR5FyZsyryf8WJrAVdXsJJRCCj8EbC2PgMBCUANKkdUUZC1Q2FKUD6",
  "key19": "P2w9k3T7BKvXbaRauvWHfLradStANYUvyfpHZNe6fKNUt6VgYeJZX36MQiGcFUrNHhjGRdFrRBCaiRQB1vzbFiy",
  "key20": "3PGaweft4m7HCtyaRsjvsuFLZH5LEc2KFtkWambbAMrBP27WXyjFgG7Ks8Uh1XwPsXsLZN8eqeCREN6jnHJyg1u6",
  "key21": "58Mj7LTYac9DasgGgSmYaU5JA1UoRpi8AkAXrvb6X5tSgAnazmVRyrGfSS4ybr8S8UGG2rtJturR3TtWGQ6ckBJF",
  "key22": "5LuoMYy3wgUcZUu7yc9q3JvMbTRBR4wVWf8Ko2Jkm3iVPGggrqAuuKVMRgMtzR3B6xf1B7zuHNcJ77dGMgBw9nGg",
  "key23": "2uJbUFvzPedBeWHvMzN83wbptA8j289ccUcYERkm9BF7K2TqCL1x4CqizKNAirMXQqJLVKK7H3pMom47XTELmLFA",
  "key24": "4hw8i9yRbBnLb9dPkCQafJvD4RpGgokxQGbP3hUjWjJQ4dHLmHJPK8LgGqHHToSvhMsuySzwviue5cFfbLpy64Ar",
  "key25": "2N4qqb5rJCa4GJkTje1bwzAeZYu7eYQ2zSqxHF9Eys7a5JRmeuXUWAASbyQbtZGb5hiczDMDFsDvv3PDDa1GSZgR",
  "key26": "3VXbvof5RwgrDKyud8bvtohLG7QekbpLtGfMxUHm1fnXX9yU9GvZK94LTqQj34RU7wJvKj7ZoPvUqvA8gwogMcLP",
  "key27": "4KrGMHghtqFVnxbvJs5nbcEMvq8igf4cwrD8UgXvoDT5FR4ywKTRQgfwFNVw4nD6vq3cK7G8tYoBPF8GrAfFY7A1",
  "key28": "2YbvFFGX6LZFPmB4pXCa2xQm1Q1xDLyysmV6giA3eRJpVYSKG6jum1TAuACkLETb3uwB46zDD68QmWF7sKojUJuT",
  "key29": "LPgfZuFAVQHws2BAdL1S9sf472WfJbr8SQfoQSzSfvqhbtwakMXRZ3EdemfSz9F15EwikFm1FzP1dKts49D1jLg",
  "key30": "4tfGNEJAZkRQSwDpDxvZYW7sB9LkonPvxohRT9sax4ZtuX1ZB4k2Ks6UgU21eiuzbeq15JaHQjouovC8gDKfUMdL",
  "key31": "4igAexSQV1EFUwVxNScj1uuefij9yDN2LSkCz6TxcZQAY7ictdtYo4e2RxhfRmnPDnnXkMua1bM6XkNBtQcZM54e",
  "key32": "4pj9SLudAGXPDMNFevAaXVaLVYa4fDXScSKcp3vNz4VF3982ZmZ6Q1px8aBxMoXZXEdM7RUEAtVaBEjQz9A4xsVq",
  "key33": "4CA5aBHryW7Jh43fKV7H5gmxQFnhq634bzQHGLHYd6MEk5bEggXuwMmf86mRuorv3V5y2zKNJnwAtGg35xwqbExR",
  "key34": "3kEKSYHwB99Evb6dMNGDpDVFPmaEfoT4beAUX336jLfm525sb59BRFzz7CWAACXRDvrTR41kTx3Xd6iqKLr4GwFE",
  "key35": "4gUohh6R2gRmPvJ7jnU5wLpjbMoWa2AFw2tNurEfS1VWufAD4uRr5uyxpUcpM1ygHSstKBpTaQtuF49ktkKdTYb3",
  "key36": "5Rm7dg4Dd3VzRKuoyTobRPdWMzb2W6rDeRTN6PdSmmYkMhv4u4CSnQv7YjPUXpvQhMQ7UZ6zcLNtbEs3Jcn98WCv",
  "key37": "67cjAokMf9EvmQHSsk6KanWRCSY9XEsMvnE9aJMpxMyNazDiDE6ksgGYfasmDyaYZdgkEtswPajUKANE11tj2Qk6",
  "key38": "5nMSX9iyLxfmq8qqS1g9KPHpFr4WehYrnyLZNLitzFgkRLa5TURxkyGu27Qeicb6x2PoihjDv8QjgZckUVBRBwjk",
  "key39": "59RkCgzbJ72LzVcdVoy48P6P18U1QJJcFk5esU6i5t9odezRX3aJg2jNQeMmErcXbgQ63Kk8wW3mJWYrtCNJ1ooM",
  "key40": "5zJx7MHqsG427EvU7VZNDJJnxhmRdQRuRhLw8CzCKgXbAYFVhahLoHihdxxdVnPi55LUerBsxBf2N95uSNtQjEgr",
  "key41": "2MrPt5FMg3n9V2wmzjvNhssVgSYbK2kvFtBQDSLvBoPDEz8ogMWujvoVYspsqSnN6FbdajELEHMA3JgHf6JwyPYe",
  "key42": "2oAhdBwCEkQ5Asz6t2CHQNKQQaS2jonPTRH2MJm6bpYbEgjactcspv6H2wwaw2xZpPMd9VpQmFiFriLFbM3gmihP",
  "key43": "4gjVFkMjv9U8Y2neSeXHPjXmTuwZNHwdqo1zP6FFBLVdC98MwhEaxak7pdUGoCCmHmJ3XTnJZXWhzxqs72RXu9BM",
  "key44": "JYwSeqtKYp9oiXwdk6GompVgeNRfW8KrjPVBRJ6KKX182CRBHedSVdnKpqiUEhZobtx2gK8J7wRcgYpvLnkzbTS",
  "key45": "2EsvMgDErCvpxtURdP1hdBQmApxJeAVDBCvFs58gw2zQT7Fmgi2ZqTsrgfDCpRyXGabsQLiH44Whs7aXyhDygrmU",
  "key46": "44xJ4bdF4LDSZtAvmJRA5XKo9rjdLVWppNFgLp8Hc8FZr3Tb4UzoBpG32F8XSpH3yeyE8V66wgs8D1nPBNHCkzcP",
  "key47": "aKmchLSQpBXK7gudRdgJGk53Fv8ZZ6tbQQJag6Phi5XisiJWhbzwDYFC4JTXtg3mbTUryQDahHkA2BXy5mEwtV2"
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
