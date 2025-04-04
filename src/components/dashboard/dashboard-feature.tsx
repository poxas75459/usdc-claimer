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
    "3BUNEBE2QHvQ5iEZhwMCce1FvBvRtwT9pq1ft39KMcVzprRsGGmobT8niNQtUvehFKw7YhJhtuhFfyycfERtA7QV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34vPcoMi5MsQTGXA9XwkajqxibNqmoCG2uagB64tuHEBXiSSw5mFWKygf3QhqhTaNVSmzToDds9Hfp6CKy8UKRkT",
  "key1": "NNx6mjR3kfrbzRwuaykPsiaKvvrXLiWuvJDxHAnuRZnH8TyMGWHXUAX3yLSxj6iLC3K8FTxngBUNiqY7rqACLmn",
  "key2": "2UbKSeQ3zZeJ4tExCPhRwJj5QCu5xY1a9s7aoWPRiFyqh9cyLR4qxT79DJvzDpucxBj6Ja1zEfmoZzoYH6Uh5vZk",
  "key3": "37YP9BMNLxFNRMFTqrVsN64nhAZUG4NxZg5k2MN8ee6MXoAro1NqxP3xPCTHw4NvPgLPNRcT6K1n5DxLhvZx58L6",
  "key4": "5S71HvRKvmuC2vhQ6adA7ciYDXDKJWqRDrPCwG2hka5LbmuHbuTtTAmU3W6Ghq2ctJqYYxp8NqNJGovAqMDyPtv8",
  "key5": "5qSauTABGxp9fCUJQFpdK2dZ9o96WuGxdvjYVuZ38pwcMkaQkVgPMDDbjaRbkrBVWhfYZDUXFNg9UzktsDgH2h9d",
  "key6": "3j6aDfG597mavVPHYDuEMYrLdQQnJpE9sT1fYmxj22bufCaEK8UfYTQHFeWu8bDKRewjnLivYy4TE8WH6HzsDZqP",
  "key7": "2QcmfUdoK9pEP1WwAk1S1d9c3sgZMgykndBWC3DtB3AHsLjFn5xeGQLq7mx9sFs7QjSGCqZB18LKVXEWfqn6YF6H",
  "key8": "3Rm1NYnNa6rg3Z5hQXHiiBK1XUJ5CWgzmFBYX38TdcSzT5DqRPxbJsScQCDPFiCkw2WHT3umig8nzZzSx2obbH6g",
  "key9": "5UvatRcnVpXXK1Ach8z1xLBJ2aMqVwvK6GYxR26rujLSwW4ttaSEVPhZ17uJAwYazL7kNwSPyt3KoyZdrAfefPcK",
  "key10": "2xmjT9rP9Thfj4iqgKvuYUxgsG1grFENonRXQmczNCCjs84PVMiwrvMmoEdDGQpQSn57Nk2Nv2Y7z6wNBXkSy9so",
  "key11": "5Efq92V4AbE4ZVGkpr8gHtAC9hYNgjyAVQzaGa9GFP2XLNjGHR77WVZR2E8yBbcyzoDYaW7DTTdnSGLznNhDqHNn",
  "key12": "2FPQ5c5vfoKsWbRoZcxcSNacEezMRS5hrGcgsJGsYYrQERQ8Dvj8dSfEKftypQGEZpD2JfXKDQFCbiHjEDUz5cKh",
  "key13": "3rANbgopuY3YCYev4qjnFu5y5wFbpo1iC2bGzoFY4QazSgGeHkPwqBa99y9MfVT3q4C4Kzm72F1N2VTzV9CV5F42",
  "key14": "3FadM6MAg8saDt3RV7de3D3BV8hYQmcawnKQkrEwZSNdDoQuXnAcWNbjY7xuWcHKChfUJe4ENtTtCMsKokfgjGGi",
  "key15": "5Yvpr3Na1peTStcwvujkDnmvmXeFxbLgsoaP1igJzC84YrjHCPUvf1YqLDDCBJy7imuLJrE1UBUnAtxDUnM487jU",
  "key16": "uBgRvhnqXGADskFrTLY1eXLW4RhK7sk1uBFXrpiBu1WvcbQJctdBLQQzJRxAAR2tKRPP4DZxTaCjCrFzjDrPBjp",
  "key17": "5hMbryjwkbzpMZYrYUDgGSEgzKTVzmoYRz6fTKbc5csLtpcxPTpSvuitAByfvbwm3Rxz2EqVS5XRkrrs9oFpQkQf",
  "key18": "BjzmgyHVU1z81x3K4j58UxfZnQGyoddRUNPZEiF258av1Jqg69mgiDAxcekdj2f9vGxXWeiG6cPpNa6s1Yd8mNL",
  "key19": "5UrZLpXnK2ZZoFmFV9T8a7rtdxRAiuQ323ViVFvJfssDQvfUvFYpevvgjRXHj91BC7ieVrRA1XfnHvCzFRR66i4W",
  "key20": "3tSU7jLj5iNnUBMgCQL6feFnTyYX2D9dbUyUSTXX3KLP3rfjUzXLY8RHi9oWw86Ao3cEH3fuQTA9AB65ZBBbDqe8",
  "key21": "2cnvbdCTwkvFGWmTyFp3bciv1e684a6dMWobLTqhQtf8zgxyyuXRsp3aLV9F4vdLyvs88htfVdd7JQw5bResgpj",
  "key22": "2KTYJxabVp86mNQguTpMrjPsbrNKGLMkcQLbTSe5LHp8JmFbEDA9aF4U7a7vmjn4RYp9mJFDvVcZE4qU2mP4KoQx",
  "key23": "rVRR67tZZuZRbxLSCJvrrAkLLgDLkxJm5n6MxiyrJ1HwuooXk9YoKx5mC37fNBkTc9fLyPXzX1DcPWtzYMmToxH",
  "key24": "64qCERtMpS4Qxk5mrz8TumsRPuJh1dgnLGBSezckWtxei7mZRTNg8BJLttMc4hESXJg6a36PTYsoJRrK5bPbSmzS",
  "key25": "3Urrp3aQXxtiLjohJAz8S3KaXjUyBtveg28EJe6wcsTfN2fXrMN9ew2dF3oWs3bL4bmMizLr6M1UMseMzowwyhod",
  "key26": "4LGCoTWFux4H8pWTekGany78FEJQkokuPddPwzhonjHpb1X4xTqghjhyhdBahAFqewVApT3CtHSLxFzC8HvaG173",
  "key27": "345JTvyi6o5FUCTUZbBVkqcDU1uaFKdVLwY2oxEEgRPusPjCE3djtM2NvMayk2kaxeE2iDgiJLJC737pcFS8gto3"
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
