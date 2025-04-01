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
    "ZPEHcBNisWMUgcUS43xdDTvR24iJD6bwARG4MJ2ZEN3FFdJG9StByfkrCpAuyqXXv4gdpNtTU25PSapnPuLzcaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LHtKtG9NqNqNfKFFhejGnT3m6jeXG3bFcFJnanESHT7duHiYrZYrYsb2mc8mdDpe7eEcvhJ6TNgeSwWBvLSALHa",
  "key1": "2goyS9cS6YyJmv6UkoQjFNGdaDK4ctHibukH4u9tQzFvS9M3i8Usvbx1iB7NieLDkWs6uWX5Ee2XcG76ED4b5HWd",
  "key2": "4sipN3GbsYQi5voaEtJdg38tz98QRkHdqqvPDsUXirH32RzZ7Mw47DX4B8zRZX2nbHuYcJQkveJPnktZLyx924b",
  "key3": "3EDUEzXArrV62u3wkqiQvrqVQfmGKqELHVhmZtEKKqtwodS22htz4TpFQnaN5Kvjg1CckahAfsB2bvz38HGFVa9q",
  "key4": "3Vts4LFNWqEXPCfrYTfypFS8MvfhQZVDsj7kkLsSu8ZwY3JuTjdKyJaZrMbfeEZAR4yipYLUria3LYPnvHMo3qch",
  "key5": "5JGFBNWtrKFXRi4LxkBntfFi3v5yRT3jVEi6PijuxEGvc3DW9DAoVawGvBRgcqe9MeQusQ8ZKSutd7F118TXM3Z9",
  "key6": "46j6qGKaKuUgSSEygULxjoZTGQuh1tv4aHFMxuM5GtAbH8GLMAcRHR5zJEwt6xyDKy1Hv564zMHt1iCtgHeNtM7M",
  "key7": "3JFkfFvsgbzLF6ZJmN22oNRQJ7V34Y9xCBt6hoGsEKomMBGvxHmuYMK9WSt5HqSQmi9GvBuawYZoqZkMzMJkNfZx",
  "key8": "NZjSKsSwKSfR9wggAo3xArwAqTMxVccKvaizjXHSQDeFaFuRh3ZJEAPTixjxuj9dfwH9M3B4fv5Jp4oKMhWqXk1",
  "key9": "Hei4XWhjkqMLFU5AB5x998xokKPG9EwjGp6xLTsFGunY5sxNLDLhkpqfG3xAWr881ydi7i4rdZsRxxjUrhETGGL",
  "key10": "DHPqUWceB3M2oNUe41YtiuibMGdMYe1WB1GgE8KbHPTBYycKqZjrtfYKVEbPwnz7N41wvfJaqoBGgC7SL8JC935",
  "key11": "3XLFzYgk3KXkq2m6UyC6Adz9uPo7KAV1zNPRE9dMiJkmGgGu6cXNMkVh4YQCn12Hxh69jdFHK824PV2sarsu6dQa",
  "key12": "2zoTqsn9ubakneuyyS9ugVNWKML1JtCHrreZhNLNpDhY3CNHtBiPcJjYNgJbnoSyWWjEAMNUVGnMWakKAd2GveH8",
  "key13": "2fxUMJTSs1T4rWqiny3geDWpjCJZcRaCt3xe8qxEut7e96rX4WHfKTMvB2xboPQLwYcXRhm3j7MqQaAom79XDU3W",
  "key14": "qMk17jsDs31GcdkNrx1pL55c3GokcUWrP1RAv87FYFHkbwbp1XDwGMkyi5UhMH4wTegwhzmv7yK9qBmfmnVrDC9",
  "key15": "5mpSL8NWQZd9gNmCKj796xJ6S2tt4GhSTjseb7V19cVq4evfVnGH8BSoZV2rX3Amkj65XG2hGwp6UapL8cBbPWiK",
  "key16": "4Zze2u1agQYAE7gnSt1fwdS7pZJ3pyozs7BNhfamkZ8THLJktwXwFYuwQA3wmKU9xRYy5KUoNhkSa8mywJSWKPbz",
  "key17": "3NKofB5FaZe7VZoMKUJ88qqw8ERLSX2sz3g12R7SyHBRZUag1SCjfDDMaYoBNdrFJ49ZUgXTUXHEZZbXrZdPFPeB",
  "key18": "2ZheX3DmBTfMb51uZpCJRMYvMxWuaFDqW4Zc66bh6WvhZDad2Nk1eqMntR576Un6whAbaKzUqvbhH8EDp86fTFhB",
  "key19": "22JeYGk7cb7f7JoUSroHrZZKmtoDeWj9cSjefM3UZUc5axaYkpiHe4DqL1kh1viF1uT4C8aqry28MJWsBDcdjGnH",
  "key20": "3cegwAufkpW9aBQsB1Y7J1gPR9FJ5gBmBXPqz2i4JJeYWr8xL7Jrqy8w6wfemCM4ow4HGqWsxiUmnV5hNnLPt9pn",
  "key21": "46XcPYhyW3PCy5TDBa9UXYquZAipsBTJAa9GMnCPPweh3r4mHkeGqtWoqpkeEbV8GHrHHsXDH123zi9jbrBKp9XZ",
  "key22": "oDPXQMGDbjcxgsvfRot6TSKEbxKjTCzysMWohxBnnz6T8q5SQXRiPPrMsg8r2RgQLWbeepqu2Nsk1Vq5mTgito6",
  "key23": "2UpewZL8DWoCim5xqsiCqqbi5ysR4yruh7V8y4h1URHaJbSwEeMAQP1ZKRabuLgnbfGxXryD9ft92Xi8UD9P3jyU",
  "key24": "2cLPUJZjKvexH7KuFm634rPM5EXxRtfpufz17Mmo7NvTmXTzfX9z7oRkQnhvrL3riFuYEG7uHqWWZMp69BRTAkKS"
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
