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
    "5yaFpTfZ7Qrw1C9UU9VdfrGVQQB62QAceUvzn3f5KW2PGzJnxNh6Riq9KhvW3h1CoAVuWPEi4BiGZiKcZd2ttSCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dmdkRgzp1SiD4Mv3XtiFJHNzHeHDgDHTtjo2FSenoSoUVZC95JUB6GZMWWgoUUPF6ckeFr7Hb2PxhuUMCGVgKxu",
  "key1": "3KXXtoW2kvuaYwuBqfcutPHXWKWpXfoD7CPDDtsQK3tw2iUkjDNJvQVg1MF2m7ETP6kEEdRmkknDeQ1b4d1wgHMd",
  "key2": "2EfRAeBnATBnCynbgckN9uNFzkehyD1JbAV55cmmhdfmqEq34KE3y8hvtKcGsHWkQYFLgJ5SLnqAv82CeQiSqXr6",
  "key3": "3mtD74fQ5EEM3N4wSZmBfrEDFmK2Q1Q1PWYPHwuN6VWY2FfzykMWJ2dLhr6UdfDjR7k2WXkQc3xqur9rczLRQrRF",
  "key4": "4mkqZf8tY3CH9iWVchCYmJ4Gz7qFFGkGivqr4dUfHfXUXsQc2TbdAieByNWhKEUi34quU2hL5uHuYbw1FipB7kmB",
  "key5": "5VriykSFN4ebuj3azdmzZqJ2zoddTcJtU1q1QzZgboZhX7QSeVwZJ67gCTpqfzuJz5Prbto9kzXND4m2SCkBkZPn",
  "key6": "2XcgTcowNqmCANBAqhndNBbiUSnFs5HzizCF1NUztKL7KdtpKdvrGYxqroh2v5cQ37T8qz9cesGL9jf1U8tRMoUb",
  "key7": "3HZaDwQ9F7MUcGd8xaYmJaToZwKN2PAcCkHBPePyhaahrvrXQhvXepK2nDjHH8MUM2TRTirHJpv9EE6FBcLLeb7V",
  "key8": "2tzCcvhS9yETRU11FJquDZm7eYeFNALZoVNDHPoJu6FRRW9iX1gWszoaGd6JQS3A8joFd4aPCFiAm64vp8pBUd5x",
  "key9": "3xJ67gz1psK9GWkaP29LrseaAoxGeo8oqPZmbNEYH8W2yyVGdx6G9CKriE9nJ4S59FAuUqMapZQn2EXNNbzc6FVb",
  "key10": "3ssXkwshDJicav9rXLEyg6n4CHA69kqZetR987uarfKy7YqwwsdupJeue7L8NGALP76VnfVGa5UcSCVRGFdWdnrG",
  "key11": "3CLzQKE1mFRkLicsHfCg5x2bsPt74X8JATSX2NmGbCisxw9LZ9ny9PBYb8yyKE7P3SeefcN6fje289CmxfzxZ1A4",
  "key12": "2TZemj1pTkXYY5brieDibZRsWXAT8vk4yYXopsV7nvFqzWW8NTdbwccnWHVjKfovkZ4Bnct4tnDQeygofEZSpL3E",
  "key13": "3V9xEmVDaszNPC1Bx84gGaVbAXbMPeXfEg122GqP3aJksuV5eUX3A8PBBYTcViWSaV2bPoSZ7tQw89V5PgVDYGKg",
  "key14": "4U2VqqE34MJ4v24n13AKHiRik4mABXfGLKtSCQVnFRYxgVxwzrtQH7L1iUSAwDzYHH9PWbSxzVKsy8eBn6sBW4K4",
  "key15": "3pqNrN312zGFNPuK1qL9sNXZSzZ5sY79JoNcLfU9YACnw9xytgLtf4hKeJfRjMpzQ197zM39uEmPjdJAUKHgba33",
  "key16": "HNf989afTJL9CQjvf3UbJx7YuYCDQXyVgKK2KrABBrsgWw31qGPbBiwRaUMw3VM24TNJydZzMsvTbkUFshBVYBd",
  "key17": "32DGDc8fnphsyWuCv1TGZefqaYhynJC2hFBkCF9ogdM4ZiLBr2E2MyhpMxFXWBa8VNVe2g7FBzMaENUayS9n1G5B",
  "key18": "672tbQXbWGcH54QSaQuZuKkqbADHcsXFicokgciVscQcz9HcDiGpUehNBamXVA2y5cuqA2xGicpfVNrtR6emoFAK",
  "key19": "3WR2yo5NF7VGG3oU4E7SGZs5LvzicXark1RrXDnKaQTBkPct7nyg8Zy5aznofVDEVyCiBAjeGn6nbHAR8dcuf8sC",
  "key20": "5fyCfHWwrftAmDF5wcarSCaspnaPjpPSsPhTd7F6vcKavUBZEK8xcbKHSjD7LTcWnmhsG3fye1mtDhmBAx4Jad3q",
  "key21": "3tdg5CaSaUQZm4eBQiNykKREGkfVSPRZv7pzu6KJub7mksBD2DHa3ow1qtT63a6qcYayX5DBW8oYpG3t16rE7EDg",
  "key22": "5iwvHgTeBy6dW2Yzp7hzmwkhii6G5TLhiCpM4pUFHjaBKBstajn7X3gUgv5amMgJ2PV6UNubQPTfksDFbXNHWN2k",
  "key23": "3Q4jJCeaz1Fw6uDRxEZyKmFacrdAeyCHeogose693PoHVUyiVUaNPKEK7PQa4fwkrocrok8e6mZg4gz41rLeBFAr",
  "key24": "4qoDzStb2KgJEHfD3SH56UYi3Nj1iPxXAyEeRnJf4ZtwsGgfSPMFFkpqFuTbaR8EHXScVBcPvQkfgavgv67kjQy2",
  "key25": "5KDtfyFbda9ZxyrXWeUnyGJhHW9c9S1dE6ddyqm6uD4eq9ycFSsACwxnKKciS49pV3EzsNNsRePP3UaMgD4nLvV3",
  "key26": "3sVx7SpdyZ1TgBZrJRg1JWmzjgN83CoEHbdF34c1ystSw4iJbtrND5kMRuJ18m4QgzjA2ZXCb5oqf47JxaB4zJei",
  "key27": "zRgatq7ot6SkE5n3vCvKjLAtoBZexAVBwheg7ZNFXaPN9ehTB1jMSLvPBH2QURjnHeVQv5pBQtjNGJnSYYE4J5j",
  "key28": "39ydRAtt7E8D96zt9vmKGjZURJXivQXxJ3dRuRfnJaV4WzWtMYgWzpWD3MJtNkSRGGWGKb4YFHJfUZDgM9mckcVo",
  "key29": "2Ytci9p7DZGTKoUGuVNv3UgMVcs3zYPmMgedyuz7EXKwXDePShAdgEj9WTd1kYdc36ZnvgEDu3zcKhQ1n26wkt52",
  "key30": "33RgS3JePZRuPvLDRG3At9JS6AC3HaiGjvQn2QfEoKNNNoet7uW9QwmpQERBNmgPhpU7xfJFMWHCzUDWwUS21EZU",
  "key31": "4TaKyPdcLMi7Eop7f5qaP3yPGfuW7YDeKSEs7HG5bMLJBRrX3NUHVJU6FotXRxFdMfLyCqgfWM7F5eX2iDMRZhL2",
  "key32": "5q5LUyJ7BcVXgtaEyrGo6WRKpnH7yRZvfUhVfPm6JKrvXEzapny9a3Lrtezk7HMLLMSF2ySdSQryazxQkJTiMgLh",
  "key33": "2qSnKjm9aBZjPisSsJyTCNcQiq4mGtnBwTcanHUyhfaiXr6kqMrK7uFSdeVarNMDSb9ja8tuEmgKwWBk3ckVeMqg",
  "key34": "3zaDxNx8hV5TmMpnhCHnSDeUVVUdTfn3E94fRvr7XR6Bqx187GdvVaf2XWBE8tTag3TaCj2m31tankyCeUrzUX26"
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
