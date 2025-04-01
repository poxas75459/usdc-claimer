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
    "3yLwuaEZdZLB6Fn1ew5A7VPPu3M2o6cuPkDgm8So7Aja1HYZFNqQnoxQTtEAWy9Tx661JGHXv6n8AFB2vKYNJc2K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rueGby75L1Py48U59os2hAMURaz4qb6tMtwcyopVgdXSnEFCSe6x6v6z69azYbPivAdkXMPgbPiq3zr8DWqdBhW",
  "key1": "3r774bzwH7BjspPszTfnMaAx4L3dL1YtXcb1ruFa1pMbdt5L7HfjqwoB7vzWh5w8pgeHGQFQY66mrg8dGKLPkXL4",
  "key2": "2pi591rDxup3ifnNQGpfAzsf4xauTfCEqzJvZKy6iXQ5sECVhQqxtAADiGBeKGtcT3rRDbQNUQuBwPqTb4su9BWZ",
  "key3": "4xampHXLa7vHXpjKwggKacq7wdTm7Xg5D6fHpjSH2vdY1YXrnEsyDbPKqMK6Ls7fit4qx1LkRS2ewP1556XMkrbj",
  "key4": "2GvTLYGbksPS5qGsUZKdgeoJoLCxX7fTJgSd6PRa9TGoGtzgQxbRaVPg3tJz9tgWDbHono9opurFD4hb4F7AtqR5",
  "key5": "CmW7pq8tNJSPUJ9CKmDnELrdikxrG46B8Cj3TUWTjdiZP4j8vJUS3ZNbAZiS63yNMZEVzCSNLkfs8xJsRRsr3ZE",
  "key6": "yoYxXXkJ5sdDcttFWEXd2s8NpTKj4tHJ2DStkzUpzWTfkom27DoaBqpQnUfRY1woXJKpRpqL2cTPCbgdH5yRPSi",
  "key7": "3EKyCuuWZNfpypKo8TJ4XEsDRiKQwF5uuWdeFBr3QAhWzbUX63rEvvu6YBpGyGEaCitTf9943ioyX7hRubQyaQuE",
  "key8": "342tBhG6NgRdLTdnRAxyNwmqybXTK2QGdcGFJzdHuvCHh7z839h2RHvs8XFsbvAR5tPVn47MeE3gfiACCzX4LbdY",
  "key9": "2kPhYuMoTB5HkDE7EikW1Bszja4D7ydLarjcRESRaJFupqUsuZ7CiASp8171B1uuph3cajWTyNBsUJjajQkLSVJZ",
  "key10": "3mEuivTvPJwqnJm6bVA6QvoqLBrrCsaVg9bdLvt8SnzFD3k9QsmVTqiY35ss7hszxfFtGQokhwsMkbbJcViTPZgY",
  "key11": "5tjHGwHyBuseuwmRwKtn3EetiEtJLYbDap229v7hgjLGrbZVs1Ypzzx3NhmwjCscmjT6BBy1YMAKKVa9LAtwscp9",
  "key12": "3Dc3tqffC3rT8aRopnWkH4Ld1xudPUtjiTFFjRndtJAp1NNBPTFMXYv7oeQE35E7yMnWfjDJYH1ArTTpRGQveKsz",
  "key13": "Rw3s9voKkonPbvFdrry8XXBmbcNhGgEGdLi9Qzz3zh3kJ3HDVHoQRQkYcAQmwBgd3VE4aX8AAn51cS1i6UtmWfP",
  "key14": "2MEzzximdjMyuFekbDL9BcLA5RBEYbyQJp5KH53qV3fg718gotHaqpu4GN89RdpGdHBrQR21F8B6XoY7RHq6r1Ct",
  "key15": "2x23u4jhZ7DYBRQzujmZay1Y6dLLJ3fdujYXps2mTJ7vqMSCzussVjwnV9mp5XDezJXM3ihdZW38CHfjhqkyVwR8",
  "key16": "5qEb3Vzmi3Dux8XJT8qfJdvoMq1YBRwZLqq26ZGwwBzjTynV6X9DPAB7eCsPMcMD7VmKNqNfJnhBWnEsc1o9Ab3N",
  "key17": "4RsfWAq3yRRQwSN6ERxXPR1A1KhvnzNKCVJqKwxpRL6naCTXpFyCP4EY44Sf4icD9bgNSmZrGTWi6chXG9dHtcNn",
  "key18": "2BUFReJ4aHB1qUc8TsZAbEDYCvT2waNgXS5tRzZow1rNiBcjbkpqSYS2SscYeEEiQTKKhrivDFFoCP6mwayqjuKi",
  "key19": "5bsUNC9tXpaqBbLcFxx7xzY5SxycC51RG5upxthbB3t7kVZGKC5NGrNyFsTsRcHSWrATcxHmfpn3D2zL8LVN7zQZ",
  "key20": "24xNapVGqeBgv7dvQPBqcQ68gNyGs1q4urcXHWbuxF3g2RESFmX1ra8SahAucoWsQcW6ck7XM93iCyX6bNrEuYtX",
  "key21": "3Sd45LbSkrx2H8e6hDv1dp1k7wuE1aNWJcR9VCnyK3fhWjuArZam7bw5EkhfBT5sjwiV6MMuCCBphzmeawoDYHkT",
  "key22": "24mu1fXLq4oeW8X6eoHfKZYwjK77LNTPMgnj8BAfxe4aRpd9b3UqXrTCZvXRE7TLMT5opSCjEgdzczkixhgU9jmN",
  "key23": "5kBdSc8vuqQZEcizBtoG3LUbJjTupGzGfjvFJmVXqeecme82Ur6AcoLpgzvDVUKbhWx6dsrDpkFn1hu1upg17EFH",
  "key24": "219gDswcs1VHUGm7vFYqnL4yoMF6jg83mfPD1LyvfwXNtQ1Z87N6cjnMTDVEAs8QKoimavYNYnMjnZZmuDeryMmX",
  "key25": "32bxjtApLwwZCNEu9QH3LZCiVEPbV6BCFYHRJLvBFF5nPk8EgcGrp95J7WnwqTfudiKcVpAWxxyUhEBktR1rx2oa",
  "key26": "3PJAW1iKDCh6n2v4SiXLNCun1BV3noPquoyj7HuuzHV9Sa8ML6iQvJgXpFKztsBSaYktVgQaSTNUimRhM4aqdb91"
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
