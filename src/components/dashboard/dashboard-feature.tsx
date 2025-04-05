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
    "5g4qWVT6R1kWC1TaM5qSNZ8x2v1FQC1rv7oiKtvWEmEDds3sSjcY7Cfu53bWSRhYfc9Aaj4hEJj2yiVQEUzbaueN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WddaYkEByX9K5GRoSPUEjiD7wTEu52wpJYEZmcySFrAxDppzba3RaR8PMuV8wdHo1wgsA9DedGUtooU7gbBrwuX",
  "key1": "2TxaBwzVxxiD97LAH5Rfug4CEe6QbuBfBrdSUCJ3omAZWSHSC7neeKRRgQo4B5Qr7ZZS9CQsuADxv1u6hPetjHd5",
  "key2": "32yAwusr18wepQnih7327y4fwwts8EqiR3M4jVDUYT3aiSTCHukoNEmiuJk9UuBneX389EKCnUbwL8uDLxLGAzVy",
  "key3": "HCbDmtpuiveP2PGMZ1Be6c5GPa8jQfZgFpfWcdv9dtw82vapti183tihkcMCM8jzu3zxBP5N5QmRSmekdrwA3NA",
  "key4": "35qJRHt3vgoy5sryBU6BaYy8pgJaPTJEYgn2mM2Qtgn9DM1vywqE3vQJJyxLGsy4k1w5ajodMMgtMdgWeeEuVCLN",
  "key5": "4f1EPAePBsHttTe6kTscXnu1r9XohMzDmZfMRkMQAbAKgfXZHNCY1YRLwUW98ArgaQ8w5G3V4DVkBETBqAejJmXV",
  "key6": "CiQiYfeBQA5cXQfBRp4XjvJBsmon4JqAppHjuAZmfQ7NxJDFQZTymssTkdFHej7g2XUuFgyCs9SdS4KxQUAHDiq",
  "key7": "58Brjx1qt2366Nzi4cQeCqbfw6dTYc6otYBD3Y6bdXbKLjdwsZQGVmGe5AhkT9YHJ2rN1hiQvytykqcGwRCTckV2",
  "key8": "4V6eDj45XwuXZe6qjXZBuDDgiFX7ucdPx8umwuHzStgRSsGFBa2ZJVNE62wkNj7G4CxtrGkaaCkre3gBdDyfnm6N",
  "key9": "5VnryxGq4TmjCe4rur9iMaWj9PhxVJVJbtSoop6md9DTdpqxyVf7CCjFkXE3p49YJtrWRo37qY27asrCgM9m6sQB",
  "key10": "3A6FmyjNG22Aw1Bu9C9tR3F3cf3sK47xBCJSc7DHkGpHChacSgUnZD1NjJEWKCy8jFZrPYo8mQSdtJiehU9NC6Mq",
  "key11": "2robAAtAptGFuXRnpGqVGzVLv4kR9kLBGdKJ8ewkThNroc6vjwtVR6MbKEqYnRisHHnX16GozYXJjFS7Evgnn9VK",
  "key12": "4jdgK9aTiPZZBrgWVcFu9ctQnjZrM9Ac7iZXAg6gtxCpLxXV5EetTdnDSGo1w2sE7BGmtcS41Hf7cvJiBP4nTmGU",
  "key13": "2XEFqVeLs8KnGX1r6pw7WbAG8byXiXCXijxcDGShz7SY2r36qo5xFPFYnvwzkdkVeN6US7FKrDNn27TBwTbm9gXc",
  "key14": "2tGVM28deDUa9VtZh3XD5g8K69pbCUBhxEuvfkoikETes37oRsAh1yeua1YNzqpsNNqFwUsKVWgXx9WGTB9LqZdr",
  "key15": "hvuhc8uz9zCBBeHDZCx7QPz4o45f5V5kkn4cCAPLRrUDxi7ghdr3dBoVhBEjExFktuZPyUVnbhv1qG1A95KNarB",
  "key16": "4uWv7MsxNR2Cf4NjoAoqiymzXLKAPzszuE9cxp3TJwK1v17zTcngGFyzQmUs5rHqrQYADBfe2r4Brc8kU4dnbbDG",
  "key17": "3hChhEbQvuwt9tXg45X7aZm3rQxB13yr9r9E8xN2t8fPVmgxpkXGtBiJXBB8xxhXLXeRxkHbfWFJFvH2o79wESQn",
  "key18": "vN6Qgqmz1xLg1KieKzafost4B44aQyS27zGQfSpz1ky26kvcimsFr9ffaV3nEyzt454eLfenyynfk44uuNrX6PD",
  "key19": "JbpB3Yff1ZqUayqL9CHq6dcfugvMEDxhbBb2umcBQT8wThK36cLhir8dJjaXrQpCQpoYk3vpG8sFbTEcMzvxqzb",
  "key20": "56L3MxNuox6D2e3cPGgb2hgBTUxhUqGZiwkigwatWdC7YNeL1kLj6RByJy9bwKa5ZT9q9ae9aaV5EijuKc8pb1zr",
  "key21": "gfvrpDnyBaDRvut27CLFskaU8vhghimmZKSHa6AuFqiQrZhyibXYsqh9XR1XDEfewZe7KT8duU64iCFSdK1bq75",
  "key22": "2Mu1ughpJ4awg5wT8r5Hi6aWZviHRTKtkcwYMcAfpL1WYPAPk3Jwvp6pTb82RctZaQdZpw3oLrVUR936tL2gYZQ7",
  "key23": "3yv5knictBcHNtDhDo57rMwE4URYaAtm74eH7kUaePGpn5D2pLs5KG1jcbZztsZX5nuYPNgxEH39umKWtUuMzCtf",
  "key24": "4PWaXDuphNY9GV4RHyGE2jTCDMx9472JJYfMErMhqEx3JYqHfgJB8PgoYiCE41sAuewM5ejM5J4PVYzqTtTu7QQ5",
  "key25": "2oTmss5Rh9TAfUrPnRQp1poKETrYo6qBeYurwoVBUUeXzDtmsNYRP34fnMWpajUUFhKf85eQ7GoxsGpJqB7svXwG",
  "key26": "5pShtvxD9VNhvsTrLF9Gr8yKj4agsPdg1MFSUPe8DNmpfEscJGkrYmDU8Nykii7MXmwidXSyzL44MXVxyuHvXLZ2",
  "key27": "4hEEEZpSr77AudF9xEJSbKG8k6cTbn5HApGCKJb3ZejgXSvzag2v1xKJapZJqwpfFSjjvCWkqTYVFoJ3VwqZYHXV",
  "key28": "U9Gf3sQwJiZ3XRcG2NxHofkKLNPbZKMgZGLuLzwDg8ZDnsMTXagJp3whvZ1QeWApBmAXN9XKxzGxWShGmbxxVGa"
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
