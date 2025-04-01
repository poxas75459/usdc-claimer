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
    "233K1XLp8jSPmjEMTys2VQsMfCMNA7p8wd9NXa4khc68eRkVgjCddgR5UBF2TcyKcH1SgFAPA6t2CHAmvWzdY4et"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jRHmr7NJQELQKaK68swhW3zx1Aih6883kNvVPtKeSvqdkkFWaSHqVYdjUmYUxQ5tFAvWvSEnevRdXSt4G6Aoux6",
  "key1": "4eMjVZadMCs9gwsAjoMxu6pnZTWmVQjo9FiY3fEF5TN9pmCEfsuUnw9VrN8x6nKmDRLq9e8j2s453NY4uPAA4xHL",
  "key2": "55H5S863hCsz3LvdAZfMMnpm8tb6oxymeaMRoCx3d5Q47P4aXbrJPj7ZBEK8ZaK4nKuFrLbeoruweLaffDFyurDU",
  "key3": "DKV4wdsRkbjfc6jzrwuJPZqXnCmMf79edi8j8yVY3J5kzZkQSfztojoosS59q3MP8FqbC263MijT1ZGzKYQm4Zp",
  "key4": "4fWoNmPgZarsgxdooTL3GYiukPTFk66nPkK2TMLiWhNTs2rMYD5ebVNsQKUVHTXMpV5Gow4aMPUEeNTbaiNmbNs7",
  "key5": "5AqmYcdQUM9kHrViFaJvNwkbux8e6FcNWEY8sMJ1m14kPoZAR7YnKARansWzQibobQP2xbhDixda1CvTsTAAQS25",
  "key6": "54FN1AEevov2r7o7GV5adFsKtdaBFjQ9tTHNh4b3waavAGJysxyEseyaesdUPXBBACmPZfGbpUqNFXSidx7f5tDp",
  "key7": "5ZctT7Npfba4mQUqYmvqBzj8rbovKxmRkdVyLqDjgPy2D56zcCi5vdjrJaAXs612m3fYyHmgnxgKNQ19VQ6epfEo",
  "key8": "5PtH4dNiuuiegpTTePFS225jLacJAetykGHESkJKMSDiGCriypG2KmMKkyLv6RjbxjVn9omiufgyhNc6fD5qiQXe",
  "key9": "2KS5dgJTfY32ad4yxLHs1FsQWkeBBHJTZn9kozhLBPV5HET9GwoFF6qfiMUxqgpRxSjfLPYKXv4e6FpNKkdUYBXu",
  "key10": "2rn2HbPFJRrQkPfopy3kPbTYKDvv6btLC3wumfTU8125CeURr1N672ufFoopFZUhptQZAQ382FsdnfXyUQURWhtY",
  "key11": "CVRUsHPgHUfhiR8d8hCJRvZsFSE8HdyV5cgNE7nkDBst9q1VEG4SFnV6uaiyL8zSusKysNbRpyTXkfvjUxtXcaw",
  "key12": "57YU5J6bJ1L7XjoXtR1WTPkKo3PM9usCqt4skgTzt3v3Zj6Y6tKDabNDCyuUkFZ2PFLiPDP2Vyiiet58HEWaG8Vw",
  "key13": "3Jy1uBPCGWcrivYePaXZxJ3TU1ZRw5QAz48gCai7XFqZDLksjtfurrfSk4X4Rh41x8mqkXU81GyRcfZg3KVPypMo",
  "key14": "3xHGAVJQ1TyKtRVaqE9Bib8vhiKGNFka4WdiwpgGGbTddCc6r4jiv1QB8ee7CA4brSLjtTHKxkxPdQmzmXuB1i1N",
  "key15": "3GpRLqxKDnhnMSRHGMiNd37FsZZUk3rVFQegZmE4RU2RoEzeiB8xTHcEZ6S2pDepbVyGYUHVz43YxFBb32gQebPj",
  "key16": "5hHBy8tvFtdfb15XX9CTQyFcw7tjmksTGwmyLBQY57DLg8SNjwed9D6bq35oYGd2ufCyKuHRAnHuM6V5JzS5LtVi",
  "key17": "2Xvh78mZgbA5Eqfd4JfCFHAPryM7Fmsb5gJshdv5c6B7oKspHGNSKrnrCTe2HrQDoVz4ch8yRStGzDkLQwz5dvjX",
  "key18": "fEQZU2oUfMxPJxPpxHPkwU3ZmAMsyjTsgnspWELk6YvDwx6uCyhS7ASzG9SLeSD9t6hH2fqottRZB4dS5XUghZx",
  "key19": "3WvojuJtJS2iQgYkAJa17jjzhjXHzWMG42jH8KLERoQuDYnZNYtPnPGzUswqyejiGMTW9fr978gjbb7im8YaLQbA",
  "key20": "3SscLFS6d8vfKP5vjWUQ59oXYmHJU6afqs5MCrHFJJoD32r8AqpgKD8kw4WhbebEKFLjXaFe1SjV1E8qGb86DB8Z",
  "key21": "2znKm29VNC498AJhsyDnF9wv6JyxbP19jSSQ68wDwhtmsd1WqX6eQpqup8X4UCMRQ8N8Yh1AjbCfzkB1U4g46xFy",
  "key22": "54X9zyD7boekSb9872LfmPNwDNH6dAYYD3YuTePUqSRK17mXt9yrfam3htom8uXAiRH4cBbmYUxhV9u5TEypAnLY",
  "key23": "5xeYhGUMWgB2cpFriBDqg6cLYxzQbhVWGihdNDUHZC9u4qMc71Sb887fgbLEwFsvrZWymowhMG7saauhqf9zdeEs",
  "key24": "Mu2qNweV1Jnva8yFbpiuWUw9KGXsiLXu4Xz3GiiFnJ4Rn9HFkatDbTNQrnsh2VQStxfPGPJDuEz7cRMqVFhAHk5",
  "key25": "5SG59bURNi9iPZo8WtDbrPG7kJurkZZ1fJNAZvGcqwEwnWugq6eZDuaiowD1Eo25imcSPT7wEkttVP3m1oRgPFUt",
  "key26": "3tdbawo9iEzz8TNSjo3UZ4nSutzJFf5kESHHCmBB623dzEtWrq9ahgfy6xGBPgc6G1DGLEFjrxUVxuFvZ1wLUMod",
  "key27": "2LGmXQBuyQbXoUTWufViqqavmx5mqfCsLcYuBqY2q3rZ2fQ9VRW7P8LEKWrnapvcUSvfbxKVoFsv2XcEo9znU4QU",
  "key28": "ZzWLJYsr9dxCnqao82EPWjokhi3PnbpiwWWAQm8pH67wpHeDHEfqinJCeFqxGPWENqTfqsRrXjYYQFTpBkFZvur",
  "key29": "2gixnBVjjY49gKH7LK52C1tefTx6sm2yzrK2q8SDwByGHsFNXP9thvm9Z3wM7EovQpwMsr49q6Df4hoCHtuNWfQZ",
  "key30": "3zr24Cv7fNemKSETAGVY8wrw4fnyPTPEq6vGVzLHVtNm3tKUiHJTF1wJ6DZQrvv8bUxWe2i9ZN8wKf5AmBChfNEj",
  "key31": "mg6tJahgoxYi5WhkmCWfZc31FcnsWFzTQxv8YdnTwrdL9cSCf9Kouu3gAnwD4Ukd6cpryW72ao3Fme1opcKMKmy",
  "key32": "Gj6gbEmZat7ujDNbUHmeaMA1kWWrJLJHRWUJkevK4v56DLAA2uEGHwGfyZyx35D3wvrjjT7jUqpMV6fG68qxNML",
  "key33": "4JvTsLLQhzXfKSn5i1dc5XzPPMFGSL6RUfXJ9dcE7fNVbhNopfXCJp1EVkTqfzatYrAuctCBTtFLQcV6YaNfCVWd"
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
