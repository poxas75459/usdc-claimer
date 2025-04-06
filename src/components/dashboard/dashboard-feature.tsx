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
    "5axYmRrG2vEttQsjHxv4Xm9xr5WG168VSHKeJxhuPJj5UtBHBg5T9RaENsCc4jgEtArELdsX1FWbh6bqSU18ngXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4soqRrC5niYuEhw5bU2HBpoP4nzH4UVHcvUJUm4eahWqxZWMK1Y7NdxQFPuHz5t2nzVJFuU9rMSWmhhCf2u2jcPB",
  "key1": "3ATv1qGdrsBBvjCraDWWTjgbQe5D8zfALaibKoGjGBJAByakuSuKncSuuuyyPX7xkQBoxVnMhd3VqD3bsHdASFwC",
  "key2": "3v1u76e2DPC4BUU3d56Vtphrdh1zoRXsGjyARZhCzSruY6TsYdJXeEsxdR5HSN2nwZEbCuqHGUoPfQfxP9Xw2X4X",
  "key3": "21WikzCq1ANJcvRz7XvdmdJGiWXCaEiV8NT5v2FbMEyoXmYYGzgqPv6nG8z6XAc4qx8geWczR42D5eK61sBbFaYm",
  "key4": "5WyBE8T6XqJPFsECQGcESCfKvLhswi1KW3hbbgtMHC1vPP7WD9Qe3oSfLmdaAqeRQPYw7NEyL5Cnwhb1J6rggfhg",
  "key5": "2M9Ktbq32iHHE4W5HcTyuH26G1Cvz7odG74gmjFZuKeaSbdXDt9ruzXXc95Beg2RM9ztAvHrV4ESHCmncoK18yPW",
  "key6": "3jr5xror6MjuvNNFhTowBxpXv5LTu6ta52p5FoFJeKsnQNvUpFrPgARmPZ3PKkYt8Ry5gcdR8wnAews6sRCGQAUW",
  "key7": "2DU6CLR7b1uCuWEF4aGC9rkvoyX6WBcezuR5YXowoQK8Svhwu2Sfu98JmfxGHv7Ad4jUQTxhArDusxDr7kwrGtm9",
  "key8": "3TyLtVARV6QtGsQnvkXHfLJ1YXVtPsuw6NiU1EJWyhzsHotR9whaPttSgkm5M4QdSw9mz9bJUb3iJJpG6pjTiDm5",
  "key9": "viEtPQ3rEA5tes1ungH9VRbSVm3VM8p2vTYeWeQha2jcnL4DyDmUPc1E3cBGSNDSQktLK3mgoRyruv7KFAqZE2X",
  "key10": "5ANRwTLaNynduZpidYoacxjKZbMtq8fhUpXLKKNFsfgFhdP6T4VbDEwm6fNyfPd4Hxh4HdK7dGvcN4k928dTtW4",
  "key11": "JS8tjwfr2D77h5sBZKAdJC8cS1A3dpNGTJA69KP4W26JyUtpo3BjiEDPmvwGrG9YF8JJ4VBohdTcH6DA8EQmHHd",
  "key12": "48LK6Fpv8Eq4Td8yyWYx4nTB8es5xaWTK76ktdGeoogTaXdscia8FxWaeGJXiR1fa2cEQAVRfWzwiBeYrkiN7dQu",
  "key13": "3cMET8nKsudLvNfiMq6ursLpgMpeaAqhVyLbgRUNTGPpCAMfhb7MQH8a6LvP5DAww1ZRkP6VgrnAEmF8nb4yfnC5",
  "key14": "4nDeVkJC5L3oMXzRLmHon2U5cJgUt5Ps64pp3Eu5W2bKfAbxvBW1ogiLqfkkHi9JKxYMYcMz6XsGrJ8dzP5iRHqi",
  "key15": "rAQ945gj9iGmhLBeWy1JWWSR3BWXC9ovtA4mwmqXKeHpx7xSVboMKtfPgHPtr9pBWnsnRTujHyHDFgVo7AjLF5h",
  "key16": "5nTuDzEVgFbDpyJ5wfV65UcjsCv6YkMwYCduDxuCQRscYGDNzMpCZp5KC1H5WUS3qdTR3E35yDsuuwgJyzc2xYHE",
  "key17": "3oNz86uoBrNFUJTjAagfJvVg3gykoBHPzy9yF67iKWTPzgyCLML5YKDPVA2AmoD2ukdm3RCKysKmKRyga65JKdBy",
  "key18": "4dQUC1JL3jGzJBKsgNatPHL4ZnBsQCHoELCEW57o9RHwTJiiyJrjVue7NnfJGhZoXu2DLZqcFgUMc5ntHQkgjhJw",
  "key19": "5NC1mDDUEGhrwQSbjG18HCUjB2Ey5vBeedL4X7Sefv1Bb7bWB5nS7gDMvygXCgHz73VMq7t5AzvY9aBzeL28quvE",
  "key20": "4XESF1V1rCmuUXT8EnWDPnKgvbrdegw5Y27y2C1zjn2hkUcyyuWZbRs1cN2FYmtrPBLu7gwtuJPUjVK7CwtrfTst",
  "key21": "4v9DNMzRbi6m4ZJnY95WzieuZNEkr4K9NGH3oA4XxF7RmLnZ1vaNgZhpPz91KrJ6k1ZYnXYaK4kGr4yEu97B2gba",
  "key22": "4R3eK84SWz4MiWXzX7mP7dCWRDRHHShjJcdRk8qMGZumNwBaLaPvmTL6SdtXFw64JC7DQvzh6Y8PdJj82UZ3Xnsa",
  "key23": "3CNgpwfbZuwxHzBtDPGbJo2NqtZL4bhsDUsJevcfGZuuNf97JSG8j8HDUodMDrKX1fAcGDgA7qN4sv6R6D9143Uc",
  "key24": "4fpjY35zr76EgX1P1QHnCxwnrQceTSgaQZuWqzzeyUc1zFVprVTEo9bjNaLtsGRK1eR7viAMpXn8cWHcLdtMz9Re",
  "key25": "3hFf4ycR2ySUY9N1Vw92tdAvhGAsXB4BvGg62Swsu2mX1eoSpNZ1nJdXwEdQTieTF7NnBsCuAjuQo2PvBAqH7ugk",
  "key26": "2XZ6SLsdGR5qg3vvvRHtmu4LRZWHviVD8VZ7RszPBpihtz6FXhdufsAVZAJtWep2Q2Y2FroLQLdFZaPsRdGgi7YH",
  "key27": "gbSfUcvQiwVdRAWWGEsVYwMcFGjAXPKzUwqMkyMf97JQjVuRDAcbWYkpyVT9u53UfotAuLVETb64iejDkac11uA",
  "key28": "5i23TvuuUsoo2eBBr9wXjX3hzW2FFaxYjDZr41yK3mb7EDdvsnbCe5TTFyfYueVUsPWEDsXhveR2m7XvA8ASbNLz",
  "key29": "2WGuRy4p7NB1zK4PY8Y1aQjzB3ksh36VeE5masSwcCFDaw7aiubVNR2m7q3PKfyD8zJXHQYWVngMzTSX4j6UcDC7",
  "key30": "5fcCTBpGGKWZg2U2axknNLLujf9j3WLjCSYYXy7ruDom3A3o7BwipXJE4vQyUcWhYcV1ZAhC4ptFgX7YvdsmKBDb"
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
