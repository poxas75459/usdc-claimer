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
    "84CdckwQEdueSrREmJQ9GgFuEUG2XRXNo3RotinFaozkYLNjGz82twtTifjhBcLsc9YWvkaazpH6yJWyDYY2LUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kbKywDS4o1EqKk9GbeU6MZzbFM5162XuH1w66aVGmCoa6DW3RD61TzJKcym55KqNEvuyPsK8KZt4STSALLATVTE",
  "key1": "42ZbP5zcnFsDX2uTRFXe81QNvNJGxX1wcb8FwGGeX4CwgAHZhu5vKbpbpyKDgmpE69fw7Q3pLCeGwW2NB46fkUMi",
  "key2": "2X8GQtBsxf1eitJaGsasjhocCymTsHvgy4cYU8JShQ9doCjfdxY549Lf1eY51CfUdcDhsABr87E8ds1KHLiTfX2M",
  "key3": "3dLyMXGaUZpMcEztkJbXMizGySX1WikDuNcL1AbL9tEUnaYQHnjwfpCUobR5MWY9cMJJ6q5xHRkuopWVKwoA72BC",
  "key4": "3M3k93GBxi5MStd1Y165NJ19DPFtkYwEcs55F1oLgrK2PbmeYkSMf6L8Z4fa35Wbn41DucDA8XAJ4AYpokgCvicb",
  "key5": "4XvAtdHRxLf1SMwQwyAY2K2rRuEaE7LaJ88NZMiqfSbTZJVFBdhiW3556m4TS2nqyxSnExS78uSpH6FWJ9JNYWBK",
  "key6": "33WWkREwSGvKqSXe6EwnBHKVhV8kBTiVVoRkRJeDT47rmkRqC1vfPKrTiwJYRYMWpsrsexxRZghKiHmEb5QMkwVW",
  "key7": "5z9j3XZsS5QdNDmgdYkWg7637jC2CPkf3jdS9y5wRE4TRGDqpFy3En5TTFTzG3vn9FY6xUsTWTg6SJfkDHpSbcij",
  "key8": "35AJXdHM6gv15qXktX1T9yuk1g3Ux8aFnS6kFq5qry8kPubCqSFthevCrrLU8N34MHX94ghhzhEmQifPNSxEARaP",
  "key9": "3knanzHnPinapuctmQYPf6gg75nnGr1efkFsMFMLRD96djvxv3VcE2SWeEdNFpWzWRgHYXkkGpxjphmZHYV7z4o8",
  "key10": "o2k2SKfWZsQ9TAzkxzLGTj44eZZ6BxaEJLQyyuggPoP69Xn17DuUvuiwdQn4hJaHgfGcwick2FhnFoi5jrz4jkJ",
  "key11": "3kQPhJEjVSqdUCV3Yxm9M4frPrgpPAbXq4g9Dt3j6uzzbnyWxSLDgX3HK2Ducxs5PLSMLiWFY4tUqdWkYpDpKARB",
  "key12": "4XzYqm2RiRBjd6ZDgc51e9v7FKg4rTH5KVeeyTtrtGH6ng7XTkuiXLT66Xji34sYXcm3b7vHt6iKVpBQ7GDQBNAw",
  "key13": "5nqrsex8VNh5dT1NdcPU92hL8a1q5ddDk8K4JG5Tx9cNRFxYGtD7vKkMkfGxWFzKJE3iq7wnTcWwRWWSSVA5EoDK",
  "key14": "2vhE9HUe4auABgV8wYBtuNzfa1pAtVKBsPWJLjMwwDYPWcW81aZZJwJhcT8nEw4CXUKGE3fmKU3cMvnyrVeQhVqT",
  "key15": "5jYpkCudJh3hQ2i8Jaz3AcPEkxqzkQ1yhxpzRzbEzihLmmmqtckka7YXbzXuFcmbVLLZCAAJJfszoVCUhcLV6Jpg",
  "key16": "2iGF8uMPgQLxw1T1yekr85gZMNQbU7FyJsQDWnyAMzWANX1h4yHr59ag1XZd2bpvdnm6ECfYoK8haygqJkN2M2BB",
  "key17": "4tQk9rVJdrj766279vrQpj9B7JjPLFzaBWYjyfdDnyqHfY6e4XkVM4xJG3kvGTcpxXScTwMNLw2wHJ6vsZm2YsVK",
  "key18": "46zL3Ra8hvHkMtcwdSqzq6pQdAXGyCqEmWdqrUFXZGSYK5aBgYUTCoFRtjibb64R9LFyVNnpRq6hm3wzFKS8AeHi",
  "key19": "61ZzMHz9QD4qPGcyev4RDfRChAnNNpLqrKjRJBMvKbfrdhicaZqnNuGR8fRjpaDtFrvMyx9XNsXXWF8HW8of41w7",
  "key20": "4B7x5S2nHeGKwi4TnPepKmzFAvd7oJfoNu7zxEFNfJwrQr43arTWBFnsimKgbsgnkf2QmRtjoghMAvqZm82WJYDt",
  "key21": "hcfe9NEnWCCMGmDq8CP7QzVQ1XMD3CfuopJComVr1cCtyjL3uSWqjKA6XDgU8HD1Pem2xE1cpcLiwja835vmqHs",
  "key22": "21BWShijUvzuzLKhitLKhDJG2hmJHcvdGBfPyjXEHzF7RCHap66eaxk8Kukstc2Np1H95e1t1qb5DARWCAstG3wN",
  "key23": "64oBvPMtPXWpwxbyZMZaVeFZy3v8gP285LKZYS2zYCSzvPaAqGJTffnCrT5qS5h42o8UR31PfZdKx5Wxo8WWhBxp",
  "key24": "5zvSCxiVf5KYdV756ye1jdUWScXyYfk2qGnE1K5FKz97ZDfJ2pAhC7K66GZsj6EYEjCCN9ZiBmyvrRwhgpDDtZhX",
  "key25": "SEqvvjGMN2rwkA4CC1oYMJQXBfFdAh92GFtXupXjpv2ZdsCXorKpjqQtiPjBwbQRqFPVmMq7wwk3AvaY9pzTjUB",
  "key26": "5fbbarqKJoTBwW5jckhkbjr7bpfJVdxhw8aVU9HyfsrJf2vobBvwscGU9jNHqfsmPCv2EdeDPZoXPEQyDd2ukvnV",
  "key27": "4MSbV21yW8Yygb1kaZYDJjawG3Hf74g6cG6NA6x7oJNYk2TkZQZykpPs6QfgYzu7g8CXY3W6nhv7arPq4fuTDnVu",
  "key28": "2PCTLerNbjWw2xGMHFCcaisL4EVyqxmT7MPFyzzLiv581rgeuZYQTq3yg8dPKgMaFJxbPpuxABsgDyGADjWQFdka",
  "key29": "DTaTqTyjSSSYipbuHQjfy1qBF31QUJa8ThN2BE5yGjVLRnXvJDDtvAu9EMkpVUVQx4E4pQwVAoRnL4mQJiXdWVa",
  "key30": "4NNAtzh3evdKnxLdEFLLXAqMa8eeoTuVNJ9KgAEpAckrnCa2YB5xq3x3zLJ4HWJfWiAUbwYDG3iPGfo84cVm2ktC",
  "key31": "46bA5Uf2gmvYWBqnwNKH87etE1Kk2mi9Uq65cCCRN2fdcb7yy6sbNMzyrRZYRCSwEqB3HtegsUDM1NZ5HeBmXMYj",
  "key32": "4ao7Vri11ESczT5hcsKhvoNeVsCafiM8qzhrxe1jQMAf3Ns57SxwjsyrBr5gbXwyFcAh2jFu9egduXs2Ufdp5Xmo",
  "key33": "2DWMbY4Xd3prJEuod8tiKrPWXmhVrMqkP7FTxcdZNoQsn92xBysAfkoZKhivXY6qio5tgDSNzviVvaMYiZSQ699m",
  "key34": "5SENbsQJC2Mh4DStYeMZo8U2ZiA7EDF5p3gHMqLzHVPkgFvse3HonVgf9TBcb5GSLkfVWG2kFXkBzBBHhmqtgh8x",
  "key35": "24PmKcQHCarNXnjrrWDARBpmPN1332NoCuuhSV4wkotJnXWbqcVrWjKXrtMmSvg61Zd38GQn8SK6VbTy4WAf8A8m",
  "key36": "4JQQwF6merZBAp3KB4rFzAPF4vS5ozGRoTRe7ChFRK5KZzgQGwVSCPxke9Mu8njjJCJS6cMDYP3q9k7XZhQRpgYw",
  "key37": "55KypWo3jt1v1HE9NdBDW3VMdSoAauG3ooLuG16sFNRfxT1uTBY2bpnmFJLJgrs1ag8aZ1TRZuwVhJ1rdkoACiMq",
  "key38": "3gemZZmsGS4PmC3xtR3Rm4QcBJtRHpvCTBvhiw3UCPYJSGrJRJALu8u8iZUwKpKB3onty7QRLgwr1VLgMcp4rJvs"
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
