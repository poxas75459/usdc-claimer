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
    "enQuRJU6WGHdywW8hqUA6YrtYmNTwiqFxJAvmmhTfpHt1cTuaVmRW2LrBkqT1vBR7GDi1qcshUaH59X2xo3dHXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AcGRPDBmpczVt61UVdC3ZV4H12n83Pi1asdRWZzGMeM43UgFJ7Tz93kmKCzWJoqfcNFdiZbuMjzDSQHzbC8kfgS",
  "key1": "o6SJUvrAzbhhASLuaV3FTtxCV2ZpZoJo1kqSREHMvLnF2BRTKXZA5tMutnkexqJS7Kh7caqyDpLHsMfs5RvaUiu",
  "key2": "59osNeG4vfKMC18HBH2uJuGBkm7Vet15xZ4vuo6Rhv5UsyfPdhk8YkAyJW2R8cYRPHRLhfFxK3GVpUTaHJRNRC91",
  "key3": "5RGu96jTtRTFDyn2NG6BshTPdV2gyi7Fncz7mhfbK7VpRPqNqK6b1m79mKPyHhkGXiHVb1BiWnjeCUh51VA1M4gA",
  "key4": "4jACPQrCX5HcMVm7S5NYqiWWA2pSwSEufjPbboJpy7JdgvXFAdnBpQWLmdt6kuNftmDQkBfE3xAUiTvDPYjL6YSq",
  "key5": "DM4qVtZAf49YPxaM6hiYYvy3YSC3L3bq62bEG1key96w5xMRiiMprtRQd4BD7UsijnahrXNATGhNdGufkMV2jMN",
  "key6": "2MTgx5jYNiisd8vKGTyQvuKpkkJSSouZ4MwyPG22K4aWq1MAx7YKoss4FiooPsABuSHrWFh4LbGmhB7mEcMnPBKF",
  "key7": "2EFXwL1BrsJKpKqWr9qzcW9tYHiVGzSrFbT1XM4eekWJAqapWZbzs74qhawKL4knyp3XgV17YJyvXgZVM12wfJWj",
  "key8": "33HmfiCDWzqSLLxbhuLje1zdNTNRDNLGKSj4Vn7X6GXAzgwdafLyV9HSk79Bie3EygPRz8oELTVjLNkNmeUSRGRo",
  "key9": "5Yk7sXHpHFiG9sriwpAXh6Hei679rwsFkFe6xaqxAQFUtpmDbna4td3e3cnXWmwH7QeGDZq6tn2wqp75wkWjr5G4",
  "key10": "5cPFUdQZMv9GF2d2m27yeDssyDYVVVdkpmQRQHiRTR5WBvgkabD6Z5De42Qcy4ysSK9b5B4quVuj3zxmR5LXkwDX",
  "key11": "Kv1iAgDjJnNq3J8S4Hz9sNTTidbz4mvAskRKomdQfBkY8cNRvVcZQMRPSK9Wyj7nLidem8uKK4U84YaG1CBfaGU",
  "key12": "x5Apot1bBa32EGGwDJe1Z31UQekowvg4FHEQZD49eCE8sfLZVpSRLMwb9sx2cFeHVyqp5FsXpm9w8SAGoUicfbu",
  "key13": "2RJiXPzyGDDSALkeo46qSAdPh4BCHEunmsrfMmPPNm7znFe46ASBR9nMwFZsmm99ZMk3KgdJS91EapMcvUzzApk5",
  "key14": "2E8F6kKoHdXmEVTQLJAmQqzBAKEpv64c2F8bWAtYLWLgUTW56hgD2XYPL73iu39Yu9Mq7Ki6kbTZVuQJ7mpCiNn2",
  "key15": "hUrXdt76zsZ3zonbnjTc3Edez7HkaHGgJaK58MW3XFDtPLSRJGHBX1yCPLtXk7MdfUYFbWo3shHhZqc1qSL5osS",
  "key16": "53oHsveoQjxjMb7u54k3tDWAxHjXFmPFtBkJ65rHi4gn9SXL64EA57toZatYBAGH1A9yEFgNaWUBsa83mzJoHpyU",
  "key17": "5VqtkvmNLxZSr5fr4WqJ4JLKBm7TETRcsM6Dk1EkHo7fNu5hAkTtWvZumnUFW94fdx3yR2QCU4wJvLpXt4Dyn73x",
  "key18": "3GhGyHNSkLdcNnC7xCQHzdZy7CXbrerQ6L9JXP8paEBFtLhWDTkgoNSTeNT6yGPydyjp5C5CVjaf7Js33WemY6dE",
  "key19": "5YH2KwtsoHyAgGtWHGmALCmuQjjMHr5zQsNA1bLJ4WtCunFgTw2oyrcGbZrQ4TafZvZc9bNd9MFJis3KzHGVBAgw",
  "key20": "5rBT8RHcG6eGPLdTGrreN271dUUNd7wdQtDm7WBNbPnnqm5LoZus3DLAmLzKpK6eLiJod34HpLT3sBQDJpZUcLc1",
  "key21": "5jZRhfBxKdf8TtDofY5xdBw3oVuEj2gTATDaCDcRw1nGQhoG5B6XGwqkpP58UX6BDHBHbRUuU7E3UPBvwF5EFszV",
  "key22": "2hRX9LArf94p8YJnVNzewt1KWR4JZmr891ogv1oQh4TyXhq6dRQ1Fuu8Qt4AhmFiUGFChSgVCZ4EMz719p4nxBFq",
  "key23": "5oZvx2c7iPXoG4LbxdUT93FRnBZwoULCAgsGAvzNzSniRT11G8wgnBmWh6RHoge8WCf5pzoNG8181VHvmbpWP18R",
  "key24": "K2DspsYHaRrhr9xCvULzA2VNkXM57jsE6Pocf3YnrkeP7UwVJ32CwUQqXwoDPjnmTXc6c6uHmR2sAQusyTEFtHK",
  "key25": "3Vo4gPjwZbjXWrkmc2yCc8UfXeTGdGtVmoNbvwKhE9Qw3WTfeYvRvYMogF2MRNuiuoXBpNgpaRgwTSP3qKxQwYVR",
  "key26": "3DpozCQbupbB77pqNK84zwZwpv646gMBjWFTCyFSfW9ScwTpWppPtGM7gZKXQ4ambBHRyVoBQ2gK9MBEEGVshHjk",
  "key27": "5hBCUj1roTpzNBSm3VKN3jfgC8YTSDkYG1B7Tqmkd6UJbAoRNEr7rmk7Mfkd36bS2v8AA1AuRzftQzB93zQ5wZX3",
  "key28": "2NXN34EeZwvkGT44d2YqfT4JSJYYPR2xEkyqLqaW3EUzz4EAxggihvmEF5mRpvxbHbkbN6v5dnqdMKoDh6KtrJmm",
  "key29": "3HLBeyuRyfHrEN7EebHexELCfVnEgFNMZaaWj1cBAXrBnaiPvazywK9g9x3gEZmXkimzvrf2ge3KXRss2ycDzKiC",
  "key30": "475bWNGNLnaTAtMGbwo9kcaqedyo7smDJ3H4BxGSU7XA2Y5JKLPLSi1fjsfqvV8CfPxahAXrAaH3BTUJeq1QgcXw",
  "key31": "3qV5K27wABVSVoKwR1gHxaWp5XaTTW6NXLts8uZH1FApKg3c2Xx9nZhacE7BeN3Ym5aRSiJ1wkT9VpxKAhWXH6pT",
  "key32": "gT2pTQanz6yPxM15qqBxRLynimTzn8KJT9Y61ogEa7gA32sqRUQGXfED4Me3JqsJGSW7H4Y34TUZnMfmuB8MFUw",
  "key33": "3BBMnTErfGDiH9zhrjPijgDK48idA8MsyoNeA8VXbvzHU2qoav7swqe6k98U6PxNWsJwtMFwrKpJaxmGWppjWPYL",
  "key34": "5rTWx9i9FHVpvXUya3whQvFTaJYnDLNuSJ5r1AEwrKmPQUdR2xVjYP4A9gjPbeLASeGawzrkMeaosDgtT5NRMFZu"
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
