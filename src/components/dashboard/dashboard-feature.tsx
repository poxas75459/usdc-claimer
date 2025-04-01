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
    "2BgyoZGiQSZMknXCUu7ACzSdo2RowGxv3y9JExHS94mEpmiPWi3xwCeHVWa7d3WfGEzVHCrMD2MnsSnDZk88Fm13"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LhmUxm8G3djqvGD2qKp56fJvK16fdmw6vU5edV7kR2G4UDUrzm2GxPtrTaHGZKTdrNTLVcisQjVQgqiDb8Ggjdg",
  "key1": "5oFatueQy6U8oBjXmCtUfLZcdhuuu2jJUNLDcBxp2EsVnszEsiZWg7Mhq8enKrFFHxrAYfVhipt9nBfBryirjkPp",
  "key2": "3NxLkqSU4YnKhibnkaeMShc9eqV8ymRgFXhGpXJHmvS5QPhJtTexVnZKmBNEcDSdiEptPvSEa24iQURqLVFw4QVS",
  "key3": "FTYv254RDLxdWWrK2yMp5Dxxp6UtVm5221bnhwdpdmJ2B5d5SFLwmABituBHYCXDssFBWakiv6xVPk1kGukqVTD",
  "key4": "46NGLn1kgBWM4ZwAes83mjLGs8etJUK16UQFNNjPJEGKZebAZLwV76PXUCgn62cB1cyxQFvc7946bzAYMUyc7UuK",
  "key5": "3oWVyHLAgmS9rAjcyYAQMxzZnY9u7KB2Xv6DLog2e7jzgSrjrpvGQtsuvBzGce8PpYjEUHxTQsmUopBhpNV4QraU",
  "key6": "5pnY1p5BC5Nz9q6Lirg8xNvh1Rru8evHoEfJ8oLEUJQJ3xeMMZVPjbKFTEjWjDfyMX3Z3amqmdkEMP66H3GajSji",
  "key7": "2BxgTMMjFreACbEDG6bYXJigsyppTTtthcogaT1cEoSQijGxjcftDLKjUPegzvf3ay2aBDUrgukPWecPqRYtSjm8",
  "key8": "aUoBJFJyosyQ4nuRNo5haAWcpdkTPSiMAN4LiHmop6Zn1ysFy65YnkQZE27zwtQfxCQpDD9YLQ27o5SDSNHKCSt",
  "key9": "5hS1wmXpFGb4SzJqdMXXX6yZMgD8XrJtVBLSPv23zePCB81yo8HeaXpa8thZmwb2pbnED4YqPFYfi9uHUwLfSQwi",
  "key10": "4XuzfNKpMjjqodhTwXkTQhhUbdxHEDfkvohknxiq94qUgveck1APRcjtomwvZzgAV1c4RM3KdjPtuFSMSqo9njXx",
  "key11": "xjckquqNYKAnwbXye2Bgtpypv9xqtzRFykT68aDCNZfWaLozCbdwQuf5TTJCx2HXaWYQb2YS96z9M55EtnwbYnu",
  "key12": "4dw6d4ThN4RmPVFEX4hgCCxAt4SFxNroQWbXV6CRMBexcNsuQ2ebSdaSuReKDwsxaxuBikvokDevoeKyHwJoa6wE",
  "key13": "33ZzefyVdv7MrSi5dEz8pmNtq4Yf1ai9dMYdwGK6ZoEd2n4ey2XFen6Bug2Pvsr8JEobJZWPxVGCnVrNdnYShZic",
  "key14": "3B77KzsGi4hBYumtduwxndDaxY1T9ar2oJzEjGRxrTv6f83hhQqUjVrRocggZGGvp7z393TcUA3xWDT5T2CQJyvh",
  "key15": "4gcrjMbBwXVhKcjmuoc9U4D2t2FnMUvNoxmHjK5tBzLiS7sdQeZq51HUHex6qdcZgBCuvo9ZGK74mTBwFgwZXZxU",
  "key16": "ZNcj3NtkB31sEW79d1VRRgoDk5Em2kjrtP6fyKbApfMtzGm1Nzsbc2Y2kWibH9cp3aQctj3TU5QWyMv3fJCsSVz",
  "key17": "2bV2BC5gsp39WnLdAkAZEkqM4QjZ1yoF7dTdQv4188eUSsnMyvzigTCDWyYdepqs3FtuL9gZMvvTAW7PeWGjD5zE",
  "key18": "WD3ELGmamyywj7QjkuqUVLnbxsHiL5fgCCXBLXSBG4jbQxvQpSYFtuD3JmvSjiu5jyWeXvfMXUy6T3gNNBT8xrQ",
  "key19": "4Na2ZTkQ3T7QezMHPHFXDLqHKmbmoag9MqeBqvVJ7EJKAXiyLpEMpHgSXvjibFZseYX7gxdG7SzLH8VDJCjPqQ7r",
  "key20": "2hDx2Vk1daT2M5qga7HTfFuHxDANhoMJjsDUv5g2hKLwa7jdncTxHfQbAxZVWmG6kzL5S4XsvWJ6TV7X31VTMWuF",
  "key21": "3WFuM4J9pLT3xuJjKnavVfc1FwBuXcLd2nN52qG3wHe1dRdAeHcZX29GqQP82SSuUqWcP4CV8uG9LXCxVRPcc5rv",
  "key22": "2V749epPCRCzmHF5k3iqoVm5THMQj2z5dp8JppRiDs1E8PsJjp3UYiELW5zvN63XrtQYGEpqMsWikujYhcZjLTyT",
  "key23": "4kgD1K1Em4PwX7UMAobQzDkfeYA2EZ9Hr3fM7W2JVQQSjqnEuGVrcGswUTVREiZ9bDaUXdg4ghhCqG8yFhj2m1Bz",
  "key24": "55wZQJsMNLxvVQ8ffRmp2rurkuAQeyPUqbFFhnXjNhNVAVegzJzZpQ8aHzDnPrSM9SfK5KZ7v3JjQPwCp8KRXDHQ",
  "key25": "3BXkbaKt8cBqqAGqfRWFQYyuhwzsY452W5NCNyzi9XE3VtgxVpt316eBkmFXcvBr7e91SwxnVourKn1JgMBgDCRK",
  "key26": "3dk84pZ8wurMN8nApppBP1UMEA7413vWL7q4WYeqLtEKr6KHWXXChxx4ssRUiwi3BG96yN4YfzJtq3FcdMGXhZkC",
  "key27": "YdzQ1T7aAYR3JdKQDHmzSLcckJdDeqLTY79vnirP9983osU1NLu2eYqEB2gn5VXF7pfDMLbTRvA97K2jbVL5Bns",
  "key28": "4Gm2UihwGUdBTvQkeA2vWv5i4peJ3PSsQSq8cwZVyGHrH1fQyZZbMkrYenZ51NG58pTpjLjC6oPcyVt7s612sEE6",
  "key29": "QQarwNoSf7khfFomdgLQSZw1J8547JkaGd7rbDXDc6EwqpRZhT6E2jfA4AHZAm1kfUZ4m7CuXxijvpsp57ymBHh",
  "key30": "4A8NMHJ9CFfznTk3mWM9t9HKmUE9po9PsT8bDEhZVfA36NZtedXGhUhks4iFTVXzSsMyJSCEVnJXUWgL4y8JL47A",
  "key31": "67A9yW45TdbBKVdvqjvoTbtcqFVxdfsQYKaphcwjWV2ueZai59pzwSMkyHWqyi5m5jp6odbscAbeT5vE5ncKHYhf",
  "key32": "62eazhoB7NKAQkqvdBJYVoAJS5836vBgKatfDgnCDSJ7YCuBcLR7hKZVGGWyUryzupPGzeJurbstoJNtr17aGnNf",
  "key33": "42VwfHMdA9tc3JVTRDBdDoozMX5XHZNTATr9sTLv2SkbRXGWXD6quCgFRf3AaqQJ7BXwNc5C3nBpP4rfJiUv8L39",
  "key34": "3dVHwBqDDqG6hVsSJPVvGRgVTkUhYf1dkLy9EJT3Q2sj2CAeVMDQLsM6jxxdRBH7vrqYZtXVhvR26uwLNGEZeonp",
  "key35": "59XWhEdMCxzRgvkeTHCu25xYkTTRE8XA9EDvxUS5pyi4vfhf2RWEPTG9bKtGMtiSMYtJBumG4MGDrp9RPtam9tY",
  "key36": "49kpa7gH5uVFQSh4K9nQqyf5XPu6gW6ATMLSJvzbLU1fRTdLijuwhUfrXVw9f2UmMQbenkWBqJpSCtvwvgz1pAGm",
  "key37": "H1sfPDYvztAbj5uRk85cB6LrhErkBiouamR7Rz45Wpys8LZqaN4ykK6TVUm3RNRtZjypBR4rc1zCRRLw1nG28ZE"
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
