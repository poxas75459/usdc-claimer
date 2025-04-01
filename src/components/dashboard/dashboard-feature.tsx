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
    "bVvCK3bBeGzCPN5CNGiYoqcUvipnaNEkSTJxjfUEmtpVKCtrsG4sWzSy4bpJjQDmZZ1Kbdw3THiE9WNKmKb68VQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "omAz24E3CwwtiQXYPr9jsyjJF6ExPkPZbdU6z36VkHqB2ESVmZUQBziaB5L9WWN24tchVcqWjyzMEBknfAh9Hyw",
  "key1": "3Anw53r45gjhyRy8KDyEShirgqrsxpwSZz6z5EGTYg2AbS4V779ZDbHcxCXgeuciKB48QAFGk7PZKyYBqR8wxkcV",
  "key2": "p5zEVsqQWbubh61zEUPeqQM36RjGySWtD41rNiBeav5GNNjd2yL53jEGD3CtiRrcHW2Ai1aHmiyLTGCA19Qe8Hu",
  "key3": "47pVS8r4E6bXkUpHdFg5S47rthDTLA1tWxuU4LjewT46PW7d4EanuE7YfNcCTdkkbKRTdPMNaL2bHnwN68oSxwJK",
  "key4": "5Br2iQe764Ew3rPYkVyJiN9bMas6AQTU5LFvJaicPkUpXPq83wfg6C9V6eoWKQqDjjk2YDd2aLgoPGDmdpjBRhr6",
  "key5": "39AsFCq2VYVH4DADP2L6ArRTkYBPe3fBybGMqyn8nqgMRZtRB6Dhh1XTV7J7D1y9aG6JVToAhrQ2kijN7Q7f8Hin",
  "key6": "2JJLS45vRe9gKbfw3Q9pfqxhuJRdaQmK13op6VYuNtvV4edjgE3LUMVkKH5UDzNbezkXB72HYLBwvw3Fp5252QMi",
  "key7": "53aELS5P14U3A3oK98RuobPwFCcejDhs5hPpTBBFPrDRWCckfrxSPnRyCV7WiGmoGtReAm9ny3nrf8kUCmL94oxz",
  "key8": "3cpoggZ3TnYTLPGVsUmuj3okuykcG9L1h62NTrrVpziVmiAubotZJuv7duG1vktYAgKXEaSGJbq9E4C3Wn5t6EHV",
  "key9": "2i7G7jTdL3Kt4MxJnv8Ja63aDVZ4Bv1SioBzqKPxXNi5bXGYn57Gnsu6FufWkdHe5RWNhonFX9NWmdhh23izemjm",
  "key10": "3zwWwCqgYU8kA3dU2XVQ835K5DEC5YQ3J8DdzJQGk1coUbFFDqgSBrcm8LEPHFciaZVnyimetbuGqUMdpVcQoxR7",
  "key11": "aUef5ud7RLki1DufoutzDXGcJp7xY6iJAhyAEAd1ed5qhGmQ2dHrtYcKqt9HKZdks74hNQs1otDa81CoTLbCfrm",
  "key12": "5VHRKpb4GxVq4mQWZiRsVENF1iDtDaS8vThQbaHbnfM3qkNiqR3AC75E9BJ3bKZ9eoXmsMGbTqjc2qnqAuW19Z6w",
  "key13": "46811hRXhrDqKnDjd5oJAegzXE7TgoW2ADaqC8hX2vTXsxaPsbNbMyPLNVFXG1KfNvsETLkkWmx3r5ceQc6DyQH6",
  "key14": "42ZiBMHjiz7Rh7DkAv1QGr2CtrKbWNHG869zuvy7RyW4mFPuhfemzJH3Pg7t1LNLeSS58WsJXoYierVTUak5U73J",
  "key15": "293FNeEEixb5ofXsGk7J5iTxMdJbV4pshuLBkFbyyL69NSEHd9enQdFyvN2NbhJTknRpthdqb192ruKyE6gmDYgF",
  "key16": "2G9izHDYAcGotk28mvw8hbi2Pv2TTWQVtAFspopnrSxLacgZ6xz4GwTscwuLcbEqp9d3b5uchoZmt6zgHDR4oo7m",
  "key17": "3FUJt7sppC826orZf1XYPtSks15eorK6URBDj55kJfcdGPZVjPmZRnmwoCaka1qXGBuvFJnrdTn8dYbMmeKzKFKR",
  "key18": "5pRbGkiFTbUxPk4VPGFHe4rZGtUVLA72Gcno5Z31fbGxMbAeSYewvtTMCsPde4tDkF4aTahA43fdwAhioyw5gYrD",
  "key19": "3hiJAREko3mzjW2fp9okYmqodCfZeasXptXUhGdcPhSMhnUVz5tfWoz1mPU9JZeFxDkrUVi41yBFpECa2wJXD8zt",
  "key20": "Wi7nrdXfY7LDeWwEVCJ4sT3sofcdrJGdHgbnjRJ1xAq86vUdbCtYipgTEW8iZXRm4vyoiq54ePTHZX4hhUvKcZP",
  "key21": "VTYKJ2dDSmEhVdvTJR1K3Q6YrxtsNr9qVcov61YzPQgjjFEoCwhJx3oJKzPFxc1dkvvmA2dgxio7fh7qjs1kHpY",
  "key22": "5sPZ8avYcZpcy2Q82q5Mvi4uv78Gavxr22vA16rWoj5egCSpTSbhnG6c3iEvRZvLLdFZmPyxPFjtKoLJLhDooFqH",
  "key23": "WaKMPom82oxVDME9nCtKASAanNbJMYsubU3P8YE5tB2SGdgXT44aiUoFU8vaDgaVv55y8zEsDNoCY6svqP9x6wb",
  "key24": "3uQqHAn7ihEB6H53g6RxVJpmoyj8VpY6Mpzj1wNVnFzwrhBkxjCChDJKZpVkxdKBFnhbF9xw6XZKyv4k1xNBAhkB",
  "key25": "GqYLNJWxeDSWdgTpDVdaWXFy3X9UqdpRucfPyLdgn62wLnmmc8rznsYKPx6E31FEiN9hTsqmwY6GDuy7vW1ibxY",
  "key26": "5kMsrXVYnJvMdokiWverXJBYhqGCgreRKswTSAQKmG9Tdef9DbzqRNq4n2zoh7B3FUNsT9WT3X7oKUjcH5hvYyST",
  "key27": "5Hmw1ohrEKULGRJWeEov7s5fqrL3pw8syYPnVpQUnex83cYAU6iZbEi93ZGyRDsij9usCo9mrCoMfKiMVwyZE4rz",
  "key28": "4EeCnMTrRpDmKBfqSgBt1LvdS6y5csL1ngZPGKXDPVk27JnGervSWxDcefjDousBMggx9tRvM8sGxoAXqTdKM8zZ",
  "key29": "N2aRMj7d6DuYCPRaHSb3ix14boDS129mLWU3wsWmcCLLYwuex4PuhohexyBUpVRmemmpWEckjVo34Dxj3ZPirYq",
  "key30": "23skwH3hjxxw8NzTpM6ZrMVQkaFqdg1UJSjSGqVc7iWqvFpbvnEGqcdNRWhGpEdfYyyRXA7W6BjiNJvCXCjdqMpd",
  "key31": "4mEavSBpkAvrTDA7Y7uFqS9pmYH4WNU5yGnAWk7fDfcgrHEwTch166tapfTa9fW26NarNBDqudb8eguRF2e1yzfw",
  "key32": "412AmP3VMKcBxSRhLUV9GkMRnwtexN5jyKnJG8SsJ1Y3aBGbBRKrK5jnx9s7vZ7R9PaUrZXFk2GDiNQdRDWDpumu",
  "key33": "4KSumj9A6tJVzr9AdoFy41eKGsjKiZ3MsRk3h5mvg21JwSgkBfHG8YDsJJoEnWEuuexUqAgnjDdkMSontCaMQS9C",
  "key34": "LxGthRraysaXmYgVJxjBjsVaHQj1CqJSFgRAbKbPj9cxjMo6xTEkhfwTR2oeeNQdhUGd5KCEppYcCwFqj9bGme5",
  "key35": "3GLdbR8EU3oXp9gLTqt6PsV5PebqDtM8CfA8kgNfoompVVLZoxMxof5zvGkj5PZXr8g4mYQty9EGNS2FSHQrh1SN",
  "key36": "4ZQyvqAmftsNMEBXyDT3Vw3cDiGprrcTuGHqo2dQYGpD8i1tc1f1CCgBAQKY86gEyshMYdRde4rRKtCKGmXy241J",
  "key37": "GGyK1qdXrmuDFsESrVu4tpJp2dBV5fi78qUEVsoKi78tBT4QLssoyzUf4t9x5X8QV8pNUPFnUJM4Q8eBeVooZrU",
  "key38": "4MA19VjstmF1xT56RfM9YCpTCTyauf43iG2hoaodHNgZFRfBMsQDZPB3Q4yyFg83YBrcZQFQj1pDQR3G8F5vZTyz",
  "key39": "oTJ7b4v2tmVKzZnAuj2eK9XvKgZ1Lo814BHK11PdJkAUS2HSMQuhdfY2kZF3WepscyfYSNxpgfii1TJYnDeMTg6",
  "key40": "3zryLebYdWXi9smywkVNFs1wJLU2ogkwDLqVCcUwFkqYSovwocZAG3iWMxAfVmCT45iNBSsePGPDj4zLPNsMxaVE"
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
