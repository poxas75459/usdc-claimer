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
    "3HsgCvHehfZCjUuu3BXKsth4qayZJQLDAniRXE512FXGAwJHVSi5PfwFkUsMTPAK3dmcmJeibAT1YiMP7KQkoMeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39h4tGFHbJZmZsspEMNuvkzeMioUNnqdZq8C9HkFztE49a4Dcs3NfbgMFrWh7oaBLKV2MEoGF7Qmbte6XhrBZwDe",
  "key1": "5cZ3ERuyrxet38XFWyZxg8ybBX2UEbgKFnspHPrL2nThqS2kZXZMYce3M7R57YeSQVUv8bNxr7GkWUXbohYzDr87",
  "key2": "36QYGMaUfjCoqAXCBrg6pTJyH2vuAVQyDtXFEkj21AP5GKnKu4mibJqXCtnzRLc9pRgZ9GDRpUsz9gY6tdKK63Ri",
  "key3": "39ARQJR9dDToYxZvT1eSuM2LfA9az1THQwAnuyrKDx5JqVPtr3PBZixFaGxSohUjX6mLVi48akbJZ8nCd3KXk6gD",
  "key4": "4WvV8x21VcDrgHGhpnjMFztZTn7s8dNJeDNthnW3CPVhuJH6cD8TgVsPi9Rg86pe4KAz7azEookuEuSJJDSkq3XN",
  "key5": "4T99oZk7ZP5Z2khiswco3qQ5h3QhD2Ut23Zz82k7dRjgnLKVYSU2MA6MwQhyZ6GWKCunQBn2By2rRMY58Cqf7197",
  "key6": "2f9zvics22L3B1vcv6GgdLY9pJsBy4EAyxqUuA772R3zBuvsQWnEVx2pTtd5v6KgZE4Zvc6pxeDrFUKdRKPri5px",
  "key7": "4Mk7kDn2mb82iJ5vpzxGNmjVnPzqGjgWTwzMPhNRTAL1LU6bMvwRKcnpAFhzfgKptPWcyugAUx8GTn8pVpxMj7AU",
  "key8": "28TYEvqP7GXdwH8utaW1oZ2EX9czu6KpafYM2hNDud7jW6HHMDPCdFmDYKbPpgwJQtJ8JNDR63MwV7EGP73tYgrR",
  "key9": "2rrKh8NRBVWGjaa3GmMxbgVJDVDQN1udzfoVu2ugW4z1d2tK3wbgTgeDGRzXRaYQ1wtAGq89FiNZwBN62HBiZmQv",
  "key10": "5oDtiBiPhKugirF4CC6ABXKcwanqpNv27MjNsoBPe7M5HMMVWVUoNs5vrtmYWMu2cdhTcidnY5nibTMb6FNFotf4",
  "key11": "h3QrfxpUX2i4GTVnmJGDEhXcrY3RgbkaHcDo91Huinz12tqyXatL7GXwu3jWnfdyDLW3kr4zxc7yVmGr3G35fk8",
  "key12": "CHgqt9Z4WTQD8AkgSE25bs5zys1cPNgTsfbgge6MQu7vPvqx6zGVqLMXQCA8DPes16ngCip2UCFJU2ECTH5GKiF",
  "key13": "5qVhceSH5yakGxM5KJybECt1ETrHHgDScHgq8nAdt6BhejZgcjS7Vrb55oQa2gfeXjupX6Fkv8XBbtJEqspPULrK",
  "key14": "5PnhB8U2Upjw9yhVMo5QBpoLrzCmVGMCNFHFfLBQ6mAebnnN93CpLH5ebCwqHFQ77kF7Hjz8JVuSjUfRnrufL2Hi",
  "key15": "5wnsTFqBD6Hj5EhSw2GPtCQnvoSUqg5fkbEH8fUiGA8n2Cy3b3sdsob1ykgcjsFciYFAqQVDA1Mu7RVDabYPQXHq",
  "key16": "2uA1bCHqmTt5weNKMFZy5Xhw3hR6ejHgMthftAWjufMzLKreN5Gmappn6j2bKCqHcnRQJQkwuyYH1g5DviXWEwDC",
  "key17": "2Efe9tzu24zq17Yc53WaUeWiQMDn7UoZKhGZ8UUXh7VjSpmzSfGTwGGhgBLA8eM5FzZ3scnUy6JxQNkfTYFZiATV",
  "key18": "3Wf9uz8hbSNxAJ4sfwhT4V3YVPpEqgnkY3tEnj1z83t5hw8JTDoqryNsfpvJ5qrESGUR24Hh6sDfjd2dicyH5YMH",
  "key19": "jjPWMQDzXjhKYsFVK7QEzfHzmWhSJvVa8rG8T8JQgV91QM24wigFx4D6eDpLg5UK956vkZh8iFHkKv2qgs38jzr",
  "key20": "3mffMTcKTXv9gP6d8DJ84uSvoxWwvZG1kroe5j9pXSAqkCZVZdMRLUXnRbyhQqtx9uiS8GfHNjw2f9Vr11qgM5Yh",
  "key21": "3fH4HCWfgPJmtr4HWEmdqMaFn9XsdS3MC46vCiAojAjxME6jNofJMLfy8yGLx5xhEi5fAyV3i2KyM8F3Vxa1dHwa",
  "key22": "4ZGQxz9ni78WvnQhhPxnZG5m5SmYMwExR6NqzJVW4rpwd6jE4umNvxoNjGuetHTMEa1mwDmRkRTrjic9GMhuscDg",
  "key23": "3QMPiDTNmWjFhFBzfQjM4EgGPeE51EtYCTARhnbe1Uh87W8GmtBBV97PLZU72buN94XRrWxAii1qe9FaYPdJAmH7",
  "key24": "5ybDEJRb5eQjVoPUAcZ7ZFXko2nERVnBnC96CvQg7XLwVjpKdtn4UJK1HXk7KvWhG5TKTVLvgZUJf5i4hwzM4sRc",
  "key25": "29uGMNUqPRrx9vVpyQqUqT8PzQ5iEivHkivAr49R7ciq8RJX5hWSVoHoQax1hy786ksV14NPfVGXmubmyc3efMXw",
  "key26": "4jSKiqXfcpjkHttamPX6Q1crJfgHTPnNfLcXmUPchKJVCbLa9feMjGUpkZHTduU2ek7sAeYdgLVxi1Br2wyYxFKr",
  "key27": "3wBqCTmpo3pvHBmYgEv7Ka8jx76KVqnrwAF5aPacRMnauFA8D5NcUgm9EXaeSfWUdhJkzc3PhuywGtTJzSkx71uu"
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
