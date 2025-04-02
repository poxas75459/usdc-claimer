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
    "5V3KyCcyH9fqujsWhyF52xkVWwcFoau6FUZwBDSVD2GdwoWK87LxakuSviWffUdoCr4Z8kdHTbFviTfU3GiUDQ15"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o7m2GPgbjmEzXmmPXVTbYSzsAswuV7wHRrb4qZ2f81BYHfZviipwCrgCjahDp5CwQcMEE5EQeEpbrvWikPryjGx",
  "key1": "3CkXMFLbdWYEijt8PTJmNBqvPZa76388ytC5jkjVgoBaKgifuiYThVAXvHj6DBVWt6TxUnftX2usdcPQUpNT77eG",
  "key2": "3BseyZWZCSYh4GivzdWVV74gcFG3AC8sLntkm2JZMy4rNeRntEScJmHdvRsqScfXziEANXz6SGxPJkpNEmN9E5BT",
  "key3": "2M389XUwXxrHAWx1kF28qzUob9NNJniLbfnmfuERVV2YA1GzAZ6ej1xggzCi2iS13YGq6DuNYrY4v13xT2B5j81",
  "key4": "2Znobm3Jik3edp8W9guPYVpiFth4CDBduiBv3NXAsX6Tk49dixEgqvm87HF8iov94o5s4kp6WAQ7pQoD8jc9nijt",
  "key5": "JMhstCVoziG3C4hUgDbhyetMQ7xFbj5TZeYoZbwpCN6tEWs1ZaC5VkmcinWQaS5WkuZxv3sFsSpt71FF766ciFF",
  "key6": "2jkiasw4KMqKfcDmKZCuhjnbauKsaRZekUZPqnFmcZE1bWbKY1vcZKgrydLSkRoS3TtsAYSeexqim7hqdtUhKGKY",
  "key7": "2iCEix1j1rLnuLk6XDEiBu7JfdFkK57HJeL7AdwokjJtCnPTp6Nfpmycd2jV3GBPkjrzpncvQvjE99V24Ce5bymT",
  "key8": "4S5WSmsGhRRLxvV3nLXqc8EzT4omNcir8gfkrJBdfDwjWS1gVsuf11EQckuo49GH9wmFBuNkEnkycWDjBMW2Shih",
  "key9": "3mdPvCGHw9X6Zg91tHjPDNQom3fZL8DWtpWKL5dYMwFBVvfqS2oiYa44NyUSRiJnudj2Yoi9rGoSc8UD2onjT8ZC",
  "key10": "5W92neTpshrnQ5RXPvDmUK3QhTr8LqWSoMgtdx9kTK18Hk3iyK3YJPS7N3MgPunbGpX1SmjkiKT4ZiwZrmr7V3mH",
  "key11": "51rYqxrAFNsQg9YsGjbxQPVhwyLysN4WsPe639B4NmiazEQkHVDUXt6fxGzLYhG2m3NsDs1jKuEbKcF4DtgcMULQ",
  "key12": "3S2E1DmER3h3Jv3mhwx3MpymhipQ6hYkaWKJunhArNquARFRaQ1mF93ndmgoFRoQWyYSKvZCzSYfVJCsZD3RCeAh",
  "key13": "Jun9wi9pzgXK9QnTqsh1uZeyLBtN1J8q45jKGLKAvWmExtRHmQ32RRhoEVEax35tg8xD7Kwf9Q6PcF9PsAqH8kS",
  "key14": "4UoNYBQdwySjWzRhdb9znsDteyeUk5fvzrvr1vcGML6adPLDeygxw7o6xaQVrA7Pv3v1FXok59arHQumGYbMc4AQ",
  "key15": "2UtGPZVYqrA7JTmBiVdNcQor2vYogYgGnFV6Zxux6iqB1TYad1FJFsyR3rZA4dvh8HU6K7aQPXfPoMeAEUDUN8zp",
  "key16": "2FDp5GAy4jKXcHQxXgwxRWhRZbXq8RVuRznZ3Q4dwjmJX1rv6cdGf7uVnJuU32e6qR9hp8VjCVPRPbpF1s6JV6fc",
  "key17": "3yBFi3MV9awLe7YqLiztfbsujxFj6zXS2VbXtiJsACLS9x1VUjd7uiVoD3S8PSvtqgeMhPUhpG2pcq1nvqZnnzx2",
  "key18": "3FCd6CQv3ipjsoRTY5vzBEX6FcZUeLeTcxrJoJvaHS9Fd8FzZb4idZK7t1omUy1ApyLokK13NyJq9wekvq8ax5Dx",
  "key19": "3j6N3o9MqSeW3Dp9czBiYrvX6YNg8w8JWMxUPVoxiQ1jWRnYd1MsnyhGCpVAeQXS3DuyGtEud1SJEoxbp6QdKkFC",
  "key20": "3kL9HZQvLV2dDqkFiczeL4QvsiZEfA7T8eds2hgh3uFCzLHK9fvQTcvLCMsYtN4qkDEoFvsy9Jo2BbUdxEhcz8nN",
  "key21": "5X5HJk33WsxYVYRGjeLwQQKG68o7iswoxinGp4VcvkJNnSyUiTw8gCumRxCRSQbToEp4Mdnfz8DTc9DFdX7mFYdb",
  "key22": "3HQQNy1JNXgxTyf4Lw1LMe5DkqtQ1w225YRyZjirdmCJ6jMT56yJai5nwKGaFWguoPqJL9sZ1b3pMFiB61acKCbZ",
  "key23": "24a23Sm93EEvyhRq9akiGKBzcNmPiRKcNR618ghzdYkf6YYVyyJd6n6rNJ1syxFi9oGF5e3Hbt6LqV28HWyihwRC",
  "key24": "57ADL8x1MMFFvJzrZGtvTeooU1R3Zd73tYexFnpLK8wYYPRNyCdwx6ZBcGGjrK5Jd4cktbryFye8kKGGxW6uMRc5",
  "key25": "2APD3Ds5JtdkkDMttKtw8A9npZDoUMJhc7dGCcxGpxovcxPpEiCtZh9k4oDWdt3QcbrFSWCbRZXKv9UzTE55n18d",
  "key26": "fiAhvXYUzPru5GAWCfx6fMxoitNvso1TbrEvbLkZ3zDc3uDkgzGa35RaEJPo3xnQ3QDr5jeZYENzLEVsHGmeUXB",
  "key27": "5QfBfHmci4NaDMjyC6y3oJwkPedygeK23jRP8eTSduhVmqMk1YNr2TV9M7Cxm6LJ2B4pqczKNFFNksf8L9e82mt",
  "key28": "3kytjTvzvPf7Beheubb3cEfA8SKzj8wqPzKFPfbGkxr6hHc61PXwcZMN67AB3gnn1nC47cpPk7uxY53nbp8W5A9p",
  "key29": "6XQDtBz2JWasz2hZZcJNZxcdtPs6X8qraPavDG2A6NYuRLr76tqaAkdMNY4ePDRUEYHEcRqASuGaRZJZ9boYKQx",
  "key30": "267afsTwz2ZY2zzGQkATxGkTW2uM4B7Npx6TKmW8Ecuvm7uBw9jwyybt9poDii8rimQjTkd65L1BUGqqnVpX5ktG",
  "key31": "5Yq7sMK9njund1UGuXFpYZt1UKpuifjmM27861JMzEULVWhB3uUZF8UM6tbqoR1uAvzY6sAxbQd2CUyV2DugxhaB",
  "key32": "3kei5B2YKKc3Qhu8QHgu7Go1cyCdABM8PiyeSgkQZ1Z3zDe62QXwhVeC6BRHZoMBAxXcnvQCAjZkGyah2CutzNdx",
  "key33": "2XzDqzrHgH4dUtZ36qn1dzSu9wvRdB5QszwyFtCcd1EHWjNrtTKZEpWSqswf8KciqJRz4yTcRV3Pz1g8iJ8UUeH8",
  "key34": "61ZRHsFxUsqTEd3uU2LjKCYwDU2udFJd6wT9n9tsF6ec83pJ1BEnx9YyPsKC8Uo4jToxxe9ExiPV8jUrCYAj2nH7",
  "key35": "39EKynmmFZubB23APz6hJZF17MseXH9Q2gPCVibQUMubn4c966nvKLwYXh5etyZoWTywsQoXQ8kbZxvoD1G32ZEP",
  "key36": "5ycrFbBn2qfvsCkKreo3qiP6yDM2wGPqFzSAgdbT1sYwYPTmVVLgt5m45oNKv879zACPFDPFsSijnX8psic6Fhn4",
  "key37": "5x1anWKAD5gZnDuag3HESfxA5QdfiGMJyfJH9t5y2MNNpYuRomC2ZxH1Rn5z2fnkB6MWcg5ky6jVwbkrysBpjEfd",
  "key38": "5B6Fffr8QoMuRfdbU5nXetURZ7R9Kka6PVrxLBAaJeP2guH1CuMqwRGmURV6ebufKDpRkTj5iSNk9man3fncF3yJ",
  "key39": "4HEECZn5Pqbzrjo5X4Wxr69a715PeRM51GYeXRq8P3XwnADmygVk1CJVtCeCnGwKgoFFpjg72DeDq7xtSjLnXNCG",
  "key40": "2dvCNDKuvS46V2HvKTdRF5LVKwkDP1XXDpceig66kSgoHuzAWsawiTiYjbw9pqDVJjKiBKTnaD9vq7gsLUeZXdBZ",
  "key41": "3uVAWH9PpqMrgns1VFj1GqYhCVzKDHRcs9JHaWp7FDBeR8d6zUfXKuq1TNdKPJwCDEvQYm6qvXGbvr95T4RDx9tU",
  "key42": "3vd3uj5U8THbKG4kdJPGzQDcmUJXjtgTKbCDxQ3uxZchAQecZBxGymFW78W8CWFmTd3smgHqnMfrTCC2tjyLwPb9",
  "key43": "MdEbVwjo7WFQbwafLuu3DamEuT2FLmU8Gyvyerqs38XYaFjgUxJtfHHhPzkMWwCXL1Fwyia6dofEHcm2kctTxfB",
  "key44": "3ZwLFpBjgrDr3Ve6qp1dhqyYtRBn9sCciVoJ9coMVA8yrYEgCcMeTYuRBqBPBTJpmNkBH8bxTRJCNJv6kvA953Mf",
  "key45": "2bASSvwjNL3bvckTUSzfJftr3HELN3X18cSTK314Gr4ScY1fb51u9jyfMLcB4yMXSepgUtdz6hVN6fW39cuxTaHE",
  "key46": "4MCuqxzgrbNdSuBjCy1tAi7hrTVqcqcty5Kg7G4c2SFBc6puBdN69P2eTWB7vAkxzAfAuUZGo7HLbWsk1aaiya8x"
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
