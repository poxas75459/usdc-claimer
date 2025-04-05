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
    "3NxpeBM7bovnnW4f5g7CkPZdD87MFN8q9dLJCqukzcbhsZPdX2MgYwuEsrRF71ti3YgJsf1qyUcCQvQ8Pm8bDrSr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VGfscUAaqwfhkPNV7qviAspAarfwriFv6XndRxbZkaJiwzB5Tj1A8PYuxkSUQnziT2LiSMoRcMTvFHK8uLVR9DR",
  "key1": "SKvyvvTZ5jAb7TgmuxEUqPWy26ukSQKAQBpYs9w7bMZZtxs6AB1fbcNhGdyhPLJMPshuG5vNHGr2qgLnAxwzg4z",
  "key2": "yuPZpZzc9HQyu2remr4YDp1SGu9Jpn8ZEnAtkAKtqm7wpCwXnbqTUXncA8B5Qjp7kR6NS6nJDr29gc3Gv1q7VTz",
  "key3": "3ovoVCRS9cyGpvP4bck2U9NpAQiNmDZdtur2gnuvcp3JJSweBxAhK9A4CizWC1BRws6ZM9PMPNaSogJJoLRNX9U9",
  "key4": "5wKi1RuNNDGPsAjJPyDqHVeREEwJG3KWVcCGGUT6ZawTd2KsJJZSZcynrMTk3aPKdHKG1XLcJuTuGs3mmrCCi44c",
  "key5": "3GhXgzxg8oUhi4RZ5Nxi2RsgAfRSKBfrCvh2J8L7upQNbhGjRiRd8qKn8JGhCEcDWWsn8f67dQYVjdwPPazQ6Dbx",
  "key6": "5zd7V5DiV9GuWj9JM5DjNFLf3LaXskxYKZ6aPsoXKajZTjSfGQs66TcLhsVvefBWeeCi4axwNPqRNwBojZ7RW2zv",
  "key7": "5sjkCum9VCENBcPxkiMyAqSTDm5wDSRuh7m9eAYSuWBtKaiQ5TbikxSjSHbz9GzqnaLkw3h2HNWEYtERSwt8ZoVG",
  "key8": "LkZ4vwvwd8MAn7YbSTQVWLAoAcP7Qsu5KzikzHEvfhYvaUR2AQS9tiXUPH3KpYafVEWt3jnZbtgbZGw5xAidFhd",
  "key9": "XnDB5srKnpfaegT13bSV8VpgA3z914Z1mTqw3r6ntasjaXrAy3B7MJTS4yKk9MgLfkHtUHgqYtraDZGaVgDUMZm",
  "key10": "TZvEwqpVp1WimViJgYaFfNtvn9fTzhQzKhrLhCx1TLw3Z2Ghx3QM2XqdFUvCkpRTsZDAXnwhfjNb5y1pC3i4Jip",
  "key11": "4N4AguPuyQAQWEeqKXJYu4RaTNC9P3nV2WrqU6opP9rYWjcfCiDvd3Se4VnxXMAmHr5Vbvhg1QbeN3e4AMYAV3vw",
  "key12": "2moj8RthjE6VZh6kEKLEtbAcivEdHQkrRBHgsPCyWkcxNuUGpBSyqN26FVcWckHV6BXkg6JuRXUnLSNeaUiHZjtU",
  "key13": "32AMYK8jW5PJso2T1nSUmo9Fpb54uyAESM6zYjLsEkyXMbo2Z4RtpzDfrrKJEC9MaeATzjWkxk5YWKsFizAVT6FM",
  "key14": "5ZptHcDFCo1agsdZNYoLaEQpZjQfBN2Hh7w78banhU4psxm3YGTaEr9YwH7PJtUvLa6j23LdyzCtH8VGLKrWh9XP",
  "key15": "5TxvPa6H37hETszAohdQhfRbRuxiFChCd8jxqnzpdmUPwtcjuPqZWkmEhpcbLRW4UAPB22mncttPyhxU9VsJgG3M",
  "key16": "3Y4rbWy96j4ZBCpexzuZiPorPBBpkpLe4JcVmtJBFiTajNjKzMWNWjkJxoAiPnXh8fnxfGe8TUKw9DyhiGdLhnkw",
  "key17": "5DN4nx33aXqCxEeca6Kv4YfTPZwPYL2EBHgpzKewkzKw8Nq4aZ4tAuoL5XzTwiHq17RB4gpBToGgtmkUuktzWYMi",
  "key18": "5DNvTyvYp2V9Gb5y8kCZYtvY6CGJGTY6YxoedqLqRYMhvbioRaQ7nSa3CyXr3dSpikXjD5aE8rXqutGCe3i7d2i",
  "key19": "662kywRecLxVh5GY7eUw93neU37LYaJv6NUQ3HDdkdkY8vx9oNS5bdkUpWtughz9EP1B3q7Zm7XY8JTuBsGbfrcE",
  "key20": "4fuDdRfoLbJmSbudyuemvFhiXoimFaSPHsPw9s1kTiA4b7z51SfVhjHe5nJcKQYxWxfbxexX8YZuC3BuMx9RQQu6",
  "key21": "4WBQNVtvHg5CRrDR57yWSwtCVBw29yPHGLxCpbwhsaCT6VCXdubMtvtm1wot9rP5n7mU98JRw2jBXNbitjXj6N1F",
  "key22": "3duJkv8UDkeJ5QHbT5a8naUs3GX4naGcjWQJPfWaCnnVmjKTv5TL8Tr6rUNmSRmMhQWTyAftQzuediVsyzQwkYmB",
  "key23": "4voRW8gitEuUgqpig7ibo4FsVjQ5geRYx753w1hB6UadmsWUwxf54cPmdneHDs8rJMHhma98BDcE7e3CVErP1gZ6",
  "key24": "4XJRMf5iJt4WWP9gcoPdxeyKERi2HqNQZ5HzBAVe2FYgijwqqmHw3vGj18Yg8rwzH2i1TBL267BoRAWrYjDV7sAv",
  "key25": "3ZktKvkkzqgZqUHx1t6KmNZMwRvrf1MR2yvxZjgfeZg7BKieth7LQ3Bgi4rShiogJKDVnwj8yapeM3wQP4gFBJaV",
  "key26": "qgEHqUySR7MnWVtLdHu4WsKiba3vYcRDdiMdZTzJdpjE7yRYZ2T2Xe25ySbV5KwBrtQsDtV59XJXYa1vH7axpbJ"
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
