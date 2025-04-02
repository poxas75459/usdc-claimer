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
    "24LVjqhzF91FV7M4w5GvaPaDsKVRYjtVwKmnFD2vSXMjSkwktCeocihRGHmMTmbhHAf1ujhssVVeeDamM1KkYDgw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jgNTo96gSiHQYPL2aJKxheY8dDCeAyJtBg5sQhUQpsaWnv3Cpa8QWavrpxSn5oxqtc965ycbtB4cxWD23NebzSD",
  "key1": "2hA49M6kUykoyo5W5EFNLEhP5AtQ7U4jG1xLZEBLpv9Cyxb53GZdUCUrUuFYvgf8sj5Ekxar1CFZZzxCWshSXWPs",
  "key2": "2hGeN5AJBfyfSC2F46fRJUJpgrCQVXExg1bmSzz6XA6LC3mVkEA3ua9haMGSwXvHeKMKwSzMNhHsxho7FUVzVyqx",
  "key3": "3Q9Jemw3uUvQE5ueNd3h9oyBh73bJz6huGy1gUq2jX1uAGQqAN7LYyM15N6LhKfmerWkRGNXaTSgjf65njs7NTPA",
  "key4": "3GUkf8wmN32yCG1YLzDiPBLXcoMD1D8sD1Evgj78ag7Zb28dDvCujFqpMz8VCeJKK1pruNvkG6S2X1T3VTWitLiK",
  "key5": "4FABv2juGVrFqQCrmcfwo4Mwr8UThCKzHKURb3aD29J5umuQAB7kTpcnTq8BQ6Em4wneKJ1iQzEmFrAf3x1o1acm",
  "key6": "3qvLCrAGBG8vjEjR2gyxe5RDxyaZ2iNSk7rqug88erSXNY4bbXbDT1jqPYUwCboSACpj1EFvFpDhH5BTjQzMbgVH",
  "key7": "3QbWiM92i82h4rufyYdPoJMAdTn3q8DPaYbXEmZZAwnZHWrVoq6JJpHu3Cmks51VDHPP4A4NN2E11fnbW5tHDJpz",
  "key8": "2YmeBMbQZVw6C7mmC5NKkQhcT7uA7G8kbDhkGgvHk8FkuxyVPEwyREv1vBxVxq78dbk69n58re2pLSCjp7N6843s",
  "key9": "3kBj7pcsRKBQcqRDLeAY9j1Uo6qEQB35oN5debMXGt6KaFK3jeDyH7E95QoPHZPRxMLZd37EUKdThYxzwX3y8nNp",
  "key10": "26JkPCfaBBReNfjp3T6o4VkU4q6iyUh6dNTU33oUzQvYQUVLqRYpBCmky1NkvX88PTYkKNKpbCzbgnBVnAsewfHV",
  "key11": "4QtRiKaUmTwcL4YANnzgvEfchRjTav7Lwa3BjW4s7pn2N8b6bP7hSejqurvEgVK3pajQ9b41RJtxEFJjgfjRZ4Yf",
  "key12": "L6Q8zMmYxZVTUjr36zYQpnxsx4WEoorGLYmVMYs3PwtKuXxaqAWdUK7ymsCMtFFjtcSxLyepiAU4EFZgWcvZ4mR",
  "key13": "2BwBjmZsgdYGJZ1QMDeJ3nR94Aov7CBs6KBeBEa2NxHHTXRmUVhWfbRbfJcXZ7dpvAk1xQoxf1TzTKVAAFUJf8tZ",
  "key14": "5tc8vYJgyzSfdTgUvYqmzS8JwwrEKeWfvaqzRpNapg1cH2twvSc8Ni3xiVSU8oYUppxBcGNBGzFiJA5DHU8rEzUH",
  "key15": "RBp6d1TFzWFSbWisAVfZ7L7azFTi5WgvwrU1VVBKKqkzUw9QHmmuKFmhgA9Fi6Vrdd2C7H2jXRrtfoioAmjHxxG",
  "key16": "32B47uw6oHFEWF6xH1MMb2wGU2vJtE5viGDT17yQewbi1Lp3ukFxJoeqqgLv1MneWE6zGLCmGxktqhV1qZc1GA4g",
  "key17": "nDe6WVhc5PeGoR3GYoNdGB7BDKTZQ6Hkn39fXbUBdXGkcMU3976NqRZ7EWi5T6xzaL6KjVMCgG63fPh3jemqRQ2",
  "key18": "29XKZWZwWsfRtXP9WVu7cED3jQc1fw4HVuBkkg3MAK4cqCrcykGkw23G5qfCw1Bi1ZqDkSfEuR5AJoFg3gsuNFiy",
  "key19": "2PDHvmwpRa2dUSETiSo79D47R2snxF3cGkvQ5xj24SYY7Qw4J65xyihYD3xkMskPnpUHtnNyo4C4GmWhVKjU8nPf",
  "key20": "4w9ui3e8MowDVXQficYHB4cB715FhwrepjRQch2pTqqpLcK5TV8STrbRwJThR5PEA3agPb2QaLqdRzKi2MpB5Dw7",
  "key21": "2k95drR6Uc887LaBgYj3YS9cbACcXXaYJFcgpJZaCurkPcX8TBtE9mTujkJgxmViR6aHrdsgbeRmMYkQ9BtqDaEv",
  "key22": "2UNUDEeXvb8Ar9V9pfXRZy5PydUHiZ3puwhUhaw79eo7kncUhUez4455bELqogRaETtPgpnNCH7dfZRyJa5XvqFV",
  "key23": "4dPCAUF85qTcYRCtKkusYUSwxbjxJkVgE9DFrbmsiSWUTgKjm4gWfBHtadiwWDxTX1bftFWRqeajSjfuTL54uKSw",
  "key24": "4TYCZx8kwb9A9U5CWQHfUMtUE9H2rUfWi9Z53R3x9XSQGxGFSmnK6gaops2EGNTB1xpZMxt5K7SebFXHyQy9wtmc",
  "key25": "38u5mKXxpTGXdveWNBhkPqxxvrcLfeuyxEPnTV75UE6ZYJ9fdPvkndK3uSPAsuGX1adgnsfJJ5nZQ27P1cpjDGAz",
  "key26": "3QPpENwrcrn7Dz7734MWMktGRLaE2H17WFMyNDyNmeVLTBYASwoNVSRn996oP5z9pD9RQK4V5XhFLSC2VDwvpH5h",
  "key27": "36qMhu1vFaEYjLRwrz7pcf3pA5t6hYK8EQgSmQCfF9TEcJ3LNJk9NeiTaahUChcTjxuGU6RzdGPbV3are2oBRJRi",
  "key28": "3Z5yCcb4wtsMRQy7rfhA6c5avr1BX8w2onN1MFc983DxVkaREtC4B7SUD4mrhXddtze3nRsrYAqm7E5aUDi6KqC4",
  "key29": "3vtu5r7S4D8FsBPyVMaYgshvkyadtnpi1QvrXKqofC9jSpXKA9aReuQSzE9VrJs6QCJUVWbd64CrFFG8JDaWzk3X",
  "key30": "5vKoTRGiTCvETGw8MjKvt5Ep6XmF9WU4TDCNidbvrUfUm9KUgw6q7Gci4X77vDP6XiGnWPBMDiZWLvYGQPvbzAgc",
  "key31": "37gZDNQjusfqR19ibPDQd7S7YMNvcAbTaEkk2T3K3Eb8QvtddoQmzr6YhQzWn1vtuxVvUZ3Qv5PgcfxfWcGz5jDY",
  "key32": "SNa6PNPTMeGqhKkmCasT2LTLFHS1Lck2QM6wdtMeQt3dxLrdFtTyLe3zhKzzW4Tjx3c4ff7ntVAUJM2sZiikBsH",
  "key33": "4WqWsR8RUQBQ4rjEP3ARyqvQc9atamcAYjDv3dY8ZYiwyBuiYN6uaMjRVZhyViZrceCWFPAsbcCv5W48edyxAR1h",
  "key34": "28oBzKm3S39XNp5GWVLKoW56uyfyE3m84LMibPs9SkGvWAqZ1Kup4xJAufgP5pHzRuwioRUYkt86M7z39WFxe15z",
  "key35": "JWrdnAtR2aiqRjBkYi6Etk6ETrMTHbV5qGkJm4rtH2JxNVXMtwhQyvuncRPYVbdqNwgPy3g7exBQemBkZE99bWh",
  "key36": "5EXJeiuzvpSEfeS37y5WxSBP7nzzBZbnZxa148uyKozq3d4Qa1ZbHiNUiV2depuvjbNwBzVrgXhXMFDxAVo4sh3m",
  "key37": "3JxRrTNNVfxf7CqpTbwGWtcQegG9c2NerHuQR7comNWgsek9gooiHSuGCie1Rd8QL2j9S757c1AHLtvjKgvbuk1w",
  "key38": "5v7rzYEzTFams5unpfn5GBXjYpwfQzMe7b7wwkdQ9uhNgP6d6hQzSG7jXLgvcEMkspSRQ5FgW8AVvuvc4GUoDZ5E",
  "key39": "5JVNs3GVjkmSDg1quj2CXRwTSbwYcYr5Z54sSAhm1K7LnQU7BrjtzDcRAyhyGFPGDhJpsCHj98fft6pVph7i5zPz",
  "key40": "3J5TBfVGyaBuzRJrQquq65tjgNTM9As9Y8EmwF1rwt3YrBYvzpfJaHshPpSAE69XQBxoFU9Hgff2isPrMmQkgwaA",
  "key41": "4Ch9fo8ew3uq9wpfBHSju8ao63Yu12i2tKqsGr8wr6eqFPDdC5ipqgYY3ZC71WXruo1o25dGneTSUBLBaXANtbzV",
  "key42": "5HnaitDbQasQm4Yb7NryuDGewAMjbSLBtmdRNdwPyLEDhw9tMMDZpFcvN1r2gPw7DtVycqn6to1YuUskP3QQdxaB",
  "key43": "nZKrGyWKmDDnjyj6LMahwNLpPG58am6sdwF7zHxSKT6Wxbpt5nq7pViU54HH57rLMyzkHR5BZoFi33r3QKpLZU6",
  "key44": "pCxH3Yg7hUmCh52wXFuVypocHmhoc1JjYdA8iDRJg96AncPEf8sL8eXKE8NqnjfxKBAXD89SykeQPimjtXtR4D1",
  "key45": "2NNA47TuTJDWhKFzRgWe66MufW87PCEGXXmbHvoPLiyZAwWqcF4SByqzCfcLQuS4oj3h3YcjTLPQMJtqKETiRJ7n",
  "key46": "31Bxxhcjs2mzQhnbbDSZoytXw1EXtHUSa6XWNqvMLzJoxi7nJoduGXxckaZ89dtyPGF9cECkn2QEdLhsKLMGwENb"
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
