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
    "2oaPjDcaRRgUwotoKtWvDGYvLqVmoxyCTLSkquTJrZLJdUiwBEw9YWMPsq6S5tsrqwicwjEh7X3qhd4BmQbDd2US"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VgqB5H36LWbTYfAftoLtUZmAQNHrdoSkusa7qYs2VUa3xMQfjFbgSTRnSE6JkLXDNUZmu5sJJUCGxi8gwR6BnJ6",
  "key1": "4jW2J5oZJgVGKezfvkVqHZeiHXEwf3PG3SyUyKAv4CyLiPxU9ScyZ4qdKeftsrhoevMs8jEkPVQgNUqEhQkRJB8y",
  "key2": "4a4n6xq7LqaUtEWNj5RRZyxGhxLkv2y5uXCgk51Co2MsLuTELedFHyJWK8JrXR537xtDr58TKkH1u7yEE3PnPKPf",
  "key3": "3hyRBofxh9WfesdcYKYW23mLyqd178g3Xjt5uXyAdiLim7LHHxBuzxmb5bsaLUsdeXipVz7WWpNdRifXyK9MfX8W",
  "key4": "3TdjHXPer6mxMycPNDxSCcX9k2fUfEmM3pKwZzBmCDe5aqsndqMGE6f5s7YiWMrXqsgvW9K953psUkboS45aBDnk",
  "key5": "EdSwAojvf4wVwYWawMeg3CmiywcLfzUG3M9RVShxQgp8TtPnH8NWrsBqonuk9ZBzcBD4YuKHAvUc65YDdE7GSbR",
  "key6": "mLBH2NE8HZNjBGXjc6nQVgQrve5JBM8M72kY7FUKvNt9R4tAD4au3uHA49rt8N1t2BLtcyxyTkHKdXi2cFgVHyT",
  "key7": "2AMsJrfwV6uoFQMkpFsijLw3FbiyGVrrUjAJULyqLkTwV8WtJHiP48z36JURWHvHwsy6ikd1tY2nAjCwgWBJ9qBc",
  "key8": "4wWodqoZveV1kVYfTgBGepGAMHSe6ahR6GzVLSbTBQ4pwf92Vh5vna1q1j7VrGWPZjQdCBU2NNo7NwNGG9rU5HAr",
  "key9": "3fCwyRNRxPifmoVHh4bzv141jvw7o9GX3EK58fXyi27hMLVBiFxRynM3gXUBRd7pfqWLWG8qzWWSsEdjfEaaBzfn",
  "key10": "kBRoxaPRe8VkBeHhvy2EMfkmbXhAHt4jTNpKx5Vgi6tELtzWyByGAJwbhnm7EiwKENWvY6R22TGecoaQGb8sW8o",
  "key11": "oGoF9V8BmdDVq2sj8WYcsKRypqsDHaeXz4h9G5yzRomf4LFN4EMY47uZAC7GV4eAbMSmnZUFNLeAq2LE41CY8eA",
  "key12": "4sCGCSY4vwhosQqibokQbm7MbvmDy8UUuMgASzTBzEPBeKgBhcZ5pJnLKQjLfYsd4QDQQsxLxTx8aSVz9qiwFQHH",
  "key13": "3JBZXTQhu6gjqpimTKNuWbcs1R37KnH5Hi3bDyiYbe41YUP1eeU9UkZNq7n9Ah9RN1nDpESKD2Zh5gB6TN2L6FHz",
  "key14": "ffLKZoH2yQ7ZPYzEdRvD1nVpp9pFhTbUgSDsjdBTF2fgkdoW6vR94MabrXn46iFVHrGcLAmKuJHTC4X4pTpRvom",
  "key15": "3am26dzU3d81govYXzE8FNZEU7VxLcW818iLLLRTTZkGPtGRAaL34EhqiGk5Ax2fuVfS8sVRu614pdWdfJZ2h4kz",
  "key16": "odY7NM12R18n8Ck6Xgk3JY3gt9pJJrYJiwfkFeyddGZw6GkSMLzKrHJ8Nv263RgxEdVG5fHehKPTYGEUrYvZCGo",
  "key17": "4FsFCmCtgzX1MNTECdE3D6eFYJPGjkGSSzYspHJ33naxUb4BA6rRfu55FsTZ7R11Prux42kxqTGeYkZQVp8evnYb",
  "key18": "3Q3qqvUgfCFFRZh6hyubutssUNuV2bp6LYw9UPXKNoyqBwPQmr4aFVegquVozLEUZy7A1cci5LkQdRauwmeLFbnK",
  "key19": "3enk5tccKZfh17ioj9WBU7mGDuKzADBaW5AFKLBNMzXnVWbjpoV8qAjsDy1T5pGZ5SnTCaA4ZgaExLpggLZpAntj",
  "key20": "2oF4U7aXPAx9FpBMUFM5c5ZvSzNdPvaoNMwuDfi93hvcFkQMooQ5UpZ1RKBHkhmcdPGrLJwv5wh5ZT9WUvLJDpEU",
  "key21": "2tmPCMbfi4gi2g84VZGuqTuqHdP2is5DwCj4qqtxvNmL1MW596dwMppcsJt2stRwK9xA4C6EkGPSf9ikqsEmiprN",
  "key22": "2gcgzTyxFXruvWskuYKgeDnww4NYh6JSuNP4Y7LKKJXkgtSSQqAHrxrhtXbiHWqhEJD2vmUzRA3ZtvhK8A6z6iUu",
  "key23": "Ffu1RffzewRzJPBSpGpG2BV451NrQVZGCwVRcp6jPP3Gix5Z14xV1HmocWJuzyuYNqgYEaLtSNCKPG8k4emqkNm",
  "key24": "36oL8zjVmSLozgHdfn8uY1PsSkGMwaHHRFxvMGKiJLyEtnS4xEtXuhJBppcm6VNjgwzCc7GPS72Jj9DBb3ERv3ku",
  "key25": "BqGLnsJyXwoTb39idBLkheYJxvyjqtvXXabDuXk2pShSh73WKkMF8xkrFboqZwVvf7WbGpStBfa8NaLYBFaTH7k",
  "key26": "gKGccUC68jdC7Frs2jEd1gHaTKgvZYKjh6HF9cngRgXTPc5FDiDn45umwy36KpAjP8tGpbgdz8phiLrxWbmVAcy"
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
