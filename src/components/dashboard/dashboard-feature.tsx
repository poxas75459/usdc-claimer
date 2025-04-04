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
    "3vABMUF5csnU8bGv9skFnj7YXTV7CbGhW4cswcExwjmMeBQRAF5A1FkcqqRqHyzpACeYv1CeVSdtFEj9aeR7wiE4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BVYQed1mHoyd8euHWiNFaNbkKhTZV54gGavZT8DzWtcNtWwG4NMpyK38TMdjs5JsTmAg6pcwCUy7YnJgjTFCFN6",
  "key1": "2WPETD3ZxJSmiYMvUb7fXfTNUCDm7uGY1HZLJLMWWxHeaw53DutWC2HCKdW5BSRu1keJMLB2FHemdWo3cpxihkyS",
  "key2": "2Wy4Gb4wAHDDFyLbiYFLwcoYyF1Z62jQ9TqkrjG3hDgJZNpZYYwhWAknM7oxrY4PEm1wxqU9ibFFhP9NxDgXgsux",
  "key3": "5pGVbkBsCsLbQfhwajM7aJREYH6J3mVGRe3Uu85cw5z5iPCxgkTzbv2dAiWpXh8bpazUFku1Veo5iGijyS7BSC9X",
  "key4": "4Y6jxuALFx4oKsSctajEwCoJNL9QygS88PkUWnZkKfwscdafGaR4ZDkvSFzQjsB5xHsugY9kwrpH4d3vHHSPw9ez",
  "key5": "5u3KD4Zkb5X8VQ6LCyESNKejZqyCD4xptH2XpLpkoqkMeDXuFTg8V4udwoK1DbMzpcy31nvPWjaE7jkx5PuKWYBv",
  "key6": "3UKCPudoLFsj8ztzJamo14gymcwpLu6zwMNtf5yWu6fSyiWEXR62rcCGE8sdae3wmqYeXyDWM5SMCF3kbk1vkP63",
  "key7": "4sr4EKqnnzCAZUtwWm18A3fPDKm9PBaRCftmJnVvFn91pBEF2LwUjgwG3JEY66ZE2tJ7ooTDXRxbM6GWfEnBG8uH",
  "key8": "YXvXYXVDYSZm4g8jhxwGavwmjKHDjH6RSfCKtQJY8m4MHUXbBqFNKTMEc2PY2HviQHkMPYprZ7UuTyDkz8BX6T4",
  "key9": "5Kqwt6iZyoYzAmaJA1KRKjW6WBXXaLarg7LKM6Psugkmh1TFS9MmVq7WtereqiLR7nLFQAxdi6bcjMPUedFk477a",
  "key10": "671axsi2WqLhFqYpwwijHQsbibBqqQAJDmQVGSBLWPT8qJVwi5wS8X9MKz6azG7aBUTFnhEqnmt8x2dyyauRMqB6",
  "key11": "tXdw6VFaKwmEPPURihiN98hoJ5ZngUfd95bYE2NtnUqgsWmphBi46BzsqpMQhbwefqty9trmLiJjgVb439aPFbo",
  "key12": "3QhpKQNGNxPDNCppjsH19tCNxn2qCtgMumsn6MNyirSvkRUxJArGf3cTYw9Eu3GiPKvwyNBy1L83jHvW67nPz6bD",
  "key13": "4bMQ13C4YJk1YyVVGHJsDNpnoodqDNqfHzxYicqjiEVoQGenXmMMXedpMvqc3RVNEVPENhdKsJcuYagvWtQHxGFs",
  "key14": "2jqzD2ioBYsZb8bc9i5PzUCFSTTw1im6fcudMpSu6G51ER5zYL1FvBKWwin4VYgatjG8hkEC2yYXSWWeZVNcPyYu",
  "key15": "5vANDAnxFadwq8B665NCcUm8G2MR7jCarMvN2TzR1LiXB6qDaPph5bLukAvGRvJfL72WYrKLsLksQmUebQ8CND79",
  "key16": "3UezQb7mGbFJdVo1w134FfxjVWYUoTWesV2GRLr7hSrWBH3dP1U5qCHXHhTX75hWkHnYbJNmxcWjihNcMQd69nHG",
  "key17": "oVv6uj24w6jT5znQexkDz1Q9KMEbTZBXttQA8DjzfjLEvBJwSGuS6ALtAZKAoDnMfHuAbhRkwgJFiV3fXpgWFQ3",
  "key18": "NRCFjxZ8YQxBB6JgpNwmhvc6wAiF6emrYb1hMcobgzvNLVCqYcH7AefVgr2LoDnJT4jUjpSHuVm1M5jRof1oXJV",
  "key19": "3fekSLc9Bo35CkT7aYkbJGwWBDPAyMLZBNYfPGfXRuP66sVJHJh7t91KjmdfH2DqVQ9DK64eKAqwreRW1Sab5r4D",
  "key20": "29QeUunxc116NsBqsFTU7CFbmx1AmhYShxmzar3x2sqznQfEst7NBgt38QjGFQeQa5K5EGxTks9TpMtzMfhUkVQd",
  "key21": "3P5SN2i5rDRvoFkZ4XnykirLQpLaEAyiJEbv9ehrUdv69P9KFKJd9RDC48K4AoaguCWktiqLDySg3hv514Mtf7g",
  "key22": "4q4vxpeL5HAsKEzybBVNEKEaL12c4DGRA9MepfyVVAHWpZWcK3LB4nAYR4JoNs9zmzXS6H2K8bLAxkyPeiWuk2cp",
  "key23": "4o7HhSZxK6zF13LizAVDUC15WgEVty2sv4VtaL6Uv1ZXZLXpzfj3Cju7Ps1uT3DW8bXqX9WvKey5EgSassboif8G",
  "key24": "2TsESzMQAH6Db7KTudwGXYUg3rWbfP4qgsmAw8CPhg7BeZnrE2tH2tvahiU8aXRpBJW3tzkWqNv6VraWAR4akixv",
  "key25": "4QhpJKrkgjDGREBHNj2E82WJnqLStHVyxxBEQmCgaDqi5XtZhU6JMHEasuJtaWVLyrAvdtjhzvEbLhSD4RhQyyUr",
  "key26": "3Lhrq6PBp4ji6uJ2a1sSArtFrMDxMw3QwrLhTadooGJEiRGC96br9aWYbN7pWGEygYepxWdau1rzdQVvNUiPZK2g",
  "key27": "3HCZyPcjz8vEVe94rUwFa3A2HEUyFvBj9rBEEyotLsY7bzoNspCNjcPzKopYFGSizoknLcFazTzZKwe2TQkimVrQ",
  "key28": "2oTJk1ZdxdyNsuHS6AAeZCuRAgZ75tW3irjDM9TxtkcGUfuS6ggBETVYUuYU2JYXxAwNZ6DbccmnCn4VYKbDnUgt",
  "key29": "LMauM4mT2JQcakRHsS5sAbpQhNAZDKr2d8QbddT8nty2Ere7W7HjwUxH4yJ1LJFpM1E2mgiF6N9x25mxKFz3vK9",
  "key30": "4hrFwWj2YNbQfKb3HwXHBt5VhahTwFTNY5if8FC8hi4p2thJpz3ijNEp1qkAv6SnFrYYg7uCsnLppeVgshyE5nmR",
  "key31": "3dkQC5MWvvVDdXAYmSfjdt7uCg1RMgMjhRyJvper83sJd8xJZUpthpsEcLXrbrnpRH2VRXaqcds1xXbV8HLp4siN",
  "key32": "3D4zFn6Fya8qDCSNfg3qseiXKNkgC354nWwoAxqZfc4GRCrbFJ4G5zmUgdPZwC9uWSxrAkntJEqstjhBhwApSnFe",
  "key33": "3qMuu1tr9qrEf8YwF7mEwGL8G7Ex2huvyMJonQHwKzKenTE9bpabud3wbuZCANc4hwYX5RRBChv9jfhfuMUhiKAC",
  "key34": "25y3Pso1kdb19Cg28Zh6yZyky3eKjqnvHFrxuvfyu8nkaJRZJsgKFizxu97QJSgyC5Ecj12bJo9Cw39GWfyG1GJQ",
  "key35": "5JjJFTvFFTFBovn4qdtCWa3NQyryoU3sK54D7LAQ7sbScYdds1L63fYtdcpjj7f9StQCkbjsuMmG55Bg66f2p575",
  "key36": "5XEDVdJHkoLXXHG3H2A5ZUiiengkELdLARen8EMwAADvzCwkE5CcqkWywZtiaQv5Dq6qgzAcNbX88akZ3mvMUcsh",
  "key37": "2NJD5Tg29vRuHjN4gJodRw6QmBTrg2aAH7g92bkAbmPNpE7gkvFZSpmkuk8W1X7ozXV6cyTxqmyuPrE3pFVU2JFx",
  "key38": "4f1Wqb5ioYfmrLebxtfhLbxE2pjuGFnbEWv7WjRKA8BhXunw2TKVe6NfAb9tDppdjZwHP3X598ZyK5ymYQaUPg3d",
  "key39": "3ojMqAXF8zzGEiC1J8GvJ8J6zppZqLLfuT3UhxWHckSM2GxGx75FDuXnsMT4SKJg7dYc7BBkErUrBWVNnFeJXdQP"
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
