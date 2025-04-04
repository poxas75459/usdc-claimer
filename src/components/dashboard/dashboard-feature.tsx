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
    "4bXtHov3Q1SRWEgzRRnyUDgvuPAuzpXwDy6Cdu1Kd3bAXWDCD7b4zkuPmUHD98vGBiYfAQSYLcVoQquX98i2c4zK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RytS9NqGpznPz6NhLUtRaJ3cbe1cVXLC1h2qPEFii8gUYshiLkYAx1Rb2cD3HoB69KhnA8mBZcX6tus9GAFwGfd",
  "key1": "3GJP35Dk2QW5suKtDf8kCs5rrTRCxF8sDgQRVSnDARk3DDt8jGL3uKfn9r5RuFpwB4qp9sEYmA9iH6fjnsWVTkkG",
  "key2": "3Zf1UJcRC2cqKXQGoHbyopn1updAD7pjs9quQa5euB1ruR13hXvYKzbiXeZnMhWYE9MebmbwyUX7M1dU8b88tNN6",
  "key3": "5dLWFZuL6Xn3nS8mFrNSdiF1qcBYkVjhkRxXBbU4SzsbnwtcskR1fJzgNcYtuM3osMErT8LgpjdvC1ysm4TZrdor",
  "key4": "29vGXWTJVpL5EpgpSi6QuwCMuvBUPv948rSYdEoe44zpQVgb2DwZVhP5dyjApojG3uL5F7eTAHTLcCpF8xqqFivG",
  "key5": "mFBZzGJM2LaAYBHUeoJRZVnahDoJemHfw13BZvWgS7N3agusLKkPaToboceNa2gHV8kU7WMKgKceTNj2YnpHLGM",
  "key6": "35STG4VuWAY8319j7kNKT8pptDfQ4Nop9MHs8iW7XJvNJb1ctTz32CKGBbh1F7avdQFpkSQPTYDedpsiBVzx7f95",
  "key7": "5UwpLLBRQiw2UdbJmKJVUDuDK8JDnmanZXHxzpANgu7JnK67UWTfELMhAB8SGCeVfWys8wuC3hmV3aXFsTuZ3nJJ",
  "key8": "3FbsTucidbWNo5zoWc5qkurwdCrsuuLPWj1rbiDXKuU9H9vc52yRPLxP8hWvEk9t7N5ceYuaGXRMhVw2EhBCCP6E",
  "key9": "4XeRDX41nxvkMdr2dSHTycegwsWKQwyMzBdg3fyGj6QNV1tRxZNA2XggWXWiMAVyWAHWCEn3ZPCzbo3kniSEuwia",
  "key10": "AuTbhiTyGJqL7MsLuo7gkHFEgJzDHkMDXE6ov4te87YrvfhCLm1dv1o1qwgpj961FXHrundBJoz4oBsPnQpzWBo",
  "key11": "2fsvXBKhnJtAJvCpD91iLq6dtnYGgzSkChWCvwqU6MfY9QTc4KA46RwYSkCPaJPcVnKcdDWjASsdfAm319Pp8FFL",
  "key12": "48Cb5HGN3HVEgbyi1c9NpH6ZcbLkU9ozBKGVJZyKYuEhsjaSbgsCbJPF9CnKv1ZsxSVvUBXyJ9c9RyHbxHCV7mxb",
  "key13": "2NVhhAsmaf1amkFeJzwf8Chrow5Yybkwx253VyjNdgcYXswYttxuyDdLvUVABdkgD9jtFrknmybfmP4gNmLsgcPZ",
  "key14": "58G5WANARLEUfpxLEibSWHT7nnYBTvggeYh3y7dZXU68V1KLHNSgQvFME6DPoQReXvvfEmv3FVXzE6zrmKtGW3pH",
  "key15": "5uFivxQRipJReeczAL2nQzNwKGYfDP2jSej3ynpjCtfdgU8bvupP64G7noMdw81hrbk9FxAQibRiwajTJUR33gAi",
  "key16": "3ecPTXzz4zPDZebZgaSML16RKyjkbvZ8afimdyW7UGnohHhgM34aEdxDDUf2cUcpnRCeyfG9o7wKzLaMtTVyxfVR",
  "key17": "5r4nhrKzRDTN3Vx6MSnYdUr5hzNH2EJorFtcXjTKdjnaqrCc3qarw64cJH9yRJ3vGEurQaaZzwcw7jHL5rvxK4uT",
  "key18": "5muivZZ2jUov8NRM7C773PMQY47WLFxJB89X8gHnZekso37xFiKXacNikHSq29wivrPBZpww5dtbCJzyFkxotunH",
  "key19": "3BwwH2twpX1edcxzyPW2XvrzHb7BXibux4oEAKjCtn7RVdv7TxXYXdsx4Q7zJszS9dJqAgFw4zzN9LcqtToSsEpR",
  "key20": "LeEnTfzfYqAxU9GPuLKDEAsqgGDFToytJ5Rr7EictqvzmsNEtXnzAQFkBYrt6RaZCbCvPCvoXjSgwHs3FsLJfjj",
  "key21": "21D7VRdT88eeUHTehJpnLisnNZcrVZKmNzbbtVQgyVNMj93bCAniDcV654i1isycVKu8Cqjoe3RM9dHTTUn3UmfH",
  "key22": "2UJXAhQ7QhGJkjQ39XD6meUA2bhDRFF39W3sQzcZrd3zdP81z9gCZfuWBvBQvyVKeL8aPtn7cbKVC9P1nE4PJQin",
  "key23": "d3ALcGnZhmtAMBSQZXxC5P6m8uJ2abHR6ZEn4gUVsn96CN1gmM27NSvjPgWKiadx8XqDKhuCccfhLeSpkaBqvmP",
  "key24": "4iVd5EsscKbcLDXPPGJ2FoY156X59QgPdCUSNLaJxhtGLwMVoLyzqbVZWVhwotM5m3GkoEf3fkFkPKPwXVybL9NG",
  "key25": "4LaEwdjKbJ5yLMvBr3FXj8Sg1Latr4pHss5Jr1yBJgKCJgt6Nhxf5c3D2TNtLSJnGdrSuiPrbjuk1rVxRop5ti6m",
  "key26": "3pPafhVYxX3k1YKxB98fsAumbRsZuShRHUpF159dgAfAw1bnh8Eok5jEN1xgjU56R16yX4WSXqiy2X7FdJkbk2fV",
  "key27": "5C5T2tzBtzLgiogSbQwXgy47uahUvwqG43cQ4WPKyi4Z1uRgrUb9YRXBE1tYkFeZbgiL3nJ1M2rte9YeKhcZwtaB",
  "key28": "XR6WLTLpSHWmoFrAKkrqejrdAf9xAKdswhLjfj4cZENTK7dXbzwUmRun8NnZg18Qi2NGZbHWybaJvsSPgQHGcqi",
  "key29": "3XzCTEyMXYB9zWPZf4iSeMFcuhEccHnsbLd5K2fFJtijSRKQSgq2EoLvS79enEWQTGEH8iVfiEhFbJqnzV8tLnN8",
  "key30": "3NnfbJUiGgUs5t5HbSY5WUYxBR5MCqSdvCHy35jdaEhXzXgwmah1CJaaHNkr3HWuz9VP3LhvRwD17PpQfF4kp8WW",
  "key31": "3opFFFvMHj9gac8V7i92jA5jqop8urxMpnFz5Kr61LYWYZ1ryTUoLgXF1qppxQpQDmWmLYixbaEnEgpvvEJvrtEs",
  "key32": "5T2wDbbbEhx4unJqJd4CoRPCqsopkmAw11eLMHRXEQPL7F7Z6mUmMxPvCVt1hqdaDesVUdCUUrzP7FTATER7ffeW",
  "key33": "4V6SnKDgFeRjFvdjx5CVwr3meR6UziAjGQmSEZhEZLgR1nY8L8wyEf9TrqT6XLhHkpxmYufjHaBWWgrErcimNjx6",
  "key34": "2sdte2WZnUg6uL5FVQGMcSfLaB9AwKeJ1RZ3TkTfGBGg89LqJ7ke2mU4UGHuRggGmWKjqzXwk2UUJFQksNMimXMK",
  "key35": "55qjsdJp8U8WDR81e6sR4X7crpp4U2uCsNQcfFcbTh5b4JPKpxz8AiPKYGgvoPB5EGgppcf41W9fPqSbJWBTtGNd",
  "key36": "57rk4NMD2xTJJvheSGt7wWdZx5jUhLjDzfrjavRMEc6wwhQ2HsSZCV1eSmebjZ5zjs64NNd5Ch4WGVNCB3US1jKt",
  "key37": "4SQ3ZGiKMCVSA2khVCDGxnNwe8LQqJW2fKPmqNRLmmQ7WsQhrW3qoGpkWZFeRhQ69zQRkacKbhWhVTGiVP7os45w",
  "key38": "3A6BAGiE1dERT16mUAAjBoKtwgb7s4eyxj9X2JhnMWyy3rDWA5fPmrqK9c59U7KByLs6aepGRDTaUGJrRbrfukP8",
  "key39": "4YtZ7n3YZ9W3TKYPhcNzaArYXM7hWpt4de3FGmVnsRCaWUDVs8fpeg5QSiLCTzuAQgni7B44jq5JmRhzcmG6zJRv",
  "key40": "598mPJuV1cdidiFRQtcmmRFDBsiU8gvz7imAK4uXPCFHaCwwByLhJX8c8UUZjHxU3CKPEvXkXjEsm5wMKdPGRiec",
  "key41": "fwWjaopnqHbG7ZfAgS9rHDSSpFsiGTJuVCZ9FxyHme11Q3EHd1iab6cLSuaB3S4aEVzUYyp7DAMVhQP8sVSgoKD"
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
