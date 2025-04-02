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
    "5vfGRTerUUcWjgcJeWGFkC3Zab6EGfSagaChgoMwJE1nosqPfc3mP16XGCtNjeVDArHPYi7dMDMsSTGYFgwtqat9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rk7Nu3YLyaUrYRMAaGqXbqukHSQA6HfRrDSXarRRcGezq7SkLJGfWTBfAw8AVMwZ65CfdoUoKbSZ9yPnz2gFkLc",
  "key1": "SsESAMhg9hTXR88w1UTJSP8D3Rfun5H7cDbeCVCHUjoLjud3orXXqLzHPHYSHs8zhGC7NdNzDvKP5tuWm4yKqqL",
  "key2": "67XNdTaqTAvZmJnRDwkTciAsY8D3NvTDQ8ZMVkJNseXpgoKPNXCZqabJYFfS6NBj6pbew7Z9ipBFTGa4nGJCYaaB",
  "key3": "56VNMzsNscV6QCPNTWHkArnkh5pr9Tj6gJ8swmgR3uHvtpg7EBabiJseLwJ232sYxtLtgwxVT9GATKzoWnX8pQ3X",
  "key4": "x1UinbMaotKd748JDj2er2R2fGBbg8hE2MmLnf4F9PAuWjz3RWzuD6NzFUTtNruzTVn2p3UQqBsgvcYB7U4dP4M",
  "key5": "4YVzd1X9M6hXGn5n2RGgcVKbhHT8U89h1Ngdoe5z9se2vFHpC1W9o7B4j3BXNNxh23qtAfrvJ8MzNAXF9j9SN1Bb",
  "key6": "3rNdWbvYgwNvwkH9kvStpBnm4y7p9sN3sSXYhuSjk6vGuKiMPbq8nffkyVrHJkctdLDKdo4Aj4B5moD69hQuV9PC",
  "key7": "HpqyQkFoD2NAUjwqt1qCYFBNRqVdsRt7qiHgfdeN68eKVFDwpc7boDE4YQ6RG3C9B1wEN1PAP8tFgC5H5qpGbdc",
  "key8": "5Wipw4Ff9AUtjmUJbFYjWaFXFxQqBWn5FMPJaeNuR264Nw62HaKteLrtRsUsmfjuRwmxMiGGfar7qMcZifuuxJ26",
  "key9": "3JuPxxAn4ZEdrXAxagAR6QHTgAiFGXF5mFyPfDUfNswWUB5ddNYANrvDEZpGqt3Mk1j5qqxkzVu1p6oMQVymxrWo",
  "key10": "4JaDnZG11LdQSz6xaER8FoAZKS3y5DUtXS4osjKg71Vrai37cNKQXcyTvQaZWyKr2TXBUAsb3QDv3KwSK5oPmNer",
  "key11": "2u7CQJJ3dX22XG3fkGG5T3uLWekTQoe6Sv3jhzxq2ZGtf8n7uoneUwn8BwfDM9MMcrX7h2L3bvaDDwmwzA22ezBw",
  "key12": "5mJnap452czFiudwWBPHwus8fuLosNJ9hmFSqwpvLi6vsd1XqP7WFNHYZ1TJo9dTWLSbVqsDRa111hAkCie5hcw6",
  "key13": "3wmd7Lcya8695muvAcfVJeJ57oMxf3uG8CENkkKETb9NAa1iM6xU8MCsv2x3qg65cAw2x4j4632gFSXd1jRpVxUN",
  "key14": "4DVq9KqtvsibBAPfozP2ry3pG5fdffGr27exFuiDqTprfKZBb5hje1b9jjnQ3DTDETuajWfs1HRBfQEZ5tCgNEfH",
  "key15": "2iD7ZvsnA47FDS4y78qRbTpj8zqMJhMCeDWJMdLusQTzNaac6msHjQtz1dX9zsQDaZiRVJNHbTX6t5fS4nyUy7so",
  "key16": "2pPhDUr3akmwyW7SDtnCujcN1jF35rH7oNddmzsoi89wtqXeWhR4RFuMfox62Xxorz64Qy2FwwyCh57TB42jVv3Y",
  "key17": "41twUiCa73ZVcscocfBHbpvm5Pf4qeXYmTdadNDsaBPqDMix2vRuwaLpkjoRkkqdJ1dXx8y7axCi2ctWuAN2RgRP",
  "key18": "5hqAQWeusaognHmCQTTKG3jxH4aWH9xmX6zrPc4QzYxExQsdv2Y2Mym4vqMWKtdsQXbkRUEUPV7CRwgqXfqUxmAu",
  "key19": "2UvJDpUcAffXsWjvQa1aQqmiDdGqzCsn4TZQxyePWDG4zVoYubThiwECRedLZ5zawhkuo5hktvUCYWcipTSnMZDp",
  "key20": "3iodaxdPSYzMsHEWCDUfmr8EMRktiEnMNhp1xpEBMQyAgCtDZsVvCWP11Udf8fHFjzepRdmedhScVz3XzqQaH6Q1",
  "key21": "4mV9hj2RGKoRrRRLCK32SN6Er8yWD3wFzcsP2txjhjbZYzNp4QmkMppJoNHHvqdjEgj7zBcKtGBp1ETpaR61M19j",
  "key22": "3rvPmBJmZadnaXLgKUY4t7VQ3FU4657KBWv3EzcdJEnDrGa2H1iPKKRHpDy7qgeRAdpnLrgKnCVpy9iVmuMWMbUk",
  "key23": "4Qo7EQ7GF9nUHLSeq9WTAHUZhynrzwrWbNZf7hYbV7Mt7V7tjPQ7Es39WZPEumGfpNHi9r9HFVemxwVdrnzCkpyn",
  "key24": "5WUVM3H3dqw9SXAyH3YNHn1KfjzXmRguUDfcdTLJEuakxnKDNT8a8hTugj1oSU4jTm3vTzYuqAgSmXQXDCC78Zts",
  "key25": "37W3RszWXkS1viHP5zWMd9FbgQD3ztC3x7zWXhBfcgtrbiBhrjVRNC1LucUEGxJgP7iiMqWsjKSigvTNaMxEETBg",
  "key26": "39J1qYRESebvA8Gm2RRR8DyeLoQs8U2BvQi3dC6XfAhF2fHpmJrMTRp9196ePDypzwX8hEf7jdroXpjxU6VKT2W6",
  "key27": "gXYPDtfD9AzhWeduf6L9THUL3BY1U9eEh1ySu4Y6eRPi9yh7WrmjnspbsTWCEa8xPEkZd4kYXAqej2tTeWXG4fP",
  "key28": "5vTUAwUEXDBKAUMNmjByVSP8S3pvZjpRxjRcR3EHXEFqRWLEHN23iDa1KWj1nDRLxWMSqWWZB6sXktZjriMuPKHq",
  "key29": "2MSU3csgdv1jK5B9JrVo7XAtdy9kTwG2nysf8kn3Bhp4ts5iDMDFTinzbufmdfQ7r6C6oNWKS9YCY7VEV2j3YTft",
  "key30": "4yQxdM7pgyNEecpfTJouN68KyM12dGEkQCXNKoEDxZMeFKzri3g25icKbveuJyzk52Eqcr4UBk9qJjsRwohkQjN1",
  "key31": "iv18noUupB4Q9rgjWKqF9jtTS7SeB81ZJqqQJ2yBqk4J524shXECkMerdZRXJMFc7QjNe171NQEZ5m7K3k2YTpB",
  "key32": "3gLsaeNJHsvHoYwQ3XUqSNgCGUfpLnmubd3NDyQLwzZokaCjDqL7Lt9jCuJNo7YjmmAs5h5oJtRgi5JRuVKtPvoS",
  "key33": "5B5uNCwKGt43ZnERLX83CSd2afghxTwXnYfHPpGnE3qGgFnCqsWCATmZ5pj89twEH7Cu4pKjJmG6aUSGNzChWQ53",
  "key34": "jbEFz9tWQk4dt2EFwqkL6JfvcqgwNFsy5Lg9AYfoGfQZJqMtbhzTXPQpRNeKPP7xVCwwRprFUNUpevCduf15fQ2",
  "key35": "4H9YG4zq1yGjJmpD4EXD4w6xCbm4RNVULVQE3owL9Dw8FVrG9J32vJTKYBfoVJsXLLkkpdQhV35mnWr84bH9QNtQ",
  "key36": "3rjaTqEK1Y8mPAkvSakyBJLikKCmGtUNpEBXsUmatA8paKjc4suruEYS1ibNVPeSa99fUrifBNDctbtv7McnY2Yn",
  "key37": "3SU1t6NcTubPc7FjCHxTLqbRVB1X3npXqc4uirZN5PQS7FAW9JZN93yWff8Z8yCnMaUJ81fjPRq7HaGm7g7LuCXF",
  "key38": "2YCb84RxxDYQD7eKdpA53r9Cnj9hyF7HWLRL41kaxrFYH3Jxg2Y1NgG32SNQx8wzUCnnhc5aNbcgejp8CGWoPBgg",
  "key39": "5C99ikN4kJFK6Z4Zgc1UBmjx9Rk36FF865aAu4HTdxWAoKMJ5S5GnDRWfFQFswMBrNavQ1csJt6fPQaktfCR6ack",
  "key40": "4HvPHThVxqpZ5yRWotZZNFYzByHfZGzPJHQosgGw2hr43yFRfkNqoRhDhzZGnZsdpdrXB3B3Hxsd9LRUijHoEhWw",
  "key41": "YmwYka43hFCFEatweQSAZTwsjzNJVg8Bo6obtLsW97efjzauLvgjNRM7JVoQfGQemyXZbwwtdQZZuQBAK1ri682",
  "key42": "3thea6CULuLkEJfg7Eq6jaFHqX65WyPa5RX3c3Cq24E82PHsyX6HGAuM3hgvbk6N3XwyHFKsL1t3u549rCqCBcr8",
  "key43": "4xyPBBQrsQfA2v93ZUZBByCRuiHS9wR7Y7SY3hUsZU5uNNkWEomm4B6WiYq2BNFAVsv5usBLuFaiDULN6gmtwgw5",
  "key44": "4PhjUhuKfAaSSnmGf4nnLpKqcc8x3Dgc8KEdSyqSATv2zgsqemFRFuJwQNe3e91sGfbvz2mhLBBhqmxfTWJcibyQ",
  "key45": "63f2zakHJbxtFniV1HnYgnHAJhXPWVuG1hWZDbTF6UVKVp1r6B71xHLA4JKnYUzUSfCAjwSQeDf3DAJkqof884MJ",
  "key46": "3Y8sKeZHLZYiQwfCJkeZxpV15DjqKnpzjU71GhgaKGNH8H6RFgVeHFLr48sV5giFtE4XX3erkhWgJpGd75KDsvq7",
  "key47": "5z5nGwi1SEMfsh7wfWhs1VVycrrJv4R8e6j5xneq1uNT7ZsBYsbSrtudHzrnquicna5ZXaJMYtMtPTyXg1ZrDzBV"
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
