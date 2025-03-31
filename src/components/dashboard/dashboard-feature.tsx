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
    "2Fbdt1STLdm9PbjLWsMZ7ekmpJhTyygv6WAqGmSFkWALtgcip72kpxQHfmEUKtRtu6jBjJT5QJCzhCqrvqcnxoFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N9HXR5gLGub6YccPvhNbChTNcsorjXr8hWu5kiKget2U3EYJQs94sKWztUAH3sZMTeUF4b2EtMQoF1zdW2sFmXU",
  "key1": "4Xg2vKVkAuSnM3LXwWuoSjunej7MXG5MMZAAD4rPTwafyvkU1XHoB4krUQe9hWwrfzbKMwQJj4tNZmm9PwFPVfQ5",
  "key2": "2PB2jytKnA1hGd63JMPdFWFEK1dcR2913RoxMMsVczHdD6vyzWQVnbLaQgQ6eG2xSjsazGCMygR6mKdUQUYR8Gpw",
  "key3": "jjYP8t4UdWCKzxZVLMZbmndnzrBArSppk6vw19yYA7hTKtjzH3JQBLGVc3K7nZFme3ixbMVTCBqVr6tcRbEC2VT",
  "key4": "PEugVqSA7WVsnPhHFt8MBxgtzJ2rMFPp2B9K7F6ZSParALm929sPkFs2546GWYEzyvw7Y359Jwhq3bLgMBhij6T",
  "key5": "4pnxmPtA6VR5P2375rEW3515eBydwuzD6q6ogGja17VsHpcrLLnarXnHHize3XuDERSpSpmYb4C2CPy8JtYk59od",
  "key6": "4L3kF1WT1PwUcMEoP7jZMooeAfByCwyyE3C2dNhuesPx9qPgUx5wAC1J5uUFFUoHK6GVoZTNV2R6Ec41YRjk7ur3",
  "key7": "5APskGJCUp3RgSw2p9ZEMXmWq2XHvT7RywAFh86RdQCW3VBRXVrjLhDqStT267QapFxfesK9XYvaPEiCWye7z7Ym",
  "key8": "2Z9Ski17nLY3LerPRFwVZYTpfQknGfrp4E2kuxcwKpoVHC2ivHodG2xwyxWZooULGeqAC19b17xUqmywC85wWcKo",
  "key9": "4DM7XHoNw5DCgVA2Zzotdme7HFF7iHqwvmKKbZKpjNH1EBTm9qBPJQyMzZD2CUG3ovQxH9C1b5FkZD7yYPApmNah",
  "key10": "5XimzC9nw1WidWK1hAns1RwtL5vd1GaN7fTTNHkK5TBXFiw67qniXrXGZXZgwkRTFFa4uKkYTSmJ7kwXoYvrathk",
  "key11": "5jiVWhdceCnu426BUzoGbr78ryCD4aWT1fXyiwM8cK4BoxtLBxnUqYpVAUe2sToVgWtn5kJGt3NFQDv5jaPEyXTu",
  "key12": "561nm4dg2X6wNG85UQVEK52iAFNZoGbrzEWgZCNx8DCFuMQ8My5BSYT9GU99Xnjn83fSMTcDopDL9n3L9CbTqv4r",
  "key13": "4HmuFXKMhP66s8rVeRkKGwzWAv9z6dP6hDgfDR28mCJT321fLKB86t92uezshcf3D3SJdy6bkoytBCszkj21EbKn",
  "key14": "2NKTtSXAFYGjXwv5Zt4LbXudX12PxoCKqoyZocnxsLaXgKPC7hZR4S4vsqRWpjTCVTWR8SPdGd82EFbXt4fnL5i9",
  "key15": "36wMe7KviP5yhwL4ktMdJXbNUhhDJ7jNjskq1hvBFePvTzVRBQs63QTq4YxSLp4HWxURyqE4MiKT1UaE2q5ENzWv",
  "key16": "61peZ8So7p9tMYSSbZeNq1RzBVpXHDCGcjRMvuoerL5zmKp5pTEFGfHvq86k7eZn4818e3BatNFxtGDVPYqZJcov",
  "key17": "4JnRjzNWiohQs98XvJJLNyAMSCyHNPHNt4tqntXexcfeG4PogijQU53GkUrx7npkUkAZsTpSuLTpSZFvwfgSNyU9",
  "key18": "2GUxwWZpKyynTM3GgeRBinqxJEeqMkkUvDmwfpAgZtsm5Wt59FsyoBPieL8aQnLS7nRxsadirBC2gUnKXuS1kGDR",
  "key19": "5vX6fVYu9kqzPpaBBiMDazKiySnVzhCCjgRSDZ6hFd6TMbiMN2uwgKNSfHoETBzU6t18gz8b1buwvvZ9CiZJEJvc",
  "key20": "3rVFJf6PvvAdhrvk4BWFZF2kqTJHdz4yU2Di1T4w1AnZ7Cz3vmTbMSMwG4ibcyS9YmEXuiEBYenMxPzaEHG3PHvG",
  "key21": "36wAwWfkC1XWLh2sAYEZSpXkvLRKVFDqBcAaTdSmNXBrJLDDutzFStE1VcdMbDpe2nZRjRwKUDAWTkKGa84iaWFY",
  "key22": "bfeb5PCMQM8bfJF43hwTjjxdnZ1yTKP6QVZ5e6Qe3QAiLWBkvRNLguYX5q83w7M2wdUDh536KNsjYhGkouT8o9D",
  "key23": "4hJ6niDdoa3V7XvGkDaxBKr5iCbpnuoea5Go85WxnAfJKijNWc3SXNDwkm4GFebcqoGt8msKUNixQQPERYmrkjt8",
  "key24": "4miPGfU1HcvwW6CNA1oYBx6FQccE7eLi2NkC9iyxGx37qXWL7j6qFJxnaYcxCi3H9YJWBcAkgVrSj83rNayQwvp8",
  "key25": "JrpYJU7daPkRizMLHwjiQz6jKJgBk6BeycPCXKw7eGqGqKFHAwzSr62kGs6XKGEr4ZLSZX5SHF2StpJoJPywgRs",
  "key26": "3sSxafxVjh7sLs9S5YV55swJwxegbuavV1oqpvqSRiGAA4X4hx7w678FLDxhgxwHW6hBh7BsZyAc6wFseyZNHziR",
  "key27": "31ymgtwLXyfLU1toopU6a2rKT6KDtxAkUqauW8j2DftGe65sSvFENxxNiGw7BmjQAoFNp4xiiTiuexmmdWZmvGov",
  "key28": "4ZJ1Yaa46rJz9P1555C9nkshcXR2xboFBFUuFr8YT4Rpi3rubU1fsLKPcBPTTeyVvTFfaDR6w1CXoe8yKJUpZSae",
  "key29": "4FX2JZxeSP8cqZWZ33w8xSmtKuE5y5CC55crGH6M69EE57A34FewiDh27Wynp1mABLfT39eFivS3DNESW9dmrKix",
  "key30": "61j3zYnV3NHv4ktkqxSgdPACLbmp1LNVkE4QDWDwLyDoBwsWdMUd46FsBo9YTKL81nHTVQpvRZrcedzWmaRY6Xeg",
  "key31": "5yh2dbzQPd3gL5DUfpGu3B9FVnKFszqVrXvaN5DfFdnoixNLf6UKzHV6zwNFGEZgYHsjqafiUSifZhT3WZEmoNqJ",
  "key32": "3qbRnP3opx6V6GasCqxYs1NHbu7H47LRUsndfU4jx5UvXR5NcLMhYoeUzejWks4CqkrJd5mSwddJAFfASPBdVT3J",
  "key33": "5bUkKrfSDBdR6EJu8y9eVp7mp3xs4gChDpXvgWUXHEfmUSJ1LAn6bKTEX7Y49eN5uRQMttidUVTtMJJ7hB9YJ7YC",
  "key34": "LnaDjEU4fXWvafZyVpe2FjpLixKB6jfAk7SRx4DyPN7HETiDMDBSxxV4ErK8EcUKQ9RTdB6onVoz7Rt4osK74J3",
  "key35": "24RAFGFUDhFtzo6JX3TsHx29Q6uRBE9LjQkQcr9inRpQisAotCDzeujVyhEjeC1RZQXcSpxYfNUXzcKCnGB6tM5o",
  "key36": "DeRinb5krnNJ1cKsWLy7V3VMzdq9iw1CuUezKtSWdUFNKjpWinJRVtfZVietW133xGdKzWNEmnDzmLZCQpDJuAn",
  "key37": "5CBi2SMDm5j9hjjDD8SU1SaWAmQDwZJiREya1Qt13dpe8zAwe5mqvUMLqwqMPPJuAPgvwxoyb36GZLo4nnDESFja",
  "key38": "4qhyaNMA8zQDUnEMRxpbgKCV2mWMsTSkpT2Uy9tMmFspwzeQ6thTbhFEwgsAjU3QkPqLCprACiyNvWzJgWY5qmXQ",
  "key39": "3hUU5vFd3RVK2ptyy8qoMdcqQS26nQeJewU6yeYU8uAxdA9HWtFUtEPL3iEFd5dATxQB583tryo77ZsK4PKcd1Ru",
  "key40": "5jEvrs1kYCHwFx6554qiQGZZBjCF8KHY4rqTgPCzFUsXrnM9Wuz5S1LwJyrXVX1Z5LB6g2ejAmeEcjt5szqwc2ho",
  "key41": "agdaVdy7D5pKGNBrwBUXjTXwWgoEXGX58JCJNuZPAtqNUpNSqYAg9iWYdoApiCMTvnGyZGEChf4M9FhgkcFH2Xu"
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
