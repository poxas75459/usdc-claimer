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
    "4RET2ekSUgRV5z4nygEmmrGEp7SfePJEP5sTDuw7tX2wVMEgpmvL4CKjHLhzqAdrhrcJCG6XnydjLRxBBqU1D4AN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qbNHDiVjBxk7axmszgc5UsdssqtuGhrRtnqNgy6kjVD1TAqU3i6CgVUtSAHFJiUpBXSGrcYawkbd3Zby1gDxDha",
  "key1": "2jGiaXmsrH9yXS8sCf1gDqm1dknX2khY8uKP2gjtoNKQRkmeAX7Ke2woPBpD1fTxLFNzGc5h3qEuKDEpdu1xStHD",
  "key2": "4T2taRitd8EJazkM2tcNyqoxwjCimLS97CepwWzRWd9yvENaWCz6dt7fsL6JRdTzGkZdmHB3SDUr2k8qZLGXU3q5",
  "key3": "2EdNodAPzKJvCfw9Mcx4n8fQmT8a4jRay1CqtMhehRYoMcvDNQotXVCxauzifCws4qwSdgS5dyxwafDgBsrsgday",
  "key4": "2zWwoN7kwNW6P5oXQF9n9rrvJFsY5K9Ga37TkiGMmpY1GH4PxUkwWNUqvA6ni3iZbn5vZMRQdG54AnayyiZ6yt79",
  "key5": "5KEddmCe79oZgCQmfVANfjeTUpehszz9XitBZJ9NNrb2FLqPw13PRcQVBifCvyWAg2wtsq1keJQZmrw7DHuFu1F8",
  "key6": "4Ui1qvsHriDPpJBVMgZoMwutBTgEPGdYyyxBiM6dee3BSw72SzGHbu3yDQb5zfPCREcZgWT9uYwfhaL98YMRycTX",
  "key7": "554eFqWc4s5X67b5XXz2xVkKUtDK7TRH6v2mozjXQWH48ui9N3mJy3bBRaxBhNtrzSdj6LpiqHTCRPi7BJqELKAc",
  "key8": "3eVYPbddJ8gZxMCn55bD6TJRQQ6Sy3CosiZDeLq61KKoQyLMSMaVpku5Wq4BDZRQ9SVkZ4aw3Dcod48FTTxqyev3",
  "key9": "24rFej8fJoifSh5SrPjsCX7rYv4hTM4ZH5f8b974kW917wEhHBvzzr4eBxo9kjK5JLuM1ytH2ChXCsRczfoU657R",
  "key10": "4n5eSDRamYb5hg7vGXxmtsTU2LtwS1U5Y6JvLWqnzrbbLS4EL35aPtVsTQPzAg5QnxYtHhG9aKW6gTw86hpW3irZ",
  "key11": "3C6z66erzt58xGe8tXgYGQQ12ebyULmkW3b2rZpHegmrBFnW2RnHaYi5L7x4qBPtnk6FpbSHdwaBCvZGi7coN31L",
  "key12": "4Fr7tizqyGwmi8vD584iuJNXniqUUbEabaLvgcpxUZ4qFrmXD6Uq2CioEFWKXeY9cyfQYuxcJ7Ls388EDd54x3DD",
  "key13": "WgtyzBG9SN3qMvPMUKvhCwhHb2dNbXryxi4XtBVVFs2bAzwVC7AmfGuzwkcMdBj6wRvAAZRX1bQnWL7UG2jyCk7",
  "key14": "26oYy9dwb3PpQwQAch3q8BBZKQRmTnAbiJTtD6GtuAFsuLuupdgTxD4UeD7UDRdq2JaXGvfX8ScEDCBvnfxjWokX",
  "key15": "4Lae2FkJ9AJp5SB1bq5aPMSyAoqERwQKT4xHvvXGNPuHatng7YvVtBYLETGKANNeNc35dju5JgMqjWYRrUN7FpbM",
  "key16": "e8KsNrnjmgCi1XMMdMB2Y4Uj3XLrbQgQaym1BrZypQDGcfP7S7Vf3WTSPfrTz6hukMG9o5UF7XD4mpmyYA4UXmE",
  "key17": "2oeaWDxon3yxUSGwnVT6oWKiTa1nwnH7BTMzyQw8x59PRCAfLmf19tdzmR1HPFnpbQmhneMS3BMj6VCUzLrbsxhR",
  "key18": "69cfZps5yVyyHBAiSHp7eX64iXpWR9UZA7DgysBcAr1PdQHzsf4z5LLCavLqNubfHNDJzMvKivk3QB71ZD6WtDR",
  "key19": "54h3V79XEJ43CDDpbhT6R1RUVqXaJ3QWcCPmfrHZTyYQvQ6DrY9L4hTRzvMyLdnCLM3AMbWoDLgv5WbvJTEhYhuM",
  "key20": "3aYi9hMCyczvG5H7EjUfGaT4mbefnVirpN1JNZLEMjkKM4tSxxbomPifbFkrSMkLjAq4aqxMoFNGwnzT8HpQcrrx",
  "key21": "4MqCLUcV8eCkcNUnXhs2peu5RLcjGyLc1C49i2qTXh9P7foRvU4ksZxZA3U8z1NBBPXWuY4opCNyCs2AoKN86XD6",
  "key22": "qbxszLtEGF7NaNZRMZL1XtrE6KDm1xVdoTKYgAMh9QAYKV1sxDiRkyvtfeVZYDMUhVxumhp6zsDTzXmF64F3JjU",
  "key23": "5pkYashRHezzPwg6msP4S3yj4qbGPYBiazJxdBeHUpj5EZ6ifbv1DvBAd9mHkRZt1tBpvSmSAzcUfnQt2A18pxjm",
  "key24": "4qF1Pkwh7gtMmRkyrFsKtMFK4EvwfXS1K6mx3tSJ1twU1sYfgL3ygGyqngaSjjo2XLSb61caEkK9ZsgJ1pLoQLYH",
  "key25": "2N8k6HmfdfubiyjHGu185E5oKbAyGdtE5yoVzA7tqEJBHr26r6Dsh4qWveW3pJGqKd3GZm6P8hsDuoj7AgHHnYMv",
  "key26": "2vB7oj2eqMSRUPNQLv8ZnQgEdDk8kZkNfBKmBhVd96kmickVQaF3FRXZ2LgpUMhsqUDgMcoVv1JMWEPkDQ7E8HyQ",
  "key27": "3DetxchNaCNJvjcw2QWZWynhTz3vahNbqp373pSNtV99GN8ma3tyzVw3hboQ63u6zNdz9dwaqRJJs545dZxutRet",
  "key28": "2pvxuzszxLYtVEMpww32ooWyRmByR8mSGvn9b6Y8fk38bHXjGv93XKuHkkFtacsQ8gwr4GCHspRHCkjKTSFLaUfP",
  "key29": "48upcRLrY5tERtvscc3EAap8sEVi275nQ3X1dy9k4Y1ZRYVLHo9JCUhRRaEFQ33xqMaL9VdchEdR5JYMaLd1Yy6S",
  "key30": "5ZJr6VzUsnxvcvr9Y5Zpy42H9ekk4WWghLEtjGPwBipNeojBumEQBRa9bjMnDzMEGJMLobxg1Kk7YXspeSW5TWdH",
  "key31": "5tohtQGVEHCp3cufHCLLTtr8vydvTCSG1L7gqaBS7aeC5uiJn5fYxgkQbDC53UMkBj3HgYpCWwPDJLKw7hZHbs6X",
  "key32": "2hQFptMi9PXFgXNXkd9ZKPuS7xVFhY65EXnaPNrAdZp2TkSM8HTEvMM87cGqsdYAUSgAipXsgVNpnCSTZ8cGwZFz"
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
