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
    "sQVhWXZ9qDibWMWY48x379oiFUMV3heXkAiKgMY3zLMDWRV9ovX7BvLLZ3bXFarKSARyqnahRJ4QeEuirvZ2bXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uF82bv7QgTuT7qANGE5v8D6m5uNkc3832cMKvWjanwatNcPUjVGuZFf1C4ypYQbYrVQMejzZebHYtL9QyCPFqBw",
  "key1": "4P5EXrRDGT4Y2zwzrC4VX9iF3sA9TuZyyfCBcPkuq7bdU9ymr1S7TxCq3NmyAud7PkiXFGyNAye7skKXj74B6ow7",
  "key2": "66uPc4f87DzzAAfwuWUkfvAQDt4kQBcFNvMvqL8YPUkRu2kGpfapRpGwLtqvTSfSsBxDZ1bSKCwBpXroAhA8f6Jq",
  "key3": "5K9aKj4eUiVpoVL3fzQSvtGh8KrP9SGYigFfZE5rfFH2CnrV7QCWSM4qNcBQcQgjDH1KYUrPrq1musKano2j3eGT",
  "key4": "2mqE3hdYQYw7gRHafP5NRiLaWiMggZ3ecPyjsV88jKuZ21crAim5n2qNKwQJxAWh7Cf9edxBffTb7TreZXncfG6b",
  "key5": "5xiQvjHPvv6SG9yL275ZrN5oQiYJejyATnqgPxS2C8Br8rnucN7S8UneCPZEj61jaUncvTwtfk7kp7vkQzSGSMkh",
  "key6": "55E4rHL4J87QQAQC1FcneHFBwBPUjCGDkFN9d9azLhE4duaEsdDhkqRcDdh5CkgNt7Bx21qtSJ57NnNaPox5gDPr",
  "key7": "5q1kheuwxyohQrNrDK8HqNoTeZ4FbAD5b6zUdCc5TVgEF6wKrnHC4E8sVtyHokqxZUvSqi3iwQ7ZNckmmk38Vbyk",
  "key8": "2yX5A4qsUuyd1WeHbisdhG2SxjhDXR7bF2aGkSBjP4JUPi3rg3MdWyo4GEHMceVo61ikt72ycAqnYD5yu3mXscux",
  "key9": "5ApUYLnm7GaBvunFqsbkXjN5v7VixCe23E9z84eEkBYVMdv5SQfSre28NFwb2z6rwS7RMfxo7KrLxeoG7hciE3jQ",
  "key10": "RozUFPfmk2ymAyLmxCFbcwQKkT6ZJVb1PSu3e92BBrJfwn1MxgEUVCXy753pEa4m52B8ZHcMcihxXgvqcLUvR8e",
  "key11": "5xkNt8mw8oJa4cPYdmX7eUhBpV6ABLCqs8QeTuVapioUGwb4dqtxEsfFabpKoqp6qRTaUdSbrhzmrf28mPLQr7wN",
  "key12": "sWwAtAjiFpuNcqBXk7EtYLBKMG95VmLBqrnSkR2RszJoRAYieKhGzHcDA4JJ2NiS1zmCY9SnCbHwuzc5hoNejCF",
  "key13": "5Jx2LVozpVP77ws1SbkqLX1kAhXADeEs5rw6JoUshKSA988aSQDbk5xcBizv82P3e87HGt5mnSP4eSxQE1p1gdBU",
  "key14": "8GGoYttG3xA62dL3Bk1swkPjY87B7a9LFMWHtmh7UoTSTN9LRZxunqKf3YVtPTEUYytkTGoxSSF9GxQsSpGKKyV",
  "key15": "zxFFFReQDKdHZMsdczE15Mj8hFKTWruEZNp9EdGmHb1ZpXMsQkUqGPB5CBVRsbvmBHR7S4xVa7b6c3iHcDjNv5g",
  "key16": "4ggy1xEaQKu6vKNnHDW2hhg5bRiEzHoQxaYrQ9L5WyduGchXwNVY8rXavqUBCGwoDkrfMc7NPmxsFgdVqLfBtHpR",
  "key17": "5yRSQNejsAPkHCz7Sw8FKdG8uxiXwW8vyti3qTUHqgauzsjQ35PbXthvyvsnnSrGu5fVjvPA9r5GfDmFj2oaxJC8",
  "key18": "5NjC5FGmTZcDc5mJovCXMmGFG77Un7Xbj95Cv211TdtC8UWMk3q513hh3xmQByp6RUJqJNcNbQ73ZuLyAotZsN5u",
  "key19": "ceDBhEpUa4fcavrY6RuAMVjRNCgZEVou48zFVMTrTF3rzzeSnTjqScxySiTCBcXJehX5FfRhUFaUpQFjppsSFQL",
  "key20": "2uEvcyATdypUtuT7mEYH5C3VesJTU12zho6hiwCx9t3ExuMi2hBvpLtwFHK9J95uNpAUyGgG2eBE8CLTt3hard8w",
  "key21": "3g22H9KTxLf6PhqFu3cZWkKyAYW8KcxDtS2MdYCW4fYm7f33Uvy9CyUjCqe8hNPsyD6JBXPeYUetj2x1LNoySo3m",
  "key22": "29gAkEQB3QTxLUt3BCRLRePbhMMaEsgqwtpCc8TFB6PR1u1EQXbqdF4TiHna5W9izvgsJag9kGuBfs8MzLMj7CKL",
  "key23": "65jbvQCp2GKuxbV3cnwhfTSRQJzwvXWsdRQhkttXtM7wsMQYEvAh7Eqs31dNk1iYcLZtK6dNTRssVPvYDsg1JhyA",
  "key24": "4oxedywGXBQrYM3YRhcD5Bb3oLJms3u61RW7FEGxumZPBeAaWZrACWMvvtvasDyCwWNXFxjwdsJ4itgpAKmAVbuq",
  "key25": "3MJAoJuPVAoCycJiymFc88TY22oxuhXP8x5iFmAoyrkb2d3cy4taZtX2dNw92csV6TpEJjQeiVmQcTj726n7BMVK",
  "key26": "8bg9CYvgcS17YCSviTQcBdBv5JRCGkyx3gBHLtL2rbpp8sgbaJM3p97ASNGQtRCeVpok1NXJpsuiqDcAWDHS87U",
  "key27": "5sbRK8xgPEFKi8eopcskT7dCaNbX4252u7iwSWiGFoddu9KrgZd2AvQ9J68gdE2wEfnzMkCp27NRojoeK18rNfe1",
  "key28": "rrForeE8xgUH33GxE6ALuPUhbkkYXU4u8JSe4H192ZLSz9rcimepqABThXJHkMoXN7Nr78yeNosqr16ojfsG9Rg",
  "key29": "5G6br9f6xSYSaq9FrqG8xScSqcCtEukQmVXT35sza2JfW53jifVSNdnbai7s2ArNfWjJuY4dHgdHAAMy8DmNVwt8",
  "key30": "2u374dgREPTmZNYMYjSAikjViA2oYeAbWhoDSt1Lr288xvmPUvPnHGsFf62uc2j6ebbjDuEMFDcnAyp7M7HwQdi1",
  "key31": "VczqZv3Wp4TKdkpSje9NnPS7EpYKQ64hRGZuo44Ypb6yd4qjrMWfKJEWAfF4odYKgoAjjYMCxMgLQYBNvBYp7vG",
  "key32": "2ScFLC4xF22yJHworoFLi7Nc4aULSufhpwUABBpWSDh5sY3egnGSD8wS2APZn3Qmwo22NJ4tuNtRjYUiC9QHLhf8",
  "key33": "3JyAASV7kq59nn7T241jthnKQwGfkhYKYB4KTHH4anYoout5gyYSHEMuz83dFPZExzFmRqQnCoUX8hTwa4zgbizU",
  "key34": "2d3dox2QDBvSXg5Mr8Q4zKVsKEshXbg9KFh8ErHeD3ZnNtqi9E1m7cZWtG15oQ6jxQDU93Fwwqe57iNLiaGZuVuG",
  "key35": "3jMR55hBkpDLouPi2ihYbSoMNNL37ycY5oijmBxaYtU7Qa7Yd5sgfUt3UGS7dcVRPtQ4PxW6PRs9sUp9vTm1JRgv",
  "key36": "3jjtEFv6iEo638gEvwuMKegokpdMTgR6H6nGLavPno9Xhy8FpiRepU4p6TNZTwcaoSVsGRVpSVm9oHB4VncgCoHe",
  "key37": "2wvJx3t4YMrSTTMDo97TkZRkpd8qFoJAV7WS8A4RwFXm7g6CvBCYLWzNQr3mEPWo4bETg1foZaHcVTDoAPNDe7hD",
  "key38": "5MDtYYeWN46j9kcLfh53BrMdpUeNPQsTJLdfCwpkZns1QKN8dYUQbAN4mrfY7HT214xnrAS7cHZdmKZB2wfPjdyR",
  "key39": "5xA8QTyP64e1WYFEXTmXchdP1ZM2yA1zyffE1Jd91BenPZ61o3YECL5TmLTnJZVn1efZbYjghxhpkQXHXvZoG6CR",
  "key40": "inaNTDREj4LbpasnEpkExG4phqhmiXAbQeCWkUGUY1wdZo1UzUka1bG7zkp9LWFs4DVCzWZikNTNQ8sHpwM9kbD"
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
