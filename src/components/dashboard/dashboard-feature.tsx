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
    "3rKZmnR1Mhr5H4QxtNB3oQ4CASvCW8dzGbGoruPQi8yEKM3jKrpkU5hMJeZVFDq3wwKb1L15pzwKEPLqCFzmcEcB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27Q42454JxdsMd6jA8XybKvjp8qexPBBSnKEJzqsaf7PNfMxQmfw7eX7D1V26gRZHffjzmqdQhxUuier37ywGMV4",
  "key1": "2a1bHs2Pg93ev7eSDuAGG3XnnPRyyeGWtfATQM1WyitB1kuVuFk1sufRuYauU1g8Wb3BGK93tF8WZ6aUuyp2ANav",
  "key2": "4z1hJaC5mQegmmerrKhrsQdHnPT1mN1WJU748tTAHJCay9YXV2VtyZZGBfmyAkoqZF4BADKuGf7f1C62AQGbLjRQ",
  "key3": "2FqmE2kCvsm5CPHrEvNoV9aGbRHvD1ipjB3hbzBwtkAVzPPLSjghu7o8WbssQVzGf5z4wa1g7xr2o7Vty8kjnXuk",
  "key4": "5zw8hbvXBvLAokx9JnT8VvgQKbAbw54RBDKXjxpxpFFR7REmLzXezu4oQhipMTiYjkqS9rNHmyLgZJhCemSmZLR2",
  "key5": "5xz4TLq5kCmZtDNgaQSg5Dnk3fhuDV7thmVCFe2weXff7x3VDs4a8yBQ5DVUCaaj4q1WVwnPnroo6tTkmB3Rd5Ye",
  "key6": "2Jf5aBjCJXUtsYXbjhHikfkizAAVtoLAPc3QcoPrWZLUPd1vzfW8oWx94bzd61QwXm14umaiTvPeKo5YP3674dnx",
  "key7": "5W4aEo45sXPcpyduTKatkftdYYdZFngaVUPB5mCRJqDeLfyVAn3MoWcfesQZXpCCJDzESEH4vvWpMDNNtkwkmefR",
  "key8": "2F2NxRSed13LCy9mYqjVqMZkvvaHFVFLDag1GQqwvccukxpWD73BQCruTxUnh84eM5DH7b2XKz4pVptppfXhmcsi",
  "key9": "4XqviDJ6gYPAEWDXiWYoGoABGuFfZcqjXxD1U42DZXHjBWPFkUPuAStiSuv3nBmZRtmpSbxLsHqUpQPXJ339TymP",
  "key10": "P8S96c44otmAEawNivtdAHYwXJwUNqG8qBAbNjJwfvCYaWMdi95cdd9LNxYJ1MWnRN2GdiMJCD34kgRQ1aTATyK",
  "key11": "5mqTsp2CmpTYszBrKPRLjAJNXkNiGqiAm3CiyPxBQQUet7psC21a9SjdDxUd1C7F81nZBwUeX1JfgQYAsAcyrZKM",
  "key12": "ykm4YYet4nTqFM7udmkxNNB6jqKVyiRqBLSCLt1ybJg3xeGmda1qBE3cgfZbBJQdKU6P5auzgvxVGhyy5f6wJ3V",
  "key13": "5RQQh73izghHWx5giWCwRDoSD1kydgMcsRybvmbUwjSAcDfyJUSxZigYMnXwpGRYKHTfRQdrD1sLHT13qkaApipG",
  "key14": "2Wv9V7wtU9Zf3uTyJ6aU2JCDJ4YS1hTiay4BdPugS8LJtxkqbpRBouX1ELMC1NwRHDYiD4uGj3jK5b48r7QAAomn",
  "key15": "4jB3GRmYrgbFfpQYjSP5tHhnqe2Dg4yM3skLWwJ7ZRWS3ZRorzZNovQxVkCZVN6dCNtEPCxjW4cR1TVgvBfqDdpK",
  "key16": "5eekFnTXmLSLpj3gY2orCxtFetbUsADLUbUxWtX64U99XxLRLD4fj6wdxpXycbqEGNmwiibWe7sSQu1uVogx8LnW",
  "key17": "4HPShS4egf9k6RtP6PN3z7XyMWLfEKDCgFcHPjnWaGgvRREhcMKLUKCY9xvkZQuTDzgnzLH8EgNiaJMEcmNrBDvt",
  "key18": "4oWQtr6qVtpm3ZoVNny9M9GG9Y7Vgp252EgzzC7WBzY2BsA9kWoqLqsCmTn9sS3PhYBC5DXvdNyiQVunevfG4SCH",
  "key19": "5JuPYy9S64m62tTYvyroE6p9qdJoqHzLBmzmnCqvmX5Q816LQy3tdrUq5SepfWFxPei5XYPB59dfpg6e1Y4cHtQU",
  "key20": "fprGu2KmfD82PjA6WZg4PuxW3zQutSSX4x2pPLzxZDdc5zYdN4iCuxo9mNjQ1GLxawmFNSX3oifTZCDDsaS9PbG",
  "key21": "2EM78nqwXef2NymiiT3MXLz5uGwVvoEFqeyPfQFjxscJyrq73DcSP4z2RN21M4ZzULkSh8qjXwTowEhcqn7VFfoN",
  "key22": "3bgpmZqZbpt1LAaoAyWYs75Koe6dGLrfH8rKM8ptgc2zSfWZMDwv7gHAmKA7R9CEPKx5DKQPkvEjRKmgePSWtomi",
  "key23": "2Z5p1H7aiy2dz72XWkXdMsF3PduQD8Cuiwv5ShHRBcbkz3c6yhx3RNPuvXuScS9iqf8mLEwxUbDFR4vymKoc5aA3",
  "key24": "Bcwtg8sKHfWUEaU73GBeCUooZZTgdqmmDJhVovACmMoUZrjUNacXxsE1LPoT4KJyqBGP8Nab3DmMcdD2oeKUJVf",
  "key25": "3TWjJvFQisF2LKH9XH4RJQzLMcrq3toTDwVeK4jSGcJFpLmvR2DwaKXHAfJLmkuTs8txMkN8GxtoMgomppHzcgYh",
  "key26": "Ki7DEmCWgUK9z9xpw41zqcdWJ4gC8wowYNd8fgBr9UKasSujeKdwKTryTZ29vNHjqDzumhNeBFGURjGGaoCvwXB",
  "key27": "4obbaP4KMiyPyjP16fkeo4dxfiTJwvjiAK5Q5SiqrzT3d9wKKUHYaVNeYzqP667NGnASBLJxKtppGCpkh9TWssec",
  "key28": "3Y72EJxzuZCdfnM3gYkLqkFeSA7QWC66V6dcHoPSyEbC53rKjpB7iYn6MuW8CWDWgHdNdJGQ19HYeVjtoX7bkSES",
  "key29": "JRDpRAH4hZSqnSWQUvNn77CHaQqt7b8P1GURvoGH8iRYky6TGr9rRsrJwEnKsigpDPXcBxBGw9UkTt6nsHKahe1",
  "key30": "2AiRAhRwUDSMm5sg6yzHYzcoHoNMbd7Mju4zEZvz14kkFGZPbZ4BtZWWnydFxxAK4K5DryLqutS8WLdS2eqTm4n3",
  "key31": "2bCAU5VrDjj8KNpkhPzq5Rjysr8tWYXrzzMdb8suafGaChZdzaPM6heiMimJaQMk7t2wCBWzaEgHCQ9egCbdCHGf",
  "key32": "4bVnrpRZKqNjbuRJ7zCg1XyqhVCvQhZmnXLFXPN6LyE1NhRYaK1GCxCAeHa2z4juM69FYTUXDdPETRczeAytRsQt",
  "key33": "2zm4d1pwrYvYM3RbtQnEyGFiwRmhMR5jmGSoBzh6qZdLcC2qgweGJH7DNDaSjHjt2cLQzK3e8oAdxJezwDJEReQb"
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
