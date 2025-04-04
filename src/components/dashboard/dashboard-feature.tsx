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
    "2QTR5zpCjtXcyE919dcv9Nhpcwx9NEeVabtjktJM9wofrwJfR3j2561hJQ47xe5PQ7RJNRCk3Lyh6rWWwYzMppdd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NC5HDY1hgmRLyizBzoGp9ceF9mGxTwAPGEhphYTv13dbZ99ZehjEffdtQ31GsFyqLu9poUdtZTjnto8xYqLKFKo",
  "key1": "3Kax4QFK2gN2N3Wjf8MdTreBoJ9oWBoh7nzHnacSm9r5Tip7e6aoFB59AmUwB2Mr8iebBbC7nKwcBBtFDJoNDTFN",
  "key2": "ZzEC3Zo8Svhc9NHMYxmGhBVNLN37GQDgTbPz4fUueNbYGJyqRc6CK6T4hbm4429qhvw8x9RNHnxL4UnUBwmPKhh",
  "key3": "VrrhwNsG5KqYRr7LDMgbEnVmy8FoqYhRcjGqaHNmKuvQUmRmhn2hYF62KejLZ15CqTzBE6TXdVN6zMqReEsF8JE",
  "key4": "5tY9E7F6835hdgpPTY7sG44VjRFjTxg1pVQ7H8a83g7VnsZ5tB2TYxhmRv838wdVH9WZZwLHLq3dHjEPXKBq6i4t",
  "key5": "TpNG8haQBNcVN1BBoBQeo4wRQxUVKsKg2bDoDoQK8LG95eAAHfDwe7xEZ1peo9ihL48Rz6VubNpmg5RVqKh28L1",
  "key6": "RUnETJeJ9SVWGCSwTTveEJ7ENQwc4VjENccPLD7P6wupHdyDSLJnaYw2hWekHfFpGZp1VNs8ycCdb2L1jmQNfFL",
  "key7": "5d2NWoEk1aKMS2WmaDLPv2Egg76LtVqCbHpmT7G8spPVSLmMoBdviowYxyqrgj1jLTqwGx3sNZfZKVHZVp5TEqUQ",
  "key8": "2stjV7vTYm3UsXyB38kaWRcACj3PhhcB5Foe1hSNFonNYZe2W1E2u9XjMwn34WcnSh9sn7kBzxxo6KJLeDsiLxkn",
  "key9": "2hLZVArhKH4QF2dTGEBiFMMTpntPX9ufEqkZcw9nAQxdxm23XEw6xvJS89x5pjsHcC8m1XFJPXZt3nL6DAt5LyLC",
  "key10": "3TioiomwfV2LvSmd8TGVSVYvNT96tyuqu6KuVDwNWyPaziLK9CMscgH1xNQhjvCr7jq43QR6XyZk5xMugjGYLQ8p",
  "key11": "2WK8kpW2vSJLWeBpRn8ZRsYWrftek7arqJEFifKavJQwggFGh4FN7gZofZwi586ekLji8m7v5LctytuvC99yPAE4",
  "key12": "663Vev7V3PbZg7ENzmRrSkbDjd3ZGYD5Z2oRrbmTXjkAjYQ9mnQ5hJkHGFg619ppJHNDzQ7ZmycRxn4fw34no6y7",
  "key13": "39wZPD6RWHbiasCXg58buyQ4XY9VTzDxunh5zXX1gdm6pdpYUo8tTnhjz8RCs1osrfNjnSjeYrDV2yBtygqb5L5w",
  "key14": "2AChyQZrqB1z1Nb3UG7LMEJs8Z9s6ujDAm7ykUAjWnUjRgjC6uQsKK9XEnrPFMh4x3tGyCXqHjpsAdGZSH8mTjbw",
  "key15": "2fJoCEoFgHghnZWz6SGmH6fo1wVEcg3Z6kVKJFhwfXxRddp9aeGp5e83jZJJXvDqU6fSEQNQbpbgyhbyagSnwzwv",
  "key16": "49mknoBKx9S9dSR94jvdP4fF4fkEQZQud34kGeKCV8Bdx6jVsPTn6Hwz9LacCZYhWhJv7soEyTdTQ3yW7BpkYCzb",
  "key17": "fu9AoVyFq9wvqhH3a7wC34qfUB5Sqqbh5nPBvjmZSdoNdiw2rT5yqXzhMqqb1frqKPdpmHRxkUoye5Vvr71zGXK",
  "key18": "2s3g4K9GQaYfVNn7U34w89KjhTitLqatN6ToQ2v3ToENeuJR46X4g1MK7RPT3SsAj1wx76DtjHpDW1pPGemfzcBy",
  "key19": "2GBirH87W9QfsfkC2QwHUBDrmNdy3nkVbSQJxLLdZpdd1c7Fb7RzKHgDsQHZ5UEpnLkg7z5S59AfVm6rq5ojNiMa",
  "key20": "2M9wrNdxt3HzALMMgpLTehtr7RTvFkgaFBfwvAubwMrAb12J5w1kTtWwcoqgXfyodNchESv51DD5hbUr28Nr1ZN8",
  "key21": "3tKibMM43Pt6iPThNnX2qVPGudaT2GDuqaeyH2PJV7ZgBitM1YjW84KAaXpJBUGgaLjvdAmeDWgQpftG8WzGYpFF",
  "key22": "3FLGYc6e7CxjZJk9DuysPqE7nmr1KbP68hp5sCdCCbee1zBfw9LDm86bVUPAbXmDb8amN6TaqNVY6DRE5WtBW8kq",
  "key23": "2WXkWbBTFonL39KBhxgk3QV9Km6TtZ7q846Fd9Zpxgimb8XSMT8kJjdiUVqhMR1o4raLqW272AY25mYU4VZK17m9",
  "key24": "2UJ5JzQursGkQt3VuXWHjYYYNjrWkJCYbBN9Nhi4DH6TAdK4jPx2bznXtxkDTZJg6QbH9cBuCgt35NtHwvHGBcFK",
  "key25": "5M9uWasJnfa88pUBWHtTmm5MS3xQRtaF5FCNapjynXeJvsyu2H4M3anGNbHoXP5cqUabSFX4VTDo4Ufgg6ewLiGD",
  "key26": "5htMb89FXWsna1j4fNdxg7W5bxXkz14ReUFWoamJDo75DvSf2Dwo3qmKUNGLBVsBhqtDNqp9dxoDpyZAqAyNEMAu",
  "key27": "5nkTeeUVk8dGdyWpNwCg2iL3MBSNENfyFE3QxKJypmKNuGbG2s55MHmtLBb72aGLhbhNvUpKUkNPKrAVjyvPcx4F",
  "key28": "65gjYAmirKRJ514hC4yXRuRM5XrUt3m5yarNgz3tgbvZAcmowVLp9Qrs65KUPoeFzdSCU8qXjfyJ4UdZuqH4pCv8",
  "key29": "2io3XrzEFSeD9MSBxK8NjNTotMbvy7fg7wtC4p9wreNHPZnWk4Y9HSF9wod6qk75dBUoqUaK1aGweCJt2pYc8Vbv",
  "key30": "4vXEuGHEqaUxJBr9kpvPnavM84TG4sirLYwH6aciLRV2k4YDG2HkBAUMdWfEJeCdKG3CdTh6KcFhJx5kwrV4R2as",
  "key31": "2ibzwBzFWUdJDQ68NtWb5yNovWH3akRfXnmJg5Ek5MKdnH5am9exg8grPBQabmA8vMadCkJLNdANcdUGoUCKZX3p",
  "key32": "253dYNeZ3LjSwHMpgwcNnYMf651BUuwptuyMAHsNT3HjCoto2ASY6KBs3SCLauFnbFJ3yfo2KhYucRPieauzstM5",
  "key33": "3K6z2TmGjCYEhrhntausTaMN5vM6GLTeRvzbL7c8y7zjjNiVuSdFq311VSLCWbHnXMFVcoYdRRauV74TcmZwpVfm",
  "key34": "4aoGiKpcnoyzSu1QyDAjjM719E17LC54JcAuemaJutu2Zv1GpxqRVFHEuhTxpTF8s45myMA8Efhi1rtZVGjzc2BU",
  "key35": "2tV6xmZPofds1unNsxEWLPiamcs7uQuWKcayAC7un6RUS5SoSC5Y9WDLcuAD66TDKjeei63NECEaSKwjmkHQsJ6e",
  "key36": "4CUnwNSWdJTweqz99fSNFuA8iwGi8KdhvLPyAtETH7tgN19wXrx7tSzxo8Z5iUNDZxE32nWiumLCgs2eugM6bU79",
  "key37": "5aGP3M1EcnaarmYc63ccz99jvZnbJ1Z8FWNFNqN6q8BMyi2fPHxLHn7Nefv8ZYSiRde5d8ZTwrsnujtxMfsakt6K",
  "key38": "5EMJweyyyJDV4CJ33vQ9Bpgaf5rJUUYkkmKTyghDDbunYzcdrEXMtAVLxUJus1MGvSFpxwD7MLD9afUtC7nR7AMf",
  "key39": "4ZsctvCNUyLrnRT6KNEobygsjtRo8NiV2sr4MAqioyqcYun1cZAXBdhb5NvSGdEpmThKMUyHyaBHb7edH6pZE6uT",
  "key40": "4S1fxoqHq35Zn1cvSvhr5WoYZLrTT6B5rY3jFzrh4b4gB88y1oT8NHStKFwmWN816r1JTu6qRiWFPW1zspGHhHdB",
  "key41": "fKrPhu1rY9BFnmu1ZbhANHsqFdsbhgqAge6XuTvuVqcAZGN1op781jGiYMbfDVsSHQERHuxAfhciKRVMSTYT6oj"
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
