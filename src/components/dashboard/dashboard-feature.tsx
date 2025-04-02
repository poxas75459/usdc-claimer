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
    "59Jq1tKRM5SfB7LnUqYek5V49ue4pgP2Avf1jKtsypWdgjv3CBfjE4ND1MQybUd4kWP64PLmzUKrmuF1WHPQrsGg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K9pN7PrccraGXw9SgUDR2v5ABcAyWfzkdPPgkkQWACm3Au4f4jfjGf65eH6wBbeTP85pMaoq8XuN9jT98chvAJa",
  "key1": "21fTYBdBBBZbVtZx2PKwqczCVFaV2QqdrMxtQGwsyrmhRHm9eakN3JDSFF4WxLo6QW8RN2YvkDumPnB3LSDUvUza",
  "key2": "5aktc4gZvNkWtViTnwFmSUJZyJsWiPx4NN1o2ZxY4DNCPrRr2X1PkZHb2gV1khkzWq86VBB9jwWRD8PXjxnCjcn7",
  "key3": "4ono2KjrXZJDGwnAptdpNancykaYu1NubrLVNyqQCeqD6cKbFPhNCWUxbgU9RPR7aqcpoCPjAFCuZR89zegZpXJK",
  "key4": "3kEMDMNU3Vb2FApRvQ7xutXEqpsxT5gqoQDM7GL4ZucEJqTKcfgJhtpzYcaQU4Hvbfq2AMiemfrKHWJYeS2nk37C",
  "key5": "5E1fsZpyQKy6gw8EHJZFYoaBXd6Y5PAhAPAeno2PTgmNfTiJnevDoDnJRnoUojjxT1Wmn8rx1EssZqkko5Bh6mpE",
  "key6": "3WqQmQC7gj7HaysXpvKsXkPigtpYgvFYoapU6dg2DVcJRMEFDX4jvYXo6gsKZxyx7NU2r28WgAqG3M1mF83gBfbt",
  "key7": "3gYDvSe9m2W7cJQJvfdY2CAnrDH4Myx2Q8yprdHM1UVmjvBJpdZc4MMw42SDpfAJ5aQQDMdRb1XywfgUZGDegfjy",
  "key8": "3DNvFvdudMXMLiSYcBetFn7AA984r4QEUd1Lxo9xsPrF8gcQavPFM6MUnaEb7sZGScvCiKSStdAsVDNVyhdX8DRp",
  "key9": "2GdzZyiirftjw4WMhhMK3CxDuCbUX2GDbWyYeuAMxm5pzJoR4k5SZriCRwBRy6FCuvQMG5uSQ6u4zjt8VYuHSCJx",
  "key10": "3vTFf2HBDJrMcwwEbRZmwN4KL8bwDYdxdkbAQGMtedSfNmUDSLKgswarx2857nsPH8Ts6jSkGq5WXZ7czD94TSxe",
  "key11": "3Md5yi3VU6FYDY5kSJgnE3v8vUtB7EyxDwwGMqNiBmbeAf6eZMvZ8haC6zaGWDw4ZtT5nPqSsX85Nj1CzGFZQHd5",
  "key12": "4x8BsxBoGDx9Jnfkn9SmugyAddPyriBSsFPELjiFwbQmP5LNGN3SZPxzebjnREzbVUGzKfjycu9f1Hb2zHaCUqa9",
  "key13": "4jL6UD8tM4unQJeB14qRpcNtUuXrSsynDkMVLsqFM8gnoWmXMggxHeXcPsru2RL2RkP94FzVfyvUuhSZEZ7CdfnC",
  "key14": "4wR6RU3f26Lu7Wg78uUxiaGJzxvmnZouPj6m9AMp7LDHPTKiLCvSB6LiYZbEwWyN7YB56hKGFGYZtuFSPZn4FcoM",
  "key15": "2ZV1sUGMp6eTnV8JKuF1KEPCV4Z871UWVxwYdffsQnw5qkhXMJRRmGHahNncHQhLCY3Y4p954TTvqqKashJqSCxV",
  "key16": "51JymC3CRxa58ihTmhEAafL6CA2j5s7VqmTohjM4xVcophxKq5edZNxGUSpzajDfQQjLKuBsnNkSh9kTy5V8RDQz",
  "key17": "4viu3yVMYaFXyPmTaAFbfrzTcaF4Kt25uhJrb4YynkugNrWEcH6vLpBVvDg9ChonVktyKaFiUvnPiGLWTnvvYhZw",
  "key18": "5Au1EUXdZAERuvuVpE6atMqSBFV52wy5mdfiQZ9CgDdXXLWdWsRTDM1JxP2eQoydetouxSwHAGpD2x3fBm1hMpK1",
  "key19": "2pXxay9y7Z4znJskqV86Koh4oz1fQMhwK9sixgQDyFD5kW6wWKstssCfK79weygHJQnmURPXU8GijAmAVwJ4jpjj",
  "key20": "tw4kN4vr9Kr9QR6dsgryzzDkdijixjd58aJ7bFMgcMzDAnDPtBh7E4SpgSGrMM6aWhinCWqYs4BatEEtMQ7DqYd",
  "key21": "2EmyV9j5mC8rgD7sZ6yV2Cpv1nBHvoQjV5oZNh4E2ro88J9St5M3iTYeLP2f2brjXDbipGRTJxFdM38vZk2t5jcB",
  "key22": "S8uKYur5SeUJdWsj3uQGb1ikS5XmDcQ8L4oNB68YiEpqmUYiVbwxQJoBTZk23XtDYWESHS3PiquYsPcusmj4gcu",
  "key23": "5Zi6wD7PvgS8tvVyK5SSgGdYCYXNXD2VL7ykTuYm5yJR7S94ajakTrUEb2bgtKjms7EadkqmqT6LZfRPhknk7fG7",
  "key24": "2TTM9Ui8Q9pCMuFrraR3vvWbPmfvYiKzYZqqWSYZZueJimbSCYhQYR86aT9bfE8TbT65E7BoKQTVkYYJViBCYHYS",
  "key25": "jKvAhQaCTzQendVFUxCvd6f3z14JoP7RmfExDNHhNgaMwyF72UyKxhaCFQBiBmAYAZ4rKQiEncvAdJBfN5tAnMi"
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
