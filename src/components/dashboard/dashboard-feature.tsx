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
    "66bpR543ntauWhmyL7pVMpmuKA5pGngbCD3kj3L19iKBi8on7K9UZFLpDeWXiwdPmJdR1Ht9G6k2xqx9mswFQnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hmqRPcmGZ1pgEYD1WE3DJdJHFxUJsRYwFyeM1UQnJSWXnREZm3B3UdPVGwuaNNSqjAVPacnvKzAMsskTZrWH9YT",
  "key1": "8SkhTzDYhmWrucrwsHVaiYKucRYnHVz3QXp9mGFaP6Q6Vjnp9tFN1UR1Tw4DAqb8UZ84bD7BKjdz7sQSfc2RdHe",
  "key2": "4Ngiv5W2Y9U7GbtXDv5RvzNWqHaBeoctJLstWcJFu5ZSAvXugeZfNq9eES8ozrtfhiuutLjX495bGvbDt8TehWmm",
  "key3": "393kPWcQ17QnogwArQ5VKzjQDFw8CQUL5mLHytM7vrqmzNeaLquSSdb72765Q8FrtY44vcMm8ho2K4MfhsWLBLJV",
  "key4": "612imPxuJzMfom9L4G5TCAnzNTFbfkGLgyp98d1rGGWQ6i6pxrR43tXHWPV515EQSmZAo68sf9rFNTuHZKNzDmAH",
  "key5": "3eyXSYqMg9RTNpjES9fF4Zhofu5178yiTJFSEp8okXRy5HTjWV71HrnTqpYPhsd5rSW3TnRBz2w8jpouc4hyJcP4",
  "key6": "4LWfw89zzQpk3rw5dWv2T8eJXWVvuhwxwsaDrBpUYhEBn7XpCQbqy5T7X3qJwNJP7VS68XswLPztuHPULyPu1mEK",
  "key7": "3LgHagoatG9jcQ2eLEdXp9LQ6S68AbfXNniBDPRSUdTELNyBvH7uf7n6X7C6tMSJCGm7Wbv1xpiFQKtDo7XHgRnG",
  "key8": "zSGfQ6RCkrUP21Ubat7NuuKGYsPkfBiC5SxPc35sSW6TkkC9X4vamZYbNKNpJFyxVFrSyW8fMBAB6UyHyxCND1F",
  "key9": "2hbKS8v77wZSVjw1BfHQ6VMUmkudRdLHbVcHpsaE7JyEu6Xir6gw3bzBbzyG4ya3QS9LsTRe4KG86MrwrQcQAet4",
  "key10": "3NwZyMDT9WHJtx2JRyNp4B1wHcnBcqYNvyQBxoKsjLbhwz8MEdL9qCiqLayviBrDjz1GRppGFhYyoR8QxNAap7NE",
  "key11": "32wt9o9M256F3QtegaC7dinkJ2pjujdezg5AGWCvT9bna5gsJHH7avD5d3ife6wA6YSoJVfdaqfEmPUpANzUw25p",
  "key12": "37iqdFfDqodNxghTzPQMuvBQKjmuseaJAcK1SowZLnjebTjQN1QDMWLtHz3vTq4amHW9oJgeGFrBBtSV8p4Tozf8",
  "key13": "45xKiLQRP3FJt4vo8o21MJMFSJbnYpm8cb6hCtiswD1dSAnibqhQeFK3WhGDQStcVXXJKGZTMHeWCy3uGAowmdsp",
  "key14": "kZHfBbhvd9F2WbZG4AU3pJBc439jE5qDcNkiRRe6vtpdSNL8aaemKPhuf2qrpJaJU5cvFVrnTM5HvjZ8EHvLziT",
  "key15": "5F81pzrRTJvFae9sUquU4bCEHYeKY9Hh6Ve3HuKPn2q4kezJzgoyAPb2PV8w7ZqyXp5E5YxMqyrNkfZM46vmZ9bd",
  "key16": "Y5EhDwAFkij7mcqAPKvtVbiw7VzjbqFSYsYTe8c5nK1MEM2zcwQYYrxgp6vvkPPpqeLQgTrufajJ45q96pRMCYk",
  "key17": "UyE3nhFy2Mik9brph18kRNHbqRUmHHPBLfNzDfMsGqhcKLXAxzVuvYjX1GFzGbAu3pCijkVDvE5fFXJu2ZBdqK9",
  "key18": "5sJa6jeNMw2cTrDbwZnphJRryZYgFnxovCFYumgcg2E7Kzjjkx6HA295HDKELLFBtTVkejcWsygWCJRJ9KtTfeLf",
  "key19": "4SZv6TRiv6NGYRVfTNtpPFT425vvw4x7DzFBeb8Bx8swi7PriS4Zon6t92LVdWP6d3cAccrCFHCYtXL9g9SY1hUu",
  "key20": "2x4rk5qfgS6DiteQqm9kh54wGX6n3FZZMMjVrcAqXaV2cZzCr8otx9xDkmzyFYzX2FnC7DgsusSowQukCzHMDD3i",
  "key21": "24iiJUyJysvDUEy8UuvMYHRGuM2N5egsFWFs9a4zaYY8g97QQ8JYZVkbusDahGEQYBjxu6zTzHs4PAfHXb8omPyq",
  "key22": "3MfZjXdNBKsbt5KMQ6ugo8nBSZBdeevaVpVJfFgcuWbyhuuXSrZiuwAhBuxwme5Gz5dxzgJp3s4WHBaKaFp1uQvd",
  "key23": "9Fz2nRuZP9TT3ckyFvUxzx8UC6H881nxREffc89sUQrziS2DyjDj2K668yGdoJxRN9U3Pnvgzxg5tDWnCoAnXXy",
  "key24": "5EuReWbRvtL3DF76F5dtbZYyFBZZeAipW7B4RE2wqdgGQQhigPzZawrsjL3Y5p6CFGp8LaZjUZVnhhUppdmvcB3D",
  "key25": "5RjSqp2FXGBDguMkxztkcbu8oPVgKJdJLahA4Sqq2pxrwYRRKxGp9TGG3D69amBjwbh9tsCPZXZGRxrJ7w3NVwT5",
  "key26": "4YpjEUo4psN97uvuqq2PVgbBMWsuotFnTxLWK43yQCbrp9QntkS6WHUtVtv3nwG3rAUoyJCkp8md5vuMiDEtj1gW",
  "key27": "2RhSwebuGNqsm2pwyAvQwiMHRZ2TNgBeBgDfaAL8aGUxyPNAWRXeQgrYZiG6guQV4H5G1aU6NUaS3RCz4FFktLmq",
  "key28": "3S6Pws7GJkhuiiqqz6uz6Lfr5z5m4m7GrTewCGK6HxGYNY8A6FoUjXN9X8PPdHap5gBXGb6wpfUbWvv86BWTUKH6",
  "key29": "5waNFrNgCimURMRBE4mnCu9qH8CL5qshFF7y9zPTNpmSner9uniutvkgN927wJ6h72aVZPv1wWUvmPnfEW9esCL3",
  "key30": "3y1jxdzW6oW5n5kS4YiVrRcuaJscWa4e3Vasy2xtJvrqLbVRHjkLQeYB4so2ssBiVWfEjnDDr1JF2SHLUrdRUFTu",
  "key31": "4yFh2W69aaDwR97BgDdPqHVmc3xCxAduqMEpLJrdhnFTxzpMJB2qwcFdgaJATEpq2NTqSGoXpWPiPDTU4eE4YFfX",
  "key32": "TY7pCdZDWZyAuRyE8MLvzTvDGo7yh4UagEdy395JEcWtnqY3n7WCzhLJz155J9Y5sRNF7EbmDaGdwKT4Gdn4s2q",
  "key33": "2DQGcVJS5PwkSE479hRDjmweV3LvuQrU5NqiuFboyECFFLgZdRCmo3qL5rEeUPhL9MfLW99u5MHKyoKfAW93GCDh",
  "key34": "5iZ3zaVsvKMVbp7jSg6NdCdhm5QSFwPXF5zAxEanZDgZmot2M5jpsAowiEpzxCVxcCVL7QeRU83qHLorHyd6oawE",
  "key35": "2KXVPzUof2JstuGjjYcWg7quvk82ny49LBT9Z52jq9WaSjZwaHhjMff3hUj3xmuUZfpvweFvuVjRGVRt41S5ptAr",
  "key36": "3yVjzaSyJ316uWwGanD5UFn2PAf4bRxyroxm9HpHEimRbWo1gdH8v9zKJUcMoHQznknaeJTRGnBBs5qb1J5YzMmQ",
  "key37": "4LuUVBYJahtMEKrREETLbbVuY8CiWvJfiK6RbRQqoVmGcCxjMETQfMngazhYcZ7Y7EURgHPQsvAQpKNVmxF2aV17",
  "key38": "3fL7esHN5s45rTQVnBD2b1cWo4cUcRm5E4cEjehczZA6Rs4yyvi2QWwxe7qR7fW5qcxbyGahTCRi3WVpioXVdHS2",
  "key39": "3u4g7QN47PwbG1jwa4xf24E5P2dX9Sx2iEEBXzjkRZe7xME6j3VEAEcxV53gwyC2sTyD71YSNof9GyqgFuMX8qrK",
  "key40": "41JW4JkmjdNqqt6Wymkk4hSBpbkNa9AfRnEwngzc2yhrt37TG9XVRZm1V9mQ3Lg9Mm1BSbrkCZWs6hs8rua4wDmu",
  "key41": "e7323C2WaJ9hmN3PkDXh85YapwSfp7wtFjEv1Yjs4t8t2Y6HCE5ZFu1nr1YDNNFRRHk5LcgafkHY4uUZZyU8vXp",
  "key42": "4R14He64w3yGycsKiif34r96Et4FWR6nZb6wmGFkYhVFTVcTXLMkYd1LJSAxB1HvatztmFWyDid4uZpx27wKBCie",
  "key43": "pE2cisSwukDs2HJ4h5ELcVmSZDLPsSarfdeL7ohbDZiSh1v1UR2UiZkrpCH3bgBcS9nohpXP2c4E1KEiL6DprJ3",
  "key44": "5eFKLtwEfhVhgUeLVyxLiyaGyrSqVrRNjaVsdkxQNYSpkr9KAExTiHL8uWTJ2LRpD4fy5S7NaRKwScZCFw4TpeEY",
  "key45": "2sEsvy71wjWhQQVYS4pQDdvAtMvUo31h87n8vdyrS5zdKEuAyhgnmRGr5G5BjktW2wwB3vZ4qBRxfjNsNUg6WZE9"
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
