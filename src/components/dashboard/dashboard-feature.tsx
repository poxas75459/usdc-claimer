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
    "HtQ7YiejUH9EpCZ1KghiBEAs3yhe81r72ZMNC2XxgVJ3nKiu3wYRP8GKhRu6UU1AXVQWNaNssKti1aTurcgXh7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LHBjhdrChoxxZjfLpUfDVTB5SHXq6hGyDxZNsit97HkzMUiT46nYfBd8xaLCmvPtqVqNZa21qwXeyMJfGC3uYA4",
  "key1": "3o1xB7cV1UBrnDJr1f8h2LfdsggVJrop4go36yqtnXJULRoJjgmFpV6F7tLWV84zmNmsGyu6GXLwfXjakjHxazVb",
  "key2": "4aCsvq9sPEKBFTTxkTy5wbuG3VvSTN42DgbqBC7LrcgGQFWnNScg7DGRsH56riEM3cCipDwK4Y1oNYwapikY4ZGY",
  "key3": "2LZ9vDjJRryQntgPtqAHe2B45PAUufE3RpXN8zPwHq36WyVQUVvo3NQzC8MawkFVxgHKu5EiuuLzLzDN8wFnkadb",
  "key4": "HBx4prx5znDKxCrqQ9kDh74MixWfTTvf8ixkis4CGoh9wMFVtboViy1vqZiSpP1QkgT9ayxaefSWxVKcE9q7WY4",
  "key5": "3bjiV6s2PSJkn4TpVJNmKrN8ne2dckBdxcVwLBCMsxDyUaoxHCz8zxJWkFwJ8cP4dMCVUDdPqC5sp3HrR2VKta6z",
  "key6": "2FGj2HmeD6fCBHve7r8HiBEhDmnLu1saPC7dRytj2kZVGKW3rBQ5FCBNW1BR4D7AuP8CzfiVV5F6Yr23UKBAijgi",
  "key7": "54AP7Msk7bYWLnbCrKtmkws8ot3dbdGAWFvdHLFeC3hsjgzQQ1XjNML3ySatbpNMLkpg4pRmB3k2VXeebfj7utpY",
  "key8": "4QkMMkU8iEWBRuD1eaoSvXdtFJN33RqLJZZZQuvLqxz99YosxxxGmracYYJF67YkYWeaaiEtgxKNYECkzB53yvyW",
  "key9": "5vETVyP8ySaU27kQRnJ7SFmVm1TSeECXG2vTCwnUxgVyhxS9Q7X5ojjVvdTeStZZXBGyJdkZSXR6uuwBkJQiRGHR",
  "key10": "5wodUnjdSpoS6srCL1jVRyqHrndSzGZGirsib9MAxfZqQDWc97cFsYUKUcFwV3wQap96JoHJLtLux3HksMxBR9rs",
  "key11": "39Ho57jJQAfFdNkVLpcdoSSWURZamLnvtLEKKjDyeoLsZSRm3S6Yt25dpT6No3x82sHMpup2jT952dCG9yNCVoms",
  "key12": "2XCYwPDUAsyGvBsQqozgChivEVAHBghpVWvkA4NzxRnv8B5qwQmJ9Gt6s1NFPwt2t6QqBZVT5VYZysqz7XqgVTbq",
  "key13": "5hhKYv5idUQXLJXH8viYTVMZBBHHwzBDcpoo6yrqrha4pUVcjmFWwYGGNwQPwWjF2dxMh1xoEoo8wHFLpYAtp9Ys",
  "key14": "5QbxJD58omqXqxrJjYjuWDFYG9RcFdNzUgCpVoEmzueAQw3tefdqXsBLMWU4NFS8Ry8FqEZTVUVRPd3dX3PXFmdS",
  "key15": "2v9tHJFEsCqtX5LDFLVp7dHJyXr5d5YLDeKDX3fKUPVsvXuQGxAwUUrK8vV9wwg1iAi7fqfRsBrcoHVbzyU8N21Q",
  "key16": "3vqoCBMjERMbaEWvy82k5FWPXpvFHjGsUs5iSmMWVWB6815H7LLtBEKN9PvSrWQPJK6xAgsFPGMc9uejDRAsn8X7",
  "key17": "9sHuzGdvZE5XCtn9zXBe55pCaCkvcAp5F9Xuh9SXVKxEgav3qC3Pang9Y15HheuXHPSpL2RZs9vgHLQvHyjfphV",
  "key18": "49dzgsKtkMFDEGvzGaN95vKpgW27Ska28q2tE6UrNgAHs9Uh7DR5hPaUX9PBUM2HWR7ZrqtL1cxFfVkt5fU6PeRP",
  "key19": "2t8QLU8B5HbjHw3CsNEu8aKezDDmcM4mQrYjCGCGGRhhKctYn7mnQEGf6F85DRFwjH5z5oj5bN4M8P9SLNKAKBf1",
  "key20": "5ZhFRyFQmTjZYad8SLy59tk81Fjk3zJUF1AJzGEciVwccZyfTidWNCPjgaZmU2D5yGzZ1Gh7tYVUHhjnYnxYD5Np",
  "key21": "5y1LjjbXmFQY6mHWJCQEmoSGgKHJJWTbzCdH75J14bzTKtXk2SnWKELTSB1m2WY85CJ4dyaM3i9zr6e26Co2MM7J",
  "key22": "3FxpMtD1h8XoAvUPPknzjAFjbgJKEC2Lu5AbBaCFd5L61xDRUoXhVaCveXJJYRVgQL5YxzFx9rafLSzyZsf4FYup",
  "key23": "3cjw3UWudgJjbyx1H2Yv7QQUzim7bNHXbumUiw9tvhwcN3V6oyLRrQ6gDAvzXQ5Gt87s2aEMCKzYXTTXcLiyokpt",
  "key24": "29KKV5124nTdeqpyUtjhbs89ttRAVKX6DHdMoveNZm5uyoCcmAH1TEATHXLJZnP8jK7CDS6A7PTyNF5QeAMQRAWe",
  "key25": "3xkLsfGEPpzsssCKoSCe2LcvfxrctWbSmfa8n5iiUBaL2zYboRJ5YTip6yfVa1uPfHhgeMTQJwiw7xYNNBh1DxSz",
  "key26": "6osHfS8XxJ76jV9in6mGMQbztvHoHdCWagG1oSZ1X5P61vzBzfTLtP5mERd84MjtT6ngaxbx6Xsb14DRyeSoHx9",
  "key27": "3L6td2D2yhYUxwkkzn1trA67CAT27YrY5mwbuFXAG3Z7RNB6jAhqPLkPA5Eogpsy89JXCAdp8KabYRwMdLYCTa5P",
  "key28": "5o4TANS6CBzqnPqaFir4VhcCvGxuoErwNUCKjr6S5F8kkFQDabU1qR6ckgpzP8rPQXWChbngMZgryu2kZaypDpNa",
  "key29": "u3fPGvDpPxH3qGnj4xCC1fQmgHV1m4x62iUA2LUZYGTndVsEYYVsn7SpG4iBfA3CMUHHefFMdDbRHJ6nSZHXyXu"
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
