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
    "2s74HSTBpAaQosyjBB1hkWUBKGVu4C7TLg5ESvjZE7PwhGHXvtYHUw5oJKX8iysWrFi9WiizzGe2jdQ3eqG6kh1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35pJJW9QADd4CVBDjBP6xCvbwPezrezcDYkyKMUGdb5BLEwPnzPTumXd4CAurJgN5wVa6pXaLuAcc2coyP9We4rU",
  "key1": "45FSAAzSNRs8sDNsejjA8Ta5B75x9DMCwQ66LTC7iLX8aoT2g9nNsxDDybKhZP1wNbZWYsYgTZFE1r4LUMfXHSU3",
  "key2": "7GoZnMg7ZunyWa3RTNoVAfTSBNUTBVqvo5Wwx7yt1URT54g3Z4AzP56GatGPkL7cPDNdaGEadJ3KSGVQrzyhXN2",
  "key3": "4WAuWArA9Bw9ww7hSmMgQDJ27Y4r5qppp3mdtwuBGryHGcVzLstQofMH3Ch9DL8oHeBS4RdWMQEx6TEQNUWLoq5Z",
  "key4": "39UTs12ueAQDjf45F5q9b32T3dnJvNa3W5tZNZLeUDZcFp2kPnTM2hQY2eeodpLZjLBCt4Je234W9mRDm8anwtku",
  "key5": "5sgT7q8cPPcG1FBWaj65Rkn1SPYWjdrFAPsLBsFVkuUqf8GnLV6ik1Ee1zprQ4XkmJmRZnnjdifgKagQSjdLu2gN",
  "key6": "5dRkXWjtKoLpL7ai5Q6M4DQh1ceGhU6v8SM5acXvuK5Wry3urwsSmuW7VUirLJL4JxE4SNnM5FxHVpvE9VsVvYyH",
  "key7": "5pXcW4ScwSbfUDG47kkudj2sfMuTE4kHSwoa5QtEVoPghDpqjrKpQeEQmezyVXxNpunW3BN6cyvtWqFqXMcQRnKf",
  "key8": "5uvvbvTY1d6BQdcosAJE9LQ66K3peGs4oWt5ddHn7nxZFoUwkdVX3XQtGwEbJN42t7XSodSbJ3d89kcDUQAtx1g6",
  "key9": "3tw9WYkbpAkjy7bkaedWbTHo5doWeGXTMtiuwCb837z4sQJr7RoNbXLDj9JkozQ6DdFBGrrPA84ESEiMwrfcMKm3",
  "key10": "3JMX3xWU2VWp45WzWCcfyagKCCJLWoa36qKD1LVusPT7E8nLjEXveNzbeeXw5SY7VKFG7UigYxQMvoNBkthBH3kc",
  "key11": "peKQhcsFz1rFsW37TvTceDxXRZ5X8p2AoVSxjfaoFfBLUpekbGtUp2pEf4QVxfgBTWG8kueJURvPEoZyTJMmcZ2",
  "key12": "59Ubwbiqfpc2sbDsRkzm5P7hxpZ3q5pMosSPrkRkycKrBZeqUkZ8nggpexuJcFfMh7bgfHD2mwCor4S2rB7sq3q4",
  "key13": "4HX9T7dSTcRLEMrYBqYsXfum5ZboCBZsaXkcpt6oov51PZv21kuycNyTsdLxnYAXABJxKVgx5LafqfHmTvWeW77H",
  "key14": "2bvxsAx3PGofSSPvLJvFhfhJxEiADu87obPUuaP5xMjNmK4ZyvxCCc4jeE3CDZxaiuvH2PLfrayEUmgRYS5ERFt9",
  "key15": "3o2R3tgVSMRFaMyqbLXh2MCzixMNsbDzcjVvSFgMbkvKJWEcT5BA8JdpUJHsQHhYSkoCSTjWTA3kv8mGkftKmdwf",
  "key16": "57mLyJDvqL9dbaM8jLp51n3mWYNJ7FSrFh5ngr5CsDxn1BnhRBZZtdFyfc3ApaohUEWwJH7ZzCGjyFinL3MgY17x",
  "key17": "4eVVuRPhtG2fCB8JNb3N2PSriPQ2ABS6vH5V2cfeDrMcEppPP7irjUz29Qx3CvmXwkskR2PUMcBh2o8QUb3J3pDu",
  "key18": "4bD3RzYBTFbbtQhDLYqcdWmXZSwyiS8T6ErU3XRgmDFJtBepuMzhhmGzGzLaNfPEsdYMAq5VXyuSsDAVDitoPZ1r",
  "key19": "4amti6vw69XZ94yPmMw2XFAExP2Y3FvHxpsq3Wet4dYkge6oQtYR3jPoBPFJ7jK4J5ipxL2htxE12u538yGEPfJC",
  "key20": "2V2Gr29GV5iJzzP9kHCmMk18V788Bo8jsFTSuuA9SSqmGG6jkvdF6J6Fb2djA3zXWKanUdELVxiD7AP6vMDy2wB",
  "key21": "4ugjTMcYDxAUVsYp6yBjxFf8AGM2vKmrKi17biUFW4hjjSmHHkCivB5NnDsiuvgFXsLqj9N62SBonZoLJBgTXGuE",
  "key22": "4uqPPVUYss4edB82rYAz723k9PA786mRQadg8vPGSpNFwDYuzruwp5JkSNm4nyhN4tkGGdia1bRGq7Z5cJ4TygG9",
  "key23": "3oFPFDj27B1JLf8yJDPVFnmr6H2fSEmwqrbNovPzqUZbeoLoao1k1E8SVhb8tUZGpGqD2RBdheTUwtL6AWexrNBz",
  "key24": "2UKgpKdJkbG97KUQGGDAQGc9pkscBXBKnvsUfe2rxLTb8bJdGHSQWMyG5vgvYLyjobhtJCvwKDHhu3sREffToXJV",
  "key25": "5cvhxBUmR3Yrbb8YsXNrm35EKTtiHkruqrm72WsNHSVMwrsfkB1S7fR6f8kfp62hAY9jxL3ekKKceHCVBwwbae1W",
  "key26": "4Dknbgpy2GmNdX5WibnTn72kEvHrwgX4P75zb4bSyrqRhRAaXoc83u7Ewj5GcP1NwJqGizmdotNJVckn8uX734UP",
  "key27": "5myRmTo6urUgM9h9n1tB29rjdpgnvEQsda2she1nDk4cERb5TbUjcnYiw4DhbMRLFkRicjBJezg6cKHGpW4UJZc1",
  "key28": "29GqM7CesQ2a1gCY6Y2DhMgN7ZGEtenrENWSJdMbRq3ZxeEvojujbwqXPk1vzLh2Banqq3qHEyDqDiCaJzxdWJSJ",
  "key29": "5jtTGC7ZwDUosoxBV9vK5BprjawzTNy71XpVvPrGuCw79eHpdvEGwBWgYqH1pKKzt27Lvw1JinPUiUVMzbHbU2Ni",
  "key30": "26AAEZr8QWuFfytfVtGMGzgrtb76ATh9BWKs2p6VesZ5nbM7xWQNe9tj1nC7JLCjv8Kg3ZMdRvNxTDtSQXkYbwpg",
  "key31": "4YhzJno5o4bNwgkLBcwYDFTYvmYyXPtQZyeg1MQfqetvUDcqQUey3or3AWTzPVMqRMZghygVqFmPqdwBnYC41ytT",
  "key32": "5LPKiUK3BfAiDJCD6M7rUuBSXs9SZRaDdBXDeRLCHQGXrJYN1JB7XWCs4NQvYuFcsT4ouAXsGtcPFXrm6aGyeA1z",
  "key33": "4eYcmtdzy56q4F9vfphq91WpiJKJUQCjhNjTxacPR7UUySce1F4EVTQJbs6VhHjRi2pKNRHe35BNT6wKDsPypJ8",
  "key34": "47XRVQiyW2LVbwj3E4ECRzWMswDoGAbJsrdaGpN4KkQAVSYR7g61S1BNqZs3ji4H7vQRvNWA5EhQvfJWtcZkTbVe",
  "key35": "2aXqp9X33d46DNDo3Cx6oLtgPhfQZfGHpo2bcBBrKLuE5ybwGJ8y5tUn3kuP5XrzJUkt23zNVK39cQk4LYARYuGK",
  "key36": "4jC9GXsCiwyQ9TqzR3YmQc8gsUMiDG8kuMscfXPJ5X61WufiDfBnWnWBZNbDV2wueEXtynJve9ZWhrfEYKWUWxuj",
  "key37": "4wk6XaARsnktujt1nhojQKoyjnJ84tXLXeGFLw592x8xcvTW5Ksdv68G9D2N7qzaXY1SVrCmGpCkuq5dLrTV7AZs",
  "key38": "3iCPNCTVVVkF2LVTAVoSNwMwM5kyEpSjTU8MQbN9pinw3YY7xCsEukChViboFpV7XEYjE9RZPUnD6hm8Fap22Yst",
  "key39": "fYUnB3VwCo5oSwYRD1uVepuhk1PoGbKg3GTftYDeVAopf4SLFNySxbA143EqymZ3n9XCNhTyCoNKeo2Unq3BEGU",
  "key40": "48czp1uhkhzuEHy3oMJpPgHQPa4o3Jv42NiA2LXtCuo1TxaobASoye71Egab91Hi1CcFUWvQvrzrjEWV8zTHMWfA",
  "key41": "4HLk9jQgbaz2utgQqGsba9mUEJM2Rxunxk8oNpi7HUv9tNWZXzGagB3BX4T6owVn62HXuRhLoUBA6AmTFx9vfMWg",
  "key42": "3ZrpkCoEEjzN1YmEv2KDJ1JmiLuoYh7mnr7ufLQaAqozetNE6fVHpyHZn2pwwtkAqx7VZTDFaqjzjQcN4Npa11tp",
  "key43": "EgfeeBBDETLFaNTjgKZQyJ8ummTdN1q3ETDaGMkx6tY4tSPUqo2a82uyL4hPVVqZNf2o1E4w8m6mUGNuSQfpvR2",
  "key44": "5eL4E6ErZQLDQ55vrRHVd9HTUBegWKi1v8QgcKNjbDNzGYt2Pgce6LdAxvvUGahg9Tzv7Fjoz1cvs5QxhjbHfmZs",
  "key45": "3P56yazn8X6trhCmybcpubjZbtD8fRUbCn3pjwWWtB8vJ232WxhRQW3ahTSQ2jn4EV9ZzZEu7wJyfqn58FPbkDsm",
  "key46": "46tcHbnuener7ShaLt3ETdaCYCE7rvE1f7LN4VWnUM8orbn34KqvoxUTdBfAizLNiaSdvfW5WKuAMcLme7ccD7Qk",
  "key47": "2ySkx7bHXqwNC3tZbpV4jTVf3ASRQMApTt62N5M1WSBmc6YJuEhivbZvkEfiYssAJ6EUuCL6Ga4YXB5sED63eGWh",
  "key48": "3Gf3hG68Xa3R4egKNt52aVYfgGvALFyraqJLtzEMG268ouNbcAWhinCWemxq1CW8N1P3caJQs6FztbryaB4Pqk75"
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
