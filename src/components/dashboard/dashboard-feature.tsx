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
    "5RZc4FA65JS2P9ide3gULUSrzXXrSsB8znEZEkZoXbnboRaaRZkDBVYddFauvj2PK5u2zLuyyQro6roez6GR6Qs9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PeV9sN7ZiCcrqqBNvJJKncHv7axSnHJdrr8f5VHXypSBcKNDCD4jX48XFGxLZNTJ4GMd6AADFyhaqmoHUsPn7YB",
  "key1": "f8V7Ttjo6Qi7ACNBFkfk9mebbhSKRGfeBQC7YRe8Z3M4wd9hcfjHzhpsqCRLyUfM5LP9uid7Utf5gcV9Uzpbjoh",
  "key2": "2vePPtjg5kgdEMLT9rGRrEbvBpGLyaSkBAHdP3G9YiQYvDQ9YkDNFc99ZHfKriw2vYYTcaGue76fN6zN6YgM7S8g",
  "key3": "56rospXMduXGQhjKjoMse77kL2LuzZddehWFDPnxKxrYX5axvCkL3BecizzpKzFnfWKh4G2DXKQGgyKProEBAjgF",
  "key4": "31ub2TKWwCFxSE8QdqCGapXmrxYEcTpkeki3TqJpqjCWtBCBqgVR2xjVLFQJGXEVSjxAnUfYQenChA6YJ5RWr1U7",
  "key5": "vNT2YjzpuYdBiVBR2LhUTYd4RnrnpgaJ4h7XjZELvgRwdJfd9bWGhxq4a6kV1TynqHmrfsaAhg5ZQUajv1tDSNk",
  "key6": "3QzcGnVYLW8vhJ2S2NdZWQENjwtyxKfJNsEUvzieooXY3EpHaEjiESPagVs1g36sRdRfasTtjDpu3U1p4rGe5LfQ",
  "key7": "2YMmdNeeTrt8MRABQQAR1zhAUREgYGZVov9uZarq8EykxwqDt9eP4EcavdL3UDNvGL2xZPATEfpshKHZdpHuR7jU",
  "key8": "5Bqys4GwFQfeFFYJrVDjR9NEaHRXB8wQy3KH6Fz9xq7wKP92KM5TsegEk5ujgcMaSXnGWYd4S1mQQ8uP3GCcGfvy",
  "key9": "23pKNMzQkQRBFDsLZotxycPqBndpFegZ6CRkyRoMTNs6VuW7RSP9zzjHfd7Hv1S2dd3tGWY3wknKxDBHdhkZt9it",
  "key10": "5a5uHPue6JqWJ1dSjJvTkp8Ujrc926QyAwN4aPRS3jhW5rb9RDvNmUm7BLytaap6EZ1r4UCzwdw8oXHsBZgs8Jbr",
  "key11": "5SSuvNXVXfMT2a37onMwA6cxsNGnxoknqjo9ButTq1WU7Y47r2hwMfKKCSyiHEvHbM1pNBbAsR3Bifqc32qZUu3q",
  "key12": "5xLTkedn8VqVgP3bVbHqQUuH97ZoDoC7km5Nhd91Jr18HweWqdpNyY6CYZQVT4r4wu76xXMKiCS6Zr4xmfvc3UBH",
  "key13": "2JMRd3iCGrrnvdS5bHyH9XPzZAtFVRUpA5hGECDyAepWvJ8Uf9GmLPcRv9yTn1GX13BortTbBuWaAXTyqHvnoYVU",
  "key14": "3JescGhr3KV6BRiPcKbQqzuVhtpjPfJcCoks1vDoX8sNGTe3FZKmmGQ59G6311q1S5jxykqr7TSpoAuid5Rth8T3",
  "key15": "2UCqiaRqpGcoDPCmQddxxpDYwdQM4GRc3WE9T44x7kncejKTrzYTtgczWFuFaanX4Qd56Pnvsov3rDPyv5tnfxie",
  "key16": "2sxR1WKqERwLZYD8WN4dYssVJhRYBgkSxurS62Gya5HY2Ak8D7RsZNz2fTdwBLFuYo1YqHbNgtGhCBwS2jxktWgY",
  "key17": "5adu6DJyA14onWrTQGbBV7FghzvCCEKhXmZHykVwHnCVEa8bcFsznqe5KYqn8ztDgpBWwQFTjUBwYtzkeA1QCFtK",
  "key18": "44ihiUQJFuLbbqUK31znhmVX6MV7sSNLeqDKzBtsBVT3HXHEmn2Rwr3iDb6m4NcLpUgRcrmMgHeh69DjyJLCeR7x",
  "key19": "4MSVmUPKbSe2kAWrqxPwAiPcwv5KbVvvLaVin5aeNySPqnRxuzcyygvkkcji8MYrvcBmdppZQjoh2gxuntwjWQeu",
  "key20": "acgL9auaU2mPxoWfXGeNiVjq6Kmqbzv1CeFJqhnZ83EU2YBHi2n3qgmLj4nFJdnZ1zejD4NfckAnkmSb1ukc9vR",
  "key21": "33RN7zUSHpQvgFPtRdLDYZpTDQ6jzkepDv5zqse8urZHemFK25UV8dAWiRb8ALTRsz6zni8JiNTh2Vho31Bo4pmz",
  "key22": "5KRxqdajhauT9FZcyhvjteDfUsd7v7BLbirzKim4Ze5bF3mJwETXg6ZzhgcnT9SHqMQCAeJuyHBXnnQij2feFAAJ",
  "key23": "4kgwA64LBhcuJLn2k4STdmSVuhQyN5knL1ajKoHmzU3N3NoQatyQKdepcWUdn9Kyu9RJazBFq4EgZ32m5gLnZ1Rj",
  "key24": "48jQbohdTDWzwk2YKtsJn7grZLrcJcQTvfthMvjPPepQTaiFKyGXCyVD32VsXsJZkpoARhugvt5eYH4pMkLLTD5Z",
  "key25": "MWhKvm1AiDCz5Bbp7T2ZU6BvwHpRQPoQKyoDDKc5MHCZrHWJdiqCwNCNkBaN8Rw4hnLSELjHGfesLo15TuvM1UL",
  "key26": "2ieEgCicce8xBFiXpTyQ482dsuaeJt12CMuxi2NCWxjoA7R56U31eVmEUvYu3b9bXop6doqrKKHPny8v6bTroer1"
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
