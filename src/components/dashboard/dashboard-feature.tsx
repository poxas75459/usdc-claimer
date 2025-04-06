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
    "5g8rfH1mTKsR71LqYNjY3ZbbZZ413Vg3GQ4c16cArAr1V8ZeHnjz33cwViM6fvFf2uonWGPbtRrTQ1eTU54awip2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f1jU9ksZ8JvxkZnMyx4BxwrafbP3ixFFS6xg2BxjwbbwgPaTHwZbZZemFQjQS9QhcpiMvnsYEhzyBTuazaW98TG",
  "key1": "4mPt4KQJsPwE5EyyvZ9z31heL8TQUWQYUKkCbJBSR66hqnaGxtG6RHJfPFYoV8ZwQPcKDK5RgLQYtxec6hcFerr4",
  "key2": "rzbZY9MrY3UBi6GG9x8PzN4PS6r76z4UekdGSnKe6Kk1vNzxgt4PrB5GZSFM1a1NbEB1355YrVKz74cggMqnAfk",
  "key3": "5m8UgD3yJAYEN4aFLoN9fK2B9FZWmRMmGqmrtFaB6zCWHGrkq9RPX8hHdSKn3eY7QTXJxHnR9yF8kn8u837K7DKN",
  "key4": "2fdGLGGowGJBSChu2yimA2Qud6Ca8N18G3FUgDLJhktod4SR7kPDDpiTQbrhvgXAEYwfbnRtCcwWP7kfmjBehD95",
  "key5": "4GBCatdn5qQaEbtfhEJ65dTgwSBvkzitAiHvKAEsYvXpR6YnFNJotMyvHpoRuoAfHVbBqZBZqaLoFrgAWyehmq77",
  "key6": "2vt1gsddtdsru4vykKpZbrmuoJTTE3u4s8J8x2HSwUkyhf9qnwQtRSdqZexxBBsqp6W6acz33TbDUD5Z2UGMmtzi",
  "key7": "5dW9p8qg6A8GqoAA7ZfhUeB3HbiQKu9HpdP8xJib4AvaW4QeEV3ixPhBhNZTaJMwUk7tEXmYL7AcJyEF3e9dSwWM",
  "key8": "4fiQp8VyhqXzVNDn4RfmGjZvGAmJnTVVX2XX6DW9FVky2k8iekw51v7q73Fzu6pbcVRpgEzSQjPn8fWN7RV1YuKY",
  "key9": "2CDXp9ajSGF6VvmxXvJoi6NN3PAjVcd5GM8msY8bJPj2PPNA4aupGri94HgWWbmdzYWW31VC62oG7f9rtjPtyyEa",
  "key10": "5zNGsGBMfBziPzVG6TxAUMDAdt4MYvZUhuLhem5Uq9RuuvYGBdz2Vff1ZqZViu5gXjTDNY2QeNHuESYgfnaMGu69",
  "key11": "3SEzk8XJnJrcdaMvnHeDXrdQhN245EtWCCDoJB44KkgLoKDy6hjdefVpj67VpiSVQMZagPstdxgFGNNwEvE4QFqy",
  "key12": "KxLqBeUMFTZGdxXXcVF2zTrC2a9ysadvv8oP1rHz7gJYJKSgBQYmagG83QeivtuNCmAx6gHkKQpoYyiqNTgZZh8",
  "key13": "4QJtHukPY4BWSb67G8WuTmAxXZavQf4ZvGwsdPLfUFfBQEx6R4WG8eoNJ5qNqQwc5CfmyD1cV9UwoTj5QFgN8X9B",
  "key14": "4KqZ7qcb4NCbEEQTyqSgZiA325QG4hBDi3wDvsTLuNZbDJsa7ZqLSkC7tL6fRcZLDKpF9zwM9YMd2FWKqa2rh96D",
  "key15": "7vySSovWTg8xPXLWRXtuaaDGdaAWDW6ryb8inDKBaY3GtizT1LAzy1bq1Gn9V697PgiSYqMErmJeQCZ9UuF2mW3",
  "key16": "3LdpxQPKEe2q1gWAznDDDsNbJHgyF4oSu3DQ3wA3o4ie61DKss4RUGvr3tocWQzJhu7poBQqxxbMgdhDH9dGNnNt",
  "key17": "oPD9EUnbzVBj6NinsPro6DtALrRNotuFgRfFHXRJaQYckA1qBkPVCQKT82afvdvBtqTcppM4MCwgxF2gsBUe5N1",
  "key18": "3z42xsnUTmgiMoFVCTooQXwfzrR8zM7hrf4sxx5Qpn4ra5xzEQS4EX4qNmiW21wkFGYtEAgDPx1MF6Zha1tvqxcT",
  "key19": "2T8UcmLhEnpGH4sw8uqqoSabJrRC2uPtkkbYKnxcWcACkmjvQZouZTTKVGSHpxUgMMkXG758aW4tKKV35xrkuFbs",
  "key20": "2TGrYZ9iCVhy6KgndBGG8stjhfSkoirqQ89TojvuRp9QAGAESFsGwekHcUoBZdUwV6fBpKW8bzDUi7DRVQfrtHt9",
  "key21": "nwNk6AgcN3cvcoYfMfk6tXuwKbUnomeBrEAPP5HUGjizwpXBypDwnpJG56yDZ8ZZTkqk2Gj9dMHHKT3v6ZKFJ2U",
  "key22": "4BFnV2uMGyqbApnf2XWK5Yb8EhYLrDGWGcSeKRpeZ4rVqaQUjasqSVQE5i1REBd5wvFFVDkaa27Qp5mYLkZFmuoH",
  "key23": "34cLbqu2Pa4oASk49BZRkeSobt7rgV4oaUYTSmTJWKmTgoNtiHytWPnvoFzUZcyFK8xrxgoepC4p6iYqKZBce7RF",
  "key24": "2KR1gfku3NyYngy14bKT1Qz94CZev8ptZwt82KvGZ3PdvbeS5kQMLXvMCiSKEi8QcERLD1w3BiitiYhUYcSMWemP",
  "key25": "4yRRMhrGWoPoSevKnesHBSLWULLsw8bcvKTRDqZZ1EFtMT4Gfm9aQ2QCWA8H7AjT3DwG6hQGAbgUCNYx7iZ7ePfT",
  "key26": "4bXzJVDJdtrqNXMNqf1VztkNfgVMSxJj2TC8RkRCtwwu5gYiUqqXMBDu9G6cVEVZr8TnoM98KdoBgVT4nPj2hEzR",
  "key27": "4a3vQs6yKqm9yCJiCtVpADBAVNVdwDQfT4JqUTp9kxydt9USbuBT2QYpjcet3rHSRUE1DoETUkgR84AmFkyXx1ik",
  "key28": "3Vxs6fxY4pnTbtJAPbZC6KFgDKQf6ucpUMsdXg922MGP3eckW7VGmKPuxXy14VntLUShuh9AzeL9KVWQKz7k5ysg",
  "key29": "3uyXt3XKxvAfxQPnpKs9YZkfNYcQ28sfeCtcTy9ChDnTrPgXZu97FgtjyeAub59Bhj3dx9zzxyL82me8Gsx6AWPy",
  "key30": "5gdWMuWfkAk8sFSZAtWsYcxe3E4V5f7Vq3eErkwX5dr5tkVFBVLjP7reGFVF2NcrJZ3aHSxnspJMSNwx9sxEzK8F",
  "key31": "6i8QEYx2HFRKkSAhq8fQmQBpCaYrm86R1UNQARf1WJAsvVEzPxgi5w6A7uUPgM2wYAfB1fjGYJkHTEegay2bWiE",
  "key32": "WH3cGtkk3UzsHBoUxU2EstmhhSwdi9xMYGtwstCW5hJyX9RJ99qdKdRSDhDqJkpUqqdguM1RokFBpWJFoy8saJ3",
  "key33": "4Kx7bswcZmyHNBuSDLkiNk73hp3XNFxXTc43rc9FtLvpR2biuHJYKcL8oBaz3DzfQnmBfprQ4fSNSQgug1XJUo3d"
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
