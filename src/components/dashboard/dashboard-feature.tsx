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
    "45hpxcK9aZYSqbypyoaVZ194oFSbnVMtqWame4cdvEYJEMyb1JLYJhUQuNT8RXooD3KqKdvcRzMrT7TNMxNykUGH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NyAhSUEjzyxRPeAMs9WJLp1hY3HRhQXUW48CXQCxBqFiMXJ4kuujk9jUBQqsu2y1yuE1qNKnS7sXA2bZeSwPndn",
  "key1": "4BvossgMpfo92rtARx6yYMg3ckqvaCeMqqmrS1X6iw14a6JfjXYX3F9NqsQ92bbiSvH83VMpHMwn8ZPkCn2Qg1Cp",
  "key2": "376byW8KXe6yXmJG8D2wjqje3ZYy4uZ3sbh2TEta6gBa9t49j9f2FHTXnqcaSpX2K5i6YRNjWXNgXMDMc9YUEmB2",
  "key3": "YPXeWsmS7384dnf36PPd5EZdH2Hf28XR1CNhrErcJwnAdCuCvKXJXKQPZPjQKi9DiQyKvs2KqEqVUZpE9LFeCAD",
  "key4": "NCxz29TAqEYJP5JPmEMfEapEHDhKo4CcrZ4qCfLzYPommDH1wfTwYCxEX1DocobatjPf49NfrM9kDF3doYyV8ER",
  "key5": "crSrKYfRpgSrQbJTWjcsuarU4wtR3zLASZHqGbeLJhQoewapXZUZQAXARyBgukB2Agj3TLTWi6kSnWakCnoFCdC",
  "key6": "3F29B27PC9DTpFNvcP7zDuYW2bDaboVEqZu3RvnLe7MeHtd4vhdhj6Lqc4R2s6soY3LPrUw71YnQnmtQYVZGdgn2",
  "key7": "5x8CsTmuQpdCodYg1x3BRwZVdaCLkv1YUg6vV6KJjvimfXRy74Mz1yEqFc9ksobHCKbwA94Vj5YmTQUvzbJReY3w",
  "key8": "4kXMHzDyaZ52CoYcWxES6RyBKmHpPBX8ds2ki1SjiH4s8xQUhqJmVDpQFJCj87FSVgiWcQLgLZMVSRM1913RJUNR",
  "key9": "2XEvzVRuaLDAz79dsMdGFXxZcM5bPvN4ACq5RtFiHNWqSYuVpMFFHB6Zik6173pfejnFMvBUP3sHR8679uk92MmS",
  "key10": "5xdoHohQArKbXM3ZD9WkcdrMNQqTTzAonayLgAq4q7ri4PpR8zvbYj8tq49tsD5NFxh83AwjwEcKCEReMDU4xsF4",
  "key11": "5zpDxmUYSda8kfC8ykxHV2rdqbs7VNXAQG69JqzhRr7sxXcZ8JSVXwaSCVGdwMLr9CmW4Z1vT7MrLbE1BBGe1nKP",
  "key12": "4vZWGhuVvDCxCYScPmHxwLxMW8gcy7C9eFZydT1SZTinMMS5GK1eBgKgS6WiK2M8G3TfXCbCPvHpBNXY2KeWTBAu",
  "key13": "488LaDWX3ePMv5R9B1nLTrtb6v8bdcoPtPxK5zg6hSquvhS4GP223zsmJWgWpFPDg23bBpymXcg8bEvzb9AjrHUg",
  "key14": "4jskoBu5iMyRdMxZhGwasUHcjX9vjqrnx3xNojuZimVYVBR9ZcDsTeG8TSF33XTPwCd2c3SoZDVB8rT9xycJZFws",
  "key15": "5uzkovWfvHiqZ5ueg3YUHB9PS9qtsWyLC8JYUZjMEAJ2gDn7DnMDgarNcYAFTrFPHan4yew83WZ1zaxVXR3vmSvY",
  "key16": "2BUaUNbLdTcfe1izcAsSjvkA9hwJDxAPY2nduW3Hmzu9pu9wFBne5R1ZCg4dpEPXDVyeNWjaeUCHH5eafo8TXCZu",
  "key17": "5uHJZez4Jqktro9kAG6q13VM2iRaz57xysPRzVUPQ5TCrCjggMjdQk9gWW3xhzTYhSez31ge5xzfDN1GLscxoQ4K",
  "key18": "2HgSX2W7Jtck8dqKExhmt8DmsoNzcLC5MVTucyzZ1J6F5EDErdsyAzF2hQmw4qj4a1Y2UAUULW82YtyzMq6KXU1C",
  "key19": "5hPRg69RJgDMNG45h3ShpcMerED6oSd9w2nkxF8SbAzRAwNCoceLBahsuT5rtnyafhLM34xPchEB98AfoRb53b44",
  "key20": "qurfYQTRfGYvr6kzNW5wpqegheqzD2PfZARecGkU19BPP6eoQ1QJnGgmaRfwZGfaRubJLg7kiktt4fcWzoZTGDT",
  "key21": "2WUDQG3796tk2cD5pNAyTvUfC4WwgC4MWA1QAryxsqi6a3ktW1fb2S59PHr8os9RNuu5vrY7MLvXNU1S8K3KwYes",
  "key22": "3RNTTs9x6HthNJkgmnuLVuYQXsKvF1hF9CuFBZ6TH7QAWnb9g9cNgJ4RSHJ8CraMqS3tjVKVByqtPukvbhMaryiK",
  "key23": "Pibs5cqHTHw6bvyCyQGDe5L1QSu2WedCg1FKZAM58c72evJrcUTz2qhcSqdkFuuKopxdkfWqTJeogbAJyh5k3wL",
  "key24": "1BoBJEWZwH87A598vxxUhQF2y7HLinDzetsv88oN1adRdDd4TbqEqhTgqa7TVEm7bdTTkh2BUh2UJpFn48KZFFU",
  "key25": "EFt46BptJwEHM5RYbxcK26Ko3EKj7zmrSPHKJ2WZqA99f8Z8WmPQEv9apSkz4Zj3M6dgz12RN7GRUs2gkaoxcpi",
  "key26": "4VTNkmx24bbpbEYnUMDaiq5Q4f5AVZ22zwkW2JQXdSpn1WCATNwNUt4gsPEQ9azkcFQYLf6Qczow25EaGSiDJGuw",
  "key27": "5jqk2JeCVY29zw5zEDtMYpZZCq3tGnKUHPfzqxzUWmghwQ83Nm5ddPxFc9pbogPQYGT7axbSReXFLm9X9Rj8S2o6",
  "key28": "JJzyjCf95XU3bS4hQ3KJrSdZWttL68Zg4EBTaUeGbY8qrnJKERzrt4NF72PddVKyGcqzeL7j5Fb8Ug76as2ctej",
  "key29": "2nEzvpHTXkMjGDZWi3x9KNDE1V8eYdLPw2URhfM83FNX2Hb141UDNYSkYzJRLDMBFRz1nb7vU7FowxbM53XPBTBZ",
  "key30": "dyKULnAgGLs3xUKf8XdMZGxd7ZkLTNHvhKhphJJZjaxaM3omgcLpfCF2SXUQWgb7KGArzycKUcH8L6cRpyD5G7c",
  "key31": "oKWHLXt8bKZQbMFUML1g4gJU194eu97AiXBtF3JCuc2jpKaX1ndoapisjM6yxgzVsjq39pe9YC9VvQrNNyFC6kW",
  "key32": "b6Vm8waxCK73Mf7qDxJJL9HkcDbGkPLAhwi1P3D2ijpykvWBD3FsEmLRqeAWJQ6ZaLxVVwEdfvFL5hnPpGp64KQ",
  "key33": "4eesoR7MStu5z5PDjJcdCX9WMczie59JMqNLD9rEH4qgnFPmyaagdtRNBEu3xmXyF9gcXYMBqyWVde4J2QgeiaoZ",
  "key34": "522nyz8Z4YoPpnwWAGVEfA4P2zrzbkfLQMpSTG64QpH3Xr1vHEmWhs7UAwiTw3XhoCWYpKLndJ5w6j4Zsw83zKPK",
  "key35": "4UBB6sMeNHWrWEM3p2TDyRXMSZumhEWF3pPeTJXJ1yQk8wNfqKyrYuKP8STcjjkHZx5xM52TFLTpHf4ngcCXgRyL",
  "key36": "4kefKSSeDHgynPzu1mHxRjZKmRaZqcVLpjXBgSPPJVuAkpyUWqEGVyc3VGeriiq2ryMVQdCB4yjqoFdWQZMHXYmS",
  "key37": "3naE1dNm1nVKUPoyfuScuk52Bw9fPHxgHHyLg53LXtCbSgu4DZaXdt786BCinuN23syZueWaAWsbn2cQdo3CJU31",
  "key38": "3aYPdeAbFWyffRouxHuAyZpvcSbg7E9H2tWzLqzGQzvqh1sX9oMYNFWfMj8KdKwAPy6MgR9TJMKz2uhNoMG7c2FJ",
  "key39": "VXjNCAWQV12u1mBg28ec1ZW9d23ZhpXc4kQqwmJBF72CJ72BbqViQBDw2MmzcoWAShp1EkUSYRJTbQpnPAHoCr9",
  "key40": "2w1128mGa2ucB3oTsKaUiKzk4xpGSAfYW2QJK2vQqCg7m948Rp72NM1v9KjytiHmKPgu7Qrty4DpEfvsWt4HobGy",
  "key41": "4S8ctjx23LYLhwWDmNrpxibVhNY5SHScrmXwFWPXCVrZjXPkAM1TxGpXVFXeDY8d919iqoqy7DHkqXeu8qpwzwn9",
  "key42": "V74oV6yzJduFHPW1dB2fWRf77mmsJ6eQuB6rNBf7GFMkVzGgCkd3G9ZT52z23zJgPoaYrgSLqn5j8xs2xBophGb",
  "key43": "ik8SXzKHzj4aFWuFZGJMFHnsQJK5Tf3A1nt5JZL4iadEVy1vnYdtx5VMH89VJViRGr2bLJJP2yvwnBhyRFYq6ii",
  "key44": "4juxtxN2ywVtJRjL27uZcgQAaTHJVvqzZTV8AhorMzRomx9oTXSy1gyfVvZG6Z6igfMZyLTeXwUyCePZevLMs9i7",
  "key45": "2ihTGtUyNvW8TfCsJsuwtHfo9R6U7GL8KafSmngVcJkVAkvaqcRzq9SVLZNbUie6VHyRZr5HBpLq2JE1sCVhHxqL",
  "key46": "5CJdvz7d6ENCGfr47tJHK2f8HceshubH9e9Lhb9KDXiZfi42J1TuGBTaNA2GLBTLeKdWje2qFdF6FbRn4pt8rY5b",
  "key47": "5AnjRMRfZt5BrE4GAFZCJFntbutgRUNCReRQPoUJqpj8JK3D3JmbrrvQ4AmcPZsTi8fhE7FtbyGMXj5X6Zk7WJ3i",
  "key48": "3PwJXgbCskPaPnTP3CeGVdMWYPYH6npRxAWPCjgMXriuYWLzyykYfyfSkCt29RRb6vQkx55oRHGHgJG8zuaU4Jgr"
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
