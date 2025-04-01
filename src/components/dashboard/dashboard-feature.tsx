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
    "2dPRwgspvS8a8oTEpsf4yrdMqG6PSWjhxKdsLT3d8dv2jBJmmqg29tvbH8aJEzXKfStxdeAiNQtBXghmoMZSmdKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZvcdMYRcHerugqrZ3buvFPokP7kXkD3PaQz4V8hJTnfB8WdaXgNiebCr18aodD94B7fwLyiMLTcyCQzseBdACdw",
  "key1": "572qqCJBsePLUgzdTbvdo2CQ2W9oJ1AkKmYYiF5uVr41cVYH3sQrCHJsNZufxUqEsU7gPsuvd2JmrnmfqKdPwodA",
  "key2": "5uyunKFCbx5dWhvPNJZW25Jt5Aiawb6jLLJwbiyDPSWXPjRbEab9qbTjSaur4XfMZupTVDcazaLiF9rSqo5q4Zrx",
  "key3": "GzvAZfRYaFmVTg5WErhMZL4A8ejX1Sc8jeEz4YKgT8P9ftNDEZX3xjDY5KvHCEyXqWxx2xe6GpaYfQD2rvuCTHK",
  "key4": "55dfGPUTDpAf8i7TYcMdXERnJbNDdoY4sTTjh7PHGN5gtCWjm1xfgCPNucvFPJmPutrzuctXrpqua4pYbHVaUNm8",
  "key5": "8zi81X3aNgGqJnqRGyUM7wMrZL7HwZ4E17tY9EGQ8mQG4ACvj1aXbfEPuDH7rkY5HDBHV198xkYnHd8LBWvF73q",
  "key6": "5h5X55PtdSLazCbbgRcbqQgPNBj2nTk6v86BpPFGgV8eknpgrCt7V5bmxFu9DBRL3Ray2LZYcsfVUuikB8CqndRW",
  "key7": "3E7mpLTypyfyNKD5eb5zDHVeCwpuXbiTwzBPixSrzFGx8mMFhCb8dAys2ZBetCBic1pFpmwN3p7ajP28W5DYBn2P",
  "key8": "2FQKe4nM2xAXVfwdHwoFFC7MxVLm7jDTJgSFMytSHVYhLxKHf8gSsoPhwpcsne74chP4hFRenAzM4dnZvZSVvj4J",
  "key9": "3F6sF5vw2gYNbQWjfzqjNpDw1dFmku1zPbit1xtwi7kxrdE6sLqz3mVN2WgPiqtjkrWYG1VEAirEUaMSPSWcBGwt",
  "key10": "FxKn4e8329XraiCwvTSLLEbgfamctqnkft7P4HTDwPoTJEuUTtgGX4ZH1Qwoep66PQs76xxbFezGjafoBE2ooBz",
  "key11": "AfAyxK9jzyr6mhagphegLer1uMEuHfcW7XkSZXfY871ZBvUUZix7YFF2ZPQXqTPHCr13sLMfoQViVyQRhrE2QXK",
  "key12": "2Nmw2wGRczxNE8KQTcRDJUQpU5m4KBgGWVjdLKaczHZnZRKa7jfjC2TGPwC4iRS6o4QUxVGxAYCEZsdYeqMitJJ8",
  "key13": "4rBYd7DupnTLBUBCv8To4Pnd1GqfvoxN2LocNcsLzeXaAc6SYEq1gRrBbj8SjJRDfc8BTNcdzbWjcx2rCfv4ARcZ",
  "key14": "2FJu5z5KwAYirH2xuTMYmTbSBnofxmi39azP5anLxpmikoqP2rVdDaL5bskLiZEz8e2xHa4eMcxHTbSuYb2oXK5q",
  "key15": "17G9DwkqD61PZyRYTQ7FgUkJzomxAedhWR9eJnByCVEBjdXujDrUx1VauqqszxyLE2Jazh9CGFReHxLpye8kNtR",
  "key16": "4G1xL7HsV4k8J2ptqTqEznzMHdNk17yL6YYYFV7vfLFrCBWJjvnfUi9twaAiM5NJAGmg3y5pfqiTeoepuAnKrX1u",
  "key17": "2VKqiCqowU568juLgeJsp77D4n5AEdktVVujaBJ19xDuxZ5ukvwvdQwrDqtDDzbvdSVbWs3KK3W3pkM3GEtSsahd",
  "key18": "2G8PmvvHqFebsJFE7g2kHUZvJRoky7UBrtP7njLcjE5Wh6VDenTCwDdytWP6Lr2dA6zPfyAg5m1FtStqv5v1M1X8",
  "key19": "rvUuQqcJaY1fkd47MtxndoKvCuAMCgbVRHPuvduN1Fq2GtdEiAygV4jKkppqrDLr5d1v7EKUVQeEzbnZPwwAdhB",
  "key20": "2UB4t9QBw5P1dtJzQCVYqNhssXJz6VcXQMs5uzrcsxBLHqFLy8EX6WtQhQZCruMwb9nzN5Z2RhorYNXAyNbeD5rd",
  "key21": "fVnYzAa8bRtbDUMSZyJztbCXp98fnMYQk4rE8WTXz95hixMVK2oBaAPDHAfvh6hS1rqBfS52QxT9n73gb2Kwspa",
  "key22": "vjEqgLsechDJjwYNuGjbsW6TKmGuMuhTZUzXfgWaoC8NDHgQqY9fyqyBjki2pifew2iTZ5AbZQhirf7LQrUq1rQ",
  "key23": "597m3SneATeiuKzAmAARfzagn9CK7QhrKPpBHCRj828DDuGdV33eQLM6zkAWLQ5GrnisnKDgANnXZUrVD8m2Uigi",
  "key24": "3r3LNRGPX2ZVo5zi71qpL4n8G4xUFtyjxSbmZLVf2z7yZVSbF258sCj7mbPAKAdAFddWNhkwrCkbbFw2g2fbfE6x"
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
