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
    "3cHozyiuEcfwYqWj6cwjRmwdkRW8xHNDyaixDKfBmTdcLw7nZrxQxsmbxJQ85Csy5oPHtZWJDAfoTKQRH1diGrYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wXgp74t9SRmNx6Yf1QCUWWC1huyH3guhoSvQpoe9rCyRtSxvvvvpCzW2mMR2BYPckbvJC2LXvUeoF4vX9brVGjc",
  "key1": "zfNWQzuD5CEyUwFzbYgY5hngerXMtCeYFqarcFgQp8xCppYnsPcpZcZLzsvGSCz1Pg2Tt1KpEKHTQt6jt4TvcPb",
  "key2": "2bvs1byjRnFmd7BtthvUXr1cwnwxGgKHLpPbVwVRP6KdejearV5pC2aHsSbHB98mTYTZHA4Dc5LSM22GZDz2qaL7",
  "key3": "4Dbzfb8EKKakhF9RcFmX5bZez246X9HAz3fKhZKdD4wj314gdMtRr6zh8JqXx2zhrZRw6vyXV4QhvrqJiYYoQ9P7",
  "key4": "2cAK4nTvbxAmh4P8wEdMBsEzE3EEc4XJgMaqreRw7wQzbyt8RXVxiSq8Pkm8tJgqDJWeEEhE1ncfwTuhK1DZHQbq",
  "key5": "3Y1CGsPVAvtJpS7uT8TYMj3VChSutP5geeXWYkCZf36K8CYrN9Pqn2WFDjUyyXxt2emL7HTik2ecyyrRGnUNR4Mm",
  "key6": "4P7nw4zzc2jh3YNABWMYyjJ8DEoKhH8Vnk66dmCmjFmEqWN4UTTpJ1kyd2HHcn6ypv61X9z91tx6j6QzCKNhZVbE",
  "key7": "5URtKdkkBuhtdUDSeaHodm7jMkiHQb81bBCyAScPymvzBSHWfUm8AL1Qb4Z44yo3PoB4mDUpLSosrymKW2vjCkHk",
  "key8": "61Hy6ZnKKB2UkkQJ3Xaa2mbVvLyLEoW9HaSpyHVB5XfxV4ny9FeeL3Ai7N1bzbk1riNs6qv1QWVD2TzgQG113wh1",
  "key9": "49sghDvpsbLmVKJ3YaLQD7iMeKtQ8ae8tNYjWFoJ14P2XMNC75p2zWeiisCEEmoGgbWwur81nqpF8d7QmakiJpAy",
  "key10": "53C4ch97vU8EM2EDZbLCdH2m8VFoVbMaTbYacDjBJ4fPpiCFMriE6Y8J9Qw5ZZkxzyNfQE1ysFHFn7vqzDsoowm4",
  "key11": "5aH1KH4ifduChq9pr8EmPhN3b2CzW7ZamMMC8DWAUGeufDF4zfnETe4axXVuJMLPvc3kigtdJETB3NBXKCHqixzA",
  "key12": "4hFrtWjr6N16AVBSTyPSFSV1qaVCGU1KDD9DbxTL8ePScJ42sc3EUqa4sHLKoHAoGBLc27E3Adba72psLvuyNCvE",
  "key13": "7mNEZe27QdsGqqU2rnez68ZbqxwEq1jzScT4jBK4BThVh6gKFtXBc5Qe1kiwfjuVJFgN1vb2oPv2rWmEP9EuWh5",
  "key14": "28kwkMgAgcXTNaGxAAmttompWFvseLUAZWpttJg7r9Yg8SfPDJefXuxmYG8GDDtwTpcdRhxdMa7sCWvbiGNDq3KL",
  "key15": "2UnUANFKLRSL7vJPwgurAfAyfM25fh6FEG98SBCzk4DzdcsBzNC2FFc7sWq2S99ooPWujqBRijBNMoq4cmvCB4B4",
  "key16": "4ru1c8KtSpaHAKVo4frTyrn6FBQrhYuq2oECULA2eiS8PXWQbdxVBMb9RBaZvNYw7QGkuT6WrCbxkY51Hu6TSyv1",
  "key17": "EECX7ceMF9nmy9L3TgALXa4iVf6ix9QPqLkEQgv16uP66zP4XBAFAeqadeMTwpAobBLsQxo6Dqc3Lippw1fXBgo",
  "key18": "56fL9tJvPJUyWc9bkQtpYWsw2N91VuCaxcsDFiNgHgvC5jcJ4CkRiecFgChY1pRm7dvChzqVEYViiuotufzuP34D",
  "key19": "5aFV5pspiaLmypnACvs8rpJEHjJ76HxVrnMRUNGaHdbER4D3UHAxMut9S6fJZHJJgwScwwCJvgtdeb6oBnZhBxA6",
  "key20": "2AJWW27y4fcihTEw27s5sP8CEBXsXPYeZDZaaPryawvXSGUAaBrvBwvSqHRu2VqP8dcB6G5fMMAW3VLFjyeT6ghK",
  "key21": "bR98LzYYkDnxAQSdSgKL81yccX5oLvU4qEHk3sHx92mhP8TNJMvwSAeXbp82ftZiJmqExQeRe8jYweY2RVvpGQo",
  "key22": "3oXEeRgF4P9g5dyVDuD9mkYjrBA7yVZXECNzTy5EsfXHfSpMwQYwc6XEAYaAex8EsHUX2Ew85jZU93pVUiidYU5h",
  "key23": "64Te1F7uYSWoRd3b74LRgd2x28EQQLdYjZRyEcTJoo33paUn8HrgrrKv6jJhDiyMXRjJrfqmtENViDesCkT9znhw",
  "key24": "5VpiNYggFfHePgeZ6yEe5QDcShBvwVcDYM1RvvCpJsBjZ5QYxJPXDFnfk8cCbEjtrSne5q8RoFLA7XSaDyjNmCqE",
  "key25": "5ndnF5nZh8RuXTQ1nxgVRLC3J6bXpqrETXwDhiPEAB5ntxEPbTFUfnmCsqtHxX7RP4Qv1Pv8wMwnY9Nnr6ykjTZj",
  "key26": "3TejWo4PANjxcTGCbz6WNPreycTDNvjMhHyHK4L9m7vcUBNze4e3Z7zrQ6TqbeDrGQhS8qYnfES3YPaU5vLXrY2V",
  "key27": "2YfjugVtEgq7kadtuB1md8wrDQHug1ozTYsxV5bhXt75HCkMfJtXM9EJrqHqtFV2RpuW9ncKb2jn7cxeaSDX6rsy",
  "key28": "33brB1uiynscGqqSJajZXPSVsu116xC2bnybfc2PBYMVY617RniPRpC8nfaypSjmr2trSMZ93FVPj2jijCJdxjA2",
  "key29": "53YWVy7zrQqKZtazh15cG7pzULzYmeA6NfxHgvuyPJ3wu8uoBQoXHahtytukxXGDTbv7TpGRdBZKHAhAs84G5jkx",
  "key30": "2J88Qrkx81LinL2XVzeGAaQp5ks1vAw3YV3je2Xow3P1ghvVDoE6p65a8dzScfApGuYAsVECXMMT69d5CjEB65W2",
  "key31": "5SVbDBknHKshYvD5yQL1N17yU5T94rv18q61ZThiHohARsw3kwbgiPBRksJmevYUJn2BKpV7KNg1pw4iLonCAAWe",
  "key32": "3KmhSbdLCZEMLGUW6taiv4u6Nxw7cPT5jhFPTtMSC59WAK1378DZT4UhBnagpPwEtbDWuhtKtAUb24ba7zGNgP55",
  "key33": "65XMp4nfVwD4mfx4GDDyD9iUhRfRwniFmW6bHby861NV7kz9XHs3PoYSaMixyay6cjuSreivTziR5aiQYnDLAz9T",
  "key34": "NmC6LjSTpDZ8ZDzA7KV37RME3QiQnSnFBBrSTTEzasVCKsi3WvW7oaHZmvy3qpwz8etjLDtMV5U7TCMcF2pC843"
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
