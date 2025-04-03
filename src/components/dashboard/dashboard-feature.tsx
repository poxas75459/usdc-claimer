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
    "2F66CofGDnL3wn8GhpXdcLy8Q1Wuzo3jo7UW4sadtWNEFXbDmm7QKKQYfVvN6gx6UbyF7F4PpqABafxK8Gm4Zhy9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jzf1u3ATpR3ksksbgtvn1J6YiVpcrv1bzWJWb1uRUu1u6TK7DFZ1BSKoVPaziDjVCFMrBkvquW95NqFtT1hrQUY",
  "key1": "2UKmMAk64BSAfGGxMa2ygFmTCRnzkWoV5q6vNJu6Tv8THy1DHAqAxbLRi96RVfdRJMN1BtxJAA88V89dUckBsd97",
  "key2": "43U3C6GQREyC1tvdz4Q5gwsfi3YfY58346o8n2UckTjgi5tsNogtugF3ADpbvDg6BFLAMpytNhCSZmga27BLaAAt",
  "key3": "53CncMYkep5zFBJpPwxT1ZHz91yvgx7Vh1HXDoLsH3teBMudRyov5mqjMGctFxAkmYWDireVHzHwLSVASktcQnfC",
  "key4": "3wF43B1Dw14bJt4t1mJ2xBwHuoVtiGQLVzmXo6qSh1BRSypYd4Br7kwRDVCqw8JpXAhwgwtHTL77cGCMKm3Q87Zh",
  "key5": "Z5LU5p8azUzSLmhaTWQbe1iRJCuURZmGachYQLGFKxky43WMfAaMYHNq3akkTkNhgVM4bfd9Wz7jAjsaFrqiMVk",
  "key6": "5etz4NiiPzwDYKosFLRJu753jQA16ZBVf1fzTmmGg2uGVDtZnJhpAA7U6RZ98ArudyZi435Wa132tnQgaDSh981R",
  "key7": "5R6YDfKWhpui2WMtrYMLUTDbwxSAvgK3zMjQV53kG4hFVDso4P13MFsEv8XaEqgX7qKBB6qnqZkqmd8J576qdVNG",
  "key8": "3FxoTqocSaDdpPNfY32exBAZBkhgPK1pH3aKJCseNEFG6vvh5GdYhqrPTkq9YRYocFtXDWox34EoDFwhPQRc7Gtz",
  "key9": "4ii1viLmDortmkfq9sUvbcFTMqxdTFo75bSvUuW3iBaiQEvyrbdx47SvKPiDmhkLNuPdD58PjayyC4aJd7e3wBkF",
  "key10": "5gmNyUjaXgnmhffSn9sGPE6xnLRR6wuMWQCBYzzeQrDdtUfmVK2ADWRzPi7UUoncKXxYQa2DZeNRvvFrB526tGmD",
  "key11": "42RHRFXUQE6WwKbSEWfAUdSp6nTHiPyZu8r2WNd89Q9EpXFX6WRa5Dbo1jRkLuzNWW1WRnaLGSwG2uuysrHXWHqS",
  "key12": "3rmv3dLEm25SqWibsHMXRNB3ptZtgjKV9mQKTxS5npsW4zcbhNpKiUNPdYFuAmr2BJLZftz7KEPgwRy5eqWvXZt9",
  "key13": "5Bw3aS7H4VBc2xGNLResS82BTLqN15knqZ5obrWxY7daDhUJGmairB1t6MFGC8265CQDs835S2BrBSRWSb47j6VH",
  "key14": "4vRaa3v3eEBUkvGXc6MPBDcGngmTenYPBBAJqDx4evy6mSyy3MkF1fqGjebuSDARqSFXkU1AwBkRx54QqqmFUtBM",
  "key15": "3LjEZygpotJHjUd8Sp9GHaXtkU7UJPy9yn6Skq8Ur7GjwHVNo5CTDSi7qJvs7TKmRbzTQEU92T6XVjDEc6N6QnEN",
  "key16": "4U1qfp5iUyGHJ9EVC6QJ2aJpL2H7xqEwpaV9uidw4ebS7ovW2Br2Vj86RsqNxAYaYUFzoPh4NwdGAaLRQ2vmdSKd",
  "key17": "5YSBbh4gcLmhLxAiDa9AihgsVa1HV43o2DR8Fhm8gDs6RdAhdrPpJyA4nC77D99wCQUMeDqvNNmMzJUT2QAjw4VB",
  "key18": "3LToCJENBhNECtgjj9bdox8ZMy5aRJjJzohazQx5kABMp2RCLefgQRs8gRU4kBqMxsaYH2oymo3krWqSEM6F3ofZ",
  "key19": "3QPxTS2Z9DPtjykdbEbQbMC44H9bn7sZVrTAZPVFYknspyxhxVA7gvokWXsLVD61ADuL6gC7NSCviP84sKf7mEs9",
  "key20": "cvLjQsbCLAfDYkuZknM1sUS8wadeiBrk72gDxaZFiLWMFNgrZ3CycLRSnZBKp2LUdwJv3Cwgjmq837rVQA6FQKo",
  "key21": "4aNHT7uKk71TfEFHStwDYdvEaEExVNDpBBWMcEXqv55iRvNWCbC4cob7YMMPMSw1iVpV5jzv1fWYoFh5KHfN7PqR",
  "key22": "4rVmc2pf1jRAPgoNi2R47FTbEQwuDTypbyLZwTdbXXR8hD5RU7NQTCg3K5mwFeLFhnVTqqmiFwyKYiWgoJBkjEvn",
  "key23": "5EHVw23qHfGzonnmXLQnNDrVQhSo5uqyxyfGnDJRrUNiafY7aB94furZipCpHiSLmVj3T5XBa1JMCHivanPH4GeE",
  "key24": "5jPms7aiFGr7mmifpYYRrKpgiKGTszErSkdNMYqpNSUY34JoL1xcnA12wYSJmCmAQtZGEyBThCvh63J8K9wd7DMN",
  "key25": "3boLhB4JU4hRmKdmhbuqve5EPELrDLttR4K3FSoiMYJUFAg86gfAeSMDfGpQMdS7v9NJKtEW9i6DGzVpvkLkQaLH",
  "key26": "53j4VjwrrvqVzXDsEW5N8edEWLd9hw7DxS2uq4gm1PXkUZwc7ktqXRuXnmytr4n2zS65Bq2LdSzJkVgRMFaiWSSx",
  "key27": "2whwYmq6Pd4gKGv321egAPB4g68ZaXQs3w4MMJ8oaYWcQK1NndtjQdnEuUoqvDL8ikumNCEpNZ647FJvA5oqF4xn"
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
