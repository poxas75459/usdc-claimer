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
    "k55y8fgzePkamyPFaPcZgNKZC2RxRzGoNN2bdZkqq2DsXiNSoTvHJ3rvfBEJGMsX9PPND9R7kiSDTjQg5GqZdq9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uA76TFnPKjQkGqqY73K9hQG4zL4NDNqiWANzPEU4G43JaV53b3XT9GVs3xN1woFt4t2w7svtbiponrUceD2Y6ud",
  "key1": "5igTCMSUMpvN8Q4zPqLFWdp6uN2FJ2ZjZdpDATa3TMNkRQpiyUAHDHhYCuAiMniPzdg1YNTtM3KeBSFnUT5pShVD",
  "key2": "2Uj9wmw9HEKhnwcwnw1Nj93G4NAo69jG3Ra9MgS5XaGMdcBzWVgXQuipx53m21XaJxd7pmAdbig4coD3nd5VZBi6",
  "key3": "3yHVvZwkAMoZHrW5VkGLpvbWFg5s5RBAnNwVLe733dZc9tCwP1eu5Cq7xw72Wmc5BSNt9HuUTSr7mZS3j2DKsLQC",
  "key4": "3PHLpLF7jGnzLejh7KWEokKSZ4A3UkDDcKnrnjaH1ssTjkC1HatpBuZTkkABeJ5jwuLqYbnmcg1uu8ksNGJ8Vi4g",
  "key5": "4PMELDwFfJruZgKfhcNKT3o9AsouNAPLiMPgmUMnuAc69kchgawVuoFD9XZDoiet1VLxEWg3Ui7qvMmFKFmU1Ns8",
  "key6": "4vTa1uidHF44wmNHNhN2rmEE5nrZk2tVWihSRTtspZwVyRz8uAFEZYxCiHG2gDBmg8umfoEvwuLkUxTswaQxFUx4",
  "key7": "FXypksiyhueAytmHBGDaNcsDhTehzpiVtDgJJhrUJLkmJT8v34rW96QT12XmNDUV1MCcTr1MtPq5AgBNU74eqHk",
  "key8": "4cFkzWyxgmsyUgkfehoean1jerzt82Sdy6UMif84u7bnqq4zPZhzV31bbhkwkWeDNi3CrpUV9NzvPqFsQcbSKSEg",
  "key9": "5aK27YxE1Zx4qyYsfCZZDP5z6zbrDyMdAfcz6FVg5BdNWutZhPLVuYiskM128xY9eNypougkTZgxwCMHBjbrLc4n",
  "key10": "5DJUz5XFMGrYnz3go9RyqZ9YxGztp5Kv9seC9oKCf4encsJnAFJqZZiGrnLqi2BVv6sspj6B9GPRBpiWWRhWRLAr",
  "key11": "39k8E3GqSTDapzvZXeo2cmZcF8M6YyadTUUoDrjHtVGUY176L3vgDX6zTGy44DXYhoCJGcpgfRGtX5jqq3UPzP2M",
  "key12": "5sqLeNKftejfrkJHDmzLy3ymAp1FGvGaS7ReSnzVjFSBRzzLqZgA6jLUvvVTZ24bs1q2Tv348zTEv8UskoPUwE2z",
  "key13": "4hZmQVCAsL6BMVcECfNquEGCEfyNBDwsnToyY2TFsymcKyaHe2etuEUFTidEyZi2z18asE8DS3bNC8mTYNwndeY5",
  "key14": "5bFdb2yQobThmPinNzCgHtgivat11YEfTGSmxmAQijtVVjxByoBw1eHc8dcPPyvxL42szSH35vMDHHLTTyfJxRkf",
  "key15": "3D59JpfTtg3igQdaz3z7kHfRi7cr5KGZhQKqwMTwQehUNWxzSXGgPDgnYE1SZYBtrXQHxtjUZWxpg51THHJkuoTJ",
  "key16": "5qqsgG5PsbdCob8nqhyV5b4J5dqvNvZRh1E1A1aoYWs5ghsdHAgCehkW3hdgcN8vwWKsjh8HTPhkwHotphXp34KJ",
  "key17": "4EiwZPDHZdGEDjAyKMXYrVKATB3VGp5PoDdFzdxJbXX14PhZ1DW5ptK1kfarHjWPLpF1xzGJmHfkxLuXrYz6eoZP",
  "key18": "4nAcFNom6Ty5w5PovrEnH6xTJp4VnrWh7r8X5GERbKJ1xnPB2rHo9tYbRBwTypKTHk8aD4Zv95tGeLSdA83TY1ZG",
  "key19": "3WUeGeavijvdVfSYFAv1eptcvufGnZ6m9VWYP2XcJfxZYkFwWyxq1buvPgjriRveYGNBkM8ZMNDvx9pRraVTXu89",
  "key20": "2GbaHQHqE5LXrEk14s4agKtD7R1Lik2JY9Gy9ny2AxkKETBYmBjHSJUXhxeWjtMHXk44mCqjpyNFeCunoo6RAHve",
  "key21": "26bhdjbeyzKktvaf4yY3xztSJHMDJM85CKym7YWWUSZt5xGGcWDLaCa528JktZLV3fyLZr6sbEckdRHxmcXtrp1U",
  "key22": "5TZqPL3iPtVxKd9fjTasznLfWn1mA3Dn7batN5A3iApUUJMYkDXseB7ptE7rihiJR1yvSop8NxMCTEVFFRGZibCt",
  "key23": "2UiLhQmxsKqJSa6d23heieKNy2MbcBQPLzNm8Chyjr7HS5HNd9aTHiwbqbA5ctjmCBeLFEgL9wFaQZH5QNcgs8Bv",
  "key24": "3mdLgGRk89YuqgfcqBfjdm1G7xSikuoo9jbHZViFdYNqYMUZaiEcS9vwE8VeZaL7qh1Twbooyp9Bk7AxkHK3rmSw",
  "key25": "4x6eSrWFmCr1FfpyM261MYKyXyJfkThQinsbB2vNKhsR8o2C1fqoCZ1nmHUvn5pQwrsPdKTBxGSbqrUucV3Xi8EY",
  "key26": "2WZESscbv5ExwMkFtB7rdfxqeZU1muz2xintmGg6WE4XPRwA1X2usxU6P9hei2iWKo5eGwPUYHiskz58u8TTqYPW"
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
